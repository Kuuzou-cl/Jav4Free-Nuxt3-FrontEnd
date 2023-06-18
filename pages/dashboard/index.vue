<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>Pending Posts</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-2">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>JAV Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="jav in pendingFiles.Javs" :key="jav.id">
                                <td>{{ jav.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Scene Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="scene in pendingFiles.Scenes" :key="scene.id">
                                <td>{{ scene.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Idol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="idol in pendingFiles.Idols" :key="idol.id">
                                <td>{{ idol.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

const { data: pendingFiles } = await useFetch('https://jav.souzou.dev/aws/stateFiles/pending');

</script>