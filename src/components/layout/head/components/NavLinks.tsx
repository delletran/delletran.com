import React from 'react'

import { 
  MdHome, 
  MdInfo,
  MdArticle,
  MdEvent,
  MdOutlineImportContacts,
} from "react-icons/md";
import NavLInk from './NavLInk';
import { Stack } from '@mui/material';


const navLinks = [
  { id: 'nav-link-home', label: 'Home', link: '/', sublabel: '', icon: <MdHome fontSize="large" />},
  { id: 'nav-link-blog', label: 'Blogs', link: '/blog', sublabel: '', icon: <MdInfo fontSize="large" />},
  { id: 'nav-link-portfolio', label: 'Portfolio', link: '/portfolio', sublabel: '', icon: <MdInfo fontSize="large" />},
  { id: 'nav-link-services', label: 'Services', link: '/services', sublabel: '', icon: <MdArticle fontSize="large" />},
  { id: 'nav-link-about', label: 'About', link: '/about', sublabel: '', icon: <MdEvent fontSize="large" />},
  { id: 'nav-link-contact', label: 'Contact', link: '/contact', sublabel: '', icon: <MdOutlineImportContacts fontSize="large" />},
]

type Props = {
  
}

const NavLInks = (props: Props) => {


  return (
    <Stack
      direction={'row'}
    >
    {navLinks.map((item) => (
      <NavLInk 
        key={item.id}
        id={item.id}
        label={item.label}
        link={item.link}
        sublabel={item.sublabel}
        icon={item.icon}
      />
    ))}
    </Stack>
  )
}

export default NavLInks