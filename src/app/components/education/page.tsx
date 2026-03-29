"use client";

import { useRef } from "react";
import { educations } from "@/../utils/Data/educations";
import { certifications } from "@/../utils/Data/certifications";
import {
  GraduationCap,
  Calendar,
  School,
  BadgeCheck,
  BookOpen,
} from "lucide-react";
import SectionReveal from "../SectionReveal";
import Tilt from "react-parallax-tilt";

function Education() {
  const codeCardRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id="education"
      className="relative z-50 pt-12 lg:pt-30 bg-[#050505] overflow-hidden scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex justify-center mb-20 lg:mb-32">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600"></span>
            <span className="bg-[#050505] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
              Academic Background
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <div className="flex flex-col gap-8">
            {educations.map((education, index) => (
              <SectionReveal
                key={education.id}
                direction="right"
                delay={index * 0.1}
              >
                <Tilt
                  perspective={1500}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  scale={1.02}
                >
                  <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl overflow-hidden">
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <GraduationCap className="text-red-500 w-7 h-7" />
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                            <Calendar className="w-3 h-3" />
                            {education.duration}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                            {education.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 font-medium">
                          <School className="w-4 h-4 text-red-900" />
                          {education.institution}
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                      <GraduationCap className="w-32 h-32 text-red-500" />
                    </div>
                  </div>
                </Tilt>
              </SectionReveal>
            ))}
          </div>

          {/* Right Side: Code Card */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Tilt
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.02}
              className="w-full max-w-[550px]"
            >
              <div
                ref={codeCardRef}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-xl group"
              >
                <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-red-400/50" />
                    <div className="h-3 w-3 rounded-full bg-red-300/20" />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    Portfolio.ts
                  </div>
                </div>

                <div className="p-6 lg:p-10">
                  <code className="font-mono text-xs leading-relaxed md:text-sm lg:text-base">
                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">01</span>
                      <p>
                        <span className="text-red-500">const</span>{" "}
                        <span className="text-white">developer</span>{" "}
                        <span className="text-slate-300">=</span>{" "}
                        <span className="text-slate-300">{"{"}</span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">02</span>
                      <p className="ml-4">
                        <span className="text-slate-200">name:</span>{" "}
                        <span className="text-red-300">'Thanush Arugonda'</span>
                        <span className="text-slate-300">,</span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">03</span>
                      <p className="ml-4">
                        <span className="text-slate-200">focus:</span>{" "}
                        <span className="text-slate-300">[</span>
                        <span className="text-red-300">
                          'Python', 'Machine Learning', 'Deep Learning'
                        </span>
                        <span className="text-slate-300">]</span>
                        <span className="text-slate-300">,</span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">04</span>
                      <p className="ml-4">
                        <span className="text-slate-200">location:</span>{" "}
                        <span className="text-red-300">'Germany'</span>
                        <span className="text-slate-300">,</span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">05</span>
                      <p className="ml-4">
                        <span className="text-slate-200">passionate:</span>{" "}
                        <span className="text-red-600">true</span>
                        <span className="text-slate-300">,</span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">06</span>
                      <p className="ml-4">
                        <span className="text-slate-200">status:</span>{" "}
                        <span className="text-red-400">
                          "Open to Working Student or Internship Roles"
                        </span>
                      </p>
                    </div>

                    <div className="code-line flex gap-4">
                      <span className="italic text-slate-600">07</span>
                      <p>
                        <span className="text-slate-300">{"};"}</span>
                      </p>
                    </div>

                    <div className="code-line mt-4 flex gap-4">
                      <span className="italic text-slate-600">08</span>
                      <p>
                        <span className="text-red-500">developer</span>
                        <span className="text-slate-300">.</span>
                        <span className="text-white">showcase</span>
                        <span className="text-slate-300">();</span>
                      </p>
                    </div>
                  </code>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
