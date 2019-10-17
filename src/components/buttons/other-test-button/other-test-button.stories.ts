import Vue from 'vue';
// @ts-ignore wait until https://github.com/vuejs/vue-cli/issues/1198 is fixed
import MyButton from './other-test-button.vue';
import { storiesOf } from '@storybook/vue';

import { QBtn } from 'quasar';

storiesOf('Buttons', module).add('MyOtherButton', () => ({
  template: '<other-test-button label="Hello world"></other-test-button>',
  data() {
    return { myLabel: 'Hello' };
  },
  components: { 'other-test-button': MyButton }
}));
