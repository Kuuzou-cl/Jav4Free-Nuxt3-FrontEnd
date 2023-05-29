<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>{{ getScene.Scene[0].title }}</h6>
            </div>
        </div>
        <div class="container container-scene">
            <div class="row">
                <div class="col-lg-12 px-0">
                    <video id="scene_player">
                        <source :src="getScene.Scene[0].video" title='720p' type="video/mp4" />
                        <source :src="getScene.Scene[0].video480p" title='480p' type="video/mp4" />
                    </video>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 ps-0">
                    <NuxtLink :to="'/javs/jav/' + getScene.Jav[0].code">
                        <img :src="getScene.Jav[0].image" />
                    </NuxtLink>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div class="row">
                        <p class="info">{{ getScene.Scene[0].code }} - {{ getScene.Scene[0].title }}</p>
                    </div>
                    <div class="row">
                        <p class="info">Categories</p>
                    </div>
                    <div class="row">
                        <div v-for="category in getScene.Categories" :key="category.id"
                            v-bind:class="getColumnsCategoriesIdols()">
                            <NuxtLink :to="'/categories/' + category.name + '/1'" class="info-categories">
                                <p>{{ category.name }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row">
                        <p class="info">Idols</p>
                    </div>
                    <div class="row">
                        <div v-for="idol in getScene.Idols" :key="idol.id" v-bind:class="getColumnsCategoriesIdols()">
                            <NuxtLink :to="'/idols/' + idol.name + '/1'" class="info-idols">
                                <p>{{ idol.name }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Related Videos</h6>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="scene in  getRelatedScene.Scenes " :key="scene.id" v-bind:class="getColumnsScenes()">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { isMobile, isTablet } = useDevice();
let id = route.params.id;

let limitRelated = 8;

if (isMobile) {
    limitRelated = 4
}

const { data: getScene } = await useFetch('https://jav.souzou.dev/scenes/scenev2?code=' + id);
const { data: getRelatedScene } = await useFetch("https://jav.souzou.dev/scenes/relatedScenesv2?id=" + getScene._rawValue.Scene[0].id + "&limit=" + limitRelated);
const view = await useFetch('https://jav.souzou.dev/scenes/newViewv2?id=' + getScene._rawValue.Scene[0].id);

useHead({
    title: getScene._rawValue.Scene[0].title + " | Jav4Free | " + getScene._rawValue.Jav[0].code,
    meta: [
        {
            name: 'description', content: "Jav4Free, watch " +
                getScene._rawValue.Scene[0].title +
                " , " +
                getScene._rawValue.Jav[0].code +
                " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

onMounted(() => {
    var player = fluidPlayer('scene_player', {
        layoutControls: {
            layout: "default",
            fillToContainer: false,
            preload: true,
            posterImage: getScene._rawValue.Scene[0].staticImage,
            timelinePreview: {
                file: getScene._rawValue.Scene[0].vtt,
                type: "VTT",

            },
            allowTheatre: false,
            contextMenu: {
                controls: false
            }
        },
    });
});

const getColumnsScenes = () => {
    if (isTablet) {
        return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
        return 'col-lg-3 col-md-3 col-sm-3 col-xs-3'
    }
};

const getColumnsCategoriesIdols = () => {
    if (isTablet || isMobile) {
        return 'col-lg-4 col-md-4 col-sm-4 col-xs-4'
    } else {
        return 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
    }
};


</script>