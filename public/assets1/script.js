
 
// Importez vos modules existants
import { menuEntries } from "./js/modules/menuEntries.js";
import { createEntry } from "./js/modules/menu.js";
import { burgerManager } from "./js/modules/burgerManager.js";
import { slider} from "./js/modules/slider.js";



    const navMenu = document.querySelector("#navMenu");
    createEntry(menuEntries, navMenu);
    burgerManager();
    slider();

