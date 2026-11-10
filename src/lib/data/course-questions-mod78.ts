import type { QuizQuestion } from './course-questions'

// ── Module 7: Real Property Concepts & Estates ──────────────────────────────

// ── Chapter: bundle-of-rights-property-types (10 questions) ─────────────────

const bundleQuestions: QuizQuestion[] = [
  {
    id: 'q-bundle-001',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is NOT one of the five rights included in the bundle of rights?',
    options: [
      { id: 'a', text: 'Right of possession', isCorrect: false },
      { id: 'b', text: 'Right of taxation', isCorrect: true },
      { id: 'c', text: 'Right of disposition', isCorrect: false },
      { id: 'd', text: 'Right of exclusion', isCorrect: false },
    ],
    explanation:
      'The five rights in the bundle of rights are possession, use, enjoyment, disposition, and exclusion. Taxation is a government power, not an ownership right. The power to tax belongs to the state and local government under PETE (Police power, Eminent domain, Taxation, Escheat).',
    difficulty: 'easy',
    topicTag: 'bundle of rights',
  },
  {
    id: 'q-bundle-002',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A farmer plants a crop of wheat on his land and then sells the property before harvest. Who owns the wheat crop?',
    options: [
      { id: 'a', text: 'The new property owner', isCorrect: false },
      { id: 'b', text: 'The farmer who planted the crop', isCorrect: true },
      { id: 'c', text: 'The state of Virginia', isCorrect: false },
      { id: 'd', text: 'Ownership is split equally between buyer and seller', isCorrect: false },
    ],
    explanation:
      'Crops planted by human effort are called emblements (fructus industriales). Emblements are considered personal property of the person who planted them, even after the land is sold. The farmer retains the right to re-enter the land to harvest the crop.',
    difficulty: 'medium',
    topicTag: 'emblements',
  },
  {
    id: 'q-bundle-003',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A commercial tenant installs a pizza oven that is bolted to the floor. At the end of the lease, the tenant wants to remove the oven. Which term best describes this item?',
    options: [
      { id: 'a', text: 'Fixture', isCorrect: false },
      { id: 'b', text: 'Emblement', isCorrect: false },
      { id: 'c', text: 'Trade fixture', isCorrect: true },
      { id: 'd', text: 'Chattel', isCorrect: false },
    ],
    explanation:
      'A trade fixture is an item installed by a commercial tenant for use in the tenant\'s business. Unlike ordinary fixtures, trade fixtures may be removed by the tenant before the lease expires, provided the tenant repairs any damage caused by the removal. If not removed before the lease ends, trade fixtures become the landlord\'s property.',
    difficulty: 'easy',
    topicTag: 'trade fixtures',
  },
  {
    id: 'q-bundle-004',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'The acronym MARIA is used to determine whether an item is a fixture or personal property. What does the "I" in MARIA stand for?',
    options: [
      { id: 'a', text: 'Insurance', isCorrect: false },
      { id: 'b', text: 'Intention of the party who attached the item', isCorrect: true },
      { id: 'c', text: 'Inheritance rights', isCorrect: false },
      { id: 'd', text: 'Improvements made to the item', isCorrect: false },
    ],
    explanation:
      'MARIA stands for Method of attachment, Adaptability, Relationship of the parties, Intention, and Agreement. Intention of the party who attached the item is often considered the most important factor by courts when determining whether an item is a fixture or personal property.',
    difficulty: 'medium',
    topicTag: 'MARIA test',
  },
  {
    id: 'q-bundle-005',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is classified as real property?',
    options: [
      { id: 'a', text: 'A riding lawnmower stored in the garage', isCorrect: false },
      { id: 'b', text: 'An above-ground hot tub on the patio', isCorrect: false },
      { id: 'c', text: 'A built-in dishwasher connected to plumbing', isCorrect: true },
      { id: 'd', text: 'Window curtains hanging on a rod', isCorrect: false },
    ],
    explanation:
      'A built-in dishwasher is a fixture because it is permanently attached to the property through plumbing connections and is adapted to the space. Using the MARIA test, the method of attachment is permanent, it is adapted to the kitchen, and the intention was for it to stay with the property. Curtains, lawnmowers, and above-ground hot tubs are typically personal property.',
    difficulty: 'easy',
    topicTag: 'fixtures',
  },
  {
    id: 'q-bundle-006',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Personal property is BEST described as:',
    options: [
      { id: 'a', text: 'Anything permanently attached to the land', isCorrect: false },
      { id: 'b', text: 'Items that are movable and not permanently affixed to real property', isCorrect: true },
      { id: 'c', text: 'All property owned by a person', isCorrect: false },
      { id: 'd', text: 'Property that has been inherited', isCorrect: false },
    ],
    explanation:
      'Personal property, also called chattels or personalty, includes items that are movable and not permanently attached to land or structures. Personal property is transferred by a bill of sale, while real property is transferred by a deed. Understanding this distinction is critical for resolving disputes about what conveys with a property sale.',
    difficulty: 'easy',
    topicTag: 'real vs personal property',
  },
  {
    id: 'q-bundle-007',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'A homeowner has a custom-built bookshelf that is bolted into the wall studs. Under the MARIA test, the bolting into wall studs most directly addresses which factor?',
    options: [
      { id: 'a', text: 'Agreement between parties', isCorrect: false },
      { id: 'b', text: 'Relationship of the parties', isCorrect: false },
      { id: 'c', text: 'Method of attachment', isCorrect: true },
      { id: 'd', text: 'Adaptability of the item', isCorrect: false },
    ],
    explanation:
      'Method of attachment is the "M" in MARIA and examines how the item is physically connected to the property. Bolting into wall studs is a permanent method of attachment, which strongly suggests the item is a fixture. The more permanently an item is attached, the more likely it is classified as real property.',
    difficulty: 'medium',
    topicTag: 'MARIA test',
  },
  {
    id: 'q-bundle-008',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'When personal property is attached to real property and becomes part of it, this process is called:',
    options: [
      { id: 'a', text: 'Accession', isCorrect: false },
      { id: 'b', text: 'Annexation', isCorrect: true },
      { id: 'c', text: 'Alienation', isCorrect: false },
      { id: 'd', text: 'Accretion', isCorrect: false },
    ],
    explanation:
      'Annexation is the process by which personal property becomes a fixture (real property) through attachment. Accretion is the gradual addition of land by natural forces like water deposits. Alienation is the transfer of ownership. Accession refers to acquiring additional property through natural increase or improvement.',
    difficulty: 'medium',
    topicTag: 'fixtures',
  },
  {
    id: 'q-bundle-009',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'Trees and shrubs growing naturally on a property are classified as:',
    options: [
      { id: 'a', text: 'Personal property because they can be removed', isCorrect: false },
      { id: 'b', text: 'Emblements because they grow from the land', isCorrect: false },
      { id: 'c', text: 'Real property as part of the land', isCorrect: true },
      { id: 'd', text: 'Trade fixtures because they have commercial value', isCorrect: false },
    ],
    explanation:
      'Naturally growing vegetation (fructus naturales) is classified as real property because it grows from the land without human cultivation. Emblements (fructus industriales) specifically refer to crops planted through human effort. Once naturally growing trees or shrubs are severed from the land (cut down), they become personal property.',
    difficulty: 'medium',
    topicTag: 'real vs personal property',
  },
  {
    id: 'q-bundle-010',
    chapterId: 'bundle-of-rights-property-types',
    quizType: 'chapter_quiz',
    questionText:
      'In the MARIA test, if a tenant installs an item and the lease agreement states "all installations become property of the landlord," which MARIA factor would most likely determine the item is a fixture?',
    options: [
      { id: 'a', text: 'Method of attachment', isCorrect: false },
      { id: 'b', text: 'Adaptability', isCorrect: false },
      { id: 'c', text: 'Relationship of the parties', isCorrect: false },
      { id: 'd', text: 'Agreement between the parties', isCorrect: true },
    ],
    explanation:
      'The "A" in MARIA stands for Agreement. When a written agreement between the parties explicitly states that an item becomes the property of the landlord, that agreement generally controls the outcome regardless of other factors. Courts give significant weight to written agreements between parties when resolving fixture disputes.',
    difficulty: 'hard',
    topicTag: 'MARIA test',
  },
]

// ── Chapter: estates-in-land (10 questions) ─────────────────────────────────

const estatesQuestions: QuizQuestion[] = [
  {
    id: 'q-estates-001',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'Which estate provides the greatest degree of ownership interest in real property?',
    options: [
      { id: 'a', text: 'Life estate', isCorrect: false },
      { id: 'b', text: 'Fee simple defeasible', isCorrect: false },
      { id: 'c', text: 'Fee simple absolute', isCorrect: true },
      { id: 'd', text: 'Estate for years', isCorrect: false },
    ],
    explanation:
      'Fee simple absolute is the highest form of ownership recognized by law. It is of potentially infinite duration, freely inheritable, and carries no conditions or limitations on use beyond government restrictions. It includes the complete bundle of rights and is the default estate most buyers receive.',
    difficulty: 'easy',
    topicTag: 'fee simple absolute',
  },
  {
    id: 'q-estates-002',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A grantor conveys property "to Maria, so long as the property is used for educational purposes." What type of estate does Maria have?',
    options: [
      { id: 'a', text: 'Fee simple absolute', isCorrect: false },
      { id: 'b', text: 'Fee simple determinable', isCorrect: true },
      { id: 'c', text: 'Fee simple subject to condition subsequent', isCorrect: false },
      { id: 'd', text: 'Life estate', isCorrect: false },
    ],
    explanation:
      'The language "so long as" creates a fee simple determinable. This estate automatically terminates if the stated condition is violated. The grantor retains a possibility of reverter, meaning ownership automatically returns to the grantor if the land is no longer used for educational purposes. Key trigger words include "so long as," "while," and "during."',
    difficulty: 'medium',
    topicTag: 'fee simple defeasible',
  },
  {
    id: 'q-estates-003',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A property is conveyed "to John for life, then to Susan." What is Susan\'s interest called?',
    options: [
      { id: 'a', text: 'Reversion', isCorrect: false },
      { id: 'b', text: 'Remainder', isCorrect: true },
      { id: 'c', text: 'Possibility of reverter', isCorrect: false },
      { id: 'd', text: 'Right of re-entry', isCorrect: false },
    ],
    explanation:
      'Susan holds a remainder interest because she is a third party (not the original grantor) who will receive the property upon the natural termination of John\'s life estate. A reversion would exist if the property were to return to the original grantor. A remainder is always held by someone other than the grantor.',
    difficulty: 'medium',
    topicTag: 'remainders',
  },
  {
    id: 'q-estates-004',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A life tenant has all of the following rights EXCEPT:',
    options: [
      { id: 'a', text: 'The right to lease the property', isCorrect: false },
      { id: 'b', text: 'The right to mortgage the property', isCorrect: false },
      { id: 'c', text: 'The right to will the property to heirs', isCorrect: true },
      { id: 'd', text: 'The right to collect rent from the property', isCorrect: false },
    ],
    explanation:
      'A life estate ends upon the death of the measuring life, so the life tenant cannot pass the property through a will. The estate has no inheritable interest because it automatically terminates at death. The life tenant can lease, mortgage, or collect rent during their lifetime, but any such interests also terminate upon the life tenant\'s death.',
    difficulty: 'medium',
    topicTag: 'life estates',
  },
  {
    id: 'q-estates-005',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A grantor deeds property "to Karen, but if alcohol is ever sold on the premises, grantor may re-enter and reclaim the property." This creates a:',
    options: [
      { id: 'a', text: 'Fee simple determinable', isCorrect: false },
      { id: 'b', text: 'Fee simple subject to condition subsequent', isCorrect: true },
      { id: 'c', text: 'Fee simple absolute', isCorrect: false },
      { id: 'd', text: 'Defeasible life estate', isCorrect: false },
    ],
    explanation:
      'The language "but if... grantor may re-enter" creates a fee simple subject to condition subsequent. Unlike a fee simple determinable, which automatically terminates, this estate requires the grantor to take affirmative action (exercise the right of re-entry) to reclaim the property. The estate does not end automatically upon violation of the condition.',
    difficulty: 'hard',
    topicTag: 'fee simple defeasible',
  },
  {
    id: 'q-estates-006',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'If a life estate is measured by the life of someone other than the life tenant, it is called:',
    options: [
      { id: 'a', text: 'A life estate in remainder', isCorrect: false },
      { id: 'b', text: 'A life estate pur autre vie', isCorrect: true },
      { id: 'c', text: 'A contingent life estate', isCorrect: false },
      { id: 'd', text: 'A conventional life estate', isCorrect: false },
    ],
    explanation:
      'A life estate pur autre vie (French for "for another\'s life") is measured by the life of a person other than the life tenant. For example, "to Alice for the life of Bob" gives Alice a life estate that lasts until Bob dies. This type of estate is inheritable during the measuring life\'s lifetime, unlike a standard life estate.',
    difficulty: 'medium',
    topicTag: 'life estates',
  },
  {
    id: 'q-estates-007',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'When a life tenant allows the property to deteriorate in a way that damages the interests of the remainderman, the life tenant has committed:',
    options: [
      { id: 'a', text: 'Laches', isCorrect: false },
      { id: 'b', text: 'Waste', isCorrect: true },
      { id: 'c', text: 'Trespass', isCorrect: false },
      { id: 'd', text: 'Adverse possession', isCorrect: false },
    ],
    explanation:
      'Waste occurs when a life tenant damages or fails to maintain the property in a way that reduces its value for the future interest holder (remainderman or reversioner). A life tenant has a duty to maintain the property, pay property taxes, and pay mortgage interest. The remainderman can sue to prevent or recover damages from waste.',
    difficulty: 'easy',
    topicTag: 'life estates',
  },
  {
    id: 'q-estates-008',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A grantor conveys property "to Daniel for life." When Daniel dies, who receives the property?',
    options: [
      { id: 'a', text: 'Daniel\'s heirs', isCorrect: false },
      { id: 'b', text: 'The state through escheat', isCorrect: false },
      { id: 'c', text: 'The original grantor or the grantor\'s heirs', isCorrect: true },
      { id: 'd', text: 'The local government', isCorrect: false },
    ],
    explanation:
      'When a life estate is created with no named remainderman, the grantor retains a reversionary interest. Upon the death of the life tenant, ownership reverts back to the grantor or, if the grantor has already died, to the grantor\'s heirs. This reversion happens automatically by operation of law.',
    difficulty: 'easy',
    topicTag: 'reversions',
  },
  {
    id: 'q-estates-009',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'The future interest retained by a grantor who creates a fee simple determinable is called a:',
    options: [
      { id: 'a', text: 'Right of re-entry', isCorrect: false },
      { id: 'b', text: 'Remainder', isCorrect: false },
      { id: 'c', text: 'Possibility of reverter', isCorrect: true },
      { id: 'd', text: 'Executory interest', isCorrect: false },
    ],
    explanation:
      'A fee simple determinable gives the grantor a possibility of reverter. If the condition is violated, ownership automatically reverts to the grantor without any action required. By contrast, a fee simple subject to condition subsequent gives the grantor a right of re-entry (also called power of termination), which requires the grantor to take affirmative steps to reclaim the property.',
    difficulty: 'hard',
    topicTag: 'future interests',
  },
  {
    id: 'q-estates-010',
    chapterId: 'estates-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A vested remainder differs from a contingent remainder because a vested remainder:',
    options: [
      { id: 'a', text: 'Is held by an identified person with no conditions precedent', isCorrect: true },
      { id: 'b', text: 'Always reverts to the grantor', isCorrect: false },
      { id: 'c', text: 'Can only be created by will', isCorrect: false },
      { id: 'd', text: 'Terminates upon the death of the life tenant', isCorrect: false },
    ],
    explanation:
      'A vested remainder is held by an ascertained (identified) person and is not subject to any condition precedent other than the natural termination of the preceding estate. A contingent remainder either is held by an unidentified person or requires an uncertain event to occur before the remainder can take effect. Vested remainders are more certain and generally more valuable.',
    difficulty: 'hard',
    topicTag: 'remainders',
  },
]

// ── Chapter: rights-interests-in-land (10 questions) ────────────────────────

const rightsInterestsQuestions: QuizQuestion[] = [
  {
    id: 'q-rights-001',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner whose land borders a river has water rights known as:',
    options: [
      { id: 'a', text: 'Littoral rights', isCorrect: false },
      { id: 'b', text: 'Riparian rights', isCorrect: true },
      { id: 'c', text: 'Prior appropriation rights', isCorrect: false },
      { id: 'd', text: 'Prescriptive rights', isCorrect: false },
    ],
    explanation:
      'Riparian rights belong to landowners whose property borders a flowing body of water such as a river, stream, or creek. Littoral rights apply to property bordering non-flowing bodies of water such as lakes and oceans. Under riparian rights, the owner may make reasonable use of the water as long as it does not harm downstream users.',
    difficulty: 'easy',
    topicTag: 'water rights',
  },
  {
    id: 'q-rights-002',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'Which government power allows a locality to take private property for public use upon payment of just compensation?',
    options: [
      { id: 'a', text: 'Police power', isCorrect: false },
      { id: 'b', text: 'Escheat', isCorrect: false },
      { id: 'c', text: 'Eminent domain', isCorrect: true },
      { id: 'd', text: 'Taxation', isCorrect: false },
    ],
    explanation:
      'Eminent domain is the government\'s power to take private property for public use, provided the owner receives just compensation as required by the Fifth Amendment. This power is exercised through a legal process called condemnation. Police power regulates property use (like zoning), while taxation funds government operations.',
    difficulty: 'easy',
    topicTag: 'PETE government powers',
  },
  {
    id: 'q-rights-003',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'PETE is an acronym for the four government powers that limit property rights. What does the "E" at the end of PETE stand for?',
    options: [
      { id: 'a', text: 'Easement', isCorrect: false },
      { id: 'b', text: 'Encumbrance', isCorrect: false },
      { id: 'c', text: 'Equity', isCorrect: false },
      { id: 'd', text: 'Escheat', isCorrect: true },
    ],
    explanation:
      'PETE stands for Police power, Eminent domain, Taxation, and Escheat. Escheat is the government\'s right to take ownership of property when the owner dies without a will and without any known heirs. The property escheats to the state to prevent land from becoming ownerless.',
    difficulty: 'easy',
    topicTag: 'PETE government powers',
  },
  {
    id: 'q-rights-004',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner sells the mineral rights beneath their land to a mining company. The owner has:',
    options: [
      { id: 'a', text: 'Lost the right to sell the surface property', isCorrect: false },
      { id: 'b', text: 'Severed the subsurface rights from the surface rights', isCorrect: true },
      { id: 'c', text: 'Created an easement for the mining company', isCorrect: false },
      { id: 'd', text: 'Violated the bundle of rights', isCorrect: false },
    ],
    explanation:
      'Property ownership includes surface rights, subsurface (mineral) rights, and air rights. These can be separately owned and transferred. Selling mineral rights severs the subsurface estate from the surface estate, creating two separate ownership interests in the same parcel. The surface owner retains all other rights.',
    difficulty: 'medium',
    topicTag: 'mineral rights',
  },
  {
    id: 'q-rights-005',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner whose land borders the Atlantic Ocean in Virginia Beach has what type of water rights?',
    options: [
      { id: 'a', text: 'Riparian rights', isCorrect: false },
      { id: 'b', text: 'Littoral rights', isCorrect: true },
      { id: 'c', text: 'Appropriative rights', isCorrect: false },
      { id: 'd', text: 'Navigable rights', isCorrect: false },
    ],
    explanation:
      'Littoral rights apply to properties bordering large, non-flowing bodies of water such as oceans, seas, and large lakes. The owner\'s property line typically extends to the mean high water mark. Riparian rights apply to flowing water such as rivers and streams. Virginia follows common law water rights doctrines.',
    difficulty: 'medium',
    topicTag: 'water rights',
  },
  {
    id: 'q-rights-006',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, the homestead exemption protects:',
    options: [
      { id: 'a', text: 'A property owner from all creditor claims', isCorrect: false },
      { id: 'b', text: 'A certain amount of equity in the home from unsecured creditors', isCorrect: true },
      { id: 'c', text: 'The property from government condemnation', isCorrect: false },
      { id: 'd', text: 'The property from property tax liens', isCorrect: false },
    ],
    explanation:
      'Virginia\'s homestead exemption protects a specified amount of equity in a homeowner\'s primary residence from seizure by unsecured creditors in bankruptcy or judgment enforcement. It does not protect against mortgage lenders, tax liens, or mechanic\'s liens. The exemption amount is set by Virginia statute and applies to the householder\'s residence.',
    difficulty: 'medium',
    topicTag: 'homestead exemption',
  },
  {
    id: 'q-rights-007',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner\'s air rights are limited by:',
    options: [
      { id: 'a', text: 'Navigable airspace regulations and local zoning height restrictions', isCorrect: true },
      { id: 'b', text: 'Only local zoning ordinances', isCorrect: false },
      { id: 'c', text: 'Only federal aviation regulations', isCorrect: false },
      { id: 'd', text: 'The property owner\'s deed restrictions only', isCorrect: false },
    ],
    explanation:
      'Air rights extend upward from the surface but are limited by both federal regulations (FAA navigable airspace) and local zoning restrictions (building height limits). The historic common law doctrine of "from the center of the earth to the heavens" has been modified so that property owners do not own the navigable airspace used by aircraft.',
    difficulty: 'medium',
    topicTag: 'air rights',
  },
  {
    id: 'q-rights-008',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is an example of police power?',
    options: [
      { id: 'a', text: 'A county collects property taxes', isCorrect: false },
      { id: 'b', text: 'The state takes land to build a highway', isCorrect: false },
      { id: 'c', text: 'A city enacts a zoning ordinance restricting land use', isCorrect: true },
      { id: 'd', text: 'Property of a deceased person with no heirs goes to the state', isCorrect: false },
    ],
    explanation:
      'Police power is the government\'s authority to enact laws and regulations to protect public health, safety, morals, and general welfare. Zoning ordinances, building codes, and environmental regulations are all exercises of police power. Unlike eminent domain, police power does not require compensation to the property owner.',
    difficulty: 'easy',
    topicTag: 'PETE government powers',
  },
  {
    id: 'q-rights-009',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'When the gradual deposit of soil by water action increases the size of a riparian owner\'s land, this is called:',
    options: [
      { id: 'a', text: 'Avulsion', isCorrect: false },
      { id: 'b', text: 'Erosion', isCorrect: false },
      { id: 'c', text: 'Accretion', isCorrect: true },
      { id: 'd', text: 'Reliction', isCorrect: false },
    ],
    explanation:
      'Accretion is the gradual and imperceptible addition of soil to a property by natural water deposits (alluvion). The new land belongs to the riparian owner. Avulsion is a sudden and violent change in a watercourse. Erosion is the gradual wearing away of land. Reliction occurs when water permanently recedes, exposing new land.',
    difficulty: 'hard',
    topicTag: 'water rights',
  },
  {
    id: 'q-rights-010',
    chapterId: 'rights-interests-in-land',
    quizType: 'chapter_quiz',
    questionText:
      'A developer purchases a 20-story air rights lease above a railroad station. The developer is exercising the right to:',
    options: [
      { id: 'a', text: 'Build in the navigable airspace without restriction', isCorrect: false },
      { id: 'b', text: 'Use the vertical space above an existing structure under a separate ownership interest', isCorrect: true },
      { id: 'c', text: 'Prevent airplanes from flying over the railroad', isCorrect: false },
      { id: 'd', text: 'Take the railroad property through eminent domain', isCorrect: false },
    ],
    explanation:
      'Air rights can be leased or sold separately from surface rights, allowing development above existing structures. This is common in dense urban areas where development above railroads, highways, and existing buildings maximizes land use. The air rights holder must still comply with FAA regulations and local zoning height limits.',
    difficulty: 'hard',
    topicTag: 'air rights',
  },
]

// ── Chapter: common-interest-communities (10 questions) ─────────────────────

const commonInterestQuestions: QuizQuestion[] = [
  {
    id: 'q-cic-001',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Virginia Condominium Act, a condominium is created by recording a:',
    options: [
      { id: 'a', text: 'Deed of trust', isCorrect: false },
      { id: 'b', text: 'Declaration', isCorrect: true },
      { id: 'c', text: 'Plat map', isCorrect: false },
      { id: 'd', text: 'Certificate of occupancy', isCorrect: false },
    ],
    explanation:
      'Under the Virginia Condominium Act, a condominium is legally created when the developer records a declaration (also called a master deed or declaration of condominium) in the land records of the jurisdiction where the property is located. The declaration defines the units, common elements, and the rights and obligations of unit owners.',
    difficulty: 'medium',
    topicTag: 'Virginia Condominium Act',
  },
  {
    id: 'q-cic-002',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'In a condominium, the hallways, elevators, and swimming pool are classified as:',
    options: [
      { id: 'a', text: 'Limited common elements', isCorrect: false },
      { id: 'b', text: 'Common elements', isCorrect: true },
      { id: 'c', text: 'Individual units', isCorrect: false },
      { id: 'd', text: 'Reserved areas', isCorrect: false },
    ],
    explanation:
      'Common elements are portions of the condominium that are owned collectively by all unit owners and available for use by all residents. Hallways, lobbies, elevators, and recreational facilities like pools are common elements. Limited common elements, by contrast, are reserved for use by specific unit owners, such as an assigned parking space or a balcony accessible only from one unit.',
    difficulty: 'easy',
    topicTag: 'Virginia Condominium Act',
  },
  {
    id: 'q-cic-003',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'The Virginia Property Owners\' Association Act (POAA) requires which of the following when a property within a POA is being sold?',
    options: [
      { id: 'a', text: 'The seller must obtain a home inspection', isCorrect: false },
      { id: 'b', text: 'The association must provide a resale disclosure packet', isCorrect: true },
      { id: 'c', text: 'The buyer must be approved by the board of directors', isCorrect: false },
      { id: 'd', text: 'The association must appraise the property', isCorrect: false },
    ],
    explanation:
      'Under the Virginia POAA, the seller must request and the association must provide a resale disclosure packet (also called a resale certificate) to the buyer. This packet contains information about assessments, fees, budgets, reserves, rules, and any pending special assessments. The buyer has the right to cancel the contract within a specified period after receiving the packet.',
    difficulty: 'medium',
    topicTag: 'Virginia POAA',
  },
  {
    id: 'q-cic-004',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'A key difference between a condominium and a cooperative is that in a cooperative:',
    options: [
      { id: 'a', text: 'Each owner holds fee simple title to their unit', isCorrect: false },
      { id: 'b', text: 'Owners hold shares of stock in a corporation plus a proprietary lease', isCorrect: true },
      { id: 'c', text: 'There are no common areas', isCorrect: false },
      { id: 'd', text: 'Owners cannot be assessed monthly fees', isCorrect: false },
    ],
    explanation:
      'In a cooperative, a corporation owns the entire building. Individual residents do not hold title to their units. Instead, they purchase shares of stock in the corporation and receive a proprietary lease granting the right to occupy a specific unit. In a condominium, each owner holds fee simple title to their individual unit plus an undivided interest in common elements.',
    difficulty: 'medium',
    topicTag: 'cooperative ownership',
  },
  {
    id: 'q-cic-005',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, a time-share is best described as:',
    options: [
      { id: 'a', text: 'Fee simple ownership of a vacation property', isCorrect: false },
      { id: 'b', text: 'A right to use or occupy a property for a recurring period of time', isCorrect: true },
      { id: 'c', text: 'A leasehold estate lasting exactly one year', isCorrect: false },
      { id: 'd', text: 'A cooperative ownership interest in a resort', isCorrect: false },
    ],
    explanation:
      'Virginia\'s Real Estate Time-Share Act defines a time-share as an interest granting the right to use or occupy a property for a specific recurring period (such as one week per year). Time-shares can be structured as deeded interests (actual ownership) or right-to-use interests (contractual right without ownership). Virginia provides a rescission period for time-share purchasers.',
    difficulty: 'easy',
    topicTag: 'time-shares',
  },
  {
    id: 'q-cic-006',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Virginia Condominium Act, a buyer of a new condominium unit has the right to cancel the purchase contract within:',
    options: [
      { id: 'a', text: '3 calendar days', isCorrect: false },
      { id: 'b', text: '5 calendar days', isCorrect: false },
      { id: 'c', text: '10 calendar days', isCorrect: true },
      { id: 'd', text: '30 calendar days', isCorrect: false },
    ],
    explanation:
      'The Virginia Condominium Act provides buyers of new condominium units a 10-calendar-day right of rescission (cancellation period) after receiving the public offering statement from the developer. This cooling-off period allows buyers to review the condominium documents and reconsider their purchase. The deposit must be returned if the buyer cancels within this period.',
    difficulty: 'hard',
    topicTag: 'Virginia Condominium Act',
  },
  {
    id: 'q-cic-007',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'A parking space assigned exclusively to Unit 203 in a condominium building is an example of a:',
    options: [
      { id: 'a', text: 'Common element', isCorrect: false },
      { id: 'b', text: 'Limited common element', isCorrect: true },
      { id: 'c', text: 'Private element', isCorrect: false },
      { id: 'd', text: 'Restricted element', isCorrect: false },
    ],
    explanation:
      'A limited common element is a portion of the common elements designated for the exclusive use of one or more but fewer than all unit owners. Assigned parking spaces, storage lockers, and balconies accessible from a single unit are typical examples. The limited common element is still owned collectively but reserved for specific owners\' use.',
    difficulty: 'medium',
    topicTag: 'Virginia Condominium Act',
  },
  {
    id: 'q-cic-008',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'In a cooperative, if one owner defaults on their share of the building\'s mortgage, the consequence is:',
    options: [
      { id: 'a', text: 'Only the defaulting owner is affected', isCorrect: false },
      { id: 'b', text: 'The entire building may be at risk of foreclosure, affecting all owners', isCorrect: true },
      { id: 'c', text: 'The cooperative corporation automatically dissolves', isCorrect: false },
      { id: 'd', text: 'The government steps in to cover the defaulted payments', isCorrect: false },
    ],
    explanation:
      'Because the cooperative corporation holds a single mortgage on the entire building, a default by one shareholder can put the entire property at risk. Other shareholders may need to cover the defaulting owner\'s share to prevent foreclosure on the building. This shared financial risk is a significant disadvantage of cooperative ownership compared to condominiums, where each unit has its own separate mortgage.',
    difficulty: 'hard',
    topicTag: 'cooperative ownership',
  },
  {
    id: 'q-cic-009',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Under the Virginia POAA, after receiving the resale disclosure packet, the buyer has the right to cancel the contract within:',
    options: [
      { id: 'a', text: '3 days after ratification of the contract', isCorrect: true },
      { id: 'b', text: '10 days after ratification of the contract', isCorrect: false },
      { id: 'c', text: '30 days after ratification of the contract', isCorrect: false },
      { id: 'd', text: '5 business days after receiving the packet', isCorrect: false },
    ],
    explanation:
      'Under the Virginia POAA, the buyer has a 3-day right of rescission after ratification of the contract or receipt of the disclosure packet, whichever is later. If the disclosure packet is not delivered, the buyer\'s right to cancel extends until the packet is received and the 3-day period runs. This protects buyers from unknown association obligations.',
    difficulty: 'hard',
    topicTag: 'Virginia POAA',
  },
  {
    id: 'q-cic-010',
    chapterId: 'common-interest-ownership',
    quizType: 'chapter_quiz',
    questionText:
      'Which document governs the day-to-day operations and rules of a condominium association?',
    options: [
      { id: 'a', text: 'The declaration', isCorrect: false },
      { id: 'b', text: 'The bylaws', isCorrect: true },
      { id: 'c', text: 'The plat map', isCorrect: false },
      { id: 'd', text: 'The deed of trust', isCorrect: false },
    ],
    explanation:
      'The bylaws govern the internal operations of the condominium unit owners\' association, including board elections, meeting procedures, voting rights, and assessment collection. The declaration creates the condominium and defines units and common elements, while the bylaws address governance and management. Both are essential documents, but the bylaws handle day-to-day operational matters.',
    difficulty: 'easy',
    topicTag: 'Virginia Condominium Act',
  },
]

// ── Module 8: Liens, Encumbrances & Title ───────────────────────────────────

// ── Chapter: liens (10 questions) ───────────────────────────────────────────

const liensQuestions: QuizQuestion[] = [
  {
    id: 'q-liens-001',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'A mortgage is an example of which type of lien?',
    options: [
      { id: 'a', text: 'Involuntary and general', isCorrect: false },
      { id: 'b', text: 'Voluntary and specific', isCorrect: true },
      { id: 'c', text: 'Involuntary and specific', isCorrect: false },
      { id: 'd', text: 'Voluntary and general', isCorrect: false },
    ],
    explanation:
      'A mortgage is voluntary because the borrower willingly pledges the property as security for the loan. It is specific because it attaches only to the particular property described in the mortgage document. By contrast, a judgment lien is involuntary and general because it is imposed without the debtor\'s consent and attaches to all of the debtor\'s real property in the jurisdiction.',
    difficulty: 'easy',
    topicTag: 'voluntary vs involuntary liens',
  },
  {
    id: 'q-liens-002',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, which lien ALWAYS takes priority over all other liens regardless of recording date?',
    options: [
      { id: 'a', text: 'First mortgage lien', isCorrect: false },
      { id: 'b', text: 'Mechanic\'s lien', isCorrect: false },
      { id: 'c', text: 'Real property tax lien', isCorrect: true },
      { id: 'd', text: 'Judgment lien', isCorrect: false },
    ],
    explanation:
      'Real property tax liens have superior priority over all other liens in Virginia, regardless of when other liens were recorded. This means that if a property is sold at a tax sale, all other lien holders (including mortgage lenders) may lose their security interest. Tax liens are paramount because they fund essential government services.',
    difficulty: 'easy',
    topicTag: 'lien priority',
  },
  {
    id: 'q-liens-003',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia Code sections 43-1 through 43-23, a mechanic\'s lien must be filed within what period after the last day of work or delivery of materials?',
    options: [
      { id: 'a', text: '30 days', isCorrect: false },
      { id: 'b', text: '60 days', isCorrect: false },
      { id: 'c', text: '90 days', isCorrect: true },
      { id: 'd', text: '120 days', isCorrect: false },
    ],
    explanation:
      'Under Virginia\'s mechanic\'s lien statutes (Virginia Code sections 43-1 through 43-23), a general contractor or subcontractor must file a memorandum of mechanic\'s lien in the clerk\'s office within 90 days after the last day of work performed or materials furnished. Failure to file within this period results in the loss of lien rights.',
    difficulty: 'medium',
    topicTag: 'Virginia mechanic\'s liens',
  },
  {
    id: 'q-liens-004',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'A lien that attaches to all property owned by the debtor in a particular jurisdiction is called a:',
    options: [
      { id: 'a', text: 'Specific lien', isCorrect: false },
      { id: 'b', text: 'Voluntary lien', isCorrect: false },
      { id: 'c', text: 'General lien', isCorrect: true },
      { id: 'd', text: 'Equitable lien', isCorrect: false },
    ],
    explanation:
      'A general lien attaches to all real and personal property owned by the debtor within a jurisdiction. Judgment liens and federal tax liens are common examples of general liens. A specific lien, by contrast, attaches only to one particular property. Mortgages and property tax liens are specific liens because they affect only the identified property.',
    difficulty: 'easy',
    topicTag: 'specific vs general',
  },
  {
    id: 'q-liens-005',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'A property has three liens recorded in this order: (1) a mortgage recorded January 2023, (2) a mechanic\'s lien filed March 2023, and (3) a second mortgage recorded June 2023. Delinquent property taxes are also owed. In what order are these liens paid at foreclosure?',
    options: [
      { id: 'a', text: 'First mortgage, mechanic\'s lien, second mortgage, property taxes', isCorrect: false },
      { id: 'b', text: 'Property taxes, first mortgage, mechanic\'s lien, second mortgage', isCorrect: true },
      { id: 'c', text: 'Mechanic\'s lien, property taxes, first mortgage, second mortgage', isCorrect: false },
      { id: 'd', text: 'Property taxes, mechanic\'s lien, first mortgage, second mortgage', isCorrect: false },
    ],
    explanation:
      'Property tax liens always have first priority. After taxes, the remaining liens are generally paid in chronological order of recording: the first mortgage (January 2023), then the mechanic\'s lien (March 2023), then the second mortgage (June 2023). Note that Virginia mechanic\'s liens may have special priority rules that relate back to the commencement of work, but in a straightforward recording-date analysis, this order applies.',
    difficulty: 'hard',
    topicTag: 'lien priority',
  },
  {
    id: 'q-liens-006',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'A judgment lien in Virginia is BEST described as:',
    options: [
      { id: 'a', text: 'Voluntary and specific', isCorrect: false },
      { id: 'b', text: 'Involuntary and specific', isCorrect: false },
      { id: 'c', text: 'Voluntary and general', isCorrect: false },
      { id: 'd', text: 'Involuntary and general', isCorrect: true },
    ],
    explanation:
      'A judgment lien is involuntary because it is placed on the debtor\'s property by court order, not by the debtor\'s choice. It is general because it attaches to all real property owned by the debtor in any Virginia jurisdiction where the judgment is docketed. To create a lien, the creditor must docket the judgment in the clerk\'s office of the circuit court.',
    difficulty: 'medium',
    topicTag: 'judgment liens',
  },
  {
    id: 'q-liens-007',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'Under Virginia law, after a mechanic\'s lien is filed, the claimant must initiate a lawsuit to enforce the lien within:',
    options: [
      { id: 'a', text: '30 days of filing', isCorrect: false },
      { id: 'b', text: '6 months from the date of filing', isCorrect: true },
      { id: 'c', text: '1 year from the date of filing', isCorrect: false },
      { id: 'd', text: '2 years from the date of filing', isCorrect: false },
    ],
    explanation:
      'Under Virginia Code, a mechanic\'s lien claimant must file suit to enforce the lien within 6 months from the date the memorandum of lien was recorded. If the claimant fails to initiate a lawsuit within this period, the lien expires and is no longer enforceable. This strict deadline protects property owners from indefinite encumbrances.',
    difficulty: 'hard',
    topicTag: 'Virginia mechanic\'s liens',
  },
  {
    id: 'q-liens-008',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is an example of an involuntary, specific lien?',
    options: [
      { id: 'a', text: 'Mortgage', isCorrect: false },
      { id: 'b', text: 'Federal income tax lien', isCorrect: false },
      { id: 'c', text: 'Property tax lien', isCorrect: true },
      { id: 'd', text: 'Judgment lien', isCorrect: false },
    ],
    explanation:
      'A property tax lien is involuntary because it is imposed by the government without the owner\'s consent, and it is specific because it attaches only to the particular property on which taxes are owed. A mortgage is voluntary and specific. Federal income tax liens and judgment liens are involuntary and general (they attach to all property owned by the debtor).',
    difficulty: 'medium',
    topicTag: 'voluntary vs involuntary liens',
  },
  {
    id: 'q-liens-009',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'An HOA assessment lien in Virginia is:',
    options: [
      { id: 'a', text: 'Always subordinate to all mortgages regardless of recording date', isCorrect: false },
      { id: 'b', text: 'Superior to all other liens including property taxes', isCorrect: false },
      { id: 'c', text: 'An involuntary, specific lien that may have priority for a limited amount of unpaid assessments', isCorrect: true },
      { id: 'd', text: 'A voluntary lien because the owner chose to buy in the community', isCorrect: false },
    ],
    explanation:
      'In Virginia, an HOA or condominium assessment lien is involuntary and specific. Under the Virginia Condominium Act and POAA, the association\'s lien for unpaid assessments may have a limited super-priority over first mortgages for a specified number of months of assessments. However, it never exceeds the priority of property tax liens.',
    difficulty: 'hard',
    topicTag: 'tax liens',
  },
  {
    id: 'q-liens-010',
    chapterId: 'liens',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following correctly describes the general rule of lien priority?',
    options: [
      { id: 'a', text: 'The largest lien is paid first', isCorrect: false },
      { id: 'b', text: 'Voluntary liens always take priority over involuntary liens', isCorrect: false },
      { id: 'c', text: 'First in time, first in right, with property tax liens taking superior priority', isCorrect: true },
      { id: 'd', text: 'The most recent lien is paid first', isCorrect: false },
    ],
    explanation:
      'The general rule of lien priority is "first in time, first in right," meaning the lien recorded earliest has the highest priority. The major exception is property tax liens, which always have superior priority regardless of when they were recorded. This rule determines the order in which creditors are paid from the proceeds of a foreclosure sale.',
    difficulty: 'medium',
    topicTag: 'lien priority',
  },
]

// ── Chapter: encumbrances (10 questions) ────────────────────────────────────

const encumbrancesQuestions: QuizQuestion[] = [
  {
    id: 'q-encumb-001',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'An easement appurtenant differs from an easement in gross because an easement appurtenant:',
    options: [
      { id: 'a', text: 'Benefits a specific parcel of land and runs with the land', isCorrect: true },
      { id: 'b', text: 'Benefits a person or company regardless of land ownership', isCorrect: false },
      { id: 'c', text: 'Can only be created by a court order', isCorrect: false },
      { id: 'd', text: 'Terminates upon the death of the property owner', isCorrect: false },
    ],
    explanation:
      'An easement appurtenant benefits a particular parcel of land (the dominant tenement) and burdens an adjacent parcel (the servient tenement). It runs with the land, meaning it transfers automatically with ownership. An easement in gross benefits a person or entity (like a utility company) rather than a parcel of land and does not require a dominant tenement.',
    difficulty: 'medium',
    topicTag: 'easements appurtenant vs in gross',
  },
  {
    id: 'q-encumb-002',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'A property owner\'s fence extends two feet onto the neighbor\'s lot. This is an example of:',
    options: [
      { id: 'a', text: 'An easement by prescription', isCorrect: false },
      { id: 'b', text: 'An encroachment', isCorrect: true },
      { id: 'c', text: 'A license', isCorrect: false },
      { id: 'd', text: 'A restrictive covenant', isCorrect: false },
    ],
    explanation:
      'An encroachment occurs when a structure, improvement, or other physical object illegally extends beyond the boundaries of the property it is built on and onto a neighbor\'s land. Common examples include fences, driveways, and roof overhangs. An encroachment is typically discovered through a survey and may be resolved through negotiation, an easement agreement, or legal action.',
    difficulty: 'easy',
    topicTag: 'encroachments',
  },
  {
    id: 'q-encumb-003',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'A landlocked property with no road access may acquire an easement through which legal doctrine?',
    options: [
      { id: 'a', text: 'Easement by prescription', isCorrect: false },
      { id: 'b', text: 'Easement by necessity', isCorrect: true },
      { id: 'c', text: 'Easement by license', isCorrect: false },
      { id: 'd', text: 'Easement by estoppel', isCorrect: false },
    ],
    explanation:
      'An easement by necessity is created when a parcel of land is landlocked and has no other access to a public road. Courts will grant an easement across the surrounding property to prevent the landlocked parcel from being unusable. This type of easement typically arises when a larger parcel is subdivided and one resulting parcel has no road frontage.',
    difficulty: 'easy',
    topicTag: 'easements by necessity',
  },
  {
    id: 'q-encumb-004',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is a key requirement for establishing an easement by prescription in Virginia?',
    options: [
      { id: 'a', text: 'Written permission from the property owner', isCorrect: false },
      { id: 'b', text: 'Continuous, open, notorious, hostile, and adverse use for the statutory period', isCorrect: true },
      { id: 'c', text: 'Payment of fair market value to the servient owner', isCorrect: false },
      { id: 'd', text: 'Recording the easement in the land records', isCorrect: false },
    ],
    explanation:
      'An easement by prescription is acquired through continuous, open, notorious, hostile, and adverse use of another\'s property for Virginia\'s statutory period. The use must be without the owner\'s permission (hostile/adverse) and visible enough that a reasonable owner would be aware of it. It is similar to adverse possession but grants use rights rather than ownership.',
    difficulty: 'medium',
    topicTag: 'easements by prescription',
  },
  {
    id: 'q-encumb-005',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'A homeowner gives a neighbor verbal permission to park in their driveway during a home renovation. This permission is best described as:',
    options: [
      { id: 'a', text: 'An easement appurtenant', isCorrect: false },
      { id: 'b', text: 'A profit', isCorrect: false },
      { id: 'c', text: 'A license', isCorrect: true },
      { id: 'd', text: 'An encroachment', isCorrect: false },
    ],
    explanation:
      'A license is a personal, revocable, non-assignable privilege to use another person\'s land for a specific purpose. Unlike an easement, a license does not create an interest in the land and can be revoked at any time by the property owner. Verbal permission to use a driveway is a classic example of a license.',
    difficulty: 'easy',
    topicTag: 'licenses',
  },
  {
    id: 'q-encumb-006',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'The right to enter another person\'s land and remove natural resources such as timber, minerals, or soil is called:',
    options: [
      { id: 'a', text: 'A license', isCorrect: false },
      { id: 'b', text: 'An easement in gross', isCorrect: false },
      { id: 'c', text: 'A profit (profit a prendre)', isCorrect: true },
      { id: 'd', text: 'An encroachment', isCorrect: false },
    ],
    explanation:
      'A profit (or profit a prendre) grants the holder the right to enter another person\'s land and remove part of the soil, natural resources, or products of the land, such as timber, minerals, oil, or gravel. A profit includes an implied easement to enter the land for the purpose of removing the resources. It is a more extensive right than a simple easement.',
    difficulty: 'medium',
    topicTag: 'profits',
  },
  {
    id: 'q-encumb-007',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'A developer records deed restrictions requiring all homes in a subdivision to have a minimum of 2,000 square feet. These restrictions are known as:',
    options: [
      { id: 'a', text: 'Zoning ordinances', isCorrect: false },
      { id: 'b', text: 'Restrictive covenants (CC&Rs)', isCorrect: true },
      { id: 'c', text: 'Variances', isCorrect: false },
      { id: 'd', text: 'Building code requirements', isCorrect: false },
    ],
    explanation:
      'Restrictive covenants, also known as covenants, conditions, and restrictions (CC&Rs), are private limitations placed on the use of property by a developer or grantor. They run with the land and bind future owners. Unlike zoning, which is a government regulation, restrictive covenants are private agreements. When zoning and covenants conflict, the more restrictive rule applies.',
    difficulty: 'easy',
    topicTag: 'restrictive covenants',
  },
  {
    id: 'q-encumb-008',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'An easement by implication is most likely to be created when:',
    options: [
      { id: 'a', text: 'A property owner grants written permission to a neighbor', isCorrect: false },
      { id: 'b', text: 'A property is divided and the prior use of one parcel was apparent, continuous, and reasonably necessary', isCorrect: true },
      { id: 'c', text: 'A court orders access to a landlocked property', isCorrect: false },
      { id: 'd', text: 'A utility company needs to run power lines across private property', isCorrect: false },
    ],
    explanation:
      'An easement by implication arises when a single property is divided and one part was previously used in a way that was apparent, continuous, and reasonably necessary to the enjoyment of the other part. For example, if a shared driveway existed before the land was subdivided, an implied easement may be recognized for the parcel that loses direct road access.',
    difficulty: 'hard',
    topicTag: 'easements by implication',
  },
  {
    id: 'q-encumb-009',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'In an easement appurtenant, the property that is burdened by the easement is called the:',
    options: [
      { id: 'a', text: 'Dominant tenement', isCorrect: false },
      { id: 'b', text: 'Servient tenement', isCorrect: true },
      { id: 'c', text: 'Adjacent tenement', isCorrect: false },
      { id: 'd', text: 'Prescriptive tenement', isCorrect: false },
    ],
    explanation:
      'In an easement appurtenant, the servient tenement is the property that is burdened by the easement. The dominant tenement is the property that benefits from the easement. For example, if Property A has a right of way across Property B, then Property A is the dominant tenement (benefited) and Property B is the servient tenement (burdened).',
    difficulty: 'medium',
    topicTag: 'easements appurtenant vs in gross',
  },
  {
    id: 'q-encumb-010',
    chapterId: 'encumbrances',
    quizType: 'chapter_quiz',
    questionText:
      'A restrictive covenant that discriminates based on race, color, religion, or national origin is:',
    options: [
      { id: 'a', text: 'Enforceable if recorded before 1968', isCorrect: false },
      { id: 'b', text: 'Enforceable only in certain states', isCorrect: false },
      { id: 'c', text: 'Void and unenforceable under federal fair housing law', isCorrect: true },
      { id: 'd', text: 'Valid but may be waived by the homeowners association', isCorrect: false },
    ],
    explanation:
      'The Fair Housing Act of 1968 and the Supreme Court\'s decision in Shelley v. Kraemer (1948) made racially discriminatory restrictive covenants void and unenforceable. Even if such covenants still appear in old deeds, they have no legal effect and cannot be enforced by any court. Real estate professionals must be aware that these historic covenants are legally meaningless.',
    difficulty: 'medium',
    topicTag: 'restrictive covenants',
  },
]

// ── Chapter: title-recording (10 questions) ─────────────────────────────────

const titleRecordingQuestions: QuizQuestion[] = [
  {
    id: 'q-title-001',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'Virginia follows which type of recording statute?',
    options: [
      { id: 'a', text: 'Race statute', isCorrect: false },
      { id: 'b', text: 'Notice statute', isCorrect: false },
      { id: 'c', text: 'Race-notice statute', isCorrect: true },
      { id: 'd', text: 'First-in-time statute', isCorrect: false },
    ],
    explanation:
      'Virginia is a race-notice state. To be protected under this statute, a subsequent purchaser must (1) be a bona fide purchaser for value, (2) have no actual or constructive notice of a prior unrecorded conveyance, and (3) record their deed before the prior unrecorded conveyance is recorded. Both elements (no notice and first to record) must be met.',
    difficulty: 'medium',
    topicTag: 'Virginia race-notice',
  },
  {
    id: 'q-title-002',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'Constructive notice is BEST defined as:',
    options: [
      { id: 'a', text: 'Notice given by physically inspecting the property', isCorrect: false },
      { id: 'b', text: 'Knowledge imputed by law because information is available in public records', isCorrect: true },
      { id: 'c', text: 'A verbal warning from a neighbor about a property defect', isCorrect: false },
      { id: 'd', text: 'Notice published in a local newspaper', isCorrect: false },
    ],
    explanation:
      'Constructive notice means that a person is legally presumed to know something because the information is available in the public records (such as recorded deeds, liens, and easements in the circuit court clerk\'s office). Even if a buyer never actually searches the records, they are still charged with knowledge of anything that is properly recorded.',
    difficulty: 'easy',
    topicTag: 'constructive vs actual notice',
  },
  {
    id: 'q-title-003',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'A chain of title is BEST described as:',
    options: [
      { id: 'a', text: 'The physical chain used to mark property boundaries', isCorrect: false },
      { id: 'b', text: 'The recorded history of all documents affecting ownership of a property', isCorrect: true },
      { id: 'c', text: 'A title insurance policy that covers all defects', isCorrect: false },
      { id: 'd', text: 'The process of transferring a deed from seller to buyer', isCorrect: false },
    ],
    explanation:
      'The chain of title is the sequential history of recorded documents (deeds, mortgages, liens, easements) that trace ownership of a property from the original source (often a government patent) to the current owner. A break in the chain of title can create a cloud on the title and may need to be resolved through a quiet title action or other legal remedy.',
    difficulty: 'easy',
    topicTag: 'chain of title',
  },
  {
    id: 'q-title-004',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'In a race-notice state like Virginia, Buyer A purchases property on March 1 but does not record. Buyer B purchases the same property on March 15 without knowledge of Buyer A\'s purchase and records immediately. Who prevails?',
    options: [
      { id: 'a', text: 'Buyer A, because they purchased first', isCorrect: false },
      { id: 'b', text: 'Buyer B, because they recorded first and had no notice of Buyer A\'s deed', isCorrect: true },
      { id: 'c', text: 'Neither buyer, and the property reverts to the seller', isCorrect: false },
      { id: 'd', text: 'Buyer A, because Buyer B should have known about the prior sale', isCorrect: false },
    ],
    explanation:
      'In Virginia\'s race-notice system, Buyer B prevails because they had no actual or constructive notice of Buyer A\'s unrecorded deed and they recorded first. Under a race-notice statute, a subsequent bona fide purchaser who records first and has no notice of a prior unrecorded instrument will have superior title. This is why prompt recording is essential.',
    difficulty: 'hard',
    topicTag: 'Virginia race-notice',
  },
  {
    id: 'q-title-005',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'Actual notice is BEST described as:',
    options: [
      { id: 'a', text: 'Notice that comes from recording a deed in public records', isCorrect: false },
      { id: 'b', text: 'Direct, personal knowledge of a fact, such as seeing a tenant living on the property', isCorrect: true },
      { id: 'c', text: 'Notice provided by a title insurance company', isCorrect: false },
      { id: 'd', text: 'Notice that is required before a foreclosure sale', isCorrect: false },
    ],
    explanation:
      'Actual notice means a person has direct, personal knowledge of a fact. For example, if a buyer visits a property and sees a tenant occupying it, the buyer has actual notice that someone else has a possessory interest. Actual notice can come from personal observation, conversation, or any firsthand information, regardless of what the public records show.',
    difficulty: 'easy',
    topicTag: 'constructive vs actual notice',
  },
  {
    id: 'q-title-006',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'The primary purpose of recording a deed is to:',
    options: [
      { id: 'a', text: 'Transfer ownership from seller to buyer', isCorrect: false },
      { id: 'b', text: 'Provide constructive notice to the world of the ownership change', isCorrect: true },
      { id: 'c', text: 'Satisfy the requirements of the statute of frauds', isCorrect: false },
      { id: 'd', text: 'Create a valid deed', isCorrect: false },
    ],
    explanation:
      'Recording a deed does not transfer ownership (delivery and acceptance do that). Recording gives constructive notice to the world that the ownership change has occurred, which protects the buyer against subsequent claims by others. An unrecorded deed is still valid between the original parties, but it may not protect the buyer against a bona fide purchaser who records first.',
    difficulty: 'medium',
    topicTag: 'recording statutes',
  },
  {
    id: 'q-title-007',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'A marketable title is one that:',
    options: [
      { id: 'a', text: 'Has been insured by a title insurance company', isCorrect: false },
      { id: 'b', text: 'Is free from reasonable doubt and defects that a prudent buyer would object to', isCorrect: true },
      { id: 'c', text: 'Has never been transferred by deed', isCorrect: false },
      { id: 'd', text: 'Is guaranteed by the state government', isCorrect: false },
    ],
    explanation:
      'Marketable title (also called merchantable title) is title that is free from reasonable doubt and from defects that could expose the buyer to litigation. It does not need to be perfect, but it must be acceptable to a reasonably prudent buyer. Most real estate contracts require the seller to deliver marketable title at closing.',
    difficulty: 'medium',
    topicTag: 'marketable vs insurable title',
  },
  {
    id: 'q-title-008',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following would constitute a "cloud on the title"?',
    options: [
      { id: 'a', text: 'A properly released mortgage', isCorrect: false },
      { id: 'b', text: 'An unreleased lien from a paid-off debt', isCorrect: true },
      { id: 'c', text: 'A recorded warranty deed', isCorrect: false },
      { id: 'd', text: 'A current property tax payment receipt', isCorrect: false },
    ],
    explanation:
      'A cloud on the title is any document, claim, or encumbrance in the public records that appears to affect ownership but may not be valid. An unreleased lien from a debt that has been paid off is a classic example because it shows up in the records as an active encumbrance even though the underlying obligation is satisfied. It must be removed through a lien release or quiet title action.',
    difficulty: 'medium',
    topicTag: 'chain of title',
  },
  {
    id: 'q-title-009',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'Insurable title differs from marketable title in that insurable title:',
    options: [
      { id: 'a', text: 'Is always superior to marketable title', isCorrect: false },
      { id: 'b', text: 'May have known defects that a title company is willing to insure over', isCorrect: true },
      { id: 'c', text: 'Cannot be obtained in Virginia', isCorrect: false },
      { id: 'd', text: 'Requires a court order to establish', isCorrect: false },
    ],
    explanation:
      'Insurable title may contain minor defects that a title insurance company is willing to insure against (take the risk on). Marketable title, by contrast, must be free from reasonable defects. A title can be insurable without being marketable. Some purchase contracts specify "marketable and insurable title" to give the buyer maximum protection.',
    difficulty: 'hard',
    topicTag: 'marketable vs insurable title',
  },
  {
    id: 'q-title-010',
    chapterId: 'title-recording',
    quizType: 'chapter_quiz',
    questionText:
      'In Virginia, where are deeds and other real estate documents recorded?',
    options: [
      { id: 'a', text: 'The Virginia Department of Taxation', isCorrect: false },
      { id: 'b', text: 'The circuit court clerk\'s office in the jurisdiction where the property is located', isCorrect: true },
      { id: 'c', text: 'The Virginia Real Estate Board', isCorrect: false },
      { id: 'd', text: 'The state capitol in Richmond', isCorrect: false },
    ],
    explanation:
      'In Virginia, all real estate documents (deeds, deeds of trust, liens, easements, and other instruments) are recorded in the clerk\'s office of the circuit court in the city or county where the property is located. This local recording system allows title searchers to find all documents affecting a specific property in one location.',
    difficulty: 'easy',
    topicTag: 'recording statutes',
  },
]

// ── Chapter: title-insurance-defects (10 questions) ─────────────────────────

const titleInsuranceQuestions: QuizQuestion[] = [
  {
    id: 'q-tinsure-001',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'An owner\'s title insurance policy protects:',
    options: [
      { id: 'a', text: 'The mortgage lender against loss due to title defects', isCorrect: false },
      { id: 'b', text: 'The property owner against loss due to title defects that existed before the policy date', isCorrect: true },
      { id: 'c', text: 'The real estate agent against liability for title errors', isCorrect: false },
      { id: 'd', text: 'The title company against claims by the property owner', isCorrect: false },
    ],
    explanation:
      'An owner\'s title insurance policy protects the property buyer/owner against financial loss from defects in the title that existed at or before the date of the policy but were not discovered during the title search. Coverage continues for as long as the owner (or their heirs) has an interest in the property. A lender\'s policy is a separate policy that protects only the mortgage lender.',
    difficulty: 'easy',
    topicTag: 'owner\'s vs lender\'s title policies',
  },
  {
    id: 'q-tinsure-002',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'A lender\'s title insurance policy (loan policy) differs from an owner\'s policy in that the lender\'s policy:',
    options: [
      { id: 'a', text: 'Provides coverage that increases over time', isCorrect: false },
      { id: 'b', text: 'Covers the outstanding loan balance and decreases as the loan is paid down', isCorrect: true },
      { id: 'c', text: 'Is optional and rarely required', isCorrect: false },
      { id: 'd', text: 'Protects the buyer, not the lender', isCorrect: false },
    ],
    explanation:
      'A lender\'s title policy covers the mortgage lender\'s interest in the property, which equals the outstanding loan balance. As the borrower pays down the loan, the coverage amount decreases. When the loan is fully paid off, the lender\'s policy terminates. An owner\'s policy, by contrast, covers the purchase price and remains in effect as long as the owner has an interest.',
    difficulty: 'medium',
    topicTag: 'owner\'s vs lender\'s title policies',
  },
  {
    id: 'q-tinsure-003',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following is a common title defect?',
    options: [
      { id: 'a', text: 'A properly recorded satisfaction of mortgage', isCorrect: false },
      { id: 'b', text: 'A forged deed in the chain of title', isCorrect: true },
      { id: 'c', text: 'A current survey showing no encroachments', isCorrect: false },
      { id: 'd', text: 'A warranty deed with proper signatures', isCorrect: false },
    ],
    explanation:
      'A forged deed is a serious title defect because it means one of the transfers in the chain of title was not valid. Since a forged deed is void (not merely voidable), it conveys no title regardless of whether subsequent purchasers were innocent. Title insurance is designed to protect against losses from hidden defects like forgery, undisclosed heirs, and recording errors.',
    difficulty: 'easy',
    topicTag: 'title defects',
  },
  {
    id: 'q-tinsure-004',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'A quiet title action is used to:',
    options: [
      { id: 'a', text: 'Force a neighbor to stop making noise', isCorrect: false },
      { id: 'b', text: 'Resolve disputes or remove clouds on the title through a court proceeding', isCorrect: true },
      { id: 'c', text: 'Transfer property to a new owner without a deed', isCorrect: false },
      { id: 'd', text: 'Establish zoning restrictions on a property', isCorrect: false },
    ],
    explanation:
      'A quiet title action is a lawsuit filed in court to establish clear ownership of real property and remove any clouds, claims, or defects from the title. It "quiets" competing claims by having a judge determine who holds valid title. This legal remedy is commonly used when there are conflicting claims, breaks in the chain of title, or unreleased liens.',
    difficulty: 'medium',
    topicTag: 'quiet title actions',
  },
  {
    id: 'q-tinsure-005',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'Title insurance premiums are typically:',
    options: [
      { id: 'a', text: 'Paid monthly for the life of the policy', isCorrect: false },
      { id: 'b', text: 'Paid as a one-time premium at closing', isCorrect: true },
      { id: 'c', text: 'Paid annually on the policy anniversary', isCorrect: false },
      { id: 'd', text: 'Split equally between buyer and seller by law', isCorrect: false },
    ],
    explanation:
      'Title insurance requires a single, one-time premium payment made at closing. Unlike other types of insurance that require recurring premiums, title insurance provides continuous coverage from the date of the policy forward for that one payment. Who pays the premium (buyer or seller) is a matter of negotiation and local custom, not law.',
    difficulty: 'easy',
    topicTag: 'owner\'s vs lender\'s title policies',
  },
  {
    id: 'q-tinsure-006',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'Which of the following title defects would make a deed VOID rather than voidable?',
    options: [
      { id: 'a', text: 'A deed signed by a minor', isCorrect: false },
      { id: 'b', text: 'A deed signed under duress', isCorrect: false },
      { id: 'c', text: 'A forged deed', isCorrect: true },
      { id: 'd', text: 'A deed signed by someone who was intoxicated', isCorrect: false },
    ],
    explanation:
      'A forged deed is void, meaning it has no legal effect whatsoever and cannot transfer title, even to an innocent purchaser. Voidable deeds (signed by minors, under duress, or by intoxicated persons) are valid until the aggrieved party takes legal action to void them. The distinction is critical: void deeds can never be "cured," while voidable deeds can become valid if not challenged.',
    difficulty: 'hard',
    topicTag: 'title defects',
  },
  {
    id: 'q-tinsure-007',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'Standard title insurance policies typically exclude coverage for:',
    options: [
      { id: 'a', text: 'Forged deeds in the chain of title', isCorrect: false },
      { id: 'b', text: 'Defects discoverable by a physical survey or inspection of the property', isCorrect: true },
      { id: 'c', text: 'Recording errors at the courthouse', isCorrect: false },
      { id: 'd', text: 'Unknown liens that predate the policy', isCorrect: false },
    ],
    explanation:
      'Standard title insurance policies contain standard exceptions for matters that could be discovered by a physical survey or inspection, such as boundary disputes, encroachments, and unrecorded easements visible on the ground. Extended coverage (ALTA) policies can eliminate many of these standard exceptions if a current survey is provided.',
    difficulty: 'hard',
    topicTag: 'title defects',
  },
  {
    id: 'q-tinsure-008',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'A title commitment (also called a title binder) is:',
    options: [
      { id: 'a', text: 'The final title insurance policy issued at closing', isCorrect: false },
      { id: 'b', text: 'A preliminary report showing the condition of title and requirements to be met before the policy is issued', isCorrect: true },
      { id: 'c', text: 'A guarantee that no title defects exist', isCorrect: false },
      { id: 'd', text: 'A court order clearing the title of all claims', isCorrect: false },
    ],
    explanation:
      'A title commitment (binder) is issued before closing and shows the current condition of the title, including any defects, liens, or encumbrances found during the title search. It also lists the requirements that must be satisfied before the title company will issue the final policy. It is a promise to insure, not the actual insurance policy.',
    difficulty: 'medium',
    topicTag: 'curing defects',
  },
  {
    id: 'q-tinsure-009',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'Which method of curing a title defect involves obtaining a document from the lienholder confirming the debt has been paid?',
    options: [
      { id: 'a', text: 'Quiet title action', isCorrect: false },
      { id: 'b', text: 'Quitclaim deed', isCorrect: false },
      { id: 'c', text: 'Lien release (satisfaction)', isCorrect: true },
      { id: 'd', text: 'Lis pendens', isCorrect: false },
    ],
    explanation:
      'A lien release (also called a satisfaction or certificate of satisfaction) is a document signed by the lienholder confirming that the underlying debt has been paid in full and the lien is released. It must be recorded in the land records to clear the title. This is the simplest and most common method of curing a title defect caused by an outstanding lien.',
    difficulty: 'medium',
    topicTag: 'curing defects',
  },
  {
    id: 'q-tinsure-010',
    chapterId: 'title-insurance-defects',
    quizType: 'chapter_quiz',
    questionText:
      'A quitclaim deed is often used to cure title defects because it:',
    options: [
      { id: 'a', text: 'Provides the strongest warranties of any deed type', isCorrect: false },
      { id: 'b', text: 'Transfers whatever interest the grantor has without making any warranties', isCorrect: true },
      { id: 'c', text: 'Is guaranteed by the title insurance company', isCorrect: false },
      { id: 'd', text: 'Automatically removes all liens from the property', isCorrect: false },
    ],
    explanation:
      'A quitclaim deed transfers whatever interest the grantor may have in the property without making any warranties about the quality of that interest. It is commonly used to cure title defects because a person who may have a potential claim can execute a quitclaim deed to release that claim, clearing the cloud on the title without admitting they actually held an interest.',
    difficulty: 'medium',
    topicTag: 'curing defects',
  },
]

// ── Mock Exam: Modules 7 & 8 (20 questions) ────────────────────────────────

const mockExam78Questions: QuizQuestion[] = [
  {
    id: 'q-mock78-001',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A homeowner grants the electric company a permanent right to run power lines across the back of the property. This is an example of:',
    options: [
      { id: 'a', text: 'An easement appurtenant', isCorrect: false },
      { id: 'b', text: 'An easement in gross', isCorrect: true },
      { id: 'c', text: 'A license', isCorrect: false },
      { id: 'd', text: 'A restrictive covenant', isCorrect: false },
    ],
    explanation:
      'A utility easement is a commercial easement in gross because it benefits a company (the electric utility) rather than a neighboring parcel of land. There is no dominant tenement. Commercial easements in gross are assignable and run with the land, ensuring the utility maintains access regardless of property ownership changes.',
    difficulty: 'medium',
    topicTag: 'easements appurtenant vs in gross',
  },
  {
    id: 'q-mock78-002',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Which right from the bundle of rights allows a property owner to sell, gift, or bequeath their property?',
    options: [
      { id: 'a', text: 'Right of use', isCorrect: false },
      { id: 'b', text: 'Right of exclusion', isCorrect: false },
      { id: 'c', text: 'Right of disposition', isCorrect: true },
      { id: 'd', text: 'Right of enjoyment', isCorrect: false },
    ],
    explanation:
      'The right of disposition allows the owner to transfer property by sale, gift, will, or any other legal means. This right ensures the free alienability of property and is a cornerstone of American real estate law. Restrictions that completely prevent the transfer of property are generally void as unreasonable restraints on alienation.',
    difficulty: 'easy',
    topicTag: 'bundle of rights',
  },
  {
    id: 'q-mock78-003',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A grantor conveys property "to the City of Richmond, on the condition that the land is used as a public park. If the land ceases to be used as a public park, the grantor reserves the right to re-enter and retake the property." The city\'s estate is a:',
    options: [
      { id: 'a', text: 'Fee simple absolute', isCorrect: false },
      { id: 'b', text: 'Fee simple determinable', isCorrect: false },
      { id: 'c', text: 'Fee simple subject to condition subsequent', isCorrect: true },
      { id: 'd', text: 'Life estate', isCorrect: false },
    ],
    explanation:
      'The language "on the condition that... the grantor reserves the right to re-enter" creates a fee simple subject to condition subsequent. The grantor retains a right of re-entry (power of termination), meaning the estate does not automatically end upon violation. The grantor must take affirmative action to reclaim the property.',
    difficulty: 'hard',
    topicTag: 'fee simple defeasible',
  },
  {
    id: 'q-mock78-004',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'In Virginia, a subcontractor who has not been paid can protect their interest by filing a:',
    options: [
      { id: 'a', text: 'Lis pendens', isCorrect: false },
      { id: 'b', text: 'Mechanic\'s lien', isCorrect: true },
      { id: 'c', text: 'Attachment lien', isCorrect: false },
      { id: 'd', text: 'Vendor\'s lien', isCorrect: false },
    ],
    explanation:
      'Under Virginia Code sections 43-1 through 43-23, subcontractors, laborers, and material suppliers who are not paid for work performed or materials furnished can file a mechanic\'s lien against the property. The lien must be filed within 90 days of the last day of work or delivery. This protects the claimant by creating a security interest in the improved property.',
    difficulty: 'easy',
    topicTag: 'Virginia mechanic\'s liens',
  },
  {
    id: 'q-mock78-005',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'The government power that allows the state to take property from an owner who dies without a will and without heirs is:',
    options: [
      { id: 'a', text: 'Eminent domain', isCorrect: false },
      { id: 'b', text: 'Police power', isCorrect: false },
      { id: 'c', text: 'Taxation', isCorrect: false },
      { id: 'd', text: 'Escheat', isCorrect: true },
    ],
    explanation:
      'Escheat is the government\'s power to take ownership of property when an owner dies intestate (without a will) and without any known heirs. This power prevents property from becoming ownerless. In Virginia, escheated property goes to the state Literary Fund, which supports public education.',
    difficulty: 'easy',
    topicTag: 'PETE government powers',
  },
  {
    id: 'q-mock78-006',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A buyer purchases a home and receives a general warranty deed. Two years later, a previously unknown heir of a former owner claims an interest in the property. Which type of title insurance policy would protect the buyer?',
    options: [
      { id: 'a', text: 'Lender\'s title policy', isCorrect: false },
      { id: 'b', text: 'Owner\'s title policy', isCorrect: true },
      { id: 'c', text: 'Homeowner\'s insurance policy', isCorrect: false },
      { id: 'd', text: 'Flood insurance policy', isCorrect: false },
    ],
    explanation:
      'An owner\'s title insurance policy protects the property buyer against financial loss from title defects that existed before the policy date, including claims by unknown heirs. The lender\'s policy only protects the mortgage lender\'s interest. Homeowner\'s insurance covers physical damage, not title defects.',
    difficulty: 'medium',
    topicTag: 'owner\'s vs lender\'s title policies',
  },
  {
    id: 'q-mock78-007',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A restaurant owner installs a commercial walk-in freezer in a leased building. At the end of the lease, the freezer is classified as a:',
    options: [
      { id: 'a', text: 'Fixture that belongs to the landlord', isCorrect: false },
      { id: 'b', text: 'Trade fixture that the tenant may remove', isCorrect: true },
      { id: 'c', text: 'Emblement', isCorrect: false },
      { id: 'd', text: 'Real property that transfers with the building', isCorrect: false },
    ],
    explanation:
      'Items installed by a commercial tenant for use in their business are classified as trade fixtures. The tenant has the right to remove trade fixtures before the lease expires, provided they repair any damage caused by the removal. If the tenant fails to remove them before the lease ends, the trade fixtures may become the landlord\'s property.',
    difficulty: 'easy',
    topicTag: 'trade fixtures',
  },
  {
    id: 'q-mock78-008',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A life estate holder who tears down a structurally sound building on the property has committed:',
    options: [
      { id: 'a', text: 'Ameliorative waste', isCorrect: false },
      { id: 'b', text: 'Voluntary (affirmative) waste', isCorrect: true },
      { id: 'c', text: 'Permissive waste', isCorrect: false },
      { id: 'd', text: 'No violation, as the life tenant has full rights', isCorrect: false },
    ],
    explanation:
      'Voluntary waste (also called affirmative waste) occurs when a life tenant actively damages or destroys the property, such as demolishing a structurally sound building. Permissive waste occurs through neglect (failure to maintain). Ameliorative waste involves changes that actually increase the property value. The remainderman can sue for voluntary waste to recover damages.',
    difficulty: 'hard',
    topicTag: 'life estates',
  },
  {
    id: 'q-mock78-009',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Under Virginia\'s race-notice recording statute, which party is protected?',
    options: [
      { id: 'a', text: 'The first party to purchase the property, regardless of recording', isCorrect: false },
      { id: 'b', text: 'The first party to record, regardless of notice', isCorrect: false },
      { id: 'c', text: 'A subsequent bona fide purchaser who records first and has no notice of prior unrecorded claims', isCorrect: true },
      { id: 'd', text: 'The party who has been in possession the longest', isCorrect: false },
    ],
    explanation:
      'Virginia\'s race-notice statute protects a subsequent bona fide purchaser for value who (1) has no actual or constructive notice of a prior unrecorded instrument, and (2) records their instrument first. Both requirements must be met. A pure race statute only requires recording first, while a pure notice statute only requires lack of notice.',
    difficulty: 'medium',
    topicTag: 'Virginia race-notice',
  },
  {
    id: 'q-mock78-010',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'In a condominium, a unit owner\'s interest in the common elements is:',
    options: [
      { id: 'a', text: 'A separate fee simple estate', isCorrect: false },
      { id: 'b', text: 'An undivided percentage interest that cannot be separated from the unit', isCorrect: true },
      { id: 'c', text: 'A leasehold interest granted by the association', isCorrect: false },
      { id: 'd', text: 'No interest; the association owns all common elements', isCorrect: false },
    ],
    explanation:
      'Each condominium unit owner holds an undivided percentage interest in the common elements that is inseparable from the unit. This percentage is established in the declaration and determines the owner\'s share of common expenses and voting rights. The common element interest cannot be sold or transferred separately from the unit.',
    difficulty: 'medium',
    topicTag: 'Virginia Condominium Act',
  },
  {
    id: 'q-mock78-011',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Which of the following liens is classified as voluntary?',
    options: [
      { id: 'a', text: 'Property tax lien', isCorrect: false },
      { id: 'b', text: 'Judgment lien', isCorrect: false },
      { id: 'c', text: 'Deed of trust (mortgage)', isCorrect: true },
      { id: 'd', text: 'Mechanic\'s lien', isCorrect: false },
    ],
    explanation:
      'A deed of trust (mortgage) is the only voluntary lien listed because the borrower willingly pledges the property as collateral for the loan. Property tax liens, judgment liens, and mechanic\'s liens are all involuntary because they are imposed on the property without the owner\'s consent.',
    difficulty: 'easy',
    topicTag: 'voluntary vs involuntary liens',
  },
  {
    id: 'q-mock78-012',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'An owner conveys property "to my daughter Lisa for the life of my mother Grace." When Grace dies, the property reverts to the owner. Lisa\'s interest is:',
    options: [
      { id: 'a', text: 'A fee simple absolute', isCorrect: false },
      { id: 'b', text: 'A conventional life estate', isCorrect: false },
      { id: 'c', text: 'A life estate pur autre vie', isCorrect: true },
      { id: 'd', text: 'A fee simple determinable', isCorrect: false },
    ],
    explanation:
      'Lisa holds a life estate pur autre vie because the duration of her estate is measured by the life of another person (Grace), not her own life. The estate ends when Grace dies, regardless of whether Lisa is still alive. The property then reverts to the original grantor, who retained a reversionary interest.',
    difficulty: 'hard',
    topicTag: 'life estates',
  },
  {
    id: 'q-mock78-013',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A property owner has a neighbor who has been crossing the owner\'s land daily to reach a bus stop for 18 years, openly and without permission. The neighbor may have acquired:',
    options: [
      { id: 'a', text: 'A license', isCorrect: false },
      { id: 'b', text: 'An easement by necessity', isCorrect: false },
      { id: 'c', text: 'An easement by prescription', isCorrect: true },
      { id: 'd', text: 'An easement by implication', isCorrect: false },
    ],
    explanation:
      'An easement by prescription is acquired through continuous, open, notorious, hostile, and adverse use for Virginia\'s statutory period. The use must be without permission from the property owner. If all elements are met for the required period, the user obtains a legal right to continue using the property in that manner, similar to adverse possession but for use rather than ownership.',
    difficulty: 'medium',
    topicTag: 'easements by prescription',
  },
  {
    id: 'q-mock78-014',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Which of the following statements about cooperative ownership is TRUE?',
    options: [
      { id: 'a', text: 'Each owner receives a deed to their individual unit', isCorrect: false },
      { id: 'b', text: 'Owners may freely sell their shares without board approval', isCorrect: false },
      { id: 'c', text: 'The corporation owns the entire building, and residents hold shares of stock plus a proprietary lease', isCorrect: true },
      { id: 'd', text: 'Cooperatives are more common in Virginia than condominiums', isCorrect: false },
    ],
    explanation:
      'In a cooperative, a corporation holds title to the entire building. Residents purchase shares of stock in the corporation and receive a proprietary lease granting the right to occupy a specific unit. Most cooperatives require board approval before shares can be transferred, giving the board significant control over who lives in the building.',
    difficulty: 'medium',
    topicTag: 'cooperative ownership',
  },
  {
    id: 'q-mock78-015',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A title search reveals that a deed in the chain of title was signed by a 16-year-old. This deed is:',
    options: [
      { id: 'a', text: 'Void and can never transfer title', isCorrect: false },
      { id: 'b', text: 'Voidable at the option of the minor', isCorrect: true },
      { id: 'c', text: 'Valid because recording cured the defect', isCorrect: false },
      { id: 'd', text: 'Enforceable against the minor but not by the minor', isCorrect: false },
    ],
    explanation:
      'A deed signed by a minor is voidable, not void. The minor has the option to disaffirm (void) the deed upon reaching the age of majority or within a reasonable time thereafter. Until the minor takes action to void it, the deed remains valid. This is different from a forged deed, which is void from the beginning and can never transfer title.',
    difficulty: 'hard',
    topicTag: 'title defects',
  },
  {
    id: 'q-mock78-016',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'The "R" in the MARIA fixture test stands for:',
    options: [
      { id: 'a', text: 'Recording status of the item', isCorrect: false },
      { id: 'b', text: 'Replacement cost of the item', isCorrect: false },
      { id: 'c', text: 'Relationship of the parties', isCorrect: true },
      { id: 'd', text: 'Restriction on removal', isCorrect: false },
    ],
    explanation:
      'The "R" in MARIA stands for Relationship of the parties. Courts consider whether the person who attached the item is an owner or a tenant. Tenants are generally given more latitude to remove items because they are presumed to intend the items as personal property. Owners who attach items are more likely to have intended them as permanent fixtures.',
    difficulty: 'easy',
    topicTag: 'MARIA test',
  },
  {
    id: 'q-mock78-017',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A developer records covenants prohibiting commercial use in a residential subdivision. Ten years later, a homeowner wants to open a daycare in their home. The homeowner argues the restriction is outdated. Which legal principle could a court use to refuse enforcement?',
    options: [
      { id: 'a', text: 'Statute of frauds', isCorrect: false },
      { id: 'b', text: 'Changed conditions doctrine', isCorrect: true },
      { id: 'c', text: 'Adverse possession', isCorrect: false },
      { id: 'd', text: 'Eminent domain', isCorrect: false },
    ],
    explanation:
      'Under the changed conditions doctrine, a court may refuse to enforce a restrictive covenant if the character of the neighborhood has changed so substantially that enforcing the restriction would be inequitable and would not benefit the other property owners. However, merely arguing that a restriction is outdated is usually not enough; the actual conditions in the area must have significantly changed.',
    difficulty: 'hard',
    topicTag: 'restrictive covenants',
  },
  {
    id: 'q-mock78-018',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Property owned by a homeowner in Virginia is subject to a $200,000 first mortgage recorded in 2020, a $15,000 judgment lien docketed in 2022, and $3,000 in delinquent property taxes. The property sells at foreclosure for $195,000. How much does the first mortgage lender receive?',
    options: [
      { id: 'a', text: '$200,000', isCorrect: false },
      { id: 'b', text: '$195,000', isCorrect: false },
      { id: 'c', text: '$192,000', isCorrect: true },
      { id: 'd', text: '$177,000', isCorrect: false },
    ],
    explanation:
      'Property tax liens have first priority and are paid before all other liens. The $3,000 in delinquent taxes is paid first from the $195,000 proceeds, leaving $192,000. The first mortgage lender receives $192,000, leaving a deficiency of $8,000 on the $200,000 loan. The judgment lien holder receives nothing because the proceeds were exhausted.',
    difficulty: 'hard',
    topicTag: 'lien priority',
  },
  {
    id: 'q-mock78-019',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'Which of the following would NOT provide constructive notice of an interest in real property?',
    options: [
      { id: 'a', text: 'A deed recorded in the circuit court clerk\'s office', isCorrect: false },
      { id: 'b', text: 'A mortgage recorded in the land records', isCorrect: false },
      { id: 'c', text: 'A verbal agreement between neighbors about a shared driveway', isCorrect: true },
      { id: 'd', text: 'A recorded easement', isCorrect: false },
    ],
    explanation:
      'Constructive notice comes from information available in public records. A verbal agreement is not recorded anywhere and therefore cannot provide constructive notice. It might provide actual notice to the parties involved, but third parties searching the public records would have no way to discover it. This is why the statute of frauds requires real estate agreements to be in writing.',
    difficulty: 'medium',
    topicTag: 'constructive vs actual notice',
  },
  {
    id: 'q-mock78-020',
    chapterId: 'mock-exam-78',
    quizType: 'mock_exam',
    questionText:
      'A littoral property owner\'s boundary line extends to the:',
    options: [
      { id: 'a', text: 'Center of the adjacent body of water', isCorrect: false },
      { id: 'b', text: 'Mean high water mark', isCorrect: true },
      { id: 'c', text: 'Edge of the water at the time of purchase', isCorrect: false },
      { id: 'd', text: 'State-designated waterfront setback line', isCorrect: false },
    ],
    explanation:
      'For littoral (ocean, sea, or large lake) properties, the owner\'s boundary typically extends to the mean high water mark. The area between the mean high water mark and the water\'s edge is generally considered public trust land. For riparian properties along rivers and streams, the boundary may extend to the center of the waterway (thread of the stream).',
    difficulty: 'medium',
    topicTag: 'water rights',
  },
]

export const MOD78_QUESTIONS: QuizQuestion[] = [
  ...bundleQuestions,
  ...estatesQuestions,
  ...rightsInterestsQuestions,
  ...commonInterestQuestions,
  ...liensQuestions,
  ...encumbrancesQuestions,
  ...titleRecordingQuestions,
  ...titleInsuranceQuestions,
  ...mockExam78Questions,
]
