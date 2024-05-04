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
                const queryParams = {
                    limit: store.charactersLimits,
                }
                axios.get ('https://dragonball-api.com/api/characters', {
                    params: queryParams
                })
                .then ((response) => {
                    store.charactersList = response.data.items;
                })
            },
            getAllCharactersFromApi() {
                axios.get ('https://dragonball-api.com/api/characters?limit=58')
                .then ((response) => {
                    store.allCharacters = response.data.items;
                })
            },
        },
        mounted(){
            this.getInfoFromApi();
            this.getAllCharactersFromApi();
        }
    }
</script>

<template>
    <!-- $emit che al change lancia la chiamata axios per modificare il numero di personaggi mostrati -->
    <AppHeader @showMore="getInfoFromApi()"></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
  @use './style/generic';
</style>