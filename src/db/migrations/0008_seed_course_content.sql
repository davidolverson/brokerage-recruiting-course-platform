-- Regenerated 2026-05-16 from the full 12-module course-content.ts + course-questions.ts.
-- Order: modules -> chapters -> lessons -> (question + its options per CTE). Run after 0007_course_tables.sql.
-- 12 modules / 52 chapters / 184 lessons / 580 questions.

DELETE FROM course_quiz_options;

DELETE FROM course_quiz_questions;

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours) VALUES
  ('virginia-real-estate-law', 'Virginia Real Estate Law & Regulations', 'State-specific law, agency, fair housing, and ethics', 'pre-license', 1, true, 6),
  ('property-ownership-land-use', 'Property Ownership & Land Use', 'Ownership forms, legal descriptions, zoning, and environmental law', 'pre-license', 2, true, 4),
  ('contracts-agency', 'Contracts & Agency', 'Contract law fundamentals, purchase agreements, and the offer process', 'pre-license', 3, true, 6),
  ('finance-valuation', 'Finance & Valuation', 'Mortgage types, loan qualification, appraisal, and real estate math', 'pre-license', 4, true, 5),
  ('practice-ethics', 'Practice & Ethics', 'Day-to-day practice, disclosures, closings, and title transfer', 'pre-license', 5, true, 6),
  ('virginia-specific-regulations', 'Virginia-Specific Regulations', 'DPOR rules, Virginia contract forms, closing practices, and post-license requirements', 'pre-license', 6, true, 5),
  ('real-property-concepts', 'Real Property Concepts & Estates', 'Property rights, estates in land, and real vs personal property', 'pre-license', 7, true, 6),
  ('liens-encumbrances-title', 'Liens, Encumbrances & Title', 'Property liens, easements, title searches, recording statutes, and title insurance', 'pre-license', 8, true, 6),
  ('advanced-finance-taxation', 'Advanced Real Estate Finance & Taxation', 'Government-backed loans, creative financing, taxation, and investment analysis', 'pre-license', 9, true, 6),
  ('virginia-residential-transaction', 'The Virginia Residential Transaction', 'From listing to closing and beyond: navigating the Virginia transaction process', 'pre-license', 10, true, 6),
  ('commercial-investment-real-estate', 'Commercial & Investment Real Estate', 'Commercial property types, leases, investment strategies, and property management', 'pre-license', 11, true, 6),
  ('risk-management-professional-development', 'Risk Management & Professional Development', 'Insurance, advertising rules, professional standards, and career preparation', 'pre-license', 12, true, 6)
ON CONFLICT (slug) DO UPDATE SET title=EXCLUDED.title, description=EXCLUDED.description, course_type=EXCLUDED.course_type, order_index=EXCLUDED.order_index, is_published=true, estimated_hours=EXCLUDED.estimated_hours;

INSERT INTO course_chapters (module_id, slug, title, order_index, is_published)
SELECT (SELECT id FROM course_modules WHERE slug = v.mslug), v.slug, v.title, v.ord, true
FROM (VALUES
  ('virginia-real-estate-law', 'virginia-license-law-dpor', 'Virginia License Law & DPOR', 1),
  ('virginia-real-estate-law', 'agency-relationships', 'Agency Relationships', 2),
  ('virginia-real-estate-law', 'fair-housing-laws', 'Fair Housing Laws', 3),
  ('virginia-real-estate-law', 'landlord-tenant-law', 'Landlord-Tenant Law', 4),
  ('virginia-real-estate-law', 'ethics-standards-of-conduct', 'Ethics & Standards of Conduct', 5),
  ('property-ownership-land-use', 'forms-of-property-ownership', 'Forms of Property Ownership', 1),
  ('property-ownership-land-use', 'legal-descriptions-surveys', 'Legal Descriptions & Surveys', 2),
  ('property-ownership-land-use', 'land-use-controls-zoning', 'Land Use Controls & Zoning', 3),
  ('property-ownership-land-use', 'environmental-regulations', 'Environmental Regulations', 4),
  ('contracts-agency', 'contract-fundamentals', 'Contract Fundamentals', 1),
  ('contracts-agency', 'purchase-agreements', 'Purchase Agreements', 2),
  ('contracts-agency', 'listing-agreements', 'Listing Agreements', 3),
  ('contracts-agency', 'offer-counteroffer-process', 'Offer & Counteroffer Process', 4),
  ('contracts-agency', 'contract-termination-breach', 'Contract Termination & Breach', 5),
  ('finance-valuation', 'mortgage-types-terms', 'Mortgage Types & Terms', 1),
  ('finance-valuation', 'loan-process-qualification', 'Loan Process & Qualification', 2),
  ('finance-valuation', 'appraisal-methods', 'Appraisal Methods', 3),
  ('finance-valuation', 'real-estate-math-calculations', 'Real Estate Math & Calculations', 4),
  ('practice-ethics', 'practice-of-real-estate', 'Practice of Real Estate', 1),
  ('practice-ethics', 'property-disclosures', 'Property Disclosures', 2),
  ('practice-ethics', 'closing-procedures', 'Closing Procedures', 3),
  ('practice-ethics', 'transfer-of-title', 'Transfer of Title', 4),
  ('practice-ethics', 'property-management', 'Property Management', 5),
  ('virginia-specific-regulations', 'dpor-rules-regulations', 'DPOR Rules & Regulations', 1),
  ('virginia-specific-regulations', 'virginia-contract-forms', 'Virginia Contract Forms', 2),
  ('virginia-specific-regulations', 'virginia-closing-practices', 'Virginia Closing Practices', 3),
  ('virginia-specific-regulations', 'continuing-education-post-license', 'Continuing Education & Post-License', 4),
  ('virginia-specific-regulations', 'common-interest-communities', 'Common Interest Communities', 5),
  ('real-property-concepts', 'bundle-of-rights-property-types', 'Bundle of Rights & Property Types', 1),
  ('real-property-concepts', 'estates-in-land', 'Estates in Land', 2),
  ('real-property-concepts', 'rights-interests-in-land', 'Rights & Interests in Land', 3),
  ('real-property-concepts', 'common-interest-ownership', 'Common Interest Communities', 4),
  ('liens-encumbrances-title', 'liens', 'Liens', 1),
  ('liens-encumbrances-title', 'encumbrances', 'Encumbrances', 2),
  ('liens-encumbrances-title', 'title-recording', 'Title & Recording', 3),
  ('liens-encumbrances-title', 'title-insurance-defects', 'Title Insurance & Defects', 4),
  ('advanced-finance-taxation', 'government-backed-loan-programs', 'Government-Backed Loan Programs', 1),
  ('advanced-finance-taxation', 'creative-alternative-financing', 'Creative & Alternative Financing', 2),
  ('advanced-finance-taxation', 'real-estate-taxation', 'Real Estate Taxation', 3),
  ('advanced-finance-taxation', 'investment-analysis', 'Investment Analysis', 4),
  ('virginia-residential-transaction', 'pre-listing-to-contract', 'Pre-Listing to Contract', 1),
  ('virginia-residential-transaction', 'under-contract-to-closing', 'Under Contract to Closing', 2),
  ('virginia-residential-transaction', 'virginia-settlement-process', 'The Virginia Settlement Process', 3),
  ('virginia-residential-transaction', 'post-closing-special-situations', 'Post-Closing & Special Situations', 4),
  ('commercial-investment-real-estate', 'commercial-property-types', 'Commercial Property Types', 1),
  ('commercial-investment-real-estate', 'commercial-leases', 'Commercial Leases', 2),
  ('commercial-investment-real-estate', 'real-estate-investment-strategies', 'Real Estate Investment Strategies', 3),
  ('commercial-investment-real-estate', 'commercial-property-management', 'Property Management', 4),
  ('risk-management-professional-development', 'risk-management-insurance', 'Risk Management & Insurance', 1),
  ('risk-management-professional-development', 'virginia-advertising-technology-rules', 'Virginia Advertising & Technology Rules', 2),
  ('risk-management-professional-development', 'professional-standards-growth', 'Professional Standards & Growth', 3),
  ('risk-management-professional-development', 'exam-preparation-career-launch', 'Exam Preparation & Career Launch', 4)
) AS v(mslug, slug, title, ord)
ON CONFLICT (slug) DO UPDATE SET title=EXCLUDED.title, module_id=EXCLUDED.module_id, order_index=EXCLUDED.order_index, is_published=true;

INSERT INTO course_lessons (chapter_id, slug, title, lesson_type, estimated_minutes, order_index, is_published)
SELECT (SELECT id FROM course_chapters WHERE slug = v.cslug), v.slug, v.title, v.ltype, v.mins, v.ord, true
FROM (VALUES
  ('virginia-license-law-dpor', 'dpor-overview-licensing-requirements', 'DPOR Overview & Licensing Requirements', 'reading', 25, 1),
  ('virginia-license-law-dpor', 'dpor-disciplinary-actions-penalties', 'Disciplinary Actions & Penalties', 'scenario', 30, 2),
  ('virginia-license-law-dpor', 'brokerage-operations-supervision', 'Brokerage Operations & Supervision Requirements', 'reading', 23, 3),
  ('virginia-license-law-dpor', 'license-exemptions-exceptions', 'License Exemptions & Exceptions', 'interactive', 16, 4),
  ('agency-relationships', 'agency-fundamentals-fiduciary-duties', 'Agency Fundamentals & Fiduciary Duties', 'reading', 26, 1),
  ('agency-relationships', 'types-of-agency-virginia', 'Types of Agency in Virginia Transactions', 'interactive', 23, 2),
  ('agency-relationships', 'agency-disclosure-requirements', 'Agency Disclosure Requirements', 'reading', 20, 3),
  ('agency-relationships', 'termination-of-agency', 'Termination of Agency', 'scenario', 16, 4),
  ('fair-housing-laws', 'federal-fair-housing-act', 'Federal Fair Housing Act: Protected Classes & Prohibited Acts', 'reading', 26, 1),
  ('fair-housing-laws', 'virginia-fair-housing-law', 'Virginia Fair Housing Law & Additional Protections', 'reading', 20, 2),
  ('fair-housing-laws', 'fair-housing-exemptions-enforcement', 'Fair Housing Exemptions & Enforcement', 'interactive', 18, 3),
  ('landlord-tenant-law', 'vrlta-overview-applicability', 'VRLTA Overview & Applicability', 'reading', 23, 1),
  ('landlord-tenant-law', 'security-deposits-tenant-rights', 'Security Deposits & Tenant Rights', 'interactive', 21, 2),
  ('landlord-tenant-law', 'eviction-process-landlord-remedies', 'Eviction Process & Landlord Remedies', 'scenario', 25, 3),
  ('ethics-standards-of-conduct', 'nar-code-of-ethics-overview', 'NAR Code of Ethics Overview', 'reading', 23, 1),
  ('ethics-standards-of-conduct', 'virginia-standards-conduct', 'Virginia Standards of Conduct for Licensees', 'reading', 21, 2),
  ('ethics-standards-of-conduct', 'trust-honesty-professional-relationships', 'Trust, Honesty & Professional Relationships', 'scenario', 18, 3),
  ('forms-of-property-ownership', 'tenancy-in-common-joint-tenancy', 'Tenancy in Common & Joint Tenancy', 'reading', 23, 1),
  ('forms-of-property-ownership', 'community-property-tenancy-entireties', 'Community Property & Tenancy by the Entireties', 'reading', 20, 2),
  ('forms-of-property-ownership', 'condominiums-cooperatives-pud', 'Condominiums, Cooperatives & PUDs', 'interactive', 25, 3),
  ('forms-of-property-ownership', 'trusts-corporations-ownership', 'Trusts, Corporations & Business Entity Ownership', 'reading', 18, 4),
  ('legal-descriptions-surveys', 'metes-and-bounds', 'Metes and Bounds Descriptions', 'interactive', 21, 1),
  ('legal-descriptions-surveys', 'rectangular-survey-system', 'Rectangular Survey System', 'interactive', 20, 2),
  ('legal-descriptions-surveys', 'lot-block-plat-system', 'Lot, Block & Plat System', 'reading', 15, 3),
  ('land-use-controls-zoning', 'zoning-classifications-variances', 'Zoning Classifications & Variances', 'reading', 21, 1),
  ('land-use-controls-zoning', 'deed-restrictions-cc-rs', 'Deed Restrictions & CC&Rs', 'reading', 18, 2),
  ('land-use-controls-zoning', 'eminent-domain-condemnation', 'Eminent Domain & Condemnation', 'reading', 16, 3),
  ('environmental-regulations', 'lead-paint-asbestos-disclosures', 'Lead Paint, Asbestos & Federal Disclosure Requirements', 'reading', 21, 1),
  ('environmental-regulations', 'wetlands-flood-zones', 'Wetlands, Flood Zones & Environmental Hazards', 'reading', 20, 2),
  ('environmental-regulations', 'mold-radon-environmental-site-assessment', 'Mold, Radon & Phase I/II Environmental Assessments', 'reading', 18, 3),
  ('contract-fundamentals', 'essential-elements-valid-contract', 'Essential Elements of a Valid Contract', 'reading', 25, 1),
  ('contract-fundamentals', 'statute-of-frauds-real-estate', 'Statute of Frauds & Writing Requirements', 'reading', 20, 2),
  ('contract-fundamentals', 'contract-performance-conditions', 'Contract Performance & Conditions', 'interactive', 21, 3),
  ('contract-fundamentals', 'contract-interpretation-principles', 'Contract Interpretation Principles', 'reading', 16, 4),
  ('purchase-agreements', 'virginia-purchase-agreement-anatomy', 'Anatomy of a Virginia Purchase Agreement', 'reading', 26, 1),
  ('purchase-agreements', 'financing-contingencies', 'Financing Contingencies & Loan Approval', 'scenario', 21, 2),
  ('purchase-agreements', 'inspection-contingencies', 'Inspection Contingencies & Negotiating Repairs', 'interactive', 23, 3),
  ('purchase-agreements', 'earnest-money-handling', 'Earnest Money: Handling, Disputes & Default', 'interactive', 20, 4),
  ('listing-agreements', 'exclusive-right-to-sell', 'Exclusive Right to Sell vs. Exclusive Agency', 'reading', 21, 1),
  ('listing-agreements', 'listing-agreement-terms', 'Key Listing Agreement Terms & Obligations', 'reading', 20, 2),
  ('listing-agreements', 'terminating-listing-agreements', 'Terminating Listing Agreements', 'reading', 16, 3),
  ('offer-counteroffer-process', 'presenting-receiving-offers', 'Presenting & Receiving Offers', 'reading', 20, 1),
  ('offer-counteroffer-process', 'counteroffer-negotiation', 'Counteroffers & Negotiation Strategy', 'interactive', 21, 2),
  ('offer-counteroffer-process', 'multiple-offer-situations', 'Multiple Offer Situations & Best Practices', 'scenario', 18, 3),
  ('contract-termination-breach', 'breach-of-contract-remedies', 'Breach of Contract & Remedies', 'reading', 23, 1),
  ('contract-termination-breach', 'contract-cancellation-procedures', 'Contract Cancellation Procedures & Mutual Release', 'interactive', 20, 2),
  ('contract-termination-breach', 'assignments-novations', 'Contract Assignments & Novations', 'reading', 15, 3),
  ('mortgage-types-terms', 'conventional-vs-government-loans', 'Conventional vs. Government-Backed Loans', 'reading', 23, 1),
  ('mortgage-types-terms', 'fixed-vs-adjustable-rate', 'Fixed-Rate vs. Adjustable-Rate Mortgages', 'reading', 20, 2),
  ('mortgage-types-terms', 'special-mortgage-products', 'Special Mortgage Products', 'reading', 18, 3),
  ('mortgage-types-terms', 'mortgage-clauses-provisions', 'Key Mortgage Clauses & Provisions', 'reading', 21, 4),
  ('loan-process-qualification', 'underwriting-qualification-criteria', 'Underwriting & Qualification Criteria', 'reading', 23, 1),
  ('loan-process-qualification', 'respa-tila-disclosure-requirements', 'RESPA, TILA & Loan Disclosure Requirements', 'reading', 20, 2),
  ('loan-process-qualification', 'secondary-mortgage-market', 'The Secondary Mortgage Market', 'reading', 16, 3),
  ('appraisal-methods', 'sales-comparison-approach', 'Sales Comparison Approach', 'interactive', 23, 1),
  ('appraisal-methods', 'income-cost-approaches', 'Income & Cost Approaches to Value', 'reading', 21, 2),
  ('appraisal-methods', 'appraisal-process-standards', 'Appraisal Process & USPAP Standards', 'reading', 18, 3),
  ('real-estate-math-calculations', 'commission-calculations', 'Commission Calculations', 'interactive', 20, 1),
  ('real-estate-math-calculations', 'prorations-and-adjustments', 'Prorations & Closing Adjustments', 'interactive', 25, 2),
  ('real-estate-math-calculations', 'loan-calculations', 'Loan Calculations & Mortgage Math', 'interactive', 23, 3),
  ('real-estate-math-calculations', 'area-volume-calculations', 'Area, Volume & Acreage Calculations', 'interactive', 18, 4),
  ('practice-of-real-estate', 'mls-cooperation-compensation', 'MLS: Cooperation, Access & Compensation', 'reading', 21, 1),
  ('practice-of-real-estate', 'buyer-representation-process', 'The Buyer Representation Process', 'reading', 23, 2),
  ('practice-of-real-estate', 'listing-process-marketing', 'The Listing Process & Property Marketing', 'reading', 21, 3),
  ('practice-of-real-estate', 'property-management-fundamentals', 'Property Management Fundamentals', 'reading', 20, 4),
  ('property-disclosures', 'virginia-residential-disclosure-act', 'Virginia Residential Property Disclosure Act', 'reading', 21, 1),
  ('property-disclosures', 'hoa-condo-disclosures', 'HOA & Condominium Disclosure Packets', 'reading', 20, 2),
  ('property-disclosures', 'special-property-disclosures', 'Special Property Disclosures', 'reading', 18, 3),
  ('closing-procedures', 'virginia-closing-process', 'The Virginia Closing Process', 'reading', 23, 1),
  ('closing-procedures', 'closing-costs-breakdown', 'Closing Costs: Buyer & Seller Breakdown', 'interactive', 23, 2),
  ('closing-procedures', 'title-insurance-types', 'Title Insurance: Owner''s & Lender''s Policies', 'reading', 20, 3),
  ('closing-procedures', 'closing-document-review', 'Reviewing Closing Documents with Clients', 'scenario', 21, 4),
  ('transfer-of-title', 'types-of-deeds', 'Types of Deeds & Their Covenants', 'reading', 21, 1),
  ('transfer-of-title', 'requirements-valid-deed', 'Requirements for a Valid Deed', 'reading', 18, 2),
  ('transfer-of-title', 'title-examination-recording', 'Title Examination & Recording in Virginia', 'reading', 20, 3),
  ('property-management', 'property-manager-roles-responsibilities', 'Property Manager Roles & Responsibilities', 'reading', 18, 1),
  ('property-management', 'tenant-relations-lease-administration', 'Tenant Relations & Lease Administration', 'reading', 20, 2),
  ('property-management', 'financial-management-maintenance', 'Financial Management & Maintenance', 'reading', 20, 3),
  ('dpor-rules-regulations', 'vreb-regulations-18-vac-135', 'VREB Regulations: 18 VAC 135-20 In Detail', 'reading', 25, 1),
  ('dpor-rules-regulations', 'team-structure-rules', 'Real Estate Teams: Structure & Compliance', 'reading', 20, 2),
  ('dpor-rules-regulations', 'property-management-dpor', 'Property Management Under DPOR Rules', 'reading', 21, 3),
  ('virginia-contract-forms', 'rein-nvar-standard-forms', 'REIN & NVAR Standard Contract Forms', 'reading', 23, 1),
  ('virginia-contract-forms', 'virginia-specific-addenda', 'Virginia-Specific Addenda & Disclosures', 'reading', 20, 2),
  ('virginia-contract-forms', 'virginia-lease-forms', 'Virginia Lease Forms & VRLTA Compliance', 'reading', 18, 3),
  ('virginia-closing-practices', 'virginia-settlement-agents', 'Virginia Settlement Agents & Title Requirements', 'reading', 21, 1),
  ('virginia-closing-practices', 'virginia-taxes-transfer-fees', 'Virginia Transfer Taxes & Recording Fees', 'interactive', 21, 2),
  ('virginia-closing-practices', 'new-construction-closings', 'New Construction Closings & Builder Contracts', 'reading', 20, 3),
  ('continuing-education-post-license', 'ce-requirements-renewal', 'CE Requirements & License Renewal', 'reading', 18, 1),
  ('continuing-education-post-license', 'post-license-first-year', 'Post-License Education: First-Year Requirements', 'reading', 16, 2),
  ('common-interest-communities', 'cic-fundamentals-virginia', 'CIC Fundamentals in Virginia', 'reading', 18, 1),
  ('common-interest-communities', 'resale-disclosure-association-documents', 'Resale Disclosure & Association Documents', 'reading', 20, 2),
  ('common-interest-communities', 'rights-responsibilities-governance', 'Rights, Responsibilities & Governance', 'reading', 18, 3),
  ('bundle-of-rights-property-types', 'bundle-of-legal-rights', 'The Bundle of Legal Rights', 'reading', 25, 1),
  ('bundle-of-rights-property-types', 'real-property-vs-personal-property', 'Real Property vs Personal Property', 'reading', 25, 2),
  ('bundle-of-rights-property-types', 'fixtures-trade-fixtures-emblements', 'Fixtures, Trade Fixtures & Emblements', 'interactive', 30, 3),
  ('bundle-of-rights-property-types', 'annexation-tests-fixture-disputes', 'Annexation Tests & Fixture Disputes', 'scenario', 25, 4),
  ('estates-in-land', 'fee-simple-absolute', 'Freehold Estates: Fee Simple Absolute', 'reading', 25, 1),
  ('estates-in-land', 'fee-simple-defeasible', 'Fee Simple Defeasible Estates', 'reading', 30, 2),
  ('estates-in-land', 'life-estates', 'Life Estates: Conventional and Legal', 'interactive', 28, 3),
  ('estates-in-land', 'future-interests-remainders-reversions', 'Future Interests: Remainders and Reversions', 'reading', 25, 4),
  ('rights-interests-in-land', 'water-rights', 'Water Rights: Riparian, Littoral & Prior Appropriation', 'reading', 25, 1),
  ('rights-interests-in-land', 'air-subsurface-mineral-rights', 'Air Rights, Subsurface Rights & Mineral Rights', 'reading', 23, 2),
  ('rights-interests-in-land', 'homestead-exemption-virginia', 'Homestead Exemption in Virginia', 'reading', 20, 3),
  ('rights-interests-in-land', 'government-powers-pete', 'Government Powers: PETE', 'interactive', 26, 4),
  ('common-interest-ownership', 'virginia-condominium-act', 'Virginia Condominium Act', 'reading', 26, 1),
  ('common-interest-ownership', 'virginia-property-owners-association-act', 'Virginia Property Owners Association Act', 'reading', 25, 2),
  ('common-interest-ownership', 'timeshares-cooperative-ownership', 'Time-Shares and Cooperative Ownership', 'reading', 23, 3),
  ('liens', 'voluntary-vs-involuntary-liens', 'Voluntary vs Involuntary Liens', 'reading', 25, 1),
  ('liens', 'lien-priority-specific-vs-general', 'Specific vs General Liens & Lien Priority', 'interactive', 26, 2),
  ('liens', 'mechanics-liens-virginia', 'Mechanic''s Liens in Virginia', 'reading', 30, 3),
  ('liens', 'tax-judgment-hoa-liens', 'Tax Liens, Judgment Liens & HOA Assessment Liens', 'interactive', 26, 4),
  ('encumbrances', 'easements-appurtenant-in-gross', 'Easements: Appurtenant vs In Gross, Creation Methods', 'reading', 28, 1),
  ('encumbrances', 'easements-necessity-prescription-implication', 'Easements by Necessity, Prescription & Implication', 'scenario', 26, 2),
  ('encumbrances', 'encroachments-licenses-profits', 'Encroachments, Licenses & Profits', 'reading', 21, 3),
  ('encumbrances', 'restrictive-covenants', 'Restrictive Covenants: Creation, Enforcement & Termination', 'reading', 25, 4),
  ('title-recording', 'chain-of-title-search', 'Chain of Title & Title Search Process', 'reading', 25, 1),
  ('title-recording', 'recording-statutes-virginia', 'Recording Statutes: Race, Notice & Race-Notice', 'interactive', 25, 2),
  ('title-recording', 'constructive-vs-actual-notice', 'Constructive vs Actual Notice', 'reading', 21, 3),
  ('title-recording', 'marketable-title-vs-insurable-title', 'Marketable Title vs Insurable Title', 'reading', 23, 4),
  ('title-insurance-defects', 'owners-vs-lenders-title-policies', 'Owner''s vs Lender''s Title Policies', 'reading', 26, 1)
) AS v(cslug, slug, title, ltype, mins, ord)
ON CONFLICT (slug) DO UPDATE SET title=EXCLUDED.title, chapter_id=EXCLUDED.chapter_id, lesson_type=EXCLUDED.lesson_type, estimated_minutes=EXCLUDED.estimated_minutes, order_index=EXCLUDED.order_index, is_published=true;

INSERT INTO course_lessons (chapter_id, slug, title, lesson_type, estimated_minutes, order_index, is_published)
SELECT (SELECT id FROM course_chapters WHERE slug = v.cslug), v.slug, v.title, v.ltype, v.mins, v.ord, true
FROM (VALUES
  ('title-insurance-defects', 'title-defects-curing', 'Title Defects & Curing Defects', 'interactive', 25, 2),
  ('title-insurance-defects', 'quiet-title-actions-virginia', 'Quiet Title Actions in Virginia', 'scenario', 23, 3),
  ('government-backed-loan-programs', 'fha-loans', 'FHA Loans: Requirements, MIP, Limits & Assumability', 'reading', 25, 1),
  ('government-backed-loan-programs', 'va-loans', 'VA Loans: Eligibility, Entitlement, Funding Fee & No PMI', 'interactive', 25, 2),
  ('government-backed-loan-programs', 'usda-rural-development-loans', 'USDA/Rural Development Loans', 'reading', 20, 3),
  ('government-backed-loan-programs', 'state-local-assistance-vhda', 'State & Local Assistance Programs (VHDA)', 'interactive', 23, 4),
  ('creative-alternative-financing', 'seller-financing-land-contracts', 'Seller Financing & Land Contracts/Contracts for Deed', 'reading', 25, 1),
  ('creative-alternative-financing', 'lease-option-lease-purchase', 'Lease-Option and Lease-Purchase Agreements', 'scenario', 21, 2),
  ('creative-alternative-financing', 'bridge-blanket-wraparound-mortgages', 'Bridge Loans, Blanket Mortgages & Wraparound Mortgages', 'reading', 23, 3),
  ('real-estate-taxation', 'property-tax-assessment-virginia', 'Property Tax Assessment in Virginia', 'reading', 23, 1),
  ('real-estate-taxation', 'capital-gains-tax-primary-residence', 'Capital Gains Tax: Primary Residence Exclusion', 'interactive', 21, 2),
  ('real-estate-taxation', '1031-tax-deferred-exchanges', '1031 Tax-Deferred Exchanges', 'interactive', 26, 3),
  ('real-estate-taxation', 'tax-deductions-homeowners-investors', 'Tax Deductions for Homeowners and Investors', 'reading', 21, 4),
  ('investment-analysis', 'cash-flow-analysis-noi', 'Cash Flow Analysis and NOI Calculation', 'interactive', 25, 1),
  ('investment-analysis', 'capitalization-rate-grm', 'Capitalization Rate and Gross Rent Multiplier', 'reading', 23, 2),
  ('investment-analysis', 'leverage-equity-buildup', 'Leverage and Equity Buildup', 'scenario', 23, 3),
  ('investment-analysis', 'depreciation-investment-property', 'Depreciation for Investment Property', 'reading', 21, 4),
  ('pre-listing-to-contract', 'cma-preparation-pricing-strategy', 'CMA Preparation and Pricing Strategy', 'interactive', 25, 1),
  ('pre-listing-to-contract', 'listing-presentation-marketing', 'Listing Presentation and Property Marketing', 'reading', 23, 2),
  ('pre-listing-to-contract', 'buyer-consultation-needs-analysis', 'Buyer Consultation and Needs Analysis', 'scenario', 21, 3),
  ('pre-listing-to-contract', 'writing-offer-virginia-forms', 'Writing the Offer: Virginia REIN/NVAR Forms', 'interactive', 26, 4),
  ('under-contract-to-closing', 'home-inspection-negotiations', 'Home Inspection Process and Negotiations', 'reading', 23, 1),
  ('under-contract-to-closing', 'appraisal-process-challenges', 'Appraisal: Process, Challenges & Gap Issues', 'interactive', 25, 2),
  ('under-contract-to-closing', 'loan-processing-timeline', 'Loan Processing Timeline and Conditions', 'reading', 21, 3),
  ('under-contract-to-closing', 'title-search-survey-closing-prep', 'Title Search, Survey, and Closing Preparation', 'scenario', 23, 4),
  ('virginia-settlement-process', 'role-settlement-agents-virginia', 'Role of Settlement Agents in Virginia', 'reading', 21, 1),
  ('virginia-settlement-process', 'trid-loan-estimate-closing-disclosure', 'TRID: Loan Estimate and Closing Disclosure', 'interactive', 25, 2),
  ('virginia-settlement-process', 'prorations-taxes-hoa-rent', 'Prorations: Taxes, HOA Dues & Rent', 'interactive', 23, 3),
  ('virginia-settlement-process', 'walkthrough-closing-day', 'Walk-Through and Closing Day Procedures', 'scenario', 21, 4),
  ('post-closing-special-situations', 'post-closing-obligations-recordation', 'Post-Closing Obligations and Recordation', 'reading', 20, 1),
  ('post-closing-special-situations', 'short-sales-foreclosures-virginia', 'Short Sales and Foreclosures in Virginia', 'reading', 25, 2),
  ('post-closing-special-situations', 'wire-fraud-prevention-cybersecurity', 'Wire Fraud Prevention and Cybersecurity', 'scenario', 20, 3),
  ('post-closing-special-situations', 'new-construction-deposits-warranties', 'New Construction: Deposits, Warranties & Builder Contracts', 'interactive', 25, 4),
  ('commercial-property-types', 'office-retail-industrial-multifamily', 'Office, Retail, Industrial, and Multifamily Classifications', 'reading', 25, 1),
  ('commercial-property-types', 'mixed-use-adaptive-reuse', 'Mixed-Use Development and Adaptive Reuse', 'interactive', 25, 2),
  ('commercial-property-types', 'special-purpose-properties', 'Special Purpose Properties: Hotels, Self-Storage, and Medical', 'reading', 20, 3),
  ('commercial-property-types', 'commercial-vs-residential-valuation', 'Commercial Property Valuation Differences vs. Residential', 'interactive', 30, 4),
  ('commercial-leases', 'gross-net-triple-net-leases', 'Gross Lease, Net Lease, and NNN (Triple Net) Lease', 'reading', 25, 1),
  ('commercial-leases', 'percentage-leases-escalation-clauses', 'Percentage Leases and Escalation Clauses', 'interactive', 23, 2),
  ('commercial-leases', 'cam-charges', 'Common Area Maintenance (CAM) Charges', 'reading', 21, 3),
  ('commercial-leases', 'lease-negotiation-ti-free-rent-options', 'Lease Negotiation: Tenant Improvements, Free Rent, and Options', 'scenario', 26, 4),
  ('real-estate-investment-strategies', 'direct-ownership-vs-syndication', 'Direct Ownership vs. Syndication and Partnerships', 'reading', 25, 1),
  ('real-estate-investment-strategies', 'reits-structure-types', 'REITs: Structure, Types, and How They Work', 'interactive', 23, 2),
  ('real-estate-investment-strategies', 'crowdfunding-private-equity', 'Real Estate Crowdfunding and Private Equity', 'reading', 20, 3),
  ('real-estate-investment-strategies', 'risk-assessment-market-interest-liquidity', 'Risk Assessment: Market, Interest Rate, Liquidity, and Management', 'scenario', 25, 4),
  ('commercial-property-management', 'virginia-property-management-licensing', 'Virginia Property Management Licensing Requirements', 'reading', 23, 1),
  ('commercial-property-management', 'management-agreements-fiduciary-duties', 'Management Agreements and Fiduciary Duties', 'scenario', 25, 2),
  ('commercial-property-management', 'tenant-relations-maintenance-reporting', 'Tenant Relations, Maintenance, and Financial Reporting', 'interactive', 23, 3),
  ('risk-management-insurance', 'errors-omissions-insurance', 'Errors & Omissions (E&O) Insurance for Agents', 'reading', 23, 1),
  ('risk-management-insurance', 'antitrust-violations-real-estate', 'Antitrust Violations in Real Estate: Price Fixing, Group Boycotts, Market Allocation, and Tie-in Arrangements', 'interactive', 26, 2),
  ('risk-management-insurance', 'fraud-misrepresentation-liability', 'Fraud, Misrepresentation, and Liability Exposure', 'reading', 25, 3),
  ('risk-management-insurance', 'risk-reduction-documentation-compliance', 'Risk Reduction: Documentation, Communication, and Compliance', 'interactive', 23, 4),
  ('virginia-advertising-technology-rules', 'vreb-advertising-regulations', 'VREB Advertising Regulations (18 VAC 135-20-180)', 'reading', 25, 1),
  ('virginia-advertising-technology-rules', 'social-media-compliance', 'Social Media Compliance for Licensees', 'interactive', 21, 2),
  ('virginia-advertising-technology-rules', 'internet-advertising-virtual-tours-idx', 'Internet Advertising, Virtual Tours, and IDX Rules', 'reading', 23, 3),
  ('virginia-advertising-technology-rules', 'do-not-call-can-spam-telemarketing', 'Do-Not-Call, CAN-SPAM, and Telemarketing Rules', 'scenario', 21, 4),
  ('professional-standards-growth', 'nar-code-of-ethics-deep-dive', 'NAR Code of Ethics Deep Dive (Key Articles)', 'reading', 26, 1),
  ('professional-standards-growth', 'broker-supervision-accountability', 'Broker Supervision and Accountability', 'interactive', 23, 2),
  ('professional-standards-growth', 'building-real-estate-business', 'Building a Real Estate Business: Prospecting, SOI, and Farming', 'scenario', 21, 3),
  ('professional-standards-growth', 'diverse-populations-cultural-competency', 'Working with Diverse Populations and Cultural Competency', 'reading', 23, 4),
  ('exam-preparation-career-launch', 'post-license-education-30-hour-requirement', 'Post-License Education: The 30-Hour First-Year Requirement', 'reading', 25, 1),
  ('exam-preparation-career-launch', 'psi-exam-format-registration', 'PSI Exam Format, Registration, and Test-Day Procedures', 'reading', 25, 2),
  ('exam-preparation-career-launch', 'study-strategies-high-frequency-topics', 'Study Strategies and High-Frequency Exam Topics', 'interactive', 26, 3),
  ('exam-preparation-career-launch', 'career-paths-residential-commercial-pm-appraisal', 'Career Paths: Residential, Commercial, Property Management, and Appraisal', 'reading', 23, 4)
) AS v(cslug, slug, title, ltype, mins, ord)
ON CONFLICT (slug) DO UPDATE SET title=EXCLUDED.title, chapter_id=EXCLUDED.chapter_id, lesson_type=EXCLUDED.lesson_type, estimated_minutes=EXCLUDED.estimated_minutes, order_index=EXCLUDED.order_index, is_published=true;

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'Which Virginia state agency is directly responsible for licensing and regulating real estate professionals?', 'DPOR is the state agency that oversees professional licensing in Virginia, including real estate. Within DPOR, the Virginia Real Estate Board (VREB) is the specific regulatory body. The Virginia Association of Realtors is a trade organization, not a licensing authority.', 'easy', 'dpor', 1, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Association of Realtors (VAR)', false, 1), ('Virginia Department of Professional and Occupational Regulation (DPOR)', true, 2), ('Virginia Department of Housing and Community Development (DHCD)', false, 3), ('Virginia Real Estate Commission (VREC)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'How many hours of pre-license education must a salesperson candidate complete before sitting for the Virginia Real Estate Salesperson Exam?', 'Virginia requires 60 hours of pre-license education from a DPOR-approved school for salesperson candidates. The 180-hour requirement applies to broker candidates. Knowing this distinction is a common exam trap.', 'easy', 'dpor', 2, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('40 hours', false, 1), ('45 hours', false, 2), ('60 hours', true, 3), ('120 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'A salesperson candidate passes the Virginia Real Estate Exam on March 1st. By what date must the candidate submit a license application to DPOR?', 'Virginia law requires that a salesperson license application be submitted within 12 months of passing the exam. If the candidate does not apply within that window, they must retake the exam. Scores do not carry over indefinitely.', 'medium', 'dpor', 3, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('March 1st of the following year (12 months)', true, 1), ('June 1st of the same year (90 days)', false, 2), ('September 1st of the same year (180 days)', false, 3), ('There is no deadline; scores never expire', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'Under Virginia law, what is the minimum active salesperson experience required before an individual may apply for a broker license?', 'To qualify for a Virginia broker license, the applicant must hold an active salesperson license for at least 36 of the preceding 48 months. This window allows for brief gaps in licensure without disqualifying otherwise experienced agents.', 'medium', 'dpor', 4, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('24 months of the preceding 36 months', false, 1), ('36 months of the preceding 48 months', true, 2), ('48 months of continuous active service', false, 3), ('60 months of the preceding 72 months', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'Every Virginia real estate firm must designate one individual who bears ultimate responsibility for the firm''s compliance with real estate law. This person holds which designation?', 'The Principal Broker is the designated broker who is ultimately responsible for the brokerage''s compliance with Virginia real estate law and the actions of all affiliated licensees. Every firm must have exactly one principal broker. Supervising brokers manage branch offices but report to the principal broker.', 'easy', 'dpor', 5, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Supervising Broker', false, 1), ('Associate Broker', false, 2), ('Principal Broker', true, 3), ('Designated Agent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'The Virginia Real Estate Board (VREB) may impose a maximum civil penalty of how much per violation for a licensee who violates Virginia real estate law?', 'VREB has the authority to impose civil penalties of up to $5,000 per violation. In addition to fines, VREB can suspend or revoke a license and require remedial education. Understanding the Board''s disciplinary powers is frequently tested on the state exam.', 'medium', 'dpor', 6, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$1,000 per violation', false, 1), ('$2,500 per violation', false, 2), ('$5,000 per violation', true, 3), ('$10,000 per violation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'section_exam', 'A licensed salesperson from North Carolina wants to obtain a Virginia salesperson license. Virginia has a reciprocal agreement with North Carolina. Under "license by endorsement," which of the following is most accurate?', 'Under Virginia''s reciprocity agreements, out-of-state licensees from reciprocal states may apply for a Virginia license by endorsement without retaking the national portion of the exam. They must still pass the Virginia state exam portion and demonstrate they meet Virginia''s specific requirements. Virginia does not grant automatic licensure.', 'hard', 'dpor', 7, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The applicant is exempt from all Virginia requirements and is automatically licensed', false, 1), ('The applicant must pass only the Virginia state portion of the exam and meet Virginia-specific requirements', true, 2), ('The applicant must retake both the national and state portions of the Virginia exam', false, 3), ('Reciprocity in Virginia applies only to broker licenses, not salesperson licenses', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'chapter_quiz', 'A Virginia real estate licensee''s license renewal cycle is how many years, and how many continuing education hours are required at each renewal?', 'Virginia real estate licenses renew on a 2-year cycle. To renew an active license, licensees must complete 16 hours of DPOR-approved continuing education, including mandatory hours in topics such as fair housing and legal updates. Failing to renew on time places the license in an inactive or expired status.', 'medium', 'dpor', 8, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 year; 8 hours of continuing education', false, 1), ('2 years; 16 hours of continuing education', true, 2), ('3 years; 24 hours of continuing education', false, 3), ('4 years; 30 hours of continuing education', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'section_exam', 'A salesperson changes brokerage firms. Under Virginia law, what must happen for the salesperson''s license to remain active at the new firm?', 'When a salesperson changes firms, the new principal broker must submit the required notification to DPOR to activate the salesperson''s license under the new brokerage. A salesperson may NOT practice real estate until their license is properly affiliated with the new firm. Practicing while unaffiliated is a violation.', 'hard', 'dpor', 9, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The salesperson must submit a new license application and pay all initial fees again', false, 1), ('The new principal broker must notify DPOR of the affiliation change and activate the license under the new firm', true, 2), ('The salesperson can practice under the new firm immediately without any notification to DPOR', false, 3), ('The salesperson must retake the state exam before affiliating with a new broker', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-license-law-dpor'), 'mock_exam', 'Which of the following activities requires a Virginia real estate license?', 'A property manager who leases units owned by others for compensation is acting as a real estate broker and must be licensed. Virginia law provides specific exemptions for attorneys acting within the scope of legal practice, owners selling their own property (FSBO), and court-appointed fiduciaries. Compensation for brokerage activity on behalf of others is the key trigger requiring licensure.', 'hard', 'dpor', 10, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An attorney who disposes of real property on behalf of a client as part of legal representation', false, 1), ('A property manager who, for compensation, lists and leases residential units owned by third parties', true, 2), ('A person selling their own home without the assistance of an agent', false, 3), ('A court-appointed receiver managing a foreclosed property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'Under Virginia agency law, when must a licensee provide the agency disclosure form to a prospective buyer?', 'Virginia requires licensees to provide agency disclosure at the first substantive contact, which is the first contact where meaningful information about a specific property is discussed. This ensures buyers understand their representation options before any negotiation begins.', 'easy', 'agency', 11, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('At the time of making an offer', false, 1), ('At settlement', false, 2), ('At the first substantive contact with the prospective buyer', true, 3), ('Only if the buyer asks about representation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'A listing agent and buyer''s agent both work for the same brokerage. The buyer wants to purchase the listing agent''s listing. With proper consent, which type of agency is permissible under Virginia law?', 'Virginia permits dual agency when both the buyer and the seller provide informed written consent. In dual agency, the agent (or brokerage) represents both parties and must remain neutral. Without written consent from both parties, dual agency is illegal and can result in license discipline.', 'medium', 'agency', 12, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Single agency for the seller only', false, 1), ('Transaction brokerage (non-agent status)', false, 2), ('Dual agency with informed written consent of both parties', true, 3), ('This situation is prohibited entirely in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'Which fiduciary duty requires an agent to place the client''s interests above all others, including the agent''s own financial interest?', 'The duty of loyalty requires the agent to act solely in the client''s best interest, avoiding conflicts of interest and self-dealing. This is the cornerstone fiduciary duty. For example, an agent cannot steer a buyer away from a property because the agent would earn a lower commission.', 'easy', 'agency', 13, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Disclosure', false, 1), ('Loyalty', true, 2), ('Obedience', false, 3), ('Accountability', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'A buyer''s agent learns that the seller is in severe financial hardship and must sell quickly. Under the duty of loyalty to the buyer, the agent should:', 'A buyer''s agent owes loyalty to the buyer and must share all material information that could benefit the buyer in negotiation, including the seller''s motivation to sell quickly. This information is not the seller''s confidential information in a buyer agency context. The duty shifts based on which party the agent represents.', 'medium', 'agency', 14, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Disclose the seller''s financial situation to the buyer to help negotiate a lower price', true, 1), ('Keep the information confidential since it came from the listing agent', false, 2), ('Refuse to share the information because it may be considered privileged', false, 3), ('Disclose to both buyer and seller simultaneously to remain neutral', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'In Virginia, a "designated agency" arrangement means:', 'Designated agency in Virginia allows a brokerage to assign one agent to exclusively represent the buyer and a different agent to exclusively represent the seller, even though both agents work for the same firm. This avoids the conflicts inherent in traditional dual agency and allows each client to receive full fiduciary representation.', 'medium', 'agency', 15, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One broker represents both the buyer and seller as a neutral intermediary', false, 1), ('The principal broker designates separate agents within the same firm to each exclusively represent the buyer and seller', true, 2), ('The buyer and seller each designate their own brokerage firms', false, 3), ('A referral arrangement between two out-of-state brokers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'section_exam', 'A seller tells the listing agent that the basement flooded twice last year and instructs the agent to keep this confidential. What must the listing agent do under Virginia law?', 'Virginia law requires disclosure of all material defects that the agent knows about, regardless of the seller''s instructions. Basement flooding is a material defect that would affect a buyer''s decision. A licensee cannot follow client instructions that require them to violate the law. The duty of obedience to a client never extends to illegal acts.', 'hard', 'agency', 16, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Honor the seller''s instructions because the duty of confidentiality applies to all client communications', false, 1), ('Disclose the flooding to any prospective buyer because it is a material defect', true, 2), ('Disclose only if the buyer directly asks about water intrusion issues', false, 3), ('Withdraw from the listing rather than disclose or withhold the information', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'Which type of listing agreement gives the listing broker the exclusive right to a commission regardless of who procures the buyer, including the seller themselves?', 'An exclusive right to sell listing guarantees the listing broker a commission if the property sells during the listing period, no matter who finds the buyer, including the seller. An exclusive agency listing allows the seller to find their own buyer without owing a commission. An open listing pays commission only to the broker who procures the buyer.', 'easy', 'agency', 17, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Open listing', false, 1), ('Exclusive agency listing', false, 2), ('Exclusive right to sell listing', true, 3), ('Net listing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'mock_exam', 'Under Virginia''s agency law, which of the following statements about a subagent is CORRECT?', 'A subagent works under the listing broker and therefore owes fiduciary duties to the seller (the listing broker''s client), not the buyer. While the subagent assists the buyer, their loyalty runs to the seller. Subagency has become rare due to liability concerns, and most cooperative arrangements today are structured as buyer agency.', 'hard', 'agency', 18, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A subagent represents the buyer and owes the buyer all fiduciary duties', false, 1), ('A subagent is an agent of the listing broker and therefore owes fiduciary duties to the seller', true, 2), ('Subagency is the most common form of representation in Virginia today', false, 3), ('A subagent owes duties only to the broker who created the subagency, not to the seller', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'chapter_quiz', 'The fiduciary duty of "care" in an agency relationship requires the agent to:', 'The duty of care requires an agent to use the skill, knowledge, and diligence that a competent real estate professional would apply in the same circumstances. It does not guarantee results but does require the agent to avoid negligence. Recommending inspections and advising on market conditions are examples of meeting this duty.', 'medium', 'agency', 19, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Guarantee the buyer will get the best possible price on any property', false, 1), ('Exercise reasonable skill and diligence in performing agency duties', true, 2), ('Personally inspect every property before showing it to a client', false, 3), ('Conduct a title search on every property the client considers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'agency-relationships'), 'section_exam', 'A Virginia listing agent receives two offers simultaneously. The seller has not instructed the agent on how to handle multiple offers. What is the agent''s obligation under Virginia law?', 'Virginia licensees are required to promptly present all offers to the seller unless the seller has given written instruction otherwise. The agent must follow the seller''s directions on how to handle multiple offers. Disclosing one buyer''s offer terms to competing buyers without the seller''s consent would violate confidentiality.', 'hard', 'agency', 20, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Present only the highest offer to avoid overwhelming the seller', false, 1), ('Present all offers promptly and in the manner the seller directs', true, 2), ('Negotiate each offer separately before presenting any to the seller', false, 3), ('Disclose the existence and terms of each offer to all buyers to create competition', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'The federal Fair Housing Act of 1968 as amended prohibits housing discrimination based on which seven protected classes?', 'The federal Fair Housing Act protects seven classes: race, color, religion, sex, national origin, familial status (households with children under 18 or pregnant women), and disability (added in the 1988 amendments). Virginia''s Fair Housing Law adds additional protected classes beyond the federal seven.', 'easy', 'fair_housing', 21, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Race, color, religion, sex, national origin, familial status, disability', true, 1), ('Race, color, religion, sex, age, marital status, disability', false, 2), ('Race, color, religion, national origin, source of funds, sexual orientation, disability', false, 3), ('Race, color, sex, national origin, familial status, disability, income', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'Virginia''s Fair Housing Law extends beyond federal protections by including which of the following as an additional protected class?', 'Virginia''s Fair Housing Law adds "source of funds" as a protected class, which prohibits landlords from refusing to rent to applicants solely because they use housing vouchers (like Section 8) or other legal sources of income. This protection exists at the state level even though it is not part of the federal Fair Housing Act.', 'medium', 'fair_housing', 22, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Age (persons over 40)', false, 1), ('Elderliness (age 55 and older in certain housing)', false, 2), ('Source of funds (such as housing vouchers)', true, 3), ('Credit score below a minimum threshold', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'Steering is a discriminatory practice in which a licensee:', 'Steering occurs when a real estate agent guides prospective buyers or renters toward or away from specific neighborhoods based on their protected class characteristics (race, religion, national origin, etc.). Even subtle language like "you might feel more comfortable in..." can constitute steering. Redlining (answer C) is a related but distinct practice involving lending.', 'easy', 'fair_housing', 23, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refuses to show properties in a neighborhood because of its racial composition', false, 1), ('Directs buyers toward or away from certain neighborhoods based on their protected class characteristics', true, 2), ('Refuses to make a mortgage loan in a particular geographic area', false, 3), ('Changes the terms of a sale based on the buyer''s national origin', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'Under the Fair Housing Act, a landlord is generally required to allow a tenant with a disability to make reasonable modifications to the unit. Who typically pays for these modifications?', 'Under the Fair Housing Act, tenants with disabilities have the right to make reasonable modifications at their own expense. The landlord may require the tenant to restore the unit to its original condition upon vacating for modifications that do not need to remain for the next occupant. This rule applies to private landlords; different rules may apply in federally assisted housing.', 'medium', 'fair_housing', 24, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The landlord must pay for all modifications', false, 1), ('The tenant pays for the modifications, and the landlord may require restoration upon move-out', true, 2), ('The local government pays through a fair housing fund', false, 3), ('The cost is split equally between the landlord and tenant', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'section_exam', 'A landlord refuses to rent to a family because they have three children, citing concerns about wear and tear on the property. This is most likely a violation of which protected class under the Fair Housing Act?', 'Familial status protects households with children under 18, including pregnant women and those in the process of obtaining custody. Refusing to rent to a family because of their children, even under a neutral-sounding reason like "wear and tear," constitutes familial status discrimination. Exceptions exist only for qualifying senior housing communities.', 'easy', 'fair_housing', 25, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Race', false, 1), ('Disability', false, 2), ('Familial status', true, 3), ('National origin', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'Which of the following properties may qualify for an exemption from certain federal Fair Housing Act prohibitions (but NEVER from the prohibition on race discrimination)?', 'The "Mrs. Murphy" exemption allows an owner-occupant of a building with four or fewer units to discriminate on certain grounds (excluding race) without using a licensee or discriminatory advertising. A single-family home sold without an agent and without discriminatory advertising qualifies for a separate owner exemption. Neither exemption ever applies to race discrimination, which has no exceptions under federal law.', 'hard', 'fair_housing', 26, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A large apartment complex with 50 units managed by a professional property management company', false, 1), ('A single-family home sold by an owner without the use of a real estate licensee and without discriminatory advertising', true, 2), ('A duplex owned by a corporation', false, 3), ('Any residential property rented at below-market rates', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'mock_exam', 'A prospective tenant with multiple sclerosis asks a landlord to install a grab bar in the bathroom. The landlord says the lease does not allow alterations. Under the Fair Housing Act, the landlord must:', 'A grab bar is a physical change to the unit, making it a "reasonable modification" under the FHA, not a "reasonable accommodation" (which involves policy or rule changes). The landlord must permit the modification (the tenant pays) and may require restoration upon vacating. The lease''s no-alterations clause cannot override federal fair housing law.', 'hard', 'fair_housing', 27, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Deny the request because the lease prohibits alterations', false, 1), ('Allow the modification as a reasonable accommodation for the tenant''s disability', false, 2), ('Allow the modification as a reasonable modification and may require restoration upon move-out', true, 3), ('Install the grab bar at the landlord''s own expense as a required accommodation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'chapter_quiz', 'Blockbusting is a prohibited practice under the Fair Housing Act. It is best described as:', 'Blockbusting (also called "panic peddling") involves inducing homeowners to sell by suggesting that people of a different race, religion, or national origin are moving into the neighborhood and will cause property values to decline. Agents who engage in blockbusting can lose their license and face federal penalties. Redlining (answer D) is a separate lending-related practice.', 'medium', 'fair_housing', 28, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refusing to show properties in a neighborhood to buyers of a particular race', false, 1), ('Inducing panic selling by suggesting that a neighborhood''s character is changing due to the entry of a protected class', true, 2), ('Setting different rental rates for tenants of different national origins', false, 3), ('Refusing to make mortgage loans in minority-concentrated neighborhoods', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'section_exam', 'A HUD complaint for a fair housing violation must generally be filed within how many days of the alleged discriminatory act?', 'A complaint alleging a violation of the federal Fair Housing Act must be filed with HUD within one year (365 days) of the alleged discriminatory act. Private lawsuits under the FHA may be filed in federal court within two years. Virginia''s fair housing law follows a similar one-year administrative deadline.', 'medium', 'fair_housing', 29, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('90 days', false, 1), ('180 days', false, 2), ('365 days (one year)', true, 3), ('730 days (two years)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'fair-housing-laws'), 'mock_exam', 'A real estate agent consistently shows buyers of one ethnic background properties only in neighborhoods predominantly populated by that same ethnic group. The agent claims the buyers never asked to see properties elsewhere. This practice is:', 'Steering is illegal regardless of the agent''s intent or the buyer''s apparent preferences. Agents may not assume where clients want to live based on protected characteristics. The law requires agents to show properties across all areas without regard to the racial, ethnic, or religious composition of those areas. "Following preferences" is not a defense when those preferences were inferred from protected class membership.', 'hard', 'fair_housing', 30, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Permissible because the agent is following the buyers'' unstated preferences', false, 1), ('Permissible because no protected class is being harmed; both groups are receiving service', false, 2), ('Prohibited steering, even if the agent believes the buyers prefer it', true, 3), ('Only prohibited if the agent refuses to show properties in other areas when directly asked', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'The Virginia Residential Landlord and Tenant Act (VRLTA) primarily governs which type of tenancies?', 'The VRLTA broadly governs most residential tenancies in Virginia, including apartments and single-family rental homes. While certain exemptions exist (e.g., transient occupancy in hotels, certain agricultural arrangements), the VRLTA covers the vast majority of dwelling units rented for residential purposes across the Commonwealth.', 'medium', 'landlord_tenant', 31, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('All real property rentals in Virginia without exception', false, 1), ('Commercial leases and industrial properties only', false, 2), ('Transient hotel and motel occupancies', false, 3), ('Dwelling units used as a residence, broadly covering most residential tenancies including apartments and single-family rentals', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'Under the VRLTA, what is the maximum security deposit a landlord may collect from a tenant?', 'The VRLTA limits security deposits to no more than two months'' rent. A landlord who collects more than two months'' rent as a security deposit is in violation of the Act. This cap protects tenants from excessive upfront financial burdens while still providing landlords reasonable protection.', 'easy', 'landlord_tenant', 32, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One month''s rent', false, 1), ('Two months'' rent', true, 2), ('Three months'' rent', false, 3), ('There is no statutory limit on security deposits in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'Under the VRLTA, within how many days after the tenancy ends must a landlord return the tenant''s security deposit (or provide an itemized statement of deductions)?', 'Virginia''s VRLTA requires a landlord to return the tenant''s security deposit, with any itemized written deduction statement, within 30 days after the termination of the tenancy and the tenant''s vacating the unit. Failure to comply can result in the landlord being liable for the full deposit plus damages.', 'easy', 'landlord_tenant', 33, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('14 days', false, 1), ('21 days', false, 2), ('30 days', true, 3), ('45 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'A landlord fails to make a repair that materially affects the health or safety of the tenant. After proper written notice, the tenant may have the right to:', 'Under the VRLTA, if a landlord fails to fix a condition that materially affects health or safety after receiving proper written notice and a reasonable repair period, the tenant may terminate the lease OR exercise the repair-and-deduct remedy (subject to limits). The tenant must follow the required notice procedures before exercising these remedies.', 'medium', 'landlord_tenant', 34, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Immediately vacate the unit and terminate the lease without any notice period', false, 1), ('Withhold all future rent payments without limit until the repair is made', false, 2), ('Terminate the rental agreement or have the repair made and deduct from rent, subject to statutory limits', true, 3), ('Sue the landlord in circuit court only; no self-help remedies are available under the VRLTA', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'section_exam', 'A tenant pays rent on the 1st of each month and fails to pay on June 1st. Under the VRLTA, the landlord must serve what type of notice before filing for a court order of possession?', 'Under the VRLTA, before a landlord may file an unlawful detainer action for nonpayment of rent, the landlord must first serve the tenant with a 5-day written notice to pay rent or vacate. If the tenant pays all amounts owed within those 5 days, the tenancy continues. If not, the landlord may then proceed to court.', 'medium', 'landlord_tenant', 35, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A 30-day notice to vacate', false, 1), ('A 5-day pay-or-quit notice', true, 2), ('A 14-day notice to cure or quit', false, 3), ('Landlords may file immediately in court without prior notice for nonpayment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'Under the VRLTA, "retaliatory eviction" refers to a landlord attempting to evict a tenant primarily because the tenant:', 'Retaliatory eviction occurs when a landlord attempts to terminate a tenancy or raise rent because the tenant exercised a legal right, such as filing a housing code complaint, requesting repairs, or contacting a government agency about unsafe conditions. Virginia law provides tenants with a defense against retaliatory eviction actions.', 'easy', 'landlord_tenant', 36, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Renewed the lease at a higher rent', false, 1), ('Exercised a legal right, such as complaining to a housing code enforcement authority', true, 2), ('Sublet the unit without permission', false, 3), ('Had a guest stay longer than the lease permits', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'section_exam', 'A landlord wants to enter a tenant''s unit to make non-emergency repairs. Under the VRLTA, how much advance notice must the landlord generally provide?', 'The VRLTA requires a landlord to give at least 24 hours'' advance notice before entering a dwelling unit for non-emergency purposes, such as making repairs or showing the unit to prospective tenants. Entry must occur at a reasonable time. In emergencies (fire, water leak, etc.), a landlord may enter without notice.', 'easy', 'landlord_tenant', 37, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('12 hours', false, 1), ('24 hours', true, 2), ('48 hours', false, 3), ('72 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'mock_exam', 'Under the VRLTA, a landlord''s "duty to maintain fit premises" requires the landlord to do which of the following?', 'The VRLTA''s implied warranty of habitability requires landlords to maintain rental property in compliance with applicable building and housing codes that materially affect health and safety. This includes maintaining structural components, plumbing, heating, electrical systems, and keeping common areas safe and clean. Cosmetic issues and tenant-supplied appliances are not covered by this duty.', 'medium', 'landlord_tenant', 38, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Maintain the property in a condition exceeding local housing codes', false, 1), ('Maintain the unit in a habitable condition in compliance with applicable building and housing codes affecting health and safety', true, 2), ('Make all tenant-requested cosmetic upgrades within 30 days', false, 3), ('Maintain any appliances provided by the tenant within the unit', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'chapter_quiz', 'A month-to-month residential tenancy governed by the VRLTA requires how much written notice to terminate the tenancy?', 'Under the VRLTA, a month-to-month tenancy may be terminated by either the landlord or the tenant with at least 30 days'' written notice prior to the next rent due date. This provides both parties adequate time to make alternative arrangements. A written lease with a specific end date does not require termination notice unless the lease specifies otherwise.', 'medium', 'landlord_tenant', 39, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('7 days written notice by either party', false, 1), ('14 days written notice by either party', false, 2), ('30 days written notice by either party', true, 3), ('60 days written notice, with the tenant requiring less notice than the landlord', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'landlord-tenant-law'), 'section_exam', 'A landlord rents to a tenant with a written 12-month lease. Before the lease expires, the landlord sells the property. Which of the following is correct under Virginia law?', 'Under Virginia property law, a lease "runs with the land." When a landlord sells a property with an existing tenant, the new owner takes title subject to the lease and must honor it until its natural expiration. The tenant''s rights are not terminated by the sale. The new owner becomes the tenant''s new landlord with all associated obligations.', 'hard', 'landlord_tenant', 40, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The landlord may terminate the lease immediately upon finding a buyer', false, 1), ('The lease survives the sale, and the new owner takes the property subject to the existing tenancy', true, 2), ('The tenant must vacate within 30 days once the property is listed for sale', false, 3), ('The landlord must pay the tenant a relocation fee equal to two months'' rent to terminate early', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'The NAR Code of Ethics places the highest obligation on a REALTOR to act in the interest of which of the following parties?', 'The NAR Code of Ethics establishes a hierarchy of obligations: first to the public, then to clients, and then to fellow REALTORS. This ordering reflects the foundational principle that real estate professionals have a duty to preserve and protect the public interest, even when doing so might conflict with individual client preferences.', 'medium', 'ethics', 41, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The public', true, 1), ('The client', false, 2), ('Fellow REALTORS', false, 3), ('The brokerage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'Under Virginia license law, a licensee who makes a material misrepresentation about a property to a buyer may face which of the following consequences?', 'A material misrepresentation is a false statement of fact about something important to a transaction. VREB may suspend or revoke the license and impose civil penalties. Separately, the harmed buyer may sue the licensee for civil damages. Criminal charges are also possible for intentional fraud.', 'medium', 'ethics', 42, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A written warning for a first offense only', false, 1), ('License suspension or revocation, civil penalties, and potential civil liability to the harmed party', true, 2), ('Mandatory additional education only', false, 3), ('No VREB discipline if no criminal conviction results', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'A Virginia licensee lists a property and later discovers that a prospective buyer is a close personal friend. Under ethical and legal standards, the licensee should:', 'Virginia license law and the NAR Code of Ethics require disclosure of any personal interest or relationship that could create a conflict of interest. The listing agent must inform the seller of the relationship with the prospective buyer and obtain consent before proceeding. This transparency allows the seller to make an informed decision about the representation.', 'medium', 'ethics', 43, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refuse to work with the buyer to avoid any conflict', false, 1), ('Proceed without disclosure since personal relationships do not affect professional duties', false, 2), ('Disclose the relationship to the seller and obtain informed consent before continuing', true, 3), ('Have the broker handle the transaction without any disclosure to the seller', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'Under the NAR Code of Ethics, Article 1, REALTORS must protect and promote the interests of their client. However, this duty is explicitly subordinate to which other obligation?', 'Article 1 of the NAR Code of Ethics states that REALTORS must protect and promote the interests of their client while also being honest with all parties. The duty of loyalty to the client does not permit dishonesty toward third parties. A REALTOR cannot misrepresent facts to buyers even when acting zealously for the seller client.', 'medium', 'ethics', 44, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The duty to cooperate with other REALTORS', false, 1), ('The obligation to truthfully present properties to all parties', false, 2), ('The obligation to treat all parties honestly', true, 3), ('The duty to disclose all listing information on the MLS', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'section_exam', 'A Virginia salesperson receives a $500 gift card from a title company for referring clients to that company. This arrangement is most likely a violation of:', 'RESPA (the federal Real Estate Settlement Procedures Act) prohibits kickbacks and referral fees between settlement service providers, including title companies paying real estate agents for referrals. Virginia license law independently prohibits licensees from accepting undisclosed compensation. Violation of RESPA can result in federal criminal penalties, and VREB can discipline the licensee as well.', 'hard', 'ethics', 45, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The NAR Code of Ethics only, with no legal consequences', false, 1), ('The Real Estate Settlement Procedures Act (RESPA) and Virginia license law', true, 2), ('No law or code, provided the client is not charged extra fees', false, 3), ('Virginia consumer protection law only, since RESPA does not apply to referrals', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'Under Virginia license law, a licensee who receives an earnest money deposit must deposit the funds into an escrow account within how many banking days of contract ratification?', 'Virginia law requires that earnest money deposits be placed in a federally insured escrow account within 5 banking days of contract ratification (the date all parties have signed and communicated acceptance). Mishandling client funds through commingling or conversion is one of the most serious violations under Virginia license law and can result in immediate license revocation.', 'medium', 'ethics', 46, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 banking day', false, 1), ('2 banking days', false, 2), ('3 banking days', false, 3), ('5 banking days', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'chapter_quiz', 'The practice of "commingling" in real estate refers to:', 'Commingling occurs when a broker or agent deposits client escrow funds into their personal or business operating accounts, mixing client money with their own. This is strictly prohibited under Virginia license law. Escrow funds must be kept in a separate, federally insured trust account. Conversion (using client funds for personal purposes) is an even more serious related violation.', 'easy', 'ethics', 47, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An agent representing both buyer and seller in the same transaction', false, 1), ('Mixing client escrow funds with the broker''s or agent''s personal or operating funds', true, 2), ('Combining multiple buyer offers into a single presentation to the seller', false, 3), ('Sharing confidential client information between licensees at the same firm', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'mock_exam', 'A REALTOR advertises a property claiming it has a two-car garage when it only has a one-car garage. Under the NAR Code of Ethics, this most directly violates:', 'NAR Code of Ethics Article 12 requires REALTORS to be honest and truthful in all communications, including advertising. Falsely advertising a property feature violates Article 12. Virginia license law independently prohibits false advertising. Both expose the licensee to ethics complaints and potential license discipline.', 'medium', 'ethics', 48, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Article 4 (acquiring property for personal benefit)', false, 1), ('Article 12 (truthful advertising)', true, 2), ('Article 16 (interference with other agents'' relationships)', false, 3), ('Article 3 (cooperation with other brokers)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'section_exam', 'A Virginia broker learns that one of their affiliated salespersons has been violating fair housing laws. Under Virginia license law, the broker is obligated to:', 'Under Virginia license law, the principal broker is responsible for supervising affiliated licensees and is obligated to take corrective action when a violation is discovered. Depending on the severity of the conduct, the broker may also have reporting obligations to VREB. Keeping known violations internal to avoid scrutiny is itself a violation and can expose the broker to discipline.', 'hard', 'ethics', 49, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Investigate, take corrective action, and report the violation to VREB if required', true, 1), ('Keep the matter internal and counsel the salesperson privately without outside reporting', false, 2), ('Do nothing unless the salesperson has received a formal complaint from a client', false, 3), ('Immediately terminate the salesperson''s affiliation without any further obligation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'ethics-standards-of-conduct'), 'mock_exam', 'A licensee intends to purchase a property that is also listed on the open market through the licensee''s own brokerage. Under Virginia license law and ethics standards, the licensee must:', 'Virginia license law requires a licensee who is purchasing property to disclose, in writing, that they hold a real estate license and are acquiring a personal interest in the property. This disclosure must be made to all relevant parties. The transaction itself is not prohibited, but the conflict of interest created by the licensee professional status must be transparently disclosed.', 'hard', 'ethics', 50, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Withdraw from the transaction entirely because self-dealing is prohibited', false, 1), ('Disclose in writing that they hold a real estate license and have a personal interest in acquiring the property', true, 2), ('Proceed normally since purchasing property is a personal matter outside the scope of licensing law', false, 3), ('Submit the offer only through a third-party agent to avoid disclosure requirements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'In Virginia, when two or more persons hold title as tenants in common, what happens to a deceased co-tenant''s interest?', 'Tenancy in common does not include the right of survivorship. When a co-tenant dies, their interest passes through their estate (by will or intestate succession), not automatically to the surviving co-tenants. This is a key distinction from joint tenancy.', 'easy', 'property-ownership', 51, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('It automatically passes to the surviving co-tenants', false, 1), ('It reverts to the Commonwealth of Virginia', false, 2), ('It passes through the deceased co-tenant''s estate', true, 3), ('It is divided equally among all remaining co-tenants by operation of law', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'Which of the following is a required unity for the creation of a joint tenancy?', 'Joint tenancy requires four unities: time, title, interest, and possession (often remembered as T-TIP). All joint tenants must acquire their interests at the same time, through the same instrument, with equal shares, and equal rights of possession. Unity of marriage is associated with tenancy by the entirety, not joint tenancy.', 'easy', 'property-ownership', 52, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Unity of marriage', false, 1), ('Unity of time', true, 2), ('Unity of gender', false, 3), ('Unity of residency', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'Tenancy by the entirety in Virginia is a form of co-ownership available exclusively to:', 'Tenancy by the entirety is reserved exclusively for married couples in Virginia. It includes the right of survivorship and protects the property from the individual debts of one spouse. Neither spouse can unilaterally convey or encumber the property without the other''s consent.', 'easy', 'property-ownership', 53, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Business partners who share equal ownership in a firm', false, 1), ('Married couples', true, 2), ('Parent and child relationships', false, 3), ('Any two individuals who share a domicile', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'A condominium owner in Virginia holds which type of interest in the common areas of the condominium?', 'Under the Virginia Condominium Act, each unit owner holds fee simple title to their individual unit and an undivided percentage interest in the common elements as a tenant in common with all other unit owners. This percentage is defined in the condominium declaration.', 'medium', 'property-ownership', 54, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('No ownership interest; common areas are owned by the HOA', false, 1), ('An undivided percentage interest as a tenant in common with other unit owners', true, 2), ('A leasehold interest granted by the developer', false, 3), ('A life estate that terminates upon sale of the unit', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'Under Virginia law, if a deed to an unmarried couple states only their names without specifying the form of ownership, how is title presumed to be held?', 'In Virginia, when a deed does not specify the form of co-ownership, the default presumption is tenancy in common. Joint tenancy must be expressly stated in the deed. Tenancy by the entirety requires marriage, and Virginia is not a community property state.', 'medium', 'property-ownership', 55, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Joint tenancy with right of survivorship', false, 1), ('Tenancy by the entirety', false, 2), ('Tenancy in common', true, 3), ('Community property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'Which of the following best describes a cooperative form of property ownership?', 'In a cooperative, residents purchase shares in a corporation that owns the entire building. Each shareholder receives a proprietary lease granting the right to occupy a specific unit. Unlike condominiums, cooperative owners do not hold fee simple title to their individual units.', 'medium', 'property-ownership', 56, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Each owner holds fee simple title to their individual unit', false, 1), ('Owners hold shares in a corporation that owns the building, with a proprietary lease for their unit', true, 2), ('Each owner holds a life estate in their unit', false, 3), ('Owners hold title as joint tenants with the developer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'A joint tenant secretly conveys their interest to a third party without the knowledge of the other joint tenants. What is the legal effect of this conveyance in Virginia?', 'A joint tenant has the right to convey their interest unilaterally. However, such a conveyance severs the joint tenancy as to that share because the unity of time and title is broken. The new owner becomes a tenant in common with the remaining joint tenants, who continue to hold joint tenancy among themselves.', 'hard', 'property-ownership', 57, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The conveyance is void because all joint tenants must consent', false, 1), ('The joint tenancy is severed as to the conveyed share, and the new owner holds as a tenant in common', true, 2), ('The third party becomes a joint tenant with full survivorship rights', false, 3), ('The conveyance triggers an automatic partition of the entire property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'Under Virginia''s Property Owners'' Association Act, a purchaser of a property in a POA has the right to cancel the contract within how many days after receiving the association disclosure packet?', 'Virginia''s Property Owners'' Association Act grants purchasers a 3-day right of cancellation after receiving the HOA/POA disclosure packet. This rescission period allows buyers to review association documents, fees, rules, and financial statements before committing to the purchase.', 'hard', 'property-ownership', 58, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 calendar days', true, 1), ('5 business days', false, 2), ('7 calendar days', false, 3), ('10 business days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'A Virginia property is held in a land trust. Which of the following statements is TRUE?', 'In a land trust, the trustee holds legal (or bare) title to the property, while the beneficiary retains equitable title and the rights to direct the trustee and receive profits. This arrangement provides privacy because the beneficiary''s name does not appear in public records.', 'hard', 'property-ownership', 59, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The trustee holds legal title while the beneficiary holds equitable title', true, 1), ('The beneficiary holds legal title and the trustee holds equitable title', false, 2), ('Both the trustee and beneficiary hold legal title as joint tenants', false, 3), ('Neither party holds legal title until the trust is dissolved', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'forms-of-property-ownership'), 'chapter_quiz', 'In a Virginia timeshare arrangement, purchasers typically receive:', 'Virginia timeshare interests can be structured as either a deeded ownership (fee simple fractional interest) or a right-to-use arrangement (contractual right to occupy for specific periods). The Virginia Real Estate Time-Share Act governs these interests and provides consumer protections including a rescission period.', 'medium', 'property-ownership', 60, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple ownership of the entire property for a limited period each year', false, 1), ('A right-to-use interest or a deeded fractional interest in the property', true, 2), ('A life estate limited to certain weeks of the year', false, 3), ('A leasehold interest that automatically renews every 5 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'Which method of legal description uses a starting point, compass directions, and distances to define property boundaries?', 'The metes and bounds system describes property boundaries using a point of beginning (POB), compass bearings (directions), and distances measured along each boundary line. It is the oldest method of legal description and is commonly used in Virginia and other eastern states with irregular property shapes.', 'easy', 'legal-descriptions', 61, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Rectangular (government) survey system', false, 1), ('Metes and bounds', true, 2), ('Lot and block (recorded plat)', false, 3), ('Tax parcel identification', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'In a metes and bounds legal description, the "point of beginning" (POB) must:', 'The point of beginning is a fixed, identifiable location where the boundary description starts. The description must trace the entire perimeter and return (close) to the POB. If the description fails to close, the legal description may be considered defective.', 'easy', 'legal-descriptions', 62, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Be located at the geographic center of the parcel', false, 1), ('Be an identifiable, fixed point from which the description starts and returns', true, 2), ('Be approved and registered with the county assessor before use', false, 3), ('Always be located at the northwest corner of the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'The lot and block (recorded plat) method of legal description is most commonly used for:', 'The lot and block system references a recorded plat (map) filed with the local jurisdiction. It is most commonly used in subdivisions where the developer has surveyed the land, divided it into lots and blocks, and recorded the plat. The legal description then references the lot number, block number, subdivision name, and recording information.', 'easy', 'legal-descriptions', 63, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Large rural agricultural parcels', false, 1), ('Government-owned wilderness areas', false, 2), ('Properties in subdivisions and planned developments', true, 3), ('Properties described by metes and bounds that lack a survey', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'A Virginia property survey reveals that a neighbor''s fence extends 4 feet onto the subject property. This encroachment would typically be identified on a:', 'A boundary survey establishes the exact property lines and identifies encroachments, easements, and other physical features that cross boundary lines. An ALTA/NSPS survey provides even more comprehensive detail. Tax assessment maps are approximate and do not have the precision to identify encroachments.', 'medium', 'legal-descriptions', 64, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Topographic survey only', false, 1), ('Boundary survey or ALTA/NSPS survey', true, 2), ('Phase I environmental site assessment', false, 3), ('Tax assessment map', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'In the rectangular (government) survey system, a section contains how many acres?', 'A section in the rectangular survey system is one square mile, containing 640 acres. A township consists of 36 sections. While Virginia primarily uses metes and bounds, understanding the rectangular survey system is still tested on the national portion of the PSI exam.', 'medium', 'legal-descriptions', 65, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('36 acres', false, 1), ('160 acres', false, 2), ('320 acres', false, 3), ('640 acres', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'Which of the following is TRUE regarding a Virginia property''s legal description in a deed?', 'A valid deed in Virginia must contain a legal description sufficient to identify the property without ambiguity. Street addresses and tax parcel numbers alone are generally insufficient because they can change and lack the precision needed for legal conveyance. A metes and bounds description, lot and block reference, or other recognized legal description method is required.', 'medium', 'legal-descriptions', 66, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A street address alone is sufficient as a legal description', false, 1), ('The legal description must be specific enough to identify the property without ambiguity', true, 2), ('A tax map parcel number is always an acceptable legal description for conveyance', false, 3), ('Legal descriptions are only required for commercial properties, not residential', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'When a metes and bounds description contains a discrepancy between the stated distance and a monument (natural or artificial marker), which generally takes precedence?', 'When there is a conflict in a metes and bounds description, courts generally follow a hierarchy of priority: natural monuments, artificial monuments, courses (compass directions), distances, and finally area (acreage). Monuments are considered more reliable because distances can contain measurement errors.', 'hard', 'legal-descriptions', 67, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The stated distance always controls', false, 1), ('The monument generally takes precedence over the stated distance', true, 2), ('The compass bearing controls over both distance and monuments', false, 3), ('The most recently recorded description controls regardless of content', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'An ALTA/NSPS land title survey differs from a standard boundary survey primarily because it:', 'An ALTA/NSPS survey meets standards established by the American Land Title Association and the National Society of Professional Surveyors. It includes boundary lines plus additional details such as easements, encroachments, setback lines, zoning classifications, and flood zone information that title insurance companies require for issuing policies.', 'hard', 'legal-descriptions', 68, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is less detailed and less expensive than a boundary survey', false, 1), ('Includes additional items required by the title insurance company such as easements, setbacks, and zoning information', true, 2), ('Does not need to be performed by a licensed surveyor', false, 3), ('Only shows above-ground improvements without boundary lines', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'A surveyor discovers that a property description "does not close," meaning the boundary lines do not return to the point of beginning. What is the most likely consequence?', 'A metes and bounds description that fails to close is defective because it does not adequately define the boundaries of the property. This can create title issues and may need to be corrected through a corrective deed or quiet title action. A surveyor cannot unilaterally alter the description to force closure.', 'hard', 'legal-descriptions', 69, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property is automatically absorbed by the adjacent landowner', false, 1), ('The legal description is considered defective and may need to be corrected by a corrective deed', true, 2), ('The surveyor must extend the last boundary line to force closure', false, 3), ('The title insurance company is liable for the gap in coverage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'legal-descriptions-surveys'), 'chapter_quiz', 'In Virginia, recorded plats for new subdivisions must be approved by:', 'Under Virginia''s subdivision ordinances, plats for new subdivisions must be reviewed and approved by the local governing body (county board of supervisors or city council) or its designated agent, such as the planning commission. This ensures compliance with local zoning, road standards, and infrastructure requirements.', 'medium', 'legal-descriptions', 70, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The Virginia Real Estate Board before recording', false, 1), ('The local governing body or its designated subdivision agent', true, 2), ('The Virginia Department of Transportation exclusively', false, 3), ('Only the developer''s attorney, with no government approval required', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'The legal authority for local governments in Virginia to enact zoning ordinances is derived from:', 'Zoning authority in Virginia comes from the state''s police power, which the General Assembly delegates to local governments through enabling legislation. This power allows localities to regulate land use for the health, safety, and welfare of the community. The federal Constitution does not directly grant zoning authority.', 'easy', 'land-use', 71, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The United States Constitution''s Commerce Clause', false, 1), ('The state''s police power as delegated to localities', true, 2), ('Federal Housing Administration regulations', false, 3), ('The Virginia Real Estate Board''s rulemaking authority', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'A property owner wants to build a commercial structure on land zoned for residential use. The owner should apply for a:', 'To use property in a manner not permitted by current zoning, the owner must seek either a rezoning (change in the zoning classification) or a variance (exception to the existing zoning rules). A variance typically requires showing a hardship, while rezoning involves a legislative change to the zoning map.', 'easy', 'land-use', 72, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Building permit', false, 1), ('Zoning variance or rezoning', true, 2), ('Certificate of occupancy', false, 3), ('Title insurance endorsement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'A property that was legally used as a gas station before the area was rezoned to residential is allowed to continue operating. This is an example of:', 'A nonconforming use is a pre-existing land use that was legal before a zoning change but no longer conforms to the new zoning regulations. Virginia law generally allows nonconforming uses to continue (grandfathering), but they typically cannot be expanded or, if abandoned for a specified period, may lose their protected status.', 'easy', 'land-use', 73, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A special use permit', false, 1), ('Spot zoning', false, 2), ('A nonconforming use (grandfathered use)', true, 3), ('An illegal variance', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'Restrictive covenants that run with the land in a Virginia subdivision are considered:', 'Restrictive covenants, also called deed restrictions or CC&Rs, are private land use controls created by developers or property owners. They run with the land and bind subsequent purchasers. Unlike zoning (a public control), covenants are enforced through civil action by property owners or homeowners'' associations.', 'medium', 'land-use', 74, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Public (government) land use controls', false, 1), ('Private land use controls', true, 2), ('Temporary zoning conditions that expire after 10 years', false, 3), ('Unenforceable agreements between original lot purchasers only', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'When both a zoning ordinance and a restrictive covenant apply to the same property but impose different requirements, which controls?', 'When a zoning ordinance and a restrictive covenant both apply to a property, the more restrictive requirement controls. For example, if zoning allows structures up to 35 feet but a covenant limits height to 25 feet, the 25-foot covenant limit applies. Property owners must comply with both.', 'medium', 'land-use', 75, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The zoning ordinance always overrides the covenant', false, 1), ('The more restrictive of the two applies', true, 2), ('The covenant always overrides the zoning ordinance', false, 3), ('The property owner may choose which to follow', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'A special use permit (also called a conditional use permit) in Virginia is typically granted by:', 'Special use permits allow specific uses within a zoning district that are not permitted by right but may be appropriate with conditions. In Virginia, they are granted by the local governing body (board of supervisors or city council) after a public hearing and review by the planning commission.', 'medium', 'land-use', 76, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The state legislature', false, 1), ('The local governing body (board of supervisors or city council)', true, 2), ('The Virginia Real Estate Board', false, 3), ('The property owner''s attorney through a self-certification process', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'Eminent domain allows the government to take private property for public use. Under the Fifth Amendment and Virginia law, the property owner is entitled to:', 'Both the Fifth Amendment to the U.S. Constitution and Virginia law require that property owners receive just compensation when property is taken through eminent domain. Just compensation is generally the fair market value of the property at the time of the taking. Virginia further strengthened property rights with a 2012 constitutional amendment limiting the use of eminent domain.', 'medium', 'land-use', 77, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Replacement property of equal or greater value', false, 1), ('Just compensation (fair market value)', true, 2), ('Double the assessed tax value of the property', false, 3), ('Compensation only if the entire property is taken', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'A local government enacts a zoning ordinance that effectively deprives a property owner of all economically beneficial use of the property without compensation. This may constitute:', 'When a government regulation goes so far as to deprive a property owner of all economically beneficial use, it may constitute a regulatory taking (inverse condemnation) under the landmark case Lucas v. South Carolina Coastal Council. The owner would be entitled to just compensation. This differs from eminent domain, where the government initiates the taking.', 'hard', 'land-use', 78, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A valid exercise of police power with no legal recourse', false, 1), ('A regulatory taking (inverse condemnation)', true, 2), ('An eminent domain proceeding', false, 3), ('A nonconforming use designation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'In Virginia, a property owner seeking a zoning variance must typically demonstrate:', 'To obtain a variance in Virginia, the applicant must show that the strict application of the zoning ordinance would create an undue hardship related to the property''s physical characteristics (shape, topography, etc.) and not a self-created hardship. Financial hardship alone or personal convenience is generally insufficient.', 'hard', 'land-use', 79, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('That the proposed use will increase property tax revenue', false, 1), ('That strict application of the ordinance would cause an undue hardship due to the property''s unique characteristics', true, 2), ('That a majority of neighbors support the requested change', false, 3), ('That the property has been zoned incorrectly since its original designation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'land-use-controls-zoning'), 'chapter_quiz', 'Spot zoning is generally considered:', 'Spot zoning refers to rezoning a small parcel of land in a way that is inconsistent with the surrounding zoning and the comprehensive plan, typically to benefit a single property owner. Courts generally view spot zoning as arbitrary and invalid because it violates the principle that zoning should be applied uniformly and in accordance with a comprehensive plan.', 'hard', 'land-use', 80, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A valid and common zoning practice used to accommodate individual property owners', false, 1), ('A required step in the subdivision approval process', false, 2), ('Illegal or invalid because it singles out a small parcel for different treatment without justification', true, 3), ('A form of variance granted by the Board of Zoning Appeals', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Under federal law, a seller of a home built before what year must provide a lead-based paint disclosure to the buyer?', 'The Residential Lead-Based Paint Hazard Reduction Act of 1992 requires sellers and landlords of residential properties built before 1978 to disclose known lead-based paint hazards and provide an EPA-approved pamphlet. Lead-based paint was banned for residential use in 1978.', 'easy', 'environmental', 81, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1960', false, 1), ('1978', true, 2), ('1985', false, 3), ('1992', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'A Phase I Environmental Site Assessment (ESA) is primarily designed to:', 'A Phase I ESA involves a review of historical records, site inspection, and interviews to identify recognized environmental conditions (RECs). It does not include physical sampling or testing of soil, water, or air. If the Phase I identifies concerns, a Phase II ESA with actual sampling may be recommended.', 'easy', 'environmental', 82, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Remove contamination from the property', false, 1), ('Identify potential or existing environmental contamination through research and inspection without physical testing', true, 2), ('Certify the property as free of all environmental hazards', false, 3), ('Test soil and groundwater samples for contamination levels', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Which federal agency administers the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), commonly known as Superfund?', 'CERCLA (Superfund) is administered by the EPA and establishes liability for the cleanup of hazardous waste sites. Under CERCLA, liability is strict, joint and several, and retroactive, meaning current and past property owners can be held responsible for cleanup costs even if they did not cause the contamination.', 'easy', 'environmental', 83, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Department of Housing and Urban Development (HUD)', false, 1), ('Environmental Protection Agency (EPA)', true, 2), ('Department of the Interior', false, 3), ('Federal Emergency Management Agency (FEMA)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Under CERCLA (Superfund), liability for environmental cleanup is characterized as:', 'CERCLA imposes strict liability (no fault required), joint and several liability (any single responsible party can be held liable for the entire cleanup cost), and retroactive liability (applies to contamination that occurred before CERCLA was enacted). This makes environmental due diligence critical for property purchasers.', 'medium', 'environmental', 84, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Limited to the party that caused the contamination', false, 1), ('Strict, joint and several, and retroactive', true, 2), ('Applicable only to commercial properties, not residential', false, 3), ('Limited to cleanup costs under $1 million', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Which substance, commonly found in older building insulation and floor tiles, is regulated due to its link to lung disease and cancer when fibers become airborne?', 'Asbestos is a naturally occurring mineral that was widely used in building materials for its fire-resistant properties. When disturbed, asbestos fibers become airborne and can cause serious lung diseases including mesothelioma. Federal regulations require proper identification and management of asbestos in buildings, especially during renovation or demolition.', 'medium', 'environmental', 85, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Radon', false, 1), ('Asbestos', true, 2), ('Carbon monoxide', false, 3), ('Formaldehyde', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'In Virginia, underground storage tanks (USTs) containing petroleum products are regulated by:', 'The Virginia Department of Environmental Quality (DEQ) oversees the regulation of underground storage tanks under both federal EPA guidelines and Virginia state law. UST owners must register tanks, maintain leak detection systems, and carry financial responsibility for cleanup. Leaking USTs are a common source of soil and groundwater contamination.', 'medium', 'environmental', 86, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The Virginia Real Estate Board', false, 1), ('The Virginia Department of Environmental Quality (DEQ)', true, 2), ('DPOR exclusively', false, 3), ('The local homeowners'' association', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Radon is a naturally occurring radioactive gas that enters buildings primarily through:', 'Radon is produced by the natural decay of uranium in soil and rock. It enters buildings primarily through cracks in foundations, gaps around pipes, and other openings at the ground level. Radon is the second leading cause of lung cancer in the United States, and the EPA recommends testing and mitigation when levels exceed 4 pCi/L.', 'medium', 'environmental', 87, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Municipal water supply lines', false, 1), ('Cracks and openings in the foundation and basement', true, 2), ('HVAC ductwork connected to outdoor air intakes', false, 3), ('Lead-based paint deterioration', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'The "innocent landowner" defense under CERCLA requires that the property purchaser:', 'The innocent landowner defense protects buyers who conducted "all appropriate inquiries" (typically a Phase I ESA) before purchasing and had no reason to know of existing contamination. This defense was strengthened by the Small Business Liability Relief and Brownfields Revitalization Act of 2002. Without conducting due diligence, a purchaser cannot claim innocent landowner status.', 'hard', 'environmental', 88, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Simply prove they did not personally cause the contamination', false, 1), ('Demonstrate they conducted appropriate inquiry (such as a Phase I ESA) before purchasing and had no knowledge of contamination', true, 2), ('File a disclaimer with the EPA within 30 days of closing', false, 3), ('Purchase environmental insurance that covers 100% of potential cleanup costs', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'A property in Virginia is located within a designated Chesapeake Bay Preservation Area. Which of the following is a likely restriction?', 'Virginia''s Chesapeake Bay Preservation Act requires local governments to establish Chesapeake Bay Preservation Areas with Resource Protection Areas (RPAs) and Resource Management Areas (RMAs). RPAs include a 100-foot buffer along shorelines, tidal wetlands, and other sensitive areas where development is significantly restricted to protect water quality.', 'hard', 'environmental', 89, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property is exempt from local zoning ordinances', false, 1), ('Development is restricted in Resource Protection Areas (RPAs) near shorelines and waterways', true, 2), ('The property cannot be sold without EPA approval', false, 3), ('All existing structures must be demolished within 5 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'environmental-regulations'), 'chapter_quiz', 'Under the National Environmental Policy Act (NEPA), which of the following triggers the requirement for an Environmental Impact Statement (EIS)?', 'NEPA requires an Environmental Impact Statement for major federal actions (projects involving federal funding, permits, or land) that may significantly affect the environment. NEPA does not apply to purely private actions. The EIS process includes public comment periods and analysis of alternatives to minimize environmental harm.', 'hard', 'environmental', 90, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Any residential sale involving a property over 50 years old', false, 1), ('Any private development project exceeding $1 million in cost', false, 2), ('Major federal actions that may significantly affect the quality of the human environment', true, 3), ('All commercial property transactions in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'Which of the following is NOT a required element for a valid real estate contract in Virginia?', 'The essential elements of a valid contract are offer and acceptance, consideration, legal capacity, lawful purpose, and (for real estate) a written instrument under the Statute of Frauds. Notarization is required for recording a deed but is not an element of contract validity.', 'easy', 'contracts', 91, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Offer and acceptance', false, 1), ('Consideration', false, 2), ('Notarization', true, 3), ('Legal capacity of the parties', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'Virginia''s Statute of Frauds requires that real estate contracts be:', 'The Statute of Frauds, codified in Virginia Code Section 11-2, requires that contracts for the sale of real property be in writing and signed by the party to be charged (the party against whom enforcement is sought). Oral agreements for real estate transactions are generally unenforceable.', 'easy', 'contracts', 92, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Recorded with the local circuit court clerk', false, 1), ('In writing and signed by the party to be charged', true, 2), ('Witnessed by at least two disinterested parties', false, 3), ('Approved by a licensed attorney before execution', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'A contract entered into by a person who has been declared legally incompetent by a court is:', 'A contract entered into by a person adjudicated (court-declared) incompetent is void from the start and has no legal effect. This differs from a contract with a minor or an intoxicated person, which is typically voidable (valid until the affected party chooses to disaffirm it).', 'easy', 'contracts', 93, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Valid but unenforceable', false, 1), ('Voidable at the option of the incompetent party', false, 2), ('Void (has no legal effect)', true, 3), ('Valid if the other party was unaware of the incompetency', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'What is the difference between a void contract and a voidable contract?', 'A void contract is one that was never legally valid and has no legal effect (e.g., a contract for an illegal purpose). A voidable contract is valid and enforceable until the aggrieved party chooses to disaffirm or cancel it (e.g., a contract signed by a minor). Understanding this distinction is essential for the exam.', 'medium', 'contracts', 94, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A void contract can be ratified; a voidable contract cannot', false, 1), ('A void contract has no legal effect; a voidable contract is valid until one party elects to disaffirm it', true, 2), ('Both terms mean the same thing and are used interchangeably', false, 3), ('A voidable contract is always illegal; a void contract may still be enforceable', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'In contract law, "consideration" is best defined as:', 'Consideration is something of value that each party agrees to give or do (or refrain from doing) as part of the agreement. In a real estate purchase contract, the buyer''s consideration is the purchase price (or promise to pay), and the seller''s consideration is the transfer of the property. A contract without consideration is generally unenforceable.', 'medium', 'contracts', 95, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The time period allowed for the parties to perform their obligations', false, 1), ('Something of value exchanged between the parties to form a binding agreement', true, 2), ('The written acknowledgment of the contract by a notary public', false, 3), ('A deposit held in escrow by a neutral third party', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'An option contract in real estate gives the optionee (buyer) the right to:', 'An option contract gives the optionee (potential buyer) the right, but not the obligation, to purchase the property at a specified price within a defined time period. The optionor (seller) receives consideration for granting the option and is obligated to sell if the optionee exercises the option. The option is a unilateral contract until exercised.', 'medium', 'contracts', 96, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Force the seller to reduce the price at any time during the option period', false, 1), ('Purchase the property within a specified time period at a predetermined price', true, 2), ('Automatically take title to the property when the option period expires', false, 3), ('Lease the property with a mandatory obligation to purchase at the end of the lease', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'A bilateral contract is one in which:', 'A bilateral contract involves mutual promises from both parties. A standard real estate purchase agreement is a bilateral contract: the buyer promises to pay the purchase price and the seller promises to deliver title. In contrast, a unilateral contract involves a promise by one party that is accepted through the other party''s performance (e.g., an open listing agreement).', 'medium', 'contracts', 97, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only one party makes a promise to perform', false, 1), ('Both parties exchange promises to perform', true, 2), ('Performance by one party is optional', false, 3), ('The contract is between two licensed real estate agents', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'A buyer signs a purchase contract under duress (threat of physical harm). This contract is:', 'A contract signed under duress is voidable at the option of the party who was coerced. The affected party may choose to ratify (affirm) or disaffirm (void) the contract. The contract is not automatically void; it remains valid until the aggrieved party takes action to rescind it.', 'hard', 'contracts', 98, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Valid and enforceable because it was signed', false, 1), ('Void because duress makes any agreement unenforceable', false, 2), ('Voidable at the option of the party subjected to duress', true, 3), ('Enforceable only if the duress is not documented', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'The equitable doctrine of "specific performance" in Virginia real estate allows a court to:', 'Specific performance is an equitable remedy that compels the breaching party to fulfill the terms of the contract. It is commonly available in real estate transactions because each property is considered unique, making monetary damages inadequate. A court may order the seller to convey the property or the buyer to complete the purchase.', 'hard', 'contracts', 99, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Award triple damages to the non-breaching party', false, 1), ('Order the breaching party to complete the contract as agreed', true, 2), ('Automatically extend the closing date by 90 days', false, 3), ('Void the contract and return both parties to their original positions', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-fundamentals'), 'chapter_quiz', 'Under the parol evidence rule, once parties have executed a written real estate contract, oral agreements made prior to or at the time of signing:', 'The parol evidence rule prevents parties from introducing prior or contemporaneous oral agreements that contradict the terms of a final written contract. This rule reinforces the importance of ensuring all agreed terms are included in the written agreement. Exceptions exist for fraud, mistake, ambiguity, or subsequent modifications.', 'hard', 'contracts', 100, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Are fully enforceable as long as both parties agree they were made', false, 1), ('May only be enforced if recorded with the circuit court clerk', false, 2), ('Are generally inadmissible to contradict or alter the terms of the written agreement', true, 3), ('Supersede the written contract if they are more favorable to the buyer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'In a Virginia residential purchase agreement, earnest money deposits must be deposited into an escrow account within what time frame, unless otherwise agreed?', 'Under Virginia real estate regulations, earnest money deposits must be placed in an escrow account within 5 banking days of ratification of the contract, unless the parties agree otherwise in writing. Failure to properly handle escrow funds is a violation of Virginia license law and can result in disciplinary action.', 'easy', 'purchase-agreements', 101, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Within 24 hours of contract ratification', false, 1), ('Within 5 banking days of contract ratification', true, 2), ('Within 10 calendar days of contract ratification', false, 3), ('Before the home inspection is completed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'The Virginia Residential Property Disclosure Act requires the seller to provide:', 'The Virginia Residential Property Disclosure Act (Virginia Code Section 55.1-700 et seq.) requires sellers to deliver either a residential property disclosure statement (disclosing known conditions) or a disclaimer statement (stating the property is sold "as-is" without representations). The buyer receives this before or at the time of the contract.', 'easy', 'purchase-agreements', 102, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A professional home inspection report', false, 1), ('A disclaimer statement or a property condition disclosure statement', true, 2), ('A warranty guaranteeing the property is free of defects', false, 3), ('A certificate of occupancy from the local building department', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'A purchase agreement is considered "ratified" in Virginia when:', 'A purchase agreement becomes ratified when the last party to accept signs the contract and the accepting party''s agent notifies the other party (or their agent) of the acceptance. Until ratification, the offer can be withdrawn. The date of ratification typically triggers various contractual deadlines.', 'easy', 'purchase-agreements', 103, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer submits the initial offer', false, 1), ('The last party to accept signs the agreement and the other party is notified of acceptance', true, 2), ('The earnest money deposit is deposited into escrow', false, 3), ('The home inspection has been completed satisfactorily', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'A financing contingency in a purchase agreement protects the buyer by:', 'A financing contingency allows the buyer to exit the contract and receive a refund of their earnest money if they are unable to secure mortgage financing on the terms specified in the agreement within the stated time frame. Without this contingency, a buyer who fails to obtain financing may forfeit their deposit.', 'medium', 'purchase-agreements', 104, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Guaranteeing the buyer will receive a mortgage at the specified terms', false, 1), ('Allowing the buyer to terminate the contract without penalty if they cannot obtain financing within the specified terms and time frame', true, 2), ('Requiring the seller to provide seller financing if the buyer is denied a loan', false, 3), ('Reducing the purchase price by the amount of the down payment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'In Virginia, which of the following items is typically considered a fixture that would convey with the property unless specifically excluded in the purchase agreement?', 'Fixtures are items permanently attached to the property that convey with the sale unless specifically excluded. A built-in dishwasher is considered a fixture because it is permanently installed. Freestanding appliances, portable items, and decorative items are generally considered personal property. The purchase agreement should clearly address disputed items.', 'medium', 'purchase-agreements', 105, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A freestanding refrigerator', false, 1), ('A built-in dishwasher', true, 2), ('A portable window air conditioning unit', false, 3), ('A decorative area rug', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'A home inspection contingency in a Virginia purchase agreement typically allows the buyer to:', 'A home inspection contingency gives the buyer the right to have the property professionally inspected and, based on the findings, negotiate repairs with the seller, request a credit or price reduction, or void the contract entirely within the contingency period. The seller is not obligated to agree to repair demands.', 'medium', 'purchase-agreements', 106, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Demand that the seller make all repairs regardless of cost', false, 1), ('Negotiate repairs, request a price reduction, or void the contract based on inspection findings within the contingency period', true, 2), ('Extend the closing date indefinitely until all defects are corrected', false, 3), ('Reduce the earnest money deposit by the estimated repair costs', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'When a purchase agreement includes an appraisal contingency and the property appraises below the contract price, the buyer may:', 'An appraisal contingency protects the buyer when the property appraises for less than the contract price. The buyer typically has options: negotiate a lower price, pay the difference out of pocket, or terminate the contract with their earnest money returned. The lender will not loan more than the appraised value.', 'medium', 'purchase-agreements', 107, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only proceed with the purchase at the original contract price', false, 1), ('Renegotiate the price, pay the difference in cash, or void the contract', true, 2), ('Require the lender to increase the loan amount to cover the difference', false, 3), ('Automatically receive a credit from the seller for the difference', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'Under Virginia law, the "time is of the essence" clause in a purchase agreement means:', 'A "time is of the essence" clause makes all dates and deadlines in the contract material terms. If either party fails to perform by the specified date, the other party may declare a breach. Without this clause, courts may allow reasonable delays. This clause is standard in most Virginia purchase agreements.', 'hard', 'purchase-agreements', 108, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The contract must be signed within one business day of the initial offer', false, 1), ('All deadlines and dates in the contract are strictly enforced, and failure to meet them may constitute a breach', true, 2), ('The seller must accept or reject the offer within 24 hours', false, 3), ('The closing must occur within 30 days of ratification regardless of other terms', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'A buyer and seller execute a purchase agreement that includes a "merger clause." At closing, which of the following is TRUE?', 'Under the doctrine of merger, when the deed is delivered and accepted at closing, the terms of the purchase agreement are merged into the deed. This means most contract terms are extinguished and cannot be enforced after closing. Exceptions include terms that the parties expressly agree will survive closing, such as warranties or repair agreements.', 'hard', 'purchase-agreements', 109, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('All terms of the purchase agreement survive closing and remain enforceable', false, 1), ('The deed becomes the controlling document, and most contract terms merge into the deed and are extinguished', true, 2), ('The purchase agreement supersedes the deed in all matters', false, 3), ('The merger clause has no legal effect in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'purchase-agreements'), 'chapter_quiz', 'If a Virginia purchase agreement does not specify who will hold the earnest money deposit, the deposit is typically held by:', 'When the contract does not specify who holds the deposit, Virginia practice dictates that the listing broker typically holds the earnest money in their firm''s escrow (trust) account. Virginia law requires that brokers maintain proper escrow accounts and handle deposits in accordance with VREB regulations. Commingling escrow funds with personal or business funds is a serious violation.', 'hard', 'purchase-agreements', 110, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer''s personal bank account', false, 1), ('The listing broker''s escrow account', true, 2), ('The Virginia Real Estate Board''s trust fund', false, 3), ('The seller directly', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'An exclusive right-to-sell listing agreement means that the listing broker earns a commission:', 'Under an exclusive right-to-sell listing, the broker earns a commission no matter who procures the buyer, even if the seller finds the buyer independently. This provides the greatest protection for the broker and is the most common type of listing agreement. The broker is motivated to actively market the property because the commission is guaranteed upon sale.', 'easy', 'listing-agreements', 111, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only if the broker personally finds the buyer', false, 1), ('Regardless of who sells the property, including the owner', true, 2), ('Only if the property sells above the listing price', false, 3), ('Only if the property is sold through the MLS', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'In an exclusive agency listing, the seller retains the right to:', 'An exclusive agency listing grants the broker the exclusive right to represent the seller, but the seller retains the right to sell the property themselves without paying a commission. If any broker (including other cooperating brokers) brings the buyer, the listing broker earns the commission. This is less favorable to the broker than an exclusive right-to-sell.', 'easy', 'listing-agreements', 112, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('List with multiple brokers simultaneously', false, 1), ('Sell the property independently without owing a commission to the listing broker', true, 2), ('Terminate the listing at any time without notice', false, 3), ('Change the listing price without the broker''s knowledge', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'Virginia law requires that every listing agreement must include:', 'Virginia real estate regulations require that all listing agreements contain a definite termination (expiration) date. A listing without a termination date would be considered defective. Virginia law prohibits listing agreements that automatically renew without the owner''s express written consent. There is no mandated minimum or maximum term.', 'easy', 'listing-agreements', 113, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A guaranteed sale price', false, 1), ('A definite termination date', true, 2), ('A mandatory 90-day minimum term', false, 3), ('An automatic renewal clause', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'In an open listing agreement, the seller may:', 'An open listing allows the seller to engage multiple brokers simultaneously. Only the broker who actually procures a ready, willing, and able buyer earns the commission. The seller can also sell independently without owing a commission to any broker. Open listings provide the least incentive for brokers to actively market the property.', 'medium', 'listing-agreements', 114, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('List with only one broker but sell independently without a commission', false, 1), ('List with multiple brokers, and only the broker who procures the buyer earns a commission', true, 2), ('Require the listing broker to guarantee a sale within 60 days', false, 3), ('Refuse to allow any showings of the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'A "protection period" (also called a safety clause or extender clause) in a listing agreement:', 'A protection period (safety/extender clause) protects the broker''s right to a commission for a specified period after the listing expires if a buyer who was introduced or shown the property during the listing term subsequently purchases it. The broker typically must provide the seller with a list of protected buyers at or before expiration.', 'medium', 'listing-agreements', 115, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Guarantees the seller will not be sued by the broker after expiration', false, 1), ('Entitles the broker to a commission if a buyer who was introduced during the listing period purchases the property after the listing expires', true, 2), ('Prevents the seller from relisting with another broker for 6 months', false, 3), ('Requires the seller to reimburse the broker''s marketing expenses if the listing expires unsold', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'Under Virginia agency law, a listing agreement establishes what type of relationship between the seller and the listing broker?', 'A listing agreement creates a fiduciary (agency) relationship in which the broker owes the seller duties of loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care. The broker acts as the seller''s agent and must place the seller''s interests above their own, except where prohibited by law.', 'medium', 'listing-agreements', 116, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An employer-employee relationship', false, 1), ('A fiduciary (agency) relationship', true, 2), ('A debtor-creditor relationship', false, 3), ('A landlord-tenant relationship', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'A listing broker receives a full-price offer from a buyer. Under Virginia law, the broker must:', 'Under Virginia law, the listing broker has a duty to present all offers to the seller promptly, including full-price offers. The broker cannot accept or reject offers on the seller''s behalf (unless specifically authorized to do so in writing). The decision to accept, reject, or counter an offer belongs to the seller.', 'medium', 'listing-agreements', 117, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Accept the offer on behalf of the seller', false, 1), ('Present the offer to the seller promptly', true, 2), ('Reject the offer if the broker believes a higher offer is forthcoming', false, 3), ('Hold the offer for 48 hours to see if competing offers arrive', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'A net listing is an arrangement where the broker''s commission is:', 'In a net listing, the seller sets a minimum acceptable price, and the broker''s commission is the difference between the sale price and that minimum. Net listings are legal but discouraged in Virginia because they create an inherent conflict of interest: the broker is incentivized to sell at the highest price for their own benefit rather than the seller''s best interest.', 'hard', 'listing-agreements', 118, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A flat fee agreed upon at the time of listing', false, 1), ('The amount the property sells for above a minimum price set by the seller', true, 2), ('Deducted from the buyer''s closing costs', false, 3), ('Paid by the buyer rather than the seller', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'Under Virginia law, a listing agreement MUST be signed by which of the following to be enforceable?', 'For a listing agreement to be enforceable and to ensure the property can actually be conveyed, all owners with authority to sell must sign. If a property is jointly owned, all co-owners must sign the listing agreement. A listing signed by only one co-owner may not be sufficient to deliver clear title at closing.', 'hard', 'listing-agreements', 119, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The listing broker, the seller, and any prospective buyers', false, 1), ('All owners of the property who have authority to convey', true, 2), ('Only the principal broker of the listing firm', false, 3), ('The seller and at least two witnesses', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'listing-agreements'), 'chapter_quiz', 'A seller tells the listing broker that the basement has flooded three times in the past year but instructs the broker not to disclose this to prospective buyers. The broker should:', 'Virginia law requires licensees to disclose material adverse facts that may affect the value or desirability of the property. Known flooding is a material fact. While the broker owes the seller a duty of obedience, this duty does not extend to concealing material facts or participating in fraud. If the seller refuses to allow disclosure, the broker should withdraw from the listing.', 'hard', 'listing-agreements', 120, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Follow the seller''s instructions because the broker''s duty of obedience requires it', false, 1), ('Disclose the flooding to prospective buyers because the duty of honest dealing and disclosure of material facts overrides the seller''s instruction', true, 2), ('Withdraw the listing immediately without disclosing the issue to anyone', false, 3), ('Only disclose the flooding if a buyer specifically asks about water issues', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'When a seller responds to a buyer''s offer by changing the closing date and purchase price, this response is legally considered:', 'Under contract law, any change to the terms of an offer constitutes a counteroffer, which legally rejects and terminates the original offer. The buyer is then free to accept, reject, or counter the seller''s counteroffer. The original offer cannot be revived unless the buyer submits it again as a new offer.', 'easy', 'offer-counteroffer', 121, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An acceptance with minor modifications', false, 1), ('A counteroffer, which terminates the original offer', true, 2), ('A rejection that prevents any further negotiation', false, 3), ('A conditional acceptance that keeps the original offer alive', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'A buyer submits an offer with a 48-hour expiration. Before the seller responds, the buyer verbally tells the listing agent to withdraw the offer. Under Virginia law:', 'Under Virginia''s Statute of Frauds, modifications and revocations of real estate offers should be in writing to be enforceable. While an oral revocation may be effective in some contract law contexts, Virginia practice and most purchase agreement forms require written communication. The listing agent should advise the buyer to submit a written withdrawal.', 'easy', 'offer-counteroffer', 122, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The verbal withdrawal is effective and the seller cannot accept', false, 1), ('The offer can only be revoked in writing before acceptance', true, 2), ('The seller has 48 hours to accept regardless of the buyer''s withdrawal attempt', false, 3), ('The listing agent must accept the verbal withdrawal and destroy the offer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'When presenting multiple offers to a seller, the listing agent in Virginia is obligated to:', 'Virginia law requires the listing agent to present all offers to the seller promptly and objectively. The agent may provide professional advice but must not withhold any offers. The decision to accept, reject, or counter any offer is the seller''s alone. Failing to present all offers is a violation of the agent''s fiduciary duties.', 'easy', 'offer-counteroffer', 123, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Present only the highest offer to save the seller''s time', false, 1), ('Present all offers and let the seller decide which to accept, reject, or counter', true, 2), ('Rank the offers from best to worst and recommend the top choice', false, 3), ('Inform only the highest bidder that their offer was selected', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'An offer expires at 5:00 PM on Tuesday. The seller signs the acceptance at 4:55 PM but the listing agent does not communicate acceptance to the buyer''s agent until 5:15 PM. Is there a valid contract?', 'Under the "mailbox rule" exception for real estate, acceptance is generally not effective until it is communicated to the offeror (or their agent). Since the acceptance was not communicated until after the offer expired at 5:00 PM, there is no binding contract. The late acceptance functions as a counteroffer that the buyer may choose to accept or reject.', 'medium', 'offer-counteroffer', 124, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Yes, because the seller signed before the deadline', false, 1), ('No, because acceptance was not communicated before the offer expired', true, 2), ('Yes, because the 15-minute delay is considered de minimis', false, 3), ('It depends on whether the buyer waives the late acceptance', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'A seller makes a counteroffer to Buyer A. While waiting for Buyer A''s response, the seller receives a higher offer from Buyer B. The seller may:', 'A counteroffer is an offer that can be accepted by the recipient. If the seller wants to accept Buyer B''s offer, the seller should first withdraw (revoke) the counteroffer to Buyer A before Buyer A accepts it. If Buyer A accepts the counteroffer before the seller withdraws it, the seller would be bound to two contracts, creating serious legal complications.', 'medium', 'offer-counteroffer', 125, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Accept Buyer B''s offer only after formally withdrawing the counteroffer to Buyer A', true, 1), ('Accept Buyer B''s offer immediately because a counteroffer is not binding', false, 2), ('Not accept Buyer B''s offer until Buyer A responds', false, 3), ('Accept both offers and let the buyers compete to close first', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'In Virginia, an escalation clause in a purchase offer typically:', 'An escalation clause is a provision in a buyer''s offer that automatically increases the purchase price by a specified increment above any competing offer, up to a maximum price cap. The seller typically must provide proof of the competing offer. Escalation clauses are common in competitive markets but can complicate the offer process.', 'medium', 'offer-counteroffer', 126, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Automatically increases the seller''s listing price by a fixed percentage each month', false, 1), ('Allows the buyer''s offer to automatically increase by a specified amount over competing offers, up to a maximum price', true, 2), ('Reduces the purchase price if the appraisal comes in low', false, 3), ('Requires the seller to accept the first offer received', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'A buyer''s agent prepares an offer that includes a request for the seller to pay $10,000 toward the buyer''s closing costs. This is known as:', 'A seller concession is a request for the seller to contribute toward the buyer''s closing costs. It is a common negotiation tool, especially for buyers with limited cash reserves. Lenders typically limit seller concessions to a percentage of the purchase price (e.g., 3-6% for conventional loans). Seller concessions are different from price reductions and are not prohibited by RESPA.', 'medium', 'offer-counteroffer', 127, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An earnest money deposit', false, 1), ('A seller concession (or seller contribution)', true, 2), ('A reduction in the purchase price', false, 3), ('A kickback prohibited by RESPA', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'After a seller signs a counteroffer and delivers it to the buyer''s agent, the seller has a change of heart and wants to accept the original offer instead. Can the seller do this?', 'Making a counteroffer legally terminates the original offer. The seller cannot unilaterally revive the original offer. The buyer would need to submit the original terms again as a new offer for the seller to accept. The seller''s only options are to wait for the buyer''s response to the counteroffer or to revoke the counteroffer before the buyer accepts it.', 'hard', 'offer-counteroffer', 128, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Yes, the seller can always revert to the original offer', false, 1), ('No, the original offer was terminated when the seller made the counteroffer', true, 2), ('Yes, but only if the buyer agrees to revive the original offer', false, 3), ('Yes, as long as the counteroffer has not been delivered for more than 24 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'A buyer submits an offer with a personal letter to the seller describing the buyer''s family and why they love the home. Under Virginia fair housing considerations, the listing agent should:', 'While buyer love letters are not explicitly banned in Virginia, they often reveal protected class information (race, religion, familial status, national origin) that could expose the seller to fair housing discrimination claims if used to select a buyer. The listing agent should advise the seller about the potential fair housing risks of considering such letters in their decision-making.', 'hard', 'offer-counteroffer', 129, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Encourage the seller to read the letter to choose the most deserving buyer', false, 1), ('Advise the seller that considering personal characteristics revealed in the letter could create fair housing liability', true, 2), ('Refuse to deliver the letter because it is always illegal', false, 3), ('Forward the letter without comment because the agent has no advisory role in this matter', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'offer-counteroffer-process'), 'chapter_quiz', 'A seller signs an acceptance of a buyer''s offer but adds a handwritten note in the margin saying "seller to keep the chandelier in the dining room." This response is legally:', 'Any modification to the terms of an offer, even a handwritten note, constitutes a counteroffer rather than an acceptance. By adding the chandelier exclusion, the seller has changed the terms of the offer, which the buyer must accept for a binding contract to exist. The "mirror image rule" requires acceptance to match the offer exactly.', 'hard', 'offer-counteroffer', 130, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An acceptance because the seller signed the offer', false, 1), ('A counteroffer because the seller added a new term to the agreement', true, 2), ('Invalid because handwritten modifications are not legally recognized', false, 3), ('An acceptance with a precatory (non-binding) request', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'A buyer exercises a home inspection contingency to terminate a purchase agreement within the allowed time frame. This is an example of:', 'When a buyer terminates a contract by properly exercising a contingency within the specified time frame, it is a lawful termination, not a breach. The contingency gives the buyer the contractual right to withdraw if the conditions are not met. The earnest money is typically returned to the buyer in this situation.', 'easy', 'contract-termination', 131, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Breach of contract by the buyer', false, 1), ('Lawful termination under a contingency provision', true, 2), ('Anticipatory repudiation', false, 3), ('Mutual rescission', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'When both parties to a contract mutually agree to cancel the agreement and return to their pre-contract positions, this is called:', 'Mutual rescission occurs when both parties voluntarily agree to cancel the contract and release each other from further obligations. Both parties are restored to their original positions (the buyer receives their earnest money back, and the seller is free to sell to another party). This is different from a breach, where one party fails to perform.', 'easy', 'contract-termination', 132, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Novation', false, 1), ('Specific performance', false, 2), ('Mutual rescission', true, 3), ('Unilateral termination', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'If a property under contract is destroyed by a fire before closing and neither party is at fault, the contract may be terminated under the doctrine of:', 'When the subject property is destroyed or substantially damaged before closing through no fault of either party, the doctrine of impossibility of performance (or frustration of purpose) may allow the contract to be terminated. The buyer typically receives a return of their earnest money. Some contracts include specific risk-of-loss provisions addressing this scenario.', 'easy', 'contract-termination', 133, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Estoppel', false, 1), ('Impossibility of performance (frustration of purpose)', true, 2), ('Anticipatory breach', false, 3), ('Specific performance', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'A buyer fails to close on the agreed date without any valid reason or contingency protection. The seller''s most common remedy is to:', 'When a buyer breaches a purchase agreement, the most common remedy is for the seller to retain the earnest money deposit as liquidated damages, provided the contract includes a liquidated damages clause. This provision specifies an agreed-upon amount of damages in advance. The seller may also pursue actual damages or specific performance, but liquidated damages is the most practical and common remedy.', 'medium', 'contract-termination', 134, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Immediately sue for the full purchase price', false, 1), ('Retain the earnest money deposit as liquidated damages', true, 2), ('File a criminal complaint against the buyer', false, 3), ('Place a lien on the buyer''s other properties', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'A "novation" in the context of a real estate contract occurs when:', 'Novation is the substitution of a new party for an original party, with the consent of all parties, where the original party is completely released from all obligations. This differs from an assignment, where the original party may remain secondarily liable. All parties must agree to the novation for it to be effective.', 'medium', 'contract-termination', 135, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A new party is substituted for an original party, and the original party is released from obligations', true, 1), ('A contract is renewed for an additional term with the same parties', false, 2), ('An existing contract is amended to change the closing date', false, 3), ('One party assigns their rights but retains all obligations', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'Anticipatory repudiation (anticipatory breach) occurs when:', 'Anticipatory repudiation occurs when one party clearly communicates, before the performance is due, that they will not fulfill their contractual obligations. The non-breaching party may treat this as an immediate breach and pursue remedies without waiting for the performance date to pass.', 'medium', 'contract-termination', 136, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A party misses the closing date by one day', false, 1), ('A party indicates in advance that they will not perform their contractual obligations', true, 2), ('Both parties agree to extend the closing date', false, 3), ('A contingency expires without either party taking action', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'In Virginia, if both the buyer and seller claim the earnest money deposit after a contract falls through and cannot agree on who should receive it, the broker holding the deposit should:', 'When there is a dispute over earnest money and the parties cannot agree, the broker should not unilaterally decide who receives the funds. Virginia regulations allow the broker to file an interpleader action in court, depositing the disputed funds with the court and allowing a judge to determine the rightful recipient. This protects the broker from liability to either party.', 'medium', 'contract-termination', 137, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Release the funds to the party the broker believes is correct', false, 1), ('Retain the funds indefinitely until the parties reach agreement', false, 2), ('File an interpleader action in court to let the court determine the proper recipient', true, 3), ('Split the deposit evenly between both parties', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'A seller breaches a purchase agreement by refusing to sell despite having no legal justification. The buyer may seek specific performance, which would:', 'Specific performance is an equitable remedy where a court orders the breaching party to perform the contract as agreed. In real estate, this remedy is available because each property is considered unique and monetary damages may be inadequate. The buyer would still need to fulfill their obligations under the contract, including paying the purchase price.', 'hard', 'contract-termination', 138, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Award the buyer triple the earnest money deposit', false, 1), ('Force the seller to complete the sale and convey the property as agreed', true, 2), ('Automatically void the seller''s title to the property', false, 3), ('Transfer the property to the buyer without any closing or payment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'A buyer assigns their purchase agreement to a third party. Unless the contract prohibits assignment, what is the legal effect?', 'In an assignment, the assignee receives the buyer''s contractual rights, but the original buyer (assignor) typically remains secondarily liable for the contract obligations unless the seller agrees to a novation (releasing the original buyer). Many purchase agreements restrict or prohibit assignment, so the contract terms must be checked carefully.', 'hard', 'contract-termination', 139, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The original buyer is automatically released from all contract obligations', false, 1), ('The assignee receives the buyer''s rights, but the original buyer remains secondarily liable unless there is a novation', true, 2), ('The assignment voids the original contract', false, 3), ('The seller must approve the assignment or the contract is terminated', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'contract-termination-breach'), 'chapter_quiz', 'Under Virginia''s statute of limitations, how long does a party generally have to file a breach of written contract claim?', 'In Virginia, the statute of limitations for a breach of a written contract is 5 years from the date of the breach (Virginia Code Section 8.01-246). For oral contracts, the limitation period is 3 years. Filing a claim after the statute of limitations has expired will result in the claim being barred.', 'hard', 'contract-termination', 140, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('2 years', false, 1), ('3 years', false, 2), ('5 years', true, 3), ('10 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'Which type of mortgage loan has an interest rate that remains the same for the entire term of the loan?', 'A fixed-rate mortgage locks in the interest rate for the full loan term, providing predictable monthly payments. ARMs fluctuate with market indices, and graduated payment mortgages start with lower payments that increase over time.', 'easy', 'finance', 141, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Adjustable-rate mortgage (ARM)', false, 1), ('Fixed-rate mortgage', true, 2), ('Graduated payment mortgage', false, 3), ('Balloon mortgage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'In an adjustable-rate mortgage, the index plus the margin equals the:', 'The fully indexed rate on an ARM is calculated by adding the margin (a fixed percentage set by the lender) to the index (a benchmark rate like SOFR or Treasury yields). Rate caps may limit how much the actual rate can adjust.', 'easy', 'finance', 142, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Discount rate', false, 1), ('Prime rate', false, 2), ('Fully indexed rate', true, 3), ('Annual percentage rate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'A borrower takes out a loan that requires interest-only payments for 7 years, after which the entire principal balance is due. This is called a:', 'A balloon mortgage requires a large lump-sum payment at the end of the loan term. The borrower typically makes smaller periodic payments (often interest-only) and must pay off or refinance the remaining balance when the balloon payment comes due.', 'easy', 'finance', 143, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fully amortized loan', false, 1), ('Balloon mortgage', true, 2), ('Package mortgage', false, 3), ('Blanket mortgage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'Which mortgage clause allows the lender to demand full repayment of the loan balance if the property is sold or transferred?', 'The due-on-sale clause, also called the alienation clause, gives the lender the right to call the entire loan balance due and payable when the borrower sells or transfers ownership. This prevents loan assumption without lender approval.', 'medium', 'finance', 144, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Subordination clause', false, 1), ('Defeasance clause', false, 2), ('Due-on-sale clause (alienation clause)', true, 3), ('Escalation clause', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'A reverse mortgage is designed primarily for:', 'A Home Equity Conversion Mortgage (HECM), the most common reverse mortgage, is available to homeowners aged 62 or older. It allows them to convert home equity into cash without making monthly payments. The loan becomes due when the borrower sells, moves out, or passes away.', 'medium', 'finance', 145, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('First-time homebuyers with limited savings', false, 1), ('Investors purchasing rental property', false, 2), ('Homeowners aged 62 or older who want to access home equity', true, 3), ('Borrowers with excellent credit seeking lower rates', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'Which type of loan covers more than one parcel of real estate and typically includes a partial release clause?', 'A blanket mortgage covers multiple properties under a single loan. It commonly includes a partial release clause, which allows individual parcels to be released from the lien as portions of the loan are repaid. Developers often use blanket mortgages when subdividing land.', 'medium', 'finance', 146, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Package mortgage', false, 1), ('Wraparound mortgage', false, 2), ('Blanket mortgage', true, 3), ('Construction loan', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'A purchase money mortgage is one in which:', 'A purchase money mortgage is seller financing where the seller acts as the lender, carrying back a note secured by the property. This can be the primary loan or a secondary loan to bridge the gap between the buyer''s down payment and the first mortgage.', 'medium', 'finance', 147, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer obtains financing from the FHA', false, 1), ('The seller finances all or part of the purchase price', true, 2), ('The lender provides 100% financing with no down payment', false, 3), ('The borrower pledges personal property as additional collateral', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'The difference between the mortgage theory and the lien theory of mortgages is that under the lien theory:', 'Virginia is a lien theory state. Under lien theory, the borrower retains both legal and equitable title to the property, while the lender holds a lien as security. In title theory states, the lender holds legal title until the debt is satisfied.', 'hard', 'finance', 148, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Title to the property is transferred to the lender until the loan is paid', false, 1), ('The borrower retains title while the lender holds a lien against the property', true, 2), ('The property must be sold at foreclosure without judicial proceedings', false, 3), ('The lender has immediate right of possession upon default', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'An ARM has a 2/6 rate cap structure. If the initial rate is 4%, what is the maximum rate the loan could ever reach?', 'In a 2/6 cap structure, the first number (2) is the periodic adjustment cap per period, and the second number (6) is the lifetime cap. The maximum rate is the initial rate plus the lifetime cap: 4% + 6% = 10%. The rate can never exceed 10% regardless of how high the index rises.', 'hard', 'finance', 149, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('6%', false, 1), ('8%', false, 2), ('10%', true, 3), ('12%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mortgage-types-terms'), 'chapter_quiz', 'A wraparound mortgage is BEST described as a loan that:', 'A wraparound mortgage is a form of seller financing where the new loan wraps around the existing mortgage. The seller continues paying the original loan while the buyer makes payments on the larger wraparound amount at a higher interest rate. The seller profits from the interest rate differential.', 'hard', 'finance', 150, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Replaces an existing first mortgage with a new one at a lower rate', false, 1), ('Encompasses an existing mortgage while creating a new, larger loan at a higher rate', true, 2), ('Is insured by the Federal Housing Administration', false, 3), ('Requires the borrower to make payments directly to the original lender', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'Under federal law, the lender is required to provide the borrower with a Loan Estimate within how many business days of receiving a loan application?', 'Under the TILA-RESPA Integrated Disclosure (TRID) rules, lenders must provide a Loan Estimate within 3 business days of receiving a completed loan application. This replaced the former Good Faith Estimate and initial Truth-in-Lending disclosure.', 'easy', 'finance', 151, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 business day', false, 1), ('3 business days', true, 2), ('5 business days', false, 3), ('7 business days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'The debt-to-income (DTI) ratio is calculated by dividing a borrower''s:', 'The DTI ratio compares the borrower''s total monthly debt obligations (including the proposed mortgage payment) to their gross monthly income. Conventional loans typically require a DTI of 43% or less, though some programs allow higher ratios with compensating factors.', 'easy', 'finance', 152, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Total assets by total liabilities', false, 1), ('Monthly debt payments by gross monthly income', true, 2), ('Annual income by the loan amount', false, 3), ('Net worth by the property value', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'A pre-approval letter differs from a pre-qualification letter because a pre-approval:', 'A pre-approval involves the lender actually verifying the borrower''s financial information, including pulling credit reports, verifying income, and reviewing assets. A pre-qualification is typically a less rigorous assessment based on self-reported data.', 'easy', 'finance', 153, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is based solely on the borrower''s self-reported income', false, 1), ('Guarantees the loan will close', false, 2), ('Involves verification of credit, income, and assets by the lender', true, 3), ('Does not require a credit check', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'Which federal law prohibits discrimination in lending based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance?', 'The Equal Credit Opportunity Act (ECOA), implemented through Regulation B, prohibits lenders from discriminating against credit applicants based on protected classes. While the Fair Housing Act also prohibits discrimination, ECOA specifically applies to lending and includes additional protected classes like age and public assistance.', 'medium', 'finance', 154, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fair Housing Act', false, 1), ('Equal Credit Opportunity Act (ECOA)', true, 2), ('Community Reinvestment Act', false, 3), ('Home Mortgage Disclosure Act', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'The Closing Disclosure must be delivered to the borrower at least how many business days before closing?', 'Under TRID rules, the Closing Disclosure must be delivered at least 3 business days before the consummation (closing) of the loan. If there are significant changes to the loan terms, a new Closing Disclosure may be required, which restarts the 3-day waiting period.', 'medium', 'finance', 155, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 business day', false, 1), ('3 business days', true, 2), ('5 business days', false, 3), ('7 business days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'Private mortgage insurance (PMI) is typically required when the borrower''s down payment is less than:', 'Conventional lenders require PMI when the loan-to-value ratio exceeds 80%, meaning the borrower puts down less than 20%. PMI protects the lender against borrower default. Under the Homeowners Protection Act, PMI must be automatically terminated when the LTV reaches 78%.', 'medium', 'finance', 156, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('10% of the purchase price', false, 1), ('15% of the purchase price', false, 2), ('20% of the purchase price', true, 3), ('25% of the purchase price', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'FHA loans differ from conventional loans primarily because FHA loans are:', 'FHA does not make loans directly; it insures loans made by approved lenders. If a borrower defaults, the FHA pays the lender''s claim. This insurance allows lenders to offer more favorable terms, including lower down payments and more flexible credit requirements.', 'medium', 'finance', 157, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Made directly by the federal government', false, 1), ('Insured by the Federal Housing Administration against borrower default', true, 2), ('Available only to veterans and active-duty military', false, 3), ('Limited to properties valued under $100,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'A borrower earns $7,500 per month gross income and has monthly debts of $800. If the lender requires a maximum 43% back-end DTI, what is the maximum total monthly payment (including the new mortgage) the borrower can qualify for?', 'The back-end DTI includes all monthly debts plus the new mortgage. Maximum total debt allowed: $7,500 x 0.43 = $3,225. Subtract existing debts of $800, leaving $2,425 as the maximum allowable mortgage payment (PITI). This is a common PSI exam calculation.', 'hard', 'finance', 158, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$2,425', false, 1), ('$3,225', false, 2), ('$2,425 for the mortgage alone', true, 3), ('$3,750', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'Which of the following would trigger a new 3-day waiting period for the Closing Disclosure under TRID?', 'Under TRID, a new 3-day waiting period is triggered if the APR increases by more than 1/8% for fixed-rate loans (or 1/4% for adjustable-rate loans), the loan product changes, or a prepayment penalty is added. Minor clerical changes do not reset the waiting period.', 'hard', 'finance', 159, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A minor change to the seller''s closing costs', false, 1), ('An increase in the APR by more than 1/8 of a percent for a fixed-rate loan', true, 2), ('A change in the closing date', false, 3), ('A correction to the borrower''s mailing address', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'loan-process-qualification'), 'chapter_quiz', 'The process by which a lender sells mortgages to investors on Wall Street, often through mortgage-backed securities, is known as:', 'Securitization is the process of pooling mortgage loans and selling them as mortgage-backed securities to investors in the secondary market. This replenishes the lender''s funds so they can make new loans. Entities like Fannie Mae, Freddie Mac, and Ginnie Mae facilitate this process.', 'hard', 'finance', 160, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Hypothecation', false, 1), ('Disintermediation', false, 2), ('Securitization', true, 3), ('Novation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'Which appraisal approach is most commonly used to value single-family residential properties?', 'The sales comparison approach (also called the market data approach) is the most reliable method for valuing residential properties because it reflects what buyers are actually paying for similar homes. The appraiser compares the subject property to recently sold comparable properties and makes adjustments for differences.', 'easy', 'valuation', 161, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Income capitalization approach', false, 1), ('Cost approach', false, 2), ('Sales comparison approach', true, 3), ('Gross rent multiplier approach', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'When using the sales comparison approach, adjustments are always made to the:', 'In the sales comparison approach, adjustments are always made to the comparable (comp) properties, never to the subject. If a comp has a feature the subject lacks, the appraiser subtracts value from the comp. If the subject has a feature the comp lacks, the appraiser adds value to the comp.', 'easy', 'valuation', 162, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Subject property', false, 1), ('Comparable properties', true, 2), ('Both the subject and comparable properties equally', false, 3), ('Listing price of the subject property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'The principle of substitution states that a buyer will pay no more for a property than:', 'The principle of substitution is the foundation of all three appraisal approaches. It holds that a prudent buyer will pay no more for a property than the cost of acquiring an equivalent substitute. This principle drives market pricing and is the basis for the sales comparison approach.', 'easy', 'valuation', 163, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The appraised value', false, 1), ('The cost to acquire an equally desirable substitute property', true, 2), ('The original cost of construction', false, 3), ('The assessed value for tax purposes', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'In the cost approach to value, the formula is:', 'The cost approach formula is: Land value + Cost new of improvements (reproduction or replacement) - Accrued depreciation = Property value. Land is never depreciated because it does not wear out. This approach is most useful for new construction and special-purpose properties.', 'medium', 'valuation', 164, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Land value + reproduction cost - depreciation', true, 1), ('Net operating income / capitalization rate', false, 2), ('Gross rent x gross rent multiplier', false, 3), ('Assessed value + market adjustments', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'The loss of value from any cause is known as:', 'Depreciation is the general term for any loss of value from any cause. It includes three types: physical deterioration (wear and tear), functional obsolescence (outdated design or features), and external/economic obsolescence (factors outside the property). Only depreciation encompasses all three.', 'medium', 'valuation', 165, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Obsolescence', false, 1), ('Deterioration', false, 2), ('Depreciation', true, 3), ('Depletion', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'A property near a busy highway loses value due to traffic noise. This is an example of:', 'External (economic) obsolescence is caused by factors outside the property itself, such as traffic noise, proximity to undesirable land uses, or economic downturns in the area. External obsolescence is always incurable because the property owner cannot control or fix external conditions.', 'medium', 'valuation', 166, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Physical deterioration', false, 1), ('Functional obsolescence', false, 2), ('External (economic) obsolescence', true, 3), ('Curable depreciation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'The income capitalization approach determines value by dividing the net operating income (NOI) by the:', 'The income approach formula is: Value = NOI / Cap Rate. The capitalization rate represents the investor''s expected rate of return. A lower cap rate indicates lower risk and higher value, while a higher cap rate indicates higher risk and lower value.', 'medium', 'valuation', 167, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Gross rent multiplier', false, 1), ('Mortgage interest rate', false, 2), ('Capitalization rate', true, 3), ('Vacancy rate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'A home with only one bathroom in a neighborhood where all comparable homes have two bathrooms suffers from:', 'Functional obsolescence results from deficiencies or superadequacies within the property itself. Having fewer bathrooms than market standards is a deficiency that makes the home less desirable. If the cost to add a bathroom is less than the value it would add, the obsolescence is curable.', 'hard', 'valuation', 168, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Physical deterioration', false, 1), ('External obsolescence', false, 2), ('Functional obsolescence', true, 3), ('Regression', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'An investment property generates $120,000 in annual gross income, has a 5% vacancy rate, and $42,000 in annual operating expenses. Using a cap rate of 8%, what is the estimated value?', 'First calculate effective gross income: $120,000 - ($120,000 x 0.05) = $114,000. Then subtract operating expenses: $114,000 - $42,000 = $72,000 NOI. Finally, divide NOI by cap rate: $72,000 / 0.08 = $900,000. This is a standard income approach calculation tested on the PSI exam.', 'hard', 'valuation', 169, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$862,500', false, 1), ('$900,000', true, 2), ('$975,000', false, 3), ('$1,500,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'appraisal-methods'), 'chapter_quiz', 'The difference between reproduction cost and replacement cost is that reproduction cost:', 'Reproduction cost is the cost to build an exact duplicate of the property using the same materials, design, and construction methods. Replacement cost is the cost to build a property of equal utility using modern materials and current standards. Replacement cost is more commonly used because it avoids replicating outdated features.', 'hard', 'valuation', 170, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Uses modern materials and current building standards', false, 1), ('Creates an exact replica using the same materials and construction methods', true, 2), ('Is always less expensive than replacement cost', false, 3), ('Accounts for depreciation while replacement cost does not', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A property sold for $350,000. The listing broker receives 3% and the selling broker receives 3%. How much commission does the listing broker receive?', 'The listing broker receives 3% of the $350,000 sale price: $350,000 x 0.03 = $10,500. The total commission is 6% ($21,000), split equally between listing and selling brokers. Individual agents then split their share with their respective brokers per their agreements.', 'easy', 'math', 171, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$7,000', false, 1), ('$10,500', true, 2), ('$17,500', false, 3), ('$21,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A rectangular lot measures 150 feet by 200 feet. How many acres does it contain? (1 acre = 43,560 sq ft)', 'First calculate square footage: 150 x 200 = 30,000 sq ft. Then convert to acres: 30,000 / 43,560 = 0.689 acres, which rounds to 0.69 acres. Knowing that one acre equals 43,560 square feet is essential for the Virginia PSI exam.', 'easy', 'math', 172, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('0.50 acres', false, 1), ('0.69 acres', true, 2), ('0.75 acres', false, 3), ('1.00 acres', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'If property taxes are $4,800 per year and closing occurs on September 1, how much does the seller owe the buyer for prorated taxes (using a 360-day year, January 1 start)?', 'The seller owned the property from January 1 through August 31, which is 8 months. Monthly tax: $4,800 / 12 = $400. Seller owes: $400 x 8 months = $3,200. The seller is responsible for taxes during the period of ownership and provides a credit to the buyer at closing.', 'easy', 'math', 173, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$2,400', false, 1), ('$2,667', false, 2), ('$3,200', true, 3), ('$3,600', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A property has an assessed value of $280,000. The local tax rate is $1.15 per $100 of assessed value. What are the annual property taxes?', 'Tax formula: Assessed value / $100 x tax rate = annual taxes. $280,000 / 100 = 2,800 units. 2,800 x $1.15 = $3,220 annual taxes. Virginia commonly expresses tax rates per $100 of assessed value, and this calculation appears frequently on the PSI exam.', 'medium', 'math', 174, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$2,800', false, 1), ('$3,220', true, 2), ('$3,500', false, 3), ('$32,200', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'An agent receives 60% of the commission earned by the brokerage. If the property sold for $425,000 and the brokerage earned a 3% commission, how much did the agent receive?', 'Brokerage commission: $425,000 x 0.03 = $12,750. Agent''s share: $12,750 x 0.60 = $7,650. Commission splits between broker and agent are separate from the commission split between listing and selling sides. Always work through multi-step commission problems in order.', 'medium', 'math', 175, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$7,650', true, 1), ('$5,100', false, 2), ('$12,750', false, 3), ('$15,300', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A buyer puts 10% down on a $320,000 home and obtains a loan at 6.5% annual interest. What is the first month''s interest payment?', 'Down payment: $320,000 x 0.10 = $32,000. Loan amount: $320,000 - $32,000 = $288,000. Annual interest: $288,000 x 0.065 = $18,720. Monthly interest: $18,720 / 12 = $1,560. The first month''s payment on an amortized loan is almost entirely interest.', 'medium', 'math', 176, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$1,560', true, 1), ('$1,733', false, 2), ('$2,080', false, 3), ('$1,440', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A seller wants to net $300,000 after paying a 6% commission and $5,000 in closing costs. What must the minimum sale price be?', 'The seller''s net equals the sale price minus commission and costs. Let P = sale price. P - 0.06P - $5,000 = $300,000. So 0.94P = $305,000. P = $305,000 / 0.94 = $324,468.09. You cannot simply add 6% to $305,000 because the commission is based on the sale price, not the net.', 'hard', 'math', 177, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$318,000', false, 1), ('$323,000', false, 2), ('$324,468', true, 3), ('$330,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A property purchased for $250,000 appreciated 4% per year for 3 years (compounded annually). What is its current value?', 'Compound appreciation: $250,000 x 1.04 x 1.04 x 1.04 = $250,000 x 1.124864 = $281,216. Simple appreciation would be $250,000 + ($10,000 x 3) = $280,000, but compound growth means each year''s growth builds on the previous year''s total. The exam tests this distinction.', 'hard', 'math', 178, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$280,000', false, 1), ('$281,216', true, 2), ('$282,000', false, 3), ('$290,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'A property generates $2,400/month in rent. The owner pays $8,400/year in operating expenses. Using a 9% cap rate, what is the property value?', 'Annual gross income: $2,400 x 12 = $28,800. NOI: $28,800 - $8,400 = $20,400. Value = NOI / cap rate = $20,400 / 0.09 = $226,667. Remember to always convert monthly figures to annual before applying the cap rate formula.', 'hard', 'math', 179, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$213,333', false, 1), ('$226,667', true, 2), ('$320,000', false, 3), ('$186,667', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-math-calculations'), 'chapter_quiz', 'In Virginia, the grantor''s tax on real estate transfers is:', 'Virginia''s state grantor''s tax is $2.50 per $1,000 of the sale price (equivalent to $0.25 per $100 or $0.0025 per dollar). Some Virginia localities impose an additional regional grantor''s tax. This is a Virginia-specific calculation frequently tested on the state portion of the exam.', 'medium', 'math', 180, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$0.50 per $500 of sale price', false, 1), ('$1.00 per $1,000 of sale price', false, 2), ('$2.50 per $1,000 of sale price (or $0.25 per $100)', true, 3), ('$5.00 per $1,000 of sale price', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'In Virginia, a licensee who represents a buyer in a transaction is known as a:', 'A buyer''s agent represents the buyer''s interests in the transaction. Virginia law requires that all agency relationships be disclosed to all parties. The buyer''s agent owes fiduciary duties to the buyer, including loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care.', 'easy', 'practice', 181, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Subagent', false, 1), ('Buyer''s agent', true, 2), ('Transaction broker', false, 3), ('Dual agent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'Which fiduciary duty requires an agent to act in the best interest of the client, even if it conflicts with the agent''s own interest?', 'Loyalty is the fiduciary duty that requires the agent to place the client''s interests above all others, including the agent''s own interests. An agent must never use the client relationship for personal gain or advantage. This is considered the highest fiduciary obligation.', 'easy', 'practice', 182, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Disclosure', false, 1), ('Obedience', false, 2), ('Loyalty', true, 3), ('Accounting', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'A listing agreement is a contract between:', 'A listing agreement is always between the property owner (seller) and the broker, not the individual agent. The agent acts under the broker''s authority. In Virginia, all commissions must be paid to the broker, who then compensates the agent according to their separate agreement.', 'easy', 'practice', 183, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller and the buyer', false, 1), ('The seller and the listing agent personally', false, 2), ('The seller and the listing broker', true, 3), ('The buyer and the selling broker', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'Dual agency occurs when:', 'Dual agency exists when one licensee (or one brokerage) represents both the buyer and seller in the same transaction. In Virginia, dual agency is legal but requires informed, written consent from both parties. The dual agent cannot advocate for either party over the other.', 'medium', 'practice', 184, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Two agents from different brokerages represent the buyer and seller', false, 1), ('One agent represents both the buyer and seller in the same transaction with informed consent', true, 2), ('A broker manages a property management company and a sales office', false, 3), ('An agent refers a client to another agent within the same brokerage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'An exclusive right-to-sell listing differs from an exclusive agency listing in that:', 'Under an exclusive right-to-sell listing, the broker receives a commission no matter who sells the property, even if the seller finds the buyer without the broker''s help. Under an exclusive agency listing, the seller retains the right to sell independently without owing a commission.', 'medium', 'practice', 185, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only the exclusive right-to-sell can be listed on the MLS', false, 1), ('The broker earns a commission regardless of who finds the buyer under an exclusive right-to-sell', true, 2), ('An exclusive agency listing allows multiple brokers to list the property', false, 3), ('There is no practical difference between the two types', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'Earnest money deposits in Virginia must be deposited into:', 'Virginia law requires that earnest money deposits be placed in an escrow or trust account maintained by the broker (or the settlement agent if specified in the contract). The broker must deposit the funds by the end of the fifth business day following ratification of the contract.', 'medium', 'practice', 186, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The listing agent''s personal bank account', false, 1), ('The seller''s bank account within 24 hours', false, 2), ('An escrow or trust account maintained by the broker', true, 3), ('A joint account held by both brokers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'Commingling refers to:', 'Commingling is the illegal practice of mixing personal or business funds with client escrow funds. Conversion, a related violation, is using client escrow funds for personal purposes. Both are serious violations that can result in license revocation and criminal prosecution in Virginia.', 'medium', 'practice', 187, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Mixing personal funds with client funds in an escrow account', true, 1), ('Representing both parties in a real estate transaction', false, 2), ('Failing to disclose a material defect', false, 3), ('Advertising without the broker''s consent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'A licensee discovers that a competing agent is offering rebates to buyers at closing. In Virginia, this practice is:', 'Virginia does not prohibit commission rebates to buyers. However, the rebate must be disclosed to all parties in the transaction and reflected on the closing statement. The lender must also be notified because rebates can affect the buyer''s loan terms.', 'hard', 'practice', 188, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Always illegal under Virginia real estate law', false, 1), ('Legal as long as it is disclosed to all parties in the transaction', true, 2), ('Legal only if approved by the Virginia Real Estate Board', false, 3), ('Only permitted for brokers, not salespersons', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'A broker receives two offers on the same property simultaneously. The broker should:', 'A listing agent has a fiduciary duty to present all offers to the seller promptly, regardless of the offer amount or terms. The decision to accept, reject, or counter any offer belongs solely to the seller. Withholding or delaying offers is a violation of fiduciary duty.', 'hard', 'practice', 189, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Present only the highest offer to the seller', false, 1), ('Present both offers to the seller promptly', true, 2), ('Reject the lower offer and present only the strongest', false, 3), ('Wait 24 hours before presenting either offer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'practice-of-real-estate'), 'chapter_quiz', 'A designated agent arrangement in Virginia means that:', 'Virginia permits designated agency, where the broker designates one agent in the firm to represent the seller and a different agent in the same firm to represent the buyer. This avoids full dual agency while allowing agents in the same brokerage to work both sides of a deal.', 'hard', 'practice', 190, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One agent handles all transactions for a particular zip code', false, 1), ('The broker assigns separate agents within the firm to represent the buyer and seller in the same transaction', true, 2), ('The state assigns a government agent to oversee the transaction', false, 3), ('An agent from another state is designated to assist with the closing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'In Virginia, the Residential Property Disclosure Act requires the seller to provide the buyer with:', 'Virginia''s Residential Property Disclosure Act requires sellers of residential property to provide a disclosure statement about known conditions of the property. The seller must disclose known defects but is not required to conduct inspections. The buyer receives the disclosure before or at contract ratification.', 'easy', 'disclosures', 191, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A comprehensive home inspection report', false, 1), ('A disclosure statement covering known material defects and property conditions', true, 2), ('An appraisal report from a licensed appraiser', false, 3), ('A termite inspection certificate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'Federal law requires disclosure of known lead-based paint hazards for homes built before:', 'The Residential Lead-Based Paint Hazard Reduction Act of 1992 requires sellers and landlords of homes built before 1978 to disclose known lead-based paint hazards. Buyers must receive an EPA pamphlet and have a 10-day opportunity to conduct a lead paint inspection.', 'easy', 'disclosures', 192, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1960', false, 1), ('1972', false, 2), ('1978', true, 3), ('1986', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'A Virginia seller opts out of providing the disclosure form by checking the "owner makes no representations" option. This means:', 'Virginia allows sellers to opt out of disclosures by providing a disclaimer statement. However, the buyer then receives the right to void the contract within a specified period (typically 3 days) after receiving the disclaimer. Even with a disclaimer, the seller cannot conceal known material defects.', 'easy', 'disclosures', 193, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller has no obligation to disclose anything', false, 1), ('The buyer must waive their right to a home inspection', false, 2), ('The buyer may void the contract within a specified period after receiving the disclaimer', true, 3), ('The seller is automatically liable for any undisclosed defects', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'Which of the following is classified as a material fact that MUST be disclosed by an agent in Virginia?', 'Flood zone location is a material fact that affects the property''s value, insurability, and use. Virginia law specifically exempts agents from disclosing that a property was the site of a death, suicide, or felony. Sex offender information is available through public registries and is not a required disclosure.', 'medium', 'disclosures', 194, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A previous owner died of natural causes in the home', false, 1), ('The property is located in a flood zone', true, 2), ('The neighbors have a history of loud parties', false, 3), ('A sex offender lives in the neighborhood', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'Under Virginia''s "caveat emptor" modification, a seller who provides the property disclosure statement is:', 'Virginia''s disclosure law requires sellers to disclose what they know or should reasonably know about the property''s condition. It does not require the seller to inspect the property or guarantee its condition. The disclosure is not a warranty, and buyers should still conduct their own inspections.', 'medium', 'disclosures', 195, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Guaranteeing the property is free from defects', false, 1), ('Disclosing only what they actually know about the property''s condition', true, 2), ('Required to hire a professional inspector before listing', false, 3), ('Liable for any defects found after closing regardless of knowledge', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'A property was previously used as a methamphetamine lab. In Virginia, the agent:', 'Drug manufacturing contamination is a material defect affecting the property''s habitability, value, and potential health hazards. If the agent has actual knowledge of prior drug manufacturing on the property, this must be disclosed. Virginia requires disclosure of known conditions that may affect health or safety.', 'medium', 'disclosures', 196, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Has no obligation to disclose this information', false, 1), ('Must disclose this if they have actual knowledge of it', true, 2), ('Should only disclose upon direct questioning by the buyer', false, 3), ('Can never disclose this due to privacy laws', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'The Virginia Residential Property Disclosure Act applies to the sale of:', 'Virginia''s Residential Property Disclosure Act applies to residential real property improved with 1 to 4 dwelling units. Certain transactions are exempt, including foreclosure sales, new construction sold by a builder, and transfers between co-owners or family members.', 'medium', 'disclosures', 197, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('All real property in Virginia', false, 1), ('Residential properties containing 1 to 4 dwelling units', true, 2), ('Only single-family detached homes', false, 3), ('Only new construction homes', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'If an agent discovers a material defect that the seller has not disclosed, the agent should:', 'An agent''s duty to disclose known material defects to buyers overrides the seller''s instructions to remain silent. If the seller refuses to allow disclosure, the agent should withdraw from the listing. Knowingly concealing material defects exposes the agent to liability and disciplinary action.', 'hard', 'disclosures', 198, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Ignore the defect if the seller instructs them to remain silent', false, 1), ('Disclose the defect to prospective buyers regardless of the seller''s wishes', true, 2), ('Withdraw from the listing without telling anyone', false, 3), ('Report the seller to the police', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'Which of the following items is Virginia law specifically NOT required to be disclosed by a seller or agent?', 'Virginia Code 55.1-708 (formerly 55-519) provides that no seller or agent is required to disclose that the property was the site of a death, including a homicide, suicide, or other felony. This is sometimes called the "stigmatized property" protection.', 'hard', 'disclosures', 199, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A known defective septic system', false, 1), ('Known structural damage to the foundation', false, 2), ('That a homicide or suicide occurred on the property', true, 3), ('Known environmental contamination on the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-disclosures'), 'chapter_quiz', 'Regarding mold disclosure in Virginia, an agent who has actual knowledge of a mold problem must:', 'Mold is considered a material adverse condition that can affect health and property value. Virginia agents with actual knowledge of mold must disclose it to prospective buyers. While Virginia does not have a specific mold disclosure statute, general material fact disclosure duties apply. The agent is not responsible for remediation.', 'hard', 'disclosures', 200, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Order a professional mold remediation before disclosure', false, 1), ('Disclose the mold issue to prospective buyers as a material adverse fact', true, 2), ('Recommend that the buyer waive the inspection contingency', false, 3), ('Report the mold to the Virginia Department of Health immediately', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'In Virginia, real estate closings are typically conducted by:', 'Virginia requires that a licensed settlement agent conduct real estate closings. This is typically an attorney, title company, or financial institution licensed by the Virginia State Bar or the Bureau of Financial Institutions. Settlement agents must also be registered with DPOR.', 'easy', 'closing', 201, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The listing agent', false, 1), ('A licensed settlement agent, usually an attorney or title company', true, 2), ('The county clerk of courts', false, 3), ('The buyer''s lender', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'A credit on the buyer''s closing statement means the buyer:', 'A credit on the buyer''s side of the closing statement reduces the amount the buyer needs to pay at closing. Common buyer credits include the earnest money deposit, seller concessions, and prorated items the seller owes. A debit increases the amount the buyer must pay.', 'easy', 'closing', 202, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Owes additional money', false, 1), ('Receives a reduction in the amount they need to bring to closing', true, 2), ('Must pay the amount to the seller', false, 3), ('Forfeits their earnest money', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'RESPA prohibits which of the following?', 'The Real Estate Settlement Procedures Act (RESPA) prohibits kickbacks and unearned referral fees for settlement services. No person may give or accept a fee, kickback, or anything of value for referrals of settlement service business. RESPA also prohibits requiring a specific title insurance company.', 'easy', 'closing', 203, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Charging reasonable settlement fees for services rendered', false, 1), ('Kickbacks or referral fees for settlement service referrals', true, 2), ('Title insurance companies offering title searches', false, 3), ('Sellers paying for the buyer''s closing costs', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'Prorations at closing are typically calculated using:', 'Prorations can be calculated using either the 360-day statutory year (12 months of 30 days each) or the 365-day actual year. The method is typically specified in the purchase contract. Virginia contracts commonly use the 365-day method for property tax prorations.', 'medium', 'closing', 204, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A 365-day year only', false, 1), ('A 360-day year (12 months of 30 days) or actual days, depending on the contract', true, 2), ('The calendar month only', false, 3), ('Whole months with no partial-month adjustments', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'At closing, the earnest money deposit appears as:', 'The earnest money deposit is a credit to the buyer on the closing statement because it reduces the amount the buyer owes at closing. It does not appear as a credit or debit to the seller because the seller receives the full purchase price regardless of how the buyer funds it.', 'medium', 'closing', 205, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A debit to the buyer and a credit to the seller', false, 1), ('A credit to the buyer only', true, 2), ('A debit to the seller only', false, 3), ('A credit to both the buyer and the seller', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'Which document is recorded in the land records after closing to provide evidence that a mortgage lien has been satisfied?', 'When a mortgage or deed of trust is paid in full, the lender issues a certificate of satisfaction (also called a release or reconveyance) which is recorded in the land records. This removes the lien from the property''s title. In Virginia, the trustee issues the release for deeds of trust.', 'medium', 'closing', 206, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Certificate of satisfaction (release of lien)', true, 1), ('Deed of trust', false, 2), ('Promissory note', false, 3), ('Title insurance policy', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'Under Virginia''s Wet Settlement Act, the settlement agent must:', 'Virginia''s Wet Settlement Act requires that the settlement agent have all funds (loan proceeds and buyer''s funds) collected and available before disbursing any settlement funds. This protects all parties from "dry closings" where documents are signed before funds are confirmed.', 'hard', 'closing', 207, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Ensure all funds are collected before or at the time of disbursement', true, 1), ('Allow the seller to receive funds 3 days before closing', false, 2), ('Use only cashier''s checks for all transactions', false, 3), ('Require all parties to be physically present at closing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'If property taxes of $6,000 have been paid in full for the year and closing occurs on October 1, the seller is entitled to a credit of:', 'The seller prepaid taxes for the full year but only owned the property for 9 months (Jan-Sep). The buyer owes the seller for the 3 months (Oct-Dec) the buyer will own the property: $6,000 / 12 x 3 = $1,500 credit to the seller. This is a debit to the buyer.', 'hard', 'closing', 208, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$1,500', true, 1), ('$4,500', false, 2), ('$3,000', false, 3), ('$6,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'Title insurance differs from other forms of insurance because it protects against:', 'Title insurance is unique because it protects against past events, not future ones. It covers losses from title defects, liens, encumbrances, or other matters that existed before the policy date but were not found during the title search. A one-time premium provides coverage for as long as the insured owns the property.', 'hard', 'closing', 209, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Future events that may occur after the policy date', false, 1), ('Defects, liens, and encumbrances that existed before the policy date but were not discovered', true, 2), ('Physical damage to the property', false, 3), ('Loss of income from the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'closing-procedures'), 'chapter_quiz', 'In Virginia, which of the following items is typically a seller''s closing cost?', 'The grantor''s tax is a Virginia transfer tax paid by the seller (grantor). It is calculated at $2.50 per $1,000 of the sale price (with possible additional local taxes). Loan origination fees, prepaid insurance, and deed of trust recording fees are typically buyer expenses.', 'medium', 'closing', 210, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Loan origination fee', false, 1), ('Prepaid homeowner''s insurance', false, 2), ('Grantor''s tax', true, 3), ('Recording fee for the deed of trust', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'Which type of deed provides the GREATEST protection to the buyer?', 'A general warranty deed provides the highest level of buyer protection because the grantor warrants title against all defects, including those arising before the grantor''s ownership. It includes five covenants: seisin, right to convey, against encumbrances, quiet enjoyment, and warranty forever.', 'easy', 'title', 211, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Quitclaim deed', false, 1), ('Bargain and sale deed', false, 2), ('General warranty deed', true, 3), ('Special warranty deed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'For a deed to be valid in Virginia, it must include all of the following EXCEPT:', 'Recording is not required for a deed to be valid between the parties. A valid deed requires a competent grantor, identifiable grantee, consideration, granting clause, legal description, and delivery and acceptance. Recording provides constructive notice to the public but does not affect validity between grantor and grantee.', 'easy', 'title', 212, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Competent grantor', false, 1), ('Identifiable grantee', false, 2), ('Recording at the courthouse', true, 3), ('Legal description of the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'A quitclaim deed conveys:', 'A quitclaim deed transfers whatever interest the grantor may have in the property, if any, without any warranties or guarantees. It provides the least buyer protection and is commonly used to clear title defects, transfer property between family members, or add/remove names from title.', 'easy', 'title', 213, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A guaranteed fee simple interest', false, 1), ('Whatever interest the grantor may have, with no warranties', true, 2), ('Only the improvements, not the land', false, 3), ('A life estate interest only', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'The covenant of quiet enjoyment in a general warranty deed means:', 'The covenant of quiet enjoyment guarantees that the grantee''s title and possession will not be challenged by someone with a superior claim. If a third party with a valid prior claim evicts the grantee, the grantor may be held liable. This is one of the five covenants in a general warranty deed.', 'medium', 'title', 214, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property is in a quiet neighborhood', false, 1), ('The buyer can enjoy the property without noise pollution', false, 2), ('The grantee will not be disturbed by anyone with a superior claim to the title', true, 3), ('The property has no noise-related easements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'In Virginia, a deed of trust differs from a mortgage in that:', 'Virginia primarily uses deeds of trust rather than mortgages. A deed of trust involves three parties: the trustor (borrower), the beneficiary (lender), and the trustee (neutral third party who holds legal title). If the borrower defaults, the trustee can conduct a non-judicial foreclosure sale.', 'medium', 'title', 215, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A deed of trust involves three parties: borrower, lender, and trustee', true, 1), ('A deed of trust cannot be used for residential property', false, 2), ('A mortgage is always preferred by lenders in Virginia', false, 3), ('There is no difference; the terms are interchangeable', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'Which method of legal description uses compass directions and distances to define property boundaries?', 'Metes and bounds uses compass directions (bearings) and measured distances to describe property boundaries, starting from a point of beginning (POB) and returning to it. Virginia commonly uses metes and bounds descriptions. The government rectangular survey system is not used in Virginia.', 'medium', 'title', 216, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Lot and block (plat map)', false, 1), ('Government rectangular survey', false, 2), ('Metes and bounds', true, 3), ('Street address', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'Adverse possession in Virginia requires the claimant to demonstrate possession that is all of the following EXCEPT:', 'Adverse possession requires possession that is open, notorious, continuous, hostile (without permission), exclusive, and under a claim of right for Virginia''s statutory period of 15 years. If the owner grants permission, the possession is not hostile and cannot ripen into adverse possession.', 'medium', 'title', 217, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Open and notorious', false, 1), ('Continuous for the statutory period', false, 2), ('Permitted by the record owner', true, 3), ('Hostile and under a claim of right', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'Under Virginia''s race-notice recording statute, a subsequent purchaser takes priority over a prior unrecorded deed if the subsequent purchaser:', 'Virginia follows a race-notice recording system. To take priority over a prior unrecorded deed, the subsequent purchaser must: (1) record first, and (2) have purchased without actual or constructive notice of the prior conveyance. Both conditions must be met.', 'hard', 'title', 218, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Simply records first, regardless of knowledge', false, 1), ('Records first and had no notice of the prior conveyance', true, 2), ('Paid a higher price for the property', false, 3), ('Has a warranty deed while the prior buyer has a quitclaim deed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'A special warranty deed warrants the title only against defects that arose:', 'A special warranty deed (sometimes called a limited warranty deed) only warrants title against defects that occurred during the grantor''s ownership. It does not protect against defects that existed before the grantor acquired the property. Banks and corporations commonly use special warranty deeds for REO sales.', 'hard', 'title', 219, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('At any time in the chain of title', false, 1), ('During the grantor''s period of ownership', true, 2), ('After the deed is recorded', false, 3), ('Within 10 years of the transfer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'transfer-of-title'), 'chapter_quiz', 'The legal concept of "delivery and acceptance" means that for a deed to be effective:', 'Delivery and acceptance requires that the grantor intend to immediately convey title and the grantee accept the transfer. Physical delivery is not required; the intent to transfer is the key element. A deed placed in a safe deposit box with no intent to deliver is not effective.', 'hard', 'title', 220, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('It must be mailed via certified mail to the grantee', false, 1), ('The grantor must intend to transfer title and the grantee must accept the conveyance', true, 2), ('The deed must be physically handed from grantor to grantee at a closing table', false, 3), ('The deed must be recorded within 30 days of signing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'The Virginia Real Estate Board (VREB) operates under which state agency?', 'The Virginia Real Estate Board is one of several regulatory boards within DPOR. DPOR oversees professional licensing and regulation for many professions in Virginia. The VREB has the authority to adopt regulations, issue and revoke licenses, and impose penalties.', 'easy', 'virginia-law', 221, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Department of Housing and Community Development', false, 1), ('Department of Professional and Occupational Regulation (DPOR)', true, 2), ('Virginia Attorney General''s Office', false, 3), ('Virginia Department of Commerce', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'A Virginia real estate salesperson license must be renewed every:', 'Virginia real estate licenses for both salespersons and brokers must be renewed every 2 years. Licensees must complete the required continuing education hours before renewal. Failure to renew on time results in the license lapsing, and additional requirements may apply for reinstatement.', 'easy', 'virginia-law', 222, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 year', false, 1), ('2 years', true, 2), ('3 years', false, 3), ('4 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'In Virginia, an active real estate salesperson MUST be supervised by:', 'Virginia law requires every active salesperson to work under a licensed principal or supervising broker. The broker is responsible for the salesperson''s actions and must ensure compliance with all real estate laws and regulations. A salesperson cannot operate independently.', 'easy', 'virginia-law', 223, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Another experienced salesperson', false, 1), ('A licensed principal or supervising broker', true, 2), ('The Virginia Real Estate Board directly', false, 3), ('Any licensed real estate professional with 5+ years experience', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'Which of the following is grounds for disciplinary action by the Virginia Real Estate Board?', 'Substantial misrepresentation is a clear violation that can lead to disciplinary action including fines, license suspension, or revocation. The VREB can take action for misrepresentation, fraud, negligence, untrustworthiness, improper dealing, and other violations outlined in the Virginia Real Estate License Law.', 'medium', 'virginia-law', 224, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Selling a property at a price below the assessed value', false, 1), ('Making a substantial misrepresentation in a real estate transaction', true, 2), ('Declining to take a listing', false, 3), ('Charging a commission below the standard rate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'The Virginia Transaction Recovery Fund is designed to:', 'The Virginia Transaction Recovery Fund compensates consumers who have obtained a final court judgment against a Virginia licensee for fraud, misrepresentation, or conversion but have been unable to collect. The maximum payment is $20,000 per claimant and $50,000 per transaction. The fund minimum balance is $400,000, new licensees contribute $20, and any payout results in automatic license revocation until the full amount plus interest is repaid.', 'medium', 'virginia-law', 225, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Provide low-interest loans to first-time homebuyers', false, 1), ('Compensate consumers who suffer financial loss due to a licensee''s misconduct', true, 2), ('Fund the Virginia Real Estate Board''s operating expenses', false, 3), ('Cover losses from natural disasters', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'A Virginia licensee changes their home address. They must notify DPOR within:', 'Virginia licensees must notify DPOR of any change to their home or business address within 30 days. Failure to maintain current information with DPOR is a violation of the regulations and may result in missing important notices about renewal or disciplinary matters.', 'medium', 'virginia-law', 226, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('10 days', false, 1), ('30 days', true, 2), ('60 days', false, 3), ('90 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'Virginia''s real estate license law requires that all advertising by a licensee include:', 'Virginia requires that all advertising by a licensee include the firm name as registered with the Board. The agent''s personal name or team name alone is not sufficient. This applies to all forms of advertising, including social media, websites, business cards, and yard signs.', 'medium', 'virginia-law', 227, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The agent''s personal phone number', false, 1), ('The name of the firm as licensed with the Board', true, 2), ('The agent''s license number', false, 3), ('The commission rate offered', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'If a Virginia licensee is convicted of a felony, the Real Estate Board:', 'A felony conviction is grounds for disciplinary action by the VREB, including suspension or revocation of the license and monetary penalties up to $10,000 per violation. The Board may act independently of the criminal proceedings and does not need to wait for a self-report.', 'hard', 'virginia-law', 228, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Must wait for the licensee to self-report before taking action', false, 1), ('Can only issue a warning for the first offense', false, 2), ('May suspend or revoke the license and impose monetary penalties', true, 3), ('Has no jurisdiction over criminal matters', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'A principal broker in Virginia who fails to maintain proper escrow account records faces:', 'Failure to maintain proper escrow account records is a serious violation in Virginia, even if no funds are missing. The VREB requires detailed escrow records including deposits, disbursements, and monthly reconciliations. Violations can result in fines, suspension, or revocation of the broker''s license.', 'hard', 'virginia-law', 229, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A verbal warning for the first offense', false, 1), ('No penalty unless funds are actually missing', false, 2), ('Disciplinary action including fines and possible license revocation', true, 3), ('Only a requirement to complete additional continuing education', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'dpor-rules-regulations'), 'chapter_quiz', 'Under Virginia law, what is the maximum monetary penalty the Real Estate Board can impose per violation?', 'The Virginia Real Estate Board may impose a monetary penalty not to exceed $10,000 for each violation of the Real Estate License Law or Board regulations. Penalties can be combined with other disciplinary actions such as license suspension or revocation.', 'hard', 'virginia-law', 230, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$1,000', false, 1), ('$5,000', false, 2), ('$10,000', true, 3), ('$25,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'In Virginia, the standard residential purchase agreement becomes a binding contract when:', 'In Virginia, a real estate contract is ratified when the last party signs the agreement and that acceptance is communicated to the other party or their agent. Verbal acceptance is not sufficient; Virginia''s Statute of Frauds requires real estate contracts to be in writing.', 'easy', 'contracts', 231, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer signs the offer', false, 1), ('The seller verbally accepts the offer', false, 2), ('Both parties sign and the last party''s acceptance is communicated (ratification)', true, 3), ('The earnest money deposit is delivered', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'Which of the following is NOT an essential element of a valid real estate contract in Virginia?', 'The essential elements of a valid real estate contract are: competent parties, offer and acceptance, consideration, legal purpose, and a written agreement (Statute of Frauds). Notarization is not required for a contract to be valid, though deeds must be notarized for recording.', 'easy', 'contracts', 232, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Offer and acceptance', false, 1), ('Consideration', false, 2), ('Notarization', true, 3), ('Legal purpose', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'The Virginia home inspection contingency typically gives the buyer how many days to complete a home inspection after ratification?', 'Virginia does not have a statutory inspection period. The home inspection contingency period is negotiated between the parties and specified in the contract. Common timeframes range from 7 to 14 days after ratification. If no contingency is included, the buyer waives inspection rights.', 'easy', 'contracts', 233, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('5 days', false, 1), ('7 days', false, 2), ('As negotiated in the contract, commonly 7-14 days', true, 3), ('30 days by statute', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'If a buyer defaults on a Virginia real estate contract, the seller''s typical remedy regarding earnest money is:', 'In Virginia, the earnest money may serve as liquidated damages for buyer default if the contract contains a liquidated damages clause. Without such a clause, the seller may pursue actual damages through legal action. The escrow holder cannot release disputed funds without written agreement of both parties or a court order.', 'medium', 'contracts', 234, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller automatically receives the earnest money', false, 1), ('The earnest money may be retained as liquidated damages if the contract provides for it', true, 2), ('The earnest money is returned to the buyer in all cases', false, 3), ('The broker keeps the earnest money as a commission', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'The financing contingency in a Virginia purchase contract protects the buyer by:', 'A financing contingency allows the buyer to terminate the contract and receive their earnest money back if they are unable to obtain a loan commitment within the specified timeframe and terms outlined in the contract. Without this contingency, the buyer risks losing their deposit if financing falls through.', 'medium', 'contracts', 235, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Guaranteeing the lender will approve the loan', false, 1), ('Allowing the buyer to void the contract if they cannot obtain financing within the specified period', true, 2), ('Requiring the seller to provide seller financing', false, 3), ('Setting the interest rate for the buyer''s loan', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'In Virginia, the "as-is" clause in a purchase contract means:', 'An "as-is" clause means the seller will not make repairs, but it does not eliminate the seller''s duty to disclose known material defects under Virginia law. The buyer can still conduct inspections and may still terminate under applicable contingencies. The as-is clause only addresses the seller''s obligation to repair.', 'medium', 'contracts', 236, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller has no duty to disclose known defects', false, 1), ('The buyer accepts the property in its current condition but the seller must still disclose known defects', true, 2), ('The buyer waives all rights to a home inspection', false, 3), ('The seller is not responsible for any damage before closing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'A counteroffer in Virginia:', 'A counteroffer legally rejects and terminates the original offer and creates a new offer. The original offeror cannot later accept the original offer once a counteroffer has been made. Each counteroffer starts a new negotiation cycle. There is no statutory time limit for making a counteroffer.', 'medium', 'contracts', 237, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Automatically amends the original offer', false, 1), ('Rejects the original offer and creates a new offer', true, 2), ('Keeps the original offer alive while proposing changes', false, 3), ('Must be made within 48 hours of receiving the original offer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'The Virginia Condominium Act requires that a buyer purchasing a resale condominium unit receive a resale certificate. The buyer then has:', 'Under the Virginia Condominium Act, the buyer of a resale condominium unit has 3 days after receiving the resale certificate to review it and void the contract. The resale certificate contains information about assessments, reserves, pending litigation, and other important association details.', 'hard', 'contracts', 238, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 days to review and void the contract', true, 1), ('7 days to review and void the contract', false, 2), ('14 days to review and void the contract', false, 3), ('No right to void the contract based on the resale certificate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'Specific performance as a remedy for breach of a real estate contract allows:', 'Specific performance is an equitable remedy available for real estate contracts because each parcel of real property is considered unique. A court can order the defaulting party (usually the seller) to fulfill the contract and complete the transfer. This remedy is not available for every type of contract.', 'hard', 'contracts', 239, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The injured party to collect triple damages', false, 1), ('The court to order the defaulting party to complete the transaction', true, 2), ('The broker to retain the commission regardless of the outcome', false, 3), ('The contract to be automatically extended for 90 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-contract-forms'), 'chapter_quiz', 'Virginia''s Property Owners'' Association Act (POA Act) requires that a buyer purchasing property in a POA community receive a disclosure packet. If the packet reveals a special assessment, the buyer may:', 'Under Virginia''s POA Act, the buyer has a 3-day right of rescission after receiving the POA disclosure packet. This applies whether the packet reveals a special assessment, pending litigation, or any other information. The 3-day period runs from receipt of the packet, not from contract ratification.', 'hard', 'contracts', 240, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Void the contract within 3 days of receiving the packet', true, 1), ('Only request a credit at closing but cannot void', false, 2), ('Require the seller to pay the assessment before closing', false, 3), ('File a complaint with DPOR to have the assessment waived', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'In Virginia, the settlement agent is required to be:', 'Virginia requires settlement agents to be licensed or registered. This includes attorneys licensed by the Virginia State Bar, title insurance companies, or financial institutions authorized to do business in Virginia. Settlement agents must also register with DPOR.', 'easy', 'virginia-closing', 241, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A licensed real estate broker', false, 1), ('Licensed or registered with the appropriate Virginia regulatory body', true, 2), ('A member of the Virginia State Bar only', false, 3), ('An employee of the buyer''s lender', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'The Virginia grantor''s tax is paid by the:', 'Virginia''s grantor''s tax is a transfer tax paid by the seller (the person granting/conveying the property). The state rate is $2.50 per $1,000 of the sale price. Some Virginia localities charge an additional regional grantor''s tax of $0.50 per $1,000. This is separate from recording fees.', 'easy', 'virginia-closing', 242, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Buyer', false, 1), ('Seller (grantor)', true, 2), ('Settlement agent', false, 3), ('Buyer and seller equally', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'Virginia''s congestion relief fee, applicable in certain Northern Virginia localities, adds an additional transfer tax of:', 'Certain Northern Virginia localities (such as those in the Hampton Roads and Northern Virginia transportation districts) may impose an additional regional transfer tax. The congestion relief fee of $0.15 per $100 of sale price helps fund regional transportation improvements. Agents must know which localities apply.', 'easy', 'virginia-closing', 243, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$0.25 per $100', false, 1), ('$0.15 per $100', true, 2), ('$1.00 per $1,000', false, 3), ('$5.00 per $1,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'Under Virginia law, the deed must be recorded in the:', 'In Virginia, deeds and other real property documents are recorded in the clerk''s office of the circuit court in the city or county where the property is located. Recording provides constructive notice to the world of the transfer and establishes priority of claims against the property.', 'medium', 'virginia-closing', 244, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('County where the buyer resides', false, 1), ('Clerk''s office of the circuit court where the property is located', true, 2), ('Virginia Supreme Court clerk''s office', false, 3), ('DPOR central registry', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'In Virginia, a deed of trust foreclosure (non-judicial) requires the trustee to:', 'Virginia allows non-judicial foreclosure through the power of sale in the deed of trust. The trustee must give proper notice to the borrower and advertise the sale according to Virginia statutory requirements. No court approval is needed. Virginia does not have a statutory right of redemption after the foreclosure sale.', 'medium', 'virginia-closing', 245, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('File a lawsuit in circuit court before selling the property', false, 1), ('Advertise the sale and provide notice to the borrower as required by statute', true, 2), ('Obtain a court order approving the sale price', false, 3), ('Allow the borrower a 12-month redemption period', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'A property in Virginia sells for $450,000. What is the state grantor''s tax?', 'Virginia''s state grantor''s tax is $2.50 per $1,000 of the sale price. $450,000 / $1,000 = 450 units. 450 x $2.50 = $1,125. Some localities charge an additional regional grantor''s tax. This calculation is a common Virginia-specific exam question.', 'medium', 'virginia-closing', 246, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$900', false, 1), ('$1,125', true, 2), ('$2,250', false, 3), ('$4,500', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'The Wet Settlement Act in Virginia applies to:', 'Virginia''s Wet Settlement Act applies to residential real estate transactions involving a federally related mortgage loan. It requires the settlement agent to have collected sufficient funds to cover all disbursements before the settlement agent disburses any funds from the transaction.', 'medium', 'virginia-closing', 247, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only commercial real estate transactions', false, 1), ('Residential transactions involving a federally related mortgage loan', true, 2), ('Only cash transactions', false, 3), ('All real estate transactions including vacant land', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'In Virginia, if a settlement agent discovers a title defect shortly before closing, the appropriate action is to:', 'A settlement agent has a duty to ensure clear title before closing. If a defect is discovered, closing should be delayed until the defect is cured, resolved, or the title insurance company agrees to insure over it. Proceeding without addressing the defect exposes all parties to risk.', 'hard', 'virginia-closing', 248, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Proceed with closing and address the defect later', false, 1), ('Delay closing until the title defect is resolved or insured over', true, 2), ('Have the buyer sign a waiver acknowledging the defect', false, 3), ('Record the deed without disclosing the defect', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'Under Virginia law, the settlement agent must maintain closing records for a minimum of:', 'Virginia law requires settlement agents to retain closing records for a minimum of 5 years from the date of settlement. These records include the closing disclosure, title documents, disbursement records, and all related correspondence. Failure to maintain records can result in regulatory action.', 'hard', 'virginia-closing', 249, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 years', false, 1), ('5 years', true, 2), ('7 years', false, 3), ('10 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-closing-practices'), 'chapter_quiz', 'Virginia does NOT provide a statutory right of redemption after a foreclosure sale. This means:', 'Virginia is one of the states that does not provide a statutory post-sale right of redemption. Once the trustee''s sale is complete and the deed is delivered to the purchaser, the former owner cannot reclaim the property. The borrower''s rights end at the foreclosure sale. Some states provide a redemption period of 6 months to 1 year.', 'hard', 'virginia-closing', 250, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The borrower can reclaim the property by paying all arrears within 6 months', false, 1), ('Once the foreclosure sale is complete, the former owner has no right to reclaim the property', true, 2), ('The lender must offer the property back to the borrower at a discount', false, 3), ('The borrower can file an appeal within 30 days to stop the transfer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'A newly licensed Virginia salesperson must complete post-license education of how many hours within the first license term?', 'Virginia requires newly licensed salespersons to complete 30 hours of post-license education before the first license renewal (within the first 2-year term). This is in addition to the 60 hours of pre-license education. Failure to complete post-license education results in the license not being renewed.', 'easy', 'education', 251, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('16 hours', false, 1), ('30 hours', true, 2), ('45 hours', false, 3), ('60 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'After completing post-license requirements, Virginia salespersons must complete how many hours of continuing education for each subsequent renewal?', 'Virginia requires 16 hours of continuing education for each 2-year renewal cycle after the initial post-license term. This must include required courses on current industry topics, fair housing, ethics, and Virginia-specific subjects as mandated by the Real Estate Board.', 'easy', 'education', 252, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('8 hours', false, 1), ('16 hours', true, 2), ('24 hours', false, 3), ('30 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'A Virginia licensee who fails to renew their license on time will have their license:', 'If a Virginia licensee does not renew on time, the license lapses (expires). The licensee cannot practice real estate while the license is lapsed. Reinstatement may require completing additional education, paying late fees, and submitting a reinstatement application to the Board.', 'easy', 'education', 253, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Automatically renewed with a late fee', false, 1), ('Placed in lapsed (expired) status', true, 2), ('Permanently revoked', false, 3), ('Transferred to inactive status for up to 5 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'Continuing education courses for Virginia licensees must be approved by:', 'All continuing education courses for Virginia real estate licensees must be approved by the Virginia Real Estate Board. The Board sets the curriculum requirements and certifies education providers. Not all real estate courses from other states or organizations automatically qualify for Virginia CE credit.', 'medium', 'education', 254, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The National Association of Realtors', false, 1), ('The Virginia Real Estate Board', true, 2), ('Any accredited college or university', false, 3), ('The Virginia Department of Education', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'A Virginia real estate salesperson who wants to become a broker must have:', 'To qualify for a Virginia broker''s license, the applicant must have at least 36 months (3 years) of active experience as a licensed salesperson within the 5 years immediately preceding the application. They must also complete 180 hours of broker pre-license education and pass the broker examination.', 'medium', 'education', 255, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('At least 12 months of active experience as a salesperson', false, 1), ('At least 36 months of active experience as a salesperson within the past 5 years', true, 2), ('At least 60 months of active experience as a salesperson', false, 3), ('No experience requirement, only additional education', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'Virginia requires broker pre-license education of how many total classroom hours?', 'Virginia requires 180 hours of broker pre-license education from a Board-approved school. This includes courses in brokerage management, real estate law, real estate finance, and other advanced topics. The 180 hours is in addition to the 60 hours of salesperson pre-license education already completed.', 'medium', 'education', 256, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('60 hours', false, 1), ('120 hours', false, 2), ('180 hours', true, 3), ('240 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'A Virginia licensee places their license on inactive status. While inactive, the licensee:', 'An inactive Virginia licensee cannot practice real estate. However, they must still complete the required continuing education and renew the license on time to maintain inactive status. To reactivate, the licensee must meet all current requirements and affiliate with a licensed broker.', 'medium', 'education', 257, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('May still practice real estate on a limited basis', false, 1), ('Cannot practice real estate but does not need to complete CE for renewal', false, 2), ('Cannot practice real estate but must still complete CE and renew the license', true, 3), ('Is exempt from all licensing requirements for 5 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'If a Virginia salesperson''s license has been lapsed for more than 12 months, reinstatement requires:', 'If a Virginia license has been lapsed for more than 12 months, the licensee must complete all required continuing education, pay reinstatement fees, and retake and pass the licensing examination. For licenses lapsed less than 12 months, only CE completion and fees are typically required.', 'hard', 'education', 258, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only payment of the reinstatement fee', false, 1), ('Retaking and passing the licensing exam in addition to CE and fees', true, 2), ('A letter of recommendation from three licensed brokers', false, 3), ('Starting over with the full 60 hours of pre-license education', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'Virginia''s mandatory continuing education for each renewal cycle must include courses on:', 'Virginia''s CE requirements include mandatory topics such as fair housing, ethics, legal and regulatory updates, and agency relationships. The Board specifies which topics and how many hours must be dedicated to each. Licensees have some flexibility in choosing elective CE courses to fill the remaining hours.', 'hard', 'education', 259, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only fair housing and ethics', false, 1), ('Fair housing, ethics, legal updates, and agency topics as specified by the Board', true, 2), ('Any real estate topic the licensee chooses', false, 3), ('Only Virginia-specific law', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'continuing-education-post-license'), 'chapter_quiz', 'A newly licensed Virginia broker must complete post-license education of how many hours during the first license term?', 'Like salespersons, newly licensed Virginia brokers must complete 30 hours of post-license education before their first renewal. The broker post-license curriculum covers brokerage-specific topics such as escrow management, supervision responsibilities, and risk management.', 'hard', 'education', 260, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('16 hours', false, 1), ('30 hours', true, 2), ('45 hours', false, 3), ('No post-license requirement for brokers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'In Virginia, what is the maximum security deposit a landlord can charge a residential tenant under the VRLTA?', 'Under the Virginia Residential Landlord and Tenant Act (VRLTA), the maximum security deposit a landlord may charge is two months'' rent. The deposit must be held in a separate escrow account at a federally insured institution in Virginia.', 'easy', 'property-management', 261, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One month''s rent', false, 1), ('Two months'' rent', true, 2), ('Three months'' rent', false, 3), ('There is no statutory limit', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'A property manager receives a rent payment on Monday afternoon. By when must the funds be deposited into the trust account under Virginia regulations?', 'Virginia regulations require that funds received on behalf of a client be deposited into the trust (escrow) account by the end of the next business day after receipt. Delaying deposit beyond this deadline is a violation subject to disciplinary action by DPOR.', 'easy', 'property-management', 262, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Immediately upon receipt', false, 1), ('By the end of the next business day (Tuesday)', true, 2), ('Within 5 business days', false, 3), ('Within 30 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'A Virginia property manager refuses to rent an apartment to a prospective tenant solely because the tenant plans to pay with a Housing Choice Voucher (Section 8). Which law has the property manager violated?', 'Virginia''s Fair Housing Act includes "source of funds" as a protected class, which means landlords and property managers cannot refuse to rent solely because the applicant will pay with a Housing Choice Voucher or other lawful source of income. Federal Fair Housing law does not include source of funds as a protected class, making this a Virginia-specific protection.', 'medium', 'property-management', 263, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Federal Fair Housing Act only', false, 1), ('Virginia Fair Housing Act (source of funds protection)', true, 2), ('Americans with Disabilities Act', false, 3), ('No law has been violated because landlords can choose payment methods', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'Which of the following is classified as a capital expenditure rather than an operating expense for a rental property?', 'A capital expenditure (CapEx) is a major improvement that extends the useful life of the property or adds significant value, such as a full roof replacement. Operating expenses are routine, recurring costs like pest control, repainting, and minor repairs. Capital expenditures are depreciated over time for tax purposes rather than deducted in the year they occur.', 'easy', 'property-management', 264, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Monthly pest control service', false, 1), ('Repainting a unit between tenants', false, 2), ('Complete roof replacement', true, 3), ('Replacing a broken faucet', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'A Virginia tenant has not paid rent for the month. Before the landlord can file an unlawful detainer action, what notice must be served?', 'Under Virginia law, for nonpayment of rent in a month-to-month tenancy, the landlord must serve a 5-day pay or quit notice. If the tenant does not pay within the 5 days, the landlord may then file an unlawful detainer action in General District Court. The 30-day notice with 21 days to cure applies to lease violations other than nonpayment.', 'medium', 'property-management', 265, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3-day notice to pay or quit', false, 1), ('5-day pay or quit notice', true, 2), ('10-day notice to vacate', false, 3), ('30-day notice to cure or quit', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'Who is the ONLY person legally authorized to physically remove a tenant from a property after an eviction judgment in Virginia?', 'In Virginia, only the sheriff can execute a writ of possession and physically remove a tenant. Self-help eviction -- including changing locks, removing tenant belongings, or shutting off utilities -- is illegal and can result in the landlord owing the tenant damages. The property owner and manager must wait for the court process and sheriff execution.', 'medium', 'property-management', 266, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property manager', false, 1), ('The property owner', false, 2), ('The sheriff', true, 3), ('Any licensed real estate agent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'The Virginia Transaction Recovery Fund provides a maximum payout of what amount per claimant?', 'The Virginia Transaction Recovery Fund, maintained by DPOR, pays a maximum of $20,000 per claimant and $50,000 per transaction. The $50,000 figure is the per-transaction cap, not the per-claimant limit. A payout triggers automatic license revocation for the licensee until the amount is repaid with interest.', 'hard', 'property-management', 267, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$10,000', false, 1), ('$20,000', true, 2), ('$50,000', false, 3), ('$100,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'A property management agreement should include all of the following EXCEPT:', 'A property management agreement includes the scope of authority, compensation terms, trust account provisions, property description, term, and termination provisions. No management agreement should guarantee a minimum profit to the owner because rental income depends on market conditions, vacancy rates, and expenses beyond the manager''s control.', 'medium', 'property-management', 268, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The scope of the manager''s authority', false, 1), ('Compensation structure and management fees', false, 2), ('A guaranteed minimum profit for the owner', true, 3), ('Trust account provisions for tenant funds', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'Under VRLTA, how much advance written notice must a landlord or property manager provide to a tenant before entering the rental unit for a non-emergency inspection?', 'Under VRLTA, the landlord or property manager must provide 24 hours'' written notice before entering a rental unit for inspections, maintenance, or showings. In an emergency threatening life or property, no notice is required.', 'easy', 'property-management', 269, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('12 hours', false, 1), ('24 hours', true, 2), ('48 hours', false, 3), ('72 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'property-management'), 'chapter_quiz', 'A property manager receives a discount from a plumbing company for sending them frequent repair work. The property manager does not disclose this discount to the property owner. This is a violation of which fiduciary duty?', 'Receiving undisclosed kickbacks or discounts from vendors violates the fiduciary duties of disclosure and loyalty. The property manager must inform the owner of all financial arrangements with vendors. Failing to disclose means the manager is potentially profiting at the owner''s expense, which also breaches the duty of loyalty.', 'hard', 'property-management', 270, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Obedience', false, 1), ('Confidentiality', false, 2), ('Disclosure (and loyalty)', true, 3), ('Reasonable care', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Which Virginia state board is responsible for licensing common interest community managers?', 'The Virginia Common Interest Community Board, which operates within DPOR, is the regulatory body responsible for licensing CIC managers, registering common interest communities, and investigating complaints against CIC managers and associations.', 'easy', 'virginia-regulations', 271, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Real Estate Board (VREB)', false, 1), ('Virginia Common Interest Community Board', true, 2), ('Virginia Board of Contractors', false, 3), ('Virginia Housing Development Authority', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'In a condominium, common elements that are reserved for the exclusive use of one or more (but not all) unit owners are called:', 'Limited common elements are portions of the common elements reserved for the exclusive use of specific unit owners. Examples include assigned parking spaces, balconies, and storage units. The unit owner does not own them outright but has exclusive use rights defined in the condominium instruments.', 'easy', 'virginia-regulations', 272, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Private elements', false, 1), ('Exclusive elements', false, 2), ('Limited common elements', true, 3), ('Reserved elements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Under Virginia law, how many calendar days does a buyer have to cancel a contract after receiving the resale disclosure packet for a property governed by the Property Owners Association Act?', 'Under the POAA, the buyer has the right to cancel the contract within 3 calendar days of receiving the resale disclosure packet. This right is non-waivable. If the packet is never delivered, the buyer''s cancellation right does not expire.', 'easy', 'virginia-regulations', 273, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('5 business days', false, 1), ('3 calendar days', true, 2), ('7 calendar days', false, 3), ('10 business days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Which Virginia statute governs planned unit developments (PUDs) and homeowners associations?', 'The Property Owners Association Act (POAA) is the primary Virginia statute governing planned unit developments, homeowners associations, and other planned communities. The Virginia Condominium Act is a separate statute that governs condominiums specifically.', 'medium', 'virginia-regulations', 274, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Condominium Act', false, 1), ('Virginia Residential Landlord and Tenant Act', false, 2), ('Property Owners Association Act (POAA)', true, 3), ('Virginia Real Estate License Law', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'A seller in a Virginia CIC fails to deliver the resale disclosure packet to the buyer before settlement. What is the buyer''s cancellation right?', 'If the resale disclosure packet is never delivered to the buyer, the buyer''s statutory right to cancel does not expire. The buyer can cancel at any time before settlement. This right cannot be waived by contract provision.', 'medium', 'virginia-regulations', 275, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer has no cancellation right once the contract is ratified', false, 1), ('The buyer can cancel within 30 days of settlement', false, 2), ('The buyer can cancel at any time before settlement', true, 3), ('The buyer must petition the court for rescission', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Under the POAA, associations with annual assessments of $10,000 or more must conduct a reserve study at least once every:', 'Under the Property Owners Association Act, associations with annual assessments of $10,000 or more must conduct a reserve study at least once every 5 years. The findings must be included in the resale disclosure packet and used to maintain an adequate reserve fund.', 'medium', 'virginia-regulations', 276, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 years', false, 1), ('5 years', true, 2), ('7 years', false, 3), ('10 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'In a cooperative (co-op), a buyer purchases:', 'In a cooperative, the entire property is owned by a corporation. Buyers purchase shares in the corporation, which entitles them to a proprietary lease granting occupancy of a specific unit. The buyer owns personal property (shares) rather than real property.', 'medium', 'virginia-regulations', 277, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple title to an individual unit', false, 1), ('A life estate in the unit', false, 2), ('Shares in a corporation plus a proprietary lease', true, 3), ('An undivided interest in the entire property as tenants in common', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'In Virginia, the lien for 6 months of unpaid CIC assessments is significant because it:', 'In Virginia, the lien for 6 months of unpaid assessments has a limited priority (sometimes called a "super lien") that may take precedence over even a first deed of trust in certain situations. This gives CIC associations significant enforcement power for collecting delinquent assessments.', 'hard', 'virginia-regulations', 278, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is automatically waived if the unit is sold', false, 1), ('May take priority over a first deed of trust in certain situations', true, 2), ('Cannot be enforced through foreclosure', false, 3), ('Must be approved by the CIC Board before it attaches', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Which of the following is NOT required to be included in a Virginia resale disclosure packet under the POAA?', 'The resale disclosure packet must include governing documents, financial statements, assessment information, reserve study, insurance coverage, pending litigation, and more. However, the original purchase price paid by the current seller is not a required element of the resale disclosure packet.', 'hard', 'virginia-regulations', 279, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The association''s current annual budget', false, 1), ('Pending litigation involving the association', false, 2), ('The original purchase price paid by the seller', true, 3), ('The most recent reserve study', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-communities'), 'chapter_quiz', 'Virginia courts generally apply which legal standard when reviewing decisions made by a CIC board of directors?', 'Virginia courts apply the business judgment rule to CIC board decisions. Under this standard, courts will generally not second-guess board decisions that were made in good faith, within the board''s authority, and on an informed basis. This provides significant deference to board actions that meet these criteria.', 'hard', 'virginia-regulations', 280, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Strict scrutiny', false, 1), ('Preponderance of evidence', false, 2), ('The business judgment rule', true, 3), ('De novo review', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'Which of the following is NOT one of the five rights included in the bundle of rights?', 'The five rights in the bundle of rights are possession, use, enjoyment, disposition, and exclusion. Taxation is a government power, not an ownership right. The power to tax belongs to the state and local government under PETE (Police power, Eminent domain, Taxation, Escheat).', 'easy', 'bundle of rights', 281, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Right of possession', false, 1), ('Right of taxation', true, 2), ('Right of disposition', false, 3), ('Right of exclusion', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'A farmer plants a crop of wheat on his land and then sells the property before harvest. Who owns the wheat crop?', 'Crops planted by human effort are called emblements (fructus industriales). Emblements are considered personal property of the person who planted them, even after the land is sold. The farmer retains the right to re-enter the land to harvest the crop.', 'medium', 'emblements', 282, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The new property owner', false, 1), ('The farmer who planted the crop', true, 2), ('The state of Virginia', false, 3), ('Ownership is split equally between buyer and seller', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'A commercial tenant installs a pizza oven that is bolted to the floor. At the end of the lease, the tenant wants to remove the oven. Which term best describes this item?', 'A trade fixture is an item installed by a commercial tenant for use in the tenant''s business. Unlike ordinary fixtures, trade fixtures may be removed by the tenant before the lease expires, provided the tenant repairs any damage caused by the removal. If not removed before the lease ends, trade fixtures become the landlord''s property.', 'easy', 'trade fixtures', 283, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fixture', false, 1), ('Emblement', false, 2), ('Trade fixture', true, 3), ('Chattel', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'The acronym MARIA is used to determine whether an item is a fixture or personal property. What does the "I" in MARIA stand for?', 'MARIA stands for Method of attachment, Adaptability, Relationship of the parties, Intention, and Agreement. Intention of the party who attached the item is often considered the most important factor by courts when determining whether an item is a fixture or personal property.', 'medium', 'MARIA test', 284, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Insurance', false, 1), ('Intention of the party who attached the item', true, 2), ('Inheritance rights', false, 3), ('Improvements made to the item', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'Which of the following is classified as real property?', 'A built-in dishwasher is a fixture because it is permanently attached to the property through plumbing connections and is adapted to the space. Using the MARIA test, the method of attachment is permanent, it is adapted to the kitchen, and the intention was for it to stay with the property. Curtains, lawnmowers, and above-ground hot tubs are typically personal property.', 'easy', 'fixtures', 285, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A riding lawnmower stored in the garage', false, 1), ('An above-ground hot tub on the patio', false, 2), ('A built-in dishwasher connected to plumbing', true, 3), ('Window curtains hanging on a rod', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'Personal property is BEST described as:', 'Personal property, also called chattels or personalty, includes items that are movable and not permanently attached to land or structures. Personal property is transferred by a bill of sale, while real property is transferred by a deed. Understanding this distinction is critical for resolving disputes about what conveys with a property sale.', 'easy', 'real vs personal property', 286, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Anything permanently attached to the land', false, 1), ('Items that are movable and not permanently affixed to real property', true, 2), ('All property owned by a person', false, 3), ('Property that has been inherited', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'A homeowner has a custom-built bookshelf that is bolted into the wall studs. Under the MARIA test, the bolting into wall studs most directly addresses which factor?', 'Method of attachment is the "M" in MARIA and examines how the item is physically connected to the property. Bolting into wall studs is a permanent method of attachment, which strongly suggests the item is a fixture. The more permanently an item is attached, the more likely it is classified as real property.', 'medium', 'MARIA test', 287, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Agreement between parties', false, 1), ('Relationship of the parties', false, 2), ('Method of attachment', true, 3), ('Adaptability of the item', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'When personal property is attached to real property and becomes part of it, this process is called:', 'Annexation is the process by which personal property becomes a fixture (real property) through attachment. Accretion is the gradual addition of land by natural forces like water deposits. Alienation is the transfer of ownership. Accession refers to acquiring additional property through natural increase or improvement.', 'medium', 'fixtures', 288, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Accession', false, 1), ('Annexation', true, 2), ('Alienation', false, 3), ('Accretion', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'Trees and shrubs growing naturally on a property are classified as:', 'Naturally growing vegetation (fructus naturales) is classified as real property because it grows from the land without human cultivation. Emblements (fructus industriales) specifically refer to crops planted through human effort. Once naturally growing trees or shrubs are severed from the land (cut down), they become personal property.', 'medium', 'real vs personal property', 289, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Personal property because they can be removed', false, 1), ('Emblements because they grow from the land', false, 2), ('Real property as part of the land', true, 3), ('Trade fixtures because they have commercial value', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'bundle-of-rights-property-types'), 'chapter_quiz', 'In the MARIA test, if a tenant installs an item and the lease agreement states "all installations become property of the landlord," which MARIA factor would most likely determine the item is a fixture?', 'The "A" in MARIA stands for Agreement. When a written agreement between the parties explicitly states that an item becomes the property of the landlord, that agreement generally controls the outcome regardless of other factors. Courts give significant weight to written agreements between parties when resolving fixture disputes.', 'hard', 'MARIA test', 290, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Method of attachment', false, 1), ('Adaptability', false, 2), ('Relationship of the parties', false, 3), ('Agreement between the parties', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'Which estate provides the greatest degree of ownership interest in real property?', 'Fee simple absolute is the highest form of ownership recognized by law. It is of potentially infinite duration, freely inheritable, and carries no conditions or limitations on use beyond government restrictions. It includes the complete bundle of rights and is the default estate most buyers receive.', 'easy', 'fee simple absolute', 291, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Life estate', false, 1), ('Fee simple defeasible', false, 2), ('Fee simple absolute', true, 3), ('Estate for years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A grantor conveys property "to Maria, so long as the property is used for educational purposes." What type of estate does Maria have?', 'The language "so long as" creates a fee simple determinable. This estate automatically terminates if the stated condition is violated. The grantor retains a possibility of reverter, meaning ownership automatically returns to the grantor if the land is no longer used for educational purposes. Key trigger words include "so long as," "while," and "during."', 'medium', 'fee simple defeasible', 292, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple absolute', false, 1), ('Fee simple determinable', true, 2), ('Fee simple subject to condition subsequent', false, 3), ('Life estate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A property is conveyed "to John for life, then to Susan." What is Susan''s interest called?', 'Susan holds a remainder interest because she is a third party (not the original grantor) who will receive the property upon the natural termination of John''s life estate. A reversion would exist if the property were to return to the original grantor. A remainder is always held by someone other than the grantor.', 'medium', 'remainders', 293, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Reversion', false, 1), ('Remainder', true, 2), ('Possibility of reverter', false, 3), ('Right of re-entry', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A life tenant has all of the following rights EXCEPT:', 'A life estate ends upon the death of the measuring life, so the life tenant cannot pass the property through a will. The estate has no inheritable interest because it automatically terminates at death. The life tenant can lease, mortgage, or collect rent during their lifetime, but any such interests also terminate upon the life tenant''s death.', 'medium', 'life estates', 294, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The right to lease the property', false, 1), ('The right to mortgage the property', false, 2), ('The right to will the property to heirs', true, 3), ('The right to collect rent from the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A grantor deeds property "to Karen, but if alcohol is ever sold on the premises, grantor may re-enter and reclaim the property." This creates a:', 'The language "but if... grantor may re-enter" creates a fee simple subject to condition subsequent. Unlike a fee simple determinable, which automatically terminates, this estate requires the grantor to take affirmative action (exercise the right of re-entry) to reclaim the property. The estate does not end automatically upon violation of the condition.', 'hard', 'fee simple defeasible', 295, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple determinable', false, 1), ('Fee simple subject to condition subsequent', true, 2), ('Fee simple absolute', false, 3), ('Defeasible life estate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'If a life estate is measured by the life of someone other than the life tenant, it is called:', 'A life estate pur autre vie (French for "for another''s life") is measured by the life of a person other than the life tenant. For example, "to Alice for the life of Bob" gives Alice a life estate that lasts until Bob dies. This type of estate is inheritable during the measuring life''s lifetime, unlike a standard life estate.', 'medium', 'life estates', 296, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A life estate in remainder', false, 1), ('A life estate pur autre vie', true, 2), ('A contingent life estate', false, 3), ('A conventional life estate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'When a life tenant allows the property to deteriorate in a way that damages the interests of the remainderman, the life tenant has committed:', 'Waste occurs when a life tenant damages or fails to maintain the property in a way that reduces its value for the future interest holder (remainderman or reversioner). A life tenant has a duty to maintain the property, pay property taxes, and pay mortgage interest. The remainderman can sue to prevent or recover damages from waste.', 'easy', 'life estates', 297, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Laches', false, 1), ('Waste', true, 2), ('Trespass', false, 3), ('Adverse possession', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A grantor conveys property "to Daniel for life." When Daniel dies, who receives the property?', 'When a life estate is created with no named remainderman, the grantor retains a reversionary interest. Upon the death of the life tenant, ownership reverts back to the grantor or, if the grantor has already died, to the grantor''s heirs. This reversion happens automatically by operation of law.', 'easy', 'reversions', 298, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Daniel''s heirs', false, 1), ('The state through escheat', false, 2), ('The original grantor or the grantor''s heirs', true, 3), ('The local government', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'The future interest retained by a grantor who creates a fee simple determinable is called a:', 'A fee simple determinable gives the grantor a possibility of reverter. If the condition is violated, ownership automatically reverts to the grantor without any action required. By contrast, a fee simple subject to condition subsequent gives the grantor a right of re-entry (also called power of termination), which requires the grantor to take affirmative steps to reclaim the property.', 'hard', 'future interests', 299, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Right of re-entry', false, 1), ('Remainder', false, 2), ('Possibility of reverter', true, 3), ('Executory interest', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'estates-in-land'), 'chapter_quiz', 'A vested remainder differs from a contingent remainder because a vested remainder:', 'A vested remainder is held by an ascertained (identified) person and is not subject to any condition precedent other than the natural termination of the preceding estate. A contingent remainder either is held by an unidentified person or requires an uncertain event to occur before the remainder can take effect. Vested remainders are more certain and generally more valuable.', 'hard', 'remainders', 300, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is held by an identified person with no conditions precedent', true, 1), ('Always reverts to the grantor', false, 2), ('Can only be created by will', false, 3), ('Terminates upon the death of the life tenant', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'A property owner whose land borders a river has water rights known as:', 'Riparian rights belong to landowners whose property borders a flowing body of water such as a river, stream, or creek. Littoral rights apply to property bordering non-flowing bodies of water such as lakes and oceans. Under riparian rights, the owner may make reasonable use of the water as long as it does not harm downstream users.', 'easy', 'water rights', 301, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Littoral rights', false, 1), ('Riparian rights', true, 2), ('Prior appropriation rights', false, 3), ('Prescriptive rights', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'Which government power allows a locality to take private property for public use upon payment of just compensation?', 'Eminent domain is the government''s power to take private property for public use, provided the owner receives just compensation as required by the Fifth Amendment. This power is exercised through a legal process called condemnation. Police power regulates property use (like zoning), while taxation funds government operations.', 'easy', 'PETE government powers', 302, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Police power', false, 1), ('Escheat', false, 2), ('Eminent domain', true, 3), ('Taxation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'PETE is an acronym for the four government powers that limit property rights. What does the "E" at the end of PETE stand for?', 'PETE stands for Police power, Eminent domain, Taxation, and Escheat. Escheat is the government''s right to take ownership of property when the owner dies without a will and without any known heirs. The property escheats to the state to prevent land from becoming ownerless.', 'easy', 'PETE government powers', 303, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Easement', false, 1), ('Encumbrance', false, 2), ('Equity', false, 3), ('Escheat', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'A property owner sells the mineral rights beneath their land to a mining company. The owner has:', 'Property ownership includes surface rights, subsurface (mineral) rights, and air rights. These can be separately owned and transferred. Selling mineral rights severs the subsurface estate from the surface estate, creating two separate ownership interests in the same parcel. The surface owner retains all other rights.', 'medium', 'mineral rights', 304, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Lost the right to sell the surface property', false, 1), ('Severed the subsurface rights from the surface rights', true, 2), ('Created an easement for the mining company', false, 3), ('Violated the bundle of rights', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'A property owner whose land borders the Atlantic Ocean in Virginia Beach has what type of water rights?', 'Littoral rights apply to properties bordering large, non-flowing bodies of water such as oceans, seas, and large lakes. The owner''s property line typically extends to the mean high water mark. Riparian rights apply to flowing water such as rivers and streams. Virginia follows common law water rights doctrines.', 'medium', 'water rights', 305, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Riparian rights', false, 1), ('Littoral rights', true, 2), ('Appropriative rights', false, 3), ('Navigable rights', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'In Virginia, the homestead exemption protects:', 'Virginia''s homestead exemption protects a specified amount of equity in a homeowner''s primary residence from seizure by unsecured creditors in bankruptcy or judgment enforcement. It does not protect against mortgage lenders, tax liens, or mechanic''s liens. The exemption amount is set by Virginia statute and applies to the householder''s residence.', 'medium', 'homestead exemption', 306, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A property owner from all creditor claims', false, 1), ('A certain amount of equity in the home from unsecured creditors', true, 2), ('The property from government condemnation', false, 3), ('The property from property tax liens', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'A property owner''s air rights are limited by:', 'Air rights extend upward from the surface but are limited by both federal regulations (FAA navigable airspace) and local zoning restrictions (building height limits). The historic common law doctrine of "from the center of the earth to the heavens" has been modified so that property owners do not own the navigable airspace used by aircraft.', 'medium', 'air rights', 307, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Navigable airspace regulations and local zoning height restrictions', true, 1), ('Only local zoning ordinances', false, 2), ('Only federal aviation regulations', false, 3), ('The property owner''s deed restrictions only', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'Which of the following is an example of police power?', 'Police power is the government''s authority to enact laws and regulations to protect public health, safety, morals, and general welfare. Zoning ordinances, building codes, and environmental regulations are all exercises of police power. Unlike eminent domain, police power does not require compensation to the property owner.', 'easy', 'PETE government powers', 308, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A county collects property taxes', false, 1), ('The state takes land to build a highway', false, 2), ('A city enacts a zoning ordinance restricting land use', true, 3), ('Property of a deceased person with no heirs goes to the state', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'When the gradual deposit of soil by water action increases the size of a riparian owner''s land, this is called:', 'Accretion is the gradual and imperceptible addition of soil to a property by natural water deposits (alluvion). The new land belongs to the riparian owner. Avulsion is a sudden and violent change in a watercourse. Erosion is the gradual wearing away of land. Reliction occurs when water permanently recedes, exposing new land.', 'hard', 'water rights', 309, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Avulsion', false, 1), ('Erosion', false, 2), ('Accretion', true, 3), ('Reliction', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'rights-interests-in-land'), 'chapter_quiz', 'A developer purchases a 20-story air rights lease above a railroad station. The developer is exercising the right to:', 'Air rights can be leased or sold separately from surface rights, allowing development above existing structures. This is common in dense urban areas where development above railroads, highways, and existing buildings maximizes land use. The air rights holder must still comply with FAA regulations and local zoning height limits.', 'hard', 'air rights', 310, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Build in the navigable airspace without restriction', false, 1), ('Use the vertical space above an existing structure under a separate ownership interest', true, 2), ('Prevent airplanes from flying over the railroad', false, 3), ('Take the railroad property through eminent domain', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'Under the Virginia Condominium Act, a condominium is created by recording a:', 'Under the Virginia Condominium Act, a condominium is legally created when the developer records a declaration (also called a master deed or declaration of condominium) in the land records of the jurisdiction where the property is located. The declaration defines the units, common elements, and the rights and obligations of unit owners.', 'medium', 'Virginia Condominium Act', 311, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Deed of trust', false, 1), ('Declaration', true, 2), ('Plat map', false, 3), ('Certificate of occupancy', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'In a condominium, the hallways, elevators, and swimming pool are classified as:', 'Common elements are portions of the condominium that are owned collectively by all unit owners and available for use by all residents. Hallways, lobbies, elevators, and recreational facilities like pools are common elements. Limited common elements, by contrast, are reserved for use by specific unit owners, such as an assigned parking space or a balcony accessible only from one unit.', 'easy', 'Virginia Condominium Act', 312, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Limited common elements', false, 1), ('Common elements', true, 2), ('Individual units', false, 3), ('Reserved areas', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'The Virginia Property Owners'' Association Act (POAA) requires which of the following when a property within a POA is being sold?', 'Under the Virginia POAA, the seller must request and the association must provide a resale disclosure packet (also called a resale certificate) to the buyer. This packet contains information about assessments, fees, budgets, reserves, rules, and any pending special assessments. The buyer has the right to cancel the contract within a specified period after receiving the packet.', 'medium', 'Virginia POAA', 313, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller must obtain a home inspection', false, 1), ('The association must provide a resale disclosure packet', true, 2), ('The buyer must be approved by the board of directors', false, 3), ('The association must appraise the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'A key difference between a condominium and a cooperative is that in a cooperative:', 'In a cooperative, a corporation owns the entire building. Individual residents do not hold title to their units. Instead, they purchase shares of stock in the corporation and receive a proprietary lease granting the right to occupy a specific unit. In a condominium, each owner holds fee simple title to their individual unit plus an undivided interest in common elements.', 'medium', 'cooperative ownership', 314, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Each owner holds fee simple title to their unit', false, 1), ('Owners hold shares of stock in a corporation plus a proprietary lease', true, 2), ('There are no common areas', false, 3), ('Owners cannot be assessed monthly fees', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'Under Virginia law, a time-share is best described as:', 'Virginia''s Real Estate Time-Share Act defines a time-share as an interest granting the right to use or occupy a property for a specific recurring period (such as one week per year). Time-shares can be structured as deeded interests (actual ownership) or right-to-use interests (contractual right without ownership). Virginia provides a rescission period for time-share purchasers.', 'easy', 'time-shares', 315, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple ownership of a vacation property', false, 1), ('A right to use or occupy a property for a recurring period of time', true, 2), ('A leasehold estate lasting exactly one year', false, 3), ('A cooperative ownership interest in a resort', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'Under the Virginia Condominium Act, a buyer of a new condominium unit has the right to cancel the purchase contract within:', 'The Virginia Condominium Act provides buyers of new condominium units a 10-calendar-day right of rescission (cancellation period) after receiving the public offering statement from the developer. This cooling-off period allows buyers to review the condominium documents and reconsider their purchase. The deposit must be returned if the buyer cancels within this period.', 'hard', 'Virginia Condominium Act', 316, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 calendar days', false, 1), ('5 calendar days', false, 2), ('10 calendar days', true, 3), ('30 calendar days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'A parking space assigned exclusively to Unit 203 in a condominium building is an example of a:', 'A limited common element is a portion of the common elements designated for the exclusive use of one or more but fewer than all unit owners. Assigned parking spaces, storage lockers, and balconies accessible from a single unit are typical examples. The limited common element is still owned collectively but reserved for specific owners'' use.', 'medium', 'Virginia Condominium Act', 317, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Common element', false, 1), ('Limited common element', true, 2), ('Private element', false, 3), ('Restricted element', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'In a cooperative, if one owner defaults on their share of the building''s mortgage, the consequence is:', 'Because the cooperative corporation holds a single mortgage on the entire building, a default by one shareholder can put the entire property at risk. Other shareholders may need to cover the defaulting owner''s share to prevent foreclosure on the building. This shared financial risk is a significant disadvantage of cooperative ownership compared to condominiums, where each unit has its own separate mortgage.', 'hard', 'cooperative ownership', 318, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only the defaulting owner is affected', false, 1), ('The entire building may be at risk of foreclosure, affecting all owners', true, 2), ('The cooperative corporation automatically dissolves', false, 3), ('The government steps in to cover the defaulted payments', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'Under the Virginia POAA, after receiving the resale disclosure packet, the buyer has the right to cancel the contract within:', 'Under the Virginia POAA, the buyer has a 3-day right of rescission after ratification of the contract or receipt of the disclosure packet, whichever is later. If the disclosure packet is not delivered, the buyer''s right to cancel extends until the packet is received and the 3-day period runs. This protects buyers from unknown association obligations.', 'hard', 'Virginia POAA', 319, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3 days after ratification of the contract', true, 1), ('10 days after ratification of the contract', false, 2), ('30 days after ratification of the contract', false, 3), ('5 business days after receiving the packet', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'common-interest-ownership'), 'chapter_quiz', 'Which document governs the day-to-day operations and rules of a condominium association?', 'The bylaws govern the internal operations of the condominium unit owners'' association, including board elections, meeting procedures, voting rights, and assessment collection. The declaration creates the condominium and defines units and common elements, while the bylaws address governance and management. Both are essential documents, but the bylaws handle day-to-day operational matters.', 'easy', 'Virginia Condominium Act', 320, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The declaration', false, 1), ('The bylaws', true, 2), ('The plat map', false, 3), ('The deed of trust', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'A mortgage is an example of which type of lien?', 'A mortgage is voluntary because the borrower willingly pledges the property as security for the loan. It is specific because it attaches only to the particular property described in the mortgage document. By contrast, a judgment lien is involuntary and general because it is imposed without the debtor''s consent and attaches to all of the debtor''s real property in the jurisdiction.', 'easy', 'voluntary vs involuntary liens', 321, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Involuntary and general', false, 1), ('Voluntary and specific', true, 2), ('Involuntary and specific', false, 3), ('Voluntary and general', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'In Virginia, which lien ALWAYS takes priority over all other liens regardless of recording date?', 'Real property tax liens have superior priority over all other liens in Virginia, regardless of when other liens were recorded. This means that if a property is sold at a tax sale, all other lien holders (including mortgage lenders) may lose their security interest. Tax liens are paramount because they fund essential government services.', 'easy', 'lien priority', 322, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('First mortgage lien', false, 1), ('Mechanic''s lien', false, 2), ('Real property tax lien', true, 3), ('Judgment lien', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'Under Virginia Code sections 43-1 through 43-23, a mechanic''s lien must be filed within what period after the last day of work or delivery of materials?', 'Under Virginia''s mechanic''s lien statutes (Virginia Code sections 43-1 through 43-23), a general contractor or subcontractor must file a memorandum of mechanic''s lien in the clerk''s office within 90 days after the last day of work performed or materials furnished. Failure to file within this period results in the loss of lien rights.', 'medium', 'Virginia mechanic''s liens', 323, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('30 days', false, 1), ('60 days', false, 2), ('90 days', true, 3), ('120 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'A lien that attaches to all property owned by the debtor in a particular jurisdiction is called a:', 'A general lien attaches to all real and personal property owned by the debtor within a jurisdiction. Judgment liens and federal tax liens are common examples of general liens. A specific lien, by contrast, attaches only to one particular property. Mortgages and property tax liens are specific liens because they affect only the identified property.', 'easy', 'specific vs general', 324, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Specific lien', false, 1), ('Voluntary lien', false, 2), ('General lien', true, 3), ('Equitable lien', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'A property has three liens recorded in this order: (1) a mortgage recorded January 2023, (2) a mechanic''s lien filed March 2023, and (3) a second mortgage recorded June 2023. Delinquent property taxes are also owed. In what order are these liens paid at foreclosure?', 'Property tax liens always have first priority. After taxes, the remaining liens are generally paid in chronological order of recording: the first mortgage (January 2023), then the mechanic''s lien (March 2023), then the second mortgage (June 2023). Note that Virginia mechanic''s liens may have special priority rules that relate back to the commencement of work, but in a straightforward recording-date analysis, this order applies.', 'hard', 'lien priority', 325, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('First mortgage, mechanic''s lien, second mortgage, property taxes', false, 1), ('Property taxes, first mortgage, mechanic''s lien, second mortgage', true, 2), ('Mechanic''s lien, property taxes, first mortgage, second mortgage', false, 3), ('Property taxes, mechanic''s lien, first mortgage, second mortgage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'A judgment lien in Virginia is BEST described as:', 'A judgment lien is involuntary because it is placed on the debtor''s property by court order, not by the debtor''s choice. It is general because it attaches to all real property owned by the debtor in any Virginia jurisdiction where the judgment is docketed. To create a lien, the creditor must docket the judgment in the clerk''s office of the circuit court.', 'medium', 'judgment liens', 326, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Voluntary and specific', false, 1), ('Involuntary and specific', false, 2), ('Voluntary and general', false, 3), ('Involuntary and general', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'Under Virginia law, after a mechanic''s lien is filed, the claimant must initiate a lawsuit to enforce the lien within:', 'Under Virginia Code, a mechanic''s lien claimant must file suit to enforce the lien within 6 months from the date the memorandum of lien was recorded. If the claimant fails to initiate a lawsuit within this period, the lien expires and is no longer enforceable. This strict deadline protects property owners from indefinite encumbrances.', 'hard', 'Virginia mechanic''s liens', 327, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('30 days of filing', false, 1), ('6 months from the date of filing', true, 2), ('1 year from the date of filing', false, 3), ('2 years from the date of filing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'Which of the following is an example of an involuntary, specific lien?', 'A property tax lien is involuntary because it is imposed by the government without the owner''s consent, and it is specific because it attaches only to the particular property on which taxes are owed. A mortgage is voluntary and specific. Federal income tax liens and judgment liens are involuntary and general (they attach to all property owned by the debtor).', 'medium', 'voluntary vs involuntary liens', 328, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Mortgage', false, 1), ('Federal income tax lien', false, 2), ('Property tax lien', true, 3), ('Judgment lien', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'An HOA assessment lien in Virginia is:', 'In Virginia, an HOA or condominium assessment lien is involuntary and specific. Under the Virginia Condominium Act and POAA, the association''s lien for unpaid assessments may have a limited super-priority over first mortgages for a specified number of months of assessments. However, it never exceeds the priority of property tax liens.', 'hard', 'tax liens', 329, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Always subordinate to all mortgages regardless of recording date', false, 1), ('Superior to all other liens including property taxes', false, 2), ('An involuntary, specific lien that may have priority for a limited amount of unpaid assessments', true, 3), ('A voluntary lien because the owner chose to buy in the community', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'liens'), 'chapter_quiz', 'Which of the following correctly describes the general rule of lien priority?', 'The general rule of lien priority is "first in time, first in right," meaning the lien recorded earliest has the highest priority. The major exception is property tax liens, which always have superior priority regardless of when they were recorded. This rule determines the order in which creditors are paid from the proceeds of a foreclosure sale.', 'medium', 'lien priority', 330, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The largest lien is paid first', false, 1), ('Voluntary liens always take priority over involuntary liens', false, 2), ('First in time, first in right, with property tax liens taking superior priority', true, 3), ('The most recent lien is paid first', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'An easement appurtenant differs from an easement in gross because an easement appurtenant:', 'An easement appurtenant benefits a particular parcel of land (the dominant tenement) and burdens an adjacent parcel (the servient tenement). It runs with the land, meaning it transfers automatically with ownership. An easement in gross benefits a person or entity (like a utility company) rather than a parcel of land and does not require a dominant tenement.', 'medium', 'easements appurtenant vs in gross', 331, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Benefits a specific parcel of land and runs with the land', true, 1), ('Benefits a person or company regardless of land ownership', false, 2), ('Can only be created by a court order', false, 3), ('Terminates upon the death of the property owner', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'A property owner''s fence extends two feet onto the neighbor''s lot. This is an example of:', 'An encroachment occurs when a structure, improvement, or other physical object illegally extends beyond the boundaries of the property it is built on and onto a neighbor''s land. Common examples include fences, driveways, and roof overhangs. An encroachment is typically discovered through a survey and may be resolved through negotiation, an easement agreement, or legal action.', 'easy', 'encroachments', 332, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An easement by prescription', false, 1), ('An encroachment', true, 2), ('A license', false, 3), ('A restrictive covenant', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'A landlocked property with no road access may acquire an easement through which legal doctrine?', 'An easement by necessity is created when a parcel of land is landlocked and has no other access to a public road. Courts will grant an easement across the surrounding property to prevent the landlocked parcel from being unusable. This type of easement typically arises when a larger parcel is subdivided and one resulting parcel has no road frontage.', 'easy', 'easements by necessity', 333, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Easement by prescription', false, 1), ('Easement by necessity', true, 2), ('Easement by license', false, 3), ('Easement by estoppel', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'Which of the following is a key requirement for establishing an easement by prescription in Virginia?', 'An easement by prescription is acquired through continuous, open, notorious, hostile, and adverse use of another''s property for Virginia''s statutory period. The use must be without the owner''s permission (hostile/adverse) and visible enough that a reasonable owner would be aware of it. It is similar to adverse possession but grants use rights rather than ownership.', 'medium', 'easements by prescription', 334, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Written permission from the property owner', false, 1), ('Continuous, open, notorious, hostile, and adverse use for the statutory period', true, 2), ('Payment of fair market value to the servient owner', false, 3), ('Recording the easement in the land records', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'A homeowner gives a neighbor verbal permission to park in their driveway during a home renovation. This permission is best described as:', 'A license is a personal, revocable, non-assignable privilege to use another person''s land for a specific purpose. Unlike an easement, a license does not create an interest in the land and can be revoked at any time by the property owner. Verbal permission to use a driveway is a classic example of a license.', 'easy', 'licenses', 335, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An easement appurtenant', false, 1), ('A profit', false, 2), ('A license', true, 3), ('An encroachment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'The right to enter another person''s land and remove natural resources such as timber, minerals, or soil is called:', 'A profit (or profit a prendre) grants the holder the right to enter another person''s land and remove part of the soil, natural resources, or products of the land, such as timber, minerals, oil, or gravel. A profit includes an implied easement to enter the land for the purpose of removing the resources. It is a more extensive right than a simple easement.', 'medium', 'profits', 336, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A license', false, 1), ('An easement in gross', false, 2), ('A profit (profit a prendre)', true, 3), ('An encroachment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'A developer records deed restrictions requiring all homes in a subdivision to have a minimum of 2,000 square feet. These restrictions are known as:', 'Restrictive covenants, also known as covenants, conditions, and restrictions (CC&Rs), are private limitations placed on the use of property by a developer or grantor. They run with the land and bind future owners. Unlike zoning, which is a government regulation, restrictive covenants are private agreements. When zoning and covenants conflict, the more restrictive rule applies.', 'easy', 'restrictive covenants', 337, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Zoning ordinances', false, 1), ('Restrictive covenants (CC&Rs)', true, 2), ('Variances', false, 3), ('Building code requirements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'An easement by implication is most likely to be created when:', 'An easement by implication arises when a single property is divided and one part was previously used in a way that was apparent, continuous, and reasonably necessary to the enjoyment of the other part. For example, if a shared driveway existed before the land was subdivided, an implied easement may be recognized for the parcel that loses direct road access.', 'hard', 'easements by implication', 338, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A property owner grants written permission to a neighbor', false, 1), ('A property is divided and the prior use of one parcel was apparent, continuous, and reasonably necessary', true, 2), ('A court orders access to a landlocked property', false, 3), ('A utility company needs to run power lines across private property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'In an easement appurtenant, the property that is burdened by the easement is called the:', 'In an easement appurtenant, the servient tenement is the property that is burdened by the easement. The dominant tenement is the property that benefits from the easement. For example, if Property A has a right of way across Property B, then Property A is the dominant tenement (benefited) and Property B is the servient tenement (burdened).', 'medium', 'easements appurtenant vs in gross', 339, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Dominant tenement', false, 1), ('Servient tenement', true, 2), ('Adjacent tenement', false, 3), ('Prescriptive tenement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'encumbrances'), 'chapter_quiz', 'A restrictive covenant that discriminates based on race, color, religion, or national origin is:', 'The Fair Housing Act of 1968 and the Supreme Court''s decision in Shelley v. Kraemer (1948) made racially discriminatory restrictive covenants void and unenforceable. Even if such covenants still appear in old deeds, they have no legal effect and cannot be enforced by any court. Real estate professionals must be aware that these historic covenants are legally meaningless.', 'medium', 'restrictive covenants', 340, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Enforceable if recorded before 1968', false, 1), ('Enforceable only in certain states', false, 2), ('Void and unenforceable under federal fair housing law', true, 3), ('Valid but may be waived by the homeowners association', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'Virginia follows which type of recording statute?', 'Virginia is a race-notice state. To be protected under this statute, a subsequent purchaser must (1) be a bona fide purchaser for value, (2) have no actual or constructive notice of a prior unrecorded conveyance, and (3) record their deed before the prior unrecorded conveyance is recorded. Both elements (no notice and first to record) must be met.', 'medium', 'Virginia race-notice', 341, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Race statute', false, 1), ('Notice statute', false, 2), ('Race-notice statute', true, 3), ('First-in-time statute', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'Constructive notice is BEST defined as:', 'Constructive notice means that a person is legally presumed to know something because the information is available in the public records (such as recorded deeds, liens, and easements in the circuit court clerk''s office). Even if a buyer never actually searches the records, they are still charged with knowledge of anything that is properly recorded.', 'easy', 'constructive vs actual notice', 342, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Notice given by physically inspecting the property', false, 1), ('Knowledge imputed by law because information is available in public records', true, 2), ('A verbal warning from a neighbor about a property defect', false, 3), ('Notice published in a local newspaper', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'A chain of title is BEST described as:', 'The chain of title is the sequential history of recorded documents (deeds, mortgages, liens, easements) that trace ownership of a property from the original source (often a government patent) to the current owner. A break in the chain of title can create a cloud on the title and may need to be resolved through a quiet title action or other legal remedy.', 'easy', 'chain of title', 343, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The physical chain used to mark property boundaries', false, 1), ('The recorded history of all documents affecting ownership of a property', true, 2), ('A title insurance policy that covers all defects', false, 3), ('The process of transferring a deed from seller to buyer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'In a race-notice state like Virginia, Buyer A purchases property on March 1 but does not record. Buyer B purchases the same property on March 15 without knowledge of Buyer A''s purchase and records immediately. Who prevails?', 'In Virginia''s race-notice system, Buyer B prevails because they had no actual or constructive notice of Buyer A''s unrecorded deed and they recorded first. Under a race-notice statute, a subsequent bona fide purchaser who records first and has no notice of a prior unrecorded instrument will have superior title. This is why prompt recording is essential.', 'hard', 'Virginia race-notice', 344, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Buyer A, because they purchased first', false, 1), ('Buyer B, because they recorded first and had no notice of Buyer A''s deed', true, 2), ('Neither buyer, and the property reverts to the seller', false, 3), ('Buyer A, because Buyer B should have known about the prior sale', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'Actual notice is BEST described as:', 'Actual notice means a person has direct, personal knowledge of a fact. For example, if a buyer visits a property and sees a tenant occupying it, the buyer has actual notice that someone else has a possessory interest. Actual notice can come from personal observation, conversation, or any firsthand information, regardless of what the public records show.', 'easy', 'constructive vs actual notice', 345, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Notice that comes from recording a deed in public records', false, 1), ('Direct, personal knowledge of a fact, such as seeing a tenant living on the property', true, 2), ('Notice provided by a title insurance company', false, 3), ('Notice that is required before a foreclosure sale', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'The primary purpose of recording a deed is to:', 'Recording a deed does not transfer ownership (delivery and acceptance do that). Recording gives constructive notice to the world that the ownership change has occurred, which protects the buyer against subsequent claims by others. An unrecorded deed is still valid between the original parties, but it may not protect the buyer against a bona fide purchaser who records first.', 'medium', 'recording statutes', 346, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Transfer ownership from seller to buyer', false, 1), ('Provide constructive notice to the world of the ownership change', true, 2), ('Satisfy the requirements of the statute of frauds', false, 3), ('Create a valid deed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'A marketable title is one that:', 'Marketable title (also called merchantable title) is title that is free from reasonable doubt and from defects that could expose the buyer to litigation. It does not need to be perfect, but it must be acceptable to a reasonably prudent buyer. Most real estate contracts require the seller to deliver marketable title at closing.', 'medium', 'marketable vs insurable title', 347, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Has been insured by a title insurance company', false, 1), ('Is free from reasonable doubt and defects that a prudent buyer would object to', true, 2), ('Has never been transferred by deed', false, 3), ('Is guaranteed by the state government', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'Which of the following would constitute a "cloud on the title"?', 'A cloud on the title is any document, claim, or encumbrance in the public records that appears to affect ownership but may not be valid. An unreleased lien from a debt that has been paid off is a classic example because it shows up in the records as an active encumbrance even though the underlying obligation is satisfied. It must be removed through a lien release or quiet title action.', 'medium', 'chain of title', 348, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A properly released mortgage', false, 1), ('An unreleased lien from a paid-off debt', true, 2), ('A recorded warranty deed', false, 3), ('A current property tax payment receipt', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'Insurable title differs from marketable title in that insurable title:', 'Insurable title may contain minor defects that a title insurance company is willing to insure against (take the risk on). Marketable title, by contrast, must be free from reasonable defects. A title can be insurable without being marketable. Some purchase contracts specify "marketable and insurable title" to give the buyer maximum protection.', 'hard', 'marketable vs insurable title', 349, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is always superior to marketable title', false, 1), ('May have known defects that a title company is willing to insure over', true, 2), ('Cannot be obtained in Virginia', false, 3), ('Requires a court order to establish', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-recording'), 'chapter_quiz', 'In Virginia, where are deeds and other real estate documents recorded?', 'In Virginia, all real estate documents (deeds, deeds of trust, liens, easements, and other instruments) are recorded in the clerk''s office of the circuit court in the city or county where the property is located. This local recording system allows title searchers to find all documents affecting a specific property in one location.', 'easy', 'recording statutes', 350, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The Virginia Department of Taxation', false, 1), ('The circuit court clerk''s office in the jurisdiction where the property is located', true, 2), ('The Virginia Real Estate Board', false, 3), ('The state capitol in Richmond', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'An owner''s title insurance policy protects:', 'An owner''s title insurance policy protects the property buyer/owner against financial loss from defects in the title that existed at or before the date of the policy but were not discovered during the title search. Coverage continues for as long as the owner (or their heirs) has an interest in the property. A lender''s policy is a separate policy that protects only the mortgage lender.', 'easy', 'owner''s vs lender''s title policies', 351, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The mortgage lender against loss due to title defects', false, 1), ('The property owner against loss due to title defects that existed before the policy date', true, 2), ('The real estate agent against liability for title errors', false, 3), ('The title company against claims by the property owner', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'A lender''s title insurance policy (loan policy) differs from an owner''s policy in that the lender''s policy:', 'A lender''s title policy covers the mortgage lender''s interest in the property, which equals the outstanding loan balance. As the borrower pays down the loan, the coverage amount decreases. When the loan is fully paid off, the lender''s policy terminates. An owner''s policy, by contrast, covers the purchase price and remains in effect as long as the owner has an interest.', 'medium', 'owner''s vs lender''s title policies', 352, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Provides coverage that increases over time', false, 1), ('Covers the outstanding loan balance and decreases as the loan is paid down', true, 2), ('Is optional and rarely required', false, 3), ('Protects the buyer, not the lender', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'Which of the following is a common title defect?', 'A forged deed is a serious title defect because it means one of the transfers in the chain of title was not valid. Since a forged deed is void (not merely voidable), it conveys no title regardless of whether subsequent purchasers were innocent. Title insurance is designed to protect against losses from hidden defects like forgery, undisclosed heirs, and recording errors.', 'easy', 'title defects', 353, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A properly recorded satisfaction of mortgage', false, 1), ('A forged deed in the chain of title', true, 2), ('A current survey showing no encroachments', false, 3), ('A warranty deed with proper signatures', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'A quiet title action is used to:', 'A quiet title action is a lawsuit filed in court to establish clear ownership of real property and remove any clouds, claims, or defects from the title. It "quiets" competing claims by having a judge determine who holds valid title. This legal remedy is commonly used when there are conflicting claims, breaks in the chain of title, or unreleased liens.', 'medium', 'quiet title actions', 354, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Force a neighbor to stop making noise', false, 1), ('Resolve disputes or remove clouds on the title through a court proceeding', true, 2), ('Transfer property to a new owner without a deed', false, 3), ('Establish zoning restrictions on a property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'Title insurance premiums are typically:', 'Title insurance requires a single, one-time premium payment made at closing. Unlike other types of insurance that require recurring premiums, title insurance provides continuous coverage from the date of the policy forward for that one payment. Who pays the premium (buyer or seller) is a matter of negotiation and local custom, not law.', 'easy', 'owner''s vs lender''s title policies', 355, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Paid monthly for the life of the policy', false, 1), ('Paid as a one-time premium at closing', true, 2), ('Paid annually on the policy anniversary', false, 3), ('Split equally between buyer and seller by law', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'Which of the following title defects would make a deed VOID rather than voidable?', 'A forged deed is void, meaning it has no legal effect whatsoever and cannot transfer title, even to an innocent purchaser. Voidable deeds (signed by minors, under duress, or by intoxicated persons) are valid until the aggrieved party takes legal action to void them. The distinction is critical: void deeds can never be "cured," while voidable deeds can become valid if not challenged.', 'hard', 'title defects', 356, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A deed signed by a minor', false, 1), ('A deed signed under duress', false, 2), ('A forged deed', true, 3), ('A deed signed by someone who was intoxicated', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'Standard title insurance policies typically exclude coverage for:', 'Standard title insurance policies contain standard exceptions for matters that could be discovered by a physical survey or inspection, such as boundary disputes, encroachments, and unrecorded easements visible on the ground. Extended coverage (ALTA) policies can eliminate many of these standard exceptions if a current survey is provided.', 'hard', 'title defects', 357, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Forged deeds in the chain of title', false, 1), ('Defects discoverable by a physical survey or inspection of the property', true, 2), ('Recording errors at the courthouse', false, 3), ('Unknown liens that predate the policy', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'A title commitment (also called a title binder) is:', 'A title commitment (binder) is issued before closing and shows the current condition of the title, including any defects, liens, or encumbrances found during the title search. It also lists the requirements that must be satisfied before the title company will issue the final policy. It is a promise to insure, not the actual insurance policy.', 'medium', 'curing defects', 358, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The final title insurance policy issued at closing', false, 1), ('A preliminary report showing the condition of title and requirements to be met before the policy is issued', true, 2), ('A guarantee that no title defects exist', false, 3), ('A court order clearing the title of all claims', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'Which method of curing a title defect involves obtaining a document from the lienholder confirming the debt has been paid?', 'A lien release (also called a satisfaction or certificate of satisfaction) is a document signed by the lienholder confirming that the underlying debt has been paid in full and the lien is released. It must be recorded in the land records to clear the title. This is the simplest and most common method of curing a title defect caused by an outstanding lien.', 'medium', 'curing defects', 359, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Quiet title action', false, 1), ('Quitclaim deed', false, 2), ('Lien release (satisfaction)', true, 3), ('Lis pendens', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'title-insurance-defects'), 'chapter_quiz', 'A quitclaim deed is often used to cure title defects because it:', 'A quitclaim deed transfers whatever interest the grantor may have in the property without making any warranties about the quality of that interest. It is commonly used to cure title defects because a person who may have a potential claim can execute a quitclaim deed to release that claim, clearing the cloud on the title without admitting they actually held an interest.', 'medium', 'curing defects', 360, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Provides the strongest warranties of any deed type', false, 1), ('Transfers whatever interest the grantor has without making any warranties', true, 2), ('Is guaranteed by the title insurance company', false, 3), ('Automatically removes all liens from the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A homeowner grants the electric company a permanent right to run power lines across the back of the property. This is an example of:', 'A utility easement is a commercial easement in gross because it benefits a company (the electric utility) rather than a neighboring parcel of land. There is no dominant tenement. Commercial easements in gross are assignable and run with the land, ensuring the utility maintains access regardless of property ownership changes.', 'medium', 'easements appurtenant vs in gross', 361, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('An easement appurtenant', false, 1), ('An easement in gross', true, 2), ('A license', false, 3), ('A restrictive covenant', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Which right from the bundle of rights allows a property owner to sell, gift, or bequeath their property?', 'The right of disposition allows the owner to transfer property by sale, gift, will, or any other legal means. This right ensures the free alienability of property and is a cornerstone of American real estate law. Restrictions that completely prevent the transfer of property are generally void as unreasonable restraints on alienation.', 'easy', 'bundle of rights', 362, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Right of use', false, 1), ('Right of exclusion', false, 2), ('Right of disposition', true, 3), ('Right of enjoyment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A grantor conveys property "to the City of Richmond, on the condition that the land is used as a public park. If the land ceases to be used as a public park, the grantor reserves the right to re-enter and retake the property." The city''s estate is a:', 'The language "on the condition that... the grantor reserves the right to re-enter" creates a fee simple subject to condition subsequent. The grantor retains a right of re-entry (power of termination), meaning the estate does not automatically end upon violation. The grantor must take affirmative action to reclaim the property.', 'hard', 'fee simple defeasible', 363, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fee simple absolute', false, 1), ('Fee simple determinable', false, 2), ('Fee simple subject to condition subsequent', true, 3), ('Life estate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'In Virginia, a subcontractor who has not been paid can protect their interest by filing a:', 'Under Virginia Code sections 43-1 through 43-23, subcontractors, laborers, and material suppliers who are not paid for work performed or materials furnished can file a mechanic''s lien against the property. The lien must be filed within 90 days of the last day of work or delivery. This protects the claimant by creating a security interest in the improved property.', 'easy', 'Virginia mechanic''s liens', 364, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Lis pendens', false, 1), ('Mechanic''s lien', true, 2), ('Attachment lien', false, 3), ('Vendor''s lien', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'The government power that allows the state to take property from an owner who dies without a will and without heirs is:', 'Escheat is the government''s power to take ownership of property when an owner dies intestate (without a will) and without any known heirs. This power prevents property from becoming ownerless. In Virginia, escheated property goes to the state Literary Fund, which supports public education.', 'easy', 'PETE government powers', 365, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Eminent domain', false, 1), ('Police power', false, 2), ('Taxation', false, 3), ('Escheat', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A buyer purchases a home and receives a general warranty deed. Two years later, a previously unknown heir of a former owner claims an interest in the property. Which type of title insurance policy would protect the buyer?', 'An owner''s title insurance policy protects the property buyer against financial loss from title defects that existed before the policy date, including claims by unknown heirs. The lender''s policy only protects the mortgage lender''s interest. Homeowner''s insurance covers physical damage, not title defects.', 'medium', 'owner''s vs lender''s title policies', 366, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Lender''s title policy', false, 1), ('Owner''s title policy', true, 2), ('Homeowner''s insurance policy', false, 3), ('Flood insurance policy', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A restaurant owner installs a commercial walk-in freezer in a leased building. At the end of the lease, the freezer is classified as a:', 'Items installed by a commercial tenant for use in their business are classified as trade fixtures. The tenant has the right to remove trade fixtures before the lease expires, provided they repair any damage caused by the removal. If the tenant fails to remove them before the lease ends, the trade fixtures may become the landlord''s property.', 'easy', 'trade fixtures', 367, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fixture that belongs to the landlord', false, 1), ('Trade fixture that the tenant may remove', true, 2), ('Emblement', false, 3), ('Real property that transfers with the building', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A life estate holder who tears down a structurally sound building on the property has committed:', 'Voluntary waste (also called affirmative waste) occurs when a life tenant actively damages or destroys the property, such as demolishing a structurally sound building. Permissive waste occurs through neglect (failure to maintain). Ameliorative waste involves changes that actually increase the property value. The remainderman can sue for voluntary waste to recover damages.', 'hard', 'life estates', 368, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Ameliorative waste', false, 1), ('Voluntary (affirmative) waste', true, 2), ('Permissive waste', false, 3), ('No violation, as the life tenant has full rights', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Under Virginia''s race-notice recording statute, which party is protected?', 'Virginia''s race-notice statute protects a subsequent bona fide purchaser for value who (1) has no actual or constructive notice of a prior unrecorded instrument, and (2) records their instrument first. Both requirements must be met. A pure race statute only requires recording first, while a pure notice statute only requires lack of notice.', 'medium', 'Virginia race-notice', 369, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The first party to purchase the property, regardless of recording', false, 1), ('The first party to record, regardless of notice', false, 2), ('A subsequent bona fide purchaser who records first and has no notice of prior unrecorded claims', true, 3), ('The party who has been in possession the longest', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'In a condominium, a unit owner''s interest in the common elements is:', 'Each condominium unit owner holds an undivided percentage interest in the common elements that is inseparable from the unit. This percentage is established in the declaration and determines the owner''s share of common expenses and voting rights. The common element interest cannot be sold or transferred separately from the unit.', 'medium', 'Virginia Condominium Act', 370, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A separate fee simple estate', false, 1), ('An undivided percentage interest that cannot be separated from the unit', true, 2), ('A leasehold interest granted by the association', false, 3), ('No interest; the association owns all common elements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Which of the following liens is classified as voluntary?', 'A deed of trust (mortgage) is the only voluntary lien listed because the borrower willingly pledges the property as collateral for the loan. Property tax liens, judgment liens, and mechanic''s liens are all involuntary because they are imposed on the property without the owner''s consent.', 'easy', 'voluntary vs involuntary liens', 371, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Property tax lien', false, 1), ('Judgment lien', false, 2), ('Deed of trust (mortgage)', true, 3), ('Mechanic''s lien', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'An owner conveys property "to my daughter Lisa for the life of my mother Grace." When Grace dies, the property reverts to the owner. Lisa''s interest is:', 'Lisa holds a life estate pur autre vie because the duration of her estate is measured by the life of another person (Grace), not her own life. The estate ends when Grace dies, regardless of whether Lisa is still alive. The property then reverts to the original grantor, who retained a reversionary interest.', 'hard', 'life estates', 372, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A fee simple absolute', false, 1), ('A conventional life estate', false, 2), ('A life estate pur autre vie', true, 3), ('A fee simple determinable', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A property owner has a neighbor who has been crossing the owner''s land daily to reach a bus stop for 18 years, openly and without permission. The neighbor may have acquired:', 'An easement by prescription is acquired through continuous, open, notorious, hostile, and adverse use for Virginia''s statutory period. The use must be without permission from the property owner. If all elements are met for the required period, the user obtains a legal right to continue using the property in that manner, similar to adverse possession but for use rather than ownership.', 'medium', 'easements by prescription', 373, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A license', false, 1), ('An easement by necessity', false, 2), ('An easement by prescription', true, 3), ('An easement by implication', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Which of the following statements about cooperative ownership is TRUE?', 'In a cooperative, a corporation holds title to the entire building. Residents purchase shares of stock in the corporation and receive a proprietary lease granting the right to occupy a specific unit. Most cooperatives require board approval before shares can be transferred, giving the board significant control over who lives in the building.', 'medium', 'cooperative ownership', 374, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Each owner receives a deed to their individual unit', false, 1), ('Owners may freely sell their shares without board approval', false, 2), ('The corporation owns the entire building, and residents hold shares of stock plus a proprietary lease', true, 3), ('Cooperatives are more common in Virginia than condominiums', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A title search reveals that a deed in the chain of title was signed by a 16-year-old. This deed is:', 'A deed signed by a minor is voidable, not void. The minor has the option to disaffirm (void) the deed upon reaching the age of majority or within a reasonable time thereafter. Until the minor takes action to void it, the deed remains valid. This is different from a forged deed, which is void from the beginning and can never transfer title.', 'hard', 'title defects', 375, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Void and can never transfer title', false, 1), ('Voidable at the option of the minor', true, 2), ('Valid because recording cured the defect', false, 3), ('Enforceable against the minor but not by the minor', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'The "R" in the MARIA fixture test stands for:', 'The "R" in MARIA stands for Relationship of the parties. Courts consider whether the person who attached the item is an owner or a tenant. Tenants are generally given more latitude to remove items because they are presumed to intend the items as personal property. Owners who attach items are more likely to have intended them as permanent fixtures.', 'easy', 'MARIA test', 376, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Recording status of the item', false, 1), ('Replacement cost of the item', false, 2), ('Relationship of the parties', true, 3), ('Restriction on removal', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A developer records covenants prohibiting commercial use in a residential subdivision. Ten years later, a homeowner wants to open a daycare in their home. The homeowner argues the restriction is outdated. Which legal principle could a court use to refuse enforcement?', 'Under the changed conditions doctrine, a court may refuse to enforce a restrictive covenant if the character of the neighborhood has changed so substantially that enforcing the restriction would be inequitable and would not benefit the other property owners. However, merely arguing that a restriction is outdated is usually not enough; the actual conditions in the area must have significantly changed.', 'hard', 'restrictive covenants', 377, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Statute of frauds', false, 1), ('Changed conditions doctrine', true, 2), ('Adverse possession', false, 3), ('Eminent domain', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Property owned by a homeowner in Virginia is subject to a $200,000 first mortgage recorded in 2020, a $15,000 judgment lien docketed in 2022, and $3,000 in delinquent property taxes. The property sells at foreclosure for $195,000. How much does the first mortgage lender receive?', 'Property tax liens have first priority and are paid before all other liens. The $3,000 in delinquent taxes is paid first from the $195,000 proceeds, leaving $192,000. The first mortgage lender receives $192,000, leaving a deficiency of $8,000 on the $200,000 loan. The judgment lien holder receives nothing because the proceeds were exhausted.', 'hard', 'lien priority', 378, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$200,000', false, 1), ('$195,000', false, 2), ('$192,000', true, 3), ('$177,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'Which of the following would NOT provide constructive notice of an interest in real property?', 'Constructive notice comes from information available in public records. A verbal agreement is not recorded anywhere and therefore cannot provide constructive notice. It might provide actual notice to the parties involved, but third parties searching the public records would have no way to discover it. This is why the statute of frauds requires real estate agreements to be in writing.', 'medium', 'constructive vs actual notice', 379, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A deed recorded in the circuit court clerk''s office', false, 1), ('A mortgage recorded in the land records', false, 2), ('A verbal agreement between neighbors about a shared driveway', true, 3), ('A recorded easement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-78'), 'mock_exam', 'A littoral property owner''s boundary line extends to the:', 'For littoral (ocean, sea, or large lake) properties, the owner''s boundary typically extends to the mean high water mark. The area between the mean high water mark and the water''s edge is generally considered public trust land. For riparian properties along rivers and streams, the boundary may extend to the center of the waterway (thread of the stream).', 'medium', 'water rights', 380, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Center of the adjacent body of water', false, 1), ('Mean high water mark', true, 2), ('Edge of the water at the time of purchase', false, 3), ('State-designated waterfront setback line', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'What is the minimum down payment required for an FHA loan when the borrower has a credit score of 580 or higher?', 'FHA requires a minimum down payment of 3.5% for borrowers with credit scores of 580 or higher. Borrowers with scores between 500 and 579 must put down at least 10%. FHA does not offer zero-down financing like VA or USDA programs.', 'easy', 'government-loans', 381, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('0%', false, 1), ('3%', false, 2), ('3.5%', true, 3), ('5%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'Which statement about FHA mortgage insurance premium (MIP) is TRUE?', 'The FHA UFMIP is 1.75% of the base loan amount, typically financed into the loan. For most 30-year FHA loans with less than 5% down, the annual MIP is required for the life of the loan. This differs from conventional PMI, which automatically terminates at 78% LTV under the Homeowners Protection Act.', 'medium', 'government-loans', 382, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('FHA MIP automatically cancels at 78% LTV like conventional PMI', false, 1), ('The upfront MIP (UFMIP) is currently 1.75% of the base loan amount', true, 2), ('FHA loans do not require any mortgage insurance', false, 3), ('Annual MIP is only required for the first five years of the loan', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'A veteran with full entitlement wants to purchase a home using a VA loan. Which statement is correct?', 'For borrowers with full entitlement (no other outstanding VA loans and no prior VA loan default), there is effectively no loan limit. The VA guarantees up to 25% of the loan amount regardless of price. The VA does not lend directly; it guarantees loans made by approved lenders. VA loans require no PMI and no down payment.', 'medium', 'government-loans', 383, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The veteran must put at least 3.5% down', false, 1), ('The VA will lend the money directly to the veteran', false, 2), ('There is effectively no VA loan limit for the veteran', true, 3), ('The veteran must pay monthly PMI to the VA', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'What is the VA funding fee for a veteran using the VA loan benefit for the first time with no down payment?', 'The VA funding fee for first-time use with no down payment is 2.15% of the loan amount. With 5% down it drops to 1.5%, and with 10% or more down it is 1.25%. Subsequent use with no down payment jumps to 3.3%. Veterans receiving VA disability compensation, surviving spouses, and Purple Heart recipients on active duty are exempt from the funding fee.', 'easy', 'government-loans', 384, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1.25%', false, 1), ('1.75%', false, 2), ('2.15%', true, 3), ('3.3%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'USDA Rural Development guaranteed loans require the property to be located in:', 'USDA loans require the property to be in a USDA-designated rural area. The definition of "rural" is broader than many expect, including towns with populations up to 35,000. In Virginia, many areas outside Northern Virginia, Richmond, and Hampton Roads metro regions qualify. USDA maintains an online eligibility map for verification.', 'easy', 'government-loans', 385, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Any location within the United States', false, 1), ('A USDA-designated rural area with population typically under 35,000', true, 2), ('A farm or agricultural property only', false, 3), ('A community with population under 5,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'How does USDA income eligibility differ from FHA and conventional loan underwriting?', 'USDA counts the income of all adult household members, not just the applicants on the loan. This is different from FHA and conventional underwriting, which only consider borrower income. Household income must be at or below 115% of the area median income for the guaranteed program.', 'hard', 'government-loans', 386, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('USDA has no income requirements', false, 1), ('USDA counts income of all adult household members, not just borrowers on the loan', true, 2), ('USDA requires income above 150% of the area median income', false, 3), ('USDA only counts the primary borrower''s income', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'The Virginia Housing Development Authority (VHDA) raises capital to fund its mortgage programs primarily through:', 'VHDA is a self-supporting, not-for-profit state authority that does not use state tax dollars. It raises capital by selling tax-exempt and taxable bonds in national and international capital markets, then uses those funds to provide below-market-rate mortgage loans and housing assistance through a network of approved private lenders.', 'medium', 'government-loans', 387, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia state tax revenue', false, 1), ('Federal appropriations from HUD', false, 2), ('Selling tax-exempt and taxable bonds in capital markets', true, 3), ('Annual assessments on Virginia real estate licensees', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'A VHDA Mortgage Credit Certificate (MCC) provides the borrower with:', 'The MCC is a federal tax credit (not a deduction) allowing the borrower to claim a dollar-for-dollar reduction in federal income tax equal to typically 20% of the mortgage interest paid each year. On $10,000 of interest, that is a $2,000 tax credit. The remaining 80% can still be claimed as a deduction if itemizing. The MCC lasts the life of the original mortgage.', 'hard', 'government-loans', 388, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A forgivable second mortgage for the down payment', false, 1), ('A dollar-for-dollar federal tax credit equal to a percentage of mortgage interest paid', true, 2), ('A reduction in the mortgage interest rate by 1%', false, 3), ('An exemption from Virginia property taxes for five years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'Which government loan program requires the borrower to obtain a Certificate of Eligibility (COE)?', 'VA loan eligibility requires a Certificate of Eligibility (COE), which confirms the veteran''s entitlement amount based on their military service. Lenders can often retrieve the COE electronically through the VA''s automated system. FHA and USDA have their own qualification processes but do not use a COE.', 'easy', 'government-loans', 389, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('FHA', false, 1), ('USDA', false, 2), ('VA', true, 3), ('VHDA', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'government-backed-loan-programs'), 'chapter_quiz', 'A buyer qualifies for both FHA and USDA financing. Which factor would make USDA the more cost-effective choice over the life of the loan?', 'For eligible borrowers, USDA loans typically cost less over the loan''s life due to the lower annual fee (0.35% vs. FHA''s 0.55%) and comparable upfront fee. USDA also offers zero down payment. However, USDA requires the property be in a designated rural area, limits the home to a primary residence, and restricts the home to modest size. USDA guaranteed loans are only 30-year fixed-rate.', 'hard', 'government-loans', 390, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('USDA allows investment properties', false, 1), ('USDA has a lower annual fee (0.35%) compared to FHA annual MIP (0.55%)', true, 2), ('USDA does not require any upfront fee', false, 3), ('USDA offers adjustable-rate options', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'In a seller financing arrangement, the seller acts as the:', 'In seller financing (also called a purchase money mortgage), the seller acts as the lender by carrying back a note and deed of trust from the buyer. The buyer makes payments directly to the seller rather than a traditional lending institution. This approach can help buyers who may not qualify for conventional loans.', 'medium', 'creative-financing', 391, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Trustee', false, 1), ('Lender', true, 2), ('Escrow agent', false, 3), ('Appraiser', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'In a land contract (contract for deed), when does the buyer receive legal title to the property?', 'In a land contract (contract for deed), the seller retains legal title while the buyer holds equitable title and possession. The seller delivers legal title only when the buyer has fully satisfied the contract terms, typically after all payments are made. This creates risk for buyers because they hold only equitable interest during the payment period.', 'medium', 'creative-financing', 392, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('At the time the contract is signed', false, 1), ('After the first payment is made', false, 2), ('When the contract terms are fully satisfied (all payments made)', true, 3), ('When the buyer takes physical possession', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'What type of interest does the buyer hold during the term of a land contract?', 'Under a land contract, the buyer holds equitable title (the right to obtain full ownership upon completing the contract terms) while the seller retains legal title. The buyer has the right of possession and use but does not hold the deed until the contract is fulfilled.', 'medium', 'creative-financing', 393, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Legal title', false, 1), ('Fee simple absolute', false, 2), ('Equitable title', true, 3), ('Life estate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'A lease-option agreement gives the tenant the:', 'A lease-option gives the tenant the right, but not the obligation, to purchase the property at a predetermined price during or at the end of the lease term. The tenant typically pays an option consideration (option fee) that may or may not be credited toward the purchase price. A lease-purchase, by contrast, obligates the tenant to buy.', 'medium', 'creative-financing', 394, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Obligation to purchase the property at the end of the lease', false, 1), ('Right, but not the obligation, to purchase the property at a predetermined price', true, 2), ('Immediate ownership interest in the property', false, 3), ('Right to sublease the property to another buyer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'What distinguishes a lease-purchase from a lease-option?', 'The key distinction is that a lease-purchase creates an obligation for the tenant to buy the property, while a lease-option gives the tenant the right but not the obligation. If a lease-option tenant decides not to buy, they typically forfeit the option fee but have no further purchase obligation.', 'hard', 'creative-financing', 395, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A lease-purchase requires a larger security deposit', false, 1), ('A lease-purchase obligates the tenant to buy; a lease-option does not', true, 2), ('A lease-purchase transfers title immediately', false, 3), ('There is no legal difference between the two', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'A bridge loan is typically used to:', 'A bridge loan (also called a swing loan) provides short-term financing to bridge the gap between buying a new home and selling the current one. These loans typically have higher interest rates and fees, and terms of 6 to 12 months. They allow buyers to make non-contingent offers on new properties.', 'easy', 'creative-financing', 396, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Finance renovations on a distressed property', false, 1), ('Provide short-term financing so a buyer can purchase before selling their current home', true, 2), ('Combine two existing mortgages into one payment', false, 3), ('Allow a buyer to lease a property before purchasing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'In a wraparound mortgage, the seller:', 'A wraparound mortgage is a form of seller financing where the seller creates a new, larger mortgage that "wraps around" the existing mortgage. The buyer makes payments to the seller on the wraparound, and the seller continues making payments on the underlying mortgage. The seller profits on the interest rate differential. Wraparounds are risky if the existing mortgage has a due-on-sale clause.', 'hard', 'creative-financing', 397, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Pays off the existing mortgage before creating a new one', false, 1), ('Creates a new mortgage that encompasses the existing mortgage balance plus additional financing', true, 2), ('Transfers the existing mortgage to the buyer''s name', false, 3), ('Obtains a second mortgage from the lender to cover the difference', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'A major risk of a wraparound mortgage for the buyer is:', 'The primary risk to the buyer in a wraparound is that the seller remains responsible for the underlying mortgage. If the seller stops making those payments, the original lender can foreclose, potentially wiping out the buyer''s interest. Additionally, if the underlying mortgage has a due-on-sale clause, the lender can call the loan due upon discovering the transfer.', 'hard', 'creative-financing', 398, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer must pay higher property taxes', false, 1), ('The seller may stop making payments on the underlying mortgage, triggering foreclosure', true, 2), ('The buyer cannot take possession until the underlying mortgage is paid off', false, 3), ('The wraparound rate is always higher than conventional rates', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'Under Virginia law, seller financing arrangements must comply with the Dodd-Frank Act''s ability-to-repay requirements. Which seller is most likely EXEMPT from these requirements?', 'Under the Dodd-Frank Act, a seller who provides financing on no more than three properties in any 12-month period and meets other criteria (not a builder, certain loan terms) is generally exempt from the ability-to-repay and licensing requirements that apply to mortgage loan originators. Sellers who exceed this threshold may need to comply with TILA and be licensed.', 'hard', 'creative-financing', 399, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A seller who finances five or more properties per year', false, 1), ('A seller who provides financing on no more than three properties in a 12-month period and is not a loan originator', true, 2), ('Any seller who owns the property free and clear', false, 3), ('A seller who is a licensed real estate agent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'creative-alternative-financing'), 'chapter_quiz', 'A blanket mortgage is most commonly used by:', 'A blanket mortgage covers more than one parcel of real estate and is most commonly used by developers and builders who finance multiple lots under a single loan. It typically includes a partial release clause allowing individual parcels to be sold and released from the mortgage as they are developed or sold, with a specified paydown amount for each release.', 'medium', 'creative-financing', 400, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('First-time homebuyers purchasing a single-family home', false, 1), ('Developers who need to finance multiple lots or parcels under a single loan', true, 2), ('Buyers using FHA financing', false, 3), ('Tenants in a lease-option arrangement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'In Virginia, real property is assessed for tax purposes by the:', 'In Virginia, property tax is a local tax. Each city or county has a commissioner of the revenue or an assessor responsible for determining the assessed value of real property. Virginia requires assessment at 100% of fair market value, though reassessment schedules vary by locality (annually, biennially, or every four to six years).', 'easy', 'taxation', 401, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Department of Taxation', false, 1), ('Local commissioner of the revenue or assessor', true, 2), ('Virginia Real Estate Board', false, 3), ('County circuit court clerk', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'A property has an assessed value of $350,000 and the local tax rate is $0.85 per $100 of assessed value. What is the annual property tax?', 'Annual property tax = (assessed value / $100) x tax rate per $100. So ($350,000 / $100) x $0.85 = 3,500 x $0.85 = $2,975. Virginia tax rates are commonly expressed in dollars per $100 of assessed value. This calculation is a frequent exam question.', 'medium', 'taxation', 402, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$2,450', false, 1), ('$2,975', true, 2), ('$3,500', false, 3), ('$29,750', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'Under federal tax law, a homeowner who has owned and used a home as a primary residence for at least 2 of the last 5 years may exclude capital gains of up to:', 'Section 121 of the Internal Revenue Code allows a homeowner to exclude up to $250,000 ($500,000 for married filing jointly) of capital gain from the sale of a primary residence, provided the homeowner has owned and used the home as a principal residence for at least 2 of the 5 years preceding the sale. This exclusion can generally be used once every two years.', 'easy', 'taxation', 403, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$125,000 for single filers and $250,000 for married filing jointly', false, 1), ('$250,000 for single filers and $500,000 for married filing jointly', true, 2), ('$500,000 regardless of filing status', false, 3), ('$100,000 for single filers and $200,000 for married filing jointly', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'The purpose of a 1031 tax-deferred exchange is to:', 'Section 1031 of the Internal Revenue Code allows an investor to defer capital gains taxes by exchanging one investment or business-use property for another "like-kind" property. The taxes are deferred, not eliminated. The replacement property must be of equal or greater value, and strict timelines must be followed. Primary residences do not qualify.', 'easy', 'taxation', 404, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Eliminate property taxes on investment properties', false, 1), ('Defer capital gains taxes by exchanging one investment property for another like-kind property', true, 2), ('Convert a primary residence into a tax-exempt investment', false, 3), ('Reduce the assessed value of real property for tax purposes', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'In a 1031 exchange, the investor must identify potential replacement properties within how many days of closing on the relinquished property?', 'A 1031 exchange has two critical deadlines: the investor must identify potential replacement properties within 45 calendar days of closing on the relinquished property, and must close on the replacement property within 180 calendar days (or by the tax return due date, including extensions, whichever comes first). Missing either deadline disqualifies the exchange.', 'medium', 'taxation', 405, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('30 days', false, 1), ('45 days', true, 2), ('90 days', false, 3), ('180 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'In a 1031 exchange, the proceeds from the sale of the relinquished property must be held by a:', 'The exchange funds must be held by a qualified intermediary (QI), also known as an accommodator. The investor cannot have actual or constructive receipt of the funds at any point during the exchange. If the investor touches the money, the exchange fails and the capital gains become immediately taxable.', 'medium', 'taxation', 406, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The investor''s personal bank account', false, 1), ('Qualified intermediary', true, 2), ('The investor''s real estate agent', false, 3), ('The local tax assessor''s office', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'Which of the following expenses is generally tax-deductible for a homeowner who itemizes?', 'Homeowners who itemize can deduct mortgage interest on acquisition debt (up to $750,000 for loans originating after December 15, 2017) and state/local property taxes (subject to the $10,000 SALT cap). Insurance premiums, utilities, and maintenance costs on a personal residence are not deductible.', 'easy', 'taxation', 407, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Homeowner''s insurance premiums', false, 1), ('Mortgage interest on acquisition debt up to IRS limits', true, 2), ('Utility bills', false, 3), ('Home maintenance and repair costs', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'The federal SALT (State and Local Tax) deduction cap limits the combined deduction for state income, sales, and property taxes to:', 'The Tax Cuts and Jobs Act of 2017 capped the combined federal deduction for state and local income taxes (or sales taxes) and property taxes at $10,000 ($5,000 for married filing separately). This cap particularly impacts homeowners in areas with high property taxes and state income taxes, including parts of Northern Virginia.', 'medium', 'taxation', 408, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$5,000', false, 1), ('$10,000', true, 2), ('$25,000', false, 3), ('There is no cap on the SALT deduction', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'A Virginia property owner disagrees with their assessed property value. The first step in the appeals process is typically to:', 'The first step in Virginia is typically an informal review with the local assessor''s office. If unresolved, the owner can appeal to the local Board of Equalization. Further appeals may go to circuit court. Property owners should never stop paying taxes during an appeal, as taxes remain due regardless of dispute status.', 'hard', 'taxation', 409, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('File a lawsuit in circuit court', false, 1), ('Contact the local commissioner of the revenue or assessor''s office to request an informal review', true, 2), ('Petition the Virginia Supreme Court', false, 3), ('Stop paying property taxes until the dispute is resolved', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-taxation'), 'chapter_quiz', 'An investor sells a rental property for $400,000 that was purchased for $300,000. If $45,000 of depreciation was taken over the holding period, what is the investor''s total taxable gain?', 'The adjusted basis is the original purchase price minus accumulated depreciation: $300,000 - $45,000 = $255,000. Total taxable gain = sale price - adjusted basis = $400,000 - $255,000 = $145,000. Of this, $45,000 is depreciation recapture (taxed at up to 25%) and $100,000 is capital gain (taxed at capital gains rates).', 'hard', 'taxation', 410, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$55,000', false, 1), ('$100,000', false, 2), ('$145,000', true, 3), ('$400,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'Net Operating Income (NOI) is calculated by subtracting what from Effective Gross Income?', 'NOI = Effective Gross Income (EGI) - Operating Expenses. Operating expenses include property taxes, insurance, maintenance, management fees, and utilities paid by the owner. NOI does NOT deduct mortgage payments (debt service), income taxes, or depreciation. It represents the property''s income-producing capability independent of financing.', 'easy', 'investment', 411, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Mortgage payments (debt service)', false, 1), ('Operating expenses', true, 2), ('Capital gains taxes', false, 3), ('Depreciation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'A rental property generates $120,000 in gross rental income, has a 5% vacancy rate, and $42,000 in operating expenses. What is the NOI?', 'Effective Gross Income = $120,000 - (5% x $120,000) = $120,000 - $6,000 = $114,000. NOI = EGI - Operating Expenses = $114,000 - $42,000 = $72,000. The vacancy allowance reduces gross income before subtracting expenses.', 'medium', 'investment', 412, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$72,000', true, 1), ('$78,000', false, 2), ('$114,000', false, 3), ('$84,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'The capitalization rate (cap rate) is calculated by dividing:', 'Cap Rate = NOI / Sale Price (or Property Value). The cap rate expresses the rate of return on a property as if it were purchased with all cash (no financing). A higher cap rate generally indicates higher potential return but also higher risk. Cap rates allow investors to compare properties regardless of their financing.', 'easy', 'investment', 413, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Purchase price by gross rental income', false, 1), ('Net Operating Income by the property''s sale price or value', true, 2), ('Cash flow after debt service by the down payment', false, 3), ('Gross rental income by operating expenses', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'A property has an NOI of $60,000 and sold for $750,000. What is the cap rate?', 'Cap Rate = NOI / Sale Price = $60,000 / $750,000 = 0.08 = 8%. This means an all-cash buyer would earn an 8% return on the investment before income taxes and appreciation. Investors use cap rates to compare properties and assess relative value in different markets.', 'easy', 'investment', 414, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('6%', false, 1), ('8%', true, 2), ('10%', false, 3), ('12.5%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'The Gross Rent Multiplier (GRM) is calculated by dividing:', 'GRM = Sale Price / Gross Annual Rental Income. The GRM is a quick, rough screening tool that does not account for vacancies, expenses, or financing. A lower GRM suggests a better value relative to income. Unlike the cap rate, GRM uses gross income and does not consider operating expenses.', 'medium', 'investment', 415, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('NOI by the sale price', false, 1), ('Sale price by gross annual rental income', true, 2), ('Gross rental income by operating expenses', false, 3), ('Cash flow by the mortgage payment', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'Leverage in real estate investing refers to:', 'Leverage means using borrowed money (a mortgage) to control a larger asset with a smaller amount of equity. Positive leverage occurs when the return on the total investment exceeds the cost of borrowing, amplifying equity returns. Negative leverage occurs when the cost of borrowing exceeds the property''s return, reducing equity returns.', 'easy', 'investment', 416, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The ability to negotiate a lower purchase price', false, 1), ('Using borrowed funds to increase the potential return on investment', true, 2), ('The ratio of operating expenses to gross income', false, 3), ('The annual depreciation allowance on the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'An investor purchases a property for $500,000 with $100,000 down and a $400,000 mortgage. The property generates $30,000 in NOI and annual debt service is $24,000. What is the cash-on-cash return?', 'Cash-on-Cash Return = Annual Before-Tax Cash Flow / Total Cash Invested. Before-tax cash flow = NOI - Debt Service = $30,000 - $24,000 = $6,000. Cash-on-Cash Return = $6,000 / $100,000 = 6%. This measures the return on the actual cash invested (equity), which is the metric most relevant to leveraged investors.', 'hard', 'investment', 417, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('4.8%', false, 1), ('6%', true, 2), ('7.5%', false, 3), ('30%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'For federal tax purposes, residential rental property is depreciated over:', 'The IRS requires residential rental property to be depreciated over 27.5 years using the straight-line method. Commercial (nonresidential) property is depreciated over 39 years. Only the improvement (building) value is depreciated; land is never depreciable. Depreciation is a non-cash deduction that reduces taxable income.', 'medium', 'investment', 418, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('15 years', false, 1), ('27.5 years', true, 2), ('31.5 years', false, 3), ('39 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'An investor buys a rental property for $400,000. The land is valued at $80,000. What is the annual straight-line depreciation deduction for the improvement?', 'Only the improvement (building) is depreciable, not the land. Depreciable basis = $400,000 - $80,000 = $320,000. Annual depreciation = $320,000 / 27.5 years = $11,636 (rounded). This is a non-cash deduction that reduces the investor''s taxable rental income each year.', 'hard', 'investment', 419, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$11,636', true, 1), ('$14,545', false, 2), ('$8,205', false, 3), ('$2,909', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'investment-analysis'), 'chapter_quiz', 'When depreciation recapture occurs at the sale of an investment property, the recaptured depreciation is taxed at a maximum federal rate of:', 'Depreciation recapture on the sale of real property is taxed at a maximum federal rate of 25% under Section 1250 of the Internal Revenue Code. This applies to the portion of gain attributable to depreciation previously taken. Any remaining gain above the original purchase price is taxed at long-term capital gains rates (typically 15% or 20%).', 'hard', 'investment', 420, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('15%', false, 1), ('20%', false, 2), ('25%', true, 3), ('37%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'The primary purpose of a Comparative Market Analysis (CMA) is to:', 'A CMA is an informal estimate of market value prepared by a real estate agent using recent comparable sales, active listings, and expired listings. It is NOT an appraisal (which must be performed by a licensed appraiser). The CMA helps sellers set a competitive listing price and helps buyers make informed offers.', 'medium', 'transaction', 421, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Determine the official appraised value of a property', false, 1), ('Help sellers and buyers estimate a property''s likely market value based on recent comparable sales', true, 2), ('Calculate the property tax assessment', false, 3), ('Satisfy the lender''s underwriting requirements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'When preparing a CMA, which type of comparable property provides the MOST reliable indicator of current market value?', 'Recently sold (closed) comparable properties provide the most reliable data because they represent actual completed transactions with agreed-upon prices between willing buyers and sellers. Active listings show what sellers hope to get, and expired listings show prices the market rejected. Ideal comparables are within 3-6 months and close in location, size, and features.', 'easy', 'transaction', 422, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Active listings currently on the market', false, 1), ('Recently sold properties within the last 3-6 months', true, 2), ('Expired listings that failed to sell', false, 3), ('Properties listed for sale more than 12 months ago', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'During a listing presentation, a Virginia agent should provide the seller with:', 'A thorough listing presentation includes the CMA with a recommended price range (not a guaranteed price), a proposed marketing plan, an explanation of the agency relationship and duties, the listing agreement terms, and a discussion of the seller''s timeline and goals. Virginia licensees must disclose their agency role before entering into a business relationship.', 'medium', 'transaction', 423, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A guaranteed sale price based on the CMA', false, 1), ('A marketing plan, CMA, explanation of agency relationship, and listing agreement terms', true, 2), ('A binding purchase contract from a buyer', false, 3), ('Only the MLS listing form for signature', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'During a buyer consultation, the agent should determine all of the following EXCEPT:', 'An agent must NEVER inquire about or use a buyer''s race, religion, national origin, familial status, or other protected class characteristics to guide housing recommendations. This would violate the Fair Housing Act. The consultation should focus on budget, pre-approval status, desired features, location preferences, and timeline.', 'medium', 'transaction', 424, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer''s pre-approval status and budget', false, 1), ('The buyer''s desired location, features, and timeline', false, 2), ('The buyer''s race, religion, and family status to better match neighborhoods', true, 3), ('Whether the buyer needs to sell a current home first', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'In Virginia, the standard residential purchase contract typically includes an earnest money deposit (EMD) that is held by:', 'In Virginia, the earnest money deposit is typically held by the settlement agent, the listing broker''s escrow account, or another escrow agent designated in the contract. Virginia law requires that earnest money be deposited promptly (by the end of the fifth business day following ratification unless otherwise agreed). The funds are applied toward the buyer''s costs at closing.', 'hard', 'transaction', 425, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The seller''s real estate agent', false, 1), ('The buyer directly', false, 2), ('The escrow agent or settlement agent designated in the contract', true, 3), ('The Virginia Real Estate Board', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'An offer to purchase becomes a binding contract when:', 'Under Virginia contract law, an offer becomes a binding contract (ratified) when the seller accepts in writing and that acceptance is communicated to the buyer or buyer''s agent. Verbal acceptance is insufficient for real estate contracts under the Statute of Frauds. The earnest money deposit is important but not required for contract formation.', 'medium', 'transaction', 426, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The buyer signs the offer', false, 1), ('The seller verbally accepts the offer', false, 2), ('The seller accepts in writing and the acceptance is communicated to the buyer or buyer''s agent', true, 3), ('The earnest money deposit is received by the escrow agent', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'A buyer submits an offer with a 10-day home inspection contingency. This contingency gives the buyer the right to:', 'A home inspection contingency allows the buyer to have a professional inspection and, based on the findings, negotiate repairs, request a credit, renegotiate the price, or withdraw from the contract within the specified timeframe. The seller is not obligated to make any repairs. If the parties cannot agree, the buyer can typically terminate and receive the earnest money back.', 'easy', 'transaction', 427, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Renegotiate the purchase price at any time before closing', false, 1), ('Have the property inspected and negotiate repairs or withdraw based on the findings within the contingency period', true, 2), ('Demand that the seller make all repairs regardless of cost', false, 3), ('Delay closing indefinitely until all repairs are completed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'In Virginia, when a property is listed on the MLS, the listing broker is typically offering:', 'When a property is listed on the MLS, the listing broker offers compensation to cooperating brokers (buyer''s agents) who procure a buyer. This offer of compensation, combined with the cooperative nature of the MLS, is what facilitates cooperation between brokerages. The listing broker does not guarantee a sale or warrant the property''s condition.', 'medium', 'transaction', 428, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A guaranteed sale to any buyer who views the property', false, 1), ('Compensation to cooperating brokers who procure a buyer', true, 2), ('An exclusive agreement that no other agent can show the property', false, 3), ('A warranty on the condition of the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'A seller receives multiple offers simultaneously. Under Virginia law, the seller:', 'A seller has full discretion to accept, reject, or counter any offers received. There is no legal obligation to accept the highest offer or the first offer. The listing agent must present all offers to the seller unless the seller has given written instructions to the contrary. The seller is not required to disclose terms of other offers to competing buyers.', 'easy', 'transaction', 429, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Must accept the highest offer', false, 1), ('Must accept the first offer received', false, 2), ('May accept, reject, or counter any or all offers at their discretion', true, 3), ('Must disclose the terms of all offers to every buyer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'pre-listing-to-contract'), 'chapter_quiz', 'A counteroffer from the seller:', 'A counteroffer legally rejects the original offer and creates a new offer from the seller to the buyer. The original offer is dead and cannot be accepted later. The buyer may accept, reject, or counter the counteroffer. There is no automatic timeline for response unless one is specified in the counteroffer.', 'hard', 'transaction', 430, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Keeps the original offer alive while adding new terms', false, 1), ('Rejects the original offer and creates a new offer from the seller to the buyer', true, 2), ('Automatically binds the buyer to the new terms', false, 3), ('Must be accepted by the buyer within 24 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'During a home inspection, the inspector discovers a deficiency. In Virginia, the seller is obligated to:', 'In Virginia, the seller has no legal obligation to make repairs discovered during a home inspection. The inspection contingency allows the buyer to request repairs, negotiate a credit, or withdraw from the contract. The seller may agree to repairs, offer a credit, reduce the price, or refuse. If the parties cannot agree, the buyer can exercise the contingency to terminate.', 'medium', 'transaction', 431, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Repair all deficiencies discovered during the inspection', false, 1), ('Only repair deficiencies that violate local building codes', false, 2), ('Negotiate in good faith, but has no obligation to make any repairs', true, 3), ('Provide a home warranty to cover any deficiencies', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'The purpose of an appraisal ordered by the lender is to:', 'The lender orders the appraisal to confirm that the property''s market value supports the loan amount, protecting the lender''s collateral position. The appraisal is not a home inspection and does not identify all deficiencies. However, if the appraiser notes obvious safety or habitability issues, these may need to be addressed (especially for FHA and VA loans).', 'easy', 'transaction', 432, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Identify all structural and mechanical deficiencies in the property', false, 1), ('Ensure the property value supports the loan amount so the lender''s collateral is adequate', true, 2), ('Determine the property tax assessment for the local government', false, 3), ('Provide the buyer with a home inspection report', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'If the appraisal comes in lower than the contract price, the buyer can do all of the following EXCEPT:', 'When the appraisal is below the contract price, the buyer can pay the difference in cash, negotiate a lower price, request the seller contribute more toward closing, or terminate the contract using the appraisal contingency (if one exists). The buyer cannot force the lender to approve a loan exceeding the appraised value.', 'medium', 'transaction', 433, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Pay the difference in cash to make up the gap', false, 1), ('Negotiate with the seller to reduce the price', false, 2), ('Force the lender to approve the loan at the original contract price', true, 3), ('Exercise the appraisal contingency to terminate the contract', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'A title search is performed primarily to:', 'A title search examines public records to verify the seller''s legal ownership, identify any outstanding liens (mortgages, tax liens, mechanic''s liens), easements, judgments, or other encumbrances on the title. This is essential to ensure the buyer receives clear, marketable title. Title insurance is then issued based on the title search results.', 'easy', 'transaction', 434, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Determine the property''s market value', false, 1), ('Verify the seller''s ownership and identify any liens, encumbrances, or defects in title', true, 2), ('Satisfy the home inspection contingency', false, 3), ('Calculate the property tax proration', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'During the loan processing stage, the lender''s underwriter is primarily evaluating:', 'The underwriter evaluates the borrower''s ability and willingness to repay (credit, income, assets, debt ratios), the property''s value as collateral (via the appraisal), and whether the loan meets the specific program guidelines (FHA, VA, conventional, etc.). The underwriter may issue a conditional approval requiring additional documentation before final "clear to close."', 'easy', 'transaction', 435, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Whether the agent earned their commission', false, 1), ('The borrower''s creditworthiness, the property''s value, and the loan''s compliance with lending guidelines', true, 2), ('The condition of the property''s roof and HVAC system', false, 3), ('The seller''s financial stability', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'A "clear to close" from the lender means:', 'A "clear to close" means the underwriter has verified all conditions, the loan documents are being prepared, and the lender is ready to fund. This is the final step before closing documents are sent to the settlement agent. It does not mandate a specific closing timeline but indicates that the loan is fully approved.', 'medium', 'transaction', 436, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The borrower''s credit has been cleared of all derogatory items', false, 1), ('All underwriting conditions have been satisfied and the lender is ready to fund the loan', true, 2), ('The closing must occur within 24 hours', false, 3), ('The title search has been completed', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'A survey of the property is important because it:', 'A survey identifies the exact property boundaries, locations of improvements (buildings, fences, driveways), any encroachments onto or from neighboring properties, and visible easements. While not required by Virginia law for all residential transactions, many lenders and title companies require a survey. It can reveal boundary disputes and encroachment issues not discoverable through a title search alone.', 'medium', 'transaction', 437, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Replaces the need for a title search', false, 1), ('Identifies the exact boundaries, improvements, encroachments, and easements on the property', true, 2), ('Determines the property''s assessed value for tax purposes', false, 3), ('Is required by Virginia law for all residential transactions', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'Title insurance in Virginia typically includes:', 'The lender typically requires a lender''s title insurance policy to protect its mortgage interest. The owner''s policy, which protects the buyer''s equity, is separate and optional (though highly recommended). Title insurance is a one-time premium paid at closing that covers losses from title defects that were not discovered in the title search.', 'medium', 'transaction', 438, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Only an owner''s policy to protect the buyer', false, 1), ('A lender''s policy (required by the lender) and an optional owner''s policy for the buyer', true, 2), ('Coverage for future zoning changes', false, 3), ('A guarantee that the property will increase in value', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'If a buyer fails to secure financing by the deadline specified in the financing contingency, the buyer may:', 'A financing contingency protects the buyer by allowing contract termination and return of the earnest money if the buyer is unable to obtain loan approval within the specified timeframe. Without this contingency, the buyer risks losing the earnest money deposit if they cannot secure financing. Extensions may be negotiated but are not automatic.', 'medium', 'transaction', 439, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Be forced to purchase with cash', false, 1), ('Terminate the contract and receive the earnest money deposit back', true, 2), ('Automatically receive a 30-day extension', false, 3), ('Sue the lender for breach of contract', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'under-contract-to-closing'), 'chapter_quiz', 'Which of the following would most likely be found during a title search and could delay closing?', 'A mechanic''s lien is recorded in public records and would be discovered during a title search. Unresolved liens must be satisfied or addressed before clear title can be conveyed. A cracked foundation is an inspection issue, credit scores are a lending issue, and flood zone status is a disclosure/insurance issue, not title defects.', 'hard', 'transaction', 440, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A cracked foundation discovered during the home inspection', false, 1), ('An unresolved mechanic''s lien from a previous contractor', true, 2), ('The buyer''s low credit score', false, 3), ('The property''s location in a flood zone', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'In Virginia, real estate closings are conducted by:', 'Virginia is an "attorney state" where real estate closings must be conducted by or under the supervision of a licensed attorney. Settlement agents (attorneys or title companies supervised by attorneys) handle document preparation, fund disbursement, and recording. Real estate agents facilitate the transaction but do not conduct the closing.', 'easy', 'settlement', 441, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The real estate agents involved in the transaction', false, 1), ('A settlement agent, typically an attorney or title company', true, 2), ('The local circuit court clerk', false, 3), ('The lender''s loan officer', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'Under the TRID (TILA-RESPA Integrated Disclosure) rule, the lender must provide the Closing Disclosure to the borrower at least:', 'The TRID rule requires the lender to deliver the Closing Disclosure (CD) to the borrower at least 3 business days before closing. This gives the borrower time to review final loan terms, closing costs, and cash needed. If certain key terms change after delivery, a new 3-day waiting period may be triggered.', 'easy', 'settlement', 442, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 business day before closing', false, 1), ('3 business days before closing', true, 2), ('5 business days before closing', false, 3), ('7 business days before closing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'The TRID rule replaced which two former disclosure documents with the Loan Estimate and Closing Disclosure?', 'TRID combined disclosures from TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act). The Loan Estimate replaced the Good Faith Estimate and initial TIL disclosure. The Closing Disclosure replaced the HUD-1 Settlement Statement and final TIL disclosure. These changes took effect October 3, 2015.', 'medium', 'settlement', 443, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The deed of trust and the promissory note', false, 1), ('The Good Faith Estimate (GFE) and the HUD-1 Settlement Statement', true, 2), ('The title commitment and the survey', false, 3), ('The buyer''s closing statement and the seller''s closing statement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'Virginia''s Consumer Real Estate Settlement Protection Act (CRESPA) primarily protects consumers by:', 'CRESPA (Virginia Code 6.2-1800 et seq.) provides consumer protection by requiring settlement agents to maintain proper escrow accounts, obtain fidelity bonds and surety bonds, carry errors and omissions insurance, and register with the Virginia State Bar or the Bureau of Financial Institutions. These requirements protect consumers from fraud and mishandling of settlement funds.', 'hard', 'settlement', 444, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Setting maximum commission rates for real estate agents', false, 1), ('Requiring settlement agents to maintain escrow accounts, fidelity bonds, and errors and omissions insurance', true, 2), ('Guaranteeing that all homes pass inspection before closing', false, 3), ('Eliminating closing costs for first-time homebuyers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'Property taxes in Virginia are typically prorated at closing based on:', 'In Virginia, property taxes are typically prorated based on the calendar year (January 1 through December 31). The seller is charged for days owned through the day before the closing date, and the buyer is responsible from the closing date forward. If taxes for the current period have not yet been billed, the proration uses the prior year''s tax amount as an estimate.', 'medium', 'settlement', 445, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The calendar year, with the seller responsible through the day before closing', true, 1), ('The fiscal year, with the buyer responsible for the entire year', false, 2), ('The month of closing only', false, 3), ('Property taxes are never prorated in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'At closing, the seller''s existing mortgage is typically:', 'The settlement agent uses the sale proceeds to pay off the seller''s existing mortgage at closing. The lender then provides a certificate of satisfaction (or release of deed of trust), which is recorded in the land records to remove the lien. If the sale proceeds are insufficient to pay off the mortgage, the transaction may not close without the seller bringing funds.', 'easy', 'settlement', 446, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Transferred to the buyer automatically', false, 1), ('Paid off from the sale proceeds, and a release or satisfaction is recorded', true, 2), ('Converted into the buyer''s new loan', false, 3), ('Held in escrow for 90 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'A closing scheduled for Wednesday requires the lender to deliver the Closing Disclosure by no later than:', 'The Closing Disclosure must be delivered at least 3 business days before closing. For a Wednesday closing: counting back 3 business days gives Tuesday, Monday, and Saturday. Saturday counts as a business day under TRID rules (only Sundays and federal holidays are excluded). Therefore, delivery must occur by Saturday at the latest.', 'hard', 'settlement', 447, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The prior Wednesday', false, 1), ('The prior Friday', false, 2), ('The prior Saturday', true, 3), ('The prior Monday', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'The final walkthrough before closing is primarily intended to:', 'The final walkthrough (typically 24-48 hours before closing) allows the buyer to verify the property is in substantially the same condition as when the offer was made, agreed-upon repairs were completed, all fixtures and inclusions remain, and the property is vacant (unless otherwise agreed). It is not a second inspection and is not the time to raise new issues.', 'easy', 'settlement', 448, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Renegotiate the purchase price', false, 1), ('Verify the property condition is substantially the same as when the contract was written and agreed repairs were completed', true, 2), ('Conduct a second formal home inspection', false, 3), ('Satisfy the lender''s appraisal requirements', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'In Virginia, HOA dues are prorated at settlement. If monthly HOA dues are $300 and closing occurs on June 16 (30-day month), how much does the seller owe for June?', 'Daily rate = $300 / 30 days = $10/day. Seller is responsible through June 15 (day before closing) = 15 days x $10 = $150. The buyer is responsible from the closing date (June 16) forward. The seller receives a debit and the buyer receives a credit for the seller''s portion.', 'medium', 'settlement', 449, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$150', true, 1), ('$140', false, 2), ('$160', false, 3), ('$300', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-settlement-process'), 'chapter_quiz', 'Which change to the Closing Disclosure would trigger a new 3-business-day waiting period under TRID?', 'A new 3-day waiting period is triggered by three specific changes: (1) the APR increases by more than 1/8% for fixed-rate loans or 1/4% for adjustable-rate loans, (2) the loan product changes (e.g., fixed to adjustable), or (3) a prepayment penalty is added. Routine cost adjustments that do not affect these items do not require a new waiting period.', 'hard', 'settlement', 450, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A $50 increase in the title insurance premium', false, 1), ('An increase in the APR by more than 1/8 of a percent for a fixed-rate loan', true, 2), ('A change in the seller''s real estate agent', false, 3), ('A $100 change in the pest inspection fee', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'After closing in Virginia, the deed is recorded in the:', 'In Virginia, deeds and other instruments affecting real property are recorded in the clerk''s office of the circuit court for the city or county where the property is located. Recording provides constructive notice to the world of the ownership transfer. The settlement agent typically handles recording as part of their closing duties.', 'easy', 'post-closing', 451, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Real Estate Board''s central registry', false, 1), ('Clerk''s office of the circuit court in the jurisdiction where the property is located', true, 2), ('Virginia Department of Taxation office', false, 3), ('The local assessor''s office', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'Virginia imposes a recordation tax (grantor''s tax) on the sale of real property at a rate of:', 'Virginia''s state grantor''s tax (recordation tax) is $0.50 per $500 of consideration, equivalent to $1.00 per $1,000 of the sale price. Some localities impose an additional local grantor''s tax. In Virginia, the grantor''s tax is customarily paid by the seller. There is also a separate state recordation tax on the deed of trust (the buyer''s mortgage) at the same rate.', 'medium', 'post-closing', 452, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$0.50 per $500 of consideration (or $1.00 per $1,000)', true, 1), ('$2.50 per $1,000 of consideration', false, 2), ('1% of the sale price', false, 3), ('$5.00 per $500 of consideration', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'A short sale occurs when:', 'A short sale is a transaction where the lender agrees to accept less than the full mortgage balance owed, allowing the homeowner to sell the property and avoid foreclosure. The lender must approve the short sale, and the process often takes longer than a traditional sale. The lender may or may not pursue the seller for the remaining deficiency.', 'medium', 'post-closing', 453, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property sells quickly, within 30 days of listing', false, 1), ('The property sells for less than the outstanding mortgage balance, with the lender''s approval', true, 2), ('The sale is conducted through a public auction', false, 3), ('The buyer pays all cash with no financing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'In Virginia, foreclosure on residential property is typically conducted through:', 'Virginia is a deed of trust state that uses non-judicial foreclosure (also called a trustee sale). The deed of trust includes a power of sale clause allowing the trustee to sell the property at public auction after proper notice without going through court. Virginia requires the trustee to provide notice and advertise the sale. Judicial foreclosure is available but rarely used for residential property.', 'medium', 'post-closing', 454, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Strict foreclosure by the court', false, 1), ('Non-judicial foreclosure (trustee sale) under the power of sale in the deed of trust', true, 2), ('Sheriff''s sale only after a jury trial', false, 3), ('The Virginia Real Estate Board conducts all foreclosures', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'The most common form of wire fraud in real estate transactions involves:', 'Wire fraud in real estate typically involves hackers who compromise email accounts of agents, settlement agents, or lenders. They send fraudulent emails with altered wire instructions, directing the buyer to wire closing funds to the criminal''s account instead of the legitimate settlement account. Buyers should ALWAYS verify wire instructions by calling a known, trusted phone number.', 'medium', 'post-closing', 455, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A buyer wiring too much money to the settlement agent', false, 1), ('Hackers intercepting emails and sending fraudulent wire instructions to redirect closing funds', true, 2), ('The settlement agent wiring funds to the wrong bank by accident', false, 3), ('A seller refusing to accept wired funds', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'To protect against wire fraud, buyers should:', 'The best protection against wire fraud is to independently verify wire instructions by calling the settlement company at a phone number obtained from a reliable source (their website, business card, or prior communication), never from the email containing the wire instructions. Buyers should never wire funds based solely on emailed instructions, as these may have been altered by hackers.', 'medium', 'post-closing', 456, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Send wire instructions via email for a paper trail', false, 1), ('Verify wire instructions by calling the settlement agent at a previously known phone number, not one from an email', true, 2), ('Wire funds to the real estate agent''s personal account for safekeeping', false, 3), ('Wait until the day of closing to request wire instructions', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'In a new construction purchase, the buyer''s earnest money deposit is typically:', 'New construction deposits are often significantly larger (5-10% of the purchase price) compared to resale transactions. Builders may structure deposits in stages (initial deposit, additional deposit at certain milestones). Unlike resale EMDs held in escrow, builder deposits may be released to the builder to fund construction, which increases the buyer''s risk if the builder defaults.', 'medium', 'post-closing', 457, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refundable at any time with no conditions', false, 1), ('Larger than a resale transaction and may be released to the builder in stages', true, 2), ('Not required because the builder finances the construction', false, 3), ('The same as a standard resale transaction in all cases', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'After a non-judicial foreclosure sale in Virginia, the former homeowner:', 'Virginia does not provide a statutory right of redemption after a non-judicial foreclosure (trustee sale). Once the sale is completed and the trustee''s deed is delivered, the former owner has no right to reclaim the property. This differs from some other states that provide redemption periods. The borrower can cure the default and stop the foreclosure before the sale occurs.', 'hard', 'post-closing', 458, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Has a 12-month statutory redemption period to reclaim the property', false, 1), ('Has no statutory right of redemption after the trustee sale', true, 2), ('Can reclaim the property by paying 150% of the sale price within 6 months', false, 3), ('Automatically retains a life estate in the property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'Under the Virginia New Home Warranties Act (Va. Code § 55.1-357), a builder of new residential construction must provide a statutory warranty of at least what minimum duration from the date of transfer of record title or the buyer taking possession, whichever occurs first?', 'The Virginia New Home Warranties Act (Va. Code § 55.1-357) requires builders to provide a statutory warranty of at least one year against defective materials, workmanship, and structural defects (and against faulty installation of plumbing, electrical, heating, and cooling systems). The tiered 1-year / 2-year / 5-year (or 10-year) coverage structure is not part of the VA statute itself; it is typical of THIRD-PARTY new home warranty programs (e.g., 2-10 HBW) that builders may purchase in addition to, or in lieu of, the statutory warranty.', 'hard', 'post-closing', 459, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 year', true, 1), ('2 years', false, 2), ('5 years', false, 3), ('10 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'post-closing-special-situations'), 'chapter_quiz', 'The primary advantage of a short sale over foreclosure for a homeowner is:', 'A short sale generally has a less severe impact on the homeowner''s credit score compared to a foreclosure, and the credit recovery period is typically shorter. However, the lender may still pursue a deficiency judgment for the difference in some cases (unless waived in the short sale agreement). The homeowner does not receive sale proceeds in a short sale since the sale price is already less than owed.', 'medium', 'post-closing', 460, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The homeowner receives proceeds from the sale', false, 1), ('A short sale typically has less negative impact on the homeowner''s credit than a foreclosure', true, 2), ('The lender cannot pursue a deficiency judgment after a short sale', false, 3), ('The homeowner can remain in the property indefinitely', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A borrower with a credit score of 540 applies for an FHA loan. What is the minimum down payment required?', 'FHA borrowers with credit scores between 500 and 579 are required to make a 10% down payment. Borrowers with scores of 580 or above qualify for the 3.5% minimum. Scores below 500 do not qualify for FHA financing.', 'medium', 'government-loans', 461, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('3.5%', false, 1), ('5%', false, 2), ('10%', true, 3), ('The borrower does not qualify for FHA financing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Which borrower is EXEMPT from the VA funding fee?', 'Veterans receiving VA disability compensation, surviving spouses of veterans who died in the line of duty, and Purple Heart recipients on active duty are exempt from the VA funding fee. Credit score, loan usage count, and property type do not affect the exemption.', 'easy', 'government-loans', 462, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A veteran using the VA loan for the second time', false, 1), ('A veteran receiving VA disability compensation', true, 2), ('A veteran purchasing a second home', false, 3), ('A veteran with a credit score above 750', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'An investor sells a property and wants to defer capital gains through a 1031 exchange. She must close on the replacement property within:', 'In a 1031 exchange, the investor must identify replacement properties within 45 days and close within 180 days of the sale of the relinquished property (or by the tax return due date with extensions, whichever comes first). The 45-day and 180-day periods run concurrently from the date of sale.', 'medium', 'taxation', 463, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('45 days of selling the relinquished property', false, 1), ('90 days of selling the relinquished property', false, 2), ('180 days of selling the relinquished property (or the tax return due date, if earlier)', true, 3), ('365 days of selling the relinquished property', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A property produces $150,000 in gross income, has a 10% vacancy rate, and $55,000 in operating expenses. What is the NOI?', 'EGI = $150,000 - ($150,000 x 10%) = $150,000 - $15,000 = $135,000. NOI = EGI - Operating Expenses = $135,000 - $55,000 = $80,000. Remember that debt service, income taxes, and depreciation are NOT operating expenses and are not subtracted from NOI.', 'medium', 'investment', 464, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$80,000', true, 1), ('$95,000', false, 2), ('$135,000', false, 3), ('$75,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A property with an NOI of $48,000 sells for $600,000. An investor uses a cap rate of 8% to estimate value. The property is:', 'Value = NOI / Cap Rate = $48,000 / 0.08 = $600,000. Since the estimated value equals the sale price, the property is fairly priced at the investor''s required 8% return. If the investor required a higher return, the property would be overpriced; if a lower return was acceptable, it would appear underpriced.', 'easy', 'investment', 465, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Overpriced, because the cap rate suggests a value of $600,000', false, 1), ('Overpriced, because the cap rate suggests a value of $480,000', false, 2), ('Fairly priced, because $48,000 / $600,000 = 8%', true, 3), ('Underpriced, because the cap rate suggests a value of $720,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'In seller financing, which clause in the seller''s existing mortgage poses the greatest risk to the transaction?', 'The due-on-sale clause allows the existing lender to call the entire loan balance due upon transfer of ownership. In a wraparound or other seller financing arrangement where the seller''s original mortgage remains in place, the lender could discover the transfer and demand full repayment, potentially causing the seller to default.', 'hard', 'creative-financing', 466, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Prepayment penalty clause', false, 1), ('Due-on-sale (alienation) clause', true, 2), ('Subordination clause', false, 3), ('Habendum clause', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Commercial (nonresidential) real property is depreciated over how many years for federal tax purposes?', 'Nonresidential (commercial) real property is depreciated over 39 years using the straight-line method. Residential rental property is depreciated over 27.5 years. Land is never depreciable. The 15-year recovery period applies to certain land improvements such as landscaping and parking lots.', 'easy', 'taxation', 467, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('15 years', false, 1), ('27.5 years', false, 2), ('31.5 years', false, 3), ('39 years', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Under TRID, the Loan Estimate must be provided to the borrower within how many business days of receiving a loan application?', 'Under TRID, the lender must provide the Loan Estimate within 3 business days of receiving a completed loan application. The Loan Estimate replaced the old Good Faith Estimate and includes estimated loan terms, projected payments, and closing costs. The borrower must receive it at least 7 business days before closing.', 'medium', 'settlement', 468, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 business day', false, 1), ('3 business days', true, 2), ('5 business days', false, 3), ('7 business days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A Virginia homeowner sells their primary residence for $650,000 after living there for 4 years. They originally purchased it for $350,000. Filing as single, how much of the gain is taxable?', 'The total gain is $650,000 - $350,000 = $300,000. A single filer can exclude up to $250,000 of gain under Section 121 (2-of-5-year rule). The taxable gain is $300,000 - $250,000 = $50,000. A married couple filing jointly could exclude up to $500,000, which would make the entire gain tax-free.', 'hard', 'taxation', 469, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$0', false, 1), ('$50,000', true, 2), ('$300,000', false, 3), ('$150,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'In Virginia, the settlement agent is responsible for all of the following EXCEPT:', 'The settlement agent handles document preparation, fund disbursement, recording, and ensuring all conditions are met for closing. The appraisal is ordered by the lender and performed by a licensed appraiser, not the settlement agent. The settlement agent is neutral and works for all parties to facilitate the closing.', 'medium', 'settlement', 470, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Preparing the deed and closing documents', false, 1), ('Disbursing funds to the appropriate parties', false, 2), ('Determining the property''s fair market value through an appraisal', true, 3), ('Recording the deed and deed of trust in the land records', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A USDA guaranteed loan requires the borrower''s household income to be at or below what percentage of the area median income?', 'USDA guaranteed loan income limits are set at 115% of the area median income (AMI). The USDA direct loan program has lower income limits. Importantly, USDA counts all adult household income, not just the borrowers on the loan. Income limits vary by county and household size.', 'medium', 'government-loans', 471, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('80%', false, 1), ('100%', false, 2), ('115%', true, 3), ('150%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A property has a gross annual rental income of $96,000 and sold for $1,200,000. What is the Gross Rent Multiplier (GRM)?', 'GRM = Sale Price / Gross Annual Rental Income = $1,200,000 / $96,000 = 12.5. The GRM is a quick screening tool that does not account for expenses, vacancies, or financing. A lower GRM generally indicates better value relative to income.', 'easy', 'investment', 472, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('8', false, 1), ('10', false, 2), ('12.5', true, 3), ('15', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'In a Virginia non-judicial foreclosure, the trustee must advertise the sale in a newspaper for:', 'Virginia Code requires the trustee to advertise the foreclosure sale in a newspaper having general circulation in the area where the property is located once a week for two successive weeks. The sale cannot occur until at least 14 days after the first advertisement. Additional notice requirements apply, including notice to the borrower.', 'hard', 'post-closing', 473, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('At least once a week for two successive weeks', true, 1), ('At least once a week for four successive weeks', false, 2), ('A single advertisement at least 30 days before the sale', false, 3), ('No newspaper advertisement is required in Virginia', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A CMA differs from an appraisal in that a CMA:', 'A CMA is an informal market value estimate prepared by a real estate agent using comparable sales data. An appraisal is a formal opinion of value by a licensed or certified appraiser following USPAP (Uniform Standards of Professional Appraisal Practice). Lenders require appraisals, not CMAs, for loan underwriting. Agents must not represent a CMA as an appraisal.', 'medium', 'transaction', 474, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Must comply with USPAP standards', false, 1), ('Is an informal estimate prepared by a licensed agent, not a certified appraiser', true, 2), ('Can be used to satisfy lender requirements for underwriting', false, 3), ('Requires a physical inspection of comparable properties', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A property has an assessed value of $425,000. The local tax rate is $1.10 per $100 of assessed value. What is the annual property tax?', 'Annual property tax = ($425,000 / $100) x $1.10 = 4,250 x $1.10 = $4,675. Virginia property tax rates are commonly expressed in dollars per $100 of assessed value. This is a standard calculation tested on the Virginia licensing exam.', 'medium', 'taxation', 475, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$3,825', false, 1), ('$4,250', false, 2), ('$4,675', true, 3), ('$5,100', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'A buyer purchases a property using a lease-option. The $5,000 option consideration is typically:', 'The option consideration in a lease-option is typically non-refundable if the tenant/buyer decides not to exercise the option to purchase. If the buyer does exercise the option, the consideration may be credited toward the purchase price, depending on the terms of the agreement. This risk is an important disclosure point for agents working with lease-option buyers.', 'medium', 'creative-financing', 476, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refundable if the buyer decides not to purchase', false, 1), ('Non-refundable if the buyer decides not to exercise the option', true, 2), ('Applied to the monthly rent only', false, 3), ('Held by the county clerk''s office', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Virginia''s grantor''s tax on a property that sells for $500,000 would be:', 'Virginia''s state grantor''s tax is $0.50 per $500 of consideration, or equivalently $1.00 per $1,000. For a $500,000 sale: $500,000 / $1,000 x $1.00 = $500. Some localities impose an additional local grantor''s tax (commonly $0.50 per $500 in Northern Virginia). The grantor''s tax is customarily paid by the seller.', 'hard', 'settlement', 477, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$250', false, 1), ('$500', true, 2), ('$1,000', false, 3), ('$2,500', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Positive leverage in real estate investing occurs when:', 'Positive leverage occurs when the overall rate of return on the property (cap rate) exceeds the interest rate (cost of borrowing). In this scenario, the borrowed funds generate more return than they cost, amplifying the investor''s return on equity. Negative leverage occurs when borrowing costs exceed the property''s return.', 'hard', 'investment', 478, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property increases in value over time', false, 1), ('The return on the total investment exceeds the cost of borrowing', true, 2), ('The investor pays all cash for the property', false, 3), ('The property''s operating expenses decrease', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'Under Virginia''s New Home Warranties Act, the builder''s warranty on major systems (plumbing, electrical, HVAC) lasts:', 'Virginia''s New Home Warranties Act provides three tiers of warranty coverage: workmanship and materials for 1 year, major systems (plumbing, electrical, HVAC) for 2 years, and structural defects for 5 years. These run from the date of settlement, not the date of construction completion.', 'medium', 'post-closing', 479, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('1 year', false, 1), ('2 years', true, 2), ('5 years', false, 3), ('10 years', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-910'), 'mock_exam', 'An FHA 203(k) loan is specifically designed for:', 'The FHA 203(k) rehabilitation loan finances both the purchase price and the cost of renovations in a single mortgage. This is particularly useful for buyers purchasing fixer-upper properties. The standard FHA purchase loan is the 203(b), the 234(c) is for condominiums, and the HECM is the reverse mortgage program.', 'easy', 'government-loans', 480, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Purchasing a condominium unit', false, 1), ('Financing both the purchase and renovation of a property in a single mortgage', true, 2), ('Reverse mortgage borrowers aged 62 and older', false, 3), ('Purchasing vacant land for future construction', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'A Class B office building is BEST described as:', 'Class B office buildings offer functional space at moderate rents. They may be older Class A buildings that have not been renovated or newer buildings in secondary locations. Investors often target them for value-add strategies because renovations can push them toward Class A status.', 'easy', 'commercial-property-types', 481, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A premier building in a prime location with top-tier finishes and advanced infrastructure', false, 1), ('A functional building offering moderate rents, often targeted by value-add investors', true, 2), ('An older building in a less desirable location requiring significant capital improvements', false, 3), ('A mixed-use building that combines retail and office space in a single structure', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'In a retail shopping center, an anchor tenant is significant primarily because the anchor:', 'An anchor tenant is a large, well-known retailer whose presence draws foot traffic that benefits smaller tenants. Lease agreements often include co-tenancy clauses allowing smaller tenants to reduce rent or exit their lease if the anchor tenant leaves. Anchor tenants actually often pay lower per-square-foot rent due to their drawing power.', 'easy', 'commercial-property-types', 482, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Pays the highest rent per square foot of any tenant in the center', false, 1), ('Draws foot traffic that benefits smaller tenants throughout the center', true, 2), ('Owns a portion of the shopping center through a joint venture', false, 3), ('Is required by Virginia zoning law in centers over 100,000 square feet', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'Which type of industrial property combines office and warehouse space and is often used by technology firms or light assembly operations?', 'Flex space is a hybrid building type that combines office and warehouse space. It is commonly used by technology firms, light assembly operations, or research companies. Distribution centers and manufacturing facilities are dedicated-use industrial properties.', 'easy', 'commercial-property-types', 483, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Distribution center', false, 1), ('Manufacturing facility', false, 2), ('Flex space', true, 3), ('Power center', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'Multifamily residential buildings are classified as commercial for financing purposes when they contain:', 'Buildings with five or more residential units are classified as commercial for financing purposes. Properties with 1-4 units are classified as residential. This distinction affects loan products, underwriting standards, and regulatory requirements.', 'medium', 'commercial-property-types', 484, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('2 or more units', false, 1), ('4 or more units', false, 2), ('5 or more units', true, 3), ('10 or more units', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'A developer wants to build a walkable community with retail, office, and residential all in separate buildings within the same project. This is an example of:', 'Horizontal mixed-use separates different uses into different buildings within a single development. Vertical mixed-use stacks different uses within a single building (e.g., retail on the ground floor, office in the middle, residential on top).', 'medium', 'commercial-property-types', 485, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Vertical mixed-use development', false, 1), ('Horizontal mixed-use development', true, 2), ('Transit-oriented development', false, 3), ('Adaptive reuse', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'Revenue Per Available Room (RevPAR) is calculated by multiplying:', 'RevPAR is the key performance metric for hotel properties, calculated as Average Daily Rate (ADR) multiplied by the occupancy rate. It captures both pricing power and occupancy performance in a single number, making it the standard benchmark for hotel valuation.', 'medium', 'commercial-property-types', 486, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Total rooms by the nightly rate', false, 1), ('Average daily rate (ADR) by the occupancy rate', true, 2), ('Net operating income by the capitalization rate', false, 3), ('Gross revenue by the number of available rooms', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'A Virginia developer plans to convert a historic warehouse into loft apartments with ground-floor retail. To offset rehabilitation costs, the developer can combine the federal historic tax credit with the Virginia historic rehabilitation tax credit for a combined offset of:', 'The federal historic tax credit provides a 20% credit on qualified rehabilitation expenditures for certified historic structures, and Virginia offers an additional 25% state tax credit. Combined, developers can offset 45% of rehabilitation costs, making Virginia one of the most favorable states for adaptive reuse projects.', 'hard', 'commercial-property-types', 487, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('20% of qualified rehabilitation expenditures', false, 1), ('25% of qualified rehabilitation expenditures', false, 2), ('45% of qualified rehabilitation expenditures', true, 3), ('50% of qualified rehabilitation expenditures', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'An ambulatory surgery center (ASC) in Virginia must obtain which document from the Virginia Department of Health before it can operate?', 'Virginia requires ambulatory surgery centers to obtain a certificate of need (CON) from the Virginia Department of Health. The CON process evaluates whether the community needs the facility, which directly affects the property''s value and marketability. This is a regulatory requirement specific to healthcare facilities.', 'hard', 'commercial-property-types', 488, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A commercial use permit', false, 1), ('A certificate of need (CON)', true, 2), ('A conditional use variance', false, 3), ('A DPOR medical facility license', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'A property that includes a hotel brand, management team, furnishings, and the real estate itself is valued using the concept of:', 'Going-concern value includes the value of the business operation (brand, management, furnishings, franchise agreement) in addition to the real estate itself. Hotels and other special purpose properties are typically valued as going concerns because the business and the real estate are intertwined.', 'medium', 'commercial-property-types', 489, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Replacement cost', false, 1), ('Going-concern value', true, 2), ('Insurable value', false, 3), ('Assessed value', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-types'), 'chapter_quiz', 'Which zoning approach regulates building form (height, setback, frontage) rather than land use, making mixed-use development easier to approve?', 'Form-based codes regulate the physical form of buildings rather than separating land uses into distinct zones. Many Virginia localities have adopted form-based codes to facilitate mixed-use development. Traditional Euclidean zoning separates uses into residential, commercial, and industrial zones.', 'hard', 'commercial-property-types', 490, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Euclidean zoning', false, 1), ('Planned unit development (PUD)', false, 2), ('Form-based code', true, 3), ('Overlay district', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'In a triple net (NNN) lease, the tenant is responsible for paying base rent PLUS:', 'A triple net (NNN) lease requires the tenant to pay base rent plus the three "nets": property taxes, insurance, and maintenance (including common area upkeep). Debt service is never a tenant responsibility. NNN leases are the most common structure for single-tenant retail and industrial properties.', 'easy', 'commercial-leases', 491, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Property taxes only', false, 1), ('Property taxes and insurance only', false, 2), ('Property taxes, insurance, and maintenance', true, 3), ('All expenses including debt service on the landlord''s mortgage', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A gross lease is also commonly referred to as a:', 'A gross lease is also called a full-service lease because the tenant pays a single, all-inclusive rental amount, and the landlord pays all operating expenses. Gross leases are most common in multi-tenant office buildings. A bondable lease is an absolute net lease, and a step-up lease involves fixed rent increases.', 'easy', 'commercial-leases', 492, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Bondable lease', false, 1), ('Full-service lease', true, 2), ('Percentage lease', false, 3), ('Step-up lease', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A retail tenant pays $60,000 per year in base rent under a percentage lease with a 6% rate. What is the natural breakpoint?', 'The natural breakpoint is calculated by dividing annual base rent by the percentage rate: $60,000 / 0.06 = $1,000,000. The tenant pays 6% of gross sales only on the amount exceeding $1,000,000. Below the breakpoint, the tenant pays only base rent.', 'medium', 'commercial-leases', 493, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$360,000', false, 1), ('$600,000', false, 2), ('$1,000,000', true, 3), ('$1,200,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'In a gross lease with a base year provision, the tenant pays its proportionate share of:', 'A base year provision in a gross lease means the landlord covers operating expenses up to the amount incurred in the first year (the base year). In subsequent years, the tenant pays its proportionate share of any increases above that baseline. This protects the landlord from rising costs while giving the tenant predictable first-year occupancy costs.', 'medium', 'commercial-leases', 494, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('All operating expenses from the first day of the lease', false, 1), ('Operating expense increases above the amount incurred in the first year of the lease', true, 2), ('Only property taxes and insurance above the base year amount', false, 3), ('A fixed dollar amount that escalates 3% annually', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A tenant leases 4,000 square feet in a 100,000-square-foot shopping center. Total annual CAM expenses are $250,000. What is the tenant''s annual CAM obligation?', 'The tenant''s pro rata share is 4,000 / 100,000 = 4%. The annual CAM obligation is 4% of $250,000 = $10,000, or approximately $833 per month. Pro rata share is the standard method for allocating CAM charges among tenants in a multi-tenant property.', 'medium', 'commercial-leases', 495, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$4,000', false, 1), ('$10,000', true, 2), ('$25,000', false, 3), ('$40,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'The difference between usable square footage and rentable square footage is expressed as the:', 'The load factor (also called the common area factor or add-on factor) represents the difference between usable and rentable square footage. Rentable SF = Usable SF x (1 + Load Factor). A building with a 15% load factor means a tenant occupying 1,000 usable SF is billed for 1,150 rentable SF. Load factors in office buildings typically range from 10% to 20%.', 'medium', 'commercial-leases', 496, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Capitalization rate', false, 1), ('Vacancy rate', false, 2), ('Load factor', true, 3), ('Absorption rate', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A CAM cap is designed to protect the:', 'A CAM cap limits the annual increase in controllable CAM expenses, typically to 3-5% per year, protecting tenants from unpredictable cost spikes. Non-controllable expenses such as property taxes, insurance, and utilities are usually excluded from the cap because the landlord cannot control them.', 'easy', 'commercial-leases', 497, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Landlord from tenants who default on CAM payments', false, 1), ('Tenant from sharp, unpredictable increases in controllable CAM expenses', true, 2), ('Property manager from liability for incorrect CAM calculations', false, 3), ('Lender from insufficient property income', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A tenant improvement (TI) allowance is BEST described as:', 'A TI allowance is a dollar amount (usually expressed per square foot) that the landlord contributes toward the cost of building out or customizing the space for the tenant. TI allowances are negotiated as part of the lease and are one of the most significant economic terms in a commercial deal. They are different from free rent (abated rent), which is a period when no rent is due.', 'easy', 'commercial-leases', 498, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A reduction in base rent during the first year of occupancy', false, 1), ('A dollar amount the landlord contributes toward customizing the space for the tenant''s use', true, 2), ('A security deposit held in escrow for property maintenance', false, 3), ('An insurance policy covering damage to tenant fixtures', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'A retail tenant''s percentage lease has a $48,000 annual base rent, a 6% percentage rate, and an artificial breakpoint of $900,000. If the tenant''s annual gross sales are $1,100,000, what is the total annual rent?', 'Total rent = base rent + percentage rent above the breakpoint. Sales above the artificial breakpoint: $1,100,000 - $900,000 = $200,000. Percentage rent: $200,000 x 6% = $12,000. Total annual rent: $48,000 + $12,000 = $60,000. Note the artificial breakpoint ($900,000) differs from the natural breakpoint ($48,000 / 0.06 = $800,000).', 'hard', 'commercial-leases', 499, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$48,000', false, 1), ('$54,000', false, 2), ('$60,000', true, 3), ('$114,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-leases'), 'chapter_quiz', 'Which expenses should NEVER be included in Common Area Maintenance (CAM) charges passed through to tenants?', 'CAM charges should not include capital improvements that benefit the landlord beyond normal maintenance, costs of leasing vacant space (commissions, tenant improvements), the landlord''s income taxes, or debt service. These are ownership costs, not operating expenses shared by tenants. Sophisticated tenants negotiate the right to audit CAM statements to verify compliance.', 'hard', 'commercial-leases', 500, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Parking lot maintenance and landscaping', false, 1), ('Security, janitorial services, and common area utilities', false, 2), ('Leasing commissions, capital improvements benefiting the landlord, and debt service', true, 3), ('Property management fees and snow removal', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'In a real estate syndication, the party who identifies the property, arranges financing, and manages the investment is called the:', 'In a syndication, the general partner (syndicator or sponsor) identifies the property, arranges financing, manages the investment, and makes day-to-day decisions. Limited partners provide capital but have no active management role and enjoy limited liability. The syndicator typically earns fees and a promoted interest (carry) in addition to any equity investment.', 'easy', 'investment-strategies', 501, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Limited partner', false, 1), ('General partner (syndicator)', true, 2), ('Trustee', false, 3), ('Property manager', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'A Real Estate Investment Trust (REIT) must distribute at least what percentage of its taxable income to shareholders to maintain its tax-advantaged status?', 'To qualify as a REIT and avoid corporate-level income tax, the entity must distribute at least 90% of its taxable income to shareholders as dividends. REITs must also derive at least 75% of gross income from real estate sources and have at least 75% of total assets in real estate, cash, or government securities.', 'medium', 'investment-strategies', 502, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('50%', false, 1), ('75%', false, 2), ('90%', true, 3), ('100%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'Which type of REIT invests primarily in mortgage-backed securities and real estate loans rather than physical properties?', 'Mortgage REITs (mREITs) invest in mortgages, mortgage-backed securities, and real estate debt rather than owning physical properties. They earn income from the interest on these financial instruments. Equity REITs own and operate income-producing real estate. Hybrid REITs combine both equity ownership and mortgage lending.', 'easy', 'investment-strategies', 503, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Equity REIT', false, 1), ('Mortgage REIT', true, 2), ('Hybrid REIT', false, 3), ('Private REIT', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'Real estate crowdfunding allows investors to participate in commercial real estate deals through online platforms. Offerings to non-accredited investors are typically made under:', 'SEC Regulation Crowdfunding (Reg CF) allows issuers to raise capital from both accredited and non-accredited investors through registered online platforms, with investment limits based on income and net worth. Regulation D offerings are generally limited to accredited investors. Regulation A+ allows larger offerings but has more extensive filing requirements.', 'hard', 'investment-strategies', 504, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('SEC Regulation A+', false, 1), ('SEC Regulation D, Rule 506(b)', false, 2), ('SEC Regulation Crowdfunding (Reg CF)', true, 3), ('SEC Regulation S', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'An investor purchases a property for $1,000,000 with $250,000 in cash and a $750,000 mortgage. The property generates $60,000 in annual pre-tax cash flow after debt service. What is the cash-on-cash return?', 'Cash-on-cash return = Annual Pre-Tax Cash Flow / Total Cash Invested. $60,000 / $250,000 = 24%. This metric measures the actual return on the investor''s equity, unlike cap rate, which ignores financing. It is one of the most commonly used metrics by real estate investors to evaluate leveraged deals.', 'medium', 'investment-strategies', 505, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('6%', false, 1), ('8%', false, 2), ('24%', true, 3), ('60%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'Interest rate risk in real estate investing refers to the risk that:', 'Interest rate risk is the danger that rising rates will increase the cost of financing (especially for variable-rate loans) and compress property values (because higher cap rates produce lower values). The inability to sell quickly is liquidity risk, and tenant default is credit risk.', 'medium', 'investment-strategies', 506, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property will not generate enough income to cover operating expenses', false, 1), ('Rising interest rates will increase borrowing costs and reduce property values', true, 2), ('The investor cannot sell the property quickly without a significant price reduction', false, 3), ('Tenants will default on their lease obligations', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'The Debt Service Coverage Ratio (DSCR) is calculated by dividing:', 'DSCR = NOI / Annual Debt Service (mortgage payments). Lenders typically require a DSCR of 1.20 to 1.25 or higher. A DSCR below 1.0 means the property does not generate enough income to cover its mortgage payments, which is a serious red flag for lenders.', 'easy', 'investment-strategies', 507, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Gross income by total operating expenses', false, 1), ('Net operating income by annual debt service', true, 2), ('Purchase price by the loan amount', false, 3), ('Cash flow after debt service by total cash invested', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'Which investment metric accounts for the time value of money and considers all future cash flows, including the eventual sale of the property?', 'The Internal Rate of Return (IRR) is the discount rate that makes the net present value of all future cash flows (including operating income and the sale proceeds) equal to zero. It accounts for the time value of money and is considered the most comprehensive measure of investment performance.', 'medium', 'investment-strategies', 508, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Capitalization rate', false, 1), ('Cash-on-cash return', false, 2), ('Internal rate of return (IRR)', true, 3), ('Gross rent multiplier', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'An investor is concerned about the risk that a property cannot be sold quickly without a significant price reduction. This is an example of:', 'Liquidity risk is the risk that an investor cannot convert the real estate investment to cash quickly without accepting a significant discount from fair market value. Real estate is inherently less liquid than stocks or bonds because transactions take weeks or months to complete and require substantial transaction costs.', 'easy', 'investment-strategies', 509, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Market risk', false, 1), ('Interest rate risk', false, 2), ('Liquidity risk', true, 3), ('Legislative risk', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'real-estate-investment-strategies'), 'chapter_quiz', 'A property has an NOI of $150,000 and a cap rate of 6%. What is the property''s estimated value?', 'Value = NOI / Cap Rate = $150,000 / 0.06 = $2,500,000. A lower cap rate indicates lower perceived risk and results in a higher property value. If the cap rate were 8%, the same property would be valued at only $1,875,000. This formula is the cornerstone of commercial real estate valuation.', 'medium', 'investment-strategies', 510, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$900,000', false, 1), ('$2,000,000', false, 2), ('$2,500,000', true, 3), ('$9,000,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'In Virginia, a person who manages real property for compensation on behalf of a property owner must hold a:', 'Virginia law requires anyone who manages real property for compensation on behalf of a property owner to hold a Virginia real estate license. Property management activities such as collecting rent, negotiating leases, and advertising rentals are considered real estate activities under Virginia Code. Exemptions are limited and narrowly defined.', 'easy', 'property-management', 511, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('General contractor''s license', false, 1), ('Virginia real estate license', true, 2), ('Property management certificate from NAR', false, 3), ('Business license only; no real estate license is required', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property management agreement should include all of the following EXCEPT:', 'A property management agreement should define the manager''s authority, compensation, term, termination provisions, reporting requirements, and insurance obligations. It should never guarantee specific occupancy rates or rental income, as these depend on market conditions outside the manager''s control. Such guarantees could expose the manager to breach of contract claims.', 'medium', 'property-management', 512, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The scope of the manager''s authority and responsibilities', false, 1), ('The compensation structure and fee schedule', false, 2), ('A guarantee of a specific occupancy rate or rental income', true, 3), ('The term of the agreement and termination provisions', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property manager''s fiduciary duty of accounting requires the manager to:', 'The fiduciary duty of accounting requires property managers to keep accurate records of all income and expenses, maintain tenant security deposits in accordance with Virginia law, and provide regular financial reports to the property owner. This duty is fundamental to the trust relationship between manager and owner.', 'easy', 'property-management', 513, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Maximize rental income above all other considerations', false, 1), ('Maintain accurate financial records and provide regular reports to the owner', true, 2), ('Pay all property expenses from the manager''s personal funds', false, 3), ('Disclose the owner''s financial situation to prospective tenants', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'Under the Virginia Residential Landlord and Tenant Act (VRLTA), a landlord may charge a maximum security deposit of:', 'Under the VRLTA (Virginia Code 55.1-1226), a landlord may not demand or receive a security deposit in excess of two months'' periodic rent. The deposit must be held in a separate escrow account in a Virginia financial institution, and the landlord must return the deposit (less any lawful deductions) within 45 days of move-out.', 'medium', 'property-management', 514, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One month''s rent', false, 1), ('Two months'' rent', true, 2), ('Three months'' rent', false, 3), ('There is no maximum; it is negotiable', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property manager discovers that a rental property has a serious mold problem that could affect tenant health. The manager''s duty is to:', 'Property managers have a fiduciary duty to the owner and a legal obligation to maintain habitable premises for tenants. Upon discovering a serious health hazard like mold, the manager must immediately notify the owner and take appropriate steps to address the problem. Failure to act could result in liability under the VRLTA, personal injury claims, and license disciplinary action.', 'medium', 'property-management', 515, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Wait until the tenant complains before taking action', false, 1), ('Immediately notify the owner and take steps to address the health hazard', true, 2), ('Offer the tenant a rent reduction and note the issue in the file', false, 3), ('Disclose the issue only if the tenant asks directly', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'Under the VRLTA, after a tenant vacates, the landlord must return the security deposit (less lawful deductions) within:', 'Under the VRLTA, the landlord must return the security deposit, with an itemized list of any deductions, within 45 days of the tenant vacating the property and delivering possession. Failure to comply may result in the landlord forfeiting the right to withhold any portion of the deposit and being liable for actual damages to the tenant.', 'medium', 'property-management', 516, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('15 days', false, 1), ('30 days', false, 2), ('45 days', true, 3), ('60 days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'Which of the following is an exempt activity that does NOT require a Virginia real estate license for property management?', 'Property owners managing their own property are exempt from the licensing requirement because they are not acting on behalf of another for compensation. Additionally, employees who perform only maintenance or clerical tasks (not leasing or management decisions) at the direction of a licensee may not need a license, though the licensee supervising them remains responsible.', 'hard', 'property-management', 517, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Collecting rent and negotiating leases for an owner', false, 1), ('Advertising rental properties and showing units to prospective tenants', false, 2), ('An owner managing their own property without compensation from a third party', true, 3), ('Performing maintenance at the direction of a licensed property manager', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property manager who commingles tenant security deposits with operating funds has violated the duty of:', 'Commingling tenant security deposits with operating funds violates the fiduciary duty of accounting. Virginia law requires security deposits to be held in a separate escrow account in a Virginia financial institution. Commingling is one of the most common violations that leads to disciplinary action by the Virginia Real Estate Board.', 'easy', 'property-management', 518, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Loyalty', false, 1), ('Disclosure', false, 2), ('Accounting', true, 3), ('Obedience', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property management agreement that allows the manager to make emergency repairs up to $2,500 without prior owner approval is an example of:', 'Management agreements should clearly define the manager''s spending authority, including emergency repair thresholds. A provision allowing repairs up to a specified amount without prior approval is a common and prudent contract term that enables the manager to respond to emergencies without delay. This authority is granted by the agreement, not mandated by law.', 'hard', 'property-management', 519, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Unauthorized practice', false, 1), ('A defined scope of authority within the management agreement', true, 2), ('A violation of the manager''s fiduciary duty of obedience', false, 3), ('An automatic provision required by the VRLTA', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'commercial-property-management'), 'chapter_quiz', 'A property manager who accepts a kickback from a maintenance vendor without the owner''s knowledge has violated the fiduciary duty of:', 'The fiduciary duty of loyalty requires the property manager to place the owner''s interests above their own and avoid conflicts of interest. Accepting undisclosed kickbacks or referral fees from vendors is a direct violation of this duty. The manager must disclose all potential conflicts and any compensation received from third parties related to the managed property.', 'hard', 'property-management', 520, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Obedience', false, 1), ('Accounting', false, 2), ('Loyalty', true, 3), ('Care', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Errors and Omissions (E&O) insurance protects a real estate licensee against claims arising from:', 'E&O insurance covers claims of negligence, errors, or omissions in professional services, such as providing incorrect information about a property, failing to disclose a material fact, or making a mistake in contract preparation. It does not cover intentional fraud, criminal acts, or bodily injury (which is covered by general liability insurance).', 'easy', 'risk-management', 521, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Physical injuries sustained by a client during a property showing', false, 1), ('Negligent acts, errors, or omissions in the performance of professional duties', true, 2), ('Property damage caused by the licensee to a client''s home', false, 3), ('Criminal fraud committed intentionally by the licensee', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Competing real estate brokerages in a market agree to charge the same commission rate. This is an example of:', 'Price fixing occurs when competing businesses agree to set prices, fees, or commission rates rather than allowing the market to determine them. The Sherman Antitrust Act makes price fixing a criminal offense. Commission rates must always be negotiable between the brokerage and the client. Even informal discussions or "standard" rates among competitors can be evidence of price fixing.', 'easy', 'risk-management', 522, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Market allocation', false, 1), ('A group boycott', false, 2), ('Price fixing', true, 3), ('A tie-in arrangement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Several brokerages agree to refuse to cooperate with or show listings from a discount brokerage. This is an example of:', 'A group boycott occurs when two or more competitors agree to refuse to do business with a specific person or company to harm that party''s ability to compete. Refusing to cooperate with a discount brokerage is a classic example. Group boycotts violate the Sherman Antitrust Act and can result in criminal penalties and treble (triple) damages in civil suits.', 'medium', 'risk-management', 523, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Price fixing', false, 1), ('A group boycott', true, 2), ('A tie-in arrangement', false, 3), ('Market allocation', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Two competing brokerages agree that one will handle all listings on the north side of town while the other handles the south side. This is an example of:', 'Market allocation occurs when competitors agree to divide markets among themselves by geography, price range, or property type. This eliminates competition within each allocated segment. Like price fixing and group boycotts, market allocation is a per se violation of the Sherman Antitrust Act, meaning no justification or defense is accepted.', 'medium', 'risk-management', 524, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Price fixing', false, 1), ('A group boycott', false, 2), ('Market allocation', true, 3), ('A tie-in arrangement', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'A broker requires a buyer to use the broker''s affiliated title company as a condition of the broker''s representation. This is an example of:', 'A tie-in arrangement (or tying agreement) occurs when a party conditions the sale of one product or service on the purchase of another. Requiring a client to use an affiliated service provider as a condition of representation violates antitrust law. Brokers may recommend affiliated services but must disclose the relationship and cannot require their use. RESPA also prohibits such arrangements.', 'medium', 'risk-management', 525, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Price fixing', false, 1), ('A group boycott', false, 2), ('Market allocation', false, 3), ('A tie-in arrangement', true, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'The key distinction between fraud and negligent misrepresentation is:', 'Fraud requires a knowing, intentional misstatement of material fact made with the intent to deceive, upon which the victim reasonably relies to their detriment. Negligent misrepresentation involves a false statement made carelessly or without reasonable grounds for believing it to be true, without intent to deceive. Both can result in liability, but fraud can also carry criminal penalties.', 'medium', 'risk-management', 526, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Fraud involves real property; misrepresentation involves personal property', false, 1), ('Fraud requires intent to deceive; negligent misrepresentation involves carelessness without intent', true, 2), ('Fraud is a civil matter; misrepresentation is always criminal', false, 3), ('There is no distinction; the terms are interchangeable', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Under the Sherman Antitrust Act, a party found guilty of antitrust violations may be subject to:', 'The Sherman Antitrust Act carries severe penalties. Corporations can face fines up to $100 million per violation, and individuals can face up to $1 million in fines and up to 10 years in prison. In civil suits, victims can recover treble (triple) damages. These penalties reflect how seriously the government treats competition violations.', 'hard', 'risk-management', 527, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A fine up to $1,000 and 30 days in jail', false, 1), ('Criminal penalties including fines up to $100 million for corporations and imprisonment for individuals', true, 2), ('Civil penalties only; antitrust violations are never criminal', false, 3), ('Loss of real estate license but no financial penalties', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'A licensee tells a prospective buyer that a property has "no foundation issues" without actually inspecting the foundation or reviewing any inspection reports. The property later turns out to have significant foundation damage. This is MOST likely:', 'Making a definitive statement about property condition without verification constitutes negligent misrepresentation. The licensee did not intend to deceive (which would be fraud), but made a careless factual assertion without reasonable grounds for believing it to be true. Licensees should never make definitive statements about conditions they have not personally verified or that are beyond their expertise.', 'hard', 'risk-management', 528, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Puffing, which is legally permissible', false, 1), ('Negligent misrepresentation', true, 2), ('Intentional fraud', false, 3), ('A permissible opinion about property condition', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'Which of the following statements about commission rates is TRUE under federal antitrust law?', 'Commission rates are always negotiable. There is no "standard" commission rate set by the MLS, NAR, or state law. Any suggestion that rates are fixed, standard, or set by anyone other than the individual brokerage and client is a potential antitrust violation. Licensees must never discuss commission rates with competing brokerages.', 'easy', 'risk-management', 529, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The local MLS sets standard commission rates for all member brokerages', false, 1), ('Commission rates are always 6% as established by industry practice', false, 2), ('Commission rates are always negotiable between the brokerage and the client', true, 3), ('State law sets minimum commission rates that all brokerages must follow', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'risk-management-insurance'), 'chapter_quiz', 'A licensee can BEST reduce the risk of a negligent misrepresentation claim by:', 'The best risk reduction strategy combines thorough documentation, fact verification, clear communication about the limits of the licensee''s expertise, and recommending that clients obtain professional inspections and advice. E&O insurance provides financial protection after a claim, but prevention through proper practice is always the first line of defense.', 'hard', 'risk-management', 530, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Including a general disclaimer in all marketing materials', false, 1), ('Referring all questions to the seller and refusing to answer buyer inquiries', false, 2), ('Documenting all representations, verifying facts, and recommending professional inspections', true, 3), ('Purchasing the maximum E&O coverage available', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Under VREB regulation 18 VAC 135-20-180, all real estate advertising by a licensee must include:', 'VREB regulation 18 VAC 135-20-180 requires that all advertising by a licensee include the name of the brokerage firm as licensed with the Virginia Real Estate Board. The brokerage name must be clearly and legibly displayed. A licensee may include their own name, but the brokerage name is mandatory in all advertising, including online and social media.', 'easy', 'advertising-technology', 531, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The licensee''s personal phone number and home address', false, 1), ('The name of the brokerage firm as licensed with the Board', true, 2), ('The licensee''s license number and expiration date', false, 3), ('The MLS listing number and commission rate offered', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'A Virginia licensee creates a personal real estate page on social media. Under VREB advertising rules, the page MUST:', 'All advertising by a Virginia licensee, including social media profiles and posts, must include the brokerage firm name as licensed with the Board. This requirement applies to every platform: Facebook, Instagram, LinkedIn, TikTok, YouTube, personal websites, and any other medium where the licensee promotes real estate services.', 'medium', 'advertising-technology', 532, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Use only the licensee''s legal name as registered with DPOR', false, 1), ('Display the brokerage firm name as licensed with the Board', true, 2), ('Include a link to the DPOR website for license verification', false, 3), ('Be reviewed and approved by the principal broker before posting', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Internet Data Exchange (IDX) allows:', 'IDX (Internet Data Exchange) is a policy and technology framework that allows MLS participants to display each other''s active listings on their websites and apps, with proper attribution to the listing broker. IDX expanded consumer access to listing data while maintaining the cooperative nature of the MLS. Listings must be attributed to the listing broker, not presented as the displaying broker''s own listings.', 'medium', 'advertising-technology', 533, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Licensees to display other brokers'' MLS listings on their own websites with proper attribution', true, 1), ('Consumers to directly access the full MLS database without a licensee', false, 2), ('Brokerages to share commission rate information with competing firms', false, 3), ('Property owners to list their homes on the MLS without a licensee', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Under the federal Do Not Call (DNC) rules, a real estate licensee may call a consumer on the National Do Not Call Registry if:', 'An established business relationship (EBR) is one of the limited exceptions to the DNC rules. If a consumer has had a transaction with the licensee within the past 18 months, or made an inquiry or application within the past 3 months, the licensee may call even if the number is on the DNC Registry. The consumer can still request to be placed on the licensee''s internal DNC list.', 'medium', 'advertising-technology', 534, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The licensee has a valid real estate license', false, 1), ('The consumer has an established business relationship with the licensee', true, 2), ('The call is made before 9:00 AM local time', false, 3), ('The licensee identifies themselves as a licensed agent at the start of the call', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Under the CAN-SPAM Act, commercial email from a real estate licensee must include all of the following EXCEPT:', 'The CAN-SPAM Act requires commercial emails to include a valid physical postal address, a clear opt-out mechanism that is honored within 10 business days, accurate header and "From" information, and identification that the message is an advertisement. While VREB requires the brokerage name in advertising, the CAN-SPAM Act does not specifically require a license number.', 'hard', 'advertising-technology', 535, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A valid physical postal address of the sender', false, 1), ('A clear and conspicuous opt-out mechanism', false, 2), ('The licensee''s real estate license number', true, 3), ('An accurate "From" line identifying who sent the message', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'A licensee creates a virtual tour of a listed property. Under Virginia advertising rules, the virtual tour:', 'Virtual tours are considered advertising and must comply with all VREB advertising regulations. They must accurately represent the property''s current condition and include the brokerage firm name. Digitally altering images to misrepresent the property (adding rooms, removing defects, enhancing views) constitutes misleading advertising and potentially fraud.', 'medium', 'advertising-technology', 536, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Is exempt from advertising regulations because it is a technology tool, not an advertisement', false, 1), ('Must accurately represent the current condition of the property', true, 2), ('May include digitally enhanced features as long as a disclaimer is present', false, 3), ('Can only be published on the MLS, not on social media', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'A Virginia licensee wants to send unsolicited text messages to potential clients about available properties. Under federal law, the licensee:', 'The Telephone Consumer Protection Act (TCPA) requires prior express written consent before sending marketing text messages or making autodialed calls to cell phones. Violations carry penalties of $500 to $1,500 per message. This is a stricter standard than the DNC rules for voice calls, which allow calls based on an established business relationship.', 'hard', 'advertising-technology', 537, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('May send texts freely as long as they include an opt-out option', false, 1), ('Must obtain prior express written consent before sending marketing text messages', true, 2), ('May send up to 5 texts per month to any phone number', false, 3), ('May send texts only during business hours (9 AM to 5 PM)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Which of the following social media posts by a Virginia licensee would violate VREB advertising regulations?', 'Any social media content that promotes the licensee''s real estate services or properties must include the brokerage firm name. Even "temporary" content like Instagram stories must comply. The VREB does not distinguish between permanent posts and ephemeral content when it comes to advertising requirements.', 'easy', 'advertising-technology', 538, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A post showing a sold property with the brokerage name and "Just Sold!" caption', false, 1), ('A personal Instagram story promoting a listing without mentioning the brokerage name', true, 2), ('A LinkedIn article about market trends that includes the licensee''s brokerage affiliation', false, 3), ('A Facebook live tour of a property with the brokerage logo visible on screen', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'Under DNC rules, telemarketing calls to consumers may only be placed between:', 'FTC telemarketing rules prohibit calling consumers before 8:00 AM or after 9:00 PM in the consumer''s local time zone. The relevant time zone is the consumer''s, not the caller''s. Violations can result in fines of up to $50,120 per call. Licensees must track the time zones of the people they are calling.', 'easy', 'advertising-technology', 539, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('7:00 AM and 10:00 PM in the caller''s time zone', false, 1), ('8:00 AM and 9:00 PM in the consumer''s local time zone', true, 2), ('9:00 AM and 8:00 PM in the consumer''s local time zone', false, 3), ('9:00 AM and 5:00 PM in the caller''s time zone', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'virginia-advertising-technology-rules'), 'chapter_quiz', 'A licensee uses an automated email system to send just-listed alerts to their database of 500 contacts. After receiving the first email, a recipient requests to be removed from the list. Under the CAN-SPAM Act, the licensee must honor the opt-out request within:', 'The CAN-SPAM Act requires that opt-out requests be honored within 10 business days. The opt-out mechanism must be functional for at least 30 days after the email is sent. Once a consumer opts out, the sender may not send additional commercial messages or transfer the email address to another sender for marketing purposes.', 'hard', 'advertising-technology', 540, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('24 hours', false, 1), ('72 hours', false, 2), ('10 business days', true, 3), ('30 calendar days', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'The NAR Code of Ethics applies to:', 'The NAR Code of Ethics is a membership obligation that applies only to REALTORS (members of the National Association of REALTORS), not to all licensed real estate professionals. Not all licensees are REALTORS. However, Virginia license law and VREB regulations impose ethical and professional standards on all licensees regardless of NAR membership.', 'easy', 'professional-standards', 541, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('All licensed real estate agents in the United States', false, 1), ('Only members of the National Association of REALTORS', true, 2), ('Only brokers, not salespersons', false, 3), ('Only agents involved in residential transactions', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'Article 1 of the NAR Code of Ethics requires REALTORS to:', 'Article 1 is the foundational article of the NAR Code of Ethics. It pledges REALTORS to protect and promote the interests of their client while treating all parties to the transaction honestly. This duty to the client does not diminish the obligation to deal fairly with other parties.', 'medium', 'professional-standards', 542, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Charge fair and reasonable commission rates', false, 1), ('Protect and promote the interests of the client while treating all parties honestly', true, 2), ('Disclose their commission to all parties in a transaction', false, 3), ('Cooperate with all other REALTORS in every transaction', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'Under Virginia law, a principal broker''s supervisory responsibilities include all of the following EXCEPT:', 'The principal broker is responsible for supervising licensees, ensuring legal compliance, maintaining custody of escrow funds, and reviewing advertising. However, the broker is not required to personally attend every showing. Supervision means oversight, training, and systems to ensure compliance, not physical presence at every activity.', 'medium', 'professional-standards', 543, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Ensuring that all licensees under their supervision comply with Virginia real estate law', false, 1), ('Maintaining custody of all earnest money deposits and escrow funds', false, 2), ('Personally attending every property showing conducted by supervised licensees', true, 3), ('Reviewing advertising to ensure compliance with VREB regulations', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'A sphere of influence (SOI) marketing strategy focuses on:', 'Sphere of influence (SOI) marketing leverages the licensee''s existing relationships with friends, family, past clients, neighbors, and professional contacts. It is one of the most cost-effective lead generation strategies because referrals from trusted relationships convert at much higher rates than cold outreach.', 'easy', 'professional-standards', 544, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Purchasing online leads from third-party providers', false, 1), ('Building and maintaining relationships with people the licensee already knows', true, 2), ('Cold calling numbers from a purchased phone list', false, 3), ('Sending mass direct mail to every household in a ZIP code', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'Geographic farming as a real estate business strategy involves:', 'Geographic farming is a long-term strategy where a licensee focuses marketing efforts on a specific neighborhood, subdivision, or area. Over time, consistent outreach (mailers, door knocking, community involvement, market reports) builds name recognition and positions the licensee as the go-to expert for that area. Successful farming requires patience and a 6-12 month commitment before results appear.', 'easy', 'professional-standards', 545, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Investing in agricultural real estate', false, 1), ('Consistently marketing to a specific neighborhood or area to become the recognized local expert', true, 2), ('Only working with properties zoned for agricultural use', false, 3), ('Partnering with local farmers for cross-promotional marketing', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'Cultural competency in real estate practice means:', 'Cultural competency is the ability to interact effectively with people of different cultures, backgrounds, and experiences. It involves awareness of one''s own cultural biases, understanding that communication styles and decision-making processes may differ across cultures, and adapting service approaches accordingly while maintaining compliance with fair housing law.', 'medium', 'professional-standards', 546, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Memorizing the customs and traditions of every culture', false, 1), ('Treating all clients identically regardless of their background', false, 2), ('Understanding and respecting cultural differences to provide effective service to diverse populations', true, 3), ('Speaking multiple languages fluently', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'A principal broker discovers that a salesperson under their supervision has been advertising listings on social media without including the brokerage name. The broker should:', 'The principal broker has a supervisory duty to ensure compliance with advertising regulations. The appropriate response is to immediately correct the violation (require the posts be updated or removed), provide training on VREB advertising requirements, and implement monitoring systems to prevent recurrence. The broker could face disciplinary action for failure to supervise.', 'medium', 'professional-standards', 547, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Ignore it because social media is informal and not subject to VREB rules', false, 1), ('Immediately correct the violation and implement training and monitoring procedures', true, 2), ('Terminate the salesperson''s license without warning', false, 3), ('Report the salesperson to the VREB without attempting correction first', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'Article 12 of the NAR Code of Ethics requires REALTORS to:', 'Article 12 of the NAR Code of Ethics requires REALTORS to be honest and truthful in their real estate communications and to present a true picture in their advertising, marketing, and other representations. This aligns with VREB advertising regulations and reinforces the professional standard against misleading or deceptive practices.', 'hard', 'professional-standards', 548, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Cooperate with other REALTORS on every transaction', false, 1), ('Present a true picture in advertising, marketing, and representations', true, 2), ('Arbitrate all commission disputes through NAR', false, 3), ('Disclose all personal property defects to buyers', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'When working with a client whose primary language is not English, a Virginia licensee should:', 'Cultural competency includes ensuring that clients of all language backgrounds fully understand the documents they sign. The licensee should recommend a qualified interpreter (not rely on informal translation tools for legal documents), allow extra time for review, and confirm understanding. Refusing representation could violate fair housing law if the refusal is based on national origin.', 'hard', 'professional-standards', 549, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Refuse representation because of the potential for miscommunication', false, 1), ('Use Google Translate for all contract documents', false, 2), ('Recommend the client work with a qualified interpreter and ensure the client understands all documents before signing', true, 3), ('Proceed normally because all real estate contracts in Virginia must be in English', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'professional-standards-growth'), 'chapter_quiz', 'If a REALTOR is found to have violated the NAR Code of Ethics, the local association may impose all of the following sanctions EXCEPT:', 'NAR and local associations can impose fines, require education, issue letters of reprimand, suspend or expel members, and require other corrective actions. However, only the Virginia Real Estate Board (VREB) has the authority to revoke a real estate license. NAR is a trade association, not a government licensing authority.', 'hard', 'professional-standards', 550, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('A fine up to $15,000', false, 1), ('Suspension or expulsion from the association', false, 2), ('Revocation of the member''s Virginia real estate license', true, 3), ('Required completion of ethics training', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'The Virginia Real Estate Salesperson Exam is administered by:', 'PSI is the contracted testing vendor that administers the Virginia Real Estate Salesperson and Broker exams on behalf of DPOR. Candidates register through PSI''s website, schedule at a PSI testing center, and receive results immediately upon completion. VREB sets the exam content and standards but does not administer the test directly.', 'easy', 'exam-prep', 551, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The Virginia Real Estate Board (VREB)', false, 1), ('PSI (formerly Psychological Services Inc.)', true, 2), ('The National Association of REALTORS', false, 3), ('The Virginia Association of REALTORS', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'The Virginia Real Estate Salesperson Exam consists of:', 'The Virginia Salesperson Exam has two portions: 80 national questions covering general real estate principles and practices, and 40 state-specific questions covering Virginia law, regulations, and practices. Candidates must pass both portions. The national portion requires a score of 60/80 (75%), and the state portion requires 30/40 (75%).', 'medium', 'exam-prep', 552, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('80 national questions and 40 state-specific questions', true, 1), ('100 national questions and 50 state-specific questions', false, 2), ('60 multiple-choice questions covering all topics', false, 3), ('120 national questions only; there is no state section', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'If a candidate passes the national portion of the Virginia salesperson exam but fails the state portion, the candidate:', 'Virginia allows candidates to retake only the failed portion of the exam. If the national portion is passed but the state portion is failed, the national score is retained and the candidate only needs to retake the state portion. The passing score is retained for 12 months from the initial attempt.', 'medium', 'exam-prep', 553, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Must retake both portions', false, 1), ('May retake only the state portion while the national score is retained', true, 2), ('Must wait 6 months before retaking any portion', false, 3), ('Is permanently disqualified from obtaining a Virginia license', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'Which topic area typically carries the HIGHEST weight on the national portion of the salesperson exam?', 'Real estate finance (mortgages, lending, settlement procedures) and property ownership/transfer topics typically carry the highest weight on the national portion of the exam. Candidates should dedicate proportionally more study time to high-frequency topics while still covering all areas. Math questions appear throughout multiple topic areas rather than as a separate section.', 'easy', 'exam-prep', 554, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Property management and leasing', false, 1), ('Real estate finance and settlement', true, 2), ('Environmental regulations', false, 3), ('Real estate mathematics only', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'The most effective exam study strategy for real estate licensing exams is:', 'Spaced repetition (reviewing material at increasing intervals) combined with practice exams is the most effective study method. Practice tests identify knowledge gaps, and spaced repetition strengthens long-term retention. Cramming the night before is ineffective for the volume of material on the exam.', 'easy', 'exam-prep', 555, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Reading the textbook from cover to cover the night before the exam', false, 1), ('Focusing exclusively on practice questions without reviewing content', false, 2), ('Spaced repetition combined with practice exams, focusing on weak areas identified by practice tests', true, 3), ('Memorizing every vocabulary term in alphabetical order', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'After passing the Virginia salesperson exam, a candidate must submit a license application within:', 'A candidate who passes the Virginia salesperson exam must submit a license application to DPOR within 12 months. After 12 months, the exam score expires and the candidate must retake the exam. The application must include an affiliation with a Virginia principal broker; a salesperson cannot hold an independent license.', 'medium', 'exam-prep', 556, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('30 days', false, 1), ('90 days', false, 2), ('12 months', true, 3), ('24 months', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'A newly licensed Virginia salesperson MUST complete post-license education of how many hours before the first license renewal?', 'Virginia requires newly licensed salespersons to complete 30 hours of post-license education before their first license renewal. This is in addition to the 60 hours of pre-license education completed before the exam. After the first renewal, licensees must complete 16 hours of continuing education per renewal cycle.', 'medium', 'exam-prep', 557, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('8 hours', false, 1), ('16 hours', false, 2), ('30 hours', true, 3), ('60 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'A Virginia salesperson who wants to become a broker must:', 'Virginia broker candidates must complete 180 hours of DPOR-approved education, demonstrate at least 36 months of active real estate experience as a licensed salesperson within the prior 5 years, and pass the Virginia broker exam. The experience requirement ensures that brokers have practical knowledge to supervise salespersons.', 'hard', 'exam-prep', 558, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Simply pay a higher licensing fee to DPOR', false, 1), ('Complete 180 hours of education, have 36 months of active experience, and pass the broker exam', true, 2), ('Complete 60 additional hours of education and pass the broker exam', false, 3), ('Be recommended by 3 licensed brokers and pass a background check', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'Which career path in real estate involves evaluating property values and providing written opinions of value for lending, tax, and investment purposes?', 'Real estate appraisers evaluate property values and provide written appraisal reports used for lending decisions, tax assessments, estate settlements, and investment analysis. Appraisers are licensed separately from real estate agents through DPOR and must comply with the Uniform Standards of Professional Appraisal Practice (USPAP).', 'easy', 'exam-prep', 559, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Property management', false, 1), ('Real estate appraisal', true, 2), ('Mortgage brokerage', false, 3), ('Real estate development', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'exam-preparation-career-launch'), 'chapter_quiz', 'At the PSI testing center, which of the following is TRUE about the exam experience?', 'PSI testing centers provide a controlled environment. Candidates may not bring personal items, notes, or calculators into the testing room. An on-screen calculator is provided for math questions. Results are displayed on screen immediately upon completion. Candidates receive a score report before leaving the testing center.', 'medium', 'exam-prep', 560, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Candidates may bring reference materials and notes into the testing room', false, 1), ('Candidates may use personal calculators brought from home', false, 2), ('An on-screen calculator is provided, and candidates receive results immediately after completing the exam', true, 3), ('Candidates must wait 2 weeks to receive their score by mail', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A commercial property generates $320,000 in gross potential income. After a 5% vacancy rate and $120,000 in operating expenses, what is the net operating income (NOI)?', 'Effective Gross Income = $320,000 - (5% vacancy = $16,000) = $304,000. NOI = $304,000 - $120,000 operating expenses = $184,000. Remember that operating expenses do NOT include mortgage payments or depreciation.', 'medium', 'commercial-valuation', 561, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$184,000', true, 1), ('$192,000', false, 2), ('$200,000', false, 3), ('$304,000', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'In a single net lease (N), the tenant pays base rent plus:', 'In a single net lease (N), the tenant pays base rent plus property taxes. The landlord remains responsible for insurance and maintenance. In a double net (NN), the tenant adds insurance. In a triple net (NNN), the tenant also adds maintenance.', 'easy', 'commercial-leases', 562, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Property taxes only', true, 1), ('Property taxes and insurance', false, 2), ('Property taxes, insurance, and maintenance', false, 3), ('All operating expenses', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'An absolute net lease is also known as a:', 'An absolute net lease is also called a bondable lease because the landlord''s income stream is as predictable as a bond payment. The tenant is responsible for every cost associated with the property, including structural repairs and rebuilding after a casualty. National credit tenants like Walgreens and FedEx often sign these leases.', 'medium', 'commercial-leases', 563, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Full-service lease', false, 1), ('Bondable lease', true, 2), ('Percentage lease', false, 3), ('Gross lease', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'An investor purchases a property with $400,000 in cash equity. Annual NOI is $120,000 and annual debt service is $80,000. What is the cash-on-cash return?', 'Cash-on-cash return = Annual Pre-Tax Cash Flow / Total Cash Invested. Pre-tax cash flow = NOI - Debt Service = $120,000 - $80,000 = $40,000. Cash-on-cash = $40,000 / $400,000 = 10%. This metric reflects the actual return on the investor''s equity.', 'hard', 'investment-strategies', 564, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('10%', true, 1), ('20%', false, 2), ('30%', false, 3), ('40%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'To qualify as a REIT, a company must derive at least what percentage of its gross income from real estate sources?', 'A REIT must derive at least 75% of its gross income from real estate sources (rents, mortgage interest, property sales) and have at least 75% of total assets in real estate, cash, or government securities. Additionally, it must distribute at least 90% of taxable income to shareholders.', 'hard', 'investment-strategies', 565, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('50%', false, 1), ('65%', false, 2), ('75%', true, 3), ('90%', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Under the VRLTA, a security deposit must be held in:', 'The VRLTA requires security deposits to be held in a separate escrow account in a financial institution located in Virginia. Commingling security deposits with operating funds is a serious violation that can result in disciplinary action by VREB, loss of the right to retain any deposit, and civil liability to the tenant.', 'medium', 'property-management', 566, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('The property manager''s personal checking account', false, 1), ('A separate escrow account in a Virginia financial institution', true, 2), ('The property owner''s business operating account', false, 3), ('Any FDIC-insured account in the United States', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Price fixing, group boycotts, and market allocation are all per se violations of the:', 'The Sherman Antitrust Act (1890) prohibits agreements that restrain trade. Price fixing, group boycotts, market allocation, and tie-in arrangements are per se violations, meaning they are automatically illegal with no defense or justification accepted. Penalties include criminal fines up to $100 million for corporations and treble damages in civil suits.', 'easy', 'risk-management', 567, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Virginia Consumer Protection Act', false, 1), ('Federal Fair Housing Act', false, 2), ('Sherman Antitrust Act', true, 3), ('Real Estate Settlement Procedures Act (RESPA)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'All advertising by a Virginia real estate licensee must include the name of the:', 'VREB regulation 18 VAC 135-20-180 requires that all advertising by a licensee include the brokerage firm name as licensed with the Board. This applies to all media: print, online, social media (including temporary posts and stories), signs, business cards, and any other form of marketing.', 'easy', 'advertising-technology', 568, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Multiple Listing Service', false, 1), ('Brokerage firm as licensed with the Virginia Real Estate Board', true, 2), ('Virginia Real Estate Board itself', false, 3), ('Licensee''s supervising broker by full legal name', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'The NAR Code of Ethics applies to all Virginia real estate licensees. TRUE or FALSE?', 'The NAR Code of Ethics applies only to members of the National Association of REALTORS, not to all licensees. However, Virginia license law and VREB regulations impose ethical and professional standards on ALL licensees regardless of NAR membership. Not every licensee is a REALTOR.', 'easy', 'professional-standards', 569, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('True, all licensees must follow the NAR Code of Ethics', false, 1), ('False, it applies only to members of the National Association of REALTORS', true, 2), ('True, but only for residential transactions', false, 3), ('False, it was replaced by Virginia license law in 2020', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'The Virginia salesperson exam has two portions. To pass the state-specific portion, a candidate needs a score of:', 'The Virginia state-specific portion contains 40 questions, and candidates must score at least 30 correct (75%) to pass. The national portion requires 60/80 (also 75%). Both portions must be passed, but if a candidate passes one and fails the other, only the failed portion must be retaken.', 'medium', 'exam-prep', 570, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('25/40 (62.5%)', false, 1), ('28/40 (70%)', false, 2), ('30/40 (75%)', true, 3), ('36/40 (90%)', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A property has an NOI of $200,000 and annual debt service of $150,000. The DSCR is:', 'DSCR = NOI / Annual Debt Service = $200,000 / $150,000 = 1.33. This means the property generates 33% more income than needed to cover the mortgage. Most lenders require a minimum DSCR of 1.20 to 1.25, so this property would meet the requirement.', 'medium', 'investment-strategies', 571, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('0.75', false, 1), ('1.00', false, 2), ('1.33', true, 3), ('1.50', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Which commercial property type has been MOST positively impacted by the growth of e-commerce?', 'E-commerce has driven enormous demand for warehouse and distribution space, particularly last-mile distribution centers located close to population centers. Conversely, regional enclosed malls have been negatively impacted by the shift to online shopping. This trend has reshaped industrial real estate markets nationwide.', 'easy', 'commercial-property-types', 572, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Regional enclosed malls', false, 1), ('Class A downtown office buildings', false, 2), ('Warehouse and distribution centers', true, 3), ('Boutique hotels', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A CPI escalation clause in a commercial lease that includes a 2% floor and 5% cap means:', 'A floor of 2% guarantees the landlord a minimum rent increase even in deflationary periods. A cap of 5% protects the tenant from extreme inflation. If the actual CPI increase is 1%, rent still increases 2% (the floor). If CPI increases 8%, rent increases only 5% (the cap). The floor and cap balance risk between landlord and tenant.', 'hard', 'commercial-leases', 573, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Rent will always increase exactly 3.5% per year', false, 1), ('Rent will increase by at least 2% and no more than 5% annually, regardless of actual CPI changes', true, 2), ('The CPI must be between 2% and 5% for the clause to apply', false, 3), ('Base rent is capped at 5% of the CPI', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Transit-oriented development (TOD) typically concentrates mixed-use buildings within what radius of a transit station?', 'Transit-oriented developments concentrate mixed-use buildings within a quarter-mile to half-mile radius of a transit station. This distance represents a comfortable 5-10 minute walk. TOD projects often receive density bonuses and reduced parking requirements from local governments in exchange for public amenities and affordable housing.', 'medium', 'commercial-property-types', 574, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('One-tenth to one-quarter mile', false, 1), ('One-quarter to one-half mile', true, 2), ('One to two miles', false, 3), ('Five miles or less', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A licensee discovers they provided incorrect square footage information to a buyer, causing the buyer financial harm. The licensee''s E&O insurance would:', 'E&O insurance is specifically designed to cover claims arising from negligent errors or omissions in professional practice, such as providing incorrect property information. Coverage typically includes both defense costs (attorney fees) and any damages awarded. However, E&O insurance does not cover intentional fraud or criminal acts.', 'medium', 'risk-management', 575, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Not cover this situation because it involves a factual error', false, 1), ('Cover defense costs and potential damages from this negligent error', true, 2), ('Cover only criminal penalties resulting from the error', false, 3), ('Cover only the buyer''s actual damages, not the licensee''s defense costs', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Under the TCPA, the penalty for sending a single unsolicited marketing text message without prior written consent can be:', 'The Telephone Consumer Protection Act (TCPA) imposes penalties of $500 per violation for unsolicited marketing text messages, which can be trebled to $1,500 per message for willful violations. For mass texting campaigns, these penalties can accumulate to enormous liability. Licensees must obtain prior express written consent before sending marketing texts.', 'hard', 'advertising-technology', 576, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('$50 to $100', false, 1), ('$500 to $1,500', true, 2), ('$5,000 to $10,000', false, 3), ('No financial penalty; only a warning is issued', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'Virginia requires newly licensed brokers to complete how many hours of post-license education?', 'Like salespersons, newly licensed Virginia brokers must complete 30 hours of post-license education before their first renewal. The broker post-license curriculum covers brokerage-specific topics such as escrow management, supervision responsibilities, and risk management. After the first renewal, 16 hours of CE per cycle is required.', 'hard', 'exam-prep', 577, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('16 hours', false, 1), ('30 hours', true, 2), ('45 hours', false, 3), ('60 hours', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'The appraisal approach MOST commonly used as the primary method for valuing income-producing commercial properties is the:', 'The income approach (Value = NOI / Cap Rate) is the primary valuation method for income-producing commercial properties because commercial value is driven by the property''s ability to generate income. The sales comparison approach is used as a secondary method, and the cost approach is primarily used for special purpose properties where income and comparable data are limited.', 'easy', 'commercial-valuation', 578, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Sales comparison approach', false, 1), ('Cost approach', false, 2), ('Income approach', true, 3), ('Market analysis approach', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A property manager who holds tenant security deposits in their personal bank account, mixed with personal funds, has committed:', 'Commingling is the mixing of client funds (such as tenant security deposits) with the licensee''s personal or business operating funds. This is a violation of the fiduciary duty of accounting and Virginia real estate law, regardless of whether a complaint is filed. Conversion goes further and involves using client funds for personal purposes.', 'medium', 'property-management', 579, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('Conversion only', false, 1), ('Commingling, which is a violation of fiduciary duty and Virginia law', true, 2), ('An innocent accounting error that can be easily corrected', false, 3), ('A violation only if a tenant files a formal complaint', false, 4)) AS o(text, correct, ord);

WITH q AS (
  INSERT INTO course_quiz_questions (chapter_id, quiz_type, question_text, explanation, difficulty, topic_tag, order_index, is_published)
  VALUES ((SELECT id FROM course_chapters WHERE slug = 'mock-exam-1112'), 'mock_exam', 'A Virginia broker candidate must have at least how many months of active experience as a licensed salesperson?', 'Virginia requires broker candidates to have at least 36 months (3 years) of active experience as a licensed salesperson within the prior 5 years. This experience requirement, combined with 180 hours of education and passing the broker exam, ensures brokers have the practical knowledge to supervise salespersons and manage a brokerage.', 'hard', 'exam-prep', 580, true)
  RETURNING id
)
INSERT INTO course_quiz_options (question_id, option_text, is_correct, order_index)
SELECT q.id, o.text, o.correct, o.ord FROM q CROSS JOIN (VALUES ('12 months', false, 1), ('24 months', false, 2), ('36 months', true, 3), ('48 months', false, 4)) AS o(text, correct, ord);
