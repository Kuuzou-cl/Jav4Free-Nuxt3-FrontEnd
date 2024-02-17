<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">Update JAV {{ newJAVCode }}</h3>
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
                    <input v-model="newJAVTitle" class="input-admin" placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">Release Date</label>
                </div>
                <div class="row mb-2">
                    <input v-model="newJAVDate" id="startDate" class="form-control" type="date" />
                </div>
                <div class="row">
                    <label class="title">JAV Video Link</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVVideo" class="input-admin" placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">JAV Static Image</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVStatic" placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">JAV Preview</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVPreview" class="input-admin" placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">JAV Poster</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVPoster" class="input-admin" placeholder="Enter JAV title, no characters limit" />
                </div>
                <div class="row">
                    <label class="title">JAV VTT</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newJAVVtt" class="input-admin" placeholder="Enter JAV title, no characters limit" />
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
                <button v-if="idol.selected" class="active btn btn-info btn-full-width my-2"
                    @click="addIdol(idol.id)">
                    {{ idol.name }}
                </button>
                <button v-else class="btn btn-outline-info btn-full-width my-2" @click="addIdol(idol.id)">
                    {{ idol.name }}
                </button>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-12 d-flex justify-content-center">
                <button class="btn btn-success" @click="updateJav()">
                    Update JAV
                </button>
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

const route = useRoute();
let id = route.params.id;

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

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

const { data: getJav } = await useFetch(api + '/javs/getjavbyid?id=' + id);
const { data: getCategories } = await useFetch(api + '/categories/getCategories');
const { data: getIdols } = await useFetch(api + '/idols/getIdols');

if (!getJav._value.Response || !getCategories._value.Response || !getIdols._value.Response) {
    console.log('NULL Jav');
    throw createError({ statusCode: 404, statusMessage: 'You found a dead end!' })
}

let javData = getJav._value.Response;
let categoriesData = getCategories._value.Response;
let idolsData = getIdols._value.Response;

let newJAVTitle = javData.title;
let newJAVCode = javData.code;
let newJAVHide = javData.hide;
let newJAVDate = ref(javData.release_date);
let newJAVVideo = javData.video;
let newJAVStatic = javData.static;
let newJAVPreview = javData.preview;
let newJAVPoster = javData.poster;
let newJAVVtt = javData.vtt;

if (javData.hide == 1) {
    newJAVHide = true;
} else {
    newJAVHide = false;
}

imgPosterPreview = javData.poster;
imgStaticPreview = javData.static;
videoPreview = javData.preview;
videoFull = javData.video;

const newJAVCategories = categoriesData;
newJAVCategories.forEach(element => {
    if (javData.categories.find((objCategory) => objCategory.id === element.id)) {
        element.selected = true;
    } else {
        element.selected = false;
    }
});

const newJAVIdols = idolsData;
newJAVIdols.forEach(element => {
    if (javData.idols.find((objIdol) => objIdol.id === element.id)) {
        element.selected = true;
    } else {
        element.selected = false;
    }
});

const changeUrlImg = async () => {
    imgPosterPreview = newJAVPoster;
    imgStaticPreview = newJAVStatic;
    videoPreview = newJAVPreview;
    videoFull = newJAVVideo;

    imgElementPreview._rawValue.src = imgPosterPreview;
    imgElementStatic._rawValue.src = imgStaticPreview;
    videoElementPreview._rawValue.src = videoPreview;
    videoElementFull._rawValue.src = videoFull;
}

const updateJav = async () => {
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

    console.log(tempCategories)
    console.log(tempIdols)

    const { data, error } = await useFetch(api + '/javs/updateJav', {
        method: 'PATCH',
        headers: myHeaders,
        body: {
            id: id,
            code: newJAVCode,
            title: newJAVTitle,
            release_date: newJAVDate,
            video: newJAVVideo,
            static: newJAVStatic,
            preview: newJAVPreview,
            poster: newJAVPoster,
            vtt: newJAVVtt,
            hide: tempJAVHide,
            categories: tempCategories,
            idols: tempIdols,
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