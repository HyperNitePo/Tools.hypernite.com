<template>
    <v-container pa-0>
        <template  v-for="(side,index) in bar" >
        <v-card :key="index">
            <v-card-title class="title grey darken-3 white--text">{{side.title}}</v-card-title>
            <v-card-text class="body-1" v-html="side.content"></v-card-text>
        </v-card>
            <br :key="index">
        </template>
    </v-container>
</template>

<script>
    import SidebarJson from '../../public/json/sidebar'
    export default {
        name: "Sidebar",
        data: ()=>{
            return{
              bar: SidebarJson
            }
        },
    }
</script>

<style scoped>

</style>