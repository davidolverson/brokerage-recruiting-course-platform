// ── PLE Course Index ─────────────────────────────────────────────────────────
// Central index for Virginia DPOR Post-License Education (PLE) course content
// 30 credit hours | 9 modules | Online self-directed delivery
// Education Provider: Acme Realty Real Estate Academy (provider number: set providerNumber below)

import type { CourseModule } from './course-content'

import { PLE_MODULES_123 } from './ple-content-mod123'
import { PLE_MODULE_4 } from './ple-content-mod4'
import { PLE_MODULES_567 } from './ple-content-mod567'
import { PLE_MODULES_89 } from './ple-content-mod89'

export const PLE_ALL_MODULES: CourseModule[] = [
  ...PLE_MODULES_123,
  ...PLE_MODULE_4,
  ...PLE_MODULES_567,
  ...PLE_MODULES_89,
]

// ── PLE Course Metadata ────────────────────────────────────────────────────

export const PLE_COURSE_META = {
  title: 'VA Post-License Real Estate Ed',
  provider: 'Acme Realty Real Estate Academy',
  providerNumber: '0000', // placeholder: your DPOR education provider number
  courseType: 'ple' as const,
  totalCreditHours: 30,
  minutesPerCreditHour: 50,
  totalInstructionMinutes: 1500,
  deliveryMethod: 'online' as const,
  passingScore: 70,
  finalExamQuestions: 90,
  finalExamTimeLimitMinutes: 120,
  maxExamAttempts: 3,
  examCooloffHours: 24,
  statutoryAuthority: 'Virginia Code Section 54.1-2105.01',
  dporApprovalStatement:
    'Placeholder: replace with your Virginia Real Estate Board approval statement once the course is approved (see Section 54.1-2105.01 of the Code of Virginia).',
  narEthicsDisclaimer:
    'The NAR Code of Ethics is being used only as a teaching tool. The NAR Code of Ethics provisions that are outside of the Virginia Real Estate Board\'s laws and regulations are not applicable to Real Estate Board licensees.',
}

// ── PLE Module Definitions ─────────────────────────────────────────────────

export interface PleModuleInfo {
  number: number
  slug: string
  title: string
  creditHours: number
  instructionMinutes: number
  quizMinutes: number
  totalMinutes: number
  dporCategory: string
  mandatoryTopics: string[]
}

export const PLE_MODULE_INFO: PleModuleInfo[] = [
  {
    number: 1,
    slug: 'ple-fair-housing',
    title: 'Fair Housing, ADA & Civil Rights Act of 1866',
    creditHours: 2,
    instructionMinutes: 90,
    quizMinutes: 10,
    totalMinutes: 100,
    dporCategory: 'PLE-1',
    mandatoryTopics: [
      'All 7 federal protected classes',
      'All Virginia additional protected classes (Elderliness, Source of Funds, Sexual Orientation, Gender Identity, Veteran Status, Military Status)',
      'Hoarding as a disability / reasonable accommodation',
      'Americans with Disabilities Act (ADA)',
      'Civil Rights Act of 1866',
      'Current cases and administrative decisions',
      'Assistance animals vs. pets',
    ],
  },
  {
    number: 2,
    slug: 'ple-re-law',
    title: 'Real Estate Law and Board Regulations',
    creditHours: 6,
    instructionMinutes: 275,
    quizMinutes: 25,
    totalMinutes: 300,
    dporCategory: 'PLE-2',
    mandatoryTopics: [
      'Lead-Based Paint',
      'Virginia Residential Landlord and Tenant Act (VRLTA)',
      'Property Owners Association Act (POAA)',
      'Condominium Act',
      'Common Interest Community Law',
      "Megan's Law",
      'Service Members Civil Relief Act (SCRA)',
      'All required disclosures',
      'Virginia Real Estate Board disciplinary actions',
      'Building Codes and Smoke Detectors',
      'Flood Hazard Areas and National Flood Insurance Program',
    ],
  },
  {
    number: 3,
    slug: 'ple-ethics',
    title: 'Ethics and Standards of Conduct',
    creditHours: 3,
    instructionMinutes: 140,
    quizMinutes: 10,
    totalMinutes: 150,
    dporCategory: 'PLE-3',
    mandatoryTopics: [
      'Virginia Standards of Conduct (18VAC135-20-300)',
      'NAR Code of Ethics (as teaching tool with disclaimer)',
      'Wire fraud prevention',
      'Fiduciary duties',
      'E&O insurance',
    ],
  },
  {
    number: 4,
    slug: 'ple-current-issues',
    title: 'Current Industry Issues and Trends',
    creditHours: 2,
    instructionMinutes: 90,
    quizMinutes: 10,
    totalMinutes: 100,
    dporCategory: 'PLE-4',
    mandatoryTopics: [
      'NAR settlement and commission changes',
      'Technology in real estate (AI, RON, e-signatures)',
      'Social media and internet advertising compliance',
      'Cybersecurity and wire fraud',
    ],
  },
  {
    number: 5,
    slug: 'ple-agency',
    title: 'Virginia Agency Law',
    creditHours: 3,
    instructionMinutes: 135,
    quizMinutes: 15,
    totalMinutes: 150,
    dporCategory: 'PLE-5',
    mandatoryTopics: [
      'Virginia agency statutes (54.1-2130 through 54.1-2144)',
      'All agency relationship types',
      'Guidance Document on Necessity for Brokerage Agreements',
      'Post-NAR settlement buyer-broker requirements',
      'Agency disclosure requirements',
    ],
  },
  {
    number: 6,
    slug: 'ple-contracts',
    title: 'Contract Writing',
    creditHours: 6,
    instructionMinutes: 270,
    quizMinutes: 30,
    totalMinutes: 300,
    dporCategory: 'PLE-6',
    mandatoryTopics: [
      'Listing Parties',
      'Residential Leasing',
      'Net Leases, Triple Net Leases, Ground Leases',
      'Contingencies',
      'Ownership Principles',
      'Multiple Offers',
      'Ratification and Delivery',
      'Back-up Offers',
      'Home Inspections',
    ],
  },
  {
    number: 7,
    slug: 'ple-risk-mgmt',
    title: 'Risk Management',
    creditHours: 3,
    instructionMinutes: 140,
    quizMinutes: 10,
    totalMinutes: 150,
    dporCategory: 'PLE-7',
    mandatoryTopics: [
      'Real Estate Settlement Procedures Act (RESPA)',
      'Anti-Trust Act',
      'Chesapeake Bay Preservation Act',
      'Environmental Laws',
      'Mold',
    ],
  },
  {
    number: 8,
    slug: 'ple-escrow',
    title: 'Escrow Requirements',
    creditHours: 3,
    instructionMinutes: 140,
    quizMinutes: 10,
    totalMinutes: 150,
    dporCategory: 'PLE-8',
    mandatoryTopics: [
      'Trust account fundamentals and DPOR regulations',
      'Deposit handling procedures',
      'Trust account management and reconciliation',
      'Disbursement rules',
      'Escrow disputes and resolution',
      'Property management escrow (VRLTA)',
    ],
  },
  {
    number: 9,
    slug: 'ple-finance',
    title: 'Real Estate-Related Finance',
    creditHours: 2,
    instructionMinutes: 90,
    quizMinutes: 10,
    totalMinutes: 100,
    dporCategory: 'PLE-9',
    mandatoryTopics: [
      'Loan process and qualification',
      'Residential financing options (conventional, FHA, VA, USDA)',
      'Land financing',
      'Commercial financing',
      'Consumer protection (TILA, RESPA, ECOA)',
    ],
  },
]

// ── Helper Functions ───────────────────────────────────────────────────────

export function getPleModuleInfo(moduleNumber: number): PleModuleInfo | undefined {
  return PLE_MODULE_INFO.find((m) => m.number === moduleNumber)
}

export function getPleModuleBySlug(slug: string): PleModuleInfo | undefined {
  return PLE_MODULE_INFO.find((m) => m.slug === slug)
}

export function getPleTotalHours(): number {
  return PLE_MODULE_INFO.reduce((sum, m) => sum + m.creditHours, 0)
}

export function getPleTotalMinutes(): number {
  return PLE_MODULE_INFO.reduce((sum, m) => sum + m.totalMinutes, 0)
}

// ── Certificate Generation ─────────────────────────────────────────────────

export interface PleCertificateData {
  certificateId: string
  licenseeName: string
  licenseNumber?: string
  courseName: string
  courseApprovalNumber?: string
  courseHours: number
  completionDate: string
  providerName: string
  providerNumber: string
  directorName: string
  dporStatement: string
}

export function generateCertificateId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `PLE-${timestamp}-${random}`.toUpperCase()
}

export function buildCertificateData(
  licenseeName: string,
  licenseNumber: string | undefined,
  directorName: string,
  courseApprovalNumber?: string
): PleCertificateData {
  return {
    certificateId: generateCertificateId(),
    licenseeName,
    licenseNumber,
    courseName: PLE_COURSE_META.title,
    courseApprovalNumber,
    courseHours: PLE_COURSE_META.totalCreditHours,
    completionDate: new Date().toISOString().split('T')[0],
    providerName: PLE_COURSE_META.provider,
    providerNumber: PLE_COURSE_META.providerNumber,
    directorName,
    dporStatement: PLE_COURSE_META.dporApprovalStatement,
  }
}

// ── Time Enforcement ───────────────────────────────────────────────────────

export function getMinimumSecondsForLesson(estimatedMinutes: number): number {
  // DPOR requires 50 minutes of instruction per credit hour
  // Enforce at least 80% of estimated time to prevent rushing
  return Math.floor(estimatedMinutes * 60 * 0.8)
}

export function canProceedToNext(actualSeconds: number, minimumSeconds: number): boolean {
  return actualSeconds >= minimumSeconds
}

// ── Final Exam Configuration ───────────────────────────────────────────────

export const PLE_FINAL_EXAM_CONFIG = {
  quizType: 'ple_final_exam' as const,
  totalQuestions: 90,
  timeLimitMinutes: 120,
  passingScore: 70,
  maxAttempts: 3,
  cooloffHours: 24,
  questionsPerModule: {
    1: 6, // Fair Housing (2hr)
    2: 18, // RE Law (6hr)
    3: 9, // Ethics (3hr)
    4: 6, // Current Issues (2hr)
    5: 9, // Agency (3hr)
    6: 18, // Contracts (6hr)
    7: 9, // Risk Management (3hr)
    8: 9, // Escrow (3hr)
    9: 6, // Finance (2hr) -- total = 90
  } as Record<number, number>,
}
