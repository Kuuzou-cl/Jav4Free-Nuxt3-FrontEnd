<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="division">
                        <div class="row row-title my-4 py-2">
                            <div class="col-lg-12 text-center">
                                <h6>Jav4free Area</h6>
                            </div>
                        </div>
                    </div>
                    <form class="myform px-4">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" v-model="email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <div class="form-group mt-3">
                            <button @click="login()" type="button" class="btn btn-block btn-primary btn-lg">
                                <font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let email = '';
let password = '';

const runtimeConfig = useRuntimeConfig();
const api = runtimeConfig.public.apiBase;

const login = async () => {
    const { data, error } = await useFetch(api + '/users/login', {
        method: 'POST',
        body: { email, password }
    })
    if (data._rawValue.token != null && !data._rawValue.error) {
        const cookieEmail = useCookie('email');
        cookieEmail.value = email;
        const cookieToken = useCookie('token');
        cookieToken.value = data._rawValue.token;
        reloadNuxtApp({
            path: "/",
            ttl: 1000, // default 10000
        });
    }
};

</script>

<style lang="scss">
.modal {
    --bs-modal-bg: #141414 !important;
}


.form-control {
    border: 1px solid #141414;
    color: #ccc;
    border-radius: 3px;
    background: #444;
    margin-bottom: 20px;
    letter-spacing: 1px;

}

.form-control:focus {
    border: 1px solid #141414;
    border-radius: 3px;
    box-shadow: none;
    background: #212042;
    color: #ccc;
    letter-spacing: 1px;
}

.btn-primary {
    background: #da0000;
    border: none;
    border-radius: 50px;
}

.btn-primary:focus {
    box-shadow: none;
    border: none;
}
</style>