<script>
    export default {
        name: 'CharacterCard',
        props:{
            characterInfo: Object,
        },
        data(){
            return {

            }
        },
    }
</script>

<template>
    <!-- Tramite le props ricevute da AppMain popolo le informazioni della card personaggio -->
    <div class="card d-flex">
        <div class="img-col anchor">
            <img :src="characterInfo.image" alt="character image">
        </div>
        <div class="info-col d-flex flex-col algn-cntr flex-grow jst-cntr">
            <h2>{{characterInfo.name}}</h2>
            <h4>{{characterInfo.race}}</h4>
            <div>{{characterInfo.gender}}</div>
            <div>KI: {{characterInfo.ki}}</div>
            <div>MAX KI: {{characterInfo.maxKi}}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *; 

.card{
    padding: 20px;
    min-height: 40%;
    margin: 10px 5px;
    background-color: $section-bg;
    border-radius: 20px;
    width: calc((100% / 5) - 10px);
    color: white;
    text-shadow: 1px 1px 2px $blue;
    .img-col{
        width: 50%;
        img{
            min-height: 300px;
            max-height: 300px;
            object-fit: contain;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }
    }
    .info-col{
        font-size: 130%;
        text-align: center;
    }
    
}
@media screen and (max-height: 1020px){
    .card{
        min-height: 300px; 
    }
}
@media screen and (max-width: 1980px){
    .card{
        width: calc((100% / 4) - 10px); 
    }
}
@media screen and (max-width: 1400px){
    .card{
        width: calc((100% / 3) - 20px); 
    }
}
@media screen and (max-width: 992px){
    .card{
        width: calc((100% / 2) - 20px); 
    }
}
@media screen and (max-width: 768px){
    .card{
        width: 80%;
        min-height: 445px;
        flex-direction: column;
        .img-col{
            height: 50%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            img{
                position: relative;
                top: 0;
                left: 0;
                display: block;
                transform: translate(0, 0);
            }
        }
        .info-col{
            height: 50%;
            flex-grow: 0;
        }
    }
}
</style>