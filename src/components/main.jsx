import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import {Route, Routes} from "react-router-dom";

const main = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    )
}

export default main