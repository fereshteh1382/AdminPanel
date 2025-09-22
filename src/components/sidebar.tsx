import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Menukey = {
    pages: boolean,
    users: boolean
}
export default function sidebar() {

    const [openMenu, setOpenMenu] = useState<Menukey>({ pages: false, users: false });

    const ToggleMenu = (m: keyof Menukey) => {
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

                            <i className={`fas fa-bars ${openMenu.pages ? 'menu-icon-open' : 'menu-icon'}`}></i>  Pages

                        </span>
                        {openMenu.pages && (
                            <ul className="submenu">
                                {/*  <li><NavLink to="/pages/motion"><i className="fas fa-edit icon-left"></i>ToFoList</NavLink></li>
                                <li><NavLink to="/pages/motion"><i className="fas fa-edit icon-left"></i>Calculator</NavLink></li>
                                <li><NavLink to="/pages/motion"><i className="fas fa-edit icon-left"></i>Slider</NavLink></li> */}
                                <li><NavLink to="/pages/create"><i className="fas fa-edit icon-left"></i>CreateForm </NavLink>  </li>
                                <li><NavLink to="/pages/multiform"><i className="fas fa-edit icon-left"></i>MultiStepForm</NavLink></li>
                                <li><NavLink to="/pages/province"><i className="fas fa-edit icon-left"></i>Province</NavLink></li>
                                <li><NavLink to="/pages/add-form-repeat"><i className="fas fa-edit icon-left"></i>AddFormRepeat</NavLink></li>
                                <li><NavLink to="/pages/filepreview"><i className="fas fa-edit icon-left"></i>FilePreview</NavLink></li>

                                {/*  <li><NavLink to="/pages/modal"><i className="fas fa-edit icon-left"></i>Modal</NavLink></li>
                                <li><NavLink to="/pages/motion"><i className="fas fa-edit icon-left"></i>Motion</NavLink></li> */}


                            </ul>
                        )}

                    </li>
                    <li>
                        <span onClick={() => ToggleMenu('users')} className="menu-item">

                            <i className={`fas fa-bars ${openMenu.users ? 'menu-icon-open' : 'menu-icon'}`}></i>  Users

                        </span>
                        {openMenu.users && (
                            <ul className="submenu">
                                <li><NavLink to="/pages/create"><i className="fas fa-edit icon-left"></i>CreateUser </NavLink>  </li>
                                <li><NavLink to="/pages/edit"><i className="fas fa-edit icon-left"></i>EditUser</NavLink></li>
                                <li><NavLink to="/pages/province"><i className="fas fa-edit icon-left"></i>AssignUser </NavLink></li>

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
