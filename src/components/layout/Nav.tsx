import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import HambugModal from '../button/HambugModal';
import React, { useState } from 'react';

export default function Nav() {
  return (
    <nav className="bg-green-400 flex h-12 items-center justify-between px-4">
      <h1>My Site Web</h1>
      <ul className="gap-4">
        <li>
          <HambugModal />
        </li>
      </ul>

      <style jsx>{`
        nav {
          grid-area: nav;
        }
        ul {
          display: flex;
        }
      `}</style>
    </nav>
  );
}
