import React from 'react'
import SidebarSubMenu from './SidebarSubMenu'
import { Link } from 'react-router-dom'

export default function SidebarListItem({name,icon,submenu,link}) {
    return (
        <li className="nav-item">
      {submenu && submenu.length>0 && <> <a data-toggle="collapse" href={'#'+name}>
          <i className={icon} />
          <p>{name}</p>
           <span className="caret" />
        </a>
        
            <SidebarSubMenu name={name} submenu={submenu}/></>
            ||
            <Link to={link}><i className={icon} />
            <p>{name}</p></Link>
            }
      </li>
    )
}
