// ── Study Wizard Pre-Built Content ────────────────────────────────────────────
// Rule-based contextual data for the AI Study Wizard.
// No external API calls. All content is derived from course material.

// ── Types ─────────────────────────────────────────────────────────────────────

export interface WizardTip {
  mnemonic?: string
  tip: string
  simplifiedExplanation: string
  commonConfusion: string
}

export interface WizardBreakMessage {
  message: string
  technique: string
}

export interface WizardMotivationalMessage {
  text: string
  source?: string
}

export interface ChapterWizardData {
  chapterSlug: string
  tipsAndMnemonics: WizardTip[]
  simplifiedSummary: string
  commonConfusionPoints: string[]
  studyTechnique: string
}

// ── Motivational Messages (30+) ───────────────────────────────────────────────

export const MOTIVATIONAL_MESSAGES: WizardMotivationalMessage[] = [
  {
    text: 'Virginia has over 40,000 active real estate licensees. You are building the knowledge base to join and stand out among the best of them.',
  },
  {
    text: 'The average Virginia REALTOR earned $94,000 in 2024. Every concept you master today is an investment in that income.',
  },
  {
    text: 'Richmond is one of the fastest-growing real estate markets in the Mid-Atlantic. Agents who know the law close more deals.',
  },
  {
    text: 'Top-producing agents attribute their success to knowing the rules better than anyone else in the room.',
  },
  {
    text: 'You are 60 hours of pre-license education, one state exam, and one signature away from launching a career that could span decades.',
  },
  {
    text: 'Virginia real estate transactions totaled over $50 billion in 2024. Knowing the code behind those deals puts you in the driver\'s seat.',
  },
  {
    text: 'Every expert was once a student staring at material that felt overwhelming. Keep going.',
  },
  {
    text: 'Northern Virginia, Richmond, Hampton Roads - three of the hottest submarkets on the East Coast. Your license opens all three doors.',
  },
  {
    text: 'The state exam has a first-time pass rate of about 60%. Students who commit to active review score significantly higher. That\'s what you\'re doing right now.',
  },
  {
    text: 'Real estate is one of the few careers where your income scales directly with your knowledge and effort. Both are in your control.',
  },
  {
    text: 'The VREB enforces standards to protect consumers. When you know those standards cold, you protect your clients and your career simultaneously.',
  },
  {
    text: 'A single well-handled transaction can earn you a referral network that sustains your business for years. It starts with knowing the material.',
  },
  {
    text: 'Richmond\'s median home price has increased over 40% in the last five years. Agents who understand valuation methods serve their clients with real expertise.',
  },
  {
    text: 'Being confused right now means you are learning. Confusion that you push through becomes mastery.',
  },
  {
    text: 'The difference between a good agent and a great one is often just knowing the rules the others skimmed past.',
  },
  {
    text: 'Virginia\'s Strong Towns neighborhoods - Scott\'s Addition, The Fan, Church Hill - are driven by agents who understand zoning, historic covenants, and disclosure law.',
  },
  {
    text: 'First-time homebuyers make up over 30% of the Virginia market. Mastering agency relationships and fiduciary duties makes you the agent they trust for life.',
  },
  {
    text: 'Fair housing law is not just a test topic. It is the foundation of an ethical practice that you can be proud of every day.',
  },
  {
    text: 'The hardest part of any study session is the first five minutes. You already pushed past them. Now you are in the zone.',
  },
  {
    text: 'Contract law, agency duties, escrow rules - these are the tools of the trade. The more fluent you are, the more confident your clients feel.',
  },
  {
    text: 'Virginia requires 60 hours of pre-license education for a reason. They are making sure the agents who enter the market can actually protect consumers.',
  },
  {
    text: 'Every licensee who ever closed a million-dollar deal sat exactly where you are sitting right now.',
  },
  {
    text: 'The Shenandoah Valley, Northern Neck, and Virginia Beach - diverse markets, one license. Learn the core and you can serve any of them.',
  },
  {
    text: 'Short-term memory fades. Spaced repetition builds permanent knowledge. The review you do today compounds with every future session.',
  },
  {
    text: 'Your broker will trust you with clients on day one because the state says you have the training. Make that trust deserved.',
  },
  {
    text: 'Most people who start studying for the real estate exam give up before they take it. You are still here. That already separates you.',
  },
  {
    text: 'Virginia\'s real estate law has been refined by decades of case law and legislative updates. Understanding it positions you as a true professional, not just a salesperson.',
  },
  {
    text: 'Agents who understand mortgage products help buyers make better financial decisions. That expertise builds a referral-based business faster than any marketing campaign.',
  },
  {
    text: 'One principle a day, reviewed for ten minutes, locks in knowledge that no test question can shake.',
  },
  {
    text: 'The state exam is designed to be passable by any motivated student who takes the prep seriously. You are taking it seriously.',
  },
  {
    text: 'Your license is your professional credential. The knowledge behind it is your actual competitive advantage.',
  },
  {
    text: 'In real estate, relationships win long-term. But knowledge is what earns the relationship in the first place.',
  },
]

// ── Break Messages ─────────────────────────────────────────────────────────────

export const BREAK_MESSAGES: WizardBreakMessage[] = [
  {
    message: 'Your brain consolidates learning during rest. A 5-minute break now can improve retention by 20% for the next session.',
    technique: 'Stand up, walk around your space, get a glass of water. Come back to the Key Terms for this chapter.',
  },
  {
    message: 'Cognitive fatigue is real. Top students study in focused 25-minute blocks with short breaks between them.',
    technique: 'Try the Pomodoro method: 25 minutes on, 5 minutes off. When you return, start with the flashcards.',
  },
  {
    message: 'Even a brief mental reset reactivates your focus. You\'ve got this.',
    technique: 'Step away for 5 minutes. When you come back, write down the 3 most important things from this chapter without looking. Then check yourself.',
  },
  {
    message: 'Rest is part of the learning process, not a departure from it.',
    technique: 'Do 10 deep breaths, then review the chapter\'s key terms one more time before moving on.',
  },
  {
    message: 'Professional athletes train and recover. Professional students do the same.',
    technique: 'Take 5. When you return, try explaining this topic out loud to yourself. Teaching it is the fastest way to find the gaps.',
  },
]

// ── Virginia Fun Facts (engagement boosters) ──────────────────────────────────

export const VIRGINIA_FACTS: string[] = [
  'Richmond, Virginia was ranked one of the top 10 real estate markets to watch in 2025 by multiple national publications.',
  'Virginia\'s homeownership rate sits above 67%, higher than the national average - creating a robust market for agents.',
  'The Northern Virginia suburbs are home to some of the highest-priced real estate on the East Coast, driven by proximity to federal employment and tech sector growth.',
  'Virginia has over 1.7 million housing units across diverse property types - from Blue Ridge mountain cabins to Chesapeake Bay waterfront estates.',
  'The Virginia Association of REALTORS reports that the average days-on-market statewide has dropped significantly over the past decade, meaning agents who act fast and know the contract well win.',
  'Virginia Beach is one of the most popular second-home markets in the Southeast, creating strong seasonal demand for licensed agents.',
  'Charlottesville and Albemarle County consistently rank among the top lifestyle real estate markets in the country.',
  'DPOR receives thousands of new real estate license applications each year - joining a well-regulated profession signals credibility to consumers.',
  'Richmond\'s Fan District and Church Hill neighborhoods are among the most sought-after urban markets in Virginia, driven by historic character and walkability.',
  'Virginia\'s robust military presence (Fort Belvoir, NAS Oceana, Fort Gregg-Adams) creates consistent demand from VA loan buyers - agents who understand VA financing have a major advantage.',
]

// ── Chapter-Specific Wizard Data ───────────────────────────────────────────────

export const CHAPTER_WIZARD_DATA: Record<string, ChapterWizardData> = {
  'virginia-license-law-dpor': {
    chapterSlug: 'virginia-license-law-dpor',
    tipsAndMnemonics: [
      {
        mnemonic: 'Remember the 60/180 rule: Salesperson = 60 hours. Broker = 180 hours.',
        tip: 'DPOR is the agency, VREB is the board inside DPOR. DPOR is the house, VREB is the rule-maker inside the house.',
        simplifiedExplanation:
          'DPOR licenses real estate professionals in Virginia. Inside DPOR, the VREB is the specific board that handles all real estate rules, complaints, and discipline. Think of DPOR as the Department of Motor Vehicles - it handles many professions. VREB is the specific division inside that handles real estate.',
        commonConfusion:
          'Students confuse DPOR and VREB. DPOR is the parent agency for all professional licenses in Virginia. VREB is the specific board for real estate within DPOR.',
      },
      {
        mnemonic: 'AISE for license statuses: Active, Inactive, Suspended, Expired. Only Active can practice.',
        tip: 'Post-license education failure = inactive (not expired). That distinction is tested constantly.',
        simplifiedExplanation:
          'When you pass the exam, you have 12 months to submit your license application. Your license renews every 2 years with 16 hours of CE. Fail post-license education in year one and your license goes inactive - not expired. Those two outcomes have different consequences.',
        commonConfusion:
          'Students mix up post-license education (30 hours, first year only) with continuing education (16 hours, every renewal cycle). Post-license failure = inactive. Missing CE renewal = expired.',
      },
    ],
    simplifiedSummary:
      'DPOR is Virginia\'s licensing authority. VREB is the board inside DPOR that makes real estate rules. Salesperson license needs 60 hours of school + state exam. Broker needs 36 of the last 48 months active + 180 hours. License status matters: only Active licenses can practice.',
    commonConfusionPoints: [
      'DPOR vs. VREB - they are not the same thing. DPOR is the agency, VREB is the board within it.',
      'Reciprocity vs. License by Endorsement - Virginia uses endorsement, which still requires passing the Virginia state exam portion.',
      'Post-license vs. Continuing Education - post-license is 30 hours in year one; CE is 16 hours every two-year renewal.',
      'Inactive vs. Expired - an inactive license can be reactivated; an expired license requires reinstatement steps.',
    ],
    studyTechnique:
      'Draw a quick org chart: DPOR at the top, VREB underneath, then the license types branching down. Visualizing the hierarchy locks in the structure.',
  },

  'agency-relationships': {
    chapterSlug: 'agency-relationships',
    tipsAndMnemonics: [
      {
        mnemonic: 'OLDCAR: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable Care. These are the 6 fiduciary duties owed by an agent to their client.',
        tip: 'An agent serves one master (the client). A transaction broker serves the transaction. Know which relationship you are in before you act.',
        simplifiedExplanation:
          'Agency is a legal relationship where you (the agent) represent someone else (the principal/client). You owe that client 6 fiduciary duties summarized as OLDCAR. When you represent a buyer, the buyer is your client. When you represent a seller, the seller is your client. In dual agency, you represent both - and your duties are limited.',
        commonConfusion:
          'Students confuse "customer" and "client." A client has a signed agency agreement and gets full fiduciary duties. A customer gets honest, fair dealing but not loyalty or confidentiality.',
      },
      {
        mnemonic: 'DD for Designated Dual Agency: each agent in the same firm represents one side only.',
        tip: 'Virginia law requires agency disclosure before the first substantive discussion. Not at contract. Not at showing. Before meaningful conversation.',
        simplifiedExplanation:
          'When you meet a buyer at an open house and start talking about price or motivation - stop. You need to disclose your agency relationship first. Virginia is a mandatory disclosure state.',
        commonConfusion:
          'Students think dual agency and designated agency are the same. They are not. Dual agency = one agent represents both parties. Designated agency = different agents from the same firm each represent one party.',
      },
    ],
    simplifiedSummary:
      'Agency is a representation relationship with fiduciary duties. Use OLDCAR to remember them. Virginia requires disclosure before substantive discussion. Dual agency (one agent, two clients) is different from designated agency (two agents, same firm, one client each).',
    commonConfusionPoints: [
      'OLDCAR duties apply only to clients, not customers. Customers get honesty and fair dealing - not loyalty or confidentiality.',
      'Agency disclosure timing: before the first substantive conversation, not just at contract signing.',
      'Dual agency vs. designated agency - two completely different structures with different duty levels.',
      'Termination of agency does not always require mutual consent - it can end automatically by completion, expiration, or operation of law.',
    ],
    studyTechnique:
      'Say OLDCAR out loud and attach one action to each letter: O = do what the client says (within legal limits), L = put their interests first, D = share relevant info, C = keep their info private, A = account for all funds, R = use professional skills.',
  },

  'fair-housing-laws': {
    chapterSlug: 'fair-housing-laws',
    tipsAndMnemonics: [
      {
        mnemonic: 'RANCH + F: Race, Color, National Origin, Color (already covered), Handicap (disability), Familial Status. Plus Religion and Sex. Full list: Race, Color, Religion, Sex, National Origin, Disability, Familial Status.',
        tip: 'The original 1968 Fair Housing Act had 4 protected classes. The 1988 amendments added disability and familial status. Virginia\'s law adds additional protections.',
        simplifiedExplanation:
          'The Fair Housing Act prohibits discrimination based on 7 federal classes. Virginia adds more. Steering, redlining, and blockbusting are the three most-tested violations. Steering = directing buyers to/from areas. Redlining = refusing to lend. Blockbusting = using fear to profit from neighborhood change.',
        commonConfusion:
          'Students mix up which exemptions apply to federal vs. Virginia law. The Mrs. Murphy exemption (owner-occupied 4-unit or less) applies under federal law but Virginia has different exemption rules.',
      },
    ],
    simplifiedSummary:
      'Seven federal protected classes under Fair Housing: Race, Color, Religion, Sex, National Origin, Disability, Familial Status. Virginia adds more. Three big violations: steering, redlining, blockbusting. Know the exemptions and which level of law they apply to.',
    commonConfusionPoints: [
      'The "Mrs. Murphy" exemption applies only to specific small owner-occupied properties under federal law.',
      'Disability (handicap) includes both physical and mental impairments. Refusing to allow reasonable modifications is a violation.',
      'Familial status protects households with children under 18 AND pregnant women.',
      'Advertising with protected class language ("ideal for couples without children") violates the Act even without an actual discriminatory transaction.',
    ],
    studyTechnique:
      'Write out the 7 protected classes from memory. Then write the three big violations (steering, redlining, blockbusting) with a one-sentence definition of each. Do this without looking. Check yourself.',
  },

  'landlord-tenant-law': {
    chapterSlug: 'landlord-tenant-law',
    tipsAndMnemonics: [
      {
        mnemonic: 'VRLTA: Virginia Residential Landlord Tenant Act. It applies to most residential rentals but has specific exclusions.',
        tip: 'Security deposit maximum = 2 months\' rent. Return deadline = 45 days after termination + surrender. Itemization required with any deductions.',
        simplifiedExplanation:
          'VRLTA sets the rules for landlord-tenant relationships in Virginia. The key numbers: security deposit capped at 2 months rent, returned within 45 days. Landlord must give proper notice before entry (24 hours generally). Tenant has rights to habitable conditions and must give proper notice to terminate.',
        commonConfusion:
          'Students confuse VRLTA with general contract law. VRLTA is a specific Virginia statute that supersedes general contract terms in covered residential leases.',
      },
    ],
    simplifiedSummary:
      'VRLTA governs most Virginia residential leases. Key numbers: 2 months max security deposit, 45 days to return it. Both landlord and tenant have mandatory duties. Eviction requires proper notice and court process - you cannot just change locks.',
    commonConfusionPoints: [
      'Security deposit = max 2 months rent, returned within 45 days with written itemization of deductions.',
      'Self-help eviction (changing locks, removing belongings) is illegal. Court process required.',
      'Landlord must give notice (generally 24 hours) before entry except in emergencies.',
      'VRLTA has specific exclusions - single-family owner-occupied with no more than 2 lodgers may be excluded.',
    ],
    studyTechnique:
      'Make a two-column table: Landlord Rights/Duties vs. Tenant Rights/Duties. Fill it in. The exam loves testing whether you know which party has which obligation.',
  },

  'ethics-standards-of-conduct': {
    chapterSlug: 'ethics-standards-of-conduct',
    tipsAndMnemonics: [
      {
        mnemonic: 'The NAR Code of Ethics has three parts: Duties to Clients, Duties to the Public, Duties to REALTORS.',
        tip: 'Article 1 is the most tested: REALTORS shall protect and promote the interests of their client. But they also have duties to treat all parties honestly.',
        simplifiedExplanation:
          'The Code of Ethics is voluntary for NAR members - it is not state law. But VREB has its own standards of conduct that are mandatory for all Virginia licensees regardless of NAR membership. Know both, know the difference.',
        commonConfusion:
          'Students think violating the Code of Ethics automatically means losing your license. It does not. COE violations are handled by local associations. License violations are handled by VREB.',
      },
    ],
    simplifiedSummary:
      'NAR Code of Ethics = voluntary professional standard for REALTORS. VREB Standards of Conduct = mandatory for all Virginia licensees. A COE violation does not automatically equal a license violation - they are enforced by different bodies.',
    commonConfusionPoints: [
      'NAR COE is voluntary (for REALTORS/members). VREB standards are mandatory for all licensees.',
      'Article 1 duty to client does not override duty to treat all parties honestly.',
      'Procuring cause is frequently tested in commission disputes - the agent who is the proximate cause of the sale.',
      'Puffing (exaggeration) is generally permitted; misrepresentation of material facts is not.',
    ],
    studyTechnique:
      'List the three duty categories of the COE. Then list two specific articles for each. You do not need to memorize all 17 articles - know the most-tested ones: 1, 2, 3, 6, 11, 12, 16, 17.',
  },

  'forms-of-property-ownership': {
    chapterSlug: 'forms-of-property-ownership',
    tipsAndMnemonics: [
      {
        mnemonic: 'TTIP for Joint Tenancy requirements: Time, Title, Interest, Possession. All four unities required. Missing any one means tenancy in common.',
        tip: 'Joint tenancy has right of survivorship (JTWROS). Tenancy in common does NOT - each owner\'s share passes through their estate.',
        simplifiedExplanation:
          'Two main ways to co-own property: Joint Tenancy (with right of survivorship, requires TTIP) and Tenancy in Common (no survivorship, unequal shares allowed). In Virginia, married couples can also hold as Tenants by the Entirety - one of the strongest ownership protections.',
        commonConfusion:
          'Students think joint tenancy automatically applies to married couples. In Virginia, married couples can hold as JTWROS, tenants in common, or tenants by the entirety. It depends on the deed language.',
      },
    ],
    simplifiedSummary:
      'Tenancy in Common = flexible shares, no survivorship. Joint Tenancy = equal shares, right of survivorship, requires TTIP unities. Tenancy by the Entirety = married couples only, strong creditor protection, requires both spouses to convey.',
    commonConfusionPoints: [
      'TTIP unities (Time, Title, Interest, Possession) all required for joint tenancy.',
      'Severance of joint tenancy converts it to tenancy in common - selling your share severs the joint tenancy.',
      'Tenants by the Entirety cannot be severed by one spouse alone - requires both spouses to convey.',
      'Community property is NOT Virginia law - Virginia is a common law property state.',
    ],
    studyTechnique:
      'Draw a comparison chart: three columns (TIC, JT, TBE), rows for survivorship, equal shares required, how severed, who can hold it. Fill it in without looking. Review the gaps.',
  },

  'legal-descriptions-surveys': {
    chapterSlug: 'legal-descriptions-surveys',
    tipsAndMnemonics: [
      {
        mnemonic: 'Three methods: Metes & Bounds (oldest), Rectangular Survey (government survey), Lot & Block (recorded plat). Virginia primarily uses Metes & Bounds and Lot & Block.',
        tip: 'Metes & Bounds uses a Point of Beginning (POB). You must return to the POB to close the description. If it does not close, the description is defective.',
        simplifiedExplanation:
          'A legal description is not the same as a street address. It is the precise, legally binding description of exactly where a property is and what it includes. The three systems are just different methods to accomplish that. In Virginia, most urban/suburban properties use Lot & Block from a recorded plat. Rural properties often use Metes & Bounds.',
        commonConfusion:
          'Students confuse the Rectangular Survey System with Virginia practice. The rectangular survey (townships, sections, ranges) is common in western states. Virginia primarily uses Metes & Bounds and Lot & Block.',
      },
    ],
    simplifiedSummary:
      'Three legal description methods. Virginia mostly uses Metes & Bounds (from a point of beginning, using courses and distances) and Lot & Block (from a recorded plat). Rectangular survey is a western US system. A street address is never a legal description.',
    commonConfusionPoints: [
      'A street address cannot substitute for a legal description in a deed or contract.',
      'Metes & Bounds must return to the Point of Beginning to be valid.',
      'Rectangular survey sections = 640 acres. Half section = 320, quarter section = 160, etc.',
      'Datum and bench marks relate to elevation measurements in surveys.',
    ],
    studyTechnique:
      'Practice reading one Metes & Bounds description out loud, following each call (course and distance). Trace it on paper. The physical act of following the boundaries makes the concept stick.',
  },

  'land-use-controls-zoning': {
    chapterSlug: 'land-use-controls-zoning',
    tipsAndMnemonics: [
      {
        mnemonic: 'Public vs. Private controls: Zoning is PUBLIC (government). CC&Rs/deed restrictions are PRIVATE. When they conflict, the MORE RESTRICTIVE one wins.',
        tip: 'Four types of zoning relief: variance (hardship exception), special use permit (permitted with conditions), nonconforming use (grandfathered), and rezoning (changing the zone).',
        simplifiedExplanation:
          'Zoning is the government\'s tool to control land use. Deed restrictions and CC&Rs are private tools (created by developers or property owners). Both can restrict what you do with your property. When they conflict, follow the more restrictive rule. You cannot violate either just because the other allows it.',
        commonConfusion:
          'Students confuse variance and special use permit. Variance = hardship exception to the zoning rule itself. Special use permit = use is listed as conditional in the zone, must apply and meet conditions.',
      },
    ],
    simplifiedSummary:
      'Zoning = public control by government. CC&Rs = private control. More restrictive rule wins when both apply. Variance needs hardship showing. Special use permit needs application and conditions. Nonconforming use = grandfathered pre-existing use that can\'t be expanded.',
    commonConfusionPoints: [
      'Variance vs. special use permit: variance is a hardship exception; special use permit is a conditional permitted use.',
      'Nonconforming use can continue but generally cannot be expanded or rebuilt if destroyed beyond a certain percent.',
      'Eminent domain requires just compensation. Inverse condemnation = government action reduces property value without taking title.',
      'Spot zoning (singling out one parcel for different classification) is generally considered illegal.',
    ],
    studyTechnique:
      'Match game: write each term (variance, rezoning, special use, nonconforming) on one set of cards and their definitions on another. Mix and match until you get all four right three times in a row.',
  },

  'environmental-regulations': {
    chapterSlug: 'environmental-regulations',
    tipsAndMnemonics: [
      {
        mnemonic: 'LAMA for disclosure triggers: Lead (pre-1978), Asbestos (pre-1980 typically), Mold (visible), radon (testing required in Virginia transactions).',
        tip: 'Lead paint disclosure is federal law (LBPPA). It applies to all residential properties built BEFORE 1978. No exceptions for as-is sales.',
        simplifiedExplanation:
          'Environmental issues in real estate break into two categories: what you must disclose and what requires remediation. Lead paint disclosure is mandatory for pre-1978 homes regardless of condition. Radon, mold, and asbestos each have their own rules. A good rule of thumb: when in doubt, disclose.',
        commonConfusion:
          'Students think "as-is" means no disclosure required. It does not. As-is refers to the buyer accepting the condition without requiring repairs. Sellers must still disclose known material defects.',
      },
    ],
    simplifiedSummary:
      'Lead paint: mandatory federal disclosure for pre-1978 residential properties. Radon: common in Virginia, test before close. Mold: visible mold is a material fact requiring disclosure. Asbestos: disclose if known. As-is sales still require disclosures of known defects.',
    commonConfusionPoints: [
      'Lead paint disclosure required for ALL residential pre-1978 properties - no exception for as-is sales.',
      'Phase I environmental site assessment identifies potential contamination risk. Phase II involves actual testing.',
      'Wetlands and floodplains restrict development - buyers in FEMA flood zones may need flood insurance.',
      'CERCLA (Superfund) can create liability for current owners of contaminated property even if they did not cause the contamination.',
    ],
    studyTechnique:
      'Create a simple "disclosure required?" decision tree for each environmental issue. Start with: Is the home pre-1978? (lead paint). Is there visible mold? (disclose). Has radon been tested? Work through each issue systematically.',
  },

  'contract-fundamentals': {
    chapterSlug: 'contract-fundamentals',
    tipsAndMnemonics: [
      {
        mnemonic: 'COLA for valid contract elements: Competent parties, Offer and acceptance, Lawful purpose, Adequate consideration. Miss any one and you don\'t have a contract.',
        tip: 'Statute of Frauds requires real estate contracts to be in writing. Oral real estate contracts are generally unenforceable in Virginia.',
        simplifiedExplanation:
          'A contract is a legally enforceable agreement. For real estate, it must be in writing (Statute of Frauds) and have four elements: competent parties who have mutually agreed (offer + acceptance), a lawful purpose, and consideration (something of value exchanged). Without all four, you have an agreement but not a contract.',
        commonConfusion:
          'Students confuse "void" and "voidable." Void contracts have no legal effect whatsoever (illegal purpose). Voidable contracts are valid but one party has the right to cancel (e.g., entered under duress).',
      },
    ],
    simplifiedSummary:
      'COLA for contract validity: Competent parties, Offer & Acceptance, Lawful purpose, Adequate Consideration. All real estate contracts must be written. Void = no legal effect. Voidable = valid but cancellable by the disadvantaged party.',
    commonConfusionPoints: [
      'Void vs. voidable: void has no effect; voidable is valid but one party can cancel.',
      'Consideration does not have to be money. It just has to be something of legal value.',
      'Mutual assent = offer + acceptance + communication of acceptance. Counter-offer kills original offer.',
      'Contingencies are conditions that must be met for the contract to proceed. Failing a contingency lets the buyer exit and recover earnest money.',
    ],
    studyTechnique:
      'Take any standard Virginia Purchase Agreement and identify each COLA element in the actual document. Connecting the concepts to real forms makes them stick instantly.',
  },

  'purchase-agreements': {
    chapterSlug: 'purchase-agreements',
    tipsAndMnemonics: [
      {
        mnemonic: 'TIME is of the essence: deadlines in the contract are firm unless both parties agree in writing to extend.',
        tip: 'Earnest money is a good-faith deposit, not the purchase price. It goes into the broker\'s escrow account. The broker must deposit it within 5 business days of contract ratification in Virginia.',
        simplifiedExplanation:
          'The purchase agreement is the contract to buy real estate. It must include: parties, property description, price, financing terms, closing date, and what is included/excluded. Contingencies protect the buyer. Earnest money shows good faith. Both sides sign before it is ratified.',
        commonConfusion:
          'Students confuse ratification with execution. Execution = signed. Ratification = signed by all parties and communicated back, creating the binding contract.',
      },
    ],
    simplifiedSummary:
      'Purchase agreement = the contract to buy. Must have all essential elements in writing. Earnest money is held in escrow, not given to the seller immediately. Ratification = all parties have signed and been notified. Common contingencies: financing, inspection, appraisal.',
    commonConfusionPoints: [
      'Earnest money belongs to the buyer until contract failure or closing - it is held in escrow, not by seller.',
      'Broker must deposit earnest money within 5 business days of ratification in Virginia.',
      'Financing contingency failure: buyer typically gets earnest money back if properly exercised.',
      'Time is of the essence clauses make deadlines firm - missing a deadline without written extension can constitute breach.',
    ],
    studyTechnique:
      'Walk through a sample contract from top to bottom. Find the earnest money clause, financing contingency, inspection period, and closing date. Seeing them in context beats memorizing definitions in isolation.',
  },

  'listing-agreements': {
    chapterSlug: 'listing-agreements',
    tipsAndMnemonics: [
      {
        mnemonic: 'Three listing types: ERS (Exclusive Right to Sell - broker always paid), EA (Exclusive Agency - owner can sell FSBO and avoid commission), Open (any broker can earn commission, multiple listings possible).',
        tip: 'Exclusive Right to Sell is the most common and provides the most protection for the broker. The listing broker earns commission even if the owner finds the buyer.',
        simplifiedExplanation:
          'A listing agreement is a contract between the seller and the broker. It authorizes the broker to market the property and defines how commission is earned. Exclusive Right to Sell means the broker gets paid no matter who brings the buyer - even the owner. Exclusive Agency allows the owner to sell themselves (FSBO) without owing commission.',
        commonConfusion:
          'Students think "multiple listing" is a type of agency agreement. It is not. MLS is a data-sharing service. The listing type (ERS, EA, Open) is the agency relationship.',
      },
    ],
    simplifiedSummary:
      'Three listing types: Exclusive Right to Sell (broker always paid), Exclusive Agency (owner can FSBO), Open Listing (non-exclusive, first agent to bring buyer earns commission). ERS is most common and most protective for brokers.',
    commonConfusionPoints: [
      'Net listing (owner gets a fixed amount, broker keeps the rest) is legal but considered problematic and rarely used.',
      'The listing agreement is between the seller and the brokerage (not the individual agent).',
      'Commission is negotiable and must be agreed in writing - NEVER assume a standard rate.',
      'Automatic renewal clauses in listing agreements can create issues - know if Virginia law restricts them.',
    ],
    studyTechnique:
      'Draw three circles labeled ERS, EA, and Open. For each, write: who pays commission if owner sells to their own buyer? That one question separates all three types clearly.',
  },

  'offer-counteroffer-process': {
    chapterSlug: 'offer-counteroffer-process',
    tipsAndMnemonics: [
      {
        mnemonic: 'Counter-offer KILLS the original offer. Once a counter-offer is made, the original offer cannot be accepted. A new agreement must be reached.',
        tip: 'Mirror image rule: acceptance must match the offer exactly. Any change = counter-offer. The counter-offer gives the original offeror the right to accept, reject, or counter again.',
        simplifiedExplanation:
          'Negotiation works through offers and counter-offers. The seller receives an offer and can: accept (contract formed), reject (offer dies), or counter-offer (original offer dies, new negotiation begins). In multiple offer situations, the seller can use a best and final deadline to streamline.',
        commonConfusion:
          'Students think sellers must respond to every offer. They do not. A seller has no obligation to respond to an offer - silence is not acceptance.',
      },
    ],
    simplifiedSummary:
      'Counter-offer terminates the original offer. Acceptance must mirror the offer exactly. In multiple offer situations, sellers can request best and final. Agents have a duty to present all offers promptly. Sellers are not required to respond to any offer.',
    commonConfusionPoints: [
      'Silence is never acceptance - there is no contract until affirmative acceptance is communicated.',
      'Counter-offer kills original offer: seller cannot go back and accept original if buyer walks away from counter.',
      'Agents must present all offers to sellers promptly, even if there is already an accepted offer.',
      'Verbal acceptance is not binding for real estate in Virginia - must be written.',
    ],
    studyTechnique:
      'Walk through a back-and-forth negotiation scenario in writing: Buyer offers at X, seller counters at Y, buyer counters at Z, seller accepts. Identify exactly when the contract is formed and when prior offers died.',
  },

  'mortgage-types-terms': {
    chapterSlug: 'mortgage-types-terms',
    tipsAndMnemonics: [
      {
        mnemonic: 'Government loans: FHA (low down payment, MIP required), VA (veterans, no down payment, funding fee), USDA (rural, income limits, no down payment). Conventional = everything else.',
        tip: 'LTV = Loan-to-Value. Higher LTV = higher risk for lender. PMI kicks in when conventional LTV exceeds 80%. FHA has MIP regardless of LTV.',
        simplifiedExplanation:
          'Mortgages fall into two broad categories: government-backed (FHA, VA, USDA) and conventional. Government loans have specific eligibility rules but often lower down payment requirements. Conventional loans are not government-backed and typically require stronger credit. The key metrics: LTV (loan amount vs. property value), DTI (debt-to-income), credit score.',
        commonConfusion:
          'Students confuse FHA loan limits with VA loan limits. FHA has county-specific limits. VA has no loan limit for eligible veterans with full entitlement (post-2020 Blue Water Navy Act).',
      },
    ],
    simplifiedSummary:
      'Conventional loans: private, no government guarantee, PMI if LTV over 80%. FHA: government-backed, 3.5% down min, MIP always required. VA: veterans only, no down payment, funding fee not PMI. USDA: rural, income limits, no down payment. Know the key terms: LTV, DTI, amortization, ARM, fixed rate.',
    commonConfusionPoints: [
      'PMI (Private Mortgage Insurance) is for conventional loans. MIP (Mortgage Insurance Premium) is for FHA.',
      'VA loans do not require PMI but have a funding fee (can be financed).',
      'ARM = Adjustable Rate Mortgage. Rate changes based on an index + margin after initial fixed period.',
      'Amortization: early payments are mostly interest; later payments are mostly principal.',
    ],
    studyTechnique:
      'Build a comparison grid for FHA, VA, USDA, Conventional. Rows: min down payment, mortgage insurance required, who qualifies, loan limits. Four columns, four rows = 16 facts that cover 90% of what the exam tests.',
  },

  'appraisal-methods': {
    chapterSlug: 'appraisal-methods',
    tipsAndMnemonics: [
      {
        mnemonic: 'Three appraisal approaches: Sales Comparison (market data), Cost Approach (land + depreciated improvements), Income Approach (for income-producing property). Know when each is BEST.',
        tip: 'Sales Comparison = best for residential. Cost Approach = best for new construction, special-use properties. Income Approach = best for rental, commercial properties.',
        simplifiedExplanation:
          'Appraisers use three methods to estimate property value. Sales Comparison looks at recent sales of similar properties (comps) and adjusts for differences. Cost Approach estimates what it would cost to replace the improvements, then subtracts depreciation and adds land value. Income Approach capitalizes the net income a property generates. For the exam, know which approach is most appropriate for which property type.',
        commonConfusion:
          'Students confuse market value with market price. Market value is the estimated amount a willing buyer would pay. Market price is what actually sold. They can differ.',
      },
    ],
    simplifiedSummary:
      'Three appraisal approaches. Sales Comparison (comps): best for homes. Cost Approach (land + depreciated construction cost): best for new or special use. Income Approach (NOI / cap rate): best for rentals and commercial. An appraisal is an opinion of value, not a guarantee.',
    commonConfusionPoints: [
      'Market value vs. assessed value vs. sale price: three different numbers that rarely align perfectly.',
      'GRM (Gross Rent Multiplier) = quick income approach. Price / Gross Annual Rent.',
      'Cap Rate = NOI / Value. Higher cap rate = higher risk, lower price relative to income.',
      'Depreciation in appraisal: physical deterioration, functional obsolescence, external obsolescence (three types).',
    ],
    studyTechnique:
      'Practice the math: if a property has NOI of $60,000 and cap rate is 6%, what is the value? ($1,000,000). If comps sold at $300K with 200 sq ft more, how do you adjust? (subtract from comp). Working real numbers makes these concepts concrete.',
  },

  'closing-procedures': {
    chapterSlug: 'closing-procedures',
    tipsAndMnemonics: [
      {
        mnemonic: 'TRID = TILA-RESPA Integrated Disclosure. Three days before closing, buyer gets the Closing Disclosure. Any major change restarts the 3-day clock.',
        tip: 'Proration means splitting costs between buyer and seller based on who owns the property on which days. Most common: taxes, HOA dues, interest.',
        simplifiedExplanation:
          'Closing (settlement) is when title transfers, funds are disbursed, and the buyer gets the keys. Virginia uses a settlement agent (attorney or title company) to conduct closings. The Closing Disclosure shows all costs. Prorations adjust for items paid ahead or in arrears. HUD/ALTA settlement statement is the final accounting.',
        commonConfusion:
          'Students confuse the Loan Estimate (provided within 3 days of application) with the Closing Disclosure (provided 3 days before closing). Both are TRID requirements, but they come at different times.',
      },
    ],
    simplifiedSummary:
      'Virginia closings are handled by settlement agents. TRID requires Loan Estimate within 3 days of application, Closing Disclosure 3 days before closing. Prorations split costs at closing. Title insurance protects against prior claims. Deed records at the courthouse to complete transfer.',
    commonConfusionPoints: [
      'Loan Estimate ≠ Closing Disclosure. Different timing, different triggers.',
      'Settlement agent in Virginia can be an attorney OR a title company - not necessarily an attorney.',
      'Transfer taxes in Virginia: grantor\'s tax (seller pays) and recordation tax (buyer pays).',
      'Title insurance: owner\'s policy protects the buyer. Lender\'s policy protects the lender. Both recommended at closing.',
    ],
    studyTechnique:
      'Create a closing timeline: application received, loan estimate issued (day 3), processing, underwriting, CD issued (3 days before closing), closing day, recording. Understanding the sequence helps you answer timing questions correctly.',
  },

  'transfer-of-title': {
    chapterSlug: 'transfer-of-title',
    tipsAndMnemonics: [
      {
        mnemonic: 'VALID deed requires: Grantor, Grantee, Consideration, Legal Description, Words of Conveyance, Grantor signature. Delivery and acceptance required for deed to be effective.',
        tip: 'General Warranty Deed = highest protection (warrants title against all defects, even before grantor owned it). Special Warranty = warrants only against grantor\'s own acts. Quitclaim = no warranty at all.',
        simplifiedExplanation:
          'A deed transfers title from the grantor (seller) to the grantee (buyer). The type of deed tells you how much warranty (protection) the buyer gets. General Warranty = full protection. Special Warranty = limited. Quitclaim = whatever the grantor has (could be nothing). Recording the deed protects the buyer against future claims by providing constructive notice.',
        commonConfusion:
          'Students think an unrecorded deed is invalid. It is not - the deed is valid between the parties. Recording protects against third-party claims by providing constructive notice to the world.',
      },
    ],
    simplifiedSummary:
      'Three deed types: General Warranty (most protection), Special Warranty (limited to grantor\'s period), Quitclaim (no warranty). Valid deed needs: parties, consideration, legal description, words of conveyance, grantor signature. Recording provides constructive notice and priority protection.',
    commonConfusionPoints: [
      'Recording is not required for deed validity between grantor and grantee - but it protects against third parties.',
      'Quitclaim deed transfers whatever interest the grantor has, including nothing. Used in divorces, estate transfers.',
      'Acknowledgment (notarization) is required for recording but not for validity between parties.',
      'Priority of recording: generally, first to record has priority (race-notice states vs. notice states - Virginia is a notice state).',
    ],
    studyTechnique:
      'Rank the three deed types from most to least protective. Then, for each deed type, write one scenario where it would be used: General Warranty (traditional home sale), Special Warranty (foreclosure sale), Quitclaim (divorce settlement).',
  },
}

// ── Module-level study tips ────────────────────────────────────────────────────

export const MODULE_STUDY_TIPS: Record<string, string[]> = {
  'virginia-real-estate-law': [
    'Virginia law questions make up 30% of the state exam. Master this module first.',
    'Create a timeline of DPOR deadlines: 12 months to apply after exam, 30 days to report changes, 45 days to return security deposit.',
    'Fair housing questions often involve scenario-based fact patterns. Practice applying the law to situations, not just reciting protected classes.',
    'Agency disclosure timing is a frequent trap: BEFORE substantive discussion, not at showing or contract.',
  ],
  'property-ownership-land-use': [
    'The TTIP unities for joint tenancy (Time, Title, Interest, Possession) are on almost every practice exam.',
    'Legal descriptions: Virginia uses Metes & Bounds and Lot & Block. Rectangular survey is for western states.',
    'Zoning conflicts: always apply the more restrictive rule.',
    'Environmental disclosures: lead paint (pre-1978) is always required. There are no as-is exceptions.',
  ],
  'contracts-agency': [
    'Contract questions dominate the national portion of the exam. Know COLA: Competent parties, Offer & Acceptance, Lawful purpose, Adequate Consideration.',
    'Counter-offer kills the original offer - that single rule explains dozens of scenario questions.',
    'Earnest money in Virginia must be deposited within 5 business days of ratification.',
    'Listing agreement types: ERS, EA, and Open. ERS always pays broker regardless of who sells.',
  ],
  'finance-valuation': [
    'Government loans: FHA (MIP), VA (funding fee, no PMI), USDA (rural income limits). Know the differences.',
    'Three appraisal approaches: Sales Comparison (homes), Cost (new/special use), Income (rentals). Know which is BEST for each.',
    'TRID timing: Loan Estimate within 3 days of application. Closing Disclosure 3 days before close.',
    'Math is unavoidable: practice prorations, LTV calculations, and cap rate formulas until they feel automatic.',
  ],
  'virginia-specific-regulations': [
    'VREB Regulations (18 VAC 135) are tested heavily in this module. Know the team structure rules.',
    'Settlement agents in Virginia can be attorneys or title companies.',
    'Transfer taxes: grantor\'s tax is typically paid by seller. Recordation tax typically by buyer.',
    'CIC (Common Interest Community) laws are Virginia-specific. Know the disclosure package requirements.',
  ],
}

// ── Next-study recommendations per chapter performance ─────────────────────────

export const STUDY_NEXT_RECOMMENDATIONS: Record<string, string> = {
  'virginia-license-law-dpor': 'Move to Agency Relationships - these two chapters build on each other. Knowing license law makes fiduciary duties click into place.',
  'agency-relationships': 'Review Fair Housing Laws next. Fair housing applies agency principles to protected classes.',
  'fair-housing-laws': 'Tackle Landlord-Tenant Law - VRLTA applies many of the same fair housing protections to the rental context.',
  'landlord-tenant-law': 'Move to Ethics & Standards of Conduct to complete Module 1.',
  'ethics-standards-of-conduct': 'You have completed Module 1. Start Module 2 with Forms of Property Ownership.',
  'forms-of-property-ownership': 'Study Legal Descriptions next - ownership types connect directly to how deeds describe what is owned.',
  'legal-descriptions-surveys': 'Advance to Land Use Controls - zoning determines what the legally described property can be used for.',
  'land-use-controls-zoning': 'Environmental Regulations complete Module 2. Then move to Contract Fundamentals.',
  'environmental-regulations': 'Begin Module 3 with Contract Fundamentals - all the environmental disclosures you just learned end up in the contract.',
  'contract-fundamentals': 'Study Purchase Agreements to see contract principles applied to the actual transaction document.',
  'purchase-agreements': 'Listing Agreements next - the contract from the seller\'s perspective.',
  'listing-agreements': 'Study Offer & Counteroffer Process to master the negotiation phase.',
  'offer-counteroffer-process': 'Contract Termination & Breach completes Module 3. Then tackle Module 4: Finance & Valuation.',
  'mortgage-types-terms': 'Study Loan Process & Qualification to understand what happens after a buyer selects a mortgage type.',
  'appraisal-methods': 'Advance to Closing Procedures to see how appraisal value connects to the transaction close.',
  'closing-procedures': 'Study Transfer of Title to understand exactly what happens with the deed at closing.',
  'transfer-of-title': 'Excellent progress through Module 4. Move to Module 5: Practice & Transactions.',
}

// ── Helper functions ───────────────────────────────────────────────────────────

export function getChapterWizardData(chapterSlug: string): ChapterWizardData | null {
  return CHAPTER_WIZARD_DATA[chapterSlug] ?? null
}

export function getRandomMotivationalMessage(): WizardMotivationalMessage {
  const idx = Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)
  return MOTIVATIONAL_MESSAGES[idx]
}

export function getRandomBreakMessage(): WizardBreakMessage {
  const idx = Math.floor(Math.random() * BREAK_MESSAGES.length)
  return BREAK_MESSAGES[idx]
}

export function getRandomVirginiafact(): string {
  const idx = Math.floor(Math.random() * VIRGINIA_FACTS.length)
  return VIRGINIA_FACTS[idx]
}

export function getNextStudyRecommendation(currentChapterSlug: string): string {
  return (
    STUDY_NEXT_RECOMMENDATIONS[currentChapterSlug] ??
    'Keep building momentum. Each chapter you complete strengthens your exam readiness.'
  )
}

export function getModuleStudyTips(moduleSlug: string): string[] {
  return MODULE_STUDY_TIPS[moduleSlug] ?? []
}
