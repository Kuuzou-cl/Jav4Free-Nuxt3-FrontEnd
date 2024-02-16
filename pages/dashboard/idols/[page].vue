<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>All idols</h6>
            </div>
        </div>
        <div class="container">      
            <div class="row my-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/dashboard/idols/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/dashboard/idols/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/dashboard/idols/'+page">{{ page }}</a></li>
                            <li v-for="(nextPage, index) in nextPages(page, idolsbypage.lastPage)"
                                :key="index">
                                <a :href="'/dashboard/idols/' + nextPage ">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < idolsbypage.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/dashboard/idols/' + page ">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>      
            <div class="row my-2">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="idol in idolsbypage.Idols" :key="idol.id">
                                <th>{{ idol.name }}</th>
                                <td>
                                    <font-awesome-icon v-if="idol.image != 'false'" icon="fa-solid fa-check"
                                        class="icon-green" />
                                    <font-awesome-icon v-else icon="fa-solid fa-xmark" class="icon-red" />
                                </td>                                
                                <td>
                                    <nuxt-link :to="'/dashboard/idols/edit/'+idol.id"
                                        class="btn button-admin">Edit</nuxt-link>
                                </td>
                                <td>
                                    <button class="btn button-admin">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: [
        'auth'
    ]
});
definePageMeta({
    layout: "admin",
});

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { isMobile, isTablet } = useDevice();
const route = useRoute();
let page = route.params.page;

if (page == null || page == "" || page < 1) {
    page = "1";
}

const { data: getIdols } = await useFetch(api + '/idols/getidolbypage?page=' + page);

if (getIdols._value.Response == null) {
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

const idolsbypage = getIdols._value.Response;

const nextClick = () => {
    let nextPage = '/dashboard/idols/' + (parseInt(page) + 1) ;
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/dashboard/idols/' + (parseInt(page) - 1) ;
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