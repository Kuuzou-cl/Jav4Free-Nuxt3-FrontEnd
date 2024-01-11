<template>
  <div class="container ">
    <div class="row my-2 py-1">
      <div class="col-lg-12 text-center">
        <div class="alert alert-dark" role="alert">
          Newest JAV Added
          <button class="btn btn-dark">View More <font-awesome-icon icon="fa-solid fa-circle-play" />
          </button>
        </div>
        <div class="row">
          <div v-for="jav in javsTest" :key="jav.id" class="col-lg-6">
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
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Cheating</button></div>
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Creampie</button></div>
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Older Sister</button></div>
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Molester</button></div>
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Gangbang</button></div>
        <div class="col-lg-2 text-center"><button class="btn btn-dark">Beautiful Girl</button></div>
      </div>
    </div>
    <div class="row my-2 py-1">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="title">Latest Porn Videos Added</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="scene in scenesTest" :key="scene.id" class="col-lg-3">
          <CardScene v-bind:data="scene" /> 
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-dark" role="alert">
            Newest Videos Added
            <button class="btn btn-dark">View More <font-awesome-icon icon="fa-solid fa-circle-play" />
            </button>
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
let javsTest = [
  {
    id: 0, code: "OAE-165",
    poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    categories: [{ name: "Category 1" }, { name: "Category 2" }, { name: "Cat3" }],
    idols: [{ name: "Yua Mikami" }]
  },
  {
    id: 1, code: "SAME-027",
    poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    categories: [{ name: "Category 1" }, { name: "Category 2" }, { name: "Cat3" }],
    idols: [{ name: "Kudou Rara" }]
  }
]

let scenesTest = [
  {
    id: 0, code: "OAE-165_01",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-preview.webm",
    duration: "00:10:10"
  }, {
    id: 1, code: "OAE-165_02",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_02-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_02-preview.webm",
    duration: "00:10:10"
  }, {
    id: 2, code: "OAE-165_03",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_03-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_03-preview.webm",
    duration: "00:10:10"
  }, {
    id: 3, code: "OAE-165_04",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_04-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_04-preview.webm",
    duration: "00:10:10"
  }, {
    id: 4, code: "SAME-027_01",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01-preview.webm",
    duration: "00:10:10"
  }, {
    id: 5, code: "SAME-027_02",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_02-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_02-preview.webm",
    duration: "00:10:10"
  }, {
    id: 6, code: "SAME-027_03",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_03-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_03-preview.webm",
    duration: "00:10:10"
  }, {
    id: 7, code: "SAME-027_04",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_04-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_04-preview.webm",
    duration: "00:10:10"
  }
];

let idolsTest = [
{id: 0, name: "Yua Mikami", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/mikami-yua.jpg"},
{id: 1, name: "Julia", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/julia.jpg"},
{id: 2, name: "Kudou Rara", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/kudou-rara.jpg"},
{id: 3, name: "Himesaki Hana", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/himesaki-hana.jpg"},
{id: 4, name: "Miura Noa", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/miura-noa.jpg"},
{id: 5, name: "Momozono Rena", poster: "https://jav.nyc3.cdn.digitaloceanspaces.com/idol/momozono-rena.jpg"}
]

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