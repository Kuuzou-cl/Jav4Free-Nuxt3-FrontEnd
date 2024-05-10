<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="title">Recently Added Porn Videos</h3>
                </div>
                <div class="col-lg-6 d-flex justify-content-end">
                    <div class="dropdown">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Order By
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li @click="changeSelectedOrder('Code Name')"><a :class="getSelectedOrder('Code Name')">Code
                                    Name</a></li>
                            <li @click="changeSelectedOrder('Release Date')"><a
                                    :class="getSelectedOrder('Release Date')">Release Date</a></li>
                            <li @click="changeSelectedOrder('Latest J4F Added')"><a
                                    :class="getSelectedOrder('Latest J4F Added')">Latest J4F Added</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="jav in javbypage.Javs" :key="jav.id" class="col-lg-3">
                    <CardScene v-bind:data="jav" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/javs/' + page + '/' + orderBy">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/javs/' + prevPage + '/' + orderBy">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/javs/' + page + '/' + orderBy">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, javbypage.lastPage)"
                                :key="index">
                                <a :href="'/javs/' + nextPage + '/' + orderBy">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < javbypage.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/javs/' + page + '/' + orderBy.value">Next</a></li>
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

let orderBy = ref(route.params.order);

if (isNaN(page)) {
    throw createError({ statusCode: 500, statusMessage: 'It seems that you are using invalid parameters!' })
}

if (page == null || page == "" || page < 1) {
    page = 1;
}

if (orderBy.value == null || orderBy.value == "") {
    orderBy.value = 'Latest J4F Added';
}

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

let tempOrder;
let tempOrder2;

if (orderBy.value == 'Latest J4F Added') {
    tempOrder = 'id';
    tempOrder2 = 'desc';
} else if (orderBy.value == 'Release Date') {
    tempOrder = 'release_date';
    tempOrder2 = 'desc';
} else if (orderBy.value == 'Code Name') {
    tempOrder = 'code';
    tempOrder2 = 'asc';
}

const { data: getJavs } = await useFetch(api + '/javs/getjavbypage?page=' + page + '&order=' + tempOrder + '&order2=' + tempOrder2);

if (getJavs._value.Response == null) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const javbypage = getJavs._value.Response;

useHead({
    title: "Recently Videos | Jav4Free | Japanese Adult Videos for Free",
    meta: [
        {
            name: 'description', content: "Jav4Free, Uploads every day, free streaming videos, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
    ]
})

const nextClick = () => {
    let nextPage = '/javs/' + (parseInt(page) + 1) + '/' + orderBy.value;
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/javs/' + (parseInt(page) - 1) + '/' + orderBy.value;
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

const getSelectedOrder = (order) => {
    if (order == orderBy.value) {
        console.log(order + orderBy.value);
        return 'dropdown-item active'
    } else {
        console.log(order + orderBy.value);
        return 'dropdown-item'
    }
};

const changeSelectedOrder = (order) => {
    if (order != orderBy.value) {
        orderBy.value = order;
        reloadNuxtApp({
            path: "/javs/1/" + orderBy.value,
            ttl: 1000, // default 10000
        });
    }
}

</script>