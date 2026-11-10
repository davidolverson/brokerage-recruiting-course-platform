// Key term definitions for Modules 9-10
// Will be merged into course-terms.ts

export interface TermDefinition {
  definition: string
  example?: string
}

export const MOD910_TERMS: Record<string, TermDefinition> = {
  // ── Module 9, Ch1: Government-Backed Loans ─────────────────────────────────

  'FHA': {
    definition: 'The Federal Housing Administration, a division of HUD that insures mortgage loans made by approved private lenders, allowing lower credit scores and down payments as low as 3.5%.',
    example: 'A Richmond buyer with a 620 credit score qualifies for an FHA loan on a $280,000 townhome with only $9,800 down.',
  },
  'Federal Housing Administration': {
    definition: 'The federal agency, now part of HUD, that insures FHA mortgages against default so lenders can offer lower down payments and more flexible credit standards.',
    example: 'The Federal Housing Administration sets the minimum property standards the home must meet before an FHA loan can close.',
  },
  'mortgage insurance premium': {
    definition: 'The insurance premium an FHA borrower pays to protect the lender against loss if the loan defaults, charged both upfront and annually.',
    example: 'On a $250,000 FHA loan, the buyer finances a 1.75% upfront mortgage insurance premium and pays an annual MIP split across monthly payments.',
  },
  'UFMIP': {
    definition: 'The Upfront Mortgage Insurance Premium on an FHA loan, currently 1.75% of the loan amount, usually financed into the loan balance at closing.',
    example: 'A $300,000 FHA loan adds $5,250 in UFMIP to the financed balance, bringing the total loan to $305,250.',
  },
  'annual MIP': {
    definition: 'The yearly FHA mortgage insurance premium, collected in monthly installments, that remains for the life of the loan when the down payment is less than 10%.',
    example: 'A buyer putting 3.5% down on an FHA loan pays annual MIP every month until they refinance out of the loan.',
  },
  'FHA loan limits': {
    definition: 'The maximum loan amount HUD will insure in a given county, set annually based on local median home prices and property type.',
    example: 'FHA loan limits in high-cost Loudoun County are significantly higher than in rural Virginia counties because of median home prices.',
  },
  'assumable mortgage': {
    definition: 'A loan that a qualified buyer can take over from the seller under the original terms, keeping the existing rate. FHA and VA loans are generally assumable with lender approval.',
    example: 'A seller with a 3% FHA assumable mortgage attracts a buyer willing to pay above market because the buyer saves thousands in interest.',
  },
  'HUD': {
    definition: 'The U.S. Department of Housing and Urban Development, the federal agency that oversees FHA insurance, fair housing enforcement, and federal rental assistance programs.',
    example: 'HUD publishes annual FHA loan limits and income thresholds for various assistance programs.',
  },
  'minimum property standards': {
    definition: 'HUD health, safety, and structural requirements a home must meet to qualify for FHA financing, verified during the FHA appraisal.',
    example: 'An FHA appraiser flagged peeling paint on a pre-1978 Petersburg home as a minimum property standards issue that had to be repaired before closing.',
  },
  'FHA 203(b)': {
    definition: 'The standard FHA single-family mortgage insurance program used to purchase or refinance one-to-four-unit primary residences.',
    example: 'Most first-time buyers using FHA financing in Virginia use the FHA 203(b) program for their primary residence purchase.',
  },

  'VA loan': {
    definition: 'A mortgage guaranteed by the Department of Veterans Affairs for eligible veterans, active-duty servicemembers, and surviving spouses, offering 0% down and no monthly mortgage insurance.',
    example: 'A Fort Gregg-Adams soldier buys a $425,000 Chesterfield home with zero down using a VA loan.',
  },
  'Certificate of Eligibility': {
    definition: 'The VA document (COE) that confirms a borrower qualifies for VA home loan benefits based on length and character of service.',
    example: 'The lender pulls the Certificate of Eligibility electronically through WebLGY before issuing a VA pre-approval.',
  },
  'entitlement': {
    definition: 'The dollar amount the VA will guarantee on a veteran\'s loan. Full entitlement lets qualified buyers purchase above conforming limits with no down payment.',
    example: 'A veteran with full entitlement purchases a $700,000 home in Virginia Beach with $0 down because the VA guaranty covers the lender\'s risk.',
  },
  'funding fee': {
    definition: 'The one-time fee paid to the VA on most VA loans, calculated as a percentage of the loan amount, that funds the program in place of monthly mortgage insurance.',
    example: 'A first-time VA buyer putting nothing down pays a 2.15% funding fee that can be financed into the loan.',
  },
  'VA appraisal': {
    definition: 'A property valuation performed by a VA-assigned appraiser that establishes market value and confirms Minimum Property Requirements are met.',
    example: 'The VA appraisal came in $10,000 under contract price, so the buyer and seller renegotiated under the VA amendatory clause.',
  },
  'Minimum Property Requirements': {
    definition: 'The VA\'s property condition standards (MPRs) covering safety, sanitation, and structural soundness that must be satisfied before a VA loan will close.',
    example: 'A missing handrail on an exterior stairway was flagged as a Minimum Property Requirements issue and had to be installed prior to closing.',
  },
  'no PMI': {
    definition: 'A feature of VA loans and some conventional programs where the borrower is not charged monthly private mortgage insurance, even at 100% financing.',
    example: 'The veteran\'s monthly payment is several hundred dollars lower than a comparable conventional buyer because VA loans carry no PMI.',
  },
  'VA loan guaranty': {
    definition: 'The VA\'s promise to reimburse the lender for a portion of losses if the loan defaults, which is what allows zero-down VA financing.',
    example: 'The 25% VA loan guaranty on a $400,000 loan protects the lender against the first $100,000 of loss.',
  },
  'surviving spouse': {
    definition: 'The unmarried spouse of a servicemember who died in service or from a service-connected disability, generally eligible for VA loan benefits.',
    example: 'A surviving spouse of a veteran killed in action qualifies for VA loan benefits with the funding fee waived.',
  },
  'full entitlement': {
    definition: 'The maximum VA guaranty available when a veteran has no active VA loan and has never defaulted on a prior VA loan, allowing 0% down above conforming limits.',
    example: 'Because the veteran sold and paid off her prior VA loan, she restored full entitlement for her next purchase.',
  },

  'USDA loan': {
    definition: 'A mortgage backed by the U.S. Department of Agriculture\'s Rural Development program for low-to-moderate-income buyers in eligible rural areas, offering 100% financing.',
    example: 'A family earning under 115% of area median income buys a home in Powhatan County with $0 down using a USDA loan.',
  },
  'Rural Development': {
    definition: 'The USDA office (RD) that administers rural housing programs including guaranteed and direct single-family mortgage loans.',
    example: 'Rural Development publishes the eligibility maps and income limits used to qualify USDA borrowers.',
  },
  'Section 502': {
    definition: 'The USDA Rural Development program that provides single-family housing loans, available as both a guaranteed loan (through lenders) and a direct loan (from USDA).',
    example: 'A very-low-income borrower who cannot qualify through a bank may receive a Section 502 Direct Loan straight from the USDA.',
  },
  'guaranteed loan': {
    definition: 'A USDA loan made by an approved private lender and guaranteed against default by the USDA, which is the most common USDA loan type.',
    example: 'The buyer applied for a USDA guaranteed loan through a local Virginia credit union rather than a direct loan from USDA.',
  },
  'direct loan': {
    definition: 'A USDA loan funded directly by Rural Development for very-low and low-income borrowers, often with payment subsidies.',
    example: 'A single parent earning 45% of area median income qualified for a USDA direct loan with a subsidized interest rate as low as 1%.',
  },
  'USDA eligibility map': {
    definition: 'The online map published by USDA that shows which specific addresses fall inside eligible rural areas for USDA home loan programs.',
    example: 'Before writing the offer, the agent checks the USDA eligibility map and confirms the Goochland address is in the eligible zone.',
  },
  'income limits': {
    definition: 'The maximum household income allowed to qualify for a program such as USDA or VHDA, set by area and household size.',
    example: 'A four-person household in Richmond must stay under the published USDA income limits to qualify for the guaranteed loan.',
  },
  'guarantee fee': {
    definition: 'The upfront USDA fee (currently 1%) financed into the loan at closing that funds the USDA loan guaranty program.',
    example: 'A $250,000 USDA loan includes a $2,500 guarantee fee rolled into the loan balance.',
  },
  'annual fee': {
    definition: 'The ongoing USDA fee (currently 0.35%) charged annually and collected monthly in place of traditional mortgage insurance.',
    example: 'The USDA annual fee on a $240,000 loan adds about $70 per month to the payment.',
  },
  'rural area': {
    definition: 'A geographic area designated by USDA (generally under 35,000 in population) that qualifies for Rural Development housing programs.',
    example: 'Many parts of New Kent and Hanover counties qualify as a rural area under USDA guidelines despite being within commuting distance of Richmond.',
  },

  'VHDA': {
    definition: 'Virginia Housing (formerly the Virginia Housing Development Authority), the state agency offering first-time buyer mortgages, down payment assistance, and mortgage credit certificates.',
    example: 'A Richmond buyer used a VHDA FHA Plus loan to combine an FHA first mortgage with a second-lien down payment assistance grant.',
  },
  'Virginia Housing Development Authority': {
    definition: 'The legal name for Virginia Housing, the state\'s housing finance agency that administers affordable mortgage and down payment programs for Virginia residents.',
    example: 'The Virginia Housing Development Authority partners with approved lenders to originate VHDA-backed loans.',
  },
  'down payment assistance': {
    definition: 'A grant or second-lien loan that covers part or all of a buyer\'s down payment and sometimes closing costs, often from a state housing agency.',
    example: 'The VHDA down payment assistance grant covered the buyer\'s entire 3.5% FHA down payment.',
  },
  'DPA grant': {
    definition: 'Down payment assistance provided as a true grant (not repaid) when program conditions are met, used to reduce the cash a buyer needs at closing.',
    example: 'Because the buyer stayed in the home and kept the loan for the required period, the DPA grant never had to be repaid.',
  },
  'FHA Plus': {
    definition: 'A VHDA loan program that pairs an FHA first mortgage with a VHDA second mortgage or grant to cover down payment and closing costs.',
    example: 'A first-time Henrico buyer with limited savings used FHA Plus to finance the down payment through a VHDA second lien.',
  },
  'VHDA conventional': {
    definition: 'A VHDA conventional mortgage program featuring reduced mortgage insurance for eligible first-time buyers meeting income and purchase price limits.',
    example: 'A dual-income couple chose a VHDA conventional loan over a standard FHA because the reduced MI saved them money monthly.',
  },
  'Mortgage Credit Certificate': {
    definition: 'A VHDA-issued federal tax credit (MCC) for eligible first-time buyers, allowing them to claim a percentage of annual mortgage interest as a tax credit.',
    example: 'The Mortgage Credit Certificate gives a qualifying buyer a 10% federal tax credit on annual mortgage interest, improving qualifying income.',
  },
  'MCC': {
    definition: 'Shorthand for Mortgage Credit Certificate, a dollar-for-dollar federal income tax credit offered by Virginia Housing to qualified first-time buyers.',
    example: 'The MCC let the buyer reduce their federal tax bill by roughly $2,000 in the first year of the mortgage.',
  },
  'first-time homebuyer': {
    definition: 'Under most programs, a buyer who has not owned a principal residence in the prior three years; used to qualify for VHDA and many DPA programs.',
    example: 'Even though the buyer owned a home years ago, she still qualified as a first-time homebuyer under VHDA\'s three-year rule.',
  },

  // ── Module 9, Ch2: Creative & Alternative Financing ───────────────────────

  'seller financing': {
    definition: 'A transaction where the seller acts as the lender, accepting a note and deed of trust from the buyer rather than receiving all cash at closing.',
    example: 'A retired investor sells a Richmond rental through seller financing, holding a 6% note for 10 years instead of taking all cash.',
  },
  'purchase money mortgage': {
    definition: 'A mortgage or deed of trust given by the buyer back to the seller as part of the purchase price, creating an owner-financed loan.',
    example: 'The seller agreed to a $50,000 purchase money mortgage so the buyer could close despite falling short on down payment.',
  },
  'contract for deed': {
    definition: 'An installment sale in which the seller retains legal title while the buyer takes possession and pays monthly until the balance is paid off, at which point the deed transfers.',
    example: 'A buyer with damaged credit signs a contract for deed and will receive the deed after five years of on-time payments.',
  },
  'land contract': {
    definition: 'Another name for a contract for deed, an installment sale where the seller keeps legal title and the buyer holds equitable title until full payoff.',
    example: 'The Virginia land contract required the buyer to pay taxes and insurance while the seller remained on the deed.',
  },
  'installment sale': {
    definition: 'A sale in which the seller receives the purchase price in multiple payments over time, which can spread capital gains tax recognition across years.',
    example: 'Structuring the rural land sale as an installment sale let the seller recognize gain over five tax years instead of all at once.',
  },
  'equitable title': {
    definition: 'The right to obtain legal ownership of a property once conditions (such as full payment) are met; held by the buyer under a contract for deed.',
    example: 'Under the land contract, the buyer holds equitable title, which gives them insurable interest and possession rights.',
  },
  'legal title': {
    definition: 'Actual recorded ownership of real property as reflected on the deed in the land records.',
    example: 'The seller retained legal title during the installment period and only transferred the deed after final payment.',
  },
  'balloon payment': {
    definition: 'A large lump-sum payment due at the end of a loan term that pays off the remaining balance after smaller periodic payments.',
    example: 'A seller-financed loan amortized over 30 years with a five-year balloon payment forces the buyer to refinance or pay off the note in year five.',
  },
  'Dodd-Frank': {
    definition: 'The 2010 federal law that, among other things, limits how often non-institutional sellers can offer owner financing on residential property and imposes ability-to-repay rules.',
    example: 'A seller financing more than three residential properties in a year may trigger Dodd-Frank licensing and ability-to-repay requirements.',
  },
  'default': {
    definition: 'The failure to meet a legal obligation under a loan or contract, typically missing payments or violating other terms, which can trigger foreclosure or contract termination.',
    example: 'When the buyer missed three consecutive payments, the seller declared default and began forfeiture proceedings under the contract for deed.',
  },

  'lease-option': {
    definition: 'A lease that gives the tenant an exclusive right (but not an obligation) to purchase the property at a pre-agreed price during a set option period.',
    example: 'The tenant paid $5,000 in option consideration for a two-year lease-option at a locked-in $325,000 purchase price.',
  },
  'lease-purchase': {
    definition: 'A lease coupled with a binding contract requiring the tenant to purchase the property by a specified date, unlike a lease-option which is optional.',
    example: 'The lease-purchase agreement obligates the tenant to close on the home within 18 months, not just giving them the right to buy.',
  },
  'option consideration': {
    definition: 'The non-refundable money a tenant pays for the right (but not obligation) to purchase a property in a lease-option, typically credited toward the purchase if exercised.',
    example: 'The buyer forfeited her $4,000 option consideration when she chose not to purchase the home at the end of the option period.',
  },
  'rent credit': {
    definition: 'A portion of monthly rent applied toward the purchase price if the tenant exercises the option to buy in a lease-option arrangement.',
    example: 'A $300 monthly rent credit across 24 months reduced the purchase price by $7,200 when the tenant exercised the option.',
  },
  'option period': {
    definition: 'The defined timeframe during which a tenant in a lease-option can exercise the right to purchase the property at the agreed-upon terms.',
    example: 'The option period ran for 36 months, after which the tenant\'s right to buy at the locked-in price expired.',
  },
  'equitable interest': {
    definition: 'A recognizable ownership-like interest in property held by someone who is not the legal titleholder, such as a lease-option tenant or contract-for-deed buyer.',
    example: 'Because the tenant had paid significant option consideration, a court found she had equitable interest in the property.',
  },
  'lease term': {
    definition: 'The duration of the underlying lease in a lease-option or lease-purchase, during which the tenant occupies and pays rent.',
    example: 'The lease term ran for two years, and the option to purchase had to be exercised before the final month.',
  },
  'purchase price lock': {
    definition: 'A provision in a lease-option fixing the home\'s future purchase price, protecting the tenant if values rise during the option period.',
    example: 'The purchase price lock at $340,000 saved the tenant $25,000 when the home appraised for $365,000 at exercise.',
  },
  'option expiration': {
    definition: 'The date after which a lease-option tenant loses the right to purchase the property at the agreed terms.',
    example: 'The tenant forfeited her option consideration at option expiration because financing wasn\'t ready in time.',
  },

  'bridge loan': {
    definition: 'A short-term loan used to "bridge" the gap between buying a new home and selling an existing one, typically secured by the current property.',
    example: 'A move-up buyer in Short Pump used a bridge loan to make a non-contingent offer on the new home while her current house was still listed.',
  },
  'swing loan': {
    definition: 'Another name for a bridge loan, providing short-term financing until permanent financing or a sale closes.',
    example: 'The swing loan covered the down payment on the new home for 90 days until the old home sold.',
  },
  'blanket mortgage': {
    definition: 'A single mortgage secured by two or more properties, commonly used by developers and investors with multiple parcels.',
    example: 'A subdivision developer uses a blanket mortgage to finance ten lots, releasing individual lots as they sell.',
  },
  'partial release clause': {
    definition: 'A clause in a blanket mortgage that allows specific parcels to be released from the lien upon payment of a scheduled amount.',
    example: 'The partial release clause required $20,000 to be applied to principal before any lot could be released free and clear.',
  },
  'wraparound mortgage': {
    definition: 'A form of seller financing where a new loan from the seller "wraps around" an existing underlying mortgage, which the seller continues to pay.',
    example: 'The wraparound mortgage combined the seller\'s existing 4% loan with an additional $60,000 seller loan at 7%.',
  },
  'all-inclusive deed of trust': {
    definition: 'Another term for a wraparound mortgage, secured by a deed of trust covering both the underlying debt and the new seller-financed portion.',
    example: 'The all-inclusive deed of trust is recorded in second position behind the existing first lien.',
  },
  'underlying mortgage': {
    definition: 'The original senior mortgage that remains in place when a wraparound mortgage is written on top of it.',
    example: 'The seller kept paying the underlying mortgage from the monthly payments he received on the wrap.',
  },
  'due-on-sale clause': {
    definition: 'A lender\'s contractual right to demand full repayment when the property is sold or title transferred, which can be triggered by wraparounds.',
    example: 'The wraparound risked the due-on-sale clause being called if the lender discovered the transfer of title.',
  },
  'gap financing': {
    definition: 'Short-term financing that covers a gap between available funds and the amount needed to close a deal, often used alongside bridge loans.',
    example: 'A developer secured gap financing to cover soft costs between construction draws.',
  },
  'short-term financing': {
    definition: 'Financing with a short maturity (often under 36 months) used for transitional purposes such as acquisition, renovation, or bridging.',
    example: 'The investor used short-term financing to buy and rehab a Highland Park fixer-upper before refinancing into a 30-year loan.',
  },

  // ── Module 9, Ch3: Real Estate Taxation ────────────────────────────────────

  'ad valorem tax': {
    definition: 'A tax "according to value" levied on real property based on assessed value, which is how Virginia localities fund real estate taxes.',
    example: 'Chesterfield County charges an ad valorem real estate tax based on the assessor\'s annual valuation of each parcel.',
  },
  'assessed value': {
    definition: 'The value a local assessor places on a property for tax purposes, which may differ from fair market value but is generally a percentage of it in Virginia.',
    example: 'The home\'s assessed value of $310,000 produced an annual tax bill of about $3,224 at Henrico\'s tax rate.',
  },
  'fair market value': {
    definition: 'The price a willing buyer would pay a willing seller in an open market, neither under duress; Virginia assessments are intended to approach fair market value.',
    example: 'Although the home sold for $400,000, the prior year\'s assessed value lagged actual fair market value by about 8%.',
  },
  'equalization': {
    definition: 'The administrative adjustment of assessed values to ensure uniformity among similar properties in a taxing jurisdiction.',
    example: 'After equalization, over-assessed homes in one neighborhood were reduced to match the assessment-to-sales ratio elsewhere in the county.',
  },
  'tax rate': {
    definition: 'The rate (commonly expressed in dollars per $100 of assessed value in Virginia) applied to the assessed value to calculate annual real estate tax.',
    example: 'At a tax rate of $0.85 per $100 of assessed value, a $350,000 home owes $2,975 in annual real estate tax.',
  },
  'millage rate': {
    definition: 'A tax rate expressed in mills (one-thousandths of a dollar per dollar of assessed value); an alternative to Virginia\'s common per-$100 format.',
    example: 'A millage rate of 10 mills equals $10 per $1,000 of assessed value, which is the same as $1 per $100.',
  },
  'Board of Equalization': {
    definition: 'A local board of citizens that hears property assessment appeals in Virginia after the owner first challenges the assessor.',
    example: 'The homeowner appealed to the Board of Equalization after the assessor refused to lower his assessment following general reassessment.',
  },
  'real property tax exemption': {
    definition: 'A full or partial exemption from real estate tax for qualifying properties, such as those owned by disabled veterans, seniors, or certain nonprofits under Virginia law.',
    example: 'A 100% service-connected disabled veteran qualifies for a full real property tax exemption on his Virginia primary residence.',
  },
  'land use assessment': {
    definition: 'A Virginia program allowing qualifying agricultural, forestal, horticultural, or open-space land to be taxed on its use value rather than fair market value.',
    example: 'A Hanover farmer enrolled his acreage in land use assessment, cutting his annual real estate tax substantially.',
  },
  'tax lien': {
    definition: 'A statutory lien attaching to real property for unpaid real estate taxes, which takes priority over most other liens and can lead to a tax sale.',
    example: 'An unpaid tax lien survived the foreclosure sale and had to be paid before the new owner received clear title.',
  },

  'capital gains tax': {
    definition: 'The federal (and sometimes state) tax on the profit from the sale of a capital asset such as real estate, with long-term gains generally taxed at preferential rates.',
    example: 'An investor selling a rental property after five years pays long-term capital gains tax on the appreciation above her adjusted basis.',
  },
  'Section 121 exclusion': {
    definition: 'The IRS primary residence exclusion that allows single sellers to exclude up to $250,000 of gain ($500,000 for married filing jointly) when they meet ownership and use tests.',
    example: 'A married couple sold their Midlothian home and excluded $400,000 in gain under the Section 121 exclusion.',
  },
  'primary residence exclusion': {
    definition: 'Another name for the Section 121 exclusion applying to the sale of a home that the owner used as a principal residence.',
    example: 'The primary residence exclusion shielded the entire $180,000 profit on the couple\'s longtime Richmond home from federal tax.',
  },
  'ownership test': {
    definition: 'The Section 121 requirement that the seller owned the home for at least two of the five years prior to sale.',
    example: 'Because she only owned the property for 18 months, the seller failed the ownership test and could not claim the full exclusion.',
  },
  'use test': {
    definition: 'The Section 121 requirement that the seller used the home as a principal residence for at least two of the five years prior to sale.',
    example: 'The seller had rented the property for three of the past five years, so he failed the use test for the full exclusion.',
  },
  'adjusted basis': {
    definition: 'The original cost of a property plus capital improvements and certain acquisition costs, minus depreciation taken, used to calculate capital gain.',
    example: 'After $40,000 of kitchen and HVAC improvements, the homeowner\'s adjusted basis rose from $250,000 to $290,000.',
  },
  'cost basis': {
    definition: 'The original purchase price of a property, including acquisition costs, before adjustments for improvements or depreciation.',
    example: 'The buyer\'s cost basis was $320,000, the price paid plus $5,000 in qualifying closing costs.',
  },
  'capital improvements': {
    definition: 'Permanent additions or upgrades that add value, prolong useful life, or adapt the property to new uses, and are added to basis rather than deducted as expenses.',
    example: 'Replacing the roof and adding a deck are capital improvements that increase the home\'s adjusted basis.',
  },
  'depreciation recapture': {
    definition: 'The IRS rule requiring that previously deducted depreciation on investment property be taxed (up to 25%) when the property is sold at a gain.',
    example: 'On sale of the rental, $30,000 of prior depreciation was subject to depreciation recapture at a maximum 25% rate.',
  },
  'short-term vs long-term capital gains': {
    definition: 'Gains on assets held one year or less are short-term (taxed at ordinary rates); gains on assets held more than one year are long-term (taxed at preferential rates).',
    example: 'Flipping the Fan District rowhouse in six months produced short-term capital gains taxed at ordinary income rates instead of long-term rates.',
  },

  '1031 exchange': {
    definition: 'A like-kind exchange under IRC Section 1031 that defers capital gains tax when investment or business real estate is swapped for other qualifying real estate.',
    example: 'An investor used a 1031 exchange to roll proceeds from a Richmond duplex into a larger Virginia Beach fourplex without triggering capital gains.',
  },
  'like-kind exchange': {
    definition: 'An IRS-qualifying swap of real property held for investment or business use for other real property of like kind, which preserves tax deferral under Section 1031.',
    example: 'Exchanging raw land for an apartment building is treated as a like-kind exchange because both are real property held for investment.',
  },
  'qualified intermediary': {
    definition: 'An independent third party (QI) who holds exchange funds and handles paperwork to keep a 1031 exchange compliant; the taxpayer cannot touch the money.',
    example: 'The qualified intermediary held $400,000 in exchange proceeds until the investor closed on the replacement property.',
  },
  'boot': {
    definition: 'Non-like-kind value received in an exchange, such as cash or debt relief, which is taxable in the year of the exchange to the extent received.',
    example: 'The investor received $25,000 in cash at closing, which counted as boot and was taxable despite the rest of the 1031 exchange being deferred.',
  },
  'identification period': {
    definition: 'The 45-day window after the sale of the relinquished property in which the taxpayer must formally identify potential replacement properties.',
    example: 'The investor identified three replacement properties on day 40 of the identification period to preserve his 1031 deferral.',
  },
  'exchange period': {
    definition: 'The 180-day window after the sale of the relinquished property in which the taxpayer must close on one or more identified replacement properties.',
    example: 'Closing on the replacement fourplex on day 170 kept the transaction within the exchange period.',
  },
  'three-property rule': {
    definition: 'A 1031 identification rule allowing the taxpayer to identify up to three replacement properties regardless of their value.',
    example: 'Under the three-property rule, the investor identified three different Virginia condos as potential replacements.',
  },
  '200% rule': {
    definition: 'A 1031 identification rule allowing more than three replacement properties to be identified as long as their combined value does not exceed 200% of the relinquished property\'s value.',
    example: 'Using the 200% rule, the investor identified five smaller rentals worth a combined $900,000 after selling a $500,000 property.',
  },
  'reverse exchange': {
    definition: 'A 1031 structure where the replacement property is acquired before the relinquished property is sold, typically using an exchange accommodation titleholder.',
    example: 'To win a bidding war, the investor used a reverse exchange to buy the Scott\'s Addition building before selling her existing rental.',
  },
  'delayed exchange': {
    definition: 'The most common 1031 structure where the replacement property is acquired after the relinquished property is sold, within the 45/180-day deadlines.',
    example: 'The delayed exchange closed 120 days after the investor sold her original rental.',
  },

  'mortgage interest deduction': {
    definition: 'The federal itemized deduction for interest paid on qualifying acquisition debt (up to statutory limits) on a primary or secondary residence.',
    example: 'The homeowner claimed a $12,000 mortgage interest deduction on Schedule A after his first full year of homeownership.',
  },
  'SALT deduction': {
    definition: 'The federal itemized deduction for state and local taxes (including real estate taxes), currently capped at $10,000 per year for most taxpayers.',
    example: 'High Virginia real estate and state income taxes pushed the couple past the $10,000 SALT deduction cap.',
  },
  'standard deduction': {
    definition: 'A fixed federal tax deduction available to all taxpayers in lieu of itemizing; many homeowners no longer itemize since the standard deduction increased.',
    example: 'Because their total itemized deductions came in under the standard deduction, the buyers simply took the standard deduction.',
  },
  'itemized deductions': {
    definition: 'Specific allowable deductions (such as mortgage interest, SALT, and charitable giving) claimed on Schedule A in place of the standard deduction.',
    example: 'The homeowner itemized deductions because her mortgage interest, property taxes, and charitable giving exceeded the standard deduction.',
  },
  'passive activity loss': {
    definition: 'A loss from a passive activity (like most rentals) that can generally only offset passive income, subject to the $25,000 active participation exception.',
    example: 'The $20,000 passive activity loss from the rental was suspended and carried forward because the owner\'s income exceeded the phase-out.',
  },
  'real estate professional status': {
    definition: 'An IRS classification (750+ hours and more than half of working time in real property trades) that allows rental losses to offset active income without passive limits.',
    example: 'Qualifying for real estate professional status let the full-time agent deduct $50,000 in rental losses against her commission income.',
  },
  'Schedule E': {
    definition: 'The IRS form used to report rental real estate income, expenses, and depreciation on investment properties.',
    example: 'The investor reported rental income and operating expenses from her four Richmond properties on Schedule E.',
  },
  'depreciation': {
    definition: 'An annual non-cash deduction that recovers the cost of income-producing improvements (not land) over a set IRS recovery period.',
    example: 'Depreciation produced a $9,000 annual deduction that reduced the investor\'s taxable rental income, even though she had positive cash flow.',
  },
  'home office deduction': {
    definition: 'A deduction for the business-use portion of a home, available to self-employed taxpayers using part of their home regularly and exclusively for business.',
    example: 'The real estate agent\'s dedicated 150-square-foot office qualified for a home office deduction using the simplified method.',
  },
  'points deduction': {
    definition: 'The deduction for points (prepaid interest) paid on a home loan, typically deducted in full on a primary-home purchase and amortized on refinances.',
    example: 'A buyer paid $3,500 in points to buy down the rate and claimed a full points deduction on her purchase-year return.',
  },

  // ── Module 9, Ch4: Investment Analysis ─────────────────────────────────────

  'net operating income': {
    definition: 'A property\'s annual income after subtracting vacancy and operating expenses but before debt service and income tax; the key number in income-approach valuation.',
    example: 'A Richmond duplex with $48,000 in effective gross income and $18,000 in operating expenses has a net operating income of $30,000.',
  },
  'NOI': {
    definition: 'Shorthand for net operating income, calculated as effective gross income minus operating expenses and used to value income-producing property.',
    example: 'The investor divided the property\'s $42,000 NOI by the market cap rate to estimate value.',
  },
  'gross scheduled income': {
    definition: 'The total rental income a property would produce at 100% occupancy and full market rents, before vacancy and credit loss.',
    example: 'A fourplex with four units renting at $1,200 per month has a gross scheduled income of $57,600.',
  },
  'effective gross income': {
    definition: 'Gross scheduled income minus vacancy and credit loss plus other income (such as laundry or parking); the revenue figure used in NOI calculations.',
    example: 'After a 5% vacancy allowance, the $100,000 gross scheduled income produced $95,000 in effective gross income.',
  },
  'vacancy rate': {
    definition: 'The percentage of potential rental income lost to unoccupied units, used to adjust gross scheduled income to a realistic level.',
    example: 'Using a 7% vacancy rate in Richmond\'s rental market, the investor reduced projected gross income before calculating NOI.',
  },
  'operating expenses': {
    definition: 'Recurring costs of operating a rental property (taxes, insurance, repairs, management) but not including debt service, depreciation, or capital improvements.',
    example: 'Operating expenses ran about 38% of effective gross income on the Chesterfield rental.',
  },
  'cash flow before tax': {
    definition: 'The cash left after paying operating expenses and debt service but before income tax; also called pre-tax cash flow.',
    example: 'With $30,000 NOI and $22,000 in annual debt service, the property produced $8,000 in cash flow before tax.',
  },
  'debt service': {
    definition: 'The total annual principal and interest payments on loans secured by an investment property.',
    example: 'Monthly debt service of $1,850 works out to $22,200 per year for the fourplex.',
  },
  'potential gross income': {
    definition: 'Another term for gross scheduled income: total rental income a property would generate at full occupancy and market rents.',
    example: 'The potential gross income is the starting line on the investor\'s operating statement before vacancy adjustments.',
  },
  'expense ratio': {
    definition: 'Operating expenses expressed as a percentage of effective gross income, used to benchmark operating efficiency.',
    example: 'A 42% expense ratio on the Richmond duplex was in line with local market norms for similar small multifamily.',
  },

  'capitalization rate': {
    definition: 'The ratio of NOI to property value (NOI divided by value), used to value income-producing property and compare investments.',
    example: 'A $30,000 NOI at an 8% capitalization rate implies a property value of $375,000.',
  },
  'cap rate': {
    definition: 'Shorthand for capitalization rate; the market-driven return on an all-cash purchase based on first-year NOI.',
    example: 'Richmond small multifamily traded at roughly a 7% cap rate in the most recent market cycle.',
  },
  'gross rent multiplier': {
    definition: 'A simple valuation ratio: property price divided by gross annual rent, used as a quick comparison tool.',
    example: 'A home priced at $300,000 with $30,000 in annual rent has a gross rent multiplier of 10.',
  },
  'GRM': {
    definition: 'Abbreviation for gross rent multiplier, a quick income-property valuation ratio that ignores expenses and vacancy.',
    example: 'At a market GRM of 9, a rental grossing $24,000 annually would be valued near $216,000.',
  },
  'income approach to value': {
    definition: 'A valuation method for income-producing property based on its ability to generate income, usually applied via direct capitalization of NOI.',
    example: 'The appraiser used the income approach to value for the eight-unit building by dividing NOI by the market cap rate.',
  },
  'direct capitalization': {
    definition: 'A single-year income approach technique in which value equals NOI divided by a market capitalization rate.',
    example: 'Direct capitalization valued the building at $500,000 using $40,000 NOI and an 8% cap rate.',
  },
  'band of investment': {
    definition: 'A method of developing a cap rate by weighting the mortgage constant and required equity return by their percentages of total capital.',
    example: 'Band of investment produced an 8.2% cap rate reflecting current lending terms and the investor\'s required return on equity.',
  },
  'market cap rate': {
    definition: 'The prevailing capitalization rate observed in recent comparable sales in a given market and property type.',
    example: 'Recent Scott\'s Addition apartment trades suggested a market cap rate around 6.5%.',
  },
  'reversionary value': {
    definition: 'The estimated value of a property at the end of a holding period, used in discounted cash flow and yield analyses.',
    example: 'The investor assumed a $550,000 reversionary value when running a 10-year hold projection.',
  },
  'overall rate': {
    definition: 'Another name for the overall capitalization rate applied to NOI in direct capitalization.',
    example: 'A 7.5% overall rate applied to $45,000 NOI yields a $600,000 value estimate.',
  },

  'leverage': {
    definition: 'The use of borrowed money to increase potential return on invested equity; essential to most real estate investment strategies.',
    example: 'Using 75% leverage, the investor controlled a $400,000 property with only $100,000 of her own money.',
  },
  'positive leverage': {
    definition: 'Financing structure where the cost of borrowed money is lower than the unleveraged property return, magnifying equity returns upward.',
    example: 'With an 8% cap rate and a 6% mortgage rate, the investor enjoyed positive leverage on her rental.',
  },
  'negative leverage': {
    definition: 'Financing structure where borrowing costs exceed the property\'s unleveraged return, reducing the investor\'s cash-on-cash return.',
    example: 'A 7% loan on a property producing only a 6% cap rate creates negative leverage and hurts cash flow.',
  },
  'loan-to-value ratio': {
    definition: 'The loan balance divided by the property value, expressed as a percentage; a key underwriting metric and driver of leverage.',
    example: 'A $240,000 loan on a $300,000 home is an 80% loan-to-value ratio.',
  },
  'equity buildup': {
    definition: 'The increase in owner equity that results from loan amortization (principal reduction) and appreciation over time.',
    example: 'Over five years, equity buildup from principal paydown and appreciation added $70,000 to the owner\'s position.',
  },
  'principal reduction': {
    definition: 'The portion of each mortgage payment that pays down loan balance, directly building the owner\'s equity.',
    example: 'In year 10 of an amortizing loan, monthly principal reduction is far greater than in year 1.',
  },
  'appreciation': {
    definition: 'The increase in a property\'s market value over time due to market forces, improvements, or inflation.',
    example: 'Richmond home appreciation averaged around 6% annually in recent years, boosting investor equity without any principal payments.',
  },
  'cash-on-cash return': {
    definition: 'Annual pre-tax cash flow divided by the cash the investor actually put into the deal; measures return on equity invested.',
    example: 'Annual pre-tax cash flow of $8,000 on a $80,000 down payment produces a 10% cash-on-cash return.',
  },
  'total return': {
    definition: 'The combined return from cash flow, principal reduction, and appreciation on a real estate investment, often the truest performance measure.',
    example: 'A modest 4% cash-on-cash return combined with principal paydown and appreciation produced a 15% total return.',
  },
  'amortization': {
    definition: 'The gradual repayment of a loan through scheduled principal and interest payments over the loan term.',
    example: 'A 30-year amortization on a fixed-rate mortgage results in a fully paid-off loan after 360 on-time payments.',
  },

  'cost recovery': {
    definition: 'Another IRS term for depreciation, the systematic recovery of the cost of income-producing improvements over time.',
    example: 'Cost recovery on the residential rental is taken straight-line over 27.5 years.',
  },
  'straight-line depreciation': {
    definition: 'The method used for real property, where the depreciable basis is deducted in equal annual amounts over the recovery period.',
    example: 'Straight-line depreciation on a $275,000 improvement over 27.5 years produces $10,000 of annual deduction.',
  },
  '27.5 years': {
    definition: 'The IRS recovery period for residential rental property improvements under MACRS.',
    example: 'A Chesterfield single-family rental is depreciated over 27.5 years, not including land value.',
  },
  '39 years': {
    definition: 'The IRS recovery period for non-residential (commercial) real property improvements under MACRS.',
    example: 'A small office building is depreciated over 39 years because it is commercial real property.',
  },
  'depreciable basis': {
    definition: 'The portion of an investment property\'s cost that can be depreciated (improvements only, not land), plus capital improvements.',
    example: 'With a $350,000 purchase and 20% land allocation, the depreciable basis starts at $280,000.',
  },
  'land value allocation': {
    definition: 'The portion of a property\'s purchase price assigned to non-depreciable land, often based on assessor records or appraisal.',
    example: 'The investor used the county\'s 25% land value allocation when setting up depreciation on the rental.',
  },
  'Section 1250': {
    definition: 'The IRC section governing recapture of depreciation on real property, taxed at a maximum 25% rate on sale.',
    example: 'Section 1250 recapture caused the first $40,000 of gain to be taxed at up to 25%.',
  },
  'cost segregation': {
    definition: 'An engineering-based tax study that reclassifies components of a building to shorter recovery periods (5, 7, or 15 years) to accelerate depreciation.',
    example: 'A cost segregation study on a $2M apartment complex shifted $400,000 into 5- and 15-year property, boosting early-year deductions.',
  },

  // ── Module 10, Ch1: Pre-Listing to Contract ────────────────────────────────

  'comparative market analysis': {
    definition: 'An agent-prepared analysis (CMA) of recent comparable sales, active listings, and pending sales used to recommend a listing or offer price.',
    example: 'The agent presented a comparative market analysis showing three recent Bon Air sales within a quarter mile to support a $415,000 list price.',
  },
  'CMA': {
    definition: 'Shorthand for comparative market analysis; the data-driven pricing tool Virginia agents prepare for listing and buyer consultations.',
    example: 'The buyer requested a CMA before making an offer on a Glen Allen home to confirm the list price was in line with the market.',
  },
  'comparable sales': {
    definition: 'Recently sold properties similar in location, size, age, and condition to the subject property, used as the primary evidence of value in a CMA.',
    example: 'The CMA relied on three comparable sales within the past 90 days in the same subdivision.',
  },
  'active listings': {
    definition: 'Properties currently listed for sale in the MLS; they show what a seller is competing against but are not proof of value.',
    example: 'Active listings help the CMA show upper-end competition, while actual sold comps drive the price recommendation.',
  },
  'pending sales': {
    definition: 'Listings that are under contract but not yet closed; useful indicators of current buyer demand and direction of pricing.',
    example: 'Multiple pending sales at or above list price suggested a seller\'s market when the CMA was prepared.',
  },
  'expired listings': {
    definition: 'Listings that came off the market without selling, often signaling overpricing, condition, or marketing issues.',
    example: 'Two expired listings in the neighborhood at higher prices helped the agent coach the seller away from overpricing.',
  },
  'price adjustments': {
    definition: 'Dollar adjustments made to comparable sales in a CMA to account for feature differences (square footage, garage, upgrades, condition).',
    example: 'A $10,000 positive price adjustment was added to a comp that lacked the subject property\'s two-car garage.',
  },
  'days on market': {
    definition: 'The number of days (DOM) a listing has been active in the MLS; a key indicator of market velocity and overpricing.',
    example: 'Average days on market under 10 in Short Pump signaled a hot seller\'s market in the CMA.',
  },
  'absorption rate': {
    definition: 'The rate at which available homes sell in a market over a given period; often expressed as months of inventory.',
    example: 'An absorption rate of two months of inventory in Western Henrico told the agent to list aggressively.',
  },
  'listing price range': {
    definition: 'A recommended band of acceptable list prices drawn from the CMA, typically a low/target/high range given market conditions.',
    example: 'The agent proposed a listing price range of $395,000 to $415,000 with a target of $405,000.',
  },

  'listing agreement': {
    definition: 'The written contract between a seller and brokerage authorizing the firm to market the property and outlining commission, term, and duties; required in writing by Virginia license law.',
    example: 'The listing agreement authorized the firm to market the home for six months at a 5.5% total commission.',
  },
  'exclusive right to sell': {
    definition: 'The most common listing agreement, in which the brokerage earns a commission regardless of who procures the buyer during the term.',
    example: 'Under an exclusive right to sell, the brokerage was paid even after the seller found the buyer himself at an open house.',
  },
  'exclusive agency': {
    definition: 'A listing in which the brokerage represents the seller exclusively but the seller can still sell to a buyer they procure directly without owing commission.',
    example: 'The exclusive agency listing let the owner avoid paying commission when his neighbor unexpectedly bought the home.',
  },
  'open listing': {
    definition: 'A non-exclusive listing in which only the brokerage procuring the buyer earns a commission, and the seller may sell the home himself without owing one.',
    example: 'An open listing is rarely used in Virginia residential practice because it provides little marketing incentive.',
  },
  'net listing': {
    definition: 'A listing where the broker\'s commission is any amount over a net price specified by the seller; generally discouraged and often prohibited in practice due to conflict-of-interest risk.',
    example: 'Net listings are considered problematic because they can create fiduciary conflicts between broker and seller.',
  },
  'MLS input': {
    definition: 'The process of entering a listing into the Multiple Listing Service so that cooperating brokers can market and show the property.',
    example: 'After signing the listing agreement, the agent completed MLS input the next morning to activate the listing.',
  },
  'property marketing plan': {
    definition: 'The written strategy an agent uses to attract buyers, including pricing, photography, signage, syndication, open houses, and promotion.',
    example: 'The property marketing plan included drone photography, a 3D tour, and weekend open houses in the first two weeks.',
  },
  'professional photography': {
    definition: 'High-quality photography used to showcase a listing, critical to online engagement and a near-industry standard on higher-end listings.',
    example: 'Professional photography helped the listing draw 3x the online views compared to nearby homes using phone photos.',
  },
  'virtual tour': {
    definition: 'An online interactive or video tour (such as 3D walkthrough) that lets buyers preview the property remotely.',
    example: 'The virtual tour gave out-of-state relocation buyers confidence to write a sight-unseen offer on the Richmond home.',
  },
  'showing instructions': {
    definition: 'The seller-approved instructions in the MLS for how agents schedule and access the home for showings.',
    example: 'The showing instructions required two-hour notice and use of the Supra lockbox for access.',
  },

  'buyer consultation': {
    definition: 'A structured meeting early in the representation process where the agent explains the buying process, assesses needs, and signs a buyer representation agreement.',
    example: 'The buyer consultation covered financing options, timeline, and a brief tour of the MLS search parameters.',
  },
  'buyer representation agreement': {
    definition: 'The written contract between a buyer and brokerage establishing agency, duties, term, and compensation; Virginia now generally requires a written agreement before showing property.',
    example: 'The buyer representation agreement locked in a 60-day exclusive term and a 2.5% buyer-side commission.',
  },
  'needs analysis': {
    definition: 'A structured discussion of a buyer\'s goals, budget, location preferences, timeline, and must-haves versus nice-to-haves used to target the MLS search.',
    example: 'The needs analysis revealed the buyers prioritized commute time and school quality over square footage.',
  },
  'pre-approval': {
    definition: 'A written lender statement, based on verified documentation, that a borrower qualifies for a specific loan amount subject to property and final underwriting.',
    example: 'The buyer\'s pre-approval letter gave sellers confidence when competing against a cash offer.',
  },
  'pre-qualification': {
    definition: 'A preliminary lender estimate of what a borrower may qualify for, usually without full verification; weaker than a pre-approval.',
    example: 'A basic pre-qualification carries less weight than a fully documented pre-approval when competing in multiple-offer situations.',
  },
  'buyer agency': {
    definition: 'The fiduciary relationship in which a brokerage represents a buyer, owing loyalty, obedience, disclosure, confidentiality, reasonable care, and accounting.',
    example: 'Under buyer agency, the agent was required to disclose known material defects she learned about the property.',
  },
  'MLS search criteria': {
    definition: 'The filters (price range, location, bedrooms, features) an agent uses to build a buyer\'s automated MLS alerts and property lists.',
    example: 'The agent set MLS search criteria at $400,000 to $475,000, 3+ bedrooms, and Henrico County schools.',
  },
  'must-haves vs nice-to-haves': {
    definition: 'A clarifying exercise that separates non-negotiable features from preferred features, helping buyers prioritize in a fast-moving market.',
    example: 'Three bedrooms was a must-have, while a finished basement stayed on the nice-to-have list.',
  },
  'timeline': {
    definition: 'The buyer\'s target schedule covering pre-approval, showings, offer, inspection, and closing, used to pace the transaction.',
    example: 'The buyer\'s timeline required closing within 45 days because her lease was ending.',
  },
  'buyer disclosure': {
    definition: 'Written disclosure of the brokerage relationship between the agent and buyer, required under Virginia law before substantive discussion of specific property.',
    example: 'The buyer disclosure form was signed at the start of the consultation to clarify the agency relationship.',
  },

  'purchase agreement': {
    definition: 'The written contract in which a buyer agrees to purchase, and a seller agrees to sell, real property on defined terms; binding when ratified.',
    example: 'The purchase agreement detailed price, deposit, financing, inspection, and closing date.',
  },
  'ratification': {
    definition: 'The point at which all parties have signed the purchase agreement (with any counteroffers agreed upon) and notice of final acceptance has been communicated.',
    example: 'The parties had full ratification at 6:42 p.m. when the seller\'s signed acceptance was delivered back to the buyer\'s agent.',
  },
  'contingency': {
    definition: 'A condition in a purchase contract that must be satisfied or waived before the contract becomes unconditional, such as inspection, financing, or appraisal.',
    example: 'The contract included a home inspection contingency giving the buyer 10 days to inspect and negotiate repairs.',
  },
  'earnest money deposit': {
    definition: 'A good-faith deposit (EMD) delivered by the buyer after ratification to show commitment, held in escrow and credited at closing.',
    example: 'A $5,000 earnest money deposit was wired to the title company within three business days of ratification.',
  },
  'home inspection contingency': {
    definition: 'A contingency allowing the buyer a defined time to inspect the property and either accept it, terminate, or request repairs or credits.',
    example: 'The home inspection contingency gave the buyer seven days to complete inspections and respond in writing.',
  },
  'financing contingency': {
    definition: 'A contingency allowing the buyer to terminate and recover their deposit if final loan approval cannot be obtained by a stated deadline.',
    example: 'When the lender denied the loan due to undisclosed debt, the financing contingency allowed the buyer to walk away and recover the deposit.',
  },
  'appraisal contingency': {
    definition: 'A contingency allowing the buyer to renegotiate or terminate if the property fails to appraise for the contract price.',
    example: 'When the home appraised $15,000 under contract, the appraisal contingency allowed the buyer to ask the seller to lower the price.',
  },
  'closing date': {
    definition: 'The contractually agreed date of settlement, when the deed is recorded, funds disburse, and possession typically transfers.',
    example: 'The contract targeted a closing date 42 days after ratification to align with the buyer\'s financing timeline.',
  },
  'counteroffer': {
    definition: 'A response to an offer that changes one or more terms; legally a rejection of the original offer and a new offer back to the other side.',
    example: 'The seller\'s counteroffer raised price by $5,000 and shortened the inspection period from 10 to 7 days.',
  },

  // ── Module 10, Ch2: Under Contract to Closing ──────────────────────────────

  'home inspection': {
    definition: 'A non-invasive visual examination of a home\'s systems and components by a qualified inspector to identify material defects.',
    example: 'The home inspection flagged an aging HVAC unit and minor roof issues the buyer later negotiated.',
  },
  'general inspection': {
    definition: 'The standard whole-house inspection of systems and components; distinct from specialty inspections like radon, termite, or sewer scope.',
    example: 'The buyer ordered a general inspection plus a separate radon test and termite inspection.',
  },
  'radon test': {
    definition: 'A short-term or long-term test for radon gas levels; Virginia has many areas where radon testing is prudent at purchase.',
    example: 'The radon test came back at 6 pCi/L, above the EPA action level, so the buyer requested a mitigation system.',
  },
  'termite inspection': {
    definition: 'A wood-destroying insect inspection performed by a licensed pest control company, often required on FHA and VA loans.',
    example: 'The termite inspection (WDI report) showed evidence of old damage treated years ago, with no active infestation.',
  },
  'wood-destroying insect report': {
    definition: 'The standardized WDI/NPMA-33 report documenting the findings of a termite/pest inspection for lenders and buyers.',
    example: 'The lender required the wood-destroying insect report before issuing clear to close.',
  },
  'repair request': {
    definition: 'A post-inspection request from buyer to seller listing repairs or credits sought; Virginia REIN/NVAR forms include standardized repair amendments.',
    example: 'The buyer\'s repair request asked for $1,800 in electrical repairs and a new GFCI in the kitchen.',
  },
  'inspection contingency': {
    definition: 'The contract provision giving the buyer the right to inspect, negotiate, or terminate during a defined inspection period.',
    example: 'Under the inspection contingency, the buyer terminated when the seller declined to address a major structural finding.',
  },
  'material defect': {
    definition: 'A condition that significantly affects the value, safety, or habitability of the property; typically the threshold for inspection-based negotiations.',
    example: 'Active foundation movement was treated as a material defect warranting further engineering review.',
  },
  'as-is': {
    definition: 'A contract term signaling the seller will make no repairs, though buyers still have rights under inspection and disclosure laws.',
    example: 'Even on an as-is listing, the buyer kept an inspection contingency so he could still terminate for material defects.',
  },
  'inspection addendum': {
    definition: 'A contract addendum that documents the buyer\'s response after inspection, whether accepting, terminating, or requesting repairs or credits.',
    example: 'The inspection addendum requested a $3,000 seller credit in lieu of repairing the deck.',
  },

  'appraisal': {
    definition: 'An independent, impartial opinion of value performed by a licensed appraiser under USPAP; required on most financed transactions.',
    example: 'The lender ordered an appraisal ten days after ratification to support the loan amount.',
  },
  'appraised value': {
    definition: 'The opinion of value expressed in the final appraisal report, used by the lender to size the loan.',
    example: 'The appraised value came in at $410,000, supporting the full contract price.',
  },
  'appraisal gap': {
    definition: 'The shortfall between appraised value and contract price when the appraisal comes in low; often covered via an appraisal gap clause in competitive markets.',
    example: 'The buyer\'s appraisal gap clause committed to bringing up to $10,000 extra cash if the appraisal fell short.',
  },
  'USPAP': {
    definition: 'The Uniform Standards of Professional Appraisal Practice, the ethical and performance standards all licensed appraisers must follow.',
    example: 'The appraiser certified on the report that the appraisal was performed in compliance with USPAP.',
  },
  'sales comparison approach': {
    definition: 'The appraisal method of estimating value by comparing the subject to recent sales of similar properties, with adjustments for feature differences.',
    example: 'The sales comparison approach was the primary method used to value the single-family home.',
  },
  'cost approach': {
    definition: 'An appraisal method estimating value as the cost to replace improvements new, less depreciation, plus land value; useful for new or special-purpose properties.',
    example: 'The appraiser gave the cost approach extra weight on a newly built custom home with few comparable sales.',
  },
  'income approach': {
    definition: 'An appraisal method estimating value based on the income the property produces, typically via direct capitalization of NOI.',
    example: 'The appraiser used the income approach alongside sales comparison on a Church Hill duplex.',
  },
  'reconsideration of value': {
    definition: 'A formal process (ROV) for challenging an appraisal by submitting additional comparable sales or factual corrections to the appraiser and lender.',
    example: 'The buyer\'s agent submitted a reconsideration of value with three overlooked comps, and the appraiser raised the value by $8,000.',
  },
  'appraisal waiver': {
    definition: 'Approval from Fannie Mae or Freddie Mac (via the lender) to proceed without a traditional appraisal based on automated valuation and loan characteristics.',
    example: 'A strong credit profile and low LTV produced an appraisal waiver through Desktop Underwriter.',
  },

  'loan processing': {
    definition: 'The stage after application where the lender gathers and verifies borrower documents and orders third-party reports before underwriting.',
    example: 'Loan processing pulled updated pay stubs, bank statements, and ordered the title commitment.',
  },
  'underwriting': {
    definition: 'The lender\'s decision-making process that evaluates a loan against program guidelines based on credit, capacity, collateral, and capital.',
    example: 'Underwriting issued a conditional approval pending an explanation letter for a large recent deposit.',
  },
  'conditional approval': {
    definition: 'An underwriter\'s decision to approve the loan subject to specific conditions being satisfied before closing.',
    example: 'Conditional approval required updated bank statements and proof of paid-off collections.',
  },
  'clear to close': {
    definition: 'The lender milestone indicating all conditions are satisfied (CTC) and the loan is ready to move to closing documents and funding.',
    example: 'The buyer received clear to close three days before the scheduled settlement.',
  },
  'conditions': {
    definition: 'The documents, explanations, or actions an underwriter requires before issuing final approval.',
    example: 'The loan had 12 conditions, including tax transcripts and a homeowners insurance binder.',
  },
  'verification of employment': {
    definition: 'The lender\'s written or verbal confirmation with the borrower\'s employer of job status and income (VOE).',
    example: 'A final verification of employment was completed the day before closing to confirm continued employment.',
  },
  'verification of deposit': {
    definition: 'The lender\'s confirmation (VOD) with the borrower\'s bank of account balances used for down payment and reserves.',
    example: 'The verification of deposit confirmed enough cash to close and two months\' reserves.',
  },
  'credit report': {
    definition: 'A tri-merged report from Equifax, Experian, and TransUnion used by mortgage lenders to evaluate credit history and scores.',
    example: 'Pulling a fresh credit report days before closing is how lenders detect new debt that could kill the loan.',
  },
  'debt-to-income ratio': {
    definition: 'The ratio (DTI) of a borrower\'s monthly debt payments to gross monthly income, used as a key underwriting metric.',
    example: 'Opening a new car loan pushed the buyer\'s debt-to-income ratio above the program limit, delaying closing.',
  },
  'loan commitment': {
    definition: 'The lender\'s written commitment to make a loan on specified terms, issued after underwriting approval; subject to final conditions.',
    example: 'The loan commitment letter set a 30-day funding window and specified remaining prior-to-funding conditions.',
  },

  'title search': {
    definition: 'An examination of the public land records to trace ownership and identify liens, encumbrances, and defects affecting title.',
    example: 'The title search uncovered an old unreleased deed of trust that had to be cleared before closing.',
  },
  'chain of title': {
    definition: 'The documented history of successive conveyances of a parcel of real property as shown in the land records.',
    example: 'The chain of title was complete back 60 years with no gaps or breaks.',
  },
  'title insurance': {
    definition: 'Insurance protecting buyers and lenders from financial loss due to defects in title existing as of the policy date.',
    example: 'Title insurance paid the legal fees when an unknown heir later challenged title.',
  },
  'owners policy': {
    definition: 'Title insurance purchased by the buyer that protects the buyer\'s equity from covered title defects; usually issued for the purchase price.',
    example: 'Paying roughly $1,200 for an owners policy protected the buyer\'s full $400,000 investment.',
  },
  'lenders policy': {
    definition: 'Title insurance required by the lender, insuring the lender\'s lien priority up to the loan amount.',
    example: 'The lenders policy was issued in the loan amount and required by the mortgage lender.',
  },
  'title defect': {
    definition: 'Any issue affecting clear ownership, such as unreleased liens, forgeries, missing heirs, or boundary disputes.',
    example: 'A forged deed in the chain was a title defect the underwriter required to be cured before issuing a policy.',
  },
  'encumbrance': {
    definition: 'A claim, lien, charge, or liability attached to real property, such as an easement, mortgage, or restriction.',
    example: 'A recorded utility easement was an encumbrance disclosed on the title commitment.',
  },
  'survey': {
    definition: 'A drawing prepared by a licensed surveyor showing the boundaries, improvements, easements, and encroachments of a property.',
    example: 'The survey revealed the neighbor\'s shed was encroaching three feet onto the subject property.',
  },
  'boundary survey': {
    definition: 'A survey focused on establishing the precise property lines, sometimes staked on site.',
    example: 'The buyer ordered a full boundary survey before building a fence.',
  },
  'easement': {
    definition: 'A non-possessory right to use another\'s land for a specific purpose, such as utility access or shared driveways.',
    example: 'A recorded easement allowed Dominion Energy access to maintain the power lines along the rear of the lot.',
  },

  // ── Module 10, Ch3: Virginia Settlement Process ────────────────────────────

  'settlement agent': {
    definition: 'The attorney, title company, or other qualified party (licensed under CRESPA) who conducts a Virginia residential settlement.',
    example: 'The buyer chose the settlement agent, a Virginia title company bonded and registered under CRESPA.',
  },
  'closing attorney': {
    definition: 'A licensed Virginia attorney who performs settlement services; a permitted category of settlement agent in Virginia.',
    example: 'The seller preferred a closing attorney who could also advise on a related estate issue.',
  },
  'title company': {
    definition: 'A licensed company that issues title insurance and commonly acts as settlement agent in Virginia residential transactions.',
    example: 'The title company coordinated title search, policy issuance, and settlement.',
  },
  'escrow': {
    definition: 'The holding of funds or documents by a neutral third party pending fulfillment of specified conditions.',
    example: 'The earnest money deposit was held in escrow by the title company until closing.',
  },
  'disbursement': {
    definition: 'The final distribution of settlement funds to sellers, lenders, agents, and vendors after closing per the settlement statement.',
    example: 'Disbursement occurred the same day once the loan was funded and the deed was recorded.',
  },
  'settlement statement': {
    definition: 'The itemized accounting of all financial aspects of the closing, now generally delivered via the TRID Closing Disclosure for most consumer loans.',
    example: 'The buyer and seller each reviewed the settlement statement and signed it at closing.',
  },
  'fiduciary duty': {
    definition: 'The duty of loyalty, disclosure, care, and accounting owed by a settlement agent to the parties to the transaction.',
    example: 'Mishandling escrowed funds would breach the settlement agent\'s fiduciary duty.',
  },
  'Virginia Consumer Real Estate Settlement Protection Act': {
    definition: 'The Virginia statute (CRESPA) regulating settlement agents, requiring licensing, bonding, and insurance, and protecting consumers in residential settlements.',
    example: 'The Virginia Consumer Real Estate Settlement Protection Act required the title company to post a surety bond and carry E&O coverage.',
  },
  'CRESPA': {
    definition: 'The common acronym for the Virginia Consumer Real Estate Settlement Protection Act, which governs Virginia settlement agents and consumer protection.',
    example: 'CRESPA gives the consumer the right to choose their settlement agent, a disclosure required on the contract.',
  },
  'bonding requirement': {
    definition: 'The CRESPA requirement that settlement agents maintain a surety bond and E&O insurance at minimum statutory levels.',
    example: 'The title company\'s bonding requirement included a $200,000 surety bond and $250,000 E&O policy.',
  },

  'TRID': {
    definition: 'The TILA-RESPA Integrated Disclosure rule that consolidated prior disclosures into the Loan Estimate and Closing Disclosure for most consumer mortgages.',
    example: 'TRID required the lender to deliver an initial Loan Estimate within three business days of application.',
  },
  'TILA-RESPA Integrated Disclosure': {
    definition: 'The CFPB rule that integrated Truth in Lending Act and RESPA disclosures into standardized forms (Loan Estimate and Closing Disclosure).',
    example: 'TILA-RESPA Integrated Disclosure timing drove when the Closing Disclosure had to be in the buyer\'s hands.',
  },
  'Loan Estimate': {
    definition: 'The three-page TRID disclosure (LE) issued within three business days of application summarizing loan terms, projected payments, and closing costs.',
    example: 'The Loan Estimate showed a lower rate than the competing lender\'s, helping the buyer choose.',
  },
  'Closing Disclosure': {
    definition: 'The five-page TRID disclosure (CD) delivered at least three business days before consummation, showing final loan terms and costs.',
    example: 'The Closing Disclosure was delivered electronically six business days before closing to preserve the three-day review.',
  },
  'three-business-day rule': {
    definition: 'The TRID rule requiring the Closing Disclosure to be received at least three business days before consummation; certain changes restart the clock.',
    example: 'Switching from a fixed to an adjustable-rate loan triggered the three-business-day rule and delayed closing.',
  },
  'changed circumstance': {
    definition: 'An event under TRID (such as a valid reason beyond the lender\'s control) that allows a revised Loan Estimate and adjustment of fees within tolerance rules.',
    example: 'A newly discovered flood zone was a changed circumstance allowing the lender to update the Loan Estimate.',
  },
  'tolerance': {
    definition: 'The TRID rule limiting how much certain fees can increase between the Loan Estimate and Closing Disclosure.',
    example: 'Exceeding tolerance without a valid changed circumstance forced the lender to cure the difference at closing.',
  },
  'zero tolerance': {
    definition: 'TRID category of fees that cannot increase at all from Loan Estimate to Closing Disclosure without a valid changed circumstance (e.g., lender fees).',
    example: 'Origination charges fall under zero tolerance and were matched exactly on the Closing Disclosure.',
  },
  'ten percent tolerance': {
    definition: 'TRID category for certain third-party services where the cumulative increase from Loan Estimate to Closing Disclosure cannot exceed 10%.',
    example: 'Recording fees and selected lender-directed services fall under the ten percent tolerance bucket.',
  },
  'cash to close': {
    definition: 'The exact amount of funds the buyer must bring (or receive) at closing, shown on the Closing Disclosure after all credits and debits.',
    example: 'The Closing Disclosure showed a final cash to close of $14,382.17, which the buyer wired to the title company.',
  },

  'proration': {
    definition: 'The allocation of expenses or income between buyer and seller at closing based on the portion of the billing period each party owned the property.',
    example: 'Property tax proration credited the buyer for the portion of the year the seller owned the home.',
  },
  'per diem': {
    definition: 'A daily rate used in prorations, calculated by dividing an annual or monthly amount by the number of days in the period.',
    example: 'At a $12 per diem for property taxes, the seller owed 180 days, or $2,160, to the buyer at closing.',
  },
  'closing date allocation': {
    definition: 'The contractual determination of who "owns" closing day for prorations (commonly buyer owns closing day) and how each side is charged.',
    example: 'Per the contract, the closing date allocation assigned closing day to the buyer for purposes of taxes and interest.',
  },
  'seller credit': {
    definition: 'Funds the seller agrees to apply toward the buyer\'s closing costs, reducing the cash the buyer needs at closing.',
    example: 'A $5,000 seller credit at closing covered most of the buyer\'s closing costs and prepaids.',
  },
  'buyer debit': {
    definition: 'An item on the settlement statement charged to the buyer, such as purchase price, loan costs, or prorations.',
    example: 'The buyer debit column included the purchase price, title fees, and recording costs.',
  },
  'property tax proration': {
    definition: 'The proration of real estate taxes between buyer and seller based on the billing cycle and closing date.',
    example: 'Property tax proration gave the buyer a credit for four months of unpaid taxes the seller had not yet paid.',
  },
  'HOA proration': {
    definition: 'The proration of homeowners association dues or fees between buyer and seller based on the paid period.',
    example: 'HOA proration credited the seller for the remainder of the quarter after closing.',
  },
  'rent proration': {
    definition: 'The proration of collected rent on an investment property, with the buyer receiving the portion for their ownership days and any tenant security deposits.',
    example: 'Rent proration transferred 12 days of collected rent and the full tenant security deposit to the buyer.',
  },
  'prepaid items': {
    definition: 'Costs collected in advance at closing such as homeowners insurance, property taxes, and prepaid interest, often held in escrow reserves.',
    example: 'Prepaid items on the Closing Disclosure included a one-year homeowners insurance premium and two months of tax reserves.',
  },
  'calendar year method': {
    definition: 'A proration convention dividing annual amounts by 360 or 365 days depending on contract or local custom.',
    example: 'The contract used the calendar year method of 365 days for tax prorations.',
  },

  'final walk-through': {
    definition: 'A buyer\'s right, typically just before closing, to confirm the home is in the agreed condition, repairs are completed, and nothing has changed.',
    example: 'The final walk-through confirmed the agreed repairs were completed and all appliances were still in place.',
  },
  'closing meeting': {
    definition: 'The appointment (in person or electronic) where parties sign documents, funds disburse, and title transfers; may be held separately for buyer and seller.',
    example: 'The closing meeting was held at the title company office with the buyer and settlement agent present.',
  },
  'signing': {
    definition: 'The execution of loan and transfer documents by buyer and seller, either in person at closing or via mail-away or remote online notarization where permitted.',
    example: 'The signing took about 45 minutes for a typical financed purchase.',
  },
  'deed': {
    definition: 'The written instrument transferring ownership of real property from grantor to grantee, recorded in the local clerk\'s office.',
    example: 'The deed was signed by the seller, notarized, and recorded the same afternoon.',
  },
  'deed of trust': {
    definition: 'Virginia\'s standard security instrument for residential mortgages, pledging real property as collateral through a trustee.',
    example: 'At closing, the buyer signed a deed of trust in favor of the lender, recorded right behind the deed.',
  },
  'promissory note': {
    definition: 'The borrower\'s written promise to repay the loan on stated terms; separate from the deed of trust that secures it.',
    example: 'The promissory note set out the loan amount, rate, term, and late-payment terms.',
  },
  'funding': {
    definition: 'The lender\'s wiring of loan proceeds to the settlement agent, triggering disbursement and recording.',
    example: 'Funding came in at 1:45 p.m., allowing the settlement agent to disburse and record the same day.',
  },
  'recording': {
    definition: 'The process of submitting deeds and security instruments to the clerk of court for entry into the public land records, establishing constructive notice.',
    example: 'Recording at the Richmond Circuit Court clerk\'s office made the buyer\'s ownership and the lender\'s lien public.',
  },
  'keys': {
    definition: 'Symbolic and literal transfer of possession at closing; keys are generally delivered after recording and funding are complete.',
    example: 'The buyer received the keys from the listing agent shortly after the settlement agent confirmed funding.',
  },
  'possession': {
    definition: 'The contractual right to physically occupy and use the property; in Virginia most commonly delivered at closing unless otherwise agreed.',
    example: 'Possession transferred at closing per the contract, with the seller already fully moved out.',
  },

  // ── Module 10, Ch4: Post-Closing & Special Situations ──────────────────────

  'recordation': {
    definition: 'The act of entering deeds and security instruments into the public land records; formalized by the local clerk of court.',
    example: 'Recordation of the deed and deed of trust completed the transaction from a public-records standpoint.',
  },
  'recordation tax': {
    definition: 'A Virginia tax on the recording of deeds and deeds of trust, typically split between state and local portions and charged per dollar of value or loan amount.',
    example: 'The buyer paid recordation tax on the new deed of trust at closing.',
  },
  'grantor tax': {
    definition: 'A Virginia tax paid by the seller (grantor) on the recorded deed, generally calculated at a per-$1,000 of sales price rate.',
    example: 'The grantor tax on a $400,000 sale added roughly $400 to the seller\'s closing costs in most Virginia localities.',
  },
  'deed recording': {
    definition: 'The submission of the executed deed to the clerk\'s office for recording in the land records, which establishes constructive notice of ownership.',
    example: 'Deed recording occurred within hours of the closing meeting.',
  },
  'deed of trust recording': {
    definition: 'The submission of the lender\'s deed of trust to the clerk\'s office, placing the lien of record and establishing priority.',
    example: 'Deed of trust recording preserved the lender\'s first-lien position as of the closing date.',
  },
  'title insurance policy': {
    definition: 'The final title insurance policy issued after closing (owners and/or lenders), replacing the commitment and insuring against covered title defects.',
    example: 'The buyer received the final title insurance policy by mail about four weeks after closing.',
  },
  'final title policy': {
    definition: 'The title policy issued after the deed and any mortgage are recorded and all requirements of the commitment are met.',
    example: 'The final title policy listed recorded exceptions and any endorsements requested by the buyer.',
  },
  'post-closing audit': {
    definition: 'The brokerage\'s internal review of the closed file for accuracy, disclosure compliance, and required documentation.',
    example: 'The post-closing audit flagged a missing signed lead-based paint disclosure that the agent tracked down.',
  },
  'commission disbursement': {
    definition: 'The payment of real estate commissions to the listing and selling brokerages from closing proceeds; by Virginia law the brokerage, not the agent, is paid directly.',
    example: 'Commission disbursement went to each brokerage by wire, and the brokerage then paid the agents per their ICA.',
  },
  'file retention': {
    definition: 'The brokerage\'s obligation under Virginia license law to retain transaction records for a specified period (generally three years after closing or termination).',
    example: 'File retention requires the brokerage to keep the contract, disclosures, and settlement statement for at least three years.',
  },

  'short sale': {
    definition: 'A sale where the lender agrees to accept less than the full loan balance to release its lien and allow the home to close.',
    example: 'The short sale required lender approval before the $325,000 contract could close on a property with $360,000 in debt.',
  },
  'foreclosure': {
    definition: 'The legal process by which a lender enforces its security interest after default and sells the property to satisfy the debt.',
    example: 'After six months of missed payments, the lender began non-judicial foreclosure through the trustee.',
  },
  'trustee': {
    definition: 'The neutral third party named in a Virginia deed of trust who holds the power of sale and conducts non-judicial foreclosure on behalf of the lender.',
    example: 'The trustee scheduled the foreclosure auction on the courthouse steps after notice of default.',
  },
  'non-judicial foreclosure': {
    definition: 'Virginia\'s standard foreclosure process, carried out by the trustee under the deed of trust without court involvement, following statutory notice requirements.',
    example: 'Virginia\'s non-judicial foreclosure moves faster than judicial foreclosure states because no lawsuit is required.',
  },
  'notice of default': {
    definition: 'The formal notice a borrower receives indicating they are in default and identifying the amount and time to cure before foreclosure steps proceed.',
    example: 'The notice of default gave the homeowner 30 days to cure before the trustee scheduled the sale.',
  },
  'foreclosure auction': {
    definition: 'A public sale, often on the courthouse steps, where the property is sold to the highest bidder to satisfy the debt.',
    example: 'The foreclosure auction opened at the unpaid loan balance and was ultimately purchased by the lender.',
  },
  'deficiency judgment': {
    definition: 'A court judgment against a borrower for the shortfall between foreclosure sale proceeds and the outstanding debt; availability in Virginia is subject to statutory and contractual limits.',
    example: 'The lender pursued a deficiency judgment for the $22,000 shortfall remaining after the foreclosure sale.',
  },
  'loss mitigation': {
    definition: 'The lender\'s process of offering alternatives to foreclosure such as repayment plans, loan modifications, short sales, or deeds in lieu.',
    example: 'Through loss mitigation, the borrower obtained a modification that reduced the rate and extended the term.',
  },
  'deed in lieu of foreclosure': {
    definition: 'A voluntary conveyance of title from borrower to lender to avoid foreclosure; subject to lender acceptance and often tax and credit implications.',
    example: 'The homeowner agreed to a deed in lieu of foreclosure to avoid a public foreclosure on her record.',
  },

  'wire fraud': {
    definition: 'A federal crime involving the use of electronic communications to defraud; in real estate, most often tied to fake wire instructions sent to buyers or agents.',
    example: 'A buyer nearly wired $40,000 to a fraudulent account in a real estate wire fraud scheme.',
  },
  'business email compromise': {
    definition: 'A cybercrime technique (BEC) where criminals gain access to a business email account and impersonate the user to redirect funds or information.',
    example: 'A business email compromise on the title company\'s account caused fraudulent wiring instructions to be sent to a buyer.',
  },
  'phishing': {
    definition: 'An attempt to trick users into revealing credentials or clicking malicious links through disguised emails, texts, or websites.',
    example: 'A phishing email that appeared to be from the settlement agent tried to collect the buyer\'s login credentials.',
  },
  'social engineering': {
    definition: 'Manipulating people into taking action or sharing information through trust, urgency, or impersonation rather than technical hacking.',
    example: 'A social engineering phone call posing as the lender tried to pressure the buyer to wire funds early.',
  },
  'wire transfer': {
    definition: 'An electronic transfer of funds from one account to another, commonly used for earnest money and cash-to-close in real estate.',
    example: 'The buyer confirmed the wire transfer instructions by calling a known number before sending funds.',
  },
  'verification protocol': {
    definition: 'A documented process for verifying wire instructions and counterparty identity, such as calling a known phone number before sending funds.',
    example: 'The brokerage\'s verification protocol requires a voice call to confirm any wire instructions.',
  },
  'cybersecurity': {
    definition: 'Practices and technologies used to protect systems, networks, and data from cyberattack; a core compliance issue in real estate brokerage.',
    example: 'The brokerage invested in cybersecurity training, email authentication, and endpoint protection for all agents.',
  },
  'closing funds': {
    definition: 'The cash-to-close money a buyer brings to settlement; a prime target for wire fraud and fraudulent instructions.',
    example: 'The buyer was instructed to verify wire details by phone before sending closing funds.',
  },
  'email spoofing': {
    definition: 'The forgery of an email header so a message appears to come from a trusted sender, a common element of BEC and phishing.',
    example: 'Email spoofing of the agent\'s address tricked the buyer into opening a malicious attachment.',
  },
  'multi-factor authentication': {
    definition: 'A security control (MFA) requiring more than one form of verification, such as a password plus a one-time code, that dramatically reduces email account takeover risk.',
    example: 'After enabling multi-factor authentication on her email, the agent stopped nearly all unauthorized login attempts.',
  },

  'new construction': {
    definition: 'A home built by a builder for sale, typically sold under a builder-specific contract with its own warranty, deposit, and timeline terms.',
    example: 'The new construction purchase used the builder\'s contract rather than the standard NVAR form.',
  },
  'builder contract': {
    definition: 'A purchase contract prepared by a builder for its own homes, often heavily favoring the builder on contingencies and deposits.',
    example: 'The buyer\'s agent negotiated specific addenda to the builder contract to preserve an inspection right.',
  },
  'construction timeline': {
    definition: 'The projected schedule for site work, framing, trades, finishes, and certificate of occupancy on a new-construction home.',
    example: 'The construction timeline called for closing 180 days after contract, with status updates at each milestone.',
  },
  'builder warranty': {
    definition: 'The express warranty a builder provides on workmanship, systems, and structural elements, often tiered (for example 1-2-10) by component.',
    example: 'The builder warranty covered workmanship for one year, systems for two, and major structural defects for ten.',
  },
  'Virginia Residential Property Disclosure Act': {
    definition: 'The Virginia statute governing seller disclosures in residential resale transactions; new construction has distinct disclosure rules.',
    example: 'The Virginia Residential Property Disclosure Act required the seller to deliver the disclosure statement before ratification.',
  },
  'implied warranty of habitability': {
    definition: 'A warranty, created by Virginia law on new homes, that the dwelling is free from structural defects and suitable for habitation.',
    example: 'The implied warranty of habitability supported the buyer\'s claim when major water intrusion appeared in the first year.',
  },
  'structural warranty': {
    definition: 'The long-term portion of a builder warranty covering major structural defects, commonly for 10 years.',
    example: 'The 10-year structural warranty paid for foundation repairs discovered in year eight.',
  },
  'punch list': {
    definition: 'The list of final items needing touch-up or correction before closing on new construction, typically agreed at walk-through.',
    example: 'The punch list included paint touch-ups, a misaligned door, and a missing outlet cover.',
  },
  'certificate of occupancy': {
    definition: 'The local jurisdiction\'s certificate (CO) allowing a new home to be lawfully occupied, typically required before closing.',
    example: 'Closing was delayed two days until the county issued the certificate of occupancy.',
  },
}
