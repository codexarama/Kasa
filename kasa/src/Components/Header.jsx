import React from 'react';
import Menu from './Menu';
import Banner from './Banner';

/**
 * [Header description]
 */

class Header extends React.Component {
  render() {
    return (
      <header>
        < Menu />
        < Banner />
      </header>
    );
  }
}

// STATELESS COMPONENT (FONCTION)
// const Header = () => {
//   return (
//     <header>
//       < Menu />
//       < Banner />
//     </header>
//   );
// };

export default Header;