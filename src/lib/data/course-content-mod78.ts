import type { CourseModule } from './course-content'

// ── Module 7: Real Property Concepts & Estates ─────────────────────────────────

const module7: CourseModule = {
  slug: 'real-property-concepts',
  title: 'Real Property Concepts & Estates',
  subtitle: 'Property rights, estates in land, and real vs personal property',
  examWeight: '15% of national exam',
  chapters: [
    {
      slug: 'bundle-of-rights-property-types',
      title: 'Bundle of Rights & Property Types',
      lessons: [
        {
          slug: 'bundle-of-legal-rights',
          title: 'The Bundle of Legal Rights',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'bundle of rights',
            'right of possession',
            'right of use',
            'right of enjoyment',
            'right of disposition',
            'right of exclusion',
            'fee simple absolute',
            'ownership rights',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each right in the bundle of rights to its definition and practical example',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of the five rights included in the bundle of rights',
            },
          ],
          content: `## The Bundle of Rights Concept

When you purchase real property, you are not simply buying land and buildings. You are acquiring a "bundle" of legal rights associated with that property. This concept is fundamental to understanding real estate ownership in the United States and will appear repeatedly on both the national and Virginia portions of your licensing exam.

The **bundle of rights** is an analogy that compares property ownership to holding a bundle of sticks, where each stick represents a distinct legal right. The property owner holds all the sticks by default, but individual rights can be separated, transferred, leased, or voluntarily restricted without surrendering the entire bundle.

### The Five Core Rights

**1. Right of Possession**
The right to occupy and physically hold the property. This is the most basic ownership right. When you own property, you have the legal right to be present on that property. Possession also means you can grant possession to others through leases or licenses while retaining ownership.

**2. Right of Use**
The right to use the property in any legal manner. You can use your land for residential living, gardening, recreation, or (if zoning permits) commercial activity. This right is subject to government restrictions such as zoning ordinances, building codes, and environmental regulations. Virginia localities enforce zoning through their respective planning and zoning departments.

**3. Right of Enjoyment**
The right to use the property without interference from others. This means you can enjoy your property peacefully and quietly. If a neighbor's actions substantially interfere with your enjoyment, you may have a legal claim for nuisance. The right of enjoyment is also called the right of "quiet enjoyment," a term you will encounter frequently in landlord-tenant law and title insurance.

**4. Right of Disposition**
The right to transfer ownership of the property to another person by any legal means. You can sell it, gift it, donate it to charity, leave it in your will, or abandon it. This right allows the free alienability (transferability) of property, which is a cornerstone of American real estate law. Any restriction that attempts to completely prevent the transfer of property is generally void as an unreasonable restraint on alienation.

**5. Right of Exclusion**
The right to prevent others from entering or using the property. You can put up fences, post no-trespassing signs, and call law enforcement to remove uninvited visitors. This right is not absolute: government officials with proper legal authority (warrant, inspection order, eminent domain) can enter, and certain easement holders have the right to cross your land.

### How Rights Can Be Separated

A critical concept for your exam is that these rights can be separated and held by different parties simultaneously. For example:

| Scenario | Rights Held By Owner | Rights Held By Others |
|----------|---------------------|-----------------------|
| Owner leases to tenant | Disposition, partial exclusion | Tenant holds possession, use, enjoyment |
| Owner grants easement | All except partial exclusion | Easement holder has limited use right |
| Owner mortgages property | All five (in Virginia) | Lender holds lien interest, not possession |
| Zoning restricts commercial use | All except unrestricted use | Government restricts use through police power |

Virginia is a **lien theory** state that uses deeds of trust as its primary security instrument for residential real estate. The borrower retains legal and equitable title throughout the loan term, while the lender holds only a lien interest (secured through a deed of trust to a neutral trustee). This distinction matters because it clarifies that the borrower has full ownership rights during the loan, and the lender's remedy in default is to enforce the lien through the trustee's power of sale, not to claim title directly.

### Practical Significance

Understanding the bundle of rights helps you explain to clients why property ownership is not an all-or-nothing concept. When a client sells mineral rights, they are surrendering one stick from the bundle. When they grant a conservation easement, they are giving away the right to develop the land while keeping every other right. This layered view of ownership is what makes real estate transactions complex and why licensed professionals are essential.`,
        },
        {
          slug: 'real-property-vs-personal-property',
          title: 'Real Property vs Personal Property',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'real property',
            'personal property',
            'chattels',
            'realty',
            'personalty',
            'tangible property',
            'intangible property',
            'bill of sale',
            'deed',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Classify each item as real property or personal property and explain why',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify whether each described item transfers with the deed or requires a separate bill of sale',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer expects the seller\'s dining room chandelier to convey with the property. The seller removed it before closing and replaced it with a basic light fixture. Who is right?',
            },
          ],
          content: `## Real Property vs Personal Property

One of the most fundamental distinctions in real estate law is the difference between **real property** and **personal property**. This distinction determines what conveys (transfers) with the sale of a property, how items are taxed, and which legal rules apply to a given transaction.

### Defining Real Property

**Real property** (also called "realty") consists of:
- Land itself, from the surface extending down to the center of the earth and upward to the sky (subject to air rights regulation)
- All things permanently attached to the land (buildings, fences, driveways, landscaping)
- All things appurtenant to the land (rights that run with the property such as easements and water rights)
- All things immovable by law

Real property is transferred by **deed** and is subject to real property taxes assessed by the local jurisdiction. In Virginia, real property is assessed by the local Commissioner of the Revenue or an independent assessor, and taxes are collected by the local Treasurer's office.

### Defining Personal Property

**Personal property** (also called "personalty" or "chattels") is everything that is not real property. Personal property is movable and is not permanently attached to land. Examples include furniture, vehicles, clothing, appliances that are not built-in, area rugs, and curtains hung on removable rods.

Personal property is transferred by **bill of sale**, not by deed. When a homeowner sells their house, the deed conveys the real property. If the buyer also wants to purchase the seller's furniture, a separate bill of sale is required.

### Why the Distinction Matters

The real property vs personal property distinction affects several critical areas:

**What Conveys at Closing**
Unless the contract states otherwise, all real property conveys with the deed. Personal property does not convey unless specifically included in the contract. This is one of the most common sources of disputes in residential transactions. As a Virginia licensee, you must help your clients clearly specify in the purchase agreement which items are included or excluded from the sale.

**Taxation**
Real property is subject to annual ad valorem (based on value) property taxes. Personal property may also be taxed, but under a different schedule and rate. In Virginia, localities assess both real and personal property taxes, and the rates differ. Vehicles, business equipment, and machinery are common personal property items subject to Virginia personal property tax.

**Financing**
Real property is financed through mortgages (or deeds of trust in Virginia). Personal property is financed through personal loans, chattel mortgages, or security agreements governed by the Uniform Commercial Code (UCC).

### The Gray Area: Conversion

Items can change classification through the process of **annexation** (personal property becoming real property) or **severance** (real property becoming personal property):

| Process | Direction | Example |
|---------|-----------|---------|
| Annexation | Personal to Real | Installing a built-in dishwasher |
| Severance | Real to Personal | Cutting down a standing tree (lumber becomes personal property) |
| Constructive annexation | Personal to Real | A custom window blind manufactured to fit an unusual window shape |

The concept of severance is particularly important in Virginia agricultural transactions. Standing crops (growing in the ground) are real property. Once harvested, they become personal property. Timber follows the same rule: standing trees are real property; cut lumber is personal property.

### Common Exam Scenarios

The national exam frequently tests your ability to classify borderline items. Here is a reliable framework:

- If the item is permanently attached and removing it would damage the property, it is likely real property
- If the item was installed to become a permanent part of the structure, it is likely real property
- If the item can be removed without damage and was not intended to be permanent, it is likely personal property
- Always check the purchase contract, as the parties can agree to override default rules

As a licensee, your role is to prevent disputes by ensuring the contract clearly addresses any items whose classification is ambiguous. A detailed "included items" and "excluded items" section in the purchase agreement protects both parties and reduces post-closing conflict.`,
        },
        {
          slug: 'fixtures-trade-fixtures-emblements',
          title: 'Fixtures, Trade Fixtures & Emblements',
          lessonType: 'interactive',
          estimatedMinutes: 30,
          keyTerms: [
            'fixture',
            'trade fixture',
            'emblements',
            'fructus industriales',
            'fructus naturales',
            'annexation',
            'severance',
            'constructive annexation',
            'chattel',
            'tenant improvement',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Classify each item: fixture (conveys with property), trade fixture (tenant removes), or emblement (tenant harvests)',
            },
            {
              type: 'mini_quiz',
              prompt:
                'A commercial tenant installs a pizza oven bolted to the floor. At lease end, who owns the oven?',
            },
            {
              type: 'scenario',
              prompt:
                'A farmer leasing land plants a crop of soybeans. The lease terminates before harvest. Does the farmer have the right to return and harvest?',
            },
          ],
          content: `## Fixtures, Trade Fixtures & Emblements

These three categories represent special situations where the line between real and personal property becomes legally significant. Understanding each category and how they differ is essential for your exam and your practice.

### Fixtures

A **fixture** is an item that was once personal property but has been attached to real property in such a way that it is now legally considered part of the real property. Once an item becomes a fixture, it conveys with the property upon sale unless the parties agree otherwise in writing.

Common examples of fixtures include:
- Built-in appliances (dishwashers, garbage disposals, built-in microwaves)
- Ceiling fans and light fixtures permanently wired into the electrical system
- Wall-to-wall carpeting
- Window blinds and shutters attached with screws
- Plumbing fixtures (sinks, toilets, bathtubs)
- Central heating and air conditioning systems
- Garage door openers (the mechanism, not the remote)
- Installed security systems

When an item becomes a fixture, removing it constitutes **waste** (damage to the property). A seller who removes fixtures without the buyer's agreement is in breach of contract and may be liable for damages.

### Trade Fixtures

**Trade fixtures** are a critical exception to the general fixture rule. A trade fixture is an item installed by a **commercial tenant** for the purpose of conducting business. Despite being attached to the property, trade fixtures remain the personal property of the tenant and may be removed at the end of the lease, provided:

1. The tenant removes them before or within a reasonable time after lease termination
2. The tenant repairs any damage caused by removal
3. The items were installed by the tenant for business purposes (not by the landlord)

Examples of trade fixtures:
- Restaurant booths and commercial kitchen equipment
- Retail display shelving and counters
- Dental chairs bolted to the floor
- Manufacturing equipment attached to the building
- Walk-in coolers installed by a grocery tenant

If a commercial tenant fails to remove trade fixtures by the end of the lease, those items become the property of the landlord through **abandonment**. Virginia courts generally enforce this rule strictly, so as a licensee advising commercial clients, you should recommend that lease agreements clearly specify which items are trade fixtures and the timeline for removal.

**Residential tenants do not have trade fixture rights.** If a residential tenant installs a ceiling fan, that fan generally becomes a fixture belonging to the landlord unless the lease specifies otherwise.

### Emblements (Fructus Industriales)

**Emblements** are crops produced by annual cultivation and human labor. They are classified as **personal property** of the person who planted them, even though they grow from real property. The legal doctrine of emblements protects farmers and agricultural tenants who invest labor and resources in planting crops.

Under the doctrine of emblements:
- A tenant farmer whose lease terminates before harvest has the right to return to the land and harvest crops that were planted during the lease term
- If a landowner dies, the tenant retains the right to harvest planted crops
- The right of emblements applies only to crops produced by annual labor (corn, wheat, soybeans, vegetables) and not to perennial plants or natural growth

Virginia, as a state with significant agricultural land, recognizes emblements under common law. The Virginia Residential Landlord and Tenant Act does not directly address emblements, but agricultural leases in Virginia typically include specific provisions about crop rights.

### Fructus Naturales vs Fructus Industriales

| Category | Definition | Classification | Examples |
|----------|-----------|---------------|----------|
| **Fructus Industriales** | Crops produced by annual human labor | Personal property (emblements) | Corn, wheat, soybeans, tomatoes |
| **Fructus Naturales** | Natural growth without annual cultivation | Real property | Trees, perennial shrubs, wild grasses |

This distinction is tested frequently. Fruit on a tree that grows naturally (an apple tree in the yard) is real property. A crop of strawberries planted by a farmer is personal property. The key test is whether annual human labor is required to produce the growth.`,
        },
        {
          slug: 'annexation-tests-fixture-disputes',
          title: 'Annexation Tests & Fixture Disputes',
          lessonType: 'scenario',
          estimatedMinutes: 25,
          keyTerms: [
            'MARIA test',
            'method of attachment',
            'adaptability',
            'relationship of parties',
            'intention of annexor',
            'agreement of parties',
            'constructive annexation',
            'accession',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A homeowner installed a custom-built bookshelf that fits perfectly into an alcove but is not screwed to the wall. Using the MARIA test, determine if this is a fixture.',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Apply the five MARIA factors to determine fixture status for common household items',
            },
            {
              type: 'drag_drop',
              prompt:
                'Rank the five MARIA factors in order of legal weight from most to least decisive',
            },
          ],
          content: `## Annexation Tests & Fixture Disputes

When a dispute arises over whether an item is a fixture (real property) or personal property, courts apply a set of legal tests to make the determination. The most widely used framework is known by the acronym **MARIA**. Understanding and applying these tests is critical for resolving disputes and advising clients.

### The MARIA Test

Courts and examiners use five factors to determine whether an item has become a fixture:

**M - Method of Attachment**
How is the item attached to the property? Items attached by nails, screws, bolts, cement, plumbing, or permanent wiring are more likely to be fixtures. Items resting on the surface by their own weight (a refrigerator sitting on the floor, a bookcase leaning against a wall) are generally personal property. However, this factor alone is not decisive.

**A - Adaptability**
Is the item specifically adapted for use with the property? Custom-fitted items are more likely to be fixtures. A window air conditioning unit is generally personal property, but a central HVAC system designed and installed for the specific building is a fixture. Custom-cut carpet, built-in entertainment centers, and window treatments made for uniquely shaped windows all suggest fixture status.

**R - Relationship of the Parties**
The legal relationship between the parties affects fixture classification. Courts tend to favor:
- **Buyers** over sellers (if ambiguous, the item conveys)
- **Tenants** over landlords (if ambiguous, the tenant may remove)
- **Lenders** over borrowers (if ambiguous, the item is part of the collateral)

This factor reflects policy concerns: buyers expect to receive what they saw during showings, tenants should not lose personal investments, and lenders need stable collateral values.

**I - Intention of the Annexor**
This is generally considered the **most important factor**. What did the person who installed the item intend? Did they intend for it to become a permanent part of the property or to remain personal property they could remove later? Intention is judged objectively based on the circumstances, not on the person's subjective, unstated thoughts.

Courts look at objective evidence of intention: Was the item installed as part of a renovation or improvement? Did the person treat it as permanent? Would a reasonable person viewing the installation conclude it was meant to be permanent?

**A - Agreement of the Parties**
Any written agreement between the parties supersedes all other factors. If the purchase contract states that the chandelier does not convey with the property, that agreement controls regardless of how firmly the chandelier is attached. This is why clear contract language is the best protection against fixture disputes.

### Applying MARIA in Practice

Consider a seller who installs a wall-mounted flat-screen television with a custom bracket before listing the property:

| Factor | Analysis |
|--------|----------|
| Method of attachment | Bracket bolted to wall studs (favors fixture) |
| Adaptability | Standard TV on standard bracket, not custom-fitted (neutral) |
| Relationship | Buyer vs seller dispute (favors buyer/fixture) |
| Intention | Installed for personal enjoyment, not to improve property (favors personal property) |
| Agreement | If contract is silent, other factors control |

This is a genuinely close call, which is exactly why the purchase contract should explicitly address it.

### Virginia-Specific Considerations

Virginia courts follow the general MARIA framework and emphasize the intention of the annexor as the primary factor. When evaluating disputed items, Virginia courts examine the method of annexation, the adaptability of the item to the realty, and the purpose for which the items were installed to determine fixture status.

Virginia's Uniform Commercial Code (UCC) also applies when personal property is installed in a way that creates a "fixture filing" interest. Under Virginia Code Section 8.9A-334, a secured creditor who finances a fixture can maintain a priority interest by filing a fixture filing in the land records where the real property is located.

### Best Practices for Licensees

As a Virginia licensee, you can prevent fixture disputes by:
1. Walking through the property with your client and identifying any items that could be disputed
2. Ensuring the purchase agreement explicitly lists items that are included and excluded
3. Advising sellers to remove personal property they intend to keep before showings begin
4. Documenting the condition and contents of the property with photographs
5. Using the Virginia REALTORS standard form provisions that address fixtures and personal property`,
        },
      ],
    },
    {
      slug: 'estates-in-land',
      title: 'Estates in Land',
      lessons: [
        {
          slug: 'fee-simple-absolute',
          title: 'Freehold Estates: Fee Simple Absolute',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'fee simple absolute',
            'freehold estate',
            'estate of inheritance',
            'leasehold estate',
            'allodial system',
            'alienable',
            'devisable',
            'descendible',
            'highest form of ownership',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each estate type to its duration, transferability, and key characteristics',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify the characteristics that distinguish fee simple absolute from all other estate types',
            },
          ],
          content: `## Freehold Estates: Fee Simple Absolute

An **estate** in real property refers to the degree, nature, and extent of interest a person holds in land. Estates determine how long ownership lasts, what conditions apply, and how the interest can be transferred. The broadest category of estates is the **freehold estate**, which represents ownership that lasts for an indeterminate period.

### Freehold vs Leasehold

Before examining specific estate types, understand the fundamental division:

| Category | Duration | Ownership Type | Example |
|----------|----------|---------------|---------|
| **Freehold** | Indefinite (measured by lifetime or forever) | Ownership interest | Fee simple, life estate |
| **Leasehold** | Definite or determinable period | Possessory interest, not ownership | Month-to-month tenancy, one-year lease |

Freehold estates give the holder ownership rights. Leasehold estates give the holder only the right to possess and use the property for a limited time. This module focuses on freehold estates.

### Fee Simple Absolute: The Greatest Estate

**Fee simple absolute** is the highest form of property ownership recognized by law. It represents complete ownership of the entire bundle of rights with no conditions, limitations, or restrictions imposed by the grantor.

Key characteristics of fee simple absolute:
- **Perpetual duration**: The estate lasts forever. It does not end when the owner dies.
- **Freely alienable**: The owner can sell, gift, or otherwise transfer the property at any time.
- **Devisable**: The owner can leave the property to anyone through a will (devise).
- **Descendible**: If the owner dies without a will (intestate), the property passes to heirs under Virginia's laws of intestate succession.
- **No conditions**: The ownership is not subject to any conditions or limitations that could cause it to revert to a prior owner.

### Language of Conveyance

The traditional language to convey fee simple absolute is: "To [grantee] and his/her heirs." The phrase "and his/her heirs" are words of limitation describing the type of estate, not words of purchase identifying additional grantees. The heirs receive nothing by this language during the owner's lifetime; only the named grantee receives ownership.

In modern practice and under Virginia law, a deed is presumed to convey fee simple absolute unless it explicitly states otherwise. Virginia Code Section 55.1-300 provides that any conveyance of real property is deemed to transfer the grantor's entire interest unless the deed contains express language of limitation.

### The Allodial System

American real property ownership operates under the **allodial system**, meaning private individuals can own property outright, free of any rent or service obligations to the government. This contrasts with the feudal system, where all land was technically owned by the sovereign, and private parties held land only as tenants of the crown.

Under the allodial system, your fee simple absolute ownership is subject to only four government powers (discussed later in this module under the acronym PETE): police power, eminent domain, taxation, and escheat.

### Fee Simple Absolute in Virginia

Virginia strongly favors fee simple absolute ownership. Virginia Code Section 55.1-301 abolished the fee tail estate (an estate limited to lineal descendants) in Virginia, ensuring that all estates that would have been fee tail at common law are now treated as fee simple absolute. This reflects Virginia's public policy of keeping property freely transferable.

When you represent a buyer in Virginia, the buyer is almost always acquiring fee simple absolute. Any property listed for sale on the MLS is typically fee simple unless the listing specifies otherwise (as with a leasehold condominium or ground lease arrangement). As a licensee, always verify the estate type being conveyed, particularly in commercial transactions or properties near military installations where ground leases are common.`,
        },
        {
          slug: 'fee-simple-defeasible',
          title: 'Fee Simple Defeasible Estates',
          lessonType: 'reading',
          estimatedMinutes: 30,
          keyTerms: [
            'fee simple defeasible',
            'fee simple determinable',
            'fee simple subject to condition subsequent',
            'possibility of reverter',
            'right of re-entry',
            'power of termination',
            'automatic forfeiture',
            'durational language',
            'conditional language',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match the trigger language ("so long as," "provided that," "on condition that") to the correct defeasible estate type',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Determine whether each scenario describes a fee simple determinable or a fee simple subject to condition subsequent',
            },
            {
              type: 'scenario',
              prompt:
                'A grantor deeds land to a church "so long as the property is used for religious purposes." The church converts the building to a daycare center. What happens to ownership?',
            },
          ],
          content: `## Fee Simple Defeasible Estates

A **fee simple defeasible** is a fee simple estate that can be lost (defeated) if a specific condition occurs or a specified use ceases. Unlike fee simple absolute, defeasible estates come with strings attached. The two primary types are fee simple determinable and fee simple subject to condition subsequent.

### Fee Simple Determinable

A **fee simple determinable** automatically terminates when a stated event occurs or a specified use ceases. The estate reverts to the original grantor (or the grantor's heirs) by operation of law without any action required.

**Key features:**
- Created with durational language: "so long as," "while," "during," "until"
- Terminates **automatically** when the condition is violated
- The grantor retains a **possibility of reverter** (a future interest that becomes possessory automatically)

**Example:** "To Springfield School Board, so long as the property is used for educational purposes." If the school board stops using the property for education, ownership automatically reverts to the grantor or the grantor's heirs. No lawsuit or re-entry is required.

### Fee Simple Subject to Condition Subsequent

A **fee simple subject to condition subsequent** does not automatically terminate. Instead, when the specified condition is breached, the grantor has the **right of re-entry** (also called **power of termination**), which must be affirmatively exercised.

**Key features:**
- Created with conditional language: "provided that," "on condition that," "but if"
- Does NOT terminate automatically when the condition is violated
- The grantor retains a **right of re-entry** that must be exercised (typically through legal action)
- Ownership continues in the grantee until the grantor takes action

**Example:** "To Springfield School Board, provided that the property is used for educational purposes. If the property ceases to be used for educational purposes, the grantor may re-enter and reclaim the property." If the school board stops educational use, the grantor must take affirmative steps to reclaim the property. Until the grantor acts, the school board retains ownership.

### Comparing the Two Estates

| Feature | Fee Simple Determinable | Fee Simple Subject to Condition Subsequent |
|---------|------------------------|-------------------------------------------|
| Trigger language | "so long as," "while," "until" | "provided that," "but if," "on condition that" |
| Termination | Automatic | Requires grantor action |
| Grantor's future interest | Possibility of reverter | Right of re-entry / power of termination |
| When does reversion occur? | Immediately upon breach | When grantor exercises right of re-entry |
| Statute of limitations | Runs from date of breach | Runs from date grantor could have re-entered |

### Virginia Law on Defeasible Estates

Virginia recognizes both forms of defeasible fee simple estates. Virginia courts look carefully at the specific language used in the deed to determine which type was intended. If the language is ambiguous, Virginia courts tend to favor the **fee simple subject to condition subsequent** because it is less harsh. Automatic forfeiture (determinable) is disfavored because it can cause an innocent party to lose their property without notice or opportunity to cure.

Under Virginia Code Section 55.1-300.1 and Section 36-96.6 (the Virginia Fair Housing Law), certain defeasible estates related to racial restrictions or other discriminatory conditions are void and unenforceable, consistent with federal civil rights law. Any condition that restricts ownership or use based on race, color, religion, or national origin is struck from the deed, and the estate is treated as fee simple absolute.

### Practical Implications for Licensees

Defeasible estates are relatively uncommon in modern residential transactions but appear in:
- Land donated to churches, schools, or charitable organizations
- Historic preservation easements and conservation dedications
- Government land grants for specific public purposes

As a Virginia licensee, if you encounter a defeasible estate, you should recommend that your client consult a real estate attorney to evaluate the conditions, assess the risk of forfeiture, and determine whether title insurance will cover the defeasible nature of the estate.`,
        },
        {
          slug: 'life-estates',
          title: 'Life Estates: Conventional and Legal',
          lessonType: 'interactive',
          estimatedMinutes: 28,
          keyTerms: [
            'life estate',
            'life tenant',
            'remainderman',
            'reversioner',
            'pur autre vie',
            'conventional life estate',
            'legal life estate',
            'dower',
            'curtesy',
            'augmented estate',
            'waste',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A mother grants a life estate to her son, with remainder to her grandson. The son wants to take out a mortgage on the property. Can he? What happens to the mortgage when the son dies?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Test your understanding of life tenant obligations and the rights of remaindermen',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each life estate scenario to the correct legal outcome',
            },
          ],
          content: `## Life Estates: Conventional and Legal

A **life estate** is a freehold estate that lasts for the duration of a person's life. The holder of a life estate (the **life tenant**) has full possessory rights during their lifetime, but the estate terminates upon their death, at which point ownership passes to a designated party.

### Conventional Life Estates

A **conventional life estate** is created intentionally by a grantor through a deed or will. There are two forms:

**Life estate measured by the life tenant's life:**
"To Maria for life, then to James." Maria holds the life estate and can possess, use, and enjoy the property for her lifetime. When Maria dies, the property passes to James (the **remainderman**) in fee simple.

**Life estate pur autre vie (for the life of another):**
"To Maria for the life of Thomas, then to James." Maria holds the life estate, but it is measured by Thomas's life, not Maria's. If Maria dies before Thomas, Maria's interest passes to Maria's heirs for the remainder of Thomas's life. When Thomas dies, the property passes to James.

### Rights and Obligations of the Life Tenant

The life tenant has substantial rights during the estate's duration but also significant obligations:

**Rights:**
- Full possession and use of the property
- Right to collect rents and profits from the property
- Right to lease the property (but the lease terminates when the life estate ends)
- Right to mortgage the life estate interest (but the mortgage terminates with the life estate)
- Right to sell the life estate interest (the buyer acquires only the remaining duration)

**Obligations:**
- Pay property taxes and special assessments to the extent of income received from the property
- Maintain the property in reasonable condition
- Pay interest (not principal) on any existing mortgage
- Not commit **waste** (damage that decreases the value of the remainderman's future interest)

### Types of Waste

| Type | Definition | Example |
|------|-----------|---------|
| **Voluntary (affirmative) waste** | Intentional destruction or alteration | Demolishing a building, cutting mature timber |
| **Permissive waste** | Neglecting maintenance obligations | Allowing the roof to leak without repair |
| **Ameliorative waste** | Changes that increase value | Converting farmland to residential lots |

Courts traditionally prohibited all three forms of waste, but modern courts are more lenient with ameliorative waste, particularly when the change substantially increases property value and the property's original use is no longer economically viable.

### Legal Life Estates

**Legal life estates** are created by operation of law rather than by a grantor's intentional act.

**Dower and curtesy** were traditional common law estates that gave a surviving spouse a life estate in a portion of the deceased spouse's property. Modern Virginia law has replaced these with the **elective share** statute. Under Virginia Code §64.2-308.3 et seq. (the 2016 augmented estate reform), a surviving spouse can elect to take an **augmented estate share** instead of what was provided in the will. The elective share follows a sliding scale based on length of marriage (3% for short marriages up to 50% for marriages of 15+ years) applied to the augmented estate value.

Virginia abolished traditional dower and curtesy effective January 1, 1991 (former Va. Code §64.1-19.2, now §64.2-308.2). Surviving spouses are now protected through the statutory elective share / augmented estate system. However, the concept appears on the national portion of the exam because many states retain some form of these protections.

**Homestead exemption** (discussed in a later lesson) is another form of legal protection related to real property, though in Virginia it functions differently than the homestead life estates found in some states.

### Future Interests Associated with Life Estates

When a life estate is created, the grantor must specify who receives the property after the life tenant dies:

- **Remainder**: A future interest held by a third party (remainderman). "To Maria for life, then to James." James holds the remainder.
- **Reversion**: A future interest that returns to the grantor. "To Maria for life." Because no remainderman is named, the property reverts to the grantor (or the grantor's heirs) upon Maria's death.

These future interests are **vested** property rights that exist during the life tenant's lifetime. The remainderman or reversioner can sell, mortgage, or devise their future interest even before they gain possession.`,
        },
        {
          slug: 'future-interests-remainders-reversions',
          title: 'Future Interests: Remainders and Reversions',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'vested remainder',
            'contingent remainder',
            'reversion',
            'possibility of reverter',
            'right of re-entry',
            'executory interest',
            'rule against perpetuities',
            'future interest',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Classify each described interest as a remainder, reversion, possibility of reverter, or executory interest',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each future interest to the estate that creates it and the event that triggers possession',
            },
          ],
          content: `## Future Interests: Remainders and Reversions

A **future interest** is a present, legally recognized right to possess property at some point in the future. Future interests are not mere expectations; they are actual property interests that can be bought, sold, mortgaged, and inherited. Understanding future interests is essential because they determine who ultimately receives ownership when a life estate or defeasible estate terminates.

### Reversions

A **reversion** is a future interest retained by the grantor when the grantor conveys a lesser estate than what the grantor owns. The classic example:

"To Maria for life." The grantor conveys a life estate but does not name a remainderman. When Maria dies, the property automatically reverts to the grantor (or the grantor's heirs if the grantor has died). The reversion exists from the moment of the grant and is a vested interest throughout Maria's life.

Reversions arise when the grantor:
- Creates a life estate without naming a remainderman
- Creates a fee simple determinable (retaining a possibility of reverter)
- Creates any estate smaller than the estate the grantor holds

### Remainders

A **remainder** is a future interest held by a **third party** (someone other than the grantor) that becomes possessory when a prior estate (such as a life estate) naturally terminates. Remainders are further classified as vested or contingent.

**Vested Remainder:**
A remainder is vested when the holder is identifiable and there is no condition precedent (other than the natural termination of the prior estate) that must occur before the remainder becomes possessory.

"To Maria for life, then to James." James holds a vested remainder. James is identifiable, and no condition other than Maria's death must occur. Even if James dies before Maria, James's vested remainder passes to James's heirs.

**Contingent Remainder:**
A remainder is contingent when either (a) the holder is not yet identifiable, or (b) there is a condition precedent that must be satisfied before the remainder can become possessory.

"To Maria for life, then to Maria's first child to graduate from college." If Maria has no children who have graduated from college, the remainder holder is not yet determined, making this contingent. Once a child graduates, the remainder vests.

### Comparison Table

| Future Interest | Held By | Follows What Estate | Trigger |
|----------------|---------|--------------------| --------|
| Reversion | Grantor | Life estate, term of years | Natural termination of prior estate |
| Vested remainder | Third party (identifiable) | Life estate | Natural termination of prior estate |
| Contingent remainder | Third party (unidentifiable or conditional) | Life estate | Satisfaction of condition + termination of prior estate |
| Possibility of reverter | Grantor | Fee simple determinable | Automatic upon breach of condition |
| Right of re-entry | Grantor | Fee simple subject to condition subsequent | Grantor's affirmative exercise |
| Executory interest | Third party | Defeasible fee | Occurrence of stated event |

### Executory Interests

An **executory interest** is a future interest held by a third party that divests (cuts short) a prior estate. Unlike remainders, executory interests do not follow the natural termination of a prior estate; they interrupt it.

"To Maria and her heirs, but if the property is ever used for commercial purposes, then to James." James holds an executory interest. Maria has a fee simple subject to an executory limitation. If Maria (or her heirs) use the property commercially, James's executory interest divests Maria's estate.

### The Rule Against Perpetuities

The **Rule Against Perpetuities** (RAP) limits how long contingent future interests can remain unresolved. Under the traditional common law rule, a contingent future interest must vest (or fail) within 21 years after the death of some person alive at the time the interest was created.

Virginia adopted the **Uniform Statutory Rule Against Perpetuities** (USRAP) under Virginia Code Section 55.1-124, which provides an alternative 90-year wait-and-see period. Under Virginia's approach, if a contingent interest does not violate the common law RAP, it is valid. If it might violate the common law RAP, courts wait up to 90 years to see if the interest actually vests. If it has not vested within 90 years, the court reforms the interest to carry out the grantor's intent within the allowed period.

For the national exam, know the traditional RAP formula (lives in being plus 21 years). For the Virginia portion, know that Virginia uses the USRAP 90-year wait-and-see approach, which makes RAP violations extremely rare in practice.`,
        },
      ],
    },
    {
      slug: 'rights-interests-in-land',
      title: 'Rights & Interests in Land',
      lessons: [
        {
          slug: 'water-rights',
          title: 'Water Rights: Riparian, Littoral & Prior Appropriation',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'riparian rights',
            'littoral rights',
            'prior appropriation',
            'accretion',
            'avulsion',
            'reliction',
            'alluvion',
            'navigable waters',
            'reasonable use doctrine',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each water rights term (riparian, littoral, accretion, avulsion, reliction) to its definition',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Determine which type of water rights applies in each property scenario',
            },
            {
              type: 'scenario',
              prompt:
                'A Virginia property owner on a river discovers that gradual soil deposits have extended their shoreline by 20 feet over 10 years. Who owns the new land?',
            },
          ],
          content: `## Water Rights: Riparian, Littoral & Prior Appropriation

Water rights determine who can use water resources and how land boundaries change when water shifts. Virginia, like most eastern states, follows the riparian rights doctrine, but you also need to understand littoral rights and prior appropriation for the national exam.

### Riparian Rights

**Riparian rights** belong to owners of land that borders a flowing body of water such as a river, stream, or creek. In Virginia, riparian owners have the right to reasonable use of the water flowing past or through their property.

Key principles of riparian rights:
- The right attaches to the land, not the owner. When the land is sold, riparian rights transfer automatically
- Each riparian owner must use water reasonably without unreasonably interfering with downstream owners' rights
- Riparian owners have the right to access the water from their shoreline
- Ownership extends to the **center (thread) of the stream** on non-navigable waterways
- On navigable waterways, private ownership extends to the **mean low-water mark** (in Virginia, the state owns the riverbed of navigable waters)

Virginia follows the **reasonable use doctrine** for riparian rights. A riparian owner may use water for domestic purposes (drinking, bathing, household needs) even if it diminishes the flow to downstream owners. However, commercial or agricultural uses must be reasonable and cannot unreasonably harm other riparian owners.

### Littoral Rights

**Littoral rights** belong to owners of land that borders a stationary body of water such as a lake, ocean, or sea. In Virginia, this is most relevant for properties along the Chesapeake Bay, Atlantic Ocean, and the state's many lakes and reservoirs.

Key principles of littoral rights:
- Ownership extends to the **mean high-water mark** on ocean and tidal waters
- The area between high-water and low-water marks is typically public trust land in Virginia
- Littoral owners have access rights to the water
- Virginia's Coastal Zone Management laws may impose additional restrictions on littoral property use

### Changes in Land Boundaries Due to Water

Water movement can change property boundaries through three natural processes:

| Process | Definition | Ownership Effect |
|---------|-----------|-----------------|
| **Accretion** | Gradual, imperceptible buildup of soil deposits along a shoreline | New land (alluvion) belongs to the adjacent property owner |
| **Avulsion** | Sudden, dramatic change in a watercourse (flood, earthquake) | Property boundaries do NOT change; the original boundary line is maintained |
| **Reliction** | Gradual receding of water, exposing previously submerged land | Newly exposed land belongs to the adjacent property owner |

The distinction between accretion and avulsion is critical for the exam. If the change is gradual, the boundary moves with the water. If the change is sudden, the boundary stays where it was before the event.

**Alluvion** is the actual soil that is deposited by accretion. The term is often tested alongside accretion.

### Prior Appropriation

The **prior appropriation doctrine** is used primarily in western states (not Virginia) where water is scarce. Under this system:
- Water rights are based on "first in time, first in right"
- The first person to divert water and put it to beneficial use has priority
- Rights are not tied to land ownership; they can be sold independently
- A senior appropriator's rights are superior to a junior appropriator's rights

Virginia does not follow prior appropriation, but the concept appears on the national exam. The exam will test your ability to distinguish between riparian (eastern/water-abundant states) and prior appropriation (western/water-scarce states) systems.

### Virginia-Specific Water Law

Virginia regulates water use through the Virginia Water Protection Permit program administered by the Department of Environmental Quality (DEQ). Certain withdrawals of surface water and groundwater require permits. The Virginia Marine Resources Commission (VMRC) manages the beds of navigable waterways and the Chesapeake Bay. As a licensee, you should advise clients purchasing waterfront property to investigate any water use restrictions, tidal wetland regulations, and Chesapeake Bay Preservation Act requirements that may affect the property.`,
        },
        {
          slug: 'air-subsurface-mineral-rights',
          title: 'Air Rights, Subsurface Rights & Mineral Rights',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'air rights',
            'subsurface rights',
            'mineral rights',
            'support rights',
            'lateral support',
            'subjacent support',
            'transferable development rights',
            'severance of mineral rights',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Identify the type of property right implicated in each scenario involving air, subsurface, or mineral interests',
            },
            {
              type: 'flashcard',
              prompt:
                'Match lateral support and subjacent support to their definitions and enforcement scenarios',
            },
          ],
          content: `## Air Rights, Subsurface Rights & Mineral Rights

Property ownership extends beyond the surface. Under common law, a landowner's rights extend from the center of the earth upward to the heavens. Modern law has modified this principle, but the concept of layered ownership above and below the surface remains fundamental.

### Air Rights

**Air rights** are the rights to use, develop, and control the space above the surface of a parcel of land. In theory, a property owner holds rights to the airspace above their land. In practice, these rights are limited by:

- **Federal aviation law**: The federal government controls navigable airspace (generally above 500 feet in non-congested areas, above 1,000 feet over congested areas). Aircraft operating in navigable airspace do not trespass on the property below
- **Local zoning**: Height restrictions and building codes limit how high structures can be built
- **Utility easements**: Power lines, cable lines, and other overhead utilities may cross through a property's airspace

Air rights can be separately owned, leased, and transferred. In urban areas, air rights are particularly valuable. A property owner can sell the right to build above their existing structure while retaining ownership of the land and the building. This is common in cities where developers build residential towers above existing commercial buildings or train stations.

**Transferable Development Rights (TDRs)** are related to air rights. Under TDR programs, a property owner in a restricted zone can sell their unused development rights to a developer in a designated receiving zone. Virginia Code Section 15.2-2316.2 authorizes localities to establish TDR programs. These programs preserve open space, historic properties, and agricultural land while compensating owners for lost development potential.

### Subsurface Rights

**Subsurface rights** are the rights to use and exploit the area below the surface of the land. These rights include the right to excavate, tunnel, mine, and extract resources.

Subsurface rights can be severed from surface rights, creating a split estate where the surface owner and subsurface owner are different parties. This is common in Virginia's coalfield regions (southwestern Virginia) where mineral rights may have been separated from surface ownership decades ago.

### Mineral Rights

**Mineral rights** are a specific subset of subsurface rights involving the right to extract minerals (coal, oil, natural gas, precious metals, gravel). When mineral rights are severed from surface rights:

- The mineral rights holder typically has an implied easement to access the surface for reasonable extraction activities
- The surface owner cannot interfere with the mineral rights holder's extraction activities
- Disputes between surface and mineral rights holders are common and often require court intervention

In Virginia, the coalfield region has extensive history of severed mineral rights. The Virginia Gas and Oil Act (Virginia Code Section 45.2-1600 et seq.) regulates oil and gas extraction, including permitting requirements, well spacing, and royalty payments.

### Support Rights

An essential component of subsurface ownership is the right to **support**. There are two types:

**Lateral Support:**
The right to have land in its natural state supported by the adjacent land. If a neighbor excavates their property and causes your land to subside (collapse or sink), the neighbor is strictly liable for damage to your land in its natural state. If buildings on your land are damaged, you must prove the neighbor was negligent unless the land would have subsided even without the buildings.

**Subjacent Support:**
The right to have the surface supported by the subsurface. This is critical when mineral rights are severed. The mineral rights holder must provide adequate support for the surface. If mining operations cause the surface to collapse, the mineral rights holder is liable. In Virginia's coalfield region, subsidence from historical coal mining remains a significant issue.

| Support Type | Direction | Right Belongs To | Typical Dispute |
|-------------|-----------|-----------------|-----------------|
| Lateral | Side-to-side | Adjacent landowners | Neighbor's excavation causes land to sink |
| Subjacent | Below-to-above | Surface owner against subsurface owner | Mining causes surface to collapse |

### Practical Implications

As a Virginia licensee, when representing buyers of properties in southwestern Virginia or any area with a history of mining, always verify whether mineral rights have been severed. A title search should reveal any mineral reservations in the chain of title. Advise buyers that owning the surface without the mineral rights means they may face future extraction activity on or beneath their property.`,
        },
        {
          slug: 'homestead-exemption-virginia',
          title: 'Homestead Exemption in Virginia',
          lessonType: 'reading',
          estimatedMinutes: 20,
          keyTerms: [
            'homestead exemption',
            'exempt property',
            'judgment creditor',
            'forced sale',
            'Virginia homestead',
            'householder',
            'exemption amount',
            'bankruptcy exemption',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of Virginia homestead exemption limits, eligibility, and how it compares to other states',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each exemption type to the correct dollar amount and category under Virginia law',
            },
          ],
          content: `## Homestead Exemption in Virginia

The **homestead exemption** is a legal protection that shields a portion of a homeowner's equity in their primary residence from seizure by most creditors. The homestead exemption exists to prevent families from becoming homeless due to debt collection. Each state sets its own homestead exemption rules, and Virginia's approach differs significantly from states with generous homestead protections.

### Virginia's Homestead Exemption

Virginia's homestead exemption is governed by Virginia Code Section 34-4 and is notably more modest than the exemptions offered by states like Florida (unlimited) or Texas (unlimited on acreage limits).

Under current Virginia law:
- Every **householder** (a person who maintains a home) may claim an exemption of up to **$50,000** in value in real or personal property used as the **principal residence** of the householder or the householder's dependents
- If the householder is **65 or older** or is **disabled**, a separate enhancement permits a principal residence exemption of up to **$50,000** under Virginia's age/disability provisions
- For **non-residence property** (property not used as the principal residence), the older baseline still applies: the householder may exempt up to **$5,000** in value, plus an additional **$500** for each dependent
- A veteran of the United States Armed Forces may claim an additional **$2,000** exemption
- A disabled veteran may claim a further enhanced exemption

The householder must file a **homestead deed** in the clerk's office of the circuit court of the city or county where the property is located. The filing must include a description of the property claimed as exempt and a list of the householder's creditors.

### What the Exemption Protects Against

The homestead exemption protects the homeowner's equity from:
- Judgment creditors (creditors who have obtained a court judgment)
- Unsecured creditors seeking to collect debts through property seizure
- Forced sale of the home to satisfy general debts

### What the Exemption Does NOT Protect Against

Virginia's homestead exemption does **not** protect against:
- **Purchase money mortgages and deeds of trust**: The lender who financed the property purchase can still foreclose
- **Property tax liens**: Unpaid property taxes can always result in a tax sale
- **Mechanic's liens**: Contractors who improve the property can enforce their liens
- **Federal tax liens**: The IRS can seize property regardless of state homestead protections
- **Homeowners association liens**: In many cases, HOA assessment liens can override homestead protection

### Virginia vs Other States

| State | Homestead Exemption Amount | Notes |
|-------|---------------------------|-------|
| Virginia | $50,000 principal residence ($5,000 + $500/dependent for non-residence property) | Must file homestead deed |
| Florida | Unlimited (160 acres rural, 1/2 acre urban) | Automatic, no filing required |
| Texas | Unlimited (200 acres rural, 10 acres urban) | Automatic |
| California | $300,000 - $600,000 (varies by county) | Automatic |
| Maryland | None (no homestead exemption) | -- |

Virginia's principal-residence exemption has increased significantly from its historical baseline, but states like Florida and Texas still offer far more generous (effectively unlimited) protections. Virginia homeowners should plan accordingly.

### Bankruptcy and the Homestead Exemption

When a Virginia homeowner files for bankruptcy, they can choose between Virginia's state exemptions or the federal bankruptcy exemptions under 11 U.S.C. Section 522(d). The federal homestead exemption is currently **$31,575 (April 2025)** per individual (adjusted periodically for inflation). With Virginia's principal-residence exemption now at $50,000, many Virginia filers find the state exemption more favorable than the federal for homeowners with meaningful equity, though the choice depends on the debtor's full asset mix.

However, Virginia is an **opt-out** state that has chosen to allow debtors to use either state or federal exemptions but not both simultaneously. The debtor must elect one complete set of exemptions.

### Practical Implications for Licensees

As a Virginia licensee, the homestead exemption matters in several practical contexts:
- When working with sellers who have outstanding judgments, understand that the $50,000 principal-residence exemption shields meaningful (but not unlimited) equity, and any equity above that cushion remains exposed
- When advising buyers, understand that purchasing a home in Virginia does not provide the same creditor protection as purchasing in a state with an unlimited homestead exemption like Florida or Texas
- When working with estate planning or investor clients, remember that non-residence property is still capped at the older $5,000 + $500/dependent baseline, which may influence asset protection strategies
- Always recommend that clients with significant debt or creditor concerns consult a Virginia attorney who specializes in creditor rights or bankruptcy`,
        },
        {
          slug: 'government-powers-pete',
          title: 'Government Powers: PETE',
          lessonType: 'interactive',
          estimatedMinutes: 26,
          keyTerms: [
            'police power',
            'eminent domain',
            'taxation',
            'escheat',
            'PETE',
            'condemnation',
            'just compensation',
            'inverse condemnation',
            'ad valorem tax',
            'zoning',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Match each government action to the correct PETE power: zoning, property tax, highway construction, unclaimed estate',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify which government power is being exercised in each described scenario',
            },
            {
              type: 'scenario',
              prompt:
                'The city announces it will widen the road in front of your client\'s property, taking 15 feet of their front yard. What government power is being exercised, and what rights does the property owner have?',
            },
          ],
          content: `## Government Powers: PETE

Even the most complete form of private ownership (fee simple absolute) is subject to four government powers that limit what an owner can do with their property. These powers are remembered by the acronym **PETE**: Police power, Eminent domain, Taxation, and Escheat.

### P - Police Power

**Police power** is the government's authority to enact laws and regulations that protect the health, safety, morals, and general welfare of the public. Police power is the broadest of the four government powers and the one you will encounter most frequently in practice.

Examples of police power in real estate:
- **Zoning ordinances**: Regulate land use (residential, commercial, industrial)
- **Building codes**: Set minimum construction standards for safety
- **Health regulations**: Govern septic systems, well water, and sanitary conditions
- **Environmental regulations**: Restrict development in wetlands, floodplains, and Chesapeake Bay preservation areas
- **Subdivision regulations**: Control how land is divided and developed

In Virginia, police power is exercised at both the state and local levels. Virginia localities derive their police power authority from the Dillon Rule, which means local governments can only exercise powers expressly granted by the Virginia General Assembly. This is different from "home rule" states where local governments have broader independent authority.

**Key exam point**: Police power regulations do NOT require compensation to the property owner, even if the regulation reduces the property's value. This distinguishes police power from eminent domain. However, if a regulation goes so far that it effectively destroys all economic value of the property, the owner may have a claim for a **regulatory taking** under the Fifth Amendment.

### E - Eminent Domain

**Eminent domain** is the government's power to take private property for public use, provided the owner receives **just compensation**. This power is guaranteed by the Fifth Amendment to the U.S. Constitution ("nor shall private property be taken for public use, without just compensation") and Article I, Section 11 of the Virginia Constitution.

The process of exercising eminent domain is called **condemnation**. In Virginia, the condemnation process involves:
1. The government entity determines the property is needed for a public purpose
2. The property is appraised to determine fair market value
3. The owner is offered just compensation based on the appraisal
4. If the owner rejects the offer, the government files a condemnation action in circuit court
5. A panel of commissioners (or a jury if requested) determines just compensation

**Just compensation** is the fair market value of the property as of the date of the taking. It includes compensation for the land taken, any improvements destroyed, and any diminution in value to the remaining property (severance damages).

**Inverse condemnation** occurs when a government action effectively takes property without formally exercising eminent domain. The property owner must initiate the legal action to claim compensation. For example, if a government project diverts water flow and floods private property, the owner can bring an inverse condemnation claim.

Virginia amended its Constitution in 2012 (the Property Rights Amendment) to strengthen property owner protections. Under this amendment, "public use" is interpreted more narrowly, and the government cannot take property primarily for private economic development.

### T - Taxation

**Taxation** is the government's power to levy charges on real property to fund public services. In Virginia, real property taxes are assessed and collected at the local level.

Virginia real property taxes:
- Assessed based on fair market value (**ad valorem** taxation)
- Rates set by each locality's governing body
- Due dates and payment schedules vary by locality
- Property tax liens take priority over nearly all other liens (including mortgages)

### E - Escheat

**Escheat** is the government's power to take ownership of property when the owner dies without a will (intestate) and without any identifiable heirs. The property "escheats" to the state.

In Virginia, escheat is governed by Virginia Code Section 55.1-2500 et seq. If no heirs can be located after a diligent search, the property passes to the Commonwealth of Virginia. Escheat is relatively rare because Virginia's intestate succession laws are broad enough to include distant relatives, but it serves as a safety net ensuring that no property becomes ownerless.

### Summary Table

| Power | What It Does | Compensation Required? | Example |
|-------|-------------|----------------------|---------|
| Police power | Regulates use for public welfare | No | Zoning, building codes |
| Eminent domain | Takes property for public use | Yes (just compensation) | Highway expansion |
| Taxation | Levies charges to fund services | No (it IS the charge) | Annual property tax |
| Escheat | Claims property of those dying without heirs | No | State takes abandoned property |`,
        },
      ],
    },
    {
      slug: 'common-interest-ownership',
      title: 'Common Interest Communities',
      lessons: [
        {
          slug: 'virginia-condominium-act',
          title: 'Virginia Condominium Act',
          lessonType: 'reading',
          estimatedMinutes: 26,
          keyTerms: [
            'condominium',
            'Virginia Condominium Act',
            'common elements',
            'limited common elements',
            'unit owners association',
            'declaration',
            'bylaws',
            'condominium instruments',
            'resale certificate',
            'percentage interest',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Test your knowledge of the Virginia Condominium Act, including disclosure requirements and buyer cancellation rights',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each condominium term (common elements, limited common elements, declaration, bylaws) to its definition',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer receives a resale certificate for a Virginia condominium. The certificate reveals a pending special assessment of $15,000 per unit. What are the buyer\'s options?',
            },
          ],
          content: `## Virginia Condominium Act

The **Virginia Condominium Act** (Virginia Code Section 55.1-1900 et seq.) governs the creation, management, and sale of condominiums in Virginia. As a licensee, you must understand the Act's key provisions because condominiums represent a significant portion of Virginia's housing stock, particularly in Northern Virginia, Hampton Roads, and Richmond.

### What Is a Condominium?

A **condominium** is a form of ownership where an individual owns a specific unit within a larger building or complex, along with an undivided fractional interest in the common areas. The unit is real property owned in fee simple by the unit owner. The common areas are shared property owned collectively by all unit owners.

### Key Components of Condominium Ownership

**The Unit:**
The three-dimensional space described in the condominium instruments. The owner holds fee simple title to the interior of the unit and can sell, lease, mortgage, or will it like any other real property. The unit's boundaries are defined in the declaration, typically as the interior surfaces of the walls, floors, and ceilings.

**Common Elements:**
All portions of the condominium other than the units. This includes the land, building structure, hallways, lobbies, elevators, parking lots, swimming pools, fitness centers, and mechanical systems. All unit owners share ownership of common elements based on their **percentage interest**, which is assigned in the declaration and typically based on the unit's relative size or value.

**Limited Common Elements:**
Common elements reserved for the exclusive use of one or a limited number of unit owners. Examples include assigned parking spaces, storage lockers, balconies, and patios. The unit owner has exclusive use but does not separately own limited common elements.

### Condominium Instruments

A condominium is created by recording the following documents:

| Document | Purpose |
|----------|---------|
| **Declaration** | The master document that creates the condominium, defines units, assigns percentage interests, establishes rules |
| **Bylaws** | Govern the operation of the unit owners' association (voting procedures, board composition, meeting requirements) |
| **Plats and plans** | Survey and architectural drawings showing unit boundaries and common elements |

### The Unit Owners' Association

Every Virginia condominium must have a **unit owners' association (UOA)** responsible for managing the common elements, collecting assessments, enforcing rules, and maintaining insurance. The UOA is governed by a board of directors elected by the unit owners.

The UOA has the authority to:
- Levy regular and special assessments
- Enforce the declaration, bylaws, and rules
- Sue and be sued on behalf of the condominium
- Place liens on units for unpaid assessments

### Resale Disclosure Requirements

Under the Virginia Condominium Act, when a unit is resold, the seller must provide the buyer with a **resale certificate** (also called a disclosure packet) prepared by the association. The resale certificate must include:
- Current assessments and any pending special assessments
- The association's financial statements and budget
- The declaration, bylaws, and rules
- A statement of any pending lawsuits involving the association
- Information about the association's reserve fund
- Insurance coverage summary

The buyer has **three business days** after receiving the resale certificate to cancel the purchase contract. This cancellation right is mandatory under Virginia law and cannot be waived. If the buyer cancels within the three-day period, all deposits must be refunded.

### New Construction Disclosure

For new condominium units sold by the developer (declarant), the buyer is entitled to a **public offering statement** that includes detailed information about the project. The buyer has **10 calendar days** to cancel after receiving the public offering statement.

### Assessment Liens

If a unit owner fails to pay assessments, the association can file an assessment lien against the unit. Under the Virginia Condominium Act, assessment liens have priority over most other liens except:
- First deeds of trust or mortgages recorded before the assessment became delinquent
- Real property tax liens

However, the Act gives the association a **super-priority lien** for up to six months of unpaid assessments, which can take priority over even a first mortgage. This super-priority provision protects associations from losing all assessment revenue when a unit goes into foreclosure.`,
        },
        {
          slug: 'virginia-property-owners-association-act',
          title: 'Virginia Property Owners Association Act',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'Property Owners Association Act',
            'POA',
            'HOA',
            'declaration',
            'covenants',
            'assessment',
            'disclosure packet',
            'common area',
            'architectural review',
            'CICB',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Compare and contrast the Virginia POA Act with the Virginia Condominium Act regarding disclosure timelines and buyer rights',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each POA term to its definition and legal significance',
            },
          ],
          content: `## Virginia Property Owners Association Act

The **Virginia Property Owners Association Act** (POAA, Virginia Code Section 55.1-1800 et seq.) governs planned communities, subdivisions, and other residential developments where property owners are subject to a mandatory membership association with the power to levy assessments. If you sell homes in Virginia subdivisions with homeowners' associations, you must know this Act.

### What the POAA Covers

The POAA applies to communities where:
- A recorded declaration requires property owners to be members of an association
- The association has the authority to levy mandatory assessments
- Common areas, amenities, or shared infrastructure are maintained by the association

The POAA does NOT apply to condominiums (covered by the Virginia Condominium Act) or cooperatives (covered separately). A key distinction: in a condominium, the owner holds title to a unit within a larger structure. In a POA community, the owner holds title to a lot and the house built upon it, with shared ownership of common areas.

### Key Provisions

**Mandatory Assessments:**
The association can levy regular assessments (monthly or quarterly dues) and special assessments for capital improvements or unexpected expenses. Assessments must be authorized by the governing documents and approved according to the procedures in the bylaws.

**Assessment Liens:**
Like condominiums, POAs can place liens on properties for unpaid assessments. Under the POAA, assessment liens are enforceable through judicial sale. The association must provide notice to the property owner before filing a lien and before initiating foreclosure.

**Architectural Review:**
Most POA communities have an architectural review committee or architectural review board (ARB) that must approve exterior changes to properties. This includes additions, fences, paint colors, landscaping changes, and solar panel installations. Virginia Code Section 55.1-1820.1 specifically prohibits associations from completely banning solar panels, though they can impose reasonable aesthetic standards.

### Resale Disclosure Requirements

The POAA requires the seller to provide the buyer with a **disclosure packet** that includes:
- The declaration, bylaws, and rules of the association
- Current assessment amounts and any pending special assessments
- Financial statements and the current budget
- Information about pending litigation
- A statement of any fees or charges associated with the sale (transfer fees, move-in fees)
- The association's reserve study (if one exists)

The buyer has **three business days** after receiving the disclosure packet to cancel the contract. If the seller fails to provide the disclosure packet, the buyer may cancel at any time before closing.

### Comparison: POAA vs Virginia Condominium Act

| Feature | POAA (POA/HOA) | Virginia Condominium Act |
|---------|----------------|-------------------------|
| Type of ownership | Lot + house | Unit + percentage of common elements |
| Governing document | Declaration of covenants | Condominium declaration |
| Resale disclosure | Disclosure packet | Resale certificate |
| Buyer cancellation (resale) | 3 business days | 3 business days |
| Buyer cancellation (new) | 3 business days | 10 calendar days |
| Assessment lien | Judicial foreclosure | Judicial or nonjudicial (super-priority lien) |

### The Common Interest Community Board (CICB)

Virginia created the **Common Interest Community Board** (CICB) within DPOR to regulate common interest community managers. The CICB:
- Licenses and regulates community association managers
- Investigates complaints against community managers
- Does NOT directly regulate associations themselves but oversees the professionals who manage them

Professional community association managers who manage communities with more than a specified number of units must be licensed by DPOR. As a licensee, you should be aware that the CICB exists as a resource for clients with complaints about their community management company.

### Virginia Common Interest Community Ombudsman

Virginia also established the **Office of the Common Interest Community Ombudsman** (Virginia Code Section 55.1-1900.1) to assist property owners, associations, and boards with dispute resolution. The Ombudsman can:
- Receive and investigate complaints from association members
- Facilitate communication between owners and boards
- Refer disputes to mediation or appropriate legal channels

While the Ombudsman does not have the power to override association decisions or enforce compliance, it provides a valuable resource for property owners who feel their association is acting improperly.`,
        },
        {
          slug: 'timeshares-cooperative-ownership',
          title: 'Time-Shares and Cooperative Ownership',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'timeshare',
            'Virginia Real Estate Time-Share Act',
            'time-share estate',
            'time-share use',
            'cooperative',
            'proprietary lease',
            'shares of stock',
            'right of rescission',
            'exchange program',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Distinguish between a time-share estate (real property) and a time-share use (personal property/license)',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each ownership form (condo, co-op, timeshare) to its ownership structure and financing implications',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer signs a timeshare purchase contract at a resort presentation. Three days later, they have buyer\'s remorse. What are their rights under Virginia law?',
            },
          ],
          content: `## Time-Shares and Cooperative Ownership

Beyond condominiums and planned communities, Virginia law recognizes additional forms of shared property ownership: time-shares and cooperatives. Each has distinct legal structures, financing implications, and regulatory frameworks.

### Time-Share Ownership

A **time-share** grants the purchaser the right to use a property (typically a vacation resort unit) for a specified period each year. Virginia regulates time-shares under the **Virginia Real Estate Time-Share Act** (Virginia Code Section 55.1-2200 et seq.).

Virginia law recognizes two types of time-share interests:

**Time-Share Estate:**
The purchaser acquires an actual ownership interest in real property, typically as a tenant in common with other time-share purchasers, with the right to use a specific unit during a designated time period. Because this is a real property interest, it is conveyed by deed and recorded in the land records.

**Time-Share Use:**
The purchaser acquires only a contractual right (license) to use the property for a designated period. The purchaser does NOT receive a deed or an ownership interest in real property. A time-share use is personal property, not real property.

### Virginia Time-Share Consumer Protections

The Virginia Real Estate Time-Share Act provides significant consumer protections:

**Right of Rescission:**
Every time-share purchaser has the right to cancel the purchase within **seven calendar days** after the later of: (a) the date the contract was signed, or (b) the date the purchaser received the public offering statement. The purchaser can cancel for any reason by providing written notice to the developer. Upon cancellation, all deposits and payments must be refunded within 45 days.

**Public Offering Statement:**
The developer must provide a detailed public offering statement before the sale is completed. This document must include:
- Description of the time-share project and units
- Financial projections and assessment obligations
- A copy of the time-share instruments
- The cancellation rights in bold type
- Information about exchange programs (if any)

**Advertising and Sales Practices:**
The Act regulates time-share sales practices, prohibiting:
- Material misrepresentations about the time-share
- Failing to disclose the purchaser's cancellation rights
- Using high-pressure sales tactics after the purchaser has expressed a desire to leave
- Failing to honor cancellation requests

### Cooperative Ownership

A **cooperative** (co-op) is a form of shared ownership where a corporation owns the building and each resident purchases shares of stock in the corporation. Instead of a deed, the resident receives a **proprietary lease** granting the right to occupy a specific unit.

**Key characteristics of cooperative ownership:**

| Feature | Cooperative | Condominium |
|---------|------------|-------------|
| What the resident owns | Shares of stock + proprietary lease | Unit (real property) + percentage of common elements |
| How it's conveyed | Stock transfer | Deed |
| Type of property | Personal property (stock) | Real property |
| Financing | Co-op loan (personal property loan) | Mortgage (real property loan) |
| Taxes | One tax bill for entire building; residents pay proportional share through assessments | Individual tax bill for each unit |
| Board approval for sale | Usually required | Usually not required |

### Cooperatives in Virginia

Cooperatives are relatively uncommon in Virginia compared to condominiums. They are more prevalent in New York City, Washington D.C., and a few other major metropolitan areas. However, as a Virginia licensee, you should understand cooperative ownership because:

- Some properties in Northern Virginia (particularly near D.C.) are structured as cooperatives
- The national exam tests cooperative concepts extensively
- Financing cooperatives is more complex because lenders must accept shares of stock and a proprietary lease as collateral rather than a deed of trust on real property

**Board approval:** A distinguishing feature of cooperatives is that the board of directors typically has the right to approve or reject prospective purchasers. This approval power is broader than what condominium associations have, but it must comply with all fair housing laws. A co-op board cannot reject a buyer based on race, color, religion, national origin, sex, familial status, disability, or (under Virginia law) elderliness, sexual orientation, gender identity, veteran status, or source of funds.

### Practical Licensing Implications

As a Virginia licensee:
- Time-share resales require a Virginia real estate license (for time-share estates)
- Cooperative resales may or may not require a real estate license depending on how the transaction is structured (stock transfer vs. real property conveyance)
- Always verify the ownership structure before listing or showing a property, as it affects financing options, closing procedures, and the documents required`,
        },
      ],
    },
  ],
}

// ── Module 8: Liens, Encumbrances & Title ──────────────────────────────────────

const module8: CourseModule = {
  slug: 'liens-encumbrances-title',
  title: 'Liens, Encumbrances & Title',
  subtitle:
    'Property liens, easements, title searches, recording statutes, and title insurance',
  examWeight: '12% of national exam',
  chapters: [
    {
      slug: 'liens',
      title: 'Liens',
      lessons: [
        {
          slug: 'voluntary-vs-involuntary-liens',
          title: 'Voluntary vs Involuntary Liens',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'lien',
            'voluntary lien',
            'involuntary lien',
            'statutory lien',
            'equitable lien',
            'deed of trust',
            'mortgage',
            'lien theory',
            'title theory',
            'encumbrance',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Classify each lien as voluntary or involuntary and explain why',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify whether each described lien was created voluntarily by the owner or imposed involuntarily by law',
            },
          ],
          content: `## Voluntary vs Involuntary Liens

A **lien** is a claim against property that serves as security for the payment of a debt or obligation. Liens are a fundamental concept in real estate because they affect a property's title, its marketability, and the priority of claims if the property is sold or foreclosed. Understanding liens is critical for both portions of your licensing exam.

### What Is a Lien?

A lien does not give the lienholder ownership of the property. Instead, it gives the lienholder the right to force a sale of the property (through foreclosure or judicial sale) if the underlying debt is not paid. A lien is a type of **encumbrance**, meaning it is a claim, charge, or liability attached to the property that may diminish its value or affect its use but does not necessarily prevent the transfer of title.

### Voluntary Liens

A **voluntary lien** is a lien that the property owner willingly places on the property, typically as security for a loan. The most common voluntary lien is a mortgage or deed of trust.

**Deed of Trust (Virginia's Primary Instrument):**
Virginia is a **lien theory** state. However, Virginia uses **deeds of trust** (three-party instruments) rather than mortgages as the primary residential security instrument, which some texts describe as 'intermediate' or 'modified' lien theory. In a deed of trust arrangement:
- The **borrower (grantor/trustor)** conveys bare legal title to a **trustee**
- The trustee holds title for the benefit of the **lender (beneficiary)**
- If the borrower defaults, the trustee can conduct a **non-judicial foreclosure** (sale at public auction without going to court)
- If the borrower pays the loan in full, the trustee reconveys title to the borrower

**Mortgage (Less Common in Virginia):**
In a mortgage, the borrower gives the lender a lien interest in the property. If the borrower defaults, the lender must pursue **judicial foreclosure** (a court proceeding). Mortgages are less common in Virginia because deeds of trust allow faster, less expensive foreclosure.

**Home Equity Loans and Lines of Credit:**
Second deeds of trust or home equity lines of credit (HELOCs) are also voluntary liens. They are subordinate to the first deed of trust in priority.

### Involuntary Liens

An **involuntary lien** is imposed on the property by operation of law, without the owner's consent. Involuntary liens arise from unpaid debts, taxes, or legal judgments.

Common involuntary liens include:

| Lien Type | Created By | Example |
|-----------|-----------|---------|
| Property tax lien | Local government | Unpaid annual property taxes |
| Federal tax lien | IRS | Unpaid federal income taxes |
| State tax lien | Virginia Department of Taxation | Unpaid state income taxes |
| Mechanic's lien | Contractor/supplier | Unpaid construction or improvement work |
| Judgment lien | Court | Money judgment from a lawsuit |
| HOA assessment lien | Association | Unpaid homeowners' association dues |

### Statutory vs Equitable Liens

Liens can also be classified by their legal basis:

**Statutory liens** are created by statute (law). Property tax liens, mechanic's liens, and HOA assessment liens are all statutory because specific laws authorize their creation and define their enforcement procedures.

**Equitable liens** are imposed by courts based on fairness and equity principles. If a court determines that one party has been unjustly enriched at another's expense in connection with real property, it can impose an equitable lien. These are relatively rare and arise from specific factual circumstances.

### Why Liens Matter to Licensees

As a Virginia licensee, liens directly affect your transactions:
- Liens must be satisfied (paid off) before or at closing for the buyer to receive clear title
- A title search reveals existing liens against the property
- Title insurance protects against undiscovered liens
- A property with multiple liens may have insufficient equity to pay all lienholders, complicating the sale
- You must advise sellers to disclose known liens and work with the settlement agent to address lien payoffs at closing`,
        },
        {
          slug: 'lien-priority-specific-vs-general',
          title: 'Specific vs General Liens & Lien Priority',
          lessonType: 'interactive',
          estimatedMinutes: 26,
          keyTerms: [
            'specific lien',
            'general lien',
            'lien priority',
            'first in time first in right',
            'subordination agreement',
            'super-priority lien',
            'ad valorem tax lien',
            'recording date',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Arrange the following liens in order of priority: property tax lien, first deed of trust, mechanic\'s lien, judgment lien, second deed of trust',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Determine which lienholder gets paid first in each foreclosure scenario',
            },
            {
              type: 'scenario',
              prompt:
                'A property sells at foreclosure for $300,000. Outstanding liens: $10,000 in unpaid property taxes, $250,000 first deed of trust, $80,000 second deed of trust, $25,000 judgment lien. How is the $300,000 distributed?',
            },
          ],
          content: `## Specific vs General Liens & Lien Priority

Understanding the scope of liens (specific vs general) and the order in which they are paid (priority) is essential for advising clients and working with settlement agents.

### Specific Liens

A **specific lien** attaches to one particular property. If the debt is unpaid, only the specific property can be sold to satisfy the lien. Common specific liens include:

- **Deed of trust / mortgage**: Attaches only to the property used as collateral
- **Property tax lien**: Attaches only to the property on which taxes are owed
- **Mechanic's lien**: Attaches only to the property that was improved
- **HOA assessment lien**: Attaches only to the unit or lot in the association

### General Liens

A **general lien** attaches to all property owned by the debtor, both real and personal. If the debt is unpaid, any of the debtor's property can potentially be seized. Common general liens include:

- **Judgment liens**: A court judgment for money damages becomes a general lien when properly recorded. In Virginia, a judgment lien attaches to all real property the debtor owns in the jurisdiction where the judgment is docketed
- **Federal tax liens**: The IRS can place a lien on all property owned by a delinquent taxpayer
- **State tax liens**: Virginia can place a lien on all property owned by a delinquent taxpayer

| Lien Type | Scope | Attaches To |
|-----------|-------|-------------|
| Deed of trust | Specific | The mortgaged property only |
| Property tax | Specific | The taxed property only |
| Mechanic's lien | Specific | The improved property only |
| Judgment lien | General | All real property in the jurisdiction |
| Federal tax lien | General | All property of the taxpayer |

### Lien Priority

**Lien priority** determines the order in which lienholders are paid when a property is sold, foreclosed, or otherwise disposed of. The general rule is **first in time, first in right**: the first lien recorded has the highest priority and is paid first from the sale proceeds.

**Priority Order in Virginia:**

1. **Real property tax liens** (always first priority regardless of recording date)
2. **Special assessment liens** (for public improvements such as sidewalks and sewers)
3. **Federal tax liens** (priority depends on recording date relative to other liens)
4. **First deed of trust** (recorded first among voluntary liens)
5. **Mechanic's liens** (priority relates back to the date work commenced or materials were delivered)
6. **Judgment liens** (priority based on docketing date)
7. **Second deed of trust** and subordinate deeds of trust
8. **Other liens** (in order of recording)

**Critical exception**: Property tax liens and special assessment liens always have **super-priority status** in Virginia. They are paid first regardless of when they were recorded or when other liens were placed on the property. This means that even a first deed of trust recorded before taxes became delinquent is subordinate to a property tax lien.

### Subordination Agreements

A **subordination agreement** is a contract in which a lienholder voluntarily agrees to reduce their lien priority. The most common scenario involves a construction loan:

1. Buyer purchases land with a first deed of trust
2. Buyer obtains a construction loan to build a house
3. The construction lender requires the land lender to subordinate (agree that the construction loan will have first priority)
4. The land lender signs a subordination agreement, moving to second position

Subordination agreements must be in writing, signed, and recorded to be effective against third parties.

### How Priority Affects Foreclosure

When a property is foreclosed by a lienholder, that lienholder's position determines what happens to other liens:
- Liens with **higher priority** survive the foreclosure (the buyer takes the property subject to those liens)
- Liens with **lower priority** are extinguished by the foreclosure (those lienholders lose their claims against the property)
- The foreclosing lienholder is paid from the sale proceeds after higher-priority liens are satisfied

This is why lenders always require title searches before making loans and why title insurance exists: an undiscovered prior lien could take priority over the lender's deed of trust.`,
        },
        {
          slug: 'mechanics-liens-virginia',
          title: "Mechanic's Liens in Virginia",
          lessonType: 'reading',
          estimatedMinutes: 30,
          keyTerms: [
            "mechanic's lien",
            'materialman lien',
            'Virginia Code 43-1',
            'perfecting a lien',
            'memorandum of lien',
            'lien claimant',
            'general contractor',
            'subcontractor',
            'commencement of work',
            'notice of intent',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                "Test your knowledge of Virginia mechanic's lien filing deadlines, notice requirements, and enforcement procedures",
            },
            {
              type: 'scenario',
              prompt:
                "A subcontractor completed plumbing work on a new home 100 days ago but has not been paid by the general contractor. Can the subcontractor file a mechanic's lien against the property owner?",
            },
            {
              type: 'flashcard',
              prompt:
                "Match each mechanic's lien deadline to the correct time period under Virginia law",
            },
          ],
          content: `## Mechanic's Liens in Virginia

A **mechanic's lien** (also called a **materialman's lien**) is a statutory lien that protects contractors, subcontractors, laborers, and material suppliers who provide work or materials to improve real property but are not paid. Virginia's mechanic's lien statute (Virginia Code Sections 43-1 through 43-23) provides the framework for creating, perfecting, and enforcing these liens.

### Who Can File a Mechanic's Lien in Virginia?

Under Virginia Code Section 43-3, the following parties can file a mechanic's lien:
- **General contractors** who contract directly with the property owner
- **Subcontractors** who contract with the general contractor
- **Laborers** who perform work on the property
- **Material suppliers** who furnish materials incorporated into the improvement

The key requirement is that the work or materials must have been used to improve real property. The improvement can include new construction, renovation, repair, or demolition.

### Filing Requirements and Deadlines

Virginia imposes strict deadlines for filing a mechanic's lien. Missing a deadline destroys the lien right entirely.

**General contractors** (parties who contract directly with the property owner):
- Must file a **memorandum of mechanic's lien** in the clerk's office of the circuit court where the property is located within **90 days** from the last day of the month in which the work was last performed or materials last furnished

**Subcontractors and material suppliers** (parties who do NOT contract directly with the owner):
- Virginia subcontractors must file their memorandum of lien within **90 days** after the last day of the month in which the work was performed (Va. Code §43-4). Subcontractors may serve preliminary notices under §43-7 and §43-9 to affect the owner's liability cap, but there is no separate 150-day notice of intent prerequisite.

**The memorandum of lien must contain:**
- The name of the property owner
- The name of the lien claimant
- The amount claimed
- A description of the property (sufficient for identification)
- A brief statement of the terms of the contract
- The date work was last performed or materials last furnished

### Lien Priority: The Relation-Back Doctrine

Virginia mechanic's liens enjoy a special priority rule called the **relation-back doctrine**. Under Virginia Code Section 43-21, a mechanic's lien relates back to the time when work first commenced or materials were first delivered to the property. This means a mechanic's lien filed after a deed of trust may still have priority if the construction work began before the deed of trust was recorded.

**Example:** A contractor begins foundation work on January 15. On February 1, the property owner records a deed of trust. On March 10, the contractor files a mechanic's lien. The mechanic's lien relates back to January 15 and has priority over the February 1 deed of trust.

This relation-back doctrine is why construction lenders require title searches both before construction begins and at various points during construction.

### Enforcing a Mechanic's Lien

Filing the memorandum of lien creates the lien, but enforcing it requires a lawsuit:
- The lien claimant must file a lawsuit to enforce the lien within **six months** from the date the memorandum was recorded (Virginia Code Section 43-17)
- If the suit is not filed within six months, the lien expires automatically
- The lawsuit is filed in the circuit court where the property is located
- If the court finds the lien valid, it can order the property sold to satisfy the lien

### Protecting Property Owners

Virginia law provides some protections for property owners who have paid the general contractor in full but face liens from unpaid subcontractors:

- The property owner's total liability to all lien claimants cannot exceed the total contract price
- If the owner can prove they paid the general contractor the full amount, the owner's exposure to subcontractor liens is limited
- Property owners can require contractors to provide **lien waivers** from subcontractors as work progresses, reducing the risk of later lien claims

### Practical Implications

As a licensee, mechanic's liens affect your transactions when:
- A seller recently completed renovations and unpaid contractors may file liens
- A buyer is purchasing new construction and wants assurance that all contractors have been paid
- A title search reveals a mechanic's lien that must be resolved before closing
- A client is a contractor or developer who needs to understand their lien rights`,
        },
        {
          slug: 'tax-judgment-hoa-liens',
          title: 'Tax Liens, Judgment Liens & HOA Assessment Liens',
          lessonType: 'interactive',
          estimatedMinutes: 26,
          keyTerms: [
            'ad valorem tax',
            'tax sale',
            'tax lien certificate',
            'judgment lien',
            'docketing',
            'HOA assessment lien',
            'super-priority lien',
            'lis pendens',
            'abstract of judgment',
            'writ of fieri facias',
          ],
          interactiveElements: [
            {
              type: 'drag_drop',
              prompt:
                'Match each lien type to its creation method, priority status, and enforcement procedure',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Determine the lien priority in scenarios involving overlapping tax, judgment, and HOA liens',
            },
            {
              type: 'scenario',
              prompt:
                'A homeowner owes $8,000 in back taxes, $5,000 to the HOA, and has a $50,000 judgment against them. The property value is $200,000 with a $150,000 first deed of trust. Which creditors will be fully paid at foreclosure?',
            },
          ],
          content: `## Tax Liens, Judgment Liens & HOA Assessment Liens

These three involuntary lien types appear frequently on the licensing exam and in real-world Virginia transactions. Each has specific rules regarding creation, priority, and enforcement.

### Property Tax Liens

Virginia localities assess real property taxes based on the property's fair market value (**ad valorem** taxation). When a property owner fails to pay property taxes, the locality has an automatic lien on the property.

**Key characteristics of Virginia property tax liens:**
- Attach automatically on the date the taxes become due (no recording required)
- Have **super-priority status**: property tax liens take priority over ALL other liens, including previously recorded deeds of trust
- The locality can enforce the lien through a **tax sale** of the property
- Virginia Code Section 58.1-3965 et seq. governs the tax sale process

**Virginia Tax Sale Process:**
1. The local treasurer sends delinquency notices to the property owner
2. After a specified delinquency period, the property is listed for tax sale
3. The sale is conducted as a public auction at the courthouse
4. The high bidder receives the property subject to a **redemption period** (the former owner can reclaim the property by paying all delinquent taxes, penalties, interest, and costs within a specified time)
5. If the redemption period expires without redemption, the purchaser receives a tax deed

**Federal tax liens** filed by the IRS are also significant. Under the Federal Tax Lien Act, a federal tax lien attaches to all property of the taxpayer from the date of assessment but is not effective against certain third parties (such as purchasers and holders of security interests) until the IRS files a Notice of Federal Tax Lien in the appropriate recording office.

### Judgment Liens

A **judgment lien** arises when a person wins a monetary judgment in a lawsuit and properly records (dockets) the judgment. In Virginia:

- A judgment becomes a lien on the debtor's real property when a **writ of fieri facias** (fi. fa.) is docketed in the clerk's office of the circuit court of the jurisdiction where the property is located
- The judgment lien attaches to all real property the debtor owns in that jurisdiction
- Under Virginia Code Section 8.01-251, a judgment lien remains effective for **20 years** from the date of docketing (can be renewed)
- The creditor can enforce the judgment lien by requesting a judicial sale of the property

**Judgment lien priority** is determined by the date of docketing: the earlier the docketing date, the higher the priority relative to other judgment liens and subsequently recorded voluntary liens.

**Lis pendens**: A **lis pendens** (notice of pending litigation) is not a lien itself, but it provides constructive notice that a lawsuit affecting title to specific property is pending. In Virginia, a lis pendens is recorded in the land records and warns prospective purchasers and lenders that the property's title may be affected by the lawsuit's outcome.

### HOA and Condominium Assessment Liens

When property owners fail to pay mandatory association assessments, the association can place a lien on the property.

**Under the Virginia Condominium Act:**
- The association has an automatic lien for unpaid assessments
- The lien has a **super-priority** component: up to six months of unpaid assessments take priority over even a first deed of trust
- The remaining assessment amount is subordinate to the first deed of trust
- The association can foreclose on the lien through nonjudicial sale

**Under the Virginia POAA (for HOAs):**
- The association can record a lien for unpaid assessments
- The lien does NOT have super-priority status (it is subordinate to first deeds of trust)
- Enforcement requires judicial foreclosure (the association must file a lawsuit and obtain a court order)
- The association must provide the property owner with written notice at least 60 days before filing a lien

### Priority Summary Table

| Lien Type | Priority | Enforcement | Duration |
|-----------|----------|-------------|----------|
| Property tax lien | First (super-priority) | Tax sale | Until taxes paid |
| First deed of trust | Based on recording date | Non-judicial foreclosure (VA) | Until loan paid |
| Mechanic's lien | Relates back to work start | Judicial sale (6-month deadline) | 6 months to enforce |
| Judgment lien | Based on docketing date | Judicial sale | 20 years (renewable) |
| Condo assessment (super-priority portion) | Above first deed of trust for 6 months | Nonjudicial or judicial | Until paid |
| HOA assessment | Below first deed of trust | Judicial foreclosure | Until paid |

### Practical Implications for Licensees

As a Virginia licensee, you encounter these liens regularly:
- Title searches before closing reveal existing liens that must be satisfied
- Sellers with tax delinquencies must resolve them at or before closing
- Properties with judgment liens may require negotiation with judgment creditors
- HOA assessment delinquencies can delay or prevent closing
- Always coordinate with the settlement agent and title company to ensure all liens are properly addressed before closing`,
        },
      ],
    },
    {
      slug: 'encumbrances',
      title: 'Encumbrances',
      lessons: [
        {
          slug: 'easements-appurtenant-in-gross',
          title: 'Easements: Appurtenant vs In Gross, Creation Methods',
          lessonType: 'reading',
          estimatedMinutes: 28,
          keyTerms: [
            'easement',
            'easement appurtenant',
            'easement in gross',
            'dominant tenement',
            'servient tenement',
            'grant',
            'reservation',
            'runs with the land',
            'affirmative easement',
            'negative easement',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each easement type to its characteristics and identify the dominant and servient tenements',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Classify each described easement as appurtenant or in gross and explain the legal consequences',
            },
            {
              type: 'scenario',
              prompt:
                'Property A has an easement to use a driveway across Property B to reach the road. Property A is sold. Does the easement transfer to the new owner?',
            },
          ],
          content: `## Easements: Appurtenant vs In Gross, Creation Methods

An **easement** is a non-possessory interest in another person's land that grants the right to use that land for a specific purpose. Easements are one of the most commonly tested topics on the real estate licensing exam and one of the most frequently encountered encumbrances in practice.

### Types of Easements by Relationship

**Easement Appurtenant:**
An easement appurtenant benefits a particular parcel of land (the **dominant tenement**) and burdens another parcel (the **servient tenement**). The easement is attached to the land, not to the individual owners.

Key characteristics:
- Requires two parcels of land owned by different parties
- **Runs with the land**: when either property is sold, the easement transfers automatically to the new owner
- The dominant tenement benefits from the easement
- The servient tenement bears the burden of the easement

**Example:** Property A is landlocked. The owner of Property A has an easement to cross Property B to reach the public road. Property A is the dominant tenement (it benefits). Property B is the servient tenement (it is burdened). If Property A is sold, the new owner automatically has the easement. If Property B is sold, the new owner takes the property subject to the easement.

**Easement In Gross:**
An easement in gross benefits a specific person or entity rather than a parcel of land. There is a servient tenement but no dominant tenement.

Key characteristics:
- Only one parcel of land is involved (the servient tenement)
- Benefits an individual or entity, not a piece of land
- **Commercial easements in gross** (utility easements, pipeline easements) are generally transferable
- **Personal easements in gross** (a neighbor's right to fish in your pond) are generally NOT transferable and terminate when the holder dies

**Example:** Dominion Energy has an easement across your property for power lines. Your property is the servient tenement. There is no dominant tenement because Dominion Energy is a company, not a piece of land. This is a commercial easement in gross.

### Types of Easements by Effect

**Affirmative easement**: Gives the holder the right to DO something on the servient land (cross it, run pipes under it, park on it).

**Negative easement**: Prevents the servient landowner from doing something on their own land (blocking a view, obstructing light, or building above a certain height). Negative easements are less common and harder to create.

### Methods of Creating Easements

| Method | Description | Requirements |
|--------|-------------|-------------|
| **Express grant** | Owner of the servient tenement conveys the easement in writing | Written document, signed, recorded |
| **Express reservation** | Owner selling a portion of their land reserves an easement over the sold portion | Language in the deed reserving the easement |
| **Implication** | Easement implied from prior use when a single parcel is divided | Prior use apparent, continuous, reasonably necessary |
| **Necessity** | Created when a parcel is landlocked with no other legal access | Absolute necessity, typically from a land division |
| **Prescription** | Acquired through continuous, open, adverse use over a statutory period | Similar to adverse possession requirements |
| **Condemnation** | Government takes an easement through eminent domain | Public purpose, just compensation |
| **Dedication** | Owner dedicates land for public use (roads, utilities) | Express or implied dedication, public acceptance |

### Virginia-Specific Easement Law

Virginia follows the Statute of Frauds, requiring most easements to be in writing to be enforceable. However, easements by implication, necessity, and prescription are exceptions created by court action.

Virginia's prescriptive easement period is **20 years** of continuous, open, notorious, adverse, and exclusive use under a claim of right. This is longer than many states and is tested on the Virginia portion of the exam.

Under Virginia Code Section 55.1-300 et seq., easements can be created and recorded in the land records of the jurisdiction where the property is located. Properly recorded easements provide constructive notice to all subsequent purchasers and lienholders.

### Termination of Easements

Easements can be terminated by:
- **Release**: The easement holder signs a written release
- **Merger**: The dominant and servient tenements come under common ownership
- **Abandonment**: The holder demonstrates a clear intent to abandon (non-use alone is usually insufficient)
- **Expiration**: The easement term expires (if created for a limited duration)
- **Condemnation**: The government condemns the servient tenement
- **Destruction**: The servient tenement is destroyed (applies to building-related easements)`,
        },
        {
          slug: 'easements-necessity-prescription-implication',
          title: 'Easements by Necessity, Prescription & Implication',
          lessonType: 'scenario',
          estimatedMinutes: 26,
          keyTerms: [
            'easement by necessity',
            'easement by prescription',
            'easement by implication',
            'landlocked parcel',
            'prescriptive period',
            'open and notorious',
            'adverse use',
            'continuous use',
            'prior existing use',
            'quasi-easement',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A property owner has crossed their neighbor\'s land via a dirt path to reach the road for 25 years without permission. The neighbor now wants to block the path. Does the property owner have any legal right?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Determine which type of non-express easement applies in each factual scenario',
            },
            {
              type: 'drag_drop',
              prompt:
                'Match each easement creation method to its required elements',
            },
          ],
          content: `## Easements by Necessity, Prescription & Implication

While most easements are created by express written agreement, three important categories arise without a written instrument. These easements are created by operation of law or court order based on the circumstances of the property and its use.

### Easement by Necessity

An **easement by necessity** is created when a parcel of land has no legal access to a public road. This most commonly occurs when a larger parcel is divided and one of the resulting parcels is landlocked.

**Requirements for an easement by necessity:**
1. A single parcel was divided, resulting in one parcel without road access
2. The need for access existed at the time of the division
3. The necessity is genuine (the parcel truly has no other legal means of access)

**Important characteristics:**
- The easement is implied by law to prevent land from being useless
- It can only be established over the land from which the landlocked parcel was originally separated (or land that was part of the same original tract)
- The easement exists only as long as the necessity exists. If the landlocked owner acquires adjacent property that provides road access, the easement by necessity terminates
- The location and scope of the easement are determined by what is reasonably necessary for access

**Virginia approach:** Virginia courts recognize easements by necessity and apply a strict necessity standard. The claimant must prove that the parcels share a common grantor (were part of the same original tract) and that the necessity for access arose from the division of that tract.

### Easement by Prescription

An **easement by prescription** (prescriptive easement) is similar to adverse possession but applies to use of land rather than ownership. It is acquired when someone uses another person's property openly, continuously, and without permission for the statutory period.

**Requirements in Virginia (all must be met):**
1. **Open and notorious**: The use must be visible and obvious, not hidden or secret. The property owner could have discovered the use by reasonable inspection
2. **Continuous and uninterrupted**: The use must be consistent for the entire prescriptive period (not sporadic or occasional). Seasonal use can qualify if it is regular and consistent with the nature of the use
3. **Adverse / Hostile**: The use must be without the property owner's permission. If the owner grants permission, the use becomes a license, not a prescriptive use. This is why many property owners periodically grant written permission to users or post signs saying "use permitted, not a right"
4. **Under claim of right**: The user must act as if they have a right to the use
5. **For the statutory period**: In Virginia, the prescriptive period is **20 years**

**Key distinction from adverse possession:** A prescriptive easement gives only the right to use the property for a specific purpose. Adverse possession, if successful, transfers actual ownership. Virginia's adverse possession period is 15 years for actual, continuous, hostile, exclusive, and visible possession under claim of right.

**Practical tip:** Property owners can defeat a prescriptive easement claim by granting written permission for the use, posting the land as private, or physically blocking the use before the prescriptive period is completed.

### Easement by Implication

An **easement by implication** (also called an implied easement) arises when a single parcel is divided and the prior use of one part of the property by the other part was so apparent and continuous that the parties must have intended the use to continue after the division.

**Requirements for an easement by implication:**
1. **Unity of ownership**: The dominant and servient parcels were once owned by the same person
2. **Prior existing use**: Before the division, one part of the property was used in a way that served the other part (a quasi-easement)
3. **Apparent and continuous**: The prior use was visible (or discoverable upon reasonable inspection) and ongoing
4. **Reasonably necessary**: The easement is reasonably necessary for the enjoyment of the dominant parcel (the standard is reasonable necessity, not strict necessity)

**Example:** Owner has a large lot with a house and a detached garage. A sewer line runs from the house, under the area near the garage, to the street. Owner sells the garage portion. Even if the deed does not mention the sewer line, the buyer of the house portion likely has an implied easement to continue using the sewer line under the garage portion.

### Comparison Table

| Feature | Necessity | Prescription | Implication |
|---------|-----------|-------------|-------------|
| Common ownership required? | Yes (same original tract) | No | Yes |
| Writing required? | No (created by law) | No (created by law) | No (created by law) |
| Standard of need | Strict necessity | No necessity required | Reasonable necessity |
| Time element | None (arises at division) | 20 years in Virginia | None (arises at division) |
| Permission | Not applicable | Must be WITHOUT permission | Not applicable |
| Terminates when | Necessity ends | Never (unless abandoned/released) | If use becomes unnecessary |`,
        },
        {
          slug: 'encroachments-licenses-profits',
          title: 'Encroachments, Licenses & Profits',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'encroachment',
            'license',
            'profit a prendre',
            'revocable',
            'irrevocable license',
            'trespass',
            'prescriptive right',
            'estoppel',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Distinguish between an easement, a license, a profit, and an encroachment based on their legal characteristics',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify whether each scenario describes an encroachment, license, profit, or easement',
            },
          ],
          content: `## Encroachments, Licenses & Profits

Beyond liens and easements, several other types of interests and conditions affect real property. Understanding encroachments, licenses, and profits is important for both the licensing exam and for advising clients in transactions where these issues arise.

### Encroachments

An **encroachment** occurs when a structure, building, fence, or other improvement extends beyond the property boundary line and onto an adjacent property. Encroachments are discovered through surveys and are a common source of disputes between neighbors.

**Common types of encroachments:**
- A fence built beyond the property line
- A building addition that extends over the boundary
- Tree branches or root systems that cross into adjacent property
- A driveway that partially occupies a neighbor's land
- Roof eaves or gutters that overhang the property line

**Legal remedies for encroachments:**
- **Negotiation**: The parties agree to a license, easement, or purchase of the encroaching area
- **Injunction**: A court order requiring removal of the encroachment
- **Damages**: Monetary compensation for the trespass
- **Adverse possession or prescriptive easement**: If the encroachment continues long enough, the encroaching party may acquire legal rights

**Virginia approach:** Virginia courts can order removal of an encroachment if it constitutes a trespass. However, courts balance the harm to the encroaching party against the harm to the property owner. If the encroachment is minor (a few inches of fence), a court may award damages rather than order removal. If the encroachment is significant, removal is more likely to be ordered.

**Practical implications for licensees:** Always recommend that buyers obtain a current survey before closing. A survey will reveal encroachments that may not be visible during a property showing. Existing survey exceptions are typically listed in the title commitment, and title insurance may exclude coverage for encroachments shown on the survey.

### Licenses

A **license** is permission to use another person's property for a specific purpose. Unlike an easement, a license is:

- **Revocable**: The property owner can revoke the license at any time (with limited exceptions)
- **Personal**: A license does not run with the land and does not transfer to a new owner
- **Not an interest in land**: A license does not create a property right; it is merely permission

**Common examples of licenses:**
- A neighbor giving permission to park in their driveway
- A property owner allowing a friend to hunt on their land
- A ticket to a sporting event (a license to enter the venue)
- A verbal agreement allowing someone to cross your property

**Irrevocable license (license by estoppel):** In some cases, a license can become irrevocable if the licensee has reasonably relied on the license and invested substantial money or effort. For example, if a property owner tells a neighbor "You can use my driveway permanently" and the neighbor paves the driveway at significant expense, a court may rule that the license cannot be revoked because revocation would be unjust. This is called a license coupled with estoppel.

**Key exam distinction:** An easement is a property interest that runs with the land. A license is personal permission that can be revoked. If you see "permission" or "revocable" on the exam, think license. If you see "runs with the land" or "permanent right," think easement.

### Profits (Profit a Prendre)

A **profit a prendre** (commonly called a "profit") is the right to enter another person's land and remove something of value from the soil or the land itself. A profit is similar to an easement but includes the additional right to take resources.

**Examples of profits:**
- The right to extract minerals from another person's property
- The right to harvest timber from another person's land
- The right to hunt or fish on another person's property and take game
- The right to extract gravel, sand, or topsoil

**Key characteristics:**
- A profit can be appurtenant (benefiting a specific parcel) or in gross (benefiting an individual)
- Commercial profits in gross are generally transferable
- A profit includes an implied easement to enter the land (you cannot remove minerals without access)
- Profits are created and terminated by the same methods as easements

In Virginia, profits are recognized under common law and are subject to the same Statute of Frauds requirements as easements (must be in writing for express creation). Mineral rights, discussed earlier in this module, are often structured as profits when the mineral owner does not hold a fee interest in the subsurface.`,
        },
        {
          slug: 'restrictive-covenants',
          title: 'Restrictive Covenants: Creation, Enforcement & Termination',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'restrictive covenant',
            'deed restriction',
            'CC&Rs',
            'covenant running with the land',
            'equitable servitude',
            'general plan of development',
            'changed conditions doctrine',
            'privity of estate',
            'touch and concern',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Determine whether each restrictive covenant is enforceable under Virginia law and identify any grounds for termination',
            },
            {
              type: 'scenario',
              prompt:
                'A subdivision deed restricts all lots to single-family residential use. The area has gradually become commercial over 20 years. Can a lot owner build a retail store despite the restriction?',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each method of terminating a restrictive covenant to its definition and requirements',
            },
          ],
          content: `## Restrictive Covenants: Creation, Enforcement & Termination

**Restrictive covenants** (also called deed restrictions or CC&Rs, for Covenants, Conditions & Restrictions) are private limitations placed on the use of real property by a developer, previous owner, or association. Unlike government zoning (which is a public restriction), restrictive covenants are private agreements that run with the land and bind future owners.

### Creation of Restrictive Covenants

Restrictive covenants are created by:

**Declaration or deed:** A developer records a declaration establishing restrictions for an entire subdivision. Every lot sold in the subdivision is subject to these restrictions, which are referenced in each individual deed. This is the most common method.

**Individual deed restriction:** A grantor includes a specific restriction in a deed. For example: "The property shall not be used for commercial purposes." This restriction binds the grantee and, if it meets the requirements, subsequent owners.

### Requirements for Covenants to Run with the Land

For a restrictive covenant to bind future owners (to "run with the land"), the following elements must be present:

1. **Writing**: The covenant must be in a written document (deed or recorded declaration)
2. **Intent**: The original parties must have intended the covenant to bind successors
3. **Touch and concern**: The covenant must relate to the use, enjoyment, or value of the land (not purely personal obligations)
4. **Privity of estate**: There must be a sufficient legal relationship between the parties (horizontal privity between the original parties, vertical privity between original party and successor)
5. **Notice**: Subsequent purchasers must have actual or constructive notice (recording provides constructive notice)

### Common Restrictive Covenants in Virginia

Virginia subdivisions and planned communities commonly include restrictions on:
- Minimum lot size and setback requirements
- Single-family residential use only (no commercial or multi-family)
- Architectural standards (building materials, height, style)
- Prohibition of certain structures (fences, sheds, above-ground pools)
- Animal restrictions (number and type of pets)
- Parking restrictions (no commercial vehicles, RVs, or boats visible from the street)
- Maintenance standards (lawn care, exterior upkeep)

### Enforcement of Restrictive Covenants

Restrictive covenants are enforced through civil lawsuits filed by:
- The HOA or POA (if the covenant is part of a community declaration)
- Individual property owners within the subdivision (if the covenant was established as part of a general plan of development)
- The original grantor or the grantor's successors

**Remedies available:**
- **Injunction**: A court order requiring the violator to comply with or cease violating the covenant
- **Damages**: Monetary compensation for the harm caused by the violation
- **Declaratory judgment**: A court ruling on the interpretation or validity of the covenant

### Termination of Restrictive Covenants

Restrictive covenants can be terminated through several methods:

| Method | Description |
|--------|-------------|
| **Expiration** | The covenant contains a stated duration that has elapsed |
| **Release** | All parties with the right to enforce the covenant agree to release it |
| **Merger** | The dominant and servient properties come under common ownership |
| **Changed conditions** | The neighborhood has changed so substantially that the covenant no longer serves its original purpose |
| **Abandonment** | Widespread, long-term non-enforcement throughout the community demonstrates abandonment |
| **Government action** | Eminent domain or a zoning change that renders the covenant impractical |
| **Unclean hands** | The party seeking enforcement has themselves violated the same or similar covenants |

**Changed conditions doctrine:** Virginia courts will decline to enforce a restrictive covenant if conditions in the neighborhood have changed so dramatically that enforcing the covenant would serve no beneficial purpose. For example, if every other property on a street restricted to residential use has been converted to commercial use, a court may find the restriction unenforceable for the remaining lot.

### Discriminatory Covenants

Under the Fair Housing Act and Virginia law, restrictive covenants that discriminate on the basis of race, color, religion, national origin, sex, familial status, disability, or any other protected class are **void and unenforceable**. Many older deeds in Virginia contain discriminatory covenants from the early and mid-twentieth century. These covenants remain in the deed records as historical artifacts but have no legal effect. Virginia Code Section 55.1-300.1 allows property owners to petition the court to strike discriminatory covenants from their deed records.`,
        },
      ],
    },
    {
      slug: 'title-recording',
      title: 'Title & Recording',
      lessons: [
        {
          slug: 'chain-of-title-search',
          title: 'Chain of Title & Title Search Process',
          lessonType: 'reading',
          estimatedMinutes: 25,
          keyTerms: [
            'chain of title',
            'title search',
            'abstract of title',
            'title examiner',
            'grantor-grantee index',
            'tract index',
            'gap in chain',
            'cloud on title',
            'title opinion',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                'Match each title search term (chain of title, abstract, title opinion, cloud on title) to its definition',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify issues in a chain of title that would constitute a cloud or defect',
            },
          ],
          content: `## Chain of Title & Title Search Process

The **chain of title** is the recorded history of all documents affecting ownership of a specific parcel of real property, from the original grant (typically from the government) to the present owner. A clear, unbroken chain of title is essential for a buyer to receive **marketable title** and for a lender to be confident in the security of its lien.

### What Is a Chain of Title?

The chain of title traces ownership of a property through every deed, will, court order, or other legal instrument that has transferred or affected ownership. Each link in the chain represents a transfer from one owner (grantor) to the next (grantee). For the chain to be complete and marketable, every link must be present, properly executed, and properly recorded.

**Example of a simple chain:**
1. 1920: Commonwealth of Virginia grants land to Farmer Jones (patent)
2. 1945: Farmer Jones conveys to John Smith (deed)
3. 1968: John Smith conveys to Robert Miller (deed)
4. 1990: Robert Miller dies; property passes to Susan Miller (probate/will)
5. 2010: Susan Miller conveys to David and Lisa Chen (deed)
6. Present: David and Lisa Chen are current owners

If any link is missing (for example, if Robert Miller's deed was never recorded), there is a **gap in the chain** that creates a title defect.

### The Title Search Process

A **title search** is an examination of public records to establish the current status of a property's title. In Virginia, title searches are conducted by:
- Title examiners employed by or contracted with title insurance companies
- Real estate attorneys
- Independent title search companies

**Steps in a title search:**

1. **Identify the property**: Using the legal description, tax map number, or street address
2. **Search the grantor-grantee index**: Virginia clerk's offices maintain indexes that list all recorded documents by the names of the grantors and grantees. The examiner searches backwards from the current owner through every prior owner
3. **Examine each recorded document**: Review every deed, deed of trust, release, lien, easement, and other instrument in the chain
4. **Check for encumbrances**: Identify any outstanding liens, easements, restrictions, or other encumbrances
5. **Search additional records**: Check court records for judgments, lis pendens, divorce decrees, and probate proceedings that may affect title
6. **Prepare a title report or abstract**: Summarize the findings and identify any defects or encumbrances

### Grantor-Grantee Index vs Tract Index

Virginia uses the **grantor-grantee index** system. Documents are indexed by the names of the parties:
- The **grantor index** lists all documents where a person appears as the grantor (seller/transferor)
- The **grantee index** lists all documents where a person appears as the grantee (buyer/transferee)

Some jurisdictions also maintain a **tract index**, which organizes documents by the specific parcel of land rather than by party names. Tract indexes are easier to search but are not universally available.

### Common Title Defects

A title search may reveal:

| Defect | Description | Impact |
|--------|-------------|--------|
| **Missing link** | A deed in the chain was never recorded | Creates gap, title may be unmarketable |
| **Forged deed** | A deed bearing a forged signature | Void; does not transfer title |
| **Improperly executed deed** | Missing notarization, witnesses, or legal description | May be voidable |
| **Outstanding lien** | Unpaid mortgage, tax lien, or judgment | Must be satisfied before clear title can be conveyed |
| **Undisclosed easement** | An easement not revealed in the records | May burden the property |
| **Conflicting claims** | Multiple parties claim ownership | Requires legal action to resolve |

### The Title Opinion

After completing the search, the examiner or attorney prepares a **title opinion** (or title commitment) that states:
- The current owner of record
- The legal description of the property
- All encumbrances, liens, and defects discovered
- Requirements that must be met before title insurance can be issued (such as paying off existing liens or obtaining missing documents)

In Virginia, most residential transactions involve a title commitment issued by a title insurance company, which serves as the preliminary title opinion. The settlement agent reviews the commitment and works to resolve any issues before closing.`,
        },
        {
          slug: 'recording-statutes-virginia',
          title: 'Recording Statutes: Race, Notice & Race-Notice',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'recording statute',
            'race statute',
            'notice statute',
            'race-notice statute',
            'bona fide purchaser',
            'BFP',
            'for value',
            'without notice',
            'recording act',
            'constructive notice',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Determine who prevails in a title dispute under each type of recording statute',
            },
            {
              type: 'scenario',
              prompt:
                'Owner sells property to Buyer A on Monday but does not record. Owner sells the same property to Buyer B on Wednesday. Buyer B records on Thursday. Buyer A records on Friday. Under Virginia\'s race-notice statute, who owns the property?',
            },
            {
              type: 'drag_drop',
              prompt:
                'Match each recording statute type to its rule and the states that use it',
            },
          ],
          content: `## Recording Statutes: Race, Notice & Race-Notice

**Recording statutes** determine who prevails when the same property is conveyed to two different parties. This is one of the most heavily tested topics on the national exam. You must understand all three types and know that Virginia follows the **race-notice** system.

### Why Recording Matters

When a deed is recorded in the clerk's office, it provides **constructive notice** to the entire world that the transaction occurred. Anyone searching the public records will discover the recorded deed. However, a deed is valid between the parties even if it is never recorded. Recording protects the grantee against claims by third parties who might also claim an interest in the same property.

The problem arises when an owner conveys the same property to two different buyers (a double conveyance). Recording statutes resolve this conflict by establishing rules for who wins.

### Three Types of Recording Statutes

**1. Race Statute:**
Under a pure race statute, the first person to record wins, regardless of whether they knew about the earlier conveyance. Knowledge of a prior unrecorded deed is irrelevant.

Rule: The first to record prevails.

Example: Owner sells to Buyer A on Monday. Owner sells to Buyer B on Wednesday. If Buyer B records before Buyer A, Buyer B wins, even if Buyer B knew about the sale to Buyer A. Only two states (Louisiana and North Carolina) use pure race statutes.

**2. Notice Statute:**
Under a notice statute, a subsequent buyer who purchases without knowledge (actual or constructive) of a prior unrecorded conveyance prevails over the prior buyer, regardless of who records first.

Rule: A subsequent bona fide purchaser (BFP) for value without notice prevails.

Example: Owner sells to Buyer A on Monday (A does not record). Owner sells to Buyer B on Wednesday. If Buyer B had no knowledge of the sale to Buyer A and paid value, Buyer B wins, even if Buyer B never records.

**3. Race-Notice Statute (Virginia):**
Under a race-notice statute, a subsequent buyer prevails ONLY if they: (a) purchase for value, (b) have no notice of the prior conveyance, AND (c) record before the prior buyer.

Rule: A subsequent BFP for value without notice who records first prevails.

This is the most protective system because it requires both good faith (no notice) and diligence (recording first).

### Virginia's Race-Notice Statute

Virginia Code §55.1-407 ('Writings to be recorded') — Virginia's race-notice recording statute (formerly §55-96, recodified in 2019) — establishes Virginia as a race-notice jurisdiction:

> "Every [conveyance] shall be void as to all purchasers for valuable consideration without notice not parties thereto and lien creditors, until and except from the time it is duly admitted to record..."

For a subsequent buyer to prevail in Virginia, ALL three conditions must be met:

| Requirement | Meaning |
|------------|---------|
| **For valuable consideration** | The buyer must have paid something of value (not received the property as a gift) |
| **Without notice** | The buyer must not have had actual knowledge, constructive notice (from records), or inquiry notice (facts that would prompt a reasonable person to investigate) |
| **Recorded first** | The buyer must record their deed before the prior buyer records |

### Applying Virginia's Race-Notice Statute

**Scenario 1:** Owner sells to A on Monday. A does not record. Owner sells to B on Wednesday. B has no knowledge of A's purchase. B records on Thursday. A records on Friday.
- **B wins.** B purchased for value, without notice, and recorded first.

**Scenario 2:** Owner sells to A on Monday. A does not record. Owner sells to B on Wednesday. B knew about A's purchase. B records on Thursday.
- **A wins.** B had actual notice of A's purchase, so B cannot qualify as a BFP without notice.

**Scenario 3:** Owner sells to A on Monday. A records on Tuesday. Owner sells to B on Wednesday. B had not checked the records.
- **A wins.** A recorded first. B had constructive notice because A's deed was in the public records.

**Scenario 4:** Owner gives property to A (a gift) on Monday. A does not record. Owner sells to B on Wednesday for $300,000. B has no knowledge of A. B records.
- **B wins.** A received the property as a gift (not for value), and in Virginia, the statute protects purchasers for valuable consideration against prior unrecorded conveyances.

### Practical Implications

As a Virginia licensee:
- Always advise buyers to record their deed immediately after closing
- Settlement agents in Virginia typically record the deed on the day of closing or the next business day
- An unrecorded deed is still valid between the original parties but provides no protection against third-party claims
- Title insurance protects against losses from recording problems, but prompt recording is the first line of defense`,
        },
        {
          slug: 'constructive-vs-actual-notice',
          title: 'Constructive vs Actual Notice',
          lessonType: 'reading',
          estimatedMinutes: 21,
          keyTerms: [
            'actual notice',
            'constructive notice',
            'inquiry notice',
            'imputed notice',
            'recording',
            'public records',
            'physical inspection',
            'possession',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Classify each scenario as involving actual notice, constructive notice, or inquiry notice',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each type of notice to its source and legal effect',
            },
          ],
          content: `## Constructive vs Actual Notice

The concept of **notice** is central to real property law. Whether a buyer had notice of a prior claim, lien, or interest determines who prevails in many title disputes. There are three forms of notice, each with distinct legal implications.

### Actual Notice

**Actual notice** means the buyer had direct, personal knowledge of a fact. If someone told the buyer about a prior deed, or the buyer witnessed an event, or the buyer received a letter describing the claim, the buyer has actual notice.

**Examples:**
- The seller tells the buyer, "I previously sold this property to my brother, but he never recorded"
- The buyer's agent personally witnessed a neighbor using an easement across the property
- The buyer receives a letter from a contractor asserting a mechanic's lien

Actual notice cannot be overcome by failing to search records or by claiming ignorance. If you know something, you know it, and the law will hold you to that knowledge.

### Constructive Notice

**Constructive notice** means the buyer is presumed to know information that is available in the public records, regardless of whether the buyer actually searched those records. The law assumes that a reasonable person would search the records before purchasing property.

**Sources of constructive notice in Virginia:**
- **Recorded documents**: Any deed, deed of trust, lien, easement, or other instrument properly recorded in the clerk's office of the circuit court provides constructive notice to all subsequent purchasers
- **Lis pendens**: A recorded notice of pending litigation provides constructive notice that the property's title is in dispute
- **Tax records**: Publicly available tax assessment records
- **Plat maps and surveys**: Recorded subdivision plats and surveys

The key principle is: if the document is properly recorded in the public records where the property is located, every subsequent buyer is deemed to have notice of it, whether they actually searched the records or not. This is the foundation of the recording system.

**Virginia's recording requirement:** Under Virginia law, documents must be recorded in the clerk's office of the circuit court of the city or county where the property is located. A document recorded in the wrong jurisdiction does not provide constructive notice.

### Inquiry Notice

**Inquiry notice** is a middle ground between actual and constructive notice. It arises when circumstances are such that a reasonable person would investigate further. If a reasonable investigation would have revealed the claim, the buyer is charged with inquiry notice regardless of whether they actually investigated.

**Common sources of inquiry notice:**
- **Possession by someone other than the seller**: If the buyer visits the property and sees someone living there who is not the seller, a reasonable buyer would ask who that person is and what their claim to the property is. The buyer is charged with whatever that investigation would have revealed
- **Physical evidence of use**: Visible paths, utility lines, driveways, or other improvements suggesting an easement or third-party use
- **References in recorded documents**: If a recorded deed references another document (such as an unrecorded agreement), the buyer has inquiry notice of the referenced document's contents

**Example:** Buyer visits a property and notices a well-worn path from the neighbor's property across the backyard to the street. A reasonable buyer would ask about this path. If investigation would reveal a prescriptive easement, the buyer has inquiry notice of that easement even if they never asked about it.

### Types of Notice Summary

| Type | How Acquired | Legal Effect |
|------|-------------|-------------|
| **Actual** | Direct personal knowledge | Buyer knows the fact; cannot claim ignorance |
| **Constructive** | Information in public records | Buyer is presumed to know; recording = notice to the world |
| **Inquiry** | Circumstances that would cause a reasonable person to investigate | Buyer is charged with what investigation would have revealed |

### Imputed Notice

**Imputed notice** occurs when the knowledge of an agent is attributed to the principal. If a buyer's real estate agent or attorney knows about a prior claim on the property, that knowledge is imputed to the buyer even if the agent never told the buyer. This is why the agency relationship creates legal obligations for both parties.

### Practical Implications for Licensees

As a Virginia licensee:
- Never assume that failing to record a document protects anyone; constructive notice from recording is the cornerstone of title protection
- Always recommend title searches and title insurance to protect against undiscovered claims
- When showing properties, observe physical conditions that might suggest third-party interests (paths, fences, utility installations) and advise clients to investigate
- If you learn about any claim against a property, you have a duty to disclose that to your client (and potentially to other parties, depending on your agency role)`,
        },
        {
          slug: 'marketable-title-vs-insurable-title',
          title: 'Marketable Title vs Insurable Title',
          lessonType: 'reading',
          estimatedMinutes: 23,
          keyTerms: [
            'marketable title',
            'insurable title',
            'title commitment',
            'title defect',
            'encumbrance',
            'merchantable title',
            'title objection',
            'cure period',
            'standard exceptions',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'Determine whether each described title condition would make a title unmarketable, uninsurable, or neither',
            },
            {
              type: 'scenario',
              prompt:
                'A buyer\'s title search reveals a 50-year-old easement for a power line that crosses the back of the property. Is the title marketable? Is it insurable?',
            },
          ],
          content: `## Marketable Title vs Insurable Title

The concepts of **marketable title** and **insurable title** are related but distinct. Understanding the difference is important for both the exam and for advising clients during transactions.

### Marketable Title

**Marketable title** (also called merchantable title) is title that is free from reasonable doubt and free from the likelihood of litigation. A buyer is entitled to marketable title unless the purchase contract specifies otherwise.

Marketable title means:
- The chain of title is complete and unbroken
- There are no undisclosed encumbrances (liens, easements, restrictions) that would burden the property beyond what the buyer agreed to accept
- There are no title defects that would cause a reasonable buyer to hesitate
- A reasonable, prudent person would accept the title without fear of being involved in litigation

**What makes title unmarketable:**
- A gap or break in the chain of title
- An outstanding mortgage or lien that will not be paid at closing
- An unresolved boundary dispute
- A forged or fraudulently obtained deed in the chain
- An undisclosed easement not visible from inspection
- Outstanding interests of unknown heirs
- Violations of restrictive covenants that could lead to litigation

**What does NOT make title unmarketable:**
- Existing zoning restrictions (these are matters of public law, not title defects)
- Visible easements that a reasonable inspection would reveal
- Recorded restrictions that were disclosed to the buyer
- Minor encroachments revealed by a survey (depends on severity)

### Insurable Title

**Insurable title** is title that a title insurance company is willing to insure, even though it may have certain defects. A title insurance company may agree to insure a title that has technical defects because the company assesses the risk of loss as acceptably low.

**Example:** A title search reveals that a deed from 1962 was not properly witnessed. Technically, this creates a defect in the chain of title. However, more than 60 years have passed, and no one has challenged the deed. A title insurance company may determine that the risk of a successful challenge is negligible and agree to insure the title. The title is insurable but might not be strictly marketable.

### Comparison

| Feature | Marketable Title | Insurable Title |
|---------|-----------------|-----------------|
| Standard | Free from reasonable doubt | Title company willing to insure |
| Defects | No material defects | May have defects the insurer accepts |
| Who determines | Legal standard applied by courts | Title insurance company's risk assessment |
| Contract default | Buyer can refuse to close if title is unmarketable | Buyer generally must close if title is insurable (depends on contract language) |
| Exceptions | None (title must be clear) | Standard exceptions listed in the title commitment |

### Virginia Purchase Contracts

Most Virginia purchase contracts require the seller to convey **marketable and insurable title**. The Virginia REALTORS standard residential purchase agreement includes provisions addressing title quality:

- The seller must convey title that is both marketable and insurable by a reputable title insurance company
- If the title search reveals defects, the buyer may object in writing
- The seller typically has a **cure period** (often 30 days) to resolve title defects
- If defects cannot be cured, the buyer may terminate the contract and receive a refund of earnest money
- The parties can negotiate to proceed with insurable but technically unmarketable title

### Standard Title Exceptions

Every title insurance policy includes **standard exceptions** for items not covered by the policy. Common standard exceptions include:
- Rights of parties in possession (tenants, squatters)
- Easements or claims not shown in public records
- Encroachments, boundary disputes, or overlaps that a survey would reveal
- Unpaid taxes and assessments not yet due
- Mechanic's liens for work not yet completed

Buyers can request an **extended coverage** or **enhanced** policy that eliminates some or all standard exceptions, typically by providing a current survey and affidavits. Virginia settlement agents routinely work with buyers and title companies to obtain the broadest coverage available.

### Practical Implications for Licensees

Always advise buyers to:
- Review the title commitment carefully before closing
- Understand the difference between marketable and insurable title
- Raise title objections promptly within the contract deadlines
- Consider obtaining an extended coverage title policy for maximum protection
- Consult a real estate attorney if significant title defects are discovered`,
        },
      ],
    },
    {
      slug: 'title-insurance-defects',
      title: 'Title Insurance & Defects',
      lessons: [
        {
          slug: 'owners-vs-lenders-title-policies',
          title: "Owner's vs Lender's Title Policies",
          lessonType: 'reading',
          estimatedMinutes: 26,
          keyTerms: [
            "owner's title policy",
            "lender's title policy",
            'title commitment',
            'premium',
            'one-time payment',
            'coverage amount',
            'simultaneous issue',
            'ALTA',
            'endorsements',
            'settlement agent',
          ],
          interactiveElements: [
            {
              type: 'flashcard',
              prompt:
                "Compare the owner's policy and lender's policy on coverage amount, duration, who it protects, and premium payment",
            },
            {
              type: 'mini_quiz',
              prompt:
                "Identify which title policy (owner's, lender's, or both) covers each described risk",
            },
            {
              type: 'scenario',
              prompt:
                "A buyer purchases a home for $400,000 with a $320,000 mortgage. Five years later, a title defect is discovered. The outstanding mortgage balance is $290,000 and the home is worth $450,000. What does each title policy cover?",
            },
          ],
          content: `## Owner's vs Lender's Title Policies

**Title insurance** protects against financial loss resulting from defects in title to real property. Unlike other forms of insurance that protect against future events, title insurance protects against past events (defects that already exist at the time the policy is issued but have not yet been discovered).

### How Title Insurance Works

Before issuing a policy, the title insurance company (or its agent) conducts a title search and issues a **title commitment** listing:
- The current owner and the proposed insured
- The conditions that must be met before the policy will be issued (requirements)
- The exceptions from coverage (known encumbrances and standard exceptions)

If the transaction closes and all requirements are met, the title commitment becomes the title insurance policy. The premium is paid **once** at closing. There are no ongoing monthly or annual premiums.

### The Lender's Title Policy (Loan Policy)

A **lender's title policy** (also called a loan policy or mortgagee's policy) protects the lender's interest in the property.

**Key characteristics:**
- **Required**: Virtually all lenders require a lender's policy as a condition of making the loan
- **Coverage amount**: Equals the original loan amount
- **Decreasing coverage**: As the loan balance is paid down, the coverage amount decreases proportionally. When the loan is paid in full, the policy terminates
- **Who it protects**: Only the lender (and its assignees if the loan is sold)
- **Paid by**: Varies by local custom. In Virginia, the buyer typically pays for the lender's policy, though this is negotiable
- **Does NOT protect the buyer**: A lender's policy provides no coverage to the property owner

### The Owner's Title Policy

An **owner's title policy** protects the buyer's equity in the property.

**Key characteristics:**
- **Optional** but strongly recommended: No law requires an owner's policy, but most real estate professionals advise buyers to purchase one
- **Coverage amount**: Equals the purchase price (can be increased for an additional premium)
- **Duration**: Lasts as long as the owner (or the owner's heirs) has an interest in the property
- **Increasing coverage**: Some enhanced policies include an inflation rider that increases coverage as the property appreciates
- **Who it protects**: The owner and the owner's heirs
- **Paid by**: Varies by local custom. In Virginia, the seller often pays for the owner's policy, though this is negotiable and should be addressed in the purchase contract

### Comparison Table

| Feature | Owner's Policy | Lender's Policy |
|---------|---------------|-----------------|
| Protects | Buyer/owner | Lender |
| Coverage amount | Purchase price | Loan amount |
| Duration | As long as owner has interest | Until loan is paid off |
| Premium payment | One time at closing | One time at closing |
| Required? | No (but recommended) | Yes (by virtually all lenders) |
| Coverage changes | Can increase with inflation rider | Decreases as loan is paid down |

### Simultaneous Issue Discount

When both an owner's policy and a lender's policy are issued at the same time (which happens at most closings), the title company typically offers a **simultaneous issue discount** on the lender's policy. The buyer pays the full premium for the owner's policy and a significantly reduced premium for the lender's policy because the same title search supports both policies.

### What Title Insurance Covers

Title insurance generally covers losses from:
- Defects in title not discovered during the title search
- Forged deeds, impersonation, or fraudulent documents in the chain of title
- Undisclosed heirs or missing heirs
- Errors in the public records (recording mistakes, indexing errors)
- Liens or encumbrances not revealed by the title search
- Lack of legal access to the property (for enhanced policies)

### What Title Insurance Does NOT Cover

Standard title policies typically exclude:
- Defects, liens, or encumbrances created by the insured (the buyer)
- Government regulations (zoning, building codes, environmental)
- Rights of parties in possession not disclosed in the records
- Matters that would be revealed by a survey (unless a survey is provided)
- Claims arising after the policy date

### Virginia Title Insurance Practice

In Virginia, title insurance is regulated by the State Corporation Commission's Bureau of Insurance. Key Virginia-specific points:
- Title insurance premiums are filed with and approved by the Bureau of Insurance
- Settlement agents in Virginia (often attorneys) typically serve as agents for title insurance companies
- Virginia's settlement agent must be licensed and must maintain a trust account for holding settlement funds
- The Virginia Consumer Real Estate Settlement Protection Act (CRESPA) governs the conduct of settlement agents`,
        },
        {
          slug: 'title-defects-curing',
          title: 'Title Defects & Curing Defects',
          lessonType: 'interactive',
          estimatedMinutes: 25,
          keyTerms: [
            'title defect',
            'cloud on title',
            'curative instrument',
            'corrective deed',
            'quitclaim deed',
            'affidavit of heirship',
            'release of lien',
            'title clearing',
            'void deed',
            'voidable deed',
          ],
          interactiveElements: [
            {
              type: 'mini_quiz',
              prompt:
                'For each title defect, identify the appropriate curative instrument or action',
            },
            {
              type: 'scenario',
              prompt:
                'A title search reveals that the seller\'s deceased mother\'s name is still on the deed as a joint tenant. What steps must be taken to clear title before closing?',
            },
            {
              type: 'drag_drop',
              prompt:
                'Match each type of title defect to the correct method of curing it',
            },
          ],
          content: `## Title Defects & Curing Defects

A **title defect** (also called a **cloud on title**) is any claim, lien, encumbrance, or irregularity that casts doubt on the current owner's title to the property. Title defects can range from minor clerical errors to serious ownership disputes. Understanding how defects arise and how they are resolved is critical for facilitating smooth closings.

### Common Title Defects

**Recording errors:**
- Misspelled names in deeds or liens
- Incorrect legal descriptions
- Missing notarization or acknowledgment
- Documents recorded in the wrong jurisdiction

**Chain of title problems:**
- A deed was never recorded, creating a gap
- A prior owner died without a will, and the estate was never probated
- A deed was signed by someone who lacked legal capacity (minor, mentally incompetent)
- A deed was signed under duress or fraud

**Outstanding interests:**
- Unsatisfied mortgages or deeds of trust (the debt was paid but the release was never recorded)
- Judgment liens that should have been satisfied
- Tax liens that were paid but not released of record
- Easements or restrictions that encumber the property

**Void vs voidable deeds:**

| Category | Definition | Effect | Example |
|----------|-----------|--------|---------|
| **Void deed** | A deed that is legally invalid from inception | Transfers NO title, even to innocent purchasers | Forged deed, deed by minor under 18, deed from a legally dead person |
| **Voidable deed** | A deed that is valid until successfully challenged | Transfers title, but the transfer can be undone | Deed obtained by fraud, deed signed under duress, deed by person under guardianship |

This distinction matters because a void deed can never be the basis of valid ownership, while a voidable deed remains effective unless and until a court sets it aside. Title insurance becomes especially valuable when a void deed is discovered deep in the chain of title, because the current owner (who may be entirely innocent) has no valid title.

### Methods of Curing Title Defects

**Corrective deed:** If a deed contains a clerical error (misspelled name, incorrect legal description), the parties can execute a corrective deed to fix the error. The corrective deed references the original deed and corrects only the specific error.

**Quitclaim deed:** When a person may have a potential claim to the property, a quitclaim deed can be obtained to release that claim. A quitclaim deed conveys whatever interest the grantor may have without making any warranties. It is commonly used to clear potential claims from ex-spouses, heirs, or business partners.

**Affidavit of heirship:** When a property owner died without probating their estate, an affidavit of heirship (signed by disinterested parties who knew the deceased) can establish the identity of the heirs and their relationship to the deceased. This helps bridge a gap in the chain of title.

**Release or satisfaction of lien:** When a lien has been paid but the release was never recorded, the lienholder can execute and record a release or satisfaction document. Under Va. Code §55.1-339, the lender must record a certificate of satisfaction within **90 days** of receiving written request from the borrower after full payment. If the lender fails to do so, the borrower may be entitled to statutory penalties.

**No post-sale redemption in Virginia:** Virginia has **no statutory post-sale right of redemption** after a non-judicial trustee sale under a deed of trust. Once the trustee's sale is complete and the trustee's deed is delivered, the former borrower cannot reclaim the property by paying the debt.

**Court order:** Some title defects require judicial action. A court can issue orders to:
- Confirm the identity of heirs
- Validate a defective deed
- Remove an invalid lien
- Resolve boundary disputes
- Establish ownership through adverse possession

### Curative Statutes

Virginia has several **curative statutes** that automatically validate certain defective documents after a specified period:

- Virginia Code Section 55.1-107: After 10 years from recording, a deed with defective acknowledgment is presumed valid
- Virginia Code Section 55.1-108: After specified periods, certain technical defects in recorded instruments are cured by the passage of time

These statutes provide a safety net for old title defects, reducing the need for corrective action on documents recorded many years ago.

### Practical Implications

As a Virginia licensee:
- If a title defect is discovered, work with the settlement agent and title company to identify the appropriate curative action
- Allow adequate time in the contract for title defects to be resolved (the standard cure period in Virginia contracts is typically 30 days)
- Advise clients that some title defects (particularly those involving deceased persons or missing parties) may take weeks or months to resolve
- Never advise clients on legal methods to cure title defects; refer them to a real estate attorney`,
        },
        {
          slug: 'quiet-title-actions-virginia',
          title: 'Quiet Title Actions in Virginia',
          lessonType: 'scenario',
          estimatedMinutes: 23,
          keyTerms: [
            'quiet title action',
            'suit to quiet title',
            'adverse claim',
            'lis pendens',
            'decree',
            'cloud on title',
            'tax sale challenge',
            'boundary dispute',
            'adverse possession',
          ],
          interactiveElements: [
            {
              type: 'scenario',
              prompt:
                'A property owner discovers that a distant relative recorded a deed 15 years ago claiming a one-half interest in the property based on an alleged inheritance. How does the owner resolve this through a quiet title action?',
            },
            {
              type: 'mini_quiz',
              prompt:
                'Identify the circumstances under which a quiet title action is the appropriate legal remedy',
            },
            {
              type: 'flashcard',
              prompt:
                'Match each step of the quiet title process to its purpose and legal requirements',
            },
          ],
          content: `## Quiet Title Actions in Virginia

A **quiet title action** (also called a suit to quiet title) is a lawsuit filed in circuit court to establish or confirm ownership of real property and eliminate competing claims. When a title defect cannot be resolved through curative instruments, negotiation, or the passage of time, a quiet title action may be the only way to clear the cloud on title and make the property marketable.

### When Is a Quiet Title Action Necessary?

A quiet title action is appropriate when:
- An adverse claimant asserts an ownership interest in the property
- The chain of title contains unresolvable gaps or conflicting deeds
- A prior owner's heirs cannot be located to sign a quitclaim deed
- An invalid or fraudulent deed appears in the chain of title
- A boundary dispute cannot be resolved by agreement
- A party claims ownership through adverse possession and needs a court decree to confirm it
- A tax sale purchaser needs to confirm their title against the former owner's redemption claims
- An old lien or encumbrance appears in the records but the lienholder cannot be located

### The Quiet Title Process in Virginia

Virginia quiet title actions arise at common law in equity and are supplemented by statutory provisions at **Va. Code §55.1-1200 et seq.** for action to quiet title, with general procedural rules in **Title 8.01**. A prerequisite for common-law quiet title is actual or constructive possession. The process follows these steps:

**1. Filing the Complaint:**
The plaintiff (the party seeking to establish clear title) files a complaint in the circuit court of the city or county where the property is located. The complaint must:
- Describe the property by legal description
- State the plaintiff's claim to title
- Identify all known adverse claimants
- Request that the court enter a decree confirming the plaintiff's title and extinguishing all adverse claims

**2. Service of Process:**
All known adverse claimants must be served with the lawsuit. If adverse claimants cannot be identified or located, Virginia allows service by publication (publishing notice in a newspaper for a specified period). Service by publication provides constructive notice to unknown claimants.

**3. Lis Pendens:**
The plaintiff should record a **lis pendens** (notice of pending litigation) in the land records. This provides constructive notice to anyone searching the title that the property's ownership is being litigated. A potential buyer who purchases the property after a lis pendens is recorded takes the property subject to the outcome of the lawsuit.

**4. Discovery and Evidence:**
Both parties gather evidence supporting their claims. Evidence in quiet title actions typically includes:
- Recorded deeds, wills, and other conveyance documents
- Survey reports and plat maps
- Tax payment records (who has been paying property taxes)
- Evidence of possession and use
- Affidavits from witnesses with knowledge of the property's history

**5. Trial or Hearing:**
The court conducts a hearing (or trial if facts are disputed) to evaluate the competing claims. Quiet title actions are equity proceedings, meaning they are decided by a judge, not a jury.

**6. Decree:**
If the court finds in favor of the plaintiff, it enters a decree:
- Confirming the plaintiff's title to the property
- Extinguishing all adverse claims
- Ordering that the decree be recorded in the land records

The recorded decree becomes part of the chain of title and provides constructive notice that the title dispute has been resolved.

### Adverse Possession and Quiet Title

A person who has occupied another's property for the statutory period (15 years in Virginia under Virginia Code Section 8.01-236) may bring a quiet title action to confirm their ownership through **adverse possession**. The claimant must prove:

| Element | Requirement |
|---------|-------------|
| Actual possession | Physical occupation and use of the property |
| Open and notorious | Visible to anyone, including the true owner |
| Continuous | Uninterrupted for the entire 15-year period |
| Exclusive | Not shared with the true owner or the public |
| Hostile / Adverse | Without the true owner's permission |

If the court finds all elements are satisfied, it will enter a decree transferring title to the adverse possessor.

### Cost and Time Considerations

Quiet title actions in Virginia typically:
- Take 6 to 18 months to complete
- Cost several thousand dollars in attorney fees and court costs
- Require patience, as serving unknown parties by publication adds time
- Are generally covered by title insurance (if the insured has a policy, the title company may fund or participate in the quiet title action)

### Practical Implications for Licensees

As a Virginia licensee:
- If a title search reveals a defect that may require a quiet title action, notify all parties early in the transaction
- Quiet title actions can delay or prevent closing, so address potential title issues as soon as they are discovered
- Never represent to a buyer that a title defect is "minor" if it may require court action to resolve
- Coordinate with the settlement agent and title company, as they have experience identifying when a quiet title action is necessary
- Refer clients to a real estate attorney who handles quiet title actions in the jurisdiction where the property is located`,
        },
      ],
    },
  ],
}

// ── Exports ────────────────────────────────────────────────────────────────────

export const MODULES_78: CourseModule[] = [module7, module8]
export { module7, module8 }
