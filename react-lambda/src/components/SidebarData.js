import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Φ   Usuario',
    path: '/usuario',
    icon: <AiIcons.AiOutlineUserSwitch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Crear',
        path: '/overview/crear',
        icon: <AiIcons.AiOutlineUserAdd />
      },
      {
        title: 'Editar',
        path: '/usuario/editar',
        icon: <AiIcons.AiOutlineDeploymentUnit />
      }
    ]
  },
  {
    title: 'β   Ventas',
    path: '/ventas',
    icon: <AiIcons.AiOutlineBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Registrar',
        path: '/ventas/registrar',
        icon: <AiIcons.AiOutlineBarcode />,
        cName: 'sub-nav'
      },
      {
        title: 'Listar',
        path: '/ventas/listar',
        icon: <AiIcons.AiOutlineReconciliation />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ψ   Productos',
    path: '/productos',
    icon: <AiIcons.AiOutlineCodeSandbox />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Agregar',
        path: '/productos/agregar',
        icon: <AiIcons.AiOutlineCloudUpload />,
        cName: 'sub-nav'
      },
      {
        title: 'Listar',
        path: '/ventas/listar',
        icon: <AiIcons.AiOutlineReconciliation />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ϖ   Roles',
    path: '/',
    icon: <AiIcons.AiOutlineRobot />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Listar',
        path: '/roles',
        icon: <AiIcons.AiOutlineReconciliation />,
        cName: 'sub-nav'
      },
      {
        title: 'Editar',
        path: '/roles/editar',
        icon: <AiIcons.AiOutlineDeploymentUnit />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ϑ   Soporte',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
