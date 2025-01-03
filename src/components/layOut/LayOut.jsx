import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Footer from "../footer/Footer"

const LayOut = () => {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default LayOut