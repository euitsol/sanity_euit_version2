import sanityClient from "@sanity/client";

export default sanityClient({
    projectId:"tu9joqbm",
    dataset:"production",
    apiVersion: '2021-08-31',
    token: '',
    useCdn: true
})