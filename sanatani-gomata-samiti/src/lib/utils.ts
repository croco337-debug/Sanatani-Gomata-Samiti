import type { Language } from '@/types';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string, language: Language = 'en'): string {
  const date = new Date(dateString);
  const localeMap: Record<Language, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    bn: 'bn-IN',
  };
  return date.toLocaleDateString(localeMap[language], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getLocalizedField<T extends Record<string, unknown>>(
  item: T,
  field: string,
  language: Language
): string {
  const key = `${field}_${language}` as keyof T;
  const fallback = `${field}_en` as keyof T;
  return (item[key] as string) || (item[fallback] as string) || '';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function getImageUrl(path: string | null | undefined): string {
  if (!path) return '/images/placeholder.jpg';
  if (path.startsWith('http')) return path;
  // Supabase storage URL construction
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (supabaseUrl && path.startsWith('/')) {
    return `${supabaseUrl}/storage/v1/object/public${path}`;
  }
  return path;
}
