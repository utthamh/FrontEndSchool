import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarSubMenu({name,submenu}) {
    return (
        <div className="collapse" id={name}>
        <ul className="nav nav-collapse">
            {
                submenu.map(item=> <li>
                    <Link to={item.link}>
                <span className="sub-item">{item.name}</span>
                    </Link>
                  </li>)
            }
         
         
        </ul>
      </div>
    )
}
