'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import supabase from '../utils/supabase-browser'

export default function SupabaseListener({ accessToken }) {
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  
    return () => subscription.unsubscribe()
  }, [accessToken])

  return null
}