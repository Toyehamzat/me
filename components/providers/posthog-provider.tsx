"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.log("Initializing PostHog with key:", process.env.NEXT_PUBLIC_POSTHOG_KEY.substring(0, 10) + "...")
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        capture_pageview: true,
        capture_pageleave: true,
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
        loaded: (posthog) => {
          console.log("PostHog loaded successfully!")
          if (process.env.NODE_ENV === "development") {
            console.log("PostHog config:", posthog.config)
          }
        }
      })
    } else {
      console.error("PostHog key not found")
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}