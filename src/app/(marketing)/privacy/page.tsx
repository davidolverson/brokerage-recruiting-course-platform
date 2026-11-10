'use client'

import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p
              className="mt-2 text-sm text-[#9CA3AF]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Last updated: March 21, 2026
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">

            {/* Introduction */}
            <Reveal variant="up" delay={60}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Introduction
                </h2>
                <div
                  className="mt-3 space-y-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <p>
                    Acme Realty Anytown Branch (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                    &ldquo;our&rdquo;) respects your privacy. This policy explains what
                    information we collect through our website, how we use it, and what
                    choices you have.
                  </p>
                  <p>
                    Our office is located at 123 Main Street,
                    Anytown, VA 00000.
                  </p>
                </div>
              </section>
            </Reveal>

            {/* What We Collect */}
            <Reveal variant="up" delay={80}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  What We Collect
                </h2>
                <div
                  className="mt-3 space-y-4 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <div>
                    <h3
                      className="font-semibold text-black"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Information you provide
                    </h3>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Contact forms:</strong> Your name, email address, and
                        phone number when you reach out to us.
                      </li>
                      <li>
                        <strong>Application forms:</strong> Details about your real
                        estate license status, years of experience, brokerage history,
                        and professional goals.
                      </li>
                      <li>
                        <strong>Tour booking:</strong> Your preferred dates and times
                        when you schedule a visit to our office.
                      </li>
                      <li>
                        <strong>Quiz responses:</strong> Your answers to our career path
                        and fit assessments.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="font-semibold text-black"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Information collected automatically
                    </h3>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Analytics:</strong> Pages visited, buttons clicked, time
                        on page, referring site.
                      </li>
                      <li>
                        <strong>Device:</strong> Browser type, operating system, screen
                        resolution.
                      </li>
                      <li>
                        <strong>Location:</strong> General region based on your IP
                        address (city/state level).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* How We Use Your Information */}
            <Reveal variant="up" delay={100}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  How We Use Your Information
                </h2>
                <div
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Following up on your inquiries.</li>
                    <li>Managing our recruitment pipeline.</li>
                    <li>Improving website performance and content.</li>
                    <li>
                      Sending relevant communications. You can opt out at any time.
                    </li>
                  </ul>
                  <p className="mt-4 font-medium text-black">
                    We do not sell your personal information.
                  </p>
                </div>
              </section>
            </Reveal>

            {/* Calls and Text Messages — the supporting disclosure for the
                consent checkbox on our forms. The wording here must not drift
                from the checkbox itself; see src/components/forms/PhoneConsent.tsx. */}
            <Reveal variant="up" delay={110}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Calls and Text Messages
                </h2>
                <div
                  className="mt-3 space-y-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <p>
                    Our forms ask for a phone number so we can respond to your
                    inquiry. Beside that field is a checkbox asking whether Acme
                    Anytown and Acme Realty, LLC may call and text you at that
                    number, including by automated dialling system or prerecorded
                    message. It is never ticked for you.
                  </p>
                  <p>
                    <strong className="font-medium text-black">
                      Consent is not a condition of any purchase or service.
                    </strong>{' '}
                    You can leave the box unticked and still submit the form. If
                    you do, we may still return your call about the inquiry you
                    sent us, but we will not text you or dial you automatically.
                  </p>
                  <p>
                    When you do tick it, we record the date and time along with
                    the exact number you gave permission for. Permission belongs
                    to that number, so if the number on your record later changes,
                    the earlier permission no longer applies to the new one.
                  </p>
                  <p>
                    Message and data rates may apply and message frequency varies.
                    Reply STOP to any message to opt out, or contact us using the
                    details below.
                  </p>
                </div>
              </section>
            </Reveal>

            {/* How We Store Your Data */}
            <Reveal variant="up" delay={120}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  How We Store Your Data
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Your data is stored in a PostgreSQL database hosted by Neon, a cloud
                  database provider with servers in the United States. We use
                  industry-standard security practices including encrypted connections
                  (SSL/TLS).
                </p>
              </section>
            </Reveal>

            {/* Third-Party Services */}
            <Reveal variant="up" delay={140}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Third-Party Services
                </h2>
                <ul
                  className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <li>
                    <strong>Vercel</strong> — Hosts our website.
                  </li>
                  <li>
                    <strong>Google Analytics</strong> — Helps us understand how visitors
                    use our site.
                  </li>
                  <li>
                    <strong>Neon</strong> — Hosts our database where form submissions are
                    stored.
                  </li>
                </ul>
              </section>
            </Reveal>

            {/* Cookies */}
            <Reveal variant="up" delay={160}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Cookies
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Our website uses essential cookies and analytics cookies. Most browsers
                  let you control cookies through their settings.
                </p>
              </section>
            </Reveal>

            {/* Your Rights */}
            <Reveal variant="up" delay={180}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Your Rights
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  You have the right to access, correct, or delete your data. To exercise
                  these rights, contact us at{' '}
                  <a
                    href="mailto:agent@example.com"
                    className="text-black underline underline-offset-2 hover:text-[#4B5563]"
                  >
                    agent@example.com
                  </a>{' '}
                  or call{' '}
                  <a
                    href="tel:+15550100100"
                    className="text-black underline underline-offset-2 hover:text-[#4B5563]"
                  >
                    (555) 010-0100
                  </a>
                  .
                </p>
              </section>
            </Reveal>

            {/* VCDPA */}
            <Reveal variant="up" delay={200}>
              <section>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Virginia Consumer Data Protection Act (VCDPA)
                </h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[#4B5563]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Virginia residents have additional rights including confirmation,
                  access, correction, deletion, portability, and opt-out. We do not sell
                  personal data. To submit a VCDPA request, email{' '}
                  <a
                    href="mailto:agent@example.com"
                    className="text-black underline underline-offset-2 hover:text-[#4B5563]"
                  >
                    agent@example.com
                  </a>
                  .
                </p>
              </section>
            </Reveal>

            {/* Contact Us */}
            <Reveal variant="up" delay={220}>
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
