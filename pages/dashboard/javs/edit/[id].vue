<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Update Jav</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-4">
                <div class="col-lg-6 ">
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Code</label>
                            <input v-model="newJAVCode" class="input-admin"
                                placeholder="Enter JAV code, example 'ABC-000'" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Title</label>
                            <input v-model="newJAVTitle" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Release Date</label>
                            <input v-model="newJAVDate" id="startDate" class="form-control" type="date" />
                            {{ newJAVDate }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Video Link</label>
                            <input v-model="newJAVVideo" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Static Image</label>
                            <input v-model="newJAVStatic" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Preview</label>
                            <input v-model="newJAVPreview" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Poster</label>
                            <input v-model="newJAVPoster" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV VTT</label>
                            <input v-model="newJAVVtt" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Hidden</label>
                            <input type="checkbox" class="input-admin" v-model="newJAVHide" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <img class="preview-img-jav" ref="imgCodePreview" :src="imgPreview" />
                        </div>
                        <button class="btn btn-warning" @click="changeUrlImg()">
                            Reload Cover
                        </button>
                    </div>
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-4 d-flex justify-content-center">
                    <button class="btn btn-warning btn-block" @click="viewCategoriesContainer()">
                        View Categories
                    </button>
                </div>
                <div class="col-lg-4 d-flex justify-content-center">
                    <button class="btn btn-warning btn-block" @click="viewIdolsContainer()">
                        View Idols
                    </button>
                </div>
            </div>
            <div class="row my-2" :class="{ hidden: !viewCategories }">
                <div v-for="category in newJAVCategories" :key="category.id"
                    class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                    <button v-if="category.selected" class="active btn btn-light btn-sm btn-category-admin"
                        @click="addCategory(category.id)">
                        {{ category.name }}
                    </button>
                    <button v-else class="btn btn-light btn-sm btn-category-admin" @click="addCategory(category.id)">
                        {{ category.name }}
                    </button>
                </div>
            </div>
            <div class="row my-2" :class="{ hidden: !viewIdols }">
                <div v-for="idol in newJAVIdols" :key="idol.id"
                    class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                    <button v-if="idol.selected" class="active btn btn-light btn-sm btn-category-admin"
                        @click="addIdol(idol.id)">
                        {{ idol.name }}
                    </button>
                    <button v-else class="btn btn-light btn-sm btn-category-admin" @click="addIdol(idol.id)">
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

const imgCodePreview = ref(0);

let imgPreview = "";

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

imgPreview = javData.poster;

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
    imgPreview = newJAVPoster;
    imgCodePreview._rawValue.src = imgPreview;
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

    const { data, error } = await useFetch(api+'/javs/updateJav', {
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