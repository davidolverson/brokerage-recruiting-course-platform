import type { QuizQuestion } from './course-questions'

// ── Module 9: Advanced Real Estate Finance & Taxation ────────────────────────

// ── Chapter: government-backed-loan-programs (10 questions) ─────────────────

const govLoanQuestions: QuizQuestion[] = [
  {
    id: 'q-govloan-001',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'What is the minimum down payment required for an FHA loan when the borrower has a credit score of 580 or higher?',
    options: [
      { id: 'a', text: '0%', isCorrect: false },
      { id: 'b', text: '3%', isCorrect: false },
      { id: 'c', text: '3.5%', isCorrect: true },
      { id: 'd', text: '5%', isCorrect: false },
    ],
    explanation:
      'FHA requires a minimum down payment of 3.5% for borrowers with credit scores of 580 or higher. Borrowers with scores between 500 and 579 must put down at least 10%. FHA does not offer zero-down financing like VA or USDA programs.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-002',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'Which statement about FHA mortgage insurance premium (MIP) is TRUE?',
    options: [
      { id: 'a', text: 'FHA MIP automatically cancels at 78% LTV like conventional PMI', isCorrect: false },
      { id: 'b', text: 'The upfront MIP (UFMIP) is currently 1.75% of the base loan amount', isCorrect: true },
      { id: 'c', text: 'FHA loans do not require any mortgage insurance', isCorrect: false },
      { id: 'd', text: 'Annual MIP is only required for the first five years of the loan', isCorrect: false },
    ],
    explanation:
      'The FHA UFMIP is 1.75% of the base loan amount, typically financed into the loan. For most 30-year FHA loans with less than 5% down, the annual MIP is required for the life of the loan. This differs from conventional PMI, which automatically terminates at 78% LTV under the Homeowners Protection Act.',
    difficulty: 'medium',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-003',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'A veteran with full entitlement wants to purchase a home using a VA loan. Which statement is correct?',
    options: [
      { id: 'a', text: 'The veteran must put at least 3.5% down', isCorrect: false },
      { id: 'b', text: 'The VA will lend the money directly to the veteran', isCorrect: false },
      { id: 'c', text: 'There is effectively no VA loan limit for the veteran', isCorrect: true },
      { id: 'd', text: 'The veteran must pay monthly PMI to the VA', isCorrect: false },
    ],
    explanation:
      'For borrowers with full entitlement (no other outstanding VA loans and no prior VA loan default), there is effectively no loan limit. The VA guarantees up to 25% of the loan amount regardless of price. The VA does not lend directly; it guarantees loans made by approved lenders. VA loans require no PMI and no down payment.',
    difficulty: 'medium',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-004',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'What is the VA funding fee for a veteran using the VA loan benefit for the first time with no down payment?',
    options: [
      { id: 'a', text: '1.25%', isCorrect: false },
      { id: 'b', text: '1.75%', isCorrect: false },
      { id: 'c', text: '2.15%', isCorrect: true },
      { id: 'd', text: '3.3%', isCorrect: false },
    ],
    explanation:
      'The VA funding fee for first-time use with no down payment is 2.15% of the loan amount. With 5% down it drops to 1.5%, and with 10% or more down it is 1.25%. Subsequent use with no down payment jumps to 3.3%. Veterans receiving VA disability compensation, surviving spouses, and Purple Heart recipients on active duty are exempt from the funding fee.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-005',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'USDA Rural Development guaranteed loans require the property to be located in:',
    options: [
      { id: 'a', text: 'Any location within the United States', isCorrect: false },
      { id: 'b', text: 'A USDA-designated rural area with population typically under 35,000', isCorrect: true },
      { id: 'c', text: 'A farm or agricultural property only', isCorrect: false },
      { id: 'd', text: 'A community with population under 5,000', isCorrect: false },
    ],
    explanation:
      'USDA loans require the property to be in a USDA-designated rural area. The definition of "rural" is broader than many expect, including towns with populations up to 35,000. In Virginia, many areas outside Northern Virginia, Richmond, and Hampton Roads metro regions qualify. USDA maintains an online eligibility map for verification.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-006',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'How does USDA income eligibility differ from FHA and conventional loan underwriting?',
    options: [
      { id: 'a', text: 'USDA has no income requirements', isCorrect: false },
      { id: 'b', text: 'USDA counts income of all adult household members, not just borrowers on the loan', isCorrect: true },
      { id: 'c', text: 'USDA requires income above 150% of the area median income', isCorrect: false },
      { id: 'd', text: 'USDA only counts the primary borrower\'s income', isCorrect: false },
    ],
    explanation:
      'USDA counts the income of all adult household members, not just the applicants on the loan. This is different from FHA and conventional underwriting, which only consider borrower income. Household income must be at or below 115% of the area median income for the guaranteed program.',
    difficulty: 'hard',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-007',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Housing Development Authority (VHDA) raises capital to fund its mortgage programs primarily through:',
    options: [
      { id: 'a', text: 'Virginia state tax revenue', isCorrect: false },
      { id: 'b', text: 'Federal appropriations from HUD', isCorrect: false },
      { id: 'c', text: 'Selling tax-exempt and taxable bonds in capital markets', isCorrect: true },
      { id: 'd', text: 'Annual assessments on Virginia real estate licensees', isCorrect: false },
    ],
    explanation:
      'VHDA is a self-supporting, not-for-profit state authority that does not use state tax dollars. It raises capital by selling tax-exempt and taxable bonds in national and international capital markets, then uses those funds to provide below-market-rate mortgage loans and housing assistance through a network of approved private lenders.',
    difficulty: 'medium',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-008',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'A VHDA Mortgage Credit Certificate (MCC) provides the borrower with:',
    options: [
      { id: 'a', text: 'A forgivable second mortgage for the down payment', isCorrect: false },
      { id: 'b', text: 'A dollar-for-dollar federal tax credit equal to a percentage of mortgage interest paid', isCorrect: true },
      { id: 'c', text: 'A reduction in the mortgage interest rate by 1%', isCorrect: false },
      { id: 'd', text: 'An exemption from Virginia property taxes for five years', isCorrect: false },
    ],
    explanation:
      'The MCC is a federal tax credit (not a deduction) allowing the borrower to claim a dollar-for-dollar reduction in federal income tax equal to typically 20% of the mortgage interest paid each year. On $10,000 of interest, that is a $2,000 tax credit. The remaining 80% can still be claimed as a deduction if itemizing. The MCC lasts the life of the original mortgage.',
    difficulty: 'hard',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-009',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'Which government loan program requires the borrower to obtain a Certificate of Eligibility (COE)?',
    options: [
      { id: 'a', text: 'FHA', isCorrect: false },
      { id: 'b', text: 'USDA', isCorrect: false },
      { id: 'c', text: 'VA', isCorrect: true },
      { id: 'd', text: 'VHDA', isCorrect: false },
    ],
    explanation:
      'VA loan eligibility requires a Certificate of Eligibility (COE), which confirms the veteran\'s entitlement amount based on their military service. Lenders can often retrieve the COE electronically through the VA\'s automated system. FHA and USDA have their own qualification processes but do not use a COE.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
  {
    id: 'q-govloan-010',
    chapterId: 'government-backed-loan-programs',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer qualifies for both FHA and USDA financing. Which factor would make USDA the more cost-effective choice over the life of the loan?',
    options: [
      { id: 'a', text: 'USDA allows investment properties', isCorrect: false },
      { id: 'b', text: 'USDA has a lower annual fee (0.35%) compared to FHA annual MIP (0.55%)', isCorrect: true },
      { id: 'c', text: 'USDA does not require any upfront fee', isCorrect: false },
      { id: 'd', text: 'USDA offers adjustable-rate options', isCorrect: false },
    ],
    explanation:
      'For eligible borrowers, USDA loans typically cost less over the loan\'s life due to the lower annual fee (0.35% vs. FHA\'s 0.55%) and comparable upfront fee. USDA also offers zero down payment. However, USDA requires the property be in a designated rural area, limits the home to a primary residence, and restricts the home to modest size. USDA guaranteed loans are only 30-year fixed-rate.',
    difficulty: 'hard',
    topicTag: 'government-loans',
  },
]

// ── Chapter: creative-alternative-financing (10 questions) ──────────────────

const creativeFinancingQuestions: QuizQuestion[] = [
  {
    id: 'q-creative-001',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'In a seller financing arrangement, the seller acts as the:',
    options: [
      { id: 'a', text: 'Trustee', isCorrect: false },
      { id: 'b', text: 'Lender', isCorrect: true },
      { id: 'c', text: 'Escrow agent', isCorrect: false },
      { id: 'd', text: 'Appraiser', isCorrect: false },
    ],
    explanation:
      'In seller financing (also called a purchase money mortgage), the seller acts as the lender by carrying back a note and deed of trust from the buyer. The buyer makes payments directly to the seller rather than a traditional lending institution. This approach can help buyers who may not qualify for conventional loans.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-002',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'In a land contract (contract for deed), when does the buyer receive legal title to the property?',
    options: [
      { id: 'a', text: 'At the time the contract is signed', isCorrect: false },
      { id: 'b', text: 'After the first payment is made', isCorrect: false },
      { id: 'c', text: 'When the contract terms are fully satisfied (all payments made)', isCorrect: true },
      { id: 'd', text: 'When the buyer takes physical possession', isCorrect: false },
    ],
    explanation:
      'In a land contract (contract for deed), the seller retains legal title while the buyer holds equitable title and possession. The seller delivers legal title only when the buyer has fully satisfied the contract terms, typically after all payments are made. This creates risk for buyers because they hold only equitable interest during the payment period.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-003',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'What type of interest does the buyer hold during the term of a land contract?',
    options: [
      { id: 'a', text: 'Legal title', isCorrect: false },
      { id: 'b', text: 'Fee simple absolute', isCorrect: false },
      { id: 'c', text: 'Equitable title', isCorrect: true },
      { id: 'd', text: 'Life estate', isCorrect: false },
    ],
    explanation:
      'Under a land contract, the buyer holds equitable title (the right to obtain full ownership upon completing the contract terms) while the seller retains legal title. The buyer has the right of possession and use but does not hold the deed until the contract is fulfilled.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-004',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'A lease-option agreement gives the tenant the:',
    options: [
      { id: 'a', text: 'Obligation to purchase the property at the end of the lease', isCorrect: false },
      { id: 'b', text: 'Right, but not the obligation, to purchase the property at a predetermined price', isCorrect: true },
      { id: 'c', text: 'Immediate ownership interest in the property', isCorrect: false },
      { id: 'd', text: 'Right to sublease the property to another buyer', isCorrect: false },
    ],
    explanation:
      'A lease-option gives the tenant the right, but not the obligation, to purchase the property at a predetermined price during or at the end of the lease term. The tenant typically pays an option consideration (option fee) that may or may not be credited toward the purchase price. A lease-purchase, by contrast, obligates the tenant to buy.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-005',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'What distinguishes a lease-purchase from a lease-option?',
    options: [
      { id: 'a', text: 'A lease-purchase requires a larger security deposit', isCorrect: false },
      { id: 'b', text: 'A lease-purchase obligates the tenant to buy; a lease-option does not', isCorrect: true },
      { id: 'c', text: 'A lease-purchase transfers title immediately', isCorrect: false },
      { id: 'd', text: 'There is no legal difference between the two', isCorrect: false },
    ],
    explanation:
      'The key distinction is that a lease-purchase creates an obligation for the tenant to buy the property, while a lease-option gives the tenant the right but not the obligation. If a lease-option tenant decides not to buy, they typically forfeit the option fee but have no further purchase obligation.',
    difficulty: 'hard',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-006',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'A bridge loan is typically used to:',
    options: [
      { id: 'a', text: 'Finance renovations on a distressed property', isCorrect: false },
      { id: 'b', text: 'Provide short-term financing so a buyer can purchase before selling their current home', isCorrect: true },
      { id: 'c', text: 'Combine two existing mortgages into one payment', isCorrect: false },
      { id: 'd', text: 'Allow a buyer to lease a property before purchasing', isCorrect: false },
    ],
    explanation:
      'A bridge loan (also called a swing loan) provides short-term financing to bridge the gap between buying a new home and selling the current one. These loans typically have higher interest rates and fees, and terms of 6 to 12 months. They allow buyers to make non-contingent offers on new properties.',
    difficulty: 'easy',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-007',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'In a wraparound mortgage, the seller:',
    options: [
      { id: 'a', text: 'Pays off the existing mortgage before creating a new one', isCorrect: false },
      { id: 'b', text: 'Creates a new mortgage that encompasses the existing mortgage balance plus additional financing', isCorrect: true },
      { id: 'c', text: 'Transfers the existing mortgage to the buyer\'s name', isCorrect: false },
      { id: 'd', text: 'Obtains a second mortgage from the lender to cover the difference', isCorrect: false },
    ],
    explanation:
      'A wraparound mortgage is a form of seller financing where the seller creates a new, larger mortgage that "wraps around" the existing mortgage. The buyer makes payments to the seller on the wraparound, and the seller continues making payments on the underlying mortgage. The seller profits on the interest rate differential. Wraparounds are risky if the existing mortgage has a due-on-sale clause.',
    difficulty: 'hard',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-008',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'A major risk of a wraparound mortgage for the buyer is:',
    options: [
      { id: 'a', text: 'The buyer must pay higher property taxes', isCorrect: false },
      { id: 'b', text: 'The seller may stop making payments on the underlying mortgage, triggering foreclosure', isCorrect: true },
      { id: 'c', text: 'The buyer cannot take possession until the underlying mortgage is paid off', isCorrect: false },
      { id: 'd', text: 'The wraparound rate is always higher than conventional rates', isCorrect: false },
    ],
    explanation:
      'The primary risk to the buyer in a wraparound is that the seller remains responsible for the underlying mortgage. If the seller stops making those payments, the original lender can foreclose, potentially wiping out the buyer\'s interest. Additionally, if the underlying mortgage has a due-on-sale clause, the lender can call the loan due upon discovering the transfer.',
    difficulty: 'hard',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-009',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, seller financing arrangements must comply with the Dodd-Frank Act\'s ability-to-repay requirements. Which seller is most likely EXEMPT from these requirements?',
    options: [
      { id: 'a', text: 'A seller who finances five or more properties per year', isCorrect: false },
      { id: 'b', text: 'A seller who provides financing on no more than three properties in a 12-month period and is not a loan originator', isCorrect: true },
      { id: 'c', text: 'Any seller who owns the property free and clear', isCorrect: false },
      { id: 'd', text: 'A seller who is a licensed real estate agent', isCorrect: false },
    ],
    explanation:
      'Under the Dodd-Frank Act, a seller who provides financing on no more than three properties in any 12-month period and meets other criteria (not a builder, certain loan terms) is generally exempt from the ability-to-repay and licensing requirements that apply to mortgage loan originators. Sellers who exceed this threshold may need to comply with TILA and be licensed.',
    difficulty: 'hard',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-creative-010',
    chapterId: 'creative-alternative-financing',
    quizType: 'chapter_quiz',
    questionText:
      'A blanket mortgage is most commonly used by:',
    options: [
      { id: 'a', text: 'First-time homebuyers purchasing a single-family home', isCorrect: false },
      { id: 'b', text: 'Developers who need to finance multiple lots or parcels under a single loan', isCorrect: true },
      { id: 'c', text: 'Buyers using FHA financing', isCorrect: false },
      { id: 'd', text: 'Tenants in a lease-option arrangement', isCorrect: false },
    ],
    explanation:
      'A blanket mortgage covers more than one parcel of real estate and is most commonly used by developers and builders who finance multiple lots under a single loan. It typically includes a partial release clause allowing individual parcels to be sold and released from the mortgage as they are developed or sold, with a specified paydown amount for each release.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
]

// ── Chapter: real-estate-taxation (10 questions) ────────────────────────────

const taxationQuestions: QuizQuestion[] = [
  {
    id: 'q-tax-001',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, real property is assessed for tax purposes by the:',
    options: [
      { id: 'a', text: 'Virginia Department of Taxation', isCorrect: false },
      { id: 'b', text: 'Local commissioner of the revenue or assessor', isCorrect: true },
      { id: 'c', text: 'Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'County circuit court clerk', isCorrect: false },
    ],
    explanation:
      'In Virginia, property tax is a local tax. Each city or county has a commissioner of the revenue or an assessor responsible for determining the assessed value of real property. Virginia requires assessment at 100% of fair market value, though reassessment schedules vary by locality (annually, biennially, or every four to six years).',
    difficulty: 'easy',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-002',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'A property has an assessed value of $350,000 and the local tax rate is $0.85 per $100 of assessed value. What is the annual property tax?',
    options: [
      { id: 'a', text: '$2,450', isCorrect: false },
      { id: 'b', text: '$2,975', isCorrect: true },
      { id: 'c', text: '$3,500', isCorrect: false },
      { id: 'd', text: '$29,750', isCorrect: false },
    ],
    explanation:
      'Annual property tax = (assessed value / $100) x tax rate per $100. So ($350,000 / $100) x $0.85 = 3,500 x $0.85 = $2,975. Virginia tax rates are commonly expressed in dollars per $100 of assessed value. This calculation is a frequent exam question.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-003',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'Under federal tax law, a homeowner who has owned and used a home as a primary residence for at least 2 of the last 5 years may exclude capital gains of up to:',
    options: [
      { id: 'a', text: '$125,000 for single filers and $250,000 for married filing jointly', isCorrect: false },
      { id: 'b', text: '$250,000 for single filers and $500,000 for married filing jointly', isCorrect: true },
      { id: 'c', text: '$500,000 regardless of filing status', isCorrect: false },
      { id: 'd', text: '$100,000 for single filers and $200,000 for married filing jointly', isCorrect: false },
    ],
    explanation:
      'Section 121 of the Internal Revenue Code allows a homeowner to exclude up to $250,000 ($500,000 for married filing jointly) of capital gain from the sale of a primary residence, provided the homeowner has owned and used the home as a principal residence for at least 2 of the 5 years preceding the sale. This exclusion can generally be used once every two years.',
    difficulty: 'easy',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-004',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'The purpose of a 1031 tax-deferred exchange is to:',
    options: [
      { id: 'a', text: 'Eliminate property taxes on investment properties', isCorrect: false },
      { id: 'b', text: 'Defer capital gains taxes by exchanging one investment property for another like-kind property', isCorrect: true },
      { id: 'c', text: 'Convert a primary residence into a tax-exempt investment', isCorrect: false },
      { id: 'd', text: 'Reduce the assessed value of real property for tax purposes', isCorrect: false },
    ],
    explanation:
      'Section 1031 of the Internal Revenue Code allows an investor to defer capital gains taxes by exchanging one investment or business-use property for another "like-kind" property. The taxes are deferred, not eliminated. The replacement property must be of equal or greater value, and strict timelines must be followed. Primary residences do not qualify.',
    difficulty: 'easy',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-005',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'In a 1031 exchange, the investor must identify potential replacement properties within how many days of closing on the relinquished property?',
    options: [
      { id: 'a', text: '30 days', isCorrect: false },
      { id: 'b', text: '45 days', isCorrect: true },
      { id: 'c', text: '90 days', isCorrect: false },
      { id: 'd', text: '180 days', isCorrect: false },
    ],
    explanation:
      'A 1031 exchange has two critical deadlines: the investor must identify potential replacement properties within 45 calendar days of closing on the relinquished property, and must close on the replacement property within 180 calendar days (or by the tax return due date, including extensions, whichever comes first). Missing either deadline disqualifies the exchange.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-006',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'In a 1031 exchange, the proceeds from the sale of the relinquished property must be held by a:',
    options: [
      { id: 'a', text: 'The investor\'s personal bank account', isCorrect: false },
      { id: 'b', text: 'Qualified intermediary', isCorrect: true },
      { id: 'c', text: 'The investor\'s real estate agent', isCorrect: false },
      { id: 'd', text: 'The local tax assessor\'s office', isCorrect: false },
    ],
    explanation:
      'The exchange funds must be held by a qualified intermediary (QI), also known as an accommodator. The investor cannot have actual or constructive receipt of the funds at any point during the exchange. If the investor touches the money, the exchange fails and the capital gains become immediately taxable.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-007',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following expenses is generally tax-deductible for a homeowner who itemizes?',
    options: [
      { id: 'a', text: 'Homeowner\'s insurance premiums', isCorrect: false },
      { id: 'b', text: 'Mortgage interest on acquisition debt up to IRS limits', isCorrect: true },
      { id: 'c', text: 'Utility bills', isCorrect: false },
      { id: 'd', text: 'Home maintenance and repair costs', isCorrect: false },
    ],
    explanation:
      'Homeowners who itemize can deduct mortgage interest on acquisition debt (up to $750,000 for loans originating after December 15, 2017) and state/local property taxes (subject to the $10,000 SALT cap). Insurance premiums, utilities, and maintenance costs on a personal residence are not deductible.',
    difficulty: 'easy',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-008',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'The federal SALT (State and Local Tax) deduction cap limits the combined deduction for state income, sales, and property taxes to:',
    options: [
      { id: 'a', text: '$5,000', isCorrect: false },
      { id: 'b', text: '$10,000', isCorrect: true },
      { id: 'c', text: '$25,000', isCorrect: false },
      { id: 'd', text: 'There is no cap on the SALT deduction', isCorrect: false },
    ],
    explanation:
      'The Tax Cuts and Jobs Act of 2017 capped the combined federal deduction for state and local income taxes (or sales taxes) and property taxes at $10,000 ($5,000 for married filing separately). This cap particularly impacts homeowners in areas with high property taxes and state income taxes, including parts of Northern Virginia.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-009',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia property owner disagrees with their assessed property value. The first step in the appeals process is typically to:',
    options: [
      { id: 'a', text: 'File a lawsuit in circuit court', isCorrect: false },
      { id: 'b', text: 'Contact the local commissioner of the revenue or assessor\'s office to request an informal review', isCorrect: true },
      { id: 'c', text: 'Petition the Virginia Supreme Court', isCorrect: false },
      { id: 'd', text: 'Stop paying property taxes until the dispute is resolved', isCorrect: false },
    ],
    explanation:
      'The first step in Virginia is typically an informal review with the local assessor\'s office. If unresolved, the owner can appeal to the local Board of Equalization. Further appeals may go to circuit court. Property owners should never stop paying taxes during an appeal, as taxes remain due regardless of dispute status.',
    difficulty: 'hard',
    topicTag: 'taxation',
  },
  {
    id: 'q-tax-010',
    chapterId: 'real-estate-taxation',
    quizType: 'chapter_quiz',
    questionText:
      'An investor sells a rental property for $400,000 that was purchased for $300,000. If $45,000 of depreciation was taken over the holding period, what is the investor\'s total taxable gain?',
    options: [
      { id: 'a', text: '$55,000', isCorrect: false },
      { id: 'b', text: '$100,000', isCorrect: false },
      { id: 'c', text: '$145,000', isCorrect: true },
      { id: 'd', text: '$400,000', isCorrect: false },
    ],
    explanation:
      'The adjusted basis is the original purchase price minus accumulated depreciation: $300,000 - $45,000 = $255,000. Total taxable gain = sale price - adjusted basis = $400,000 - $255,000 = $145,000. Of this, $45,000 is depreciation recapture (taxed at up to 25%) and $100,000 is capital gain (taxed at capital gains rates).',
    difficulty: 'hard',
    topicTag: 'taxation',
  },
]

// ── Chapter: investment-analysis (10 questions) ─────────────────────────────

const investmentAnalysisQuestions: QuizQuestion[] = [
  {
    id: 'q-invest-001',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'Net Operating Income (NOI) is calculated by subtracting what from Effective Gross Income?',
    options: [
      { id: 'a', text: 'Mortgage payments (debt service)', isCorrect: false },
      { id: 'b', text: 'Operating expenses', isCorrect: true },
      { id: 'c', text: 'Capital gains taxes', isCorrect: false },
      { id: 'd', text: 'Depreciation', isCorrect: false },
    ],
    explanation:
      'NOI = Effective Gross Income (EGI) - Operating Expenses. Operating expenses include property taxes, insurance, maintenance, management fees, and utilities paid by the owner. NOI does NOT deduct mortgage payments (debt service), income taxes, or depreciation. It represents the property\'s income-producing capability independent of financing.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-002',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'A rental property generates $120,000 in gross rental income, has a 5% vacancy rate, and $42,000 in operating expenses. What is the NOI?',
    options: [
      { id: 'a', text: '$72,000', isCorrect: true },
      { id: 'b', text: '$78,000', isCorrect: false },
      { id: 'c', text: '$114,000', isCorrect: false },
      { id: 'd', text: '$84,000', isCorrect: false },
    ],
    explanation:
      'Effective Gross Income = $120,000 - (5% x $120,000) = $120,000 - $6,000 = $114,000. NOI = EGI - Operating Expenses = $114,000 - $42,000 = $72,000. The vacancy allowance reduces gross income before subtracting expenses.',
    difficulty: 'medium',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-003',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'The capitalization rate (cap rate) is calculated by dividing:',
    options: [
      { id: 'a', text: 'Purchase price by gross rental income', isCorrect: false },
      { id: 'b', text: 'Net Operating Income by the property\'s sale price or value', isCorrect: true },
      { id: 'c', text: 'Cash flow after debt service by the down payment', isCorrect: false },
      { id: 'd', text: 'Gross rental income by operating expenses', isCorrect: false },
    ],
    explanation:
      'Cap Rate = NOI / Sale Price (or Property Value). The cap rate expresses the rate of return on a property as if it were purchased with all cash (no financing). A higher cap rate generally indicates higher potential return but also higher risk. Cap rates allow investors to compare properties regardless of their financing.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-004',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'A property has an NOI of $60,000 and sold for $750,000. What is the cap rate?',
    options: [
      { id: 'a', text: '6%', isCorrect: false },
      { id: 'b', text: '8%', isCorrect: true },
      { id: 'c', text: '10%', isCorrect: false },
      { id: 'd', text: '12.5%', isCorrect: false },
    ],
    explanation:
      'Cap Rate = NOI / Sale Price = $60,000 / $750,000 = 0.08 = 8%. This means an all-cash buyer would earn an 8% return on the investment before income taxes and appreciation. Investors use cap rates to compare properties and assess relative value in different markets.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-005',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'The Gross Rent Multiplier (GRM) is calculated by dividing:',
    options: [
      { id: 'a', text: 'NOI by the sale price', isCorrect: false },
      { id: 'b', text: 'Sale price by gross annual rental income', isCorrect: true },
      { id: 'c', text: 'Gross rental income by operating expenses', isCorrect: false },
      { id: 'd', text: 'Cash flow by the mortgage payment', isCorrect: false },
    ],
    explanation:
      'GRM = Sale Price / Gross Annual Rental Income. The GRM is a quick, rough screening tool that does not account for vacancies, expenses, or financing. A lower GRM suggests a better value relative to income. Unlike the cap rate, GRM uses gross income and does not consider operating expenses.',
    difficulty: 'medium',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-006',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'Leverage in real estate investing refers to:',
    options: [
      { id: 'a', text: 'The ability to negotiate a lower purchase price', isCorrect: false },
      { id: 'b', text: 'Using borrowed funds to increase the potential return on investment', isCorrect: true },
      { id: 'c', text: 'The ratio of operating expenses to gross income', isCorrect: false },
      { id: 'd', text: 'The annual depreciation allowance on the property', isCorrect: false },
    ],
    explanation:
      'Leverage means using borrowed money (a mortgage) to control a larger asset with a smaller amount of equity. Positive leverage occurs when the return on the total investment exceeds the cost of borrowing, amplifying equity returns. Negative leverage occurs when the cost of borrowing exceeds the property\'s return, reducing equity returns.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-007',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'An investor purchases a property for $500,000 with $100,000 down and a $400,000 mortgage. The property generates $30,000 in NOI and annual debt service is $24,000. What is the cash-on-cash return?',
    options: [
      { id: 'a', text: '4.8%', isCorrect: false },
      { id: 'b', text: '6%', isCorrect: true },
      { id: 'c', text: '7.5%', isCorrect: false },
      { id: 'd', text: '30%', isCorrect: false },
    ],
    explanation:
      'Cash-on-Cash Return = Annual Before-Tax Cash Flow / Total Cash Invested. Before-tax cash flow = NOI - Debt Service = $30,000 - $24,000 = $6,000. Cash-on-Cash Return = $6,000 / $100,000 = 6%. This measures the return on the actual cash invested (equity), which is the metric most relevant to leveraged investors.',
    difficulty: 'hard',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-008',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'For federal tax purposes, residential rental property is depreciated over:',
    options: [
      { id: 'a', text: '15 years', isCorrect: false },
      { id: 'b', text: '27.5 years', isCorrect: true },
      { id: 'c', text: '31.5 years', isCorrect: false },
      { id: 'd', text: '39 years', isCorrect: false },
    ],
    explanation:
      'The IRS requires residential rental property to be depreciated over 27.5 years using the straight-line method. Commercial (nonresidential) property is depreciated over 39 years. Only the improvement (building) value is depreciated; land is never depreciable. Depreciation is a non-cash deduction that reduces taxable income.',
    difficulty: 'medium',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-009',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'An investor buys a rental property for $400,000. The land is valued at $80,000. What is the annual straight-line depreciation deduction for the improvement?',
    options: [
      { id: 'a', text: '$11,636', isCorrect: true },
      { id: 'b', text: '$14,545', isCorrect: false },
      { id: 'c', text: '$8,205', isCorrect: false },
      { id: 'd', text: '$2,909', isCorrect: false },
    ],
    explanation:
      'Only the improvement (building) is depreciable, not the land. Depreciable basis = $400,000 - $80,000 = $320,000. Annual depreciation = $320,000 / 27.5 years = $11,636 (rounded). This is a non-cash deduction that reduces the investor\'s taxable rental income each year.',
    difficulty: 'hard',
    topicTag: 'investment',
  },
  {
    id: 'q-invest-010',
    chapterId: 'investment-analysis',
    quizType: 'chapter_quiz',
    questionText:
      'When depreciation recapture occurs at the sale of an investment property, the recaptured depreciation is taxed at a maximum federal rate of:',
    options: [
      { id: 'a', text: '15%', isCorrect: false },
      { id: 'b', text: '20%', isCorrect: false },
      { id: 'c', text: '25%', isCorrect: true },
      { id: 'd', text: '37%', isCorrect: false },
    ],
    explanation:
      'Depreciation recapture on the sale of real property is taxed at a maximum federal rate of 25% under Section 1250 of the Internal Revenue Code. This applies to the portion of gain attributable to depreciation previously taken. Any remaining gain above the original purchase price is taxed at long-term capital gains rates (typically 15% or 20%).',
    difficulty: 'hard',
    topicTag: 'investment',
  },
]

// ── Module 10: The Virginia Residential Transaction ─────────────────────────

// ── Chapter: pre-listing-to-contract (10 questions) ─────────────────────────

const preListingQuestions: QuizQuestion[] = [
  {
    id: 'q-prelist-001',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'The primary purpose of a Comparative Market Analysis (CMA) is to:',
    options: [
      { id: 'a', text: 'Determine the official appraised value of a property', isCorrect: false },
      { id: 'b', text: 'Help sellers and buyers estimate a property\'s likely market value based on recent comparable sales', isCorrect: true },
      { id: 'c', text: 'Calculate the property tax assessment', isCorrect: false },
      { id: 'd', text: 'Satisfy the lender\'s underwriting requirements', isCorrect: false },
    ],
    explanation:
      'A CMA is an informal estimate of market value prepared by a real estate agent using recent comparable sales, active listings, and expired listings. It is NOT an appraisal (which must be performed by a licensed appraiser). The CMA helps sellers set a competitive listing price and helps buyers make informed offers.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-002',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'When preparing a CMA, which type of comparable property provides the MOST reliable indicator of current market value?',
    options: [
      { id: 'a', text: 'Active listings currently on the market', isCorrect: false },
      { id: 'b', text: 'Recently sold properties within the last 3-6 months', isCorrect: true },
      { id: 'c', text: 'Expired listings that failed to sell', isCorrect: false },
      { id: 'd', text: 'Properties listed for sale more than 12 months ago', isCorrect: false },
    ],
    explanation:
      'Recently sold (closed) comparable properties provide the most reliable data because they represent actual completed transactions with agreed-upon prices between willing buyers and sellers. Active listings show what sellers hope to get, and expired listings show prices the market rejected. Ideal comparables are within 3-6 months and close in location, size, and features.',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-003',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'During a listing presentation, a Virginia agent should provide the seller with:',
    options: [
      { id: 'a', text: 'A guaranteed sale price based on the CMA', isCorrect: false },
      { id: 'b', text: 'A marketing plan, CMA, explanation of agency relationship, and listing agreement terms', isCorrect: true },
      { id: 'c', text: 'A binding purchase contract from a buyer', isCorrect: false },
      { id: 'd', text: 'Only the MLS listing form for signature', isCorrect: false },
    ],
    explanation:
      'A thorough listing presentation includes the CMA with a recommended price range (not a guaranteed price), a proposed marketing plan, an explanation of the agency relationship and duties, the listing agreement terms, and a discussion of the seller\'s timeline and goals. Virginia licensees must disclose their agency role before entering into a business relationship.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-004',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'During a buyer consultation, the agent should determine all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'The buyer\'s pre-approval status and budget', isCorrect: false },
      { id: 'b', text: 'The buyer\'s desired location, features, and timeline', isCorrect: false },
      { id: 'c', text: 'The buyer\'s race, religion, and family status to better match neighborhoods', isCorrect: true },
      { id: 'd', text: 'Whether the buyer needs to sell a current home first', isCorrect: false },
    ],
    explanation:
      'An agent must NEVER inquire about or use a buyer\'s race, religion, national origin, familial status, or other protected class characteristics to guide housing recommendations. This would violate the Fair Housing Act. The consultation should focus on budget, pre-approval status, desired features, location preferences, and timeline.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-005',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the standard residential purchase contract typically includes an earnest money deposit (EMD) that is held by:',
    options: [
      { id: 'a', text: 'The seller\'s real estate agent', isCorrect: false },
      { id: 'b', text: 'The buyer directly', isCorrect: false },
      { id: 'c', text: 'The escrow agent or settlement agent designated in the contract', isCorrect: true },
      { id: 'd', text: 'The Virginia Real Estate Board', isCorrect: false },
    ],
    explanation:
      'In Virginia, the earnest money deposit is typically held by the settlement agent, the listing broker\'s escrow account, or another escrow agent designated in the contract. Virginia law requires that earnest money be deposited promptly (by the end of the fifth business day following ratification unless otherwise agreed). The funds are applied toward the buyer\'s costs at closing.',
    difficulty: 'hard',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-006',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'An offer to purchase becomes a binding contract when:',
    options: [
      { id: 'a', text: 'The buyer signs the offer', isCorrect: false },
      { id: 'b', text: 'The seller verbally accepts the offer', isCorrect: false },
      { id: 'c', text: 'The seller accepts in writing and the acceptance is communicated to the buyer or buyer\'s agent', isCorrect: true },
      { id: 'd', text: 'The earnest money deposit is received by the escrow agent', isCorrect: false },
    ],
    explanation:
      'Under Virginia contract law, an offer becomes a binding contract (ratified) when the seller accepts in writing and that acceptance is communicated to the buyer or buyer\'s agent. Verbal acceptance is insufficient for real estate contracts under the Statute of Frauds. The earnest money deposit is important but not required for contract formation.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-007',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer submits an offer with a 10-day home inspection contingency. This contingency gives the buyer the right to:',
    options: [
      { id: 'a', text: 'Renegotiate the purchase price at any time before closing', isCorrect: false },
      { id: 'b', text: 'Have the property inspected and negotiate repairs or withdraw based on the findings within the contingency period', isCorrect: true },
      { id: 'c', text: 'Demand that the seller make all repairs regardless of cost', isCorrect: false },
      { id: 'd', text: 'Delay closing indefinitely until all repairs are completed', isCorrect: false },
    ],
    explanation:
      'A home inspection contingency allows the buyer to have a professional inspection and, based on the findings, negotiate repairs, request a credit, renegotiate the price, or withdraw from the contract within the specified timeframe. The seller is not obligated to make any repairs. If the parties cannot agree, the buyer can typically terminate and receive the earnest money back.',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-008',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, when a property is listed on the MLS, the listing broker is typically offering:',
    options: [
      { id: 'a', text: 'A guaranteed sale to any buyer who views the property', isCorrect: false },
      { id: 'b', text: 'Compensation to cooperating brokers who procure a buyer', isCorrect: true },
      { id: 'c', text: 'An exclusive agreement that no other agent can show the property', isCorrect: false },
      { id: 'd', text: 'A warranty on the condition of the property', isCorrect: false },
    ],
    explanation:
      'When a property is listed on the MLS, the listing broker offers compensation to cooperating brokers (buyer\'s agents) who procure a buyer. This offer of compensation, combined with the cooperative nature of the MLS, is what facilitates cooperation between brokerages. The listing broker does not guarantee a sale or warrant the property\'s condition.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-009',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'A seller receives multiple offers simultaneously. Under Virginia law, the seller:',
    options: [
      { id: 'a', text: 'Must accept the highest offer', isCorrect: false },
      { id: 'b', text: 'Must accept the first offer received', isCorrect: false },
      { id: 'c', text: 'May accept, reject, or counter any or all offers at their discretion', isCorrect: true },
      { id: 'd', text: 'Must disclose the terms of all offers to every buyer', isCorrect: false },
    ],
    explanation:
      'A seller has full discretion to accept, reject, or counter any offers received. There is no legal obligation to accept the highest offer or the first offer. The listing agent must present all offers to the seller unless the seller has given written instructions to the contrary. The seller is not required to disclose terms of other offers to competing buyers.',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-prelist-010',
    chapterId: 'pre-listing-to-contract',
    quizType: 'chapter_quiz',
    questionText:
      'A counteroffer from the seller:',
    options: [
      { id: 'a', text: 'Keeps the original offer alive while adding new terms', isCorrect: false },
      { id: 'b', text: 'Rejects the original offer and creates a new offer from the seller to the buyer', isCorrect: true },
      { id: 'c', text: 'Automatically binds the buyer to the new terms', isCorrect: false },
      { id: 'd', text: 'Must be accepted by the buyer within 24 hours', isCorrect: false },
    ],
    explanation:
      'A counteroffer legally rejects the original offer and creates a new offer from the seller to the buyer. The original offer is dead and cannot be accepted later. The buyer may accept, reject, or counter the counteroffer. There is no automatic timeline for response unless one is specified in the counteroffer.',
    difficulty: 'hard',
    topicTag: 'transaction',
  },
]

// ── Chapter: under-contract-to-closing (10 questions) ───────────────────────

const underContractQuestions: QuizQuestion[] = [
  {
    id: 'q-contract-m9-001',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'During a home inspection, the inspector discovers a deficiency. In Virginia, the seller is obligated to:',
    options: [
      { id: 'a', text: 'Repair all deficiencies discovered during the inspection', isCorrect: false },
      { id: 'b', text: 'Only repair deficiencies that violate local building codes', isCorrect: false },
      { id: 'c', text: 'Negotiate in good faith, but has no obligation to make any repairs', isCorrect: true },
      { id: 'd', text: 'Provide a home warranty to cover any deficiencies', isCorrect: false },
    ],
    explanation:
      'In Virginia, the seller has no legal obligation to make repairs discovered during a home inspection. The inspection contingency allows the buyer to request repairs, negotiate a credit, or withdraw from the contract. The seller may agree to repairs, offer a credit, reduce the price, or refuse. If the parties cannot agree, the buyer can exercise the contingency to terminate.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-002',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'The purpose of an appraisal ordered by the lender is to:',
    options: [
      { id: 'a', text: 'Identify all structural and mechanical deficiencies in the property', isCorrect: false },
      { id: 'b', text: 'Ensure the property value supports the loan amount so the lender\'s collateral is adequate', isCorrect: true },
      { id: 'c', text: 'Determine the property tax assessment for the local government', isCorrect: false },
      { id: 'd', text: 'Provide the buyer with a home inspection report', isCorrect: false },
    ],
    explanation:
      'The lender orders the appraisal to confirm that the property\'s market value supports the loan amount, protecting the lender\'s collateral position. The appraisal is not a home inspection and does not identify all deficiencies. However, if the appraiser notes obvious safety or habitability issues, these may need to be addressed (especially for FHA and VA loans).',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-003',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'If the appraisal comes in lower than the contract price, the buyer can do all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Pay the difference in cash to make up the gap', isCorrect: false },
      { id: 'b', text: 'Negotiate with the seller to reduce the price', isCorrect: false },
      { id: 'c', text: 'Force the lender to approve the loan at the original contract price', isCorrect: true },
      { id: 'd', text: 'Exercise the appraisal contingency to terminate the contract', isCorrect: false },
    ],
    explanation:
      'When the appraisal is below the contract price, the buyer can pay the difference in cash, negotiate a lower price, request the seller contribute more toward closing, or terminate the contract using the appraisal contingency (if one exists). The buyer cannot force the lender to approve a loan exceeding the appraised value.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-004',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'A title search is performed primarily to:',
    options: [
      { id: 'a', text: 'Determine the property\'s market value', isCorrect: false },
      { id: 'b', text: 'Verify the seller\'s ownership and identify any liens, encumbrances, or defects in title', isCorrect: true },
      { id: 'c', text: 'Satisfy the home inspection contingency', isCorrect: false },
      { id: 'd', text: 'Calculate the property tax proration', isCorrect: false },
    ],
    explanation:
      'A title search examines public records to verify the seller\'s legal ownership, identify any outstanding liens (mortgages, tax liens, mechanic\'s liens), easements, judgments, or other encumbrances on the title. This is essential to ensure the buyer receives clear, marketable title. Title insurance is then issued based on the title search results.',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-005',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'During the loan processing stage, the lender\'s underwriter is primarily evaluating:',
    options: [
      { id: 'a', text: 'Whether the agent earned their commission', isCorrect: false },
      { id: 'b', text: 'The borrower\'s creditworthiness, the property\'s value, and the loan\'s compliance with lending guidelines', isCorrect: true },
      { id: 'c', text: 'The condition of the property\'s roof and HVAC system', isCorrect: false },
      { id: 'd', text: 'The seller\'s financial stability', isCorrect: false },
    ],
    explanation:
      'The underwriter evaluates the borrower\'s ability and willingness to repay (credit, income, assets, debt ratios), the property\'s value as collateral (via the appraisal), and whether the loan meets the specific program guidelines (FHA, VA, conventional, etc.). The underwriter may issue a conditional approval requiring additional documentation before final "clear to close."',
    difficulty: 'easy',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-006',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'A "clear to close" from the lender means:',
    options: [
      { id: 'a', text: 'The borrower\'s credit has been cleared of all derogatory items', isCorrect: false },
      { id: 'b', text: 'All underwriting conditions have been satisfied and the lender is ready to fund the loan', isCorrect: true },
      { id: 'c', text: 'The closing must occur within 24 hours', isCorrect: false },
      { id: 'd', text: 'The title search has been completed', isCorrect: false },
    ],
    explanation:
      'A "clear to close" means the underwriter has verified all conditions, the loan documents are being prepared, and the lender is ready to fund. This is the final step before closing documents are sent to the settlement agent. It does not mandate a specific closing timeline but indicates that the loan is fully approved.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-007',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'A survey of the property is important because it:',
    options: [
      { id: 'a', text: 'Replaces the need for a title search', isCorrect: false },
      { id: 'b', text: 'Identifies the exact boundaries, improvements, encroachments, and easements on the property', isCorrect: true },
      { id: 'c', text: 'Determines the property\'s assessed value for tax purposes', isCorrect: false },
      { id: 'd', text: 'Is required by Virginia law for all residential transactions', isCorrect: false },
    ],
    explanation:
      'A survey identifies the exact property boundaries, locations of improvements (buildings, fences, driveways), any encroachments onto or from neighboring properties, and visible easements. While not required by Virginia law for all residential transactions, many lenders and title companies require a survey. It can reveal boundary disputes and encroachment issues not discoverable through a title search alone.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-008',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'Title insurance in Virginia typically includes:',
    options: [
      { id: 'a', text: 'Only an owner\'s policy to protect the buyer', isCorrect: false },
      { id: 'b', text: 'A lender\'s policy (required by the lender) and an optional owner\'s policy for the buyer', isCorrect: true },
      { id: 'c', text: 'Coverage for future zoning changes', isCorrect: false },
      { id: 'd', text: 'A guarantee that the property will increase in value', isCorrect: false },
    ],
    explanation:
      'The lender typically requires a lender\'s title insurance policy to protect its mortgage interest. The owner\'s policy, which protects the buyer\'s equity, is separate and optional (though highly recommended). Title insurance is a one-time premium paid at closing that covers losses from title defects that were not discovered in the title search.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-009',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'If a buyer fails to secure financing by the deadline specified in the financing contingency, the buyer may:',
    options: [
      { id: 'a', text: 'Be forced to purchase with cash', isCorrect: false },
      { id: 'b', text: 'Terminate the contract and receive the earnest money deposit back', isCorrect: true },
      { id: 'c', text: 'Automatically receive a 30-day extension', isCorrect: false },
      { id: 'd', text: 'Sue the lender for breach of contract', isCorrect: false },
    ],
    explanation:
      'A financing contingency protects the buyer by allowing contract termination and return of the earnest money if the buyer is unable to obtain loan approval within the specified timeframe. Without this contingency, the buyer risks losing the earnest money deposit if they cannot secure financing. Extensions may be negotiated but are not automatic.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-contract-m9-010',
    chapterId: 'under-contract-to-closing',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following would most likely be found during a title search and could delay closing?',
    options: [
      { id: 'a', text: 'A cracked foundation discovered during the home inspection', isCorrect: false },
      { id: 'b', text: 'An unresolved mechanic\'s lien from a previous contractor', isCorrect: true },
      { id: 'c', text: 'The buyer\'s low credit score', isCorrect: false },
      { id: 'd', text: 'The property\'s location in a flood zone', isCorrect: false },
    ],
    explanation:
      'A mechanic\'s lien is recorded in public records and would be discovered during a title search. Unresolved liens must be satisfied or addressed before clear title can be conveyed. A cracked foundation is an inspection issue, credit scores are a lending issue, and flood zone status is a disclosure/insurance issue, not title defects.',
    difficulty: 'hard',
    topicTag: 'transaction',
  },
]

// ── Chapter: virginia-settlement-process (10 questions) ─────────────────────

const settlementQuestions: QuizQuestion[] = [
  {
    id: 'q-settle-001',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, real estate closings are conducted by:',
    options: [
      { id: 'a', text: 'The real estate agents involved in the transaction', isCorrect: false },
      { id: 'b', text: 'A settlement agent, typically an attorney or title company', isCorrect: true },
      { id: 'c', text: 'The local circuit court clerk', isCorrect: false },
      { id: 'd', text: 'The lender\'s loan officer', isCorrect: false },
    ],
    explanation:
      'Virginia is an "attorney state" where real estate closings must be conducted by or under the supervision of a licensed attorney. Settlement agents (attorneys or title companies supervised by attorneys) handle document preparation, fund disbursement, and recording. Real estate agents facilitate the transaction but do not conduct the closing.',
    difficulty: 'easy',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-002',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'Under the TRID (TILA-RESPA Integrated Disclosure) rule, the lender must provide the Closing Disclosure to the borrower at least:',
    options: [
      { id: 'a', text: '1 business day before closing', isCorrect: false },
      { id: 'b', text: '3 business days before closing', isCorrect: true },
      { id: 'c', text: '5 business days before closing', isCorrect: false },
      { id: 'd', text: '7 business days before closing', isCorrect: false },
    ],
    explanation:
      'The TRID rule requires the lender to deliver the Closing Disclosure (CD) to the borrower at least 3 business days before closing. This gives the borrower time to review final loan terms, closing costs, and cash needed. If certain key terms change after delivery, a new 3-day waiting period may be triggered.',
    difficulty: 'easy',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-003',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'The TRID rule replaced which two former disclosure documents with the Loan Estimate and Closing Disclosure?',
    options: [
      { id: 'a', text: 'The deed of trust and the promissory note', isCorrect: false },
      { id: 'b', text: 'The Good Faith Estimate (GFE) and the HUD-1 Settlement Statement', isCorrect: true },
      { id: 'c', text: 'The title commitment and the survey', isCorrect: false },
      { id: 'd', text: 'The buyer\'s closing statement and the seller\'s closing statement', isCorrect: false },
    ],
    explanation:
      'TRID combined disclosures from TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act). The Loan Estimate replaced the Good Faith Estimate and initial TIL disclosure. The Closing Disclosure replaced the HUD-1 Settlement Statement and final TIL disclosure. These changes took effect October 3, 2015.',
    difficulty: 'medium',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-004',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s Consumer Real Estate Settlement Protection Act (CRESPA) primarily protects consumers by:',
    options: [
      { id: 'a', text: 'Setting maximum commission rates for real estate agents', isCorrect: false },
      { id: 'b', text: 'Requiring settlement agents to maintain escrow accounts, fidelity bonds, and errors and omissions insurance', isCorrect: true },
      { id: 'c', text: 'Guaranteeing that all homes pass inspection before closing', isCorrect: false },
      { id: 'd', text: 'Eliminating closing costs for first-time homebuyers', isCorrect: false },
    ],
    explanation:
      'CRESPA (Virginia Code 6.2-1800 et seq.) provides consumer protection by requiring settlement agents to maintain proper escrow accounts, obtain fidelity bonds and surety bonds, carry errors and omissions insurance, and register with the Virginia State Bar or the Bureau of Financial Institutions. These requirements protect consumers from fraud and mishandling of settlement funds.',
    difficulty: 'hard',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-005',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'Property taxes in Virginia are typically prorated at closing based on:',
    options: [
      { id: 'a', text: 'The calendar year, with the seller responsible through the day before closing', isCorrect: true },
      { id: 'b', text: 'The fiscal year, with the buyer responsible for the entire year', isCorrect: false },
      { id: 'c', text: 'The month of closing only', isCorrect: false },
      { id: 'd', text: 'Property taxes are never prorated in Virginia', isCorrect: false },
    ],
    explanation:
      'In Virginia, property taxes are typically prorated based on the calendar year (January 1 through December 31). The seller is charged for days owned through the day before the closing date, and the buyer is responsible from the closing date forward. If taxes for the current period have not yet been billed, the proration uses the prior year\'s tax amount as an estimate.',
    difficulty: 'medium',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-006',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'At closing, the seller\'s existing mortgage is typically:',
    options: [
      { id: 'a', text: 'Transferred to the buyer automatically', isCorrect: false },
      { id: 'b', text: 'Paid off from the sale proceeds, and a release or satisfaction is recorded', isCorrect: true },
      { id: 'c', text: 'Converted into the buyer\'s new loan', isCorrect: false },
      { id: 'd', text: 'Held in escrow for 90 days', isCorrect: false },
    ],
    explanation:
      'The settlement agent uses the sale proceeds to pay off the seller\'s existing mortgage at closing. The lender then provides a certificate of satisfaction (or release of deed of trust), which is recorded in the land records to remove the lien. If the sale proceeds are insufficient to pay off the mortgage, the transaction may not close without the seller bringing funds.',
    difficulty: 'easy',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-007',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'A closing scheduled for Wednesday requires the lender to deliver the Closing Disclosure by no later than:',
    options: [
      { id: 'a', text: 'The prior Wednesday', isCorrect: false },
      { id: 'b', text: 'The prior Friday', isCorrect: false },
      { id: 'c', text: 'The prior Saturday', isCorrect: true },
      { id: 'd', text: 'The prior Monday', isCorrect: false },
    ],
    explanation:
      'The Closing Disclosure must be delivered at least 3 business days before closing. For a Wednesday closing: counting back 3 business days gives Tuesday, Monday, and Saturday. Saturday counts as a business day under TRID rules (only Sundays and federal holidays are excluded). Therefore, delivery must occur by Saturday at the latest.',
    difficulty: 'hard',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-008',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'The final walkthrough before closing is primarily intended to:',
    options: [
      { id: 'a', text: 'Renegotiate the purchase price', isCorrect: false },
      { id: 'b', text: 'Verify the property condition is substantially the same as when the contract was written and agreed repairs were completed', isCorrect: true },
      { id: 'c', text: 'Conduct a second formal home inspection', isCorrect: false },
      { id: 'd', text: 'Satisfy the lender\'s appraisal requirements', isCorrect: false },
    ],
    explanation:
      'The final walkthrough (typically 24-48 hours before closing) allows the buyer to verify the property is in substantially the same condition as when the offer was made, agreed-upon repairs were completed, all fixtures and inclusions remain, and the property is vacant (unless otherwise agreed). It is not a second inspection and is not the time to raise new issues.',
    difficulty: 'easy',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-009',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, HOA dues are prorated at settlement. If monthly HOA dues are $300 and closing occurs on June 16 (30-day month), how much does the seller owe for June?',
    options: [
      { id: 'a', text: '$150', isCorrect: true },
      { id: 'b', text: '$140', isCorrect: false },
      { id: 'c', text: '$160', isCorrect: false },
      { id: 'd', text: '$300', isCorrect: false },
    ],
    explanation:
      'Daily rate = $300 / 30 days = $10/day. Seller is responsible through June 15 (day before closing) = 15 days x $10 = $150. The buyer is responsible from the closing date (June 16) forward. The seller receives a debit and the buyer receives a credit for the seller\'s portion.',
    difficulty: 'medium',
    topicTag: 'settlement',
  },
  {
    id: 'q-settle-010',
    chapterId: 'virginia-settlement-process',
    quizType: 'chapter_quiz',
    questionText:
      'Which change to the Closing Disclosure would trigger a new 3-business-day waiting period under TRID?',
    options: [
      { id: 'a', text: 'A $50 increase in the title insurance premium', isCorrect: false },
      { id: 'b', text: 'An increase in the APR by more than 1/8 of a percent for a fixed-rate loan', isCorrect: true },
      { id: 'c', text: 'A change in the seller\'s real estate agent', isCorrect: false },
      { id: 'd', text: 'A $100 change in the pest inspection fee', isCorrect: false },
    ],
    explanation:
      'A new 3-day waiting period is triggered by three specific changes: (1) the APR increases by more than 1/8% for fixed-rate loans or 1/4% for adjustable-rate loans, (2) the loan product changes (e.g., fixed to adjustable), or (3) a prepayment penalty is added. Routine cost adjustments that do not affect these items do not require a new waiting period.',
    difficulty: 'hard',
    topicTag: 'settlement',
  },
]

// ── Chapter: post-closing-special-situations (10 questions) ─────────────────

const postClosingQuestions: QuizQuestion[] = [
  {
    id: 'q-postclose-001',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'After closing in Virginia, the deed is recorded in the:',
    options: [
      { id: 'a', text: 'Virginia Real Estate Board\'s central registry', isCorrect: false },
      { id: 'b', text: 'Clerk\'s office of the circuit court in the jurisdiction where the property is located', isCorrect: true },
      { id: 'c', text: 'Virginia Department of Taxation office', isCorrect: false },
      { id: 'd', text: 'The local assessor\'s office', isCorrect: false },
    ],
    explanation:
      'In Virginia, deeds and other instruments affecting real property are recorded in the clerk\'s office of the circuit court for the city or county where the property is located. Recording provides constructive notice to the world of the ownership transfer. The settlement agent typically handles recording as part of their closing duties.',
    difficulty: 'easy',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-002',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia imposes a recordation tax (grantor\'s tax) on the sale of real property at a rate of:',
    options: [
      { id: 'a', text: '$0.50 per $500 of consideration (or $1.00 per $1,000)', isCorrect: true },
      { id: 'b', text: '$2.50 per $1,000 of consideration', isCorrect: false },
      { id: 'c', text: '1% of the sale price', isCorrect: false },
      { id: 'd', text: '$5.00 per $500 of consideration', isCorrect: false },
    ],
    explanation:
      'Virginia\'s state grantor\'s tax (recordation tax) is $0.50 per $500 of consideration, equivalent to $1.00 per $1,000 of the sale price. Some localities impose an additional local grantor\'s tax. In Virginia, the grantor\'s tax is customarily paid by the seller. There is also a separate state recordation tax on the deed of trust (the buyer\'s mortgage) at the same rate.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-003',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'A short sale occurs when:',
    options: [
      { id: 'a', text: 'The property sells quickly, within 30 days of listing', isCorrect: false },
      { id: 'b', text: 'The property sells for less than the outstanding mortgage balance, with the lender\'s approval', isCorrect: true },
      { id: 'c', text: 'The sale is conducted through a public auction', isCorrect: false },
      { id: 'd', text: 'The buyer pays all cash with no financing', isCorrect: false },
    ],
    explanation:
      'A short sale is a transaction where the lender agrees to accept less than the full mortgage balance owed, allowing the homeowner to sell the property and avoid foreclosure. The lender must approve the short sale, and the process often takes longer than a traditional sale. The lender may or may not pursue the seller for the remaining deficiency.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-004',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, foreclosure on residential property is typically conducted through:',
    options: [
      { id: 'a', text: 'Strict foreclosure by the court', isCorrect: false },
      { id: 'b', text: 'Non-judicial foreclosure (trustee sale) under the power of sale in the deed of trust', isCorrect: true },
      { id: 'c', text: 'Sheriff\'s sale only after a jury trial', isCorrect: false },
      { id: 'd', text: 'The Virginia Real Estate Board conducts all foreclosures', isCorrect: false },
    ],
    explanation:
      'Virginia is a deed of trust state that uses non-judicial foreclosure (also called a trustee sale). The deed of trust includes a power of sale clause allowing the trustee to sell the property at public auction after proper notice without going through court. Virginia requires the trustee to provide notice and advertise the sale. Judicial foreclosure is available but rarely used for residential property.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-005',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'The most common form of wire fraud in real estate transactions involves:',
    options: [
      { id: 'a', text: 'A buyer wiring too much money to the settlement agent', isCorrect: false },
      { id: 'b', text: 'Hackers intercepting emails and sending fraudulent wire instructions to redirect closing funds', isCorrect: true },
      { id: 'c', text: 'The settlement agent wiring funds to the wrong bank by accident', isCorrect: false },
      { id: 'd', text: 'A seller refusing to accept wired funds', isCorrect: false },
    ],
    explanation:
      'Wire fraud in real estate typically involves hackers who compromise email accounts of agents, settlement agents, or lenders. They send fraudulent emails with altered wire instructions, directing the buyer to wire closing funds to the criminal\'s account instead of the legitimate settlement account. Buyers should ALWAYS verify wire instructions by calling a known, trusted phone number.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-006',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'To protect against wire fraud, buyers should:',
    options: [
      { id: 'a', text: 'Send wire instructions via email for a paper trail', isCorrect: false },
      { id: 'b', text: 'Verify wire instructions by calling the settlement agent at a previously known phone number, not one from an email', isCorrect: true },
      { id: 'c', text: 'Wire funds to the real estate agent\'s personal account for safekeeping', isCorrect: false },
      { id: 'd', text: 'Wait until the day of closing to request wire instructions', isCorrect: false },
    ],
    explanation:
      'The best protection against wire fraud is to independently verify wire instructions by calling the settlement company at a phone number obtained from a reliable source (their website, business card, or prior communication), never from the email containing the wire instructions. Buyers should never wire funds based solely on emailed instructions, as these may have been altered by hackers.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-007',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'In a new construction purchase, the buyer\'s earnest money deposit is typically:',
    options: [
      { id: 'a', text: 'Refundable at any time with no conditions', isCorrect: false },
      { id: 'b', text: 'Larger than a resale transaction and may be released to the builder in stages', isCorrect: true },
      { id: 'c', text: 'Not required because the builder finances the construction', isCorrect: false },
      { id: 'd', text: 'The same as a standard resale transaction in all cases', isCorrect: false },
    ],
    explanation:
      'New construction deposits are often significantly larger (5-10% of the purchase price) compared to resale transactions. Builders may structure deposits in stages (initial deposit, additional deposit at certain milestones). Unlike resale EMDs held in escrow, builder deposits may be released to the builder to fund construction, which increases the buyer\'s risk if the builder defaults.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-008',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'After a non-judicial foreclosure sale in Virginia, the former homeowner:',
    options: [
      { id: 'a', text: 'Has a 12-month statutory redemption period to reclaim the property', isCorrect: false },
      { id: 'b', text: 'Has no statutory right of redemption after the trustee sale', isCorrect: true },
      { id: 'c', text: 'Can reclaim the property by paying 150% of the sale price within 6 months', isCorrect: false },
      { id: 'd', text: 'Automatically retains a life estate in the property', isCorrect: false },
    ],
    explanation:
      'Virginia does not provide a statutory right of redemption after a non-judicial foreclosure (trustee sale). Once the sale is completed and the trustee\'s deed is delivered, the former owner has no right to reclaim the property. This differs from some other states that provide redemption periods. The borrower can cure the default and stop the foreclosure before the sale occurs.',
    difficulty: 'hard',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-009',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Virginia New Home Warranties Act (Va. Code \u00a7 55.1-357), a builder of new residential construction must provide a statutory warranty of at least what minimum duration from the date of transfer of record title or the buyer taking possession, whichever occurs first?',
    options: [
      { id: 'a', text: '1 year', isCorrect: true },
      { id: 'b', text: '2 years', isCorrect: false },
      { id: 'c', text: '5 years', isCorrect: false },
      { id: 'd', text: '10 years', isCorrect: false },
    ],
    explanation:
      'The Virginia New Home Warranties Act (Va. Code \u00a7 55.1-357) requires builders to provide a statutory warranty of at least one year against defective materials, workmanship, and structural defects (and against faulty installation of plumbing, electrical, heating, and cooling systems). The tiered 1-year / 2-year / 5-year (or 10-year) coverage structure is not part of the VA statute itself; it is typical of THIRD-PARTY new home warranty programs (e.g., 2-10 HBW) that builders may purchase in addition to, or in lieu of, the statutory warranty.',
    difficulty: 'hard',
    topicTag: 'post-closing',
  },
  {
    id: 'q-postclose-010',
    chapterId: 'post-closing-special-situations',
    quizType: 'chapter_quiz',
    questionText:
      'The primary advantage of a short sale over foreclosure for a homeowner is:',
    options: [
      { id: 'a', text: 'The homeowner receives proceeds from the sale', isCorrect: false },
      { id: 'b', text: 'A short sale typically has less negative impact on the homeowner\'s credit than a foreclosure', isCorrect: true },
      { id: 'c', text: 'The lender cannot pursue a deficiency judgment after a short sale', isCorrect: false },
      { id: 'd', text: 'The homeowner can remain in the property indefinitely', isCorrect: false },
    ],
    explanation:
      'A short sale generally has a less severe impact on the homeowner\'s credit score compared to a foreclosure, and the credit recovery period is typically shorter. However, the lender may still pursue a deficiency judgment for the difference in some cases (unless waived in the short sale agreement). The homeowner does not receive sale proceeds in a short sale since the sale price is already less than owed.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
]

// ── Mock Exam: Modules 9 & 10 (20 questions) ───────────────────────────────

const mockExam910Questions: QuizQuestion[] = [
  {
    id: 'q-mock910-001',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A borrower with a credit score of 540 applies for an FHA loan. What is the minimum down payment required?',
    options: [
      { id: 'a', text: '3.5%', isCorrect: false },
      { id: 'b', text: '5%', isCorrect: false },
      { id: 'c', text: '10%', isCorrect: true },
      { id: 'd', text: 'The borrower does not qualify for FHA financing', isCorrect: false },
    ],
    explanation:
      'FHA borrowers with credit scores between 500 and 579 are required to make a 10% down payment. Borrowers with scores of 580 or above qualify for the 3.5% minimum. Scores below 500 do not qualify for FHA financing.',
    difficulty: 'medium',
    topicTag: 'government-loans',
  },
  {
    id: 'q-mock910-002',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Which borrower is EXEMPT from the VA funding fee?',
    options: [
      { id: 'a', text: 'A veteran using the VA loan for the second time', isCorrect: false },
      { id: 'b', text: 'A veteran receiving VA disability compensation', isCorrect: true },
      { id: 'c', text: 'A veteran purchasing a second home', isCorrect: false },
      { id: 'd', text: 'A veteran with a credit score above 750', isCorrect: false },
    ],
    explanation:
      'Veterans receiving VA disability compensation, surviving spouses of veterans who died in the line of duty, and Purple Heart recipients on active duty are exempt from the VA funding fee. Credit score, loan usage count, and property type do not affect the exemption.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
  {
    id: 'q-mock910-003',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'An investor sells a property and wants to defer capital gains through a 1031 exchange. She must close on the replacement property within:',
    options: [
      { id: 'a', text: '45 days of selling the relinquished property', isCorrect: false },
      { id: 'b', text: '90 days of selling the relinquished property', isCorrect: false },
      { id: 'c', text: '180 days of selling the relinquished property (or the tax return due date, if earlier)', isCorrect: true },
      { id: 'd', text: '365 days of selling the relinquished property', isCorrect: false },
    ],
    explanation:
      'In a 1031 exchange, the investor must identify replacement properties within 45 days and close within 180 days of the sale of the relinquished property (or by the tax return due date with extensions, whichever comes first). The 45-day and 180-day periods run concurrently from the date of sale.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-mock910-004',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A property produces $150,000 in gross income, has a 10% vacancy rate, and $55,000 in operating expenses. What is the NOI?',
    options: [
      { id: 'a', text: '$80,000', isCorrect: true },
      { id: 'b', text: '$95,000', isCorrect: false },
      { id: 'c', text: '$135,000', isCorrect: false },
      { id: 'd', text: '$75,000', isCorrect: false },
    ],
    explanation:
      'EGI = $150,000 - ($150,000 x 10%) = $150,000 - $15,000 = $135,000. NOI = EGI - Operating Expenses = $135,000 - $55,000 = $80,000. Remember that debt service, income taxes, and depreciation are NOT operating expenses and are not subtracted from NOI.',
    difficulty: 'medium',
    topicTag: 'investment',
  },
  {
    id: 'q-mock910-005',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A property with an NOI of $48,000 sells for $600,000. An investor uses a cap rate of 8% to estimate value. The property is:',
    options: [
      { id: 'a', text: 'Overpriced, because the cap rate suggests a value of $600,000', isCorrect: false },
      { id: 'b', text: 'Overpriced, because the cap rate suggests a value of $480,000', isCorrect: false },
      { id: 'c', text: 'Fairly priced, because $48,000 / $600,000 = 8%', isCorrect: true },
      { id: 'd', text: 'Underpriced, because the cap rate suggests a value of $720,000', isCorrect: false },
    ],
    explanation:
      'Value = NOI / Cap Rate = $48,000 / 0.08 = $600,000. Since the estimated value equals the sale price, the property is fairly priced at the investor\'s required 8% return. If the investor required a higher return, the property would be overpriced; if a lower return was acceptable, it would appear underpriced.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-mock910-006',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'In seller financing, which clause in the seller\'s existing mortgage poses the greatest risk to the transaction?',
    options: [
      { id: 'a', text: 'Prepayment penalty clause', isCorrect: false },
      { id: 'b', text: 'Due-on-sale (alienation) clause', isCorrect: true },
      { id: 'c', text: 'Subordination clause', isCorrect: false },
      { id: 'd', text: 'Habendum clause', isCorrect: false },
    ],
    explanation:
      'The due-on-sale clause allows the existing lender to call the entire loan balance due upon transfer of ownership. In a wraparound or other seller financing arrangement where the seller\'s original mortgage remains in place, the lender could discover the transfer and demand full repayment, potentially causing the seller to default.',
    difficulty: 'hard',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-mock910-007',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Commercial (nonresidential) real property is depreciated over how many years for federal tax purposes?',
    options: [
      { id: 'a', text: '15 years', isCorrect: false },
      { id: 'b', text: '27.5 years', isCorrect: false },
      { id: 'c', text: '31.5 years', isCorrect: false },
      { id: 'd', text: '39 years', isCorrect: true },
    ],
    explanation:
      'Nonresidential (commercial) real property is depreciated over 39 years using the straight-line method. Residential rental property is depreciated over 27.5 years. Land is never depreciable. The 15-year recovery period applies to certain land improvements such as landscaping and parking lots.',
    difficulty: 'easy',
    topicTag: 'taxation',
  },
  {
    id: 'q-mock910-008',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Under TRID, the Loan Estimate must be provided to the borrower within how many business days of receiving a loan application?',
    options: [
      { id: 'a', text: '1 business day', isCorrect: false },
      { id: 'b', text: '3 business days', isCorrect: true },
      { id: 'c', text: '5 business days', isCorrect: false },
      { id: 'd', text: '7 business days', isCorrect: false },
    ],
    explanation:
      'Under TRID, the lender must provide the Loan Estimate within 3 business days of receiving a completed loan application. The Loan Estimate replaced the old Good Faith Estimate and includes estimated loan terms, projected payments, and closing costs. The borrower must receive it at least 7 business days before closing.',
    difficulty: 'medium',
    topicTag: 'settlement',
  },
  {
    id: 'q-mock910-009',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A Virginia homeowner sells their primary residence for $650,000 after living there for 4 years. They originally purchased it for $350,000. Filing as single, how much of the gain is taxable?',
    options: [
      { id: 'a', text: '$0', isCorrect: false },
      { id: 'b', text: '$50,000', isCorrect: true },
      { id: 'c', text: '$300,000', isCorrect: false },
      { id: 'd', text: '$150,000', isCorrect: false },
    ],
    explanation:
      'The total gain is $650,000 - $350,000 = $300,000. A single filer can exclude up to $250,000 of gain under Section 121 (2-of-5-year rule). The taxable gain is $300,000 - $250,000 = $50,000. A married couple filing jointly could exclude up to $500,000, which would make the entire gain tax-free.',
    difficulty: 'hard',
    topicTag: 'taxation',
  },
  {
    id: 'q-mock910-010',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'In Virginia, the settlement agent is responsible for all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Preparing the deed and closing documents', isCorrect: false },
      { id: 'b', text: 'Disbursing funds to the appropriate parties', isCorrect: false },
      { id: 'c', text: 'Determining the property\'s fair market value through an appraisal', isCorrect: true },
      { id: 'd', text: 'Recording the deed and deed of trust in the land records', isCorrect: false },
    ],
    explanation:
      'The settlement agent handles document preparation, fund disbursement, recording, and ensuring all conditions are met for closing. The appraisal is ordered by the lender and performed by a licensed appraiser, not the settlement agent. The settlement agent is neutral and works for all parties to facilitate the closing.',
    difficulty: 'medium',
    topicTag: 'settlement',
  },
  {
    id: 'q-mock910-011',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A USDA guaranteed loan requires the borrower\'s household income to be at or below what percentage of the area median income?',
    options: [
      { id: 'a', text: '80%', isCorrect: false },
      { id: 'b', text: '100%', isCorrect: false },
      { id: 'c', text: '115%', isCorrect: true },
      { id: 'd', text: '150%', isCorrect: false },
    ],
    explanation:
      'USDA guaranteed loan income limits are set at 115% of the area median income (AMI). The USDA direct loan program has lower income limits. Importantly, USDA counts all adult household income, not just the borrowers on the loan. Income limits vary by county and household size.',
    difficulty: 'medium',
    topicTag: 'government-loans',
  },
  {
    id: 'q-mock910-012',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A property has a gross annual rental income of $96,000 and sold for $1,200,000. What is the Gross Rent Multiplier (GRM)?',
    options: [
      { id: 'a', text: '8', isCorrect: false },
      { id: 'b', text: '10', isCorrect: false },
      { id: 'c', text: '12.5', isCorrect: true },
      { id: 'd', text: '15', isCorrect: false },
    ],
    explanation:
      'GRM = Sale Price / Gross Annual Rental Income = $1,200,000 / $96,000 = 12.5. The GRM is a quick screening tool that does not account for expenses, vacancies, or financing. A lower GRM generally indicates better value relative to income.',
    difficulty: 'easy',
    topicTag: 'investment',
  },
  {
    id: 'q-mock910-013',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'In a Virginia non-judicial foreclosure, the trustee must advertise the sale in a newspaper for:',
    options: [
      { id: 'a', text: 'At least once a week for two successive weeks', isCorrect: true },
      { id: 'b', text: 'At least once a week for four successive weeks', isCorrect: false },
      { id: 'c', text: 'A single advertisement at least 30 days before the sale', isCorrect: false },
      { id: 'd', text: 'No newspaper advertisement is required in Virginia', isCorrect: false },
    ],
    explanation:
      'Virginia Code requires the trustee to advertise the foreclosure sale in a newspaper having general circulation in the area where the property is located once a week for two successive weeks. The sale cannot occur until at least 14 days after the first advertisement. Additional notice requirements apply, including notice to the borrower.',
    difficulty: 'hard',
    topicTag: 'post-closing',
  },
  {
    id: 'q-mock910-014',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A CMA differs from an appraisal in that a CMA:',
    options: [
      { id: 'a', text: 'Must comply with USPAP standards', isCorrect: false },
      { id: 'b', text: 'Is an informal estimate prepared by a licensed agent, not a certified appraiser', isCorrect: true },
      { id: 'c', text: 'Can be used to satisfy lender requirements for underwriting', isCorrect: false },
      { id: 'd', text: 'Requires a physical inspection of comparable properties', isCorrect: false },
    ],
    explanation:
      'A CMA is an informal market value estimate prepared by a real estate agent using comparable sales data. An appraisal is a formal opinion of value by a licensed or certified appraiser following USPAP (Uniform Standards of Professional Appraisal Practice). Lenders require appraisals, not CMAs, for loan underwriting. Agents must not represent a CMA as an appraisal.',
    difficulty: 'medium',
    topicTag: 'transaction',
  },
  {
    id: 'q-mock910-015',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A property has an assessed value of $425,000. The local tax rate is $1.10 per $100 of assessed value. What is the annual property tax?',
    options: [
      { id: 'a', text: '$3,825', isCorrect: false },
      { id: 'b', text: '$4,250', isCorrect: false },
      { id: 'c', text: '$4,675', isCorrect: true },
      { id: 'd', text: '$5,100', isCorrect: false },
    ],
    explanation:
      'Annual property tax = ($425,000 / $100) x $1.10 = 4,250 x $1.10 = $4,675. Virginia property tax rates are commonly expressed in dollars per $100 of assessed value. This is a standard calculation tested on the Virginia licensing exam.',
    difficulty: 'medium',
    topicTag: 'taxation',
  },
  {
    id: 'q-mock910-016',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'A buyer purchases a property using a lease-option. The $5,000 option consideration is typically:',
    options: [
      { id: 'a', text: 'Refundable if the buyer decides not to purchase', isCorrect: false },
      { id: 'b', text: 'Non-refundable if the buyer decides not to exercise the option', isCorrect: true },
      { id: 'c', text: 'Applied to the monthly rent only', isCorrect: false },
      { id: 'd', text: 'Held by the county clerk\'s office', isCorrect: false },
    ],
    explanation:
      'The option consideration in a lease-option is typically non-refundable if the tenant/buyer decides not to exercise the option to purchase. If the buyer does exercise the option, the consideration may be credited toward the purchase price, depending on the terms of the agreement. This risk is an important disclosure point for agents working with lease-option buyers.',
    difficulty: 'medium',
    topicTag: 'creative-financing',
  },
  {
    id: 'q-mock910-017',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Virginia\'s grantor\'s tax on a property that sells for $500,000 would be:',
    options: [
      { id: 'a', text: '$250', isCorrect: false },
      { id: 'b', text: '$500', isCorrect: true },
      { id: 'c', text: '$1,000', isCorrect: false },
      { id: 'd', text: '$2,500', isCorrect: false },
    ],
    explanation:
      'Virginia\'s state grantor\'s tax is $0.50 per $500 of consideration, or equivalently $1.00 per $1,000. For a $500,000 sale: $500,000 / $1,000 x $1.00 = $500. Some localities impose an additional local grantor\'s tax (commonly $0.50 per $500 in Northern Virginia). The grantor\'s tax is customarily paid by the seller.',
    difficulty: 'hard',
    topicTag: 'settlement',
  },
  {
    id: 'q-mock910-018',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Positive leverage in real estate investing occurs when:',
    options: [
      { id: 'a', text: 'The property increases in value over time', isCorrect: false },
      { id: 'b', text: 'The return on the total investment exceeds the cost of borrowing', isCorrect: true },
      { id: 'c', text: 'The investor pays all cash for the property', isCorrect: false },
      { id: 'd', text: 'The property\'s operating expenses decrease', isCorrect: false },
    ],
    explanation:
      'Positive leverage occurs when the overall rate of return on the property (cap rate) exceeds the interest rate (cost of borrowing). In this scenario, the borrowed funds generate more return than they cost, amplifying the investor\'s return on equity. Negative leverage occurs when borrowing costs exceed the property\'s return.',
    difficulty: 'hard',
    topicTag: 'investment',
  },
  {
    id: 'q-mock910-019',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'Under Virginia\'s New Home Warranties Act, the builder\'s warranty on major systems (plumbing, electrical, HVAC) lasts:',
    options: [
      { id: 'a', text: '1 year', isCorrect: false },
      { id: 'b', text: '2 years', isCorrect: true },
      { id: 'c', text: '5 years', isCorrect: false },
      { id: 'd', text: '10 years', isCorrect: false },
    ],
    explanation:
      'Virginia\'s New Home Warranties Act provides three tiers of warranty coverage: workmanship and materials for 1 year, major systems (plumbing, electrical, HVAC) for 2 years, and structural defects for 5 years. These run from the date of settlement, not the date of construction completion.',
    difficulty: 'medium',
    topicTag: 'post-closing',
  },
  {
    id: 'q-mock910-020',
    chapterId: 'mock-exam-910',
    quizType: 'mock_exam',
    questionText:
      'An FHA 203(k) loan is specifically designed for:',
    options: [
      { id: 'a', text: 'Purchasing a condominium unit', isCorrect: false },
      { id: 'b', text: 'Financing both the purchase and renovation of a property in a single mortgage', isCorrect: true },
      { id: 'c', text: 'Reverse mortgage borrowers aged 62 and older', isCorrect: false },
      { id: 'd', text: 'Purchasing vacant land for future construction', isCorrect: false },
    ],
    explanation:
      'The FHA 203(k) rehabilitation loan finances both the purchase price and the cost of renovations in a single mortgage. This is particularly useful for buyers purchasing fixer-upper properties. The standard FHA purchase loan is the 203(b), the 234(c) is for condominiums, and the HECM is the reverse mortgage program.',
    difficulty: 'easy',
    topicTag: 'government-loans',
  },
]

// ── Combined Export ──────────────────────────────────────────────────────────

export const MOD910_QUESTIONS: QuizQuestion[] = [
  ...govLoanQuestions,
  ...creativeFinancingQuestions,
  ...taxationQuestions,
  ...investmentAnalysisQuestions,
  ...preListingQuestions,
  ...underContractQuestions,
  ...settlementQuestions,
  ...postClosingQuestions,
  ...mockExam910Questions,
]
