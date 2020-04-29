<template>
  <section id="Shops">
    <v-parallax :height="$vuetify.breakpoint.smAndDown ? 1400 : 500" src="../img/shop_bg.jpg">
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col v-for="(shop, name) of shops" :key="name">
            <div class="text-center">
              <a :href="shop.link">
                <v-avatar class="elevation-12 mb-12" size="256">
                  <v-img size="256" v-bind:src="shop.icon"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "Shops",
  data() {
    return {
      shops: [
        {
          icon: require("../img/shops/artillo.jpg"),
          link: "https://artillo.pl/sklep/surpriseME.html",
        },
        {
          icon: require("../img/shops/art-madam.jpg"),
          link: "https://art-madam.pl/opinie/surprise-ME",
        },
        {
          icon: require("../img/shops/decobazaar.jpg"),
          link: "https://www.decobazaar.com/surprise-me",
        }
      ]
    };
  }
};
</script>
