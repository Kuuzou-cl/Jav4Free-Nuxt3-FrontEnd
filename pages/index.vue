<template>
  <div class="container-fluid ">
    <div class="row row-title my-2 py-1">
      <div class="col-lg-12 text-center">
        <h6>Newest AV Added</h6>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
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
    <div class="row row-title mt-2 mb-2">
      <div class="col-lg-12 text-center">
        <h6>Most Viewed AV Scenes</h6>
      </div>
    </div>
    <div class="row">
      <div v-for="scene in scenes_most_viewed.Scenes" :key="scene.id" v-bind:class="getColumnsMostViewed()">
        <CardScene v-bind:data="scene" />
      </div>
    </div>
    <div class="row">
      <div v-bind:class="getRowScenes()">
        <div class="row row-title">
          <div class="col-lg-12 text-center">
            <h6>Newest AV Scenes</h6>
          </div>
        </div>
        <div class="row">
          <div v-for="scene in scenes_random.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
            <CardScene v-bind:data="scene" />
          </div>
          <div v-for="scene in scenes_latest.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
            <CardScene v-bind:data="scene" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <NuxtLink :to="'/scenes/1'" class="btn btn-more">
              watch more AV scenes
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

let limitLatestJavs = 4;
let limitIdolsRandom = 4;
let limitMostViewed = 6;
let limitRandom = 4;
let limitLatest = 8;

if (isMobile) {
  limitLatestJavs = 3;
  limitIdolsRandom = 4;
  limitMostViewed = 4;
  limitRandom = 2;
  limitLatest = 4;
}

const { data: latestJavs } = await useFetch('https://jav.souzou.dev/javs/newestv2?limit=' + limitLatestJavs);
const { data: idols_random } = await useFetch('https://jav.souzou.dev/idols/featuredv2?limit=' + limitIdolsRandom);
const { data: scenes_most_viewed } = await useFetch('https://jav.souzou.dev/scenes/byviewsv2?limit=' + limitMostViewed);
const { data: scenes_random } = await useFetch('https://jav.souzou.dev/scenes/scenesRandomv2?limit=' + limitRandom);
const { data: scenes_latest } = await useFetch('https://jav.souzou.dev/scenes/scenesv2?limit=' + limitLatest + '&order=desc');

const getColumnsMostViewed = () => {
  if (isMobile) {
    return 'col-lg-3 col-md-3 col-sm-3 col-xs-3'
  } else {
    if (isTablet) {
      return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
      return 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
    }
  }
};

const getColumnsScenes = () => {
  if (isMobile) {
    return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
  } else {
    if (isTablet) {
      return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
      return 'col-lg-3 col-md-3 col-sm-3 col-xs-3'
    }
  }
};

const getRowScenes = () => {
  if (isTablet) {
    return 'col-lg-12 col-md-12 col-sm-12 col-xs-12 py-4'
  } else {
    return 'col-lg-7 col-md-7 col-sm-7 col-xs-7'
  }
};

const getRowIdol = () => {
  if (isTablet) {
    return 'col-lg-12 col-md-12 col-sm-12 col-xs-12 py-4'
  } else {
    return 'col-lg-5 col-md-5 col-sm-5 col-xs-5'
  }
};
</script>