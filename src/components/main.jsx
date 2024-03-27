import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import {Route, Routes} from "react-router-dom";

const main = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/project" element={<Project/>}/>
            </Routes>
        </div>
    )
}

export default main