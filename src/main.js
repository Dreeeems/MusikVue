import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";

import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faEnvelope,
  faMobile,
  faHeart,
  faCircleUser,
  faCirclePlay,
  faUser,
  faPauseCircle,
  faStream,
  faMusic,
  faBookJournalWhills,
  faHeadphonesSimple,
  faGuitar,
  faChildReaching,
  faPodcast,
  faBolt,
  faMagic,
  faEarListen,
  faEarthAsia,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

import router from "../src/route";

library.add({
  faEnvelope,
  faMobile,
  faHeart,
  faCircleUser,
  faUser,
  faCirclePlay,
  faPauseCircle,
  faStream,
  faMusic,
  faBookJournalWhills,
  faHeadphonesSimple,
  faGuitar,
  faChildReaching,
  faPodcast,
  faBolt,
  faMagic,
  faEarListen,
  faEarthAsia,
  faBuildingColumns,
});
const app = createApp(App).component("fas", FontAwesomeIcon);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
