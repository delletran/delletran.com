'use client'

import { useEffect, useState } from 'react'
import { AppBar, Stack } from '@mui/material';
import Link from 'next/link';
import styles from './styles.module.scss'
// import MenuIcon from '@mui/icons-material/Menu'
import Brand from '@/components/brand';
import NavLInks from './components/NavLinks';


type Props = {}

const NavBar = (props: Props) => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [showNav, setShowNav] = useState<boolean>(true)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowNav(window.scrollY < scrollY 
        ? true
        : window.scrollY > 100 ? false : true); 
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  return (
    
    <AppBar
      position='static'
      className={`
        ${styles['navbar']}
        ${styles[`navbar_${showNav ? 'show' : 'hide'}`]}`
      }
    >
      <Stack
        direction={'row'}
        className={`
          ${styles['navbar-wrapper']}
          ${styles['navbar-toolbar']}`
        }
      >
        <Link href={'/'}>
          <Brand 
            logoSize={108}
            BrandNameSize={270}
            spacing={3}
            direction='row'
            animation_type='onload'
          />
        </Link>
        <NavLInks />
      </Stack>
    </AppBar>
  )
}

export default NavBar