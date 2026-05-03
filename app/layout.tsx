import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Failure Debugger — Debug Why Webhooks Are Failing',
  description: 'Capture failed webhook attempts, analyze error patterns, and get debugging insights. Built for developers building integrations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c8b359d-aae6-4a24-8dc2-b865cc92731f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
