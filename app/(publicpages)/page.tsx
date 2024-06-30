import Image from "next/image";
import Hero from "@/app/component/Hero/Hero";
import Testimonial from "@/app/component/Testimonial/Testimonial";
import Tip from "@/app/component/Tip/Tip";
import About from "@/app/component/About/About";
import Item from "@/app/component/Item/Item";
import Foot from "@/app/component/Foot/foot";
import Footer from "@/app/component/Footer/Footer";

export default function Home() {
    return (
        //   mx- any you can use
        <div >
            <div className='mx-36'>
                <Hero></Hero>
                <Testimonial></Testimonial>
                <Tip></Tip>
                <About></About>
                <Item></Item>
            </div>
            <Foot></Foot>
            <Footer></Footer>
        </div>
    );
}
