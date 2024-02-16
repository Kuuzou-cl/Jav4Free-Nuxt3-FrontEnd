export default defineNuxtRouteMiddleware(async (to, from) => {
    const runtimeConfig = useRuntimeConfig();
    const api = runtimeConfig.public.apiBase;

    const cookieEmail = useCookie('email');
    const cookieToken = useCookie('token');

    if (cookieEmail.value != null && cookieToken.value != null) {
        console.log(cookieEmail)
        const myHeaders = new Headers();
        myHeaders.append("authorization", cookieToken.value);

        const { data, error } = await useFetch(api + '/users/currentAlive', {
            method: 'POST',
            headers: myHeaders,
            body: { email: cookieEmail },

        })
        if (!data._value.alive) {
            return navigateTo('/');
        } else {
            console.log("Entering protected route...");
        }
    } else {
        return navigateTo('/');
    }
});
