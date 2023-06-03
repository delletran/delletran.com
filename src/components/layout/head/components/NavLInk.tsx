import { publicUrl } from '@/services/api'
import { Tooltip } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../styles.module.scss'
import { usePathname } from 'next/navigation';

type Props = {
  id: string
  label: string
  link: string
  sublabel?: string
  icon: JSX.Element
}

const NavLInk = (props: Props) => {
  const { id, label, link, sublabel, icon } = props
  const pathname = usePathname()

  const isHoverPath = (pathName:string) => 
    pathName.split('/')[1] == (link).slice(1)
    
  return (
    <Tooltip key={id} title={`${label} page`}>
      <Link
        href={`${publicUrl}${link}`}
        className={`
          ${styles[`nav-link`]}
          // ${pathname == link && styles[`nav-link_active`]}
          ${isHoverPath(pathname) && styles[`nav-link_active`]}
        `}
      >
        {label}
      </Link>
    </Tooltip>
  )
}

export default NavLInk