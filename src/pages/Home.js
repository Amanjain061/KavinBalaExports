import React from "react";
import css from "../cssfiles/Home.css";
import image from "../images/homepagecontainer.jpg";
import Homebg from "../pages/Homebg";
import Services from "../components/home/Services";
import World from "../components/home/World";
import Whychosse from "../components/home/Whychooseus";
import Speak from "../components/home/Speak";
import Ourprocess from "../components/home/Ourprocess";
import Footer from "../components/home/Footer";
import Navbar from "./Navbar";
function Home(){
    return(
        <div>
        <Navbar />
        <Homebg />
        <Services />
        <World />
        <Ourprocess />
        <Whychosse />
        <Speak />
        </div>
    );
}
export default Home;