import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Menukey={
pages:boolean,
users:boolean
}
export default function sidebar() {

    const [openMenu, setOpenMenu] = useState<Menukey>({ pages: false, users: false });

    const ToggleMenu = (m:keyof Menukey) => {
        setOpenMenu((prev) => ({
            ...prev,
            [m]: !prev[m],
        }))
console.log(openMenu);
    }


    return (
        <aside className="sidebar">
            <nav>
                <ul className="menu">
                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <span onClick={() => ToggleMenu('pages')} className="menu-item">
                      
                        Pages  <i className={`fas fa-bars ${openMenu.pages?'menu-icon-open':'menu-icon'}`}></i> 

                        </span>
                        {openMenu.pages && (
                            <ul className="submenu">
                                <li><NavLink to="/pages/create">CreatePage <i className="fas fa-edit icon-left"></i></NavLink>  </li>
                                <li><NavLink to="/pages/edit">EditPage<i className="fas fa-edit icon-left"></i></NavLink></li>
                                <li><NavLink to="/pages/group">CreateCategory <i className="fas fa-edit icon-left"></i></NavLink></li>
                            </ul>
                        )}

                    </li>
                    <li>
                        <span onClick={() => ToggleMenu('users')} className="menu-item">
                      
                        Users  <i className={`fas fa-bars ${openMenu.users?'menu-icon-open':'menu-icon'}`}></i> 

                        </span>
                        {openMenu.users && (
                            <ul className="submenu">
                                <li><NavLink to="/pages/create">CreateUser <i className="fas fa-edit icon-left"></i></NavLink>  </li>
                                <li><NavLink to="/pages/edit">EditUser<i className="fas fa-edit icon-left"></i></NavLink></li>
                                <li><NavLink to="/pages/group">AssignUser <i className="fas fa-edit icon-left"></i></NavLink></li>
                            </ul>
                        )}

                    </li>
                    <li>
                        <NavLink to="/about">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
