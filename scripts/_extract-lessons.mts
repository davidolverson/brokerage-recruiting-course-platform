import { COURSE_MODULES } from '../src/lib/data/course-content.js';
const lessons = [];
for (const mod of COURSE_MODULES) {
  for (const ch of mod.chapters) {
    for (const lesson of ch.lessons) {
      lessons.push({
        slug: lesson.slug,
        title: lesson.title,
        module: mod.title,
        chapter: ch.title,
        content: lesson.content || '',
      });
    }
  }
}
process.stdout.write(JSON.stringify(lessons));
