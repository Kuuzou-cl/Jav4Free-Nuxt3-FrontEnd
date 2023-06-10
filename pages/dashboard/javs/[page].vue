<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>All JAVs</h6>
            </div>
        </div>
        <div class="container">      
            <div class="row my-4">
                <div class="col-lg-12 d-flex justify-content-center">
                    <div class="container-pagination">
                        <ul class="pagination">
                            <li v-if="page != 1"><a :href="prevClick()">Previous</a></li>
                            <li v-else><a :href="'/dashboard/scenes/' + page">Previous</a></li>
                            <li v-if="!isMobile" v-for="(prevPage, index) in previousPages(page)" :key="index">
                                <a :href="'/dashboard/scenes/' + prevPage">{{ prevPage }}</a>
                            </li>
                            <li class="active"><a :href="'/dashboard/scenes'">{{ page }}</a></li>
                            <li v-for="(nextPage, index) in nextPages(page, allJavs.meta.lastPage)"
                                :key="index">
                                <a :href="'/dashboard/scenes/' + nextPage ">{{ nextPage }}</a>
                            </li>
                            <li v-if="page < allJavs.meta.lastPage"><a :href="nextClick()">Next</a></li>
                            <li v-else><a :href="'/dashboard/scenes/' + page ">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>      
            <div class="row my-2">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Hide</th>
                                <th>Cover</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="jav in allJavs.Javs" :key="jav.id">
                                <th>{{ jav.code }}</th>
                                <td>{{ jav.hide }}</td>
                                <td>
                                    <font-awesome-icon v-if="jav.imageCover != 'false'" icon="fa-solid fa-check"
                                        class="icon-green" />
                                    <font-awesome-icon v-else icon="fa-solid fa-xmark" class="icon-red" />
                                </td>                                
                                <td>
                                    <nuxt-link :to="'/dashboard/scenes/edit/'+jav.id"
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
const { isMobile, isTablet } = useDevice();
const route = useRoute();
let page = route.params.page;

if (page == null || page == "" || page < 1) {
    page = "1";
}

const { data: allJavs } = await useFetch('https://jav.souzou.dev/aws/stateFiles/javs/?page=' + page);

const nextClick = () => {
    let nextPage = '/dashboard/scenes/' + (parseInt(page) + 1) ;
    return nextPage;
};

const prevClick = () => {
    let prevPage = '/dashboard/scenes/' + (parseInt(page) - 1) ;
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