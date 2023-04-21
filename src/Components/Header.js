import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    const test = [
        { label: "Counter", link: "counter" },
        { label: "Life Cycle", link: "lifeCycle" },
        { label: "High Order Components", link: "hoc" },
        { label: "Update State", link: "update-state" },
        { label: "ToDp App", link: "todo" },
    ]

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Calculator</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {test.map((navItem, index) => (
                                <li key={index} className="nav-item">
                                    <Link className="nav-link text-white" to={navItem.link}>{navItem.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
