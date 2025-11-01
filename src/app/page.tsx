'use client';
import {  FaCogs} from "react-icons/fa";
import { FaArrowDown, FaCode, FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {
  SiWordpress, SiPhp, SiJavascript, SiJest,
  SiHtml5, SiCss3, SiGit, SiElementor,SiGoogleanalytics,
  SiYoast, SiMysql, SiFigma, SiStripe, SiPaypal
} from "react-icons/si";
// FaChartLine, SiPlesk, SiGraphql, SiKinsta, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiDocker, SiComposer, SiNodedotjs, SiGulp, SiAdobephotoshop, SiVite, SiSemrush, SiBootstrap,SiCloudflare
// import { FiExternalLink } from "react-icons/fi";
import { 
 FaCloud 
} from "react-icons/fa";
import { SiNginx, SiApache, SiVercel, SiCpanel} from "react-icons/si";
import { FaLayerGroup, FaRocket, FaCubes } from "react-icons/fa";
import { TbBlocks } from "react-icons/tb";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../app/components/Navbar/page";
import Background from "../app/components/background/page";
import { PROJECTS } from "../lib/projects";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const colorThemes = [
    { primary: 'from-blue-400 via-blue-500 to-indigo-500', secondary: 'from-cyan-400 via-blue-400 to-blue-500', accent: 'from-purple-400 via-purple-500 to-pink-500' },
    { primary: 'from-green-500 to-teal-600', secondary: 'from-emerald-400 to-green-500', accent: 'from-teal-400 to-cyan-500' },
    { primary: 'from-orange-500 to-red-600', secondary: 'from-yellow-400 to-orange-500', accent: 'from-red-400 to-pink-500' },
    { primary: 'from-violet-500 to-purple-600', secondary: 'from-indigo-400 to-violet-500', accent: 'from-purple-400 to-pink-500' },
    { primary: 'from-rose-500 to-pink-600', secondary: 'from-pink-400 to-rose-500', accent: 'from-fuchsia-400 to-pink-500' },
  ];

  useEffect(() => {
    setIsClient(true);
    
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colorThemes.length);
    }, 8000);
    
    return () => {
      clearInterval(colorInterval);
    };
  }, [colorThemes.length]);

  const currentTheme = colorThemes[currentColorIndex];

  if (!isClient) {
    return null; 
  }

  return (
    <div className="relative w-full flex flex-col text-white overflow-hidden">
      <Background />

      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
              animate={{ 
                rotate: 360,
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                backgroundPosition: { duration: 5, repeat: Infinity },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FaCode className="text-white text-xl" />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className={
                  currentColorIndex === 0 
                    ? "text-xl font-bold text-cyan-400 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" 
                    : `text-xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`
                }
                animate={{ 
                  backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                  backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Shaheer Rafi
                </motion.span>
              <span className="text-xs text-gray-400 font-medium">
                Frontend Developer
              </span>
            </div>
          </motion.div>
          
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navbar />
          </motion.div>
        </div>
      </motion.header>

      
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32">
        <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div 
              className={`inline-block p-1 rounded-full bg-gradient-to-r ${currentTheme.primary} mb-6`}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-black/90 rounded-full px-6 py-3 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaStar className="text-yellow-400" />
                </motion.div>
                <span className="text-sm font-medium">Welcome to my universe</span>
              </div>
            </motion.div>
            
            
            <div className="relative">
              <motion.h1 
                className="text-5xl md:text-8xl font-bold mb-6 leading-tight cursor-default select-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span 
                  className={
                    currentColorIndex === 0 
                      ? "text-cyan-400 drop-shadow-lg cursor-default" 
                      : `bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent cursor-default`
                  }
                  animate={{ 
                    backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                    backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Frontend Developer
                </motion.span>
                <br />
                <motion.span 
                  className="text-white relative cursor-default"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  & Creative
                  <motion.span
                    className={
                      currentColorIndex === 0 
                        ? "text-purple-400 drop-shadow-lg cursor-default" 
                        : `bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent cursor-default`
                    }
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {" "}Coder
                  </motion.span>
                </motion.span>
              </motion.h1>

              
              <motion.div
                className={`h-2 bg-gradient-to-r ${currentTheme.primary} mx-auto rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
            
            {/* <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed cursor-default select-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              I craft{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-cyan-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                beautiful
              </motion.span>
              ,{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                interactive
              </motion.span>{" "}
              web experiences with modern technologies.
              <br />
              Passionate about clean code, stunning designs, and seamless user experiences.
            </motion.p> */}

          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              className={`group px-8 py-4 bg-gradient-to-r ${currentTheme.primary} text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg relative overflow-hidden`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(59, 130, 246, 0.3)",
                  "0 15px 40px rgba(139, 92, 246, 0.5)",
                  "0 10px 30px rgba(59, 130, 246, 0.3)",
                ]
              }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="group-hover:animate-pulse" />
              </motion.div>
              <span>Explore My Universe</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.a>
            
            {/* <motion.a
              href="./cv-eng-.pdf"
              target="_blank"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📄
              </motion.div>
              Download CV
            </motion.a> */}
          </motion.div>

          
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: FaGithub, href: "https://github.com/lanehatch", color: "hover:text-gray-400" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/lanehatch/", color: "hover:text-blue-400" },
              { icon: FaEnvelope, href: "mailto:lanehatch@gmail.com", color: "hover:text-green-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${social.color} transition-all duration-300 relative`}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                  rotate: { duration: 4, repeat: Infinity, delay: index * 0.3 }
                }}
              >
                <social.icon />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div> */}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`text-3xl bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent cursor-pointer`}
          >
            <FaArrowDown />
          </motion.div>
          {/* <motion.div
            className={
              currentColorIndex === 0 
                ? "mt-2 text-sm text-cyan-400 drop-shadow-lg" 
                : `mt-2 text-sm bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
            }
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.div> */}
        </motion.div>
      </section>

      
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span 
                className={
                  currentColorIndex === 0 
                    ? "text-blue-400 drop-shadow-lg" 
                    : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
                }
              >
                About Me
              </span>
            </motion.h2>
            <motion.div
              className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get to know the person behind the{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                code
              </motion.span>
            </motion.p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:hidden mb-12"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="/shaheer.png"
                alt="Shaheer Rafi"
                className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I don&apos;t see myself as just a developer, but as a partner working with you on your project. 
                  Every line of code I write is driven by the mindset that your success is my success.
                  I&apos;ve worked on over 70 projects of varying size and complexity, and I’ve built a reputation for clear communication and on-time delivery.
                  What really sets me apart isn’t just my web development skills - it’s that I focus on solving real problems and helping your business grow. 
                  My goal is to be more than just a developer - I want to be a trusted partner who adds real value.
                </p>
                <p>
                 Here’s why we’ll work well together: <br />
                  • I help you avoid common project roadblocks that less experienced freelancers often miss.  <br />
                  • I keep your priorities front and center - staying on schedule, keeping you updated, and communicating clearly every step of the way. <br />
                  • Your success is what drives mine. <br />
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">70+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">32</div>
                  <div className="text-sm text-gray-400">School Student</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
                <img
                  src="/shaheer.png"
                  alt="Shaheer Rafi"
                  className="relative w-full h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* <section id="experience" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span 
                className={
                  currentColorIndex === 0 
                    ? "text-blue-400 drop-shadow-lg" 
                    : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
                }
              >
                Experience
              </span>
            </motion.h2>
            <motion.div
              className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: "250px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My professional journey in{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                software development
              </motion.span>
            </motion.p>
          </motion.div>

          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              
              <div className="hidden md:block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
              
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative pl-0 md:pl-20 pb-8 md:pb-12 group"
              >
                
                <motion.div
                  className={`hidden md:block absolute left-2 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${currentTheme.primary} rounded-full border-2 md:border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300`}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
                    scale: 1.3
                  }}
                />
                
                
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                >
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  
                  <motion.h3
                    className={
                      currentColorIndex === 0 
                        ? "text-lg md:text-2xl font-bold mb-2 text-blue-400 drop-shadow-lg relative z-10" 
                        : `text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent relative z-10`
                    }
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Front-End Developer Intern
                  </motion.h3>
                  
                  
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className={
                      currentColorIndex === 0 
                        ? "text-base md:text-lg font-semibold text-cyan-400 drop-shadow-lg mb-1 md:mb-0" 
                        : `text-base md:text-lg font-semibold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent mb-1 md:mb-0`
                    }>
                      01Neo (On Site)
                    </span>
                    <span className="text-gray-400 text-sm md:text-base">
                      Jun 2025
                    </span>
                  </motion.div>
                  
                  
                  <motion.ul
                    className="space-y-3 text-gray-300 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {[
                      "Developed reusable components with Next.js, TypeScript, and TailwindCSS.",
                      "Translated mockups into responsive web interfaces.",
                      "Integrated RESTful APIs and handled error states securely.",
                      "Contributed to stand-ups, async GitHub reviews, and agile boards."
                    ].map((responsibility, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start md:items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className={`hidden md:block text-sm mr-3 mt-1.5 w-2 h-2 bg-gradient-to-r ${currentTheme.accent} rounded-full flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover:text-white transition-colors duration-300 md:ml-0">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  
                  <motion.div
                    className="flex flex-wrap gap-2 mt-auto pt-6 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    {["Next.js", "TypeScript", "TailwindCSS", "RESTful APIs", "GitHub", "Agile"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative  md:pl-20 pb-8 md:pb-12 group"
              >
                
                <motion.div
                  className={`hidden md:block absolute left-2 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r ${currentTheme.secondary} rounded-full border-2 md:border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300`}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
                    scale: 1.3
                  }}
                />
                
                
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                >
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${currentTheme.secondary} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  
                  <motion.h3
                    className={
                      currentColorIndex === 0 
                        ? "text-lg md:text-2xl font-bold mb-2 text-purple-400 drop-shadow-lg relative z-10" 
                        : `text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent relative z-10`
                    }
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Freelance Web Developer
                  </motion.h3>
                  
                  
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span className={
                      currentColorIndex === 0 
                        ? "text-base md:text-lg font-semibold text-pink-400 drop-shadow-lg mb-1 md:mb-0" 
                        : `text-base md:text-lg font-semibold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent mb-1 md:mb-0`
                    }>
                      Independent Contractor
                    </span>
                    <span className="text-gray-400 text-sm md:text-base">
                      2023 - 2025
                    </span>
                  </motion.div>
                  
                  
                  <motion.ul
                    className="space-y-3 text-gray-300 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    {[
                      "Delivered custom web solutions for diverse clients across multiple industries.",
                      "Collaborated directly with stakeholders to transform ideas into pixel-perfect reality.",
                      "Built scalable, performance-optimized applications with modern tech stacks.",
                      "Maintained 100% client satisfaction through clear communication and timely delivery.",
                      "Specialized in responsive design and seamless user experience optimization."
                    ].map((responsibility, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start md:items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className={`hidden md:block text-sm mr-3 mt-1.5 w-2 h-2 bg-gradient-to-r ${currentTheme.accent} rounded-full flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover:text-white transition-colors duration-300 md:ml-0">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  
                  <motion.div
                    className="flex flex-wrap gap-2 mt-auto pt-6 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    {["React", "Next.js", "JavaScript", "CSS3", "HTML5", "Responsive Design", "UI/UX", "Client Relations"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.5 + index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}

      
      <section id="skills" className="py-24 relative overflow-hidden">
        
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-64 h-64 bg-gradient-to-r ${currentTheme.primary} opacity-3 rounded-full blur-3xl`}
              style={{
                left: `${30 + i * 40}%`,
                top: `${20 + i * 40}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span 
                className={
                  currentColorIndex === 0 
                    ? "text-blue-400 drop-shadow-lg" 
                    : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
                }
              >
                Skills & Technologies
              </span>
            </motion.h2>
            <motion.div
              className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: "300px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The magical tools I use to bring{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ideas to life
              </motion.span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "WordPress", icon: <SiWordpress className="text-5xl" />, color: "from-blue-500 to-sky-400", hoverColor: "from-blue-400 to-sky-300" },
              { name: "PHP", icon: <SiPhp className="text-5xl" />, color: "from-indigo-400 to-purple-500", hoverColor: "from-indigo-300 to-purple-400" },
              { name: "JavaScript", icon: <SiJavascript className="text-5xl" />, color: "from-yellow-400 to-orange-500", hoverColor: "from-yellow-300 to-orange-400" },
              // { name: "Bootstrap", icon: <SiBootstrap className="text-5xl" />, color: "from-purple-500 to-indigo-500", hoverColor: "from-purple-400 to-indigo-400" },
              { name: "HTML", icon: <SiHtml5 className="text-5xl" />, color: "from-orange-500 to-red-500", hoverColor: "from-orange-400 to-red-400" },
              { name: "CSS", icon: <SiCss3 className="text-5xl" />, color: "from-blue-400 to-purple-500", hoverColor: "from-blue-300 to-purple-400" },
              // Page Builders
              { name: "Elementor", icon: <SiElementor className="text-5xl" />, color: "from-pink-500 to-red-400", hoverColor: "from-pink-400 to-red-300" },
              { name: "Divi", icon: <FaLayerGroup className="text-5xl" />, color: "from-fuchsia-500 to-purple-500", hoverColor: "from-fuchsia-400 to-purple-400" },
              { name: "Gutenberg", icon: <TbBlocks className="text-5xl" />, color: "from-slate-500 to-gray-300", hoverColor: "from-slate-400 to-gray-200" },
              { name: "Oxygen Builder", icon: <FaCubes className="text-5xl" />, color: "from-blue-400 to-indigo-500", hoverColor: "from-blue-300 to-indigo-400" },
              // SEO / Marketing
              { name: "Yoast SEO", icon: <SiYoast className="text-5xl" />, color: "from-pink-500 to-purple-500", hoverColor: "from-pink-400 to-purple-400" },
              // { name: "Rank Math", icon: <FaChartLine className="text-5xl" />, color: "from-indigo-400 to-violet-500", hoverColor: "from-indigo-300 to-violet-400" },
              { name: "Google Analytics", icon: <SiGoogleanalytics className="text-5xl" />, color: "from-amber-400 to-orange-500", hoverColor: "from-amber-300 to-orange-400" },
              // { name: "Cloudflare", icon: <SiCloudflare className="text-5xl" />, color: "from-orange-400 to-yellow-400", hoverColor: "from-orange-300 to-yellow-300" },
              // { name: "Semrush", icon: <SiSemrush className="text-5xl" />, color: "from-orange-500 to-amber-500", hoverColor: "from-orange-400 to-amber-400" },
              // { name: "WP Rocket", icon: <FaRocket className="text-5xl" />, color: "from-orange-400 to-red-500", hoverColor: "from-orange-300 to-red-400" },
              // Payment Gateways
              { name: "Stripe", icon: <SiStripe className="text-5xl" />, color: "from-indigo-400 to-blue-500", hoverColor: "from-indigo-300 to-blue-400" },
              { name: "PayPal", icon: <SiPaypal className="text-5xl" />, color: "from-blue-500 to-sky-400", hoverColor: "from-blue-400 to-sky-300" },
              { name: "WooCommerce Payments", icon: <FaShoppingCart className="text-5xl" />, color: "from-purple-500 to-pink-500", hoverColor: "from-purple-400 to-pink-400" },
              // DevOps & Tools
              { name: "Git", icon: <SiGit className="text-5xl" />, color: "from-orange-500 to-red-600", hoverColor: "from-orange-400 to-red-500" },
              // { name: "Docker", icon: <SiDocker className="text-5xl" />, color: "from-blue-400 to-cyan-500", hoverColor: "from-blue-300 to-cyan-400" },
              // { name: "Composer", icon: <SiComposer className="text-5xl" />, color: "from-yellow-500 to-orange-500", hoverColor: "from-yellow-400 to-orange-400" },
              { name: "MySQL", icon: <SiMysql className="text-5xl" />, color: "from-sky-500 to-blue-600", hoverColor: "from-sky-400 to-blue-500" },
              // { name: "Vite", icon: <SiVite className="text-5xl" />, color: "from-violet-400 to-fuchsia-500", hoverColor: "from-violet-300 to-fuchsia-400" },
              // { name: "Gulp", icon: <SiGulp className="text-5xl" />, color: "from-red-400 to-pink-500", hoverColor: "from-red-300 to-pink-400" },
                // Server & Hosting
              { name: "cPanel", icon: <SiCpanel className="text-5xl" />, color: "from-blue-500 to-sky-400", hoverColor: "from-blue-400 to-sky-300" },
              // { name: "Plesk", icon: <SiPlesk className="text-5xl" />, color: "from-indigo-400 to-purple-500", hoverColor: "from-indigo-300 to-purple-400" },
              { name: "Nginx", icon: <SiNginx className="text-5xl" />, color: "from-green-500 to-emerald-600", hoverColor: "from-green-400 to-emerald-500" },
              { name: "Apache", icon: <SiApache className="text-5xl" />, color: "from-red-500 to-orange-500", hoverColor: "from-red-400 to-orange-400" },
              // { name: "Kinsta", icon: <SiKinsta className="text-5xl" />, color: "from-pink-500 to-purple-500", hoverColor: "from-pink-400 to-purple-400" },
              { name: "WP Engine", icon: <FaCloud className="text-5xl" />, color: "from-blue-400 to-cyan-500", hoverColor: "from-blue-300 to-cyan-400" },
              { name: "Vercel (Headless)", icon: <SiVercel className="text-5xl" />, color: "from-gray-500 to-black", hoverColor: "from-gray-400 to-black" },
              // APIs
              { name: "REST API", icon: <SiJest className="text-5xl" />, color: "from-blue-500 to-sky-400", hoverColor: "from-blue-400 to-sky-300" },
              // { name: "GraphQL (WPGraphQL)", icon: <SiGraphql className="text-5xl" />, color: "from-pink-500 to-purple-500", hoverColor: "from-pink-400 to-purple-400" },
              { name: "Headless WordPress", icon: <FaCogs className="text-5xl" />, color: "from-indigo-400 to-blue-500", hoverColor: "from-indigo-300 to-blue-400" },
              // Other skills for frontend
              // { name: "TypeScript", icon: <SiTypescript className="text-5xl" />, color: "from-blue-400 to-blue-600", hoverColor: "from-blue-300 to-blue-500" },
              // { name: "React", icon: <SiReact className="text-5xl" />, color: "from-cyan-400 to-blue-500", hoverColor: "from-cyan-300 to-blue-400" },
              // { name: "Next.js", icon: <SiNextdotjs className="text-5xl" />, color: "from-slate-400 to-white", hoverColor: "from-slate-300 to-gray-100" },
              // { name: "Node.js", icon: <SiNodedotjs className="text-5xl" />, color: "from-green-500 to-emerald-600", hoverColor: "from-green-400 to-emerald-500" },
              // { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl" />, color: "from-teal-400 to-blue-500", hoverColor: "from-teal-300 to-blue-400" },
              // Design & Workflow
              { name: "Figma", icon: <SiFigma className="text-5xl" />, color: "from-pink-400 to-purple-500", hoverColor: "from-pink-300 to-purple-400" },
              // { name: "Photoshop", icon: <SiAdobephotoshop className="text-5xl" />, color: "from-blue-500 to-indigo-500", hoverColor: "from-blue-400 to-indigo-400" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotateY: 10,
                  rotateX: 5
                }}
                className="group relative cursor-pointer"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                >
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    whileHover={{ opacity: 0.2 }}
                  />
                  <motion.div
                    className="mb-4 relative z-10 text-5xl transition-all duration-300"
                    style={{
                      color: skill.name === "Next.js" ? "#ffffff" :
                             skill.name === "React" ? "#61dafb" :
                             skill.name === "TypeScript" ? "#3178c6" :
                             skill.name === "Tailwind CSS" ? "#06b6d4" :
                             skill.name === "JavaScript" ? "#f7df1e" :
                             skill.name === "HTML" ? "#e34f26" :
                             skill.name === "CSS" ? "#1572b6" :
                             skill.name === "Git" ? "#f05032" :
                             skill.name === "Node.js" ? "#339933" :
                             skill.name === "Docker" ? "#2496ed" :
                             skill.name === "C" ? "#a8b9cc" :
                             skill.name === "C++" ? "#00599c" : "#ffffff"
                    }}
                    animate={{ 
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      filter: "drop-shadow(0 0 15px currentColor) brightness(1.3)",
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  
                  <motion.span
                    className="text-sm font-medium text-white/90 group-hover:text-white transition-colors relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {skill.name}
                  </motion.span>

                  
                  <motion.div
                    className="mt-3 w-full bg-white/10 rounded-full h-2 relative z-10 group-hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 shadow-lg`}
                      style={{
                        background: `linear-gradient(to right, ${
                          skill.color.includes('slate-400') ? '#94a3b8, #ffffff' :
                          skill.color.includes('cyan-400') ? '#22d3ee, #3b82f6' :
                          skill.color.includes('blue-400') ? '#60a5fa, #3730a3' :
                          skill.color.includes('teal-400') ? '#2dd4bf, #3b82f6' :
                          skill.color.includes('yellow-400') ? '#facc15, #f97316' :
                          skill.color.includes('orange-500') ? '#f97316, #ef4444' :
                          skill.color.includes('green-500') ? '#10b981, #059669' :
                          skill.color.includes('gray-400') ? '#9ca3af, #64748b' :
                          '#60a5fa, #8b5cf6'
                        })`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ 
                        width: skill.name === "Next.js" ? "95%" :
                               skill.name === "React" ? "90%" :
                               skill.name === "TypeScript" ? "85%" :
                               skill.name === "JavaScript" ? "88%" :
                               skill.name === "Tailwind CSS" ? "92%" :
                               skill.name === "HTML" ? "93%" :
                               skill.name === "CSS" ? "87%" :
                               skill.name === "Git" ? "84%" :
                               skill.name === "Node.js" ? "83%" :
                               skill.name === "Docker" ? "78%" :
                               skill.name === "C" ? "80%" :
                               skill.name === "C++" ? "82%" : "85%"
                      }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        filter: "brightness(1.2)",
                        boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)"
                      }}
                    />
                  </motion.div>

                  
                  <motion.div
                    className="absolute top-2 right-2 text-yellow-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Technologies", value: "+40", icon: "🛠️" },
              { label: "Projects", value: "70+", icon: "🚀" },
              { label: "Experience", value: "8+", icon: "⚡" },
              { label: "Coffee Cups", value: "∞", icon: "☕" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span 
                className={
                  currentColorIndex === 0 
                    ? "text-blue-400 drop-shadow-lg" 
                    : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
                }
              >
                Featured Projects
              </span>
            </motion.h2>
            <motion.div
              className={`h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A showcase of my{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                creative work
              </motion.span>
              {" "}and technical expertise
            </motion.p>
          </motion.div>
          <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg text-[30px]" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent text-[30px]`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
               E-Commerce & Marketplace Sites
          </motion.span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
            {PROJECTS.ecommerce.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')}
                  className={`cursor-pointer group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 `}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className="flex gap-3">
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        <FiExternalLink className="text-lg" />
                        Visit {project.title}
                      </a>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg text-[30px]" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent text-[30px]`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SaaS && Web Appliations
          </motion.span>   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
            {PROJECTS.saas.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')}
                className={`cursor-pointer group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 `}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>                  
                  {/* <div className="flex gap-3">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FiExternalLink className="text-lg" />
                      Visit {project.title}
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>


          <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg text-[30px]" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent text-[30px]`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Informational & Brand Presence Sites
          </motion.span>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
            {PROJECTS.informational.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')}
                className={`cursor-pointer goup relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>    
                  {/* <div className="flex gap-3">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FiExternalLink className="text-lg" />
                      Visit {project.title}
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg text-[30px]" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent text-[30px]`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Lead Generation & Promotional Sites
          </motion.span>   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
            {PROJECTS.leadGen.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')}
                className={`cursor-pointer group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 `}             >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex gap-3">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <FiExternalLink className="text-lg" />
                      Visit {project.title}
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-72 h-72 bg-gradient-to-r ${currentTheme.primary} opacity-5 rounded-full blur-3xl`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 30}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span 
                className={
                  currentColorIndex === 0 
                    ? "text-blue-400 drop-shadow-lg" 
                    : `bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`
                }
              >
                Get in Touch
              </span>
            </motion.h2>
            <motion.div
              className={`h-1.5 md:h-2 bg-gradient-to-r ${currentTheme.secondary} mx-auto rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: "220px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to bring your{" "}
              <motion.span
                className={
                  currentColorIndex === 0 
                    ? "font-bold text-purple-400 drop-shadow-lg" 
                    : `font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`
                }
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ideas to life
              </motion.span>
              ? Let&apos;s create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">lanehatch@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaLinkedin className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white font-medium">lane-hatch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-white font-medium">lanehatch</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <footer className="py-12 md:py-16 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
            
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <motion.div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${currentTheme.primary} flex items-center justify-center shadow-lg`}
                animate={{ 
                  rotate: 360,
                  backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                  backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  backgroundPosition: { duration: 6, repeat: Infinity },
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)"
                }}
              >
                <FaCode className="text-white text-xl md:text-2xl" />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className={
                    currentColorIndex === 0 
                      ? "text-xl md:text-2xl font-bold text-cyan-400 drop-shadow-lg" 
                      : `text-xl md:text-2xl font-bold bg-gradient-to-r ${currentTheme.secondary} bg-clip-text text-transparent`
                  }
                  animate={{ 
                    backgroundPosition: ["0% 50%", "50% 50%", "0% 50%"],
                    backgroundSize: ["200% 200%", "200% 200%", "200% 200%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                   Shaheer Rafi
                </motion.span>
                <span className="text-xs md:text-sm text-gray-400 font-medium">
                  Frontend Developer
                </span>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6 md:space-x-8"
            >
              <motion.a 
                href="https://github.com/ahallali" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                  <FaGithub className="text-xl" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/lanehatch/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <FaLinkedin className="text-xl" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
              
              <motion.a 
                href="mailto:lanehatch@gmail.com" 
                className="group relative"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/20 transition-all duration-300">
                  <FaEnvelope className="text-xl" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-400 text-sm md:text-base">
                © 2025 Shaheer Rafi
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                Crafted with ❤️ and code
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}