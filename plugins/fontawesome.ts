import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faCirclePlay, faDoorClosed, faFilm, faPersonDress, faPersonWalkingArrowLoopLeft, faRightToBracket, faSquarePlus, faTags, faUser, faXmark, faHeartCirclePlus, faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(faCirclePlay, faRightToBracket, faAws, faUser, faDoorClosed, faPersonWalkingArrowLoopLeft, faSquarePlus, faFilm, faPersonDress, faTags, faDoorClosed, faCheck, faXmark, faHeartCirclePlus, faHeartCircleMinus);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});