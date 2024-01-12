<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">Recently Added Porn Videos</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="scene in scenesTest" :key="scene.id" class="col-lg-3">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let scenesTest = [
    {
        id: 0, code: "OAE-165_01",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_01-preview.webm",
        duration: "00:10:10"
    }, {
        id: 1, code: "OAE-165_02",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_02-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_02-preview.webm",
        duration: "00:10:10"
    }, {
        id: 2, code: "OAE-165_03",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_03-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_03-preview.webm",
        duration: "00:10:10"
    }, {
        id: 3, code: "OAE-165_04",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_04-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/OAE-165/OAE-165_04-preview.webm",
        duration: "00:10:10"
    }, {
        id: 4, code: "SAME-027_01",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_01-preview.webm",
        duration: "00:10:10"
    }, {
        id: 5, code: "SAME-027_02",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_02-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_02-preview.webm",
        duration: "00:10:10"
    }, {
        id: 6, code: "SAME-027_03",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_03-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_03-preview.webm",
        duration: "00:10:10"
    }, {
        id: 7, code: "SAME-027_04",
        staticImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_04-static.webp",
        title: "Yua Mikami X MOODYZ One-time Limited Revival! ? Alone Bakobako Bus Tour 2023 Just Before Retirement! Last Big Thank You Special!!",
        previewImage: "https://jav.nyc3.cdn.digitaloceanspaces.com/scene/SAME-027/SAME-027_04-preview.webm",
        duration: "00:10:10"
    }
];

const route = useRoute();
const { isMobile, isTablet } = useDevice();
let page = route.params.page;

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

useHead({
    title: "Recently Videos | Jav4Free | Japanese Adult Videos for Free",
    meta: [
        {
            name: 'description', content: "Jav4Free, Uploads every day, free streaming videos, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

if (isNaN(page)) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

if (page == null || page == "" || page < 1) {
    page = 1;
}


const nextClick = () => {
    let nextPage = '/javs/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/javs/' + (parseInt(page) - 1);
    return prevPage;
};

const previousPages = (page) => {
    let prevPages = [];
    for (let index = 1; index < Number(page); index++) {
        prevPages.push(index);
    }
    if (isTablet) {
        if (prevPages.length > 2) {
            return prevPages.slice(
                prevPages.length - 2,
                prevPages.length
            );
        } else {
            return prevPages;
        }
    } else {
        if (prevPages.length > 4) {
            return prevPages.slice(
                prevPages.length - 4,
                prevPages.length
            );
        } else {
            return prevPages;
        }
    }

};

const nextPages = (page, lastPage) => {
    let nextPages = [];
    for (
        let index = Number(page) + 1;
        index <= Number(lastPage);
        index++
    ) {
        nextPages.push(index);
    }
    if (isTablet) {
        if (nextPages.length > 2) {
            return nextPages.slice(0, 2);
        } else {
            return nextPages;
        }
    } else {
        if (nextPages.length > 4) {
            return nextPages.slice(0, 4);
        } else {
            return nextPages;
        }
    }

};

</script>