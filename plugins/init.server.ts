import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
    /*const cookieEmail = useCookie('email');
    const cookieToken = useCookie('token');
    const config = useRuntimeConfig();

    if (cookieEmail != null && cookieToken != null) {
        const myHeaders = new Headers();
        myHeaders.append("authorization", cookieToken.value);

        const { data, error } = await useFetch('https://jav.souzou.dev/users/currentAlive', {
            method: 'POST',
            headers: myHeaders,
            body: { email: cookieEmail },

        })

        console.log(data._value.alive)        
    }else{
        console.log("not user log in!");
    }
    */
})

