<template>
    <NuxtLink :to="'/idols/' + data.name + '/1'" class="card card-idol text-center">
        <img class="card-img" :src="data.poster" />
        <div class="card-banner">
            <span class="card-name">
                <b>{{ data.name }}</b>
            </span>
        </div>
        <div class="card-banner2">
            <span class="card-name">
                <b>42 Videos</b>
            </span>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);

</script>