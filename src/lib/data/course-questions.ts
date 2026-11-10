// ── Types ────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string
  chapterId: string // matches chapter slug
  quizType: 'chapter_quiz' | 'section_exam' | 'mock_exam'
  questionText: string
  options: { id: string; text: string; isCorrect: boolean }[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicTag: string
}

// ── Chapter: virginia-license-law-dpor (10 questions) ────────────────────────

const dporQuestions: QuizQuestion[] = [
  {
    id: 'q-dpor-001',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      'Which Virginia state agency is directly responsible for licensing and regulating real estate professionals?',
    options: [
      { id: 'a', text: 'Virginia Association of Realtors (VAR)', isCorrect: false },
      {
        id: 'b',
        text: 'Virginia Department of Professional and Occupational Regulation (DPOR)',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Virginia Department of Housing and Community Development (DHCD)',
        isCorrect: false,
      },
      { id: 'd', text: 'Virginia Real Estate Commission (VREC)', isCorrect: false },
    ],
    explanation:
      'DPOR is the state agency that oversees professional licensing in Virginia, including real estate. Within DPOR, the Virginia Real Estate Board (VREB) is the specific regulatory body. The Virginia Association of Realtors is a trade organization, not a licensing authority.',
    difficulty: 'easy',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-002',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      'How many hours of pre-license education must a salesperson candidate complete before sitting for the Virginia Real Estate Salesperson Exam?',
    options: [
      { id: 'a', text: '40 hours', isCorrect: false },
      { id: 'b', text: '45 hours', isCorrect: false },
      { id: 'c', text: '60 hours', isCorrect: true },
      { id: 'd', text: '120 hours', isCorrect: false },
    ],
    explanation:
      'Virginia requires 60 hours of pre-license education from a DPOR-approved school for salesperson candidates. The 180-hour requirement applies to broker candidates. Knowing this distinction is a common exam trap.',
    difficulty: 'easy',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-003',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      'A salesperson candidate passes the Virginia Real Estate Exam on March 1st. By what date must the candidate submit a license application to DPOR?',
    options: [
      { id: 'a', text: 'March 1st of the following year (12 months)', isCorrect: true },
      { id: 'b', text: 'June 1st of the same year (90 days)', isCorrect: false },
      { id: 'c', text: 'September 1st of the same year (180 days)', isCorrect: false },
      { id: 'd', text: 'There is no deadline; scores never expire', isCorrect: false },
    ],
    explanation:
      'Virginia law requires that a salesperson license application be submitted within 12 months of passing the exam. If the candidate does not apply within that window, they must retake the exam. Scores do not carry over indefinitely.',
    difficulty: 'medium',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-004',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, what is the minimum active salesperson experience required before an individual may apply for a broker license?',
    options: [
      { id: 'a', text: '24 months of the preceding 36 months', isCorrect: false },
      { id: 'b', text: '36 months of the preceding 48 months', isCorrect: true },
      { id: 'c', text: '48 months of continuous active service', isCorrect: false },
      { id: 'd', text: '60 months of the preceding 72 months', isCorrect: false },
    ],
    explanation:
      'To qualify for a Virginia broker license, the applicant must hold an active salesperson license for at least 36 of the preceding 48 months. This window allows for brief gaps in licensure without disqualifying otherwise experienced agents.',
    difficulty: 'medium',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-005',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      "Every Virginia real estate firm must designate one individual who bears ultimate responsibility for the firm's compliance with real estate law. This person holds which designation?",
    options: [
      { id: 'a', text: 'Supervising Broker', isCorrect: false },
      { id: 'b', text: 'Associate Broker', isCorrect: false },
      { id: 'c', text: 'Principal Broker', isCorrect: true },
      { id: 'd', text: 'Designated Agent', isCorrect: false },
    ],
    explanation:
      "The Principal Broker is the designated broker who is ultimately responsible for the brokerage's compliance with Virginia real estate law and the actions of all affiliated licensees. Every firm must have exactly one principal broker. Supervising brokers manage branch offices but report to the principal broker.",
    difficulty: 'easy',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-006',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Real Estate Board (VREB) may impose a maximum civil penalty of how much per violation for a licensee who violates Virginia real estate law?',
    options: [
      { id: 'a', text: '$1,000 per violation', isCorrect: false },
      { id: 'b', text: '$2,500 per violation', isCorrect: false },
      { id: 'c', text: '$5,000 per violation', isCorrect: true },
      { id: 'd', text: '$10,000 per violation', isCorrect: false },
    ],
    explanation:
      "VREB has the authority to impose civil penalties of up to $5,000 per violation. In addition to fines, VREB can suspend or revoke a license and require remedial education. Understanding the Board's disciplinary powers is frequently tested on the state exam.",
    difficulty: 'medium',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-007',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'section_exam',
    questionText:
      'A licensed salesperson from North Carolina wants to obtain a Virginia salesperson license. Virginia has a reciprocal agreement with North Carolina. Under "license by endorsement," which of the following is most accurate?',
    options: [
      {
        id: 'a',
        text: 'The applicant is exempt from all Virginia requirements and is automatically licensed',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'The applicant must pass only the Virginia state portion of the exam and meet Virginia-specific requirements',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The applicant must retake both the national and state portions of the Virginia exam',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Reciprocity in Virginia applies only to broker licenses, not salesperson licenses',
        isCorrect: false,
      },
    ],
    explanation:
      "Under Virginia's reciprocity agreements, out-of-state licensees from reciprocal states may apply for a Virginia license by endorsement without retaking the national portion of the exam. They must still pass the Virginia state exam portion and demonstrate they meet Virginia's specific requirements. Virginia does not grant automatic licensure.",
    difficulty: 'hard',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-008',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'chapter_quiz',
    questionText:
      "A Virginia real estate licensee's license renewal cycle is how many years, and how many continuing education hours are required at each renewal?",
    options: [
      { id: 'a', text: '1 year; 8 hours of continuing education', isCorrect: false },
      { id: 'b', text: '2 years; 16 hours of continuing education', isCorrect: true },
      { id: 'c', text: '3 years; 24 hours of continuing education', isCorrect: false },
      { id: 'd', text: '4 years; 30 hours of continuing education', isCorrect: false },
    ],
    explanation:
      'Virginia real estate licenses renew on a 2-year cycle. To renew an active license, licensees must complete 16 hours of DPOR-approved continuing education, including mandatory hours in topics such as fair housing and legal updates. Failing to renew on time places the license in an inactive or expired status.',
    difficulty: 'medium',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-009',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'section_exam',
    questionText:
      "A salesperson changes brokerage firms. Under Virginia law, what must happen for the salesperson's license to remain active at the new firm?",
    options: [
      {
        id: 'a',
        text: 'The salesperson must submit a new license application and pay all initial fees again',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "The new principal broker must notify DPOR of the affiliation change and activate the license under the new firm",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The salesperson can practice under the new firm immediately without any notification to DPOR',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The salesperson must retake the state exam before affiliating with a new broker',
        isCorrect: false,
      },
    ],
    explanation:
      "When a salesperson changes firms, the new principal broker must submit the required notification to DPOR to activate the salesperson's license under the new brokerage. A salesperson may NOT practice real estate until their license is properly affiliated with the new firm. Practicing while unaffiliated is a violation.",
    difficulty: 'hard',
    topicTag: 'dpor',
  },
  {
    id: 'q-dpor-010',
    chapterId: 'virginia-license-law-dpor',
    quizType: 'mock_exam',
    questionText: 'Which of the following activities requires a Virginia real estate license?',
    options: [
      {
        id: 'a',
        text: 'An attorney who disposes of real property on behalf of a client as part of legal representation',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'A property manager who, for compensation, lists and leases residential units owned by third parties',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'A person selling their own home without the assistance of an agent',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'A court-appointed receiver managing a foreclosed property',
        isCorrect: false,
      },
    ],
    explanation:
      'A property manager who leases units owned by others for compensation is acting as a real estate broker and must be licensed. Virginia law provides specific exemptions for attorneys acting within the scope of legal practice, owners selling their own property (FSBO), and court-appointed fiduciaries. Compensation for brokerage activity on behalf of others is the key trigger requiring licensure.',
    difficulty: 'hard',
    topicTag: 'dpor',
  },
]

// ── Chapter: agency-relationships (10 questions) ─────────────────────────────

const agencyQuestions: QuizQuestion[] = [
  {
    id: 'q-agency-001',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia agency law, when must a licensee provide the agency disclosure form to a prospective buyer?',
    options: [
      { id: 'a', text: 'At the time of making an offer', isCorrect: false },
      { id: 'b', text: 'At settlement', isCorrect: false },
      {
        id: 'c',
        text: 'At the first substantive contact with the prospective buyer',
        isCorrect: true,
      },
      { id: 'd', text: 'Only if the buyer asks about representation', isCorrect: false },
    ],
    explanation:
      'Virginia requires licensees to provide agency disclosure at the first substantive contact, which is the first contact where meaningful information about a specific property is discussed. This ensures buyers understand their representation options before any negotiation begins.',
    difficulty: 'easy',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-002',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText:
      "A listing agent and buyer's agent both work for the same brokerage. The buyer wants to purchase the listing agent's listing. With proper consent, which type of agency is permissible under Virginia law?",
    options: [
      { id: 'a', text: 'Single agency for the seller only', isCorrect: false },
      { id: 'b', text: 'Transaction brokerage (non-agent status)', isCorrect: false },
      { id: 'c', text: 'Dual agency with informed written consent of both parties', isCorrect: true },
      { id: 'd', text: 'This situation is prohibited entirely in Virginia', isCorrect: false },
    ],
    explanation:
      'Virginia permits dual agency when both the buyer and the seller provide informed written consent. In dual agency, the agent (or brokerage) represents both parties and must remain neutral. Without written consent from both parties, dual agency is illegal and can result in license discipline.',
    difficulty: 'medium',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-003',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText:
      "Which fiduciary duty requires an agent to place the client's interests above all others, including the agent's own financial interest?",
    options: [
      { id: 'a', text: 'Disclosure', isCorrect: false },
      { id: 'b', text: 'Loyalty', isCorrect: true },
      { id: 'c', text: 'Obedience', isCorrect: false },
      { id: 'd', text: 'Accountability', isCorrect: false },
    ],
    explanation:
      "The duty of loyalty requires the agent to act solely in the client's best interest, avoiding conflicts of interest and self-dealing. This is the cornerstone fiduciary duty. For example, an agent cannot steer a buyer away from a property because the agent would earn a lower commission.",
    difficulty: 'easy',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-004',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText:
      "A buyer's agent learns that the seller is in severe financial hardship and must sell quickly. Under the duty of loyalty to the buyer, the agent should:",
    options: [
      {
        id: 'a',
        text: "Disclose the seller's financial situation to the buyer to help negotiate a lower price",
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Keep the information confidential since it came from the listing agent',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Refuse to share the information because it may be considered privileged',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Disclose to both buyer and seller simultaneously to remain neutral',
        isCorrect: false,
      },
    ],
    explanation:
      "A buyer's agent owes loyalty to the buyer and must share all material information that could benefit the buyer in negotiation, including the seller's motivation to sell quickly. This information is not the seller's confidential information in a buyer agency context. The duty shifts based on which party the agent represents.",
    difficulty: 'medium',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-005',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a "designated agency" arrangement means:',
    options: [
      {
        id: 'a',
        text: 'One broker represents both the buyer and seller as a neutral intermediary',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'The principal broker designates separate agents within the same firm to each exclusively represent the buyer and seller',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The buyer and seller each designate their own brokerage firms',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'A referral arrangement between two out-of-state brokers',
        isCorrect: false,
      },
    ],
    explanation:
      'Designated agency in Virginia allows a brokerage to assign one agent to exclusively represent the buyer and a different agent to exclusively represent the seller, even though both agents work for the same firm. This avoids the conflicts inherent in traditional dual agency and allows each client to receive full fiduciary representation.',
    difficulty: 'medium',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-006',
    chapterId: 'agency-relationships',
    quizType: 'section_exam',
    questionText:
      'A seller tells the listing agent that the basement flooded twice last year and instructs the agent to keep this confidential. What must the listing agent do under Virginia law?',
    options: [
      {
        id: 'a',
        text: "Honor the seller's instructions because the duty of confidentiality applies to all client communications",
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Disclose the flooding to any prospective buyer because it is a material defect',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Disclose only if the buyer directly asks about water intrusion issues',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Withdraw from the listing rather than disclose or withhold the information',
        isCorrect: false,
      },
    ],
    explanation:
      "Virginia law requires disclosure of all material defects that the agent knows about, regardless of the seller's instructions. Basement flooding is a material defect that would affect a buyer's decision. A licensee cannot follow client instructions that require them to violate the law. The duty of obedience to a client never extends to illegal acts.",
    difficulty: 'hard',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-007',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of listing agreement gives the listing broker the exclusive right to a commission regardless of who procures the buyer, including the seller themselves?',
    options: [
      { id: 'a', text: 'Open listing', isCorrect: false },
      { id: 'b', text: 'Exclusive agency listing', isCorrect: false },
      { id: 'c', text: 'Exclusive right to sell listing', isCorrect: true },
      { id: 'd', text: 'Net listing', isCorrect: false },
    ],
    explanation:
      "An exclusive right to sell listing guarantees the listing broker a commission if the property sells during the listing period, no matter who finds the buyer, including the seller. An exclusive agency listing allows the seller to find their own buyer without owing a commission. An open listing pays commission only to the broker who procures the buyer.",
    difficulty: 'easy',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-008',
    chapterId: 'agency-relationships',
    quizType: 'mock_exam',
    questionText:
      "Under Virginia's agency law, which of the following statements about a subagent is CORRECT?",
    options: [
      {
        id: 'a',
        text: 'A subagent represents the buyer and owes the buyer all fiduciary duties',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'A subagent is an agent of the listing broker and therefore owes fiduciary duties to the seller',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Subagency is the most common form of representation in Virginia today',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'A subagent owes duties only to the broker who created the subagency, not to the seller',
        isCorrect: false,
      },
    ],
    explanation:
      "A subagent works under the listing broker and therefore owes fiduciary duties to the seller (the listing broker's client), not the buyer. While the subagent assists the buyer, their loyalty runs to the seller. Subagency has become rare due to liability concerns, and most cooperative arrangements today are structured as buyer agency.",
    difficulty: 'hard',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-009',
    chapterId: 'agency-relationships',
    quizType: 'chapter_quiz',
    questionText: 'The fiduciary duty of "care" in an agency relationship requires the agent to:',
    options: [
      {
        id: 'a',
        text: 'Guarantee the buyer will get the best possible price on any property',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Exercise reasonable skill and diligence in performing agency duties',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Personally inspect every property before showing it to a client',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Conduct a title search on every property the client considers',
        isCorrect: false,
      },
    ],
    explanation:
      'The duty of care requires an agent to use the skill, knowledge, and diligence that a competent real estate professional would apply in the same circumstances. It does not guarantee results but does require the agent to avoid negligence. Recommending inspections and advising on market conditions are examples of meeting this duty.',
    difficulty: 'medium',
    topicTag: 'agency',
  },
  {
    id: 'q-agency-010',
    chapterId: 'agency-relationships',
    quizType: 'section_exam',
    questionText:
      "A Virginia listing agent receives two offers simultaneously. The seller has not instructed the agent on how to handle multiple offers. What is the agent's obligation under Virginia law?",
    options: [
      {
        id: 'a',
        text: 'Present only the highest offer to avoid overwhelming the seller',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Present all offers promptly and in the manner the seller directs',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Negotiate each offer separately before presenting any to the seller',
        isCorrect: false,
      },
      {
        id: 'd',
        text: "Disclose the existence and terms of each offer to all buyers to create competition",
        isCorrect: false,
      },
    ],
    explanation:
      "Virginia licensees are required to promptly present all offers to the seller unless the seller has given written instruction otherwise. The agent must follow the seller's directions on how to handle multiple offers. Disclosing one buyer's offer terms to competing buyers without the seller's consent would violate confidentiality.",
    difficulty: 'hard',
    topicTag: 'agency',
  },
]

// ── Chapter: fair-housing-laws (10 questions) ─────────────────────────────────

const fairHousingQuestions: QuizQuestion[] = [
  {
    id: 'q-fairhousing-001',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText:
      'The federal Fair Housing Act of 1968 as amended prohibits housing discrimination based on which seven protected classes?',
    options: [
      {
        id: 'a',
        text: 'Race, color, religion, sex, national origin, familial status, disability',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Race, color, religion, sex, age, marital status, disability',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Race, color, religion, national origin, source of funds, sexual orientation, disability',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Race, color, sex, national origin, familial status, disability, income',
        isCorrect: false,
      },
    ],
    explanation:
      "The federal Fair Housing Act protects seven classes: race, color, religion, sex, national origin, familial status (households with children under 18 or pregnant women), and disability (added in the 1988 amendments). Virginia's Fair Housing Law adds additional protected classes beyond the federal seven.",
    difficulty: 'easy',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-002',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText:
      "Virginia's Fair Housing Law extends beyond federal protections by including which of the following as an additional protected class?",
    options: [
      { id: 'a', text: 'Age (persons over 40)', isCorrect: false },
      { id: 'b', text: 'Elderliness (age 55 and older in certain housing)', isCorrect: false },
      { id: 'c', text: 'Source of funds (such as housing vouchers)', isCorrect: true },
      { id: 'd', text: 'Credit score below a minimum threshold', isCorrect: false },
    ],
    explanation:
      "Virginia's Fair Housing Law adds \"source of funds\" as a protected class, which prohibits landlords from refusing to rent to applicants solely because they use housing vouchers (like Section 8) or other legal sources of income. This protection exists at the state level even though it is not part of the federal Fair Housing Act.",
    difficulty: 'medium',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-003',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText: 'Steering is a discriminatory practice in which a licensee:',
    options: [
      {
        id: 'a',
        text: 'Refuses to show properties in a neighborhood because of its racial composition',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Directs buyers toward or away from certain neighborhoods based on their protected class characteristics',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Refuses to make a mortgage loan in a particular geographic area',
        isCorrect: false,
      },
      {
        id: 'd',
        text: "Changes the terms of a sale based on the buyer's national origin",
        isCorrect: false,
      },
    ],
    explanation:
      'Steering occurs when a real estate agent guides prospective buyers or renters toward or away from specific neighborhoods based on their protected class characteristics (race, religion, national origin, etc.). Even subtle language like "you might feel more comfortable in..." can constitute steering. Redlining (answer C) is a related but distinct practice involving lending.',
    difficulty: 'easy',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-004',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Fair Housing Act, a landlord is generally required to allow a tenant with a disability to make reasonable modifications to the unit. Who typically pays for these modifications?',
    options: [
      { id: 'a', text: 'The landlord must pay for all modifications', isCorrect: false },
      {
        id: 'b',
        text: 'The tenant pays for the modifications, and the landlord may require restoration upon move-out',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The local government pays through a fair housing fund',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'The cost is split equally between the landlord and tenant',
        isCorrect: false,
      },
    ],
    explanation:
      'Under the Fair Housing Act, tenants with disabilities have the right to make reasonable modifications at their own expense. The landlord may require the tenant to restore the unit to its original condition upon vacating for modifications that do not need to remain for the next occupant. This rule applies to private landlords; different rules may apply in federally assisted housing.',
    difficulty: 'medium',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-005',
    chapterId: 'fair-housing-laws',
    quizType: 'section_exam',
    questionText:
      'A landlord refuses to rent to a family because they have three children, citing concerns about wear and tear on the property. This is most likely a violation of which protected class under the Fair Housing Act?',
    options: [
      { id: 'a', text: 'Race', isCorrect: false },
      { id: 'b', text: 'Disability', isCorrect: false },
      { id: 'c', text: 'Familial status', isCorrect: true },
      { id: 'd', text: 'National origin', isCorrect: false },
    ],
    explanation:
      'Familial status protects households with children under 18, including pregnant women and those in the process of obtaining custody. Refusing to rent to a family because of their children, even under a neutral-sounding reason like "wear and tear," constitutes familial status discrimination. Exceptions exist only for qualifying senior housing communities.',
    difficulty: 'easy',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-006',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText:
      "Which of the following properties may qualify for an exemption from certain federal Fair Housing Act prohibitions (but NEVER from the prohibition on race discrimination)?",
    options: [
      {
        id: 'a',
        text: 'A large apartment complex with 50 units managed by a professional property management company',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "A single-family home sold by an owner without the use of a real estate licensee and without discriminatory advertising",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'A duplex owned by a corporation',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Any residential property rented at below-market rates',
        isCorrect: false,
      },
    ],
    explanation:
      'The "Mrs. Murphy" exemption allows an owner-occupant of a building with four or fewer units to discriminate on certain grounds (excluding race) without using a licensee or discriminatory advertising. A single-family home sold without an agent and without discriminatory advertising qualifies for a separate owner exemption. Neither exemption ever applies to race discrimination, which has no exceptions under federal law.',
    difficulty: 'hard',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-007',
    chapterId: 'fair-housing-laws',
    quizType: 'mock_exam',
    questionText:
      'A prospective tenant with multiple sclerosis asks a landlord to install a grab bar in the bathroom. The landlord says the lease does not allow alterations. Under the Fair Housing Act, the landlord must:',
    options: [
      {
        id: 'a',
        text: 'Deny the request because the lease prohibits alterations',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "Allow the modification as a reasonable accommodation for the tenant's disability",
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Allow the modification as a reasonable modification and may require restoration upon move-out',
        isCorrect: true,
      },
      {
        id: 'd',
        text: "Install the grab bar at the landlord's own expense as a required accommodation",
        isCorrect: false,
      },
    ],
    explanation:
      "A grab bar is a physical change to the unit, making it a \"reasonable modification\" under the FHA, not a \"reasonable accommodation\" (which involves policy or rule changes). The landlord must permit the modification (the tenant pays) and may require restoration upon vacating. The lease's no-alterations clause cannot override federal fair housing law.",
    difficulty: 'hard',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-008',
    chapterId: 'fair-housing-laws',
    quizType: 'chapter_quiz',
    questionText:
      'Blockbusting is a prohibited practice under the Fair Housing Act. It is best described as:',
    options: [
      {
        id: 'a',
        text: 'Refusing to show properties in a neighborhood to buyers of a particular race',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "Inducing panic selling by suggesting that a neighborhood's character is changing due to the entry of a protected class",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Setting different rental rates for tenants of different national origins',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Refusing to make mortgage loans in minority-concentrated neighborhoods',
        isCorrect: false,
      },
    ],
    explanation:
      'Blockbusting (also called "panic peddling") involves inducing homeowners to sell by suggesting that people of a different race, religion, or national origin are moving into the neighborhood and will cause property values to decline. Agents who engage in blockbusting can lose their license and face federal penalties. Redlining (answer D) is a separate lending-related practice.',
    difficulty: 'medium',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-009',
    chapterId: 'fair-housing-laws',
    quizType: 'section_exam',
    questionText:
      'A HUD complaint for a fair housing violation must generally be filed within how many days of the alleged discriminatory act?',
    options: [
      { id: 'a', text: '90 days', isCorrect: false },
      { id: 'b', text: '180 days', isCorrect: false },
      { id: 'c', text: '365 days (one year)', isCorrect: true },
      { id: 'd', text: '730 days (two years)', isCorrect: false },
    ],
    explanation:
      "A complaint alleging a violation of the federal Fair Housing Act must be filed with HUD within one year (365 days) of the alleged discriminatory act. Private lawsuits under the FHA may be filed in federal court within two years. Virginia's fair housing law follows a similar one-year administrative deadline.",
    difficulty: 'medium',
    topicTag: 'fair_housing',
  },
  {
    id: 'q-fairhousing-010',
    chapterId: 'fair-housing-laws',
    quizType: 'mock_exam',
    questionText:
      'A real estate agent consistently shows buyers of one ethnic background properties only in neighborhoods predominantly populated by that same ethnic group. The agent claims the buyers never asked to see properties elsewhere. This practice is:',
    options: [
      {
        id: 'a',
        text: "Permissible because the agent is following the buyers' unstated preferences",
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Permissible because no protected class is being harmed; both groups are receiving service',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Prohibited steering, even if the agent believes the buyers prefer it',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Only prohibited if the agent refuses to show properties in other areas when directly asked',
        isCorrect: false,
      },
    ],
    explanation:
      "Steering is illegal regardless of the agent's intent or the buyer's apparent preferences. Agents may not assume where clients want to live based on protected characteristics. The law requires agents to show properties across all areas without regard to the racial, ethnic, or religious composition of those areas. \"Following preferences\" is not a defense when those preferences were inferred from protected class membership.",
    difficulty: 'hard',
    topicTag: 'fair_housing',
  },
]

// ── Chapter: landlord-tenant-law (10 questions) ───────────────────────────────

const landlordTenantQuestions: QuizQuestion[] = [
  {
    id: 'q-landlord-001',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Residential Landlord and Tenant Act (VRLTA) primarily governs which type of tenancies?',
    options: [
      { id: 'a', text: 'All real property rentals in Virginia without exception', isCorrect: false },
      {
        id: 'b',
        text: 'Commercial leases and industrial properties only',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Transient hotel and motel occupancies',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Dwelling units used as a residence, broadly covering most residential tenancies including apartments and single-family rentals',
        isCorrect: true,
      },
    ],
    explanation:
      'The VRLTA broadly governs most residential tenancies in Virginia, including apartments and single-family rental homes. While certain exemptions exist (e.g., transient occupancy in hotels, certain agricultural arrangements), the VRLTA covers the vast majority of dwelling units rented for residential purposes across the Commonwealth.',
    difficulty: 'medium',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-002',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      'Under the VRLTA, what is the maximum security deposit a landlord may collect from a tenant?',
    options: [
      { id: 'a', text: "One month's rent", isCorrect: false },
      { id: 'b', text: "Two months' rent", isCorrect: true },
      { id: 'c', text: "Three months' rent", isCorrect: false },
      { id: 'd', text: 'There is no statutory limit on security deposits in Virginia', isCorrect: false },
    ],
    explanation:
      "The VRLTA limits security deposits to no more than two months' rent. A landlord who collects more than two months' rent as a security deposit is in violation of the Act. This cap protects tenants from excessive upfront financial burdens while still providing landlords reasonable protection.",
    difficulty: 'easy',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-003',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      "Under the VRLTA, within how many days after the tenancy ends must a landlord return the tenant's security deposit (or provide an itemized statement of deductions)?",
    options: [
      { id: 'a', text: '14 days', isCorrect: false },
      { id: 'b', text: '21 days', isCorrect: false },
      { id: 'c', text: '30 days', isCorrect: true },
      { id: 'd', text: '45 days', isCorrect: false },
    ],
    explanation:
      "Virginia's VRLTA requires a landlord to return the tenant's security deposit, with any itemized written deduction statement, within 30 days after the termination of the tenancy and the tenant's vacating the unit. Failure to comply can result in the landlord being liable for the full deposit plus damages.",
    difficulty: 'easy',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-004',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      'A landlord fails to make a repair that materially affects the health or safety of the tenant. After proper written notice, the tenant may have the right to:',
    options: [
      {
        id: 'a',
        text: 'Immediately vacate the unit and terminate the lease without any notice period',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Withhold all future rent payments without limit until the repair is made',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Terminate the rental agreement or have the repair made and deduct from rent, subject to statutory limits',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Sue the landlord in circuit court only; no self-help remedies are available under the VRLTA',
        isCorrect: false,
      },
    ],
    explanation:
      "Under the VRLTA, if a landlord fails to fix a condition that materially affects health or safety after receiving proper written notice and a reasonable repair period, the tenant may terminate the lease OR exercise the repair-and-deduct remedy (subject to limits). The tenant must follow the required notice procedures before exercising these remedies.",
    difficulty: 'medium',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-005',
    chapterId: 'landlord-tenant-law',
    quizType: 'section_exam',
    questionText:
      'A tenant pays rent on the 1st of each month and fails to pay on June 1st. Under the VRLTA, the landlord must serve what type of notice before filing for a court order of possession?',
    options: [
      { id: 'a', text: 'A 30-day notice to vacate', isCorrect: false },
      { id: 'b', text: 'A 5-day pay-or-quit notice', isCorrect: true },
      { id: 'c', text: 'A 14-day notice to cure or quit', isCorrect: false },
      {
        id: 'd',
        text: 'Landlords may file immediately in court without prior notice for nonpayment',
        isCorrect: false,
      },
    ],
    explanation:
      'Under the VRLTA, before a landlord may file an unlawful detainer action for nonpayment of rent, the landlord must first serve the tenant with a 5-day written notice to pay rent or vacate. If the tenant pays all amounts owed within those 5 days, the tenancy continues. If not, the landlord may then proceed to court.',
    difficulty: 'medium',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-006',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      'Under the VRLTA, "retaliatory eviction" refers to a landlord attempting to evict a tenant primarily because the tenant:',
    options: [
      { id: 'a', text: 'Renewed the lease at a higher rent', isCorrect: false },
      {
        id: 'b',
        text: 'Exercised a legal right, such as complaining to a housing code enforcement authority',
        isCorrect: true,
      },
      { id: 'c', text: 'Sublet the unit without permission', isCorrect: false },
      { id: 'd', text: 'Had a guest stay longer than the lease permits', isCorrect: false },
    ],
    explanation:
      'Retaliatory eviction occurs when a landlord attempts to terminate a tenancy or raise rent because the tenant exercised a legal right, such as filing a housing code complaint, requesting repairs, or contacting a government agency about unsafe conditions. Virginia law provides tenants with a defense against retaliatory eviction actions.',
    difficulty: 'easy',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-007',
    chapterId: 'landlord-tenant-law',
    quizType: 'section_exam',
    questionText:
    "A landlord wants to enter a tenant's unit to make non-emergency repairs. Under the VRLTA, how much advance notice must the landlord generally provide?",
    options: [
      { id: 'a', text: '12 hours', isCorrect: false },
      { id: 'b', text: '24 hours', isCorrect: true },
      { id: 'c', text: '48 hours', isCorrect: false },
      { id: 'd', text: '72 hours', isCorrect: false },
    ],
    explanation:
      "The VRLTA requires a landlord to give at least 24 hours' advance notice before entering a dwelling unit for non-emergency purposes, such as making repairs or showing the unit to prospective tenants. Entry must occur at a reasonable time. In emergencies (fire, water leak, etc.), a landlord may enter without notice.",
    difficulty: 'easy',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-008',
    chapterId: 'landlord-tenant-law',
    quizType: 'mock_exam',
    questionText:
      "Under the VRLTA, a landlord's \"duty to maintain fit premises\" requires the landlord to do which of the following?",
    options: [
      {
        id: 'a',
        text: 'Maintain the property in a condition exceeding local housing codes',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Maintain the unit in a habitable condition in compliance with applicable building and housing codes affecting health and safety',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Make all tenant-requested cosmetic upgrades within 30 days',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Maintain any appliances provided by the tenant within the unit',
        isCorrect: false,
      },
    ],
    explanation:
      "The VRLTA's implied warranty of habitability requires landlords to maintain rental property in compliance with applicable building and housing codes that materially affect health and safety. This includes maintaining structural components, plumbing, heating, electrical systems, and keeping common areas safe and clean. Cosmetic issues and tenant-supplied appliances are not covered by this duty.",
    difficulty: 'medium',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-009',
    chapterId: 'landlord-tenant-law',
    quizType: 'chapter_quiz',
    questionText:
      'A month-to-month residential tenancy governed by the VRLTA requires how much written notice to terminate the tenancy?',
    options: [
      { id: 'a', text: '7 days written notice by either party', isCorrect: false },
      { id: 'b', text: '14 days written notice by either party', isCorrect: false },
      { id: 'c', text: '30 days written notice by either party', isCorrect: true },
      {
        id: 'd',
        text: '60 days written notice, with the tenant requiring less notice than the landlord',
        isCorrect: false,
      },
    ],
    explanation:
      "Under the VRLTA, a month-to-month tenancy may be terminated by either the landlord or the tenant with at least 30 days' written notice prior to the next rent due date. This provides both parties adequate time to make alternative arrangements. A written lease with a specific end date does not require termination notice unless the lease specifies otherwise.",
    difficulty: 'medium',
    topicTag: 'landlord_tenant',
  },
  {
    id: 'q-landlord-010',
    chapterId: 'landlord-tenant-law',
    quizType: 'section_exam',
    questionText:
      'A landlord rents to a tenant with a written 12-month lease. Before the lease expires, the landlord sells the property. Which of the following is correct under Virginia law?',
    options: [
      {
        id: 'a',
        text: 'The landlord may terminate the lease immediately upon finding a buyer',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "The lease survives the sale, and the new owner takes the property subject to the existing tenancy",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'The tenant must vacate within 30 days once the property is listed for sale',
        isCorrect: false,
      },
      {
        id: 'd',
        text: "The landlord must pay the tenant a relocation fee equal to two months' rent to terminate early",
        isCorrect: false,
      },
    ],
    explanation:
      "Under Virginia property law, a lease \"runs with the land.\" When a landlord sells a property with an existing tenant, the new owner takes title subject to the lease and must honor it until its natural expiration. The tenant's rights are not terminated by the sale. The new owner becomes the tenant's new landlord with all associated obligations.",
    difficulty: 'hard',
    topicTag: 'landlord_tenant',
  },
]

// ── Chapter: ethics-standards-of-conduct (10 questions) ──────────────────────

const ethicsQuestions: QuizQuestion[] = [
  {
    id: 'q-ethics-001',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText:
      'The NAR Code of Ethics places the highest obligation on a REALTOR to act in the interest of which of the following parties?',
    options: [
      { id: 'a', text: 'The public', isCorrect: true },
      { id: 'b', text: 'The client', isCorrect: false },
      { id: 'c', text: 'Fellow REALTORS', isCorrect: false },
      { id: 'd', text: 'The brokerage', isCorrect: false },
    ],
    explanation:
      'The NAR Code of Ethics establishes a hierarchy of obligations: first to the public, then to clients, and then to fellow REALTORS. This ordering reflects the foundational principle that real estate professionals have a duty to preserve and protect the public interest, even when doing so might conflict with individual client preferences.',
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-002',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia license law, a licensee who makes a material misrepresentation about a property to a buyer may face which of the following consequences?',
    options: [
      { id: 'a', text: 'A written warning for a first offense only', isCorrect: false },
      {
        id: 'b',
        text: 'License suspension or revocation, civil penalties, and potential civil liability to the harmed party',
        isCorrect: true,
      },
      { id: 'c', text: 'Mandatory additional education only', isCorrect: false },
      { id: 'd', text: 'No VREB discipline if no criminal conviction results', isCorrect: false },
    ],
    explanation:
      "A material misrepresentation is a false statement of fact about something important to a transaction. VREB may suspend or revoke the license and impose civil penalties. Separately, the harmed buyer may sue the licensee for civil damages. Criminal charges are also possible for intentional fraud.",
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-003',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee lists a property and later discovers that a prospective buyer is a close personal friend. Under ethical and legal standards, the licensee should:',
    options: [
      {
        id: 'a',
        text: 'Refuse to work with the buyer to avoid any conflict',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Proceed without disclosure since personal relationships do not affect professional duties',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Disclose the relationship to the seller and obtain informed consent before continuing',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Have the broker handle the transaction without any disclosure to the seller',
        isCorrect: false,
      },
    ],
    explanation:
      "Virginia license law and the NAR Code of Ethics require disclosure of any personal interest or relationship that could create a conflict of interest. The listing agent must inform the seller of the relationship with the prospective buyer and obtain consent before proceeding. This transparency allows the seller to make an informed decision about the representation.",
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-004',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText:
      "Under the NAR Code of Ethics, Article 1, REALTORS must protect and promote the interests of their client. However, this duty is explicitly subordinate to which other obligation?",
    options: [
      { id: 'a', text: 'The duty to cooperate with other REALTORS', isCorrect: false },
      { id: 'b', text: 'The obligation to truthfully present properties to all parties', isCorrect: false },
      {
        id: 'c',
        text: 'The obligation to treat all parties honestly',
        isCorrect: true,
      },
      { id: 'd', text: 'The duty to disclose all listing information on the MLS', isCorrect: false },
    ],
    explanation:
      "Article 1 of the NAR Code of Ethics states that REALTORS must protect and promote the interests of their client while also being honest with all parties. The duty of loyalty to the client does not permit dishonesty toward third parties. A REALTOR cannot misrepresent facts to buyers even when acting zealously for the seller client.",
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-005',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'section_exam',
    questionText:
      'A Virginia salesperson receives a $500 gift card from a title company for referring clients to that company. This arrangement is most likely a violation of:',
    options: [
      { id: 'a', text: 'The NAR Code of Ethics only, with no legal consequences', isCorrect: false },
      {
        id: 'b',
        text: 'The Real Estate Settlement Procedures Act (RESPA) and Virginia license law',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'No law or code, provided the client is not charged extra fees',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Virginia consumer protection law only, since RESPA does not apply to referrals',
        isCorrect: false,
      },
    ],
    explanation:
      'RESPA (the federal Real Estate Settlement Procedures Act) prohibits kickbacks and referral fees between settlement service providers, including title companies paying real estate agents for referrals. Virginia license law independently prohibits licensees from accepting undisclosed compensation. Violation of RESPA can result in federal criminal penalties, and VREB can discipline the licensee as well.',
    difficulty: 'hard',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-006',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia license law, a licensee who receives an earnest money deposit must deposit the funds into an escrow account within how many banking days of contract ratification?',
    options: [
      { id: 'a', text: '1 banking day', isCorrect: false },
      { id: 'b', text: '2 banking days', isCorrect: false },
      { id: 'c', text: '3 banking days', isCorrect: false },
      { id: 'd', text: '5 banking days', isCorrect: true },
    ],
    explanation:
      'Virginia law requires that earnest money deposits be placed in a federally insured escrow account within 5 banking days of contract ratification (the date all parties have signed and communicated acceptance). Mishandling client funds through commingling or conversion is one of the most serious violations under Virginia license law and can result in immediate license revocation.',
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-007',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'chapter_quiz',
    questionText: 'The practice of "commingling" in real estate refers to:',
    options: [
      {
        id: 'a',
        text: 'An agent representing both buyer and seller in the same transaction',
        isCorrect: false,
      },
      {
        id: 'b',
        text: "Mixing client escrow funds with the broker's or agent's personal or operating funds",
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Combining multiple buyer offers into a single presentation to the seller',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Sharing confidential client information between licensees at the same firm',
        isCorrect: false,
      },
    ],
    explanation:
      "Commingling occurs when a broker or agent deposits client escrow funds into their personal or business operating accounts, mixing client money with their own. This is strictly prohibited under Virginia license law. Escrow funds must be kept in a separate, federally insured trust account. Conversion (using client funds for personal purposes) is an even more serious related violation.",
    difficulty: 'easy',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-008',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'mock_exam',
    questionText:
      'A REALTOR advertises a property claiming it has a two-car garage when it only has a one-car garage. Under the NAR Code of Ethics, this most directly violates:',
    options: [
      { id: 'a', text: 'Article 4 (acquiring property for personal benefit)', isCorrect: false },
      { id: 'b', text: 'Article 12 (truthful advertising)', isCorrect: true },
      { id: 'c', text: "Article 16 (interference with other agents' relationships)", isCorrect: false },
      { id: 'd', text: 'Article 3 (cooperation with other brokers)', isCorrect: false },
    ],
    explanation:
      'NAR Code of Ethics Article 12 requires REALTORS to be honest and truthful in all communications, including advertising. Falsely advertising a property feature violates Article 12. Virginia license law independently prohibits false advertising. Both expose the licensee to ethics complaints and potential license discipline.',
    difficulty: 'medium',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-009',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'section_exam',
    questionText:
      'A Virginia broker learns that one of their affiliated salespersons has been violating fair housing laws. Under Virginia license law, the broker is obligated to:',
    options: [
      {
        id: 'a',
        text: 'Investigate, take corrective action, and report the violation to VREB if required',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Keep the matter internal and counsel the salesperson privately without outside reporting',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Do nothing unless the salesperson has received a formal complaint from a client',
        isCorrect: false,
      },
      {
        id: 'd',
        text: "Immediately terminate the salesperson's affiliation without any further obligation",
        isCorrect: false,
      },
    ],
    explanation:
      "Under Virginia license law, the principal broker is responsible for supervising affiliated licensees and is obligated to take corrective action when a violation is discovered. Depending on the severity of the conduct, the broker may also have reporting obligations to VREB. Keeping known violations internal to avoid scrutiny is itself a violation and can expose the broker to discipline.",
    difficulty: 'hard',
    topicTag: 'ethics',
  },
  {
    id: 'q-ethics-010',
    chapterId: 'ethics-standards-of-conduct',
    quizType: 'mock_exam',
    questionText:
      "A licensee intends to purchase a property that is also listed on the open market through the licensee's own brokerage. Under Virginia license law and ethics standards, the licensee must:",
    options: [
      {
        id: 'a',
        text: 'Withdraw from the transaction entirely because self-dealing is prohibited',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Disclose in writing that they hold a real estate license and have a personal interest in acquiring the property',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Proceed normally since purchasing property is a personal matter outside the scope of licensing law',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Submit the offer only through a third-party agent to avoid disclosure requirements',
        isCorrect: false,
      },
    ],
    explanation:
      'Virginia license law requires a licensee who is purchasing property to disclose, in writing, that they hold a real estate license and are acquiring a personal interest in the property. This disclosure must be made to all relevant parties. The transaction itself is not prohibited, but the conflict of interest created by the licensee professional status must be transparently disclosed.',
    difficulty: 'hard',
    topicTag: 'ethics',
  },
]

// ── Chapter: forms-of-property-ownership (10 questions) ─────────────────────

const propertyOwnershipQuestions: QuizQuestion[] = [
  {
    id: 'q-propown-001',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, when two or more persons hold title as tenants in common, what happens to a deceased co-tenant\'s interest?',
    options: [
      { id: 'a', text: 'It automatically passes to the surviving co-tenants', isCorrect: false },
      { id: 'b', text: 'It reverts to the Commonwealth of Virginia', isCorrect: false },
      { id: 'c', text: 'It passes through the deceased co-tenant\'s estate', isCorrect: true },
      { id: 'd', text: 'It is divided equally among all remaining co-tenants by operation of law', isCorrect: false },
    ],
    explanation:
      'Tenancy in common does not include the right of survivorship. When a co-tenant dies, their interest passes through their estate (by will or intestate succession), not automatically to the surviving co-tenants. This is a key distinction from joint tenancy.',
    difficulty: 'easy',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-002',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is a required unity for the creation of a joint tenancy?',
    options: [
      { id: 'a', text: 'Unity of marriage', isCorrect: false },
      { id: 'b', text: 'Unity of time', isCorrect: true },
      { id: 'c', text: 'Unity of gender', isCorrect: false },
      { id: 'd', text: 'Unity of residency', isCorrect: false },
    ],
    explanation:
      'Joint tenancy requires four unities: time, title, interest, and possession (often remembered as T-TIP). All joint tenants must acquire their interests at the same time, through the same instrument, with equal shares, and equal rights of possession. Unity of marriage is associated with tenancy by the entirety, not joint tenancy.',
    difficulty: 'easy',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-003',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Tenancy by the entirety in Virginia is a form of co-ownership available exclusively to:',
    options: [
      { id: 'a', text: 'Business partners who share equal ownership in a firm', isCorrect: false },
      { id: 'b', text: 'Married couples', isCorrect: true },
      { id: 'c', text: 'Parent and child relationships', isCorrect: false },
      { id: 'd', text: 'Any two individuals who share a domicile', isCorrect: false },
    ],
    explanation:
      'Tenancy by the entirety is reserved exclusively for married couples in Virginia. It includes the right of survivorship and protects the property from the individual debts of one spouse. Neither spouse can unilaterally convey or encumber the property without the other\'s consent.',
    difficulty: 'easy',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-004',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'A condominium owner in Virginia holds which type of interest in the common areas of the condominium?',
    options: [
      { id: 'a', text: 'No ownership interest; common areas are owned by the HOA', isCorrect: false },
      { id: 'b', text: 'An undivided percentage interest as a tenant in common with other unit owners', isCorrect: true },
      { id: 'c', text: 'A leasehold interest granted by the developer', isCorrect: false },
      { id: 'd', text: 'A life estate that terminates upon sale of the unit', isCorrect: false },
    ],
    explanation:
      'Under the Virginia Condominium Act, each unit owner holds fee simple title to their individual unit and an undivided percentage interest in the common elements as a tenant in common with all other unit owners. This percentage is defined in the condominium declaration.',
    difficulty: 'medium',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-005',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, if a deed to an unmarried couple states only their names without specifying the form of ownership, how is title presumed to be held?',
    options: [
      { id: 'a', text: 'Joint tenancy with right of survivorship', isCorrect: false },
      { id: 'b', text: 'Tenancy by the entirety', isCorrect: false },
      { id: 'c', text: 'Tenancy in common', isCorrect: true },
      { id: 'd', text: 'Community property', isCorrect: false },
    ],
    explanation:
      'In Virginia, when a deed does not specify the form of co-ownership, the default presumption is tenancy in common. Joint tenancy must be expressly stated in the deed. Tenancy by the entirety requires marriage, and Virginia is not a community property state.',
    difficulty: 'medium',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-006',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following best describes a cooperative form of property ownership?',
    options: [
      { id: 'a', text: 'Each owner holds fee simple title to their individual unit', isCorrect: false },
      { id: 'b', text: 'Owners hold shares in a corporation that owns the building, with a proprietary lease for their unit', isCorrect: true },
      { id: 'c', text: 'Each owner holds a life estate in their unit', isCorrect: false },
      { id: 'd', text: 'Owners hold title as joint tenants with the developer', isCorrect: false },
    ],
    explanation:
      'In a cooperative, residents purchase shares in a corporation that owns the entire building. Each shareholder receives a proprietary lease granting the right to occupy a specific unit. Unlike condominiums, cooperative owners do not hold fee simple title to their individual units.',
    difficulty: 'medium',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-007',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'A joint tenant secretly conveys their interest to a third party without the knowledge of the other joint tenants. What is the legal effect of this conveyance in Virginia?',
    options: [
      { id: 'a', text: 'The conveyance is void because all joint tenants must consent', isCorrect: false },
      { id: 'b', text: 'The joint tenancy is severed as to the conveyed share, and the new owner holds as a tenant in common', isCorrect: true },
      { id: 'c', text: 'The third party becomes a joint tenant with full survivorship rights', isCorrect: false },
      { id: 'd', text: 'The conveyance triggers an automatic partition of the entire property', isCorrect: false },
    ],
    explanation:
      'A joint tenant has the right to convey their interest unilaterally. However, such a conveyance severs the joint tenancy as to that share because the unity of time and title is broken. The new owner becomes a tenant in common with the remaining joint tenants, who continue to hold joint tenancy among themselves.',
    difficulty: 'hard',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-008',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia\'s Property Owners\' Association Act, a purchaser of a property in a POA has the right to cancel the contract within how many days after receiving the association disclosure packet?',
    options: [
      { id: 'a', text: '3 calendar days', isCorrect: true },
      { id: 'b', text: '5 business days', isCorrect: false },
      { id: 'c', text: '7 calendar days', isCorrect: false },
      { id: 'd', text: '10 business days', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Property Owners\' Association Act grants purchasers a 3-day right of cancellation after receiving the HOA/POA disclosure packet. This rescission period allows buyers to review association documents, fees, rules, and financial statements before committing to the purchase.',
    difficulty: 'hard',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-009',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia property is held in a land trust. Which of the following statements is TRUE?',
    options: [
      { id: 'a', text: 'The trustee holds legal title while the beneficiary holds equitable title', isCorrect: true },
      { id: 'b', text: 'The beneficiary holds legal title and the trustee holds equitable title', isCorrect: false },
      { id: 'c', text: 'Both the trustee and beneficiary hold legal title as joint tenants', isCorrect: false },
      { id: 'd', text: 'Neither party holds legal title until the trust is dissolved', isCorrect: false },
    ],
    explanation:
      'In a land trust, the trustee holds legal (or bare) title to the property, while the beneficiary retains equitable title and the rights to direct the trustee and receive profits. This arrangement provides privacy because the beneficiary\'s name does not appear in public records.',
    difficulty: 'hard',
    topicTag: 'property-ownership',
  },
  {
    id: 'q-propown-010',
    chapterId: 'forms-of-property-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'In a Virginia timeshare arrangement, purchasers typically receive:',
    options: [
      { id: 'a', text: 'Fee simple ownership of the entire property for a limited period each year', isCorrect: false },
      { id: 'b', text: 'A right-to-use interest or a deeded fractional interest in the property', isCorrect: true },
      { id: 'c', text: 'A life estate limited to certain weeks of the year', isCorrect: false },
      { id: 'd', text: 'A leasehold interest that automatically renews every 5 years', isCorrect: false },
    ],
    explanation:
      'Virginia timeshare interests can be structured as either a deeded ownership (fee simple fractional interest) or a right-to-use arrangement (contractual right to occupy for specific periods). The Virginia Real Estate Time-Share Act governs these interests and provides consumer protections including a rescission period.',
    difficulty: 'medium',
    topicTag: 'property-ownership',
  },
]

// ── Chapter: legal-descriptions-surveys (10 questions) ──────────────────────

const legalDescriptionsQuestions: QuizQuestion[] = [
  {
    id: 'q-legdesc-001',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'Which method of legal description uses a starting point, compass directions, and distances to define property boundaries?',
    options: [
      { id: 'a', text: 'Rectangular (government) survey system', isCorrect: false },
      { id: 'b', text: 'Metes and bounds', isCorrect: true },
      { id: 'c', text: 'Lot and block (recorded plat)', isCorrect: false },
      { id: 'd', text: 'Tax parcel identification', isCorrect: false },
    ],
    explanation:
      'The metes and bounds system describes property boundaries using a point of beginning (POB), compass bearings (directions), and distances measured along each boundary line. It is the oldest method of legal description and is commonly used in Virginia and other eastern states with irregular property shapes.',
    difficulty: 'easy',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-002',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'In a metes and bounds legal description, the "point of beginning" (POB) must:',
    options: [
      { id: 'a', text: 'Be located at the geographic center of the parcel', isCorrect: false },
      { id: 'b', text: 'Be an identifiable, fixed point from which the description starts and returns', isCorrect: true },
      { id: 'c', text: 'Be approved and registered with the county assessor before use', isCorrect: false },
      { id: 'd', text: 'Always be located at the northwest corner of the property', isCorrect: false },
    ],
    explanation:
      'The point of beginning is a fixed, identifiable location where the boundary description starts. The description must trace the entire perimeter and return (close) to the POB. If the description fails to close, the legal description may be considered defective.',
    difficulty: 'easy',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-003',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'The lot and block (recorded plat) method of legal description is most commonly used for:',
    options: [
      { id: 'a', text: 'Large rural agricultural parcels', isCorrect: false },
      { id: 'b', text: 'Government-owned wilderness areas', isCorrect: false },
      { id: 'c', text: 'Properties in subdivisions and planned developments', isCorrect: true },
      { id: 'd', text: 'Properties described by metes and bounds that lack a survey', isCorrect: false },
    ],
    explanation:
      'The lot and block system references a recorded plat (map) filed with the local jurisdiction. It is most commonly used in subdivisions where the developer has surveyed the land, divided it into lots and blocks, and recorded the plat. The legal description then references the lot number, block number, subdivision name, and recording information.',
    difficulty: 'easy',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-004',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia property survey reveals that a neighbor\'s fence extends 4 feet onto the subject property. This encroachment would typically be identified on a:',
    options: [
      { id: 'a', text: 'Topographic survey only', isCorrect: false },
      { id: 'b', text: 'Boundary survey or ALTA/NSPS survey', isCorrect: true },
      { id: 'c', text: 'Phase I environmental site assessment', isCorrect: false },
      { id: 'd', text: 'Tax assessment map', isCorrect: false },
    ],
    explanation:
      'A boundary survey establishes the exact property lines and identifies encroachments, easements, and other physical features that cross boundary lines. An ALTA/NSPS survey provides even more comprehensive detail. Tax assessment maps are approximate and do not have the precision to identify encroachments.',
    difficulty: 'medium',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-005',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'In the rectangular (government) survey system, a section contains how many acres?',
    options: [
      { id: 'a', text: '36 acres', isCorrect: false },
      { id: 'b', text: '160 acres', isCorrect: false },
      { id: 'c', text: '320 acres', isCorrect: false },
      { id: 'd', text: '640 acres', isCorrect: true },
    ],
    explanation:
      'A section in the rectangular survey system is one square mile, containing 640 acres. A township consists of 36 sections. While Virginia primarily uses metes and bounds, understanding the rectangular survey system is still tested on the national portion of the PSI exam.',
    difficulty: 'medium',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-006',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is TRUE regarding a Virginia property\'s legal description in a deed?',
    options: [
      { id: 'a', text: 'A street address alone is sufficient as a legal description', isCorrect: false },
      { id: 'b', text: 'The legal description must be specific enough to identify the property without ambiguity', isCorrect: true },
      { id: 'c', text: 'A tax map parcel number is always an acceptable legal description for conveyance', isCorrect: false },
      { id: 'd', text: 'Legal descriptions are only required for commercial properties, not residential', isCorrect: false },
    ],
    explanation:
      'A valid deed in Virginia must contain a legal description sufficient to identify the property without ambiguity. Street addresses and tax parcel numbers alone are generally insufficient because they can change and lack the precision needed for legal conveyance. A metes and bounds description, lot and block reference, or other recognized legal description method is required.',
    difficulty: 'medium',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-007',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'When a metes and bounds description contains a discrepancy between the stated distance and a monument (natural or artificial marker), which generally takes precedence?',
    options: [
      { id: 'a', text: 'The stated distance always controls', isCorrect: false },
      { id: 'b', text: 'The monument generally takes precedence over the stated distance', isCorrect: true },
      { id: 'c', text: 'The compass bearing controls over both distance and monuments', isCorrect: false },
      { id: 'd', text: 'The most recently recorded description controls regardless of content', isCorrect: false },
    ],
    explanation:
      'When there is a conflict in a metes and bounds description, courts generally follow a hierarchy of priority: natural monuments, artificial monuments, courses (compass directions), distances, and finally area (acreage). Monuments are considered more reliable because distances can contain measurement errors.',
    difficulty: 'hard',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-008',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'An ALTA/NSPS land title survey differs from a standard boundary survey primarily because it:',
    options: [
      { id: 'a', text: 'Is less detailed and less expensive than a boundary survey', isCorrect: false },
      { id: 'b', text: 'Includes additional items required by the title insurance company such as easements, setbacks, and zoning information', isCorrect: true },
      { id: 'c', text: 'Does not need to be performed by a licensed surveyor', isCorrect: false },
      { id: 'd', text: 'Only shows above-ground improvements without boundary lines', isCorrect: false },
    ],
    explanation:
      'An ALTA/NSPS survey meets standards established by the American Land Title Association and the National Society of Professional Surveyors. It includes boundary lines plus additional details such as easements, encroachments, setback lines, zoning classifications, and flood zone information that title insurance companies require for issuing policies.',
    difficulty: 'hard',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-009',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'A surveyor discovers that a property description "does not close," meaning the boundary lines do not return to the point of beginning. What is the most likely consequence?',
    options: [
      { id: 'a', text: 'The property is automatically absorbed by the adjacent landowner', isCorrect: false },
      { id: 'b', text: 'The legal description is considered defective and may need to be corrected by a corrective deed', isCorrect: true },
      { id: 'c', text: 'The surveyor must extend the last boundary line to force closure', isCorrect: false },
      { id: 'd', text: 'The title insurance company is liable for the gap in coverage', isCorrect: false },
    ],
    explanation:
      'A metes and bounds description that fails to close is defective because it does not adequately define the boundaries of the property. This can create title issues and may need to be corrected through a corrective deed or quiet title action. A surveyor cannot unilaterally alter the description to force closure.',
    difficulty: 'hard',
    topicTag: 'legal-descriptions',
  },
  {
    id: 'q-legdesc-010',
    chapterId: 'legal-descriptions-surveys',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, recorded plats for new subdivisions must be approved by:',
    options: [
      { id: 'a', text: 'The Virginia Real Estate Board before recording', isCorrect: false },
      { id: 'b', text: 'The local governing body or its designated subdivision agent', isCorrect: true },
      { id: 'c', text: 'The Virginia Department of Transportation exclusively', isCorrect: false },
      { id: 'd', text: 'Only the developer\'s attorney, with no government approval required', isCorrect: false },
    ],
    explanation:
      'Under Virginia\'s subdivision ordinances, plats for new subdivisions must be reviewed and approved by the local governing body (county board of supervisors or city council) or its designated agent, such as the planning commission. This ensures compliance with local zoning, road standards, and infrastructure requirements.',
    difficulty: 'medium',
    topicTag: 'legal-descriptions',
  },
]

// ── Chapter: land-use-controls-zoning (10 questions) ────────────────────────

const landUseQuestions: QuizQuestion[] = [
  {
    id: 'q-landuse-001',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'The legal authority for local governments in Virginia to enact zoning ordinances is derived from:',
    options: [
      { id: 'a', text: 'The United States Constitution\'s Commerce Clause', isCorrect: false },
      { id: 'b', text: 'The state\'s police power as delegated to localities', isCorrect: true },
      { id: 'c', text: 'Federal Housing Administration regulations', isCorrect: false },
      { id: 'd', text: 'The Virginia Real Estate Board\'s rulemaking authority', isCorrect: false },
    ],
    explanation:
      'Zoning authority in Virginia comes from the state\'s police power, which the General Assembly delegates to local governments through enabling legislation. This power allows localities to regulate land use for the health, safety, and welfare of the community. The federal Constitution does not directly grant zoning authority.',
    difficulty: 'easy',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-002',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner wants to build a commercial structure on land zoned for residential use. The owner should apply for a:',
    options: [
      { id: 'a', text: 'Building permit', isCorrect: false },
      { id: 'b', text: 'Zoning variance or rezoning', isCorrect: true },
      { id: 'c', text: 'Certificate of occupancy', isCorrect: false },
      { id: 'd', text: 'Title insurance endorsement', isCorrect: false },
    ],
    explanation:
      'To use property in a manner not permitted by current zoning, the owner must seek either a rezoning (change in the zoning classification) or a variance (exception to the existing zoning rules). A variance typically requires showing a hardship, while rezoning involves a legislative change to the zoning map.',
    difficulty: 'easy',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-003',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'A property that was legally used as a gas station before the area was rezoned to residential is allowed to continue operating. This is an example of:',
    options: [
      { id: 'a', text: 'A special use permit', isCorrect: false },
      { id: 'b', text: 'Spot zoning', isCorrect: false },
      { id: 'c', text: 'A nonconforming use (grandfathered use)', isCorrect: true },
      { id: 'd', text: 'An illegal variance', isCorrect: false },
    ],
    explanation:
      'A nonconforming use is a pre-existing land use that was legal before a zoning change but no longer conforms to the new zoning regulations. Virginia law generally allows nonconforming uses to continue (grandfathering), but they typically cannot be expanded or, if abandoned for a specified period, may lose their protected status.',
    difficulty: 'easy',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-004',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'Restrictive covenants that run with the land in a Virginia subdivision are considered:',
    options: [
      { id: 'a', text: 'Public (government) land use controls', isCorrect: false },
      { id: 'b', text: 'Private land use controls', isCorrect: true },
      { id: 'c', text: 'Temporary zoning conditions that expire after 10 years', isCorrect: false },
      { id: 'd', text: 'Unenforceable agreements between original lot purchasers only', isCorrect: false },
    ],
    explanation:
      'Restrictive covenants, also called deed restrictions or CC&Rs, are private land use controls created by developers or property owners. They run with the land and bind subsequent purchasers. Unlike zoning (a public control), covenants are enforced through civil action by property owners or homeowners\' associations.',
    difficulty: 'medium',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-005',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'When both a zoning ordinance and a restrictive covenant apply to the same property but impose different requirements, which controls?',
    options: [
      { id: 'a', text: 'The zoning ordinance always overrides the covenant', isCorrect: false },
      { id: 'b', text: 'The more restrictive of the two applies', isCorrect: true },
      { id: 'c', text: 'The covenant always overrides the zoning ordinance', isCorrect: false },
      { id: 'd', text: 'The property owner may choose which to follow', isCorrect: false },
    ],
    explanation:
      'When a zoning ordinance and a restrictive covenant both apply to a property, the more restrictive requirement controls. For example, if zoning allows structures up to 35 feet but a covenant limits height to 25 feet, the 25-foot covenant limit applies. Property owners must comply with both.',
    difficulty: 'medium',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-006',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'A special use permit (also called a conditional use permit) in Virginia is typically granted by:',
    options: [
      { id: 'a', text: 'The state legislature', isCorrect: false },
      { id: 'b', text: 'The local governing body (board of supervisors or city council)', isCorrect: true },
      { id: 'c', text: 'The Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'The property owner\'s attorney through a self-certification process', isCorrect: false },
    ],
    explanation:
      'Special use permits allow specific uses within a zoning district that are not permitted by right but may be appropriate with conditions. In Virginia, they are granted by the local governing body (board of supervisors or city council) after a public hearing and review by the planning commission.',
    difficulty: 'medium',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-007',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'Eminent domain allows the government to take private property for public use. Under the Fifth Amendment and Virginia law, the property owner is entitled to:',
    options: [
      { id: 'a', text: 'Replacement property of equal or greater value', isCorrect: false },
      { id: 'b', text: 'Just compensation (fair market value)', isCorrect: true },
      { id: 'c', text: 'Double the assessed tax value of the property', isCorrect: false },
      { id: 'd', text: 'Compensation only if the entire property is taken', isCorrect: false },
    ],
    explanation:
      'Both the Fifth Amendment to the U.S. Constitution and Virginia law require that property owners receive just compensation when property is taken through eminent domain. Just compensation is generally the fair market value of the property at the time of the taking. Virginia further strengthened property rights with a 2012 constitutional amendment limiting the use of eminent domain.',
    difficulty: 'medium',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-008',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'A local government enacts a zoning ordinance that effectively deprives a property owner of all economically beneficial use of the property without compensation. This may constitute:',
    options: [
      { id: 'a', text: 'A valid exercise of police power with no legal recourse', isCorrect: false },
      { id: 'b', text: 'A regulatory taking (inverse condemnation)', isCorrect: true },
      { id: 'c', text: 'An eminent domain proceeding', isCorrect: false },
      { id: 'd', text: 'A nonconforming use designation', isCorrect: false },
    ],
    explanation:
      'When a government regulation goes so far as to deprive a property owner of all economically beneficial use, it may constitute a regulatory taking (inverse condemnation) under the landmark case Lucas v. South Carolina Coastal Council. The owner would be entitled to just compensation. This differs from eminent domain, where the government initiates the taking.',
    difficulty: 'hard',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-009',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, a property owner seeking a zoning variance must typically demonstrate:',
    options: [
      { id: 'a', text: 'That the proposed use will increase property tax revenue', isCorrect: false },
      { id: 'b', text: 'That strict application of the ordinance would cause an undue hardship due to the property\'s unique characteristics', isCorrect: true },
      { id: 'c', text: 'That a majority of neighbors support the requested change', isCorrect: false },
      { id: 'd', text: 'That the property has been zoned incorrectly since its original designation', isCorrect: false },
    ],
    explanation:
      'To obtain a variance in Virginia, the applicant must show that the strict application of the zoning ordinance would create an undue hardship related to the property\'s physical characteristics (shape, topography, etc.) and not a self-created hardship. Financial hardship alone or personal convenience is generally insufficient.',
    difficulty: 'hard',
    topicTag: 'land-use',
  },
  {
    id: 'q-landuse-010',
    chapterId: 'land-use-controls-zoning',
    quizType: 'chapter_quiz',
    questionText:
      'Spot zoning is generally considered:',
    options: [
      { id: 'a', text: 'A valid and common zoning practice used to accommodate individual property owners', isCorrect: false },
      { id: 'b', text: 'A required step in the subdivision approval process', isCorrect: false },
      { id: 'c', text: 'Illegal or invalid because it singles out a small parcel for different treatment without justification', isCorrect: true },
      { id: 'd', text: 'A form of variance granted by the Board of Zoning Appeals', isCorrect: false },
    ],
    explanation:
      'Spot zoning refers to rezoning a small parcel of land in a way that is inconsistent with the surrounding zoning and the comprehensive plan, typically to benefit a single property owner. Courts generally view spot zoning as arbitrary and invalid because it violates the principle that zoning should be applied uniformly and in accordance with a comprehensive plan.',
    difficulty: 'hard',
    topicTag: 'land-use',
  },
]

// ── Chapter: environmental-regulations (10 questions) ───────────────────────

const environmentalQuestions: QuizQuestion[] = [
  {
    id: 'q-enviro-001',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Under federal law, a seller of a home built before what year must provide a lead-based paint disclosure to the buyer?',
    options: [
      { id: 'a', text: '1960', isCorrect: false },
      { id: 'b', text: '1978', isCorrect: true },
      { id: 'c', text: '1985', isCorrect: false },
      { id: 'd', text: '1992', isCorrect: false },
    ],
    explanation:
      'The Residential Lead-Based Paint Hazard Reduction Act of 1992 requires sellers and landlords of residential properties built before 1978 to disclose known lead-based paint hazards and provide an EPA-approved pamphlet. Lead-based paint was banned for residential use in 1978.',
    difficulty: 'easy',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-002',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'A Phase I Environmental Site Assessment (ESA) is primarily designed to:',
    options: [
      { id: 'a', text: 'Remove contamination from the property', isCorrect: false },
      { id: 'b', text: 'Identify potential or existing environmental contamination through research and inspection without physical testing', isCorrect: true },
      { id: 'c', text: 'Certify the property as free of all environmental hazards', isCorrect: false },
      { id: 'd', text: 'Test soil and groundwater samples for contamination levels', isCorrect: false },
    ],
    explanation:
      'A Phase I ESA involves a review of historical records, site inspection, and interviews to identify recognized environmental conditions (RECs). It does not include physical sampling or testing of soil, water, or air. If the Phase I identifies concerns, a Phase II ESA with actual sampling may be recommended.',
    difficulty: 'easy',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-003',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Which federal agency administers the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), commonly known as Superfund?',
    options: [
      { id: 'a', text: 'Department of Housing and Urban Development (HUD)', isCorrect: false },
      { id: 'b', text: 'Environmental Protection Agency (EPA)', isCorrect: true },
      { id: 'c', text: 'Department of the Interior', isCorrect: false },
      { id: 'd', text: 'Federal Emergency Management Agency (FEMA)', isCorrect: false },
    ],
    explanation:
      'CERCLA (Superfund) is administered by the EPA and establishes liability for the cleanup of hazardous waste sites. Under CERCLA, liability is strict, joint and several, and retroactive, meaning current and past property owners can be held responsible for cleanup costs even if they did not cause the contamination.',
    difficulty: 'easy',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-004',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Under CERCLA (Superfund), liability for environmental cleanup is characterized as:',
    options: [
      { id: 'a', text: 'Limited to the party that caused the contamination', isCorrect: false },
      { id: 'b', text: 'Strict, joint and several, and retroactive', isCorrect: true },
      { id: 'c', text: 'Applicable only to commercial properties, not residential', isCorrect: false },
      { id: 'd', text: 'Limited to cleanup costs under $1 million', isCorrect: false },
    ],
    explanation:
      'CERCLA imposes strict liability (no fault required), joint and several liability (any single responsible party can be held liable for the entire cleanup cost), and retroactive liability (applies to contamination that occurred before CERCLA was enacted). This makes environmental due diligence critical for property purchasers.',
    difficulty: 'medium',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-005',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Which substance, commonly found in older building insulation and floor tiles, is regulated due to its link to lung disease and cancer when fibers become airborne?',
    options: [
      { id: 'a', text: 'Radon', isCorrect: false },
      { id: 'b', text: 'Asbestos', isCorrect: true },
      { id: 'c', text: 'Carbon monoxide', isCorrect: false },
      { id: 'd', text: 'Formaldehyde', isCorrect: false },
    ],
    explanation:
      'Asbestos is a naturally occurring mineral that was widely used in building materials for its fire-resistant properties. When disturbed, asbestos fibers become airborne and can cause serious lung diseases including mesothelioma. Federal regulations require proper identification and management of asbestos in buildings, especially during renovation or demolition.',
    difficulty: 'medium',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-006',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, underground storage tanks (USTs) containing petroleum products are regulated by:',
    options: [
      { id: 'a', text: 'The Virginia Real Estate Board', isCorrect: false },
      { id: 'b', text: 'The Virginia Department of Environmental Quality (DEQ)', isCorrect: true },
      { id: 'c', text: 'DPOR exclusively', isCorrect: false },
      { id: 'd', text: 'The local homeowners\' association', isCorrect: false },
    ],
    explanation:
      'The Virginia Department of Environmental Quality (DEQ) oversees the regulation of underground storage tanks under both federal EPA guidelines and Virginia state law. UST owners must register tanks, maintain leak detection systems, and carry financial responsibility for cleanup. Leaking USTs are a common source of soil and groundwater contamination.',
    difficulty: 'medium',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-007',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Radon is a naturally occurring radioactive gas that enters buildings primarily through:',
    options: [
      { id: 'a', text: 'Municipal water supply lines', isCorrect: false },
      { id: 'b', text: 'Cracks and openings in the foundation and basement', isCorrect: true },
      { id: 'c', text: 'HVAC ductwork connected to outdoor air intakes', isCorrect: false },
      { id: 'd', text: 'Lead-based paint deterioration', isCorrect: false },
    ],
    explanation:
      'Radon is produced by the natural decay of uranium in soil and rock. It enters buildings primarily through cracks in foundations, gaps around pipes, and other openings at the ground level. Radon is the second leading cause of lung cancer in the United States, and the EPA recommends testing and mitigation when levels exceed 4 pCi/L.',
    difficulty: 'medium',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-008',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'The "innocent landowner" defense under CERCLA requires that the property purchaser:',
    options: [
      { id: 'a', text: 'Simply prove they did not personally cause the contamination', isCorrect: false },
      { id: 'b', text: 'Demonstrate they conducted appropriate inquiry (such as a Phase I ESA) before purchasing and had no knowledge of contamination', isCorrect: true },
      { id: 'c', text: 'File a disclaimer with the EPA within 30 days of closing', isCorrect: false },
      { id: 'd', text: 'Purchase environmental insurance that covers 100% of potential cleanup costs', isCorrect: false },
    ],
    explanation:
      'The innocent landowner defense protects buyers who conducted "all appropriate inquiries" (typically a Phase I ESA) before purchasing and had no reason to know of existing contamination. This defense was strengthened by the Small Business Liability Relief and Brownfields Revitalization Act of 2002. Without conducting due diligence, a purchaser cannot claim innocent landowner status.',
    difficulty: 'hard',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-009',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'A property in Virginia is located within a designated Chesapeake Bay Preservation Area. Which of the following is a likely restriction?',
    options: [
      { id: 'a', text: 'The property is exempt from local zoning ordinances', isCorrect: false },
      { id: 'b', text: 'Development is restricted in Resource Protection Areas (RPAs) near shorelines and waterways', isCorrect: true },
      { id: 'c', text: 'The property cannot be sold without EPA approval', isCorrect: false },
      { id: 'd', text: 'All existing structures must be demolished within 5 years', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Chesapeake Bay Preservation Act requires local governments to establish Chesapeake Bay Preservation Areas with Resource Protection Areas (RPAs) and Resource Management Areas (RMAs). RPAs include a 100-foot buffer along shorelines, tidal wetlands, and other sensitive areas where development is significantly restricted to protect water quality.',
    difficulty: 'hard',
    topicTag: 'environmental',
  },
  {
    id: 'q-enviro-010',
    chapterId: 'environmental-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Under the National Environmental Policy Act (NEPA), which of the following triggers the requirement for an Environmental Impact Statement (EIS)?',
    options: [
      { id: 'a', text: 'Any residential sale involving a property over 50 years old', isCorrect: false },
      { id: 'b', text: 'Any private development project exceeding $1 million in cost', isCorrect: false },
      { id: 'c', text: 'Major federal actions that may significantly affect the quality of the human environment', isCorrect: true },
      { id: 'd', text: 'All commercial property transactions in Virginia', isCorrect: false },
    ],
    explanation:
      'NEPA requires an Environmental Impact Statement for major federal actions (projects involving federal funding, permits, or land) that may significantly affect the environment. NEPA does not apply to purely private actions. The EIS process includes public comment periods and analysis of alternatives to minimize environmental harm.',
    difficulty: 'hard',
    topicTag: 'environmental',
  },
]

// ── Chapter: contract-fundamentals (10 questions) ───────────────────────────

const contractFundamentalsQuestions: QuizQuestion[] = [
  {
    id: 'q-contract-001',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is NOT a required element for a valid real estate contract in Virginia?',
    options: [
      { id: 'a', text: 'Offer and acceptance', isCorrect: false },
      { id: 'b', text: 'Consideration', isCorrect: false },
      { id: 'c', text: 'Notarization', isCorrect: true },
      { id: 'd', text: 'Legal capacity of the parties', isCorrect: false },
    ],
    explanation:
      'The essential elements of a valid contract are offer and acceptance, consideration, legal capacity, lawful purpose, and (for real estate) a written instrument under the Statute of Frauds. Notarization is required for recording a deed but is not an element of contract validity.',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-002',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s Statute of Frauds requires that real estate contracts be:',
    options: [
      { id: 'a', text: 'Recorded with the local circuit court clerk', isCorrect: false },
      { id: 'b', text: 'In writing and signed by the party to be charged', isCorrect: true },
      { id: 'c', text: 'Witnessed by at least two disinterested parties', isCorrect: false },
      { id: 'd', text: 'Approved by a licensed attorney before execution', isCorrect: false },
    ],
    explanation:
      'The Statute of Frauds, codified in Virginia Code Section 11-2, requires that contracts for the sale of real property be in writing and signed by the party to be charged (the party against whom enforcement is sought). Oral agreements for real estate transactions are generally unenforceable.',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-003',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'A contract entered into by a person who has been declared legally incompetent by a court is:',
    options: [
      { id: 'a', text: 'Valid but unenforceable', isCorrect: false },
      { id: 'b', text: 'Voidable at the option of the incompetent party', isCorrect: false },
      { id: 'c', text: 'Void (has no legal effect)', isCorrect: true },
      { id: 'd', text: 'Valid if the other party was unaware of the incompetency', isCorrect: false },
    ],
    explanation:
      'A contract entered into by a person adjudicated (court-declared) incompetent is void from the start and has no legal effect. This differs from a contract with a minor or an intoxicated person, which is typically voidable (valid until the affected party chooses to disaffirm it).',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-004',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'What is the difference between a void contract and a voidable contract?',
    options: [
      { id: 'a', text: 'A void contract can be ratified; a voidable contract cannot', isCorrect: false },
      { id: 'b', text: 'A void contract has no legal effect; a voidable contract is valid until one party elects to disaffirm it', isCorrect: true },
      { id: 'c', text: 'Both terms mean the same thing and are used interchangeably', isCorrect: false },
      { id: 'd', text: 'A voidable contract is always illegal; a void contract may still be enforceable', isCorrect: false },
    ],
    explanation:
      'A void contract is one that was never legally valid and has no legal effect (e.g., a contract for an illegal purpose). A voidable contract is valid and enforceable until the aggrieved party chooses to disaffirm or cancel it (e.g., a contract signed by a minor). Understanding this distinction is essential for the exam.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-005',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'In contract law, "consideration" is best defined as:',
    options: [
      { id: 'a', text: 'The time period allowed for the parties to perform their obligations', isCorrect: false },
      { id: 'b', text: 'Something of value exchanged between the parties to form a binding agreement', isCorrect: true },
      { id: 'c', text: 'The written acknowledgment of the contract by a notary public', isCorrect: false },
      { id: 'd', text: 'A deposit held in escrow by a neutral third party', isCorrect: false },
    ],
    explanation:
      'Consideration is something of value that each party agrees to give or do (or refrain from doing) as part of the agreement. In a real estate purchase contract, the buyer\'s consideration is the purchase price (or promise to pay), and the seller\'s consideration is the transfer of the property. A contract without consideration is generally unenforceable.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-006',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'An option contract in real estate gives the optionee (buyer) the right to:',
    options: [
      { id: 'a', text: 'Force the seller to reduce the price at any time during the option period', isCorrect: false },
      { id: 'b', text: 'Purchase the property within a specified time period at a predetermined price', isCorrect: true },
      { id: 'c', text: 'Automatically take title to the property when the option period expires', isCorrect: false },
      { id: 'd', text: 'Lease the property with a mandatory obligation to purchase at the end of the lease', isCorrect: false },
    ],
    explanation:
      'An option contract gives the optionee (potential buyer) the right, but not the obligation, to purchase the property at a specified price within a defined time period. The optionor (seller) receives consideration for granting the option and is obligated to sell if the optionee exercises the option. The option is a unilateral contract until exercised.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-007',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'A bilateral contract is one in which:',
    options: [
      { id: 'a', text: 'Only one party makes a promise to perform', isCorrect: false },
      { id: 'b', text: 'Both parties exchange promises to perform', isCorrect: true },
      { id: 'c', text: 'Performance by one party is optional', isCorrect: false },
      { id: 'd', text: 'The contract is between two licensed real estate agents', isCorrect: false },
    ],
    explanation:
      'A bilateral contract involves mutual promises from both parties. A standard real estate purchase agreement is a bilateral contract: the buyer promises to pay the purchase price and the seller promises to deliver title. In contrast, a unilateral contract involves a promise by one party that is accepted through the other party\'s performance (e.g., an open listing agreement).',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-008',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer signs a purchase contract under duress (threat of physical harm). This contract is:',
    options: [
      { id: 'a', text: 'Valid and enforceable because it was signed', isCorrect: false },
      { id: 'b', text: 'Void because duress makes any agreement unenforceable', isCorrect: false },
      { id: 'c', text: 'Voidable at the option of the party subjected to duress', isCorrect: true },
      { id: 'd', text: 'Enforceable only if the duress is not documented', isCorrect: false },
    ],
    explanation:
      'A contract signed under duress is voidable at the option of the party who was coerced. The affected party may choose to ratify (affirm) or disaffirm (void) the contract. The contract is not automatically void; it remains valid until the aggrieved party takes action to rescind it.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-009',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'The equitable doctrine of "specific performance" in Virginia real estate allows a court to:',
    options: [
      { id: 'a', text: 'Award triple damages to the non-breaching party', isCorrect: false },
      { id: 'b', text: 'Order the breaching party to complete the contract as agreed', isCorrect: true },
      { id: 'c', text: 'Automatically extend the closing date by 90 days', isCorrect: false },
      { id: 'd', text: 'Void the contract and return both parties to their original positions', isCorrect: false },
    ],
    explanation:
      'Specific performance is an equitable remedy that compels the breaching party to fulfill the terms of the contract. It is commonly available in real estate transactions because each property is considered unique, making monetary damages inadequate. A court may order the seller to convey the property or the buyer to complete the purchase.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
  {
    id: 'q-contract-010',
    chapterId: 'contract-fundamentals',
    quizType: 'chapter_quiz',
    questionText:
      'Under the parol evidence rule, once parties have executed a written real estate contract, oral agreements made prior to or at the time of signing:',
    options: [
      { id: 'a', text: 'Are fully enforceable as long as both parties agree they were made', isCorrect: false },
      { id: 'b', text: 'May only be enforced if recorded with the circuit court clerk', isCorrect: false },
      { id: 'c', text: 'Are generally inadmissible to contradict or alter the terms of the written agreement', isCorrect: true },
      { id: 'd', text: 'Supersede the written contract if they are more favorable to the buyer', isCorrect: false },
    ],
    explanation:
      'The parol evidence rule prevents parties from introducing prior or contemporaneous oral agreements that contradict the terms of a final written contract. This rule reinforces the importance of ensuring all agreed terms are included in the written agreement. Exceptions exist for fraud, mistake, ambiguity, or subsequent modifications.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
]

// ── Chapter: purchase-agreements (10 questions) ─────────────────────────────

const purchaseAgreementQuestions: QuizQuestion[] = [
  {
    id: 'q-purchase-001',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'In a Virginia residential purchase agreement, earnest money deposits must be deposited into an escrow account within what time frame, unless otherwise agreed?',
    options: [
      { id: 'a', text: 'Within 24 hours of contract ratification', isCorrect: false },
      { id: 'b', text: 'Within 5 banking days of contract ratification', isCorrect: true },
      { id: 'c', text: 'Within 10 calendar days of contract ratification', isCorrect: false },
      { id: 'd', text: 'Before the home inspection is completed', isCorrect: false },
    ],
    explanation:
      'Under Virginia real estate regulations, earnest money deposits must be placed in an escrow account within 5 banking days of ratification of the contract, unless the parties agree otherwise in writing. Failure to properly handle escrow funds is a violation of Virginia license law and can result in disciplinary action.',
    difficulty: 'easy',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-002',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Residential Property Disclosure Act requires the seller to provide:',
    options: [
      { id: 'a', text: 'A professional home inspection report', isCorrect: false },
      { id: 'b', text: 'A disclaimer statement or a property condition disclosure statement', isCorrect: true },
      { id: 'c', text: 'A warranty guaranteeing the property is free of defects', isCorrect: false },
      { id: 'd', text: 'A certificate of occupancy from the local building department', isCorrect: false },
    ],
    explanation:
      'The Virginia Residential Property Disclosure Act (Virginia Code Section 55.1-700 et seq.) requires sellers to deliver either a residential property disclosure statement (disclosing known conditions) or a disclaimer statement (stating the property is sold "as-is" without representations). The buyer receives this before or at the time of the contract.',
    difficulty: 'easy',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-003',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A purchase agreement is considered "ratified" in Virginia when:',
    options: [
      { id: 'a', text: 'The buyer submits the initial offer', isCorrect: false },
      { id: 'b', text: 'The last party to accept signs the agreement and the other party is notified of acceptance', isCorrect: true },
      { id: 'c', text: 'The earnest money deposit is deposited into escrow', isCorrect: false },
      { id: 'd', text: 'The home inspection has been completed satisfactorily', isCorrect: false },
    ],
    explanation:
      'A purchase agreement becomes ratified when the last party to accept signs the contract and the accepting party\'s agent notifies the other party (or their agent) of the acceptance. Until ratification, the offer can be withdrawn. The date of ratification typically triggers various contractual deadlines.',
    difficulty: 'easy',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-004',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A financing contingency in a purchase agreement protects the buyer by:',
    options: [
      { id: 'a', text: 'Guaranteeing the buyer will receive a mortgage at the specified terms', isCorrect: false },
      { id: 'b', text: 'Allowing the buyer to terminate the contract without penalty if they cannot obtain financing within the specified terms and time frame', isCorrect: true },
      { id: 'c', text: 'Requiring the seller to provide seller financing if the buyer is denied a loan', isCorrect: false },
      { id: 'd', text: 'Reducing the purchase price by the amount of the down payment', isCorrect: false },
    ],
    explanation:
      'A financing contingency allows the buyer to exit the contract and receive a refund of their earnest money if they are unable to secure mortgage financing on the terms specified in the agreement within the stated time frame. Without this contingency, a buyer who fails to obtain financing may forfeit their deposit.',
    difficulty: 'medium',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-005',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, which of the following items is typically considered a fixture that would convey with the property unless specifically excluded in the purchase agreement?',
    options: [
      { id: 'a', text: 'A freestanding refrigerator', isCorrect: false },
      { id: 'b', text: 'A built-in dishwasher', isCorrect: true },
      { id: 'c', text: 'A portable window air conditioning unit', isCorrect: false },
      { id: 'd', text: 'A decorative area rug', isCorrect: false },
    ],
    explanation:
      'Fixtures are items permanently attached to the property that convey with the sale unless specifically excluded. A built-in dishwasher is considered a fixture because it is permanently installed. Freestanding appliances, portable items, and decorative items are generally considered personal property. The purchase agreement should clearly address disputed items.',
    difficulty: 'medium',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-006',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A home inspection contingency in a Virginia purchase agreement typically allows the buyer to:',
    options: [
      { id: 'a', text: 'Demand that the seller make all repairs regardless of cost', isCorrect: false },
      { id: 'b', text: 'Negotiate repairs, request a price reduction, or void the contract based on inspection findings within the contingency period', isCorrect: true },
      { id: 'c', text: 'Extend the closing date indefinitely until all defects are corrected', isCorrect: false },
      { id: 'd', text: 'Reduce the earnest money deposit by the estimated repair costs', isCorrect: false },
    ],
    explanation:
      'A home inspection contingency gives the buyer the right to have the property professionally inspected and, based on the findings, negotiate repairs with the seller, request a credit or price reduction, or void the contract entirely within the contingency period. The seller is not obligated to agree to repair demands.',
    difficulty: 'medium',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-007',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'When a purchase agreement includes an appraisal contingency and the property appraises below the contract price, the buyer may:',
    options: [
      { id: 'a', text: 'Only proceed with the purchase at the original contract price', isCorrect: false },
      { id: 'b', text: 'Renegotiate the price, pay the difference in cash, or void the contract', isCorrect: true },
      { id: 'c', text: 'Require the lender to increase the loan amount to cover the difference', isCorrect: false },
      { id: 'd', text: 'Automatically receive a credit from the seller for the difference', isCorrect: false },
    ],
    explanation:
      'An appraisal contingency protects the buyer when the property appraises for less than the contract price. The buyer typically has options: negotiate a lower price, pay the difference out of pocket, or terminate the contract with their earnest money returned. The lender will not loan more than the appraised value.',
    difficulty: 'medium',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-008',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, the "time is of the essence" clause in a purchase agreement means:',
    options: [
      { id: 'a', text: 'The contract must be signed within one business day of the initial offer', isCorrect: false },
      { id: 'b', text: 'All deadlines and dates in the contract are strictly enforced, and failure to meet them may constitute a breach', isCorrect: true },
      { id: 'c', text: 'The seller must accept or reject the offer within 24 hours', isCorrect: false },
      { id: 'd', text: 'The closing must occur within 30 days of ratification regardless of other terms', isCorrect: false },
    ],
    explanation:
      'A "time is of the essence" clause makes all dates and deadlines in the contract material terms. If either party fails to perform by the specified date, the other party may declare a breach. Without this clause, courts may allow reasonable delays. This clause is standard in most Virginia purchase agreements.',
    difficulty: 'hard',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-009',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer and seller execute a purchase agreement that includes a "merger clause." At closing, which of the following is TRUE?',
    options: [
      { id: 'a', text: 'All terms of the purchase agreement survive closing and remain enforceable', isCorrect: false },
      { id: 'b', text: 'The deed becomes the controlling document, and most contract terms merge into the deed and are extinguished', isCorrect: true },
      { id: 'c', text: 'The purchase agreement supersedes the deed in all matters', isCorrect: false },
      { id: 'd', text: 'The merger clause has no legal effect in Virginia', isCorrect: false },
    ],
    explanation:
      'Under the doctrine of merger, when the deed is delivered and accepted at closing, the terms of the purchase agreement are merged into the deed. This means most contract terms are extinguished and cannot be enforced after closing. Exceptions include terms that the parties expressly agree will survive closing, such as warranties or repair agreements.',
    difficulty: 'hard',
    topicTag: 'purchase-agreements',
  },
  {
    id: 'q-purchase-010',
    chapterId: 'purchase-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'If a Virginia purchase agreement does not specify who will hold the earnest money deposit, the deposit is typically held by:',
    options: [
      { id: 'a', text: 'The buyer\'s personal bank account', isCorrect: false },
      { id: 'b', text: 'The listing broker\'s escrow account', isCorrect: true },
      { id: 'c', text: 'The Virginia Real Estate Board\'s trust fund', isCorrect: false },
      { id: 'd', text: 'The seller directly', isCorrect: false },
    ],
    explanation:
      'When the contract does not specify who holds the deposit, Virginia practice dictates that the listing broker typically holds the earnest money in their firm\'s escrow (trust) account. Virginia law requires that brokers maintain proper escrow accounts and handle deposits in accordance with VREB regulations. Commingling escrow funds with personal or business funds is a serious violation.',
    difficulty: 'hard',
    topicTag: 'purchase-agreements',
  },
]

// ── Chapter: listing-agreements (10 questions) ──────────────────────────────

const listingAgreementQuestions: QuizQuestion[] = [
  {
    id: 'q-listing-001',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'An exclusive right-to-sell listing agreement means that the listing broker earns a commission:',
    options: [
      { id: 'a', text: 'Only if the broker personally finds the buyer', isCorrect: false },
      { id: 'b', text: 'Regardless of who sells the property, including the owner', isCorrect: true },
      { id: 'c', text: 'Only if the property sells above the listing price', isCorrect: false },
      { id: 'd', text: 'Only if the property is sold through the MLS', isCorrect: false },
    ],
    explanation:
      'Under an exclusive right-to-sell listing, the broker earns a commission no matter who procures the buyer, even if the seller finds the buyer independently. This provides the greatest protection for the broker and is the most common type of listing agreement. The broker is motivated to actively market the property because the commission is guaranteed upon sale.',
    difficulty: 'easy',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-002',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'In an exclusive agency listing, the seller retains the right to:',
    options: [
      { id: 'a', text: 'List with multiple brokers simultaneously', isCorrect: false },
      { id: 'b', text: 'Sell the property independently without owing a commission to the listing broker', isCorrect: true },
      { id: 'c', text: 'Terminate the listing at any time without notice', isCorrect: false },
      { id: 'd', text: 'Change the listing price without the broker\'s knowledge', isCorrect: false },
    ],
    explanation:
      'An exclusive agency listing grants the broker the exclusive right to represent the seller, but the seller retains the right to sell the property themselves without paying a commission. If any broker (including other cooperating brokers) brings the buyer, the listing broker earns the commission. This is less favorable to the broker than an exclusive right-to-sell.',
    difficulty: 'easy',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-003',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia law requires that every listing agreement must include:',
    options: [
      { id: 'a', text: 'A guaranteed sale price', isCorrect: false },
      { id: 'b', text: 'A definite termination date', isCorrect: true },
      { id: 'c', text: 'A mandatory 90-day minimum term', isCorrect: false },
      { id: 'd', text: 'An automatic renewal clause', isCorrect: false },
    ],
    explanation:
      'Virginia real estate regulations require that all listing agreements contain a definite termination (expiration) date. A listing without a termination date would be considered defective. Virginia law prohibits listing agreements that automatically renew without the owner\'s express written consent. There is no mandated minimum or maximum term.',
    difficulty: 'easy',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-004',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'In an open listing agreement, the seller may:',
    options: [
      { id: 'a', text: 'List with only one broker but sell independently without a commission', isCorrect: false },
      { id: 'b', text: 'List with multiple brokers, and only the broker who procures the buyer earns a commission', isCorrect: true },
      { id: 'c', text: 'Require the listing broker to guarantee a sale within 60 days', isCorrect: false },
      { id: 'd', text: 'Refuse to allow any showings of the property', isCorrect: false },
    ],
    explanation:
      'An open listing allows the seller to engage multiple brokers simultaneously. Only the broker who actually procures a ready, willing, and able buyer earns the commission. The seller can also sell independently without owing a commission to any broker. Open listings provide the least incentive for brokers to actively market the property.',
    difficulty: 'medium',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-005',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A "protection period" (also called a safety clause or extender clause) in a listing agreement:',
    options: [
      { id: 'a', text: 'Guarantees the seller will not be sued by the broker after expiration', isCorrect: false },
      { id: 'b', text: 'Entitles the broker to a commission if a buyer who was introduced during the listing period purchases the property after the listing expires', isCorrect: true },
      { id: 'c', text: 'Prevents the seller from relisting with another broker for 6 months', isCorrect: false },
      { id: 'd', text: 'Requires the seller to reimburse the broker\'s marketing expenses if the listing expires unsold', isCorrect: false },
    ],
    explanation:
      'A protection period (safety/extender clause) protects the broker\'s right to a commission for a specified period after the listing expires if a buyer who was introduced or shown the property during the listing term subsequently purchases it. The broker typically must provide the seller with a list of protected buyers at or before expiration.',
    difficulty: 'medium',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-006',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia agency law, a listing agreement establishes what type of relationship between the seller and the listing broker?',
    options: [
      { id: 'a', text: 'An employer-employee relationship', isCorrect: false },
      { id: 'b', text: 'A fiduciary (agency) relationship', isCorrect: true },
      { id: 'c', text: 'A debtor-creditor relationship', isCorrect: false },
      { id: 'd', text: 'A landlord-tenant relationship', isCorrect: false },
    ],
    explanation:
      'A listing agreement creates a fiduciary (agency) relationship in which the broker owes the seller duties of loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care. The broker acts as the seller\'s agent and must place the seller\'s interests above their own, except where prohibited by law.',
    difficulty: 'medium',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-007',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A listing broker receives a full-price offer from a buyer. Under Virginia law, the broker must:',
    options: [
      { id: 'a', text: 'Accept the offer on behalf of the seller', isCorrect: false },
      { id: 'b', text: 'Present the offer to the seller promptly', isCorrect: true },
      { id: 'c', text: 'Reject the offer if the broker believes a higher offer is forthcoming', isCorrect: false },
      { id: 'd', text: 'Hold the offer for 48 hours to see if competing offers arrive', isCorrect: false },
    ],
    explanation:
      'Under Virginia law, the listing broker has a duty to present all offers to the seller promptly, including full-price offers. The broker cannot accept or reject offers on the seller\'s behalf (unless specifically authorized to do so in writing). The decision to accept, reject, or counter an offer belongs to the seller.',
    difficulty: 'medium',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-008',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A net listing is an arrangement where the broker\'s commission is:',
    options: [
      { id: 'a', text: 'A flat fee agreed upon at the time of listing', isCorrect: false },
      { id: 'b', text: 'The amount the property sells for above a minimum price set by the seller', isCorrect: true },
      { id: 'c', text: 'Deducted from the buyer\'s closing costs', isCorrect: false },
      { id: 'd', text: 'Paid by the buyer rather than the seller', isCorrect: false },
    ],
    explanation:
      'In a net listing, the seller sets a minimum acceptable price, and the broker\'s commission is the difference between the sale price and that minimum. Net listings are legal but discouraged in Virginia because they create an inherent conflict of interest: the broker is incentivized to sell at the highest price for their own benefit rather than the seller\'s best interest.',
    difficulty: 'hard',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-009',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, a listing agreement MUST be signed by which of the following to be enforceable?',
    options: [
      { id: 'a', text: 'The listing broker, the seller, and any prospective buyers', isCorrect: false },
      { id: 'b', text: 'All owners of the property who have authority to convey', isCorrect: true },
      { id: 'c', text: 'Only the principal broker of the listing firm', isCorrect: false },
      { id: 'd', text: 'The seller and at least two witnesses', isCorrect: false },
    ],
    explanation:
      'For a listing agreement to be enforceable and to ensure the property can actually be conveyed, all owners with authority to sell must sign. If a property is jointly owned, all co-owners must sign the listing agreement. A listing signed by only one co-owner may not be sufficient to deliver clear title at closing.',
    difficulty: 'hard',
    topicTag: 'listing-agreements',
  },
  {
    id: 'q-listing-010',
    chapterId: 'listing-agreements',
    quizType: 'chapter_quiz',
    questionText:
      'A seller tells the listing broker that the basement has flooded three times in the past year but instructs the broker not to disclose this to prospective buyers. The broker should:',
    options: [
      { id: 'a', text: 'Follow the seller\'s instructions because the broker\'s duty of obedience requires it', isCorrect: false },
      { id: 'b', text: 'Disclose the flooding to prospective buyers because the duty of honest dealing and disclosure of material facts overrides the seller\'s instruction', isCorrect: true },
      { id: 'c', text: 'Withdraw the listing immediately without disclosing the issue to anyone', isCorrect: false },
      { id: 'd', text: 'Only disclose the flooding if a buyer specifically asks about water issues', isCorrect: false },
    ],
    explanation:
      'Virginia law requires licensees to disclose material adverse facts that may affect the value or desirability of the property. Known flooding is a material fact. While the broker owes the seller a duty of obedience, this duty does not extend to concealing material facts or participating in fraud. If the seller refuses to allow disclosure, the broker should withdraw from the listing.',
    difficulty: 'hard',
    topicTag: 'listing-agreements',
  },
]

// ── Chapter: offer-counteroffer-process (10 questions) ──────────────────────

const offerCounterofferQuestions: QuizQuestion[] = [
  {
    id: 'q-offer-001',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'When a seller responds to a buyer\'s offer by changing the closing date and purchase price, this response is legally considered:',
    options: [
      { id: 'a', text: 'An acceptance with minor modifications', isCorrect: false },
      { id: 'b', text: 'A counteroffer, which terminates the original offer', isCorrect: true },
      { id: 'c', text: 'A rejection that prevents any further negotiation', isCorrect: false },
      { id: 'd', text: 'A conditional acceptance that keeps the original offer alive', isCorrect: false },
    ],
    explanation:
      'Under contract law, any change to the terms of an offer constitutes a counteroffer, which legally rejects and terminates the original offer. The buyer is then free to accept, reject, or counter the seller\'s counteroffer. The original offer cannot be revived unless the buyer submits it again as a new offer.',
    difficulty: 'easy',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-002',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer submits an offer with a 48-hour expiration. Before the seller responds, the buyer verbally tells the listing agent to withdraw the offer. Under Virginia law:',
    options: [
      { id: 'a', text: 'The verbal withdrawal is effective and the seller cannot accept', isCorrect: false },
      { id: 'b', text: 'The offer can only be revoked in writing before acceptance', isCorrect: true },
      { id: 'c', text: 'The seller has 48 hours to accept regardless of the buyer\'s withdrawal attempt', isCorrect: false },
      { id: 'd', text: 'The listing agent must accept the verbal withdrawal and destroy the offer', isCorrect: false },
    ],
    explanation:
      'Under Virginia\'s Statute of Frauds, modifications and revocations of real estate offers should be in writing to be enforceable. While an oral revocation may be effective in some contract law contexts, Virginia practice and most purchase agreement forms require written communication. The listing agent should advise the buyer to submit a written withdrawal.',
    difficulty: 'easy',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-003',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'When presenting multiple offers to a seller, the listing agent in Virginia is obligated to:',
    options: [
      { id: 'a', text: 'Present only the highest offer to save the seller\'s time', isCorrect: false },
      { id: 'b', text: 'Present all offers and let the seller decide which to accept, reject, or counter', isCorrect: true },
      { id: 'c', text: 'Rank the offers from best to worst and recommend the top choice', isCorrect: false },
      { id: 'd', text: 'Inform only the highest bidder that their offer was selected', isCorrect: false },
    ],
    explanation:
      'Virginia law requires the listing agent to present all offers to the seller promptly and objectively. The agent may provide professional advice but must not withhold any offers. The decision to accept, reject, or counter any offer is the seller\'s alone. Failing to present all offers is a violation of the agent\'s fiduciary duties.',
    difficulty: 'easy',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-004',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'An offer expires at 5:00 PM on Tuesday. The seller signs the acceptance at 4:55 PM but the listing agent does not communicate acceptance to the buyer\'s agent until 5:15 PM. Is there a valid contract?',
    options: [
      { id: 'a', text: 'Yes, because the seller signed before the deadline', isCorrect: false },
      { id: 'b', text: 'No, because acceptance was not communicated before the offer expired', isCorrect: true },
      { id: 'c', text: 'Yes, because the 15-minute delay is considered de minimis', isCorrect: false },
      { id: 'd', text: 'It depends on whether the buyer waives the late acceptance', isCorrect: false },
    ],
    explanation:
      'Under the "mailbox rule" exception for real estate, acceptance is generally not effective until it is communicated to the offeror (or their agent). Since the acceptance was not communicated until after the offer expired at 5:00 PM, there is no binding contract. The late acceptance functions as a counteroffer that the buyer may choose to accept or reject.',
    difficulty: 'medium',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-005',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'A seller makes a counteroffer to Buyer A. While waiting for Buyer A\'s response, the seller receives a higher offer from Buyer B. The seller may:',
    options: [
      { id: 'a', text: 'Accept Buyer B\'s offer only after formally withdrawing the counteroffer to Buyer A', isCorrect: true },
      { id: 'b', text: 'Accept Buyer B\'s offer immediately because a counteroffer is not binding', isCorrect: false },
      { id: 'c', text: 'Not accept Buyer B\'s offer until Buyer A responds', isCorrect: false },
      { id: 'd', text: 'Accept both offers and let the buyers compete to close first', isCorrect: false },
    ],
    explanation:
      'A counteroffer is an offer that can be accepted by the recipient. If the seller wants to accept Buyer B\'s offer, the seller should first withdraw (revoke) the counteroffer to Buyer A before Buyer A accepts it. If Buyer A accepts the counteroffer before the seller withdraws it, the seller would be bound to two contracts, creating serious legal complications.',
    difficulty: 'medium',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-006',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, an escalation clause in a purchase offer typically:',
    options: [
      { id: 'a', text: 'Automatically increases the seller\'s listing price by a fixed percentage each month', isCorrect: false },
      { id: 'b', text: 'Allows the buyer\'s offer to automatically increase by a specified amount over competing offers, up to a maximum price', isCorrect: true },
      { id: 'c', text: 'Reduces the purchase price if the appraisal comes in low', isCorrect: false },
      { id: 'd', text: 'Requires the seller to accept the first offer received', isCorrect: false },
    ],
    explanation:
      'An escalation clause is a provision in a buyer\'s offer that automatically increases the purchase price by a specified increment above any competing offer, up to a maximum price cap. The seller typically must provide proof of the competing offer. Escalation clauses are common in competitive markets but can complicate the offer process.',
    difficulty: 'medium',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-007',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer\'s agent prepares an offer that includes a request for the seller to pay $10,000 toward the buyer\'s closing costs. This is known as:',
    options: [
      { id: 'a', text: 'An earnest money deposit', isCorrect: false },
      { id: 'b', text: 'A seller concession (or seller contribution)', isCorrect: true },
      { id: 'c', text: 'A reduction in the purchase price', isCorrect: false },
      { id: 'd', text: 'A kickback prohibited by RESPA', isCorrect: false },
    ],
    explanation:
      'A seller concession is a request for the seller to contribute toward the buyer\'s closing costs. It is a common negotiation tool, especially for buyers with limited cash reserves. Lenders typically limit seller concessions to a percentage of the purchase price (e.g., 3-6% for conventional loans). Seller concessions are different from price reductions and are not prohibited by RESPA.',
    difficulty: 'medium',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-008',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'After a seller signs a counteroffer and delivers it to the buyer\'s agent, the seller has a change of heart and wants to accept the original offer instead. Can the seller do this?',
    options: [
      { id: 'a', text: 'Yes, the seller can always revert to the original offer', isCorrect: false },
      { id: 'b', text: 'No, the original offer was terminated when the seller made the counteroffer', isCorrect: true },
      { id: 'c', text: 'Yes, but only if the buyer agrees to revive the original offer', isCorrect: false },
      { id: 'd', text: 'Yes, as long as the counteroffer has not been delivered for more than 24 hours', isCorrect: false },
    ],
    explanation:
      'Making a counteroffer legally terminates the original offer. The seller cannot unilaterally revive the original offer. The buyer would need to submit the original terms again as a new offer for the seller to accept. The seller\'s only options are to wait for the buyer\'s response to the counteroffer or to revoke the counteroffer before the buyer accepts it.',
    difficulty: 'hard',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-009',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer submits an offer with a personal letter to the seller describing the buyer\'s family and why they love the home. Under Virginia fair housing considerations, the listing agent should:',
    options: [
      { id: 'a', text: 'Encourage the seller to read the letter to choose the most deserving buyer', isCorrect: false },
      { id: 'b', text: 'Advise the seller that considering personal characteristics revealed in the letter could create fair housing liability', isCorrect: true },
      { id: 'c', text: 'Refuse to deliver the letter because it is always illegal', isCorrect: false },
      { id: 'd', text: 'Forward the letter without comment because the agent has no advisory role in this matter', isCorrect: false },
    ],
    explanation:
      'While buyer love letters are not explicitly banned in Virginia, they often reveal protected class information (race, religion, familial status, national origin) that could expose the seller to fair housing discrimination claims if used to select a buyer. The listing agent should advise the seller about the potential fair housing risks of considering such letters in their decision-making.',
    difficulty: 'hard',
    topicTag: 'offer-counteroffer',
  },
  {
    id: 'q-offer-010',
    chapterId: 'offer-counteroffer-process',
    quizType: 'chapter_quiz',
    questionText:
      'A seller signs an acceptance of a buyer\'s offer but adds a handwritten note in the margin saying "seller to keep the chandelier in the dining room." This response is legally:',
    options: [
      { id: 'a', text: 'An acceptance because the seller signed the offer', isCorrect: false },
      { id: 'b', text: 'A counteroffer because the seller added a new term to the agreement', isCorrect: true },
      { id: 'c', text: 'Invalid because handwritten modifications are not legally recognized', isCorrect: false },
      { id: 'd', text: 'An acceptance with a precatory (non-binding) request', isCorrect: false },
    ],
    explanation:
      'Any modification to the terms of an offer, even a handwritten note, constitutes a counteroffer rather than an acceptance. By adding the chandelier exclusion, the seller has changed the terms of the offer, which the buyer must accept for a binding contract to exist. The "mirror image rule" requires acceptance to match the offer exactly.',
    difficulty: 'hard',
    topicTag: 'offer-counteroffer',
  },
]

// ── Chapter: contract-termination-breach (10 questions) ─────────────────────

const contractTerminationQuestions: QuizQuestion[] = [
  {
    id: 'q-termination-001',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer exercises a home inspection contingency to terminate a purchase agreement within the allowed time frame. This is an example of:',
    options: [
      { id: 'a', text: 'Breach of contract by the buyer', isCorrect: false },
      { id: 'b', text: 'Lawful termination under a contingency provision', isCorrect: true },
      { id: 'c', text: 'Anticipatory repudiation', isCorrect: false },
      { id: 'd', text: 'Mutual rescission', isCorrect: false },
    ],
    explanation:
      'When a buyer terminates a contract by properly exercising a contingency within the specified time frame, it is a lawful termination, not a breach. The contingency gives the buyer the contractual right to withdraw if the conditions are not met. The earnest money is typically returned to the buyer in this situation.',
    difficulty: 'easy',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-002',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'When both parties to a contract mutually agree to cancel the agreement and return to their pre-contract positions, this is called:',
    options: [
      { id: 'a', text: 'Novation', isCorrect: false },
      { id: 'b', text: 'Specific performance', isCorrect: false },
      { id: 'c', text: 'Mutual rescission', isCorrect: true },
      { id: 'd', text: 'Unilateral termination', isCorrect: false },
    ],
    explanation:
      'Mutual rescission occurs when both parties voluntarily agree to cancel the contract and release each other from further obligations. Both parties are restored to their original positions (the buyer receives their earnest money back, and the seller is free to sell to another party). This is different from a breach, where one party fails to perform.',
    difficulty: 'easy',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-003',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'If a property under contract is destroyed by a fire before closing and neither party is at fault, the contract may be terminated under the doctrine of:',
    options: [
      { id: 'a', text: 'Estoppel', isCorrect: false },
      { id: 'b', text: 'Impossibility of performance (frustration of purpose)', isCorrect: true },
      { id: 'c', text: 'Anticipatory breach', isCorrect: false },
      { id: 'd', text: 'Specific performance', isCorrect: false },
    ],
    explanation:
      'When the subject property is destroyed or substantially damaged before closing through no fault of either party, the doctrine of impossibility of performance (or frustration of purpose) may allow the contract to be terminated. The buyer typically receives a return of their earnest money. Some contracts include specific risk-of-loss provisions addressing this scenario.',
    difficulty: 'easy',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-004',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer fails to close on the agreed date without any valid reason or contingency protection. The seller\'s most common remedy is to:',
    options: [
      { id: 'a', text: 'Immediately sue for the full purchase price', isCorrect: false },
      { id: 'b', text: 'Retain the earnest money deposit as liquidated damages', isCorrect: true },
      { id: 'c', text: 'File a criminal complaint against the buyer', isCorrect: false },
      { id: 'd', text: 'Place a lien on the buyer\'s other properties', isCorrect: false },
    ],
    explanation:
      'When a buyer breaches a purchase agreement, the most common remedy is for the seller to retain the earnest money deposit as liquidated damages, provided the contract includes a liquidated damages clause. This provision specifies an agreed-upon amount of damages in advance. The seller may also pursue actual damages or specific performance, but liquidated damages is the most practical and common remedy.',
    difficulty: 'medium',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-005',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'A "novation" in the context of a real estate contract occurs when:',
    options: [
      { id: 'a', text: 'A new party is substituted for an original party, and the original party is released from obligations', isCorrect: true },
      { id: 'b', text: 'A contract is renewed for an additional term with the same parties', isCorrect: false },
      { id: 'c', text: 'An existing contract is amended to change the closing date', isCorrect: false },
      { id: 'd', text: 'One party assigns their rights but retains all obligations', isCorrect: false },
    ],
    explanation:
      'Novation is the substitution of a new party for an original party, with the consent of all parties, where the original party is completely released from all obligations. This differs from an assignment, where the original party may remain secondarily liable. All parties must agree to the novation for it to be effective.',
    difficulty: 'medium',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-006',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'Anticipatory repudiation (anticipatory breach) occurs when:',
    options: [
      { id: 'a', text: 'A party misses the closing date by one day', isCorrect: false },
      { id: 'b', text: 'A party indicates in advance that they will not perform their contractual obligations', isCorrect: true },
      { id: 'c', text: 'Both parties agree to extend the closing date', isCorrect: false },
      { id: 'd', text: 'A contingency expires without either party taking action', isCorrect: false },
    ],
    explanation:
      'Anticipatory repudiation occurs when one party clearly communicates, before the performance is due, that they will not fulfill their contractual obligations. The non-breaching party may treat this as an immediate breach and pursue remedies without waiting for the performance date to pass.',
    difficulty: 'medium',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-007',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, if both the buyer and seller claim the earnest money deposit after a contract falls through and cannot agree on who should receive it, the broker holding the deposit should:',
    options: [
      { id: 'a', text: 'Release the funds to the party the broker believes is correct', isCorrect: false },
      { id: 'b', text: 'Retain the funds indefinitely until the parties reach agreement', isCorrect: false },
      { id: 'c', text: 'File an interpleader action in court to let the court determine the proper recipient', isCorrect: true },
      { id: 'd', text: 'Split the deposit evenly between both parties', isCorrect: false },
    ],
    explanation:
      'When there is a dispute over earnest money and the parties cannot agree, the broker should not unilaterally decide who receives the funds. Virginia regulations allow the broker to file an interpleader action in court, depositing the disputed funds with the court and allowing a judge to determine the rightful recipient. This protects the broker from liability to either party.',
    difficulty: 'medium',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-008',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'A seller breaches a purchase agreement by refusing to sell despite having no legal justification. The buyer may seek specific performance, which would:',
    options: [
      { id: 'a', text: 'Award the buyer triple the earnest money deposit', isCorrect: false },
      { id: 'b', text: 'Force the seller to complete the sale and convey the property as agreed', isCorrect: true },
      { id: 'c', text: 'Automatically void the seller\'s title to the property', isCorrect: false },
      { id: 'd', text: 'Transfer the property to the buyer without any closing or payment', isCorrect: false },
    ],
    explanation:
      'Specific performance is an equitable remedy where a court orders the breaching party to perform the contract as agreed. In real estate, this remedy is available because each property is considered unique and monetary damages may be inadequate. The buyer would still need to fulfill their obligations under the contract, including paying the purchase price.',
    difficulty: 'hard',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-009',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer assigns their purchase agreement to a third party. Unless the contract prohibits assignment, what is the legal effect?',
    options: [
      { id: 'a', text: 'The original buyer is automatically released from all contract obligations', isCorrect: false },
      { id: 'b', text: 'The assignee receives the buyer\'s rights, but the original buyer remains secondarily liable unless there is a novation', isCorrect: true },
      { id: 'c', text: 'The assignment voids the original contract', isCorrect: false },
      { id: 'd', text: 'The seller must approve the assignment or the contract is terminated', isCorrect: false },
    ],
    explanation:
      'In an assignment, the assignee receives the buyer\'s contractual rights, but the original buyer (assignor) typically remains secondarily liable for the contract obligations unless the seller agrees to a novation (releasing the original buyer). Many purchase agreements restrict or prohibit assignment, so the contract terms must be checked carefully.',
    difficulty: 'hard',
    topicTag: 'contract-termination',
  },
  {
    id: 'q-termination-010',
    chapterId: 'contract-termination-breach',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia\'s statute of limitations, how long does a party generally have to file a breach of written contract claim?',
    options: [
      { id: 'a', text: '2 years', isCorrect: false },
      { id: 'b', text: '3 years', isCorrect: false },
      { id: 'c', text: '5 years', isCorrect: true },
      { id: 'd', text: '10 years', isCorrect: false },
    ],
    explanation:
      'In Virginia, the statute of limitations for a breach of a written contract is 5 years from the date of the breach (Virginia Code Section 8.01-246). For oral contracts, the limitation period is 3 years. Filing a claim after the statute of limitations has expired will result in the claim being barred.',
    difficulty: 'hard',
    topicTag: 'contract-termination',
  },
]

// ── Combined Question Bank ────────────────────────────────────────────────────

import { MOD456_QUESTIONS } from './course-questions-mod456'
import { MOD78_QUESTIONS } from './course-questions-mod78'
import { MOD910_QUESTIONS } from './course-questions-mod910'
import { MOD1112_QUESTIONS } from './course-questions-mod1112'

export const QUESTION_BANK: QuizQuestion[] = [
  ...dporQuestions,
  ...agencyQuestions,
  ...fairHousingQuestions,
  ...landlordTenantQuestions,
  ...ethicsQuestions,
  ...propertyOwnershipQuestions,
  ...legalDescriptionsQuestions,
  ...landUseQuestions,
  ...environmentalQuestions,
  ...contractFundamentalsQuestions,
  ...purchaseAgreementQuestions,
  ...listingAgreementQuestions,
  ...offerCounterofferQuestions,
  ...contractTerminationQuestions,
  ...MOD456_QUESTIONS,
  ...MOD78_QUESTIONS,
  ...MOD910_QUESTIONS,
  ...MOD1112_QUESTIONS,
]

// ── Utility Functions ─────────────────────────────────────────────────────────

export function getQuestionsByChapter(chapterSlug: string): QuizQuestion[] {
  return QUESTION_BANK.filter((q) => q.chapterId === chapterSlug)
}

export function getQuestionsByQuizType(
  quizType: 'chapter_quiz' | 'section_exam' | 'mock_exam',
): QuizQuestion[] {
  return QUESTION_BANK.filter((q) => q.quizType === quizType)
}

export function getRandomQuestions(count: number, chapterSlug?: string): QuizQuestion[] {
  const pool = chapterSlug ? getQuestionsByChapter(chapterSlug) : QUESTION_BANK
  if (count >= pool.length) return [...pool].sort(() => Math.random() - 0.5)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
