import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// Ambil kredensial dari file .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

// Buat dan ekspor client Supabase dengan hak akses admin
export const supabase = createClient(supabaseUrl, supabaseSecretKey);