import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Usuario',
    path: '/Usuario',
    icon: <AiIcons.AiOutlineUserSwitch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'CRUD Usuario',
        path: '/',
        icon: <AiIcons.AiOutlineUserAdd />
      }
    ]
  },
  {
    title: 'Ventas',
    path: '/Ventas',
    icon: <AiIcons.AiOutlineBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'CRUD Ventas',
        path: '/',
        icon: <AiIcons.AiOutlineBarcode />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Productos',
    path: '/Productos',
    icon: <AiIcons.AiOutlineCodeSandbox />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'CRUD Productos',
        path: '/',
        icon: <AiIcons.AiOutlineCloudUpload />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Roles',
    path: '/Roles',
    icon: <AiIcons.AiOutlineRobot />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'CRUD Roles',
        path: '/',
        icon: <AiIcons.AiOutlineReconciliation />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Ayuda',
    path: '/ayuda',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
