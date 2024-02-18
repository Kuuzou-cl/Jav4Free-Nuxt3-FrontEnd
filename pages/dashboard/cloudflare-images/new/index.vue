<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="col-lg-12">
                <h3 class="title">Upload image to Cloudflare</h3>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-lg-6">
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
        </div>
        <div class="row my-2">
            <div class="col-lg-12 d-flex justify-content-center">
                <button class="btn btn-success" @click="postImage()">
                    Upload Image
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

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const formFile = ref(0);
const renderComponent = ref(true);

let variantsURL = [];


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