// Pre-built content for every interactive element in the course.
// Keyed by a normalized version of the prompt string.
// Components look up content by prompt to get questions, answers, pairs, etc.

export interface FlashcardSet {
  cards: { front: string; back: string }[]
}

export interface QuizQuestion {
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface QuizSet {
  questions: QuizQuestion[]
}

export interface DragDropPair {
  item: string
  zone: string
}

export interface DragDropSet {
  items: DragDropPair[]
  zones: string[]
  instruction: string
}

export interface ScenarioChoice {
  label: string
  isCorrect: boolean
  explanation: string
}

export interface ScenarioSet {
  situation: string
  question: string
  choices: ScenarioChoice[]
  summary: string
}

export interface CalculatorDef {
  title: string
  description: string
  fields: { id: string; label: string; placeholder: string; unit?: string }[]
  formula: (inputs: Record<string, number>) => { result: string; steps: string[] }
  example: Record<string, number>
}

// ─── FLASHCARD CONTENT ────────────────────────────────────────────────────────

export const FLASHCARD_CONTENT: Record<string, FlashcardSet> = {
  'match each dpor license type to its requirements and responsibilities': {
    cards: [
      {
        front: 'Salesperson License',
        back: 'Must work under a supervising broker. Requires 60 hours pre-license education, passing state and national exams, and sponsorship by a licensed broker. Cannot work independently.',
      },
      {
        front: 'Broker License',
        back: 'Requires 180 hours of education, 36 months of active salesperson experience, and passing broker exams. Can operate independently and supervise other licensees.',
      },
      {
        front: 'Principal Broker',
        back: 'The licensed broker who is ultimately responsible for all licensees affiliated with a firm. Every brokerage must designate one principal broker.',
      },
      {
        front: 'Reciprocity / License by Endorsement',
        back: 'Virginia allows out-of-state licensees to obtain a Virginia license without repeating education if they hold an active license in a state with a reciprocal agreement and meet Virginia requirements.',
      },
      {
        front: 'DPOR (Dept. of Professional & Occupational Regulation)',
        back: 'The Virginia state agency that oversees real estate licensing through the Virginia Real Estate Board (VREB). Issues licenses, enforces regulations, and disciplines licensees.',
      },
    ],
  },

  'key brokerage structure terms and their regulatory requirements': {
    cards: [
      {
        front: 'Branch Office',
        back: 'A secondary office location operated by a brokerage. Must have a designated supervising broker and register with DPOR. Cannot operate under a different trade name than the main office without disclosure.',
      },
      {
        front: 'Trade Name',
        back: 'A name used by a brokerage that differs from the principal broker\'s name. Must be registered with DPOR and disclosed in advertising. Cannot be misleading.',
      },
      {
        front: 'Escrow Account',
        back: 'A separate trust account a broker must maintain for client funds such as earnest money and security deposits. Funds cannot be commingled with the broker\'s operating funds.',
      },
      {
        front: 'Independent Contractor vs. Employee',
        back: 'Most agents are independent contractors under IRS rules — they set their own hours and pay self-employment taxes. However, for VREB purposes, all licensees are supervised by and legally responsible to their broker.',
      },
      {
        front: 'Affiliated Licensee',
        back: 'Any salesperson or associate broker who is sponsored by and works under a principal broker. The broker is responsible for the affiliated licensee\'s acts in the course of real estate activity.',
      },
    ],
  },

  'the six fiduciary duties — definition and real-world examples for each': {
    cards: [
      {
        front: 'Loyalty',
        back: 'The agent must put the client\'s interests above their own and above all others. Example: An agent cannot buy a listing themselves without full disclosure and client consent.',
      },
      {
        front: 'Confidentiality',
        back: 'The agent must not disclose information that would harm the client\'s negotiating position — even after the agency relationship ends. Example: Never reveal a seller\'s minimum acceptable price.',
      },
      {
        front: 'Disclosure',
        back: 'The agent must tell the client everything the agent knows that is relevant to the transaction. Example: Disclosing a recent sale of a comparable property that suggests the listing price is too high.',
      },
      {
        front: 'Obedience',
        back: 'The agent must follow all lawful instructions of the client. Example: A seller says only show on weekends — the agent must honor that unless it\'s illegal.',
      },
      {
        front: 'Reasonable Care',
        back: 'The agent must apply professional skill and diligence. Example: Researching the correct zoning classification before advising a buyer on a commercial purchase.',
      },
      {
        front: 'Accounting',
        back: 'The agent must safeguard all client funds and property. Example: Depositing earnest money into the broker\'s escrow account the same day it is received.',
      },
    ],
  },

  'what information must be included in a virginia agency disclosure form?': {
    cards: [
      {
        front: 'Party Being Represented',
        back: 'The disclosure must clearly state whether the agent represents the buyer, the seller, both (dual agency), or neither party.',
      },
      {
        front: 'Material Relationship Disclosure',
        back: 'If the agent has a personal, familial, or financial relationship with any party that could affect their objectivity, it must be disclosed in writing.',
      },
      {
        front: 'When Disclosure Must Occur',
        back: 'At or before the first substantive contact — meaning when the agent begins discussing price, terms, motivation, or other specific details about a particular property.',
      },
      {
        front: 'Acknowledgment Signature',
        back: 'The party receiving the disclosure must sign to acknowledge receipt. The agent keeps a copy. Refusal to sign must be documented.',
      },
    ],
  },

  'seven federal protected classes — name, definition, and amendment year': {
    cards: [
      {
        front: 'Race',
        back: 'Original 1968 class. Prohibition on discrimination based on a person\'s race. Race is also protected under the Civil Rights Act of 1866, which has no exemptions.',
      },
      {
        front: 'Color',
        back: 'Original 1968 class. Refers to skin color, which may be distinct from race. A dark-skinned Hispanic person can be discriminated against based on color separately from national origin.',
      },
      {
        front: 'National Origin',
        back: 'Original 1968 class. Country of birth or ancestry. Cannot refuse to rent to someone because they are from another country or have a foreign accent.',
      },
      {
        front: 'Religion',
        back: 'Original 1968 class. Cannot discriminate based on religious beliefs or practices. Exception exists for religious organizations providing housing to their members.',
      },
      {
        front: 'Sex',
        back: 'Added in 1974. Prohibits discrimination based on sex/gender. HUD has interpreted this to include sexual harassment by landlords or agents.',
      },
      {
        front: 'Familial Status',
        back: 'Added in 1988. Protects families with children under 18, pregnant women, and people in the process of obtaining custody. Exception: qualifying senior housing.',
      },
      {
        front: 'Disability',
        back: 'Added in 1988. Requires reasonable accommodations and allows tenants to make reasonable modifications at their own expense. Covers physical and mental disabilities.',
      },
    ],
  },

  'federal vs. virginia protected classes comparison': {
    cards: [
      {
        front: 'Federal Protected Classes (7)',
        back: 'Race, Color, National Origin, Religion, Sex, Familial Status, Disability. These apply nationwide under the Fair Housing Act of 1968 and its amendments.',
      },
      {
        front: 'Virginia Adds: Source of Funds',
        back: 'Virginia prohibits discrimination based on how a tenant pays rent — including housing vouchers (Section 8). Landlords cannot refuse to rent to voucher holders.',
      },
      {
        front: 'Virginia Adds: Sexual Orientation',
        back: 'Virginia Fair Housing Law explicitly prohibits discrimination based on sexual orientation — a protection not in the federal Fair Housing Act.',
      },
      {
        front: 'Virginia Adds: Gender Identity',
        back: 'Virginia state law prohibits discrimination based on gender identity, including transgender status.',
      },
      {
        front: 'Virginia Adds: Elderliness',
        back: 'Virginia prohibits discrimination against people based on age (elderliness). This is broader than federal law\'s familial status protection.',
      },
    ],
  },

  'vrlta key definitions and which situations it applies to': {
    cards: [
      {
        front: 'VRLTA (Virginia Residential Landlord and Tenant Act)',
        back: 'Virginia\'s primary law governing residential rental agreements. Applies to most residential tenancies where the landlord owns more than 2 rental units or is a real estate company.',
      },
      {
        front: 'Dwelling Unit',
        back: 'Under the VRLTA, a structure or part of a structure designed for residential use. Includes apartments, houses, condos — but not hotels, motels, or institutional housing.',
      },
      {
        front: 'When VRLTA Does NOT Apply',
        back: 'VRLTA exemptions include: owner-occupied buildings with 4 or fewer units, occupancy under a contract of sale, transient occupancy (hotels), agricultural tenancies.',
      },
      {
        front: 'Month-to-Month Tenancy',
        back: 'A tenancy with no fixed end date, renewing each month. Either party can terminate with proper written notice — typically 30 days in Virginia.',
      },
      {
        front: 'Written Lease Requirement',
        back: 'Under the VRLTA, if a landlord requires a written lease, it must comply with VRLTA standards. The landlord must provide the tenant a copy within one month of signing.',
      },
    ],
  },

  'match each nar code article number to its subject matter and key duty': {
    cards: [
      {
        front: 'Articles 1-9: Duties to Clients and Customers',
        back: 'Article 1: Protect/promote client interests. Article 2: No misrepresentation. Article 3: Cooperate with other brokers. Articles 4-5: Disclose ownership/interest. Articles 6-9: Compensation transparency.',
      },
      {
        front: 'Articles 10-14: Duties to the Public',
        back: 'Article 10: Equal professional services (Fair Housing). Article 11: Competence. Article 12: No false advertising. Article 13: No unauthorized legal advice. Article 14: Cooperate with ethics investigations.',
      },
      {
        front: 'Articles 15-17: Duties to REALTORS',
        back: 'Article 15: No false statements about competitors. Article 16: No soliciting clients under exclusive agreement with another agent. Article 17: Arbitrate compensation disputes.',
      },
      {
        front: 'Standard of Practice',
        back: 'SOPs are numbered interpretations below each Article (e.g., SOP 1-1, SOP 3-2). They clarify how the Article applies in specific situations and are as binding as the Articles themselves.',
      },
    ],
  },

  'material fact vs. puffery — which statements require disclosure?': {
    cards: [
      {
        front: 'Material Fact',
        back: 'Any fact that would affect a reasonable buyer\'s decision to purchase or the price they would pay. Examples: basement flooding history, foundation cracks, known roof leak, death on property (in some states).',
      },
      {
        front: 'Puffery',
        back: 'A vague, subjective, or obviously promotional statement that no reasonable buyer would rely on. Examples: "great neighborhood," "best schools," "cozy kitchen." No disclosure duty.',
      },
      {
        front: 'Adverse Material Fact',
        back: 'A material fact that reflects negatively on the property or transaction. Virginia agents must proactively disclose adverse material facts even if not asked.',
      },
      {
        front: 'Latent vs. Patent Defect',
        back: 'Patent defects are visible on inspection — buyer is on notice. Latent defects are hidden and not discoverable by reasonable inspection — seller and agent must disclose.',
      },
      {
        front: 'Stigmatized Property',
        back: 'Virginia law does not require disclosure of psychological stigmas such as prior crimes, suicides, or supernatural beliefs. However, if a buyer directly asks, the agent should answer honestly.',
      },
    ],
  },

  'compare the four unities of joint tenancy vs. tenancy in common': {
    cards: [
      {
        front: 'Unity of Time',
        back: 'Required for joint tenancy only. All joint tenants must acquire their interest at the same time — at the same moment of conveyance. Tenancy in common owners can acquire at different times.',
      },
      {
        front: 'Unity of Title',
        back: 'Required for joint tenancy only. All joint tenants must receive their interest through the same deed or instrument. Different deeds = different title = no joint tenancy.',
      },
      {
        front: 'Unity of Interest',
        back: 'Required for joint tenancy only. All joint tenants must hold equal percentage interests. If A holds 60% and B holds 40%, it cannot be joint tenancy — they are tenants in common.',
      },
      {
        front: 'Unity of Possession',
        back: 'Required for BOTH joint tenancy and tenancy in common. All co-owners have the right to possess the entire property — no co-owner is limited to their fractional share of the physical space.',
      },
      {
        front: 'Right of Survivorship',
        back: 'The key joint tenancy feature: when a joint tenant dies, their interest passes automatically and immediately to the surviving joint tenants — bypassing the will and probate. Tenancy in common has NO survivorship.',
      },
    ],
  },

  'tenancy by the entireties — who can hold it and what are the protections?': {
    cards: [
      {
        front: 'Who Can Hold Tenancy by the Entireties',
        back: 'Only legally married couples in Virginia. The couple is treated as one indivisible legal unit. Cannot be created between unmarried partners, siblings, or any non-married parties.',
      },
      {
        front: 'Creditor Protection',
        back: 'A creditor of ONE spouse cannot execute on the property. The entire property is protected from individual debts. This protection disappears if BOTH spouses are jointly liable for the debt.',
      },
      {
        front: 'Severance',
        back: 'Cannot be severed unilaterally. Both spouses must consent to any transfer. Divorce converts the tenancy by the entireties into a tenancy in common automatically.',
      },
    ],
  },

  'lot-block-plat description components and how to read them': {
    cards: [
      {
        front: 'Recorded Plat',
        back: 'A map recorded with the circuit court clerk that divides land into lots and blocks. The plat is the foundation of the description and is referenced by book/page or instrument number.',
      },
      {
        front: 'How to Read: "Lot 5, Block B, Riverside Subdivision"',
        back: 'Lot 5 = specific parcel within the block. Block B = the grouping of lots. Riverside Subdivision = the name of the recorded plat. County plat book page reference follows.',
      },
      {
        front: 'Dedication',
        back: 'Public streets, parks, and utilities shown on the plat are dedicated to the public upon recording. The developer gives up ownership of those areas permanently.',
      },
      {
        front: 'Easement by Plat',
        back: 'Utility easements, drainage easements, and access rights shown on the recorded plat run with the land and are binding on all future owners — even if not mentioned in the deed.',
      },
    ],
  },

  'government powers affecting private property — eminent domain, police power, taxation, escheat': {
    cards: [
      {
        front: 'Eminent Domain',
        back: 'The government\'s power to take private property for public use. Requires just compensation (fair market value). Process = condemnation. Owner can challenge the amount but rarely the right to take.',
      },
      {
        front: 'Police Power',
        back: 'The government\'s power to regulate property use for public health, safety, welfare, and morals. Does NOT require compensation. Examples: zoning, building codes, environmental regulations.',
      },
      {
        front: 'Taxation',
        back: 'The government\'s power to levy ad valorem (based on value) taxes on real property. Failure to pay results in a tax lien that takes priority over most other liens. Ultimate sanction is tax sale.',
      },
      {
        front: 'Escheat',
        back: 'When a property owner dies with no heirs and no will, their property reverts to the state. Virginia law specifies the process for the state to take title through escheat proceedings.',
      },
    ],
  },

  'environmental assessment phases — what each covers and when required': {
    cards: [
      {
        front: 'Phase I Environmental Site Assessment',
        back: 'A desk and visual review — no soil testing. Reviews records, aerial photos, regulatory databases, and the site visually. Required for most commercial transactions. Identifies Recognized Environmental Conditions (RECs).',
      },
      {
        front: 'Phase II Environmental Site Assessment',
        back: 'Triggered when Phase I finds RECs. Involves physical testing: soil borings, groundwater sampling, building material analysis. Determines whether contamination is actually present.',
      },
      {
        front: 'CERCLA / Superfund',
        back: 'Federal law making property owners liable for cleanup even if they did not cause the contamination. The innocent landowner defense requires conducting a Phase I assessment before purchase.',
      },
      {
        front: 'When Phase I Is Required',
        back: 'Required for all commercial transactions with bank financing. Prudent practice for any property with prior industrial use, underground storage tanks, or dry-cleaning operations.',
      },
    ],
  },

  'six essential elements of a contract — can you name them all?': {
    cards: [
      {
        front: 'Offer & Acceptance (Mutual Assent)',
        back: 'There must be a definite offer by one party and an unqualified acceptance by the other. A counteroffer kills the original offer — the original offeror cannot later accept the previous terms.',
      },
      {
        front: 'Consideration',
        back: 'Something of value exchanged by each party. In real estate: the purchase price from the buyer, the property conveyance from the seller. A promise for a promise (bilateral contract).',
      },
      {
        front: 'Legal Capacity',
        back: 'Both parties must have the legal ability to contract. Minors and mentally incapacitated persons lack full capacity. Contracts with minors are voidable by the minor, not void.',
      },
      {
        front: 'Lawful Object',
        back: 'The contract must be for a legal purpose. A contract to sell an illegally subdivided parcel would be void because the subject matter violates the law.',
      },
      {
        front: 'In Writing (for Real Estate)',
        back: 'The Statute of Frauds requires real estate contracts to be in writing to be enforceable. Oral real estate contracts are generally unenforceable, with narrow exceptions.',
      },
      {
        front: 'Mutual Assent / Meeting of the Minds',
        back: 'Both parties must agree to the same terms. If there is a fundamental misunderstanding about the subject of the contract, mutual assent fails and no contract is formed.',
      },
    ],
  },

  'rules of contract interpretation — how courts resolve ambiguous contract language': {
    cards: [
      {
        front: 'Four Corners Rule',
        back: 'Courts look only within the four corners of the written document to determine contract meaning. External evidence is not considered unless there is a latent ambiguity.',
      },
      {
        front: 'Parol Evidence Rule',
        back: 'Prior oral or written agreements are not admissible to vary the terms of an integrated written contract. Exception: to show fraud, mistake, ambiguity, or a condition precedent.',
      },
      {
        front: 'Integration Clause / Merger Doctrine',
        back: 'A clause stating the contract is the "entire agreement" merges all prior negotiations. Once in writing, the written terms control. This is why real estate contracts must be complete.',
      },
      {
        front: 'Contra Proferentem',
        back: 'Ambiguous contract language is interpreted against the party who drafted it. In a form contract drafted by a broker, ambiguity favors the client.',
      },
    ],
  },

  'key sections of a virginia residential purchase agreement and what each covers': {
    cards: [
      {
        front: 'Parties and Property Section',
        back: 'Identifies buyer(s), seller(s), and the property by street address and legal description. Must match the deed exactly. Tax Map number and county/city also included.',
      },
      {
        front: 'Purchase Price and Earnest Money',
        back: 'States the full purchase price, amount of EMD, who holds the EMD, and when it must be deposited (typically 3-5 business days after ratification).',
      },
      {
        front: 'Settlement Date and Possession',
        back: 'Specifies when closing occurs and when the buyer takes possession. These can differ — seller might have a post-closing occupancy agreement.',
      },
      {
        front: 'Contingencies',
        back: 'Financing, home inspection, and appraisal contingencies are the most common. Each has a deadline by which the buyer must act or the contingency is waived.',
      },
      {
        front: 'Fixtures and Inclusions/Exclusions',
        back: 'Lists what stays (fixtures, appliances) and what the seller is taking. Any item that could be a fixture must be expressly excluded if the seller wants to keep it.',
      },
    ],
  },

  'three types of listing agreements — when the broker earns commission under each': {
    cards: [
      {
        front: 'Exclusive Right to Sell',
        back: 'The broker earns commission regardless of who sells the property — even if the seller finds the buyer themselves. Most common listing type. Gives the broker maximum protection.',
      },
      {
        front: 'Exclusive Agency',
        back: 'The broker earns commission unless the seller sells to a buyer they found themselves without the broker\'s help. The seller retains the right to sell FSBO without paying.',
      },
      {
        front: 'Open Listing',
        back: 'Commission is paid only to the broker who is the procuring cause of the sale. Seller can list with multiple brokers simultaneously and pay none if they sell themselves.',
      },
      {
        front: 'Net Listing (PROHIBITED in Virginia)',
        back: 'The seller sets a minimum net price; the broker keeps everything above it. This creates a conflict of interest and is expressly prohibited by Virginia law.',
      },
    ],
  },

  'assignment vs. novation — who remains liable under each?': {
    cards: [
      {
        front: 'Assignment',
        back: 'The assigning party transfers their contractual rights to a third party (assignee). The ORIGINAL party remains liable — the assignee takes on rights but the assignor is not released from obligations.',
      },
      {
        front: 'Novation',
        back: 'A new party is substituted for the original party with the consent of all parties. The ORIGINAL party is completely released from all obligations. Requires agreement from all three parties.',
      },
      {
        front: 'Assignability Clause',
        back: 'Many purchase agreements specify whether the contract can be assigned. Without this clause, contracts are generally assignable unless they are for personal services.',
      },
    ],
  },

  'fha vs. va vs. usda vs. conventional — eligibility, down payment, and insurance requirements': {
    cards: [
      {
        front: 'FHA Loan',
        back: 'Insured by HUD. Min 3.5% down with 580+ credit score; 10% down if 500-579. Requires Mortgage Insurance Premium (MIP) upfront (1.75%) and annual. Open to any qualified borrower.',
      },
      {
        front: 'VA Loan',
        back: 'Guaranteed by Department of Veterans Affairs. 0% down payment. No monthly mortgage insurance. One-time funding fee (waived for disabled veterans). Must be veteran, active duty, or eligible surviving spouse.',
      },
      {
        front: 'USDA Loan',
        back: 'Backed by Department of Agriculture. 0% down payment. For rural and some suburban areas. Income limits apply. Requires upfront guarantee fee and annual fee. Must be primary residence.',
      },
      {
        front: 'Conventional Loan',
        back: 'Not government-backed. Typically 3-20% down. PMI required if LTV above 80%. Best rates for borrowers with 740+ credit score. Follows Fannie Mae/Freddie Mac underwriting guidelines.',
      },
    ],
  },

  'special mortgage products — who uses each and what are the key terms?': {
    cards: [
      {
        front: 'Balloon Mortgage',
        back: 'Payments based on a long amortization period, but the remaining balance is due in a lump sum at a specified date (e.g., 5 years). Common in commercial lending. Borrower must refinance or pay off.',
      },
      {
        front: 'Reverse Mortgage (HECM)',
        back: 'Home Equity Conversion Mortgage — for borrowers 62 and older. No monthly payments; lender pays the homeowner. Loan repaid when homeowner sells, moves, or dies. Insured by FHA.',
      },
      {
        front: 'Bridge Loan',
        back: 'Short-term financing to bridge the gap between buying a new home and selling the current one. High interest rate, typically 6-12 months. Paid off when old home sells.',
      },
      {
        front: 'Land Contract / Contract for Deed',
        back: 'Seller finances the purchase and retains legal title until the buyer pays in full. Buyer gets equitable title. Risk: buyer can lose all payments if they default.',
      },
    ],
  },

  'trid timeline — when must the loan estimate and closing disclosure be provided?': {
    cards: [
      {
        front: 'Loan Estimate (LE)',
        back: 'Must be provided within 3 business days of receiving a complete loan application. Gives the borrower estimated interest rate, monthly payment, and closing costs. Not a commitment to lend.',
      },
      {
        front: 'Closing Disclosure (CD)',
        back: 'Must be provided at least 3 business days before closing. Shows final loan terms and actual closing costs. If significant changes occur, the 3-day clock restarts.',
      },
      {
        front: 'Three-Day Right of Rescission',
        back: 'Applies ONLY to refinances of primary residences — NOT to purchase transactions. The borrower has 3 business days after closing to cancel. Does not apply to new home purchases.',
      },
      {
        front: 'What Triggers the 3-Day CD Reset',
        back: 'APR increases by more than 1/8% (fixed) or 1/4% (adjustable), loan product changes, or a prepayment penalty is added. Minor changes do not reset the clock.',
      },
    ],
  },
}

// ─── QUIZ CONTENT ─────────────────────────────────────────────────────────────

export const QUIZ_CONTENT: Record<string, QuizSet> = {
  'test your knowledge of virginia licensing requirements': {
    questions: [
      {
        question: 'A Virginia salesperson license requires how many hours of pre-license education?',
        choices: ['30 hours', '45 hours', '60 hours', '90 hours'],
        correctIndex: 2,
        explanation: 'Virginia requires 60 hours of pre-license education for a salesperson license — split between a principles course and a required state law course.',
      },
      {
        question: 'To upgrade from salesperson to broker in Virginia, what is the minimum experience requirement?',
        choices: ['12 months active experience', '24 months active experience', '36 months active experience', 'No experience required'],
        correctIndex: 2,
        explanation: '36 months (3 years) of active salesperson experience is required before Virginia will allow a salesperson to sit for the broker exam.',
      },
      {
        question: 'Which entity licenses real estate professionals in Virginia?',
        choices: ['Virginia Association of REALTORS (VAR)', 'Virginia Department of Professional and Occupational Regulation (DPOR)', 'National Association of REALTORS (NAR)', 'Virginia State Bar'],
        correctIndex: 1,
        explanation: 'DPOR, through the Virginia Real Estate Board (VREB), is the state agency that licenses real estate professionals and enforces license law.',
      },
      {
        question: 'A Virginia license obtained through reciprocity from another state is called:',
        choices: ['A provisional license', 'A temporary license', 'A license by endorsement', 'A courtesy license'],
        correctIndex: 2,
        explanation: 'License by endorsement (also called reciprocal license) allows holders of an out-of-state license to obtain a Virginia license without repeating all education requirements.',
      },
    ],
  },

  'brokerage operations quiz: supervision, accounts, and trade names': {
    questions: [
      {
        question: 'Client funds such as earnest money must be kept in:',
        choices: ['The broker\'s personal bank account', 'A separate escrow/trust account', 'A joint account with the brokerage operating funds', 'Any FDIC-insured account'],
        correctIndex: 1,
        explanation: 'Virginia law strictly requires client funds to be kept in a separate escrow or trust account. Commingling client funds with operating funds is a license law violation.',
      },
      {
        question: 'Every Virginia brokerage must have:',
        choices: ['At least 3 licensed salespersons', 'A designated principal broker', 'A Virginia-licensed attorney on retainer', 'A physical office in every county it serves'],
        correctIndex: 1,
        explanation: 'Every licensed brokerage in Virginia must designate a principal broker who is responsible for all licensees at the firm.',
      },
      {
        question: 'A brokerage\'s trade name must be:',
        choices: ['Identical to the principal broker\'s legal name', 'Registered with DPOR', 'Approved by the local REALTOR association', 'Unique nationwide'],
        correctIndex: 1,
        explanation: 'All trade names used by a Virginia brokerage must be registered with DPOR and cannot be misleading.',
      },
    ],
  },

  'license exemption scenarios — does this person need a license?': {
    questions: [
      {
        question: 'A building owner hires a full-time salaried employee to manage their apartment complex. Does this employee need a real estate license?',
        choices: ['Yes, all property managers must be licensed', 'No, on-site managers of a single property are exempt', 'Yes, but only a salesperson license is needed', 'Only if they collect rent'],
        correctIndex: 1,
        explanation: 'Virginia law exempts on-site residential managers and employees who manage a single property on behalf of the owner. They are salaried employees, not independent brokers.',
      },
      {
        question: 'An attorney closes a real estate transaction as part of their legal practice. Do they need a real estate license?',
        choices: ['Yes, closing real estate requires a license', 'No, attorneys are exempt when acting within the scope of their law practice', 'Only if they earn a commission', 'Only if they also show property'],
        correctIndex: 1,
        explanation: 'Licensed attorneys acting within the scope of their legal practice are exempt from real estate license requirements in Virginia.',
      },
      {
        question: 'A person is appointed trustee of an estate containing real property and sells it as part of their fiduciary duties. Do they need a license?',
        choices: ['Yes, selling real estate always requires a license', 'No, trustees and fiduciaries acting under court appointment are exempt', 'Only if the estate is worth more than $500,000', 'Only with a court order'],
        correctIndex: 1,
        explanation: 'Trustees, executors, administrators, and others acting under a fiduciary duty pursuant to court appointment are exempt from Virginia real estate licensing requirements.',
      },
      {
        question: 'A property owner sells their own home without a license. Is this permitted?',
        choices: ['No, all real estate sellers must be licensed', 'Yes, owners are always exempt when selling their own property', 'Only if it is their primary residence', 'Only if they use a licensed closing attorney'],
        correctIndex: 1,
        explanation: 'The owner exemption allows property owners to sell their own property without a license. The exemption covers the owner acting on their own behalf.',
      },
    ],
  },

  'when must agency disclosure occur? test your timing knowledge': {
    questions: [
      {
        question: 'Agency disclosure in Virginia must occur at or before:',
        choices: ['Signing a purchase agreement', 'The first showing of property', 'The first substantive contact about a specific property', 'Submitting an offer'],
        correctIndex: 2,
        explanation: 'Virginia law requires disclosure at the first substantive contact — when the agent begins discussing price, terms, motivation, or specific property details with a prospective client.',
      },
      {
        question: 'If a prospective buyer refuses to sign the agency disclosure form, the agent should:',
        choices: ['Refuse to work with the buyer', 'Call the VREB for guidance', 'Document the refusal in writing and proceed', 'Require the buyer to sign before discussing any properties'],
        correctIndex: 2,
        explanation: 'The agent must document the refusal. A buyer\'s refusal to sign the disclosure does not prevent the agent from working with them — but the agent must have proof the disclosure was offered.',
      },
      {
        question: 'A "material relationship" that must be disclosed includes:',
        choices: ['Knowing the same people as the other party', 'A personal or financial interest in the transaction that could affect the agent\'s objectivity', 'Working at the same brokerage', 'Any prior business dealings'],
        correctIndex: 1,
        explanation: 'A material relationship disclosure is required when the agent has a personal, familial, or financial interest in the transaction that a reasonable person would want to know about.',
      },
    ],
  },

  'identify whether each scenario constitutes valid termination of agency': {
    questions: [
      {
        question: 'The listed property is destroyed in a fire before closing. What happens to the listing agreement?',
        choices: ['It continues until the expiration date', 'It is automatically terminated by operation of law', 'The seller must give 30 days notice to cancel', 'Only the broker can terminate it'],
        correctIndex: 1,
        explanation: 'Destruction of the subject matter automatically terminates the agency relationship by operation of law. There is no longer a property to sell.',
      },
      {
        question: 'A buyer-client verbally tells their agent they no longer want representation. This is called:',
        choices: ['Revocation', 'Renunciation', 'Mutual release', 'Procuring cause termination'],
        correctIndex: 1,
        explanation: 'Renunciation is when the principal (client) terminates the agency. Revocation is when the agent (attorney-in-fact) withdraws. In a real estate context, the client terminating = renunciation.',
      },
      {
        question: 'A seller lists their home with Broker A. Broker A brings a buyer who is interested but the seller later hires Broker B who ultimately closes the deal. Who is owed a commission?',
        choices: ['Only Broker B because they closed the deal', 'Only Broker A because they were the procuring cause', 'Both brokers split the commission equally', 'Neither broker — the seller owes nothing'],
        correctIndex: 1,
        explanation: 'Procuring cause analysis looks at who started the uninterrupted chain of events leading to the sale. Broker A who introduced the buyer may be entitled to commission even if they didn\'t close the deal.',
      },
    ],
  },

  'virginia-only protected classes — do you know what the state adds beyond federal law?': {
    questions: [
      {
        question: 'Which of the following is a Virginia-protected class NOT found in the federal Fair Housing Act?',
        choices: ['Race', 'Source of funds (housing vouchers)', 'Disability', 'Familial status'],
        correctIndex: 1,
        explanation: 'Source of funds — meaning a landlord cannot refuse to accept housing vouchers (Section 8) — is a Virginia-specific protected class not in the federal Fair Housing Act.',
      },
      {
        question: 'Virginia Fair Housing Law adds protections for all of the following EXCEPT:',
        choices: ['Sexual orientation', 'Gender identity', 'Elderliness', 'Immigration status'],
        correctIndex: 3,
        explanation: 'Virginia protects sexual orientation, gender identity, source of funds, and elderliness. Immigration status is not a protected class under Virginia Fair Housing Law.',
      },
      {
        question: 'A landlord in Virginia refuses to rent to a tenant who receives a housing choice voucher. This is:',
        choices: ['Permissible — landlords can set their own rental criteria', 'A violation of Virginia Fair Housing Law only', 'A violation of both federal and state law', 'Permissible only for buildings with fewer than 4 units'],
        correctIndex: 1,
        explanation: 'Source of funds discrimination violates Virginia Fair Housing Law. The federal Fair Housing Act does not cover source of funds, so this is a state-only violation.',
      },
    ],
  },

  'does the vrlta apply to these rental situations?': {
    questions: [
      {
        question: 'An investor owns 5 rental homes and rents one to a tenant. Does the VRLTA apply?',
        choices: ['No, it only applies to apartment buildings', 'Yes — the landlord owns more than 2 rental units', 'Only if a written lease is signed', 'Only for leases longer than one year'],
        correctIndex: 1,
        explanation: 'The VRLTA applies when the landlord owns more than 2 rental units or is a real estate company. An investor with 5 rentals is covered.',
      },
      {
        question: 'A couple owns a duplex and lives in one unit while renting the other. Does the VRLTA apply?',
        choices: ['Yes, duplexes are always covered', 'No — owner-occupied buildings with 4 or fewer units are exempt from the VRLTA', 'Only if the rent exceeds the VRLTA threshold', 'Only for the commercial portions'],
        correctIndex: 1,
        explanation: 'Owner-occupied buildings with 4 or fewer units are exempt from the VRLTA. The couple living in one unit of their duplex would qualify for this exemption.',
      },
      {
        question: 'A hotel rents a room to a guest by the night. Does the VRLTA apply?',
        choices: ['Yes, all residential occupancies are covered', 'No — transient occupancy in hotels and motels is exempt', 'Only stays longer than 30 days', 'Only if the hotel has more than 10 rooms'],
        correctIndex: 1,
        explanation: 'Transient occupancy in hotels, motels, and similar establishments is explicitly exempt from the VRLTA. The VRLTA covers residential tenancies, not hotel stays.',
      },
    ],
  },

  'identify which actions constitute illegal self-help eviction': {
    questions: [
      {
        question: 'A landlord changes the locks while the tenant is at work to force them out. This is:',
        choices: ['A valid eviction method if the tenant is behind on rent', 'Illegal self-help eviction prohibited by the VRLTA', 'Permitted if the lease expires first', 'Allowed only with 24-hour notice'],
        correctIndex: 1,
        explanation: 'Changing locks without a court order is classic illegal self-help eviction. The VRLTA strictly prohibits landlords from evicting tenants by any means other than court process.',
      },
      {
        question: 'A landlord turns off the tenant\'s utilities to pressure them to move out. This is:',
        choices: ['Permitted if the tenant is more than 30 days late on rent', 'Illegal self-help eviction and potentially constructive eviction', 'Allowed with 5-day written notice', 'Only illegal if the landlord pays the utilities'],
        correctIndex: 1,
        explanation: 'Shutting off utilities is self-help eviction and may constitute constructive eviction — making the unit uninhabitable to force the tenant out. Both are VRLTA violations.',
      },
      {
        question: 'What is the proper first step for a Virginia landlord to evict a non-paying tenant?',
        choices: ['Remove the tenant\'s belongings from the unit', 'File an Unlawful Detainer in General District Court', 'Serve a 5-day pay-or-quit notice in writing', 'Change the locks with a 48-hour notice'],
        correctIndex: 2,
        explanation: 'The proper first step is serving a 5-day pay-or-quit notice. If the tenant does not pay or vacate, then the landlord files for an Unlawful Detainer in General District Court.',
      },
    ],
  },

  'nar code of ethics — which article applies to this scenario?': {
    questions: [
      {
        question: 'A buyer\'s agent submits an offer and simultaneously submits offers on two other properties without telling their client. Which NAR Code Article is most at issue?',
        choices: ['Article 2 (no misrepresentation)', 'Article 1 (protect and promote client interests)', 'Article 12 (no false advertising)', 'Article 16 (no interference with other agents)'],
        correctIndex: 1,
        explanation: 'Article 1 requires agents to protect and promote their client\'s interests. Submitting competing offers without disclosure violates the duty of loyalty and honest dealing owed to the client.',
      },
      {
        question: 'An agent posts social media ads claiming to be "Virginia\'s #1 real estate agent" without any data to support the claim. Which Article applies?',
        choices: ['Article 1 (client interests)', 'Article 11 (competence)', 'Article 12 (no false or misleading advertising)', 'Article 15 (no false statements about competitors)'],
        correctIndex: 2,
        explanation: 'Article 12 prohibits false or misleading advertising. Unsubstantiated superlative claims ("number 1 agent") without supporting data are prohibited under Article 12.',
      },
      {
        question: 'A buyer\'s agent is under an exclusive buyer agreement. Another agent approaches the buyer directly at an open house. Which Article does this raise?',
        choices: ['Article 3 (cooperate with brokers)', 'Article 10 (equal professional services)', 'Article 16 (no soliciting clients under exclusive agreement)', 'Article 17 (arbitration)'],
        correctIndex: 2,
        explanation: 'Article 16 prohibits agents from soliciting a client who is under an exclusive representation agreement with another REALTOR without the knowledge of that REALTOR.',
      },
    ],
  },

  'identify each scenario as a respa violation, ethics violation, both, or neither': {
    questions: [
      {
        question: 'An agent refers clients to their brother\'s title company without disclosing the family relationship. This is:',
        choices: ['Neither — referrals are always permitted', 'A RESPA violation only', 'An ethics violation (NAR Article 6) only', 'Both a RESPA violation and an ethics violation'],
        correctIndex: 3,
        explanation: 'Undisclosed referral fees and undisclosed affiliated business arrangements violate RESPA. Failure to disclose a personal interest also violates NAR Code Article 6. Both apply here.',
      },
      {
        question: 'A mortgage lender gives a real estate agent $200 cash for every buyer referral. This is:',
        choices: ['Permitted as a marketing incentive', 'A RESPA violation (kickback prohibition)', 'Only an ethics violation', 'Permitted if disclosed in writing'],
        correctIndex: 1,
        explanation: 'RESPA Section 8 strictly prohibits paying or receiving fees, kickbacks, or unearned compensation in exchange for referrals of settlement service business. No disclosure exception exists.',
      },
      {
        question: 'A listing agent enters into an affiliated business arrangement with a home warranty company they own, with full written disclosure. This is:',
        choices: ['A RESPA violation regardless of disclosure', 'An ethics violation only', 'Permissible if all RESPA affiliated business arrangement requirements are met', 'Prohibited because agents cannot own related businesses'],
        correctIndex: 2,
        explanation: 'RESPA allows affiliated business arrangements if: a disclosure is given, the consumer is free to use other providers, and the only thing of value exchanged is a return on ownership interest.',
      },
    ],
  },

  'ownership form identification quiz': {
    questions: [
      {
        question: 'Two brothers inherit property from their father. The deed says "to John and Bill as tenants in common." When Bill dies, what happens to his share?',
        choices: ['It automatically goes to John by survivorship', 'It passes through Bill\'s will or intestate succession', 'It escheats to the state', 'It must be sold and proceeds divided'],
        correctIndex: 1,
        explanation: 'Tenancy in common has NO right of survivorship. Bill\'s share passes through his estate — either by will or intestate succession — not automatically to John.',
      },
      {
        question: 'Which ownership form requires all four unities: time, title, interest, and possession?',
        choices: ['Tenancy in common', 'Joint tenancy', 'Tenancy by the entireties', 'Community property'],
        correctIndex: 1,
        explanation: 'Joint tenancy requires all four unities. Missing any one of them (e.g., co-owners acquire at different times) means the result is a tenancy in common, not a joint tenancy.',
      },
    ],
  },

  'who must sign real estate documents for each entity type?': {
    questions: [
      {
        question: 'A property is owned by an LLC. Who must sign the purchase agreement on behalf of the LLC?',
        choices: ['Any member or employee of the LLC', 'The person authorized in the LLC\'s Operating Agreement', 'All members must sign', 'A licensed real estate agent for the LLC'],
        correctIndex: 1,
        explanation: 'An LLC\'s Operating Agreement designates who has authority to sign contracts on behalf of the entity. Agents should request a copy to verify the signatory\'s authority.',
      },
      {
        question: 'Property is held in a revocable living trust. Who signs on behalf of the trust?',
        choices: ['The attorney who created the trust', 'All named beneficiaries', 'The trustee(s) named in the trust agreement', 'The grantor only'],
        correctIndex: 2,
        explanation: 'The trustee has legal authority to act on behalf of the trust. The agent should request a copy of the trust (or a certificate of trust) to confirm the trustee\'s identity and authority.',
      },
      {
        question: 'A corporation owns property. To authorize a sale, the corporation typically needs:',
        choices: ['Approval of any officer', 'A corporate resolution authorizing the specific transaction', 'Signature of the company\'s attorney', 'Approval of 2/3 of all shareholders'],
        correctIndex: 1,
        explanation: 'Corporations require a corporate resolution — a formal decision of the board of directors — authorizing a specific real estate transaction. This document verifies signatory authority.',
      },
    ],
  },

  'identify the correct rectangular survey description from a diagram': {
    questions: [
      {
        question: 'How many acres are in one section of a township?',
        choices: ['160 acres', '320 acres', '640 acres', '1,280 acres'],
        correctIndex: 2,
        explanation: 'One section = 1 square mile = 640 acres. A township contains 36 sections (6 miles x 6 miles = 36 square miles = 23,040 acres total).',
      },
      {
        question: 'In the rectangular survey system, section numbering begins in which corner of the township?',
        choices: ['Northwest corner', 'Southwest corner', 'Northeast corner', 'Southeast corner'],
        correctIndex: 2,
        explanation: 'Section numbering starts in the NE corner of the township at Section 1, proceeds west to Section 6, then drops south and proceeds east, snaking through all 36 sections.',
      },
      {
        question: 'The NE 1/4 of the NW 1/4 of Section 5 contains how many acres?',
        choices: ['10 acres', '20 acres', '40 acres', '160 acres'],
        correctIndex: 2,
        explanation: 'Start with 640 acres (1 section). NW 1/4 = 160 acres. NE 1/4 of that = 40 acres. Each additional quarter cuts the acreage by 75%. 640 ÷ 4 = 160 ÷ 4 = 40.',
      },
    ],
  },

  'private deed restrictions vs. public zoning — which controls?': {
    questions: [
      {
        question: 'A property is zoned for both single-family and duplex use, but the deed restriction says single-family only. What can the owner build?',
        choices: ['A duplex — zoning always controls', 'A single-family home only — the stricter restriction controls', 'Either — the owner can choose which to follow', 'Neither — conflicting rules void both'],
        correctIndex: 1,
        explanation: 'When zoning and private deed restrictions conflict, the STRICTER standard governs. Both apply simultaneously — the property must comply with both. Here, single-family only is stricter.',
      },
      {
        question: 'Deed restrictions are enforced by:',
        choices: ['The local zoning board', 'The state government', 'Neighboring property owners and HOAs (private parties)', 'DPOR'],
        correctIndex: 2,
        explanation: 'Private deed restrictions are enforced by private parties — neighboring homeowners who have the same restrictions in their deeds, or the HOA. The government does not enforce private covenants.',
      },
    ],
  },

  'lead paint disclosure requirements — what must be given, when, and to whom?': {
    questions: [
      {
        question: 'Lead paint disclosure is required for:',
        choices: ['All residential properties regardless of age', 'Residential properties built before 1978 only', 'Properties built before 1990', 'Only properties with children under 6 in the household'],
        correctIndex: 1,
        explanation: 'Federal lead paint disclosure rules apply only to residential properties built before 1978 — the year lead paint was banned for residential use.',
      },
      {
        question: 'How many days does a buyer have to conduct a lead paint inspection under the federal rule?',
        choices: ['3 days', '5 days', '7 days', '10 days'],
        correctIndex: 3,
        explanation: 'Buyers have a 10-day inspection period to conduct a lead paint inspection. They can waive this right in writing, but the right must be offered.',
      },
      {
        question: 'How long must agents retain signed lead paint disclosure forms?',
        choices: ['1 year', '2 years', '3 years', '5 years'],
        correctIndex: 2,
        explanation: 'Federal regulations require agents to retain signed lead paint disclosure forms for 3 years after the transaction is completed.',
      },
    ],
  },

  'is this contract valid, void, voidable, or unenforceable?': {
    questions: [
      {
        question: 'A 16-year-old signs a purchase agreement to buy a condo. This contract is:',
        choices: ['Void — minors cannot contract', 'Voidable by the minor only', 'Voidable by either party', 'Fully enforceable'],
        correctIndex: 1,
        explanation: 'Contracts with minors are voidable — but only the minor can void them. The adult seller cannot back out simply because the buyer is a minor. The minor must affirm or disaffirm.',
      },
      {
        question: 'An oral agreement to sell real property for $450,000 is:',
        choices: ['Fully enforceable', 'Void — oral contracts are never valid', 'Unenforceable under the Statute of Frauds', 'Voidable at either party\'s option'],
        correctIndex: 2,
        explanation: 'The Statute of Frauds requires real estate sales contracts to be in writing. An oral agreement is unenforceable — not void, because there was mutual assent — but no court will enforce it.',
      },
      {
        question: 'A contract requires a party to commit fraud. This contract is:',
        choices: ['Voidable by the defrauded party', 'Unenforceable', 'Void — illegal contracts have no legal effect', 'Valid but carries civil penalties'],
        correctIndex: 2,
        explanation: 'A contract with an illegal purpose (lawful object is missing) is void ab initio — it has no legal effect from the start. Neither party can enforce it.',
      },
    ],
  },

  'which real estate agreements must be in writing under virginia law?': {
    questions: [
      {
        question: 'Which of the following does NOT need to be in writing under Virginia\'s Statute of Frauds?',
        choices: ['A contract to sell real property', 'A listing agreement', 'An oral lease for 10 months', 'A buyer representation agreement'],
        correctIndex: 2,
        explanation: 'Leases for one year or less are exempt from the Statute of Frauds writing requirement. However, Virginia best practice always calls for a written lease.',
      },
      {
        question: 'Electronic signatures on Virginia real estate contracts are:',
        choices: ['Not permitted — all signatures must be original ink', 'Valid only for rental agreements', 'Fully valid under UETA and ESIGN', 'Valid only with notarization'],
        correctIndex: 2,
        explanation: 'Both the federal ESIGN Act and Virginia\'s adoption of UETA make electronic signatures legally equivalent to handwritten signatures for real estate contracts.',
      },
    ],
  },

  'which remedy applies in each breach scenario — specific performance, damages, or rescission?': {
    questions: [
      {
        question: 'A seller refuses to convey their unique historic home after ratification. The buyer most likely wants:',
        choices: ['Compensatory damages equal to the difference in value', 'Specific performance — a court order forcing the sale', 'Rescission and return of the earnest money', 'Liquidated damages equal to the earnest money'],
        correctIndex: 1,
        explanation: 'Real estate is considered unique — no two parcels are identical. Specific performance (court-ordered conveyance) is the unique remedy for real estate breach unavailable for ordinary goods.',
      },
      {
        question: 'A buyer defaults and walks away from a contract. The seller keeps the earnest money. This remedy is called:',
        choices: ['Specific performance', 'Compensatory damages', 'Liquidated damages', 'Rescission'],
        correctIndex: 2,
        explanation: 'Retaining the earnest money as pre-agreed compensation for the buyer\'s default is liquidated damages. The parties agreed in advance this would be the remedy for buyer default.',
      },
      {
        question: 'Both parties to a failed contract want to be put back in their original positions as if the contract never existed. This is called:',
        choices: ['Novation', 'Rescission', 'Specific performance', 'Accord and satisfaction'],
        correctIndex: 1,
        explanation: 'Rescission cancels the contract and restores both parties to their pre-contract positions. EMD is returned, and neither party has further obligations.',
      },
    ],
  },

  'listing agreement type identification quiz': {
    questions: [
      {
        question: 'Under which listing type does the broker earn a commission even if the seller finds the buyer themselves?',
        choices: ['Open listing', 'Exclusive agency', 'Exclusive right to sell', 'Net listing'],
        correctIndex: 2,
        explanation: 'Exclusive right to sell — the broker earns commission regardless of who procures the buyer. It provides maximum protection to the broker.',
      },
      {
        question: 'Net listings are:',
        choices: ['The most common type of listing in Virginia', 'Common in commercial transactions only', 'Prohibited in Virginia', 'Legal only if the seller requests them'],
        correctIndex: 2,
        explanation: 'Net listings are expressly prohibited in Virginia because they create an inherent conflict of interest between the broker\'s financial interest and the seller\'s goal of getting the highest price.',
      },
    ],
  },

  'is commission owed in each listing termination scenario?': {
    questions: [
      {
        question: 'The listing expires without a sale. Is commission owed?',
        choices: ['Yes, the broker is always owed for their time', 'No, commission is typically only earned upon a ready, willing, and able buyer', 'Yes, but only half the agreed commission', 'Only if the broker can prove they showed the property'],
        correctIndex: 1,
        explanation: 'Expiration without a sale means no commission is earned. Commission is typically only earned when the broker procures a ready, willing, and able buyer.',
      },
      {
        question: 'A listing is cancelled by mutual agreement. The broker had a buyer under contract that fell through. Is commission owed?',
        choices: ['Yes, the broker procured a buyer', 'Depends on the terms of the mutual release', 'No, mutual release always extinguishes all claims', 'Yes, at least half commission'],
        correctIndex: 1,
        explanation: 'The terms of the mutual release control what happens to any pending commission claims. Agents should carefully review mutual release language before signing.',
      },
      {
        question: 'The seller dies before closing on a binding contract. Is commission owed to the broker?',
        choices: ['No, death automatically terminates all obligations', 'Yes, if a binding contract was in place, the estate owes the commission', 'Only if the listing has an extender clause', 'Only if the buyer also agrees to pay'],
        correctIndex: 1,
        explanation: 'If a binding purchase contract was in place before the seller\'s death, the commission obligation survives and the estate is responsible for paying it at closing.',
      },
    ],
  },

  'when is a contract formed? identify the moment of ratification in each scenario.': {
    questions: [
      {
        question: 'A buyer submits an offer. The seller calls the buyer\'s agent and verbally accepts. Is there a contract?',
        choices: ['Yes, verbal acceptance creates a binding contract', 'No, real estate acceptance must be in writing and communicated back', 'Only if the buyer confirms the acceptance', 'Yes, if both parties confirm in writing within 24 hours'],
        correctIndex: 1,
        explanation: 'Under the Statute of Frauds, real estate contracts must be in writing. Verbal acceptance does not create a binding real estate contract regardless of the mirror image rule.',
      },
      {
        question: 'The seller makes a counteroffer and the buyer accepts. When is the contract formed?',
        choices: ['When the buyer signs the counteroffer', 'When the seller\'s broker receives the signed counteroffer', 'When the seller\'s broker communicates the acceptance back to the buyer\'s agent', 'When both parties receive a copy of the fully executed contract'],
        correctIndex: 2,
        explanation: 'Ratification occurs when the offeree\'s acceptance is communicated back to the offeror. The seller countered, so the buyer is now the offeree — contract forms when the buyer\'s signed acceptance is communicated to the seller\'s side.',
      },
    ],
  },

  'match the loan program to its eligibility requirement and insurance type': {
    questions: [
      {
        question: 'Which loan program requires monthly Mortgage Insurance Premium (MIP) that may last for the life of the loan?',
        choices: ['VA loan', 'Conventional loan with PMI', 'FHA loan', 'USDA loan'],
        correctIndex: 2,
        explanation: 'FHA loans require MIP for the life of the loan if the down payment is less than 10%. If 10% or more is put down, MIP can be removed after 11 years.',
      },
      {
        question: 'A military veteran wants to buy with zero down and no monthly mortgage insurance. The best loan option is:',
        choices: ['FHA loan', 'USDA loan', 'Conventional 3% down', 'VA loan'],
        correctIndex: 3,
        explanation: 'VA loans offer 0% down and no monthly mortgage insurance. There is a one-time VA funding fee, which can be financed into the loan. It is the best option for eligible veterans.',
      },
      {
        question: 'Which loan has an income limit and only works for properties in designated rural areas?',
        choices: ['FHA loan', 'Conventional loan', 'USDA loan', 'Jumbo loan'],
        correctIndex: 2,
        explanation: 'USDA Rural Development loans have property location requirements (rural/suburban areas) and borrower income limits set by county.',
      },
    ],
  },

  'match each mortgage clause to what triggers it and what it does': {
    questions: [
      {
        question: 'Which clause allows the lender to demand the entire balance immediately if the borrower misses payments?',
        choices: ['Due-on-sale clause', 'Prepayment penalty clause', 'Acceleration clause', 'Defeasance clause'],
        correctIndex: 2,
        explanation: 'The acceleration clause allows the lender to "accelerate" the entire loan balance and make it immediately due upon default — rather than just collecting the missed payment.',
      },
      {
        question: 'A borrower pays off their mortgage. The lender must release the lien. Which clause addresses this?',
        choices: ['Subordination clause', 'Defeasance clause', 'Alienation clause', 'Acceleration clause'],
        correctIndex: 1,
        explanation: 'The defeasance clause defeats (terminates) the lien when the debt is paid in full. Virginia uses deeds of trust — reconveyance of the deed of trust serves a similar function.',
      },
      {
        question: 'Which clause prevents a borrower from transferring the mortgaged property without the lender\'s consent?',
        choices: ['Prepayment penalty clause', 'Defeasance clause', 'Acceleration clause', 'Due-on-sale (alienation) clause'],
        correctIndex: 3,
        explanation: 'The due-on-sale clause (also called the alienation clause) requires the full loan balance to be paid when the property is sold or transferred. It prevents assumable loans without lender approval.',
      },
    ],
  },

  'does this borrower qualify for a conventional loan based on the qualification standards?': {
    questions: [
      {
        question: 'A borrower earns $6,000/month. Their PITI would be $1,800. Their other monthly debts are $600. What is their back-end DTI?',
        choices: ['30%', '40%', '50%', '60%'],
        correctIndex: 1,
        explanation: 'Back-end DTI = (PITI + all other debts) / gross income = ($1,800 + $600) / $6,000 = $2,400 / $6,000 = 40%. The conventional standard is typically 43% or below.',
      },
      {
        question: 'A borrower puts 15% down on a $300,000 home. What is the LTV and is PMI required?',
        choices: ['LTV = 85%, PMI required', 'LTV = 85%, no PMI required', 'LTV = 15%, PMI required', 'LTV = 80%, no PMI required'],
        correctIndex: 0,
        explanation: 'LTV = loan / value = $255,000 / $300,000 = 85%. PMI is required for conventional loans when LTV exceeds 80%. It can be cancelled when LTV reaches 80%.',
      },
    ],
  },

  'primary vs. secondary mortgage market functions — who does what?': {
    questions: [
      {
        question: 'The primary mortgage market is where:',
        choices: ['Mortgages are bought and sold between investors', 'Borrowers obtain loans directly from lenders', 'Mortgage-backed securities are issued', 'Fannie Mae and Freddie Mac operate'],
        correctIndex: 1,
        explanation: 'The primary mortgage market is where borrowers (homebuyers) interact directly with lenders (banks, credit unions, mortgage companies) to originate new loans.',
      },
      {
        question: 'Fannie Mae and Freddie Mac operate in the:',
        choices: ['Primary mortgage market', 'Secondary mortgage market', 'Federal Reserve system', 'Both primary and secondary markets equally'],
        correctIndex: 1,
        explanation: 'Fannie Mae and Freddie Mac are secondary market entities. They purchase mortgages from primary lenders, package them into mortgage-backed securities, and sell them to investors — keeping money flowing back to lenders.',
      },
      {
        question: 'Which entity guarantees mortgages on government-backed securities (Ginnie Mae)?',
        choices: ['FHA only', 'VA only', 'Both FHA and VA loans (government-backed loans)', 'Fannie Mae'],
        correctIndex: 2,
        explanation: 'Ginnie Mae (Government National Mortgage Association) guarantees mortgage-backed securities backed by FHA, VA, and USDA loans. It does not buy mortgages directly.',
      },
    ],
  },

  'fixtures vs. personal property — which items convey with the property?': {
    questions: [
      {
        question: 'A seller has installed a custom-built bookcase that covers an entire wall and is bolted to the studs. At closing, the bookcase:',
        choices: ['Is personal property and belongs to the seller', 'Is a fixture and conveys with the property unless excluded in writing', 'Is negotiable only if the buyer asks', 'Depends on which party paid for it'],
        correctIndex: 1,
        explanation: 'Built-in, bolted bookshelves are likely fixtures under the MARIA test (Method of attachment, Adaptation, Relationship of parties, Intention, Agreement). They convey unless specifically excluded.',
      },
      {
        question: 'Which of these is most likely to be personal property (not a fixture)?',
        choices: ['Ceiling fan wired into the electrical system', 'Freestanding refrigerator', 'Wall-to-wall carpet', 'Built-in microwave over the range'],
        correctIndex: 1,
        explanation: 'A freestanding refrigerator is personal property — not attached to the real estate. The other items are attached to or built into the structure and are typically fixtures.',
      },
    ],
  },
}

// ─── DRAG-DROP CONTENT ────────────────────────────────────────────────────────

export const DRAG_DROP_CONTENT: Record<string, DragDropSet> = {
  'match each violation type to its likely disciplinary range (censure, fine, suspension, revocation)': {
    instruction: 'Drag each violation to the most likely disciplinary outcome',
    zones: ['Censure (Letter of Reprimand)', 'Monetary Fine', 'License Suspension', 'License Revocation'],
    items: [
      { item: 'First-time minor paperwork error with no harm to clients', zone: 'Censure (Letter of Reprimand)' },
      { item: 'Late delivery of agency disclosure form', zone: 'Monetary Fine' },
      { item: 'Repeated trust account violations over 2 years', zone: 'License Suspension' },
      { item: 'Conversion of client funds (theft from escrow)', zone: 'License Revocation' },
      { item: 'Advertising without broker\'s name as required', zone: 'Monetary Fine' },
      { item: 'Fraud in a transaction resulting in client financial loss', zone: 'License Revocation' },
    ],
  },

  'sort each scenario into "license required" or "license exempt" columns based on virginia law': {
    instruction: 'Sort each person into the correct column',
    zones: ['License Required', 'License Exempt'],
    items: [
      { item: 'A freelance agent helping buyers find homes for a 2% commission', zone: 'License Required' },
      { item: 'An attorney selling a client\'s estate property as legal representative', zone: 'License Exempt' },
      { item: 'A property manager at a company owning 10 rental units', zone: 'License Required' },
      { item: 'An on-site apartment manager employed by the building owner', zone: 'License Exempt' },
      { item: 'A homeowner selling their own primary residence', zone: 'License Exempt' },
      { item: 'A person earning referral fees for sending buyers to a brokerage', zone: 'License Required' },
    ],
  },

  'assign the correct agency type to each transaction scenario': {
    instruction: 'Match each scenario to the correct agency type',
    zones: ["Seller's Agency", "Buyer's Agency", 'Dual Agency', 'Designated Agency'],
    items: [
      { item: 'Agent Mary lists a home and represents only the seller\'s interests', zone: "Seller's Agency" },
      { item: 'Agent Tom signs an exclusive buyer agreement with a buyer client', zone: "Buyer's Agency" },
      { item: 'Agent Lisa represents both the buyer and seller in the same transaction with both parties\' consent', zone: 'Dual Agency' },
      { item: 'Two agents from the same brokerage each represent one side — one the buyer, one the seller', zone: 'Designated Agency' },
      { item: 'The listing broker represents the seller; the buyer has no agent and the listing agent assists both', zone: 'Dual Agency' },
    ],
  },

  'categorize each scenario as "fha applies," "potentially exempt," or "exempt" and identify the exemption': {
    instruction: 'Drag each scenario to the correct Fair Housing category',
    zones: ['FHA Applies', 'Potentially Exempt', 'Exempt'],
    items: [
      { item: 'A large apartment complex refuses to rent to families with children', zone: 'FHA Applies' },
      { item: 'An owner-occupied single-family home sold without a broker and without advertising', zone: 'Exempt' },
      { item: 'A church rents rooms in a church-owned boarding house only to church members', zone: 'Potentially Exempt' },
      { item: 'A 55+ community refuses to rent to a 40-year-old', zone: 'Potentially Exempt' },
      { item: 'A four-unit building where the owner lives in one unit and refuses to rent to a person based on race', zone: 'FHA Applies' },
      { item: 'An individual owner of a duplex with no Fair Housing advertising refuses to rent to a Black applicant', zone: 'FHA Applies' },
    ],
  },

  'match ownership type to its defining document and ownership structure': {
    instruction: 'Match each ownership type to its key document',
    zones: ['Condominium', 'Cooperative', 'Planned Unit Development (PUD)'],
    items: [
      { item: 'Owner holds a unit deed plus an undivided interest in common elements', zone: 'Condominium' },
      { item: 'Owner holds stock in a corporation and a proprietary lease for their unit', zone: 'Cooperative' },
      { item: 'Owner holds fee simple title to their lot plus mandatory HOA membership', zone: 'Planned Unit Development (PUD)' },
      { item: 'Governed by a Declaration of Condominium and the Virginia Condominium Act', zone: 'Condominium' },
      { item: 'Governed by a Property Owners Association and the POAA', zone: 'Planned Unit Development (PUD)' },
    ],
  },

  'trace a metes and bounds description on a plot diagram — identify each call': {
    instruction: 'Match each metes and bounds component to its definition',
    zones: ['Point of Beginning (POB)', 'Bearing', 'Distance', 'Monument'],
    items: [
      { item: 'The starting point from which the description begins and ends', zone: 'Point of Beginning (POB)' },
      { item: 'N 45° E — the direction of travel expressed in compass degrees', zone: 'Bearing' },
      { item: '150 feet — the length of a boundary line segment', zone: 'Distance' },
      { item: 'An iron pin, oak tree, or concrete marker used to establish a boundary point', zone: 'Monument' },
      { item: 'S 30° W 200 feet to a concrete cap — the "S 30° W" part', zone: 'Bearing' },
    ],
  },

  'sort contract clauses into conditions precedent, conditions subsequent, and contingencies': {
    instruction: 'Sort each clause into the correct contract category',
    zones: ['Condition Precedent', 'Condition Subsequent', 'Contingency'],
    items: [
      { item: '"This contract is contingent upon buyer obtaining financing at 7% or better"', zone: 'Contingency' },
      { item: '"Buyer must obtain loan approval before seller is obligated to convey"', zone: 'Condition Precedent' },
      { item: '"If the property is rezoned commercial, the contract is null and void"', zone: 'Condition Subsequent' },
      { item: '"Home inspection must be completed within 10 days of ratification"', zone: 'Condition Precedent' },
      { item: '"If the seller\'s divorce is not finalized by closing, either party may terminate"', zone: 'Condition Subsequent' },
    ],
  },

  'organize the inspection contingency timeline from contract ratification to expiration': {
    instruction: 'Arrange the inspection contingency events in correct order',
    zones: ['Day 0: Ratification', 'Days 1-10: Inspection Period', 'Day 10: Deadline', 'After Deadline'],
    items: [
      { item: 'Both parties sign and ratify the purchase agreement', zone: 'Day 0: Ratification' },
      { item: 'Buyer schedules and completes home inspection', zone: 'Days 1-10: Inspection Period' },
      { item: 'Buyer receives inspection report and reviews findings', zone: 'Days 1-10: Inspection Period' },
      { item: 'Buyer must submit written repair request, credit request, or termination notice', zone: 'Day 10: Deadline' },
      { item: 'If no action by deadline, contingency is waived — buyer accepts property as-is', zone: 'After Deadline' },
    ],
  },

  'place each negotiation event on the offer/counteroffer timeline in the correct order': {
    instruction: 'Place each event on the correct part of the offer timeline',
    zones: ['Original Offer', 'Counteroffer Stage', 'Contract Formation', 'Contract Void'],
    items: [
      { item: 'Buyer submits written offer at $450,000', zone: 'Original Offer' },
      { item: 'Seller crosses out price and writes $465,000 — this kills the original offer', zone: 'Counteroffer Stage' },
      { item: 'Buyer signs the counteroffer and buyer\'s agent communicates acceptance', zone: 'Contract Formation' },
      { item: 'Original offer expires before seller responds — no binding agreement', zone: 'Contract Void' },
      { item: 'Seller sends a second counteroffer after buyer rejects the first', zone: 'Counteroffer Stage' },
    ],
  },
}

// ─── SCENARIO CONTENT ─────────────────────────────────────────────────────────

export const SCENARIO_CONTENT: Record<string, ScenarioSet> = {
  "agent alex receives an earnest money deposit and deposits it into his personal account for two days before forwarding it to the broker. walk through the disciplinary process and likely outcome.": {
    situation: 'Agent Alex receives a $5,000 earnest money check from a buyer. Instead of delivering it to his broker immediately, he deposits it into his personal checking account for two days before forwarding it.',
    question: 'What violation has Alex committed, and what is the most likely disciplinary outcome?',
    choices: [
      { label: 'This is commingling — a minor paperwork issue. Alex will receive a written warning.', isCorrect: false, explanation: 'Depositing client funds into a personal account is more serious than a paperwork issue. Commingling is a significant license law violation.' },
      { label: 'Alex has committed commingling of trust funds. VREB will likely issue a fine and could suspend his license, especially if this is not his first violation.', isCorrect: true, explanation: 'Commingling (mixing client funds with personal funds) violates Virginia license law. Depending on Alex\'s history and whether the client was harmed, penalties range from fines to suspension. If he spent any of the funds, it becomes conversion — which typically leads to revocation.' },
      { label: 'Alex must simply return the $5,000. No disciplinary action is warranted since no money was lost.', isCorrect: false, explanation: 'Whether or not the client lost money is irrelevant to the license violation. The act of depositing into a personal account is itself a violation requiring disciplinary response.' },
      { label: 'This situation requires a criminal conviction before VREB can take any action.', isCorrect: false, explanation: 'VREB can take disciplinary action — including license suspension — for license law violations independently of any criminal proceedings.' },
    ],
    summary: 'Commingling client funds with personal funds is a serious license law violation. VREB can impose fines, suspend, or revoke a license. The client not losing money is not a defense. If the agent spent any client funds, the charge becomes conversion — a revocable offense.',
  },

  "agent maria learns her buyer-client's maximum budget. the seller asks directly what the buyer would pay. what are maria's duties here?": {
    situation: 'Agent Maria is representing a buyer. Through conversations, she has learned her buyer is willing to pay up to $425,000 for a home listed at $400,000. During a showing, the listing agent (representing the seller) directly asks Maria: "What is the most your buyer would pay?"',
    question: 'What should Maria do?',
    choices: [
      { label: 'Answer honestly — full transparency benefits the transaction.', isCorrect: false, explanation: 'Maria owes confidentiality to her buyer-client. Disclosing the buyer\'s maximum price would directly harm the buyer\'s negotiating position and violate Maria\'s fiduciary duty.' },
      { label: 'Decline to answer. The buyer\'s maximum price is confidential information Maria must protect under her duty of confidentiality and loyalty.', isCorrect: true, explanation: 'Maria\'s fiduciary duties of loyalty and confidentiality require her to protect information that would harm the buyer\'s negotiating position. She must decline to answer. She can say the buyer is prepared to make a competitive offer.' },
      { label: 'Disclose the information only if the listing agent promises not to use it.', isCorrect: false, explanation: 'There is no way to un-ring that bell. Once disclosed, the seller will know the maximum price. Oral promises by the other agent provide no protection. This would still breach confidentiality.' },
      { label: 'Tell the seller the buyer\'s maximum is $415,000 to leave some negotiating room.', isCorrect: false, explanation: 'Providing any version of the buyer\'s maximum price — even a modified one — violates the fiduciary duty of confidentiality and is a form of misrepresentation.' },
    ],
    summary: 'The fiduciary duty of confidentiality survives the transaction and requires agents to protect client information that could be used against them. A buyer\'s maximum price is the classic example. The duty of loyalty reinforces this — Maria\'s sole obligation in that moment is her buyer\'s financial interest.',
  },

  "two agents at the same brokerage — one represents the buyer, one the seller. what agency type applies and what are the broker's obligations?": {
    situation: 'Broker Smith\'s brokerage has 12 agents. Agent Davis represents a buyer interested in purchasing a home listed by Agent Jones, who represents the seller. Both agents work for Broker Smith.',
    question: 'What agency type applies, and what must Broker Smith do?',
    choices: [
      { label: 'This is dual agency — Broker Smith must represent both parties equally and get written consent.', isCorrect: false, explanation: 'When two agents in the same brokerage represent different parties in the same transaction, the preferred approach in Virginia is designated agency — not dual agency — which preserves each client\'s representation.' },
      { label: 'This is designated agency. Broker Smith must obtain written consent from both parties and ensure each designated agent advocates only for their respective client.', isCorrect: true, explanation: 'Virginia law recognizes designated agency: the broker designates specific agents to each client. Each designated agent advocates fully for their client. The broker becomes a limited dual agent — aware of both sides but not sharing confidential information. Written consent is required from all parties.' },
      { label: 'No special disclosure is needed since two separate agents are involved.', isCorrect: false, explanation: 'Because both agents work for the same broker, a disclosure obligation exists. Without proper designated agency disclosure and consent, this defaults to dual agency — potentially without the required consent.' },
      { label: 'Agent Davis must withdraw from the transaction to avoid a conflict.', isCorrect: false, explanation: 'Withdrawal is not required when designated agency is properly set up. Both clients can be served by agents at the same brokerage with proper disclosure and consent.' },
    ],
    summary: 'Designated agency is the solution that allows two agents in the same brokerage to represent opposing parties. Each designated agent remains a fully loyal advocate. The principal broker becomes a limited dual agent and must avoid sharing confidential information between the two agents.',
  },

  "a seller fires their listing agent two weeks before closing, then closes with a buyer the agent brought. is the agent owed a commission? walk through procuring cause analysis.": {
    situation: 'Listing Agent Kim listed a home in March. In April, she showed the property to Buyer Carlos, who submitted an offer. The offer was rejected. In May, Seller fired Agent Kim and listed with Broker Brown. In June, Buyer Carlos (the same buyer Kim showed the property to) submitted a new offer through Broker Brown and closed on the property.',
    question: 'Is Agent Kim entitled to a commission?',
    choices: [
      { label: 'No — Agent Kim was fired, so she has no claim to any commission.', isCorrect: false, explanation: 'Termination of the listing does not automatically extinguish a procuring cause claim if the agent started the unbroken chain of events leading to the sale.' },
      { label: 'Yes — Agent Kim is likely the procuring cause. She introduced the buyer and started the unbroken chain of events that led to the sale. She may have a strong commission claim.', isCorrect: true, explanation: 'Procuring cause analysis asks: Who started the unbroken chain of events leading to the sale? Kim introduced Carlos to the property, Carlos bought the property. The seller\'s firing of Kim does not break that chain if Kim was the one who found the buyer. An extender clause in the listing agreement would specifically protect Kim in this scenario.' },
      { label: 'Broker Brown is owed all commission since they closed the transaction.', isCorrect: false, explanation: 'Closing the transaction alone does not make someone the procuring cause. The procuring cause is the one who started the unbroken chain of events — which here appears to be Kim.' },
      { label: 'The buyer owes the commission since they switched agents.', isCorrect: false, explanation: 'Commission obligations run between the seller and the listing broker (and cooperating brokers). The buyer is not typically liable for the seller\'s side commission.' },
    ],
    summary: 'Procuring cause determines who earned the commission — it is the agent who started the unbroken chain of events leading to the sale. Agent Kim has a strong procuring cause argument. An extender clause in the original listing agreement would have explicitly protected her claim if the buyer she introduced closed after the listing terminated.',
  },

  "a landlord tells a family with three kids that \"this building tends to be pretty quiet and is better suited for adults.\" analyze the fair housing implications.": {
    situation: 'The Rodrigues family — two adults and three children ages 4, 7, and 10 — applied to rent a unit in a 24-unit apartment building. The property manager told them: "This building tends to be pretty quiet and is better suited for adults. You might be happier somewhere with more kids around."',
    question: 'What Fair Housing issue does this raise?',
    choices: [
      { label: 'No violation — this was just friendly advice, not a refusal to rent.', isCorrect: false, explanation: 'Steering and discouraging families with children from applying is a Fair Housing violation even without an outright refusal. Suggesting the unit is "better suited for adults" is discriminatory steering based on familial status.' },
      { label: 'This is familial status discrimination — discouraging families with children from renting, which violates the Fair Housing Act.', isCorrect: true, explanation: 'The Fair Housing Act prohibits discrimination based on familial status (families with children under 18). Steering — including discouraging families from applying by suggesting the property is better for adults — is prohibited even without a formal denial. The landlord\'s comment creates significant exposure.' },
      { label: 'This is age discrimination, which is only illegal under Virginia law, not federal law.', isCorrect: false, explanation: 'Familial status (protecting families with children) is a federal protected class under the Fair Housing Act. The landlord\'s comment implicates federal law, not just Virginia\'s elderliness protection.' },
      { label: 'This would only be a violation if the landlord formally refused the application in writing.', isCorrect: false, explanation: 'Fair Housing violations do not require a written refusal. Verbal steering, discouraging statements, and differential treatment all constitute violations, even without a formal written denial.' },
    ],
    summary: 'Familial status is a federal protected class under the 1988 Fair Housing Act amendments. Any statement or action that discourages families with children from applying — including suggesting the building is "better for adults" — constitutes illegal steering and a Fair Housing violation. The building is not eligible for the senior housing exemption at 24 units without meeting the specific 55+ requirements.',
  },

  "a church owns a 4-unit building and only wants to rent to church members. the owner lives in one of the units. which exemption(s) might apply and what are their conditions?": {
    situation: 'First Community Church owns a 4-unit building adjacent to the church. The pastor lives in one unit. The church wants to rent the other three units only to church members.',
    question: 'Which Fair Housing exemption(s) might protect the church?',
    choices: [
      { label: 'The Mrs. Murphy exemption covers this because the owner lives in one of the units.', isCorrect: false, explanation: 'The Mrs. Murphy exemption covers owner-occupied buildings of 4 or fewer units — but it does not override the prohibition on discriminating based on RACE, which has no exemptions under any FHA provision. Mrs. Murphy cannot restrict based on race.' },
      { label: 'The religious organization exemption may apply, allowing the church to give preference to members — but the church cannot discriminate based on race, color, or national origin even under this exemption.', isCorrect: true, explanation: 'The religious organization exemption allows religious organizations to give preference to their members in housing they own and operate, provided membership is not restricted based on race, color, or national origin. The church also may have a Mrs. Murphy argument since the pastor lives in one unit. But neither exemption allows race discrimination.' },
      { label: 'No exemption applies — churches must follow all Fair Housing rules without exception.', isCorrect: false, explanation: 'The Fair Housing Act includes an explicit exemption for religious organizations. They may give preference to members in housing they own for non-commercial purposes — subject to the caveat about race and national origin.' },
      { label: 'Both exemptions apply fully and the church can restrict to any criteria it chooses.', isCorrect: false, explanation: 'Exemptions are not blanket — they do not override the race, color, and national origin protections which apply without exception. And the religious exemption requires that membership itself not be restricted by race.' },
    ],
    summary: 'The religious organization exemption allows preference for members in non-commercial religious housing. The Mrs. Murphy exemption covers small owner-occupied buildings. However, neither exemption allows discrimination based on race, color, or national origin — which remain absolutely prohibited with no FHA exemptions.',
  },

  "a landlord charges $3,000 security deposit on a $1,200/month apartment and keeps $1,500 after move-out without an itemized list. what are the tenant's remedies?": {
    situation: 'Tenant Jasmine paid a $3,000 security deposit on a $1,200/month apartment. After moving out, the landlord kept $1,500 and returned $1,500, but provided no itemized list of deductions.',
    question: 'What violations occurred and what are Jasmine\'s remedies?',
    choices: [
      { label: 'No violation — the landlord returned most of the deposit and is entitled to some deductions.', isCorrect: false, explanation: 'Two violations occurred: (1) the $3,000 deposit exceeds the 2-month cap ($2,400 max), and (2) the landlord failed to provide an itemized deduction list as required by the VRLTA.' },
      { label: 'Two violations: the deposit exceeded 2 months\' rent (cap is $2,400), and the landlord failed to provide an itemized deduction list. Jasmine can sue for the illegally overcharged deposit amount AND potentially recover the entire withheld amount for failure to itemize.', isCorrect: true, explanation: 'Virginia limits security deposits to 2 months\' rent = $2,400 maximum. The $3,000 deposit was $600 over the limit. The VRLTA requires an itemized written list of deductions with the withheld amount. Without this list, the landlord may forfeit the right to keep any deductions. Jasmine can seek both the overcharge and the improperly withheld amount in General District Court.' },
      { label: 'Jasmine can only recover the excess deposit ($600) since the landlord has a right to make deductions.', isCorrect: false, explanation: 'The failure to provide an itemized list is a separate and significant violation. Courts have held that landlords who fail to provide the required itemization forfeit their right to deduct — potentially making the entire $1,500 wrongful.' },
      { label: 'Jasmine must file with DPOR before she can sue in court.', isCorrect: false, explanation: 'Security deposit disputes are resolved in General District Court, not through DPOR. DPOR handles license violations, not landlord-tenant monetary disputes.' },
    ],
    summary: 'Virginia\'s VRLTA caps security deposits at 2 months\' rent. Excess deposits are recoverable. Additionally, landlords must provide an itemized written list of deductions within 45 days of move-out. Failure to itemize may cause the landlord to lose the right to any deductions at all. Both violations here are actionable in General District Court.',
  },

  "a tenant is three weeks late on rent. walk through every step the landlord must take to legally evict this tenant under the vrlta, from first notice to writ of possession.": {
    situation: 'Tenant Marcus has not paid rent for three weeks. The landlord wants to evict him. The property is covered by the VRLTA.',
    question: 'What is the correct legal process for the landlord?',
    choices: [
      { label: 'The landlord can change the locks after giving 48 hours written notice.', isCorrect: false, explanation: 'Changing locks is illegal self-help eviction under the VRLTA regardless of notice period. The landlord must use the court process.' },
      { label: 'Step 1: Serve a written 5-day pay-or-quit notice. Step 2: If Marcus does not pay or vacate, file an Unlawful Detainer in General District Court. Step 3: Attend the court hearing. Step 4: If judgment is for the landlord, request a Writ of Possession. Step 5: Sheriff enforces the writ.', isCorrect: true, explanation: 'This is the complete, correct VRLTA eviction sequence. The 5-day notice gives the tenant a chance to cure the breach. The Unlawful Detainer is the court filing. The Writ of Possession authorizes the sheriff to remove the tenant. The landlord cannot skip any step or take self-help action.' },
      { label: 'The landlord can simply call the police to remove the tenant after three weeks of non-payment.', isCorrect: false, explanation: 'Police will not remove a tenant without a court-ordered Writ of Possession. This would be considered an illegal self-help eviction attempt.' },
      { label: 'The landlord must wait 30 days before starting any legal process.', isCorrect: false, explanation: 'Under the VRLTA, a 5-day written notice to pay or quit can be served immediately upon default. No 30-day waiting period applies to non-payment of rent.' },
    ],
    summary: 'Virginia\'s lawful eviction process: (1) Written 5-day pay-or-quit notice. (2) File Unlawful Detainer in General District Court. (3) Court hearing — both sides may present evidence. (4) If judgment entered for landlord, file for Writ of Possession. (5) Sheriff executes the writ. Self-help eviction (locks, utilities, removing belongings) is illegal at every stage.',
  },

  "a seller tells their listing agent the basement occasionally floods. the agent does not mention it to buyers. the buyer closes and discovers the issue. who has liability and why?": {
    situation: 'Seller Tom told his listing agent, Agent Sandra, that the basement floods occasionally during heavy rain. Sandra never disclosed this to any buyers. Buyer Kevin purchased the home and discovered significant water intrusion during the first rainstorm after moving in.',
    question: 'Who has liability and what are the legal theories?',
    choices: [
      { label: 'Only Tom has liability since he had the knowledge — Sandra was just following her seller\'s wishes.', isCorrect: false, explanation: 'Agents have an independent duty to disclose material facts they know about. "Following the seller\'s wishes" does not absolve the agent of their own disclosure obligation under Virginia law.' },
      { label: 'Both Tom and Sandra have liability. Tom failed to disclose a known latent defect. Sandra, as a fiduciary who knew of an adverse material fact, had an independent legal duty to disclose it to buyers regardless of what Tom wanted.', isCorrect: true, explanation: 'Sellers must disclose known material defects. Agents have an independent duty under Virginia Code to disclose adverse material facts they know, regardless of client instructions. The flooding history is a classic latent defect and adverse material fact. Sandra cannot claim she was just following orders — her license and professional liability are on the line.' },
      { label: 'No liability exists because the purchase was an "as-is" sale.', isCorrect: false, explanation: '"As-is" clauses do not eliminate the duty to disclose known defects. Sellers and agents must still disclose material facts even in as-is transactions. As-is means the buyer accepts the condition — but only if they are told what that condition actually is.' },
      { label: 'Kevin has no claim because he had the right to inspect the property before closing.', isCorrect: false, explanation: 'A buyer\'s right to inspect does not eliminate the seller\'s and agent\'s duty to disclose known latent defects. Basement flooding that is not visible during a normal inspection is exactly the type of latent defect that requires affirmative disclosure.' },
    ],
    summary: 'In Virginia, both sellers and listing agents have affirmative duties to disclose material adverse facts. Flooding history is a latent defect — not discoverable by typical inspection — that must be disclosed. Tom breached his duty as seller. Sandra violated Virginia Code Section 54.1-2131 by failing to disclose an adverse material fact she knew. Kevin likely has claims against both for fraudulent concealment and misrepresentation.',
  },

  "an agent owns a home inspection company. their buyer-client asks for inspector recommendations. the agent recommends their own company without disclosing ownership. what laws and ethics standards apply?": {
    situation: 'Agent David owns a 50% interest in a home inspection company called Reliable Inspections. His buyer-client asks for inspector recommendations. David recommends Reliable Inspections without disclosing his ownership stake.',
    question: 'What legal and ethical violations has David committed?',
    choices: [
      { label: 'No violation — agents are permitted to recommend service providers they know and trust.', isCorrect: false, explanation: 'Recommending a company you own without disclosure is not a neutral recommendation. It violates both RESPA\'s affiliated business arrangement rules and fiduciary duties.' },
      { label: 'David has violated RESPA (undisclosed affiliated business arrangement), violated his fiduciary duty of disclosure to his buyer-client, and likely violated NAR Code Article 6 (undisclosed compensation/interest).', isCorrect: true, explanation: 'RESPA requires written disclosure when referring clients to affiliated businesses (businesses in which the agent has an ownership interest). The fiduciary duty of disclosure requires David to tell his client about his ownership. NAR Code Article 6 prohibits agents from accepting compensation or benefits from service providers without client knowledge. All three were violated here.' },
      { label: 'This only violates RESPA if money changed hands.', isCorrect: false, explanation: 'RESPA\'s affiliated business arrangement rules require disclosure of the ownership interest itself — not just cash referral fees. The financial benefit of directing business to David\'s own company is itself the compensation.' },
      { label: 'This is an ethics violation only — RESPA only applies to lenders.', isCorrect: false, explanation: 'RESPA applies to all settlement service providers, including home inspectors, title companies, pest inspectors, and attorneys — not just lenders. Affiliated business arrangement disclosures are specifically required.' },
    ],
    summary: 'When an agent refers clients to a business they own or have a financial interest in, RESPA requires a written Affiliated Business Arrangement (AfBA) disclosure. The client must be told the nature of the relationship and that they are free to use any inspector they choose. David\'s fiduciary duty of disclosure and NAR Code Article 6 both independently require this disclosure. Failure to disclose exposes David to RESPA penalties, ethics complaints, and possible license action.',
  },

  "a buyer is purchasing a unit in a virginia condominium. what documents must be provided and what is the review period?": {
    situation: 'Buyer Lisa has a ratified contract to purchase a condo unit at Oak Creek Condominiums in Richmond. This is her first condo purchase.',
    question: 'What documents must the seller provide, and what is Lisa\'s cancellation right?',
    choices: [
      { label: 'The seller must provide HOA meeting minutes only. Lisa has 5 days to cancel.', isCorrect: false, explanation: 'Condo purchases in Virginia require a full resale certificate package, not just meeting minutes. The cancellation period is also different.' },
      { label: 'The seller must provide the Condo Resale Certificate (including financial statements, rules, insurance, reserve fund info, and pending assessments). Lisa has 3 days after receipt to cancel without penalty.', isCorrect: true, explanation: 'Virginia\'s Condominium Act requires sellers to provide a complete Resale Certificate. It must include the condo declaration, bylaws, rules, current financial statements, reserve fund status, pending assessments, and insurance information. The buyer has 3 days after receiving the complete package to cancel — for any reason — and receive a full refund of the EMD.' },
      { label: 'No documents are required — condo purchases are treated the same as single-family homes.', isCorrect: false, explanation: 'Virginia\'s Condominium Act creates specific disclosure requirements distinct from standard residential sales. Buyers must receive the Resale Certificate before closing.' },
      { label: 'Lisa has 10 days to cancel, which is the same as for all Virginia real estate purchases.', isCorrect: false, explanation: 'There is no general 10-day cancellation right in Virginia residential real estate. The 3-day cancellation right is specific to condo and HOA (POAA) purchases upon receipt of the required disclosure packet.' },
    ],
    summary: 'Virginia\'s Condominium Act mandates that sellers provide a complete Resale Certificate containing all governing documents, financial statements, reserve fund status, pending assessments, and insurance information. The buyer then has 3 calendar days to review and cancel — no reason needed, full EMD refund. This is a powerful buyer protection unique to condo purchases in Virginia.',
  },

  "a property owner wants to operate a hair salon from their home in an r-1 residential zone. what approval processes might be available?": {
    situation: 'Maria owns her home in an R-1 (single-family residential) zone in Chesterfield County, Virginia. She wants to run a hair salon from a converted garage.',
    question: 'What approval processes might be available to Maria?',
    choices: [
      { label: 'Maria can operate the salon without any approval since she owns her home.', isCorrect: false, explanation: 'Ownership does not override zoning regulations. Operating a commercial business in a residential zone without approval is a zoning violation.' },
      { label: 'Maria might apply for a Home Occupation Permit, a Special Use Permit, or a Use Variance, depending on what the local zoning ordinance allows — or she could seek a variance if strict compliance causes undue hardship.', isCorrect: true, explanation: 'Most Virginia localities allow home occupations under specific conditions (limited customers, no exterior changes, limited employees). Maria might apply for a home occupation permit. If the zoning code allows salons conditionally, a Special Use Permit (SUP) or Conditional Use Permit (CUP) is another path. A use variance is possible but difficult — she would need to prove undue hardship, not merely inconvenience.' },
      { label: 'Maria\'s only option is to rezone her parcel from R-1 to commercial.', isCorrect: false, explanation: 'Rezoning is the most difficult path and is typically reserved for larger developments. Home occupation permits and special use permits are more commonly used for residential business uses.' },
      { label: 'Hair salons are always prohibited in residential zones with no exceptions.', isCorrect: false, explanation: 'Most Virginia localities have home occupation provisions that allow limited commercial activity from residences. A hair salon might qualify depending on the number of clients, employees, and exterior changes required.' },
    ],
    summary: 'Virginia zoning offers several paths for limited business use in residential zones: (1) Home Occupation Permit for small-scale business that doesn\'t change the residential character; (2) Special Use Permit (Conditional Use Permit) for uses specifically listed as conditionally permitted; (3) Variance for relief from dimensional or use requirements upon showing undue hardship. Spot zoning — changing Maria\'s parcel alone — would be the most difficult and politically sensitive path.',
  },

  "a buyer's lender requires flood insurance. the buyer asks why their neighbor in the same subdivision does not need it. explain flood zone designations.": {
    situation: 'Buyer Sam\'s lender requires him to purchase flood insurance for the home he is buying. His neighbor in the same subdivision does not have this requirement. Both homes are in the same ZIP code.',
    question: 'How would you explain this difference to Sam?',
    choices: [
      { label: 'The neighbor must be using a different lender. Flood insurance requirements vary by lender, not by property.', isCorrect: false, explanation: 'Flood insurance requirements under the NFIP are tied to the FEMA flood zone of the specific property, not the lender\'s preference. All federally backed lenders must require flood insurance for properties in Special Flood Hazard Areas (SFHA).' },
      { label: 'FEMA flood zone maps draw specific boundaries. Sam\'s property is in a Special Flood Hazard Area (Zone A or AE), which triggers mandatory flood insurance for federally backed loans. The neighbor\'s property is in a lower-risk zone. Two homes on the same street can have different flood designations.', isCorrect: true, explanation: 'FEMA Flood Insurance Rate Maps (FIRMs) draw zone boundaries based on detailed topographic and hydrological analysis. Zone A and AE = Special Flood Hazard Area (100-year flood plain) = mandatory flood insurance for federally backed loans. Zones B, C, and X are moderate/minimal risk = no mandate. A single street can cross flood zone boundaries, putting two neighbors in different zones.' },
      { label: 'Flood insurance is always optional. Sam\'s lender is being overly cautious.', isCorrect: false, explanation: 'The National Flood Insurance Program (NFIP) mandates flood insurance for all federally backed mortgage loans (FHA, VA, Fannie/Freddie) on properties in Special Flood Hazard Areas. This is not discretionary.' },
      { label: 'Sam should dispute the FEMA designation — it is probably an error.', isCorrect: false, explanation: 'While FEMA map amendments (LOMA) are possible, they require professional surveying and documentation. Simply assuming it is an error is not the appropriate advice. The agent should explain the zone system and suggest Sam consult his lender about the specific designation.' },
    ],
    summary: 'FEMA\'s Flood Insurance Rate Maps create specific zone boundaries. Special Flood Hazard Areas (Zone A, AE, AH, AO) trigger the NFIP mandatory purchase requirement for all federally backed loans. Zone X is minimal risk with no mandate. Two properties on the same street can be in different zones depending on elevation and proximity to water. Property flood zones are disclosed as a material fact in Virginia residential transactions.',
  },

  "a contract has a financing contingency that expires june 15. the buyer has not received loan approval. what are their options?": {
    situation: 'The ratified purchase contract contains a financing contingency that expires June 15. It is now June 13. The buyer applied for a loan on time but has not yet received a loan approval or denial.',
    question: 'What are the buyer\'s options before June 15?',
    choices: [
      { label: 'The buyer must close regardless — the contingency period is nearly over.', isCorrect: false, explanation: 'The buyer has not waived the contingency yet. As long as the deadline has not passed without action, the buyer can still exercise the contingency.' },
      { label: 'The buyer can: (1) request a written extension from the seller, (2) exercise the contingency by providing written notice of the financing issue before June 15 to cancel and recover the EMD, or (3) waive the contingency and proceed at risk.', isCorrect: true, explanation: 'Before the contingency deadline, the buyer has full flexibility. Requesting an extension is the most common approach when the loan is pending but not yet approved. If denied, the buyer can exercise the contingency in writing before the deadline. Waiting until June 15 without action waives the contingency.' },
      { label: 'The buyer can cancel at any time after closing since financing issues are always a valid excuse.', isCorrect: false, explanation: 'Once the financing contingency expires without written exercise, it is waived. After that point, the buyer cannot use financing failure as a basis to cancel and recover the EMD.' },
      { label: 'The lender automatically notifies the seller if a loan is denied — no buyer action is needed.', isCorrect: false, explanation: 'The buyer\'s agent must take affirmative written action before the deadline. There is no automatic notification system. Silence = waiver of the contingency.' },
    ],
    summary: 'Financing contingencies require affirmative written action before the deadline or they are waived. The buyer\'s options are: (1) request a written extension from the seller; (2) exercise the contingency in writing by the deadline; or (3) waive it. Pre-approval is not a loan commitment — a buyer can have pre-approval and still need to exercise the contingency if the formal commitment is delayed.',
  },

  "a buyer has a financing contingency through july 10. on july 8, the lender denies the loan. the seller refuses to release earnest money. walk through the buyer's position.": {
    situation: 'The contract has a financing contingency through July 10. On July 8, the lender issues a written denial letter. The buyer\'s agent sends written notice to the seller exercising the contingency on July 8. The seller refuses to sign the mutual release, claiming the buyer did not make a "good faith effort."',
    question: 'What is the buyer\'s legal position?',
    choices: [
      { label: 'The seller is right — without a good faith effort, the buyer forfeits the EMD.', isCorrect: false, explanation: 'The buyer submitted the loan application, cooperated with the lender, and received a written denial — these actions demonstrate good faith. A lender denial for qualifying reasons (credit, income) is not a failure of good faith.' },
      { label: 'The buyer properly exercised the contingency before the deadline with a written denial letter. The buyer is entitled to the EMD back. The broker should hold the disputed EMD until resolved by mutual release or court order — and may interplead if the dispute cannot be resolved.', isCorrect: true, explanation: 'The buyer timely exercised the contingency with a written lender denial — both required actions were completed before July 10. Good faith is demonstrated by a genuine loan application and an actual denial. The seller\'s refusal to release is grounds for a dispute. The broker cannot disburse disputed EMD without a mutual release or court order.' },
      { label: 'The broker should give the EMD to the buyer immediately since the contingency was exercised.', isCorrect: false, explanation: 'The broker cannot unilaterally disburse disputed EMD to either party. The broker must hold the funds until both parties sign a mutual release or a court orders disbursement.' },
      { label: 'The buyer should simply walk away and accept losing the EMD.', isCorrect: false, explanation: 'The buyer has a strong legal position. Walking away from a valid claim is not necessary. The buyer can pursue the dispute through mediation, arbitration, or litigation.' },
    ],
    summary: 'When a financing contingency is properly exercised — written notice before the deadline plus a written lender denial — the buyer is entitled to the EMD. The broker holds disputed EMD in escrow. Resolution options: mutual release signed by both parties, court order (interpleader), or binding arbitration per the contract terms. A buyer who applied in good faith and received a legitimate lender denial has met the contingency conditions.',
  },

  "an inspector finds a cracked heat exchanger in the furnace. the seller offers a $500 credit. the buyer wants a new furnace. how should the buyer's agent handle this?": {
    situation: 'The home inspector found a cracked heat exchanger in the furnace — a safety defect that can allow carbon monoxide to enter the living space. The furnace is 18 years old. The seller offers a $500 credit. A new furnace costs approximately $4,000-$5,000.',
    question: 'How should the buyer\'s agent handle this negotiation?',
    choices: [
      { label: 'Accept the $500 credit — any repair credit is better than nothing.', isCorrect: false, explanation: 'A cracked heat exchanger is a serious safety defect, not a cosmetic issue. $500 is grossly inadequate for a $4,000-5,000 repair. Accepting without pushing back fails the buyer\'s interest.' },
      { label: 'Advise the buyer of their options: request a repair credit matching the actual replacement cost (supported by contractor bids), request the seller replace the furnace before closing, or terminate if the seller won\'t adequately address a safety defect. Document everything in writing.', isCorrect: true, explanation: 'The agent\'s job is to inform and advocate. A cracked heat exchanger is a health and safety defect — not a negotiating point to split down the middle. The agent should get 2-3 contractor bids, present those to the seller as the basis for a credit, and advise the buyer that they can terminate under the inspection contingency if the seller won\'t make the property safe. The $500 offer should be countered with documented costs.' },
      { label: 'Tell the buyer they should accept the home as-is since they\'ve already committed to the purchase.', isCorrect: false, explanation: 'The buyer has not committed — they are in the inspection contingency period and can terminate. The agent who tells a buyer they\'re stuck when they\'re not is not protecting their client\'s interests.' },
      { label: 'Recommend the buyer terminate immediately without trying to negotiate.', isCorrect: false, explanation: 'Termination is an option but should not be the first recommendation if the seller might negotiate. The agent should first request adequate repair/credit, and only advise termination if the seller refuses to address a legitimate safety defect.' },
    ],
    summary: 'A cracked heat exchanger is a life-safety issue — it can cause carbon monoxide poisoning. Buyer\'s agents should: get contractor bids, calculate actual replacement cost, counter with a credit matching real costs (not seller\'s lowball offer), and advise the buyer of their right to terminate if the seller won\'t address safety defects. The inspection contingency exists precisely to protect buyers from purchasing homes with material defects.',
  },

  "both buyer and seller claim the earnest money after a failed transaction. what can/should the broker do?": {
    situation: 'A transaction failed when the inspection revealed significant foundation issues. The buyer claims they properly exercised the inspection contingency. The seller claims the buyer did not comply with the timing requirements. Both parties demand the $10,000 EMD.',
    question: 'What can and should the broker do?',
    choices: [
      { label: 'The broker should give the EMD to the seller since the seller always has priority.', isCorrect: false, explanation: 'Sellers do not have automatic priority over the EMD. The broker has no authority to unilaterally disburse disputed funds to either party.' },
      { label: 'The broker must hold the funds in escrow and cannot disburse them without a written mutual release signed by both parties, or a court order. If the parties cannot agree, the broker may file an interpleader action to deposit the funds with the court.', isCorrect: true, explanation: 'Virginia law prohibits brokers from taking sides in EMD disputes. The broker must: (1) hold the funds in the escrow account, (2) attempt to facilitate a mutual release, (3) if unsuccessful, file an interpleader action to have the court decide. The broker can also be subject to VREB discipline for improperly releasing disputed funds.' },
      { label: 'The broker should split the EMD equally between the parties to resolve the dispute quickly.', isCorrect: false, explanation: 'The broker has no authority to unilaterally split the EMD. Any distribution requires both parties\' written agreement or a court order.' },
      { label: 'The broker can give the EMD to the buyer since the transaction failed through no fault of the buyer.', isCorrect: false, explanation: 'Even if the broker believes the buyer is right, the broker cannot unilaterally disburse disputed EMD. This would expose the broker to liability to the seller and potential VREB disciplinary action.' },
    ],
    summary: 'Disputed EMD must remain in escrow. The broker\'s options are: (1) facilitate a written mutual release between the parties; (2) if no resolution, file an interpleader action depositing the funds with General District Court and letting the court decide. The broker cannot take sides, split the funds, or disburse without proper authority. VREB disciplinary action can result from improper EMD handling.',
  },

  "a seller wants to exclude their neighbor from the listing and sell to them without a commission. how should this be handled in the listing agreement?": {
    situation: 'The seller has been in discussions with their neighbor about selling the home. Before signing the listing agreement with Broker Park, the seller wants to ensure that if the neighbor ultimately buys the home, they won\'t owe Broker Park a commission.',
    question: 'How should this be handled?',
    choices: [
      { label: 'The seller cannot exclude anyone from an exclusive right to sell listing — the broker earns commission no matter who buys.', isCorrect: false, explanation: 'Virginia listing agreements can contain named exclusions. If both parties agree in writing, a specific buyer can be excluded from the commission obligation — even in an exclusive right to sell listing.' },
      { label: 'The seller should have the neighbor\'s name written into the listing agreement as an exclusion. If the neighbor buys within the exclusion period (typically 30-90 days) without the broker\'s involvement, no commission is owed. If the listing period expires and the neighbor then buys, the extender clause may apply.', isCorrect: true, explanation: 'Named exclusions are a standard and legitimate listing agreement provision. The broker should agree to exclude the neighbor for a defined period (e.g., the first 30 days) — giving the seller a window to close that deal privately. After that, if the broker becomes the procuring cause, commission applies. Both parties must agree in writing.' },
      { label: 'The seller should just sign the listing and deal with the commission issue later.', isCorrect: false, explanation: 'This approach puts the seller at risk of a commission dispute. All terms, including exclusions, must be agreed to in the listing agreement — not resolved after the fact.' },
      { label: 'The seller should use an open listing to avoid paying any commission.', isCorrect: false, explanation: 'An open listing would provide minimal marketing and cooperation. A better solution is a named exclusion in an exclusive right to sell listing, which gives the seller full MLS exposure while protecting the neighbor deal.' },
    ],
    summary: 'Named exclusions in listing agreements allow sellers to protect ongoing negotiations with specific buyers. The exclusion should be in writing in the listing agreement, name the buyer, specify the time period of the exclusion, and clarify that if the broker becomes involved with that buyer, commission may apply. This is a legitimate and commonly used provision in Virginia listing agreements.',
  },

  "a financing contingency expires and the buyer did not get a loan. the seller claims the buyer did not make a good faith effort. walk through the cancellation process and emd dispute resolution.": {
    situation: 'The buyer applied for a loan with one lender who denied the application. The buyer did not try other lenders. The buyer exercises the financing contingency in writing before the deadline with the denial letter. The seller argues lack of good faith and refuses the mutual release.',
    question: 'What happens next?',
    choices: [
      { label: 'The seller wins because the buyer should have tried multiple lenders.', isCorrect: false, explanation: 'Whether using only one lender constitutes lack of good faith is a factual question — not automatic. The contract\'s good faith effort clause would be analyzed. Applying with one lender is not automatically bad faith, especially if the denial was for qualifying reasons.' },
      { label: 'The broker holds the EMD in escrow. The seller\'s good faith argument is a factual dispute for mediation, arbitration, or court. The buyer, having timely exercised the contingency with a written denial, has a defensible position — especially if the denial was legitimate (income, credit, etc.).', isCorrect: true, explanation: 'A disputed EMD stays in escrow. The good faith analysis looks at: Did the buyer actually apply? Did they cooperate with the lender? Was the denial for a qualifying reason? Virginia courts have generally held that applying with one lender who legitimately denies the loan satisfies the good faith requirement. The dispute is resolved by mutual release, arbitration (if the contract requires it), or court.' },
      { label: 'The broker should give the EMD to the buyer immediately — the contingency was exercised.', isCorrect: false, explanation: 'When EMD is disputed, the broker cannot disburse to either party without both signing a mutual release or a court order. Even if the broker believes the buyer is right, unilateral disbursement exposes the broker to liability.' },
      { label: 'The buyer automatically loses the EMD once the seller raises a good faith dispute.', isCorrect: false, explanation: 'Raising a dispute does not automatically transfer the EMD to the seller. The burden is on the seller to prove lack of good faith. The buyer who applied, cooperated, and received a denial has substantial protection.' },
    ],
    summary: 'When EMD is disputed: (1) Broker holds funds in escrow. (2) Parties attempt mutual release. (3) If unsuccessful, arbitration per contract or interpleader with the court. The good faith standard requires the buyer to genuinely try to obtain financing — not guarantee success. One legitimate denial from one qualified lender generally satisfies good faith. The seller must affirmatively prove bad faith.',
  },

  "three offers come in simultaneously. the seller wants to call back all three buyers and tell them the highest offer amount. is this permissible? what are the ethics and strategy considerations?": {
    situation: 'Three offers arrived on the listing within 2 hours of each other. Offer 1 is $415,000, Offer 2 is $428,000, and Offer 3 is $421,000. The seller wants to call all three buyers, tell them the highest offer is $428,000, and ask each to come in with their "highest and best."',
    question: 'Is this permissible, and what should the agent advise?',
    choices: [
      { label: 'Yes — sellers can do whatever they want with offers on their own home.', isCorrect: false, explanation: 'While sellers have significant latitude, NAR Code of Ethics imposes obligations on agents. And revealing specific offer amounts (rather than just disclosing that multiple offers exist) can create an unfair process and potential ethics concerns.' },
      { label: 'Disclosing the specific highest offer amount ($428,000) to all buyers is permissible in Virginia with seller authorization — but it raises significant ethics concerns. Best practice is to disclose that multiple offers exist and call for "highest and best" without revealing specific dollar amounts.', isCorrect: true, explanation: 'Virginia law does not prohibit disclosing offer prices with the seller\'s consent. However, NAR Code of Ethics (Article 1, SOP 1-15) requires that any information disclosed be treated consistently — all buyers or none. Disclosing the specific top amount creates a de facto Dutch auction and can disadvantage buyers who would have bid higher independently. Best practice: tell all parties multiple offers exist and request best offers by a deadline.' },
      { label: 'This is illegal — all offer details must remain completely confidential.', isCorrect: false, explanation: 'Virginia law does not make all offer information automatically confidential. The seller can authorize disclosure. The ethics analysis is about fairness and consistency, not legality.' },
      { label: 'The agent should simply accept the highest offer without going back to the other buyers.', isCorrect: false, explanation: 'The seller decides how to handle multiple offers, not the agent. The agent must present all offers and advise on options, but the seller makes the strategic decision. Accepting the highest without calling for best and final may leave money on the table.' },
    ],
    summary: 'Multiple offer handling requires consistent treatment of all parties. Disclosing the existence of multiple offers is standard and appropriate. Disclosing specific offer amounts with seller permission is permitted in Virginia but ethically complex. Best practice: notify all parties that multiple offers have been received and request their best and final offer by a specific deadline — without revealing competitor amounts. This is fair, defensible, and often generates the best outcome.',
  },

  "a buyer plans to sell within 5 years. they ask whether a 5/1 arm or a 30-year fixed is better. walk through the analysis.": {
    situation: 'Buyer Marcus plans to purchase a $350,000 home. He knows he will likely sell within 5 years due to a potential job relocation. He is deciding between a 5/1 ARM at 5.75% and a 30-year fixed at 6.75%.',
    question: 'What factors should drive the decision?',
    choices: [
      { label: 'Always choose the 30-year fixed — ARMs are too risky.', isCorrect: false, explanation: 'This is oversimplified. For a buyer with a definite 5-year exit, the 5/1 ARM\'s lower initial rate could save thousands of dollars if they sell before the first adjustment.' },
      { label: 'For a buyer planning to sell within 5 years, the 5/1 ARM is worth serious consideration. The lower initial rate saves money monthly during the period they will own the home. The rate risk after year 5 is irrelevant if they sell before then. The agent should discuss both options honestly without making the loan decision for the client.', isCorrect: true, explanation: 'The 5/1 ARM gives 5 years of fixed payments — matching exactly the buyer\'s intended ownership period. The 1% lower rate on a $280,000 loan saves approximately $233/month or $14,000 over 5 years. The risk is rate volatility after year 5, but if the buyer sells before then, that risk is never realized. The agent should present the math and let the buyer decide with their lender.' },
      { label: 'The 30-year fixed is always better because it protects against market changes.', isCorrect: false, explanation: 'Protection against rate increases after year 5 only matters if you still own the home after year 5. For a short-term owner, paying a higher rate for protection you may never need is financially inefficient.' },
      { label: 'ARMs are illegal in Virginia for primary residences.', isCorrect: false, explanation: 'Adjustable-rate mortgages are legal and common in Virginia. TILA requires full disclosure of ARM terms. There is no prohibition on ARMs for primary residences.' },
    ],
    summary: 'ARM vs. fixed analysis depends on the owner\'s holding period. For a 5-year planned ownership, a 5/1 ARM offers a lower fixed rate for exactly the duration of ownership, potentially saving significant money. The risk (rate adjustment after year 5) is irrelevant if they sell. The agent\'s role is to present the analysis and direct the buyer to their lender — not to make the loan decision, but to help the client make an informed choice.',
  },
}

// ─── CALCULATOR CONTENT ───────────────────────────────────────────────────────

export const CALCULATOR_CONTENT: Record<string, CalculatorDef> = {
  'calculate the maximum allowable security deposit and statutory deadline for return based on monthly rent and move-out date': {
    title: 'Security Deposit Calculator',
    description: 'Calculate the maximum security deposit allowed under the VRLTA and the deadline for returning it after move-out.',
    fields: [
      { id: 'monthlyRent', label: 'Monthly Rent', placeholder: '1500', unit: '$' },
      { id: 'moveOutDay', label: 'Move-Out Day of Month', placeholder: '15' },
      { id: 'moveOutMonth', label: 'Move-Out Month (1-12)', placeholder: '6' },
    ],
    formula: (inputs) => {
      const { monthlyRent, moveOutDay, moveOutMonth } = inputs
      const maxDeposit = monthlyRent * 2
      const deadlineDays = 45
      const moveOutDate = new Date(2025, (moveOutMonth - 1), moveOutDay)
      const deadlineDate = new Date(moveOutDate)
      deadlineDate.setDate(deadlineDate.getDate() + deadlineDays)
      const deadlineStr = deadlineDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      return {
        result: `Max Deposit: $${maxDeposit.toLocaleString()} | Return Deadline: ${deadlineStr}`,
        steps: [
          `Monthly rent: $${monthlyRent.toLocaleString()}`,
          `Maximum security deposit = 2 × monthly rent`,
          `2 × $${monthlyRent.toLocaleString()} = $${maxDeposit.toLocaleString()}`,
          `Move-out date: Month ${moveOutMonth}, Day ${moveOutDay}`,
          `VRLTA deadline = move-out date + 45 days`,
          `Return deadline: ${deadlineStr}`,
          `Landlord must return deposit with itemized deductions by this date or forfeit the right to deduct.`,
        ],
      }
    },
    example: { monthlyRent: 1500, moveOutDay: 15, moveOutMonth: 6 },
  },

  'calculate acreage from a rectangular survey description': {
    title: 'Rectangular Survey Acreage Calculator',
    description: 'Calculate the acreage of a parcel described using the rectangular (government) survey system.',
    fields: [
      { id: 'subdivisions', label: 'Number of Quarter Divisions (e.g., 2 for NE 1/4 of NW 1/4)', placeholder: '2' },
    ],
    formula: (inputs) => {
      const { subdivisions } = inputs
      const sectionAcres = 640
      let acreage = sectionAcres
      for (let i = 0; i < subdivisions; i++) {
        acreage = acreage / 4
      }
      return {
        result: `Parcel size: ${acreage.toLocaleString()} acres`,
        steps: [
          `One full section = 640 acres (1 square mile)`,
          `Each quarter division divides acreage by 4`,
          `Starting: 640 acres`,
          ...Array.from({ length: subdivisions }, (_, i) => {
            let a = sectionAcres
            for (let j = 0; j <= i; j++) a = a / 4
            const labels = ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter', '5th quarter']
            return `After ${labels[i]} division: ${a.toLocaleString()} acres`
          }),
          `Final parcel = ${acreage.toLocaleString()} acres`,
        ],
      }
    },
    example: { subdivisions: 2 },
  },

  'calculate front-end and back-end dti ratios from income and debt figures': {
    title: 'DTI Ratio Calculator',
    description: 'Calculate the front-end (housing) and back-end (total debt) debt-to-income ratios for mortgage qualification.',
    fields: [
      { id: 'grossMonthlyIncome', label: 'Gross Monthly Income', placeholder: '6000', unit: '$' },
      { id: 'piti', label: 'Monthly PITI (Principal + Interest + Taxes + Insurance)', placeholder: '1800', unit: '$' },
      { id: 'otherDebts', label: 'Other Monthly Debt Payments', placeholder: '400', unit: '$' },
    ],
    formula: (inputs) => {
      const { grossMonthlyIncome, piti, otherDebts } = inputs
      const frontEnd = ((piti / grossMonthlyIncome) * 100).toFixed(1)
      const totalDebt = piti + otherDebts
      const backEnd = ((totalDebt / grossMonthlyIncome) * 100).toFixed(1)
      const frontStatus = parseFloat(frontEnd) <= 28 ? 'Within conventional guideline (28%)' : parseFloat(frontEnd) <= 31 ? 'Within FHA guideline (31%)' : 'Exceeds standard guidelines'
      const backStatus = parseFloat(backEnd) <= 36 ? 'Excellent — well within conventional guideline' : parseFloat(backEnd) <= 43 ? 'Within conventional guideline (43%)' : parseFloat(backEnd) <= 50 ? 'May qualify for FHA (up to 50% with compensating factors)' : 'Exceeds standard guidelines — likely will not qualify'
      return {
        result: `Front-End DTI: ${frontEnd}% | Back-End DTI: ${backEnd}%`,
        steps: [
          `Gross monthly income: $${grossMonthlyIncome.toLocaleString()}`,
          `PITI: $${piti.toLocaleString()}`,
          `Other monthly debts: $${otherDebts.toLocaleString()}`,
          `Front-end DTI = PITI ÷ Gross Income`,
          `$${piti.toLocaleString()} ÷ $${grossMonthlyIncome.toLocaleString()} = ${frontEnd}%`,
          `Front-end: ${frontStatus}`,
          `Back-end DTI = (PITI + Other Debts) ÷ Gross Income`,
          `($${piti.toLocaleString()} + $${otherDebts.toLocaleString()}) ÷ $${grossMonthlyIncome.toLocaleString()} = ${backEnd}%`,
          `Back-end: ${backStatus}`,
        ],
      }
    },
    example: { grossMonthlyIncome: 6000, piti: 1800, otherDebts: 400 },
  },

  'apply adjustments to three comparables and reconcile a final value estimate': {
    title: 'Sales Comparison Approach Calculator',
    description: 'Apply adjustments to comparable sales and reconcile a final value estimate using the sales comparison approach.',
    fields: [
      { id: 'comp1Price', label: 'Comp 1 Sale Price', placeholder: '385000', unit: '$' },
      { id: 'comp1Adj', label: 'Comp 1 Net Adjustment (+ or -)', placeholder: '-5000', unit: '$' },
      { id: 'comp2Price', label: 'Comp 2 Sale Price', placeholder: '392000', unit: '$' },
      { id: 'comp2Adj', label: 'Comp 2 Net Adjustment (+ or -)', placeholder: '3000', unit: '$' },
      { id: 'comp3Price', label: 'Comp 3 Sale Price', placeholder: '379000', unit: '$' },
      { id: 'comp3Adj', label: 'Comp 3 Net Adjustment (+ or -)', placeholder: '8000', unit: '$' },
    ],
    formula: (inputs) => {
      const { comp1Price, comp1Adj, comp2Price, comp2Adj, comp3Price, comp3Adj } = inputs
      const adj1 = comp1Price + comp1Adj
      const adj2 = comp2Price + comp2Adj
      const adj3 = comp3Price + comp3Adj
      const avg = Math.round((adj1 + adj2 + adj3) / 3)
      return {
        result: `Reconciled Value Estimate: $${avg.toLocaleString()}`,
        steps: [
          `Comp 1: $${comp1Price.toLocaleString()} + (${comp1Adj >= 0 ? '+' : ''}$${comp1Adj.toLocaleString()}) = $${adj1.toLocaleString()}`,
          `Comp 2: $${comp2Price.toLocaleString()} + (${comp2Adj >= 0 ? '+' : ''}$${comp2Adj.toLocaleString()}) = $${adj2.toLocaleString()}`,
          `Comp 3: $${comp3Price.toLocaleString()} + (${comp3Adj >= 0 ? '+' : ''}$${comp3Adj.toLocaleString()}) = $${adj3.toLocaleString()}`,
          `Adjusted range: $${Math.min(adj1, adj2, adj3).toLocaleString()} – $${Math.max(adj1, adj2, adj3).toLocaleString()}`,
          `Simple average: ($${adj1.toLocaleString()} + $${adj2.toLocaleString()} + $${adj3.toLocaleString()}) ÷ 3 = $${avg.toLocaleString()}`,
          `Note: In practice, the appraiser weights comps by similarity, not a simple average. The comp with the fewest adjustments carries the most weight.`,
        ],
      }
    },
    example: { comp1Price: 385000, comp1Adj: -5000, comp2Price: 392000, comp2Adj: 3000, comp3Price: 379000, comp3Adj: 8000 },
  },
}

// ─── LOOKUP HELPERS ───────────────────────────────────────────────────────────

function normalizeKey(prompt: string): string {
  return prompt.toLowerCase().trim()
}

export function getFlashcardContent(prompt: string): FlashcardSet | null {
  return FLASHCARD_CONTENT[normalizeKey(prompt)] ?? null
}

export function getQuizContent(prompt: string): QuizSet | null {
  return QUIZ_CONTENT[normalizeKey(prompt)] ?? null
}

export function getDragDropContent(prompt: string): DragDropSet | null {
  return DRAG_DROP_CONTENT[normalizeKey(prompt)] ?? null
}

export function getScenarioContent(prompt: string): ScenarioSet | null {
  return SCENARIO_CONTENT[normalizeKey(prompt)] ?? null
}

export function getCalculatorContent(prompt: string): CalculatorDef | null {
  return CALCULATOR_CONTENT[normalizeKey(prompt)] ?? null
}
