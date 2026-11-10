export interface TermDefinition {
  definition: string
  example?: string
}

export const PLE_TERMS: Record<string, TermDefinition> = {
  // ── Fair Housing / ADA (~25) ──────────────────────────────────────────────

  'hoarding disorder': {
    definition: 'A recognized mental health condition under the DSM-5 in which an individual has persistent difficulty discarding possessions. Under fair housing law, hoarding may qualify as a disability, requiring landlords to consider reasonable accommodations before pursuing eviction.',
    example: 'A landlord received a reasonable accommodation request from a tenant diagnosed with hoarding disorder, requiring the landlord to allow extra time for the tenant to bring the unit into compliance with health codes rather than immediately filing for eviction.',
  },
  'reasonable accommodation': {
    definition: 'A change in rules, policies, practices, or services that allows a person with a disability to have an equal opportunity to use and enjoy a dwelling. The accommodation must be requested and must have a nexus to the disability.',
    example: 'A no-pets apartment complex granted a reasonable accommodation allowing a tenant with PTSD to keep an emotional support animal after receiving a letter from a licensed mental health professional.',
  },
  'reasonable modification': {
    definition: 'A structural change made to a dwelling unit or common area that allows a person with a disability full enjoyment of the premises. Unlike an accommodation, a modification is a physical alteration. In rental housing, the tenant generally pays for the modification.',
    example: 'A wheelchair-using tenant installed a roll-in shower at their own expense as a reasonable modification, with the landlord required to permit the alteration.',
  },
  'assistance animal': {
    definition: 'A broad category that includes both trained service animals and emotional support animals. Under HUD guidance, assistance animals are not pets and are exempt from pet policies, deposits, and breed or weight restrictions in housing.',
    example: 'A property manager cannot charge a pet deposit for a tenant\'s assistance animal because it is not classified as a pet under fair housing law.',
  },
  'emotional support animal': {
    definition: 'An animal that provides therapeutic emotional support to a person with a disability. Unlike a service animal under the ADA, an ESA does not need specialized training but does require documentation from a licensed healthcare provider establishing the disability-related need.',
    example: 'A tenant with documented anxiety disorder obtained a letter from their therapist supporting the need for an emotional support cat, which the landlord was required to allow despite a no-pets policy.',
  },
  'disparate impact': {
    definition: 'A fair housing violation that occurs when a facially neutral policy or practice disproportionately harms a protected class, even without discriminatory intent. The Supreme Court upheld disparate impact claims under the Fair Housing Act in Texas Department of Housing v. Inclusive Communities Project (2015).',
    example: 'A landlord\'s blanket policy of refusing tenants with any criminal history was challenged as having a disparate impact on minority applicants.',
  },
  'disparate treatment': {
    definition: 'Intentional discrimination in which a person is treated differently because of their membership in a protected class. This is the most direct form of fair housing violation.',
    example: 'An agent who shows fewer listings to families with children compared to childless couples is engaging in disparate treatment based on familial status.',
  },
  'Virginia Values Act': {
    definition: 'Virginia legislation enacted in 2020 that expanded the Virginia Human Rights Act to prohibit discrimination based on sexual orientation and gender identity in housing, employment, and public accommodations. It strengthened enforcement mechanisms and aligned Virginia law with broader civil rights protections.',
    example: 'Under the Virginia Values Act, a landlord who refuses to rent to a same-sex couple on the basis of their relationship violates state law.',
  },
  'Civil Rights Act of 1866': {
    definition: 'Federal legislation that prohibits discrimination based on race in all real estate transactions without exception. Unlike the Fair Housing Act of 1968, the 1866 Act has no exemptions for owner-occupied properties, religious organizations, or private clubs.',
    example: 'A homeowner selling their own property without a broker attempted to invoke the Mrs. Murphy exemption but was still liable under the Civil Rights Act of 1866 because the discrimination was race-based.',
  },
  'Jones v. Mayer': {
    definition: 'A 1968 Supreme Court case that upheld the Civil Rights Act of 1866, ruling that Congress has the power to prohibit all racial discrimination in the sale or rental of property, whether by private parties or government. The case established that 42 U.S.C. Section 1982 bars all racial discrimination in housing.',
    example: 'In Jones v. Mayer, the Court held that a private developer\'s refusal to sell to a Black buyer violated federal law, even though no state action was involved.',
  },
  'Mrs. Murphy exemption': {
    definition: 'An exemption under the Fair Housing Act of 1968 that allows owner-occupied buildings with four or fewer units to discriminate in tenant selection, provided no discriminatory advertising is used and no real estate broker is involved. This exemption does NOT apply to racial discrimination under the Civil Rights Act of 1866.',
    example: 'An owner who lives in a duplex and rents the other unit may decline tenants for personal reasons under the Mrs. Murphy exemption, but can never discriminate based on race.',
  },
  'HOPA': {
    definition: 'Housing for Older Persons Act of 1995, which amended the Fair Housing Act to clarify the exemption for senior housing communities. A community qualifies as 55+ housing if at least 80% of occupied units have one resident aged 55 or older, the community publishes policies demonstrating intent, and it complies with HUD verification procedures.',
    example: 'A 55-and-over community denied residency to a family with young children, which was lawful under HOPA because the community met the 80% occupancy threshold and published its senior housing policies.',
  },
  'blockbusting': {
    definition: 'The illegal practice of inducing property owners in a neighborhood to sell or rent by making representations about the entry or prospective entry of persons of a particular protected class, for profit. Also called panic peddling.',
    example: 'An agent who sent mailers warning homeowners that property values would decline because a group home for disabled adults was moving into the neighborhood was found guilty of blockbusting.',
  },
  'redlining': {
    definition: 'The illegal practice of refusing to make mortgage loans, provide insurance, or offer other financial services in certain geographic areas based on the racial or ethnic composition of the neighborhood, rather than the creditworthiness of the individual applicant.',
    example: 'A lender that systematically denied mortgage applications for properties in predominantly minority zip codes, regardless of individual borrower qualifications, was engaged in redlining.',
  },
  'steering': {
    definition: 'The illegal practice of channeling prospective buyers or tenants toward or away from certain neighborhoods or buildings based on a protected class characteristic such as race, religion, or national origin.',
    example: 'An agent who only showed Hispanic buyers listings in one part of town while showing non-Hispanic white buyers listings throughout the entire market area was guilty of steering.',
  },
  'testers': {
    definition: 'Individuals sent by fair housing organizations or HUD to pose as prospective buyers or renters to gather evidence of discriminatory practices. Testing is a legal and widely used enforcement tool.',
    example: 'A fair housing organization sent paired testers with similar financial qualifications but different racial backgrounds to determine whether a property management company was providing equal service.',
  },
  'HUD complaint': {
    definition: 'A formal complaint filed with the U.S. Department of Housing and Urban Development alleging a violation of the Fair Housing Act. Complaints must be filed within one year of the alleged discriminatory act. HUD investigates and determines whether reasonable cause exists.',
    example: 'After being denied an apartment, the applicant filed a HUD complaint alleging discrimination based on national origin, triggering a federal investigation.',
  },
  'conciliation agreement': {
    definition: 'A voluntary agreement reached between the parties during a HUD fair housing investigation, typically involving compensation to the complainant and corrective actions by the respondent. HUD encourages conciliation at every stage of the investigation.',
    example: 'Through a conciliation agreement, the landlord agreed to pay the complainant $10,000, attend fair housing training, and adopt a written non-discrimination policy.',
  },
  'source of funds': {
    definition: 'A protected class under Virginia fair housing law that prohibits housing discrimination based on the lawful source of a person\'s income. This includes housing choice vouchers (Section 8), Social Security income, alimony, child support, and other government subsidies.',
    example: 'A Virginia landlord who refuses to rent to a qualified tenant because the tenant uses a Housing Choice Voucher violates the state\'s source of funds protection.',
  },
  'familial status': {
    definition: 'A federally protected class under the Fair Housing Act that covers households with one or more children under 18, pregnant women, and persons in the process of securing legal custody of a minor. Discrimination includes refusing to rent, imposing different terms, or restricting children to certain areas of a property.',
    example: 'A condominium association that barred children from the swimming pool during prime hours was found to have discriminated on the basis of familial status.',
  },

  // ── Real Estate Law (~35) ─────────────────────────────────────────────────

  'VRLTA landlord obligations': {
    definition: 'Under the Virginia Residential Landlord and Tenant Act, landlords must maintain the dwelling in a fit and habitable condition, comply with applicable building and housing codes, make necessary repairs, maintain common areas, and provide running water, hot water, heat, and working plumbing and electrical systems.',
    example: 'A landlord who failed to repair a broken furnace during winter violated VRLTA landlord obligations, giving the tenant the right to seek remedies including rent abatement.',
  },
  'VRLTA tenant remedies': {
    definition: 'Under the VRLTA, tenants may pursue remedies for landlord noncompliance including sending a written notice of breach, filing a tenant assertion in court, obtaining a rent escrow, seeking an injunction, or terminating the lease if the breach is material and not cured within the required period.',
    example: 'After the landlord failed to address a persistent mold issue within 30 days of written notice, the tenant exercised VRLTA remedies by withholding rent into a court escrow account.',
  },
  'resale disclosure packet': {
    definition: 'A packet of documents required under the Virginia Property Owners Association Act (POAA) that must be delivered to a buyer when purchasing property in a POA community. It includes the association\'s governing documents, financial statements, rules, meeting minutes, insurance information, and any pending assessments or litigation.',
    example: 'The buyer exercised their right to cancel the contract within three days of receiving the resale disclosure packet after discovering the HOA was involved in costly litigation.',
  },
  'condominium resale certificate': {
    definition: 'A document required by the Virginia Condominium Act that provides a buyer with critical information about a condominium unit including assessments owed, the association\'s financial condition, insurance coverage, pending litigation, and any restrictions on use. The buyer has a right to cancel within three days of receipt.',
    example: 'The condominium resale certificate revealed that the association had a special assessment of $5,000 per unit pending, which the buyer negotiated with the seller to pay at settlement.',
  },
  'Common Interest Community': {
    definition: 'A real estate development in which individually owned lots or units are burdened by an obligation to pay assessments to a common entity that is responsible for managing common areas and enforcing community standards. CICs include condominiums, cooperatives, and property owners associations.',
    example: 'Virginia requires all Common Interest Communities to register with the CIC Board and comply with state regulations regarding financial disclosures and governance.',
  },
  'CIC Board': {
    definition: 'The Common Interest Community Board, a regulatory body within DPOR that oversees homeowners associations, condominium associations, cooperative associations, and the professionals who manage them in Virginia. The board establishes standards and handles complaints.',
    example: 'An HOA management company must hold a license regulated by the CIC Board and comply with Virginia\'s Common Interest Community Management regulations.',
  },
  'Megan\'s Law': {
    definition: 'Federal legislation requiring states to maintain sex offender registries and make information available to the public. In real estate, agents should be aware that Virginia law does not require seller or agent disclosure of a registered sex offender in the area, but the Virginia Sex Offender Registry is publicly accessible.',
    example: 'While an agent is not required to disclose that a sex offender lives nearby, they should inform buyers that Virginia\'s sex offender registry is searchable at the State Police website.',
  },
  'sex offender registry': {
    definition: 'A publicly accessible database maintained by the Virginia State Police containing information about convicted sex offenders. Real estate agents are not required to disclose proximity to a registered offender, but should direct interested buyers to the registry as a resource.',
    example: 'The listing agent informed the buyer\'s agent that the Virginia sex offender registry is publicly available online, rather than making a direct statement about offenders in the neighborhood.',
  },
  'SCRA': {
    definition: 'Servicemembers Civil Relief Act, a federal law that provides protections for active-duty military personnel in areas including lease termination, foreclosure proceedings, default judgments, and interest rate reductions. It allows service members to break residential leases without penalty upon receiving qualifying military orders.',
    example: 'A tenant who received PCS orders to a base more than 35 miles away lawfully terminated their lease with 30 days written notice under the SCRA, with no early termination fee.',
  },
  'Servicemembers Civil Relief Act': {
    definition: 'Federal legislation that protects active-duty military personnel from certain civil obligations. Key real estate provisions include the right to terminate a lease upon deployment or permanent change of station, a 9% interest rate cap on pre-service mortgages, and a stay on foreclosure proceedings during and up to 12 months after military service.',
    example: 'A lender was required to reduce the interest rate on a service member\'s pre-existing mortgage to 6% from 7.5% under the Servicemembers Civil Relief Act during their period of active duty.',
  },
  'National Flood Insurance Program': {
    definition: 'A FEMA-administered program that makes federally backed flood insurance available to homeowners, renters, and businesses in communities that adopt floodplain management regulations. Participation is mandatory for properties in Special Flood Hazard Areas with federally backed mortgages.',
    example: 'The lender required the borrower to purchase flood insurance through the National Flood Insurance Program because the property was located within a designated Special Flood Hazard Area.',
  },
  'flood zone': {
    definition: 'A geographic area identified on a FEMA Flood Insurance Rate Map (FIRM) that indicates the level of flood risk. Zone A and Zone V designations represent high-risk Special Flood Hazard Areas where flood insurance is typically mandatory for federally backed mortgages.',
    example: 'The buyer\'s lender identified the property in flood zone AE on the FIRM map, requiring mandatory flood insurance as a condition of the mortgage.',
  },
  'FEMA': {
    definition: 'Federal Emergency Management Agency, the federal agency responsible for producing Flood Insurance Rate Maps (FIRMs), administering the National Flood Insurance Program, and coordinating disaster response. In real estate, FEMA flood maps determine insurance requirements and can impact property values.',
    example: 'After FEMA updated the flood maps for the area, several properties were reclassified into a high-risk zone, requiring their owners to obtain flood insurance upon mortgage renewal.',
  },
  'Special Flood Hazard Area': {
    definition: 'An area designated by FEMA with a 1% or greater annual chance of flooding (also called the 100-year floodplain). Properties in an SFHA with federally backed mortgages must carry flood insurance, and new construction within SFHAs must meet specific elevation and construction standards.',
    example: 'The survey confirmed the property was partially within the Special Flood Hazard Area, requiring the buyer to obtain flood insurance and the seller to disclose the flood zone status.',
  },
  'USBC': {
    definition: 'Virginia Uniform Statewide Building Code, the regulatory framework governing building construction, maintenance, and fire prevention throughout Virginia. It is administered locally but enforced uniformly statewide, covering new construction, renovations, and building maintenance standards.',
    example: 'The home inspector noted that the addition was built without a permit and did not comply with USBC requirements for egress windows in bedrooms.',
  },
  'Virginia Uniform Statewide Building Code': {
    definition: 'The state building code that establishes minimum standards for construction, alteration, maintenance, and use of buildings in Virginia. It incorporates the International Building Code with Virginia-specific amendments and is enforced by local building officials.',
    example: 'The local building department cited the contractor for failing to install the electrical panel per Virginia Uniform Statewide Building Code specifications.',
  },
  'smoke detector requirement': {
    definition: 'Virginia law requires functioning smoke detectors in every dwelling unit, including at least one on every level and outside each sleeping area. The VRLTA places responsibility on the landlord to install and maintain smoke detectors, and tenants must not disable them.',
    example: 'During the pre-settlement walkthrough, the buyer\'s agent noted that the basement lacked a smoke detector, which the seller was required to install per Virginia law before closing.',
  },
  'carbon monoxide detector': {
    definition: 'Virginia law requires carbon monoxide detectors in dwelling units that contain a fossil-fuel-burning appliance, fireplace, or attached garage. Detectors must be installed on each level and outside sleeping areas. The requirement applies to new construction and upon change of occupancy.',
    example: 'The rental property inspection revealed the absence of carbon monoxide detectors near the gas furnace, which the landlord was required to install under Virginia code before a new tenant moved in.',
  },
  'declarant': {
    definition: 'The person or entity (typically the developer) who creates a common interest community by recording the declaration. The declarant retains certain rights during the development and sales period, including control of the association board.',
    example: 'The declarant retained three of five seats on the HOA board until 75% of the lots were sold, at which point control transitioned to the homeowners.',
  },
  'declarant control period': {
    definition: 'The period during which the developer (declarant) maintains control of the community association\'s board of directors. Virginia law requires that control transition to the homeowners no later than when a specified percentage of units are sold or a certain number of years have passed.',
    example: 'During the declarant control period, the developer approved a budget that underestimated reserves, leaving the association underfunded when homeowner control began.',
  },
  'public offering statement': {
    definition: 'A disclosure document required under the Virginia Condominium Act that a developer must provide to purchasers of new condominium units before or at the time of contract. It includes a description of the project, budget, assessments, bylaws, warranties, and any pending litigation.',
    example: 'The buyer reviewed the public offering statement and learned that the developer planned to convert the remaining unsold units to rentals, which factored into their purchase decision.',
  },
  'Virginia Transaction Recovery Fund': {
    definition: 'A fund maintained by DPOR that compensates consumers who have suffered financial loss due to the actions of a Virginia-licensed real estate agent when the licensee is unable to pay a court judgment. Recovery is capped at $20,000 per transaction and $100,000 per licensee.',
    example: 'After the court awarded the buyer $15,000 in damages that the agent could not pay, the buyer applied to the Virginia Transaction Recovery Fund for reimbursement.',
  },
  'Virginia Residential Property Disclosure Act': {
    definition: 'Virginia law that requires sellers of residential property to provide buyers with either the Residential Property Disclosure Statement containing specific disclosures about known property conditions, or a disclaimer stating the property is being sold as-is with no representations. The disclosure is not a warranty.',
    example: 'The seller chose to complete the full Residential Property Disclosure Statement rather than the disclaimer form, disclosing known foundation repairs from 2019.',
  },
  'wet settlement act': {
    definition: 'Virginia law requiring that the settlement agent disburse settlement proceeds on the same day as closing or the next business day, and that all funds be collected before or at settlement. This protects sellers from delayed payment and ensures that all financial obligations are met at closing.',
    example: 'Under the wet settlement act, the settlement agent could not close until the buyer\'s wire transfer was confirmed as received, ensuring same-day disbursement to the seller.',
  },

  // ── Ethics (~20) ──────────────────────────────────────────────────────────

  'NAR Code of Ethics': {
    definition: 'A comprehensive set of professional standards adopted by the National Association of REALTORS consisting of 17 Articles and accompanying Standards of Practice. REALTORS are held to these standards in addition to state law. The Code is enforced through local board arbitration and ethics hearings.',
    example: 'The agent was found in violation of Article 1 of the NAR Code of Ethics for failing to protect and promote the best interests of their client.',
  },
  'Standards of Practice': {
    definition: 'Detailed interpretive provisions that support each Article of the NAR Code of Ethics. They clarify what conduct does and does not violate the Articles, providing practical guidance for REALTORS in specific situations.',
    example: 'Standard of Practice 1-16 clarifies that REALTORS are not obligated to discover latent defects but must disclose all facts known to them that could affect a buyer\'s decision.',
  },
  'OLDCAR': {
    definition: 'An acronym for the six fiduciary duties owed by an agent to their client: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, and Reasonable care (or diligence). These duties form the foundation of the agency relationship in real estate.',
    example: 'The listing agent breached the OLDCAR duty of disclosure by failing to inform the seller about a competing offer received that same afternoon.',
  },
  'fiduciary duty': {
    definition: 'The highest legal duty of trust and confidence owed by an agent to their principal (client). A fiduciary must act in the client\'s best interest at all times, placing the client\'s interests above their own and above those of third parties.',
    example: 'The buyer\'s agent violated their fiduciary duty by recommending an inspector who they knew would overlook defects in order to keep the deal together.',
  },
  'misrepresentation': {
    definition: 'A false statement of material fact made by an agent, whether intentional (fraudulent), negligent, or innocent. All forms of misrepresentation can create liability. Agents have an affirmative duty to avoid making false or misleading statements about a property.',
    example: 'The listing agent committed misrepresentation by describing the basement as "completely dry" when the agent knew the seller had previously disclosed water intrusion.',
  },
  'puffing': {
    definition: 'Exaggerated statements of opinion or subjective praise about a property that a reasonable person would not rely upon as a statement of fact. Unlike misrepresentation, puffing is generally not actionable because it involves opinion rather than verifiable facts.',
    example: '"This is the best neighborhood in Richmond" is puffing, but "This house has never had any water damage" is a statement of fact that could be misrepresentation if untrue.',
  },
  'fraud': {
    definition: 'An intentional misrepresentation of a material fact, made with knowledge of its falsity, with the intent to deceive, upon which the other party justifiably relies to their detriment. Real estate fraud can result in contract rescission, civil damages, license revocation, and criminal prosecution.',
    example: 'The agent committed fraud by forging the seller\'s signature on a counteroffer, knowing the seller had not agreed to the terms.',
  },
  'wire fraud': {
    definition: 'A scheme to defraud involving electronic communications, increasingly common in real estate transactions where criminals intercept email communications and send fraudulent wiring instructions to divert closing funds. Wire fraud in real estate has caused hundreds of millions in losses annually.',
    example: 'The buyer lost $47,000 when a hacker intercepted the settlement agent\'s email and sent fraudulent wire transfer instructions with a different bank account number.',
  },
  'BEC': {
    definition: 'Business Email Compromise, a type of cybercrime in which criminals gain access to or spoof a legitimate business email account to redirect wire transfers or obtain sensitive information. In real estate, BEC attacks commonly target settlement agents, lenders, and agents to steal closing funds.',
    example: 'The title company\'s email was compromised in a BEC attack, and the buyer received an email that appeared to come from the settlement agent but contained fraudulent wiring instructions.',
  },
  'E&O insurance': {
    definition: 'Errors and Omissions insurance, a professional liability policy that protects real estate agents and brokers against claims arising from negligent acts, errors, or omissions in the course of their professional duties. Many brokerages require E&O coverage for all affiliated agents.',
    example: 'When the buyer sued the agent for failing to disclose a known zoning issue, the agent\'s E&O insurance covered the legal defense costs and the settlement amount.',
  },
  'errors and omissions': {
    definition: 'Professional mistakes (errors) or failures to act (omissions) that cause harm to a client or customer in a real estate transaction. Even without intent to deceive, an agent can be liable for negligent errors or omissions.',
    example: 'The agent\'s omission of including the refrigerator in the personal property list, despite the buyer\'s request, constituted a professional error that resulted in a post-closing dispute.',
  },
  'material fact': {
    definition: 'Any fact that would affect a reasonable person\'s decision to enter into, or the terms of, a real estate transaction. Virginia law requires agents to disclose all material facts known to them. What constitutes a material fact can vary by transaction and jurisdiction.',
    example: 'The presence of a leaking underground storage tank on the property was a material fact that the listing agent was obligated to disclose to all prospective buyers.',
  },
  'latent defect': {
    definition: 'A hidden defect in a property that is not discoverable through reasonable inspection and that is known to the seller or their agent. Sellers and their agents have a duty to disclose known latent defects even in as-is transactions.',
    example: 'The cracked foundation hidden behind finished drywall was a latent defect that the seller knew about but failed to disclose, resulting in liability despite the as-is clause.',
  },
  'patent defect': {
    definition: 'A visible, obvious defect that can be discovered through a reasonable inspection of the property. Buyers are generally expected to discover patent defects through their own due diligence, and sellers have less liability for defects that are readily apparent.',
    example: 'The large crack visible across the living room ceiling was a patent defect that the buyer could have observed during the showing and was not grounds for a misrepresentation claim.',
  },
  'unauthorized practice of law': {
    definition: 'The act of providing legal advice or performing legal services without a law license. Real estate agents must avoid drafting legal documents, interpreting contracts for legal meaning, or advising clients on legal rights. Agents may fill in blanks on approved standard forms but cannot draft custom contract language.',
    example: 'The agent crossed the line into unauthorized practice of law when they drafted a custom addendum modifying the contract\'s liability provisions rather than recommending the client consult an attorney.',
  },
  'commingling': {
    definition: 'The illegal practice of mixing client or customer trust funds with a broker\'s own personal or business operating funds. Virginia law requires that all trust funds be deposited into a separate, properly designated trust account.',
    example: 'The broker committed commingling by depositing a buyer\'s earnest money into the brokerage operating account instead of the designated trust account.',
  },
  'conversion (trust funds)': {
    definition: 'The unauthorized use of client or customer funds held in trust for the broker\'s or another party\'s personal benefit. Conversion is one of the most serious violations in real estate and typically results in license revocation and potential criminal charges.',
    example: 'The broker was charged with conversion after using $25,000 in tenant security deposits from the trust account to cover the brokerage\'s payroll expenses.',
  },

  // ── Current Industry (~25) ────────────────────────────────────────────────

  'NAR settlement': {
    definition: 'The landmark 2024 settlement agreement between the National Association of REALTORS and plaintiffs in the Sitzer/Burnett and related antitrust lawsuits. Key changes include: sellers are no longer required to offer buyer agent compensation through the MLS, buyers must sign written representation agreements before touring homes, and MLS fields for buyer agent compensation offers were removed.',
    example: 'Following the NAR settlement, the listing agent no longer entered a buyer agent commission amount in the MLS but instead negotiated compensation directly with cooperating agents or through the purchase contract.',
  },
  'Sitzer/Burnett': {
    definition: 'The 2023 federal antitrust lawsuit (Burnett v. National Association of REALTORS) in which a jury found NAR and major brokerages liable for conspiring to inflate real estate commissions. The verdict led to the historic NAR settlement that reshaped how buyer agent compensation is handled nationwide.',
    example: 'The Sitzer/Burnett verdict held that the traditional MLS requirement for sellers to offer buyer agent compensation constituted an antitrust violation.',
  },
  'buyer broker agreement': {
    definition: 'A written contract between a buyer and a real estate broker establishing the terms of the agency relationship, including the scope of services, duration, and compensation. Following the NAR settlement, a written buyer broker agreement is required before an agent can show properties to a buyer.',
    example: 'Before the first showing, the agent and buyer executed a buyer broker agreement specifying a 2.5% commission, a 90-day term, and the geographic area covered.',
  },
  'buyer representation agreement': {
    definition: 'A written agreement that formalizes the agency relationship between a buyer and their broker, specifying the duties, compensation, duration, and terms of termination. Under the post-NAR-settlement rules, the agreement must clearly state the amount or rate of compensation the buyer agrees to pay.',
    example: 'The buyer representation agreement specified that the buyer would pay their agent 2% of the purchase price, which could be offset by any seller contribution toward buyer agent compensation.',
  },
  'MLS participation': {
    definition: 'The rules and obligations governing a broker\'s membership in a Multiple Listing Service. Post-NAR settlement, MLS participation rules were modified to remove the requirement that listing brokers offer blanket compensation to buyer brokers as a condition of listing on the MLS.',
    example: 'Under the updated MLS participation rules, the listing broker entered the property data and photos but no longer included a predetermined buyer agent compensation offer.',
  },
  'Remote Online Notarization': {
    definition: 'A process by which a notary public notarizes documents for a signer who is not physically present, using audio-video communication technology. Virginia was the first state to enact RON legislation and permits its use for real estate documents including deeds and deeds of trust.',
    example: 'The out-of-state buyer completed closing via Remote Online Notarization, appearing by secure video call with identity verification while the Virginia notary applied their electronic seal.',
  },
  'RON': {
    definition: 'Remote Online Notarization, Virginia\'s technology-enabled notarization process allowing signers to appear before a notary via real-time audio-video communication rather than in person. Virginia Code Section 47.1-2 authorizes RON, and all RON sessions must be recorded and retained for at least five years.',
    example: 'The settlement agent offered the seller the option of closing via RON rather than traveling back to Virginia for an in-person signing.',
  },
  'electronic signature': {
    definition: 'An electronic sound, symbol, or process attached to or logically associated with a record that is executed or adopted by a person with the intent to sign. Both federal (E-SIGN Act) and Virginia (UETA) law give electronic signatures the same legal validity as handwritten signatures in most real estate transactions.',
    example: 'The buyer electronically signed the purchase agreement using a digital transaction management platform, which was fully enforceable under UETA and the E-SIGN Act.',
  },
  'UETA': {
    definition: 'Uniform Electronic Transactions Act, adopted by Virginia, which establishes the legal equivalence of electronic records and signatures with their paper and ink counterparts. UETA applies when parties have agreed to conduct transactions by electronic means.',
    example: 'Virginia\'s adoption of UETA allowed the listing agent to send the seller a counteroffer for electronic signature rather than requiring a wet-ink signature.',
  },
  'E-SIGN Act': {
    definition: 'Electronic Signatures in Global and National Commerce Act, a federal law enacted in 2000 that grants electronic signatures and records the same legal standing as handwritten signatures and paper documents in interstate and foreign commerce.',
    example: 'The out-of-state lender relied on the E-SIGN Act to accept the borrower\'s electronically signed loan application and disclosure documents.',
  },
  'iBuyer': {
    definition: 'A technology-enabled real estate company that uses automated valuation models and algorithms to make instant or near-instant cash offers on residential properties. iBuyers purchase homes directly from sellers, typically for a service fee, and then resell them after making repairs.',
    example: 'The seller received an iBuyer offer that was 5% below market value but provided the convenience of a guaranteed closing within two weeks with no contingencies.',
  },
  'PropTech': {
    definition: 'Property Technology, the application of information technology to real estate markets. PropTech encompasses digital transaction management, automated valuations, virtual showings, smart home technology, blockchain-based title systems, and AI-powered market analysis.',
    example: 'The brokerage invested in PropTech tools including a CRM system, digital transaction management platform, and AI-powered lead scoring to streamline operations.',
  },
  'AVM': {
    definition: 'Automated Valuation Model, a technology-driven tool that estimates property values using mathematical modeling, public records, and comparable sales data. AVMs are used by lenders, iBuyers, and real estate portals but are not substitutes for a professional appraisal.',
    example: 'The lender\'s AVM estimated the property at $425,000, but the licensed appraisal came in at $410,000, demonstrating the limitations of automated valuations.',
  },
  'IDX': {
    definition: 'Internet Data Exchange, a system and set of policies that allow MLS participants to display each other\'s listings on their websites. IDX enables consumers to search the full MLS inventory through individual broker and agent websites.',
    example: 'The agent\'s website displayed all active listings in the market through an IDX feed, allowing visitors to search the full MLS inventory without visiting the MLS directly.',
  },
  'listing syndication': {
    definition: 'The process by which MLS listing data is distributed to third-party real estate websites and portals such as Zillow, Realtor.com, and Redfin. Syndication increases exposure but raises concerns about data accuracy and unauthorized use of listing content.',
    example: 'The listing agent syndicated the property to 50+ websites through the MLS, but the seller opted out of syndication to Zillow to maintain a more controlled marketing approach.',
  },
  'CRM': {
    definition: 'Customer Relationship Management, a software system used by real estate professionals to manage contacts, track communications, automate follow-ups, and nurture leads through the sales pipeline. A CRM is a core tool for agent productivity and client retention.',
    example: 'The agent\'s CRM automatically sent a market update email to past clients every quarter, generating three listing appointments from the most recent campaign.',
  },
  'digital transaction management': {
    definition: 'Cloud-based platforms that enable the creation, execution, and management of real estate documents electronically. DTM systems handle electronic signatures, document storage, task tracking, and compliance workflows throughout the transaction lifecycle.',
    example: 'The brokerage adopted a digital transaction management platform that allowed agents to send, sign, and store all transaction documents electronically, eliminating paper files.',
  },
  'algorithm bias': {
    definition: 'Systematic errors in automated decision-making systems that produce unfair outcomes for certain groups. In real estate, algorithm bias can appear in automated valuations, lending algorithms, tenant screening tools, and advertising targeting, potentially violating fair housing laws.',
    example: 'A study found algorithm bias in a major real estate portal\'s home valuation tool, which consistently undervalued properties in predominantly minority neighborhoods compared to similar properties elsewhere.',
  },
  'AI in real estate': {
    definition: 'The application of artificial intelligence technologies to real estate processes including property valuation, market forecasting, lead generation, document analysis, virtual staging, and chatbot-driven customer service. Agents must understand both the opportunities and the fair housing risks associated with AI tools.',
    example: 'The brokerage implemented an AI tool that analyzed listing descriptions for potential fair housing violations before publication, flagging phrases that could indicate discriminatory preferences.',
  },
  'virtual tour': {
    definition: 'An interactive, technology-driven experience that allows prospective buyers to explore a property remotely through 360-degree photography, video walkthroughs, or 3D modeling. Virtual tours became an essential marketing tool for accessibility and out-of-area buyers.',
    example: 'The listing agent invested in a professional virtual tour that increased online engagement by 40% and attracted three out-of-state buyers who made offers sight-unseen.',
  },
  '3D walkthrough': {
    definition: 'An immersive digital representation of a property created using specialized cameras and software that allows users to navigate through the space as if physically present. Unlike a video tour, a 3D walkthrough is interactive and user-controlled.',
    example: 'The relocating buyer used the Matterport 3D walkthrough to examine every room of the property before flying in for a single in-person visit before closing.',
  },

  // ── Agency (~20) ──────────────────────────────────────────────────────────

  'brokerage agreement': {
    definition: 'A written contract that establishes the agency relationship between a client and a real estate broker, defining the scope of representation, duties, compensation, and duration. Virginia requires written brokerage agreements for both listing and buyer representation.',
    example: 'The Virginia DPOR Guidance Document emphasizes that a brokerage agreement must be in writing before an agent provides substantive real estate assistance to a client.',
  },
  'Guidance Document on Necessity for Brokerage Agreements': {
    definition: 'A DPOR guidance document issued by the Virginia Real Estate Board clarifying that licensees must enter into written brokerage agreements with clients before providing real estate brokerage services. The document specifies what constitutes substantive real estate assistance requiring a written agreement.',
    example: 'Citing the Guidance Document, the broker required all agents to obtain a signed brokerage agreement before scheduling the first property showing for any buyer.',
  },
  'standard agent': {
    definition: 'A real estate agent who provides the full range of brokerage services to their client, including all fiduciary duties (OLDCAR). A standard agent represents the client comprehensively throughout the transaction.',
    example: 'As a standard agent, the listing broker owed the seller full fiduciary duties including loyalty, confidentiality, and proactive disclosure of all material information.',
  },
  'limited service agent': {
    definition: 'A licensee who provides fewer than the full range of real estate brokerage services, as agreed upon in writing with the client. The specific limitations must be clearly stated in the brokerage agreement, and the agent still owes honesty and fair dealing to all parties.',
    example: 'The limited service agent agreed to list the property on the MLS and handle paperwork but did not provide pricing advice or showing coordination, as specified in their written agreement.',
  },
  'dual representation': {
    definition: 'A situation in which the same brokerage firm represents both the buyer and seller in the same transaction. Virginia permits dual representation only with the informed written consent of both parties, and the agent must remain neutral, unable to advocate for either side.',
    example: 'After obtaining written consent from both parties, the agent operated under dual representation, facilitating the transaction without advocating for either the buyer\'s lower price or the seller\'s higher price.',
  },
  'designated representation': {
    definition: 'A practice in Virginia where a broker designates one licensee within the firm to represent the seller and a different licensee to represent the buyer in the same transaction. Each designated representative owes full fiduciary duties to their respective client.',
    example: 'Rather than using dual agency, the principal broker designated Agent A to represent the seller and Agent B to represent the buyer, allowing each agent to advocate fully for their client.',
  },
  'ministerial act': {
    definition: 'An action performed by a licensee that does not involve discretion or judgment and does not rise to the level of active representation. Ministerial acts include providing factual information, writing and conveying offers, and scheduling appointments. Performing ministerial acts does not create an agency relationship.',
    example: 'Opening a lockbox to allow access to a property is a ministerial act that does not establish an agency relationship between the agent and the buyer viewing the home.',
  },
  'first substantive contact': {
    definition: 'The point during an interaction between a licensee and a prospective client at which the conversation moves beyond general information and into specific real estate assistance, such as discussing property details, pricing, or negotiation strategy. Virginia requires agency disclosure at or before this point.',
    example: 'When the buyer began asking the open house agent for advice about making an offer, the agent recognized this as first substantive contact and provided the required brokerage disclosure form.',
  },
  'agency disclosure': {
    definition: 'The legally required disclosure to all parties in a transaction regarding who the agent represents. Virginia law mandates that agents provide a written disclosure of brokerage relationship at the earliest practical time but no later than the first substantive contact.',
    example: 'The buyer\'s agent provided a written agency disclosure explaining that she represented only the buyer\'s interests before discussing any properties in detail.',
  },
  'client vs. customer': {
    definition: 'A client has entered into a brokerage agreement and is owed fiduciary duties by the agent. A customer has no brokerage agreement and is owed only honesty, fair dealing, and disclosure of material adverse facts. The distinction determines the level of service and loyalty the agent must provide.',
    example: 'The unrepresented buyer at the open house was a customer of the listing agent, entitled to honest treatment but not the confidentiality or loyalty owed to the seller, who was the agent\'s client.',
  },
  'vicarious liability': {
    definition: 'The legal doctrine holding a broker responsible for the acts of their affiliated agents committed within the scope of the agency relationship. The principal broker can be held liable for an agent\'s negligence or misconduct even if the broker was unaware of the specific actions.',
    example: 'When the salesperson misrepresented the property\'s square footage, the principal broker was held vicariously liable because the misrepresentation occurred in the course of the agent\'s duties.',
  },
  'apparent authority': {
    definition: 'Authority that a third party reasonably believes an agent possesses based on the actions, words, or conduct of the principal (broker), even if the agent has not actually been granted that authority. A broker can be bound by an agent\'s actions under apparent authority.',
    example: 'The buyer relied on the salesperson\'s representation that the seller would accept a specific price, and the broker was bound because the agent had apparent authority to communicate such information.',
  },
  'actual authority': {
    definition: 'The authority explicitly granted to an agent by the principal, either expressly through a written agreement or impliedly through the nature of the agency relationship. Actual authority defines what the agent is legally permitted to do on behalf of the principal.',
    example: 'The listing agreement expressly gave the agent actual authority to market the property, schedule showings, and present offers, but not to accept offers on behalf of the seller.',
  },
  'scope of authority': {
    definition: 'The boundaries of an agent\'s authorized actions as defined by the brokerage agreement, firm policies, and state law. An agent who acts beyond their scope of authority may bind their broker through apparent authority but exposes themselves to disciplinary action.',
    example: 'The salesperson exceeded their scope of authority by verbally agreeing to a price reduction without the seller\'s written consent, creating potential liability for the brokerage.',
  },
  'buyer consultation': {
    definition: 'An initial meeting between a buyer and a prospective agent to discuss the buyer\'s needs, the agent\'s services, market conditions, the home buying process, and the terms of the buyer representation agreement. Post-NAR settlement, the buyer consultation is the critical moment for securing a written agreement.',
    example: 'During the buyer consultation, the agent explained the new compensation structure, walked through the buyer representation agreement, and set expectations for the home search process.',
  },

  // ── Contracts (~30) ───────────────────────────────────────────────────────

  'ratification': {
    definition: 'The final acceptance and execution of a contract by all parties, creating a binding agreement. In Virginia real estate, ratification occurs when the last party signs and the signed contract is communicated to the other party or their agent. The ratification date is critical for calculating contingency deadlines.',
    example: 'The contract was ratified on March 15 when the seller signed the buyer\'s offer and the listing agent communicated the acceptance to the buyer\'s agent, starting the clock on all contingency periods.',
  },
  'delivery': {
    definition: 'The act of transferring a signed legal document to the other party or their authorized representative. Delivery is essential for a contract or deed to become effective. In modern practice, electronic delivery of contracts is common and legally recognized.',
    example: 'The counteroffer was not binding until delivery was completed by emailing the signed document to the buyer\'s agent before the expiration deadline.',
  },
  'back-up offer': {
    definition: 'An offer accepted by the seller in secondary position behind an existing ratified contract. The back-up offer becomes the primary contract only if the first contract is terminated. In Virginia, sellers must disclose the existence of a ratified contract before accepting back-up offers.',
    example: 'The seller accepted the second buyer\'s offer as a back-up, and when the first buyer failed to obtain financing, the back-up offer automatically moved to primary position.',
  },
  'escalation clause': {
    definition: 'A provision in a purchase offer that automatically increases the buyer\'s offer price by a specified amount above any competing offer, up to a maximum cap. Escalation clauses are commonly used in competitive markets with multiple offers.',
    example: 'The buyer\'s offer included an escalation clause that would beat any competing offer by $3,000, up to a maximum price of $475,000.',
  },
  'contingency': {
    definition: 'A condition in a real estate contract that must be satisfied before the parties are obligated to perform. Common contingencies include financing, inspection, and appraisal. If a contingency is not met, the affected party may typically cancel the contract without penalty.',
    example: 'The buyer\'s financing contingency allowed them to terminate the contract and recover their earnest money when the mortgage application was denied.',
  },
  'financing contingency': {
    definition: 'A contract provision that makes the buyer\'s obligation to purchase conditional on obtaining a mortgage loan on specified terms within a stated time period. If the buyer cannot secure financing despite good faith efforts, they may terminate the contract and recover their earnest money deposit.',
    example: 'The financing contingency gave the buyer 30 days to obtain a conventional loan at no more than 7% interest, and when rates rose above that threshold, the buyer exercised the contingency to exit the contract.',
  },
  'inspection contingency': {
    definition: 'A contract provision that allows the buyer to have the property professionally inspected within a specified timeframe and to negotiate repairs, credits, or termination based on the inspection findings. This contingency protects buyers from purchasing properties with undiscovered defects.',
    example: 'The home inspection contingency gave the buyer 10 days to complete inspections and submit a repair request; the buyer negotiated a $5,000 credit for roof repairs discovered during inspection.',
  },
  'appraisal contingency': {
    definition: 'A contract provision that makes the purchase conditional on the property appraising at or above the purchase price. If the appraisal comes in below the contract price, the buyer can renegotiate, make up the difference in cash, or terminate the contract.',
    example: 'The property appraised at $20,000 below the contract price, and the buyer invoked the appraisal contingency to renegotiate the price to the appraised value.',
  },
  'mutual release': {
    definition: 'A written agreement signed by all parties to a contract releasing each other from further obligations under the contract. A mutual release is the proper way to terminate a ratified contract when both parties agree, and it typically addresses the disposition of the earnest money deposit.',
    example: 'After the inspection revealed extensive termite damage, the buyer and seller signed a mutual release, with the earnest money returned to the buyer.',
  },
  'interpleader': {
    definition: 'A legal action filed by a party holding disputed funds (such as a broker holding earnest money) asking the court to determine the rightful recipient. Interpleader allows the holder to deposit the funds with the court and be released from liability rather than making a potentially wrong disbursement decision.',
    example: 'When both the buyer and seller claimed the $15,000 earnest money deposit after the contract fell through, the broker filed an interpleader action to let the court decide.',
  },
  'novation': {
    definition: 'The substitution of a new party, obligation, or contract for an existing one, with the consent of all parties involved. In a novation, the original party is completely released from liability, unlike an assignment where the original party may remain liable.',
    example: 'The original buyer executed a novation substituting a new buyer into the purchase contract, completely releasing the original buyer from all contractual obligations.',
  },
  'assignment': {
    definition: 'The transfer of rights under a contract from one party (assignor) to another (assignee). In real estate, unless prohibited by the contract terms, a buyer may assign their purchase agreement to a third party, but the original buyer may remain liable if the assignee defaults.',
    example: 'The investor assigned the purchase contract to their LLC before closing, but remained liable for performance because the assignment did not include a novation.',
  },
  'net lease': {
    definition: 'A commercial lease in which the tenant pays a base rent plus some or all of the property expenses such as real estate taxes, insurance, and maintenance costs, in addition to the base rent amount.',
    example: 'Under the net lease, the commercial tenant paid $2,000 per month in base rent plus their proportionate share of property taxes.',
  },
  'triple net lease': {
    definition: 'A commercial lease (NNN) in which the tenant pays all three major expense categories in addition to base rent: property taxes, insurance, and maintenance (including structural repairs). Triple net leases shift nearly all operating costs from the landlord to the tenant.',
    example: 'The national pharmacy chain signed a 15-year triple net lease under which they were responsible for base rent plus all taxes, insurance premiums, and building maintenance costs.',
  },
  'ground lease': {
    definition: 'A long-term lease of land only, typically for 50 to 99 years, on which the tenant constructs improvements. At lease expiration, improvements typically revert to the landowner unless the lease is renewed. Ground leases are common for commercial developments.',
    example: 'The developer entered a 75-year ground lease for the downtown parcel, constructing a 10-story mixed-use building that would revert to the land owner at lease expiration.',
  },
  'gross lease': {
    definition: 'A lease in which the landlord pays all operating expenses (taxes, insurance, maintenance) from the rental income, and the tenant pays a single, all-inclusive rent amount. Gross leases are common in residential and some office rental situations.',
    example: 'Under the gross lease, the office tenant paid $3,500 per month in rent and the landlord covered all property taxes, insurance, and common area maintenance from that amount.',
  },
  'percentage lease': {
    definition: 'A commercial lease, common in retail, in which the tenant pays a base rent plus a percentage of gross sales that exceed a specified breakpoint. This structure aligns the landlord\'s income with the tenant\'s business success.',
    example: 'The restaurant\'s percentage lease required $4,000 per month base rent plus 6% of gross sales exceeding $80,000 per month, giving the landlord additional income during peak seasons.',
  },
  'Statute of Frauds': {
    definition: 'A legal doctrine requiring certain contracts to be in writing and signed to be enforceable. In Virginia real estate, contracts for the sale of land, leases exceeding one year, and agreements that cannot be performed within one year must be in writing under the Statute of Frauds.',
    example: 'The verbal agreement to sell the vacant lot was unenforceable under the Statute of Frauds because real estate contracts must be in writing to be legally binding.',
  },
  'parol evidence rule': {
    definition: 'A legal principle that prevents parties from introducing prior or contemporaneous oral agreements to contradict, modify, or vary the terms of a final written contract. In real estate, this means verbal promises made during negotiation cannot override the written contract terms.',
    example: 'The buyer\'s claim that the seller verbally agreed to include the riding mower was barred by the parol evidence rule because the mower was not listed in the written contract.',
  },
  'liquidated damages': {
    definition: 'A predetermined amount of damages agreed upon by the parties at the time of contract formation, payable in the event of a breach. In real estate purchase agreements, the earnest money deposit often serves as the liquidated damages amount if the buyer defaults.',
    example: 'The contract specified that if the buyer defaulted, the seller\'s sole remedy would be retention of the $10,000 earnest money deposit as liquidated damages.',
  },
  'specific performance': {
    definition: 'An equitable remedy in which a court orders the breaching party to fulfill their obligations under the contract rather than pay monetary damages. Specific performance is available in real estate because each property is considered unique and money damages may be inadequate.',
    example: 'When the seller refused to close despite a valid contract, the buyer filed suit for specific performance, and the court ordered the seller to complete the sale.',
  },
  'earnest money': {
    definition: 'A deposit made by the buyer at the time of offer to demonstrate good faith and serious intent to purchase the property. Earnest money is held in a trust account and is applied toward the purchase price at closing or returned to the buyer if the contract is lawfully terminated.',
    example: 'The buyer submitted a $10,000 earnest money deposit with the offer, which was deposited into the listing broker\'s trust account within the time specified by the contract.',
  },
  'default': {
    definition: 'The failure of a party to perform their obligations under a contract without legal excuse. In real estate, a buyer defaults by failing to close or satisfy contingencies, and a seller defaults by refusing to convey the property. The non-defaulting party may pursue available remedies.',
    example: 'The buyer defaulted on the contract by failing to secure financing or request an extension before the financing contingency deadline expired.',
  },
  'breach of contract': {
    definition: 'A violation of any term or condition of a contract without legal excuse. A breach can be material (substantial enough to excuse the other party\'s performance) or minor (not sufficient to excuse performance but may give rise to a claim for damages).',
    example: 'The seller\'s failure to complete the agreed-upon roof repairs before settlement constituted a breach of contract, entitling the buyer to delay closing or seek a credit.',
  },
  'counteroffer': {
    definition: 'A response to an offer that changes one or more terms, which legally constitutes a rejection of the original offer and creates a new offer. The original offeror then becomes the offeree with the power to accept, reject, or counter again.',
    example: 'The seller countered the $400,000 offer at $415,000 with a different closing date, which rejected the original offer and required the buyer to respond to the new terms.',
  },
  'REIN': {
    definition: 'Real Estate Information Network, the regional Multiple Listing Service serving the Hampton Roads and parts of northeastern North Carolina. REIN provides MLS access, standard forms, and market data for its member agents.',
    example: 'The Virginia Beach listing agent entered the new listing into REIN, making it visible to all cooperating brokers and their buyer clients in the Hampton Roads market.',
  },
  'NVAR': {
    definition: 'Northern Virginia Association of REALTORS, one of the largest local REALTOR associations in Virginia. NVAR produces widely used standard contract forms, provides member education, and operates the Bright MLS system for the Northern Virginia region.',
    example: 'The agents used the NVAR standard residential sales contract form, which is specifically tailored for Northern Virginia transactions and reflects current Virginia law.',
  },

  // ── Risk Management (~25) ─────────────────────────────────────────────────

  'RESPA': {
    definition: 'Real Estate Settlement Procedures Act, a federal law that governs the closing process for residential mortgage loans. RESPA prohibits kickbacks and unearned fees, requires disclosure of settlement costs, limits escrow account deposits, and mandates the Loan Estimate and Closing Disclosure forms.',
    example: 'The agent\'s referral arrangement with the title company was reviewed for RESPA compliance to ensure no kickbacks or unearned fees were exchanged for the referral.',
  },
  'Section 8 (RESPA)': {
    definition: 'Section 8 of the Real Estate Settlement Procedures Act, which specifically prohibits giving or receiving any thing of value for the referral of settlement service business in connection with a federally related mortgage loan. Violations can result in criminal fines of up to $10,000 and one year in prison.',
    example: 'A title company offering gift cards to agents for referring clients violated Section 8 of RESPA because the gift was given in exchange for a referral of settlement services.',
  },
  'affiliated business arrangement': {
    definition: 'A relationship in which a person in a position to refer settlement service business has an ownership interest in a settlement service provider. RESPA requires disclosure of the affiliated business arrangement and prohibits requiring the use of the affiliated provider.',
    example: 'The brokerage disclosed its affiliated business arrangement with the title company in writing and informed buyers that they were free to choose any title company.',
  },
  'TRID': {
    definition: 'TILA-RESPA Integrated Disclosure rule, a Consumer Financial Protection Bureau regulation that combined the Truth in Lending Act and RESPA disclosure forms into two integrated documents: the Loan Estimate and the Closing Disclosure. The rule standardized timing requirements and improved consumer understanding of loan costs.',
    example: 'Under TRID, the lender provided the Loan Estimate within three business days of loan application and the Closing Disclosure at least three business days before closing.',
  },
  'Loan Estimate': {
    definition: 'A standardized three-page disclosure required by TRID that lenders must provide within three business days of receiving a mortgage application. It details the estimated interest rate, monthly payment, closing costs, and other loan terms to help borrowers compare offers.',
    example: 'The buyer received Loan Estimates from three different lenders and compared the estimated closing costs and APR to determine the most favorable terms.',
  },
  'Closing Disclosure': {
    definition: 'A standardized five-page disclosure required by TRID that the lender must provide to the borrower at least three business days before closing. It details the final loan terms, monthly payment, closing costs, and all charges. If certain terms change significantly from the Loan Estimate, a new three-day waiting period may be required.',
    example: 'The closing was delayed two days because a change in the interest rate required the lender to issue a revised Closing Disclosure with a new three-day review period.',
  },
  'Sherman Anti-Trust Act': {
    definition: 'Federal legislation that prohibits anticompetitive agreements and conspiracies in restraint of trade. In real estate, the Sherman Act applies to practices such as price fixing commission rates, group boycotts of competitors, market allocation, and tying arrangements.',
    example: 'A group of brokers who agreed to charge the same commission rate in their market area would be in violation of the Sherman Anti-Trust Act for engaging in price fixing.',
  },
  'price fixing': {
    definition: 'An illegal agreement between competitors to set prices at a certain level rather than letting the market determine them. In real estate, this includes brokers conspiring to set standard commission rates, management fees, or any other charges for services.',
    example: 'Two competing brokerages that agreed to both charge a 6% commission rate would be guilty of price fixing under federal antitrust law.',
  },
  'group boycott': {
    definition: 'An illegal agreement among competitors to refuse to do business with a specific individual or company to eliminate competition. In real estate, this can include agents or brokers collectively refusing to cooperate with or show listings from a discount brokerage.',
    example: 'Several brokers who agreed not to show properties listed by a flat-fee MLS service were engaged in an illegal group boycott under antitrust law.',
  },
  'market allocation': {
    definition: 'An illegal antitrust agreement among competitors to divide markets by geography, price range, property type, or other criteria so that each operates without competition in their allocated segment.',
    example: 'Two brokerages that agreed one would handle all sales south of the river and the other would handle all sales north of the river committed market allocation, violating antitrust law.',
  },
  'tying arrangement': {
    definition: 'An illegal antitrust practice in which a seller conditions the sale of one product or service on the buyer\'s agreement to purchase a second, separate product or service. In real estate, requiring clients to use a specific affiliated service provider may constitute a tying arrangement.',
    example: 'A brokerage that required sellers to use its affiliated title company as a condition of listing the property was engaging in an illegal tying arrangement.',
  },
  'Chesapeake Bay Preservation Act': {
    definition: 'Virginia legislation enacted to protect the water quality of the Chesapeake Bay and its tributaries by establishing land use regulations in the Chesapeake Bay watershed. The Act requires localities to designate Resource Protection Areas (RPAs) and Resource Management Areas (RMAs) and restricts development activities near water resources.',
    example: 'The buyer discovered that half of the lot fell within the RPA under the Chesapeake Bay Preservation Act, severely limiting their ability to build an addition or install a pool.',
  },
  'Resource Protection Area': {
    definition: 'A designation under the Chesapeake Bay Preservation Act for the most environmentally sensitive lands adjacent to tidal waters, including tidal wetlands, tidal shores, and a 100-foot vegetated buffer. Development within an RPA is heavily restricted and generally limited to water-dependent facilities.',
    example: 'The property survey revealed a 100-foot Resource Protection Area buffer from the creek, within which no new structures, grading, or clearing could occur without an exception.',
  },
  'Resource Management Area': {
    definition: 'A designation under the Chesapeake Bay Preservation Act for lands that, if improperly developed, could contribute to degradation of water quality. RMAs are subject to performance criteria for stormwater management, erosion control, and land disturbance but are less restrictive than RPAs.',
    example: 'The building lot was classified as a Resource Management Area, requiring the developer to implement enhanced stormwater management practices as a condition of the building permit.',
  },
  'CERCLA': {
    definition: 'Comprehensive Environmental Response, Compensation, and Liability Act, a federal law (also known as Superfund) that imposes strict, joint and several liability on current and past owners and operators of contaminated properties for cleanup costs. Liability can attach regardless of fault or knowledge.',
    example: 'Under CERCLA, the new property owner was held liable for the cost of cleaning up contamination from a previous owner\'s underground fuel tanks, even though the current owner did not cause the pollution.',
  },
  'Superfund': {
    definition: 'The common name for the federal program established under CERCLA to clean up hazardous waste sites. The EPA maintains a National Priorities List of the most seriously contaminated sites. Properties on or near Superfund sites may face significant value impacts and disclosure requirements.',
    example: 'The listing agent disclosed that a Superfund site was located within one mile of the property, providing the buyer with links to EPA records about the cleanup status.',
  },
  'Phase I environmental assessment': {
    definition: 'An investigation of a property\'s environmental condition based on records review, site inspection, and interviews. A Phase I ESA identifies recognized environmental conditions (RECs) but does not involve sampling or testing. It is commonly required by lenders for commercial transactions and can establish an innocent landowner defense under CERCLA.',
    example: 'The lender required a Phase I environmental assessment before funding the commercial loan, and the report identified a recognized environmental condition due to a former gas station on an adjacent parcel.',
  },
  'Phase II environmental assessment': {
    definition: 'A follow-up investigation conducted when a Phase I ESA identifies recognized environmental conditions. Phase II involves actual sampling and testing of soil, groundwater, or building materials to confirm or deny the presence of contamination and determine its extent.',
    example: 'After the Phase I identified potential soil contamination, the buyer ordered a Phase II environmental assessment that included soil borings and groundwater monitoring wells.',
  },
  'underground storage tank': {
    definition: 'A tank with at least 10% of its volume underground, used to store petroleum or hazardous substances. USTs are regulated by the EPA and Virginia DEQ because leaking tanks can contaminate soil and groundwater. Buyers should inquire about current and former USTs on any property.',
    example: 'The Phase I assessment revealed a decommissioned underground storage tank that had not been properly closed, requiring soil sampling to determine if any contamination had occurred.',
  },
  'mold remediation': {
    definition: 'The process of removing or cleaning mold-contaminated materials and restoring indoor air quality to acceptable levels. Virginia does not have specific mold disclosure laws, but mold can be a material adverse fact that agents must disclose if known.',
    example: 'After the home inspection revealed extensive mold in the basement, the buyer negotiated a $12,000 credit for professional mold remediation as a condition of proceeding with the purchase.',
  },
  'asbestos': {
    definition: 'A naturally occurring mineral fiber formerly used in building materials for its fire resistance and insulation properties. When disturbed, asbestos fibers become airborne and pose serious health risks including mesothelioma. Friable asbestos (easily crumbled) is particularly hazardous and subject to federal regulation.',
    example: 'The pre-purchase inspection of the 1965 home revealed asbestos-containing floor tiles, which were intact and non-friable, allowing the buyer to encapsulate rather than remove them.',
  },
  'lead-based paint disclosure': {
    definition: 'A federal requirement under the Residential Lead-Based Paint Hazard Reduction Act of 1992 that sellers and landlords of housing built before 1978 must disclose known lead-based paint hazards, provide an EPA pamphlet, and allow buyers a 10-day inspection opportunity. This disclosure is mandatory and cannot be waived.',
    example: 'The seller of the 1960s colonial completed the lead-based paint disclosure form, noted that lead paint had been found in a 2018 inspection, and provided the buyer with the EPA "Protect Your Family From Lead in Your Home" pamphlet.',
  },

  // ── Escrow & Trust Accounts (~25) ─────────────────────────────────────────

  'escrow': {
    definition: 'A financial arrangement in which funds, documents, or other assets are held by a neutral third party on behalf of the transacting parties until specified conditions are met. In Virginia real estate, escrow commonly refers to the holding of earnest money deposits and closing funds.',
    example: 'The settlement agent held the deed, loan documents, and buyer funds in escrow until all conditions were satisfied and the transaction was ready to close.',
  },
  'trust account': {
    definition: 'A separate bank account, required by Virginia law, in which a broker holds funds belonging to clients, customers, or other parties. Trust accounts must be maintained at a federally insured Virginia depository, clearly labeled as a trust or escrow account, and subject to the principal broker\'s oversight.',
    example: 'The principal broker reconciled the trust account monthly, verifying that the balance matched the total of all individual client ledgers.',
  },
  'trust monies': {
    definition: 'Any funds received by a licensee in a fiduciary capacity on behalf of clients or others. Trust monies include earnest money deposits, security deposits, rental payments, and any other funds belonging to someone other than the broker. These must be deposited promptly into the trust account.',
    example: 'The agent deposited the $5,000 earnest money check into the firm\'s trust account by the end of the next business day, as required by Virginia regulations for handling trust monies.',
  },
  'earnest money deposit': {
    definition: 'A good faith payment made by the buyer, held in the broker\'s trust account or by the settlement agent, that demonstrates the buyer\'s serious intent to purchase. In Virginia, earnest money must be deposited by the end of the fifth business banking day after ratification or as otherwise specified in the contract.',
    example: 'The contract required a $15,000 earnest money deposit, which the buyer\'s agent delivered to the listing broker for deposit into the trust account within five business banking days of ratification.',
  },
  'three-way reconciliation': {
    definition: 'The monthly process of verifying that three records are in agreement: (1) the bank statement balance, (2) the checkbook or journal balance, and (3) the total of all individual client ledger balances. Virginia requires principal brokers to perform this reconciliation for trust accounts.',
    example: 'The principal broker completed the three-way reconciliation and discovered a $500 discrepancy between the bank statement and the total of client ledgers, which was traced to an unrecorded service charge.',
  },
  'individual ledger': {
    definition: 'A subsidiary accounting record maintained for each transaction or property showing all deposits and disbursements of trust funds for that specific client, customer, or property. The sum of all individual ledger balances must equal the trust account bank balance.',
    example: 'The property management trust account maintained an individual ledger for each rental property, tracking security deposits, rent receipts, repair disbursements, and owner distributions.',
  },
  'transaction journal': {
    definition: 'A chronological record of all deposits into and disbursements from a trust account, regardless of the transaction or client. The transaction journal provides a complete audit trail and is used alongside individual ledgers for the three-way reconciliation.',
    example: 'The bookkeeper recorded every trust account transaction in the journal with the date, amount, payor or payee, and the specific client matter, providing a complete chronological audit trail.',
  },
  'disbursement': {
    definition: 'The payment or distribution of funds from a trust or escrow account. Trust fund disbursements must be authorized and properly documented. In Virginia, a broker may disburse earnest money only according to the terms of the contract, mutual agreement, or court order.',
    example: 'Upon receiving the mutual release signed by both parties, the broker disbursed the earnest money from the trust account back to the buyer within the timeframe specified.',
  },
  'security deposit (VRLTA)': {
    definition: 'Under the Virginia Residential Landlord and Tenant Act, a refundable deposit held by the landlord as security for tenant performance. The deposit cannot exceed two months\' rent, must be held in a separate account (though not necessarily an escrow account), and must be returned with an itemized list of deductions within 45 days of move-out.',
    example: 'The landlord withheld $800 from the $2,400 security deposit for carpet cleaning and wall repair, providing the tenant with an itemized list of deductions and a check for $1,600 within 45 days.',
  },
  'principal broker trust responsibility': {
    definition: 'The principal broker of a Virginia real estate firm bears ultimate responsibility for the proper handling, accounting, and reconciliation of all trust funds. This includes ensuring deposits are made timely, records are maintained, monthly reconciliations are performed, and no commingling or conversion occurs.',
    example: 'The principal broker was disciplined by VREB for failing to perform monthly trust account reconciliations, even though the actual bookkeeping error was made by an office administrator.',
  },
  'interest-bearing trust account': {
    definition: 'A trust account that earns interest on deposited funds. In Virginia, interest earned on trust funds belongs to the party whose money is deposited unless there is a written agreement otherwise. Some brokers maintain interest-bearing accounts for property management deposits.',
    example: 'The property management company maintained an interest-bearing trust account for tenant security deposits, with the interest allocated to each tenant\'s individual ledger as required by their lease.',
  },
  'escrow dispute': {
    definition: 'A disagreement between parties over the disposition of funds held in escrow, most commonly involving earnest money deposits when a transaction fails. Virginia brokers should attempt to resolve disputes by agreement; if unsuccessful, interpleader or other legal remedies may be necessary.',
    example: 'When the buyer and seller both claimed the $20,000 earnest money after the deal fell through, the escrow dispute was resolved through the broker filing an interpleader with the court.',
  },
  'stakeholder': {
    definition: 'A neutral party who holds funds or property on behalf of two or more parties with competing claims. In real estate escrow, the broker or settlement agent acts as a stakeholder, holding earnest money until the transaction closes or the parties agree on its disposition.',
    example: 'As the stakeholder of the earnest money deposit, the listing broker could not release the funds to either party without mutual written agreement or a court order.',
  },
  'good faith deposit': {
    definition: 'Another term for earnest money, referring to the buyer\'s deposit made to demonstrate genuine intent to complete the purchase. The term emphasizes that the deposit represents the buyer\'s good faith commitment to the transaction.',
    example: 'The seller\'s counteroffer requested an increase in the good faith deposit from $5,000 to $15,000 to demonstrate the buyer\'s financial commitment to the higher purchase price.',
  },
  'deposit receipt': {
    definition: 'A written acknowledgment provided by the party receiving an earnest money deposit, confirming the amount received, the date, and the form of payment. Virginia best practices require agents to provide a deposit receipt to the depositor.',
    example: 'The listing agent provided the buyer\'s agent with a deposit receipt confirming that the $10,000 earnest money check was received on March 1 and would be deposited into the firm\'s trust account.',
  },

  // ── Finance (~20) ─────────────────────────────────────────────────────────

  'VHDA': {
    definition: 'Virginia Housing Development Authority, a self-supporting state authority that provides financing for affordable homeownership and rental housing. VHDA offers below-market-rate mortgages, down payment assistance grants, and mortgage credit certificates to eligible Virginia buyers.',
    example: 'The first-time buyer qualified for a VHDA loan with a below-market interest rate and a $10,000 down payment assistance grant that did not need to be repaid.',
  },
  'Virginia Housing Development Authority': {
    definition: 'The state housing finance agency that provides mortgage financing, down payment assistance, and rental housing support throughout Virginia. VHDA programs target first-time homebuyers, low-to-moderate-income households, and persons with disabilities, and are funded through bond sales rather than tax revenue.',
    example: 'VHDA\'s Mortgage Credit Certificate program allowed the buyer to claim a federal tax credit equal to 20% of their annual mortgage interest, increasing their purchasing power.',
  },
  'down payment assistance': {
    definition: 'Programs that provide funds to help homebuyers cover the down payment and/or closing costs required to purchase a home. Assistance may come in the form of grants, forgivable loans, deferred-payment loans, or matched savings programs. VHDA and local governments offer multiple DPA programs in Virginia.',
    example: 'The buyer combined a VHDA first mortgage with a $15,000 down payment assistance grant from the local housing authority to purchase their first home with no out-of-pocket down payment.',
  },
  'FHA loan': {
    definition: 'A mortgage insured by the Federal Housing Administration that allows lower down payments (as low as 3.5%), more flexible credit requirements, and higher debt-to-income ratios than conventional loans. FHA loans require both an upfront and annual mortgage insurance premium (MIP) for the life of the loan in most cases.',
    example: 'The first-time buyer with a 620 credit score qualified for an FHA loan with 3.5% down, though they were required to pay an upfront MIP of 1.75% and an annual MIP that added $180 to their monthly payment.',
  },
  'VA loan': {
    definition: 'A mortgage guaranteed by the U.S. Department of Veterans Affairs, available to eligible veterans, active-duty service members, and surviving spouses. VA loans offer zero down payment, no PMI, competitive interest rates, and limits on closing costs charged to the borrower. A funding fee applies unless the veteran is exempt.',
    example: 'The veteran used their VA loan benefit to purchase a $450,000 home with zero down payment and no monthly mortgage insurance, saving over $300 per month compared to a conventional loan with PMI.',
  },
  'USDA loan': {
    definition: 'A mortgage guaranteed by the U.S. Department of Agriculture for eligible buyers purchasing homes in designated rural areas. USDA loans offer zero down payment and reduced mortgage insurance costs. Borrowers must meet income limits, typically 115% of the area median income.',
    example: 'The buyer purchased a home in a USDA-eligible rural area of Virginia with no down payment, paying a 1% upfront guarantee fee and a 0.35% annual fee instead of traditional PMI.',
  },
  'conventional loan': {
    definition: 'A mortgage that is not insured or guaranteed by a government agency (FHA, VA, or USDA). Conventional loans can be conforming (meeting Fannie Mae/Freddie Mac guidelines) or non-conforming. They typically require higher credit scores and larger down payments but offer more flexibility in property types and loan amounts.',
    example: 'The buyer chose a conventional loan with 20% down to avoid private mortgage insurance and secured a lower interest rate than the FHA option.',
  },
  'conforming loan': {
    definition: 'A mortgage that meets Fannie Mae or Freddie Mac guidelines for purchase on the secondary market, including loan amount limits, borrower qualification standards, and property requirements. Conforming loans generally offer the lowest interest rates.',
    example: 'The buyer\'s $600,000 loan amount fell within the conforming loan limits for the Northern Virginia area, qualifying them for the best available conventional interest rate.',
  },
  'jumbo loan': {
    definition: 'A mortgage that exceeds the conforming loan limits set by the Federal Housing Finance Agency and therefore cannot be purchased by Fannie Mae or Freddie Mac. Jumbo loans typically require higher credit scores, larger down payments, and carry slightly higher interest rates.',
    example: 'The $1.2 million purchase in McLean required a jumbo loan because the loan amount exceeded the conforming limit, requiring a 20% down payment and a 760 credit score.',
  },
  'PMI': {
    definition: 'Private Mortgage Insurance, required on conventional loans when the borrower puts down less than 20% of the purchase price. PMI protects the lender in case of default and can be canceled once the borrower reaches 20% equity (or automatically terminates at 22% equity under the Homeowners Protection Act).',
    example: 'The buyer\'s PMI added $185 per month to their mortgage payment, but they planned to request cancellation once their home equity reached 20% of the original appraised value.',
  },
  'MIP': {
    definition: 'Mortgage Insurance Premium, the FHA equivalent of PMI. FHA loans require both an upfront MIP (1.75% of the loan amount, typically financed into the loan) and an annual MIP (0.55% for most loans). For loans with less than 10% down, MIP continues for the life of the loan.',
    example: 'The FHA borrower paid a $6,125 upfront MIP that was added to their $350,000 loan balance, plus a monthly MIP of $160 that could not be cancelled because they put down less than 10%.',
  },
  'ARM': {
    definition: 'Adjustable-Rate Mortgage, a loan with an interest rate that changes periodically based on a market index plus a margin. ARMs typically offer a lower initial rate during a fixed period (3, 5, 7, or 10 years) before adjusting. Rate caps limit how much the rate can change per adjustment and over the loan\'s lifetime.',
    example: 'The 5/1 ARM offered a 5.5% rate for the first five years, then adjusted annually based on the SOFR index plus a 2.75% margin, with a 2% annual cap and 5% lifetime cap.',
  },
  'fixed-rate mortgage': {
    definition: 'A mortgage with an interest rate that remains constant for the entire loan term, providing predictable monthly principal and interest payments. Common terms are 15, 20, and 30 years. Fixed-rate mortgages offer stability but may carry higher initial rates than adjustable-rate products.',
    example: 'The buyer locked in a 30-year fixed-rate mortgage at 6.25%, knowing their principal and interest payment of $1,847 would never change over the life of the loan.',
  },
  'LTV': {
    definition: 'Loan-to-Value ratio, the percentage of a property\'s appraised value or purchase price (whichever is lower) that is financed by the mortgage. LTV is a key factor in loan approval, interest rate pricing, and whether mortgage insurance is required. An 80% LTV means the borrower has 20% equity.',
    example: 'The buyer\'s $360,000 loan on a $400,000 home resulted in a 90% LTV, which required private mortgage insurance until the ratio dropped to 80%.',
  },
  'DTI': {
    definition: 'Debt-to-Income ratio, a percentage that compares a borrower\'s total monthly debt obligations to their gross monthly income. Lenders use front-end DTI (housing costs only) and back-end DTI (all debts) to determine affordability. Conventional loans typically allow up to 45-50% back-end DTI.',
    example: 'The borrower\'s total monthly debts of $3,200 divided by their gross monthly income of $8,000 resulted in a 40% DTI, which was within the lender\'s maximum guideline.',
  },
  'ECOA': {
    definition: 'Equal Credit Opportunity Act, a federal law that prohibits lenders from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age, receipt of public assistance income, or exercise of rights under the Consumer Credit Protection Act.',
    example: 'A lender who required a co-signer for a single woman but not for a single man with the same qualifications would violate the Equal Credit Opportunity Act\'s prohibition on sex and marital status discrimination.',
  },
  'predatory lending': {
    definition: 'Unfair, deceptive, or abusive lending practices that take advantage of borrowers, often through excessive fees, inflated interest rates, negative amortization, prepayment penalties, or loan terms the borrower cannot reasonably be expected to meet. Virginia and federal laws provide consumer protections against predatory lending.',
    example: 'The lender engaged in predatory lending by steering the creditworthy borrower into a high-interest subprime loan that included excessive origination fees and a balloon payment the borrower could not afford.',
  },
  'hard money loan': {
    definition: 'A short-term, asset-based loan from a private lender or investor, secured by the property itself rather than the borrower\'s creditworthiness. Hard money loans have higher interest rates and fees but offer fast funding, making them popular for fix-and-flip investors and borrowers who cannot qualify for conventional financing.',
    example: 'The investor used a hard money loan at 12% interest with a 12-month term to purchase and renovate the property, planning to refinance into a conventional loan after rehabilitation was complete.',
  },
  'construction-to-permanent loan': {
    definition: 'A financing product that combines a short-term construction loan with a long-term permanent mortgage in a single closing. During construction, the borrower makes interest-only payments on drawn funds. Upon completion, the loan automatically converts to a standard amortizing mortgage without a second closing.',
    example: 'The buyer used a construction-to-permanent loan to build their custom home, making interest-only payments during the 10-month construction period before the loan converted to a 30-year fixed mortgage at 6.5%.',
  },
  'portfolio lending': {
    definition: 'A lending practice in which a bank originates and retains a mortgage in its own portfolio rather than selling it on the secondary market. Portfolio lenders can offer more flexible underwriting because they do not need to comply with Fannie Mae or Freddie Mac guidelines.',
    example: 'The self-employed borrower with non-traditional income documentation obtained a portfolio loan from a local credit union that used its own underwriting criteria rather than conforming loan guidelines.',
  },
  'SBA loan': {
    definition: 'A loan partially guaranteed by the U.S. Small Business Administration, available for commercial real estate purchases, construction, and business expansion. SBA 504 loans are commonly used for owner-occupied commercial property with as little as 10% down and below-market fixed rates.',
    example: 'The small business owner used an SBA 504 loan to purchase a $1 million commercial building with only $100,000 down, combining a conventional first mortgage with an SBA-backed second mortgage.',
  },

  // ── Additional PLE Topics ─────────────────────────────────────────────────

  'Virginia Real Estate Board regulations': {
    definition: 'The administrative rules codified at 18 VAC 135-20 that govern the conduct of real estate licensees in Virginia. These regulations cover advertising standards, trust fund handling, brokerage agreements, team operations, property management, and continuing education requirements.',
    example: 'The broker reviewed the Virginia Real Estate Board regulations to confirm the advertising requirements for the new real estate team name before printing business cards.',
  },
  'continuing education requirement': {
    definition: 'Virginia requires licensed real estate agents to complete 16 hours of continuing education during each two-year license renewal cycle. Required topics include fair housing, ethics, legal updates, and agency, with the remaining hours in approved elective topics.',
    example: 'The agent completed their 16-hour continuing education requirement by taking the mandatory fair housing and ethics courses plus 8 hours of technology and marketing electives.',
  },
  'post-license education': {
    definition: 'Virginia requires newly licensed salespersons to complete 30 hours of post-license education before their first license renewal (within the first licensing period). Failure to complete PLE by the deadline results in the license not being renewed.',
    example: 'The newly licensed agent enrolled in the 30-hour post-license education course immediately after passing their licensing exam to ensure completion well before the renewal deadline.',
  },
  'Sherman Act violations in real estate': {
    definition: 'Antitrust violations specific to the real estate industry under the Sherman Anti-Trust Act, including price fixing of commission rates, group boycotts of discount brokers, market allocation agreements between competing firms, and tying arrangements linking brokerage to settlement services.',
    example: 'The Department of Justice investigated a group of area brokers who collectively agreed to not cooperate with a discount brokerage, constituting a group boycott and Sherman Act violation.',
  },
  'Internet Data Exchange': {
    definition: 'The MLS policy and technology framework that allows participating brokers to display each other\'s listings on their websites, subject to rules about data use, attribution, and consumer registration requirements. IDX has become the primary way consumers search for homes online.',
    example: 'The agent\'s IDX-powered website displayed all active MLS listings with proper attribution, allowing visitors to search the entire market from one location.',
  },
  'automated valuation model': {
    definition: 'A computer program that analyzes public records, recent sales, property characteristics, and market trends to produce an estimated property value. AVMs are used by lenders for portfolio monitoring and home equity decisions, but their accuracy varies and they cannot replace a licensed appraisal for most loan originations.',
    example: 'The lender\'s automated valuation model estimated the home at $385,000, which was close enough to the contract price that a full appraisal waiver was granted for the low-LTV refinance.',
  },
  'Virginia Housing': {
    definition: 'The rebranded name for the Virginia Housing Development Authority (VHDA), Virginia\'s state housing finance agency. Virginia Housing provides below-market mortgages, down payment assistance, rental housing financing, and homebuyer education to make housing affordable throughout the Commonwealth.',
    example: 'Virginia Housing\'s Homebuyers Education course satisfied the first-time buyer\'s DPA program requirement and helped them understand the home buying process.',
  },
  'mortgage credit certificate': {
    definition: 'A certificate issued by VHDA that entitles the holder to a federal income tax credit equal to a percentage of the annual mortgage interest paid. The MCC reduces the borrower\'s federal tax liability, effectively increasing disposable income and improving purchasing power.',
    example: 'The buyer\'s VHDA mortgage credit certificate allowed them to claim a federal tax credit of 20% of their annual mortgage interest, saving approximately $2,400 per year in taxes.',
  },
  'Homeowners Protection Act': {
    definition: 'Federal legislation that establishes rules for the automatic termination and borrower-requested cancellation of private mortgage insurance (PMI) on home loans. Lenders must automatically cancel PMI when the LTV reaches 78% of the original value and must honor borrower cancellation requests at 80% LTV.',
    example: 'Under the Homeowners Protection Act, the borrower requested PMI cancellation when their loan balance reached 80% of the original appraised value, and the servicer was required to comply.',
  },
  'property condition disclosure': {
    definition: 'The seller\'s written statement about the known condition of the property, including structural, mechanical, and environmental issues. In Virginia, sellers must provide either a detailed disclosure statement or a disclaimer. Agents should advise sellers that honest disclosure reduces liability risk.',
    example: 'The seller disclosed a previous basement water intrusion issue on the property condition disclosure, along with the corrective measures taken, protecting themselves from future claims.',
  },
  'caveat emptor': {
    definition: 'Latin for "let the buyer beware," a legal principle holding that the buyer assumes the risk of discovering defects in a property. While still relevant in Virginia (where the disclosure form is not a warranty), the principle is limited by the agent\'s duty to disclose known material adverse facts.',
    example: 'Although Virginia still follows caveat emptor to some extent, the doctrine does not protect a seller or agent who knowingly conceals a material defect from the buyer.',
  },
  'open house liability': {
    definition: 'The legal risks associated with hosting open houses, including premises liability for visitor injuries, security risks from unaccompanied visitors, and agency issues when interacting with unrepresented buyers. Agents should take precautions including sign-in sheets, proper supervision, and agency disclosures.',
    example: 'The agent reduced open house liability by requiring all visitors to sign in, providing the brokerage disclosure form to every visitor, and securing all valuables before the event.',
  },
  'do not call registry': {
    definition: 'The National Do Not Call Registry maintained by the FTC, which restricts telemarketing calls to consumers who have registered their phone numbers. Real estate agents must check the registry before making cold calls. Established business relationships and certain other exceptions may apply.',
    example: 'The agent verified that the phone numbers on their prospecting list were not on the National Do Not Call Registry before making unsolicited calls to expired listing homeowners.',
  },
  'CAN-SPAM Act': {
    definition: 'Federal legislation that regulates commercial email messages. The law requires truthful subject lines, identification of the message as an advertisement, inclusion of the sender\'s physical address, and a functioning opt-out mechanism. Real estate marketing emails must comply with these requirements.',
    example: 'The agent\'s email marketing campaign complied with the CAN-SPAM Act by including the brokerage\'s physical address, an unsubscribe link, and a clear identification as a commercial message.',
  },
  'advertising compliance': {
    definition: 'The requirement that all real estate advertising comply with Virginia Real Estate Board regulations, fair housing laws, and truth-in-advertising standards. Virginia requires that all advertising include the firm\'s licensed name and that team names not mislead the public about the team\'s status.',
    example: 'The agent\'s social media advertisement was brought into advertising compliance after the broker added the firm\'s licensed name, which had been missing from the original post.',
  },
  'data privacy in real estate': {
    definition: 'The obligation to protect sensitive personal and financial information collected during real estate transactions. This includes Social Security numbers, financial statements, credit reports, and other personally identifiable information. Agents must follow firm policies and applicable laws for data protection and disposal.',
    example: 'The brokerage implemented a data privacy policy requiring all agents to store client financial documents in encrypted cloud storage and to shred paper records after a retention period.',
  },
  'real estate team compliance': {
    definition: 'Virginia regulations governing how real estate teams operate, including requirements that team names be registered with DPOR, that all advertising include the firm\'s licensed name, and that team leaders who are salespersons (not brokers) cannot supervise other licensees in the same way a broker can.',
    example: 'The team updated their marketing materials for real estate team compliance by adding the brokerage name in a font size at least as large as the team name, as required by VREB regulations.',
  },
  'procuring cause dispute': {
    definition: 'A disagreement between agents or brokerages over which agent was the procuring cause of a sale and therefore entitled to a commission. Procuring cause disputes are commonly resolved through arbitration at the local REALTOR board, using the NAR\'s factors for determining procuring cause.',
    example: 'Agent A showed the buyer the property initially, but Agent B wrote the offer and negotiated the deal. The procuring cause dispute was submitted to the local board for arbitration.',
  },
  'professional development': {
    definition: 'Ongoing education and skill-building beyond the minimum continuing education requirements, including designations (CRS, ABR, GRI), certifications, mentorship, and training in specialized areas such as commercial real estate, luxury homes, or military relocation.',
    example: 'The agent pursued the ABR designation as professional development to strengthen their buyer representation skills in the post-NAR-settlement landscape.',
  },
  'risk reduction strategies': {
    definition: 'Practices and procedures that minimize legal, financial, and professional liability in real estate transactions. Key strategies include maintaining proper documentation, communicating in writing, recommending professional inspections, following firm policies, and carrying adequate E&O insurance.',
    example: 'The broker\'s risk reduction strategies included requiring all verbal agreements to be confirmed in writing within 24 hours and mandating that agents never give legal, tax, or structural advice.',
  },
  'transaction file management': {
    definition: 'The systematic organization and retention of all documents related to a real estate transaction. Virginia regulations require brokers to maintain transaction files for a minimum of five years from the date of closing or termination. Files must include contracts, disclosures, correspondence, and trust fund records.',
    example: 'The broker\'s digital transaction file management system automatically retained all documents for six years and flagged any transaction missing required disclosures or signed brokerage agreements.',
  },
  'cooperating broker': {
    definition: 'A broker who brings a buyer to a transaction and works with the listing broker to facilitate the sale. The cooperating broker\'s compensation is negotiated separately from the listing agreement, particularly under post-NAR-settlement rules, and may be paid by the buyer, seller, or through a contract provision.',
    example: 'Under the new rules, the cooperating broker negotiated their compensation directly with the buyer through a written buyer representation agreement, rather than relying on an MLS-published commission offer.',
  },
  'seller concession': {
    definition: 'An agreement by the seller to pay a portion of the buyer\'s closing costs, prepaid items, or other transaction expenses. Seller concessions are subject to limits based on the loan type and LTV ratio. They are negotiated as part of the purchase contract.',
    example: 'The buyer negotiated a 3% seller concession to cover closing costs, which the lender approved because the FHA loan program permitted up to 6% in seller-paid closing costs.',
  },
  'home warranty': {
    definition: 'A service contract that covers the repair or replacement of major home systems and appliances that fail due to normal wear and tear during the coverage period, typically one year. Home warranties are sometimes offered by sellers to attract buyers and reduce post-closing disputes.',
    example: 'The seller purchased a one-year home warranty for the buyer at closing, which covered the HVAC system failure that occurred three months later at no additional cost to the buyer.',
  },
  'dual agency risks': {
    definition: 'The inherent conflicts and legal risks present when one agent or firm represents both the buyer and seller in the same transaction. In dual agency, the agent cannot fully advocate for either party, maintain confidentiality of negotiating positions, or provide advice that favors one side. Informed written consent is required in Virginia.',
    example: 'The broker explained the dual agency risks to both parties, emphasizing that the agent could not advise either side on what price to offer or accept, and obtained written consent from both the buyer and seller.',
  },
  'brokerage policy manual': {
    definition: 'A comprehensive document maintained by the principal broker that outlines the firm\'s operating procedures, compliance requirements, trust fund handling practices, advertising policies, team rules, and standards of conduct for all affiliated licensees. The policy manual helps ensure consistency and reduce liability.',
    example: 'The principal broker updated the brokerage policy manual to include new procedures for handling buyer broker agreements and negotiating compensation under the post-settlement guidelines.',
  },
}
