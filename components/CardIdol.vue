<template>
    <NuxtLink :to="'/idols/' + data.name + '/1'" class="card card-idol text-center">
        <img class="card-img" :src="data.image" />
        <div class="card-banner">
            <span class="card-name">
                <b>{{ data.name }}</b>
            </span>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);

</script>