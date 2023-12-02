<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Pending Posts</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">

            </div>
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