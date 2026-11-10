import type { QuizQuestion } from './course-questions'

// ── Module 11: Commercial & Investment Real Estate ──────────────────────────

// ── Chapter: commercial-property-types (10 questions) ───────────────────────

const commercialPropertyTypesQuestions: QuizQuestion[] = [
  {
    id: 'q-commprop-001',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A Class B office building is BEST described as:',
    options: [
      { id: 'a', text: 'A premier building in a prime location with top-tier finishes and advanced infrastructure', isCorrect: false },
      { id: 'b', text: 'A functional building offering moderate rents, often targeted by value-add investors', isCorrect: true },
      { id: 'c', text: 'An older building in a less desirable location requiring significant capital improvements', isCorrect: false },
      { id: 'd', text: 'A mixed-use building that combines retail and office space in a single structure', isCorrect: false },
    ],
    explanation:
      'Class B office buildings offer functional space at moderate rents. They may be older Class A buildings that have not been renovated or newer buildings in secondary locations. Investors often target them for value-add strategies because renovations can push them toward Class A status.',
    difficulty: 'easy',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-002',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'In a retail shopping center, an anchor tenant is significant primarily because the anchor:',
    options: [
      { id: 'a', text: 'Pays the highest rent per square foot of any tenant in the center', isCorrect: false },
      { id: 'b', text: 'Draws foot traffic that benefits smaller tenants throughout the center', isCorrect: true },
      { id: 'c', text: 'Owns a portion of the shopping center through a joint venture', isCorrect: false },
      { id: 'd', text: 'Is required by Virginia zoning law in centers over 100,000 square feet', isCorrect: false },
    ],
    explanation:
      'An anchor tenant is a large, well-known retailer whose presence draws foot traffic that benefits smaller tenants. Lease agreements often include co-tenancy clauses allowing smaller tenants to reduce rent or exit their lease if the anchor tenant leaves. Anchor tenants actually often pay lower per-square-foot rent due to their drawing power.',
    difficulty: 'easy',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-003',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of industrial property combines office and warehouse space and is often used by technology firms or light assembly operations?',
    options: [
      { id: 'a', text: 'Distribution center', isCorrect: false },
      { id: 'b', text: 'Manufacturing facility', isCorrect: false },
      { id: 'c', text: 'Flex space', isCorrect: true },
      { id: 'd', text: 'Power center', isCorrect: false },
    ],
    explanation:
      'Flex space is a hybrid building type that combines office and warehouse space. It is commonly used by technology firms, light assembly operations, or research companies. Distribution centers and manufacturing facilities are dedicated-use industrial properties.',
    difficulty: 'easy',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-004',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Multifamily residential buildings are classified as commercial for financing purposes when they contain:',
    options: [
      { id: 'a', text: '2 or more units', isCorrect: false },
      { id: 'b', text: '4 or more units', isCorrect: false },
      { id: 'c', text: '5 or more units', isCorrect: true },
      { id: 'd', text: '10 or more units', isCorrect: false },
    ],
    explanation:
      'Buildings with five or more residential units are classified as commercial for financing purposes. Properties with 1-4 units are classified as residential. This distinction affects loan products, underwriting standards, and regulatory requirements.',
    difficulty: 'medium',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-005',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A developer wants to build a walkable community with retail, office, and residential all in separate buildings within the same project. This is an example of:',
    options: [
      { id: 'a', text: 'Vertical mixed-use development', isCorrect: false },
      { id: 'b', text: 'Horizontal mixed-use development', isCorrect: true },
      { id: 'c', text: 'Transit-oriented development', isCorrect: false },
      { id: 'd', text: 'Adaptive reuse', isCorrect: false },
    ],
    explanation:
      'Horizontal mixed-use separates different uses into different buildings within a single development. Vertical mixed-use stacks different uses within a single building (e.g., retail on the ground floor, office in the middle, residential on top).',
    difficulty: 'medium',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-006',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Revenue Per Available Room (RevPAR) is calculated by multiplying:',
    options: [
      { id: 'a', text: 'Total rooms by the nightly rate', isCorrect: false },
      { id: 'b', text: 'Average daily rate (ADR) by the occupancy rate', isCorrect: true },
      { id: 'c', text: 'Net operating income by the capitalization rate', isCorrect: false },
      { id: 'd', text: 'Gross revenue by the number of available rooms', isCorrect: false },
    ],
    explanation:
      'RevPAR is the key performance metric for hotel properties, calculated as Average Daily Rate (ADR) multiplied by the occupancy rate. It captures both pricing power and occupancy performance in a single number, making it the standard benchmark for hotel valuation.',
    difficulty: 'medium',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-007',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia developer plans to convert a historic warehouse into loft apartments with ground-floor retail. To offset rehabilitation costs, the developer can combine the federal historic tax credit with the Virginia historic rehabilitation tax credit for a combined offset of:',
    options: [
      { id: 'a', text: '20% of qualified rehabilitation expenditures', isCorrect: false },
      { id: 'b', text: '25% of qualified rehabilitation expenditures', isCorrect: false },
      { id: 'c', text: '45% of qualified rehabilitation expenditures', isCorrect: true },
      { id: 'd', text: '50% of qualified rehabilitation expenditures', isCorrect: false },
    ],
    explanation:
      'The federal historic tax credit provides a 20% credit on qualified rehabilitation expenditures for certified historic structures, and Virginia offers an additional 25% state tax credit. Combined, developers can offset 45% of rehabilitation costs, making Virginia one of the most favorable states for adaptive reuse projects.',
    difficulty: 'hard',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-008',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'An ambulatory surgery center (ASC) in Virginia must obtain which document from the Virginia Department of Health before it can operate?',
    options: [
      { id: 'a', text: 'A commercial use permit', isCorrect: false },
      { id: 'b', text: 'A certificate of need (CON)', isCorrect: true },
      { id: 'c', text: 'A conditional use variance', isCorrect: false },
      { id: 'd', text: 'A DPOR medical facility license', isCorrect: false },
    ],
    explanation:
      'Virginia requires ambulatory surgery centers to obtain a certificate of need (CON) from the Virginia Department of Health. The CON process evaluates whether the community needs the facility, which directly affects the property\'s value and marketability. This is a regulatory requirement specific to healthcare facilities.',
    difficulty: 'hard',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-009',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A property that includes a hotel brand, management team, furnishings, and the real estate itself is valued using the concept of:',
    options: [
      { id: 'a', text: 'Replacement cost', isCorrect: false },
      { id: 'b', text: 'Going-concern value', isCorrect: true },
      { id: 'c', text: 'Insurable value', isCorrect: false },
      { id: 'd', text: 'Assessed value', isCorrect: false },
    ],
    explanation:
      'Going-concern value includes the value of the business operation (brand, management, furnishings, franchise agreement) in addition to the real estate itself. Hotels and other special purpose properties are typically valued as going concerns because the business and the real estate are intertwined.',
    difficulty: 'medium',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-commprop-010',
    chapterId: 'commercial-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Which zoning approach regulates building form (height, setback, frontage) rather than land use, making mixed-use development easier to approve?',
    options: [
      { id: 'a', text: 'Euclidean zoning', isCorrect: false },
      { id: 'b', text: 'Planned unit development (PUD)', isCorrect: false },
      { id: 'c', text: 'Form-based code', isCorrect: true },
      { id: 'd', text: 'Overlay district', isCorrect: false },
    ],
    explanation:
      'Form-based codes regulate the physical form of buildings rather than separating land uses into distinct zones. Many Virginia localities have adopted form-based codes to facilitate mixed-use development. Traditional Euclidean zoning separates uses into residential, commercial, and industrial zones.',
    difficulty: 'hard',
    topicTag: 'commercial-property-types',
  },
]

// ── Chapter: commercial-leases (10 questions) ──────────────────────────────

const commercialLeasesQuestions: QuizQuestion[] = [
  {
    id: 'q-commlease-001',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'In a triple net (NNN) lease, the tenant is responsible for paying base rent PLUS:',
    options: [
      { id: 'a', text: 'Property taxes only', isCorrect: false },
      { id: 'b', text: 'Property taxes and insurance only', isCorrect: false },
      { id: 'c', text: 'Property taxes, insurance, and maintenance', isCorrect: true },
      { id: 'd', text: 'All expenses including debt service on the landlord\'s mortgage', isCorrect: false },
    ],
    explanation:
      'A triple net (NNN) lease requires the tenant to pay base rent plus the three "nets": property taxes, insurance, and maintenance (including common area upkeep). Debt service is never a tenant responsibility. NNN leases are the most common structure for single-tenant retail and industrial properties.',
    difficulty: 'easy',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-002',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A gross lease is also commonly referred to as a:',
    options: [
      { id: 'a', text: 'Bondable lease', isCorrect: false },
      { id: 'b', text: 'Full-service lease', isCorrect: true },
      { id: 'c', text: 'Percentage lease', isCorrect: false },
      { id: 'd', text: 'Step-up lease', isCorrect: false },
    ],
    explanation:
      'A gross lease is also called a full-service lease because the tenant pays a single, all-inclusive rental amount, and the landlord pays all operating expenses. Gross leases are most common in multi-tenant office buildings. A bondable lease is an absolute net lease, and a step-up lease involves fixed rent increases.',
    difficulty: 'easy',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-003',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A retail tenant pays $60,000 per year in base rent under a percentage lease with a 6% rate. What is the natural breakpoint?',
    options: [
      { id: 'a', text: '$360,000', isCorrect: false },
      { id: 'b', text: '$600,000', isCorrect: false },
      { id: 'c', text: '$1,000,000', isCorrect: true },
      { id: 'd', text: '$1,200,000', isCorrect: false },
    ],
    explanation:
      'The natural breakpoint is calculated by dividing annual base rent by the percentage rate: $60,000 / 0.06 = $1,000,000. The tenant pays 6% of gross sales only on the amount exceeding $1,000,000. Below the breakpoint, the tenant pays only base rent.',
    difficulty: 'medium',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-004',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'In a gross lease with a base year provision, the tenant pays its proportionate share of:',
    options: [
      { id: 'a', text: 'All operating expenses from the first day of the lease', isCorrect: false },
      { id: 'b', text: 'Operating expense increases above the amount incurred in the first year of the lease', isCorrect: true },
      { id: 'c', text: 'Only property taxes and insurance above the base year amount', isCorrect: false },
      { id: 'd', text: 'A fixed dollar amount that escalates 3% annually', isCorrect: false },
    ],
    explanation:
      'A base year provision in a gross lease means the landlord covers operating expenses up to the amount incurred in the first year (the base year). In subsequent years, the tenant pays its proportionate share of any increases above that baseline. This protects the landlord from rising costs while giving the tenant predictable first-year occupancy costs.',
    difficulty: 'medium',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-005',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A tenant leases 4,000 square feet in a 100,000-square-foot shopping center. Total annual CAM expenses are $250,000. What is the tenant\'s annual CAM obligation?',
    options: [
      { id: 'a', text: '$4,000', isCorrect: false },
      { id: 'b', text: '$10,000', isCorrect: true },
      { id: 'c', text: '$25,000', isCorrect: false },
      { id: 'd', text: '$40,000', isCorrect: false },
    ],
    explanation:
      'The tenant\'s pro rata share is 4,000 / 100,000 = 4%. The annual CAM obligation is 4% of $250,000 = $10,000, or approximately $833 per month. Pro rata share is the standard method for allocating CAM charges among tenants in a multi-tenant property.',
    difficulty: 'medium',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-006',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'The difference between usable square footage and rentable square footage is expressed as the:',
    options: [
      { id: 'a', text: 'Capitalization rate', isCorrect: false },
      { id: 'b', text: 'Vacancy rate', isCorrect: false },
      { id: 'c', text: 'Load factor', isCorrect: true },
      { id: 'd', text: 'Absorption rate', isCorrect: false },
    ],
    explanation:
      'The load factor (also called the common area factor or add-on factor) represents the difference between usable and rentable square footage. Rentable SF = Usable SF x (1 + Load Factor). A building with a 15% load factor means a tenant occupying 1,000 usable SF is billed for 1,150 rentable SF. Load factors in office buildings typically range from 10% to 20%.',
    difficulty: 'medium',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-007',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A CAM cap is designed to protect the:',
    options: [
      { id: 'a', text: 'Landlord from tenants who default on CAM payments', isCorrect: false },
      { id: 'b', text: 'Tenant from sharp, unpredictable increases in controllable CAM expenses', isCorrect: true },
      { id: 'c', text: 'Property manager from liability for incorrect CAM calculations', isCorrect: false },
      { id: 'd', text: 'Lender from insufficient property income', isCorrect: false },
    ],
    explanation:
      'A CAM cap limits the annual increase in controllable CAM expenses, typically to 3-5% per year, protecting tenants from unpredictable cost spikes. Non-controllable expenses such as property taxes, insurance, and utilities are usually excluded from the cap because the landlord cannot control them.',
    difficulty: 'easy',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-008',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A tenant improvement (TI) allowance is BEST described as:',
    options: [
      { id: 'a', text: 'A reduction in base rent during the first year of occupancy', isCorrect: false },
      { id: 'b', text: 'A dollar amount the landlord contributes toward customizing the space for the tenant\'s use', isCorrect: true },
      { id: 'c', text: 'A security deposit held in escrow for property maintenance', isCorrect: false },
      { id: 'd', text: 'An insurance policy covering damage to tenant fixtures', isCorrect: false },
    ],
    explanation:
      'A TI allowance is a dollar amount (usually expressed per square foot) that the landlord contributes toward the cost of building out or customizing the space for the tenant. TI allowances are negotiated as part of the lease and are one of the most significant economic terms in a commercial deal. They are different from free rent (abated rent), which is a period when no rent is due.',
    difficulty: 'easy',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-009',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'A retail tenant\'s percentage lease has a $48,000 annual base rent, a 6% percentage rate, and an artificial breakpoint of $900,000. If the tenant\'s annual gross sales are $1,100,000, what is the total annual rent?',
    options: [
      { id: 'a', text: '$48,000', isCorrect: false },
      { id: 'b', text: '$54,000', isCorrect: false },
      { id: 'c', text: '$60,000', isCorrect: true },
      { id: 'd', text: '$114,000', isCorrect: false },
    ],
    explanation:
      'Total rent = base rent + percentage rent above the breakpoint. Sales above the artificial breakpoint: $1,100,000 - $900,000 = $200,000. Percentage rent: $200,000 x 6% = $12,000. Total annual rent: $48,000 + $12,000 = $60,000. Note the artificial breakpoint ($900,000) differs from the natural breakpoint ($48,000 / 0.06 = $800,000).',
    difficulty: 'hard',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-commlease-010',
    chapterId: 'commercial-leases',
    quizType: 'chapter_quiz',
    questionText:
      'Which expenses should NEVER be included in Common Area Maintenance (CAM) charges passed through to tenants?',
    options: [
      { id: 'a', text: 'Parking lot maintenance and landscaping', isCorrect: false },
      { id: 'b', text: 'Security, janitorial services, and common area utilities', isCorrect: false },
      { id: 'c', text: 'Leasing commissions, capital improvements benefiting the landlord, and debt service', isCorrect: true },
      { id: 'd', text: 'Property management fees and snow removal', isCorrect: false },
    ],
    explanation:
      'CAM charges should not include capital improvements that benefit the landlord beyond normal maintenance, costs of leasing vacant space (commissions, tenant improvements), the landlord\'s income taxes, or debt service. These are ownership costs, not operating expenses shared by tenants. Sophisticated tenants negotiate the right to audit CAM statements to verify compliance.',
    difficulty: 'hard',
    topicTag: 'commercial-leases',
  },
]

// ── Chapter: real-estate-investment-strategies (10 questions) ───────────────

const investmentStrategiesQuestions: QuizQuestion[] = [
  {
    id: 'q-invest-m11-001',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'In a real estate syndication, the party who identifies the property, arranges financing, and manages the investment is called the:',
    options: [
      { id: 'a', text: 'Limited partner', isCorrect: false },
      { id: 'b', text: 'General partner (syndicator)', isCorrect: true },
      { id: 'c', text: 'Trustee', isCorrect: false },
      { id: 'd', text: 'Property manager', isCorrect: false },
    ],
    explanation:
      'In a syndication, the general partner (syndicator or sponsor) identifies the property, arranges financing, manages the investment, and makes day-to-day decisions. Limited partners provide capital but have no active management role and enjoy limited liability. The syndicator typically earns fees and a promoted interest (carry) in addition to any equity investment.',
    difficulty: 'easy',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-002',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'A Real Estate Investment Trust (REIT) must distribute at least what percentage of its taxable income to shareholders to maintain its tax-advantaged status?',
    options: [
      { id: 'a', text: '50%', isCorrect: false },
      { id: 'b', text: '75%', isCorrect: false },
      { id: 'c', text: '90%', isCorrect: true },
      { id: 'd', text: '100%', isCorrect: false },
    ],
    explanation:
      'To qualify as a REIT and avoid corporate-level income tax, the entity must distribute at least 90% of its taxable income to shareholders as dividends. REITs must also derive at least 75% of gross income from real estate sources and have at least 75% of total assets in real estate, cash, or government securities.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-003',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'Which type of REIT invests primarily in mortgage-backed securities and real estate loans rather than physical properties?',
    options: [
      { id: 'a', text: 'Equity REIT', isCorrect: false },
      { id: 'b', text: 'Mortgage REIT', isCorrect: true },
      { id: 'c', text: 'Hybrid REIT', isCorrect: false },
      { id: 'd', text: 'Private REIT', isCorrect: false },
    ],
    explanation:
      'Mortgage REITs (mREITs) invest in mortgages, mortgage-backed securities, and real estate debt rather than owning physical properties. They earn income from the interest on these financial instruments. Equity REITs own and operate income-producing real estate. Hybrid REITs combine both equity ownership and mortgage lending.',
    difficulty: 'easy',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-004',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'Real estate crowdfunding allows investors to participate in commercial real estate deals through online platforms. Offerings to non-accredited investors are typically made under:',
    options: [
      { id: 'a', text: 'SEC Regulation A+', isCorrect: false },
      { id: 'b', text: 'SEC Regulation D, Rule 506(b)', isCorrect: false },
      { id: 'c', text: 'SEC Regulation Crowdfunding (Reg CF)', isCorrect: true },
      { id: 'd', text: 'SEC Regulation S', isCorrect: false },
    ],
    explanation:
      'SEC Regulation Crowdfunding (Reg CF) allows issuers to raise capital from both accredited and non-accredited investors through registered online platforms, with investment limits based on income and net worth. Regulation D offerings are generally limited to accredited investors. Regulation A+ allows larger offerings but has more extensive filing requirements.',
    difficulty: 'hard',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-005',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'An investor purchases a property for $1,000,000 with $250,000 in cash and a $750,000 mortgage. The property generates $60,000 in annual pre-tax cash flow after debt service. What is the cash-on-cash return?',
    options: [
      { id: 'a', text: '6%', isCorrect: false },
      { id: 'b', text: '8%', isCorrect: false },
      { id: 'c', text: '24%', isCorrect: true },
      { id: 'd', text: '60%', isCorrect: false },
    ],
    explanation:
      'Cash-on-cash return = Annual Pre-Tax Cash Flow / Total Cash Invested. $60,000 / $250,000 = 24%. This metric measures the actual return on the investor\'s equity, unlike cap rate, which ignores financing. It is one of the most commonly used metrics by real estate investors to evaluate leveraged deals.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-006',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'Interest rate risk in real estate investing refers to the risk that:',
    options: [
      { id: 'a', text: 'The property will not generate enough income to cover operating expenses', isCorrect: false },
      { id: 'b', text: 'Rising interest rates will increase borrowing costs and reduce property values', isCorrect: true },
      { id: 'c', text: 'The investor cannot sell the property quickly without a significant price reduction', isCorrect: false },
      { id: 'd', text: 'Tenants will default on their lease obligations', isCorrect: false },
    ],
    explanation:
      'Interest rate risk is the danger that rising rates will increase the cost of financing (especially for variable-rate loans) and compress property values (because higher cap rates produce lower values). The inability to sell quickly is liquidity risk, and tenant default is credit risk.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-007',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'The Debt Service Coverage Ratio (DSCR) is calculated by dividing:',
    options: [
      { id: 'a', text: 'Gross income by total operating expenses', isCorrect: false },
      { id: 'b', text: 'Net operating income by annual debt service', isCorrect: true },
      { id: 'c', text: 'Purchase price by the loan amount', isCorrect: false },
      { id: 'd', text: 'Cash flow after debt service by total cash invested', isCorrect: false },
    ],
    explanation:
      'DSCR = NOI / Annual Debt Service (mortgage payments). Lenders typically require a DSCR of 1.20 to 1.25 or higher. A DSCR below 1.0 means the property does not generate enough income to cover its mortgage payments, which is a serious red flag for lenders.',
    difficulty: 'easy',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-008',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'Which investment metric accounts for the time value of money and considers all future cash flows, including the eventual sale of the property?',
    options: [
      { id: 'a', text: 'Capitalization rate', isCorrect: false },
      { id: 'b', text: 'Cash-on-cash return', isCorrect: false },
      { id: 'c', text: 'Internal rate of return (IRR)', isCorrect: true },
      { id: 'd', text: 'Gross rent multiplier', isCorrect: false },
    ],
    explanation:
      'The Internal Rate of Return (IRR) is the discount rate that makes the net present value of all future cash flows (including operating income and the sale proceeds) equal to zero. It accounts for the time value of money and is considered the most comprehensive measure of investment performance.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-009',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'An investor is concerned about the risk that a property cannot be sold quickly without a significant price reduction. This is an example of:',
    options: [
      { id: 'a', text: 'Market risk', isCorrect: false },
      { id: 'b', text: 'Interest rate risk', isCorrect: false },
      { id: 'c', text: 'Liquidity risk', isCorrect: true },
      { id: 'd', text: 'Legislative risk', isCorrect: false },
    ],
    explanation:
      'Liquidity risk is the risk that an investor cannot convert the real estate investment to cash quickly without accepting a significant discount from fair market value. Real estate is inherently less liquid than stocks or bonds because transactions take weeks or months to complete and require substantial transaction costs.',
    difficulty: 'easy',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-invest-m11-010',
    chapterId: 'real-estate-investment-strategies',
    quizType: 'chapter_quiz',
    questionText:
      'A property has an NOI of $150,000 and a cap rate of 6%. What is the property\'s estimated value?',
    options: [
      { id: 'a', text: '$900,000', isCorrect: false },
      { id: 'b', text: '$2,000,000', isCorrect: false },
      { id: 'c', text: '$2,500,000', isCorrect: true },
      { id: 'd', text: '$9,000,000', isCorrect: false },
    ],
    explanation:
      'Value = NOI / Cap Rate = $150,000 / 0.06 = $2,500,000. A lower cap rate indicates lower perceived risk and results in a higher property value. If the cap rate were 8%, the same property would be valued at only $1,875,000. This formula is the cornerstone of commercial real estate valuation.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
]

// ── Chapter: property-management (10 questions) ────────────────────────────

const propertyManagementQuestions: QuizQuestion[] = [
  {
    id: 'q-propmgmt-001',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, a person who manages real property for compensation on behalf of a property owner must hold a:',
    options: [
      { id: 'a', text: 'General contractor\'s license', isCorrect: false },
      { id: 'b', text: 'Virginia real estate license', isCorrect: true },
      { id: 'c', text: 'Property management certificate from NAR', isCorrect: false },
      { id: 'd', text: 'Business license only; no real estate license is required', isCorrect: false },
    ],
    explanation:
      'Virginia law requires anyone who manages real property for compensation on behalf of a property owner to hold a Virginia real estate license. Property management activities such as collecting rent, negotiating leases, and advertising rentals are considered real estate activities under Virginia Code. Exemptions are limited and narrowly defined.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-002',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property management agreement should include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'The scope of the manager\'s authority and responsibilities', isCorrect: false },
      { id: 'b', text: 'The compensation structure and fee schedule', isCorrect: false },
      { id: 'c', text: 'A guarantee of a specific occupancy rate or rental income', isCorrect: true },
      { id: 'd', text: 'The term of the agreement and termination provisions', isCorrect: false },
    ],
    explanation:
      'A property management agreement should define the manager\'s authority, compensation, term, termination provisions, reporting requirements, and insurance obligations. It should never guarantee specific occupancy rates or rental income, as these depend on market conditions outside the manager\'s control. Such guarantees could expose the manager to breach of contract claims.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-003',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager\'s fiduciary duty of accounting requires the manager to:',
    options: [
      { id: 'a', text: 'Maximize rental income above all other considerations', isCorrect: false },
      { id: 'b', text: 'Maintain accurate financial records and provide regular reports to the owner', isCorrect: true },
      { id: 'c', text: 'Pay all property expenses from the manager\'s personal funds', isCorrect: false },
      { id: 'd', text: 'Disclose the owner\'s financial situation to prospective tenants', isCorrect: false },
    ],
    explanation:
      'The fiduciary duty of accounting requires property managers to keep accurate records of all income and expenses, maintain tenant security deposits in accordance with Virginia law, and provide regular financial reports to the property owner. This duty is fundamental to the trust relationship between manager and owner.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-004',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Virginia Residential Landlord and Tenant Act (VRLTA), a landlord may charge a maximum security deposit of:',
    options: [
      { id: 'a', text: 'One month\'s rent', isCorrect: false },
      { id: 'b', text: 'Two months\' rent', isCorrect: true },
      { id: 'c', text: 'Three months\' rent', isCorrect: false },
      { id: 'd', text: 'There is no maximum; it is negotiable', isCorrect: false },
    ],
    explanation:
      'Under the VRLTA (Virginia Code 55.1-1226), a landlord may not demand or receive a security deposit in excess of two months\' periodic rent. The deposit must be held in a separate escrow account in a Virginia financial institution, and the landlord must return the deposit (less any lawful deductions) within 45 days of move-out.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-005',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager discovers that a rental property has a serious mold problem that could affect tenant health. The manager\'s duty is to:',
    options: [
      { id: 'a', text: 'Wait until the tenant complains before taking action', isCorrect: false },
      { id: 'b', text: 'Immediately notify the owner and take steps to address the health hazard', isCorrect: true },
      { id: 'c', text: 'Offer the tenant a rent reduction and note the issue in the file', isCorrect: false },
      { id: 'd', text: 'Disclose the issue only if the tenant asks directly', isCorrect: false },
    ],
    explanation:
      'Property managers have a fiduciary duty to the owner and a legal obligation to maintain habitable premises for tenants. Upon discovering a serious health hazard like mold, the manager must immediately notify the owner and take appropriate steps to address the problem. Failure to act could result in liability under the VRLTA, personal injury claims, and license disciplinary action.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-006',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Under the VRLTA, after a tenant vacates, the landlord must return the security deposit (less lawful deductions) within:',
    options: [
      { id: 'a', text: '15 days', isCorrect: false },
      { id: 'b', text: '30 days', isCorrect: false },
      { id: 'c', text: '45 days', isCorrect: true },
      { id: 'd', text: '60 days', isCorrect: false },
    ],
    explanation:
      'Under the VRLTA, the landlord must return the security deposit, with an itemized list of any deductions, within 45 days of the tenant vacating the property and delivering possession. Failure to comply may result in the landlord forfeiting the right to withhold any portion of the deposit and being liable for actual damages to the tenant.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-007',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is an exempt activity that does NOT require a Virginia real estate license for property management?',
    options: [
      { id: 'a', text: 'Collecting rent and negotiating leases for an owner', isCorrect: false },
      { id: 'b', text: 'Advertising rental properties and showing units to prospective tenants', isCorrect: false },
      { id: 'c', text: 'An owner managing their own property without compensation from a third party', isCorrect: true },
      { id: 'd', text: 'Performing maintenance at the direction of a licensed property manager', isCorrect: false },
    ],
    explanation:
      'Property owners managing their own property are exempt from the licensing requirement because they are not acting on behalf of another for compensation. Additionally, employees who perform only maintenance or clerical tasks (not leasing or management decisions) at the direction of a licensee may not need a license, though the licensee supervising them remains responsible.',
    difficulty: 'hard',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-008',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager who commingles tenant security deposits with operating funds has violated the duty of:',
    options: [
      { id: 'a', text: 'Loyalty', isCorrect: false },
      { id: 'b', text: 'Disclosure', isCorrect: false },
      { id: 'c', text: 'Accounting', isCorrect: true },
      { id: 'd', text: 'Obedience', isCorrect: false },
    ],
    explanation:
      'Commingling tenant security deposits with operating funds violates the fiduciary duty of accounting. Virginia law requires security deposits to be held in a separate escrow account in a Virginia financial institution. Commingling is one of the most common violations that leads to disciplinary action by the Virginia Real Estate Board.',
    difficulty: 'easy',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-009',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property management agreement that allows the manager to make emergency repairs up to $2,500 without prior owner approval is an example of:',
    options: [
      { id: 'a', text: 'Unauthorized practice', isCorrect: false },
      { id: 'b', text: 'A defined scope of authority within the management agreement', isCorrect: true },
      { id: 'c', text: 'A violation of the manager\'s fiduciary duty of obedience', isCorrect: false },
      { id: 'd', text: 'An automatic provision required by the VRLTA', isCorrect: false },
    ],
    explanation:
      'Management agreements should clearly define the manager\'s spending authority, including emergency repair thresholds. A provision allowing repairs up to a specified amount without prior approval is a common and prudent contract term that enables the manager to respond to emergencies without delay. This authority is granted by the agreement, not mandated by law.',
    difficulty: 'hard',
    topicTag: 'property-management',
  },
  {
    id: 'q-propmgmt-010',
    chapterId: 'commercial-property-management',
    quizType: 'chapter_quiz',
    questionText:
      'A property manager who accepts a kickback from a maintenance vendor without the owner\'s knowledge has violated the fiduciary duty of:',
    options: [
      { id: 'a', text: 'Obedience', isCorrect: false },
      { id: 'b', text: 'Accounting', isCorrect: false },
      { id: 'c', text: 'Loyalty', isCorrect: true },
      { id: 'd', text: 'Care', isCorrect: false },
    ],
    explanation:
      'The fiduciary duty of loyalty requires the property manager to place the owner\'s interests above their own and avoid conflicts of interest. Accepting undisclosed kickbacks or referral fees from vendors is a direct violation of this duty. The manager must disclose all potential conflicts and any compensation received from third parties related to the managed property.',
    difficulty: 'hard',
    topicTag: 'property-management',
  },
]

// ── Module 12: Risk Management & Professional Development ──────────────────

// ── Chapter: risk-management-insurance (10 questions) ──────────────────────

const riskManagementInsuranceQuestions: QuizQuestion[] = [
  {
    id: 'q-risk-001',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Errors and Omissions (E&O) insurance protects a real estate licensee against claims arising from:',
    options: [
      { id: 'a', text: 'Physical injuries sustained by a client during a property showing', isCorrect: false },
      { id: 'b', text: 'Negligent acts, errors, or omissions in the performance of professional duties', isCorrect: true },
      { id: 'c', text: 'Property damage caused by the licensee to a client\'s home', isCorrect: false },
      { id: 'd', text: 'Criminal fraud committed intentionally by the licensee', isCorrect: false },
    ],
    explanation:
      'E&O insurance covers claims of negligence, errors, or omissions in professional services, such as providing incorrect information about a property, failing to disclose a material fact, or making a mistake in contract preparation. It does not cover intentional fraud, criminal acts, or bodily injury (which is covered by general liability insurance).',
    difficulty: 'easy',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-002',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Competing real estate brokerages in a market agree to charge the same commission rate. This is an example of:',
    options: [
      { id: 'a', text: 'Market allocation', isCorrect: false },
      { id: 'b', text: 'A group boycott', isCorrect: false },
      { id: 'c', text: 'Price fixing', isCorrect: true },
      { id: 'd', text: 'A tie-in arrangement', isCorrect: false },
    ],
    explanation:
      'Price fixing occurs when competing businesses agree to set prices, fees, or commission rates rather than allowing the market to determine them. The Sherman Antitrust Act makes price fixing a criminal offense. Commission rates must always be negotiable between the brokerage and the client. Even informal discussions or "standard" rates among competitors can be evidence of price fixing.',
    difficulty: 'easy',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-003',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Several brokerages agree to refuse to cooperate with or show listings from a discount brokerage. This is an example of:',
    options: [
      { id: 'a', text: 'Price fixing', isCorrect: false },
      { id: 'b', text: 'A group boycott', isCorrect: true },
      { id: 'c', text: 'A tie-in arrangement', isCorrect: false },
      { id: 'd', text: 'Market allocation', isCorrect: false },
    ],
    explanation:
      'A group boycott occurs when two or more competitors agree to refuse to do business with a specific person or company to harm that party\'s ability to compete. Refusing to cooperate with a discount brokerage is a classic example. Group boycotts violate the Sherman Antitrust Act and can result in criminal penalties and treble (triple) damages in civil suits.',
    difficulty: 'medium',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-004',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Two competing brokerages agree that one will handle all listings on the north side of town while the other handles the south side. This is an example of:',
    options: [
      { id: 'a', text: 'Price fixing', isCorrect: false },
      { id: 'b', text: 'A group boycott', isCorrect: false },
      { id: 'c', text: 'Market allocation', isCorrect: true },
      { id: 'd', text: 'A tie-in arrangement', isCorrect: false },
    ],
    explanation:
      'Market allocation occurs when competitors agree to divide markets among themselves by geography, price range, or property type. This eliminates competition within each allocated segment. Like price fixing and group boycotts, market allocation is a per se violation of the Sherman Antitrust Act, meaning no justification or defense is accepted.',
    difficulty: 'medium',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-005',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'A broker requires a buyer to use the broker\'s affiliated title company as a condition of the broker\'s representation. This is an example of:',
    options: [
      { id: 'a', text: 'Price fixing', isCorrect: false },
      { id: 'b', text: 'A group boycott', isCorrect: false },
      { id: 'c', text: 'Market allocation', isCorrect: false },
      { id: 'd', text: 'A tie-in arrangement', isCorrect: true },
    ],
    explanation:
      'A tie-in arrangement (or tying agreement) occurs when a party conditions the sale of one product or service on the purchase of another. Requiring a client to use an affiliated service provider as a condition of representation violates antitrust law. Brokers may recommend affiliated services but must disclose the relationship and cannot require their use. RESPA also prohibits such arrangements.',
    difficulty: 'medium',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-006',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'The key distinction between fraud and negligent misrepresentation is:',
    options: [
      { id: 'a', text: 'Fraud involves real property; misrepresentation involves personal property', isCorrect: false },
      { id: 'b', text: 'Fraud requires intent to deceive; negligent misrepresentation involves carelessness without intent', isCorrect: true },
      { id: 'c', text: 'Fraud is a civil matter; misrepresentation is always criminal', isCorrect: false },
      { id: 'd', text: 'There is no distinction; the terms are interchangeable', isCorrect: false },
    ],
    explanation:
      'Fraud requires a knowing, intentional misstatement of material fact made with the intent to deceive, upon which the victim reasonably relies to their detriment. Negligent misrepresentation involves a false statement made carelessly or without reasonable grounds for believing it to be true, without intent to deceive. Both can result in liability, but fraud can also carry criminal penalties.',
    difficulty: 'medium',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-007',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Sherman Antitrust Act, a party found guilty of antitrust violations may be subject to:',
    options: [
      { id: 'a', text: 'A fine up to $1,000 and 30 days in jail', isCorrect: false },
      { id: 'b', text: 'Criminal penalties including fines up to $100 million for corporations and imprisonment for individuals', isCorrect: true },
      { id: 'c', text: 'Civil penalties only; antitrust violations are never criminal', isCorrect: false },
      { id: 'd', text: 'Loss of real estate license but no financial penalties', isCorrect: false },
    ],
    explanation:
      'The Sherman Antitrust Act carries severe penalties. Corporations can face fines up to $100 million per violation, and individuals can face up to $1 million in fines and up to 10 years in prison. In civil suits, victims can recover treble (triple) damages. These penalties reflect how seriously the government treats competition violations.',
    difficulty: 'hard',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-008',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'A licensee tells a prospective buyer that a property has "no foundation issues" without actually inspecting the foundation or reviewing any inspection reports. The property later turns out to have significant foundation damage. This is MOST likely:',
    options: [
      { id: 'a', text: 'Puffing, which is legally permissible', isCorrect: false },
      { id: 'b', text: 'Negligent misrepresentation', isCorrect: true },
      { id: 'c', text: 'Intentional fraud', isCorrect: false },
      { id: 'd', text: 'A permissible opinion about property condition', isCorrect: false },
    ],
    explanation:
      'Making a definitive statement about property condition without verification constitutes negligent misrepresentation. The licensee did not intend to deceive (which would be fraud), but made a careless factual assertion without reasonable grounds for believing it to be true. Licensees should never make definitive statements about conditions they have not personally verified or that are beyond their expertise.',
    difficulty: 'hard',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-009',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following statements about commission rates is TRUE under federal antitrust law?',
    options: [
      { id: 'a', text: 'The local MLS sets standard commission rates for all member brokerages', isCorrect: false },
      { id: 'b', text: 'Commission rates are always 6% as established by industry practice', isCorrect: false },
      { id: 'c', text: 'Commission rates are always negotiable between the brokerage and the client', isCorrect: true },
      { id: 'd', text: 'State law sets minimum commission rates that all brokerages must follow', isCorrect: false },
    ],
    explanation:
      'Commission rates are always negotiable. There is no "standard" commission rate set by the MLS, NAR, or state law. Any suggestion that rates are fixed, standard, or set by anyone other than the individual brokerage and client is a potential antitrust violation. Licensees must never discuss commission rates with competing brokerages.',
    difficulty: 'easy',
    topicTag: 'risk-management',
  },
  {
    id: 'q-risk-010',
    chapterId: 'risk-management-insurance',
    quizType: 'chapter_quiz',
    questionText:
      'A licensee can BEST reduce the risk of a negligent misrepresentation claim by:',
    options: [
      { id: 'a', text: 'Including a general disclaimer in all marketing materials', isCorrect: false },
      { id: 'b', text: 'Referring all questions to the seller and refusing to answer buyer inquiries', isCorrect: false },
      { id: 'c', text: 'Documenting all representations, verifying facts, and recommending professional inspections', isCorrect: true },
      { id: 'd', text: 'Purchasing the maximum E&O coverage available', isCorrect: false },
    ],
    explanation:
      'The best risk reduction strategy combines thorough documentation, fact verification, clear communication about the limits of the licensee\'s expertise, and recommending that clients obtain professional inspections and advice. E&O insurance provides financial protection after a claim, but prevention through proper practice is always the first line of defense.',
    difficulty: 'hard',
    topicTag: 'risk-management',
  },
]

// ── Chapter: virginia-advertising-technology-rules (10 questions) ───────────

const advertisingTechnologyQuestions: QuizQuestion[] = [
  {
    id: 'q-adtech-001',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Under VREB regulation 18 VAC 135-20-180, all real estate advertising by a licensee must include:',
    options: [
      { id: 'a', text: 'The licensee\'s personal phone number and home address', isCorrect: false },
      { id: 'b', text: 'The name of the brokerage firm as licensed with the Board', isCorrect: true },
      { id: 'c', text: 'The licensee\'s license number and expiration date', isCorrect: false },
      { id: 'd', text: 'The MLS listing number and commission rate offered', isCorrect: false },
    ],
    explanation:
      'VREB regulation 18 VAC 135-20-180 requires that all advertising by a licensee include the name of the brokerage firm as licensed with the Virginia Real Estate Board. The brokerage name must be clearly and legibly displayed. A licensee may include their own name, but the brokerage name is mandatory in all advertising, including online and social media.',
    difficulty: 'easy',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-002',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee creates a personal real estate page on social media. Under VREB advertising rules, the page MUST:',
    options: [
      { id: 'a', text: 'Use only the licensee\'s legal name as registered with DPOR', isCorrect: false },
      { id: 'b', text: 'Display the brokerage firm name as licensed with the Board', isCorrect: true },
      { id: 'c', text: 'Include a link to the DPOR website for license verification', isCorrect: false },
      { id: 'd', text: 'Be reviewed and approved by the principal broker before posting', isCorrect: false },
    ],
    explanation:
      'All advertising by a Virginia licensee, including social media profiles and posts, must include the brokerage firm name as licensed with the Board. This requirement applies to every platform: Facebook, Instagram, LinkedIn, TikTok, YouTube, personal websites, and any other medium where the licensee promotes real estate services.',
    difficulty: 'medium',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-003',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Internet Data Exchange (IDX) allows:',
    options: [
      { id: 'a', text: 'Licensees to display other brokers\' MLS listings on their own websites with proper attribution', isCorrect: true },
      { id: 'b', text: 'Consumers to directly access the full MLS database without a licensee', isCorrect: false },
      { id: 'c', text: 'Brokerages to share commission rate information with competing firms', isCorrect: false },
      { id: 'd', text: 'Property owners to list their homes on the MLS without a licensee', isCorrect: false },
    ],
    explanation:
      'IDX (Internet Data Exchange) is a policy and technology framework that allows MLS participants to display each other\'s active listings on their websites and apps, with proper attribution to the listing broker. IDX expanded consumer access to listing data while maintaining the cooperative nature of the MLS. Listings must be attributed to the listing broker, not presented as the displaying broker\'s own listings.',
    difficulty: 'medium',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-004',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Under the federal Do Not Call (DNC) rules, a real estate licensee may call a consumer on the National Do Not Call Registry if:',
    options: [
      { id: 'a', text: 'The licensee has a valid real estate license', isCorrect: false },
      { id: 'b', text: 'The consumer has an established business relationship with the licensee', isCorrect: true },
      { id: 'c', text: 'The call is made before 9:00 AM local time', isCorrect: false },
      { id: 'd', text: 'The licensee identifies themselves as a licensed agent at the start of the call', isCorrect: false },
    ],
    explanation:
      'An established business relationship (EBR) is one of the limited exceptions to the DNC rules. If a consumer has had a transaction with the licensee within the past 18 months, or made an inquiry or application within the past 3 months, the licensee may call even if the number is on the DNC Registry. The consumer can still request to be placed on the licensee\'s internal DNC list.',
    difficulty: 'medium',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-005',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Under the CAN-SPAM Act, commercial email from a real estate licensee must include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'A valid physical postal address of the sender', isCorrect: false },
      { id: 'b', text: 'A clear and conspicuous opt-out mechanism', isCorrect: false },
      { id: 'c', text: 'The licensee\'s real estate license number', isCorrect: true },
      { id: 'd', text: 'An accurate "From" line identifying who sent the message', isCorrect: false },
    ],
    explanation:
      'The CAN-SPAM Act requires commercial emails to include a valid physical postal address, a clear opt-out mechanism that is honored within 10 business days, accurate header and "From" information, and identification that the message is an advertisement. While VREB requires the brokerage name in advertising, the CAN-SPAM Act does not specifically require a license number.',
    difficulty: 'hard',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-006',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'A licensee creates a virtual tour of a listed property. Under Virginia advertising rules, the virtual tour:',
    options: [
      { id: 'a', text: 'Is exempt from advertising regulations because it is a technology tool, not an advertisement', isCorrect: false },
      { id: 'b', text: 'Must accurately represent the current condition of the property', isCorrect: true },
      { id: 'c', text: 'May include digitally enhanced features as long as a disclaimer is present', isCorrect: false },
      { id: 'd', text: 'Can only be published on the MLS, not on social media', isCorrect: false },
    ],
    explanation:
      'Virtual tours are considered advertising and must comply with all VREB advertising regulations. They must accurately represent the property\'s current condition and include the brokerage firm name. Digitally altering images to misrepresent the property (adding rooms, removing defects, enhancing views) constitutes misleading advertising and potentially fraud.',
    difficulty: 'medium',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-007',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia licensee wants to send unsolicited text messages to potential clients about available properties. Under federal law, the licensee:',
    options: [
      { id: 'a', text: 'May send texts freely as long as they include an opt-out option', isCorrect: false },
      { id: 'b', text: 'Must obtain prior express written consent before sending marketing text messages', isCorrect: true },
      { id: 'c', text: 'May send up to 5 texts per month to any phone number', isCorrect: false },
      { id: 'd', text: 'May send texts only during business hours (9 AM to 5 PM)', isCorrect: false },
    ],
    explanation:
      'The Telephone Consumer Protection Act (TCPA) requires prior express written consent before sending marketing text messages or making autodialed calls to cell phones. Violations carry penalties of $500 to $1,500 per message. This is a stricter standard than the DNC rules for voice calls, which allow calls based on an established business relationship.',
    difficulty: 'hard',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-008',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following social media posts by a Virginia licensee would violate VREB advertising regulations?',
    options: [
      { id: 'a', text: 'A post showing a sold property with the brokerage name and "Just Sold!" caption', isCorrect: false },
      { id: 'b', text: 'A personal Instagram story promoting a listing without mentioning the brokerage name', isCorrect: true },
      { id: 'c', text: 'A LinkedIn article about market trends that includes the licensee\'s brokerage affiliation', isCorrect: false },
      { id: 'd', text: 'A Facebook live tour of a property with the brokerage logo visible on screen', isCorrect: false },
    ],
    explanation:
      'Any social media content that promotes the licensee\'s real estate services or properties must include the brokerage firm name. Even "temporary" content like Instagram stories must comply. The VREB does not distinguish between permanent posts and ephemeral content when it comes to advertising requirements.',
    difficulty: 'easy',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-009',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'Under DNC rules, telemarketing calls to consumers may only be placed between:',
    options: [
      { id: 'a', text: '7:00 AM and 10:00 PM in the caller\'s time zone', isCorrect: false },
      { id: 'b', text: '8:00 AM and 9:00 PM in the consumer\'s local time zone', isCorrect: true },
      { id: 'c', text: '9:00 AM and 8:00 PM in the consumer\'s local time zone', isCorrect: false },
      { id: 'd', text: '9:00 AM and 5:00 PM in the caller\'s time zone', isCorrect: false },
    ],
    explanation:
      'FTC telemarketing rules prohibit calling consumers before 8:00 AM or after 9:00 PM in the consumer\'s local time zone. The relevant time zone is the consumer\'s, not the caller\'s. Violations can result in fines of up to $50,120 per call. Licensees must track the time zones of the people they are calling.',
    difficulty: 'easy',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-adtech-010',
    chapterId: 'virginia-advertising-technology-rules',
    quizType: 'chapter_quiz',
    questionText:
      'A licensee uses an automated email system to send just-listed alerts to their database of 500 contacts. After receiving the first email, a recipient requests to be removed from the list. Under the CAN-SPAM Act, the licensee must honor the opt-out request within:',
    options: [
      { id: 'a', text: '24 hours', isCorrect: false },
      { id: 'b', text: '72 hours', isCorrect: false },
      { id: 'c', text: '10 business days', isCorrect: true },
      { id: 'd', text: '30 calendar days', isCorrect: false },
    ],
    explanation:
      'The CAN-SPAM Act requires that opt-out requests be honored within 10 business days. The opt-out mechanism must be functional for at least 30 days after the email is sent. Once a consumer opts out, the sender may not send additional commercial messages or transfer the email address to another sender for marketing purposes.',
    difficulty: 'hard',
    topicTag: 'advertising-technology',
  },
]

// ── Chapter: professional-standards-growth (10 questions) ──────────────────

const professionalStandardsGrowthQuestions: QuizQuestion[] = [
  {
    id: 'q-profstd-001',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'The NAR Code of Ethics applies to:',
    options: [
      { id: 'a', text: 'All licensed real estate agents in the United States', isCorrect: false },
      { id: 'b', text: 'Only members of the National Association of REALTORS', isCorrect: true },
      { id: 'c', text: 'Only brokers, not salespersons', isCorrect: false },
      { id: 'd', text: 'Only agents involved in residential transactions', isCorrect: false },
    ],
    explanation:
      'The NAR Code of Ethics is a membership obligation that applies only to REALTORS (members of the National Association of REALTORS), not to all licensed real estate professionals. Not all licensees are REALTORS. However, Virginia license law and VREB regulations impose ethical and professional standards on all licensees regardless of NAR membership.',
    difficulty: 'easy',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-002',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'Article 1 of the NAR Code of Ethics requires REALTORS to:',
    options: [
      { id: 'a', text: 'Charge fair and reasonable commission rates', isCorrect: false },
      { id: 'b', text: 'Protect and promote the interests of the client while treating all parties honestly', isCorrect: true },
      { id: 'c', text: 'Disclose their commission to all parties in a transaction', isCorrect: false },
      { id: 'd', text: 'Cooperate with all other REALTORS in every transaction', isCorrect: false },
    ],
    explanation:
      'Article 1 is the foundational article of the NAR Code of Ethics. It pledges REALTORS to protect and promote the interests of their client while treating all parties to the transaction honestly. This duty to the client does not diminish the obligation to deal fairly with other parties.',
    difficulty: 'medium',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-003',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, a principal broker\'s supervisory responsibilities include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Ensuring that all licensees under their supervision comply with Virginia real estate law', isCorrect: false },
      { id: 'b', text: 'Maintaining custody of all earnest money deposits and escrow funds', isCorrect: false },
      { id: 'c', text: 'Personally attending every property showing conducted by supervised licensees', isCorrect: true },
      { id: 'd', text: 'Reviewing advertising to ensure compliance with VREB regulations', isCorrect: false },
    ],
    explanation:
      'The principal broker is responsible for supervising licensees, ensuring legal compliance, maintaining custody of escrow funds, and reviewing advertising. However, the broker is not required to personally attend every showing. Supervision means oversight, training, and systems to ensure compliance, not physical presence at every activity.',
    difficulty: 'medium',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-004',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'A sphere of influence (SOI) marketing strategy focuses on:',
    options: [
      { id: 'a', text: 'Purchasing online leads from third-party providers', isCorrect: false },
      { id: 'b', text: 'Building and maintaining relationships with people the licensee already knows', isCorrect: true },
      { id: 'c', text: 'Cold calling numbers from a purchased phone list', isCorrect: false },
      { id: 'd', text: 'Sending mass direct mail to every household in a ZIP code', isCorrect: false },
    ],
    explanation:
      'Sphere of influence (SOI) marketing leverages the licensee\'s existing relationships with friends, family, past clients, neighbors, and professional contacts. It is one of the most cost-effective lead generation strategies because referrals from trusted relationships convert at much higher rates than cold outreach.',
    difficulty: 'easy',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-005',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'Geographic farming as a real estate business strategy involves:',
    options: [
      { id: 'a', text: 'Investing in agricultural real estate', isCorrect: false },
      { id: 'b', text: 'Consistently marketing to a specific neighborhood or area to become the recognized local expert', isCorrect: true },
      { id: 'c', text: 'Only working with properties zoned for agricultural use', isCorrect: false },
      { id: 'd', text: 'Partnering with local farmers for cross-promotional marketing', isCorrect: false },
    ],
    explanation:
      'Geographic farming is a long-term strategy where a licensee focuses marketing efforts on a specific neighborhood, subdivision, or area. Over time, consistent outreach (mailers, door knocking, community involvement, market reports) builds name recognition and positions the licensee as the go-to expert for that area. Successful farming requires patience and a 6-12 month commitment before results appear.',
    difficulty: 'easy',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-006',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'Cultural competency in real estate practice means:',
    options: [
      { id: 'a', text: 'Memorizing the customs and traditions of every culture', isCorrect: false },
      { id: 'b', text: 'Treating all clients identically regardless of their background', isCorrect: false },
      { id: 'c', text: 'Understanding and respecting cultural differences to provide effective service to diverse populations', isCorrect: true },
      { id: 'd', text: 'Speaking multiple languages fluently', isCorrect: false },
    ],
    explanation:
      'Cultural competency is the ability to interact effectively with people of different cultures, backgrounds, and experiences. It involves awareness of one\'s own cultural biases, understanding that communication styles and decision-making processes may differ across cultures, and adapting service approaches accordingly while maintaining compliance with fair housing law.',
    difficulty: 'medium',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-007',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'A principal broker discovers that a salesperson under their supervision has been advertising listings on social media without including the brokerage name. The broker should:',
    options: [
      { id: 'a', text: 'Ignore it because social media is informal and not subject to VREB rules', isCorrect: false },
      { id: 'b', text: 'Immediately correct the violation and implement training and monitoring procedures', isCorrect: true },
      { id: 'c', text: 'Terminate the salesperson\'s license without warning', isCorrect: false },
      { id: 'd', text: 'Report the salesperson to the VREB without attempting correction first', isCorrect: false },
    ],
    explanation:
      'The principal broker has a supervisory duty to ensure compliance with advertising regulations. The appropriate response is to immediately correct the violation (require the posts be updated or removed), provide training on VREB advertising requirements, and implement monitoring systems to prevent recurrence. The broker could face disciplinary action for failure to supervise.',
    difficulty: 'medium',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-008',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'Article 12 of the NAR Code of Ethics requires REALTORS to:',
    options: [
      { id: 'a', text: 'Cooperate with other REALTORS on every transaction', isCorrect: false },
      { id: 'b', text: 'Present a true picture in advertising, marketing, and representations', isCorrect: true },
      { id: 'c', text: 'Arbitrate all commission disputes through NAR', isCorrect: false },
      { id: 'd', text: 'Disclose all personal property defects to buyers', isCorrect: false },
    ],
    explanation:
      'Article 12 of the NAR Code of Ethics requires REALTORS to be honest and truthful in their real estate communications and to present a true picture in their advertising, marketing, and other representations. This aligns with VREB advertising regulations and reinforces the professional standard against misleading or deceptive practices.',
    difficulty: 'hard',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-009',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'When working with a client whose primary language is not English, a Virginia licensee should:',
    options: [
      { id: 'a', text: 'Refuse representation because of the potential for miscommunication', isCorrect: false },
      { id: 'b', text: 'Use Google Translate for all contract documents', isCorrect: false },
      { id: 'c', text: 'Recommend the client work with a qualified interpreter and ensure the client understands all documents before signing', isCorrect: true },
      { id: 'd', text: 'Proceed normally because all real estate contracts in Virginia must be in English', isCorrect: false },
    ],
    explanation:
      'Cultural competency includes ensuring that clients of all language backgrounds fully understand the documents they sign. The licensee should recommend a qualified interpreter (not rely on informal translation tools for legal documents), allow extra time for review, and confirm understanding. Refusing representation could violate fair housing law if the refusal is based on national origin.',
    difficulty: 'hard',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-profstd-010',
    chapterId: 'professional-standards-growth',
    quizType: 'chapter_quiz',
    questionText:
      'If a REALTOR is found to have violated the NAR Code of Ethics, the local association may impose all of the following sanctions EXCEPT:',
    options: [
      { id: 'a', text: 'A fine up to $15,000', isCorrect: false },
      { id: 'b', text: 'Suspension or expulsion from the association', isCorrect: false },
      { id: 'c', text: 'Revocation of the member\'s Virginia real estate license', isCorrect: true },
      { id: 'd', text: 'Required completion of ethics training', isCorrect: false },
    ],
    explanation:
      'NAR and local associations can impose fines, require education, issue letters of reprimand, suspend or expel members, and require other corrective actions. However, only the Virginia Real Estate Board (VREB) has the authority to revoke a real estate license. NAR is a trade association, not a government licensing authority.',
    difficulty: 'hard',
    topicTag: 'professional-standards',
  },
]

// ── Chapter: exam-preparation-career-launch (10 questions) ─────────────────

const examPrepCareerLaunchQuestions: QuizQuestion[] = [
  {
    id: 'q-examprep-001',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Real Estate Salesperson Exam is administered by:',
    options: [
      { id: 'a', text: 'The Virginia Real Estate Board (VREB)', isCorrect: false },
      { id: 'b', text: 'PSI (formerly Psychological Services Inc.)', isCorrect: true },
      { id: 'c', text: 'The National Association of REALTORS', isCorrect: false },
      { id: 'd', text: 'The Virginia Association of REALTORS', isCorrect: false },
    ],
    explanation:
      'PSI is the contracted testing vendor that administers the Virginia Real Estate Salesperson and Broker exams on behalf of DPOR. Candidates register through PSI\'s website, schedule at a PSI testing center, and receive results immediately upon completion. VREB sets the exam content and standards but does not administer the test directly.',
    difficulty: 'easy',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-002',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Real Estate Salesperson Exam consists of:',
    options: [
      { id: 'a', text: '80 national questions and 40 state-specific questions', isCorrect: true },
      { id: 'b', text: '100 national questions and 50 state-specific questions', isCorrect: false },
      { id: 'c', text: '60 multiple-choice questions covering all topics', isCorrect: false },
      { id: 'd', text: '120 national questions only; there is no state section', isCorrect: false },
    ],
    explanation:
      'The Virginia Salesperson Exam has two portions: 80 national questions covering general real estate principles and practices, and 40 state-specific questions covering Virginia law, regulations, and practices. Candidates must pass both portions. The national portion requires a score of 60/80 (75%), and the state portion requires 30/40 (75%).',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-003',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'If a candidate passes the national portion of the Virginia salesperson exam but fails the state portion, the candidate:',
    options: [
      { id: 'a', text: 'Must retake both portions', isCorrect: false },
      { id: 'b', text: 'May retake only the state portion while the national score is retained', isCorrect: true },
      { id: 'c', text: 'Must wait 6 months before retaking any portion', isCorrect: false },
      { id: 'd', text: 'Is permanently disqualified from obtaining a Virginia license', isCorrect: false },
    ],
    explanation:
      'Virginia allows candidates to retake only the failed portion of the exam. If the national portion is passed but the state portion is failed, the national score is retained and the candidate only needs to retake the state portion. The passing score is retained for 12 months from the initial attempt.',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-004',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'Which topic area typically carries the HIGHEST weight on the national portion of the salesperson exam?',
    options: [
      { id: 'a', text: 'Property management and leasing', isCorrect: false },
      { id: 'b', text: 'Real estate finance and settlement', isCorrect: true },
      { id: 'c', text: 'Environmental regulations', isCorrect: false },
      { id: 'd', text: 'Real estate mathematics only', isCorrect: false },
    ],
    explanation:
      'Real estate finance (mortgages, lending, settlement procedures) and property ownership/transfer topics typically carry the highest weight on the national portion of the exam. Candidates should dedicate proportionally more study time to high-frequency topics while still covering all areas. Math questions appear throughout multiple topic areas rather than as a separate section.',
    difficulty: 'easy',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-005',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'The most effective exam study strategy for real estate licensing exams is:',
    options: [
      { id: 'a', text: 'Reading the textbook from cover to cover the night before the exam', isCorrect: false },
      { id: 'b', text: 'Focusing exclusively on practice questions without reviewing content', isCorrect: false },
      { id: 'c', text: 'Spaced repetition combined with practice exams, focusing on weak areas identified by practice tests', isCorrect: true },
      { id: 'd', text: 'Memorizing every vocabulary term in alphabetical order', isCorrect: false },
    ],
    explanation:
      'Spaced repetition (reviewing material at increasing intervals) combined with practice exams is the most effective study method. Practice tests identify knowledge gaps, and spaced repetition strengthens long-term retention. Cramming the night before is ineffective for the volume of material on the exam.',
    difficulty: 'easy',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-006',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'After passing the Virginia salesperson exam, a candidate must submit a license application within:',
    options: [
      { id: 'a', text: '30 days', isCorrect: false },
      { id: 'b', text: '90 days', isCorrect: false },
      { id: 'c', text: '12 months', isCorrect: true },
      { id: 'd', text: '24 months', isCorrect: false },
    ],
    explanation:
      'A candidate who passes the Virginia salesperson exam must submit a license application to DPOR within 12 months. After 12 months, the exam score expires and the candidate must retake the exam. The application must include an affiliation with a Virginia principal broker; a salesperson cannot hold an independent license.',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-007',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'A newly licensed Virginia salesperson MUST complete post-license education of how many hours before the first license renewal?',
    options: [
      { id: 'a', text: '8 hours', isCorrect: false },
      { id: 'b', text: '16 hours', isCorrect: false },
      { id: 'c', text: '30 hours', isCorrect: true },
      { id: 'd', text: '60 hours', isCorrect: false },
    ],
    explanation:
      'Virginia requires newly licensed salespersons to complete 30 hours of post-license education before their first license renewal. This is in addition to the 60 hours of pre-license education completed before the exam. After the first renewal, licensees must complete 16 hours of continuing education per renewal cycle.',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-008',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'A Virginia salesperson who wants to become a broker must:',
    options: [
      { id: 'a', text: 'Simply pay a higher licensing fee to DPOR', isCorrect: false },
      { id: 'b', text: 'Complete 180 hours of education, have 36 months of active experience, and pass the broker exam', isCorrect: true },
      { id: 'c', text: 'Complete 60 additional hours of education and pass the broker exam', isCorrect: false },
      { id: 'd', text: 'Be recommended by 3 licensed brokers and pass a background check', isCorrect: false },
    ],
    explanation:
      'Virginia broker candidates must complete 180 hours of DPOR-approved education, demonstrate at least 36 months of active real estate experience as a licensed salesperson within the prior 5 years, and pass the Virginia broker exam. The experience requirement ensures that brokers have practical knowledge to supervise salespersons.',
    difficulty: 'hard',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-009',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'Which career path in real estate involves evaluating property values and providing written opinions of value for lending, tax, and investment purposes?',
    options: [
      { id: 'a', text: 'Property management', isCorrect: false },
      { id: 'b', text: 'Real estate appraisal', isCorrect: true },
      { id: 'c', text: 'Mortgage brokerage', isCorrect: false },
      { id: 'd', text: 'Real estate development', isCorrect: false },
    ],
    explanation:
      'Real estate appraisers evaluate property values and provide written appraisal reports used for lending decisions, tax assessments, estate settlements, and investment analysis. Appraisers are licensed separately from real estate agents through DPOR and must comply with the Uniform Standards of Professional Appraisal Practice (USPAP).',
    difficulty: 'easy',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-examprep-010',
    chapterId: 'exam-preparation-career-launch',
    quizType: 'chapter_quiz',
    questionText:
      'At the PSI testing center, which of the following is TRUE about the exam experience?',
    options: [
      { id: 'a', text: 'Candidates may bring reference materials and notes into the testing room', isCorrect: false },
      { id: 'b', text: 'Candidates may use personal calculators brought from home', isCorrect: false },
      { id: 'c', text: 'An on-screen calculator is provided, and candidates receive results immediately after completing the exam', isCorrect: true },
      { id: 'd', text: 'Candidates must wait 2 weeks to receive their score by mail', isCorrect: false },
    ],
    explanation:
      'PSI testing centers provide a controlled environment. Candidates may not bring personal items, notes, or calculators into the testing room. An on-screen calculator is provided for math questions. Results are displayed on screen immediately upon completion. Candidates receive a score report before leaving the testing center.',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
]

// ── Mock Exam: Modules 11 & 12 (20 questions) ─────────────────────────────

const mockExam1112Questions: QuizQuestion[] = [
  {
    id: 'q-mock1112-001',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A commercial property generates $320,000 in gross potential income. After a 5% vacancy rate and $120,000 in operating expenses, what is the net operating income (NOI)?',
    options: [
      { id: 'a', text: '$184,000', isCorrect: true },
      { id: 'b', text: '$192,000', isCorrect: false },
      { id: 'c', text: '$200,000', isCorrect: false },
      { id: 'd', text: '$304,000', isCorrect: false },
    ],
    explanation:
      'Effective Gross Income = $320,000 - (5% vacancy = $16,000) = $304,000. NOI = $304,000 - $120,000 operating expenses = $184,000. Remember that operating expenses do NOT include mortgage payments or depreciation.',
    difficulty: 'medium',
    topicTag: 'commercial-valuation',
  },
  {
    id: 'q-mock1112-002',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'In a single net lease (N), the tenant pays base rent plus:',
    options: [
      { id: 'a', text: 'Property taxes only', isCorrect: true },
      { id: 'b', text: 'Property taxes and insurance', isCorrect: false },
      { id: 'c', text: 'Property taxes, insurance, and maintenance', isCorrect: false },
      { id: 'd', text: 'All operating expenses', isCorrect: false },
    ],
    explanation:
      'In a single net lease (N), the tenant pays base rent plus property taxes. The landlord remains responsible for insurance and maintenance. In a double net (NN), the tenant adds insurance. In a triple net (NNN), the tenant also adds maintenance.',
    difficulty: 'easy',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-mock1112-003',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'An absolute net lease is also known as a:',
    options: [
      { id: 'a', text: 'Full-service lease', isCorrect: false },
      { id: 'b', text: 'Bondable lease', isCorrect: true },
      { id: 'c', text: 'Percentage lease', isCorrect: false },
      { id: 'd', text: 'Gross lease', isCorrect: false },
    ],
    explanation:
      'An absolute net lease is also called a bondable lease because the landlord\'s income stream is as predictable as a bond payment. The tenant is responsible for every cost associated with the property, including structural repairs and rebuilding after a casualty. National credit tenants like Walgreens and FedEx often sign these leases.',
    difficulty: 'medium',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-mock1112-004',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'An investor purchases a property with $400,000 in cash equity. Annual NOI is $120,000 and annual debt service is $80,000. What is the cash-on-cash return?',
    options: [
      { id: 'a', text: '10%', isCorrect: true },
      { id: 'b', text: '20%', isCorrect: false },
      { id: 'c', text: '30%', isCorrect: false },
      { id: 'd', text: '40%', isCorrect: false },
    ],
    explanation:
      'Cash-on-cash return = Annual Pre-Tax Cash Flow / Total Cash Invested. Pre-tax cash flow = NOI - Debt Service = $120,000 - $80,000 = $40,000. Cash-on-cash = $40,000 / $400,000 = 10%. This metric reflects the actual return on the investor\'s equity.',
    difficulty: 'hard',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-mock1112-005',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'To qualify as a REIT, a company must derive at least what percentage of its gross income from real estate sources?',
    options: [
      { id: 'a', text: '50%', isCorrect: false },
      { id: 'b', text: '65%', isCorrect: false },
      { id: 'c', text: '75%', isCorrect: true },
      { id: 'd', text: '90%', isCorrect: false },
    ],
    explanation:
      'A REIT must derive at least 75% of its gross income from real estate sources (rents, mortgage interest, property sales) and have at least 75% of total assets in real estate, cash, or government securities. Additionally, it must distribute at least 90% of taxable income to shareholders.',
    difficulty: 'hard',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-mock1112-006',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Under the VRLTA, a security deposit must be held in:',
    options: [
      { id: 'a', text: 'The property manager\'s personal checking account', isCorrect: false },
      { id: 'b', text: 'A separate escrow account in a Virginia financial institution', isCorrect: true },
      { id: 'c', text: 'The property owner\'s business operating account', isCorrect: false },
      { id: 'd', text: 'Any FDIC-insured account in the United States', isCorrect: false },
    ],
    explanation:
      'The VRLTA requires security deposits to be held in a separate escrow account in a financial institution located in Virginia. Commingling security deposits with operating funds is a serious violation that can result in disciplinary action by VREB, loss of the right to retain any deposit, and civil liability to the tenant.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-mock1112-007',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Price fixing, group boycotts, and market allocation are all per se violations of the:',
    options: [
      { id: 'a', text: 'Virginia Consumer Protection Act', isCorrect: false },
      { id: 'b', text: 'Federal Fair Housing Act', isCorrect: false },
      { id: 'c', text: 'Sherman Antitrust Act', isCorrect: true },
      { id: 'd', text: 'Real Estate Settlement Procedures Act (RESPA)', isCorrect: false },
    ],
    explanation:
      'The Sherman Antitrust Act (1890) prohibits agreements that restrain trade. Price fixing, group boycotts, market allocation, and tie-in arrangements are per se violations, meaning they are automatically illegal with no defense or justification accepted. Penalties include criminal fines up to $100 million for corporations and treble damages in civil suits.',
    difficulty: 'easy',
    topicTag: 'risk-management',
  },
  {
    id: 'q-mock1112-008',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'All advertising by a Virginia real estate licensee must include the name of the:',
    options: [
      { id: 'a', text: 'Multiple Listing Service', isCorrect: false },
      { id: 'b', text: 'Brokerage firm as licensed with the Virginia Real Estate Board', isCorrect: true },
      { id: 'c', text: 'Virginia Real Estate Board itself', isCorrect: false },
      { id: 'd', text: 'Licensee\'s supervising broker by full legal name', isCorrect: false },
    ],
    explanation:
      'VREB regulation 18 VAC 135-20-180 requires that all advertising by a licensee include the brokerage firm name as licensed with the Board. This applies to all media: print, online, social media (including temporary posts and stories), signs, business cards, and any other form of marketing.',
    difficulty: 'easy',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-mock1112-009',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'The NAR Code of Ethics applies to all Virginia real estate licensees. TRUE or FALSE?',
    options: [
      { id: 'a', text: 'True, all licensees must follow the NAR Code of Ethics', isCorrect: false },
      { id: 'b', text: 'False, it applies only to members of the National Association of REALTORS', isCorrect: true },
      { id: 'c', text: 'True, but only for residential transactions', isCorrect: false },
      { id: 'd', text: 'False, it was replaced by Virginia license law in 2020', isCorrect: false },
    ],
    explanation:
      'The NAR Code of Ethics applies only to members of the National Association of REALTORS, not to all licensees. However, Virginia license law and VREB regulations impose ethical and professional standards on ALL licensees regardless of NAR membership. Not every licensee is a REALTOR.',
    difficulty: 'easy',
    topicTag: 'professional-standards',
  },
  {
    id: 'q-mock1112-010',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'The Virginia salesperson exam has two portions. To pass the state-specific portion, a candidate needs a score of:',
    options: [
      { id: 'a', text: '25/40 (62.5%)', isCorrect: false },
      { id: 'b', text: '28/40 (70%)', isCorrect: false },
      { id: 'c', text: '30/40 (75%)', isCorrect: true },
      { id: 'd', text: '36/40 (90%)', isCorrect: false },
    ],
    explanation:
      'The Virginia state-specific portion contains 40 questions, and candidates must score at least 30 correct (75%) to pass. The national portion requires 60/80 (also 75%). Both portions must be passed, but if a candidate passes one and fails the other, only the failed portion must be retaken.',
    difficulty: 'medium',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-mock1112-011',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A property has an NOI of $200,000 and annual debt service of $150,000. The DSCR is:',
    options: [
      { id: 'a', text: '0.75', isCorrect: false },
      { id: 'b', text: '1.00', isCorrect: false },
      { id: 'c', text: '1.33', isCorrect: true },
      { id: 'd', text: '1.50', isCorrect: false },
    ],
    explanation:
      'DSCR = NOI / Annual Debt Service = $200,000 / $150,000 = 1.33. This means the property generates 33% more income than needed to cover the mortgage. Most lenders require a minimum DSCR of 1.20 to 1.25, so this property would meet the requirement.',
    difficulty: 'medium',
    topicTag: 'investment-strategies',
  },
  {
    id: 'q-mock1112-012',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Which commercial property type has been MOST positively impacted by the growth of e-commerce?',
    options: [
      { id: 'a', text: 'Regional enclosed malls', isCorrect: false },
      { id: 'b', text: 'Class A downtown office buildings', isCorrect: false },
      { id: 'c', text: 'Warehouse and distribution centers', isCorrect: true },
      { id: 'd', text: 'Boutique hotels', isCorrect: false },
    ],
    explanation:
      'E-commerce has driven enormous demand for warehouse and distribution space, particularly last-mile distribution centers located close to population centers. Conversely, regional enclosed malls have been negatively impacted by the shift to online shopping. This trend has reshaped industrial real estate markets nationwide.',
    difficulty: 'easy',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-mock1112-013',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A CPI escalation clause in a commercial lease that includes a 2% floor and 5% cap means:',
    options: [
      { id: 'a', text: 'Rent will always increase exactly 3.5% per year', isCorrect: false },
      { id: 'b', text: 'Rent will increase by at least 2% and no more than 5% annually, regardless of actual CPI changes', isCorrect: true },
      { id: 'c', text: 'The CPI must be between 2% and 5% for the clause to apply', isCorrect: false },
      { id: 'd', text: 'Base rent is capped at 5% of the CPI', isCorrect: false },
    ],
    explanation:
      'A floor of 2% guarantees the landlord a minimum rent increase even in deflationary periods. A cap of 5% protects the tenant from extreme inflation. If the actual CPI increase is 1%, rent still increases 2% (the floor). If CPI increases 8%, rent increases only 5% (the cap). The floor and cap balance risk between landlord and tenant.',
    difficulty: 'hard',
    topicTag: 'commercial-leases',
  },
  {
    id: 'q-mock1112-014',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Transit-oriented development (TOD) typically concentrates mixed-use buildings within what radius of a transit station?',
    options: [
      { id: 'a', text: 'One-tenth to one-quarter mile', isCorrect: false },
      { id: 'b', text: 'One-quarter to one-half mile', isCorrect: true },
      { id: 'c', text: 'One to two miles', isCorrect: false },
      { id: 'd', text: 'Five miles or less', isCorrect: false },
    ],
    explanation:
      'Transit-oriented developments concentrate mixed-use buildings within a quarter-mile to half-mile radius of a transit station. This distance represents a comfortable 5-10 minute walk. TOD projects often receive density bonuses and reduced parking requirements from local governments in exchange for public amenities and affordable housing.',
    difficulty: 'medium',
    topicTag: 'commercial-property-types',
  },
  {
    id: 'q-mock1112-015',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A licensee discovers they provided incorrect square footage information to a buyer, causing the buyer financial harm. The licensee\'s E&O insurance would:',
    options: [
      { id: 'a', text: 'Not cover this situation because it involves a factual error', isCorrect: false },
      { id: 'b', text: 'Cover defense costs and potential damages from this negligent error', isCorrect: true },
      { id: 'c', text: 'Cover only criminal penalties resulting from the error', isCorrect: false },
      { id: 'd', text: 'Cover only the buyer\'s actual damages, not the licensee\'s defense costs', isCorrect: false },
    ],
    explanation:
      'E&O insurance is specifically designed to cover claims arising from negligent errors or omissions in professional practice, such as providing incorrect property information. Coverage typically includes both defense costs (attorney fees) and any damages awarded. However, E&O insurance does not cover intentional fraud or criminal acts.',
    difficulty: 'medium',
    topicTag: 'risk-management',
  },
  {
    id: 'q-mock1112-016',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Under the TCPA, the penalty for sending a single unsolicited marketing text message without prior written consent can be:',
    options: [
      { id: 'a', text: '$50 to $100', isCorrect: false },
      { id: 'b', text: '$500 to $1,500', isCorrect: true },
      { id: 'c', text: '$5,000 to $10,000', isCorrect: false },
      { id: 'd', text: 'No financial penalty; only a warning is issued', isCorrect: false },
    ],
    explanation:
      'The Telephone Consumer Protection Act (TCPA) imposes penalties of $500 per violation for unsolicited marketing text messages, which can be trebled to $1,500 per message for willful violations. For mass texting campaigns, these penalties can accumulate to enormous liability. Licensees must obtain prior express written consent before sending marketing texts.',
    difficulty: 'hard',
    topicTag: 'advertising-technology',
  },
  {
    id: 'q-mock1112-017',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'Virginia requires newly licensed brokers to complete how many hours of post-license education?',
    options: [
      { id: 'a', text: '16 hours', isCorrect: false },
      { id: 'b', text: '30 hours', isCorrect: true },
      { id: 'c', text: '45 hours', isCorrect: false },
      { id: 'd', text: '60 hours', isCorrect: false },
    ],
    explanation:
      'Like salespersons, newly licensed Virginia brokers must complete 30 hours of post-license education before their first renewal. The broker post-license curriculum covers brokerage-specific topics such as escrow management, supervision responsibilities, and risk management. After the first renewal, 16 hours of CE per cycle is required.',
    difficulty: 'hard',
    topicTag: 'exam-prep',
  },
  {
    id: 'q-mock1112-018',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'The appraisal approach MOST commonly used as the primary method for valuing income-producing commercial properties is the:',
    options: [
      { id: 'a', text: 'Sales comparison approach', isCorrect: false },
      { id: 'b', text: 'Cost approach', isCorrect: false },
      { id: 'c', text: 'Income approach', isCorrect: true },
      { id: 'd', text: 'Market analysis approach', isCorrect: false },
    ],
    explanation:
      'The income approach (Value = NOI / Cap Rate) is the primary valuation method for income-producing commercial properties because commercial value is driven by the property\'s ability to generate income. The sales comparison approach is used as a secondary method, and the cost approach is primarily used for special purpose properties where income and comparable data are limited.',
    difficulty: 'easy',
    topicTag: 'commercial-valuation',
  },
  {
    id: 'q-mock1112-019',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A property manager who holds tenant security deposits in their personal bank account, mixed with personal funds, has committed:',
    options: [
      { id: 'a', text: 'Conversion only', isCorrect: false },
      { id: 'b', text: 'Commingling, which is a violation of fiduciary duty and Virginia law', isCorrect: true },
      { id: 'c', text: 'An innocent accounting error that can be easily corrected', isCorrect: false },
      { id: 'd', text: 'A violation only if a tenant files a formal complaint', isCorrect: false },
    ],
    explanation:
      'Commingling is the mixing of client funds (such as tenant security deposits) with the licensee\'s personal or business operating funds. This is a violation of the fiduciary duty of accounting and Virginia real estate law, regardless of whether a complaint is filed. Conversion goes further and involves using client funds for personal purposes.',
    difficulty: 'medium',
    topicTag: 'property-management',
  },
  {
    id: 'q-mock1112-020',
    chapterId: 'mock-exam-1112',
    quizType: 'mock_exam',
    questionText:
      'A Virginia broker candidate must have at least how many months of active experience as a licensed salesperson?',
    options: [
      { id: 'a', text: '12 months', isCorrect: false },
      { id: 'b', text: '24 months', isCorrect: false },
      { id: 'c', text: '36 months', isCorrect: true },
      { id: 'd', text: '48 months', isCorrect: false },
    ],
    explanation:
      'Virginia requires broker candidates to have at least 36 months (3 years) of active experience as a licensed salesperson within the prior 5 years. This experience requirement, combined with 180 hours of education and passing the broker exam, ensures brokers have the practical knowledge to supervise salespersons and manage a brokerage.',
    difficulty: 'hard',
    topicTag: 'exam-prep',
  },
]

// ── Combined Export ──────────────────────────────────────────────────────────

export const MOD1112_QUESTIONS: QuizQuestion[] = [
  ...commercialPropertyTypesQuestions,
  ...commercialLeasesQuestions,
  ...investmentStrategiesQuestions,
  ...propertyManagementQuestions,
  ...riskManagementInsuranceQuestions,
  ...advertisingTechnologyQuestions,
  ...professionalStandardsGrowthQuestions,
  ...examPrepCareerLaunchQuestions,
  ...mockExam1112Questions,
]
