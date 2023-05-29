export default defineNuxtRouteMiddleware(async (to, from) => {
    const cookieEmail = useCookie('email');
    const cookieToken = useCookie('token');

    if (cookieEmail.value != null && cookieToken.value != null) {
        console.log(cookieEmail)
        const myHeaders = new Headers();
        myHeaders.append("authorization", cookieToken.value);

        const { data, error } = await useFetch('https://jav.souzou.dev/users/currentAlive', {
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
