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
                        Update Category
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

const {data : dataCategory} = await useFetch('https://jav.souzou.dev/categories/getCategoryv2?id='+id);

let newCategoryName = dataCategory._rawValue.Category.name;

const postCategory = async () => {
    const cookieToken = useCookie('token');
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieToken.value);

    const { data, error } = await useFetch('https://jav.souzou.dev/categories/updateCategoryv2', {
        method: 'PATCH',
        headers: myHeaders,
        body: {
            id: id,
            name: newCategoryName       
        }
    })

};

</script>