<template>
  <div class="container">
    <div class="row my-2 py-1">
      <div class="col-lg-12 text-center">
        <div class="alert alert-dark" role="alert">
          Newest JAV Added
          <NuxtLink to="/javs/1/Latest J4F Added" tag="button" class="btn btn-dark">View More <font-awesome-icon
              icon="fa-solid fa-circle-play" />
          </NuxtLink>
        </div>
        <div class="row">
          <div v-for="jav in newestJavs" :key="jav.id" class="col-lg-6">
            <CardJav v-bind:data="jav" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12 text-center">
          <iframe src="//a.magsrv.com/iframe.php?idzone=5244428&size=300x250" width="300" height="250" scrolling="no"
            marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div v-if="isDesktop" class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12 text-center">
          <iframe src="//a.magsrv.com/iframe.php?idzone=4445412&size=728x90" width="728" height="90" scrolling="no"
            marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="title">Hot Categories</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="category in hotCategories" :key="category.id" class="col-lg-2 text-center"><button
            class="btn btn-dark">{{ category.name }}</button></div>
      </div>
    </div>
    <div class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="title">Latest Porn Videos Added</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="jav in latestHomeJavs" :key="jav.id" class="col-lg-3">
          <CardScene v-bind:data="jav" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-dark" role="alert">
            Newest Videos Added
            <NuxtLink to="/javs/1/Latest J4F Added" tag="button" class="btn btn-dark">View More <font-awesome-icon
                icon="fa-solid fa-circle-play" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12 text-center">
          <iframe src="//a.magsrv.com/iframe.php?idzone=5244434&size=300x250" width="300" height="250" scrolling="no"
            marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div v-if="isDesktop" class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12 text-center">
          <iframe src="//a.magsrv.com/iframe.php?idzone=5243932&size=728x90" width="728" height="90" scrolling="no"
            marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="title">Hot Pornstars</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div v-for="idol in randomIdols" :key="idol.id" :class="getColumnsScenes()">
          <CardIdol v-bind:data="idol" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-dark" role="alert">
            Most Viewed Pornstars
            <NuxtLink to="/av-idol/1" tag="button" class="btn btn-dark">View More <font-awesome-icon
                icon="fa-solid fa-circle-play" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { isDesktop, isMobile, isTablet } = useDevice();

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { data: getnewestJavs } = await useFetch(api + '/javs/getlatest?limit=' + 2);
const { data: getnewestJavsbyId } = await useFetch(api + '/javs/getlatest?limit=' + 4 + '&order=id');
const { data: getCategories } = await useFetch(api + '/categories/getHotCategories?limit=' + 6);
const { data: getJavs } = await useFetch(api + '/javs/getlatest?limit=' + 12 + '&order=id');
const { data: getIdols } = await useFetch(api + '/idols/getrandombylimit?limit=' + 6);

let newestJavs = getnewestJavs._value.Response;
let newestJavsbyId = getnewestJavsbyId._value.Response;
let hotCategories = getCategories._value.Response;
let latestHomeJavs = getJavs._value.Response;
let randomIdols = getIdols._value.Response;

for (let index = 0; index < newestJavsbyId.length; index++) {
  if (!newestJavs.find((obj) => obj.id === newestJavsbyId[index].id) && newestJavs.length < 4 ) {
    newestJavs.push(newestJavsbyId[index]);
  } 
}

const getColumnsScenes = () => {
  if (isMobile) {
    return 'col-lg-6 col-md-6 col-sm-6 col-6 d-flex'
  } else {
    if (isTablet) {
      return 'col-lg-6 col-md-6 col-sm-6'
    } else {
      return 'col-lg-2 col-md-2 col-sm-2 d-flex'
    }
  }
};
</script>