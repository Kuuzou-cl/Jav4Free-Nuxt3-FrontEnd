<template>
    <Navbar />
    <div class="container-fluid ">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>ERROR: {{ error.statusCode }} - {{ error.statusMessage }}</h6>
            </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <NuxtLink to="/" class="btn btn-more">
              Get Me Home!
            </NuxtLink>
          </div>
        </div>
    </div>
    <ModalLogin />
    <Footer />
</template>

<script setup>
const props = defineProps({
    error: Object,
});
</script>