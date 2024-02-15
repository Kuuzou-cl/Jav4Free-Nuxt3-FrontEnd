<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">{{ javsbyidol.Idol.name }} | AV Idol Videos</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="jav in javsbyidol.Javs" :key="jav.id" class="col-lg-3">
                    <CardScene v-bind:data="jav" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/av-idol/' + javsbyidol.Idol.name + '/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/av-idol/'+ javsbyidol.Idol.name + '/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/av-idol/'+ javsbyidol.Idol.name + '/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, javsbyidol.lastPage)"
                                :key="index">
                                <a :href="'/av-idol/'+ javsbyidol.Idol.name + '/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < javsbyidol.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/av-idol/'+ javsbyidol.Idol.name + '/' + page">Next</a></li>
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

const { data: getIdol } = await useFetch(api + '/idols/getjavbyidol?page=' + page + '&name=' + name);

if (getIdol._value.Response == null) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const javsbyidol = getIdol._value.Response;

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

const nextClick = () => {
    let nextPage = '/av-idol/' + name + '/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/av-idol/' + name + '/' + (parseInt(page) - 1);
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