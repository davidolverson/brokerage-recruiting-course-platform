import type { CourseModule } from './course-content'

// ── Module 9: Advanced Real Estate Finance & Taxation ────────────────────────

const module9: CourseModule = {
  slug: 'advanced-finance-taxation',
  title: 'Advanced Real Estate Finance & Taxation',
  subtitle:
    'Government-backed loans, creative financing, taxation, and investment analysis',
  examWeight: '10% of exam',
  chapters: [
    // ── Chapter 1: Government-Backed Loan Programs ────────────────────────
    {
      slug: 'government-backed-loan-programs',
      title: 'Government-Backed Loan Programs',
      lessons: [
        {
          slug: 'fha-loans',
          title: 'FHA Loans: Requirements, MIP, Limits & Assumability',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'FHA',
            'Federal Housing Administration',
            'mortgage insurance premium',
            'UFMIP',
            'annual MIP',
            'FHA loan limits',
            'assumable mortgage',
            'HUD',
            'minimum property standards',
            'FHA 203(b)',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each FHA term to its definition: UFMIP, annual MIP, FHA 203(b), minimum property standards',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of FHA loan requirements and mortgage insurance',
            },
            {
              type: 'calculator',
              prompt:
                'Calculate the upfront and annual MIP for a $300,000 FHA loan with 3.5% down',
            },
          ],
          content: `## Federal Housing Administration (FHA) Loans

The Federal Housing Administration, a division of the U.S. Department of Housing and Urban Development (HUD), does not lend money directly. Instead, the FHA **insures** mortgage loans made by approved lenders, protecting those lenders against loss if the borrower defaults. This government backing allows lenders to offer more favorable terms to borrowers who might not qualify for conventional financing.

### Borrower Requirements

FHA loans are designed for owner-occupants. The property must be the borrower's **primary residence**. Investors and second-home buyers cannot use FHA financing. Key borrower requirements include:

- **Minimum down payment of 3.5%** of the purchase price (for borrowers with credit scores of 580 or higher)
- Borrowers with scores between 500 and 579 must put down at least 10%
- No minimum income requirement, but the borrower must demonstrate stable employment history (typically two years)
- **Debt-to-income ratios**: generally 31% front-end (housing expense) and 43% back-end (total debt), though compensating factors may allow higher ratios
- The property must meet FHA **Minimum Property Standards (MPS)**, which are health and safety requirements. Common issues that fail MPS include peeling paint in pre-1978 homes (lead paint concern), missing handrails, and non-functional utilities

### Mortgage Insurance Premium (MIP)

Because FHA loans allow low down payments, they require mortgage insurance to protect the lender. FHA mortgage insurance has two components:

**Upfront Mortgage Insurance Premium (UFMIP)**: Currently 1.75% of the base loan amount. This is typically financed into the loan. On a $300,000 loan, the UFMIP would be $5,250, bringing the total loan to $305,250.

**Annual MIP**: Paid monthly as part of the mortgage payment. The rate depends on the loan term, loan-to-value ratio, and loan amount. For most 30-year FHA loans with less than 5% down, the annual MIP is 0.55% of the outstanding loan balance, and it is required for the **life of the loan**. Borrowers who put down 10% or more can have the annual MIP removed after 11 years.

This is a critical distinction from conventional loans, where private mortgage insurance (PMI) automatically terminates at 78% LTV under the Homeowners Protection Act. FHA MIP does not automatically cancel for most borrowers.

### FHA Loan Limits

FHA sets maximum loan amounts by county, adjusted annually. In Virginia, loan limits vary significantly. High-cost areas like Northern Virginia (Arlington, Fairfax, Loudoun counties) have limits well above the national floor. The limits are based on a percentage of the conforming loan limit set by FHFA for Fannie Mae and Freddie Mac loans. Agents should check HUD's website for current limits in their specific market area.

### Assumability

One significant advantage of FHA loans is that they are **assumable**, meaning a qualified buyer can take over the seller's existing FHA mortgage. The assuming buyer must qualify with the lender (creditworthiness review), and the lender must approve the assumption. Assumptions can benefit buyers if the existing loan has a lower interest rate than current market rates. The seller remains liable on the original note unless the lender provides a formal **release of liability**.

### FHA 203(b) and Other Programs

The standard FHA purchase loan is the **203(b)** program. Other FHA programs include the **203(k)** rehabilitation loan (which finances both purchase and renovation in a single mortgage) and the **234(c)** for condominium units. FHA also offers reverse mortgages through the Home Equity Conversion Mortgage (HECM) program for borrowers age 62 and older.`,
        },
        {
          slug: 'va-loans',
          title: 'VA Loans: Eligibility, Entitlement, Funding Fee & No PMI',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'VA loan',
            'Certificate of Eligibility',
            'entitlement',
            'funding fee',
            'VA appraisal',
            'Minimum Property Requirements',
            'no PMI',
            'VA loan guaranty',
            'surviving spouse',
            'full entitlement',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match VA loan terms: COE, entitlement, funding fee, MPR, full entitlement',
            },
            {
              type: 'scenario',
              prompt:
                'A veteran with full entitlement wants to buy a $400,000 home. Walk through the VA loan process, including funding fee calculation for first use with no down payment.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of VA loan eligibility and the funding fee structure',
            },
          ],
          content: `## VA Loans: Department of Veterans Affairs Home Loan Guaranty

The VA home loan program is one of the most valuable benefits available to eligible service members, veterans, and surviving spouses. Like FHA, the VA does not make loans directly. Instead, it **guarantees** a portion of the loan, protecting the lender against loss and enabling favorable terms.

### Eligibility

VA loan eligibility is based on military service. Generally, the following individuals may qualify:

- Active duty service members with at least 90 continuous days of service during wartime or 181 days during peacetime
- Veterans who meet the minimum active duty service requirements and were discharged under conditions other than dishonorable
- National Guard and Reserve members with at least 6 years of service (or 90 days of active duty under Title 10 orders). **Note:** Post-2020 Isakson Act, National Guard members also qualify via **90 days of federal active service including 30 consecutive days**.
- **Surviving spouses** of service members who died in the line of duty or from a service-connected disability (un-remarried, or remarried after age 57)

The borrower must obtain a **Certificate of Eligibility (COE)** from the VA, which confirms their entitlement amount. Lenders can often retrieve the COE electronically through the VA's automated system.

### Entitlement

VA entitlement is the dollar amount the VA will guarantee on a loan. There are two tiers:

- **Basic entitlement**: $36,000
- **Bonus (tier 2) entitlement**: Additional amount that brings the total guaranty up to 25% of the conforming loan limit in the county

For borrowers with **full entitlement** (meaning no other outstanding VA loans and no prior VA loan default), there is effectively **no loan limit**. The VA will guaranty up to 25% of the loan amount regardless of price, though lenders may impose their own limits. Borrowers with reduced entitlement (from a prior VA loan still outstanding) are subject to county loan limits.

### Key VA Loan Features

**No down payment required**: Borrowers with full entitlement can finance 100% of the purchase price. This is the VA loan's most significant advantage.

**No private mortgage insurance (PMI)**: Unlike FHA and conventional loans with less than 20% down, VA loans do not require monthly mortgage insurance. This can save borrowers hundreds of dollars per month.

**Competitive interest rates**: Because the VA guaranty reduces lender risk, VA loan rates are typically lower than conventional rates.

**VA Minimum Property Requirements (MPRs)**: Similar to FHA's standards, the VA requires that the property be safe, structurally sound, and sanitary. The VA appraisal is performed by a VA-assigned appraiser and includes both a value estimate and a property condition assessment.

### VA Funding Fee

In lieu of monthly mortgage insurance, the VA charges a one-time **funding fee** at closing. The amount depends on the type of loan, the borrower's down payment, and whether it is the borrower's first VA loan use:

- **First use, no down payment**: 2.15% of the loan amount
- **First use, 5% down**: 1.5%
- **First use, 10%+ down**: 1.25%
- **Subsequent use, no down payment**: 3.3%

The funding fee can be financed into the loan. Certain borrowers are **exempt** from the funding fee, including veterans receiving VA disability compensation, surviving spouses, and Purple Heart recipients on active duty.

### Assumability

Like FHA loans, VA loans are assumable. However, if a non-veteran assumes a VA loan, the veteran's entitlement remains tied to that loan until it is paid off. This is called an entitlement issue, and veterans should seek a **substitution of entitlement** when possible to restore their benefit for future use.`,
        },
        {
          slug: 'usda-rural-development-loans',
          title: 'USDA/Rural Development Loans',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'USDA loan',
            'Rural Development',
            'Section 502',
            'guaranteed loan',
            'direct loan',
            'USDA eligibility map',
            'income limits',
            'guarantee fee',
            'annual fee',
            'rural area',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of USDA loan eligibility requirements and geographic restrictions',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer earning $65,000/year wants to purchase a $250,000 home in a Virginia community with population 18,000. Determine USDA eligibility.',
            },
          ],
          content: `## USDA Rural Development Loans

The U.S. Department of Agriculture (USDA) offers home loan programs through its Rural Development division to promote homeownership in rural and suburban areas. These programs serve borrowers who might not otherwise qualify for conventional financing due to income limitations or inability to make a down payment.

### Two Main Programs

**Section 502 Guaranteed Loan Program**: This is the more commonly used program. Like FHA and VA, the USDA guarantees loans made by approved private lenders. The guarantee covers 90% of the loan, reducing lender risk significantly.

**Section 502 Direct Loan Program**: The USDA itself makes the loan directly to very low-income and low-income borrowers. These loans can have interest rates as low as 1% through payment assistance (a subsidy that reduces the effective interest rate). Direct loans are subject to stricter income limits and longer processing times.

### Eligibility Requirements

USDA loans have two primary eligibility gates: **geographic** and **income**.

**Geographic Eligibility**: The property must be located in a USDA-designated rural area. "Rural" under the USDA definition includes many areas that might surprise you. Towns with populations of **35,000 or less** (per 2020 Census expansion) may qualify. In Virginia, many areas outside the major metro regions of Northern Virginia, Richmond, and Hampton Roads are USDA-eligible. USDA maintains an online eligibility map where agents and buyers can verify whether a specific address qualifies.

**Income Eligibility**: Borrowers must have household income at or below 115% of the area median income (AMI) for the guaranteed program. For the direct program, income limits are lower. USDA counts the income of all adult household members, not just the borrowers on the loan. This is different from FHA and conventional underwriting, which only consider the income of the applicants. Virginia income limits vary by county and are updated annually.

### Loan Features

- **No down payment**: Like VA loans, USDA guaranteed loans offer 100% financing
- **Guarantee fee (upfront)**: Currently 1.0% of the loan amount, which can be financed into the loan
- **Annual fee**: 0.35% of the outstanding loan balance, paid monthly. This functions similarly to FHA's annual MIP but at a lower rate
- **30-year fixed rate only**: USDA guaranteed loans are always 30-year fixed-rate mortgages
- **Primary residence only**: The property must be the borrower's primary residence. No investment properties or second homes
- **Modest housing**: The home must be modest in size and design for the area. Homes with income-producing features (like a working farm) or luxury features (swimming pools, in some cases) may not qualify

### Virginia-Specific Considerations

Many agents working in Virginia's Shenandoah Valley, Southside, Southwest Virginia, and the Northern Neck will encounter USDA-eligible properties regularly. Even some suburban areas around mid-size cities like Lynchburg, Danville, and Winchester qualify. Agents should proactively check the USDA eligibility map when working with buyers in these areas, as the zero-down-payment benefit can be the difference between a buyer qualifying and being unable to purchase.

### USDA vs. FHA vs. VA

For eligible borrowers, USDA loans often offer the best combination of low or no down payment and low ongoing fees. However, the geographic and income restrictions make them less widely available than FHA loans. A buyer who qualifies for both USDA and FHA will typically pay less over the life of the loan with USDA due to the lower annual fee (0.35% vs. 0.55%) and comparable upfront fee.`,
        },
        {
          slug: 'state-local-assistance-vhda',
          title: 'State & Local Assistance Programs (VHDA)',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: [
            'VHDA',
            'Virginia Housing Development Authority',
            'down payment assistance',
            'DPA grant',
            'FHA Plus',
            'VHDA conventional',
            'Mortgage Credit Certificate',
            'MCC',
            'first-time homebuyer',
            'income limits',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each VHDA program to its key benefit: FHA Plus, Conventional, DPA Grant, Mortgage Credit Certificate',
            },
            {
              type: 'scenario',
              prompt:
                'A first-time buyer with $45,000 income and $3,000 saved wants to buy a $220,000 home in Richmond. Which VHDA programs might help?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of VHDA eligibility and program differences',
            },
          ],
          content: `## Virginia Housing Development Authority (VHDA)

**Note:** Virginia Housing Development Authority (VHDA) was rebranded to **Virginia Housing** in 2020. Both names are used interchangeably; for Virginia state exam purposes, either is accepted.

The Virginia Housing Development Authority is a self-supporting, not-for-profit state authority created by the General Assembly in 1972. VHDA raises capital by selling tax-exempt and taxable bonds in the national and international capital markets, then uses those funds to provide below-market-rate mortgage loans and other housing assistance. VHDA does not use state tax dollars.

### Mission and Role

VHDA's mission is to help Virginians attain quality, affordable housing. The authority works through a network of approved private lenders who originate VHDA loans. Borrowers apply at participating banks, credit unions, and mortgage companies. VHDA sets the loan terms, and the participating lender processes, underwrites, and closes the loan.

### VHDA First-Time Homebuyer Programs

VHDA offers several mortgage products, most of which are designed for **first-time homebuyers** (defined as someone who has not owned a home in the past three years). However, VHDA also allows repeat buyers in certain targeted areas.

**VHDA FHA Plus**: Combines an FHA first mortgage with a VHDA second mortgage (or grant) for down payment and closing cost assistance. The first mortgage carries competitive rates, and the assistance (typically 3-5% of the purchase price) helps cover the 3.5% FHA down payment and closing costs. The second mortgage may be forgivable after a set period of occupancy.

**VHDA Conventional**: A conventional loan option with competitive rates and potential down payment assistance. May require PMI if the LTV exceeds 80%, but VHDA-negotiated PMI rates can be lower than standard market rates.

**Down Payment Assistance (DPA) Grant**: VHDA periodically offers DPA grants that do not need to be repaid. These grants are subject to funding availability and typically range from 2% to 2.5% of the purchase price. Grant programs are extremely popular and may have limited funding windows.

### Income and Purchase Price Limits

VHDA programs have **income limits** and **purchase price limits** that vary by locality. Income limits are based on household size and the Area Median Income (AMI) for the county or city where the property is located. Generally, VHDA programs target households earning at or below the area median income, though some programs extend to 115% of AMI.

Purchase price limits ensure that VHDA funds support modest housing. These limits are set by locality and updated regularly. Northern Virginia, with its higher home prices, typically has higher purchase price limits than rural areas of the state.

### Mortgage Credit Certificate (MCC)

One of VHDA's most powerful but often overlooked programs is the **Mortgage Credit Certificate**. The MCC is not a loan or a grant. It is a federal tax credit that allows the borrower to claim a dollar-for-dollar reduction in their federal income tax liability equal to a percentage (typically 20%) of the mortgage interest paid each year.

For example, if a borrower pays $10,000 in mortgage interest and has an MCC with a 20% credit rate, they receive a **$2,000 federal tax credit** (not a deduction, which is worth less). The remaining 80% ($8,000) can still be claimed as a mortgage interest deduction if the borrower itemizes. The MCC remains in effect for the life of the original mortgage, providing annual tax savings.

MCCs have income and purchase price limits and are available only for primary residences. They can be combined with other VHDA loan products, making them particularly valuable for first-time buyers.

### Homebuyer Education

VHDA requires all borrowers to complete a homebuyer education course before closing. VHDA offers free online and in-person education through its approved counseling network. This requirement applies to all VHDA loan programs and is a closing condition that cannot be waived.

### Why Agents Should Know VHDA

Real estate agents who understand VHDA programs can help buyers who might otherwise believe they cannot afford to purchase. Many potential buyers self-select out of the market because they think they need 20% down. An informed agent can connect these buyers with VHDA-approved lenders who can assess eligibility and potentially provide the financing and assistance needed to make homeownership a reality.`,
        },
      ],
    },
    // ── Chapter 2: Creative & Alternative Financing ──────────────────────
    {
      slug: 'creative-alternative-financing',
      title: 'Creative & Alternative Financing',
      lessons: [
        {
          slug: 'seller-financing-land-contracts',
          title: 'Seller Financing & Land Contracts/Contracts for Deed',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'seller financing',
            'purchase money mortgage',
            'contract for deed',
            'land contract',
            'installment sale',
            'equitable title',
            'legal title',
            'balloon payment',
            'Dodd-Frank',
            'default',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each seller financing term: purchase money mortgage, contract for deed, equitable title, balloon payment',
            },
            {
              type: 'scenario',
              prompt:
                'A seller owns a property free and clear and agrees to finance a buyer at 6% for 5 years with a balloon payment. Identify the risks for both parties.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of the legal distinctions between seller-financed mortgages and contracts for deed',
            },
          ],
          content: `## Seller Financing and Land Contracts

When institutional lending is unavailable or undesirable, buyers and sellers may negotiate arrangements where the seller acts as the lender. These are collectively known as **seller financing** or **owner financing**, and they take several legal forms.

### Purchase Money Mortgage

In a traditional seller financing arrangement, the seller conveys the deed to the buyer at closing, and the buyer executes a promissory note and deed of trust (mortgage) in favor of the seller. This is called a **purchase money mortgage** because the financing is provided as part of the purchase transaction.

The buyer receives legal title and full ownership rights immediately. The seller holds a lien against the property (secured by the deed of trust) and receives monthly payments from the buyer. If the buyer defaults, the seller must foreclose through the same legal process any lender would use.

Key characteristics of purchase money mortgages in seller financing:
- Buyer receives the deed at closing
- Seller holds a lien (deed of trust)
- Terms are negotiable: interest rate, term length, amortization schedule
- Often includes a **balloon payment** (the remaining balance due after a set period, typically 3-7 years)
- The buyer can refinance with a traditional lender before the balloon comes due

### Contract for Deed (Land Contract)

A **contract for deed** (also called a land contract, installment land contract, or bond for deed) is fundamentally different. Under this arrangement, the seller retains **legal title** to the property while the buyer receives **equitable title** and takes possession. The buyer makes installment payments to the seller. Legal title does not transfer until the buyer fulfills all obligations under the contract, typically paying the full purchase price.

This distinction has significant implications:

- The buyer has possession and equitable interest, but does not hold the deed
- If the buyer defaults, the remedies available to the seller may be faster than formal foreclosure (depending on state law)
- The buyer bears the risk of the seller encumbering the property or having judgment liens attach to the legal title the seller still holds
- In Virginia, contracts for deed for residential property are subject to the **Virginia Residential Property Disclosure Act** and other consumer protections

### Dodd-Frank Considerations

The **Dodd-Frank Wall Street Reform and Consumer Protection Act** (2010) imposed regulations on seller financing. Under the TILA-RESPA Integrated Disclosure rule and the Ability-to-Repay/Qualified Mortgage rule, sellers who finance are generally subject to federal lending regulations unless they meet an exemption. The most common exemption applies to sellers who:

- Are natural persons (not entities)
- Finance no more than **three properties in a 12-month period**
- Do not charge a rate that exceeds certain thresholds
- Are selling their own property (not acquired for the purpose of reselling with financing)
- Provide a 30-year fixed rate or adjustable rate with reasonable terms (no negative amortization, no balloon payments for some categories)

If the seller qualifies for the exemption, they are not required to follow the full Qualified Mortgage rules. However, if the seller regularly engages in seller financing as a business practice, they must comply with all federal lending regulations, including providing a Loan Estimate and Closing Disclosure.

### Risks and Practical Considerations

**For buyers**: Risk that the seller has undisclosed liens, risk that the seller files bankruptcy (the property could become part of the bankruptcy estate), and risk of unfavorable default terms. Buyers should always record their interest (deed of trust or memorandum of contract for deed) in the land records.

**For sellers**: Risk of buyer default, carrying the note means illiquidity, and the seller must comply with federal and state lending regulations. Sellers should require hazard insurance naming them as an additional insured.

**For agents**: Agents involved in seller-financed transactions should recommend that both parties retain attorneys. The complexity of these transactions exceeds standard residential practice.`,
        },
        {
          slug: 'lease-option-lease-purchase',
          title: 'Lease-Option and Lease-Purchase Agreements',
          lessonType: 'scenario',
          estimatedMinutes: 21,
          keyTerms: [
            'lease-option',
            'lease-purchase',
            'option consideration',
            'rent credit',
            'option period',
            'equitable interest',
            'lease term',
            'purchase price lock',
            'default',
            'option expiration',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A tenant pays $5,000 option consideration and $1,800/month rent ($300 credited toward purchase) on a $280,000 home with a 2-year option period. Calculate their total credits if they exercise the option.',
            },
            {
              type: 'flashcard',
              prompt:
                'Distinguish between lease-option and lease-purchase: which is binding on the buyer?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the legal and financial implications of lease-option agreements',
            },
          ],
          content: `## Lease-Option and Lease-Purchase Agreements

Lease-option and lease-purchase agreements combine a residential lease with a future purchase opportunity. These arrangements are used when a prospective buyer needs time to improve credit, accumulate a down payment, or otherwise prepare for a mortgage loan.

### Lease-Option

A **lease-option** gives the tenant the **right, but not the obligation**, to purchase the property at a predetermined price within a specified time frame. The tenant pays **option consideration** (an upfront fee, typically 1-5% of the purchase price) for this right. If the tenant decides not to purchase, the option expires and the option consideration is forfeited.

Key components of a lease-option:

**Option Consideration**: A non-refundable payment made at the start of the agreement. This payment may or may not be credited toward the purchase price if the tenant exercises the option. The treatment should be specified clearly in the contract.

**Rent Credits**: Many lease-option agreements provide that a portion of each monthly rent payment will be credited toward the purchase price. For example, on a $1,800/month rent, $300 might be designated as a rent credit. Over a 24-month option period, that accumulates to $7,200 in credits.

**Purchase Price**: The purchase price is typically locked at the time the lease-option is executed. This protects the tenant in an appreciating market but means the tenant overpays if values decline. Some agreements allow the purchase price to be the appraised value at the time of exercise or the locked price, whichever is lower.

**Option Period**: The time frame during which the tenant can exercise the option, commonly 1-3 years. If the tenant does not exercise by the expiration date, they lose the option consideration and any accumulated rent credits (unless the agreement states otherwise).

### Lease-Purchase

A **lease-purchase** agreement obligates both the tenant and the landlord to complete the purchase at the end of the lease term (or during the specified purchase window). Unlike a lease-option, the tenant **must** purchase, and the landlord **must** sell.

This creates a binding bilateral contract. If the tenant fails to purchase, the landlord may have the right to retain the option consideration and rent credits as liquidated damages, or may sue for specific performance. Similarly, if the landlord refuses to sell, the tenant can seek specific performance in court.

### Legal Considerations in Virginia

Virginia courts treat lease-options and lease-purchases as hybrid instruments. Several important legal considerations apply:

**Recording**: Tenants should record a memorandum of the option agreement in the land records to protect their equitable interest. An unrecorded option may be defeated by a bona fide purchaser who buys the property without knowledge of the tenant's rights.

**Virginia Residential Landlord and Tenant Act (VRLTA)**: The lease portion of the agreement is governed by VRLTA, including security deposit limits, maintenance obligations, and eviction procedures. The purchase option does not exempt the landlord from VRLTA compliance.

**Property Condition**: Since the tenant intends to become the owner, the agreement should address who is responsible for maintenance and repairs during the lease period. Many agreements shift more responsibility to the tenant than a standard lease would.

**Tax Implications**: The IRS generally treats option consideration as ordinary income to the seller in the year received. If the option is exercised, the consideration is reclassified as part of the purchase price. Rent credits may also have tax implications for both parties.

### Practical Risks

**For tenants**: Loss of option consideration and rent credits if unable to secure financing or choose not to purchase. The tenant bears the risk that the property declines in value below the locked purchase price.

**For landlords**: The property is effectively off the market during the option period. If property values rise significantly, the landlord has locked in a lower sale price. If the tenant damages the property and then does not exercise the option, the landlord may have repair costs.

**For agents**: These transactions require careful documentation. Agents should encourage both parties to work with attorneys experienced in lease-option structures. Commission structures should be addressed upfront, as the sale may occur months or years after the initial agreement.`,
        },
        {
          slug: 'bridge-blanket-wraparound-mortgages',
          title: 'Bridge Loans, Blanket Mortgages & Wraparound Mortgages',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'bridge loan',
            'swing loan',
            'blanket mortgage',
            'partial release clause',
            'wraparound mortgage',
            'all-inclusive deed of trust',
            'underlying mortgage',
            'due-on-sale clause',
            'gap financing',
            'short-term financing',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each alternative financing type to its primary use case: bridge loan, blanket mortgage, wraparound mortgage',
            },
            {
              type: 'calculator',
              prompt:
                'A wraparound mortgage is $300,000 at 7%. The underlying mortgage balance is $180,000 at 5%. Calculate the spread the seller earns on the wrapped portion.',
            },
          ],
          content: `## Bridge Loans, Blanket Mortgages, and Wraparound Mortgages

Beyond government-backed programs and standard seller financing, several specialized mortgage structures serve specific real estate needs. Understanding these instruments is essential for advising clients in complex transactions.

### Bridge Loans (Swing Loans)

A **bridge loan** is short-term financing that allows a homeowner to purchase a new home before selling their current one. The bridge loan is secured by the borrower's current home (which has equity) and provides funds for the down payment and possibly closing costs on the new purchase.

**How bridge loans work**:
- Term is typically 6-12 months
- Interest rates are higher than standard mortgages (often 2-4% above conventional rates)
- The loan is repaid when the borrower's existing home sells
- Some bridge loans require monthly interest payments; others allow interest to accrue
- The borrower temporarily carries three debts: the existing mortgage, the bridge loan, and the new mortgage

**When bridge loans are appropriate**: A buyer in a competitive market who must make a non-contingent offer may need bridge financing to avoid a home-sale contingency. In Virginia's Northern Virginia market, where multiple-offer situations are common, bridge loans can make a buyer's offer more competitive.

**Risks**: If the existing home does not sell within the bridge loan term, the borrower faces potential default. Bridge loans also increase total debt-to-income ratios, which can complicate qualification for the new mortgage.

### Blanket Mortgages

A **blanket mortgage** is a single mortgage that covers two or more parcels of real property. These are primarily used by developers and investors rather than individual homebuyers.

**Common uses**:
- A developer purchasing multiple lots in a subdivision finances them under one blanket mortgage
- An investor acquiring a portfolio of rental properties uses a blanket mortgage instead of individual loans for each property
- A builder securing construction financing across multiple units

**Partial Release Clause**: The critical provision in a blanket mortgage is the **partial release clause**, which allows the borrower to obtain release of individual parcels from the mortgage lien upon payment of a specified portion of the total debt. Without this clause, the borrower cannot sell individual lots or units free of the mortgage lien.

For example, a developer purchases 20 lots for $2,000,000 under a blanket mortgage. The partial release clause might specify that upon payment of $125,000 per lot (rather than $100,000, which would be proportional), the lender will release that lot from the blanket mortgage. The excess per-lot payment provides the lender additional security as the portfolio shrinks.

### Wraparound Mortgages

A **wraparound mortgage** (also called an **all-inclusive deed of trust** or AITD) is a form of seller financing where the seller's new mortgage to the buyer "wraps around" the seller's existing mortgage. The seller continues to make payments on the existing (underlying) mortgage while collecting payments from the buyer on the larger wraparound mortgage.

**How it works**:
- The existing mortgage balance is $180,000 at 5% interest
- The seller creates a new wraparound mortgage to the buyer for $300,000 at 7%
- The buyer makes payments to the seller based on the $300,000 at 7%
- The seller makes payments to the original lender based on $180,000 at 5%
- The seller profits from the interest rate spread on the underlying $180,000 (collecting 7% from the buyer, paying 5% to the lender) plus interest on the $120,000 new money portion

**Critical risk: the due-on-sale clause**: Most modern mortgages contain a **due-on-sale clause** that allows the lender to demand full repayment if the property is transferred. Creating a wraparound mortgage technically transfers an interest in the property, which can trigger the due-on-sale clause. If the underlying lender discovers the arrangement and calls the loan, the seller must pay off the existing mortgage immediately.

**Buyer risk**: The buyer depends on the seller to continue making payments on the underlying mortgage. If the seller fails to do so, the underlying lender can foreclose, potentially wiping out the buyer's interest.

**Virginia law**: Wraparound mortgages are legal in Virginia but carry significant risk for both parties. The buyer should require that payments on the underlying mortgage be made through a neutral third-party escrow agent to ensure the seller does not divert funds.`,
        },
      ],
    },
    // ── Chapter 3: Real Estate Taxation ──────────────────────────────────
    {
      slug: 'real-estate-taxation',
      title: 'Real Estate Taxation',
      lessons: [
        {
          slug: 'property-tax-assessment-virginia',
          title: 'Property Tax Assessment in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'ad valorem tax',
            'assessed value',
            'fair market value',
            'equalization',
            'tax rate',
            'millage rate',
            'Board of Equalization',
            'real property tax exemption',
            'land use assessment',
            'tax lien',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'A property has an assessed value of $350,000 and the local tax rate is $0.85 per $100 of assessed value. Calculate the annual property tax.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia property tax assessment procedures and appeals',
            },
            {
              type: 'flashcard',
              prompt:
                'Match Virginia property tax terms: ad valorem, equalization, land use assessment, Board of Equalization',
            },
          ],
          content: `## Property Tax Assessment in Virginia

Property taxes are the primary revenue source for Virginia's cities, counties, and towns. Virginia's property tax system is governed by the state Constitution and the Code of Virginia, but administration and rate-setting are local functions.

### Ad Valorem Taxation

Virginia imposes **ad valorem** (according to value) taxes on real property. This means the tax is based on the assessed value of the property. The Virginia Constitution requires that all real property be assessed at **100% of fair market value**, and assessments must be uniform within each locality.

### Assessment Process

Each Virginia locality employs or contracts a **Commissioner of the Revenue** or an assessor's office to determine property values. The assessment process involves:

1. **Mass appraisal**: Assessors use market data, cost analysis, and income approaches to value all properties in the jurisdiction
2. **Reassessment cycles**: Virginia law requires reassessment at least every four years for most localities. Some localities reassess annually or biennially. Cities like Arlington and Fairfax County reassess annually.
3. **Notice of assessment**: Property owners receive notice of their assessed value and have the right to review the assessment and request corrections

### Tax Rate Calculation

The **tax rate** is set by the local governing body (Board of Supervisors for counties, City Council for independent cities). Virginia expresses tax rates as dollars per $100 of assessed value. For example:

- Assessed value: $350,000
- Tax rate: $0.85 per $100
- Annual tax: ($350,000 / $100) x $0.85 = **$2,975**

Tax rates vary significantly across Virginia. Some rural localities have rates below $0.50 per $100, while certain cities and counties in Northern Virginia may exceed $1.00 per $100. However, because assessed values are also higher in Northern Virginia, comparing tax rates alone is misleading. The actual tax burden depends on both the rate and the assessed value.

### Equalization and Appeals

The **Board of Equalization** is a local body appointed to hear property tax assessment appeals. If a property owner believes their assessment exceeds fair market value or is not uniform with comparable properties, they can appeal:

1. **Informal review**: Contact the assessor's office to discuss the assessment and present comparable sales data
2. **Board of Equalization**: File a formal appeal. The board holds hearings and can adjust assessments
3. **Circuit Court**: If unsatisfied with the Board of Equalization's decision, the owner can appeal to the local circuit court

The burden of proof is on the property owner to demonstrate that the assessment is incorrect. The most effective evidence includes recent sales of comparable properties that suggest a lower value.

### Special Assessment Programs

**Land Use Assessment (Use Value Taxation)**: Virginia allows qualifying agricultural, horticultural, forest, and open-space land to be assessed at its **use value** rather than fair market value. This can dramatically reduce assessments. For example, a 50-acre farm near a developing suburban area might have a fair market value of $25,000/acre but a use value of $800/acre. If the land is converted to a non-qualifying use, the owner owes **rollback taxes** for the prior five years (the difference between use value tax and fair market value tax).

**Tax Exemptions**: Virginia provides full or partial property tax exemptions for:
- Certain disabled veterans (100% service-connected disability)
- Elderly and disabled homeowners meeting income and net worth limits (varies by locality)
- Property owned by religious, charitable, and educational organizations used for tax-exempt purposes

### Tax Liens and Enforcement

Property taxes in Virginia create a **lien** on the property as of January 1 of each year. If taxes are not paid, the locality can enforce the lien through a **tax sale** or **judicial sale**. Delinquent property tax liens have **super-priority**, meaning they take precedence over most other liens, including mortgage liens. This is why lenders escrow property tax payments and pay them on behalf of borrowers.`,
        },
        {
          slug: 'capital-gains-tax-primary-residence',
          title: 'Capital Gains Tax: Primary Residence Exclusion',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: [
            'capital gains tax',
            'Section 121 exclusion',
            'primary residence exclusion',
            'ownership test',
            'use test',
            'adjusted basis',
            'cost basis',
            'capital improvements',
            'depreciation recapture',
            'short-term vs long-term capital gains',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'A married couple bought their home for $280,000, added $45,000 in improvements, and sold for $750,000. Calculate their taxable gain after the Section 121 exclusion.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the ownership and use tests for the Section 121 exclusion',
            },
            {
              type: 'scenario',
              prompt:
                'A homeowner lived in the property for 18 months, then rented it for 1 year, then moved back for 6 months before selling. Do they qualify for the exclusion?',
            },
          ],
          content: `## Capital Gains Tax and the Primary Residence Exclusion

When real property is sold for more than its adjusted basis, the profit is a **capital gain** subject to federal (and potentially state) income tax. Understanding how capital gains are calculated and the available exclusions is essential knowledge for real estate professionals.

### Calculating Capital Gains

The capital gain is the difference between the **amount realized** (sale price minus selling expenses) and the property's **adjusted basis**.

**Cost Basis**: The original purchase price plus acquisition costs (title insurance, attorney fees, transfer taxes, recording fees at purchase).

**Adjusted Basis**: The cost basis plus **capital improvements** minus any depreciation taken. Capital improvements are permanent enhancements that add value or extend the property's useful life: a new roof, kitchen renovation, room addition, or new HVAC system. Routine maintenance and repairs (painting, fixing a leaky faucet) are not capital improvements.

**Example**:
- Purchase price: $280,000
- Acquisition costs: $8,000
- Capital improvements over 10 years: $45,000
- **Adjusted basis**: $333,000
- Sale price: $750,000
- Selling expenses (commission, transfer tax, etc.): $45,000
- **Amount realized**: $705,000
- **Capital gain**: $705,000 - $333,000 = **$372,000**

### Short-Term vs. Long-Term

Property held for **one year or less** before sale generates a **short-term capital gain**, taxed at ordinary income rates (up to 37%). Property held for **more than one year** generates a **long-term capital gain**, taxed at preferential rates: 0%, 15%, or 20%, depending on the taxpayer's income bracket. Most homeowners pay the 15% rate on long-term gains. High-income filers (MAGI over $200K single / $250K MFJ) also pay the **3.8% Net Investment Income Tax (NIIT)** on real estate investment gains.

### Section 121: Primary Residence Exclusion

IRC Section 121 provides a generous exclusion for the sale of a primary residence:

- **Single filers**: Exclude up to **$250,000** of gain
- **Married filing jointly**: Exclude up to **$500,000** of gain

To qualify for the full exclusion, the taxpayer must meet two tests:

**Ownership Test**: The taxpayer must have owned the property for at least **2 of the 5 years** preceding the sale.

**Use Test**: The taxpayer must have used the property as their **principal residence** for at least **2 of the 5 years** preceding the sale. The two years do not need to be consecutive.

The ownership and use periods must overlap within the 5-year lookback period, but the taxpayer does not need to be living in the home at the time of sale. This allows someone to move out, rent the property for up to 3 years, and still claim the exclusion.

**Note:** For sales after 2008, any periods of 'non-qualified use' (periods where the property was not used as the primary residence after 2008, such as rental years) reduce the exclusion pro rata. See IRC §121(b)(5). Pre-2008 rental use does not count against the exclusion.

**Applying the exclusion to our example**: If the sellers are married filing jointly, they exclude $500,000 of the $372,000 gain. The entire gain is excluded, and they owe **zero capital gains tax**. If a single filer, they exclude $250,000 and owe tax on $122,000.

### Partial Exclusion

If a taxpayer does not meet the full 2-year ownership and use tests, they may qualify for a **partial exclusion** if the sale was due to:
- A change in employment (new job at least 50 miles farther from the home)
- Health reasons
- Other unforeseen circumstances defined by IRS regulations

The partial exclusion is prorated based on the fraction of the 2-year requirement that was met.

### Frequency Limitation

The Section 121 exclusion can only be used once every **2 years**. A taxpayer who sold a primary residence and claimed the exclusion cannot claim it again on another sale within 2 years.

### Virginia State Tax

Virginia taxes capital gains as ordinary income. Virginia's top individual income tax rate is 5.75% on taxable income over $17,000. The federal Section 121 exclusion also applies to Virginia state tax, so gains excluded from federal tax are also excluded from Virginia tax.`,
        },
        {
          slug: '1031-tax-deferred-exchanges',
          title: '1031 Tax-Deferred Exchanges',
          lessonType: 'interactive',
          estimatedMinutes: 26,
          keyTerms: [
            '1031 exchange',
            'like-kind exchange',
            'qualified intermediary',
            'boot',
            'identification period',
            'exchange period',
            'three-property rule',
            '200% rule',
            'reverse exchange',
            'delayed exchange',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'An investor sells a rental property for $500,000 (basis $300,000). They identify a replacement property for $550,000 on Day 30. Walk through the 1031 timeline and calculate if any boot is received.',
            },
            {
              type: 'flashcard',
              prompt:
                'Match 1031 exchange terms: boot, qualified intermediary, identification period, three-property rule, 200% rule',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of 1031 exchange timelines and requirements',
            },
          ],
          content: `## 1031 Tax-Deferred Exchanges

Section 1031 of the Internal Revenue Code allows investors to defer capital gains taxes when they sell investment or business-use property and reinvest the proceeds into **like-kind** replacement property. This is one of the most powerful tax planning tools available to real estate investors.

### What Qualifies

**Like-kind** in real estate is broadly defined. Any real property held for investment or business use can be exchanged for any other real property held for investment or business use. A residential rental property can be exchanged for a commercial building, raw land, or even a different type of investment property. The properties do not need to be of equal value.

**What does NOT qualify**:
- Primary residences (use Section 121 instead)
- Property held primarily for sale (fix-and-flip inventory)
- Personal property (since the Tax Cuts and Jobs Act of 2017, Section 1031 applies only to real property)
- Foreign real property cannot be exchanged for domestic real property

### The Delayed Exchange Process

The most common 1031 structure is the **delayed exchange** (also called a Starker exchange). The process follows strict timelines:

**Step 1: Sell the Relinquished Property**. The investor sells the property they want to exchange out of. At closing, the sale proceeds must go to a **Qualified Intermediary (QI)**, not to the investor. If the investor receives or has constructive receipt of the proceeds, the exchange fails.

**Step 2: Identification Period (45 days)**. Within **45 calendar days** of closing on the relinquished property, the investor must identify potential replacement properties in writing to the QI. There are three identification rules:

- **Three-Property Rule**: Identify up to 3 properties of any value
- **200% Rule**: Identify any number of properties, but their total fair market value cannot exceed 200% of the relinquished property's value
- **95% Rule**: Identify any number of properties of any value, but the investor must acquire at least 95% of the total identified value (rarely used)

**Step 3: Exchange Period (180 days)**. The investor must close on the replacement property within **180 calendar days** of the relinquished property sale (or by the due date of the investor's tax return, including extensions, whichever is earlier). The QI uses the exchange proceeds to fund the purchase.

### Boot

**Boot** is anything received in the exchange that is not like-kind real property. Common forms of boot include:

- **Cash boot**: If the replacement property costs less than the relinquished property, the excess cash is boot and is taxable
- **Mortgage boot**: If the replacement property has less debt than the relinquished property, the debt relief is treated as boot

To fully defer all capital gains, the investor must reinvest **all** of the net proceeds and acquire replacement property of **equal or greater value** with **equal or greater debt**.

### Qualified Intermediary

The **Qualified Intermediary** is the linchpin of a 1031 exchange. The QI holds the exchange proceeds, prepares the exchange documentation, and facilitates the transfer. The QI cannot be a related party (no family members, no attorney or accountant who has served the investor in the past 2 years).

Choosing a reputable QI is critical. Exchange funds held by the QI are not FDIC-insured by default, and there have been cases of QI fraud and insolvency. The investor should verify the QI's insurance, bonding, and escrow practices.

### Reverse Exchanges

In a **reverse exchange**, the investor acquires the replacement property before selling the relinquished property. This is used when the replacement property opportunity cannot wait. Reverse exchanges are more complex and expensive because an Exchange Accommodation Titleholder (EAT) must hold title to one of the properties during the exchange period.

### Virginia Considerations

Virginia conforms to the federal 1031 exchange rules. Gains deferred at the federal level are also deferred for Virginia income tax purposes. However, if the investor later sells the replacement property in a taxable transaction, the deferred gain becomes taxable at both the federal and state level. There is no separate Virginia election for 1031 exchanges.

### Why Agents Should Understand 1031 Exchanges

Agents working with investors frequently encounter 1031 exchange transactions. An agent who understands the timelines and requirements can help their client avoid costly mistakes, such as missing the 45-day identification deadline or inadvertently touching the exchange proceeds.`,
        },
        {
          slug: 'tax-deductions-homeowners-investors',
          title: 'Tax Deductions for Homeowners and Investors',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'mortgage interest deduction',
            'SALT deduction',
            'standard deduction',
            'itemized deductions',
            'passive activity loss',
            'real estate professional status',
            'Schedule E',
            'depreciation',
            'home office deduction',
            'points deduction',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the tax deductions available to homeowners vs. real estate investors',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each tax deduction to the correct taxpayer category: mortgage interest, SALT, passive activity loss, Schedule E, depreciation',
            },
          ],
          content: `## Tax Deductions for Homeowners and Investors

The tax code provides several deductions that benefit real property owners. The available deductions differ significantly depending on whether the property is a personal residence or an investment property.

### Homeowner Deductions

**Mortgage Interest Deduction**: Homeowners who itemize deductions on their federal return can deduct mortgage interest on acquisition indebtedness up to **$750,000** ($375,000 for married filing separately). This limit was reduced from $1,000,000 by the Tax Cuts and Jobs Act (TCJA) of 2017 for loans originated after December 15, 2017. Loans originated before that date are grandfathered at the $1,000,000 limit.

The deduction applies to interest on loans used to buy, build, or substantially improve the taxpayer's primary residence or one second home. Home equity loan interest is deductible only if the loan proceeds are used for home improvements (not for personal expenses like credit card payoff).

**Mortgage Points**: Points paid at closing to reduce the interest rate are generally deductible. On a purchase loan, points can be deducted in the year paid. On a refinance, points must be amortized over the life of the loan.

**State and Local Tax (SALT) Deduction**: Homeowners can deduct state and local property taxes, plus state income or sales taxes, subject to a combined **$10,000 cap** ($5,000 married filing separately) imposed by the TCJA. In Virginia, where property taxes can be substantial, many homeowners reach this cap. The SALT cap makes the mortgage interest deduction less valuable for some taxpayers who switch from itemizing to claiming the standard deduction.

**Standard Deduction vs. Itemizing**: As of recent tax years, the standard deduction is $14,600 (single) and $29,200 (married filing jointly) (2024 values; 2025: $15,000 / $30,000 — verify current year). Homeowners only benefit from mortgage interest and property tax deductions if their total itemized deductions exceed the standard deduction. The TCJA's increased standard deduction means fewer homeowners itemize than before 2018.

### Investor Deductions

Real estate investors have access to additional deductions that can significantly reduce their tax liability.

**Depreciation**: Investment property (but not the underlying land) can be depreciated on a straight-line basis over **27.5 years** for residential rental property and **39 years** for commercial property. Depreciation is a non-cash deduction that reduces taxable income without reducing actual cash flow. This is one of the most powerful tax benefits of real estate investing.

**Operating Expenses**: All ordinary and necessary expenses of operating rental property are deductible on **Schedule E**: property management fees, insurance, repairs, advertising for tenants, legal and accounting fees, utilities (if paid by the owner), travel to the property, and more.

**Passive Activity Loss Rules**: Rental income is generally classified as **passive income**, and rental losses are **passive losses**. Under IRC Section 469, passive losses can only offset passive income. However, there is an important exception: taxpayers with adjusted gross income (AGI) of $100,000 or less can deduct up to **$25,000** in rental losses against ordinary income if they actively participate in managing the property. This allowance phases out between $100,000 and $150,000 AGI.

**Real Estate Professional Status**: Taxpayers who spend more than 750 hours per year in real estate activities (and more time in real estate than any other profession) can qualify as a **real estate professional**. This status allows rental losses to be treated as non-passive, meaning they can offset ordinary income without the $25,000 limitation. This is a significant tax planning strategy for qualifying individuals.

### Virginia Tax Considerations

Virginia generally conforms to federal tax treatment for these deductions. Virginia allows itemized deductions on the state return, including mortgage interest and property taxes (without the $10,000 SALT cap that applies at the federal level, since the SALT cap only limits deductions on the federal return). Virginia's standard deduction is significantly lower than the federal standard deduction, so many Virginia taxpayers who claim the federal standard deduction still itemize on their Virginia return.

### Home Office Deduction

Self-employed individuals (including independent contractor real estate agents) may deduct home office expenses if they maintain a dedicated space used **regularly and exclusively** for business. The deduction can be calculated using the simplified method ($5 per square foot, up to 300 square feet) or the regular method (allocating actual expenses based on the percentage of the home used for business).`,
        },
      ],
    },
    // ── Chapter 4: Investment Analysis ───────────────────────────────────
    {
      slug: 'investment-analysis',
      title: 'Investment Analysis',
      lessons: [
        {
          slug: 'cash-flow-analysis-noi',
          title: 'Cash Flow Analysis and NOI Calculation',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'net operating income',
            'NOI',
            'gross scheduled income',
            'effective gross income',
            'vacancy rate',
            'operating expenses',
            'cash flow before tax',
            'debt service',
            'potential gross income',
            'expense ratio',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'A 10-unit apartment building rents each unit for $1,200/month. Vacancy rate is 5%. Annual operating expenses are $62,000. Calculate the NOI.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your ability to distinguish between items included and excluded from NOI calculations',
            },
            {
              type: 'scenario',
              prompt:
                'An investor is evaluating a property with $180,000 gross scheduled income, 8% vacancy, and $72,000 in operating expenses. The annual mortgage payment is $68,000. Calculate NOI and cash flow before tax.',
            },
          ],
          content: `## Cash Flow Analysis and Net Operating Income

Evaluating the financial performance of investment real estate requires a structured analysis of income and expenses. The cornerstone of this analysis is **Net Operating Income (NOI)**, the single most important metric in commercial and investment real estate.

### The Income and Expense Framework

Investment property analysis follows a standard cascade from gross income to cash flow:

**Step 1: Potential Gross Income (PGI)** (also called Gross Scheduled Income)
This is the total income the property would generate if every unit were rented at market rate for the entire year with no vacancies. For a 10-unit building where each unit rents for $1,200/month:
PGI = 10 units x $1,200/month x 12 months = **$144,000**

PGI also includes other income sources such as parking fees, laundry income, storage unit rentals, pet fees, and late fees.

**Step 2: Vacancy and Collection Loss**
No property operates at 100% occupancy year-round. The vacancy rate accounts for periods when units are vacant between tenants and for uncollected rent from delinquent tenants. Market vacancy rates vary by location and property type.

Vacancy and collection loss = PGI x vacancy rate
Using a 5% vacancy rate: $144,000 x 0.05 = **$7,200**

**Step 3: Effective Gross Income (EGI)**
EGI = PGI - Vacancy and collection loss + Other income
EGI = $144,000 - $7,200 = **$136,800**

**Step 4: Operating Expenses**
These are the costs of running the property, including:
- Property taxes
- Insurance
- Utilities (owner-paid)
- Property management fees (typically 8-12% of collected rents)
- Maintenance and repairs
- Landscaping and snow removal
- Advertising and leasing costs
- Legal and accounting fees
- Reserves for replacement (funds set aside for major capital items like roofs, HVAC, appliances)

**Items NOT included in operating expenses**: Mortgage payments (debt service), income taxes, depreciation, and capital expenditures. These are excluded because NOI measures the property's operating performance independent of financing and tax considerations.

**Step 5: Net Operating Income (NOI)**
NOI = EGI - Operating Expenses
If operating expenses are $62,000: NOI = $136,800 - $62,000 = **$74,800**

### Cash Flow Before Tax (CFBT)

While NOI measures property performance, an investor's actual cash return depends on financing. **Cash flow before tax** accounts for the mortgage:

CFBT = NOI - Annual Debt Service
If the annual mortgage payment is $52,000: CFBT = $74,800 - $52,000 = **$22,800**

This is the actual cash the investor receives each year before income taxes.

### Operating Expense Ratio

The **operating expense ratio** (OER) measures what percentage of effective gross income is consumed by operating expenses:

OER = Operating Expenses / EGI
OER = $62,000 / $136,800 = **45.3%**

Typical OER ranges:
- Single-family rentals: 35-45%
- Small apartments: 40-50%
- Large apartments: 45-55%
- Commercial/retail: varies widely

A higher OER means less of each rent dollar flows to the owner. Investors compare OER across properties and over time to identify efficiency improvements.

### Break-Even Ratio

The **break-even ratio** (BER) tells the investor what occupancy level is needed to cover all expenses and debt service:

BER = (Operating Expenses + Debt Service) / PGI
BER = ($62,000 + $52,000) / $144,000 = **79.2%**

This means the property needs at least 79.2% occupancy to break even. With a 5% vacancy rate (95% occupancy), there is a comfortable margin above break-even.

### Why NOI Matters

NOI is used to calculate capitalization rates, determine property value using the income approach, and compare properties regardless of their financing. Lenders use NOI to calculate debt service coverage ratios (DSCR). A solid understanding of NOI is foundational to all investment real estate analysis.`,
        },
        {
          slug: 'capitalization-rate-grm',
          title: 'Capitalization Rate and Gross Rent Multiplier',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'capitalization rate',
            'cap rate',
            'gross rent multiplier',
            'GRM',
            'income approach to value',
            'direct capitalization',
            'band of investment',
            'market cap rate',
            'reversionary value',
            'overall rate',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'A property has an NOI of $85,000 and the market cap rate for comparable properties is 6.5%. Calculate the indicated value. Then calculate GRM if gross annual rent is $120,000 and the sale price is $1,300,000.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of when to use cap rate vs. GRM and what each metric reveals about investment quality',
            },
          ],
          content: `## Capitalization Rate and Gross Rent Multiplier

Two of the most commonly used metrics in investment real estate analysis are the **capitalization rate (cap rate)** and the **gross rent multiplier (GRM)**. Both relate a property's income to its value, but they measure different things and are appropriate in different contexts.

### Capitalization Rate

The **cap rate** expresses the relationship between a property's Net Operating Income and its value or sale price. It is the rate of return an investor would receive if they purchased the property with all cash (no financing).

**Formula**: Cap Rate = NOI / Value (or Sale Price)

Rearranged to solve for value: **Value = NOI / Cap Rate**

This rearranged formula is the basis of the **direct capitalization** method, one of the income approach techniques used by appraisers and investors to estimate property value.

**Example**: A property generates $85,000 NOI. Comparable properties in the area have sold at cap rates of 6.5%.
Value = $85,000 / 0.065 = **$1,307,692**

### Interpreting Cap Rates

Cap rates are **inversely related** to value. A lower cap rate means a higher price relative to income, and a higher cap rate means a lower price relative to income.

- **Low cap rate (3-5%)**: Indicates a market where investors are willing to pay a premium, typically in prime locations with stable tenants and strong appreciation potential. Lower perceived risk.
- **Moderate cap rate (5-7%)**: Balanced risk and return, common for well-located suburban apartments and commercial properties.
- **High cap rate (7-10%+)**: Indicates higher perceived risk, often due to location, property condition, tenant quality, or market conditions. Also common in secondary and tertiary markets.

A cap rate is **not** the investor's actual return because it does not account for financing, taxes, or appreciation. It is a snapshot of the relationship between income and price at a point in time.

### Market Cap Rate

The **market cap rate** is derived from recent sales of comparable properties. Analysts calculate the cap rate for each sale (using the property's NOI at the time of sale divided by the sale price) and use the range of cap rates to estimate the appropriate rate for the subject property.

Factors that influence market cap rates include:
- Interest rates (cap rates tend to move in the same direction as interest rates)
- Local market conditions (supply and demand for that property type)
- Property condition and age
- Tenant quality and lease terms
- Location and accessibility

### Gross Rent Multiplier (GRM)

The **GRM** is a simpler metric that relates a property's sale price to its gross rental income. It does not account for vacancy or operating expenses, making it a rougher tool than the cap rate.

**Formula**: GRM = Sale Price / Gross Annual Rent (or Gross Monthly Rent)

To estimate value using GRM: **Value = Gross Annual Rent x GRM**

**Example**: A property sold for $1,300,000 and has gross annual rent of $120,000.
GRM = $1,300,000 / $120,000 = **10.83**

If a comparable property generates $110,000 in gross annual rent:
Estimated value = $110,000 x 10.83 = **$1,191,300**

### GRM vs. Cap Rate

**GRM is best used for**:
- Quick screening and comparison of similar properties
- Residential income properties (2-4 units) where detailed expense data may not be available
- Initial analysis before diving into detailed NOI calculations

**Cap rate is best used for**:
- Detailed investment analysis of commercial and larger residential properties
- Comparing properties with different expense structures
- Formal appraisals using the income approach
- Making investment decisions where operating efficiency matters

### Limitations

Both metrics are point-in-time measurements. They do not account for future income growth, expense changes, or appreciation. They assume current conditions will persist indefinitely.

Cap rates are only as reliable as the NOI figure used. If the NOI is inflated by deferred maintenance (low repair expenses that will eventually be incurred) or temporary above-market rents, the cap rate will understate the true risk.

GRM ignores expenses entirely. Two properties with the same gross rent and GRM could have vastly different NOIs if one has significantly higher operating expenses than the other.`,
        },
        {
          slug: 'leverage-equity-buildup',
          title: 'Leverage and Equity Buildup',
          lessonType: 'scenario',
          estimatedMinutes: 23,
          keyTerms: [
            'leverage',
            'positive leverage',
            'negative leverage',
            'loan-to-value ratio',
            'equity buildup',
            'principal reduction',
            'appreciation',
            'cash-on-cash return',
            'total return',
            'amortization',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'An investor puts $100,000 down on a $400,000 property generating $28,000 NOI. The mortgage payment is $18,000/year ($6,000 principal, $12,000 interest). Calculate cash-on-cash return, equity buildup from principal reduction, and total first-year return.',
            },
            {
              type: 'calculator',
              prompt:
                'Compare the return on a $500,000 property purchased all-cash (NOI $35,000) vs. with $100,000 down and a $400,000 loan at 6.5% (annual payment $30,340). Which has better cash-on-cash return?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of positive vs. negative leverage and when leveraging increases investor risk',
            },
          ],
          content: `## Leverage and Equity Buildup

**Leverage** is the use of borrowed money to increase the potential return on investment. In real estate, leverage means using a mortgage to purchase property with a fraction of the total price as the investor's own capital. Leverage is one of the primary reasons real estate has historically been an attractive investment vehicle.

### How Leverage Works

Consider two scenarios for purchasing a $500,000 property with $35,000 annual NOI:

**Scenario A: All Cash Purchase**
- Investment: $500,000
- NOI: $35,000
- Cash-on-cash return: $35,000 / $500,000 = **7.0%**

**Scenario B: $100,000 Down, $400,000 Mortgage at 6.5%**
- Annual debt service: approximately $30,340 (30-year amortization)
- Cash flow: $35,000 - $30,340 = **$4,660**
- Cash-on-cash return: $4,660 / $100,000 = **4.66%**

Wait. In this scenario, the leveraged return is actually **lower** than the unleveraged return. This is because the mortgage interest rate (6.5%) exceeds the property's cap rate (7.0%). This is called **negative leverage** and it occurs when the cost of borrowing exceeds the property's unleveraged return.

### Positive vs. Negative Leverage

**Positive leverage** occurs when the property's cap rate (or overall rate of return) exceeds the mortgage interest rate. In this case, borrowing money amplifies the investor's return because each borrowed dollar earns more than it costs.

**Negative leverage** occurs when the borrowing cost exceeds the property's return rate. Each borrowed dollar costs more than it earns, reducing the investor's cash-on-cash return below what they would earn with an all-cash purchase.

Despite negative leverage reducing cash flow returns, investors may still choose to borrow if they expect **appreciation** and **equity buildup** to produce a strong total return.

### Equity Buildup

Equity in a property grows through two mechanisms:

**Principal Reduction (Amortization)**: Each mortgage payment includes both interest and principal. The principal portion reduces the loan balance, increasing the owner's equity. In the early years of a mortgage, most of the payment goes to interest. Over time, the principal portion grows. This forced savings effect builds wealth automatically.

**Appreciation**: If the property increases in value, the owner's equity grows by the full amount of the appreciation, even though the owner only invested a fraction of the property's value. This is the leverage multiplier effect.

**Example**: An investor purchases a $400,000 property with $100,000 down. If the property appreciates 3% in Year 1:
- Appreciation: $400,000 x 3% = $12,000
- This $12,000 gain is on a $100,000 investment = **12% return from appreciation alone**
- Without leverage (all-cash purchase), the same $12,000 gain on $400,000 invested = **3% return**

Leverage quadrupled the appreciation return in this example.

### Cash-on-Cash Return

**Cash-on-cash return** measures the annual cash flow relative to the total cash invested:

Cash-on-Cash = Annual Cash Flow Before Tax / Total Cash Invested

Total cash invested includes the down payment, closing costs, and any initial capital improvements. This metric is the most practical measure of an investor's annual cash return.

### Total Return

Sophisticated investors evaluate **total return**, which includes:
1. Cash flow (income after debt service)
2. Principal reduction (equity buildup from amortization)
3. Appreciation (increase in property value)
4. Tax benefits (depreciation shelter)

In our leveraged example:
- Cash flow: $4,660
- Year 1 principal reduction: approximately $4,800
- Appreciation (3%): $12,000
- Total return: $4,660 + $4,800 + $12,000 = **$21,460** on $100,000 invested = **21.46%**

### Leverage Risk

Leverage magnifies both gains and losses. If the property value declines, the investor can quickly find themselves "underwater" (owing more than the property is worth). If cash flow turns negative, the investor must feed the property from other income sources. Higher leverage ratios increase both potential return and potential risk.`,
        },
        {
          slug: 'depreciation-investment-property',
          title: 'Depreciation for Investment Property',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'depreciation',
            'cost recovery',
            'straight-line depreciation',
            '27.5 years',
            '39 years',
            'depreciable basis',
            'land value allocation',
            'depreciation recapture',
            'Section 1250',
            'cost segregation',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'An investor purchases a residential rental for $400,000. The land is valued at $80,000. Calculate the annual depreciation deduction and the adjusted basis after 5 years.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of depreciation rules, recapture, and the difference between residential and commercial schedules',
            },
            {
              type: 'flashcard',
              prompt:
                'Match depreciation concepts: 27.5 years, 39 years, depreciable basis, cost segregation, Section 1250 recapture',
            },
          ],
          content: `## Depreciation for Investment Property

**Depreciation** (also called cost recovery) is a non-cash tax deduction that allows investment property owners to recover the cost of the building over its useful life as defined by the IRS. It is one of the most significant tax advantages of real estate investment because it reduces taxable income without reducing actual cash flow.

### The Basics

The IRS allows depreciation on income-producing property because buildings theoretically wear out over time. Even though real estate often appreciates in value, the tax code permits depreciation as a cost recovery mechanism.

**Key rules**:
- Only the **building** (improvements) can be depreciated, not the **land**. Land is not a wasting asset and has an unlimited useful life.
- The property must be used for business or investment purposes. Primary residences and second homes cannot be depreciated.
- Depreciation begins when the property is **placed in service** (available for rent), not necessarily when it is purchased or when tenants actually occupy it.

### Depreciation Schedules

**Residential rental property**: Depreciated over **27.5 years** using the straight-line method. Residential rental is defined as property where 80% or more of the gross rental income comes from residential dwelling units.

**Commercial property**: Depreciated over **39 years** using the straight-line method. This includes office buildings, retail space, warehouses, and any property that does not qualify as residential.

### Calculating Depreciation

**Step 1: Determine the depreciable basis**

The depreciable basis is the total cost of the property (purchase price plus acquisition costs) minus the value of the land.

Example:
- Purchase price: $400,000
- Closing costs (capitalized): $12,000
- Total cost: $412,000
- Land value: $80,000
- **Depreciable basis**: $412,000 - $80,000 = **$332,000**

The land-to-improvement allocation can be based on the tax assessor's ratio, an appraisal, or another reasonable method. The IRS may challenge an allocation that assigns an unreasonably low value to land.

**Step 2: Apply the depreciation rate**

Annual depreciation = Depreciable basis / Useful life
$332,000 / 27.5 = **$12,073 per year**

This $12,073 annual deduction reduces the investor's taxable rental income. If the property generates $28,000 NOI and the investor has $15,000 in mortgage interest, the taxable income before depreciation is $13,000. After the $12,073 depreciation deduction, taxable income drops to just **$927**.

### Adjusted Basis Over Time

Each year's depreciation reduces the property's **adjusted basis**:

After 5 years:
- Accumulated depreciation: $12,073 x 5 = $60,365
- Adjusted basis: $332,000 - $60,365 = **$271,635** (plus land value of $80,000 = $351,635 total)

The adjusted basis is used to calculate capital gain when the property is sold.

### Depreciation Recapture

When a depreciated property is sold, the IRS requires the investor to **recapture** the depreciation taken. Under **Section 1250**, depreciation recapture on real property is taxed at a maximum rate of **25%**, which is higher than the 15% or 20% long-term capital gains rate but lower than ordinary income rates.

Using our example, if the property sells for $480,000 after 5 years:
- Adjusted basis (total): $351,635
- Gain: $480,000 - $351,635 = $128,365
- Depreciation recapture: $60,365 taxed at up to 25%
- Remaining gain: $128,365 - $60,365 = $68,000 taxed at long-term capital gains rates

### Cost Segregation

**Cost segregation** is a tax strategy that accelerates depreciation by reclassifying certain building components (carpeting, appliances, site improvements, decorative finishes) as personal property or land improvements, which have shorter depreciation lives (5, 7, or 15 years). A cost segregation study performed by a qualified engineer or tax professional can significantly increase depreciation deductions in the early years of ownership.

Cost segregation is most beneficial for properties acquired or placed in service recently and is generally worth the study cost for properties valued at $1 million or more. However, smaller investors should discuss the option with their tax advisor.`,
        },
      ],
    },
  ],
}

// ── Module 10: The Virginia Residential Transaction ──────────────────────────

const module10: CourseModule = {
  slug: 'virginia-residential-transaction',
  title: 'The Virginia Residential Transaction',
  subtitle:
    'From listing to closing and beyond: navigating the Virginia transaction process',
  examWeight: '12% of exam',
  chapters: [
    // ── Chapter 1: Pre-Listing to Contract ────────────────────────────────
    {
      slug: 'pre-listing-to-contract',
      title: 'Pre-Listing to Contract',
      lessons: [
        {
          slug: 'cma-preparation-pricing-strategy',
          title: 'CMA Preparation and Pricing Strategy',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'comparative market analysis',
            'CMA',
            'comparable sales',
            'active listings',
            'pending sales',
            'expired listings',
            'price adjustments',
            'days on market',
            'absorption rate',
            'listing price range',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'You are preparing a CMA for a 3-bedroom, 2-bath home in Henrico County. Select the best comparables from a list of 8 recent sales and explain your adjustments.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of CMA preparation, including which data sources to use and how to make valid adjustments',
            },
            {
              type: 'calculator',
              prompt:
                'A comparable sold for $320,000 with 3 bedrooms. The subject has 4 bedrooms. If the market adjustment for an additional bedroom is $12,000, calculate the adjusted sale price of the comparable.',
            },
          ],
          content: `## CMA Preparation and Pricing Strategy

A **Comparative Market Analysis (CMA)** is the foundation of every listing presentation and every buyer's offer strategy. A well-prepared CMA helps sellers set a competitive listing price and helps buyers craft informed offers. While a CMA is not an appraisal, it uses similar methods to estimate a property's market value.

### What Is a CMA?

A CMA is an analysis prepared by a licensed real estate agent that compares the subject property to similar properties that have recently sold, are currently listed, or were listed but did not sell. The analysis results in a recommended listing price range for the seller or an offer price recommendation for the buyer.

**Important distinction**: A CMA is an agent's professional opinion of value, not an appraisal. Only a licensed appraiser can provide a formal appraisal. Agents should never represent a CMA as an appraisal, and the CMA document should include a disclaimer stating that it is not an appraisal.

### Data Sources

Virginia agents typically access CMA data through:
- **MLS (Multiple Listing Service)**: The primary source for comparable sales, active listings, and expired listings. Virginia's major MLS systems include REIN (Real Estate Information Network, serving Hampton Roads), CVR MLS (Central Virginia), Bright MLS (Northern Virginia), and others.
- **Public records**: Tax assessment data, deed records, and plat information from the local Commissioner of the Revenue or assessor's office
- **Agent knowledge**: Personal familiarity with the neighborhood, recent private sales, and market trends that may not be captured in MLS data

### Selecting Comparables

The best comparables share these characteristics with the subject:
- **Location**: Same subdivision or neighborhood, ideally within 1 mile. Location is the most important factor.
- **Recency**: Sold within the last **3-6 months**. In rapidly changing markets, more recent sales carry more weight.
- **Similarity**: Similar in size (within 10-15% of gross living area), age, style, condition, bedroom/bathroom count, and features
- **Market conditions**: Arm's length transactions only. Exclude foreclosures, short sales, and related-party sales unless those represent the prevailing market.

### Types of Comparables

**Sold comparables (closed sales)**: The most reliable indicator of market value. These represent what buyers have actually paid.

**Active listings**: Show the current competition. Help determine what the market is offering at the time of listing. Prices are aspirational (what sellers want) and typically represent the ceiling.

**Pending sales**: Indicate current buyer activity and direction of the market. Sale prices are usually not yet public.

**Expired and withdrawn listings**: Properties that did not sell. These provide important information about pricing mistakes and can show the price ceiling the market will not support.

### Making Adjustments

No two properties are identical. Adjustments account for differences between the comparable and the subject:

- If the comparable has a feature the subject lacks, **subtract** the value of that feature from the comparable's sale price
- If the subject has a feature the comparable lacks, **add** the value of that feature to the comparable's sale price

**Always adjust the comparable to the subject**, never the other way around.

Common adjustments include:
- Gross living area (price per square foot)
- Bedroom and bathroom count
- Garage (presence, size)
- Lot size
- Condition and updates (renovated kitchen, new roof)
- Age of home
- Amenities (pool, finished basement, fireplace)

### Absorption Rate and Market Conditions

The **absorption rate** measures how quickly homes are selling in a given market. It is calculated by dividing the number of homes sold in a period by the number of months in that period, producing a sales-per-month figure.

- **Less than 4 months of inventory**: Seller's market (prices trending up)
- **4-6 months of inventory**: Balanced market
- **More than 6 months of inventory**: Buyer's market (prices trending down or flat)

The absorption rate helps agents advise sellers on pricing strategy. In a seller's market, pricing at or slightly above comparable sales may attract multiple offers. In a buyer's market, pricing slightly below comparables may be necessary to attract attention.`,
        },
        {
          slug: 'listing-presentation-marketing',
          title: 'Listing Presentation and Property Marketing',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'listing agreement',
            'exclusive right to sell',
            'exclusive agency',
            'open listing',
            'net listing',
            'MLS input',
            'property marketing plan',
            'professional photography',
            'virtual tour',
            'showing instructions',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each listing agreement type to its characteristics: exclusive right to sell, exclusive agency, open listing, net listing',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia listing agreement requirements and marketing best practices',
            },
            {
              type: 'scenario',
              prompt:
                'A seller wants to list their home but insists on a net listing. How should the agent respond, and what does Virginia law say about net listings?',
            },
          ],
          content: `## Listing Presentation and Property Marketing

The listing presentation is the agent's opportunity to demonstrate expertise, explain the marketing plan, and secure a listing agreement with the seller. A strong listing presentation combines market data (the CMA) with a professional marketing strategy.

### Types of Listing Agreements

Virginia recognizes several types of listing agreements, each with different commission structures and obligations:

**Exclusive Right to Sell**: The most common and most protective for the agent. The listing broker earns a commission regardless of who produces the buyer, including the seller themselves. This agreement gives the broker the strongest incentive to invest marketing resources because the commission is guaranteed if the property sells during the listing period.

**Exclusive Agency**: The listing broker earns a commission if any agent (including the listing agent or a cooperating agent) produces the buyer. However, if the seller finds a buyer independently without any agent involvement, no commission is owed. This provides less security for the broker.

**Open Listing**: A non-exclusive arrangement where the seller may list with multiple brokers simultaneously. Only the broker who actually produces the buyer earns a commission. If the seller sells independently, no commission is owed to any broker. Open listings provide little incentive for agents to invest significant marketing resources.

**Net Listing**: An arrangement where the seller names a net amount they want to receive, and the broker keeps anything above that amount as commission. Virginia does not prohibit net listings, but they are strongly discouraged by the industry because they create an inherent conflict of interest. The broker is incentivized to sell the property for the highest possible price, which is normally aligned with the seller's interest, but the lack of transparency about commission amounts raises ethical concerns. The Virginia Real Estate Board expects licensees to deal honestly and fairly, and net listings are a frequent source of complaints.

### Essential Listing Agreement Terms

Virginia listing agreements must include:
- Names of all parties (seller and brokerage)
- Property description (address and legal description)
- Listing price
- Commission or compensation terms
- Commencement and expiration dates
- The broker's authority regarding marketing and showing
- Whether the property will be submitted to the MLS
- The seller's disclosure obligations

### Property Marketing Plan

A comprehensive marketing plan includes:

**Professional Photography**: High-quality photos are the single most important marketing element. Properties with professional photos sell faster and for higher prices than those with amateur photos. Many agents also invest in **drone photography** for properties with significant land, views, or notable surroundings.

**Virtual Tours and Video**: 3D tours (such as Matterport scans) and video walkthroughs allow buyers to preview properties remotely. These became standard practice during the COVID-19 pandemic and remain expected by many buyers.

**MLS Input**: Entering the listing into the MLS with accurate, detailed information exposes the property to the cooperating broker community and syndicates to consumer websites. The accuracy of MLS data is critical. Errors in square footage, room counts, or features can lead to legal liability.

**Online Syndication**: Most MLS systems automatically syndicate listings to major consumer websites (Zillow, Realtor.com, Redfin, etc.). Agents should verify that their listings appear correctly on these platforms.

**Social Media Marketing**: Targeted social media advertising can reach specific demographics and geographic areas. Platforms like Facebook and Instagram allow agents to create property-specific campaigns.

**Open Houses**: Both public open houses (for consumers) and broker open houses (for the agent community) increase exposure. The effectiveness of open houses varies by market, but they remain a standard tool.

**Print Marketing**: Brochures, postcards, and local publication advertising. While digital marketing has surpassed print in most markets, print remains relevant for luxury properties and certain demographics.

### Virginia-Specific Marketing Considerations

Virginia's **Residential Property Disclosure Act** requires sellers to provide a residential property disclosure statement. The disclosure must be delivered to the buyer before the ratification of the purchase agreement. Agents should ensure the seller completes this form before or concurrent with listing, as it affects marketing and negotiation.

The **Virginia Fair Housing Law** and federal Fair Housing Act apply to all marketing. Agents must avoid discriminatory language and imagery in all advertising and must not steer buyers to or away from particular neighborhoods based on protected class membership.`,
        },
        {
          slug: 'buyer-consultation-needs-analysis',
          title: 'Buyer Consultation and Needs Analysis',
          lessonType: 'scenario',
          estimatedMinutes: 21,
          keyTerms: [
            'buyer consultation',
            'buyer representation agreement',
            'needs analysis',
            'pre-approval',
            'pre-qualification',
            'buyer agency',
            'MLS search criteria',
            'must-haves vs nice-to-haves',
            'timeline',
            'buyer disclosure',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A couple relocating to Richmond from out of state has a $450,000 budget and needs to close within 60 days. Walk through the buyer consultation process, including questions to ask and steps to take.',
            },
            {
              type: 'flashcard',
              prompt:
                'Distinguish between pre-qualification and pre-approval: which is more valuable when making an offer?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of buyer agency agreements and the buyer consultation process in Virginia',
            },
          ],
          content: `## Buyer Consultation and Needs Analysis

The buyer consultation is the first substantive meeting between the agent and a prospective buyer. Its purpose is to establish the working relationship, understand the buyer's needs, set expectations, and create a focused search strategy.

### The Buyer Representation Agreement

In Virginia, agents are encouraged to use a written **buyer representation agreement** (also called a buyer-broker agreement or buyer agency agreement) to formalize the relationship. This agreement establishes:

- The duration of the representation period
- The geographic area or property types covered
- The compensation arrangement (how and by whom the agent is paid)
- The duties the agent owes the buyer (loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care)
- The buyer's obligations (working exclusively with the agent, timely communication, honesty)

Following the National Association of Realtors settlement agreements effective in 2024, buyer representation agreements have become even more important. Agents must have a written agreement with a buyer before touring homes, and the agreement must specify the compensation the buyer's agent will receive.

### Pre-Approval vs. Pre-Qualification

Before beginning the home search, the agent should ensure the buyer has been evaluated by a lender.

**Pre-qualification**: An informal assessment based on the buyer's self-reported income, debts, and assets. The lender does not verify the information. A pre-qualification letter carries little weight with sellers.

**Pre-approval**: A formal process where the lender verifies the buyer's income (pay stubs, tax returns), assets (bank statements), and credit (credit report pull). The lender issues a pre-approval letter stating the maximum loan amount the buyer qualifies for, subject to property appraisal and final underwriting. A pre-approval letter significantly strengthens an offer.

Agents should always recommend pre-approval over pre-qualification. In competitive Virginia markets, particularly Northern Virginia and parts of the Richmond metro area, offers without pre-approval letters are frequently rejected.

### Needs Analysis

The needs analysis is a structured conversation (or questionnaire) that identifies the buyer's:

**Must-Haves (Non-Negotiable Criteria)**:
- Maximum budget (based on pre-approval amount and the buyer's comfort level)
- Number of bedrooms and bathrooms
- Location requirements (school district, commute distance, proximity to family)
- Property type (single-family, townhome, condo)
- Move-in timeline

**Nice-to-Haves (Flexible Preferences)**:
- Specific features (garage, fenced yard, updated kitchen)
- Style preferences (colonial, ranch, contemporary)
- Neighborhood amenities (parks, walkability, HOA or no HOA)
- Lot size

**Deal-Breakers**:
- Conditions or situations the buyer will not accept under any circumstances (e.g., busy road, high HOA fees, major renovation needed)

### Setting Expectations

The consultation should address practical matters:

**Showing protocol**: How will the agent schedule and conduct showings? What is the buyer's availability? How quickly can they view new listings?

**Offer strategy**: In a competitive market, the agent should discuss the possibility of multiple offers, escalation clauses, and the pace of decision-making required.

**Timeline**: When does the buyer need to be in their new home? Working backward from the target move-in date, the agent and buyer can establish when an offer needs to be accepted to allow time for inspection, appraisal, loan processing, and closing.

**Communication preferences**: How does the buyer prefer to communicate (text, email, phone)? How quickly can they respond to time-sensitive situations?

### Virginia Disclosures to Buyers

Virginia agents must provide buyers with the **Disclosure of Brokerage Relationship** form at the earliest practical time. This form explains the types of brokerage relationships available in Virginia (standard agent, limited service agent, independent contractor, etc.) and the duties associated with each.

Additionally, if the agent is representing the buyer as a buyer's agent, the agent owes fiduciary duties including the duty to disclose all material facts known to the agent that may affect the buyer's decision. This includes information about the property's condition, the neighborhood, and any adverse facts about the transaction.

**Dual agency disclosure:** Under Va. Code §54.1-2139, a licensee representing both buyer and seller (dual agency) or both landlord and tenant must obtain **written disclosure and consent** from all parties. The Virginia Residential Disclosure of Brokerage Relationships and the Disclosure of Dual Agency/Designated Representation forms must be signed at first substantive contact and at the latest before presenting an offer.`,
        },
        {
          slug: 'writing-offer-virginia-forms',
          title: 'Writing the Offer: Virginia REIN/NVAR Forms',
          lessonType: 'interactive',
          estimatedMinutes: 26,
          keyTerms: [
            'purchase agreement',
            'ratification',
            'contingency',
            'earnest money deposit',
            'home inspection contingency',
            'financing contingency',
            'appraisal contingency',
            'closing date',
            'settlement agent',
            'counteroffer',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A buyer wants to make an offer on a $380,000 home in Norfolk. They have FHA financing with 3.5% down. Draft the key terms of the purchase agreement including EMD, contingencies, and closing timeline.',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each contingency type to its purpose: home inspection, financing, appraisal, sale of existing home, title',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia purchase agreement terms, ratification, and the legal effect of contingencies',
            },
          ],
          content: `## Writing the Offer: Virginia Purchase Agreement Forms

The purchase agreement (also called the contract of sale or sales contract) is the most critical document in a real estate transaction. In Virginia, agents typically use standardized forms published by their local MLS or association. The two most widely used form sets are **REIN** (Real Estate Information Network, used in Hampton Roads and parts of Central Virginia) and **NVAR** (Northern Virginia Association of Realtors). Bright MLS also provides forms used in Northern Virginia and parts of the state covered by that system.

### Key Contract Terms

**Purchase Price**: The amount the buyer offers to pay. This is the starting point of negotiation.

**Earnest Money Deposit (EMD)**: A good-faith deposit demonstrating the buyer's serious intent to purchase. Virginia law requires that EMD be deposited into an escrow account held by the settlement agent, listing broker, or other designated party within a specified number of days after ratification (typically 3-5 business days). The amount varies by market. In Hampton Roads, $1,000-$5,000 is common for typical residential transactions. In Northern Virginia, EMDs of $10,000-$50,000+ are common in competitive markets.

**Financing Contingency**: Protects the buyer by making the contract contingent on obtaining satisfactory mortgage financing within a specified period. If the buyer cannot secure financing despite good-faith efforts, they may terminate the contract and receive a refund of their EMD. The contingency specifies the loan type (conventional, FHA, VA), interest rate ceiling, and deadline.

**Home Inspection Contingency**: Allows the buyer to have the property professionally inspected within a specified number of days (typically 10-15). After the inspection, the buyer may request repairs, request a price reduction, accept the property as-is, or terminate the contract (depending on the contingency terms). Virginia contracts allow various inspection contingency structures, from full negotiating contingencies to "as-is" with information-only inspections.

**Appraisal Contingency**: Protects the buyer if the property appraises for less than the purchase price. If the appraisal falls short, the buyer may negotiate a price reduction, bring additional cash to closing to cover the gap, or terminate. In hot markets, buyers sometimes waive the appraisal contingency to strengthen their offers, accepting the risk of covering any gap out of pocket.

### Ratification

In Virginia, a contract becomes binding at **ratification**, which occurs when the last party (buyer or seller) signs or initials the final version of the agreement and the other party is notified. The date and time of ratification are important because most contingency deadlines run from ratification.

### Counteroffers

If the seller does not accept the buyer's offer as written, the seller may make a **counteroffer** modifying one or more terms. A counteroffer is a rejection of the original offer and a new offer from the seller to the buyer. The buyer can accept, reject, or counter back. This process continues until both parties agree on all terms or one party walks away. Each counteroffer should reference the original offer and clearly identify the modified terms.

### Additional Virginia-Specific Provisions

**Residential Property Disclosure**: The seller must provide the buyer with a completed disclosure form. The buyer has the right to rescind the contract within 3 days of receiving the disclosure if it was not provided before ratification.

**Property Owners Association (POA) / Condominium Disclosure Packet**: If the property is in a POA or condominium association, the seller must provide the association disclosure packet. Under the Virginia Property Owners Association Act and the Virginia Condominium Act, the buyer has a **3-day right of rescission** after receiving the packet (or 3 days after ratification if the packet is delivered after ratification).

**Settlement Agent**: Virginia uses settlement agents (attorneys or title companies) rather than escrow companies. The contract specifies who selects the settlement agent. In many Virginia markets, the buyer selects the settlement agent, though this is negotiable.

**Closing Date**: The date by which the settlement must occur. Virginia contracts specify a "time is of the essence" clause or a "reasonable time" standard for closing. If closing is delayed, the non-delaying party may have remedies including termination or specific performance.

### Offer Presentation

In Virginia, the listing agent is obligated to present all offers to the seller promptly and objectively. The listing agent must present all material facts to the seller, including the terms of each offer and any information about the buyer's financial position (if known). The seller decides which offer to accept, reject, or counter.`,
        },
      ],
    },
    // ── Chapter 2: Under Contract to Closing ──────────────────────────────
    {
      slug: 'under-contract-to-closing',
      title: 'Under Contract to Closing',
      lessons: [
        {
          slug: 'home-inspection-negotiations',
          title: 'Home Inspection Process and Negotiations',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'home inspection',
            'general inspection',
            'radon test',
            'termite inspection',
            'wood-destroying insect report',
            'repair request',
            'inspection contingency',
            'material defect',
            'as-is',
            'inspection addendum',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each inspection type to what it evaluates: general home inspection, radon test, WDI report, sewer scope',
            },
            {
              type: 'scenario',
              prompt:
                'The home inspection reveals a cracked heat exchanger in the furnace, estimated $4,500 to replace. The contract has a standard inspection contingency. Walk through the negotiation options for the buyer.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia inspection contingency timelines and negotiation procedures',
            },
          ],
          content: `## Home Inspection Process and Negotiations

The home inspection is typically the first major milestone after ratification of the purchase agreement. It provides the buyer with professional insight into the property's condition and often triggers the most significant negotiations of the transaction.

### The Home Inspection

A **general home inspection** is a non-invasive, visual examination of the accessible systems and components of the property. Virginia home inspectors are licensed by DPOR and must follow the Standards of Practice established by the Virginia Board for Asbestos, Lead, and Home Inspectors.

A standard home inspection covers:
- **Structural components**: Foundation, framing, floors, walls, ceilings, roof structure
- **Exterior**: Siding, trim, windows, doors, driveways, walkways, grading and drainage
- **Roof**: Covering materials, flashings, gutters, downspouts, skylights
- **Plumbing**: Supply and drain pipes, water heater, fixtures, functional flow
- **Electrical**: Service panel, branch wiring, outlets, switches, GFCI/AFCI protection
- **HVAC**: Heating and cooling systems, ductwork, thermostat, filters
- **Interior**: Walls, ceilings, floors, doors, windows, stairs, railings
- **Insulation and ventilation**: Attic insulation, vapor barriers, ventilation adequacy
- **Fireplaces and chimneys**: If present and accessible

**What a home inspection does NOT include**: The inspector does not move furniture, open walls, dig around foundations, or test every outlet. The inspection is limited to what is visible and accessible. Inspectors also do not provide cost estimates for repairs (though many provide general guidance).

### Specialized Inspections

Beyond the general inspection, buyers may order:

- **Radon testing**: Radon is a naturally occurring radioactive gas. The EPA recommends mitigation at levels above 4.0 pCi/L. Virginia has areas with elevated radon, particularly in the Blue Ridge and Piedmont regions.
- **Wood-Destroying Insect (WDI) report**: Often called a termite inspection. VA and FHA loans require a WDI report. The report identifies evidence of active infestation or previous damage from termites, carpenter ants, powder post beetles, and carpenter bees.
- **Sewer scope**: A camera inspection of the sewer lateral (the pipe connecting the home to the municipal sewer or septic system). Older homes may have clay or cast iron pipes that crack or deteriorate.
- **Mold testing**: If the inspector observes conditions conducive to mold growth or visible mold-like substances.
- **Well and septic testing**: For properties not on public water and sewer.

### The Inspection Contingency

Virginia purchase agreements include an inspection contingency that specifies:
1. The **inspection period**: Typically 10-15 days from ratification for the buyer to complete inspections
2. The buyer's options after inspection: request repairs, request a credit, accept as-is, or terminate

The negotiation process after inspection depends on the contract language:

**Standard inspection contingency**: The buyer can request repairs for any deficiency discovered during inspection. The seller may agree to make repairs, offer a credit in lieu of repairs, reject the request, or make a counteroffer. If the parties cannot agree, the buyer may terminate and receive a refund of the EMD.

**As-is with right to terminate**: The buyer accepts the property in its current condition but retains the right to terminate the contract for any reason during the inspection period. No repair requests are made. This is common in competitive markets.

### Negotiation Best Practices

**For buyer's agents**: Focus repair requests on material defects: safety hazards, structural issues, water intrusion, mechanical system failures, and code violations. Cosmetic issues (scratched floors, nail pops, minor paint chips) should generally not be part of a repair request. Overreaching repair requests can jeopardize the transaction.

**For listing agents**: Help the seller evaluate repair requests objectively. Distinguish between reasonable requests (broken furnace, active leak) and unreasonable ones (wear-and-tear items, cosmetic preferences). Advise the seller on the likely cost of repairs vs. the risk of losing the buyer.

**Credits vs. repairs**: Many sellers prefer to offer a credit at closing rather than making repairs themselves. This gives the buyer control over the repair quality and contractor selection. However, the lender must approve the credit, and some loan programs limit seller credits (FHA limits seller concessions to 6% of the sale price).`,
        },
        {
          slug: 'appraisal-process-challenges',
          title: 'Appraisal: Process, Challenges & Gap Issues',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'appraisal',
            'appraised value',
            'appraisal gap',
            'USPAP',
            'sales comparison approach',
            'cost approach',
            'income approach',
            'appraisal contingency',
            'reconsideration of value',
            'appraisal waiver',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A property is under contract for $425,000 but appraises at $400,000. The buyer has a financing contingency but waived the appraisal contingency. What are the buyer\'s options?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the appraisal process, approaches to value, and how to handle appraisal gaps',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each appraisal approach to its best use case: sales comparison, cost, income',
            },
          ],
          content: `## The Appraisal: Process, Challenges, and Gap Issues

The appraisal is a critical step in most financed real estate transactions. The lender orders the appraisal to confirm that the property is worth at least the loan amount, protecting the lender's collateral interest.

### What Is an Appraisal?

An **appraisal** is an independent, unbiased estimate of a property's market value performed by a state-licensed or certified appraiser. In Virginia, appraisers are licensed by DPOR and must comply with the **Uniform Standards of Professional Appraisal Practice (USPAP)**.

The appraiser is engaged by the lender (not the buyer or seller), although the buyer typically pays the appraisal fee (usually $400-$700 for a standard residential appraisal in Virginia).

### The Three Approaches to Value

Appraisers may use one or more approaches to estimate value:

**Sales Comparison Approach**: The primary approach for residential property. The appraiser identifies recent sales of comparable properties, makes adjustments for differences (similar to a CMA but with more rigorous standards), and reconciles the adjusted sale prices into a value estimate. This approach reflects what buyers are actually paying in the market.

**Cost Approach**: Estimates what it would cost to reproduce or replace the improvements (buildings) on the property, minus depreciation, plus land value. This approach is most useful for new construction, special-purpose properties, and properties with few comparable sales.

**Income Approach**: Used primarily for investment and income-producing properties. The appraiser estimates value based on the property's income-generating potential using capitalization rates or gross rent multipliers.

For most residential transactions, the sales comparison approach carries the most weight.

### The Appraisal Process

1. **Lender orders the appraisal** through an Appraisal Management Company (AMC) or directly from an approved appraiser
2. **Appraiser inspects the property**: Measures the home, photographs the exterior and interior, notes condition, and identifies features
3. **Appraiser researches comparables**: Selects recent sales and makes adjustments
4. **Appraiser completes the report**: Typically on the Uniform Residential Appraisal Report (URAR/Form 1004)
5. **Report delivered to the lender**: The lender reviews the appraisal and determines if it supports the loan amount

### Appraisal Challenges

**Low appraisal (appraisal gap)**: The most common challenge occurs when the appraised value is **less than the contract price**. This creates an **appraisal gap**. Since the lender will only lend based on the appraised value, the buyer must make up the difference or negotiate a resolution.

Options when facing an appraisal gap:
- **Seller reduces the price** to the appraised value
- **Buyer pays the gap** out of pocket (bringing additional cash to closing)
- **Split the difference**: Buyer and seller share the gap
- **Buyer terminates** under the appraisal contingency (if one exists)
- **Request a Reconsideration of Value (ROV)**: The listing agent or buyer's agent can provide the appraiser (through the lender) with additional comparable sales data or corrections. The appraiser may revise the value if the new information is compelling.

**Appraisal waivers**: Some conventional lenders offer appraisal waivers for qualifying transactions (strong borrower credit, low LTV, reliable automated valuation model data). In these cases, the lender waives the requirement for a physical appraisal. FHA and VA loans always require appraisals.

### Appraisal Contingency vs. Financing Contingency

These are separate protections:

**Appraisal contingency**: Specifically protects the buyer if the property appraises below the contract price. If waived, the buyer is committed to the purchase price regardless of the appraised value.

**Financing contingency**: Protects the buyer if they cannot obtain financing. A low appraisal can trigger the financing contingency if the buyer cannot meet the lender's requirements (since the lender will only lend on the appraised value). However, if the buyer can bring cash to cover the gap but chooses not to, the financing contingency may not provide an exit.

### Virginia Appraisal Considerations

Virginia law prohibits any person from improperly influencing or attempting to influence an appraiser. It is illegal for an agent, lender, or any party to pressure an appraiser to hit a target value. Agents may provide factual market data (comparable sales, neighborhood information) to the appraiser, but may not advocate for a specific value.

The Virginia Real Estate Appraiser Board (within DPOR) oversees appraiser licensing and discipline. Complaints about appraiser conduct can be filed with DPOR.`,
        },
        {
          slug: 'loan-processing-timeline',
          title: 'Loan Processing Timeline and Conditions',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'loan processing',
            'underwriting',
            'conditional approval',
            'clear to close',
            'conditions',
            'verification of employment',
            'verification of deposit',
            'credit report',
            'debt-to-income ratio',
            'loan commitment',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Place the loan processing steps in correct chronological order: application, processing, underwriting, conditional approval, conditions cleared, clear to close',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of common underwriting conditions and what can delay or derail loan approval',
            },
          ],
          content: `## Loan Processing Timeline and Conditions

Understanding the mortgage processing timeline is essential for real estate agents. Delays in loan processing are one of the most common causes of closing postponements, and agents who understand the process can help keep transactions on track.

### The Loan Processing Timeline

A typical residential mortgage takes **30-45 days** from application to closing, though complex situations can take longer. The process follows a predictable sequence:

**Week 1-2: Application and Processing**

The buyer completes a formal loan application (Uniform Residential Loan Application, or URLA/Form 1003) and provides supporting documentation:
- Two years of tax returns (personal and business, if self-employed)
- Two months of bank statements (all pages, all accounts)
- Recent pay stubs (typically 30 days)
- W-2 forms for the past two years
- Government-issued identification
- Divorce decree, if applicable (alimony/child support obligations)

The loan processor reviews the application package for completeness, orders the credit report, orders the appraisal, and begins verification:
- **Verification of Employment (VOE)**: Confirms the borrower's current employment, position, and income
- **Verification of Deposit (VOD)**: Confirms the borrower's liquid assets
- **Title search**: Ordered through the settlement agent to confirm clear title

**Week 2-3: Underwriting**

The underwriter evaluates the complete file against the loan program's guidelines. The underwriter reviews:
- Credit history and score
- Income stability and sufficiency
- Asset verification (down payment source, reserves)
- Debt-to-income ratios (front-end and back-end)
- Property appraisal
- Title report
- Compliance with loan program requirements (FHA, VA, conventional, etc.)

**Conditional Approval**: The underwriter issues a conditional approval, listing specific **conditions** that must be satisfied before final approval. Conditions fall into two categories:

**Prior-to-docs conditions**: Must be cleared before loan documents are prepared. Examples: letter of explanation for a large deposit, updated bank statement, verification of rental history, proof of insurance.

**Prior-to-funding conditions**: Must be cleared before the loan funds. Examples: signed loan documents, proof of homeowners insurance, final title policy, clear termite report.

**Week 3-4: Conditions and Clear to Close**

The processor collects the outstanding conditions from the borrower and submits them to the underwriter for review. Once all conditions are satisfied, the underwriter issues a **clear to close** (CTC). This means the loan is fully approved and documents can be prepared.

**Week 4-5: Closing**

Loan documents are sent to the settlement agent, the buyer reviews and signs, and the lender funds the loan.

### Common Causes of Delay

**Incomplete documentation**: Missing bank statement pages, unsigned tax returns, or unexplained deposits are the most frequent causes of delay. Agents should encourage buyers to provide complete documentation upfront.

**Employment changes**: If the borrower changes jobs during the loan process, the lender must re-verify employment. A job change from salaried to commission-based or self-employed can jeopardize the loan.

**New credit inquiries or debt**: If the borrower opens a new credit card, finances a car, or makes large purchases during the loan process, the lender will discover this on the final credit pull before closing. New debt can push debt-to-income ratios above program limits.

**Appraisal issues**: Low appraisals, appraisals requiring repairs, or appraiser delays can hold up the process.

**Title issues**: Liens, judgments, or boundary disputes discovered during the title search must be resolved before closing.

### The Agent's Role

While agents do not process loans, they play a critical role in keeping the process moving:
- Ensure the buyer provides documentation promptly
- Communicate with the lender's loan officer regularly for status updates
- Alert the listing agent to any potential delays
- Help coordinate between the buyer, lender, settlement agent, and listing agent
- Advise the buyer not to make major financial changes during the loan process`,
        },
        {
          slug: 'title-search-survey-closing-prep',
          title: 'Title Search, Survey, and Closing Preparation',
          lessonType: 'scenario',
          estimatedMinutes: 23,
          keyTerms: [
            'title search',
            'chain of title',
            'title insurance',
            'owners policy',
            'lenders policy',
            'title defect',
            'encumbrance',
            'survey',
            'boundary survey',
            'easement',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A title search reveals an unreleased deed of trust from a loan that was paid off 5 years ago. The original lender was acquired by another bank. Walk through the resolution process.',
            },
            {
              type: 'flashcard',
              prompt:
                'Match title concepts: chain of title, title defect, owner\'s policy, lender\'s policy, encumbrance, easement',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of title insurance, survey requirements, and common title defects in Virginia',
            },
          ],
          content: `## Title Search, Survey, and Closing Preparation

Before closing, the settlement agent conducts a title examination to verify that the seller can convey clear title, and the buyer may obtain a survey to confirm property boundaries. These steps protect the buyer and lender from undisclosed claims against the property.

### Title Search (Title Examination)

A **title search** is an examination of public records to trace the **chain of title** (the history of ownership) and identify any encumbrances, liens, or defects that affect the property. In Virginia, the title search is typically performed by the settlement agent (an attorney or title company) or a professional title abstractor.

The title examiner reviews:
- **Deed records**: To trace ownership from the current seller back through prior owners (typically 40-60 years in Virginia)
- **Deed of trust records**: To identify outstanding mortgages and confirm that prior mortgages have been released
- **Judgment and lien records**: To identify any judgments, tax liens, mechanic's liens, or other claims against the property or the seller
- **Probate records**: If any prior owner died, to confirm that the property was properly transferred through the estate
- **Plat records**: To identify the property's legal description and any platted easements
- **Tax records**: To confirm current property tax status and identify any delinquent taxes

### Common Title Defects

**Unreleased deeds of trust**: A prior mortgage was paid off, but the lender did not record a release (certificate of satisfaction) in the land records. This is one of the most common title issues. Resolution requires obtaining a release from the original lender (or its successor).

**Judgment liens**: A court judgment against the property owner creates a lien against all real property owned by that person in the jurisdiction. The judgment must be satisfied or released before clear title can be conveyed.

**Mechanic's liens**: Contractors or suppliers who provided labor or materials and were not paid can file a mechanic's lien. In Virginia, mechanic's liens must be filed within a specified period after the work was completed.

**Boundary disputes and encroachments**: A survey may reveal that a structure (fence, shed, driveway) encroaches on a neighbor's property or that a neighbor's structure encroaches on the subject property.

**Missing heirs or forged documents**: More serious defects that may require legal action to resolve.

### Title Insurance

**Title insurance** protects against losses from defects in title that were not discovered during the title search. There are two types:

**Lender's title insurance policy**: Required by the lender. Protects the lender's interest in the property up to the loan amount. The buyer typically pays for this policy. Coverage decreases as the loan is paid down and terminates when the loan is paid off.

**Owner's title insurance policy**: Optional but strongly recommended. Protects the buyer's equity in the property for as long as they (or their heirs) own it. In Virginia, the seller often pays for the owner's policy, though this is negotiable. Coverage equals the purchase price and remains in effect even after the property increases in value (standard policies provide an inflation adjustment).

Title insurance is a one-time premium paid at closing. Unlike other insurance that protects against future events, title insurance protects against past events (defects that existed before the policy was issued but were not known).

### Property Survey

A **survey** is a professional measurement and mapping of the property's boundaries, improvements, and features. Surveys are prepared by licensed land surveyors.

**Types of surveys**:
- **Boundary survey**: Establishes the property lines and identifies any encroachments
- **ALTA/NSPS survey**: A comprehensive survey that meets standards set by the American Land Title Association and the National Society of Professional Surveyors. Required for commercial transactions and some residential transactions. Includes boundary lines, improvements, easements, rights of way, and other features.
- **Location survey**: A less detailed survey showing the general location of improvements relative to property lines

In Virginia, lenders may require a survey for certain loan types. Even when not required, a survey can reveal encroachments, easement conflicts, and boundary discrepancies that would not appear in a title search.

### Closing Preparation Checklist

As closing approaches, the agent should confirm:
- Title is clear or all title issues have been resolved
- Homeowners insurance is in place (with the lender named as mortgagee)
- Final walk-through is scheduled
- The buyer has received the Closing Disclosure at least 3 business days before closing
- Wire transfer instructions have been confirmed directly with the settlement agent (never by email alone, to prevent wire fraud)
- All conditions for the loan have been satisfied (clear to close issued)
- Utilities are scheduled for transfer`,
        },
      ],
    },
    // ── Chapter 3: The Virginia Settlement Process ────────────────────────
    {
      slug: 'virginia-settlement-process',
      title: 'The Virginia Settlement Process',
      lessons: [
        {
          slug: 'role-settlement-agents-virginia',
          title: 'Role of Settlement Agents in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'settlement agent',
            'closing attorney',
            'title company',
            'escrow',
            'disbursement',
            'settlement statement',
            'fiduciary duty',
            'Virginia Consumer Real Estate Settlement Protection Act',
            'CRESPA',
            'bonding requirement',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match settlement agent roles: title examination, escrow management, document preparation, disbursement, recording',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of CRESPA requirements and the settlement agent\'s responsibilities in Virginia',
            },
          ],
          content: `## Role of Settlement Agents in Virginia

Virginia is an **attorney-state** for real estate closings, meaning that the settlement process is managed by either an attorney or a title insurance company, collectively referred to as **settlement agents**. Unlike some states that use escrow companies, Virginia's settlement process is centered on the settlement agent who serves as a neutral party managing the closing.

### What Is a Settlement Agent?

A settlement agent in Virginia is the individual or entity responsible for:
1. Conducting the title examination (or having it conducted)
2. Holding escrow funds (earnest money deposits, loan proceeds)
3. Preparing the settlement statement and closing documents
4. Conducting the closing meeting
5. Disbursing funds to the appropriate parties
6. Recording the deed and deed of trust in the land records

Settlement agents in Virginia are typically **attorneys** (either solo practitioners or law firms) or **title insurance companies**. Some real estate brokerages have affiliated title companies, which is permitted under Virginia law and federal RESPA regulations provided proper disclosures are made.

### Virginia Consumer Real Estate Settlement Protection Act (CRESPA)

The **Consumer Real Estate Settlement Protection Act** (Virginia Code Section 55.1-1000 et seq.) governs settlement agents in Virginia. CRESPA establishes:

**Who can serve as a settlement agent**: Under Va. Code §55.1-1002, only the following may act as a Virginia settlement agent:
1. An attorney authorized to practice law in Virginia
2. A title insurance company licensed in Virginia
3. A title insurance agent registered with the SCC
4. A real estate broker licensed in Virginia (for transactions involving their own listings)
5. A financial institution (bank, savings bank, credit union) authorized in Virginia

**Non-attorney settlement agents cannot give legal advice** — they may only conduct the settlement.

**Registration**: All settlement agents must register with the Virginia State Bar (if attorneys) or the State Corporation Commission (if title companies). The registration requires disclosure of trust account information and surety bond or insurance coverage.

**Bonding and Insurance**: Settlement agents must maintain a surety bond, professional liability insurance, or a combination of both. The minimum coverage amounts are set by statute and are designed to protect consumers if the settlement agent misappropriates escrow funds.

**Trust Account Requirements**: All escrow funds must be deposited into a **trust account** at a federally insured financial institution in Virginia. The settlement agent must keep escrow funds separate from their own operating funds at all times. Commingling of funds is a serious violation.

**Disbursement Timeline**: CRESPA requires the settlement agent to disburse all funds from the transaction within a reasonable time after closing. Funds should not remain in the trust account longer than necessary.

### The Settlement Agent's Responsibilities

**Title Examination**: The settlement agent examines the title (or arranges for a title abstractor to do so) and identifies any defects, liens, or encumbrances that must be addressed before closing.

**Document Preparation**: The settlement agent prepares:
- The deed (transferring ownership from seller to buyer)
- The deed of trust (securing the lender's mortgage interest)
- The settlement statement (accounting for all debits and credits to buyer and seller)
- Affidavits and other required documents

**Escrow Management**: The settlement agent holds and manages all escrow funds, including the earnest money deposit, the buyer's funds to close, and the lender's loan proceeds. The agent must account for every dollar and ensure that funds are disbursed correctly.

**Conducting the Closing**: The settlement agent (or their representative) presides over the closing meeting. They explain each document, obtain signatures, collect funds, and answer questions about the settlement statement.

**Recording**: After closing, the settlement agent records the deed and deed of trust in the land records of the circuit court where the property is located. Recording provides public notice of the transfer and the new mortgage lien.

**Issuing Title Insurance**: The settlement agent issues the lender's and owner's title insurance policies on behalf of the title insurance underwriter.

### Choosing a Settlement Agent

In Virginia, the right to select the settlement agent is negotiable. The purchase agreement typically specifies which party selects the settlement agent. In many Virginia markets, the **buyer** traditionally selects the settlement agent, though in some areas the seller does.

Agents should be cautious about recommending specific settlement agents. Under the Real Estate Settlement Procedures Act (RESPA), agents may not receive referral fees or kickbacks for steering business to a particular settlement agent. Agents may recommend settlement agents based on experience and quality of service, but the recommendation must be made in the client's interest, not for the agent's financial benefit.

### Affiliated Business Arrangements

When a real estate brokerage has an ownership interest in a settlement company (or vice versa), this is an **Affiliated Business Arrangement (AfBA)**. RESPA requires that the referring party disclose the affiliated relationship to the consumer in writing, inform the consumer that they are not required to use the affiliated service provider, and provide an estimate of the affiliated provider's fees. No referral fees may be exchanged between the affiliated entities.`,
        },
        {
          slug: 'trid-loan-estimate-closing-disclosure',
          title: 'TRID: Loan Estimate and Closing Disclosure',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'TRID',
            'TILA-RESPA Integrated Disclosure',
            'Loan Estimate',
            'Closing Disclosure',
            'three-business-day rule',
            'changed circumstance',
            'tolerance',
            'zero tolerance',
            'ten percent tolerance',
            'cash to close',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Place the TRID disclosure timeline in order: application, Loan Estimate delivery, rate lock, Closing Disclosure delivery, 3-day review period, closing',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of TRID timing requirements and tolerance categories',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer receives the Closing Disclosure on Monday. The closing is scheduled for Wednesday. Is this compliant with TRID? What must happen?',
            },
          ],
          content: `## TRID: Loan Estimate and Closing Disclosure

The **TILA-RESPA Integrated Disclosure (TRID)** rule, also known as the "Know Before You Owe" rule, consolidated and replaced four previous disclosure forms with two new forms. TRID is enforced by the Consumer Financial Protection Bureau (CFPB) and applies to most closed-end consumer mortgage loans.

### Background

Before TRID, borrowers received two sets of overlapping disclosures: the Truth in Lending (TIL) disclosure and the Good Faith Estimate (GFE) under TILA and RESPA, respectively. These forms were confusing and contained duplicative information. TRID replaced them with:

1. **Loan Estimate (LE)**: Replaces the GFE and initial TIL disclosure
2. **Closing Disclosure (CD)**: Replaces the HUD-1 Settlement Statement and final TIL disclosure

### The Loan Estimate

The lender must provide the Loan Estimate to the borrower within **3 business days of receiving the loan application**. A loan application is considered received when the lender has six pieces of information: borrower name, income, Social Security number, property address, estimated property value, and desired loan amount.

The Loan Estimate is a 3-page form that provides:
- **Loan terms**: Interest rate, monthly payment, whether the rate can increase
- **Projected payments**: Breakdown of principal, interest, mortgage insurance, and estimated escrow
- **Closing costs**: Itemized list of all fees, organized by category
- **Cash to close**: Estimated amount the buyer needs to bring to closing
- **Comparisons**: APR, total interest percentage, and total cost over 5 years

The Loan Estimate cannot be used to charge the borrower any fees (other than a reasonable credit report fee) until the borrower has received the LE and expressed intent to proceed.

### Tolerance Categories

TRID establishes three tolerance categories that limit how much closing costs can increase between the Loan Estimate and the Closing Disclosure:

**Zero tolerance**: These fees cannot increase at all from the LE to the CD. Includes lender origination charges, transfer taxes, and fees for services where the lender selects the provider.

**10% cumulative tolerance**: The total of these fees can increase by no more than 10% from the LE to the CD. Includes recording fees, and fees for services where the borrower selects the provider from the lender's written list.

**No tolerance limit**: These fees can increase without restriction. Includes insurance premiums, fees for services where the borrower selects their own provider (not from the lender's list), and prepaid interest.

If fees exceed the applicable tolerance, the lender must refund the excess to the borrower at closing.

### Changed Circumstances

The lender may issue a **revised Loan Estimate** if a **changed circumstance** occurs. Changed circumstances include:
- An event beyond anyone's control (natural disaster, new information that changes the loan terms)
- Information specific to the borrower or transaction that the lender did not rely on when issuing the original LE
- Borrower-requested changes (different loan program, lock period change)

The revised LE must be delivered within 3 business days of the changed circumstance, and the new fees become the basis for tolerance calculations.

### The Closing Disclosure

The Closing Disclosure must be provided to the borrower at least **3 business days before closing**. This is known as the **3-business-day review period**. The countdown begins the day after the borrower receives the CD. If delivered in person, the 3-day period begins the day after delivery. If mailed, the borrower is presumed to receive it 3 business days after mailing, effectively creating a 6-business-day mailing deadline.

**Example**: If closing is Friday, the borrower must receive the CD no later than Tuesday (3 business days: Wednesday, Thursday, Friday). If mailed, it must be mailed the prior Saturday.

### Triggering a New 3-Day Period

Certain changes to the Closing Disclosure require a new 3-business-day review period:
- The APR increases by more than 1/8% for fixed-rate loans (or 1/4% for adjustable-rate)
- A prepayment penalty is added
- The loan product changes (e.g., from fixed to adjustable rate)

Other changes (fee adjustments, correction of clerical errors) do not trigger a new 3-day period but must be reflected in a corrected CD.

### Impact on Closing Schedules

TRID's timing requirements directly affect closing schedules. Agents must account for the 3-business-day CD review period when setting closing dates. If a lender issue delays the CD, closing must be postponed. Saturday counts as a business day under TRID; Sundays and federal holidays do not.

Agents should communicate closely with the lender and settlement agent to ensure the CD is prepared and delivered on time.`,
        },
        {
          slug: 'prorations-taxes-hoa-rent',
          title: 'Prorations: Taxes, HOA Dues & Rent',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: [
            'proration',
            'per diem',
            'closing date allocation',
            'seller credit',
            'buyer debit',
            'property tax proration',
            'HOA proration',
            'rent proration',
            'prepaid items',
            'calendar year method',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt:
                'Annual property taxes are $4,380. Closing is March 15. Using the calendar year method (365 days), calculate the seller\'s prorated share of taxes.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your ability to calculate prorations for property taxes, HOA dues, and prepaid rent',
            },
            {
              type: 'scenario',
              prompt:
                'A rental property closes on October 10. The tenant paid $1,500 rent for October on October 1. How is the rent prorated between buyer and seller?',
            },
          ],
          content: `## Prorations: Taxes, HOA Dues, and Rent

**Prorations** are the allocation of shared expenses between buyer and seller based on the closing date. Because certain costs (property taxes, HOA dues, insurance premiums) cover periods that span the closing date, the parties must divide these costs equitably. Prorations ensure that each party pays only for the period they own the property.

### General Proration Rules

The standard approach in Virginia is:

- **The seller pays for the day of closing**. The seller is responsible for expenses through and including the closing date. The buyer's responsibility begins the day after closing.
- Prorations are calculated on a **per diem** (daily) basis
- The **calendar year method** (365 days per year, or 366 in a leap year) is the most common method used in Virginia residential transactions

The settlement agent calculates all prorations and reflects them as debits and credits on the Closing Disclosure.

### Property Tax Proration

Property taxes in Virginia are assessed annually (January 1 through December 31) and are typically payable in two installments. The payment schedule varies by locality. For example, in some Virginia localities, taxes are due June 5 and December 5.

**Proration method**: Divide the annual tax by 365 to get the daily rate. Multiply the daily rate by the number of days the seller owned the property in the current tax year (January 1 through closing date).

**Example**:
- Annual property tax: $4,380
- Daily rate: $4,380 / 365 = $12.00 per day
- Closing date: March 15 (Day 74 of the year)
- Seller's share: 74 days x $12.00 = **$888.00**

If the seller has not yet paid the taxes (taxes are due later in the year), the seller's $888 is a **debit to the seller and a credit to the buyer** at closing. The buyer will pay the full tax bill when due and has been credited for the seller's portion.

If the seller has already paid the full year's taxes, the buyer must reimburse the seller for the portion covering the buyer's ownership period. The seller's overpayment is a **credit to the seller and a debit to the buyer**.

### HOA Proration

If the property is in a homeowners association, HOA dues are prorated similarly. Most HOA dues are paid monthly or quarterly.

**Example**:
- Monthly HOA dues: $250
- Closing date: March 15
- Seller has paid March dues
- Seller's share of March: 15 days / 31 days x $250 = **$120.97**
- Buyer's share of March: 16 days / 31 days x $250 = **$129.03**
- The buyer reimburses the seller $129.03 (credit to seller, debit to buyer)

If the seller has not yet paid the current month's dues, the calculation works in reverse, with the seller being debited for their share.

### Rent Proration (Investment Property)

When rental property is sold with a tenant in place, rent is prorated between buyer and seller. The buyer is entitled to the rent for the period beginning the day after closing.

**Example**:
- Monthly rent: $1,500
- Closing date: October 10
- Tenant paid October rent on October 1 (to the seller or property manager)
- Seller's share: 10 days / 31 days x $1,500 = **$483.87**
- Buyer's share: 21 days / 31 days x $1,500 = **$1,016.13**
- The seller credits the buyer $1,016.13 at closing

Security deposits are typically transferred to the buyer at closing and reflected as a debit to the seller and a credit to the buyer. The buyer assumes responsibility for returning the deposit to the tenant under the Virginia Residential Landlord and Tenant Act.

### Prepaid Items

The buyer may also be required to prepay certain items at closing:

**Prepaid interest**: Mortgage interest is paid in arrears. If closing is on March 15, the first mortgage payment will be due May 1 (covering April interest). The buyer must prepay interest for March 16-31 at closing so that the April 1 interest accrual starts cleanly.

**Escrow reserves**: The lender may require the buyer to establish escrow (impound) reserves for property taxes and insurance. Typically, the lender collects 2-4 months of estimated taxes and insurance premiums at closing to build a cushion in the escrow account.

**Homeowners insurance**: The first year's premium is usually paid in full at or before closing.

### The Settlement Agent's Role

The settlement agent calculates all prorations, prepares the Closing Disclosure reflecting these figures, and ensures that the correct amounts are debited and credited to each party. Both the buyer's agent and seller's agent should review the prorations before closing to verify accuracy.`,
        },
        {
          slug: 'walkthrough-closing-day',
          title: 'Walk-Through and Closing Day Procedures',
          lessonType: 'scenario',
          estimatedMinutes: 21,
          keyTerms: [
            'final walk-through',
            'closing meeting',
            'signing',
            'deed',
            'deed of trust',
            'promissory note',
            'funding',
            'recording',
            'keys',
            'possession',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'During the final walk-through, the buyer discovers that the seller removed a chandelier that was included in the contract and left substantial debris in the garage. What should the buyer\'s agent do?',
            },
            {
              type: 'drag_drop',
              prompt:
                'Place closing day events in order: walk-through, arrive at settlement office, review CD, sign documents, wire funds, lender funds loan, recording, keys delivered',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of closing day procedures, common issues, and when possession transfers',
            },
          ],
          content: `## Walk-Through and Closing Day Procedures

The final walk-through and closing day represent the culmination of weeks of work. Both events require attention to detail and clear communication between all parties.

### The Final Walk-Through

The **final walk-through** (also called a pre-settlement inspection) is the buyer's last opportunity to verify the property's condition before taking ownership. It is not a home inspection. Its purpose is to confirm:

- The property is in the condition agreed upon in the contract
- Any repairs negotiated during the inspection contingency have been completed
- All items included in the sale (appliances, fixtures, window treatments as specified) are present
- All items excluded from the sale have been removed
- The seller has vacated the property (unless a post-closing occupancy agreement exists)
- No new damage has occurred since the inspection

**When it occurs**: Typically 24-48 hours before closing, or on closing day before proceeding to the settlement office. The timing should allow enough time to address any issues before the closing meeting.

**What to check**:
- Turn on all faucets, flush toilets, run the dishwasher and garbage disposal
- Test the HVAC system (heating and cooling)
- Open and close all exterior doors and windows
- Check that all light switches and outlets work
- Verify that the garage door opener works
- Inspect any areas where repairs were made
- Check the basement for signs of water intrusion (especially after recent rain)
- Verify that the property has been cleaned to a reasonable standard (broom-clean is the typical standard)

**Issues during the walk-through**: If the buyer discovers problems, the options include:
- Delaying closing until the issue is resolved
- Proceeding with closing and escrowing funds for the repair
- Negotiating a credit at the settlement table
- In extreme cases, terminating the contract if the issues constitute a material breach

### Closing Day Procedures

Closing day in Virginia follows a generally predictable sequence:

**1. Arrive at the settlement office**: The buyer, seller (may sign separately), and their agents meet at the settlement agent's office. Some Virginia closings are conducted remotely using notarized documents or through power of attorney, particularly for out-of-state parties.

**2. Review the Closing Disclosure**: The buyer should have received the CD at least 3 business days prior. At closing, the settlement agent reviews the final figures and answers questions. The buyer confirms the cash-to-close amount.

**3. Sign documents**: The buyer signs numerous documents including:
- **Promissory note**: The buyer's promise to repay the lender
- **Deed of trust**: The security instrument giving the lender a lien on the property
- **Closing Disclosure**: Acknowledgment of final costs
- **Truth-in-Lending disclosure**: Federal lending disclosure
- **Affidavits**: Owner occupancy (if applicable), identity verification

The seller signs:
- **Deed**: The document transferring ownership (general warranty deed is standard in Virginia)
- **Seller's portion of the Closing Disclosure**
- **Affidavits**: Non-foreign status (FIRPTA), mechanics lien, possession

**4. Funding**: The buyer's funds (down payment and closing costs) are wired to the settlement agent before or at closing. After all documents are signed, the settlement agent requests funding from the lender. The lender wires the loan proceeds to the settlement agent.

**5. Recording**: Once all funds are received, the settlement agent records the deed and deed of trust in the land records at the circuit court clerk's office. In many Virginia jurisdictions, recording is done electronically on the same day.

**6. Disbursement**: The settlement agent disburses funds to the seller, pays off the seller's existing mortgage, pays commissions, and distributes other settlement charges.

**7. Keys and possession**: Possession transfers as specified in the contract. In most Virginia residential transactions, possession transfers **at closing** (or upon recording, if specified). The listing agent arranges for keys, garage door openers, security codes, and other access items to be delivered to the buyer.

### Post-Closing Occupancy

If the seller needs additional time in the property after closing, the parties may negotiate a **post-closing occupancy agreement** (sometimes called a rent-back or use and occupancy agreement). The agreement specifies the occupancy period, daily rent, security deposit, and the consequences of failing to vacate on time. Post-closing occupancy periods typically range from 1-60 days. Lenders may restrict post-closing occupancy to 60 days for owner-occupied loans.`,
        },
      ],
    },
    // ── Chapter 4: Post-Closing & Special Situations ─────────────────────
    {
      slug: 'post-closing-special-situations',
      title: 'Post-Closing & Special Situations',
      lessons: [
        {
          slug: 'post-closing-obligations-recordation',
          title: 'Post-Closing Obligations and Recordation',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'recordation',
            'recordation tax',
            'grantor tax',
            'deed recording',
            'deed of trust recording',
            'title insurance policy',
            'final title policy',
            'post-closing audit',
            'commission disbursement',
            'file retention',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match Virginia recordation terms: grantor tax, recordation tax, who pays each, and the current rates',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of post-closing obligations for agents, settlement agents, and brokers in Virginia',
            },
          ],
          content: `## Post-Closing Obligations and Recordation

The closing meeting is not the end of the transaction. Several important obligations continue after the parties sign and the settlement agent disburses funds.

### Recordation in Virginia

**Recording** the deed and deed of trust is one of the most critical post-closing steps. Recording provides **constructive notice** to the public that ownership has transferred and that a new lien exists. Without recording, a subsequent bona fide purchaser could claim superior title to the property.

In Virginia, documents are recorded in the **clerk's office of the circuit court** in the jurisdiction where the property is located. Virginia has 95 counties and 38 independent cities, each with its own circuit court clerk.

**Recording process**: The settlement agent submits the deed and deed of trust (along with any other recordable documents) to the clerk's office. Many Virginia jurisdictions accept electronic recording, which allows same-day recording. After recording, the clerk assigns a book and page number (or instrument number) and stamps the document with the recording date and time.

### Virginia Transfer Taxes

Virginia imposes two transfer taxes at recording:

**State recordation tax (deed of trust)**: $0.25 per $100 (or fraction thereof) of the value of the deed of trust. For a $300,000 mortgage, the recordation tax is $300,000 / $100 x $0.25 = **$750**. The buyer typically pays this tax because the deed of trust secures the buyer's loan.

**Grantor tax (deed)**: Virginia's state grantor's tax under **Va. Code §58.1-802** is **$0.50 per $500** (0.1%) of the sale price, paid by the grantor at recording. Localities may impose an additional local grantor tax up to $0.50 per $500 under §58.1-802(A). In WMATA localities (Northern Virginia), a regional congestion relief tax under **§58.1-802.2** adds $0.10 per $100 of consideration. The state recordation tax under §58.1-801 is a separate $0.25 per $100, paid by the grantee.

Agents should verify the applicable rates for their locality, as Northern Virginia jurisdictions (including Fairfax County, Arlington County, and the Cities of Alexandria, Fairfax, Falls Church, and Manassas) carry the additional regional congestion relief tax on top of the state and local grantor taxes.

### Post-Closing Settlement Agent Duties

After closing, the settlement agent must:

1. **Record documents**: Submit the deed and deed of trust for recording
2. **Disburse remaining funds**: Pay off the seller's existing mortgage, distribute commission checks, pay any remaining settlement charges
3. **Issue title insurance policies**: The final owner's and lender's title insurance policies are issued after recording and delivered to the insured parties
4. **Send payoff funds**: Wire the payoff amount to the seller's existing lender and obtain a satisfaction of the prior deed of trust
5. **File IRS Form 1099-S**: Report the sale to the IRS as required by federal law
6. **Maintain records**: Virginia law requires settlement agents to maintain closing files for a minimum period (typically 5 years for financial records)

### Post-Closing Agent and Broker Duties

**Brokerage file compliance**: Virginia regulations require that brokers maintain complete transaction files. The file should include copies of the listing agreement, purchase contract, all addenda, disclosure forms, correspondence, and the Closing Disclosure. DPOR may audit brokerage files during routine inspections.

**Commission disbursement**: The settlement agent disburses the commission to the listing and selling brokerages. The broker then pays the individual agent according to their independent contractor agreement or company policy. Commissions must be paid to the **brokerage**, not directly to the agent.

**Client follow-up**: While not legally required, best practices include:
- Confirming with the buyer that keys and access work
- Ensuring the seller receives their net proceeds
- Providing the buyer with a list of utility companies and transfer contacts
- Following up to request reviews and referrals
- Adding clients to a CRM for ongoing relationship management

### File Retention

Virginia regulations require brokers to maintain transaction files for **at least 3 years** from the date of closing (or from the date of the listing agreement if the property did not sell). Some brokerages maintain files longer for risk management purposes. Files should include all material documents and correspondence related to the transaction.`,
        },
        {
          slug: 'short-sales-foreclosures-virginia',
          title: 'Short Sales and Foreclosures in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'short sale',
            'foreclosure',
            'deed of trust',
            'trustee',
            'non-judicial foreclosure',
            'notice of default',
            'foreclosure auction',
            'deficiency judgment',
            'loss mitigation',
            'deed in lieu of foreclosure',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match Virginia foreclosure terms: trustee, non-judicial foreclosure, notice of default, deficiency judgment, deed in lieu',
            },
            {
              type: 'scenario',
              prompt:
                'A homeowner owes $320,000 on their mortgage but the home is worth $270,000. They have not missed a payment yet but anticipate hardship. Walk through the short sale and foreclosure avoidance options.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the Virginia non-judicial foreclosure process and timeline',
            },
          ],
          content: `## Short Sales and Foreclosures in Virginia

When homeowners cannot meet their mortgage obligations, several outcomes are possible. Understanding the distressed property landscape is important for agents representing buyers interested in distressed properties and sellers facing financial hardship.

### Short Sales

A **short sale** occurs when a property is sold for less than the outstanding mortgage balance, and the lender agrees to accept the reduced payoff. The lender's approval is required because they are agreeing to release their lien for less than the full amount owed.

**Short sale process**:
1. The seller lists the property with an agent (often at market value, which is below the loan balance)
2. The listing indicates the sale is subject to lender approval
3. When an offer is received, the listing agent submits a short sale package to the lender, including: a hardship letter from the seller, financial statements, tax returns, bank statements, the purchase contract, and a market analysis (CMA or BPO)
4. The lender's **loss mitigation department** reviews the package and determines whether to approve the short sale
5. If approved, the lender issues an approval letter specifying the net amount they will accept and any conditions
6. The sale proceeds to closing

**Timeline**: Short sale approval can take 30-120+ days depending on the lender, the complexity of the situation, and whether there are multiple lien holders (second mortgages, home equity lines of credit). Multiple lien holders significantly complicate the process because each must agree to accept a reduced payoff.

**Deficiency**: The difference between the mortgage balance and the short sale price is the **deficiency**. The lender may waive the deficiency (forgive the remaining debt) or reserve the right to pursue a **deficiency judgment** against the borrower. In Virginia, lenders can pursue deficiency judgments unless the borrower and lender agree otherwise. Borrowers should seek legal counsel regarding deficiency liability.

**Tax implications**: Forgiven mortgage debt may be treated as taxable income to the borrower. The lender reports the forgiven amount on IRS Form 1099-C. However, the Mortgage Forgiveness Debt Relief Act has periodically provided exclusions for forgiven debt on primary residences.

### Foreclosure in Virginia

Virginia is a **deed of trust state**, which enables **non-judicial foreclosure** (also called foreclosure by power of sale). This is faster and less expensive than judicial foreclosure (which requires a court proceeding).

**Virginia non-judicial foreclosure process**:

1. **Default**: The borrower misses payments. Most lenders do not initiate foreclosure until the borrower is 90-120 days delinquent.

2. **Notice of default and election to sell**: The trustee (named in the deed of trust) sends the borrower a notice of default and the lender's intent to foreclose. Virginia law requires at least **14 days' notice** before the foreclosure sale.

3. **Publication**: Notice of the foreclosure sale must be published in a newspaper of general circulation in the area where the property is located. Under §55.1-322, advertisement frequency depends on paper type: in a **daily newspaper**, publish once a week for **4 successive weeks** or daily for 5 days; in a **weekly newspaper**, publish for **2 successive weeks**. The sale cannot occur until at least **8 days after the first publication and no more than 30 days after the last**.

4. **Foreclosure sale (auction)**: The trustee conducts a public auction at the time, place, and terms specified in the notice. The property is sold to the highest bidder. The lender may bid at the auction (called a **credit bid**, bidding up to the amount owed without needing cash).

5. **Trustee's deed**: The trustee conveys the property to the winning bidder by trustee's deed.

### No Post-Sale Right of Redemption

**Virginia has no statutory post-sale right of redemption.** Once a non-judicial trustee sale under a deed of trust is complete, the former owner cannot reclaim the property by paying off the debt. This is a key difference from judicial foreclosure states, where borrowers may have a statutory redemption window to recover the property after the sale.

### Deficiency Judgments in Virginia

If the foreclosure sale price is less than the mortgage balance, the lender may seek a deficiency judgment in court. Virginia Code permits deficiency judgments, but the lender must file within the applicable statute of limitations. The court considers whether the sale price was fair and may limit the deficiency to the difference between the fair market value and the debt (not the foreclosure sale price, which may be lower than fair market value).

### Alternatives to Foreclosure

**Loan modification**: The lender modifies the loan terms (reduced interest rate, extended term, principal forbearance) to make payments affordable.

**Forbearance agreement**: The lender temporarily reduces or suspends payments while the borrower resolves a temporary hardship.

**Deed in lieu of foreclosure**: The borrower voluntarily transfers the property to the lender in exchange for release from the mortgage debt. This avoids the public foreclosure process but requires lender agreement and has similar credit implications.

**Repayment plan**: The borrower and lender agree on a plan to catch up on missed payments over a defined period while maintaining current payments.

### Agent Considerations

Agents representing buyers in distressed property transactions should be aware that short sales and foreclosures involve additional complexity, longer timelines, and properties sold with limited or no seller disclosures. Agents representing distressed sellers should recommend legal counsel early in the process.`,
        },
        {
          slug: 'wire-fraud-prevention-cybersecurity',
          title: 'Wire Fraud Prevention and Cybersecurity',
          lessonType: 'scenario',
          estimatedMinutes: 20,
          keyTerms: [
            'wire fraud',
            'business email compromise',
            'phishing',
            'social engineering',
            'wire transfer',
            'verification protocol',
            'cybersecurity',
            'closing funds',
            'email spoofing',
            'multi-factor authentication',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A buyer receives an email that appears to be from the settlement agent with updated wire instructions the day before closing. The email address is one letter different from the real address. What should the buyer do?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of wire fraud red flags and prevention protocols',
            },
            {
              type: 'flashcard',
              prompt:
                'Match wire fraud prevention terms: business email compromise, phishing, social engineering, verification protocol',
            },
          ],
          content: `## Wire Fraud Prevention and Cybersecurity

Wire fraud targeting real estate transactions has become one of the most significant threats in the industry. The FBI's Internet Crime Complaint Center (IC3) reports hundreds of millions of dollars lost annually to real estate wire fraud schemes. Every agent, settlement agent, and lender must understand the threat and take proactive measures to protect clients.

### How Wire Fraud Works

The most common scheme is **Business Email Compromise (BEC)**:

1. **Reconnaissance**: Criminals monitor real estate transactions by compromising email accounts of agents, lenders, or settlement agents. They may gain access through phishing emails, weak passwords, or data breaches.

2. **Timing**: The criminals wait until the transaction is approaching closing, when large wire transfers are expected.

3. **Spoofed email**: The criminal sends the buyer (or the buyer's agent) an email that appears to come from the settlement agent or lender. The email contains modified wire transfer instructions directing funds to the criminal's bank account. The email address is often nearly identical to the real address, with subtle differences (e.g., replacing an "l" with a "1" or adding an extra letter).

4. **Urgency**: The email often creates urgency ("wire instructions have changed, please send funds immediately to avoid closing delay").

5. **Fund theft**: If the buyer wires money to the fraudulent account, the funds are typically moved through multiple accounts and often overseas within hours. Recovery is extremely difficult once the wire is processed.

### Why Real Estate Is a Target

Real estate transactions involve large sums of money transferred electronically, predictable timelines (closing dates are known in advance), multiple parties communicating by email, and transaction details that are often publicly available (MLS listings, public records). This combination makes real estate transactions attractive targets for sophisticated criminals.

### Prevention Protocols

**For agents**:
- **Never send wire instructions by email**. If clients ask for wire information, direct them to call the settlement agent directly using a known phone number (not a number from an email).
- Warn clients at the beginning of the transaction that wire fraud is a real threat and that wire instructions will never change at the last minute.
- Use encrypted email when transmitting sensitive information (social security numbers, financial data).
- Enable **multi-factor authentication (MFA)** on all email accounts and business applications.
- Do not discuss transaction details on unsecured channels.

**For buyers**:
- **Always verify wire instructions by phone** before sending any funds. Call the settlement agent at a phone number you obtained independently (from the settlement agent's website, business card, or original correspondence), not from the email containing wire instructions.
- Be extremely suspicious of any email requesting a change in wire instructions, especially if received close to closing.
- Confirm the settlement agent's bank name and account details verbally before initiating the wire.
- If your bank allows a callback verification for large wire transfers, use it.
- Send a small test wire first and confirm receipt before sending the full amount (if time and bank policies allow).

**For settlement agents and brokerages**:
- Implement cybersecurity training for all staff
- Use encrypted email systems
- Establish written protocols for communicating wire instructions (phone verification required)
- Include wire fraud warnings in all transaction communications
- Maintain cyber liability insurance
- Conduct regular security audits of email systems and network infrastructure

### What to Do If Wire Fraud Occurs

Time is critical. If a buyer suspects they have wired funds to a fraudulent account:

1. **Contact the sending bank immediately** and request a wire recall. Banks can sometimes freeze outgoing wires if caught quickly.
2. **Contact the receiving bank** (the bank where the funds were sent) and request a hold on the account.
3. **File a complaint with the FBI's IC3** (ic3.gov). The FBI can sometimes assist with fund recovery through its Recovery Asset Team (RAT).
4. **Notify local law enforcement** and file a police report.
5. **Notify the settlement agent and all parties** to the transaction.

Recovery rates are low. The best defense is prevention. Every real estate professional has a responsibility to educate their clients about wire fraud and to implement robust verification procedures.

### Industry Response

The American Land Title Association (ALTA), the National Association of Realtors (NAR), and the Consumer Financial Protection Bureau (CFPB) have all issued guidance on wire fraud prevention. Many Virginia settlement agencies now include wire fraud advisories as part of their standard closing package, and some require the buyer to sign a wire fraud acknowledgment.`,
        },
        {
          slug: 'new-construction-deposits-warranties',
          title: 'New Construction: Deposits, Warranties & Builder Contracts',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'new construction',
            'builder contract',
            'earnest money deposit',
            'construction timeline',
            'builder warranty',
            'Virginia Residential Property Disclosure Act',
            'implied warranty of habitability',
            'structural warranty',
            'punch list',
            'certificate of occupancy',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A buyer is purchasing a new construction home from a national builder. The builder\'s contract requires a $30,000 non-refundable deposit and provides no financing or appraisal contingency. What should the buyer\'s agent advise?',
            },
            {
              type: 'flashcard',
              prompt:
                'Match new construction terms: punch list, CO, structural warranty, implied warranty, builder spec, pre-construction',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia new construction buyer protections, warranties, and builder contract negotiation',
            },
          ],
          content: `## New Construction: Deposits, Warranties, and Builder Contracts

New construction transactions differ significantly from resale transactions. Buyers purchasing newly built homes face unique contractual terms, timelines, and warranty considerations. Agents representing new construction buyers must understand these differences to protect their clients.

### Types of New Construction Purchases

**Spec homes**: The builder constructs the home without a specific buyer. The home is complete or near-complete when the buyer contracts. The buyer has limited ability to customize but knows exactly what they are getting.

**Pre-construction (to-be-built)**: The buyer contracts to purchase a home before construction begins. The buyer typically selects a lot, floor plan, and upgrades. The construction process takes 6-12+ months depending on the builder and market conditions.

**Custom homes**: The buyer hires a builder to construct a home to the buyer's specifications on a lot the buyer owns or is purchasing separately. These transactions are the most complex and require detailed construction contracts.

### Builder Contracts

Most production builders (national and regional builders like NVR/Ryan Homes, Stanley Martin, Toll Brothers, and others active in Virginia) use their own purchase contracts rather than standard MLS forms. These contracts are drafted by the builder's attorneys and tend to favor the builder.

**Key provisions to review**:

**Deposits**: Builder contracts often require larger deposits than resale transactions. Initial deposits of $5,000-$10,000 are common, with additional deposits due at various stages (design center selections, framing completion). Some contracts make deposits **non-refundable** after certain milestones. Buyers should understand when and how deposits can be forfeited.

**Financing contingency**: Many builder contracts include a financing contingency, but the terms may be more restrictive than standard resale contracts. Some builders require the buyer to apply with the builder's affiliated lender to qualify for incentives. Buyers are not required to use the builder's lender (RESPA prohibits this), but they may lose incentives by going elsewhere.

**Appraisal contingency**: Builder contracts may not include an appraisal contingency. If the completed home appraises below the contract price, the buyer must cover the difference or risk forfeiting their deposit. This is a significant risk in markets where new construction prices are rising faster than comparable resale values.

**Closing date**: Builder contracts typically specify an estimated completion date rather than a firm closing date. The builder usually reserves the right to extend the completion date due to weather, material shortages, labor issues, or permitting delays. Buyers relying on the sale of an existing home or the expiration of a lease should build in a buffer.

**Changes and upgrades**: Selections made at the design center (flooring, cabinets, countertops, fixtures) are typically binding after a certain point. Changes requested after the cutoff may incur fees or be denied. Agents should ensure buyers understand the selection timeline.

### Builder Warranties

Virginia provides new home buyers with several warranty protections:

**Implied warranty of habitability**: Under Virginia common law, builders of new residential construction provide an implied warranty that the home is constructed in a workmanlike manner and is suitable for habitation. This warranty exists even if not stated in the contract. However, some builder contracts attempt to limit or disclaim implied warranties (the enforceability of such disclaimers varies).

**Express warranties**: Most builders provide a written warranty, often structured in tiers:
- **1-year warranty**: Covers workmanship and materials (cosmetic and minor defects)
- **2-year warranty**: Covers mechanical systems (HVAC, plumbing, electrical)
- **10-year structural warranty**: Covers major structural defects (foundation, load-bearing walls, roof structure). This is often provided through a third-party warranty company.

**Builder warranty procedures**: Buyers must typically submit warranty claims in writing within the warranty period. Most builders conduct a warranty walk (inspection) at 30 days and 11 months to identify and address warranty items. Buyers should be diligent about documenting issues and submitting claims before the warranty periods expire.

### The Punch List and Certificate of Occupancy

Before closing, the buyer (and their agent) should conduct a thorough walk-through of the completed home to create a **punch list** of items that need correction: scratches on countertops, paint touch-ups, doors that do not close properly, incomplete grading, and similar issues. The builder should correct punch list items before or shortly after closing.

The builder must obtain a **Certificate of Occupancy (CO)** from the local building department before the buyer can close and occupy the home. The CO certifies that the home meets building code requirements and has passed all required inspections (foundation, framing, electrical, plumbing, mechanical, final).

### Virginia-Specific Protections

The Virginia **Residential Property Disclosure Act** applies to new construction sales. Builders must provide the buyer with a disclosure form. Additionally, the **Virginia Condominium Act** and **Virginia Property Owners Association Act** apply if the new construction is in a condominium or HOA community, triggering additional disclosure requirements and the buyer's right of rescission.

Agents representing new construction buyers provide essential value by reviewing builder contracts, negotiating deposit terms, ensuring proper inspections, and managing the punch list process.`,
        },
      ],
    },
  ],
}

// ── Exports ──────────────────────────────────────────────────────────────────

export const MODULES_910: CourseModule[] = [module9, module10]
export { module9, module10 }
