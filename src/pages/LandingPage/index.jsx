import Apparatus from "../../components/aparatus/Index";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar/Index";
import News from "../../components/news/Index";
import Stastistic from "../../components/stastistic/Index";
import VillageActivities from "../../components/villageActivities/Index";

import VillageArea from "../../components/villageArea";
import VillageMarket from "../../components/villageMarket/Index";
import WebsiteOverview from "../../components/webOverview/Index";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Header />
            <Stastistic/>
            <WebsiteOverview/>
            <Apparatus/>
            <News/>
            <VillageActivities/>
            <VillageMarket/>
             <VillageArea/>
            <Footer/> 
        </>
    )
}