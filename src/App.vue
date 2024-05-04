<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppFooter from './components/AppFooter.vue';

    export default{
        components: {
            AppHeader,
            AppMain,
            AppFooter,
        },
        data(){
            return{
                store,
            };
        },
        methods: {
            // Chiamata axios all'API di dragonball-api.com
            getInfoFromApi() {
                axios.get ('https://dragonball-api.com/api/characters')
                .then ((response) => {
                    store.charactersList = response.data.items;
                })
            }
        },
        mounted(){
            this.getInfoFromApi();
        }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
  @use './style/generic';
</style>