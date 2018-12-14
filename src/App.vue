<template>
  <v-app>
    <v-navigation-drawer v-if="checkNav()" permanent app slide-y-transition class="hidden-md-and-up">
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
        <template  v-for="button in buttons">
        <v-list-tile :key="button.goto" :to="button.goto">
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
      <v-toolbar-side-icon @click="nav = !nav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-img src="/img/headlogo/HNlogo.png" alt="HyperNite" max-width="90px" max-height="40px"></v-img>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <template v-for="(button,index) in buttons">
          <router-link :key="index" :to="button.goto"><v-btn flat >{{button.name}}</v-btn></router-link>
        </template>
      <v-btn flat href="//www.hypernite.com">返回主頁</v-btn>
      </template>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md class="align-center">
        <v-layout :class="$vuetify.breakpoint.mdAndDown ? media : ''">
          <v-flex xs10>
            <router-view></router-view>
          </v-flex>
          <v-flex>
            <Sidebar></Sidebar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data () {
    return {
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
  methods:{
    checkNav(){
      if (this.$vuetify.breakpoint.mdAndUp) this.nav = false;
      return this.nav && this.$vuetify.breakpoint.mdAndDown
    }
  },
  computed:{

  }
}

</script>
