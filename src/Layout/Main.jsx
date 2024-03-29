import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBer/NavBer";

const Main = () => {

    const noHeaderFooter = location.pathname.includes('login')
    
    return (
        <div>
           {noHeaderFooter || <NavBer></NavBer>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;