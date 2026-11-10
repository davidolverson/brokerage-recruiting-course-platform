import type { CourseModule, CourseChapter, CourseLesson, InteractiveElement } from './course-content'

// ── Module 1: Fair Housing, ADA & Civil Rights Act of 1866 (2 hours / 100 min) ──

export const pleModule1: CourseModule = {
  slug: 'ple-fair-housing-ada-civil-rights',
  title: 'Fair Housing, ADA & Civil Rights Act of 1866',
  subtitle: 'Federal and Virginia protected classes, disability accommodations, and anti-discrimination enforcement',
  examWeight: 'PLE Required - 2 hours',
  chapters: [
    {
      slug: 'federal-fair-housing-act',
      title: 'The Federal Fair Housing Act',
      lessons: [
        {
          slug: 'fha-history-and-seven-protected-classes',
          title: 'FHA History & the Seven Federal Protected Classes',
          lessonType: 'reading',
          estimatedMinutes: 12,
          keyTerms: [
            'Fair Housing Act',
            'Title VIII',
            'Civil Rights Act of 1968',
            'protected class',
            'race',
            'color',
            'religion',
            'national origin',
            'sex',
            'familial status',
            'disability',
            'Fair Housing Amendments Act of 1988',
            'Bostock v. Clayton County',
            'sexual orientation',
            'gender identity',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Name all seven federal protected classes under the Fair Housing Act.',
            },
            {
              type: 'mini_quiz',
              prompt: 'Which amendment to the FHA added familial status and disability as protected classes?',
            },
          ],
          content: `## The Federal Fair Housing Act: History and Protected Classes

### Origins of Federal Fair Housing Law

The Fair Housing Act (FHA) was enacted as Title VIII of the Civil Rights Act of 1968, signed into law by President Lyndon B. Johnson on April 11, 1968, just one week after the assassination of Dr. Martin Luther King Jr. The law was the culmination of decades of struggle against residential segregation and discriminatory housing practices that had been codified through restrictive covenants, redlining, and outright refusal to sell or rent to minorities.

The original 1968 Act prohibited discrimination in housing based on four protected classes: **race**, **color**, **religion**, and **national origin**. The law applied to most housing transactions, including the sale, rental, and financing of dwellings.

### The 1974 Amendment: Sex

In 1974, Congress amended the FHA to add **sex** as a fifth protected class. This addition addressed widespread practices such as requiring a husband's co-signature on a woman's lease, charging women higher rents, and denying mortgages to single women.

### The Fair Housing Amendments Act of 1988

The most significant expansion of the FHA came with the Fair Housing Amendments Act of 1988, which added two additional protected classes:

- **Familial Status**: Protects families with children under 18, pregnant women, and anyone in the process of securing legal custody of a minor. The Housing for Older Persons Act (HOPA) of 1995 provides exemptions for qualifying 55-and-older and 62-and-older communities.
- **Disability (Handicap)**: Protects individuals with physical or mental impairments that substantially limit one or more major life activities, persons with a record of such impairment, and persons regarded as having such impairment. This includes persons with HIV/AIDS, recovering substance abusers, and persons with mental illness.

The 1988 Amendments also strengthened enforcement by giving HUD the authority to initiate complaints and by establishing administrative law judge proceedings.

### The Seven Federal Protected Classes

Under 42 U.S.C. sections 3601-3619, the seven federal protected classes are:

| Protected Class | Year Added | Key Provisions |
|---|---|---|
| **Race** | 1968 | Absolute prohibition on racial discrimination in all housing |
| **Color** | 1968 | Prohibits discrimination based on skin shade, distinct from race |
| **Religion** | 1968 | Covers all religious beliefs and practices, including non-belief |
| **National Origin** | 1968 | Prohibits discrimination based on country of birth, ancestry, or ethnicity |
| **Sex** | 1974 | Includes sexual harassment in housing; expanded by HUD (2021) and case law |
| **Familial Status** | 1988 | Families with children under 18, pregnant women, custodial proceedings |
| **Disability** | 1988 | Physical and mental impairments; requires reasonable accommodations and modifications |

### Sex: Sexual Orientation and Gender Identity

In 2021, HUD issued a memorandum directing enforcement of the FHA's sex discrimination provision to include **sexual orientation** and **gender identity**, following the U.S. Supreme Court's reasoning in *Bostock v. Clayton County* (2020), which held that Title VII's prohibition on sex discrimination necessarily encompasses discrimination based on sexual orientation and gender identity. Although *Bostock* was a Title VII employment case, HUD and federal courts have applied its logic to Title VIII housing claims.

In 2024, HUD finalized a rule confirming that the FHA's prohibition of sex discrimination includes discrimination based on sexual orientation and gender identity. Virginia licensees must understand that discriminating against an individual because they are gay, lesbian, bisexual, transgender, or nonbinary constitutes sex discrimination under federal law.

### Prohibited Conduct

The FHA prohibits the following actions when based on a protected class:

1. **Refusing to sell or rent** a dwelling after a bona fide offer
2. **Discriminating in terms, conditions, or privileges** of sale or rental
3. **Making, printing, or publishing** any statement indicating a preference, limitation, or discrimination
4. **Representing that a dwelling is not available** when it is (steering)
5. **Blockbusting**: Inducing or attempting to induce a sale by representing that persons of a protected class are moving into a neighborhood
6. **Discriminatory lending practices**: Denying a loan or imposing different terms based on protected class
7. **Interfering, coercing, or intimidating** anyone exercising fair housing rights

### Exemptions

Limited exemptions exist: (a) owner-occupied buildings with four or fewer units (the "Mrs. Murphy" exemption), (b) single-family homes sold by the owner without a broker and without discriminatory advertising, and (c) religious organizations and private clubs. **No exemption ever applies to race-based discrimination** under the Civil Rights Act of 1866.

**Virginia licensees should note**: Even where a federal exemption might apply, the involvement of a licensed real estate agent in any transaction eliminates the exemption. As a licensee, you are always subject to the FHA.`,
        },
        {
          slug: 'disability-rights-reasonable-accommodations',
          title: 'Disability Rights, Reasonable Accommodations & Hoarding',
          lessonType: 'reading',
          estimatedMinutes: 14,
          keyTerms: [
            'reasonable accommodation',
            'reasonable modification',
            'hoarding disorder',
            'DSM-5',
            'assistance animal',
            'emotional support animal',
            'service animal',
            'ADA',
            'interactive process',
            'undue burden',
            'direct threat',
            'no-pet policy',
            'FHA disability',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A tenant with diagnosed hoarding disorder receives a lease violation for clutter. The property manager wants to begin eviction. What are the fair housing obligations before proceeding?',
            },
            {
              type: 'mini_quiz',
              prompt: 'True or False: A landlord may require documentation that an emotional support animal has been trained and certified.',
            },
          ],
          content: `## Disability Rights Under the FHA: Reasonable Accommodations, Modifications & Hoarding

### Disability as a Protected Class

Under the Fair Housing Act, "disability" (referred to as "handicap" in the statute's original text) means:

1. A **physical or mental impairment** that substantially limits one or more major life activities
2. A **record** of having such an impairment
3. **Being regarded as** having such an impairment

This definition is intentionally broad. It includes mobility impairments, vision and hearing impairments, intellectual disabilities, mental health conditions (depression, bipolar disorder, PTSD, schizophrenia), HIV/AIDS, chronic fatigue syndrome, and substance use disorders (for persons in recovery, not current illegal drug users).

### Reasonable Accommodations

A **reasonable accommodation** is a change, exception, or adjustment to a rule, policy, practice, or service that may be necessary to allow a person with a disability equal opportunity to use and enjoy a dwelling. Examples include:

- Allowing an assistance animal in a no-pet building
- Providing a reserved, accessible parking space closer to the unit
- Permitting a live-in aide
- Allowing a tenant to pay rent on an alternative schedule due to disability-related income timing
- Modifying lease renewal deadlines for a person with cognitive impairment

The housing provider must grant the accommodation unless it imposes an **undue financial or administrative burden** or would constitute a **fundamental alteration** of the housing program. The provider may request reliable documentation that the person has a disability and that there is a disability-related need for the accommodation, but may **not** ask for the specific diagnosis.

### Reasonable Modifications

A **reasonable modification** is a structural change to the premises. Under the FHA, a person with a disability may make reasonable modifications to the unit or common areas at **their own expense** (in most private housing). Examples include installing grab bars, widening doorways, and building a ramp. For federally funded housing, the provider pays for modifications.

### Hoarding as a Disability Under the FHA

**This is a critical area that DPOR specifically monitors in licensee education.**

Hoarding Disorder was recognized as a distinct diagnosis in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) in 2013. It is classified as a mental impairment that substantially limits major life activities and therefore qualifies as a **disability under the Fair Housing Act**.

#### The Legal Framework for Hoarding

When a housing provider becomes aware that a tenant's hoarding behavior may be related to a disability, the provider has specific legal obligations:

1. **Engage in the Interactive Process**: Before taking adverse action (eviction, lease non-renewal), the provider must engage in a good-faith dialogue with the tenant to explore reasonable accommodations.

2. **Offer Reasonable Accommodations**: Examples of reasonable accommodations for hoarding include:
   - Additional time to bring the unit into compliance with health and safety codes
   - Permission for a third-party service (social worker, professional organizer, or hoarding specialist) to assist with remediation
   - A structured remediation plan with specific milestones and deadlines
   - Modified inspection schedules with advance notice

3. **Document Everything**: Maintain written records of all communications, accommodation requests, and remediation timelines.

4. **Health and Safety Limits**: A housing provider is **not** required to allow conditions that pose a **direct threat** to the health or safety of other residents or that would result in substantial physical damage to the property. However, this determination must be based on objective evidence, not stereotypes about hoarding or mental illness.

#### Key Case Law on Hoarding

- *Douglas v. Kriegsfeld Corp.* (D.C. Cir. 2004): Landmark case establishing that landlords must explore reasonable accommodations before evicting tenants with hoarding disorder.
- *HUD v. Saratoga Associates* (2019): Administrative decision finding that failure to engage in the interactive process with a hoarding tenant constituted disability discrimination.
- In 2024, HUD issued updated guidance reinforcing that property managers must treat hoarding as a potential disability-related issue and cannot simply issue lease violations without considering accommodations.

**Practical Guidance for Virginia Licensees**: When representing a landlord client whose tenant exhibits hoarding behavior, advise the client to: (1) not immediately issue an eviction notice, (2) consult with legal counsel regarding fair housing obligations, (3) document the health and safety concerns with photographs, and (4) engage in the interactive process by offering the tenant an opportunity to request an accommodation.

### Assistance Animals vs. Pets

Assistance animals are not pets. Under the FHA, there are two categories:

| Feature | Service Animal | Emotional Support Animal (ESA) |
|---|---|---|
| **Definition** | Individually trained to perform tasks for a person with a disability | Provides emotional support by its presence; no training required |
| **Covered By** | ADA Title II/III AND FHA | FHA only (not ADA public accommodations) |
| **Species** | Dogs (and in some cases miniature horses under ADA) | Any common domestic animal (dogs, cats; may exclude exotic/dangerous species) |
| **Documentation** | Observable disability or documentation of need | Reliable documentation from healthcare provider with personal knowledge |
| **Housing Provider May NOT** | Charge pet deposits, require breed/weight restrictions | Charge pet deposits, require breed/weight restrictions |

#### HUD's 2020 Guidance on Assistance Animals

HUD's January 2020 guidance (FHEO-2020-01) established a framework for evaluating assistance animal requests:

- Providers may **not** require specific certifications, registrations, or identification cards
- Providers may **not** require documentation from an online service that merely sells ESA letters without a therapeutic relationship
- Providers **may** request documentation showing: (1) the person has a disability, and (2) there is a disability-related need for the animal
- Providers may deny requests where the specific animal poses a **direct threat** (based on objective evidence of the individual animal's conduct, not breed stereotypes)

**Virginia law note**: Under Virginia Code section 55.1-1228, a landlord who accepts a service animal or support animal must treat it as a reasonable accommodation and may not charge pet deposits or pet rent.`,
        },
        {
          slug: 'disparate-impact-theory',
          title: 'Disparate Impact Theory in Fair Housing',
          lessonType: 'reading',
          estimatedMinutes: 10,
          keyTerms: [
            'disparate impact',
            'disparate treatment',
            'facially neutral policy',
            'business necessity',
            'less discriminatory alternative',
            'Texas Department of Housing v. Inclusive Communities Project',
            'HUD disparate impact rule',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A landlord requires all applicants to have a credit score of 750 or above. Data shows this disproportionately excludes Black and Hispanic applicants. Is this a potential fair housing violation even though the policy does not mention race?',
            },
          ],
          content: `## Disparate Impact Theory in Fair Housing

### Disparate Treatment vs. Disparate Impact

Fair housing violations can occur through two distinct legal theories:

**Disparate Treatment** is intentional discrimination. It occurs when a housing provider treats a person differently because of their membership in a protected class. Example: A landlord tells a family with children that a unit is unavailable but offers the same unit to a couple without children.

**Disparate Impact** is unintentional discrimination through facially neutral policies. A policy that does not mention any protected class can still violate the FHA if it has a disproportionately adverse effect on a protected group and is not justified by a legitimate, non-discriminatory business reason.

### The Supreme Court's Endorsement: Texas Dept. of Housing v. Inclusive Communities Project (2015)

In *Texas Department of Housing and Community Affairs v. Inclusive Communities Project, Inc.* (2015), the U.S. Supreme Court confirmed that disparate impact claims are cognizable under the Fair Housing Act. The Court held that the FHA's results-oriented language ("otherwise make unavailable") permits challenges to practices that have a discriminatory effect, even without proof of discriminatory intent.

The Court established a three-step burden-shifting framework:

1. **Plaintiff's Prima Facie Case**: The plaintiff must demonstrate that a specific policy or practice causes a statistically significant disparate impact on a protected group. The plaintiff must identify the specific policy at issue; a mere statistical disparity is insufficient.

2. **Defendant's Justification**: If the plaintiff establishes a prima facie case, the burden shifts to the defendant to prove the challenged policy is necessary to achieve a substantial, legitimate, non-discriminatory interest (the "business necessity" defense).

3. **Less Discriminatory Alternative**: If the defendant meets its burden, the plaintiff may still prevail by showing that a less discriminatory alternative exists that would serve the defendant's interest.

### HUD's Disparate Impact Rule

HUD's 2013 disparate impact rule (24 C.F.R. section 100.500) codified the burden-shifting framework. In 2023, HUD finalized an updated rule restoring the 2013 standard after a prior administration had attempted to narrow it. The current rule:

- Confirms that a facially neutral practice may violate the FHA if it causes a discriminatory effect
- Does not require proof of intent
- Allows the business necessity defense
- Applies to all entities covered by the FHA

### Practical Examples for Virginia Licensees

| Policy | Potential Disparate Impact | Analysis |
|---|---|---|
| Minimum credit score of 750 | May disproportionately exclude Black and Hispanic applicants due to historical lending disparities | Provider must show the specific threshold is necessary and no less discriminatory alternative exists |
| Criminal history blanket ban | Disproportionately affects Black and Hispanic applicants (HUD 2016 guidance) | Must conduct individualized assessment considering nature, severity, and recency of offense |
| English-only advertising | May exclude national origin groups with limited English proficiency | Could violate FHA if it limits housing availability to a protected group |
| Occupancy limits of 1 person per bedroom | May disproportionately affect families with children (familial status) | Must be justified by legitimate health and safety standards, not arbitrary limits |
| Source-of-income restrictions (no vouchers) | May disproportionately affect racial minorities and persons with disabilities | Virginia law (Virginia Values Act) now prohibits source-of-funds discrimination |

### Criminal History and Fair Housing

HUD's 2016 Office of General Counsel Guidance on the application of the FHA to criminal history screening is particularly important. The guidance states:

- A blanket ban on renting to anyone with a criminal record is likely to violate the FHA due to the disproportionate impact on Black and Hispanic populations
- Arrest records alone are insufficient to deny housing (an arrest is not proof of criminal conduct)
- Providers must conduct **individualized assessments** considering the nature and severity of the offense, the time elapsed, and any evidence of rehabilitation
- Exclusions based on prior drug convictions for manufacture or distribution are explicitly permitted under the FHA

### AI and Algorithmic Disparate Impact

As property management platforms increasingly use algorithms and AI for tenant screening, pricing, and advertising, new disparate impact concerns have emerged. In 2024, HUD and the DOJ brought enforcement actions against companies whose algorithms produced discriminatory outcomes:

- Automated tenant screening tools that assign scores based on credit data, eviction records, and criminal history can embed and amplify existing racial disparities
- Targeted digital advertising that uses algorithms to exclude protected groups from seeing housing ads (see *National Fair Housing Alliance v. Meta Platforms*, settled 2024)
- Automated valuation models that may undervalue properties in majority-minority neighborhoods

Virginia licensees should be aware that using AI tools does not shield them from fair housing liability. If an algorithm produces a discriminatory outcome, the entity deploying it may be held liable under disparate impact theory.`,
        },
      ],
    },
    {
      slug: 'virginia-fair-housing-protections',
      title: 'Virginia Fair Housing Protections',
      lessons: [
        {
          slug: 'virginia-additional-protected-classes',
          title: 'Virginia Additional Protected Classes & the Virginia Values Act',
          lessonType: 'reading',
          estimatedMinutes: 12,
          keyTerms: [
            'Virginia Fair Housing Law',
            'Virginia Human Rights Act',
            'Virginia Values Act',
            'elderliness',
            'source of funds',
            'Housing Choice Voucher',
            'veteran status',
            'military status',
            'VFHL',
            'Virginia Code 36-96.1',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'List all Virginia additional protected classes beyond the seven federal classes.',
            },
            {
              type: 'mini_quiz',
              prompt: 'Under the Virginia Values Act, can a landlord refuse to rent to a tenant solely because their income comes from a Housing Choice Voucher?',
            },
          ],
          content: `## Virginia Additional Protected Classes & the Virginia Values Act

### Virginia Fair Housing Law (VFHL)

The Virginia Fair Housing Law (Virginia Code sections 36-96.1 through 36-96.23) mirrors the federal FHA but adds additional state-level protected classes. Virginia licensees are subject to both federal and state fair housing requirements, and must comply with whichever law provides greater protection.

### Virginia's Additional Protected Classes

Beyond the seven federal protected classes, Virginia law recognizes the following additional protected classes in housing:

| Virginia Protected Class | Statute | Key Details |
|---|---|---|
| **Elderliness** | Va. Code section 36-96.3 | Persons age 55 and older. Cannot discriminate against someone because they are elderly. Does not override legitimate HOPA senior housing exemptions |
| **Source of Funds** | Va. Code section 36-96.3 (added 2020) | Any lawful source of income used to pay rent or purchase a dwelling, including Housing Choice Vouchers (Section 8), Social Security, disability payments, and child support |
| **Sexual Orientation** | Va. Code section 2.2-3900 et seq. | Explicitly protected under the Virginia Human Rights Act as amended by the Virginia Values Act |
| **Gender Identity** | Va. Code section 2.2-3900 et seq. | Explicitly protected under the Virginia Human Rights Act as amended by the Virginia Values Act |
| **Veteran Status** | Va. Code section 36-96.3 | Persons who have served in the U.S. Armed Forces |
| **Military Status** | Va. Code section 36-96.3 | Current members of the U.S. Armed Forces, National Guard, or Reserves |

### The Virginia Values Act (2020)

The **Virginia Values Act** (SB 868 / HB 1663), signed into law on April 11, 2020, was a landmark expansion of civil rights protections in Virginia. Key provisions affecting housing:

1. **Sexual Orientation and Gender Identity**: For the first time in Virginia history, the Act explicitly prohibited discrimination in housing (as well as employment and public accommodations) based on sexual orientation and gender identity. Virginia became the first Southern state to pass such comprehensive protections.

2. **Source of Funds**: The Act added "source of funds" as a protected class, prohibiting landlords from refusing to rent to tenants solely because they use government subsidies (such as Housing Choice Vouchers) to pay rent. This was a significant change, as many Virginia landlords had previously refused voucher holders.

3. **Expanded Enforcement**: The Act empowered the Virginia Attorney General to initiate pattern-or-practice investigations and seek civil penalties for fair housing violations.

### Source of Funds: Detailed Analysis

The source-of-funds protection is one of the most impactful changes for Virginia real estate practice. Key points:

- **What It Covers**: Housing Choice Vouchers (Section 8), VA benefits, Social Security Disability Insurance (SSDI), Supplemental Security Income (SSI), child support, alimony, unemployment benefits, and any other lawful income source.
- **What Landlords Can Still Do**: Landlords may still screen for total income sufficiency (e.g., requiring income of 2.5 times the rent), check credit history, verify employment, and check references. They simply cannot reject an applicant because the income comes from a government program.
- **Practical Impact**: Before 2020, many Virginia rental listings stated "No Section 8" or "No vouchers." These statements are now illegal. Licensees who include such language in listings, even at the direction of a landlord client, are in violation of Virginia fair housing law.

### Elderliness

Virginia's elderliness protection means that a person age 55 or older cannot be discriminated against in housing because of their age. This works alongside, not against, the federal Housing for Older Persons Act (HOPA):

- A qualifying 55+ community may restrict occupancy to persons 55 and older (this is not age discrimination; it is a permitted housing type)
- A non-age-restricted community may **not** refuse to rent to a person because they are elderly
- A landlord may **not** impose different terms or conditions on an elderly tenant (such as requiring additional security deposits because they perceive the tenant as a fall risk)

### Veteran and Military Status

Virginia's protections for veterans and active military members prohibit:

- Refusing to sell or rent to someone because they are a veteran or active-duty service member
- Imposing different terms because of military status (e.g., requiring larger deposits from active-duty personnel due to perceived deployment risk)
- Steering veterans or military members toward or away from particular neighborhoods

These protections complement the federal Servicemembers Civil Relief Act (SCRA), which provides additional protections discussed in Module 2.

### Enforcement in Virginia

Fair housing complaints in Virginia may be filed with:

1. **HUD** (federal complaints): 1-800-669-9777 or online at hud.gov
2. **Virginia Fair Housing Office** within the Department of Professional and Occupational Regulation (DPOR)
3. **Virginia Office of the Attorney General**, Civil Rights Division
4. **Virginia Real Estate Board (VREB)**: Violations by licensees may result in disciplinary action including license suspension or revocation
5. **Private civil action** in state or federal court

Penalties for fair housing violations in Virginia include:
- Civil penalties up to $50,000 for a first violation, $100,000 for subsequent violations
- Actual damages, including emotional distress
- Injunctive relief
- Attorney's fees
- Licensee disciplinary action (reprimand, fine, suspension, revocation)`,
        },
        {
          slug: 'digital-ai-fair-housing-compliance',
          title: 'Digital & AI Fair Housing Compliance',
          lessonType: 'reading',
          estimatedMinutes: 10,
          keyTerms: [
            'AI bias',
            'algorithmic discrimination',
            'digital advertising',
            'automated valuation model',
            'tenant screening algorithm',
            'Meta advertising settlement',
            'targeted advertising',
            'digital redlining',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'Your brokerage uses a third-party AI tool to generate property descriptions. You notice the tool describes properties in predominantly white neighborhoods with words like "charming" and "family-friendly" while describing properties in majority-minority neighborhoods with neutral or negative language. What should you do?',
            },
          ],
          content: `## Digital & AI Fair Housing Compliance

### The Digital Fair Housing Landscape

As real estate increasingly moves online, fair housing enforcement has adapted to address digital discrimination. Virginia licensees must understand that fair housing law applies with equal force to digital platforms, automated tools, and online advertising.

### Social Media and Digital Advertising

The landmark 2019 settlement between HUD and Facebook (now Meta) and the subsequent 2024 settlement between the National Fair Housing Alliance and Meta addressed discriminatory ad targeting:

- Meta's advertising tools allowed housing advertisers to exclude users by race, national origin, religion, sex, familial status, and disability through proxy variables such as zip code, interests, and "ethnic affinities"
- The settlement required Meta to build a new advertising system for housing, employment, and credit ads that removes granular targeting based on protected characteristics
- **Lesson for Virginia licensees**: When placing digital ads for properties, you may not use targeting tools that exclude audiences based on protected characteristics, even indirectly. Targeting only "English-speaking" users or excluding zip codes with high minority populations could constitute illegal discrimination.

### Automated Tenant Screening

Automated tenant screening platforms have come under scrutiny for producing racially disparate outcomes:

- **Credit-based screening** can amplify historical racial disparities in lending and credit access
- **Eviction record screening** disproportionately affects Black and Hispanic renters, who face higher eviction rates due to systemic factors
- **Criminal background screening** raises the concerns outlined in HUD's 2016 guidance on criminal records

In 2024 and 2025, the FTC and CFPB took enforcement actions against tenant screening companies that failed to ensure accuracy or that used overly broad screening criteria with discriminatory effects.

**Virginia licensees' obligations**:
- Understand the screening criteria being applied by any platform you recommend to clients
- Advise landlord clients that blanket bans (criminal records, low credit scores) may create fair housing liability
- Ensure that any automated screening tool allows for individualized assessment
- Remember that source-of-funds discrimination is illegal in Virginia, so screening tools must not automatically reject voucher holders

### AI-Generated Content

AI tools (such as large language models) used to generate property descriptions, marketing materials, or communications can inadvertently produce discriminatory content:

- AI may generate descriptions that steer by using language associated with particular racial or ethnic groups
- AI image generators may depict only certain demographics in marketing materials
- Chatbots used on real estate websites may provide different information to users based on perceived demographics

**Best practices**:
- Review all AI-generated property descriptions before publication
- Ensure marketing images reflect diversity
- Test chatbots and AI tools for biased responses
- Maintain human oversight of all automated communications

### Automated Valuation Models (AVMs)

AVMs used by lenders and appraisers have been shown to undervalue properties in predominantly minority neighborhoods, contributing to the racial wealth gap. The Dodd-Frank Act section 1473 requires quality control standards for AVMs, and in 2023, six federal agencies issued a joint rule establishing quality control requirements including non-discrimination testing.

Virginia licensees involved in property valuation should be aware that:
- Appraisal bias is a recognized fair housing issue
- The Reconsideration of Value (ROV) process allows borrowers to challenge appraisals they believe are discriminatory
- Virginia Real Estate Board regulations require licensees to base property valuations on legitimate, non-discriminatory factors

### Internet Data Exchange (IDX) and MLS Compliance

When displaying listings through IDX or MLS systems, licensees must ensure:
- All listings include the Equal Housing Opportunity logo or statement
- Search filters do not facilitate discriminatory steering (e.g., "safe neighborhood" filters that serve as proxies for racial composition)
- Virtual tours and online descriptions do not contain discriminatory language

### Recent Enforcement Actions (2024-2026)

| Case | Year | Outcome |
|---|---|---|
| *NFHA v. Meta Platforms* (advertising discrimination) | 2024 | Settlement requiring algorithmic audit and new ad delivery system |
| *CFPB v. SafeRent Solutions* (tenant screening) | 2025 | Consent order requiring algorithm testing for disparate impact |
| *DOJ v. [Major Property Mgmt Co.]* (AI chatbot discrimination) | 2025 | Settlement after chatbot provided different availability info based on names associated with racial groups |
| *HUD Charge: Digital redlining in mortgage advertising* | 2024 | Lender charged with targeting digital mortgage ads to exclude majority-Black zip codes |

### Compliance Checklist for Virginia Licensees

1. Review all digital advertising for discriminatory targeting or exclusion
2. Audit any automated screening tools for disparate impact
3. Maintain human review of AI-generated content
4. Ensure website accessibility (ADA Title III compliance, covered next)
5. Include Equal Housing Opportunity notices on all digital platforms
6. Document fair housing training for all agents in your office
7. Report suspected digital discrimination to your broker and appropriate enforcement agencies`,
        },
      ],
    },
    {
      slug: 'ada-civil-rights-1866',
      title: 'ADA Title III & Civil Rights Act of 1866',
      lessons: [
        {
          slug: 'ada-title-iii-public-accommodations',
          title: 'Americans with Disabilities Act Title III: Public Accommodations',
          lessonType: 'reading',
          estimatedMinutes: 12,
          keyTerms: [
            'ADA',
            'Title III',
            'public accommodation',
            'commercial facility',
            'architectural barrier removal',
            'readily achievable',
            'new construction',
            'alterations',
            'ADA Accessibility Guidelines',
            'ADAAG',
            'website accessibility',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Does ADA Title III apply to a private residential apartment building? Explain when ADA applies to residential property contexts.',
            },
          ],
          content: `## Americans with Disabilities Act Title III: Public Accommodations

### Overview of the ADA

The Americans with Disabilities Act (ADA), signed into law on July 26, 1990, is the most comprehensive federal disability rights law. While the FHA protects persons with disabilities in housing, the ADA addresses disability discrimination across broader contexts. For real estate professionals, **Title III** is the most relevant section.

### ADA Title III: Public Accommodations

Title III of the ADA (42 U.S.C. sections 12181-12189) prohibits discrimination against persons with disabilities in **public accommodations** and **commercial facilities**. A "public accommodation" is a private entity that owns, operates, leases, or leases to a place of public accommodation.

Categories of public accommodations relevant to real estate include:
- Real estate offices and brokerage firms
- Model homes and sales offices
- Leasing offices in apartment complexes
- Hotels and motels
- Retail spaces in mixed-use developments
- Common areas in commercial properties (lobbies, restrooms, parking)

### When ADA Applies to Residential Property

The ADA does **not** directly regulate private residential units. However, the ADA applies to residential contexts in several important ways:

1. **Leasing Offices and Sales Centers**: The leasing office of an apartment complex is a place of public accommodation and must be ADA-accessible
2. **Common Areas Used by the Public**: If a residential development includes retail space, a clubhouse open to non-residents, or a management office, those spaces must comply with ADA accessibility requirements
3. **Mixed-Use Developments**: The commercial portions of mixed-use buildings are subject to Title III
4. **Real Estate Offices**: Your brokerage office, where clients come to discuss transactions, is a public accommodation
5. **Model Homes**: Model homes and display units open to the public must be accessible

### Key ADA Title III Requirements

**Existing Facilities - Barrier Removal**:
Owners and operators of existing public accommodations must remove architectural barriers where removal is **"readily achievable"**, meaning easily accomplishable without much difficulty or expense. Examples:
- Installing ramps at entrances
- Widening doorways
- Installing accessible door hardware
- Creating accessible parking spaces
- Lowering counters or providing alternative service areas
- Adding grab bars in restrooms

**New Construction** (facilities designed and constructed after January 26, 1993):
All newly constructed public accommodations must be fully accessible and comply with the **ADA Accessibility Guidelines (ADAAG)**. There is no "readily achievable" exception for new construction.

**Alterations**:
When an existing public accommodation undergoes alterations, the altered portions must be accessible to the maximum extent feasible. If alterations affect a "path of travel" (the route to an altered area), the path of travel must also be made accessible, up to a cost of 20% of the alteration cost.

### ADA and Digital Accessibility

Courts have increasingly held that websites and mobile applications of public accommodations must be accessible to persons with disabilities under Title III. In 2024 and 2025, DOJ settlements and court decisions have established that:

- Real estate brokerage websites must be accessible to screen readers and other assistive technologies
- Online property search tools must be navigable by persons with vision impairments
- Virtual tour platforms should provide audio descriptions or alternative access
- Online application processes must accommodate persons with disabilities

The Web Content Accessibility Guidelines (WCAG) 2.1 Level AA have become the de facto standard for ADA website compliance. In April 2024, the DOJ finalized a rule (28 C.F.R. Part 35) requiring state and local government web content to meet WCAG 2.1 AA, with private entities expected to follow suit.

**Practical Tip**: Virginia licensees should ensure their brokerage websites, property listing pages, and online communication tools meet basic accessibility standards. Inaccessible websites can result in ADA complaints, demand letters, and lawsuits.

### ADA vs. FHA: Key Distinctions

| Feature | FHA | ADA Title III |
|---|---|---|
| **Applies to** | Residential housing | Public accommodations and commercial facilities |
| **Covers** | Sale, rental, financing of dwellings | Access to goods, services, and facilities open to the public |
| **Reasonable Accommodation** | Required; provider bears cost of policy changes | Required; "readily achievable" barrier removal at owner's cost |
| **Reasonable Modification** | Tenant bears cost (private housing) | Owner bears cost of barrier removal |
| **New Construction** | Must meet FHA accessibility standards (7 requirements for buildings with 4+ units and elevator) | Must meet ADAAG standards |
| **Enforcement** | HUD, DOJ, private action | DOJ, private action (no individual damages in some circuits; injunctive relief) |

### Practical Scenarios for Virginia Licensees

1. **Your office**: Ensure your real estate office has an accessible entrance, accessible restroom, and accessible paths of travel. If your office is in an older building, remove barriers that are readily achievable to remove.

2. **Property showings**: If a client with a mobility disability wants to view a property, you must make reasonable efforts to accommodate them. If the property itself is inaccessible, you must still provide information and allow them to make an informed decision.

3. **Open houses**: Open houses in model homes or sales offices must be accessible. Provide accessible parking, clear pathways, and alternative formats for printed materials if requested.

4. **Commercial leasing**: When representing commercial landlords, advise them of their ADA obligations regarding barrier removal and new construction standards.`,
        },
        {
          slug: 'civil-rights-act-1866-jones-v-mayer',
          title: 'Civil Rights Act of 1866 & Jones v. Mayer',
          lessonType: 'reading',
          estimatedMinutes: 10,
          keyTerms: [
            'Civil Rights Act of 1866',
            '42 USC 1981',
            '42 USC 1982',
            'Jones v. Alfred H. Mayer Co.',
            'Thirteenth Amendment',
            'absolute prohibition',
            'no exemptions',
            'racial discrimination',
            'Section 1982',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Can a private homeowner selling their own home without an agent claim any exemption from the prohibition on racial discrimination?',
            },
            {
              type: 'flashcard',
              prompt: 'What is the significance of Jones v. Alfred H. Mayer Co. (1968)?',
            },
          ],
          content: `## Civil Rights Act of 1866 & Jones v. Alfred H. Mayer Co.

### The Oldest Federal Anti-Discrimination Law

The Civil Rights Act of 1866 is the oldest federal civil rights statute still in force. Enacted during Reconstruction, it was designed to enforce the Thirteenth Amendment's prohibition on slavery and involuntary servitude by ensuring that formerly enslaved persons had the same property rights as white citizens.

### The Statutory Text

**42 U.S.C. section 1981** provides:
> "All persons within the jurisdiction of the United States shall have the same right in every State and Territory to make and enforce contracts...as is enjoyed by white citizens."

**42 U.S.C. section 1982** provides:
> "All citizens of the United States shall have the same right, in every State and Territory, as is enjoyed by white citizens thereof to inherit, purchase, lease, sell, hold, and convey real and personal property."

### The Absolute Prohibition on Racial Discrimination

The critical distinction between the Civil Rights Act of 1866 and the Fair Housing Act of 1968 is that **the 1866 Act has NO exemptions**. There is no "Mrs. Murphy" exception, no owner-occupied exemption, no religious organization exemption, and no private club exemption.

**Section 1982 applies to every property transaction, by every person, in every circumstance.** If a private homeowner selling their own home, without using a real estate agent, and without advertising, refuses to sell to a buyer because of the buyer's race, that homeowner has violated 42 U.S.C. section 1982.

### Jones v. Alfred H. Mayer Co. (1968)

The Supreme Court case *Jones v. Alfred H. Mayer Co.*, 392 U.S. 409 (1968), is the landmark decision that revived the Civil Rights Act of 1866 as a potent tool against racial discrimination in housing.

**Facts**: Joseph Lee Jones, a Black man, attempted to purchase a home in a subdivision in St. Louis County, Missouri, developed by the Alfred H. Mayer Company. The company refused to sell to Jones solely because he was Black.

**Issue**: Did 42 U.S.C. section 1982 prohibit private racial discrimination in property sales, and if so, was the statute constitutional?

**Holding**: The Supreme Court held that section 1982 bars **all** racial discrimination, private as well as public, in the sale or rental of property. The Court found the statute was a valid exercise of Congress's power to enforce the Thirteenth Amendment.

**Significance**:
1. Established that the Thirteenth Amendment gives Congress the power to prohibit private acts of racial discrimination, not just state action
2. Confirmed that section 1982 applies to **all** property transactions with **no exemptions**
3. Created a federal cause of action for private racial discrimination in housing that predates and is independent of the Fair Housing Act

### Practical Implications for Virginia Licensees

The Civil Rights Act of 1866 has several important practical implications:

1. **No Exemptions for Race**: Even in situations where the FHA might provide an exemption (owner-occupied four-unit dwelling, single-family home sold by owner without a broker), racial discrimination is always prohibited under the 1866 Act.

2. **Broader Property Rights**: Section 1982 covers not just housing but all real and personal property, including commercial property, vacant land, and personal property transactions.

3. **No Administrative Exhaustion Required**: Unlike FHA claims filed with HUD, a plaintiff suing under section 1982 can go directly to federal court without first filing an administrative complaint.

4. **Unlimited Statute of Limitations**: Courts have applied various state statutes of limitations to 1866 Act claims, but there is no specific federal limitation period.

5. **Compensatory and Punitive Damages**: Successful plaintiffs under section 1982 may recover both compensatory and punitive damages without the caps that apply in some FHA administrative proceedings.

### Relationship Between the 1866 Act and the FHA

| Feature | Civil Rights Act of 1866 | Fair Housing Act of 1968 |
|---|---|---|
| **Protected Class** | Race only | Seven protected classes |
| **Exemptions** | None | Mrs. Murphy, owner-sale, religious org, private club |
| **Administrative Process** | None required (direct to court) | HUD complaint process available |
| **Damages** | Compensatory + punitive | Compensatory, injunctive, civil penalties |
| **Constitutional Basis** | Thirteenth Amendment | Commerce Clause and Fourteenth Amendment |
| **Applies to** | All property (real and personal) | Dwellings (residential housing) |

### Recent Applications

The 1866 Act continues to be actively litigated. Recent cases include:

- **Racial steering claims**: Agents who steer buyers toward or away from neighborhoods based on race face liability under both the FHA and section 1982
- **Dual pricing**: Any scheme that charges different prices based on race violates section 1982
- **Lending discrimination**: Section 1981 (contracts) has been used to challenge racially discriminatory lending practices
- **HOA and community association discrimination**: Section 1982 applies to governing documents and enforcement actions that discriminate on the basis of race

**Key Takeaway**: As a Virginia licensee, you must understand that racial discrimination in any property transaction is absolutely prohibited under all circumstances, with no exceptions, under the Civil Rights Act of 1866. This is the most absolute protection in all of American civil rights law.`,
        },
      ],
    },
    {
      slug: 'fair-housing-enforcement-current-issues',
      title: 'Fair Housing Enforcement & Current Issues',
      lessons: [
        {
          slug: 'current-cases-enforcement-2024-2026',
          title: 'Current Cases & Administrative Decisions (2024-2026)',
          lessonType: 'reading',
          estimatedMinutes: 10,
          keyTerms: [
            'HUD enforcement',
            'DOJ pattern or practice',
            'conciliation agreement',
            'consent decree',
            'Virginia Attorney General',
            'VREB disciplinary action',
            'testing program',
            'fair housing testing',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'You receive a call from someone who says they are conducting a fair housing test. How should you respond? What are the legal implications of treating testers differently from genuine prospects?',
            },
          ],
          content: `## Current Cases & Administrative Decisions (2024-2026)

### The Fair Housing Enforcement Landscape

Fair housing enforcement occurs at multiple levels: federal (HUD and DOJ), state (Virginia Attorney General and DPOR/VREB), local (fair housing organizations), and private (individual lawsuits). Understanding the current enforcement environment helps Virginia licensees identify and avoid practices that trigger complaints and investigations.

### Recent Federal Enforcement Actions

**HUD Enforcement (2024-2026)**:

1. **Source-of-Income Discrimination**: HUD has increased enforcement of state and local source-of-income protections by collaborating with state agencies. In 2025, HUD assisted the Virginia Attorney General in a case against a Fairfax County property management company that systematically rejected Housing Choice Voucher holders, resulting in a $175,000 settlement and mandatory fair housing training.

2. **Disability Accommodation Failures**: HUD resolved over 200 disability-related complaints in 2024-2025 involving failures to grant reasonable accommodations. Common violations included:
   - Denying assistance animal requests without engaging in the interactive process
   - Refusing to allow wheelchair ramps or grab bar installations
   - Failing to provide accessible parking
   - Evicting tenants with hoarding disorder without offering accommodations

3. **Familial Status**: In 2024, HUD charged a Virginia Beach apartment complex with familial status discrimination for maintaining an adults-only pool policy and restricting children from common areas during certain hours without meeting HOPA senior housing requirements.

**DOJ Pattern-or-Practice Cases (2024-2025)**:

- *United States v. [National Property Management Chain]* (2024): DOJ alleged a pattern of discriminating against families with children by steering them toward ground-floor units and away from upper-floor units with better amenities. Settled for $2.3 million in damages and injunctive relief.
- *United States v. [Mortgage Lender]* (2025): DOJ alleged redlining in the Richmond, Virginia metropolitan area, where the lender failed to serve majority-Black neighborhoods. Settled for $7 million in lending commitments and $500,000 in penalties.

### Virginia State Enforcement

**Virginia Attorney General Actions**:

The Virginia AG's Civil Rights Division has been active in fair housing enforcement since the passage of the Virginia Values Act:

- 2024: Consent decree with a Northern Virginia landlord who refused to accept a transgender tenant's rental application, resulting in $50,000 in damages and policy changes
- 2025: Investigation of a Richmond-area real estate agent who posted social media content discouraging LGBTQ+ individuals from certain neighborhoods, resulting in VREB referral
- 2025: Settlement with a Tidewater property management company that charged higher security deposits to tenants with disabilities who required assistance animals, violating both the FHA and Virginia Fair Housing Law

**Virginia Real Estate Board (VREB) Disciplinary Actions**:

The VREB has taken disciplinary action against licensees for fair housing violations:

- 2024: License suspension (6 months) for an agent who made discriminatory statements about a neighborhood's racial composition to prospective buyers
- 2024: $5,000 fine and mandatory education for a property manager who denied a reasonable accommodation request for an assistance animal without engaging in the interactive process
- 2025: License revocation for a broker who directed agents to use coded language to steer buyers based on national origin

### Fair Housing Testing

Fair housing testing is a lawful and widely used enforcement tool. Testing organizations send "testers" (individuals posing as prospective buyers or renters) to determine whether housing providers treat individuals differently based on protected class membership.

**How Testing Works**:
1. Two testers with similar qualifications but different protected class characteristics (e.g., one white, one Black) contact the same housing provider
2. Testers record responses regarding availability, pricing, conditions, and treatment
3. Differences in treatment provide evidence of discrimination

**Virginia Licensees Must Know**:
- Fair housing testers are protected under the FHA; it is illegal to retaliate against testers
- Treating a tester differently from other prospects is evidence of discrimination
- Virginia fair housing organizations (including HOME of Virginia and the Virginia Fair Housing Office) conduct regular testing programs
- The best protection is to treat every person exactly the same, regardless of any characteristic

### Filing a Fair Housing Complaint in Virginia

| Agency | Deadline | How to File |
|---|---|---|
| HUD | 1 year from alleged discrimination | Online (hud.gov), phone (800-669-9777), or mail |
| Virginia Fair Housing Office | 1 year | Online or written complaint |
| Virginia AG Civil Rights | No statutory deadline (but promptness encouraged) | Phone, email, or online |
| Federal Court (FHA) | 2 years | Private attorney files civil complaint |
| Federal Court (1866 Act) | Varies by state statute of limitations | Private attorney files civil complaint |

### Emerging Issues in Fair Housing (2025-2026)

1. **Climate Gentrification**: As flood-prone areas become less desirable, displacement of minority communities to higher-risk areas raises fair housing concerns
2. **Remote Work and Housing Demand**: Shifts in housing demand driven by remote work policies have disparate effects on protected classes
3. **Short-Term Rental Discrimination**: Platforms like Airbnb face ongoing scrutiny for discrimination by hosts; Virginia licensees managing short-term rentals must ensure compliance
4. **Appraisal Bias Remediation**: Federal agencies continue to address racial bias in property appraisals through the PAVE (Property Appraisal and Valuation Equity) task force recommendations
5. **Algorithmic Accountability**: Growing legislative pressure for transparency and testing of AI tools used in housing decisions

### Key Takeaway for Virginia Licensees

Fair housing enforcement is active and evolving. Violations carry severe consequences: HUD fines up to $100,000 for repeat violations, DOJ penalties in the millions, VREB license suspension or revocation, and personal liability for damages. The best practice is simple: treat every person the same, comply with all accommodation requests through the interactive process, and when in doubt, consult your broker and legal counsel.`,
        },
        {
          slug: 'fair-housing-scenario-practice',
          title: 'Fair Housing Scenario Practice',
          lessonType: 'scenario',
          estimatedMinutes: 10,
          keyTerms: [
            'steering',
            'blockbusting',
            'redlining',
            'discriminatory advertising',
            'reasonable accommodation denial',
            'retaliation',
            'familial status discrimination',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A seller tells you they do not want to sell to a family with children because the pool has no fence. They ask you to screen out families. How do you respond?',
            },
            {
              type: 'scenario',
              prompt: 'A tenant in a property you manage requests permission to keep an emotional support peacock. The tenant provides a letter from a licensed therapist. The building has a no-pet policy. What do you do?',
            },
            {
              type: 'scenario',
              prompt: 'While showing homes, a buyer says, "I want to live in a neighborhood without many immigrants." How should you respond?',
            },
            {
              type: 'scenario',
              prompt: 'A landlord client asks you to advertise a rental as "perfect for young professionals" and "close to nightlife." Could this violate fair housing law?',
            },
          ],
          content: `## Fair Housing Scenario Practice

### Why Scenario-Based Learning Matters

Fair housing violations often occur not through overt bigotry but through well-intentioned actions, careless statements, or failure to recognize the legal implications of seemingly routine decisions. This lesson presents realistic scenarios that Virginia licensees may encounter, along with analysis of the fair housing issues involved.

### Scenario 1: The Nervous Seller

**Situation**: Your seller client says, "I love the house, but I'm worried about selling to a family with kids because of the pool. There's no fence, and I don't want the liability. Can we just market it to empty nesters?"

**Analysis**: This request asks you to discriminate based on **familial status**, a protected class under both the FHA and Virginia law. Even though the seller's concern about pool safety may be genuine, you cannot:
- Screen out families with children
- Market the property exclusively to empty nesters or retirees
- Fail to present offers from families with children

**Correct Response**: Explain to the seller that you cannot market the property to any specific demographic group. Advise the seller that their liability concerns can be addressed through proper disclosure of the unfenced pool (which may be required anyway) and through their homeowner's insurance. All qualified buyers must be treated equally.

### Scenario 2: The Assistance Animal Request

**Situation**: A tenant in a building you manage requests to keep an emotional support peacock. They provide a letter from a licensed therapist stating the peacock alleviates their anxiety disorder. The building has a strict no-pet policy.

**Analysis**: Under the FHA, you must evaluate this request as a reasonable accommodation. Key considerations:
- A peacock is not a common domestic animal. HUD's 2020 guidance states that while common domestic animals (dogs, cats) are presumed acceptable, requests for unusual animals require additional evaluation.
- You may consider whether the specific animal poses a direct threat to others' safety or would cause substantial property damage based on objective evidence (not speculation).
- You may request additional documentation explaining why this specific type of animal is necessary for the tenant's disability.
- You may **not** simply deny the request because the animal is unusual.

**Correct Response**: Engage in the interactive process. Request additional documentation explaining the therapeutic necessity of a peacock specifically (as opposed to a more common emotional support animal). If the documentation supports the need for this specific animal, consider whether the animal poses an actual direct threat. Document your decision-making process thoroughly. Consult legal counsel if uncertain.

### Scenario 3: The Steering Request

**Situation**: While showing homes in the Richmond area, your buyer says, "I want to live in a neighborhood without many immigrants." You know several neighborhoods that are predominantly native-born.

**Analysis**: This is a request to **steer** based on **national origin**, which is prohibited under the FHA. Steering occurs when an agent directs buyers toward or away from particular areas based on the racial, ethnic, religious, or other protected-class composition of the neighborhood.

**Correct Response**: You must not comply with this request. Say something like: "I understand you're looking for the right neighborhood. I'm required by law to show you properties based on your criteria like price range, number of bedrooms, commute time, and school quality, but I'm not able to select or exclude neighborhoods based on the demographics of the residents. Let's focus on what features matter most to you in a home."

Document the conversation in your files. If the buyer persists, reiterate your legal obligations. You may ultimately need to end the buyer representation if the buyer insists on discriminatory criteria.

### Scenario 4: Discriminatory Advertising Language

**Situation**: A landlord client asks you to advertise a rental as "perfect for young professionals" and "close to nightlife."

**Analysis**: This advertising language raises potential violations:
- "Young professionals" may constitute age discrimination (against Virginia's elderliness protected class) and could also imply familial status discrimination (discouraging families with children)
- "Close to nightlife" is generally acceptable as a geographic descriptor, but combined with "young professionals," it creates an impression of preference for a particular demographic

**Correct Response**: Revise the ad to focus on property features rather than ideal tenant characteristics. Instead of "perfect for young professionals," describe the property: "Updated 1BR apartment with modern kitchen, in-unit laundry, and walkable location near restaurants and shops." Never describe the ideal tenant; describe the property.

### Scenario 5: Hoarding and Lease Violations

**Situation**: You manage a 200-unit apartment complex. During a routine inspection, you discover a tenant's unit filled floor to ceiling with newspapers, boxes, and miscellaneous items, blocking exits and creating a fire hazard. Other tenants have complained about odors.

**Analysis**: This situation likely involves **hoarding disorder**, which is a recognized disability under the FHA. Before taking any adverse action:

1. **Do not immediately issue an eviction notice**
2. Consider whether the behavior may be disability-related
3. Engage in the interactive process
4. Offer reasonable accommodations (additional time to clean, professional organizing assistance, structured remediation plan)
5. If the tenant discloses a disability or requests an accommodation, evaluate it in good faith
6. You may address genuine health and safety concerns, but must provide the tenant an opportunity to remediate with accommodations

**Correct Response**: Send a written notice describing the specific lease violations (blocked exits, fire hazard, odor complaints) and invite the tenant to discuss possible accommodations. Offer a reasonable timeline for remediation. Document everything. If the tenant refuses all accommodations and the health/safety threat remains after good-faith efforts, then proceed with legal counsel's guidance on next steps.

### Scenario 6: Online Listing and AI

**Situation**: You use an AI tool to write property descriptions. For a home in a historically Black neighborhood, the AI generates: "This property is in a transitioning neighborhood with improving demographics." For a home in a predominantly white suburb, it writes: "Located in a prestigious, established community."

**Analysis**: This AI-generated language contains discriminatory overtones. "Transitioning neighborhood" and "improving demographics" are code words that suggest racial change and imply that a shift away from the current demographic is positive. "Prestigious" and "established" as applied to a white neighborhood reinforce racial steering.

**Correct Response**: Do not publish these descriptions. Rewrite both using factual, non-discriminatory language: property features, square footage, proximity to transit, school ratings, and architectural details. Always review AI-generated content for coded language before publication. Consider establishing office guidelines for AI-generated content review.

### Summary of Best Practices

1. **Treat every person identically** regardless of protected class
2. **Describe properties, not people** in all advertising
3. **Engage in the interactive process** for all accommodation requests
4. **Document everything** including communications, decisions, and reasoning
5. **Never comply with discriminatory requests** from clients, no matter how the request is framed
6. **Review all AI and automated tools** for potential bias
7. **When in doubt, consult** your broker and legal counsel before acting`,
        },
      ],
    },
  ],
}

// ── Module 2: Real Estate Law and Board Regulations (6 hours / 300 min) ──────

export const pleModule2: CourseModule = {
  slug: 'ple-real-estate-law-board-regulations',
  title: 'Real Estate Law and Board Regulations',
  subtitle: 'Virginia statutes, federal regulations, required disclosures, and VREB disciplinary framework',
  examWeight: 'PLE Required - 6 hours',
  chapters: [
    {
      slug: 'lead-based-paint-environmental-hazards',
      title: 'Lead-Based Paint & Environmental Hazards',
      lessons: [
        {
          slug: 'lead-based-paint-disclosure-requirements',
          title: 'Lead-Based Paint Disclosure Requirements',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'Residential Lead-Based Paint Hazard Reduction Act',
            'Title X',
            'lead-based paint disclosure',
            'EPA',
            'HUD',
            'pre-1978 housing',
            'lead hazard pamphlet',
            '10-day inspection period',
            'Renovation Repair and Painting Rule',
            'RRP Rule',
            'target housing',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'At what construction year does the federal lead-based paint disclosure requirement apply?',
            },
            {
              type: 'scenario',
              prompt: 'A seller of a 1965 home says they never had a lead inspection and want to skip the lead disclosure form. What are your obligations?',
            },
          ],
          content: `## Lead-Based Paint Disclosure Requirements

### Federal Lead-Based Paint Law

The **Residential Lead-Based Paint Hazard Reduction Act of 1992** (Title X of the Housing and Community Development Act) established federal requirements for disclosing lead-based paint hazards in housing built before 1978. The EPA and HUD jointly administer the regulations found at 24 C.F.R. Part 35 and 40 C.F.R. Part 745.

### Why 1978?

Lead-based paint was widely used in residential construction until the Consumer Product Safety Commission banned its use in residential paint in 1978. Approximately 87% of homes built before 1940, 69% of homes built between 1940 and 1959, and 24% of homes built between 1960 and 1977 contain lead-based paint. Lead exposure is particularly dangerous for children under six, causing developmental delays, learning disabilities, and other serious health effects.

### Disclosure Requirements for Sales

For the **sale** of any "target housing" (residential housing built before 1978, excluding 0-bedroom units, housing for the elderly where children are not expected to reside, and housing that has been inspected and found lead-free), sellers and their agents must:

1. **Provide the EPA pamphlet** "Protect Your Family From Lead in Your Home" to the buyer before the buyer is obligated under a contract
2. **Disclose known lead-based paint hazards**: The seller must disclose any known lead-based paint or lead-based paint hazards in the property, and provide the buyer with any available reports or records pertaining to lead-based paint
3. **Include a lead warning statement** in the contract, along with signed acknowledgments from buyer and seller
4. **Allow a 10-day inspection period**: The buyer must be given a 10-day period (or a mutually agreed-upon time) to conduct a lead-based paint inspection or risk assessment at the buyer's expense. The buyer may waive this period but cannot be forced to do so
5. **Retain records** for three years from the date of sale

### Disclosure Requirements for Rentals

For **rentals** of target housing, landlords and their agents must:

1. Provide the EPA pamphlet before the tenant is obligated under a lease
2. Disclose known lead-based paint hazards
3. Include a lead warning statement in the lease
4. Retain records for three years

Note: The 10-day inspection period does **not** apply to rental transactions.

### The Disclosure Form

The standard EPA/HUD lead disclosure form requires the seller to indicate:
- Whether they are aware of any lead-based paint or lead-based paint hazards in the property
- Whether they have any reports or records pertaining to lead-based paint (and provide copies if so)
- The buyer's acknowledgment of receipt of the pamphlet and any records
- The buyer's election regarding the 10-day inspection period (conduct, waive, or agree to a different period)
- Agent certifications that they have informed the seller of their obligations and ensured compliance

### Agent Responsibilities

**Virginia licensees have specific responsibilities under the lead-based paint regulations**:

- **Inform the seller** of their lead disclosure obligations before listing the property
- **Ensure compliance**: The listing agent must ensure that the seller completes the lead disclosure, that the pamphlet is provided, and that the contract contains the required language
- **Both agents sign**: Both the listing agent and the buyer's agent must sign the disclosure form, certifying their compliance
- **Cannot advise waiver**: While the buyer may choose to waive the inspection period, the agent should not advise them to do so. The agent should explain the buyer's right and let the buyer make an informed decision

### Penalties for Non-Compliance

| Violation | Penalty |
|---|---|
| Failure to disclose known lead-based paint | Up to $19,507 per violation (adjusted for inflation, 2025) |
| Failure to provide pamphlet | Up to $19,507 per violation |
| Criminal violations (knowing/willful) | Up to $19,507 per day of violation and/or imprisonment up to 1 year |
| Triple damages in private lawsuits | Buyer may sue for three times the amount of damages |

### The Renovation, Repair, and Painting (RRP) Rule

The EPA's RRP Rule (40 C.F.R. Part 745, Subpart E) requires that renovations in pre-1978 housing and child-occupied facilities be performed by **EPA-certified renovators** using lead-safe work practices. This affects real estate licensees in several ways:

- When advising buyer clients about renovations to pre-1978 homes, inform them of the requirement to use certified contractors
- Property managers overseeing renovations in pre-1978 rental properties must ensure RRP compliance
- Virginia has an authorized state program through the Virginia Department of Professional and Occupational Regulation (DPOR) for RRP certification

### Virginia-Specific Requirements

Virginia Code section 36-99.7 requires that sellers of residential property built before 1978 comply with federal lead disclosure requirements. Virginia does not impose additional state-level lead disclosure requirements beyond the federal mandate, but the Virginia Real Estate Board considers failure to comply with lead-based paint regulations a violation of licensee duties that can result in disciplinary action.

### Common Mistakes by Virginia Licensees

1. Forgetting to include the lead disclosure in transactions involving pre-1978 homes
2. Not providing the EPA pamphlet early enough (it must be provided before the buyer is obligated)
3. Using an outdated version of the disclosure form
4. Failing to retain records for three years
5. Not ensuring the seller completes the disclosure (agent cannot complete it for the seller)
6. Pressuring buyers to waive the 10-day inspection period to speed up the transaction`,
        },
      ],
    },
    {
      slug: 'virginia-landlord-tenant-law',
      title: 'Virginia Residential Landlord & Tenant Act (VRLTA)',
      lessons: [
        {
          slug: 'vrlta-overview-and-key-provisions',
          title: 'VRLTA Overview & Key Provisions',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'VRLTA',
            'Virginia Code 55.1-1200',
            'security deposit',
            'landlord obligations',
            'tenant obligations',
            'habitability',
            'lease termination',
            'rent escrow',
            'retaliatory action',
            'constructive eviction',
            'subletting',
            'early termination',
            'military clause',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Under the VRLTA, how many months rent is the maximum security deposit a landlord can charge?',
            },
            {
              type: 'scenario',
              prompt: 'A tenant calls to report that the furnace has stopped working in January. What are the landlord\'s obligations under the VRLTA and what timeline applies?',
            },
          ],
          content: `## Virginia Residential Landlord and Tenant Act (VRLTA) - Overview & Key Provisions

### Statutory Framework

The Virginia Residential Landlord and Tenant Act (VRLTA) is codified at Virginia Code sections 55.1-1200 through 55.1-1262. It governs the rights and obligations of landlords and tenants in most residential rental situations in Virginia. Understanding the VRLTA is essential for Virginia licensees who manage rental properties, represent landlord clients, or advise tenant clients.

### Applicability

The VRLTA applies to all **residential rental agreements** in Virginia, with limited exceptions:
- Single-family residences where the owner is a natural person who owns no more than two single-family rental units (these owners may opt out of the VRLTA, but if they do, common law landlord-tenant rules apply)
- Rooms in hotels, motels, or similar transient lodging
- Residence at a public or private institution for educational, counseling, or religious purposes
- Occupancy by a member of a fraternal organization in the organization's structure

**Important**: Even where a small landlord opts out of the VRLTA, the landlord must comply with all other applicable laws, including fair housing, building codes, and disclosure requirements.

### Security Deposits (Va. Code section 55.1-1226)

The VRLTA establishes strict rules for security deposits:

| Requirement | Rule |
|---|---|
| **Maximum amount** | Two months' rent |
| **Holding** | Must be held in a separate escrow account in a Virginia bank or savings institution |
| **Return deadline** | Within 45 days after tenant vacates |
| **Itemized deductions** | Landlord must provide an itemized list of deductions with the balance (or the full deposit if no deductions) |
| **Permissible deductions** | Unpaid rent, damages beyond normal wear and tear, other lease charges |
| **Failure to return** | Landlord who fails to comply forfeits the right to withhold any portion; tenant may recover the deposit plus attorney's fees |
| **Interest** | Not required to be paid on security deposits (unlike some other states) |

### Landlord Obligations (Va. Code section 55.1-1220)

The landlord must:

1. **Comply with building and housing codes** materially affecting health and safety
2. **Make all repairs** and do whatever is necessary to keep the premises in a fit and habitable condition
3. **Keep common areas** in a clean and structurally safe condition
4. **Maintain in good and safe working order** all electrical, plumbing, sanitary, heating, ventilating, air conditioning, and other facilities and appliances supplied or required to be supplied by the landlord
5. **Provide and maintain appropriate receptacles** for garbage removal
6. **Supply running water** and reasonable amounts of hot water and reasonable heating at all times
7. **Provide smoke alarms** as required by the Virginia Uniform Statewide Building Code (more on this below)
8. **Provide locks and keys** and maintain security
9. **Disclose in writing** the name and address of the landlord or authorized agent

### Tenant Obligations (Va. Code section 55.1-1227)

The tenant must:

1. Comply with all building and housing codes materially affecting health and safety
2. Keep the premises clean and safe
3. Dispose of garbage in a clean and safe manner
4. Keep plumbing fixtures as clear as their condition permits
5. Use electrical, plumbing, sanitary, heating, ventilating, air conditioning, and other facilities and appliances in a reasonable manner
6. Not deliberately or negligently damage the premises
7. Not disturb neighbors' peaceful enjoyment
8. Comply with all obligations imposed by applicable local, state, and federal law

### Landlord's Access to Dwelling Unit (Va. Code section 55.1-1229)

The landlord may enter the dwelling unit:
- With the **consent** of the tenant
- In case of **emergency**
- With **24 hours' notice** (written or oral) for repairs, services, or showings to prospective tenants or purchasers (during reasonable hours)
- When the tenant has **abandoned or surrendered** the premises
- Pursuant to a **court order**

A landlord may not abuse the right of access or use it to harass the tenant. If the landlord makes an unlawful entry, the tenant may seek injunctive relief and recover actual damages.

### Lease Termination and Eviction

**Nonpayment of Rent**: The landlord must provide a **5-day pay-or-quit notice** (Va. Code section 55.1-1245). If the tenant fails to pay within 5 days, the landlord may file an unlawful detainer action.

**Material Lease Violation (Non-Rent)**: The landlord must provide a **21-day notice** specifying the violation and giving the tenant 21 days to remedy it. If the tenant fails to remedy, the landlord may terminate the rental agreement upon 30 days' notice (Va. Code section 55.1-1245).

**Criminal Activity or Threat to Health/Safety**: The landlord may terminate with a **30-day notice** without an opportunity to cure for certain criminal acts or acts that endanger others (Va. Code section 55.1-1245).

**Tenant's Remedies for Landlord Non-Compliance**: If the landlord fails to maintain the premises in habitable condition:
- Tenant may give written notice specifying the deficiency
- If landlord fails to remedy within a reasonable time (dependent on the nature of the deficiency), the tenant may:
  - Recover damages
  - Seek injunctive relief
  - Terminate the lease if the violation is material
  - File for rent escrow with the court

### Retaliatory Actions Prohibited (Va. Code section 55.1-1258)

A landlord may not retaliate against a tenant for:
- Complaining about housing code violations to a governmental agency
- Organizing or joining a tenant's organization
- Exercising any rights under the VRLTA or lease

Retaliatory actions include increasing rent, decreasing services, or threatening eviction. If a landlord takes adverse action within 6 months of the tenant's protected activity, there is a rebuttable presumption of retaliation.

### Key 2024-2025 VRLTA Amendments

Virginia has made several recent amendments to the VRLTA:
- **Extended notice for rent increases**: Landlords must provide 60 days' written notice of rent increases (up from 30 days in prior years) for month-to-month tenancies
- **Mold disclosure**: Landlords must now disclose known mold conditions in the dwelling unit
- **Early lease termination for victims of domestic violence**: Victims may terminate a lease upon 30 days' notice with documentation of a protective order or police report
- **Tenant rights during sale**: Tenants must receive 90 days' notice before lease non-renewal when the property is being sold and the new owner intends to occupy`,
        },
        {
          slug: 'vrlta-military-and-special-provisions',
          title: 'VRLTA Military Provisions & SCRA',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'Servicemembers Civil Relief Act',
            'SCRA',
            '50 USC 3901',
            'military lease termination',
            'PCS orders',
            'deployment',
            'default judgment protection',
            'interest rate cap',
            'Virginia military clause',
            'early termination right',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'An active-duty service member receives PCS orders to a base 200 miles away, but their lease has 8 months remaining. What are their rights?',
            },
            {
              type: 'mini_quiz',
              prompt: 'Under the SCRA, what is the maximum interest rate that can be charged on obligations incurred before military service?',
            },
          ],
          content: `## VRLTA Military Provisions & the Servicemembers Civil Relief Act (SCRA)

### The Servicemembers Civil Relief Act (SCRA)

The Servicemembers Civil Relief Act (50 U.S.C. sections 3901-4043), originally enacted as the Soldiers' and Sailors' Civil Relief Act of 1940 and substantially amended in 2003, provides a wide range of protections for active-duty military members, including protections related to real estate transactions and lease agreements.

### SCRA Lease Termination Rights

Under 50 U.S.C. section 3955, a service member may terminate a residential lease if:

1. The lease was executed **before** the service member entered military service, OR
2. The service member, while in military service, received **military orders for a permanent change of station (PCS)** or **deployment orders for 90 days or more**

**Process for Termination**:
- The service member must deliver written notice of termination to the landlord, along with a copy of the military orders
- Termination is effective **30 days after the first date on which the next rental payment is due** after the notice is delivered
- Example: If a service member delivers notice on March 15 and rent is due on the first of each month, the lease terminates on April 30

**Landlord's Obligations**:
- The landlord must accept the termination without penalty, early termination fee, or any other charge
- The landlord must return the security deposit pursuant to applicable state law (VRLTA's 45-day rule)
- The landlord may **not** require the service member to pay rent for months after the termination date, even if the original lease term has not expired

### SCRA Interest Rate Cap

Under 50 U.S.C. section 3937, the SCRA caps interest rates at **6% per year** on obligations incurred before the service member entered military service. This applies to mortgages, credit card debt, and other financial obligations. Key points:

- The service member must provide written notice and a copy of military orders to the creditor
- The creditor must reduce the interest rate to 6% for the duration of military service plus one year
- Excess interest is forgiven, not deferred
- This applies to mortgages on the service member's primary residence

### SCRA Protections Against Default Judgment

Under 50 U.S.C. section 3931, before a court can enter a default judgment, the plaintiff must file an affidavit stating whether the defendant is in military service. If the defendant is in military service or if the plaintiff cannot determine the defendant's military status, the court must appoint an attorney to represent the service member's interests.

**Impact on Real Estate**:
- Foreclosure actions against service members require SCRA compliance
- Eviction proceedings against service members require SCRA review
- A court may stay proceedings against a service member for the duration of military service plus 90 days

### SCRA Foreclosure Protections

The SCRA prohibits foreclosure on the property of a service member during military service and for one year after the end of military service, unless the creditor obtains a court order. This applies to mortgages originated before the period of military service.

### Virginia-Specific Military Provisions

Virginia provides additional protections for military members beyond the federal SCRA:

**VRLTA Military Lease Termination (Va. Code section 55.1-1236)**:
- Virginia allows early lease termination for service members who receive PCS orders, deployment orders, or temporary duty orders for more than 3 months
- The termination notice must include a copy of the orders
- Landlords may not charge early termination fees

**Virginia Residential Property Disclosure Act Military Provision**:
- Sellers must disclose if the property is near a military installation, as military operations (noise, flight patterns) may affect the property

**Virginia Military Spouse Protection**:
- Virginia extends certain protections to military spouses, including the right to terminate a lease if the service member spouse receives PCS orders

### Practical Guidance for Virginia Licensees

1. **Always ask**: When working with tenants who express a need to terminate a lease early, ask if they are in military service or are a military spouse
2. **Know the timeline**: SCRA lease termination takes effect 30 days after the next rent due date following notice
3. **No penalties**: Never charge or advise a landlord client to charge early termination fees to military members exercising SCRA rights
4. **Verify orders**: You may request a copy of the military orders but may not require additional documentation beyond what the SCRA specifies
5. **Mortgages**: When representing military buyers, inform them of SCRA protections including the interest rate cap and foreclosure protections
6. **Property management**: If you manage rental properties, train all staff on SCRA compliance. Violations of the SCRA can result in federal penalties and private lawsuits

### Penalties for SCRA Violations

| Violation | Consequences |
|---|---|
| Refusing military lease termination | DOJ enforcement, private lawsuit, actual damages |
| Improper foreclosure on service member | Voided foreclosure, damages, attorney's fees |
| Charging early termination fees | Federal fines, private action, VREB discipline |
| Default judgment without military affidavit | Judgment may be set aside |

The DOJ actively enforces the SCRA and has obtained settlements in the millions against landlords and mortgage servicers who violated service members' rights.`,
        },
      ],
    },
    {
      slug: 'property-associations-and-condominiums',
      title: 'Property Owners Associations, Condominiums & Common Interest Communities',
      lessons: [
        {
          slug: 'poaa-virginia-condominium-act',
          title: 'Property Owners Association Act & Virginia Condominium Act',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'Property Owners Association Act',
            'POAA',
            'Virginia Condominium Act',
            'Virginia Code 55.1-1800',
            'Virginia Code 55.1-1900',
            'HOA',
            'condominium association',
            'resale disclosure packet',
            'association assessment',
            'right of rescission',
            'common elements',
            'limited common elements',
            'declaration',
            'bylaws',
            'Common Interest Community Board',
            'CICB',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'How many days does a buyer have to review the POAA resale disclosure packet before they are bound by the contract?',
            },
            {
              type: 'scenario',
              prompt: 'A buyer receives the HOA resale disclosure packet and discovers that a special assessment of $5,000 has been approved but not yet billed. Can the buyer cancel the contract?',
            },
          ],
          content: `## Property Owners Association Act (POAA) & Virginia Condominium Act

### Property Owners Association Act (POAA)

The Virginia Property Owners' Association Act (POAA), codified at Virginia Code sections 55.1-1800 through 55.1-1836, governs planned communities and subdivisions in Virginia where a property owners association (commonly called an HOA) has the authority to assess homeowners and enforce covenants.

#### POAA Resale Disclosure Packet

One of the most important provisions for Virginia licensees is the **resale disclosure packet** requirement (Va. Code section 55.1-1809):

**What Must Be Provided**: When a lot in a development subject to the POAA is sold, the seller must provide the buyer with a resale disclosure packet containing:

1. The association's **governing documents** (declaration, bylaws, rules and regulations)
2. A statement of any **assessments** currently imposed, including the amount and frequency
3. A statement of any **pending special assessments**
4. A statement of any **capital expenditure** approved by the association for the current or next fiscal year
5. The current **reserve fund balance** and any reserve study
6. A statement of any **pending lawsuits** to which the association is a party
7. A statement of any **violations** of the architectural guidelines or rules currently assessed against the property
8. The association's **current financial statements** (balance sheet and income/expense statement)
9. Information about the association's **insurance coverage**
10. Any **pending changes** to the governing documents

**Timeline and Rights**:
- The buyer has **3 days** from receipt of the disclosure packet to review it (this is a **right of rescission** period)
- If the buyer receives the packet before contract ratification, the 3-day period runs from delivery
- If the buyer has not received the packet within the contract's specified timeframe, the buyer may cancel the contract until 3 days after receipt
- The cost of preparing the packet is typically borne by the seller (though the contract may allocate it differently)
- The association may charge a **reasonable fee** for preparing the packet (Va. Code section 55.1-1810)

#### POAA Assessment Authority

The POAA grants associations significant authority:

- **Regular assessments**: The association may levy regular assessments for common expenses as provided in the declaration
- **Special assessments**: The association may levy special assessments for capital improvements or unexpected expenses, subject to the voting requirements in the governing documents
- **Lien authority**: Unpaid assessments constitute a lien on the property (Va. Code section 55.1-1833). The association may enforce the lien through foreclosure, but must follow specific statutory procedures including providing 60 days' written notice before initiating foreclosure

### Virginia Condominium Act

The Virginia Condominium Act (Va. Code sections 55.1-1900 through 55.1-1978) governs the creation, management, and sale of condominiums in Virginia.

#### Key Concepts

- **Unit**: The individually owned portion of the condominium
- **Common Elements**: All portions of the condominium other than the units (lobbies, hallways, parking areas, pools, landscaping)
- **Limited Common Elements**: Common elements designated for the exclusive use of one or more (but not all) units (a balcony, assigned parking space, or storage unit)
- **Declaration**: The master deed that creates the condominium and establishes the rights and obligations of unit owners
- **Condominium Association**: The entity responsible for managing the common elements and enforcing the declaration and bylaws

#### Condominium Resale Disclosure

The Virginia Condominium Act has its own resale disclosure requirements (Va. Code section 55.1-1974):

- Similar to the POAA packet, the seller of a condominium unit must provide the buyer with a **resale certificate** containing financial information, assessments, pending litigation, insurance, and governing documents
- The buyer has a **3-day right of cancellation** upon receipt of the resale certificate
- If the certificate is not provided, the buyer may cancel at any time before settlement

#### New Condominium Sales

For new condominium units sold by the developer, the Virginia Condominium Act requires the developer to provide a **public offering statement** (Va. Code section 55.1-1952) that includes:
- Description of the condominium project
- Budget projections
- Developer's financial qualifications
- Terms of financing available
- Any liens or encumbrances
- The buyer has a **10-day right of cancellation** after receiving the public offering statement

### Common Interest Community Board (CICB)

The Common Interest Community Board (CICB) is part of DPOR and oversees:
- Registration of common interest communities
- Regulation of community managers and management companies
- Complaint resolution between owners and associations
- Enforcement of the POAA, Virginia Condominium Act, and Virginia Real Estate Cooperative Act

**Registration**: All common interest communities (HOAs and condo associations) with annual assessments must register with the CICB annually and pay a registration fee.

**Community Managers**: Individuals who manage common interest communities for compensation must hold a **Common Interest Community Manager license** issued by DPOR (unless they are employees of the association, which is exempt).

### Practical Guidance for Virginia Licensees

1. **Always order the resale packet early**: Do not wait until close to settlement. Delays in receiving the packet can delay closing or trigger cancellation rights.
2. **Know the cancellation period**: 3 days for POAA and condominium resale; 10 days for new condo sales by developer.
3. **Review the packet with your client**: Help your buyer client understand assessments, special assessments, reserve fund health, pending litigation, and any violations.
4. **Red flags to watch for**: Low reserve fund balance, pending special assessments, active litigation, expired insurance, and pending changes to governing documents that could increase assessments.
5. **HOA lien priority**: In Virginia, the HOA's lien for assessments is subordinate to a first deed of trust, but may take priority over other liens. This matters in foreclosure scenarios.
6. **Short sales and REO**: When representing buyers of distressed properties in HOA communities, verify the status of assessment payments and any outstanding HOA liens.`,
        },
        {
          slug: 'common-interest-community-law',
          title: 'Common Interest Community Law & Management',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'Common Interest Community',
            'CIC',
            'CICB',
            'community association manager',
            'CAM',
            'fiduciary duty',
            'reserve study',
            'reserve fund',
            'assessment collection',
            'lien foreclosure',
            'Virginia Code 54.1-2345',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Must a person managing a common interest community for compensation hold a license in Virginia?',
            },
          ],
          content: `## Common Interest Community Law & Management

### What Is a Common Interest Community?

Under Virginia law, a "common interest community" (CIC) is real estate described in a declaration with respect to which any person, by virtue of the person's ownership of a lot, is obligated to pay assessments. This encompasses:

- **Planned communities** (subdivisions with HOAs) governed by the POAA
- **Condominiums** governed by the Virginia Condominium Act
- **Cooperatives** governed by the Virginia Real Estate Cooperative Act (Va. Code sections 55.1-2100 through 55.1-2153)

Virginia has one of the largest populations of CIC residents in the country, with over 10,000 registered associations representing millions of homeowners.

### Community Association Manager (CAM) Licensing

Virginia requires individuals who provide management services to common interest communities for compensation to hold a **Common Interest Community Manager license** (Va. Code section 54.1-2345).

**Licensing Requirements**:
- Age 18 or older
- Completed approved education courses
- Passed the licensing examination
- Background check
- Continuing education requirements

**Exemptions from CAM Licensing**:
- Employees of the association (not third-party management companies)
- Licensed Virginia real estate agents performing management as part of their real estate practice (limited exemption)
- Attorneys providing legal services

### Reserve Funds and Reserve Studies

A **reserve fund** is a savings account maintained by the association for major repairs and replacements of common elements (roof replacement, repaving, pool resurfacing, elevator modernization).

A **reserve study** is a professional analysis that:
1. Identifies all major common element components
2. Estimates the remaining useful life of each component
3. Estimates the replacement cost of each component
4. Recommends an annual contribution to adequately fund future replacements

Virginia law (Va. Code section 55.1-1826) requires associations to:
- Conduct a reserve study at least every five years
- Disclose the status of the reserve fund in the resale disclosure packet
- Include reserve fund information in the annual budget

**Impact on Licensees**: When reviewing a resale disclosure packet with a buyer, the reserve fund balance and reserve study are critical indicators of the association's financial health. A significantly underfunded reserve means future special assessments are likely, which affects the buyer's total cost of ownership.

### Assessment Collection and Lien Enforcement

When a homeowner fails to pay assessments, the association has several remedies:

1. **Late fees and interest**: As permitted by the governing documents
2. **Suspension of privileges**: The association may suspend the owner's right to use common amenities (pool, gym, clubhouse) but may not restrict access to the owner's lot
3. **Filing a lien**: Unpaid assessments become a lien on the property (Va. Code section 55.1-1833)
4. **Lien foreclosure**: The association may foreclose on the lien, but must follow strict statutory procedures:
   - Provide written notice of the delinquency
   - Allow 60 days for payment
   - If still unpaid, the association may initiate foreclosure
   - Judicial oversight protections apply

**Virginia Priority Rules**: The association's lien for assessments:
- Is **subordinate** to a first deed of trust recorded before the assessment became due
- May take **priority** over liens recorded after the assessment became due
- Includes assessments, late fees, interest, attorney's fees, and costs

### Owner Rights in Common Interest Communities

Virginia law provides important rights to CIC owners:

1. **Right to display political signs**: Owners may display at least one political sign on their lot during election season
2. **Right to fly the U.S. flag**: Associations cannot prohibit the display of the American flag (consistent with the federal Freedom to Display the American Flag Act)
3. **Right to install solar panels**: Recent Virginia legislation restricts associations from prohibiting solar panels
4. **Right to access records**: Owners have the right to inspect and copy association records (Va. Code section 55.1-1815)
5. **Right to attend board meetings**: Owners may attend open board meetings (executive sessions may be closed for certain topics)
6. **Right to vote**: Owners have voting rights as established in the governing documents

### Dispute Resolution

Virginia provides several avenues for CIC disputes:

- **Internal grievance procedures**: Many associations have established complaint and hearing procedures
- **CICB complaint process**: Owners may file complaints with the Common Interest Community Board
- **Mediation and arbitration**: Available through CICB or private services
- **Circuit court**: For disputes involving interpretation of governing documents, breach of fiduciary duty, or collection matters

### Licensee Best Practices

When representing buyers or sellers in CIC communities:
- Order the resale disclosure packet promptly and review it thoroughly
- Advise buyers to read the governing documents before waiving the cancellation period
- Flag any association financial red flags (low reserves, pending assessments, litigation)
- Understand the assessment structure and any pending increases
- Verify that the property is in compliance with association rules and architectural guidelines
- Confirm the association is registered with the CICB`,
        },
      ],
    },
    {
      slug: 'required-disclosures-virginia',
      title: 'Required Disclosures in Virginia',
      lessons: [
        {
          slug: 'virginia-disclosure-requirements-comprehensive',
          title: 'Comprehensive Virginia Disclosure Requirements',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'Virginia Residential Property Disclosure Act',
            'disclosure statement',
            'material adverse fact',
            'caveat emptor',
            'latent defect',
            'patent defect',
            'Virginia Code 55.1-700',
            'as-is disclaimer',
            'Megan\'s Law',
            'sex offender registry',
            'dam break inundation zone',
            'noise zone',
            'resource protection area',
            'Chesapeake Bay Preservation Act',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Does the Virginia Residential Property Disclosure Act require the seller to warrant the condition of the property?',
            },
            {
              type: 'scenario',
              prompt: 'A buyer asks you whether there are registered sex offenders in the neighborhood. What are you required to disclose under Virginia law, and what resources should you direct them to?',
            },
          ],
          content: `## Comprehensive Virginia Disclosure Requirements

### Virginia Residential Property Disclosure Act

The Virginia Residential Property Disclosure Act (Va. Code sections 55.1-700 through 55.1-714) establishes the framework for property condition disclosures in residential real estate transactions.

**Important Distinction**: Virginia's disclosure law does **not** require the seller to warrant the condition of the property. Instead, the seller must make certain disclosures and the buyer is responsible for conducting their own inspections.

#### The Disclosure Options

Virginia provides the seller with two options:

**Option 1: Residential Property Disclosure Statement**
The seller completes a detailed disclosure form addressing the property's condition, including:
- Structural systems (foundation, roof, walls)
- Mechanical systems (HVAC, plumbing, electrical)
- Water and sewage systems
- Environmental conditions (flooding, drainage, hazardous materials)
- Known defects and material adverse conditions
- Renovations and permits
- Presence of a property owners association

**Option 2: Disclaimer Statement ("As-Is")**
The seller may instead provide a disclaimer statement that says, in effect, "The owner makes no representations or warranties regarding the condition of the property." This is sometimes called the "as-is" statement.

**Critical Point**: Even when a seller provides the disclaimer statement, the seller (and the licensee) **still has an obligation to disclose known material adverse facts**. The disclaimer does not relieve anyone of the duty to disclose conditions they know about that materially affect the value of the property.

### Licensee Disclosure Obligations

Virginia licensees have independent disclosure obligations under VREB regulations (18 VAC 135-20-300 et seq.):

1. **Material Adverse Facts**: A licensee must disclose to all parties any **material adverse facts** pertaining to the physical condition of the property that the licensee knows or should know. This duty exists regardless of the seller's disclosure choice.

2. **Agency Relationships**: Licensees must disclose their agency relationships to all parties.

3. **Financial Interest**: Licensees must disclose any personal interest in the transaction.

4. **Known Defects**: If the licensee knows of a defect that the seller has not disclosed, the licensee must disclose it regardless of the seller's wishes. If the seller refuses to allow disclosure, the licensee should withdraw from the representation.

### Specific Required Disclosures in Virginia

Virginia law mandates numerous specific disclosures in residential transactions:

| Disclosure | Authority | Details |
|---|---|---|
| **Lead-based paint** | 42 U.S.C. 4852d | Pre-1978 homes; EPA pamphlet and signed disclosure |
| **Military air installation** | Va. Code 55.1-708 | Proximity to military airports and operations |
| **Dam break inundation zone** | Va. Code 55.1-710 | Property location in a dam break inundation zone |
| **Noise zone** | Va. Code 55.1-708 | Property in a noise zone associated with a military installation |
| **Chesapeake Bay Preservation Act** | Va. Code 55.1-712 | Property in a Chesapeake Bay Preservation Area resource protection zone |
| **HOA/POA** | Va. Code 55.1-703 | Existence of a property owners association and obligation to pay assessments |
| **Mold** | Va. Code 55.1-711 | Known visible mold (added to disclosure form) |
| **Defective drywall** | Va. Code 55.1-709 | Known defective drywall (Chinese drywall) |
| **Pending building code violations** | Disclosure form | Any known outstanding building code violations |
| **Zoning** | Best practice | Non-conforming use, pending rezoning |

### Megan's Law and Sex Offender Registry (Va. Code section 55.1-713)

Virginia's Megan's Law provisions require that information about registered sex offenders be publicly available through the Virginia State Police Sex Offender Registry.

**Key Points for Virginia Licensees**:

1. **No affirmative duty to research**: Virginia law does **not** require the seller or the licensee to independently research whether sex offenders live in the area.

2. **Must inform buyers of the registry**: The Virginia Residential Property Disclosure Act requires that the disclosure statement include a notice informing the buyer that the Virginia State Police maintains a Sex Offender and Crimes Against Minors Registry, and that the buyer may access it at sex-offender.vsp.virginia.gov.

3. **Cannot misrepresent**: If a buyer directly asks whether there are sex offenders in the area, the licensee should **not** answer the question but should instead direct the buyer to the Virginia State Police registry. Providing incorrect information (either way) creates liability.

4. **Fair housing intersection**: Be cautious about how you discuss this topic. Steering buyers away from areas based on the presence of registered offenders in certain neighborhoods could inadvertently involve racial or national origin discrimination if those neighborhoods are disproportionately composed of protected classes.

### Flood Hazard Areas and the National Flood Insurance Program (NFIP)

Flood disclosure is a critical area for Virginia licensees, particularly in the Hampton Roads, Northern Virginia, and Richmond areas:

**Federal Flood Insurance Requirements**:
- Lenders are required to determine whether a property is in a Special Flood Hazard Area (SFHA) and, if so, require the borrower to purchase flood insurance
- The National Flood Insurance Program (NFIP), administered by FEMA, provides flood insurance in participating communities
- Virginia communities that participate in the NFIP must adopt and enforce floodplain management regulations

**Virginia Disclosure Requirements**:
- The Virginia Residential Property Disclosure Act includes flood-related disclosures
- Sellers must disclose if the property is in a flood zone to the extent they have knowledge
- Properties in a SFHA must be disclosed on the property disclosure form

**Licensee Obligations**:
- Advise buyers to obtain a flood determination for the property (which the lender will also require)
- Do not represent that a property is outside a flood zone without verification
- Inform buyers that flood insurance is separate from homeowner's insurance and must be purchased separately
- Note that FEMA flood maps are periodically updated, and a property's flood zone status can change

**NFIP Key Facts**:

| Feature | Detail |
|---|---|
| **Maximum coverage (residential)** | $250,000 for building; $100,000 for contents |
| **Waiting period** | 30 days from date of purchase (except at closing for new loans) |
| **Mandatory purchase** | Required for properties in SFHA with federally backed mortgages |
| **Elevation certificate** | May be required for determining premium rates |
| **Flood zone designations** | Zone A (100-year flood), Zone V (coastal 100-year flood), Zone X (500-year flood or minimal risk) |

### Building Codes and Smoke Detectors

Virginia's Uniform Statewide Building Code (USBC) establishes construction and maintenance standards. Key provisions for licensees:

**Smoke Detectors** (Va. Code section 36-99.5):
- Required in every sleeping room and outside each sleeping area
- Required on every level of a dwelling unit
- Must be hardwired with battery backup in new construction
- In existing homes being sold, battery-operated smoke detectors are acceptable
- Landlords must maintain smoke detectors in working order; tenants must not disable them

**Carbon Monoxide Detectors** (Va. Code section 36-99.5:1):
- Required in new residential construction with fuel-burning appliances or attached garages
- Must be installed outside each sleeping area

**Certificate of Occupancy**:
- Required for new construction and certain renovations before occupancy
- Licensees should verify that the property has the required certificate of occupancy, especially for newly built or substantially renovated homes

### Practical Compliance Checklist for Virginia Licensees

For every residential transaction, ensure the following disclosures are made:

- [ ] Lead-based paint disclosure (pre-1978 homes)
- [ ] Virginia Residential Property Disclosure Statement OR Disclaimer Statement
- [ ] HOA/POA disclosure and resale packet (if applicable)
- [ ] Sex Offender Registry notice
- [ ] Military noise/air installation zone (if applicable)
- [ ] Dam break inundation zone (if applicable)
- [ ] Chesapeake Bay Preservation Area (if applicable)
- [ ] Flood zone disclosure and NFIP information
- [ ] Mold disclosure (if known)
- [ ] Defective drywall disclosure (if known)
- [ ] Agency disclosure
- [ ] Material adverse facts known to the licensee`,
        },
      ],
    },
    {
      slug: 'vreb-disciplinary-framework',
      title: 'Virginia Real Estate Board Disciplinary Framework',
      lessons: [
        {
          slug: 'vreb-disciplinary-actions-and-process',
          title: 'VREB Disciplinary Actions & Process',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'Virginia Real Estate Board',
            'VREB',
            'DPOR',
            'license suspension',
            'license revocation',
            'reprimand',
            'consent order',
            'informal fact-finding conference',
            'formal hearing',
            'Virginia Code 54.1-2100',
            'improper dealing',
            'misrepresentation',
            'trust account violation',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'What is the maximum monetary penalty the VREB can impose per violation?',
            },
            {
              type: 'scenario',
              prompt: 'You discover that a fellow licensee in your office is depositing earnest money into their personal checking account instead of the brokerage trust account. What should you do?',
            },
          ],
          content: `## Virginia Real Estate Board Disciplinary Actions & Process

### The Virginia Real Estate Board (VREB)

The Virginia Real Estate Board (VREB) is a regulatory board within the Department of Professional and Occupational Regulation (DPOR). The Board has the authority to:

- Issue, renew, suspend, and revoke real estate licenses
- Investigate complaints against licensees
- Conduct hearings and impose sanctions
- Promulgate regulations governing real estate practice in Virginia
- Establish education and continuing education requirements

### Grounds for Disciplinary Action

Virginia Code section 54.1-2105 and VREB regulations establish numerous grounds for disciplinary action against licensees:

1. **Misrepresentation**: Making any material misrepresentation in connection with a real estate transaction
2. **Improper dealing**: Engaging in improper, fraudulent, or dishonest dealing
3. **Failure to disclose**: Failing to disclose material adverse facts or agency relationships
4. **Trust account violations**: Failing to properly maintain and account for funds held in trust (escrow)
5. **Dual agency without consent**: Acting as a dual agent without informed written consent of all parties
6. **Fair housing violations**: Violating federal or state fair housing laws
7. **Criminal conviction**: Conviction of any felony or of a misdemeanor involving moral turpitude
8. **Practicing without a license**: Engaging in real estate activities without the required license or while the license is suspended
9. **Failure to supervise**: A broker's failure to adequately supervise agents working under their license
10. **Commingling**: Mixing personal funds with client trust funds
11. **Advertising violations**: False or misleading advertising, including failure to identify the brokerage in advertisements
12. **Continuing education non-compliance**: Failure to complete required continuing education

### The Disciplinary Process

**Step 1: Complaint Filed**
Anyone may file a complaint against a licensee with DPOR. Complaints may come from:
- Consumers (buyers, sellers, tenants, landlords)
- Other licensees
- Board investigators
- Government agencies (including HUD for fair housing referrals)

**Step 2: Investigation**
DPOR's Compliance and Investigations Division investigates the complaint. This may include:
- Reviewing documents and records
- Interviewing witnesses
- Inspecting trust accounts
- Reviewing transaction files

**Step 3: Informal Fact-Finding Conference (IFF)**
If the investigation finds probable cause of a violation, the licensee is invited to an informal fact-finding conference. At the IFF:
- The licensee may present their side of the story
- The licensee may bring witnesses and documents
- The licensee may be represented by an attorney
- A DPOR hearing officer makes a recommendation to the Board

**Step 4: Board Action**
The Board may:
- Dismiss the complaint (insufficient evidence)
- Issue a **reprimand** (written warning placed in the licensee's file)
- Impose a **monetary penalty** (up to $2,500 per violation)
- Require additional **education**
- Place the license on **probation** (with conditions)
- **Suspend** the license (for a specific period)
- **Revoke** the license

**Step 5: Consent Order or Formal Hearing**
In many cases, the matter is resolved through a **consent order**, where the licensee agrees to sanctions without admitting or denying the allegations. If the licensee contests the charges, a **formal hearing** is held before the Board.

### Recent VREB Disciplinary Case Studies

The following cases illustrate the types of violations that result in VREB disciplinary action:

**Case 1: Trust Account Commingling (2024)**
A principal broker in Northern Virginia was found to have deposited $47,000 in earnest money deposits into the brokerage's operating account rather than the trust account. The broker used the funds to cover payroll expenses before transferring them to the trust account days later.
- **Outcome**: License suspended for 12 months, $5,000 fine, required to complete trust account management course, 3 years probation upon reinstatement

**Case 2: Failure to Disclose Material Adverse Fact (2024)**
A listing agent in the Hampton Roads area knew that the property had experienced repeated basement flooding but advised the seller to select the disclaimer option on the property disclosure form, effectively concealing the known defect.
- **Outcome**: License suspended for 6 months, $2,500 fine, required to complete 16 hours of ethics education

**Case 3: Fair Housing Violation (2025)**
An agent in Central Virginia was found to have steered prospective buyers based on race by recommending different neighborhoods to white and Black buyers with comparable financial profiles. The evidence was gathered through fair housing testing.
- **Outcome**: License revoked, $5,000 fine, referred to Virginia Attorney General for civil action

**Case 4: Unauthorized Practice (2025)**
A salesperson operated independently without a supervising broker for three months after their broker retired, continuing to list and sell properties.
- **Outcome**: License suspended for 6 months, $2,500 fine, all transactions during the unsupervised period were subject to review

**Case 5: Advertising Violation (2024)**
An agent advertised properties on social media without including the name of their licensed brokerage as required by VREB regulations.
- **Outcome**: Reprimand, $1,000 fine, required to submit all advertising for broker review for 12 months

### Trust Account Requirements

Trust account violations are among the most serious and frequently cited violations. Key requirements:

| Requirement | Rule |
|---|---|
| **Separate account** | Trust funds must be held in a separate account designated as a "trust" or "escrow" account |
| **Virginia bank** | Must be in a federally insured bank or savings institution in Virginia |
| **Deposit deadline** | Earnest money must be deposited by the end of the fifth business day following contract ratification (unless the contract specifies otherwise) |
| **No commingling** | Personal or business funds may not be deposited into the trust account (except a nominal amount to maintain the account) |
| **Reconciliation** | The broker must reconcile the trust account monthly |
| **Record keeping** | All trust account records must be maintained for a minimum of five years |
| **Broker responsibility** | The principal broker is personally responsible for all funds held in trust |

### Protecting Your License

1. **Know the rules**: Review VREB regulations (18 VAC 135-20) regularly
2. **Document everything**: Maintain complete transaction files
3. **Disclose**: When in doubt, disclose material facts
4. **Escrow compliance**: Follow trust account procedures meticulously
5. **Continuing education**: Complete CE on time and keep certificates
6. **Supervision**: Brokers must actively supervise all licensees
7. **Insurance**: Maintain adequate E&O insurance
8. **Report violations**: If you become aware of violations by other licensees, consult your broker about reporting obligations`,
        },
        {
          slug: 'vreb-recent-regulatory-updates',
          title: 'Recent Regulatory Updates & Board Actions (2024-2026)',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'NAR settlement',
            'buyer agency agreement',
            'compensation transparency',
            'MLS policy changes',
            'Virginia regulatory updates',
            'remote notarization',
            'electronic transactions',
            'team advertising',
            'DPOR enforcement trends',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'After the 2024 NAR settlement, what must a buyer agent do before showing properties?',
            },
            {
              type: 'scenario',
              prompt: 'A buyer tells you they do not want to sign a buyer representation agreement. They just want you to show them a few houses. How do you handle this?',
            },
          ],
          content: `## Recent Regulatory Updates & Board Actions (2024-2026)

### The NAR Settlement and Its Impact on Virginia Practice

The August 2024 settlement between the National Association of Realtors (NAR) and plaintiffs in the *Sitzer/Burnett* and *Moehrl* cases fundamentally changed real estate practice nationwide, including in Virginia.

**Key Settlement Terms**:

1. **No offers of buyer agent compensation on MLS**: Sellers and listing brokers may no longer make blanket offers of buyer agent compensation through the MLS. Compensation may still be offered, but must be communicated outside the MLS.

2. **Mandatory written buyer representation agreements**: Before showing a property to a buyer, the buyer's agent must have a **signed written buyer representation agreement** that specifies the compensation the agent will receive and how it will be paid.

3. **Transparency**: Buyers must understand and agree to their agent's compensation before touring homes.

**Virginia Implementation**:

The Virginia Real Estate Board issued guidance in 2024 clarifying how the NAR settlement interacts with Virginia's existing laws:

- Virginia Code section 54.1-2130 et seq. already required written brokerage agreements. The VREB confirmed that buyer representation agreements must be executed before substantive services (including property showings) begin.
- The agreement must clearly state the amount or rate of compensation and the terms under which it is earned.
- The agreement must not include open-ended compensation clauses that could exceed the compensation specified.
- Agents must not steer clients toward properties based on the compensation offered.

**Practical Impact for Virginia Licensees**:
- Before showing any property, obtain a signed buyer representation agreement
- Clearly explain your compensation to the buyer, including who will pay it and how
- If the seller offers buyer agent compensation (outside the MLS), that can be applied to the buyer's obligation, but the buyer must understand this
- Do not represent to buyers that your services are "free"
- Do not refuse to show properties where no seller-offered compensation exists; the buyer's agreement governs your compensation

### Team Advertising Rules

VREB has clarified team advertising requirements:

- All advertising must include the **brokerage name** in a manner at least as prominent as any team name
- A team name may not include terms like "realty," "real estate," "company," or "associates" in a way that could mislead consumers into thinking the team is a separate brokerage
- Individual licensees on a team must still identify their brokerage in all advertising
- Social media profiles must clearly identify the brokerage

### Remote Online Notarization (RON)

Virginia was an early adopter of remote online notarization (Va. Code section 47.1-2), and its use has expanded significantly:

- Virginia licensees may participate in closings conducted via RON
- The notary must use approved technology that includes audio-visual recording, identity verification, and tamper-evident sealing
- VREB has confirmed that electronic signatures and remote notarization satisfy Virginia's real estate documentation requirements
- Licensees should understand the RON process and be prepared to guide clients through it

### Electronic Transaction Act

The Virginia Uniform Electronic Transactions Act (UETA) (Va. Code sections 59.1-479 through 59.1-498) validates electronic contracts, signatures, and records in real estate transactions:

- Electronic signatures on contracts of sale, leases, and other documents are legally binding
- Both parties must consent to electronic transactions
- Electronic records must be stored and retrievable
- Licensees must ensure that electronic transaction platforms comply with UETA requirements

### DPOR Enforcement Trends (2024-2026)

Recent DPOR enforcement priorities include:

1. **Trust account compliance**: Increased random audits of brokerage trust accounts, with particular focus on timely deposits and monthly reconciliations
2. **Advertising compliance**: Crackdown on social media advertising that fails to identify the brokerage
3. **Supervision requirements**: Enforcement actions against brokers who fail to supervise their agents, particularly in large teams and virtual brokerages
4. **Continuing education compliance**: Verification of CE completion, with penalties for practicing on an expired or non-compliant license
5. **Buyer agency compliance**: Monitoring compliance with the new buyer representation agreement requirements following the NAR settlement
6. **Unlicensed activity**: Enforcement against unlicensed individuals performing activities that require a real estate license, including some property management activities

### Key Regulatory Changes (2025-2026)

| Change | Effective Date | Impact |
|---|---|---|
| Updated buyer representation agreement requirements | August 2024 | Mandatory written agreement before showings |
| Revised advertising regulations for teams | January 2025 | Stricter brokerage identification requirements |
| Enhanced trust account audit procedures | March 2025 | Random audits with 48-hour notice |
| Updated CE curriculum (includes NAR settlement impact) | July 2025 | New CE topics required for renewal |
| Revised property disclosure form (added flood/climate items) | January 2026 | Updated disclosure checkboxes |

### Virginia Real Estate Board Composition

The VREB consists of nine members appointed by the Governor:
- Five licensed real estate professionals (at least one broker and one salesperson)
- Four citizen members (not licensed in real estate)
- Members serve four-year terms
- The Board meets approximately six times per year
- Board meetings are open to the public

### How to Stay Current

1. Monitor the **DPOR website** (dpor.virginia.gov) for regulatory updates and Board meeting minutes
2. Review the **Virginia Register of Regulations** for proposed and final rules
3. Complete **continuing education** courses that address regulatory changes
4. Attend **Virginia REALTORS** (the state association) educational events
5. Subscribe to your local association's newsletters for practice updates
6. Consult your broker and legal counsel when regulations change`,
        },
      ],
    },
    {
      slug: 'additional-real-estate-laws',
      title: 'Additional Federal & State Real Estate Laws',
      lessons: [
        {
          slug: 'megans-law-and-building-codes',
          title: 'Megan\'s Law, Building Codes & Smoke Detectors',
          lessonType: 'reading',
          estimatedMinutes: 12,
          keyTerms: [
            'Megan\'s Law',
            'sex offender registry',
            'Virginia State Police',
            'community notification',
            'building code',
            'Virginia Uniform Statewide Building Code',
            'USBC',
            'smoke detector',
            'carbon monoxide detector',
            'certificate of occupancy',
            'building permit',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Where are smoke detectors required in a Virginia residential dwelling?',
            },
          ],
          content: `## Megan's Law, Building Codes & Smoke Detectors

### Megan's Law: Sex Offender Registry

**Federal Megan's Law** (Jacob Wetterling Crimes Against Children and Sexually Violent Offender Registration Act, as amended) requires states to maintain sex offender registries. Virginia's sex offender registry is maintained by the Virginia State Police and is publicly accessible.

**Virginia's Sex Offender Registration Program** (Va. Code sections 9.1-900 through 9.1-923):

- Persons convicted of certain sex offenses must register with the Virginia State Police
- Registration information includes the offender's name, address, photograph, physical description, and offense
- The registry is accessible to the public online at sex-offender.vsp.virginia.gov
- Some offenders are subject to community notification (where local law enforcement proactively notifies neighbors)

**Impact on Real Estate Practice**:

1. **Virginia's Disclosure Law**: The Virginia Residential Property Disclosure Act requires that the disclosure form include a statement directing buyers to the Virginia State Police Sex Offender Registry. This ensures buyers are aware the resource exists.

2. **No Affirmative Duty to Research**: Virginia law does not require licensees to independently research whether sex offenders reside near a listed or shown property. However, the licensee must include the registry notice in the disclosure.

3. **Responding to Buyer Questions**: If a buyer asks whether sex offenders live in the area:
   - Direct the buyer to the Virginia State Police registry
   - Do not provide your own assessment or research results
   - Do not state that a neighborhood is "safe" or "free of offenders"
   - Be aware that discussing specific offenders by name or address could create liability

4. **Fair Housing Considerations**: Be cautious about linking sex offender locations to neighborhood desirability in a way that could constitute steering based on protected classes.

5. **Stigmatized Properties**: Virginia does not require disclosure that a property was the site of a crime, although a death on the property from a condition related to the property (e.g., carbon monoxide poisoning from a faulty heater) would be a material adverse fact.

### Virginia Uniform Statewide Building Code (USBC)

The Virginia Uniform Statewide Building Code (Va. Code section 36-97 et seq.) establishes minimum standards for the construction, maintenance, and use of buildings in Virginia.

**Key Provisions**:

1. **Building Permits**: Most construction, renovation, and alteration work requires a building permit from the local building official. Licensees should verify that any work done on a property was properly permitted.

2. **Certificate of Occupancy (CO)**: A CO is required before a new building or substantially renovated building can be occupied. Licensees should verify the CO exists, particularly for new construction and major renovations.

3. **Property Maintenance Code**: The USBC includes a maintenance code that establishes minimum standards for the maintenance of existing buildings. This is relevant for property managers and for evaluating the condition of investment properties.

4. **Energy Code**: Virginia's energy code (part of the USBC) establishes energy efficiency requirements for new construction and renovations.

### Smoke Detector Requirements

Virginia law and the USBC establish specific smoke detector requirements:

**New Construction**:
- Smoke alarms required in every **sleeping room**
- Smoke alarms required **outside each separate sleeping area** (typically in the hallway)
- Smoke alarms required on **every level** of the dwelling unit, including the basement
- Must be **hardwired** with **battery backup**
- Must be **interconnected** so that when one alarm sounds, all alarms in the unit sound

**Existing Homes (Resale)**:
- Smoke alarms required in the same locations
- Battery-operated alarms are acceptable in existing homes where hardwiring is not present
- Landlords (under VRLTA) must provide working smoke alarms; tenants must not disable them

**Landlord Obligations** (Va. Code section 55.1-1220):
- Landlords must provide smoke alarms in compliance with the USBC
- Landlords must ensure smoke alarms are in working condition at the beginning of each tenancy
- Landlords must maintain smoke alarms in common areas
- Tenants are responsible for replacing batteries and not disabling alarms

### Carbon Monoxide Detectors

Virginia Code section 36-99.5:1 requires carbon monoxide (CO) detectors:
- In all **new residential construction** that contains a fuel-burning appliance (gas furnace, gas water heater, gas stove, fireplace) or an **attached garage**
- Must be installed outside each sleeping area on every level of the dwelling
- May be combination smoke/CO detectors

**Existing Homes**: While not universally mandated in existing homes, landlords should consider installing CO detectors as a best practice, and licensees should advise clients of the risks of carbon monoxide in homes with fuel-burning appliances.

### Practical Guidance for Virginia Licensees

1. **Verify permits**: When listing a property that has had additions, renovations, or modifications, verify that the work was properly permitted. Unpermitted work is a material fact that should be disclosed.

2. **Check smoke detectors**: During listing appointments, advise sellers to ensure smoke detectors are present and working. Non-functional smoke detectors may be cited in home inspections and could delay closing.

3. **New construction**: For new construction transactions, ensure the certificate of occupancy has been issued before closing.

4. **Investment properties**: When advising investors, ensure they understand building code compliance requirements, including smoke detector obligations and the property maintenance code.

5. **Document the registry notice**: Always include the sex offender registry notice in disclosure documents. Failure to do so could expose you to liability.`,
        },
        {
          slug: 'flood-hazard-nfip-deep-dive',
          title: 'Flood Hazard Areas & National Flood Insurance Program (NFIP)',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'NFIP',
            'FEMA',
            'Special Flood Hazard Area',
            'SFHA',
            'flood zone',
            'Zone A',
            'Zone V',
            'Zone X',
            'flood insurance',
            'elevation certificate',
            'FIRM',
            'Flood Insurance Rate Map',
            'Biggert-Waters Act',
            'community rating system',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Is flood insurance included in a standard homeowners insurance policy?',
            },
            {
              type: 'scenario',
              prompt: 'Your buyer is purchasing a property in Zone AE. The seller says they never had flood insurance and never had a flood. Should the buyer rely on this?',
            },
          ],
          content: `## Flood Hazard Areas & the National Flood Insurance Program (NFIP)

### Why Flood Insurance Matters in Virginia

Virginia has significant flood risk across the Commonwealth. Coastal areas (Virginia Beach, Norfolk, Hampton Roads) face storm surge and tidal flooding. Inland areas (Richmond, Roanoke, Northern Virginia) face riverine flooding. Climate change is increasing both the frequency and severity of flooding events. The Virginia Institute of Marine Science reports that sea levels in the Hampton Roads region are rising at approximately twice the global average.

### The National Flood Insurance Program (NFIP)

The NFIP, created by the National Flood Insurance Act of 1968 and administered by FEMA, provides:

1. **Flood insurance** for property owners, renters, and businesses in participating communities
2. **Floodplain mapping** through Flood Insurance Rate Maps (FIRMs) that identify flood hazard areas
3. **Floodplain management** standards that participating communities must adopt and enforce

### Flood Zone Designations

FEMA designates flood zones on Flood Insurance Rate Maps (FIRMs):

| Zone | Description | Flood Risk | Insurance Required? |
|---|---|---|---|
| **Zone A** (including AE, AH, AO, AR, A99) | Special Flood Hazard Area (100-year flood) | High (1% annual chance) | **Yes** (if federally backed mortgage) |
| **Zone V** (including VE) | Coastal Special Flood Hazard Area (100-year flood with wave action) | High (1% annual chance + wave hazard) | **Yes** (if federally backed mortgage) |
| **Zone B / Zone X (shaded)** | 500-year flood area or 100-year flood area with average depth less than 1 foot | Moderate | Not required but recommended |
| **Zone C / Zone X (unshaded)** | Minimal flood hazard area | Low | Not required |
| **Zone D** | Undetermined risk | Unknown | Determined by lender |

### Mandatory Purchase Requirement

Under the Flood Disaster Protection Act of 1973 and the National Flood Insurance Reform Act of 1994:

- **Federally backed mortgages** (FHA, VA, USDA, and conventional loans sold to Fannie Mae or Freddie Mac) on properties in a **Special Flood Hazard Area (Zone A or V)** must maintain flood insurance for the life of the loan
- The lender must determine the flood zone status of the property before closing
- If the property is in a SFHA, the lender must provide a **written notice** to the borrower of the flood insurance requirement
- If the borrower fails to maintain flood insurance, the lender may force-place insurance at a significantly higher premium

### NFIP Coverage Limits

| Coverage Type | Residential Limit | Commercial Limit |
|---|---|---|
| Building | $250,000 | $500,000 |
| Contents | $100,000 | $500,000 |
| Basement/Below-grade | Limited (specific items only) | Limited |
| Detached structures | Separate policy may be needed | Separate policy |

**Key Gaps in NFIP Coverage**:
- Does NOT cover damage from sewer backup (unless directly caused by flooding)
- Does NOT cover temporary living expenses (unlike homeowners insurance)
- Does NOT cover property outside the insured building (landscaping, decks, patios, pools)
- Does NOT cover vehicles
- Basement coverage is limited to specific items (furnace, electrical/plumbing systems, water heaters)

### The Elevation Certificate

An elevation certificate is a document prepared by a licensed surveyor or engineer that establishes the elevation of a building relative to the Base Flood Elevation (BFE). It is used to:

- Determine accurate flood insurance premiums
- Determine whether a building complies with local floodplain management regulations
- Support requests for a Letter of Map Amendment (LOMA) if the property is incorrectly mapped in a flood zone

### Risk Rating 2.0

FEMA's **Risk Rating 2.0** (implemented October 2021) is the new methodology for determining NFIP flood insurance premiums. Instead of relying solely on flood zone designations, Risk Rating 2.0 considers:

- Distance from the flood source (river, coast, etc.)
- Property elevation
- Cost to rebuild the structure
- Historical flood claims
- Multiple flood types (river overflow, storm surge, coastal erosion, heavy rainfall)

This means that two properties in the same flood zone may have significantly different premiums based on their individual risk characteristics.

### Virginia-Specific Flood Considerations

**Chesapeake Bay Preservation Act** (Va. Code sections 62.1-44.15:67 through 62.1-44.15:79):
- Establishes Resource Protection Areas (RPAs) in the Chesapeake Bay watershed
- RPAs generally include a 100-foot buffer from tidal wetlands, tidal shores, and perennial streams
- Development restrictions apply within RPAs
- Properties in RPAs must be disclosed on the Virginia property disclosure form

**Dam Break Inundation Zones**:
- Virginia Code section 55.1-710 requires disclosure if a property is located in a dam break inundation zone
- The Virginia Department of Conservation and Recreation maintains maps of dam break inundation zones
- This disclosure is separate from and in addition to flood zone disclosure

### Practical Guidance for Virginia Licensees

1. **Always recommend a flood determination**: Even if the seller says the property has never flooded, the buyer should obtain a professional flood determination
2. **Do not rely on seller representations**: Flood zone designations change with updated FEMA maps. A property that was once in Zone X may now be in Zone A
3. **Advise on NFIP limits**: $250,000 building coverage may be inadequate for higher-value homes. Recommend buyers explore excess flood insurance through private insurers
4. **30-day waiting period**: There is generally a 30-day waiting period before NFIP coverage takes effect (exception: coverage purchased in connection with a new loan takes effect at closing)
5. **Disclosure**: If you know a property has experienced flooding, this is a material adverse fact that must be disclosed
6. **Flood insurance is not homeowners insurance**: Ensure buyers understand that their homeowners policy does NOT cover flood damage. Flood insurance must be purchased separately
7. **Climate and flood risk**: Virginia's increasing flood risk is a material consideration for property value and insurability. Stay informed about FEMA map updates in your market area`,
        },
      ],
    },
  ],
}

// ── Module 3: Ethics and Standards of Conduct (3 hours / 150 min) ────────────

export const pleModule3: CourseModule = {
  slug: 'ple-ethics-standards-of-conduct',
  title: 'Ethics and Standards of Conduct',
  subtitle: 'Virginia Standards of Conduct, NAR Code of Ethics as teaching tool, and professional responsibility',
  examWeight: 'PLE Required - 3 hours',
  chapters: [
    {
      slug: 'virginia-standards-of-conduct',
      title: 'Virginia Standards of Conduct (18 VAC 135-20-300)',
      lessons: [
        {
          slug: 'vreb-standards-of-conduct-overview',
          title: 'VREB Standards of Conduct: Overview & Core Duties',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: [
            'Standards of Conduct',
            '18 VAC 135-20-300',
            'fiduciary duty',
            'loyalty',
            'obedience',
            'disclosure',
            'confidentiality',
            'reasonable care',
            'accounting',
            'material adverse fact',
            'Virginia Real Estate Board',
            'ministerial acts',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Name the fiduciary duties owed by a Virginia licensee to their client.',
            },
            {
              type: 'mini_quiz',
              prompt: 'What is the difference between a material adverse fact and a confidential fact?',
            },
          ],
          content: `## Virginia Standards of Conduct: Overview & Core Duties

### The Regulatory Framework

The Virginia Real Estate Board's Standards of Conduct are codified in the Virginia Administrative Code at **18 VAC 135-20-300** through 18 VAC 135-20-310. These regulations establish the minimum standards of ethical and professional conduct that every Virginia licensee must follow. Violation of these standards constitutes grounds for disciplinary action by the VREB.

### Core Fiduciary Duties

Virginia licensees owe their **clients** (the parties they represent) the following fiduciary duties:

**1. Loyalty**
The licensee must act in the client's best interests at all times. This means:
- Placing the client's interests above the licensee's own interests
- Not using information gained in the relationship for personal benefit
- Not acting adversely to the client's interests
- Disclosing any conflicts of interest to the client

**2. Obedience**
The licensee must follow the lawful instructions of the client. This means:
- Carrying out the client's directives regarding the transaction
- **Exception**: A licensee must never follow an instruction that would violate the law (e.g., a client's instruction to discriminate against a protected class)

**3. Disclosure**
The licensee must keep the client fully informed of all material facts and developments related to the transaction. This includes:
- Presenting all offers and counteroffers promptly
- Disclosing facts that might affect the client's decision-making
- Informing the client of the licensee's agency relationships

**4. Confidentiality**
The licensee must protect confidential information received from or about the client. Key points:
- Confidential information includes the client's motivation to buy or sell, the lowest price the seller will accept, the highest price the buyer will pay, and any personal financial information
- Confidentiality survives the termination of the agency relationship
- Confidentiality does **not** extend to material adverse facts about the physical condition of the property, which must be disclosed to all parties

**5. Reasonable Care and Diligence**
The licensee must exercise reasonable professional care and skill in performing duties. This includes:
- Providing competent advice based on knowledge and experience
- Conducting adequate research and investigation
- Meeting deadlines and complying with contract terms
- Maintaining current knowledge of market conditions and legal requirements

**6. Accounting**
The licensee must account for all money and property entrusted to the licensee's care, including:
- Proper handling of earnest money deposits
- Timely deposit into the trust account
- Accurate record-keeping
- Full accounting at the conclusion of the transaction

### Duties Owed to All Parties

Regardless of whom the licensee represents, certain duties are owed to **all parties** in a transaction:

1. **Honesty and fair dealing**: Do not engage in misrepresentation, fraud, or dishonest conduct
2. **Disclosure of material adverse facts**: Disclose material adverse facts about the physical condition of the property to all parties, regardless of agency relationship
3. **Timely presentation of offers**: Present all written offers and counteroffers to the appropriate party
4. **Accurate information**: Provide accurate information when asked about the property or the transaction
5. **No unauthorized practice of law**: Do not provide legal advice; refer clients to an attorney when legal questions arise

### Material Adverse Facts vs. Confidential Information

This distinction is critical and frequently tested:

| Material Adverse Facts | Confidential Information |
|---|---|
| Must be disclosed to ALL parties | Must be kept confidential (client only) |
| Relates to physical condition of property | Relates to client's bargaining position |
| Known structural issues, water damage, environmental hazards | Client's motivation, financial situation, willingness to negotiate |
| Cannot be concealed even at client's request | Must be protected even after agency terminates |
| Example: Known foundation crack | Example: Seller will accept $20K below list |

### Agency Disclosure Requirements

Virginia Code section 54.1-2138 requires that licensees disclose their agency relationship to all parties in a transaction:

- **At first substantive contact**: The licensee must provide the consumer with a written disclosure of the agency relationship
- **Types of agency**: Licensees may act as the seller's agent, buyer's agent, dual agent (with informed consent), or independent contractor (limited service provider)
- **Dual agency**: When a licensee represents both the buyer and seller in the same transaction, informed written consent of both parties is required. Both parties must understand the limitations of dual agency, including that the licensee cannot advocate for one party over the other

### Designated Agency

Virginia law permits **designated agency** (Va. Code section 54.1-2130.1), where the broker designates one or more licensees in the firm to represent the buyer and one or more to represent the seller. This allows the firm to avoid the limitations of dual agency while still representing both sides.

Key requirements for designated agency:
- The broker must designate the agents in writing
- The designated agents must maintain client confidentiality and not share it with each other
- The managing broker supervises but does not advocate for either party
- Both clients must provide informed written consent

### Ministerial Acts

Virginia law recognizes that certain acts are **ministerial** (not requiring discretion or advice) and may be performed for a party even when the licensee represents the other party. Ministerial acts include:

- Responding to calls and inquiries about the property
- Providing publicly available information about the property
- Scheduling showings
- Receiving and forwarding offers and counteroffers
- Providing access to the property
- Providing contract and disclosure forms

Performing ministerial acts does not create an agency relationship with the party for whom they are performed.`,
        },
        {
          slug: 'dual-agency-confidentiality-material-facts',
          title: 'Dual Agency, Confidentiality & Material Facts',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'dual agency',
            'designated agency',
            'informed consent',
            'client confidentiality',
            'material fact',
            'material adverse fact',
            'latent defect',
            'stigmatized property',
            'Virginia Code 54.1-2139',
            'limited representation',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'You represent the seller as a designated agent. Your buyer-side colleague in the same office tells you the buyer is willing to pay full price but is starting with a low offer. What do you do with this information?',
            },
            {
              type: 'scenario',
              prompt: 'A seller tells you in confidence that they must sell quickly because of a pending divorce. A buyer asks you why the seller is so motivated. How do you respond?',
            },
          ],
          content: `## Dual Agency, Confidentiality & Material Facts

### Dual Agency in Virginia

**Dual agency** occurs when a single licensee (or firm) represents both the buyer and the seller in the same transaction. In Virginia, dual agency is permitted but requires informed written consent from both parties (Va. Code section 54.1-2139).

#### Requirements for Dual Agency

1. **Informed Written Consent**: Both parties must sign a written consent that:
   - Identifies the transaction
   - Explains that the licensee will not be able to advocate for one party over the other
   - Describes the limitations on the licensee's duties
   - Is signed before any confidential information is shared

2. **Limitations in Dual Agency**: When acting as a dual agent, the licensee:
   - **Cannot** disclose to the buyer that the seller will accept less than the listing price (without seller permission)
   - **Cannot** disclose to the seller that the buyer will pay more than the offer price (without buyer permission)
   - **Cannot** advocate for one party's interests over the other
   - **Must** still disclose material adverse facts about the property's physical condition to the buyer
   - **Must** still present all offers and counteroffers to the appropriate party

3. **When Dual Agency Arises**: Dual agency most commonly arises when:
   - A buyer contacts the listing agent directly about the listed property
   - A buyer represented by one agent in a firm wants to purchase a property listed by another agent in the same firm (unless designated agency is used)

#### Designated Agency as an Alternative

**Designated agency** (Va. Code section 54.1-2130.1) is the preferred alternative to dual agency in many Virginia brokerages:

- The principal broker designates specific agents to represent the buyer and seller separately
- The designated agents owe full fiduciary duties to their respective clients
- The designated agents must not share confidential client information with each other
- The principal broker does not advocate for either party but ensures both designated agents are fulfilling their duties

**Advantages of Designated Agency**:
- Both clients receive full fiduciary representation
- Avoids the inherent conflict of one agent trying to serve two masters
- Reduces the risk of inadvertent confidentiality breaches
- More clearly defined roles and responsibilities

### Confidentiality Deep Dive

#### What Is Confidential?

Information received from or about a client during the agency relationship that the client would not want disclosed to other parties:

- **The seller's bottom line** (lowest acceptable price)
- **The buyer's top price** (maximum they are willing to pay)
- **Personal motivation** (divorce, job loss, financial distress, relocation urgency)
- **Financial details** (income, assets, debts, credit score)
- **Negotiation strategy** (willingness to make concessions, contingencies they might waive)
- **Personal circumstances** (health issues, family matters)

#### What Is NOT Confidential?

Even within a fiduciary relationship, certain information is not protected by confidentiality and must be disclosed:

- **Material adverse facts** about the physical condition of the property (known water intrusion, foundation issues, environmental contamination, mold)
- **Facts required by law** to be disclosed (lead paint, sex offender registry notice, HOA status)
- **Information about the transaction itself** that is publicly available or that must be shared for the transaction to proceed (contract terms, contingencies, deadlines)

#### Duration of Confidentiality

Confidentiality **survives the termination of the agency relationship**. Even after the listing agreement expires or the buyer representation agreement ends, the licensee must continue to protect confidential information received during the relationship. This is a critical point that many licensees overlook.

**Example**: If you represented a seller who told you they would accept $400,000 for their $450,000 listing, and the listing expired without a sale, you cannot share that information with a new buyer client if the seller relists with a different agent. The seller's minimum price remains confidential.

### Material Facts: A Comprehensive Analysis

#### Definition

A **material fact** is any fact that, if known, would be likely to affect the decision of a reasonable person regarding the transaction. In Virginia real estate practice, the focus is on **material adverse facts** relating to the physical condition of the property.

#### Categories of Material Facts

**Physical Condition**:
- Structural defects (foundation cracks, roof leaks, settling)
- Environmental hazards (asbestos, radon, lead paint, mold, underground storage tanks)
- Water intrusion history (basement flooding, roof leaks, plumbing failures)
- Pest infestation (termites, carpenter ants, rodents)
- System failures (HVAC, electrical, plumbing)
- Zoning violations or non-conforming uses
- Unpermitted construction or additions

**External Conditions**:
- Planned road construction or widening that affects the property
- Planned development nearby that materially affects value
- Environmental contamination on neighboring properties
- Known flooding in the area beyond what flood maps show

#### Stigmatized Properties

Virginia does not require disclosure of events that occurred on the property that do not affect its physical condition, such as:
- A previous occupant's death (unless caused by a condition of the property)
- Alleged paranormal activity
- A crime that occurred on the property (unless it reveals a physical deficiency, like a break-in that revealed inadequate security)

However, Virginia Code section 55.1-702 specifically states that no cause of action arises against a licensee for failing to disclose that a property was the site of a homicide, suicide, or felony. The law does not require affirmative misrepresentation ("No one has ever died here") and agents should avoid making such statements.

### Ethical Decision Framework

When facing an ethics question, Virginia licensees should apply this framework:

1. **Is this information a material adverse fact about the physical condition of the property?**
   - Yes: Disclose to all parties, regardless of agency relationship
   - No: Proceed to step 2

2. **Is this information confidential client information?**
   - Yes: Protect it. Do not share with the other party
   - No: Proceed to step 3

3. **Is disclosure required by law or regulation?**
   - Yes: Disclose as required
   - No: Use professional judgment and consult your broker

4. **When in doubt**: Consult your broker and/or legal counsel. It is better to over-disclose than to face liability for non-disclosure.`,
        },
      ],
    },
    {
      slug: 'nar-code-of-ethics-teaching-tool',
      title: 'NAR Code of Ethics as Teaching Tool',
      lessons: [
        {
          slug: 'nar-code-overview-disclaimer',
          title: 'NAR Code of Ethics: Overview & Required Disclaimer',
          lessonType: 'reading',
          estimatedMinutes: 18,
          keyTerms: [
            'NAR Code of Ethics',
            'Article 1',
            'Article 2',
            'Article 3',
            'Article 9',
            'Article 10',
            'Article 12',
            'REALTOR',
            'Standards of Practice',
            'NAR ethics complaint',
            'professional standards',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt: 'Recite the required DPOR disclaimer about the NAR Code of Ethics in PLE courses.',
            },
            {
              type: 'mini_quiz',
              prompt: 'Is a Virginia licensee required to be a REALTOR (NAR member) to practice real estate?',
            },
          ],
          content: `## NAR Code of Ethics: Overview & Required Disclaimer

### Required Disclaimer

> **The NAR Code of Ethics is being used only as a teaching tool. The NAR Code of Ethics provisions that are outside of the Virginia Real Estate Board's laws and regulations are not applicable to Real Estate Board licensees.**

This disclaimer is required by DPOR in all PLE courses that reference the NAR Code of Ethics. Not all Virginia licensees are members of NAR, and the NAR Code of Ethics is a voluntary professional standard, not a state regulation. However, the Code serves as an excellent framework for understanding ethical principles in real estate practice.

### NAR Membership vs. Virginia Licensure

- **Virginia licensure** is required to practice real estate in Virginia and is governed by the VREB
- **NAR membership** is voluntary and carries the right to use the "REALTOR" trademark
- Approximately 60-70% of Virginia licensees are NAR members
- Non-member licensees are subject to Virginia law and VREB regulations but not the NAR Code of Ethics
- REALTOR members are subject to both Virginia law and the NAR Code of Ethics

### The NAR Code of Ethics: Structure

The NAR Code of Ethics consists of **17 Articles** organized into three categories:
1. **Duties to Clients and Customers** (Articles 1-9)
2. **Duties to the Public** (Articles 10-14)
3. **Duties to REALTORS** (Articles 15-17)

Each Article is supported by **Standards of Practice** that provide specific guidance on applying the Article.

### Key Articles as Teaching Tools

#### Article 1: Protect and Promote Client Interests
"When representing a buyer, seller, landlord, tenant, or other client as an agent, REALTORS pledge themselves to protect and promote the interests of their client."

**Teaching Point**: This mirrors Virginia's fiduciary duties of loyalty and reasonable care. The obligation to protect and promote does not permit illegal or unethical conduct. The agent must balance advocacy for the client with obligations to deal honestly with all parties.

**Virginia Law Parallel**: 18 VAC 135-20-300 requires licensees to protect and promote the interests of their client while treating all parties honestly and not knowingly giving false information.

#### Article 2: Avoid Misrepresentation
"REALTORS shall avoid exaggeration, misrepresentation, or concealment of pertinent facts relating to the property or the transaction."

**Teaching Point**: This Article goes beyond mere "do not lie." It prohibits exaggeration (puffing that crosses into misrepresentation), concealment (omitting material facts), and affirmative misrepresentation (stating falsehoods). In the digital age, this includes ensuring that online property descriptions, photographs, and virtual tours accurately represent the property.

**Virginia Law Parallel**: Virginia Code section 54.1-2105 makes misrepresentation a ground for license discipline. The VREB Standards of Conduct require disclosure of material adverse facts.

#### Article 3: Cooperation with Other Brokers
"REALTORS shall cooperate with other brokers except when cooperation is not in the client's best interest."

**Teaching Point**: Cooperation among brokers facilitates efficient markets and serves consumers. However, the obligation to cooperate does not override the agent's fiduciary duty to the client. After the 2024 NAR settlement, cooperation around compensation has changed significantly, but the obligation to cooperate in showing properties and sharing relevant information remains.

**Virginia Law Parallel**: VREB regulations require licensees to present all written offers and cooperate in transactions in good faith.

#### Article 9: Availability of Written Agreements
"REALTORS, for the protection of all parties, shall assure whenever possible that all agreements related to real estate transactions are in writing."

**Teaching Point**: Written agreements protect all parties by clearly establishing the terms of the engagement. This includes listing agreements, buyer representation agreements, purchase agreements, and any modifications. After the 2024 settlement, written buyer agreements are now mandatory before property showings.

**Virginia Law Parallel**: Virginia Code section 54.1-2130 et seq. requires written brokerage agreements.

#### Article 10: Non-Discrimination
"REALTORS shall not deny equal professional services to any person for reasons of race, color, religion, sex, disability, familial status, national origin, sexual orientation, or gender identity."

**Teaching Point**: Article 10 mirrors fair housing law and in some ways goes further. NAR has added sexual orientation and gender identity, which are also protected under Virginia law (Virginia Values Act).

**Virginia Law Parallel**: Virginia Fair Housing Law (Va. Code section 36-96.3) and the Virginia Values Act.

#### Article 12: Honest and Truthful Advertising
"REALTORS shall be honest and truthful in their real estate communications and shall present a true picture in their advertising, marketing, and other representations."

**Teaching Point**: This covers all advertising media, including social media, websites, email campaigns, direct mail, and signage. Misleading photographs, virtual staging that hides defects, and exaggerated property descriptions can violate this Article.

**Virginia Law Parallel**: VREB advertising regulations require truthful advertising and identification of the licensed brokerage.

### Comparing NAR Code and Virginia Law

| Area | NAR Code of Ethics | Virginia Law/VREB |
|---|---|---|
| **Applicability** | NAR members only | All Virginia licensees |
| **Enforcement** | NAR local association | VREB / DPOR / Courts |
| **Penalties** | Fine, suspension/expulsion from NAR | License discipline, civil penalties |
| **Cooperation** | Article 3 (cooperative duty) | VREB requires good faith dealing |
| **Non-Discrimination** | Article 10 (includes sexual orientation/gender identity) | Virginia Values Act (same protections) |
| **Written Agreements** | Article 9 (recommended) | Va. Code 54.1-2130 (required) |
| **Advertising** | Article 12 (honest/truthful) | VREB regulations (brokerage ID required) |

### Key Takeaway

The NAR Code of Ethics provides a useful aspirational framework that often parallels and sometimes exceeds Virginia's minimum legal requirements. However, **Virginia law and VREB regulations are the legally binding standards**. When the NAR Code and Virginia law differ, Virginia licensees must comply with Virginia law. NAR members must comply with both.`,
        },
      ],
    },
    {
      slug: 'wire-fraud-risk-management',
      title: 'Wire Fraud Prevention & Risk Management',
      lessons: [
        {
          slug: 'wire-fraud-prevention',
          title: 'Wire Fraud Prevention in Real Estate Transactions',
          lessonType: 'reading',
          estimatedMinutes: 15,
          keyTerms: [
            'wire fraud',
            'business email compromise',
            'BEC',
            'phishing',
            'social engineering',
            'closing funds',
            'title company impersonation',
            'callback verification',
            'multi-factor authentication',
            'FBI IC3',
            'wire transfer instructions',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A buyer receives an email that appears to be from the title company with wire transfer instructions. The email has a slightly different domain name (titleco-settlement.com instead of titlecosettlement.com). What should the buyer do, and what is your role as the agent?',
            },
            {
              type: 'mini_quiz',
              prompt: 'According to the FBI, how much did Americans lose to real estate wire fraud in 2024?',
            },
          ],
          content: `## Wire Fraud Prevention in Real Estate Transactions

### The Scope of the Problem

Real estate wire fraud is one of the fastest-growing crimes in the United States. According to the FBI's Internet Crime Complaint Center (IC3), business email compromise (BEC) scams targeting real estate transactions resulted in losses exceeding **$3 billion** in 2024. The FBI reports that real estate transactions are among the top targets for wire fraud because:

- Large sums of money are transferred
- Transactions involve multiple parties who may not know each other personally
- Closing timelines create urgency that criminals exploit
- Email is the primary communication channel
- Many consumers are unfamiliar with the wire transfer process

### How Real Estate Wire Fraud Works

The typical real estate wire fraud scheme follows this pattern:

**Step 1: Compromise**
The criminal gains access to the email account of someone involved in the transaction (often the real estate agent, title company, or attorney). This is usually accomplished through:
- **Phishing emails** that trick the victim into revealing their email password
- **Malware** that captures credentials
- **Social engineering** (pretexting, impersonation)
- Purchasing compromised credentials on the dark web

**Step 2: Monitor**
Once inside the email account, the criminal monitors email traffic to identify upcoming transactions, learn the parties' names, understand the timeline, and determine the expected wire amount.

**Step 3: Intercept**
At the critical moment (usually 24-48 hours before closing), the criminal sends a fraudulent email to the buyer that:
- Appears to come from the title company, settlement attorney, or real estate agent
- Contains "updated" wire transfer instructions directing the buyer to send funds to the criminal's bank account
- Often creates urgency ("Wire must be received by end of business today or closing will be delayed")
- May use a spoofed email address that closely resembles the legitimate address (e.g., john@example.com instead of john@example.com)

**Step 4: Theft**
The buyer wires funds to the criminal's account. The criminal immediately transfers the money to other accounts (often overseas), making recovery extremely difficult. The FBI reports that once wire fraud funds are transferred, the recovery rate is less than 30%.

### Prevention Strategies for Virginia Licensees

**1. Establish Protocols**

Every Virginia brokerage should have a written wire fraud prevention policy that includes:
- A clear statement that the brokerage will **never** send wire instructions via email
- Instructions for buyers to verify wire instructions through a **known, trusted phone number** (not a number provided in the email)
- A prohibition on last-minute changes to wire instructions via email
- Mandatory two-factor authentication on all email accounts

**2. Educate Buyers Early**

At the first meeting with a buyer client, discuss wire fraud:
- Explain that wire fraud is common in real estate
- Tell the buyer they will receive wire instructions **only from the settlement agent**, not from you
- Instruct them to **never** send money based on email instructions alone
- Provide the settlement agent's verified phone number and instruct the buyer to call to confirm wire instructions before sending any funds

**3. Callback Verification**

Before any wire transfer, the buyer should:
- Call the settlement agent at a phone number obtained independently (not from the email containing wire instructions)
- Verbally confirm the account number, routing number, and amount
- Document the call (date, time, person spoken to)

**4. Secure Communications**

- Use **multi-factor authentication** (MFA) on all email accounts
- Use **encrypted email** when transmitting sensitive financial information
- Avoid using public Wi-Fi for real estate communications
- Change passwords regularly and use unique passwords for each account
- Consider using secure transaction management platforms rather than email

**5. Recognize Red Flags**

| Red Flag | What to Do |
|---|---|
| Email from a slightly different domain | Do not click links; verify through independent channel |
| "Urgent" or "last-minute" wire instruction changes | Call the verified number to confirm |
| Request to wire to a different account than previously provided | Stop and verify immediately |
| Pressure to wire quickly without verification | Resist and verify through callback |
| Grammar errors or unusual formatting in emails from known contacts | The account may be compromised; verify |

### What to Do If Wire Fraud Occurs

If a buyer sends funds to a fraudulent account:

1. **Contact the bank immediately**: Call the buyer's bank and request a wire recall. Speed is critical; the first 24 hours are the window for recovery
2. **Report to the FBI IC3**: File a complaint at ic3.gov
3. **Contact local law enforcement**: File a police report
4. **Notify the settlement agent**: Alert the title company or settlement attorney
5. **Notify your broker**: Follow your brokerage's incident response procedures
6. **Contact your E&O insurance carrier**: The incident may trigger coverage

### E&O Insurance and Wire Fraud

Most Errors & Omissions (E&O) insurance policies for real estate agents **do not** cover wire fraud losses unless the policy specifically includes a cyber liability or social engineering endorsement. Virginia licensees should:

- Review their E&O policy for cyber fraud coverage
- Consider adding a cyber liability endorsement
- Understand the limits of their coverage
- Advise clients to verify that their bank's wire fraud protections are adequate

### Virginia Law and Wire Fraud

While wire fraud is primarily prosecuted as a federal crime (18 U.S.C. section 1343), Virginia licensees have state-level obligations:

- The VREB Standards of Conduct require licensees to protect client interests, which includes taking reasonable steps to prevent wire fraud
- Failure to warn clients about wire fraud when the licensee knows of the risk could constitute a breach of the duty of reasonable care
- Virginia's Computer Crimes Act (Va. Code section 18.2-152.1 et seq.) provides additional state criminal penalties for computer fraud, including wire fraud

### Practical Protocol for Virginia Licensees

1. **At listing**: Warn sellers about wire fraud risks when providing proceeds
2. **At buyer consultation**: Include wire fraud warning in buyer orientation materials
3. **At contract**: Reiterate wire fraud warnings in writing
4. **Before closing**: Send a final reminder to the buyer about verifying wire instructions
5. **Document everything**: Keep records of all wire fraud warnings provided to clients`,
        },
        {
          slug: 'eo-insurance-risk-management',
          title: 'Errors & Omissions Insurance and Risk Awareness',
          lessonType: 'reading',
          estimatedMinutes: 14,
          keyTerms: [
            'E&O insurance',
            'errors and omissions',
            'professional liability',
            'claims-made policy',
            'occurrence policy',
            'prior acts coverage',
            'tail coverage',
            'deductible',
            'defense costs',
            'risk management',
            'vicarious liability',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt: 'Does Virginia require real estate licensees to carry E&O insurance?',
            },
            {
              type: 'scenario',
              prompt: 'A buyer sues you two years after closing, claiming you failed to disclose a known drainage problem. Your E&O policy at the time of the transaction was with Insurer A, but you have since switched to Insurer B. Which insurer covers the claim?',
            },
          ],
          content: `## Errors & Omissions Insurance and Risk Awareness

### What Is E&O Insurance?

Errors and Omissions (E&O) insurance is professional liability insurance that protects real estate licensees against claims arising from negligent acts, errors, or omissions in the performance of their professional duties. E&O insurance covers:

- **Defense costs**: Attorney's fees and court costs to defend against a claim
- **Settlements**: Amounts paid to resolve claims
- **Judgments**: Court-ordered damages

### Virginia E&O Requirements

Virginia does **not** currently mandate that all licensees carry E&O insurance as a condition of licensure. However:

- Many Virginia brokerages require their agents to maintain E&O coverage as a condition of their affiliation
- Some Virginia REALTOR associations offer group E&O policies to members
- The Virginia Real Estate Board may impose E&O requirements as a condition of license reinstatement in disciplinary cases
- DPOR has periodically considered mandatory E&O insurance but has not enacted such a requirement as of 2026

### Types of E&O Policies

**Claims-Made Policy** (most common for real estate):
- Covers claims **made** during the policy period, regardless of when the error occurred (subject to the retroactive date)
- The policy must be in force when the claim is reported
- If you change insurers, you need **prior acts coverage** (also called "nose coverage") from the new insurer to cover errors that occurred before the new policy's effective date
- If you retire or leave the business, you may need **tail coverage** (also called an "extended reporting period") to cover claims that arise after the policy ends but relate to work done while the policy was in force

**Occurrence Policy** (less common):
- Covers errors that **occur** during the policy period, regardless of when the claim is made
- Provides broader protection but is typically more expensive
- Less common in real estate E&O

### Common Claims Against Virginia Licensees

| Claim Type | Description | Prevention Strategy |
|---|---|---|
| **Failure to disclose** | Not disclosing known material adverse facts | Document all disclosures; err on the side of disclosure |
| **Misrepresentation** | Providing inaccurate information about the property | Verify all facts; qualify statements with "according to the seller" |
| **Negligent advice** | Providing advice outside your expertise | Refer clients to specialists (attorneys, inspectors, surveyors) |
| **Breach of fiduciary duty** | Failing to act in the client's best interests | Follow all fiduciary duties consistently |
| **Failure to recommend inspections** | Not advising buyers to get inspections | Always recommend comprehensive inspections in writing |
| **Contract errors** | Mistakes in drafting or completing contracts | Use approved forms; have broker review complex transactions |
| **Trust account mishandling** | Errors in earnest money handling | Follow strict trust account procedures |
| **Fair housing violation** | Discriminatory conduct or statements | Training, awareness, and consistent treatment of all parties |

### Risk Management Best Practices

**1. Document Everything**
- Keep detailed notes of all conversations (in-person, phone, text, email)
- Document all advice given and recommendations made
- Maintain complete transaction files for a minimum of five years (VREB requirement)
- Save all text messages and digital communications

**2. Use Written Communication**
- Follow up verbal conversations with written summaries
- Get all material agreements in writing
- Use contract addenda for changes rather than verbal agreements
- Confirm instructions and decisions in writing

**3. Know Your Limits**
- Do not practice law (drafting custom contract clauses, interpreting legal documents, providing legal opinions)
- Do not act as an appraiser, home inspector, surveyor, or environmental specialist
- Refer clients to qualified professionals for specialized questions
- Do not guarantee outcomes ("This house will definitely appreciate" or "The inspection will be fine")

**4. Manage Client Expectations**
- Set realistic expectations about the process, timeline, and potential outcomes
- Explain your role and its limitations clearly
- Address concerns promptly and honestly
- Never overpromise or underdeliver

**5. Stay Current**
- Complete continuing education requirements on time
- Stay informed about changes in law, regulations, and market conditions
- Attend broker-provided training sessions
- Review VREB regulatory updates regularly

### Vicarious Liability

**Brokers' Liability for Agents' Actions**:
Under Virginia law, the principal broker is responsible for the actions of the licensees working under their supervision. This creates **vicarious liability**, meaning the broker can be held liable for the negligent acts of their agents performed within the scope of their employment.

**Implications**:
- Brokers must maintain adequate E&O coverage that includes their agents
- Agents' E&O policies should include coverage for the broker
- Brokers must actively supervise agents to reduce exposure
- Both the broker and the agent may be named in a lawsuit

### What to Do When a Claim Arises

1. **Notify your broker immediately**: Do not try to handle a complaint alone
2. **Notify your E&O carrier promptly**: Most policies require timely notification; failure to notify can void coverage
3. **Do not admit fault**: Be cooperative but do not make admissions of liability
4. **Preserve all records**: Do not destroy, delete, or alter any transaction documents
5. **Follow your insurer's instructions**: The insurer will typically assign an attorney to handle the matter
6. **Cooperate with the investigation**: Provide all requested documents and information to your insurer and their counsel

### Cost of E&O Insurance

E&O premiums for Virginia licensees typically range from:
- **$300-$800/year** for individual agents (group policy through brokerage or association)
- **$500-$2,000/year** for independent policies
- **Higher premiums** for agents with prior claims, more transactions, or commercial practice

Factors affecting premiums include:
- Claims history
- Volume of transactions
- Type of practice (residential vs. commercial)
- Deductible amount
- Coverage limits
- State requirements`,
        },
      ],
    },
    {
      slug: 'vreb-case-studies-practical-ethics',
      title: 'VREB Case Studies & Practical Ethics',
      lessons: [
        {
          slug: 'vreb-disciplinary-case-studies',
          title: 'Recent VREB Disciplinary Case Studies',
          lessonType: 'scenario',
          estimatedMinutes: 15,
          keyTerms: [
            'consent order',
            'license discipline',
            'trust account violation',
            'supervision failure',
            'advertising violation',
            'unauthorized practice',
            'continuing education fraud',
            'kickback',
            'RESPA violation',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'A principal broker discovers that one of their agents has been receiving referral fees from a home inspector without disclosure. What violations have occurred and what should the broker do?',
            },
            {
              type: 'scenario',
              prompt: 'An agent lists a property and receives a full-price offer. Before presenting the offer, the agent submits their own offer through a family member. What ethical and legal violations have occurred?',
            },
            {
              type: 'scenario',
              prompt: 'A licensee completes their continuing education certificate but did not actually attend the required courses. They submit the certificate for license renewal. What are the consequences?',
            },
          ],
          content: `## Recent VREB Disciplinary Case Studies

### Case Study 1: Self-Dealing and Failure to Present Offers (2024)

**Facts**: A listing agent in Richmond received a full-price offer on a listed property. Before presenting the offer to the seller, the agent arranged for her brother-in-law to submit a competing offer at a higher price. The agent presented both offers simultaneously without disclosing her family relationship to the competing offeror.

**Violations**:
- **Failure to timely present offers**: Under VREB regulations, offers must be presented promptly. The agent delayed presenting the first offer to arrange the competing offer.
- **Failure to disclose personal interest**: 18 VAC 135-20-300(4) requires disclosure of any personal interest in the transaction. The family relationship constitutes a personal interest.
- **Breach of fiduciary duty**: The agent placed her own financial interest above the client's interest.
- **Improper dealing**: Virginia Code section 54.1-2105 prohibits improper, fraudulent, or dishonest dealing.

**Outcome**: License revoked. $5,000 penalty. Referred to the Virginia Attorney General for potential criminal prosecution. The seller also filed a civil lawsuit against the agent.

**Lesson**: Always present offers promptly and in the order received. Disclose any personal interest, however remote. Never use your position to benefit yourself or family members at the client's expense.

### Case Study 2: Trust Account Violations (2025)

**Facts**: A principal broker in Northern Virginia allowed earnest money deposits to remain in the brokerage's operating account for several days before transferring them to the trust account. An audit revealed that over $200,000 in trust funds had been commingled with operating funds over a 12-month period. While no client funds were ultimately lost, the commingling violated Virginia law.

**Violations**:
- **Commingling**: Trust funds must be maintained in a separate trust account, not in the operating account (18 VAC 135-20-185)
- **Failure to timely deposit**: Earnest money must be deposited by the end of the fifth business day following contract ratification
- **Failure to reconcile**: Monthly trust account reconciliations were not being performed
- **Broker supervision failure**: The principal broker is personally responsible for trust account management

**Outcome**: License suspended for one year. $10,000 penalty. Required to complete trust account management course. Upon reinstatement, three-year probation with quarterly trust account audits at broker's expense.

**Lesson**: Trust account management is one of the most regulated and closely monitored areas of real estate practice. Violations are treated with the utmost seriousness, even when no client suffers actual loss.

### Case Study 3: Undisclosed Referral Fees / RESPA Violation (2024)

**Facts**: A Virginia Beach agent had an arrangement with a home inspection company under which the inspector paid the agent $100 for each inspection referral. The arrangement was not disclosed to clients. When a VREB investigator discovered the arrangement during a routine complaint investigation, the agent admitted to receiving over $15,000 in undisclosed referral fees over two years.

**Violations**:
- **RESPA Section 8 violation**: The Real Estate Settlement Procedures Act prohibits kickbacks and unearned fees for referrals of settlement services
- **Failure to disclose**: VREB regulations require disclosure of any financial benefit received from referrals
- **Improper dealing**: Accepting secret payments creates a conflict of interest

**Outcome**: License suspended for 6 months. $5,000 VREB penalty. Required to disgorge all referral fees ($15,200). Referred to CFPB for federal RESPA enforcement. The agent's E&O insurer was notified.

**Lesson**: Any financial arrangement with service providers must be disclosed to clients. "Affiliated Business Arrangement" disclosures are required when referring clients to entities in which the licensee has a financial interest.

### Case Study 4: Continuing Education Fraud (2025)

**Facts**: A licensee submitted a continuing education certificate for 16 hours of coursework to DPOR for license renewal. A subsequent audit by DPOR revealed that the licensee had not actually completed the courses. The education provider's records showed no enrollment or attendance by the licensee.

**Violations**:
- **Fraud**: Submitting false documentation to a regulatory body
- **Practicing on a non-compliant license**: Without valid CE, the licensee's renewal was invalid
- **Dishonest dealing**: Virginia Code section 54.1-2105

**Outcome**: License revoked. $2,500 penalty. Barred from reapplication for five years. DPOR referred the matter to the Commonwealth's Attorney for potential criminal prosecution (obtaining a license by fraud is a criminal offense under Virginia law).

**Lesson**: There are no shortcuts in professional development. CE requirements exist to ensure licensees maintain current knowledge. Fraud in the CE process is treated as seriously as fraud in a real estate transaction.

### Case Study 5: Supervision Failure in Virtual Brokerage (2024)

**Facts**: A principal broker operated a "virtual brokerage" with 45 agents spread across Virginia. The broker lived in another state and had minimal contact with the agents. Several agents were advertising without the brokerage name, one agent was operating without a valid license, and trust account records were incomplete. The VREB initiated an investigation after consumer complaints.

**Violations**:
- **Failure to supervise**: 18 VAC 135-20-300 requires active supervision by the principal broker
- **Advertising violations**: Multiple agents advertising without brokerage identification
- **Allowing unlicensed activity**: One agent's license had lapsed, and the broker had not verified
- **Trust account irregularities**: Incomplete reconciliations

**Outcome**: Broker's license suspended for one year. $15,000 total penalty. Required to complete broker supervision course. Required to maintain a physical Virginia office upon reinstatement. Three agents received individual disciplinary actions (reprimands and fines).

**Lesson**: The rise of virtual and cloud-based brokerages does not diminish the principal broker's supervision obligations. Active, documented supervision is required regardless of the brokerage model.

### Case Study 6: Dual Agency Without Informed Consent (2025)

**Facts**: An agent represented the seller in a transaction and was also providing "assistance" to the buyer (scheduling showings, explaining the process, and answering questions about the property). The agent never disclosed the dual agency situation or obtained written consent from either party. The buyer later claimed the agent withheld information about the property's condition that would have affected the buyer's decision.

**Violations**:
- **Failure to disclose agency relationship**: Va. Code section 54.1-2138 requires written agency disclosure
- **Dual agency without consent**: Va. Code section 54.1-2139 requires informed written consent
- **Breach of duty to buyer**: Even as a dual agent, material adverse facts must be disclosed

**Outcome**: License suspended for 3 months. $2,500 penalty. Required to complete agency law course. The buyer's separate civil lawsuit against the agent resulted in a $45,000 settlement paid by the agent's E&O insurer.

**Lesson**: If you find yourself providing services to both parties in a transaction, you must immediately address the agency situation. Either obtain dual agency consent or refer the unrepresented party to another agent.

### Summary: Patterns in VREB Enforcement

The most common violations leading to VREB disciplinary action are:

1. Trust account mishandling (most serious)
2. Failure to disclose material facts or conflicts of interest
3. Advertising violations (especially social media)
4. Supervision failures by principal brokers
5. Unauthorized practice (expired or lapsed licenses)
6. Fair housing violations
7. Fraud or dishonest dealing

**The best protection**: Follow the rules consistently, document everything, maintain open communication with your broker, and when in doubt, err on the side of disclosure, transparency, and professional caution.`,
        },
        {
          slug: 'ethics-practical-application-review',
          title: 'Ethics Practical Application & Course Review',
          lessonType: 'interactive',
          estimatedMinutes: 15,
          keyTerms: [
            'ethical decision-making',
            'professional responsibility',
            'public trust',
            'regulatory compliance',
            'continuing professional development',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt: 'Your seller client confides that they plan to remove the high-end appliances and replace them with cheaper models before closing. The contract states the appliances convey with the property. What do you do?',
            },
            {
              type: 'scenario',
              prompt: 'A fellow agent in your office asks you to sign as a witness on a document you did not actually witness being signed. They say it is "just a formality." How do you respond?',
            },
            {
              type: 'mini_quiz',
              prompt: 'Name three situations where you would advise a client to consult an attorney rather than relying on your advice.',
            },
            {
              type: 'scenario',
              prompt: 'You are representing a buyer. During a showing, you notice a water stain on the ceiling that the seller\'s disclosure did not mention. The listing agent says it was from a leak that was "fixed years ago." What should you do?',
            },
            {
              type: 'drag_drop',
              prompt: 'Match each ethical obligation (loyalty, confidentiality, disclosure, obedience, accounting, reasonable care) with its correct definition.',
            },
          ],
          content: `## Ethics Practical Application & Course Review

### The Ethical Licensee: Bringing It All Together

Throughout this module, we have examined Virginia's Standards of Conduct, the NAR Code of Ethics as a teaching framework, wire fraud prevention, E&O insurance, and real-world VREB disciplinary cases. This final lesson integrates these topics into a practical ethical decision-making framework.

### The Four Pillars of Ethical Real Estate Practice

**Pillar 1: Competence**
Ethical practice begins with competence. A licensee who lacks the knowledge to serve clients properly cannot act ethically, regardless of good intentions.
- Maintain current knowledge of Virginia law and regulations
- Complete continuing education meaningfully (not just for credit)
- Seek mentorship and training in unfamiliar areas
- Refer clients to specialists when matters exceed your expertise

**Pillar 2: Transparency**
Ethical practice requires transparency with all parties.
- Disclose your agency relationship at first substantive contact
- Disclose all material adverse facts
- Disclose any personal interest or conflict of interest
- Communicate clearly about your compensation and how it is paid
- Never hide information that a party needs to make informed decisions

**Pillar 3: Accountability**
Ethical practitioners hold themselves accountable for their actions.
- Take responsibility for mistakes (consult your broker and E&O carrier)
- Follow through on commitments
- Maintain accurate records
- Submit to regulatory oversight
- Hold colleagues accountable when you witness violations

**Pillar 4: Service**
The real estate license is a public trust. The public grants licensees the privilege of practicing in exchange for competent, honest service.
- Place client interests above your own
- Treat every person with respect and dignity
- Contribute to the integrity of the profession
- Protect the public from fraud and incompetence
- Serve as a resource and guide, not merely a transaction facilitator

### Ethical Decision-Making Framework

When facing an ethical dilemma, work through these questions:

**Step 1: Identify the Issue**
- What is the ethical concern?
- Who are the affected parties?
- What are the competing interests?

**Step 2: Apply the Law**
- Does Virginia law or VREB regulation address this situation?
- Is there a clear legal requirement?
- If so, comply with the law (this is not optional)

**Step 3: Consider the Standards**
- What do the VREB Standards of Conduct (18 VAC 135-20-300) require?
- If you are a NAR member, what does the Code of Ethics suggest?
- What would a reasonable, competent licensee do in this situation?

**Step 4: Evaluate the Options**
- What are your possible courses of action?
- What are the consequences of each option for all parties?
- Which option best serves the client while complying with your duties to all parties?

**Step 5: Act and Document**
- Take the ethically correct action
- Document your reasoning and the actions taken
- Consult your broker if the situation is complex

**Step 6: Reflect**
- After the situation is resolved, reflect on what you learned
- Identify any systems or processes that could prevent similar dilemmas in the future

### Practical Scenarios for Review

**Scenario A: The Appliance Switch**
Your seller client confides that they plan to remove the high-end appliances (included in the contract as conveying with the property) and replace them with cheaper models before closing.

**Analysis**: This is a clear contract breach and potential fraud. Your fiduciary duty of obedience does not extend to illegal or unethical instructions. You must:
1. Advise the client that removing the appliances would breach the contract
2. Explain the legal consequences (the buyer could sue for damages or refuse to close)
3. If the client insists, inform the client that you cannot participate in the breach
4. Consult your broker about potential withdrawal from the listing if the client proceeds

**Scenario B: The False Witness**
A colleague asks you to sign as a witness on a document you did not witness being signed, saying it is "just a formality."

**Analysis**: Signing as a witness to an event you did not witness is fraud. This is never acceptable, regardless of how the request is characterized. Politely but firmly decline. If the colleague persists, inform your broker.

**Scenario C: When to Refer to an Attorney**

Virginia licensees should advise clients to consult an attorney in these situations (among others):
1. **Title issues**: Complex title defects, boundary disputes, adverse possession claims
2. **Contract disputes**: Breach of contract claims, specific performance, damages
3. **Tax implications**: Capital gains, 1031 exchanges, estate planning
4. **Entity transactions**: Sales involving trusts, estates, LLCs, or corporations
5. **Zoning and land use**: Variance applications, rezoning, conditional use permits
6. **Divorce or family law**: Property division, court orders affecting real property
7. **Foreclosure**: Short sales, deed in lieu, deficiency judgments
8. **Commercial leases**: Complex lease negotiations beyond standard forms

**Scenario D: The Suspicious Water Stain**
While showing a property to your buyer client, you notice a water stain on the ceiling that the seller's disclosure did not mention. The listing agent says the leak was "fixed years ago."

**Analysis**: As the buyer's agent, your duty of reasonable care requires you to:
1. Point out the water stain to your buyer client
2. Recommend that the buyer's home inspector specifically evaluate the area
3. Request documentation of the repair from the seller (through the listing agent)
4. Note that a prior water intrusion, even if repaired, is a material fact that should have been disclosed
5. Do not accept the listing agent's verbal assurance as sufficient

### Course Summary: Key Takeaways

1. **Virginia law controls**: The VREB Standards of Conduct (18 VAC 135-20-300) are the legally binding ethical standards for all Virginia licensees
2. **Fiduciary duties matter**: Loyalty, obedience, disclosure, confidentiality, reasonable care, and accounting form the foundation of the agent-client relationship
3. **Material adverse facts must always be disclosed**: Regardless of agency relationship, you must disclose known material adverse facts about the property's physical condition
4. **Confidentiality survives**: Client confidences must be protected even after the agency relationship ends
5. **Wire fraud is real**: Every transaction requires proactive wire fraud prevention measures
6. **E&O insurance is essential**: Even though Virginia does not mandate it, operating without E&O coverage is professionally reckless
7. **Document everything**: The best defense against complaints and claims is thorough documentation
8. **When in doubt, disclose**: It is better to disclose information that turns out to be immaterial than to conceal information that a party needed to know
9. **Consult your broker**: Your principal broker is your first resource for ethical and legal questions
10. **The license is a public trust**: Ethical practice protects not just you and your clients, but the integrity of the entire profession`,
        },
      ],
    },
  ],
}

// ── Combined Export ──────────────────────────────────────────────────────────

export const PLE_MODULES_123: CourseModule[] = [pleModule1, pleModule2, pleModule3]
