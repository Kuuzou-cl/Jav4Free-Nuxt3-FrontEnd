<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="title">New Idol</h3>
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
            <div class="col-lg-6 ">
                <div class="row">
                    <label class="title">Idol Name</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newIdolName" class="input-admin" placeholder="Enter Idol name" />
                </div>
                <div class="row">
                    <label class="title">Image link</label>
                </div>
                <div class="row mb-4">
                    <input v-model="newIdolImage" class="input-admin" placeholder="Enter cloudflare image link" />
                </div>
            </div>
            <div class="col-lg-6 ">
                <div class="row justify-content-center mb-4">
                    <button class="btn category-title" @click="changeUrlImg()">
                        Reload Files
                    </button>
                </div>
                <div class="row">
                    <div class="col-lg-6 text-center">
                        <div class="row">
                            <h6 class="title">Image</h6>
                        </div>
                        <div class="row justify-content-center mb-4">
                            <img class="preview-img-jav" ref="imgCodePreview" :src="imgPreview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-12 d-flex justify-content-center">
                <button class="btn btn-success" @click="postIdol()">
                    New Idol
                </button>
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

const imgCodePreview = ref(0);

let newIdolName = "";
let newIdolImage = "";

let imgPreview = "";

const changeUrlImg = async () => {
    imgPreview = newIdolImage;
    imgCodePreview._rawValue.src = imgPreview;
}

const postIdol = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    const { data, error } = await useFetch(api + '/idols/newIdol', {
        method: 'POST',
        headers: myHeaders,
        body: {
            name: newIdolName,
            poster: newIdolImage
        }
    })

    reloadNuxtApp({
        path: "/dashboard/idols/1",
        ttl: 1000, // default 10000
    });
};

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

</script>