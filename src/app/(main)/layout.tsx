import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import CustomCursor from '@/components/ui/custom-cursor'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="pointer-events-none fixed inset-0 z-50">
        <CustomCursor />
      </div>
      <ScrollToTop />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
