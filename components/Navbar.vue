<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <NuxtLink to="/" tag="a" class="navbar-brand">
                <img src="~/assets/img/j4f-logo-black2.png" />
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink to="/idols/1" tag="a" class="nav-link">
                            Porn Videos
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/idols/1" tag="a" class="nav-link">
                            Weekly top
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/idols/1" tag="a" class="nav-link">
                            15min+
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/idols/1" tag="a" class="nav-link">
                            Categories
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/idols/1" tag="a" class="nav-link">
                            PornStars
                        </NuxtLink>
                    </li>
                </ul>
                <div class="search">
                    <input v-model="searching" class="input-search" @keyup.enter="SearchQuery(searching)" type="search"
                        placeholder="Search code or idols" required>
                    <button class="btn-search" @click="SearchQuery(searching)">Search</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
let searching = '';

const SearchQuery = (_search) => {
    router.push({ path: '/search/' + searching + '/1' })
}

</script>