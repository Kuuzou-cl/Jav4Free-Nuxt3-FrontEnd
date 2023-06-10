<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>New Scene</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-4">
                <div class="col-lg-6 ">
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Scene Title</label>
                            <input v-model="newSceneTitle" class="input-admin"
                                placeholder="Enter video title, no characters limit" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Scene Code</label>
                            <input v-model="newSceneCode" class="input-admin"
                                placeholder="Enter video code, example 'ABC-000'" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Scene Duration</label>
                            <input v-model="newSceneDuration" class="input-admin" placeholder="Enter duration in minutes" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Hidden</label>
                            <input type="checkbox" class="input-admin" v-model="newSceneHide" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-12">
                            <video controls muted ref="videoPreviewMini">
                                <source type="video/mp4" />
                            </video>
                        </div>
                        <button class="btn btn-warning" @click="changeUrlVideo()">
                            Reload Video
                        </button>
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
                <div v-for="category in newSceneCategories" :key="category.id"
                    class="col-lg-3 col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center">
                    <button v-if="category.selected" class="active btn btn-light btn-sm btn-category-admin" @click="addCategory(category.id)">
                        {{ category.name }}
                    </button>
                    <button  v-else class="btn btn-light btn-sm btn-category-admin" @click="addCategory(category.id)">
                        {{ category.name }}
                    </button>
                </div>
            </div>
            <div class="row my-2" :class="{ hidden: !viewIdols }">
                <div v-for="idol in newSceneIdols" :key="idol.id"
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
                    <button class="btn btn-success" @click="postScene()">
                        Add Scene
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

const videoPreviewMini = ref(0);

let newSceneTitle = "";
let newSceneCode = "";
let newSceneDuration = "";
let newSceneHide = true;

let videoPreview = "";

const viewCategories = ref(false);
const viewIdols = ref(false);

const { data: dataCategories } = await useFetch('https://jav.souzou.dev/categories/v2');
const newSceneCategories = ref(dataCategories._rawValue.Categories);
newSceneCategories._rawValue.forEach(element => {
    element.selected = false;
});

const { data: dataIdols } = await useFetch('https://jav.souzou.dev/idols/getAllv2');
const newSceneIdols = ref(dataIdols._rawValue.Idols);
newSceneIdols._rawValue.forEach(element => {
    element.selected = false;
});

const changeUrlVideo = async () => {
    videoPreview = "https://d27vxor1f495av.cloudfront.net/scenes/" + newSceneCode + ".mp4";
    videoPreviewMini._rawValue.src = videoPreview;
}

const postScene = async () => {
    const cookieToken = useCookie('token');
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieToken.value);

    let tempCategories = [];
    newSceneCategories._rawValue.forEach(element => {
        if (element.selected) {
            tempCategories.push(element.id);
        }
    });

    let tempIdols = [];
    newSceneIdols._rawValue.forEach(element => {
        if (element.selected) {
            tempIdols.push(element.id);
        }
    });

    const { data, error } = await useFetch('https://jav.souzou.dev/scenes/newScenev2', {
        method: 'POST',
        headers: myHeaders,
        body: {
            title: newSceneTitle,
            code: newSceneCode,
            video: "https://d27vxor1f495av.cloudfront.net/scenes/" + newSceneCode + ".mp4",
            video480p: "https://d27vxor1f495av.cloudfront.net/scenes_480/" + newSceneCode + "_1.mp4",
            duration: newSceneDuration,
            hide: newSceneHide,
            previewImage: "https://d27vxor1f495av.cloudfront.net/scenes-preview/" + newSceneCode + ".mp4",
            staticImage: "https://d27vxor1f495av.cloudfront.net/scenes-static/" + newSceneCode + "-static.jpg",
            vtt: "https://d27vxor1f495av.cloudfront.net/vtts/" + newSceneCode + "_thumbs.vtt",
            categories: tempCategories,
            idols: tempIdols
        }
    })
    
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
        return newSceneCategories;
    },
    // setter
    set(newValue) {
        newSceneCategories.value.forEach(category => {
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
        return newSceneIdols;
    },
    // setter
    set(newValue) {
        newSceneIdols.value.forEach(idol => {
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
    }
};

const viewIdolsContainer = () => {
    if (viewIdols._rawValue) {
        computedViewIdols.value = false;
    } else {
        computedViewIdols.value = true;
    }
};

const addCategory = (_id) => {
    computedSelectCategories.value = _id;
};

const addIdol = (_id) => {
    computedSelectIdols.value = _id;
};

</script>