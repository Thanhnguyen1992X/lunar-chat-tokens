// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tkmpdpalwhfkiumxgpbn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbXBkcGFsd2hma2l1bXhncGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODkwMDksImV4cCI6MjA2NjI2NTAwOX0.BSS6e-hPvLqjw7c5WuC_XoMK3Naxx8hcxypg52kGSbY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);