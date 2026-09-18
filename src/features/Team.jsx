import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useRef } from "react";

const boardMembers = [
  {
    name: "Amal Jebi",
    role: "Lead",
    desc: "Club Lead & Technical Director | Driving offensive security initiatives, workshops, and team excellence.",
    image: "/amal.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Akul J",
    role: "Co Lead",
    desc: "Club Co-Lead | Coordinating operations, strategic planning, and community growth.",
    image: "/akul.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emil George",
    role: "CTF Captain",
    desc: "CTF Captain | Leading team training, binary exploitation, and competition strategy.",
    image: "/emil.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Bensen Thomas",
    role: "Tool Specialist",
    desc: "Tool Specialist | Security frameworks, lab tooling, and environment provisioning.",
    image: "/ben.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Athul Jose",
    role: "Infrastructure and web Administrator",
    desc: "Infrastructure & Web Admin | Systems engineering, cloud platforms, and cyber web portal administration.",
    image: "/athul.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Rebecca elizabeth",
    role: "Event coordinator",
    desc: "Event Coordinator | Organizing hackathons, speaker sessions, and national CTF engagements.",
    image: "/rebecca.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Arha Suresh",
    role: "Research and content lead",
    desc: "Research & Content Lead | Cyber threat intelligence, curriculum design, and technical writing.",
    image: "/arha.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Anagha JM",
    role: "documentation coordinator",
    desc: "Documentation Coordinator | Managing official records, event reports, and club knowledge base.",
    image: "/anagha.jpg",
    social: { linkedin: "#", github: "#" },
  },
];

/* ── Animation Variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

/* ── Tilt Card Component ── */
function TiltCard({ children, index }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseEnter() {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  }

  function handleMouse(e) {
    if (!rectRef.current) return;
    const px = (e.clientX - rectRef.current.left) / rectRef.current.width - 0.5;
    const py = (e.clientY - rectRef.current.top) / rectRef.current.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        willChange: "transform",
      }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="team-card group relative rounded-3xl p-5 md:p-6 text-center flex flex-col h-full cursor-none overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-16 md:py-32 relative z-10" id="team">
      {/* Background glowing orbs */}
      <div className="bg-orb bg-cyber-red w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] left-1/4 top-1/4" />
      <div className="bg-orb bg-cyber-purple w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] right-1/4 bottom-1/4 opacity-20" />

      <div className="container mx-auto px-6 max-w-7xl 2xl:max-w-[1600px] relative z-10">
        {/* ── Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 md:mb-20 text-center"
        >
          {/* Club Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.1,
            }}
            className="inline-flex items-center justify-center w-20 h-20 xl:w-24 xl:h-24 rounded-2xl liquid-glass mb-6 overflow-hidden p-2"
          >
            <img
              src="/cyber_logopng.png"
              alt="Cybersecurity Club Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight">
            Command{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-blue">
              Center
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-500 text-sm xl:text-base tracking-[0.3em] uppercase"
          >
            The hackers behind the firewall
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-6 h-px w-40 xl:w-56 bg-gradient-to-r from-transparent via-cyber-red/60 to-transparent origin-center"
          />
        </motion.div>

        {/* ── Card Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8 max-w-7xl 2xl:max-w-none mx-auto"
          style={{ perspective: 1000 }}
        >
          {boardMembers.map((member, index) => (
            <TiltCard key={index} index={index}>
              {/* Animated gradient border overlay */}
              <div
                className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #ff0055, #7a00ff, #0044ff, #ff0055)",
                  backgroundSize: "300% 300%",
                  animation: "borderGlow 4s ease infinite",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-[#0d1117]" />
              </div>

              {/* Card inner content */}
              <div className="relative z-10 flex flex-col h-full 2xl:p-4">
                {/* Hover glow blobs */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyber-red/0 group-hover:bg-cyber-red/8 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyber-blue/0 group-hover:bg-cyber-blue/8 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

                {/* ── Profile Picture ── */}
                <div className="relative w-36 h-36 xl:w-44 xl:h-44 mx-auto mb-6 shrink-0 group">
                  {/* Spinning gradient ring */}
                  <div
                    className="absolute inset-[-5px] xl:inset-[-8px] rounded-full opacity-50 group-hover:opacity-100 blur-[3px] transition-opacity duration-500 animate-[spin_6s_linear_infinite]"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #ff0055, #7a00ff, #0044ff, #7a00ff, #ff0055)",
                    }}
                  />

                  {/* Pulsing outer glow on hover */}
                  <div className="absolute inset-[-12px] xl:inset-[-16px] rounded-full bg-cyber-purple/0 group-hover:bg-cyber-purple/10 blur-xl transition-all duration-700 pointer-events-none" />

                  {/* Image container — liquid glass style */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span class="text-4xl font-black bg-gradient-to-br from-cyber-red to-cyber-purple bg-clip-text text-transparent absolute inset-0 flex items-center justify-center">${member.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* Online indicator */}
                  <div className="absolute bottom-1 xl:bottom-2 right-1 xl:right-2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-green-500 border-2 border-[#0d1117] shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                    <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-40" />
                  </div>
                </div>

                {/* ── Name ── */}
                <motion.h3 className="text-xl xl:text-2xl font-bold text-white mb-1 xl:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-500">
                  {member.name}
                </motion.h3>

                {/* ── Role Badge — liquid glass pill ── */}
                <div className="inline-flex items-center justify-center mx-auto mb-4 xl:mb-6">
                  <span className="px-4 xl:px-5 py-1.5 xl:py-2 rounded-full text-[10px] xl:text-xs font-bold uppercase tracking-[0.15em] liquid-glass text-cyber-purple group-hover:shadow-[0_0_16px_rgba(122,0,255,0.25)] transition-all duration-500">
                    {member.role}
                  </span>
                </div>

                {/* ── Description ── */}
                <p className="text-sm xl:text-base text-gray-400 leading-relaxed mb-8 grow group-hover:text-gray-300 transition-colors duration-500">
                  {member.desc}
                </p>

                {/* ── Social Links ── */}
                <div className="flex justify-center gap-3 mt-auto">
                  {[
                    {
                      href: member.social.linkedin,
                      icon: Linkedin,
                      hoverBorder: "#0044ff",
                      hoverShadow: "rgba(0,68,255,0.4)",
                      hoverColor: "#0044ff",
                    },
                    {
                      href: member.social.github,
                      icon: Github,
                      hoverBorder: "#7a00ff",
                      hoverShadow: "rgba(122,0,255,0.4)",
                      hoverColor: "#7a00ff",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{
                        scale: 1.2,
                        boxShadow: `0 0 20px ${social.hoverShadow}`,
                        borderColor: social.hoverBorder,
                        color: social.hoverColor,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl liquid-glass flex items-center justify-center text-gray-500 transition-colors duration-300"
                    >
                      <social.icon className="w-4 h-4 xl:w-5 xl:h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
