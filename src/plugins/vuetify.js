import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Meta from 'vue-meta';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-165404331-1" }
});
Vue.use(Meta);
Vue.use(Vuetify);

export default new Vuetify({
});
