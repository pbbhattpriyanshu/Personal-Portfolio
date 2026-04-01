import ParticleBackground from "@/components/ParticleBackground";
import CursorStars from "@/components/CursorStars";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <ParticleBackground />
    <CursorStars />
    <Navbar />
    <HeroSection />
    <ScrollReveal><AboutSection /></ScrollReveal>
    <ScrollReveal delay={100}><SkillsSection /></ScrollReveal>
    <ScrollReveal delay={100}><ExperienceSection /></ScrollReveal>
    <ScrollReveal delay={100}><ProjectsSection /></ScrollReveal>
    <ScrollReveal delay={100}><BlogsSection /></ScrollReveal>
    <ScrollReveal delay={100}><ContactSection /></ScrollReveal>
    <ScrollReveal><Footer /></ScrollReveal>
  </div>
);

export default Index;
