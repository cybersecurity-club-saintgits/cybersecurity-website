import { motion } from "framer-motion";
import { UserPlus, ExternalLink, Sparkles } from "lucide-react";

/**
 * 
 * NEW MEMBERS BATCH 2026
 * Edit this array to add/remove members.
 * Fields: name (string), year (1 | 2 | 3)

 */
export const newMembersList = [
  { id: 1,  name: "Rehan Reji",                year: 3 },
  { id: 2,  name: "Afra Sakeer",               year: 3 },
  { id: 3,  name: "Neha Nizam",                year: 3 },
  { id: 4,  name: "Allen Sebastian Siby",      year: 3 },
  { id: 5,  name: "Afrin Fathima Shine",       year: 3 },
  { id: 6,  name: "Fiona Joby",                year: 3 },
  { id: 7,  name: "Edwin Thomas",              year: 3 },
  { id: 8,  name: "Meera Shyam Nair",          year: 3 },
  { id: 9,  name: "Tarun Sanal",               year: 3 },
  { id: 10, name: "Sidharth M",                year: 3 },
  { id: 11, name: "Ivin V. Rajesh",            year: 3 },
  { id: 12, name: "Surya Kiran",               year: 3 },
  { id: 13, name: "Midhuna Manoj",             year: 3 },
  { id: 14, name: "Enosh M Joshy",             year: 3 },
  { id: 15, name: "Ashwin Girish",             year: 2 },
  { id: 16, name: "Akshaya Keerthi A",         year: 2 },
  { id: 17, name: "Delna Therese",             year: 2 },
  { id: 18, name: "Shokul C Biju",             year: 2 },
  { id: 19, name: "Thrisha T S",               year: 2 },
  { id: 20, name: "Bharath Jayasankar",        year: 2 },
  { id: 21, name: "K Vysakhan",                year: 1 },
  { id: 22, name: "Sooraj R Nair",             year: 1 },
  { id: 23, name: "Joel Bijo David",           year: 1 },
  { id: 24, name: "Shawn Zachariah",           year: 1 },
  { id: 25, name: "Alen Saju Thomas",          year: 1 },
  { id: 26, name: "Kurian George Abraham",     year: 1 },
  { id: 27, name: "Eric Joshy Meakkaringattu", year: 1 },
  { id: 28, name: "Navaneeth P Nair",          year: 1 },
  { id: 29, name: "Diya Liz Benny",            year: 1 },
];

/*  Helpers  */
const yearLabel = { 3: "3rd Year", 2: "2nd Year", 1: "1st Year" };

const yearBadgeCls = {
  3: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  2: "bg-cyber-purple/10 text-purple-400 border-cyber-purple/30",
  1: "bg-cyber-red/10 text-red-400 border-cyber-red/30",
};

const yearDotCls = {
  3: "bg-cyan-400",
  2: "bg-cyber-purple",
  1: "bg-cyber-red",
};

function sortedByYear(yr) {
  return newMembersList
    .filter((m) => m.year === yr)
    .sort((a, b) => a.name.localeCompare(b.name));
}

const tickerBase = [...newMembersList].sort((a, b) =>
  a.name.localeCompare(b.name)
);
const tickerItems = [...tickerBase, ...tickerBase]; // duplicate for seamless loop

export function MemberTicker() {
  return (
    <div className="w-full overflow-hidden border-y border-white/[0.07] bg-black/60 backdrop-blur-md relative">
      {/* Left + right fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/95 to-transparent z-10 pointer-events-none" />

      {/* Pinned label */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center">
        <div className="flex items-center gap-2.5 px-5 h-full bg-gradient-to-r from-cyber-purple via-cyber-purple/90 to-transparent pr-12">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping shrink-0" />
          <span
            className="text-[9px] font-bold tracking-[0.24em] uppercase text-white whitespace-nowrap"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            NEW INDUCTEES
          </span>
        </div>
      </div>

      {/* Scrolling track */}
      <div className="ticker-track py-3 pl-56">
        {tickerItems.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mr-10 shrink-0">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${yearDotCls[item.year]}`} />
            <span
              className="text-[13px] font-medium text-white/85 whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.name}
            </span>
            <span
              className={`text-[9px] font-bold tracking-[0.15em] uppercase px-1.5 py-0.5 rounded border ${yearBadgeCls[item.year]}`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Y{item.year}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/*  MEMBERS SECTION ” single unified table, year-grouped */
export default function NewMembers() {
  // Build ordered rows: 3rd †’ 2nd †’ 1st, each alphabetically sorted
  const groups = [3, 2, 1].map((yr) => ({
    year: yr,
    members: sortedByYear(yr),
  }));

  // Flat row list with running global serial number
  let serial = 0;
  const rows = groups.flatMap(({ year, members }) =>
    members.map((m) => ({ ...m, year, serial: ++serial }))
  );

  return (
    <section className="relative z-10 py-16 md:py-28" id="new-members">
      {/* Background orbs */}
      <div className="bg-orb bg-cyber-blue  w-[20rem] h-[20rem] right-1/4 top-1/3 opacity-10" />
      <div className="bg-orb bg-cyber-purple w-[18rem] h-[18rem] left-10 bottom-20 opacity-10" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">

        {/* ”€”€ Section header ”€”€ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-cyan-400 mb-6 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
            <UserPlus className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Official Induction ¢ Batch 2026
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Welcome{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyber-purple to-cyber-red">
              New Members
            </span>
          </h2>

          <p
            className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our newest recruits inducted into the Saintgits Cybersecurity Club ”
            ready to train, compete in CTFs, and defend digital infrastructure.
          </p>

          <div
            className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
            <span>{newMembersList.length} Inducted Recruits</span>
          </div>
        </motion.div>

        {/* ”€”€ Unified table ”€”€ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_60px_-15px_rgba(122,0,255,0.2)]"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-white/[0.04] border-b border-white/[0.08]">
                <th
                  className="py-3 px-5 text-left text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold w-14"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Sl&nbsp;No
                </th>
                <th
                  className="py-3 px-5 text-left text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Name
                </th>
                <th
                  className="py-3 px-5 text-right text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold w-32"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {groups.map(({ year, members }) => (
                <>
                  {/* Year group separator row */}
                  <tr
                    key={`sep-${year}`}
                    className="bg-white/[0.02] border-y border-white/[0.05]"
                  >
                    <td colSpan={3} className="py-2 px-5">
                      <span
                        className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full border ${yearBadgeCls[year]}`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${yearDotCls[year]}`} />
                        {yearLabel[year]}  {members.length} members
                      </span>
                    </td>
                  </tr>

                  {/* Member rows */}
                  {members.map((member, idx) => {
                    // compute global serial across all groups
                    const globalSerial =
                      (year === 3 ? 0 : year === 2 ? sortedByYear(3).length : sortedByYear(3).length + sortedByYear(2).length) + idx + 1;
                    return (
                      <tr
                        key={member.id}
                        className="border-b border-white/[0.04] last:border-b-0 hover:bg-white/[0.03] transition-colors duration-200 group"
                      >
                        {/* Sl No */}
                        <td
                          className="py-3.5 px-5 text-sm text-gray-600 group-hover:text-gray-400 tabular-nums transition-colors"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {String(globalSerial).padStart(2, "0")}
                        </td>

                        {/* Name */}
                        <td className="py-3.5 px-5">
                          <span
                            className="text-[15px] font-medium text-white/80 group-hover:text-white transition-colors"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {member.name}
                          </span>
                        </td>

                        {/* Year badge */}
                        <td className="py-3.5 px-5 text-right">
                          <span
                            className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded border ${yearBadgeCls[year]}`}
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {yearLabel[year]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ”€”€ Discord onboarding card ”€”€ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl p-6 liquid-glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-cyber-purple/20 border border-cyber-purple/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cyber-purple" />
            </div>
            <div>
              <h4
                className="text-sm font-bold text-white mb-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Newly Joined?
              </h4>
              <p
                className="text-xs text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Join our Discord, verify in #verify, and get onboarded to CTF teams.
              </p>
            </div>
          </div>
          <a
            href="https://discord.gg/asjFQKE55p"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue hover:scale-105 text-xs font-bold text-white transition-transform shadow-[0_0_20px_rgba(122,0,255,0.35)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join Discord
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
