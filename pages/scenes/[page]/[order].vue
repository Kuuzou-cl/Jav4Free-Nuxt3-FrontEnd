<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Recently Added Videos</h6>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {{ actualOrder }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="(order, index) in getOrders(actualOrder)" :key="index">
                            <a class="dropdown-item" :href="'/scenes/1/' + order" >{{ order }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div v-for="scene in allScenes.Scenes" :key="scene.id" v-bind:class="getColumnsScenes()">
                    <CardScene v-bind:data="scene" />
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/scenes/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/scenes/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/scenes/' + page">{{ page }}</a></li>
                            <li v-if="!isMobile" v-for="(nextPage, index) in nextPages(page, allScenes.meta.lastPage)"
                                :key="index">
                                <a :href="'/scenes/' + nextPage">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < allScenes.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/scenes/' + page">Next</a></li>
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
let order = route.params.order;

if (order == null || order == "") {
    order = "Latest";
}

if (page == null || page == "" || page < 1) {
    page = "1";
}

let actualOrder = order;
actualOrder = actualOrder.toLowerCase();
actualOrder = actualOrder.charAt(0).toUpperCase() + actualOrder.slice(1);

const { data: allScenes } = await useFetch('https://jav.souzou.dev/scenes/v2?page=' + page + '&order=' + actualOrder);

const nextClick = () => {
    let nextPage = '/scenes/' + (parseInt(page) + 1);
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/scenes/' + (parseInt(page) - 1);
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

const getOrders = (_order) => {
    let arrayOrder = [];
    if (_order == 'Latest') {
        return arrayOrder = ['Trending','Top view', 'Oldest'];
    } else if (_order == 'Trending') {
        return arrayOrder = ['Latest','Top view', 'Oldest'];
    } else if (_order == 'Top view') {
        return arrayOrder = ['Latest','Trending', 'Oldest'];
    } else if (_order == 'Oldest') {
        return arrayOrder = ['Latest','Trending', 'Top view'];
    }
}

</script>