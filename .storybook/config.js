import { configure } from '@storybook/vue';

import { colors } from 'quasar';

import 'quasar/dist/quasar.sass';

// Without this override, the colors will still be the colors of Quasar's default theme
colors.setBrand('primary', '#80c342');
colors.setBrand('secondary', '#0d4b64');
colors.setBrand('accent', '#00a300');

colors.setBrand('positive', '#45ff70');
colors.setBrand('negative', '#ba4553');
colors.setBrand('info', '#00d4ff');
colors.setBrand('warning', '#f2c037');

import Vue from 'vue';
import Quasar from 'quasar';

import 'quasar/icon-set/material-icons';
import '@quasar/extras/roboto-font/roboto-font.css';

Vue.use(Quasar);

configure(require.context('../src', true, /\.stories\.ts$/), module);
