// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    redirectTo: 'https://portfoliomariomoreno.netlify.app/blog', // Asegúrate de que esta URL coincida con la URL de redirección en Supabase
  },
});

export default supabase;