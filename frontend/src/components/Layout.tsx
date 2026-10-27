import {Outlet} from "react-router-dom";
import DemoBanner from "./DemoBanner";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-page font-sans text-ink">
            <DemoBanner/>
            <main className="flex-1 px-4 pt-9 pb-13 sm:px-6">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
