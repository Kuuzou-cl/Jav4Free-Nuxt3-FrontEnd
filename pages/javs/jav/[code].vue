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
                    <video class="video-jav-player" id="jav_player">
                        <source :src="javData.video" type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <CardJavFull v-bind:data="javData" />
                </div>
            </div>
        </div>
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">View more Porn Videos</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="jav in randomJavData" :key="jav.id" class="col-lg-3">
                    <CardScene v-bind:data="jav" />
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
const { data: getrandomJavs } = await useFetch(api + '/javs/getrandom?limit=' + 8);

if (!getJav._value.Response || !getrandomJavs._value.Response) {
    console.log('NULL Jav');
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

let javData = getJav._value.Response;
let randomJavData = getrandomJavs._value.Response;

//Set Meta
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

//Mount Video Player
onMounted(() => {
    var player = fluidPlayer('jav_player', {
        layoutControls: {
            layout: "default",
            fillToContainer: false,
            preload: true,
            posterImage: javData.static,
            timelinePreview: {
                file: javData.vtt,
                type: "VTT",
            },
            allowTheatre: false,
            contextMenu: {
                controls: false
            }
        },
        vastOptions: {
            adList: [
                {
                    "roll": "preRoll",
                    "vastTag": "https://s.magsrv.com/splash.php?idzone=5243940"
                },
            ]
        },
        onBeforeXMLHttpRequest: (request) => {
            request.withCredentials = false;
        },
    });
});

//Cookie history
let historyCookie = useCookie('history')
if (!historyCookie.value) {
    historyCookie.value = [];
}
let tempCookie = [] = historyCookie.value;
for (let index = 0; index < tempCookie.length; index++) {
    if (tempCookie[index] == javData.id) {
        tempCookie.splice(index,1);
    }    
}
tempCookie.push(javData.id);
historyCookie.value = JSON.stringify(tempCookie);

</script>