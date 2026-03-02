/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(
    null, 
    charadex.page.imageGallery, 
    null,
    (listData) => {
      if (listData.type == 'profile') {
        
        const profile = listData.profileArray[0];

        if (profile.tags.length > 0) $("#charadex-profile-tags").show();

      }
    });
  charadex.tools.loadPage('.softload', 500);
});
