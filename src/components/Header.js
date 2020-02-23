import React from 'react';

import { HamburgerMenu } from '../assets/menuIcon';

function Header() {
  return (
    <header className="tw-bg-blue-700 tw-flex tw-justify-between tw-p-4">
      <div className="tw-flex tw-items-center tw-visible sm:tw-invisible">
        <HamburgerMenu />
      </div>
      <div className="tw-text-white tw-text-center tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
        Todo List App
      </div>
      <div></div>
    </header>
  )
}

export default Header;