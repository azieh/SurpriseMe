import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Meta from 'vue-meta';
import VueAnalytics from 'vue-analytics';
Vue.use(Meta);
Vue.use(Vuetify);
Vue.use(VueAnalytics, {
    id: 'UA-165404331-1'
  });

export default new Vuetify({
});
