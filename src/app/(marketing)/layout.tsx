import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/ui/AnnouncementBar'
import { MobileCTABar } from '@/components/ui/MobileCTABar'
import { SocialProofToast } from '@/components/ui/SocialProofToast'
import { ExitIntentPopup } from '@/components/ui/ExitIntentPopup'
import { BackToTop } from '@/components/ui/BackToTop'
import { ChatBot } from '@/components/ui/ChatBot'
import { PageBreadcrumbs } from '@/components/ui/PageBreadcrumbs'
import { ExploreMore } from '@/components/ui/ExploreMore'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBreadcrumbs />
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <ExploreMore />
      <Footer />
      <MobileCTABar />
      <SocialProofToast />
      <ExitIntentPopup />
      <ChatBot />
      <BackToTop />
    </>
  )
}
