import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase project credentials
const supabaseUrl = "https://revqyyyiwggzenlcecau.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldnF5eXlpd2dnemVubGNlY2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDIwODAsImV4cCI6MjA3Mzg3ODA4MH0.MC19F9LtIcYLvWdVFMAaGBtDsCJk5FFa3wJit0G4N1A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// You can also export specific database types if you're using TypeScript
// export type Database = {
//   // Define your database schema types here
// }
