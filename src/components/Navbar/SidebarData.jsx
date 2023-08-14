import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiTwotoneHome />,
    cName: 'nav-text'
  },
  {
    title: 'Art',
    path: '/Art',
    icon: <FaIcons.FaPalette />,
    cName: 'nav-text'
  },
  {
    title: 'Tech',
    path: '/Tech',
    icon: <FaIcons.FaLaptop />,
    cName: 'nav-text'
  },
  {
    title: 'Gaming',
    path: '/Gaming',
    icon: <FaIcons.FaGamepad />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/Login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/Register',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
