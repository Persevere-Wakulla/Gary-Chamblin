import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (    
        <div className="help-layout text-center mt-5">
            <h2>Website Help</h2>
            <p>Click on the links below to view our frequently asked questions or to contact us by message.</p>

            <nav className="container-fluid navbar navbar-expand-lg bg-transparent mb-4">

            <NavLink to="faq" className= "helpLinks navLinks fs-3 w-25 m-auto">View the FAQ</NavLink>
            <NavLink to="contact" className= "helpLinks navLinks fs-3 w-25 m-auto">Contact Us</NavLink>
        </nav>

        <div>
            <Outlet />
        </div>

        </div>
    )
}