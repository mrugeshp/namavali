import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">Namavali</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href={`/customer/create`}>Create Customer</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default MainHeader;