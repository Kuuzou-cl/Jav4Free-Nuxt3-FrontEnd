<template>
    <div class="container-fluid">
        <div class="alert alert-warning mt-1 mb-4">
            <strong>{{ title }}</strong> {{ text }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'text']);
</script>