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
        <v-flex d-flex xs12 sm4 child-flex v-for="(post, name) of posts" :key="name">
          <instagram-embed :url="post" :max-width="500" />
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
  data() {
    return {
      posts: [
        "https://www.instagram.com/p/CBDQGqqHmm1/",
        "https://www.instagram.com/p/CA53QMyHtsq/",
        "https://www.instagram.com/p/CAuZgTwnPKn/",
        "https://www.instagram.com/p/CAqLT-4n94W/",
        "https://www.instagram.com/p/CAlR4VmHHDF/",
        "https://www.instagram.com/p/CAauVhCn8-1/",
        "https://www.instagram.com/p/CAVBzPen3Nv/",
        "https://www.instagram.com/p/CAPghDJnmdT/",
        "https://www.instagram.com/p/CAKM3tXH2Xp/",
        "https://www.instagram.com/p/CAI8LehHffg/",
        "https://www.instagram.com/p/CAFdXBpHjZ9/",
        "https://www.instagram.com/p/CADoWMmHlsL/",
        "https://www.instagram.com/p/B_7YpxXHZJL/",
        "https://www.instagram.com/p/B_0RBOKHUhj/",
        "https://www.instagram.com/p/B_sXxKejGRD/",
        "https://www.instagram.com/p/B_fCb2ODt9Y/",
        "https://www.instagram.com/p/B_t8QGIjihy/"
      ]
    };
  },
  components: {
    InstagramEmbed
  }
};
</script>
