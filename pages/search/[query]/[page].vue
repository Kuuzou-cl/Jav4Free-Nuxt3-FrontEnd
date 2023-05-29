<template>
    <div class="container-fluid ">
        <SearchBar />
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Searching for " {{ query }} "</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div v-for="scene in searchData.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/search/' + query + '/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/search/' + query + '/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/search/' + query + '/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, searchData.meta.lastPage)"
                                :key="index">
                                <a :href="'/search/' + query + '/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < searchData.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/search/' + query + '/' + page">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let page = route.params.page;
let query = route.params.query;

if (page == null || page == "" || page < 1) {
    page = "1";
}

useHead({
    title: '"' + query + '" | Jav4Free | Watch Adult Porn Videos ',
    meta: [
        {
            name: 'description', content: "Jav4Free, watch , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

const { isMobile, isTablet } = useDevice();

const { data: searchData } = await useFetch('https://jav.souzou.dev/search/v2?title=' + query + '&page=' + page);


const nextClick = () => {
    let nextPage = '/search/' + query + '/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/search/' + query + '/' + (parseInt(page) - 1);
    return prevPage;
};

const pushPage = (page) => {
    let newPage = parseInt(page);
    navigateTo('/scenes/' + newPage);
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

const getColumnsScenes = () => {
    if (isMobile) {
        return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
        if (isTablet) {
            return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
        } else {
            return 'col-lg-3 col-md-3 col-sm-3 col-xs-3'
        }
    }
};
</script>