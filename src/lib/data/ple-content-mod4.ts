import type {
  CourseModule,
  CourseChapter,
  CourseLesson,
  InteractiveElement,
} from './course-content'

// ── PLE Module 4: Current Industry Issues and Trends ────────────────────────
// Virginia DPOR Post-License Education (PLE) - 2 hours / 100 min instruction

const chapter1: CourseChapter = {
  slug: 'nar-settlement-commission-changes',
  title: 'NAR Settlement and Commission Changes',
  lessons: [
    {
      slug: 'sitzer-burnett-verdict-antitrust-background',
      title: 'The Sitzer/Burnett Verdict & Antitrust Background',
      lessonType: 'reading',
      estimatedMinutes: 10,
      keyTerms: [
        'Sitzer/Burnett',
        'National Association of Realtors',
        'antitrust',
        'Sherman Act',
        'buyer broker compensation',
        'MLS cooperative compensation',
        'class action',
        'treble damages',
        'DOJ investigation',
      ],
      interactiveElements: [
        {
          type: 'flashcard',
          prompt:
            'Match the key terms from the NAR antitrust litigation to their definitions',
        },
        {
          type: 'mini_quiz',
          prompt:
            'Test your understanding of the Sitzer/Burnett verdict and its legal basis',
        },
      ],
      content: `## The Sitzer/Burnett Verdict and Antitrust Claims

### Background: How the Commission System Worked

For decades, the standard practice in residential real estate transactions followed a cooperative compensation model. When a seller listed a property on a Multiple Listing Service (MLS), the listing broker would offer a specific commission split to any buyer's broker who brought a successful purchaser. Typically, a seller agreed to pay a total commission (often around 5-6% of the sale price), and the listing broker would then offer a portion of that commission (commonly 2.5-3%) to the buyer's broker through the MLS.

This system meant that buyers rarely discussed compensation directly with their agents. The buyer's agent's pay came from the seller's side of the transaction, routed through the MLS cooperative compensation offer. For most consumers, this process was invisible.

### The Lawsuit: Sitzer/Burnett v. National Association of Realtors

In October 2023, a federal jury in Kansas City, Missouri returned a verdict in *Sitzer/Burnett v. National Association of Realtors et al.* that fundamentally altered this longstanding model. The plaintiffs -- a group of Missouri home sellers -- alleged that NAR and several large brokerages had conspired to inflate commission rates in violation of the **Sherman Antitrust Act** (15 U.S.C. \u00a7 1).

The core allegation was that NAR's Participation Rule, which required listing brokers to make a blanket, non-negotiable offer of compensation to buyer brokers as a condition of listing on the MLS, constituted an illegal restraint of trade. The plaintiffs argued that this rule:

1. **Eliminated price competition** among buyer brokers, because sellers were forced to fund buyer broker compensation at rates dictated by market convention rather than negotiation.
2. **Inflated seller costs** by requiring sellers to pay buyer broker commissions they had no role in negotiating.
3. **Obscured the true cost of buyer representation** from buyers, who were not required to negotiate or even acknowledge their agent's compensation.

The jury agreed, finding NAR and two large brokerage defendants liable and awarding approximately **$1.78 billion in damages**. Under antitrust law, this figure was subject to treble (triple) damages, potentially exceeding $5.3 billion.

### The NAR Settlement Agreement

Facing the prospect of billions in liability and additional lawsuits (multiple copycat cases were filed nationwide), NAR reached a settlement agreement in March 2024. The key terms of the settlement, which took effect on **August 17, 2024**, included:

- **$418 million** in settlement payments by NAR over approximately four years
- **Elimination of the MLS cooperative compensation requirement**: Listing brokers could no longer be required to offer buyer broker compensation through the MLS as a condition of listing
- **Mandatory buyer representation agreements**: Buyers must sign a written agreement with their agent before the agent shows them any property, specifying the compensation the buyer agrees to pay
- NAR agreed to implement practice changes designed to increase transparency around broker compensation

### Parallel Federal Activity

The settlement did not occur in a vacuum. The **U.S. Department of Justice** had been investigating NAR's practices since at least 2019. The DOJ filed a civil antitrust suit in November 2020, reached a consent decree, then reopened the investigation in 2021 by withdrawing from that consent decree. This sustained federal scrutiny signaled that the government viewed the traditional commission structure as potentially anticompetitive, adding pressure to NAR's legal position.

### Why This Matters to New Licensees in Virginia

As a newly licensed agent in Virginia, you will practice real estate exclusively under the post-settlement rules. You never experienced the prior system firsthand, which is actually an advantage -- you will not carry habits from the old model. However, you must understand this history because:

- Many of your clients will have bought or sold homes under the old rules and may be confused by the new process
- Experienced agents and brokers in your office may reference "the way things used to be" and you need to understand the context
- The settlement terms have direct legal implications for how you conduct every transaction
- Violations of the new rules could expose you, your brokerage, and your clients to legal liability`,
    },
    {
      slug: 'new-mls-rules-buyer-representation',
      title: 'New MLS Rules & Buyer Representation Requirements',
      lessonType: 'reading',
      estimatedMinutes: 8,
      keyTerms: [
        'buyer representation agreement',
        'MLS cooperative compensation',
        'blanket offer of compensation',
        'written buyer agreement',
        'compensation negotiation',
        'seller concession',
        'touring agreement',
        'property-specific compensation',
      ],
      interactiveElements: [
        {
          type: 'mini_quiz',
          prompt:
            'Identify which scenarios require a buyer representation agreement and which do not',
        },
        {
          type: 'scenario',
          prompt:
            'A buyer calls you after seeing a yard sign and wants you to show them the house right now. Walk through the steps you must take before and during the showing under the new rules.',
        },
      ],
      content: `## New MLS Rules and Buyer Representation Requirements

### The End of Blanket Offers of Compensation

The single most impactful operational change from the NAR settlement is the elimination of blanket offers of buyer broker compensation on the MLS. Prior to August 17, 2024, when a listing agent entered a property into the MLS, a required field specified the commission offered to the buyer's broker (for example, "2.5%" or "$7,500"). This offer was visible to all MLS participants and automatically governed compensation if a cooperating broker brought the buyer.

Under the new rules:

- **MLS systems no longer display or transmit offers of buyer broker compensation.** The data field has been removed entirely from MLS platforms nationwide, including the Central Virginia Regional MLS (CVR MLS) and other Virginia MLS systems.
- **Listing agents may still offer compensation to buyer brokers**, but such offers must be communicated outside the MLS -- through direct broker-to-broker communication, listing descriptions on the brokerage's website, or other non-MLS channels.
- **Sellers are not prohibited from paying buyer broker compensation.** The settlement did not make seller-paid compensation illegal. It simply removed the MLS as the mandatory vehicle for such offers.
- **Compensation can be structured as seller concessions** at closing, where the buyer requests that the seller contribute toward the buyer's agent fees as part of the purchase agreement.

### Written Buyer Representation Agreements Are Now Mandatory

Before the settlement, buyer representation agreements existed but were unevenly used. Many agents showed properties to prospective buyers for weeks or months without any written agreement about representation or compensation. The new rules require:

**A written buyer representation agreement must be signed before an agent shows any property to a buyer.** This agreement must clearly specify:

1. The amount or rate of compensation the buyer's agent will receive
2. That the compensation is fully negotiable and not set by law
3. That the agent cannot receive compensation exceeding the amount specified in the agreement (absent a modification)
4. The term and scope of the agreement

This applies whether the buyer is viewing homes in person, via video tour conducted by the agent, or at an open house where the agent is representing the buyer (attending an open house independently as a consumer does not trigger the requirement).

### Types of Buyer Agreements in Practice

Virginia brokerages have adopted several approaches:

| Agreement Type | Scope | Duration | Common Use |
|---------------|-------|----------|------------|
| **Exclusive Buyer Representation** | All properties | Specified term (30-90 days typical) | Serious, committed buyers |
| **Non-Exclusive Buyer Representation** | All properties, but buyer can work with other agents | Specified term | Buyers early in search |
| **Property-Specific (Touring) Agreement** | Single property or single showing session | One showing or one day | Initial meetings, open houses |

The Virginia REALTORS\u00ae association has developed updated standard forms that comply with the settlement requirements. Your principal broker will determine which forms your brokerage uses, but regardless of the form, the substantive requirements above must be met.

### Virginia Real Estate Board Guidance

The Virginia Real Estate Board issued guidance confirming that the new buyer representation requirements align with Virginia's existing agency law under the **Virginia Real Estate Board Regulations (18 VAC 135-20-10 et seq.)**. Virginia already required that agency relationships be disclosed and confirmed in writing. The post-settlement rules strengthen this by requiring the written agreement earlier -- before showings begin, not merely before an offer is written.

VREB also clarified that:
- An agent who shows a property without a signed buyer agreement may face disciplinary action for failing to establish a proper agency relationship
- The buyer agreement must be consistent with the brokerage's business policies as established by the principal broker
- Dual agency and designated agency rules under Virginia law remain unchanged, but the compensation disclosure requirements add new dimensions to these already complex situations

### Practical Implications for Your Practice

As a new licensee, compensation conversations will be part of your very first buyer interaction. Here is the practical workflow:

1. **Initial contact**: When a prospective buyer reaches out, discuss your services and explain that a written agreement is required before you can show properties.
2. **Explain compensation clearly**: Tell the buyer how much your services will cost. This might be a flat fee, a percentage of the purchase price, or an hourly rate. Explain that this amount is negotiable.
3. **Sign the agreement**: Execute the written buyer representation agreement before any showing activity.
4. **Determine compensation sources**: When making an offer, check whether the seller or listing broker is offering to contribute to buyer agent compensation. If so, this can offset what the buyer pays. If not, the buyer is responsible for the full amount specified in the agreement.
5. **Include compensation terms in the offer**: If the buyer wants the seller to contribute, this must be written into the purchase contract, typically as a seller concession.

**Common mistake to avoid**: Never tell a buyer that your services are "free." Even if a seller ultimately pays the buyer broker's compensation through a concession, the buyer has agreed to pay you in the buyer representation agreement. Representing your compensation as free is misleading and violates VREB advertising regulations.`,
    },
    {
      slug: 'settlement-impact-virginia-practice',
      title: 'How the Settlement Changed Virginia Real Estate Practice',
      lessonType: 'scenario',
      estimatedMinutes: 7,
      keyTerms: [
        'commission transparency',
        'consumer choice',
        'unrepresented buyer',
        'compensation disclosure',
        'competitive marketplace',
        'fiduciary duty',
        'Virginia REALTORS forms',
        'practice change implementation',
      ],
      interactiveElements: [
        {
          type: 'scenario',
          prompt:
            'You are meeting with first-time homebuyers. They ask: "Why do we have to sign this agreement? Our friends bought a house two years ago and never signed anything." Role-play the conversation, explaining the changes accurately and building trust.',
        },
        {
          type: 'drag_drop',
          prompt:
            'Arrange the steps of a post-settlement buyer transaction in the correct order, from first contact through closing',
        },
        {
          type: 'mini_quiz',
          prompt:
            'Test your knowledge of Virginia-specific implementation of the NAR settlement rules',
        },
      ],
      content: `## How the Settlement Changed Virginia Real Estate Practice

### The Shift in Agent-Client Dynamics

The NAR settlement did not merely change paperwork -- it fundamentally altered the professional relationship between agents and their clients, particularly on the buyer side. Understanding these shifts will define your success as a new licensee.

**Before the settlement**, a buyer's agent's value proposition was often implicit. Buyers perceived their agent's services as free because compensation came from the seller's side. This created several problems:
- Buyers had little incentive to evaluate whether their agent was providing value commensurate with the compensation received
- Agents did not need to articulate or defend their value proposition
- The cost of buyer representation was hidden in the transaction rather than transparent

**After the settlement**, buyer agents must explicitly demonstrate their value. Buyers who are now directly confronting the cost of representation are asking harder questions: What exactly will you do for me? Why should I pay 2.5% rather than 1.5%? Can I negotiate a flat fee instead?

This is ultimately positive for competent, well-trained agents. If you can clearly articulate your services -- market analysis, negotiation expertise, transaction management, inspection guidance, contract review -- buyers will pay for that value. The agents who struggle are those who relied on the old system to obscure their compensation.

### Scenarios: Navigating Common Post-Settlement Situations

**Scenario 1: The Unrepresented Buyer**

A buyer contacts the listing agent directly, saying they do not want representation and want to buy the home listed at $350,000. Under Virginia law, the listing agent must disclose their agency relationship with the seller. If the listing agent agrees to work with the unrepresented buyer, that buyer is a **customer**, not a client. The agent owes the buyer honesty and fair dealing but does not owe fiduciary duties.

However, the listing agent must be careful: if they begin advising the buyer on price, terms, or strategy, they may inadvertently create an implied agency relationship, exposing themselves and their brokerage to liability. The safest practice is to clearly document the buyer's unrepresented status and limit interactions to factual information about the property.

**Scenario 2: Competing Offers with Different Compensation Structures**

A seller receives two offers on their $400,000 home:
- **Offer A**: $400,000 purchase price. Buyer requests the seller pay $10,000 toward buyer's agent compensation as a seller concession.
- **Offer B**: $395,000 purchase price. No request for seller-paid compensation.

The seller's net from Offer A is approximately $390,000. The seller's net from Offer B is $395,000 (minus only the listing broker's compensation). As the listing agent, you must present both offers and help the seller understand the net proceeds from each. You cannot steer the seller toward or away from either offer based on whether the buyer is represented.

**Scenario 3: The Compensation Conversation**

A prospective buyer asks you: "How much do you charge?" This conversation requires preparation. Best practices include:

- State your standard compensation clearly: "My fee is [X]% of the purchase price" or "My fee is a flat $[X]."
- Explain that the fee is negotiable: "This rate is not set by law or by any association. We can discuss what works for your situation."
- Describe what your fee covers: Outline specific services such as market analysis, showing coordination, offer strategy, negotiation, inspection management, and closing coordination.
- Explain potential offsets: "In some transactions, the seller may agree to contribute toward your agent's fee. We would include that request in your offer."
- Document the agreed-upon compensation in the buyer representation agreement before proceeding.

### Impact on New Licensees

The post-settlement landscape actually favors new agents who receive proper training. Here is why:

1. **Level playing field**: Experienced agents who relied on the old system's inertia must now compete on service quality, just like you.
2. **Transparency builds trust**: Buyers appreciate agents who explain their fees upfront. Younger buyers especially expect this kind of transparency.
3. **Professionalism matters more**: The agents who will thrive are those who treat real estate as a skilled profession, not a transaction-processing operation.

The Virginia Real Estate Board has signaled that it views these changes as consistent with its longstanding emphasis on consumer protection. VREB expects all licensees to comply fully with the new requirements and has indicated that failure to obtain proper written buyer agreements will be treated as a regulatory violation subject to the full range of disciplinary actions, including fines, license suspension, or revocation.`,
    },
  ],
}

const chapter2: CourseChapter = {
  slug: 'technology-in-real-estate',
  title: 'Technology in Real Estate',
  lessons: [
    {
      slug: 'ai-tools-automated-valuations',
      title: 'AI Tools & Automated Valuations in Real Estate',
      lessonType: 'reading',
      estimatedMinutes: 13,
      keyTerms: [
        'Automated Valuation Model',
        'AVM',
        'artificial intelligence',
        'machine learning',
        'Zestimate',
        'CMA',
        'comparative market analysis',
        'algorithm',
        'predictive analytics',
        'chatbot',
        'CRM automation',
        'generative AI',
      ],
      interactiveElements: [
        {
          type: 'flashcard',
          prompt:
            'Match each AI/technology tool to its primary use case in real estate practice',
        },
        {
          type: 'mini_quiz',
          prompt:
            'Test your understanding of when AVMs are appropriate and their limitations',
        },
      ],
      content: `## AI Tools and Automated Valuations in Real Estate

### Automated Valuation Models (AVMs)

An **Automated Valuation Model (AVM)** is a technology-driven tool that uses mathematical modeling, comparable sales data, and public records to estimate a property's market value. AVMs are used by lenders for underwriting and portfolio risk assessment, by consumers on platforms like Zillow (the "Zestimate") and Redfin, and increasingly by agents as a starting point for pricing discussions.

**How AVMs Work**

AVMs analyze multiple data inputs:
- Recent comparable sales within a defined radius
- Property characteristics from tax records (square footage, lot size, bedroom/bathroom count, year built)
- Market trend data (appreciation rates, days on market, inventory levels)
- Some advanced AVMs incorporate neighborhood-level data such as school ratings, crime statistics, and proximity to amenities

The AVM applies regression analysis or machine learning algorithms to weight these factors and produce an estimated value, typically accompanied by a **confidence score** indicating the model's reliability for that particular property.

**Limitations of AVMs**

AVMs have significant blind spots that every licensee must understand:

| Strength | Limitation |
|----------|-----------|
| Fast, available 24/7 | Cannot account for property condition (renovations, deferred maintenance, damage) |
| Consistent methodology | Performs poorly in areas with few comparable sales (rural areas, unique properties) |
| Low cost | Does not factor in non-quantifiable features (views, natural light, layout quality) |
| Useful screening tool | Accuracy drops significantly for non-standard properties (mixed-use, historic, large acreage) |
| Provides a data-driven starting point | May reflect data lag of 30-90 days in fast-moving markets |

**An AVM is never a substitute for a licensed appraiser's opinion of value or a carefully prepared CMA.** As a licensee, when you prepare a Comparative Market Analysis for a listing presentation, you are providing a professional service that accounts for factors no algorithm can assess -- the smell of a house, the condition of the roof, the neighbor's unkempt yard, the quality of recent renovations. The CMA remains the gold standard for pricing guidance.

### AI-Powered Marketing and Content Generation

Generative AI tools (such as ChatGPT, Claude, and specialized real estate platforms) have rapidly entered the real estate marketing workflow. Common applications include:

- **Listing descriptions**: AI can generate property descriptions from data inputs. However, you are responsible for the accuracy of every word in your listings. If an AI tool generates a description claiming "granite countertops" but the property has laminate, you face potential misrepresentation liability.
- **Social media content**: AI tools can draft posts, suggest hashtags, and create content calendars. All content must still comply with DPOR advertising regulations (discussed in Chapter 3).
- **Email campaigns**: CRM platforms increasingly include AI features that draft follow-up emails, segment contact lists based on behavior, and recommend optimal send times.
- **Image enhancement**: AI-powered photo editing can brighten images, replace skies, and digitally stage empty rooms. Virginia agents must ensure that enhanced photos do not misrepresent the property's actual condition. Virtual staging should always be disclosed.

### Chatbots and CRM Automation

Modern CRM (Customer Relationship Management) platforms incorporate AI-driven chatbots that respond to website inquiries, qualify leads based on pre-set criteria, and schedule appointments. As a new licensee, you should understand:

- **Chatbot communications are advertising.** If your chatbot identifies itself as representing your brokerage, all DPOR advertising rules apply to its responses.
- **You are responsible for what your chatbot says.** If the bot provides inaccurate information about a listing, you bear the same liability as if you had made the statement personally.
- **Privacy considerations**: CRM systems collect substantial personal data. You must comply with your brokerage's data handling policies and any applicable privacy requirements.

### Fair Housing Implications of AI

This is among the most critical issues in real estate technology today. AI algorithms can perpetuate or amplify discriminatory patterns in ways that may not be immediately obvious:

**Advertising algorithms**: Social media platforms like Meta (Facebook/Instagram) and Google use AI to determine who sees your ads. In 2019, the U.S. Department of Housing and Urban Development charged Facebook with violating the Fair Housing Act by allowing advertisers to target housing ads based on race, color, religion, sex, national origin, familial status, and disability -- or to exclude those groups. Meta settled and agreed to create a **Special Ad Category** for housing that limits targeting options. As a Virginia licensee, you must use the Special Ad Category for any housing-related ads on these platforms.

**Lending algorithms**: AI-powered mortgage underwriting tools have been shown in multiple studies to produce disparate outcomes for minority applicants. While you are not directly responsible for a lender's algorithm, you should be aware of these issues when recommending lenders to clients.

**Property recommendation algorithms**: If you use a platform that recommends properties to buyers based on their search behavior, those algorithms may inadvertently steer buyers toward or away from certain neighborhoods in ways that correlate with race or ethnicity. This is a form of digital steering that can violate the Fair Housing Act.

**Your obligation**: Even when using AI tools, your fair housing obligations under the **Federal Fair Housing Act**, the **Virginia Fair Housing Law (Va. Code \u00a7 36-96.1 et seq.)**, and VREB regulations remain fully in effect. Technology does not create a defense to fair housing violations.`,
    },
    {
      slug: 'virtual-tours-drones-digital-tools',
      title: 'Virtual Tours, Drones & Digital Transaction Tools',
      lessonType: 'reading',
      estimatedMinutes: 12,
      keyTerms: [
        'virtual tour',
        '3D walkthrough',
        'Matterport',
        'drone photography',
        'FAA Part 107',
        'Remote Pilot Certificate',
        'UAS',
        'electronic signature',
        'UETA',
        'E-SIGN Act',
        'Remote Online Notarization',
        'RON',
        'digital closing',
      ],
      interactiveElements: [
        {
          type: 'mini_quiz',
          prompt:
            'Test your knowledge of FAA drone regulations and electronic signature requirements in Virginia',
        },
        {
          type: 'scenario',
          prompt:
            'A seller asks you to have drone photos taken of their property, which is located two miles from Richmond International Airport. What steps must you take to comply with FAA regulations?',
        },
      ],
      content: `## Virtual Tours, Drones, and Digital Transaction Tools

### Virtual Tours and 3D Walkthroughs

Virtual tour technology has evolved from simple photo slideshows to immersive 3D experiences. Platforms like **Matterport**, **iGUIDE**, and **Zillow 3D Home** allow prospective buyers to navigate a property remotely as if they were walking through it. For Virginia agents, these tools offer significant advantages:

- **Expanded buyer reach**: Buyers relocating to Virginia from out of state (a substantial market, particularly in Northern Virginia and the Richmond metro area) can preview properties before traveling for in-person visits.
- **Reduced unnecessary showings**: Sellers benefit from fewer disruptive showings when buyers can pre-screen properties virtually.
- **ADA accessibility**: Virtual tours can help buyers with mobility limitations evaluate properties before committing to an in-person visit.

**Compliance considerations for virtual tours:**

- Virtual tours are considered **advertising** under DPOR regulations. Your firm name must be displayed or disclosed.
- Tours must accurately represent the property. Digitally removing flaws, adding features that do not exist, or misrepresenting room sizes can constitute misrepresentation under Virginia law.
- If you use virtual staging (digitally adding furniture or decor to empty rooms), this must be clearly disclosed. A good practice is to watermark virtually staged images with "VIRTUALLY STAGED" text.
- Accessibility: Ensure your virtual tour platform is accessible to individuals using screen readers or other assistive technology.

### Drone Photography: FAA Regulations and Compliance

Aerial photography has become standard in real estate marketing, particularly for larger properties, waterfront homes, and luxury listings. The use of drones (technically, **Unmanned Aircraft Systems or UAS**) in real estate is regulated by the **Federal Aviation Administration (FAA)**.

**Key FAA requirements for commercial drone use in real estate:**

| Requirement | Details |
|------------|---------|
| **Remote Pilot Certificate** | The drone operator must hold an FAA Part 107 Remote Pilot Certificate. This requires passing an FAA knowledge test and is renewed every 24 months. |
| **Registration** | All drones weighing between 0.55 lbs and 55 lbs must be registered with the FAA. |
| **Operating altitude** | Maximum altitude of 400 feet above ground level (AGL). |
| **Visual line of sight** | The operator must maintain visual line of sight with the drone at all times. |
| **Airspace restrictions** | Operations in controlled airspace (near airports) require prior FAA authorization through the LAANC (Low Altitude Authorization and Notification Capability) system. |
| **Time restrictions** | Commercial drone flights are permitted only during daylight hours or civil twilight with appropriate anti-collision lighting. |
| **No flights over people** | Standard Part 107 prohibits flights over non-participating persons, though waivers are available for certain drone categories. |

**If you hire a drone photographer**, verify that they hold a current Part 107 certificate. If they do not, and an incident occurs, both you and the unlicensed operator face FAA enforcement action, and your errors and omissions insurance may not cover resulting claims. As a real estate licensee, you can be held responsible for advertising content you commission.

**Privacy considerations**: Virginia does not have a comprehensive drone privacy statute, but the use of drones that capture images of neighboring properties or individuals can raise privacy claims under common law trespass or invasion of privacy theories. Best practice: limit drone coverage to the subject property and avoid capturing identifiable images of neighbors, their homes, or their activities.

### Electronic Signatures: UETA and E-SIGN Act

Electronic signatures are legally valid for real estate transactions in Virginia under two complementary laws:

1. **The Uniform Electronic Transactions Act (UETA)** -- adopted by Virginia as the **Virginia Uniform Electronic Transactions Act (Va. Code \u00a7 59.1-479 et seq.)**. UETA provides that electronic records and signatures have the same legal effect as paper records and handwritten signatures, provided that all parties consent to conduct the transaction electronically.

2. **The federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. \u00a7 7001 et seq.)** -- provides a federal baseline ensuring that electronic signatures are valid in interstate commerce.

**Key principles for Virginia real estate agents:**

- **Consent required**: All parties must agree to use electronic signatures. You cannot force a client to sign electronically -- they always have the right to request paper documents.
- **Attribution**: The electronic signature system must reliably identify the signer and indicate their intent to sign. Platforms like DocuSign, dotloop, and SkySlope comply with these requirements through authentication methods (email verification, SMS codes, knowledge-based questions).
- **Record retention**: Electronic records must be stored in a format that is accessible and reproducible. Your brokerage should have policies specifying how electronic transaction files are archived.
- **Certain documents are excluded**: Under both UETA and E-SIGN, some documents cannot be executed electronically, including wills, codicils, and testamentary trusts. However, deeds, purchase contracts, listing agreements, buyer representation agreements, and disclosure forms can all be signed electronically.

### Remote Online Notarization (RON)

Virginia was a national pioneer in authorizing **Remote Online Notarization**. The Virginia Electronic Notarization Assurance Standard (VENAS) and subsequent legislation (Va. Code \u00a7 47.1-2 et seq.) allow notarial acts to be performed remotely via audio-visual technology.

**How RON works in a real estate closing:**

1. The signer appears before a commissioned Virginia notary via a secure, recorded audio-video connection.
2. The notary verifies the signer's identity through multi-factor authentication: knowledge-based authentication questions (based on credit and public record data), presentation of a government-issued photo ID, and credential analysis technology.
3. The document is signed and notarized electronically while both parties are connected on the video call.
4. The entire session is recorded and retained by the notary or their technology provider for a minimum period specified by law.

**When RON is commonly used in Virginia real estate:**

- Closings where one or more parties cannot be physically present (military deployment, out-of-state buyers, medical limitations)
- Refinance transactions
- Power of attorney executions
- Deed transfers

**Practical note**: Not all title companies and lenders accept RON for every transaction. As an agent, you should coordinate with the closing attorney and lender early in the process to confirm that RON is acceptable if your client needs or prefers it. Virginia law permits RON, but individual lender and title company policies may impose additional requirements or restrictions.`,
    },
  ],
}

const chapter3: CourseChapter = {
  slug: 'social-media-internet-advertising',
  title: 'Social Media and Internet Advertising',
  lessons: [
    {
      slug: 'dpor-advertising-rules-social-media',
      title: 'DPOR Advertising Rules Applied to Social Media',
      lessonType: 'reading',
      estimatedMinutes: 12,
      keyTerms: [
        'DPOR advertising regulations',
        'firm name requirement',
        'team advertising',
        'brokerage identification',
        'social media compliance',
        'misleading advertising',
        '18 VAC 135-20-180',
        'blind advertising',
        'supervised licensee',
      ],
      interactiveElements: [
        {
          type: 'mini_quiz',
          prompt:
            'Review sample social media posts and identify which ones comply with DPOR advertising regulations and which violate them',
        },
        {
          type: 'scenario',
          prompt:
            'You want to create a TikTok account to market your real estate services. Walk through all the DPOR compliance requirements you must meet before posting your first video.',
        },
      ],
      content: `## DPOR Advertising Regulations Applied to Social Media

### The Fundamental Rule: Firm Name on Everything

The single most important advertising rule for Virginia real estate licensees is found in **18 VAC 135-20-180**: all advertising by a licensee must include the **name of the firm** with which the licensee is affiliated. This requirement applies to every form of advertising, including social media.

"Advertising" under DPOR regulations is broadly defined. It includes any communication designed to attract public attention to your real estate services, whether that communication occurs on a billboard, in a newspaper, on your website, or in a social media post. There is no "social media exception" to Virginia advertising law.

**What this means in practice:**

- Your **Instagram bio** must include your firm name (e.g., "Jane Smith | Acme Realty" not simply "Jane Smith, REALTOR\u00ae")
- Your **Facebook business page** must display the firm name
- **TikTok videos** about real estate listings or services must include your firm name, either in the video itself, in the caption, or in your profile that the video links to
- Your **YouTube channel** description must reference the firm
- **LinkedIn profiles** used for real estate marketing must include the firm name
- Even your **X (Twitter) bio** must include the firm name if you use the account for real estate-related content

**What constitutes "blind advertising"?**

Blind advertising occurs when a licensee promotes real estate services without identifying their brokerage. This is a violation of Virginia regulations. Examples include:

- A social media post advertising "Dream homes in Richmond! DM me!" without any firm identification
- A website domain like "JaneSmithHomes.com" that does not prominently display the firm name on the site
- Business cards (physical or digital) that omit the firm name
- Yard signs or open house directional signs without firm identification

DPOR enforcement actions for blind advertising are common. Penalties range from a letter of censure and required education to monetary fines of up to $1,000 or more per violation.

### Team vs. Individual Identification Requirements

The growth of real estate teams has created advertising compliance challenges. Virginia regulations require:

1. **A team name cannot mislead the public into believing the team is a separate brokerage.** If your team is called "The Richmond Home Group," your advertising must make clear that this team operates under [Firm Name]. The team name cannot appear more prominently than or to the exclusion of the firm name.

2. **Individual agents on a team must still be identified by their individual license name** in contexts where they are providing personal services (such as signing a listing agreement or buyer representation agreement). The team name does not replace individual licensee identification in transaction documents.

3. **Supervised licensees (salespersons) cannot advertise as independent entities.** Your advertising must always connect you to your broker and firm. Even if you have a personal brand, the firm name must appear in all advertising.

VREB has issued specific guidance stating that team names in advertising must be accompanied by the firm name in a manner that a "reasonable consumer" would understand the relationship. A tiny, barely legible firm name at the bottom of an otherwise team-branded advertisement will not satisfy the requirement.

### Social Media-Specific Compliance Issues

**Profile consistency**: If you use multiple social media platforms, each one must comply independently. Having the firm name in your Instagram bio does not satisfy the requirement for your separate TikTok account.

**Stories and ephemeral content**: Instagram Stories, TikTok videos, and Snapchat content that advertises real estate services must still comply with DPOR rules, even though the content disappears after 24 hours. DPOR's position is that advertising rules apply to the content at the time it is published, regardless of how long it remains available.

**Resharing and user-generated content**: If you share a client's post about their new home, and that shared post functions as advertising for your services, it must include firm identification. A simple "Just helped the Johnsons close!" shared on your real estate account is advertising.

**Comments and engagement**: Responding to comments on listing posts or market updates is generally not considered standalone advertising, but if your response includes a solicitation ("DM me for a free market analysis!"), it takes on an advertising character and should include firm identification.`,
    },
    {
      slug: 'fair-housing-digital-ads-online-reviews',
      title: 'Fair Housing in Digital Ads, IDX & Online Reviews',
      lessonType: 'reading',
      estimatedMinutes: 13,
      keyTerms: [
        'Fair Housing Act',
        'HUD advertising guidelines',
        'Special Ad Category',
        'protected classes',
        'discriminatory advertising',
        'IDX',
        'Internet Data Exchange',
        'listing syndication',
        'VOW',
        'online reviews',
        'testimonials',
        'Virginia Human Rights Act',
      ],
      interactiveElements: [
        {
          type: 'scenario',
          prompt:
            'You receive a one-star Google review from someone who was never your client, making false claims about your services. Walk through the ethical and legal considerations for responding.',
        },
        {
          type: 'mini_quiz',
          prompt:
            'Identify which digital advertising practices violate fair housing law and which are permissible',
        },
        {
          type: 'flashcard',
          prompt:
            'Match Virginia and federal fair housing protected classes to their advertising implications',
        },
      ],
      content: `## Fair Housing Compliance in Digital Advertising

### HUD Guidelines for Digital Advertising

The Fair Housing Act (42 U.S.C. \u00a7 3604(c)) prohibits advertising that indicates any preference, limitation, or discrimination based on race, color, religion, sex, national origin, familial status, or disability. Virginia adds additional protected classes under the **Virginia Fair Housing Law (Va. Code \u00a7 36-96.1 et seq.)**, including **elderliness** and **source of funds** (such as Housing Choice Vouchers, commonly known as Section 8).

In the digital era, fair housing advertising compliance requires attention to both **content** and **targeting**:

**Content compliance** -- The same rules that apply to print advertising apply to digital ads:
- Do not describe the people who live in a neighborhood or who would be ideal buyers (e.g., "perfect for young professionals" can be interpreted as familial status or age discrimination)
- Do not reference churches, synagogues, or other religious institutions as selling points
- Do not use words like "walking distance" in ways that could exclude people with disabilities (use "close to" or "near" instead)
- Do not describe a neighborhood as "family-friendly" or reference school districts in a way that implies families without children are unwelcome
- HUD has published guidance listing words and phrases that trigger fair housing concerns in advertising. You should review this list and apply it to all your digital content.

**Targeting compliance** -- This is unique to digital advertising:

In 2022, Meta (Facebook/Instagram) settled with HUD and the Department of Justice, agreeing to remove the ability to target housing ads based on age, gender, ZIP code, or interests that correlate with protected classes. As a result, all housing-related ads on Meta platforms must be placed in the **Special Ad Category for Housing**, which restricts targeting options. Google similarly requires housing ads to use restricted targeting.

**If you run digital ads for listings or services, you must:**
1. Select the "Housing" Special Ad Category when creating ads on Meta platforms
2. Use Google's housing ad restrictions when advertising on Google Ads
3. Avoid custom audiences based on demographics, behaviors, or interests that correlate with protected classes
4. Avoid using "lookalike audiences" derived from existing client lists that may reflect demographic biases

Failure to comply exposes you to both **fair housing liability** (federal fines starting at $21,039 for a first violation, plus state penalties) and **DPOR disciplinary action**.

### Managing Online Reviews Ethically

Online reviews on Google, Zillow, Yelp, and Realtor.com significantly influence consumer decisions. Virginia agents must manage reviews within ethical and legal boundaries:

**What you can do:**
- Ask satisfied clients to leave honest reviews (but do not incentivize reviews with gifts, discounts, or other compensation -- this violates FTC guidelines and can violate DPOR ethics rules)
- Respond professionally to positive reviews, thanking the reviewer
- Respond to negative reviews calmly and factually, without disclosing confidential client information

**What you must not do:**
- Write or commission fake reviews (this violates DPOR regulations, FTC guidelines, and potentially Virginia consumer protection law under the Virginia Consumer Protection Act, Va. Code \u00a7 59.1-196 et seq.)
- Offer compensation for positive reviews
- Disclose confidential transaction details in responding to a negative review, even if the reviewer is being unfair. Your duty of confidentiality survives the transaction.
- Retaliate against a client who leaves a negative review (this could constitute a violation of your ethical obligations and potentially expose you to a defamation claim)

**Responding to false reviews**: If someone who was never your client posts a false review, you can respond factually: "I don't have a record of working with you. I'd like to resolve any concern -- please contact me directly." You can also report the review to the platform for removal if it violates the platform's terms of service. Consult your broker and, if necessary, legal counsel before taking further action.

### IDX and Listing Syndication Compliance

**Internet Data Exchange (IDX)** allows brokers and agents to display MLS listings on their websites, subject to MLS rules. In Virginia, IDX compliance requires:

- **Listing attribution**: Every IDX listing displayed on your site must identify the listing brokerage. You cannot display a competitor's listing without proper attribution.
- **Data accuracy**: IDX feeds must be updated at intervals specified by your MLS (typically every 4-24 hours). Displaying stale data (sold properties shown as active, incorrect prices) can constitute misrepresentation.
- **Copyright compliance**: MLS data is copyrighted. You may only use it within the parameters authorized by your MLS participation agreement.
- **Opt-out rights**: Listing brokers and sellers may opt out of IDX display. You must honor these opt-outs and promptly remove listings when notified.

**Listing syndication** refers to the distribution of your listings to third-party sites (Zillow, Realtor.com, Redfin, Homes.com, etc.). Key compliance points:

- Syndication is typically managed at the brokerage level through the MLS
- You should verify that your listings appear accurately on syndication sites. Errors in syndicated data are your responsibility to correct.
- Some syndicators place lead capture forms on your listings that route inquiries to other agents. Understand your MLS's syndication policies and your brokerage's position on which platforms receive your listings.
- The post-NAR settlement rules do not change IDX or syndication requirements, but compensation information is no longer included in MLS data feeds, which affects how some syndication platforms display listing information.`,
    },
  ],
}

const chapter4: CourseChapter = {
  slug: 'cybersecurity-wire-fraud-market-trends',
  title: 'Cybersecurity, Wire Fraud & Market Trends',
  lessons: [
    {
      slug: 'wire-fraud-cybersecurity-data-protection',
      title: 'Wire Fraud, Cybersecurity & Data Protection',
      lessonType: 'reading',
      estimatedMinutes: 12,
      keyTerms: [
        'business email compromise',
        'BEC',
        'wire fraud',
        'phishing',
        'callback verification',
        'social engineering',
        'data breach notification',
        'personally identifiable information',
        'encryption',
        'multi-factor authentication',
        'Va. Code 18.2-186.6',
        'FBI IC3',
      ],
      interactiveElements: [
        {
          type: 'scenario',
          prompt:
            'Your buyer receives an email that appears to be from the title company with updated wire instructions one day before closing. The email address is slightly different from previous correspondence. Walk through the correct response procedure.',
        },
        {
          type: 'mini_quiz',
          prompt:
            'Test your knowledge of wire fraud red flags and prevention protocols',
        },
        {
          type: 'flashcard',
          prompt:
            'Match each cybersecurity threat to its prevention strategy in real estate transactions',
        },
      ],
      content: `## Wire Fraud, Cybersecurity, and Data Protection

### Business Email Compromise: The Biggest Threat to Real Estate Closings

**Business Email Compromise (BEC)** is the single largest financial fraud risk in real estate transactions today. According to the FBI's Internet Crime Complaint Center (IC3), BEC attacks caused over **$2.9 billion in reported losses in 2023**, with real estate transactions being a primary target. The American Land Title Association (ALTA) reports that nearly one in three real estate transactions is targeted by wire fraud attempts.

**How BEC attacks work in real estate:**

1. **Reconnaissance**: The attacker monitors publicly available information -- social media posts ("So excited to close on our new home Friday!"), MLS listings showing properties under contract, and even email signatures that reveal transaction details and the parties involved.

2. **Email compromise**: The attacker gains access to the email account of someone in the transaction chain -- often the agent, the closing attorney, or the lender. This can happen through phishing emails, credential theft, or exploiting weak passwords.

3. **Monitoring**: Once inside the email account, the attacker reads correspondence to learn the transaction timeline, the parties involved, and the expected wire transfer amount. They may monitor for days or weeks without revealing their presence.

4. **The fraudulent instruction**: Shortly before closing, the attacker sends an email that appears to come from the title company, closing attorney, or lender, providing "updated" wire transfer instructions. The email directs the buyer to wire their closing funds to a bank account controlled by the attacker.

5. **The theft**: The buyer, believing the email is legitimate, wires funds -- often hundreds of thousands of dollars -- to the fraudulent account. The money is typically moved through multiple accounts and often converted to cryptocurrency within hours. Recovery rates for wire fraud are extremely low, with the FBI reporting that less than 30% of stolen funds are recovered.

**A Virginia-specific example**: In 2022, a Northern Virginia homebuyer wired $387,000 to a fraudulent account after receiving spoofed wire instructions that appeared to originate from the closing attorney's email address. The attacker had compromised the attorney's email two weeks prior and was monitoring all correspondence about the closing. The buyer's funds were never recovered.

### Wire Fraud Prevention: Your Professional Obligation

As a Virginia licensee, you have a professional and ethical obligation to protect your clients from wire fraud. Recommended practices include:

**Callback verification protocol**: This is the single most effective prevention measure.
- Before wiring any funds, the buyer (or you, on their behalf) must call the title company or closing attorney at a **previously verified phone number** to confirm wire instructions.
- Never call a phone number provided in the same email that contains wire instructions -- that number may also be controlled by the attacker.
- Use a phone number from the firm's official website, a business card obtained in person, or a number you have used in prior verified communications.

**Email security practices:**
- Use encrypted email for all communications containing financial information, personal data, or sensitive transaction details
- Enable **multi-factor authentication (MFA)** on all email accounts and transaction management platforms
- Never send wire instructions, Social Security numbers, bank account numbers, or other sensitive data via unencrypted email
- Use secure document sharing platforms rather than email attachments for sensitive documents

**Client warning protocol:**
- At the beginning of every transaction, provide your client with a written warning about wire fraud. Many Virginia brokerages include this in their standard transaction package.
- Inform clients that you and the title company will **never** change wire instructions via email. If they receive an email with changed instructions, they should call you immediately.
- Include wire fraud warnings in your email signature.

**If your client is targeted:**
1. Stop the wire transfer immediately. Contact the receiving bank and request a hold.
2. File a complaint with the FBI's IC3 at ic3.gov within 72 hours. The FBI's Recovery Asset Team can sometimes freeze funds if notified quickly.
3. Contact local law enforcement.
4. Notify your broker and your errors and omissions insurance carrier.
5. Preserve all evidence, including the fraudulent email, headers, and any related communications.

### Virginia Data Breach Notification Requirements

Virginia's **Personal Information Privacy Act (Va. Code \u00a7 18.2-186.6)** and the **Virginia Consumer Data Protection Act (VCDPA, Va. Code \u00a7 59.1-575 et seq.)** impose requirements on businesses -- including real estate brokerages -- that maintain personal information.

**Key requirements:**

- If a data breach occurs that exposes **personally identifiable information (PII)** -- including names combined with Social Security numbers, driver's license numbers, or financial account numbers -- the brokerage must notify affected individuals "without unreasonable delay."
- In practice, Virginia courts and the Attorney General's office have interpreted "without unreasonable delay" as requiring notification within **60 days** of discovering the breach.
- If the breach affects more than 1,000 Virginia residents, the brokerage must also notify the **Virginia Attorney General's office** and the three major credit reporting agencies.
- The notification must describe the nature of the breach, the types of information compromised, and the steps the individual can take to protect themselves.

**For real estate agents, the practical takeaway is this**: You handle sensitive client data every day -- tax returns, bank statements, Social Security numbers, employer information. If this data is compromised through a hacked email, a stolen laptop, or a lost phone, your brokerage faces legal notification obligations and potential liability. Protect client data as if your license depends on it -- because it does.`,
    },
    {
      slug: 'ibuyers-proptech-market-trends',
      title: 'iBuyers, PropTech & Emerging Market Trends',
      lessonType: 'reading',
      estimatedMinutes: 13,
      keyTerms: [
        'iBuyer',
        'instant offer',
        'Opendoor',
        'Offerpad',
        'PropTech',
        'property technology',
        'short sale',
        'green building',
        'energy efficiency',
        'LEED',
        'EarthCraft',
        'Virginia Energy Conservation Code',
        'Virginia General Assembly',
        'legislative update',
        'sustainability',
      ],
      interactiveElements: [
        {
          type: 'mini_quiz',
          prompt:
            'Test your understanding of iBuyer business models, their advantages and disadvantages for consumers, and how they affect traditional agents',
        },
        {
          type: 'flashcard',
          prompt:
            'Match each PropTech innovation to its impact on Virginia real estate practice',
        },
        {
          type: 'scenario',
          prompt:
            'A listing client tells you they received an iBuyer offer for $15,000 less than your suggested list price but wants to accept it for the convenience. How do you counsel them while fulfilling your fiduciary duties?',
        },
      ],
      content: `## iBuyers, PropTech, and Emerging Market Trends

### iBuyers and Instant Offer Platforms

**iBuyers** (short for "instant buyers") are companies that use technology-driven models to make near-instant cash offers on residential properties. Major iBuyer platforms that have operated in Virginia markets include **Opendoor**, **Offerpad**, and at various times **Zillow Offers** (which shut down its iBuying operation in 2021 after sustaining significant losses).

**How the iBuyer model works:**

1. A homeowner submits property information through the iBuyer's website or app.
2. The iBuyer's AVM generates an estimated value, adjusted by proprietary algorithms for property condition and local market factors.
3. The iBuyer presents a cash offer, typically within 24-48 hours. This offer is usually below full market value -- studies by researchers at the National Bureau of Economic Research found iBuyer offers average **3-5% below** what the property would likely sell for on the open market.
4. If the seller accepts, the iBuyer conducts a brief inspection and may adjust the offer based on condition findings.
5. The seller chooses a closing date (often flexible, from 14 to 60 days).
6. After closing, the iBuyer makes repairs, relists the property, and sells it for a profit.

**Advantages for sellers:**
- Speed and certainty of sale (no showings, no contingencies, no waiting for a buyer to secure financing)
- Flexibility on closing date
- Reduced stress and disruption compared to a traditional listing

**Disadvantages for sellers:**
- Below-market offers (the convenience comes at a cost of 3-5% or more)
- Service fees that can be comparable to or higher than traditional commissions (typically 5-7%)
- Limited negotiation leverage once the offer is presented
- Inspection adjustments may further reduce the final price

**Your role as a licensed agent:**
When a client mentions receiving an iBuyer offer, your fiduciary duty requires you to help them evaluate the offer against the likely outcome of a traditional sale. Prepare a CMA showing the property's estimated market value, calculate the net proceeds under both scenarios (iBuyer vs. traditional listing), and present the information objectively. You must not disparage iBuyer services to protect your commission -- your obligation is to your client's best interests.

### PropTech Innovations

**Property Technology (PropTech)** encompasses a broad range of technology applications transforming real estate. As a new licensee, you should be aware of these trends:

**Transaction management platforms**: Tools like dotloop, SkySlope, Brokermint, and Follow Up Boss streamline contract management, compliance tracking, and client communication. Most Virginia brokerages now require agents to use a designated transaction management platform for all deals.

**AI-powered property search**: Platforms increasingly use natural language processing to allow buyers to search by description rather than filter criteria (e.g., "modern kitchen near the James River with a fenced yard" rather than selecting individual checkboxes). These tools are making property search more intuitive but also raise the fair housing concerns discussed in Chapter 2.

**Blockchain and tokenization**: While still emerging, blockchain technology has the potential to streamline title verification, reduce closing times, and enable fractional ownership of real estate. Virginia has not yet enacted specific legislation addressing blockchain-based real estate transactions, but this is an area to watch.

**Smart home technology**: Listings increasingly feature smart home devices (thermostats, security systems, lighting, locks). As an agent, you should understand that smart home devices may collect data about occupants and should advise sellers to disclose any embedded technology and reset or transfer device access at closing.

### Short Sales in the Current Market

Short sales -- transactions where the property sells for less than the outstanding mortgage balance, requiring lender approval -- were a dominant feature of the 2008-2012 housing crisis. While far less common today due to strong home price appreciation since 2012, they have not disappeared entirely.

**Current landscape in Virginia:**
- Rising interest rates and economic uncertainty have caused some homeowners, particularly those who purchased at peak prices in 2021-2022 with minimal down payments, to face negative equity situations.
- Short sales require the listing agent to negotiate with the seller's lender(s), a process that can take 60-120 days or longer.
- Virginia agents handling short sales should have specialized training, as the process involves complex lender negotiations, specific contract addenda, and IRS tax implications for the seller (the canceled debt may be taxable income, depending on current federal tax law provisions).
- The listing agent has fiduciary duties to the seller in a short sale, but must also navigate the lender's requirements, making these transactions uniquely complex.

### Sustainability and Green Building Trends

Sustainability has moved from a niche concern to a mainstream factor in Virginia real estate:

**Energy efficiency certifications:**
- **LEED (Leadership in Energy and Environmental Design)**: A globally recognized green building certification system. LEED-certified homes command premium prices in many Virginia markets.
- **EarthCraft**: A regional green building program popular in the Southeast, including Virginia. EarthCraft-certified homes meet specific standards for energy efficiency, water conservation, indoor air quality, and resource-efficient building practices.
- **ENERGY STAR\u00ae**: The EPA's ENERGY STAR certification for homes indicates that the home meets strict energy efficiency guidelines. Virginia has seen increasing adoption of ENERGY STAR standards in new construction.

**Virginia Energy Conservation Code**: Virginia adopts and periodically updates its energy code based on the International Energy Conservation Code (IECC). New construction in Virginia must comply with the current edition of the Virginia Uniform Statewide Building Code, which incorporates energy efficiency requirements. As an agent marketing new or recently built homes, you should understand the energy code standards your listings meet.

**Market impact**: Studies consistently show that energy-efficient homes sell for a premium. A 2023 analysis by the National Association of REALTORS found that homes with solar panels sold for an average of 4.1% more than comparable homes without them. In Virginia, where summer cooling costs are substantial, energy efficiency features are increasingly important to buyers.

### Recent Virginia General Assembly Legislation

The Virginia General Assembly regularly enacts legislation affecting real estate practice. As a licensee, you are responsible for staying current with legislative changes. Recent and pending legislation of significance includes:

**Housing affordability measures**: The General Assembly has enacted several provisions addressing housing affordability. **HB 2045 (2023)** requires certain localities to permit accessory dwelling units (ADUs) by right in single-family residential zones, expanding housing options without requiring special use permits. **SB 1468 (2024)** extended ADU provisions to additional localities and removed minimum lot size requirements that previously blocked smaller parcels. **HB 1538 (2024)** established the Virginia Housing Opportunity Tax Credit to incentivize affordable housing development by private developers. The General Assembly also appropriated additional funding to the Virginia Housing Trust Fund under **HB 30 (2024 Budget)**.

**Homeowners association (HOA) reforms**: **HB 1458 (2024)** amended the **Property Owners' Association Act (Va. Code \u00a7 55.1-1800 et seq.)** to cap late fees on delinquent assessments and require 30-day notice before assessment liens. **SB 1090 (2024)** strengthened financial transparency requirements for HOA boards, mandating annual audits for associations with 100+ units. **HB 2298 (2023)** amended the **Condominium Act (Va. Code \u00a7 55.1-1900 et seq.)** to enhance resale disclosure packet requirements, including reserve fund adequacy disclosures. **SB 1178 (2024)** established licensure requirements for community association managers through the Common Interest Community Board.

**Land use and zoning modernization**: **HB 2333 (2024)** streamlined the local rezoning process by establishing uniform timelines for land use applications across Virginia localities. **SB 1487 (2024)** permitted by-right development of middle housing (duplexes, triplexes, fourplexes) on parcels zoned for single-family residential in localities with populations over 50,000, addressing the state's housing supply shortage. **HB 1684 (2023)** required localities to update comprehensive plans to include a housing chapter with a housing needs assessment at least every 10 years.

**Consumer protection updates**: **HB 2175 (2024)** enhanced penalties for real estate wire fraud, elevating it to a Class 4 felony when the amount exceeds $1,000. **SB 1295 (2024)** strengthened the Virginia Consumer Data Protection Act (VCDPA) with new provisions specific to real estate transaction data. **HB 1803 (2024)** updated the Virginia Residential Property Disclosure Act to require disclosure of properties located in PFAS contamination areas.

**Your obligation**: DPOR requires continuing education that covers legislative updates. As a new licensee, make it a habit to review the Virginia REALTORS\u00ae Legislative Update each year after the General Assembly session concludes (typically in March). Your broker should also communicate significant legislative changes that affect your practice.`,
    },
  ],
}

// ── Module Assembly ─────────────────────────────────────────────────────────

export const pleModule4: CourseModule = {
  slug: 'ple-current-industry-issues-trends',
  title: 'Current Industry Issues and Trends',
  subtitle:
    'NAR settlement changes, technology, social media compliance, cybersecurity, and emerging market trends',
  examWeight: 'PLE Required - 2 hours',
  chapters: [chapter1, chapter2, chapter3, chapter4],
}

export const PLE_MODULE_4: CourseModule[] = [pleModule4]
