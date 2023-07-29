<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>New Category</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-4">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Category Name</label>
                            <input v-model="newCategoryName" class="input-admin"
                                placeholder="Enter category name" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-12 d-flex justify-content-center">
                    <button class="btn btn-success" @click="postCategory()">
                        Add Category
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

let newCategoryName = "";

const postCategory = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    const { data, error } = await useFetch('https://jav.souzou.dev/categories/newCategory', {
        method: 'POST',
        headers: myHeaders,
        body: {
            name: newCategoryName       
        }
    })

};

</script>