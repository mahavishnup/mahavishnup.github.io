import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { env } from '@/env'

/**
 * Analytics — renders GTM + GA via @next/third-parties.
 *
 * - GTM  : handles tag management; GA4 should be configured inside GTM.
 *           The standalone GA component below is only active if NEXT_PUBLIC_GA_ID
 *           is set AND you want direct GA4 hits (e.g. no GA tag inside GTM).
 *           Remove <GoogleAnalytics> if your GTM container already fires GA4.
 *
 * - Both components use Next.js-optimised loading strategies internally
 *   (afterInteractive / partytown worker) — no manual <Script> juggling needed.
 */
export function Analytics() {
  const gtmId = env.NEXT_PUBLIC_GTM_ID
  const gaId = env.NEXT_PUBLIC_GA_ID

  return (
    <>
      {/* Google Tag Manager — handles all tags centrally */}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}

      {/*
       * Standalone GA4 — only needed if GTM does NOT already contain a GA4 tag.
       * Comment this out / remove it if double-counting occurs in GA4.
       */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  )
}
