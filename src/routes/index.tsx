import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ProfileLinks } from "@/components/portfolio/ProfileLinks";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { BeyondTheCode } from "@/components/portfolio/BeyondTheCode";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PROFILE } from "@/data/portfolio";

const title = "Shobha Kumari — Full Stack Developer & AI Enthusiast";
const description =
  "Portfolio of Shobha Kumari, a full stack developer and AI enthusiast building scalable web applications and AI-powered products with React, TypeScript, Node.js and MongoDB.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: "Full Stack Developer",
          email: `mailto:${PROFILE.email}`,
          description: PROFILE.about,
          knowsAbout: [
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Generative AI",
            "Full Stack Development",
          ],
        }),
      },
    ],
  }),
});

function Portfolio() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Hero />
          <ProfileLinks />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <BeyondTheCode />
          <Achievements />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
