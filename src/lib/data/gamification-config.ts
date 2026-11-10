// ─── XP System ───────────────────────────────────────────────────────────────

export type XPAction =
  | 'lesson_complete'
  | 'quiz_pass'
  | 'quiz_perfect'
  | 'daily_review'
  | 'streak_bonus'
  | 'flashcard_review'
  | 'challenge_complete'
  | 'first_lesson'
  | 'module_complete'
  | 'mock_exam_pass'

export interface XPActionConfig {
  action: XPAction
  baseXP: number
  label: string
  description: string
}

export const XP_ACTIONS: Record<XPAction, XPActionConfig> = {
  lesson_complete: {
    action: 'lesson_complete',
    baseXP: 50,
    label: 'Lesson Complete',
    description: 'Finish a reading lesson',
  },
  quiz_pass: {
    action: 'quiz_pass',
    baseXP: 100,
    label: 'Quiz Passed',
    description: 'Pass a chapter quiz (70%+)',
  },
  quiz_perfect: {
    action: 'quiz_perfect',
    baseXP: 200,
    label: 'Perfect Score',
    description: 'Score 100% on any quiz',
  },
  daily_review: {
    action: 'daily_review',
    baseXP: 25,
    label: 'Daily Review',
    description: 'Review content on a new calendar day',
  },
  streak_bonus: {
    action: 'streak_bonus',
    baseXP: 10,
    label: 'Streak Bonus',
    description: '10 XP per active streak day (multiplied by streak length)',
  },
  flashcard_review: {
    action: 'flashcard_review',
    baseXP: 5,
    label: 'Flashcard Reviewed',
    description: 'Review a spaced-repetition flashcard',
  },
  challenge_complete: {
    action: 'challenge_complete',
    baseXP: 75,
    label: 'Daily Challenge',
    description: 'Complete a daily challenge',
  },
  first_lesson: {
    action: 'first_lesson',
    baseXP: 100,
    label: 'First Lesson Bonus',
    description: 'Bonus XP for completing your very first lesson',
  },
  module_complete: {
    action: 'module_complete',
    baseXP: 300,
    label: 'Module Complete',
    description: 'Complete all lessons in a module',
  },
  mock_exam_pass: {
    action: 'mock_exam_pass',
    baseXP: 250,
    label: 'Mock Exam Passed',
    description: 'Pass a full mock exam (70%+)',
  },
}

// ─── XP Calculator ────────────────────────────────────────────────────────────

export function calculateXP(
  action: XPAction,
  streakDays: number = 0,
  multiplier: number = 1,
): number {
  const config = XP_ACTIONS[action]
  if (!config) return 0

  let xp = config.baseXP

  // Streak bonus is additive per day, others just get a multiplier
  if (action === 'streak_bonus') {
    xp = config.baseXP * Math.max(streakDays, 1)
  } else {
    // Streak multiplier: 1.0 at 0 days, up to 2.0 at 30+ days
    const streakMultiplier = streakDays >= 30 ? 2.0
      : streakDays >= 14 ? 1.5
      : streakDays >= 7 ? 1.25
      : streakDays >= 3 ? 1.1
      : 1.0
    xp = Math.round(xp * streakMultiplier * multiplier)
  }

  return xp
}

// ─── Level System ─────────────────────────────────────────────────────────────

export interface Level {
  level: number
  title: string
  minXP: number
  maxXP: number | null // null = final level
  icon: string
  color: string
  description: string
}

export const LEVELS: Level[] = [
  {
    level: 1,
    title: 'Prospect',
    minXP: 0,
    maxXP: 99,
    icon: '🏠',
    color: '#9CA3AF',
    description: 'Just browsing the market',
  },
  {
    level: 2,
    title: 'Open House Visitor',
    minXP: 100,
    maxXP: 299,
    icon: '🚪',
    color: '#9CA3AF',
    description: 'Getting a feel for the industry',
  },
  {
    level: 3,
    title: 'Pre-Qualified Buyer',
    minXP: 300,
    maxXP: 499,
    icon: '📋',
    color: '#6B7280',
    description: 'You have the basics down',
  },
  {
    level: 4,
    title: 'Active Buyer',
    minXP: 500,
    maxXP: 799,
    icon: '🔍',
    color: '#6B7280',
    description: 'Searching for knowledge daily',
  },
  {
    level: 5,
    title: 'Earnest Money Depositor',
    minXP: 800,
    maxXP: 1199,
    icon: '💰',
    color: '#F59E0B',
    description: 'Committed to the process',
  },
  {
    level: 6,
    title: 'Home Inspector Ready',
    minXP: 1200,
    maxXP: 1599,
    icon: '🔧',
    color: '#F59E0B',
    description: 'Digging into the details',
  },
  {
    level: 7,
    title: 'Offer Accepted',
    minXP: 1600,
    maxXP: 1999,
    icon: '🤝',
    color: '#F59E0B',
    description: 'Making serious moves',
  },
  {
    level: 8,
    title: 'Under Contract',
    minXP: 2000,
    maxXP: 2799,
    icon: '📝',
    color: '#EA580C',
    description: 'The deal is in motion',
  },
  {
    level: 9,
    title: 'Title Search Pro',
    minXP: 2800,
    maxXP: 3999,
    icon: '🔎',
    color: '#EA580C',
    description: 'You know where the value lives',
  },
  {
    level: 10,
    title: 'Closing Day',
    minXP: 4000,
    maxXP: 4999,
    icon: '🔑',
    color: '#EA580C',
    description: 'Crossing the finish line',
  },
  {
    level: 11,
    title: 'Keys in Hand',
    minXP: 5000,
    maxXP: 5999,
    icon: '🏡',
    color: '#EA580C',
    description: 'Ownership mindset unlocked',
  },
  {
    level: 12,
    title: 'Licensed Agent',
    minXP: 6000,
    maxXP: 7999,
    icon: '🏅',
    color: '#1E40AF',
    description: 'Officially in the game',
  },
  {
    level: 13,
    title: 'Buyer\'s Agent',
    minXP: 8000,
    maxXP: 9999,
    icon: '🤵',
    color: '#1E40AF',
    description: 'Representing clients with confidence',
  },
  {
    level: 14,
    title: 'Listing Agent',
    minXP: 10000,
    maxXP: 11999,
    icon: '📸',
    color: '#1D4ED8',
    description: 'Getting properties sold',
  },
  {
    level: 15,
    title: 'Top Producer',
    minXP: 12000,
    maxXP: 15999,
    icon: '🏆',
    color: '#7C3AED',
    description: 'Consistently exceeding expectations',
  },
  {
    level: 16,
    title: 'Team Leader',
    minXP: 16000,
    maxXP: 19999,
    icon: '👑',
    color: '#7C3AED',
    description: 'Building something bigger than yourself',
  },
  {
    level: 17,
    title: 'Market Authority',
    minXP: 20000,
    maxXP: 23999,
    icon: '📊',
    color: '#DC2626',
    description: 'The name people trust in the market',
  },
  {
    level: 18,
    title: 'Broker Material',
    minXP: 24000,
    maxXP: 27999,
    icon: '🏢',
    color: '#DC2626',
    description: 'Ready to lead the industry',
  },
  {
    level: 19,
    title: 'Real Estate Tycoon',
    minXP: 28000,
    maxXP: 34999,
    icon: '🌆',
    color: '#B45309',
    description: 'Decades of deals in your pocket',
  },
  {
    level: 20,
    title: 'Real Estate Mogul',
    minXP: 35000,
    maxXP: null,
    icon: '👔',
    color: '#EA580C',
    description: 'The pinnacle. You own it all.',
  },
]

export function getLevelForXP(xp: number): Level {
  let current = LEVELS[0]
  for (const level of LEVELS) {
    if (xp >= level.minXP) {
      current = level
    } else {
      break
    }
  }
  return current
}

export function getNextLevel(currentLevel: Level): Level | null {
  const idx = LEVELS.findIndex((l) => l.level === currentLevel.level)
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null
}

export function getXPProgress(xp: number): {
  currentLevel: Level
  nextLevel: Level | null
  xpIntoLevel: number
  xpNeededForNext: number
  progressPercent: number
} {
  const currentLevel = getLevelForXP(xp)
  const nextLevel = getNextLevel(currentLevel)

  if (!nextLevel) {
    return {
      currentLevel,
      nextLevel: null,
      xpIntoLevel: xp - currentLevel.minXP,
      xpNeededForNext: 0,
      progressPercent: 100,
    }
  }

  const xpIntoLevel = xp - currentLevel.minXP
  const xpNeededForNext = nextLevel.minXP - currentLevel.minXP
  const progressPercent = Math.min(
    100,
    Math.round((xpIntoLevel / xpNeededForNext) * 100),
  )

  return {
    currentLevel,
    nextLevel,
    xpIntoLevel,
    xpNeededForNext,
    progressPercent,
  }
}

// ─── Badges ───────────────────────────────────────────────────────────────────

export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum'

export interface BadgeConfig {
  slug: string
  name: string
  icon: string
  description: string
  criteriaType: string
  criteriaValue: Record<string, unknown>
  tier: BadgeTier
  xpReward: number
  category: 'progress' | 'quiz' | 'streak' | 'activity' | 'special'
}

export const BADGE_CONFIGS: BadgeConfig[] = [
  // ─── Progress Badges ─────────────────────────────────────────────────────
  {
    slug: 'first_showing',
    name: 'First Showing',
    icon: '🏠',
    description: 'Complete your very first lesson',
    criteriaType: 'lesson_count',
    criteriaValue: { count: 1 },
    tier: 'bronze',
    xpReward: 50,
    category: 'progress',
  },
  {
    slug: 'open_escrow',
    name: 'Open Escrow',
    icon: '📂',
    description: 'Complete 10 lessons',
    criteriaType: 'lesson_count',
    criteriaValue: { count: 10 },
    tier: 'bronze',
    xpReward: 100,
    category: 'progress',
  },
  {
    slug: 'earnest_student',
    name: 'Earnest Student',
    icon: '📚',
    description: 'Complete 25 lessons',
    criteriaType: 'lesson_count',
    criteriaValue: { count: 25 },
    tier: 'silver',
    xpReward: 150,
    category: 'progress',
  },
  {
    slug: 'module_master',
    name: 'Module Master',
    icon: '🎓',
    description: 'Complete an entire course module',
    criteriaType: 'module_complete',
    criteriaValue: {},
    tier: 'silver',
    xpReward: 200,
    category: 'progress',
  },
  {
    slug: 'virginia_expert',
    name: 'Virginia Expert',
    icon: '🏛️',
    description: 'Complete all Virginia-specific modules',
    criteriaType: 'module_slug',
    criteriaValue: { slugs: ['virginia-real-estate-law', 'virginia-specific-regulations'] },
    tier: 'gold',
    xpReward: 300,
    category: 'progress',
  },
  {
    slug: 'course_complete',
    name: 'License Ready',
    icon: '🎉',
    description: 'Complete the entire course',
    criteriaType: 'course_complete',
    criteriaValue: {},
    tier: 'platinum',
    xpReward: 1000,
    category: 'progress',
  },
  {
    slug: 'half_way_home',
    name: 'Half Way Home',
    icon: '🛣️',
    description: 'Reach 50% course completion',
    criteriaType: 'progress_percent',
    criteriaValue: { percent: 50 },
    tier: 'silver',
    xpReward: 150,
    category: 'progress',
  },

  // ─── Quiz Badges ─────────────────────────────────────────────────────────
  {
    slug: 'contract_conqueror',
    name: 'Contract Conqueror',
    icon: '📝',
    description: 'Pass the Contracts & Agency quiz',
    criteriaType: 'quiz_module_pass',
    criteriaValue: { moduleSlug: 'contracts-agency' },
    tier: 'silver',
    xpReward: 150,
    category: 'quiz',
  },
  {
    slug: 'fair_housing_champion',
    name: 'Fair Housing Champion',
    icon: '⚖️',
    description: 'Pass the Fair Housing quiz with 90%+',
    criteriaType: 'quiz_score',
    criteriaValue: { quizType: 'fair_housing', minScore: 90 },
    tier: 'gold',
    xpReward: 200,
    category: 'quiz',
  },
  {
    slug: 'math_wizard',
    name: 'Math Wizard',
    icon: '🔢',
    description: 'Pass the Real Estate Math section with 80%+',
    criteriaType: 'quiz_score',
    criteriaValue: { quizType: 'finance_valuation', minScore: 80 },
    tier: 'silver',
    xpReward: 175,
    category: 'quiz',
  },
  {
    slug: 'perfect_score',
    name: 'Perfect Score',
    icon: '💯',
    description: 'Score 100% on any quiz',
    criteriaType: 'quiz_perfect',
    criteriaValue: {},
    tier: 'gold',
    xpReward: 250,
    category: 'quiz',
  },
  {
    slug: 'mock_exam_ready',
    name: 'Mock Exam Ready',
    icon: '📊',
    description: 'Pass a full mock exam with 80%+',
    criteriaType: 'mock_exam_score',
    criteriaValue: { minScore: 80 },
    tier: 'gold',
    xpReward: 300,
    category: 'quiz',
  },
  {
    slug: 'quiz_ace',
    name: 'Quiz Ace',
    icon: '♠️',
    description: 'Score 90%+ on any quiz',
    criteriaType: 'quiz_score_any',
    criteriaValue: { minScore: 90 },
    tier: 'silver',
    xpReward: 125,
    category: 'quiz',
  },
  {
    slug: 'century_club',
    name: 'Century Club',
    icon: '💫',
    description: 'Answer 100 practice questions',
    criteriaType: 'questions_answered',
    criteriaValue: { count: 100 },
    tier: 'silver',
    xpReward: 150,
    category: 'quiz',
  },
  {
    slug: 'speed_demon',
    name: 'Speed Demon',
    icon: '⚡',
    description: 'Complete a 10+ question quiz in under 5 minutes',
    criteriaType: 'quiz_speed',
    criteriaValue: { maxSeconds: 300, minQuestions: 10 },
    tier: 'silver',
    xpReward: 125,
    category: 'quiz',
  },
  {
    slug: 'ethics_enforcer',
    name: 'Ethics Enforcer',
    icon: '🛡️',
    description: 'Complete the Practice & Ethics module with 80%+ average',
    criteriaType: 'module_score',
    criteriaValue: { moduleSlug: 'practice-ethics', minScore: 80 },
    tier: 'gold',
    xpReward: 200,
    category: 'quiz',
  },

  // ─── Streak Badges ────────────────────────────────────────────────────────
  {
    slug: 'streak_3',
    name: '3-Day Hustle',
    icon: '🔥',
    description: 'Study 3 days in a row',
    criteriaType: 'streak_days',
    criteriaValue: { days: 3 },
    tier: 'bronze',
    xpReward: 75,
    category: 'streak',
  },
  {
    slug: 'streak_7',
    name: '7-Day Streak',
    icon: '🔥🔥',
    description: 'Study 7 days in a row',
    criteriaType: 'streak_days',
    criteriaValue: { days: 7 },
    tier: 'silver',
    xpReward: 150,
    category: 'streak',
  },
  {
    slug: 'streak_30',
    name: '30-Day Streak',
    icon: '🔥🔥🔥',
    description: 'Study 30 days in a row',
    criteriaType: 'streak_days',
    criteriaValue: { days: 30 },
    tier: 'gold',
    xpReward: 500,
    category: 'streak',
  },
  {
    slug: 'streak_60',
    name: '60-Day Streak',
    icon: '⚗️',
    description: 'Study 60 days in a row',
    criteriaType: 'streak_days',
    criteriaValue: { days: 60 },
    tier: 'platinum',
    xpReward: 1000,
    category: 'streak',
  },

  // ─── Activity / Timing Badges ─────────────────────────────────────────────
  {
    slug: 'night_owl',
    name: 'Night Owl',
    icon: '🦉',
    description: 'Complete a lesson after 10:00 PM',
    criteriaType: 'time_of_day',
    criteriaValue: { afterHour: 22 },
    tier: 'bronze',
    xpReward: 50,
    category: 'activity',
  },
  {
    slug: 'early_bird',
    name: 'Early Bird',
    icon: '🌅',
    description: 'Complete a lesson before 7:00 AM',
    criteriaType: 'time_of_day',
    criteriaValue: { beforeHour: 7 },
    tier: 'bronze',
    xpReward: 50,
    category: 'activity',
  },
  {
    slug: 'weekend_warrior',
    name: 'Weekend Warrior',
    icon: '🏋️',
    description: 'Study on a Saturday or Sunday',
    criteriaType: 'day_of_week',
    criteriaValue: { days: [0, 6] },
    tier: 'bronze',
    xpReward: 50,
    category: 'activity',
  },
  {
    slug: 'term_master',
    name: 'Term Master',
    icon: '📖',
    description: 'Review 100 flashcards in spaced repetition',
    criteriaType: 'flashcard_count',
    criteriaValue: { count: 100 },
    tier: 'silver',
    xpReward: 150,
    category: 'activity',
  },
  {
    slug: 'lunch_break_learner',
    name: 'Lunch Break Learner',
    icon: '🥪',
    description: 'Complete a lesson between 11 AM and 1 PM',
    criteriaType: 'time_of_day',
    criteriaValue: { afterHour: 11, beforeHour: 13 },
    tier: 'bronze',
    xpReward: 50,
    category: 'activity',
  },
  {
    slug: 'two_week_grind',
    name: 'Two-Week Grind',
    icon: '📅',
    description: 'Study at least once every day for 14 days',
    criteriaType: 'streak_days',
    criteriaValue: { days: 14 },
    tier: 'silver',
    xpReward: 250,
    category: 'activity',
  },

  // ─── Special Badges ───────────────────────────────────────────────────────
  {
    slug: 'property_ladder',
    name: 'Property Ladder',
    icon: '📈',
    description: 'Reach Level 10 (Closing Day)',
    criteriaType: 'level',
    criteriaValue: { level: 10 },
    tier: 'gold',
    xpReward: 0, // XP already earned to get here
    category: 'special',
  },
  {
    slug: 'full_house',
    name: 'Full House',
    icon: '🃏',
    description: 'Earn 20 or more badges',
    criteriaType: 'badge_count',
    criteriaValue: { count: 20 },
    tier: 'platinum',
    xpReward: 500,
    category: 'special',
  },
]

export function getBadgeBySlug(slug: string): BadgeConfig | undefined {
  return BADGE_CONFIGS.find((b) => b.slug === slug)
}

export const BADGE_TIER_COLORS: Record<BadgeTier, string> = {
  bronze: '#CD7F32',
  silver: '#C0C0C0',
  gold: '#EA580C',
  platinum: '#1E40AF',
}

export const BADGE_TIER_BG: Record<BadgeTier, string> = {
  bronze: 'bg-amber-900/20 border-amber-700/30',
  silver: 'bg-gray-700/20 border-gray-500/30',
  gold: 'bg-[#EA580C]/10 border-[#EA580C]/30',
  platinum: 'bg-[#1E40AF]/10 border-[#1E40AF]/30',
}

// ─── Daily Challenges ─────────────────────────────────────────────────────────

export interface DailyChallenge {
  id: string
  title: string
  description: string
  type: 'questions' | 'flashcards' | 'lessons' | 'quiz'
  targetCount: number
  xpReward: number
  icon: string
}

export const DAILY_CHALLENGE_POOL: DailyChallenge[] = [
  {
    id: 'answer_10',
    title: 'Knowledge Sprint',
    description: 'Answer 10 practice questions today',
    type: 'questions',
    targetCount: 10,
    xpReward: 75,
    icon: '🎯',
  },
  {
    id: 'answer_20',
    title: 'Quiz Blitz',
    description: 'Answer 20 practice questions today',
    type: 'questions',
    targetCount: 20,
    xpReward: 125,
    icon: '⚡',
  },
  {
    id: 'flashcards_15',
    title: 'Term Drill',
    description: 'Review 15 flashcards today',
    type: 'flashcards',
    targetCount: 15,
    xpReward: 75,
    icon: '🃏',
  },
  {
    id: 'flashcards_30',
    title: 'Memory Master',
    description: 'Review 30 flashcards today',
    type: 'flashcards',
    targetCount: 30,
    xpReward: 125,
    icon: '🧠',
  },
  {
    id: 'complete_1_lesson',
    title: 'One Step Forward',
    description: 'Complete at least 1 lesson today',
    type: 'lessons',
    targetCount: 1,
    xpReward: 50,
    icon: '👣',
  },
  {
    id: 'complete_3_lessons',
    title: 'Triple Threat',
    description: 'Complete 3 lessons today',
    type: 'lessons',
    targetCount: 3,
    xpReward: 150,
    icon: '🏃',
  },
  {
    id: 'pass_quiz',
    title: 'Pass the Bar',
    description: 'Pass any chapter quiz today',
    type: 'quiz',
    targetCount: 1,
    xpReward: 100,
    icon: '🏅',
  },
  {
    id: 'answer_50',
    title: 'Century Starter',
    description: 'Answer 50 practice questions today',
    type: 'questions',
    targetCount: 50,
    xpReward: 200,
    icon: '💪',
  },
  {
    id: 'flashcards_50',
    title: 'Flashcard Fiend',
    description: 'Review 50 flashcards today',
    type: 'flashcards',
    targetCount: 50,
    xpReward: 200,
    icon: '🔥',
  },
  {
    id: 'complete_2_lessons',
    title: 'Double Down',
    description: 'Complete 2 lessons today',
    type: 'lessons',
    targetCount: 2,
    xpReward: 100,
    icon: '✌️',
  },
]

/**
 * Deterministically select today's challenge based on current date.
 * Same day = same challenge for every user.
 */
export function getTodaysChallenge(): DailyChallenge {
  const today = new Date()
  const dayIndex =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate()
  return DAILY_CHALLENGE_POOL[dayIndex % DAILY_CHALLENGE_POOL.length]
}

// ─── Milestone Celebrations ───────────────────────────────────────────────────

export interface Milestone {
  trigger: 'level_up' | 'badge_earned' | 'streak' | 'percent'
  value: number | string
  title: string
  message: string
  emoji: string
  confetti: boolean
}

export const MILESTONES: Milestone[] = [
  {
    trigger: 'level_up',
    value: 5,
    title: 'Committed!',
    message: "You just hit Level 5 — Earnest Money Depositor. You're all in now.",
    emoji: '💰',
    confetti: true,
  },
  {
    trigger: 'level_up',
    value: 10,
    title: 'Closing Day!',
    message: 'Level 10 reached. This is what closing day feels like. Own it.',
    emoji: '🔑',
    confetti: true,
  },
  {
    trigger: 'level_up',
    value: 12,
    title: 'Licensed Agent!',
    message: "Level 12 — Licensed Agent. The license is within reach. Keep pushing.",
    emoji: '🏅',
    confetti: true,
  },
  {
    trigger: 'level_up',
    value: 15,
    title: 'Top Producer!',
    message: "You're a Top Producer now. Level 15 is reserved for the committed.",
    emoji: '🏆',
    confetti: true,
  },
  {
    trigger: 'level_up',
    value: 20,
    title: 'Real Estate Mogul!',
    message: "Max level. You've mastered everything this course has to offer.",
    emoji: '👔',
    confetti: true,
  },
  {
    trigger: 'streak',
    value: 7,
    title: 'One Week Strong!',
    message: '7-day streak! Consistency is the #1 predictor of passing the exam.',
    emoji: '🔥',
    confetti: false,
  },
  {
    trigger: 'streak',
    value: 30,
    title: '30 Days of Dedication!',
    message: "A full month of studying every day. That's elite commitment.",
    emoji: '🔥🔥🔥',
    confetti: true,
  },
  {
    trigger: 'percent',
    value: 50,
    title: 'Halfway There!',
    message: "50% complete. You're past the halfway mark — momentum is yours.",
    emoji: '🛣️',
    confetti: false,
  },
  {
    trigger: 'percent',
    value: 100,
    title: 'Course Complete!',
    message: "You finished the entire course. Time to book that exam.",
    emoji: '🎉',
    confetti: true,
  },
]

export function getMilestone(
  trigger: Milestone['trigger'],
  value: number | string,
): Milestone | null {
  return (
    MILESTONES.find((m) => m.trigger === trigger && m.value === value) ?? null
  )
}
