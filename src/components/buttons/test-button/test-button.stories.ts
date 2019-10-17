import Vue from 'vue';
// @ts-ignore
import MyButton from './test-button.vue';
import { storiesOf } from '@storybook/vue';

import { QBtn } from 'quasar';

export const asAComponent = () => ({
  components: MyButton
});

storiesOf('Buttons', module).add('MyButton', () => ({
  render: h => h(MyButton)
}));
