import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUsers, faRightToBracket, faUser, faDoorClosed, faPersonWalkingArrowLoopLeft, faCloudArrowUp, faSquarePlus, faTicket, faFilm, faPersonDress, faTags, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(faUsers, faRightToBracket, faUser, faDoorClosed, faPersonWalkingArrowLoopLeft, faCloudArrowUp, faSquarePlus, faTicket, faFilm, faPersonDress, faTags, faAws, faCheck, faXmark);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});