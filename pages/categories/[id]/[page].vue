<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Latest videos of {{ id }}</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div v-for="scene in CategoryData.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/categories/' + id + '/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/categories/' + id + '/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/categories/' + id + '/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, CategoryData.meta.lastPage)"
                                :key="index">
                                <a :href="'/categories/' + id + '/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < CategoryData.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/categories/' + id + '/' + page">Next</a></li>
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
let id = route.params.id;
const { isMobile, isTablet } = useDevice();

if (page == null || page == "" || page < 1) {
    page = "1";
}

const { data: CategoryData } = await useFetch('https://jav.souzou.dev/categories/scenesv2?page=' + page + '&name=' + id + '&order=desc');

useHead({
    title: "Watch the latest porn videos in the " + id + " category | Jav4Free",
    meta: [
        {
            name: 'description', content: "Jav4Free, Here you can watch" +
                id +
                " porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

const nextClick = () => {
    let nextPage = '/categories/' + id + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/categories/' + id + (parseInt(page) - 1);
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
            return 'col-lg-3 col-md-3'
        }

    }
};

</script>