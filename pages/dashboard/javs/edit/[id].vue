<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>New Jav</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-4">
                <div class="col-lg-6 ">
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Title</label>
                            <input v-model="newJAVTitle" class="input-admin"
                                placeholder="Enter JAV title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">JAV Code</label>
                            <input v-model="newJAVCode" class="input-admin"
                                placeholder="Enter JAV code, example 'ABC-000'" />
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
                <div class="col-lg-4 d-flex justify-content-center">
                    <button class="btn btn-warning btn-block" @click="viewScenesContainer()">
                        View Scenes
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
            <div class="row my-2" :class="{ hidden: !viewScenes }">
                <div v-for="scene in newJAVScenes" :key="scene.id"
                    class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                    <button v-if="scene.selected" class="active btn btn-light btn-sm btn-category-admin"
                        @click="addScene(scene.id)">
                        {{ scene.code }}
                    </button>
                    <button v-else class="btn btn-light btn-sm btn-category-admin" @click="addScene(scene.id)">
                        {{ scene.code }}
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

const imgCodePreview = ref(0);

let imgPreview = "";

const viewCategories = ref(false);
const viewIdols = ref(false);
const viewScenes = ref(false);

const { data: dataJav } = await useFetch('https://jav.souzou.dev/javs/javIdv2?id=' + id);

let newJAVTitle = dataJav._rawValue.Jav.title;
let newJAVCode = dataJav._rawValue.Jav.code;
let newJAVHide = dataJav._rawValue.Jav.hide;

console.log(dataJav._rawValue.Jav.hide)

if (dataJav._rawValue.Jav.hide == 1) {
    newJAVHide = true;
} else {
    newJAVHide = false;
}

imgPreview = "https://d27vxor1f495av.cloudfront.net/javs/" + newJAVCode + ".jpg";


const { data: dataScenes } = await useFetch('https://jav.souzou.dev/scenes/getAllv2');
const newJAVScenes = ref(dataScenes._rawValue.Scenes);
newJAVScenes._rawValue.forEach(element => {
    if (dataJav._rawValue.Scenes.find((objScene) => objScene.id === element.id)) {
        element.selected = true;
    } else {
        element.selected = false;
    }
});

const { data: dataCategories } = await useFetch('https://jav.souzou.dev/categories/v2');
const newJAVCategories = ref(dataCategories._rawValue.Categories);
newJAVCategories._rawValue.forEach(element => {
    if (dataJav._rawValue.Categories.find((objCategory) => objCategory.id === element.id)) {
        element.selected = true;
    } else {
        element.selected = false;
    }
});

const { data: dataIdols } = await useFetch('https://jav.souzou.dev/idols/getAllv2');
const newJAVIdols = ref(dataIdols._rawValue.Idols);
newJAVIdols._rawValue.forEach(element => {
    if (dataJav._rawValue.Idols.find((objIdol) => objIdol.id === element.id)) {
        element.selected = true;
    } else {
        element.selected = false;
    }
});

const changeUrlImg = async () => {
    imgPreview = "https://d27vxor1f495av.cloudfront.net/javs/" + newJAVCode + ".jpg";
    imgCodePreview._rawValue.src = imgPreview;
}

const updateJav = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    let tempCategories = [];
    newJAVCategories._rawValue.forEach(element => {
        if (element.selected) {
            console.log(element.selected);
            tempCategories.push(element);
        }
    });

    let tempIdols = [];
    newJAVIdols._rawValue.forEach(element => {
        if (element.selected) {
            tempIdols.push(element);
        }
    });

    let tempScenes = [];
    newJAVScenes._rawValue.forEach(element => {
        if (element.selected) {
            tempScenes.push(element);
        }
    });

    let tempJAVHide = 0;

    if (newJAVHide) {
        tempJAVHide = 1;
    }

    const { data, error } = await useFetch('https://jav.souzou.dev/javs/updateJavv2', {
        method: 'PATCH',
        headers: myHeaders,
        body: {
            id: id,
            title: newJAVTitle,
            code: newJAVCode,
            image: imgPreview,
            hide: tempJAVHide,
            categories: tempCategories,
            idols: tempIdols,
            scenes: tempScenes
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

const computedViewScenes = computed({
    // getter
    get() {
        return viewScenes;
    },
    // setter
    set(newValue) {
        viewScenes.value = newValue;
    }
});

const computedSelectCategories = computed({
    // getter
    get() {
        return newJAVCategories;
    },
    // setter
    set(newValue) {
        newJAVCategories.value.forEach(category => {
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
        newJAVIdols.value.forEach(idol => {
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

const computedSelectScenes = computed({
    // getter
    get() {
        return newJAVScenes;
    },
    // setter
    set(newValue) {
        newJAVScenes.value.forEach(scene => {
            if (scene.id === newValue) {
                if (scene.selected) {
                    scene.selected = false;
                } else {
                    scene.selected = true;
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
        computedViewScenes.value = false;
    }
};

const viewIdolsContainer = () => {
    if (viewIdols._rawValue) {
        computedViewIdols.value = false;
    } else {
        computedViewIdols.value = true;
        computedViewCategories.value = false;
        computedViewScenes.value = false;
    }
};

const viewScenesContainer = () => {
    if (viewScenes._rawValue) {
        computedViewScenes.value = false;
    } else {
        computedViewScenes.value = true;
        computedViewIdols.value = false;
        computedViewCategories.value = false;
    }
};

const addCategory = (_id) => {
    computedSelectCategories.value = _id;
};

const addIdol = (_id) => {
    computedSelectIdols.value = _id;
};

const addScene = (_id) => {
    computedSelectScenes.value = _id;
};

</script>