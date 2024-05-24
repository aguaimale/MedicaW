import './assets/main.css';
import 'primevue/resources/themes/aura-light-blue/theme.css';
import { MotionPlugin } from '@vueuse/motion';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';

// componetes importados de primevue

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import SplitButton from 'primevue/splitbutton';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Tooltip from 'primevue/tooltip';
import SpeedDial from 'primevue/speeddial';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

// componetes importados de primevue

app.use(PrimeVue);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('SplitButton', SplitButton);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('SpeedDial', SpeedDial);
app.component('Toast', Toast);
app.use(ToastService);
app.directive('Tooltip', Tooltip);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');
