import { createClient } from '@supabase/supabase-js'

// Project credentials - these will be replaced during deployment
const SUPABASE_URL = 'https://your-project-id.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

// Safety check to prevent errors in development
if (SUPABASE_URL === 'https://your-project-id.supabase.co' || SUPABASE_ANON_KEY === 'your-anon-key') {
  console.warn('Supabase credentials not configured - using mock client');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase