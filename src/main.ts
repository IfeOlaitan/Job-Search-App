import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router/index";
import store, { key } from "@/store";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

createApp(App)
  .use(store, key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
