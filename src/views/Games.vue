<template>
    <v-container pa-0>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">網頁遊戲</v-card-title>
            <v-card-text class="body-1">
                <v-container pa-0 grid-list-md text-xs-center>
                    <v-layout :key="lists" v-for="lists in list.length" row wrap>
                        <v-flex :class="$vuetify.breakpoint.mdAndUp ? 'xs3' : 'xs12'" :key="index" v-for="(button,index) in list[lists-1]">
                            <v-card hover>
                                <a>
                                    <v-img max-height="70px" aspect-ratio="1.5" alt="logo" :lazy-src="'/img/games/'+button.src"></v-img>
                                    <v-card-title class="subheading grey darken-2 white--text font-weight-medium">{{button.name}}</v-card-title>
                                </a>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
        <br>
    </v-container>
</template>

<script>
    import GameJson from '../../public/json/games'

    export default {
        name: "Games",
        data: ()=>{
            return{
                list: Array.from(GameJson)
            }
        },
        methods: {
        }
    }
</script>