import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar () {
    return (
        <aside className="sidebar">
            <div className='nav-left-box'>
                <Link to='/sync'>Database Synchronization</Link>
                <Link to='/loading'>Database Loading</Link>
                <Link to='/'>Users List</Link>
                <Link to='/files'>Files</Link>
                <Link to='/weldings'>Weldings</Link>
            </div>
        </aside>
    )
};
