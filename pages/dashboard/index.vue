<template>
    <div class="container">
        <div class="row my-2 py-1">
            <div class="col-lg-12">
                <h3 class="title">Pending Posts</h3>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: [
        'auth'
    ],
    layout: "admin"
});

</script>