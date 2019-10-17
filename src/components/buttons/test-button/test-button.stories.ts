import Vue from 'vue';
// @ts-ignore wait until https://github.com/vuejs/vue-cli/issues/1198 is fixed
import MyButton from './test-button.vue';
import { storiesOf } from '@storybook/vue';

import { QBtn } from 'quasar';

storiesOf('Buttons', module).add('MyButton', () => ({
  render: h => h(MyButton)
}));
