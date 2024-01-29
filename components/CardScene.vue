<template>
    <NuxtLink :to="'/videos/' + data.code + '?' + data.title" class="card card-scene my-2"
        style="text-decoration: none; color: inherit;">
        <div class="card-scene-media">
            <img :id="data.code" :src="data.poster" @mouseover="start(data.code,data.video_preview)" @mouseleave="restart(data.code,data.poster)" />
        </div>
        <div class="box-code">
            <b class="post">{{ data.length }}</b>
        </div>
        <div class="box-code2">
            <b class="post">{{ formatCode(data.code) }}</b>
        </div>
        <div class="box-content">
            <p class="title"> {{ formatDescription(data.code, data.title) }} </p>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);
const { isMobile, isTablet } = useDevice();

function formatDescription(_code, _title) {
    let newTitle;
    let maxLenght = 80;
    if (isMobile) {
        maxLenght = 80
    }
    if (_title.length > maxLenght) {
        newTitle = _title.slice(0, maxLenght) + " ...";
    } else {
        newTitle = _title;
    }
    return newTitle;
};

function formatCode(_code) {
    return _code.slice(0, _code.length - 4);
};


function restart(code,poster) {
    const demoId = document.getElementById(code);
    demoId.src = poster;
};

function start(code,video_preview) {
    const demoId = document.getElementById(code);
    demoId.src = video_preview;
};
</script>