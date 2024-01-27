<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">{{ javData.code + " - " + javData.title }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <CardJavFull v-bind:data="javData" />
                </div>
            </div>
        </div>
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">Videos from this JAV</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="scene in javData.videos" :key="scene.id" class="col-lg-3">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let code = route.params.code;

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

if (!code || code.trim().length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

const { data: getJav } = await useFetch(api + '/javs/getjavbycode?code=' + code);

if (!getJav._value.Response) {
    console.log('NULL Jav');
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

let javData = getJav._value.Response;

useHead({
    title: javData.code + " | Jav4Free | " + javData.title,
    meta: [
        {
            name: 'description', content: "Jav4Free, watch " +
                javData.code +
                " , " +
                javData.title +
                " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

</script>