<template>
    <div class="container py-5">
        <div class="row">
            <h1>AAAAAAAAA</h1>
        </div>
    </div>
</template>
<script setup>
const { isMobile, isTablet } = useDevice();
definePageMeta({
    middleware: [
        'auth'
    ]
});
definePageMeta({
    layout: "admin",
});
</script>