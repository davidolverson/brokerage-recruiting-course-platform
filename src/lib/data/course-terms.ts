import { MOD456_TERMS } from './course-terms-mod456'

export interface TermDefinition {
  definition: string
  example?: string
}

const BASE_TERMS: Record<string, TermDefinition> = {
  // ── Module 1, Ch1: DPOR Overview ─────────────────────────────────────────
  'DPOR': {
    definition: 'Department of Professional and Occupational Regulation - the Virginia state agency responsible for licensing real estate professionals.',
    example: 'DPOR oversees all real estate licensing in Virginia through the Virginia Real Estate Board (VREB).',
  },
  'VREB': {
    definition: 'Virginia Real Estate Board - the specific regulatory body within DPOR that sets licensing standards, investigates complaints, and imposes discipline on licensees.',
    example: 'VREB can suspend or revoke a license and impose fines up to $5,000 per violation.',
  },
  'salesperson license': {
    definition: 'A Virginia real estate license that authorizes an agent to practice under the supervision of a licensed broker. Requires 60 hours of pre-license education and passing the state exam.',
    example: 'A new agent holding a salesperson license cannot independently hold escrow funds — they must always work under a broker.',
  },
  'broker license': {
    definition: 'A Virginia real estate license that allows the holder to operate independently and supervise salespersons. Requires 36 of the past 48 months as an active salesperson plus 180 hours of broker education.',
    example: 'Only a broker licensee can open their own real estate firm or hold client funds in a firm trust account.',
  },
  'principal broker': {
    definition: 'The broker who is ultimately responsible for all activities of a real estate firm. Every Virginia firm must designate exactly one principal broker.',
    example: 'If an affiliated salesperson commits a violation, the principal broker can also face disciplinary action for inadequate supervision.',
  },
  'supervising broker': {
    definition: 'A broker designated by the principal broker to supervise one or more branch offices or a group of salespersons.',
    example: 'A large firm with three branch offices will have a supervising broker at each location reporting to the principal broker.',
  },
  'reciprocity': {
    definition: 'Mutual recognition of licenses between states, allowing out-of-state licensees to obtain a license more easily. Virginia technically uses endorsement, not full reciprocity.',
    example: 'An agent licensed in Maryland may apply for a Virginia license by endorsement rather than taking the full pre-license course again.',
  },
  'license by endorsement': {
    definition: "Virginia's process for granting licenses to agents already licensed in other states with substantially similar requirements. Still requires passing the Virginia state exam portion.",
    example: 'A Florida licensee in good standing may apply for Virginia license by endorsement, but must still pass the Virginia-specific portion of the state exam.',
  },

  // ── Module 1, Ch1: Disciplinary Actions ──────────────────────────────────
  'revocation': {
    definition: 'Permanent cancellation of a real estate license by VREB. A revoked licensee cannot practice until reinstatement is granted, which is not guaranteed.',
    example: 'Conversion of client funds almost always results in license revocation.',
  },
  'suspension': {
    definition: 'Temporary prohibition from practicing real estate for a set period, imposed by VREB as a disciplinary sanction.',
    example: 'A first-time escrow violation might result in a 6-month suspension rather than full revocation.',
  },
  'censure': {
    definition: 'A formal written reprimand placed in a licensee\'s record by VREB. The least severe formal disciplinary action — no practice restrictions imposed.',
    example: 'An agent who filed paperwork late for the first time might receive a censure rather than a fine.',
  },
  'monetary penalty': {
    definition: 'A fine imposed by VREB, up to $5,000 per violation. Can be imposed alone or combined with other sanctions.',
    example: 'Practicing without a license can result in a monetary penalty of up to $5,000 per occurrence.',
  },
  'consent order': {
    definition: 'A binding settlement in which a licensee admits to (or agrees not to contest) a VREB violation and accepts a proposed penalty, typically reached at the Informal Fact-Finding Conference stage.',
    example: 'Rather than face a formal hearing, the agent signed a consent order accepting a $2,000 fine and 20 hours of additional education.',
  },
  'informal conference': {
    definition: 'An Informal Fact-Finding Conference (IFF) - an administrative meeting (not a full hearing) where DPOR and the respondent licensee present information after a complaint is filed. Many cases resolve here.',
    example: 'The agent attended an informal conference and the matter was resolved with a consent order before ever reaching a formal VREB hearing.',
  },
  'formal hearing': {
    definition: 'A full administrative hearing before the VREB board where the licensee can be represented by counsel, present evidence, and cross-examine witnesses. Cases reach this stage when not resolved at the informal conference.',
    example: 'After rejecting the consent order at the informal conference, the respondent requested a formal hearing before the full board.',
  },
  'respondent': {
    definition: 'The licensee against whom a VREB complaint has been filed and who must respond to the allegations.',
    example: 'As the respondent, the agent received written notice of the complaint and had 30 days to submit a written response.',
  },
  'complainant': {
    definition: 'The person who files a complaint with DPOR against a licensee — can be a client, another agent, broker, or any member of the public.',
    example: 'The buyer acted as the complainant, alleging that the listing agent failed to disclose a known foundation defect.',
  },

  // ── Module 1, Ch1: Brokerage Operations ──────────────────────────────────
  'sole proprietorship': {
    definition: 'A business structure where the broker IS the business — no separate entity. The broker\'s personal name is the firm name unless a trade name is registered.',
    example: 'Jane Smith, Broker operates as a sole proprietorship; she does not need a separate firm license if she uses only her own name.',
  },
  'branch office': {
    definition: 'Any physical location beyond the main office from which a brokerage conducts business. Each branch requires its own license and a designated supervising broker.',
    example: 'ABC Realty\'s second location in the suburbs must obtain a branch office license and designate a supervising broker for that location.',
  },
  'trade name': {
    definition: 'A business name used instead of the principal broker\'s legal name. Must be registered with both VREB and the Virginia SCC, and must appear in all advertising.',
    example: '"Blue Ridge Realty" is a trade name for broker John Smith. It must appear on every ad, yard sign, and social media post by affiliated agents.',
  },
  'affiliated licensee': {
    definition: 'Any salesperson or broker who works under the supervision of a principal broker at a brokerage firm.',
    example: 'All 12 agents at the firm are affiliated licensees of the principal broker and subject to her supervision.',
  },
  'independent contractor': {
    definition: 'A working relationship classification (for tax purposes) used for most Virginia real estate agents. The broker does not withhold taxes, but still owes full supervisory responsibility under real estate law.',
    example: 'Even though agents at the firm are independent contractors for IRS purposes, the principal broker is still liable for their professional conduct.',
  },
  'employee': {
    definition: 'A working relationship where the employer withholds income taxes and FICA. Less common for real estate agents than independent contractor status.',
    example: 'A salaried on-site property manager at a complex may be classified as an employee of the property owner.',
  },
  'property management': {
    definition: 'The management of real estate on behalf of an owner — including leasing, maintenance oversight, and accounting. Requires a broker license and a written property management agreement.',
    example: 'The brokerage\'s property management division handles 150 rental units, collecting rent and coordinating repairs for absent landlords.',
  },
  'escrow account': {
    definition: 'A separate trust account (also called a trust account) at a federally insured institution where a broker holds client funds — earnest money, security deposits, and property management funds. Cannot be commingled with firm operating funds.',
    example: 'The $10,000 earnest money deposit was wired directly into the brokerage\'s escrow account, kept separate from the firm\'s operating account.',
  },

  // ── Module 1, Ch1: License Exemptions ────────────────────────────────────
  'exemption': {
    definition: 'A statutory exception to the Virginia real estate license requirement. Specific categories of people can engage in certain real estate activities without a license.',
    example: 'An owner selling their own home is exempt from needing a real estate license, even if they negotiate the sale themselves.',
  },
  'power of attorney': {
    definition: 'A legal document authorizing one person (the attorney-in-fact) to act on behalf of another. A person holding a valid POA can negotiate real estate transactions for the grantor without a real estate license.',
    example: 'David holds his mother\'s durable power of attorney and negotiates the sale of her home — no real estate license needed.',
  },
  'trustee': {
    definition: 'A person managing property or assets on behalf of a trust. Court-appointed trustees can sell or manage real estate under their fiduciary authority without a real estate license.',
    example: 'As trustee of the estate, Maria sold the inherited property without obtaining a real estate license because she acted under court authority.',
  },
  'fiduciary': {
    definition: 'A person or entity with a legal obligation to act in the best interests of another — the highest duty of loyalty recognized in law. Real estate agents acting as client representatives are fiduciaries.',
    example: 'As the buyer\'s fiduciary, the agent was required to disclose that the listing price was higher than recent comparable sales.',
  },
  'salaried employee': {
    definition: 'An employee paid a fixed salary (not commission) by a property owner to manage or lease that owner\'s property. Qualifies for the license exemption as long as no transaction-based compensation is received.',
    example: 'Tom receives $4,000/month to manage his employer\'s office park — no per-deal bonus. He qualifies for the salaried employee exemption.',
  },
  'owner exemption': {
    definition: 'Property owners selling, leasing, or managing their own real estate are exempt from the license requirement, even when receiving compensation from the sale.',
    example: 'A corporation can sell its own commercial building without a real estate license through its officers under the owner exemption.',
  },
  'on-site manager': {
    definition: 'A resident manager who lives at an apartment complex and manages it for the owner, compensated only by free or reduced rent. Qualifies for the license exemption.',
    example: 'Sam lives in Unit 1A and handles tenant inquiries and lease renewals for the 20-unit building in exchange for free rent — license not required.',
  },

  // ── Module 1, Ch2: Agency Fundamentals ───────────────────────────────────
  'principal': {
    definition: 'The client on whose behalf an agent acts. In real estate, typically the buyer or seller who has entered an agency agreement.',
    example: 'The seller is the principal in a listing agreement — the listing agent acts on the seller\'s behalf.',
  },
  'agent': {
    definition: 'A person authorized to act on behalf of a principal. In real estate, the licensed agent who represents a buyer or seller in a transaction.',
    example: 'As the buyer\'s agent, she had a fiduciary duty to find the best property at the best price for her client.',
  },
  'loyalty': {
    definition: 'One of the six fiduciary duties — the obligation to place the client\'s interests above all others, including the agent\'s own personal or financial interests.',
    example: 'The agent violated loyalty by steering the buyer toward a property where the agent had a personal financial interest without disclosure.',
  },
  'confidentiality': {
    definition: 'The fiduciary duty to protect information the client shares in confidence — including after the agency relationship ends. A former client\'s bottom line remains confidential years later.',
    example: 'Even after the listing expired, the former listing agent could not share the seller\'s minimum acceptable price with potential buyers.',
  },
  'disclosure': {
    definition: 'The fiduciary duty to proactively share with the client all material information relevant to the transaction, including facts that affect value or negotiating position.',
    example: 'The buyer\'s agent disclosed that comparable homes in the neighborhood were selling for 8% less than the asking price.',
  },
  'obedience': {
    definition: 'The fiduciary duty to follow the client\'s lawful instructions, even when the agent disagrees — except instructions requiring illegal conduct.',
    example: 'The seller instructed the agent not to show the home on Sundays. The agent was obligated to obey, even if it reduced showing traffic.',
  },
  'reasonable care': {
    definition: 'The fiduciary duty to perform services with the skill and competence expected of a licensed real estate professional. "I didn\'t know" is not an excuse.',
    example: 'Recommending a listing price without reviewing recent comparable sales falls below the reasonable care standard.',
  },
  'accounting': {
    definition: 'The fiduciary duty to account for all money and property received on behalf of a client — every earnest money deposit and rental payment must be tracked and reported.',
    example: 'The agent was required to provide a written accounting of all funds held in escrow before the closing.',
  },
  'creation of agency': {
    definition: 'The formation of an agency relationship through express agreement, implied conduct, ratification, or estoppel.',
    example: 'Repeatedly showing a buyer homes and negotiating on their behalf without a formal agreement can create implied agency.',
  },

  // ── Module 1, Ch2: Types of Agency ───────────────────────────────────────
  "seller's agency": {
    definition: 'An agency relationship where the real estate agent represents the seller\'s interests exclusively. The agent owes fiduciary duties to the seller.',
    example: 'The listing agent has a seller\'s agency relationship — she must place the seller\'s interests first and keep buyer budget information confidential.',
  },
  "buyer's agency": {
    definition: 'An agency relationship where the real estate agent represents the buyer\'s interests exclusively. Created by a buyer representation agreement.',
    example: 'With a signed buyer\'s agency agreement, the agent owed full fiduciary duties to the buyer, including disclosing the property\'s overvaluation.',
  },
  'dual agency': {
    definition: 'A situation where one agent or one brokerage represents both the buyer and seller in the same transaction. Requires written informed consent from both parties and limits the agent\'s fiduciary duties.',
    example: 'When the listing agent\'s own buyer wanted to offer on the listed property, both parties signed dual agency consent forms.',
  },
  'designated agency': {
    definition: 'An arrangement where two different agents within the same brokerage each represent one party (one the buyer, one the seller). Only the broker knows both sides; each designated agent owes full loyalty to their respective client.',
    example: 'Agent A represented the buyer and Agent B represented the seller — both worked at XYZ Realty under designated agency, avoiding the limitations of full dual agency.',
  },
  'disclosed dual agent': {
    definition: 'An agent who has disclosed and received consent from both the buyer and seller to represent both parties in the same transaction. Limited fiduciary duties apply.',
    example: 'As a disclosed dual agent, the agent could not share the seller\'s bottom line with the buyer, or the buyer\'s maximum offer with the seller.',
  },
  'limited service agent': {
    definition: 'An agent providing a reduced scope of services to a client under a limited service agreement, disclosing the limitations in writing. Not all fiduciary duties apply.',
    example: 'Under a limited service agreement, the agent only listed the property on MLS and disclosed they would not negotiate on the seller\'s behalf.',
  },
  'independent contractor status': {
    definition: 'A tax classification for most real estate agents — the brokerage does not withhold taxes, but this does not reduce the broker\'s supervisory obligations under real estate law.',
    example: 'The IRS considers agents at the firm to be independent contractors, but VREB still holds the principal broker responsible for their professional conduct.',
  },

  // ── Module 1, Ch2: Agency Disclosure ─────────────────────────────────────
  'disclosure of brokerage relationship': {
    definition: 'A required written form provided to clients and prospects at the first substantive meeting, stating who the licensee represents and what duties are owed.',
    example: 'At the first meeting with a prospective buyer, the agent presented the Disclosure of Brokerage Relationship form before discussing any specific properties.',
  },
  'substantive contact': {
    definition: 'A discussion involving specific real estate needs, financial qualifications, or a specific property — triggers the mandatory agency disclosure requirement.',
    example: 'The moment the agent began asking the buyer about their budget and preferred neighborhoods, substantive contact began and disclosure was required.',
  },
  'first contact': {
    definition: 'The initial interaction between a licensee and a prospective client — agency disclosure must occur at or before the first substantive discussion.',
    example: 'The agent provided the disclosure form at first contact before touring any homes with the new prospect.',
  },
  'written disclosure': {
    definition: 'The Virginia requirement that agency status be disclosed in writing (not just verbally) before or at the first substantive meeting.',
    example: 'Verbal disclosure at the open house was not sufficient — the agent also provided the written disclosure form to every visitor who began substantive conversations.',
  },
  'acknowledgment': {
    definition: 'The client\'s or customer\'s signed confirmation of having received the agency disclosure form. Must be retained by the broker for at least 3 years.',
    example: 'The buyer refused to sign the acknowledgment, so the agent documented the refusal in writing and proceeded.',
  },
  'material relationship': {
    definition: 'Any personal, familial, or business relationship between the licensee (or their brokerage) and a party to the transaction that could affect the agent\'s objectivity. Must be disclosed.',
    example: 'The listing agent disclosed a material relationship when she revealed the seller was her brother-in-law.',
  },

  // ── Module 1, Ch2: Termination of Agency ─────────────────────────────────
  'expiration': {
    definition: 'Agency terminates automatically when the fixed term in a listing or buyer representation agreement ends without renewal.',
    example: 'The listing agreement expired on June 30th without renewal, ending the agent\'s authority to represent the seller.',
  },
  'completion': {
    definition: 'Agency terminates when the specific purpose of the relationship is accomplished — typically when the property closes or the buyer purchases.',
    example: 'The buyer representation agreement terminated upon completion when the buyer closed on their new home.',
  },
  'mutual agreement': {
    definition: 'Both the principal and agent agree to end the agency relationship. Should be documented in writing.',
    example: 'After 90 days without offers, the seller and agent mutually agreed to terminate the listing in writing.',
  },
  'renunciation': {
    definition: 'An agent\'s voluntary withdrawal from an agency relationship. The agent may still owe duties for pending matters and must give reasonable notice.',
    example: 'The agent renounced the buyer representation agreement after the buyer asked her to withhold known defects from the seller.',
  },
  'death': {
    definition: 'The death of either the principal or agent terminates the agency relationship.',
    example: 'When the seller unexpectedly passed away, the listing agreement automatically terminated and the estate had to execute a new agreement.',
  },
  'destruction of property': {
    definition: 'If the subject property is destroyed or condemned, the agency relationship related to that property terminates as performance becomes impossible.',
    example: 'After the house burned down, the listing agreement terminated automatically — there was nothing left to sell.',
  },
  'operation of law': {
    definition: 'Agency terminates due to legal circumstances such as bankruptcy, license expiration, or court order, regardless of the parties\' intentions.',
    example: 'When the agent\'s license expired, his authority to act on the seller\'s behalf terminated by operation of law.',
  },
  'procuring cause': {
    definition: 'The legal doctrine determining which agent is entitled to a commission when an agency relationship ends before closing but the buyer later purchases. The procuring cause agent set in motion the uninterrupted chain of events leading to the sale.',
    example: 'Agent A showed the buyer the property in March; they closed in July with a different agent. Agent A may claim procuring cause if their efforts directly led to the eventual purchase without a meaningful break.',
  },

  // ── Module 1, Ch3: Federal Fair Housing ──────────────────────────────────
  'protected class': {
    definition: 'A group of people protected from housing discrimination under the Federal Fair Housing Act or state law. Federal classes: race, color, national origin, religion, sex, familial status, and disability.',
    example: 'Refusing to show homes in certain neighborhoods to a buyer based on their national origin is discrimination against a protected class.',
  },
  'race': {
    definition: 'One of the seven federally protected classes under the Fair Housing Act. Housing discrimination based on race has been prohibited since 1968.',
    example: 'Refusing to rent to an applicant because of their race is a federal Fair Housing Act violation.',
  },
  'color': {
    definition: 'A federal Fair Housing protected class — discrimination based on skin tone or complexion, which can be distinct from racial discrimination.',
    example: 'Treating applicants differently based on their skin tone, even within the same racial group, constitutes illegal discrimination based on color.',
  },
  'national origin': {
    definition: 'A federal Fair Housing protected class — discrimination based on a person\'s country of birth or ancestry.',
    example: 'Steering buyers away from certain neighborhoods because of their national origin is a federal Fair Housing violation.',
  },
  'religion': {
    definition: 'A federal Fair Housing protected class — discrimination based on religious beliefs or practices.',
    example: 'Refusing to rent to a family because of their religious observances violates the Fair Housing Act.',
  },
  'sex': {
    definition: 'A federal Fair Housing protected class. Courts and HUD have interpreted "sex" to include gender identity and sexual orientation (though Virginia adds these explicitly as state-protected classes).',
    example: 'A landlord who refuses to rent to single women has discriminated based on sex in violation of the Fair Housing Act.',
  },
  'familial status': {
    definition: 'A federal Fair Housing protected class covering families with children under 18, pregnant women, and those in the process of gaining custody of a minor. Exception: qualifying 55+ communities.',
    example: 'A landlord advertising "no children" is discriminating based on familial status and violating the Fair Housing Act.',
  },
  'disability': {
    definition: 'A federal Fair Housing protected class. Landlords must allow reasonable accommodations and modifications for tenants with disabilities.',
    example: 'Refusing to allow a wheelchair ramp to be installed or denying a service animal is disability discrimination under the Fair Housing Act.',
  },
  'steering': {
    definition: 'The illegal practice of directing or discouraging buyers or renters toward or away from certain neighborhoods based on protected class characteristics.',
    example: 'Telling a buyer "you\'d probably be more comfortable in that other neighborhood" based on their race is steering and a federal Fair Housing violation.',
  },
  'blockbusting': {
    definition: 'The illegal practice of inducing homeowners to sell by suggesting that people of a certain protected class are moving into the area, causing property values to decline.',
    example: 'Distributing flyers warning residents that minority families are buying in the area to encourage panic selling is classic blockbusting.',
  },
  'redlining': {
    definition: 'The illegal practice of refusing mortgage loans or insurance based on the racial or ethnic composition of a neighborhood rather than the individual borrower\'s creditworthiness.',
    example: 'A lender that refused to approve mortgages for properties in predominantly minority neighborhoods was engaged in redlining.',
  },
  'discriminatory advertising': {
    definition: 'Any advertisement that states a preference or limitation based on a protected class. Prohibited under the Fair Housing Act regardless of intent.',
    example: 'A rental ad stating "perfect for Christian family" indicates a religious preference and constitutes discriminatory advertising.',
  },

  // ── Module 1, Ch3: Virginia Fair Housing ─────────────────────────────────
  'Virginia Fair Housing Law': {
    definition: 'Virginia Code §§ 36-96.1 through 36-96.23 — Virginia\'s state fair housing statute that mirrors federal law but adds additional protected classes: elderliness, source of funds, sexual orientation, gender identity, marital status, and military status.',
    example: 'Under Virginia Fair Housing Law, a landlord cannot refuse a Housing Choice Voucher applicant solely because they use a Section 8 voucher.',
  },
  'source of funds': {
    definition: 'A Virginia-specific fair housing protected class prohibiting housing discrimination based on how a tenant or buyer pays — including housing vouchers, government assistance, Social Security, or VA benefits.',
    example: 'A landlord who refuses all Section 8 applicants without individual evaluation violates Virginia\'s source of funds protection.',
  },
  'sexual orientation': {
    definition: 'A Virginia-specific fair housing protected class. Virginia explicitly prohibits housing discrimination based on sexual orientation.',
    example: 'A landlord who refuses to rent to a same-sex couple based on their sexual orientation violates Virginia\'s Fair Housing Law.',
  },
  'gender identity': {
    definition: 'A Virginia-specific fair housing protected class prohibiting discrimination against transgender and non-binary individuals in housing.',
    example: 'Refusing to rent to a tenant because they are transgender is a violation of Virginia\'s Fair Housing Law.',
  },
  'elderliness': {
    definition: 'A Virginia-specific fair housing protected class prohibiting housing discrimination based on age against older persons.',
    example: 'A landlord who refuses applications from seniors because "they\'re too slow with rent" discriminates based on elderliness under Virginia law.',
  },
  'VHDA': {
    definition: 'Virginia Housing Development Authority — Virginia\'s housing finance agency that provides mortgage loans, rental housing financing, and homebuyer education.',
    example: 'First-time buyers using VHDA financing may qualify for down payment assistance and reduced-rate mortgages.',
  },
  'Virginia Fair Housing Office': {
    definition: 'The state agency within the Department of Housing and Community Development (DHCD) that handles fair housing complaints under Virginia law. Complaints must be filed within one year of the discriminatory act.',
    example: 'The tenant filed a complaint with the Virginia Fair Housing Office within the one-year statute of limitations after being denied rental assistance.',
  },

  // ── Module 1, Ch3: Fair Housing Exemptions ───────────────────────────────
  'single-family exemption': {
    definition: 'A federal FHA exemption for individual owners of no more than three single-family homes who sell FSBO without using a broker or discriminatory advertising. Disappears entirely if an agent is involved.',
    example: 'An individual owner selling her only home FSBO may have a narrow FHA exemption — but hiring an agent eliminates it completely.',
  },
  "Mrs. Murphy exemption": {
    definition: 'A federal FHA exemption for owner-occupied buildings of 4 or fewer units. The owner may discriminate in renting other units but cannot use discriminatory advertising or involve a real estate agent.',
    example: 'A homeowner renting out two rooms in a 3-unit building she occupies may qualify for the Mrs. Murphy exemption, but only without agent involvement.',
  },
  'religious organization exemption': {
    definition: 'A federal FHA exemption allowing religious organizations to limit housing they own or operate to members of their religion, provided the religion itself does not discriminate based on race, color, or national origin.',
    example: 'A church housing dormitory can limit occupancy to church members under the religious organization exemption.',
  },
  'private club exemption': {
    definition: 'A federal FHA exemption for genuinely private clubs that provide housing as a membership benefit, not as a commercial housing business.',
    example: 'A private country club that provides member housing can limit those units to club members under the private club exemption.',
  },
  'testers': {
    definition: 'Individuals sent by fair housing organizations or government agencies to pose as home seekers and test whether housing providers are complying with the FHA. Testing is legal and widely used.',
    example: 'A fair housing tester posed as a Hispanic home buyer and documented being steered away from certain neighborhoods — this evidence alone supported an enforcement action.',
  },
  'HUD': {
    definition: 'U.S. Department of Housing and Urban Development — the federal agency responsible for administering and enforcing the Fair Housing Act. FHA complaints must be filed with HUD within one year.',
    example: 'After being denied housing, the tenant filed a Fair Housing complaint with HUD, which investigated and issued a charge of discrimination.',
  },
  'conciliation': {
    definition: 'HUD\'s process of attempting to negotiate a settlement between the complainant and respondent in a fair housing case. Can result in monetary compensation, training, and injunctive relief.',
    example: 'Through HUD conciliation, the landlord agreed to pay the tenant $8,000 in damages and complete fair housing training.',
  },
  'civil penalty': {
    definition: 'Financial penalties imposed by HUD or a court for Fair Housing Act violations. First offense: up to $16,000. Second within 5 years: up to $37,500. Subsequent: up to $65,000.',
    example: 'The landlord was ordered to pay a $16,000 civil penalty for a first-time fair housing violation after an ALJ hearing.',
  },

  // ── Module 1, Ch4: VRLTA ─────────────────────────────────────────────────
  'VRLTA': {
    definition: 'Virginia Residential Landlord and Tenant Act (Virginia Code §§ 55.1-1200 through 55.1-1262) — the primary statute governing residential rental housing in Virginia.',
    example: 'When a tenant disputes a security deposit deduction, the VRLTA sets the rules for when and how the landlord must return the deposit.',
  },
  'Virginia Residential Landlord and Tenant Act': {
    definition: 'The comprehensive Virginia statute (§§ 55.1-1200 through 55.1-1262) governing landlord-tenant relationships in residential rentals. Applies to written and oral leases alike.',
    example: 'The Virginia Residential Landlord and Tenant Act requires landlords to maintain habitable conditions and provides tenants with specific remedies if they fail to do so.',
  },
  'dwelling unit': {
    definition: 'Under the VRLTA, a structure or part of a structure used as a home, residence, or sleeping place by one or more persons maintaining a household.',
    example: 'An apartment, rented house, or rented condominium is a dwelling unit covered by the VRLTA.',
  },
  'landlord': {
    definition: 'Under the VRLTA, a person who owns or manages a dwelling unit and authorizes occupancy under a rental agreement.',
    example: 'The property management company acting on the owner\'s behalf is treated as the landlord for VRLTA purposes.',
  },
  'tenant': {
    definition: 'Under the VRLTA, a person who occupies a dwelling unit under a rental agreement.',
    example: 'The tenant has the right to a habitable unit and the right to be present during the move-out inspection.',
  },
  'written lease': {
    definition: 'A rental agreement in writing. Required for leases of one year or more under Virginia\'s Statute of Frauds. Landlords must provide a copy within one business day of execution.',
    example: 'The written lease specified the monthly rent, lease term, and the conditions under which the landlord could enter the unit.',
  },
  'month-to-month': {
    definition: 'A tenancy with no fixed end date that renews monthly. Valid as an oral agreement under the VRLTA; governed by VRLTA default provisions if no written lease exists.',
    example: 'After the one-year lease expired, the tenancy converted to month-to-month with 30 days\' notice required from either party to terminate.',
  },
  'URLTA': {
    definition: 'Uniform Residential Landlord and Tenant Act — the model statute that Virginia\'s VRLTA is largely based on.',
    example: 'Virginia adopted the URLTA framework when drafting the VRLTA, creating consistency with many other states\' landlord-tenant laws.',
  },

  // ── Module 1, Ch4: Security Deposits ─────────────────────────────────────
  'security deposit': {
    definition: 'Money collected from a tenant before occupancy to cover potential damages or unpaid rent. Under the VRLTA, cannot exceed two months\' rent.',
    example: 'The landlord charged a $1,800 security deposit on a $900/month apartment — exactly two months\' rent, the maximum allowed.',
  },
  'two months rent cap': {
    definition: 'The VRLTA\'s hard limit on security deposits — no landlord may require a deposit exceeding two months\' rent, regardless of the tenant\'s credit history.',
    example: 'Even for a tenant with a poor credit score, the landlord cannot charge more than two months\' rent as a security deposit under Virginia law.',
  },
  'move-in inspection': {
    definition: 'A required written inspection report of the dwelling unit\'s condition at the start of the tenancy. The tenant has the right to be present. Failure to conduct it may forfeit the landlord\'s right to charge for pre-existing damage.',
    example: 'At move-in, the landlord and tenant walked through the unit together, documented a pre-existing scratch on the hardwood floor, and both signed the inspection report.',
  },
  'move-out inspection': {
    definition: 'A post-tenancy inspection to assess damage beyond normal wear and tear. The landlord must give the tenant written notice of the date and opportunity to be present and remedy deficiencies.',
    example: 'The landlord notified the tenant 5 days before the scheduled move-out inspection so they could repair any minor damage before vacating.',
  },
  'itemized deductions': {
    definition: 'A written list required by the VRLTA when a landlord retains any portion of a security deposit, specifying each deduction and its cost. Must be provided within 45 days.',
    example: 'The landlord sent an itemized deductions letter: $300 for carpet cleaning, $150 for patching three holes in the wall, totaling $450 withheld from the $1,200 deposit.',
  },
  'normal wear and tear': {
    definition: 'Deterioration that occurs from ordinary use of the rental unit over time. Landlords cannot deduct security deposit funds for normal wear and tear.',
    example: 'Small nail holes from hanging pictures and carpet that has worn from foot traffic over a 3-year tenancy are normal wear and tear — not chargeable damage.',
  },
  'interest': {
    definition: 'Under the VRLTA, security deposits held by landlords accrue interest at a rate set annually by the State Treasurer.',
    example: 'After two years, the landlord returned the security deposit plus the small amount of interest that had accrued per Virginia law.',
  },

  // ── Module 1, Ch4: Eviction ───────────────────────────────────────────────
  'unlawful detainer': {
    definition: 'The Virginia court action a landlord files to evict a tenant who has not complied with a notice to vacate. Filed in General District Court.',
    example: 'After the tenant failed to pay or vacate within the 5-day notice period, the landlord filed an unlawful detainer action in the General District Court.',
  },
  'pay or quit notice': {
    definition: 'A written notice giving a tenant 5 days to pay all overdue rent or vacate. Required before filing for eviction for non-payment in Virginia.',
    example: 'On the 6th of the month, the landlord served a 5-Day Pay or Quit Notice after the tenant failed to pay the $1,200 monthly rent.',
  },
  'five-day notice': {
    definition: 'The notice period required by Virginia law before a landlord can file an unlawful detainer for non-payment of rent. The tenant has 5 days to pay in full or the eviction proceeds.',
    example: 'Virginia law gives tenants a 5-day notice window to pay overdue rent before the landlord can file in court.',
  },
  'thirty-day notice': {
    definition: 'The notice period required for lease violations other than non-payment. Gives the tenant 30 days to cure the violation or vacate.',
    example: 'The landlord served a 30-day notice after discovering the tenant had an unauthorized dog in violation of the lease.',
  },
  'writ of possession': {
    definition: 'A court order issued after a judgment for possession that authorizes the sheriff to physically remove the tenant if they have not vacated after the appeal period.',
    example: 'After the 10-day appeal period expired, the landlord obtained a writ of possession and the sheriff gave the tenant 72 hours to vacate.',
  },
  'General District Court': {
    definition: 'The Virginia court where unlawful detainer (eviction) actions are filed. Cases are typically heard within 21-30 days of filing.',
    example: 'The landlord paid the filing fee at the General District Court and the hearing was scheduled for three weeks later.',
  },
  'self-help eviction': {
    definition: 'An illegal practice where a landlord attempts to remove a tenant without court authority — changing locks, removing belongings, or cutting utilities. Absolutely prohibited by Virginia law.',
    example: 'The landlord changed the locks while the tenant was at work — a self-help eviction that entitled the tenant to actual damages, punitive damages, and attorney fees.',
  },
  'retaliatory eviction': {
    definition: 'An illegal eviction or notice to vacate served in response to a tenant exercising a legal right (filing a housing complaint, organizing tenants, etc.). Presumed if action occurs within 90 days of protected activity.',
    example: 'The landlord served a notice to vacate two weeks after the tenant filed a housing code complaint — creating a presumption of retaliatory eviction.',
  },
  'constructive eviction': {
    definition: 'A situation where the landlord\'s failure to maintain the premises makes the unit uninhabitable, effectively forcing the tenant to leave. A defense in eviction proceedings.',
    example: 'After months without heat in winter, the tenant vacated and claimed constructive eviction, arguing the landlord had effectively evicted them by making the unit uninhabitable.',
  },

  // ── Module 1, Ch5: NAR Code of Ethics ────────────────────────────────────
  'NAR Code of Ethics': {
    definition: 'The voluntary code of professional conduct adopted by members of the National Association of REALTORS (NAR). Contains 17 Articles organizing duties to clients, the public, and other REALTORS.',
    example: 'Under the NAR Code of Ethics, a REALTOR who receives an offer is ethically required to present it to their client promptly.',
  },
  'REALTOR': {
    definition: 'A licensed real estate agent who is a member of the National Association of REALTORS (NAR) and is bound by its Code of Ethics. "REALTOR" is a registered trademark — not all agents are REALTORS.',
    example: 'The agent was a REALTOR and thus subject to both Virginia real estate regulations and the NAR Code of Ethics.',
  },
  'Articles 1-17': {
    definition: 'The 17 Articles of the NAR Code of Ethics grouped into three categories: Articles 1-9 (duties to clients), Articles 10-14 (duties to the public), Articles 15-17 (duties to REALTORS).',
    example: 'Article 1 requires REALTORS to protect and promote their client\'s interests while treating all parties honestly.',
  },
  'duties to clients': {
    definition: 'Articles 1-9 of the NAR Code of Ethics — governing honesty, loyalty, confidentiality, disclosure, prohibition of kickbacks, written agreements, and separate client funds.',
    example: 'The REALTOR violated her duties to clients under Article 6 by accepting an undisclosed referral fee from the title company.',
  },
  'duties to the public': {
    definition: 'Articles 10-14 of the NAR Code of Ethics — covering non-discrimination, competence, truthful advertising, legal practice boundaries, and cooperation with investigations.',
    example: 'Under duties to the public, a REALTOR must not practice in areas outside their competence without disclosure.',
  },
  'duties to REALTORS': {
    definition: 'Articles 15-17 of the NAR Code of Ethics — prohibiting false statements about other REALTORS, interference with other agents\' client relationships, and requiring arbitration of disputes.',
    example: 'Publicly posting false reviews about a competitor REALTOR violates Article 15 (duties to REALTORS).',
  },
  'Standard of Practice': {
    definition: 'Interpretive rules that support and clarify each Article of the NAR Code of Ethics. Standards of Practice specify how Articles apply in particular situations.',
    example: 'Standard of Practice 1-6 requires REALTORS to submit all offers and counter-offers objectively and as quickly as possible.',
  },
  'arbitration': {
    definition: 'The binding dispute resolution process required by NAR Article 17 for compensation disputes between REALTORS. Arbitration is handled through local REALTOR associations rather than courts.',
    example: 'When two brokers disputed which agent was the procuring cause of a sale, they submitted the commission dispute to binding arbitration per Article 17.',
  },
  'mediation': {
    definition: 'A non-binding dispute resolution process using a neutral third party to help reach a negotiated settlement. Often attempted before arbitration or litigation.',
    example: 'The brokers first attempted mediation to resolve the commission dispute before proceeding to binding arbitration.',
  },

  // ── Module 1, Ch5: Virginia Standards of Conduct ─────────────────────────
  '18 VAC 135-20': {
    definition: 'The Virginia Real Estate Board Regulations — the administrative code that establishes detailed standards of conduct for all Virginia real estate licensees.',
    example: 'The agent was disciplined under 18 VAC 135-20 for failing to disclose a known material defect to the buyer.',
  },
  'material fact': {
    definition: 'Any fact that a reasonable buyer or seller would want to know because it would affect their decision to complete the transaction or the price they would accept.',
    example: 'A known foundation issue is a material fact that must be disclosed to prospective buyers regardless of whether they ask.',
  },
  'adverse material fact': {
    definition: 'A material fact that is unfavorable to a property\'s value, condition, or desirability. Virginia licensees must disclose adverse material facts to all parties.',
    example: 'The history of recurring basement flooding is an adverse material fact requiring disclosure even in an as-is sale.',
  },
  'stigmatized property': {
    definition: 'A property that may be psychologically or emotionally undesirable for reasons unrelated to physical condition (homicide, suicide, alleged haunting). Virginia law does not require disclosure of stigmatizing events.',
    example: 'Under Virginia § 55.1-703, the listing agent was not required to disclose that a murder had occurred in the home three years prior.',
  },
  'as-is sale': {
    definition: 'A transaction where the seller agrees to sell in current condition without making repairs. Does not eliminate the obligation to disclose known adverse material facts.',
    example: 'Even though the contract was "as-is," the seller still had to disclose the known roof leak — as-is means no repairs, not no disclosure.',
  },
  'latent defect': {
    definition: 'A hidden defect not readily observable through ordinary inspection — such as a compromised sewer line or water damage concealed by new drywall. Must be disclosed when known.',
    example: 'The seller knew the crawl space had a latent moisture problem hidden by new insulation — failure to disclose it was a violation.',
  },
  'patent defect': {
    definition: 'A visible, observable defect discoverable through reasonable inspection — such as a large wall crack or missing roof shingles. Buyers are expected to discover these through due diligence.',
    example: 'The broken window visible from the driveway was a patent defect — the buyer\'s inspector would easily identify it.',
  },
  'misrepresentation': {
    definition: 'A false statement of material fact (or concealment of a material fact) that induces a party to enter a transaction. Can be fraudulent (knowing), negligent, or innocent.',
    example: 'Claiming the HVAC was recently replaced when it was actually 20 years old is a material misrepresentation that can void a contract and trigger disciplinary action.',
  },
  'puffery': {
    definition: 'Vague, non-specific promotional statements that no reasonable person would rely on as statements of fact. Distinguished from material misrepresentation.',
    example: '"This is the best street in Richmond!" is puffery. "This home is in school zone X" is a factual statement that can constitute misrepresentation if wrong.',
  },

  // ── Module 1, Ch5: Trust & Conflicts ─────────────────────────────────────
  'conflict of interest': {
    definition: 'A situation where an agent has a personal, financial, or professional interest that could compromise their ability to give impartial advice to a client. Requires disclosure and often consent.',
    example: 'An agent who owns a pest inspection company and recommends it to clients without disclosure has an undisclosed conflict of interest.',
  },
  'net listing': {
    definition: 'An arrangement where the broker\'s compensation is the amount above a set minimum price. Prohibited in Virginia because it creates an irreconcilable conflict between the broker\'s financial interest and the seller\'s interest in the highest price.',
    example: 'Virginia prohibits net listings — the arrangement where the agent keeps everything above the seller\'s floor price is outlawed as a conflict of interest.',
  },
  'commingling': {
    definition: 'The mixing of client funds with a broker\'s own operating or personal funds. A serious violation that often leads to suspension or revocation.',
    example: 'Depositing the buyer\'s $5,000 earnest money into the firm\'s operating account instead of the trust account is commingling.',
  },
  'conversion': {
    definition: 'Using client funds for the broker\'s own purposes — even temporarily "borrowing" and returning the funds. Among the most serious violations a licensee can commit; almost always results in revocation.',
    example: 'The broker used earnest money deposits to cover payroll for two weeks before the closings — this constituted conversion even though the funds were later returned.',
  },
  'kickback': {
    definition: 'A payment or thing of value given in exchange for a referral of settlement service business. Prohibited by RESPA Section 8.',
    example: 'The title company paying agents $200 per closing referral is an illegal kickback under RESPA.',
  },
  'RESPA': {
    definition: 'Real Estate Settlement Procedures Act — a federal law governing residential real estate settlements. Section 8 prohibits kickbacks and referral fees for settlement services.',
    example: 'RESPA requires lenders to provide borrowers with a Loan Estimate and closing disclosures, and prohibits undisclosed referral fees between settlement service providers.',
  },
  'affiliated business arrangement': {
    definition: 'An exception under RESPA allowing licensees with an ownership interest in a settlement service provider to refer clients to it, provided written disclosure of the relationship, estimated charges, and non-requirement to use are all given.',
    example: 'The agent\'s mortgage company interest was disclosed in an Affiliated Business Arrangement form at the time of referral, satisfying RESPA requirements.',
  },
  'referral fee': {
    definition: 'Compensation paid to an agent for directing a client to another agent or service provider. Legal between agents (with disclosure), but prohibited under RESPA when paid for referring settlement service business without proper AfBA disclosure.',
    example: 'The agent received a 25% referral fee from an out-of-state broker for connecting a relocating buyer — permissible with proper disclosure.',
  },

  // -- Module 2, Ch1: Forms of Property Ownership --
  'tenancy in common': {
    definition: 'The default form of co-ownership in Virginia where two or more persons hold undivided fractional interests with no right of survivorship. Shares can be unequal and each owner can sell, gift, or mortgage their share independently.',
    example: 'Two friends buy a rental property 60/40. When one dies, their 40% passes through their estate to their heirs, not to the surviving co-owner.',
  },
  'joint tenancy': {
    definition: 'A form of co-ownership requiring the four unities (time, title, interest, possession) where all owners hold equal shares with the right of survivorship. When one joint tenant dies, their interest passes automatically to the survivors.',
    example: 'Three siblings hold a vacation home as joint tenants. When one dies, the other two each own 50% automatically, bypassing probate.',
  },
  'right of survivorship': {
    definition: 'A feature of joint tenancy and tenancy by the entireties where a deceased co-owner\'s interest automatically transfers to the surviving co-owners by operation of law, outside of probate.',
    example: 'When a joint tenant dies, the surviving joint tenant records an affidavit of survivorship and a death certificate to clear the title.',
  },
  'four unities': {
    definition: 'The four requirements for creating a valid joint tenancy: Unity of Time (acquired at the same time), Unity of Title (same deed), Unity of Interest (equal shares), and Unity of Possession (equal right to possess the whole property).',
    example: 'If A and B take title by the same deed at the same time with equal 50/50 interests and equal possession rights, all four unities are present.',
  },
  'undivided interest': {
    definition: 'A co-owner\'s share in the entire property rather than a specific physical portion. Each co-owner has the right to use and possess the whole property, not just a designated section.',
    example: 'Owning a 25% undivided interest means you own 25% of every square foot, not one-quarter of the lot.',
  },
  'partition': {
    definition: 'A legal action filed in circuit court by any co-owner to compel division of jointly owned property. Courts prefer physical division (partition in kind) but will order a sale (partition by sale) when physical division is impractical.',
    example: 'After siblings inherited a farm as tenants in common and could not agree on its use, one filed a partition action and the court ordered a sale.',
  },
  'tenancy by the entireties': {
    definition: 'A form of co-ownership available only to legally married couples in Virginia, combining equal shares and right of survivorship with creditor protection. Neither spouse can unilaterally convey or encumber the property.',
    example: 'A judgment against one spouse alone cannot force the sale of a home held as tenants by the entireties because both spouses must agree to any transfer.',
  },
  'community property': {
    definition: 'A marital property system used in nine states (not Virginia) where most property acquired during marriage is owned equally by both spouses regardless of whose name is on the title. Virginia uses equitable distribution instead.',
    example: 'In California (a community property state), a home purchased during marriage belongs 50/50 to both spouses even if only one is on the deed.',
  },
  'marital property': {
    definition: 'In Virginia, property acquired during the marriage that is subject to equitable distribution upon divorce. Virginia courts divide marital property fairly but not necessarily equally.',
    example: 'A home purchased jointly during marriage is marital property and would be subject to division in a Virginia divorce proceeding.',
  },
  'separate property': {
    definition: 'In Virginia, property owned by one spouse before marriage, or acquired during marriage by gift or inheritance. Separate property is generally not subject to equitable distribution in divorce.',
    example: 'A rental property one spouse inherited from a parent remains separate property, as long as it was not commingled with marital assets.',
  },
  'Virginia marital rights': {
    definition: 'Legal protections for married persons in Virginia real estate, including the presumption of tenancy by the entireties for jointly owned property and the requirement that both spouses sign deeds and deeds of trust on entireties property.',
    example: 'A deed of trust on a home held as tenants by the entireties is invalid unless both spouses sign it.',
  },
  'condominium': {
    definition: 'A form of ownership where individual units are owned in fee simple and common areas (hallways, roof, pool) are owned as tenants in common by all unit owners. Governed by the Virginia Condominium Act.',
    example: 'A condo buyer receives a deed to their unit and an undivided percentage interest in all common elements, plus a monthly assessment for shared expenses.',
  },
  'cooperative': {
    definition: 'An ownership structure where a corporation owns the entire building and residents purchase shares of stock in the corporation, receiving a proprietary lease to occupy a specific unit. Co-op residents own personal property (stock), not real property.',
    example: 'Because co-op owners hold stock rather than a deed, they typically cannot get a traditional mortgage and must arrange share loans.',
  },
  'planned unit development': {
    definition: 'A mixed-use or residential community where individual owners hold fee simple title to their lot and home while common areas are owned and maintained by a homeowners association (HOA).',
    example: 'In a PUD, each homeowner owns their lot outright but the neighborhood pool, park, and private roads are HOA property funded by mandatory assessments.',
  },
  'HOA': {
    definition: 'Homeowners Association. The governing body of a planned unit development or subdivision that enforces CC&Rs, collects assessments, and maintains common areas. Membership is mandatory for all lot owners.',
    example: 'The HOA fined the homeowner $100 for painting their front door a color not approved in the architectural guidelines.',
  },
  'common elements': {
    definition: 'In a condominium, the portions of the property owned collectively by all unit owners, such as hallways, lobbies, elevators, roofs, exterior walls, pools, and grounds.',
    example: 'The condo association levied a special assessment to repair the building\'s roof, which is a common element shared by all owners.',
  },
  'unit deed': {
    definition: 'The deed that conveys ownership of an individual condominium unit to the buyer, along with an undivided percentage interest in the common elements.',
    example: 'At closing, the buyer received a unit deed for Unit 405 and a 1.8% undivided interest in all common elements of the condominium.',
  },
  'proprietary lease': {
    definition: 'In a cooperative, the lease granted to a shareholder giving them the exclusive right to occupy a specific unit. The lease is tied to stock ownership in the cooperative corporation.',
    example: 'The co-op shareholder\'s proprietary lease allowed occupancy of Unit 3B for as long as they held their shares and complied with house rules.',
  },
  'declaration': {
    definition: 'The master legal document that creates a condominium or planned community, recorded in the land records. It defines unit boundaries, common elements, owner rights and obligations, and assessment structures.',
    example: 'The condominium declaration specified that each unit owner\'s assessment share was based on the square footage of their unit relative to the total.',
  },
  'revocable living trust': {
    definition: 'A trust created during the grantor\'s lifetime that holds title to property, allowing it to pass to heirs without probate. The grantor typically serves as trustee and retains full control, including the power to revoke or amend.',
    example: 'The homeowner transferred title to her revocable living trust so that upon her death, the property would pass directly to her children without going through probate.',
  },
  'land trust': {
    definition: 'A specialized trust used primarily for privacy where a trustee holds legal title to real property and the beneficial owner\'s identity is not recorded in public deed records. Relatively uncommon in Virginia.',
    example: 'An investor used a land trust to purchase a property so that public records showed only the trust name, not the investor\'s personal name.',
  },
  'LLC': {
    definition: 'Limited Liability Company. The most popular business entity for real estate investment in Virginia, providing liability protection for members while allowing pass-through taxation. Signing authority is determined by the operating agreement.',
    example: 'The investor formed an LLC to hold rental properties, protecting personal assets from tenant lawsuits against the property.',
  },
  'corporation': {
    definition: 'A business entity that can own real property through its officers or board-authorized representatives. A corporate resolution authorizes specific officers to sign real estate documents on behalf of the corporation.',
    example: 'The corporation\'s board passed a resolution authorizing the CEO to execute the purchase agreement and deed for the new office building.',
  },
  'authorized signatory': {
    definition: 'The specific person(s) with legal authority to bind an entity (LLC, corporation, trust, or partnership) in a real estate transaction, as documented by the governing instrument.',
    example: 'The title company required a copy of the LLC operating agreement to confirm the manager was the authorized signatory before accepting the deed.',
  },
  'operating agreement': {
    definition: 'The governing document of an LLC that defines member roles, management structure, and who has authority to sign on behalf of the LLC. In a member-managed LLC, all members can sign; in a manager-managed LLC, only designated managers can.',
    example: 'The operating agreement named Jane as the sole manager with authority to execute all real estate documents, even though there were three members.',
  },
  'corporate resolution': {
    definition: 'A formal decision by a corporation\'s board of directors authorizing a specific transaction or naming a specific officer to sign real estate documents on behalf of the corporation.',
    example: 'The settlement agent required a certified copy of the corporate resolution authorizing the Vice President to sign the deed of trust.',
  },

  // -- Module 2, Ch2: Legal Descriptions & Surveys --
  'metes and bounds': {
    definition: 'The oldest system of legal description, used extensively in Virginia. It traces property boundaries using compass bearings, distances, and monuments, starting and ending at a fixed Point of Beginning.',
    example: '"Beginning at an iron pin, thence N 45 degrees 30 minutes E, 175.50 feet to an oak tree" is a typical metes and bounds call.',
  },
  'point of beginning': {
    definition: 'The fixed, identifiable starting point of a metes and bounds legal description. The description traces the boundary from this point and must return to it to properly close.',
    example: 'The survey description began: "Commencing at an iron pin at the intersection of Main Street and Oak Avenue, said point being the Point of Beginning."',
  },
  'call': {
    definition: 'A single segment in a metes and bounds description consisting of a bearing (compass direction) and a distance, often ending at a monument or marker.',
    example: 'The call "thence S 30 degrees E, 200 feet to a concrete marker" directs the surveyor southeast for 200 feet.',
  },
  'bearing': {
    definition: 'The compass direction component of a metes and bounds call, expressed as an angle from north or south toward east or west (e.g., N 45 degrees E means 45 degrees east of due north).',
    example: 'A bearing of S 90 degrees W means the boundary line runs due west.',
  },
  'monument': {
    definition: 'A physical marker that defines a corner or point along a property boundary. Can be natural (tree, stream, rock) or artificial (iron pin, concrete marker). In case of conflict, natural monuments have the highest priority.',
    example: 'When the description said "100 feet to the old oak tree" but the tree was only 87 feet away, the monument (tree) controlled over the distance.',
  },
  'benchmark': {
    definition: 'A permanent reference point of known elevation established by a government survey, used to anchor legal descriptions and determine property elevations.',
    example: 'The surveyor referenced a USGS benchmark on the courthouse steps to establish the elevation of the property\'s Point of Beginning.',
  },
  'township': {
    definition: 'In the rectangular survey system, a 6-mile by 6-mile square of land identified by its position north or south of a baseline. Each township contains 36 sections of 640 acres each.',
    example: 'Township 3 North (T3N) refers to the third row of townships north of the baseline.',
  },
  'range': {
    definition: 'In the rectangular survey system, a vertical column of townships numbered east or west from a principal meridian.',
    example: 'Range 2 East (R2E) identifies the second column of townships east of the principal meridian.',
  },
  'section': {
    definition: 'A one-square-mile (640-acre) division of a township in the rectangular survey system. Townships contain 36 sections numbered in a serpentine pattern starting from the northeast corner.',
    example: 'Section 16 of each township was historically reserved for public schools, which is why many school sites sit on Section 16 land.',
  },
  'principal meridian': {
    definition: 'A designated north-south line used as the primary reference for the rectangular survey system. Ranges are numbered east and west from the principal meridian.',
    example: 'The Tallahassee Meridian serves as the principal meridian for surveys in Florida and Alabama.',
  },
  'baseline': {
    definition: 'A designated east-west line in the rectangular survey system from which townships are numbered north and south. It intersects the principal meridian at the point of origin.',
    example: 'Township 1 North is the first row of townships immediately north of the baseline.',
  },
  'quarter section': {
    definition: 'A 160-acre subdivision of a section, identified by compass direction (NE, NW, SE, or SW quarter). Sections can be further divided into quarter-quarter sections of 40 acres each.',
    example: 'The NE quarter of Section 14 contains 160 acres (640 divided by 4).',
  },
  'aliquot parts': {
    definition: 'Fractional subdivisions of a section in the rectangular survey system, described by compass directions from smallest to largest. Used to identify parcels smaller than a full section.',
    example: '"The SW quarter of the NE quarter of Section 14" describes a 40-acre parcel (640 / 4 / 4 = 40 acres).',
  },
  'recorded plat': {
    definition: 'A precise survey drawing of a subdivision showing lot dimensions, block groupings, streets, easements, and dedicated areas, filed in the land records of the locality. The most common form of legal description for Virginia residential properties.',
    example: 'The deed referenced "Lot 14, Block 3, Section 2 of Westwood Forest Subdivision, as recorded in Plat Book 47, Page 212."',
  },
  'subdivision': {
    definition: 'A tract of land divided into individual lots for sale, with a recorded plat showing lot dimensions, streets, easements, and common areas. Must be approved by the local government before recording.',
    example: 'The developer divided the 50-acre parcel into 85 residential lots and recorded the subdivision plat with the county clerk.',
  },
  'lot': {
    definition: 'An individual parcel of land within a subdivision, identified by a number on the recorded plat. Each lot has defined dimensions and boundary lines shown on the plat.',
    example: 'The buyer purchased Lot 22 of the Maple Ridge subdivision, which the plat showed as 0.35 acres with 80 feet of road frontage.',
  },
  'block': {
    definition: 'A grouping of lots within a subdivision, typically bounded by streets. Lots are numbered within each block for easy identification.',
    example: 'The property was described as Lot 7, Block 4 of the Oak Hills subdivision.',
  },
  'plat book': {
    definition: 'The official record book maintained by the Circuit Court Clerk in each Virginia locality where subdivision plats are filed and indexed for public access.',
    example: 'The title examiner pulled up Plat Book 47, Page 212 from the Henrico County electronic records to verify the lot dimensions.',
  },
  'dedication': {
    definition: 'The act of setting aside private land for public use, typically when a developer transfers streets and parks to the local government as part of a subdivision plat.',
    example: 'When the subdivision was recorded, the developer dedicated the interior streets to the county, which then assumed maintenance responsibility.',
  },
  'easement by plat': {
    definition: 'An easement created by being shown on a recorded subdivision plat, such as utility easements along lot lines or drainage easements. These bind all future owners of the affected lots.',
    example: 'The recorded plat showed a 10-foot utility easement along the rear of every lot, preventing homeowners from building structures in that strip.',
  },

  // -- Module 2, Ch3: Land Use Controls & Zoning --
  'zoning ordinance': {
    definition: 'A local law that divides a jurisdiction into zones and specifies permitted land uses, building heights, setbacks, lot coverage, and density in each zone. Enacted under the government\'s police power.',
    example: 'The zoning ordinance prohibited commercial use in the R-1 residential zone, so the homeowner could not open a retail shop on the property.',
  },
  'residential zoning': {
    definition: 'Zoning classifications that regulate where and how housing is built, ranging from low-density single-family (R-1) to multi-family (R-MF) districts.',
    example: 'The R-1 zone required a minimum lot size of one acre and permitted only single-family detached homes.',
  },
  'commercial zoning': {
    definition: 'Zoning classifications for business and retail uses, typically designated B-1 or C-1 for neighborhood commercial through B-3 or C-3 for heavy commercial districts.',
    example: 'The property was zoned C-2 (General Commercial), permitting retail stores, restaurants, and professional offices.',
  },
  'industrial zoning': {
    definition: 'Zoning classifications for manufacturing, warehousing, and processing uses, ranging from light industrial (I-1) to heavy industrial (I-2).',
    example: 'The warehouse site was zoned I-1 (Light Industrial), which allowed storage and distribution but not heavy manufacturing.',
  },
  'variance': {
    definition: 'An official authorization from the local Board of Zoning Appeals to deviate from a specific zoning requirement. Area variances (dimensional relief) are more common; use variances (different use) are harder to obtain. Requires proof of undue hardship.',
    example: 'The homeowner obtained an area variance to build an addition within 5 feet of the rear property line despite a 10-foot setback requirement.',
  },
  'special use permit': {
    definition: 'A permit granted by the local governing body allowing a use not automatically permitted in a zone but potentially compatible with conditions. Also called a conditional use permit. Runs with the land.',
    example: 'The church obtained a special use permit to operate in a residential zone, subject to conditions on parking, hours, and noise.',
  },
  'nonconforming use': {
    definition: 'A use that was lawful when established but no longer complies with current zoning due to a later zoning change. May continue but cannot be expanded. Lost if abandoned for the statutory period (often 2 years).',
    example: 'The corner store operated legally for decades before the area was rezoned residential. As a nonconforming use, it can continue but cannot expand.',
  },
  'spot zoning': {
    definition: 'The illegal practice of rezoning a small parcel in a way inconsistent with the comprehensive plan, benefiting only a private interest rather than the public welfare. Courts will invalidate spot zoning.',
    example: 'Rezoning a single lot in the middle of a residential neighborhood to allow a gas station would be struck down as spot zoning.',
  },
  'deed restriction': {
    definition: 'A provision in a deed that limits how property can be used, what structures can be built, or how the property must appear. A form of private land use control that runs with the land if properly recorded.',
    example: 'The deed restriction stated "No structure over two stories shall be erected on this lot," limiting the buyer\'s building plans.',
  },
  'restrictive covenant': {
    definition: 'A binding promise in a deed or separate recorded document that restricts property use. When part of a common scheme for an entire subdivision, restrictive covenants are enforceable by neighbors and the HOA.',
    example: 'The restrictive covenant required all homes in the subdivision to have brick or stone facades, maintaining a uniform appearance.',
  },
  'CC&Rs': {
    definition: 'Covenants, Conditions, and Restrictions. The comprehensive set of private rules governing a subdivision or planned community, recorded in land records and binding on all present and future owners.',
    example: 'The CC&Rs prohibited short-term rentals, parking commercial vehicles in driveways, and fences over 4 feet tall.',
  },
  'equitable servitude': {
    definition: 'A deed restriction that meets the legal requirements to "run with the land" and is therefore enforceable against all future owners, not just the original parties.',
    example: 'Because the restriction was in writing, recorded, intended to bind successors, and touched and concerned the land, the court enforced it as an equitable servitude against the new owner.',
  },
  'run with the land': {
    definition: 'A legal characteristic of certain rights, restrictions, or obligations that automatically pass to successive owners of the property rather than remaining personal to the original parties.',
    example: 'The easement for driveway access runs with the land, so every future owner of the benefited parcel can use the shared driveway.',
  },
  'enforcement by neighbors': {
    definition: 'The right of adjacent property owners within the same development scheme to enforce deed restrictions through court action, even without the HOA\'s involvement.',
    example: 'When a homeowner violated the subdivision\'s restriction against commercial use, a neighbor successfully sued to enforce the covenant.',
  },
  'eminent domain': {
    definition: 'The government\'s constitutional power to take private property for public use, provided it pays the owner just compensation. Authorized by the Fifth Amendment.',
    example: 'The state exercised eminent domain to acquire a strip of the homeowner\'s front yard for a road-widening project, paying fair market value.',
  },
  'condemnation': {
    definition: 'The legal process by which the government exercises eminent domain, including notice, appraisal, negotiation, and if necessary, a court proceeding to determine just compensation.',
    example: 'When the property owner rejected the highway department\'s initial offer, the government filed condemnation proceedings in circuit court.',
  },
  'just compensation': {
    definition: 'The fair market value a property owner must be paid when the government takes property through eminent domain. Determined by what a willing buyer would pay a willing seller with reasonable knowledge of all relevant facts.',
    example: 'The court-appointed commissioners determined just compensation of $185,000 for the condemned parcel based on comparable sales.',
  },
  'public use': {
    definition: 'The constitutional requirement that government can only exercise eminent domain for a public purpose such as roads, schools, utilities, or parks. Virginia law restricts "public use" more strictly than the federal minimum.',
    example: 'The condemnation was upheld because the land was being taken for a new public school, which clearly qualifies as public use.',
  },
  'inverse condemnation': {
    definition: 'A claim filed by a property owner against the government when private property has been taken or damaged without formal condemnation proceedings. The owner must sue to obtain compensation.',
    example: 'After a government drainage project permanently flooded part of her land, the owner filed an inverse condemnation action to recover compensation.',
  },
  'police power': {
    definition: 'The government\'s inherent authority to regulate private property use to protect public health, safety, morals, and general welfare. The legal basis for zoning, building codes, and environmental regulations. No compensation is owed unless a regulation rises to a "taking."',
    example: 'Zoning laws, building codes, and fire safety requirements are all exercises of police power that restrict property use without compensating owners.',
  },
  'escheat': {
    definition: 'The government\'s power to take ownership of property when an owner dies intestate (without a will) and has no heirs. The property reverts to the Commonwealth of Virginia.',
    example: 'After an extensive search found no surviving relatives, the deceased owner\'s property escheated to the Commonwealth of Virginia.',
  },
  'taxation': {
    definition: 'The government\'s power to assess and collect property taxes on real estate. Failure to pay property taxes can result in a tax lien and eventually a tax sale of the property.',
    example: 'After three years of unpaid property taxes, the county placed a tax lien on the property and scheduled it for public auction.',
  },

  // -- Module 2, Ch4: Environmental Regulations --
  'lead-based paint': {
    definition: 'Paint containing lead, commonly used in residential housing built before 1978. Federal law requires sellers and agents to disclose known lead paint hazards and provide an EPA pamphlet for all pre-1978 housing sales.',
    example: 'The seller disclosed that the 1965 home had been tested and lead paint was found on the window trim, providing the test report to the buyer.',
  },
  'pre-1978': {
    definition: 'The cutoff year for federal lead paint disclosure requirements. Residential housing built before 1978 may contain lead-based paint because the Consumer Product Safety Commission banned lead paint in that year.',
    example: 'Because the home was built in 1972, the seller was required to provide the EPA lead paint pamphlet and a signed disclosure addendum.',
  },
  'HUD/EPA disclosure rule': {
    definition: 'The federal regulation requiring sellers and landlords of pre-1978 housing to disclose known lead-based paint hazards, provide existing reports, deliver the EPA pamphlet, and include a disclosure addendum in the contract.',
    example: 'Under the HUD/EPA disclosure rule, the listing agent ensured the signed lead paint addendum was included with every pre-1978 sale.',
  },
  'ten-day inspection period': {
    definition: 'The statutory right of buyers of pre-1978 housing to conduct a lead-based paint inspection or risk assessment within 10 days of contract ratification. Can be shortened, lengthened, or waived by the buyer, but cannot be eliminated by the seller.',
    example: 'The buyer waived the 10-day lead inspection period in writing to make her offer more competitive in a multiple-offer situation.',
  },
  'asbestos': {
    definition: 'A naturally occurring mineral once widely used in building materials for fire resistance and insulation. In friable form it poses serious health risks (mesothelioma, asbestosis). Known asbestos is a material fact requiring disclosure in Virginia.',
    example: 'The home inspector noted suspected asbestos pipe insulation in the basement and recommended professional testing before any renovation.',
  },
  'FRIABLE': {
    definition: 'Asbestos-containing material that can be crumbled or powdered by hand pressure, releasing dangerous fibers into the air. Friable asbestos requires professional abatement, while non-friable asbestos (bonded into tiles or shingles) is typically managed in place.',
    example: 'The deteriorating pipe wrap was friable asbestos that released fibers when touched, requiring immediate professional removal.',
  },
  'renovation repair painting rule': {
    definition: 'The EPA\'s RRP Rule requiring contractors performing renovation, repair, or painting in pre-1978 housing to be EPA-certified and follow lead-safe work practices to prevent lead contamination.',
    example: 'The buyer\'s agent advised hiring only RRP-certified contractors for the kitchen renovation because the 1960s home likely contained lead paint.',
  },
  'FEMA flood zone': {
    definition: 'A geographic area identified on FEMA\'s Flood Insurance Rate Maps (FIRMs) with a specific flood risk designation. Properties in Special Flood Hazard Areas (Zones A and V) face a 1% annual flood chance and require flood insurance for federally backed loans.',
    example: 'The property was in FEMA Zone AE, meaning flood insurance was mandatory for the buyer\'s conventional mortgage.',
  },
  'NFIP': {
    definition: 'National Flood Insurance Program. The federal program that provides flood insurance for properties in participating communities. Covers up to $250,000 for residential structures and $100,000 for contents.',
    example: 'The lender required the borrower to purchase an NFIP policy because the property was in a Special Flood Hazard Area.',
  },
  'mandatory flood insurance': {
    definition: 'The federal requirement that borrowers with federally backed mortgages (FHA, VA, conventional sold to Fannie/Freddie) must purchase flood insurance if the property is in a Special Flood Hazard Area.',
    example: 'The buyer was surprised to learn that flood insurance was mandatory for their FHA loan because the backyard crossed into Zone AE.',
  },
  'wetlands': {
    definition: 'Areas where water saturates the soil at or near the surface, such as marshes, swamps, and bogs. Protected under Section 404 of the Clean Water Act. Any filling or development requires federal and state permits.',
    example: 'The buyer planned to build on the back half of the lot, but a wetlands delineation showed 40% of the property was protected wetland.',
  },
  'Army Corps of Engineers': {
    definition: 'The U.S. Army Corps of Engineers administers Section 404 of the Clean Water Act, regulating the discharge of dredge or fill material into wetlands and other waters of the United States.',
    example: 'Before developing the lakefront property, the builder obtained a Section 404 permit from the Army Corps of Engineers for filling a small wetland area.',
  },
  'Section 404 permit': {
    definition: 'A federal permit required under Section 404 of the Clean Water Act for any activity involving dredging, filling, or development in wetlands. Issued by the Army Corps of Engineers. Can take months or years to obtain.',
    example: 'The developer\'s application for a Section 404 permit was denied, effectively preventing construction on the wetland portion of the site.',
  },
  'brownfield': {
    definition: 'A property where the presence or suspected presence of hazardous substances or contaminants complicates redevelopment. Virginia\'s Voluntary Remediation Program helps owners clean up brownfields and limits future liability.',
    example: 'The former gas station was classified as a brownfield due to suspected fuel contamination, requiring environmental assessment before any new development.',
  },
  'underground storage tank': {
    definition: 'A tank buried below ground that stores fuel, solvents, or other hazardous materials. Leaking USTs can contaminate soil and groundwater, requiring expensive cleanup. Sellers must disclose known USTs as material facts.',
    example: 'During due diligence, the buyer discovered records of a decommissioned underground storage tank on the former gas station property.',
  },
  'mold': {
    definition: 'A type of fungus that grows where moisture is present. While not regulated by specific federal or state statute in residential sales, known mold growth is a material fact requiring disclosure in Virginia transactions.',
    example: 'The seller disclosed past water damage in the basement and a professional mold remediation performed the previous year.',
  },
  'radon': {
    definition: 'A naturally occurring radioactive gas produced by uranium decay in soil and rock. It seeps through foundations and is the second leading cause of lung cancer. The EPA recommends mitigation at 4.0 picocuries per liter (pCi/L) or above.',
    example: 'The radon test measured 6.2 pCi/L in the basement, well above the EPA action level, so the buyer requested a mitigation system as a condition of closing.',
  },
  'picocuries per liter': {
    definition: 'The unit of measurement for radon concentration in indoor air. The EPA action level is 4.0 pCi/L, above which mitigation is recommended.',
    example: 'The short-term radon test showed 3.8 pCi/L, just below the EPA action level, prompting the buyer to request a long-term follow-up test.',
  },
  'EPA action level': {
    definition: 'The radon concentration of 4.0 picocuries per liter (pCi/L) at which the EPA recommends homeowners take corrective action (mitigation). Not a legal standard, but widely used as the threshold for negotiation in transactions.',
    example: 'Because the test result exceeded the EPA action level of 4.0 pCi/L, the seller agreed to install a sub-slab depressurization system before closing.',
  },
  'Phase I assessment': {
    definition: 'A Phase I Environmental Site Assessment (ESA) evaluating whether a property has conditions indicating hazardous substances or contamination, through records review, site inspection, and interviews. Required by most commercial lenders and establishes the innocent landowner defense under CERCLA.',
    example: 'The bank required a Phase I ESA before approving the commercial loan, and the report identified a Recognized Environmental Condition from a former dry cleaner.',
  },
  'Phase II assessment': {
    definition: 'A Phase II Environmental Site Assessment triggered when a Phase I identifies Recognized Environmental Conditions. Involves actual sampling (soil borings, groundwater monitoring) and laboratory analysis to confirm contamination.',
    example: 'The Phase II assessment confirmed petroleum contamination in the soil at levels exceeding Virginia DEQ cleanup standards.',
  },
  'CERCLA': {
    definition: 'Comprehensive Environmental Response, Compensation, and Liability Act (also called Superfund). Imposes strict liability on property owners for hazardous substance cleanup regardless of fault. A Phase I ESA is required to establish the innocent landowner defense.',
    example: 'Under CERCLA, the current property owner was held liable for cleanup costs even though the contamination was caused by a previous owner decades earlier.',
  },
  'innocent landowner defense': {
    definition: 'A CERCLA defense available to buyers who conducted All Appropriate Inquiries (typically a Phase I ESA) before purchase and had no knowledge of contamination. Without a Phase I, this defense is unavailable.',
    example: 'Because the buyer had a Phase I ESA performed showing no contamination at the time of purchase, they successfully asserted the innocent landowner defense.',
  },

  // -- Module 3, Ch1: Contract Fundamentals --
  'offer': {
    definition: 'A proposal by one party (the offeror) to another (the offeree) to enter into a contract on specific terms. Must be definite, communicated, and demonstrate intent to be bound if accepted. Can be revoked any time before acceptance.',
    example: 'The buyer submitted a written offer at $395,000 with a 45-day settlement, which the seller could accept, counter, or reject.',
  },
  'acceptance': {
    definition: 'Unconditional agreement to the exact terms of an offer, creating a binding contract. Must mirror the offer exactly (mirror image rule) and be communicated to the offeror to be effective.',
    example: 'The seller signed the buyer\'s offer without changes and the listing agent delivered the signed contract to the buyer\'s agent, creating a ratified contract.',
  },
  'consideration': {
    definition: 'Something of legal value exchanged between parties to a contract, such as money, a promise, or an act. Does not need to be equal in value, but must be real, not illusory. In purchase agreements, the mutual promises to buy and sell are the consideration.',
    example: 'The buyer\'s promise to pay $400,000 and the seller\'s promise to convey the property are the consideration supporting the purchase agreement.',
  },
  'legal capacity': {
    definition: 'The legal ability to enter into a binding contract. Minors (under 18), mentally incapacitated persons, and intoxicated persons may lack capacity, making their contracts voidable.',
    example: 'A 17-year-old signed a purchase agreement, but because she was a minor, the contract was voidable at her option.',
  },
  'lawful object': {
    definition: 'The requirement that a contract\'s subject matter and purpose be legal. A contract with an illegal purpose, such as selling stolen property or facilitating discrimination, is void.',
    example: 'A listing agreement that required the agent to refuse showings to buyers of a particular race would be void for lacking a lawful object.',
  },
  'mutual assent': {
    definition: 'A genuine meeting of the minds where both parties agree to the same terms with the same understanding. Can be undermined by fraud, misrepresentation, duress, undue influence, or mutual mistake.',
    example: 'The court voided the contract because there was no mutual assent. The buyer thought the sale included the adjacent lot, while the seller only intended the house lot.',
  },
  'void': {
    definition: 'A contract that has no legal effect and was never valid. Neither party can enforce it. Examples include contracts with an illegal purpose or contracts made with a party declared incompetent by a court.',
    example: 'The contract to sell a property the seller didn\'t own was void from the start. Neither party could enforce it.',
  },
  'voidable': {
    definition: 'A contract that is valid but can be canceled by one party due to a defect such as fraud, duress, or lack of capacity. The party with the right to void may instead choose to affirm and enforce it.',
    example: 'The contract signed under duress was voidable. The pressured party could choose to cancel it or let it stand.',
  },
  'unenforceable': {
    definition: 'A contract that has all required elements but cannot be enforced due to a procedural defect, such as an oral real estate contract that violates the Statute of Frauds.',
    example: 'The handshake deal to sell the farm was unenforceable because the Statute of Frauds requires real estate contracts to be in writing.',
  },
  'statute of frauds': {
    definition: 'A legal doctrine requiring certain contracts to be in writing and signed to be enforceable. In real estate, applies to purchase agreements, leases over one year, listing agreements, and contracts to pay a commission.',
    example: 'The seller verbally agreed to sell for $300,000 but later refused. The buyer couldn\'t enforce the deal because the Statute of Frauds required a written contract.',
  },
  'writing requirement': {
    definition: 'Under the Statute of Frauds, a written real estate contract must identify the parties, describe the property, state the price, and be signed by the party to be charged. Virginia Code section 11-2 codifies this requirement.',
    example: 'The contract satisfied the writing requirement because it identified both parties, described the property by address, stated the price, and bore the seller\'s signature.',
  },
  'electronic signature': {
    definition: 'A digital signature that carries the same legal force as a handwritten signature under UETA and ESIGN. Platforms like DocuSign and dotloop create legally enforceable electronic signatures for real estate contracts.',
    example: 'The buyer signed the purchase agreement via DocuSign from her phone, which was as legally valid as a pen-and-ink signature.',
  },
  'UETA': {
    definition: 'Uniform Electronic Transactions Act. Adopted by Virginia, this law gives electronic signatures and records the same legal effect as their paper equivalents for transactions within its scope.',
    example: 'Under UETA, the electronically signed listing agreement was just as binding as a handwritten one.',
  },
  'ESIGN': {
    definition: 'Electronic Signatures in Global and National Commerce Act. A federal law providing that electronic signatures are valid and enforceable for interstate transactions, creating a federal floor of electronic signature validity.',
    example: 'The ESIGN Act ensured the buyer\'s electronic signature on the interstate transaction was legally recognized.',
  },
  'partial performance exception': {
    definition: 'An exception to the Statute of Frauds allowing enforcement of an oral contract when a party has substantially performed, such as paying the price, taking possession, and making improvements to property under an oral agreement.',
    example: 'The buyer paid in full, moved in, and renovated the kitchen under an oral agreement. The court enforced the contract under the partial performance exception despite no writing.',
  },
  'promissory estoppel': {
    definition: 'An equitable doctrine allowing enforcement of an oral promise when one party made a clear promise, the other reasonably relied on it to their detriment, and injustice can only be avoided by enforcement.',
    example: 'The seller promised to hold the property for 30 days while the buyer sold their current home. The buyer relied on this and turned down other options, so the court applied promissory estoppel.',
  },
  'condition precedent': {
    definition: 'An event that must occur before a party\'s performance obligation arises. Most contingencies in purchase agreements are conditions precedent. If the condition fails, the party is not in breach for failing to perform.',
    example: 'The financing contingency was a condition precedent. Until the buyer obtained loan approval, they were not obligated to close.',
  },
  'condition subsequent': {
    definition: 'An event occurring after contract formation that can terminate a party\'s obligation. Less common in standard residential purchase agreements than conditions precedent.',
    example: 'The contract stated that if the rezoning application was denied within 90 days, the developer\'s obligation to purchase would terminate.',
  },
  'contingency': {
    definition: 'A condition written into a purchase agreement giving one party (usually the buyer) the right to exit the contract without default if the condition is not satisfied by a specified deadline.',
    example: 'The home inspection contingency gave the buyer 10 days to have the property inspected and terminate if material defects were found.',
  },
  'time is of the essence': {
    definition: 'A contract provision making every deadline a material term. Missing a deadline by even one day constitutes a material breach, giving the other party the right to terminate and seek damages.',
    example: 'Because the contract stated "time is of the essence," the buyer\'s failure to provide financing denial notice by 5 PM on the deadline meant the contingency was waived.',
  },
  'substantial performance': {
    definition: 'A doctrine preventing forfeiture when a party has performed nearly all of their obligations with only minor deficiencies. More relevant in construction contracts than standard residential purchase agreements.',
    example: 'The contractor substantially performed by completing 98% of the work. The homeowner could not withhold all payment over a minor punch list item.',
  },
  'tender of performance': {
    definition: 'Offering or being ready to perform contractual obligations. A party must tender performance before claiming the other party is in breach. A buyer tenders by appearing at closing with funds; a seller tenders by appearing with a signed deed.',
    example: 'The seller claimed buyer default, but the court found the seller never tendered clear title at closing, so the seller could not claim breach.',
  },
  'parol evidence rule': {
    definition: 'A rule prohibiting prior or contemporaneous oral or written statements from being used to contradict, vary, or add to the terms of a fully integrated written contract. Reinforces the principle that if it\'s not in the written contract, it doesn\'t exist.',
    example: 'The seller verbally promised to leave the refrigerator, but the written contract excluded it. Under the parol evidence rule, the buyer could not enforce the oral promise.',
  },
  'integration clause': {
    definition: 'A contract provision stating that the written contract represents the entire agreement between the parties and supersedes all prior negotiations and representations. Also called a merger clause. Strengthens the parol evidence rule.',
    example: 'Because the contract contained an integration clause, the court refused to consider any verbal promises made during negotiations.',
  },
  'ambiguity': {
    definition: 'Contract language that can reasonably be interpreted in more than one way. When ambiguity exists, courts apply interpretation rules such as contra proferentem (construe against the drafter) and specific over general.',
    example: 'The clause "all appliances convey" was ambiguous about whether the wine cooler was an appliance, so the court looked to the parties\' intent.',
  },
  'contra proferentem': {
    definition: 'A contract interpretation principle stating that ambiguous language is construed against the party who drafted it. Encourages careful, clear drafting.',
    example: 'The listing agreement had an ambiguous commission clause. Under contra proferentem, it was interpreted against the brokerage that drafted the form.',
  },
  'four corners rule': {
    definition: 'The principle that courts interpret a contract by looking only at the written document itself when the language is clear and unambiguous. Plain meaning controls without reference to outside evidence.',
    example: 'The judge refused to hear testimony about verbal negotiations because the contract language was clear within its four corners.',
  },
  'course of dealing': {
    definition: 'The pattern of conduct between parties in prior transactions, which courts may consider when interpreting ambiguous contract terms. Most relevant in commercial or recurring business relationships.',
    example: 'The commercial landlord and tenant had renewed five prior leases without CPI adjustments, establishing a course of dealing that informed interpretation of the ambiguous current lease.',
  },
  'merger doctrine': {
    definition: 'The principle that when a real estate transaction closes, the purchase contract merges into the deed and is extinguished. Post-closing, rights are governed by the deed and closing documents, not the original contract.',
    example: 'The buyer discovered unfinished repairs after closing but could not enforce the contract\'s repair clause because it merged into the deed. Only provisions stated to "survive closing" remain enforceable.',
  },

  // -- Module 3, Ch2: Purchase Agreements --
  'purchase agreement': {
    definition: 'The bilateral contract between a buyer and seller for the sale of real property, specifying price, financing terms, contingencies, settlement date, and other material terms. The most important document in a residential transaction.',
    example: 'After negotiations, both parties signed the purchase agreement at $415,000 with a 45-day settlement and financing, inspection, and appraisal contingencies.',
  },
  'ratification': {
    definition: 'The moment a real estate contract becomes binding, occurring when all parties have signed and acceptance has been communicated. The ratification date starts all contingency deadline clocks.',
    example: 'The seller signed the offer on Tuesday and the listing agent delivered it to the buyer\'s agent on Wednesday. Wednesday was the ratification date.',
  },
  'settlement date': {
    definition: 'The date specified in the purchase agreement when the transaction is expected to close, title transfers, and possession changes hands. Typically 30-60 days from ratification in Virginia.',
    example: 'The settlement date was set for June 15, giving the buyer 45 days to secure financing and complete due diligence.',
  },
  'earnest money deposit': {
    definition: 'A good faith deposit made by the buyer upon contract ratification to demonstrate commitment to the transaction. Held in escrow and credited to the buyer at closing. Typically deposited within 3-5 business days of ratification in Virginia.',
    example: 'The buyer deposited $15,000 in earnest money within 3 business days of ratification, held in the listing broker\'s escrow account.',
  },
  'personal property': {
    definition: 'Movable items not permanently attached to real property, such as furniture, appliances, and portable electronics. Personal property does not automatically convey with a real estate sale unless specifically included in the contract.',
    example: 'The washer and dryer were personal property that the buyer negotiated to include in the purchase agreement.',
  },
  'fixtures': {
    definition: 'Personal property that has been permanently attached to real property and is therefore treated as part of the real estate. Fixtures convey with the property unless specifically excluded. The test considers method of attachment, adaptation, and intent.',
    example: 'The ceiling fans, built-in bookcases, and garage door opener were fixtures that conveyed with the property at closing.',
  },
  'inclusions': {
    definition: 'Items specifically listed in the purchase agreement that the seller agrees to leave with the property, including personal property items that would not otherwise convey.',
    example: 'The inclusions section listed the refrigerator, washer, dryer, and the backyard storage shed as items conveying with the sale.',
  },
  'exclusions': {
    definition: 'Items specifically listed in the purchase agreement that the seller will remove before closing, even if they would otherwise be considered fixtures.',
    example: 'The seller excluded the antique chandelier in the dining room, which was a fixture but had significant sentimental value.',
  },
  'financing contingency': {
    definition: 'A contract provision giving the buyer the right to terminate if they cannot obtain a mortgage loan on specified terms by a stated deadline. The buyer must provide written notice of denial before the deadline to properly exercise it.',
    example: 'The financing contingency gave the buyer until July 10 to obtain a conventional loan. When the loan was denied on July 8, the buyer provided written notice and received the EMD back.',
  },
  'loan commitment letter': {
    definition: 'A lender\'s formal written commitment to fund a mortgage loan, subject to final conditions such as satisfactory appraisal, clear title, and employment verification. Typically what a financing contingency requires by the deadline.',
    example: 'The buyer provided the loan commitment letter two days before the financing contingency deadline, satisfying the contract requirement.',
  },
  'good faith effort': {
    definition: 'The buyer\'s contractual obligation to diligently pursue mortgage approval by submitting a complete application promptly, responding to lender requests, and not undermining their own creditworthiness.',
    example: 'The seller argued the buyer failed to make a good faith effort because the buyer quit their job a week after ratification, making loan approval impossible.',
  },
  'appraisal contingency': {
    definition: 'A contract provision protecting the buyer if the property appraises below the purchase price. Allows the buyer to terminate, renegotiate, or cover the gap with additional cash.',
    example: 'The property appraised at $380,000 against a $400,000 purchase price. The buyer exercised the appraisal contingency and renegotiated the price down to $385,000.',
  },
  'appraisal gap': {
    definition: 'The difference between the purchase price and the appraised value when the appraisal comes in below the contract price. The buyer must bring additional cash to cover the gap or renegotiate.',
    example: 'With a $20,000 appraisal gap, the buyer agreed to bring an extra $10,000 in cash and the seller reduced the price by $10,000.',
  },
  'waived appraisal': {
    definition: 'When a buyer removes or declines to include an appraisal contingency, committing to close at the contract price regardless of the appraised value. Common in competitive markets but carries significant financial risk.',
    example: 'To win the multiple-offer situation, the buyer waived the appraisal contingency, meaning they were committed to pay $425,000 even if the property appraised lower.',
  },
  'pre-approval': {
    definition: 'A lender\'s conditional agreement to lend up to a specified amount after reviewing actual income documentation, credit reports, and assets. Stronger than pre-qualification but not a binding commitment.',
    example: 'The buyer\'s pre-approval letter for $420,000 from a well-known local lender made her offer more attractive to the seller than competing offers with online pre-qualifications.',
  },
  'home inspection contingency': {
    definition: 'A contract provision giving the buyer a specified number of days (typically 7-10 in Virginia) to hire a licensed inspector, review results, and decide whether to proceed, negotiate repairs, or terminate.',
    example: 'The buyer\'s inspector found a cracked heat exchanger during the 10-day inspection contingency period, and the buyer requested the seller replace the furnace.',
  },
  'inspection period': {
    definition: 'The number of days from ratification during which the buyer may conduct inspections and respond to findings. Standard in Virginia is 7-10 days, though it is negotiable.',
    example: 'The buyer shortened the inspection period to 5 days to make the offer more competitive, requiring them to schedule the inspector immediately after ratification.',
  },
  'repair addendum': {
    definition: 'A written addendum to the purchase agreement listing specific repairs the seller has agreed to complete before closing, typically negotiated after the home inspection.',
    example: 'The repair addendum required the seller to replace the water heater, repair the deck railing, and correct the electrical panel deficiency before settlement.',
  },
  'repair credit': {
    definition: 'A closing cost credit from the seller to the buyer in lieu of making repairs, allowing the buyer to handle repairs themselves after closing. Often preferred because it avoids disputes over repair quality.',
    example: 'Instead of repairing the roof, the seller offered a $5,000 repair credit at closing so the buyer could hire their own contractor.',
  },
  'as-is addendum': {
    definition: 'A contract provision stating the seller will not make repairs and the buyer accepts the property in its current condition. Does not eliminate the buyer\'s inspection right, disclosure obligations, or the right to terminate under an inspection contingency.',
    example: 'The property was sold with an as-is addendum, but the buyer still had an inspection contingency and could terminate based on the findings.',
  },
  'material defect': {
    definition: 'A condition that significantly affects a property\'s value, impairs occupant health or safety, or substantially shortens the property\'s expected useful life. The standard under many Virginia inspection contingencies for what justifies termination or repair requests.',
    example: 'A failing foundation with active structural movement is a material defect. A small cosmetic crack in the drywall is not.',
  },
  'reserve the right': {
    definition: 'Contract language allowing a party to retain an option for future action without being required to exercise it. Common in inspection contingencies where buyers "reserve the right" to request repairs.',
    example: 'The inspection addendum stated the buyer "reserves the right to request repairs for material defects discovered during the inspection period."',
  },
  'EMD': {
    definition: 'Earnest Money Deposit. Abbreviation commonly used in Virginia real estate practice for the good faith deposit submitted by the buyer upon contract ratification.',
    example: 'The contract required a $10,000 EMD to be deposited within 3 business days of ratification.',
  },
  'good faith deposit': {
    definition: 'Another term for earnest money deposit. A payment demonstrating the buyer\'s serious intent to complete the purchase. Not technically consideration (mutual promises are), but provides the seller security against buyer default.',
    example: 'The $20,000 good faith deposit was held in the settlement agent\'s escrow account until closing.',
  },
  'interpleader': {
    definition: 'A legal action filed by a broker in court to deposit disputed earnest money with the court and be relieved of liability, letting the court determine which party is entitled to the funds.',
    example: 'After 60 days with no resolution, the broker filed an interpleader action, depositing the $12,000 EMD with the court and letting the judge decide.',
  },
  'default by buyer': {
    definition: 'A buyer\'s failure to perform contractual obligations without a valid excuse (such as a properly exercised contingency). Typically results in the seller retaining the earnest money as liquidated damages.',
    example: 'The buyer simply changed their mind and refused to close. The seller retained the $15,000 EMD as liquidated damages for default by buyer.',
  },
  'default by seller': {
    definition: 'A seller\'s failure to perform contractual obligations, such as refusing to close or failing to deliver clear title. The buyer is entitled to return of EMD and may pursue specific performance or damages.',
    example: 'When the seller accepted a higher offer from another buyer and refused to close, the original buyer sued for specific performance based on default by seller.',
  },
  'liquidated damages': {
    definition: 'A contractually specified sum agreed in advance to represent damages for default. In Virginia residential contracts, the earnest money typically serves as the seller\'s liquidated damages for buyer default.',
    example: 'The contract specified that the $10,000 EMD was the seller\'s sole remedy as liquidated damages if the buyer defaulted.',
  },
  'specific performance': {
    definition: 'An equitable court remedy ordering a party to perform their contractual obligations. Available in real estate because each parcel of land is unique and money damages may not adequately compensate the injured party.',
    example: 'The buyer sued for specific performance after the seller refused to close, and the court ordered the seller to convey the property at the agreed price.',
  },

  // -- Module 3, Ch3: Listing Agreements --
  'exclusive right to sell': {
    definition: 'The most common listing type in Virginia where the listing broker earns a commission if the property sells during the listing period regardless of who finds the buyer, including if the seller finds them without agent help.',
    example: 'Under the exclusive right to sell agreement, the broker earned the commission even though the seller\'s neighbor approached the seller directly.',
  },
  'exclusive agency': {
    definition: 'A listing agreement giving one broker exclusive marketing rights, but with an exception: if the seller personally finds a buyer without any agent\'s help, no commission is owed.',
    example: 'The seller chose an exclusive agency listing because she wanted the option to sell to her neighbor without paying a commission, while still having professional marketing.',
  },
  'open listing': {
    definition: 'A non-exclusive listing allowing the seller to engage multiple brokers simultaneously. Only the broker who is the procuring cause of the sale earns a commission. If the seller finds the buyer, no commission is owed.',
    example: 'The commercial property seller gave open listings to three brokerages, knowing only the one that actually produced the buyer would earn a commission.',
  },
  'protected buyer list': {
    definition: 'A list of prospective buyers the listing broker introduced to the property during the listing term, used in conjunction with the extender clause to protect the broker\'s commission rights after the listing expires.',
    example: 'The broker provided a protected buyer list of 8 names upon listing expiration. When the seller sold to one of those buyers 45 days later, the commission was still owed.',
  },
  'extender clause': {
    definition: 'A listing agreement provision extending the broker\'s commission rights for a specified period (typically 30-90 days) after the listing expires, covering buyers introduced during the listing term.',
    example: 'The 90-day extender clause meant the broker was owed a commission when the seller sold to a buyer the broker had shown the home to during the listing period.',
  },
  'listing price': {
    definition: 'The price at which a property is offered for sale, typically recommended by the listing agent based on a Comparative Market Analysis but ultimately decided by the seller.',
    example: 'The CMA supported a listing price of $425,000, and the seller agreed to list at that price for the first 30 days.',
  },
  'commission rate': {
    definition: 'The agreed percentage or flat fee the seller pays the listing broker upon closing. Commission rates in Virginia are fully negotiable and not set or capped by law.',
    example: 'The listing agreement specified a 5% commission rate, with the listing broker offering 2.5% to any cooperating buyer\'s broker.',
  },
  'listing term': {
    definition: 'The start and end dates of a listing agreement. Typical residential listings run 90-180 days. The listing automatically expires at the end of the term unless renewed in writing.',
    example: 'The 120-day listing term ran from April 1 through July 29, after which the seller was free to relist with a different broker.',
  },
  'MLS authorization': {
    definition: 'The seller\'s written authorization for the listing broker to enter the property into the Multiple Listing Service. Under NAR\'s Clear Cooperation Policy, listings must be submitted within one business day of public marketing.',
    example: 'The seller signed the MLS authorization, and the broker entered the listing within 24 hours of the first "coming soon" social media post.',
  },
  'showing instructions': {
    definition: 'Directions in the listing agreement specifying how the property may be shown, including lockbox access, appointment requirements, notice periods, and any restrictions on showing times.',
    example: 'The showing instructions required 24-hour advance notice, no showings on Sundays, and that the seller\'s dog be secured before entry.',
  },
  'seller net sheet': {
    definition: 'A document prepared by the listing broker showing the seller\'s estimated proceeds after all closing costs, commissions, outstanding liens, and taxes are deducted from the sale price.',
    example: 'The seller net sheet projected $187,000 in proceeds after paying off the mortgage, commission, grantor\'s tax, and settlement fees.',
  },
  'price reduction authorization': {
    definition: 'A written addendum or authorization signed by the seller allowing the listing broker to reduce the listing price to a specified new amount when market feedback indicates the current price is too high.',
    example: 'After 30 days with minimal showings, the seller signed a price reduction authorization lowering the listing from $425,000 to $409,000.',
  },
  'mutual release': {
    definition: 'A written agreement signed by both parties specifying how earnest money will be distributed and releasing both parties from further claims under the contract. The cleanest resolution to a failed transaction.',
    example: 'Both parties signed a mutual release returning the $10,000 EMD to the buyer and releasing the seller from any further obligations.',
  },
  'cancellation': {
    definition: 'The termination of a contract or listing agreement by mutual agreement before its natural expiration. Should be documented in writing and address commission rights, extender clause status, and marketing material disposition.',
    example: 'The seller and broker agreed to cancel the listing early, with both signing a cancellation agreement that preserved the extender clause for buyers already shown the property.',
  },
  'seller default': {
    definition: 'The seller\'s failure to perform listing agreement obligations, such as refusing to close after a ready, willing, and able buyer has been produced. The broker\'s commission is typically still owed when the seller defaults.',
    example: 'The seller changed their mind about selling after the broker produced a full-price buyer. The broker was entitled to the commission despite the seller\'s default.',
  },
  'death of seller': {
    definition: 'The death of the seller terminates the listing agreement because the estate and heirs were not parties to the contract. The estate may choose to relist with the same or a different broker.',
    example: 'When the seller died unexpectedly, the listing agreement terminated automatically and the executor had to sign a new listing agreement to proceed with the sale.',
  },
  'earned commission': {
    definition: 'Under most Virginia listing agreements, a broker earns the commission when they produce a buyer who is ready, willing, and able to purchase on the seller\'s terms. The right to payment is earned at contract ratification, not at closing.',
    example: 'The broker\'s commission was earned when the buyer signed the contract at full price. The seller\'s later refusal to close did not extinguish the broker\'s right to payment.',
  },

  // -- Module 3, Ch4: Offer & Counteroffer Process --
  'offeror': {
    definition: 'The party who makes an offer. In a standard residential purchase, the buyer is the offeror.',
    example: 'As the offeror, the buyer could revoke the offer at any time before the seller accepted it.',
  },
  'offeree': {
    definition: 'The party who receives an offer. In a standard residential purchase, the seller is the offeree and has three options: accept, counter, or reject.',
    example: 'The offeree (seller) reviewed the buyer\'s offer and decided to submit a counteroffer at a higher price.',
  },
  'submission': {
    definition: 'The delivery of a written offer from the buyer\'s agent to the listing agent, typically via email, electronic platform, or in-person delivery.',
    example: 'The buyer\'s agent completed submission of the offer by emailing the signed contract to the listing agent at 3:00 PM.',
  },
  'multiple offers': {
    definition: 'A situation where a seller receives two or more written offers on the same property. The seller has complete flexibility to accept, counter, or reject any offer, and may request "highest and best" submissions.',
    example: 'Three offers arrived within 24 hours, so the listing agent notified all buyers of the multiple offer situation and set a "highest and best" deadline.',
  },
  'presentation obligation': {
    definition: 'The listing agent\'s regulatory duty to present all written offers to the seller promptly, regardless of the agent\'s personal opinion about the offer\'s merits. The agent cannot pre-screen or delay offers.',
    example: 'Even though the offer was $50,000 below asking, the listing agent was required to present it to the seller per VREB presentation obligation rules.',
  },
  'seller decision': {
    definition: 'The seller\'s authority to accept, counter, or reject any offer received. The listing agent advises but the seller makes all final decisions regarding offer acceptance.',
    example: 'Despite the agent\'s recommendation to counter, the seller decided to accept the offer as written, exercising their right of seller decision.',
  },
  'counteroffer': {
    definition: 'A response to an offer that changes one or more terms. Under the mirror image rule, a counteroffer voids the original offer and creates a new offer that the other party can accept, counter, or reject.',
    example: 'The seller countered at $410,000 instead of the offered $395,000. The buyer\'s original offer was now void and could not later be accepted by the seller.',
  },
  'rejection': {
    definition: 'A seller\'s outright refusal of a buyer\'s offer, terminating the offer entirely. The seller has no obligation to explain the rejection or make a counteroffer.',
    example: 'The seller rejected the lowball offer without discussion. The offer was dead and the buyer would need to submit a new one.',
  },
  'mirror image rule': {
    definition: 'The contract law principle requiring acceptance to be an exact match of the offer\'s terms. Any change, even to a non-material term, creates a counteroffer rather than an acceptance.',
    example: 'The seller accepted the $400,000 price but changed the closing date. Under the mirror image rule, this was a counteroffer, not an acceptance.',
  },
  'expiration of offer': {
    definition: 'The automatic termination of an offer when the stated deadline passes without acceptance. After expiration, the offer cannot be accepted and the offeror is under no obligation.',
    example: 'The offer expired at 5:00 PM on Friday. The seller\'s attempted acceptance at 5:15 PM was ineffective because the offer had already terminated.',
  },
  'death of offer': {
    definition: 'The automatic termination of an offer without action by either party, occurring upon expiration of the deadline, death or incapacity of the offeror, rejection, counteroffer, or destruction of the property.',
    example: 'When the offeror died before the seller could accept, the offer terminated automatically by operation of law.',
  },
  'highest and best': {
    definition: 'A request by the seller (through the listing agent) for all competing buyers to submit their strongest offers by a specified deadline in a multiple offer situation.',
    example: 'The listing agent notified all five buyers that the seller was requesting "highest and best" offers by noon on Saturday.',
  },
  'escalation clause': {
    definition: 'A buyer\'s offer provision that automatically increases the purchase price by a specified amount above any competing offer, up to a stated maximum. Requires the seller to provide proof of the competing offer.',
    example: 'The buyer offered $400,000 with an escalation clause of $2,500 above any competing offer, up to a maximum of $425,000.',
  },
  'offer deadline': {
    definition: 'A date and time set by the listing agent (with seller authorization) by which all offers or "highest and best" submissions must be received in a multiple offer situation.',
    example: 'The listing agent set an offer deadline of Saturday at noon, giving all interested buyers 48 hours to submit their best offers.',
  },
  'disclosure of offers': {
    definition: 'The listing agent\'s communication regarding whether multiple offers exist. The agent may disclose the existence of other offers but generally should not reveal specific terms without seller authorization.',
    example: 'The listing agent disclosed that multiple offers were present but declined to share any competing offer amounts, as the seller had not authorized that disclosure.',
  },
  'ethics in multiple offers': {
    definition: 'The NAR Code of Ethics and VREB standards governing fair treatment of all buyers in multiple offer situations, including prohibitions against disclosing competing terms without authorization and against discriminatory offer selection.',
    example: 'The listing agent ensured all buyers received the same "highest and best" deadline and that the seller selected an offer based on price and terms, not the buyers\' protected class characteristics.',
  },

  // -- Module 3, Ch5: Contract Termination & Breach --
  'material breach': {
    definition: 'A breach so fundamental that it defeats the purpose of the contract, entitling the non-breaching party to terminate, seek damages, or pursue specific performance.',
    example: 'The buyer\'s refusal to close without any valid contingency excuse was a material breach that entitled the seller to retain the earnest money.',
  },
  'minor breach': {
    definition: 'A failure to perform a non-essential term that does not defeat the contract\'s overall purpose. The non-breaching party must still perform but can sue for damages equal to the harm caused.',
    example: 'The seller left behind some debris in the garage, a minor breach. The buyer closed the sale and deducted the cleanup cost from the proceeds.',
  },
  'compensatory damages': {
    definition: 'Monetary damages awarded to compensate the non-breaching party for actual losses suffered as a result of the breach, including carrying costs, price differences, and transaction expenses.',
    example: 'After the buyer defaulted, the seller recovered compensatory damages covering 3 months of mortgage payments and the $15,000 difference between the contract price and the eventual sale price.',
  },
  'rescission': {
    definition: 'The cancellation of a contract restoring both parties to their pre-contract position. Available when both parties agree, or when one party has the right to cancel due to fraud, misrepresentation, or failure of a condition precedent.',
    example: 'When the seller\'s fraud was discovered before closing, the buyer obtained rescission, and the earnest money was returned in full.',
  },
  'termination addendum': {
    definition: 'A written form signed by both buyer and seller documenting the termination of a ratified contract, stating the basis for termination, the disposition of earnest money, and releasing both parties from further claims.',
    example: 'After the buyer exercised the financing contingency, both parties signed a termination addendum directing the escrow holder to return the EMD to the buyer.',
  },
  'contingency cancellation': {
    definition: 'The proper exercise of a contract contingency by providing written notice before the deadline, terminating the contract and entitling the buyer to a refund of the earnest money.',
    example: 'The buyer provided written notice of loan denial two days before the financing contingency deadline, properly exercising the contingency cancellation.',
  },
  'earnest money disposition': {
    definition: 'The agreed-upon distribution of earnest money funds when a transaction fails, documented in a mutual release or termination addendum signed by both parties.',
    example: 'The termination addendum specified earnest money disposition: $8,000 returned to the buyer and $2,000 retained by the seller as an agreed compromise.',
  },
  'broker release': {
    definition: 'Authorization from both parties allowing the escrow-holding broker to disburse earnest money. Without a signed broker release or court order, the broker must hold disputed funds.',
    example: 'The broker could not return the EMD until both parties signed the broker release form authorizing disbursement to the buyer.',
  },
  'dispute resolution': {
    definition: 'The process for resolving disagreements over earnest money or contract terms, including mutual release, VREB-approved mediation or arbitration, or court proceedings including interpleader.',
    example: 'When the parties could not agree on EMD distribution, the dispute resolution process began with the broker notifying both sides in writing.',
  },
  'assignment': {
    definition: 'The transfer of one party\'s contractual rights to a third party (the assignee). The original party (assignor) typically remains liable unless specifically released by the other contracting party.',
    example: 'The investor assigned his purchase contract to an LLC he controlled, but remained personally liable on the contract unless the seller agreed to release him.',
  },
  'novation': {
    definition: 'The substitution of a new party for an original party with the consent of all parties, completely releasing the original party from all obligations. Unlike assignment, novation extinguishes the original obligation entirely.',
    example: 'The lender agreed to a novation, releasing the original borrower from the mortgage note when the new buyer assumed the loan with full qualification.',
  },
  'assignee': {
    definition: 'The third party who receives contractual rights through an assignment. The assignee becomes primarily responsible for performing the contract obligations.',
    example: 'The assignee (the investor\'s LLC) took over the purchase contract and closed on the property in the LLC\'s name.',
  },
  'obligor': {
    definition: 'The party in a contract who owes a duty or obligation. In an assignment context, the obligor is the party whose performance is owed to the assignee.',
    example: 'After the assignment, the seller remained the obligor with the duty to convey clear title to whoever held the contract rights.',
  },
  'assignability clause': {
    definition: 'A contract provision addressing whether and how a party may assign their rights to a third party. May require written consent, allow free assignment, or prohibit assignment entirely.',
    example: 'The purchase agreement stated "this contract may not be assigned without seller\'s written consent," preventing the buyer from flipping the contract to another investor.',
  },
  'due-on-sale clause': {
    definition: 'A mortgage provision requiring the full loan balance to be paid when the property is sold. Prevents unauthorized loan assumptions. Also called an alienation clause. FHA and VA loans may be assumable with lender approval.',
    example: 'When the property sold, the due-on-sale clause required the seller to pay off the existing mortgage in full rather than letting the buyer assume it.',
  },
}

// Merge all module terms
import { MOD78_TERMS } from './course-terms-mod78'
import { MOD910_TERMS } from './course-terms-mod910'
import { MOD1112_TERMS } from './course-terms-mod1112'

export const COURSE_TERMS: Record<string, TermDefinition> = {
  ...BASE_TERMS,
  ...MOD456_TERMS,
  ...MOD78_TERMS,
  ...MOD910_TERMS,
  ...MOD1112_TERMS,
}
