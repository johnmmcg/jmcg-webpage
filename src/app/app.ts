import Vue             from 'vue';
import VueI18n         from 'vue-i18n';
import VeeValidate     from 'vee-validate';
import { Store }       from 'vuex';
import { sync }        from 'vuex-router-sync';
import { VueRouter }   from 'vue-router/types/router';
import { i18n }        from './shared/plugins/i18n/i18n';
import { store }       from './store';
import { router }      from './router';
import { IState }      from './state';
import App             from './app/App/App.vue';
import { HttpService } from './shared/services/HttpService';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faCodepen,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faLinkedin);
library.add(faCodepen);
library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VeeValidate, { inject: false });

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<IState>;
  i18n: VueI18n;
}

export const createApp = (): IApp => {
  sync(store, router);

  HttpService.store = store;

  const app: Vue = new Vue(
    {
      router,
      store,
      i18n,
      render: (h) => h(App),
    },
  );

  return { app, router, store, i18n };
};
