<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Recently Added Videos</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div v-for="jav in allJavs.Javs" :key="jav.id" class="col-lg-6">
                    <CardJav v-bind:data="jav" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/recommended/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/recommended/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/recommended/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, allJavs.meta.lastPage)"
                                :key="index">
                                <a :href="'/recommended/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < allJavs.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/recommended/' + page">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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

const { data: allJavs } = await useFetch(api + '/javs/getjavs?page='+page+'&hide=0&variable=id&order=desc');

if (allJavs._rawValue == null) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const nextClick = () => {
    let nextPage = '/recommended/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/recommended/' + (parseInt(page) - 1);
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