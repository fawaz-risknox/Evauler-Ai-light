'use client';

import Image from 'next/image';
import { Award, Briefcase, Code, ShieldCheck } from 'lucide-react';

const TEAM = [
  {
    name: 'CA Anna Jain Jose',
    role: 'Founder & CEO',
    credential: 'Chartered Accountant',
    bio: '14 years in corporate finance, audits, and startup valuations. Developed the stage-weighted valuation models.',
    image: '/assets/members/Anna.jpeg',
    icon: Award,
  },
  {
    name: 'CS Manu Francis',
    role: 'Co-Founder & COO',
    credential: 'Company Secretary',
    bio: 'Specialist in corporate compliance, cap table governance, and regulatory filings under Indian and US jurisdictions.',
    image: '/assets/members/Manu.jpeg',
    icon: ShieldCheck,
  },
  {
    name: 'Vivek Chandran',
    role: 'Co-Founder & CTO',
    credential: 'Lead Systems Architect',
    bio: 'Engineer focused on automated valuation algorithms, diligence ingestion pipelines, and venture cohort analytics.',
    image: '/assets/members/Vivek.jpeg',
    icon: Code,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 ambient-wash-e">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The team
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A chartered accountant, a company secretary, and an engineer. They built the scoring model.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TEAM.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative h-60 sm:h-68 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-900 shadow-xs flex items-center gap-1.5">
                    <Icon size={12} className="text-blue-600" />
                    <span>{member.credential}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 mb-1.5">
                      {member.role}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

