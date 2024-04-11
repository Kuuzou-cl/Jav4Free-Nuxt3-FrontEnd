<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">New JAV</h3>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-3">
                <div class="row">
                    <label class="title">Select file</label>
                </div>
                <div class="row mb-4">
                    <input class="form-control form-control-sm" ref="formFile" type="file">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <label class="title">Variants Created</label>
                </div>
                <div class="row mb-4">
                    <table class="table table-bordered table-admin" v-if="renderComponent">
                        <thead>
                            <tr>
                                <th>Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="url in variantsURL">
                                <th>{{ url }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <button class="btn btn-success" @click="postImage()">
                            Upload Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-6">
                <div class="row">
                    <label class="title">JAV Code</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVCode" class="input-admin" placeholder="Enter JAV code, example 'ABC-000'" />
                </div>
                <div class="row">
                    <label class="title">JAV Title</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVTitle" class="input-admin"
                        placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">Release Date</label>
                </div>
                <div class="row mb-2">
                    <input v-model="newJAVDate" id="startDate" class="form-control" type="date" />
                </div>
                <div class="row">
                    <label class="title">JAV Poster</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVPoster" class="input-admin"
                        placeholder="Enter JAV title, no characters limit" />
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row justify-content-center mb-4">
                    <button class="btn category-title" @click="changeUrlImg()">
                        Reload Files
                    </button>
                </div>
                <div class="row">
                    <div class="col-lg-6 text-center">
                        <div class="row">
                            <h6 class="title">JAV Poster</h6>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <img ref="imgElementPreview" :src="imgPosterPreview" />
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="row">
                            <h6 class="title">JAV Static</h6>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <img ref="imgElementStatic" :src="imgStaticPreview" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 text-center">
                        <div class="row">
                            <h6 class="title">JAV Preview</h6>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <video ref="videoElementPreview" controls>
                                <source :src="videoPreview" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="row">
                            <h6 class="title">JAV</h6>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <video ref="videoElementFull" controls>
                                <source :src="videoFull" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="row">
                            <label class="title">Hidden</label>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <input type="checkbox" class="input-admin" v-model="newJAVHide" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-6 d-flex justify-content-center">
                <button class="btn btn-warning btn-block" @click="viewCategoriesContainer()">
                    View Categories
                </button>
            </div>
            <div class="col-lg-6 d-flex justify-content-center">
                <button class="btn btn-warning btn-block" @click="viewIdolsContainer()">
                    View Idols
                </button>
            </div>
        </div>
        <div class="row my-2" :class="{ hidden: !viewCategories }">
            <div v-for="category in newJAVCategories" :key="category.id"
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                <button v-if="category.selected" class="active btn btn-info btn-full-width my-2"
                    @click="addCategory(category.id)">
                    {{ category.name }}
                </button>
                <button v-else class="btn btn-outline-info btn-full-width my-2" @click="addCategory(category.id)">
                    {{ category.name }}
                </button>
            </div>
        </div>
        <div class="row my-2" :class="{ hidden: !viewIdols }">
            <div v-for="idol in newJAVIdols" :key="idol.id"
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                <button v-if="idol.selected" class="active btn btn-info btn-full-width my-2" @click="addIdol(idol.id)">
                    {{ idol.name }}
                </button>
                <button v-else class="btn btn-outline-info btn-full-width my-2" @click="addIdol(idol.id)">
                    {{ idol.name }}
                </button>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-12 d-flex justify-content-center">
                <button class="btn btn-success" @click="postJav()">
                    New JAV
                </button>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-12 d-flex justify-content-center">
                <table class="table table-bordered table-admin">
                    <thead>
                        <tr>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="jav in pendingJAVData.javObjects">
                            <th>{{ jav }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: [
        'auth'
    ],
    layout: "admin"
});

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const formFile = ref(0);
const renderComponent = ref(true);

let variantsURL = [];

const imgElementPreview = ref(0);
const imgElementStatic = ref(0);
const videoElementPreview = ref(0);
const videoElementFull = ref(0);

let imgPosterPreview = "";
let imgStaticPreview = "";
let videoPreview = "";
let videoFull = "";

const viewCategories = ref(false);
const viewIdols = ref(false);

const { data: getCategories } = await useFetch(api + '/categories/getCategories');
const { data: getIdols } = await useFetch(api + '/idols/getIdols');
const { data: getPendingJAV } = await useFetch(api + '/cloudflare/list_bucket');

if (!getCategories._value.Response || !getIdols._value.Response || !getPendingJAV._value.Response) {
    console.log('NULL Jav');
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

let categoriesData = getCategories._value.Response;
let idolsData = getIdols._value.Response;
let pendingJAVData = getPendingJAV._value.Response;

let newJAVTitle = "";
let newJAVCode = "";
let newJAVHide = true;
let newJAVDate = ref("");
let newJAVPoster = "";

const newJAVCategories = categoriesData;
newJAVCategories.forEach(element => {
    element.selected = false;
});

const newJAVIdols = idolsData;
newJAVIdols.forEach(element => {
    element.selected = false;
});

const changeUrlImg = async () => {
    let newJAVVideo = 'https://pub-865fcc8bf84042a28d420f7e080a6093.r2.dev/' + newJAVCode + '%2F' + newJAVCode + '.mp4';
    let newJAVStatic = 'https://r2.jav4free.watch/' + newJAVCode + '%2F' + newJAVCode + '-static.png';
    let newJAVPreview = 'https://r2.jav4free.watch/' + newJAVCode + '%2F' + newJAVCode + '-preview.mp4';

    imgPosterPreview = newJAVPoster;
    imgStaticPreview = newJAVStatic;
    videoPreview = newJAVPreview;
    videoFull = newJAVVideo;

    imgElementPreview._rawValue.src = imgPosterPreview;
    imgElementStatic._rawValue.src = imgStaticPreview;
    videoElementPreview._rawValue.src = videoPreview;
    videoElementFull._rawValue.src = videoFull;
}

const postImage = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    const { data: getURL } = await useFetch(api + '/javs/generateUploadUrl', {
        method: 'POST',
        headers: myHeaders
    })

    console.log(getURL._value.Response.result.uploadURL);

    if (!getURL._value.Response) {
        throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
    }
    let urlToUpload = getURL._value.Response.result.uploadURL;

    const formdata = new FormData();
    formdata.append("file", formFile._value.files[0], formFile._value.files[0].name);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    console.log(urlToUpload)

    renderComponent.value = false;

    const { data: getURLImage } = await useFetch(urlToUpload, requestOptions);

    variantsURL = getURLImage._value.result.variants;

    console.log(variantsURL);
    console.log(getURLImage._value.result.variants);
    renderComponent.value = true;
}

const postJav = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    let tempCategories = [];
    newJAVCategories.forEach(element => {
        if (element.selected) {
            tempCategories.push(element);
        }
    });

    let tempIdols = [];
    newJAVIdols.forEach(element => {
        if (element.selected) {
            tempIdols.push(element);
        }
    });

    let tempJAVHide = 0;

    if (newJAVHide) {
        tempJAVHide = 1;
    }

    newJAVTitle = newJAVTitle.replace(/'/g, '');

    const { data, error } = await useFetch(api + '/javs/newJav', {
        method: 'POST',
        headers: myHeaders,
        body: {
            code: newJAVCode,
            title: newJAVTitle,
            release_date: newJAVDate,
            poster: newJAVPoster,
            hide: tempJAVHide,
            categories: tempCategories,
            idols: tempIdols
        }
    })

    reloadNuxtApp({
        path: "/dashboard/javs/1",
        ttl: 1000, // default 10000
    });

};

const computedViewCategories = computed({
    // getter
    get() {
        return viewCategories;
    },
    // setter
    set(newValue) {
        viewCategories.value = newValue;
    }
});

const computedViewIdols = computed({
    // getter
    get() {
        return viewIdols;
    },
    // setter
    set(newValue) {
        viewIdols.value = newValue;
    }
});

const computedSelectCategories = computed({
    // getter
    get() {
        return newJAVCategories;
    },
    // setter
    set(newValue) {
        newJAVCategories.forEach(category => {
            if (category.id === newValue) {
                if (category.selected) {
                    category.selected = false;
                } else {
                    category.selected = true;
                }
            }
        });
    }
});

const computedSelectIdols = computed({
    // getter
    get() {
        return newJAVIdols;
    },
    // setter
    set(newValue) {
        newJAVIdols.forEach(idol => {
            if (idol.id === newValue) {
                if (idol.selected) {
                    idol.selected = false;
                } else {
                    idol.selected = true;
                }
            }
        });
    }
});

const viewCategoriesContainer = () => {
    if (viewCategories._rawValue) {
        computedViewCategories.value = false;
    } else {
        computedViewCategories.value = true;
        computedViewIdols.value = false;
    }
};

const viewIdolsContainer = () => {
    if (viewIdols._rawValue) {
        computedViewIdols.value = false;
    } else {
        computedViewIdols.value = true;
        computedViewCategories.value = false;
    }
};

const addCategory = (_id) => {
    computedSelectCategories.value = _id;
};

const addIdol = (_id) => {
    computedSelectIdols.value = _id;
};

</script>