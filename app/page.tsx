import Layout from "@/components/layout/Layout";

import Contact1 from "@/components/sections/Contact1";
import Home1 from "@/components/sections/Home1";
import Projects1 from "@/components/sections/Projects1";
import Service1 from "@/components/sections/Service1";
import Skills1 from "@/components/sections/Skills1";
import Static1 from "@/components/sections/Static1";
import Resume1 from "@/components/sections/Resume1";
import Testimonials1 from "@/components/sections/Testimonials1";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Home1 />
        <Static1 />
        <Service1 />
        <Projects1 />
        <Resume1 />
        <Skills1 />
        {/* <Brands1 /> */}
        <Testimonials1 />
        <Contact1 />
      </Layout>
    </>
  );
}
