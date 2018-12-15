<template>
    <v-container pa-0>
        <v-card class="hide-overflow justify-center child-flex">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhyperniteltd&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=191155521298273"
                    width="400"
                    height="200"
                    style="border:none;overflow:scroll"
                    scrolling="yes"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"></iframe>
        </v-card>
        <br>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">贊助我們</v-card-title>
            <v-card-text class="body-1">
                贊助我們吧勇者大人! 贊助我們吧勇者大人! 贊助我們吧勇者大人! 贊助我們吧勇者大人! 贊助我們吧勇者大人! 贊助我們吧勇者大人!
            </v-card-text>
            <v-card-actions class="justify-center child-flex">
                <v-btn class="primary">Paypal</v-btn> <v-btn class="primary">Alipay</v-btn>
            </v-card-actions>
        </v-card>
        <br>
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
              bar: SidebarJson,
            }
        }
    }
</script>

<style scoped>

</style>