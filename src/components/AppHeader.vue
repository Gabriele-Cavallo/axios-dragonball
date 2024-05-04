<script>
    export default {
        name: 'AppHeader',
        data(){
            return {

            }
        },
    }
</script>

<template>
    <header class="d-flex jst-cntr algn-cntr">
        <img src="../assets/img/logo.png" alt="logo">
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
}
</style>