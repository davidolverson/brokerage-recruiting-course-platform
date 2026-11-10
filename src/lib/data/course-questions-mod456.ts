import type { QuizQuestion } from './course-questions'

// ── Module 4: Finance & Valuation ────────────────────────────────────────────

// ── Chapter: mortgage-types-terms (10 questions) ─────────────────────────────

const mortgageTypesQuestions: QuizQuestion[] = [
  {
    id: 'q-mortgage-001',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of mortgage loan has an interest rate that remains the same for the entire term of the loan?',
    options: [
      { id: 'a', text: 'Adjustable-rate mortgage (ARM)', isCorrect: false },
      { id: 'b', text: 'Fixed-rate mortgage', isCorrect: true },
      { id: 'c', text: 'Graduated payment mortgage', isCorrect: false },
      { id: 'd', text: 'Balloon mortgage', isCorrect: false },
    ],
    explanation:
      'A fixed-rate mortgage locks in the interest rate for the full loan term, providing predictable monthly payments. ARMs fluctuate with market indices, and graduated payment mortgages start with lower payments that increase over time.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-002',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'In an adjustable-rate mortgage, the index plus the margin equals the:',
    options: [
      { id: 'a', text: 'Discount rate', isCorrect: false },
      { id: 'b', text: 'Prime rate', isCorrect: false },
      { id: 'c', text: 'Fully indexed rate', isCorrect: true },
      { id: 'd', text: 'Annual percentage rate', isCorrect: false },
    ],
    explanation:
      'The fully indexed rate on an ARM is calculated by adding the margin (a fixed percentage set by the lender) to the index (a benchmark rate like SOFR or Treasury yields). Rate caps may limit how much the actual rate can adjust.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-003',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'A borrower takes out a loan that requires interest-only payments for 7 years, after which the entire principal balance is due. This is called a:',
    options: [
      { id: 'a', text: 'Fully amortized loan', isCorrect: false },
      { id: 'b', text: 'Balloon mortgage', isCorrect: true },
      { id: 'c', text: 'Package mortgage', isCorrect: false },
      { id: 'd', text: 'Blanket mortgage', isCorrect: false },
    ],
    explanation:
      'A balloon mortgage requires a large lump-sum payment at the end of the loan term. The borrower typically makes smaller periodic payments (often interest-only) and must pay off or refinance the remaining balance when the balloon payment comes due.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-004',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'Which mortgage clause allows the lender to demand full repayment of the loan balance if the property is sold or transferred?',
    options: [
      { id: 'a', text: 'Subordination clause', isCorrect: false },
      { id: 'b', text: 'Defeasance clause', isCorrect: false },
      { id: 'c', text: 'Due-on-sale clause (alienation clause)', isCorrect: true },
      { id: 'd', text: 'Escalation clause', isCorrect: false },
    ],
    explanation:
      'The due-on-sale clause, also called the alienation clause, gives the lender the right to call the entire loan balance due and payable when the borrower sells or transfers ownership. This prevents loan assumption without lender approval.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-005',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'A reverse mortgage is designed primarily for:',
    options: [
      { id: 'a', text: 'First-time homebuyers with limited savings', isCorrect: false },
      { id: 'b', text: 'Investors purchasing rental property', isCorrect: false },
      { id: 'c', text: 'Homeowners aged 62 or older who want to access home equity', isCorrect: true },
      { id: 'd', text: 'Borrowers with excellent credit seeking lower rates', isCorrect: false },
    ],
    explanation:
      'A Home Equity Conversion Mortgage (HECM), the most common reverse mortgage, is available to homeowners aged 62 or older. It allows them to convert home equity into cash without making monthly payments. The loan becomes due when the borrower sells, moves out, or passes away.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-006',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of loan covers more than one parcel of real estate and typically includes a partial release clause?',
    options: [
      { id: 'a', text: 'Package mortgage', isCorrect: false },
      { id: 'b', text: 'Wraparound mortgage', isCorrect: false },
      { id: 'c', text: 'Blanket mortgage', isCorrect: true },
      { id: 'd', text: 'Construction loan', isCorrect: false },
    ],
    explanation:
      'A blanket mortgage covers multiple properties under a single loan. It commonly includes a partial release clause, which allows individual parcels to be released from the lien as portions of the loan are repaid. Developers often use blanket mortgages when subdividing land.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-007',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'A purchase money mortgage is one in which:',
    options: [
      { id: 'a', text: 'The buyer obtains financing from the FHA', isCorrect: false },
      { id: 'b', text: 'The seller finances all or part of the purchase price', isCorrect: true },
      { id: 'c', text: 'The lender provides 100% financing with no down payment', isCorrect: false },
      { id: 'd', text: 'The borrower pledges personal property as additional collateral', isCorrect: false },
    ],
    explanation:
      'A purchase money mortgage is seller financing where the seller acts as the lender, carrying back a note secured by the property. This can be the primary loan or a secondary loan to bridge the gap between the buyer\'s down payment and the first mortgage.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-008',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'The difference between the mortgage theory and the lien theory of mortgages is that under the lien theory:',
    options: [
      { id: 'a', text: 'Title to the property is transferred to the lender until the loan is paid', isCorrect: false },
      { id: 'b', text: 'The borrower retains title while the lender holds a lien against the property', isCorrect: true },
      { id: 'c', text: 'The property must be sold at foreclosure without judicial proceedings', isCorrect: false },
      { id: 'd', text: 'The lender has immediate right of possession upon default', isCorrect: false },
    ],
    explanation:
      'Virginia is a lien theory state. Under lien theory, the borrower retains both legal and equitable title to the property, while the lender holds a lien as security. In title theory states, the lender holds legal title until the debt is satisfied.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-009',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'An ARM has a 2/6 rate cap structure. If the initial rate is 4%, what is the maximum rate the loan could ever reach?',
    options: [
      { id: 'a', text: '6%', isCorrect: false },
      { id: 'b', text: '8%', isCorrect: false },
      { id: 'c', text: '10%', isCorrect: true },
      { id: 'd', text: '12%', isCorrect: false },
    ],
    explanation:
      'In a 2/6 cap structure, the first number (2) is the periodic adjustment cap per period, and the second number (6) is the lifetime cap. The maximum rate is the initial rate plus the lifetime cap: 4% + 6% = 10%. The rate can never exceed 10% regardless of how high the index rises.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
  {
    id: 'q-mortgage-010',
    chapterId: 'mortgage-types-terms',
    quizType: 'chapter_quiz',
    questionText:
      'A wraparound mortgage is BEST described as a loan that:',
    options: [
      { id: 'a', text: 'Replaces an existing first mortgage with a new one at a lower rate', isCorrect: false },
      { id: 'b', text: 'Encompasses an existing mortgage while creating a new, larger loan at a higher rate', isCorrect: true },
      { id: 'c', text: 'Is insured by the Federal Housing Administration', isCorrect: false },
      { id: 'd', text: 'Requires the borrower to make payments directly to the original lender', isCorrect: false },
    ],
    explanation:
      'A wraparound mortgage is a form of seller financing where the new loan wraps around the existing mortgage. The seller continues paying the original loan while the buyer makes payments on the larger wraparound amount at a higher interest rate. The seller profits from the interest rate differential.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
]

// ── Chapter: loan-process-qualification (10 questions) ───────────────────────

const loanProcessQuestions: QuizQuestion[] = [
  {
    id: 'q-loanproc-001',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'Under federal law, the lender is required to provide the borrower with a Loan Estimate within how many business days of receiving a loan application?',
    options: [
      { id: 'a', text: '1 business day', isCorrect: false },
      { id: 'b', text: '3 business days', isCorrect: true },
      { id: 'c', text: '5 business days', isCorrect: false },
      { id: 'd', text: '7 business days', isCorrect: false },
    ],
    explanation:
      'Under the TILA-RESPA Integrated Disclosure (TRID) rules, lenders must provide a Loan Estimate within 3 business days of receiving a completed loan application. This replaced the former Good Faith Estimate and initial Truth-in-Lending disclosure.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-002',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'The debt-to-income (DTI) ratio is calculated by dividing a borrower\'s:',
    options: [
      { id: 'a', text: 'Total assets by total liabilities', isCorrect: false },
      { id: 'b', text: 'Monthly debt payments by gross monthly income', isCorrect: true },
      { id: 'c', text: 'Annual income by the loan amount', isCorrect: false },
      { id: 'd', text: 'Net worth by the property value', isCorrect: false },
    ],
    explanation:
      'The DTI ratio compares the borrower\'s total monthly debt obligations (including the proposed mortgage payment) to their gross monthly income. Conventional loans typically require a DTI of 43% or less, though some programs allow higher ratios with compensating factors.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-003',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'A pre-approval letter differs from a pre-qualification letter because a pre-approval:',
    options: [
      { id: 'a', text: 'Is based solely on the borrower\'s self-reported income', isCorrect: false },
      { id: 'b', text: 'Guarantees the loan will close', isCorrect: false },
      { id: 'c', text: 'Involves verification of credit, income, and assets by the lender', isCorrect: true },
      { id: 'd', text: 'Does not require a credit check', isCorrect: false },
    ],
    explanation:
      'A pre-approval involves the lender actually verifying the borrower\'s financial information, including pulling credit reports, verifying income, and reviewing assets. A pre-qualification is typically a less rigorous assessment based on self-reported data.',
    difficulty: 'easy',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-004',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'Which federal law prohibits discrimination in lending based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance?',
    options: [
      { id: 'a', text: 'Fair Housing Act', isCorrect: false },
      { id: 'b', text: 'Equal Credit Opportunity Act (ECOA)', isCorrect: true },
      { id: 'c', text: 'Community Reinvestment Act', isCorrect: false },
      { id: 'd', text: 'Home Mortgage Disclosure Act', isCorrect: false },
    ],
    explanation:
      'The Equal Credit Opportunity Act (ECOA), implemented through Regulation B, prohibits lenders from discriminating against credit applicants based on protected classes. While the Fair Housing Act also prohibits discrimination, ECOA specifically applies to lending and includes additional protected classes like age and public assistance.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-005',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'The Closing Disclosure must be delivered to the borrower at least how many business days before closing?',
    options: [
      { id: 'a', text: '1 business day', isCorrect: false },
      { id: 'b', text: '3 business days', isCorrect: true },
      { id: 'c', text: '5 business days', isCorrect: false },
      { id: 'd', text: '7 business days', isCorrect: false },
    ],
    explanation:
      'Under TRID rules, the Closing Disclosure must be delivered at least 3 business days before the consummation (closing) of the loan. If there are significant changes to the loan terms, a new Closing Disclosure may be required, which restarts the 3-day waiting period.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-006',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'Private mortgage insurance (PMI) is typically required when the borrower\'s down payment is less than:',
    options: [
      { id: 'a', text: '10% of the purchase price', isCorrect: false },
      { id: 'b', text: '15% of the purchase price', isCorrect: false },
      { id: 'c', text: '20% of the purchase price', isCorrect: true },
      { id: 'd', text: '25% of the purchase price', isCorrect: false },
    ],
    explanation:
      'Conventional lenders require PMI when the loan-to-value ratio exceeds 80%, meaning the borrower puts down less than 20%. PMI protects the lender against borrower default. Under the Homeowners Protection Act, PMI must be automatically terminated when the LTV reaches 78%.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-007',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'FHA loans differ from conventional loans primarily because FHA loans are:',
    options: [
      { id: 'a', text: 'Made directly by the federal government', isCorrect: false },
      { id: 'b', text: 'Insured by the Federal Housing Administration against borrower default', isCorrect: true },
      { id: 'c', text: 'Available only to veterans and active-duty military', isCorrect: false },
      { id: 'd', text: 'Limited to properties valued under $100,000', isCorrect: false },
    ],
    explanation:
      'FHA does not make loans directly; it insures loans made by approved lenders. If a borrower defaults, the FHA pays the lender\'s claim. This insurance allows lenders to offer more favorable terms, including lower down payments and more flexible credit requirements.',
    difficulty: 'medium',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-008',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'A borrower earns $7,500 per month gross income and has monthly debts of $800. If the lender requires a maximum 43% back-end DTI, what is the maximum total monthly payment (including the new mortgage) the borrower can qualify for?',
    options: [
      { id: 'a', text: '$2,425', isCorrect: false },
      { id: 'b', text: '$3,225', isCorrect: false },
      { id: 'c', text: '$2,425 for the mortgage alone', isCorrect: true },
      { id: 'd', text: '$3,750', isCorrect: false },
    ],
    explanation:
      'The back-end DTI includes all monthly debts plus the new mortgage. Maximum total debt allowed: $7,500 x 0.43 = $3,225. Subtract existing debts of $800, leaving $2,425 as the maximum allowable mortgage payment (PITI). This is a common PSI exam calculation.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-009',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following would trigger a new 3-day waiting period for the Closing Disclosure under TRID?',
    options: [
      { id: 'a', text: 'A minor change to the seller\'s closing costs', isCorrect: false },
      { id: 'b', text: 'An increase in the APR by more than 1/8 of a percent for a fixed-rate loan', isCorrect: true },
      { id: 'c', text: 'A change in the closing date', isCorrect: false },
      { id: 'd', text: 'A correction to the borrower\'s mailing address', isCorrect: false },
    ],
    explanation:
      'Under TRID, a new 3-day waiting period is triggered if the APR increases by more than 1/8% for fixed-rate loans (or 1/4% for adjustable-rate loans), the loan product changes, or a prepayment penalty is added. Minor clerical changes do not reset the waiting period.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
  {
    id: 'q-loanproc-010',
    chapterId: 'loan-process-qualification',
    quizType: 'chapter_quiz',
    questionText:
      'The process by which a lender sells mortgages to investors on Wall Street, often through mortgage-backed securities, is known as:',
    options: [
      { id: 'a', text: 'Hypothecation', isCorrect: false },
      { id: 'b', text: 'Disintermediation', isCorrect: false },
      { id: 'c', text: 'Securitization', isCorrect: true },
      { id: 'd', text: 'Novation', isCorrect: false },
    ],
    explanation:
      'Securitization is the process of pooling mortgage loans and selling them as mortgage-backed securities to investors in the secondary market. This replenishes the lender\'s funds so they can make new loans. Entities like Fannie Mae, Freddie Mac, and Ginnie Mae facilitate this process.',
    difficulty: 'hard',
    topicTag: 'finance',
  },
]

// ── Chapter: appraisal-methods (10 questions) ────────────────────────────────

const appraisalMethodsQuestions: QuizQuestion[] = [
  {
    id: 'q-appraisal-001',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'Which appraisal approach is most commonly used to value single-family residential properties?',
    options: [
      { id: 'a', text: 'Income capitalization approach', isCorrect: false },
      { id: 'b', text: 'Cost approach', isCorrect: false },
      { id: 'c', text: 'Sales comparison approach', isCorrect: true },
      { id: 'd', text: 'Gross rent multiplier approach', isCorrect: false },
    ],
    explanation:
      'The sales comparison approach (also called the market data approach) is the most reliable method for valuing residential properties because it reflects what buyers are actually paying for similar homes. The appraiser compares the subject property to recently sold comparable properties and makes adjustments for differences.',
    difficulty: 'easy',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-002',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'When using the sales comparison approach, adjustments are always made to the:',
    options: [
      { id: 'a', text: 'Subject property', isCorrect: false },
      { id: 'b', text: 'Comparable properties', isCorrect: true },
      { id: 'c', text: 'Both the subject and comparable properties equally', isCorrect: false },
      { id: 'd', text: 'Listing price of the subject property', isCorrect: false },
    ],
    explanation:
      'In the sales comparison approach, adjustments are always made to the comparable (comp) properties, never to the subject. If a comp has a feature the subject lacks, the appraiser subtracts value from the comp. If the subject has a feature the comp lacks, the appraiser adds value to the comp.',
    difficulty: 'easy',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-003',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'The principle of substitution states that a buyer will pay no more for a property than:',
    options: [
      { id: 'a', text: 'The appraised value', isCorrect: false },
      { id: 'b', text: 'The cost to acquire an equally desirable substitute property', isCorrect: true },
      { id: 'c', text: 'The original cost of construction', isCorrect: false },
      { id: 'd', text: 'The assessed value for tax purposes', isCorrect: false },
    ],
    explanation:
      'The principle of substitution is the foundation of all three appraisal approaches. It holds that a prudent buyer will pay no more for a property than the cost of acquiring an equivalent substitute. This principle drives market pricing and is the basis for the sales comparison approach.',
    difficulty: 'easy',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-004',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'In the cost approach to value, the formula is:',
    options: [
      { id: 'a', text: 'Land value + reproduction cost - depreciation', isCorrect: true },
      { id: 'b', text: 'Net operating income / capitalization rate', isCorrect: false },
      { id: 'c', text: 'Gross rent x gross rent multiplier', isCorrect: false },
      { id: 'd', text: 'Assessed value + market adjustments', isCorrect: false },
    ],
    explanation:
      'The cost approach formula is: Land value + Cost new of improvements (reproduction or replacement) - Accrued depreciation = Property value. Land is never depreciated because it does not wear out. This approach is most useful for new construction and special-purpose properties.',
    difficulty: 'medium',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-005',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'The loss of value from any cause is known as:',
    options: [
      { id: 'a', text: 'Obsolescence', isCorrect: false },
      { id: 'b', text: 'Deterioration', isCorrect: false },
      { id: 'c', text: 'Depreciation', isCorrect: true },
      { id: 'd', text: 'Depletion', isCorrect: false },
    ],
    explanation:
      'Depreciation is the general term for any loss of value from any cause. It includes three types: physical deterioration (wear and tear), functional obsolescence (outdated design or features), and external/economic obsolescence (factors outside the property). Only depreciation encompasses all three.',
    difficulty: 'medium',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-006',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'A property near a busy highway loses value due to traffic noise. This is an example of:',
    options: [
      { id: 'a', text: 'Physical deterioration', isCorrect: false },
      { id: 'b', text: 'Functional obsolescence', isCorrect: false },
      { id: 'c', text: 'External (economic) obsolescence', isCorrect: true },
      { id: 'd', text: 'Curable depreciation', isCorrect: false },
    ],
    explanation:
      'External (economic) obsolescence is caused by factors outside the property itself, such as traffic noise, proximity to undesirable land uses, or economic downturns in the area. External obsolescence is always incurable because the property owner cannot control or fix external conditions.',
    difficulty: 'medium',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-007',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'The income capitalization approach determines value by dividing the net operating income (NOI) by the:',
    options: [
      { id: 'a', text: 'Gross rent multiplier', isCorrect: false },
      { id: 'b', text: 'Mortgage interest rate', isCorrect: false },
      { id: 'c', text: 'Capitalization rate', isCorrect: true },
      { id: 'd', text: 'Vacancy rate', isCorrect: false },
    ],
    explanation:
      'The income approach formula is: Value = NOI / Cap Rate. The capitalization rate represents the investor\'s expected rate of return. A lower cap rate indicates lower risk and higher value, while a higher cap rate indicates higher risk and lower value.',
    difficulty: 'medium',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-008',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'A home with only one bathroom in a neighborhood where all comparable homes have two bathrooms suffers from:',
    options: [
      { id: 'a', text: 'Physical deterioration', isCorrect: false },
      { id: 'b', text: 'External obsolescence', isCorrect: false },
      { id: 'c', text: 'Functional obsolescence', isCorrect: true },
      { id: 'd', text: 'Regression', isCorrect: false },
    ],
    explanation:
      'Functional obsolescence results from deficiencies or superadequacies within the property itself. Having fewer bathrooms than market standards is a deficiency that makes the home less desirable. If the cost to add a bathroom is less than the value it would add, the obsolescence is curable.',
    difficulty: 'hard',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-009',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'An investment property generates $120,000 in annual gross income, has a 5% vacancy rate, and $42,000 in annual operating expenses. Using a cap rate of 8%, what is the estimated value?',
    options: [
      { id: 'a', text: '$862,500', isCorrect: false },
      { id: 'b', text: '$900,000', isCorrect: true },
      { id: 'c', text: '$975,000', isCorrect: false },
      { id: 'd', text: '$1,500,000', isCorrect: false },
    ],
    explanation:
      'First calculate effective gross income: $120,000 - ($120,000 x 0.05) = $114,000. Then subtract operating expenses: $114,000 - $42,000 = $72,000 NOI. Finally, divide NOI by cap rate: $72,000 / 0.08 = $900,000. This is a standard income approach calculation tested on the PSI exam.',
    difficulty: 'hard',
    topicTag: 'valuation',
  },
  {
    id: 'q-appraisal-010',
    chapterId: 'appraisal-methods',
    quizType: 'chapter_quiz',
    questionText:
      'The difference between reproduction cost and replacement cost is that reproduction cost:',
    options: [
      { id: 'a', text: 'Uses modern materials and current building standards', isCorrect: false },
      { id: 'b', text: 'Creates an exact replica using the same materials and construction methods', isCorrect: true },
      { id: 'c', text: 'Is always less expensive than replacement cost', isCorrect: false },
      { id: 'd', text: 'Accounts for depreciation while replacement cost does not', isCorrect: false },
    ],
    explanation:
      'Reproduction cost is the cost to build an exact duplicate of the property using the same materials, design, and construction methods. Replacement cost is the cost to build a property of equal utility using modern materials and current standards. Replacement cost is more commonly used because it avoids replicating outdated features.',
    difficulty: 'hard',
    topicTag: 'valuation',
  },
]

// ── Chapter: real-estate-math-calculations (10 questions) ────────────────────

const mathCalculationsQuestions: QuizQuestion[] = [
  {
    id: 'q-remath-001',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A property sold for $350,000. The listing broker receives 3% and the selling broker receives 3%. How much commission does the listing broker receive?',
    options: [
      { id: 'a', text: '$7,000', isCorrect: false },
      { id: 'b', text: '$10,500', isCorrect: true },
      { id: 'c', text: '$17,500', isCorrect: false },
      { id: 'd', text: '$21,000', isCorrect: false },
    ],
    explanation:
      'The listing broker receives 3% of the $350,000 sale price: $350,000 x 0.03 = $10,500. The total commission is 6% ($21,000), split equally between listing and selling brokers. Individual agents then split their share with their respective brokers per their agreements.',
    difficulty: 'easy',
    topicTag: 'math',
  },
  {
    id: 'q-remath-002',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A rectangular lot measures 150 feet by 200 feet. How many acres does it contain? (1 acre = 43,560 sq ft)',
    options: [
      { id: 'a', text: '0.50 acres', isCorrect: false },
      { id: 'b', text: '0.69 acres', isCorrect: true },
      { id: 'c', text: '0.75 acres', isCorrect: false },
      { id: 'd', text: '1.00 acres', isCorrect: false },
    ],
    explanation:
      'First calculate square footage: 150 x 200 = 30,000 sq ft. Then convert to acres: 30,000 / 43,560 = 0.689 acres, which rounds to 0.69 acres. Knowing that one acre equals 43,560 square feet is essential for the Virginia PSI exam.',
    difficulty: 'easy',
    topicTag: 'math',
  },
  {
    id: 'q-remath-003',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'If property taxes are $4,800 per year and closing occurs on September 1, how much does the seller owe the buyer for prorated taxes (using a 360-day year, January 1 start)?',
    options: [
      { id: 'a', text: '$2,400', isCorrect: false },
      { id: 'b', text: '$2,667', isCorrect: false },
      { id: 'c', text: '$3,200', isCorrect: true },
      { id: 'd', text: '$3,600', isCorrect: false },
    ],
    explanation:
      'The seller owned the property from January 1 through August 31, which is 8 months. Monthly tax: $4,800 / 12 = $400. Seller owes: $400 x 8 months = $3,200. The seller is responsible for taxes during the period of ownership and provides a credit to the buyer at closing.',
    difficulty: 'easy',
    topicTag: 'math',
  },
  {
    id: 'q-remath-004',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A property has an assessed value of $280,000. The local tax rate is $1.15 per $100 of assessed value. What are the annual property taxes?',
    options: [
      { id: 'a', text: '$2,800', isCorrect: false },
      { id: 'b', text: '$3,220', isCorrect: true },
      { id: 'c', text: '$3,500', isCorrect: false },
      { id: 'd', text: '$32,200', isCorrect: false },
    ],
    explanation:
      'Tax formula: Assessed value / $100 x tax rate = annual taxes. $280,000 / 100 = 2,800 units. 2,800 x $1.15 = $3,220 annual taxes. Virginia commonly expresses tax rates per $100 of assessed value, and this calculation appears frequently on the PSI exam.',
    difficulty: 'medium',
    topicTag: 'math',
  },
  {
    id: 'q-remath-005',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'An agent receives 60% of the commission earned by the brokerage. If the property sold for $425,000 and the brokerage earned a 3% commission, how much did the agent receive?',
    options: [
      { id: 'a', text: '$7,650', isCorrect: true },
      { id: 'b', text: '$5,100', isCorrect: false },
      { id: 'c', text: '$12,750', isCorrect: false },
      { id: 'd', text: '$15,300', isCorrect: false },
    ],
    explanation:
      'Brokerage commission: $425,000 x 0.03 = $12,750. Agent\'s share: $12,750 x 0.60 = $7,650. Commission splits between broker and agent are separate from the commission split between listing and selling sides. Always work through multi-step commission problems in order.',
    difficulty: 'medium',
    topicTag: 'math',
  },
  {
    id: 'q-remath-006',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A buyer puts 10% down on a $320,000 home and obtains a loan at 6.5% annual interest. What is the first month\'s interest payment?',
    options: [
      { id: 'a', text: '$1,560', isCorrect: true },
      { id: 'b', text: '$1,733', isCorrect: false },
      { id: 'c', text: '$2,080', isCorrect: false },
      { id: 'd', text: '$1,440', isCorrect: false },
    ],
    explanation:
      'Down payment: $320,000 x 0.10 = $32,000. Loan amount: $320,000 - $32,000 = $288,000. Annual interest: $288,000 x 0.065 = $18,720. Monthly interest: $18,720 / 12 = $1,560. The first month\'s payment on an amortized loan is almost entirely interest.',
    difficulty: 'medium',
    topicTag: 'math',
  },
  {
    id: 'q-remath-007',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A seller wants to net $300,000 after paying a 6% commission and $5,000 in closing costs. What must the minimum sale price be?',
    options: [
      { id: 'a', text: '$318,000', isCorrect: false },
      { id: 'b', text: '$323,000', isCorrect: false },
      { id: 'c', text: '$324,468', isCorrect: true },
      { id: 'd', text: '$330,000', isCorrect: false },
    ],
    explanation:
      'The seller\'s net equals the sale price minus commission and costs. Let P = sale price. P - 0.06P - $5,000 = $300,000. So 0.94P = $305,000. P = $305,000 / 0.94 = $324,468.09. You cannot simply add 6% to $305,000 because the commission is based on the sale price, not the net.',
    difficulty: 'hard',
    topicTag: 'math',
  },
  {
    id: 'q-remath-008',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A property purchased for $250,000 appreciated 4% per year for 3 years (compounded annually). What is its current value?',
    options: [
      { id: 'a', text: '$280,000', isCorrect: false },
      { id: 'b', text: '$281,216', isCorrect: true },
      { id: 'c', text: '$282,000', isCorrect: false },
      { id: 'd', text: '$290,000', isCorrect: false },
    ],
    explanation:
      'Compound appreciation: $250,000 x 1.04 x 1.04 x 1.04 = $250,000 x 1.124864 = $281,216. Simple appreciation would be $250,000 + ($10,000 x 3) = $280,000, but compound growth means each year\'s growth builds on the previous year\'s total. The exam tests this distinction.',
    difficulty: 'hard',
    topicTag: 'math',
  },
  {
    id: 'q-remath-009',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'A property generates $2,400/month in rent. The owner pays $8,400/year in operating expenses. Using a 9% cap rate, what is the property value?',
    options: [
      { id: 'a', text: '$213,333', isCorrect: false },
      { id: 'b', text: '$226,667', isCorrect: true },
      { id: 'c', text: '$320,000', isCorrect: false },
      { id: 'd', text: '$186,667', isCorrect: false },
    ],
    explanation:
      'Annual gross income: $2,400 x 12 = $28,800. NOI: $28,800 - $8,400 = $20,400. Value = NOI / cap rate = $20,400 / 0.09 = $226,667. Remember to always convert monthly figures to annual before applying the cap rate formula.',
    difficulty: 'hard',
    topicTag: 'math',
  },
  {
    id: 'q-remath-010',
    chapterId: 'real-estate-math-calculations',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the grantor\'s tax on real estate transfers is:',
    options: [
      { id: 'a', text: '$0.50 per $500 of sale price', isCorrect: false },
      { id: 'b', text: '$1.00 per $1,000 of sale price', isCorrect: false },
      { id: 'c', text: '$2.50 per $1,000 of sale price (or $0.25 per $100)', isCorrect: true },
      { id: 'd', text: '$5.00 per $1,000 of sale price', isCorrect: false },
    ],
    explanation:
      'Virginia\'s state grantor\'s tax is $2.50 per $1,000 of the sale price (equivalent to $0.25 per $100 or $0.0025 per dollar). Some Virginia localities impose an additional regional grantor\'s tax. This is a Virginia-specific calculation frequently tested on the state portion of the exam.',
    difficulty: 'medium',
    topicTag: 'math',
  },
]

// ── Module 5: Practice & Ethics ──────────────────────────────────────────────

// ── Chapter: practice-of-real-estate (10 questions) ──────────────────────────

const practiceQuestions: QuizQuestion[] = [
  {
    id: 'q-practice-001',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, a licensee who represents a buyer in a transaction is known as a:',
    options: [
      { id: 'a', text: 'Subagent', isCorrect: false },
      { id: 'b', text: 'Buyer\'s agent', isCorrect: true },
      { id: 'c', text: 'Transaction broker', isCorrect: false },
      { id: 'd', text: 'Dual agent', isCorrect: false },
    ],
    explanation:
      'A buyer\'s agent represents the buyer\'s interests in the transaction. Virginia law requires that all agency relationships be disclosed to all parties. The buyer\'s agent owes fiduciary duties to the buyer, including loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care.',
    difficulty: 'easy',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-002',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'Which fiduciary duty requires an agent to act in the best interest of the client, even if it conflicts with the agent\'s own interest?',
    options: [
      { id: 'a', text: 'Disclosure', isCorrect: false },
      { id: 'b', text: 'Obedience', isCorrect: false },
      { id: 'c', text: 'Loyalty', isCorrect: true },
      { id: 'd', text: 'Accounting', isCorrect: false },
    ],
    explanation:
      'Loyalty is the fiduciary duty that requires the agent to place the client\'s interests above all others, including the agent\'s own interests. An agent must never use the client relationship for personal gain or advantage. This is considered the highest fiduciary obligation.',
    difficulty: 'easy',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-003',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'A listing agreement is a contract between:',
    options: [
      { id: 'a', text: 'The seller and the buyer', isCorrect: false },
      { id: 'b', text: 'The seller and the listing agent personally', isCorrect: false },
      { id: 'c', text: 'The seller and the listing broker', isCorrect: true },
      { id: 'd', text: 'The buyer and the selling broker', isCorrect: false },
    ],
    explanation:
      'A listing agreement is always between the property owner (seller) and the broker, not the individual agent. The agent acts under the broker\'s authority. In Virginia, all commissions must be paid to the broker, who then compensates the agent according to their separate agreement.',
    difficulty: 'easy',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-004',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'Dual agency occurs when:',
    options: [
      { id: 'a', text: 'Two agents from different brokerages represent the buyer and seller', isCorrect: false },
      { id: 'b', text: 'One agent represents both the buyer and seller in the same transaction with informed consent', isCorrect: true },
      { id: 'c', text: 'A broker manages a property management company and a sales office', isCorrect: false },
      { id: 'd', text: 'An agent refers a client to another agent within the same brokerage', isCorrect: false },
    ],
    explanation:
      'Dual agency exists when one licensee (or one brokerage) represents both the buyer and seller in the same transaction. In Virginia, dual agency is legal but requires informed, written consent from both parties. The dual agent cannot advocate for either party over the other.',
    difficulty: 'medium',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-005',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'An exclusive right-to-sell listing differs from an exclusive agency listing in that:',
    options: [
      { id: 'a', text: 'Only the exclusive right-to-sell can be listed on the MLS', isCorrect: false },
      { id: 'b', text: 'The broker earns a commission regardless of who finds the buyer under an exclusive right-to-sell', isCorrect: true },
      { id: 'c', text: 'An exclusive agency listing allows multiple brokers to list the property', isCorrect: false },
      { id: 'd', text: 'There is no practical difference between the two types', isCorrect: false },
    ],
    explanation:
      'Under an exclusive right-to-sell listing, the broker receives a commission no matter who sells the property, even if the seller finds the buyer without the broker\'s help. Under an exclusive agency listing, the seller retains the right to sell independently without owing a commission.',
    difficulty: 'medium',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-006',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'Earnest money deposits in Virginia must be deposited into:',
    options: [
      { id: 'a', text: 'The listing agent\'s personal bank account', isCorrect: false },
      { id: 'b', text: 'The seller\'s bank account within 24 hours', isCorrect: false },
      { id: 'c', text: 'An escrow or trust account maintained by the broker', isCorrect: true },
      { id: 'd', text: 'A joint account held by both brokers', isCorrect: false },
    ],
    explanation:
      'Virginia law requires that earnest money deposits be placed in an escrow or trust account maintained by the broker (or the settlement agent if specified in the contract). The broker must deposit the funds by the end of the fifth business day following ratification of the contract.',
    difficulty: 'medium',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-007',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'Commingling refers to:',
    options: [
      { id: 'a', text: 'Mixing personal funds with client funds in an escrow account', isCorrect: true },
      { id: 'b', text: 'Representing both parties in a real estate transaction', isCorrect: false },
      { id: 'c', text: 'Failing to disclose a material defect', isCorrect: false },
      { id: 'd', text: 'Advertising without the broker\'s consent', isCorrect: false },
    ],
    explanation:
      'Commingling is the illegal practice of mixing personal or business funds with client escrow funds. Conversion, a related violation, is using client escrow funds for personal purposes. Both are serious violations that can result in license revocation and criminal prosecution in Virginia.',
    difficulty: 'medium',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-008',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'A licensee discovers that a competing agent is offering rebates to buyers at closing. In Virginia, this practice is:',
    options: [
      { id: 'a', text: 'Always illegal under Virginia real estate law', isCorrect: false },
      { id: 'b', text: 'Legal as long as it is disclosed to all parties in the transaction', isCorrect: true },
      { id: 'c', text: 'Legal only if approved by the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'Only permitted for brokers, not salespersons', isCorrect: false },
    ],
    explanation:
      'Virginia does not prohibit commission rebates to buyers. However, the rebate must be disclosed to all parties in the transaction and reflected on the closing statement. The lender must also be notified because rebates can affect the buyer\'s loan terms.',
    difficulty: 'hard',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-009',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'A broker receives two offers on the same property simultaneously. The broker should:',
    options: [
      { id: 'a', text: 'Present only the highest offer to the seller', isCorrect: false },
      { id: 'b', text: 'Present both offers to the seller promptly', isCorrect: true },
      { id: 'c', text: 'Reject the lower offer and present only the strongest', isCorrect: false },
      { id: 'd', text: 'Wait 24 hours before presenting either offer', isCorrect: false },
    ],
    explanation:
      'A listing agent has a fiduciary duty to present all offers to the seller promptly, regardless of the offer amount or terms. The decision to accept, reject, or counter any offer belongs solely to the seller. Withholding or delaying offers is a violation of fiduciary duty.',
    difficulty: 'hard',
    topicTag: 'practice',
  },
  {
    id: 'q-practice-010',
    chapterId: 'practice-of-real-estate',
    quizType: 'chapter_quiz',
    questionText:
      'A designated agent arrangement in Virginia means that:',
    options: [
      { id: 'a', text: 'One agent handles all transactions for a particular zip code', isCorrect: false },
      { id: 'b', text: 'The broker assigns separate agents within the firm to represent the buyer and seller in the same transaction', isCorrect: true },
      { id: 'c', text: 'The state assigns a government agent to oversee the transaction', isCorrect: false },
      { id: 'd', text: 'An agent from another state is designated to assist with the closing', isCorrect: false },
    ],
    explanation:
      'Virginia permits designated agency, where the broker designates one agent in the firm to represent the seller and a different agent in the same firm to represent the buyer. This avoids full dual agency while allowing agents in the same brokerage to work both sides of a deal.',
    difficulty: 'hard',
    topicTag: 'practice',
  },
]

// ── Chapter: property-disclosures (10 questions) ─────────────────────────────

const disclosuresQuestions: QuizQuestion[] = [
  {
    id: 'q-discl-001',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the Residential Property Disclosure Act requires the seller to provide the buyer with:',
    options: [
      { id: 'a', text: 'A comprehensive home inspection report', isCorrect: false },
      { id: 'b', text: 'A disclosure statement covering known material defects and property conditions', isCorrect: true },
      { id: 'c', text: 'An appraisal report from a licensed appraiser', isCorrect: false },
      { id: 'd', text: 'A termite inspection certificate', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Residential Property Disclosure Act requires sellers of residential property to provide a disclosure statement about known conditions of the property. The seller must disclose known defects but is not required to conduct inspections. The buyer receives the disclosure before or at contract ratification.',
    difficulty: 'easy',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-002',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'Federal law requires disclosure of known lead-based paint hazards for homes built before:',
    options: [
      { id: 'a', text: '1960', isCorrect: false },
      { id: 'b', text: '1972', isCorrect: false },
      { id: 'c', text: '1978', isCorrect: true },
      { id: 'd', text: '1986', isCorrect: false },
    ],
    explanation:
      'The Residential Lead-Based Paint Hazard Reduction Act of 1992 requires sellers and landlords of homes built before 1978 to disclose known lead-based paint hazards. Buyers must receive an EPA pamphlet and have a 10-day opportunity to conduct a lead paint inspection.',
    difficulty: 'easy',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-003',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia seller opts out of providing the disclosure form by checking the "owner makes no representations" option. This means:',
    options: [
      { id: 'a', text: 'The seller has no obligation to disclose anything', isCorrect: false },
      { id: 'b', text: 'The buyer must waive their right to a home inspection', isCorrect: false },
      { id: 'c', text: 'The buyer may void the contract within a specified period after receiving the disclaimer', isCorrect: true },
      { id: 'd', text: 'The seller is automatically liable for any undisclosed defects', isCorrect: false },
    ],
    explanation:
      'Virginia allows sellers to opt out of disclosures by providing a disclaimer statement. However, the buyer then receives the right to void the contract within a specified period (typically 3 days) after receiving the disclaimer. Even with a disclaimer, the seller cannot conceal known material defects.',
    difficulty: 'easy',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-004',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is classified as a material fact that MUST be disclosed by an agent in Virginia?',
    options: [
      { id: 'a', text: 'A previous owner died of natural causes in the home', isCorrect: false },
      { id: 'b', text: 'The property is located in a flood zone', isCorrect: true },
      { id: 'c', text: 'The neighbors have a history of loud parties', isCorrect: false },
      { id: 'd', text: 'A sex offender lives in the neighborhood', isCorrect: false },
    ],
    explanation:
      'Flood zone location is a material fact that affects the property\'s value, insurability, and use. Virginia law specifically exempts agents from disclosing that a property was the site of a death, suicide, or felony. Sex offender information is available through public registries and is not a required disclosure.',
    difficulty: 'medium',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-005',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia\'s "caveat emptor" modification, a seller who provides the property disclosure statement is:',
    options: [
      { id: 'a', text: 'Guaranteeing the property is free from defects', isCorrect: false },
      { id: 'b', text: 'Disclosing only what they actually know about the property\'s condition', isCorrect: true },
      { id: 'c', text: 'Required to hire a professional inspector before listing', isCorrect: false },
      { id: 'd', text: 'Liable for any defects found after closing regardless of knowledge', isCorrect: false },
    ],
    explanation:
      'Virginia\'s disclosure law requires sellers to disclose what they know or should reasonably know about the property\'s condition. It does not require the seller to inspect the property or guarantee its condition. The disclosure is not a warranty, and buyers should still conduct their own inspections.',
    difficulty: 'medium',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-006',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'A property was previously used as a methamphetamine lab. In Virginia, the agent:',
    options: [
      { id: 'a', text: 'Has no obligation to disclose this information', isCorrect: false },
      { id: 'b', text: 'Must disclose this if they have actual knowledge of it', isCorrect: true },
      { id: 'c', text: 'Should only disclose upon direct questioning by the buyer', isCorrect: false },
      { id: 'd', text: 'Can never disclose this due to privacy laws', isCorrect: false },
    ],
    explanation:
      'Drug manufacturing contamination is a material defect affecting the property\'s habitability, value, and potential health hazards. If the agent has actual knowledge of prior drug manufacturing on the property, this must be disclosed. Virginia requires disclosure of known conditions that may affect health or safety.',
    difficulty: 'medium',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-007',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Residential Property Disclosure Act applies to the sale of:',
    options: [
      { id: 'a', text: 'All real property in Virginia', isCorrect: false },
      { id: 'b', text: 'Residential properties containing 1 to 4 dwelling units', isCorrect: true },
      { id: 'c', text: 'Only single-family detached homes', isCorrect: false },
      { id: 'd', text: 'Only new construction homes', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Residential Property Disclosure Act applies to residential real property improved with 1 to 4 dwelling units. Certain transactions are exempt, including foreclosure sales, new construction sold by a builder, and transfers between co-owners or family members.',
    difficulty: 'medium',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-008',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'If an agent discovers a material defect that the seller has not disclosed, the agent should:',
    options: [
      { id: 'a', text: 'Ignore the defect if the seller instructs them to remain silent', isCorrect: false },
      { id: 'b', text: 'Disclose the defect to prospective buyers regardless of the seller\'s wishes', isCorrect: true },
      { id: 'c', text: 'Withdraw from the listing without telling anyone', isCorrect: false },
      { id: 'd', text: 'Report the seller to the police', isCorrect: false },
    ],
    explanation:
      'An agent\'s duty to disclose known material defects to buyers overrides the seller\'s instructions to remain silent. If the seller refuses to allow disclosure, the agent should withdraw from the listing. Knowingly concealing material defects exposes the agent to liability and disciplinary action.',
    difficulty: 'hard',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-009',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following items is Virginia law specifically NOT required to be disclosed by a seller or agent?',
    options: [
      { id: 'a', text: 'A known defective septic system', isCorrect: false },
      { id: 'b', text: 'Known structural damage to the foundation', isCorrect: false },
      { id: 'c', text: 'That a homicide or suicide occurred on the property', isCorrect: true },
      { id: 'd', text: 'Known environmental contamination on the property', isCorrect: false },
    ],
    explanation:
      'Virginia Code 55.1-708 (formerly 55-519) provides that no seller or agent is required to disclose that the property was the site of a death, including a homicide, suicide, or other felony. This is sometimes called the "stigmatized property" protection.',
    difficulty: 'hard',
    topicTag: 'disclosures',
  },
  {
    id: 'q-discl-010',
    chapterId: 'property-disclosures',
    quizType: 'chapter_quiz',
    questionText:
      'Regarding mold disclosure in Virginia, an agent who has actual knowledge of a mold problem must:',
    options: [
      { id: 'a', text: 'Order a professional mold remediation before disclosure', isCorrect: false },
      { id: 'b', text: 'Disclose the mold issue to prospective buyers as a material adverse fact', isCorrect: true },
      { id: 'c', text: 'Recommend that the buyer waive the inspection contingency', isCorrect: false },
      { id: 'd', text: 'Report the mold to the Virginia Department of Health immediately', isCorrect: false },
    ],
    explanation:
      'Mold is considered a material adverse condition that can affect health and property value. Virginia agents with actual knowledge of mold must disclose it to prospective buyers. While Virginia does not have a specific mold disclosure statute, general material fact disclosure duties apply. The agent is not responsible for remediation.',
    difficulty: 'hard',
    topicTag: 'disclosures',
  },
]

// ── Chapter: closing-procedures (10 questions) ───────────────────────────────

const closingProceduresQuestions: QuizQuestion[] = [
  {
    id: 'q-closing-001',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, real estate closings are typically conducted by:',
    options: [
      { id: 'a', text: 'The listing agent', isCorrect: false },
      { id: 'b', text: 'A licensed settlement agent, usually an attorney or title company', isCorrect: true },
      { id: 'c', text: 'The county clerk of courts', isCorrect: false },
      { id: 'd', text: 'The buyer\'s lender', isCorrect: false },
    ],
    explanation:
      'Virginia requires that a licensed settlement agent conduct real estate closings. This is typically an attorney, title company, or financial institution licensed by the Virginia State Bar or the Bureau of Financial Institutions. Settlement agents must also be registered with DPOR.',
    difficulty: 'easy',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-002',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'A credit on the buyer\'s closing statement means the buyer:',
    options: [
      { id: 'a', text: 'Owes additional money', isCorrect: false },
      { id: 'b', text: 'Receives a reduction in the amount they need to bring to closing', isCorrect: true },
      { id: 'c', text: 'Must pay the amount to the seller', isCorrect: false },
      { id: 'd', text: 'Forfeits their earnest money', isCorrect: false },
    ],
    explanation:
      'A credit on the buyer\'s side of the closing statement reduces the amount the buyer needs to pay at closing. Common buyer credits include the earnest money deposit, seller concessions, and prorated items the seller owes. A debit increases the amount the buyer must pay.',
    difficulty: 'easy',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-003',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'RESPA prohibits which of the following?',
    options: [
      { id: 'a', text: 'Charging reasonable settlement fees for services rendered', isCorrect: false },
      { id: 'b', text: 'Kickbacks or referral fees for settlement service referrals', isCorrect: true },
      { id: 'c', text: 'Title insurance companies offering title searches', isCorrect: false },
      { id: 'd', text: 'Sellers paying for the buyer\'s closing costs', isCorrect: false },
    ],
    explanation:
      'The Real Estate Settlement Procedures Act (RESPA) prohibits kickbacks and unearned referral fees for settlement services. No person may give or accept a fee, kickback, or anything of value for referrals of settlement service business. RESPA also prohibits requiring a specific title insurance company.',
    difficulty: 'easy',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-004',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'Prorations at closing are typically calculated using:',
    options: [
      { id: 'a', text: 'A 365-day year only', isCorrect: false },
      { id: 'b', text: 'A 360-day year (12 months of 30 days) or actual days, depending on the contract', isCorrect: true },
      { id: 'c', text: 'The calendar month only', isCorrect: false },
      { id: 'd', text: 'Whole months with no partial-month adjustments', isCorrect: false },
    ],
    explanation:
      'Prorations can be calculated using either the 360-day statutory year (12 months of 30 days each) or the 365-day actual year. The method is typically specified in the purchase contract. Virginia contracts commonly use the 365-day method for property tax prorations.',
    difficulty: 'medium',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-005',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'At closing, the earnest money deposit appears as:',
    options: [
      { id: 'a', text: 'A debit to the buyer and a credit to the seller', isCorrect: false },
      { id: 'b', text: 'A credit to the buyer only', isCorrect: true },
      { id: 'c', text: 'A debit to the seller only', isCorrect: false },
      { id: 'd', text: 'A credit to both the buyer and the seller', isCorrect: false },
    ],
    explanation:
      'The earnest money deposit is a credit to the buyer on the closing statement because it reduces the amount the buyer owes at closing. It does not appear as a credit or debit to the seller because the seller receives the full purchase price regardless of how the buyer funds it.',
    difficulty: 'medium',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-006',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'Which document is recorded in the land records after closing to provide evidence that a mortgage lien has been satisfied?',
    options: [
      { id: 'a', text: 'Certificate of satisfaction (release of lien)', isCorrect: true },
      { id: 'b', text: 'Deed of trust', isCorrect: false },
      { id: 'c', text: 'Promissory note', isCorrect: false },
      { id: 'd', text: 'Title insurance policy', isCorrect: false },
    ],
    explanation:
      'When a mortgage or deed of trust is paid in full, the lender issues a certificate of satisfaction (also called a release or reconveyance) which is recorded in the land records. This removes the lien from the property\'s title. In Virginia, the trustee issues the release for deeds of trust.',
    difficulty: 'medium',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-007',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia\'s Wet Settlement Act, the settlement agent must:',
    options: [
      { id: 'a', text: 'Ensure all funds are collected before or at the time of disbursement', isCorrect: true },
      { id: 'b', text: 'Allow the seller to receive funds 3 days before closing', isCorrect: false },
      { id: 'c', text: 'Use only cashier\'s checks for all transactions', isCorrect: false },
      { id: 'd', text: 'Require all parties to be physically present at closing', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Wet Settlement Act requires that the settlement agent have all funds (loan proceeds and buyer\'s funds) collected and available before disbursing any settlement funds. This protects all parties from "dry closings" where documents are signed before funds are confirmed.',
    difficulty: 'hard',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-008',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'If property taxes of $6,000 have been paid in full for the year and closing occurs on October 1, the seller is entitled to a credit of:',
    options: [
      { id: 'a', text: '$1,500', isCorrect: true },
      { id: 'b', text: '$4,500', isCorrect: false },
      { id: 'c', text: '$3,000', isCorrect: false },
      { id: 'd', text: '$6,000', isCorrect: false },
    ],
    explanation:
      'The seller prepaid taxes for the full year but only owned the property for 9 months (Jan-Sep). The buyer owes the seller for the 3 months (Oct-Dec) the buyer will own the property: $6,000 / 12 x 3 = $1,500 credit to the seller. This is a debit to the buyer.',
    difficulty: 'hard',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-009',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'Title insurance differs from other forms of insurance because it protects against:',
    options: [
      { id: 'a', text: 'Future events that may occur after the policy date', isCorrect: false },
      { id: 'b', text: 'Defects, liens, and encumbrances that existed before the policy date but were not discovered', isCorrect: true },
      { id: 'c', text: 'Physical damage to the property', isCorrect: false },
      { id: 'd', text: 'Loss of income from the property', isCorrect: false },
    ],
    explanation:
      'Title insurance is unique because it protects against past events, not future ones. It covers losses from title defects, liens, encumbrances, or other matters that existed before the policy date but were not found during the title search. A one-time premium provides coverage for as long as the insured owns the property.',
    difficulty: 'hard',
    topicTag: 'closing',
  },
  {
    id: 'q-closing-010',
    chapterId: 'closing-procedures',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, which of the following items is typically a seller\'s closing cost?',
    options: [
      { id: 'a', text: 'Loan origination fee', isCorrect: false },
      { id: 'b', text: 'Prepaid homeowner\'s insurance', isCorrect: false },
      { id: 'c', text: 'Grantor\'s tax', isCorrect: true },
      { id: 'd', text: 'Recording fee for the deed of trust', isCorrect: false },
    ],
    explanation:
      'The grantor\'s tax is a Virginia transfer tax paid by the seller (grantor). It is calculated at $2.50 per $1,000 of the sale price (with possible additional local taxes). Loan origination fees, prepaid insurance, and deed of trust recording fees are typically buyer expenses.',
    difficulty: 'medium',
    topicTag: 'closing',
  },
]

// ── Chapter: transfer-of-title (10 questions) ────────────────────────────────

const transferTitleQuestions: QuizQuestion[] = [
  {
    id: 'q-transfer-001',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of deed provides the GREATEST protection to the buyer?',
    options: [
      { id: 'a', text: 'Quitclaim deed', isCorrect: false },
      { id: 'b', text: 'Bargain and sale deed', isCorrect: false },
      { id: 'c', text: 'General warranty deed', isCorrect: true },
      { id: 'd', text: 'Special warranty deed', isCorrect: false },
    ],
    explanation:
      'A general warranty deed provides the highest level of buyer protection because the grantor warrants title against all defects, including those arising before the grantor\'s ownership. It includes five covenants: seisin, right to convey, against encumbrances, quiet enjoyment, and warranty forever.',
    difficulty: 'easy',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-002',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'For a deed to be valid in Virginia, it must include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Competent grantor', isCorrect: false },
      { id: 'b', text: 'Identifiable grantee', isCorrect: false },
      { id: 'c', text: 'Recording at the courthouse', isCorrect: true },
      { id: 'd', text: 'Legal description of the property', isCorrect: false },
    ],
    explanation:
      'Recording is not required for a deed to be valid between the parties. A valid deed requires a competent grantor, identifiable grantee, consideration, granting clause, legal description, and delivery and acceptance. Recording provides constructive notice to the public but does not affect validity between grantor and grantee.',
    difficulty: 'easy',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-003',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'A quitclaim deed conveys:',
    options: [
      { id: 'a', text: 'A guaranteed fee simple interest', isCorrect: false },
      { id: 'b', text: 'Whatever interest the grantor may have, with no warranties', isCorrect: true },
      { id: 'c', text: 'Only the improvements, not the land', isCorrect: false },
      { id: 'd', text: 'A life estate interest only', isCorrect: false },
    ],
    explanation:
      'A quitclaim deed transfers whatever interest the grantor may have in the property, if any, without any warranties or guarantees. It provides the least buyer protection and is commonly used to clear title defects, transfer property between family members, or add/remove names from title.',
    difficulty: 'easy',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-004',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'The covenant of quiet enjoyment in a general warranty deed means:',
    options: [
      { id: 'a', text: 'The property is in a quiet neighborhood', isCorrect: false },
      { id: 'b', text: 'The buyer can enjoy the property without noise pollution', isCorrect: false },
      { id: 'c', text: 'The grantee will not be disturbed by anyone with a superior claim to the title', isCorrect: true },
      { id: 'd', text: 'The property has no noise-related easements', isCorrect: false },
    ],
    explanation:
      'The covenant of quiet enjoyment guarantees that the grantee\'s title and possession will not be challenged by someone with a superior claim. If a third party with a valid prior claim evicts the grantee, the grantor may be held liable. This is one of the five covenants in a general warranty deed.',
    difficulty: 'medium',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-005',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, a deed of trust differs from a mortgage in that:',
    options: [
      { id: 'a', text: 'A deed of trust involves three parties: borrower, lender, and trustee', isCorrect: true },
      { id: 'b', text: 'A deed of trust cannot be used for residential property', isCorrect: false },
      { id: 'c', text: 'A mortgage is always preferred by lenders in Virginia', isCorrect: false },
      { id: 'd', text: 'There is no difference; the terms are interchangeable', isCorrect: false },
    ],
    explanation:
      'Virginia primarily uses deeds of trust rather than mortgages. A deed of trust involves three parties: the trustor (borrower), the beneficiary (lender), and the trustee (neutral third party who holds legal title). If the borrower defaults, the trustee can conduct a non-judicial foreclosure sale.',
    difficulty: 'medium',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-006',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'Which method of legal description uses compass directions and distances to define property boundaries?',
    options: [
      { id: 'a', text: 'Lot and block (plat map)', isCorrect: false },
      { id: 'b', text: 'Government rectangular survey', isCorrect: false },
      { id: 'c', text: 'Metes and bounds', isCorrect: true },
      { id: 'd', text: 'Street address', isCorrect: false },
    ],
    explanation:
      'Metes and bounds uses compass directions (bearings) and measured distances to describe property boundaries, starting from a point of beginning (POB) and returning to it. Virginia commonly uses metes and bounds descriptions. The government rectangular survey system is not used in Virginia.',
    difficulty: 'medium',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-007',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'Adverse possession in Virginia requires the claimant to demonstrate possession that is all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Open and notorious', isCorrect: false },
      { id: 'b', text: 'Continuous for the statutory period', isCorrect: false },
      { id: 'c', text: 'Permitted by the record owner', isCorrect: true },
      { id: 'd', text: 'Hostile and under a claim of right', isCorrect: false },
    ],
    explanation:
      'Adverse possession requires possession that is open, notorious, continuous, hostile (without permission), exclusive, and under a claim of right for Virginia\'s statutory period of 15 years. If the owner grants permission, the possession is not hostile and cannot ripen into adverse possession.',
    difficulty: 'medium',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-008',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia\'s race-notice recording statute, a subsequent purchaser takes priority over a prior unrecorded deed if the subsequent purchaser:',
    options: [
      { id: 'a', text: 'Simply records first, regardless of knowledge', isCorrect: false },
      { id: 'b', text: 'Records first and had no notice of the prior conveyance', isCorrect: true },
      { id: 'c', text: 'Paid a higher price for the property', isCorrect: false },
      { id: 'd', text: 'Has a warranty deed while the prior buyer has a quitclaim deed', isCorrect: false },
    ],
    explanation:
      'Virginia follows a race-notice recording system. To take priority over a prior unrecorded deed, the subsequent purchaser must: (1) record first, and (2) have purchased without actual or constructive notice of the prior conveyance. Both conditions must be met.',
    difficulty: 'hard',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-009',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'A special warranty deed warrants the title only against defects that arose:',
    options: [
      { id: 'a', text: 'At any time in the chain of title', isCorrect: false },
      { id: 'b', text: 'During the grantor\'s period of ownership', isCorrect: true },
      { id: 'c', text: 'After the deed is recorded', isCorrect: false },
      { id: 'd', text: 'Within 10 years of the transfer', isCorrect: false },
    ],
    explanation:
      'A special warranty deed (sometimes called a limited warranty deed) only warrants title against defects that occurred during the grantor\'s ownership. It does not protect against defects that existed before the grantor acquired the property. Banks and corporations commonly use special warranty deeds for REO sales.',
    difficulty: 'hard',
    topicTag: 'title',
  },
  {
    id: 'q-transfer-010',
    chapterId: 'transfer-of-title',
    quizType: 'chapter_quiz',
    questionText:
      'The legal concept of "delivery and acceptance" means that for a deed to be effective:',
    options: [
      { id: 'a', text: 'It must be mailed via certified mail to the grantee', isCorrect: false },
      { id: 'b', text: 'The grantor must intend to transfer title and the grantee must accept the conveyance', isCorrect: true },
      { id: 'c', text: 'The deed must be physically handed from grantor to grantee at a closing table', isCorrect: false },
      { id: 'd', text: 'The deed must be recorded within 30 days of signing', isCorrect: false },
    ],
    explanation:
      'Delivery and acceptance requires that the grantor intend to immediately convey title and the grantee accept the transfer. Physical delivery is not required; the intent to transfer is the key element. A deed placed in a safe deposit box with no intent to deliver is not effective.',
    difficulty: 'hard',
    topicTag: 'title',
  },
]

// ── Module 6: Virginia-Specific ──────────────────────────────────────────────

// ── Chapter: dpor-rules-regulations (10 questions) ───────────────────────────

const dporRulesQuestions: QuizQuestion[] = [
  {
    id: 'q-dporrules-001',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Real Estate Board (VREB) operates under which state agency?',
    options: [
      { id: 'a', text: 'Virginia Department of Housing and Community Development', isCorrect: false },
      { id: 'b', text: 'Department of Professional and Occupational Regulation (DPOR)', isCorrect: true },
      { id: 'c', text: 'Virginia Attorney General\'s Office', isCorrect: false },
      { id: 'd', text: 'Virginia Department of Commerce', isCorrect: false },
    ],
    explanation:
      'The Virginia Real Estate Board is one of several regulatory boards within DPOR. DPOR oversees professional licensing and regulation for many professions in Virginia. The VREB has the authority to adopt regulations, issue and revoke licenses, and impose penalties.',
    difficulty: 'easy',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-002',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia real estate salesperson license must be renewed every:',
    options: [
      { id: 'a', text: '1 year', isCorrect: false },
      { id: 'b', text: '2 years', isCorrect: true },
      { id: 'c', text: '3 years', isCorrect: false },
      { id: 'd', text: '4 years', isCorrect: false },
    ],
    explanation:
      'Virginia real estate licenses for both salespersons and brokers must be renewed every 2 years. Licensees must complete the required continuing education hours before renewal. Failure to renew on time results in the license lapsing, and additional requirements may apply for reinstatement.',
    difficulty: 'easy',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-003',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, an active real estate salesperson MUST be supervised by:',
    options: [
      { id: 'a', text: 'Another experienced salesperson', isCorrect: false },
      { id: 'b', text: 'A licensed principal or supervising broker', isCorrect: true },
      { id: 'c', text: 'The Virginia Real Estate Board directly', isCorrect: false },
      { id: 'd', text: 'Any licensed real estate professional with 5+ years experience', isCorrect: false },
    ],
    explanation:
      'Virginia law requires every active salesperson to work under a licensed principal or supervising broker. The broker is responsible for the salesperson\'s actions and must ensure compliance with all real estate laws and regulations. A salesperson cannot operate independently.',
    difficulty: 'easy',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-004',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is grounds for disciplinary action by the Virginia Real Estate Board?',
    options: [
      { id: 'a', text: 'Selling a property at a price below the assessed value', isCorrect: false },
      { id: 'b', text: 'Making a substantial misrepresentation in a real estate transaction', isCorrect: true },
      { id: 'c', text: 'Declining to take a listing', isCorrect: false },
      { id: 'd', text: 'Charging a commission below the standard rate', isCorrect: false },
    ],
    explanation:
      'Substantial misrepresentation is a clear violation that can lead to disciplinary action including fines, license suspension, or revocation. The VREB can take action for misrepresentation, fraud, negligence, untrustworthiness, improper dealing, and other violations outlined in the Virginia Real Estate License Law.',
    difficulty: 'medium',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-005',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Transaction Recovery Fund is designed to:',
    options: [
      { id: 'a', text: 'Provide low-interest loans to first-time homebuyers', isCorrect: false },
      { id: 'b', text: 'Compensate consumers who suffer financial loss due to a licensee\'s misconduct', isCorrect: true },
      { id: 'c', text: 'Fund the Virginia Real Estate Board\'s operating expenses', isCorrect: false },
      { id: 'd', text: 'Cover losses from natural disasters', isCorrect: false },
    ],
    explanation:
      'The Virginia Transaction Recovery Fund compensates consumers who have obtained a final court judgment against a Virginia licensee for fraud, misrepresentation, or conversion but have been unable to collect. The maximum payment is $20,000 per claimant and $50,000 per transaction. The fund minimum balance is $400,000, new licensees contribute $20, and any payout results in automatic license revocation until the full amount plus interest is repaid.',
    difficulty: 'medium',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-006',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee changes their home address. They must notify DPOR within:',
    options: [
      { id: 'a', text: '10 days', isCorrect: false },
      { id: 'b', text: '30 days', isCorrect: true },
      { id: 'c', text: '60 days', isCorrect: false },
      { id: 'd', text: '90 days', isCorrect: false },
    ],
    explanation:
      'Virginia licensees must notify DPOR of any change to their home or business address within 30 days. Failure to maintain current information with DPOR is a violation of the regulations and may result in missing important notices about renewal or disciplinary matters.',
    difficulty: 'medium',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-007',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s real estate license law requires that all advertising by a licensee include:',
    options: [
      { id: 'a', text: 'The agent\'s personal phone number', isCorrect: false },
      { id: 'b', text: 'The name of the firm as licensed with the Board', isCorrect: true },
      { id: 'c', text: 'The agent\'s license number', isCorrect: false },
      { id: 'd', text: 'The commission rate offered', isCorrect: false },
    ],
    explanation:
      'Virginia requires that all advertising by a licensee include the firm name as registered with the Board. The agent\'s personal name or team name alone is not sufficient. This applies to all forms of advertising, including social media, websites, business cards, and yard signs.',
    difficulty: 'medium',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-008',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'If a Virginia licensee is convicted of a felony, the Real Estate Board:',
    options: [
      { id: 'a', text: 'Must wait for the licensee to self-report before taking action', isCorrect: false },
      { id: 'b', text: 'Can only issue a warning for the first offense', isCorrect: false },
      { id: 'c', text: 'May suspend or revoke the license and impose monetary penalties', isCorrect: true },
      { id: 'd', text: 'Has no jurisdiction over criminal matters', isCorrect: false },
    ],
    explanation:
      'A felony conviction is grounds for disciplinary action by the VREB, including suspension or revocation of the license and monetary penalties up to $10,000 per violation. The Board may act independently of the criminal proceedings and does not need to wait for a self-report.',
    difficulty: 'hard',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-009',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'A principal broker in Virginia who fails to maintain proper escrow account records faces:',
    options: [
      { id: 'a', text: 'A verbal warning for the first offense', isCorrect: false },
      { id: 'b', text: 'No penalty unless funds are actually missing', isCorrect: false },
      { id: 'c', text: 'Disciplinary action including fines and possible license revocation', isCorrect: true },
      { id: 'd', text: 'Only a requirement to complete additional continuing education', isCorrect: false },
    ],
    explanation:
      'Failure to maintain proper escrow account records is a serious violation in Virginia, even if no funds are missing. The VREB requires detailed escrow records including deposits, disbursements, and monthly reconciliations. Violations can result in fines, suspension, or revocation of the broker\'s license.',
    difficulty: 'hard',
    topicTag: 'virginia-law',
  },
  {
    id: 'q-dporrules-010',
    chapterId: 'dpor-rules-regulations',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, what is the maximum monetary penalty the Real Estate Board can impose per violation?',
    options: [
      { id: 'a', text: '$1,000', isCorrect: false },
      { id: 'b', text: '$5,000', isCorrect: false },
      { id: 'c', text: '$10,000', isCorrect: true },
      { id: 'd', text: '$25,000', isCorrect: false },
    ],
    explanation:
      'The Virginia Real Estate Board may impose a monetary penalty not to exceed $10,000 for each violation of the Real Estate License Law or Board regulations. Penalties can be combined with other disciplinary actions such as license suspension or revocation.',
    difficulty: 'hard',
    topicTag: 'virginia-law',
  },
]

// ── Chapter: virginia-contract-forms (10 questions) ──────────────────────────

const vaContractFormsQuestions: QuizQuestion[] = [
  {
    id: 'q-vaforms-001',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the standard residential purchase agreement becomes a binding contract when:',
    options: [
      { id: 'a', text: 'The buyer signs the offer', isCorrect: false },
      { id: 'b', text: 'The seller verbally accepts the offer', isCorrect: false },
      { id: 'c', text: 'Both parties sign and the last party\'s acceptance is communicated (ratification)', isCorrect: true },
      { id: 'd', text: 'The earnest money deposit is delivered', isCorrect: false },
    ],
    explanation:
      'In Virginia, a real estate contract is ratified when the last party signs the agreement and that acceptance is communicated to the other party or their agent. Verbal acceptance is not sufficient; Virginia\'s Statute of Frauds requires real estate contracts to be in writing.',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-002',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is NOT an essential element of a valid real estate contract in Virginia?',
    options: [
      { id: 'a', text: 'Offer and acceptance', isCorrect: false },
      { id: 'b', text: 'Consideration', isCorrect: false },
      { id: 'c', text: 'Notarization', isCorrect: true },
      { id: 'd', text: 'Legal purpose', isCorrect: false },
    ],
    explanation:
      'The essential elements of a valid real estate contract are: competent parties, offer and acceptance, consideration, legal purpose, and a written agreement (Statute of Frauds). Notarization is not required for a contract to be valid, though deeds must be notarized for recording.',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-003',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia home inspection contingency typically gives the buyer how many days to complete a home inspection after ratification?',
    options: [
      { id: 'a', text: '5 days', isCorrect: false },
      { id: 'b', text: '7 days', isCorrect: false },
      { id: 'c', text: 'As negotiated in the contract, commonly 7-14 days', isCorrect: true },
      { id: 'd', text: '30 days by statute', isCorrect: false },
    ],
    explanation:
      'Virginia does not have a statutory inspection period. The home inspection contingency period is negotiated between the parties and specified in the contract. Common timeframes range from 7 to 14 days after ratification. If no contingency is included, the buyer waives inspection rights.',
    difficulty: 'easy',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-004',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'If a buyer defaults on a Virginia real estate contract, the seller\'s typical remedy regarding earnest money is:',
    options: [
      { id: 'a', text: 'The seller automatically receives the earnest money', isCorrect: false },
      { id: 'b', text: 'The earnest money may be retained as liquidated damages if the contract provides for it', isCorrect: true },
      { id: 'c', text: 'The earnest money is returned to the buyer in all cases', isCorrect: false },
      { id: 'd', text: 'The broker keeps the earnest money as a commission', isCorrect: false },
    ],
    explanation:
      'In Virginia, the earnest money may serve as liquidated damages for buyer default if the contract contains a liquidated damages clause. Without such a clause, the seller may pursue actual damages through legal action. The escrow holder cannot release disputed funds without written agreement of both parties or a court order.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-005',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'The financing contingency in a Virginia purchase contract protects the buyer by:',
    options: [
      { id: 'a', text: 'Guaranteeing the lender will approve the loan', isCorrect: false },
      { id: 'b', text: 'Allowing the buyer to void the contract if they cannot obtain financing within the specified period', isCorrect: true },
      { id: 'c', text: 'Requiring the seller to provide seller financing', isCorrect: false },
      { id: 'd', text: 'Setting the interest rate for the buyer\'s loan', isCorrect: false },
    ],
    explanation:
      'A financing contingency allows the buyer to terminate the contract and receive their earnest money back if they are unable to obtain a loan commitment within the specified timeframe and terms outlined in the contract. Without this contingency, the buyer risks losing their deposit if financing falls through.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-006',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the "as-is" clause in a purchase contract means:',
    options: [
      { id: 'a', text: 'The seller has no duty to disclose known defects', isCorrect: false },
      { id: 'b', text: 'The buyer accepts the property in its current condition but the seller must still disclose known defects', isCorrect: true },
      { id: 'c', text: 'The buyer waives all rights to a home inspection', isCorrect: false },
      { id: 'd', text: 'The seller is not responsible for any damage before closing', isCorrect: false },
    ],
    explanation:
      'An "as-is" clause means the seller will not make repairs, but it does not eliminate the seller\'s duty to disclose known material defects under Virginia law. The buyer can still conduct inspections and may still terminate under applicable contingencies. The as-is clause only addresses the seller\'s obligation to repair.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-007',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'A counteroffer in Virginia:',
    options: [
      { id: 'a', text: 'Automatically amends the original offer', isCorrect: false },
      { id: 'b', text: 'Rejects the original offer and creates a new offer', isCorrect: true },
      { id: 'c', text: 'Keeps the original offer alive while proposing changes', isCorrect: false },
      { id: 'd', text: 'Must be made within 48 hours of receiving the original offer', isCorrect: false },
    ],
    explanation:
      'A counteroffer legally rejects and terminates the original offer and creates a new offer. The original offeror cannot later accept the original offer once a counteroffer has been made. Each counteroffer starts a new negotiation cycle. There is no statutory time limit for making a counteroffer.',
    difficulty: 'medium',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-008',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Condominium Act requires that a buyer purchasing a resale condominium unit receive a resale certificate. The buyer then has:',
    options: [
      { id: 'a', text: '3 days to review and void the contract', isCorrect: true },
      { id: 'b', text: '7 days to review and void the contract', isCorrect: false },
      { id: 'c', text: '14 days to review and void the contract', isCorrect: false },
      { id: 'd', text: 'No right to void the contract based on the resale certificate', isCorrect: false },
    ],
    explanation:
      'Under the Virginia Condominium Act, the buyer of a resale condominium unit has 3 days after receiving the resale certificate to review it and void the contract. The resale certificate contains information about assessments, reserves, pending litigation, and other important association details.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-009',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'Specific performance as a remedy for breach of a real estate contract allows:',
    options: [
      { id: 'a', text: 'The injured party to collect triple damages', isCorrect: false },
      { id: 'b', text: 'The court to order the defaulting party to complete the transaction', isCorrect: true },
      { id: 'c', text: 'The broker to retain the commission regardless of the outcome', isCorrect: false },
      { id: 'd', text: 'The contract to be automatically extended for 90 days', isCorrect: false },
    ],
    explanation:
      'Specific performance is an equitable remedy available for real estate contracts because each parcel of real property is considered unique. A court can order the defaulting party (usually the seller) to fulfill the contract and complete the transfer. This remedy is not available for every type of contract.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
  {
    id: 'q-vaforms-010',
    chapterId: 'virginia-contract-forms',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s Property Owners\' Association Act (POA Act) requires that a buyer purchasing property in a POA community receive a disclosure packet. If the packet reveals a special assessment, the buyer may:',
    options: [
      { id: 'a', text: 'Void the contract within 3 days of receiving the packet', isCorrect: true },
      { id: 'b', text: 'Only request a credit at closing but cannot void', isCorrect: false },
      { id: 'c', text: 'Require the seller to pay the assessment before closing', isCorrect: false },
      { id: 'd', text: 'File a complaint with DPOR to have the assessment waived', isCorrect: false },
    ],
    explanation:
      'Under Virginia\'s POA Act, the buyer has a 3-day right of rescission after receiving the POA disclosure packet. This applies whether the packet reveals a special assessment, pending litigation, or any other information. The 3-day period runs from receipt of the packet, not from contract ratification.',
    difficulty: 'hard',
    topicTag: 'contracts',
  },
]

// ── Chapter: virginia-closing-practices (10 questions) ───────────────────────

const vaClosingPracticesQuestions: QuizQuestion[] = [
  {
    id: 'q-vaclose-001',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the settlement agent is required to be:',
    options: [
      { id: 'a', text: 'A licensed real estate broker', isCorrect: false },
      { id: 'b', text: 'Licensed or registered with the appropriate Virginia regulatory body', isCorrect: true },
      { id: 'c', text: 'A member of the Virginia State Bar only', isCorrect: false },
      { id: 'd', text: 'An employee of the buyer\'s lender', isCorrect: false },
    ],
    explanation:
      'Virginia requires settlement agents to be licensed or registered. This includes attorneys licensed by the Virginia State Bar, title insurance companies, or financial institutions authorized to do business in Virginia. Settlement agents must also register with DPOR.',
    difficulty: 'easy',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-002',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia grantor\'s tax is paid by the:',
    options: [
      { id: 'a', text: 'Buyer', isCorrect: false },
      { id: 'b', text: 'Seller (grantor)', isCorrect: true },
      { id: 'c', text: 'Settlement agent', isCorrect: false },
      { id: 'd', text: 'Buyer and seller equally', isCorrect: false },
    ],
    explanation:
      'Virginia\'s grantor\'s tax is a transfer tax paid by the seller (the person granting/conveying the property). The state rate is $2.50 per $1,000 of the sale price. Some Virginia localities charge an additional regional grantor\'s tax of $0.50 per $1,000. This is separate from recording fees.',
    difficulty: 'easy',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-003',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s congestion relief fee, applicable in certain Northern Virginia localities, adds an additional transfer tax of:',
    options: [
      { id: 'a', text: '$0.25 per $100', isCorrect: false },
      { id: 'b', text: '$0.15 per $100', isCorrect: true },
      { id: 'c', text: '$1.00 per $1,000', isCorrect: false },
      { id: 'd', text: '$5.00 per $1,000', isCorrect: false },
    ],
    explanation:
      'Certain Northern Virginia localities (such as those in the Hampton Roads and Northern Virginia transportation districts) may impose an additional regional transfer tax. The congestion relief fee of $0.15 per $100 of sale price helps fund regional transportation improvements. Agents must know which localities apply.',
    difficulty: 'easy',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-004',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, the deed must be recorded in the:',
    options: [
      { id: 'a', text: 'County where the buyer resides', isCorrect: false },
      { id: 'b', text: 'Clerk\'s office of the circuit court where the property is located', isCorrect: true },
      { id: 'c', text: 'Virginia Supreme Court clerk\'s office', isCorrect: false },
      { id: 'd', text: 'DPOR central registry', isCorrect: false },
    ],
    explanation:
      'In Virginia, deeds and other real property documents are recorded in the clerk\'s office of the circuit court in the city or county where the property is located. Recording provides constructive notice to the world of the transfer and establishes priority of claims against the property.',
    difficulty: 'medium',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-005',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, a deed of trust foreclosure (non-judicial) requires the trustee to:',
    options: [
      { id: 'a', text: 'File a lawsuit in circuit court before selling the property', isCorrect: false },
      { id: 'b', text: 'Advertise the sale and provide notice to the borrower as required by statute', isCorrect: true },
      { id: 'c', text: 'Obtain a court order approving the sale price', isCorrect: false },
      { id: 'd', text: 'Allow the borrower a 12-month redemption period', isCorrect: false },
    ],
    explanation:
      'Virginia allows non-judicial foreclosure through the power of sale in the deed of trust. The trustee must give proper notice to the borrower and advertise the sale according to Virginia statutory requirements. No court approval is needed. Virginia does not have a statutory right of redemption after the foreclosure sale.',
    difficulty: 'medium',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-006',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'A property in Virginia sells for $450,000. What is the state grantor\'s tax?',
    options: [
      { id: 'a', text: '$900', isCorrect: false },
      { id: 'b', text: '$1,125', isCorrect: true },
      { id: 'c', text: '$2,250', isCorrect: false },
      { id: 'd', text: '$4,500', isCorrect: false },
    ],
    explanation:
      'Virginia\'s state grantor\'s tax is $2.50 per $1,000 of the sale price. $450,000 / $1,000 = 450 units. 450 x $2.50 = $1,125. Some localities charge an additional regional grantor\'s tax. This calculation is a common Virginia-specific exam question.',
    difficulty: 'medium',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-007',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'The Wet Settlement Act in Virginia applies to:',
    options: [
      { id: 'a', text: 'Only commercial real estate transactions', isCorrect: false },
      { id: 'b', text: 'Residential transactions involving a federally related mortgage loan', isCorrect: true },
      { id: 'c', text: 'Only cash transactions', isCorrect: false },
      { id: 'd', text: 'All real estate transactions including vacant land', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Wet Settlement Act applies to residential real estate transactions involving a federally related mortgage loan. It requires the settlement agent to have collected sufficient funds to cover all disbursements before the settlement agent disburses any funds from the transaction.',
    difficulty: 'medium',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-008',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, if a settlement agent discovers a title defect shortly before closing, the appropriate action is to:',
    options: [
      { id: 'a', text: 'Proceed with closing and address the defect later', isCorrect: false },
      { id: 'b', text: 'Delay closing until the title defect is resolved or insured over', isCorrect: true },
      { id: 'c', text: 'Have the buyer sign a waiver acknowledging the defect', isCorrect: false },
      { id: 'd', text: 'Record the deed without disclosing the defect', isCorrect: false },
    ],
    explanation:
      'A settlement agent has a duty to ensure clear title before closing. If a defect is discovered, closing should be delayed until the defect is cured, resolved, or the title insurance company agrees to insure over it. Proceeding without addressing the defect exposes all parties to risk.',
    difficulty: 'hard',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-009',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, the settlement agent must maintain closing records for a minimum of:',
    options: [
      { id: 'a', text: '3 years', isCorrect: false },
      { id: 'b', text: '5 years', isCorrect: true },
      { id: 'c', text: '7 years', isCorrect: false },
      { id: 'd', text: '10 years', isCorrect: false },
    ],
    explanation:
      'Virginia law requires settlement agents to retain closing records for a minimum of 5 years from the date of settlement. These records include the closing disclosure, title documents, disbursement records, and all related correspondence. Failure to maintain records can result in regulatory action.',
    difficulty: 'hard',
    topicTag: 'virginia-closing',
  },
  {
    id: 'q-vaclose-010',
    chapterId: 'virginia-closing-practices',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia does NOT provide a statutory right of redemption after a foreclosure sale. This means:',
    options: [
      { id: 'a', text: 'The borrower can reclaim the property by paying all arrears within 6 months', isCorrect: false },
      { id: 'b', text: 'Once the foreclosure sale is complete, the former owner has no right to reclaim the property', isCorrect: true },
      { id: 'c', text: 'The lender must offer the property back to the borrower at a discount', isCorrect: false },
      { id: 'd', text: 'The borrower can file an appeal within 30 days to stop the transfer', isCorrect: false },
    ],
    explanation:
      'Virginia is one of the states that does not provide a statutory post-sale right of redemption. Once the trustee\'s sale is complete and the deed is delivered to the purchaser, the former owner cannot reclaim the property. The borrower\'s rights end at the foreclosure sale. Some states provide a redemption period of 6 months to 1 year.',
    difficulty: 'hard',
    topicTag: 'virginia-closing',
  },
]

// ── Chapter: continuing-education-post-license (10 questions) ────────────────

const continuingEdQuestions: QuizQuestion[] = [
  {
    id: 'q-conted-001',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'A newly licensed Virginia salesperson must complete post-license education of how many hours within the first license term?',
    options: [
      { id: 'a', text: '16 hours', isCorrect: false },
      { id: 'b', text: '30 hours', isCorrect: true },
      { id: 'c', text: '45 hours', isCorrect: false },
      { id: 'd', text: '60 hours', isCorrect: false },
    ],
    explanation:
      'Virginia requires newly licensed salespersons to complete 30 hours of post-license education before the first license renewal (within the first 2-year term). This is in addition to the 60 hours of pre-license education. Failure to complete post-license education results in the license not being renewed.',
    difficulty: 'easy',
    topicTag: 'education',
  },
  {
    id: 'q-conted-002',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'After completing post-license requirements, Virginia salespersons must complete how many hours of continuing education for each subsequent renewal?',
    options: [
      { id: 'a', text: '8 hours', isCorrect: false },
      { id: 'b', text: '16 hours', isCorrect: true },
      { id: 'c', text: '24 hours', isCorrect: false },
      { id: 'd', text: '30 hours', isCorrect: false },
    ],
    explanation:
      'Virginia requires 16 hours of continuing education for each 2-year renewal cycle after the initial post-license term. This must include required courses on current industry topics, fair housing, ethics, and Virginia-specific subjects as mandated by the Real Estate Board.',
    difficulty: 'easy',
    topicTag: 'education',
  },
  {
    id: 'q-conted-003',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee who fails to renew their license on time will have their license:',
    options: [
      { id: 'a', text: 'Automatically renewed with a late fee', isCorrect: false },
      { id: 'b', text: 'Placed in lapsed (expired) status', isCorrect: true },
      { id: 'c', text: 'Permanently revoked', isCorrect: false },
      { id: 'd', text: 'Transferred to inactive status for up to 5 years', isCorrect: false },
    ],
    explanation:
      'If a Virginia licensee does not renew on time, the license lapses (expires). The licensee cannot practice real estate while the license is lapsed. Reinstatement may require completing additional education, paying late fees, and submitting a reinstatement application to the Board.',
    difficulty: 'easy',
    topicTag: 'education',
  },
  {
    id: 'q-conted-004',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'Continuing education courses for Virginia licensees must be approved by:',
    options: [
      { id: 'a', text: 'The National Association of Realtors', isCorrect: false },
      { id: 'b', text: 'The Virginia Real Estate Board', isCorrect: true },
      { id: 'c', text: 'Any accredited college or university', isCorrect: false },
      { id: 'd', text: 'The Virginia Department of Education', isCorrect: false },
    ],
    explanation:
      'All continuing education courses for Virginia real estate licensees must be approved by the Virginia Real Estate Board. The Board sets the curriculum requirements and certifies education providers. Not all real estate courses from other states or organizations automatically qualify for Virginia CE credit.',
    difficulty: 'medium',
    topicTag: 'education',
  },
  {
    id: 'q-conted-005',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia real estate salesperson who wants to become a broker must have:',
    options: [
      { id: 'a', text: 'At least 12 months of active experience as a salesperson', isCorrect: false },
      { id: 'b', text: 'At least 36 months of active experience as a salesperson within the past 5 years', isCorrect: true },
      { id: 'c', text: 'At least 60 months of active experience as a salesperson', isCorrect: false },
      { id: 'd', text: 'No experience requirement, only additional education', isCorrect: false },
    ],
    explanation:
      'To qualify for a Virginia broker\'s license, the applicant must have at least 36 months (3 years) of active experience as a licensed salesperson within the 5 years immediately preceding the application. They must also complete 180 hours of broker pre-license education and pass the broker examination.',
    difficulty: 'medium',
    topicTag: 'education',
  },
  {
    id: 'q-conted-006',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia requires broker pre-license education of how many total classroom hours?',
    options: [
      { id: 'a', text: '60 hours', isCorrect: false },
      { id: 'b', text: '120 hours', isCorrect: false },
      { id: 'c', text: '180 hours', isCorrect: true },
      { id: 'd', text: '240 hours', isCorrect: false },
    ],
    explanation:
      'Virginia requires 180 hours of broker pre-license education from a Board-approved school. This includes courses in brokerage management, real estate law, real estate finance, and other advanced topics. The 180 hours is in addition to the 60 hours of salesperson pre-license education already completed.',
    difficulty: 'medium',
    topicTag: 'education',
  },
  {
    id: 'q-conted-007',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee places their license on inactive status. While inactive, the licensee:',
    options: [
      { id: 'a', text: 'May still practice real estate on a limited basis', isCorrect: false },
      { id: 'b', text: 'Cannot practice real estate but does not need to complete CE for renewal', isCorrect: false },
      { id: 'c', text: 'Cannot practice real estate but must still complete CE and renew the license', isCorrect: true },
      { id: 'd', text: 'Is exempt from all licensing requirements for 5 years', isCorrect: false },
    ],
    explanation:
      'An inactive Virginia licensee cannot practice real estate. However, they must still complete the required continuing education and renew the license on time to maintain inactive status. To reactivate, the licensee must meet all current requirements and affiliate with a licensed broker.',
    difficulty: 'medium',
    topicTag: 'education',
  },
  {
    id: 'q-conted-008',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'If a Virginia salesperson\'s license has been lapsed for more than 12 months, reinstatement requires:',
    options: [
      { id: 'a', text: 'Only payment of the reinstatement fee', isCorrect: false },
      { id: 'b', text: 'Retaking and passing the licensing exam in addition to CE and fees', isCorrect: true },
      { id: 'c', text: 'A letter of recommendation from three licensed brokers', isCorrect: false },
      { id: 'd', text: 'Starting over with the full 60 hours of pre-license education', isCorrect: false },
    ],
    explanation:
      'If a Virginia license has been lapsed for more than 12 months, the licensee must complete all required continuing education, pay reinstatement fees, and retake and pass the licensing examination. For licenses lapsed less than 12 months, only CE completion and fees are typically required.',
    difficulty: 'hard',
    topicTag: 'education',
  },
  {
    id: 'q-conted-009',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia\'s mandatory continuing education for each renewal cycle must include courses on:',
    options: [
      { id: 'a', text: 'Only fair housing and ethics', isCorrect: false },
      { id: 'b', text: 'Fair housing, ethics, legal updates, and agency topics as specified by the Board', isCorrect: true },
      { id: 'c', text: 'Any real estate topic the licensee chooses', isCorrect: false },
      { id: 'd', text: 'Only Virginia-specific law', isCorrect: false },
    ],
    explanation:
      'Virginia\'s CE requirements include mandatory topics such as fair housing, ethics, legal and regulatory updates, and agency relationships. The Board specifies which topics and how many hours must be dedicated to each. Licensees have some flexibility in choosing elective CE courses to fill the remaining hours.',
    difficulty: 'hard',
    topicTag: 'education',
  },
  {
    id: 'q-conted-010',
    chapterId: 'continuing-education-post-license',
    quizType: 'chapter_quiz',
    questionText:
      'A newly licensed Virginia broker must complete post-license education of how many hours during the first license term?',
    options: [
      { id: 'a', text: '16 hours', isCorrect: false },
      { id: 'b', text: '30 hours', isCorrect: true },
      { id: 'c', text: '45 hours', isCorrect: false },
      { id: 'd', text: 'No post-license requirement for brokers', isCorrect: false },
    ],
    explanation:
      'Like salespersons, newly licensed Virginia brokers must complete 30 hours of post-license education before their first renewal. The broker post-license curriculum covers brokerage-specific topics such as escrow management, supervision responsibilities, and risk management.',
    difficulty: 'hard',
    topicTag: 'education',
  },
]

// ── Chapter: property-management (10 questions) ────────────────────────────

const propertyManagementQuestions: QuizQuestion[] = [
  {
    id: 'q-propmgmt-001',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, what is the maximum security deposit a landlord can charge a residential tenant under the VRLTA?',
    options: [
      { id: 'a', text: 'One month\'s rent', isCorrect: false },
      { id: 'b', text: 'Two months\' rent', isCorrect: true },
      { id: 'c', text: 'Three months\' rent', isCorrect: false },
      { id: 'd', text: 'There is no statutory limit', isCorrect: false },
    ],
    explanation:
      'Under the Virginia Residential Landlord and Tenant Act (VRLTA), the maximum security deposit a landlord may charge is two months\' rent. The deposit must be held in a separate escrow account at a federally insured institution in Virginia.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-002',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager receives a rent payment on Monday afternoon. By when must the funds be deposited into the trust account under Virginia regulations?',
    options: [
      { id: 'a', text: 'Immediately upon receipt', isCorrect: false },
      { id: 'b', text: 'By the end of the next business day (Tuesday)', isCorrect: true },
      { id: 'c', text: 'Within 5 business days', isCorrect: false },
      { id: 'd', text: 'Within 30 days', isCorrect: false },
    ],
    explanation:
      'Virginia regulations require that funds received on behalf of a client be deposited into the trust (escrow) account by the end of the next business day after receipt. Delaying deposit beyond this deadline is a violation subject to disciplinary action by DPOR.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-003',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia property manager refuses to rent an apartment to a prospective tenant solely because the tenant plans to pay with a Housing Choice Voucher (Section 8). Which law has the property manager violated?',
    options: [
      { id: 'a', text: 'Federal Fair Housing Act only', isCorrect: false },
      { id: 'b', text: 'Virginia Fair Housing Act (source of funds protection)', isCorrect: true },
      { id: 'c', text: 'Americans with Disabilities Act', isCorrect: false },
      { id: 'd', text: 'No law has been violated because landlords can choose payment methods', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Fair Housing Act includes "source of funds" as a protected class, which means landlords and property managers cannot refuse to rent solely because the applicant will pay with a Housing Choice Voucher or other lawful source of income. Federal Fair Housing law does not include source of funds as a protected class, making this a Virginia-specific protection.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-004',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is classified as a capital expenditure rather than an operating expense for a rental property?',
    options: [
      { id: 'a', text: 'Monthly pest control service', isCorrect: false },
      { id: 'b', text: 'Repainting a unit between tenants', isCorrect: false },
      { id: 'c', text: 'Complete roof replacement', isCorrect: true },
      { id: 'd', text: 'Replacing a broken faucet', isCorrect: false },
    ],
    explanation:
      'A capital expenditure (CapEx) is a major improvement that extends the useful life of the property or adds significant value, such as a full roof replacement. Operating expenses are routine, recurring costs like pest control, repainting, and minor repairs. Capital expenditures are depreciated over time for tax purposes rather than deducted in the year they occur.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-005',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia tenant has not paid rent for the month. Before the landlord can file an unlawful detainer action, what notice must be served?',
    options: [
      { id: 'a', text: '3-day notice to pay or quit', isCorrect: false },
      { id: 'b', text: '5-day pay or quit notice', isCorrect: true },
      { id: 'c', text: '10-day notice to vacate', isCorrect: false },
      { id: 'd', text: '30-day notice to cure or quit', isCorrect: false },
    ],
    explanation:
      'Under Virginia law, for nonpayment of rent in a month-to-month tenancy, the landlord must serve a 5-day pay or quit notice. If the tenant does not pay within the 5 days, the landlord may then file an unlawful detainer action in General District Court. The 30-day notice with 21 days to cure applies to lease violations other than nonpayment.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-006',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Who is the ONLY person legally authorized to physically remove a tenant from a property after an eviction judgment in Virginia?',
    options: [
      { id: 'a', text: 'The property manager', isCorrect: false },
      { id: 'b', text: 'The property owner', isCorrect: false },
      { id: 'c', text: 'The sheriff', isCorrect: true },
      { id: 'd', text: 'Any licensed real estate agent', isCorrect: false },
    ],
    explanation:
      'In Virginia, only the sheriff can execute a writ of possession and physically remove a tenant. Self-help eviction -- including changing locks, removing tenant belongings, or shutting off utilities -- is illegal and can result in the landlord owing the tenant damages. The property owner and manager must wait for the court process and sheriff execution.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-007',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Transaction Recovery Fund provides a maximum payout of what amount per claimant?',
    options: [
      { id: 'a', text: '$10,000', isCorrect: false },
      { id: 'b', text: '$20,000', isCorrect: true },
      { id: 'c', text: '$50,000', isCorrect: false },
      { id: 'd', text: '$100,000', isCorrect: false },
    ],
    explanation:
      'The Virginia Transaction Recovery Fund, maintained by DPOR, pays a maximum of $20,000 per claimant and $50,000 per transaction. The $50,000 figure is the per-transaction cap, not the per-claimant limit. A payout triggers automatic license revocation for the licensee until the amount is repaid with interest.',
    difficulty: 'hard',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-008',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property management agreement should include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'The scope of the manager\'s authority', isCorrect: false },
      { id: 'b', text: 'Compensation structure and management fees', isCorrect: false },
      { id: 'c', text: 'A guaranteed minimum profit for the owner', isCorrect: true },
      { id: 'd', text: 'Trust account provisions for tenant funds', isCorrect: false },
    ],
    explanation:
      'A property management agreement includes the scope of authority, compensation terms, trust account provisions, property description, term, and termination provisions. No management agreement should guarantee a minimum profit to the owner because rental income depends on market conditions, vacancy rates, and expenses beyond the manager\'s control.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-009',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Under VRLTA, how much advance written notice must a landlord or property manager provide to a tenant before entering the rental unit for a non-emergency inspection?',
    options: [
      { id: 'a', text: '12 hours', isCorrect: false },
      { id: 'b', text: '24 hours', isCorrect: true },
      { id: 'c', text: '48 hours', isCorrect: false },
      { id: 'd', text: '72 hours', isCorrect: false },
    ],
    explanation:
      'Under VRLTA, the landlord or property manager must provide 24 hours\' written notice before entering a rental unit for inspections, maintenance, or showings. In an emergency threatening life or property, no notice is required.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-010',
    chapterId: 'property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager receives a discount from a plumbing company for sending them frequent repair work. The property manager does not disclose this discount to the property owner. This is a violation of which fiduciary duty?',
    options: [
      { id: 'a', text: 'Obedience', isCorrect: false },
      { id: 'b', text: 'Confidentiality', isCorrect: false },
      { id: 'c', text: 'Disclosure (and loyalty)', isCorrect: true },
      { id: 'd', text: 'Reasonable care', isCorrect: false },
    ],
    explanation:
      'Receiving undisclosed kickbacks or discounts from vendors violates the fiduciary duties of disclosure and loyalty. The property manager must inform the owner of all financial arrangements with vendors. Failing to disclose means the manager is potentially profiting at the owner\'s expense, which also breaches the duty of loyalty.',
    difficulty: 'hard',
    topicTag: 'property-management',
  },
]

// ── Chapter: common-interest-communities (10 questions) ────────────────────

const cicQuestions: QuizQuestion[] = [
  {
    id: 'q-cic-001',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Which Virginia state board is responsible for licensing common interest community managers?',
    options: [
      { id: 'a', text: 'Virginia Real Estate Board (VREB)', isCorrect: false },
      { id: 'b', text: 'Virginia Common Interest Community Board', isCorrect: true },
      { id: 'c', text: 'Virginia Board of Contractors', isCorrect: false },
      { id: 'd', text: 'Virginia Housing Development Authority', isCorrect: false },
    ],
    explanation:
      'The Virginia Common Interest Community Board, which operates within DPOR, is the regulatory body responsible for licensing CIC managers, registering common interest communities, and investigating complaints against CIC managers and associations.',
    difficulty: 'easy',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-002',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'In a condominium, common elements that are reserved for the exclusive use of one or more (but not all) unit owners are called:',
    options: [
      { id: 'a', text: 'Private elements', isCorrect: false },
      { id: 'b', text: 'Exclusive elements', isCorrect: false },
      { id: 'c', text: 'Limited common elements', isCorrect: true },
      { id: 'd', text: 'Reserved elements', isCorrect: false },
    ],
    explanation:
      'Limited common elements are portions of the common elements reserved for the exclusive use of specific unit owners. Examples include assigned parking spaces, balconies, and storage units. The unit owner does not own them outright but has exclusive use rights defined in the condominium instruments.',
    difficulty: 'easy',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-003',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, how many calendar days does a buyer have to cancel a contract after receiving the resale disclosure packet for a property governed by the Property Owners Association Act?',
    options: [
      { id: 'a', text: '5 business days', isCorrect: false },
      { id: 'b', text: '3 calendar days', isCorrect: true },
      { id: 'c', text: '7 calendar days', isCorrect: false },
      { id: 'd', text: '10 business days', isCorrect: false },
    ],
    explanation:
      'Under the POAA, the buyer has the right to cancel the contract within 3 calendar days of receiving the resale disclosure packet. This right is non-waivable. If the packet is never delivered, the buyer\'s cancellation right does not expire.',
    difficulty: 'easy',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-004',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Which Virginia statute governs planned unit developments (PUDs) and homeowners associations?',
    options: [
      { id: 'a', text: 'Virginia Condominium Act', isCorrect: false },
      { id: 'b', text: 'Virginia Residential Landlord and Tenant Act', isCorrect: false },
      { id: 'c', text: 'Property Owners Association Act (POAA)', isCorrect: true },
      { id: 'd', text: 'Virginia Real Estate License Law', isCorrect: false },
    ],
    explanation:
      'The Property Owners Association Act (POAA) is the primary Virginia statute governing planned unit developments, homeowners associations, and other planned communities. The Virginia Condominium Act is a separate statute that governs condominiums specifically.',
    difficulty: 'medium',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-005',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'A seller in a Virginia CIC fails to deliver the resale disclosure packet to the buyer before settlement. What is the buyer\'s cancellation right?',
    options: [
      { id: 'a', text: 'The buyer has no cancellation right once the contract is ratified', isCorrect: false },
      { id: 'b', text: 'The buyer can cancel within 30 days of settlement', isCorrect: false },
      { id: 'c', text: 'The buyer can cancel at any time before settlement', isCorrect: true },
      { id: 'd', text: 'The buyer must petition the court for rescission', isCorrect: false },
    ],
    explanation:
      'If the resale disclosure packet is never delivered to the buyer, the buyer\'s statutory right to cancel does not expire. The buyer can cancel at any time before settlement. This right cannot be waived by contract provision.',
    difficulty: 'medium',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-006',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Under the POAA, associations with annual assessments of $10,000 or more must conduct a reserve study at least once every:',
    options: [
      { id: 'a', text: '3 years', isCorrect: false },
      { id: 'b', text: '5 years', isCorrect: true },
      { id: 'c', text: '7 years', isCorrect: false },
      { id: 'd', text: '10 years', isCorrect: false },
    ],
    explanation:
      'Under the Property Owners Association Act, associations with annual assessments of $10,000 or more must conduct a reserve study at least once every 5 years. The findings must be included in the resale disclosure packet and used to maintain an adequate reserve fund.',
    difficulty: 'medium',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-007',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'In a cooperative (co-op), a buyer purchases:',
    options: [
      { id: 'a', text: 'Fee simple title to an individual unit', isCorrect: false },
      { id: 'b', text: 'A life estate in the unit', isCorrect: false },
      { id: 'c', text: 'Shares in a corporation plus a proprietary lease', isCorrect: true },
      { id: 'd', text: 'An undivided interest in the entire property as tenants in common', isCorrect: false },
    ],
    explanation:
      'In a cooperative, the entire property is owned by a corporation. Buyers purchase shares in the corporation, which entitles them to a proprietary lease granting occupancy of a specific unit. The buyer owns personal property (shares) rather than real property.',
    difficulty: 'medium',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-008',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the lien for 6 months of unpaid CIC assessments is significant because it:',
    options: [
      { id: 'a', text: 'Is automatically waived if the unit is sold', isCorrect: false },
      { id: 'b', text: 'May take priority over a first deed of trust in certain situations', isCorrect: true },
      { id: 'c', text: 'Cannot be enforced through foreclosure', isCorrect: false },
      { id: 'd', text: 'Must be approved by the CIC Board before it attaches', isCorrect: false },
    ],
    explanation:
      'In Virginia, the lien for 6 months of unpaid assessments has a limited priority (sometimes called a "super lien") that may take precedence over even a first deed of trust in certain situations. This gives CIC associations significant enforcement power for collecting delinquent assessments.',
    difficulty: 'hard',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-009',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is NOT required to be included in a Virginia resale disclosure packet under the POAA?',
    options: [
      { id: 'a', text: 'The association\'s current annual budget', isCorrect: false },
      { id: 'b', text: 'Pending litigation involving the association', isCorrect: false },
      { id: 'c', text: 'The original purchase price paid by the seller', isCorrect: true },
      { id: 'd', text: 'The most recent reserve study', isCorrect: false },
    ],
    explanation:
      'The resale disclosure packet must include governing documents, financial statements, assessment information, reserve study, insurance coverage, pending litigation, and more. However, the original purchase price paid by the current seller is not a required element of the resale disclosure packet.',
    difficulty: 'hard',
    topicTag: 'virginia-regulations',
  },
  {
    id: 'q-cic-010',
    chapterId: 'common-interest-communities',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia courts generally apply which legal standard when reviewing decisions made by a CIC board of directors?',
    options: [
      { id: 'a', text: 'Strict scrutiny', isCorrect: false },
      { id: 'b', text: 'Preponderance of evidence', isCorrect: false },
      { id: 'c', text: 'The business judgment rule', isCorrect: true },
      { id: 'd', text: 'De novo review', isCorrect: false },
    ],
    explanation:
      'Virginia courts apply the business judgment rule to CIC board decisions. Under this standard, courts will generally not second-guess board decisions that were made in good faith, within the board\'s authority, and on an informed basis. This provides significant deference to board actions that meet these criteria.',
    difficulty: 'hard',
    topicTag: 'virginia-regulations',
  },
]

// ── Combined Export ──────────────────────────────────────────────────────────

export const MOD456_QUESTIONS: QuizQuestion[] = [
  ...mortgageTypesQuestions,
  ...loanProcessQuestions,
  ...appraisalMethodsQuestions,
  ...mathCalculationsQuestions,
  ...practiceQuestions,
  ...disclosuresQuestions,
  ...closingProceduresQuestions,
  ...transferTitleQuestions,
  ...dporRulesQuestions,
  ...vaContractFormsQuestions,
  ...vaClosingPracticesQuestions,
  ...continuingEdQuestions,
  ...propertyManagementQuestions,
  ...cicQuestions,
]
