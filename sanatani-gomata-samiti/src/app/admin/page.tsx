'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import { createClient } from '@/lib/supabase/client';
import {
  LayoutDashboard,
  Newspaper,
  Image as ImageIcon,
  BarChart3,
  Users,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  XCircle,
  Eye,
  LogOut,
  Sun,
  ShieldCheck,
  AlertCircle,
  Filter,
  Search,
} from 'lucide-react';

interface ActivityItem {
  id: string;
  title_en: string;
  title_hi: string;
  title_bn: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
}

interface GalleryItemAdmin {
  id: string;
  title: string;
  category: string;
  media_type: 'image' | 'video';
  url: string;
}

interface MembershipItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  village: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  is_read: boolean;
}

export default function AdminDashboardPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'activities' | 'gallery' | 'statistics' | 'membership' | 'messages' | 'settings'
  >('overview');

  const [authChecked, setAuthChecked] = useState(false);
  const [adminUser, setAdminUser] = useState<string>('Admin');

  // Notification Banner
  const [notification, setNotification] = useState<string | null>(null);

  // Editable Statistics State
  const [stats, setStats] = useState({
    years: '10+',
    cowsDonated: '67',
    interestedMothers: '5000+',
    villages: 'Multiple',
  });

  // Sample Activities State (CMS)
  const [activitiesList, setActivitiesList] = useState<ActivityItem[]>([
    {
      id: '1',
      title_en: 'Connecting Rural Mothers with Indigenous Cows',
      title_hi: 'ग्रामीण माताओं को देसी गायों से जोड़ना',
      title_bn: 'গ্রামীণ মায়েদের দেশি গরুর সাথে যুক্ত করা',
      category: 'Matri Shakti',
      date: '2024-11-10',
      status: 'published',
    },
    {
      id: '2',
      title_en: 'Promoting Natural Agriculture & Cow-Based Manure',
      title_hi: 'प्राकृतिक कृषि और गो-आधारित खाद को बढ़ावा',
      title_bn: 'প্রাকৃতিক কৃষি ও গো-ভিত্তিক সারের প্রসার',
      category: 'Agriculture',
      date: '2024-10-25',
      status: 'published',
    },
    {
      id: '3',
      title_en: 'Gau Seva & Native Breed Preservation Efforts',
      title_hi: 'गौ सेवा और देसी नस्ल संरक्षण के प्रयास',
      title_bn: 'গো সেবা ও দেশি জাত সংরক্ষণের উদ্যোগ',
      category: 'Gau Seva',
      date: '2024-09-18',
      status: 'published',
    },
  ]);

  // Activity Form modal state
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [activityForm, setActivityForm] = useState({
    title_en: '',
    title_hi: '',
    title_bn: '',
    category: 'Gau Seva',
    date: '2024-11-13',
    status: 'published' as 'published' | 'draft',
  });

  // Gallery items state
  const [galleryList, setGalleryList] = useState<GalleryItemAdmin[]>([
    { id: '1', title: 'Indigenous Cow Care in Goshala', category: 'Gau Seva', media_type: 'image', url: '/images/gau-seva-1.jpg' },
    { id: '2', title: 'Mother Receiving Cow Ceremony', category: 'Matri Shakti', media_type: 'image', url: '/images/matri-1.jpg' },
    { id: '3', title: 'Natural Fertilizer Composting Camp', category: 'Agriculture', media_type: 'image', url: '/images/agri-1.jpg' },
    { id: '4', title: 'Video: Preserving Bharat Heritage', category: 'Heritage', media_type: 'video', url: '/videos/doc-1.mp4' },
  ]);

  // Gallery form state
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'Gau Seva',
    media_type: 'image' as 'image' | 'video',
    url: '',
  });

  // Membership Requests state
  const [membershipRequests, setMembershipRequests] = useState<MembershipItem[]>([
    { id: '1', name: 'Smt. Shanti Devi', phone: '+91 98765 43210', email: 'shanti@example.com', village: 'Rampur', date: '2024-11-12', status: 'pending' },
    { id: '2', name: 'Shri Rajesh Sharma', phone: '+91 98123 45678', email: 'rajesh@example.com', village: 'Kalyanpur', date: '2024-11-11', status: 'approved' },
    { id: '3', name: 'Smt. Meera Bai', phone: '+91 97654 32109', email: 'meera@example.com', village: 'Shivpur', date: '2024-11-09', status: 'pending' },
  ]);

  // Contact Inquiries state
  const [messages, setMessages] = useState<ContactInquiry[]>([
    { id: '1', name: 'Anil Kumar', email: 'anil@example.com', subject: 'Natural manure workshop in our block', message: 'Namaste, we want to host a cow-based organic compost training workshop in our village.', date: '2024-11-12', is_read: false },
    { id: '2', name: 'Pooja Verma', email: 'pooja@example.com', subject: 'Inquiring about Gomata protection volunteering', message: 'Pranam. I would like to volunteer during weekends for shelter management.', date: '2024-11-10', is_read: true },
  ]);

  // Organisation Settings
  const [orgSettings, setOrgSettings] = useState({
    orgName: 'Sanatani Gomata Samiti',
    email: 'info@sanatanigomatasamiti.org',
    phone: '+91 (India)',
    address: 'Sanatani Gomata Samiti, Bharat',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  });

  useEffect(() => {
    // Auth check
    const checkAdmin = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase')) {
        // Fallback demo/mock check
        const stored = localStorage.getItem('sgs_auth_mock');
        if (stored) {
          const parsed = JSON.parse(stored);
          setAdminUser(parsed.email || 'Admin');
        } else {
          setAdminUser('Official Administrator');
        }
        setAuthChecked(true);
        return;
      }

      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/auth/sign-in?redirect=/admin');
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') {
        router.push('/dashboard');
        return;
      }

      setAdminUser(user.email || 'Admin');
      setAuthChecked(true);
    };

    checkAdmin();
  }, [router]);

  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Activity Handlers
  const handleCreateActivity = (e: React.FormEvent) => {
    e.preventDefault();
    const newAct: ActivityItem = {
      id: Date.now().toString(),
      title_en: activityForm.title_en || 'New Activity',
      title_hi: activityForm.title_hi || activityForm.title_en,
      title_bn: activityForm.title_bn || activityForm.title_en,
      category: activityForm.category,
      date: activityForm.date,
      status: activityForm.status,
    };
    setActivitiesList([newAct, ...activitiesList]);
    setShowActivityModal(false);
    setActivityForm({
      title_en: '',
      title_hi: '',
      title_bn: '',
      category: 'Gau Seva',
      date: '2024-11-13',
      status: 'published',
    });
    notify('Activity published successfully!');
  };

  const handleDeleteActivity = (id: string) => {
    setActivitiesList(activitiesList.filter((a) => a.id !== id));
    notify('Activity deleted.');
  };

  // Gallery Handlers
  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: GalleryItemAdmin = {
      id: Date.now().toString(),
      title: galleryForm.title || 'New Gallery Item',
      category: galleryForm.category,
      media_type: galleryForm.media_type,
      url: galleryForm.url || '/images/placeholder.jpg',
    };
    setGalleryList([newItem, ...galleryList]);
    setShowGalleryModal(false);
    setGalleryForm({ title: '', category: 'Gau Seva', media_type: 'image', url: '' });
    notify('Gallery item added successfully.');
  };

  const handleDeleteGallery = (id: string) => {
    setGalleryList(galleryList.filter((g) => g.id !== id));
    notify('Gallery item removed.');
  };

  // Membership Handlers
  const handleUpdateMembership = (id: string, status: 'approved' | 'rejected') => {
    setMembershipRequests(
      membershipRequests.map((m) => (m.id === id ? { ...m, status } : m))
    );
    notify(`Request marked as ${status}.`);
  };

  const handleLogout = async () => {
    localStorage.removeItem('sgs_auth_mock');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('your_supabase')) {
      const supabase = createClient();
      await supabase.auth.signOut();
    }
    router.push('/auth/sign-in');
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCF6]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-saffron)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#211E1A] text-[#F5EFEB] shrink-0 border-r border-white/10 flex flex-col justify-between">
        <div>
          {/* Logo / Admin Badge */}
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-saffron)]/20 border border-[var(--color-saffron)]/50 flex items-center justify-center text-[var(--color-saffron)]">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">SGS Admin</span>
              <span className="text-[10px] text-[var(--color-saffron)] uppercase font-semibold">
                Control Center
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t('admin.overview')}</span>
            </button>

            <button
              onClick={() => setActiveTab('activities')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'activities'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Activities & CMS</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'gallery'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Gallery & Media</span>
            </button>

            <button
              onClick={() => setActiveTab('statistics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'statistics'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Impact Statistics</span>
            </button>

            <button
              onClick={() => setActiveTab('membership')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'membership'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Membership Requests</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'messages'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Inquiries</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === 'settings'
                  ? 'bg-[var(--color-saffron)] text-white'
                  : 'text-[#C5BDB2] hover:bg-white/5 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Org Settings</span>
            </button>
          </nav>
        </div>

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="px-3 py-2 rounded-xl bg-white/5 text-[11px] text-[#A89F94]">
            <span className="block font-semibold text-white truncate">{adminUser}</span>
            <span className="text-[var(--color-saffron)]">Authorized Administrator</span>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-950/40 text-red-300 hover:bg-red-900/60 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Top Notification Toast */}
        {notification && (
          <div className="mb-6 p-4 rounded-2xl bg-[var(--color-green)] text-white text-xs font-bold flex items-center gap-2 shadow-lg animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                System Overview
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Real-time snapshot of Sanatani Gomata Samiti content and community participation.
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                  Published Activities
                </span>
                <div className="text-3xl font-extrabold text-[var(--color-dark)] mt-2">
                  {activitiesList.length}
                </div>
                <span className="text-[11px] text-[var(--color-green)] font-semibold mt-1 block">
                  Active in 3 Languages
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                  Gallery Assets
                </span>
                <div className="text-3xl font-extrabold text-[var(--color-dark)] mt-2">
                  {galleryList.length}
                </div>
                <span className="text-[11px] text-[var(--color-saffron-deep)] font-semibold mt-1 block">
                  Photos & Videos
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                  Membership Inquiries
                </span>
                <div className="text-3xl font-extrabold text-[var(--color-dark)] mt-2">
                  {membershipRequests.length}
                </div>
                <span className="text-[11px] text-amber-600 font-semibold mt-1 block">
                  {membershipRequests.filter((m) => m.status === 'pending').length} Pending Review
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                  Contact Inquiries
                </span>
                <div className="text-3xl font-extrabold text-[var(--color-dark)] mt-2">
                  {messages.length}
                </div>
                <span className="text-[11px] text-blue-600 font-semibold mt-1 block">
                  {messages.filter((m) => !m.is_read).length} Unread
                </span>
              </div>
            </div>

            {/* Quick Actions & Recent Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <h3 className="font-bold text-base text-[var(--color-dark)] mb-4">
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  {activitiesList.slice(0, 3).map((act) => (
                    <div key={act.id} className="p-3.5 rounded-2xl bg-[var(--color-cream)]/50 border border-[var(--color-border-light)] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[var(--color-dark)] block">{act.title_en}</span>
                        <span className="text-[10px] text-[var(--color-muted)]">{act.category} • {act.date}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green-dark)] text-[10px] font-bold uppercase">
                        {act.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs">
                <h3 className="font-bold text-base text-[var(--color-dark)] mb-4">
                  Pending Membership Requests
                </h3>
                <div className="space-y-3">
                  {membershipRequests.slice(0, 3).map((req) => (
                    <div key={req.id} className="p-3.5 rounded-2xl bg-[var(--color-cream)]/50 border border-[var(--color-border-light)] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[var(--color-dark)] block">{req.name}</span>
                        <span className="text-[10px] text-[var(--color-muted)]">{req.village} • {req.phone}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
                        {req.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ACTIVITIES & CMS */}
        {activeTab === 'activities' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                  Manage Activities & News
                </h1>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  Add, edit, or remove organizational activities in English, Hindi, and Bengali.
                </p>
              </div>
              <button
                onClick={() => setShowActivityModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white text-xs font-semibold shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Activity</span>
              </button>
            </div>

            {/* Activities Table */}
            <div className="bg-white rounded-3xl border border-[var(--color-border-light)] shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[var(--color-cream)] text-[var(--color-dark)] border-b border-[var(--color-border-light)] uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="px-6 py-4">Title (EN / HI / BN)</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-light)]">
                  {activitiesList.map((act) => (
                    <tr key={act.id} className="hover:bg-amber-50/30">
                      <td className="px-6 py-4">
                        <span className="font-bold text-[var(--color-dark)] block">{act.title_en}</span>
                        <span className="text-[11px] text-[var(--color-muted)] block">HI: {act.title_hi}</span>
                        <span className="text-[11px] text-[var(--color-muted)] block">BN: {act.title_bn}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-[var(--color-saffron-deep)]">
                        {act.category}
                      </td>
                      <td className="px-6 py-4 text-[var(--color-muted)]">
                        {act.date}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green-dark)] text-[10px] font-bold uppercase">
                          {act.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDeleteActivity(act.id)}
                          className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                          title="Delete Activity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Create Activity Modal */}
            {showActivityModal && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl animate-scale-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg text-[var(--color-dark)]">
                      Create Activity / Announcement
                    </h3>
                    <button
                      onClick={() => setShowActivityModal(false)}
                      className="w-8 h-8 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-dark)]"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleCreateActivity} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[var(--color-dark)] mb-1">
                        Title (English) *
                      </label>
                      <input
                        type="text"
                        required
                        value={activityForm.title_en}
                        onChange={(e) => setActivityForm({ ...activityForm, title_en: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        placeholder="e.g. Free Indigenous Cow Distribution Camp"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[var(--color-dark)] mb-1">
                        Title (Hindi - हिन्दी) *
                      </label>
                      <input
                        type="text"
                        required
                        value={activityForm.title_hi}
                        onChange={(e) => setActivityForm({ ...activityForm, title_hi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        placeholder="उदा: निःशुल्क देसी गाय वितरण शिविर"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[var(--color-dark)] mb-1">
                        Title (Bengali - বাংলা) *
                      </label>
                      <input
                        type="text"
                        required
                        value={activityForm.title_bn}
                        onChange={(e) => setActivityForm({ ...activityForm, title_bn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        placeholder="উদা: বিনামূল্যে দেশি গরু বিতরণ শিবির"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-[var(--color-dark)] mb-1">
                          Category
                        </label>
                        <select
                          value={activityForm.category}
                          onChange={(e) => setActivityForm({ ...activityForm, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        >
                          <option value="Gau Seva">Gau Seva</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Matri Shakti">Matri Shakti</option>
                          <option value="Rural Development">Rural Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-[var(--color-dark)] mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          value={activityForm.date}
                          onChange={(e) => setActivityForm({ ...activityForm, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowActivityModal(false)}
                        className="px-5 py-2.5 rounded-full border border-[var(--color-border)] font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-[var(--color-saffron)] text-white font-semibold hover:bg-[var(--color-saffron-deep)]"
                      >
                        Publish Activity
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: GALLERY & MEDIA */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                  Gallery & Media Vault
                </h1>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  Upload and manage photo and video documentation of initiatives.
                </p>
              </div>
              <button
                onClick={() => setShowGalleryModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white text-xs font-semibold shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Upload Media Asset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-[var(--color-border-light)] overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div className="aspect-16/9 bg-[var(--color-cream)] flex items-center justify-center p-6 border-b border-[var(--color-border-light)] relative">
                    <ImageIcon className="w-8 h-8 text-[var(--color-saffron)]" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-[var(--color-dark)] shadow-xs">
                      {item.category}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[var(--color-saffron)]/10 text-[var(--color-saffron-deep)] text-[10px] font-bold uppercase">
                      {item.media_type}
                    </span>
                  </div>

                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-[var(--color-dark)]">{item.title}</h4>
                      <span className="text-[10px] text-[var(--color-muted)] font-mono">{item.url}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteGallery(item.id)}
                      className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                      title="Delete Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for adding gallery item */}
            {showGalleryModal && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl animate-scale-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg text-[var(--color-dark)]">
                      Upload New Media
                    </h3>
                    <button
                      onClick={() => setShowGalleryModal(false)}
                      className="w-8 h-8 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-dark)]"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleAddGalleryItem} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[var(--color-dark)] mb-1">
                        Title / Caption *
                      </label>
                      <input
                        type="text"
                        required
                        value={galleryForm.title}
                        onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        placeholder="e.g. Village Goshala Care Activities"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-[var(--color-dark)] mb-1">
                          Category
                        </label>
                        <select
                          value={galleryForm.category}
                          onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        >
                          <option value="Gau Seva">Gau Seva</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Matri Shakti">Matri Shakti</option>
                          <option value="Rural Development">Rural Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-[var(--color-dark)] mb-1">
                          Media Type
                        </label>
                        <select
                          value={galleryForm.media_type}
                          onChange={(e) => setGalleryForm({ ...galleryForm, media_type: e.target.value as 'image' | 'video' })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        >
                          <option value="image">Photograph (Image)</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-[var(--color-dark)] mb-1">
                        Media File URL / Storage Key
                      </label>
                      <input
                        type="text"
                        value={galleryForm.url}
                        onChange={(e) => setGalleryForm({ ...galleryForm, url: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                        placeholder="https://... or /images/..."
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowGalleryModal(false)}
                        className="px-5 py-2.5 rounded-full border border-[var(--color-border)] font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-[var(--color-saffron)] text-white font-semibold hover:bg-[var(--color-saffron-deep)]"
                      >
                        Save Media
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: IMPACT STATISTICS */}
        {activeTab === 'statistics' && (
          <div className="space-y-6 animate-fade-in max-w-3xl">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                Manage Verified Organization Figures
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Edit the homepage metrics. Only update based on verified organizational data.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-dark)] mb-1.5">
                    Years of Personal Initiative
                  </label>
                  <input
                    type="text"
                    value={stats.years}
                    onChange={(e) => setStats({ ...stats, years: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-bold text-[var(--color-saffron-deep)] outline-none focus:border-[var(--color-saffron)]"
                  />
                  <span className="text-[10px] text-[var(--color-muted)] mt-1 block">
                    Verified record: 10+ years of dedicated initiative.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-dark)] mb-1.5">
                    Mothers Received Cows
                  </label>
                  <input
                    type="text"
                    value={stats.cowsDonated}
                    onChange={(e) => setStats({ ...stats, cowsDonated: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-bold text-[var(--color-saffron-deep)] outline-none focus:border-[var(--color-saffron)]"
                  />
                  <span className="text-[10px] text-[var(--color-muted)] mt-1 block">
                    Verified record: 67 mothers have received cows.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-dark)] mb-1.5">
                    Mothers Expressed Interest
                  </label>
                  <input
                    type="text"
                    value={stats.interestedMothers}
                    onChange={(e) => setStats({ ...stats, interestedMothers: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-bold text-[var(--color-saffron-deep)] outline-none focus:border-[var(--color-saffron)]"
                  />
                  <span className="text-[10px] text-[var(--color-muted)] mt-1 block">
                    Verified record: 5000+ mothers across villages expressed interest.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--color-dark)] mb-1.5">
                    Villages Connected
                  </label>
                  <input
                    type="text"
                    value={stats.villages}
                    onChange={(e) => setStats({ ...stats, villages: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-bold text-[var(--color-saffron-deep)] outline-none focus:border-[var(--color-saffron)]"
                  />
                  <span className="text-[10px] text-[var(--color-muted)] mt-1 block">
                    Active reach across rural communities.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-light)] flex justify-end">
                <button
                  onClick={() => notify('Statistics updated successfully!')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white text-xs font-semibold shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Statistics</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MEMBERSHIP REQUESTS */}
        {activeTab === 'membership' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                Membership Inquiries
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Review and approve individuals wanting to join the Sanatani Gomata Samiti mission.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[var(--color-border-light)] shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[var(--color-cream)] text-[var(--color-dark)] border-b border-[var(--color-border-light)] uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="px-6 py-4">Applicant</th>
                    <th className="px-6 py-4">Village / Location</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-light)]">
                  {membershipRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-amber-50/30">
                      <td className="px-6 py-4 font-bold text-[var(--color-dark)]">
                        {req.name}
                      </td>
                      <td className="px-6 py-4 text-[var(--color-muted)]">
                        {req.village}
                      </td>
                      <td className="px-6 py-4">
                        <span className="block font-medium text-[var(--color-dark)]">{req.phone}</span>
                        <span className="text-[10px] text-[var(--color-muted)]">{req.email}</span>
                      </td>
                      <td className="px-6 py-4 text-[var(--color-muted)]">
                        {req.date}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                            req.status === 'approved'
                              ? 'bg-[var(--color-green)]/10 text-[var(--color-green-dark)]'
                              : req.status === 'rejected'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        {req.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleUpdateMembership(req.id, 'approved')}
                              className="px-3 py-1 rounded-full bg-[var(--color-green)] text-white text-[10px] font-bold hover:bg-[var(--color-green-dark)]"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleUpdateMembership(req.id, 'rejected')}
                              className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold hover:bg-red-700"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 6: CONTACT INQUIRIES */}
        {activeTab === 'messages' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                Contact Messages
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Messages submitted via the public contact form.
              </p>
            </div>

            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white rounded-3xl p-6 border border-[var(--color-border-light)] shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[var(--color-dark)]">{msg.name}</span>
                      <span className="text-xs text-[var(--color-muted)]">({msg.email})</span>
                    </div>
                    <span className="text-xs text-[var(--color-muted)]">{msg.date}</span>
                  </div>

                  <h4 className="font-bold text-xs text-[var(--color-saffron-deep)] mb-2">
                    Subject: {msg.subject}
                  </h4>

                  <p className="text-xs text-[var(--color-dark)]/90 bg-[var(--color-cream)]/50 p-4 rounded-2xl border border-[var(--color-border-light)] leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ORG SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6 animate-fade-in max-w-3xl">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-dark)]">
                Organization Information & Links
              </h1>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Update official contact address, phone, email, and social networks without modifying source code.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border-light)] shadow-xs space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div>
                  <label className="block font-bold text-[var(--color-dark)] mb-1">
                    Organization Official Name
                  </label>
                  <input
                    type="text"
                    value={orgSettings.orgName}
                    onChange={(e) => setOrgSettings({ ...orgSettings, orgName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[var(--color-dark)] mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={orgSettings.email}
                    onChange={(e) => setOrgSettings({ ...orgSettings, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[var(--color-dark)] mb-1">
                    Official Phone
                  </label>
                  <input
                    type="text"
                    value={orgSettings.phone}
                    onChange={(e) => setOrgSettings({ ...orgSettings, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[var(--color-dark)] mb-1">
                    Address / Region
                  </label>
                  <input
                    type="text"
                    value={orgSettings.address}
                    onChange={(e) => setOrgSettings({ ...orgSettings, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] outline-none focus:border-[var(--color-saffron)]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-light)]">
                <h4 className="font-bold text-xs text-[var(--color-dark)] mb-3">
                  Social Channels
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-[var(--color-muted)] mb-1">Facebook</label>
                    <input
                      type="url"
                      value={orgSettings.facebook}
                      onChange={(e) => setOrgSettings({ ...orgSettings, facebook: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[var(--color-border)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[var(--color-muted)] mb-1">Instagram</label>
                    <input
                      type="url"
                      value={orgSettings.instagram}
                      onChange={(e) => setOrgSettings({ ...orgSettings, instagram: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[var(--color-border)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[var(--color-muted)] mb-1">Twitter / X</label>
                    <input
                      type="url"
                      value={orgSettings.twitter}
                      onChange={(e) => setOrgSettings({ ...orgSettings, twitter: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[var(--color-border)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[var(--color-muted)] mb-1">YouTube</label>
                    <input
                      type="url"
                      value={orgSettings.youtube}
                      onChange={(e) => setOrgSettings({ ...orgSettings, youtube: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[var(--color-border)] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => notify('Organization settings saved.')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-saffron)] hover:bg-[var(--color-saffron-deep)] text-white text-xs font-semibold shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Configuration</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
