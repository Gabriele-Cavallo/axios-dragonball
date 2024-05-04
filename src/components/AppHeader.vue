<script>
    import { store } from '../store.js';

    export default {
        name: 'AppHeader',
        data(){
            return {
                store,
            }
        },
    }
</script>

<template>
    <header class="d-flex jst-cntr algn-cntr anchor">
        <img src="../assets/img/logo.png" alt="logo">
        <div class="select-wrapper">
            <label for="character-number">Show More: </label>
            <!-- Select che al change lancia un $emit ad AppVue per modificare il numero di personaggi visualizzati -->
            <select @change="$emit('showMore')" id="character-number" v-model="store.charactersLimits">
                <option value="">Seleziona qui</option>
                <option v-for="character, index in store.allCharacters">{{ (index + 1)}}</option>
            </select>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *; 

header{
    height: 170px;
    padding: 20px;
    background-color: $section-bg;
    img{
        max-width: 300px;
    }
    .select-wrapper{
        position: absolute;
        bottom: 20px;
        right: 10px;
        label{
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 2px $blue;
        }
    }
}
</style>