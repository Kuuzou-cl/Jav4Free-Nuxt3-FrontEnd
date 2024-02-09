<template>
  <div class="container ">
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
        <div v-for="idol in idolsTest" :key="idol.id" class="col-lg-2">
          <CardIdol v-bind:data="idol" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-dark" role="alert">
            Most Viewed Pornstars
            <button class="btn btn-dark">View More <font-awesome-icon icon="fa-solid fa-circle-play" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

let idolsTest = [
  { id: 0, name: "Yua Mikami", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/mikami-yua.jpg" },
  { id: 1, name: "Julia", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/julia.jpg" },
  { id: 2, name: "Kudou Rara", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/kudou-rara.jpg" },
  { id: 3, name: "Himesaki Hana", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/himesaki-hana.jpg" },
  { id: 4, name: "Miura Noa", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/miura-noa.jpg" },
  { id: 5, name: "Momozono Rena", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/momozono-rena.jpg" }
]

const { isMobile, isTablet } = useDevice();

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { data: getnewestJavs } = await useFetch(api + '/javs/getlatest?limit=' + 2);
const { data: getCategories } = await useFetch(api + '/categories/getHotCategories?limit=' + 6);
const { data: getJavs } = await useFetch(api + '/javs/getlatest?limit=' + 12);

let newestJavs = getnewestJavs._value.Response;
let hotCategories = getCategories._value.Response;
let latestHomeJavs = getJavs._value.Response;

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