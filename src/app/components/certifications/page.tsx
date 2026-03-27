"use client";

import { certifications } from "@/../utils/Data/certifications";
import SectionReveal from "../SectionReveal";
import Tilt from "react-parallax-tilt";
import { BadgeCheck, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      {/* Section Title */}

      <div className="flex justify-center mb-16 lg:mb-20">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600"></span>
          <span className="bg-[#050505] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Certifications & Technical Training
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certifications.map((certification, index) => (
          <SectionReveal
            key={certification.id}
            direction={index % 2 === 0 ? "right" : "left"}
            delay={index * 0.1}
          >
            <Tilt
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.02}
            >
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl overflow-hidden h-full">
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <BadgeCheck className="text-red-500 w-7 h-7" />
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                        <Calendar className="w-3 h-3" />
                        {certification.duration}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {certification.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <BookOpen className="w-4 h-4 text-red-900" />
                      {certification.institution}
                    </div>

                    <p className="text-slate-400 leading-relaxed">
                      {certification.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-red-500/20 bg-red-500/10 text-red-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {certification.link && (
                      <Link
                        href={certification.link}
                        target="_blank"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-500 transition-colors"
                      >
                        View Credentials
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <BadgeCheck className="w-32 h-32 text-red-500" />
                </div>
              </div>
            </Tilt>
          </SectionReveal>
        ))}
      </div>
      <div className="container mx-auto px-4">
        {/* paste your cards here */}
      </div>
    </section>
  );
}

export default Certifications;
