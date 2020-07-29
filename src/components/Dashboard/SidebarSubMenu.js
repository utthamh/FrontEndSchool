import React from 'react'

export default function SidebarSubMenu({name,submenu}) {
    return (
        <div className="collapse" id={name}>
        <ul className="nav nav-collapse">
            {
                submenu.map(item=> <li>
                    <a href="components/avatars.html">
                <span className="sub-item">{item.name}</span>
                    </a>
                  </li>)
            }
         
         
        </ul>
      </div>
    )
}
