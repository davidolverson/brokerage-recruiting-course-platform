// Key term definitions for Modules 7-8
// Virginia Real Estate: Property Concepts, Estates, Liens, Encumbrances & Title
// Will be merged into course-terms.ts

export interface TermDefinition {
  definition: string
  example?: string
}

export const MOD78_TERMS: Record<string, TermDefinition> = {
  // ── Module 7, Ch1: Bundle of Rights & Property Types ──────────────────────

  'bundle of rights': {
    definition:
      'The collection of legal rights that come with real property ownership, traditionally described as a bundle of sticks where each stick is a separate right that can be transferred or retained independently.',
    example:
      'A Virginia landowner leases farming rights to a neighbor while retaining mineral rights, separating two sticks from the bundle without giving up ownership.',
  },
  'right of possession': {
    definition:
      'The right to occupy and physically hold the property. This is the most fundamental ownership right in the bundle.',
    example:
      'After closing on a Richmond home, the buyer receives keys and has the right of possession to occupy the property.',
  },
  'right of use': {
    definition:
      'The right to use the property in any legal manner, subject to zoning ordinances, building codes, and other lawful restrictions.',
    example:
      'An owner in a residential-zoned Henrico neighborhood has the right to use the property as a home but cannot operate a retail store.',
  },
  'right of enjoyment': {
    definition:
      'The right to use and enjoy the property peacefully without unreasonable interference from others, also known as quiet enjoyment.',
    example:
      'A neighbor running a loud, unpermitted auto shop next door may violate the owner\'s right of enjoyment and create a nuisance claim.',
  },
  'right of disposition': {
    definition:
      'The right to transfer ownership by sale, gift, will, or other legal means. Restrictions that completely prevent transfer are void as unreasonable restraints on alienation.',
    example:
      'A Virginia homeowner exercises the right of disposition by listing the property with a broker and conveying title by deed to the buyer.',
  },
  'right of exclusion': {
    definition:
      'The right to prevent others from entering or using the property, subject to easements and lawful government entry.',
    example:
      'A landowner posts no-trespassing signs and fences the property, exercising the right of exclusion against uninvited visitors.',
  },
  'fee simple absolute': {
    definition:
      'The highest and most complete form of ownership recognized by law, lasting indefinitely and freely transferable, devisable, and inheritable.',
    example:
      'A deed that conveys property "to John Smith and his heirs" without any conditions creates a fee simple absolute estate.',
  },
  'ownership rights': {
    definition:
      'The legal entitlements held by a property owner, encompassing possession, use, enjoyment, disposition, and exclusion.',
    example:
      'A Virginia owner\'s full ownership rights allow them to live in, modify, lease, or sell the home as they choose within the law.',
  },
  'real property': {
    definition:
      'Land and everything permanently attached to it, including buildings, fixtures, and appurtenant rights. Transferred by deed.',
    example:
      'A house, its attached deck, and the underlying lot are real property that transfer with the deed at closing.',
  },
  'personal property': {
    definition:
      'All property that is not real property, generally movable items not permanently affixed to land. Transferred by bill of sale.',
    example:
      'The seller\'s patio furniture and area rugs are personal property and do not convey unless listed in the contract.',
  },
  'chattels': {
    definition:
      'Another term for personal property, referring to movable items of ownership not attached to real estate.',
    example:
      'Vehicles, jewelry, and free-standing appliances are chattels that do not transfer with a real estate deed.',
  },
  'realty': {
    definition:
      'A synonym for real property, referring to land and improvements attached to it.',
    example:
      'The realty at 123 Main Street in Richmond includes the lot, the house, and the attached garage.',
  },
  'personalty': {
    definition:
      'A synonym for personal property; items that are movable and not considered part of the real estate.',
    example:
      'A seller\'s washer and dryer may be personalty unless they are built-in or specifically included in the purchase contract.',
  },
  'tangible property': {
    definition:
      'Property that has a physical form and can be touched, such as land, buildings, furniture, or vehicles.',
    example:
      'A house and the refrigerator inside it are both tangible property, though the house is real and the refrigerator is typically personal.',
  },
  'intangible property': {
    definition:
      'Property that has value but no physical form, such as stocks, bonds, intellectual property, or contractual rights.',
    example:
      'Shares of stock in a cooperative housing corporation are intangible personal property, even though they grant the right to occupy a unit.',
  },
  'bill of sale': {
    definition:
      'A written document transferring ownership of personal property from seller to buyer. Used for chattels, not real estate.',
    example:
      'When a Virginia buyer purchases the seller\'s riding mower with the home, a separate bill of sale documents the transfer of that personal property.',
  },
  'deed': {
    definition:
      'The legal instrument that transfers ownership of real property from grantor to grantee. Must be in writing, signed, and delivered.',
    example:
      'At a Virginia closing, the seller signs a general warranty deed conveying the property to the buyer, which is then recorded in the circuit court clerk\'s office.',
  },

  'fixture': {
    definition:
      'An item of personal property that has become real property by being permanently attached or adapted to the land or building. Conveys with the deed unless excluded.',
    example:
      'A built-in dishwasher installed by the homeowner is a fixture and transfers to the buyer at closing.',
  },
  'trade fixture': {
    definition:
      'An item attached to leased commercial property by a tenant for use in their business. Remains the tenant\'s personal property and must be removed before the lease ends.',
    example:
      'A restaurant tenant\'s pizza oven bolted to the kitchen floor is a trade fixture the tenant can remove at lease end.',
  },
  'emblements': {
    definition:
      'Annual crops produced by a tenant\'s labor that are treated as personal property, allowing the tenant to harvest them even after the tenancy ends.',
    example:
      'A Virginia farmer-tenant who plants corn has the right to return and harvest the crop as emblements after the lease terminates.',
  },
  'fructus industriales': {
    definition:
      'Cultivated annual crops produced by human labor. Treated as personal property (emblements) and can be separately sold or harvested.',
    example:
      'Soybeans grown by a tenant farmer qualify as fructus industriales and remain the tenant\'s personal property.',
  },
  'fructus naturales': {
    definition:
      'Naturally occurring vegetation such as trees, shrubs, and perennial plants. Treated as real property that transfers with the land.',
    example:
      'Mature oak trees and wild berry bushes on a Virginia farm are fructus naturales and convey with the deed.',
  },
  'annexation': {
    definition:
      'The process by which personal property becomes real property by being attached to land or structures.',
    example:
      'Installing a ceiling fan converts it from personal property to real property through annexation.',
  },
  'severance': {
    definition:
      'The process by which real property becomes personal property by being detached or separated from the land.',
    example:
      'Cutting down a standing tree severs it from the real estate, converting the lumber into personal property.',
  },
  'constructive annexation': {
    definition:
      'When an item is legally treated as a fixture even without physical attachment because it is specifically adapted or essential to the property.',
    example:
      'Custom-sized storm windows stored in the garage are constructively annexed to the house because they fit nowhere else.',
  },
  'chattel': {
    definition:
      'An individual item of personal property, especially one that is tangible and movable.',
    example:
      'A freestanding washer is a chattel that does not convey unless specified in the contract.',
  },
  'tenant improvement': {
    definition:
      'Alterations or additions made by a tenant to leased premises, typically governed by lease terms dictating ownership and removal rights at lease end.',
    example:
      'A commercial tenant installs custom shelving as a tenant improvement, which may remain with the landlord or be removed depending on the lease.',
  },

  'MARIA test': {
    definition:
      'A five-factor test for determining whether an item is a fixture: Method of attachment, Adaptability, Relationship of parties, Intention, and Agreement.',
    example:
      'A court applies the MARIA test to decide whether a built-in bookshelf is a fixture conveying to the buyer or a removable chattel.',
  },
  'method of attachment': {
    definition:
      'The MARIA factor examining how firmly an item is affixed to real property. Items requiring tools to remove or causing damage if removed are more likely fixtures.',
    example:
      'A chandelier hardwired into the ceiling electrical system shows a method of attachment that points toward fixture status.',
  },
  'adaptability': {
    definition:
      'The MARIA factor asking whether an item was specifically adapted or custom-made for the property. Custom-fit items are more likely fixtures.',
    example:
      'Window treatments cut and fitted to unusual bay windows demonstrate adaptability weighing toward fixture classification.',
  },
  'relationship of parties': {
    definition:
      'A MARIA factor considering who installed the item. Courts favor tenants over landlords and buyers over sellers when classification is ambiguous.',
    example:
      'In a dispute over a tenant-installed cabinet, the relationship of parties favors finding it is a removable trade fixture.',
  },
  'intention of annexor': {
    definition:
      'The most important MARIA factor, examining whether the person installing the item intended it to be permanent. Objective evidence governs over stated intent.',
    example:
      'A homeowner who advertised the installed solar panels as a permanent upgrade shows intention of annexor supporting fixture status.',
  },
  'agreement of parties': {
    definition:
      'A MARIA factor giving effect to any written agreement between the parties about whether an item is a fixture, overriding the other factors.',
    example:
      'A Virginia purchase contract listing the dining room chandelier as excluded from the sale becomes the controlling agreement of parties.',
  },
  'accession': {
    definition:
      'The legal principle that an addition or improvement to property becomes the property of the owner of the larger or principal item.',
    example:
      'When a contractor mistakenly paints the wrong house, the paint becomes the homeowner\'s property by accession.',
  },

  // ── Module 7, Ch2: Estates in Land ────────────────────────────────────────

  'freehold estate': {
    definition:
      'An ownership estate of indefinite duration, including fee simple and life estates. Distinguished from leasehold estates, which have fixed terms.',
    example:
      'A homeowner with a fee simple deed holds a freehold estate, while a one-year apartment tenant holds only a leasehold.',
  },
  'estate of inheritance': {
    definition:
      'An estate that can pass to the owner\'s heirs upon death. Fee simple absolute is the primary estate of inheritance.',
    example:
      'A Virginia homeowner\'s fee simple absolute estate passes to the children as an estate of inheritance under intestate succession.',
  },
  'leasehold estate': {
    definition:
      'A possessory interest in real property for a fixed or determinable term created by a lease. The tenant has possession, the landlord retains the reversion.',
    example:
      'A Richmond renter\'s 12-month apartment lease creates a leasehold estate for years.',
  },
  'allodial system': {
    definition:
      'The U.S. system of land ownership under which private individuals hold full ownership rights in land, as opposed to the feudal system.',
    example:
      'Virginia homeowners hold land under the allodial system, meaning they own their property outright rather than as tenants of the sovereign.',
  },
  'alienable': {
    definition:
      'The quality of being freely transferable by sale, gift, or other voluntary means during the owner\'s lifetime.',
    example:
      'A fee simple absolute is fully alienable, meaning the owner can sell it to anyone at any time.',
  },
  'devisable': {
    definition:
      'Capable of being transferred by will upon the owner\'s death.',
    example:
      'A Virginia homeowner\'s fee simple estate is devisable, so they can leave the home to a named beneficiary in their will.',
  },
  'descendible': {
    definition:
      'Capable of passing to heirs through intestate succession when the owner dies without a valid will.',
    example:
      'When a Virginia owner dies without a will, their descendible fee simple estate passes to heirs under the Code of Virginia intestacy statute.',
  },
  'highest form of ownership': {
    definition:
      'A phrase describing fee simple absolute, the most complete bundle of rights recognized in real property law.',
    example:
      'Most residential deeds in Virginia convey the highest form of ownership: fee simple absolute.',
  },

  'fee simple defeasible': {
    definition:
      'A fee simple estate that can be terminated if a specified condition or event occurs. Includes fee simple determinable and fee simple subject to condition subsequent.',
    example:
      'Land granted "to the church so long as used for worship" is a fee simple defeasible that ends if the property stops being used for worship.',
  },
  'fee simple determinable': {
    definition:
      'A defeasible fee that automatically ends when a stated condition occurs. Uses durational language like "so long as" or "until." Creates a possibility of reverter in the grantor.',
    example:
      'A deed conveying land "to the school board so long as used for school purposes" creates a fee simple determinable.',
  },
  'fee simple subject to condition subsequent': {
    definition:
      'A defeasible fee that does not automatically end when a condition occurs but gives the grantor a right to re-enter and reclaim the property.',
    example:
      'Land granted "on condition that no alcohol is sold on the premises" creates a fee simple subject to condition subsequent.',
  },
  'possibility of reverter': {
    definition:
      'The future interest retained by the grantor of a fee simple determinable. The property automatically reverts to the grantor if the stated condition occurs.',
    example:
      'If a Virginia donor grants land to a school "so long as used for education," they retain a possibility of reverter triggered by closure of the school.',
  },
  'right of re-entry': {
    definition:
      'The future interest retained by the grantor of a fee simple subject to condition subsequent, allowing the grantor to reclaim the property by affirmative action if the condition is breached.',
    example:
      'A grantor exercises the right of re-entry by filing suit to recover land after the grantee violates a no-commercial-use condition.',
  },
  'power of termination': {
    definition:
      'Another name for the right of re-entry; the grantor\'s power to cut short a fee simple subject to condition subsequent.',
    example:
      'The grantor invokes the power of termination after the grantee breaches the deed\'s conditional clause.',
  },
  'automatic forfeiture': {
    definition:
      'The immediate, self-executing loss of title that occurs in a fee simple determinable when the stated condition happens, without any action by the grantor.',
    example:
      'When the charity stopped operating the clinic, automatic forfeiture returned the land to the original donor.',
  },
  'durational language': {
    definition:
      'Words like "so long as," "while," "during," or "until" that create a fee simple determinable with a possibility of reverter.',
    example:
      '"So long as used for a public park" is durational language creating a fee simple determinable.',
  },
  'conditional language': {
    definition:
      'Words like "on condition that," "provided that," or "but if" that create a fee simple subject to condition subsequent with a right of re-entry.',
    example:
      '"Provided that no fence exceeds six feet" is conditional language creating a fee simple subject to condition subsequent.',
  },

  'life estate': {
    definition:
      'A freehold estate whose duration is measured by the life of a specified person, usually the life tenant. Ends automatically upon death.',
    example:
      'A widow receives a life estate in the family home, allowing her to live there until her death, after which title passes to the remainderman.',
  },
  'life tenant': {
    definition:
      'The person who holds a life estate and has the right of possession, use, and enjoyment during the measuring life, subject to the duty to avoid waste.',
    example:
      'As life tenant, the surviving spouse must maintain the home and pay property taxes but cannot sell it outright.',
  },
  'remainderman': {
    definition:
      'The person who takes title automatically upon the termination of a life estate. Holds a future interest called a remainder.',
    example:
      'The grantor\'s children are named as remaindermen and take fee simple title when the life tenant dies.',
  },
  'reversioner': {
    definition:
      'The original grantor or their successor who retains the right to have the property return at the end of a lesser estate such as a life estate.',
    example:
      'When a grantor creates a life estate without naming a remainderman, the grantor becomes the reversioner holding the future interest.',
  },
  'pur autre vie': {
    definition:
      'A life estate measured by the life of someone other than the life tenant. French for "for the life of another."',
    example:
      'A grantor deeds a cottage to "Anne for the life of Bob," giving Anne a life estate pur autre vie that ends when Bob dies.',
  },
  'conventional life estate': {
    definition:
      'A life estate created intentionally by a grantor through a deed or will, as opposed to one created by operation of law.',
    example:
      'A Virginia will leaving the family home "to my wife for life, then to our children" creates a conventional life estate.',
  },
  'legal life estate': {
    definition:
      'A life estate created by operation of law rather than by the grantor\'s express act. Includes historic dower and curtesy interests.',
    example:
      'Before modern reforms, a surviving Virginia wife received a legal life estate in one-third of her husband\'s real property (dower).',
  },
  'dower': {
    definition:
      'A common-law legal life estate giving a surviving wife a one-third life interest in the husband\'s real estate. Abolished in Virginia for decedents dying after January 1, 1991.',
    example:
      'Virginia abolished dower, replacing it with the modern elective share under the augmented estate system.',
  },
  'curtesy': {
    definition:
      'A common-law legal life estate giving a surviving husband a life interest in all real estate owned by his wife. Abolished in Virginia along with dower.',
    example:
      'Virginia no longer recognizes curtesy; surviving spouses now rely on the statutory elective share.',
  },
  'augmented estate': {
    definition:
      'The expanded decedent\'s estate (including certain lifetime transfers) used in Virginia to calculate a surviving spouse\'s elective share, replacing dower and curtesy.',
    example:
      'A Virginia surviving spouse can claim up to one-half of the augmented estate if the marriage lasted 15 years or more.',
  },
  'waste': {
    definition:
      'Conduct by a life tenant or other present interest holder that damages the property or diminishes its value, violating the duty owed to future interest holders.',
    example:
      'A life tenant who cuts down mature hardwoods for commercial sale commits waste actionable by the remainderman.',
  },

  'vested remainder': {
    definition:
      'A future interest in a named, living, ascertainable person that is not subject to any unmet condition precedent. Takes effect automatically when the prior estate ends.',
    example:
      'A deed "to Mary for life, then to John" gives John a vested remainder that takes effect when Mary dies.',
  },
  'contingent remainder': {
    definition:
      'A future interest subject to a condition precedent or given to an unascertained person. Does not become possessory unless the condition is satisfied.',
    example:
      '"To Mary for life, then to John if he graduates college" creates a contingent remainder dependent on John\'s graduation.',
  },
  'reversion': {
    definition:
      'The future interest retained by a grantor who conveys a lesser estate (such as a life estate) without specifying a remainder. Title returns to the grantor when the lesser estate ends.',
    example:
      'When a mother deeds her home "to my son for life" without naming a remainderman, she retains a reversion.',
  },
  'executory interest': {
    definition:
      'A future interest in a third party that cuts short a prior estate upon a stated event. Distinguished from a remainder because it divests rather than follows naturally.',
    example:
      '"To the school, but if alcohol is sold on site, then to the hospital" gives the hospital an executory interest.',
  },
  'rule against perpetuities': {
    definition:
      'A common-law rule voiding future interests that might not vest within 21 years after the death of a relevant person alive at creation. Intended to prevent indefinite restraints on alienation.',
    example:
      'A trust provision vesting property in "the first descendant to reach age 30 after 2100" likely violates the rule against perpetuities.',
  },
  'future interest': {
    definition:
      'A present legal right to property that will or may become possessory in the future, such as a remainder, reversion, or executory interest.',
    example:
      'The remainderman holds a future interest that becomes possessory at the life tenant\'s death.',
  },

  // ── Module 7, Ch3: Rights & Interests in Land ─────────────────────────────

  'riparian rights': {
    definition:
      'The water rights of owners whose land borders a flowing watercourse such as a river or stream. Includes reasonable use of the water.',
    example:
      'A Virginia farm bordering the James River has riparian rights to withdraw reasonable amounts of water for irrigation.',
  },
  'littoral rights': {
    definition:
      'The water rights of owners whose land borders a stationary body of water like a lake, ocean, or sea. Typically extends to the ordinary high-water mark.',
    example:
      'An oceanfront Virginia Beach owner has littoral rights to access and use the Atlantic Ocean adjacent to their property.',
  },
  'prior appropriation': {
    definition:
      'A western U.S. water rights doctrine granting rights based on first beneficial use ("first in time, first in right"). Not used in Virginia, which follows riparian rights.',
    example:
      'Arizona uses prior appropriation, so an earlier user has superior rights to scarce water over a later user, regardless of land ownership.',
  },
  'accretion': {
    definition:
      'The gradual, imperceptible addition of soil to land bordering a watercourse through natural deposit. Added land becomes the owner\'s property.',
    example:
      'Over decades of river flow, accretion expands a Virginia farmer\'s acreage along the shoreline.',
  },
  'avulsion': {
    definition:
      'The sudden, perceptible loss or addition of land caused by flooding, storm, or a shifting watercourse. Property boundaries generally do not change.',
    example:
      'When a hurricane-driven river cuts a new channel across a field, avulsion has occurred but original boundaries remain.',
  },
  'reliction': {
    definition:
      'The gradual recession of water leaving previously submerged land permanently exposed. The newly exposed land belongs to the adjoining owner.',
    example:
      'When a Virginia farm pond slowly recedes from drought, reliction adds the exposed bed to the adjoining owner\'s property.',
  },
  'alluvion': {
    definition:
      'The deposit of soil, sand, and sediment that accumulates against the shoreline through accretion.',
    example:
      'Alluvion deposited by annual flooding gradually enlarges a Shenandoah River landowner\'s parcel.',
  },
  'navigable waters': {
    definition:
      'Waters that are or can be used for commerce and travel. Subject to public use rights and state ownership of the underlying bed.',
    example:
      'The Potomac River is navigable water, so the public has boating access even across adjoining private frontage.',
  },
  'reasonable use doctrine': {
    definition:
      'The riparian principle that each owner along a watercourse may make reasonable use of the water so long as it does not unreasonably interfere with other riparian users.',
    example:
      'A Virginia riparian owner\'s irrigation withdrawal must follow the reasonable use doctrine and not dry up a downstream neighbor\'s supply.',
  },

  'air rights': {
    definition:
      'The ownership right to the space above the surface of land. Can be sold or leased separately from the surface estate, subject to FAA and local limits.',
    example:
      'A New York developer purchases air rights above a neighboring building to construct additional tower floors; Virginia owners similarly can sever air rights.',
  },
  'subsurface rights': {
    definition:
      'The ownership right to everything below the surface, including soil, minerals, oil, gas, and groundwater.',
    example:
      'A Southwest Virginia landowner sells subsurface rights to a coal company while retaining surface ownership.',
  },
  'mineral rights': {
    definition:
      'The right to extract minerals (coal, oil, gas, metals) from beneath the surface. Can be severed from surface ownership and separately conveyed.',
    example:
      'A deed reserving "all mineral rights to the grantor" severs the minerals from the surface estate sold to the buyer.',
  },
  'support rights': {
    definition:
      'The right to have land supported in its natural state by adjoining and underlying land. Includes lateral and subjacent support.',
    example:
      'A homeowner\'s support rights were violated when a neighbor excavated so deeply that the owner\'s yard collapsed.',
  },
  'lateral support': {
    definition:
      'The right to support of land by adjoining land, preventing the adjacent owner from excavating or activity that causes subsidence.',
    example:
      'A Richmond homeowner sues a developer whose side-yard excavation caused the homeowner\'s lawn to cave in, violating lateral support.',
  },
  'subjacent support': {
    definition:
      'The right to support of surface land by the earth beneath it, especially important where mineral rights have been severed.',
    example:
      'A surface owner whose home sinks due to mining under the property has a subjacent support claim against the mineral rights holder.',
  },
  'transferable development rights': {
    definition:
      'A zoning mechanism allowing owners of restricted parcels to sell unused development density to owners in receiving zones. Used for historic and conservation preservation.',
    example:
      'A Virginia historic property owner sells transferable development rights to a developer who adds density to a project elsewhere in the locality.',
  },
  'severance of mineral rights': {
    definition:
      'The legal separation of mineral rights from surface ownership, creating two distinct estates that can be owned and conveyed independently.',
    example:
      'After severance of mineral rights in an 1890s deed, the current surface owner in Southwest Virginia does not own the underlying coal.',
  },

  'homestead exemption': {
    definition:
      'Virginia\'s statutory protection for a householder\'s property from most creditor claims. Primary residence is exempt up to $50,000 under Va. Code §34-4; householders 65 or older or permanently disabled may claim up to $50,000 in additional exemption. Non-residence personal property exemption is $5,000 plus $500 per dependent.',
    example:
      'A married homeowner in Richmond with one dependent can claim the $50,000 primary residence exemption plus additional non-residence personal property exemptions when facing a judgment creditor.',
  },
  'exempt property': {
    definition:
      'Property that is protected by law from the reach of creditors, including statutorily designated items and amounts.',
    example:
      'Tools of the trade up to $10,000 are exempt property under Virginia Code protection from forced sale.',
  },
  'judgment creditor': {
    definition:
      'A creditor who has obtained a court judgment against a debtor and has the right to use legal processes to collect.',
    example:
      'A judgment creditor with a $50,000 Virginia judgment seeks to garnish wages and lien the debtor\'s real estate.',
  },
  'forced sale': {
    definition:
      'A court-ordered sale of a debtor\'s property to satisfy a creditor\'s judgment or lien.',
    example:
      'Virginia\'s homestead exemption shields a portion of equity from forced sale by non-consensual creditors.',
  },
  'Virginia homestead': {
    definition:
      'The Virginia statutory homestead exemption under Code Section 34-4, allowing a householder to exempt up to $50,000 in equity in a primary residence, plus an additional $50,000 enhancement if 65 or older or permanently disabled. Non-residence personal property exemption is $5,000 plus $500 per dependent.',
    example:
      'A disabled Virginia veteran claims a Virginia homestead exemption of $50,000 on their primary residence plus the additional $50,000 enhancement for disability.',
  },
  'householder': {
    definition:
      'Under Virginia exemption law, a resident of the Commonwealth who is the head of a household or otherwise qualifies for homestead protections.',
    example:
      'A Virginia householder who is the primary earner for their family may claim the homestead exemption when facing judgment.',
  },
  'exemption amount': {
    definition:
      'The dollar value of equity a debtor may protect under a specific exemption statute. Virginia\'s primary residence homestead exemption under Va. Code §34-4 is $50,000, with an additional $50,000 for householders 65+ or disabled.',
    example:
      'After deducting the $50,000 exemption amount from $120,000 in primary residence equity, $70,000 remains reachable by creditors.',
  },
  'bankruptcy exemption': {
    definition:
      'Protections under federal or state law that allow a bankruptcy debtor to retain certain property. Virginia has opted out of federal exemptions, requiring debtors to use state exemptions.',
    example:
      'A Virginia Chapter 7 debtor must use Virginia\'s state homestead exemption rather than the federal bankruptcy exemption.',
  },

  'police power': {
    definition:
      'The government\'s inherent authority to regulate private property to protect public health, safety, morals, and general welfare. Exercised through zoning, building codes, and environmental rules.',
    example:
      'Henrico County\'s zoning ordinance limiting residential lot sizes is an exercise of police power.',
  },
  'eminent domain': {
    definition:
      'The government\'s constitutional power to take private property for public use upon payment of just compensation.',
    example:
      'VDOT uses eminent domain to acquire strips of private land for an interstate widening project.',
  },
  'taxation': {
    definition:
      'The government power to levy property taxes to fund public services. Unpaid taxes create a superior tax lien that can lead to tax sale.',
    example:
      'Annual ad valorem real estate taxation by the City of Richmond funds schools, police, and local services.',
  },
  'escheat': {
    definition:
      'The reversion of property to the state when an owner dies with no heirs or valid will. Ensures land always has a recognized owner.',
    example:
      'When a Virginia decedent dies intestate with no ascertainable heirs, the property escheats to the Commonwealth.',
  },
  'PETE': {
    definition:
      'A memory aid for the four government powers affecting real property: Police power, Eminent domain, Taxation, and Escheat.',
    example:
      'Exam candidates use PETE to recall that zoning is police power, highway takings are eminent domain, annual bills are taxation, and heirless estates trigger escheat.',
  },
  'condemnation': {
    definition:
      'The legal proceeding by which the government exercises eminent domain to acquire private property for public use.',
    example:
      'VDOT filed a condemnation action in circuit court to take a portion of a Fairfax farm for a road expansion.',
  },
  'just compensation': {
    definition:
      'The fair market value paid to an owner whose property is taken by eminent domain, guaranteed by the U.S. and Virginia Constitutions.',
    example:
      'A landowner received $425,000 in just compensation after Virginia condemned two acres for a new school site.',
  },
  'inverse condemnation': {
    definition:
      'A lawsuit by a property owner alleging the government has effectively taken or damaged the property without formal condemnation, entitling the owner to just compensation.',
    example:
      'A homeowner whose house became unusable due to repeated flooding from a public drainage project sues for inverse condemnation.',
  },
  'ad valorem tax': {
    definition:
      'A tax based on the assessed value of property. The standard method for Virginia real estate taxation at the local level.',
    example:
      'A Richmond home assessed at $300,000 pays ad valorem tax calculated by multiplying value by the city\'s tax rate.',
  },
  'zoning': {
    definition:
      'Local government regulation dividing a jurisdiction into districts with specific allowed uses and development standards. Exercise of police power.',
    example:
      'Henrico County\'s R-3 residential zoning limits the area to single-family homes on quarter-acre lots.',
  },

  // ── Module 7, Ch4: Common Interest Communities ────────────────────────────

  'condominium': {
    definition:
      'A form of ownership where each owner holds fee simple title to an individual unit plus an undivided interest in the common elements, governed by the Virginia Condominium Act.',
    example:
      'A Virginia Beach condominium owner holds fee simple title to Unit 504 and a 1/120 undivided interest in the pool, hallways, and grounds.',
  },
  'Virginia Condominium Act': {
    definition:
      'Virginia Code Title 55.1, Subtitle IV, Chapter 19, which governs the creation, management, and sale of condominiums in the Commonwealth, including required disclosures.',
    example:
      'A condo developer must register with the CICB and comply with the Virginia Condominium Act before selling units.',
  },
  'common elements': {
    definition:
      'Portions of a condominium owned jointly by all unit owners, including roofs, lobbies, hallways, grounds, and recreational facilities.',
    example:
      'The swimming pool, lobby, and parking garage in a Virginia high-rise condo are common elements shared by all owners.',
  },
  'limited common elements': {
    definition:
      'Common elements reserved for the exclusive use of one or more specified units, such as assigned parking spaces or balconies.',
    example:
      'A balcony accessible only from Unit 8B is a limited common element reserved to that unit.',
  },
  'unit owners association': {
    definition:
      'The governing body of a condominium comprising all unit owners, responsible for managing common elements, collecting assessments, and enforcing rules.',
    example:
      'A Virginia unit owners association sends monthly assessments and enforces architectural restrictions for the building.',
  },
  'declaration': {
    definition:
      'The recorded instrument that creates a condominium or POA, describing units, common elements, covenants, and governing rules.',
    example:
      'The developer records the declaration in the circuit court, legally creating the condominium regime.',
  },
  'bylaws': {
    definition:
      'The governing rules of an association addressing board elections, meetings, voting procedures, and day-to-day operation.',
    example:
      'A Virginia condo\'s bylaws specify annual board elections and require 60% owner approval for budget changes.',
  },
  'condominium instruments': {
    definition:
      'The collection of documents establishing and governing a condominium: the declaration, bylaws, plats and plans, as required by the Virginia Condominium Act.',
    example:
      'Before selling a unit, the seller must provide the buyer with copies of all condominium instruments in the resale packet.',
  },
  'resale certificate': {
    definition:
      'A disclosure document required under the Virginia Condominium Act that provides a buyer with financial, governance, and rule information about the association. Triggers a three-day cancellation right.',
    example:
      'A Virginia condo buyer receives the resale certificate and has three days to cancel the contract without penalty.',
  },
  'percentage interest': {
    definition:
      'Each unit\'s proportional share of ownership in the common elements, typically allocated by square footage or value, and used to calculate assessments and voting power.',
    example:
      'A larger penthouse unit carries a 3% percentage interest compared to a 0.8% interest for a studio in the same building.',
  },

  'Property Owners Association Act': {
    definition:
      'Virginia Code Chapter 18 governing homeowner associations in planned communities outside condominium and cooperative forms, setting disclosure and governance requirements.',
    example:
      'A Chesterfield subdivision with mandatory HOA membership is governed by the Virginia Property Owners Association Act.',
  },
  'POA': {
    definition:
      'Property Owners Association. The statutory term in Virginia for a homeowners association governing a planned community of single-family lots.',
    example:
      'The POA sends quarterly dues notices to all lot owners in the subdivision.',
  },
  'HOA': {
    definition:
      'Homeowners Association. The common name for property owners associations that govern residential communities through covenants and assessments.',
    example:
      'The HOA board levied a special assessment of $500 per lot to repair community entry gates.',
  },
  'covenants': {
    definition:
      'Written promises recorded with the land that restrict or require certain uses, actions, or conditions. Enforceable against all subsequent owners.',
    example:
      'A subdivision covenant prohibiting chain-link fences binds every current and future lot owner.',
  },
  'assessment': {
    definition:
      'A fee charged by an association to unit or lot owners to fund common expenses, reserves, and services. Typically secured by an assessment lien.',
    example:
      'The monthly $250 HOA assessment funds landscaping, pool maintenance, and reserve contributions.',
  },
  'disclosure packet': {
    definition:
      'The document package required under the Virginia POA Act providing buyers with governing documents, financial statements, and pending matters. Provides a three-day cancellation right.',
    example:
      'The seller orders a POA disclosure packet, and the Virginia buyer has three days after receipt to terminate the contract.',
  },
  'common area': {
    definition:
      'Land or improvements owned by the POA (not the individual lot owners) for the use and enjoyment of all members, such as entry signs, community pools, and walking paths.',
    example:
      'The neighborhood\'s clubhouse and swimming pool sit on common area owned by the HOA.',
  },
  'architectural review': {
    definition:
      'The process by which an HOA committee approves exterior changes to ensure compliance with community standards and covenants.',
    example:
      'A homeowner submits paint color samples to architectural review before repainting the exterior.',
  },
  'CICB': {
    definition:
      'The Virginia Common Interest Community Board, which regulates associations, managers, and developers under the Department of Professional and Occupational Regulation.',
    example:
      'A Virginia community manager must hold a CICB license to provide management services to an HOA or condominium.',
  },

  'timeshare': {
    definition:
      'A form of shared ownership or use giving the purchaser the right to occupy a unit for specified periods each year. Can be structured as a real estate interest or a right-to-use license.',
    example:
      'A Williamsburg timeshare buyer purchases the right to use Unit 210 for the second week of July each year.',
  },
  'Virginia Real Estate Time-Share Act': {
    definition:
      'The Virginia statute regulating timeshare sales, disclosures, and the seven-day buyer cancellation right for timeshare interests sold in the Commonwealth.',
    example:
      'Under the Virginia Real Estate Time-Share Act, a buyer may cancel a timeshare purchase within seven calendar days of signing.',
  },
  'time-share estate': {
    definition:
      'A fee simple or leasehold interest in a timeshare unit constituting real property ownership. Conveyed by deed and recorded.',
    example:
      'A deeded time-share estate at a Virginia Beach resort gives the owner a recorded fee interest in the unit for a specific week.',
  },
  'time-share use': {
    definition:
      'A right-to-use timeshare that is personal property or a license, giving occupancy rights without ownership. Not conveyed by deed.',
    example:
      'A right-to-use vacation club membership gives time-share use rights without any recorded real property interest.',
  },
  'cooperative': {
    definition:
      'A form of shared ownership where residents own shares in a corporation that owns the building and receive a proprietary lease to occupy their unit. Shares are personal property.',
    example:
      'A New York-style co-op translated into Virginia: the resident holds corporate stock plus a proprietary lease for Apartment 4B.',
  },
  'proprietary lease': {
    definition:
      'The long-term occupancy agreement between a cooperative corporation and its shareholder, giving the shareholder the right to live in a specific unit.',
    example:
      'The co-op shareholder\'s proprietary lease grants exclusive possession of Unit 12C as long as corporate obligations are met.',
  },
  'shares of stock': {
    definition:
      'The personal property ownership interest in a cooperative corporation. Determines voting rights and proportional financial obligations.',
    example:
      'Buying a cooperative unit means acquiring shares of stock in the corporation that owns the building, along with a proprietary lease.',
  },
  'right of rescission': {
    definition:
      'A buyer\'s statutory right to cancel a contract within a specified period without penalty. Virginia timeshares: seven days; condos and POAs: three days after disclosure receipt.',
    example:
      'A Virginia timeshare buyer exercises the right of rescission on day five by sending written cancellation to the developer.',
  },
  'exchange program': {
    definition:
      'A service that allows timeshare owners to trade their usage rights with owners at other resorts worldwide. Common examples include RCI and Interval International.',
    example:
      'A Virginia timeshare owner uses an exchange program to swap their July Williamsburg week for a February ski-resort week in Colorado.',
  },

  // ── Module 8, Ch1: Liens ──────────────────────────────────────────────────

  'lien': {
    definition:
      'A legal claim or charge against property that secures payment of a debt or performance of an obligation. Creates an encumbrance on title.',
    example:
      'A Virginia deed of trust places a lien on the home, giving the lender the right to foreclose if the loan is not paid.',
  },
  'voluntary lien': {
    definition:
      'A lien placed on property with the owner\'s consent, typically by contract or agreement. Mortgages and deeds of trust are common examples.',
    example:
      'When a Virginia buyer signs a deed of trust to secure a mortgage loan, they create a voluntary lien on the property.',
  },
  'involuntary lien': {
    definition:
      'A lien imposed on property by operation of law without the owner\'s consent, such as tax liens, judgment liens, or mechanic\'s liens.',
    example:
      'After winning a civil lawsuit, a creditor dockets the judgment in Richmond, creating an involuntary lien on the debtor\'s real estate.',
  },
  'statutory lien': {
    definition:
      'A lien created by a specific statute, such as Virginia\'s mechanic\'s lien (Code Section 43-1) or the federal tax lien.',
    example:
      'A contractor\'s mechanic\'s lien is a statutory lien authorized by Virginia Code Section 43-1 for unpaid labor and materials.',
  },
  'equitable lien': {
    definition:
      'A lien recognized by courts of equity when fairness requires it, even without a specific statute or contract creating the lien.',
    example:
      'A Virginia court imposes an equitable lien on property paid for with embezzled funds to prevent unjust enrichment.',
  },
  'deed of trust': {
    definition:
      'A three-party security instrument used in Virginia to secure a real estate loan. The borrower (grantor) conveys title to a trustee to hold for the lender until the debt is repaid.',
    example:
      'In Virginia, a home buyer signs a deed of trust naming a trustee who can foreclose non-judicially if the borrower defaults.',
  },
  'mortgage': {
    definition:
      'A two-party security instrument used in title-theory states where the borrower pledges property to the lender as collateral. Rarely used in Virginia residential practice; deeds of trust (three-party instruments) are the overwhelming norm.',
    example:
      'A traditional mortgage uses court foreclosure, while Virginia\'s standard deed of trust allows trustee\'s foreclosure sale.',
  },
  'lien theory': {
    definition:
      'A mortgage law approach where the borrower retains title and the lender holds only a lien as security. States like Pennsylvania follow this theory.',
    example:
      'Under lien theory, the borrower keeps legal title and the lender must foreclose judicially to enforce the security interest.',
  },
  'title theory': {
    definition:
      'A mortgage law approach where the lender holds bare legal title until the loan is paid. Virginia uses a modified title theory via deeds of trust.',
    example:
      'In Virginia\'s title theory system, the deed of trust conveys title to a trustee who acts for both borrower and lender.',
  },
  'encumbrance': {
    definition:
      'Any claim, charge, or restriction on property that affects its value or use but does not prevent transfer of title. Includes liens, easements, and restrictive covenants.',
    example:
      'An existing HOA assessment and a utility easement are encumbrances disclosed on a Virginia title commitment.',
  },

  'specific lien': {
    definition:
      'A lien that attaches only to a particular identified property, such as a mortgage, property tax lien, or mechanic\'s lien.',
    example:
      'A deed of trust on a Richmond home is a specific lien affecting only that property, not the owner\'s other assets.',
  },
  'general lien': {
    definition:
      'A lien that attaches to all property (real and sometimes personal) owned by the debtor, such as a judgment lien or federal tax lien.',
    example:
      'A docketed Virginia judgment becomes a general lien attaching to every parcel of real estate the debtor owns in that circuit court.',
  },
  'lien priority': {
    definition:
      'The order in which liens are paid from the proceeds of a foreclosure or sale. Generally determined by recording date, with some statutory exceptions.',
    example:
      'After foreclosure, lien priority determines that the property tax lien is paid first, then the first deed of trust, then junior liens.',
  },
  'first in time first in right': {
    definition:
      'The general rule that earlier-recorded liens have priority over later-recorded liens. Subject to statutory super-priority exceptions.',
    example:
      'A deed of trust recorded in 2019 has priority over a judgment docketed in 2023 under first in time, first in right.',
  },
  'subordination agreement': {
    definition:
      'A written contract by which a senior lienholder agrees to take a lower priority position, allowing a junior lien to move up in priority.',
    example:
      'A second-mortgage lender signs a subordination agreement so the borrower\'s refinanced first lien stays in first position.',
  },
  'super-priority lien': {
    definition:
      'A lien given priority over previously-recorded liens by statute, such as property tax liens and certain HOA assessment liens.',
    example:
      'Virginia real estate tax liens are super-priority liens, paid ahead of all private liens at foreclosure.',
  },
  'ad valorem tax lien': {
    definition:
      'A super-priority lien created by unpaid property taxes assessed according to value. Automatically attaches January 1 each year in Virginia.',
    example:
      'Unpaid City of Richmond real estate taxes become an ad valorem tax lien that outranks the mortgage at foreclosure sale.',
  },
  'recording date': {
    definition:
      'The date and time a document is recorded in the land records. Usually determines lien priority under Virginia\'s race-notice recording statute.',
    example:
      'Two competing deeds of trust are prioritized by recording date, with the earlier-recorded lien taking precedence.',
  },

  "mechanic's lien": {
    definition:
      'A statutory lien available to contractors, subcontractors, and suppliers who furnish labor or materials for improvements to real property. Governed by Virginia Code Title 43.',
    example:
      'A roofer who replaced a Virginia homeowner\'s roof but was not paid files a mechanic\'s lien within 90 days to secure payment.',
  },
  'materialman lien': {
    definition:
      'A type of mechanic\'s lien filed by a supplier of materials used in the improvement of real property.',
    example:
      'A lumber yard that delivered framing materials to a job site but was not paid files a materialman lien on the property.',
  },
  'Virginia Code 43-1': {
    definition:
      'The Virginia statute establishing mechanic\'s liens for contractors, subcontractors, and suppliers. Sets filing deadlines and procedural requirements.',
    example:
      'Under Virginia Code 43-1, a general contractor must file a memorandum of lien within 90 days of last work to perfect a mechanic\'s lien.',
  },
  'perfecting a lien': {
    definition:
      'Taking the statutory steps required to make a lien effective and enforceable, including timely filing of a memorandum of lien in Virginia.',
    example:
      'Perfecting a mechanic\'s lien in Virginia requires recording a memorandum within 90 days of last work and filing suit within six months.',
  },
  'memorandum of lien': {
    definition:
      'The recorded document filed in the clerk\'s office that gives public notice of a mechanic\'s lien claim. Must contain specific statutory content.',
    example:
      'A Virginia contractor records a memorandum of lien listing the property, debt amount, owner, and dates of work.',
  },
  'lien claimant': {
    definition:
      'A contractor, subcontractor, supplier, or laborer asserting a mechanic\'s lien against property for unpaid work or materials.',
    example:
      'An HVAC subcontractor becomes a lien claimant after filing a memorandum of lien for unpaid installation work.',
  },
  'general contractor': {
    definition:
      'The primary contractor hired by the property owner who is responsible for overall construction and payment of subcontractors.',
    example:
      'A Virginia general contractor has 90 days from last work to file a mechanic\'s lien for unpaid amounts owed by the owner.',
  },
  'subcontractor': {
    definition:
      'A contractor hired by the general contractor (not the owner) to perform specialized portions of work. Has mechanic\'s lien rights but must serve notice in Virginia.',
    example:
      'A Virginia electrical subcontractor must serve a preliminary notice on the owner before its lien rights are enforceable.',
  },
  'commencement of work': {
    definition:
      'The starting date of construction or improvement work, important for establishing the priority of mechanic\'s liens in Virginia.',
    example:
      'Mechanic\'s lien priority relates back to commencement of work, so a contractor starting in January beats a deed of trust recorded in March.',
  },
  'notice of intent': {
    definition:
      'A preliminary written notice some Virginia lien claimants (particularly subcontractors) must provide to preserve the right to file a mechanic\'s lien.',
    example:
      'A subcontractor delivers a notice of intent to the owner warning that unpaid amounts may result in a mechanic\'s lien.',
  },

  'tax sale': {
    definition:
      'A public auction sale conducted by a locality to collect delinquent property taxes. In Virginia, conducted by the treasurer through a judicial sale process.',
    example:
      'After three years of unpaid taxes, the City of Richmond conducts a tax sale of the delinquent property to satisfy the tax lien.',
  },
  'tax lien certificate': {
    definition:
      'A document evidencing an investor\'s purchase of a delinquent tax lien in states that use that system. Virginia uses judicial tax sales rather than lien certificates.',
    example:
      'Florida sells tax lien certificates, while Virginia directs delinquent taxes to judicial sale of the real property itself.',
  },
  'judgment lien': {
    definition:
      'A general lien that attaches to all real estate owned by a judgment debtor in a Virginia circuit court, created by docketing the judgment.',
    example:
      'A $30,000 Virginia judgment docketed in Henrico Circuit Court becomes a judgment lien on every parcel the debtor owns in Henrico.',
  },
  'docketing': {
    definition:
      'The act of recording a judgment in the judgment lien book of a Virginia circuit court, which creates a lien on the debtor\'s real estate in that jurisdiction.',
    example:
      'Docketing a federal court judgment in Fairfax Circuit Court establishes a judgment lien on the debtor\'s Fairfax County property.',
  },
  'HOA assessment lien': {
    definition:
      'A lien imposed by a homeowners or condominium association for unpaid assessments. May have limited super-priority in some states; Virginia liens must be perfected by memorandum filing.',
    example:
      'A Virginia HOA files an assessment lien for $3,200 in unpaid dues against a delinquent owner\'s lot.',
  },
  'lis pendens': {
    definition:
      'A Latin phrase meaning "suit pending." A recorded notice that litigation is pending affecting title to real property, giving constructive notice to subsequent purchasers.',
    example:
      'A plaintiff records a lis pendens in the Virginia circuit court clerk\'s office to warn buyers that a quiet title suit is pending.',
  },
  'abstract of judgment': {
    definition:
      'A document summarizing a judgment that can be recorded in counties where the debtor owns property to create judgment liens there.',
    example:
      'After winning a $100,000 award, the creditor records an abstract of judgment in three Virginia counties where the debtor owns real estate.',
  },
  'writ of fieri facias': {
    definition:
      'A Virginia writ (often called a "fi. fa.") directing the sheriff to levy on a debtor\'s personal property to satisfy a judgment. Creates a lien on personalty.',
    example:
      'A Virginia judgment creditor obtains a writ of fieri facias, allowing the sheriff to seize the debtor\'s vehicle to satisfy the debt.',
  },

  // ── Module 8, Ch2: Encumbrances ───────────────────────────────────────────

  'easement': {
    definition:
      'A non-possessory right to use another person\'s land for a specific purpose. An encumbrance that typically runs with the land.',
    example:
      'A recorded easement grants a utility company the right to run power lines across a Virginia owner\'s property.',
  },
  'easement appurtenant': {
    definition:
      'An easement that benefits a specific parcel of land (the dominant tenement) and burdens another parcel (the servient tenement). Transfers automatically with the dominant estate.',
    example:
      'A driveway easement allowing Lot 5 to cross Lot 6 to reach the road is an easement appurtenant that transfers when Lot 5 sells.',
  },
  'easement in gross': {
    definition:
      'An easement benefiting a person or entity rather than a parcel of land. Commercial easements in gross (such as utility easements) are transferable; personal ones usually are not.',
    example:
      'Dominion Energy\'s right to maintain power lines across private Virginia land is a commercial easement in gross.',
  },
  'dominant tenement': {
    definition:
      'The parcel of land that benefits from an easement appurtenant. The owner has the right to use the servient tenement.',
    example:
      'A landlocked Virginia parcel is the dominant tenement benefiting from an access easement across the adjoining property.',
  },
  'servient tenement': {
    definition:
      'The parcel of land burdened by an easement, whose owner must allow the easement holder\'s use.',
    example:
      'The Virginia farm crossed by a neighbor\'s driveway easement is the servient tenement.',
  },
  'grant': {
    definition:
      'The creation of an easement by the servient owner\'s written conveyance to the dominant owner.',
    example:
      'A landowner creates an easement by grant when she signs and records a deed giving her neighbor the right to use a shared driveway.',
  },
  'reservation': {
    definition:
      'The creation of an easement when a grantor conveys land but retains a right of use over it for the benefit of land the grantor keeps.',
    example:
      'A seller conveys two acres to a buyer but reserves an easement across them to access the seller\'s remaining Virginia parcel.',
  },
  'runs with the land': {
    definition:
      'The quality of an encumbrance or covenant that binds all successive owners of the affected property, not just the original parties.',
    example:
      'A recorded utility easement runs with the land, binding every future purchaser of the servient tenement.',
  },
  'affirmative easement': {
    definition:
      'An easement allowing the holder to do something on another\'s land, such as cross it or run utility lines through it.',
    example:
      'A right-of-way allowing the neighbor to drive across the lot is an affirmative easement.',
  },
  'negative easement': {
    definition:
      'An easement restricting the servient owner from doing something on their own land, such as building higher than a certain height. Rare in Virginia outside conservation contexts.',
    example:
      'A conservation easement prohibiting new construction on a Virginia farm is a negative easement limiting the owner\'s development rights.',
  },

  'easement by necessity': {
    definition:
      'An easement created by operation of law when a parcel would otherwise be landlocked. Requires prior unity of ownership and strict necessity.',
    example:
      'When a Virginia seller conveys an interior parcel with no road frontage, an easement by necessity arises across the retained land.',
  },
  'easement by prescription': {
    definition:
      'An easement acquired by long, continuous, open, and adverse use of another\'s land. In Virginia, the prescriptive period is 20 years.',
    example:
      'A Virginia neighbor who openly uses a dirt path across an adjoining farm for 25 years without permission acquires an easement by prescription.',
  },
  'easement by implication': {
    definition:
      'An easement implied by law from the circumstances at the time a parcel was divided, where a prior, apparent, and continuous use existed.',
    example:
      'When a Virginia owner splits a parcel with a long-used shared well, an easement by implication may arise in favor of the parcel without the well.',
  },
  'landlocked parcel': {
    definition:
      'A parcel of land with no legal access to a public road. Often the basis for an easement by necessity.',
    example:
      'A landlocked parcel surrounded on all sides by private land qualifies for an easement by necessity across a neighbor.',
  },
  'prescriptive period': {
    definition:
      'The statutory length of time adverse use must continue to ripen into a prescriptive easement. Virginia\'s prescriptive period is 20 years.',
    example:
      'A hiker\'s daily shortcut across private Virginia land must continue for the full 20-year prescriptive period to ripen into an easement.',
  },
  'open and notorious': {
    definition:
      'A requirement for adverse possession and prescriptive easements meaning the use is visible and obvious, putting the owner on notice.',
    example:
      'Maintaining a paved driveway over a neighbor\'s lot is open and notorious use supporting a prescriptive easement claim.',
  },
  'adverse use': {
    definition:
      'Use of another\'s land without permission and contrary to the owner\'s rights. Required element for adverse possession and prescriptive easements.',
    example:
      'Parking commercial vehicles on the neighbor\'s vacant lot without consent is adverse use supporting a prescriptive claim.',
  },
  'continuous use': {
    definition:
      'Use that is regular and uninterrupted throughout the prescriptive period, though not necessarily constant. A required element for prescriptive easements.',
    example:
      'Seasonal but regular use of a farm lane every spring and fall for 20 years satisfies continuous use in Virginia.',
  },
  'prior existing use': {
    definition:
      'A use of one portion of land for the benefit of another, existing at the time a property is divided. Basis for an easement by implication.',
    example:
      'A shared sewer line used by both halves of a property before subdivision is a prior existing use supporting an implied easement.',
  },
  'quasi-easement': {
    definition:
      'A use by a single owner of one portion of their land for the benefit of another portion, which can ripen into an easement by implication when the parcels are later separated.',
    example:
      'An owner\'s use of a drainage ditch across one tract to benefit another is a quasi-easement until the tracts are split and sold.',
  },

  'encroachment': {
    definition:
      'A physical intrusion onto neighboring property, such as a fence, building overhang, or driveway extending across a boundary line.',
    example:
      'A Virginia neighbor\'s shed built two feet over the property line is an encroachment that may need to be removed or legalized.',
  },
  'license': {
    definition:
      'A revocable, personal permission to enter or use another\'s land for a specific purpose. Not an interest in land and typically not transferable.',
    example:
      'A homeowner giving a friend verbal permission to fish in a backyard pond has granted a license, not an easement.',
  },
  'profit a prendre': {
    definition:
      'A non-possessory right to enter another\'s land and take something of value, such as timber, minerals, crops, or game.',
    example:
      'A recorded profit a prendre allows a hunter to enter and take deer from a Virginia farm each fall.',
  },
  'revocable': {
    definition:
      'Capable of being canceled or withdrawn at will by the party granting the right. Licenses are typically revocable.',
    example:
      'A neighbor\'s permission to park in the driveway is a revocable license that can be withdrawn at any time.',
  },
  'irrevocable license': {
    definition:
      'A license that cannot be revoked, usually because the licensee has relied on it by investing substantial money or labor (license coupled with an interest or estoppel).',
    example:
      'A homeowner who spent $20,000 building a boat ramp with the lakefront owner\'s permission may have an irrevocable license by estoppel.',
  },
  'trespass': {
    definition:
      'An unauthorized intentional entry onto another\'s land. Can support a civil action for damages or injunction and may be a criminal offense.',
    example:
      'A hiker crossing a Virginia farmer\'s posted land without consent commits trespass.',
  },
  'prescriptive right': {
    definition:
      'A right acquired through long-term adverse, open, and continuous use, such as a prescriptive easement or title by adverse possession.',
    example:
      'A Virginia farmer who used a neighbor\'s lane openly for 20 years acquires a prescriptive right to continue that use.',
  },
  'estoppel': {
    definition:
      'An equitable doctrine preventing a party from asserting a right when another has reasonably relied on the party\'s conduct or representations to their detriment.',
    example:
      'A landowner who watched a neighbor spend thousands building a shared fence may be estopped from later denying an easement.',
  },

  'restrictive covenant': {
    definition:
      'A recorded agreement that restricts the use or development of land. Binds successors in title when properly created.',
    example:
      'A subdivision restrictive covenant prohibits homes smaller than 2,000 square feet, binding every lot owner.',
  },
  'deed restriction': {
    definition:
      'A limitation on the use of property contained in a deed. A type of restrictive covenant created by the grantor.',
    example:
      'A Virginia deed restriction prohibits using the property for any commercial purpose, binding all subsequent owners.',
  },
  'CC&Rs': {
    definition:
      'Covenants, Conditions & Restrictions. The recorded document in common-interest communities setting forth rules, restrictions, and obligations for owners.',
    example:
      'The CC&Rs for a Virginia planned community prohibit RVs from parking on driveways overnight.',
  },
  'covenant running with the land': {
    definition:
      'A covenant that binds subsequent owners of the burdened land and inures to the benefit of subsequent owners of the benefited land. Requires intent, notice, touch and concern, and privity.',
    example:
      'A recorded covenant requiring lot owners to maintain the entry landscaping is a covenant running with the land.',
  },
  'equitable servitude': {
    definition:
      'A land-use restriction enforceable in equity through injunction, even if not all technical requirements for a real covenant are satisfied. Requires notice and intent.',
    example:
      'A Virginia court enforces an equitable servitude against a homeowner who builds a garish neon sign in violation of recorded subdivision aesthetics rules.',
  },
  'general plan of development': {
    definition:
      'A common scheme of restrictions applying uniformly to all lots in a subdivision, supporting enforcement of equitable servitudes and implied restrictions.',
    example:
      'A Virginia developer\'s recorded general plan of development binds every lot owner to uniform architectural and setback rules.',
  },
  'changed conditions doctrine': {
    definition:
      'An equitable defense to enforcement of restrictive covenants where the character of the area has so changed that the restriction no longer serves its purpose.',
    example:
      'A residential-only covenant near a formerly rural area surrounded by commercial development may be unenforceable under the changed conditions doctrine.',
  },
  'privity of estate': {
    definition:
      'The relationship between successive owners of the same land (vertical privity) or between parties to the original covenant (horizontal privity), required for covenants to run with the land.',
    example:
      'A buyer purchasing from the original covenantor has privity of estate, so the burden of the covenant runs with the land to the buyer.',
  },
  'touch and concern': {
    definition:
      'A requirement that a covenant relate directly to the use, value, or enjoyment of the land for it to run with the land and bind successors.',
    example:
      'A covenant requiring lot owners to keep lawns mowed touches and concerns the land by affecting use and aesthetics.',
  },

  // ── Module 8, Ch3: Title & Recording ──────────────────────────────────────

  'chain of title': {
    definition:
      'The historical sequence of owners of a parcel of land, traced through recorded conveyances from the original grantor to the current owner.',
    example:
      'A Virginia title examiner traces the chain of title from a 1923 deed through each subsequent conveyance to today\'s owner.',
  },
  'title search': {
    definition:
      'An examination of public records to establish ownership history, liens, encumbrances, and defects affecting title to real property.',
    example:
      'Before closing, a Virginia settlement agent orders a title search covering at least 60 years of the property\'s records.',
  },
  'abstract of title': {
    definition:
      'A condensed history of the title to a parcel of real property, summarizing all recorded instruments in chronological order.',
    example:
      'An abstract of title for a Virginia farm lists every deed, mortgage, and lien recorded against the property since 1850.',
  },
  'title examiner': {
    definition:
      'A professional (often an attorney or paralegal) who searches public records and provides an opinion on the state of title.',
    example:
      'A Virginia title examiner prepares a title opinion identifying a judgment lien that must be released before closing.',
  },
  'grantor-grantee index': {
    definition:
      'A traditional public records index organizing recorded instruments alphabetically by the name of the grantor and grantee. Most Virginia circuit courts still use this system.',
    example:
      'A title examiner searches the Henrico grantor-grantee index for every deed referencing the property\'s chain of owners.',
  },
  'tract index': {
    definition:
      'A public records index organized by parcel or tract identifier rather than by party names. More efficient but not universal in Virginia.',
    example:
      'A modernized Virginia jurisdiction uses a tract index to pull every recorded document affecting a specific parcel number.',
  },
  'gap in chain': {
    definition:
      'A missing link in the recorded chain of title where a conveyance was not properly recorded, creating uncertainty about ownership.',
    example:
      'A deed from a 1960 estate was never recorded, creating a gap in chain that must be cured before the property can be sold.',
  },
  'cloud on title': {
    definition:
      'Any claim, encumbrance, or irregularity appearing in the public record that casts doubt on the validity of title.',
    example:
      'An old unreleased deed of trust from 1978 is a cloud on title that must be cleared before a Virginia sale can close.',
  },
  'title opinion': {
    definition:
      'A written attorney opinion summarizing the state of title, including ownership, liens, encumbrances, and recommended curative actions.',
    example:
      'A Virginia closing attorney issues a title opinion identifying two required releases before the property can be conveyed with clear title.',
  },

  'recording statute': {
    definition:
      'A state law establishing the rules for giving notice of property interests through public records and determining priority among competing claims.',
    example:
      'Virginia\'s recording statute (Code Section 55.1-407) follows the race-notice approach, rewarding the first good-faith purchaser to record.',
  },
  'race statute': {
    definition:
      'A recording statute that awards priority to whoever records first, regardless of notice or good faith. Used in a minority of states (not Virginia).',
    example:
      'Louisiana uses a race statute, so a later-recording buyer with notice of a prior unrecorded deed still wins priority if recorded first.',
  },
  'notice statute': {
    definition:
      'A recording statute giving priority to a subsequent bona fide purchaser without notice of a prior unrecorded claim, even if the BFP records later.',
    example:
      'Florida is a notice state, so a BFP who later purchases without knowing about an earlier unrecorded deed takes free of it.',
  },
  'race-notice statute': {
    definition:
      'A recording statute requiring a subsequent purchaser to both take without notice of the prior claim and record first to prevail. Virginia\'s rule.',
    example:
      'Under Virginia\'s race-notice statute, a later purchaser must buy without notice of the unrecorded prior deed and record first to take priority.',
  },
  'bona fide purchaser': {
    definition:
      'A buyer who purchases property for value in good faith without actual or constructive notice of adverse claims. Protected under recording statutes.',
    example:
      'A Virginia bona fide purchaser who pays market price and has no notice of an unrecorded prior deed is protected against it.',
  },
  'BFP': {
    definition:
      'Abbreviation for bona fide purchaser. A buyer for value, in good faith, and without notice of competing claims.',
    example:
      'To claim BFP status in a Virginia title dispute, the buyer must show payment of value, good faith, and no notice of the prior claim.',
  },
  'for value': {
    definition:
      'A requirement that a protected purchaser pay consideration worth more than a nominal amount. Donees and heirs generally do not qualify.',
    example:
      'A buyer who paid $300,000 cash for a Virginia home purchases for value, qualifying as a BFP.',
  },
  'without notice': {
    definition:
      'A requirement for BFP status: the purchaser must have no actual, constructive, or inquiry notice of prior unrecorded claims at the time of purchase.',
    example:
      'A buyer who closes without any red flags in the title search and nobody else in possession purchases without notice.',
  },
  'recording act': {
    definition:
      'Another name for a state\'s recording statute. Virginia\'s recording act sets the rules for establishing priority through public recording.',
    example:
      'The Virginia recording act governs whether an unrecorded deed is effective against a subsequent BFP who records first.',
  },

  'actual notice': {
    definition:
      'Direct, personal knowledge of a fact or claim. A purchaser with actual notice of a prior interest cannot claim BFP protection.',
    example:
      'A buyer whom the seller personally told about an existing lease has actual notice and takes subject to that lease.',
  },
  'constructive notice': {
    definition:
      'Legal notice imputed by law to everyone because a document has been properly recorded in the public records.',
    example:
      'A recorded Virginia deed provides constructive notice to all later purchasers, whether or not they actually search the records.',
  },
  'inquiry notice': {
    definition:
      'Notice imputed when facts exist that would cause a reasonable person to investigate further. Failure to investigate binds the purchaser with what the inquiry would have revealed.',
    example:
      'A Virginia buyer who sees a tenant in possession has inquiry notice and must ask about any unrecorded lease rights.',
  },
  'imputed notice': {
    definition:
      'Notice attributed to a person because of the knowledge of an agent acting within the scope of authority, or through constructive or inquiry notice.',
    example:
      'Knowledge held by a buyer\'s real estate agent is imputed notice to the buyer under agency principles.',
  },
  'recording': {
    definition:
      'The act of filing a document in the public land records. In Virginia, recording is done in the circuit court clerk\'s office of the county or city where the property is located.',
    example:
      'Recording a Virginia deed in the Fairfax Circuit Court clerk\'s office provides constructive notice to the world.',
  },
  'public records': {
    definition:
      'Government-maintained records of documents affecting real property, accessible to the public for title search and research purposes.',
    example:
      'Virginia circuit court public records include deeds, deeds of trust, liens, and plats affecting real property.',
  },
  'physical inspection': {
    definition:
      'A visual examination of a property that can reveal facts giving rise to inquiry notice, such as parties in possession, encroachments, or easements in use.',
    example:
      'A physical inspection of a Virginia property revealing a well-worn path across the lot puts a buyer on inquiry notice of a possible easement.',
  },
  'possession': {
    definition:
      'Actual occupancy of land. Visible possession by someone other than the record owner gives inquiry notice of that possessor\'s rights.',
    example:
      'A tenant in possession of a Virginia property gives any prospective buyer inquiry notice of the lease terms.',
  },

  'marketable title': {
    definition:
      'Title reasonably free from doubts and the possibility of litigation, such that a reasonable buyer would accept it. Implied in every Virginia purchase contract absent contrary language.',
    example:
      'A Virginia seller with an open mechanic\'s lien against the property cannot convey marketable title until the lien is released.',
  },
  'insurable title': {
    definition:
      'Title that a title insurance company will agree to insure, which may be a lower standard than marketable title because insurers can except out certain defects.',
    example:
      'A Virginia title company may issue a policy on insurable title by excepting a minor encroachment that would render title unmarketable.',
  },
  'title commitment': {
    definition:
      'A preliminary report from a title insurance company committing to issue a policy subject to listed exceptions, requirements, and curative items.',
    example:
      'A Virginia buyer reviews the title commitment and requires the seller to release an old deed of trust listed as a requirement.',
  },
  'title defect': {
    definition:
      'Any flaw in title that impairs the owner\'s right to possess, use, or transfer the property. Includes breaks in chain, liens, and invalid prior conveyances.',
    example:
      'A forged deed in the chain of title is a title defect that must be cured before marketable title can be conveyed.',
  },
  'merchantable title': {
    definition:
      'Another term for marketable title. Title a prudent buyer would accept without special inducement.',
    example:
      'Virginia contracts typically require the seller to deliver merchantable title at closing.',
  },
  'title objection': {
    definition:
      'A written notice from a buyer to a seller listing defects in title that must be cured for the buyer to proceed with the purchase.',
    example:
      'A Virginia buyer\'s title objection letter lists an unreleased judgment and demands release before closing.',
  },
  'cure period': {
    definition:
      'The time frame in which a seller must fix identified title defects under a purchase contract. Virginia contracts often specify a reasonable time or a stated number of days.',
    example:
      'Under the Virginia contract\'s cure period, the seller has 30 days to resolve title objections before the buyer may terminate.',
  },
  'standard exceptions': {
    definition:
      'The default exclusions from a title insurance policy, such as unrecorded mechanic\'s liens, survey matters, and parties in possession, that appear unless specifically removed.',
    example:
      'A Virginia owner\'s title policy includes standard exceptions for unrecorded easements visible on an accurate survey.',
  },

  // ── Module 8, Ch4: Title Insurance & Defects ──────────────────────────────

  "owner's title policy": {
    definition:
      'A title insurance policy protecting the property owner against covered title defects. In Virginia, typically issued at closing and paid once; coverage lasts as long as the owner holds title.',
    example:
      'A Virginia buyer pays a one-time premium for an owner\'s title policy that protects against pre-closing title defects.',
  },
  "lender's title policy": {
    definition:
      'A title insurance policy protecting the mortgage lender for the outstanding loan balance, required by most lenders and typically paid by the buyer at closing.',
    example:
      'A Virginia lender requires the borrower to purchase a lender\'s title policy in the amount of the loan.',
  },
  'premium': {
    definition:
      'The one-time payment for title insurance coverage. Paid at closing and covers the insured for as long as they hold the insured interest.',
    example:
      'A Virginia buyer pays a title premium of approximately $500-$1,200 depending on the purchase price.',
  },
  'one-time payment': {
    definition:
      'The single premium paid at closing for title insurance, distinguishing it from annually-renewed insurance such as hazard insurance.',
    example:
      'Unlike homeowners insurance, title insurance is a one-time payment made at closing with coverage lasting indefinitely.',
  },
  'coverage amount': {
    definition:
      'The maximum dollar amount the title insurer will pay under the policy. Owner\'s policies typically equal the purchase price; lender\'s policies equal the loan balance.',
    example:
      'A Virginia owner\'s policy with a coverage amount of $400,000 matches the purchase price of the home.',
  },
  'simultaneous issue': {
    definition:
      'A discounted title insurance rate offered when both owner\'s and lender\'s policies are issued at the same closing by the same insurer.',
    example:
      'A Virginia closing uses simultaneous issue pricing to reduce the combined cost of the owner\'s and lender\'s policies.',
  },
  'ALTA': {
    definition:
      'The American Land Title Association, which develops standard title insurance policy forms and endorsements used throughout the United States.',
    example:
      'A Virginia lender requires an ALTA loan policy with standard endorsements to insure the mortgage.',
  },
  'endorsements': {
    definition:
      'Add-on coverages or modifications to a standard title insurance policy that provide coverage for specific risks such as zoning, surveys, or restrictions.',
    example:
      'A Virginia buyer of a condo adds an ALTA 4-06 condominium endorsement to the title policy for extended coverage.',
  },
  'settlement agent': {
    definition:
      'The person or entity conducting a real estate closing in Virginia, overseeing document signing, funds disbursement, and recording. Licensed under the Consumer Real Estate Settlement Protection Act.',
    example:
      'A Virginia settlement agent, typically an attorney or licensed settlement company, manages the closing and issues the title policy.',
  },

  'curative instrument': {
    definition:
      'A recorded document used to fix a defect in title, such as a corrective deed, release, affidavit, or quitclaim.',
    example:
      'A corrective deed is a curative instrument that fixes a misspelled grantee name in a prior Virginia deed.',
  },
  'corrective deed': {
    definition:
      'A new deed executed and recorded to correct errors in a previously recorded deed, such as misspellings, legal description errors, or missing signatures.',
    example:
      'A Virginia grantor records a corrective deed to fix an incorrect lot number in the original deed\'s legal description.',
  },
  'quitclaim deed': {
    definition:
      'A deed that transfers whatever interest the grantor has in the property, without warranties. Commonly used to clear clouds and release claims.',
    example:
      'A relative signs a Virginia quitclaim deed releasing any possible inherited interest to clear a cloud on title.',
  },
  'affidavit of heirship': {
    definition:
      'A sworn statement identifying the heirs of a deceased owner, used when no probate proceeding has occurred, to establish ownership in land records.',
    example:
      'A Virginia family records an affidavit of heirship to document the descent of a small family property without a formal probate.',
  },
  'release of lien': {
    definition:
      'A recorded instrument by which a lienholder formally discharges a lien from the public records, clearing the encumbrance from title.',
    example:
      'After the loan payoff, the Virginia lender records a release of lien on the deed of trust, clearing the encumbrance.',
  },
  'title clearing': {
    definition:
      'The process of identifying and resolving title defects so that marketable or insurable title can be conveyed.',
    example:
      'A Virginia settlement agent performs title clearing by obtaining releases of two old liens before closing.',
  },
  'void deed': {
    definition:
      'A deed that is completely invalid from the outset, usually due to forgery, lack of delivery, or execution by someone without legal capacity. Conveys no title.',
    example:
      'A forged deed is a void deed that cannot pass title to anyone, even a BFP.',
  },
  'voidable deed': {
    definition:
      'A deed that is valid until successfully challenged, typically due to fraud, duress, undue influence, or grantor\'s minority. May be valid in the hands of a BFP.',
    example:
      'A deed obtained by fraud is a voidable deed that the defrauded grantor can rescind, unless the property has been sold to a BFP.',
  },

  'quiet title action': {
    definition:
      'A lawsuit filed in Virginia circuit court to establish clear ownership of real property and resolve competing claims, clouds, or adverse interests.',
    example:
      'A Virginia landowner files a quiet title action to eliminate a 50-year-old recorded claim from a distant relative.',
  },
  'suit to quiet title': {
    definition:
      'Another name for a quiet title action. A judicial proceeding seeking a court decree confirming title and extinguishing adverse claims.',
    example:
      'A suit to quiet title in Henrico Circuit Court resulted in a decree removing a disputed easement from the owner\'s land.',
  },
  'adverse claim': {
    definition:
      'A claim by someone other than the record owner asserting an interest in the property. Target of a quiet title action.',
    example:
      'A neighbor\'s adverse claim based on a questionable boundary survey is resolved by quiet title in Virginia circuit court.',
  },
  'decree': {
    definition:
      'The court\'s written order or judgment resolving a case. In a Virginia quiet title action, the decree establishes ownership and extinguishes adverse claims.',
    example:
      'The circuit court enters a decree of quiet title vesting fee simple ownership in the plaintiff and barring the defendants\' claims.',
  },
  'tax sale challenge': {
    definition:
      'A legal action contesting the validity of a tax sale, often brought by a former owner alleging defective notice or procedural violations.',
    example:
      'A Virginia tax sale challenge argued improper service on the delinquent owner, seeking to set aside the sale.',
  },
  'boundary dispute': {
    definition:
      'A disagreement between adjoining landowners about the precise location of their property line. Often resolved through survey and quiet title action.',
    example:
      'A Virginia boundary dispute between neighbors over a five-foot strip is resolved by court decree after a professional survey.',
  },
  'adverse possession': {
    definition:
      'A method of acquiring title to real property by open, notorious, continuous, exclusive, and hostile possession for the statutory period. In Virginia, the period is 15 years.',
    example:
      'A Virginia claimant who fenced and farmed a disputed strip for 15 years can acquire title through adverse possession via quiet title action.',
  },
}
