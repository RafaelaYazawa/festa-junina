// This is where it all goes :)

import { initializeMap } from "./event_map.js";
import { displayMenu } from "./menu_icon.js";
import { tabDisplay } from "./tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeMap();
  displayMenu();
  tabDisplay();
});
