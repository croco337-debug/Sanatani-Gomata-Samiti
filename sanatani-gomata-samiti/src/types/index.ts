// Core application types

export type Language = 'en' | 'hi' | 'bn';

export type LanguageInfo = {
  code: Language;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
};

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', direction: 'ltr' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', direction: 'ltr' },
];

export type UserRole = 'user' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  preferred_language: Language;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Activity {
  id: string;
  title_en: string;
  title_hi: string;
  title_bn: string;
  description_en: string;
  description_hi: string;
  description_bn: string;
  content_en?: string;
  content_hi?: string;
  content_bn?: string;
  cover_image?: string;
  category: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface GalleryCategory {
  id: string;
  name_en: string;
  name_hi: string;
  name_bn: string;
  slug: string;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title_en?: string;
  title_hi?: string;
  title_bn?: string;
  description_en?: string;
  description_hi?: string;
  description_bn?: string;
  media_url: string;
  media_type: 'image' | 'video';
  category_id?: string;
  category?: GalleryCategory;
  sort_order: number;
  created_at: string;
}

export interface MembershipRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  village?: string;
  district?: string;
  state?: string;
  message?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface SiteStatistic {
  id: string;
  key: string;
  value: string;
  label_en: string;
  label_hi: string;
  label_bn: string;
  icon?: string;
  sort_order: number;
}

export interface OrganisationSettings {
  id: string;
  key: string;
  value_en: string;
  value_hi: string;
  value_bn: string;
  category: string;
  updated_at: string;
}

export interface NavItem {
  labelKey: string;
  href: string;
  children?: NavItem[];
}
