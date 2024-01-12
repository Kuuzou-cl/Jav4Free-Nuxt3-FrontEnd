<template>
    <div class="container ">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">{{ sceneTest.title }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <video class="video-jav-player" id="jav_player">
                        <source :src="sceneTest.video" title='720p' type="video/mp4" />
                    </video>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-lg-12">
                    <h3 class="title">Pornstars</h3>
                    <button class="btn btn-dark btn-sm mx-1">Yua Mikami</button>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-lg-12">
                    <h3 class="title">Categories</h3>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                    <button class="btn btn-dark btn-sm mx-1">Cheating</button>
                </div>
            </div>
        </div>
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">View more Porn Videos</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="scene in scenesTest" :key="scene.id" class="col-lg-3">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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


const route = useRoute();
let code = route.params.code;

let sceneTest = {
    id: 0, code: "OAE-165_01",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-preview.webm",
    duration: "00:10:10",
    categories: [{ name: "Category 1" }, { name: "Category 2" }, { name: "Cat3" }],
    video: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01.mp4",
    vtt: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01_thumbs.vtt",
    posterImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01-static.webp"
}

if (!code || code.trim().length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

onMounted(() => {
    var player = fluidPlayer('jav_player', {
        layoutControls: {
            layout: "default",
            fillToContainer: false,
            preload: true,
            posterImage: sceneTest.posterImage,
            timelinePreview: {
                file: sceneTest.vtt,
                type: "VTT",
            },
            allowTheatre: false,
            contextMenu: {
                controls: false
            }
        },
        onBeforeXMLHttpRequest: (request) => {
            request.withCredentials = false;
        },
    });

});

</script>