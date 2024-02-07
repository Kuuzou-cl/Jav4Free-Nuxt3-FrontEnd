<template>
    <div class="container ">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">{{ videoJav.Video.title }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <video class="video-jav-player" id="jav_player">
                        <source :src="videoJav.Video.playback_id" type='video/mp4' />
                    </video>
                </div>
            </div>
            <div class="row">

            </div>
            <div class="row mb-2">
                <div class="col-lg-12">
                    <h3 class="title">AV Idol</h3>
                    <button v-for="idol in videoJav.Idols" :key="idol.id" class="btn btn-dark btn-sm mx-1">{{ idol.name
                    }}</button>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-lg-12">
                    <h3 class="title">Categories</h3>
                    <button v-for="category in videoJav.Categories" :key="category.id" class="btn btn-dark btn-sm mx-1">{{
                        category.name }}</button>
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

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;


if (!code || code.trim().length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

const { data: getVideo } = await useFetch(api + '/videos/getvideo?code=' + code);

let videoJav = getVideo._value.Response;

onMounted(() => {
    var player = fluidPlayer('jav_player', {
        layoutControls: {
            layout: "default",
            fillToContainer: false,
            preload: true,
            //posterImage: videoJav.Video.poster,
            //timelinePreview: {
            //    file: videoJav.Video.vtt,
            //    type: "VTT",
            //},
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