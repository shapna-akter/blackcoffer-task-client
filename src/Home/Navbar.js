import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Black Coffer</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
            <label htmlFor="dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
    );
};

export default Navbar;