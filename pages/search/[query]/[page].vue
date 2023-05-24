<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/scenes">Scenes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/2">Post 2</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <h1>Search page :{{ page }} - query :{{ query }}</h1>
    </div>
</template>

<script setup>
const route = useRoute();
let page = route.params.page;
let query = route.params.query;
</script>