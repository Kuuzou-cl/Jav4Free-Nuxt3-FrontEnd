<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <NuxtLink to="/" tag="a" class="navbar-brand">
                <img src="~/assets/img/j4f-logo-black2.png" />
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink to="/javs/1" tag="a" class="nav-link">
                            JAVs
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/weekly-top/1" tag="a" class="nav-link">
                            Weekly top
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/categories" tag="a" class="nav-link">
                            Categories
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/av-idol/1" tag="a" class="nav-link">
                            AV Idol
                        </NuxtLink>
                    </li>
                    <li v-if="stateUser" class="nav-item">
                        <NuxtLink to="/av-idol/1" tag="a" class="nav-link">
                            Favorites
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/history/1" tag="a" class="nav-link">
                            History
                        </NuxtLink>
                    </li>
                </ul>
                <div class="search">
                    <input v-model="searching" class="input-search" @keyup.enter="SearchQuery(searching)" type="search"
                        placeholder="Search code or idols" required>
                    <button class="btn-search" @click="SearchQuery(searching)">Search</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
let searching = '';

const SearchQuery = (_search) => {
    router.push({ path: '/search/' + searching + '/1' })
}

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const cookieEmail = useCookie('email');
const cookieToken = useCookie('token');

let stateUser = false;

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

</script>