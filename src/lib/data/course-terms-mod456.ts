// Key term definitions for Modules 4-6
// Will be merged into course-terms.ts

export const MOD456_TERMS: Record<string, { definition: string; example?: string }> = {
  // ── Module 4, Ch1: Mortgage Types & Terms ──────────────────────────────────

  'conventional loan': {
    definition: 'A mortgage not backed by any government agency, originated by private lenders and typically sold to Fannie Mae or Freddie Mac on the secondary market. PMI is required when LTV exceeds 80%.',
    example: 'A buyer with a 740 credit score puts 10% down on a conventional loan and pays PMI until the loan balance reaches 80% of the home\'s value.',
  },
  'FHA loan': {
    definition: 'A mortgage insured by the Federal Housing Administration (a division of HUD) that allows lower credit scores and down payments. Requires both upfront and annual Mortgage Insurance Premiums (MIP).',
    example: 'A first-time buyer with a 600 credit score qualifies for an FHA loan with 3.5% down, but MIP stays for the life of the loan since the down payment is under 10%.',
  },
  'VA loan': {
    definition: 'A mortgage guaranteed by the Department of Veterans Affairs for eligible servicemembers, veterans, and surviving spouses. Offers 0% down payment with no monthly mortgage insurance.',
    example: 'A veteran purchases a $350,000 home with zero down using a VA loan, paying only the one-time VA funding fee.',
  },
  'USDA loan': {
    definition: 'A mortgage guaranteed by the U.S. Department of Agriculture for moderate-income buyers in eligible rural and suburban areas. Offers 0% down payment with income limits.',
    example: 'A family earning under 115% of the area median income buys a home in a USDA-eligible rural Virginia county with no down payment.',
  },
  'conforming loan': {
    definition: 'A mortgage that meets Fannie Mae/Freddie Mac purchase standards, including loan limits. Conforming loans can be sold on the secondary market to the GSEs.',
    example: 'A $500,000 loan in most U.S. counties is conforming because it falls below the conforming loan limit.',
  },
  'jumbo loan': {
    definition: 'A conventional loan that exceeds the conforming loan limit set by Fannie Mae/Freddie Mac. Jumbo loans typically carry higher rates and stricter qualification requirements.',
    example: 'A buyer in Northern Virginia financing $900,000 needs a jumbo loan because the amount exceeds conforming limits, requiring a higher credit score and larger down payment.',
  },
  'PMI': {
    definition: 'Private Mortgage Insurance -- required on conventional loans when LTV exceeds 80%. Protects the lender (not the borrower) against default. Cancelable at 80% LTV; automatically cancelled at 78% LTV by federal law.',
    example: 'A buyer puts 10% down on a conventional loan and pays $150/month in PMI until the loan balance drops to 80% of the original purchase price.',
  },
  'MIP': {
    definition: 'Mortgage Insurance Premium -- the FHA equivalent of PMI. Includes an upfront MIP (1.75% of loan amount) and an annual MIP. Cannot be cancelled if down payment was under 10% -- it lasts the life of the loan.',
    example: 'An FHA borrower who put 3.5% down will pay MIP for the entire 30-year loan term, unlike PMI on a conventional loan.',
  },
  'funding fee': {
    definition: 'A one-time fee charged on VA loans (typically 2.15-3.3% for first use) paid at closing or rolled into the loan. Disabled veterans may be exempt. There is no monthly mortgage insurance on VA loans.',
    example: 'A first-time VA borrower pays a 2.15% funding fee on a $300,000 loan ($6,450), which can be financed into the loan amount.',
  },

  // ── Module 4, Ch1: Fixed vs. Adjustable Rates ─────────────────────────────

  'fixed-rate mortgage': {
    definition: 'A mortgage with an interest rate that never changes over the life of the loan. The principal and interest payment remains constant; only escrow components can change the total payment.',
    example: 'A 30-year fixed at 6.5% means the borrower pays the same P&I of $1,264 per month on a $200,000 loan from payment 1 through payment 360.',
  },
  'adjustable-rate mortgage': {
    definition: 'A mortgage with an interest rate that changes periodically after an initial fixed-rate period. The adjusted rate equals the index plus the margin, subject to caps.',
    example: 'A 5/1 ARM starts at 5% for 5 years, then adjusts annually based on SOFR + margin, potentially increasing or decreasing the payment.',
  },
  'ARM': {
    definition: 'Adjustable-Rate Mortgage. Named using a format like 5/1 or 7/6 where the first number is the initial fixed-rate period in years and the second is how often the rate adjusts afterward.',
    example: 'A 7/6 ARM has a fixed rate for 7 years, then the rate adjusts every 6 months based on the current index plus margin.',
  },
  'index': {
    definition: 'A benchmark interest rate used to calculate ARM rate adjustments after the initial fixed period. The most common current index is SOFR (Secured Overnight Financing Rate), which replaced LIBOR.',
    example: 'If SOFR is 4.5% and the ARM margin is 2.75%, the adjusted rate would be 7.25%.',
  },
  'margin': {
    definition: 'A fixed percentage added by the lender to the index rate when calculating ARM adjustments. The margin never changes over the life of the loan -- only the index changes.',
    example: 'An ARM with a 2.75% margin means the lender always adds 2.75% to whatever the current index rate is at each adjustment.',
  },
  'cap': {
    definition: 'A limit on how much an ARM rate can change. Three types: initial adjustment cap (first adjustment after fixed period), periodic cap (each subsequent adjustment), and lifetime cap (total increase over the loan\'s life).',
    example: 'A 5/2/5 cap structure means: up to 5% at first adjustment, up to 2% at each subsequent adjustment, and never more than 5% above the initial rate over the loan\'s life.',
  },
  'initial rate period': {
    definition: 'The first phase of an ARM during which the interest rate remains fixed. Common periods are 3, 5, 7, or 10 years before the first rate adjustment.',
    example: 'During the 5-year initial rate period of a 5/1 ARM at 4.5%, the borrower\'s rate stays at 4.5% regardless of market conditions.',
  },
  'lifetime cap': {
    definition: 'The maximum total interest rate increase permitted over the entire life of an ARM, measured from the initial rate. Typically 5% or 6% above the starting rate.',
    example: 'An ARM starting at 4.5% with a 5% lifetime cap can never exceed 9.5%, no matter how high the index rises.',
  },
  'LIBOR': {
    definition: 'London Interbank Offered Rate -- a formerly widely used ARM index based on rates London banks charged each other. Phased out and replaced by SOFR for new ARM originations.',
    example: 'Older ARMs originated before 2023 may still reference LIBOR, but new ARMs use SOFR as the benchmark index.',
  },
  'SOFR': {
    definition: 'Secured Overnight Financing Rate -- the current primary ARM index in the U.S., replacing LIBOR. Based on the cost of overnight borrowing collateralized by Treasury securities.',
    example: 'A new 5/1 ARM uses SOFR as its index, so at the first rate adjustment the new rate will be SOFR + the contractual margin.',
  },

  // ── Module 4, Ch1: Special Mortgage Products ───────────────────────────────

  'balloon mortgage': {
    definition: 'A mortgage with regular payments calculated on a long amortization schedule but a large lump-sum "balloon" payment of the remaining balance due at a specified earlier date.',
    example: 'A balloon mortgage amortized over 30 years but due in 7 years requires the borrower to either pay off the full remaining balance, refinance, or sell by year 7.',
  },
  'reverse mortgage': {
    definition: 'A loan for homeowners age 62+ that converts home equity into cash (lump sum, line of credit, or monthly payments). No monthly payments required; the loan is repaid when the borrower sells, moves out, or dies.',
    example: 'A 70-year-old with a paid-off home takes a reverse mortgage to receive $1,500/month in income, with the loan balance growing over time until the home is eventually sold.',
  },
  'HECM': {
    definition: 'Home Equity Conversion Mortgage -- the FHA-insured version of a reverse mortgage and by far the most common type. For borrowers 62 and older. Requires HUD-approved counseling before origination.',
    example: 'Before obtaining a HECM, the 68-year-old homeowner completed mandatory counseling with a HUD-approved counselor to understand the loan\'s long-term implications.',
  },
  'bridge loan': {
    definition: 'A short-term loan (typically 6-12 months) used by a homeowner to purchase a new home before their current home sells. Secured by the current home\'s equity.',
    example: 'The seller used a bridge loan to make a non-contingent offer on the new house while waiting for their current home to close.',
  },
  'construction loan': {
    definition: 'A short-term loan that finances the construction of a new home. Funds are disbursed in draws as construction milestones are completed, then converted to a permanent mortgage upon completion.',
    example: 'The borrower received construction loan draws at foundation, framing, and completion stages, then the loan converted to a 30-year fixed mortgage.',
  },
  'wraparound mortgage': {
    definition: 'A seller-financing arrangement where the seller retains their existing mortgage and offers the buyer a new, larger loan that "wraps around" it. The buyer pays the seller, who continues paying the underlying mortgage.',
    example: 'The seller\'s existing mortgage is $200,000 at 4%. The seller offers the buyer a $350,000 wraparound at 6%, pocketing the rate difference on the $200,000 while financing the full amount.',
  },
  'land contract': {
    definition: 'Also called a Contract for Deed. The seller finances the purchase and retains legal title until the buyer completes all payments. The buyer receives equitable title (possession and use) but not the deed until paid in full.',
    example: 'Under a land contract, the buyer makes monthly payments to the seller for 10 years. The seller delivers the deed only after the final payment is made.',
  },
  'purchase money mortgage': {
    definition: 'A mortgage given directly to the seller as part of the purchase price, with the seller acting as the lender and holding the mortgage as security for the deferred portion of the price.',
    example: 'The buyer paid $50,000 cash and gave the seller a $150,000 purchase money mortgage for the remainder, making the seller the lien holder.',
  },

  // ── Module 4, Ch1: Mortgage Clauses ────────────────────────────────────────

  'acceleration clause': {
    definition: 'A mortgage provision allowing the lender to declare the entire outstanding loan balance immediately due and payable upon a triggering event, most commonly default on payments.',
    example: 'After the borrower missed three payments, the lender invoked the acceleration clause and demanded the full $280,000 remaining balance.',
  },
  'alienation clause': {
    definition: 'A mortgage provision (also called a due-on-sale clause) requiring the loan to be paid in full when the property is sold or transferred without the lender\'s prior approval.',
    example: 'When the homeowner tried to transfer the property to an LLC, the lender invoked the alienation clause and demanded full repayment of the loan.',
  },
  'due-on-sale clause': {
    definition: 'Another name for the alienation clause. Requires the borrower to pay off the loan in full upon selling or transferring the property. Prevents unauthorized loan assumptions.',
    example: 'The due-on-sale clause prevented the seller from letting the buyer assume the existing low-rate mortgage without lender approval.',
  },
  'prepayment penalty': {
    definition: 'A fee charged to the borrower for paying off a loan early, typically within a specified period (often 3-5 years). Prohibited on FHA, VA, and USDA loans. Uncommon on modern conventional loans.',
    example: 'The borrower who refinanced in year 2 owed a prepayment penalty of 2% of the remaining balance because the original loan had a 3-year prepayment penalty period.',
  },
  'defeasance clause': {
    definition: 'A mortgage provision stating the lien becomes null and void when the borrower repays the loan in full. The trustee reconveys title back to the borrower free and clear.',
    example: 'Upon the final mortgage payment, the defeasance clause was triggered and the deed of trust was released from the land records.',
  },
  'subordination clause': {
    definition: 'A provision where a lender agrees that their mortgage lien will be inferior (subordinate) to another lien. Used when new financing needs priority over an existing lien.',
    example: 'The holder of the second mortgage signed a subordination agreement allowing the new refinanced first mortgage to take priority.',
  },
  'subordination-non-disturbance-attornment': {
    definition: 'An SNDA agreement commonly used in commercial real estate. The tenant\'s lease is subordinated to the lender\'s mortgage, but the lender agrees not to disturb the tenant\'s possession if foreclosure occurs, and the tenant agrees to recognize the new owner as landlord.',
    example: 'The commercial tenant signed an SNDA so the new lender would recognize the existing lease even if the landlord defaulted on the mortgage.',
  },

  // ── Module 4, Ch2: Loan Process & Qualification ────────────────────────────

  'DTI ratio': {
    definition: 'Debt-to-Income ratio -- compares a borrower\'s monthly debt payments to gross monthly income. Two types: front-end (housing costs only) and back-end (all debts). Standard conventional max is 43% back-end.',
    example: 'A borrower earning $6,000/month with $2,400 in total monthly debts has a 40% back-end DTI ratio (2,400/6,000).',
  },
  'front-end ratio': {
    definition: 'The housing expense ratio -- monthly PITI (principal, interest, taxes, insurance) divided by gross monthly income. Standard conventional guideline is 28-36%.',
    example: 'Monthly PITI of $1,800 on gross income of $6,000 equals a 30% front-end ratio.',
  },
  'back-end ratio': {
    definition: 'The total debt ratio -- all monthly debt payments (PITI plus car loans, student loans, credit cards, etc.) divided by gross monthly income. Standard conventional maximum is 43%.',
    example: 'Monthly PITI of $1,800 plus $600 in other debts on $6,000 income equals a 40% back-end ratio (2,400/6,000).',
  },
  'LTV': {
    definition: 'Loan-to-Value ratio -- the loan amount divided by the appraised value or purchase price (whichever is lower). LTV above 80% requires PMI on conventional loans.',
    example: 'A $320,000 loan on a $400,000 purchase = 80% LTV. At exactly 80%, no PMI is required on a conventional loan.',
  },
  'credit score': {
    definition: 'A numerical rating (typically FICO) reflecting a borrower\'s creditworthiness. Lenders use the middle score from three bureaus. Conventional loans generally require 620+; FHA accepts 580+ for 3.5% down.',
    example: 'A borrower with bureau scores of 710, 725, and 740 has a middle score of 725, qualifying for competitive conventional loan rates.',
  },
  'income documentation': {
    definition: 'Proof of income required by lenders during underwriting. W-2 employees provide 2 years of W-2s and recent pay stubs; self-employed borrowers provide 2 years of tax returns and a current P&L.',
    example: 'The self-employed buyer submitted two years of personal and business tax returns, plus a year-to-date profit and loss statement.',
  },
  'asset verification': {
    definition: 'Lender requirement to verify the borrower has sufficient funds for the down payment, closing costs, and post-closing reserves, typically through 2+ months of bank statements.',
    example: 'The lender flagged a large deposit on the bank statement and required a paper trail (gift letter) to verify the source of the down payment funds.',
  },
  'PITI': {
    definition: 'Principal, Interest, Taxes, and Insurance -- the four components of a typical monthly housing payment. Used to calculate the front-end DTI ratio.',
    example: 'The buyer\'s PITI was $1,950/month: $850 principal and interest, $400 property taxes, $150 homeowner\'s insurance, and $550 for PMI and HOA.',
  },

  // ── Module 4, Ch2: RESPA, TILA & Disclosures ──────────────────────────────
  // Note: 'RESPA' already defined in course-terms.ts (Module 1)

  'TILA': {
    definition: 'Truth in Lending Act -- a federal law requiring lenders to disclose the true cost of credit in a standardized format, including APR, finance charge, amount financed, and total of payments.',
    example: 'Under TILA, the lender disclosed an APR of 6.75% even though the note rate was 6.5%, because the APR includes origination fees spread over the loan term.',
  },
  'Loan Estimate': {
    definition: 'A TRID disclosure form the lender must provide within 3 business days of receiving a loan application. Shows estimated interest rate, monthly payment, and total closing costs in a consumer-friendly format.',
    example: 'The buyer received the Loan Estimate on Tuesday, three business days after submitting her application on Saturday.',
  },
  'Closing Disclosure': {
    definition: 'A TRID form showing final actual figures for all loan terms and closing costs. Must be provided to the buyer no later than 3 business days before closing. Replaces the old HUD-1 for most transactions.',
    example: 'The Closing Disclosure arrived Tuesday for a Friday closing, giving the buyer the required 3 business days to review before signing.',
  },
  'TRID': {
    definition: 'TILA-RESPA Integrated Disclosures -- the 2015 rule combining Truth in Lending and RESPA disclosures into two forms: the Loan Estimate (within 3 days of application) and the Closing Disclosure (3 days before closing).',
    example: 'Under TRID rules, the Closing Disclosure must be received 3 business days before closing; if a significant change occurs, a new 3-day period is triggered.',
  },
  'APR': {
    definition: 'Annual Percentage Rate -- the true yearly cost of borrowing expressed as a percentage, including the interest rate plus certain fees (origination, points, some insurance). Always higher than the note rate.',
    example: 'The note rate was 6.5% but the APR was 6.82% because origination fees and points were spread across the loan term.',
  },
  'finance charge': {
    definition: 'The total dollar cost of a loan over its life, including all interest plus certain fees as defined by TILA. Disclosed on the Loan Estimate and Closing Disclosure.',
    example: 'On a $200,000 loan at 6% for 30 years, the finance charge (total interest + fees) exceeded $230,000 over the life of the loan.',
  },
  'three-day right of rescission': {
    definition: 'A TILA right allowing borrowers to cancel a refinance of their primary residence within 3 business days after closing. Does NOT apply to purchase transactions.',
    example: 'After signing the refinance documents, the homeowner exercised the 3-day right of rescission and the lender released the lien and returned all fees within 20 days.',
  },
  'HUD-1': {
    definition: 'The former standard settlement statement used before TRID (2015) to itemize all charges and credits to buyer and seller. Now replaced by the Closing Disclosure for most residential transactions, though still used in some cash and commercial deals.',
    example: 'Pre-2015 closings used the HUD-1 Settlement Statement; today the Closing Disclosure serves the same purpose for financed residential transactions.',
  },

  // ── Module 4, Ch2: Secondary Mortgage Market ───────────────────────────────

  'Fannie Mae': {
    definition: 'Federal National Mortgage Association -- a government-sponsored enterprise (GSE) that purchases conventional conforming loans from lenders on the secondary market, freeing up capital for new lending.',
    example: 'After originating the mortgage, the bank sold it to Fannie Mae and used the proceeds to fund the next buyer\'s loan.',
  },
  'Freddie Mac': {
    definition: 'Federal Home Loan Mortgage Corporation -- a GSE similar to Fannie Mae that purchases conventional conforming loans from lenders. Both have been in federal conservatorship since the 2008 financial crisis.',
    example: 'Freddie Mac competes with Fannie Mae to purchase conforming loans, ensuring lenders always have a buyer for their mortgages.',
  },
  'Ginnie Mae': {
    definition: 'Government National Mortgage Association -- a wholly government-owned corporation within HUD that guarantees mortgage-backed securities backed by FHA, VA, and USDA loans. Unlike Fannie/Freddie, Ginnie Mae is a true government agency.',
    example: 'Ginnie Mae does not buy loans directly; it guarantees the MBS created from pools of FHA and VA loans, giving investors confidence.',
  },
  'secondary market': {
    definition: 'The marketplace where lenders sell their originated mortgages to investors (Fannie Mae, Freddie Mac, private investors), freeing up capital to make new loans. Without it, lenders would run out of money to lend.',
    example: 'The lender originated a $400,000 mortgage, sold it on the secondary market, and immediately had $400,000 available to lend to the next buyer.',
  },
  'mortgage-backed security': {
    definition: 'An investment security created by pooling many mortgages together and selling shares to investors. The MBS investors receive the mortgage payments from the pooled loans.',
    example: 'Fannie Mae packaged 1,000 individual mortgages into a mortgage-backed security and sold it to pension funds and mutual fund investors.',
  },
  'conforming loan limit': {
    definition: 'The maximum loan amount Fannie Mae and Freddie Mac will purchase. The baseline limit is adjusted annually (over $766,550 in 2024 for most areas). Loans above this limit are jumbo loans.',
    example: 'A buyer financing $800,000 in a standard-limit county exceeds the conforming loan limit and must use a jumbo loan product.',
  },
  'portfolio lender': {
    definition: 'A lender that keeps loans on its own books rather than selling them to Fannie Mae/Freddie Mac. Portfolio lenders can offer more flexible terms because they are not bound by GSE underwriting guidelines.',
    example: 'The community bank acted as a portfolio lender, approving a self-employed borrower who didn\'t meet conforming DTI guidelines.',
  },

  // ── Module 4, Ch3: Sales Comparison Approach ───────────────────────────────

  'comparable sale': {
    definition: 'A recently sold property similar to the subject property in size, condition, location, and features, used as a basis for estimating the subject\'s market value in the sales comparison approach.',
    example: 'The appraiser selected three comparable sales within a half-mile that sold in the last 6 months with similar square footage and bedroom count.',
  },
  'adjustment': {
    definition: 'A dollar amount added to or subtracted from a comparable sale price to account for differences from the subject property. Add for features the comp lacks; subtract for features the comp has that the subject does not.',
    example: 'The comp had a pool worth $15,000 that the subject lacked, so the appraiser subtracted $15,000 from the comp\'s sale price.',
  },
  'subject property': {
    definition: 'The property being appraised or valued. All comparable sales are compared and adjusted relative to the subject property.',
    example: 'The subject property is the 3-bedroom ranch being appraised; the three comps are adjusted to reflect what they would have sold for if they were identical to the subject.',
  },
  'market value': {
    definition: 'The most probable price a property would bring in a competitive and open market, with buyer and seller both acting prudently and knowledgeably, and the price not affected by undue stimulus.',
    example: 'A foreclosure sale at below-market price does not represent market value because the seller (bank) is under duress to sell quickly.',
  },
  "arm's length transaction": {
    definition: 'A transaction between parties with no special relationship (not family, not business partners, not under duress). Appraisers require that comparable sales be arm\'s length transactions.',
    example: 'A sale between a parent and child at a below-market price is not arm\'s length and would not be used as a comparable by an appraiser.',
  },
  'bracketing': {
    definition: 'An appraisal technique of selecting comparable sales that are both superior and inferior to the subject property, so the estimated value falls between the adjusted prices -- "bracketed" by the comps.',
    example: 'The appraiser selected one comp above and two below the subject\'s likely value, bracketing the estimate to increase confidence in the final number.',
  },
  'reconciliation': {
    definition: 'The final step in the sales comparison approach where the appraiser weighs the adjusted comparable sale prices and arrives at a single value estimate. It is NOT a simple average -- closer comps receive more weight.',
    example: 'After adjusting three comps to $310,000, $315,000, and $325,000, the appraiser reconciled to $313,000, giving the most similar comp the greatest weight.',
  },

  // ── Module 4, Ch3: Income & Cost Approaches ────────────────────────────────

  'income approach': {
    definition: 'An appraisal method that estimates value based on the income a property generates. Used primarily for apartment buildings, commercial properties, and investment residential properties.',
    example: 'The appraiser valued the 10-unit apartment building using the income approach, dividing the $96,000 NOI by a 6% cap rate to arrive at $1,600,000.',
  },
  'GRM': {
    definition: 'Gross Rent Multiplier -- a simplified income valuation shortcut. GRM = Sale Price / Gross Rent. To estimate value: Value = Gross Rent x GRM. Quick but crude because it ignores expenses.',
    example: 'If similar duplexes sell for 8 times annual gross rent and the subject earns $36,000/year, the estimated value is $36,000 x 8 = $288,000.',
  },
  'capitalization rate': {
    definition: 'Cap rate -- the ratio of Net Operating Income to property value. Cap Rate = NOI / Value. To find value: Value = NOI / Cap Rate. Lower cap rates indicate higher values and lower risk.',
    example: 'A building with $48,000 NOI in a market with a 6% cap rate is worth $48,000 / 0.06 = $800,000.',
  },
  'NOI': {
    definition: 'Net Operating Income -- the income remaining after subtracting vacancy, credit losses, and operating expenses from potential gross income. Does NOT include mortgage payments (which are owner-specific).',
    example: 'The building generates $120,000 in potential gross rent, minus 5% vacancy ($6,000) and $30,000 in operating expenses, yielding an NOI of $84,000.',
  },
  'cost approach': {
    definition: 'An appraisal method that estimates value as the cost to reproduce or replace the improvements, minus depreciation, plus the land value. Best for special-use properties and new construction.',
    example: 'The appraiser valued the church using the cost approach because there were no comparable sales: land value ($200,000) + replacement cost ($800,000) - depreciation ($100,000) = $900,000.',
  },
  'reproduction cost': {
    definition: 'The cost to build an exact replica of the improvement using the same materials and construction methods. More precise but often impractical for older buildings with obsolete materials.',
    example: 'Reproducing the 1920s hand-laid brick facade would cost $250 per square foot -- far more than modern replacement materials.',
  },
  'replacement cost': {
    definition: 'The cost to build an improvement of equal utility using current materials and modern construction methods. More commonly used than reproduction cost because it is more practical.',
    example: 'The replacement cost for the 2,000 sq ft home was $180/sq ft using current building standards and materials, totaling $360,000.',
  },
  'depreciation': {
    definition: 'In the cost approach, loss in value from any cause. Three types: physical deterioration (wear and tear), functional obsolescence (outdated design), and external/economic obsolescence (outside factors).',
    example: 'The appraiser estimated $80,000 in total depreciation: $40,000 physical (deferred maintenance), $20,000 functional (one-bathroom layout), and $20,000 external (new highway nearby).',
  },
  'accrued depreciation': {
    definition: 'The total accumulated loss in value from all causes (physical, functional, and external) from the time of construction to the appraisal date. Subtracted from reproduction/replacement cost in the cost approach.',
    example: 'The 30-year-old building had $150,000 in accrued depreciation subtracted from its $500,000 replacement cost, yielding an improvement value of $350,000.',
  },

  // ── Module 4, Ch3: USPAP & Appraisal Standards ─────────────────────────────

  'USPAP': {
    definition: 'Uniform Standards of Professional Appraisal Practice -- the authoritative national standards for appraisal practice, developed by The Appraisal Foundation. Requires independence, competence, and objectivity.',
    example: 'Under USPAP, an appraiser cannot accept an assignment where they have a personal interest in the outcome, and cannot be pressured to reach a predetermined value.',
  },
  'certified appraiser': {
    definition: 'An appraiser holding a Certified Residential or Certified General credential from the state. Certified Residential can appraise all residential properties regardless of value; Certified General can appraise all property types.',
    example: 'The $1.2 million home required a certified residential appraiser because the transaction value exceeded the licensed appraiser\'s limit.',
  },
  'licensed appraiser': {
    definition: 'An appraiser holding a Licensed Residential credential who can appraise non-complex 1-4 family residential properties up to $1 million in transaction value.',
    example: 'The licensed appraiser handled the routine $350,000 single-family home appraisal but referred the $1.5 million estate to a certified appraiser.',
  },
  'appraisal independence': {
    definition: 'The Dodd-Frank requirement that appraisers must not be pressured by any party to reach a predetermined value. Agents cannot tell an appraiser what value is needed for a deal to work.',
    example: 'The agent provided the appraiser with comparable sales data (permitted) but did not suggest what the appraised value should be (prohibited).',
  },
  'AMC': {
    definition: 'Appraisal Management Company -- a firewall entity between lenders and appraisers required by Dodd-Frank. AMCs randomly assign appraisals to panel appraisers, preventing lenders from pressuring specific appraisers.',
    example: 'The lender ordered the appraisal through an AMC, which assigned it to an independent appraiser from its rotating panel rather than the lender\'s preferred appraiser.',
  },
  'retroactive appraisal': {
    definition: 'An appraisal that estimates a property\'s value as of a past date rather than the current date. Used in estate settlements, tax disputes, and litigation.',
    example: 'The estate needed a retroactive appraisal to determine the home\'s value as of the date of the owner\'s death for tax purposes.',
  },
  'market value definition': {
    definition: 'Per USPAP: the most probable price a property would bring in a competitive and open market under all conditions requisite to a fair sale, with buyer and seller each acting prudently and knowledgeably.',
    example: 'A forced foreclosure sale does not meet the market value definition because the seller is under financial duress, not acting voluntarily.',
  },

  // ── Module 4, Ch4: Commission Calculations ─────────────────────────────────

  'commission rate': {
    definition: 'The percentage of the sale price paid as compensation for real estate brokerage services. Negotiable between the seller and listing broker; specified in the listing agreement.',
    example: 'A 6% commission rate on a $400,000 sale produces a total commission of $24,000, typically split between listing and buyer brokerages.',
  },
  'split': {
    definition: 'The division of commission between brokerages (listing vs. buyer\'s) and between a broker and their affiliated agent. Splits are set by agreement, not by law.',
    example: 'The listing brokerage received 3% and the buyer\'s brokerage received 2.5%. The listing agent then split her share 70/30 with her broker.',
  },
  'co-op commission': {
    definition: 'The portion of the listing commission offered to the cooperating (buyer\'s) brokerage, specified in the MLS listing or buyer representation agreement.',
    example: 'The MLS listing offered a 2.5% co-op commission to any buyer\'s brokerage whose client purchased the property.',
  },
  'net to seller': {
    definition: 'The amount the seller receives after all commissions and closing costs are deducted from the sale price. Calculated as: Sale Price - Commission - Closing Costs.',
    example: 'On a $400,000 sale with 5.5% commission ($22,000) and $3,000 in other closing costs, the seller nets $375,000.',
  },
  'gross commission income': {
    definition: 'The total commission earned by a brokerage or agent before any splits, referral fees, or deductions are applied.',
    example: 'The brokerage\'s gross commission income on the $500,000 sale at 6% was $30,000, before splitting with the co-op broker and the individual agents.',
  },
  'referral fee deduction': {
    definition: 'A fee owed to a referring broker for sending the client, deducted from the receiving brokerage\'s share before the broker/agent split is calculated.',
    example: 'The listing brokerage received $13,500 but owed a 25% referral fee ($3,375) to the referring broker, leaving $10,125 to split with the agent.',
  },

  // ── Module 4, Ch4: Prorations ──────────────────────────────────────────────

  'proration': {
    definition: 'The division of ongoing costs (property taxes, HOA fees, rent) between buyer and seller at closing based on the closing date. The party who owned the property during the period pays for that period.',
    example: 'At a March 15 closing, property taxes of $3,650/year were prorated: the seller owed 73 days (Jan 1 - Mar 14) at $10/day = $730 credit to the buyer.',
  },
  'daily rate': {
    definition: 'The per-day cost used to calculate prorations. Found by dividing the annual (or monthly) cost by the number of days in the year (365 or 360) or month (actual or 30).',
    example: 'Annual taxes of $3,650 / 365 days = $10.00 daily rate for calendar-year proration.',
  },
  "banker's year": {
    definition: 'A proration calculation method using 30-day months and a 360-day year, simplifying the math. Some exam questions specify this method.',
    example: 'Using the banker\'s year, February has 30 days (not 28) and the annual rate is divided by 360 instead of 365.',
  },
  '365-day year': {
    definition: 'A proration calculation method using actual calendar days in each month and 365 days per year. More precise than the banker\'s year and reflects actual Virginia practice.',
    example: 'Using the 365-day method, the daily tax rate is $3,650 / 365 = $10.00, and February has 28 days (or 29 in a leap year).',
  },
  'tax proration': {
    definition: 'Division of property tax responsibility between buyer and seller at closing. Virginia taxes are typically paid in arrears, so the seller owes the buyer a credit for the portion of the year the seller owned the property.',
    example: 'Closing on September 1 with $4,380 annual taxes: seller owes 243 days (Jan-Aug) at $12/day = $2,916 credit to the buyer.',
  },
  'HOA fee proration': {
    definition: 'Division of prepaid HOA dues between buyer and seller at closing. Since HOA fees are typically paid in advance, the buyer reimburses the seller for the unused portion.',
    example: 'The seller prepaid September\'s $300 HOA fee. Closing September 10 means the buyer owes 20 days at $10/day = $200 credit to the seller.',
  },
  'rent proration': {
    definition: 'Division of prepaid tenant rent between buyer and seller when an investment property is sold. The seller credits the buyer for rent covering the buyer\'s ownership period.',
    example: 'Closing April 10 with $1,500 April rent already collected: buyer owns 21 days (Apr 10-30) at $50/day = $1,050 credit from seller to buyer.',
  },
  'closing date rule': {
    definition: 'The convention determining which party "owns" the closing date for proration purposes. In Virginia, the buyer typically owns the day of closing.',
    example: 'Under Virginia custom, the buyer owns the closing date, so the seller\'s tax responsibility runs through the day before closing.',
  },

  // ── Module 4, Ch4: Loan Calculations ───────────────────────────────────────

  'loan-to-value ratio': {
    definition: 'LTV -- the loan amount divided by the appraised value or purchase price (whichever is lower). Determines PMI requirements and affects interest rates.',
    example: 'A $288,000 loan on a $320,000 purchase = 90% LTV, requiring PMI on a conventional loan.',
  },
  'down payment': {
    definition: 'The portion of the purchase price paid by the buyer in cash at closing. Down payment = Purchase Price - Loan Amount. Minimum varies by loan type: VA/USDA 0%, FHA 3.5%, conventional 3-5%.',
    example: 'On a $280,000 FHA purchase with 3.5% down, the down payment is $9,800 and the loan amount is $270,200.',
  },
  'points': {
    definition: 'Fees equal to 1% of the loan amount each, paid at closing. Can be origination points (lender processing fee) or discount points (prepaid interest to buy down the rate).',
    example: 'On a $240,000 loan, 1.5 points costs $3,600 (1.5% of $240,000).',
  },
  'discount point': {
    definition: 'A prepaid interest charge equal to 1% of the loan amount, paid at closing to reduce the interest rate for the life of the loan. Each point typically reduces the rate by 0.125-0.25%.',
    example: 'Paying 2 discount points ($4,800 on a $240,000 loan) reduced the rate from 7% to 6.5%, saving $40/month. Break-even: $4,800 / $40 = 120 months (10 years).',
  },
  'origination fee': {
    definition: 'A lender\'s charge for processing and underwriting the loan, often expressed in points. One origination point equals 1% of the loan amount.',
    example: 'The lender charged a 1% origination fee on the $300,000 loan, adding $3,000 to the buyer\'s closing costs.',
  },
  'monthly payment': {
    definition: 'The total amount due each month on a mortgage, including principal, interest, and typically escrow for taxes and insurance (PITI). The P&I portion is fixed on a fixed-rate loan.',
    example: 'A $250,000 loan at 7% for 30 years has a monthly P&I payment of approximately $1,663. Escrow for taxes and insurance adds to the total.',
  },
  'amortization': {
    definition: 'The process of paying down a loan through regular payments covering both interest and principal. In early years, most of each payment goes to interest; in later years, most goes to principal.',
    example: 'On a $200,000 loan at 6%, the first month\'s payment of $1,199 is $1,000 interest and only $199 principal. By year 25, the ratio is reversed.',
  },

  // ── Module 4, Ch4: Area & Volume ───────────────────────────────────────────

  'square footage': {
    definition: 'The area of a space measured in square feet. For residential appraisal, only above-grade finished living area (Gross Living Area) counts. Basement and garage are excluded from GLA.',
    example: 'A two-story home with a 1,120 sq ft first floor and a 960 sq ft second floor has 2,080 sq ft of GLA.',
  },
  'acreage': {
    definition: 'Land area measured in acres. 1 acre = 43,560 square feet. To convert: Acres = Square Feet / 43,560.',
    example: 'A lot measuring 150 x 200 feet = 30,000 sq ft / 43,560 = 0.689 acres.',
  },
  'area formula': {
    definition: 'Mathematical formulas for calculating area. Rectangle: Length x Width. Triangle: (Base x Height) / 2. Irregular shapes: divide into rectangles and triangles, calculate each, and add.',
    example: 'A rectangular room 14 x 12 feet = 168 sq ft. A triangular lot with 120 ft base and 80 ft height = (120 x 80) / 2 = 4,800 sq ft.',
  },
  'volume': {
    definition: 'The three-dimensional space within a structure, calculated as Length x Width x Height. Measured in cubic feet or cubic yards (1 cubic yard = 27 cubic feet).',
    example: 'A room 20 x 15 x 9 feet has a volume of 2,700 cubic feet (or 100 cubic yards).',
  },
  'cubic feet': {
    definition: 'A unit of volume measurement. Volume = Length x Width x Height in feet. One cubic yard equals 27 cubic feet.',
    example: 'An HVAC contractor needs to know a room\'s volume in cubic feet to properly size the heating/cooling unit.',
  },
  'acre definition': {
    definition: 'One acre equals 43,560 square feet. One square mile equals 640 acres (one full section). One mile equals 5,280 feet. These are critical exam memorization facts.',
    example: 'A 2.5-acre lot = 2.5 x 43,560 = 108,900 square feet.',
  },
  'frontage': {
    definition: 'The width of a lot at the street. Listing descriptions often describe lots by frontage x depth.',
    example: 'A "75 x 150 lot" means 75 feet of street frontage and 150 feet of depth, yielding 11,250 sq ft (0.258 acres).',
  },

  // ── Module 5, Ch1: Practice of Real Estate ─────────────────────────────────

  'MLS': {
    definition: 'Multiple Listing Service -- a cooperative database where real estate brokers share listing information and offer compensation to cooperating brokers. Virginia\'s major systems are BRIGHT, REIN, CVR MLS, and NRVAR.',
    example: 'When the listing broker enters a property in the MLS, they extend a blanket offer of cooperation to all MLS member brokers.',
  },
  'cooperation': {
    definition: 'The MLS principle that member brokers agree to share listing information and work together on transactions. The listing broker offers compensation to the cooperating (buyer\'s) broker.',
    example: 'MLS cooperation means the listing agent\'s property is visible to and showable by all member agents, expanding the marketing reach.',
  },
  'buyer agent compensation': {
    definition: 'The commission offered to the buyer\'s brokerage for bringing a successful buyer. Under post-2024 NAR settlement rules, buyer representation agreements must specify compensation before showing property.',
    example: 'The buyer\'s agent\'s compensation was specified in the written buyer representation agreement as 2.5% of the sale price.',
  },
  'clear cooperation policy': {
    definition: 'An MLS rule requiring listings to be submitted to the MLS within one business day of any public marketing (yard signs, social media, websites, flyers). Prevents pocket listings and off-market hoarding.',
    example: 'After posting the property on Instagram, the agent had one business day to enter the listing in the MLS under the Clear Cooperation Policy.',
  },
  'days on market': {
    definition: 'The number of days a property has been listed for sale in the MLS. High DOM raises buyer concerns. DOM resets when a listing is withdrawn and relisted, but cumulative DOM (CDOM) often does not.',
    example: 'The property had 90 days on market, prompting buyers to wonder why it hadn\'t sold and to offer below list price.',
  },
  'listing input': {
    definition: 'The process of entering a new property listing into the MLS system with all required data fields, photos, and disclosures. Must occur within one business day of public marketing under Clear Cooperation.',
    example: 'The listing agent entered the property into CVR MLS immediately after taking professional photos and getting the seller\'s MLS authorization.',
  },
  'IDX': {
    definition: 'Internet Data Exchange -- an MLS data-sharing arrangement that allows member brokers to display other members\' listings on their websites under MLS rules and attribution requirements.',
    example: 'The agent\'s website displayed hundreds of active listings from the MLS through the IDX feed, with proper brokerage attribution on each.',
  },
  'VOW': {
    definition: 'Virtual Office Website -- a higher-level MLS data sharing arrangement that allows brokers to display more MLS data (including sold data) to registered consumers on a password-protected website.',
    example: 'Registered users on the brokerage\'s VOW could view sold prices and historical MLS data not available on public IDX sites.',
  },

  // ── Module 5, Ch1: Buyer Representation ────────────────────────────────────

  'buyer consultation': {
    definition: 'The initial meeting with a prospective buyer where the agent determines needs, explains fiduciary duties, provides agency disclosure, discusses financing, and presents the buyer representation agreement.',
    example: 'During the buyer consultation, the agent reviewed the buyer\'s budget, explained agency duties, and executed the written buyer representation agreement.',
  },
  'written buyer representation agreement': {
    definition: 'A mandatory written agreement (required under Virginia law and post-2024 NAR rules) that must be signed before showing property. Specifies geographic area, term, compensation, and the buyer\'s obligations.',
    example: 'The buyer signed the representation agreement specifying a 6-month term, 2.5% compensation, and a geographic scope of the Richmond metro area.',
  },
  'working with buyers': {
    definition: 'The overall process of representing a buyer through four phases: consultation, property search, making offers, and transaction management from contract to closing.',
    example: 'Working with buyers requires a systematic approach from initial consultation through the final walkthrough and closing day.',
  },
  'property search': {
    definition: 'The phase of buyer representation where the agent sets up MLS notifications, schedules showings, previews properties, and helps the buyer evaluate options against their criteria.',
    example: 'The agent set up automated MLS alerts matching the buyer\'s criteria and scheduled showings within 24 hours of new listings appearing.',
  },
  'showing agreement': {
    definition: 'A written agreement (now required before touring homes under post-2024 NAR settlement rules) documenting the agent-buyer relationship and compensation terms before property showings begin.',
    example: 'Before the first showing, the buyer signed a showing agreement acknowledging the agent\'s representation and agreed compensation.',
  },
  'due diligence': {
    definition: 'The buyer\'s investigation period during which they inspect the property, review HOA/condo documents, verify school districts, check zoning, and confirm all material facts before committing.',
    example: 'During due diligence, the buyer\'s agent recommended professional inspections for the home, well, septic, and radon, and advised reviewing the HOA financial statements.',
  },

  // ── Module 5, Ch1: Listing Process ─────────────────────────────────────────

  'listing presentation': {
    definition: 'The agent\'s formal meeting with a prospective seller to present their CMA, marketing plan, pricing recommendation, and listing agreement. The goal is to earn the seller\'s listing.',
    example: 'At the listing presentation, the agent presented a CMA showing three recent comparable sales, a marketing plan, and a recommended list price of $385,000.',
  },
  'CMA': {
    definition: 'Comparative Market Analysis -- an agent\'s opinion of a property\'s market value based on recent sales, active listings, and expired listings. Not an appraisal, but uses similar logic to the sales comparison approach.',
    example: 'The CMA included 5 recent sold comparables, 3 active listings (competition), and 2 expired listings (price rejections), concluding with a recommended price range.',
  },
  'comparative market analysis': {
    definition: 'A detailed report prepared by an agent comparing the subject property to recently sold, active, and expired listings to establish a recommended listing price range. An agent\'s opinion, not a regulated appraisal.',
    example: 'The agent\'s comparative market analysis showed similar homes selling for $310,000-$325,000, supporting a list price of $319,900.',
  },
  'pricing strategy': {
    definition: 'The approach to setting a listing price. Options include market price (at CMA value), slightly below market (to attract multiple offers), or above market (rarely effective, risks high DOM).',
    example: 'In the hot seller\'s market, the agent recommended pricing 3% below CMA value to generate multiple offers and potentially sell above list price.',
  },
  'days on market impact': {
    definition: 'The effect of accumulated DOM on buyer perception. Properties with high DOM signal problems and attract lower offers. The best showing activity occurs in the first 2 weeks.',
    example: 'After 60 days on market with no offers, the agent recommended a 5% price reduction, knowing that high DOM was scaring away buyers.',
  },
  'photography': {
    definition: 'Professional real estate photography is the most important listing marketing asset. Should be ordered immediately after the listing agreement is signed.',
    example: 'Properties with professional photography sell faster and for more money. The agent scheduled the photographer within 48 hours of the listing agreement.',
  },
  'staging': {
    definition: 'The practice of preparing and furnishing a home to appeal to the widest range of buyers. Can include decluttering, rearranging furniture, adding decor, or bringing in rented furnishings for vacant homes.',
    example: 'The vacant home was professionally staged with rented furniture, helping buyers visualize the space and resulting in an offer within the first week.',
  },
  'marketing plan': {
    definition: 'A listing agent\'s comprehensive strategy for promoting a property, including MLS entry, professional photos, virtual tours, open houses, social media, print advertising, and agent networking.',
    example: 'The marketing plan included professional photos, a 3D virtual tour, two open houses, targeted social media ads, and a broker open event.',
  },

  // ── Module 5, Ch1: Property Management ─────────────────────────────────────

  'property management agreement': {
    definition: 'A required written contract between a property owner and a managing broker specifying the properties managed, services provided, fee structure, trust account handling, and termination provisions.',
    example: 'The property management agreement authorized the broker to lease the unit, collect rent, coordinate repairs up to $500, and charge a 10% monthly management fee.',
  },
  'leasing': {
    definition: 'The property management function of marketing vacant units, screening tenant applications, executing lease agreements, and placing qualified tenants.',
    example: 'The property manager handled all leasing activities including listing the unit, conducting showings, running background checks, and executing the lease.',
  },
  'rent collection': {
    definition: 'The property management function of collecting monthly rent, processing payments, handling late payments, and initiating collections or eviction proceedings when necessary.',
    example: 'The property manager collected rent via online portal, applied late fees after the 5-day grace period, and initiated the eviction process for chronically delinquent tenants.',
  },
  'maintenance': {
    definition: 'The property management function of responding to tenant repair requests, coordinating with vendors, conducting periodic inspections, and maintaining the property in habitable condition per VRLTA.',
    example: 'The property manager responded to the maintenance request within 24 hours and had the plumber repair the leak the following day.',
  },
  'owner reporting': {
    definition: 'Monthly financial statements provided by the property manager to the owner showing rent received, management fees, maintenance expenses, and net disbursement amount.',
    example: 'The monthly owner report showed $1,500 rent collected, $150 management fee, $275 plumbing repair, and $1,075 net disbursement to the owner.',
  },
  'property management fee': {
    definition: 'The ongoing fee charged by a property manager, typically 8-12% of monthly collected rent for single-family homes. Drawn from the trust account only after rent is collected.',
    example: 'At a 10% management fee on $1,800/month rent, the manager earns $180/month for ongoing management services.',
  },
  'leasing fee': {
    definition: 'A one-time fee charged when a new tenant is placed, typically equal to one month\'s rent or a percentage of annual rent. Compensates for marketing, showing, screening, and lease execution.',
    example: 'The property manager charged a leasing fee equal to one month\'s rent ($1,500) each time a new tenant was placed in the unit.',
  },

  // ── Module 5, Ch2: Property Disclosures ────────────────────────────────────

  'Residential Property Disclosure Statement': {
    definition: 'Virginia\'s standard disclosure form (published by DPOR/VREB) that the seller must provide to the buyer before contract execution. The seller either represents a condition or makes "no representation."',
    example: 'The seller completed the RPDS, checking "no representation" on most items but disclosing known foundation repair work completed in 2019.',
  },
  'buyer beware': {
    definition: 'Virginia\'s disclosure framework places significant responsibility on the buyer to conduct their own inspections and due diligence. The RPDS is a starting point for investigation, not a warranty.',
    example: 'Under Virginia\'s buyer beware approach, a buyer who fails to inspect a condition the seller made "no representation" about cannot later sue for that condition.',
  },
  'inspection rights': {
    definition: 'The buyer\'s right to conduct independent inspections of the property during the due diligence period. Virginia\'s disclosure framework relies heavily on buyers exercising this right.',
    example: 'The buyer exercised their inspection rights by hiring a licensed home inspector, a radon tester, and a structural engineer before the inspection deadline.',
  },
  'seller knowledge standard': {
    definition: 'The RPDS requires sellers to disclose conditions they actually know about. "No representation" applies to unknown conditions but does not shield a seller who knowingly conceals a defect.',
    example: 'The seller knew about recurring basement flooding but checked "no representation" -- this does not protect them from a misrepresentation claim because they had actual knowledge.',
  },
  'as-is caveat emptor': {
    definition: 'The principle that a buyer purchases property in its existing condition. "As-is" means no repairs will be made, but the seller must still disclose known material defects -- as-is does not mean no disclosure.',
    example: 'The contract was "as-is," meaning the seller would not make repairs, but the seller still had to disclose the known roof leak on the RPDS.',
  },
  'disclosure form': {
    definition: 'The Virginia Residential Property Disclosure Statement -- the standard statewide form sellers must provide to buyers before contract execution, covering structural, environmental, and condition items.',
    example: 'The listing agent ensured the seller completed and signed the disclosure form before the first showing to avoid contract complications.',
  },

  // ── Module 5, Ch2: HOA & Condo Disclosures ────────────────────────────────

  'HOA disclosure packet': {
    definition: 'A disclosure package required under the Virginia POAA for properties subject to a homeowners\' association. Contains the declaration, bylaws, assessments, special assessments, reserves, and litigation status.',
    example: 'The HOA disclosure packet revealed a pending $5,000 per-unit special assessment for roof replacement, giving the buyer critical cost information.',
  },
  'condominium resale certificate': {
    definition: 'A disclosure package required under the Virginia Condominium Act for condo unit sales. Similar to the POAA packet but specific to condominiums, including rental restrictions and COA insurance coverage.',
    example: 'The condominium resale certificate showed a 25% rental cap, which concerned the buyer who planned to rent the unit within two years.',
  },
  'right of cancellation': {
    definition: 'The buyer\'s non-waivable right to cancel the contract within 3 days of receiving a complete POAA disclosure packet or condominium resale certificate. If never provided, the buyer can cancel any time before settlement.',
    example: 'After receiving the HOA packet, the buyer had 3 days to review and cancel for any reason. They discovered a large special assessment and cancelled on day 2.',
  },
  'POAA': {
    definition: 'Property Owners\' Association Act (Virginia Code 55.1-1808 et seq.) -- the Virginia statute requiring HOA disclosure packets in sales of properties subject to a homeowners\' association.',
    example: 'Under the POAA, the seller must request the disclosure packet from the HOA and provide it to the buyer before contract execution.',
  },
  'Virginia Condominium Act': {
    definition: 'The Virginia statute (Title 55.1, Chapter 19) governing condominiums. Establishes requirements for condominium creation, unit owner rights, common element ownership, resale certificates, association governance, master insurance requirements, and the 3-day buyer cancellation right after receiving the resale certificate.',
    example: 'The Virginia Condominium Act required the association to carry a master insurance policy covering the building structure and common elements, and the seller to provide a resale certificate showing pending assessments, reserve balances, and rental restrictions.',
  },
  'special assessment': {
    definition: 'A one-time charge levied by an HOA or condo association on unit owners to fund a specific project (roof replacement, parking lot repair) beyond what regular dues cover.',
    example: 'The HOA levied a $3,500 special assessment per unit for pool renovation. The disclosure packet revealed this pending charge to prospective buyers.',
  },
  'reserve fund': {
    definition: 'Savings maintained by an HOA or condo association for future major repairs and replacements (roofs, elevators, parking areas). An underfunded reserve is a warning sign of future special assessments.',
    example: 'The buyer\'s agent noted the reserve fund balance was only $12,000 for a 50-unit building, signaling likely special assessments ahead.',
  },

  // ── Module 5, Ch2: Special Property Disclosures ────────────────────────────

  'airport noise zone': {
    definition: 'An area near a military installation or commercial airport subject to significant aircraft noise (typically 65+ dB). Virginia requires disclosure when a property is in a designated noise zone or Accident Potential Zone.',
    example: 'Properties near NAS Oceana in Virginia Beach must disclose their location within the AICUZ noise zone, as jet noise significantly affects quality of life.',
  },
  'military air installation': {
    definition: 'A military base with aircraft operations that creates noise zones and Accident Potential Zones (APZs) affecting nearby properties. Virginia requires disclosure for properties in these zones.',
    example: 'Homes near Langley Air Force Base in Hampton must disclose their proximity to the military air installation and any applicable noise zone designation.',
  },
  'highway construction': {
    definition: 'Virginia requires disclosure when a property is within an officially designated right-of-way for future highway construction or a VDOT Six-Year Improvement Program corridor.',
    example: 'The seller disclosed that the property was within a proposed bypass corridor published in VDOT\'s improvement plan, potentially affecting future property value.',
  },
  'mining operations': {
    definition: 'Virginia requires disclosure when a property is in a designated mining zone or has known mining activity. Especially relevant in coal country (Southwest Virginia) and natural gas areas.',
    example: 'The disclosure revealed the property was in a mining zone with severed mineral rights, meaning the surface could be accessed for extraction.',
  },
  'oil and gas': {
    definition: 'Virginia requires disclosure when oil and gas rights have been severed from the property. A surface owner without mineral rights can have their land accessed for extraction with only nominal compensation.',
    example: 'The buyer discovered through the disclosure that the mineral rights had been severed decades ago, and a gas company held extraction rights on the property.',
  },
  'flood zone': {
    definition: 'A FEMA-designated Special Flood Hazard Area where properties face elevated flood risk. Sellers must disclose this status, and lenders require flood insurance for properties in these zones.',
    example: 'The property was in a FEMA AE flood zone, requiring the buyer to purchase flood insurance at approximately $2,400/year in addition to homeowner\'s insurance.',
  },
  'historic district': {
    definition: 'A federally, state, or locally designated area where properties are subject to additional restrictions on exterior alterations, demolition, and renovations to preserve historic character.',
    example: 'The buyer learned the property was in a local historic district, meaning any exterior changes would require approval from the Board of Architectural Review.',
  },

  // ── Module 5, Ch3: Virginia Closing Process ────────────────────────────────

  'settlement agent': {
    definition: 'A person licensed under the Virginia Settlement Agent Act to conduct residential closings. Must be a licensed attorney, a licensed settlement agent (through the Bureau of Insurance), or a title company.',
    example: 'The buyer chose an independent title company as the settlement agent rather than the builder\'s captive title company, exercising their RESPA right.',
  },
  'title company': {
    definition: 'The dominant type of settlement agent in most Virginia markets. Licensed by the Virginia Bureau of Insurance and affiliated with national title insurance underwriters.',
    example: 'The title company conducted the closing, issued both the lender\'s and owner\'s title insurance policies, and recorded the deed.',
  },
  'closing attorney': {
    definition: 'A Virginia-licensed attorney who can serve as the settlement agent at closing. Common in rural areas and complex transactions such as estate sales and commercial deals.',
    example: 'The parties chose a closing attorney for the estate sale because the title had multiple heirs and required legal expertise to resolve.',
  },
  'wet settlement': {
    definition: 'Virginia\'s requirement that all funds must be simultaneously disbursed at the closing table. The lender\'s wire, buyer\'s funds, and all disbursements happen at closing, not afterward.',
    example: 'The closing was delayed 2 hours because the lender\'s wire had not arrived. In Virginia\'s wet settlement system, no documents can be signed until all funds are confirmed.',
  },
  'dry settlement': {
    definition: 'A closing process (used in some other states, NOT Virginia) where parties sign documents but funds are not immediately disbursed. The lender reviews signed docs and wires funds later.',
    example: 'Virginia does not allow dry settlements. All funds must be present and disbursed at the closing table.',
  },
  'three-day review period': {
    definition: 'The TRID requirement that the buyer must receive the Closing Disclosure no later than 3 business days before closing. Business days for TRID = all days except Sundays and federal holidays.',
    example: 'For a Friday closing, the buyer must receive the Closing Disclosure by Tuesday. If received Thursday, the earliest closing is Monday.',
  },

  // ── Module 5, Ch3: Closing Costs ───────────────────────────────────────────
  // Note: 'origination fee' already defined above in Module 4 loan calculations

  'title insurance': {
    definition: 'A one-time insurance policy protecting against losses from title defects, liens, and encumbrances discovered after closing. Two types: lender\'s (required) and owner\'s (optional but strongly recommended).',
    example: 'The owner\'s title insurance paid $45,000 to clear a previously unknown mechanic\'s lien filed by the seller\'s contractor.',
  },
  "grantor's tax": {
    definition: 'A Virginia transfer tax paid by the seller at closing. State rate is $0.10 per $100 of the sale price. Many localities add an additional local grantor\'s tax.',
    example: 'On a $400,000 sale, the state grantor\'s tax is $400 ($400,000/100 x $0.10). The local rate adds another $400 at $0.10/100.',
  },
  'recordation tax': {
    definition: 'A Virginia tax charged when recording a deed or deed of trust. State rate is $0.25 per $100 of consideration (for deeds) or secured debt (for deeds of trust).',
    example: 'Recording a deed on a $380,000 sale costs $950 in state recordation tax ($380,000/100 x $0.25).',
  },
  'transfer tax': {
    definition: 'A general term for taxes imposed on the transfer of real property. In Virginia, this includes the grantor\'s tax, recordation tax, and in some regions the congestion relief fee.',
    example: 'Total transfer taxes on a $400,000 sale in Northern Virginia can exceed $4,000 due to the combination of grantor\'s tax, recordation tax, and congestion relief fee.',
  },
  'prepaid interest': {
    definition: 'Interest charged from the closing date through the end of that month, paid at closing. This is why a buyer\'s first full mortgage payment typically isn\'t due for 6-7 weeks after closing.',
    example: 'Closing on March 15 means 16 days of prepaid interest (March 15-31) is paid at closing. The first full payment is due May 1.',
  },
  'escrow impounds': {
    definition: 'An initial deposit of 2-3 months of property taxes and homeowner\'s insurance placed into the lender\'s escrow account at closing to build a reserve for future payments.',
    example: 'The buyer deposited 3 months of property taxes ($1,200) and 3 months of insurance ($450) into escrow impounds at closing.',
  },
  'seller concessions': {
    definition: 'An agreement by the seller to pay a portion of the buyer\'s closing costs. Caps vary by loan type: conventional 3-6% (depending on LTV), FHA 6%, VA 4%.',
    example: 'The buyer negotiated $8,000 in seller concessions to cover closing costs, reducing cash needed at closing from $15,000 to $7,000.',
  },

  // ── Module 5, Ch3: Title Insurance ─────────────────────────────────────────

  'title search': {
    definition: 'An examination of public land records to verify ownership and identify any liens, easements, restrictions, or other encumbrances on a property before closing.',
    example: 'The title search revealed a $12,000 judgment lien against the seller that had to be paid off at closing before clear title could be conveyed.',
  },
  'title examination': {
    definition: 'The detailed review of the title search results by a title examiner or attorney, identifying any clouds on title or defects that must be resolved before closing.',
    example: 'The title examination revealed that the seller\'s ex-spouse had never signed a quitclaim deed, creating a cloud on title that had to be cleared.',
  },
  "owner's title insurance": {
    definition: 'An optional policy protecting the buyer\'s equity against title defects discovered after closing. Covers the full purchase price and remains in effect as long as the buyer (or their heirs) own the property.',
    example: 'Two years after closing, a previously unknown heir claimed ownership. The owner\'s title insurance covered the $35,000 legal defense and settlement.',
  },
  "lender's title insurance": {
    definition: 'A title insurance policy required by the lender, protecting the lender\'s interest in the property. Coverage decreases as the loan balance is paid down and terminates when the loan is paid off.',
    example: 'The lender required a lender\'s title insurance policy for the full $320,000 loan amount as a condition of funding the mortgage.',
  },
  'title defect': {
    definition: 'Any issue in the chain of title that casts doubt on the current owner\'s claim to the property, such as a missing signature, an unresolved lien, or a forged deed.',
    example: 'The missing notarization on a prior deed was a title defect that required a correction deed before the current sale could close.',
  },
  'cloud on title': {
    definition: 'Any document, claim, or encumbrance in the public records that could impair or cast doubt on the owner\'s title. Clouds must be resolved before a clean title can be conveyed.',
    example: 'An unreleased deed of trust from a loan paid off 10 years ago was a cloud on title. The prior lender had to file a release before closing.',
  },
  'chain of title': {
    definition: 'The chronological sequence of ownership transfers from the original patent/grant to the current owner, documented in the public land records.',
    example: 'The title examiner traced the chain of title back 60 years, verifying each transfer was properly documented and recorded.',
  },
  'abstract of title': {
    definition: 'A historical summary of all recorded documents affecting a property\'s title. Less common in modern Virginia practice, where title insurance has largely replaced reliance on abstracts.',
    example: 'The abstract of title contained 50 years of deeds, mortgages, and liens, providing a paper trail of every transfer and encumbrance.',
  },

  // ── Module 5, Ch3: Closing Documents ───────────────────────────────────────

  'ALTA settlement statement': {
    definition: 'The American Land Title Association\'s standardized settlement statement showing all charges and credits to both buyer and seller. Used alongside or in place of the Closing Disclosure at closing.',
    example: 'The settlement agent reviewed the ALTA statement line by line, confirming the purchase price, EMD credit, commission amounts, and prorations were all correct.',
  },
  'promissory note': {
    definition: 'The borrower\'s personal promise to repay the loan, specifying the loan amount, interest rate, term, and payment schedule. This is the debt instrument; the deed of trust is the security instrument.',
    example: 'At closing, the buyer signed a promissory note for $320,000 at 6.5% for 30 years, committing to monthly payments of $2,023 principal and interest.',
  },
  'deed of trust': {
    definition: 'The security instrument used in Virginia (instead of a mortgage) involving three parties: trustor (borrower), trustee, and beneficiary (lender). Gives the lender a lien on the property and allows non-judicial foreclosure.',
    example: 'The deed of trust was recorded in the Circuit Court, giving the lender a secured lien. If the borrower defaults, the trustee can conduct a non-judicial foreclosure.',
  },
  'warranty deed': {
    definition: 'A deed in which the grantor guarantees clear title and the right to convey. In Virginia, the general warranty deed is the standard instrument for residential sales between private parties.',
    example: 'The seller conveyed the property by general warranty deed, guaranteeing the title against all claims from any time in history.',
  },
  'settlement statement review': {
    definition: 'The process of verifying all financial items on the settlement statement before signing: purchase price, EMD credit, loan amount, commission, prorations, and closing costs.',
    example: 'During the settlement statement review, the buyer\'s agent caught that the $5,000 seller concession was missing and had it corrected before signing.',
  },
  'agent role at closing': {
    definition: 'Agents attend and facilitate closings but cannot practice law. They can verify financial figures, flag errors, and support clients, but cannot interpret legal clauses or advise on legal rights.',
    example: 'When the buyer asked about a legal clause in the deed of trust, the agent correctly said, "That\'s a legal question -- you should ask the settlement attorney."',
  },

  // ── Module 5, Ch4: Types of Deeds ──────────────────────────────────────────

  'general warranty deed': {
    definition: 'The deed providing the broadest title protection, guaranteeing against all claims from any time in history (not just during the seller\'s ownership). Contains six covenants of title. Standard for Virginia residential sales.',
    example: 'The buyer received a general warranty deed, meaning the seller guaranteed the title against defects even from 50 years before the seller owned the property.',
  },
  'special warranty deed': {
    definition: 'A deed where the grantor warrants the title only against claims arising during their own period of ownership. Common in bank/REO sales, corporate sales, and estate transactions.',
    example: 'The bank sold the foreclosed property using a special warranty deed, warranting only that no title issues arose during the bank\'s brief ownership.',
  },
  'quitclaim deed': {
    definition: 'A deed conveying whatever interest the grantor has (which may be everything, something, or nothing), with no warranties of any kind. Used to clear title defects, transfer between family members, or settle disputes.',
    example: 'The ex-spouse signed a quitclaim deed releasing any interest in the property as part of the divorce settlement.',
  },
  'covenant of seisin': {
    definition: 'A warranty in a general warranty deed that the grantor actually owns the property and has the legal right to convey it.',
    example: 'The covenant of seisin guarantees the buyer that the seller truly owns the property and isn\'t selling something they don\'t have.',
  },
  'covenant of quiet enjoyment': {
    definition: 'A warranty that the grantee will not be disturbed in their possession by anyone claiming superior title. If a third party successfully claims the property, the grantor must compensate the grantee.',
    example: 'When a previously unknown heir challenged the buyer\'s ownership, the covenant of quiet enjoyment entitled the buyer to compensation from the seller.',
  },
  'covenant against encumbrances': {
    definition: 'A warranty that there are no undisclosed liens, easements, or restrictions on the property. If an undisclosed encumbrance is later discovered, the grantor is liable.',
    example: 'An undisclosed easement allowing a neighbor to cross the property was discovered after closing, triggering the covenant against encumbrances.',
  },
  'covenant of further assurance': {
    definition: 'A warranty that the grantor will execute any additional documents needed to perfect the grantee\'s title, such as correction deeds or affidavits for technical defects.',
    example: 'A misspelling in the original deed required a correction deed. Under the covenant of further assurance, the seller was obligated to sign it.',
  },

  // ── Module 5, Ch4: Valid Deed Requirements ─────────────────────────────────

  'grantor': {
    definition: 'The party conveying (selling) property by deed. Must be of legal age and sound mind. The grantor\'s name must match exactly how they hold title.',
    example: 'The grantor\'s name on the deed must match the name on the existing deed of record -- "John A. Smith" cannot sign as "John Smith" without a correction.',
  },
  'grantee': {
    definition: 'The party receiving (buying) property by deed. Must be a legally identifiable person or entity. The grantee does NOT need to sign the deed for it to be valid.',
    example: 'The grantees were listed as "David Jones and Maria Jones, as tenants by the entireties" to reflect their desired form of co-ownership.',
  },
  'words of conveyance': {
    definition: 'Language in a deed (the granting clause) that clearly expresses the intent to transfer ownership. Classic examples: "grants, bargains, and sells" or "conveys and warrants."',
    example: 'Without words of conveyance, the deed would not effectively transfer title -- there must be language showing the grantor intends to convey ownership.',
  },
  'legal description': {
    definition: 'A precise identification of property boundaries sufficient for a surveyor to locate the property. Required in a deed. A street address alone is generally not sufficient.',
    example: 'The deed included a metes and bounds legal description referencing the recorded plat, rather than just the street address "123 Main St."',
  },
  // Note: 'consideration' context differs -- deed consideration vs. contract consideration
  // Including as it appears in Module 5 Ch4 keyTerms with deed-specific definition
  'execution': {
    definition: 'The signing of a deed by the grantor. In Virginia, the grantor\'s signature must be acknowledged (notarized) before a notary public for the deed to be recordable.',
    example: 'The seller executed the deed at closing by signing before the notary public, who then affixed the notarial seal and certificate.',
  },
  'delivery and acceptance': {
    definition: 'The final requirement for a valid deed transfer: the grantor must deliver the deed and the grantee must accept it. A signed but undelivered deed does not transfer title.',
    example: 'The seller signed the deed but kept it in a drawer for 6 months. Because it was never delivered to the buyer, title never transferred.',
  },

  // ── Module 5, Ch4: Title Examination & Recording ───────────────────────────

  'grantor-grantee index': {
    definition: 'The primary title search tool in Virginia, maintained by each Circuit Court Clerk. The grantor index lists documents by seller\'s name; the grantee index lists by buyer\'s name.',
    example: 'The title examiner traced the chain of title using the grantee index to find how each owner acquired the property, then checked the grantor index for any liens or transfers during their ownership.',
  },
  'tract index': {
    definition: 'A title indexing system (used in some states but not Virginia\'s primary method) that organizes records by property parcel rather than by grantor/grantee names.',
    example: 'In a tract index system, all documents affecting a specific parcel are grouped together, making title searches faster than the name-based grantor-grantee system.',
  },
  'recording act': {
    definition: 'A state statute determining priority among competing claims to the same property based on who recorded first and/or who had notice. Virginia uses a race-notice recording act.',
    example: 'Under Virginia\'s recording act, a subsequent buyer who records first AND had no notice of the prior unrecorded sale will prevail over the first buyer.',
  },
  'notice recording act': {
    definition: 'A type of recording statute (NOT used in Virginia) where a subsequent purchaser without notice of a prior unrecorded claim prevails even without recording their own deed.',
    example: 'Virginia does not use a notice recording act. Virginia\'s race-notice system requires the subsequent buyer to both lack notice AND record first.',
  },
  'race-notice': {
    definition: 'Virginia\'s recording system. A subsequent purchaser prevails over a prior unrecorded interest ONLY if they (1) took without notice of the prior interest AND (2) recorded first. Both conditions must be met.',
    example: 'Buyer A purchased first but didn\'t record. Buyer B purchased later with no knowledge of Buyer A\'s purchase and recorded immediately. Under race-notice, Buyer B prevails.',
  },
  'bona fide purchaser': {
    definition: 'A buyer who purchases property in good faith, for valuable consideration, and without notice of any prior unrecorded claims. Protected under Virginia\'s race-notice recording act if they also record first.',
    example: 'The second buyer qualified as a bona fide purchaser because they paid full value, had no knowledge of the first sale, and recorded their deed immediately.',
  },
  'constructive notice': {
    definition: 'Knowledge the law assumes a person has based on publicly recorded information. Any properly recorded document is constructive notice to all subsequent purchasers, even if they never actually checked the records.',
    example: 'The buyer claimed ignorance of the recorded easement, but the court ruled they had constructive notice because the easement was in the public records.',
  },
  'actual notice': {
    definition: 'Direct, personal knowledge of a fact or prior interest. A buyer told "we already sold this property" has actual notice and cannot qualify as a bona fide purchaser without notice.',
    example: 'The buyer\'s attorney told them about the pending sale to another party, giving them actual notice that defeated their claim as a bona fide purchaser.',
  },

  // ── Module 6, Ch1: DPOR Rules & Regulations ───────────────────────────────
  // Note: '18 VAC 135-20' already defined in course-terms.ts (Module 1)

  'advertising standards': {
    definition: 'VREB regulations (18 VAC 135-20-160) requiring all licensee advertising to include the brokerage\'s licensed name, not be deceptive, and comply with Fair Housing. Applies to print, digital, social media, signs, and business cards.',
    example: 'An Instagram post about a listing must include the brokerage\'s licensed name, not just the agent\'s personal name or team name.',
  },
  'team names': {
    definition: 'Virginia regulates real estate team names since 2019. Team names must be registered with the principal broker, cannot imply independent brokerage operation, and all team advertising must include the brokerage name.',
    example: '"The Richmond Dream Team at ABC Realty" is compliant. "The Richmond Dream Team" alone with no brokerage name is a violation.',
  },
  'social media compliance': {
    definition: 'Under VREB regulations, all social media posts about real estate listings or services constitute advertising and must identify the brokerage\'s licensed name on the profile or in the post.',
    example: 'An agent\'s TikTok video touring a listing must include the brokerage name, either in the video, caption, or the agent\'s bio.',
  },
  'sold signs': {
    definition: 'Under MLS rules, only the listing broker may place a "sold" sign on a property. Another agent cannot place sold notification on a property they did not list without the listing broker\'s permission.',
    example: 'The buyer\'s agent wanted to put a "Sold by Jane Doe" rider on the sign, but needed the listing broker\'s permission under MLS rules.',
  },
  'coming soon listings': {
    definition: 'Pre-marketing of a listing before it goes active on the MLS. The seller must have signed the listing agreement, and the listing must transition to active status per the Clear Cooperation Policy timeline.',
    example: 'The "coming soon" status was entered in the MLS per the rules, with the listing set to transition to active within the required timeframe.',
  },
  'lockbox use': {
    definition: 'Sellers must authorize lockbox installation in writing. Access requires a valid MLS key or authorized device. Unauthorized entry is both a VREB violation and potential criminal trespass.',
    example: 'The listing agreement included written seller authorization for lockbox installation, and only agents with valid MLS credentials could access it.',
  },

  // ── Module 6, Ch1: Real Estate Teams ───────────────────────────────────────

  'real estate team': {
    definition: 'Two or more affiliated licensees within the same brokerage who operate under a common team name and market themselves collectively. Regulated by VREB since 2019.',
    example: 'The Johnson Team at XYZ Realty consists of a team leader, two buyer specialists, and a listing coordinator, all licensed under the same brokerage.',
  },
  'team name registration': {
    definition: 'Before using a team name, it must be disclosed to and registered with the principal broker. VREB does not separately register team names with the state; the broker maintains the records.',
    example: 'The team leader registered "The Downtown Group" with the principal broker before using it on any marketing materials.',
  },
  'team leader': {
    definition: 'The experienced agent who founded and coordinates a real estate team. Team leaders are NOT supervisors in the regulatory sense -- only licensed brokers can supervise licensees.',
    example: 'The team leader coordinated work assignments and training, but the principal broker retained ultimate supervisory responsibility for all team members.',
  },
  'team member': {
    definition: 'A licensed agent who works under a team\'s identity within a brokerage. Must be properly licensed. Compensation must flow through the brokerage, not directly from the team leader.',
    example: 'The team member handled buyer showings under the team brand, with all commissions flowing through the brokerage to the agent per their agreement.',
  },
  'supervised licensee': {
    definition: 'Any salesperson or broker working under the supervision of a principal or supervising broker. Team leaders cannot serve as supervisors -- only licensed brokers can fulfill this regulatory role.',
    example: 'Even though the team leader trained the new agent daily, the principal broker was the legally responsible supervisor under VREB regulations.',
  },
  'team advertising': {
    definition: 'All team marketing materials must display both the team name AND the brokerage\'s licensed name. The brokerage name must be "reasonably prominent" -- not hidden in tiny font.',
    example: 'The yard sign read "The Smith Team" in large letters with "ABC Realty" in clearly visible type below -- compliant with VREB team advertising rules.',
  },
  'brokerage name requirement': {
    definition: 'The VREB rule that every advertisement by any licensee must include the brokerage\'s licensed name. This applies to all marketing: signs, cards, social media, websites, videos, and mailers.',
    example: 'The agent\'s Facebook profile, email signature, and business cards all displayed the brokerage\'s licensed name as required by Virginia regulations.',
  },

  // ── Module 6, Ch1: Property Management Under DPOR ──────────────────────────

  'property management agreement requirement': {
    definition: 'VREB regulation (18 VAC 135-20) requiring a written property management agreement with each owner-client before managing their property. A handshake or email exchange is not sufficient.',
    example: 'The broker drafted a written property management agreement specifying the management fee, authority limits, trust account handling, and termination provisions before taking on the new client.',
  },
  'rental activity without license': {
    definition: 'Managing rental properties on behalf of owners for compensation without a Virginia real estate broker license (or working under one) is a DPOR violation. Narrow exemptions apply for on-site managers and owners.',
    example: 'An unlicensed individual advertising property management services and collecting management fees from multiple owners was cited by DPOR for unlicensed activity.',
  },
  'on-site manager exemption': {
    definition: 'A licensing exemption for a resident property manager who lives at the complex they manage and is compensated primarily through free or reduced rent (not commissions). A narrow exception with strict requirements.',
    example: 'The apartment resident manager living in Unit 1A who handles leasing and tenant issues in exchange for free rent qualifies for the on-site manager exemption.',
  },
  'property management escrow': {
    definition: 'Separate escrow/trust accounts required for property management funds. Security deposits must be held separately from rent proceeds. Funds must be deposited promptly and records retained for 3 years.',
    example: 'The broker maintained three separate accounts: one for sales escrow, one for rental income, and one exclusively for security deposits as required by Virginia law.',
  },
  'owner accounting reports': {
    definition: 'Monthly financial statements brokers must provide to property owners showing rent received, management fees, maintenance expenses, and net disbursement. Delays in distributing funds can constitute conversion.',
    example: 'The monthly owner accounting report showed $1,800 rent collected, $180 management fee, $450 repairs, and $1,170 disbursed to the owner.',
  },

  // ── Module 6, Ch2: Virginia Contract Forms ─────────────────────────────────

  'REIN': {
    definition: 'Real Estate Information Network -- the MLS and regional REALTOR association serving the Hampton Roads/Tidewater area. REIN forms include built-in provisions for military contingencies, flood zones, and well/septic.',
    example: 'The Virginia Beach agent used the REIN purchase agreement, which included specific provisions for the AICUZ noise zone and flood insurance contingency.',
  },
  'NVAR': {
    definition: 'Northern Virginia Association of REALTORS -- the regional association whose forms are used in Fairfax, Arlington, Alexandria, Loudoun, Prince William, and surrounding jurisdictions.',
    example: 'The Fairfax County agent used the NVAR purchase agreement, which features streamlined offer packages designed for competitive multiple-offer situations.',
  },
  'CVRMLS': {
    definition: 'Central Virginia Regional MLS -- the MLS system serving the Richmond metro area. Uses contract forms developed by local REALTOR associations reflecting Richmond-area closing customs.',
    example: 'The Richmond agent entered the listing in the CVRMLS and used the CVR regional purchase agreement form.',
  },
  'standard forms': {
    definition: 'Regional purchase agreement templates developed by Virginia REALTOR associations (REIN, NVAR, CVR). Virginia has no single statewide form; all regional forms share the same legal core based on Virginia statutes.',
    example: 'An agent moving from Hampton Roads to Northern Virginia needs to learn the NVAR standard forms, though the underlying legal requirements are the same.',
  },
  'addenda': {
    definition: 'Supplementary documents attached to the purchase agreement that modify, clarify, or add provisions. Common Virginia addenda include lead paint, financing, inspection, FHA/VA, and HOA disclosures.',
    example: 'The contract package included the purchase agreement plus five addenda: lead paint, home inspection, FHA, HOA disclosure acknowledgment, and financing.',
  },
  'contingency addendum': {
    definition: 'An addendum making the contract contingent on a specific condition, such as the buyer selling their current home, obtaining financing, or the property passing inspection.',
    example: 'The home sale contingency addendum allowed the seller to continue marketing the property and accept other offers with a kick-out clause.',
  },
  'HUD addendum': {
    definition: 'An addendum required for FHA-financed purchases containing the FHA Amendatory Clause (buyer not obligated if appraisal is below purchase price) and other FHA-specific requirements.',
    example: 'The HUD addendum was attached to the FHA buyer\'s contract, confirming the buyer could void the contract if the appraisal came in below the $310,000 purchase price.',
  },
  'VA addendum': {
    definition: 'An addendum required for VA-financed purchases containing the VA Escape Clause (buyer may void if property doesn\'t appraise) and provisions about VA-prohibited buyer fees.',
    example: 'The VA addendum confirmed the veteran buyer could cancel without penalty if the VA appraisal came in below the contract price.',
  },

  // ── Module 6, Ch2: Virginia-Specific Addenda ───────────────────────────────

  'brokerage relationship disclosure': {
    definition: 'A mandatory Virginia disclosure form identifying the brokerage, principal broker, which party the licensee represents, and duties owed. Required before the first substantive discussion.',
    example: 'The agent provided the brokerage relationship disclosure form at the buyer consultation before discussing any specific properties or financial details.',
  },
  'lead paint addendum': {
    definition: 'A federally required addendum for all residential properties built before 1978, disclosing known lead paint, providing records, confirming EPA pamphlet receipt, and granting a 10-day inspection right.',
    example: 'The 1965 colonial required a lead paint addendum signed by the seller, buyer, AND both agents before the contract was fully executed.',
  },
  'flood zone addendum': {
    definition: 'An addendum acknowledging a property\'s FEMA flood zone designation, disclosing estimated flood insurance costs, and sometimes including a contingency if insurance exceeds a threshold.',
    example: 'The flood zone addendum disclosed the property was in Zone AE and estimated annual flood insurance at $2,200, with a contingency allowing the buyer to cancel if the actual cost exceeded $3,000.',
  },
  'home inspection addendum': {
    definition: 'An addendum specifying the home inspection period, process, and buyer options (request repairs, credit, as-is acceptance, or cancellation). Documents the inspection contingency terms.',
    example: 'The home inspection addendum gave the buyer 10 days to complete inspections and 3 days after receiving results to negotiate repairs or cancel.',
  },
  'well and septic addendum': {
    definition: 'An addendum used when a property has a private well and/or septic system, specifying inspection rights, water quality testing requirements, and remedies if systems fail inspection.',
    example: 'The well and septic addendum required a satisfactory flow rate test and water quality analysis within 14 days, with the right to cancel if either failed.',
  },
  'contingency removal': {
    definition: 'The process of formally releasing a contract contingency, typically through a written addendum. A home sale contingency removal gives the buyer a specified window to remove or lose the contract.',
    example: 'When the seller received a competing offer, the original buyer had 72 hours under the kick-out clause to remove their home sale contingency or forfeit the contract.',
  },

  // ── Module 6, Ch2: Virginia Lease Forms ────────────────────────────────────

  'VRLTA-compliant lease': {
    definition: 'A residential lease that meets all requirements of the Virginia Residential Landlord and Tenant Act, including proper identification of parties, rent terms, security deposit limits, and required disclosures.',
    example: 'The property manager used a VRLTA-compliant lease that properly capped the late fee at 10% of monthly rent and limited the security deposit to two months\' rent.',
  },
  'prohibited lease provisions': {
    definition: 'Lease terms that Virginia law (VRLTA 55.1-1204) declares void and unenforceable, including confession of judgment clauses, waivers of habitability, and waivers of security deposit protections.',
    example: 'The lease contained an illegal exculpation clause releasing the landlord from negligence -- this provision is void under Virginia law even if the tenant signed it.',
  },
  'confession of judgment clause': {
    definition: 'A prohibited lease provision authorizing the landlord to appear in court on behalf of the tenant and confess judgment without notice or hearing. Void in Virginia residential leases as a fundamental due process protection.',
    example: 'The confession of judgment clause was struck from the lease as unenforceable under Virginia law, even though the national template included it.',
  },
  'waiver of notice provisions': {
    definition: 'Lease provisions attempting to waive the tenant\'s right to receive proper notice before eviction or other legal action. Void under the VRLTA as non-waivable tenant protections.',
    example: 'The clause stating "tenant waives all rights to notice before eviction" is void under Virginia law. Landlords must follow the statutory 5-day and 30-day notice requirements.',
  },
  'security deposit clause': {
    definition: 'A lease provision specifying the security deposit amount and terms. Under the VRLTA, deposits cannot exceed 2 months\' rent, must be returned within 45 days with itemized deductions, and must accrue interest.',
    example: 'The security deposit clause stated a $2,400 deposit on a $1,200/month unit (exactly the 2-month maximum) with a commitment to return it per VRLTA requirements.',
  },
  'lease addenda': {
    definition: 'Supplementary documents attached to a lease modifying or adding terms, such as pet policies, parking assignments, utility responsibilities, or lead paint disclosures for pre-1978 properties.',
    example: 'The lease included three addenda: a pet addendum ($25/month pet rent), a parking addendum, and the required lead paint disclosure for the 1972-built unit.',
  },

  // ── Module 6, Ch3: Virginia Settlement Agents ──────────────────────────────

  'Virginia Settlement Agent Act': {
    definition: 'Virginia Code 55.1-900 et seq. requiring every person providing residential settlement services to be a licensed attorney, a licensed settlement agent (through the Bureau of Insurance), or a title insurance company.',
    example: 'Under the Virginia Settlement Agent Act, a real estate agent cannot conduct closings -- only licensed settlement agents or attorneys can.',
  },
  'title insurance underwriter': {
    definition: 'A national company (First American, Fidelity, Old Republic, Stewart) that issues title insurance policies. Virginia settlement agents must be authorized agents of at least one underwriter to issue policies.',
    example: 'The title company was an authorized agent of Fidelity National Title, issuing both lender\'s and owner\'s policies under Fidelity\'s underwriting.',
  },
  'ALTA': {
    definition: 'American Land Title Association -- the national trade association that sets standardized title insurance policy forms and settlement statement formats used in Virginia and nationwide.',
    example: 'The owner\'s title insurance policy was issued on the ALTA standard form, providing the buyer with the defined coverages and exclusions.',
  },
  'CLTA': {
    definition: 'California Land Title Association -- a regional title insurance standard. Less relevant in Virginia where ALTA standards are used, but sometimes appears on the exam as a comparison.',
    example: 'Virginia uses ALTA policy forms, not CLTA forms. CLTA standards are primarily used in California.',
  },
  "lender's policy": {
    definition: 'A title insurance policy required by the lender that protects the lender\'s interest. Coverage decreases as the loan is paid down and terminates when the loan is fully repaid.',
    example: 'The lender\'s policy covered the full $300,000 loan amount but will decrease in coverage as the borrower pays down the mortgage balance.',
  },
  "owner's policy": {
    definition: 'An optional title insurance policy protecting the buyer\'s full purchase price interest. Remains in effect as long as the buyer or their heirs own the property. Strongly recommended.',
    example: 'The owner\'s policy covered the full $400,000 purchase price and will protect the buyer against any title defect discovered at any time during ownership.',
  },
  'simultaneous issue rate': {
    definition: 'A significantly discounted title insurance rate when the owner\'s and lender\'s policies are issued together at the same closing. Makes buying both policies more economical than purchasing separately.',
    example: 'The simultaneous issue rate brought the total for both policies to $1,750 versus $2,625 if purchased separately -- a $875 savings.',
  },

  // ── Module 6, Ch3: Virginia Transfer Taxes ─────────────────────────────────

  'grantee tax': {
    definition: 'A Virginia tax imposed on the buyer at closing, typically $0.25 per $100 of the consideration. Some localities add an additional local grantee\'s tax.',
    example: 'On a $380,000 purchase, the buyer\'s grantee tax was $950 ($380,000/100 x $0.25).',
  },
  'congestion relief fee': {
    definition: 'An additional recordation surcharge of $0.40 per $100 imposed in Northern Virginia (Planning District 8) and Hampton Roads (Planning District 23). Significantly increases transfer costs in those regions.',
    example: 'On a $500,000 sale in Fairfax County, the congestion relief fee alone was $2,000 ($500,000/100 x $0.40), on top of all other transfer taxes.',
  },
  'first-time homebuyer exemption': {
    definition: 'While Virginia does not offer a full transfer tax exemption for first-time buyers, VHDA and certain government programs provide rate reductions or credits on qualified affordable housing purchases.',
    example: 'The first-time buyer used a VHDA program that provided a small credit toward transfer taxes on their affordable housing purchase.',
  },
  'agricultural exemption': {
    definition: 'Certain transfers of agricultural land in Virginia may qualify for reduced transfer tax rates or exemptions under specific statutory provisions.',
    example: 'The transfer of the 100-acre farm qualified for the agricultural exemption, reducing the total transfer taxes at closing.',
  },
  'deed of trust tax': {
    definition: 'The recordation tax applied to the recording of a deed of trust (mortgage instrument), calculated at $0.25 per $100 of the loan amount. Paid by the buyer.',
    example: 'Recording the deed of trust on a $320,000 loan cost $800 in recordation tax ($320,000/100 x $0.25).',
  },

  // ── Module 6, Ch3: New Construction ────────────────────────────────────────

  'builder contract': {
    definition: 'A builder-prepared purchase agreement (not the regional REALTOR form) drafted to protect the builder\'s interests. Often includes non-refundable deposits, price escalation clauses, and arbitration requirements.',
    example: 'The builder contract included a $25,000 non-refundable deposit and an arbitration clause, so the buyer\'s agent carefully reviewed every provision before signing.',
  },
  'new home warranty': {
    definition: 'Statutory warranty protection under the Virginia Home Warranty Recovery Act (VHWRA): 1 year for materials/workmanship, 2 years for mechanical systems, and 5 years for structural defects.',
    example: 'When the HVAC failed 18 months after closing, the buyer filed a warranty claim under the VHWRA\'s 2-year mechanical systems warranty.',
  },
  'VHWRA': {
    definition: 'Virginia Home Warranty Recovery Act -- the Virginia statute providing minimum warranty periods on new residential construction: 1 year workmanship, 2 years mechanical, 5 years structural.',
    example: 'The VHWRA required the builder to repair the foundation crack discovered in year 3, as it fell within the 5-year structural warranty period.',
  },
  'warranty of habitability': {
    definition: 'The implied warranty that a newly constructed home is fit for human habitation when delivered. Part of the VHWRA framework for new construction.',
    example: 'The new home was delivered without functioning plumbing, violating the warranty of habitability and requiring the builder to complete repairs before the buyer moved in.',
  },
  'punch list': {
    definition: 'A written list of incomplete items or minor defects identified during the pre-settlement walkthrough of new construction. Should be documented and signed by both buyer and builder.',
    example: 'The punch list included touch-up paint in the hallway, a misaligned cabinet door, and a scratch on the hardwood -- all items the builder committed to completing within 30 days.',
  },
  'pre-settlement walkthrough': {
    definition: 'A final inspection of new construction (typically 1-7 days before closing) where the buyer and agent review completed work with a builder representative and create the punch list.',
    example: 'During the pre-settlement walkthrough, the buyer\'s agent identified 12 punch list items that the builder agreed to complete before or shortly after closing.',
  },
  'deposit protection': {
    definition: 'Measures protecting buyer deposits on new construction. Some builders hold deposits in escrow; Virginia builders must be registered with DPOR\'s Contractor Recovery Fund.',
    example: 'The buyer\'s $30,000 deposit was held in escrow by a third party rather than in the builder\'s operating account, providing deposit protection if the builder became insolvent.',
  },
  'builder incentives': {
    definition: 'Financial incentives offered by builders to buyers, such as closing cost credits, rate buydowns, or free upgrades -- often contingent on using the builder\'s preferred lender.',
    example: 'The builder offered $15,000 in closing cost credits and a 1-point rate buydown, but only if the buyer used the builder\'s affiliated mortgage company.',
  },

  // ── Module 6, Ch4: Continuing Education ────────────────────────────────────

  'continuing education': {
    definition: 'Ongoing education required to maintain a Virginia real estate license. Salespersons and brokers must complete 16 hours every 2 years from DPOR-approved providers.',
    example: 'The agent completed 16 hours of CE before her license renewal date: 3 hours of VREB-mandated topics plus 13 hours of elective real estate courses.',
  },
  '16-hour CE requirement': {
    definition: 'Virginia requires 16 hours of continuing education every 2-year license renewal cycle. Of these, 3 hours must be the VREB-mandated course covering agency, ethics, fair housing, and transactions.',
    example: 'The agent took the mandatory 3-hour VREB course online and completed 13 additional hours through local REALTOR association workshops.',
  },
  'VREB-required topics': {
    definition: 'The mandatory 3-hour CE course (updated annually by VREB) covering agency relationships, ethics, fair housing, and real estate transactions. Cannot be substituted with other CE courses.',
    example: 'The VREB-required topics course covered the latest regulatory changes, updated fair housing interpretations, and new agency disclosure requirements.',
  },
  'license renewal date': {
    definition: 'The date set when a licensee is first licensed, repeating every 2 years. All CE must be completed and the renewal application submitted before this date.',
    example: 'The agent\'s license renewal date was June 15th every two years. She had to complete all 16 CE hours and submit the renewal fee before that date.',
  },
  'grace period': {
    definition: 'Virginia allows a 30-day grace period after license expiration for late renewal with a late fee. After 30 days, reinstatement requires retaking the licensing exam.',
    example: 'The agent missed her renewal by 2 weeks but was able to renew within the 30-day grace period by paying the standard fee plus a late penalty.',
  },
  'late renewal': {
    definition: 'Renewing within 30 days after expiration requires a late fee but not retaking the exam. Between 31 days and 12 months requires retaking the exam. After 12 months, the licensee must start over completely.',
    example: 'The agent who let her license lapse for 6 months had to retake and pass the state exam before her license could be reinstated.',
  },
  'CE provider approval': {
    definition: 'Only DPOR-approved education providers can offer courses that count toward CE requirements. Licensees should verify provider approval on the DPOR website before taking a course.',
    example: 'The online webinar seemed useful, but the agent verified it was DPOR-approved before counting it toward her 16-hour CE requirement.',
  },

  // ── Module 6, Ch4: Post-License Education ──────────────────────────────────

  'post-license education': {
    definition: 'A 30-hour education requirement specific to new Virginia salesperson licensees, separate from pre-license education and the ongoing 16-hour CE renewal requirement.',
    example: 'The newly licensed agent had to complete 30 hours of post-license education within her first year in addition to the regular 16-hour CE for her first renewal.',
  },
  '30-hour requirement': {
    definition: 'New Virginia salesperson licensees must complete 30 hours of post-license education from DPOR-approved providers within the first year of initial licensure. Failure results in automatic inactive status.',
    example: 'The agent completed all 30 hours of PLE by month 10 of her first license year, avoiding the inactive status that would have kicked in at month 12.',
  },
  'first license year': {
    definition: 'The 12-month period from the date of initial license issuance during which new salespersons must complete the 30-hour post-license education requirement.',
    example: 'Licensed on March 1, 2026, the agent\'s first license year ends March 1, 2027. All 30 PLE hours must be completed by that date.',
  },
  'inactive status consequence': {
    definition: 'If a new licensee fails to complete post-license education within the first year, their license is automatically placed on inactive status. They cannot practice until PLE is completed and the license is reactivated.',
    example: 'The agent missed her PLE deadline and her license went inactive. She could not list properties or show homes until she completed the remaining hours and reactivated.',
  },
  'VREB-approved school': {
    definition: 'An educational institution approved by the Virginia Real Estate Board to offer pre-license, post-license, and continuing education courses. Must be listed in DPOR\'s approved provider database.',
    example: 'The agent confirmed the online school was VREB-approved before enrolling in the 30-hour post-license education program.',
  },
  'course completion': {
    definition: 'The successful finishing of required education hours, reported by the provider to DPOR\'s electronic system. Licensees should verify their hours are reflected in their DPOR account.',
    example: 'After finishing the PLE course, the agent logged into her DPOR account to confirm the provider had reported her 30 hours of course completion.',
  },

  // ── Module 5, Ch5: Property Management ────────────────────────────────────

  'trust account (property management)': {
    definition: 'A separate bank account at a federally insured depository in Virginia where the property manager deposits all funds received on behalf of the owner, including rent payments, security deposits, and application fees. Funds must never be commingled with the broker\'s operating or personal funds.',
    example: 'The property manager deposited the $2,400 rent check into the trust account by end of the next business day, then disbursed the owner\'s share minus the management fee per the agreement.',
  },
  'rent roll': {
    definition: 'A detailed listing of every unit in a managed property showing tenant name, unit number, lease dates, monthly rent amount, security deposit held, and current payment status. Used by lenders, appraisers, and owners to evaluate property income and occupancy.',
    example: 'The lender required a current rent roll showing 95% occupancy and $24,000 in monthly gross rent before approving the refinance on the 20-unit apartment building.',
  },
  'maintenance reserve fund': {
    definition: 'Money set aside from operating income to cover major repairs and capital expenditures such as roof replacement, HVAC systems, or parking lot resurfacing. Typically 5-15% of gross rent depending on property age and condition. Also called a capital reserve or replacement reserve.',
    example: 'The property manager allocated 10% of monthly gross rent into the maintenance reserve fund, building up $18,000 over two years to cover the anticipated HVAC replacement.',
  },
  'property condition assessment': {
    definition: 'A systematic inspection and written report on the physical condition of a property, identifying deferred maintenance, needed repairs, and projected capital expenditures over a 5-10 year horizon. Used for budgeting, insurance documentation, and liability protection.',
    example: 'The annual property condition assessment revealed the roof had 3-5 years of remaining useful life, allowing the manager to budget $45,000 in the reserve fund for replacement.',
  },
  'tenant screening': {
    definition: 'The process of evaluating prospective tenants using consistent, objective criteria including credit history, income verification, rental history, and background checks. Must comply with Fair Housing laws (federal and Virginia), including Virginia\'s source-of-funds protection. Adverse action notices are required under the Fair Credit Reporting Act when denying based on a consumer report.',
    example: 'The property manager applied the same screening criteria to every applicant: minimum 620 credit score, income at least 3x monthly rent, and no eviction history within the past 5 years.',
  },
  'capital expenditure vs operating expense': {
    definition: 'Capital expenditures (CapEx) are major improvements that extend a property\'s useful life or add value (e.g., roof replacement, new HVAC system) and are depreciated over time. Operating expenses are routine, recurring costs to maintain the property (e.g., pest control, minor repairs, repainting) and are deducted from income in the year incurred.',
    example: 'The $12,000 roof replacement was classified as a capital expenditure and depreciated over 27.5 years, while the $300 gutter cleaning was an operating expense deducted in the current year.',
  },
  'Virginia Transaction Recovery Fund': {
    definition: 'Fund maintained by DPOR that compensates consumers who obtain a final court judgment against a Virginia licensee for fraud, misrepresentation, or conversion. Maximum payout: $20,000 per claimant, $50,000 per transaction. Fund minimum balance: $400,000. New licensees contribute $20. Payout triggers automatic license revocation until repaid with interest.',
    example: 'After a property manager was found to have converted $15,000 in tenant security deposits, the affected tenants obtained a court judgment and collected from the Transaction Recovery Fund when the manager had no assets.',
  },

  // ── Module 6, Ch5: Common Interest Communities ────────────────────────────

  'common interest community (CIC)': {
    definition: 'A real estate development where individual owners share ownership of, or financial responsibility for, common areas, amenities, or services managed by an owners\' association. Virginia recognizes three primary types: condominiums, cooperatives, and planned unit developments (PUDs).',
    example: 'A 200-unit townhome community with shared streets, a pool, and a clubhouse maintained by a mandatory HOA is a common interest community under Virginia law.',
  },
  'Virginia Common Interest Community Board': {
    definition: 'A regulatory board within DPOR responsible for licensing CIC managers, registering common interest communities, investigating complaints against CIC managers and associations, and administering the CIC Manager Guarantee Fund.',
    example: 'A homeowner filed a complaint with the Virginia Common Interest Community Board after the licensed CIC manager failed to produce the association\'s financial records upon request.',
  },
  'Property Owners Association Act (POAA)': {
    definition: 'The Virginia statute (Title 55.1, Chapter 18) governing planned unit developments, homeowners associations, and other planned communities. Establishes resale disclosure packet requirements, assessment authority, owner rights, and dispute resolution procedures for non-condominium CICs.',
    example: 'Under the POAA, the HOA was required to provide a resale disclosure packet to the buyer, who then had 3 calendar days to cancel the contract after receiving it.',
  },
  'resale disclosure packet': {
    definition: 'A mandatory document package that sellers in Virginia CICs must provide to buyers before settlement. Must include governing documents, financial statements, assessment information, reserve study, insurance coverage, pending litigation, and more. The buyer has 3 calendar days to cancel after receipt; this right cannot be waived.',
    example: 'The seller ordered the resale disclosure packet from the HOA management company for $250. The buyer reviewed it and discovered a $50,000 special assessment was planned for the following year.',
  },
  'reserve study': {
    definition: 'A professional analysis of a CIC\'s common area components, their expected useful life, and the funding needed to replace them. Under the POAA, associations with annual assessments of $10,000 or more must conduct a reserve study at least once every 5 years.',
    example: 'The reserve study revealed the community pool needed $120,000 in renovations within 3 years, but the reserve fund only had $40,000, indicating a significant funding shortfall.',
  },
  'common elements': {
    definition: 'The portions of a condominium that are owned collectively by all unit owners as tenants in common. Includes structural components, hallways, lobbies, elevators, parking areas, pools, and the land beneath the building. Each unit owner holds an undivided percentage interest.',
    example: 'The roof, exterior walls, and lobby of the condominium building are common elements maintained by the association using assessment funds collected from all unit owners.',
  },
  'limited common elements': {
    definition: 'Portions of a condominium\'s common elements reserved for the exclusive use of one or more (but not all) unit owners. The unit owner does not own them outright but has exclusive use rights as defined in the condominium instruments.',
    example: 'The assigned parking space and balcony attached to unit 304 are limited common elements -- shared ownership, but only the owner of unit 304 has the right to use them.',
  },
  'association assessment': {
    definition: 'A periodic charge (monthly, quarterly, or annual) levied on each unit owner by the CIC association to fund common area maintenance, insurance, reserves, and other shared expenses. Unpaid assessments create an automatic lien against the unit in Virginia.',
    example: 'The monthly association assessment of $350 covered landscaping, pool maintenance, building insurance, and a contribution to the reserve fund for future capital repairs.',
  },
  'declarant rights': {
    definition: 'Special powers retained by the developer (declarant) of a CIC during the initial development period. Typically include the right to control the board, add phases to the development, modify the declaration, and approve architectural changes. These rights expire according to the declaration terms or by operation of law.',
    example: 'The developer retained declarant rights for 5 years, during which he controlled the HOA board, added two additional phases to the community, and made modifications to the original site plan.',
  },
  'architectural review board': {
    definition: 'A committee within a CIC association that reviews and approves or denies proposed modifications to individual units and lots to ensure compliance with community design standards. Must apply standards consistently and cannot make arbitrary or discriminatory decisions. Owners denied approval may appeal to the full board of directors.',
    example: 'The homeowner submitted a fence application to the architectural review board, which approved the request after confirming the proposed materials and height matched the community\'s design guidelines.',
  },
}
