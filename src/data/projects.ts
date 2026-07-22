import couponsImg from "@/assets/coupons.webp";
import pureSukunImg from "@/assets/PureSukun.png";
import rivePointImg from "@/assets/RivePoint.webp";
import verizonImg from "@/assets/verizon.png";
import vInventaImg from "@/assets/vInventa.webp";
import vNitroImg from "@/assets/vNitro.webp";

export type Project = {
  cat: string;
  title: string;
  desc: string;
  tech: string[];
  color: string;
  caseStudyImage?: string;
};

export const PROJECTS: Project[] = [
  { cat: "E-commerce, Coupons, Cashback", title: "Cupons.com — Online & Printable Coupons + Cashback.", desc: "Designed and developed a user-centric platform. Focused on improving user journeys, simplifying coupon discovery, creating intuitive interfaces, and building responsive high-performance experiences.", tech: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Front-End Development", "HTML", "CSS"], color: "from-indigo-500 to-purple-500", caseStudyImage: couponsImg },
  { cat: "Mobile App", title: "RivePoint — Mobile App for Point of Sale", desc: "Led the UI/UX design and front-end development of a modern Point of Sale mobile application. Designed streamlined workflows for transactions, inventory management, and reporting", tech: ["UI/UX Design", "Figma", "Prototyping","React Native", "Design Systems"], color: "from-cyan-400 to-blue-500", caseStudyImage: rivePointImg },
  { cat: "Cybersecurity", title: "vInventa — Cybersecurity for Small Businesses", desc: "I was responsible for designing an intuitive and user-friendly experience I was involved in conducting user research, creating user flows, wireframes, high-fidelity UI designs, and interactive prototypes..", tech: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Front-End Development", "HTML", "CSS"], color: "from-fuchsia-500 to-pink-500", caseStudyImage: vInventaImg },
  { cat: "Networking", title: "vNitro — The Next Generation SDN Management Platform", desc: "I was responsible for designing a modern, intuitive interface for a Software-Defined Networking (SDN) management platform. The primary goal was to simplify complex network operations.", tech: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Front-End Development", "HTML", "CSS"], color: "from-emerald-400 to-cyan-500", caseStudyImage: vNitroImg },
  { cat: "E-commerce", title: "PureSukun — The Skin Boosting Super Serum", desc: "I designed a visually engaging and conversion-focused digital experience that reflected the brand's premium skincare identity. The objective was to communicate the product's benefits clearly.", tech: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Front-End Development", "HTML", "CSS"], color: "from-orange-400 to-rose-500", caseStudyImage: pureSukunImg },
  { cat: "Telecom", title: "Verizon Innovation Center", desc: " As the UI/UX Designer for the Verizon Innovation Center portal, I contributed to creating a user-centric platform. I focused on designing intuitive user flows, responsive dashboards, and clean interface layouts", tech: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Front-End Development", "HTML", "CSS"], color: "from-violet-500 to-indigo-500", caseStudyImage: verizonImg },
  { cat: "UI/UX", title: "Pulse Health Portal", desc: "Patient-facing portal with accessible flows and a unified design system.", tech: ["Figma", "React", "WCAG"], color: "from-sky-400 to-indigo-500" },
  { cat: "Front-End", title: "Meridian Commerce", desc: "Headless storefront with optimized checkout and personalization.", tech: ["Next.js", "Tailwind", "Stripe"], color: "from-amber-400 to-orange-500" },
  { cat: "AI", title: "Echo Support Assistant", desc: "RAG-powered support bot integrated across web, mobile, and Slack.", tech: ["OpenAI", "Pinecone", "Node.js"], color: "from-teal-400 to-emerald-500" },
];

export const FILTERS = ["All", "UI/UX", "Front-End", "Back-End", "AI", "ML", "Agentic AI"];
