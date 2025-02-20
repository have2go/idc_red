import About from "@/components/About";
import Goals from "@/components/Goals";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Spb from "@/components/Spb";
import Nanning from "@/components/Nanning";
import Image from "next/image";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Nanning />
            <Goals />
            <Spb />
            <Contacts />
            <Footer />
        </>
    );
}
