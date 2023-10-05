<template>
  <div class="container-fluid ">
    <SearchBar />
    <div class="row row-title my-2 py-1">
      <div class="col-lg-12 text-center">
        <h6>Newest AV Added</h6>
      </div>
    </div>
    <div class="row d-flex justify-content-center my-2 py-1">
      <div class="col-lg-10">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(jav, idx) in latestJavs.Javs" :key="jav.id" class="carousel-item d-flex justify-content-center"
              :class="{ active: idx == 0 }">
              <CardJavCarousel v-bind:data="jav" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-bind:class="getRowScenes()">
        <div class="row row-title">
          <div class="col-lg-12 text-center">
            <h6>Hot New Japanese Adult Videos</h6>
          </div>
        </div>
        <div class="row">
          <div v-for="jav in pageJavs.Javs" :key="jav.id" v-bind:class="getColumnsScenes()">
            <CardJav v-bind:data="jav" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <NuxtLink :to="'/javs/1'" class="btn btn-more">
              watch more Japanese Adult Videos
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="!isMobile" v-bind:class="getRowIdol()">
        <div class="row row-title">
          <div class="col-lg-12 text-center">
            <h6>Featured AV Idols </h6>
          </div>
        </div>
        <div class="row">
          <div v-for="idol in idols_random.Idols" :key="idol.id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3 no-padding">
            <CardIdol v-bind:data="idol" />
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

let limitLatestJavs = 4;
let limitIdolsRandom = 4;

if (isMobile) {
  limitLatestJavs = 3;
  limitIdolsRandom = 4;
}

const { data: latestJavs } = await useFetch(api + '/javs/getlatestjavs?limit=' + limitLatestJavs);
const { data: idols_random } = await useFetch(api + '/idols/getrandombylimit?limit=' + limitIdolsRandom);
const { data: pageJavs } = await useFetch(api + '/javs/getjavs?page=1&hide=0&variable=id&order=desc');

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