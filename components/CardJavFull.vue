<template>
    <NuxtLink :to="'/javs/jav/' + props.data.code" class="movie my-2">
        <div class="movie-hero">
            <img :src="props.data.poster" class="movie-img">
        </div>
        <div class="movie-content">
            <div class="movie-title">
                <h1 class="heading-primary">{{ props.data.code }}</h1>
            </div>
            <div class="movie-title">
                <div class="row">
                    <div v-for="category in props.data.categories" :key="category.id" class="col-lg-4 text-center"><div class="my-1 movie-tag movie-tag-1">{{ category.name }}</div></div>
                </div>                
            </div>
            <p class="movie-description">
                {{ props.data.title }}
            </p>
            <div class="movie-title">
                <div class="row">
                    <div v-for="idol in props.data.idols" :key="idol.id" class="col-lg-12 text-center"><div class="my-1 movie-tag movie-tag-idol">{{ idol.name }}</div></div>
                </div>                
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);
</script>