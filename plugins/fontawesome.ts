import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCirclePlay, faDoorClosed, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(faCirclePlay, faRightToBracket, faAws,faUser,faDoorClosed);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});