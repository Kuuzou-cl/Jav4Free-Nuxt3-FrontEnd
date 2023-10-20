<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>{{ getJav.Jav.title }}</h6>
            </div>
        </div>
        <div class="container container-scene">
            <div class="row">
                <div class="col-lg-12 px-0">
                    <video id="jav_player">
                        <source :src="getJav.Jav.video" title='720p' type="video/mp4" />
                        <source :src="getJav.Jav.video" title='480p' type="video/mp4" />
                    </video>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 ps-0">
                    <NuxtLink :to="'/javs/jav/' + getJav.Jav.code">
                        <img :src="getJav.Jav.poster" />
                    </NuxtLink>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div class="row">
                        <p class="info">{{ getJav.Jav.code }} - {{ getJav.Jav.title }}</p>
                    </div>
                    <div class="row">
                        <p class="info">Categories</p>
                    </div>
                    <div class="row">
                        <div v-for="category in getJav.Categories" :key="category.id"
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
                        <div v-for="idol in getJav.Idols" :key="idol.id" v-bind:class="getColumnsCategoriesIdols()">
                            <NuxtLink :to="'/idols/' + idol.name + '/1'" class="info-idols">
                                <p>{{ idol.name }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { isMobile, isTablet } = useDevice();
let code = route.params.code;

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

if (!code || code.trim().length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

if (isMobile) {
    limitRelated = 4
}

const { data: getJav } = await useFetch(api + '/javs/getjavbycode?code=' + code);
if (!getJav._rawValue.Jav) {
    console.log('NULL Jav');
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const view = await useFetch(api + '/javs/getJavViewById?id=' + getJav._rawValue.Jav.id);

useHead({
    title: getJav._rawValue.Jav.code + " | Jav4Free | " + getJav._rawValue.Jav.title,
    meta: [
        {
            name: 'description', content: "Jav4Free, watch " +
                getJav._rawValue.Jav.code +
                " , " +
                getJav._rawValue.Jav.title +
                " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

onMounted(() => {
    var player = fluidPlayer('jav_player', {
        layoutControls: {
            layout: "default",
            fillToContainer: false,
            preload: true,
            posterImage: getJav._rawValue.Jav.poster,
            timelinePreview: {
                file: getJav._rawValue.Jav.vtt,
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