'use strict';

// // ========================================
// /* THIS */
// // ========================================
function fn() {
  console.log(this);
}

fn(); // window без "use strict" и udefined с "use strict"
