import { initFormOutputs } from "./modules/formOutputs.js";
import { initPartials } from "./modules/partials.js";

window.addEventListener('load', function () {
    initPartials();
    initFormOutputs();
});
