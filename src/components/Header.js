
import React, { useState } from 'react';
import Nav from './Nav';


// export default function Header() {
//   return (
//     <div className="header">
//       <h1>Header here!</h1>
//       <Nav />
//     </div>
//   );
// }

function Header() {
  return (
    <header>
      <h1 className="page-title">
        Chris Champness
      </h1>
      <Nav />
    </header>
  );
}

export default Header;