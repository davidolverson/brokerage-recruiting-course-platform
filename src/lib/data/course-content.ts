// ── Types ────────────────────────────────────────────────────────────────────

export interface InteractiveElement {
  type: 'drag_drop' | 'flashcard' | 'scenario' | 'mini_quiz' | 'calculator'
  prompt: string
}

export interface CourseLesson {
  slug: string
  title: string
  content: string
  lessonType: 'reading' | 'interactive' | 'scenario'
  estimatedMinutes: number
  keyTerms: string[]
  interactiveElements: InteractiveElement[]
}

export interface CourseChapter {
  slug: string
  title: string
  lessons: CourseLesson[]
}

export interface CourseModule {
  slug: string
  title: string
  subtitle: string
  examWeight: string
  chapters: CourseChapter[]
}

// ── Module 1: Virginia Real Estate Law & Regulations ─────────────────────────

const module1: CourseModule = {
  slug: 'virginia-real-estate-law',
  title: 'Virginia Real Estate Law & Regulations',
  subtitle: 'State-specific law, agency, fair housing, and ethics',
  examWeight: '30% of VA state exam',
  chapters: [
    {
      slug: 'virginia-license-law-dpor',
      title: 'Virginia License Law & DPOR',
      lessons: [
        {
          slug: 'dpor-overview-licensing-requirements',
          title: 'DPOR Overview & Licensing Requirements',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'DPOR',
            'VREB',
            'salesperson license',
            'broker license',
            'principal broker',
            'supervising broker',
            'reciprocity',
            'license by endorsement',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Match each DPOR license type to its requirements and responsibilities',
            },
            {
              type: 'mini_quiz',
              prompt: 'Test your knowledge of Virginia licensing requirements',
            },
          ],
          content: `## Virginia Department of Professional and Occupational Regulation (DPOR)

The Virginia Department of Professional and Occupational Regulation is the state agency responsible for licensing real estate professionals in Virginia. Within DPOR, the **Virginia Real Estate Board (VREB)** is the specific regulatory body that sets licensing standards, investigates complaints, and imposes discipline on licensees.

You need to understand the DPOR/VREB structure for your exam and your career. VREB has the authority to suspend or revoke your license, impose fines up to $5,000 per violation, and require additional education.

### The Two License Types

Virginia issues two primary individual real estate licenses:

**Salesperson License**
A salesperson (commonly called an "agent") must work under the supervision of a licensed broker at all times. You cannot independently represent clients, hold escrow funds in your own account, or operate as a real estate business without broker affiliation. The initial requirements are:
- Complete 60 hours of pre-license education from a DPOR-approved school
- Pass the Virginia Real Estate Salesperson Exam (national + state portions)
- Submit a license application within 12 months of passing the exam
- Be at least 18 years old
- Hold a high school diploma or equivalent
- Pass a background check (criminal history does not automatically disqualify you, but material misrepresentations on the application will)

**Broker License**
A broker operates independently and can supervise salespersons. Virginia recognizes two broker designations:

- *Principal Broker*: The broker who is ultimately responsible for the brokerage. Every real estate firm must designate one principal broker. This person is responsible for the actions of all licensees affiliated with the firm.
- *Supervising Broker*: A broker designated by the principal broker to supervise one or more branch offices or a group of salespersons.

To obtain a broker license, you must:
- Hold an active salesperson license for at least 36 of the preceding 48 months
- Complete 180 hours of broker pre-license education (at least 45 hours in real estate brokerage management)
- Pass the Virginia Real Estate Broker Exam

### Reciprocity and License by Endorsement

Virginia has reciprocal agreements with several states, allowing out-of-state licensees to obtain a Virginia license more easily. As of current regulations, Virginia offers **license by endorsement** (not full reciprocity) to licensees from states that have substantially similar licensing requirements.

Under license by endorsement:
- You must hold a current, active license in good standing in another state
- You must pass the Virginia state portion of the exam (national portion may be waived)
- You must meet Virginia's education requirements or demonstrate equivalent education from your home state
- You must comply with all Virginia application requirements

**Key distinction for the exam**: Reciprocity means mutual recognition — Virginia has endorsement agreements, not true reciprocity with most states. The distinction matters because endorsement still requires passing the state-specific exam portion.

### License Status Types

VREB recognizes several license statuses that you must understand:

| Status | Description |
|--------|-------------|
| **Active** | Currently affiliated with a broker, authorized to practice |
| **Inactive** | Not currently affiliated with a broker; cannot practice but license remains valid |
| **Expired** | License not renewed by the expiration date |
| **Suspended** | Temporarily prohibited from practicing by VREB action |
| **Revoked** | Permanently canceled by VREB action |

An inactive licensee cannot engage in any activity that requires a license. You cannot assist buyers or sellers, show property, hold yourself out as an agent, or receive compensation for real estate services. The moment you leave a broker, your license goes inactive automatically.

### License Renewal Requirements

Virginia salesperson licenses are renewed on a **two-year cycle**. To renew:
- Complete 16 hours of continuing education (CE) every two years
- At least 3 of those 16 hours must be the VREB-mandated course on agency, ethics, fair housing, and related topics
- Submit renewal application and fee before the expiration date

**Post-License Education**: New salespersons must also complete 30 hours of post-license education within their first license year. This is separate from and in addition to CE requirements. Failing to complete post-license education results in an inactive license, not an expired one — a nuance tested frequently on the exam.

### Changes That Must Be Reported to VREB

Licensees must notify VREB within **30 days** of:
- A change of broker affiliation
- A change of name or home address
- A criminal conviction or guilty plea to any felony or misdemeanor involving moral turpitude

Failure to report these changes is itself a violation subject to disciplinary action.`,
        },
        {
          slug: 'dpor-disciplinary-actions-penalties',
          title: 'Disciplinary Actions & Penalties',
          lessonType: 'scenario',
          estimatedMinutes: 30,
          keyTerms: [
            'revocation',
            'suspension',
            'censure',
            'monetary penalty',
            'consent order',
            'informal conference',
            'formal hearing',
            'respondent',
            'complainant',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'Agent Alex receives an earnest money deposit and deposits it into his personal account for two days before forwarding it to the broker. Walk through the disciplinary process and likely outcome.',
            },
            {
              type: 'drag_drop',
              prompt: 'Match each violation type to its likely disciplinary range (censure, fine, suspension, revocation)',
            },
          ],
          content: `## VREB Disciplinary Actions and the Enforcement Process

When a complaint is filed against a Virginia licensee, VREB follows a structured process. Understanding that process — and the range of penalties available — is critical both for your exam and for protecting your license throughout your career.

### How Complaints Are Filed

Anyone can file a complaint against a licensee with DPOR: clients, other agents, brokers, or members of the public. Complaints are submitted in writing to DPOR's Enforcement Division. DPOR staff conduct an initial review to determine whether the complaint alleges a violation that falls within VREB's jurisdiction.

Matters that VREB can investigate include:
- Violations of the Virginia Real Estate Regulations (18 VAC 135-20)
- Violations of the Code of Virginia § 54.1-2100 through 54.1-2135 (the Virginia Real Estate License Law)
- Misrepresentation or fraud in a transaction
- Conversion of client funds
- Practice without a license
- Failure to disclose material facts

Matters outside VREB's jurisdiction (contract disputes, commission disagreements between brokers) are referred to courts or arbitration.

### The Disciplinary Process

**Stage 1 — Preliminary Investigation**
DPOR investigators review the complaint, gather documents, and may interview witnesses. The respondent (the licensee) receives notice and has the right to respond in writing.

**Stage 2 — Informal Fact-Finding Conference (IFF)**
If investigation reveals a possible violation, DPOR may schedule an IFF. This is an administrative meeting — not a formal hearing — where both parties present information. Many cases are resolved at this stage through a **consent order**: the licensee admits to the violation (or agrees not to contest it) and accepts the proposed penalty. A consent order is a binding settlement.

**Stage 3 — Formal Hearing**
If the case is not resolved at the IFF stage, it proceeds to a formal hearing before the full VREB board. The licensee has the right to:
- Be represented by an attorney
- Present evidence
- Cross-examine witnesses
- Appeal the final decision to the circuit court

### Range of Disciplinary Actions

VREB has a graduated range of sanctions. From least severe to most severe:

1. **Reprimand (Censure)**: A formal, written warning placed in the licensee's record. No practice restrictions.
2. **Monetary Penalty**: Up to **$5,000 per violation**. Can be imposed alone or in combination with other sanctions.
3. **Probation**: License remains active but under conditions (additional education, supervision, regular reporting to VREB).
4. **Suspension**: License is temporarily inactive. The licensee cannot practice for the duration of the suspension.
5. **Revocation**: License is permanently canceled. The individual may apply for reinstatement after a waiting period, but reinstatement is not guaranteed.

**License Surrender**: A licensee under investigation may surrender their license. VREB may accept or reject the surrender. If accepted, it is treated similarly to revocation for purposes of future reinstatement.

### Common Violations and Typical Outcomes

| Violation | Typical Range |
|-----------|--------------|
| Failure to disclose material defect | Fine + CE requirement |
| Mishandling escrow funds (minor, first offense) | Suspension + fine |
| Conversion of client funds | Revocation |
| Practicing without a license | Fine up to $5,000 per occurrence |
| Misrepresentation on license application | Revocation or denial |
| Failure to report criminal conviction | Fine |
| Discrimination (Fair Housing violation) | Fine + mandatory training; referral to HUD/DOJ |

### Reinstatement After Revocation

A person whose license has been revoked may apply for reinstatement, but VREB has full discretion to deny the application. Factors considered include the nature of the original violation, time elapsed, evidence of rehabilitation, and restitution to harmed parties.

**Exam-critical point**: A revoked license does not automatically convert to inactive status — it is canceled. The former licensee has no ability to practice in any capacity until reinstatement is granted.

### Criminal Convictions and Licensing

A criminal conviction does not automatically bar someone from obtaining or holding a Virginia real estate license, but VREB must be notified. VREB evaluates each case individually, considering:
- Nature and severity of the crime
- Relationship of the crime to real estate practice
- Time elapsed since conviction
- Evidence of rehabilitation

Crimes involving fraud, misrepresentation, or dishonesty in financial matters are taken most seriously because they directly implicate the trustworthiness required of a licensee.`,
        },
        {
          slug: 'brokerage-operations-supervision',
          title: 'Brokerage Operations & Supervision Requirements',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'sole proprietorship',
            'branch office',
            'trade name',
            'affiliated licensee',
            'independent contractor',
            'employee',
            'property management',
            'escrow account',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Key brokerage structure terms and their regulatory requirements',
            },
            {
              type: 'mini_quiz',
              prompt: 'Brokerage operations quiz: supervision, accounts, and trade names',
            },
          ],
          content: `## Brokerage Operations Under Virginia Law

Every real estate transaction in Virginia flows through a licensed brokerage. Understanding how brokerages must be structured — and the supervision obligations imposed on brokers — directly impacts how agents must operate day-to-day.

### Brokerage Entity Types

A real estate brokerage in Virginia can be organized as:
- Sole proprietorship (the broker is the business)
- Partnership
- Corporation
- Limited Liability Company (LLC)

Regardless of entity type, the brokerage must obtain a **firm license** from VREB if it will conduct real estate business under a name other than the principal broker's own legal name. The firm license is separate from the individual broker's license.

### Trade Names

A brokerage that operates under a trade name (e.g., "Blue Ridge Realty" rather than "John Smith, Broker") must:
- Register the trade name with VREB
- Register the trade name with the Virginia State Corporation Commission (SCC) if it is not the individual's legal name
- Display the licensed name conspicuously in all advertising

**Advertising requirement**: Every advertisement by an affiliated licensee must include the brokerage's licensed name. Using only the agent's name — without identifying the brokerage — violates Virginia regulations. This applies to social media, yard signs, websites, and print ads alike.

### Branch Offices

If a brokerage operates from more than one physical location, each additional location is a **branch office** and requires its own branch office license. Each branch office must have a designated **supervising broker** who is responsible for the activities at that location.

The principal broker is ultimately responsible for all branch offices and all affiliated licensees, even those working from branches supervised by others.

### Independent Contractor vs. Employee Status

Most Virginia real estate agents are classified as **independent contractors** for tax purposes, not employees. This has important implications:
- The brokerage does not withhold federal income tax or FICA from agent compensation
- The agent is responsible for their own self-employment taxes and quarterly estimated payments
- The independent contractor relationship must be documented in a written agreement between broker and agent

**Critical exam point**: Independent contractor status for *tax purposes* does not limit the broker's supervisory authority under *real estate law*. A broker is legally responsible for the professional conduct of all affiliated licensees regardless of how they are classified for IRS purposes. A broker cannot escape discipline by claiming an agent was "just an independent contractor."

### Supervision Requirements

The principal broker must establish written policies and procedures for the firm covering:
- Handling of client funds
- Advertising standards
- Transaction document retention
- Supervision of salespersons

The broker must provide **reasonable supervision** — which means not just having policies on paper, but actively monitoring that affiliated licensees are following them. "I didn't know what my agent was doing" is not a complete defense; inadequate supervision is itself a violation.

### Escrow and Trust Accounts

When a brokerage handles client funds (earnest money deposits, security deposits, property management funds), those funds must be held in a dedicated **escrow account** (also called a trust account), not commingled with the brokerage's operating funds.

Key rules:
- The account must be in a federally insured institution
- The account must be labeled as an escrow/trust account
- The broker is personally liable for all funds in the account
- Records must be maintained for at least **3 years**
- Earned fees may not remain in the escrow account after they are earned; they must be disbursed promptly

**Commingling**: Mixing client funds with the broker's own operating or personal funds. A serious violation that often leads to suspension or revocation.

**Conversion**: Using client funds for the broker's own purposes. Even "borrowing" and returning client funds constitutes conversion. This is among the most serious violations a licensee can commit and almost always results in revocation.

### Property Management Requirements

Brokers managing property for owners must have a written **property management agreement** with each owner. When managing rental properties, the broker must:
- Hold security deposits in a separate escrow account
- Comply with the Virginia Residential Landlord and Tenant Act (VRLTA)
- Provide owners with regular accounting
- Maintain separate records for each managed property`,
        },
        {
          slug: 'license-exemptions-exceptions',
          title: 'License Exemptions & Exceptions',
          lessonType: 'interactive',
          estimatedMinutes: 16,
          keyTerms: [
            'exemption',
            'power of attorney',
            'trustee',
            'fiduciary',
            'salaried employee',
            'owner exemption',
            'on-site manager',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt: 'Sort each scenario into "License Required" or "License Exempt" columns based on Virginia law',
            },
            {
              type: 'mini_quiz',
              prompt: 'License exemption scenarios — does this person need a license?',
            },
          ],
          content: `## Who Does Not Need a Virginia Real Estate License

The Virginia Real Estate License Law (§ 54.1-2103) specifies activities that require a license — but the law also carves out explicit exemptions. Knowing who is exempt is just as testable as knowing who must be licensed.

### Activities That Always Require a License

Any person who, for compensation or in expectation of compensation, does any of the following for another person must hold a Virginia real estate license:
- Sells, lists, or offers to sell real estate
- Purchases, or offers to purchase, real estate
- Leases or offers to lease real estate
- Negotiates the sale, purchase, or lease of real estate
- Assists or directs in the procuring of prospects for the sale, purchase, or lease of real estate
- Manages property on behalf of another

The key phrase is **"for another"** combined with **compensation**. Both elements typically must be present.

### Statutory Exemptions

**1. Property Owners Selling Their Own Property**
An owner selling, leasing, or managing their own real estate does not need a license, even if they receive compensation (their own sale proceeds). This exemption covers individuals, corporations, LLCs, and trusts acting through their officers or authorized agents for property they own.

**2. Attorneys Acting Under a Power of Attorney**
A person holding a valid power of attorney from a property owner can negotiate and execute real estate transactions on behalf of that owner without a real estate license. The attorney-in-fact is acting as the owner's agent under a separate legal framework.

**3. Attorneys-at-Law**
Licensed Virginia attorneys acting in their professional capacity (not as real estate agents) may conduct real estate transactions for clients as part of their legal representation without needing a separate real estate license.

**4. Court-Appointed Fiduciaries**
Trustees, receivers, executors, administrators, and guardians acting under court authority or will provisions may sell or manage real estate without a license when acting in that fiduciary capacity.

**5. Salaried Employees of Owners**
An employee who is paid a salary (not commission) by a property owner to manage or lease that owner's property is exempt. Note the word "salaried" — if any compensation is tied to transaction outcomes (commission, bonus per deal), the exemption likely does not apply.

**6. On-Site Residential Property Managers**
An individual who manages a residential apartment complex where they also reside is exempt from licensing if they do not receive any compensation beyond free or discounted rent, and if they are employed by the owner.

**7. Certain Manufactured Home Dealers**
Dealers selling manufactured homes on their own lots under specific statutory authority have a separate licensing scheme and are not covered by the real estate license law for those transactions.

### Practical Application for the Exam

Exam questions often present scenarios designed to test whether you recognize the exemption:

*"Susan owns 12 rental properties through her LLC. She pays John, who lives in one of the complexes, a monthly salary to handle leasing and tenant issues at that property. Does John need a real estate license?"*

Analysis: John is a salaried employee of the owner, managing the owner's property. He qualifies for the salaried employee exemption if he receives no transaction-based compensation. **No license required.**

*"David acts as his elderly mother's agent under a durable power of attorney and negotiates the sale of her home. Does he need a license?"*

Analysis: David is acting under a power of attorney for a family member. **No license required** — he falls within the attorney-in-fact exemption.

*"Maria handles leasing for a 50-unit complex. She receives a base salary plus a $100 bonus for each lease she signs. Does she need a license?"*

Analysis: The bonus creates transaction-based compensation. Maria does not fit the salaried employee exemption cleanly. **License likely required.** This is the type of gray area VREB takes seriously.`,
        },
      ],
    },
    {
      slug: 'agency-relationships',
      title: 'Agency Relationships',
      lessons: [
        {
          slug: 'agency-fundamentals-fiduciary-duties',
          title: 'Agency Fundamentals & Fiduciary Duties',
          lessonType: 'reading',
          estimatedMinutes: 26,
          keyTerms: [
            'principal',
            'agent',
            'fiduciary',
            'loyalty',
            'confidentiality',
            'disclosure',
            'obedience',
            'reasonable care',
            'accounting',
            'creation of agency',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'The six fiduciary duties — definition and real-world examples for each',
            },
            {
              type: 'scenario',
              prompt: 'Agent Maria learns her buyer-client\'s maximum budget. The seller asks directly what the buyer would pay. What are Maria\'s duties here?',
            },
          ],
          content: `## Agency Fundamentals and Fiduciary Duties in Virginia

Agency is the legal relationship in which one person (the **agent**) is authorized to act on behalf of another (the **principal** or **client**). In real estate, agency defines who you legally represent and what duties you owe them. Mishandling agency is a common reason agents face disciplinary action and lawsuits.

### What Creates an Agency Relationship

Agency can be created in four ways:

1. **Express agreement**: Written or oral agreement stating that an agent will represent a principal. A listing agreement or buyer representation agreement is the most common form.
2. **Implied agency**: Arises from conduct — not words. If you consistently act like you are representing someone without a formal agreement, courts and VREB may find an implied agency relationship exists.
3. **Ratification**: A principal approves or confirms an unauthorized act after the fact, creating agency retroactively.
4. **Estoppel**: When a principal's words or actions lead a third party to reasonably believe an agency relationship exists, the principal may be estopped (prevented) from denying it.

**Virginia-specific requirement**: Under Virginia law (§ 54.1-2130 et seq.), the type of agency relationship must be disclosed to clients in writing. The **Disclosure of Brokerage Relationship** form must be provided to clients and prospects at the first substantive meeting.

### The Fiduciary Duties

When you are a client's agent, you owe them **fiduciary duties** — the highest duty of loyalty recognized in law. The traditional mnemonic is **OLDCAR** (some versions are COALD or similar):

**Obedience**
You must follow your client's lawful instructions, even if you personally disagree with their decisions. A seller tells you not to show the property on Sundays — you obey that instruction. The limit: you cannot follow instructions that require you to do something illegal (like violating Fair Housing laws).

**Loyalty**
You must place your client's interests above all others — including your own. This means no self-dealing, no accepting undisclosed compensation from other parties, and no recommending a purchase or sale that benefits you at the client's expense.

**Disclosure**
You must proactively disclose to your client all information that is material to the transaction and that a reasonable person would want to know. This includes facts that reduce the property's value, potential conflicts of interest, and information about other parties that affects negotiating position.

**Confidentiality**
Information your client shares in confidence must be kept confidential — *even after the agency relationship ends*. A seller who told you their bottom line in 2023 during a listing that expired — you still cannot share that information with a buyer in 2025.

**Accounting**
You must account for all money and property received on behalf of a client. Every dollar of earnest money, rental deposits, and funds handled must be tracked and reported.

**Reasonable Care**
You must perform your duties with the skill and competence expected of a licensed real estate professional. "I didn't know" is not an excuse for things a competent agent should know.

### The Duty of Disclosure in Depth

Disclosure is the trickiest fiduciary duty because it intersects with the duty of confidentiality when you are in a dual agency situation. As a seller's agent:
- You must disclose to your seller: any information about the buyer's financial condition that might affect their ability to close; any known interest from other buyers; any material facts about the property you discover.
- You must NOT disclose to the buyer (without seller permission): the seller's bottom line, motivation for selling, or financial distress.

As a buyer's agent:
- You must disclose to your buyer: all known material defects; comparative market data showing the property may be overpriced; any relationship you have with the seller or seller's broker.
- You must NOT disclose to the seller: the buyer's maximum offer capacity, personal motivation, or financial urgency.

### Subagency

Virginia law still recognizes **subagency**, where the listing broker's cooperating broker (the buyer's side broker in a transaction) acts as a subagent of the seller rather than a representative of the buyer. Subagency is rare in modern practice but still tested.

Under a subagency arrangement, the cooperating broker owes fiduciary duties to the *seller*, not the buyer — even though the cooperating broker is working with the buyer. This is why the shift to buyer's agency representation became so important for consumer protection.`,
        },
        {
          slug: 'types-of-agency-virginia',
          title: 'Types of Agency in Virginia Transactions',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: [
            "seller's agency",
            "buyer's agency",
            'dual agency',
            'designated agency',
            'disclosed dual agent',
            'limited service agent',
            'independent contractor status',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt: 'Assign the correct agency type to each transaction scenario',
            },
            {
              type: 'scenario',
              prompt: 'Two agents at the same brokerage — one represents the buyer, one the seller. What agency type applies and what are the broker\'s obligations?',
            },
          ],
          content: `## Types of Agency Relationships Under Virginia Law

Virginia's Residential Property Disclosure Act and agency statutes recognize several distinct types of agency relationships. Each carries different duties and disclosure requirements. The exam tests your ability to identify which type applies in a given scenario.

### Seller's Agency (Listing Agency)

The most traditional form. The listing broker and all affiliated agents represent the *seller*. Fiduciary duties run exclusively to the seller. Any buyer working with the listing agent should receive written disclosure that the agent represents the seller — the agent can still provide services to the buyer (showing the property, answering questions about the area), but the buyer is a *customer*, not a *client*, and does not receive fiduciary protection.

**Duties to seller/client**: All six fiduciary duties
**Duties to buyer/customer**: Honest dealing, disclosure of material facts about the property, no misrepresentation

### Buyer's Agency

The buyer's broker represents the buyer exclusively. In Virginia, buyer representation must be memorialized in a written **buyer representation agreement** to clearly establish the relationship. Without a written agreement, the agency relationship may be implied, which creates ambiguity.

As a buyer's agent, your fiduciary duties run to the buyer. You must negotiate aggressively for the buyer's interests, provide the buyer with all available market information, and keep the buyer's motivation and financial capacity confidential from the seller.

**Compensation note**: Under the NAR settlement changes effective 2024-2025, buyer's agent compensation must be negotiated separately and disclosed. Buyers must execute written representation agreements before touring homes. Virginia's VREB regulations align with these requirements.

### Dual Agency

Dual agency exists when one agent (or one brokerage) represents *both* the buyer and the seller in the same transaction. Virginia allows dual agency only with the **written, informed consent** of both parties.

The fundamental problem with dual agency is that fiduciary duties conflict. You cannot simultaneously maximize the seller's sale price and minimize the buyer's purchase price. Virginia's solution: a disclosed dual agent's duties are **limited**. The dual agent:
- Cannot disclose the seller's bottom line to the buyer
- Cannot disclose the buyer's maximum offer to the seller
- Cannot advise either party on negotiating strategy
- Must still disclose all material facts about the property to both parties
- Must treat both parties honestly

Dual agency requires a separate written consent form signed by both parties. Undisclosed dual agency is a serious violation.

### Designated Agency

Designated agency is Virginia's preferred solution to the dual agency problem within a single brokerage. When a buyer represented by Agent A wants to purchase a property listed by Agent B — and both agents work for the same broker — the broker designates Agent A as the buyer's exclusive representative and Agent B as the seller's exclusive representative.

**Key principle**: In designated agency, each designated agent can provide full fiduciary representation to their respective client, as if they worked for different brokerages. The broker remains a dual agent (knowing both sides), but the individual agents are not.

Designated agency requires:
- Written consent from both parties
- The broker must not share confidential information received from one designated agent with the other
- A "firewall" between the two agents regarding confidential client information

**Exam distinction**: Dual agency = one agent or broker represents both. Designated agency = two different agents at same brokerage each represent one side.

### Limited Service Agent

A limited service agent provides only specific, contractually defined services rather than full representation. Virginia requires a limited service agent to provide written disclosure of exactly which services will and will not be provided. The client must acknowledge in writing that they understand the scope of services is limited.

Common in flat-fee MLS listing arrangements where a broker lists the property on MLS but provides no negotiation assistance, no market analysis, and no transaction coordination.`,
        },
        {
          slug: 'agency-disclosure-requirements',
          title: 'Agency Disclosure Requirements',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'disclosure of brokerage relationship',
            'substantive contact',
            'first contact',
            'written disclosure',
            'acknowledgment',
            'material relationship',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'When must agency disclosure occur? Test your timing knowledge',
            },
            {
              type: 'flashcard',
              prompt: 'What information must be included in a Virginia agency disclosure form?',
            },
          ],
          content: `## Virginia Agency Disclosure Requirements

Virginia Code § 54.1-2138 establishes specific requirements for when and how real estate licensees must disclose their agency status to clients and customers. Failure to comply with disclosure requirements is a violation subject to disciplinary action, and improperly disclosed agency relationships can create legal liability in transactions.

### The Timing Requirement: First Substantive Meeting

A licensee must provide written disclosure of their agency status **at the time of the first substantive discussion** about a specific property or transaction with a buyer or seller who is not already the licensee's client.

**What counts as "substantive"?** Virginia regulations define substantive discussion as a conversation that involves specific real estate needs, financial qualifications, or a specific property. A casual open house conversation is generally not substantive. The moment you start discussing the buyer's budget, needs, or asking specific questions about a particular property — you have crossed into substantive territory and must disclose.

The disclosure must be made **before** any substantive discussion begins, or as soon as practicable if the conversation has already started.

### What the Disclosure Must Include

The Disclosure of Brokerage Relationship form must state:
1. The name of the brokerage and its principal broker
2. Who the licensee represents in the transaction (seller, buyer, both as dual agent, or as a designated agent)
3. The duties owed to the client versus a customer
4. Whether the brokerage has any material relationship with any party to the transaction

**Material relationship**: Virginia regulations require disclosure of any personal, familial, or business relationship between the licensee (or their brokerage) and any party to the transaction that could affect objectivity. This includes:
- Representing a family member
- Representing a business partner
- Having a financial interest in the property
- Having a personal relationship with the other party

### Acknowledgment Requirements

The client or customer must **acknowledge receipt** of the disclosure form. This acknowledgment:
- Can be a signature on the disclosure form itself
- Can be a separate signed acknowledgment document
- Must be retained by the broker for at least **3 years**

If a prospect refuses to sign an acknowledgment, the licensee can proceed but must document the refusal. The refusal to sign does not eliminate the agent's obligation to make the disclosure.

### Open House and First Contact Scenarios

**Open houses** present a common disclosure challenge. When a buyer walks into a listing agent's open house:
- The listing agent represents the seller
- The buyer is a customer (unless they have a buyer's agent)
- Disclosure should occur before any substantive discussion — this can be done through a written disclosure at the door or a brief verbal statement confirmed in writing

**Phone inquiries**: If a buyer calls about a listing and the conversation becomes substantive, the agent must disclose their representation status. Written confirmation should follow.

**Internet inquiries**: When a buyer submits a web form inquiry about a specific property, the first response should include agency disclosure or the agent must provide it at the first live contact.

### Changing Agency Status Mid-Transaction

It is possible (with proper consent) for an agent's status to change during a transaction — most commonly when a listing agent's buyer wants to make an offer on the listed property, shifting the relationship to dual agency. When this occurs:
- Written consent from both parties is required before the status changes
- The prior fiduciary duties (confidentiality of information learned during prior representation) continue
- New limited-duty dual agency disclosure must be signed

The exam sometimes tests whether prior confidential information can be used after a switch to dual agency. The answer is no — information learned in confidence during a prior exclusive representation phase remains confidential.`,
        },
        {
          slug: 'termination-of-agency',
          title: 'Termination of Agency',
          lessonType: 'scenario',
          estimatedMinutes: 16,
          keyTerms: [
            'expiration',
            'completion',
            'mutual agreement',
            'revocation',
            'renunciation',
            'death',
            'destruction of property',
            'operation of law',
            'procuring cause',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A seller fires their listing agent two weeks before closing, then closes with a buyer the agent brought. Is the agent owed a commission? Walk through procuring cause analysis.',
            },
            {
              type: 'mini_quiz',
              prompt: 'Identify whether each scenario constitutes valid termination of agency',
            },
          ],
          content: `## Termination of Agency Relationships

Agency relationships do not last forever. Understanding when and how an agency relationship ends — and what obligations survive termination — is tested repeatedly on the Virginia exam and matters practically in every transaction you handle.

### Methods of Termination

**1. Expiration of Term**
Most listing agreements and buyer representation agreements have a fixed term. When that term expires without renewal, the agency relationship automatically ends. The agent cannot continue to act on behalf of the principal after the term expires.

**2. Completion of Purpose**
When the specific objective of the agency is accomplished, the relationship terminates. A listing agreement ends when the property closes. A buyer representation agreement ends when the buyer purchases a property. There is nothing further for the agent to do.

**3. Mutual Agreement**
Both parties can agree at any time to end the relationship. This is the cleanest termination and should be documented in writing to avoid disputes about what services are owed and whether any compensation has been earned.

**4. Revocation by Principal**
A principal can revoke (fire) their agent at any time, even without cause — but doing so may trigger a compensation obligation if the listing or representation agreement does not include a "no cause termination" clause. The agent's authority ends immediately upon revocation. Any actions taken after revocation are not authorized.

**5. Renunciation by Agent**
An agent can renounce the agency relationship by withdrawing from representation. This is often called "withdrawal" in Virginia forms. An agent who renunciates may still owe the client professional duties for any pending matters and must give reasonable notice.

**6. Death or Incapacity**
The death of either the principal or the agent terminates the agency relationship. The death of the principal's spouse does not terminate agency unless the spouse held an ownership interest in the property that creates complications.

The incapacity (serious illness, mental incapacitation) of either party may also terminate agency, though this depends on whether a power of attorney is in place.

**7. Destruction of Property**
If the subject property is destroyed (by fire, flood, condemnation), the agency relationship related to that specific property terminates, as its purpose is impossible.

**8. Operation of Law**
Circumstances like bankruptcy, expiration of the agent's license, or court order can terminate agency regardless of the parties' intent.

### What Survives Termination

Even after the agency relationship ends, certain obligations persist:

- **Confidentiality**: A former agent cannot disclose confidential information learned during the representation, even years later.
- **Accounting**: Any client funds held must be properly disbursed.
- **Earned compensation**: Compensation that was earned before termination remains owed per the terms of the agreement.

### Procuring Cause and Commission Rights

**Procuring cause** is a legal doctrine that determines which agent is entitled to a commission when an agency relationship ends before closing but the buyer later purchases the property.

An agent is the procuring cause if they were the **proximate and direct cause** of the sale — meaning their efforts set in motion the uninterrupted chain of events that led to the completed transaction.

Factors VREB and courts consider in procuring cause disputes:
- Did the agent introduce the buyer to the property?
- Was there a continuous and uninterrupted series of negotiations?
- Did the original agent's efforts cause the buyer's ultimate decision to purchase?
- Was there a clean break in negotiations, or did the original agent's work directly lead to the sale?

**Example**: Agent A shows a buyer a property in June. The buyer and seller cannot agree on price. Agent A's listing expires. The seller relists with Agent B. The same buyer comes back in September with Agent B and closes. Agent A may have a procuring cause claim if there was no meaningful break in the buyer's intent to purchase that specific property — but this is highly fact-specific and often ends up in arbitration through the local REALTOR association.`,
        },
      ],
    },
    {
      slug: 'fair-housing-laws',
      title: 'Fair Housing Laws',
      lessons: [
        {
          slug: 'federal-fair-housing-act',
          title: 'Federal Fair Housing Act: Protected Classes & Prohibited Acts',
          lessonType: 'reading',
          estimatedMinutes: 26,
          keyTerms: [
            'protected class',
            'race',
            'color',
            'national origin',
            'religion',
            'sex',
            'familial status',
            'disability',
            'steering',
            'blockbusting',
            'redlining',
            'discriminatory advertising',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Seven federal protected classes — name, definition, and amendment year',
            },
            {
              type: 'scenario',
              prompt: 'A landlord tells a family with three kids that "this building tends to be pretty quiet and is better suited for adults." Analyze the Fair Housing implications.',
            },
          ],
          content: `## The Federal Fair Housing Act

The Fair Housing Act of 1968 (Title VIII of the Civil Rights Act of 1968) is the primary federal law prohibiting discrimination in residential real estate transactions. It was landmark legislation passed in the aftermath of the Civil Rights Movement and has been amended multiple times since. You must know its protected classes, prohibited acts, and exemptions inside and out.

### The Seven Federal Protected Classes

The Fair Housing Act prohibits discrimination based on seven characteristics:

1. **Race** — The broadest and most foundational protection. Racial discrimination includes treating someone differently because of their race or the race of people associated with them.

2. **Color** — While often grouped with race, color (skin pigmentation, complexion) is a distinct protected class. A person can face color discrimination from members of their own racial group.

3. **National Origin** — Discrimination based on a person's ancestry, birthplace, culture, or linguistic characteristics associated with a national origin group. This protects immigrants and U.S.-born citizens of foreign descent.

4. **Religion** — Discrimination against someone because of their religious beliefs or practices, or lack of religious belief.

5. **Sex** — Originally interpreted as biological sex. Extended by HUD guidance and court decisions to include sexual harassment, and recent Supreme Court decisions suggest gender identity and sexual orientation may receive protection under this category (though Virginia has enacted separate state protections).

6. **Familial Status** (added by the Fair Housing Amendments Act of 1988) — Protects families with children under age 18, pregnant women, and persons in the process of obtaining custody of a child. **This is heavily tested.** Landlords cannot refuse to rent to families with children, impose stricter security deposit requirements on them, or steer them to certain units or floors.

7. **Disability** (added by the Fair Housing Amendments Act of 1988) — Protects individuals with physical or mental impairments that substantially limit a major life activity, a history of such impairment, or being regarded as having such an impairment.

### Prohibited Acts Under the Fair Housing Act

The FHA prohibits the following discriminatory acts when based on a protected class:

**Refusal to Sell or Rent**: Declining to sell or rent after receiving a legitimate offer, or making housing unavailable to a person because of their protected status.

**Discrimination in Terms and Conditions**: Offering different terms (higher rent, larger deposit, shorter lease) to a person based on protected class.

**Discriminatory Advertising**: Publishing or making any statement that indicates a preference, limitation, or discrimination. This includes stating "perfect for young professionals" (familial status issue), "quiet Christian community" (religion), or using photos that suggest only certain races or nationalities are welcome.

**Steering**: Directing or "guiding" buyers or renters toward or away from certain neighborhoods based on the protected characteristics of the person or of the people in those neighborhoods. Steering is illegal even if the buyer seems to prefer it. Do not make housing decisions for clients based on neighborhood demographics.

**Blockbusting**: Inducing panic selling by representing that a neighborhood's character will change (in terms of race, ethnicity, religion) because of the entry of protected class members. Classic form: "You should sell now before property values drop — a lot of [protected class] families are moving in."

**Redlining**: Refusing to provide services (mortgages, insurance, real estate services) in certain geographic areas based on the racial or ethnic composition of those areas. Named for the literal practice of drawing red lines on maps around "risky" (often minority) neighborhoods.

**Discriminatory Representation**: Falsely representing that a property is not available for inspection, sale, or rental.

### Disability Accommodation Requirements

For people with disabilities, the FHA imposes two additional obligations:

1. **Reasonable Accommodation**: Landlords and housing providers must make reasonable exceptions to rules, policies, practices, or services to give a person with a disability an equal opportunity to use and enjoy the housing. Example: Allowing a tenant to have a service animal in a no-pets building.

2. **Reasonable Modification**: Landlords must allow tenants with disabilities to make reasonable physical modifications to the unit at the tenant's expense. The landlord can require the tenant to restore the unit to its original condition at move-out. Example: Installing grab bars in the bathroom.

"Reasonable" is a contextual standard — it does not include modifications that would cause undue financial hardship or fundamentally alter the nature of the housing.

### Enforcement and Penalties

A person who believes they have been discriminated against has three options:
1. File a complaint with HUD (must file within one year)
2. File a complaint with a state or local fair housing agency
3. File a private lawsuit (must file within two years)

**Penalties under the FHA:**
- First violation: up to $16,000 civil penalty
- Second violation within 5 years: up to $37,500
- Third+ violation within 7 years: up to $65,000
- Unlimited compensatory damages in private lawsuits
- Punitive damages possible in private actions`,
        },
        {
          slug: 'virginia-fair-housing-law',
          title: 'Virginia Fair Housing Law & Additional Protections',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'Virginia Fair Housing Law',
            'source of funds',
            'sexual orientation',
            'gender identity',
            'elderliness',
            'VHDA',
            'Virginia Fair Housing Office',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Virginia-only protected classes — do you know what the state adds beyond federal law?',
            },
            {
              type: 'flashcard',
              prompt: 'Federal vs. Virginia protected classes comparison',
            },
          ],
          content: `## Virginia Fair Housing Law

Virginia's Fair Housing Law (Virginia Code §§ 36-96.1 through 36-96.23) closely mirrors the federal Fair Housing Act but adds several Virginia-specific protected classes and provides an additional enforcement avenue through the state. As a Virginia licensee, you must comply with both federal and state law — and where state law is more protective than federal law, state law governs.

### Virginia's Additional Protected Classes

Virginia extends fair housing protection beyond the seven federal classes to include:

**Elderliness**
Virginia prohibits discrimination based on age (specifically targeting discrimination against older persons). This protection works alongside, not against, the "housing for older persons" exemptions in federal law (see 55+ communities).

**Source of Funds**
This is one of Virginia's most impactful additions and the one most likely to affect your day-to-day practice. Virginia prohibits discrimination based on how a tenant or buyer is paying — including:
- Housing choice vouchers (Section 8)
- Government rental assistance programs
- Social Security income
- VA benefits
- Other lawful sources of income

**Practical impact**: A Virginia landlord cannot refuse to accept Housing Choice Voucher (HCV/Section 8) tenants solely because they use a voucher. The landlord must evaluate HCV applicants using the same criteria applied to other applicants. However, if a property fails HUD's Housing Quality Standards (HQS) inspection required for voucher payment, the landlord is not obligated to make repairs — but they cannot simply refuse to even consider voucher holders.

**Sexual Orientation and Gender Identity**
Virginia explicitly prohibits discrimination based on sexual orientation and gender identity in housing. This protection came through Virginia's legislative expansion and provides clear statutory authority where federal law has been more ambiguous.

**Marital Status**
Virginia prohibits discrimination based on whether a person is married, single, divorced, widowed, or in a domestic partnership.

**Military Status**
Virginia protects current members of the U.S. armed forces, Virginia National Guard, and Virginia Defense Force from housing discrimination based on their military status.

### Virginia Fair Housing Office

Complaints of fair housing violations under Virginia law are handled by the **Virginia Fair Housing Office** within the Department of Housing and Community Development (DHCD). Complainants can file with:
- The Virginia Fair Housing Office (state)
- HUD (federal)
- Private lawsuit in circuit court

Filing with one agency does not necessarily foreclose filing with another, but there are coordination rules to avoid double recovery.

**Statute of limitations for Virginia complaint**: One year from the discriminatory act for filing with the Virginia Fair Housing Office.

### Housing for Older Persons Exemptions

Both federal and Virginia law recognize that some housing communities are specifically designed for older adults. The **Housing for Older Persons Act (HOPA)** creates exemptions from the familial status protected class for:

1. **Communities where all occupants are 62 or older**: These may legally restrict occupancy to persons 62+ only.
2. **55+ Communities**: Communities where at least 80% of units have at least one occupant 55 or older, and the community maintains and follows policies demonstrating an intent to be housing for persons 55 or older. These communities must publish and follow written procedures verifying occupant ages.

**Important**: The exemption only applies to familial status (children under 18). A 55+ community still cannot discriminate based on race, religion, disability, national origin, or any other protected class.

### Common Violations in Virginia Practice

**Section 8 refusals**: With Virginia's source of funds protection, agents and landlords who advise refusing all voucher holders are exposing themselves and their clients to liability. Landlords can still screen voucher applicants on creditworthiness, rental history, and other lawful criteria — they just cannot use the voucher itself as a disqualifier.

**Military clause complications**: Military tenants often negotiate early termination rights into leases under the Servicemembers Civil Relief Act (SCRA). Virginia's military status protection in fair housing adds another layer — landlords cannot refuse to rent to servicemembers because of this clause.

**Online advertising**: Using Facebook's advertising targeting tools to exclude users based on age, race, or other protected characteristics is a fair housing violation even when done online. HUD has issued guidance and enforcement actions specifically targeting algorithmic discrimination in advertising.`,
        },
        {
          slug: 'fair-housing-exemptions-enforcement',
          title: 'Fair Housing Exemptions & Enforcement',
          lessonType: 'interactive',
          estimatedMinutes: 18,
          keyTerms: [
            'single-family exemption',
            'Mrs. Murphy exemption',
            'religious organization exemption',
            'private club exemption',
            'testers',
            'HUD',
            'conciliation',
            'civil penalty',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt: 'Categorize each scenario as "FHA Applies," "Potentially Exempt," or "Exempt" and identify the exemption',
            },
            {
              type: 'scenario',
              prompt: 'A church owns a 4-unit building and only wants to rent to church members. The owner lives in one of the units. Which exemption(s) might apply and what are their conditions?',
            },
          ],
          content: `## Fair Housing Exemptions and Enforcement Mechanisms

The Fair Housing Act, despite its broad reach, contains several statutory exemptions. These exemptions are narrow, have specific conditions that must be met, and do not override state law protections. Virginia's fair housing law has its own exemption structure that may differ from federal exemptions.

### Federal FHA Exemptions

**Single-Family Housing Exemption**
An individual owner of a single-family home may sell or rent that home without a real estate broker without complying with the FHA's non-discrimination requirements — but only when:
1. The owner holds no more than **three such single-family homes** at one time
2. The owner **does not use a broker or agent** (handling it FSBO)
3. The owner does not use discriminatory advertising

**Critical**: The moment a broker or agent is involved, this exemption evaporates entirely. As a licensed agent, you cannot help a client discriminate — even if the client might have a personal exemption without you.

**The "Mrs. Murphy" Exemption (Owner-Occupied Small Rentals)**
Named for a hypothetical elderly widow who rents rooms in her home, this exemption applies to:
- Buildings with **4 or fewer units** where the owner **occupies one of the units**

Under this exemption, the owner may discriminate in renting the remaining units, but cannot use discriminatory advertising (even through HUD's exemption, you cannot use racially biased ads), and cannot use a broker.

**Again**: No agent involvement. If a Mrs. Murphy property owner uses a real estate agent, the exemption is lost.

**Religious Organization Exemption**
Religious organizations may limit occupancy of housing they own or operate to members of their religion, provided the religion does not itself discriminate based on race, color, or national origin in its membership policies.

**Private Club Exemption**
Private clubs providing housing as a benefit of membership may limit that housing to members, provided the club is genuinely private (not open to the public) and is not in the commercial business of providing housing.

### The Role of Broker-Involvement in Exemptions

The single most important rule about FHA exemptions for your exam:

**Any exemption that applies to individual owners disappears the moment a licensed agent or broker is involved in the transaction.**

A FSBO seller with a discriminatory preference cannot hire you to carry out that preference. Your license requires you to comply with fair housing law regardless of what the seller wants. If a seller gives you instructions that would require discriminatory conduct, you must:
1. Refuse the instruction
2. If the seller insists, terminate the listing
3. Document what happened

### Testing and Enforcement

**Testers** are individuals sent by fair housing organizations or government agencies to pose as home seekers and test whether housing providers are complying with the FHA. Testing is legal and widely used. An agent who steers a tester based on race or tells a tester with a disability that no accessible units are available may face enforcement action based solely on the testing evidence.

### The HUD Complaint Process in Detail

**Filing**: A complaint must be filed with HUD within **one year** of the discriminatory act. Complaints can be filed online, by mail, or in person at a HUD office.

**Investigation**: HUD investigates within 100 days unless impractical. Both parties are notified and given the opportunity to present information.

**Conciliation**: HUD attempts to resolve complaints through conciliation (negotiated settlement). A conciliation agreement may include:
- Monetary compensation to the victim
- Injunctive relief (stop the discriminatory practice)
- Training for the respondent
- Monitoring

**Charge or Dismissal**: If conciliation fails and HUD finds reasonable cause, it issues a Charge of Discrimination. Either party may then elect to have the case heard in federal district court (jury trial available) or before an HUD administrative law judge (ALJ).

**ALJ Penalties**:
- First violation: up to $16,000
- Second violation within 5 years: up to $37,500
- Subsequent violations: up to $65,000

**Federal Court** (private lawsuit): Unlimited compensatory damages, punitive damages possible, attorney fees may be awarded.

**VREB Discipline**: A fair housing violation is also a violation of Virginia license law. VREB can impose its own disciplinary action (fine, suspension, revocation) in addition to any federal or state civil penalties.`,
        },
      ],
    },
    {
      slug: 'landlord-tenant-law',
      title: 'Landlord-Tenant Law',
      lessons: [
        {
          slug: 'vrlta-overview-applicability',
          title: 'VRLTA Overview & Applicability',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'VRLTA',
            'Virginia Residential Landlord and Tenant Act',
            'dwelling unit',
            'landlord',
            'tenant',
            'written lease',
            'month-to-month',
            'URLTA',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'VRLTA key definitions and which situations it applies to',
            },
            {
              type: 'mini_quiz',
              prompt: 'Does the VRLTA apply to these rental situations?',
            },
          ],
          content: `## The Virginia Residential Landlord and Tenant Act (VRLTA)

The Virginia Residential Landlord and Tenant Act (Virginia Code §§ 55.1-1200 through 55.1-1262) is the primary statute governing the landlord-tenant relationship in Virginia for residential rental housing. It establishes the rights and obligations of both landlords and tenants and is largely modeled on the Uniform Residential Landlord and Tenant Act (URLTA). As a Virginia real estate professional, particularly if you work in property management or represent rental clients, you need to know the VRLTA well.

### Applicability of the VRLTA

The VRLTA applies to all **residential rental agreements** — written or oral — in Virginia, with limited exceptions.

**The VRLTA covers**:
- Apartments and condominiums leased as residences
- Single-family homes leased as residences
- Mobile homes (in some circumstances)
- Rooming houses and boarding houses
- Any premises used for residential purposes

**The VRLTA does NOT apply to**:
- Occupancy under a contract of sale of a dwelling unit or the property of which it is a part, if the occupant is the purchaser
- Occupancy in a hotel, motel, or similar lodging
- Occupancy by a member of a fraternal or social organization in the portion of a structure operated for the benefit of the organization
- Transient occupancy for no more than 30 days
- Commercial tenancies
- Owner-occupied properties with no more than 2 rental units where the owner has opted out per statute (this must be written into the lease)

### Key Definitions Under the VRLTA

**Landlord**: A person who owns or manages a dwelling unit and who authorizes occupancy of that unit under a rental agreement.

**Tenant**: A person who occupies a dwelling unit under a rental agreement.

**Rental Agreement**: All agreements, written or oral, between a landlord and tenant embodying the terms and conditions concerning the use and occupancy of a dwelling unit and premises.

**Dwelling Unit**: A structure or part of a structure used as a home, residence, or sleeping place by one or more persons who maintain a household.

### Written vs. Oral Leases

The VRLTA applies whether the lease is written or oral. However:
- A rental agreement for one year or more must be in writing under the Virginia Statute of Frauds (§ 11-2)
- Month-to-month oral agreements are valid and are covered by the VRLTA
- If there is no written rental agreement, the VRLTA's default provisions govern the tenancy
- Landlords who use written leases must provide a copy to the tenant within one business day of execution

### The VRLTA's Core Balance

The VRLTA creates a balance of obligations:

**Landlord obligations** (summarized here, detailed in subsequent lessons):
- Maintain the premises in habitable condition
- Comply with building and housing codes
- Make repairs within a reasonable time
- Provide running water, heat, and essential services
- Maintain common areas in clean and safe condition
- Disclose known material facts about the property

**Tenant obligations**:
- Pay rent when due
- Keep the unit clean and safe
- Dispose of garbage properly
- Not damage the property
- Not disturb neighbors
- Allow the landlord reasonable access for inspections and repairs`,
        },
        {
          slug: 'security-deposits-tenant-rights',
          title: 'Security Deposits & Tenant Rights',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: [
            'security deposit',
            'two months rent cap',
            'move-in inspection',
            'move-out inspection',
            'itemized deductions',
            'normal wear and tear',
            'escrow',
            'interest',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt: 'Calculate the maximum allowable security deposit and statutory deadline for return based on monthly rent and move-out date',
            },
            {
              type: 'scenario',
              prompt: 'A landlord charges $3,000 security deposit on a $1,200/month apartment and keeps $1,500 after move-out without an itemized list. What are the tenant\'s remedies?',
            },
          ],
          content: `## Security Deposits Under the VRLTA

Security deposits are among the most contentious areas of residential landlord-tenant law and one of the most heavily tested areas on the Virginia real estate exam. Virginia's rules are specific, and landlords who fail to follow them face significant financial penalties.

### Maximum Security Deposit Amount

Under the VRLTA (§ 55.1-1226), a landlord **may not require a security deposit that exceeds two months' rent**. This is a hard cap — no exceptions, regardless of the tenant's credit history or the landlord's preference.

Example: Monthly rent = $1,400. Maximum security deposit = $2,800.

If a landlord collects a security deposit exceeding two months' rent, the tenant can recover the excess amount plus attorney fees.

### Move-In Inspection Requirements

Before or at the commencement of the tenancy, the landlord must provide the tenant with:
1. A written report of the condition of the dwelling unit
2. An itemized list of existing damages

The tenant has the right to be present during this inspection. The report must be signed by both parties. If the landlord fails to conduct a move-in inspection, they may lose the right to charge the tenant for damages that existed at the time of move-in.

### Holding Security Deposits

A landlord holding a security deposit must:
- Hold the funds in a separate escrow account (not commingled with operating funds)
- The account must be at a federally insured financial institution in Virginia
- Interest accrues on the deposit at a rate set annually by the State Treasurer

Note: The VRLTA was amended to require interest on deposits, though the interest rate is often minimal. The accounting requirement matters more for exam purposes.

### Move-Out Process and Return of Deposit

After a tenant vacates, the landlord must:

1. **Conduct a move-out inspection** — The tenant has the right to be present. The landlord must give the tenant written notice of the date/time of the move-out inspection, and the tenant must be given the opportunity to remedy any deficiencies before vacating.

2. **Return the deposit within 45 days** of the termination date of the lease (or move-out, whichever is later).

3. **If deductions are made**: Provide the tenant with an **itemized written list** of deductions, with the amount for each item, along with the balance of the deposit (if any) or a statement that no deposit will be returned (if deductions exceed the full deposit).

### Normal Wear and Tear vs. Damage

The landlord **cannot** deduct from the security deposit for **normal wear and tear**. This is one of the most common disputes in landlord-tenant law.

**Normal wear and tear includes**:
- Small nail holes from hanging pictures
- Minor scuffs on walls from furniture
- Carpet that has worn from normal foot traffic over a multi-year tenancy
- Paint that has faded from age and sunlight

**Chargeable damage includes**:
- Large holes in walls
- Stains on carpet from spills or pets
- Broken fixtures
- Damage caused by pets
- Unauthorized alterations

### Penalties for Non-Compliance

If the landlord fails to return the deposit within 45 days or fails to provide the required itemized statement:
- The landlord **forfeits the right to retain any portion** of the deposit
- The tenant may recover the entire deposit plus damages equal to the deposit amount (i.e., double the deposit)
- Attorney fees may be awarded

This is a strict liability rule — even if the landlord had legitimate damages to charge, failure to follow the procedural requirements (45-day deadline, itemized list) means they lose the ability to retain any of the deposit.`,
        },
        {
          slug: 'eviction-process-landlord-remedies',
          title: 'Eviction Process & Landlord Remedies',
          lessonType: 'scenario',
          estimatedMinutes: 25,
          keyTerms: [
            'unlawful detainer',
            'pay or quit notice',
            'five-day notice',
            'thirty-day notice',
            'writ of possession',
            'General District Court',
            'self-help eviction',
            'retaliatory eviction',
            'constructive eviction',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A tenant is three weeks late on rent. Walk through every step the landlord must take to legally evict this tenant under the VRLTA, from first notice to writ of possession.',
            },
            {
              type: 'mini_quiz',
              prompt: 'Identify which actions constitute illegal self-help eviction',
            },
          ],
          content: `## The Eviction Process Under the VRLTA

Virginia's eviction process is entirely governed by statute. A landlord who tries to remove a tenant without following every step exposes themselves to civil liability. Understanding this process matters for your exam and for properly advising landlord clients.

### Grounds for Eviction

A landlord may seek to evict a tenant for:
1. **Non-payment of rent**
2. **Violation of lease terms** (unauthorized pets, subletting, property damage)
3. **Criminal activity** on the premises
4. **Breach of tenant duties** under the VRLTA
5. **Expiration of the lease term** (holdover tenancy)

### Step 1: Written Notice

Before filing for eviction, the landlord must provide proper written notice. The notice type and period depend on the grounds:

**For Non-Payment of Rent**:
- **5-Day Pay or Quit Notice**: The landlord serves a written notice giving the tenant 5 days to pay all overdue rent in full or vacate. If the tenant pays within 5 days, the eviction cannot proceed. The tenant has a statutory right to "pay or quit" — they cannot simply be evicted immediately for late rent.
- Note: Virginia law (**§55.1-1250**) provides a tenant redemption right — often called "pay and stay." The tenant may pay all rent due, late fees, and court costs by the first return date to avoid eviction. This right is generally available **once per lease period** where the landlord has 4 or fewer rental units and provided written notice of the restriction.

**For Lease Violations Other Than Non-Payment**:
- **30-Day Notice to Cure or Quit**: For fixable violations, the tenant gets 30 days to remedy the problem.
- **30-Day Unconditional Quit Notice**: For serious or repeated violations, the landlord may give notice to vacate without offering the opportunity to cure.

### Step 2: Filing an Unlawful Detainer in General District Court

If the tenant does not comply with the notice, the landlord files an **unlawful detainer** action in the General District Court in the jurisdiction where the property is located. The filing fee is paid at this time.

The court will schedule a hearing, typically within 21-30 days. Both parties are served with the summons.

### Step 3: The Court Hearing

At the hearing, both the landlord and tenant appear before a judge or magistrate. The landlord presents evidence of the lease, the notice served, and the tenant's non-compliance. The tenant has the opportunity to present defenses.

**Potential defenses the tenant may raise**:
- Improper notice (wrong notice period, not properly served)
- Payment was made (landlord accepted rent after notice)
- Retaliatory eviction (landlord is evicting because tenant complained about conditions)
- Constructive eviction (landlord's failure to maintain the premises)

### Step 4: Judgment and Writ of Possession

If the court rules for the landlord, it issues a **judgment for possession**. The tenant has **10 days** to file an appeal to circuit court (and must post a bond equal to rent owed).

If no appeal is filed, the landlord returns to the court to request a **Writ of Possession**. The writ is served by the sheriff and gives the tenant a final window (often 72 hours) to vacate before the sheriff returns to physically remove the tenant and their belongings.

**Total timeline**: A non-contested eviction for non-payment in Virginia typically takes 45-75 days from first notice to writ execution.

### Prohibited Self-Help Eviction

**Virginia absolutely prohibits "self-help" eviction.** A landlord cannot:
- Change the locks without court authority
- Remove the tenant's belongings
- Cut off utilities to force the tenant to leave
- Physically remove the tenant themselves
- Harass or intimidate the tenant

Any of these actions by a landlord — even if the tenant is clearly in the wrong — violates the VRLTA and entitles the tenant to recover actual damages, punitive damages, and attorney fees.

### Retaliatory Eviction

Virginia law (§ 55.1-1258) prohibits **retaliatory eviction** — evicting or threatening to evict a tenant in retaliation for:
- Filing a housing code complaint
- Complaining to the landlord about habitability
- Organizing or participating in a tenant organization
- Exercising any right or remedy granted by the VRLTA

If a landlord serves a notice to vacate or raises rent within 90 days of a tenant's protected activity, there is a presumption of retaliation. The landlord must rebut that presumption with evidence of a legitimate, non-retaliatory reason.`,
        },
      ],
    },
    {
      slug: 'ethics-standards-of-conduct',
      title: 'Ethics & Standards of Conduct',
      lessons: [
        {
          slug: 'nar-code-of-ethics-overview',
          title: 'NAR Code of Ethics Overview',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'NAR Code of Ethics',
            'REALTOR',
            'Articles 1-17',
            'duties to clients',
            'duties to the public',
            'duties to REALTORS',
            'Standard of Practice',
            'arbitration',
            'mediation',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Match each NAR Code Article number to its subject matter and key duty',
            },
            {
              type: 'mini_quiz',
              prompt: 'NAR Code of Ethics — which article applies to this scenario?',
            },
          ],
          content: `## NAR Code of Ethics

The National Association of REALTORS (NAR) Code of Ethics is a voluntary code adopted by REALTORS (members of NAR) that establishes professional obligations beyond what state law requires. The Code was first adopted in 1913 and has been amended regularly. While the Code is technically voluntary (you are only bound by it if you are a NAR member/REALTOR), in practice the vast majority of Virginia licensees are REALTORS and the Code is enforced through local REALTOR association ethics hearings.

### REALTOR vs. Real Estate Licensee

**Important distinction**: Not all licensed real estate agents are REALTORS. "REALTOR" is a registered trademark of NAR and applies only to NAR members. All REALTORS are licensed agents, but not all licensed agents are REALTORS. The Code of Ethics binds REALTORS; Virginia real estate regulations bind all licensees.

### Structure of the Code: Three Groups of Duties

The Code is organized into 17 Articles grouped into three categories:

**Articles 1-9: Duties to Clients and Customers**
These articles address how REALTORS must treat the parties they work with.

- **Article 1**: Represent clients honestly and protect and promote clients' interests while treating all parties honestly
- **Article 2**: No misrepresentation, exaggeration, or concealment of pertinent facts
- **Article 3**: Cooperate with other REALTORS (MLS cooperation obligations)
- **Article 4**: Disclose when buying or selling for yourself or for family members
- **Article 5**: Disclose any present or contemplated interest in property being purchased or sold
- **Article 6**: No undisclosed kickbacks, referral fees, or compensation from parties other than clients
- **Article 7**: No compensation from multiple parties without full disclosure and consent
- **Article 8**: Client funds must be kept separate
- **Article 9**: All agreements must be in writing

**Articles 10-14: Duties to the Public**
- **Article 10**: No discrimination (adopts FHA protections and adds additional protected classes for REALTORS)
- **Article 11**: Competence — only provide services in areas of expertise; disclose limitations
- **Article 12**: Truthful advertising; do not misrepresent self or services
- **Article 13**: Do not practice law; advise clients to seek legal counsel when needed
- **Article 14**: Cooperate with ethics investigations; do not file frivolous complaints

**Articles 15-17: Duties to REALTORS**
- **Article 15**: Do not make false or misleading statements about other REALTORS
- **Article 16**: Do not interfere with other REALTORS' agency relationships
- **Article 17**: Submit disputes to arbitration rather than litigation when required

### Article 1 in Depth: The Foundation

Article 1 is the most comprehensive and most litigated. Its core principle: *"When representing a buyer, seller, landlord, tenant, or other client as an agent, REALTORS pledge themselves to protect and promote the interests of their client."* But it simultaneously requires: *"This obligation to the client is primary, but it does not relieve REALTORS of their obligation to treat all parties honestly."*

The tension between these two obligations — fierce advocacy for your client alongside honest dealing with everyone — is the central ethical challenge of real estate practice. You can negotiate hard for your seller. You cannot lie to the buyer's agent about offers or property condition.

### Ethics Complaint and Hearing Process

Ethics complaints against REALTORS are handled by the local REALTOR association's **Professional Standards Committee**, not by VREB (though a serious ethics violation may also trigger a VREB complaint).

Process:
1. Complaint filed with the local association
2. Grievance committee reviews to determine if the complaint states a possible ethics violation
3. If forwarded, a hearing panel is convened
4. Both parties present evidence and testimony
5. Panel issues a decision

**Possible sanctions**:
- Letter of warning
- Letter of reprimand
- Education requirement
- Fine (up to $15,000 under current NAR rules)
- Suspension of MLS privileges
- Expulsion from NAR

**Arbitration**: Disputes over compensation (commission disputes between brokers) are handled through binding arbitration, not ethics hearings. A REALTOR who refuses to arbitrate can be expelled from NAR.`,
        },
        {
          slug: 'virginia-standards-conduct',
          title: 'Virginia Standards of Conduct for Licensees',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            '18 VAC 135-20',
            'material fact',
            'adverse material fact',
            'stigmatized property',
            'as-is sale',
            'latent defect',
            'patent defect',
            'misrepresentation',
            'puffery',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A seller tells their listing agent the basement occasionally floods. The agent does not mention it to buyers. The buyer closes and discovers the issue. Who has liability and why?',
            },
            {
              type: 'flashcard',
              prompt: 'Material fact vs. puffery — which statements require disclosure?',
            },
          ],
          content: `## Virginia Standards of Conduct for Real Estate Licensees

Virginia's Real Estate Board Regulations (18 VAC 135-20) establish detailed standards of conduct that apply to all licensees in all transactions. Violations of these standards are the basis for most VREB disciplinary actions. You need to know these standards for the exam and for staying out of trouble in practice.

### The Duty to Disclose Material Facts

Virginia law imposes a duty on licensees to disclose **adverse material facts** to all parties in a transaction. This is one of the most tested and most important concepts in Virginia real estate law.

**Material fact**: Any fact that, if known, would reasonably be expected to affect the decision of a buyer or seller to complete the transaction, or the price and terms at which they would agree to complete it.

**Adverse material fact**: A material fact that is unfavorable to the property's value, desirability, or condition.

Examples of adverse material facts that must be disclosed:
- Known structural defects (foundation issues, roof problems)
- Known water intrusion history
- Known HVAC, plumbing, or electrical deficiencies
- Active pest infestations or known past infestations
- Environmental hazards (lead paint in pre-1978 homes, known asbestos, mold)
- Boundary disputes or encroachments
- Code violations or unpermitted work
- Known neighborhood nuisances (commercial activity, noise, flood zone)

### Stigmatized Properties: What Virginia Law Says

A "stigmatized property" is one that may be psychologically or emotionally undesirable to some buyers for reasons unrelated to its physical condition — deaths, crimes, paranormal beliefs.

**Virginia's position (§ 55.1-703)**: A seller is NOT required to disclose:
- That the property was the site of a homicide, felony, or suicide
- That the property is reputed to be haunted
- That a prior occupant had HIV/AIDS

An agent is not required to volunteer these facts, and a buyer cannot rescind a contract solely because they later discover the property's history as a stigmatized property.

**Exception**: If a buyer directly and specifically asks about any of these issues, the agent should not lie. The distinction is between failing to disclose (permitted) and actively misrepresenting (not permitted).

### As-Is Sales and Material Facts

Selling a property "as-is" does not eliminate the seller's or agent's disclosure obligations. "As-is" means the seller will not make repairs — it does not mean the seller can conceal known defects.

A seller who knows about a material defect must still disclose it even in an as-is sale. The buyer is then on notice and can proceed with knowledge of the defect. What "as-is" means: the buyer accepts the property in its disclosed condition and cannot demand repairs as a condition of closing.

### Latent vs. Patent Defects

**Patent defect**: Visible and observable upon reasonable inspection. A large crack in a wall, missing roof shingles visible from the street, a clearly broken window. Buyers are expected to discover patent defects through reasonable inspection. Agents may have less disclosure obligation for obvious patent defects — though if the agent knows the defect is more serious than it appears, disclosure is still appropriate.

**Latent defect**: Hidden, not readily observable, and not discoverable through ordinary inspection. Foundation shifting hidden by new flooring, past water damage concealed by fresh drywall, a compromised sewer line that only fails under load. Latent defects known to the seller or agent *must* be disclosed.

### Misrepresentation vs. Puffery

**Misrepresentation**: A false statement of material fact, or the concealment of a material fact, that induces a party to enter the transaction. Misrepresentation can be:
- **Fraudulent**: Knowing the statement is false
- **Negligent**: Making a false statement without reasonable grounds to believe it is true
- **Innocent**: Making a false statement while genuinely (but unreasonably) believing it to be true

**Puffery**: Vague, non-specific promotional statements that no reasonable person would take as a statement of fact. "This is the best neighborhood in Richmond" is puffery. "This property is in a flood zone X — no flood insurance required" is a statement of fact that can constitute misrepresentation if wrong.

The line between puffery and misrepresentation matters enormously. Agents who make specific factual claims about a property — square footage, lot dimensions, school districts, permitted improvements — make statements that can be actionable if incorrect.

### The Virginia Residential Property Disclosure Act

Virginia Code § 55.1-700 et seq. establishes the statutory disclosure framework for residential sales. Sellers must provide a **Residential Property Disclosure Statement** (Form RPDS) to buyers acknowledging Virginia law and the limited nature of seller disclosures.

Key points:
- The disclosure is NOT a warranty
- Sellers disclose what they know; they are not required to investigate
- The disclosure shifts the burden to buyers to conduct due diligence through their own inspections
- Agents should encourage buyers to use the disclosure as a starting point for inspection, not a substitute for it`,
        },
        {
          slug: 'trust-honesty-professional-relationships',
          title: 'Trust, Honesty & Professional Relationships',
          lessonType: 'scenario',
          estimatedMinutes: 18,
          keyTerms: [
            'conflict of interest',
            'net listing',
            'commingling',
            'conversion',
            'kickback',
            'RESPA',
            'affiliated business arrangement',
            'referral fee',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'An agent owns a home inspection company. Their buyer-client asks for inspector recommendations. The agent recommends their own company without disclosing ownership. What laws and ethics standards apply?',
            },
            {
              type: 'mini_quiz',
              prompt: 'Identify each scenario as a RESPA violation, ethics violation, both, or neither',
            },
          ],
          content: `## Trust, Honesty, and Managing Conflicts of Interest

The most ethical violations in real estate come not from agents who set out to do wrong, but from agents who fail to recognize and properly manage conflicts of interest. This lesson addresses the most common conflict scenarios, RESPA's role in controlling settlement service kickbacks, and the professional conduct standards that protect both clients and licensees.

### What Constitutes a Conflict of Interest

A conflict of interest arises when an agent has a personal, financial, or professional interest that could compromise their ability to give impartial advice to a client. Virginia law and the NAR Code of Ethics both require disclosure of conflicts; the Code often requires consent as well.

**Common conflicts of interest in Virginia practice**:

1. **Agent buying or selling for themselves**: An agent making an offer on a listed property, or selling their own property to a buyer-client, must disclose their license status and their interest in the transaction in writing before entering any agreement.

2. **Family member transactions**: Representing a spouse, parent, or child as buyer or seller requires disclosure of the personal relationship.

3. **Referral to affiliated service providers**: Recommending your mortgage company, title company, inspection company, or insurance company where you have a financial interest — without disclosing that interest — violates both VREB regulations and likely RESPA.

4. **Property management and acquisition**: A property manager who advises a client to sell and then represents the buyer is in a direct conflict unless fully disclosed and consented to.

### Net Listings: Why They Are Prohibited in Virginia

A **net listing** is an arrangement where the broker's compensation is the amount above a set minimum price — for example, "sell the house for at least $300,000 and you keep everything above that as your commission." If the broker sells for $380,000, they keep $80,000.

Net listings are **prohibited in Virginia** (and in most states) because they create an obvious conflict of interest: the broker's financial gain is directly adverse to the seller's interest in getting the highest price. The broker is simultaneously the seller's fiduciary and the party who benefits financially from keeping the price down (relative to the inflated commission). This is an irreconcilable conflict.

### RESPA: The Federal Anti-Kickback Rule

The Real Estate Settlement Procedures Act (RESPA) is a federal law that governs residential real estate settlement (closing) services. Its most relevant provisions for agents:

**Section 8 — Kickbacks and Referral Fees**: RESPA prohibits giving or receiving anything of value in exchange for the referral of settlement service business. Settlement services include:
- Title insurance
- Title search
- Mortgage lending
- Real estate attorney services
- Appraisal
- Home inspection
- Home warranty
- Pest inspection

Example: A title company pays an agent $100 per closing for every client the agent refers to them. This is a RESPA violation even if the title company provides excellent service.

**Affiliated Business Arrangement (AfBA) Exception**: If a licensee has an ownership interest in a settlement service provider, they can refer clients to that business — but must:
1. Disclose the affiliated relationship in writing
2. Disclose the estimated charges
3. Inform the client that they are not required to use the affiliated business

An AfBA disclosure form is required at or before the time of referral.

**RESPA Penalties**: Up to $10,000 fine per violation and up to one year imprisonment for criminal violations. Civil liability for three times the kickback received.

### Maintaining Trust Through Documentation

The best protection against ethics complaints, disciplinary action, and civil lawsuits is thorough documentation:
- Document every disclosure made and when it was made
- Keep signed copies of all agency disclosure forms
- Document all client instructions in writing (email follow-up after oral conversations)
- Keep contemporaneous notes of significant conversations
- Retain all transaction documents for the required 3-year period

Virginia's VREB has the authority to audit broker records. Brokers who cannot produce transaction documentation face compliance violations independent of any underlying misconduct.`,
        },
      ],
    },
  ],
}

// ── Module 2: Property Ownership & Land Use ──────────────────────────────────

const module2: CourseModule = {
  slug: 'property-ownership-land-use',
  title: 'Property Ownership & Land Use',
  subtitle: 'Ownership forms, legal descriptions, zoning, and environmental law',
  examWeight: 'Approx. 15% of national exam',
  chapters: [
    {
      slug: 'forms-of-property-ownership',
      title: 'Forms of Property Ownership',
      lessons: [
        {
          slug: 'tenancy-in-common-joint-tenancy',
          title: 'Tenancy in Common & Joint Tenancy',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['tenancy in common', 'joint tenancy', 'right of survivorship', 'four unities', 'undivided interest', 'partition'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Compare the four unities of joint tenancy vs. tenancy in common' },
            { type: 'mini_quiz', prompt: 'Ownership form identification quiz' },
          ],
          content: `## Tenancy in Common and Joint Tenancy

When two or more people own real property together, the form of co-ownership they choose determines what happens when one owner dies, how each owner can sell their share, and how debts affect their interest. The two most common forms in Virginia are tenancy in common and joint tenancy — and the differences between them have major consequences.

### Tenancy in Common

Tenancy in common is the default form of co-ownership in Virginia. Unless a deed expressly creates a different form, two or more unrelated buyers who purchase property together are presumed to hold it as tenants in common.

<strong>Key characteristics:</strong>

<ul>
<li><strong>Undivided interest</strong>: Each co-owner holds an undivided fractional interest in the whole property. Owning 25% of a property as a tenant in common does not mean you own a specific portion of the land — you own 25% of every square foot.</li>
<li><strong>Unequal shares permitted</strong>: Tenants in common can hold different percentages. One owner might hold a 60% interest, another 40%.</li>
<li><strong>No right of survivorship</strong>: When a tenant in common dies, their share passes through their estate — either by will or by intestate succession — not automatically to the surviving co-owner(s).</li>
<li><strong>Free transferability</strong>: Each tenant in common can sell, gift, or mortgage their own share without the consent of the other co-owners. A buyer of one share becomes a new tenant in common with the remaining original owners.</li>
<li><strong>Independent creditor exposure</strong>: A judgment creditor of one tenant in common can attach and force the sale of that tenant's interest.</li>
</ul>

<h3>Joint Tenancy</h3>

Joint tenancy is a co-ownership form where the owners hold equal shares and, critically, the right of survivorship. When one joint tenant dies, their interest automatically transfers to the surviving joint tenants by operation of law — outside of probate, outside of any will.

<strong>The Four Unities — Required for Joint Tenancy</strong>

Virginia requires all four unities to exist for joint tenancy to be created and maintained:

<ul>
<li><strong>Unity of Time</strong>: All joint tenants must acquire their interests at the same time.</li>
<li><strong>Unity of Title</strong>: All joint tenants must receive their interests from the same instrument (the same deed).</li>
<li><strong>Unity of Interest</strong>: All joint tenants must hold equal shares. If there are three joint tenants, each holds exactly one-third.</li>
<li><strong>Unity of Possession</strong>: All joint tenants have an equal right to possess the entire property.</li>
</ul>

If any of the four unities is missing at the time of creation, joint tenancy does not exist and the courts will treat the co-ownership as tenancy in common. If a unity is later destroyed, joint tenancy is <strong>severed</strong>.

<h3>Severing a Joint Tenancy</h3>

Severance converts joint tenancy to tenancy in common for the affected share. A joint tenant can unilaterally sever the joint tenancy by transferring their interest to another party — including to themselves through a straw man deed or a direct deed (Virginia allows self-conveyance to sever). The surviving original joint tenant(s) then hold their remaining shares in joint tenancy with each other, but as tenants in common with the new owner.

Example: A, B, and C hold as joint tenants. A conveys to D. Now B and C remain joint tenants between themselves (with right of survivorship between B and C), but D holds as tenant in common with B and C.

<h3>Right of Survivorship in Practice</h3>

The right of survivorship operates outside the probate system. If A and B own as joint tenants and A dies, B becomes the sole owner automatically. A deed or an affidavit of survivorship (with a copy of the death certificate) is recorded in the land records to clear the title. A's will has no effect on the property — the survivorship right overrides any testamentary disposition.

<h3>Partition Actions</h3>

Any co-owner — whether tenant in common or joint tenant — can bring a <strong>partition action</strong> in circuit court to compel division of the property. Virginia courts prefer partition in kind (physical division of the land) but will order partition by sale when physical division is not practicable or would cause significant loss in value. The proceeds of a partition sale are divided among the co-owners according to their respective interests.

<strong>Exam tip</strong>: When a question describes property passing automatically at death without going through a will or probate, the answer involves right of survivorship — either joint tenancy or tenancy by the entireties. Tenancy in common never has right of survivorship.`,
        },
        {
          slug: 'community-property-tenancy-entireties',
          title: 'Community Property & Tenancy by the Entireties',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['tenancy by the entireties', 'community property', 'marital property', 'separate property', 'Virginia marital rights'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Tenancy by the entireties — who can hold it and what are the protections?' },
          ],
          content: `## Tenancy by the Entireties and Marital Property in Virginia

Understanding how married couples own property is essential in Virginia practice. The vast majority of married homebuyers will take title as tenants by the entireties — and understanding what that means protects them and protects you.

<h3>Tenancy by the Entireties</h3>

Tenancy by the entireties is a form of co-ownership available <strong>only to legally married couples</strong>. It combines the equal sharing and right of survivorship of joint tenancy with an additional protection: neither spouse can unilaterally convey or encumber the property.

<strong>Key characteristics:</strong>

<ul>
<li><strong>Right of survivorship</strong>: When one spouse dies, full ownership passes automatically to the surviving spouse by operation of law, bypassing probate.</li>
<li><strong>Equal and inseverable interest</strong>: Unlike joint tenancy, neither spouse can sever the tenancy unilaterally. One spouse cannot deed away their interest without the other spouse's participation and signature.</li>
<li><strong>Creditor protection</strong>: A judgment against one spouse alone cannot be executed against property held as tenants by the entireties. Creditors of only one spouse cannot force a sale of the marital home. This is one of the most significant asset protection benefits in Virginia real estate law.</li>
<li><strong>Both spouses must sign</strong>: Any deed, deed of trust (mortgage), or contract for sale of entireties property requires both spouses' signatures. A deed signed by only one spouse does not convey the other spouse's interest.</li>
</ul>

<h3>How Tenancy by the Entireties is Created in Virginia</h3>

In Virginia, when a deed conveys real property to two people who are married to each other at the time of acquisition, a rebuttable presumption of tenancy by the entireties arises under Virginia Code § 55.1-136. The deed does not need to use the magic words "tenancy by the entireties" — being married spouses receiving a joint conveyance is sufficient.

However, best practice is to include language in the deed such as: "to John Smith and Mary Smith, husband and wife, as tenants by the entireties."

<h3>Termination of Tenancy by the Entireties</h3>

The tenancy terminates upon:
<ul>
<li><strong>Death of one spouse</strong>: Surviving spouse becomes sole owner.</li>
<li><strong>Divorce</strong>: Upon final divorce decree, tenancy by the entireties converts to tenancy in common. Virginia courts may order a division of property, or the parties may agree on one spouse buying out the other.</li>
<li><strong>Joint conveyance</strong>: Both spouses execute a deed together transferring the property.</li>
<li><strong>Mutual agreement</strong>: Both spouses can agree to change the form of ownership by executing a new deed.</li>
</ul>

<h3>Virginia Is NOT a Community Property State</h3>

Nine states use a community property system: Arizona, California, Idaho, Louisiana, Nevada, New Mexico, Texas, Washington, and Wisconsin. Virginia is <strong>not</strong> among them and never has been.

Under community property law, most property acquired by either spouse during marriage is owned equally by both spouses regardless of whose name is on the title or paycheck. Virginia rejects this system entirely.

In Virginia, separate income and assets belong to the individual who earned or received them. Property titled in one spouse's name belongs to that spouse. The marital property system in Virginia primarily becomes relevant during <strong>divorce proceedings</strong>, where courts apply equitable distribution principles — dividing marital property (generally, assets acquired during the marriage) in a manner that is fair but not necessarily equal.

<h3>Practical Impact for Real Estate Agents</h3>

<ul>
<li>When listing a property owned by a married couple, <strong>both spouses must sign the listing agreement</strong> if the property is entireties property.</li>
<li>When preparing an offer for married buyers, make sure the vesting will reflect their wishes — tenancy by the entireties is usually the right choice for maximum spousal protection.</li>
<li>When a married seller is selling a home titled only in one spouse's name, confirm whether the other spouse has any interest. In Virginia, a non-titled spouse may have acquired an interest through equitable claims — especially in long marriages.</li>
<li>Divorce situations create title complications. Work with the client's attorney to ensure the divorce decree properly addresses the property and that a new deed is recorded reflecting the outcome.</li>
</ul>

<strong>Exam tip</strong>: The key distinction tested is creditor protection. Tenancy by the entireties protects against a judgment creditor of ONE spouse. If both spouses owe the debt, the protection disappears. And the protection only applies to married couples — joint tenants have no equivalent protection.`,
        },
        {
          slug: 'condominiums-cooperatives-pud',
          title: 'Condominiums, Cooperatives & PUDs',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: ['condominium', 'cooperative', 'planned unit development', 'HOA', 'common elements', 'unit deed', 'proprietary lease', 'declaration'],
          interactiveElements: [
            { type: 'drag_drop', prompt: 'Match ownership type to its defining document and ownership structure' },
            { type: 'scenario', prompt: 'A buyer is purchasing a unit in a Virginia condominium. What documents must be provided and what is the review period?' },
          ],
          content: `## Condominiums, Cooperatives, and Planned Unit Developments

Buyers increasingly choose condominiums and community developments over traditional single-family homes. As an agent, you need to understand the distinct ownership structures, governing documents, and Virginia-specific disclosure requirements that apply to each.

<h3>Condominiums</h3>

A condominium is a form of ownership where individual units are owned in fee simple, and the common areas (hallways, lobby, gym, pool, exterior walls, roof) are owned as tenants in common by all unit owners together.

<strong>What a condominium buyer owns:</strong>
<ul>
<li>Their individual unit — the airspace and interior surfaces within the unit boundaries defined in the declaration</li>
<li>An undivided percentage interest in all common elements</li>
</ul>

<strong>The Virginia Condominium Act (Virginia Code § 55.1-1900 et seq.)</strong> governs the creation, management, and sale of condominiums in Virginia. Key requirements:

<ul>
<li>A condominium is created by recording a <strong>declaration</strong> and plat in the land records of the locality where the property is located.</li>
<li>Each unit receives its own separate deed and separate tax assessment.</li>
<li>The <strong>condominium owners' association (COA)</strong> is the governing body. Every unit owner is automatically a member and pays assessments (dues).</li>
<li>Unit owners can be assessed for special assessments when major common element repairs exceed reserve fund balances.</li>
</ul>

<h3>Virginia Condominium Resale Disclosures</h3>

When selling a condominium unit, the seller must provide the buyer with a <strong>Condominium Resale Certificate</strong> before the buyer executes a contract. This packet (prepared by the COA and paid for by the seller) must include:

<ul>
<li>The current monthly assessment amount</li>
<li>Any pending or anticipated special assessments</li>
<li>The current budget and current reserve fund balance</li>
<li>Any outstanding judgments or lawsuits against the COA</li>
<li>The Declaration, Bylaws, and Rules and Regulations</li>
</ul>

<strong>Buyer's right to cancel</strong>: After receiving a complete resale certificate, the buyer has <strong>3 days to cancel</strong> the contract for any reason. This right is non-waivable. If the seller fails to provide the certificate, the buyer has the right to cancel at any time up to settlement.

<h3>Cooperatives</h3>

A cooperative (co-op) is an entirely different ownership structure. In a co-op:
<ul>
<li>A corporation owns the entire building</li>
<li>Residents purchase <strong>shares of stock</strong> in the corporation, not real property</li>
<li>As shareholders, residents receive a <strong>proprietary lease</strong> that gives them the right to occupy a specific unit</li>
</ul>

Because co-op residents own stock, not real estate, they cannot obtain a traditional mortgage. Financing for co-op purchases is harder to arrange, which limits the pool of buyers. Co-ops are relatively rare in Virginia compared to condominiums, but they do exist primarily in Northern Virginia and urban areas.

<strong>Key distinction for the exam</strong>: Condominium owners hold a deed to their unit. Co-op residents hold stock certificates and a proprietary lease. A co-op purchase is the purchase of personal property (stock), not real property.

<h3>Planned Unit Developments (PUDs)</h3>

A planned unit development is a mixed-use or residential community where the land and common facilities are owned and maintained by a homeowners' association, while individual homeowners own their lot and dwelling.

<strong>PUD characteristics:</strong>
<ul>
<li>Each owner holds fee simple title to their individual lot and home</li>
<li>Common areas (parks, pools, amenity centers, private roads) are owned by the HOA</li>
<li>Every lot owner is a mandatory member of the HOA and must pay assessments</li>
<li>The HOA enforces deed restrictions (CC&Rs) that regulate appearance, use, and modifications</li>
</ul>

<h3>Virginia Property Owners' Association Act (POAA)</h3>

The POAA (Virginia Code § 55.1-1800 et seq.) governs HOAs in Virginia. Sellers of property subject to a POAA-governed HOA must provide buyers with a <strong>Disclosure Packet</strong> before contract execution. The packet must contain:

<ul>
<li>Current annual assessment and any pending special assessments</li>
<li>HOA's current budget and reserve fund balance</li>
<li>Any outstanding violations on the property</li>
<li>The Declaration, Bylaws, and Rules</li>
<li>Any pending litigation involving the HOA</li>
</ul>

<strong>Buyer's right to cancel</strong>: The buyer has <strong>3 days after receiving a complete POAA packet</strong> to cancel for any reason. If the packet is not provided, the buyer may cancel at any time up to settlement.

<strong>Exam tip</strong>: Both the POAA (HOA properties) and Condominium Act give buyers a 3-day cancellation right after receiving disclosure packets. The key difference: condo resale certificate vs. POAA disclosure packet, but the buyer's right is the same.`,
        },
        {
          slug: 'trusts-corporations-ownership',
          title: 'Trusts, Corporations & Business Entity Ownership',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['revocable living trust', 'land trust', 'LLC', 'corporation', 'authorized signatory', 'operating agreement', 'corporate resolution'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Who must sign real estate documents for each entity type?' },
          ],
          content: `## Trusts, Corporations, and Business Entity Ownership of Real Property

Real estate is frequently owned by entities — LLCs, corporations, trusts, and partnerships — rather than by individuals. As an agent, you need to know who has authority to sign on behalf of each entity type, what documents to request to verify that authority, and how entity ownership affects the transaction.

<h3>Trusts</h3>

<strong>Revocable Living Trust</strong>: The most common trust structure for individual real estate ownership. The property owner (grantor) transfers title into the trust during their lifetime, naming themselves as trustee and beneficiary. The trust document names a successor trustee who takes over management upon the grantor's death or incapacity.

Benefits of holding property in a revocable living trust:
<ul>
<li>Property passes to heirs without going through probate</li>
<li>Trustee can sell or manage property during incapacity without court intervention</li>
<li>Privacy — trust terms are not public record in most cases</li>
</ul>

When transacting with property held in a revocable living trust:
<ul>
<li>The <strong>trustee</strong> signs all documents, not the individual personally</li>
<li>Signature line reads: "John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2020"</li>
<li>Request a copy of the trust's relevant pages (trustee authority and trust powers) or a <strong>certification of trust</strong> that summarizes trustee authority without disclosing the full trust terms</li>
</ul>

<strong>Irrevocable Trust and Land Trust</strong>: Irrevocable trusts permanently remove assets from the grantor's estate. Land trusts are specialized trusts used primarily in Illinois and a few other states for privacy — the beneficial owner's identity is not in public deed records. Land trusts are relatively uncommon in Virginia but you may encounter them.

<h3>Limited Liability Companies (LLCs)</h3>

LLCs are the most popular business entity for real estate investment in Virginia because they provide liability protection for members while allowing pass-through taxation.

<strong>Who can sign for an LLC</strong>: The person or persons with authority to bind the LLC. This is determined by the LLC's <strong>operating agreement</strong>:
<ul>
<li><strong>Member-managed LLC</strong>: All members (owners) can sign</li>
<li><strong>Manager-managed LLC</strong>: Only the designated manager(s) can sign, even if managers are not members</li>
</ul>

Always request:
<ul>
<li>A copy of the operating agreement or a member/manager certificate confirming signing authority</li>
<li>Confirmation that the LLC is in good standing with the Virginia State Corporation Commission (SCC)</li>
</ul>

An LLC that is administratively dissolved by the SCC (for failure to pay annual fees or file reports) loses its ability to conduct business. Transactions entered into by dissolved LLCs are legally risky.

<h3>Corporations</h3>

Corporations own real estate through corporate officers or a board-authorized representative.

<strong>Who can sign for a corporation</strong>: Whoever the board of directors has authorized, typically documented through a <strong>corporate resolution</strong>. The resolution will name the specific officer (CEO, President, Vice President) authorized to execute the real estate transaction.

Always request:
<ul>
<li>A corporate resolution authorizing the specific transaction or authorizing a named officer</li>
<li>Verification of the corporation's good standing with the Virginia SCC</li>
<li>Confirmation that the signer's title matches the authorization</li>
</ul>

A corporate officer who signs without proper board authorization may have exceeded their authority — voiding or clouding the transaction.

<h3>Partnerships</h3>

<strong>General partnership</strong>: Any general partner can typically bind the partnership. All general partners are personally liable for partnership debts, so real property held by a general partnership exposes individual partners to personal liability.

<strong>Limited partnership</strong>: The general partner manages and has signing authority. Limited partners are passive investors with no management authority. A limited partner cannot sign real estate documents on behalf of the partnership.

<h3>Practical Due Diligence for Entity-Owned Properties</h3>

Before going under contract with an entity seller or co-signing on behalf of an entity buyer, verify:

<ol>
<li>The exact legal name of the entity as registered with the Virginia SCC (typos in deed vesting create title defects)</li>
<li>Who has authority to sign (operating agreement, corporate resolution, trust certification)</li>
<li>That the entity is currently in good standing</li>
<li>That the authorized signer's authority covers this specific type of transaction</li>
</ol>

<strong>Exam tip</strong>: The exam tests who must sign. For an LLC, the operating agreement controls. For a trust, the trustee signs in their fiduciary capacity. For a corporation, a corporate resolution authorizes the signing officer. When in doubt, the answer is: verify the governing document.`,
        },
      ],
    },
    {
      slug: 'legal-descriptions-surveys',
      title: 'Legal Descriptions & Surveys',
      lessons: [
        {
          slug: 'metes-and-bounds',
          title: 'Metes and Bounds Descriptions',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: ['metes and bounds', 'point of beginning', 'call', 'bearing', 'monument', 'benchmark'],
          interactiveElements: [
            { type: 'drag_drop', prompt: 'Trace a metes and bounds description on a plot diagram — identify each call' },
          ],
          content: `## Metes and Bounds Legal Descriptions

Metes and bounds is the oldest system for describing land in the United States. It is used throughout Virginia — particularly in older deed records, rural properties, and any area settled before the public land survey system was established. You will encounter it in title searches and older deeds throughout your career.

<h3>What "Metes and Bounds" Means</h3>

<ul>
<li><strong>Metes</strong>: Measurements — the distances and directions of each boundary line</li>
<li><strong>Bounds</strong>: Boundaries — the fixed markers (monuments) that define the corners of the parcel</li>
</ul>

Together, they create a narrative description that traces the boundary of a parcel, starting at a fixed point and returning to that same point after describing all sides.

<h3>The Point of Beginning (POB)</h3>

Every metes and bounds description starts at the <strong>Point of Beginning (POB)</strong> — a specific, identifiable location. The POB must be anchored to a permanent reference point so it can be found in the field. Common POBs reference:
<ul>
<li>An iron pin or monument</li>
<li>A recorded corner of an adjacent parcel</li>
<li>A street intersection</li>
<li>A benchmark established by a government survey</li>
</ul>

The description traces the boundary from the POB, describes each course (direction and distance), and closes by returning to the POB. A description that does not close — where the ending point does not match the starting point — has an error called a <strong>closure error</strong>.

<h3>Reading Bearing and Distance Calls</h3>

Each <strong>call</strong> in a metes and bounds description contains:
<ul>
<li>A <strong>bearing</strong>: The direction of travel expressed as a compass angle from north or south (e.g., "N 45° 30' E" means start facing north, rotate 45 degrees and 30 minutes toward the east)</li>
<li>A <strong>distance</strong>: How far to travel in that direction (e.g., "175.50 feet")</li>
</ul>

A full call looks like: <em>"thence N 45° 30' E, a distance of 175.50 feet to an iron pin"</em>

<strong>Bearings are always expressed as:</strong>
<ul>
<li>Starting compass direction: N or S</li>
<li>Degrees and minutes off that direction</li>
<li>Ending compass direction: E or W</li>
</ul>

N 90° E = due East. S 90° W = due West. N 0° = due North.

<h3>Monuments</h3>

Monuments are physical markers at corners or along boundary lines. They can be:
<ul>
<li><strong>Natural monuments</strong>: Trees, streams, rocks, ridgelines</li>
<li><strong>Artificial monuments</strong>: Iron pins, concrete markers, stakes</li>
<li><strong>Record monuments</strong>: References to other recorded documents ("the northeastern corner of Lot 12, Block 4 of the Elmwood Subdivision")</li>
</ul>

<strong>Priority of calls</strong>: When a metes and bounds description has internal conflicts, courts follow this hierarchy of what controls:
<ol>
<li>Natural monuments (most reliable — nature doesn't move)</li>
<li>Artificial monuments</li>
<li>Adjacent boundaries (references to adjoining deeds)</li>
<li>Courses (bearings and directions)</li>
<li>Distances</li>
<li>Area (acreage) — least reliable</li>
</ol>

If a description says "100 feet to the old oak tree" but the tree is only 87 feet away, the tree controls — not the distance.

<h3>Why Metes and Bounds Matters in Virginia Practice</h3>

Virginia was one of the original colonies and was not surveyed under the public land survey system. Large portions of the Commonwealth — particularly rural counties, the Shenandoah Valley, the Piedmont, and Tidewater — use metes and bounds descriptions in their deed records.

When representing buyers or sellers of older Virginia properties, you may encounter descriptions that reference features no longer in existence (a tree that has been removed, a stream that has been altered). These situations require a licensed surveyor to resolve.

<strong>Exam tip</strong>: Know the components of a metes and bounds call (bearing, distance, monument), know the POB concept, and know the hierarchy of conflicting calls. You will not be asked to calculate bearings on the exam, but you may be asked to identify what component controls when they conflict.`,
        },
        {
          slug: 'rectangular-survey-system',
          title: 'Rectangular Survey System',
          lessonType: 'interactive',
          estimatedMinutes: 20,
          keyTerms: ['township', 'range', 'section', 'principal meridian', 'baseline', 'quarter section', 'aliquot parts'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate acreage from a rectangular survey description' },
            { type: 'mini_quiz', prompt: 'Identify the correct rectangular survey description from a diagram' },
          ],
          content: `## The Rectangular (Government) Survey System

The rectangular survey system — also called the Public Land Survey System (PLSS) or government survey — was established by the Land Ordinance of 1785 to provide a uniform method for describing land in the western territories. It is the primary legal description method in states west of the Ohio River. Virginia uses metes and bounds and lot-block plat descriptions, not the rectangular survey system — but the exam tests your knowledge of how the system works.

<h3>The Grid Framework</h3>

The rectangular survey system divides land using two intersecting sets of lines:

<ul>
<li><strong>Principal Meridians</strong>: North-south lines established at key reference points. Each survey system has its own principal meridian. The system uses named meridians (e.g., the Tallahassee Meridian in Florida/Alabama, the Willamette Meridian in Oregon/Washington).</li>
<li><strong>Baselines</strong>: East-west lines that intersect the principal meridians at the point of origin for the survey.</li>
</ul>

<h3>Townships and Ranges</h3>

<strong>Townships</strong> are horizontal rows running east-west, numbered north and south from the baseline:
<ul>
<li>Township 1 North (T1N) = the first row north of the baseline</li>
<li>Township 3 South (T3S) = three rows south of the baseline</li>
</ul>

<strong>Ranges</strong> are vertical columns running north-south, numbered east and west from the principal meridian:
<ul>
<li>Range 1 East (R1E) = first column east of the principal meridian</li>
<li>Range 2 West (R2W) = second column west of the principal meridian</li>
</ul>

A township is identified by combining its Township and Range designations: <em>Township 3 North, Range 2 East (T3N, R2E)</em>. Each township is a <strong>6-mile by 6-mile square</strong>, containing <strong>36 square miles</strong>.

<h3>Sections</h3>

Each township is divided into <strong>36 sections</strong>, each measuring <strong>1 mile by 1 mile = 640 acres</strong>. Sections are numbered in a specific pattern starting from the northeast corner:
<ul>
<li>Section 1 is in the northeast corner</li>
<li>Numbering runs west across the top row to Section 6 (northwest corner)</li>
<li>Then drops down and runs east, Section 7 (just below 6) through 12</li>
<li>Continues serpentine fashion to Section 36 in the southeast corner</li>
</ul>

<h3>Aliquot Parts (Subdivisions of Sections)</h3>

Sections are further divided into <strong>aliquot parts</strong> using compass directions:

<ul>
<li><strong>Half section</strong> = 320 acres (N½ or S½ or E½ or W½ of a section)</li>
<li><strong>Quarter section</strong> = 160 acres (NE¼, NW¼, SE¼, SW¼)</li>
<li><strong>Quarter-quarter section</strong> = 40 acres (NE¼ of the NW¼)</li>
</ul>

Descriptions are read from smallest to largest: "the SW¼ of the NE¼ of Section 14, T2N, R3W" — start with the smallest piece (SW¼), identify the larger piece it comes from (NE¼), then the section (14), the township (T2N), and the range (R3W).

<h3>Acreage Calculations</h3>

The exam tests your ability to calculate acreage from a rectangular survey description:

<ul>
<li>A full section = <strong>640 acres</strong></li>
<li>The NE¼ of Section 14 = 640 ÷ 4 = <strong>160 acres</strong></li>
<li>The S½ of the NW¼ of Section 14 = 640 ÷ 4 ÷ 2 = <strong>80 acres</strong></li>
<li>The NW¼ of the SE¼ of the SW¼ of Section 14 = 640 ÷ 4 ÷ 4 ÷ 4 = <strong>10 acres</strong></li>
</ul>

The formula: Start with 640, divide by 4 for each quarter designation.

<h3>Government Lots</h3>

In areas near lakes, rivers, or irregular boundaries, perfect quarter sections were not always possible. These irregular sections were assigned <strong>lot numbers</strong> rather than aliquot part designations and were surveyed individually. The acreage is noted on the original survey and is often less than the standard 40-acre quarter-quarter section.

<strong>Exam tip</strong>: Virginia uses metes and bounds, not the rectangular survey. But the national exam requires you to calculate acreage from rectangular descriptions and know that a section = 640 acres, a township = 6 miles x 6 miles = 36 sections, and the numbering starts in the NE corner of the township.`,
        },
        {
          slug: 'lot-block-plat-system',
          title: 'Lot, Block & Plat System',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: ['recorded plat', 'subdivision', 'lot', 'block', 'plat book', 'dedication', 'easement by plat'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Lot-block-plat description components and how to read them' },
          ],
          content: `## The Lot, Block, and Plat System

The lot, block, and plat system is the most common form of legal description for residential real estate in Virginia. Walk through almost any Virginia subdivision — whether it was platted in 1955 or 2024 — and each lot will have a recorded plat that defines it with precision.

<h3>How the System Works</h3>

When a developer divides a larger tract of land into individual lots for sale, they create a <strong>subdivision plat</strong> — a precise survey drawing that:
<ul>
<li>Divides the larger tract into numbered lots</li>
<li>Groups related lots into numbered or named blocks</li>
<li>Shows the dimensions of each lot</li>
<li>Identifies streets, easements, and common areas</li>
<li>Indicates what land is being <strong>dedicated</strong> to public use (streets, parks)</li>
</ul>

The plat must be approved by the local government and then <strong>recorded</strong> in the land records of the county or city where the property is located. Once recorded, it becomes part of the public record.

<h3>Legal Description Format</h3>

Once a plat is recorded, each lot can be described concisely:

<em>"Lot 14, Block 3, Section 2 of Westwood Forest Subdivision, as recorded in Plat Book 47, Page 212, in the Clerk's Office of the Circuit Court of Henrico County, Virginia."</em>

This description is short, unambiguous, and references the recorded plat where all dimensional details are found. Compared to a metes and bounds description that might run a full paragraph, a plat description is remarkably efficient.

<h3>The Plat Book and Page System</h3>

Recorded plats are filed in <strong>Plat Books</strong> maintained by the Circuit Court Clerk in each Virginia locality. When a title examiner or agent needs to examine the details of a lot, they pull up the referenced plat book and page. Virginia's land records are now largely digitized and available through the Circuit Court clerks' electronic systems.

<strong>Key documents associated with recorded plats:</strong>
<ul>
<li><strong>The plat itself</strong>: Shows lot dimensions, easements, setback lines, rights-of-way</li>
<li><strong>The subdivision deed of dedication</strong>: Conveys dedicated streets and public areas to the locality</li>
<li><strong>Recorded restrictions</strong>: CC&Rs (covenants, conditions, and restrictions) that run with all lots in the subdivision may be recorded separately or incorporated into the plat</li>
</ul>

<h3>Easements by Plat</h3>

One critical feature of recorded plats is that they frequently create <strong>easements</strong> that are visible on the plat drawing. Common plat-created easements include:
<ul>
<li><strong>Utility easements</strong>: Areas along lot lines reserved for power lines, water, sewer, and gas lines</li>
<li><strong>Drainage easements</strong>: Areas reserved for stormwater management</li>
<li><strong>Access easements</strong>: Private roads or paths reserved for ingress/egress</li>
<li><strong>Building setback lines</strong>: Lines on the plat indicating minimum distances from property lines where no structure may be built</li>
</ul>

These easements and setback lines bind all future owners. When a buyer is purchasing a lot or a home in a platted subdivision, reviewing the recorded plat reveals existing encumbrances that may not appear in the deed.

<h3>Dedication</h3>

<strong>Dedication</strong> is the act of setting aside private land for public use. When a developer records a subdivision plat, they typically dedicate streets and sometimes parks to the local government. Once accepted by the locality, dedicated streets become public streets maintained by the city or county.

<strong>Exam tip</strong>: The plat system is the dominant legal description method for residential lots in Virginia. Know that the description references the recorded plat book and page, that plats show easements and setback lines, and that dedication transfers land to public use.`,
        },
      ],
    },
    {
      slug: 'land-use-controls-zoning',
      title: 'Land Use Controls & Zoning',
      lessons: [
        {
          slug: 'zoning-classifications-variances',
          title: 'Zoning Classifications & Variances',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['zoning ordinance', 'residential zoning', 'commercial zoning', 'industrial zoning', 'variance', 'special use permit', 'nonconforming use', 'spot zoning'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A property owner wants to operate a hair salon from their home in an R-1 residential zone. What approval processes might be available?' },
          ],
          content: `## Zoning Classifications, Variances, and Nonconforming Uses

Zoning is the primary tool local governments use to control land use. Every Virginia city and county has a zoning ordinance that divides its jurisdiction into zones and specifies what can be built and used in each zone. Understanding zoning is critical for advising clients on what they can do with property they own or intend to buy.

<h3>The Legal Basis for Zoning</h3>

Virginia cities and counties derive their authority to zone from the Virginia Code (Title 15.2, Chapter 22 — Land Use). Zoning is an exercise of the government's <strong>police power</strong> — the inherent authority to regulate private conduct to protect the public health, safety, morals, and general welfare. Zoning must be based on a comprehensive plan.

<h3>Primary Zoning Classifications</h3>

<strong>Residential Zoning</strong> regulates where and how housing is built:
<ul>
<li><strong>R-1 (Single-Family Low Density)</strong>: Large minimum lot sizes, one single-family home per lot, no multi-family</li>
<li><strong>R-2 / R-3 (Single-Family Higher Density)</strong>: Smaller minimum lot sizes</li>
<li><strong>R-MH (Manufactured Housing)</strong>: Permits manufactured homes</li>
<li><strong>R-MF (Multi-Family)</strong>: Permits apartments, condominiums, townhomes</li>
</ul>

<strong>Commercial Zoning</strong>:
<ul>
<li><strong>B-1 / C-1 (Neighborhood Commercial)</strong>: Small retail, offices, limited service uses</li>
<li><strong>B-2 / C-2 (General Commercial)</strong>: Retail stores, restaurants, service businesses</li>
<li><strong>B-3 / C-3 (Heavy Commercial)</strong>: Auto dealers, larger retail, light service</li>
</ul>

<strong>Industrial Zoning</strong>:
<ul>
<li><strong>I-1 (Light Industrial)</strong>: Warehouses, light manufacturing, flex space</li>
<li><strong>I-2 (Heavy Industrial)</strong>: Heavy manufacturing, processing plants, bulk storage</li>
</ul>

<strong>Agricultural Zoning (A-1)</strong>: Farms, vineyards, large minimum lot sizes, limited residential development.

<h3>Variances</h3>

A <strong>variance</strong> is an official authorization from the local Board of Zoning Appeals (BZA) to deviate from a specific zoning requirement. There are two types:

<ul>
<li><strong>Area variance</strong>: A deviation from dimensional requirements — setback lines, height limits, lot coverage percentages, lot size minimums. Most common. Example: A property owner wants to build an addition that would come within 5 feet of the rear property line, but the zoning requires a 10-foot setback.</li>
<li><strong>Use variance</strong>: A deviation from use requirements — allowing a use that is not permitted in the zone. Use variances are disfavored and harder to obtain; they are more properly addressed through a rezoning or special use permit.</li>
</ul>

To obtain a variance, the applicant must demonstrate <strong>undue hardship</strong> — that the strict application of the zoning requirement would deprive the property of reasonable use due to its unique physical characteristics. Financial hardship alone is not sufficient.

<h3>Special Use Permits (Conditional Use Permits)</h3>

A <strong>special use permit (SUP)</strong> or conditional use permit (CUP) allows a use that is not automatically permitted in a zone but that can be compatible if specific conditions are met. Example: A church in a residential zone, a daycare facility in a commercial zone, or a drive-through restaurant in a neighborhood business zone.

SUPs are granted by the local governing body (city council or board of supervisors), typically after a public hearing. They run with the land, not the owner.

<h3>Nonconforming Uses</h3>

A <strong>nonconforming use</strong> is a use that was lawful when established but no longer complies with current zoning regulations due to a subsequent zoning change. Virginia law generally protects these uses under the principle that property owners have vested rights in lawfully established uses.

Rules governing nonconforming uses:
<ul>
<li>They may continue to operate but cannot be <strong>expanded</strong> or <strong>enlarged</strong></li>
<li>If the use is <strong>abandoned</strong> (discontinued for a statutory period, often 2 years in Virginia localities), the right to the nonconforming use is lost</li>
<li>If a nonconforming structure is destroyed beyond a certain percentage of its value (often 50%), it cannot be rebuilt as a nonconforming structure</li>
<li>Ordinary maintenance and repair are permitted</li>
</ul>

<h3>Spot Zoning</h3>

<strong>Spot zoning</strong> is the illegal practice of applying a zoning classification to a small parcel in a way that is inconsistent with the comprehensive plan and serves only private interests rather than public welfare. Example: Rezoning a single lot in the middle of a residential neighborhood to allow a gas station. Courts will invalidate spot zoning.

<strong>Exam tip</strong>: Know the difference between a variance (relief from dimensional rules), a special use permit (conditional authorization of a non-automatic use), and a nonconforming use (a pre-existing lawful use that now conflicts with zoning). All three are tested.`,
        },
        {
          slug: 'deed-restrictions-cc-rs',
          title: 'Deed Restrictions & CC&Rs',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['deed restriction', 'restrictive covenant', 'CC&Rs', 'equitable servitude', 'run with the land', 'enforcement by neighbors'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Private deed restrictions vs. public zoning — which controls?' },
          ],
          content: `## Deed Restrictions and CC&Rs

Beyond government zoning, private parties can restrict what landowners do with their property through deed restrictions and covenants. These private land use controls are often more detailed — and sometimes more restrictive — than zoning. Understanding the difference between public zoning and private restrictions is essential knowledge for Virginia agents.

<h3>What Are Deed Restrictions?</h3>

A <strong>deed restriction</strong> is a provision placed in a deed that limits how the property can be used, what structures can be built, or how the property must appear. Unlike zoning (public law), deed restrictions are matters of private contract — they bind owners based on their agreement when they purchased the property.

Deed restrictions can be simple (e.g., "No structure over two stories shall be erected on this lot") or comprehensive (entire subdivision CC&Rs).

<h3>Covenants, Conditions, and Restrictions (CC&Rs)</h3>

CC&Rs are the comprehensive set of private restrictions that govern a subdivision, condominium, or planned community. They are recorded in the land records and bind every owner who purchases in the community.

<strong>Common CC&R provisions include:</strong>
<ul>
<li>Minimum square footage for homes</li>
<li>Architectural standards (exterior materials, roof pitch, colors)</li>
<li>Restrictions on outbuildings, sheds, and fences</li>
<li>Setback requirements more restrictive than zoning</li>
<li>Landscaping requirements and lawn maintenance standards</li>
<li>Vehicle parking restrictions (no commercial vehicles, boat trailers)</li>
<li>Restrictions on short-term rental use (Airbnb/VRBO prohibitions)</li>
<li>Pet restrictions</li>
</ul>

<h3>Equitable Servitudes — Running With the Land</h3>

For a deed restriction to bind future owners (not just the original buyer), it must <strong>"run with the land."</strong> This means the restriction passes automatically with every subsequent transfer of the property. For a restriction to run with the land in Virginia, courts generally require:

<ol>
<li>The restriction must be in writing and recorded</li>
<li>The original grantor and grantee must have intended the restriction to bind future owners</li>
<li>The restriction must "touch and concern" the land — it must relate to the use or enjoyment of the land itself</li>
<li>There must be privity of estate between the original parties</li>
</ol>

If these elements are met, the restriction is an <strong>equitable servitude</strong> — enforceable against all future owners.

<h3>Enforcement: Who Can Enforce CC&Rs?</h3>

Private deed restrictions can be enforced by:
<ul>
<li><strong>The HOA</strong>, which typically has authority under the CC&Rs to impose fines, require removal of violations, and pursue injunctive relief</li>
<li><strong>Adjacent property owners</strong> who are part of the same scheme of restrictions — Virginia courts have allowed neighboring owners to enforce restrictions when they are part of a uniform development scheme, even without the HOA's involvement</li>
</ul>

Government agencies do not enforce private deed restrictions — that is the critical distinction from zoning enforcement.

<h3>When Zoning and Deed Restrictions Conflict</h3>

Both zoning and deed restrictions can apply to the same property simultaneously. When they conflict, the more restrictive rule controls. This is a frequently tested exam concept.

<strong>Example</strong>: Zoning permits a two-story building up to 35 feet tall. The CC&Rs limit structures to 25 feet. The CC&Rs are more restrictive, so the owner must comply with the 25-foot limit even though zoning would permit more.

<strong>Example</strong>: CC&Rs permit home-based businesses. Zoning prohibits home-based businesses in the zone. Zoning is more restrictive, so no home-based business is permitted.

<h3>Termination and Unenforceability of Restrictions</h3>

Private deed restrictions can be extinguished by:
<ul>
<li><strong>Expiration</strong>: Some restrictions have stated end dates</li>
<li><strong>Changed conditions</strong>: If the neighborhood has changed so drastically that the restriction no longer serves its original purpose, courts may refuse to enforce it</li>
<li><strong>Abandonment</strong>: Widespread violation of the restriction without enforcement may constitute abandonment</li>
<li><strong>Merger</strong>: If the same party comes to own all properties subject to the restriction</li>
<li><strong>Agreement</strong>: All affected parties can agree in writing to release the restriction</li>
</ul>

<strong>Important</strong>: Racially restrictive covenants (which once appeared in Virginia deeds) are unenforceable and void under federal and Virginia law, though they may still appear as text in older deed chains. They have no legal effect.

<strong>Exam tip</strong>: The key principles are (1) restrictions must be in writing and recorded to run with the land, (2) zoning and CC&Rs both apply — the stricter governs, and (3) private parties (not government) enforce deed restrictions.`,
        },
        {
          slug: 'eminent-domain-condemnation',
          title: 'Eminent Domain & Condemnation',
          lessonType: 'reading',
          estimatedMinutes: 16,
          keyTerms: ['eminent domain', 'condemnation', 'just compensation', 'public use', 'inverse condemnation', 'police power', 'escheat', 'taxation'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Government powers affecting private property — eminent domain, police power, taxation, escheat' },
          ],
          content: `## Eminent Domain, Condemnation, and Government Powers Over Property

Government entities have several inherent powers that can affect private real property ownership. These are not optional tools — they are powers that have existed since before the United States was founded, and they can fundamentally alter what a property owner can do with their land or whether they can keep it at all.

<h3>The Four Government Powers Affecting Real Property</h3>

<ul>
<li><strong>Eminent Domain</strong>: The power to take private property for public use with just compensation</li>
<li><strong>Police Power</strong>: The power to regulate property use to protect public health, safety, and welfare (zoning, building codes, environmental regulations)</li>
<li><strong>Taxation</strong>: The power to assess and collect property taxes; failure to pay can result in loss of the property through tax sale</li>
<li><strong>Escheat</strong>: The power to take ownership of property when an owner dies without heirs and without a will</li>
</ul>

<h3>Eminent Domain</h3>

Eminent domain is the government's constitutional power to take private property for <strong>public use</strong>, provided it pays the owner <strong>just compensation</strong>. The Fifth Amendment to the U.S. Constitution provides: "nor shall private property be taken for public use, without just compensation."

Public use has been interpreted broadly by courts to include roads, schools, utilities, parks, and — after the controversial <em>Kelo v. City of New London</em> (2005) decision — economic development projects. Virginia responded to <em>Kelo</em> by amending its Constitution and statutes to provide stronger protections against purely economic development takings, limiting "public use" more strictly than the federal constitutional minimum.

<h3>The Condemnation Process in Virginia</h3>

When a government entity or utility company (with eminent domain authority) wants to acquire property, the process is:

<ol>
<li><strong>Notice</strong>: The condemning authority notifies the property owner of the intended acquisition and the proposed compensation.</li>
<li><strong>Negotiation</strong>: The authority makes an offer based on an appraisal of fair market value. The owner can negotiate or accept.</li>
<li><strong>Condemnation proceedings</strong>: If no agreement is reached, the authority files a condemnation petition in circuit court. The court appoints commissioners (a panel of citizens) to determine just compensation.</li>
<li><strong>Commissioner's award</strong>: The commissioners hear evidence from appraisers on both sides and issue a report setting just compensation.</li>
<li><strong>Appeal</strong>: Either party may appeal the commissioners' award to the circuit court for a jury trial on the compensation amount.</li>
</ol>

Virginia Code § 25.1-100 et seq. governs the condemnation procedure. The key protection: the government can take the property, but it must pay fair market value — what a willing buyer would pay a willing seller with reasonable knowledge of all relevant facts.

<h3>Partial Takings and Consequential Damages</h3>

The government does not always take an entire property. A <strong>partial taking</strong> occurs when only part of the property is condemned (e.g., a strip along the front for road widening). In a partial taking, the owner is entitled to:
<ul>
<li>Compensation for the value of the land taken</li>
<li><strong>Consequential (severance) damages</strong>: Compensation for any reduction in value to the remainder of the property caused by the taking</li>
</ul>

If a partial taking makes the remaining property more valuable (special benefits), that benefit may offset some compensation.

<h3>Inverse Condemnation</h3>

<strong>Inverse condemnation</strong> occurs when the government takes or damages private property without formally initiating condemnation proceedings. The property owner must sue the government to obtain compensation.

Classic examples:
<ul>
<li>A government infrastructure project permanently floods a nearby property</li>
<li>A government regulation so severely restricts a property's use that it constitutes a "regulatory taking"</li>
<li>Physical occupation of a portion of property without going through formal condemnation</li>
</ul>

The U.S. Supreme Court in <em>Penn Central Transportation Co. v. City of New York</em> established a three-factor test for regulatory takings. A regulation goes too far (becomes a taking requiring compensation) when it: (1) has severe economic impact on the property, (2) interferes with investment-backed expectations, and (3) is not a physical occupation.

<h3>Escheat</h3>

When a person dies intestate (without a will) and has no heirs — no spouse, no children, no parents, and no other family members found through the statutory order of succession — their real property escheats to the Commonwealth of Virginia. Virginia Code § 64.2-1 et seq. governs intestate succession and escheat. Escheat is the government's fallback ownership claim when private ownership chains end.

<strong>Exam tip</strong>: For eminent domain, the two elements are always (1) public use and (2) just compensation. For inverse condemnation, the owner sues the government. Escheat = owner dies with no heirs. Police power = regulation (no compensation required unless it rises to a regulatory taking).`,
        },
      ],
    },
    {
      slug: 'environmental-regulations',
      title: 'Environmental Regulations',
      lessons: [
        {
          slug: 'lead-paint-asbestos-disclosures',
          title: 'Lead Paint, Asbestos & Federal Disclosure Requirements',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['lead-based paint', 'pre-1978', 'HUD/EPA disclosure rule', 'ten-day inspection period', 'asbestos', 'FRIABLE', 'renovation repair painting rule'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Lead paint disclosure requirements — what must be given, when, and to whom?' },
          ],
          content: `## Lead Paint, Asbestos, and Federal Disclosure Requirements

Federal environmental disclosure obligations apply to every residential real estate transaction involving pre-1978 housing. These are not optional disclosures — failure to comply exposes agents and sellers to significant civil and criminal penalties.

<h3>Lead-Based Paint: The Federal Disclosure Rule</h3>

The <strong>Residential Lead-Based Paint Hazard Reduction Act</strong> (Title X of the Housing and Community Development Act of 1992) and its implementing HUD/EPA regulations (24 CFR Part 35, 40 CFR Part 745) require disclosure in the sale or lease of housing built before 1978.

<strong>Why 1978?</strong> The Consumer Product Safety Commission banned lead-based paint in residential housing effective in 1978. Any home built before that date may contain lead-based paint.

<h3>What Sellers and Agents Must Do</h3>

For all residential sales of pre-1978 housing (with limited exceptions), the seller must:

<ol>
<li><strong>Disclose all known lead-based paint hazards</strong> in the property</li>
<li><strong>Provide available records and reports</strong>: Any existing lead inspection reports, risk assessments, or paint testing results must be provided to the buyer</li>
<li><strong>Provide an EPA-approved informational pamphlet</strong>: "Protect Your Family from Lead in Your Home" — the current HUD/EPA publication</li>
<li><strong>Include a lead-based paint disclosure addendum</strong> in the purchase contract, signed by seller, buyer, and both agents</li>
</ol>

The listing agent must ensure the seller fulfills these obligations and must retain a copy of the signed disclosure for <strong>3 years</strong> from the sale date.

<h3>The Buyer's 10-Day Inspection Right</h3>

Buyers of pre-1978 housing have a <strong>statutory right to conduct a lead-based paint inspection or risk assessment</strong> for up to <strong>10 days</strong> after the contract is ratified. This right can be waived by the buyer in writing, but it cannot be eliminated by the seller.

Key points:
<ul>
<li>The 10-day period can be shortened or lengthened by agreement between the parties</li>
<li>The buyer can waive the right entirely (common in competitive markets)</li>
<li>If the buyer conducts an inspection and finds lead, it creates a negotiation point — it does not automatically void the contract</li>
</ul>

<h3>Exemptions from Lead Paint Disclosure</h3>

The federal rule does <strong>not</strong> apply to:
<ul>
<li>Housing built in 1978 or later</li>
<li>Housing for the elderly or persons with disabilities (where no children under 6 will reside)</li>
<li>Foreclosure sales</li>
<li>Sales of zero-bedroom units (efficiency apartments, studio hotels) — note this is a narrow exemption</li>
</ul>

<strong>Penalties for non-compliance</strong>: Civil penalties up to $11,000 per violation, and criminal penalties for willful violations. Sellers and agents can both be held liable.

<h3>Asbestos</h3>

Asbestos is a naturally occurring mineral once widely used in building materials for its fire resistance and insulating properties. It was common in homes built before 1980 in: insulation around pipes and heating systems, floor tiles (vinyl asbestos tiles), ceiling tiles, roofing shingles, textured paints, and joint compound.

<strong>Friable vs. Non-Friable Asbestos</strong>:
<ul>
<li><strong>Friable asbestos</strong>: Can be crumbled or powdered by hand pressure. In this condition, fibers are released into the air and pose health risks (mesothelioma, asbestosis). Friable asbestos requires professional abatement.</li>
<li><strong>Non-friable asbestos</strong>: Bonded into materials (floor tiles, shingles) and does not release fibers under normal conditions. Often managed in place rather than removed.</li>
</ul>

There is no federal law requiring residential sellers to disclose asbestos, but Virginia's general disclosure obligations (material facts) require disclosure of known asbestos hazards. The Virginia Residential Property Disclosure Act's "no representation" option does not shield a seller who actually knows about a hazardous asbestos condition.

<h3>EPA Renovation, Repair and Painting (RRP) Rule</h3>

The EPA's RRP Rule requires contractors performing renovation, repair, or painting work in pre-1978 homes, child-occupied facilities, or schools to be EPA-certified and to follow specific lead-safe work practices. As an agent, you are not performing renovations — but advising buyer clients who plan to renovate a pre-1978 home to hire RRP-certified contractors is part of your duty of reasonable care.

<strong>Exam tip</strong>: Lead paint disclosure applies to pre-1978 housing. The two key numbers are the year (1978) and the inspection window (10 days). Agents retain signed disclosure forms for 3 years. Asbestos in friable condition is a material fact requiring disclosure under Virginia law even though federal law does not mandate it.`,
        },
        {
          slug: 'wetlands-flood-zones',
          title: 'Wetlands, Flood Zones & Environmental Hazards',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['FEMA flood zone', 'NFIP', 'mandatory flood insurance', 'wetlands', 'Army Corps of Engineers', 'Section 404 permit', 'brownfield', 'underground storage tank'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer\'s lender requires flood insurance. The buyer asks why their neighbor in the same subdivision does not need it. Explain flood zone designations.' },
          ],
          content: `## Wetlands, Flood Zones, and Environmental Hazards

Environmental conditions can dramatically affect a property's value, usability, and insurability. Agents who understand flood zones, wetlands, and environmental hazards provide real value to their clients — and agents who overlook these issues create significant liability exposure.

<h3>FEMA Flood Zones and the National Flood Insurance Program</h3>

FEMA (Federal Emergency Management Agency) maps flood risk across the country through Flood Insurance Rate Maps (FIRMs). Every property is assigned a flood zone designation based on its probability of flooding.

<strong>Key flood zone designations:</strong>
<ul>
<li><strong>Zone X (or Zone C)</strong>: Minimal flood hazard, outside the 500-year floodplain. No flood insurance required by lenders.</li>
<li><strong>Zone AE (Special Flood Hazard Area — SFHA)</strong>: High risk; within the 100-year floodplain (1% annual chance of flooding). Base Flood Elevation (BFE) has been determined.</li>
<li><strong>Zone A</strong>: High risk; 100-year floodplain but no BFE determined.</li>
<li><strong>Zone VE</strong>: Coastal high-hazard area with wave action and storm surge risk.</li>
<li><strong>Zone AH / AO</strong>: Areas of shallow flooding (ponding or sheet flow).</li>
</ul>

<strong>Mandatory Purchase Requirement</strong>: Federally backed mortgages (FHA, VA, conventional loans sold to Fannie/Freddie) on properties in a Special Flood Hazard Area (Zones A and V) require the borrower to purchase National Flood Insurance Program (NFIP) flood insurance as a condition of the loan. This is mandatory — not optional.

<strong>NFIP coverage limits</strong>:
<ul>
<li>Residential structure: up to $250,000</li>
<li>Contents: up to $100,000</li>
<li>Policies are written through private insurance agents but backed by the federal government</li>
</ul>

<h3>Flood Zone Disclosure in Virginia</h3>

Virginia's Residential Property Disclosure Act requires sellers to disclose whether the property is in a Special Flood Hazard Area. As an agent, you should:
<ul>
<li>Check the FEMA flood map (available at msc.fema.gov) for any property you list or help a buyer purchase</li>
<li>Advise clients in or near flood zones to obtain an Elevation Certificate from a licensed surveyor</li>
<li>Know that flood insurance costs can be substantial and can significantly affect affordability calculations</li>
</ul>

<h3>Wetlands</h3>

Wetlands are areas where water saturates the soil to the surface — marshes, swamps, bogs, and similar areas. The federal government protects wetlands under Section 404 of the Clean Water Act, administered by the U.S. Army Corps of Engineers.

<strong>What this means for property owners:</strong>
<ul>
<li>Any dredging, filling, or development activity in wetlands requires a <strong>Section 404 permit</strong> from the Army Corps of Engineers</li>
<li>Permits can take months or years to obtain and may be denied</li>
<li>Unauthorized filling of wetlands can result in mandatory restoration and significant civil penalties</li>
</ul>

Virginia also regulates wetlands under the Virginia Water Protection Permit program administered by the Virginia Department of Environmental Quality (DEQ). Development near Virginia tidal and non-tidal wetlands requires state permits in addition to federal permits.

<strong>Practical impact</strong>: A property with significant wetland coverage may have severely limited development potential even if it is zoned for residential use. Always determine the extent of wetlands on properties being evaluated for development potential.

<h3>Underground Storage Tanks (USTs)</h3>

Properties that once housed gas stations, dry cleaners, or industrial uses may have underground storage tanks (USTs) containing fuel, solvents, or other hazardous materials. Leaking USTs can contaminate soil and groundwater, requiring expensive cleanup under federal (EPA) and Virginia DEQ regulations.

Sellers must disclose known USTs as material facts. When working with commercial or former commercial properties, recommend a Phase I Environmental Site Assessment before purchase.

<h3>Brownfields</h3>

A <strong>brownfield</strong> is a property where the presence (or potential presence) of a hazardous substance, pollutant, or contaminant complicates its redevelopment. Former industrial sites, gas stations, and manufacturing properties are common brownfields.

Virginia's Voluntary Remediation Program (VRP) allows property owners to clean up contaminated sites and receive a Certificate of Completion that limits future liability — an important tool for brownfield redevelopment.

<strong>Exam tip</strong>: For flood zones, the mandatory purchase requirement applies to all federally backed loans on SFHA properties. Section 404 permits are required for wetlands development. Wetlands and flood zones both represent material facts that must be disclosed in Virginia transactions.`,
        },
        {
          slug: 'mold-radon-environmental-site-assessment',
          title: 'Mold, Radon & Phase I/II Environmental Assessments',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['mold', 'radon', 'picocuries per liter', 'EPA action level', 'Phase I assessment', 'Phase II assessment', 'CERCLA', 'innocent landowner defense'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Environmental assessment phases — what each covers and when required' },
          ],
          content: `## Mold, Radon, and Phase I/II Environmental Site Assessments

Three environmental issues come up repeatedly in Virginia real estate practice — mold, radon, and environmental contamination requiring professional site assessment. Knowing what agents must disclose, what they can advise, and when to bring in experts protects clients and limits professional liability.

<h3>Radon</h3>

Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It seeps up through foundations and accumulates inside buildings, where it can reach hazardous concentrations. Radon is the second leading cause of lung cancer in the U.S. after smoking.

<strong>Virginia radon context</strong>: Virginia has elevated radon levels in many areas, particularly in the western Piedmont, the Blue Ridge, and Shenandoah Valley regions where granite and uranium-bearing rock formations are common. The Northern Virginia and central Virginia areas also have elevated risks.

<strong>EPA action level</strong>: The EPA recommends mitigation when radon levels reach <strong>4.0 picocuries per liter (pCi/L)</strong> or higher. Testing is strongly encouraged when levels approach 2.0 pCi/L.

<strong>Testing and mitigation:</strong>
<ul>
<li>Short-term tests (charcoal canisters, 2-7 days) are used for initial screening</li>
<li>Long-term tests (90+ days) provide more accurate average levels</li>
<li>Mitigation typically involves a sub-slab depressurization system (a pipe and fan that vents radon from beneath the foundation to the outside) — cost typically $800-$1,500</li>
</ul>

<strong>Virginia disclosure</strong>: No Virginia law requires sellers to disclose radon test results, but known elevated radon levels are a material fact that should be disclosed. Many purchase agreements in Virginia include a radon testing contingency. Best practice for agents representing buyers: always recommend radon testing, especially for basement homes in higher-risk areas.

<h3>Mold</h3>

Mold is not regulated by a specific federal or state statute in the residential real estate context the way lead paint is. However, known mold growth is a material fact that must be disclosed in Virginia transactions.

<strong>What agents need to know:</strong>
<ul>
<li>Mold requires moisture — it is typically a symptom of a water intrusion problem (roof leaks, foundation seepage, plumbing failures, condensation)</li>
<li>Visible mold, musty odors, or a history of water damage are all material facts</li>
<li>The Virginia Residential Property Disclosure Act requires sellers to disclose known material facts, which includes known mold conditions</li>
<li>Sellers cannot conceal mold by painting over it and claiming no representation — concealment with intent to deceive constitutes fraud</li>
</ul>

<strong>Recommendations for agents:</strong>
<ul>
<li>Encourage buyers to have inspectors check for moisture intrusion and visible mold</li>
<li>When a seller discloses past water damage, advise buyers to test for mold before removing the inspection contingency</li>
<li>Mold remediation costs vary widely — minor mold in a single area can cost $500, while a major whole-house mold event can cost $10,000 to $30,000 or more</li>
</ul>

<h3>Phase I Environmental Site Assessments</h3>

A <strong>Phase I Environmental Site Assessment (ESA)</strong> is a professional report that evaluates whether a property has conditions indicating the presence of hazardous substances or petroleum contamination. Phase I assessments are governed by ASTM International standards (ASTM E1527-21).

<strong>When required:</strong>
<ul>
<li>Almost always required for commercial property purchases</li>
<li>Required by most commercial lenders as a condition of financing</li>
<li>Strongly recommended for any property with a history of industrial, commercial, or agricultural use</li>
<li>Not typically performed on single-family residential purchases, but can be warranted for rural properties with fuel storage tanks or farms with pesticide application history</li>
</ul>

<strong>What Phase I includes:</strong>
<ul>
<li>Review of government records (EPA databases, state environmental agency databases, underground storage tank registries)</li>
<li>Site inspection by a qualified environmental professional</li>
<li>Review of historical records (aerial photos, fire insurance maps, chain-of-title review)</li>
<li>Interviews with owners, occupants, and nearby residents</li>
</ul>

The Phase I report identifies <strong>Recognized Environmental Conditions (RECs)</strong> — situations where contamination may be present and further investigation is warranted.

<h3>Phase II Environmental Site Assessment</h3>

A <strong>Phase II ESA</strong> is triggered when a Phase I identifies RECs. Phase II involves actual sampling: soil borings, groundwater monitoring wells, and laboratory analysis of samples to confirm whether contamination exists and at what levels.

<h3>CERCLA and the Innocent Landowner Defense</h3>

The Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA — also called Superfund) imposes liability for hazardous substance cleanup on property owners, regardless of fault. An owner who buys contaminated property can become liable for cleanup even if they did not cause the contamination.

The <strong>Innocent Landowner Defense</strong> protects buyers who conducted <strong>All Appropriate Inquiries (AAI)</strong> before purchase — i.e., had a Phase I ESA performed — and had no knowledge of contamination. Without a Phase I, there is no innocent landowner defense.

<strong>Exam tip</strong>: The EPA radon action level is 4 pCi/L. Mold is a material fact requiring disclosure in Virginia even without a specific mold statute. Phase I ESAs protect commercial buyers under CERCLA's innocent landowner defense.`,
        },
      ],
    },
  ],
}

// ── Module 3: Contracts & Agency ─────────────────────────────────────────────

const module3: CourseModule = {
  slug: 'contracts-agency',
  title: 'Contracts & Agency',
  subtitle: 'Contract law fundamentals, purchase agreements, and the offer process',
  examWeight: '19% of national exam — CRITICAL',
  chapters: [
    {
      slug: 'contract-fundamentals',
      title: 'Contract Fundamentals',
      lessons: [
        {
          slug: 'essential-elements-valid-contract',
          title: 'Essential Elements of a Valid Contract',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: ['offer', 'acceptance', 'consideration', 'legal capacity', 'lawful object', 'mutual assent', 'void', 'voidable', 'unenforceable'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Six essential elements of a contract — can you name them all?' },
            { type: 'mini_quiz', prompt: 'Is this contract valid, void, voidable, or unenforceable?' },
          ],
          content: `## Essential Elements of a Valid Contract

Contract law is the foundation of every real estate transaction. A purchase agreement, a listing agreement, a lease — all of these are contracts, and understanding what makes a contract valid, and what happens when elements are missing, is the most tested area on the national exam.

<h3>The Six Essential Elements</h3>

For a real estate contract to be valid and enforceable, all six elements must be present:

<h3>1. Offer</h3>

An offer is a proposal by one party (the offeror) to another (the offeree) to enter into a contract on specific terms. A valid offer must:
<ul>
<li>Be definite and certain in its terms (price, property, parties)</li>
<li>Be communicated to the offeree</li>
<li>Demonstrate the offeror's intent to be bound if accepted</li>
</ul>

An offer can be revoked any time before acceptance, even if the offeror promised to keep it open (unless consideration was paid to hold the offer — that creates an option contract).

<h3>2. Acceptance</h3>

Acceptance must be <strong>unconditional and mirror the terms of the offer exactly</strong>. This is the <strong>mirror image rule</strong>: an acceptance that changes any term of the offer is not an acceptance — it is a counteroffer, which voids the original offer.

Acceptance must be communicated to the offeror. An acceptance that happens only in the offeree's mind is not effective. In Virginia real estate, acceptance typically occurs when the signed contract is delivered to the offeror or their agent.

<h3>3. Consideration</h3>

Consideration is something of legal value exchanged between the parties. It can be:
<ul>
<li>Money (the purchase price)</li>
<li>A promise to pay money (a promissory note)</li>
<li>An act or forbearance (agreeing to do something you are not otherwise obligated to do)</li>
</ul>

Consideration does not have to be equal in value — courts will not rescind a contract simply because someone made a bad deal. Consideration must be real, not illusory ("I'll pay you whatever I feel like" is not consideration).

<strong>Earnest money</strong>: Earnest money is often described as consideration for a purchase agreement, but technically the mutual promises to buy and sell are the consideration. Earnest money is evidence of the buyer's seriousness and provides the seller a remedy in case of buyer default — but a contract without earnest money can still be valid if mutual promises are exchanged.

<h3>4. Legal Capacity</h3>

Both parties must have the legal capacity to enter the contract. Capacity issues arise when:
<ul>
<li><strong>Minors (under 18 in Virginia)</strong>: Contracts with minors are <em>voidable</em> at the minor's option, not void. A minor can enter a contract but can disaffirm (cancel) it before reaching 18 or within a reasonable time after.</li>
<li><strong>Mental incapacity</strong>: A person who lacks the mental capacity to understand the nature and consequences of the contract cannot form a valid contract. Contracts with an incompetent party are voidable (or void if a court has declared them incompetent and appointed a guardian).</li>
<li><strong>Intoxication</strong>: A contract entered while a party was sufficiently intoxicated may be voidable at that party's option when sober.</li>
</ul>

<h3>5. Lawful Object (Legal Purpose)</h3>

The subject matter and purpose of the contract must be legal. A contract to sell stolen property, or a listing agreement that obligates the agent to assist in illegal discrimination, is void as against public policy.

<h3>6. Mutual Assent (Meeting of the Minds)</h3>

Both parties must genuinely agree to the same terms with the same understanding. Mutual assent can be undermined by:
<ul>
<li><strong>Fraud</strong>: One party intentionally misrepresented a material fact to induce the other to contract</li>
<li><strong>Misrepresentation</strong>: False statement of material fact, even if innocent</li>
<li><strong>Duress</strong>: One party was coerced into contracting by threats or force</li>
<li><strong>Undue influence</strong>: One party was in a position of dominance and exploited that influence to overcome the other's free will</li>
<li><strong>Mutual mistake</strong>: Both parties were mistaken about a material fact at the time of contracting</li>
</ul>

<h3>Contract Validity Classifications</h3>

<ul>
<li><strong>Valid</strong>: All elements present; fully enforceable by both parties</li>
<li><strong>Void</strong>: No contract exists; has no legal effect. Example: a contract for an illegal purpose, or a contract with no consideration whatsoever</li>
<li><strong>Voidable</strong>: A valid contract that one party has the right to cancel. The party with the option to void can affirm or disaffirm. Example: a contract with a minor, or a contract induced by fraud</li>
<li><strong>Unenforceable</strong>: Valid in all its elements but cannot be enforced because of a procedural defect. Example: an oral real estate contract that should have been in writing under the Statute of Frauds</li>
</ul>

<strong>Exam tip</strong>: Void and voidable are the most tested distinction. Void = no contract, neither party can enforce it. Voidable = one party can cancel it. A contract with a minor is voidable (not void) — the minor can enforce it against the adult, but the adult cannot enforce it against the minor.`,
        },
        {
          slug: 'statute-of-frauds-real-estate',
          title: 'Statute of Frauds & Writing Requirements',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['statute of frauds', 'writing requirement', 'electronic signature', 'UETA', 'ESIGN', 'partial performance exception', 'promissory estoppel'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Which real estate agreements must be in writing under Virginia law?' },
          ],
          content: `## The Statute of Frauds and Writing Requirements in Real Estate

The Statute of Frauds is one of the oldest legal doctrines in American property law — and one of the most practically important rules for real estate agents. It requires certain contracts to be in writing to be enforceable. If a real estate agreement isn't in writing, and a party walks away, you may have no legal remedy.

<h3>What Is the Statute of Frauds?</h3>

The Statute of Frauds originated in England in 1677 to prevent fraud through false testimony about oral agreements. Virginia's version is codified at <strong>Virginia Code § 11-2</strong>, which requires that certain contracts be "in writing and signed by the party to be charged" to be enforceable.

<h3>Real Estate Contracts That Must Be in Writing</h3>

Under Virginia law and the national standard, the following real estate contracts must be in writing:
<ul>
<li><strong>Contracts for the sale of real property</strong> (purchase agreements)</li>
<li><strong>Leases for more than one year</strong>: Short-term leases (month-to-month or less than one year) do not need to be in writing under the Statute of Frauds, but best practice is always to use written leases</li>
<li><strong>Listing agreements and buyer representation agreements</strong>: Virginia real estate regulations separately require these be in writing</li>
<li><strong>Options to purchase real estate</strong></li>
<li><strong>Contracts to pay a real estate commission</strong>: An oral promise to pay an agent a commission for services is generally unenforceable</li>
</ul>

<h3>What the Writing Must Contain</h3>

To satisfy the Statute of Frauds, the written contract must:
<ul>
<li>Identify the parties (buyer and seller, or landlord and tenant)</li>
<li>Describe the property with reasonable certainty (a legal description or address sufficient to identify the specific property)</li>
<li>State the price or consideration</li>
<li>Be signed by the party against whom enforcement is sought ("the party to be charged")</li>
</ul>

Note: The Statute of Frauds only requires the signature of the party being sued, not both parties. If a buyer wants to enforce a purchase agreement against a seller, the seller's signature on the contract satisfies the Statute — the buyer's own signature is not technically required for this purpose (though practical contracts always have both signatures).

<h3>Electronic Signatures</h3>

Electronic signatures are legally valid and enforceable for real estate contracts under two federal statutes:

<ul>
<li><strong>UETA (Uniform Electronic Transactions Act)</strong>: Adopted by Virginia (Virginia Code § 59.1-479 et seq.); gives electronic signatures the same legal effect as handwritten signatures for contracts within its scope</li>
<li><strong>ESIGN (Electronic Signatures in Global and National Commerce Act)</strong>: Federal law that applies to interstate electronic transactions and provides a federal floor of electronic signature validity</li>
</ul>

DocuSign, dotloop, and similar platforms create legally enforceable electronic signatures. An email exchange where a party types their name or clicks "I agree" can constitute an electronic signature under certain circumstances.

<h3>Exceptions to the Writing Requirement</h3>

Courts have carved out two main exceptions to the Statute of Frauds — allowing enforcement of oral contracts in limited circumstances:

<strong>Part Performance</strong>: When a party has substantially performed under an oral contract, courts may enforce it even without a writing. The classic example: a buyer pays the purchase price, takes possession, and makes improvements to the property under an oral agreement. The seller cannot void the transaction by citing the Statute of Frauds after the buyer has partially performed. The performance must be clearly referrable to the contract.

<strong>Promissory Estoppel</strong>: If one party made a clear promise, the other party reasonably relied on that promise to their detriment, and injustice can only be avoided by enforcing the promise — courts may enforce the oral promise. This is an equitable remedy, available at the court's discretion.

<h3>The Parol Evidence Rule — Preview</h3>

Closely related to the Statute of Frauds: once a written contract is finalized (integrated), the <strong>parol evidence rule</strong> prohibits introducing prior oral or written statements to change the meaning of the final written contract. Everything agreed upon must be in the four corners of the document. This is why agents are taught: "If it's not in writing, it doesn't exist."

<strong>Exam tip</strong>: Leases for one year or less do NOT need to be in writing under the Statute of Frauds (though Virginia law and best practice call for written leases in virtually all circumstances). Contracts for the sale of real estate always do. Electronic signatures are fully valid.`,
        },
        {
          slug: 'contract-performance-conditions',
          title: 'Contract Performance & Conditions',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: ['condition precedent', 'condition subsequent', 'contingency', 'time is of the essence', 'substantial performance', 'tender of performance'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A contract has a financing contingency that expires June 15. The buyer has not received loan approval. What are their options?' },
            { type: 'drag_drop', prompt: 'Sort contract clauses into conditions precedent, conditions subsequent, and contingencies' },
          ],
          content: `## Contract Performance, Conditions, and Contingencies

Not all contract obligations are absolute. Real estate contracts are filled with conditions — events that must occur before a party is obligated to perform. Understanding how conditions work, and what happens when they are not satisfied, is essential for managing Virginia transactions.

<h3>Conditions Precedent vs. Conditions Subsequent</h3>

<strong>Condition precedent</strong>: An event that must occur <em>before</em> a party's performance obligation arises. Most contingencies in a purchase agreement are conditions precedent — the buyer is not obligated to close unless and until the condition is satisfied.

Examples:
<ul>
<li>Financing contingency: The buyer's obligation to close is conditioned on receiving mortgage approval by a specified date</li>
<li>Inspection contingency: The buyer's obligation is conditioned on satisfactory inspection results (or waiver of the right to inspect)</li>
<li>Sale of prior home contingency: The buyer's obligation is conditioned on successfully closing the sale of their current home</li>
</ul>

<strong>Condition subsequent</strong>: An event that occurs <em>after</em> a contract is formed that can terminate one party's obligation. Less common in standard purchase agreements, but present in certain commercial transactions. Example: A developer's obligation to proceed is conditioned on not occurring — if a rezoning is denied within 90 days, the contract terminates.

<h3>Contingencies in Virginia Purchase Agreements</h3>

Contingencies are conditions precedent written into purchase agreements that give one party (usually the buyer) the right to exit the contract without default if the contingency is not satisfied.

<strong>Key contingency concepts:</strong>
<ul>
<li>Each contingency has a <strong>deadline</strong> — a date by which the condition must be satisfied or the contingency must be properly exercised</li>
<li>If the deadline passes without action, the contingency may be <strong>waived</strong> — the buyer loses the right to exit based on that condition</li>
<li>To properly exercise a contingency (exit the contract), the buyer typically must provide written notice to the seller before the deadline</li>
<li>When a contingency is properly exercised, the earnest money is returned to the buyer</li>
</ul>

<strong>Common Virginia purchase agreement contingencies:</strong>
<ul>
<li>Financing contingency (most common)</li>
<li>Home inspection contingency</li>
<li>Home sale contingency</li>
<li>Appraisal contingency</li>
<li>Radon testing contingency</li>
<li>Well and septic inspection contingency (for properties with private systems)</li>
<li>HOA/condo disclosure review contingency (not technically a contingency — it's a statutory right)</li>
</ul>

<h3>Time Is of the Essence</h3>

In contracts where <strong>"time is of the essence"</strong> is specified, every deadline is a material term. Missing a deadline by even one day is a material breach of contract, giving the other party the right to terminate and seek damages.

In Virginia real estate contracts, most standard forms include or imply time is of the essence provisions. This means:
<ul>
<li>The financing contingency deadline is not a suggestion — failing to provide written notice of denial before the deadline can cost the buyer their earnest money</li>
<li>The settlement date is not a target — failure to close on the specified date can put either party in breach</li>
<li>Inspection response deadlines must be met</li>
</ul>

When genuine circumstances require an extension (delayed loan processing, title issues), the parties should execute a written addendum extending the affected deadline before the original deadline passes.

<h3>Tender of Performance</h3>

<strong>Tender</strong> means offering or being ready to perform your contractual obligations. A buyer tenders performance by appearing at closing with the required funds. A seller tenders by appearing with a signed deed and a property in the agreed condition.

Tender is important when one party claims the other is in breach. If the buyer doesn't close, but the seller also never tendered a clear title or never appeared at closing, the seller cannot successfully claim buyer breach. Each party must be ready and willing to perform before they can claim the other is in default.

<h3>Substantial Performance</h3>

<strong>Substantial performance</strong> is a doctrine that prevents forfeiture when a party has performed almost all of their contractual obligations but not perfectly. In residential real estate, the doctrine matters most in construction contracts — a contractor who has substantially completed work cannot be denied all payment simply because of minor deficiencies.

In standard residential purchase agreements, the performance expected is either/or: the buyer either closes or doesn't. Substantial performance as a defense to breach is more relevant in construction and lease contexts than in standard sales.

<strong>Exam tip</strong>: Know the difference between conditions precedent (must happen before performance is required) and conditions subsequent (termination triggers after contract formation). Know that "time is of the essence" makes every deadline material. And know that a party must tender performance before they can claim the other is in breach.`,
        },
        {
          slug: 'contract-interpretation-principles',
          title: 'Contract Interpretation Principles',
          lessonType: 'reading',
          estimatedMinutes: 16,
          keyTerms: ['parol evidence rule', 'integration clause', 'ambiguity', 'contra proferentem', 'four corners rule', 'course of dealing', 'merger doctrine'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Rules of contract interpretation — how courts resolve ambiguous contract language' },
          ],
          content: `## Contract Interpretation Principles

When a contract dispute arises, courts follow established rules for interpreting the contract's meaning. Understanding these rules helps agents draft clearer agreements and advise clients more accurately when disagreements arise.

<h3>The Four Corners Rule</h3>

Courts interpret contracts by looking at the <strong>four corners of the document</strong> — the written agreement itself. When contract language is clear and unambiguous, courts enforce it as written without looking to outside evidence of what the parties may have intended. The plain meaning of unambiguous language controls.

<h3>The Parol Evidence Rule</h3>

The <strong>parol evidence rule</strong> prohibits introducing prior or contemporaneous oral or written statements to contradict, vary, or add to the terms of a fully integrated written contract.

<strong>Why this matters for real estate agents:</strong>
<ul>
<li>If a seller verbally promises to leave the refrigerator, but the contract says "refrigerator excluded," the buyer cannot enforce the oral promise in court</li>
<li>If a buyer and seller verbally agreed to a closing date extension but did not put it in writing, neither can enforce the oral extension</li>
<li>Any agreed modification to a real estate contract must be in a signed written addendum to be enforceable</li>
</ul>

<strong>Exceptions to the parol evidence rule</strong> — prior or extrinsic evidence IS admissible when:
<ul>
<li>Showing that the contract itself is void or voidable (fraud, mistake, incapacity)</li>
<li>Explaining a <em>latent ambiguity</em> — a term that appears clear on its face but becomes ambiguous when applied to the actual facts</li>
<li>Showing that a written term was the result of a mutual mistake</li>
<li>Establishing a condition precedent to the contract's effectiveness (not a term within the contract)</li>
</ul>

<h3>Integration Clauses</h3>

An <strong>integration clause</strong> (also called a merger clause) is a contractual provision stating that the written contract represents the entire agreement between the parties and supersedes all prior negotiations, representations, and agreements. Standard Virginia purchase agreement forms include language to this effect.

When an integration clause is present, the parol evidence rule is strengthened — courts treat the contract as fully integrated, making it even harder to introduce outside evidence.

<h3>Resolving Ambiguity: Key Interpretation Rules</h3>

When contract language is genuinely ambiguous (can reasonably be interpreted in more than one way), courts apply interpretation rules:

<strong>Contra proferentem</strong>: Ambiguous language is interpreted against the party who drafted it. A standard form prepared by a brokerage association would be construed against that association if ambiguous. This principle encourages careful drafting.

<strong>Specific over general</strong>: When a specific provision and a general provision conflict, the specific provision controls. If a contract says "property sold with all appliances" generally, but a specific addendum excludes the refrigerator, the specific exclusion controls.

<strong>Handwritten over printed</strong>: In standard form contracts, handwritten additions (or typed additions to standard forms) take precedence over pre-printed language. The handwritten additions reflect the parties' specific, negotiated agreement.

<strong>Course of dealing</strong>: In interpreting ambiguous terms, courts may look at how the parties have treated similar terms in prior dealings — relevant mainly in commercial or recurring business relationships.

<h3>The Merger Doctrine in Real Estate</h3>

The <strong>merger doctrine</strong> holds that when a real estate transaction closes, the purchase contract merges into the deed. All provisions of the purchase contract are extinguished at closing, and the parties' rights and obligations are governed by the deed and other closing documents.

Practical consequence: If the contract said the seller would make certain repairs but the deed says nothing about it, and the transaction closes without the repairs being made, the buyer may have lost the right to enforce that obligation post-closing.

<strong>Exception</strong>: Provisions that the parties intend to survive closing (post-closing indemnification clauses, specific repair obligations, purchase price adjustments) must be expressly stated to survive — either in the contract or in a separate agreement at closing.

<strong>Exam tip</strong>: Parol evidence rule = prior oral/written statements cannot modify a written contract. Integration clause = reinforces parol evidence. Merger doctrine = contract merges into deed at closing. Contra proferentem = ambiguity goes against the drafter.`,
        },
      ],
    },
    {
      slug: 'purchase-agreements',
      title: 'Purchase Agreements',
      lessons: [
        {
          slug: 'virginia-purchase-agreement-anatomy',
          title: 'Anatomy of a Virginia Purchase Agreement',
          lessonType: 'reading',
          estimatedMinutes: 26,
          keyTerms: ['purchase agreement', 'ratification', 'settlement date', 'earnest money deposit', 'personal property', 'fixtures', 'inclusions', 'exclusions'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Key sections of a Virginia residential purchase agreement and what each covers' },
            { type: 'mini_quiz', prompt: 'Fixtures vs. personal property — which items convey with the property?' },
          ],
          content: `## Anatomy of a Virginia Purchase Agreement

The Virginia residential purchase agreement is the most important document in any residential transaction. Whether you use REIN forms in Hampton Roads, NVAR forms in Northern Virginia, the CVR/GVAR forms in the Richmond area, or another regional form, the core structure and key provisions are consistent. Walk through every section with confidence — your clients are counting on you.

<h3>The Parties and Property</h3>

The first section identifies:
<ul>
<li><strong>Buyer(s)</strong>: Full legal name(s) as they will appear on the deed. Married buyers typically take title as tenants by the entireties.</li>
<li><strong>Seller(s)</strong>: The current legal owner(s) exactly as their name appears on the existing deed</li>
<li><strong>Property address and legal description</strong>: The full address and, if available, the legal description from the deed or plat</li>
<li><strong>Personal property inclusions</strong>: Refrigerator, washer/dryer, window treatments, playground equipment — anything to be included must be listed</li>
<li><strong>Exclusions</strong>: Items that are attached to the property but the seller is taking (a dining room chandelier, custom window treatments)</li>
</ul>

<h3>Purchase Price and Financing</h3>

<ul>
<li><strong>Purchase price</strong>: The agreed price in both numbers and words</li>
<li><strong>Earnest money deposit (EMD)</strong>: Amount, who holds it (usually the buyer's broker or a title company), and the deadline for deposit — typically within 3-5 business days of ratification in Virginia</li>
<li><strong>Financing terms</strong>: Whether the purchase is cash or financed, and if financed, the loan type (conventional, FHA, VA, USDA), maximum interest rate, and loan amount</li>
</ul>

<h3>Settlement (Closing) Date</h3>

Virginia purchase agreements specify a <strong>settlement date</strong> — the date the transaction is expected to close, title transfers, and possession changes hands. Standard Virginia contracts typically allow 30-60 day settlement windows.

<strong>Ratification</strong>: The contract is "ratified" when all parties have signed and the signed contract has been communicated back to the offeror. Virginia agents must submit the ratified contract to their broker promptly (VREB regulations require timely submission).

<h3>Contingencies Section</h3>

The contingencies section is where most of the negotiation happens. Standard contingencies include:
<ul>
<li>Financing contingency (loan type, amount, rate cap, deadline)</li>
<li>Home inspection contingency (inspection period, buyer's options after receiving the report)</li>
<li>Appraisal contingency (what happens if the property appraises below purchase price)</li>
</ul>

Each contingency has a deadline. After the deadline, contingencies may expire and the buyer may lose the right to exit based on them.

<h3>Fixtures vs. Personal Property</h3>

One of the most common disputes in Virginia real estate: what stays and what goes?

<strong>Fixture</strong>: Personal property that has been permanently attached to real property and is treated as real property. Fixtures convey with the property unless specifically excluded. The test for whether something is a fixture considers:
<ul>
<li><strong>Method of attachment</strong>: Is it nailed, bolted, cemented, or wired in? The more permanent the attachment, the more likely it is a fixture.</li>
<li><strong>Adaptation to the property</strong>: Was it custom-built or sized specifically for this property?</li>
<li><strong>Intent of the parties</strong>: Did both parties understand it as part of the property?</li>
</ul>

Standard fixtures that convey: Built-in appliances, ceiling fans, light fixtures (with bulbs), window treatments attached to hardware, garage door openers and remotes, outdoor sheds on permanent foundations, HVAC systems.

Items that are often disputed: Washer and dryer (typically personal property), refrigerator (personal property unless listed), bathroom mirrors (often fixtures), television mounts (the mount may be a fixture; the TV is not).

<h3>Prorations and Closing Costs</h3>

The purchase agreement specifies how ongoing expenses (property taxes, HOA dues) will be prorated between buyer and seller at closing, and which closing costs each party will pay.

<h3>Default Provisions</h3>

The contract specifies what happens if either party defaults:
<ul>
<li><strong>Buyer default</strong>: Seller typically retains the earnest money as liquidated damages, unless the contract provides for other remedies</li>
<li><strong>Seller default</strong>: Buyer is typically entitled to return of earnest money and may pursue specific performance (forcing the sale) or damages</li>
</ul>

<h3>Virginia-Specific Requirements</h3>

<ul>
<li><strong>Brokerage relationship disclosure</strong>: Must be attached or incorporated</li>
<li><strong>Lead paint addendum</strong>: Required for pre-1978 homes</li>
<li><strong>HOA/condo disclosure acknowledgment</strong>: If property is subject to POAA or Condominium Act</li>
<li><strong>Residential Property Disclosure Statement</strong>: Seller's disclosure acknowledgment form required under Virginia Code § 55.1-700</li>
</ul>

<strong>Exam tip</strong>: Know the difference between fixtures (convey with the property) and personal property (buyer must negotiate inclusion). Know that ratification occurs when acceptance is communicated back to the offeror. Know that the EMD is typically deposited within 3-5 business days of ratification.`,
        },
        {
          slug: 'financing-contingencies',
          title: 'Financing Contingencies & Loan Approval',
          lessonType: 'scenario',
          estimatedMinutes: 21,
          keyTerms: ['financing contingency', 'loan commitment letter', 'good faith effort', 'appraisal contingency', 'appraisal gap', 'waived appraisal', 'pre-approval'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer has a financing contingency through July 10. On July 8, the lender denies the loan. The seller refuses to release earnest money. Walk through the buyer\'s position.' },
          ],
          content: `## Financing Contingencies and Loan Approval in Virginia Contracts

The financing contingency is the most commonly used and most frequently disputed contingency in Virginia residential real estate. Understanding exactly how it works — and what a buyer must do to properly exercise or waive it — protects your clients from losing their earnest money or their dream home.

<h3>Structure of the Financing Contingency</h3>

A Virginia financing contingency typically specifies:
<ul>
<li>The loan type (conventional, FHA, VA, etc.)</li>
<li>The maximum loan amount</li>
<li>The maximum interest rate the buyer is willing to accept</li>
<li>A deadline by which the buyer must obtain a loan commitment letter (or written denial)</li>
</ul>

If the buyer cannot obtain a loan on the specified terms by the deadline, they have two choices:
<ol>
<li><strong>Exercise the contingency</strong>: Provide written notice to the seller before the deadline that they are terminating the contract due to financing failure. The EMD is returned to the buyer.</li>
<li><strong>Waive the contingency</strong>: Proceed to closing without financing (paying cash), accept different loan terms, or simply let the deadline pass without action.</li>
</ol>

<h3>The Good Faith Effort Requirement</h3>

Most Virginia purchase agreements require the buyer to make a <strong>good faith effort</strong> to obtain financing. This means:
<ul>
<li>Submitting a complete loan application promptly after ratification</li>
<li>Responding promptly to lender requests for documentation</li>
<li>Not voluntarily changing financial circumstances (quitting a job, taking on new debt) that would undermine loan approval</li>
</ul>

If a seller can show that the buyer did NOT make a good faith effort to obtain financing, the seller may argue the buyer is in default and the EMD should be forfeited even if the buyer claims financing failure.

<h3>Pre-Approval vs. Loan Commitment</h3>

<strong>Pre-qualification</strong>: A basic assessment based on self-reported income and debt. No documentation verified. Carries little weight in competitive markets.

<strong>Pre-approval</strong>: A lender has reviewed actual income documentation, credit reports, and assets and has conditionally agreed to lend up to a specified amount. Much stronger, but not a binding commitment.

<strong>Loan commitment letter</strong>: The lender's formal commitment to fund the loan, subject to final conditions (usually appraisal, title, and final employment verification). This is what most Virginia financing contingencies require by the deadline.

<strong>Clear to close (CTC)</strong>: The underwriter has satisfied all conditions and the loan is approved. This happens shortly before closing.

<h3>Appraisal Contingency</h3>

The appraisal contingency protects the buyer if the property appraises below the purchase price. When this happens, the lender will typically only loan based on the appraised value, creating a gap.

<strong>How the appraisal contingency works:</strong>
<ul>
<li>If the property appraises at or above the purchase price: No issue, transaction proceeds</li>
<li>If the property appraises below the purchase price: The buyer can:
  <ul>
    <li>Exercise the contingency and terminate the contract (EMD returned)</li>
    <li>Renegotiate the purchase price with the seller</li>
    <li>Pay an <strong>appraisal gap</strong> — bring additional cash to cover the difference between appraised value and purchase price</li>
    <li>Waive the appraisal contingency (common in competitive markets) — the buyer commits to closing regardless of appraised value</li>
  </ul>
</li>
</ul>

<strong>Waiving the appraisal contingency</strong>: In hot markets, buyers routinely waive the appraisal contingency to make their offers more competitive. This is a significant financial risk — the buyer is committing to pay a price the market may not support. Agents must explain this risk clearly in writing.

<h3>Loan Commitment Deadline — What Happens If It Passes</h3>

If the financing contingency deadline passes without the buyer either:
<ul>
<li>Providing written notice of denial (to exercise the contingency), OR</li>
<li>Providing a commitment letter to the seller (showing compliance)</li>
</ul>

...the contingency is typically deemed waived. The buyer is now committed to close without the protection of the financing contingency. If they later cannot close due to financing, they may forfeit the EMD.

This is the most common way buyers accidentally put their earnest money at risk. Tracking contingency deadlines rigorously is one of the most important practical skills in real estate transactions.

<strong>Exam tip</strong>: To properly exercise a financing contingency, the buyer must provide written notice of loan denial before the deadline. If the deadline passes without action, the contingency is waived. Pre-approval is not the same as a loan commitment.`,
        },
        {
          slug: 'inspection-contingencies',
          title: 'Inspection Contingencies & Negotiating Repairs',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: ['home inspection contingency', 'inspection period', 'repair addendum', 'repair credit', 'as-is addendum', 'material defect', 'reserve the right'],
          interactiveElements: [
            { type: 'scenario', prompt: 'An inspector finds a cracked heat exchanger in the furnace. The seller offers a $500 credit. The buyer wants a new furnace. How should the buyer\'s agent handle this?' },
            { type: 'drag_drop', prompt: 'Organize the inspection contingency timeline from contract ratification to expiration' },
          ],
          content: `## Inspection Contingencies and Negotiating Repairs

The home inspection contingency is where the rubber meets the road in Virginia residential transactions. Nearly every buyer orders an inspection, and the results almost always generate some negotiation. Knowing the process, the buyer's options, and how to negotiate effectively is a daily skill for active Virginia agents.

<h3>The Inspection Contingency Period</h3>

Standard Virginia purchase agreements provide the buyer a specific number of days to:
<ol>
<li>Hire a licensed home inspector and receive an inspection report</li>
<li>Review the results and decide whether to proceed, negotiate, or terminate</li>
<li>Provide written notice of their decision before the deadline</li>
</ol>

In Virginia, the inspection period is typically <strong>7-10 days</strong> from ratification, though this is negotiable. In competitive markets, buyers sometimes offer shorter inspection periods (5 days) to make their offers more attractive.

<h3>What Home Inspectors Do — and Don't Do</h3>

Virginia home inspectors are licensed by DPOR under a separate licensing scheme (Virginia Home Inspector License law). A licensed inspector visually examines accessible components of the property including:
<ul>
<li>Roof (from ground or ladder, accessible areas)</li>
<li>Structural elements (foundation, framing — visible portions)</li>
<li>HVAC systems (tested in operating condition)</li>
<li>Plumbing (visible pipes, fixtures, water heater)</li>
<li>Electrical (panel, visible wiring, outlets, GFCI)</li>
<li>Attic (insulation, ventilation, visible rafters)</li>
<li>Basement/crawlspace (moisture, framing, visible pipes)</li>
</ul>

Inspectors do <strong>not</strong>: open walls, move furniture, test for mold (separate mold inspection), test for radon (separate test), inspect private wells or septic systems (separate inspections required for those), or offer engineering opinions.

<h3>Buyer's Options After Receiving the Inspection Report</h3>

After reviewing the inspection report, Virginia buyers typically have four options under the contract:

<ol>
<li><strong>Accept the property as-is</strong>: Remove the inspection contingency and proceed to closing without requesting repairs or credit</li>
<li><strong>Request repairs</strong>: Submit a written list of requested repairs (usually on a repair addendum) — the seller can agree, counter, or refuse</li>
<li><strong>Request a credit</strong>: Ask the seller to provide a closing cost credit rather than make repairs — often preferred because it avoids repair quality disputes</li>
<li><strong>Terminate the contract</strong>: If the inspection reveals conditions the buyer is unwilling to accept, they can terminate and receive a refund of their EMD (assuming the contingency has not expired)</li>
</ol>

<h3>Material Defect Standard</h3>

Many Virginia purchase agreements use a <strong>material defect</strong> standard — the buyer can only terminate or request repairs based on material defects, not cosmetic issues. A material defect is typically defined as a condition that:
<ul>
<li>Has a significant adverse effect on the property's value</li>
<li>Significantly impairs the health or safety of future occupants</li>
<li>If not repaired, removed, or replaced, significantly shortens the expected useful life of the premises</li>
</ul>

A stained ceiling tile is cosmetic. A roof with only 2-3 years of remaining life and active leak points is a material defect.

<h3>Negotiating the Inspection Response</h3>

<strong>Strategy for buyer's agents:</strong>
<ul>
<li>Prioritize requests — focus on safety items, structural issues, and major mechanical problems. Asking for 47 items generates seller resistance; asking for 5 significant items gets results.</li>
<li>Get contractor estimates before asking for a credit — "Roofer quoted $8,400 for replacement" is a more effective credit request than "buyer requests $10,000."</li>
<li>Know when to walk away vs. when to take a credit and move forward</li>
</ul>

<strong>Strategy for listing agents:</strong>
<ul>
<li>Prepare sellers for likely inspection findings on older homes — pre-inspection conversations prevent transaction failures</li>
<li>Help sellers distinguish between items they must disclose (known material defects) and items the buyer is discovering through their inspection right</li>
<li>Frame repair responses in terms of market data — what would a buyer in this market expect for a home at this price?</li>
</ul>

<h3>As-Is Provisions</h3>

When a seller lists property "as-is," it means the seller will not make repairs and the buyer accepts the property in its current condition. However:
<ul>
<li>As-is does NOT eliminate the inspection contingency unless the buyer specifically waives it</li>
<li>As-is does NOT eliminate the seller's obligation to disclose known material defects</li>
<li>As-is means the buyer cannot demand repairs as a condition of closing — but the buyer can still terminate based on inspection findings if the contingency is in place</li>
</ul>

<strong>Exam tip</strong>: Buyers have four options after inspection: accept as-is, request repairs, request credit, or terminate. As-is does not eliminate disclosure obligations or the buyer's inspection right unless the buyer specifically waives that right.`,
        },
        {
          slug: 'earnest-money-handling',
          title: 'Earnest Money: Handling, Disputes & Default',
          lessonType: 'interactive',
          estimatedMinutes: 20,
          keyTerms: ['earnest money deposit', 'EMD', 'good faith deposit', 'interpleader', 'default by buyer', 'default by seller', 'liquidated damages', 'specific performance'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Who gets the earnest money in each default scenario?' },
            { type: 'scenario', prompt: 'Both buyer and seller claim the earnest money after a failed transaction. What can/should the broker do?' },
          ],
          content: `## Earnest Money: Handling, Disputes, and Default

Earnest money (EMD) is at the center of most transaction disputes. Brokers who mishandle EMD face disciplinary action. Agents who don't understand the default provisions may misadvise clients. This is one of the most practically important and exam-heavy topics in Virginia real estate.

<h3>The Purpose and Nature of Earnest Money</h3>

Earnest money is a <strong>good faith deposit</strong> made by the buyer when a purchase agreement is ratified. It demonstrates the buyer's commitment to the transaction and provides the seller a measure of security.

Technically, earnest money is not consideration for the contract (mutual promises to buy and sell serve as consideration) — but practically, it is how both parties know each other is serious.

<h3>Virginia Requirements for EMD Handling</h3>

<strong>Who holds the EMD:</strong> In Virginia, earnest money is typically held by the buyer's broker (or, by agreement, the listing broker, the title company, or a settlement agent). Wherever it is held, it must go into a properly maintained escrow account.

<strong>Deposit deadline:</strong> The Virginia purchase agreement specifies when the EMD must be deposited. The standard is typically <strong>within 3-5 business days</strong> of ratification. The broker must deposit funds into the escrow account promptly — VREB regulations prohibit holding checks undeposited for an unreasonable time.

<strong>Escrow account requirements:</strong>
<ul>
<li>Must be a federally insured financial institution</li>
<li>Funds must be segregated from the broker's operating account (no commingling)</li>
<li>Records must be maintained for 3 years</li>
</ul>

<h3>What Happens to EMD at Closing</h3>

At a successful closing, the earnest money is credited to the buyer on the settlement statement — it is applied toward the buyer's down payment and/or closing costs. The settlement agent disburses accordingly.

<h3>Default by the Buyer</h3>

If the buyer fails to close without a valid contractual reason (a properly exercised contingency or seller default), the buyer is in <strong>default</strong>. Under most Virginia purchase agreements:

<ul>
<li>The seller has the right to retain the <strong>earnest money as liquidated damages</strong></li>
<li>OR the seller may pursue <strong>specific performance</strong> (a court order requiring the buyer to close)</li>
<li>OR the seller may sue for <strong>actual damages</strong> (the difference between the contract price and what the seller eventually sold for, plus carrying costs)</li>
</ul>

Most residential contracts in Virginia specify that earnest money is the seller's sole remedy as liquidated damages — the seller cannot pursue both the EMD and additional damages.

<h3>Default by the Seller</h3>

If the seller fails to close without a valid reason, the buyer's primary remedies are:
<ul>
<li><strong>Return of EMD</strong>: The buyer is entitled to their earnest money back</li>
<li><strong>Specific performance</strong>: Courts can order a seller to complete the sale because real property is considered unique — money damages may not adequately compensate the buyer. Specific performance is a significant risk sellers face when defaulting.</li>
<li><strong>Damages</strong>: The buyer can sue for increased costs of finding equivalent property, lost financing rate locks, and other actual damages</li>
</ul>

<h3>Disputed EMD: The Broker's Dilemma</h3>

The most difficult situation a broker faces is when both buyer and seller claim the earnest money after a failed transaction. The broker is holding the funds in trust and cannot simply give it to the party they think is right.

<strong>Virginia procedure when EMD is disputed:</strong>
<ol>
<li>The broker must notify both parties of the dispute in writing</li>
<li>The broker must hold the funds until one of the following occurs:
  <ul>
    <li>Both parties sign a written mutual release agreeing on disposition</li>
    <li>A court order is issued directing disbursement</li>
    <li>A VREB-approved arbitration or mediation resolves the dispute</li>
  </ul>
</li>
<li>If neither party takes action and the dispute is not resolved, the broker may file an <strong>interpleader</strong> action in court, depositing the funds with the court and letting the court decide</li>
</ol>

<strong>Critical rule</strong>: A broker who unilaterally disburses disputed EMD to either party without proper authorization faces disciplinary action from VREB, regardless of which party was "right." When in doubt, hold the funds and seek legal guidance or VREB guidance.

<h3>Liquidated Damages vs. Specific Performance</h3>

<strong>Liquidated damages</strong>: A contractually specified sum (the EMD) agreed in advance to represent the damages for default. Courts enforce liquidated damages clauses unless they are a penalty rather than a reasonable pre-estimate of harm.

<strong>Specific performance</strong>: An equitable remedy requiring a party to perform their contractual obligation. Available in real estate because each parcel of land is unique — money cannot adequately substitute for the specific property the buyer wanted.

<strong>Exam tip</strong>: When the buyer defaults, the seller keeps the EMD as liquidated damages. When the seller defaults, the buyer gets the EMD back AND can seek specific performance. The broker cannot give disputed EMD to either party without a signed release or court order.`,
        },
      ],
    },
    {
      slug: 'listing-agreements',
      title: 'Listing Agreements',
      lessons: [
        {
          slug: 'exclusive-right-to-sell',
          title: 'Exclusive Right to Sell vs. Exclusive Agency',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['exclusive right to sell', 'exclusive agency', 'open listing', 'net listing', 'procuring cause', 'protected buyer list', 'extender clause'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Three types of listing agreements — when the broker earns commission under each' },
            { type: 'mini_quiz', prompt: 'Listing agreement type identification quiz' },
          ],
          content: `## Listing Agreement Types: Exclusive Right to Sell, Exclusive Agency, and Open Listings

The listing agreement is the contract between the seller and the broker. Getting it right — choosing the right type, understanding when commission is earned, and knowing what each type means — is fundamental to working with sellers.

<h3>Exclusive Right to Sell</h3>

The <strong>exclusive right to sell</strong> is the most common listing type in Virginia and the dominant form nationwide. Under this agreement:

<ul>
<li>The listing broker is the <strong>only</strong> authorized broker to market the property for the listing period</li>
<li>The listing broker earns a commission if the property sells during the listing period — <strong>regardless of who procures the buyer</strong></li>
<li>Even if the seller finds their own buyer (without any agent involvement), the listing broker is still owed the agreed commission</li>
</ul>

<strong>Why sellers agree to this</strong>: The exclusive right to sell gives the broker the strongest possible protection, which motivates the broker to invest in marketing, staging, professional photography, and active promotion. Brokers take their most enthusiastic efforts to listings where they are guaranteed payment.

<strong>Why this is preferred for exam purposes</strong>: Every exam scenario involving a listing agreement unless otherwise specified should be analyzed as an exclusive right to sell.

<h3>Exclusive Agency</h3>

An <strong>exclusive agency</strong> listing gives the broker exclusive marketing rights for the listing period, but with a critical exception:

<ul>
<li>The broker earns a commission if the property is sold by the broker OR by any other broker</li>
<li><strong>Exception</strong>: If the seller personally finds a buyer without any agent's assistance, the seller can sell without paying a commission</li>
</ul>

This arrangement creates an incentive problem: the seller can undercut the broker's efforts by approaching known interested parties directly, potentially cutting out the commission. As a result, exclusive agency listings are less common — brokers are less motivated to invest heavily when the seller can swoop in and close without paying.

<h3>Open Listing</h3>

An <strong>open listing</strong> is a non-exclusive agreement that allows the seller to list the property with multiple brokers simultaneously:

<ul>
<li>Only the broker who is the <strong>procuring cause</strong> of the sale earns a commission</li>
<li>If the seller sells the property themselves, no commission is owed to anyone</li>
<li>Multiple brokers can be working simultaneously</li>
</ul>

Open listings are rarely used in residential transactions because:
<ul>
<li>No broker has exclusive rights, so none is motivated to invest heavily in marketing</li>
<li>Ambiguity about who is the procuring cause leads to commission disputes</li>
<li>Most MLS systems require at least an exclusive agency listing for MLS submission</li>
</ul>

Open listings are more common in commercial real estate where sellers want broad exposure through multiple commercial brokers.

<h3>Net Listings — PROHIBITED in Virginia</h3>

A <strong>net listing</strong> is an arrangement where the broker's compensation is any amount the sale price exceeds a minimum net to the seller. Example: "Sell my house for at least $350,000 and keep everything above that."

<strong>Net listings are illegal in Virginia.</strong> They are prohibited by VREB regulations because they create an irreconcilable conflict of interest between the broker's financial gain and the seller's interest in achieving the maximum sale price.

<h3>The Extender (Safety/Protection) Clause</h3>

Most Virginia listing agreements include an <strong>extender clause</strong> (also called a safety clause or protection clause). This provision extends the broker's commission rights for a specified period after the listing expires, for buyers who were introduced to the property during the listing term.

How it works: If the listing expires and the seller — within 90 days — sells the property to a buyer who was shown the property or registered by the broker during the listing period, the broker still earns the commission.

Purpose: This protects the broker from sellers who wait out the listing term and then sell directly to a buyer the broker found — effectively getting all the broker's marketing work for free.

<strong>Exam tip</strong>: The key distinction between exclusive right to sell and exclusive agency: Can the seller sell it themselves without paying? No under exclusive right to sell. Yes under exclusive agency. Net listings are prohibited in Virginia. Open listings pay only the procuring cause broker.`,
        },
        {
          slug: 'listing-agreement-terms',
          title: 'Key Listing Agreement Terms & Obligations',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['listing price', 'commission rate', 'listing term', 'MLS authorization', 'showing instructions', 'seller net sheet', 'price reduction authorization'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A seller wants to exclude their neighbor from the listing and sell to them without a commission. How should this be handled in the listing agreement?' },
          ],
          content: `## Key Listing Agreement Terms and Obligations

A listing agreement is a bilateral contract — the seller promises to pay a commission, and the broker promises to use their best efforts to market the property. Every term matters, and sellers should understand what they are agreeing to.

<h3>Essential Listing Agreement Terms</h3>

<strong>Listing Price</strong>: The price at which the property will be offered for sale. The listing agent should prepare a Comparative Market Analysis (CMA) to recommend a market-supported price. The seller has the final say on listing price — the agent advises, but the client decides.

<strong>Commission Rate</strong>: The agreed percentage (or flat fee) the seller will pay the broker upon closing. Virginia law does not set or cap commission rates — they are fully negotiable. The commission is typically paid from the sale proceeds at closing.

Under the 2024-2025 NAR settlement changes, listing agreements must address buyer agent compensation separately. The seller can choose to offer buyer agent compensation through the MLS or require buyers to bring their own compensation arrangements — but this must be clearly spelled out.

<strong>Listing Term</strong>: The start and end dates of the listing agreement. Typical residential listings run 90-180 days, though terms are fully negotiable. The listing automatically expires at the end of the term unless renewed by written agreement.

<strong>MLS Authorization</strong>: Under NAR's Clear Cooperation Policy, a listing broker must submit the listing to the MLS within one business day of public marketing. The listing agreement must include seller authorization for MLS entry. Sellers who want to exempt from MLS (office exclusives) must sign a specific waiver and acknowledge reduced exposure.

<h3>Seller's Obligations Under the Listing Agreement</h3>

When a seller signs a listing agreement, they agree to:
<ul>
<li>Provide accurate property information to the broker</li>
<li>Cooperate with showing requests and open houses</li>
<li>Disclose material facts about the property to the broker</li>
<li>Refer all inquiries from potential buyers to the broker during the listing period</li>
<li>Pay the agreed commission if the broker produces a buyer ready, willing, and able to purchase on the seller's terms (or if the property sells to anyone during the listing term, under exclusive right to sell)</li>
</ul>

<h3>Broker's Obligations Under the Listing Agreement</h3>

<ul>
<li>Market the property diligently (submit to MLS, coordinate showings, advise on price adjustments)</li>
<li>Present all offers promptly to the seller — this is a VREB regulatory requirement, not just a contractual term</li>
<li>Maintain confidentiality of the seller's negotiating position and motivation</li>
<li>Account for all funds (EMD, escrow) received in connection with the listing</li>
<li>Provide the seller with required disclosure forms (agency disclosure, lead paint addendum where applicable)</li>
</ul>

<h3>Exceptions and Exclusions</h3>

A seller may want to exclude specific individuals from the listing agreement — typically a known potential buyer they want to sell to privately without paying a commission. For example, a neighbor who has expressed interest, or a family member.

To create a valid exclusion:
<ul>
<li>The excluded party must be specifically named in the listing agreement</li>
<li>A time period for the exclusion should be specified</li>
<li>If the seller sells to the excluded party during the listing period, no commission is owed for that buyer</li>
</ul>

Buyers not named in the exclusion do not benefit — if any other buyer purchases the property, the full commission is owed.

<h3>Seller Net Sheet</h3>

The broker typically prepares a <strong>seller net sheet</strong> showing the estimated net proceeds to the seller after all closing costs (commissions, grantor's tax, recording fees, settlement agent fees, outstanding liens). This should be prepared at listing and updated as the transaction progresses.

Providing an inaccurate net sheet — particularly one that inflates the projected proceeds — can constitute misrepresentation if the seller relies on it to their detriment.

<strong>Exam tip</strong>: Commission rates are always negotiable in Virginia. All offers must be presented to the seller promptly. Exclusions must be written into the listing agreement to be effective.`,
        },
        {
          slug: 'terminating-listing-agreements',
          title: 'Terminating Listing Agreements',
          lessonType: 'reading',
          estimatedMinutes: 16,
          keyTerms: ['expiration', 'mutual release', 'cancellation', 'seller default', 'death of seller', 'destruction of property', 'earned commission'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Is commission owed in each listing termination scenario?' },
          ],
          content: `## Terminating Listing Agreements

Every listing agreement ends — either successfully with a closing, or through one of several other termination methods. Understanding what happens to commission rights when a listing ends other than by sale is important for both protecting brokers' compensation and advising sellers accurately.

<h3>Ways a Listing Agreement Can End</h3>

<strong>1. Successful Sale (Completion of Purpose)</strong>

The most common and cleanest termination: the property sells, closes, and the commission is paid from proceeds at settlement. The listing agreement has fulfilled its purpose.

<strong>When is commission "earned"?</strong> Under most Virginia listing agreements, the broker earns the commission when they <em>produce a buyer who is ready, willing, and able</em> to purchase on the seller's terms. The commission is earned at contract ratification — the broker's right to payment does not depend on whether the transaction ultimately closes.

If a seller accepts an offer and then refuses to close (seller default), the broker's commission is typically still owed, because the broker performed by producing a qualified buyer.

<strong>2. Expiration of Term</strong>

The listing expires at the end of the agreed term without renewal. The broker's authorization to market the property ends immediately. The seller is free to relist with a different broker or attempt to sell on their own.

Watch for the extender clause: If the listing has a safety period (typically 30-90 days after expiration), commission is still owed if the seller sells to a buyer who was introduced during the listing term within that window.

<strong>3. Mutual Agreement (Cancellation)</strong>

Both the seller and broker agree in writing to terminate the listing before its expiration date. This should be documented with a written cancellation agreement. The cancellation should address:
<ul>
<li>Whether any compensation is owed for work already performed</li>
<li>Whether the extender clause remains in effect for prospects already shown the property</li>
<li>The disposition of any marketing materials or deposits</li>
</ul>

<strong>4. Revocation by Seller (Unilateral Termination)</strong>

A seller can fire their listing broker at any time, but this may constitute breach of the listing agreement. Most Virginia listing agreements do not include a "no cause termination" right. If the seller unilaterally cancels, they may owe:
<ul>
<li>Reimbursement for marketing expenses the broker incurred</li>
<li>The full commission if the property later sells to a buyer the broker introduced (extender clause)</li>
<li>Potentially liquidated damages if specified in the agreement</li>
</ul>

<strong>5. Death of the Seller or Broker</strong>

Death of the seller terminates the listing agreement, as the seller's estate and heirs were not parties to the contract. However, the estate may relist with the same or different broker. Death of the principal broker (if sole proprietor) terminates the firm's listing agreements — affiliated agents must immediately relist under a new broker.

<strong>6. Destruction of the Property</strong>

If the property is destroyed (fire, condemnation), the listing terminates because the subject matter no longer exists. If the property is partially damaged and the seller wishes to proceed, a new listing agreement may be needed.

<strong>7. Loss of Seller's Title or Capacity</strong>

If the seller files for bankruptcy, their ability to sell may be stayed. If a court declares the seller incompetent and appoints a guardian, the guardian (not the seller) must authorize any future listing. If the seller loses title through foreclosure, the listing terminates.

<strong>8. Expiration of Broker's License</strong>

If the listing broker's license expires or is revoked, the firm's listing agreements are affected. Listings must be transferred to a properly licensed broker.

<h3>Commission After Termination</h3>

The broker's right to commission can survive listing termination in the following circumstances:
<ul>
<li>The extender clause applies (buyer was introduced during the listing period)</li>
<li>The seller defaults and refuses to close after a buyer was procured</li>
<li>The seller terminates the listing in breach and then sells the property</li>
</ul>

<strong>Exam tip</strong>: Commission is generally earned when a ready, willing, and able buyer is produced on the seller's terms — not necessarily at closing. The extender clause extends commission rights post-expiration. Mutual cancellation is always the cleanest way to end a listing.`,
        },
      ],
    },
    {
      slug: 'offer-counteroffer-process',
      title: 'Offer & Counteroffer Process',
      lessons: [
        {
          slug: 'presenting-receiving-offers',
          title: 'Presenting & Receiving Offers',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['offer', 'offeror', 'offeree', 'submission', 'acknowledgment', 'multiple offers', 'presentation obligation', 'seller decision'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A listing agent receives an offer she believes is too low to even present. What are her obligations?' },
          ],
          content: `## Presenting and Receiving Offers

Handling offers is one of the highest-stakes moments in a real estate transaction for both clients and agents. Done right, it's where deals get made. Done wrong, it's where VREB complaints and lawsuits begin. Every Virginia agent must understand the rules around offer presentation and what sellers are and are not permitted to do.

<h3>The Listing Agent's Obligation to Present All Offers</h3>

Under VREB regulations and the NAR Code of Ethics, a listing agent has a duty to <strong>present all written offers to the seller promptly</strong> — regardless of the agent's personal opinion about the offer's merits.

What this means in practice:
<ul>
<li>The listing agent cannot pre-screen offers and decline to present those they consider "too low"</li>
<li>The listing agent cannot delay presentation of an offer hoping a better one will arrive</li>
<li>Even verbal inquiries that crystallize into written offers must be presented</li>
<li>The obligation applies regardless of whether the agent thinks the offer is insulting, unrealistic, or poorly drafted</li>
</ul>

<strong>Exception</strong>: If the seller has given the listing agent written instructions not to present offers below a certain price, or not to present offers after a certain date, the agent may follow those instructions. The seller can give standing instructions — the agent cannot independently filter offers.

<h3>The Offeror and Offeree in Real Estate</h3>

In a standard residential purchase transaction:
<ul>
<li><strong>Offeror</strong>: The buyer (the party making the offer)</li>
<li><strong>Offeree</strong>: The seller (the party receiving the offer)</li>
</ul>

The buyer's agent prepares the offer and submits it to the listing agent, who presents it to the seller. Communication flows agent-to-agent unless the sellers specifically authorize direct communication.

<h3>The Seller's Options Upon Receiving an Offer</h3>

When a seller receives a written offer, they have exactly three options:
<ol>
<li><strong>Accept</strong>: Sign the offer as submitted, creating a binding contract upon communication of acceptance back to the buyer</li>
<li><strong>Counteroffer</strong>: Modify the offer terms and send back a counteroffer (the original offer is voided by the counteroffer — it cannot be accepted later)</li>
<li><strong>Reject</strong>: Decline the offer entirely. The seller has no obligation to respond or explain their rejection.</li>
</ol>

<h3>Submission and Acknowledgment</h3>

<strong>Submission</strong>: The buyer's agent delivers the offer to the listing agent (via email, fax, electronic platform, or in person).

<strong>Acknowledgment</strong>: VREB regulations require the listing agent to acknowledge receipt of the offer and confirm that it has been presented to the seller. This protects the buyer's agent from uncertainty about whether the offer was actually delivered and presented.

<h3>Multiple Offers — Seller Decision-Making</h3>

When multiple offers are received simultaneously or within a short window, the seller has complete flexibility:
<ul>
<li>Accept the best offer without notifying the others</li>
<li>Counter one offer while others remain pending</li>
<li>Reject all offers and relist</li>
<li>Notify all buyers that multiple offers are present and ask for "highest and best" by a deadline</li>
</ul>

The seller's agent has no obligation to inform any buyer about the existence or terms of other offers — but cannot make false representations (cannot claim there are no other offers when there are, for example).

<h3>The Offer Expiration Time</h3>

Buyers typically include an expiration time in their offers — "This offer expires at 5:00 PM on [date]." If the seller has not accepted or countered by that time, the offer expires and cannot be accepted afterward. Buyers should set realistic expiration windows: too short puts sellers under pressure (which can backfire in a buyer's market); too long leaves the buyer's funds and plans in limbo.

<strong>Exam tip</strong>: The listing agent must present all offers regardless of their opinion about the offer. The seller's three options are accept, counter, or reject. A counteroffer voids the original offer — the seller cannot later accept the original terms.`,
        },
        {
          slug: 'counteroffer-negotiation',
          title: 'Counteroffers & Negotiation Strategy',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: ['counteroffer', 'rejection', 'mirror image rule', 'acceptance', 'ratification', 'expiration of offer', 'death of offer'],
          interactiveElements: [
            { type: 'drag_drop', prompt: 'Place each negotiation event on the offer/counteroffer timeline in the correct order' },
            { type: 'mini_quiz', prompt: 'When is a contract formed? Identify the moment of ratification in each scenario.' },
          ],
          content: `## Counteroffers and the Moment of Contract Formation

Understanding the offer-counteroffer-acceptance sequence is the most directly tested contract law topic on the exam. Get this right and you will answer at least half a dozen exam questions correctly.

<h3>What a Counteroffer Does</h3>

A counteroffer is a response to an offer that changes one or more terms. Under the <strong>mirror image rule</strong>, any acceptance that varies the terms of the offer is not an acceptance — it is a counteroffer. The original offer is <strong>void</strong> the moment a counteroffer is made.

This has a critical practical consequence: once the seller counters, the original offer no longer exists. If the seller changes their mind and wants to go back to the buyer's original terms, they cannot simply "accept the original offer" — they must make a new offer (which is now the buyer's to accept or counter).

<h3>The Mirror Image Rule</h3>

For a binding contract to form through offer and acceptance, the acceptance must be an exact mirror of the offer — same price, same terms, same closing date, no modifications. Even changing one non-material term creates a counteroffer instead of an acceptance.

In practice, negotiations almost always involve counteroffers because buyers and sellers rarely agree on every term on the first round.

<h3>The Timeline of a Negotiation</h3>

<ol>
<li>Buyer makes an offer at $395,000 with closing in 45 days and a financing contingency</li>
<li>Seller counters at $410,000, same terms — the buyer's original offer is void</li>
<li>Buyer counters at $402,000 — the seller's counter is now void</li>
<li>Seller accepts $402,000 in writing and delivers acceptance to the buyer's agent — contract is formed</li>
</ol>

At step 4, both parties have agreed to the same terms. The contract is ratified when acceptance is communicated.

<h3>When Is the Contract Formed? The Mailbox Rule</h3>

Acceptance is effective when it is <strong>communicated to the offeror</strong>. In Virginia real estate practice, this means:
<ul>
<li>Acceptance is effective when the signed contract is received by the buyer's agent (not when the seller signs it — delivery matters)</li>
<li>The "mailbox rule" (that acceptance is effective when mailed) applies to offer situations in general contract law, but Virginia real estate practice requires actual communication/delivery</li>
<li>Electronic delivery via email or electronic signature platform is communicated upon delivery to the recipient's inbox or platform</li>
</ul>

<h3>Simultaneous Counteroffers to Multiple Buyers</h3>

A seller negotiating with multiple buyers simultaneously should be careful about sending counteroffers to more than one buyer at a time. If two buyers both accept the seller's counteroffer at the same moment, the seller could inadvertently create two contracts on the same property.

Best practice: When sending a counteroffer to one buyer, withdraw pending offers to or from other buyers first. Include language in the counteroffer stating it is contingent on no prior acceptance of any other offer.

<h3>Withdrawal of an Offer Before Acceptance</h3>

An offeror can <strong>withdraw (revoke) their offer at any time before acceptance</strong>, even if the offer states it will remain open for a specified period. Unless consideration was paid to keep the offer open (an option contract), the offeror is free to revoke.

Revocation must be communicated to the offeree before acceptance. If the offeree signs the acceptance before receiving notice of revocation, a contract is formed.

<h3>Death of an Offer</h3>

An offer terminates automatically (without any action by either party) upon:
<ul>
<li>Expiration of the stated deadline</li>
<li>Death or incapacity of the offeror before acceptance</li>
<li>Rejection by the offeree</li>
<li>Issuance of a counteroffer by the offeree</li>
<li>Destruction of the subject property before acceptance</li>
</ul>

<h3>Ratification in Virginia</h3>

In Virginia real estate, a contract is <strong>ratified</strong> when all parties have signed and acceptance has been communicated. The ratification date is the date on which the last signature was obtained AND communicated — the two events must both occur. Virginia agents use the term "ratification date" as the start date for all contingency deadlines.

<strong>Exam tip</strong>: A counteroffer kills the prior offer. The mirror image rule requires exact acceptance. Acceptance is effective when communicated. An offer can be revoked any time before acceptance unless an option was paid to keep it open.`,
        },
        {
          slug: 'multiple-offer-situations',
          title: 'Multiple Offer Situations & Best Practices',
          lessonType: 'scenario',
          estimatedMinutes: 18,
          keyTerms: ['multiple offers', 'highest and best', 'escalation clause', 'offer deadline', 'disclosure of offers', 'ethics in multiple offers'],
          interactiveElements: [
            { type: 'scenario', prompt: 'Three offers come in simultaneously. The seller wants to call back all three buyers and tell them the highest offer amount. Is this permissible? What are the ethics and strategy considerations?' },
          ],
          content: `## Multiple Offer Situations: Strategy, Ethics, and Best Practices

Multiple offer situations test agents' ethics, their clients' decision-making, and transaction management skills simultaneously. In competitive Virginia markets, knowing how to handle multiple offers correctly — from both sides of the table — is a daily professional requirement.

<h3>The Listing Agent's Obligations in Multiple Offers</h3>

When multiple offers arrive, the listing agent must:
<ul>
<li><strong>Present all offers to the seller</strong> — no filtering based on the agent's preference</li>
<li><strong>Treat all buyers fairly</strong> — no steering the seller toward one buyer based on discriminatory reasons (Fair Housing applies even to offer selection)</li>
<li><strong>Not disclose material terms of one offer to another buyer</strong> unless the seller has authorized this disclosure</li>
</ul>

What the listing agent may NOT do:
<ul>
<li>Tell Buyer B the exact price or terms of Buyer A's offer to induce Buyer B to bid higher — unless the seller specifically authorizes disclosure of terms</li>
<li>Misrepresent that there are no other offers (if asked directly)</li>
<li>Deceive any buyer about the status of their offer</li>
</ul>

<h3>Disclosure of Multiple Offers</h3>

Virginia and NAR standards allow (but do not require) the listing agent to disclose that multiple offers exist:
<ul>
<li>The listing agent can notify all buyers that multiple offers are present and invite "highest and best" submissions</li>
<li>The listing agent generally should NOT reveal specific dollar amounts or terms of competing offers without seller authorization</li>
<li>If a buyer directly asks "are there other offers?" — the agent should not lie. Saying "I'm not authorized to confirm" is acceptable; saying "no" when there are offers is not.</li>
</ul>

<h3>Highest and Best Offer Requests</h3>

A common seller strategy in multiple offer situations: set a deadline and request all buyers submit their "highest and best" offer by that time. This:
<ul>
<li>Creates a level playing field — everyone responds to the same deadline</li>
<li>Avoids the perception that one buyer got special treatment</li>
<li>Encourages buyers to put their best offer forward without knowing others' terms</li>
</ul>

After receiving highest and best offers, the seller selects one and notifies all other buyers that their offers were not accepted. There is no obligation to explain why.

<h3>Escalation Clauses</h3>

An <strong>escalation clause</strong> is a provision in a buyer's offer stating that the buyer will automatically increase their purchase price by a specified amount above any competing offer, up to a stated maximum.

Example: "Buyer offers $400,000 and will escalate $2,500 above any bona fide competing offer, up to a maximum purchase price of $425,000."

<strong>Advantages for buyers</strong>: Allows them to "auto-win" without guessing how high to go.

<strong>Risks and complications</strong>:
<ul>
<li>The seller must provide documentation of the competing offer that triggered the escalation</li>
<li>The seller could use the escalation clause as a negotiating tool — knowing the buyer's ceiling</li>
<li>Some sellers dislike them and will not accept offers with escalation clauses (they prefer a clean price)</li>
<li>If the appraisal does not support the escalated price, it creates appraisal gap issues</li>
</ul>

<h3>Buyer Strategies in Multiple Offer Situations</h3>

In addition to price, buyers can strengthen offers through:
<ul>
<li><strong>Larger earnest money deposit</strong>: Signals commitment and financial strength</li>
<li><strong>Shortened or waived contingencies</strong>: Waiving the home sale contingency is common; waiving appraisal is frequent in hot markets; waiving inspection is a significant risk that clients must understand fully</li>
<li><strong>Flexible closing date</strong>: Asking the seller what date works best for them can be a differentiator</li>
<li><strong>Pre-approval with strong lender</strong>: A letter from a local lender who the listing agent knows and trusts carries more weight than a generic online pre-approval</li>
<li><strong>Personal letter</strong>: Some buyers write letters to sellers. Note: Fair Housing concerns make these legally risky — a buyer who reveals protected class characteristics (religion, race, family status) through a personal letter could expose the seller's decision to scrutiny</li>
</ul>

<h3>Backup Offers</h3>

If the seller accepts an offer but wants protection in case that contract fails, the seller can accept a <strong>backup offer</strong> in writing. The backup offer becomes the primary contract automatically if the first contract terminates. The backup buyer must be clearly notified of their backup status.

<strong>Exam tip</strong>: The listing agent can disclose the existence of multiple offers but generally should not disclose competing terms without authorization. Sellers select any offer they choose — Fair Housing applies, but price, terms, and closing date are all valid selection criteria.`,
        },
      ],
    },
    {
      slug: 'contract-termination-breach',
      title: 'Contract Termination & Breach',
      lessons: [
        {
          slug: 'breach-of-contract-remedies',
          title: 'Breach of Contract & Remedies',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['material breach', 'minor breach', 'specific performance', 'liquidated damages', 'compensatory damages', 'rescission', 'mutual release'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Which remedy applies in each breach scenario — specific performance, damages, or rescission?' },
          ],
          content: `## Breach of Contract and Remedies in Virginia Real Estate

Not every contract makes it to closing. When a party fails to perform their contractual obligations, understanding the breach and the available remedies determines what happens next — for your clients and for you.

<h3>Material Breach vs. Minor Breach</h3>

<strong>Material breach</strong>: A breach that is so fundamental that it defeats the purpose of the contract or substantially deprives the non-breaching party of what they bargained for. A material breach entitles the non-breaching party to:
<ul>
<li>Treat the contract as terminated</li>
<li>Seek damages</li>
<li>In some cases, pursue specific performance</li>
</ul>

Examples of material breach in real estate contracts:
<ul>
<li>Buyer refuses to close and cannot demonstrate a valid contingency excuse</li>
<li>Seller refuses to close (takes a higher offer after going under contract)</li>
<li>Buyer fails to deposit the earnest money as specified</li>
<li>Seller fails to disclose known material defects, and this is discovered before closing</li>
</ul>

<strong>Minor breach (partial breach)</strong>: A failure to perform a non-essential term that doesn't defeat the contract's overall purpose. The non-breaching party must still perform but can sue for damages equal to the harm caused by the minor breach.

Example: A seller agreed to remove a specific piece of storage equipment from the garage and fails to do so by closing. This is likely a minor breach — the buyer can close and pursue damages for the cost of removal.

<h3>Remedies for Breach</h3>

<strong>1. Rescission</strong>

Rescission is the cancellation of the contract and the restoration of both parties to their pre-contract position. Both parties give back what they received — earnest money is returned to the buyer, and the seller retains their property. Rescission is available when:
<ul>
<li>Both parties mutually agree to terminate (mutual rescission)</li>
<li>One party has the right to cancel due to fraud, misrepresentation, or unilateral mistake</li>
<li>A condition precedent fails and the contract gives the buyer the right to exit</li>
</ul>

<strong>2. Liquidated Damages (Forfeiture of EMD)</strong>

Most Virginia residential purchase agreements specify that if the buyer defaults, the seller's remedy is to retain the earnest money as liquidated damages. This is the most commonly invoked remedy for buyer default.

For liquidated damages to be enforceable, they must represent a reasonable estimate of the actual damages the non-breaching party would suffer — not a penalty. Courts will strike down liquidated damages clauses that are clearly punitive rather than compensatory.

<strong>3. Compensatory Damages</strong>

The non-breaching party can sue for actual damages they suffered as a result of the breach. For sellers, this might include:
<ul>
<li>Carrying costs (mortgage, taxes, utilities) during the period after the default until resale</li>
<li>The difference between the defaulted contract price and the eventual sale price (if lower)</li>
<li>Marketing and transaction costs for the second sale</li>
</ul>

For buyers, compensatory damages might include:
<ul>
<li>Increased purchase price to buy an equivalent property</li>
<li>Temporary housing costs</li>
<li>Moving and storage costs caused by the seller's default</li>
</ul>

<strong>4. Specific Performance</strong>

Specific performance is an equitable remedy that orders a party to perform their contractual obligation. In real estate, it is available because land is considered <strong>unique</strong> — no two parcels are identical, and money damages may not adequately compensate a buyer who lost the specific property they wanted.

<ul>
<li><strong>Buyer seeking specific performance against seller</strong>: "The court orders the seller to convey the property at the agreed price." This is a powerful remedy and a significant risk for sellers considering default.</li>
<li><strong>Seller seeking specific performance against buyer</strong>: Courts are more reluctant to grant this (forcing someone to buy property), but it is theoretically available when the seller can demonstrate that money damages are inadequate.</li>
</ul>

<strong>Election of remedies</strong>: In most Virginia contracts, the seller must elect between retaining the EMD as liquidated damages OR pursuing other remedies — they typically cannot do both.

<h3>The Mutual Release</h3>

The cleanest resolution to a failed transaction is a <strong>mutual release</strong> — a written agreement signed by both parties specifying how the EMD is to be distributed and releasing both parties from further claims. Always document cancellations with a signed mutual release to prevent future disputes.

<strong>Exam tip</strong>: Specific performance is the unique remedy for real estate breach because land is unique. Liquidated damages (keeping EMD) is the most common remedy for buyer default. Rescission restores both parties to pre-contract position.`,
        },
        {
          slug: 'contract-cancellation-procedures',
          title: 'Contract Cancellation Procedures & Mutual Release',
          lessonType: 'interactive',
          estimatedMinutes: 20,
          keyTerms: ['mutual release', 'termination addendum', 'contingency cancellation', 'earnest money disposition', 'broker release', 'dispute resolution'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A financing contingency expires and the buyer did not get a loan. The seller claims the buyer did not make a good faith effort. Walk through the cancellation process and EMD dispute resolution.' },
          ],
          content: `## Contract Cancellation Procedures and Mutual Release in Virginia

When a real estate transaction fails, the process for formally canceling the contract and resolving the earnest money matters enormously. Informal cancellations without proper documentation create future liability. Following the correct process protects everyone.

<h3>When Cancellation Is Proper</h3>

A ratified contract can be properly cancelled when:
<ul>
<li>A buyer properly exercises a contingency (written notice before deadline)</li>
<li>Both parties agree to terminate by mutual consent</li>
<li>A party is in material default and the non-breaching party elects rescission rather than pursuing damages</li>
<li>The contract contains a statutory right of cancellation (POAA disclosure not provided, condo resale certificate not provided, etc.)</li>
</ul>

A contract cannot simply be "cancelled" because one party changes their mind and sends an email saying so. Without a valid basis, unilateral cancellation is a default.

<h3>The Termination Addendum Process</h3>

In Virginia residential transactions, cancellation is typically documented through a <strong>Termination Addendum</strong> or <strong>Release and Termination Agreement</strong> — a written form signed by both buyer and seller that:
<ul>
<li>States the contract is terminated</li>
<li>Identifies the basis for termination (contingency exercised, mutual agreement, etc.)</li>
<li>Specifies how the earnest money will be disbursed</li>
<li>Releases both parties from further claims under the contract</li>
</ul>

Brokers must submit the executed termination addendum to their escrow account holder to authorize EMD disbursement.

<h3>Contingency Cancellation — Step by Step</h3>

When a buyer exercises a contingency (e.g., financing was denied):

<ol>
<li>Buyer's agent notifies listing agent in writing, before the contingency deadline, that the contingency has been triggered and the buyer is terminating</li>
<li>Listing agent notifies the seller</li>
<li>Both parties execute a termination addendum directing the escrow holder to return the EMD to the buyer</li>
<li>The escrow holder (typically the buyer's broker or a title company) returns the EMD within a reasonable time</li>
</ol>

If the seller disputes the buyer's right to cancel (e.g., alleging the buyer did not make a good faith effort on financing), the EMD is not automatically returned. The broker must hold the funds until a dispute resolution process is completed.

<h3>Disputed EMD Resolution in Virginia</h3>

VREB regulations govern what a broker must do with disputed earnest money:

<strong>Required steps when EMD is disputed:</strong>
<ol>
<li>The broker holding the EMD must notify both parties in writing of the dispute</li>
<li>The broker must hold the funds (not release to either party without authorization)</li>
<li>The broker must make a <em>good faith effort</em> to resolve the dispute, which may include:
  <ul>
    <li>Facilitating communication between the parties</li>
    <li>Providing documentation of the relevant contract and notice timelines</li>
  </ul>
</li>
<li>If the dispute is not resolved within a reasonable time, the broker may seek resolution through:
  <ul>
    <li>The parties signing a written release</li>
    <li>A court order (interpleader action)</li>
    <li>VREB-approved alternative dispute resolution</li>
  </ul>
</li>
</ol>

<strong>What the broker cannot do</strong>: Unilaterally decide who gets the EMD and release it without proper authority. Even if the broker's professional judgment is that the buyer clearly has the right to the refund, disbursing without authorization is a VREB violation.

<h3>Interpleader</h3>

If the parties cannot agree and the dispute is prolonged, the broker can file an <strong>interpleader action</strong> in the appropriate General District Court or Circuit Court. In an interpleader:
<ul>
<li>The broker deposits the disputed funds with the court</li>
<li>The broker is dismissed from the case (relieved of liability for the funds)</li>
<li>The court determines which party is entitled to the EMD based on the contract terms and evidence presented</li>
</ul>

Interpleader is the broker's legal escape hatch from an intractable dispute. It's not ideal — it involves legal fees and time — but it protects the broker from liability while letting the courts resolve the underlying contract dispute.

<strong>Exam tip</strong>: Both parties must sign a written release for EMD to be disbursed without a court order. The broker holds disputed EMD and cannot take sides. Interpleader deposits funds with the court when the broker cannot resolve the dispute.`,
        },
        {
          slug: 'assignments-novations',
          title: 'Contract Assignments & Novations',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: ['assignment', 'novation', 'assignee', 'obligor', 'assignability clause', 'due-on-sale clause'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Assignment vs. novation — who remains liable under each?' },
          ],
          content: `## Contract Assignments and Novations

Not every contract ends with the original parties performing. Sometimes a party wants to transfer their contractual rights and obligations to someone else. In real estate, this typically arises in investment transactions, estate situations, and certain financing scenarios.

<h3>Assignment</h3>

An <strong>assignment</strong> is the transfer of one party's contractual rights to a third party (the assignee). The key legal principle:

<strong>In an assignment, the original party (assignor) remains liable on the contract</strong> unless the other contracting party releases them. The assignee takes on the rights but the assignor is not automatically released from their obligations.

In a real estate context:
<ul>
<li>A buyer can assign their purchase contract to another buyer (with or without consideration)</li>
<li>The original buyer (assignor) typically remains secondarily liable unless the seller releases them</li>
<li>The new buyer (assignee) becomes primarily responsible for performing the contract obligations</li>
</ul>

<strong>Assignability language in contracts</strong>: Most residential purchase agreements include an assignability clause:
<ul>
<li>"This contract may not be assigned without seller's written consent" — assignment requires approval</li>
<li>"This contract is freely assignable" — buyer can assign without consent (common in wholesale/investment contracts)</li>
<li>No mention — assignments are generally permitted under basic contract law but may be limited by circumstances</li>
</ul>

<h3>Why Sellers Care About Assignment</h3>

If a buyer assigns a contract, the seller may end up selling to someone they never met, never qualified, and may not want to do business with. Sellers who care about who they sell to (particularly in estate sales, sales to neighbors, or transactions involving personal relationships) should require written consent to assignment.

Investment wholesalers often use assignable contracts as a core strategy — they go under contract and then assign the contract to the ultimate buyer for a fee.

<h3>Novation</h3>

A <strong>novation</strong> goes further than assignment. In a novation:
<ul>
<li>A new party is substituted for an original party with the agreement of all parties</li>
<li>The original party is <strong>completely released</strong> from all further obligations</li>
<li>The new party assumes all rights and obligations</li>
</ul>

Novation requires the consent of all parties — buyer, seller, and the new substitute party. It's not a unilateral act.

<strong>Key distinction</strong>: Assignment = original party may still be liable. Novation = original party is fully released. Novation extinguishes the original obligation and creates a new one.

<h3>Novation in Mortgage Contexts</h3>

In mortgage financing, novation arises when a buyer assumes an existing mortgage. A simple loan assumption replaces the buyer's obligation for the seller's, but does NOT release the original seller/borrower unless the lender specifically agrees to the substitution and releases the original borrower — that release is a novation of the mortgage note.

Without an explicit release, the original seller remains liable on the mortgage even after selling the property. If the buyer later defaults, the lender can pursue the original seller.

<h3>Due-on-Sale Clauses</h3>

A <strong>due-on-sale clause</strong> (also called an alienation clause) is a standard provision in most modern mortgage notes requiring the full loan balance to be paid when the property is sold. This clause is the lender's protection against unauthorized loan assumptions.

When a property is sold:
<ul>
<li>If the buyer tries to assume the existing mortgage without lender approval, the due-on-sale clause allows the lender to demand immediate full repayment</li>
<li>FHA and VA loans issued after certain dates are assumable — but lender approval and creditworthiness review of the assuming buyer are required</li>
<li>Conventional loans with due-on-sale clauses are generally not freely assumable</li>
</ul>

A property sold on a land contract (contract for deed) — where the seller retains title until the purchase price is paid — can trigger due-on-sale issues if the original lender has a due-on-sale clause and discovers the arrangement.

<strong>Exam tip</strong>: Assignment transfers rights but original party may remain liable. Novation substitutes a new party and releases the original. The due-on-sale clause is what prevents unauthorized mortgage assumptions — and is why FHA/VA assumability is a marketing point.`,
        },
      ],
    },
  ],
}

// ── Module 4: Finance & Valuation ────────────────────────────────────────────

const module4: CourseModule = {
  slug: 'finance-valuation',
  title: 'Finance & Valuation',
  subtitle: 'Mortgage types, loan qualification, appraisal, and real estate math',
  examWeight: 'Approx. 13% of national exam',
  chapters: [
    {
      slug: 'mortgage-types-terms',
      title: 'Mortgage Types & Terms',
      lessons: [
        {
          slug: 'conventional-vs-government-loans',
          title: 'Conventional vs. Government-Backed Loans',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['conventional loan', 'FHA loan', 'VA loan', 'USDA loan', 'conforming loan', 'jumbo loan', 'PMI', 'MIP', 'funding fee'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'FHA vs. VA vs. USDA vs. conventional — eligibility, down payment, and insurance requirements' },
            { type: 'mini_quiz', prompt: 'Match the loan program to its eligibility requirement and insurance type' },
          ],
          content: `## Conventional vs. Government-Backed Mortgage Loans

One of the most valuable services a buyer's agent provides is helping clients understand their financing options and connect with the right lender. While you are not a loan officer, knowing the core characteristics of each loan program makes you a better advisor and helps you structure offers that are most likely to succeed.

<h3>Conventional Loans</h3>

A conventional loan is any mortgage not backed by a government agency. Conventional loans are originated by private lenders and are typically sold to Fannie Mae or Freddie Mac on the secondary market (making them <strong>conforming</strong> loans if they meet agency guidelines) or retained by the lender (portfolio loans).

<strong>Characteristics:</strong>
<ul>
<li><strong>Down payment</strong>: Minimum 3% for first-time buyers (some programs); typically 5-20%</li>
<li><strong>Credit score</strong>: Generally 620+ to qualify; better rates with 740+</li>
<li><strong>Debt-to-income</strong>: Max DTI typically 43-50% depending on compensating factors</li>
<li><strong>Mortgage insurance</strong>: Required when LTV exceeds 80%. Private Mortgage Insurance (PMI) is cancelable once LTV reaches 80% (under federal law, it must be automatically cancelled at 78% LTV based on original purchase price)</li>
<li><strong>Property standards</strong>: Appraisal must show property is in habitable condition; standards are less stringent than FHA</li>
</ul>

<strong>Jumbo loans</strong>: Conventional loans that exceed the conforming loan limit (currently over $766,550 for most areas in 2024; higher in high-cost areas). Jumbo loans are not sold to Fannie/Freddie and typically have higher rates and stricter qualification requirements.

<h3>FHA Loans</h3>

FHA loans are insured by the Federal Housing Administration (a division of HUD). The FHA doesn't lend money — it insures the lender against borrower default, enabling lenders to offer more favorable terms to less-qualified buyers.

<strong>Characteristics:</strong>
<ul>
<li><strong>Down payment</strong>: <strong>3.5%</strong> with credit score 580+; 10% with score 500-579</li>
<li><strong>Credit score</strong>: Minimum 500 (most lenders require 580+ for 3.5% down)</li>
<li><strong>DTI</strong>: More flexible than conventional, often up to 50% with compensating factors</li>
<li><strong>Mortgage insurance</strong>: <strong>Mortgage Insurance Premium (MIP)</strong> — an upfront MIP (1.75% of loan amount, typically rolled into the loan) plus annual MIP (0.15-0.75% depending on LTV and term). MIP cannot be cancelled if down payment was less than 10% — it lasts the life of the loan. If down payment was 10%+, MIP is cancelled after 11 years.</li>
<li><strong>Property standards</strong>: FHA appraisers check for minimum property standards — safety hazards, structural integrity, working utilities. Properties in poor condition may not pass FHA appraisal.</li>
<li><strong>Loan limit</strong>: FHA sets county-level loan limits — for Virginia, most areas are around $498,257 for 2024; high-cost areas (Northern Virginia/DC metro) have higher limits</li>
</ul>

<h3>VA Loans</h3>

VA loans are guaranteed by the Department of Veterans Affairs for eligible servicemembers, veterans, and surviving spouses. Virginia has one of the largest veteran populations in the country — knowing VA loans is essential for Virginia agents.

<strong>Characteristics:</strong>
<ul>
<li><strong>Down payment</strong>: <strong>0% down</strong> for eligible borrowers (no down payment required)</li>
<li><strong>Mortgage insurance</strong>: No monthly PMI or MIP. There is a one-time <strong>VA Funding Fee</strong> (typically 2.15-3.3% for first use, 3.6% for subsequent use, though disabled veterans may be exempt)</li>
<li><strong>Credit score</strong>: VA does not set a minimum; most lenders require 620+</li>
<li><strong>DTI</strong>: VA uses a "residual income" analysis in addition to DTI — more nuanced than conventional qualifying</li>
<li><strong>Property standards</strong>: VA appraisers check for Minimum Property Requirements (MPRs) — similar to FHA, they will flag safety and habitability issues</li>
<li><strong>Certificate of Eligibility (COE)</strong>: The veteran must obtain a COE from VA confirming entitlement to the VA loan benefit</li>
<li><strong>Assumability</strong>: VA loans are assumable with lender approval and creditworthiness review of the new borrower</li>
</ul>

<h3>USDA Loans</h3>

USDA Rural Development loans are guaranteed by the U.S. Department of Agriculture for moderate-income buyers in eligible rural and some suburban areas. Virginia has significant USDA-eligible areas outside the major metro regions.

<strong>Characteristics:</strong>
<ul>
<li><strong>Down payment</strong>: <strong>0% down</strong></li>
<li><strong>Income limits</strong>: Household income must not exceed 115% of area median income</li>
<li><strong>Geographic eligibility</strong>: Property must be in a USDA-eligible area (rural or low-density suburban)</li>
<li><strong>Guarantee fee</strong>: 1% upfront guarantee fee (rolled into loan) plus 0.35% annual fee (similar to MIP)</li>
</ul>

<h3>Comparison at a Glance</h3>

<ul>
<li><strong>Zero down payment</strong>: VA and USDA only</li>
<li><strong>Lowest down payment</strong>: FHA at 3.5%, then conventional at 3%</li>
<li><strong>No mortgage insurance ever</strong>: VA loans (funding fee only, no monthly PMI)</li>
<li><strong>Most flexible credit</strong>: FHA</li>
<li><strong>Best for veterans</strong>: VA, almost always</li>
<li><strong>Rural buyers</strong>: USDA if eligible</li>
</ul>

<strong>Exam tip</strong>: Know the down payment minimums (VA/USDA = 0%, FHA = 3.5%, conventional = 3-5% minimum). Know that FHA MIP stays for the life of the loan if down payment is under 10%. Know that PMI (conventional) can be cancelled at 80% LTV. VA has no monthly insurance but has a funding fee.`,
        },
        {
          slug: 'fixed-vs-adjustable-rate',
          title: 'Fixed-Rate vs. Adjustable-Rate Mortgages',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['fixed-rate mortgage', 'adjustable-rate mortgage', 'ARM', 'index', 'margin', 'cap', 'initial rate period', 'lifetime cap', 'LIBOR', 'SOFR'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer plans to sell within 5 years. They ask whether a 5/1 ARM or a 30-year fixed is better. Walk through the analysis.' },
          ],
          content: `## Fixed-Rate vs. Adjustable-Rate Mortgages

The choice between a fixed-rate and an adjustable-rate mortgage is one of the most important financial decisions a homebuyer makes. Agents who understand the trade-offs can help clients make informed decisions and set realistic expectations.

<h3>Fixed-Rate Mortgages</h3>

A <strong>fixed-rate mortgage</strong> has an interest rate that never changes over the life of the loan. The principal and interest payment remains constant from the first payment to the last — only escrow components (property taxes, insurance) can change the total monthly payment.

<strong>Common terms:</strong>
<ul>
<li><strong>30-year fixed</strong>: Lowest monthly payment, highest total interest paid. Most popular loan product in the U.S.</li>
<li><strong>20-year fixed</strong>: Lower total interest than 30-year, higher monthly payment</li>
<li><strong>15-year fixed</strong>: Builds equity significantly faster, substantially lower total interest, but requires higher monthly payment — often about 30% higher than a 30-year for the same loan amount</li>
</ul>

<strong>Who benefits most from fixed-rate loans:</strong>
<ul>
<li>Buyers planning to stay in the home long-term (7+ years)</li>
<li>Buyers in a rising interest rate environment who want to lock in current rates</li>
<li>Buyers who prefer payment certainty and budgeting simplicity</li>
<li>Risk-averse buyers who cannot absorb potential payment increases</li>
</ul>

<h3>Adjustable-Rate Mortgages (ARMs)</h3>

An <strong>adjustable-rate mortgage</strong> has an interest rate that changes periodically after an initial fixed period. The initial rate is typically lower than comparable fixed-rate products — this is the ARM's appeal.

<strong>ARM naming convention</strong>: ARMs are named using a format like "5/1 ARM" or "7/6 ARM":
<ul>
<li>The first number: the initial fixed-rate period (years)</li>
<li>The second number: how often the rate adjusts after the initial period (1 = annually, 6 = every 6 months)</li>
</ul>

So a 5/1 ARM has a fixed rate for 5 years, then adjusts annually. A 7/6 ARM has a fixed rate for 7 years, then adjusts every 6 months.

<h3>How ARM Rate Adjustments Work</h3>

After the initial period, the rate is calculated as:
<strong>Rate = Index + Margin</strong>

<ul>
<li><strong>Index</strong>: A benchmark interest rate that reflects broader market conditions. The most common current index for ARMs is <strong>SOFR (Secured Overnight Financing Rate)</strong>, which replaced LIBOR. The index moves with market interest rates.</li>
<li><strong>Margin</strong>: A fixed percentage added by the lender (typically 2.25-3%). The margin never changes — only the index changes.</li>
</ul>

Example: If SOFR is 4.5% and the margin is 2.75%, the adjusted rate would be 7.25%.

<h3>ARM Caps: Protection Against Rate Shock</h3>

ARMs include caps that limit how much the rate can change:

<ul>
<li><strong>Initial adjustment cap</strong>: The maximum the rate can increase at the first adjustment after the initial period (commonly 2% or 5%)</li>
<li><strong>Periodic adjustment cap</strong>: The maximum the rate can increase or decrease at each subsequent adjustment (commonly 2%)</li>
<li><strong>Lifetime cap</strong>: The maximum total rate increase over the life of the loan above the initial rate (commonly 5% or 6%)</li>
</ul>

Caps are often described as "5/2/5" — meaning 5% initial cap, 2% periodic cap, 5% lifetime cap.

<strong>Example</strong>: A 5/1 ARM starts at 4.5% with 5/2/5 caps.
<ul>
<li>At first adjustment: rate can go up to 9.5% (4.5% + 5%) or down to any rate SOFR + margin allows</li>
<li>At each subsequent adjustment: rate can change by no more than 2%</li>
<li>Over the loan's lifetime: rate can never exceed 9.5% (4.5% + 5%)</li>
</ul>

<h3>Who Benefits Most from ARMs</h3>

<ul>
<li>Buyers who plan to sell or refinance before the initial fixed period ends</li>
<li>Buyers in a declining interest rate environment who expect rates to fall</li>
<li>Buyers who need lower initial payments to qualify</li>
<li>Buyers purchasing investment properties with short hold periods</li>
</ul>

<strong>The risk</strong>: Buyers who plan to stay short-term but life changes force them to stay long-term. A 5/1 ARM that was attractive in year 1 can become expensive in year 6 if rates have risen significantly.

<strong>Exam tip</strong>: ARM rate = index + margin. Know the three cap types (initial, periodic, lifetime). SOFR has replaced LIBOR as the primary ARM index. Fixed-rate is better for long-term owners; ARMs are potentially better for short-term owners.`,
        },
        {
          slug: 'special-mortgage-products',
          title: 'Special Mortgage Products',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['balloon mortgage', 'reverse mortgage', 'HECM', 'bridge loan', 'construction loan', 'wraparound mortgage', 'land contract', 'purchase money mortgage'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Special mortgage products — who uses each and what are the key terms?' },
          ],
          content: `## Special Mortgage Products

Beyond conventional and government-backed mortgages, the real estate market includes a range of specialty financing products. Understanding these helps you identify the right tool for clients in unusual situations and avoid misadvising clients about options you don't recognize.

<h3>Balloon Mortgages</h3>

A <strong>balloon mortgage</strong> is structured with regular payments (often calculated as if on a 30-year amortization) but a large final payment — the "balloon" — at a specified date that pays off the remaining balance.

Example: A 5-year balloon mortgage with 30-year amortization. The borrower makes 60 monthly payments based on a 30-year schedule, then owes the full remaining balance in one lump sum payment at the end of year 5.

<strong>Who uses them</strong>: Buyers who expect to refinance or sell before the balloon comes due. Commercial real estate uses balloon loans frequently. Residential balloon mortgages are less common after the 2008 financial crisis.

<strong>Risk</strong>: If the borrower cannot refinance or sell when the balloon is due (because of market conditions, credit problems, or property value decline), they face foreclosure.

<h3>Reverse Mortgages / HECM</h3>

A <strong>reverse mortgage</strong> — formally the Home Equity Conversion Mortgage (HECM) when FHA-insured — allows homeowners 62 and older to convert home equity into loan proceeds without making monthly payments.

<strong>Key features:</strong>
<ul>
<li>Borrower must be 62+ and occupy the home as primary residence</li>
<li>No monthly mortgage payments required — interest accrues and is added to the loan balance</li>
<li>The loan becomes due when the borrower moves out, sells, or dies</li>
<li>The home is the only collateral — the borrower (or their estate) cannot owe more than the home is worth (non-recourse loan)</li>
<li>HECM borrowers must attend HUD-approved counseling before obtaining the loan</li>
<li>The loan amount is based on: borrower's age, current interest rates, and lesser of appraised value or HECM loan limit</li>
</ul>

<strong>Proceeds can be received as</strong>: Lump sum, monthly payment, line of credit, or combination.

<h3>Bridge Loans</h3>

A <strong>bridge loan</strong> is short-term financing that "bridges" the gap between a buyer's current situation and their intended long-term financing. Most commonly used when a buyer needs to purchase a new home before their current home sells.

A bridge loan uses the equity in the current home as collateral to fund the down payment on the new home. Once the old home sells, the proceeds pay off the bridge loan.

<strong>Characteristics:</strong>
<ul>
<li>Short term (typically 6-12 months)</li>
<li>Higher interest rate than permanent financing</li>
<li>Usually requires significant equity in the current home (often 20%+)</li>
</ul>

<h3>Construction Loans</h3>

A <strong>construction loan</strong> provides funds for building a new home, disbursed in draws (stages) as construction milestones are reached. The borrower typically pays interest only during construction.

Upon completion, the construction loan is either:
<ul>
<li>Paid off with a permanent mortgage (two-close transaction)</li>
<li>Automatically converted to a permanent mortgage (one-close or construction-to-permanent loan)</li>
</ul>

<h3>Seller Financing: Wraparound Mortgages and Land Contracts</h3>

When institutional financing is unavailable or less favorable, sellers sometimes provide financing directly to buyers.

<strong>Wraparound mortgage</strong>: The seller retains their existing mortgage and offers the buyer a new, higher loan that "wraps around" the existing one. The buyer makes payments to the seller; the seller makes payments on the underlying mortgage and keeps the difference. Risk: Due-on-sale clauses in the underlying mortgage may be triggered.

<strong>Land contract (Contract for Deed)</strong>: The seller finances the purchase and retains legal title until the buyer completes all payments. The buyer gets equitable title (the right to possess and use the property) but not the deed. Upon final payment, the seller conveys the deed. Risk for buyer: If the buyer defaults, they may lose all payments and the property without a formal foreclosure process (though Virginia courts protect land contract buyers to some extent).

<strong>Purchase money mortgage (PMM)</strong>: A mortgage given to the seller (rather than a bank) as part of the purchase price. The seller becomes the lender and holds the mortgage as security for the deferred portion of the purchase price.

<strong>Exam tip</strong>: HECM = reverse mortgage, for borrowers 62+, no monthly payments. Bridge loan = short-term financing between homes. Land contract = seller keeps title until paid off. Balloon = large final payment at a specified date.`,
        },
        {
          slug: 'mortgage-clauses-provisions',
          title: 'Key Mortgage Clauses & Provisions',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['acceleration clause', 'alienation clause', 'due-on-sale clause', 'prepayment penalty', 'defeasance clause', 'subordination clause', 'subordination-non-disturbance-attornment'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Match each mortgage clause to what triggers it and what it does' },
          ],
          content: `## Key Mortgage Clauses and Provisions

A residential mortgage in Virginia consists of two documents: the <strong>promissory note</strong> (the borrower's personal promise to repay) and the <strong>deed of trust</strong> (the security instrument giving the lender a lien on the property). Understanding the key clauses in these documents is essential for advising clients and for passing the exam.

<h3>Virginia Uses Deeds of Trust, Not Mortgages</h3>

Virginia is a <strong>deed of trust state</strong>. While the term "mortgage" is used colloquially, the actual security instrument in Virginia is a deed of trust, which involves three parties:
<ul>
<li><strong>Trustor (Borrower)</strong>: Conveys the property to the trustee as security</li>
<li><strong>Trustee</strong>: Holds legal title as security for the lender (often a title company or individual attorney)</li>
<li><strong>Beneficiary (Lender)</strong>: Benefits from the security interest; can instruct the trustee to foreclose</li>
</ul>

If the borrower defaults, the trustee can foreclose through a non-judicial process (trustee's sale) rather than going through court — faster and less expensive than judicial foreclosure in mortgage states.

<h3>Acceleration Clause</h3>

An <strong>acceleration clause</strong> allows the lender to declare the entire outstanding loan balance immediately due and payable upon a specified triggering event. The most common trigger: default (failure to make payments).

Example: A borrower misses three monthly payments. Under the acceleration clause, the lender can demand the full remaining balance — not just the missed payments. If the balance is not paid, foreclosure proceedings begin.

<h3>Alienation Clause (Due-on-Sale Clause)</h3>

An <strong>alienation clause</strong> (also called a <strong>due-on-sale clause</strong>) requires the loan to be paid in full when the property is sold or transferred without the lender's approval. Most modern conventional mortgages include this clause, preventing loan assumptions without lender consent.

<strong>Federal protection</strong>: The Garn-St. Germain Depository Institutions Act (1982) preempts state laws that restricted due-on-sale enforcement — lenders now have strong federal authority to enforce these clauses.

<h3>Prepayment Penalty Clause</h3>

A <strong>prepayment penalty</strong> charges the borrower a fee if they pay off the loan early (within a specified period, often 3-5 years). Lenders use prepayment penalties to ensure they recoup their interest income.

<ul>
<li>Common in many commercial loans and some subprime mortgages</li>
<li>FHA, VA, and USDA loans do not allow prepayment penalties</li>
<li>Most conventional loans today do not have prepayment penalties, though they once were common</li>
</ul>

<h3>Defeasance Clause</h3>

A <strong>defeasance clause</strong> provides that the mortgage or deed of trust becomes null and void — is "defeated" — when the borrower repays the loan in full. Upon full repayment, the deed of trust trustee reconveys the title back to the borrower free and clear of the lien.

This clause confirms that the lender's security interest is extinguished when the debt is satisfied. In Virginia, the lender must record a <strong>deed of release</strong> (or the trustee records a reconveyance) in the land records confirming the lien is discharged.

<h3>Subordination Clause</h3>

A <strong>subordination clause</strong> allows a lender to agree that their mortgage or deed of trust will be inferior (subordinate) to another lien on the property. This is most commonly used when:
<ul>
<li>A landowner wants to build on the land using a construction loan — the land seller/holder of a purchase money mortgage agrees to subordinate to the construction lender</li>
<li>A lender refinancing a first mortgage requires any second mortgage holder to subordinate their existing second to the new first</li>
</ul>

<h3>Subrogation Clause</h3>

<strong>Subrogation</strong> is the substitution of one party for another with respect to a right or claim. In mortgages: when a title insurance company pays a claim on behalf of a lender for a title defect, the title company steps into the lender's shoes and can pursue the party who caused the defect.

<h3>Exculpatory Clause</h3>

Found primarily in commercial loans: limits the lender's recourse to the property only (non-recourse financing). If the borrower defaults, the lender can foreclose but cannot pursue the borrower personally for any deficiency. This is rare in residential lending but common in commercial real estate investment.

<strong>Exam tip</strong>: Acceleration = whole balance due on default. Due-on-sale = balance due if property is transferred without lender approval. Defeasance = lien released upon full repayment. These three are the most tested mortgage clause concepts.`,
        },
      ],
    },
    {
      slug: 'loan-process-qualification',
      title: 'Loan Process & Qualification',
      lessons: [
        {
          slug: 'underwriting-qualification-criteria',
          title: 'Underwriting & Qualification Criteria',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['DTI ratio', 'front-end ratio', 'back-end ratio', 'LTV', 'credit score', 'income documentation', 'asset verification', 'PITI'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate front-end and back-end DTI ratios from income and debt figures' },
            { type: 'mini_quiz', prompt: 'Does this borrower qualify for a conventional loan based on the qualification standards?' },
          ],
          content: `## Underwriting and Qualification Criteria

Underwriting is the lender's process of evaluating a borrower's creditworthiness and ability to repay. Understanding the qualification criteria helps you advise buyers on their realistic purchasing power and set appropriate expectations before they start shopping.

<h3>The Four C's of Underwriting</h3>

Lenders evaluate borrowers across four dimensions:
<ul>
<li><strong>Capacity</strong>: The borrower's ability to repay — income, employment stability, DTI ratios</li>
<li><strong>Credit</strong>: Credit history and score</li>
<li><strong>Capital</strong>: Assets and reserves — down payment, closing costs, and cash remaining after closing</li>
<li><strong>Collateral</strong>: The property itself — value (appraisal), condition, and type</li>
</ul>

<h3>Debt-to-Income (DTI) Ratios</h3>

DTI ratios compare the borrower's monthly debt obligations to their gross monthly income.

<strong>Front-end ratio (Housing ratio)</strong>: Monthly housing costs (PITI — Principal, Interest, Taxes, Insurance) divided by gross monthly income.

<strong>PITI</strong>: Principal + Interest + Property Taxes + Homeowner's Insurance (and if applicable: PMI, HOA dues)

Example: Monthly PITI = $1,800. Gross monthly income = $6,000. Front-end ratio = 1,800/6,000 = 30%.

<strong>Back-end ratio (Total DTI)</strong>: All monthly debt payments (PITI + car payments + student loans + credit card minimums + any other installment debts) divided by gross monthly income.

Example: Monthly PITI = $1,800. Monthly car payment = $400. Monthly student loan = $200. Gross income = $6,000. Back-end = (1,800 + 400 + 200) / 6,000 = 40%.

<strong>Standard DTI guidelines:</strong>
<ul>
<li>Conventional: Front-end 28-36%, back-end 43% maximum (higher with compensating factors and DU/LP approval)</li>
<li>FHA: Front-end 31%, back-end 43% (up to 50% with strong compensating factors)</li>
<li>VA: Uses residual income analysis; back-end can be higher if residual income is sufficient</li>
</ul>

<h3>Loan-to-Value (LTV) Ratio</h3>

LTV = Loan Amount ÷ Appraised Value (or Purchase Price, whichever is less)

Example: Purchase price $400,000. Loan amount $320,000. LTV = 320,000/400,000 = 80%.

<strong>Why LTV matters:</strong>
<ul>
<li>LTV above 80%: PMI required on conventional loans</li>
<li>LTV affects interest rate (higher LTV = higher rate on conventional)</li>
<li>LTV above 95%: Limited program availability</li>
<li>LTV at 97%: Maximum on many conventional first-time buyer programs</li>
</ul>

When the appraised value comes in below the purchase price, the lender calculates LTV based on the lower appraised value — creating an immediate LTV problem that may require a higher down payment or price renegotiation.

<h3>Credit Score Requirements</h3>

Lenders use FICO scores (or equivalent) from the three major bureaus (Equifax, Experian, TransUnion). For mortgage purposes, lenders typically use the middle of the three scores. For joint applications, they use the lower of the two borrowers' middle scores.

<strong>General credit score thresholds:</strong>
<ul>
<li>740+: Best rates, easiest qualification</li>
<li>700-739: Good rates, standard qualification</li>
<li>660-699: Conventional qualification with higher rates or fees</li>
<li>620-659: Minimum for most conventional programs</li>
<li>580-619: FHA with 3.5% down</li>
<li>500-579: FHA with 10% down</li>
<li>Below 500: Very limited options</li>
</ul>

<h3>Income Documentation</h3>

<strong>W-2 employees</strong>: Last 2 years of W-2s and federal tax returns, plus recent pay stubs

<strong>Self-employed borrowers</strong>: Last 2 years of personal and business tax returns, year-to-date P&L statement, and bank statements. Lenders typically average 2-year self-employment income and cannot use the current year if it's significantly higher without documentation.

<strong>Rental income</strong>: Current signed leases; only 75% of rental income is counted (the other 25% is reserved for vacancy/expenses)

<strong>Bonus and overtime</strong>: Typically requires 2-year history and employer confirmation it will continue

<h3>Asset Verification</h3>

Lenders require borrowers to have:
<ul>
<li>Sufficient funds for down payment (verified through 2+ months of bank statements)</li>
<li>Closing cost funds</li>
<li>Reserves: Some programs require 2-6 months of PITI in savings after closing</li>
</ul>

<strong>Gift funds</strong>: Down payment can come from family gifts in many programs, but the gift must be properly documented with a gift letter and bank wire trail. For conventional loans, gift funds cannot comprise 100% of the down payment if the borrower is putting less than 20% down (varies by program).

<strong>Exam tip</strong>: Front-end ratio = PITI/income. Back-end ratio = all debt/income. LTV = loan/value. Know the standard DTI guidelines for conventional (43%) and FHA (43-50%). Know that LTV determines PMI requirement.`,
        },
        {
          slug: 'respa-tila-disclosure-requirements',
          title: 'RESPA, TILA & Loan Disclosure Requirements',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['RESPA', 'TILA', 'Loan Estimate', 'Closing Disclosure', 'TRID', 'APR', 'finance charge', 'three-day right of rescission', 'HUD-1'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'TRID timeline — when must the Loan Estimate and Closing Disclosure be provided?' },
          ],
          content: `## RESPA, TILA, and Loan Disclosure Requirements (TRID)

Two major federal consumer protection laws — RESPA and TILA — were combined into a single disclosure framework in 2015 known as TRID (TILA-RESPA Integrated Disclosures). Every buyer with a mortgage will receive these disclosures, and as their agent you should understand what they mean and when they must be provided.

<h3>TILA — Truth in Lending Act</h3>

The <strong>Truth in Lending Act (TILA)</strong> requires lenders to clearly disclose the true cost of credit in a standardized format. Key TILA disclosures:

<ul>
<li><strong>Annual Percentage Rate (APR)</strong>: The true cost of borrowing expressed as a yearly rate, including the interest rate plus certain fees (origination fees, points, some mortgage insurance). APR is always higher than the note rate because it includes fees spread over the loan term.</li>
<li><strong>Finance charge</strong>: The total dollar cost of the loan (total interest + certain fees) over the loan's life</li>
<li><strong>Amount financed</strong>: The loan amount minus any prepaid finance charges</li>
<li><strong>Total of payments</strong>: The total amount paid over the loan's life (principal + interest + fees)</li>
</ul>

<h3>RESPA — Real Estate Settlement Procedures Act</h3>

<strong>RESPA</strong> governs the settlement process for federally related mortgage loans and has three main purposes:
<ol>
<li>Require advance disclosure of settlement costs (now through TRID)</li>
<li>Prohibit kickbacks and unearned fees (Section 8)</li>
<li>Prohibit sellers from requiring buyers to use specific settlement service providers</li>
</ol>

<h3>TRID — The Combined Disclosure Framework</h3>

Since October 2015, the Loan Estimate (from TILA) and the HUD-1 Settlement Statement (from RESPA) were replaced by two new integrated forms:

<strong>Loan Estimate (LE)</strong>:
<ul>
<li>Provided within <strong>3 business days</strong> of receiving a loan application</li>
<li>Shows estimated interest rate, monthly payment, total closing costs, and key loan features</li>
<li>Written in clear, consumer-friendly language with specific comparisons</li>
<li>The lender is bound by the LE's estimates within tolerance levels (some fees can change; others cannot)</li>
</ul>

<strong>Closing Disclosure (CD)</strong>:
<ul>
<li>Provided to the buyer no later than <strong>3 business days before closing</strong></li>
<li>Shows final, actual figures for all loan terms and closing costs</li>
<li>Buyers must review and compare to the LE</li>
<li>The 3-business-day waiting period cannot be waived except in specific hardship circumstances</li>
</ul>

<strong>Business days for TRID</strong>: "Business days" for TRID purposes = all calendar days except Sundays and federal public holidays. This is different from how some contract deadlines count business days — important distinction.

<h3>Timing Example</h3>

If a closing is scheduled for Friday:
<ul>
<li>The CD must be received by the buyer by Tuesday (3 business days before Friday: Thursday = 1, Wednesday = 2, Tuesday = 3)</li>
<li>If the CD is received Thursday, the earliest the closing can occur is Monday (3 days after Thursday delivery: Friday = 1, Saturday = 2, Monday = 3 — Sunday does not count)</li>
</ul>

This is one of the most common exam calculation scenarios.

<h3>Three-Day Right of Rescission (Refinances Only)</h3>

For refinances of primary residences, TILA provides borrowers a <strong>three-business-day right of rescission</strong> — the right to cancel the refinance transaction after closing. This right does NOT apply to purchase transactions — only refinances.

If the borrower exercises the rescission right, the lender must release the lien and return all fees paid within 20 calendar days.

<h3>RESPA Section 8 — No Kickbacks</h3>

As covered in the ethics module, RESPA Section 8 prohibits giving or receiving anything of value in exchange for referrals of settlement service business. This applies to:
<ul>
<li>Payments between agents and title companies</li>
<li>Payments between agents and mortgage lenders</li>
<li>Free services, gifts, or discounts provided as referral inducements</li>
</ul>

<strong>Exam tip</strong>: TRID = Loan Estimate within 3 days of application, Closing Disclosure 3 business days before closing. Three-day rescission applies to refinances only, not purchases. APR is always higher than the note rate because it includes fees.`,
        },
        {
          slug: 'secondary-mortgage-market',
          title: 'The Secondary Mortgage Market',
          lessonType: 'reading',
          estimatedMinutes: 16,
          keyTerms: ['Fannie Mae', 'Freddie Mac', 'Ginnie Mae', 'secondary market', 'mortgage-backed security', 'conforming loan limit', 'portfolio lender'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Primary vs. secondary mortgage market functions — who does what?' },
          ],
          content: `## The Secondary Mortgage Market

The secondary mortgage market is largely invisible to homebuyers, but it is the engine that keeps mortgage money available and affordable. Understanding how it works helps explain why lenders care so much about conforming loan limits and standard underwriting criteria.

<h3>Primary vs. Secondary Market</h3>

<strong>Primary mortgage market</strong>: Where lenders originate loans directly to borrowers. The primary market is what buyers interact with — applying with a bank, credit union, or mortgage company to get a home loan.

<strong>Secondary mortgage market</strong>: Where lenders sell their originated loans to investors, freeing up capital to make new loans. Without the secondary market, lenders would run out of money to lend.

The cycle:
<ol>
<li>Lender originates a mortgage and provides $400,000 to a homebuyer</li>
<li>Lender sells the mortgage to Fannie Mae for $400,000 (plus a small profit)</li>
<li>Lender now has $400,000 to lend again to the next buyer</li>
<li>Fannie Mae packages the loan with others into a mortgage-backed security (MBS) and sells it to investors</li>
</ol>

<h3>The Three GSEs</h3>

The secondary market is dominated by three Government-Sponsored Enterprises (GSEs):

<strong>Fannie Mae (Federal National Mortgage Association)</strong>:
<ul>
<li>Chartered by Congress, publicly traded, but with an implied government backstop</li>
<li>Purchases conventional conforming loans from lenders</li>
<li>Sets underwriting standards and loan limits for conforming loans</li>
<li>Does not lend directly to homebuyers</li>
</ul>

<strong>Freddie Mac (Federal Home Loan Mortgage Corporation)</strong>:
<ul>
<li>Similar to Fannie Mae — also purchases conventional conforming loans</li>
<li>Created to provide competition to Fannie Mae and ensure more uniform standards</li>
<li>Both Fannie and Freddie were placed in federal conservatorship during the 2008 financial crisis and remain there</li>
</ul>

<strong>Ginnie Mae (Government National Mortgage Association)</strong>:
<ul>
<li>Unlike Fannie and Freddie, Ginnie Mae is a wholly government-owned corporation within HUD</li>
<li>Guarantees mortgage-backed securities backed by FHA, VA, and USDA loans</li>
<li>Does not purchase loans or set underwriting standards — it guarantees the MBS backed by government-insured loans</li>
</ul>

<h3>Conforming Loan Limits</h3>

A <strong>conforming loan</strong> is one that meets Fannie Mae/Freddie Mac purchase standards — including loan limits. The baseline conforming loan limit for 2024 is <strong>$766,550</strong> for a single-family home in most U.S. counties. High-cost areas (including parts of Northern Virginia) have higher limits.

Loans that exceed conforming limits are <strong>jumbo loans</strong>, which are not purchased by Fannie/Freddie and must be held in lender portfolios or sold to private investors. Jumbo loans typically have:
<ul>
<li>Higher interest rates</li>
<li>Stricter qualification requirements (higher credit scores, lower DTI, larger down payments)</li>
<li>Less flexibility on property types</li>
</ul>

<h3>Why This Matters for Agents</h3>

<ul>
<li>Buyers financing above the conforming limit need to understand they are in jumbo territory</li>
<li>Lenders who keep loans in portfolio (portfolio lenders) can sometimes offer more flexible terms than conforming guidelines allow</li>
<li>Lenders who sell to Fannie/Freddie must follow exact agency guidelines — there is no flexibility in how they underwrite. This is why conforming lenders are strict about DTI, LTV, and documentation.</li>
<li>MBS markets affect mortgage rates — when the bond market is volatile, mortgage rates move</li>
</ul>

<strong>Exam tip</strong>: Fannie Mae and Freddie Mac buy conventional conforming loans from lenders. Ginnie Mae guarantees MBS backed by FHA/VA/USDA loans. Ginnie Mae is a government agency; Fannie and Freddie are GSEs (not government agencies). Loans above conforming limits are jumbo loans.`,
        },
      ],
    },
    {
      slug: 'appraisal-methods',
      title: 'Appraisal Methods',
      lessons: [
        {
          slug: 'sales-comparison-approach',
          title: 'Sales Comparison Approach',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: ['comparable sale', 'adjustment', 'subject property', 'market value', 'arm\'s length transaction', 'bracketing', 'reconciliation'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Apply adjustments to three comparables and reconcile a final value estimate' },
            { type: 'mini_quiz', prompt: 'When do you add vs. subtract adjustments to comparable sales?' },
          ],
          content: `## The Sales Comparison Approach to Appraisal

The sales comparison approach is the primary method for valuing residential property and the one most directly relevant to an agent's day-to-day work. Every CMA an agent prepares uses the same logic as the sales comparison approach — so understanding how appraisers apply it sharpens your own pricing analysis skills.

<h3>Overview of the Sales Comparison Approach</h3>

The sales comparison approach (also called the market data approach) estimates a property's value by comparing it to recently sold properties that are similar in size, condition, location, and features. The underlying premise: a buyer will not pay more for a property than they would pay for a comparable substitute.

<strong>Steps in the sales comparison approach:</strong>
<ol>
<li>Select comparable sales (comps) that are recent, nearby, and similar to the subject property</li>
<li>Make dollar adjustments for differences between each comp and the subject</li>
<li>Reconcile the adjusted comparable sale prices into a final value estimate for the subject</li>
</ol>

<h3>Selecting Comparable Sales</h3>

A quality comparable sale should be:
<ul>
<li><strong>Recent</strong>: Typically within the past 6-12 months (lenders may require within 6 months)</li>
<li><strong>Nearby</strong>: In the same neighborhood or comparable market area</li>
<li><strong>Similar</strong>: Comparable size (gross living area), bedroom/bath count, property type, condition, and age</li>
<li><strong>Arm's length transaction</strong>: A sale between unrelated parties with no unusual motivations — no foreclosures, no related-party sales, no distressed sales (or disclosed and adjusted for if included)</li>
</ul>

The goal is to <strong>bracket</strong> the subject property — select comps that are both slightly superior and slightly inferior to the subject, so adjustments flow in both directions. Bracketing improves the credibility of the analysis.

<h3>Making Adjustments</h3>

Adjustments account for the differences between the subject property and each comparable. The rule:

<strong>If the comparable is BETTER than the subject → subtract the adjustment</strong>
<strong>If the comparable is INFERIOR to the subject → add the adjustment</strong>

Logic: If a comp sold for $350,000 but has a superior feature (a garage) that the subject lacks, the comp would have sold for less without the garage. To make the comp equivalent to the subject, we subtract the value of the garage.

Conversely, if a comp sold for $340,000 and lacks a feature the subject has (a finished basement), the comp would have sold for more with that basement. To make the comp equivalent to the subject, we add the value of the basement.

<strong>Common adjustment categories:</strong>
<ul>
<li>Location (neighborhood differences, proximity to amenities or nuisances)</li>
<li>Gross Living Area (GLA) — square footage above grade</li>
<li>Bedroom and bathroom count</li>
<li>Garage (attached vs. detached; number of spaces)</li>
<li>Age and condition</li>
<li>Lot size</li>
<li>Basement (finished vs. unfinished area)</li>
<li>Amenities (pool, fireplace, updated kitchen)</li>
<li>Sale concessions (seller paid closing costs, point buydowns)</li>
</ul>

<h3>The Market Condition (Time) Adjustment</h3>

If comparable sales are more than a few months old, the appraiser may apply a market condition adjustment to account for price appreciation or depreciation since the comp's sale date. Example: Market has been rising 0.5% per month. A comp sold 6 months ago gets a +3% time adjustment before other adjustments are applied.

<h3>Reconciliation</h3>

After adjusting all comparables, the appraiser has a range of adjusted sale prices. <strong>Reconciliation</strong> is the analytical process of weighing the comparables and arriving at a single value estimate.

The appraiser does not simply average the adjusted values. Instead, they weight each comparable based on:
<ul>
<li>Similarity to the subject (fewer adjustments = more reliable comp)</li>
<li>Quality and reliability of the sale data</li>
<li>Recency</li>
</ul>

The most similar comparable, with the fewest and smallest adjustments, receives the most weight.

<h3>Importance for Agents</h3>

An agent who understands the sales comparison approach can:
<ul>
<li>Price listings more accurately by building a CMA using appraiser-quality logic</li>
<li>Anticipate appraisal issues before listing or making an offer</li>
<li>Counsel buyers on when an appraisal gap is likely and why</li>
<li>Challenge appraisals that use inappropriate comps or incorrect adjustments by providing a documented rebuttal (Reconsideration of Value)</li>
</ul>

<strong>Exam tip</strong>: Subtract from comps that are better than the subject. Add to comps that are inferior. Reconciliation is NOT an average — it weights comps by quality and similarity. Arm's length transaction = no special relationship between buyer and seller.`,
        },
        {
          slug: 'income-cost-approaches',
          title: 'Income & Cost Approaches to Value',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['income approach', 'GRM', 'capitalization rate', 'NOI', 'cost approach', 'reproduction cost', 'replacement cost', 'depreciation', 'accrued depreciation'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate property value using the GRM and capitalization rate methods' },
            { type: 'flashcard', prompt: 'Three approaches to value — which is used for what property type?' },
          ],
          content: `## Income and Cost Approaches to Value

The sales comparison approach works best for typical residential properties with plenty of comparable sales. For income-producing properties and unique or special-use properties, appraisers use two additional approaches: the income approach and the cost approach.

<h3>The Income Approach</h3>

The income approach estimates value based on the income a property generates. It is used primarily for income-producing properties: apartment buildings, commercial properties, mixed-use properties, and investment residential properties.

<strong>Core principle</strong>: An investor will pay a price that reflects the expected return on investment from the property's net income stream.

<h3>Gross Rent Multiplier (GRM)</h3>

The <strong>GRM</strong> is a simplified income approach shortcut:

<strong>GRM = Sale Price ÷ Gross Annual (or Monthly) Rent</strong>

If similar properties in the market sell for 8 times their annual gross rent (GRM = 8), and a subject property generates $36,000/year in gross rent:

Value = $36,000 × 8 = <strong>$288,000</strong>

GRM is fast but crude — it ignores vacancy, operating expenses, and property condition. It is useful for a quick sanity check on small residential income properties.

<h3>Capitalization Rate (Cap Rate) Method</h3>

The cap rate method is more sophisticated and more commonly used for commercial and multi-family properties.

<strong>Steps:</strong>
<ol>
<li><strong>Calculate Potential Gross Income (PGI)</strong>: Total income if property is 100% occupied at market rents</li>
<li><strong>Less Vacancy and Credit Loss</strong>: Subtract a vacancy rate (typically 5-10% for a market analysis)</li>
<li><strong>Equals Effective Gross Income (EGI)</strong></li>
<li><strong>Less Operating Expenses</strong>: Property taxes, insurance, management fees, maintenance, reserves. Does NOT include mortgage payments (which are owner-specific).</li>
<li><strong>Equals Net Operating Income (NOI)</strong></li>
<li><strong>Divide NOI by the Cap Rate to get Value</strong></li>
</ol>

<strong>Value = NOI ÷ Cap Rate</strong>

Or rearranged: <strong>Cap Rate = NOI ÷ Value</strong>

Example: A building generates NOI of $48,000 per year. The market cap rate for comparable properties is 6%.

Value = $48,000 ÷ 0.06 = <strong>$800,000</strong>

<strong>Cap rate intuition</strong>: A higher cap rate means lower value for the same income (higher risk or lower demand). A lower cap rate means higher value (lower risk, prime location, high demand). Cap rates move inversely with property prices — when cap rates compress, values rise.

<h3>The Cost Approach</h3>

The cost approach estimates value as the cost to reproduce or replace the improvements, minus depreciation, plus the land value. It is used when:
<ul>
<li>The property is a special-use property with no comparable sales (churches, schools, government buildings)</li>
<li>The property is new construction</li>
<li>The property is unique and market data is insufficient</li>
<li>As a check on the sales comparison approach in residential appraisals</li>
</ul>

<strong>Cost Approach Formula:</strong>
<strong>Value = Land Value + Reproduction/Replacement Cost New − Accrued Depreciation</strong>

<strong>Land value</strong>: Estimated separately using sales comparison of vacant land. Land never depreciates.

<strong>Reproduction cost</strong>: Cost to build an exact replica of the improvement using the same materials and methods.
<strong>Replacement cost</strong>: Cost to build an improvement of equal utility using current materials and methods. More commonly used because reproducing obsolete construction methods may be impractical.

<h3>Depreciation in the Cost Approach</h3>

<strong>Accrued depreciation</strong> is the total loss in value from all causes from the time of construction to the date of appraisal.

Three types:
<ul>
<li><strong>Physical deterioration</strong>: Wear and tear from use and age. Can be curable (deferred maintenance the owner should fix) or incurable (structural issues too costly to repair relative to the value gain).</li>
<li><strong>Functional obsolescence</strong>: Loss of value due to outdated design or features. Curable: A single bathroom house in a market that expects two bathrooms — add a bathroom. Incurable: An awkward floor plan that cannot be economically corrected.</li>
<li><strong>External (Economic) obsolescence</strong>: Loss of value from outside the property — always incurable because the owner cannot fix it. Examples: a new highway nearby, industrial plant moving in, neighborhood decline.</li>
</ul>

<strong>Exam tip</strong>: GRM = sale price ÷ gross rent. Value = NOI ÷ cap rate. The three approaches to value are: sales comparison (best for residential), income (best for income properties), and cost (best for special-use/new construction). External obsolescence is always incurable.`,
        },
        {
          slug: 'appraisal-process-standards',
          title: 'Appraisal Process & USPAP Standards',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['USPAP', 'certified appraiser', 'licensed appraiser', 'appraisal independence', 'AMC', 'retroactive appraisal', 'market value definition'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Appraisal independence rules — which contacts between agents and appraisers are permitted?' },
          ],
          content: `## The Appraisal Process and USPAP Standards

Every purchase financed by a federally regulated lender requires an independent appraisal. The appraisal process is governed by professional standards, federal law, and ethical rules that agents must understand — both to set accurate expectations for clients and to avoid crossing legal lines that could get them in trouble.

<h3>The Appraisal Profession in Virginia</h3>

Appraisers in Virginia are licensed or certified by the Virginia Real Estate Appraiser Board (also under DPOR). There are several credential levels:

<ul>
<li><strong>Trainee Appraiser</strong>: Must work under a supervisory appraiser</li>
<li><strong>Licensed Residential Appraiser</strong>: Can appraise non-complex 1-4 family residential properties up to $1 million transaction value</li>
<li><strong>Certified Residential Appraiser</strong>: Can appraise all residential properties regardless of transaction value</li>
<li><strong>Certified General Appraiser</strong>: Can appraise all real property types including commercial</li>
</ul>

<h3>USPAP — Uniform Standards of Professional Appraisal Practice</h3>

USPAP is the authoritative guide for appraisal practice in the United States, developed by The Appraisal Foundation and adopted by federal regulators. It is the minimum standard of professional conduct for appraisers.

Key USPAP requirements relevant to agents:

<ul>
<li><strong>Independence</strong>: An appraiser cannot be pressured by any party (lender, real estate agent, seller, or buyer) to reach a predetermined value conclusion. The appraiser's opinion must be objective and independent.</li>
<li><strong>Competence</strong>: Appraisers must only accept assignments they are competent to perform</li>
<li><strong>Market value definition</strong>: USPAP defines market value as the most probable price a property would bring in a competitive and open market, with buyer and seller both acting prudently and knowledgeably, and the price not being affected by undue stimulus</li>
<li><strong>Confidentiality</strong>: Appraisers cannot share assignment details or results without client authorization</li>
</ul>

<h3>Appraisal Independence Requirements Under Dodd-Frank</h3>

The Dodd-Frank Wall Street Reform and Consumer Protection Act (2010) strengthened appraisal independence rules in response to the 2008 financial crisis. The key rule for agents:

<strong>Agents (and lenders, or anyone with an interest in the outcome) cannot:</strong>
<ul>
<li>Pressure, coerce, extort, or bribe an appraiser to provide a value favorable to the transaction</li>
<li>Tell an appraiser what value is needed for the deal to work</li>
<li>Threaten to withhold business or payment if the appraiser doesn't hit the number</li>
<li>Discuss the contract price in a way that implies a desired outcome</li>
</ul>

<strong>What agents CAN legitimately do:</strong>
<ul>
<li>Provide a list of comparable sales to the appraiser for consideration — this is not only permitted, it is encouraged when done objectively</li>
<li>Point out specific features of the property that might not be apparent</li>
<li>Correct factual errors in the appraisal report after delivery through a Reconsideration of Value request</li>
<li>Provide updated comps discovered after the inspection date if they support the value</li>
</ul>

<h3>Appraisal Management Companies (AMCs)</h3>

Since Dodd-Frank, most residential appraisals are ordered through <strong>Appraisal Management Companies (AMCs)</strong>. AMCs serve as a firewall between the lender and the appraiser:
<ul>
<li>The lender contracts with the AMC, not directly with the appraiser</li>
<li>The AMC randomly assigns the appraisal to a licensed appraiser from its panel</li>
<li>This prevents the lender from pressuring a specific appraiser they have a relationship with</li>
</ul>

Agents sometimes complain that AMC appraisers are unfamiliar with local markets. The appropriate response is to provide the appraiser with quality comparable data — not to complain to the lender about the appraiser.

<h3>When an Appraisal Comes In Low</h3>

Agents have a legitimate role when an appraisal comes in below the contract price:
<ol>
<li>Review the appraisal for factual errors (wrong square footage, missing bedroom, wrong comparable selected)</li>
<li>Identify recent comparable sales the appraiser may have missed</li>
<li>Submit a Reconsideration of Value (ROV) through the lender/AMC with documented evidence</li>
</ol>

An ROV is not a protest or a complaint — it is a formal request to the appraiser to reconsider specific data points. The appraiser has no obligation to change their value, but they must consider the information.

<strong>Exam tip</strong>: USPAP governs appraiser conduct. Appraisers must be independent — agents cannot tell them what value to reach. Agents can provide comps and factual information. Dodd-Frank requires AMC firewall between lenders and appraisers.`,
        },
      ],
    },
    {
      slug: 'real-estate-math-calculations',
      title: 'Real Estate Math & Calculations',
      lessons: [
        {
          slug: 'commission-calculations',
          title: 'Commission Calculations',
          lessonType: 'interactive',
          estimatedMinutes: 20,
          keyTerms: ['commission rate', 'split', 'co-op commission', 'net to seller', 'gross commission income', 'referral fee deduction'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate each agent\'s net commission from a $450,000 sale with a 6% total commission and a 60/40 broker split' },
            { type: 'mini_quiz', prompt: 'Commission math practice problems — solve each to two decimal places' },
          ],
          content: `## Commission Calculations

Real estate math is a guaranteed portion of your exam. Commission calculations are the most straightforward math topic — master this section, then approach the others with the same systematic thinking.

<h3>The Basic Commission Formula</h3>

<strong>Commission = Sale Price × Commission Rate</strong>

Example: A property sells for $385,000 with a total commission of 5%.
Commission = $385,000 × 0.05 = <strong>$19,250</strong>

When working with percentages, always convert to decimals: 5% = 0.05, 6% = 0.06, 2.5% = 0.025.

<h3>Splitting the Commission: Listing vs. Buyer Brokerage</h3>

The total commission is typically split between the listing brokerage and the buyer's brokerage. This split is specified in the listing agreement and/or the MLS cooperative compensation offer.

Example: $19,250 total commission, split 50/50 between listing and buyer brokerages.
<ul>
<li>Listing brokerage receives: $19,250 × 0.50 = $9,625</li>
<li>Buyer brokerage receives: $9,250 × 0.50 = $9,625</li>
</ul>

Splits are not always 50/50. A listing might offer 2.5% to the buyer's broker while the listing broker earns 3%.

<h3>Broker/Agent Splits</h3>

Within each brokerage, the commission is further split between the broker and the individual agent. These splits are determined by the broker-agent agreement and vary widely.

Example: The listing brokerage received $9,625. The listing agent has a 70/30 split with their broker (agent gets 70%, broker gets 30%).
<ul>
<li>Listing agent receives: $9,625 × 0.70 = $6,737.50</li>
<li>Listing broker retains: $9,625 × 0.30 = $2,887.50</li>
</ul>

<h3>Full Multi-Level Commission Calculation</h3>

Problem: A home sells for $450,000. The total commission is 6%. The commission is split 50/50 between listing and buyer's brokerages. The listing agent has a 60/40 split (60% to agent, 40% to broker). The buyer's agent has a 55/45 split (55% to agent, 45% to broker). What does each agent and broker net?

<strong>Step 1</strong>: Total commission = $450,000 × 0.06 = $27,000

<strong>Step 2</strong>: Listing brokerage share = $27,000 × 0.50 = $13,500
Buyer's brokerage share = $27,000 × 0.50 = $13,500

<strong>Step 3</strong>: Listing agent = $13,500 × 0.60 = $8,100
Listing broker (retained) = $13,500 × 0.40 = $5,400

Buyer's agent = $13,500 × 0.55 = $7,425
Buyer's broker (retained) = $13,500 × 0.45 = $6,075

<h3>Referral Fee Deduction</h3>

When a referral fee is owed (to the referring broker who sent the client), the referral is deducted from the receiving brokerage's share before the broker/agent split.

Example: The listing agent received a referral from another broker and owes a 25% referral fee. The listing brokerage's $13,500 first has the referral fee deducted:
<ul>
<li>Referral fee: $13,500 × 0.25 = $3,375 (goes to referring broker)</li>
<li>Net to listing brokerage after referral: $13,500 − $3,375 = $10,125</li>
<li>Listing agent's 60% cut: $10,125 × 0.60 = $6,075</li>
</ul>

<h3>Net to Seller Calculations</h3>

Some exam questions ask for the seller's net proceeds:

<strong>Net to Seller = Sale Price − Total Commission − Other Closing Costs</strong>

If the problem specifies only commission: Sale Price $400,000 at 5.5% commission.
Commission = $400,000 × 0.055 = $22,000
Net to seller (before other costs) = $400,000 − $22,000 = $378,000

<h3>Working Backward: Finding the Sale Price from Commission</h3>

Problem: An agent received a commission of $11,700. The commission rate was 4.5%. What was the sale price?

Sale Price = Commission ÷ Commission Rate = $11,700 ÷ 0.045 = <strong>$260,000</strong>

<strong>Exam tip</strong>: Always convert percentages to decimals before calculating. Work through multi-step problems systematically: total commission first, then brokerage split, then agent split. Referral fees come out before the broker/agent split.`,
        },
        {
          slug: 'prorations-and-adjustments',
          title: 'Prorations & Closing Adjustments',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: ['proration', 'daily rate', 'banker\'s year', '365-day year', 'tax proration', 'HOA fee proration', 'rent proration', 'closing date rule'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate property tax and HOA fee prorations for a closing on March 15, using both banker\'s year and calendar year methods' },
            { type: 'mini_quiz', prompt: 'Proration calculation practice: who owes what at closing?' },
          ],
          content: `## Prorations and Closing Adjustments

Prorations divide ongoing costs between buyer and seller at closing based on the closing date. The party who "owned" the time period being charged pays for it. Getting prorations right is a math skill tested heavily on the exam and used at every closing.

<h3>The Core Principle</h3>

The seller owns the property up to and including the day before closing (or the day of closing, depending on local custom — in Virginia, the buyer owns the closing date). The expenses of ownership are prorated accordingly.

<ul>
<li>If the seller has already paid a bill covering a period that extends past closing, the buyer owes the seller for the buyer's portion</li>
<li>If a bill is due after closing but covers a period when the seller owned the property, the seller owes the buyer for the seller's portion</li>
</ul>

<h3>The Two Calculation Methods</h3>

<strong>Banker's Year (30-day months / 360-day year)</strong>: Every month has 30 days; the year has 360 days. This simplifies calculations.

<strong>Calendar Year (365-day year)</strong>: Uses the actual number of days in each month and year. More precise, required by some lenders and common in Virginia practice.

For the exam, the question will specify which method to use, or the context will make it clear. When in doubt for a Virginia exam, the 365-day method reflects actual practice.

<h3>Property Tax Proration</h3>

Virginia property taxes are assessed and paid annually (or in semi-annual installments depending on the locality). Taxes are typically paid in arrears — you pay at the end of the year for the year you owned it.

<strong>Scenario</strong>: Closing is March 15. Annual taxes are $3,650. Using the 365-day year.

<strong>Step 1</strong>: Calculate the daily rate.
Daily rate = $3,650 ÷ 365 = $10.00/day

<strong>Step 2</strong>: Count the number of days the seller owned the property in the tax year.
January: 31 days, February: 28 days, March 1-14: 14 days
Total: 31 + 28 + 14 = 73 days

<strong>Step 3</strong>: Seller's share = 73 days × $10.00 = $730

At closing, the seller will owe the buyer a $730 credit (since taxes haven't been paid yet, the seller credits the buyer for the portion they owe so the buyer can pay the full-year bill later).

<h3>HOA Fee Proration</h3>

HOA fees are typically paid in advance (covering the current period). If the seller has prepaid HOA dues covering a period that extends past closing, the buyer owes the seller for the remaining days.

<strong>Scenario</strong>: Closing is September 22. Monthly HOA fee is $240. The seller has already paid October's dues ($240 prepaid). How much does the buyer owe the seller for September?

September has 30 days. Buyer owns September 22-30 = 9 days.
Daily rate = $240 ÷ 30 = $8.00/day
Buyer's share of September = 9 × $8.00 = $72.00

The buyer credits the seller $72.00 at closing.

<h3>Prepaid Rent Proration (Investment Properties)</h3>

If the closing property has tenants, any prepaid rent collected by the seller that covers the buyer's ownership period must be credited to the buyer.

<strong>Scenario</strong>: Closing is on April 10. Monthly rent is $1,500. The tenant paid April rent in full on April 1. The buyer owns April 10-30 = 21 days.

Daily rate = $1,500 ÷ 30 = $50.00/day (using 30-day month)
Buyer's share = 21 × $50.00 = $1,050

The seller credits the buyer $1,050 at closing for rent the seller collected but did not earn.

<h3>The 360-Day Banker's Year Method</h3>

If using a banker's year: every month = 30 days, year = 360 days.

Scenario: Same tax proration (closing March 15, $3,650 annual taxes).
Daily rate = $3,650 ÷ 360 = $10.139/day
Days owned by seller: January (30) + February (30) + March 1-14 (14) = 74 days (note: under banker's year, January = 30 days even though it has 31)
Seller's share = 74 × $10.139 = $750.29

<h3>Who Pays and Who Receives</h3>

<ul>
<li><strong>Seller owes buyer (buyer gets credit)</strong>: Unpaid taxes accrued during seller's ownership; unpaid utilities; prepaid rent on investment properties; prepaid tenant deposits held by seller</li>
<li><strong>Buyer owes seller (seller gets credit)</strong>: Prepaid taxes or HOA dues that cover period after closing; prepaid homeowner's insurance (if assumable); prepaid rents that will be returned to tenants</li>
</ul>

<strong>Exam tip</strong>: Daily rate = annual amount ÷ 360 (banker's) or ÷ 365 (calendar). Count the days carefully. Taxes in arrears = seller owes buyer. Prepaid bills = buyer owes seller.`,
        },
        {
          slug: 'loan-calculations',
          title: 'Loan Calculations & Mortgage Math',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: ['loan-to-value ratio', 'LTV', 'down payment', 'points', 'discount point', 'origination fee', 'monthly payment', 'amortization'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate LTV, required PMI, and first-year principal/interest split from a given loan scenario' },
            { type: 'mini_quiz', prompt: 'Loan math practice: LTV, points cost, and down payment calculations' },
          ],
          content: `## Loan Calculations and Mortgage Math

Loan math tests your ability to work with percentages, ratios, and financial concepts under exam conditions. The good news: if you practice these formulas until they are automatic, the math section of the exam becomes the easiest part.

<h3>Loan-to-Value (LTV) Calculations</h3>

<strong>LTV = Loan Amount ÷ Appraised Value (or Purchase Price, whichever is lower)</strong>

Problem: Purchase price $320,000, down payment $32,000.
Loan amount = $320,000 − $32,000 = $288,000
LTV = $288,000 ÷ $320,000 = 0.90 = <strong>90%</strong>

Working backward: Buyer wants 80% LTV on a $400,000 property. What is the required down payment?
Loan = $400,000 × 0.80 = $320,000
Down payment = $400,000 − $320,000 = <strong>$80,000</strong>

PMI is required when LTV exceeds 80% on a conventional loan.

<h3>Down Payment Calculations</h3>

<strong>Down Payment = Purchase Price × Down Payment Percentage</strong>

Problem: A VA buyer wants to put 0% down on a $375,000 home. Down payment = $0. Loan amount = $375,000.

Problem: FHA buyer, purchase price $280,000. Required: 3.5% down.
Down payment = $280,000 × 0.035 = $9,800
Loan amount = $280,000 − $9,800 = $270,200

<h3>Mortgage Points</h3>

A <strong>point</strong> equals 1% of the loan amount. Points are used to either:
<ul>
<li><strong>Pay origination fees (origination points)</strong>: Charged by the lender as a processing/origination fee</li>
<li><strong>Buy down the interest rate (discount points)</strong>: The borrower pays upfront points to reduce the interest rate for the life of the loan</li>
</ul>

Cost of points = Loan Amount × (Number of Points ÷ 100)

Problem: A buyer takes out a $240,000 loan and pays 1.5 points. What is the cost of points?
Cost = $240,000 × (1.5/100) = $240,000 × 0.015 = <strong>$3,600</strong>

Alternatively: $240,000 × 1.5% = $3,600

<h3>Typical Point/Rate Trade-off</h3>

The rule of thumb (not always exact): each discount point reduces the interest rate by approximately 0.125% to 0.25%. To determine whether buying points makes financial sense, calculate the break-even:

Break-even = Cost of Points ÷ Monthly Payment Savings

Example: Paying 2 points ($4,800) reduces the monthly payment by $40. Break-even = $4,800 ÷ $40 = 120 months (10 years). If the buyer plans to stay longer than 10 years, buying points makes sense.

<h3>Basic Monthly Payment Calculation</h3>

The exact monthly payment calculation requires a financial calculator or amortization table. However, the exam provides a monthly payment factor when needed, or asks conceptual questions.

Common reference: For a 30-year loan at 7%, the monthly payment per $1,000 borrowed is approximately $6.65.

Problem: $250,000 loan at 7% for 30 years.
Payment = 250 × $6.65 = <strong>$1,662.50</strong>

<h3>Amortization Concepts</h3>

<strong>Amortization</strong> is the process of paying down a loan through regular payments that cover both interest and principal. Early payments are mostly interest; later payments are mostly principal.

<strong>First month's interest calculation</strong>:
Monthly Interest = Principal × (Annual Rate ÷ 12)
On a $200,000 loan at 6%: Monthly interest = $200,000 × (0.06/12) = $200,000 × 0.005 = $1,000

If the monthly payment is $1,199.10:
Principal paid in month 1 = $1,199.10 − $1,000 = $199.10
Remaining balance after month 1 = $200,000 − $199.10 = $199,800.90

<h3>Total Interest Paid Over Loan Life</h3>

Total of all payments = Monthly Payment × Number of Payments
Total interest = Total of all payments − Original loan amount

Example: $200,000 loan, $1,199.10/month, 360 payments.
Total paid = $1,199.10 × 360 = $431,676
Total interest = $431,676 − $200,000 = $231,676

<strong>Exam tip</strong>: LTV = loan ÷ value. 1 point = 1% of loan amount. Monthly interest = balance × (annual rate ÷ 12). Know these formulas and you can answer any loan math question on the exam.`,
        },
        {
          slug: 'area-volume-calculations',
          title: 'Area, Volume & Acreage Calculations',
          lessonType: 'interactive',
          estimatedMinutes: 18,
          keyTerms: ['square footage', 'acreage', 'area formula', 'volume', 'cubic feet', 'acre definition', 'frontage'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate lot size, living area, and building footprint from given dimensions' },
            { type: 'mini_quiz', prompt: 'Area and acreage calculation practice problems' },
          ],
          content: `## Area, Volume, and Acreage Calculations

Area and acreage calculations appear on virtually every real estate exam. Know these formulas cold and you can answer them in seconds.

<h3>Basic Area Formulas</h3>

<strong>Rectangle/Square:</strong>
Area = Length × Width

Problem: A rectangular room is 14 feet long and 12 feet wide.
Area = 14 × 12 = <strong>168 square feet</strong>

<strong>Triangle:</strong>
Area = (Base × Height) ÷ 2 = 0.5 × Base × Height

Problem: A triangular lot has a base of 120 feet and a height of 80 feet.
Area = (120 × 80) ÷ 2 = <strong>4,800 square feet</strong>

<strong>Irregular shapes</strong>: Divide into rectangles and triangles, calculate each, then add together.

<h3>Square Footage of a Home</h3>

Only <strong>above-grade finished living area</strong> (Gross Living Area or GLA) counts in standard square footage calculations for comparable purposes. Typically excluded:
<ul>
<li>Basement area (unfinished or finished — appraisers note finished basement separately from GLA)</li>
<li>Garage</li>
<li>Unheated sunrooms or enclosed porches (in many markets)</li>
</ul>

Problem: A two-story home. First floor: 40 feet × 28 feet = 1,120 sq ft. Second floor: 40 feet × 24 feet (one section has a lower ceiling/sloped roof) = 960 sq ft.
Total GLA = 1,120 + 960 = <strong>2,080 square feet</strong>

<h3>Acreage Conversions</h3>

Key conversion facts to memorize:
<ul>
<li><strong>1 acre = 43,560 square feet</strong></li>
<li>1 square mile = 640 acres (one full section in the rectangular survey system)</li>
<li>1 mile = 5,280 feet</li>
</ul>

<strong>Converting square feet to acres:</strong>
Acres = Square Feet ÷ 43,560

Problem: A lot is 150 feet wide and 200 feet deep.
Square feet = 150 × 200 = 30,000 sq ft
Acres = 30,000 ÷ 43,560 = <strong>0.689 acres</strong>

<strong>Converting acres to square feet:</strong>
Square feet = Acres × 43,560

Problem: A 2.5-acre lot = 2.5 × 43,560 = 108,900 square feet

<h3>Volume Calculations</h3>

<strong>Volume = Length × Width × Height</strong>

Problem: An HVAC contractor needs to know the volume of a room to size the unit. Room is 20 feet × 15 feet × 9 feet (ceiling height).
Volume = 20 × 15 × 9 = <strong>2,700 cubic feet</strong>

Converting to cubic yards: 2,700 ÷ 27 = 100 cubic yards (1 cubic yard = 27 cubic feet)

<h3>Rectangular Survey Acreage Calculations</h3>

As covered in the legal descriptions module:
<ul>
<li>Full section = 640 acres</li>
<li>Each quarter division divides the acreage by 4</li>
</ul>

NE¼ of Section 12 = 640 ÷ 4 = 160 acres
S½ of the NW¼ of Section 12 = 640 ÷ 4 ÷ 2 = 80 acres
NW¼ of the NE¼ of the SW¼ of Section 12 = 640 ÷ 4 ÷ 4 ÷ 4 = 10 acres

<h3>Frontage Calculations</h3>

<strong>Frontage</strong> is the width of a lot at the street. Listing descriptions often describe lots by their frontage × depth.

"A 75 × 150 lot" means 75 feet of street frontage and 150 feet deep.
Area = 75 × 150 = 11,250 sq ft = 11,250 ÷ 43,560 = 0.258 acres

<h3>Price Per Square Foot</h3>

<strong>Price per square foot = Sale Price ÷ Square Footage</strong>

Problem: A 1,800 sq ft home sold for $360,000.
Price/sq ft = $360,000 ÷ 1,800 = <strong>$200/sq ft</strong>

Reverse: If the market rate is $185/sq ft, what would a 2,100 sq ft home be worth?
Value = 2,100 × $185 = <strong>$388,500</strong>

<h3>Price Per Acre</h3>

Problem: 4.5 acres sold for $135,000.
Price per acre = $135,000 ÷ 4.5 = <strong>$30,000 per acre</strong>

<strong>Exam tip</strong>: The one number to memorize above all others: <strong>1 acre = 43,560 square feet</strong>. Area = L × W (rectangle) or (B × H) ÷ 2 (triangle). Square feet ÷ 43,560 = acres.`,
        },
      ],
    },
  ],
}

// ── Module 5: Practice & Ethics ──────────────────────────────────────────────

const module5: CourseModule = {
  slug: 'practice-ethics',
  title: 'Practice & Ethics',
  subtitle: 'Day-to-day practice, disclosures, closings, and title transfer',
  examWeight: 'Approx. 18% of national exam',
  chapters: [
    {
      slug: 'practice-of-real-estate',
      title: 'Practice of Real Estate',
      lessons: [
        {
          slug: 'mls-cooperation-compensation',
          title: 'MLS: Cooperation, Access & Compensation',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['MLS', 'cooperation', 'buyer agent compensation', 'clear cooperation policy', 'days on market', 'listing input', 'IDX', 'VOW'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'MLS rules and obligations — what must a listing agent do within how many days?' },
          ],
          content: `## MLS: Cooperation, Access, and Compensation

The Multiple Listing Service is the backbone of the Virginia residential real estate market. Understanding MLS rules, obligations, and the significant changes brought by the 2024-2025 NAR settlement is essential for every active Virginia agent.

<h3>What the MLS Is and Why It Matters</h3>

An MLS is a cooperative database maintained by a group of real estate brokers who agree to share listing information and offer compensation to cooperating brokers. In Virginia, the major MLS systems are:
<ul>
<li><strong>BRIGHT MLS</strong>: Covers Northern Virginia, DC metro area, and parts of central Virginia</li>
<li><strong>REIN (Real Estate Information Network)</strong>: Hampton Roads/Tidewater area</li>
<li><strong>CVR MLS (Central Virginia Regional MLS)</strong>: Richmond area</li>
<li><strong>NRVAR MLS</strong>: New River Valley/Roanoke area</li>
</ul>

When a listing broker enters a property in the MLS, they are extending a blanket offer of cooperation to all MLS member brokers. This is the foundation of the co-op commission system.

<h3>The NAR Clear Cooperation Policy</h3>

NAR's <strong>Clear Cooperation Policy</strong> requires that when a broker publicly markets a property listing, they must submit the listing to the MLS within <strong>one business day</strong> of marketing.

"Public marketing" includes:
<ul>
<li>Yard signs</li>
<li>Social media posts</li>
<li>Email blasts</li>
<li>Any communication to the public about the property's availability</li>
</ul>

<strong>Office exclusive exemption</strong>: A listing broker can keep a listing off the MLS if the seller signs a written waiver specifically acknowledging they understand the benefits of MLS exposure they are forgoing. These listings can only be marketed to buyers working with agents within the same brokerage. Once publicly marketed in any way, the listing must go to MLS within one business day.

<h3>The 2024-2025 NAR Settlement: Buyer Agent Compensation Changes</h3>

A landmark settlement of antitrust litigation against NAR took effect in August 2024, fundamentally changing how buyer agent compensation works:

<strong>Key changes:</strong>
<ul>
<li>Listing brokers may no longer include offers of buyer broker compensation on MLS listings (in most MLS systems)</li>
<li>Buyers must sign a written representation agreement with their agent <strong>before touring homes</strong> — including the specific compensation the buyer's agent will be paid</li>
<li>Sellers can still voluntarily offer buyer agent compensation (separately from MLS), and buyers can ask sellers to cover their agent's fee as part of negotiations</li>
<li>Buyer agent compensation must be negotiated and agreed upon with the buyer client before commencing representation</li>
</ul>

<strong>Practical impact for Virginia agents</strong>: You must have a signed buyer representation agreement — specifying your compensation — before showing property. If the seller is not willing to pay your fee, the buyer must be prepared to pay it or negotiate it into the purchase price as a seller concession.

<h3>Days on Market (DOM) and Listing Status</h3>

MLS tracks days on market from the listing date. DOM affects buyer perception of a property:
<ul>
<li>New listings with zero DOM generate the most activity and showings</li>
<li>Properties with high DOM raise concerns — buyers wonder what's wrong</li>
<li>DOM resets when a listing is withdrawn and relisted (though CDOM — cumulative days on market — often does not reset)</li>
</ul>

<strong>Listing status codes</strong> in Virginia MLS systems typically include: Active, Active Under Contract (AUC, meaning under contract with contingencies), Pending, Sold, Withdrawn, Expired.

<h3>IDX and VOW Data Display</h3>

<strong>IDX (Internet Data Exchange)</strong>: Allows MLS members to display other members' listings on their websites under a license and set of rules from the MLS. The IDX policy specifies what data can be displayed, how it must be attributed, and when it must be updated.

<strong>VOW (Virtual Office Website)</strong>: A higher-level data sharing arrangement that allows a broker to display more MLS data (including sold data, which is often excluded from IDX) to registered consumers on a password-protected website.

<strong>Exam tip</strong>: The Clear Cooperation Policy requires MLS submission within one business day of public marketing. Buyer representation agreements must now be signed before touring homes under the NAR settlement rules. IDX allows agent websites to display MLS listings under MLS rules.`,
        },
        {
          slug: 'buyer-representation-process',
          title: 'The Buyer Representation Process',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['buyer consultation', 'written buyer representation agreement', 'working with buyers', 'property search', 'showing agreement', 'due diligence'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer says they do not want to sign a buyer representation agreement. What are your obligations and options under current Virginia and NAR rules?' },
          ],
          content: `## The Buyer Representation Process

Representing buyers is a process, not a series of one-off tasks. Agents who follow a consistent process protect themselves legally, serve clients better, and close more transactions with less friction.

<h3>Phase 1: The Buyer Consultation</h3>

The buyer consultation happens before you show a single property. In a consultation you:
<ul>
<li>Determine the buyer's needs, timeline, budget, and priorities</li>
<li>Explain your role as their agent — what you will and will not do, and what fiduciary duties you owe them</li>
<li>Provide and discuss the agency disclosure form (required in Virginia at the first substantive meeting)</li>
<li>Discuss financing — does the buyer have a lender? Are they pre-approved? Help connect them with a lender if not.</li>
<li>Explain the current market conditions and what to expect</li>
<li>Present and execute the written buyer representation agreement</li>
</ul>

<h3>The Written Buyer Representation Agreement</h3>

Under both Virginia agency law and the post-2024 NAR requirements, you must have a signed written buyer representation agreement before showing property. The agreement specifies:
<ul>
<li>The geographic area and property type you are being retained to find</li>
<li>The term of the agreement</li>
<li>Your compensation (the specific amount or rate you will be paid)</li>
<li>How your fee will be paid (by seller, buyer, or some combination)</li>
<li>The buyer's obligations to work exclusively with you during the term</li>
</ul>

If a buyer refuses to sign a representation agreement, you have two choices:
<ol>
<li>Work with them as a customer (not a client) without fiduciary duties</li>
<li>Decline to work with them</li>
</ol>

Without a representation agreement, you cannot provide full buyer representation — and you should make clear to the buyer what that means for the level of service and protection they receive.

<h3>Phase 2: The Property Search</h3>

With the representation agreement signed and financing in order:
<ul>
<li>Set up MLS auto-notification so new listings matching the buyer's criteria go directly to them</li>
<li>Schedule showings promptly — in active markets, desirable properties show and go to contract within days</li>
<li>Preview properties when appropriate — especially in higher-price markets</li>
<li>Maintain showing notes to help the buyer compare properties and remember details</li>
</ul>

<strong>Disclosure obligations during the search</strong>: As the buyer's agent, you must:
<ul>
<li>Disclose known material defects about properties you show</li>
<li>Advise the buyer when a listing price appears significantly above or below market value</li>
<li>Disclose any relationship you have with the listing side (dual agency disclosure)</li>
</ul>

<h3>Phase 3: Making an Offer</h3>

When the buyer is ready to make an offer:
<ol>
<li>Pull recent comparable sales and advise on offer price strategy</li>
<li>Discuss contingencies and which to include, limit, or waive</li>
<li>Advise on earnest money amount appropriate for the market</li>
<li>Complete the purchase agreement form carefully, review with the buyer, and obtain signatures</li>
<li>Present the offer to the listing agent promptly with all required addenda</li>
</ol>

<h3>Phase 4: Transaction Management (Under Contract to Closing)</h3>

After contract ratification:
<ul>
<li>Confirm EMD is deposited on time</li>
<li>Schedule home inspection immediately (inspection period starts at ratification)</li>
<li>Ensure buyer's lender has the ratified contract and begins underwriting</li>
<li>Monitor contingency deadlines on a transaction timeline</li>
<li>Negotiate inspection response if needed</li>
<li>Coordinate appraisal access with listing agent</li>
<li>Confirm loan commitment received before deadline</li>
<li>Communicate with settlement agent and confirm closing date, time, and location</li>
<li>Conduct buyer's final walkthrough (typically 24-48 hours before closing)</li>
<li>Attend closing and ensure all documents are correct</li>
</ul>

<h3>Due Diligence Obligations</h3>

As buyer's agent, your due diligence responsibility includes:
<ul>
<li>Recommending professional inspections for all relevant systems</li>
<li>Advising the buyer to review HOA/condo documents during the statutory review period</li>
<li>Flagging any title concerns discovered before closing</li>
<li>Recommending the buyer verify school districts, zoning, and other facts that are material to their decision</li>
</ul>

<strong>Exam tip</strong>: Buyer representation agreements must be signed before showing property (post-2024 NAR rules). The four phases of buyer representation: consultation, property search, offer, and transaction management. The buyer's agent must disclose material facts about properties to the buyer.`,
        },
        {
          slug: 'listing-process-marketing',
          title: 'The Listing Process & Property Marketing',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['listing presentation', 'CMA', 'comparative market analysis', 'pricing strategy', 'days on market impact', 'photography', 'staging', 'marketing plan'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'CMA methodology — what data goes in and how is it used to establish list price?' },
          ],
          content: `## The Listing Process and Property Marketing

Taking a listing is a professional engagement that requires preparation, market expertise, and a disciplined process. Agents who approach listing appointments with thorough research and a clear plan consistently outperform those who wing it.

<h3>Pre-Listing Preparation</h3>

Before meeting with the seller, prepare:
<ul>
<li><strong>Comparative Market Analysis (CMA)</strong>: Research recent sales, active listings, and expired listings in the neighborhood to establish a recommended price range</li>
<li><strong>Property profile</strong>: Pull the tax record, review the deed, note any HOA, check flood zone status, and confirm the lot size and square footage</li>
<li><strong>Net sheet</strong>: Prepare an estimated seller net sheet at your recommended price range</li>
<li><strong>Marketing plan</strong>: Know what you plan to offer — professional photography, virtual tours, open houses, MLS entry, social media strategy, print advertising, etc.</li>
</ul>

<h3>The Comparative Market Analysis (CMA)</h3>

The CMA is the agent's version of the sales comparison approach. A quality CMA includes:

<strong>Sold comparables (most important)</strong>:
<ul>
<li>3-6 recent sales (typically within 6 months, within the neighborhood or comparable area)</li>
<li>Similar size (typically within 15-20% of the subject)</li>
<li>Similar bedroom/bath count</li>
<li>Adjusted for notable differences</li>
</ul>

<strong>Active listings</strong>: Shows the competition — what buyers can alternatively choose.

<strong>Expired listings</strong>: Shows what the market rejected — properties priced too high that did not sell.

The CMA concludes with a recommended list price range, not a single appraisal-style value. You are providing an agent's opinion of market value, not a regulated appraisal. Make this distinction clear to clients.

<h3>Pricing Strategies and the Cost of Overpricing</h3>

The most common seller mistake is overpricing. The consequences:
<ul>
<li>Properties sit on the market, accumulating DOM that signals "something is wrong" to buyers</li>
<li>Price reductions are necessary — and price reductions signal desperation, often leading buyers to offer even lower than the reduced price</li>
<li>The best showings occur in the first 2 weeks — if the price is wrong, the ideal buyer window is wasted</li>
</ul>

Pricing strategies:
<ul>
<li><strong>Market price</strong>: List at CMA value, expect standard time on market and normal negotiation</li>
<li><strong>Slightly below market</strong>: Generate multiple offers, potentially selling above list price — an effective strategy in seller's markets</li>
<li><strong>Above market</strong>: Rarely works; use only if there are genuinely unique features not captured by comparables and the seller accepts the risk of a longer market time</li>
</ul>

<h3>Virginia Advertising Compliance</h3>

VREB regulations (18 VAC 135-20) require that all advertising by real estate licensees:
<ul>
<li>Identify the broker's licensed name (the brokerage must be identifiable)</li>
<li>Not be deceptive or misleading</li>
<li>Not imply the agent is operating independently without a broker</li>
<li>Comply with Virginia Fair Housing requirements</li>
</ul>

<strong>Social media</strong>: Instagram posts, Facebook listings, and X (Twitter) content about properties must include the brokerage's licensed name. "The Smith Team" alone is not sufficient — the parent brokerage must appear.

<strong>Team advertising</strong>: If operating as a team within a brokerage, team advertising must include the team name AND the brokerage's licensed name.

<strong>"Sold" signs</strong>: Under NAR MLS rules, agents must have listing broker permission to place "sold" stickers or "sold" signs on properties they did not list.

<h3>The Pre-Listing Package and Disclosure Obligations</h3>

At the listing appointment, the agent must provide:
<ul>
<li>Agency disclosure form (signed by seller before substantive discussion)</li>
<li>Explanation of the difference between exclusive right to sell and exclusive agency</li>
<li>Clear discussion of the seller's disclosure obligations under the Virginia Residential Property Disclosure Act</li>
<li>Lead paint disclosure requirements for pre-1978 homes</li>
</ul>

<h3>After the Listing Agreement is Signed</h3>

<ul>
<li>Order professional photography immediately — photos are the most important marketing asset</li>
<li>Input the listing into MLS within one business day of public marketing (Clear Cooperation Policy)</li>
<li>Install lockbox and yard sign per seller's instructions</li>
<li>Prepare all required addenda and disclosure forms</li>
<li>Launch the full marketing plan</li>
</ul>

<strong>Exam tip</strong>: A CMA is an agent's opinion of value, not an appraisal. All advertising must include the brokerage's licensed name. The Clear Cooperation Policy requires MLS submission within one business day of public marketing.`,
        },
        {
          slug: 'property-management-fundamentals',
          title: 'Property Management Fundamentals',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['property management agreement', 'leasing', 'rent collection', 'maintenance', 'owner reporting', 'property management fee', 'leasing fee'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Property management duties — who is responsible for what under the management agreement?' },
          ],
          content: `## Property Management Fundamentals

Property management is a distinct practice area within real estate. In Virginia, brokers who engage in property management must follow specific regulatory requirements, and agents assisting with property management must work under a licensed broker's supervision.

<h3>What Property Management Involves</h3>

A professional property manager acts as the owner's agent, typically handling:
<ul>
<li><strong>Leasing</strong>: Marketing vacant units, screening tenants, executing leases</li>
<li><strong>Rent collection</strong>: Collecting and processing monthly rent, handling late payments, initiating collections</li>
<li><strong>Maintenance coordination</strong>: Responding to maintenance requests, coordinating repairs with vendors, conducting periodic inspections</li>
<li><strong>Tenant relations</strong>: Addressing tenant complaints and concerns, enforcing lease terms, processing move-outs</li>
<li><strong>Financial management</strong>: Maintaining property accounting, paying operating expenses, disbursing owner proceeds, providing financial reports</li>
<li><strong>Legal compliance</strong>: Ensuring the property and management practices comply with the VRLTA, Fair Housing laws, and local codes</li>
</ul>

<h3>The Property Management Agreement</h3>

VREB requires a written <strong>property management agreement</strong> for every managed property. The agreement must specify:
<ul>
<li>The property or properties being managed</li>
<li>The duration of the management relationship</li>
<li>The manager's authority and scope of duties</li>
<li>Fee structure</li>
<li>How expenses are authorized and paid</li>
<li>Accounting and reporting requirements</li>
<li>Termination provisions</li>
</ul>

<h3>Property Management Fees</h3>

Property managers charge for their services in several ways:
<ul>
<li><strong>Management fee</strong>: A percentage of monthly collected rent (typically 8-12% for single-family homes; lower for multi-family). This is the ongoing fee for managing the property.</li>
<li><strong>Leasing fee</strong>: A fee charged when a new tenant is placed (typically one month's rent or a percentage of annual rent). This compensates for the marketing, showing, and screening work.</li>
<li><strong>Renewal fee</strong>: A smaller fee for renewing an existing tenant's lease (typically 25-50% of the leasing fee)</li>
<li><strong>Maintenance markup</strong>: Some managers add a percentage markup to repairs they coordinate</li>
</ul>

<h3>Trust Accounting for Property Management</h3>

Virginia VREB regulations require property managers to maintain all rental funds in trust. This means:
<ul>
<li>Rental income is held in a federally insured escrow/trust account</li>
<li>Security deposits must be held in a <strong>separate</strong> escrow account from operating rent funds</li>
<li>The manager's fee is drawn from the account only after it is earned (after rent is collected)</li>
<li>Owner proceeds are disbursed on a regular schedule (monthly in most agreements)</li>
<li>Detailed records must be maintained for each property</li>
</ul>

<h3>Monthly Owner Reporting</h3>

Owners expect monthly financial statements that show:
<ul>
<li>Rent received</li>
<li>Management fees charged</li>
<li>Maintenance expenses paid (with supporting invoices)</li>
<li>Net disbursement to owner</li>
<li>Any credits or adjustments</li>
<li>Current tenant balance (if applicable)</li>
</ul>

Transparency in accounting builds owner trust and is a regulatory requirement.

<h3>Fair Housing in Property Management</h3>

Fair Housing obligations apply fully to property management:
<ul>
<li>Advertising cannot express a preference for or against any protected class</li>
<li>Tenant screening criteria must be applied uniformly — the same standards for every applicant</li>
<li>Virginia's source of funds protection means Housing Choice Voucher (Section 8) tenants cannot be rejected solely because they use a voucher</li>
<li>Reasonable accommodations for tenants with disabilities must be provided (allowing service animals, accessible parking)</li>
</ul>

Documenting your screening criteria and applying them consistently is the best defense against Fair Housing complaints.

<h3>The VRLTA in Property Management</h3>

All residential property management in Virginia is governed by the VRLTA. Key reminders:
<ul>
<li>Security deposits cannot exceed 2 months' rent</li>
<li>Deposits must be returned within 45 days of move-out with an itemized deduction statement</li>
<li>The eviction process must follow the VRLTA exactly — no self-help eviction</li>
<li>Habitability standards must be maintained at all times</li>
</ul>

<strong>Exam tip</strong>: Property managers must have a written management agreement. Security deposits go in a separate escrow account. Management fees are typically 8-12% of collected rent. The VRLTA governs all Virginia residential rentals.`,
        },
      ],
    },
    {
      slug: 'property-disclosures',
      title: 'Property Disclosures',
      lessons: [
        {
          slug: 'virginia-residential-disclosure-act',
          title: 'Virginia Residential Property Disclosure Act',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['Residential Property Disclosure Statement', 'buyer beware', 'inspection rights', 'seller knowledge standard', 'as-is caveat emptor', 'disclosure form'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A seller fills out the RPDS and checks "no representation" on all items. What does this mean and what should the buyer\'s agent advise?' },
          ],
          content: `## The Virginia Residential Property Disclosure Act

Virginia's approach to residential property disclosure is based on a principle that shifts responsibility to buyers: the seller acknowledges their disclosure obligations, but the primary protection for buyers is their own due diligence. Understanding how the Virginia Residential Property Disclosure Act (VPRDA) works — and what it does not protect buyers from — is essential knowledge for every Virginia agent.

<h3>The Legal Framework</h3>

Virginia Code § 55.1-700 et seq. governs residential property disclosure. The VPRDA applies to all transfers of residential real property, with limited exceptions including new construction (covered by the Virginia New Home Warranties Act) and certain foreclosure sales.

<h3>The Residential Property Disclosure Statement (RPDS)</h3>

The seller must provide the buyer with a <strong>Residential Property Disclosure Statement</strong> before the buyer executes a purchase contract. The form is published by DPOR/VREB and is standard statewide.

The RPDS consists of a series of statements where the seller either:
<ul>
<li><strong>Represents</strong>: Acknowledges a specific condition (known defect)</li>
<li><strong>Makes "No Representation"</strong>: Indicates they have no knowledge either way</li>
</ul>

<h3>What "No Representation" Actually Means</h3>

The "no representation" option is the most misunderstood aspect of the RPDS.

<strong>"No representation" means:</strong>
<ul>
<li>The seller is not making any warranty or guarantee about the condition of this item</li>
<li>The buyer is responsible for conducting their own investigation</li>
<li>The seller is NOT saying the item is in good condition — they are saying nothing at all about it</li>
</ul>

When a seller checks "no representation" on every item on the RPDS, they are not protecting themselves from disclosure of known defects — they are simply declining to make affirmative representations about unknown conditions. If the seller <em>knows</em> about a material defect and checks "no representation," they may still be liable for misrepresentation by omission.

<strong>Key principle</strong>: "No representation" applies to what the seller doesn't know. It does not shield a seller from liability for concealing what they do know.

<h3>Buyer's Obligations After Receiving the RPDS</h3>

The VPRDA explicitly shifts a significant responsibility to buyers:
<ul>
<li>The RPDS is a starting point for investigation, not a warranty</li>
<li>Buyers are expected to conduct their own inspections and due diligence</li>
<li>Buyers acknowledge the "buyer beware" framework when they accept the RPDS</li>
<li>Buyers cannot void a contract or sue for damages based on conditions they knew about or should have discovered through reasonable inspection</li>
</ul>

<h3>The Agent's Disclosure Obligations Remain Independent</h3>

Here is the critical distinction for agents: the RPDS is the <em>seller's</em> disclosure. The <em>agent's</em> disclosure obligations under Virginia regulations (18 VAC 135-20) are separate and run independently.

An agent who knows about a material defect cannot rely on the seller's "no representation" to avoid their own disclosure duty. If the listing agent knows the basement floods regularly (because the seller told them, or because they witnessed it), the agent must disclose that to prospective buyers — even if the seller checks "no representation" on the RPDS.

<strong>The sequence:</strong>
<ol>
<li>Seller provides RPDS (with their known and unknown condition representations)</li>
<li>Agent independently discloses any adverse material facts the agent knows about</li>
<li>Buyer has the right to inspect and investigate further</li>
</ol>

<h3>Specific Statutory Disclosures Required by the RPDS</h3>

The RPDS requires sellers to address (or "no represent") numerous specific conditions including:
<ul>
<li>Structural defects</li>
<li>Water intrusion history</li>
<li>Flooding or drainage problems</li>
<li>Electrical, plumbing, and HVAC system conditions</li>
<li>Lead paint (pre-1978 homes — separate federal requirement)</li>
<li>Pest infestation or damage</li>
<li>Radon (if tested)</li>
<li>Proximity to airports, military air installations, or highway construction</li>
<li>Location in a Special Flood Hazard Area</li>
<li>Property within a Historic District</li>
<li>Underground storage tanks or hazardous substances</li>
</ul>

<strong>Exam tip</strong>: The RPDS must be provided before the buyer executes the contract. "No representation" means the seller makes no claim — it does not protect sellers who knowingly conceal defects. The agent's own disclosure duty is separate from the RPDS.`,
        },
        {
          slug: 'hoa-condo-disclosures',
          title: 'HOA & Condominium Disclosure Packets',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['HOA disclosure packet', 'condominium resale certificate', 'right of cancellation', 'POAA', 'Virginia Condominium Act', 'special assessment', 'reserve fund'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'HOA and condo disclosure timelines — when must they be provided and how long does the buyer have to cancel?' },
          ],
          content: `## HOA and Condominium Disclosure Packets

Virginia has two separate statutory disclosure regimes for common interest communities: the Property Owners' Association Act for HOA-governed subdivisions, and the Condominium Act for condominium sales. Both give buyers critical cancellation rights. Missing these deadlines is a costly mistake.

<h3>The Property Owners' Association Act (POAA) — Disclosure Packet</h3>

Under the Virginia Property Owners' Association Act (Virginia Code <strong>§55.1-1800 et seq.</strong>), sellers of property subject to a homeowners' association governed by POAA must provide a <strong>Disclosure Packet</strong> to the prospective buyer.

<strong>Who requests and pays for the packet:</strong> The seller requests the packet from the HOA. The HOA can charge a reasonable fee (capped by statute) for preparation. The seller pays this fee; it is a seller closing cost.

<strong>What the POAA Disclosure Packet must contain:</strong>
<ul>
<li>The Declaration, Bylaws, and current Rules and Regulations</li>
<li>The HOA's current annual assessment (dues) per lot</li>
<li>Any special assessments that are pending or anticipated (and their amount)</li>
<li>The current operating budget and reserve fund balance</li>
<li>Any outstanding judgments or pending litigation against the HOA</li>
<li>Any known unsatisfied violations on the subject property</li>
<li>The HOA's managing agent's contact information (if applicable)</li>
<li>Notice of any required approval process for buyer (some HOAs require buyer approval)</li>
</ul>

<strong>Delivery timeline:</strong> The packet must be delivered to the buyer before they execute the purchase contract. If the seller did not provide the packet before contract, the buyer has the right to cancel after receiving it.

<strong>Buyer's right to cancel after receiving the POAA packet:</strong>
The buyer has <strong>3 days</strong> after receiving a complete POAA disclosure packet to cancel the contract for any reason. The 3-day window is non-waivable.

If the packet was never provided at all, the buyer can cancel at any time up to settlement.

<h3>The Virginia Condominium Act — Resale Certificate</h3>

Under Virginia Code § 55.1-1991 et seq., sellers of condominium units must provide a <strong>Condominium Resale Certificate</strong> — a similar disclosure package prepared by the condominium owners' association.

<strong>What the Resale Certificate must contain:</strong>
<ul>
<li>The Declaration, Bylaws, and Rules and Regulations</li>
<li>Current monthly assessment (condo fee)</li>
<li>Any pending or anticipated special assessments</li>
<li>Current reserve fund balance</li>
<li>Any outstanding liens on the unit or the project</li>
<li>Pending or current litigation involving the COA</li>
<li>Status of any rental restrictions (some condos limit percentage of units that can be rented)</li>
<li>Any pet restrictions or other unit-specific restrictions</li>
<li>Current insurance coverage maintained by the COA</li>
</ul>

<strong>Buyer's right to cancel after receiving the Resale Certificate:</strong>
Same as POAA: the buyer has <strong>3 days</strong> after receiving a complete resale certificate to cancel for any reason. Non-waivable.

<h3>Agent Responsibilities</h3>

<strong>Listing agents</strong>: At the time of listing, determine whether the property is subject to the POAA or Condominium Act. Advise the seller to request the disclosure packet/resale certificate immediately — these can take 10-15 business days for the HOA/COA to prepare, and delays can delay contract ratification or create cancellation rights problems.

<strong>Buyer's agents</strong>: Make sure the client knows they have a 3-day cancellation right. Encourage them to actually read the documents during the review period. Key items to review:
<ul>
<li>Upcoming special assessments — can significantly increase cost of ownership</li>
<li>Reserve fund adequacy — an underfunded reserve is a warning sign of future special assessments</li>
<li>Rental restrictions — if the buyer intends to rent, confirm it's allowed</li>
<li>Pet restrictions — if the buyer has pets, confirm they are permitted</li>
<li>Outstanding violations — if the property has outstanding violations, who is responsible for curing them?</li>
</ul>

<h3>Comparison: POAA vs. Condominium Act</h3>

<ul>
<li><strong>POAA</strong>: Applies to properties subject to a homeowners' association (typically single-family homes, townhomes in a subdivision)</li>
<li><strong>Condominium Act</strong>: Applies to condominium units specifically</li>
<li>Both: Buyer receives 3-day cancellation right after receiving complete disclosure documents</li>
<li>Both: Seller pays for packet preparation; packet is prepared by the governing association</li>
</ul>

<strong>Exam tip</strong>: Both POAA and Condo Act disclosures give buyers a 3-day cancellation right. The right is non-waivable. If the packet is never delivered, the buyer can cancel any time before settlement. The seller is responsible for obtaining and providing these documents.`,
        },
        {
          slug: 'special-property-disclosures',
          title: 'Special Property Disclosures',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['airport noise zone', 'military air installation', 'highway construction', 'mining operations', 'oil and gas', 'flood zone', 'historic district'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Virginia-specific special disclosures — which properties trigger which additional disclosure requirements?' },
          ],
          content: `## Special Property Disclosures in Virginia

The Virginia Residential Property Disclosure Act (Virginia Code § 55.1-700 et seq.) goes beyond basic condition disclosures to require specific notices for properties affected by certain external conditions. Virginia's disclosure requirements in this area are notably more comprehensive than most other states.

<h3>Airport Noise Zone and Military Air Installation Disclosures</h3>

Virginia Code § 55.1-703 requires specific disclosures for properties in certain noise-sensitive areas. Localities that contain or are adjacent to airports with Air Installation Compatible Use Zones (AICUZ) or Accident Potential Zones (APZ) must provide notice.

<strong>What the disclosure covers:</strong>
<ul>
<li>Whether the property is located in a noise zone (defined by specific noise level contours — typically 65+ dB noise) established by a military installation or commercial airport</li>
<li>Whether the property is located in an Accident Potential Zone from a military air installation</li>
</ul>

<strong>Where this matters most in Virginia:</strong> Properties near Langley Air Force Base (Hampton), Oceana Naval Air Station (Virginia Beach), Quantico, Fort Belvoir, and major commercial airports in the DC metro area. Virginia Beach and Hampton have significant areas affected by jet noise from NAS Oceana and Langley AFB.

The disclosure states the property is located in a noise zone and directs buyers to review the AICUZ or similar program information published by the military installation or airport authority.

<h3>Highway Construction and Major Utility Disclosures</h3>

If a locality has officially designated a right-of-way for future highway construction that would affect the subject property, sellers must disclose whether the property is within a <strong>Superfund Area</strong> or within a proposed highway corridor.

Virginia Code § 55.1-702 requires sellers to provide notice when:
<ul>
<li>The property is located within a locality that has an adopted highway corridor or right-of-way plan that would affect the property</li>
<li>There are known proposed highway routes published in the Virginia Department of Transportation (VDOT) Six-Year Improvement Program</li>
</ul>

This disclosure is critical in fast-growing areas where new interchanges, widening projects, or bypass routes are planned.

<h3>Flood Zone Disclosure</h3>

Sellers must disclose whether the property is located in a <strong>Special Flood Hazard Area</strong> as defined by FEMA. This triggers the buyer's awareness that:
<ul>
<li>Flood insurance may be required by their lender</li>
<li>The property is at elevated risk of flooding</li>
<li>FEMA flood maps may affect property value and insurability</li>
</ul>

<h3>Historic District Disclosure</h3>

Properties located within a <strong>designated historic district</strong> (federal, state, or local) are subject to additional restrictions on exterior alterations, demolition, and renovations. The seller must disclose if the property is in a historic district.

This matters because:
<ul>
<li>Homeowners in local historic districts typically must obtain approval from a local Board of Architectural Review (BAR) for exterior changes</li>
<li>Certain materials and designs may be prohibited or required</li>
<li>Renovations may cost more due to requirements to preserve historic character</li>
</ul>

<h3>Mining Operations and Oil and Gas</h3>

Virginia Code § 55.1-702 requires notice when:
<ul>
<li>The property is located within a <strong>mining zone</strong> or has been designated by the state as an area with known mining activity</li>
<li>Oil and gas rights have been severed from the property (the surface owner doesn't own the mineral rights)</li>
</ul>

Severed mineral rights are especially important in coal country (Southwest Virginia) and in areas with natural gas activity. An owner whose mineral rights have been severed can have their surface land accessed for extraction without consent, with only nominal compensation.

<h3>Rail Transportation Facility Disclosure</h3>

Properties within a certain proximity to a designated <strong>rail transportation facility</strong> must be disclosed, as rail lines and rail yards generate noise, vibration, and operational concerns that affect quality of life.

<h3>Agent Practice Points</h3>

<ul>
<li>For every listing, confirm whether any of these special disclosure conditions apply</li>
<li>DPOR publishes the current Residential Property Disclosure Statement form which includes these items — use the current form</li>
<li>Do not rely on the seller to know all of these conditions — research them yourself using locality GIS maps, FEMA flood map, AICUZ maps, and VDOT planning documents</li>
<li>Disclose proactively; the failure to disclose a known special condition is a material omission</li>
</ul>

<strong>Exam tip</strong>: Virginia's special disclosures include: airport/military noise zones, flood zones, highway construction corridors, historic districts, mining zones, and severed mineral rights. These are all on the standard RPDS form. The seller checks whether each applies; the agent has an independent duty to know and disclose.`,
        },
      ],
    },
    {
      slug: 'closing-procedures',
      title: 'Closing Procedures',
      lessons: [
        {
          slug: 'virginia-closing-process',
          title: 'The Virginia Closing Process',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['settlement agent', 'title company', 'closing attorney', 'wet settlement', 'dry settlement', 'TRID', 'Closing Disclosure', 'three-day review period'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A closing is scheduled for Friday. When must the Closing Disclosure be provided to the buyer? What happens if it comes in Thursday morning?' },
          ],
          content: `## The Virginia Closing Process

Virginia's residential closing process has unique characteristics — particularly around the role of settlement agents and the "wet settlement" requirement — that distinguish it from practice in many other states. Understanding the process ensures your clients arrive at the closing table prepared.

<h3>The Settlement Agent</h3>

In Virginia, residential closings are conducted by a <strong>licensed settlement agent</strong>. Under the Virginia Settlement Agent Act (Virginia Code § 55.1-900 et seq.), any person who provides real estate settlement services in Virginia must be licensed as a settlement agent or be licensed as an attorney.

<strong>Who can serve as a settlement agent in Virginia:</strong>
<ul>
<li>Title insurance companies and their agents</li>
<li>Attorneys licensed in Virginia</li>
<li>Abstract companies (in limited circumstances)</li>
</ul>

Unlike some states where real estate agents can conduct their own closings, Virginia requires the settlement agent to be independently licensed. Real estate agents facilitate the transaction but do not conduct the closing.

<strong>Selecting the settlement agent:</strong> The buyer has the legal right to select the settlement agent under RESPA. However, sellers sometimes specify their preferred settlement agent in the contract (particularly builders). Agents should advise buyers that selecting their own agent is their right, and that doing so gives them more control over the closing experience.

<h3>The Title Search and Examination</h3>

Before closing, the settlement agent conducts (or commissions) a title search:
<ul>
<li>Examines the chain of title in the locality's deed records going back to a sufficient historical period</li>
<li>Searches for liens (mortgages, judgments, tax liens, mechanic's liens)</li>
<li>Reviews easements and restrictions</li>
<li>Checks for boundary disputes or encroachments</li>
<li>Verifies that the seller is the legal owner</li>
</ul>

The title examination report identifies any "clouds on title" — defects or encumbrances that must be resolved before closing.

<h3>Wet Settlement — Virginia's Requirement</h3>

Virginia is a <strong>"wet settlement" state</strong>. This means that at the closing table, all funds must be simultaneously disbursed:
<ul>
<li>The buyer's loan proceeds must be received from the lender</li>
<li>The buyer's down payment and closing cost funds must be in hand</li>
<li>Disbursements to the seller, to pay off existing liens, and to all parties happen at closing</li>
</ul>

In contrast, some states use "dry closings" where the parties sign documents but the funds are not immediately disbursed — the lender reviews the signed documents and then wires funds, sometimes the next business day.

<strong>Practical impact:</strong> In Virginia, the buyer's lender must have funded (wired the loan proceeds) to the settlement agent before closing can proceed. If the lender's wire is delayed, the closing is delayed. This is why agents confirm with the lender that the loan is "clear to close" and the wire is scheduled before the closing day.

<h3>The Closing Disclosure (CD) and TRID Timing</h3>

The settlement agent prepares the Closing Disclosure in coordination with the lender. Under TRID:
<ul>
<li>The buyer must receive the CD no later than <strong>3 business days before closing</strong></li>
<li>Business days = all days except Sundays and federal public holidays</li>
<li>If the CD is revised with changes that exceed TRID tolerances, a new 3-day period may be triggered</li>
</ul>

<strong>Changes that trigger a new 3-day period:</strong>
<ul>
<li>APR increases by more than 0.125% above what was disclosed</li>
<li>A prepayment penalty is added</li>
<li>The loan product changes (e.g., fixed to adjustable)</li>
</ul>

<h3>What Happens at the Closing Table</h3>

A typical Virginia residential closing proceeds as follows:
<ol>
<li>Parties are seated with the settlement agent</li>
<li>The settlement agent reviews the Closing Disclosure and HUD/ALTA settlement statement</li>
<li>Seller signs the deed (conveying title to the buyer)</li>
<li>Buyer signs the deed of trust and promissory note (committing to repay the loan)</li>
<li>Both parties sign any remaining documents (affidavits, tax forms, HOA transfer documents)</li>
<li>Lender's wire is confirmed received</li>
<li>Funds are disbursed: existing liens paid off, real estate commissions disbursed, seller net proceeds wired or distributed</li>
<li>Deed and deed of trust are sent to the Circuit Court Clerk for recording (or electronically submitted)</li>
</ol>

<strong>Exam tip</strong>: Virginia requires a wet settlement (all funds disbursed at closing). The settlement agent must be independently licensed. The Closing Disclosure must be received 3 business days before closing. Recording happens after closing.`,
        },
        {
          slug: 'closing-costs-breakdown',
          title: 'Closing Costs: Buyer & Seller Breakdown',
          lessonType: 'interactive',
          estimatedMinutes: 23,
          keyTerms: ['origination fee', 'title insurance', 'grantor\'s tax', 'recordation tax', 'transfer tax', 'prepaid interest', 'escrow impounds', 'seller concessions'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate estimated buyer and seller closing costs for a $375,000 Virginia transaction' },
            { type: 'drag_drop', prompt: 'Sort each closing cost item to buyer or seller and identify which are negotiable' },
          ],
          content: `## Closing Costs: Buyer and Seller Breakdown in Virginia

Virginia has a specific set of taxes and fees at closing that differ from many other states. Knowing the customary allocation of closing costs helps you prepare accurate net sheets for sellers and accurate cost estimates for buyers — before anyone sees a surprise at the closing table.

<h3>Buyer Closing Costs</h3>

<strong>Lender-related costs:</strong>
<ul>
<li><strong>Origination fee/points</strong>: Lender's charge for making the loan (0-1%+ of loan amount)</li>
<li><strong>Appraisal fee</strong>: $450-$600 typically in Virginia</li>
<li><strong>Credit report fee</strong>: $30-$75</li>
<li><strong>Flood certification fee</strong>: $15-$30</li>
<li><strong>Tax service fee</strong>: $65-$85</li>
</ul>

<strong>Prepaid items (not really "costs" — just advance payments):</strong>
<ul>
<li><strong>Prepaid interest</strong>: Interest from the closing date to the end of that month (so the first full payment isn't due for 6-7 weeks)</li>
<li><strong>Homeowner's insurance premium</strong>: Usually the first year's premium paid in full at closing</li>
<li><strong>Initial escrow impounds</strong>: 2-3 months of property taxes and homeowner's insurance deposited into the lender's escrow account</li>
</ul>

<strong>Title/settlement costs:</strong>
<ul>
<li><strong>Settlement/closing fee</strong>: Settlement agent's fee, typically $350-$600</li>
<li><strong>Lender's title insurance</strong>: Required by the lender; protects the lender's interest. Cost varies by loan amount.</li>
<li><strong>Owner's title insurance</strong>: Optional for buyer, but strongly recommended; protects buyer's equity. Often purchased simultaneously with lender's policy at a discounted simultaneous issue rate.</li>
<li><strong>Title search and exam fee</strong>: $150-$300 in Virginia</li>
</ul>

<strong>Government fees (buyer's portion):</strong>
<ul>
<li><strong>Grantee (recordation) tax</strong>: Virginia charges a grantee's tax (on the buyer) based on the loan amount, not the sale price: typically $0.25 per $100 of the loan amount</li>
<li><strong>Recording fees</strong>: County/city fees to record the deed of trust in the land records</li>
</ul>

<h3>Seller Closing Costs</h3>

<strong>Real estate commissions:</strong> The largest seller cost. Paid from proceeds at closing.

<strong>Virginia-specific taxes:</strong>
<ul>
<li><strong>Grantor's tax</strong>: Virginia levies a state grantor's tax on the seller: $0.10 per $100 of the sale price. There is also a local grantor's tax of $0.10-$0.50 per $100 (varies by locality).</li>
<li><strong>Recordation tax on the deed</strong>: Varies by locality; approximately $0.25 per $100 of consideration (sale price)</li>
<li><strong>Congestion Relief Fee</strong>: An additional recordation surcharge in Northern Virginia (Planning District 8) and Hampton Roads (Planning District 23). Currently $0.40 per $100 in Northern Virginia and Hampton Roads. This significantly increases transfer costs in those regions.</li>
</ul>

<strong>Example — Seller transfer taxes on a $400,000 sale in Richmond (no congestion fee zone):</strong>
<ul>
<li>State grantor's tax: $400,000/100 × $0.10 = $400</li>
<li>Local grantor's tax (varies — assume $0.10): $400</li>
<li>State recordation on deed: $400,000/100 × $0.25 = $1,000</li>
<li>Total approximately: $1,800</li>
</ul>

<strong>Example — Additional congestion fee in Northern Virginia on same $400,000 sale:</strong>
<ul>
<li>Northern Virginia congestion surcharge: $400,000/100 × $0.40 = $1,600 additional</li>
</ul>

<strong>Other seller costs:</strong>
<ul>
<li>Settlement agent fee (split with buyer in many Virginia transactions)</li>
<li>POAA/Condo resale certificate preparation fee (paid by seller)</li>
<li>Home warranty (if seller is providing one)</li>
<li>Any agreed-upon repair credits or closing cost concessions to buyer</li>
<li>Payoff of existing mortgage (from proceeds)</li>
</ul>

<h3>Seller Concessions</h3>

A seller can agree to pay a portion of the buyer's closing costs — this is called a <strong>seller concession</strong> (or seller-paid closing costs). Seller concessions:
<ul>
<li>Are limited by loan type: conventional typically caps at 3-6% depending on LTV; FHA caps at 6%; VA caps at 4%</li>
<li>Are negotiated in the purchase agreement</li>
<li>Help buyers purchase with less cash to close</li>
<li>Do not affect the seller's tax obligation (concessions are considered part of the negotiated price)</li>
</ul>

<strong>Exam tip</strong>: The grantor's tax is paid by the seller. The grantee/recordation tax on the deed of trust is paid by the buyer. Northern Virginia and Hampton Roads have additional congestion relief fees. Seller concessions are limited by loan type.`,
        },
        {
          slug: 'title-insurance-types',
          title: 'Title Insurance: Owner\'s & Lender\'s Policies',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['title search', 'title examination', 'owner\'s title insurance', 'lender\'s title insurance', 'title defect', 'cloud on title', 'chain of title', 'abstract of title'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Title insurance coverage quiz — what does each policy cover and for how long?' },
          ],
          content: `## Title Insurance: Owner's and Lender's Policies

Title insurance is unlike any other form of insurance. It protects against past events rather than future risks — specifically, defects in the chain of title that existed before you purchased the property but were not discovered during the title search. Understanding what title insurance covers (and what it doesn't) helps you guide clients to make informed decisions.

<h3>The Title Search and Examination</h3>

Before issuing a title insurance policy, the title company (through an attorney or abstractor) conducts a <strong>title search</strong>:
<ul>
<li>Traces the <strong>chain of title</strong> — the sequence of ownership from the current owner back through prior owners, typically 40-60 years or to the original government grant</li>
<li>Reviews all recorded documents: deeds, deeds of trust, easements, liens, judgments, tax records</li>
<li>Identifies clouds on title — any instrument or claim that creates doubt about clear ownership</li>
</ul>

A <strong>title examination</strong> is the attorney's or title officer's analysis of the search results — determining which issues can be resolved before closing, which are insured over, and which must be resolved as a condition of closing.

<h3>Common Title Defects Discovered in Searches</h3>

<ul>
<li><strong>Outstanding liens</strong>: Mortgages not yet paid off, judgment liens from creditors, mechanic's liens from unpaid contractors, tax liens</li>
<li><strong>Missing signatures</strong>: A deed in the chain that was not signed by all required parties (a spouse who should have signed but didn't)</li>
<li><strong>Forgery or fraud</strong>: A forged deed somewhere in the chain</li>
<li><strong>Defective legal descriptions</strong>: A description that doesn't close or describes the wrong parcel</li>
<li><strong>Undisclosed heirs</strong>: An heir who was not named in an estate proceeding and has a claim to the property</li>
<li><strong>Incorrect marital status</strong>: A deed that misstates whether the grantor was married (affecting possible tenancy by the entireties rights)</li>
<li><strong>Boundary disputes and encroachments</strong>: A neighbor's fence or driveway that crosses the property line</li>
</ul>

<h3>Lender's Title Insurance (Loan Policy)</h3>

The lender <strong>requires</strong> the buyer to purchase a lender's title insurance policy as a condition of the loan. This policy protects the lender's interest — the outstanding loan balance — against title defects.

<strong>Key characteristics:</strong>
<ul>
<li>Coverage amount = the initial loan amount; decreases as the loan is paid down</li>
<li>Does not protect the buyer's equity — only the lender's interest</li>
<li>Single premium, paid at closing</li>
<li>Remains in effect until the loan is paid off</li>
</ul>

<h3>Owner's Title Insurance</h3>

The owner's title insurance policy protects the <strong>buyer's ownership interest</strong> — their equity in the property. Unlike the lender's policy, the owner's policy protects the full purchase price and remains in effect for as long as the owner or their heirs have an interest in the property.

<strong>Is owner's title insurance required?</strong> In Virginia, owner's title insurance is not legally required. However, it is almost universally recommended and in most transactions purchased. An uninsured owner who later discovers a title defect may have limited or no recourse.

<strong>Key characteristics:</strong>
<ul>
<li>Coverage amount = purchase price (does not decrease)</li>
<li>Single premium paid at closing</li>
<li>Coverage lasts indefinitely (as long as the insured or their heirs have interest)</li>
<li>Covers attorney fees and costs to defend title</li>
</ul>

<h3>Simultaneous Issue Rate</h3>

When both the lender's and owner's policies are purchased together at the same closing, title companies offer a discounted <strong>simultaneous issue rate</strong>. This significantly reduces the total cost compared to buying each policy separately. In Virginia, it is almost always advantageous to purchase both policies simultaneously.

<h3>What Title Insurance Does NOT Cover</h3>

Title insurance has exceptions and exclusions. It typically does not cover:
<ul>
<li>Issues that a current, accurate survey would have revealed</li>
<li>Rights of parties in possession (squatters, unrecorded tenants) that an inspection would reveal</li>
<li>Matters the buyer knew about at the time of purchase</li>
<li>Environmental conditions</li>
<li>Post-purchase liens (taxes you fail to pay after you own it)</li>
</ul>

<strong>Abstract of title</strong>: An older practice where a lawyer or abstractor prepares a summary of all recorded documents affecting the title. Abstracts are less common in Virginia today — most buyers get title insurance instead of relying on an abstract.

<strong>Exam tip</strong>: Lender's policy protects the lender's interest, decreases with the loan balance, and is required. Owner's policy protects the buyer's full purchase price, stays constant, and is optional but strongly recommended. The simultaneous issue discount makes buying both together more economical.`,
        },
        {
          slug: 'closing-document-review',
          title: 'Reviewing Closing Documents with Clients',
          lessonType: 'scenario',
          estimatedMinutes: 21,
          keyTerms: ['HUD-1', 'ALTA settlement statement', 'promissory note', 'deed of trust', 'warranty deed', 'settlement statement review', 'agent role at closing'],
          interactiveElements: [
            { type: 'scenario', prompt: 'At the closing table, the buyer notices the purchase price on the deed of trust is $5,000 higher than the contract price. What should happen?' },
          ],
          content: `## Reviewing Closing Documents with Clients

Closing day is a document-signing marathon. Most buyers sign 50-100 pages of documents they have never seen before. As their agent, you are not an attorney and cannot provide legal advice — but you can help clients understand the process, know what they are signing, and identify when something doesn't look right.

<h3>The Documents Signed at a Virginia Closing</h3>

<strong>Promissory Note</strong>: The borrower's personal promise to repay the loan. Key details to verify:
<ul>
<li>Loan amount (matches the contract)</li>
<li>Interest rate (matches the locked rate)</li>
<li>Loan term (30 years, 15 years, etc.)</li>
<li>Whether there is a prepayment penalty (should be disclosed upfront)</li>
</ul>

<strong>Deed of Trust</strong>: The security instrument giving the lender a lien on the property. In Virginia, this is a three-party document (borrower, trustee, and beneficiary/lender). The deed of trust is recorded in the land records. Key details: property description, borrower names, lender names, trustee name.

<strong>General Warranty Deed (or other deed type)</strong>: The instrument that transfers title from the seller to the buyer. Key details to verify:
<ul>
<li>Seller's name exactly matches how title was held (as shown on the existing deed)</li>
<li>Buyer's name exactly as they want to take title (and vesting)</li>
<li>Legal description matches the contract and prior deed</li>
<li>Purchase price stated correctly</li>
</ul>

<strong>ALTA Settlement Statement (or HUD-1)</strong>: The financial summary of the transaction showing all charges and credits to both buyer and seller. This is the most important document to review carefully. Verify:
<ul>
<li>Purchase price correct</li>
<li>Earnest money credit shown for buyer</li>
<li>Loan amount correct</li>
<li>All agreed-upon seller concessions reflected</li>
<li>Commission amounts correct</li>
<li>Prorations calculated correctly</li>
<li>All closing costs match the Closing Disclosure</li>
</ul>

<strong>Closing Disclosure</strong>: The TRID document from the lender showing all loan terms and costs. Compare to the Loan Estimate — are any costs in excess of tolerance?

<h3>The Agent's Role at Closing</h3>

<strong>What you can do:</strong>
<ul>
<li>Attend the closing (clients appreciate having you there)</li>
<li>Help clients feel comfortable and understand the process</li>
<li>Confirm that purchase price, EMD credit, seller concessions, and commission are correct on the settlement statement</li>
<li>Flag apparent mathematical errors or discrepancies</li>
<li>Advise clients to take time to read documents they are unsure about</li>
</ul>

<strong>What you cannot do (practicing law):</strong>
<ul>
<li>Interpret legal clauses in the documents</li>
<li>Advise clients on legal rights and obligations created by the documents</li>
<li>Tell clients what legal effect specific provisions have</li>
<li>Advise on the wisdom of signing or not signing</li>
</ul>

When a client has a legal question about a document, the correct answer is: "That's a legal question — you should ask the settlement attorney." Most Virginia closings are conducted by licensed attorneys who can answer these questions.

<h3>When Something Doesn't Look Right</h3>

Errors in closing documents happen. Transpositions, wrong names, incorrect loan amounts. The scenario:

<strong>If you discover an error before signing:</strong> Stop. Point it out to the settlement agent immediately. Common errors can be corrected on the spot — the settlement agent calls the lender, adjusts the statement, or corrects the document. More complex errors (wrong legal description in the deed) may require postponing closing to correct.

<strong>If an error is discovered after closing:</strong> Notify your broker immediately. Notify the settlement agent. Minor clerical errors in deeds and deeds of trust can be corrected through affidavits or correction deeds — but this requires legal work and cooperation from all parties.

<strong>Never advise a client to sign a document that is clearly wrong with the intent to "fix it later."</strong> Once signed and recorded, corrections are more complicated and sometimes more expensive than postponing to get it right the first time.

<h3>After the Closing</h3>

Agents' responsibilities after the closing:
<ul>
<li>Ensure that keys, garage door openers, and access information are transferred</li>
<li>Confirm the deed and deed of trust were submitted for recording (same-day e-recording is now common in Virginia)</li>
<li>Retain all transaction documents for 3 years (VREB requirement on the broker)</li>
<li>Follow up with clients — the relationship doesn't end at the closing table</li>
</ul>

<strong>Exam tip</strong>: Agents attend and facilitate closings but do not practice law. The ALTA settlement statement reconciles all financial items for the transaction. Errors discovered before signing should be corrected before signing — not after. Recording occurs after closing in Virginia.`,
        },
      ],
    },
    {
      slug: 'transfer-of-title',
      title: 'Transfer of Title',
      lessons: [
        {
          slug: 'types-of-deeds',
          title: 'Types of Deeds & Their Covenants',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['general warranty deed', 'special warranty deed', 'quitclaim deed', 'covenant of seisin', 'covenant of quiet enjoyment', 'covenant against encumbrances', 'covenant of further assurance'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Three main deed types — which covenants does each contain and what does each protect against?' },
            { type: 'mini_quiz', prompt: 'Which deed type would a court-appointed trustee use? A divorcing spouse? A home seller in a standard sale?' },
          ],
          content: `## Types of Deeds and Their Covenants

The deed is the instrument that transfers ownership of real property. The type of deed used in a transaction determines the extent of the seller's guarantees about the title they are conveying. In Virginia, three deed types dominate practice — and knowing which one is appropriate when is essential knowledge.

<h3>General Warranty Deed</h3>

The <strong>general warranty deed</strong> provides the broadest title protection to the buyer. When a seller conveys by general warranty deed, they are guaranteeing the title against claims of any kind — arising at any time in history, not just during the seller's period of ownership.

<strong>The six covenants of title in a general warranty deed:</strong>

<ul>
<li><strong>Covenant of Seisin</strong>: The grantor has ownership of the property and the right to convey it. "I actually own this and have the legal authority to sell it to you."</li>
<li><strong>Covenant of the Right to Convey</strong>: Often merged with seisin; the grantor has not only ownership but specific legal authority to transfer.</li>
<li><strong>Covenant Against Encumbrances</strong>: There are no undisclosed liens, encumbrances, easements, or restrictions on the property. If an undisclosed encumbrance is later discovered, the grantor is liable.</li>
<li><strong>Covenant of Quiet Enjoyment</strong>: The grantee will not be disturbed in their possession and use of the property by anyone claiming superior title. If a third party successfully claims the property, the grantor must compensate the grantee.</li>
<li><strong>Covenant of Warranty</strong>: The grantor will defend the grantee's title against any lawful claims and, if the grantee is dispossessed, will compensate them. This is the broadest covenant — it applies to claims from anyone, at any point in history.</li>
<li><strong>Covenant of Further Assurance</strong>: The grantor will execute any additional documents necessary to perfect the grantee's title. If a technical defect is later discovered that requires an additional deed or affidavit to correct, the grantor is obligated to provide it.</li>
</ul>

<strong>When used:</strong> Standard residential sales between private parties. The general warranty deed is the norm in most Virginia residential transactions.

<h3>Special Warranty Deed</h3>

The <strong>special warranty deed</strong> provides a narrower guarantee — the grantor warrants the title only against claims arising during their own period of ownership. They make no warranties about what happened before they owned it.

<strong>Who uses special warranty deeds:</strong>
<ul>
<li>Banks and financial institutions in REO (bank-owned/foreclosure) sales — they cannot warrant title before they acquired the property</li>
<li>Corporate sellers (corporations typically limit their liability)</li>
<li>Estate sales and fiduciary conveyances where the personal representative cannot guarantee what happened before their appointment</li>
<li>Lenders conveying through foreclosure or trustee's deed</li>
</ul>

When a buyer receives a special warranty deed, they should strongly consider owner's title insurance — the title company's research and coverage will protect against the pre-grantor history that the seller is not warranting.

<h3>Quitclaim Deed</h3>

A <strong>quitclaim deed</strong> conveys whatever interest the grantor has — which may be everything, something, or nothing at all. There are no warranties. The grantor is saying: "I transfer to you whatever interest I have, if any."

<strong>When quitclaim deeds are used:</strong>
<ul>
<li><strong>Clearing title defects</strong>: A person who may have a residual claim on title (an heir, a former spouse, a person whose interest wasn't properly addressed) signs a quitclaim to release whatever interest they might have</li>
<li><strong>Transfers between family members</strong>: Adding a spouse to title, removing a deceased co-owner, transferring to a living trust</li>
<li><strong>Boundary line adjustments</strong>: Neighbors adjusting an agreed boundary</li>
<li><strong>Settling disputes</strong>: One party quitclaims to another to resolve an ownership dispute</li>
</ul>

Quitclaim deeds should not be used in arms-length sales between buyers and sellers who don't know each other — the buyer has no protections.

<h3>Other Deed Types</h3>

<strong>Bargain and Sale Deed</strong>: Implies the grantor holds title but provides no covenants of warranty. Less common in Virginia.

<strong>Deed of Gift</strong>: Conveys property as a gift, with nominal or no consideration.

<strong>Trustee's Deed</strong>: Used when a trustee conveys property from a trust or out of a foreclosure proceeding. Typically a special warranty deed with additional trustee representations.

<strong>Exam tip</strong>: General warranty = broadest protection, against all claims from all time. Special warranty = only against claims arising during seller's ownership. Quitclaim = no warranties, just transfers whatever interest exists. Divorcing couples and estate sales commonly use quitclaim or special warranty deeds.`,
        },
        {
          slug: 'requirements-valid-deed',
          title: 'Requirements for a Valid Deed',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['grantor', 'grantee', 'words of conveyance', 'legal description', 'consideration', 'execution', 'acknowledgment', 'delivery and acceptance'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Is this deed valid? Identify which essential element is missing in each scenario.' },
          ],
          content: `## Requirements for a Valid Deed

A deed is not just a piece of paper — it is the legal instrument that transfers title to real property. For a deed to be valid in Virginia, specific formal requirements must be met. A deed that is missing a required element may be void or voidable, creating a title defect that can be difficult and expensive to cure.

<h3>Essential Elements of a Valid Virginia Deed</h3>

<strong>1. Grantor (Seller)</strong>: The deed must identify the grantor — the party conveying the property. The grantor must be legally capable of conveying (legal capacity — of legal age and sound mind). The grantor's name should be exactly as they hold title.

<strong>2. Grantee (Buyer)</strong>: The deed must identify the grantee — the party receiving the property. The grantee must be a legally identifiable person or entity. The grantee's name should appear exactly as they want to hold title, including the form of co-ownership vesting.

<strong>3. Words of Conveyance (Granting Clause)</strong>: Language that clearly expresses the intent to transfer title. Classic words: "grants, bargains, and sells" or "conveys and warrants." The granting clause must make clear that the grantor is transferring ownership, not just giving a license or right of use.

<strong>4. Legal Description</strong>: The property must be described with sufficient certainty to identify it. A street address alone is generally not sufficient for a deed — the deed needs a legal description (metes and bounds, lot/block/plat, or government survey). An inadequate description can void the deed.

<strong>5. Consideration</strong>: Some statement of consideration is traditionally required, though the actual amount need not be disclosed. Virginia deeds commonly state "for Ten Dollars ($10.00) and other good and valuable consideration" — the $10 is nominal; the actual purchase price is known to the parties but not necessarily disclosed in the deed. However, Virginia does require the actual consideration to be reported for transfer tax calculation.

<strong>6. Execution (Signing)</strong>: The grantor must sign the deed. In Virginia, the grantor's signature must be <strong>acknowledged before a notary public</strong> — the notary certifies that the person appearing before them is the person named in the deed and has signed voluntarily. Without notarization, the deed cannot be recorded (though it may still be technically valid as between the parties).

<strong>7. Delivery and Acceptance</strong>: The deed must be <strong>delivered</strong> by the grantor and <strong>accepted</strong> by the grantee. A deed that is signed but never delivered to the grantee does not pass title. Delivery can be actual (handing over the deed) or constructive (recording the deed, which constitutes legal notice of delivery in many circumstances). Acceptance is presumed when the conveyance is beneficial to the grantee.

<h3>What Is NOT Required for a Valid Deed</h3>

<ul>
<li><strong>Grantee's signature</strong>: The grantee does not need to sign the deed for it to be valid (though some deeds include grantee's signature for other purposes)</li>
<li><strong>Witnesses</strong>: Virginia does not require witnesses to a deed (though some other states do)</li>
<li><strong>Recording</strong>: Recording is not required for the deed to be valid as between the parties — but it is essential for protecting against third parties (see below)</li>
</ul>

<h3>Recording Requirements in Virginia</h3>

Deeds are recorded in the Circuit Court Clerk's Office of the county or city where the property is located. Recording requires:
<ul>
<li>The deed with the grantor's acknowledged (notarized) signature</li>
<li>Payment of recordation taxes and recording fees</li>
<li>Compliance with any formatting requirements (legibility, margins)</li>
</ul>

Virginia has moved to electronic recording (e-recording) — most settlement agents submit deeds electronically through services like Simplifile, and deeds are recorded within hours of closing.

<h3>The Legal Effect of Recording</h3>

Recording gives the world <strong>constructive notice</strong> that the buyer now owns the property. Under Virginia's recording system:
<ul>
<li>An unrecorded deed is valid between the buyer and seller but may not protect against a subsequent bona fide purchaser who records first</li>
<li>Anyone can search the public land records and discover recorded documents</li>
<li>Lenders require that the deed of trust be recorded before disbursing loan funds to ensure their lien priority</li>
</ul>

<strong>Exam tip</strong>: The deed must have: grantor, grantee, words of conveyance, legal description, consideration, grantor's acknowledged signature, and delivery/acceptance. Recording is not required for validity between parties but is essential for protection against third parties. The grantee does NOT need to sign the deed.`,
        },
        {
          slug: 'title-examination-recording',
          title: 'Title Examination & Recording in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['grantor-grantee index', 'tract index', 'recording act', 'notice recording act', 'race-notice', 'bona fide purchaser', 'constructive notice', 'actual notice'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A seller sells the same property to two different buyers. The first buyer does not record. The second buyer records first with no knowledge of the first sale. Who prevails under Virginia\'s recording act?' },
          ],
          content: `## Title Examination and Recording in Virginia

The Virginia recording system is the public infrastructure that makes real property ownership certain. Understanding how the system works — and what happens when it is not properly used — is essential for advising clients about title protection and understanding title insurance.

<h3>Virginia's Recording Statutes</h3>

Virginia Code § 55.1-400 et seq. establishes Virginia's recording system. Virginia uses a <strong>race-notice recording act</strong>, which determines priority among competing claims to the same property.

<h3>Types of Recording Acts</h3>

<strong>Race statute (pure race)</strong>: First to record wins, period — regardless of whether the winner knew about prior claims. Virginia does not use pure race.

<strong>Notice statute</strong>: A subsequent purchaser who takes without notice of a prior unrecorded claim prevails, even without recording. Not used in Virginia.

<strong>Race-notice statute (Virginia's system)</strong>: A subsequent purchaser prevails over a prior unrecorded interest ONLY IF the subsequent purchaser:
<ol>
<li>Took the property <strong>without notice</strong> of the prior interest, AND</li>
<li><strong>Records first</strong></li>
</ol>

Both conditions must be met. A subsequent purchaser who knew about the prior sale cannot win even by recording first. An innocent purchaser who doesn't record loses to anyone who does record.

<h3>Types of Notice</h3>

<strong>Actual notice</strong>: Direct, personal knowledge of a prior interest. If a buyer is told "we already sold this property to Jones last week," they have actual notice and cannot be a bona fide purchaser without notice.

<strong>Constructive notice</strong>: Knowledge that the law assumes a person has based on publicly recorded information. Any document properly recorded in the chain of title is constructive notice to all subsequent purchasers — even if they never personally looked it up. "I didn't check the records" is not a defense.

<strong>Inquiry notice</strong>: When circumstances exist that would cause a reasonable person to investigate further. For example:
<ul>
<li>A buyer who sees that someone is living in the property they are purchasing has a duty to inquire about that occupant's interest</li>
<li>A deed that is clearly out of sequence in the chain may put a buyer on inquiry notice that something unusual happened</li>
</ul>

<h3>The Grantor-Grantee Index</h3>

Virginia's primary title search tool is the <strong>grantor-grantee index</strong> maintained by each Circuit Court Clerk:
<ul>
<li><strong>Grantor index</strong>: Documents alphabetically by the seller's last name. Used to find all instruments a particular person has executed that affect property.</li>
<li><strong>Grantee index</strong>: Documents alphabetically by the buyer's last name. Used to trace who received title from a prior owner.</li>
</ul>

To trace a chain of title using the index:
<ol>
<li>Start with the current owner in the grantee index to find how they acquired title</li>
<li>Find the prior owner in the grantee index to find how they acquired title</li>
<li>Continue back through the chain until you have traced back a sufficient period</li>
<li>For each owner, check the grantor index to see if they conveyed any easements, liens, or other interests during their ownership</li>
</ol>

<h3>The Tract Index</h3>

Some Virginia localities also maintain a <strong>tract index</strong>, which indexes documents by the specific property (parcel) rather than by the parties' names. A tract index makes searching faster and more reliable — all documents affecting a specific parcel are found in one location.

<h3>The Priority Rule in Practice</h3>

Classic exam scenario: Seller A sells the same lot to Buyer B and Buyer C.
<ul>
<li>Buyer B buys first but does not record</li>
<li>Buyer C buys second, has no actual knowledge of Buyer B's purchase, and records the deed immediately</li>
</ul>

Under Virginia's race-notice act: <strong>Buyer C prevails</strong>. Buyer C took without notice AND recorded first. Both conditions of the race-notice requirement are met.

If the facts are changed — if Buyer C knew about the sale to Buyer B before Buyer C bought — then Buyer C cannot prevail, even by recording first, because Buyer C had actual notice.

<h3>Priority of Liens</h3>

Recording also establishes lien priority:
<ul>
<li>A first mortgage that is recorded first has priority over a second mortgage recorded later</li>
<li>A mechanic's lien may relate back to the date construction commenced (earlier than recording), which can give it priority over a subsequently recorded mortgage</li>
<li>Property tax liens have statutory priority over most other liens, regardless of recording date</li>
</ul>

<strong>Exam tip</strong>: Virginia = race-notice. To win over a prior unrecorded interest: (1) must be without notice AND (2) must record first. Both conditions required. Actual notice = you knew. Constructive notice = it was in the public record.`,
        },
      ],
    },
    {
      slug: 'property-management',
      title: 'Property Management',
      lessons: [
        {
          slug: 'property-manager-roles-responsibilities',
          title: 'Property Manager Roles & Responsibilities',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: [
            'property management agreement',
            'fiduciary duty',
            'trust account',
            'security deposit',
            'principal broker',
            'DPOR licensing',
            'management fee',
            'scope of authority',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Match each property manager responsibility to the correct fiduciary duty category',
            },
            {
              type: 'mini_quiz',
              prompt: 'Test your knowledge of Virginia property management licensing and trust account requirements',
            },
          ],
          content: `<h2>Property Manager Roles and Responsibilities</h2>

<p>Property management is a specialized area of real estate practice that involves managing real property on behalf of an owner. In Virginia, property management activities require a real estate license under DPOR, and property managers must operate under the supervision of a principal broker just like any other licensee. This chapter covers the 3% of the national PSI exam dedicated to property management, with Virginia-specific rules woven throughout.</p>

<h3>What Is a Property Manager?</h3>

<p>A property manager is a licensed real estate professional who acts as an agent for a property owner to oversee the day-to-day operations of real property. The property manager's responsibilities typically include finding and screening tenants, collecting rent, maintaining the property, handling tenant complaints, and providing financial reports to the owner.</p>

<p>In Virginia, property management is considered a <strong>real estate activity</strong> under the Virginia Real Estate Board (VREB) regulations. This means:</p>
<ul>
<li>Any person who manages property for compensation on behalf of another must hold an active Virginia real estate license</li>
<li>The property manager must be affiliated with a licensed broker</li>
<li>The principal broker is ultimately responsible for the property management activities conducted by licensees in the firm</li>
<li>Exemptions exist for owners managing their own property and for on-site managers who work directly for the owner (not as independent contractors)</li>
</ul>

<h3>The Property Management Agreement</h3>

<p>The foundation of every property management relationship is the <strong>property management agreement</strong> -- a written contract between the property owner (principal) and the property manager (agent). Virginia law requires this agreement to be in writing. A well-drafted property management agreement includes:</p>

<ul>
<li><strong>Property description</strong>: Full legal description and street address of the managed property</li>
<li><strong>Term of the agreement</strong>: Start date, end date, and renewal provisions. Virginia does not allow perpetual management agreements without a defined term or termination mechanism</li>
<li><strong>Scope of authority</strong>: Specifically what the manager is authorized to do -- collect rent, make repairs up to a dollar limit, negotiate leases, initiate evictions, hire vendors</li>
<li><strong>Compensation</strong>: How the manager is paid, typically a percentage of gross collected rent (commonly 8-12% for residential properties in Virginia) or a flat monthly fee</li>
<li><strong>Trust account provisions</strong>: How tenant funds (security deposits, rent) will be held</li>
<li><strong>Insurance requirements</strong>: Who carries what insurance and minimum coverage amounts</li>
<li><strong>Reporting obligations</strong>: Frequency and format of financial reports to the owner</li>
<li><strong>Termination provisions</strong>: Notice requirements and grounds for early termination by either party</li>
</ul>

<h3>Fiduciary Duties of the Property Manager</h3>

<p>As an agent of the property owner, the property manager owes the same fiduciary duties as any real estate licensee in an agency relationship. In Virginia, these duties include:</p>

<ul>
<li><strong>Loyalty</strong>: Act in the owner's best interest at all times. Do not self-deal, accept undisclosed kickbacks from vendors, or favor personal interests over the owner's</li>
<li><strong>Obedience</strong>: Follow the owner's lawful instructions. If the owner directs something that violates the law (such as discriminatory tenant selection), the manager must refuse and explain why</li>
<li><strong>Disclosure</strong>: Inform the owner of all material facts affecting the property, including maintenance issues, tenant complaints, and market conditions that may affect rental rates</li>
<li><strong>Confidentiality</strong>: Protect the owner's private information, such as financial situation, motivation to sell, or personal circumstances</li>
<li><strong>Accounting</strong>: Maintain accurate records of all money received and disbursed on behalf of the owner. This ties directly to trust account requirements</li>
<li><strong>Reasonable care and diligence</strong>: Manage the property competently, respond promptly to maintenance requests, and stay current on landlord-tenant law</li>
</ul>

<h3>Trust Account Requirements for Property Managers</h3>

<p>Virginia law imposes strict requirements on how property managers handle other people's money. All funds collected on behalf of property owners -- including rent payments, security deposits, and application fees -- must be deposited into a <strong>trust account</strong> (also called an escrow account).</p>

<p>Key Virginia trust account rules for property managers:</p>
<ul>
<li>Trust accounts must be maintained in a federally insured depository in Virginia</li>
<li>Funds must be deposited by the <strong>end of the next business day</strong> after receipt</li>
<li>The principal broker or a designee must maintain records of all trust account transactions</li>
<li>Trust account funds must never be commingled with the broker's personal or business operating funds</li>
<li><strong>Security deposits</strong>: Under the Virginia Residential Landlord and Tenant Act (VRLTA), security deposits must be held in a separate escrow account. The maximum security deposit is <strong>two months' rent</strong></li>
<li>Interest earned on security deposits belongs to the landlord (owner), not the property manager, unless the management agreement states otherwise</li>
<li>DPOR audits trust accounts and violations can result in license suspension or revocation</li>
</ul>

<p><strong>Exam tip</strong>: Virginia security deposit maximum = two months' rent. Deposits must go into a separate escrow account. Commingling trust funds with operating funds is one of the most common violations that leads to disciplinary action by VREB.</p>`,
        },
        {
          slug: 'tenant-relations-lease-administration',
          title: 'Tenant Relations & Lease Administration',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'tenant screening',
            'Fair Housing Act',
            'VRLTA',
            'lease execution',
            'rent collection',
            'maintenance request',
            'habitability',
            'protected class',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A prospective tenant is denied based on credit history. Evaluate whether the screening process complied with Fair Housing requirements',
            },
            {
              type: 'mini_quiz',
              prompt: 'Test your understanding of tenant screening, lease administration, and VRLTA compliance',
            },
          ],
          content: `<h2>Tenant Relations and Lease Administration</h2>

<p>Managing the tenant relationship from initial screening through lease execution, daily operations, and eventual move-out is the core of property management. Every step must comply with federal Fair Housing law, the Virginia Fair Housing Act, and the Virginia Residential Landlord and Tenant Act (VRLTA). A property manager who gets these wrong exposes both themselves and the property owner to significant legal liability.</p>

<h3>Tenant Screening: Fair Housing Compliance</h3>

<p>Tenant screening is where Fair Housing violations most commonly occur in property management. The property manager must apply <strong>consistent, objective criteria</strong> to every applicant. The federal Fair Housing Act prohibits discrimination based on seven protected classes:</p>

<ul>
<li>Race</li>
<li>Color</li>
<li>National origin</li>
<li>Religion</li>
<li>Sex (includes sexual orientation and gender identity per the 2021 HUD guidance)</li>
<li>Familial status (families with children under 18, pregnant women)</li>
<li>Disability (physical or mental)</li>
</ul>

<p>Virginia adds <strong>elderliness</strong> (age 55+) as a protected class under the Virginia Fair Housing Act, as well as <strong>veteran status</strong> and <strong>source of funds</strong> (including Housing Choice Vouchers, formerly Section 8). A Virginia property manager who refuses to rent to a tenant because they plan to pay with a Housing Choice Voucher is violating state law.</p>

<h3>Building a Legally Defensible Screening Process</h3>

<p>Property managers should establish and document screening criteria <strong>before</strong> advertising the property. A legally defensible screening process includes:</p>

<ul>
<li><strong>Written screening criteria</strong>: Minimum credit score, income-to-rent ratio (typically 3:1), rental history requirements, criminal background check parameters</li>
<li><strong>Consistent application</strong>: Apply the same criteria to every applicant. Do not waive requirements for some applicants and not others</li>
<li><strong>Adverse action notices</strong>: If denying an applicant based on a consumer report (credit check, background check), the Fair Credit Reporting Act requires a written adverse action notice identifying the consumer reporting agency used</li>
<li><strong>Reasonable accommodations</strong>: Under the ADA and Fair Housing Act, persons with disabilities may request reasonable accommodations to screening criteria (for example, allowing a service animal in a no-pets property)</li>
<li><strong>Criminal history limitations</strong>: HUD guidance states that blanket bans on all criminal history may constitute disparate impact discrimination. Policies should consider the nature, severity, and recency of the offense</li>
</ul>

<h3>Lease Execution</h3>

<p>Once a tenant passes screening, the property manager executes the lease on behalf of the property owner. In Virginia, key lease execution requirements under VRLTA include:</p>

<ul>
<li>The lease must be in writing for any tenancy exceeding 12 months (Statute of Frauds). However, best practice is to always use a written lease regardless of term length</li>
<li>The landlord must provide the tenant with a <strong>written move-in inspection report</strong> within 5 days of occupancy. Both parties should sign the report. This protects both sides during move-out and security deposit disposition</li>
<li>The lease must disclose: the name and address of the property manager, the name and address of the property owner, and the location of the security deposit escrow account</li>
<li>If the property is in a flood zone, the landlord must disclose this fact in the lease</li>
<li>Lead-based paint disclosure is required for properties built before 1978 (federal requirement)</li>
</ul>

<h3>Rent Collection</h3>

<p>Rent collection policies should be clearly stated in the lease and consistently enforced. Virginia-specific rent collection rules include:</p>

<ul>
<li><strong>Grace period</strong>: Virginia law allows landlords to charge a late fee, but only if the lease includes a late fee provision. Many Virginia leases include a 5-day grace period before late fees apply, though this is not required by law</li>
<li><strong>Late fees</strong>: Must be reasonable and specified in the lease. Courts may refuse to enforce excessive late fees</li>
<li><strong>Pay or quit notice</strong>: If rent is unpaid, the landlord must serve a <strong>5-day pay or quit notice</strong> before filing for eviction (for month-to-month tenancies). For lease violations other than nonpayment, a <strong>30-day notice</strong> with 21 days to cure is required</li>
<li><strong>Returned check fees</strong>: Virginia allows a fee of up to $50 for returned checks</li>
<li>All rent collected must be deposited into the trust account, then disbursed to the owner per the management agreement</li>
</ul>

<h3>Maintenance Protocols and Habitability</h3>

<p>Under VRLTA, landlords (and by extension their property managers) must maintain rental property in a <strong>habitable condition</strong>. The implied warranty of habitability means the landlord must:</p>

<ul>
<li>Comply with all building and housing codes materially affecting health and safety</li>
<li>Keep all common areas in a clean and safe condition</li>
<li>Maintain all electrical, plumbing, heating, ventilation, and air conditioning systems</li>
<li>Provide running water, hot water, and reasonable heat</li>
<li>Provide trash receptacles and arrange for trash removal</li>
</ul>

<p>Property managers should establish a clear maintenance request system:</p>
<ul>
<li><strong>Emergency repairs</strong> (no heat in winter, flooding, gas leak): Must be addressed within 24 hours or sooner</li>
<li><strong>Urgent repairs</strong> (broken appliance, plumbing issue): Addressed within 48-72 hours</li>
<li><strong>Routine maintenance</strong> (cosmetic repairs, minor issues): Addressed within 7-14 days</li>
<li>All maintenance requests and responses should be documented in writing for liability protection</li>
</ul>

<h3>Handling Tenant Complaints</h3>

<p>Tenant complaints -- whether about maintenance, neighbor disputes, or lease violations by other tenants -- require prompt, documented responses. Best practices for Virginia property managers:</p>

<ul>
<li>Acknowledge every complaint in writing within 24-48 hours</li>
<li>Document the complaint, investigation steps, and resolution</li>
<li>Never retaliate against a tenant for filing a complaint. VRLTA explicitly prohibits <strong>retaliatory conduct</strong> -- raising rent, decreasing services, or threatening eviction in response to a tenant exercising their legal rights (such as filing a building code complaint or joining a tenant organization)</li>
<li>If one tenant's behavior violates another tenant's lease rights (noise, unauthorized occupants), address it through the lease violation process</li>
<li>Complaints about habitability issues must be treated as potential legal obligations, not optional requests</li>
</ul>

<p><strong>Exam tip</strong>: Virginia source-of-funds protection means you cannot refuse Housing Choice Voucher (Section 8) tenants solely because of their payment source. Retaliatory eviction after a tenant complaint is prohibited under VRLTA. The 5-day pay or quit notice applies to nonpayment of rent in month-to-month tenancies.</p>`,
        },
        {
          slug: 'financial-management-maintenance',
          title: 'Financial Management & Maintenance',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'operating budget',
            'reserve fund',
            'rent roll',
            'capital expenditure',
            'operating expense',
            'property condition assessment',
            'vendor management',
            'eviction procedures',
          ],
          interactiveElements: [
            {
              type: 'calculator',
              prompt: 'Calculate net operating income for a rental property given gross rents, vacancy rate, and operating expenses',
            },
            {
              type: 'mini_quiz',
              prompt: 'Test your knowledge of property management financial reporting and Virginia eviction procedures',
            },
          ],
          content: `<h2>Financial Management and Maintenance</h2>

<p>Sound financial management separates competent property managers from negligent ones. The property manager is responsible for maintaining accurate financial records, creating and adhering to operating budgets, managing reserves for capital expenditures, coordinating vendors and contractors, and providing transparent financial reports to property owners. This lesson also covers Virginia eviction procedures, which are among the most tested property management topics on the licensing exam.</p>

<h3>Operating Budgets</h3>

<p>Every professionally managed property should have an annual operating budget. The property manager typically prepares the budget and presents it to the owner for approval. A residential property operating budget includes:</p>

<ul>
<li><strong>Gross potential rent</strong>: Total rent if every unit is occupied and every tenant pays in full for the entire year</li>
<li><strong>Vacancy and collection loss</strong>: A realistic estimate of income lost to vacancies and uncollected rent (typically 3-8% for well-managed properties in Virginia markets)</li>
<li><strong>Effective gross income</strong>: Gross potential rent minus vacancy/collection loss, plus other income (laundry, parking, late fees, pet fees)</li>
<li><strong>Operating expenses</strong>: Property taxes, insurance, utilities (landlord-paid), maintenance and repairs, management fees, landscaping, pest control, advertising, legal fees, accounting</li>
<li><strong>Net operating income (NOI)</strong>: Effective gross income minus total operating expenses. NOI does not include debt service (mortgage payments) or capital expenditures</li>
</ul>

<h3>The Rent Roll</h3>

<p>A <strong>rent roll</strong> is a detailed listing of every unit in a managed property showing the tenant name, unit number, lease start and end dates, monthly rent amount, security deposit held, and current payment status. The rent roll is the single most important financial document for property managers because:</p>

<ul>
<li>It provides a snapshot of current income and occupancy</li>
<li>Lenders require it for refinancing or acquisition loans</li>
<li>Appraisers use it when valuing income-producing properties</li>
<li>It tracks lease expirations so the manager can plan renewals and marketing</li>
<li>Owners use it to evaluate the manager's performance</li>
</ul>

<h3>Reserve Funds and Capital Expenditures</h3>

<p>A <strong>maintenance reserve fund</strong> (also called a capital reserve or replacement reserve) is money set aside from operating income to cover major repairs and replacements. The distinction between operating expenses and capital expenditures is critical:</p>

<ul>
<li><strong>Operating expense</strong>: Routine, recurring costs to maintain the property in its current condition. Examples: HVAC filter changes, minor plumbing repairs, repainting between tenants, pest control. These are deducted from income in the year they occur</li>
<li><strong>Capital expenditure (CapEx)</strong>: Major improvements that extend the useful life of the property or add value. Examples: roof replacement, new HVAC system, parking lot resurfacing, window replacement. These are depreciated over time for tax purposes</li>
</ul>

<p>A well-managed property sets aside approximately 5-15% of gross rent into a reserve fund, depending on the age and condition of the property. The property management agreement should specify the reserve fund amount and who controls disbursements from it.</p>

<h3>Property Condition Assessments</h3>

<p>A <strong>property condition assessment (PCA)</strong> is a systematic inspection and report on the physical condition of a property. Property managers should conduct regular PCAs to:</p>

<ul>
<li>Identify deferred maintenance before it becomes an emergency</li>
<li>Plan capital expenditures over a 5-10 year horizon</li>
<li>Provide documentation for insurance claims</li>
<li>Protect the owner from liability related to unsafe conditions</li>
<li>Support accurate budgeting for the reserve fund</li>
</ul>

<p>Annual property inspections (at minimum) are standard practice. Virginia law allows the landlord or property manager to enter the rental unit for inspections with <strong>24 hours' written notice</strong> to the tenant, or at any time if there is an emergency threatening life or property.</p>

<h3>Vendor Management</h3>

<p>Property managers coordinate with numerous vendors and contractors: plumbers, electricians, HVAC technicians, painters, landscapers, cleaning crews, and more. Effective vendor management includes:</p>

<ul>
<li><strong>Licensed and insured vendors</strong>: In Virginia, contractors performing work over $1,000 must hold a Virginia contractor's license from DPOR. The property manager should verify licensing and require proof of liability insurance and workers' compensation coverage</li>
<li><strong>Competitive bidding</strong>: For major repairs or capital projects, obtain at least 2-3 bids and present them to the owner. The management agreement should specify the dollar threshold above which owner approval is required</li>
<li><strong>No undisclosed kickbacks</strong>: A property manager who receives referral fees or discounts from vendors without disclosing them to the owner violates their fiduciary duty. All vendor compensation arrangements must be transparent</li>
<li><strong>Written work orders</strong>: Document every repair with a written work order including scope, cost estimate, completion date, and tenant authorization for entry</li>
</ul>

<h3>Owner Reporting</h3>

<p>The property manager must provide regular financial reports to the property owner. Industry standard for Virginia property managers includes:</p>

<ul>
<li><strong>Monthly owner statement</strong>: Showing income collected, expenses paid, management fee deducted, and net owner distribution</li>
<li><strong>Rent roll</strong>: Current occupancy and rent status for all units</li>
<li><strong>Maintenance log</strong>: Summary of work orders completed and pending</li>
<li><strong>Annual financial summary</strong>: Year-end statement for tax preparation, including a 1099 for the owner if applicable</li>
<li><strong>Lease renewal and vacancy report</strong>: Upcoming lease expirations and marketing plans for vacant units</li>
</ul>

<p>The frequency and format of reports should be specified in the property management agreement. Many Virginia property management firms provide online owner portals for real-time financial access.</p>

<h3>Virginia Eviction Procedures</h3>

<p>When a tenant fails to pay rent or violates the lease, the property manager may need to initiate eviction proceedings on behalf of the owner. Virginia eviction law is highly procedural, and any misstep can delay or invalidate the eviction. The Virginia process:</p>

<ul>
<li><strong>Step 1 -- Notice</strong>: For nonpayment of rent, serve a <strong>5-day pay or quit notice</strong> on the tenant. For lease violations, serve a <strong>30-day notice</strong> with 21 days to cure the violation. For month-to-month tenancies being terminated without cause, provide a <strong>30-day notice to vacate</strong></li>
<li><strong>Step 2 -- Unlawful detainer filing</strong>: If the tenant does not comply with the notice, the landlord (or property manager acting with authority) files an <strong>unlawful detainer action</strong> in the Virginia General District Court</li>
<li><strong>Step 3 -- Court hearing</strong>: The court schedules a hearing, typically within 21-30 days. The tenant has the right to appear and contest the eviction</li>
<li><strong>Step 4 -- Judgment and writ of possession</strong>: If the court rules for the landlord, it issues a judgment. If the tenant still does not vacate, the landlord obtains a <strong>writ of possession</strong> from the court</li>
<li><strong>Step 5 -- Sheriff execution</strong>: Only the <strong>sheriff</strong> can physically remove a tenant. Self-help eviction (changing locks, removing belongings, shutting off utilities) is illegal in Virginia and can result in the landlord owing the tenant damages</li>
</ul>

<p><strong>Critical Virginia rule</strong>: A property manager cannot practice law. If an eviction becomes contested, the property manager should recommend the owner retain an attorney. In Virginia, a non-attorney property manager can file the initial unlawful detainer paperwork, but if the case becomes disputed, an attorney is advisable.</p>

<h3>Virginia Transaction Recovery Fund</h3>

<p>The <strong>Virginia Transaction Recovery Fund</strong> is maintained by DPOR and compensates consumers who obtain a final court judgment against a Virginia licensee for fraud, misrepresentation, or conversion of funds. Key details for the exam:</p>

<ul>
<li>Maximum payout: <strong>$20,000 per claimant, $50,000 per transaction</strong></li>
<li>Fund minimum balance: <strong>$400,000</strong></li>
<li>New licensees contribute <strong>$20</strong> to the fund upon initial licensure</li>
<li>A payout from the fund triggers <strong>automatic license revocation</strong> for the licensee whose conduct caused the claim. The license remains revoked until the licensee repays the fund in full, with interest</li>
<li>This fund is relevant to property management because security deposit conversion and mishandling of rental funds are common claims</li>
</ul>

<p><strong>Exam tip</strong>: Only the sheriff can execute an eviction in Virginia -- self-help eviction is illegal. The 5-day pay or quit notice is for nonpayment; 30-day notice with 21 days to cure is for other lease violations. The Transaction Recovery Fund pays up to $20,000 per claimant / $50,000 per transaction, and payout triggers automatic license revocation.</p>`,
        },
      ],
    },
  ],
}

// ── Module 6: Virginia-Specific Regulations ──────────────────────────────────

const module6: CourseModule = {
  slug: 'virginia-specific-regulations',
  title: 'Virginia-Specific Regulations',
  subtitle: 'DPOR rules, Virginia contract forms, closing practices, and post-license requirements',
  examWeight: 'Part of 30% VA state exam component',
  chapters: [
    {
      slug: 'dpor-rules-regulations',
      title: 'DPOR Rules & Regulations',
      lessons: [
        {
          slug: 'vreb-regulations-18-vac-135',
          title: 'VREB Regulations: 18 VAC 135-20 In Detail',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: ['18 VAC 135-20', 'advertising standards', 'team names', 'social media compliance', 'sold signs', 'coming soon listings', 'lockbox use'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Virginia advertising regulations — compliant or violation?' },
          ],
          content: `## VREB Regulations: 18 VAC 135-20 in Detail

The Virginia Real Estate Board's primary regulatory framework — 18 VAC 135-20 (the Virginia Real Estate Board Regulations) — is the rulebook for Virginia licensees. Every disciplinary action against a Virginia agent cites this code. You must know its key provisions for the state exam and for compliant daily practice.

<h3>The Purpose and Authority of 18 VAC 135-20</h3>

The Virginia Real Estate Board adopted 18 VAC 135-20 under its authority granted by Virginia Code § 54.1-2105. The regulations implement the statutory requirements of the Real Estate License Law and provide detailed conduct standards. Where the statute provides the framework, 18 VAC 135-20 provides the specifics.

<h3>Advertising Standards Under 18 VAC 135-20</h3>

Section 18 VAC 135-20-160 sets detailed advertising requirements. All advertising by a Virginia licensee must:

<ul>
<li><strong>Include the brokerage's licensed name</strong>: Every advertisement — print, digital, social media, yard signs, business cards — must identify the broker's licensed name. An agent cannot advertise solely under their personal name without identifying the brokerage.</li>
<li><strong>Not be deceptive or misleading</strong>: No false statements about the property, the agent's credentials, or the terms of the transaction</li>
<li><strong>Not imply independence from a broker</strong>: An affiliated licensee cannot advertise in a way that suggests they are operating as an independent broker</li>
<li><strong>Comply with Fair Housing</strong>: No discriminatory language, images, or targeting</li>
</ul>

<strong>Social media compliance</strong>: Posts about listings, open houses, or real estate services on Instagram, Facebook, LinkedIn, X (Twitter), TikTok, and YouTube are all advertising under VREB regulations. The brokerage name must be identifiable on the agent's profile or in the post itself.

<strong>Virtual tours and video</strong>: Video content marketed online is advertising. The brokerage name must be present.

<strong>"For Sale" and "Sold" signs</strong>: Only the listing broker's sign may be placed on a listed property. Another agent cannot place "sold" notification on a property they did not list without the listing broker's permission.

<h3>Team Name Regulations</h3>

Virginia began specifically regulating real estate teams in 2019. Under 18 VAC 135-20, a real estate team:
<ul>
<li>Is a group of two or more licensees operating under a common business identity within a brokerage</li>
<li>Must have the team name registered with the principal broker (brokers register through their DPOR account)</li>
<li>Must include the brokerage's licensed name in all team advertising</li>
<li>Cannot use a team name that implies it is an independent brokerage</li>
</ul>

Example: "The Richmond Dream Team at ABC Realty" is compliant. "The Richmond Dream Team" standing alone with no brokerage identification is not.

<h3>Coming Soon Listings</h3>

VREB regulations allow "coming soon" marketing of listings under specific conditions:
<ul>
<li>The seller must have signed the listing agreement</li>
<li>The "coming soon" status must be entered in the MLS within the time required by the MLS's rules</li>
<li>Showing restrictions on coming soon listings must be disclosed and must comply with MLS rules</li>
<li>The transition from "coming soon" to "active" must follow the Clear Cooperation Policy</li>
</ul>

<h3>Lockbox Use</h3>

VREB regulations do not prescribe specific lockbox requirements, but industry standards and MLS rules govern access. Key principles:
<ul>
<li>Sellers must authorize lockbox installation in writing (typically in the listing agreement)</li>
<li>Access to a lockbox-equipped property requires a valid MLS key or authorized access device</li>
<li>Unauthorized access to a property (entering without appointment or authorization) is a violation</li>
<li>Accessing a property with another agent's lockbox code or unauthorized access method is both a VREB violation and potentially a criminal trespass</li>
</ul>

<h3>Key Conduct Standards in 18 VAC 135-20</h3>

Beyond advertising, 18 VAC 135-20 sets standards for:
<ul>
<li><strong>Prompt presentation of offers</strong>: All written offers must be presented to the seller promptly</li>
<li><strong>Disclosure obligations</strong>: Adverse material facts must be disclosed to all parties</li>
<li><strong>Escrow account maintenance</strong>: Funds must be deposited promptly in properly designated accounts</li>
<li><strong>Document retention</strong>: All transaction records must be maintained for 3 years</li>
<li><strong>Supervision</strong>: Brokers must provide reasonable supervision of affiliated licensees</li>
<li><strong>Prohibited conduct</strong>: Net listings, undisclosed dual agency, commingling, conversion — all specifically prohibited</li>
</ul>

<strong>Exam tip</strong>: All advertising must include the brokerage's licensed name — this applies to social media, yard signs, team names, and business cards. Team names must be registered and must show the brokerage. Documents must be retained for 3 years. These are among the most tested state exam topics.`,
        },
        {
          slug: 'team-structure-rules',
          title: 'Real Estate Teams: Structure & Compliance',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['real estate team', 'team name registration', 'team leader', 'team member', 'supervised licensee', 'team advertising', 'brokerage name requirement'],
          interactiveElements: [
            { type: 'scenario', prompt: 'An agent wants to form a team called "The Richmond Dream Team." What Virginia regulations must she comply with?' },
          ],
          content: `## Real Estate Teams: Structure and Compliance in Virginia

Real estate teams have become one of the dominant business models in Virginia residential real estate. The Richmond, Northern Virginia, and Hampton Roads markets are full of branded teams operating within brokerages. Virginia now specifically regulates teams — understanding the rules protects agents, team leaders, and brokers.

<h3>What Constitutes a Real Estate Team</h3>

Under Virginia regulations (18 VAC 135-20), a <strong>real estate team</strong> is:

Two or more affiliated licensees within the same brokerage who:
<ul>
<li>Operate under a common team name</li>
<li>Market themselves collectively under that team identity</li>
<li>Hold themselves out to the public as a group</li>
</ul>

A team can consist of a team leader (the experienced agent who founded the team) and team members (agents who work under the team's identity). Some teams include a showing agent, a transaction coordinator, a buyer specialist, and a listing specialist — all operating under one brand.

<h3>Team Name Registration</h3>

Before using a team name in any marketing, advertising, or business operations, the team name must be:
<ol>
<li><strong>Disclosed to and registered with the principal broker</strong> of the brokerage where the team operates</li>
<li><strong>Registered with the brokerage</strong> — the broker maintains records of all teams operating under their license</li>
</ol>

VREB does not separately register team names with the state (unlike firm names, which require a separate firm license). The broker is responsible for ensuring teams under their roof are properly named and operating in compliance.

<h3>Team Name Standards</h3>

A team name:
<ul>
<li><strong>Cannot imply it is an independent brokerage</strong>: A name like "Richmond Realty Group" (without specifying it's a team within a brokerage) could mislead consumers into thinking they are dealing with a separate brokerage firm. This is a violation.</li>
<li>Cannot use terms like "Realty," "Real Estate," "Associates," "Properties," or similar words that suggest independent brokerage operation — unless clearly qualified as part of a team within a larger brokerage</li>
<li>Must be distinguishable from the brokerage's own licensed name to avoid confusion</li>
</ul>

<h3>Team Advertising Requirements</h3>

All team advertising must include the <strong>brokerage's licensed name</strong>:
<ul>
<li>The team name and the brokerage name must both appear</li>
<li>The brokerage name must be "reasonably prominent" — it cannot be in 2-point font while the team name is in 72-point font</li>
<li>This applies to: yard signs, business cards, social media profiles, websites, mailers, online ads, video content</li>
</ul>

Compliant example: "The Johnson Team | ABC Realty"
Non-compliant: "The Johnson Team" with no brokerage identification

<h3>Supervision Obligations for Team Leaders and Brokers</h3>

The principal broker retains ultimate supervision responsibility for all licensees, including those operating within teams. Teams do not create a separate supervisory layer that reduces the broker's obligations.

Team leaders are not supervisors in the regulatory sense — they cannot supervise the licensees on their team the way a broker can. Only a licensed broker can supervise licensees. A team leader is a fellow licensee who coordinates work — not a supervisor.

<strong>Practical implications:</strong>
<ul>
<li>The principal broker (or designated supervising broker) must have visibility into team transactions</li>
<li>Compliance with escrow account requirements, advertising rules, and agency disclosures applies to all team members as individuals, not just the team leader</li>
<li>If a team member violates VREB regulations, the team leader is not automatically disciplined — but the broker may face discipline for inadequate supervision</li>
</ul>

<h3>Compensation Within Teams</h3>

Team compensation arrangements must flow through the brokerage:
<ul>
<li>Compensation is always paid by the brokerage to the licensee, per the broker-agent agreement</li>
<li>A team leader cannot pay team members directly from their commission without proper disclosure and the broker's involvement — the payments must flow through the broker's books</li>
<li>Team members must be properly licensed — you cannot pay an unlicensed assistant a percentage of commissions</li>
</ul>

<h3>Team Dissolution</h3>

When a team dissolves or a team member leaves:
<ul>
<li>There is no transfer of "team clients" — clients belong to the brokerage, not the team or team leader</li>
<li>Team members who leave to join another brokerage cannot take client files, listing agreements, or buyer representation agreements with them — those are property of the original brokerage</li>
<li>Team names are not transferable to a new brokerage without re-registration</li>
</ul>

<strong>Exam tip</strong>: Teams must be registered with the principal broker. All team advertising must include the brokerage's licensed name. Team leaders are not supervisors. Team names cannot imply independent brokerage operation.`,
        },
        {
          slug: 'property-management-dpor',
          title: 'Property Management Under DPOR Rules',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['property management agreement requirement', 'rental activity without license', 'on-site manager exemption', 'property management escrow', 'owner accounting reports'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Virginia property management compliance quiz' },
          ],
          content: `## Property Management Under Virginia DPOR Rules

Property management in Virginia sits at the intersection of real estate license law, VRLTA requirements, and DPOR-specific regulations. Brokers who engage in property management have additional compliance obligations beyond those applicable to sales practice.

<h3>License Required for Property Management</h3>

Managing property for another person for compensation requires a Virginia real estate broker license. An individual cannot manage rental properties on behalf of owners (collecting rent, executing leases, coordinating maintenance) for compensation without being either:
<ul>
<li>A licensed broker, or</li>
<li>A licensed salesperson working under a licensed broker who manages property</li>
</ul>

The license exemptions discussed in Module 1 (on-site managers, salaried employees, owners managing their own property) apply here. But anyone advertising and offering professional property management services to the public for compensation is squarely within DPOR's jurisdiction.

<h3>The Property Management Agreement Requirement</h3>

Under 18 VAC 135-20, a broker providing property management must have a written <strong>property management agreement</strong> with each owner-client before managing that owner's property.

<strong>Required provisions in a Virginia property management agreement:</strong>
<ul>
<li>The property address(es) to be managed</li>
<li>The term of the management relationship</li>
<li>The scope of management services to be provided</li>
<li>The authority granted to the broker (leasing, maintenance approval thresholds, emergency repairs)</li>
<li>The management fee structure</li>
<li>How funds will be handled (trust account requirements)</li>
<li>The process for accounting and owner distributions</li>
<li>Termination provisions</li>
</ul>

A handshake agreement or email exchange is not sufficient — the written agreement is a regulatory requirement.

<h3>Property Management Escrow Account Requirements</h3>

Brokers managing property must maintain separate escrow accounts for property management funds:

<ul>
<li><strong>Separate from sales escrow</strong>: Funds held for managed properties must be in an escrow account separate from earnest money escrow accounts for sales transactions</li>
<li><strong>Security deposits separate from rent</strong>: Virginia law (VRLTA § 55.1-1226) requires that security deposits be held separately from rent proceeds — in practice, many property managers maintain a dedicated security deposit trust account</li>
<li><strong>Owner ledgers</strong>: Detailed records must be maintained for each managed property showing all income and expenses</li>
<li><strong>Prompt deposit of rental income</strong>: Collected rent must be deposited promptly — holding checks for extended periods is a violation</li>
<li><strong>Records retention</strong>: All property management records must be maintained for 3 years (same as sales transaction records)</li>
</ul>

<h3>On-Site Manager Exemption (Revisited)</h3>

As covered in Module 1, certain on-site residential property managers are exempt from licensing requirements. The key requirements for this exemption:
<ul>
<li>The manager must actually reside in the residential property they manage</li>
<li>Their compensation must consist entirely (or primarily) of free or reduced rent — no commission or transaction-based pay</li>
<li>They must be an employee of the owner (or the owner's licensed management company)</li>
</ul>

This exemption covers apartment community resident managers who live in one of the units, handle leasing and tenant issues for the complex, and receive their compensation as reduced or free rent.

<strong>DPOR scrutiny</strong>: The on-site manager exemption is a narrow exception. An "on-site manager" who manages multiple properties for different owners, or who handles the leasing for dozens of properties without residing in them, does not qualify for the exemption.

<h3>Rental Activity License Requirements</h3>

Property managers may not:
<ul>
<li>Execute leases on behalf of owners without the owner's written authorization (contained in the management agreement)</li>
<li>Collect security deposits without placing them in a properly designated trust account</li>
<li>Advertise "available for rent" listings in the MLS for managed properties without being a licensed MLS member or having a member broker's authorization</li>
</ul>

<h3>Owner Accounting and Distribution Requirements</h3>

Brokers must provide owners with regular (typically monthly) accounting showing:
<ul>
<li>All rent received</li>
<li>Management fees deducted</li>
<li>Maintenance and other expenses paid</li>
<li>Net distribution amount</li>
</ul>

Delays in distributing owner funds beyond the agreed schedule (or within a reasonable time if no schedule is specified) constitute conversion of client funds — a serious VREB violation.

<strong>Exam tip</strong>: Property management requires a broker license (or salesperson under a broker). Written management agreements are required by VREB regulations. Security deposits must be in a separate trust account from rent proceeds. Records must be retained for 3 years.`,
        },
      ],
    },
    {
      slug: 'virginia-contract-forms',
      title: 'Virginia Contract Forms',
      lessons: [
        {
          slug: 'rein-nvar-standard-forms',
          title: 'REIN & NVAR Standard Contract Forms',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: ['REIN', 'NVAR', 'CVRMLS', 'standard forms', 'addenda', 'contingency addendum', 'HUD addendum', 'VA addendum'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Key addenda used in Virginia residential transactions and when each is required' },
          ],
          content: `## REIN, NVAR, and Standard Virginia Contract Forms

Virginia does not have a single statewide purchase agreement form. Instead, different regional real estate associations and MLS systems have developed their own standard forms tailored to local practice. Knowing the forms used in your market is essential — and knowing the common structure across all forms lets you work anywhere in the state.

<h3>Why Virginia Uses Regional Forms</h3>

Unlike states where a state REALTOR association or the state bar publishes a mandatory statewide form, Virginia's standard contract forms are developed by regional REALTOR associations and MLS groups. This means an agent moving from Hampton Roads to Northern Virginia needs to learn new forms.

The good news: all Virginia residential purchase agreement forms share the same core legal structure because they must comply with the same Virginia statutes. The differences are in how provisions are worded, organized, and what local customs are incorporated.

<h3>REIN (Real Estate Information Network) — Hampton Roads</h3>

The <strong>REIN</strong> forms are used primarily in:
<ul>
<li>Virginia Beach, Norfolk, Chesapeake, Suffolk, Portsmouth, Hampton, Newport News</li>
<li>The Outer Banks area of the Hampton Roads region</li>
</ul>

The REIN residential purchase agreement is one of the longest and most detailed in the state, reflecting the complex Hampton Roads market (military buyers, VA loans, flood zones, waterfront properties). REIN forms include built-in provisions for:
<ul>
<li>Military contingencies (PCS orders causing relocation)</li>
<li>Flood zone disclosure and flood insurance cost contingencies</li>
<li>Well and septic inspection contingencies (many Hampton Roads properties have private systems)</li>
</ul>

<h3>NVAR (Northern Virginia Association of REALTORS)</h3>

The <strong>NVAR</strong> forms are used in:
<ul>
<li>Fairfax County, Arlington, Alexandria, Falls Church, Loudoun, Prince William, Fauquier, and surrounding jurisdictions</li>
</ul>

The Northern Virginia market is one of the most competitive in the country, and NVAR forms reflect that:
<ul>
<li>Clean, streamlined offer packages designed for quick review in multiple-offer situations</li>
<li>Strong escalation clause addendum</li>
<li>Well-developed dual agency disclosure forms</li>
<li>NVAR has specific addenda for short sales and foreclosures</li>
</ul>

<h3>CVR/GVAR (Central Virginia Regional / Greater Virginia Area)</h3>

The Richmond metro and central Virginia area use forms developed by local REALTOR associations and CVR MLS. These forms are structurally similar to NVAR and REIN forms but reflect Richmond-area closing customs.

<h3>Common Addenda Used Across Virginia</h3>

Regardless of which regional form is used, certain addenda are used consistently across Virginia:

<ul>
<li><strong>Lead-Based Paint Disclosure Addendum</strong>: Required for all pre-1978 residential sales (federal requirement)</li>
<li><strong>Brokerage Relationship Disclosure</strong>: Required by Virginia law at the first substantive contact (already in the main contract in most forms)</li>
<li><strong>Financing Addendum</strong>: Specifying loan type, amount, rate, and deadline (may be in main agreement or separate)</li>
<li><strong>Home Inspection Addendum</strong>: Documenting inspection period, process, and options</li>
<li><strong>HUD/FHA Addendum</strong>: Required for FHA-financed purchases — contains specific FHA requirements including the FHA amendatory clause</li>
<li><strong>VA Addendum</strong>: Required for VA-financed purchases — contains the VA loan contingency and escape clause</li>
<li><strong>Contingency Removal Addendum</strong>: Used when a buyer has a home sale contingency and the seller accepts another offer under a kick-out clause — the original buyer has a period to remove their contingency</li>
</ul>

<h3>The FHA Amendatory Clause — Special Note</h3>

Every FHA purchase agreement must include the <strong>FHA Amendatory Clause</strong> stating that the buyer is not obligated to purchase if the appraised value is less than the purchase price. This is a federally required provision that cannot be waived and must appear in the contract or as a separate addendum.

<strong>Exam tip</strong>: Different regions of Virginia use different standard forms (REIN, NVAR, CVR). All share the same legal core. The lead paint addendum is required federally for pre-1978 homes. The FHA amendatory clause is required in all FHA transactions.`,
        },
        {
          slug: 'virginia-specific-addenda',
          title: 'Virginia-Specific Addenda & Disclosures',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['brokerage relationship disclosure', 'lead paint addendum', 'flood zone addendum', 'home inspection addendum', 'well and septic addendum', 'contingency removal'],
          interactiveElements: [
            { type: 'drag_drop', prompt: 'Match each property type or transaction situation to the required Virginia addendum' },
          ],
          content: `## Virginia-Specific Addenda and Disclosures

Virginia residential transactions routinely require a stack of addenda beyond the base purchase agreement. Knowing which addenda are mandatory, which are situational, and how they interact with the main contract protects your clients and keeps you in compliance with VREB regulations.

<h3>Mandatory Disclosures in Every Virginia Residential Sale</h3>

<strong>Brokerage Relationship Disclosure Form</strong>
Required by Virginia Code § 54.1-2138 before the first substantive discussion. Must identify:
<ul>
<li>The brokerage and principal broker</li>
<li>Which party the licensee represents</li>
<li>Duties owed to the client vs. customer</li>
<li>Any material relationship the licensee has with any party</li>
</ul>
Most Virginia purchase agreement forms incorporate the brokerage disclosure within the contract itself — agents must verify this and provide the separate form at first substantive contact if a written agreement isn't executed at that point.

<strong>Residential Property Disclosure Statement (RPDS)</strong>
Required before the buyer executes the purchase contract. Provided by the seller, acknowledges Virginia's disclosure obligations framework. If not provided before contract, the buyer may have the right to void the contract after receiving it.

<h3>Property-Specific Mandatory Addenda</h3>

<strong>Lead-Based Paint Disclosure Addendum</strong>: Required for all residential properties built before 1978. Must be signed by seller, buyer, and both agents. Contains:
<ul>
<li>Seller's knowledge about lead-based paint on the premises</li>
<li>Disclosure of any existing lead paint records and reports</li>
<li>Acknowledgment of the EPA pamphlet receipt</li>
<li>The buyer's 10-day inspection right (unless waived by buyer in writing)</li>
</ul>

<strong>HOA/POAA Disclosure Acknowledgment</strong>: If the property is subject to a homeowners' association, the contract must reference the buyer's receipt (or anticipated receipt) of the disclosure packet and their 3-day cancellation right.

<strong>Condominium Resale Certificate Acknowledgment</strong>: If the property is a condominium unit, the contract must reference the buyer's receipt (or anticipated receipt) of the resale certificate and their 3-day cancellation right.

<h3>Loan-Type Specific Addenda</h3>

<strong>FHA/HUD Addendum</strong>: Required for all FHA-financed purchases. Contains:
<ul>
<li>The FHA Amendatory Clause (buyer not obligated if appraisal comes in below price)</li>
<li>Acknowledgment that FHA doesn't insure properties with certain conditions</li>
<li>Agreement that lender may require repairs before closing</li>
</ul>

<strong>VA Addendum</strong>: Required for all VA-financed purchases. Contains:
<ul>
<li>The VA Escape Clause (buyer may void if property doesn't appraise)</li>
<li>Acknowledgment that VA loans are assumable with lender approval</li>
<li>Agreement that certain seller-paid fees (prohibited under VA guidelines) will not be charged to the buyer</li>
</ul>

<h3>Property Condition Addenda</h3>

<strong>Well and Septic Inspection Addendum</strong>: Used when the property has a private well, private septic system, or both. Specifies:
<ul>
<li>Inspection period and inspection rights for the well and septic</li>
<li>Flow rate and water quality testing requirements</li>
<li>What happens if the system fails inspection (buyer options, seller obligations)</li>
</ul>

<strong>Flood Zone Addendum</strong>: Used for properties in or near FEMA flood zones. Includes:
<ul>
<li>Acknowledgment of the flood zone designation</li>
<li>Estimated flood insurance cost disclosure</li>
<li>Contingency if flood insurance exceeds a specified threshold</li>
</ul>

<h3>Transaction-Specific Addenda</h3>

<strong>Home Sale Contingency Addendum</strong>: When the buyer's purchase is contingent on the sale of their current home. Contains kick-out provisions allowing the seller to continue marketing and accept another offer if the buyer cannot remove their home sale contingency within a specified window.

<strong>Repair Addendum</strong>: Used after the home inspection to document agreed repairs or credits. Should be specific: identify exactly what will be repaired, by whom, to what standard, and verified how.

<strong>Extension Addendum</strong>: Documents mutually agreed extensions to contingency deadlines or the settlement date.

<strong>Exam tip</strong>: Lead paint addendum is required for pre-1978 homes and must be signed by seller, buyer, AND both agents. FHA addendum must include the amendatory clause. VA addendum must include the escape clause. Both FHA and VA allow the buyer to void if the appraisal comes in below the purchase price.`,
        },
        {
          slug: 'virginia-lease-forms',
          title: 'Virginia Lease Forms & VRLTA Compliance',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['VRLTA-compliant lease', 'prohibited lease provisions', 'confession of judgment clause', 'waiver of notice provisions', 'security deposit clause', 'lease addenda'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Virginia lease compliance: identify the prohibited provisions in these lease excerpts' },
          ],
          content: `## Virginia Lease Forms and VRLTA Compliance

Every residential lease in Virginia — whether it covers an apartment, a single-family rental, or a room — must comply with the Virginia Residential Landlord and Tenant Act (VRLTA). Leases that contain prohibited provisions are not just unenforceable — they may expose the landlord to liability and VREB disciplinary action.

<h3>Requirements of a VRLTA-Compliant Lease</h3>

A legally compliant Virginia residential lease must:
<ul>
<li>Identify the landlord and tenant (legal names)</li>
<li>Describe the rental property</li>
<li>State the rent amount and due date</li>
<li>State the lease term (begin and end dates, or month-to-month basis)</li>
<li>State any late fee provisions (Virginia law limits late fees: cannot exceed 10% of the monthly rent or $50, whichever is greater, and cannot be charged until rent is 5 days late)</li>
<li>State the security deposit amount (cannot exceed 2 months' rent)</li>
<li>Include pet provisions if applicable (pet deposit, pet rent, pet restrictions)</li>
<li>Include a disclosure of the landlord's name and address (or property manager's) for notice purposes</li>
</ul>

<h3>Provisions Prohibited Under Virginia Law</h3>

The VRLTA (§ 55.1-1204) declares the following lease provisions void and unenforceable:

<strong>Confession of Judgment Clause</strong>: A provision authorizing the landlord (or their attorney) to appear in court on behalf of the tenant and confess judgment against the tenant without notice or hearing. Virginia law prohibits these clauses in residential leases as a fundamental protection of tenants' due process rights.

<strong>Waiver of Landlord's Duty to Mitigate Damages</strong>: A provision stating the landlord does not have to attempt to re-rent the unit if the tenant abandons or breaks the lease. Virginia law requires landlords to make reasonable efforts to re-rent and mitigate their damages.

<strong>Waiver of Landlord's Habitability Obligations</strong>: A provision purporting to waive the landlord's duty to maintain the premises in habitable condition. This obligation is non-waivable under the VRLTA.

<strong>Waiver of Security Deposit Protections</strong>: A provision purporting to waive the tenant's rights regarding the security deposit (deadline for return, right to itemized deductions).

<strong>Exculpation of Landlord's Negligence</strong>: A clause releasing the landlord from liability for their own negligence or willful misconduct.

<strong>Penalty Provisions Beyond Lawful Late Fees</strong>: Charging fees in excess of the VRLTA's late fee limitations.

<h3>Required Disclosures with Virginia Leases</h3>

Virginia law requires landlords to provide certain disclosures at or before lease execution:

<ul>
<li><strong>Lead paint disclosure</strong>: For pre-1978 properties rented to tenants, the same lead paint disclosure requirements that apply to sales (10-day inspection right) apply to leases of pre-1978 dwellings</li>
<li><strong>Move-in inspection report</strong>: The landlord must provide (or conduct jointly) a written inspection of the unit's condition before or at the commencement of the tenancy</li>
<li><strong>Copy of the lease</strong>: The landlord must provide a copy of the executed lease within one business day of execution</li>
<li><strong>Utility disclosure</strong>: The landlord must disclose who is responsible for which utilities</li>
<li><strong>Landlord/manager contact information</strong>: Tenant must be told how to reach the person responsible for maintenance and rent receipt</li>
</ul>

<h3>Common Standard Lease Forms in Virginia</h3>

Virginia does not require use of a state-approved lease form. Landlords and property managers use:
<ul>
<li>Proprietary forms developed by their brokerage or property management company</li>
<li>Forms provided by the Virginia REALTORS association</li>
<li>Forms developed by DPOR-approved industry groups</li>
</ul>

Agents should ensure any lease form they use has been reviewed by a Virginia attorney to confirm VRLTA compliance, especially given that the law is amended periodically.

<h3>Month-to-Month Tenancies</h3>

When a written lease expires and neither party takes action to formally terminate or renew, the tenancy typically converts to month-to-month under the VRLTA. Under a month-to-month tenancy:
<ul>
<li>Either party can terminate with <strong>30 days' written notice</strong></li>
<li>Rent can be adjusted by the landlord with 30 days' notice</li>
<li>The VRLTA continues to govern the relationship</li>
</ul>

<strong>Exam tip</strong>: Confession of judgment clauses are prohibited in Virginia residential leases. Late fees are capped at 10% of monthly rent or $50, whichever is greater, and cannot be charged until rent is 5 days past due. Security deposits cannot exceed 2 months' rent.`,
        },
      ],
    },
    {
      slug: 'virginia-closing-practices',
      title: 'Virginia Closing Practices',
      lessons: [
        {
          slug: 'virginia-settlement-agents',
          title: 'Virginia Settlement Agents & Title Requirements',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: ['Virginia Settlement Agent Act', 'settlement agent', 'title insurance underwriter', 'ALTA', 'CLTA', 'lender\'s policy', 'owner\'s policy', 'simultaneous issue rate'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Virginia Settlement Agent Act requirements — who must be licensed and what must they do?' },
          ],
          content: `## Virginia Settlement Agents and Title Requirements

Virginia's Settlement Agent Act creates a specific licensing and regulatory framework for the people who conduct residential closings. Understanding these requirements helps agents select qualified settlement agents, advise clients on the closing process, and avoid recommending unqualified or unlicensed closing professionals.

<h3>The Virginia Settlement Agent Act</h3>

Virginia Code § 55.1-900 et seq. — the Virginia Settlement Agent Act — requires every person who provides real estate settlement services in Virginia to be:
<ul>
<li>A licensed attorney (Virginia State Bar licensed)</li>
<li>A licensed settlement agent (licensed by the Virginia State Corporation Commission through the Bureau of Insurance), OR</li>
<li>A title insurance company or its licensed agent</li>
</ul>

<strong>Who typically acts as settlement agent in Virginia:</strong>
<ul>
<li><strong>Title companies</strong>: The dominant settlement agent in most Virginia markets. Title companies are licensed by the Virginia Bureau of Insurance and typically affiliated with national title insurance underwriters (First American, Fidelity National, Old Republic, Stewart).</li>
<li><strong>Real estate attorneys</strong>: Common in some markets, particularly in rural areas and transactions where the complexity warrants legal involvement (estate sales, commercial, divorce-related sales).</li>
<li><strong>Hybrid firms</strong>: Many settlement agents are both licensed settlement agents AND employ or are staffed by attorneys — providing a more comprehensive closing service.</li>
</ul>

<strong>Who cannot serve as a settlement agent:</strong>
<ul>
<li>Real estate agents or brokers (even if licensed as such)</li>
<li>Mortgage companies acting as settlement agent on their own loans</li>
<li>Unlicensed paralegals or title abstractors (they can assist, but not conduct the settlement)</li>
</ul>

<h3>Title Insurance Underwriters in Virginia</h3>

All title insurance in Virginia is regulated by the Virginia Bureau of Insurance. The major national title insurance underwriters operating in Virginia are:
<ul>
<li>Fidelity National Title (which includes Chicago Title, Commonwealth Land Title, Alamo)</li>
<li>First American Title</li>
<li>Old Republic National Title</li>
<li>Stewart Title</li>
<li>Westcor Land Title (regional)</li>
</ul>

Settlement agents must be authorized agents of at least one of these underwriters to issue title insurance policies.

<h3>ALTA (American Land Title Association) Standards</h3>

Virginia title insurance policies follow ALTA standards:
<ul>
<li><strong>ALTA Owner's Policy</strong>: Standard owner's policy with defined coverages and exceptions</li>
<li><strong>ALTA Lender's Policy</strong>: Standard lender's policy</li>
<li><strong>ALTA Extended Coverage</strong>: An enhanced policy (available for an additional premium) that covers survey exceptions and some off-record risks that the standard ALTA policy excludes</li>
</ul>

<h3>Title Insurance Rates in Virginia</h3>

Virginia title insurance rates are <strong>filed with and approved by the Bureau of Insurance</strong>. Title companies in Virginia charge state-regulated rates, which means all title companies charge the same rates for the same coverage. Competition among title companies is on service quality, not price.

Virginia rates are typically charged per $1,000 of insured value (for the owner's policy) and per $1,000 of loan amount (for the lender's policy).

<h3>The Simultaneous Issue Rate</h3>

When the owner's policy and lender's policy are issued simultaneously at the same closing, the purchaser receives a significantly discounted rate. This is called the <strong>simultaneous issue rate</strong>.

Example:
<ul>
<li>Owner's policy alone on a $350,000 purchase: $1,575 (hypothetical)</li>
<li>Lender's policy alone on a $300,000 loan: $1,050</li>
<li>Simultaneous issue: Owner's policy at full rate ($1,575) + lender's policy at a fraction of the normal rate (perhaps $175)</li>
<li>Total simultaneous: $1,750 vs. $2,625 if purchased separately</li>
</ul>

Buyers who decline owner's title insurance and only purchase the required lender's policy are paying nearly as much for less protection — the simultaneous issue discount makes choosing both policies the economically rational choice.

<h3>RESPA Restrictions on Settlement Agent Selection</h3>

Under RESPA, sellers cannot <strong>require</strong> buyers to use a specific settlement agent as a condition of the sale. A seller can recommend a preferred settlement agent, but the buyer has the right to choose their own.

This protection is important in transactions involving builders (who often have captive title companies or affiliated settlement agents) — buyers retain the right to use an independent settlement agent.

<strong>Exam tip</strong>: Virginia requires a licensed settlement agent or attorney for residential closings. Title insurance rates are state-regulated (same rate at all companies). The simultaneous issue rate makes buying both owner's and lender's policies together the most economical choice.`,
        },
        {
          slug: 'virginia-taxes-transfer-fees',
          title: 'Virginia Transfer Taxes & Recording Fees',
          lessonType: 'interactive',
          estimatedMinutes: 21,
          keyTerms: ['grantor\'s tax', 'grantee tax', 'recordation tax', 'congestion relief fee', 'first-time homebuyer exemption', 'agricultural exemption', 'deed of trust tax'],
          interactiveElements: [
            { type: 'calculator', prompt: 'Calculate all Virginia transfer taxes and recording fees for a $425,000 purchase in a non-NOVA jurisdiction' },
          ],
          content: `## Virginia Transfer Taxes and Recording Fees

Virginia imposes several taxes on the transfer of real property and the recording of mortgage instruments. These taxes are a significant component of closing costs and are frequently tested on the Virginia state exam. Getting these calculations right is essential for producing accurate seller net sheets.

<h3>The Virginia Transfer Tax System</h3>

Virginia uses a split transfer tax system: one tax imposed on the grantor (seller) and one on the grantee (buyer) for recording documents.

<h3>Grantor's Tax (Seller Pays)</h3>

The <strong>grantor's tax</strong> is imposed on the seller at the time of the deed's recordation.

<strong>State grantor's tax rate:</strong> <strong>$0.10 per $100</strong> of the consideration (sale price), or fraction thereof.

<strong>Local grantor's tax:</strong> Many Virginia localities impose an additional local grantor's tax. Rates vary by locality but are commonly $0.10 to $0.50 per $100 of consideration.

<strong>Calculation example:</strong> Sale price $380,000, state + local grantor's tax combined = $0.20 per $100.
$380,000 ÷ 100 × $0.20 = $380 × $0.20 = <strong>$760 total grantor's tax</strong>

<strong>Or equivalently:</strong> $380,000 × 0.002 = $760

<h3>Recordation Tax on the Deed (Seller Pays)</h3>

In addition to the grantor's tax, recording a deed requires payment of a state <strong>recordation tax</strong>:

<strong>State recordation tax rate:</strong> <strong>$0.25 per $100</strong> of the consideration, or fraction thereof.

<strong>Calculation example:</strong> Same $380,000 sale.
$380,000 ÷ 100 × $0.25 = $380 × $0.25 = <strong>$950</strong>

<h3>Recordation Tax on the Deed of Trust (Buyer Pays)</h3>

When the buyer obtains a mortgage, the deed of trust must also be recorded. The recording of the deed of trust is taxed based on the loan amount (not the sale price):

<strong>State rate:</strong> <strong>$0.25 per $100</strong> of the secured debt (loan amount).

Example: Loan amount $320,000.
$320,000 ÷ 100 × $0.25 = $320 × $0.25 = <strong>$800</strong>

<h3>Northern Virginia and Hampton Roads Congestion Relief Fee</h3>

Virginia Code § 58.1-802.3 imposes an additional surcharge in two high-density transportation regions:

<strong>Northern Virginia (Planning District 8)</strong> and <strong>Hampton Roads (Planning District 23)</strong>: An additional <strong>$0.40 per $100</strong> of consideration is added to the recordation taxes in these regions.

<strong>This significantly increases transfer costs for sellers in these markets:</strong>

Example: $500,000 sale in Fairfax County (Northern Virginia):
<ul>
<li>State grantor's tax ($0.10): $500</li>
<li>Local grantor's tax ($0.10 for Fairfax): $500</li>
<li>State recordation on deed ($0.25): $1,250</li>
<li>Congestion relief fee ($0.40): $2,000</li>
<li>Total state/local/congestion on the deed: $4,250</li>
</ul>

<h3>Grantee's Tax (Buyer Pays)</h3>

A <strong>grantee's tax</strong> (sometimes called a state deed tax on the buyer) also applies in Virginia at the rate of <strong>$0.25 per $100</strong> of the consideration for the deed. Some localities impose an additional local grantee's tax.

<h3>First-Time Homebuyer Exemption</h3>

Virginia Code § 58.1-811 provides that certain transfers are exempt from grantor's tax. While a full first-time homebuyer exemption from all transfer taxes does not exist, the Virginia Housing Development Authority (VHDA) and certain government programs provide rate reductions or credits on qualified affordable housing purchases.

<h3>Summary for the Exam</h3>

Key rates to know:
<ul>
<li><strong>Grantor's tax</strong>: $0.10/100 state + local addition (seller pays)</li>
<li><strong>State recordation on deed</strong>: $0.25/100 (typically seller pays)</li>
<li><strong>Recordation on deed of trust</strong>: $0.25/100 of loan amount (buyer pays)</li>
<li><strong>Northern Virginia/Hampton Roads congestion fee</strong>: $0.40/100 additional (makes NOVA/HR significantly more expensive)</li>
</ul>

<strong>Exam tip</strong>: Grantor's tax is on the seller, based on the sale price. Deed of trust recordation is on the buyer, based on the loan amount. The Northern Virginia and Hampton Roads congestion relief fee adds $0.40 per $100 — test questions often ask about this regional difference.`,
        },
        {
          slug: 'new-construction-closings',
          title: 'New Construction Closings & Builder Contracts',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['builder contract', 'new home warranty', 'VHWRA', 'warranty of habitability', 'punch list', 'pre-settlement walkthrough', 'deposit protection', 'builder incentives'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer\'s agent is reviewing a builder\'s contract. What Virginia-specific protections should they look for and negotiate?' },
          ],
          content: `## New Construction Closings and Builder Contracts in Virginia

New construction transactions are fundamentally different from resale transactions. The contract is different, the closing timeline is different, the disclosures are different, and the buyer's protections come from a different statutory framework. Every Virginia agent should understand these distinctions before representing a buyer in a builder transaction.

<h3>The Virginia New Home Warranty Act (VHWRA)</h3>

The Virginia New Home Warranty Act (Virginia Code §55.1-700 through §55.1-710) governs warranties on new residential construction. When a builder sells a newly constructed home, the VHWRA provides the buyer with statutory warranty protection.

<strong>VHWRA warranty periods:</strong>
<ul>
<li><strong>One year</strong>: All defects in materials and workmanship</li>
<li><strong>Two years</strong>: Defects in electrical, plumbing, HVAC, and other mechanical systems</li>
<li><strong>Five years</strong>: Structural defects (load-bearing elements, foundation)</li>
</ul>

These are minimum warranty periods — some builders offer longer warranties or third-party home warranties in addition to the VHWRA minimums.

<strong>Note</strong>: The VHWRA protections apply to new homes, not the "like new" resale of recently built homes. A 5-year-old home sold by its original owner does not carry VHWRA warranties.

<h3>Builder Contracts — Key Differences from Resale Contracts</h3>

<strong>Builder-prepared contracts:</strong> Builders use their own purchase contracts, not the regional REALTOR association forms. These contracts are drafted by the builder's attorneys to protect the builder's interests. Key buyer-adverse provisions to watch for:

<ul>
<li><strong>Non-refundable deposits</strong>: Some builders require substantial non-refundable deposits (sometimes $5,000-$50,000) at contract signing — the buyer cannot cancel for change of mind and get their deposit back</li>
<li><strong>Price escalation clauses</strong>: Allow the builder to increase the purchase price if material costs rise significantly — especially relevant during supply chain disruptions</li>
<li><strong>Completion date flexibility</strong>: Builder contracts typically give builders wide latitude on completion timing, with limited consequences for delays</li>
<li><strong>Arbitration clauses</strong>: Many builder contracts require disputes (including warranty claims) to be resolved through private arbitration rather than court</li>
<li><strong>Builder's lender preference</strong>: Builders often incentivize (or require) use of their captive lender. Buyers have the right to use their own lender, but may need to negotiate to keep certain incentives.</li>
</ul>

<h3>Pre-Settlement (Final) Walkthrough</h3>

Before closing on a new construction home, the buyer has the right to conduct a <strong>pre-settlement walkthrough</strong> (also called a final walkthrough or orientation):
<ul>
<li>Conducted with a builder representative, typically 1-7 days before closing</li>
<li>The buyer and agent review all completed work, note any incomplete items or defects on a <strong>punch list</strong></li>
<li>The builder commits to completing punch list items by closing (or within a reasonable post-closing period)</li>
<li>The punch list should be documented in writing and signed by both parties</li>
</ul>

Items on the punch list at closing: Buyers must decide whether to close with punch list items outstanding (common — minor items like touch-up paint and adjusted doors) or delay closing until completion. Never close without documenting outstanding punch list items in writing with a clear completion commitment.

<h3>Deposit Protection</h3>

When buyers make deposits on new construction, they want to know their deposit is protected if the builder fails to complete. Virginia law provides some protections:
<ul>
<li>Deposits for new home construction are often held in escrow (but verify — some builders don't require it)</li>
<li>The VHWRA requires builders to be registered with DPOR's Contractor Recovery Fund (now through the Virginia Board for Contractors)</li>
<li>If a builder becomes insolvent or fails to complete, buyers may have limited recourse — consult an attorney</li>
</ul>

<h3>Agent Representation in Builder Transactions</h3>

<strong>The builder's sales agent represents the builder</strong>: On-site sales agents at model homes are builder employees or the builder's agent. They represent the builder's interests. A buyer walking into a model home without their own agent is unrepresented.

<strong>Why buyers need their own agent:</strong>
<ul>
<li>The buyer's agent can review the builder contract and identify problematic provisions before signing</li>
<li>The buyer's agent can negotiate upgrades, closing cost contributions, and price adjustments</li>
<li>The buyer's agent conducts the pre-settlement walkthrough with the buyer</li>
<li>The buyer's agent ensures the buyer understands VHWRA warranty rights</li>
</ul>

<strong>Registering the buyer with the builder:</strong> Most builders require that a buyer's agent register their client before the client visits the model home. If the buyer visits the model without their agent present first, the builder may refuse to pay the buyer's agent commission. Always register your buyer clients before their first builder contact.

<strong>Exam tip</strong>: VHWRA provides 1-year materials/workmanship, 2-year mechanical systems, and 5-year structural warranties on new construction. Builder contracts are drafted in the builder's favor — buyer representation is critical. Deposits may not be refundable in builder contracts.`,
        },
      ],
    },
    {
      slug: 'continuing-education-post-license',
      title: 'Continuing Education & Post-License',
      lessons: [
        {
          slug: 'ce-requirements-renewal',
          title: 'CE Requirements & License Renewal',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['continuing education', '16-hour CE requirement', 'VREB-required topics', 'license renewal date', 'grace period', 'late renewal', 'CE provider approval'],
          interactiveElements: [
            { type: 'mini_quiz', prompt: 'Virginia CE compliance quiz: is this licensee compliant with renewal requirements?' },
          ],
          content: `## Continuing Education Requirements and License Renewal in Virginia

Maintaining a Virginia real estate license requires ongoing education. The continuing education and license renewal requirements are not complicated — but missing deadlines has real consequences, and many licensees inadvertently fall out of compliance. Know these rules.

<h3>Virginia Salesperson License Renewal Cycle</h3>

Virginia salesperson licenses are renewed on a <strong>two-year cycle</strong>. Your license expiration date is set when you are first licensed and repeats every two years.

<strong>To renew a Virginia salesperson license, you must:</strong>
<ol>
<li>Complete <strong>16 hours of continuing education (CE)</strong> from DPOR-approved providers during the two-year cycle</li>
<li>Submit the renewal application</li>
<li>Pay the renewal fee</li>
<li>Have all applications and fees submitted before the license expiration date</li>
</ol>

<h3>The Mandatory 3-Hour VREB Topics Course</h3>

Of the 16 required CE hours, at least <strong>3 hours must be the VREB-mandated course</strong> covering:
<ul>
<li>Agency relationships and disclosure requirements</li>
<li>Ethics and standards of conduct</li>
<li>Fair housing laws and requirements</li>
<li>Real estate transactions (recordkeeping, contracts)</li>
</ul>

This course is updated annually by VREB to reflect current regulatory changes. It is not interchangeable with other CE courses — it must be the specific VREB-required course topic, approved and offered by DPOR-approved providers.

<strong>The remaining 13 hours</strong> can cover any real estate-related topic approved by DPOR: property management, commercial real estate, technology in real estate, specialized designations coursework, etc.

<h3>Finding DPOR-Approved CE Providers</h3>

The DPOR website (dpor.virginia.gov) maintains a searchable database of all approved continuing education providers. Before taking a CE course and expecting credit toward your renewal, verify the provider is on the approved list. Not every real estate webinar, conference session, or industry event qualifies as CE credit.

<strong>How CE hours are reported:</strong> Providers submit completion records directly to DPOR's electronic system. Licensees should confirm their CE hours are reflected in their DPOR account before submitting a renewal application.

<h3>Late Renewal Provisions</h3>

<strong>Renewal within 30 days after expiration:</strong> Virginia allows a brief grace period. If a licensee applies within 30 days after the expiration date, they can renew with payment of the standard renewal fee plus a late fee, without retaking the licensing exam.

<strong>Renewal between 31 days and 12 months after expiration:</strong> The license is treated as having lapsed. The licensee can apply for reinstatement but must retake the licensing exam.

<strong>After more than 12 months:</strong> The licensee must reapply as a new applicant — completing the 60-hour pre-license education and passing the full exam again.

<strong>Important</strong>: During any period of license expiration (even within the 30-day grace period), the licensee cannot practice real estate. An expired license provides no authority to act.

<h3>Inactive License Renewal</h3>

Licensees with an inactive license (not affiliated with a broker, not practicing) can still renew their license to maintain it. Inactive licensees have the same CE requirement as active licensees — 16 hours every two years.

Many inactive licensees let their CE lapse, assuming they don't need it since they're not practicing. This results in the license expiring, requiring full examination retake to restore. If you want to keep your license available for future use, maintain CE even during inactive periods.

<h3>Broker License Renewal</h3>

Broker licenses follow the same two-year renewal cycle and 16-hour CE requirement. Brokers have an additional continuing education obligation to maintain competence in the management and supervision requirements that are unique to their role.

<strong>Exam tip</strong>: 16 CE hours required every 2 years for Virginia salesperson renewal. Of those 16 hours, 3 must be the VREB-mandated course covering agency, ethics, fair housing, and transactions. Missing the renewal deadline by more than 30 days requires retaking the exam. During any expired period, licensees cannot practice.`,
        },
        {
          slug: 'post-license-first-year',
          title: 'Post-License Education: First-Year Requirements',
          lessonType: 'reading',
          estimatedMinutes: 16,
          keyTerms: ['post-license education', '30-hour requirement', 'first license year', 'inactive status consequence', 'VREB-approved school', 'course completion'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Post-license vs. continuing education — what each requires and when' },
          ],
          content: `## Post-License Education: First-Year Requirements for New Virginia Salespersons

Virginia's post-license education (PLE) requirement is one of the most frequently confused aspects of the licensing system — and one of the most commonly violated. New agents who miss the deadline face immediate license inactivation, not just a fine. Know this requirement inside and out before you begin your career.

<h3>What Is Post-License Education?</h3>

Post-license education (PLE) is a continuing education requirement specifically for new salesperson licensees. It is separate from and in addition to:
<ul>
<li>The 60-hour pre-license education (completed before the exam)</li>
<li>The ongoing 16-hour CE renewal requirement (for all licensees)</li>
</ul>

PLE is Virginia's bridge requirement — designed to ensure that new licensees receive additional practical training in their first year of practice, when mistakes are most likely and the knowledge gap from pre-license education is widest.

<h3>The 30-Hour Requirement</h3>

New Virginia salesperson licensees must complete <strong>30 hours of post-license education</strong> from DPOR-approved providers within the <strong>first year</strong> of initial licensure.

<strong>"First year" means:</strong> From the date of initial license issuance to the same date one year later. Not from the first renewal date — from the date you were licensed.

<h3>Required Course Topics</h3>

VREB specifies that PLE must cover topics that complement and expand on pre-license education with a practical focus. DPOR-approved PLE courses typically cover:
<ul>
<li>The nuts and bolts of listing and buyer representation in Virginia practice</li>
<li>Contract preparation and transaction management</li>
<li>Agency disclosure requirements and practical application</li>
<li>Fair housing in Virginia practice</li>
<li>Property management basics (if offered as a track)</li>
<li>Real estate technology and digital tools</li>
<li>Advanced Virginia-specific regulations</li>
</ul>

The 30 hours can be split among multiple courses, taken in any order, as long as all 30 hours are completed within the first year.

<h3>Consequences of Non-Completion</h3>

This is where many new agents are surprised: missing the post-license education deadline results in your Virginia salesperson license being placed on <strong>inactive status</strong>, not in expiration.

<strong>Critical distinction for the exam:</strong>
<ul>
<li>Failure to complete post-license education = <strong>inactive license</strong></li>
<li>Failure to renew (complete CE and pay renewal fees) = <strong>expired license</strong></li>
</ul>

An inactive license can be reactivated when the agent affiliates with a broker AND completes any outstanding requirements. But until the license is reactivated, the agent cannot practice.

If the first license year ends without 30 hours of PLE completed, the agent's license goes inactive immediately at the end of that year. The agent must complete the remaining PLE hours and submit proof before the broker can reactivate the license.

<h3>How PLE Relates to the First Renewal Cycle</h3>

The first license renewal will typically come two years after initial licensure. By that point, the licensee must have:
<ul>
<li>Completed the 30-hour PLE within year 1 (if they haven't already, the license is inactive)</li>
<li>Completed the 16-hour CE requirement for renewal (standard renewal CE)</li>
</ul>

The 30 hours of PLE do not count toward the 16 hours of CE for the first renewal. They are separate requirements.

<h3>Finding PLE Courses</h3>

Like continuing education, post-license education courses must be offered by DPOR-approved providers. The same provider database at dpor.virginia.gov applies. Many real estate schools, local REALTOR associations, and online platforms offer approved PLE courses.

Many brokerages offer PLE through company training programs — new agents should ask about PLE options during the broker-selection process. Some brokerages partner with approved providers to offer PLE at discounted or no cost to their affiliated agents.

<h3>PLE for Brokers and Reciprocity</h3>

<strong>Brokers</strong>: New salesperson PLE requirements do not apply to persons who begin by obtaining a broker license directly (which is rare, as most brokers start as salespersons). If a salesperson obtains a broker license, they shift to the broker renewal and CE framework.

<strong>Reciprocal/endorsement licensees</strong>: An agent who receives a Virginia license by endorsement from another state is still subject to Virginia's PLE requirement if they are new to the Virginia market. Check the specific endorsement agreement terms.

<strong>Exam tip</strong>: 30 hours of PLE within the first year of initial licensure. Missing the deadline = inactive license (not expired). PLE does not count toward the 16-hour CE renewal requirement — they are separate. Approved PLE providers are listed in DPOR's database.`,
        },
      ],
    },
    {
      slug: 'common-interest-communities',
      title: 'Common Interest Communities',
      lessons: [
        {
          slug: 'cic-fundamentals-virginia',
          title: 'CIC Fundamentals in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['common interest community', 'CIC', 'condominium', 'cooperative', 'planned unit development', 'PUD', 'CIC Board', 'DPOR', 'CIC manager', 'Property Owners Association Act'],
          interactiveElements: [
            { type: 'flashcard', prompt: 'Match each CIC type to its defining characteristics' },
            { type: 'mini_quiz', prompt: 'Test your knowledge of Virginia CIC regulations and licensing' },
          ],
          content: `## Common Interest Communities in Virginia

A <strong>common interest community (CIC)</strong> is any real estate development where individual owners share ownership of, or financial responsibility for, common areas, amenities, or services managed by an owners' association. In Virginia, CICs are one of the most heavily tested topics on the state-specific portion of the PSI exam because the state has a comprehensive regulatory framework governing them.

Understanding CICs is not optional for Virginia licensees. The majority of residential sales in Northern Virginia, Hampton Roads, and the Richmond metro area involve properties within a CIC. Getting the disclosure requirements wrong can result in a voided contract, a DPOR complaint, or both.

<h3>Types of Common Interest Communities</h3>

Virginia law recognizes three primary forms of common interest communities:

<h3>Condominiums</h3>

A condominium is a form of ownership where the buyer receives fee simple title to an individual unit (the airspace within the unit boundaries) and an undivided interest in the <strong>common elements</strong> shared by all unit owners. Common elements include structural components, hallways, lobbies, parking areas, pools, and the land beneath the building.

<strong>Limited common elements</strong> are portions of the common elements reserved for the exclusive use of one or more (but not all) unit owners. Examples include assigned parking spaces, balconies, and storage units. The unit owner does not own limited common elements outright but has exclusive use rights defined in the condominium instruments.

In Virginia, condominiums are governed by the <strong>Virginia Condominium Act</strong> (Virginia Code Title 55.1, Chapter 19).

<h3>Cooperatives</h3>

In a cooperative (co-op), the entire property is owned by a corporation. Buyers purchase shares in the corporation rather than real property. Share ownership entitles the buyer to a proprietary lease granting occupancy of a specific unit. Because the buyer owns personal property (shares) rather than real property, financing is different: co-op purchases typically use share loans rather than traditional mortgages.

Cooperatives are relatively uncommon in Virginia compared to condominiums and PUDs, but they do appear on the exam.

<h3>Planned Unit Developments (PUDs)</h3>

A planned unit development combines individually owned lots (fee simple) with shared common areas maintained by a homeowners' association (HOA). PUDs are the most common CIC form in Virginia's suburban markets. The buyer receives a deed to their individual lot and dwelling, plus mandatory membership in the HOA that owns and maintains common areas such as streets, parks, pools, and clubhouses.

PUDs in Virginia are governed by the <strong>Property Owners Association Act (POAA)</strong> (Virginia Code Title 55.1, Chapter 18).

<h3>The Virginia Common Interest Community Board</h3>

The <strong>Virginia Common Interest Community Board</strong> operates within DPOR and is the regulatory body overseeing CICs in Virginia. The CIC Board's responsibilities include:

<ul>
<li><strong>Licensing CIC managers</strong>: Any individual or firm that manages a common interest community for compensation must hold a CIC manager license issued by the CIC Board</li>
<li><strong>Registering CICs</strong>: Common interest communities with annual assessments must register with the CIC Board</li>
<li><strong>Investigating complaints</strong>: The CIC Board investigates complaints against CIC managers and associations</li>
<li><strong>Enforcing regulations</strong>: The CIC Board can impose fines and disciplinary actions against licensed CIC managers</li>
<li><strong>Administering the CIC Manager Guarantee Fund</strong>: This fund provides a recovery mechanism for associations harmed by the misconduct of licensed CIC managers</li>
</ul>

<h3>CIC Manager Licensing</h3>

Virginia requires any person or entity providing CIC management services for compensation to hold a license. CIC management services include collecting assessments, enforcing governing documents, managing common area maintenance, and handling association finances.

To obtain a CIC manager license, an applicant must:
<ul>
<li>Complete DPOR-approved pre-license education</li>
<li>Pass the CIC manager examination</li>
<li>Submit a license application with required fees</li>
<li>Maintain the license through continuing education</li>
</ul>

<strong>Exemptions</strong>: An association that self-manages (board members managing without outside compensation) is not required to hold a CIC manager license. Real estate licensees who manage properties are also exempt if property management is incidental to their real estate brokerage activities and they are not providing dedicated CIC management services.

<h3>The Property Owners Association Act (POAA)</h3>

The POAA is the primary statute governing planned communities (PUDs and HOAs) in Virginia. Key provisions include:

<ul>
<li>Requires associations to maintain certain financial records and make them available to members</li>
<li>Establishes the resale disclosure packet requirement for property transfers within a POA</li>
<li>Grants associations the authority to levy and collect assessments</li>
<li>Provides procedures for architectural review and enforcement of restrictive covenants</li>
<li>Establishes dispute resolution mechanisms</li>
</ul>

<strong>Exam tip</strong>: The Virginia Condominium Act governs condominiums. The Property Owners Association Act governs PUDs and HOAs. The CIC Board under DPOR licenses CIC managers and oversees both types. Know the distinction between these statutes and which CIC types each covers.`,
        },
        {
          slug: 'resale-disclosure-association-documents',
          title: 'Resale Disclosure & Association Documents',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: ['resale disclosure packet', 'resale certificate', 'association documents', 'buyer cancellation right', 'assessment disclosure', 'reserve study', 'financial statements', 'governing documents'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A buyer receives the resale disclosure packet 2 days before closing. What are the buyer\'s rights under Virginia law?' },
            { type: 'mini_quiz', prompt: 'Resale disclosure packet requirements and timelines' },
          ],
          content: `## Resale Disclosure & Association Documents

The resale disclosure packet is one of the most critical documents in any Virginia CIC transaction. Virginia law requires sellers in common interest communities to provide buyers with extensive information about the association, its finances, and its governing rules before the sale is finalized. Getting this wrong is one of the most common sources of contract disputes and DPOR complaints in Virginia.

<h3>The Resale Disclosure Packet Requirement</h3>

Under both the <strong>Property Owners Association Act (POAA)</strong> and the <strong>Virginia Condominium Act</strong>, a seller of property within a CIC must provide the buyer with a resale disclosure packet (sometimes called a resale certificate in condominiums). This is not optional. The requirement exists regardless of whether the buyer asks for the packet.

The seller is responsible for ordering the packet, typically through the association's management company. The cost of the packet is negotiable between buyer and seller, but the seller bears the legal obligation to provide it.

<h3>What the Resale Disclosure Packet Must Include</h3>

Virginia law specifies the minimum contents of a resale disclosure packet. For properties governed by the POAA, the packet must include:

<ul>
<li><strong>The association's governing documents</strong>: Declaration (CC&Rs), bylaws, articles of incorporation, and all recorded amendments</li>
<li><strong>Rules and regulations</strong>: Current rules adopted by the board, including architectural guidelines, pet policies, parking rules, and rental restrictions</li>
<li><strong>Financial information</strong>: The current annual budget, most recent audited or reviewed financial statement, and a statement of the association's current financial condition</li>
<li><strong>Assessment information</strong>: The amount of the current regular assessment, any special assessments that have been levied or are planned, and any outstanding balance owed by the seller's unit</li>
<li><strong>Reserve study information</strong>: The most recent reserve study (if one has been conducted) and a statement of the association's reserve fund balance</li>
<li><strong>Insurance information</strong>: A summary of the association's insurance coverage, including the master policy and any gaps that unit owners should cover individually</li>
<li><strong>Pending litigation</strong>: Disclosure of any pending lawsuits or legal actions involving the association</li>
<li><strong>Capital improvement plans</strong>: Any planned capital improvements and how they will be funded</li>
<li><strong>Meeting minutes</strong>: Minutes from the board's most recent annual meeting and any meetings held within the last 12 months where the board voted on assessments, budgets, or major expenditures</li>
<li><strong>Violation history</strong>: Any outstanding violations against the seller's unit</li>
</ul>

For condominiums under the Virginia Condominium Act, the resale certificate must include similar information plus:
<ul>
<li>The condominium instruments (declaration, bylaws, plats, and plans)</li>
<li>A statement of the unit's proportionate share of common expenses</li>
<li>The number of units in the condominium</li>
<li>A statement identifying any portions of the condominium that may be added or converted</li>
</ul>

<h3>Timeline for Delivery</h3>

The seller must deliver the resale disclosure packet to the buyer. The buyer then has a statutory right to review the packet before being bound by the contract:

<ul>
<li><strong>Under the POAA</strong>: The buyer has the right to cancel the contract within <strong>3 days</strong> of receiving the resale disclosure packet (or within 3 days of receiving any amendment to the packet). The 3-day period is calendar days, not business days.</li>
<li><strong>Under the Virginia Condominium Act</strong>: The buyer has the right to cancel the contract within <strong>3 days</strong> of receiving the resale certificate or within 3 days of receiving any amendment.</li>
</ul>

If the packet is not delivered at all, the buyer's right to cancel does not expire. The buyer can cancel at any time before settlement if the packet was never provided.

<h3>Buyer's Right to Cancel</h3>

The buyer's cancellation right is absolute within the statutory period. The buyer does not need to provide a reason for cancellation. To exercise the right, the buyer must deliver written notice of cancellation to the seller before expiration of the cancellation period.

Upon valid cancellation:
<ul>
<li>The contract is void</li>
<li>The buyer is entitled to a full refund of the earnest money deposit</li>
<li>Neither party has further liability to the other under the contract</li>
</ul>

<strong>This is non-waivable</strong>. A contract provision purporting to waive the buyer's right to cancel after receiving the resale disclosure packet is void and unenforceable under Virginia law.

<h3>Association Assessment Disclosure</h3>

One of the most important items in the resale disclosure packet is the assessment disclosure. The buyer needs to know:

<ul>
<li>The current regular (monthly, quarterly, or annual) assessment amount</li>
<li>Whether any special assessments have been approved or are anticipated</li>
<li>Whether the seller's account is current or has an outstanding balance</li>
<li>Whether the association has the authority to increase assessments and by how much without a membership vote</li>
<li>Any pending assessment increases approved by the board</li>
</ul>

Unpaid assessments can become a lien against the property in Virginia, so the buyer's agent must verify the seller's account status.

<h3>Reserve Study Requirements</h3>

A <strong>reserve study</strong> is a professional analysis of the association's common area components, their expected useful life, and the funding needed to replace them. Virginia law encourages (and in some cases requires) associations to conduct reserve studies.

Under the POAA, associations with annual assessments of $10,000 or more must:
<ul>
<li>Conduct a reserve study at least once every 5 years</li>
<li>Include the reserve study findings in the resale disclosure packet</li>
<li>Maintain a reserve fund based on the study's recommendations</li>
</ul>

A reserve study typically includes:
<ul>
<li>An inventory of all major common area components (roofs, roads, pools, HVAC systems, etc.)</li>
<li>The estimated remaining useful life of each component</li>
<li>The estimated replacement cost for each component</li>
<li>A recommended funding plan to ensure adequate reserves</li>
</ul>

Inadequate reserves are a red flag for buyers. An association with underfunded reserves may need to levy special assessments or take out loans to cover unexpected repairs, directly impacting unit owners' costs.

<strong>Exam tip</strong>: The buyer has 3 calendar days to cancel after receiving the resale disclosure packet. This right cannot be waived. If the packet is never delivered, the cancellation right never expires. The packet must include governing documents, financials, assessments, reserve study, insurance, and pending litigation. These details are heavily tested on the Virginia portion of the exam.`,
        },
        {
          slug: 'rights-responsibilities-governance',
          title: 'Rights, Responsibilities & Governance',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: ['unit owner rights', 'board of directors', 'assessment authority', 'architectural controls', 'dispute resolution', 'Virginia Condominium Act', 'Property Owners Association Act', 'declarant', 'declarant rights', 'architectural review board'],
          interactiveElements: [
            { type: 'scenario', prompt: 'A homeowner wants to build a fence but the HOA denies the request. What are the homeowner\'s options under Virginia law?' },
            { type: 'mini_quiz', prompt: 'CIC governance powers, owner rights, and dispute resolution' },
          ],
          content: `## Rights, Responsibilities & Governance

Every common interest community in Virginia operates under a governance framework defined by its founding documents and regulated by state law. Understanding how CIC governance works is essential for both the exam and for advising clients who buy or sell in these communities.

<h3>The Governing Documents Hierarchy</h3>

CIC governance follows a strict hierarchy of authority:

<ul>
<li><strong>Federal and state law</strong>: Overrides everything. Fair housing, constitutional rights, and Virginia statutes cannot be overridden by association documents</li>
<li><strong>Declaration (CC&Rs or condominium instruments)</strong>: The master document filed in the land records that creates the CIC and establishes the fundamental rules. Can only be amended by a supermajority vote of owners (typically 67%)</li>
<li><strong>Bylaws</strong>: Establish the association's internal governance procedures, including board elections, meeting requirements, voting rights, and officer duties</li>
<li><strong>Rules and regulations</strong>: Adopted by the board of directors to implement and supplement the declaration and bylaws. The board can typically amend rules without a full membership vote, but the rules cannot conflict with higher-level documents</li>
</ul>

<h3>Unit Owner Rights Under Virginia Law</h3>

Virginia law grants CIC owners specific protections that the association cannot override:

<ul>
<li><strong>Right to vote</strong>: Every owner has the right to vote on matters requiring membership approval, including board elections, declaration amendments, and special assessments above certain thresholds</li>
<li><strong>Right to attend meetings</strong>: Owners have the right to attend all board meetings (with limited exceptions for executive sessions discussing legal, personnel, or individual owner matters)</li>
<li><strong>Right to inspect records</strong>: Owners may inspect the association's books and records, including financial statements, meeting minutes, contracts, and correspondence. The association may charge a reasonable fee for copies</li>
<li><strong>Right to receive notice</strong>: The association must provide advance written notice of meetings, assessment increases, and enforcement actions</li>
<li><strong>Right to due process in enforcement</strong>: Before imposing fines or penalties, the association must provide written notice of the alleged violation and an opportunity for the owner to be heard</li>
<li><strong>Right to display flags</strong>: Virginia law specifically protects the right of owners to display the United States flag and political signs (with reasonable size and placement restrictions)</li>
<li><strong>Right to install solar panels</strong>: Virginia law prohibits associations from unreasonably restricting solar panel installation</li>
</ul>

<h3>Board of Directors Powers and Limitations</h3>

The board of directors is the governing body of the association. Board members are typically elected by the membership and serve staggered terms. The board's powers include:

<ul>
<li><strong>Enforcing the governing documents</strong>: The board has the authority and obligation to enforce the declaration, bylaws, and rules</li>
<li><strong>Managing finances</strong>: The board adopts the annual budget, sets assessment amounts (within limits), and manages reserves</li>
<li><strong>Maintaining common areas</strong>: The board is responsible for the repair, maintenance, and replacement of common elements</li>
<li><strong>Hiring management</strong>: The board may contract with a licensed CIC management company for day-to-day operations</li>
<li><strong>Adopting rules</strong>: The board may adopt reasonable rules and regulations that do not conflict with the declaration or bylaws</li>
<li><strong>Imposing fines</strong>: After proper notice and hearing, the board may impose fines for violations of the governing documents</li>
</ul>

<strong>Limitations on board power</strong>:
<ul>
<li>The board cannot amend the declaration without the required membership vote</li>
<li>The board cannot levy special assessments above a certain percentage of the annual budget without membership approval (specific thresholds vary by association documents)</li>
<li>Board members owe fiduciary duties to the association and its members</li>
<li>Board actions must be consistent with the governing documents and Virginia law</li>
<li>Board meetings must be open to members except for limited executive session topics</li>
</ul>

<h3>Assessment Authority</h3>

Assessments are the financial lifeblood of every CIC. The association's authority to levy assessments comes from the declaration and is regulated by state law.

<strong>Regular assessments</strong>: The board sets the annual budget and determines the regular assessment amount each unit owner pays. The declaration typically limits how much the board can increase assessments annually without a membership vote (common cap: 10% per year).

<strong>Special assessments</strong>: For unexpected expenses (storm damage, major repairs, legal costs), the board may levy special assessments. Virginia law and most declarations require a membership vote for special assessments exceeding a specified threshold.

<strong>Assessment liens</strong>: In Virginia, unpaid assessments create an automatic lien against the unit. The association can enforce the lien through foreclosure. Under the POAA, the association's assessment lien has priority over most other liens except:
<ul>
<li>First deeds of trust (mortgage liens recorded before the assessment became delinquent)</li>
<li>Real property tax liens</li>
</ul>

The lien for 6 months of unpaid assessments has a limited priority (sometimes called a "super lien") that may take precedence over even a first deed of trust in certain situations under Virginia law. This is a tested concept.

<h3>Architectural Controls</h3>

Most CICs restrict modifications to individual units and lots through an <strong>architectural review board (ARB)</strong> or architectural review committee. The ARB reviews proposed changes to ensure they comply with community design standards.

Common items requiring ARB approval:
<ul>
<li>Exterior paint colors, siding, and roofing materials</li>
<li>Fences, decks, patios, and landscaping changes</li>
<li>Satellite dishes and antennas (subject to FCC preemption rules)</li>
<li>Solar panel installation (Virginia law limits unreasonable restrictions)</li>
<li>Additions, sheds, and outbuildings</li>
</ul>

The ARB must apply standards consistently and cannot make arbitrary or discriminatory decisions. Owners denied approval have the right to appeal to the full board of directors.

<h3>Dispute Resolution</h3>

Virginia provides several mechanisms for resolving disputes between owners and associations:

<ul>
<li><strong>Internal grievance procedures</strong>: Most governing documents include a grievance or complaint process</li>
<li><strong>DPOR/CIC Board complaints</strong>: If the dispute involves a licensed CIC manager, an owner can file a complaint with the CIC Board</li>
<li><strong>Mediation</strong>: Virginia encourages mediation as an alternative to litigation. Some CIC documents require mediation before court action</li>
<li><strong>Litigation</strong>: Either party may file suit in circuit court. Virginia courts apply the "business judgment rule" to board decisions, meaning courts will generally not second-guess board decisions that were made in good faith, within the board's authority, and on an informed basis</li>
<li><strong>Office of the Common Interest Community Ombudsman</strong>: Virginia established this office within DPOR to help resolve CIC disputes through education and informal dispute resolution. The ombudsman does not have enforcement authority but can facilitate communication between parties</li>
</ul>

<h3>Virginia Condominium Act vs. Property Owners Association Act</h3>

Both statutes share many similar provisions, but key differences exist:

<ul>
<li><strong>What they govern</strong>: The Condominium Act governs condominiums (airspace ownership + common elements). The POAA governs PUDs, HOAs, and other planned communities (lot ownership + shared common areas)</li>
<li><strong>Unit boundaries</strong>: Condominium unit boundaries are typically defined as the airspace within the interior surfaces of walls, floors, and ceilings. PUD lot boundaries are defined by the recorded plat</li>
<li><strong>Insurance requirements</strong>: Condominium associations must carry a master insurance policy covering the building structure and common elements. PUD associations typically insure only common area improvements, with individual homeowners insuring their own structures</li>
<li><strong>Structural responsibility</strong>: In a condominium, the association is responsible for structural repairs to the building. In a PUD, the individual homeowner is typically responsible for their own dwelling's structure</li>
<li><strong>Declarant rights</strong>: Both acts address <strong>declarant rights</strong>, which are special powers retained by the developer during the initial development period. Declarant rights typically include the right to control the board, add phases to the development, and modify the declaration. These rights expire according to the terms of the declaration or by operation of law</li>
</ul>

<strong>Exam tip</strong>: Know the difference between the Virginia Condominium Act and the POAA. Condominiums = airspace ownership + common elements, governed by the Condominium Act. PUDs = lot ownership + HOA, governed by the POAA. The CIC Board licenses CIC managers. Assessment liens can take priority in Virginia. The buyer's 3-day cancellation right applies under both statutes. The business judgment rule protects board decisions made in good faith.`,
        },
      ],
    },
  ],
}

// ── Part 2 Imports (Modules 7-12: Virginia Practices — 30 additional hours) ──

import { module7, module8 } from './course-content-mod78'
import { module9, module10 } from './course-content-mod910'
import { module11, module12 } from './course-content-mod1112'

// ── Full Course Export (60 hours total) ─────────────────────────────────────

export const COURSE_MODULES: CourseModule[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12,
]

// ── Helper Functions ──────────────────────────────────────────────────────────

export function getModuleBySlug(slug: string): CourseModule | undefined {
  return COURSE_MODULES.find((m) => m.slug === slug)
}

export function getChapterBySlug(
  moduleSlug: string,
  chapterSlug: string,
): CourseChapter | undefined {
  // Not named `module`: that is a reserved binding in a CommonJS scope, and
  // webpack rewrites assignments to it, which is why Next refuses it.
  const courseModule = getModuleBySlug(moduleSlug)
  return courseModule?.chapters.find((c) => c.slug === chapterSlug)
}

export function getLessonBySlug(
  moduleSlug: string,
  chapterSlug: string,
  lessonSlug: string,
): CourseLesson | undefined {
  const chapter = getChapterBySlug(moduleSlug, chapterSlug)
  return chapter?.lessons.find((l) => l.slug === lessonSlug)
}

export function getTotalLessons(): number {
  return COURSE_MODULES.reduce(
    (total, module) =>
      total +
      module.chapters.reduce(
        (chTotal, chapter) => chTotal + chapter.lessons.length,
        0,
      ),
    0,
  )
}

export function getTotalModules(): number {
  return COURSE_MODULES.length
}
