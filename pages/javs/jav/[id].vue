<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>{{ JavData.Jav[0].code }}</h6>
            </div>
        </div>
        <div class="container container-jav py-3">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img :src="JavData.Jav[0].image" />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div class="row">
                        <p class="info">{{ JavData.Jav[0].title }}</p>
                    </div>
                    <div class="row">
                        <p class="info">Categories</p>
                    </div>
                    <div class="row">
                        <div v-for="category in JavData.Categories" :key="category.id" class="col-lg-2">
                            <NuxtLink :to="'/categories/' + category.name + '/1'" class="info-categories">
                                <p>{{ category.name }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="row">
                        <p class="info">Idols</p>
                    </div>
                    <div class="row">
                        <div v-for="idol in JavData.Idols" :key="idol.id" class="col-lg-3">
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
                <h6>Scenes from this JAV</h6>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="scene in JavData.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
        </div>
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Related Javs</h6>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="jav in getRelatedJavs.Javs" :key="jav.id" class="col-lg-6">
                    <CardJav v-bind:data="jav" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const { isMobile, isTablet } = useDevice();
const id = route.params.id;

const { data: JavData } = await useFetch('https://jav.souzou.dev/javs/javv2?code=' + id);
const { data: getRelatedJavs } = await useFetch("https://jav.souzou.dev/javs/relatedJavsv2?id=" + JavData._rawValue.Jav[0].id + "&limit=" + 4);

const getColumnsScenes = () => {
    if (isMobile || isTablet) {
        return 'col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-center'
    } else {
        return 'col-lg-3'
    }
};

</script>