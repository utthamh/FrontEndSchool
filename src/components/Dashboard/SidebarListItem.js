import React from 'react'
import SidebarSubMenu from './SidebarSubMenu'

export default function SidebarListItem({name,icon,submenu}) {
    return (
        <li className="nav-item">
        <a data-toggle="collapse" href={'#'+name}>
          <i className={icon} />
          <p>{name}</p>
          {submenu && submenu.length>0 && <span className="caret" />}
        </a>
        {submenu && submenu.length>0 &&
            <SidebarSubMenu name={name} submenu={submenu}/>
            
            }
      </li>
    )
}
