<template>
    <NuxtLink :to="'/javs/jav/' + props.data.code" class="movie">
        <div class="movie-hero">
            <img :src="props.data.poster" class="movie-img">
        </div>
        <div class="movie-content">
            <div class="movie-title">
                <h1 class="heading-primary">{{ props.data.code }}</h1>
                <div class="movie-tag movie-tag-1">{{ props.data.categories[0].name }}</div>
                <div class="movie-tag movie-tag-2">{{ props.data.categories[1].name }}</div>
                <div class="movie-tag movie-tag-3">{{ props.data.categories[2].name }}</div>
            </div>
            <p class="movie-description">
                {{ shortTitle(props.data.title) }}
            </p>
        </div>
        <div class="movie-price">NEW!</div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);

const shortTitle = (title) => {
    let newTitle;
    if (title.length > 250) {
        newTitle = title.slice(0, 250) + " ...";
        return newTitle;
    } else {
        return title;
    }
};
</script>