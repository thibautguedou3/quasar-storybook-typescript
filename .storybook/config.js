import { configure } from '@storybook/vue';

import Vue from 'vue';
import Quasar from 'quasar';

import 'quasar/dist/quasar.css';
import 'quasar/icon-set/material-icons';
import '@quasar/extras/roboto-font/roboto-font.css';

Vue.use(Quasar);

configure(require.context('../src', true, /\.stories\.ts$/), module);
