// page.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RootLayout from "../components/layout";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        {/* <Contact /> */}
      </main>
    </RootLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about",
        "intro",
        "projects",
        "experience",
        "footer",
      ])),
    },
  };
}
