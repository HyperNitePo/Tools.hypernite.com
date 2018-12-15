<template>
    <v-container pa-0>
        <v-card class="hide-overflow">
                <div class="fb-page resp-iframe" data-href="https://www.facebook.com/hyperniteltd/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/hyperniteltd/" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/hyperniteltd/">Hypernite Po.</a></blockquote></div>
        </v-card>
        <br>
        <v-card>
            <v-card-title class="title grey darken-3 white--text">贊助我們</v-card-title>
            <v-card-text class="body-1">
                贊助我們吧勇者大人! 贊助我們吧勇者大人!
                贊助我們吧勇者大人! 贊助我們吧勇者大人!
                贊助我們吧勇者大人! 贊助我們吧勇者大人!
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
        },
        mounted: ()=>{
                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/zh_HK/sdk.js#xfbml=1&version=v2.12&appId=1193358790711987&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
        }
    }
</script>

<style scoped>

</style>