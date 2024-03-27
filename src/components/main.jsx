import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Contact from "./contact";
import {Route, Routes} from "react-router-dom";

const main = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default main