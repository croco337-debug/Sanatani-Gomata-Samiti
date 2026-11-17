-- ====================================================================
-- SANATANI GOMATA SAMITI - OFFICIAL DATABASE SCHEMA (SUPABASE / POSTGRESQL)
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------------------
-- 1. PROFILES TABLE (Extends Supabase auth.users)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT,
    preferred_language TEXT NOT NULL DEFAULT 'en' CHECK (preferred_language IN ('en', 'hi', 'bn')),
    role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for role lookup
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- --------------------------------------------------------------------
-- 2. ORGANISATION SETTINGS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.organisation_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT NOT NULL UNIQUE,
    value_en TEXT NOT NULL,
    value_hi TEXT NOT NULL,
    value_bn TEXT NOT NULL,
    category TEXT DEFAULT 'general' NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------------------
-- 3. SITE STATISTICS TABLE (Editable metrics)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_statistics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL,
    label_en TEXT NOT NULL,
    label_hi TEXT NOT NULL,
    label_bn TEXT NOT NULL,
    sort_order INT DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Initial Verified Seed Data for Statistics
INSERT INTO public.site_statistics (key, value, label_en, label_hi, label_bn, sort_order)
VALUES
('years_of_initiative', '20+', 'Years of Dedicated Initiative', 'समर्पित व्यक्तिगत पहल के वर्ष', 'উদ্যোগের বছর', 1),
('cows_donated', '67', 'Mothers Received Indigenous Cows', 'माताओं को देसी गाय प्राप्त हुईं', 'মায়েরা দেশি গরু পেয়েছেন', 2),
('mothers_interested', '100s', 'Mothers Expressed Interest Across Villages', 'गाँवों में सैकड़ों माताओं ने रुचि व्यक्त की', 'শত শত মা আগ্রহ প্রকাশ করেছেন', 3),
('villages_connected', 'Multiple', 'Rural Communities Connected', 'जुड़े हुए ग्रामीण समुदाय', 'সংযুক্ত গ্রামীণ সম্প্রদায়', 4)
ON CONFLICT (key) DO NOTHING;

-- --------------------------------------------------------------------
-- 4. ACTIVITIES & ANNOUNCEMENTS (Multilingual CMS)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title_en TEXT NOT NULL,
    title_hi TEXT NOT NULL,
    title_bn TEXT NOT NULL,
    description_en TEXT NOT NULL,
    description_hi TEXT NOT NULL,
    description_bn TEXT NOT NULL,
    content_en TEXT,
    content_hi TEXT,
    content_bn TEXT,
    cover_image TEXT,
    category TEXT NOT NULL CHECK (category IN ('Gau Seva', 'Agriculture', 'Matri Shakti', 'Rural Development', 'General')),
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_activities_status ON public.activities(status);
CREATE INDEX IF NOT EXISTS idx_activities_category ON public.activities(category);
CREATE INDEX IF NOT EXISTS idx_activities_published_at ON public.activities(published_at DESC);

-- --------------------------------------------------------------------
-- 5. GALLERY CATEGORIES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.gallery_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_en TEXT NOT NULL,
    name_hi TEXT NOT NULL,
    name_bn TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Initial Categories
INSERT INTO public.gallery_categories (name_en, name_hi, name_bn, slug)
VALUES
('Gau Seva', 'गौ सेवा', 'গো সেবা', 'gau-seva'),
('Agriculture', 'कृषि', 'কৃষি', 'agriculture'),
('Matri Shakti', 'मातृ शक्ति', 'মাতৃ শক্তি', 'matri-shakti'),
('Rural Development', 'ग्रामीण विकास', 'পল্লী উন্নয়ন', 'rural-development')
ON CONFLICT (slug) DO NOTHING;

-- --------------------------------------------------------------------
-- 6. GALLERY ITEMS (Photos & Videos)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title_en TEXT,
    title_hi TEXT,
    title_bn TEXT,
    description_en TEXT,
    description_hi TEXT,
    description_bn TEXT,
    media_url TEXT NOT NULL,
    media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
    category_id UUID REFERENCES public.gallery_categories(id) ON DELETE SET NULL,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_gallery_items_category ON public.gallery_items(category_id);
CREATE INDEX IF NOT EXISTS idx_gallery_items_type ON public.gallery_items(media_type);

-- --------------------------------------------------------------------
-- 7. MEMBERSHIP REQUESTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.membership_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    village TEXT,
    district TEXT,
    state TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_membership_requests_status ON public.membership_requests(status);

-- --------------------------------------------------------------------
-- 8. CONTACT MESSAGES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_is_read ON public.contact_messages(is_read);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Helper function to check if current user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organisation_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membership_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 1. Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins have full access to profiles" ON public.profiles
    FOR ALL USING (public.is_admin());

-- 2. Organisation Settings Policies
CREATE POLICY "Public read organisation settings" ON public.organisation_settings
    FOR SELECT USING (true);

CREATE POLICY "Admins manage organisation settings" ON public.organisation_settings
    FOR ALL USING (public.is_admin());

-- 3. Site Statistics Policies
CREATE POLICY "Public read site statistics" ON public.site_statistics
    FOR SELECT USING (true);

CREATE POLICY "Admins manage site statistics" ON public.site_statistics
    FOR ALL USING (public.is_admin());

-- 4. Activities Policies
CREATE POLICY "Public can read published activities" ON public.activities
    FOR SELECT USING (status = 'published');

CREATE POLICY "Admins have full access to activities" ON public.activities
    FOR ALL USING (public.is_admin());

-- 5. Gallery Categories & Items Policies
CREATE POLICY "Public read gallery categories" ON public.gallery_categories
    FOR SELECT USING (true);

CREATE POLICY "Admins manage gallery categories" ON public.gallery_categories
    FOR ALL USING (public.is_admin());

CREATE POLICY "Public read gallery items" ON public.gallery_items
    FOR SELECT USING (true);

CREATE POLICY "Admins manage gallery items" ON public.gallery_items
    FOR ALL USING (public.is_admin());

-- 6. Membership Requests Policies
CREATE POLICY "Anyone can submit membership request" ON public.membership_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view and manage membership requests" ON public.membership_requests
    FOR ALL USING (public.is_admin());

-- 7. Contact Messages Policies
CREATE POLICY "Anyone can submit contact message" ON public.contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view and manage contact messages" ON public.contact_messages
    FOR ALL USING (public.is_admin());

-- ====================================================================
-- AUTOMATIC PROFILE TRIGGER ON SIGNUP
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, preferred_language, role)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data->>'full_name', 'Member'),
        COALESCE(new.raw_user_meta_data->>'preferred_language', 'en'),
        'user'
    );
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ====================================================================
-- SECURE ADMIN CREATION PROCEDURE
-- Run this in Supabase SQL Editor with your desired admin email:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your-admin@email.com';
-- ====================================================================
