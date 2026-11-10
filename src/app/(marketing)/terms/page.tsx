'use client'

import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'

export default function TermsOfServicePage() {
  return (
    <main className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">

          {/* Page header */}
          <Reveal variant="up">
            <h1
              className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Terms of Service
            </h1>
            <p
              className="mt-2 text-sm text-[#9CA3AF]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Last updated: March 21, 2026
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">

            {/* Agreement to Terms */}
            <Reveal variant="up" delay={60}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Agreement to Terms
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  By accessing this website operated by Acme Realty Anytown Branch, you
                  agree to these Terms of Service. If you do not agree, please do not use
                  this site.
                </p>
              </section>
            </Reveal>

            {/* Accuracy of Information */}
            <Reveal variant="up" delay={80}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Accuracy of Information
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  We do our best to keep information accurate. However, real estate
                  programs and market conditions change. Information on this site is for
                  general purposes and should not be relied upon as a guarantee of any
                  specific outcome.
                </p>
              </section>
            </Reveal>

            {/* No Guarantee of Results */}
            <Reveal variant="up" delay={100}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  No Guarantee of Results
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Nothing on this website constitutes a promise of income, production, or
                  career success. Results depend on individual effort, market conditions,
                  and experience.
                </p>
              </section>
            </Reveal>

            {/* Real Estate Disclaimers */}
            <Reveal variant="up" delay={120}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Real Estate Disclaimers
                </h2>
                <ul
                  className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <li>
                    Acme Realty is a licensed real estate brokerage. All agents are
                    independent contractors.
                  </li>
                  <li>
                    Commission splits, cap structures, and revenue share details are
                    subject to Acme Realty&apos;s current policies.
                  </li>
                  <li>
                    This website is operated by an Acme Realty agent/team and is not the
                    official website of Acme Realty, LLC.
                  </li>
                </ul>
              </section>
            </Reveal>

            {/* Limitation of Liability */}
            <Reveal variant="up" delay={140}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Limitation of Liability
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  To the fullest extent permitted by Virginia law, Acme Realty Anytown
                  Branch shall not be liable for any indirect, incidental, or
                  consequential damages arising from your use of this website.
                </p>
              </section>
            </Reveal>

            {/* Governing Law */}
            <Reveal variant="up" delay={160}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Governing Law
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  These Terms are governed by the laws of the Commonwealth of Virginia.
                </p>
              </section>
            </Reveal>

            {/* Contact Us */}
            <Reveal variant="up" delay={180}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Contact Us
                </h2>
                <address
                  className="mt-3 not-italic text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <p>Acme Realty Anytown Branch</p>
                  <p>123 Main Street, Anytown, VA 00000</p>
                  <p className="mt-2">
                    <a
                      href="mailto:agent@example.com"
                      className="text-black underline underline-offset-2 hover:text-[#4B5563]"
                    >
                      agent@example.com
                    </a>
                    {' '}|{' '}
                    <a
                      href="tel:+15550100100"
                      className="text-black underline underline-offset-2 hover:text-[#4B5563]"
                    >
                      (555) 010-0100
                    </a>
                  </p>
                </address>
              </section>
            </Reveal>

          </div>
        </div>
      </Container>
    </main>
  )
}
