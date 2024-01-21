

// Importez vos modules existants
import { menuEntries } from ".img/modules/menuEntries.js";
import { createEntry } from ".img/modules/menu.js";
import { burgerManager } from ".img/modules/burgerManager.js";
import { slider} from ".img/modules/slider.js";



    const navMenu = document.querySelector("#navMenu");
    createEntry(menuEntries, navMenu);
    burgerManager();
    slider();

