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
                <div class="movie-tag movie-tag-1">{{ props.data.categories[0].name }}</div>
                <div class="movie-tag movie-tag-1">{{ props.data.categories[1].name }}</div>
            </div>
            <p class="movie-description">
                {{ shortTitle(props.data.title) }}
            </p>
            <div class="movie-title">
                <div class="movie-tag movie-tag-idol">{{ props.data.idols[0].name }}</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);
const { isMobile, isTablet } = useDevice();

const shortTitle = (title) => {
    let newTitle;
    if (title.length > 120) {
        newTitle = title.slice(0, 120) + " ...";
        return newTitle;
    } else {
        return title;
    }
};
</script>