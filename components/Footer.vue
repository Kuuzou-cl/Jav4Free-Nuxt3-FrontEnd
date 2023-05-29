<template>
  <footer class="footer mt-4">
    <div class="copyright py-3">
      <p>
        © 2023 Copyright |
        <NuxtLink to="/" tag="a"> | JAV4Free.watch || </NuxtLink>
        <font-awesome-icon v-if="!stateUser" icon="fa-solid fa-right-to-bracket" type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal" />
        <NuxtLink to="/dashboard">
          <font-awesome-icon v-if="stateUser" icon="fa-solid fa-user" type="button" />
        </NuxtLink>
        ||
        <font-awesome-icon v-if="stateUser" @click="logOut()" icon="fa-solid fa-door-closed" type="button" />
      </p>
    </div>
  </footer>
</template>

<script setup>
const cookieEmail = useCookie('email');
const cookieToken = useCookie('token');

let stateUser = false;

if (cookieEmail.value != null && cookieToken.value != null) {
  const myHeaders = new Headers();
  myHeaders.append("authorization", cookieToken.value);

  const { data, error } = await useFetch('https://jav.souzou.dev/users/currentAlive', {
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

const logOut = () => {
  stateUser = false;
  cookieEmail.value = null;
  cookieToken.value = null;
  reloadNuxtApp({
    path: "/",
    ttl: 1000, // default 10000
  });
}

</script>