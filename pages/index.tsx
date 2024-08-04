import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/WorkExperience";
import { PageInfo, Project, Skill, Social, Experience } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocial";
import { fetchExperiences } from "@/utils/fetchExperiences";
import React from "react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { urlFor } from "@/sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
};

const Home = ({ pageInfo, skills, projects, socials, experience }: Props) => {
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
        {/* <section id="experience" className="snap-start">
          <WorkExperience experiences={experience} />
        </section> */}
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
    const [pageInfo, skills, projects, socials, experience] = await Promise.all(
      [
        fetchPageInfo(),
        fetchSkills(),
        fetchProjects(),
        fetchSocials(),
        fetchExperiences(),
      ]
    );

    return {
      props: {
        pageInfo,
        skills,
        projects,
        socials,
        experience,
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
        experience: [],
      },
      revalidate: 1,
    };
  }
}
