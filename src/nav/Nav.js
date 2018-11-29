import React from "react";
import "./Nav.scss";

const Nav = (props) => {
    const renderMenuItems = (menuItems) => {
        return menuItems.map((item) => {
            return (
                <li>
                    {item.title}
                    {renderSubItems(item)}
                </li>
            )
        })
    };

    const renderSubItems = (item) => {
        if (item.subItems) {
            return (
                <ul>
                    {item.subItems.map((subItem) => {
                        return (
                            <li>
                                {subItem}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    };

    return (
        <div className="Nav">
            <ul>
                {renderMenuItems(props.menuItems)}
            </ul>
        </div>
    )
};

export default Nav;
