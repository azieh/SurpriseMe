<template>
  <section id="instagram">
    <div class="py-12"></div>

    <v-container>
      <h2 class="text-center display-2 font-weight-bold mb-3">Instagram</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-layout row wrap>
      <v-flex d-flex xs12 sm4 child-flex>
      
            <instagram-embed :url="'https://www.instagram.com/p/B_t8QGIjihy/'" :max-width="500" />
      </v-flex>
      <v-flex d-flex xs12 sm4 child-flex>
            <instagram-embed :url="'https://www.instagram.com/p/B_fCb2ODt9Y/'" :max-width="500" />
       </v-flex>
      <v-flex d-flex xs12 sm4 child-flex>
            <instagram-embed :url="'https://www.instagram.com/p/B_sXxKejGRD/'" :max-width="500" />
 
      </v-flex>
      </v-layout>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import InstagramEmbed from "vue-instagram-embed";
export default {
  name: "Instagram",
  components: {
    InstagramEmbed
  }
};
</script>
