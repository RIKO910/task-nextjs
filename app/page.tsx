import Image from "next/image";
import Hero from "@/app/component/Hero/Hero";
import Testimonial from "@/app/component/Testimonial/Testimonial";
import Tip from "@/app/component/Tip/Tip";
import About from "@/app/component/About/About";
import Item from "@/app/component/Item/Item";

export default function Home() {
  return (
    <div className='mx-96'>
            <Hero></Hero>
        <Testimonial></Testimonial>
        <Tip></Tip>
        <About></About>
        <Item></Item>
    </div>
  );
}
