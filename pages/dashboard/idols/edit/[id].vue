<template>
    <div class="container-fluid">
        <div class="row row-title my-2 py-1">
            <div class="col-lg-12 text-center">
                <h6>New Idol</h6>
            </div>
        </div>
        <div class="container">
            <div class="row my-4">
                <div class="col-lg-6 ">
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Idol Name</label>
                            <input v-model="newIdolName" class="input-admin"
                                placeholder="Enter Idol name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label class="title-input-admin">Hidden</label>
                            <input type="checkbox" class="input-admin" v-model="newIdolHide" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-center">
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <img class="preview-img-jav" ref="imgCodePreview"
                                :src="imgPreview" />
                        </div>
                        <button class="btn btn-warning" @click="changeUrlImg()">
                            Reload Cover
                        </button>
                    </div>
                </div>
            </div>
            <div class="row my-2">
                <div class="col-lg-12 d-flex justify-content-center">
                    <button class="btn btn-success" @click="postIdol()">
                        Update Idol
                    </button>
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

const route = useRoute();
let id = route.params.id;

const {data : dataIdol} = await useFetch('https://jav.souzou.dev/idols/getIdolv2?id='+id);

const imgCodePreview = ref(0);

let newIdolName = dataIdol._rawValue.Idol.name;
let newIdolHide = dataIdol._rawValue.Idol.hide;

let imgPreview = dataIdol._rawValue.Idol.image;

const changeUrlImg = async () => {
    imgPreview = "https://d27vxor1f495av.cloudfront.net/idols/" + newIdolName.toLowerCase().replace(" ", "-") + ".jpg";
    imgCodePreview._rawValue.src = imgPreview;
}

const postIdol = async () => {
    const cookieToken = useCookie('token');
    const cookieBearer = 'Bearer ' + cookieToken.value;
    const myHeaders = new Headers();
    myHeaders.append("authorization", cookieBearer);

    const { data, error } = await useFetch('https://jav.souzou.dev/idols/updateIdolv2', {
        method: 'PATCH',
        headers: myHeaders,
        body: {
            id: id,
            name: newIdolName,
            image: imgPreview           
        }
    })

};

</script>