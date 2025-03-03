import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "/Images/Logo.png";
import {
  BarChart3,
  Zap,
  MessageSquare,
  Shield,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
} from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/Footer";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import SEOTools from "./components/dashboard/SEOTools";
import Content from "./components/dashboard/Content";
import Analytics from "./components/dashboard/Analytics";
import Settings from "./components/dashboard/Settings";
import ReCAPTCHA from 'react-google-recaptcha';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  React.useEffect(() => {
    // Create Tawk.to script
    var s1 = document.createElement("script");

    s1.async = true;
    s1.src = "https://embed.tawk.to/67c2a5bde9859e19133b7612/1il85erah";
    s1.setAttribute("crossorigin", "*");

    // Add script to document
    document.head.appendChild(s1);

    // Cleanup function
    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="SEO.ai Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-4">
              <a href="#" className="text-[#EFE3C2] hover:text-white px-3 py-2">
                Home
              </a>
              <a
                href="#about"
                className="text-[#EFE3C2] hover:text-white px-3 py-2"
              >
                About
              </a>
              <a
                href="#features"
                className="text-[#EFE3C2] hover:text-white px-3 py-2"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-[#EFE3C2] hover:text-white px-3 py-2"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-[#EFE3C2] hover:text-white px-3 py-2"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-[#EFE3C2] hover:text-white px-3 py-2"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Dashboard Button */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={handleDashboardClick}
              className="running-border-button px-6 py-2 rounded-full bg-[#3E7B27] text-[#EFE3C2]"
            >
              SEOlytics
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#EFE3C2]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              About
            </a>
            <a
              href="#features"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-[#EFE3C2] hover:text-white block px-3 py-2"
            >
              Contact
            </a>
            <button className="running-border-button w-full mt-4 px-6 py-2 rounded-full bg-[#3E7B27] text-[#EFE3C2]">
              Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen section-background flex items-center justify-center">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 ${
          inView ? "slide-up visible" : "slide-up"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-[#EFE3C2] mb-6"
        >
          Stir Up Your SEO Strategy
          <span className="text-[#3E7B27]"> with AI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#EFE3C2] mb-8"
        >
          Harness the power of artificial intelligence to optimize your content
          and skyrocket your rankingsMaster the art of creating killer content
          that captivates, attracts, and climbs to the top of search results
          with help from artificial intelligence!
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="running-border-button px-8 py-4 rounded-full bg-[#3E7B27] text-[#EFE3C2] text-lg font-semibold inline-block"
        >
          Optimize Now <ArrowRight className="inline-block ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/Images/AB1.jpg"
              alt="About SEO.ai"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              style={{ maxHeight: "600px" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
              About SEO.ai
            </h2>
            <p className="text-xl text-[#EFE3C2] mb-8">
              At SEO. ai, we're redefining the SEO Approach for Businesses
              through AI Technology Combining the latest machine learning and
              deep SEO expertise, we deliver results that matter.
            </p>
            <p className="text-xl text-[#EFE3C2] mb-8">
              We want to provide enterprise-level SEO tools to companies of all
              sizes. Our platform enables you to stay ahead in a constantly
              shifting digital territory through live content analysis
              and operational insights.
            </p>
            <ul className="text-xl text-[#EFE3C2] mb-8 list-disc pl-6">
              <li>Smarter Keyword Strategy</li>
              <li>Optimized Content Quality</li>
              <li>Effortless Automation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-[#3E7B27]" />,
      title: "AI-Powered Analysis",
      description:
        "Optimize your content for maximum SEO impact with advanced algorithms.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#3E7B27]" />,
      title: "Real-time Insights",
      description:
        "Receive instant feedback and practical suggestions for better performance.",
    },
    {
      icon: <Zap className="h-12 w-12 text-[#3E7B27]" />,
      title: "Smart Optimization",
      description:
        "Keyword and content structure suggestions to rank better automatically",
    },
    {
      icon: <Shield className="h-12 w-12 text-[#3E7B27]" />,
      title: "Competitor Analysis",
      description:
        "Gain valuable insights into competitor strategies and stay one step ahead.",
    },
  ];

  return (
    <section id="features" className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
          Innovative Features for Smarter SEO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl border-[#3e7b27] animate-border-animate hover:shadow-lg hover:shadow-[#3e7b27]/50 transition-all transform hover:-translate-y-1 flex flex-col h-full  "
            >
              <div className="mb-4 ">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#EFE3C2] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#EFE3C2]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 section-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-12 rounded-xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
            Ready to Transform Your SEO Strategy?
          </h2>
          <p className="text-xl text-[#EFE3C2] mb-8">
            Join thousands of businesses already using SEO.ai to dominate their
            market
          </p>
          <a
            href="#contact"
            className="running-border-button px-8 py-4 rounded-full bg-[#3E7B27] text-[#EFE3C2] text-lg font-semibold inline-block"
          >
            Get started <ArrowRight className="inline-block ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sammy H.",
      role: "digital marketing manager,",
      company: "Trinx Org",
      content:
        "SEO.ai operated our rankings at the top and optimization was a breeze!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Jeffry H.",
      role: "CEO,",
      company: "Greenwich Innovations",
      content:
        "The optimized content quality feature was a game-changer for us in the market.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Linzy J.",
      role: "Content Manager",
      company: "Innovate Tech",
      content:
        "SEO.ai gave us time back and brought us more traffic — 10/10 recommend!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
          Real Results, Real Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl border-[#3e7b27] animate-border-animate hover:shadow-lg hover:shadow-[#3e7b27]/50 transition-all transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#EFE3C2]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#EFE3C2]">{testimonial.role}</p>
                  <p className="text-[#EFE3C2] text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-[#EFE3C2]">{testimonial.content}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#3E7B27]"
                    fill="#3E7B27"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      features: [
        "4 Basic SEO Analysis",
        "5 Projects",
        "Weekly Reports",
        "Email Support",
        "Basic Keyword Insights",
      ],
    },
    {
      name: "Professional",
      price: "49",
      features: [
        "4 Advanced SEO Tools",
        "25 Projects",
        "Daily Reports",
        "Priority Support",
        "API Access",
        "Competitor Analysis",
        "Content Optimization Recommendations",
      ],
    },
    {
      name: "Enterprise",
      price: "89",
      features: [
        "Custom SEO Solutions",
        "Unlimited Projects",
        "Real-Time Reporting & Analytics",
        "24/7 Premium Support",
        "API Access",
        "Custom Integrations",
        "Tailored SEO Strategy & Consultation",
        "Enterprise-Level Data Security",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
          Get Started with the Right Plan for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glassmorphism p-8 rounded-xl flex flex-col justify-between ${
                index === 1 ? "transform translate-y-[-30px] shadow-lg shadow-[#3E7B27] glow-effect" : "scale-95"
              }`}
            >
              <h3 className="text-2xl font-bold text-[#EFE3C2] mb-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-[#EFE3C2] mb-6">
                ${plan.price}
                <span className="text-lg font-normal text-[#EFE3C2]/70">
                  /mo
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-[#EFE3C2]">
                    <Zap className="h-5 w-5 text-[#3E7B27] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="running-border-button w-full px-6 py-3 rounded-full bg-[#3E7B27] text-[#EFE3C2] font-semibold inline-block text-center over"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SEO.ai?",
      answer:
        "A platform that uses artificial intelligence to enhance content and rank better on search engines.",
    },
    {
      question: "How does it work?",
      answer:
        "It is powered by strong AI algorithms that analyze content and suggest real-time SEO practices..",
    },
    {
      question: "Can it help with your keyword research?",
      answer:
        "Yes, the platform suggests smart keywords based on your content and audience.",
    },
    {
      question: "Is this appropriate for small businesses?",
      answer:
        "Definitely! Scalable: The platform caters to businesses of all shapes and sizes, from a startup to an enterprise.",
    },
    {
      question: "Is competitor analysis offered on it?",
      answer:
        "Yes, it helps identify the SEO strategies of your competitors so you can stay ahead.",
    },
    {
      question: "How long until I see results?",
      answer:
        "As you implement the recommendations you will see improvements in rankings and traffic.",
    },
    {
      question: "Is it easy to use?",
      answer:
        "Well, the platform is easy to use and provides an intuitive interface for effortless content optimization.",
    },
    {
      question: "So, to try before you buy?",
      answer: "Yes, you can try it free for yourself.",
    },
  ];

  return (
    <section className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold text-[#EFE3C2]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#3E7B27]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#3E7B27]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-[#EFE3C2]">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.slice(4, 8).map((faq, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index + 4 ? null : index + 4)
                  }
                >
                  <span className="text-lg font-semibold text-[#EFE3C2]">
                    {faq.question}
                  </span>
                  {openIndex === index + 4 ? (
                    <ChevronUp className="h-5 w-5 text-[#3E7B27]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#3E7B27]" />
                  )}
                </button>
                {openIndex === index + 4 && (
                  <div className="px-6 pb-4 text-[#EFE3C2]">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <section id="contact" className="py-20 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#EFE3C2] to-[#3E7B27] text-transparent bg-clip-text">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="glassmorphism p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#EFE3C2] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-[#123524] border border-[#3E7B27] text-[#EFE3C2] focus:outline-none focus:border-[#3E7B27]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#EFE3C2] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-[#123524] border border-[#3E7B27] text-[#EFE3C2] focus:outline-none focus:border-[#3E7B27]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#EFE3C2] mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-[#123524] border border-[#3E7B27] text-[#EFE3C2] focus:outline-none focus:border-[#3E7B27] h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                {/* Add Google reCAPTCHA here */}
                <div className="mt-4 flex justify-center">
                  <ReCAPTCHA
                    sitekey="6Le0LOYqAAAAAIVTryPU66HXWVAcjZPchFdLOmxw"
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <button
                  className="running-border-button w-full px-6 py-3 rounded-full bg-[#3E7B27] text-[#EFE3C2] font-semibold mt-4"
                  disabled={!recaptchaValue}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <img
              src="/Images/C1.webp"
              alt="Contact Us"
              className="rounded-xl shadow-2xl w-full h-xl object-cover"
              style={{ maxHeight: '600px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#123524]">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <CTASection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="seo-tools" element={<SEOTools />} />
          <Route path="content" element={<Content />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

<div id="tawk-to-chat"></div>;

export default App;
