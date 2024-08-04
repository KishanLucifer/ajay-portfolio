import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocial";
import React from "react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Link from 'next/link';
import Footer from "@/components/Footer";
// import Image from 'next/image';
import { urlFor } from "@/sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  return (
    <>
      <div className="bg-black text-white h-screen max-w-full snap-y snap-mandatory overflow-x-hidden overflow-scroll scrollbar-hide z-0">
        <Header socials={socials} />
        <section id="hero" className="snap-center">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe pageInfo={pageInfo} />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-16 w-full cursor-pointer md:bottom-5">
            <div className="flex items-center justify-center">
              {pageInfo?.heroImage && (
                <Image
                  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                  src={urlFor(pageInfo?.heroImage).url()}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
            </div>
          </footer>
        </Link>
        <Footer />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const [pageInfo, skills, projects, socials] = await Promise.all([
      fetchPageInfo(),
      fetchSkills(),
      fetchProjects(),
      fetchSocials(),
    ]);

    return {
      props: {
        pageInfo,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pageInfo: {},
        skills: [],
        projects: [],
        socials: [],
      },
      revalidate: 10,
    };
  }
}
