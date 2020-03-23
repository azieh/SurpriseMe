<template>
  <section id="blog">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Posty na Instagramie</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col cols="12" md="4">
          <instagram-embed class-name="mb-4" :url="'https://www.instagram.com/p/B3VL50_HTrH/'" :max-width="500" />
          </v-col><v-col cols="12" md="4">
          <instagram-embed class-name="mb-4" :url="'https://www.instagram.com/p/B0QWNSFIrRz/'" :max-width="500" />
          </v-col><v-col cols="12" md="4">
          <instagram-embed class-name="mb-4" :url="'https://www.instagram.com/p/Bm-cvROhNlZ/'" :max-width="500" />
        </v-col>
      </v-row>
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
