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

        // We're gonna make some badges but you dont have to use them
        entry.designs = entry.designs.split(',');
        entry.designBadges = [];
        for (let design of entry.designs) {
          entry.designBadges.push(
            `<a class="badge badge-primary" href="${charadex.url.addUrlParameters(charadex.url.getPageUrl('masterlist'), {profile: design})}">${design.trim()}</a>`
          );
        }
        entry.designBadges = entry.designBadges.join(' ');

        if (profile.tags.length > 0) $("#charadex-profile-tags").show();

      }
    });
  
  charadex.tools.loadPage('.softload', 500);
  
});
