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
                    <input class="form-control form-control-sm" ref="formFile" type="file" @change="onFileChange()">
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
const token = runtimeConfig.public.apiTokenCloudflare;

const formFile = ref(0);

let fileToUpload;


const postImage = async () => {
    const cookieBearer = 'Bearer ' + token;
    const myHeaders = new Headers();    
    myHeaders.append("Authorization", cookieBearer);
    myHeaders.append("Content-Type", "multipart/form-data");

    const formData = new FormData();

    formData.append("file", formFile._value.files[0], formFile._value.files[0].name);
    formData.append("requireSignedURLs",false);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    await fetch("https://api.cloudflare.com/client/v4/accounts/70e8c8aff115acf6bcc8cd9998cdda6e/images/v1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


};


const onFileChange = () => {
    console.log(formFile._value.files[0].name);
    console.log(formFile._value.files[0]);
    fileToUpload = formFile._value.files[0];
    console.log(fileToUpload);
}

</script>