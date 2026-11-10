import { Container } from '@/components/layout/Container'

/**
 * Shown to someone who IS signed in but is not entitled to the handbook.
 *
 * Shared by the index and the article page. They used to disagree: the index
 * explained itself and the article page returned a bare 404, so an unentitled
 * or expired viewer was told a real page did not exist.
 */
export function NoHandbookAccess() {
  return (
    <div className="bg-white">
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-xl rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center">
            <h1 className="text-xl font-bold text-black">This area is for Example Investor Team agents</h1>
            <p className="mt-3 text-[#4B5563]">
              Your account does not have access to the agent handbook. If you have just
              joined the team, ask the office manager to set you up.
            </p>
            <p className="mt-4 text-sm text-[#6B7280]">
              Signed in with the wrong account?{' '}
              <a href="/login" className="font-semibold text-black underline underline-offset-4">
                Sign in again
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
