/**Source Code
 * This source code did by willianjusten.com.br
 */

import { EventGTagParams } from './types'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  window.gtag &&
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventGTagParams) => {
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
}
