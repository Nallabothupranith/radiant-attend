import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase project credentials

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// Create a single Supabase client for interacting with your database
  

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// You can also export specific database types if you're using TypeScript
// export type Database = {
//   // Define your database schema types here
// }
