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
        if (!data._value.alive || data._value.data.userAdmin == 0) {
            return navigateTo('/');
        } else {
            const regexAdmin = new RegExp('^\/dashboard');
            if (data._value.data.userAdmin == 1 && regexAdmin.test(to.path)) {
                console.log("Entering protected route...");
            }else{
                return navigateTo('/');
            }           
        }
    } else {
        return navigateTo('/');
    }
});
