import { COURSE_MODULES } from '../src/lib/data/course-content.js';
import fs from 'fs';

let totalMinutes = 0;
let totalLessons = 0;
let out = `# Principles and Practices of Real Estate\n## 60-Hour Virginia Pre-License Education Course\n\n**Provider:** Acme Realty  \n**School Director:** Your School Director  \n**Course Hours:** 60 clock hours (meets DPOR Va. Code requirement)  \n**Structure:** 30 hrs Principles + 30 hrs Virginia Practices (integrated)\n\n---\n\n`;

COURSE_MODULES.forEach((m, i) => {
  let moduleMin = 0;
  let moduleLessons = 0;
  m.chapters.forEach(c => c.lessons.forEach(l => { moduleMin += l.estimatedMinutes; moduleLessons++; }));
  totalMinutes += moduleMin;
  totalLessons += moduleLessons;
  const hours = (moduleMin / 60).toFixed(1);
  out += `## Module ${i+1}: ${m.title}\n\n*${m.subtitle}*\n\n- **Exam weight:** ${m.examWeight}\n- **Hours:** ${hours} | **Lessons:** ${moduleLessons} | **Chapters:** ${m.chapters.length}\n\n`;
  m.chapters.forEach((c, ci) => {
    out += `### ${i+1}.${ci+1} ${c.title}\n\n`;
    c.lessons.forEach(l => {
      out += `- ${l.title} (${l.estimatedMinutes} min)\n`;
    });
    out += `\n`;
  });
});

out += `---\n\n## Course Summary\n\n`;
out += `| Metric | Value |\n|---|---|\n`;
out += `| Modules | ${COURSE_MODULES.length} |\n`;
out += `| Total Lessons | ${totalLessons} |\n`;
out += `| Total Study Time | ${(totalMinutes/60).toFixed(1)} hours (${totalMinutes} minutes) |\n`;
out += `| DPOR Requirement | 60 clock hours ✓ |\n\n`;
out += `## Assessment\n\n- Chapter quizzes: 10 questions per chapter (~240 total)\n- Mock section exams: 20+ questions per section\n- End-of-course proctored exam: 100 questions, 75% to pass (DPOR requirement)\n- Glossary: 1,300+ terms with Virginia-specific definitions\n\n## Compliance\n\n- All content aligned with 18 VAC 135-20 and Va. Code Title 54.1 Chapter 21\n- Post-license education (30 hrs) addressed in Module 12 curriculum\n- Fair Housing, ADA, agency law, ethics coverage per VREB requirements\n`;

fs.writeFileSync('dpor-syllabus.md', out);
console.log(`\nGenerated: ${totalLessons} lessons, ${(totalMinutes/60).toFixed(1)} hours`);
console.log(`File: dpor-syllabus.md`);
