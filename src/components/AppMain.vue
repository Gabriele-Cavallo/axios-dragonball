<script>
    import { store } from '../store.js';
    import CharacterCard from './CharacterCard.vue'

    export default {
        name: 'AppMain',
        components:{
            CharacterCard,
        },
        data(){
            return {
                store,
            }
        },
    }
</script>

<template>
    <main class="d-flex jst-cntr algn-cntr flex-col">
        <div class="row">
            <div class="col">
                <div class="card-wrapper d-flex d-wrap algn-cntr jst-cntr">
                    <CharacterCard v-for="card in store.charactersList" :characterInfo = 'card'></CharacterCard>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *; 

main{
    height: calc(100vh - 235px);
    padding: 20px;
    background-color: $blue;
    overflow-y: auto;
    overflow-x: hidden;
    .row{
        width: 100%;
        min-height: calc(100vh - 275px);
        .col{
            min-height: calc(100vh - 275px);
            .card-wrapper{
                height: 100%;
            }
        }
    }
}
</style>