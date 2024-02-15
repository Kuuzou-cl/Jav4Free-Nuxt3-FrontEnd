<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">All Categories</h3>
                </div>
            </div>
            <div class="row my-2 py-1">
                <div v-for="category in allCategories.Categories" :key="category.id"
                        v-bind:class="getColumnsCategories()">
                        <NuxtLink :to="'/categories/' + category.name + '/1'">
                            <button class="btn category-title">
                                {{ category.name }}
                            </button>
                        </NuxtLink>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isMobile, isTablet } = useDevice();
useHead({
    title: 'Categories on Jav4Free | Japanese Adult Videos for Free',
    meta: [
        { name: 'description', content: 'Jav4Free, Here you can watch free adult porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.' }
    ]
})

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { data: allCategories } = await useFetch(api + '/categories/getCategories');

const getColumnsCategories = () => {
    if (isMobile || isTablet) {
        return 'col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-center'
    } else {
        return 'col-lg-3 d-flex justify-content-center'
    }
};
</script>