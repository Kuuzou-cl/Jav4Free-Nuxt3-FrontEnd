<template>
    <div class="row py-2 d-flex justify-content-center">
        <div class="col-lg-6">
            <div class="search">
                <input v-model="searching" class="input-search" type="search" :placeholder="searching" required>
                <button class="btn-search" @click="SearchQuery(searching)">Search</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
let searching = 'Search here ...';

const SearchQuery = (_search) => {
    console.log(_search);
    router.push({ path: '/search/' + searching + '/1' })
}
</script>