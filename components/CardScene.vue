<template>
    <NuxtLink :to="'/scenes/scene/' + data.code + '?' + data.title" class="card card-scene my-2" style="text-decoration: none; color: inherit;">
        <div class="card-scene-media">
            <img :src="data.staticImage" />
            <video :id="data.id" @mouseleave="restart()" @mouseover="start()" preload="auto" loop>
                <source :src="data.previewImage" type="video/mp4" />
            </video>
        </div>
        <div class="box-code">
            <b class="post">{{ data.duration }}</b>
        </div>
        <div class="box-code2">
            <b class="post">{{ formatCode(data.code) }}</b>
        </div>
        <div class="box-content">
            <h3 class="title">
                <p> {{ formatDescription(data.code,data.title)   }} </p>
            </h3>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['data']);
const { isMobile, isTablet } = useDevice();

function formatDescription(_code, _title){
    let newTitle;
    let maxLenght = 60;
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

function formatCode(_code){
    return _code.slice(0, _code.length - 4);
};


function restart() {
    var video = document.getElementById(props.data.id);
    video.load();
};

function start() {
    var video = document.getElementById(props.data.id);
    video.play();
};
</script>