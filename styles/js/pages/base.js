/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  charadex.tools.loadIncludedFiles();
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);
});

/* ==================================================================== */
/* Flipping Card
======================================================================= */
var wonkers = document.querySelectorAll('.wonker');

[...wonkers].forEach((wonker)=>{
  wonker.addEventListener( 'click', function() {
    wonker.classList.toggle('is-flipped');
  });
});
