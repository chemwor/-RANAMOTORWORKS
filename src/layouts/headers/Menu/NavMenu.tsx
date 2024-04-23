"use client";
import menu_data from "@/data/home-data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo/LOGO-06.png";

const NavMenu = () => {
    const pathname = usePathname();
    const currentRoute = usePathname();
    const [navTitle, setNavTitle] = useState("");

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navbar-nav align-items-lg-center">
            <li className="d-block d-lg-none">
                <div className="logo" style={{ marginBottom: "1rem" }}><Link href="/" className="d-block"><Image style={{ width: "15rem" }} src={logo} alt=""/></Link></div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/home-three">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/about_us_01">About</Link>
            </li>
            {menu_data.map((menu: any) => (
                <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
                    <Link href={menu.link}
                          className={`nav-link dropdown-toggle ${pathname === menu.link ? 'active' : ''}
                     ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}
                    </Link>
                    {menu.has_dropdown && (
                        <>
                            <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
                                {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
                                    <li key={i}>
                                        <Link href={sub_m.link}
                                              className={`dropdown-item ${pathname === sub_m.link ? 'active' : ''}`}>
                                            <span>{sub_m.title}</span>
                                        </Link>
                                    </li>
                                ))}
                                {menu.menu_column && (
                                    <li className="row gx-1">
                                        {menu.menu_column.map((item: any) => (
                                            <div key={item.id} className="col-lg-4">
                                                <div className="menu-column">
                                                    <h6 className="mega-menu-title">{item.mega_title}</h6>
                                                    <ul className="style-none mega-dropdown-list">
                                                        {item.mega_menus.map((mega_m: any, i: any) => (
                                                            <li key={i}><Link href={mega_m.link}
                                                                              className={`dropdown-item ${pathname === mega_m.link ? 'active' : ''}`}><span>{mega_m.title}</span></Link>
                                                            </li>))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                </li>
            ))}
            <li className="nav-item">
                <Link className="nav-link" href="/get_quote">Get Quote</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contact">Book Appointment</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="https://app.urable.com/virtual-shop/7paJFikNwRT4EVV82GHz">Shop</Link>
            </li>
        </ul>
    );
};

export default NavMenu;

