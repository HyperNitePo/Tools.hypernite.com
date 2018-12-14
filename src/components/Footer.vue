<template>
        <v-footer dark height="auto">
            <v-card flat tile class="flex">
                <v-card-title class="grey darken-3 justify-center">
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                    <strong class="subheading"> 想自行創作新的工具與遊戲 ? &nbsp; <v-btn href="//career.hypernite.com" class="success">加入我們</v-btn></strong>
                    <v-spacer></v-spacer>
                    </template>
                    <v-btn v-for="(icon,index) in icons" :key="index" class="mx-3" :href="icon.website" icon dark>
                        <v-icon>{{icon.ico}}</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-actions class="black white--text justify-center">
                    <p>&copy; HyperNitePo. 2019 - All right reserved.</p>
                </v-card-actions>
            </v-card>
        </v-footer>
</template>

<script>
    import socialmedia from '../../public/json/social/media'

    export default {
        name: "Footer",
        data: ()=>{
            return{
                icons: socialmedia
            }
        }
    }
</script>

<style scoped>

</style>