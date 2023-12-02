<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>All Categories</h6>
            </div>
        </div>
        <div class="container">       
            <div class="row my-2">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in allCategories.Categories" :key="category.id">
                                <th>{{ category.name }}</th>                            
                                <td>
                                    <nuxt-link :to="'/dashboard/categories/edit/'+category.id"
                                        class="btn button-admin">Edit</nuxt-link>
                                </td>
                                <td>
                                    <button class="btn button-admin">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const { data: allCategories } = await useFetch(api + '/categories/getCategories');

</script>