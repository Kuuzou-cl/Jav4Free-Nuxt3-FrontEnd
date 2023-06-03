<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>JAV IDOLS</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div v-for="idol in allIdols.Idols" :key="idol.id" v-bind:class="getColumnsIdols()">
                    <CardIdol v-bind:data="idol" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/idols/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/idols/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/idols/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, allIdols.meta.lastPage)"
                                :key="index">
                                <a :href="'/idols/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < allIdols.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/idols/' + page">Next</a></li>
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

useHead({
    title: "Search for your favorite Idol on Jav4Free | Japanese Adult Videos for Free",
    meta: [
        { name: 'description', content: 'Jav4Free, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality.' }
    ]
})

if (isNaN(page)) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

if (page == null || page == "" || page < 1) {
    page = 1;
}


const { data: allIdols } = await useFetch('https://jav.souzou.dev/idols/v2?page=' + page + '&order=desc');

if (allIdols._rawValue.Idols.length == 0) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const nextClick = () => {
    let nextPage = '/idols/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/idols/' + (parseInt(page) - 1);
    return prevPage;
};

const pushPage = (page) => {
    let newPage = parseInt(page);
    navigateTo('/idols/' + newPage);
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

const getColumnsIdols = () => {
    if (isMobile) {
        return 'col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex justify-content-center'
    } else {
        if (isTablet) {
            return 'col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex justify-content-center'
        } else {
            return 'col-lg-2 d-flex justify-content-center'
        }

    }
};
</script>