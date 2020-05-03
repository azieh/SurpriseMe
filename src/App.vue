<template>
  <v-app>
    <TopBar></TopBar>

    <v-content>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Shops></Shops>
        <Instagram></Instagram>
    </v-content>

    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >&copy; {{ (new Date()).getFullYear() }} — Wasyl Destroyer for SurpriseMe.pl with &hearts;</div>
    </v-footer>
  </v-app>
</template>

<script>

import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Shops from './components/Shops'
import AboutMe from './components/AboutMe';
import Instagram from './components/Instagram'

export default {
  name: "App",

  components: {
    TopBar,
    Hero,
    Shops,
    AboutMe,
    Instagram
  }
};
</script>
