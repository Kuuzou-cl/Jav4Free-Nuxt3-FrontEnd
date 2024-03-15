<template>
  <div class="container">
    <div class="row my-2 py-1">
      <div class="col-lg-12 text-center">
        <div class="alert alert-dark" role="alert">
          Newest JAV Added
          <NuxtLink to="/javs/1" tag="button" class="btn btn-dark">View More <font-awesome-icon
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
    <div class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12">
          <iframe src="//a.magsrv.com/iframe.php?idzone=5243128&size=728x90" width="728" height="90" scrolling="no"
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
            <NuxtLink to="/javs/1" tag="button" class="btn btn-dark">View More <font-awesome-icon
                icon="fa-solid fa-circle-play" />
            </NuxtLink>
          </div>
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
        <div v-for="idol in randomIdols" :key="idol.id" class="col-lg-2">
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

const { isMobile, isTablet } = useDevice();

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { data: getnewestJavs } = await useFetch(api + '/javs/getlatest?limit=' + 2);
const { data: getCategories } = await useFetch(api + '/categories/getHotCategories?limit=' + 6);
const { data: getJavs } = await useFetch(api + '/javs/getlatest?limit=' + 12);
const { data: getIdols } = await useFetch(api + '/idols/getrandombylimit?limit=' + 6);

let newestJavs = getnewestJavs._value.Response;
let hotCategories = getCategories._value.Response;
let latestHomeJavs = getJavs._value.Response;
let randomIdols = getIdols._value.Response;

const getColumnsScenes = () => {
  if (isMobile) {
    return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
  } else {
    if (isTablet) {
      return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
      return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    }
  }
};

const getRowScenes = () => {
  if (isTablet) {
    return 'col-lg-12 col-md-12 col-sm-12 col-xs-12 py-4'
  } else {
    return 'col-lg-8 col-md-8 col-sm-8 col-xs-8'
  }
};

const getRowIdol = () => {
  if (isTablet) {
    return 'col-lg-12 col-md-12 col-sm-12 col-xs-12 py-4'
  } else {
    return 'col-lg-4 col-md-4 col-sm-4 col-xs-4'
  }
};
</script>