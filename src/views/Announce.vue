<template>
    <v-container pa-0>
        <template  v-for="(col,index) in column" >
            <v-card pb-20 :key="index">
                <v-card-title class="title grey darken-3 white--text">{{col.title}}</v-card-title>
                <v-card-text class="body-1" v-html="col.content"></v-card-text>
            </v-card>
            <br :key="index">
        </template>
    </v-container>
</template>

<script>
    import AnnounceJson from '../../public/json/announce'
    export default {
        name: "Announce",
        data: ()=>{
            return{
                column: AnnounceJson,
            }
        }
    }
</script>

<style scoped>

</style>