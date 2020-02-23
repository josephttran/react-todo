import React from 'react';

import { HamburgerMenu } from '../assets/menuIcon';

function Header() {
  return (
    <header className="bg-blue-700 flex justify-between p-4">
      <div className="flex items-center visible sm:invisible">
        <HamburgerMenu />
      </div>
      <div className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Todo List App
      </div>
      <div></div>
    </header>
  )
}

export default Header;