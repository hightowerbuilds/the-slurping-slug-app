import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qizimnnuuhnzzxexxugo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpemltbm51dWhuenp4ZXh4dWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMDU5NTUsImV4cCI6MjA0MDc4MTk1NX0.O4ivAXOmm7XTwyu5HXPNS_jnzhV1_RSMM90W2fXieHo';
export const supabase = createClient(supabaseUrl, supabaseKey);

