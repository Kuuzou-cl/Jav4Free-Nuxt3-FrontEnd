<template>
    <div>
        <h1>Search page :{{ page }} - query :{{ query }}</h1>
    </div>
    <div> {{ searchData }} </div>
</template>

<script setup>
const route = useRoute();
let page = route.params.page;
let query = route.params.query;

const { isMobile, isTablet } = useDevice();

const { data: searchData } = await useFetch('https://jav.souzou.dev/search?title=' + query + '&page=' + page);


</script>