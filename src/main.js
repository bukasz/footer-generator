import { createApp } from 'vue'
import App from './App.vue'
import googleApisService from "./services/google-apis";

googleApisService().loadGoogleApis();
createApp(App).mount('#app')
