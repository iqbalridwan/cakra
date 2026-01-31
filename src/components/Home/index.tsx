import Hero from "@/components/Home/Hero";
import ServicesGrid from "@/components/Home/Service";
import Brand from "@/components/Home/Brand";
import CaseStudies from "@/components/Home/Case";
import CreativeSolutions from "@/components/Home/Solution";
import Artikel from "./Artikel";
import Main from "../utils/Main";
import TestimonialAndCTA from "@/components/Home/Testimoni";
// import { getAllBlogs } from "@/lib/Blogs";

export default async function Home() {
  // const { blogs } = await getAllBlogs(
  //     `?pagination[page]=1&pagination[pageSize]=3&sort=createdAt:desc&populate=*`
  //   );
  return (
    <Main id="home" className="w-full bg-[#EEF2FF] min-h-screen">
      <Hero />
      <Brand />
      <CreativeSolutions />
      <ServicesGrid />
      <CaseStudies />
      <Artikel />
      <TestimonialAndCTA />
       {/* blogs={blogs} /> */}
    </Main>
  );
}