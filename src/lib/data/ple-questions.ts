export interface QuizQuestion {
  id: string
  chapterId: string
  quizType: 'chapter_quiz' | 'section_exam' | 'mock_exam'
  questionText: string
  options: { id: string; text: string; isCorrect: boolean }[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicTag: string
}

// ============================================================
// MODULE 1: Fair Housing / ADA / Civil Rights Act of 1866
// 30 questions | chapterId: ple-fair-housing-*
// ============================================================

const fairHousingQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-001',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'How many protected classes are recognized under the federal Fair Housing Act as amended?',
    options: [
      { id: 'a', text: '5', isCorrect: false },
      { id: 'b', text: '7', isCorrect: true },
      { id: 'c', text: '9', isCorrect: false },
      { id: 'd', text: '13', isCorrect: false }
    ],
    explanation: 'The federal Fair Housing Act (Title VIII of the Civil Rights Act of 1968, as amended by the Fair Housing Amendments Act of 1988) recognizes 7 protected classes: race, color, religion, national origin, sex, familial status, and disability.',
    difficulty: 'easy',
    topicTag: 'protected-classes'
  },
  {
    id: 'ple-q-002',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Virginia fair housing law adds which additional protected classes beyond the seven federal classes?',
    options: [
      { id: 'a', text: 'Age, sexual orientation, and marital status', isCorrect: false },
      { id: 'b', text: 'Elderliness, source of funds, sexual orientation, gender identity, veteran status, and military status', isCorrect: true },
      { id: 'c', text: 'Income level, credit history, and marital status', isCorrect: false },
      { id: 'd', text: 'Citizenship, language, and political affiliation', isCorrect: false }
    ],
    explanation: 'Under the Virginia Fair Housing Law (Va. Code 36-96.1 et seq.), Virginia adds six additional classes: elderliness, source of funds, sexual orientation, gender identity, veteran status, and military status to the seven federal classes, bringing the total to 13 protected classes in Virginia.',
    difficulty: 'medium',
    topicTag: 'protected-classes'
  },
  {
    id: 'ple-q-003',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'The Civil Rights Act of 1866 prohibits discrimination based on which characteristic?',
    options: [
      { id: 'a', text: 'Race only', isCorrect: true },
      { id: 'b', text: 'Race and color', isCorrect: false },
      { id: 'c', text: 'Race, color, and national origin', isCorrect: false },
      { id: 'd', text: 'All classes now protected under fair housing law', isCorrect: false }
    ],
    explanation: 'The Civil Rights Act of 1866 (42 U.S.C. 1982) prohibits discrimination based solely on race. It applies to all property transactions with no exceptions and was upheld by the Supreme Court in Jones v. Alfred H. Mayer Co. (1968).',
    difficulty: 'easy',
    topicTag: 'civil-rights-1866'
  },
  {
    id: 'ple-q-004',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'Under the Fair Housing Act, a landlord receives a reasonable accommodation request from a tenant with a hoarding disorder. What is the correct response?',
    options: [
      { id: 'a', text: 'Deny the request because hoarding is a lease violation, not a disability', isCorrect: false },
      { id: 'b', text: 'Immediately evict the tenant for health and safety concerns', isCorrect: false },
      { id: 'c', text: 'Engage in an interactive process and consider reasonable accommodations such as additional time to address the condition', isCorrect: true },
      { id: 'd', text: 'Require the tenant to provide a psychiatric evaluation before any discussion', isCorrect: false }
    ],
    explanation: 'HUD recognizes hoarding disorder as a disability under the Fair Housing Act. Landlords must engage in an interactive process with the tenant and consider reasonable accommodations, such as providing additional time to address the hoarding while maintaining health and safety standards. Blanket eviction without accommodation analysis violates fair housing law.',
    difficulty: 'hard',
    topicTag: 'hoarding-disability'
  },
  {
    id: 'ple-q-005',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'Which statement about hoarding as it relates to fair housing law is TRUE?',
    options: [
      { id: 'a', text: 'Hoarding is classified as a lifestyle choice, not a disability', isCorrect: false },
      { id: 'b', text: 'Hoarding disorder is recognized by the DSM-5 and qualifies as a disability under the Fair Housing Act', isCorrect: true },
      { id: 'c', text: 'Hoarding only qualifies as a disability if the tenant is elderly', isCorrect: false },
      { id: 'd', text: 'Landlords have no obligation to accommodate tenants with hoarding disorders', isCorrect: false }
    ],
    explanation: 'The DSM-5 classifies hoarding disorder as a distinct mental health condition. Under the Fair Housing Act and HUD guidance, hoarding disorder qualifies as a disability, and housing providers must consider reasonable accommodations before taking adverse action against a tenant.',
    difficulty: 'medium',
    topicTag: 'hoarding-disability'
  },
  {
    id: 'ple-q-006',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'Under the ADA, which of the following is required of a real estate brokerage office open to the public?',
    options: [
      { id: 'a', text: 'Providing sign language interpreters for all showings', isCorrect: false },
      { id: 'b', text: 'Removing architectural barriers where readily achievable', isCorrect: true },
      { id: 'c', text: 'Offering discounted commissions to disabled clients', isCorrect: false },
      { id: 'd', text: 'Reserving parking spaces exclusively for disabled employees', isCorrect: false }
    ],
    explanation: 'Title III of the ADA requires places of public accommodation, including real estate offices, to remove architectural barriers where doing so is "readily achievable" (easily accomplishable without much difficulty or expense). This includes ramps, wider doorways, and accessible restrooms.',
    difficulty: 'medium',
    topicTag: 'ada-compliance'
  },
  {
    id: 'ple-q-007',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'A property manager tells a prospective tenant, "This building isn\'t really suitable for families with young children." This statement most likely violates which protection?',
    options: [
      { id: 'a', text: 'Race discrimination', isCorrect: false },
      { id: 'b', text: 'Familial status discrimination', isCorrect: true },
      { id: 'c', text: 'Age discrimination', isCorrect: false },
      { id: 'd', text: 'Source of funds discrimination', isCorrect: false }
    ],
    explanation: 'Steering or discouraging families with children under 18 from a property constitutes familial status discrimination under the Fair Housing Act, unless the property qualifies as housing for older persons under the Housing for Older Persons Act (HOPA) exemption.',
    difficulty: 'hard',
    topicTag: 'familial-status'
  },
  {
    id: 'ple-q-008',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Which exemption applies to the Civil Rights Act of 1866?',
    options: [
      { id: 'a', text: 'The Mrs. Murphy exemption for owner-occupied buildings with four or fewer units', isCorrect: false },
      { id: 'b', text: 'Religious organizations may limit occupancy to members', isCorrect: false },
      { id: 'c', text: 'Private clubs may restrict membership', isCorrect: false },
      { id: 'd', text: 'There are no exemptions', isCorrect: true }
    ],
    explanation: 'The Civil Rights Act of 1866 has NO exemptions. It applies to every real estate transaction and every property without exception. The Mrs. Murphy exemption, religious organization exemption, and private club exemption apply only to the Fair Housing Act of 1968.',
    difficulty: 'medium',
    topicTag: 'civil-rights-1866'
  },
  {
    id: 'ple-q-009',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'A tenant with a mobility disability requests a reserved parking space closer to the building entrance. The landlord should:',
    options: [
      { id: 'a', text: 'Deny the request because other tenants might complain about unequal treatment', isCorrect: false },
      { id: 'b', text: 'Grant the request as a reasonable accommodation at no cost to the tenant', isCorrect: true },
      { id: 'c', text: 'Grant the request but charge the tenant for the reserved space', isCorrect: false },
      { id: 'd', text: 'Require the tenant to obtain a handicapped parking permit before considering the request', isCorrect: false }
    ],
    explanation: 'Under the Fair Housing Act, designating a reserved parking space is a reasonable accommodation for a person with a mobility disability. The landlord cannot charge extra for accommodations, per HUD guidance. The landlord may request documentation of the disability-related need but cannot require a state-issued handicapped permit as a prerequisite.',
    difficulty: 'medium',
    topicTag: 'reasonable-accommodation'
  },
  {
    id: 'ple-q-010',
    chapterId: 'ple-fair-housing-enforcement',
    quizType: 'chapter_quiz',
    questionText: 'A fair housing complaint must be filed with HUD within how many days of the alleged discriminatory act?',
    options: [
      { id: 'a', text: '90 days', isCorrect: false },
      { id: 'b', text: '180 days', isCorrect: false },
      { id: 'c', text: '1 year (365 days)', isCorrect: true },
      { id: 'd', text: '2 years (730 days)', isCorrect: false }
    ],
    explanation: 'Under 42 U.S.C. 3610(a)(1)(A)(i), a complaint must be filed with HUD within one year of the alleged discriminatory housing practice. A civil action in federal court must be filed within two years under 42 U.S.C. 3613(a)(1)(A).',
    difficulty: 'easy',
    topicTag: 'enforcement'
  },
  {
    id: 'ple-q-011',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, "elderliness" as a protected class means a person who is at least what age?',
    options: [
      { id: 'a', text: '50 years of age', isCorrect: false },
      { id: 'b', text: '55 years of age', isCorrect: true },
      { id: 'c', text: '62 years of age', isCorrect: false },
      { id: 'd', text: '65 years of age', isCorrect: false }
    ],
    explanation: 'Under Va. Code 36-96.1:1, "elderliness" means an individual who is 55 years of age or older. This is a Virginia-specific protected class not found in federal fair housing law.',
    difficulty: 'easy',
    topicTag: 'elderliness'
  },
  {
    id: 'ple-q-012',
    chapterId: 'ple-fair-housing-advertising',
    quizType: 'chapter_quiz',
    questionText: 'Which advertising phrase would most likely violate the Fair Housing Act?',
    options: [
      { id: 'a', text: '"Spacious three-bedroom home near top-rated schools"', isCorrect: false },
      { id: 'b', text: '"Perfect for a young professional couple"', isCorrect: true },
      { id: 'c', text: '"Hardwood floors throughout, updated kitchen"', isCorrect: false },
      { id: 'd', text: '"Walking distance to public transportation"', isCorrect: false }
    ],
    explanation: 'HUD advertising guidelines prohibit language that indicates a preference based on protected classes. "Perfect for a young professional couple" implies preferences based on age and potentially familial status. Descriptions should focus on property features, not ideal occupant characteristics.',
    difficulty: 'hard',
    topicTag: 'advertising'
  },
  {
    id: 'ple-q-013',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'A tenant requests permission to install grab bars in the bathroom at their own expense. The landlord of a non-federally-funded property must:',
    options: [
      { id: 'a', text: 'Deny the request to preserve the property condition', isCorrect: false },
      { id: 'b', text: 'Allow the modification but may require the tenant to restore the property to its original condition upon departure', isCorrect: true },
      { id: 'c', text: 'Pay for the installation since it is a reasonable accommodation', isCorrect: false },
      { id: 'd', text: 'Allow the modification only if all other tenants agree', isCorrect: false }
    ],
    explanation: 'Under the Fair Housing Act, a landlord must permit reasonable modifications at the tenant\'s expense. For non-federally-assisted housing, the landlord may condition permission on the tenant agreeing to restore the interior to its original condition at move-out, minus reasonable wear and tear (42 U.S.C. 3604(f)(3)(A)).',
    difficulty: 'medium',
    topicTag: 'reasonable-modification'
  },
  {
    id: 'ple-q-014',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'The "source of funds" protected class in Virginia means a landlord generally cannot refuse a tenant because the tenant:',
    options: [
      { id: 'a', text: 'Has a low credit score', isCorrect: false },
      { id: 'b', text: 'Intends to pay rent with Housing Choice Vouchers (Section 8)', isCorrect: true },
      { id: 'c', text: 'Is self-employed rather than W-2 employed', isCorrect: false },
      { id: 'd', text: 'Receives income from a family trust', isCorrect: false }
    ],
    explanation: 'Virginia\'s source of funds protection (Va. Code 36-96.3) prohibits landlords from discriminating against tenants based on their lawful source of income, including Housing Choice Vouchers (Section 8), Social Security, veterans\' benefits, and other government assistance programs.',
    difficulty: 'medium',
    topicTag: 'source-of-funds'
  },
  {
    id: 'ple-q-015',
    chapterId: 'ple-fair-housing-testing',
    quizType: 'chapter_quiz',
    questionText: 'Fair housing testing (using testers who pose as prospective buyers or renters) is:',
    options: [
      { id: 'a', text: 'Illegal entrapment under Virginia law', isCorrect: false },
      { id: 'b', text: 'Legal and results are admissible as evidence of discrimination', isCorrect: true },
      { id: 'c', text: 'Legal but results are inadmissible in court', isCorrect: false },
      { id: 'd', text: 'Only permissible when conducted by HUD agents', isCorrect: false }
    ],
    explanation: 'Fair housing testing is a legal and widely used enforcement tool. The Supreme Court in Havens Realty Corp. v. Coleman (1982) confirmed that testers have standing to sue, and test results are admissible evidence. Organizations like the National Fair Housing Alliance regularly conduct testing.',
    difficulty: 'medium',
    topicTag: 'testing-enforcement'
  },
  {
    id: 'ple-q-016',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'mock_exam',
    questionText: 'A condominium association denies a resident\'s request to keep an emotional support animal despite a letter from a licensed mental health professional. This action is:',
    options: [
      { id: 'a', text: 'Legal because condominiums can enforce no-pet policies without exception', isCorrect: false },
      { id: 'b', text: 'A potential violation of the Fair Housing Act as a denial of reasonable accommodation', isCorrect: true },
      { id: 'c', text: 'Legal because emotional support animals are not the same as service animals', isCorrect: false },
      { id: 'd', text: 'Legal if the HOA\'s governing documents prohibit pets', isCorrect: false }
    ],
    explanation: 'Under the Fair Housing Act, emotional support animals are recognized as a reasonable accommodation for persons with disabilities, even in properties with no-pet policies. A letter from a licensed mental health professional documenting the disability-related need is sufficient. HOA rules do not override federal fair housing protections. See HUD FHEO Notice 2020-01.',
    difficulty: 'hard',
    topicTag: 'emotional-support-animal'
  },
  {
    id: 'ple-q-017',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'The Housing for Older Persons Act (HOPA) exempts properties from familial status requirements if:',
    options: [
      { id: 'a', text: 'At least 50% of units are occupied by persons 55 or older', isCorrect: false },
      { id: 'b', text: 'The property is government-assisted elderly housing, or 100% of residents are 62+, or at least 80% of occupied units have one person 55+', isCorrect: true },
      { id: 'c', text: 'The property owner is over 65 and lives on the premises', isCorrect: false },
      { id: 'd', text: 'The property has been designated as senior housing by the local zoning board', isCorrect: false }
    ],
    explanation: 'HOPA (42 U.S.C. 3607(b)) provides three categories of exemption from familial status: (1) HUD Secretary-designated elderly housing, (2) housing where all occupants are 62+, or (3) housing where at least 80% of occupied units have one resident 55+, with published policies demonstrating intent to be 55+ housing.',
    difficulty: 'hard',
    topicTag: 'hopa-exemption'
  },
  {
    id: 'ple-q-018',
    chapterId: 'ple-fair-housing-enforcement',
    quizType: 'chapter_quiz',
    questionText: 'What is the maximum civil penalty for a first violation of the Fair Housing Act in an administrative proceeding?',
    options: [
      { id: 'a', text: '$16,000', isCorrect: false },
      { id: 'b', text: '$21,039', isCorrect: true },
      { id: 'c', text: '$50,000', isCorrect: false },
      { id: 'd', text: '$100,000', isCorrect: false }
    ],
    explanation: 'As adjusted for inflation, the maximum civil penalty for a first-time violation in an administrative proceeding under the Fair Housing Act is $21,039 (adjusted periodically). Subsequent violations within five years carry higher penalties up to $52,596, and violations within seven years up to $105,194.',
    difficulty: 'hard',
    topicTag: 'enforcement-penalties'
  },
  {
    id: 'ple-q-019',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia fair housing law, "military status" protects individuals who are:',
    options: [
      { id: 'a', text: 'Only active-duty members of the U.S. Armed Forces', isCorrect: false },
      { id: 'b', text: 'Active-duty military, veterans, reservists, and National Guard members', isCorrect: true },
      { id: 'c', text: 'Only veterans with honorable discharges', isCorrect: false },
      { id: 'd', text: 'Military spouses and dependents only', isCorrect: false }
    ],
    explanation: 'Virginia\'s military status protection under Va. Code 36-96.1 covers members of the uniformed services including active duty, reserves, National Guard, and veterans. This state-level protection supplements federal protections under the Servicemembers Civil Relief Act (SCRA).',
    difficulty: 'hard',
    topicTag: 'military-status'
  },
  {
    id: 'ple-q-020',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'Multifamily dwellings with four or more units built for first occupancy after March 13, 1991 must meet which accessibility standard?',
    options: [
      { id: 'a', text: 'Full ADA Title III commercial accessibility', isCorrect: false },
      { id: 'b', text: 'Seven design and construction requirements under the Fair Housing Act', isCorrect: true },
      { id: 'c', text: 'Universal Design standards as set by HUD', isCorrect: false },
      { id: 'd', text: 'ANSI A117.1 standards in all respects', isCorrect: false }
    ],
    explanation: 'The Fair Housing Act requires covered multifamily dwellings (4+ units, first occupied after 3/13/1991) to meet seven design/construction requirements including accessible entrance on an accessible route, accessible common areas, usable doors, accessible routes in/through units, accessible light switches/outlets, reinforced bathroom walls for grab bars, and usable kitchens/bathrooms (42 U.S.C. 3604(f)(3)(C)).',
    difficulty: 'medium',
    topicTag: 'design-construction'
  },
  {
    id: 'ple-q-021',
    chapterId: 'ple-fair-housing-advertising',
    quizType: 'chapter_quiz',
    questionText: 'A licensee publishes a listing that says "great church nearby." This language:',
    options: [
      { id: 'a', text: 'Is always a fair housing violation because it references religion', isCorrect: false },
      { id: 'b', text: 'Could be interpreted as expressing a religious preference and should be avoided', isCorrect: true },
      { id: 'c', text: 'Is acceptable because it describes the neighborhood', isCorrect: false },
      { id: 'd', text: 'Is only a violation if the listing also mentions a specific denomination', isCorrect: false }
    ],
    explanation: 'HUD advertising guidelines caution against language that could imply a preference for or against persons of a particular religion. While describing proximity to landmarks is sometimes acceptable, specifically highlighting a religious institution could be seen as preferential. Best practice is to describe the property, not the surrounding community\'s religious character.',
    difficulty: 'medium',
    topicTag: 'advertising'
  },
  {
    id: 'ple-q-022',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'mock_exam',
    questionText: 'An apartment community advertises exclusively on social media platforms targeting users ages 25-40. This practice:',
    options: [
      { id: 'a', text: 'Is legal because social media targeting is not covered by fair housing law', isCorrect: false },
      { id: 'b', text: 'May violate the Fair Housing Act by limiting exposure based on age, impacting familial status and elderliness classes', isCorrect: true },
      { id: 'c', text: 'Is legal because the Fair Housing Act does not cover digital advertising', isCorrect: false },
      { id: 'd', text: 'Is only a violation if done in conjunction with other discriminatory acts', isCorrect: false }
    ],
    explanation: 'HUD has taken the position that using social media advertising tools to exclude protected classes (such as age-based targeting that excludes older persons or families) violates the Fair Housing Act. The 2019 HUD charge against Facebook established that digital ad targeting is subject to fair housing law.',
    difficulty: 'hard',
    topicTag: 'digital-advertising'
  },
  {
    id: 'ple-q-023',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Which of the following is NOT one of Virginia\'s 13 protected classes under the Virginia Fair Housing Law?',
    options: [
      { id: 'a', text: 'Gender identity', isCorrect: false },
      { id: 'b', text: 'Source of funds', isCorrect: false },
      { id: 'c', text: 'Marital status', isCorrect: true },
      { id: 'd', text: 'Elderliness', isCorrect: false }
    ],
    explanation: 'Virginia\'s 13 protected classes are: race, color, religion, national origin, sex, familial status, disability, elderliness, source of funds, sexual orientation, gender identity, veteran status, and military status. Marital status is NOT a Virginia-protected class, though it is protected in some other states.',
    difficulty: 'medium',
    topicTag: 'protected-classes'
  },
  {
    id: 'ple-q-024',
    chapterId: 'ple-fair-housing-enforcement',
    quizType: 'chapter_quiz',
    questionText: 'Under the Fair Housing Act, disparate impact liability means:',
    options: [
      { id: 'a', text: 'A plaintiff must prove the defendant had discriminatory intent', isCorrect: false },
      { id: 'b', text: 'A facially neutral policy that disproportionately affects a protected class can violate fair housing law even without discriminatory intent', isCorrect: true },
      { id: 'c', text: 'Only government entities can be held liable for housing discrimination', isCorrect: false },
      { id: 'd', text: 'Damages are limited to actual financial losses', isCorrect: false }
    ],
    explanation: 'In Texas Department of Housing and Community Affairs v. Inclusive Communities Project (2015), the Supreme Court confirmed that disparate impact claims are cognizable under the Fair Housing Act. A policy need not be intentionally discriminatory; if it disproportionately harms a protected class without a legitimate justification, it can violate the Act.',
    difficulty: 'hard',
    topicTag: 'disparate-impact'
  },
  {
    id: 'ple-q-025',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'chapter_quiz',
    questionText: 'A landlord may request documentation of a disability-related need for a reasonable accommodation when:',
    options: [
      { id: 'a', text: 'The disability and need are both obvious', isCorrect: false },
      { id: 'b', text: 'The disability is not readily apparent or the need for the accommodation is not obvious', isCorrect: true },
      { id: 'c', text: 'Never; landlords cannot ask for any documentation', isCorrect: false },
      { id: 'd', text: 'Always, regardless of the circumstances', isCorrect: false }
    ],
    explanation: 'Per HUD/DOJ Joint Statement on Reasonable Accommodations, when the disability is obvious or known, the provider may not request documentation. When the disability is not readily apparent, the provider may request reliable documentation that the person has a disability and a disability-related need for the accommodation.',
    difficulty: 'medium',
    topicTag: 'reasonable-accommodation'
  },
  {
    id: 'ple-q-026',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'The "Mrs. Murphy" exemption to the Fair Housing Act applies when:',
    options: [
      { id: 'a', text: 'The property has 10 or fewer units and the owner lives on-site', isCorrect: false },
      { id: 'b', text: 'The owner occupies one unit of a building with no more than four units and no broker is used', isCorrect: true },
      { id: 'c', text: 'The property is managed by a family member of the owner', isCorrect: false },
      { id: 'd', text: 'The owner rents only to people they know personally', isCorrect: false }
    ],
    explanation: 'The Mrs. Murphy exemption (42 U.S.C. 3603(b)(2)) applies to owner-occupied buildings with no more than four units, provided the owner does not use a real estate broker or discriminatory advertising. Even with this exemption, the Civil Rights Act of 1866 still prohibits race discrimination.',
    difficulty: 'hard',
    topicTag: 'exemptions'
  },
  {
    id: 'ple-q-027',
    chapterId: 'ple-fair-housing-disability',
    quizType: 'mock_exam',
    questionText: 'A tenant with a diagnosed intellectual disability is denied a lease renewal because the property manager believes the tenant "cannot live independently." This action:',
    options: [
      { id: 'a', text: 'Is permissible if the property manager has safety concerns', isCorrect: false },
      { id: 'b', text: 'Is a violation of the Fair Housing Act based on disability discrimination', isCorrect: true },
      { id: 'c', text: 'Is permissible if the tenant has previously violated lease terms', isCorrect: false },
      { id: 'd', text: 'Depends on whether the tenant has a caregiver', isCorrect: false }
    ],
    explanation: 'Denying housing based on assumptions about a person\'s ability to live independently due to a disability violates the Fair Housing Act (42 U.S.C. 3604(f)). Housing providers cannot apply different standards or make subjective judgments about a disabled person\'s ability to live independently.',
    difficulty: 'medium',
    topicTag: 'disability-discrimination'
  },
  {
    id: 'ple-q-028',
    chapterId: 'ple-fair-housing-enforcement',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a fair housing complaint may be filed with:',
    options: [
      { id: 'a', text: 'Only the Virginia Real Estate Board', isCorrect: false },
      { id: 'b', text: 'Only HUD', isCorrect: false },
      { id: 'c', text: 'HUD, the Virginia Fair Housing Office, or federal court', isCorrect: true },
      { id: 'd', text: 'Only in circuit court with an attorney', isCorrect: false }
    ],
    explanation: 'Fair housing complaints in Virginia may be filed with HUD (which may refer to the Virginia Fair Housing Office as a substantially equivalent agency under 42 U.S.C. 3610(f)), directly with the Virginia Real Estate Board/Fair Housing Office, or as a civil action in state or federal court.',
    difficulty: 'easy',
    topicTag: 'enforcement'
  },
  {
    id: 'ple-q-029',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'chapter_quiz',
    questionText: 'Blockbusting, also known as panic peddling, involves:',
    options: [
      { id: 'a', text: 'Refusing to make loans in certain neighborhoods', isCorrect: false },
      { id: 'b', text: 'Inducing owners to sell by making representations about the entry of protected class members into a neighborhood', isCorrect: true },
      { id: 'c', text: 'Directing buyers to or away from certain neighborhoods based on race', isCorrect: false },
      { id: 'd', text: 'Refusing to show properties in certain areas', isCorrect: false }
    ],
    explanation: 'Blockbusting (42 U.S.C. 3604(e)) is the illegal practice of inducing property owners to sell or rent by making representations regarding the entry or prospective entry of persons of a particular protected class into the neighborhood, often implying declining property values.',
    difficulty: 'easy',
    topicTag: 'prohibited-practices'
  },
  {
    id: 'ple-q-030',
    chapterId: 'ple-fair-housing-protected-classes',
    quizType: 'mock_exam',
    questionText: 'A real estate agent only shows properties in predominantly white neighborhoods to white buyers and properties in predominantly minority neighborhoods to minority buyers. This practice is known as:',
    options: [
      { id: 'a', text: 'Blockbusting', isCorrect: false },
      { id: 'b', text: 'Redlining', isCorrect: false },
      { id: 'c', text: 'Steering', isCorrect: true },
      { id: 'd', text: 'Channeling', isCorrect: false }
    ],
    explanation: 'Steering is the illegal practice of directing prospective buyers or renters toward or away from specific neighborhoods based on their membership in a protected class (42 U.S.C. 3604(a)). It perpetuates segregation and is a serious violation of the Fair Housing Act.',
    difficulty: 'easy',
    topicTag: 'prohibited-practices'
  }
]

// ============================================================
// MODULE 2: Real Estate Law & Board Regulations
// 60 questions | chapterId: ple-re-law-*
// ============================================================

const reLawQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-031',
    chapterId: 'ple-re-law-licensing',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, real estate licensing is governed by which regulatory body?',
    options: [
      { id: 'a', text: 'Virginia Association of REALTORS (VAR)', isCorrect: false },
      { id: 'b', text: 'Virginia Real Estate Board under the Department of Professional and Occupational Regulation (DPOR)', isCorrect: true },
      { id: 'c', text: 'Virginia Department of Housing and Community Development', isCorrect: false },
      { id: 'd', text: 'Virginia State Corporation Commission', isCorrect: false }
    ],
    explanation: 'The Virginia Real Estate Board (VREB), operating under the Department of Professional and Occupational Regulation (DPOR), is responsible for licensing and regulating real estate brokers and salespersons under Va. Code 54.1-2100 et seq.',
    difficulty: 'easy',
    topicTag: 'licensing-authority'
  },
  {
    id: 'ple-q-032',
    chapterId: 'ple-re-law-licensing',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia salesperson license must be renewed every:',
    options: [
      { id: 'a', text: '1 year', isCorrect: false },
      { id: 'b', text: '2 years', isCorrect: true },
      { id: 'c', text: '3 years', isCorrect: false },
      { id: 'd', text: '4 years', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2109, Virginia real estate licenses (both salesperson and broker) must be renewed every two years. Continuing education requirements must be completed prior to renewal.',
    difficulty: 'easy',
    topicTag: 'license-renewal'
  },
  {
    id: 'ple-q-033',
    chapterId: 'ple-re-law-licensing',
    quizType: 'chapter_quiz',
    questionText: 'How many hours of continuing education are required for Virginia real estate license renewal?',
    options: [
      { id: 'a', text: '8 hours per year', isCorrect: false },
      { id: 'b', text: '16 hours per renewal period', isCorrect: true },
      { id: 'c', text: '24 hours per renewal period', isCorrect: false },
      { id: 'd', text: '30 hours per renewal period', isCorrect: false }
    ],
    explanation: 'Virginia requires 16 hours of continuing education per two-year renewal period under 18 VAC 135-20-220. This must include required topics as specified by the Virginia Real Estate Board.',
    difficulty: 'easy',
    topicTag: 'continuing-education'
  },
  {
    id: 'ple-q-034',
    chapterId: 'ple-re-law-licensing',
    quizType: 'chapter_quiz',
    questionText: 'Post-license education (PLE) in Virginia must be completed within what timeframe after initial licensure?',
    options: [
      { id: 'a', text: '6 months', isCorrect: false },
      { id: 'b', text: '1 year (the first renewal period)', isCorrect: true },
      { id: 'c', text: '2 years', isCorrect: false },
      { id: 'd', text: '3 years', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-220, a new salesperson must complete 30 hours of PLE before their first license renewal. The initial license period is typically one year, and PLE must be completed during this period to renew on active status.',
    difficulty: 'easy',
    topicTag: 'post-license-education'
  },
  {
    id: 'ple-q-035',
    chapterId: 'ple-re-law-nfip',
    quizType: 'chapter_quiz',
    questionText: 'The National Flood Insurance Program (NFIP) is administered by which federal agency?',
    options: [
      { id: 'a', text: 'Environmental Protection Agency (EPA)', isCorrect: false },
      { id: 'b', text: 'Federal Emergency Management Agency (FEMA)', isCorrect: true },
      { id: 'c', text: 'Department of Housing and Urban Development (HUD)', isCorrect: false },
      { id: 'd', text: 'Army Corps of Engineers', isCorrect: false }
    ],
    explanation: 'The NFIP is administered by FEMA under the National Flood Insurance Act of 1968 (42 U.S.C. 4001 et seq.). Communities must participate in the NFIP to make federally backed flood insurance available to property owners.',
    difficulty: 'hard',
    topicTag: 'nfip'
  },
  {
    id: 'ple-q-036',
    chapterId: 'ple-re-law-nfip',
    quizType: 'chapter_quiz',
    questionText: 'Under the NFIP, a lender is required to mandate flood insurance when a property is located in which zone?',
    options: [
      { id: 'a', text: 'Zone X (moderate-to-low risk)', isCorrect: false },
      { id: 'b', text: 'Special Flood Hazard Area (SFHA), typically Zone A or Zone V', isCorrect: true },
      { id: 'c', text: 'Any zone identified on a FIRM map', isCorrect: false },
      { id: 'd', text: 'Only Zone V (coastal)', isCorrect: false }
    ],
    explanation: 'The Flood Disaster Protection Act of 1973 requires federally regulated lenders to mandate flood insurance for properties in Special Flood Hazard Areas (SFHAs) designated as Zone A (riverine) or Zone V (coastal) on FEMA Flood Insurance Rate Maps (FIRMs).',
    difficulty: 'medium',
    topicTag: 'nfip'
  },
  {
    id: 'ple-q-037',
    chapterId: 'ple-re-law-nfip',
    quizType: 'chapter_quiz',
    questionText: 'Which statement about the NFIP is TRUE?',
    options: [
      { id: 'a', text: 'Standard homeowner insurance policies always include flood coverage', isCorrect: false },
      { id: 'b', text: 'Flood insurance is only available to commercial properties', isCorrect: false },
      { id: 'c', text: 'There is typically a 30-day waiting period before a new NFIP policy takes effect', isCorrect: true },
      { id: 'd', text: 'NFIP policies cover both flood damage and earthquake damage', isCorrect: false }
    ],
    explanation: 'NFIP policies generally have a 30-day waiting period from the date of purchase before coverage begins (44 CFR 61.11). Exceptions include policies purchased in connection with a loan closing (effective at closing) and policies purchased during the 13-month period following a map revision.',
    difficulty: 'medium',
    topicTag: 'nfip'
  },
  {
    id: 'ple-q-038',
    chapterId: 'ple-re-law-megans-law',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia\'s sex offender registry laws (Megan\'s Law), a real estate licensee:',
    options: [
      { id: 'a', text: 'Must disclose if a registered sex offender lives in the neighborhood', isCorrect: false },
      { id: 'b', text: 'Is prohibited from disclosing sex offender information', isCorrect: false },
      { id: 'c', text: 'Is not required to disclose but may direct buyers to the Virginia State Police sex offender registry', isCorrect: true },
      { id: 'd', text: 'Must check the registry before every showing', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2135, Virginia licensees are not required to disclose information about sex offenders but may inform buyers that the Virginia State Police maintains a publicly accessible Sex Offender and Crimes Against Minors Registry. The registry is available at https://sex-offender.vsp.virginia.gov.',
    difficulty: 'medium',
    topicTag: 'megans-law'
  },
  {
    id: 'ple-q-039',
    chapterId: 'ple-re-law-megans-law',
    quizType: 'chapter_quiz',
    questionText: 'A buyer asks their agent if any sex offenders live near a property they are considering. The agent should:',
    options: [
      { id: 'a', text: 'Check the registry and provide the buyer with a complete list of offenders in the area', isCorrect: false },
      { id: 'b', text: 'Tell the buyer that information is confidential and cannot be shared', isCorrect: false },
      { id: 'c', text: 'Advise the buyer that the Virginia State Police sex offender registry is publicly available and provide the website', isCorrect: true },
      { id: 'd', text: 'Contact the local police department on behalf of the buyer', isCorrect: false }
    ],
    explanation: 'Per Va. Code 54.1-2135 and VREB guidance, the licensee should direct the buyer to the publicly accessible Virginia State Police Sex Offender Registry rather than personally researching or guaranteeing the information. This protects the licensee from liability for incomplete or inaccurate information.',
    difficulty: 'hard',
    topicTag: 'megans-law'
  },
  {
    id: 'ple-q-040',
    chapterId: 'ple-re-law-scra',
    quizType: 'chapter_quiz',
    questionText: 'The Servicemembers Civil Relief Act (SCRA) provides which protection to active-duty military members?',
    options: [
      { id: 'a', text: 'Free legal representation in all real estate transactions', isCorrect: false },
      { id: 'b', text: 'Interest rate cap of 6% on pre-service mortgages and protection from foreclosure', isCorrect: true },
      { id: 'c', text: 'Exemption from all property taxes', isCorrect: false },
      { id: 'd', text: 'Automatic approval for VA loans', isCorrect: false }
    ],
    explanation: 'The SCRA (50 U.S.C. 3901 et seq.) caps interest at 6% on pre-service financial obligations, provides protection against default judgments, stays civil proceedings, and restricts foreclosures during active duty and for a period after. These protections are critical for licensees to understand when working with military clients.',
    difficulty: 'medium',
    topicTag: 'scra'
  },
  {
    id: 'ple-q-041',
    chapterId: 'ple-re-law-scra',
    quizType: 'chapter_quiz',
    questionText: 'Under the SCRA, a servicemember on active duty can terminate a residential lease early without penalty if:',
    options: [
      { id: 'a', text: 'They simply prefer to move to another location', isCorrect: false },
      { id: 'b', text: 'They receive permanent change of station (PCS) orders or deployment orders for 90+ days', isCorrect: true },
      { id: 'c', text: 'Their commanding officer writes a letter of recommendation', isCorrect: false },
      { id: 'd', text: 'They have been on active duty for at least one year', isCorrect: false }
    ],
    explanation: 'Under 50 U.S.C. 3955, a servicemember may terminate a residential lease if they enter active duty or receive PCS orders or deployment orders for a period of 90 days or more. The lease terminates 30 days after the next rent payment date following delivery of written notice and a copy of orders.',
    difficulty: 'medium',
    topicTag: 'scra'
  },
  {
    id: 'ple-q-042',
    chapterId: 'ple-re-law-scra',
    quizType: 'mock_exam',
    questionText: 'A landlord receives a rent payment 10 days late from a tenant who was recently deployed. The landlord wants to begin eviction proceedings. Under the SCRA:',
    options: [
      { id: 'a', text: 'The landlord may proceed with eviction if rent is more than 5 days late', isCorrect: false },
      { id: 'b', text: 'The landlord must obtain a court order before evicting a servicemember, and the court may stay proceedings', isCorrect: true },
      { id: 'c', text: 'Military tenants are exempt from paying rent during deployment', isCorrect: false },
      { id: 'd', text: 'The landlord must wait exactly 90 days before filing for eviction', isCorrect: false }
    ],
    explanation: 'Under 50 U.S.C. 3951, eviction of a servicemember (for premises renting below a specified amount, adjusted annually) during military service requires a court order. The court may stay proceedings for up to 90 days or adjust the obligation to preserve the interests of all parties.',
    difficulty: 'hard',
    topicTag: 'scra'
  },
  {
    id: 'ple-q-043',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia\'s Residential Property Disclosure Act, the owner of a residential property must provide:',
    options: [
      { id: 'a', text: 'A comprehensive home inspection report', isCorrect: false },
      { id: 'b', text: 'A disclosure statement or a disclaimer statement ("as-is" disclosure)', isCorrect: true },
      { id: 'c', text: 'A warranty of all mechanical systems for one year', isCorrect: false },
      { id: 'd', text: 'An appraisal from a licensed appraiser', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-702 et seq., the Virginia Residential Property Disclosure Act requires sellers to provide either a residential property disclosure statement describing known material defects, or a disclaimer statement stating the property is sold "as-is" with no representations.',
    difficulty: 'easy',
    topicTag: 'property-disclosure'
  },
  {
    id: 'ple-q-044',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'When must a Virginia seller provide the property disclosure or disclaimer to the buyer?',
    options: [
      { id: 'a', text: 'At closing', isCorrect: false },
      { id: 'b', text: 'Before the contract is ratified', isCorrect: true },
      { id: 'c', text: 'Within 10 days after contract ratification', isCorrect: false },
      { id: 'd', text: 'At the home inspection', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-703, the disclosure or disclaimer must be provided to the buyer before the ratification of the real estate purchase contract. If not provided, the buyer has the right to void the contract.',
    difficulty: 'medium',
    topicTag: 'property-disclosure'
  },
  {
    id: 'ple-q-045',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Lead-based paint disclosure is required for residential properties built before:',
    options: [
      { id: 'a', text: '1960', isCorrect: false },
      { id: 'b', text: '1970', isCorrect: false },
      { id: 'c', text: '1978', isCorrect: true },
      { id: 'd', text: '1985', isCorrect: false }
    ],
    explanation: 'Under the Residential Lead-Based Paint Hazard Reduction Act of 1992 (42 U.S.C. 4852d), sellers and landlords of housing built before 1978 must disclose known lead-based paint hazards, provide an EPA pamphlet, and give buyers a 10-day period to conduct a lead inspection.',
    difficulty: 'easy',
    topicTag: 'lead-paint'
  },
  {
    id: 'ple-q-046',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a deed must be recorded in the:',
    options: [
      { id: 'a', text: 'Circuit court clerk\'s office of the city or county where the property is located', isCorrect: true },
      { id: 'b', text: 'Virginia Department of General Services', isCorrect: false },
      { id: 'c', text: 'County assessor\'s office', isCorrect: false },
      { id: 'd', text: 'Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-600, deeds and other instruments affecting title to real property must be recorded in the circuit court clerk\'s office of the jurisdiction where the property is situated. Recording provides constructive notice to the world.',
    difficulty: 'easy',
    topicTag: 'recording'
  },
  {
    id: 'ple-q-047',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'Virginia follows which type of recording statute?',
    options: [
      { id: 'a', text: 'Pure race statute', isCorrect: false },
      { id: 'b', text: 'Race-notice statute', isCorrect: true },
      { id: 'c', text: 'Pure notice statute', isCorrect: false },
      { id: 'd', text: 'Torrens system', isCorrect: false }
    ],
    explanation: 'Virginia is a race-notice jurisdiction (Va. Code 55.1-600). A subsequent purchaser for value who records first and had no actual or constructive notice of a prior unrecorded conveyance takes priority over the prior unrecorded grantee.',
    difficulty: 'medium',
    topicTag: 'recording-statute'
  },
  {
    id: 'ple-q-048',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'A general warranty deed provides which level of protection to the grantee?',
    options: [
      { id: 'a', text: 'No warranties of any kind', isCorrect: false },
      { id: 'b', text: 'Warranties limited to the grantor\'s period of ownership', isCorrect: false },
      { id: 'c', text: 'Full warranties against all title defects, including those arising before the grantor\'s ownership', isCorrect: true },
      { id: 'd', text: 'Protection only against liens and encumbrances', isCorrect: false }
    ],
    explanation: 'A general warranty deed provides the highest level of protection with covenants of seisin, right to convey, against encumbrances, quiet enjoyment, warranty, and further assurances, covering the entire chain of title, not just the grantor\'s period of ownership (Va. Code 55.1-600 et seq.).',
    difficulty: 'medium',
    topicTag: 'deeds'
  },
  {
    id: 'ple-q-049',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a tenancy by the entirety can only be held by:',
    options: [
      { id: 'a', text: 'Business partners', isCorrect: false },
      { id: 'b', text: 'Married couples', isCorrect: true },
      { id: 'c', text: 'Any two people who are related', isCorrect: false },
      { id: 'd', text: 'Parent and child', isCorrect: false }
    ],
    explanation: 'Under Virginia law, tenancy by the entirety is a form of concurrent ownership available only to married couples. Each spouse owns an undivided interest in the whole property with the right of survivorship, and neither spouse can unilaterally convey or encumber the property.',
    difficulty: 'easy',
    topicTag: 'concurrent-ownership'
  },
  {
    id: 'ple-q-050',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'Which of the following is grounds for disciplinary action by the Virginia Real Estate Board?',
    options: [
      { id: 'a', text: 'Advertising a property at a price approved by the seller', isCorrect: false },
      { id: 'b', text: 'Failing to include the firm name or firm\'s licensed name in all advertising', isCorrect: true },
      { id: 'c', text: 'Showing a property without the listing agent present', isCorrect: false },
      { id: 'd', text: 'Refusing to reduce a commission at a buyer\'s request', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-180, all advertising by a licensee must include the name of the firm as licensed with the Board. Failure to include the firm name in advertising, whether print, digital, or social media, is a violation of Board regulations.',
    difficulty: 'hard',
    topicTag: 'advertising-regulations'
  },
  {
    id: 'ple-q-051',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia real estate licensee changes their home address. They must notify the Real Estate Board within:',
    options: [
      { id: 'a', text: '10 days', isCorrect: false },
      { id: 'b', text: '30 days', isCorrect: true },
      { id: 'c', text: '60 days', isCorrect: false },
      { id: 'd', text: 'At the next renewal', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-60, a licensee must notify the Board in writing within 30 days of any change of address. Failure to maintain current contact information with the Board is a regulatory violation.',
    difficulty: 'easy',
    topicTag: 'board-notification'
  },
  {
    id: 'ple-q-052',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a salesperson\'s license is issued to:',
    options: [
      { id: 'a', text: 'The individual salesperson', isCorrect: false },
      { id: 'b', text: 'The supervising broker/firm that holds the salesperson\'s license', isCorrect: true },
      { id: 'c', text: 'The Virginia Association of REALTORS', isCorrect: false },
      { id: 'd', text: 'The local real estate board', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2109, a salesperson\'s license is issued to the broker or firm that employs the salesperson. The salesperson cannot practice independently and must operate under the supervision of their principal broker.',
    difficulty: 'easy',
    topicTag: 'license-structure'
  },
  {
    id: 'ple-q-053',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Real Estate Board may impose which of the following sanctions for a violation?',
    options: [
      { id: 'a', text: 'Criminal imprisonment', isCorrect: false },
      { id: 'b', text: 'Fine, license suspension, license revocation, or required education', isCorrect: true },
      { id: 'c', text: 'Only a written warning', isCorrect: false },
      { id: 'd', text: 'Only monetary penalties', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2112 and 18 VAC 135-20-300, the VREB may impose monetary penalties (up to $2,500 per violation), require additional education, suspend a license, revoke a license, or place a licensee on probation. Criminal penalties are separate and handled by courts.',
    difficulty: 'medium',
    topicTag: 'disciplinary-actions'
  },
  {
    id: 'ple-q-054',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'Adverse possession in Virginia requires continuous, open, and hostile possession for at least:',
    options: [
      { id: 'a', text: '5 years', isCorrect: false },
      { id: 'b', text: '10 years', isCorrect: false },
      { id: 'c', text: '15 years', isCorrect: true },
      { id: 'd', text: '20 years', isCorrect: false }
    ],
    explanation: 'Under Va. Code 8.01-236, adverse possession in Virginia requires actual, open, notorious, exclusive, hostile, and continuous possession for a statutory period of 15 years. The claimant must prove each element by clear and convincing evidence.',
    difficulty: 'medium',
    topicTag: 'adverse-possession'
  },
  {
    id: 'ple-q-055',
    chapterId: 'ple-re-law-land-use',
    quizType: 'chapter_quiz',
    questionText: 'Zoning authority in Virginia is granted to localities through which doctrine?',
    options: [
      { id: 'a', text: 'Eminent domain', isCorrect: false },
      { id: 'b', text: 'Police power', isCorrect: true },
      { id: 'c', text: 'Escheat', isCorrect: false },
      { id: 'd', text: 'Taxation power', isCorrect: false }
    ],
    explanation: 'Zoning is an exercise of police power delegated by the state to local governments under Va. Code 15.2-2280 et seq. It allows localities to regulate land use for the health, safety, and welfare of the community, subject to constitutional due process and equal protection limits.',
    difficulty: 'easy',
    topicTag: 'zoning'
  },
  {
    id: 'ple-q-056',
    chapterId: 'ple-re-law-land-use',
    quizType: 'chapter_quiz',
    questionText: 'A property owner seeks permission to use their residentially zoned property for a small business. They would apply for a:',
    options: [
      { id: 'a', text: 'Building permit', isCorrect: false },
      { id: 'b', text: 'Variance or special use permit', isCorrect: true },
      { id: 'c', text: 'Certificate of occupancy', isCorrect: false },
      { id: 'd', text: 'Title search', isCorrect: false }
    ],
    explanation: 'Under Virginia zoning law (Va. Code 15.2-2309), a special use permit (also called conditional use permit) allows a specific use not otherwise permitted in a zoning district. A variance (Va. Code 15.2-2201) addresses hardship situations where strict application of the ordinance is unreasonable.',
    difficulty: 'easy',
    topicTag: 'zoning'
  },
  {
    id: 'ple-q-057',
    chapterId: 'ple-re-law-contracts',
    quizType: 'chapter_quiz',
    questionText: 'Under the Virginia Statute of Frauds, a contract for the sale of real property must be:',
    options: [
      { id: 'a', text: 'Notarized and witnessed', isCorrect: false },
      { id: 'b', text: 'In writing and signed by the party to be charged', isCorrect: true },
      { id: 'c', text: 'Recorded in the land records', isCorrect: false },
      { id: 'd', text: 'Approved by an attorney', isCorrect: false }
    ],
    explanation: 'Under Va. Code 11.2-2 (Uniform Electronic Transactions Act) and the Statute of Frauds, contracts for the sale of real estate must be in writing and signed by the party to be charged (the party against whom enforcement is sought). Oral real estate contracts are generally unenforceable.',
    difficulty: 'easy',
    topicTag: 'statute-of-frauds'
  },
  {
    id: 'ple-q-058',
    chapterId: 'ple-re-law-contracts',
    quizType: 'chapter_quiz',
    questionText: 'The legal term for a contract where all parties have fulfilled their obligations is:',
    options: [
      { id: 'a', text: 'Executory contract', isCorrect: false },
      { id: 'b', text: 'Executed contract', isCorrect: true },
      { id: 'c', text: 'Voidable contract', isCorrect: false },
      { id: 'd', text: 'Unilateral contract', isCorrect: false }
    ],
    explanation: 'An executed contract is one where all parties have performed their obligations. An executory contract still has obligations remaining to be performed. In real estate, a sales contract remains executory from ratification until closing, when it becomes fully executed.',
    difficulty: 'easy',
    topicTag: 'contract-basics'
  },
  {
    id: 'ple-q-059',
    chapterId: 'ple-re-law-contracts',
    quizType: 'chapter_quiz',
    questionText: 'For a Virginia real estate contract to be valid, it must include:',
    options: [
      { id: 'a', text: 'A notary seal and two witnesses', isCorrect: false },
      { id: 'b', text: 'Offer, acceptance, consideration, legal capacity, and lawful purpose', isCorrect: true },
      { id: 'c', text: 'Approval from the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'A home inspection contingency', isCorrect: false }
    ],
    explanation: 'The essential elements of a valid contract are: (1) offer, (2) acceptance, (3) consideration, (4) legal capacity of the parties, and (5) lawful purpose. In Virginia, real estate contracts must also satisfy the Statute of Frauds (be in writing). These are fundamental contract law principles.',
    difficulty: 'easy',
    topicTag: 'contract-elements'
  },
  {
    id: 'ple-q-060',
    chapterId: 'ple-re-law-title',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, who typically conducts the real estate settlement (closing)?',
    options: [
      { id: 'a', text: 'The real estate agents', isCorrect: false },
      { id: 'b', text: 'A settlement agent (typically an attorney or title company)', isCorrect: true },
      { id: 'c', text: 'The county clerk', isCorrect: false },
      { id: 'd', text: 'The lender directly', isCorrect: false }
    ],
    explanation: 'Under the Virginia Consumer Real Estate Settlement Protection Act (Va. Code 55.1-900 et seq.), real estate closings must be conducted by a licensed settlement agent, which in Virginia is typically an attorney or title company registered with the Virginia State Bar.',
    difficulty: 'easy',
    topicTag: 'settlement'
  },
  {
    id: 'ple-q-061',
    chapterId: 'ple-re-law-title',
    quizType: 'chapter_quiz',
    questionText: 'Title insurance in Virginia protects against:',
    options: [
      { id: 'a', text: 'Future zoning changes', isCorrect: false },
      { id: 'b', text: 'Defects in title that existed before the policy date but were unknown at the time', isCorrect: true },
      { id: 'c', text: 'Physical damage to the property', isCorrect: false },
      { id: 'd', text: 'Declining property values', isCorrect: false }
    ],
    explanation: 'Title insurance protects against losses from defects in title that existed at the time of the policy issuance but were not known, such as forged documents, undisclosed liens, recording errors, or unknown heirs. Unlike other insurance, it looks backward in time rather than forward.',
    difficulty: 'medium',
    topicTag: 'title-insurance'
  },
  {
    id: 'ple-q-062',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'An easement appurtenant:',
    options: [
      { id: 'a', text: 'Benefits a specific person regardless of property ownership', isCorrect: false },
      { id: 'b', text: 'Runs with the land and benefits a neighboring property (dominant tenement)', isCorrect: true },
      { id: 'c', text: 'Can only be created by court order', isCorrect: false },
      { id: 'd', text: 'Terminates automatically after 10 years', isCorrect: false }
    ],
    explanation: 'An easement appurtenant involves two parcels: the dominant tenement (which benefits) and the servient tenement (which is burdened). It runs with the land, meaning it transfers with the property upon sale. This is distinguished from an easement in gross, which benefits a specific person or entity.',
    difficulty: 'medium',
    topicTag: 'easements'
  },
  {
    id: 'ple-q-063',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, eminent domain requires:',
    options: [
      { id: 'a', text: 'The property owner\'s consent', isCorrect: false },
      { id: 'b', text: 'A public use or purpose and just compensation to the property owner', isCorrect: true },
      { id: 'c', text: 'Approval of the Virginia General Assembly for each taking', isCorrect: false },
      { id: 'd', text: 'Replacement of the property with comparable property', isCorrect: false }
    ],
    explanation: 'Under the Fifth Amendment (applicable to states via the Fourteenth Amendment) and Va. Code 25.1-100 et seq., the government may take private property for public use provided it pays just compensation. Virginia amended its constitution in 2012 to further restrict the use of eminent domain.',
    difficulty: 'medium',
    topicTag: 'eminent-domain'
  },
  {
    id: 'ple-q-064',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'A principal broker in Virginia is responsible for:',
    options: [
      { id: 'a', text: 'Paying all licensee taxes', isCorrect: false },
      { id: 'b', text: 'Supervising all licensees affiliated with the firm and ensuring compliance with regulations', isCorrect: true },
      { id: 'c', text: 'Personally attending every closing', isCorrect: false },
      { id: 'd', text: 'Only the principal broker\'s own transactions', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2108.1 and 18 VAC 135-20-170, the principal broker (or supervising broker) is responsible for the supervision and conduct of all licensees associated with the firm. This includes ensuring compliance with all applicable laws and regulations.',
    difficulty: 'medium',
    topicTag: 'broker-responsibility'
  },
  {
    id: 'ple-q-065',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'mock_exam',
    questionText: 'A licensed salesperson wants to receive a referral fee from a mortgage broker for sending clients. This practice is:',
    options: [
      { id: 'a', text: 'Allowed if disclosed to the client', isCorrect: false },
      { id: 'b', text: 'Prohibited under the Real Estate Settlement Procedures Act (RESPA)', isCorrect: true },
      { id: 'c', text: 'Allowed if approved by the principal broker', isCorrect: false },
      { id: 'd', text: 'Allowed if the fee is less than $500', isCorrect: false }
    ],
    explanation: 'RESPA Section 8 (12 U.S.C. 2607) prohibits kickbacks and referral fees between settlement service providers. A real estate licensee receiving a fee solely for referring a client to a mortgage broker is a RESPA violation, regardless of disclosure, broker approval, or amount.',
    difficulty: 'hard',
    topicTag: 'respa'
  },
  {
    id: 'ple-q-066',
    chapterId: 'ple-re-law-landlord-tenant',
    quizType: 'chapter_quiz',
    questionText: 'Under the Virginia Residential Landlord and Tenant Act (VRLTA), a landlord must return a security deposit within how many days after move-out?',
    options: [
      { id: 'a', text: '15 days', isCorrect: false },
      { id: 'b', text: '30 days', isCorrect: false },
      { id: 'c', text: '45 days', isCorrect: true },
      { id: 'd', text: '60 days', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1226, a landlord must return the security deposit (or provide an itemized list of deductions) within 45 days after the termination of tenancy and delivery of possession. Failure to comply may result in the landlord forfeiting the right to withhold any portion.',
    difficulty: 'medium',
    topicTag: 'security-deposits'
  },
  {
    id: 'ple-q-067',
    chapterId: 'ple-re-law-landlord-tenant',
    quizType: 'chapter_quiz',
    questionText: 'Under the VRLTA, the maximum security deposit a landlord can collect is:',
    options: [
      { id: 'a', text: 'One month\'s rent', isCorrect: false },
      { id: 'b', text: 'Two months\' rent', isCorrect: true },
      { id: 'c', text: 'Three months\' rent', isCorrect: false },
      { id: 'd', text: 'There is no statutory limit', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1226, a landlord may not charge a security deposit exceeding two months\' periodic rent. This applies to residential properties governed by the VRLTA.',
    difficulty: 'easy',
    topicTag: 'security-deposits'
  },
  {
    id: 'ple-q-068',
    chapterId: 'ple-re-law-landlord-tenant',
    quizType: 'chapter_quiz',
    questionText: 'To terminate a month-to-month tenancy in Virginia, either party must provide written notice of at least:',
    options: [
      { id: 'a', text: '15 days', isCorrect: false },
      { id: 'b', text: '30 days', isCorrect: true },
      { id: 'c', text: '60 days', isCorrect: false },
      { id: 'd', text: '90 days', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1253, either party may terminate a month-to-month tenancy by providing at least 30 days\' written notice prior to the next rent due date.',
    difficulty: 'easy',
    topicTag: 'tenancy-termination'
  },
  {
    id: 'ple-q-069',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, sellers are required to disclose known:',
    options: [
      { id: 'a', text: 'Deaths that occurred on the property', isCorrect: false },
      { id: 'b', text: 'Defective drywall, pending building code actions, and whether the property is in a dam break inundation zone', isCorrect: true },
      { id: 'c', text: 'Only structural defects visible during a walkthrough', isCorrect: false },
      { id: 'd', text: 'Every minor repair made in the last 10 years', isCorrect: false }
    ],
    explanation: 'The Virginia Residential Property Disclosure Act (Va. Code 55.1-702 through 55.1-714) requires disclosure of specific items including defective drywall, pending building code violations, dam break inundation zones, and resource protection areas. Virginia does not require disclosure of death, suicide, or criminal activity on the property.',
    difficulty: 'medium',
    topicTag: 'required-disclosures'
  },
  {
    id: 'ple-q-070',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a licensee who discovers a material fact about a property:',
    options: [
      { id: 'a', text: 'May keep it confidential if instructed by the seller', isCorrect: false },
      { id: 'b', text: 'Must disclose it to all parties regardless of whom they represent', isCorrect: true },
      { id: 'c', text: 'Should only disclose it to their own client', isCorrect: false },
      { id: 'd', text: 'Has no obligation to disclose unless specifically asked', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, all Virginia licensees have a duty to disclose material facts to all parties in a transaction, regardless of their agency relationship. Material adverse facts known to the licensee cannot be concealed even at the client\'s direction.',
    difficulty: 'medium',
    topicTag: 'material-facts'
  },
  {
    id: 'ple-q-071',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'A mechanic\'s lien in Virginia must be filed within how many days of the last day of work or materials furnished?',
    options: [
      { id: 'a', text: '30 days', isCorrect: false },
      { id: 'b', text: '60 days', isCorrect: false },
      { id: 'c', text: '90 days', isCorrect: true },
      { id: 'd', text: '180 days', isCorrect: false }
    ],
    explanation: 'Under Va. Code 43-4, a mechanic\'s lien must be perfected by filing a memorandum of lien in the clerk\'s office within 90 days from the last day of the month in which the lienor last performed work or furnished materials.',
    difficulty: 'medium',
    topicTag: 'mechanics-liens'
  },
  {
    id: 'ple-q-072',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'mock_exam',
    questionText: 'In a Virginia foreclosure, the most common method used is:',
    options: [
      { id: 'a', text: 'Strict foreclosure', isCorrect: false },
      { id: 'b', text: 'Judicial foreclosure through circuit court', isCorrect: false },
      { id: 'c', text: 'Non-judicial foreclosure under a deed of trust with power of sale', isCorrect: true },
      { id: 'd', text: 'Tax sale foreclosure', isCorrect: false }
    ],
    explanation: 'Virginia predominantly uses deeds of trust rather than mortgages. Under Va. Code 55.1-320 et seq., the trustee in a deed of trust has the power to sell the property at public auction upon default, without court involvement (non-judicial foreclosure). The trustee must provide proper notice per statutory requirements.',
    difficulty: 'medium',
    topicTag: 'foreclosure'
  },
  {
    id: 'ple-q-073',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'Virginia uses which instrument to secure a mortgage loan on real property?',
    options: [
      { id: 'a', text: 'Promissory note only', isCorrect: false },
      { id: 'b', text: 'Deed of trust (with a trustee, borrower/grantor, and lender/beneficiary)', isCorrect: true },
      { id: 'c', text: 'Land contract', isCorrect: false },
      { id: 'd', text: 'Security agreement under the UCC', isCorrect: false }
    ],
    explanation: 'Virginia is a deed of trust state. The deed of trust involves three parties: the borrower (grantor), the lender (beneficiary), and a trustee who holds bare legal title as security. Upon full repayment, the trustee reconveys the property to the borrower.',
    difficulty: 'easy',
    topicTag: 'deed-of-trust'
  },
  {
    id: 'ple-q-074',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia licensee who practices real estate while their license is expired is guilty of:',
    options: [
      { id: 'a', text: 'A minor regulatory infraction with no legal consequence', isCorrect: false },
      { id: 'b', text: 'Practicing without a license, which is a Class 1 misdemeanor', isCorrect: true },
      { id: 'c', text: 'Only a Board violation with a fine', isCorrect: false },
      { id: 'd', text: 'A civil matter between the licensee and their broker', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2106.1, engaging in real estate activity without a valid license is a Class 1 misdemeanor in Virginia, punishable by up to 12 months in jail and/or a fine of up to $2,500, in addition to any Board disciplinary action.',
    difficulty: 'medium',
    topicTag: 'unlicensed-practice'
  },
  {
    id: 'ple-q-075',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'A team of real estate licensees in Virginia must:',
    options: [
      { id: 'a', text: 'Register as a separate brokerage', isCorrect: false },
      { id: 'b', text: 'Ensure team advertising includes the firm name and complies with Board regulations', isCorrect: true },
      { id: 'c', text: 'Have at least one broker on the team', isCorrect: false },
      { id: 'd', text: 'File a team registration form with the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-180, team advertising must comply with all Board advertising regulations, including prominently displaying the firm\'s licensed name. The team name cannot mislead the public into believing the team is a separate firm.',
    difficulty: 'medium',
    topicTag: 'team-advertising'
  },
  {
    id: 'ple-q-076',
    chapterId: 'ple-re-law-land-use',
    quizType: 'chapter_quiz',
    questionText: 'A nonconforming use in zoning law refers to:',
    options: [
      { id: 'a', text: 'An illegal use of the property', isCorrect: false },
      { id: 'b', text: 'A use that was legal when established but no longer conforms to current zoning', isCorrect: true },
      { id: 'c', text: 'A use that requires a special permit', isCorrect: false },
      { id: 'd', text: 'A temporary use allowed during construction', isCorrect: false }
    ],
    explanation: 'A nonconforming use (grandfathered use) was lawfully established before a zoning change that now prohibits such use. Under Va. Code 15.2-2307, nonconforming uses may continue but generally cannot be expanded. If abandoned for a specified period, the right to the nonconforming use may be lost.',
    difficulty: 'medium',
    topicTag: 'nonconforming-use'
  },
  {
    id: 'ple-q-077',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'mock_exam',
    questionText: 'A property owner dies without a will in Virginia. Their real property will be distributed according to:',
    options: [
      { id: 'a', text: 'The local circuit court judge\'s discretion', isCorrect: false },
      { id: 'b', text: 'Virginia\'s intestate succession statutes', isCorrect: true },
      { id: 'c', text: 'The property is escheated to the state immediately', isCorrect: false },
      { id: 'd', text: 'Equal distribution among all blood relatives', isCorrect: false }
    ],
    explanation: 'Under Va. Code 64.2-200 et seq., when a person dies intestate (without a will), property passes according to Virginia\'s intestate succession laws. The surviving spouse and descendants have priority. Property only escheats to the Commonwealth if there are no qualifying heirs.',
    difficulty: 'medium',
    topicTag: 'intestate-succession'
  },
  {
    id: 'ple-q-078',
    chapterId: 'ple-re-law-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Which of the following is NOT required to be disclosed under the Virginia Residential Property Disclosure Act?',
    options: [
      { id: 'a', text: 'Known defective drywall', isCorrect: false },
      { id: 'b', text: 'Whether a homicide occurred on the property', isCorrect: true },
      { id: 'c', text: 'Pending building code or zoning violations', isCorrect: false },
      { id: 'd', text: 'Location in a dam break inundation zone', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-712, no seller or licensee is required to disclose that a property was the site of a homicide, suicide, or felony, or that a person with HIV/AIDS occupied the property. These are considered not material to the physical condition of the property.',
    difficulty: 'medium',
    topicTag: 'stigmatized-property'
  },
  {
    id: 'ple-q-079',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia broker who misappropriates client funds from an escrow account may face:',
    options: [
      { id: 'a', text: 'A written warning from the Board', isCorrect: false },
      { id: 'b', text: 'License revocation, civil liability, and criminal charges for embezzlement', isCorrect: true },
      { id: 'c', text: 'Only a fine from the Real Estate Board', isCorrect: false },
      { id: 'd', text: 'Temporary suspension until funds are replaced', isCorrect: false }
    ],
    explanation: 'Misappropriation of escrow/trust funds is one of the most serious violations. Under Va. Code 54.1-2112, the Board can revoke the license. The licensee also faces civil liability for the misappropriated funds and criminal prosecution for embezzlement under Va. Code 18.2-111.',
    difficulty: 'medium',
    topicTag: 'escrow-misappropriation'
  },
  {
    id: 'ple-q-080',
    chapterId: 'ple-re-law-landlord-tenant',
    quizType: 'chapter_quiz',
    questionText: 'Under the VRLTA, a landlord must provide how many days written notice before entering a tenant\'s unit for non-emergency purposes?',
    options: [
      { id: 'a', text: '12 hours', isCorrect: false },
      { id: 'b', text: '24 hours', isCorrect: true },
      { id: 'c', text: '48 hours', isCorrect: false },
      { id: 'd', text: '72 hours', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1229, a landlord must provide at least 24 hours\' notice before entering a tenant\'s dwelling unit for routine maintenance, inspections, or showings. Entry must be at a reasonable time. In emergencies, no notice is required.',
    difficulty: 'easy',
    topicTag: 'landlord-entry'
  },
  {
    id: 'ple-q-081',
    chapterId: 'ple-re-law-title',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Consumer Real Estate Settlement Protection Act (CRESPA) requires settlement agents to:',
    options: [
      { id: 'a', text: 'Provide a 3-day cooling-off period for all transactions', isCorrect: false },
      { id: 'b', text: 'Maintain a surety bond or professional liability insurance and register with the Virginia State Bar', isCorrect: true },
      { id: 'c', text: 'Be licensed by the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'Only handle settlements for properties over $100,000', isCorrect: false }
    ],
    explanation: 'Under CRESPA (Va. Code 55.1-900 et seq.), settlement agents must be registered with the Virginia State Bar and maintain either a surety bond, letter of credit, or professional liability insurance to protect consumer funds during the settlement process.',
    difficulty: 'medium',
    topicTag: 'crespa'
  },
  {
    id: 'ple-q-082',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, a condominium is created under which statute?',
    options: [
      { id: 'a', text: 'Virginia Property Owners\' Association Act', isCorrect: false },
      { id: 'b', text: 'Virginia Condominium Act', isCorrect: true },
      { id: 'c', text: 'Virginia Uniform Statewide Building Code', isCorrect: false },
      { id: 'd', text: 'Virginia Residential Landlord and Tenant Act', isCorrect: false }
    ],
    explanation: 'The Virginia Condominium Act (Va. Code 55.1-1900 et seq.) governs the creation, management, and sale of condominiums. It requires filing a declaration and bylaws, establishing a unit owners\' association, and providing a resale certificate or public offering statement.',
    difficulty: 'easy',
    topicTag: 'condominium-act'
  },
  {
    id: 'ple-q-083',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'chapter_quiz',
    questionText: 'A buyer purchasing a condominium in Virginia has the right to receive a resale certificate from the unit owners\' association. The buyer then has how long to cancel the contract?',
    options: [
      { id: 'a', text: '3 days from receipt of the resale certificate', isCorrect: true },
      { id: 'b', text: '7 days from receipt of the resale certificate', isCorrect: false },
      { id: 'c', text: '10 days from contract ratification', isCorrect: false },
      { id: 'd', text: '15 days from receipt of the resale certificate', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1990, the purchaser has a 3-day right of cancellation after receiving the resale certificate. The resale certificate must contain information about assessments, reserves, pending litigation, and other material items about the condominium association.',
    difficulty: 'medium',
    topicTag: 'condominium-resale'
  },
  {
    id: 'ple-q-084',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'mock_exam',
    questionText: 'A salesperson discovers their supervising broker is engaging in unlawful activity related to client funds. The salesperson should:',
    options: [
      { id: 'a', text: 'Ignore it because they are not responsible for the broker\'s actions', isCorrect: false },
      { id: 'b', text: 'Report the activity to the Virginia Real Estate Board', isCorrect: true },
      { id: 'c', text: 'Personally confront the broker and demand they stop', isCorrect: false },
      { id: 'd', text: 'Transfer to another firm without reporting', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2112 and Board regulations, licensees have an obligation to report known violations. Failure to report a broker\'s unlawful handling of client funds could expose the salesperson to regulatory liability as well. The proper course is to report to DPOR/VREB.',
    difficulty: 'medium',
    topicTag: 'reporting-obligations'
  },
  {
    id: 'ple-q-085',
    chapterId: 'ple-re-law-nfip',
    quizType: 'mock_exam',
    questionText: 'A buyer is purchasing a property in a Special Flood Hazard Area with a federally backed mortgage. Which is TRUE?',
    options: [
      { id: 'a', text: 'The buyer may waive the flood insurance requirement by signing a disclosure', isCorrect: false },
      { id: 'b', text: 'The lender must require the borrower to purchase flood insurance and provide written notice of the flood zone determination', isCorrect: true },
      { id: 'c', text: 'Flood insurance is optional but recommended', isCorrect: false },
      { id: 'd', text: 'The seller must purchase the flood insurance policy', isCorrect: false }
    ],
    explanation: 'Under the Flood Disaster Protection Act of 1973 and the National Flood Insurance Reform Act of 1994, federally regulated lenders must: (1) determine if the property is in an SFHA, (2) provide written notice to the borrower, and (3) require flood insurance as a condition of the loan. The borrower cannot waive this requirement.',
    difficulty: 'hard',
    topicTag: 'nfip-mandatory'
  },
  {
    id: 'ple-q-086',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, a real estate licensee may represent both the buyer and seller in the same transaction only if:',
    options: [
      { id: 'a', text: 'Both parties sign a dual agency consent form acknowledging the limitations of dual agency', isCorrect: true },
      { id: 'b', text: 'The transaction value exceeds $500,000', isCorrect: false },
      { id: 'c', text: 'The listing agreement specifically prohibits it', isCorrect: false },
      { id: 'd', text: 'Dual agency is prohibited in Virginia under all circumstances', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2139, dual agency is permitted in Virginia but requires informed written consent of both the buyer and seller. The licensee must disclose the limitations of dual representation, including the inability to advocate exclusively for either party.',
    difficulty: 'medium',
    topicTag: 'dual-agency'
  },
  {
    id: 'ple-q-087',
    chapterId: 'ple-re-law-landlord-tenant',
    quizType: 'chapter_quiz',
    questionText: 'Under the VRLTA, a landlord cannot retaliate against a tenant for:',
    options: [
      { id: 'a', text: 'Paying rent late', isCorrect: false },
      { id: 'b', text: 'Filing a complaint with a local building inspector about code violations', isCorrect: true },
      { id: 'c', text: 'Subletting without permission', isCorrect: false },
      { id: 'd', text: 'Having unauthorized pets', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1258, retaliatory actions by a landlord (such as increasing rent, decreasing services, or threatening eviction) are prohibited when a tenant has exercised legal rights, including filing complaints with local authorities about building code violations.',
    difficulty: 'medium',
    topicTag: 'retaliatory-action'
  },
  {
    id: 'ple-q-088',
    chapterId: 'ple-re-law-contracts',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, the legal doctrine of "caveat emptor" (buyer beware) has been modified by:',
    options: [
      { id: 'a', text: 'The elimination of all buyer responsibility', isCorrect: false },
      { id: 'b', text: 'Statutory disclosure requirements and the duty to disclose known material defects', isCorrect: true },
      { id: 'c', text: 'The requirement that every home be sold with a warranty', isCorrect: false },
      { id: 'd', text: 'Federal regulations that override all state law', isCorrect: false }
    ],
    explanation: 'While Virginia historically followed caveat emptor, the Residential Property Disclosure Act (Va. Code 55.1-700 et seq.) and common law duties to disclose known material defects have significantly modified this principle. Sellers and agents must disclose known adverse material facts.',
    difficulty: 'medium',
    topicTag: 'caveat-emptor'
  },
  {
    id: 'ple-q-089',
    chapterId: 'ple-re-law-board-regulations',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Real Estate Transaction Recovery Fund is designed to:',
    options: [
      { id: 'a', text: 'Provide loans to first-time homebuyers', isCorrect: false },
      { id: 'b', text: 'Compensate consumers who suffer losses due to a licensee\'s improper or dishonest conduct', isCorrect: true },
      { id: 'c', text: 'Fund continuing education programs', isCorrect: false },
      { id: 'd', text: 'Pay for Board investigations', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2112.1 et seq., the Transaction Recovery Fund compensates consumers who have obtained an uncollectible civil judgment against a Virginia licensee for improper or dishonest conduct in a real estate transaction. The maximum recovery is $50,000 per transaction and $150,000 per licensee.',
    difficulty: 'medium',
    topicTag: 'recovery-fund'
  },
  {
    id: 'ple-q-090',
    chapterId: 'ple-re-law-property-rights',
    quizType: 'mock_exam',
    questionText: 'A Virginia homeowner granted an easement to a neighbor 20 years ago for driveway access. The neighbor has not used the driveway in 12 years. The easement is:',
    options: [
      { id: 'a', text: 'Automatically terminated after 10 years of non-use', isCorrect: false },
      { id: 'b', text: 'Still valid because non-use alone does not extinguish an express easement', isCorrect: true },
      { id: 'c', text: 'Void because it exceeded the 15-year statute of limitations', isCorrect: false },
      { id: 'd', text: 'Terminated by adverse possession', isCorrect: false }
    ],
    explanation: 'Under Virginia law, an express easement (created by written agreement) is not extinguished by mere non-use. Abandonment requires both non-use AND an affirmative act demonstrating intent to abandon. Simply not using the easement for a period of years does not constitute abandonment.',
    difficulty: 'hard',
    topicTag: 'easement-termination'
  }
]

// ============================================================
// MODULE 3: Ethics & Standards of Practice
// 35 questions | chapterId: ple-ethics-*
// ============================================================

const ethicsQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-091',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'The NAR Code of Ethics requires REALTORS to display which disclaimer when advertising?',
    options: [
      { id: 'a', text: '"Licensed in the state of Virginia"', isCorrect: false },
      { id: 'b', text: '"Equal Housing Opportunity"', isCorrect: false },
      { id: 'c', text: 'A statement that the Code of Ethics obligates them to honesty and fair dealing, but it is not a guarantee of conduct', isCorrect: true },
      { id: 'd', text: '"Member of the National Association of REALTORS since [year]"', isCorrect: false }
    ],
    explanation: 'NAR requires that when the Code of Ethics is referenced in marketing or advertising, REALTORS include a disclaimer that the Code is an aspirational standard obligating ethical conduct but does not guarantee the conduct of any particular member. This prevents consumers from relying on the Code as a warranty.',
    difficulty: 'medium',
    topicTag: 'nar-code-disclaimer'
  },
  {
    id: 'ple-q-092',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'Article 1 of the NAR Code of Ethics states that REALTORS must:',
    options: [
      { id: 'a', text: 'Always put their own financial interests first', isCorrect: false },
      { id: 'b', text: 'Pledge to protect and promote the interests of their client while treating all parties honestly', isCorrect: true },
      { id: 'c', text: 'Only represent sellers, never buyers', isCorrect: false },
      { id: 'd', text: 'Refuse to work with unrepresented parties', isCorrect: false }
    ],
    explanation: 'Article 1 of the NAR Code of Ethics requires REALTORS to pledge to protect and promote the interests of their client while treating all parties to the transaction honestly. This foundational article establishes the dual obligation of loyalty to clients and honesty to all parties.',
    difficulty: 'easy',
    topicTag: 'nar-article-1'
  },
  {
    id: 'ple-q-093',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'The fiduciary duties owed by a Virginia listing agent to their seller client include all EXCEPT:',
    options: [
      { id: 'a', text: 'Loyalty', isCorrect: false },
      { id: 'b', text: 'Confidentiality', isCorrect: false },
      { id: 'c', text: 'Obedience to all instructions, including unlawful ones', isCorrect: true },
      { id: 'd', text: 'Accounting', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 et seq., a licensee owes fiduciary duties of loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care. However, the duty of obedience does not extend to unlawful instructions. A licensee must not follow a client\'s direction to violate the law.',
    difficulty: 'medium',
    topicTag: 'fiduciary-duties'
  },
  {
    id: 'ple-q-094',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'A listing agent learns that the seller\'s property has a major foundation issue. The seller instructs the agent not to disclose it. The agent should:',
    options: [
      { id: 'a', text: 'Follow the seller\'s instructions since the agent owes the duty of obedience', isCorrect: false },
      { id: 'b', text: 'Disclose the foundation issue because material adverse facts must be disclosed to all parties', isCorrect: true },
      { id: 'c', text: 'Suggest the buyer get an inspection without revealing the specific issue', isCorrect: false },
      { id: 'd', text: 'Withdraw from the listing without disclosure', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, a licensee must disclose known material adverse facts to all parties regardless of whom they represent. The duty to disclose material defects overrides the duty of obedience to the client. Concealing a known foundation defect exposes the agent to liability.',
    difficulty: 'medium',
    topicTag: 'disclosure-vs-obedience'
  },
  {
    id: 'ple-q-095',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'Article 12 of the NAR Code of Ethics requires REALTORS to:',
    options: [
      { id: 'a', text: 'Always use professional photography in listings', isCorrect: false },
      { id: 'b', text: 'Present a true picture in their advertising and representations to the public', isCorrect: true },
      { id: 'c', text: 'Never use social media for advertising', isCorrect: false },
      { id: 'd', text: 'Only advertise properties they have personally inspected', isCorrect: false }
    ],
    explanation: 'Article 12 requires REALTORS to be honest and truthful in their real estate communications and to present a true picture in advertising, marketing, and other representations. This includes ensuring that property photos, descriptions, and claims are accurate and not misleading.',
    difficulty: 'easy',
    topicTag: 'nar-article-12'
  },
  {
    id: 'ple-q-096',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A real estate agent receives a request to show a property from a buyer who is currently represented by another agent. The listing agent should:',
    options: [
      { id: 'a', text: 'Show the property and try to get the buyer to switch agents', isCorrect: false },
      { id: 'b', text: 'Decline to show the property entirely', isCorrect: false },
      { id: 'c', text: 'Ask the buyer to contact their own agent to schedule the showing through proper channels', isCorrect: true },
      { id: 'd', text: 'Show the property but not discuss terms or pricing', isCorrect: false }
    ],
    explanation: 'Article 16 of the NAR Code of Ethics prohibits REALTORS from interfering with the agency relationships of other REALTORS. When a buyer is already represented, the listing agent should direct the buyer to work through their own agent for showings and negotiations.',
    difficulty: 'hard',
    topicTag: 'cooperating-agents'
  },
  {
    id: 'ple-q-097',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'Confidential information learned during an agency relationship in Virginia:',
    options: [
      { id: 'a', text: 'May be disclosed after the transaction closes', isCorrect: false },
      { id: 'b', text: 'Must be kept confidential indefinitely, even after the agency relationship ends', isCorrect: true },
      { id: 'c', text: 'Expires after 3 years', isCorrect: false },
      { id: 'd', text: 'May be shared with other agents in the same firm', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, the duty of confidentiality survives the termination of the agency relationship. A licensee must not disclose confidential information learned during representation unless authorized by the client or required by law.',
    difficulty: 'medium',
    topicTag: 'confidentiality'
  },
  {
    id: 'ple-q-098',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Article 3 of the NAR Code of Ethics addresses cooperation with other brokers. It states REALTORS shall:',
    options: [
      { id: 'a', text: 'Always split commissions equally', isCorrect: false },
      { id: 'b', text: 'Cooperate with other brokers unless it is not in the client\'s best interest', isCorrect: true },
      { id: 'c', text: 'Never share listings with competing brokers', isCorrect: false },
      { id: 'd', text: 'Only cooperate with REALTORS, not non-member licensees', isCorrect: false }
    ],
    explanation: 'Article 3 provides that REALTORS shall cooperate with other brokers except when cooperation is not in the client\'s best interest. The obligation to cooperate does not require equal compensation splits and is subject to the client\'s interests.',
    difficulty: 'medium',
    topicTag: 'cooperation'
  },
  {
    id: 'ple-q-099',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'Under the NAR Code of Ethics, a REALTOR who has an ethics complaint filed against them will have the case heard by:',
    options: [
      { id: 'a', text: 'The Virginia Real Estate Board', isCorrect: false },
      { id: 'b', text: 'The local board or association of REALTORS\' Grievance Committee and Professional Standards Committee', isCorrect: true },
      { id: 'c', text: 'A state or federal court', isCorrect: false },
      { id: 'd', text: 'The National Association of REALTORS directly', isCorrect: false }
    ],
    explanation: 'NAR Code of Ethics complaints are processed through the local board or association\'s Grievance Committee (which reviews the complaint) and Professional Standards Committee (which conducts the hearing). This is a private professional enforcement mechanism separate from state licensing authority.',
    difficulty: 'medium',
    topicTag: 'ethics-enforcement'
  },
  {
    id: 'ple-q-100',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A buyer\'s agent learns that the buyer can afford to pay $50,000 more than the listed price. This information is:',
    options: [
      { id: 'a', text: 'A material fact that must be disclosed to the seller', isCorrect: false },
      { id: 'b', text: 'Confidential client information that must not be disclosed to the seller or listing agent', isCorrect: true },
      { id: 'c', text: 'Something the agent should share to help close the deal', isCorrect: false },
      { id: 'd', text: 'Not relevant to the transaction', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2132 and Article 1 of the NAR Code, a buyer\'s agent owes a fiduciary duty of confidentiality. The buyer\'s financial capability, motivation, and willingness to pay more are confidential. Disclosing this information would violate the agent\'s fiduciary duty of loyalty and confidentiality.',
    difficulty: 'hard',
    topicTag: 'confidentiality'
  },
  {
    id: 'ple-q-101',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee is showing a property and the buyer makes a racist comment about the neighborhood demographics. The licensee should:',
    options: [
      { id: 'a', text: 'Agree with the buyer to maintain rapport', isCorrect: false },
      { id: 'b', text: 'Ignore the comment and continue the showing', isCorrect: false },
      { id: 'c', text: 'Firmly redirect the conversation and refrain from providing information about neighborhood demographics based on race', isCorrect: true },
      { id: 'd', text: 'End the showing immediately and refuse to work with the buyer', isCorrect: false }
    ],
    explanation: 'Under Article 10 of the NAR Code of Ethics and the Fair Housing Act, a licensee must not provide information about neighborhood demographics based on protected classes. The agent should redirect the conversation to property features and community amenities without engaging in discriminatory discussion.',
    difficulty: 'medium',
    topicTag: 'fair-housing-ethics'
  },
  {
    id: 'ple-q-102',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'Article 9 of the NAR Code of Ethics requires REALTORS to:',
    options: [
      { id: 'a', text: 'Make all agreements in writing', isCorrect: true },
      { id: 'b', text: 'Only work with pre-approved buyers', isCorrect: false },
      { id: 'c', text: 'Provide free comparative market analyses', isCorrect: false },
      { id: 'd', text: 'Attend every home inspection', isCorrect: false }
    ],
    explanation: 'Article 9 requires REALTORS to assure, whenever possible, that all agreements related to real estate transactions are in writing, expressing the specific terms, conditions, obligations, and commitments of the parties. This protects all parties and reduces misunderstandings.',
    difficulty: 'easy',
    topicTag: 'written-agreements'
  },
  {
    id: 'ple-q-103',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'mock_exam',
    questionText: 'A licensee discovers that a competing agent has made false claims about a property in their marketing materials. Under the NAR Code of Ethics, the licensee should:',
    options: [
      { id: 'a', text: 'Post about it on social media to warn consumers', isCorrect: false },
      { id: 'b', text: 'File an ethics complaint with the local board of REALTORS', isCorrect: true },
      { id: 'c', text: 'Confront the agent publicly at an open house', isCorrect: false },
      { id: 'd', text: 'Report it to the media', isCorrect: false }
    ],
    explanation: 'Article 15 of the NAR Code provides that REALTORS shall not knowingly make false or misleading statements about other practitioners. If a REALTOR becomes aware of potentially unethical conduct, they should file an ethics complaint with the local board rather than taking matters into their own hands.',
    difficulty: 'medium',
    topicTag: 'ethics-complaints'
  },
  {
    id: 'ple-q-104',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'The duty of "accounting" in a fiduciary relationship means the agent must:',
    options: [
      { id: 'a', text: 'Prepare the client\'s tax returns', isCorrect: false },
      { id: 'b', text: 'Account for all money and property received on behalf of the client', isCorrect: true },
      { id: 'c', text: 'Provide monthly financial statements to the client', isCorrect: false },
      { id: 'd', text: 'Hire a CPA for the transaction', isCorrect: false }
    ],
    explanation: 'The fiduciary duty of accounting requires the agent to safeguard and account for all money, documents, and property entrusted to them by the client. This includes earnest money deposits, keys, and any other items received in connection with the transaction (Va. Code 54.1-2131 et seq.).',
    difficulty: 'easy',
    topicTag: 'accounting-duty'
  },
  {
    id: 'ple-q-105',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee receives multiple offers on a listing. The licensee should:',
    options: [
      { id: 'a', text: 'Only present the highest offer to the seller', isCorrect: false },
      { id: 'b', text: 'Present all offers to the seller promptly and let the seller decide', isCorrect: true },
      { id: 'c', text: 'Hold offers until the open house period ends', isCorrect: false },
      { id: 'd', text: 'Select the best offer and present only that one', isCorrect: false }
    ],
    explanation: 'Under Article 1, Standard of Practice 1-6 of the NAR Code of Ethics and Va. Code 54.1-2131, a listing agent must present all written offers to the seller promptly unless the seller has given written instructions to the contrary. The seller, not the agent, decides which offer to accept.',
    difficulty: 'hard',
    topicTag: 'presenting-offers'
  },
  {
    id: 'ple-q-106',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee wants to purchase a property for themselves that is listed by their firm. This situation requires:',
    options: [
      { id: 'a', text: 'No special disclosure since the licensee works for the firm', isCorrect: false },
      { id: 'b', text: 'Written disclosure to the seller that the buyer is a licensed real estate agent', isCorrect: true },
      { id: 'c', text: 'Approval from the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'An independent appraisal before making an offer', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135 and Article 4 of the NAR Code, licensees must disclose their licensed status when they have a personal interest in a transaction. This disclosure must be in writing and provided before or at the time an offer is presented.',
    difficulty: 'easy',
    topicTag: 'self-dealing-disclosure'
  },
  {
    id: 'ple-q-107',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Under the NAR Code of Ethics, a REALTOR who becomes aware of potential misrepresentation in their own transaction must:',
    options: [
      { id: 'a', text: 'Wait to see if anyone notices', isCorrect: false },
      { id: 'b', text: 'Take immediate steps to correct the misrepresentation', isCorrect: true },
      { id: 'c', text: 'Only act if the client complains', isCorrect: false },
      { id: 'd', text: 'Refer the matter to an attorney without further action', isCorrect: false }
    ],
    explanation: 'Under Article 2 and Standard of Practice 2-4, REALTORS must take steps to correct any misrepresentations they discover in a transaction. This includes correcting marketing errors, misstatements about property conditions, and any other inaccurate information.',
    difficulty: 'medium',
    topicTag: 'correcting-misrepresentation'
  },
  {
    id: 'ple-q-108',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'The NAR Code of Ethics contains how many Articles?',
    options: [
      { id: 'a', text: '10', isCorrect: false },
      { id: 'b', text: '13', isCorrect: false },
      { id: 'c', text: '17', isCorrect: true },
      { id: 'd', text: '20', isCorrect: false }
    ],
    explanation: 'The NAR Code of Ethics contains 17 Articles organized into three sections: Duties to Clients and Customers (Articles 1-9), Duties to the Public (Articles 10-14), and Duties to REALTORS (Articles 15-17). Each Article has interpretive Standards of Practice.',
    difficulty: 'easy',
    topicTag: 'nar-code-structure'
  },
  {
    id: 'ple-q-109',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee asks a client to sign a document without fully explaining its contents. This violates which ethical principle?',
    options: [
      { id: 'a', text: 'The duty of confidentiality', isCorrect: false },
      { id: 'b', text: 'The duty of reasonable care and the obligation to explain documents', isCorrect: true },
      { id: 'c', text: 'The duty of obedience', isCorrect: false },
      { id: 'd', text: 'The duty of accounting', isCorrect: false }
    ],
    explanation: 'The fiduciary duty of reasonable care includes ensuring the client understands the documents they are signing. Under Article 9 of the NAR Code and Virginia law, licensees must make reasonable efforts to explain documents to clients before they sign.',
    difficulty: 'medium',
    topicTag: 'duty-of-care'
  },
  {
    id: 'ple-q-110',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'mock_exam',
    questionText: 'A listing agent notices during a showing that the property has visible mold in the basement that was not there during the initial listing. The agent should:',
    options: [
      { id: 'a', text: 'Mention it to the buyer\'s agent after the showing if asked', isCorrect: false },
      { id: 'b', text: 'Notify the seller and ensure disclosure to all prospective buyers', isCorrect: true },
      { id: 'c', text: 'Ignore it because the property disclosure was already provided', isCorrect: false },
      { id: 'd', text: 'Cover it up to avoid delaying the sale', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, material adverse facts known to the licensee must be disclosed to all parties. A newly discovered defect like mold constitutes a material adverse fact. The agent must inform the seller and ensure updated disclosure to prospective buyers.',
    difficulty: 'medium',
    topicTag: 'ongoing-disclosure'
  },
  {
    id: 'ple-q-111',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'Article 10 of the NAR Code of Ethics addresses:',
    options: [
      { id: 'a', text: 'Commission disputes between REALTORS', isCorrect: false },
      { id: 'b', text: 'Non-discrimination and equal professional services regardless of protected class', isCorrect: true },
      { id: 'c', text: 'Advertising standards for online listings', isCorrect: false },
      { id: 'd', text: 'Requirements for written buyer representation agreements', isCorrect: false }
    ],
    explanation: 'Article 10 provides that REALTORS shall not deny equal professional services based on race, color, religion, sex, disability, familial status, national origin, sexual orientation, or gender identity. It mirrors and reinforces fair housing obligations.',
    difficulty: 'easy',
    topicTag: 'nar-article-10'
  },
  {
    id: 'ple-q-112',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee is asked by a buyer client to write an offer that includes a personal letter to the seller describing the buyer\'s family. The licensee should:',
    options: [
      { id: 'a', text: 'Encourage the letter as it helps the buyer stand out', isCorrect: false },
      { id: 'b', text: 'Advise the buyer of fair housing concerns because such letters may reveal protected class information and could expose the seller to liability', isCorrect: true },
      { id: 'c', text: 'Write the letter on behalf of the buyer', isCorrect: false },
      { id: 'd', text: 'Refuse to submit the offer if it includes a letter', isCorrect: false }
    ],
    explanation: 'NAR has issued guidance cautioning against "love letters" to sellers because they may reveal information about the buyer\'s race, religion, familial status, national origin, or other protected classes. While not outright prohibited, the licensee should advise clients of the fair housing risks.',
    difficulty: 'hard',
    topicTag: 'love-letters'
  },
  {
    id: 'ple-q-113',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'The duty of loyalty in a fiduciary relationship means the agent must:',
    options: [
      { id: 'a', text: 'Always agree with the client\'s opinions', isCorrect: false },
      { id: 'b', text: 'Place the client\'s interests above the agent\'s own interests or those of third parties', isCorrect: true },
      { id: 'c', text: 'Only work with one client at a time', isCorrect: false },
      { id: 'd', text: 'Provide legal and financial advice', isCorrect: false }
    ],
    explanation: 'The duty of loyalty requires the agent to prioritize the client\'s legitimate interests above their own or any third party\'s. This includes avoiding conflicts of interest, not engaging in self-dealing, and not acquiring any advantage at the client\'s expense (Va. Code 54.1-2131 et seq.).',
    difficulty: 'easy',
    topicTag: 'loyalty-duty'
  },
  {
    id: 'ple-q-114',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A buyer\'s agent believes the listing price of a property is significantly above market value. The agent should:',
    options: [
      { id: 'a', text: 'Tell the buyer to offer the listing price to avoid losing the property', isCorrect: false },
      { id: 'b', text: 'Provide comparable market data and advise the buyer of their professional opinion of value', isCorrect: true },
      { id: 'c', text: 'Contact the listing agent and tell them the price is too high', isCorrect: false },
      { id: 'd', text: 'Refuse to show the property', isCorrect: false }
    ],
    explanation: 'Under the duty of reasonable care and loyalty (Va. Code 54.1-2132), a buyer\'s agent must provide competent advice, including professional opinions on value based on comparable sales data. The agent should not withhold professional guidance that could affect the buyer\'s financial interests.',
    difficulty: 'easy',
    topicTag: 'competent-advice'
  },
  {
    id: 'ple-q-115',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'mock_exam',
    questionText: 'An agent is handling a transaction where the buyer is their close family member. Which ethical obligation applies?',
    options: [
      { id: 'a', text: 'No special obligations since family transactions are private', isCorrect: false },
      { id: 'b', text: 'The agent must disclose the family relationship to all parties in writing', isCorrect: true },
      { id: 'c', text: 'The agent must decline the transaction entirely', isCorrect: false },
      { id: 'd', text: 'The agent only needs to disclose if asked directly', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 et seq. and Article 4 of the NAR Code, licensees must disclose any personal interest in a transaction, including family relationships, in writing to all parties. This allows other parties to make informed decisions about the transaction.',
    difficulty: 'medium',
    topicTag: 'conflict-of-interest'
  },
  {
    id: 'ple-q-116',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Article 11 of the NAR Code of Ethics deals with:',
    options: [
      { id: 'a', text: 'Commission splitting with non-licensees', isCorrect: false },
      { id: 'b', text: 'Competency; REALTORS must only undertake activities they are competent to perform or engage qualified assistance', isCorrect: true },
      { id: 'c', text: 'Arbitration of financial disputes', isCorrect: false },
      { id: 'd', text: 'Environmental disclosures', isCorrect: false }
    ],
    explanation: 'Article 11 requires REALTORS to be knowledgeable and competent in the fields of practice they engage in. If a REALTOR is not competent in a particular area, they must either decline the engagement or engage qualified assistance, such as an attorney, appraiser, or specialist.',
    difficulty: 'medium',
    topicTag: 'competency'
  },
  {
    id: 'ple-q-117',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Under Article 17 of the NAR Code, disputes between REALTORS involving contractual issues or specific non-contractual disputes shall be resolved through:',
    options: [
      { id: 'a', text: 'Litigation in civil court', isCorrect: false },
      { id: 'b', text: 'Mediation and/or arbitration through the local board', isCorrect: true },
      { id: 'c', text: 'Direct negotiation only', isCorrect: false },
      { id: 'd', text: 'Report to the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Article 17 requires REALTORS to submit certain disputes to mediation and/or arbitration through their local association rather than filing lawsuits. This applies to contractual disputes and specific non-contractual disputes defined in the Standards of Practice.',
    difficulty: 'medium',
    topicTag: 'arbitration'
  },
  {
    id: 'ple-q-118',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A licensee overhears confidential information about a client at a social gathering. The licensee should:',
    options: [
      { id: 'a', text: 'Use the information to benefit their other clients', isCorrect: false },
      { id: 'b', text: 'Share the information with their principal broker for guidance', isCorrect: false },
      { id: 'c', text: 'Not disclose or use the information in any manner adverse to the client', isCorrect: true },
      { id: 'd', text: 'Report the information to the Real Estate Board', isCorrect: false }
    ],
    explanation: 'Confidential information, however obtained, must not be used to the disadvantage of the client. Under Virginia agency law and the NAR Code of Ethics, the duty of confidentiality extends to information learned through any means, not just formal business discussions.',
    difficulty: 'medium',
    topicTag: 'confidentiality-scope'
  },
  {
    id: 'ple-q-119',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'chapter_quiz',
    questionText: 'The NAR Code of Ethics applies to:',
    options: [
      { id: 'a', text: 'All licensed real estate agents in the United States', isCorrect: false },
      { id: 'b', text: 'Only members of the National Association of REALTORS', isCorrect: true },
      { id: 'c', text: 'Only broker-level licensees', isCorrect: false },
      { id: 'd', text: 'All members of the public engaged in real estate transactions', isCorrect: false }
    ],
    explanation: 'The NAR Code of Ethics is a professional standard that applies only to members of the National Association of REALTORS (who use the trademarked term REALTOR). Non-member licensees are still subject to state licensing law but not the NAR Code. Virginia state law (Va. Code 54.1-2100 et seq.) governs all licensees.',
    difficulty: 'easy',
    topicTag: 'code-applicability'
  },
  {
    id: 'ple-q-120',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia licensee receives a gift from a title company for referring clients. This practice:',
    options: [
      { id: 'a', text: 'Is acceptable if the gift is under $100', isCorrect: false },
      { id: 'b', text: 'Is a RESPA violation regardless of the gift value', isCorrect: true },
      { id: 'c', text: 'Is only prohibited if not disclosed to the client', isCorrect: false },
      { id: 'd', text: 'Is allowed if approved by the principal broker', isCorrect: false }
    ],
    explanation: 'RESPA Section 8 (12 U.S.C. 2607) prohibits giving or accepting any "thing of value" for referrals of settlement services, regardless of amount. This includes gifts, trips, tickets, and other compensation. Violations can result in fines up to $10,000 and imprisonment up to one year.',
    difficulty: 'hard',
    topicTag: 'respa-kickbacks'
  },
  {
    id: 'ple-q-121',
    chapterId: 'ple-ethics-nar-code',
    quizType: 'mock_exam',
    questionText: 'NAR requires its members to complete ethics training of at least 2.5 hours every:',
    options: [
      { id: 'a', text: 'Year', isCorrect: false },
      { id: 'b', text: 'Two years', isCorrect: false },
      { id: 'c', text: 'Three-year cycle', isCorrect: true },
      { id: 'd', text: 'Five years', isCorrect: false }
    ],
    explanation: 'NAR requires members to complete a minimum of 2.5 hours of ethics training every three-year cycle. Failure to complete this requirement can result in suspension of membership. This is separate from state-mandated continuing education requirements.',
    difficulty: 'medium',
    topicTag: 'ethics-training-requirement'
  },
  {
    id: 'ple-q-122',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'When a licensee provides a comparative market analysis (CMA) to a seller, the licensee must:',
    options: [
      { id: 'a', text: 'Certify it meets USPAP appraisal standards', isCorrect: false },
      { id: 'b', text: 'Clearly identify it as a CMA and not an appraisal', isCorrect: true },
      { id: 'c', text: 'Have it reviewed by a licensed appraiser', isCorrect: false },
      { id: 'd', text: 'File a copy with the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Under Virginia law and NAR standards, a CMA prepared by a licensee is not an appraisal. The licensee must clearly distinguish the CMA from a formal appraisal to avoid practicing as an unlicensed appraiser. CMAs are a service provided to help clients make informed pricing decisions.',
    difficulty: 'medium',
    topicTag: 'cma-standards'
  },
  {
    id: 'ple-q-123',
    chapterId: 'ple-ethics-fiduciary',
    quizType: 'chapter_quiz',
    questionText: 'In a designated agency situation in Virginia, each designated agent owes fiduciary duties to:',
    options: [
      { id: 'a', text: 'Both the buyer and the seller equally', isCorrect: false },
      { id: 'b', text: 'Only their designated client', isCorrect: true },
      { id: 'c', text: 'The brokerage firm', isCorrect: false },
      { id: 'd', text: 'Neither party since it creates a conflict', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130.1, in designated agency (also called designated representation), each agent owes full fiduciary duties only to their designated client. This allows agents within the same firm to represent opposing parties while maintaining individual fiduciary responsibilities.',
    difficulty: 'medium',
    topicTag: 'designated-agency'
  },
  {
    id: 'ple-q-124',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Article 7 of the NAR Code of Ethics states that REALTORS who are compensated by more than one party in a transaction must:',
    options: [
      { id: 'a', text: 'Return the excess compensation', isCorrect: false },
      { id: 'b', text: 'Disclose the compensation from all parties to all parties in writing and obtain consent', isCorrect: true },
      { id: 'c', text: 'Split the compensation equally', isCorrect: false },
      { id: 'd', text: 'Refuse the additional compensation', isCorrect: false }
    ],
    explanation: 'Article 7 requires full written disclosure and consent when a REALTOR receives compensation from more than one party. Transparency in compensation is essential to maintaining trust and avoiding conflicts of interest.',
    difficulty: 'medium',
    topicTag: 'compensation-disclosure'
  },
  {
    id: 'ple-q-125',
    chapterId: 'ple-ethics-professionalism',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, a licensee who personally witnesses a criminal act while showing a property:',
    options: [
      { id: 'a', text: 'Has no legal obligation to report it', isCorrect: false },
      { id: 'b', text: 'Should report it to law enforcement and may need to disclose it as a material fact affecting the property', isCorrect: true },
      { id: 'c', text: 'Must keep it confidential as part of the listing agreement', isCorrect: false },
      { id: 'd', text: 'Should only report it if it involves the property owner', isCorrect: false }
    ],
    explanation: 'While Virginia does not require disclosure of past crimes on a property (Va. Code 55.1-712), a licensee who witnesses ongoing criminal activity has civic obligations and should also consider whether the activity constitutes a material adverse fact affecting the property or its use.',
    difficulty: 'hard',
    topicTag: 'criminal-activity'
  }
]

// ============================================================
// MODULE 4: Current Industry Issues & Trends
// 25 questions | chapterId: ple-current-issues-*
// ============================================================

const currentIssuesQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-126',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'The 2024 NAR settlement agreement primarily addressed concerns about:',
    options: [
      { id: 'a', text: 'Zoning reform and land use policy', isCorrect: false },
      { id: 'b', text: 'Buyer agent compensation transparency and MLS cooperative compensation rules', isCorrect: true },
      { id: 'c', text: 'Environmental disclosure requirements', isCorrect: false },
      { id: 'd', text: 'Foreign investment restrictions in U.S. real estate', isCorrect: false }
    ],
    explanation: 'The 2024 NAR settlement (Burnett v. NAR / Sitzer-Burnett) addressed allegations that MLS rules requiring listing brokers to offer blanket cooperative compensation to buyer brokers inflated commissions. The settlement eliminated mandatory cooperative compensation offers on the MLS.',
    difficulty: 'easy',
    topicTag: 'nar-settlement'
  },
  {
    id: 'ple-q-127',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'As a result of the NAR settlement, which practice change was implemented?',
    options: [
      { id: 'a', text: 'Sellers are prohibited from paying buyer agent commissions', isCorrect: false },
      { id: 'b', text: 'Offers of buyer broker compensation can no longer be communicated through the MLS', isCorrect: true },
      { id: 'c', text: 'All real estate commissions are now set by the government', isCorrect: false },
      { id: 'd', text: 'Buyer agents are no longer permitted to practice', isCorrect: false }
    ],
    explanation: 'The NAR settlement requires that offers of compensation to buyer brokers not be communicated through the MLS. Sellers may still choose to offer compensation to buyer brokers, but such offers must be communicated outside the MLS through negotiation, listing websites, or other means.',
    difficulty: 'medium',
    topicTag: 'nar-settlement'
  },
  {
    id: 'ple-q-128',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'Under the post-NAR-settlement rules, before a buyer agent can show a property listed on the MLS, the buyer agent must:',
    options: [
      { id: 'a', text: 'Obtain a credit report from the buyer', isCorrect: false },
      { id: 'b', text: 'Have a written buyer representation agreement in place that specifies compensation', isCorrect: true },
      { id: 'c', text: 'Register with the listing brokerage', isCorrect: false },
      { id: 'd', text: 'Provide proof of errors and omissions insurance', isCorrect: false }
    ],
    explanation: 'The NAR settlement requires MLS participants working with buyers to enter into written buyer representation agreements before touring MLS-listed homes. The agreement must clearly specify the compensation the buyer agent will receive and how it will be paid.',
    difficulty: 'medium',
    topicTag: 'buyer-agreements'
  },
  {
    id: 'ple-q-129',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'Following the NAR settlement, buyer agent compensation:',
    options: [
      { id: 'a', text: 'Must always be paid by the buyer directly', isCorrect: false },
      { id: 'b', text: 'Is fully negotiable and may be paid by the buyer, seller, or through concessions', isCorrect: true },
      { id: 'c', text: 'Is fixed at 3% nationally', isCorrect: false },
      { id: 'd', text: 'Is prohibited by antitrust law', isCorrect: false }
    ],
    explanation: 'The settlement does not prohibit sellers from offering to pay buyer agent compensation. It remains fully negotiable between parties. Buyers may negotiate for seller concessions to cover buyer agent fees, pay directly, or the seller may voluntarily offer compensation. The key change is transparency and negotiability.',
    difficulty: 'medium',
    topicTag: 'compensation-negotiation'
  },
  {
    id: 'ple-q-130',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'Wire fraud in real estate transactions typically occurs when:',
    options: [
      { id: 'a', text: 'A buyer pays with a personal check', isCorrect: false },
      { id: 'b', text: 'Criminals intercept emails and send fraudulent wiring instructions to divert closing funds', isCorrect: true },
      { id: 'c', text: 'The lender charges excessive wire transfer fees', isCorrect: false },
      { id: 'd', text: 'A title company processes wires on weekends', isCorrect: false }
    ],
    explanation: 'Real estate wire fraud is a growing cybersecurity threat where criminals compromise email accounts (often through phishing) and send altered wiring instructions to buyers, diverting closing funds to fraudulent accounts. The FBI reports hundreds of millions in losses annually. Best practice is to verify wiring instructions by phone using a known number.',
    difficulty: 'hard',
    topicTag: 'wire-fraud'
  },
  {
    id: 'ple-q-131',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'Which best practice helps prevent wire fraud in real estate closings?',
    options: [
      { id: 'a', text: 'Always wire funds immediately upon receiving email instructions', isCorrect: false },
      { id: 'b', text: 'Verify wiring instructions by calling the settlement agent at a known phone number, not the one in the email', isCorrect: true },
      { id: 'c', text: 'Use cryptocurrency for all closing transactions', isCorrect: false },
      { id: 'd', text: 'Send wiring instructions via text message instead of email', isCorrect: false }
    ],
    explanation: 'The FBI, NAR, and the American Land Title Association recommend verifying all wiring instructions by calling the settlement company at a phone number obtained independently (not from the email). Never rely solely on emailed wiring instructions, as email accounts are frequently compromised.',
    difficulty: 'hard',
    topicTag: 'wire-fraud-prevention'
  },
  {
    id: 'ple-q-132',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'Institutional investors purchasing single-family homes for rental portfolios has raised concerns about:',
    options: [
      { id: 'a', text: 'Lowering property values in affected neighborhoods', isCorrect: false },
      { id: 'b', text: 'Reducing housing inventory and affordability for owner-occupant buyers', isCorrect: true },
      { id: 'c', text: 'Increasing the supply of available homes for sale', isCorrect: false },
      { id: 'd', text: 'Improving the quality of rental housing stock', isCorrect: false }
    ],
    explanation: 'Institutional investors purchasing large numbers of single-family homes, particularly in affordable price ranges, has drawn scrutiny for reducing inventory available to owner-occupant buyers and contributing to affordability challenges. Several states and localities are considering legislation to address this trend.',
    difficulty: 'easy',
    topicTag: 'institutional-investors'
  },
  {
    id: 'ple-q-133',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'Virginia\'s housing affordability challenges are primarily driven by:',
    options: [
      { id: 'a', text: 'Excessive new construction flooding the market', isCorrect: false },
      { id: 'b', text: 'Limited housing supply, rising construction costs, and increasing demand in metro areas', isCorrect: true },
      { id: 'c', text: 'Declining population in Virginia', isCorrect: false },
      { id: 'd', text: 'Overregulation of the rental market', isCorrect: false }
    ],
    explanation: 'Virginia, particularly Northern Virginia and Hampton Roads, faces housing affordability pressures from constrained supply, rising labor and materials costs, zoning restrictions limiting density, and strong demand from job growth. The Virginia Housing Commission has studied these issues extensively.',
    difficulty: 'easy',
    topicTag: 'affordability'
  },
  {
    id: 'ple-q-134',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'mock_exam',
    questionText: 'A buyer asks their agent, "Why do I need to sign a buyer representation agreement?" The agent should explain:',
    options: [
      { id: 'a', text: '"It is just a formality and does not create any obligations"', isCorrect: false },
      { id: 'b', text: '"It defines the scope of services, your obligations, the agent\'s compensation, and establishes the agency relationship, and is now required before touring MLS-listed properties"', isCorrect: true },
      { id: 'c', text: '"The government requires it to collect taxes"', isCorrect: false },
      { id: 'd', text: '"It protects the agent from liability and has no benefit to you"', isCorrect: false }
    ],
    explanation: 'Written buyer agreements define the agency relationship, scope of services, compensation terms, and mutual obligations. Following the NAR settlement, they are required before touring MLS-listed properties. Under Virginia law (Va. Code 54.1-2130 et seq.), they also ensure the buyer understands the nature of the agency relationship.',
    difficulty: 'medium',
    topicTag: 'buyer-agreement-explanation'
  },
  {
    id: 'ple-q-135',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'The use of artificial intelligence (AI) in real estate marketing raises concerns about:',
    options: [
      { id: 'a', text: 'Reducing the need for photography', isCorrect: false },
      { id: 'b', text: 'Fair housing violations through biased algorithms and misleading virtual staging', isCorrect: true },
      { id: 'c', text: 'Making listings too attractive', isCorrect: false },
      { id: 'd', text: 'Eliminating the need for real estate agents entirely', isCorrect: false }
    ],
    explanation: 'AI in real estate marketing raises fair housing concerns when algorithms target or exclude protected classes in advertising. Virtual staging and AI-enhanced photos can also be misleading if they materially misrepresent the property condition. NAR has issued guidance on responsible AI use in compliance with Article 12 and fair housing law.',
    difficulty: 'medium',
    topicTag: 'ai-in-real-estate'
  },
  {
    id: 'ple-q-136',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'The "lock-in effect" in the current housing market refers to:',
    options: [
      { id: 'a', text: 'HOA restrictions preventing homeowners from selling', isCorrect: false },
      { id: 'b', text: 'Homeowners reluctant to sell because they would lose a low mortgage interest rate', isCorrect: true },
      { id: 'c', text: 'Government restrictions on home sales', isCorrect: false },
      { id: 'd', text: 'Title defects preventing transfer of ownership', isCorrect: false }
    ],
    explanation: 'The "lock-in effect" occurs when homeowners with very low mortgage rates (e.g., 2.5-3.5% obtained in 2020-2021) are reluctant to sell because purchasing a new home at current higher rates would significantly increase their housing costs. This reduces inventory and contributes to supply constraints.',
    difficulty: 'medium',
    topicTag: 'rate-lock-in'
  },
  {
    id: 'ple-q-137',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'Under the new NAR rules, which statement about buyer agent compensation in the MLS is correct?',
    options: [
      { id: 'a', text: 'The MLS must display the buyer agent commission amount', isCorrect: false },
      { id: 'b', text: 'The MLS listing may not include an offer of compensation to buyer brokers', isCorrect: true },
      { id: 'c', text: 'The MLS must display a minimum commission of 2%', isCorrect: false },
      { id: 'd', text: 'The MLS may display compensation only for commercial properties', isCorrect: false }
    ],
    explanation: 'Under the NAR settlement terms, MLS listings may not include offers of buyer broker compensation. This represents a fundamental change from the previous practice where cooperative compensation was communicated through the MLS. Compensation can still be negotiated directly between parties outside the MLS.',
    difficulty: 'medium',
    topicTag: 'mls-compensation-rules'
  },
  {
    id: 'ple-q-138',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'Remote online notarization (RON) in Virginia:',
    options: [
      { id: 'a', text: 'Is prohibited for real estate transactions', isCorrect: false },
      { id: 'b', text: 'Is permitted under the Virginia Electronic Notarization Act and allows notarization via audio-visual technology', isCorrect: true },
      { id: 'c', text: 'Is only allowed during declared emergencies', isCorrect: false },
      { id: 'd', text: 'Requires both parties to be in the same state', isCorrect: false }
    ],
    explanation: 'Virginia was the first state to authorize remote online notarization (RON) under Va. Code 47.1-2. It allows a notary to perform notarial acts using audio-visual technology with identity verification. This is particularly useful for out-of-state parties in real estate closings.',
    difficulty: 'medium',
    topicTag: 'remote-notarization'
  },
  {
    id: 'ple-q-139',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'ADUs (Accessory Dwelling Units) have become a current industry topic because they:',
    options: [
      { id: 'a', text: 'Are illegal in all Virginia jurisdictions', isCorrect: false },
      { id: 'b', text: 'Can help address housing supply shortages by increasing density without major rezoning', isCorrect: true },
      { id: 'c', text: 'Reduce property values in every neighborhood', isCorrect: false },
      { id: 'd', text: 'Are only permitted in commercial zones', isCorrect: false }
    ],
    explanation: 'ADUs (granny flats, in-law suites, carriage houses) are gaining legislative support in Virginia and nationwide as a way to increase housing supply and affordability. Virginia passed legislation in 2020 reducing local barriers to ADU construction in certain areas.',
    difficulty: 'hard',
    topicTag: 'accessory-dwelling-units'
  },
  {
    id: 'ple-q-140',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'mock_exam',
    questionText: 'A seller tells their listing agent, "I want to offer 3% to buyer agents." Under post-settlement rules, the listing agent should:',
    options: [
      { id: 'a', text: 'Add the 3% offer to the MLS listing', isCorrect: false },
      { id: 'b', text: 'Explain that the offer cannot be listed on the MLS but can be communicated through other channels such as the brokerage website, direct communication, or seller concessions', isCorrect: true },
      { id: 'c', text: 'Tell the seller that offering buyer agent compensation is now illegal', isCorrect: false },
      { id: 'd', text: 'Refuse the instruction because it violates antitrust law', isCorrect: false }
    ],
    explanation: 'The NAR settlement does not prohibit sellers from offering buyer agent compensation. It only prohibits communicating such offers through the MLS. The listing agent should explain that the offer can be communicated through the firm website, listing description (where allowed), direct outreach, or structured as a seller concession at closing.',
    difficulty: 'hard',
    topicTag: 'compensation-communication'
  },
  {
    id: 'ple-q-141',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'Data privacy concerns in real estate transactions include:',
    options: [
      { id: 'a', text: 'Public recording of deeds', isCorrect: false },
      { id: 'b', text: 'Collection and storage of clients\' sensitive personal and financial information by brokerages', isCorrect: true },
      { id: 'c', text: 'MLS listing photos being publicly viewable', isCorrect: false },
      { id: 'd', text: 'Open house sign-in sheets being used to market properties', isCorrect: false }
    ],
    explanation: 'Brokerages collect extensive personal and financial information (SSNs, bank accounts, tax returns) during transactions. Data breaches can expose clients to identity theft. Virginia has enacted the Consumer Data Protection Act (CDPA) which impacts how businesses handle personal data, and brokerages should implement robust cybersecurity policies.',
    difficulty: 'medium',
    topicTag: 'data-privacy'
  },
  {
    id: 'ple-q-142',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'The concept of "housing equity" in current industry discussion refers to:',
    options: [
      { id: 'a', text: 'The difference between a home\'s value and the mortgage balance', isCorrect: false },
      { id: 'b', text: 'Ensuring fair and equal access to housing opportunities regardless of race, income, or neighborhood', isCorrect: true },
      { id: 'c', text: 'Investment returns on real estate portfolios', isCorrect: false },
      { id: 'd', text: 'Shared equity homeownership programs only', isCorrect: false }
    ],
    explanation: 'Housing equity in current policy discussions refers to addressing historical disparities in homeownership and housing access, particularly those resulting from redlining, discriminatory lending, and zoning practices. It encompasses fair lending, community reinvestment, and removing barriers to homeownership for underserved communities.',
    difficulty: 'medium',
    topicTag: 'housing-equity'
  },
  {
    id: 'ple-q-143',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'Virginia\'s approach to climate-related disclosure in real estate includes:',
    options: [
      { id: 'a', text: 'Mandatory climate risk assessments for all property sales', isCorrect: false },
      { id: 'b', text: 'Required disclosure of flood zone status and Chesapeake Bay Preservation Act resource protection areas on the property disclosure form', isCorrect: true },
      { id: 'c', text: 'No climate-related disclosures of any kind', isCorrect: false },
      { id: 'd', text: 'Carbon footprint disclosure for all commercial properties', isCorrect: false }
    ],
    explanation: 'Virginia\'s Residential Property Disclosure Act requires sellers to disclose whether the property is located in a flood zone, dam break inundation zone, or Chesapeake Bay Preservation Act resource protection area (Va. Code 55.1-702 et seq.). These represent Virginia\'s primary climate-related property disclosures.',
    difficulty: 'medium',
    topicTag: 'climate-disclosure'
  },
  {
    id: 'ple-q-144',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'The written buyer representation agreement required by the NAR settlement must include:',
    options: [
      { id: 'a', text: 'A guarantee of the purchase price', isCorrect: false },
      { id: 'b', text: 'A specific and conspicuous disclosure of the amount or rate of compensation the buyer agent will receive', isCorrect: true },
      { id: 'c', text: 'The listing agent\'s commission amount', isCorrect: false },
      { id: 'd', text: 'A mandatory arbitration clause', isCorrect: false }
    ],
    explanation: 'The NAR settlement requires written buyer agreements to include a specific and conspicuous disclosure of the compensation amount or rate. Open-ended terms like "whatever the seller offers" are not permitted. The compensation must be objectively ascertainable and not open-ended.',
    difficulty: 'hard',
    topicTag: 'buyer-agreement-requirements'
  },
  {
    id: 'ple-q-145',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'iBuyer programs (companies that make instant cash offers on homes) impact the market by:',
    options: [
      { id: 'a', text: 'Replacing the need for real estate agents entirely', isCorrect: false },
      { id: 'b', text: 'Offering sellers convenience and speed at the potential cost of a lower sale price compared to traditional listing', isCorrect: true },
      { id: 'c', text: 'Eliminating all transaction costs for sellers', isCorrect: false },
      { id: 'd', text: 'Guaranteeing above-market prices for all properties', isCorrect: false }
    ],
    explanation: 'iBuyer programs (like Opendoor, Offerpad) provide sellers with quick cash offers and fast closings, reducing the hassle of traditional sales. However, studies show sellers typically receive less than they would through a traditional listing, and iBuyers charge service fees often comparable to or exceeding traditional commissions.',
    difficulty: 'easy',
    topicTag: 'ibuyer-impact'
  },
  {
    id: 'ple-q-146',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'The impact of remote work on Virginia real estate has included:',
    options: [
      { id: 'a', text: 'Decreased demand for all Virginia properties', isCorrect: false },
      { id: 'b', text: 'Increased demand in suburban and rural Virginia communities as workers seek more space outside urban cores', isCorrect: true },
      { id: 'c', text: 'Complete abandonment of Northern Virginia', isCorrect: false },
      { id: 'd', text: 'No measurable impact on any market', isCorrect: false }
    ],
    explanation: 'The rise of remote and hybrid work has shifted demand patterns in Virginia, with increased interest in suburban and rural areas (Shenandoah Valley, Charlottesville, Richmond suburbs) as workers are less tethered to office locations in DC/NoVA. This has driven price appreciation in previously more affordable markets.',
    difficulty: 'easy',
    topicTag: 'remote-work-impact'
  },
  {
    id: 'ple-q-147',
    chapterId: 'ple-current-issues-nar-settlement',
    quizType: 'mock_exam',
    questionText: 'An unrepresented buyer wants to view a property listed on the MLS. Under the post-NAR-settlement rules:',
    options: [
      { id: 'a', text: 'The buyer must sign a buyer representation agreement with any agent before viewing the property', isCorrect: false },
      { id: 'b', text: 'The buyer may contact the listing agent directly, and the listing agent may show the property without a buyer agreement since they are not acting as the buyer\'s agent', isCorrect: true },
      { id: 'c', text: 'The buyer is prohibited from viewing MLS-listed properties', isCorrect: false },
      { id: 'd', text: 'The buyer must first hire an attorney', isCorrect: false }
    ],
    explanation: 'The written buyer agreement requirement applies to MLS participants acting as buyer agents. An unrepresented buyer may contact the listing agent directly. In Virginia, the listing agent must still provide the agency disclosure form and clarify that they represent the seller\'s interests.',
    difficulty: 'hard',
    topicTag: 'unrepresented-buyers'
  },
  {
    id: 'ple-q-148',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'Escalation clauses in purchase offers have become more common because:',
    options: [
      { id: 'a', text: 'They are required by Virginia law', isCorrect: false },
      { id: 'b', text: 'They allow buyers to automatically increase their offer to beat competing offers in competitive markets', isCorrect: true },
      { id: 'c', text: 'They reduce the purchase price', isCorrect: false },
      { id: 'd', text: 'They eliminate the need for appraisals', isCorrect: false }
    ],
    explanation: 'Escalation clauses (also called escalator clauses) automatically increase a buyer\'s offer by a specified amount over competing offers, up to a maximum cap. They became common in competitive seller\'s markets. Agents should understand the legal implications and ensure proper drafting to protect their clients.',
    difficulty: 'easy',
    topicTag: 'escalation-clauses'
  },
  {
    id: 'ple-q-149',
    chapterId: 'ple-current-issues-technology',
    quizType: 'chapter_quiz',
    questionText: 'Clear Cooperation Policy, adopted by many MLSs including those in Virginia, requires:',
    options: [
      { id: 'a', text: 'All agents to share commission information publicly', isCorrect: false },
      { id: 'b', text: 'Listings marketed to the public to be submitted to the MLS within one business day of marketing', isCorrect: true },
      { id: 'c', text: 'All properties to be listed at a minimum price', isCorrect: false },
      { id: 'd', text: 'Agents to cooperate with federal investigators', isCorrect: false }
    ],
    explanation: 'The Clear Cooperation Policy (adopted by NAR in 2019) requires that within one business day of marketing a property to the public, the listing must be submitted to the MLS. This prevents "pocket listings" from limiting exposure and ensures equal access to inventory for all agents and their clients.',
    difficulty: 'medium',
    topicTag: 'clear-cooperation'
  },
  {
    id: 'ple-q-150',
    chapterId: 'ple-current-issues-market',
    quizType: 'chapter_quiz',
    questionText: 'The appraisal gap issue in competitive markets occurs when:',
    options: [
      { id: 'a', text: 'An appraiser fails to complete the report on time', isCorrect: false },
      { id: 'b', text: 'The appraised value comes in lower than the contract price, creating a shortfall the buyer must cover', isCorrect: true },
      { id: 'c', text: 'Two appraisers disagree on value', isCorrect: false },
      { id: 'd', text: 'The lender refuses to order an appraisal', isCorrect: false }
    ],
    explanation: 'In competitive markets where buyers bid above list price, appraisals may not support the higher contract price. The "appraisal gap" is the difference between the appraised value and the purchase price. Buyers may include appraisal gap coverage clauses agreeing to cover a specified shortfall with additional cash.',
    difficulty: 'easy',
    topicTag: 'appraisal-gap'
  }
]

// ============================================================
// MODULE 5: Virginia Agency Law
// 35 questions | chapterId: ple-agency-*
// ============================================================

const agencyQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-151',
    chapterId: 'ple-agency-types',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, the agency relationship between a licensee and a client is established by:',
    options: [
      { id: 'a', text: 'Simply showing a property to a buyer', isCorrect: false },
      { id: 'b', text: 'A written brokerage agreement (listing agreement or buyer representation agreement)', isCorrect: true },
      { id: 'c', text: 'Verbal agreement over the phone', isCorrect: false },
      { id: 'd', text: 'Filing a form with the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130 et seq., agency relationships in Virginia are established through written brokerage agreements. The law requires that the nature of the agency relationship be disclosed and documented in writing.',
    difficulty: 'hard',
    topicTag: 'agency-creation'
  },
  {
    id: 'ple-q-152',
    chapterId: 'ple-agency-types',
    quizType: 'chapter_quiz',
    questionText: 'Virginia recognizes which types of agency relationships in real estate?',
    options: [
      { id: 'a', text: 'Only seller representation', isCorrect: false },
      { id: 'b', text: 'Seller representation, buyer representation, dual agency, and designated representation', isCorrect: true },
      { id: 'c', text: 'Only buyer and seller representation', isCorrect: false },
      { id: 'd', text: 'Seller, buyer, and transaction broker only', isCorrect: false }
    ],
    explanation: 'Virginia law (Va. Code 54.1-2130 et seq.) recognizes four agency relationship types: (1) standard agent representing a seller/landlord, (2) standard agent representing a buyer/tenant, (3) dual agency (same agent for both), and (4) designated representation (different agents in same firm for each party).',
    difficulty: 'hard',
    topicTag: 'agency-types'
  },
  {
    id: 'ple-q-153',
    chapterId: 'ple-agency-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'When must a Virginia licensee provide the agency disclosure to a prospective buyer or seller?',
    options: [
      { id: 'a', text: 'At closing', isCorrect: false },
      { id: 'b', text: 'At the first substantive contact/discussion about a specific property', isCorrect: true },
      { id: 'c', text: 'After the offer is accepted', isCorrect: false },
      { id: 'd', text: 'Only if the consumer requests it', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2138, a licensee must disclose whom they represent at the earliest practical time, but no later than the time a specific property is identified and substantive discussions about the property begin. This ensures informed decision-making by all parties.',
    difficulty: 'medium',
    topicTag: 'disclosure-timing'
  },
  {
    id: 'ple-q-154',
    chapterId: 'ple-agency-types',
    quizType: 'chapter_quiz',
    questionText: 'Dual agency in Virginia means:',
    options: [
      { id: 'a', text: 'Two separate agents from different firms represent one party', isCorrect: false },
      { id: 'b', text: 'One licensee represents both the buyer and seller in the same transaction with informed written consent of both', isCorrect: true },
      { id: 'c', text: 'The broker represents the bank and the buyer simultaneously', isCorrect: false },
      { id: 'd', text: 'Two agents from the same firm always create dual agency', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2139, dual agency occurs when a single licensee represents both the buyer and seller in the same transaction. It requires the informed written consent of both parties because the agent cannot provide full advocacy to either party due to the inherent conflict of interest.',
    difficulty: 'hard',
    topicTag: 'dual-agency'
  },
  {
    id: 'ple-q-155',
    chapterId: 'ple-agency-types',
    quizType: 'chapter_quiz',
    questionText: 'In a dual agency situation in Virginia, the licensee CANNOT:',
    options: [
      { id: 'a', text: 'Show the property to both parties', isCorrect: false },
      { id: 'b', text: 'Disclose confidential information about one party to the other without permission', isCorrect: true },
      { id: 'c', text: 'Prepare a purchase agreement', isCorrect: false },
      { id: 'd', text: 'Attend the home inspection', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2139, a dual agent is limited in the services they can provide. They cannot share confidential information about one party with the other (such as the seller\'s bottom line or the buyer\'s maximum price), cannot advocate for one party over the other, and must treat both parties fairly.',
    difficulty: 'medium',
    topicTag: 'dual-agency-limitations'
  },
  {
    id: 'ple-q-156',
    chapterId: 'ple-agency-types',
    quizType: 'chapter_quiz',
    questionText: 'Designated representation (designated agency) in Virginia:',
    options: [
      { id: 'a', text: 'Is prohibited under Virginia law', isCorrect: false },
      { id: 'b', text: 'Allows different licensees within the same firm to exclusively represent the buyer and seller in the same transaction', isCorrect: true },
      { id: 'c', text: 'Only applies to commercial transactions', isCorrect: false },
      { id: 'd', text: 'Requires approval from the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130.1, designated representation allows a principal broker to assign different licensees within the firm to represent the buyer and seller respectively. Each designated agent owes full fiduciary duties to their client, unlike dual agency where duties are limited.',
    difficulty: 'medium',
    topicTag: 'designated-representation'
  },
  {
    id: 'ple-q-157',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Guidance Document on Brokerage Agreements (effective with the NAR settlement changes) emphasizes that:',
    options: [
      { id: 'a', text: 'Oral brokerage agreements are sufficient', isCorrect: false },
      { id: 'b', text: 'Written brokerage agreements must clearly state the terms of compensation, duration, and duties owed to the client', isCorrect: true },
      { id: 'c', text: 'Brokerage agreements are optional for experienced agents', isCorrect: false },
      { id: 'd', text: 'Brokerage agreements expire automatically after 30 days', isCorrect: false }
    ],
    explanation: 'The Virginia Real Estate Board\'s Guidance Document on Brokerage Agreements emphasizes written agreements that clearly specify compensation terms, duration, scope of services, and duties. This aligns with the NAR settlement\'s requirement for transparent buyer representation agreements.',
    difficulty: 'medium',
    topicTag: 'guidance-document'
  },
  {
    id: 'ple-q-158',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'Under the Virginia Guidance Document, a buyer representation agreement should NOT contain:',
    options: [
      { id: 'a', text: 'The specific compensation to be paid', isCorrect: false },
      { id: 'b', text: 'The duration of the agreement', isCorrect: false },
      { id: 'c', text: 'Open-ended compensation language such as "compensation to be whatever the seller offers"', isCorrect: true },
      { id: 'd', text: 'A description of the type of property the buyer is seeking', isCorrect: false }
    ],
    explanation: 'The Guidance Document and NAR settlement both require that compensation be specific and objectively ascertainable. Open-ended terms that tie the buyer agent\'s compensation to whatever the seller offers are not permitted. The amount must be clearly stated as a dollar amount, percentage, or other definite measure.',
    difficulty: 'hard',
    topicTag: 'compensation-specificity'
  },
  {
    id: 'ple-q-159',
    chapterId: 'ple-agency-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'A licensee working at an open house for another agent\'s listing represents:',
    options: [
      { id: 'a', text: 'The visitors at the open house', isCorrect: false },
      { id: 'b', text: 'The seller, unless a separate agency agreement is established with a visitor', isCorrect: true },
      { id: 'c', text: 'Both the seller and any interested buyers equally', isCorrect: false },
      { id: 'd', text: 'No one until a contract is written', isCorrect: false }
    ],
    explanation: 'A licensee hosting an open house is working under the listing agreement and represents the seller. Visitors are customers, not clients, unless a separate buyer representation agreement is signed. The agent must disclose this agency relationship under Va. Code 54.1-2138.',
    difficulty: 'medium',
    topicTag: 'open-house-agency'
  },
  {
    id: 'ple-q-160',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia licensee owes which duties to ALL parties in a transaction, regardless of representation?',
    options: [
      { id: 'a', text: 'Loyalty, obedience, and confidentiality', isCorrect: false },
      { id: 'b', text: 'Honest dealing, disclosure of material adverse facts, and accounting for deposits', isCorrect: true },
      { id: 'c', text: 'Full fiduciary duties including loyalty', isCorrect: false },
      { id: 'd', text: 'No duties are owed to parties who are not the agent\'s client', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, Virginia licensees owe minimum duties to all parties: honesty, disclosure of material adverse facts, accounting of deposits, and competent performance. Additional fiduciary duties (loyalty, confidentiality, obedience) are owed only to the client.',
    difficulty: 'medium',
    topicTag: 'universal-duties'
  },
  {
    id: 'ple-q-161',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A buyer\'s agent in Virginia owes which fiduciary duties to their buyer client?',
    options: [
      { id: 'a', text: 'Only the duty to find the cheapest property', isCorrect: false },
      { id: 'b', text: 'Loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care/diligence', isCorrect: true },
      { id: 'c', text: 'Only the duties specified in the purchase contract', isCorrect: false },
      { id: 'd', text: 'The same limited duties as a dual agent', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2132, a buyer\'s agent owes full fiduciary duties: loyalty (placing buyer\'s interests first), obedience (following lawful instructions), disclosure (sharing relevant information), confidentiality (protecting private information), accounting (safeguarding funds), and reasonable care/diligence in performing duties.',
    difficulty: 'easy',
    topicTag: 'buyer-agent-duties'
  },
  {
    id: 'ple-q-162',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'A listing agreement in Virginia is a contract between:',
    options: [
      { id: 'a', text: 'The seller and the buyer', isCorrect: false },
      { id: 'b', text: 'The seller and the brokerage firm (not the individual salesperson)', isCorrect: true },
      { id: 'c', text: 'The seller and the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'The individual salesperson and the seller', isCorrect: false }
    ],
    explanation: 'Under Virginia law, the brokerage agreement (listing agreement) is between the property owner and the brokerage firm, not the individual salesperson. The principal broker authorizes agents to act on behalf of the firm. If an agent leaves the firm, the listing remains with the firm.',
    difficulty: 'easy',
    topicTag: 'listing-agreement'
  },
  {
    id: 'ple-q-163',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'An exclusive right to sell listing means:',
    options: [
      { id: 'a', text: 'Only the listing agent can show the property', isCorrect: false },
      { id: 'b', text: 'The listing broker earns a commission regardless of who procures the buyer, including the seller themselves', isCorrect: true },
      { id: 'c', text: 'The property can only be sold to one specific buyer', isCorrect: false },
      { id: 'd', text: 'The listing expires after one exclusive showing', isCorrect: false }
    ],
    explanation: 'An exclusive right to sell listing is the most common type. The listing broker is entitled to a commission regardless of who sells the property, even if the seller finds the buyer independently. This provides the broker with the strongest protection and incentive to market the property.',
    difficulty: 'easy',
    topicTag: 'listing-types'
  },
  {
    id: 'ple-q-164',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'An exclusive agency listing differs from an exclusive right to sell in that:',
    options: [
      { id: 'a', text: 'The seller retains the right to sell the property without paying a commission to the listing broker', isCorrect: true },
      { id: 'b', text: 'Multiple brokers may list the property simultaneously', isCorrect: false },
      { id: 'c', text: 'The listing is automatically renewed', isCorrect: false },
      { id: 'd', text: 'There is no difference between the two', isCorrect: false }
    ],
    explanation: 'Under an exclusive agency listing, the listing broker is entitled to a commission if any licensee (including cooperating brokers) sells the property, but the seller retains the right to sell the property independently without owing a commission to the listing broker.',
    difficulty: 'medium',
    topicTag: 'listing-types'
  },
  {
    id: 'ple-q-165',
    chapterId: 'ple-agency-termination',
    quizType: 'chapter_quiz',
    questionText: 'An agency relationship in Virginia can be terminated by all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'Expiration of the agreement\'s term', isCorrect: false },
      { id: 'b', text: 'Mutual written consent of both parties', isCorrect: false },
      { id: 'c', text: 'Unilateral decision by the agent without cause during the agreement term', isCorrect: true },
      { id: 'd', text: 'Completion of the purpose of the agreement (closing)', isCorrect: false }
    ],
    explanation: 'An agency relationship can be terminated by: expiration of the agreement, mutual consent, completion of purpose, death or incapacity of either party, or breach. However, an agent cannot unilaterally terminate without cause during the agreement term, as the brokerage agreement is a binding contract.',
    difficulty: 'medium',
    topicTag: 'agency-termination'
  },
  {
    id: 'ple-q-166',
    chapterId: 'ple-agency-duties',
    quizType: 'mock_exam',
    questionText: 'A seller\'s agent receives a verbal offer from a buyer. The agent must:',
    options: [
      { id: 'a', text: 'Ignore it because only written offers count', isCorrect: false },
      { id: 'b', text: 'Inform the seller of the verbal offer', isCorrect: true },
      { id: 'c', text: 'Tell the buyer to increase the offer before presenting it', isCorrect: false },
      { id: 'd', text: 'Convert it to a written offer without the buyer\'s input', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 and the duty of disclosure, a listing agent must communicate all offers to the seller, including verbal offers. While a verbal offer is not enforceable under the Statute of Frauds, the agent still has a duty to inform the seller. The agent should also recommend the buyer submit a written offer.',
    difficulty: 'medium',
    topicTag: 'presenting-offers'
  },
  {
    id: 'ple-q-167',
    chapterId: 'ple-agency-nar-settlement',
    quizType: 'chapter_quiz',
    questionText: 'The NAR settlement impacted agency law by:',
    options: [
      { id: 'a', text: 'Eliminating buyer agency entirely', isCorrect: false },
      { id: 'b', text: 'Requiring written buyer representation agreements before showing MLS properties and decoupling compensation from the MLS', isCorrect: true },
      { id: 'c', text: 'Making dual agency mandatory in all transactions', isCorrect: false },
      { id: 'd', text: 'Transferring all agency authority to the state', isCorrect: false }
    ],
    explanation: 'The NAR settlement fundamentally changed how buyer agency is initiated and compensated. Written buyer agreements are now required before showing MLS-listed homes, and compensation offers are no longer made through the MLS. This reinforces the importance of clear agency establishment under Virginia law.',
    difficulty: 'medium',
    topicTag: 'nar-settlement-agency'
  },
  {
    id: 'ple-q-168',
    chapterId: 'ple-agency-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Virginia requires the use of a standardized agency disclosure form. This form must be:',
    options: [
      { id: 'a', text: 'Filed with the circuit court', isCorrect: false },
      { id: 'b', text: 'Given to the consumer to acknowledge they understand the types of agency relationships available', isCorrect: true },
      { id: 'c', text: 'Signed by both the buyer and seller simultaneously', isCorrect: false },
      { id: 'd', text: 'Notarized before it is valid', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2138 and 18 VAC 135-20-210, the agency disclosure form explains the types of brokerage relationships available in Virginia. It must be provided to the consumer early in the relationship so they understand the nature of representation options.',
    difficulty: 'easy',
    topicTag: 'disclosure-form'
  },
  {
    id: 'ple-q-169',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A licensee acting as a "ministerial agent" (providing ministerial acts without representation) may:',
    options: [
      { id: 'a', text: 'Negotiate on behalf of the consumer', isCorrect: false },
      { id: 'b', text: 'Provide administrative assistance such as writing contracts and scheduling without advocating for either party', isCorrect: true },
      { id: 'c', text: 'Provide full fiduciary representation', isCorrect: false },
      { id: 'd', text: 'Serve as a dual agent without disclosure', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130, a licensee may provide ministerial acts (writing offers, arranging inspections, scheduling) without establishing an agency relationship. The licensee must not advocate for or advise the consumer on pricing, negotiation strategy, or other substantive matters that would imply representation.',
    difficulty: 'medium',
    topicTag: 'ministerial-acts'
  },
  {
    id: 'ple-q-170',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'A buyer representation agreement should include all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'The duration of the agreement', isCorrect: false },
      { id: 'b', text: 'A guaranteed purchase price for the property', isCorrect: true },
      { id: 'c', text: 'The scope of services to be provided', isCorrect: false },
      { id: 'd', text: 'The compensation terms and amount', isCorrect: false }
    ],
    explanation: 'A buyer representation agreement should include: duration, scope of services, compensation terms, geographic area, property type, duties and obligations, and termination provisions. It should never guarantee a purchase price, as that would be a misrepresentation of the agent\'s abilities.',
    difficulty: 'easy',
    topicTag: 'buyer-agreement-contents'
  },
  {
    id: 'ple-q-171',
    chapterId: 'ple-agency-types',
    quizType: 'mock_exam',
    questionText: 'In Virginia, when two agents from the same firm represent the buyer and seller respectively in the same transaction, and the broker designates each agent, this is called:',
    options: [
      { id: 'a', text: 'Dual agency', isCorrect: false },
      { id: 'b', text: 'Designated representation', isCorrect: true },
      { id: 'c', text: 'Sub-agency', isCorrect: false },
      { id: 'd', text: 'Transaction brokerage', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130.1, when two different licensees in the same firm are designated to represent each party, it is designated representation. Each agent owes full fiduciary duties to their respective client. The supervising broker remains a dual agent but the individual designated agents do not.',
    difficulty: 'medium',
    topicTag: 'designated-representation'
  },
  {
    id: 'ple-q-172',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A seller\'s agent learns that the buyer is planning to tear down the home and build a commercial property. This information:',
    options: [
      { id: 'a', text: 'Must be disclosed to the seller as it is a material fact', isCorrect: false },
      { id: 'b', text: 'Is not required to be disclosed to the seller because the buyer\'s intended use is not a material fact about the property', isCorrect: true },
      { id: 'c', text: 'Should be reported to the zoning department', isCorrect: false },
      { id: 'd', text: 'Should be shared with neighboring property owners', isCorrect: false }
    ],
    explanation: 'The buyer\'s intended use of the property after purchase is generally not a material adverse fact about the property\'s condition that the agent must disclose to the seller. Material facts relate to the property itself (defects, environmental issues), not to the buyer\'s future plans.',
    difficulty: 'hard',
    topicTag: 'material-fact-scope'
  },
  {
    id: 'ple-q-173',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'A net listing in Virginia is:',
    options: [
      { id: 'a', text: 'A standard listing agreement used for online-only marketing', isCorrect: false },
      { id: 'b', text: 'A listing where the broker keeps any amount over a specified net price, which is strongly discouraged due to conflict of interest concerns', isCorrect: true },
      { id: 'c', text: 'A listing agreement with zero commission', isCorrect: false },
      { id: 'd', text: 'An agreement used exclusively for commercial properties', isCorrect: false }
    ],
    explanation: 'A net listing allows the broker to retain all proceeds above a specified net price. While not expressly illegal in Virginia, net listings are strongly discouraged by the VREB and most professional organizations because they create an inherent conflict between the broker\'s duty to get the highest price and the broker\'s financial interest.',
    difficulty: 'medium',
    topicTag: 'net-listing'
  },
  {
    id: 'ple-q-174',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'When a Virginia licensee represents neither the buyer nor the seller, they are providing:',
    options: [
      { id: 'a', text: 'Dual agency', isCorrect: false },
      { id: 'b', text: 'Sub-agency', isCorrect: false },
      { id: 'c', text: 'Ministerial services without representation', isCorrect: true },
      { id: 'd', text: 'Illegal real estate services', isCorrect: false }
    ],
    explanation: 'Under Virginia law, a licensee may assist consumers without entering into a brokerage relationship by performing ministerial acts. The licensee provides administrative services (paperwork, scheduling) but does not advocate for or advise either party on substantive matters.',
    difficulty: 'easy',
    topicTag: 'no-representation'
  },
  {
    id: 'ple-q-175',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'Under the post-NAR settlement landscape, a buyer agent\'s compensation may be structured as:',
    options: [
      { id: 'a', text: 'Only a flat dollar amount paid by the buyer at closing', isCorrect: false },
      { id: 'b', text: 'A percentage, flat fee, or hourly rate, paid by the buyer, seller, or through concessions, as negotiated', isCorrect: true },
      { id: 'c', text: 'Only a percentage of the sale price paid by the seller through the MLS', isCorrect: false },
      { id: 'd', text: 'A government-mandated rate', isCorrect: false }
    ],
    explanation: 'Buyer agent compensation is fully negotiable. It may take the form of a flat fee, percentage, hourly rate, or any combination. Payment may come from the buyer directly, through seller concessions, from the seller voluntarily, or any arrangement agreed upon by the parties.',
    difficulty: 'medium',
    topicTag: 'compensation-structures'
  },
  {
    id: 'ple-q-176',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A buyer client asks their agent to prepare a below-market offer with discriminatory conditions (e.g., "only if the seller is not a certain race"). The agent must:',
    options: [
      { id: 'a', text: 'Follow the client\'s instructions under the duty of obedience', isCorrect: false },
      { id: 'b', text: 'Refuse to include discriminatory conditions and explain that doing so violates fair housing law', isCorrect: true },
      { id: 'c', text: 'Write the offer but note they disagree with the condition', isCorrect: false },
      { id: 'd', text: 'Report the buyer to the police before refusing', isCorrect: false }
    ],
    explanation: 'The duty of obedience does not extend to unlawful instructions. Under the Fair Housing Act and Va. Code 54.1-2131 et seq., a licensee must refuse to participate in discriminatory practices. The agent should explain why the condition is illegal and cannot be included.',
    difficulty: 'easy',
    topicTag: 'unlawful-instructions'
  },
  {
    id: 'ple-q-177',
    chapterId: 'ple-agency-termination',
    quizType: 'chapter_quiz',
    questionText: 'After an agency relationship terminates, the agent still owes:',
    options: [
      { id: 'a', text: 'All fiduciary duties for an additional year', isCorrect: false },
      { id: 'b', text: 'The duty of confidentiality regarding information learned during the relationship', isCorrect: true },
      { id: 'c', text: 'No duties of any kind', isCorrect: false },
      { id: 'd', text: 'The duty of obedience to the former client', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 through 54.1-2135, while most fiduciary duties end with the agency relationship, the duty of confidentiality survives termination. A former agent must continue to protect confidential information learned during the representation indefinitely.',
    difficulty: 'medium',
    topicTag: 'post-termination-duties'
  },
  {
    id: 'ple-q-178',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'mock_exam',
    questionText: 'A buyer signed a 6-month exclusive buyer representation agreement but now wants to work with a different agent. What are the buyer\'s options?',
    options: [
      { id: 'a', text: 'The buyer can simply start working with another agent without consequence', isCorrect: false },
      { id: 'b', text: 'The buyer must honor the agreement or negotiate a release from the brokerage; working with another agent could result in owing compensation to both', isCorrect: true },
      { id: 'c', text: 'The buyer can void the agreement by sending an email', isCorrect: false },
      { id: 'd', text: 'Buyer representation agreements are not enforceable in Virginia', isCorrect: false }
    ],
    explanation: 'An exclusive buyer representation agreement is a binding contract. The buyer should request a mutual release from the brokerage. If the buyer purchases through another agent during the agreement term, they could be liable for compensation under the original agreement. Review the agreement\'s termination provisions.',
    difficulty: 'hard',
    topicTag: 'agreement-obligations'
  },
  {
    id: 'ple-q-179',
    chapterId: 'ple-agency-disclosure',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, failure to provide the required agency disclosure:',
    options: [
      { id: 'a', text: 'Has no consequences', isCorrect: false },
      { id: 'b', text: 'May result in disciplinary action by the Virginia Real Estate Board', isCorrect: true },
      { id: 'c', text: 'Automatically voids the transaction', isCorrect: false },
      { id: 'd', text: 'Only matters if someone files a complaint', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-210 and Va. Code 54.1-2138, failure to provide the required agency disclosure is a violation of Board regulations and may result in disciplinary action including fines, required education, suspension, or revocation of the license.',
    difficulty: 'easy',
    topicTag: 'disclosure-consequences'
  },
  {
    id: 'ple-q-180',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, sub-agency (where a cooperating broker acts as an agent of the seller through the listing broker):',
    options: [
      { id: 'a', text: 'Is the default presumption in all transactions', isCorrect: false },
      { id: 'b', text: 'Has been largely replaced by buyer representation but may still exist if agreed upon', isCorrect: true },
      { id: 'c', text: 'Is prohibited by Virginia law', isCorrect: false },
      { id: 'd', text: 'Only applies in commercial transactions', isCorrect: false }
    ],
    explanation: 'Historically, cooperating brokers were presumed to be sub-agents of the seller. Virginia\'s agency disclosure law and modern practice have largely replaced sub-agency with explicit buyer representation. Sub-agency may still exist but requires clear agreement, and the cooperating broker would owe duties to the seller, not the buyer.',
    difficulty: 'medium',
    topicTag: 'sub-agency'
  },
  {
    id: 'ple-q-181',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'A listing agreement must contain all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'A definite expiration date', isCorrect: false },
      { id: 'b', text: 'The compensation terms', isCorrect: false },
      { id: 'c', text: 'An automatic renewal clause', isCorrect: true },
      { id: 'd', text: 'The property description', isCorrect: false }
    ],
    explanation: 'Under Virginia Board regulations (18 VAC 135-20-180), listing agreements must have a definite termination date and should not contain automatic renewal clauses. An automatic renewal could result in a consumer being bound to a listing they intended to end.',
    difficulty: 'medium',
    topicTag: 'listing-requirements'
  },
  {
    id: 'ple-q-182',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'The principal broker in a designated representation situation:',
    options: [
      { id: 'a', text: 'Owes full fiduciary duties to both parties equally', isCorrect: false },
      { id: 'b', text: 'Serves as a dual agent and must not share confidential information between designated agents', isCorrect: true },
      { id: 'c', text: 'Has no responsibilities in the transaction', isCorrect: false },
      { id: 'd', text: 'Must personally attend all showings', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2130.1, in designated representation, the principal broker occupies a dual-agent position while the designated agents owe full fiduciary duties to their respective clients. The principal broker must ensure confidential information is not shared between the designated agents.',
    difficulty: 'hard',
    topicTag: 'broker-role-designated'
  },
  {
    id: 'ple-q-183',
    chapterId: 'ple-agency-duties',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia licensee who knows that a client has been convicted of fraud in a prior real estate transaction:',
    options: [
      { id: 'a', text: 'Must disclose this to the other party', isCorrect: false },
      { id: 'b', text: 'Must keep it confidential as part of the duty of confidentiality', isCorrect: true },
      { id: 'c', text: 'Should withdraw from the transaction immediately', isCorrect: false },
      { id: 'd', text: 'Must report it to the Virginia Real Estate Board', isCorrect: false }
    ],
    explanation: 'A client\'s prior criminal history is generally confidential information unless it directly relates to a material adverse fact about the current transaction. The duty of confidentiality (Va. Code 54.1-2131 et seq.) protects this information. However, the agent cannot assist in or facilitate any current fraudulent conduct.',
    difficulty: 'hard',
    topicTag: 'confidentiality-limits'
  },
  {
    id: 'ple-q-184',
    chapterId: 'ple-agency-brokerage-agreements',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Guidance Document on Brokerage Agreements was developed in response to:',
    options: [
      { id: 'a', text: 'A decline in real estate transactions in Virginia', isCorrect: false },
      { id: 'b', text: 'Changes brought by the NAR settlement requiring more transparency in buyer representation and compensation', isCorrect: true },
      { id: 'c', text: 'Complaints about excessive commission rates', isCorrect: false },
      { id: 'd', text: 'Federal mandate from HUD', isCorrect: false }
    ],
    explanation: 'The VREB\'s Guidance Document on Brokerage Agreements was developed to help licensees comply with the new landscape created by the NAR settlement, emphasizing transparent buyer agreements, clear compensation terms, and proper agency establishment in line with Virginia\'s agency statutes.',
    difficulty: 'medium',
    topicTag: 'guidance-document-purpose'
  },
  {
    id: 'ple-q-185',
    chapterId: 'ple-agency-duties',
    quizType: 'mock_exam',
    questionText: 'A listing agent discovers that their seller client is in foreclosure. The agent should:',
    options: [
      { id: 'a', text: 'Disclose the foreclosure to prospective buyers as a material fact', isCorrect: true },
      { id: 'b', text: 'Keep this confidential to protect the seller', isCorrect: false },
      { id: 'c', text: 'Cancel the listing immediately', isCorrect: false },
      { id: 'd', text: 'Contact the lender to negotiate on behalf of the seller', isCorrect: false }
    ],
    explanation: 'An active foreclosure proceeding is a material adverse fact that affects the property\'s title and the ability to close the transaction. Under Va. Code 54.1-2131 through 54.1-2135, this must be disclosed to all parties. While financial motivation is confidential, the legal encumbrance on the property is a material fact.',
    difficulty: 'hard',
    topicTag: 'foreclosure-disclosure'
  }
]

// ============================================================
// MODULE 6: Contract Writing
// 55 questions | chapterId: ple-contracts-*
// ============================================================

const contractsQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-186',
    chapterId: 'ple-contracts-elements',
    quizType: 'chapter_quiz',
    questionText: 'The "meeting of the minds" (mutual assent) in a Virginia real estate contract is achieved when:',
    options: [
      { id: 'a', text: 'Both parties verbally agree on the price', isCorrect: false },
      { id: 'b', text: 'An offer is accepted without changes and communicated back to the offeror', isCorrect: true },
      { id: 'c', text: 'The home inspection is completed', isCorrect: false },
      { id: 'd', text: 'The mortgage is approved', isCorrect: false }
    ],
    explanation: 'Mutual assent requires a valid offer and unconditional acceptance communicated to the offeror. Under Virginia contract law, a counteroffer rejects the original offer and creates a new offer. The contract is "ratified" when acceptance is communicated to the offering party or their agent.',
    difficulty: 'hard',
    topicTag: 'mutual-assent'
  },
  {
    id: 'ple-q-187',
    chapterId: 'ple-contracts-elements',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, earnest money deposit (EMD) in a real estate contract:',
    options: [
      { id: 'a', text: 'Is legally required for every contract', isCorrect: false },
      { id: 'b', text: 'Is not legally required but customary and demonstrates the buyer\'s good faith', isCorrect: true },
      { id: 'c', text: 'Must equal at least 5% of the purchase price', isCorrect: false },
      { id: 'd', text: 'Must be paid in cash only', isCorrect: false }
    ],
    explanation: 'Virginia law does not require an earnest money deposit for a valid contract (consideration can be the mutual promises). However, EMD is customary and demonstrates the buyer\'s serious intent. The amount is negotiable between the parties and is typically 1-3% of the purchase price.',
    difficulty: 'hard',
    topicTag: 'earnest-money'
  },
  {
    id: 'ple-q-188',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'A financing contingency in a Virginia purchase contract allows the buyer to:',
    options: [
      { id: 'a', text: 'Cancel the contract for any reason', isCorrect: false },
      { id: 'b', text: 'Void the contract and receive their EMD back if they cannot obtain financing within the specified terms', isCorrect: true },
      { id: 'c', text: 'Demand the seller provide financing', isCorrect: false },
      { id: 'd', text: 'Reduce the purchase price if interest rates increase', isCorrect: false }
    ],
    explanation: 'A financing contingency protects the buyer by allowing them to void the contract and recover their earnest money if they are unable to obtain mortgage financing under the terms specified in the contract (loan type, interest rate, term). The buyer must apply in good faith and within the stated timeframe.',
    difficulty: 'easy',
    topicTag: 'financing-contingency'
  },
  {
    id: 'ple-q-189',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'A home inspection contingency typically allows the buyer to:',
    options: [
      { id: 'a', text: 'Demand all repairs be made regardless of cost', isCorrect: false },
      { id: 'b', text: 'Request repairs, negotiate credits, accept the property as-is, or void the contract within the contingency period', isCorrect: true },
      { id: 'c', text: 'Conduct unlimited inspections at any time before closing', isCorrect: false },
      { id: 'd', text: 'Automatically reduce the purchase price by the cost of repairs', isCorrect: false }
    ],
    explanation: 'A home inspection contingency gives the buyer the right to have the property inspected and, based on findings, negotiate repairs, request seller credits, accept as-is, or void the contract within the specified contingency period. The specific terms depend on the language of the contingency in the contract.',
    difficulty: 'easy',
    topicTag: 'inspection-contingency'
  },
  {
    id: 'ple-q-190',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'An appraisal contingency protects the buyer by:',
    options: [
      { id: 'a', text: 'Guaranteeing the property will appraise at the contract price', isCorrect: false },
      { id: 'b', text: 'Allowing the buyer to void the contract if the appraised value is less than the purchase price', isCorrect: true },
      { id: 'c', text: 'Requiring the seller to lower the price to the appraised value', isCorrect: false },
      { id: 'd', text: 'Eliminating the need for a lender-ordered appraisal', isCorrect: false }
    ],
    explanation: 'An appraisal contingency allows the buyer to void the contract and receive their EMD back if the property appraises below the purchase price. Without this contingency, the buyer may be obligated to cover the difference between the appraised value and the purchase price with additional cash.',
    difficulty: 'easy',
    topicTag: 'appraisal-contingency'
  },
  {
    id: 'ple-q-191',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'When writing a purchase contract in Virginia, the property should be identified by:',
    options: [
      { id: 'a', text: 'Only the street address', isCorrect: false },
      { id: 'b', text: 'The street address and legal description or tax map reference sufficient to identify the property', isCorrect: true },
      { id: 'c', text: 'Only the MLS number', isCorrect: false },
      { id: 'd', text: 'The owner\'s name and neighborhood', isCorrect: false }
    ],
    explanation: 'A properly drafted purchase contract should identify the property with sufficient specificity to be enforceable. This typically includes the street address and a legal description (metes and bounds, lot and block, or tax map/parcel number). The MLS number alone is insufficient for legal purposes.',
    difficulty: 'hard',
    topicTag: 'property-identification'
  },
  {
    id: 'ple-q-192',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A counteroffer in Virginia real estate:',
    options: [
      { id: 'a', text: 'Modifies the original offer while keeping it alive', isCorrect: false },
      { id: 'b', text: 'Rejects the original offer and creates a new offer that the original offeror may accept or reject', isCorrect: true },
      { id: 'c', text: 'Automatically extends the original offer deadline', isCorrect: false },
      { id: 'd', text: 'Must be submitted within 24 hours of the original offer', isCorrect: false }
    ],
    explanation: 'Under Virginia contract law, a counteroffer constitutes a rejection of the original offer and creates a new offer. The original offeror becomes the offeree and may accept, reject, or counter the new terms. The original offer cannot be revived once a counteroffer is made.',
    difficulty: 'medium',
    topicTag: 'counteroffers'
  },
  {
    id: 'ple-q-193',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The ratification date in a Virginia real estate contract is significant because:',
    options: [
      { id: 'a', text: 'It starts the clock for contingency deadlines and performance timelines', isCorrect: true },
      { id: 'b', text: 'It determines the tax proration date', isCorrect: false },
      { id: 'c', text: 'It is the same as the closing date', isCorrect: false },
      { id: 'd', text: 'It establishes the listing price', isCorrect: false }
    ],
    explanation: 'The ratification date (the date of final acceptance communicated to all parties) is the starting point for calculating contingency periods, financing deadlines, closing dates, and other time-sensitive provisions in the contract. Accurate recording of this date is critical.',
    difficulty: 'medium',
    topicTag: 'ratification-date'
  },
  {
    id: 'ple-q-194',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'Personal property items included in a Virginia real estate sale should be:',
    options: [
      { id: 'a', text: 'Assumed to be included in every sale', isCorrect: false },
      { id: 'b', text: 'Specifically identified and listed in the contract to avoid disputes', isCorrect: true },
      { id: 'c', text: 'Addressed only at the final walkthrough', isCorrect: false },
      { id: 'd', text: 'Left out of the contract and handled separately', isCorrect: false }
    ],
    explanation: 'To avoid disputes, personal property items (appliances, window treatments, storage sheds) that the buyer expects to remain should be specifically listed in the contract. Items that are fixtures (permanently attached) typically convey with the property, but ambiguous items should be explicitly addressed.',
    difficulty: 'easy',
    topicTag: 'personal-property'
  },
  {
    id: 'ple-q-195',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'Under Virginia law, a fixture is generally determined by which test?',
    options: [
      { id: 'a', text: 'Whether the item costs more than $500', isCorrect: false },
      { id: 'b', text: 'The method of attachment, adaptability to the property, and intention of the parties', isCorrect: true },
      { id: 'c', text: 'Whether the item was purchased after the home was built', isCorrect: false },
      { id: 'd', text: 'Whether the item is listed in the MLS description', isCorrect: false }
    ],
    explanation: 'Virginia courts use a three-part test to determine if an item is a fixture: (1) annexation (method and permanence of attachment), (2) adaptation (whether the item is specifically adapted to the property), and (3) intention (the intent of the party who attached it). Fixtures convey with the real property unless excluded in the contract.',
    difficulty: 'medium',
    topicTag: 'fixtures'
  },
  {
    id: 'ple-q-196',
    chapterId: 'ple-contracts-remedies',
    quizType: 'chapter_quiz',
    questionText: 'If a buyer defaults on a Virginia real estate contract, the seller\'s remedies may include:',
    options: [
      { id: 'a', text: 'Only retaining the earnest money deposit', isCorrect: false },
      { id: 'b', text: 'Retaining the EMD as liquidated damages (if so provided), suing for specific performance, or suing for actual damages', isCorrect: true },
      { id: 'c', text: 'Forcing the buyer to purchase the property under all circumstances', isCorrect: false },
      { id: 'd', text: 'Reporting the buyer to credit agencies', isCorrect: false }
    ],
    explanation: 'Upon buyer default, the seller may: (1) retain the EMD as liquidated damages if the contract contains a liquidated damages clause, (2) sue for specific performance (forcing the buyer to complete the purchase), or (3) sue for actual damages. The available remedies depend on the contract language.',
    difficulty: 'medium',
    topicTag: 'buyer-default'
  },
  {
    id: 'ple-q-197',
    chapterId: 'ple-contracts-remedies',
    quizType: 'chapter_quiz',
    questionText: 'Specific performance as a remedy in a real estate contract means:',
    options: [
      { id: 'a', text: 'The defaulting party must pay triple damages', isCorrect: false },
      { id: 'b', text: 'A court orders the defaulting party to complete the transaction as agreed', isCorrect: true },
      { id: 'c', text: 'The contract is automatically voided', isCorrect: false },
      { id: 'd', text: 'The non-defaulting party receives the earnest money deposit only', isCorrect: false }
    ],
    explanation: 'Specific performance is an equitable remedy where a court orders the breaching party to fulfill their contractual obligations. It is particularly appropriate for real estate because each property is considered unique. Both buyers and sellers may seek specific performance in Virginia.',
    difficulty: 'medium',
    topicTag: 'specific-performance'
  },
  {
    id: 'ple-q-198',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'An addendum to a Virginia real estate contract:',
    options: [
      { id: 'a', text: 'Replaces the entire original contract', isCorrect: false },
      { id: 'b', text: 'Adds to or modifies specific terms of the original contract and must be signed by all parties', isCorrect: true },
      { id: 'c', text: 'Is only valid if notarized', isCorrect: false },
      { id: 'd', text: 'Can only be added before the contract is ratified', isCorrect: false }
    ],
    explanation: 'An addendum supplements or modifies the original contract. It becomes part of the contract when signed by all parties. Addenda can be added before or after ratification (post-ratification changes are often called amendments). Any changes to material terms require the agreement of all parties.',
    difficulty: 'easy',
    topicTag: 'addenda'
  },
  {
    id: 'ple-q-199',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The "time is of the essence" clause in a Virginia real estate contract means:',
    options: [
      { id: 'a', text: 'The contract must be completed as quickly as possible', isCorrect: false },
      { id: 'b', text: 'Deadlines in the contract are strict, and failure to meet them may constitute a breach', isCorrect: true },
      { id: 'c', text: 'The settlement date cannot be changed under any circumstances', isCorrect: false },
      { id: 'd', text: 'All inspections must be completed within 24 hours', isCorrect: false }
    ],
    explanation: 'A "time is of the essence" clause makes contractual deadlines strict and enforceable. Missing a deadline may be treated as a material breach, giving the other party the right to terminate the contract and pursue remedies. Without this clause, courts may allow reasonable delays.',
    difficulty: 'medium',
    topicTag: 'time-is-of-essence'
  },
  {
    id: 'ple-q-200',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A "kick-out" clause (also called a bump clause) in a Virginia contract allows:',
    options: [
      { id: 'a', text: 'The buyer to cancel the contract at any time', isCorrect: false },
      { id: 'b', text: 'The seller to continue marketing the property and "bump" the current buyer if a better offer is received, giving the first buyer a specified time to remove their contingency or lose the contract', isCorrect: true },
      { id: 'c', text: 'The agent to replace the buyer with a higher bidder', isCorrect: false },
      { id: 'd', text: 'Automatic price increases based on market conditions', isCorrect: false }
    ],
    explanation: 'A kick-out clause is commonly used when a buyer has a home sale contingency. It allows the seller to continue marketing the property and, upon receiving another offer, give the first buyer a specified period (typically 24-72 hours) to remove their contingency or release the seller from the contract.',
    difficulty: 'medium',
    topicTag: 'kick-out-clause'
  },
  {
    id: 'ple-q-201',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'A home sale contingency makes the purchase contract contingent upon:',
    options: [
      { id: 'a', text: 'The buyer obtaining a home warranty', isCorrect: false },
      { id: 'b', text: 'The buyer successfully selling and settling on their current home', isCorrect: true },
      { id: 'c', text: 'The seller finding a replacement property', isCorrect: false },
      { id: 'd', text: 'Both the buyer and seller selling their current homes', isCorrect: false }
    ],
    explanation: 'A home sale contingency protects buyers who need to sell their current home before purchasing a new one. The contract is contingent upon the buyer\'s existing home going under contract and/or settling within a specified timeframe. Sellers may pair this with a kick-out clause.',
    difficulty: 'easy',
    topicTag: 'home-sale-contingency'
  },
  {
    id: 'ple-q-202',
    chapterId: 'ple-contracts-writing',
    quizType: 'mock_exam',
    questionText: 'A Virginia real estate contract contains a clause that reads: "Seller shall deliver the property in broom-clean condition." This means the seller must:',
    options: [
      { id: 'a', text: 'Hire a professional cleaning service', isCorrect: false },
      { id: 'b', text: 'Remove all personal belongings and debris, leaving the property reasonably clean and free of trash', isCorrect: true },
      { id: 'c', text: 'Replace all carpets and repaint the walls', isCorrect: false },
      { id: 'd', text: 'Conduct a final walkthrough with the buyer', isCorrect: false }
    ],
    explanation: '"Broom-clean" condition means the seller has removed all personal belongings, trash, and debris, and the property is in a generally clean and orderly condition. It does not require professional cleaning or repairs. This is a common contract provision and a frequent source of dispute.',
    difficulty: 'easy',
    topicTag: 'broom-clean'
  },
  {
    id: 'ple-q-203',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The "as-is" clause in a Virginia purchase contract means:',
    options: [
      { id: 'a', text: 'The seller has no disclosure obligations whatsoever', isCorrect: false },
      { id: 'b', text: 'The buyer accepts the property in its current condition, but the seller must still disclose known material defects', isCorrect: true },
      { id: 'c', text: 'The seller is exempt from all liability after closing', isCorrect: false },
      { id: 'd', text: 'No home inspection is permitted', isCorrect: false }
    ],
    explanation: 'An "as-is" clause means the seller will not make repairs, but it does NOT eliminate the seller\'s duty to disclose known material adverse facts under Va. Code 55.1-702 et seq. The buyer may still inspect the property and can negotiate based on findings, though the seller is not obligated to make repairs.',
    difficulty: 'medium',
    topicTag: 'as-is-clause'
  },
  {
    id: 'ple-q-204',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'Prorations at closing in Virginia typically include:',
    options: [
      { id: 'a', text: 'Only the real estate commission', isCorrect: false },
      { id: 'b', text: 'Property taxes, HOA dues, utility bills, and prepaid items allocated between buyer and seller based on the closing date', isCorrect: true },
      { id: 'c', text: 'Only the mortgage balance', isCorrect: false },
      { id: 'd', text: 'Insurance premiums for the next 12 months', isCorrect: false }
    ],
    explanation: 'Prorations ensure that ongoing expenses are fairly divided between buyer and seller based on the closing date. Common prorations include real estate taxes (if prepaid, seller gets a credit; if in arrears, buyer gets a credit), HOA dues, water/sewer bills, fuel oil, and rent (for income properties).',
    difficulty: 'easy',
    topicTag: 'prorations'
  },
  {
    id: 'ple-q-205',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, real estate taxes are typically assessed and billed:',
    options: [
      { id: 'a', text: 'In advance (paid at the beginning of the tax year)', isCorrect: false },
      { id: 'b', text: 'In arrears (paid after the tax period has occurred), though practices vary by locality', isCorrect: true },
      { id: 'c', text: 'Only at closing', isCorrect: false },
      { id: 'd', text: 'Monthly by the mortgage company only', isCorrect: false }
    ],
    explanation: 'Virginia real estate tax billing varies by locality. Some jurisdictions bill in advance, others in arrears. Licensees must verify the local practice to properly calculate prorations at closing. Common practice in many Virginia localities is semi-annual billing, often in arrears.',
    difficulty: 'medium',
    topicTag: 'tax-prorations'
  },
  {
    id: 'ple-q-206',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A licensee assists a buyer in drafting a purchase offer. The licensee is engaging in:',
    options: [
      { id: 'a', text: 'The unauthorized practice of law', isCorrect: false },
      { id: 'b', text: 'Filling in blanks on pre-approved contract forms, which is within the scope of licensed real estate activity', isCorrect: true },
      { id: 'c', text: 'Legal representation of the buyer', isCorrect: false },
      { id: 'd', text: 'An activity that requires separate attorney approval', isCorrect: false }
    ],
    explanation: 'Virginia licensees may fill in blanks on pre-approved standard contract forms as part of their licensed activity. However, they may not draft custom legal provisions, provide legal advice, or modify standard form language in ways that constitute the practice of law. Parties should be advised to consult an attorney for complex provisions.',
    difficulty: 'medium',
    topicTag: 'practice-of-law'
  },
  {
    id: 'ple-q-207',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'When a buyer waives the appraisal contingency, the buyer:',
    options: [
      { id: 'a', text: 'No longer needs a lender appraisal', isCorrect: false },
      { id: 'b', text: 'Agrees to proceed with the purchase regardless of the appraised value, potentially covering any gap with additional cash', isCorrect: true },
      { id: 'c', text: 'Receives a discount on the purchase price', isCorrect: false },
      { id: 'd', text: 'Automatically qualifies for a higher loan amount', isCorrect: false }
    ],
    explanation: 'Waiving the appraisal contingency means the buyer agrees to purchase at the contract price regardless of the appraised value. If the appraisal comes in low, the buyer must cover the difference between the appraised value and the purchase price with additional cash. The lender will still order an appraisal.',
    difficulty: 'medium',
    topicTag: 'waiving-contingencies'
  },
  {
    id: 'ple-q-208',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Residential Purchase Agreement typically requires the seller to provide clear and marketable title. "Marketable title" means:',
    options: [
      { id: 'a', text: 'The property can be sold for a profit', isCorrect: false },
      { id: 'b', text: 'Title free from material defects, liens, and encumbrances except those agreed upon in the contract', isCorrect: true },
      { id: 'c', text: 'The property has been recently appraised', isCorrect: false },
      { id: 'd', text: 'Title insurance has already been purchased', isCorrect: false }
    ],
    explanation: 'Marketable title means title that is reasonably free from doubt and that a prudent buyer would accept. It is free from material defects, undisclosed liens, adverse claims, and encumbrances, except those specifically listed in the contract (such as recorded easements or HOA covenants).',
    difficulty: 'medium',
    topicTag: 'marketable-title'
  },
  {
    id: 'ple-q-209',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A seller concession (seller assist) in a Virginia purchase contract:',
    options: [
      { id: 'a', text: 'Reduces the purchase price below market value', isCorrect: false },
      { id: 'b', text: 'Is a credit from the seller toward the buyer\'s closing costs, subject to lender limits', isCorrect: true },
      { id: 'c', text: 'Is illegal under Virginia law', isCorrect: false },
      { id: 'd', text: 'Can only be used for home repairs', isCorrect: false }
    ],
    explanation: 'A seller concession is a credit from the seller toward the buyer\'s closing costs, prepaid items, or other expenses. Lenders impose limits on seller concessions (typically 3-9% of the purchase price depending on loan type and down payment). They help buyers with limited cash for closing costs.',
    difficulty: 'easy',
    topicTag: 'seller-concessions'
  },
  {
    id: 'ple-q-210',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'The final walkthrough before closing in Virginia is primarily for the buyer to:',
    options: [
      { id: 'a', text: 'Renegotiate the purchase price', isCorrect: false },
      { id: 'b', text: 'Verify that the property is in substantially the same condition as when the contract was ratified and that agreed-upon repairs have been completed', isCorrect: true },
      { id: 'c', text: 'Conduct a home inspection', isCorrect: false },
      { id: 'd', text: 'Determine where to place furniture', isCorrect: false }
    ],
    explanation: 'The final walkthrough is not a new inspection opportunity but a chance for the buyer to verify: (1) the property is in substantially the same condition, (2) agreed-upon repairs are complete, (3) all items that should convey are present, and (4) the seller has vacated.',
    difficulty: 'easy',
    topicTag: 'final-walkthrough'
  },
  {
    id: 'ple-q-211',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'Consideration in a Virginia real estate contract can be:',
    options: [
      { id: 'a', text: 'Only a cash payment', isCorrect: false },
      { id: 'b', text: 'Anything of value, including mutual promises, money, or other property', isCorrect: true },
      { id: 'c', text: 'Only the earnest money deposit', isCorrect: false },
      { id: 'd', text: 'Only services rendered', isCorrect: false }
    ],
    explanation: 'Consideration is anything of legal value exchanged between the parties. In real estate, it is typically the purchase price (buyer\'s consideration) and the property itself (seller\'s consideration). Mutual promises (the buyer\'s promise to buy and the seller\'s promise to sell) also constitute valid consideration.',
    difficulty: 'easy',
    topicTag: 'consideration'
  },
  {
    id: 'ple-q-212',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia buyer submits an offer with a 7-day expiration date. On day 5, the buyer decides to withdraw the offer. The buyer:',
    options: [
      { id: 'a', text: 'Cannot withdraw because the offer has a stated expiration date', isCorrect: false },
      { id: 'b', text: 'May withdraw the offer at any time before it has been accepted and the acceptance communicated back', isCorrect: true },
      { id: 'c', text: 'Must wait until the expiration date', isCorrect: false },
      { id: 'd', text: 'Must pay the seller a penalty for early withdrawal', isCorrect: false }
    ],
    explanation: 'Under Virginia contract law, an offer can be revoked at any time before acceptance is communicated to the offeror, even if the offer states a specific expiration date. The exception would be if the offer is supported by separate consideration (an option contract). Revocation must be communicated to the offeree.',
    difficulty: 'medium',
    topicTag: 'offer-withdrawal'
  },
  {
    id: 'ple-q-213',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'mock_exam',
    questionText: 'A buyer\'s financing contingency period expires and the buyer has not obtained loan approval. Under a standard Virginia contract with a financing contingency:',
    options: [
      { id: 'a', text: 'The contract is automatically voided', isCorrect: false },
      { id: 'b', text: 'The buyer must provide written notice to the seller that financing was not obtained in order to exercise the contingency and receive the EMD back', isCorrect: true },
      { id: 'c', text: 'The seller automatically keeps the EMD', isCorrect: false },
      { id: 'd', text: 'The financing contingency is automatically extended by 30 days', isCorrect: false }
    ],
    explanation: 'Most Virginia contracts require the buyer to provide timely written notice that financing was not obtained. Failure to provide notice within the required timeframe may result in the contingency being deemed waived. The specific procedures depend on the contract language, making proper deadline management critical.',
    difficulty: 'hard',
    topicTag: 'contingency-expiration'
  },
  {
    id: 'ple-q-214',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'An option contract in Virginia real estate:',
    options: [
      { id: 'a', text: 'Requires the buyer to purchase the property', isCorrect: false },
      { id: 'b', text: 'Gives the buyer the right (but not the obligation) to purchase the property within a specified period for specified terms, in exchange for consideration', isCorrect: true },
      { id: 'c', text: 'Is the same as a standard purchase agreement', isCorrect: false },
      { id: 'd', text: 'Automatically converts to a lease', isCorrect: false }
    ],
    explanation: 'An option contract gives the optionee (buyer) the exclusive right to purchase the property within a specified time at agreed-upon terms. The seller (optionor) receives option consideration in exchange for keeping the offer open. The buyer is not obligated to exercise the option.',
    difficulty: 'medium',
    topicTag: 'option-contracts'
  },
  {
    id: 'ple-q-215',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A right of first refusal in a Virginia real estate context means:',
    options: [
      { id: 'a', text: 'The holder must purchase the property', isCorrect: false },
      { id: 'b', text: 'The holder has the right to match any offer the seller receives before the seller can accept it', isCorrect: true },
      { id: 'c', text: 'The seller must notify the government before selling', isCorrect: false },
      { id: 'd', text: 'The property cannot be sold to anyone', isCorrect: false }
    ],
    explanation: 'A right of first refusal (ROFR) gives the holder the right to match any bona fide offer the owner receives from a third party. If the holder matches the offer, they can purchase the property. If they decline, the owner may sell to the third party on the offered terms.',
    difficulty: 'medium',
    topicTag: 'right-of-first-refusal'
  },
  {
    id: 'ple-q-216',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'At a Virginia real estate closing, the Closing Disclosure (CD) must be provided to the buyer:',
    options: [
      { id: 'a', text: 'At the closing table', isCorrect: false },
      { id: 'b', text: 'At least 3 business days before closing', isCorrect: true },
      { id: 'c', text: 'Within 30 days after closing', isCorrect: false },
      { id: 'd', text: 'Only if the buyer requests it', isCorrect: false }
    ],
    explanation: 'Under the TILA-RESPA Integrated Disclosure (TRID) rules, the lender must provide the Closing Disclosure to the borrower at least 3 business days before closing. This allows the buyer to review final terms and fees. Certain changes may trigger a new 3-day waiting period.',
    difficulty: 'medium',
    topicTag: 'closing-disclosure'
  },
  {
    id: 'ple-q-217',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'TRID (TILA-RESPA Integrated Disclosure) rules apply to:',
    options: [
      { id: 'a', text: 'All real estate transactions including cash sales', isCorrect: false },
      { id: 'b', text: 'Most closed-end consumer mortgage loans but not cash purchases, HELOCs, or reverse mortgages', isCorrect: true },
      { id: 'c', text: 'Only commercial real estate transactions', isCorrect: false },
      { id: 'd', text: 'Only transactions over $1 million', isCorrect: false }
    ],
    explanation: 'TRID rules apply to most closed-end consumer mortgage loans. They do not apply to cash purchases (no lender involved), home equity lines of credit (HELOCs), reverse mortgages, or loans to business entities. TRID requires the Loan Estimate (within 3 days of application) and Closing Disclosure (3 days before closing).',
    difficulty: 'medium',
    topicTag: 'trid'
  },
  {
    id: 'ple-q-218',
    chapterId: 'ple-contracts-remedies',
    quizType: 'chapter_quiz',
    questionText: 'If a seller fails to perform under a Virginia real estate contract, the buyer\'s remedies include:',
    options: [
      { id: 'a', text: 'Only filing a complaint with the Real Estate Board', isCorrect: false },
      { id: 'b', text: 'Specific performance (forcing the sale), suing for damages, or receiving a return of the EMD', isCorrect: true },
      { id: 'c', text: 'Automatic ownership of the property', isCorrect: false },
      { id: 'd', text: 'Only receiving the EMD back', isCorrect: false }
    ],
    explanation: 'When a seller breaches, the buyer may: (1) sue for specific performance to compel the sale, (2) sue for actual and consequential damages (inspection costs, temporary housing, price difference), or (3) terminate the contract and recover the EMD. The appropriate remedy depends on the circumstances.',
    difficulty: 'medium',
    topicTag: 'seller-default'
  },
  {
    id: 'ple-q-219',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A liquidated damages clause in a Virginia real estate contract:',
    options: [
      { id: 'a', text: 'Sets unlimited damages for any breach', isCorrect: false },
      { id: 'b', text: 'Pre-determines the amount of damages (often the EMD) in the event of a specific breach, provided the amount is a reasonable estimate of anticipated damages', isCorrect: true },
      { id: 'c', text: 'Is illegal in Virginia', isCorrect: false },
      { id: 'd', text: 'Only applies to commercial transactions', isCorrect: false }
    ],
    explanation: 'A liquidated damages clause pre-determines the damages payable upon breach. In Virginia, liquidated damages are enforceable if the amount is reasonable in relation to actual damages anticipated at the time of contracting and actual damages would be difficult to calculate. The EMD commonly serves as liquidated damages.',
    difficulty: 'medium',
    topicTag: 'liquidated-damages'
  },
  {
    id: 'ple-q-220',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'A radon testing contingency allows the buyer to:',
    options: [
      { id: 'a', text: 'Require the seller to install a mitigation system before closing', isCorrect: false },
      { id: 'b', text: 'Test the property for radon and negotiate remediation or void the contract if elevated levels are found', isCorrect: true },
      { id: 'c', text: 'File a complaint with the EPA', isCorrect: false },
      { id: 'd', text: 'Delay closing indefinitely', isCorrect: false }
    ],
    explanation: 'A radon contingency allows the buyer to test for radon gas (a naturally occurring radioactive gas that can enter homes through the foundation). If levels exceed EPA-recommended action levels (4 pCi/L), the buyer can negotiate mitigation, request a price reduction, or void the contract per the contingency terms.',
    difficulty: 'easy',
    topicTag: 'radon-contingency'
  },
  {
    id: 'ple-q-221',
    chapterId: 'ple-contracts-writing',
    quizType: 'mock_exam',
    questionText: 'A buyer and seller have a ratified contract, but the parties agree to change the closing date. This change should be documented by:',
    options: [
      { id: 'a', text: 'A verbal agreement between the parties', isCorrect: false },
      { id: 'b', text: 'A written amendment signed by all parties', isCorrect: true },
      { id: 'c', text: 'An email from one agent to the other', isCorrect: false },
      { id: 'd', text: 'Updating the MLS listing', isCorrect: false }
    ],
    explanation: 'Any modification to a ratified contract must be in writing and signed by all parties to be enforceable under the Statute of Frauds. A written amendment (or addendum) documenting the new closing date, signed by buyer and seller, properly modifies the contract.',
    difficulty: 'easy',
    topicTag: 'contract-amendments'
  },
  {
    id: 'ple-q-222',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'When multiple offers are received on a Virginia listing, the listing agent:',
    options: [
      { id: 'a', text: 'Should only present the highest offer', isCorrect: false },
      { id: 'b', text: 'Must present all offers to the seller and let the seller decide how to respond', isCorrect: true },
      { id: 'c', text: 'Should average the offers and present a single price', isCorrect: false },
      { id: 'd', text: 'May reject offers on the seller\'s behalf', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2131 and the NAR Code of Ethics, the listing agent must present all offers to the seller promptly. The seller, not the agent, decides which offer to accept, counter, or reject. The agent should provide professional analysis of each offer\'s strengths and risks.',
    difficulty: 'easy',
    topicTag: 'multiple-offers'
  },
  {
    id: 'ple-q-223',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A wood-destroying insect (WDI) inspection clause in a Virginia contract typically:',
    options: [
      { id: 'a', text: 'Is only required for FHA and VA loans', isCorrect: false },
      { id: 'b', text: 'Requires inspection by a licensed pest control operator and defines responsibilities for treatment and damage repair', isCorrect: true },
      { id: 'c', text: 'Is prohibited in Virginia', isCorrect: false },
      { id: 'd', text: 'Covers only termites and no other wood-destroying organisms', isCorrect: false }
    ],
    explanation: 'WDI inspections are commonly included in Virginia contracts and required by many lenders (particularly VA and FHA loans). The inspection must be performed by a licensed pest control operator and covers termites, powder post beetles, carpenter ants, and wood-boring beetles. The contract should specify who pays for the inspection and treatment.',
    difficulty: 'medium',
    topicTag: 'wdi-inspection'
  },
  {
    id: 'ple-q-224',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'At closing, the grantor\'s (seller\'s) attorney or the settlement agent must ensure that:',
    options: [
      { id: 'a', text: 'The buyer receives a home warranty', isCorrect: false },
      { id: 'b', text: 'The deed is properly executed, the purchase price is disbursed, and the deed is recorded', isCorrect: true },
      { id: 'c', text: 'The buyer\'s furniture is moved into the property', isCorrect: false },
      { id: 'd', text: 'The real estate agents receive their commission before any other disbursements', isCorrect: false }
    ],
    explanation: 'The settlement agent oversees the closing by ensuring: proper execution and delivery of the deed, disbursement of funds per the settlement statement, recording of the deed and deed of trust, payment of liens and encumbrances, and compliance with CRESPA requirements (Va. Code 55.1-900 et seq.).',
    difficulty: 'medium',
    topicTag: 'settlement-duties'
  },
  {
    id: 'ple-q-225',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A contract provision stating "Seller to convey property by general warranty deed" means:',
    options: [
      { id: 'a', text: 'The seller warrants all appliances for one year', isCorrect: false },
      { id: 'b', text: 'The seller will deliver a deed providing the highest level of title protection with covenants covering the entire chain of title', isCorrect: true },
      { id: 'c', text: 'The property is sold with a home warranty only', isCorrect: false },
      { id: 'd', text: 'The seller guarantees the property will appreciate in value', isCorrect: false }
    ],
    explanation: 'A general warranty deed provides the buyer with the strongest title protection, including covenants of seisin, right to convey, warranty, quiet enjoyment, further assurances, and against encumbrances, covering defects arising at any point in the chain of title, not just during the seller\'s ownership.',
    difficulty: 'medium',
    topicTag: 'deed-type'
  },
  {
    id: 'ple-q-226',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'An assignment clause in a Virginia purchase contract determines:',
    options: [
      { id: 'a', text: 'Which agent gets the listing', isCorrect: false },
      { id: 'b', text: 'Whether the buyer can transfer their contractual rights and obligations to a third party', isCorrect: true },
      { id: 'c', text: 'The closing date', isCorrect: false },
      { id: 'd', text: 'Which inspector to use', isCorrect: false }
    ],
    explanation: 'An assignment clause specifies whether the buyer may assign (transfer) their rights under the contract to another party. Many standard contracts prohibit or restrict assignment without the seller\'s written consent. Investors often seek assignable contracts for "wholesale" transactions.',
    difficulty: 'medium',
    topicTag: 'assignment'
  },
  {
    id: 'ple-q-227',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The merger doctrine in Virginia real estate means:',
    options: [
      { id: 'a', text: 'Two properties are combined into one', isCorrect: false },
      { id: 'b', text: 'The terms of the purchase contract merge into the deed at closing, and the deed controls post-closing', isCorrect: true },
      { id: 'c', text: 'Two contracts on the same property automatically combine', isCorrect: false },
      { id: 'd', text: 'The buyer and seller\'s obligations merge into one shared obligation', isCorrect: false }
    ],
    explanation: 'Under the merger doctrine, the terms of the purchase contract generally merge into the deed upon delivery and acceptance at closing. After closing, the buyer\'s rights are governed by the deed, not the contract. Exceptions include provisions intended to survive closing (e.g., warranty clauses, indemnification).',
    difficulty: 'hard',
    topicTag: 'merger-doctrine'
  },
  {
    id: 'ple-q-228',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'The buyer\'s "right of possession" in Virginia typically transfers:',
    options: [
      { id: 'a', text: 'When the contract is ratified', isCorrect: false },
      { id: 'b', text: 'At the time of settlement (closing) and recording of the deed, unless otherwise agreed', isCorrect: true },
      { id: 'c', text: 'When the earnest money is deposited', isCorrect: false },
      { id: 'd', text: 'When the home inspection is completed', isCorrect: false }
    ],
    explanation: 'In Virginia, possession typically transfers to the buyer at settlement when the deed is delivered and the purchase price is paid, unless the contract specifies otherwise (such as a rent-back agreement or early occupancy). The deed is then recorded for constructive notice.',
    difficulty: 'easy',
    topicTag: 'possession'
  },
  {
    id: 'ple-q-229',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A rent-back agreement (post-settlement occupancy agreement) in Virginia:',
    options: [
      { id: 'a', text: 'Is illegal because the seller must vacate at closing', isCorrect: false },
      { id: 'b', text: 'Allows the seller to remain in the property after closing for a specified period, usually paying rent to the new owner', isCorrect: true },
      { id: 'c', text: 'Automatically creates a year-long lease', isCorrect: false },
      { id: 'd', text: 'Eliminates the buyer\'s obligation to pay at closing', isCorrect: false }
    ],
    explanation: 'A rent-back or post-settlement occupancy agreement allows the seller to remain in the property after closing for a defined period (often 30-60 days). Terms should include daily rent, security deposit, insurance requirements, and consequences of overstaying. Lender approval may be required.',
    difficulty: 'medium',
    topicTag: 'rent-back'
  },
  {
    id: 'ple-q-230',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'mock_exam',
    questionText: 'A contract contains a home inspection contingency with a 10-day period. The buyer\'s inspector discovers significant issues on day 8. The buyer submits a repair request on day 12. Under strict contract terms:',
    options: [
      { id: 'a', text: 'The repair request is timely because it was within a reasonable time', isCorrect: false },
      { id: 'b', text: 'The buyer may have waived the inspection contingency by not acting within the 10-day period', isCorrect: true },
      { id: 'c', text: 'The seller must respond regardless of timing', isCorrect: false },
      { id: 'd', text: 'The inspecting company is liable for the delay', isCorrect: false }
    ],
    explanation: 'Under strict contract interpretation (especially with a "time is of the essence" clause), failure to exercise contingency rights within the specified period may constitute waiver. The buyer should have submitted the repair request or voided the contract within the 10-day period. This highlights the importance of calendar management.',
    difficulty: 'hard',
    topicTag: 'contingency-deadlines'
  },
  {
    id: 'ple-q-231',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'In a Virginia real estate contract, the integration clause (also called a merger clause or entire agreement clause):',
    options: [
      { id: 'a', text: 'Integrates the property into a HOA', isCorrect: false },
      { id: 'b', text: 'States that the written contract represents the entire agreement and supersedes all prior oral or written understandings', isCorrect: true },
      { id: 'c', text: 'Merges two separate contracts into one', isCorrect: false },
      { id: 'd', text: 'Requires integration of all inspection reports', isCorrect: false }
    ],
    explanation: 'An integration (entire agreement) clause states that the written contract is the complete and final agreement, superseding all prior negotiations, representations, and understandings. This prevents either party from later claiming that oral promises or prior drafts modify the written terms, supporting the parol evidence rule.',
    difficulty: 'medium',
    topicTag: 'integration-clause'
  },
  {
    id: 'ple-q-232',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia purchase contract for a property subject to an HOA must include:',
    options: [
      { id: 'a', text: 'A clause requiring the buyer to join the HOA board', isCorrect: false },
      { id: 'b', text: 'Provisions for the buyer to receive and review the HOA resale disclosure packet, with a right to void within the statutory period', isCorrect: true },
      { id: 'c', text: 'A waiver of all HOA rules', isCorrect: false },
      { id: 'd', text: 'Automatic membership in the Virginia Association of REALTORS', isCorrect: false }
    ],
    explanation: 'Under the Virginia Property Owners\' Association Act (Va. Code 55.1-1800 et seq.), the buyer has the right to receive and review the HOA resale disclosure packet (association disclosure packet). The buyer has a 3-day right to void the contract after receiving the packet.',
    difficulty: 'medium',
    topicTag: 'hoa-disclosure'
  },
  {
    id: 'ple-q-233',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'Under the Virginia Condominium Act, a buyer of a condo unit has the right to receive the resale certificate and then:',
    options: [
      { id: 'a', text: 'A 7-day right to cancel', isCorrect: false },
      { id: 'b', text: 'A 3-day right to cancel from receipt of the resale certificate', isCorrect: true },
      { id: 'c', text: 'A 10-day right to cancel', isCorrect: false },
      { id: 'd', text: 'No cancellation right once the contract is signed', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1990, the buyer of a resale condominium unit has a 3-day right of cancellation after receiving the resale certificate. The resale certificate contains critical information about the association including financials, reserves, rules, and pending assessments.',
    difficulty: 'medium',
    topicTag: 'condo-cancellation'
  },
  {
    id: 'ple-q-234',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'A "survival clause" in a Virginia purchase contract ensures that:',
    options: [
      { id: 'a', text: 'The contract survives the death of either party', isCorrect: false },
      { id: 'b', text: 'Certain representations, warranties, or obligations continue to be enforceable after closing despite the merger doctrine', isCorrect: true },
      { id: 'c', text: 'The listing agreement survives if the contract falls through', isCorrect: false },
      { id: 'd', text: 'The home warranty lasts for the life of the property', isCorrect: false }
    ],
    explanation: 'A survival clause specifies that certain provisions of the contract survive closing and are not extinguished by the merger doctrine. Common surviving provisions include seller representations about the property condition, indemnification clauses, and post-closing obligations like repairs.',
    difficulty: 'hard',
    topicTag: 'survival-clause'
  },
  {
    id: 'ple-q-235',
    chapterId: 'ple-contracts-contingencies',
    quizType: 'chapter_quiz',
    questionText: 'A due diligence period in a Virginia purchase contract (where used):',
    options: [
      { id: 'a', text: 'Is only for commercial properties', isCorrect: false },
      { id: 'b', text: 'Provides the buyer a defined period to conduct all investigations and potentially terminate the contract for any reason discovered during due diligence', isCorrect: true },
      { id: 'c', text: 'Replaces the need for title insurance', isCorrect: false },
      { id: 'd', text: 'Is required by Virginia law for all residential transactions', isCorrect: false }
    ],
    explanation: 'A due diligence period (more common in commercial but sometimes used in residential) gives the buyer a comprehensive window to investigate all aspects of the property (physical, environmental, title, zoning, financial). The buyer may typically terminate for any reason during this period, with the EMD usually becoming non-refundable after the period expires.',
    difficulty: 'medium',
    topicTag: 'due-diligence'
  },
  {
    id: 'ple-q-236',
    chapterId: 'ple-contracts-closing',
    quizType: 'chapter_quiz',
    questionText: 'Virginia deed of trust recordation tax (grantor\'s tax) is:',
    options: [
      { id: 'a', text: 'Paid by the buyer only', isCorrect: false },
      { id: 'b', text: 'A state and local tax imposed on the deed and the deed of trust at recording', isCorrect: true },
      { id: 'c', text: 'Waived for first-time homebuyers', isCorrect: false },
      { id: 'd', text: 'Only applicable to properties over $500,000', isCorrect: false }
    ],
    explanation: 'Virginia imposes a grantor\'s tax (typically paid by the seller) on the deed and a recordation tax on the deed of trust (typically paid by the buyer). Under Va. Code 58.1-801 et seq., the state grantor\'s tax is $0.50 per $500 of consideration (or $1.00 per $1,000). Localities may impose additional taxes.',
    difficulty: 'medium',
    topicTag: 'transfer-taxes'
  },
  {
    id: 'ple-q-237',
    chapterId: 'ple-contracts-remedies',
    quizType: 'chapter_quiz',
    questionText: 'If a property is substantially damaged (e.g., by fire) between contract ratification and closing in Virginia:',
    options: [
      { id: 'a', text: 'The buyer must still complete the purchase at the full price', isCorrect: false },
      { id: 'b', text: 'The risk of loss provisions in the contract typically determine which party bears the risk; Virginia follows the Uniform Vendor and Purchaser Risk Act', isCorrect: true },
      { id: 'c', text: 'The contract is automatically voided in all cases', isCorrect: false },
      { id: 'd', text: 'The title company bears the loss', isCorrect: false }
    ],
    explanation: 'Under Virginia\'s adoption of the Uniform Vendor and Purchaser Risk Act (Va. Code 55.1-600 et seq.), risk of loss generally remains with the seller until closing/possession transfer. Most contracts also address this with specific provisions. If materially damaged, the buyer typically may terminate and receive their EMD back.',
    difficulty: 'hard',
    topicTag: 'risk-of-loss'
  },
  {
    id: 'ple-q-238',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'When drafting a Virginia purchase contract, the settlement date should be:',
    options: [
      { id: 'a', text: 'Left blank until financing is approved', isCorrect: false },
      { id: 'b', text: 'A specific calendar date or described in a manner that makes it determinable', isCorrect: true },
      { id: 'c', text: '"On or about" without any specific date', isCorrect: false },
      { id: 'd', text: 'Within 15 days of contract ratification by law', isCorrect: false }
    ],
    explanation: 'The settlement date should be a specific date or determinable (e.g., "within 45 days of ratification"). Vague terms like "on or about" can create ambiguity and disputes. Virginia law does not mandate a specific settlement timeframe, but both parties should agree on a clear date to manage expectations.',
    difficulty: 'easy',
    topicTag: 'settlement-date'
  },
  {
    id: 'ple-q-239',
    chapterId: 'ple-contracts-writing',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Residential Property Owners\' Association Act requires the resale disclosure packet to be delivered to the buyer within:',
    options: [
      { id: 'a', text: '7 days of the request', isCorrect: false },
      { id: 'b', text: '14 days of the request (or as specified in the request, not to exceed 14 days)', isCorrect: true },
      { id: 'c', text: '30 days of contract ratification', isCorrect: false },
      { id: 'd', text: '3 days of the request', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-1809, the association must deliver the disclosure packet within 14 days of the request or such shorter time as specified in the request. The cost of the packet is borne by the seller unless the contract provides otherwise. The buyer has a 3-day cancellation right after receipt.',
    difficulty: 'medium',
    topicTag: 'poa-disclosure-timeline'
  },
  {
    id: 'ple-q-240',
    chapterId: 'ple-contracts-closing',
    quizType: 'mock_exam',
    questionText: 'A buyer receives the Closing Disclosure and notices a $2,000 fee that was not on the Loan Estimate. Under TRID rules:',
    options: [
      { id: 'a', text: 'The buyer must accept the fee because the CD is final', isCorrect: false },
      { id: 'b', text: 'The buyer should question the fee with the lender; certain fee increases above tolerance thresholds are prohibited unless there is a valid changed circumstance', isCorrect: true },
      { id: 'c', text: 'The buyer can refuse to close over any fee discrepancy', isCorrect: false },
      { id: 'd', text: 'The settlement agent is responsible for all fee discrepancies', isCorrect: false }
    ],
    explanation: 'TRID rules establish tolerance thresholds limiting how much fees can increase from the Loan Estimate to the Closing Disclosure. Zero tolerance applies to certain fees (lender origination charges); 10% aggregate tolerance applies to services the borrower could not shop for. Increases above these thresholds require a valid changed circumstance.',
    difficulty: 'hard',
    topicTag: 'trid-tolerances'
  }
]

// ============================================================
// MODULE 7: Risk Management
// 30 questions | chapterId: ple-risk-mgmt-*
// ============================================================

const riskMgmtQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-241',
    chapterId: 'ple-risk-mgmt-cbpa',
    quizType: 'chapter_quiz',
    questionText: 'The Chesapeake Bay Preservation Act (CBPA) requires Virginia localities in the Chesapeake Bay watershed to:',
    options: [
      { id: 'a', text: 'Ban all construction within 10 miles of the Bay', isCorrect: false },
      { id: 'b', text: 'Designate and protect Chesapeake Bay Preservation Areas including Resource Protection Areas (RPAs) and Resource Management Areas (RMAs)', isCorrect: true },
      { id: 'c', text: 'Require all properties to have flood insurance', isCorrect: false },
      { id: 'd', text: 'Prohibit the sale of waterfront properties', isCorrect: false }
    ],
    explanation: 'The CBPA (Va. Code 62.1-44.15:67 et seq.) requires localities in the Bay watershed to designate Chesapeake Bay Preservation Areas consisting of RPAs (including the 100-foot buffer along tidal waters, wetlands, and tributaries) and RMAs. Development in these areas is regulated to protect water quality.',
    difficulty: 'medium',
    topicTag: 'cbpa'
  },
  {
    id: 'ple-q-242',
    chapterId: 'ple-risk-mgmt-cbpa',
    quizType: 'chapter_quiz',
    questionText: 'A Resource Protection Area (RPA) under the Chesapeake Bay Preservation Act includes:',
    options: [
      { id: 'a', text: 'All land within 500 feet of any body of water', isCorrect: false },
      { id: 'b', text: 'A 100-foot vegetated buffer zone along tidal waters, tidal wetlands, and certain tributary streams', isCorrect: true },
      { id: 'c', text: 'Only property owned by the Commonwealth of Virginia', isCorrect: false },
      { id: 'd', text: 'Land designated for commercial development only', isCorrect: false }
    ],
    explanation: 'An RPA under the CBPA consists of tidal wetlands, non-tidal wetlands connected to tidal wetlands, tidal shores, and a 100-foot vegetated buffer along these features. Development in RPAs is severely restricted. The buffer must be maintained with native vegetation to filter runoff.',
    difficulty: 'medium',
    topicTag: 'rpa'
  },
  {
    id: 'ple-q-243',
    chapterId: 'ple-risk-mgmt-cbpa',
    quizType: 'chapter_quiz',
    questionText: 'A property located within a Chesapeake Bay Preservation Area must be disclosed:',
    options: [
      { id: 'a', text: 'Only if the buyer specifically asks about environmental restrictions', isCorrect: false },
      { id: 'b', text: 'On the Virginia Residential Property Disclosure form as required by statute', isCorrect: true },
      { id: 'c', text: 'Only for commercial properties', isCorrect: false },
      { id: 'd', text: 'Never, as it is public information', isCorrect: false }
    ],
    explanation: 'Under the Virginia Residential Property Disclosure Act (Va. Code 55.1-702 et seq.), sellers must disclose whether the property is located in a Chesapeake Bay Preservation Area. This is a specific line item on the disclosure form because CBPA designation affects what improvements can be made to the property.',
    difficulty: 'hard',
    topicTag: 'cbpa-disclosure'
  },
  {
    id: 'ple-q-244',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'chapter_quiz',
    questionText: 'The Sherman Antitrust Act prohibits real estate professionals from:',
    options: [
      { id: 'a', text: 'Competing for listings in the same market area', isCorrect: false },
      { id: 'b', text: 'Engaging in price fixing, group boycotts, market allocation, or tie-in arrangements', isCorrect: true },
      { id: 'c', text: 'Offering competitive commission rates below the market average', isCorrect: false },
      { id: 'd', text: 'Advertising on the same platforms as other agents', isCorrect: false }
    ],
    explanation: 'The Sherman Antitrust Act (15 U.S.C. 1-7) prohibits: (1) price fixing (agreeing on commission rates), (2) group boycotts (refusing to work with certain brokerages), (3) market allocation (dividing geographic territories), and (4) tie-in arrangements (conditioning one service on purchasing another). Violations carry severe penalties.',
    difficulty: 'medium',
    topicTag: 'antitrust'
  },
  {
    id: 'ple-q-245',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'chapter_quiz',
    questionText: 'Two competing brokers at a local real estate meeting discuss and agree to charge the same commission rate. This is an example of:',
    options: [
      { id: 'a', text: 'Good business practice', isCorrect: false },
      { id: 'b', text: 'Price fixing, which is a per se violation of the Sherman Antitrust Act', isCorrect: true },
      { id: 'c', text: 'Legal if both brokers are REALTORS', isCorrect: false },
      { id: 'd', text: 'Permissible industry standardization', isCorrect: false }
    ],
    explanation: 'Price fixing is a per se violation of the Sherman Antitrust Act, meaning it is illegal regardless of the reasonableness of the agreed-upon rate or the parties\' intent. Commission rates must be independently determined by each brokerage. Penalties include up to $100 million in corporate fines and up to 10 years imprisonment.',
    difficulty: 'easy',
    topicTag: 'price-fixing'
  },
  {
    id: 'ple-q-246',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'chapter_quiz',
    questionText: 'A group of brokers agree not to show listings from a particular discount brokerage. This practice is:',
    options: [
      { id: 'a', text: 'A legitimate business decision', isCorrect: false },
      { id: 'b', text: 'A group boycott violating the Sherman Antitrust Act', isCorrect: true },
      { id: 'c', text: 'Legal if the discount brokerage provides poor service', isCorrect: false },
      { id: 'd', text: 'Only illegal if more than 5 brokers participate', isCorrect: false }
    ],
    explanation: 'A group boycott (concerted refusal to deal) violates the Sherman Antitrust Act. Brokers cannot collectively refuse to cooperate with or show listings from a competing brokerage, regardless of the reason. Each broker must make independent decisions about cooperation.',
    difficulty: 'medium',
    topicTag: 'group-boycott'
  },
  {
    id: 'ple-q-247',
    chapterId: 'ple-risk-mgmt-eo-insurance',
    quizType: 'chapter_quiz',
    questionText: 'Errors and omissions (E&O) insurance for real estate licensees:',
    options: [
      { id: 'a', text: 'Is required by Virginia law for all licensees', isCorrect: false },
      { id: 'b', text: 'Protects licensees from claims of negligence, misrepresentation, and errors in professional services', isCorrect: true },
      { id: 'c', text: 'Covers intentional fraud by the licensee', isCorrect: false },
      { id: 'd', text: 'Is the same as general liability insurance', isCorrect: false }
    ],
    explanation: 'E&O insurance (professional liability insurance) protects real estate professionals from financial losses arising from claims of professional negligence, errors, or omissions. While not mandated by Virginia state law, many brokerages require it. E&O does not cover intentional acts, fraud, or criminal conduct.',
    difficulty: 'hard',
    topicTag: 'eo-insurance'
  },
  {
    id: 'ple-q-248',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'To minimize risk of misrepresentation claims, a Virginia licensee should:',
    options: [
      { id: 'a', text: 'Provide verbal information only to avoid creating a paper trail', isCorrect: false },
      { id: 'b', text: 'Document all representations in writing, recommend professional inspections, and avoid making statements outside their expertise', isCorrect: true },
      { id: 'c', text: 'Never provide any information about the property', isCorrect: false },
      { id: 'd', text: 'Only communicate through their attorney', isCorrect: false }
    ],
    explanation: 'Best risk management practices include: documenting all communications and representations in writing, recommending qualified professionals (inspectors, attorneys, surveyors), distinguishing opinions from facts, avoiding statements about matters outside their expertise, and maintaining thorough transaction files.',
    difficulty: 'easy',
    topicTag: 'documentation'
  },
  {
    id: 'ple-q-249',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'Negligent misrepresentation by a Virginia licensee occurs when the licensee:',
    options: [
      { id: 'a', text: 'Intentionally lies about a property defect', isCorrect: false },
      { id: 'b', text: 'Makes a false statement that they should have known was false through reasonable diligence', isCorrect: true },
      { id: 'c', text: 'Accurately describes the property based on available information', isCorrect: false },
      { id: 'd', text: 'Refuses to answer a buyer\'s question', isCorrect: false }
    ],
    explanation: 'Negligent misrepresentation occurs when a licensee makes a false statement without knowledge of its falsity but should have known it was false through reasonable care and diligence. Unlike intentional fraud, negligent misrepresentation does not require intent to deceive. Both are actionable in Virginia.',
    difficulty: 'medium',
    topicTag: 'negligent-misrepresentation'
  },
  {
    id: 'ple-q-250',
    chapterId: 'ple-risk-mgmt-environmental',
    quizType: 'chapter_quiz',
    questionText: 'A licensee learns that a property was previously used as a gas station. The licensee should:',
    options: [
      { id: 'a', text: 'Not mention it because the use has ended', isCorrect: false },
      { id: 'b', text: 'Recommend the buyer conduct an environmental assessment (Phase I ESA) and disclose the known prior use as a potential environmental concern', isCorrect: true },
      { id: 'c', text: 'Guarantee the property is free from contamination', isCorrect: false },
      { id: 'd', text: 'Contact the EPA directly', isCorrect: false }
    ],
    explanation: 'Former gas stations may have underground storage tanks and soil/groundwater contamination. A licensee aware of this prior use should disclose it as a material fact and recommend a Phase I Environmental Site Assessment. Failure to disclose known environmental concerns is a material omission.',
    difficulty: 'medium',
    topicTag: 'environmental-risk'
  },
  {
    id: 'ple-q-251',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'The statute of limitations for filing a fraud claim in Virginia real estate is:',
    options: [
      { id: 'a', text: '1 year', isCorrect: false },
      { id: 'b', text: '2 years from the date of discovery or when it should have been discovered', isCorrect: true },
      { id: 'c', text: '5 years from the closing date', isCorrect: false },
      { id: 'd', text: '10 years from the original listing date', isCorrect: false }
    ],
    explanation: 'Under Va. Code 8.01-243, the statute of limitations for fraud is 2 years from the date the fraud was discovered or should have been discovered through reasonable diligence. This "discovery rule" means the clock does not necessarily start at closing if the fraud was concealed.',
    difficulty: 'hard',
    topicTag: 'statute-of-limitations'
  },
  {
    id: 'ple-q-252',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'Vicarious liability in real estate means:',
    options: [
      { id: 'a', text: 'Each agent is only liable for their own actions', isCorrect: false },
      { id: 'b', text: 'A broker may be held liable for the acts of their supervised agents performed within the scope of their duties', isCorrect: true },
      { id: 'c', text: 'Buyers are liable for their agent\'s mistakes', isCorrect: false },
      { id: 'd', text: 'Only the MLS is liable for listing errors', isCorrect: false }
    ],
    explanation: 'Under the doctrine of respondeat superior and Va. Code 54.1-2108.1, a principal broker may be held vicariously liable for the acts of agents performed within the scope of their authority. This is why broker supervision and training are critical risk management tools.',
    difficulty: 'medium',
    topicTag: 'vicarious-liability'
  },
  {
    id: 'ple-q-253',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'mock_exam',
    questionText: 'A buyer asks a listing agent, "Is the 6% commission standard in this area?" The listing agent should respond:',
    options: [
      { id: 'a', text: '"Yes, 6% is the standard rate in our market"', isCorrect: false },
      { id: 'b', text: '"Commission rates are negotiable and set independently by each brokerage. There is no standard rate."', isCorrect: true },
      { id: 'c', text: '"Most agents charge between 5-7%"', isCorrect: false },
      { id: 'd', text: '"I cannot discuss commissions"', isCorrect: false }
    ],
    explanation: 'Any suggestion that commission rates are "standard," "typical," or "set" violates antitrust law. Each brokerage independently determines its commission rates. The correct response emphasizes that commissions are negotiable and set by individual firms. Even casual language suggesting a standard rate can constitute antitrust evidence.',
    difficulty: 'medium',
    topicTag: 'commission-antitrust'
  },
  {
    id: 'ple-q-254',
    chapterId: 'ple-risk-mgmt-environmental',
    quizType: 'chapter_quiz',
    questionText: 'Asbestos in a residential property:',
    options: [
      { id: 'a', text: 'Must be removed before any property can be sold', isCorrect: false },
      { id: 'b', text: 'Is only a concern if the material is friable (easily crumbled) or disturbed, and should be disclosed if known', isCorrect: true },
      { id: 'c', text: 'Is not a material fact in Virginia', isCorrect: false },
      { id: 'd', text: 'Is the EPA\'s responsibility to disclose', isCorrect: false }
    ],
    explanation: 'Asbestos is primarily hazardous when friable (easily crumbled and airborne). Intact asbestos materials are generally managed in place. If a licensee knows or should know of asbestos in a property, it should be disclosed as a material adverse fact. Professional assessment should be recommended.',
    difficulty: 'medium',
    topicTag: 'asbestos'
  },
  {
    id: 'ple-q-255',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'A licensee gives a buyer an opinion about the structural integrity of a foundation. If the opinion is wrong, the licensee may be liable for:',
    options: [
      { id: 'a', text: 'Nothing, because opinions are protected speech', isCorrect: false },
      { id: 'b', text: 'Negligent misrepresentation for providing opinions outside their area of expertise', isCorrect: true },
      { id: 'c', text: 'Criminal charges of unlicensed engineering', isCorrect: false },
      { id: 'd', text: 'Only a Board reprimand', isCorrect: false }
    ],
    explanation: 'A licensee who provides opinions on structural matters is acting outside their expertise and competency. If the buyer relies on this opinion and suffers harm, the licensee may be liable for negligent misrepresentation. Best practice: recommend a licensed structural engineer or qualified inspector.',
    difficulty: 'medium',
    topicTag: 'scope-of-expertise'
  },
  {
    id: 'ple-q-256',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'A risk management best practice for open houses includes:',
    options: [
      { id: 'a', text: 'Leaving all doors unlocked for easy access', isCorrect: false },
      { id: 'b', text: 'Having visitors sign in, securing valuables and medications, and having a safety plan', isCorrect: true },
      { id: 'c', text: 'Allowing visitors to explore the property unaccompanied', isCorrect: false },
      { id: 'd', text: 'Only hosting open houses during daylight hours', isCorrect: false }
    ],
    explanation: 'Open house risk management includes: requiring visitor sign-ins (with ID if possible), advising sellers to secure valuables/medications/personal documents, having a safety buddy system, knowing the exits, keeping a charged phone available, and following the NAR REALTOR Safety Program guidelines.',
    difficulty: 'easy',
    topicTag: 'open-house-safety'
  },
  {
    id: 'ple-q-257',
    chapterId: 'ple-risk-mgmt-environmental',
    quizType: 'chapter_quiz',
    questionText: 'Mold in a property being sold in Virginia:',
    options: [
      { id: 'a', text: 'Does not need to be disclosed because Virginia has no mold-specific statute', isCorrect: false },
      { id: 'b', text: 'Should be disclosed if known, as it constitutes a material adverse fact affecting the property condition', isCorrect: true },
      { id: 'c', text: 'Is only a concern in commercial properties', isCorrect: false },
      { id: 'd', text: 'Must be professionally remediated before listing', isCorrect: false }
    ],
    explanation: 'While Virginia does not have a mold-specific disclosure statute, visible or known mold constitutes a material adverse fact that must be disclosed under the general duty to disclose material defects (Va. Code 54.1-2131 et seq. and 55.1-702 et seq.). Licensees aware of mold should ensure proper disclosure.',
    difficulty: 'medium',
    topicTag: 'mold'
  },
  {
    id: 'ple-q-258',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'Maintaining thorough transaction files is important for risk management because:',
    options: [
      { id: 'a', text: 'It is required by the IRS', isCorrect: false },
      { id: 'b', text: 'It provides documentation to defend against future claims and demonstrates professional diligence', isCorrect: true },
      { id: 'c', text: 'It is only necessary for commercial transactions', isCorrect: false },
      { id: 'd', text: 'It prevents the need for E&O insurance', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-185, Virginia requires brokers to maintain transaction records for a minimum of 5 years. Complete documentation (emails, signed disclosures, inspection reports, correspondence) provides evidence of professional conduct and is the first line of defense in any claim or complaint.',
    difficulty: 'easy',
    topicTag: 'record-keeping'
  },
  {
    id: 'ple-q-259',
    chapterId: 'ple-risk-mgmt-cbpa',
    quizType: 'mock_exam',
    questionText: 'A buyer wants to build a pool in the backyard of a property located in a Chesapeake Bay Preservation Area RPA. The licensee should advise:',
    options: [
      { id: 'a', text: 'Go ahead because residential improvements in RPAs are unrestricted', isCorrect: false },
      { id: 'b', text: 'That development within the RPA is severely restricted and the buyer should consult with the local CBPA administrator before purchasing', isCorrect: true },
      { id: 'c', text: 'That pool construction is prohibited in Virginia', isCorrect: false },
      { id: 'd', text: 'That only commercial development is restricted in RPAs', isCorrect: false }
    ],
    explanation: 'Development within RPAs is heavily regulated under the CBPA. Construction, grading, and land disturbance in the 100-foot buffer require local government approval and may be prohibited. The buyer should consult with the locality\'s CBPA administrator to understand what improvements are permissible before committing to the purchase.',
    difficulty: 'hard',
    topicTag: 'rpa-development'
  },
  {
    id: 'ple-q-260',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'chapter_quiz',
    questionText: 'Market allocation (dividing markets geographically among competitors) in real estate:',
    options: [
      { id: 'a', text: 'Is a common and legal practice', isCorrect: false },
      { id: 'b', text: 'Is a per se violation of the Sherman Antitrust Act', isCorrect: true },
      { id: 'c', text: 'Is only illegal if done in writing', isCorrect: false },
      { id: 'd', text: 'Is permitted if approved by the local real estate board', isCorrect: false }
    ],
    explanation: 'Market allocation, where competitors agree to divide geographic territories or customer segments, is a per se violation of the Sherman Antitrust Act (15 U.S.C. 1). Brokers must independently choose their market areas. Even informal agreements to "stay out of each other\'s territory" are illegal.',
    difficulty: 'medium',
    topicTag: 'market-allocation'
  },
  {
    id: 'ple-q-261',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'A "hold harmless" or indemnification clause in a listing agreement:',
    options: [
      { id: 'a', text: 'Eliminates all liability for the brokerage under all circumstances', isCorrect: false },
      { id: 'b', text: 'Requires the seller to indemnify the broker against losses arising from the seller\'s misrepresentations or failure to disclose', isCorrect: true },
      { id: 'c', text: 'Is unenforceable in Virginia', isCorrect: false },
      { id: 'd', text: 'Only protects the buyer', isCorrect: false }
    ],
    explanation: 'A hold harmless clause in a listing agreement typically requires the seller to indemnify the broker against claims arising from information the seller provided (or failed to provide). It does not protect the broker from their own negligence or independent duties to disclose.',
    difficulty: 'medium',
    topicTag: 'indemnification'
  },
  {
    id: 'ple-q-262',
    chapterId: 'ple-risk-mgmt-environmental',
    quizType: 'chapter_quiz',
    questionText: 'Underground storage tanks (USTs) on residential property in Virginia:',
    options: [
      { id: 'a', text: 'Are never a concern for residential properties', isCorrect: false },
      { id: 'b', text: 'Must be disclosed if known, and buyers should be advised to investigate potential soil/groundwater contamination', isCorrect: true },
      { id: 'c', text: 'Are automatically removed by the government', isCorrect: false },
      { id: 'd', text: 'Only need disclosure if actively in use', isCorrect: false }
    ],
    explanation: 'USTs (especially older heating oil tanks) may leak and contaminate soil and groundwater. Known USTs must be disclosed as material adverse facts. The Virginia DEQ regulates USTs under Va. Code 62.1-44.34:8 et seq. Buyers should investigate potential contamination, and inactive USTs may need to be properly decommissioned.',
    difficulty: 'medium',
    topicTag: 'underground-storage-tanks'
  },
  {
    id: 'ple-q-263',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'A licensee posts a property photo on social media that inadvertently reveals the seller\'s personal religious items. This could be problematic because:',
    options: [
      { id: 'a', text: 'It violates copyright law', isCorrect: false },
      { id: 'b', text: 'It could reveal protected class information about the seller and expose the licensee to fair housing concerns', isCorrect: true },
      { id: 'c', text: 'Social media marketing is prohibited for real estate', isCorrect: false },
      { id: 'd', text: 'It violates the MLS photo guidelines only', isCorrect: false }
    ],
    explanation: 'Photos revealing personal items associated with protected classes (religious objects, family photos, disability equipment) can expose the agent and seller to fair housing issues. Best practice is to photograph the property features, not personal belongings, and advise sellers to remove personal items before photography.',
    difficulty: 'medium',
    topicTag: 'photo-risk'
  },
  {
    id: 'ple-q-264',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'If a licensee suspects a property may have environmental contamination but has no confirmed information:',
    options: [
      { id: 'a', text: 'They should not mention it to avoid defaming the property', isCorrect: false },
      { id: 'b', text: 'They should recommend the buyer conduct appropriate environmental testing and share the basis for their concern', isCorrect: true },
      { id: 'c', text: 'They should guarantee the property is clean based on visual inspection', isCorrect: false },
      { id: 'd', text: 'They should contact the seller\'s attorney only', isCorrect: false }
    ],
    explanation: 'A licensee with reasonable grounds to suspect environmental issues should recommend professional environmental testing and share the basis for their concern without making conclusive statements. This satisfies the duty of care and disclosure while avoiding potential defamation of the property.',
    difficulty: 'medium',
    topicTag: 'environmental-suspicion'
  },
  {
    id: 'ple-q-265',
    chapterId: 'ple-risk-mgmt-eo-insurance',
    quizType: 'chapter_quiz',
    questionText: 'An E&O insurance claim is typically triggered by:',
    options: [
      { id: 'a', text: 'A client filing a complaint with the Real Estate Board', isCorrect: false },
      { id: 'b', text: 'A claim or lawsuit alleging professional negligence, errors, or omissions in the licensee\'s professional services', isCorrect: true },
      { id: 'c', text: 'A client requesting a commission reduction', isCorrect: false },
      { id: 'd', text: 'A property failing a home inspection', isCorrect: false }
    ],
    explanation: 'E&O coverage responds to claims of professional negligence, misrepresentation, or failure to perform professional duties. Common triggers include missed deadlines, failure to disclose material facts, errors in contracts, and negligent advice. The licensee should notify their E&O carrier promptly upon learning of a potential claim.',
    difficulty: 'easy',
    topicTag: 'eo-claims'
  },
  {
    id: 'ple-q-266',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'mock_exam',
    questionText: 'A buyer closes on a property and later discovers a concealed water damage issue that the listing agent knew about but did not disclose. The buyer may pursue:',
    options: [
      { id: 'a', text: 'No legal action because the contract has merged into the deed', isCorrect: false },
      { id: 'b', text: 'Claims against the listing agent for fraudulent or negligent misrepresentation, and possibly against the seller for fraud', isCorrect: true },
      { id: 'c', text: 'Only a complaint with the HOA', isCorrect: false },
      { id: 'd', text: 'A claim only if the damage exceeds $50,000', isCorrect: false }
    ],
    explanation: 'Concealment of a known material defect can support claims of fraud and negligent misrepresentation against both the seller and the listing agent. The merger doctrine does not protect against pre-closing fraud. Under Virginia law, the buyer has 2 years from discovery to file a fraud claim (Va. Code 8.01-243).',
    difficulty: 'hard',
    topicTag: 'post-closing-claims'
  },
  {
    id: 'ple-q-267',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'The best way for a licensee to handle a question about property matters outside their expertise is to:',
    options: [
      { id: 'a', text: 'Provide their best guess to be helpful', isCorrect: false },
      { id: 'b', text: 'Acknowledge the limit of their knowledge and recommend the client consult an appropriate professional', isCorrect: true },
      { id: 'c', text: 'Research the answer on the internet and present it as fact', isCorrect: false },
      { id: 'd', text: 'Decline to answer any questions at all', isCorrect: false }
    ],
    explanation: 'Under Article 11 of the NAR Code and Virginia law, licensees should not provide advice outside their area of competency. The proper response is to acknowledge the limit, recommend an appropriate professional (attorney, inspector, engineer, surveyor, environmental consultant), and assist in connecting the client with that resource.',
    difficulty: 'easy',
    topicTag: 'professional-referrals'
  },
  {
    id: 'ple-q-268',
    chapterId: 'ple-risk-mgmt-environmental',
    quizType: 'chapter_quiz',
    questionText: 'Virginia law requires disclosure of defective drywall because:',
    options: [
      { id: 'a', text: 'All drywall is potentially defective', isCorrect: false },
      { id: 'b', text: 'Certain imported drywall (primarily from China, 2001-2009) emits sulfur gases that corrode wiring, plumbing, and HVAC systems and can cause health issues', isCorrect: true },
      { id: 'c', text: 'It affects the exterior paint color', isCorrect: false },
      { id: 'd', text: 'It is required by the EPA only', isCorrect: false }
    ],
    explanation: 'Under Va. Code 55.1-710.1, sellers must disclose the presence of defective drywall. Primarily imported Chinese drywall (installed 2001-2009) emits sulfur compounds that cause corrosion of copper wiring, copper plumbing, and HVAC coils, and may cause health symptoms. Remediation can be extremely costly.',
    difficulty: 'medium',
    topicTag: 'defective-drywall'
  },
  {
    id: 'ple-q-269',
    chapterId: 'ple-risk-mgmt-liability',
    quizType: 'chapter_quiz',
    questionText: 'A licensee who receives a legal complaint or threat of litigation should:',
    options: [
      { id: 'a', text: 'Immediately contact the opposing party to resolve the matter', isCorrect: false },
      { id: 'b', text: 'Notify their principal broker and E&O insurance carrier immediately, and refrain from making admissions', isCorrect: true },
      { id: 'c', text: 'Delete all related emails and records', isCorrect: false },
      { id: 'd', text: 'Post about it on social media for public support', isCorrect: false }
    ],
    explanation: 'Upon receiving notice of a claim, the licensee should: (1) immediately notify their principal broker, (2) contact their E&O carrier (most policies require prompt notice), (3) refrain from making admissions or settling without insurer consent, (4) preserve all documentation related to the transaction, and (5) consult an attorney.',
    difficulty: 'easy',
    topicTag: 'claim-response'
  },
  {
    id: 'ple-q-270',
    chapterId: 'ple-risk-mgmt-antitrust',
    quizType: 'chapter_quiz',
    questionText: 'A tie-in arrangement (tying agreement) in real estate involves:',
    options: [
      { id: 'a', text: 'Requiring a buyer to close within a specified timeframe', isCorrect: false },
      { id: 'b', text: 'Conditioning the availability of one service on the purchase of another service from the same provider', isCorrect: true },
      { id: 'c', text: 'Linking commission rates to the sale price', isCorrect: false },
      { id: 'd', text: 'Requiring both buyer and seller to be represented', isCorrect: false }
    ],
    explanation: 'A tie-in arrangement violates antitrust law when a provider conditions one product or service on the purchase of another. For example, a broker requiring sellers to use the broker\'s affiliated title company as a condition of the listing agreement would be an illegal tying arrangement under the Sherman Act.',
    difficulty: 'hard',
    topicTag: 'tying-arrangement'
  }
]

// ============================================================
// MODULE 8: Escrow Requirements & Trust Accounts
// 30 questions | chapterId: ple-escrow-*
// ============================================================

const escrowQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-271',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'In Virginia, escrow (trust) funds received by a broker must be deposited into an escrow account within:',
    options: [
      { id: 'a', text: '24 hours', isCorrect: false },
      { id: 'b', text: 'The end of the fifth business banking day following ratification of the contract or receipt of the funds, whichever occurs later', isCorrect: true },
      { id: 'c', text: '10 business days', isCorrect: false },
      { id: 'd', text: '30 calendar days', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, a Virginia broker must deposit escrow funds into a trust account by the end of the fifth business banking day following ratification of the contract or the date the funds are received, whichever occurs later.',
    difficulty: 'medium',
    topicTag: 'deposit-timing'
  },
  {
    id: 'ple-q-272',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'A Virginia real estate broker\'s escrow (trust) account must be:',
    options: [
      { id: 'a', text: 'A personal savings account', isCorrect: false },
      { id: 'b', text: 'A separate account in a federally insured depository in Virginia, clearly labeled as an escrow or trust account', isCorrect: true },
      { id: 'c', text: 'An investment account for maximum return', isCorrect: false },
      { id: 'd', text: 'Any account approved by the principal broker\'s personal bank', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, escrow accounts must be maintained in a federally insured bank or savings institution in Virginia. The account must be clearly designated as an "escrow account" or "trust account" and must be separate from the broker\'s business or personal accounts.',
    difficulty: 'hard',
    topicTag: 'trust-account-requirements'
  },
  {
    id: 'ple-q-273',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'Commingling of funds occurs when a broker:',
    options: [
      { id: 'a', text: 'Deposits two different clients\' funds into the same trust account', isCorrect: false },
      { id: 'b', text: 'Mixes personal or business funds with client escrow funds in the trust account', isCorrect: true },
      { id: 'c', text: 'Transfers funds between two trust accounts', isCorrect: false },
      { id: 'd', text: 'Deposits a check before it clears', isCorrect: false }
    ],
    explanation: 'Commingling is the illegal mixing of a broker\'s personal or business operating funds with client trust funds. Under 18 VAC 135-20-190, only client funds (and a small amount of broker funds to cover bank fees) may be held in the escrow account. Multiple clients\' funds may be in the same trust account with proper record keeping.',
    difficulty: 'easy',
    topicTag: 'commingling'
  },
  {
    id: 'ple-q-274',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'Conversion of escrow funds occurs when:',
    options: [
      { id: 'a', text: 'Funds are converted from one currency to another', isCorrect: false },
      { id: 'b', text: 'A broker uses client trust funds for their own personal or business purposes', isCorrect: true },
      { id: 'c', text: 'Funds are transferred from escrow to the settlement agent at closing', isCorrect: false },
      { id: 'd', text: 'A check is converted to a wire transfer', isCorrect: false }
    ],
    explanation: 'Conversion is the unauthorized use of client trust funds for the broker\'s personal or business purposes. It is a serious violation under Va. Code 54.1-2112 and may constitute embezzlement under Va. Code 18.2-111. It is grounds for immediate license revocation and criminal prosecution.',
    difficulty: 'hard',
    topicTag: 'conversion'
  },
  {
    id: 'ple-q-275',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'A principal broker must reconcile escrow accounts:',
    options: [
      { id: 'a', text: 'Annually', isCorrect: false },
      { id: 'b', text: 'Monthly', isCorrect: true },
      { id: 'c', text: 'Quarterly', isCorrect: false },
      { id: 'd', text: 'Only when audited', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, the principal broker must reconcile escrow accounts on a monthly basis. The reconciliation must compare the bank statement balance with the total of all individual client ledger balances. Any discrepancies must be promptly resolved.',
    difficulty: 'medium',
    topicTag: 'reconciliation'
  },
  {
    id: 'ple-q-276',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Real Estate Board may audit a broker\'s escrow account:',
    options: [
      { id: 'a', text: 'Only with 30 days\' written notice', isCorrect: false },
      { id: 'b', text: 'At any time without prior notice', isCorrect: true },
      { id: 'c', text: 'Only if a complaint is filed', isCorrect: false },
      { id: 'd', text: 'Once every five years', isCorrect: false }
    ],
    explanation: 'Under Va. Code 54.1-2112 and Board regulations, the VREB has the authority to audit escrow accounts at any time without prior notice. Brokers must maintain complete and accurate records available for inspection. Failure to cooperate with an audit is itself a violation.',
    difficulty: 'medium',
    topicTag: 'audit-authority'
  },
  {
    id: 'ple-q-277',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'When an earnest money dispute arises and the parties cannot agree on disposition, the broker holding the funds should:',
    options: [
      { id: 'a', text: 'Return the funds to the buyer automatically', isCorrect: false },
      { id: 'b', text: 'Continue to hold the funds in escrow and may interplead the funds with the circuit court', isCorrect: true },
      { id: 'c', text: 'Give the funds to the seller since they have the listing', isCorrect: false },
      { id: 'd', text: 'Donate the funds to charity', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, when there is a dispute over escrow funds, the broker must continue holding the funds until the parties reach a written agreement, a court orders disbursement, or the broker interpleads the funds with the court. The broker cannot unilaterally decide who receives the funds.',
    difficulty: 'medium',
    topicTag: 'escrow-disputes'
  },
  {
    id: 'ple-q-278',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'Interpleader in the context of a Virginia escrow dispute means:',
    options: [
      { id: 'a', text: 'The broker keeps the disputed funds as a penalty', isCorrect: false },
      { id: 'b', text: 'The broker deposits the disputed funds with the circuit court and asks the court to determine the rightful recipient', isCorrect: true },
      { id: 'c', text: 'A mediator divides the funds equally between the parties', isCorrect: false },
      { id: 'd', text: 'The Virginia Real Estate Board confiscates the funds', isCorrect: false }
    ],
    explanation: 'An interpleader action (Va. Code 8.01-364) allows the broker to deposit the disputed funds with the circuit court, removing themselves from the dispute. The court then determines which party is entitled to the funds. This protects the broker from liability to either party.',
    difficulty: 'medium',
    topicTag: 'interpleader'
  },
  {
    id: 'ple-q-279',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'A broker may keep a small amount of personal funds in the escrow account for the purpose of:',
    options: [
      { id: 'a', text: 'Earning interest on the combined balance', isCorrect: false },
      { id: 'b', text: 'Covering bank service charges and maintaining the minimum balance to keep the account open', isCorrect: true },
      { id: 'c', text: 'Having emergency business funds readily available', isCorrect: false },
      { id: 'd', text: 'This is never permitted under any circumstances', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, a broker may maintain a small amount of personal funds (typically enough to cover bank service charges and maintain any minimum balance requirement) in the escrow account. This limited exception prevents the account from being closed due to fees or falling below minimum balance requirements.',
    difficulty: 'medium',
    topicTag: 'broker-funds-in-escrow'
  },
  {
    id: 'ple-q-280',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'When a sales contract falls through and both parties agree the earnest money should be returned to the buyer, the broker should:',
    options: [
      { id: 'a', text: 'Hold the funds for 30 days before releasing', isCorrect: false },
      { id: 'b', text: 'Obtain a written mutual release signed by both parties before disbursing the funds', isCorrect: true },
      { id: 'c', text: 'Return the funds to the buyer immediately without any documentation', isCorrect: false },
      { id: 'd', text: 'Deduct the agent\'s commission before returning the balance', isCorrect: false }
    ],
    explanation: 'Before disbursing disputed or potentially disputed escrow funds, the broker should obtain a written mutual release signed by all parties. This documents the agreement and protects the broker from subsequent claims by either party. The broker cannot deduct commissions or fees from the escrow funds.',
    difficulty: 'easy',
    topicTag: 'escrow-release'
  },
  {
    id: 'ple-q-281',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'Which of the following is required for proper escrow account record keeping in Virginia?',
    options: [
      { id: 'a', text: 'Only a running bank balance', isCorrect: false },
      { id: 'b', text: 'Individual client ledgers, a journal of all deposits and disbursements, monthly reconciliations, and bank statements', isCorrect: true },
      { id: 'c', text: 'Only canceled checks', isCorrect: false },
      { id: 'd', text: 'A single spreadsheet with total balances', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-190, proper escrow record keeping requires: (1) individual ledgers for each client/transaction, (2) a journal recording all deposits and disbursements, (3) monthly three-way reconciliation (bank statement vs. journal vs. client ledgers), and (4) retention of bank statements and supporting documents.',
    difficulty: 'medium',
    topicTag: 'record-keeping-requirements'
  },
  {
    id: 'ple-q-282',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A buyer provides an earnest money check that bounces (insufficient funds). The listing agent should:',
    options: [
      { id: 'a', text: 'Ignore it and hope the buyer provides a replacement', isCorrect: false },
      { id: 'b', text: 'Promptly notify all parties and the broker, as this may constitute a breach of the purchase contract', isCorrect: true },
      { id: 'c', text: 'Cover the amount from the broker\'s personal funds', isCorrect: false },
      { id: 'd', text: 'Contact the buyer\'s bank directly', isCorrect: false }
    ],
    explanation: 'A bounced EMD check is a material fact that must be promptly disclosed to all parties. The failure to deliver good funds may constitute a breach of the purchase contract. The broker should notify the buyer and request replacement funds. The seller should be informed so they can exercise their rights under the contract.',
    difficulty: 'medium',
    topicTag: 'bounced-check'
  },
  {
    id: 'ple-q-283',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'mock_exam',
    questionText: 'A principal broker discovers a $5,000 shortage during their monthly escrow account reconciliation. The broker should:',
    options: [
      { id: 'a', text: 'Wait until next month to see if it resolves itself', isCorrect: false },
      { id: 'b', text: 'Immediately investigate the discrepancy, deposit personal funds if necessary to make the account whole, and report the issue to the Virginia Real Estate Board if theft or misappropriation is suspected', isCorrect: true },
      { id: 'c', text: 'Close the escrow account and open a new one', isCorrect: false },
      { id: 'd', text: 'Deduct the shortage equally from all client accounts', isCorrect: false }
    ],
    explanation: 'A shortfall in the escrow account is extremely serious. The broker must: (1) immediately investigate the cause, (2) make the account whole with personal funds if necessary to protect clients, (3) report suspected theft or misappropriation to the Board and law enforcement, and (4) take corrective action to prevent recurrence.',
    difficulty: 'hard',
    topicTag: 'escrow-shortage'
  },
  {
    id: 'ple-q-284',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'When a buyer directs that their earnest money be deposited with a settlement agent instead of the listing broker, the:',
    options: [
      { id: 'a', text: 'Listing broker must refuse and insist on holding the funds', isCorrect: false },
      { id: 'b', text: 'Purchase contract should specify who holds the escrow funds, and both parties must agree to the arrangement', isCorrect: true },
      { id: 'c', text: 'Settlement agent has no authority to hold escrow funds', isCorrect: false },
      { id: 'd', text: 'Buyer cannot direct where escrow funds are held', isCorrect: false }
    ],
    explanation: 'The purchase contract should clearly specify who will hold the earnest money deposit (listing broker, selling broker, settlement agent, or other party). Under Virginia law, a registered settlement agent may hold escrow funds. The arrangement must be agreed upon by both parties in the contract.',
    difficulty: 'easy',
    topicTag: 'escrow-holder'
  },
  {
    id: 'ple-q-285',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'Interest earned on a Virginia real estate escrow account generally belongs to:',
    options: [
      { id: 'a', text: 'The broker who maintains the account', isCorrect: false },
      { id: 'b', text: 'The party or parties whose funds are deposited, as agreed in writing', isCorrect: true },
      { id: 'c', text: 'The Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'It is always split equally between buyer and seller', isCorrect: false }
    ],
    explanation: 'Interest earned on escrow funds belongs to the depositor(s) unless the parties agree otherwise in writing. Many standard escrow accounts are non-interest-bearing to simplify administration. If an interest-bearing account is used, the contract should specify who receives the interest.',
    difficulty: 'medium',
    topicTag: 'escrow-interest'
  },
  {
    id: 'ple-q-286',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A broker receives a wire transfer for an earnest money deposit. The broker should:',
    options: [
      { id: 'a', text: 'Accept it and deposit it in their personal account first', isCorrect: false },
      { id: 'b', text: 'Ensure the wire goes directly to the escrow account and document the receipt with proper identification of the transaction', isCorrect: true },
      { id: 'c', text: 'Refuse wire transfers because only checks are acceptable', isCorrect: false },
      { id: 'd', text: 'Convert it to cash before depositing', isCorrect: false }
    ],
    explanation: 'Wire transfers for earnest money must be directed to the escrow account, not personal or business accounts. The broker must properly document the receipt, including the sender, amount, date, and associated transaction. Wire fraud prevention measures should be followed for verification.',
    difficulty: 'easy',
    topicTag: 'wire-deposits'
  },
  {
    id: 'ple-q-287',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'The three-way reconciliation of an escrow account involves comparing:',
    options: [
      { id: 'a', text: 'Three different bank statements', isCorrect: false },
      { id: 'b', text: 'The bank statement balance, the checkbook/journal balance, and the total of all individual client ledger balances', isCorrect: true },
      { id: 'c', text: 'The broker\'s, seller\'s, and buyer\'s records', isCorrect: false },
      { id: 'd', text: 'The current month, prior month, and year-to-date balances', isCorrect: false }
    ],
    explanation: 'A three-way reconciliation ensures the adjusted bank balance equals the adjusted journal (checkbook) balance, which equals the sum of all individual client ledger balances. All three must match. Any discrepancy indicates an error or irregularity that must be promptly investigated and resolved.',
    difficulty: 'medium',
    topicTag: 'three-way-reconciliation'
  },
  {
    id: 'ple-q-288',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'How long must a Virginia broker retain escrow account records?',
    options: [
      { id: 'a', text: '1 year after the transaction closes', isCorrect: false },
      { id: 'b', text: '3 years', isCorrect: false },
      { id: 'c', text: '5 years from the date of the closing or termination of the transaction', isCorrect: true },
      { id: 'd', text: '10 years', isCorrect: false }
    ],
    explanation: 'Under 18 VAC 135-20-185, Virginia brokers must maintain transaction and escrow records for a minimum of 5 years from the date of the closing, termination of the transaction, or last activity. Records must be available for Board inspection during this period.',
    difficulty: 'easy',
    topicTag: 'record-retention'
  },
  {
    id: 'ple-q-289',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A property management firm collects security deposits from tenants. These deposits must be:',
    options: [
      { id: 'a', text: 'Kept in the broker\'s business operating account', isCorrect: false },
      { id: 'b', text: 'Held in a separate escrow/trust account and not commingled with the broker\'s or owner\'s operating funds', isCorrect: true },
      { id: 'c', text: 'Invested in stocks for maximum return', isCorrect: false },
      { id: 'd', text: 'Forwarded to the property owner immediately', isCorrect: false }
    ],
    explanation: 'Under the VRLTA (Va. Code 55.1-1226) and Board regulations, tenant security deposits are trust funds that must be held in a separate escrow account. They cannot be commingled with the property manager\'s operating funds or the property owner\'s rental income.',
    difficulty: 'easy',
    topicTag: 'security-deposit-escrow'
  },
  {
    id: 'ple-q-290',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'mock_exam',
    questionText: 'A broker maintains separate escrow accounts for sales transactions and property management. This practice is:',
    options: [
      { id: 'a', text: 'Required by Virginia law for all brokers', isCorrect: false },
      { id: 'b', text: 'A best practice that simplifies accounting and reconciliation, though not strictly required if proper records are maintained', isCorrect: true },
      { id: 'c', text: 'Prohibited because all trust funds must be in one account', isCorrect: false },
      { id: 'd', text: 'Only permitted for brokers with more than 50 transactions per year', isCorrect: false }
    ],
    explanation: 'While not strictly required, maintaining separate escrow accounts for different types of trust funds (sales vs. property management) is a best practice recommended by the VREB. It simplifies reconciliation and reduces the risk of errors. The key requirement is proper record keeping regardless of account structure.',
    difficulty: 'medium',
    topicTag: 'multiple-escrow-accounts'
  },
  {
    id: 'ple-q-291',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A salesperson receives an earnest money deposit. The salesperson must:',
    options: [
      { id: 'a', text: 'Deposit it in their personal account and transfer it later', isCorrect: false },
      { id: 'b', text: 'Deliver the funds to their principal broker or the designated escrow holder as promptly as practical', isCorrect: true },
      { id: 'c', text: 'Hold the check until the contract is fully ratified', isCorrect: false },
      { id: 'd', text: 'Return it to the buyer for safekeeping', isCorrect: false }
    ],
    explanation: 'A salesperson has no authority to hold or deposit escrow funds. Under 18 VAC 135-20-190, the salesperson must deliver all trust funds to their principal broker or the designated escrow holder promptly. A salesperson may never deposit trust funds into their own account.',
    difficulty: 'easy',
    topicTag: 'salesperson-funds-handling'
  },
  {
    id: 'ple-q-292',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'When disbursing escrow funds at closing, the broker must:',
    options: [
      { id: 'a', text: 'Wait 30 days after closing to disburse', isCorrect: false },
      { id: 'b', text: 'Disburse according to the terms of the settlement statement and only after the transaction has been completed and funds have been verified', isCorrect: true },
      { id: 'c', text: 'Disburse the commission first, then distribute remaining funds', isCorrect: false },
      { id: 'd', text: 'Hold all funds until the deed is recorded', isCorrect: false }
    ],
    explanation: 'Escrow funds must be disbursed in accordance with the settlement statement and the terms of the contract. The broker must verify that all conditions for disbursement have been met (e.g., deed delivery, recording, loan funding). Premature disbursement before conditions are met creates significant risk.',
    difficulty: 'medium',
    topicTag: 'closing-disbursement'
  },
  {
    id: 'ple-q-293',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'A broker is closing their firm. The escrow account:',
    options: [
      { id: 'a', text: 'Can be closed immediately with any remaining funds kept by the broker', isCorrect: false },
      { id: 'b', text: 'Must not be closed until all pending transactions are completed and all escrow funds are properly disbursed', isCorrect: true },
      { id: 'c', text: 'Is automatically transferred to the Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'Must be transferred to the nearest competing brokerage', isCorrect: false }
    ],
    explanation: 'When closing a firm, the broker must ensure all escrow funds are properly disbursed before closing the account. All pending transactions must be completed or the funds transferred to successor escrow holders with proper documentation. The broker remains responsible for any escrow funds until properly disbursed.',
    difficulty: 'medium',
    topicTag: 'firm-closure'
  },
  {
    id: 'ple-q-294',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A buyer requests that their earnest money be held in an interest-bearing escrow account. The broker should:',
    options: [
      { id: 'a', text: 'Refuse because interest-bearing escrow accounts are prohibited', isCorrect: false },
      { id: 'b', text: 'Obtain written agreement from all parties regarding the interest-bearing arrangement, including who receives the interest and tax reporting responsibilities', isCorrect: true },
      { id: 'c', text: 'Agree and keep the interest as a fee', isCorrect: false },
      { id: 'd', text: 'Open a separate CD for each transaction', isCorrect: false }
    ],
    explanation: 'Interest-bearing escrow accounts are permitted but require careful handling. Written agreement between the parties should specify: who receives the interest, tax reporting (TIN/SSN), any early withdrawal penalties, and the type of account. The broker must comply with IRS reporting requirements for interest earned.',
    difficulty: 'hard',
    topicTag: 'interest-bearing-escrow'
  },
  {
    id: 'ple-q-295',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Real Estate Board\'s primary concern with escrow accounts is:',
    options: [
      { id: 'a', text: 'Ensuring the broker earns maximum interest', isCorrect: false },
      { id: 'b', text: 'Protecting consumer funds through proper handling, accounting, and safeguarding of trust monies', isCorrect: true },
      { id: 'c', text: 'Generating revenue for the Board through audit fees', isCorrect: false },
      { id: 'd', text: 'Limiting the number of transactions a broker can handle', isCorrect: false }
    ],
    explanation: 'The VREB\'s escrow regulations exist to protect consumers\' funds. Escrow accounts are a trust obligation, meaning the broker holds funds as a fiduciary for the benefit of others. Violations of escrow rules are among the most serious offenses and frequently result in license revocation.',
    difficulty: 'easy',
    topicTag: 'consumer-protection'
  },
  {
    id: 'ple-q-296',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'If a contract falls through and the earnest money should be returned to the buyer under the contract terms, but the seller refuses to authorize the release, the broker should:',
    options: [
      { id: 'a', text: 'Return the funds to the buyer anyway', isCorrect: false },
      { id: 'b', text: 'Continue holding the funds, attempt to resolve the dispute, and if unresolved, consider interpleading the funds with the court', isCorrect: true },
      { id: 'c', text: 'Give the funds to the seller since they refuse to release', isCorrect: false },
      { id: 'd', text: 'Keep the funds as a fee for their trouble', isCorrect: false }
    ],
    explanation: 'Even if the contract appears to support the buyer\'s claim, the broker cannot unilaterally release funds when there is a genuine dispute between the parties. The broker must continue holding the funds, document the dispute, and may interplead the funds with the circuit court (Va. Code 8.01-364) to let the court decide.',
    difficulty: 'medium',
    topicTag: 'disputed-funds'
  },
  {
    id: 'ple-q-297',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A property management broker collects first month\'s rent and a security deposit from a new tenant. These funds:',
    options: [
      { id: 'a', text: 'Should be deposited in the same trust account with proper ledger entries distinguishing rent from security deposit', isCorrect: true },
      { id: 'b', text: 'Must be deposited in two completely separate bank accounts', isCorrect: false },
      { id: 'c', text: 'Should be given directly to the property owner', isCorrect: false },
      { id: 'd', text: 'Can be deposited in the broker\'s operating account', isCorrect: false }
    ],
    explanation: 'Both rent and security deposits are trust funds, but they serve different purposes. They may be held in the same trust account provided the broker maintains separate ledger entries clearly distinguishing rental income from security deposits. Rental income is typically disbursed to the owner per the management agreement.',
    difficulty: 'medium',
    topicTag: 'property-management-escrow'
  },
  {
    id: 'ple-q-298',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'mock_exam',
    questionText: 'During an audit, the Virginia Real Estate Board discovers that a broker\'s escrow account is short by $15,000 across multiple client transactions. The most likely consequence is:',
    options: [
      { id: 'a', text: 'A written warning', isCorrect: false },
      { id: 'b', text: 'License revocation, potential criminal prosecution, and civil liability to affected clients', isCorrect: true },
      { id: 'c', text: 'A small fine of $500', isCorrect: false },
      { id: 'd', text: 'Mandatory continuing education only', isCorrect: false }
    ],
    explanation: 'An escrow shortage across multiple transactions is among the most serious violations. Under Va. Code 54.1-2112, the Board will likely revoke the broker\'s license. The broker faces criminal prosecution for embezzlement (Va. Code 18.2-111) and civil liability to all affected clients. The Transaction Recovery Fund may compensate injured consumers.',
    difficulty: 'hard',
    topicTag: 'escrow-violations'
  },
  {
    id: 'ple-q-299',
    chapterId: 'ple-escrow-procedures',
    quizType: 'chapter_quiz',
    questionText: 'A buyer provides a promissory note instead of cash for the earnest money deposit. The listing agent should:',
    options: [
      { id: 'a', text: 'Accept it without comment', isCorrect: false },
      { id: 'b', text: 'Inform the seller that the earnest money is in the form of a promissory note, not cash, as this is a material fact', isCorrect: true },
      { id: 'c', text: 'Refuse to present the offer', isCorrect: false },
      { id: 'd', text: 'Deposit the note in the escrow account', isCorrect: false }
    ],
    explanation: 'A promissory note as earnest money is a material fact that must be disclosed to the seller. It represents a promise to pay rather than actual cash on deposit. The seller should know this when evaluating the offer, as a promissory note provides less security than cash or a certified check.',
    difficulty: 'medium',
    topicTag: 'alternative-emd'
  },
  {
    id: 'ple-q-300',
    chapterId: 'ple-escrow-trust-accounts',
    quizType: 'chapter_quiz',
    questionText: 'If a principal broker dies or becomes incapacitated, the escrow account:',
    options: [
      { id: 'a', text: 'Is automatically closed by the bank', isCorrect: false },
      { id: 'b', text: 'Must be managed by a successor broker or the VREB may appoint a receiver to protect client funds', isCorrect: true },
      { id: 'c', text: 'Funds are distributed to the broker\'s heirs', isCorrect: false },
      { id: 'd', text: 'The clients lose their deposits', isCorrect: false }
    ],
    explanation: 'Upon the death or incapacitation of a principal broker, the firm must ensure a successor broker is designated to manage the escrow account and ongoing transactions. If no successor is available, the VREB may take action to protect consumer funds, including appointing a receiver under Va. Code 54.1-2112.',
    difficulty: 'hard',
    topicTag: 'broker-incapacity'
  }
]

// ============================================================
// MODULE 9: Real Estate Finance
// 25 questions | chapterId: ple-finance-*
// ============================================================

const financeQuestions: QuizQuestion[] = [
  {
    id: 'ple-q-301',
    chapterId: 'ple-finance-loan-process',
    quizType: 'chapter_quiz',
    questionText: 'The loan-to-value (LTV) ratio is calculated by dividing:',
    options: [
      { id: 'a', text: 'The appraised value by the loan amount', isCorrect: false },
      { id: 'b', text: 'The loan amount by the appraised value (or sale price, whichever is lower)', isCorrect: true },
      { id: 'c', text: 'The down payment by the sale price', isCorrect: false },
      { id: 'd', text: 'The monthly payment by the borrower\'s income', isCorrect: false }
    ],
    explanation: 'LTV is the loan amount divided by the lesser of the appraised value or sale price. For example, a $180,000 loan on a property appraised at $200,000 has an LTV of 90%. Higher LTVs typically require private mortgage insurance (PMI) on conventional loans.',
    difficulty: 'hard',
    topicTag: 'ltv-ratio'
  },
  {
    id: 'ple-q-302',
    chapterId: 'ple-finance-loan-process',
    quizType: 'chapter_quiz',
    questionText: 'Private mortgage insurance (PMI) is typically required on conventional loans when the LTV exceeds:',
    options: [
      { id: 'a', text: '70%', isCorrect: false },
      { id: 'b', text: '80%', isCorrect: true },
      { id: 'c', text: '90%', isCorrect: false },
      { id: 'd', text: '95%', isCorrect: false }
    ],
    explanation: 'Conventional lenders typically require PMI when the LTV exceeds 80% (i.e., the borrower puts down less than 20%). Under the Homeowners Protection Act of 1998, PMI must be automatically terminated when the LTV reaches 78% of the original value.',
    difficulty: 'easy',
    topicTag: 'pmi'
  },
  {
    id: 'ple-q-303',
    chapterId: 'ple-finance-fha',
    quizType: 'chapter_quiz',
    questionText: 'FHA loans are insured by the Federal Housing Administration. The primary benefit of an FHA loan for a buyer is:',
    options: [
      { id: 'a', text: 'No appraisal is required', isCorrect: false },
      { id: 'b', text: 'Lower down payment requirements (as low as 3.5%) and more flexible credit qualifications', isCorrect: true },
      { id: 'c', text: 'No mortgage insurance is required', isCorrect: false },
      { id: 'd', text: 'Interest rates are fixed by the government at below-market levels', isCorrect: false }
    ],
    explanation: 'FHA loans (insured under HUD through the Mutual Mortgage Insurance Fund) allow down payments as low as 3.5% with a minimum credit score of 580. They do require both upfront and annual mortgage insurance premiums (MIP). Interest rates are set by the lender, not the government.',
    difficulty: 'hard',
    topicTag: 'fha-benefits'
  },
  {
    id: 'ple-q-304',
    chapterId: 'ple-finance-fha',
    quizType: 'chapter_quiz',
    questionText: 'FHA mortgage insurance differs from conventional PMI in that:',
    options: [
      { id: 'a', text: 'FHA charges no insurance at all', isCorrect: false },
      { id: 'b', text: 'FHA requires both an upfront mortgage insurance premium (UFMIP) and an annual premium, and for most loans, MIP continues for the life of the loan', isCorrect: true },
      { id: 'c', text: 'FHA insurance automatically cancels at 80% LTV', isCorrect: false },
      { id: 'd', text: 'FHA insurance is optional for loans under $200,000', isCorrect: false }
    ],
    explanation: 'FHA loans require an upfront mortgage insurance premium (currently 1.75% of the loan) and an annual MIP paid monthly. For loans with less than 10% down, MIP is required for the life of the loan. Conventional PMI, by contrast, can be canceled at 80% LTV.',
    difficulty: 'medium',
    topicTag: 'fha-mip'
  },
  {
    id: 'ple-q-305',
    chapterId: 'ple-finance-va',
    quizType: 'chapter_quiz',
    questionText: 'VA loans guaranteed by the Department of Veterans Affairs offer all of the following EXCEPT:',
    options: [
      { id: 'a', text: 'No down payment required for eligible borrowers', isCorrect: false },
      { id: 'b', text: 'No private mortgage insurance required', isCorrect: false },
      { id: 'c', text: 'Guaranteed approval regardless of credit history', isCorrect: true },
      { id: 'd', text: 'Competitive interest rates', isCorrect: false }
    ],
    explanation: 'VA loans offer zero down payment, no PMI, and competitive rates. However, approval is NOT guaranteed. Borrowers must meet lender credit requirements and VA residual income standards. A VA funding fee is charged (which can be financed), and the lender still underwrites the loan.',
    difficulty: 'easy',
    topicTag: 'va-loan-features'
  },
  {
    id: 'ple-q-306',
    chapterId: 'ple-finance-va',
    quizType: 'chapter_quiz',
    questionText: 'The VA funding fee on a VA loan:',
    options: [
      { id: 'a', text: 'Must be paid in cash at closing and cannot be financed', isCorrect: false },
      { id: 'b', text: 'May be financed into the loan amount and is waived for veterans with service-connected disabilities', isCorrect: true },
      { id: 'c', text: 'Is the same amount for all borrowers regardless of down payment or prior use', isCorrect: false },
      { id: 'd', text: 'Is paid monthly like mortgage insurance', isCorrect: false }
    ],
    explanation: 'The VA funding fee can be financed into the loan. It varies based on the type of service, down payment amount, and whether it is a first-time or subsequent use. The fee is waived for veterans receiving VA disability compensation (38 U.S.C. 3729).',
    difficulty: 'medium',
    topicTag: 'va-funding-fee'
  },
  {
    id: 'ple-q-307',
    chapterId: 'ple-finance-usda',
    quizType: 'chapter_quiz',
    questionText: 'USDA Rural Development loans are designed for:',
    options: [
      { id: 'a', text: 'Any property regardless of location', isCorrect: false },
      { id: 'b', text: 'Properties in eligible rural and suburban areas for borrowers meeting income limits', isCorrect: true },
      { id: 'c', text: 'Only agricultural properties and farms', isCorrect: false },
      { id: 'd', text: 'Commercial properties in rural areas', isCorrect: false }
    ],
    explanation: 'USDA Section 502 Guaranteed Loan Program provides zero-down-payment financing for eligible properties in designated rural and suburban areas. Borrowers must meet household income limits (typically 115% of area median income). The property must be a primary residence.',
    difficulty: 'easy',
    topicTag: 'usda-eligibility'
  },
  {
    id: 'ple-q-308',
    chapterId: 'ple-finance-usda',
    quizType: 'chapter_quiz',
    questionText: 'USDA loans require:',
    options: [
      { id: 'a', text: 'A 10% down payment and no mortgage insurance', isCorrect: false },
      { id: 'b', text: 'No down payment but include an upfront guarantee fee and an annual fee', isCorrect: true },
      { id: 'c', text: 'A 5% down payment with PMI cancellation at 80% LTV', isCorrect: false },
      { id: 'd', text: 'A 20% down payment for all borrowers', isCorrect: false }
    ],
    explanation: 'USDA loans require no down payment. They include an upfront guarantee fee (currently 1.0% of the loan) and an annual fee (currently 0.35% of the outstanding balance) paid monthly, functioning similarly to mortgage insurance.',
    difficulty: 'medium',
    topicTag: 'usda-fees'
  },
  {
    id: 'ple-q-309',
    chapterId: 'ple-finance-vhda',
    quizType: 'chapter_quiz',
    questionText: 'The Virginia Housing Development Authority (VHDA) provides:',
    options: [
      { id: 'a', text: 'Direct government grants that do not need to be repaid', isCorrect: false },
      { id: 'b', text: 'Below-market interest rate mortgage loans and down payment assistance programs for eligible Virginia homebuyers', isCorrect: true },
      { id: 'c', text: 'Emergency rental assistance only', isCorrect: false },
      { id: 'd', text: 'Commercial real estate loans exclusively', isCorrect: false }
    ],
    explanation: 'VHDA is a self-supporting, not-for-profit authority that provides below-market rate mortgage financing, down payment and closing cost assistance grants, and homebuyer education programs for eligible Virginia residents, particularly first-time homebuyers and those with moderate incomes.',
    difficulty: 'easy',
    topicTag: 'vhda-programs'
  },
  {
    id: 'ple-q-310',
    chapterId: 'ple-finance-vhda',
    quizType: 'chapter_quiz',
    questionText: 'VHDA\'s down payment assistance programs typically require the borrower to:',
    options: [
      { id: 'a', text: 'Have a credit score above 800', isCorrect: false },
      { id: 'b', text: 'Complete a homebuyer education course and meet income and purchase price limits', isCorrect: true },
      { id: 'c', text: 'Be a military veteran', isCorrect: false },
      { id: 'd', text: 'Purchase only new construction homes', isCorrect: false }
    ],
    explanation: 'VHDA down payment assistance programs generally require completion of an approved homebuyer education course, meeting household income limits based on area, and purchasing a property within the applicable price limit. The programs are available for various property types, not just new construction.',
    difficulty: 'medium',
    topicTag: 'vhda-dpa'
  },
  {
    id: 'ple-q-311',
    chapterId: 'ple-finance-loan-process',
    quizType: 'chapter_quiz',
    questionText: 'The debt-to-income (DTI) ratio used in mortgage underwriting compares:',
    options: [
      { id: 'a', text: 'Total assets to total liabilities', isCorrect: false },
      { id: 'b', text: 'Monthly debt obligations to gross monthly income', isCorrect: true },
      { id: 'c', text: 'Annual income to the loan amount', isCorrect: false },
      { id: 'd', text: 'Net worth to the property value', isCorrect: false }
    ],
    explanation: 'The DTI ratio compares a borrower\'s total monthly debt payments (including the proposed mortgage payment) to gross monthly income. Conventional loans typically allow a maximum back-end DTI of 43-50%, while FHA may allow up to 57% with compensating factors.',
    difficulty: 'easy',
    topicTag: 'dti-ratio'
  },
  {
    id: 'ple-q-312',
    chapterId: 'ple-finance-loan-process',
    quizType: 'chapter_quiz',
    questionText: 'A borrower\'s "front-end" DTI ratio includes:',
    options: [
      { id: 'a', text: 'All monthly debts including car loans, credit cards, and student loans', isCorrect: false },
      { id: 'b', text: 'Only the proposed housing expense (principal, interest, taxes, insurance, and HOA fees)', isCorrect: true },
      { id: 'c', text: 'Only the mortgage principal and interest', isCorrect: false },
      { id: 'd', text: 'The borrower\'s total net worth', isCorrect: false }
    ],
    explanation: 'The front-end (or "housing") DTI ratio includes only the proposed housing expenses: principal, interest, taxes, and insurance (PITI), plus any HOA/condo fees. The back-end ratio adds all recurring monthly debts. Conventional guidelines typically target a front-end ratio of 28% or less.',
    difficulty: 'medium',
    topicTag: 'front-end-dti'
  },
  {
    id: 'ple-q-313',
    chapterId: 'ple-finance-tila',
    quizType: 'chapter_quiz',
    questionText: 'The Truth in Lending Act (TILA) requires lenders to disclose:',
    options: [
      { id: 'a', text: 'The borrower\'s credit score', isCorrect: false },
      { id: 'b', text: 'The annual percentage rate (APR), finance charges, total of payments, and other credit terms', isCorrect: true },
      { id: 'c', text: 'Only the interest rate of the loan', isCorrect: false },
      { id: 'd', text: 'The appraised value of the property', isCorrect: false }
    ],
    explanation: 'TILA (15 U.S.C. 1601 et seq., Regulation Z) requires lenders to disclose the APR, finance charges, amount financed, total of payments, and payment schedule. The APR reflects the true cost of borrowing including certain fees, making it higher than the note rate.',
    difficulty: 'easy',
    topicTag: 'tila-disclosures'
  },
  {
    id: 'ple-q-314',
    chapterId: 'ple-finance-tila',
    quizType: 'chapter_quiz',
    questionText: 'Under TILA-RESPA Integrated Disclosure (TRID) rules, the Loan Estimate must be provided to the borrower within:',
    options: [
      { id: 'a', text: '24 hours of application', isCorrect: false },
      { id: 'b', text: '3 business days of receiving the loan application', isCorrect: true },
      { id: 'c', text: '7 business days of application', isCorrect: false },
      { id: 'd', text: '10 business days of application', isCorrect: false }
    ],
    explanation: 'Under TRID (the "Know Before You Owe" rule implementing TILA and RESPA), the lender must provide the Loan Estimate within 3 business days of receiving the borrower\'s loan application. The Closing Disclosure must be provided at least 3 business days before closing.',
    difficulty: 'medium',
    topicTag: 'trid-loan-estimate'
  },
  {
    id: 'ple-q-315',
    chapterId: 'ple-finance-tila',
    quizType: 'chapter_quiz',
    questionText: 'Under TRID, the Closing Disclosure must be provided to the borrower at least:',
    options: [
      { id: 'a', text: '1 business day before closing', isCorrect: false },
      { id: 'b', text: '3 business days before closing', isCorrect: true },
      { id: 'c', text: '5 business days before closing', isCorrect: false },
      { id: 'd', text: 'At the closing table', isCorrect: false }
    ],
    explanation: 'Under TRID, the Closing Disclosure must be received by the borrower at least 3 business days before consummation (closing). If there are certain changes to the terms after the initial CD, a revised CD must be provided with a new 3-day waiting period.',
    difficulty: 'medium',
    topicTag: 'trid-closing-disclosure'
  },
  {
    id: 'ple-q-316',
    chapterId: 'ple-finance-ecoa',
    quizType: 'chapter_quiz',
    questionText: 'The Equal Credit Opportunity Act (ECOA) prohibits lenders from discriminating based on:',
    options: [
      { id: 'a', text: 'Credit score and debt-to-income ratio', isCorrect: false },
      { id: 'b', text: 'Race, color, religion, national origin, sex, marital status, age, or receipt of public assistance income', isCorrect: true },
      { id: 'c', text: 'Employment history and income level', isCorrect: false },
      { id: 'd', text: 'Property type and location', isCorrect: false }
    ],
    explanation: 'ECOA (15 U.S.C. 1691, Regulation B) prohibits credit discrimination based on race, color, religion, national origin, sex, marital status, age (provided the applicant has the legal capacity to contract), or because all or part of the applicant\'s income derives from public assistance.',
    difficulty: 'hard',
    topicTag: 'ecoa-protections'
  },
  {
    id: 'ple-q-317',
    chapterId: 'ple-finance-ecoa',
    quizType: 'chapter_quiz',
    questionText: 'Under ECOA, if a loan application is denied, the lender must:',
    options: [
      { id: 'a', text: 'Simply notify the applicant verbally', isCorrect: false },
      { id: 'b', text: 'Provide written notice of the adverse action and the specific reasons for denial or the right to request them within 30 days', isCorrect: true },
      { id: 'c', text: 'Report the denial to HUD', isCorrect: false },
      { id: 'd', text: 'Offer an alternative loan product', isCorrect: false }
    ],
    explanation: 'Under ECOA and Regulation B, when a lender takes adverse action on a credit application, they must provide written notice within 30 days that includes the specific reasons for the adverse action (or the right to request them), the name of the agency that provided the credit report (if applicable), and notice of the applicant\'s rights under ECOA.',
    difficulty: 'medium',
    topicTag: 'ecoa-adverse-action'
  },
  {
    id: 'ple-q-318',
    chapterId: 'ple-finance-land-commercial',
    quizType: 'chapter_quiz',
    questionText: 'A land loan (for raw, undeveloped land) typically differs from a standard residential mortgage in that:',
    options: [
      { id: 'a', text: 'Land loans always have lower interest rates', isCorrect: false },
      { id: 'b', text: 'Land loans typically require higher down payments (20-50%), have shorter terms, and carry higher interest rates', isCorrect: true },
      { id: 'c', text: 'Land loans are guaranteed by the FDIC', isCorrect: false },
      { id: 'd', text: 'Land loans cannot exceed 15 years', isCorrect: false }
    ],
    explanation: 'Raw land loans are considered higher risk by lenders because there is no improvement generating income or providing collateral value. As a result, they typically require larger down payments (20-50%), have shorter amortization periods, and carry higher interest rates than residential mortgages.',
    difficulty: 'medium',
    topicTag: 'land-loans'
  },
  {
    id: 'ple-q-319',
    chapterId: 'ple-finance-land-commercial',
    quizType: 'chapter_quiz',
    questionText: 'A commercial real estate loan is underwritten primarily based on:',
    options: [
      { id: 'a', text: 'The borrower\'s personal credit score alone', isCorrect: false },
      { id: 'b', text: 'The property\'s net operating income (NOI) and debt service coverage ratio (DSCR)', isCorrect: true },
      { id: 'c', text: 'The borrower\'s age and employment history', isCorrect: false },
      { id: 'd', text: 'The property\'s curb appeal', isCorrect: false }
    ],
    explanation: 'Commercial loans focus on the property\'s ability to generate sufficient income to cover the mortgage payment. The debt service coverage ratio (DSCR) compares NOI to the annual debt service. A DSCR of 1.25 or higher is typically required, meaning the property generates 125% of the debt payment.',
    difficulty: 'medium',
    topicTag: 'commercial-underwriting'
  },
  {
    id: 'ple-q-320',
    chapterId: 'ple-finance-loan-process',
    quizType: 'mock_exam',
    questionText: 'A borrower with a $400,000 home, a $320,000 first mortgage, and a $40,000 HELOC has a combined LTV (CLTV) of:',
    options: [
      { id: 'a', text: '80%', isCorrect: false },
      { id: 'b', text: '90%', isCorrect: true },
      { id: 'c', text: '95%', isCorrect: false },
      { id: 'd', text: '100%', isCorrect: false }
    ],
    explanation: 'CLTV = (First Mortgage + Second Mortgage/HELOC) / Property Value = ($320,000 + $40,000) / $400,000 = $360,000 / $400,000 = 90%. CLTV is important because it reflects the total leverage on the property from all liens.',
    difficulty: 'medium',
    topicTag: 'cltv-calculation'
  },
  {
    id: 'ple-q-321',
    chapterId: 'ple-finance-loan-process',
    quizType: 'chapter_quiz',
    questionText: 'An adjustable-rate mortgage (ARM) typically includes all of the following components EXCEPT:',
    options: [
      { id: 'a', text: 'An index (such as SOFR) that the rate is tied to', isCorrect: false },
      { id: 'b', text: 'A margin added to the index', isCorrect: false },
      { id: 'c', text: 'A guaranteed rate decrease each year', isCorrect: true },
      { id: 'd', text: 'Rate caps limiting how much the rate can change per adjustment and over the life of the loan', isCorrect: false }
    ],
    explanation: 'An ARM has an index (e.g., SOFR, replacing LIBOR), a margin (the lender\'s markup), and rate caps (per-adjustment cap, periodic cap, and lifetime cap). The rate can go up or down based on the index movement. There is no guarantee the rate will decrease.',
    difficulty: 'medium',
    topicTag: 'arm-components'
  },
  {
    id: 'ple-q-322',
    chapterId: 'ple-finance-tila',
    quizType: 'mock_exam',
    questionText: 'Under TILA, the right of rescission applies to:',
    options: [
      { id: 'a', text: 'All mortgage loans', isCorrect: false },
      { id: 'b', text: 'Refinance loans and home equity loans on a borrower\'s primary residence, but NOT purchase money mortgages', isCorrect: true },
      { id: 'c', text: 'Only loans over $500,000', isCorrect: false },
      { id: 'd', text: 'Only FHA and VA loans', isCorrect: false }
    ],
    explanation: 'Under TILA (15 U.S.C. 1635), the 3-day right of rescission applies to refinance transactions and home equity loans secured by the borrower\'s principal residence. It does NOT apply to purchase money mortgages (loans to buy the home) or loans on second homes/investment properties.',
    difficulty: 'hard',
    topicTag: 'right-of-rescission'
  },
  {
    id: 'ple-q-323',
    chapterId: 'ple-finance-vhda',
    quizType: 'chapter_quiz',
    questionText: 'VHDA\'s Mortgage Credit Certificate (MCC) program provides eligible homebuyers with:',
    options: [
      { id: 'a', text: 'A direct cash grant for closing costs', isCorrect: false },
      { id: 'b', text: 'A federal income tax credit for a portion of the mortgage interest paid each year', isCorrect: true },
      { id: 'c', text: 'A reduced property tax rate', isCorrect: false },
      { id: 'd', text: 'Free homeowner\'s insurance for the first year', isCorrect: false }
    ],
    explanation: 'The MCC program provides eligible first-time homebuyers with a federal income tax credit equal to a percentage (typically 20%) of the mortgage interest paid annually. This is a dollar-for-dollar tax credit (not a deduction), reducing the borrower\'s federal tax liability for the life of the mortgage.',
    difficulty: 'hard',
    topicTag: 'vhda-mcc'
  },
  {
    id: 'ple-q-324',
    chapterId: 'ple-finance-land-commercial',
    quizType: 'chapter_quiz',
    questionText: 'A construction-to-permanent (C2P) loan:',
    options: [
      { id: 'a', text: 'Requires two separate closings with two sets of closing costs', isCorrect: false },
      { id: 'b', text: 'Combines the construction financing and permanent mortgage into a single loan with one closing', isCorrect: true },
      { id: 'c', text: 'Is only available for commercial properties', isCorrect: false },
      { id: 'd', text: 'Cannot be used with FHA or VA guarantees', isCorrect: false }
    ],
    explanation: 'A construction-to-permanent loan (also called a single-close construction loan) combines both the construction phase and permanent mortgage into one loan with one closing and one set of closing costs. During construction, the borrower typically makes interest-only payments on drawn amounts. FHA and VA offer one-time close construction programs.',
    difficulty: 'medium',
    topicTag: 'construction-loans'
  },
  {
    id: 'ple-q-325',
    chapterId: 'ple-finance-ecoa',
    quizType: 'mock_exam',
    questionText: 'A lender notices that a mortgage applicant receives Social Security disability income. Under ECOA, the lender:',
    options: [
      { id: 'a', text: 'May deny the loan solely because the income source is government assistance', isCorrect: false },
      { id: 'b', text: 'Must count the income the same as employment income if it is stable, regular, and likely to continue', isCorrect: true },
      { id: 'c', text: 'Must require a co-signer before considering disability income', isCorrect: false },
      { id: 'd', text: 'May reduce the qualifying amount by 50% because it is not earned income', isCorrect: false }
    ],
    explanation: 'Under ECOA (Regulation B, 12 CFR 1002.6), a lender may not discount or refuse to consider income because it comes from public assistance. If the Social Security disability income is stable, regular, and likely to continue for at least 3 years, it must be counted like any other qualifying income.',
    difficulty: 'hard',
    topicTag: 'ecoa-income-discrimination'
  },
  {
    id: 'ple-q-326',
    chapterId: 'ple-finance-predatory-lending',
    quizType: 'chapter_quiz',
    questionText: 'Which of the following is the BEST indicator of a predatory lending practice?',
    options: [
      { id: 'a', text: 'A fixed interest rate above the current market average', isCorrect: false },
      { id: 'b', text: 'Loan terms that strip equity through excessive fees, balloon payments, and repeated refinancing with no tangible benefit to the borrower', isCorrect: true },
      { id: 'c', text: 'A requirement for private mortgage insurance', isCorrect: false },
      { id: 'd', text: 'A 30-year loan term instead of a 15-year term', isCorrect: false }
    ],
    explanation: 'Predatory lending is characterized by practices that strip borrower equity, impose unfair terms, or rely on deception. Key indicators include excessive origination fees (typically over 5%), balloon payments the borrower cannot afford, loan flipping (repeated refinancing to generate fees), and terms the borrower clearly cannot sustain. The Dodd-Frank Act\'s Ability-to-Repay (ATR) rule and Qualified Mortgage (QM) standards under 12 CFR 1026.43 were enacted to combat these practices. In Virginia, predatory lending can be reported to the Bureau of Financial Institutions (Va. Code 6.2-300 et seq.).',
    difficulty: 'hard',
    topicTag: 'predatory-lending'
  },
  {
    id: 'ple-q-327',
    chapterId: 'ple-finance-predatory-lending',
    quizType: 'mock_exam',
    questionText: 'A Virginia real estate agent suspects that a lender is engaging in predatory lending practices against their client. The agent should:',
    options: [
      { id: 'a', text: 'Ignore it because lending is outside the agent\'s scope of practice', isCorrect: false },
      { id: 'b', text: 'Advise the client to seek independent legal counsel and report concerns to the Virginia Bureau of Financial Institutions and the CFPB', isCorrect: true },
      { id: 'c', text: 'Contact the lender directly and demand they change the loan terms', isCorrect: false },
      { id: 'd', text: 'Proceed with the transaction since the lender is licensed', isCorrect: false }
    ],
    explanation: 'While real estate agents cannot provide legal advice, they have an obligation to protect their clients\' interests. When predatory lending is suspected, the agent should advise the client to consult an attorney, suggest reporting to the Virginia Bureau of Financial Institutions (Va. Code 6.2-300 et seq.), the Consumer Financial Protection Bureau (CFPB), and the Virginia Attorney General\'s Consumer Protection Division. Under Virginia Standards of Conduct (18 VAC 135-20-300), agents have a duty of reasonable care and diligence that includes alerting clients to potential financial harm.',
    difficulty: 'hard',
    topicTag: 'predatory-lending'
  },
  {
    id: 'ple-q-328',
    chapterId: 'ple-finance-predatory-lending',
    quizType: 'chapter_quiz',
    questionText: 'Under the Dodd-Frank Act\'s Qualified Mortgage (QM) standards, which of the following loan features is prohibited?',
    options: [
      { id: 'a', text: 'A loan term of 30 years', isCorrect: false },
      { id: 'b', text: 'Negative amortization, interest-only payments, balloon payments, or points and fees exceeding 3% of the loan amount', isCorrect: true },
      { id: 'c', text: 'A down payment of less than 20%', isCorrect: false },
      { id: 'd', text: 'An adjustable interest rate with annual caps', isCorrect: false }
    ],
    explanation: 'The Dodd-Frank Act\'s QM standards (12 CFR 1026.43(e)) prohibit several high-risk features in qualified mortgages: negative amortization, interest-only periods, balloon payments (with limited rural exceptions), loan terms exceeding 30 years, and points and fees exceeding 3% of the total loan amount. QM loans also require verification of the borrower\'s ability to repay (ATR) with a maximum back-end DTI of 43% (or compliance with GSE/agency guidelines). Lenders who originate QMs receive a presumption of compliance with ATR requirements.',
    difficulty: 'hard',
    topicTag: 'predatory-lending'
  }
]

// ============================================================
// EXPORTS
// ============================================================

export const PLE_QUESTION_BANK: QuizQuestion[] = [
  ...fairHousingQuestions,
  ...reLawQuestions,
  ...ethicsQuestions,
  ...currentIssuesQuestions,
  ...agencyQuestions,
  ...contractsQuestions,
  ...riskMgmtQuestions,
  ...escrowQuestions,
  ...financeQuestions,
]

const MODULE_MAP: Record<number, string> = {
  1: 'ple-fair-housing-',
  2: 'ple-re-law-',
  3: 'ple-ethics-',
  4: 'ple-current-issues-',
  5: 'ple-agency-',
  6: 'ple-contracts-',
  7: 'ple-risk-mgmt-',
  8: 'ple-escrow-',
  9: 'ple-finance-'
}

export function getPleQuestionsByModule(moduleNumber: number): QuizQuestion[] {
  const prefix = MODULE_MAP[moduleNumber]
  if (!prefix) return []
  return PLE_QUESTION_BANK.filter((q) => q.chapterId.startsWith(prefix))
}

export function getPleQuestionsByChapter(chapterId: string): QuizQuestion[] {
  return PLE_QUESTION_BANK.filter((q) => q.chapterId === chapterId)
}

export function getRandomPleQuestions(count: number, moduleNumber?: number): QuizQuestion[] {
  const pool = moduleNumber
    ? getPleQuestionsByModule(moduleNumber)
    : [...PLE_QUESTION_BANK]
  const shuffled = pool.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
