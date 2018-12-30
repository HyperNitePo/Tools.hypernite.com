<template>
  <v-app>
    <v-navigation-drawer v-model="nav" slide-x-transition fixed temporary class="hidden-md-and-up">
      <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            導航
          </v-list-tile-title>
        </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <template  v-for="(button,index) in buttons">
            <v-list-tile :key="index" :to="button.goto" @click.native="global.toTop">
          <v-list-tile-action>
            <v-icon>{{button.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{button.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app>
      <v-toolbar-side-icon  @click.stop="nav = !nav" class="hidden-md-and-up"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-img src="/img/headlogo/HNlogo.png" alt="HyperNite" max-width="90px" max-height="40px"></v-img>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <template v-for="(button,index) in buttons">
          <router-link :key="index" :to="button.goto"><v-btn flat >{{button.name}}</v-btn></router-link>
        </template>
        <v-spacer></v-spacer>
      <v-btn flat href="//www.hypernite.com">返回主頁</v-btn>
      </template>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md class="align-center">
        <v-layout :class="$vuetify.breakpoint.mdAndDown ? media : ''">
          <v-flex xs10>
            <router-view></router-view>
            <br>
          </v-flex>
          <v-flex xs2>
            <Sidebar></Sidebar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import global from './gFunctions'

export default {
  name: 'App',
  components: {
    Footer,
    Sidebar
  },
  data () {
    return {
        global: global(),
      nav: false,
      media: [
        'column',
        'br-5',
        'bl-5',
      ],
      buttons: [
        {
          goto: '/',
          name: '系統公告',
          icon: 'home'
        },
        {
          goto: '/tools',
          name: '實用工具',
          icon: 'build'
        },
        {
          goto: '/games',
          name: '網頁遊戲',
          icon: 'games'
        },
      ]
    }
  },
  computed:{
  }
}
</script>
<style>
  a, a:hover, a:active{
    text-decoration: none;
  }
</style>
