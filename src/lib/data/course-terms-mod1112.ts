// Key term definitions for Modules 11-12
// Will be merged into course-terms.ts

export interface TermDefinition {
  definition: string
  example?: string
}

export const MOD1112_TERMS: Record<string, TermDefinition> = {
  // ── Module 11, Ch1: Commercial Property Types ──────────────────────────────

  'Class A office': {
    definition: 'The top tier of office buildings, featuring prime locations, modern or recently renovated construction, top-tier finishes, and on-site professional management. Class A properties attract creditworthy national or regional tenants and command the highest rents in the market.',
    example: 'A newly built 20-story glass tower in downtown Richmond with LEED certification and a Fortune 500 law firm as primary tenant is considered Class A office space.',
  },
  'Class B office': {
    definition: 'Mid-tier office buildings offering functional space at moderate rents, often older Class A properties or newer buildings in secondary locations. Frequently targeted by investors for value-add renovation strategies.',
    example: 'A 1990s-era suburban office park in Henrico County with dated lobbies but solid infrastructure is typically marketed as Class B space to regional professional tenants.',
  },
  'Class C office': {
    definition: 'Lower-tier office buildings that are older, located in less desirable areas, and need significant capital improvements. Rents are lowest of the three classes, and capitalization rates are typically higher to compensate for elevated risk.',
    example: 'A 1960s two-story building off Midlothian Turnpike with original HVAC and outdated finishes is a Class C property leased to small service businesses.',
  },
  'anchor tenant': {
    definition: 'A large, well-known retailer whose presence in a shopping center draws foot traffic that benefits smaller tenants. Lease agreements often include co-tenancy clauses protecting smaller tenants if the anchor leaves.',
    example: 'A Kroger grocery store serves as the anchor tenant in a Chesterfield strip mall, driving customers to the adjacent nail salon, dry cleaner, and pizza shop.',
  },
  'strip mall': {
    definition: 'A small, open-air shopping center typically containing 5 to 20 storefronts, often anchored by a grocery store or pharmacy and serving a neighborhood trade area.',
    example: 'A small strip mall on West Broad Street anchored by a CVS with a Subway, dry cleaner, and tax-prep office is a classic neighborhood retail center.',
  },
  'power center': {
    definition: 'A large open-air retail center anchored by multiple big-box retailers such as home improvement stores, warehouse clubs, or category-killer retailers, usually with minimal in-line shops.',
    example: 'Short Pump Crossing with Home Depot, Best Buy, and PetSmart operates as a power center drawing shoppers from across the Richmond metro region.',
  },
  'regional mall': {
    definition: 'An enclosed shopping center of 400,000 or more square feet anchored by department stores, drawing customers from a broad trade area. Many regional malls face pressure from e-commerce and changing consumer habits.',
    example: 'Short Pump Town Center is a regional mall anchored by Nordstrom and Macy\'s, serving shoppers from across Central Virginia.',
  },
  'warehouse': {
    definition: 'An industrial building designed for bulk storage of goods, typically featuring high clear ceilings, dock-high doors, and proximity to highways or rail. A core industrial real estate asset class.',
    example: 'A 200,000-square-foot warehouse off I-95 with 32-foot clear height and 40 dock doors serves as a regional distribution hub for an e-commerce retailer.',
  },
  'distribution center': {
    definition: 'A specialized industrial facility designed for rapid movement of goods through cross-docking or pick-pack-ship operations, often located near interstates, ports, or population centers for last-mile delivery.',
    example: 'Amazon\'s fulfillment center near Richmond International Airport functions as a distribution center moving packages to doorsteps within 24 hours.',
  },
  'multifamily': {
    definition: 'Residential properties with five or more units, classified as commercial real estate for financing and investment purposes. Valued based on net operating income and governed in Virginia by the VRLTA for residential tenants.',
    example: 'A 150-unit garden-style apartment community in Henrico is a multifamily asset financed with commercial debt and managed under VRLTA rules.',
  },

  // ── Module 11, Ch1: Mixed-Use & Adaptive Reuse ──

  'mixed-use development': {
    definition: 'A property that combines two or more uses (residential, retail, office, hotel, entertainment) in a single project, either vertically within one building or horizontally across a master-planned area.',
    example: 'Scott\'s Addition in Richmond features mixed-use buildings with ground-floor breweries and restaurants beneath loft apartments.',
  },
  'adaptive reuse': {
    definition: 'The process of converting an existing building from its original use to a new use, preserving the structure while updating it for modern needs. Often used with historic buildings to unlock tax credits.',
    example: 'A former tobacco warehouse in Shockoe Bottom is converted into loft apartments with ground-floor retail through adaptive reuse.',
  },
  'horizontal mixed-use': {
    definition: 'A mixed-use project where different uses occupy separate buildings on the same site or within a master-planned district, rather than stacked within one structure.',
    example: 'A development with a freestanding office building, a retail strip, and an apartment building all sharing parking and amenities is a horizontal mixed-use project.',
  },
  'vertical mixed-use': {
    definition: 'A mixed-use building where different uses are stacked within the same structure, typically retail on the ground floor with office or residential above.',
    example: 'A five-story building with a coffee shop on the first floor, offices on floors two and three, and apartments on four and five is vertical mixed-use.',
  },
  'transit-oriented development': {
    definition: 'A mixed-use development designed around high-capacity public transit stops, emphasizing walkability, density, and reduced parking to leverage transit access.',
    example: 'A Pulse BRT station on Broad Street anchored by apartments, offices, and retail within a quarter-mile walk is transit-oriented development.',
  },
  'zoning overlay': {
    definition: 'A supplemental zoning classification placed on top of underlying zoning to impose additional standards or permit additional uses, often used to encourage historic preservation or mixed-use development.',
    example: 'The City of Richmond uses a historic zoning overlay in Jackson Ward that permits adaptive reuse of warehouses for residential conversion.',
  },
  'historic tax credits': {
    definition: 'Federal and state tax credits that offset a percentage of qualified rehabilitation expenses on certified historic structures. Virginia offers a 25% state credit that can be stacked with the 20% federal credit.',
    example: 'A developer rehabilitating a historic bank building in Richmond claims the 20% federal and 25% Virginia historic tax credits to offset renovation costs.',
  },
  'brownfield': {
    definition: 'A property whose redevelopment or reuse is complicated by actual or perceived environmental contamination from prior industrial or commercial use. Remediation grants and liability protections are often available.',
    example: 'A former gas station site along Hull Street is a brownfield requiring soil remediation before redevelopment into a retail pad.',
  },
  'highest and best use': {
    definition: 'The reasonably probable and legal use of a property that is physically possible, appropriately supported, financially feasible, and results in the highest value. A core concept in commercial appraisal.',
    example: 'An appraiser concludes that a vacant lot zoned mixed-use near a Pulse station has a highest and best use of six-story mixed-use development rather than surface parking.',
  },

  // ── Module 11, Ch1: Special-Purpose Properties ──

  'special purpose property': {
    definition: 'A property designed or built for a unique use that cannot be easily converted to other uses, such as a hotel, self-storage facility, healthcare building, church, or school. Valued using specialized techniques.',
    example: 'A 100-room limited-service hotel off I-64 is a special-purpose property valued using going-concern analysis rather than simple rent comps.',
  },
  'limited-service hotel': {
    definition: 'A hotel offering standard guest rooms with minimal amenities, typically no full-service restaurant, spa, or extensive meeting space. Common brands include Hampton Inn and Holiday Inn Express.',
    example: 'A Hampton Inn near Richmond International Airport is a limited-service hotel serving primarily business travelers with a free breakfast and no restaurant.',
  },
  'full-service hotel': {
    definition: 'A hotel with a full range of amenities including one or more restaurants, bars, room service, significant meeting and event space, and often a spa or fitness center. Higher operating complexity than limited-service.',
    example: 'The Jefferson Hotel in downtown Richmond is a full-service hotel with multiple restaurants, ballrooms, and concierge service.',
  },
  'RevPAR': {
    definition: 'Revenue Per Available Room, calculated as total room revenue divided by number of available rooms, or occupancy rate multiplied by average daily rate. The primary performance metric for hotels.',
    example: 'A 150-room hotel running 75% occupancy at a $140 ADR has a RevPAR of $105.',
  },
  'self-storage facility': {
    definition: 'A commercial property offering short-term rental of storage units to individuals and businesses, typically operating with low staffing and high margins, valued on a per-square-foot and occupancy basis.',
    example: 'A 500-unit self-storage facility in Glen Allen with climate-controlled units and drive-up access operates with one on-site manager.',
  },
  'medical office building': {
    definition: 'A commercial building designed for healthcare tenants such as physician practices, outpatient clinics, and diagnostic services, typically featuring specialized plumbing, electrical, and HVAC systems.',
    example: 'A 40,000-square-foot medical office building on the Bon Secours campus houses primary care, cardiology, and imaging practices.',
  },
  'ambulatory surgery center': {
    definition: 'A healthcare facility where outpatient surgical procedures are performed without an overnight stay. In Virginia, these facilities generally require a Certificate of Public Need from the Department of Health.',
    example: 'An orthopedic group opens an ambulatory surgery center after obtaining its Virginia Certificate of Public Need from the Department of Health.',
  },
  'going-concern value': {
    definition: 'The total value of a business operation, including real estate, personal property, and intangible business value (like brand and goodwill). Used for operating properties such as hotels and senior-living facilities.',
    example: 'A hotel\'s sale price of $15 million reflects going-concern value encompassing the building, FF&E, and the franchise relationship with Marriott.',
  },
  'franchise agreement': {
    definition: 'A contract granting the right to operate a business under a brand, imposing operating standards, fees, and marketing contributions. For hotels, flag affiliation heavily influences property value and financing.',
    example: 'A hotel owner signs a 20-year Hilton franchise agreement that requires property improvement plans, reservation system fees, and royalty payments.',
  },
  'certificate of need': {
    definition: 'A Virginia Department of Health approval required before establishing or expanding certain healthcare facilities, including ambulatory surgery centers, nursing homes, and imaging centers. Also called a COPN.',
    example: 'A developer cannot build a new nursing home in Chesterfield until the state issues a Certificate of Public Need demonstrating community demand.',
  },

  // ── Module 11, Ch1: Commercial vs. Residential Valuation ──

  'capitalization rate': {
    definition: 'The ratio of a property\'s net operating income to its current market value, expressed as a percentage. Cap rate is the primary metric for comparing commercial investments within a market.',
    example: 'A retail center generating $500,000 NOI that sells for $6.25 million trades at an 8% cap rate.',
  },
  'net operating income': {
    definition: 'A property\'s gross rental income and other income minus operating expenses, but before debt service, depreciation, and income taxes. The numerator of the cap rate formula.',
    example: 'An office building with $1.2 million gross income and $400,000 operating expenses produces $800,000 in NOI.',
  },
  'income approach': {
    definition: 'A commercial appraisal method that values property based on its ability to produce income, either through direct capitalization of NOI or discounted cash flow analysis. Primary approach for income-producing commercial property.',
    example: 'An appraiser values an apartment complex using the income approach by dividing stabilized NOI by the market cap rate.',
  },
  'sales comparison approach': {
    definition: 'An appraisal method that values property by comparing it to recent sales of similar properties, adjusting for differences. More reliable for residential than for unique commercial properties.',
    example: 'An appraiser values a small office condo by adjusting the sale prices of three comparable condos sold within the last six months.',
  },
  'cost approach': {
    definition: 'An appraisal method that values property as the cost to reproduce or replace improvements minus depreciation, plus land value. Most useful for new, unique, or special-purpose buildings.',
    example: 'A newly built church is appraised using the cost approach because there are few comparable sales and no income stream.',
  },
  'gross rent multiplier': {
    definition: 'A shortcut ratio comparing property value to gross rental income, calculated as sale price divided by annual gross rent. Used as a quick screening tool, especially for small residential income property.',
    example: 'A fourplex selling for $480,000 with $60,000 annual gross rent has a GRM of 8.',
  },
  'debt service coverage ratio': {
    definition: 'The ratio of a property\'s NOI to its annual debt service, measuring a property\'s ability to cover loan payments. Commercial lenders typically require a DSCR of 1.20 to 1.30 or higher.',
    example: 'A property with $300,000 NOI and $240,000 annual debt service has a DSCR of 1.25, satisfying most bank underwriting.',
  },
  'cash-on-cash return': {
    definition: 'A simple return metric calculated as annual pre-tax cash flow divided by total cash invested. Measures the cash yield on actual equity dollars rather than total property value.',
    example: 'An investor puts $500,000 of equity into a property generating $50,000 of annual cash flow after debt service, for a 10% cash-on-cash return.',
  },
  'price per square foot': {
    definition: 'A valuation benchmark calculated as sale price divided by rentable square footage. Useful for comparing similar properties but ignores income and operating performance.',
    example: 'A 50,000-square-foot industrial building selling for $7.5 million trades at $150 per square foot.',
  },
  'stabilized NOI': {
    definition: 'The net operating income a property is projected to produce once occupancy and rents reach market-level stabilization, typically 90-95% occupancy. Used to value properties currently in lease-up or repositioning.',
    example: 'A newly renovated building at 60% occupancy is underwritten to a stabilized NOI of $900,000 assuming 93% occupancy at market rents.',
  },

  // ── Module 11, Ch2: Gross, Net, and Triple Net Leases ──

  'gross lease': {
    definition: 'A lease in which the tenant pays a single flat rent and the landlord pays all operating expenses (taxes, insurance, maintenance, utilities). Most common in office and multifamily.',
    example: 'A tenant leases office space for $25 per square foot on a gross basis; the landlord pays property taxes, insurance, and common-area utilities.',
  },
  'full-service lease': {
    definition: 'A type of gross lease where the landlord provides all building services including janitorial, utilities, and maintenance within the flat rental rate. Standard for Class A multi-tenant office buildings.',
    example: 'A law firm signs a full-service lease at $32/SF where the landlord handles everything from nightly cleaning to HVAC maintenance.',
  },
  'net lease': {
    definition: 'A lease in which the tenant pays base rent plus some or all operating expenses. Net leases are categorized as single net, double net, or triple net depending on which expenses transfer.',
    example: 'A retail tenant signs a net lease paying $20/SF base rent plus its share of property taxes.',
  },
  'single net lease': {
    definition: 'A lease in which the tenant pays base rent plus property taxes, while the landlord pays insurance and maintenance. Also called an N lease.',
    example: 'A small retailer pays base rent plus its pro rata share of real estate taxes under a single net lease.',
  },
  'double net lease': {
    definition: 'A lease in which the tenant pays base rent plus property taxes and insurance, while the landlord covers structural maintenance. Also called NN lease.',
    example: 'A tenant signs a double net lease paying base rent plus its share of taxes and property insurance premiums.',
  },
  'triple net lease': {
    definition: 'A lease in which the tenant pays base rent plus property taxes, insurance, and maintenance (CAM). Common in single-tenant retail and industrial buildings.',
    example: 'A Starbucks drive-thru signs a 10-year triple net lease, paying base rent plus all taxes, insurance, and maintenance on the building and site.',
  },
  'NNN lease': {
    definition: 'Shorthand for a triple net lease, where the tenant reimburses the landlord for all three major operating expense categories.',
    example: 'Investors prefer NNN leased properties because operating expense risk and expense variability are passed through to the tenant.',
  },
  'absolute net lease': {
    definition: 'The most tenant-intensive lease, where the tenant is responsible for all expenses including structural repairs and roof replacement. The landlord\'s only obligation is to receive rent.',
    example: 'A credit-rated dollar store signs a 20-year absolute net lease taking on all risks including roof, foundation, and parking lot replacement.',
  },
  'base rent': {
    definition: 'The minimum contractual rent paid by a tenant, exclusive of operating expenses, percentage rent, or other additional charges.',
    example: 'A tenant\'s base rent of $20/SF on a 5,000 SF space produces $100,000 annual base rent, separate from CAM reimbursements.',
  },
  'operating expenses': {
    definition: 'The recurring costs of operating a commercial property, including real estate taxes, insurance, utilities, janitorial, management, landscaping, and routine repairs. Excludes debt service and capital expenditures.',
    example: 'An office building\'s operating expenses totaling $8/SF are passed through to tenants on a pro rata basis under a net lease.',
  },

  // ── Module 11, Ch2: Percentage Leases & Escalation Clauses ──

  'percentage lease': {
    definition: 'A retail lease requiring the tenant to pay a percentage of gross sales above a specified breakpoint, in addition to base rent. Aligns landlord and tenant interests around sales performance.',
    example: 'A mall tenant pays $30/SF base rent plus 6% of gross sales above a $2 million breakpoint.',
  },
  'breakpoint': {
    definition: 'The sales threshold above which percentage rent begins in a retail lease. Can be set naturally or artificially based on negotiations.',
    example: 'A tenant with a $1.5 million sales breakpoint pays no percentage rent until sales exceed $1.5 million, then pays a percentage on every dollar above that.',
  },
  'natural breakpoint': {
    definition: 'A breakpoint calculated as annual base rent divided by the percentage rate, resulting in a sales level where percentage rent would equal base rent.',
    example: 'With $100,000 base rent and a 5% percentage rate, the natural breakpoint is $2 million in annual sales.',
  },
  'artificial breakpoint': {
    definition: 'A negotiated breakpoint that is higher or lower than the natural breakpoint. Often used to give tenants a break during ramp-up or to accelerate percentage rent to the landlord.',
    example: 'A new restaurant negotiates an artificial breakpoint of $3 million, above the $2.2 million natural breakpoint, to give it room to build sales.',
  },
  'gross sales': {
    definition: 'The total revenue of a retail tenant before deductions, used to calculate percentage rent. The lease typically specifies exclusions such as returns, sales tax, and employee discounts.',
    example: 'A boutique reports $1.8 million in gross sales to the landlord, with sales tax and merchandise returns excluded per the lease definition.',
  },
  'escalation clause': {
    definition: 'A lease provision that periodically increases base rent to keep pace with inflation or market rents. Common forms include CPI, fixed percentage, and market adjustments.',
    example: 'An office lease includes a 3% annual escalation clause, raising rent from $25 to $25.75/SF in year two.',
  },
  'CPI adjustment': {
    definition: 'An escalation tied to changes in the Consumer Price Index, adjusting rent based on published inflation data. Often capped or floored to limit volatility.',
    example: 'A lease with a CPI adjustment raises rent by 4.2% in a year the relevant CPI index rises 4.2%, subject to a 5% ceiling.',
  },
  'step-up lease': {
    definition: 'A lease with predetermined rent increases at specific intervals, providing certainty for both parties without relying on external indices.',
    example: 'A 5-year step-up lease starts at $20/SF, rising to $21 in year three and $22 in year five.',
  },
  'fixed increase': {
    definition: 'An escalation clause providing a set percentage or dollar increase at scheduled intervals, regardless of inflation or market conditions.',
    example: 'A lease with a fixed 2.5% annual increase raises rent by the same percentage every year whether inflation is 1% or 7%.',
  },
  'Consumer Price Index': {
    definition: 'A federal government index published by the Bureau of Labor Statistics measuring average price changes for a basket of consumer goods and services. Common reference point for lease escalations.',
    example: 'A CPI-U (All Urban Consumers) index reading of 310 compared to the prior year\'s 300 supports a 3.3% lease escalation.',
  },

  // ── Module 11, Ch2: CAM Charges ──

  'Common Area Maintenance': {
    definition: 'Expenses for maintaining shared areas of a commercial property such as parking lots, lobbies, landscaping, and hallways, typically passed through to tenants in net leases.',
    example: 'A shopping center\'s Common Area Maintenance budget covers parking lot sweeping, landscaping, security, and shared lighting.',
  },
  'CAM charges': {
    definition: 'The tenant\'s pro rata share of common area maintenance expenses, billed monthly as estimates and reconciled annually to actual costs.',
    example: 'A tenant occupying 5% of a shopping center pays 5% of the CAM budget, roughly $1,200 per month in estimated charges.',
  },
  'pro rata share': {
    definition: 'A tenant\'s proportional share of expenses or common costs, typically calculated as the tenant\'s rentable square footage divided by the building\'s total rentable area.',
    example: 'A tenant leasing 10,000 SF in a 100,000 SF building has a 10% pro rata share of CAM and taxes.',
  },
  'rentable square footage': {
    definition: 'The total square footage for which a tenant pays rent, including its usable space plus a share of common areas such as lobbies and restrooms. Higher than usable square footage.',
    example: 'A tenant\'s rentable square footage of 5,400 SF includes 5,000 SF of usable office plus a 400 SF load factor share of the lobby and corridors.',
  },
  'usable square footage': {
    definition: 'The actual square footage a tenant can occupy and use within its leased premises, measured wall-to-wall inside the space.',
    example: 'A suite with 5,000 usable square feet measures the actual walls of the tenant\'s private offices, conference rooms, and reception area.',
  },
  'load factor': {
    definition: 'The percentage added to usable square footage to arrive at rentable square footage, reflecting the tenant\'s share of common areas. Also called an add-on or R/U ratio.',
    example: 'A Class A tower with an 18% load factor adds 900 SF of common area to a tenant with 5,000 usable SF, yielding 5,900 rentable SF.',
  },
  'CAM reconciliation': {
    definition: 'The annual accounting process where landlords compare estimated CAM billings to actual expenses, refunding tenants for overbillings or collecting shortfalls.',
    example: 'A tenant receives a $2,400 credit on its January rent after the CAM reconciliation shows it overpaid against actual expenses last year.',
  },
  'controllable expenses': {
    definition: 'CAM expenses the landlord can influence through operational decisions, such as janitorial, landscaping, and management fees. Often subject to a negotiated annual cap.',
    example: 'A tenant negotiates a 5% annual cap on controllable expenses so that landscaping costs cannot spike without limit.',
  },
  'non-controllable expenses': {
    definition: 'CAM expenses outside the landlord\'s direct control, including taxes, insurance premiums, and utilities. Typically excluded from expense caps.',
    example: 'A sudden property tax reassessment drives up a tenant\'s non-controllable expenses despite an existing CAM cap.',
  },
  'CAM cap': {
    definition: 'A negotiated limit on how much CAM charges can increase year over year, protecting tenants from runaway expense escalation.',
    example: 'A lease with a 4% CAM cap on controllable expenses prevents the landlord from passing through more than a 4% annual increase.',
  },

  // ── Module 11, Ch2: Lease Negotiation (TI, Free Rent, Options) ──

  'tenant improvement allowance': {
    definition: 'A dollar amount the landlord contributes toward customizing a leased space for a tenant, typically expressed as a dollar figure per rentable square foot. Usually negotiated based on lease term and credit.',
    example: 'A landlord offers a $50/SF tenant improvement allowance on a 10-year lease so the tenant can build out offices and conference rooms.',
  },
  'TI allowance': {
    definition: 'The shortened term for tenant improvement allowance, the money the landlord spends or reimburses to build out tenant space.',
    example: 'On a 5,000 SF lease with a $40/SF TI allowance, the tenant has $200,000 to design and build its suite.',
  },
  'build-out': {
    definition: 'The construction work to customize a commercial space for a tenant\'s specific needs, including walls, finishes, electrical, plumbing, and HVAC distribution.',
    example: 'A dental office build-out requires specialized plumbing, electrical, and cabinetry that is more expensive than a standard office fit-out.',
  },
  'vanilla shell': {
    definition: 'A basic, unfinished commercial space delivered with sealed concrete floors, minimal walls, a single HVAC unit, and basic utilities brought to the space. The tenant completes most of the build-out.',
    example: 'A new strip-center space is delivered in vanilla shell condition, and the tenant uses its TI allowance to add flooring, lighting, and interior walls.',
  },
  'turnkey build-out': {
    definition: 'A build-out arrangement where the landlord fully completes the tenant\'s space according to agreed plans, ready to occupy on day one. Tenant pays no separate buildout costs.',
    example: 'A national franchise signs a turnkey build-out deal, and the landlord delivers a fully finished, move-in ready suite including fixtures.',
  },
  'free rent': {
    definition: 'A negotiated period at the beginning of a lease during which no base rent is paid, used as an incentive to attract tenants or offset moving/build-out costs.',
    example: 'A tenant signs a 5-year lease with three months of free rent, reducing its effective rent over the term.',
  },
  'abated rent': {
    definition: 'Rent that is waived, reduced, or deferred during a specified period of the lease. Functionally similar to free rent and used as a concession.',
    example: 'A tenant receives six months of abated rent while construction is underway, paying full rent only after taking occupancy.',
  },
  'option to renew': {
    definition: 'A negotiated right giving the tenant the ability, but not the obligation, to extend the lease for an additional defined term at a stipulated rent or a market rate.',
    example: 'A 10-year lease includes two five-year options to renew at 95% of fair market rent, giving the tenant 20 years of potential occupancy.',
  },
  'option to expand': {
    definition: 'A lease provision granting the tenant the right to take on additional adjacent space under defined terms, giving the tenant room to grow.',
    example: 'A growing tech company secures an option to expand into the neighboring 3,000 SF suite during year three at the same rental rate.',
  },
  'right of first refusal': {
    definition: 'A lease right allowing the tenant to match any bona fide offer the landlord receives for specified space before the landlord can lease or sell it to a third party.',
    example: 'A retailer with a right of first refusal on the adjacent suite gets 10 days to match a competing tenant\'s offer before losing the space.',
  },

  // ── Module 11, Ch3: Direct Ownership vs. Syndication ──

  'direct ownership': {
    definition: 'Holding title to real estate directly in an individual\'s or entity\'s name, giving the owner full control over decisions, cash flow, and exit timing but concentrating risk and management burden.',
    example: 'An investor buys a duplex in Church Hill in her personal name, collecting rent and managing repairs as a direct owner.',
  },
  'syndication': {
    definition: 'An investment structure pooling capital from multiple investors (limited partners) under the management of a sponsor (general partner) to acquire and operate real estate too large for any single investor.',
    example: 'A sponsor forms a syndication pooling $5 million from 20 investors to acquire a 100-unit apartment complex in Henrico.',
  },
  'general partner': {
    definition: 'The managing partner in a real estate partnership or syndication who makes operational decisions, handles day-to-day management, and bears unlimited liability. Also called the sponsor.',
    example: 'A general partner manages property operations, executes the business plan, and communicates with limited-partner investors.',
  },
  'limited partner': {
    definition: 'A passive investor in a real estate partnership whose liability is limited to the capital invested and who has no management authority over the partnership.',
    example: 'A doctor invests $250,000 as a limited partner in an apartment syndication, earning preferred returns without managing the property.',
  },
  'limited liability company': {
    definition: 'A business entity combining pass-through taxation with liability protection, commonly used as the ownership vehicle for real estate investments. Governed by an operating agreement.',
    example: 'Investors form a Virginia LLC to hold title to a retail strip center, shielding personal assets while electing partnership tax treatment.',
  },
  'operating agreement': {
    definition: 'The governing document of an LLC that defines member rights, management structure, capital contributions, distributions, and dissolution procedures. The LLC equivalent of a partnership agreement.',
    example: 'The operating agreement specifies that the manager makes daily decisions but needs member approval for any sale or refinance above $1 million.',
  },
  'capital stack': {
    definition: 'The layered structure of debt and equity financing a real estate project, typically arranged from senior debt at the bottom to common equity at the top, reflecting seniority and risk.',
    example: 'A $20 million deal\'s capital stack includes a $13 million senior loan, $3 million mezzanine debt, $2 million preferred equity, and $2 million common equity.',
  },
  'preferred return': {
    definition: 'A priority return paid to investors before the sponsor receives any carried interest or promote. Typically a specified annual percentage such as 7% or 8%.',
    example: 'Limited partners receive an 8% preferred return on invested capital before the sponsor shares in remaining profits.',
  },
  'promote': {
    definition: 'The disproportionate share of profits a sponsor receives above a specified return hurdle, rewarding successful execution of the business plan. Also called carried interest.',
    example: 'After limited partners receive their 8% preferred return, the sponsor collects a 20% promote on remaining profits.',
  },
  'waterfall distribution': {
    definition: 'A tiered structure for distributing cash flow and sale proceeds, directing money through successive hurdles (return of capital, preferred return, catch-up, promote splits).',
    example: 'The waterfall returns all investor capital first, then pays an 8% preferred return, then splits profits 80/20 between LPs and the sponsor.',
  },

  // ── Module 11, Ch3: REITs ──

  'REIT': {
    definition: 'A company that owns or finances income-producing real estate and qualifies under IRS rules for pass-through taxation by distributing at least 90% of taxable income as dividends.',
    example: 'A publicly traded REIT owns 200 apartment communities and distributes 95% of its taxable income to shareholders each quarter.',
  },
  'Real Estate Investment Trust': {
    definition: 'The full legal term for a REIT, a tax-advantaged corporate structure that allows investors to own a share of large real estate portfolios through publicly traded or private securities.',
    example: 'A Real Estate Investment Trust offers retail investors exposure to commercial real estate without the need to own property directly.',
  },
  'equity REIT': {
    definition: 'A REIT that owns and operates income-producing real estate, deriving most of its revenue from rents. The most common type of REIT.',
    example: 'An equity REIT specializing in industrial warehouses collects rent from logistics tenants across 40 states.',
  },
  'mortgage REIT': {
    definition: 'A REIT that invests in real estate debt by originating or purchasing mortgages and mortgage-backed securities, earning income from interest rate spreads.',
    example: 'A mortgage REIT borrows short-term and invests in long-term agency MBS, earning spread income sensitive to interest rate changes.',
  },
  'hybrid REIT': {
    definition: 'A REIT that invests in both real estate properties and mortgages, combining features of equity and mortgage REITs.',
    example: 'A hybrid REIT owns a portfolio of apartments and also holds mezzanine loans on other apartment properties.',
  },
  'public REIT': {
    definition: 'A REIT whose shares are registered with the SEC and traded on a national stock exchange, offering daily liquidity and price transparency.',
    example: 'An investor buys shares of a public REIT on the NYSE through a brokerage account, selling them anytime the market is open.',
  },
  'non-traded REIT': {
    definition: 'A REIT registered with the SEC but not listed on an exchange, typically offering limited liquidity, higher fees, and defined holding periods.',
    example: 'A non-traded REIT offers quarterly share redemptions subject to limits and only allows exit through a future liquidity event.',
  },
  'private REIT': {
    definition: 'A REIT that is not registered with the SEC and is offered only to accredited or institutional investors through private placements. Least liquid REIT structure.',
    example: 'A private REIT raises $500 million from pension funds and accredited investors to acquire a portfolio of medical office buildings.',
  },
  'dividend distribution requirement': {
    definition: 'The IRS rule requiring REITs to distribute at least 90% of taxable income to shareholders each year to maintain their tax-advantaged status.',
    example: 'To satisfy the dividend distribution requirement, a REIT declares a year-end special dividend to ensure it distributes at least 90% of taxable income.',
  },
  'UPREIT': {
    definition: 'An Umbrella Partnership REIT structure where the REIT owns its properties through an operating partnership, allowing property owners to contribute real estate in exchange for OP units on a tax-deferred basis.',
    example: 'An apartment owner contributes a 300-unit property to an UPREIT in exchange for operating partnership units, deferring capital gains tax.',
  },

  // ── Module 11, Ch3: Crowdfunding & Private Equity ──

  'real estate crowdfunding': {
    definition: 'An online capital-raising method pooling small investments from many individuals to fund real estate deals, enabled by the JOBS Act and SEC rules.',
    example: 'A sponsor lists a $3 million raise on a real estate crowdfunding platform, attracting 200 investors with $5,000 to $50,000 commitments each.',
  },
  'Regulation D': {
    definition: 'SEC rules under Regulation D (506(b) and 506(c)) that provide exemptions from full securities registration for private placements, widely used in real estate syndications. 506(c) allows general solicitation if all investors are verified accredited.',
    example: 'A sponsor conducts a Rule 506(c) offering, publicly advertising the deal but verifying that every investor is accredited.',
  },
  'Regulation A+': {
    definition: 'An SEC exemption allowing companies to raise up to $75 million from non-accredited investors through a mini-IPO style offering. Requires SEC qualification and ongoing reporting.',
    example: 'A real estate platform uses Regulation A+ to raise capital from retail investors nationwide with a $1,000 minimum investment.',
  },
  'Regulation CF': {
    definition: 'An SEC exemption under Regulation Crowdfunding allowing companies to raise up to $5 million annually from non-accredited investors through registered funding portals.',
    example: 'A small apartment sponsor uses Regulation CF to raise $1 million from 500 retail investors through a registered crowdfunding portal.',
  },
  'accredited investor': {
    definition: 'An individual or entity meeting SEC-defined wealth, income, or professional criteria (such as $1M+ net worth excluding primary residence or $200K+ income). Eligible to invest in unregistered offerings.',
    example: 'An investor with $500,000 annual income qualifies as accredited and can participate in private 506(c) real estate syndications.',
  },
  'private equity fund': {
    definition: 'A pooled investment vehicle that acquires real estate, typically structured as a limited partnership with a defined investment period, hold period, and target return. Sponsored by a general partner.',
    example: 'A private equity real estate fund raises $500 million over 18 months and deploys capital across value-add multifamily acquisitions over four years.',
  },
  'blind pool': {
    definition: 'A fund structure where investors commit capital without knowing which specific properties will be acquired, relying on the sponsor\'s strategy and track record.',
    example: 'Investors commit $250 million to a blind pool fund trusting the sponsor to identify industrial acquisitions within a defined investment strategy.',
  },
  'specified pool': {
    definition: 'A fund or offering where the specific property or properties to be acquired are identified before investors commit capital, reducing execution risk.',
    example: 'A specified pool offering raises capital to acquire a single 250-unit apartment complex already under contract.',
  },
  'fund of funds': {
    definition: 'An investment fund that invests in other real estate funds rather than directly in property, offering diversification across sponsors and strategies but adding a layer of fees.',
    example: 'A fund of funds allocates $100 million across 10 real estate private equity funds covering multifamily, industrial, and office strategies.',
  },
  'capital call': {
    definition: 'A formal request by a fund or partnership for committed investors to send in a portion of their unfunded capital commitment. Missing a capital call can carry serious penalties.',
    example: 'Limited partners receive a capital call requesting 20% of their commitment to fund an acquisition closing in 30 days.',
  },

  // ── Module 11, Ch3: Risk Assessment ──

  'market risk': {
    definition: 'The risk that broader market conditions (economic cycles, supply/demand changes, cap rate movement) will negatively affect property value or income.',
    example: 'A hotel owner faces market risk when a recession causes a drop in business travel and corresponding decline in RevPAR.',
  },
  'interest rate risk': {
    definition: 'The risk that rising interest rates will increase debt costs on refinancing, reduce property values by compressing cap rate spreads, or reduce buyer demand.',
    example: 'An investor with a 5-year loan maturing faces interest rate risk if rates rise 200 basis points before refinancing.',
  },
  'liquidity risk': {
    definition: 'The risk that an investor cannot sell a property quickly without accepting a significant price discount. Real estate is relatively illiquid compared to stocks or bonds.',
    example: 'A partner needing cash quickly faces liquidity risk when attempting to sell an office building during a slow market cycle.',
  },
  'management risk': {
    definition: 'The risk that poor property management or asset management decisions reduce performance. Often a core risk in sponsor-led deals.',
    example: 'An apartment owner faces management risk when a mismanaged lease-up drives occupancy below pro forma assumptions.',
  },
  'tenant risk': {
    definition: 'The risk that a tenant defaults, vacates, or becomes unable to pay rent, reducing property income. Concentration in a single tenant amplifies this risk.',
    example: 'A single-tenant building faces elevated tenant risk if the one occupant files bankruptcy or relocates.',
  },
  'environmental risk': {
    definition: 'The risk of contamination or environmental conditions requiring costly remediation or creating liability exposure. Usually managed through Phase I environmental assessments.',
    example: 'A buyer orders a Phase I environmental study before closing to identify environmental risk from a former dry cleaner tenant.',
  },
  'leverage risk': {
    definition: 'The risk that debt amplifies losses when property performance underperforms, potentially wiping out equity. Higher leverage increases both upside and downside.',
    example: 'An 80% LTV borrower faces leverage risk when a 15% drop in property value eliminates 75% of equity.',
  },
  'regulatory risk': {
    definition: 'The risk that changes in laws, zoning, tax policy, or regulations negatively affect property value or operations. Includes rent control, zoning downzoning, and tax increases.',
    example: 'Apartment owners face regulatory risk if a municipality adopts rent control limiting annual rent increases.',
  },
  'risk-adjusted return': {
    definition: 'Investment return evaluated in the context of risk taken, often measured through metrics like Sharpe ratio or by comparing returns to alternatives with similar risk profiles.',
    example: 'A value-add deal targeting 18% IRR with moderate risk may offer a better risk-adjusted return than a development targeting 22% IRR with higher risk.',
  },
  'sensitivity analysis': {
    definition: 'Financial modeling that varies key assumptions (rent, vacancy, exit cap rate) to measure the impact on returns, helping investors understand downside scenarios.',
    example: 'A sensitivity analysis shows that a 100-basis-point rise in exit cap rate would reduce projected IRR from 15% to 9%.',
  },

  // ── Module 11, Ch4: VA Property Management Licensing ──

  'property management': {
    definition: 'The business of leasing, operating, and maintaining real estate on behalf of owners. In Virginia, activities such as leasing and rent collection for third parties require a real estate license.',
    example: 'A Virginia property management firm leases units, collects rent, and handles maintenance for 50 absentee owners of single-family rentals.',
  },
  'common interest community manager': {
    definition: 'A firm or individual licensed by Virginia\'s Common Interest Community Board (CICB) to manage condominium, cooperative, or HOA communities. Separate licensure from a real estate broker license.',
    example: 'A common interest community manager oversees reserve planning, assessments, and vendor contracts for a 400-unit condominium in Richmond.',
  },
  'CIC manager': {
    definition: 'Shorthand for common interest community manager, a Virginia-licensed professional who manages condos, cooperatives, and HOAs under CICB regulations.',
    example: 'The HOA retains a CIC manager registered with DPOR to handle monthly assessments and governance compliance.',
  },
  'VREB': {
    definition: 'The Virginia Real Estate Board, the state agency within DPOR that licenses and regulates real estate salespersons, brokers, and firms, including property management activities.',
    example: 'The VREB issues the salesperson and broker licenses required to conduct property management for third parties in Virginia.',
  },
  'principal broker': {
    definition: 'The Virginia broker designated as responsible for a brokerage firm\'s licensing, supervision of affiliated licensees, escrow management, and overall regulatory compliance.',
    example: 'The principal broker is named on the firm license and personally answers to the VREB for any trust account or supervision violation.',
  },
  'managing broker': {
    definition: 'A Virginia broker designated to supervise a branch office or specific group of licensees, assisting the principal broker with compliance and day-to-day supervision.',
    example: 'The Richmond office\'s managing broker reviews contracts, trains new agents, and reports up to the firm\'s principal broker.',
  },
  'DPOR': {
    definition: 'The Virginia Department of Professional and Occupational Regulation, the umbrella agency housing the Real Estate Board, Common Interest Community Board, Appraiser Board, and related licensing boards.',
    example: 'A licensee renews her real estate license through DPOR\'s online portal each two-year cycle.',
  },
  'property manager license exemption': {
    definition: 'Narrow statutory exemptions from Virginia licensing for certain property management activities, such as a salaried on-site residential employee performing limited tasks for one owner.',
    example: 'A salaried on-site apartment manager working exclusively for the property owner may qualify for a property manager license exemption under Virginia law.',
  },
  'on-site manager': {
    definition: 'An employee working on the premises of a single property performing leasing and management functions for the property owner, potentially exempt from licensing when acting strictly within statutory parameters.',
    example: 'An on-site manager at a single apartment community signs leases and collects rent only for that property as a W-2 employee of the owner.',
  },
  'Virginia Property Owners Association Act': {
    definition: 'Virginia statute (Title 55.1, Chapter 18) governing property owners\' associations, including HOA formation, disclosure packets, assessments, and board duties. Complements the Condominium Act.',
    example: 'Sellers in a Virginia HOA must deliver a POA disclosure packet prepared under the Virginia Property Owners Association Act before settlement.',
  },

  // ── Module 11, Ch4: Management Agreements & Fiduciary Duties ──

  'property management agreement': {
    definition: 'A written contract between a property owner and a property manager defining scope of authority, fees, duration, reporting, and termination. Required by VREB regulations for licensed property managers.',
    example: 'A property management agreement authorizes the manager to lease units up to a capped rent, approve repairs up to $500, and remit net proceeds monthly.',
  },
  'fiduciary duty': {
    definition: 'The highest duty of loyalty, care, disclosure, and obedience owed by an agent to a principal, including a property manager to the owner. Breach may trigger VREB discipline and civil liability.',
    example: 'A property manager\'s fiduciary duty prevents her from receiving undisclosed kickbacks from a vendor she selects for the owner\'s property.',
  },
  'duty of loyalty': {
    definition: 'A fiduciary duty requiring the agent to put the principal\'s interests ahead of the agent\'s own or any third party\'s interests, avoiding self-dealing and conflicts.',
    example: 'A property manager breaches the duty of loyalty by leasing a vacant unit to her own family member below market without disclosure.',
  },
  'duty of care': {
    definition: 'The fiduciary duty to act with the competence, diligence, and skill a reasonable professional would exercise under similar circumstances.',
    example: 'A property manager exercising duty of care obtains multiple bids before approving a $20,000 roof repair for the owner.',
  },
  'duty to account': {
    definition: 'A fiduciary obligation to keep accurate records of all funds handled on behalf of the principal and to promptly deliver statements and remit balances.',
    example: 'A property manager meets the duty to account by delivering monthly owner statements showing every rent, expense, and escrow transaction.',
  },
  'trust account': {
    definition: 'A separate bank account, segregated from operating funds, used to hold client funds such as tenant security deposits and rent collected for owners. Required by VREB regulations.',
    example: 'A property manager deposits tenant security deposits into a designated trust account and never mixes them with the firm\'s operating cash.',
  },
  'escrow account': {
    definition: 'A bank account holding funds on behalf of another for a specific purpose. In property management, rent, deposits, and HOA reserves are often held in escrow accounts.',
    example: 'A property manager holds tenant security deposits in an escrow account labeled as a fiduciary account.',
  },
  'commingling': {
    definition: 'The prohibited practice of mixing client funds with the broker\'s personal or operating funds. One of the most common causes of VREB discipline and license revocation.',
    example: 'A manager commits commingling by depositing owner rent into the firm\'s operating account instead of the trust account.',
  },
  'conversion': {
    definition: 'The illegal use of client funds for the broker\'s or firm\'s own purposes. A serious license law violation that may also be a criminal offense.',
    example: 'A broker commits conversion by using security deposit funds from the trust account to pay her personal mortgage.',
  },
  'scope of authority': {
    definition: 'The defined limits of what a property manager may do on the owner\'s behalf, established in the management agreement. Acting outside scope can breach contract and fiduciary duty.',
    example: 'A manager\'s scope of authority permits repairs up to $500, so the $3,000 HVAC replacement requires owner approval.',
  },

  // ── Module 11, Ch4: Tenant Relations & Reporting ──

  'tenant screening': {
    definition: 'The process of evaluating rental applicants using credit, income, rental history, and background checks. Must comply with fair housing, FCRA, and Virginia-specific requirements.',
    example: 'A property manager completes tenant screening by pulling credit, verifying employment, and checking prior landlord references before approving an applicant.',
  },
  'fair housing compliance': {
    definition: 'Adherence to federal, Virginia, and local fair housing laws prohibiting discrimination based on protected classes throughout advertising, screening, leasing, and tenancy.',
    example: 'Fair housing compliance requires the manager to apply the same screening criteria to every applicant regardless of race, source of income, or familial status.',
  },
  'preventive maintenance': {
    definition: 'Scheduled, proactive maintenance activities performed to avoid equipment failure and prolong useful life, such as seasonal HVAC servicing and roof inspections.',
    example: 'A property manager schedules semi-annual HVAC preventive maintenance on each apartment unit to avoid mid-summer breakdowns.',
  },
  'corrective maintenance': {
    definition: 'Repair work performed after a problem occurs, returning equipment or a component to working condition. Reactive rather than preventive.',
    example: 'A tenant\'s leaking water heater requires corrective maintenance, and the manager dispatches a plumber the same day.',
  },
  'deferred maintenance': {
    definition: 'Maintenance and repairs that have been postponed beyond their appropriate service interval, often reducing property value and leading to larger future costs.',
    example: 'A building with 10 years of deferred maintenance needs a new roof, parking lot resurfacing, and HVAC replacement before it can be sold at market value.',
  },
  'capital expenditure': {
    definition: 'A significant expense for a long-lived asset that extends the useful life of the property, such as a new roof, HVAC system, or parking lot. Typically depreciated rather than expensed.',
    example: 'A $120,000 roof replacement is a capital expenditure funded from the owner\'s reserve account.',
  },
  'operating budget': {
    definition: 'An annual financial plan projecting property income and expenses, guiding management decisions and performance measurement throughout the year.',
    example: 'A property manager submits an operating budget in November projecting $1.4 million in rental income and $600,000 in expenses for the coming year.',
  },
  'reserve fund': {
    definition: 'Money set aside for future capital repairs and replacements, ensuring the owner or HOA can fund major expenditures without special assessments or emergency debt.',
    example: 'A condo association contributes $50,000 annually to its reserve fund to cover upcoming roof and elevator replacements.',
  },
  'rent roll': {
    definition: 'A report listing every unit or tenant at a property with key lease data: tenant name, unit, rent, lease dates, deposits, and status. Essential for due diligence and financing.',
    example: 'A buyer reviews the current rent roll during due diligence to verify in-place rent, lease expirations, and delinquencies.',
  },
  'vacancy rate': {
    definition: 'The percentage of units or square footage in a property that is unoccupied, measured as a point-in-time or average over a period. A key performance metric.',
    example: 'An apartment community with 8 vacant units out of 200 has a 4% vacancy rate.',
  },

  // ── Module 12, Ch1: Errors & Omissions Insurance ──

  'Errors and Omissions insurance': {
    definition: 'Professional liability insurance that protects real estate licensees and firms from claims of negligent acts, errors, or omissions in performing professional services. Strongly recommended in Virginia.',
    example: 'An Errors and Omissions policy pays the attorney fees and settlement when a buyer sues an agent for failing to disclose a material defect.',
  },
  'E&O insurance': {
    definition: 'The common abbreviation for Errors and Omissions insurance, which covers real estate licensees against professional negligence claims.',
    example: 'Most Virginia firms require affiliated agents to carry E&O insurance as a condition of affiliation.',
  },
  'professional liability': {
    definition: 'Legal liability arising out of negligent performance of professional services, distinct from general liability for bodily injury or property damage.',
    example: 'An agent\'s misstatement about property boundaries creates professional liability exposure covered by an E&O policy.',
  },
  'claims-made policy': {
    definition: 'A liability policy that covers claims first made against the insured during the policy period, regardless of when the incident occurred, as long as the incident happened after the retroactive date.',
    example: 'A claims-made policy covers a lawsuit filed during the current policy term over advice the agent gave two years ago, provided the retroactive date predates the advice.',
  },
  'occurrence policy': {
    definition: 'A liability policy that covers incidents occurring during the policy period, regardless of when the claim is filed. Less common for real estate E&O than claims-made coverage.',
    example: 'An occurrence policy from five years ago still covers an incident from that policy period, even if a lawsuit is filed today.',
  },
  'prior acts coverage': {
    definition: 'Coverage under a claims-made policy for acts that occurred before the current policy inception but after a stated retroactive date. Critical when switching E&O carriers.',
    example: 'An agent switching carriers asks the new insurer for prior acts coverage back to her original licensing date to avoid a coverage gap.',
  },
  'tail coverage': {
    definition: 'An extension of a claims-made policy allowing claims to be reported after the policy ends, for incidents that occurred during the policy period. Essential when retiring or switching insurers.',
    example: 'A retiring agent purchases three years of tail coverage so any lawsuits filed after retirement over past transactions are still covered.',
  },
  'deductible': {
    definition: 'The amount an insured must pay out of pocket on a covered loss before the insurer\'s obligation begins. Higher deductibles lower premiums but increase per-claim cost.',
    example: 'With a $2,500 E&O deductible, the agent pays the first $2,500 of defense and indemnity costs on any covered claim.',
  },
  'coverage exclusions': {
    definition: 'Specific acts, persons, or perils that the insurance policy does not cover. Common E&O exclusions include intentional acts, fraud, discrimination, and unauthorized practice of law.',
    example: 'A policy\'s coverage exclusions leave the agent uncovered for an intentional misrepresentation claim that the carrier considers fraudulent.',
  },
  'risk retention group': {
    definition: 'A liability insurance company owned by its policyholders, formed under the federal Liability Risk Retention Act, often used by real estate trade groups to provide affordable E&O coverage.',
    example: 'A state Realtor association sponsors a risk retention group offering E&O policies tailored to residential licensees.',
  },

  // ── Module 12, Ch1: Antitrust Violations ──

  'Sherman Antitrust Act': {
    definition: 'The 1890 federal law prohibiting agreements that restrain trade and monopolization. Its provisions reach real estate commissions, market allocation, and group boycotts among brokers.',
    example: 'Two brokers privately agreeing to set minimum commissions violate the Sherman Antitrust Act.',
  },
  'price fixing': {
    definition: 'An illegal agreement among competitors to fix, raise, or stabilize prices. In real estate, brokers agreeing on commission rates constitutes price fixing.',
    example: 'Three competing Richmond brokerages agreeing to all charge a 6% commission engage in price fixing, a per se antitrust violation.',
  },
  'group boycott': {
    definition: 'An illegal agreement among competitors not to deal with a third party, often used to punish a broker who discounts commissions. A per se antitrust violation.',
    example: 'Area brokers agreeing not to show a discount broker\'s listings constitute a group boycott under antitrust law.',
  },
  'market allocation': {
    definition: 'An illegal agreement among competitors to divide markets by territory, customer class, or product line. Another per se antitrust violation.',
    example: 'Two brokerages agreeing that one will handle only Henrico and the other only Chesterfield constitutes illegal market allocation.',
  },
  'tie-in arrangement': {
    definition: 'A seller\'s requirement that a buyer purchase a second product or service as a condition of buying the desired one, which may violate antitrust laws when it restrains competition.',
    example: 'A broker requires buyers to use an affiliated title company as a condition of writing the contract, potentially creating an illegal tie-in arrangement.',
  },
  'per se violation': {
    definition: 'Conduct considered so inherently anticompetitive that it is illegal regardless of intent or market effect. Price fixing, group boycotts, and market allocation are per se antitrust violations.',
    example: 'Because price fixing is a per se violation, brokers cannot defend the practice by showing the agreed rate was reasonable.',
  },
  'treble damages': {
    definition: 'A statutory remedy multiplying actual damages by three. Available under federal antitrust laws, creating strong private enforcement incentives.',
    example: 'A plaintiff proving $500,000 in antitrust damages recovers $1.5 million in treble damages plus attorney fees.',
  },
  'commission rate': {
    definition: 'The percentage or flat fee a seller or buyer pays a broker for services. Individual brokerages set their own rates; agreements among competing firms are illegal.',
    example: 'A listing agreement specifies a 6% commission rate to be split between the listing and buyer\'s brokerages at closing.',
  },
  'MLS': {
    definition: 'Multiple Listing Service, a private database and cooperative marketing platform where member brokers share listings and agree to compensation terms. Governed by NAR and local rules.',
    example: 'A listing broker enters a property into the MLS, offering a cooperative compensation to any buyer\'s broker who procures the buyer.',
  },
  'NAR settlement': {
    definition: 'The 2024 settlement of antitrust lawsuits that changed MLS cooperative compensation practices, prohibited offers of buyer broker compensation in the MLS, and required written buyer agreements before showings.',
    example: 'Under the NAR settlement, a buyer\'s agent must have a signed buyer-representation agreement in place before showing MLS-listed homes.',
  },

  // ── Module 12, Ch1: Fraud & Misrepresentation ──

  'fraud': {
    definition: 'An intentional misrepresentation of material fact, made with knowledge of its falsity and intent to induce reliance, causing damages to the other party. A basis for both civil and criminal liability.',
    example: 'An agent who knowingly hides a leaking roof to push a sale commits fraud and may face license revocation, civil damages, and potential criminal charges.',
  },
  'intentional misrepresentation': {
    definition: 'A knowingly false statement of fact made with intent to deceive and induce reliance. Functionally equivalent to fraud in real estate claims.',
    example: 'Stating that a property is connected to public sewer when the agent knows it is on a failing septic system is intentional misrepresentation.',
  },
  'negligent misrepresentation': {
    definition: 'A false statement of fact made without exercising reasonable care to verify its truth, even without intent to deceive. Actionable in Virginia real estate transactions.',
    example: 'An agent telling a buyer the attic is "fully insulated" based on a guess commits negligent misrepresentation if no insulation exists.',
  },
  'innocent misrepresentation': {
    definition: 'A false statement of fact made honestly believing it to be true. May support contract rescission but typically not damages in Virginia.',
    example: 'An agent relays the seller\'s false claim that the roof is five years old; the buyer may rescind but likely cannot recover damages from the innocent agent.',
  },
  'material fact': {
    definition: 'A fact that would affect a reasonable party\'s decision to enter the transaction or the price offered. Material facts trigger disclosure obligations under Virginia law.',
    example: 'Active termite infestation is a material fact a Virginia agent must disclose to a buyer, regardless of the property disclosure statement.',
  },
  'puffing': {
    definition: 'Non-factual statements of opinion or sales hype that reasonable buyers recognize as subjective, such as "best view in town." Generally not actionable as misrepresentation.',
    example: 'Calling a kitchen "gorgeous" is puffing, but stating "the appliances are new" when they are 15 years old is misrepresentation.',
  },
  'caveat emptor': {
    definition: 'The Latin principle "let the buyer beware," historically placing the burden on buyers to inspect. In Virginia, caveat emptor is significantly limited by disclosure statutes, fair housing, and agency duties.',
    example: 'Although caveat emptor still applies to many conditions in Virginia, a seller cannot actively conceal a known defect or lie about it.',
  },
  'Virginia Residential Property Disclosure Act': {
    definition: 'The Virginia statute (Title 55.1, Chapter 7) requiring sellers of most residential property to deliver a disclosure statement advising buyers that the property is sold "as is" except for certain required disclosures and defects.',
    example: 'The Virginia Residential Property Disclosure Act requires the seller to provide a residential property disclosure statement before contract ratification.',
  },
  'latent defect': {
    definition: 'A material defect not visible through ordinary inspection that is known to the seller or agent. Must be disclosed even in a generally "as is" Virginia transaction.',
    example: 'A chronically flooding basement hidden by waterproof paint is a latent defect that must be disclosed to buyers.',
  },
  'vicarious liability': {
    definition: 'Legal liability imposed on one party (such as a broker) for the acts of another (such as an affiliated licensee) based on the relationship between them.',
    example: 'A principal broker may face vicarious liability for a sales agent\'s misrepresentation made within the scope of employment.',
  },

  // ── Module 12, Ch1: Risk Reduction ──

  'risk reduction': {
    definition: 'The practice of minimizing exposure to claims and regulatory actions through documentation, training, standardized processes, and policies. Core to protecting licensees and their firms.',
    example: 'A brokerage\'s risk reduction program includes mandatory CE, checklist-driven transactions, and quarterly file audits.',
  },
  'transaction file': {
    definition: 'The complete set of documents, communications, and records for a given deal that a licensee must maintain. Virginia requires retention of transaction records for at least three years.',
    example: 'A transaction file contains the signed agency disclosure, contract, addenda, inspection reports, and all email correspondence.',
  },
  'document retention': {
    definition: 'The policies and practices for storing transaction, financial, and operational records for legally required periods. Virginia brokers must retain records for at least three years from closing or file closure.',
    example: 'The firm\'s document retention policy stores signed transaction documents in a cloud archive for at least three years following closing.',
  },
  'written communication': {
    definition: 'Communication captured in durable form such as email, text, letter, or signed document. Best practice is to reduce important terms and confirmations to writing to reduce disputes.',
    example: 'After a phone call with the seller about a price reduction, the agent sends a written communication confirming the new number by email.',
  },
  'confirmation of verbal agreements': {
    definition: 'The practice of following up verbal discussions with a written note documenting the conversation. A core risk-reduction practice that protects against he-said-she-said disputes.',
    example: 'After a phone call, the agent sends an email subject-lined "Confirmation of our 3:15 call" summarizing the agreed terms.',
  },
  'compliance audit': {
    definition: 'A systematic review of files, trust accounts, advertising, and procedures against applicable laws and regulations to identify and correct issues proactively.',
    example: 'The principal broker\'s quarterly compliance audit reviews 20 random files for missing signatures, agency disclosures, and advertising compliance.',
  },
  'continuing education': {
    definition: 'Required ongoing coursework licensees must complete each license cycle to maintain licensure. Virginia salespersons need 16 CE hours and brokers need 24 hours per two-year cycle.',
    example: 'A Virginia salesperson completes 16 hours of continuing education, including mandatory topics, before renewal.',
  },
  'standard of care': {
    definition: 'The level of skill, prudence, and diligence a reasonably competent licensee would exercise under similar circumstances. The benchmark for professional negligence claims.',
    example: 'Failing to research pending zoning changes affecting a property falls below the standard of care expected of a Virginia licensee.',
  },
  'best practices': {
    definition: 'Industry-recognized methods for handling transactions that reduce risk and improve client outcomes, often codified in brokerage policy manuals and trade association guidance.',
    example: 'Using a written wire fraud warning at contract signing is a best practice that protects buyers and limits broker liability.',
  },
  'incident reporting': {
    definition: 'The internal process of promptly notifying the principal broker and E&O carrier of potential claims, complaints, or significant errors, preserving coverage and enabling early intervention.',
    example: 'An agent who receives a threatening letter from a buyer\'s attorney triggers incident reporting to the broker and the E&O carrier within 48 hours.',
  },

  // ── Module 12, Ch2: VREB Advertising Regulations ──

  '18 VAC 135-20-180': {
    definition: 'The Virginia Administrative Code regulation setting standards for real estate advertising, including firm name, team advertising, online content, and supervision requirements.',
    example: 'Under 18 VAC 135-20-180, every yard sign and online ad must clearly disclose the licensee\'s firm name.',
  },
  'VREB advertising rules': {
    definition: 'The VREB regulations governing how licensees and firms may advertise, including requirements for firm identification, honesty, and broker supervision of all advertising.',
    example: 'The VREB advertising rules prohibit misleading statements about a property\'s size, features, or listing status.',
  },
  'firm name requirement': {
    definition: 'Virginia\'s rule that every form of advertising by a licensee must disclose the firm name in the same manner as licensed, ensuring consumers can identify the regulated entity.',
    example: 'An Instagram post about a new listing satisfies the firm name requirement by clearly including the brokerage name alongside the agent\'s name.',
  },
  'team advertising': {
    definition: 'Advertising by a group of licensees operating under a shared identity within a firm. Virginia requires team advertising to include the firm name and keep team branding from obscuring the supervising brokerage.',
    example: 'The "Richmond Home Team" displays its firm brokerage name in equal or more prominent type on every ad to comply with Virginia team advertising rules.',
  },
  'blind advertising': {
    definition: 'An advertisement by a licensee that does not disclose the licensee\'s status or the firm name, giving the impression of a for-sale-by-owner or unregulated private party. Prohibited in Virginia.',
    example: 'A Craigslist listing that says "owner selling, call Jane" when Jane is a licensee is prohibited blind advertising.',
  },
  'assumed name': {
    definition: 'A business name a firm uses that differs from the licensed legal name (also called a "doing business as" or DBA). Must be registered with the VREB and meet advertising disclosure rules.',
    example: 'A brokerage licensed as "XYZ Realty LLC" registers "Capital Home Group" as an assumed name with the VREB before using it on advertising.',
  },
  'brokerage identification': {
    definition: 'The required clear identification of the brokerage firm in all licensee advertising so consumers know who is regulated and accountable for the content.',
    example: 'Proper brokerage identification places the firm name adjacent to the agent\'s name and logo on every yard sign and website page.',
  },
  'misleading advertising': {
    definition: 'Advertising that creates a false impression about a property, service, price, or licensee status. Prohibited by VREB rules and subject to discipline and private lawsuits.',
    example: 'Advertising "priced below market" when the list price is at or above recent comparables is misleading advertising.',
  },
  'supervision of advertising': {
    definition: 'The principal broker\'s obligation to review and approve advertising by affiliated licensees for compliance with VREB rules and fair housing laws.',
    example: 'The principal broker reviews social media posts weekly as part of supervision of advertising duties.',
  },
  'licensee identification': {
    definition: 'The required disclosure of the individual licensee\'s name (and any team affiliation) alongside the firm, so consumers can confirm licensure status.',
    example: 'A postcard mailer meets licensee identification requirements by including the agent\'s licensed name and the brokerage.',
  },

  // ── Module 12, Ch2: Social Media Compliance ──

  'social media compliance': {
    definition: 'The practice of applying VREB advertising, fair housing, copyright, and data-privacy rules to social media posts, reels, stories, and paid ads.',
    example: 'A firm\'s social media compliance policy requires every Instagram reel about a listing to tag the brokerage and include fair housing language.',
  },
  'brokerage disclosure': {
    definition: 'The disclosure of the licensee\'s sponsoring brokerage in social media content, profile bios, and paid advertising to comply with VREB advertising rules.',
    example: 'An agent\'s TikTok bio lists "Agent at [Firm Name]" as required brokerage disclosure.',
  },
  'personal vs. business accounts': {
    definition: 'The distinction between private personal social media and accounts used for real estate marketing. Business use triggers VREB advertising rules even on otherwise personal accounts.',
    example: 'When an agent\'s "personal" Facebook account regularly posts listings, the VREB treats it as advertising subject to the same personal vs. business accounts rules as a dedicated page.',
  },
  'testimonials': {
    definition: 'Client statements about a licensee\'s services used in marketing. Must be truthful, not misleading, and obtained with consent; FTC rules require disclosure of material connections.',
    example: 'Posting client testimonials on a website without their written consent can violate privacy and FTC endorsement rules.',
  },
  'endorsements': {
    definition: 'Public statements recommending a product, service, or licensee. FTC rules require endorsers to disclose material connections such as compensation or family ties.',
    example: 'An influencer posting an endorsement of a brokerage must disclose any payment under FTC rules.',
  },
  'copyright': {
    definition: 'The legal right of creators of original works (photos, videos, floor plans) to control reproduction. Using another\'s photos or video without permission or license is infringement.',
    example: 'An agent who scrapes another brokerage\'s listing photos to post on Instagram commits copyright infringement.',
  },
  'fair housing advertising': {
    definition: 'Advertising compliance with federal and Virginia fair housing laws, avoiding language or imagery that discriminates against protected classes or signals preference.',
    example: 'Saying "perfect for young professionals" in a listing violates fair housing advertising rules because it signals age and familial preference.',
  },
  'MLS photo usage': {
    definition: 'The rules around using photos uploaded to the MLS, typically limited by MLS policy and listing broker permissions; reuse on social media or other sites may require specific consent.',
    example: 'A buyer\'s agent violates MLS photo usage rules by downloading listing photos and running paid Facebook ads without the listing broker\'s consent.',
  },
  'client privacy': {
    definition: 'The obligation to protect client personal and transaction information from unauthorized disclosure, including on social media. Related to fiduciary duty and state privacy laws.',
    example: 'An agent protecting client privacy never posts identifiable details of a client\'s purchase or financial condition on social media.',
  },
  'digital footprint': {
    definition: 'The cumulative online presence of a licensee, including profiles, posts, reviews, and ads. Permanent and easily discoverable by regulators and plaintiffs\' lawyers in disputes.',
    example: 'A licensee\'s digital footprint of poorly worded old Facebook posts becomes exhibit A in a fair housing complaint years later.',
  },

  // ── Module 12, Ch2: Internet, Virtual Tours, IDX ──

  'IDX': {
    definition: 'Internet Data Exchange, the MLS-permitted display of active listings on participating member brokers\' websites, subject to uniform rules for attribution, refresh, and content.',
    example: 'An IDX feed on a brokerage website displays all active CVRMLS listings with the listing broker credited on each property.',
  },
  'Internet Data Exchange': {
    definition: 'The full term for IDX, describing cooperative display agreements among MLS member brokers that allow each to display others\' listings online under standardized rules.',
    example: 'Internet Data Exchange rules require that consumer-facing websites refresh listings at least every 12 hours and cite the listing brokerage.',
  },
  'VOW': {
    definition: 'Virtual Office Website, a password-protected consumer-facing website operated by a broker that, after registration and a broker-consumer relationship, can display more listing data than standard IDX.',
    example: 'A VOW allows registered consumers to see withdrawn or sold-property data that IDX feeds do not expose.',
  },
  'Virtual Office Website': {
    definition: 'The full term for VOW, a registered consumer access model under MLS rules that can display expanded listing data to registered users with whom the broker has a working relationship.',
    example: 'A Virtual Office Website requires users to create an account and agree to work with the sponsoring broker before accessing expanded data.',
  },
  'virtual tour': {
    definition: 'A digital walk-through of a property, typically delivered as video, 3D scans (Matterport), or interactive photos. Must accurately represent the property and follow MLS and copyright rules.',
    example: 'A Matterport virtual tour of a listing lets remote buyers walk every room before flying in to see the property.',
  },
  'drone photography': {
    definition: 'Aerial imagery captured by unmanned aircraft used for marketing. Commercial use in the U.S. requires the pilot to hold an FAA Part 107 certificate and follow airspace and privacy rules.',
    example: 'Drone photography over a Virginia waterfront property must be flown by a FAA Part 107-certified pilot below 400 feet.',
  },
  'FAA Part 107': {
    definition: 'The FAA regulation governing commercial operation of small unmanned aircraft, requiring a remote pilot certificate, airspace authorizations, and operating limits.',
    example: 'Under FAA Part 107, a drone pilot photographing real estate must be certified, maintain visual line of sight, and avoid controlled airspace without waiver.',
  },
  'website compliance': {
    definition: 'Adherence of a licensee or brokerage website to VREB advertising rules, fair housing law, ADA accessibility guidance, and applicable privacy statutes.',
    example: 'Website compliance includes clear brokerage identification on every page, accessible design, and a privacy policy describing data collection.',
  },
  'MLS rules': {
    definition: 'The rules and regulations adopted by each Multiple Listing Service governing how members submit, display, and compensate on listings, including fines for violations.',
    example: 'MLS rules require that any listing be entered within 48 hours of the effective date of the listing agreement.',
  },
  'listing syndication': {
    definition: 'In online marketing, the process of pushing MLS listings to third-party portals such as Zillow or Realtor.com. Brokers can elect in or out of various syndication feeds.',
    example: 'A broker opts out of one syndication feed to limit where listings appear while remaining on the MLS and IDX network.',
  },

  // ── Module 12, Ch2: Do-Not-Call, CAN-SPAM, Telemarketing ──

  'Do-Not-Call Registry': {
    definition: 'The federal registry of phone numbers that have opted out of telemarketing calls. Enforced by the FTC and FCC; violations can cost up to $50,120 per call.',
    example: 'Before cold-calling expired listings, an agent scrubs the list against the Do-Not-Call Registry to avoid fines.',
  },
  'National DNC list': {
    definition: 'The full name for the federal Do-Not-Call database, listing phone numbers registered by consumers to opt out of sales calls nationally.',
    example: 'Numbers listed on the National DNC list cannot be called for telemarketing unless an exemption applies.',
  },
  'internal DNC list': {
    definition: 'A company-maintained list of consumers who have specifically asked that particular business not to call them, required independently of the national registry.',
    example: 'A brokerage maintains an internal DNC list of consumers who asked to be removed, even if they are not on the national list.',
  },
  'CAN-SPAM Act': {
    definition: 'The federal law regulating commercial email, requiring truthful headers, accurate subject lines, clear commercial identification, physical postal address, and easy opt-out.',
    example: 'A monthly market update email complies with the CAN-SPAM Act by including the brokerage\'s mailing address and a working unsubscribe link.',
  },
  'TCPA': {
    definition: 'The Telephone Consumer Protection Act, which restricts autodialed calls, prerecorded messages, and SMS text marketing without prior express consent. High-risk statute for real estate marketers.',
    example: 'An agent using an autodialer to send bulk texts without recipient consent violates the TCPA and risks statutory damages per message.',
  },
  'Telephone Consumer Protection Act': {
    definition: 'The full name for the TCPA, the federal statute regulating autodialed, prerecorded, and text-message marketing and authorizing statutory damages of up to $1,500 per willful violation.',
    example: 'Class actions under the Telephone Consumer Protection Act can reach millions in damages when marketers text thousands without consent.',
  },
  'established business relationship': {
    definition: 'A prior commercial or inquiry relationship that creates a limited exemption from do-not-call restrictions, typically 18 months after a transaction or 3 months after an inquiry.',
    example: 'An agent can call a past client within 18 months of closing under the established business relationship exemption, even if they are on the DNC list.',
  },
  'opt-out': {
    definition: 'A consumer\'s mechanism to request no further commercial contact. Must be honored promptly under CAN-SPAM, TCPA, and state laws.',
    example: 'When a recipient clicks opt-out on an email, the firm has 10 business days under CAN-SPAM to stop sending marketing emails.',
  },
  'fax advertising': {
    definition: 'The regulation of commercial faxes under TCPA-related rules requiring prior consent or an established business relationship and an opt-out mechanism on every fax.',
    example: 'Fax advertising without consent or a compliant opt-out subjects the sender to TCPA damages of up to $500 per fax.',
  },
  'cold calling': {
    definition: 'Unsolicited outbound calls to prospective clients. Requires compliance with the national and internal DNC lists, TCPA autodialer limits, and Virginia licensing rules.',
    example: 'An agent\'s cold calling script begins with a firm introduction, offers immediate opt-out, and is only used on scrubbed, non-DNC numbers.',
  },

  // ── Module 12, Ch3: NAR Code of Ethics ──

  'NAR Code of Ethics': {
    definition: 'The National Association of Realtors\' code of professional conduct binding Realtor members, organized into Articles covering duties to clients, the public, and other Realtors.',
    example: 'A Virginia Realtor must follow the NAR Code of Ethics in addition to license law, with violations adjudicated by local boards.',
  },
  'Article 1': {
    definition: 'The NAR Code article requiring Realtors to protect and promote the interests of their clients while treating all parties honestly. Foundation of client-first practice.',
    example: 'Article 1 prohibits a Realtor from steering a client to a higher-priced option solely to earn a larger commission.',
  },
  'Article 2': {
    definition: 'The NAR Code article prohibiting Realtors from exaggerating, misrepresenting, or concealing pertinent facts about a property or transaction.',
    example: 'Concealing a known chronic flooding issue from a buyer violates Article 2.',
  },
  'Article 3': {
    definition: 'The NAR Code article requiring Realtors to cooperate with other brokers except when cooperation is not in the client\'s best interest, and to share pertinent information promptly.',
    example: 'Article 3 requires a listing Realtor to promptly disclose multiple offers to cooperating brokers as permitted by the seller.',
  },
  'Article 9': {
    definition: 'The NAR Code article requiring Realtors to assure, whenever possible, that agreements are in writing, clear, and signed by all parties with copies provided to each.',
    example: 'Article 9 is violated when a Realtor negotiates a change to a contract by text without obtaining written addenda signed by both parties.',
  },
  'Article 12': {
    definition: 'The NAR Code article requiring that Realtors present a true picture in their advertising, marketing, and public representations, including online content and media.',
    example: 'Posting old interior photos of a property after a major fire violates Article 12 by failing to present a true picture.',
  },
  'Article 16': {
    definition: 'The NAR Code article prohibiting Realtors from interfering with the agency or contractual relationships other Realtors have with their clients.',
    example: 'A Realtor who solicits a seller already under a valid exclusive listing with another Realtor violates Article 16.',
  },
  'NAR fiduciary duty': {
    definition: 'The duties of loyalty, care, disclosure, obedience, confidentiality, and accounting owed by a Realtor to the client. Reinforced by the NAR Code and Virginia license law.',
    example: 'A Realtor\'s fiduciary duty requires disclosing to the seller a buyer\'s stated willingness to pay more than the offer price.',
  },
  'Realtor': {
    definition: 'A real estate licensee who is a member of the National Association of Realtors and bound by the NAR Code of Ethics. A trademarked term not synonymous with "licensee."',
    example: 'Only a Realtor, not every licensee, can be disciplined through NAR\'s ethics process for code violations.',
  },
  'ethics complaint': {
    definition: 'A formal complaint filed with a local Realtor association alleging a Code of Ethics violation, adjudicated through a professional standards hearing.',
    example: 'A consumer files an ethics complaint with the local Realtor board alleging Article 2 misrepresentation.',
  },

  // ── Module 12, Ch3: Broker Supervision ──

  'principal broker (M12)': {
    definition: 'The broker designated as responsible for a Virginia brokerage firm\'s operations, supervision, trust accounts, and regulatory compliance.',
    example: 'The principal broker signs off on the firm\'s escrow reconciliation each month and personally answers to the VREB.',
  },
  'supervising broker (M12)': {
    definition: 'A broker assigned to supervise the work of salespersons or other brokers within a firm, ensuring compliance with Virginia license law and firm policy.',
    example: 'The supervising broker for the West End office reviews contracts, mentors new agents, and escalates compliance issues.',
  },
  'broker supervision': {
    definition: 'The active oversight of affiliated licensees\' work, advertising, and trust account handling by the principal or supervising broker, required by VREB regulation.',
    example: 'Broker supervision includes regular file reviews, training, advertising approval, and prompt response to consumer complaints.',
  },
  'broker vicarious liability': {
    definition: 'Legal liability imposed on a broker or firm for the acts of affiliated licensees when those acts occur within the scope of the agency relationship.',
    example: 'A principal broker can face vicarious liability for a salesperson\'s discriminatory advertising even if the broker did not see the ad.',
  },
  'respondeat superior': {
    definition: 'Latin for "let the master answer," the legal doctrine holding employers responsible for wrongful acts of employees committed in the course of employment.',
    example: 'Under respondeat superior, a brokerage may be liable for a licensee-employee\'s negligent misrepresentation while showing a property.',
  },
  'independent contractor': {
    definition: 'A licensee operating under a non-employee relationship with the brokerage, typically with a written independent contractor agreement meeting IRS and Virginia standards.',
    example: 'Most Virginia salespersons work as independent contractors, receiving 1099 income rather than W-2 wages.',
  },
  'employee vs. contractor': {
    definition: 'The legal distinction between a W-2 employee and a 1099 independent contractor, affecting taxes, liability, and broker supervision obligations.',
    example: 'The employee vs. contractor classification determines whether the brokerage withholds taxes and whether respondeat superior applies.',
  },
  'policy manual': {
    definition: 'A written document describing a brokerage\'s policies, procedures, and expectations for licensees, covering advertising, agency, trust accounts, and technology use.',
    example: 'Each new hire at the firm reads the policy manual and signs an acknowledgment during onboarding.',
  },
  'trust account audit': {
    definition: 'A systematic review of trust account transactions, reconciliations, and client ledgers to confirm compliance with VREB rules and to detect commingling or shortages.',
    example: 'The principal broker conducts a monthly trust account audit comparing ledger balances to bank reconciliations.',
  },
  'compliance program': {
    definition: 'A formal firm-wide program combining policies, training, file reviews, and incident response designed to keep the brokerage within legal and ethical bounds.',
    example: 'The firm\'s compliance program includes annual fair housing training, random file audits, and an internal reporting hotline.',
  },

  // ── Module 12, Ch3: Building a Real Estate Business ──

  'sphere of influence': {
    definition: 'A licensee\'s network of personal and professional contacts used as a natural source of referrals and repeat business. Usually the cheapest and highest-converting lead source.',
    example: 'A new agent tracks 150 contacts in her sphere of influence and commits to one touch per contact per month.',
  },
  'SOI': {
    definition: 'The common shorthand for sphere of influence, the agent\'s personal network of relationships that drives referrals.',
    example: 'A strong SOI database of 300 contacts can support a six-figure real estate career with consistent outreach.',
  },
  'farming': {
    definition: 'A marketing strategy that focuses on a defined geographic area or demographic, building brand presence and relationships over time to dominate listings within that territory.',
    example: 'An agent farming a 500-home neighborhood sends monthly mailers and hosts quarterly community events.',
  },
  'geographic farming': {
    definition: 'A farming strategy focused on a specific neighborhood or zip code, often tracked by turnover rate and average price to forecast business volume.',
    example: 'Geographic farming a subdivision with a 6% annual turnover rate produces about 30 transactions per year for the market leader.',
  },
  'prospecting': {
    definition: 'The process of actively seeking new business through calls, door-knocking, events, online outreach, and content. A core daily activity for successful licensees.',
    example: 'An agent spends the first two hours of each morning prospecting expired listings and FSBOs.',
  },
  'lead generation': {
    definition: 'The marketing and outreach activities that attract new prospective clients, ranging from paid ads to content marketing to referrals.',
    example: 'A lead generation plan mixes Instagram reels, Google Ads, open houses, and sphere outreach.',
  },
  'CRM': {
    definition: 'Customer Relationship Management software used to track leads, clients, communications, and tasks throughout the client lifecycle. Essential for a scalable practice.',
    example: 'A licensee\'s CRM automates birthday messages, annual check-ins, and home-anniversary emails to her sphere.',
  },
  'conversion rate': {
    definition: 'The percentage of leads or appointments that convert to signed clients or closed deals. A key performance metric for evaluating marketing effectiveness.',
    example: 'An agent with a 2% conversion rate on internet leads needs 50 leads to produce one closing.',
  },
  'referral network': {
    definition: 'A structured group of agents and professionals who exchange client referrals, often formalized through a referral agreement that pays a percentage of commission.',
    example: 'An agent\'s referral network includes 10 relocation specialists in cities where her clients frequently move.',
  },
  'business plan': {
    definition: 'A written plan setting financial goals, activity targets, lead sources, and budget for a licensee\'s practice, typically updated annually.',
    example: 'A business plan targeting $100,000 GCI identifies 20 closings at average $5,000 GCI and maps the lead-generation activities required to produce them.',
  },

  // ── Module 12, Ch3: Diverse Populations & Cultural Competency ──

  'cultural competency': {
    definition: 'The ability to understand, respect, and effectively interact with people across cultures, languages, and backgrounds. A professional skill and fair housing safeguard.',
    example: 'Cultural competency training helps an agent understand different expectations around negotiation style with international clients.',
  },
  'implicit bias': {
    definition: 'Unconscious attitudes or stereotypes that influence decisions and behavior, often contrary to stated values. Targeted by mandatory fair housing training.',
    example: 'Implicit bias training helps an agent notice if she is steering certain buyers toward specific neighborhoods unconsciously.',
  },
  'fair housing': {
    definition: 'Federal, Virginia, and local laws prohibiting housing discrimination based on race, color, religion, national origin, sex, disability, familial status, and Virginia-protected classes.',
    example: 'Fair housing laws prohibit refusing to show a listing to an applicant because of her disability or family structure.',
  },
  'protected classes': {
    definition: 'The categories of people protected from housing discrimination under federal, state, and local laws. Virginia protected classes include race, color, religion, sex, elderliness, familial status, national origin, disability, source of funds, sexual orientation, gender identity, military status, and pregnancy.',
    example: 'Virginia protected classes now include source of funds, so refusing an applicant because they pay with a housing voucher is illegal.',
  },
  'reasonable accommodation': {
    definition: 'A change in rules, policies, or services that is necessary to give a person with a disability equal opportunity to use and enjoy a dwelling. Required under fair housing law.',
    example: 'Waiving a "no pets" policy for an applicant\'s service animal is a reasonable accommodation required under fair housing law.',
  },
  'language access': {
    definition: 'The practice of providing meaningful service to consumers with limited English proficiency through interpreters, translated materials, or bilingual staff. HUD emphasizes language access as part of fair housing compliance.',
    example: 'Partnering with certified Spanish interpreters for contract signings is a language access best practice.',
  },
  'limited English proficiency': {
    definition: 'A designation for individuals whose primary language is not English and who have a limited ability to read, speak, write, or understand English. HUD guidance considers LEP discrimination a form of national origin discrimination.',
    example: 'Refusing to work with a buyer because of limited English proficiency can constitute national origin discrimination.',
  },
  'military relocation': {
    definition: 'Real estate practice focused on servicemembers and military families, requiring knowledge of PCS timelines, SCRA protections, VA loans, and on-base housing options.',
    example: 'An agent certified in military relocation understands PCS timelines and can structure contingencies around receipt of orders.',
  },
  'multigenerational housing': {
    definition: 'Homes designed to accommodate multiple generations under one roof, often with in-law suites, dual primary suites, or accessory dwelling units. Growing market segment in Virginia.',
    example: 'A buyer seeking multigenerational housing needs a home with a first-floor bedroom suite for elderly parents and private space for teenage children.',
  },
  'accessibility': {
    definition: 'The design and operation of a property so that persons with disabilities can use it, referenced in Fair Housing Act design standards, ADA public accommodations, and Virginia accessibility codes.',
    example: 'Advertising a property as wheelchair accessible requires features like step-free entry, wider doorways, and an accessible bathroom.',
  },

  // ── Module 12, Ch4: PSI Exam Format ──

  'PSI exam': {
    definition: 'The computer-based licensing exam administered by PSI for the Virginia real estate salesperson and broker licenses. Consists of a national and state portion.',
    example: 'A candidate schedules her PSI exam at a testing center in Richmond or Virginia Beach after completing the required pre-license hours.',
  },
  'national portion': {
    definition: 'The part of the Virginia real estate exam covering general real estate principles, contracts, financing, agency, and math that apply across most U.S. jurisdictions.',
    example: 'The Virginia salesperson national portion consists of 80 questions with a 105-minute time limit.',
  },
  'state portion': {
    definition: 'The part of the Virginia real estate exam covering Virginia license law, agency statutes, VRLTA, fair housing, and other state-specific topics.',
    example: 'The Virginia state portion has 40 questions testing DPOR rules, agency disclosure requirements, and VRLTA provisions.',
  },
  'passing score': {
    definition: 'The minimum score needed to pass each portion of the licensing exam. Virginia requires 75% on the national portion and 75% on the state portion, scored separately.',
    example: 'A candidate scoring 80% national and 72% state passes the national portion but must retake the state portion to meet the passing score.',
  },
  'exam registration': {
    definition: 'The process of applying to PSI, paying the exam fee, and scheduling a test date and location. Virginia requires completion of pre-license education before registration.',
    example: 'After finishing her 60-hour pre-license course, the candidate completes exam registration online through the PSI portal.',
  },
  'Pearson VUE': {
    definition: 'A computer-based testing provider used by many regulatory licensing exams. Historically not Virginia\'s vendor for real estate; candidates should confirm current DPOR vendor (PSI) before scheduling.',
    example: 'Candidates must register with the correct vendor (PSI for Virginia real estate, not Pearson VUE) to avoid scheduling errors.',
  },
  'exam retake': {
    definition: 'The ability to retake a failed portion of the exam after paying another fee. Virginia requires candidates to wait a short period between attempts and pass within a one-year window.',
    example: 'A candidate who fails the state portion schedules an exam retake for two weeks later, only needing to pay the PSI retest fee.',
  },
  'exam window': {
    definition: 'The time limit during which a candidate must pass both portions of the exam after beginning testing, typically one year in Virginia. Failing to pass both portions within the window requires restarting education.',
    example: 'A candidate whose one-year exam window is about to expire schedules the final retake before the deadline to avoid retaking pre-license coursework.',
  },
  'computer-based testing': {
    definition: 'Licensing exams delivered on a computer at a proctored testing center, with immediate scoring upon completion. The default for Virginia real estate licensing.',
    example: 'The PSI computer-based testing center provides a quiet workstation, scratch paper, and an onscreen calculator for math questions.',
  },
  'candidate handbook': {
    definition: 'The official guide published by PSI describing exam content, registration, scheduling, testing rules, and scoring for Virginia real estate licensing.',
    example: 'The candidate handbook lists required identification, content outlines, and sample questions for each portion of the exam.',
  },

  // ── Module 12, Ch4: Study Strategies ──

  'active recall': {
    definition: 'A learning technique that forces retrieval of information from memory (via flashcards, practice questions, or teaching the material) rather than passive rereading. Proven to boost long-term retention.',
    example: 'A candidate uses active recall flashcards on agency vocabulary for 15 minutes each day rather than rereading the textbook.',
  },
  'spaced repetition': {
    definition: 'A study method that schedules review sessions at increasing intervals to exploit the spacing effect and strengthen memory with minimal total study time.',
    example: 'A spaced repetition app reviews Virginia license law concepts at 1-day, 3-day, 7-day, and 14-day intervals.',
  },
  'practice exams': {
    definition: 'Simulated full-length exams used to build test-taking stamina, identify weak topics, and calibrate timing before the real PSI exam.',
    example: 'A candidate completes four timed practice exams in the final week of study, reviewing every missed question.',
  },
  'math questions': {
    definition: 'Exam items requiring calculations in areas such as commission, proration, area, financing, and tax. Typically 10-15% of the Virginia exam and a common failure point.',
    example: 'A commission math question asks the candidate to compute a co-broker split after deducting a transaction fee.',
  },
  'agency relationships': {
    definition: 'The legal relationships among licensees, clients, and customers, including seller, buyer, dual, and designated representation. Heavily tested on the Virginia state portion.',
    example: 'A state-portion question asks which agency relationships require written consent for dual representation under Virginia law.',
  },
  'contract law': {
    definition: 'Legal principles governing real estate contracts, including offer, acceptance, consideration, capacity, legality, statute of frauds, and remedies. A major exam topic.',
    example: 'A contract law question asks when a Virginia sales contract is enforceable against an oral counteroffer.',
  },
  'financing': {
    definition: 'Exam content covering mortgages, loan types, qualification, rates, truth in lending, RESPA, and math. A heavily weighted topic on the national portion.',
    example: 'A financing question asks the candidate to calculate loan-to-value ratio and identify whether PMI would be required.',
  },
  'property ownership': {
    definition: 'Exam content covering forms of ownership (fee simple, tenancy in common, joint tenancy, tenancy by the entirety), estates, and Virginia-specific ownership concepts.',
    example: 'A property ownership question asks whether a Virginia spouse\'s signature is required to convey tenancy by the entirety property.',
  },
  'Virginia license law': {
    definition: 'Title 54.1, Chapter 21 of the Code of Virginia and related regulations governing licensure, agency disclosure, escrow handling, advertising, and discipline.',
    example: 'A Virginia license law question asks how long a principal broker must retain transaction records after closing.',
  },

  // ── Module 12, Ch4: Career Paths ──

  'residential brokerage': {
    definition: 'The career path focused on representing buyers and sellers of residential property, typically 1-4 unit homes. Largest segment of the Virginia real estate industry.',
    example: 'A new licensee joining a residential brokerage focuses on single-family resales in Henrico and Chesterfield.',
  },
  'commercial brokerage': {
    definition: 'A career path focused on office, retail, industrial, multifamily, and investment properties, typically requiring deeper financial analysis and longer sales cycles.',
    example: 'An agent entering commercial brokerage joins a CCIM-affiliated firm and specializes in tenant representation for downtown office space.',
  },
  'property management career': {
    definition: 'A career path focused on leasing and operating real estate for owners, typically requiring a Virginia real estate license and often leading to specialized designations.',
    example: 'A property management career often starts with an assistant role at a multifamily firm and grows into portfolio manager and director positions.',
  },
  'real estate appraisal': {
    definition: 'A career path involving the valuation of real property by licensed or certified appraisers regulated by the Virginia Real Estate Appraiser Board. Separate license from a salesperson.',
    example: 'A candidate pursuing real estate appraisal becomes a trainee under a certified appraiser while accumulating required experience hours.',
  },
  'trainee appraiser': {
    definition: 'The entry Virginia appraiser credential, requiring supervision by a certified appraiser. The first step in a multi-tiered appraisal licensing path.',
    example: 'A trainee appraiser must complete qualifying education and perform inspections alongside her certified supervisor.',
  },
  'licensed appraiser': {
    definition: 'The second tier of Virginia appraiser credentials, allowing appraisal of non-complex 1-4 unit residential property up to specified loan values without full certification.',
    example: 'A Virginia licensed appraiser can appraise most single-family homes but not complex properties beyond threshold transaction values.',
  },
  'certified appraiser': {
    definition: 'An upper-tier Virginia appraiser credential (Certified Residential or Certified General) allowing appraisal of more complex or commercial properties. Requires additional education and experience.',
    example: 'A Certified General appraiser can appraise office buildings, industrial properties, and multifamily assets of any size or complexity.',
  },
  'USPAP': {
    definition: 'The Uniform Standards of Professional Appraisal Practice, the ethics and performance standards for appraisers, adopted by Virginia and required for all appraisal assignments.',
    example: 'Every Virginia appraisal report must be prepared in accordance with USPAP, including the scope of work and competency rules.',
  },
  'designations': {
    definition: 'Advanced credentials earned through specialized education, such as CCIM (commercial), CRS (residential), ABR (buyer), SRES (seniors), and SIOR (industrial/office). Signal expertise to clients.',
    example: 'Earning the CRS designation requires advanced residential coursework and a proven production track record.',
  },
  'broker continuing education': {
    definition: 'Ongoing license-renewal coursework required every two years by Virginia, covering mandatory and elective topics to maintain salesperson or broker licensure.',
    example: 'Continuing education for Virginia brokers includes 24 hours per cycle with mandatory topics in ethics, agency, fair housing, real estate law, and broker supervision.',
  },
}
