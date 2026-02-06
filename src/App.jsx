import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Code, Briefcase, GraduationCap, Award, Database, Brain, Globe, Menu, X } from 'lucide-react';
import IMG from "./assets/hng.png"
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              Hilal Nur Gedikli
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors font-medium ${activeSection === section ? 'text-blue-600' : 'text-slate-700'}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-colors ${activeSection === section ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <div className="mb-8">
            <img 
              src={IMG} 
              alt="Hilal Nur Gedikli" 
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg"
            />
          </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 text-slate-900">
            Hilal Nur Gedikli
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-blue-600 font-medium">Computer Engineering Student</p>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            AI & ML Enthusiast | Full-Stack Developer | Licensed Ice Hockey Player
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <a href="https://github.com/HilalNurGedikli" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/hilalnurgedikli/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:gediklihilanur@gmail.com" className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-slate-900">
            About Me
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">Education</h3>
              <p className="text-base sm:text-lg mb-2 text-slate-800">B.Sc. in Computer Engineering</p>
              <p className="text-blue-600 font-medium">Yıldız Technical University</p>
              <p className="text-sm sm:text-base text-slate-500">2022 – 2027 | GPA: 3.46/4.00</p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">Specializations</h3>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li>• Machine Learning & AI</li>
                <li>• Full-Stack Development</li>
                <li>• Data Engineering</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">Languages</h3>
              <p className="text-base sm:text-lg text-slate-800">English - B2 Level</p>
              <p className="text-sm sm:text-base text-slate-500">YÖKDİL Score: 82.25</p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">Beyond Code</h3>
              <p className="text-sm sm:text-base text-slate-700">Licensed ice hockey player competing in YTU Women's Team and BuzBeykoz SK Women's First League</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-slate-900">
            Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border-l-4 border-blue-600 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900">Intern</h3>
                  <p className="text-blue-600 mb-4 font-medium text-sm sm:text-base">National Software and Certification Center | Sep – Nov 2025</p>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                    <li>• Machine Learning: Developed Random Forest and MLP regression models for liquid concentration prediction</li>
                    <li>• Backend Development: Built modular API layers using OOP principles in Python</li>
                    <li>• Frontend Integration: Created interactive Next.js dashboard for data visualization</li>
                    <li>• DevOps: Configured Docker Compose environment for microservices architecture</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border-l-4 border-blue-600 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900">Trainee</h3>
                  <p className="text-blue-600 mb-4 font-medium text-sm sm:text-base">Google AI & Technology Academy | Dec 2024 – Feb 2025 (Remote)</p>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                    <li>• Artificial Intelligence Applications: Developed LLM-based solutions</li>
                    <li>• Project Management: Studied Agile and Waterfall methodologies</li>
                    <li>• Web Development: Built modern applications using FastAPI, Pydantic, and Alembic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-slate-900">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">ML-Powered Liquid Analysis</h3>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                R&D project using Electrochemical Impedance Spectroscopy (EIS), Random Forest and MLP models for real-time liquid quality analysis and concentration prediction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">EIS</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Code className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">LLM Security Monitoring Plugin</h3>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                AI-powered web application analyzing website reliability through social media and complaint platforms using Gemini API and web scraping techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">LLM</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Web Scraping</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Gemini API</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Site Management System</h3>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Django-based multi-role condominium management platform with task assignment, dues tracking, and appointment scheduling. Designed with OOD principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Django</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">OOD</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Full-Stack</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Image Classification with Optimizers</h3>
              <p className="text-sm sm:text-base text-slate-700 mb-4">
                Non-linear regression model in C comparing GD/SGD/ADAM optimizers with t-SNE visualization for model interpretation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">C</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Optimization</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">t-SNE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-white flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-slate-900">
            Get In Touch
          </h2>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 sm:p-12 border-2 border-blue-100 shadow-lg">
            <p className="text-base sm:text-xl text-center mb-6 sm:mb-8 text-slate-700">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <a href="mailto:gediklihilanur@gmail.com" className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg hover:shadow-md transition-all border border-slate-200 group">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-lg text-slate-700 group-hover:text-blue-600 transition-colors break-all">
                  gediklihilanur@gmail.com
                </span>
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-slate-200">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-lg text-slate-700">Istanbul, Turkey</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <a href="https://github.com/HilalNurGedikli" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hilalnurgedikli/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-slate-500 border-t border-slate-200 bg-white">
        <p className="text-sm sm:text-base">© 2025 Hilal Nur Gedikli. All rights reserved.</p>
      </footer>
    </div>
  );
}