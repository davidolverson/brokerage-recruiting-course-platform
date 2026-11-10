-- Migration: Seed PLE course structure into database
-- This creates the module/chapter structure for the 30-hour Post-License Education course

-- ─── PLE Module 1: Fair Housing, ADA & Civil Rights Act of 1866 (2 hrs) ────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-fair-housing', 'Fair Housing, ADA & Civil Rights Act of 1866', 'Federal and Virginia fair housing law, ADA compliance, Civil Rights Act of 1866, hoarding accommodations, and current enforcement trends.', 'ple', 1, true, 2);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-fair-housing'), 'ple-fh-federal', 'Federal Fair Housing Act', 'Title VIII protected classes and prohibited acts', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-fair-housing'), 'ple-fh-virginia', 'Virginia Fair Housing Law', 'Virginia-specific protections and the Virginia Values Act', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-fair-housing'), 'ple-fh-ada-1866', 'ADA & Civil Rights Act of 1866', 'Americans with Disabilities Act and absolute race protection', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-fair-housing'), 'ple-fh-accommodations', 'Reasonable Accommodations, Hoarding & Current Issues', 'Hoarding as disability, assistance animals, current cases, AI bias', 4, true);

-- ─── PLE Module 2: Real Estate Law & Board Regulations (6 hrs) ─────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-re-law', 'Real Estate Law and Board Regulations', 'Virginia licensing law, VRLTA, POAA, Condominium Act, CIC law, Megan''s Law, SCRA, disclosures, building codes, and NFIP.', 'ple', 2, true, 6);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-licensing', 'Virginia Licensing Law & DPOR', 'License categories, regulations, and maintenance', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-disciplinary', 'VREB Disciplinary Actions', 'Disciplinary process, sanctions, recent cases', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-lead-paint', 'Lead-Based Paint Regulations', 'Federal disclosure rule, RRP Rule, agent obligations', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-vrlta', 'Virginia Residential Landlord & Tenant Act', 'VRLTA provisions, rights, obligations, eviction', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-poaa-condo', 'POAA & Condominium Act', 'Property owners associations and condominium regulation', 5, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-cic', 'Common Interest Community Law', 'CIC Board, manager licensing, governance', 6, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-megan-scra', 'Megan''s Law & SCRA', 'Sex offender registry and Service Members Civil Relief Act', 7, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-disclosures', 'Required Disclosures', 'All Virginia mandatory property disclosures', 8, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-re-law'), 'ple-law-building-flood', 'Building Codes, Smoke Detectors & Flood/NFIP', 'USBC, smoke/CO detectors, FEMA flood zones, National Flood Insurance Program', 9, true);

-- ─── PLE Module 3: Ethics & Standards of Conduct (3 hrs) ───────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-ethics', 'Ethics and Standards of Conduct', 'Virginia Standards of Conduct, NAR Code of Ethics as teaching tool, wire fraud prevention, fiduciary duties, and disciplinary case studies.', 'ple', 3, true, 3);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-ethics'), 'ple-ethics-va-standards', 'Virginia Standards of Conduct', '18VAC135-20-300 requirements and obligations', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-ethics'), 'ple-ethics-nar', 'NAR Code of Ethics (Teaching Tool)', 'NAR CoE overview with required disclaimer', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-ethics'), 'ple-ethics-practice', 'Professional Conduct & Wire Fraud', 'Confidentiality, material facts, wire fraud prevention', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-ethics'), 'ple-ethics-fiduciary', 'Trust, Fiduciary Duties & Risk', 'OLDCAR duties, E&O insurance, case studies', 4, true);

-- ─── PLE Module 4: Current Industry Issues & Trends (2 hrs) ────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-current-issues', 'Current Industry Issues and Trends', 'NAR settlement impact, AI and technology in real estate, social media compliance, cybersecurity, and recent Virginia legislation.', 'ple', 4, true, 2);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-current-issues'), 'ple-issues-nar-settlement', 'NAR Settlement & Commission Changes', 'Settlement terms, new MLS rules, buyer representation requirements', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-current-issues'), 'ple-issues-technology', 'Technology in Real Estate', 'AI tools, RON, e-signatures, fair housing implications', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-current-issues'), 'ple-issues-social-media', 'Social Media & Internet Advertising', 'DPOR advertising rules, fair housing in digital ads', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-current-issues'), 'ple-issues-cybersecurity', 'Cybersecurity, Wire Fraud & Market Trends', 'BEC attacks, data privacy, iBuyers, PropTech, legislation', 4, true);

-- ─── PLE Module 5: Virginia Agency Law (3 hrs) ─────────────────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-agency', 'Virginia Agency Law', 'Virginia agency statutes, all relationship types, Guidance Document on Brokerage Agreements, post-NAR settlement practices, fiduciary duties.', 'ple', 5, true, 3);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-framework', 'Virginia Agency Law Framework', 'Code of Virginia 54.1-2130 through 54.1-2144', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-types', 'Types of Agency in Virginia', 'Standard, limited service, dual, designated agency', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-disclosure', 'Disclosure of Brokerage Relationship', 'Mandatory disclosure requirements and timing', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-guidance-doc', 'Guidance Document on Brokerage Agreements', 'Board requirements, buyer-broker agreements, post-NAR settlement', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-buyer-rep', 'Buyer Representation in Current Practice', 'Consultation, compensation disclosure, representation before showings', 5, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-agency'), 'ple-agency-fiduciary', 'Fiduciary Duties & Vicarious Liability', 'OLDCAR duties, confidentiality, broker liability', 6, true);

-- ─── PLE Module 6: Contract Writing (6 hrs) ────────────────────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-contracts', 'Contract Writing', 'Contract fundamentals, Virginia purchase agreements, contingencies, leasing, commercial lease types, multiple offers, ratification, and electronic transactions.', 'ple', 6, true, 6);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-fundamentals', 'Contract Fundamentals', 'Essential elements, Statute of Frauds, interpretation', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-purchase', 'Virginia Residential Purchase Agreement', 'Clause-by-clause analysis of standard forms', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-contingencies', 'Contingencies', 'Financing, inspection, appraisal, sale contingencies', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-listing', 'Listing Agreements', 'Types, terms, and termination', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-leasing', 'Residential & Commercial Leasing', 'Residential leases, net leases, NNN, ground leases', 5, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-offers', 'Multiple Offers, Ratification & Delivery', 'Offer handling, ratification vs acceptance, back-up offers', 6, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-inspections', 'Home Inspections & Electronic Transactions', 'Virginia standards, e-signatures, RON', 7, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-contracts'), 'ple-contracts-termination', 'Contract Termination & Breach', 'Breach, remedies, assignment, novation', 8, true);

-- ─── PLE Module 7: Risk Management (3 hrs) ─────────────────────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-risk-mgmt', 'Risk Management', 'RESPA, Anti-Trust Act, Chesapeake Bay Preservation Act, environmental laws, mold, E&O insurance, and professional risk mitigation.', 'ple', 7, true, 3);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-risk-mgmt'), 'ple-risk-respa', 'Real Estate Settlement Procedures Act', 'Section 8, AfBA disclosures, TRID', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-risk-mgmt'), 'ple-risk-antitrust', 'Anti-Trust Act', 'Sherman Act: price fixing, boycotts, market allocation', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-risk-mgmt'), 'ple-risk-chesapeake', 'Chesapeake Bay Preservation Act', 'RPAs, RMAs, buffer zones, development restrictions', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-risk-mgmt'), 'ple-risk-environmental', 'Environmental Laws & Mold', 'CERCLA, USTs, wetlands, Phase I/II, mold disclosure', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-risk-mgmt'), 'ple-risk-professional', 'Professional Risk Management', 'E&O insurance, lawsuits, misrepresentation, cybersecurity', 5, true);

-- ─── PLE Module 8: Escrow Requirements (3 hrs) ─────────────────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-escrow', 'Escrow Requirements', 'Trust account management, deposit handling, disbursement rules, escrow disputes, common violations, and property management escrow.', 'ple', 8, true, 3);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-fundamentals', 'Trust Account Fundamentals', 'Definition, DPOR regulations, principal broker responsibilities', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-deposits', 'Deposit Handling Procedures', 'Receipt, timeline, forms, endorsement, interim handling', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-management', 'Trust Account Management', 'Setup, record-keeping, reconciliation, commingling, conversion', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-disbursement', 'Disbursement of Trust Funds', 'When authorized, settlement, return of deposits, commissions', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-disputes', 'Escrow Disputes & Violations', 'Disputed money, interpleader, DPOR complaints, penalties', 5, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-escrow'), 'ple-escrow-property-mgmt', 'Property Management Escrow', 'Security deposits under VRLTA, move-out procedures', 6, true);

-- ─── PLE Module 9: Real Estate-Related Finance (2 hrs) ─────────────────────

INSERT INTO course_modules (slug, title, description, course_type, order_index, is_published, estimated_hours)
VALUES ('ple-finance', 'Real Estate-Related Finance', 'Loan process, residential and commercial financing options, VHDA programs, land financing, and consumer protection in lending.', 'ple', 9, true, 2);

INSERT INTO course_chapters (module_id, slug, title, description, order_index, is_published)
VALUES
  ((SELECT id FROM course_modules WHERE slug = 'ple-finance'), 'ple-finance-loan-process', 'The Loan Process', 'Pre-qualification, underwriting, DTI, LTV', 1, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-finance'), 'ple-finance-residential', 'Residential Financing Options', 'Conventional, FHA, VA, USDA, ARM vs fixed', 2, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-finance'), 'ple-finance-virginia', 'Virginia-Specific & Specialized Financing', 'VHDA, DPA, first-time buyer, seller financing', 3, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-finance'), 'ple-finance-commercial', 'Land & Commercial Financing', 'Land loans, commercial mortgages, SBA, hard money', 4, true),
  ((SELECT id FROM course_modules WHERE slug = 'ple-finance'), 'ple-finance-consumer', 'Consumer Protection in Lending', 'TILA, ECOA, predatory lending', 5, true);
