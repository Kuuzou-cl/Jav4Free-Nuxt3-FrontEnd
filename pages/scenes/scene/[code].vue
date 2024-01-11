<template>
    <div class="container ">
        <div class="row my-2 py-1">
            <div class="col-lg-12 text-center">
                <div class="alert alert-dark" role="alert">
                    Newest JAV Added
                    <button class="btn btn-dark">View More <font-awesome-icon icon="fa-solid fa-circle-play" />
                    </button>
                </div>
            </div>
        </div>
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
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let code = route.params.code;

let sceneTest = {
    id: 0, code: "OAE-165_01",
    staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-static.webp",
    title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
    previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-preview.webm",
    duration: "00:10:10",
    video: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01.mp4",
    vtt: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01_thumbs.vtt",
    posterImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165.webp"
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