<template>
    <v-container pa-0>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">網頁遊戲</v-card-title>
            <v-card-text class="body-1">
                <v-container pa-0 grid-list-md text-xs-center>
                    <v-layout :key="lists" v-for="lists in list.length" row wrap>
                        <v-flex :class="$vuetify.breakpoint.mdAndUp ? 'xs3' : 'xs12'" :key="index" v-for="(button,index) in list[lists-1]">
                            <v-card @click="global.toTop" hover>
                                <router-link :to="'/games/'+button.goto">
                                    <v-img :src="'img/games/'+button.src" alt="logo" aspect-ratio="1" height="150px"
                                           position="center center"></v-img>
                                    <v-card-title class="subheading grey darken-2 white--text font-weight-medium">{{button.name}}</v-card-title>
                                </router-link>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import GameJson from '../../public/json/games'
    import global from '../gFunctions'

    export default {
        name: "Games",
        data: ()=>{
            return{
                global: global(),
                list: GameJson
            }
        },
        methods: {
        }
    }
</script>