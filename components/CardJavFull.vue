<template>
  <NuxtLink :to="'/javs/jav/' + props.data.code" class="movie my-2">
    <div class="movie-hero">
      <img :src="props.data.poster" class="movie-img">
    </div>
    <div class="movie-content">
      <div class="movie-title">
        <h1 class="heading-primary">{{ props.data.code }}</h1>
        <font-awesome-icon v-if="stateUser && !favoriteState" class="icon-color-light-green"
          icon="fa-solid fa-heart-circle-plus" @click="addFavorite()" />
        <font-awesome-icon v-if="stateUser && favoriteState" class="icon-color-light-blue"
          icon="fa-solid fa-heart-circle-minus" @click="deleteFavorite()" />
      </div>
      <div class="movie-title">
        <div class="row">
          <div v-for="category in props.data.categories" :key="category.id" class="col-lg-4 text-center">
            <div class="my-1 movie-tag movie-tag-1">{{ category.name }}</div>
          </div>
        </div>
      </div>
      <p class="movie-description">
        {{ props.data.title }}
      </p>
      <div class="movie-title">
        <div class="row">
          <div v-for="idol in props.data.idols" :key="idol.id" class="col-lg-12 text-center">
            <div class="my-1 movie-tag movie-tag-idol">{{ idol.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const cookieEmail = useCookie('email');
const cookieToken = useCookie('token');

const cookieBearer = 'Bearer ' + cookieToken.value;
const myHeaders = new Headers();
myHeaders.append("authorization", cookieBearer);

let stateUser = false;
let favoriteState = ref(false);

const { data } = await useFetch(api + '/javs/checkFavorite', {
  method: 'POST',
  headers: myHeaders,
  body: {
    id: props.data.id
  }
});

favoriteState.value = data._value.Response;

if (cookieEmail.value != null && cookieToken.value != null) {
  const myHeaders = new Headers();
  myHeaders.append("authorization", cookieToken.value);

  const { data, error } = await useFetch(api + '/users/currentAlive', {
    method: 'POST',
    headers: myHeaders,
    body: { email: cookieEmail },

  })

  if (data._value.alive) {
    stateUser = data._value.alive
  } else {
    stateUser = false;
    cookieEmail.value = null;
    cookieToken.value = null;
  }

} else {
  stateUser = false;
}

const addFavorite = async () => {
  const cookieToken = useCookie('token');
  const cookieBearer = 'Bearer ' + cookieToken.value;
  const myHeaders = new Headers();
  myHeaders.append("authorization", cookieBearer);

  const { data, error } = await useFetch(api + '/javs/addFavorite', {
    method: 'POST',
    headers: myHeaders,
    body: {
      id: props.data.id
    }
  });

  const { data: dataUpdate } = await useFetch(api + '/javs/checkFavorite', {
    method: 'POST',
    headers: myHeaders,
    body: {
      id: props.data.id
    }
  });

  favoriteState.value = dataUpdate._value.Response;
}

const deleteFavorite = async () => {
  const cookieToken = useCookie('token');
  const cookieBearer = 'Bearer ' + cookieToken.value;
  const myHeaders = new Headers();
  myHeaders.append("authorization", cookieBearer);

  const { data, error } = await useFetch(api + '/javs/deleteFavorite', {
    method: 'POST',
    headers: myHeaders,
    body: {
      id: props.data.id
    }
  });

  const { data: dataUpdate } = await useFetch(api + '/javs/checkFavorite', {
    method: 'POST',
    headers: myHeaders,
    body: {
      id: props.data.id
    }
  });

  favoriteState.value = dataUpdate._value.Response;
}

</script>