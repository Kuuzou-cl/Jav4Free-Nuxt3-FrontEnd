<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>{{ IdolData.Idol.name }} | JAV Idol</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div class="col-lg-2 d-flex justify-content-center">
                    <CardIdol v-bind:data="IdolData.Idol" />
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-12">
                    <div class="row">
                        <div v-for="jav in IdolData.Javs" :key="jav.id" v-bind:class="getColumnsScenes()">
                            <CardJav v-bind:data="jav" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/idols/' + name + '/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/idols/' + name + '/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/idols/' + name + '/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, IdolData.meta.lastPage)"
                                :key="index">
                                <a :href="'/idols/' + name + '/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < IdolData.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/idols/' + name + '/' + page">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let name = route.params.name;
let page = route.params.page;
const { isMobile, isTablet } = useDevice();

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

if (isNaN(page) || !name || name.trim().length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

if (page == null || page == "" || page < 1) {
    page = 1;
}


useHead({
    title: name + " Porn Videos | Jav4Free",
    meta: [
        {
            name: 'description', content: "Jav4Free, Here you can watch every porn video of " +
                name +
                ", find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

const { data: IdolData } = await useFetch(api + '/idols/getjavbyidol?page=' + page + '&name=' + name + '&order=desc');

if (!IdolData._rawValue.Idol) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const nextClick = () => {
    let nextPage = '/idols/' + name + '/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/idols/' + name + '/' + (parseInt(page) - 1);
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

const getColumnsScenes = () => {
    if (isMobile) {
        return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
    } else {
        if (isTablet) {
            return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
        } else {
            return 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
        }

    }
};
</script>