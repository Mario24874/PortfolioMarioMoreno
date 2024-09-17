// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqxgeegwihtjyamgivyo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxeGdlZWd3aWh0anlhbWdpdnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDQ0NTAsImV4cCI6MjA0MjE4MDQ1MH0.oj-e67poPuRcaFRGLP-2Rfpnh-CA3-Ex7n2JtSNNOsQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;