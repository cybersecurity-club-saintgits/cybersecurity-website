import { motion } from "framer-motion";
import {
    Trophy,
    BookOpen,
    Target,
    MessageSquare,
    Users,
    Star,
    Award,
} from "lucide-react";

const achievements = [
    {
        icon: <Trophy className="w-5 h-5" />,
        title: "2nd Place — Code Crack CTF at FISAT",
        description:
            "Ashil George James, Angela Mary Thomas, and Ashlin Rose Manoj secured second prize at the Code Crack CTF competition conducted at FISAT.",
        tags: ["CTF", "Competition"],
        color: "from-yellow-400 to-amber-500",
        iconBg: "bg-yellow-500/10 text-yellow-400",
        highlight: true,
    },
    {
        icon: <Target className="w-5 h-5" />,
        title: "YUKTHI 2025 Finalists — Tamil Nadu Police",
        description:
            "Alphin D Thomas, Ashil George James, Angela Mary Thomas, and Daison K Daniel qualified for the finals of YUKTHI 2025, a national-level event conducted by the Tamil Nadu Police.",
        tags: ["National", "Finals"],
        color: "from-cyber-red to-red-600",
        iconBg: "bg-red-500/10 text-red-400",
        highlight: true,
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "13th out of 100+ Teams — Overcloaked CTF",
        description:
            "Amal Jebi, Mahel, and Bensen secured 13th place among 100+ participating teams at the Overcloaked CTF held at Rajagiri.",
        tags: ["CTF", "Top 15"],
        color: "from-cyber-purple to-purple-600",
        iconBg: "bg-purple-500/10 text-purple-400",
        highlight: false,
    },
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Workshop at Carmel College of Engineering",
        description:
            "Alphin D Thomas and Diya Susan Mathew conducted a one-day cybersecurity workshop at Carmel College of Engineering, Punnapra — extending expertise beyond campus.",
        tags: ["Workshop", "Outreach"],
        color: "from-cyber-blue to-blue-600",
        iconBg: "bg-blue-500/10 text-blue-400",
        highlight: false,
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Fresher Orientation Session",
        description:
            "Alphin D Thomas led an orientation session for incoming first-year students in July 2025, introducing them to the world of cybersecurity and the club's initiatives.",
        tags: ["Orientation", "Mentorship"],
        color: "from-emerald-500 to-green-600",
        iconBg: "bg-emerald-500/10 text-emerald-400",
        highlight: false,
    },
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Discord Community & Weekly Challenges",
        description:
            "Launched an active Discord community with weekly cybersecurity challenges, building a culture of continuous learning and healthy competition among members.",
        tags: ["Community", "Challenges"],
        color: "from-indigo-500 to-violet-600",
        iconBg: "bg-indigo-500/10 text-indigo-400",
        highlight: false,
    },
];

export default function Achievements() {
    return (
        <section className="py-16 md:py-28 relative z-10 overflow-hidden" id="achievements">
            <div className="bg-orb bg-cyber-red w-[30rem] h-[30rem] -right-20 top-0" />

            <div className="container mx-auto px-6 max-w-7xl 2xl:max-w-[1600px] relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-yellow-400 mb-6">
                        <Star className="w-3.5 h-3.5" />
                        <span className="text-[10px] sm:text-xs xl:text-sm font-bold tracking-[0.2em] uppercase">
                            Proven Excellence
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4">
                        Student{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-500">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm xl:text-base">
                        Our members don&apos;t just learn — they compete, win, teach, and
                        make an impact beyond the campus.
                    </p>
                </motion.div>

                {/* Achievement grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-5xl lg:max-w-none mx-auto">
                    {achievements.map((a, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={`relative rounded-2xl p-4 md:p-6 group transition-all duration-500 overflow-hidden ${a.highlight
                                    ? "md:col-span-1 liquid-glass hover:border-yellow-500/20"
                                    : "liquid-glass hover:border-white/15"
                                }`}
                        >
                            {/* Gradient top border */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${a.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                            />

                            {/* Highlight shimmer for top achievements */}
                            {a.highlight && (
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            )}

                            <div className="relative z-10 flex gap-4 xl:gap-6">
                                {/* Icon */}
                                <div
                                    className={`w-11 h-11 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/5 transition-all duration-300 group-hover:scale-110 ${a.iconBg}`}
                                >
                                    {a.icon}
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-base xl:text-lg font-bold text-white mb-2 leading-snug">
                                        {a.title}
                                    </h3>
                                    <p className="text-sm xl:text-base text-gray-400 leading-relaxed mb-3 xl:mb-4">
                                        {a.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {a.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="px-2.5 py-0.5 xl:py-1 rounded-md text-[10px] xl:text-xs font-bold tracking-wider uppercase bg-white/[0.04] text-gray-500 border border-white/[0.06] group-hover:border-white/10 group-hover:text-gray-400 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
