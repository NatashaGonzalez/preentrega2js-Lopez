import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PruebaView from "../../View/PruebaView";

<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/PruebaView" element= {<PruebaView/>}></Route>
    </Routes>
</BrowserRouter>

export default Router;