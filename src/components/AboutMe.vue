<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Surprise ME to ja Martyna</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
        Miło Cię poznać!
        Właśnie zaczynasz podróż do mojego skrawka Internetu.
        Miejsca, gdzie każda rzecz została stworzona własnoręcznie, a ceny odzwierciedlają czas pracy spędzony podczas nadawaniu jej kształtu.
        Tworząc markę, postanowiłam, zwracać szczególną uwagę właśnie na czas. Zanim zaczęłam szyć, nie zdawałam sobie sprawy, ile pracy należy włożyć w wykonanie jednej rzeczy, która wisi u mnie w szafie. Właśnie z tego powodu, postanowiłam nie tylko sprzedawać wspaniałe rzeczy, ale i szczyptę wiedzy o procesie produkcji w moim domu. Nazwa każdego produktu to ilość godzin spędzonych podczas przygotowywania go dla Ciebie.
        Surprise ME to ubrania i akcesoria na miarę naszych czasów. Każde zaprojektowane tak, by dobrze wyglądało w różnych sytuacjach. To kanapowe ubrania, w których można wyjść na jogę czy skoczyć w góry. Surprise ME powstało z zamiłowania do etycznej mody, leżenia na kanapie i pracy własnych rąk.
      </v-responsive>

      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="../img/portret.jpg"></v-img>
      </v-avatar>
      <div></div>

      <h2 class="display-2 font-weight-bold mb-3">Odwiedź mnie</h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <v-row no-gutters>
        <v-col class="text-right">
          <a href="https://www.facebook.com/surprisemeatelier/">
            <v-avatar class="elevation-12 mb-12" size="200">
              <v-img src="../img/facebook.png"></v-img>
            </v-avatar>
          </a>
        </v-col>
        <v-col class="text-center">
          <a href="https://www.instagram.com/surprisemeatelier/">
            <v-avatar class="elevation-12 mb-12" size="200">
              <v-img src="../img/insta.png"></v-img>
            </v-avatar>
          </a>
        </v-col>
        <v-col class="text-left">
          <a href="mailto:hello.surpriseme@gmail.com">
            <v-avatar color="teal" class="elevation-12 mb-12" size="200">
              <v-img src="../img/at.png"></v-img>
            </v-avatar>
          </a>
        </v-col>
      </v-row>
       <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <div class="py-12"></div>
      <h2 class="display-2 font-weight-bold mb-3">Moje bluzy i akcesoria znajdziesz na</h2>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      logo: 'http://surpriseme.pl' + require('../img/surpriseme_color_bn.png')
    }
  },
  metaInfo() {
    return {
      meta: [
          // Twitter Card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:title', content: '&hearts; Surprise ME &hearts;'},
          {name: 'twitter:description', content: 'Surprise Me to kanapowe ubrania 🛋️ gotowe na każdą przygodę 🧘🌍 Szyte w Krakowie przez Martynę'},
          // image must be an absolute path
          {name: 'twitter:image', content: this.logo},
          // Facebook OpenGraph
          {property: 'og:title', content: '&hearts; Surprise ME &hearts;'},
          {property: 'og:site_name', content: 'surpriseme.pl'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  this.logo},
          {property: 'og:description', content: 'Surprise Me to kanapowe ubrania 🛋️ gotowe na każdą przygodę 🧘🌍 Szyte w Krakowie przez Martynę'}
      ]
    }
  }
};
</script>
