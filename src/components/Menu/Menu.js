import React, { Component } from 'react';
import { Route, NavLink, Link, Router } from 'react-router-dom';

const menu = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product',
        exact: true,
    },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={(match) => {
            var active = match ? 'active' : '';
            return (
                <li className={active} className="nav-item">
                    <Link className="nav-link" to={to}>{label}</Link>
                </li>
            )
        }}>
        </Route>
    )
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showMenuLink = (menu) => {
        var result = null;
        if(menu && menu.length > 0) {
            result = menu.map((val, index) => {
                return <MenuLink label={val.name} to={val.to} activeOnlyWhenExact={val.exact} />
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.showMenuLink(menu)}
                </ul>
            </nav>
        );
    }
}

export default Menu;