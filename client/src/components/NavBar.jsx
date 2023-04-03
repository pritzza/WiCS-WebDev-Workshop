import React from "react";

import "./Navbar.css"

export default function NavBar()
{
    return(
            <nav>
                <div className="NavBarLinks">
                    <NavBarLink name="Home"      href=""></NavBarLink>
                    <NavBarLink name="About"     href=""></NavBarLink>
                    <NavBarLink name="Projects"  href=""></NavBarLink>
                </div>
                <h1 id="navBarHeader">This Is A Website</h1>
            </nav>
    );
}

class NavBarLink extends React.Component
{
    render()
    {
        const link = this.props.href;
        const text = this.props.name;

        return(
            <ul>
                <a href={link}>
                    {text}
                </a>
            </ul>
        );
    }
}