import About from "@/components/About";
import Goals from "@/components/Goals";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Spb from "@/components/Spb";
import Nanning from "@/components/Nanning";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Qingdao from "@/components/Qingdao";
import Spacer from "@/components/Spacer";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Spb />
            <Goals />
            <Nanning />
            <Spacer />
            <Qingdao />
            <Contacts />
            <Footer />
        </>
    );
}
