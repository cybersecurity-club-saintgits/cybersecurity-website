import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Terminal,
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

const BOOT_SEQUENCE = [
  { text: "user@saintgits:~$ ./init_club.sh", type: "command" },
  { text: "Initializing secure environment...", type: "info" },
  { text: "Loading CTF modules............... [OK]", type: "success" },
  { text: "Establishing encrypted channel.... [OK]", type: "success" },
  { text: "Scanning member database.......... [OK]", type: "success" },
  { text: "Loading workshop modules.......... [OK]", type: "success" },
  { text: "", type: "break" },
  {
    text: "╔══════════════════════════════════════════╗",
    type: "banner",
  },
  {
    text: "║   SAINTGITS CYBERSECURITY CLUB v2.0      ║",
    type: "banner",
  },
  {
    text: "║   Members: 100+ | Status: OPERATIONAL    ║",
    type: "banner",
  },
  {
    text: "╚══════════════════════════════════════════╝",
    type: "banner",
  },
  { text: "", type: "break" },
  { text: "Welcome, Agent. All systems are online.", type: "welcome" },
  { text: "Type '/help' to list available commands.", type: "hint" },
];

const highlights = [
  {
    icon: <Users className="w-5 h-5" />,
    label: "Thriving Community",
    detail: "100+ members learning, connecting, and growing together",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Skill Development",
    detail: "Weekly challenges, workshops, and hands-on training sessions",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Career Opportunities",
    detail: "Internships, mentorship, and industry connections",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    label: "Project Support",
    detail: "Guidance on cybersecurity projects and research",
  },
];

export default function AboutTerminal() {
  const [lines, setLines] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [bootDone, setBootDone] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const sectionRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);

    let delay = 0;
    BOOT_SEQUENCE.forEach((line, index) => {
      delay += line.type === "break" ? 100 : Math.random() * 250 + 120;
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setBootDone(true);
        }
      }, delay);
    });
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, bootDone]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const raw = inputVal.trim();
    if (!raw) return;

    setHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    const commandEntry = { text: raw, type: "user-command" };
    const cmd = raw.toLowerCase();

    let responses = [];

    if (cmd === "/help" || cmd === "help") {
      responses = [
        { text: "=== AVAILABLE COMMANDS ===", type: "banner" },
        { text: "  /help         - List all available terminal commands", type: "output" },
        { text: "  /about        - About Saintgits Cybersecurity Club & mission", type: "output" },
        { text: "  /events       - List our flagship CTFs, workshops & sessions", type: "output" },
        { text: "  /team         - View the Command Center core team leads", type: "output" },
        { text: "  /members      - View newly inducted 2026 recruits", type: "output" },
        { text: "  /achievements - View our student awards & competition wins", type: "output" },
        { text: "  /join         - Get the official Discord invite link", type: "output" },
        { text: "  /clear        - Clear the terminal console", type: "output" },
      ];
    } else if (cmd === "/about" || cmd === "about") {
      responses = [
        { text: "--- SAINTGITS CYBERSECURITY CLUB ---", type: "banner" },
        { text: "Premier student-led security community at Saintgits College of Engineering.", type: "output" },
        { text: "100+ active members exploring CTFs, Web Exploitation, Forensics, and Reverse Engineering.", type: "output" },
        { text: "Motto: Learn. Hack. Secure the Future.", type: "success" },
      ];
    } else if (cmd === "/events" || cmd === "events") {
      responses = [
        { text: "--- FLAGSHIP OPERATIONS & EVENTS ---", type: "banner" },
        { text: "• Cybercrime Awareness & Investigation (with Kerala Police Academy)", type: "output" },
        { text: "• Pegasus CTF 2026 - 16-Hour Intensive Hackathon", type: "output" },
        { text: "• Forbidden Capture CTF - Campus-wide Challenge", type: "output" },
        { text: "• Vulnerability Exploitation Hands-on Workshop", type: "output" },
        { text: "Scroll down to Deployments section for in-depth timelines.", type: "hint" },
      ];
      document.getElementById("deployments")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "/team" || cmd === "team") {
      responses = [
        { text: "--- CORE COMMAND CENTER (2026) ---", type: "banner" },
        { text: "• Amal Jebi          - Lead", type: "output" },
        { text: "• Akul J             - Co Lead", type: "output" },
        { text: "• Emil George        - CTF Captain", type: "output" },
        { text: "• Bensen Thomas      - Tool Specialist", type: "output" },
        { text: "• Athul Jose         - Infrastructure and web Administrator", type: "output" },
        { text: "• Rebecca elizabeth  - Event coordinator", type: "output" },
        { text: "• Arha Suresh        - Research and content lead", type: "output" },
        { text: "• Anagha JM          - Documentation coordinator", type: "output" },
      ];
      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "/members" || cmd === "members") {
      responses = [
        { text: "⚡ [NEW MEMBERS INDUCTED] ⚡", type: "banner" },
        { text: "Official 2026 Batch induction roster is live! Redirecting...", type: "success" },
      ];
      document.getElementById("new-members")?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "/achievements" || cmd === "achievements") {
      responses = [
        { text: "--- HALL OF FAME HIGHLIGHTS ---", type: "banner" },
        { text: "🏆 2nd Place — Code Crack CTF at FISAT", type: "success" },
        { text: "🎯 YUKTHI 2025 Finalists — Tamil Nadu Police", type: "success" },
        { text: "⭐ 13th out of 100+ Teams — Overcloaked CTF", type: "output" },
        { text: "📖 Workshop at Carmel College of Engineering", type: "output" },
      ];
    } else if (cmd === "/join" || cmd === "join") {
      responses = [
        { text: "Join our official Discord community:", type: "output" },
        { text: "👉 https://discord.gg/asjFQKE55p", type: "welcome" },
      ];
      window.open("https://discord.gg/asjFQKE55p", "_blank");
    } else if (cmd === "/clear" || cmd === "clear") {
      setLines([{ text: "Terminal cleared. Type '/help' for active commands.", type: "hint" }]);
      setInputVal("");
      return;
    } else {
      responses = [
        {
          text: `bash: ${raw}: command not found. Type '/help' to list options.`,
          type: "error",
        },
      ];
    }

    setLines((prev) => [...prev, commandEntry, ...responses]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(history[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setInputVal("");
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || "");
      }
    }
  };

  return (
    <section className="py-16 md:py-32 relative z-10" id="ops" ref={sectionRef}>
      <div className="bg-orb bg-cyber-purple w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] left-0 top-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 relative">
          {/* ── Left: Text + Highlight cards ── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-cyber-purple mb-6 mx-auto lg:mx-0">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
                More than just <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-red via-cyber-purple to-cyber-blue">
                  a club.
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                We are a community of 100+ passionate students united by a
                shared mission — to provide every member with the exposure,
                skills, and opportunities needed to become a competent
                cybersecurity professional.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                From weekly challenges and CTF competitions to industry
                workshops and networking with high-profile professionals, we
                serve as the launchpad for the next generation of cybersecurity
                experts.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start justify-center sm:justify-start gap-3 p-4 rounded-xl liquid-glass group hover:border-cyber-purple/20 transition-all duration-300 text-center sm:text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple shrink-0 group-hover:scale-110 transition-transform">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {h.label}
                    </h4>
                    <p className="text-xs text-gray-500">{h.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Terminal ── */}
          <div className="w-full lg:w-1/2 relative lg:sticky lg:top-24 max-w-3xl mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-linear-to-tr from-cyber-red to-cyber-blue blur-[80px] opacity-15" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={handleTerminalClick}
              className="terminal-window rounded-2xl overflow-hidden relative z-10 cursor-text shadow-[0_0_50px_rgba(122,0,255,0.15)] border border-white/10"
            >
              {/* Title bar */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f]" />
                </div>
                <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-cyber-purple" /> guest@saintgits-cyber:~
                </div>
                <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> LIVE
                </span>
              </div>

              {/* Terminal body */}
              <div
                ref={terminalBodyRef}
                className="p-4 md:p-6 h-[320px] md:h-[400px] font-mono text-xs md:text-sm overflow-y-auto flex flex-col gap-1.5 bg-[#020205]/90 custom-scrollbar"
              >
                {lines.map((line, idx) => {
                  if (line.type === "break")
                    return <div key={idx} className="h-2" />;

                  const colorClass =
                    line.type === "command"
                      ? "text-green-400"
                      : line.type === "user-command"
                        ? "text-white font-semibold"
                        : line.type === "success"
                          ? "text-green-400"
                          : line.type === "banner"
                            ? "text-cyber-purple font-bold"
                            : line.type === "welcome"
                              ? "text-cyber-blue font-bold text-sm md:text-base"
                              : line.type === "hint"
                                ? "text-amber-300 font-medium"
                                : line.type === "error"
                                  ? "text-cyber-red font-medium"
                                  : "text-gray-300";

                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      key={idx}
                      className={`${colorClass} leading-relaxed break-words`}
                    >
                      {line.type === "command" && (
                        <span className="text-cyber-red mr-1.5 font-bold">❯</span>
                      )}
                      {line.type === "user-command" && (
                        <span className="text-cyan-400 mr-1.5 font-bold">guest@saintgits:~$</span>
                      )}
                      {line.type === "success" && (
                        <span className="text-green-400 mr-1.5 font-bold">✓</span>
                      )}
                      {line.text}
                    </motion.div>
                  );
                })}

                {/* Interactive command input prompt */}
                {bootDone && (
                  <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2 pt-1 border-t border-white/5">
                    <span className="text-cyan-400 font-bold shrink-0 text-xs md:text-sm">guest@saintgits:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="type /help for options..."
                      className="bg-transparent border-none outline-none text-white font-mono text-xs md:text-sm w-full placeholder:text-gray-600 focus:ring-0 focus:outline-none"
                      autoFocus
                    />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-cyber-purple shrink-0"
                    />
                  </form>
                )}

                {!bootDone && lines.length === BOOT_SEQUENCE.length && (
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-cyber-red font-bold">❯</span>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2.5 h-4 bg-cyber-purple"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
