'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';
import type { Language } from '@/types';
import { Camera, Image as ImageIcon, ArrowRight, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LocalizedContent {
  title: string;
  caption: string;
  imageTitles?: string[];
  imageCaptions?: string[];
}

interface GalleryPillarItem {
  key: 'gauSeva' | 'agriculture' | 'matriShakti' | 'ruralDev';
  image?: string;
  images?: string[];
  en: LocalizedContent;
  hi: LocalizedContent;
  bn: LocalizedContent;
}

const categoryNames: Record<string, Record<'en' | 'hi' | 'bn', string>> = {
  gauSeva: { en: 'Gau Seva', hi: 'गौ सेवा', bn: 'গো সেবা' },
  agriculture: { en: 'Agriculture', hi: 'जैविक कृषि', bn: 'জৈবিক কৃষি' },
  matriShakti: { en: 'Matri Shakti', hi: 'मातृशक्ति', bn: 'মাতৃশক্তি' },
  ruralDev: { en: 'Agricultural Development', hi: 'कृषि विकास', bn: 'কৃষি উন্নয়ন' },
};

const uiText: Record<'en' | 'hi' | 'bn', {
  viewPhoto: string;
  photosCount: (n: number) => string;
  photosBadge: (n: number) => string;
  photoProgress: (curr: number, total: number) => string;
  selectPhoto: string;
  photoTab: (n: number) => string;
  archiveBadge: string;
  officialDoc: string;
  closeBtn: string;
}> = {
  en: {
    viewPhoto: 'View Photo',
    photosCount: (n) => `${n} Photos`,
    photosBadge: (n) => `${n} Photos Available`,
    photoProgress: (curr, total) => `Photo ${curr} of ${total}`,
    selectPhoto: 'Select Photo:',
    photoTab: (n) => `Photo ${n}`,
    archiveBadge: 'Official Archive',
    officialDoc: 'Sanatani Gomata Samiti • Official Documentation',
    closeBtn: 'Close',
  },
  hi: {
    viewPhoto: 'फ़ोटो देखें',
    photosCount: (n) => `${n} फ़ोटो`,
    photosBadge: (n) => `${n} फ़ोटो उपलब्ध`,
    photoProgress: (curr, total) => `फ़ोटो ${curr} / ${total}`,
    selectPhoto: 'फ़ोटो चुनें:',
    photoTab: (n) => `फ़ोटो ${n}`,
    archiveBadge: 'आधिकारिक अभिलेखागार',
    officialDoc: 'सनातनी गोमाता समिति • आधिकारिक दस्तावेज़ीकरण',
    closeBtn: 'बंद करें',
  },
  bn: {
    viewPhoto: 'ছবি দেখুন',
    photosCount: (n) => `${n}টি ছবি`,
    photosBadge: (n) => `${n}টি ছবি উপলব্ধ`,
    photoProgress: (curr, total) => `ছবি ${curr} / ${total}`,
    selectPhoto: 'ছবি বাছুন:',
    photoTab: (n) => `ছবি ${n}`,
    archiveBadge: 'অফিসিয়াল আর্কাইভ',
    officialDoc: 'সনাতনী গোমাতা সমিতি • অফিসিয়াল গ্যালারি',
    closeBtn: 'বন্ধ করুন',
  },
};

export default function GalleryPreview() {
  const { language, t } = useLanguage();
  const currentLang: 'en' | 'hi' | 'bn' = (language === 'hi' || language === 'bn') ? language : 'en';
  const strings = uiText[currentLang];

  const pillarItems: GalleryPillarItem[] = [
    {
      key: 'gauSeva',
      image: '/images/gau-seva-care-1.jpg',
      images: [
        '/images/gau-seva-care-1.jpg',
        '/images/gir-cow-indigenous.jpg',
        '/images/mother-cow-nursing-calf.jpg',
        '/images/young-calves-pasture.jpg',
        '/images/calves-affection.jpg',
      ],
      en: {
        title: 'Gau Seva & Shelter Care',
        caption: 'Direct community engagement in indigenous cow care, shelter maintenance, and affection.',
        imageTitles: [
          'Photo 1: Gau Seva & Daily Care',
          'Photo 2: Sacred Indigenous Gir Cow',
          'Photo 3: Mother Cow & Nursing Calf',
          'Photo 4: Indigenous Calves in Pasture',
          'Photo 5: Gentle Affection of Calves',
        ],
        imageCaptions: [
          'Community volunteers providing attentive daily care and shelter maintenance for sacred cows.',
          'Majestic indigenous Gir cow exemplifying the noble heritage and vitality of Indian desi breeds.',
          'Maternal affection and natural bond as mother cow tenderly feeds and protects her newborn calf.',
          'Young indigenous calves grazing peacefully and bonding in green open rural surroundings.',
          'Heartwarming portrait of young calves resting together in tender mutual companionship.',
        ],
      },
      hi: {
        title: 'गौ सेवा एवं देखरेख',
        caption: 'देशी गोमाता की प्रत्यक्ष सेवा, सान्निध्य एवं आश्रय स्थल की सामुदायिक देखरेख पहल।',
        imageTitles: [
          'चित्र १: गौ सेवा एवं नित्य देखरेख',
          'चित्र २: दिव्य देशी गिर गोमाता',
          'चित्र ३: वात्सल्यमयी गोमाता एवं बछड़ा',
          'चित्र ४: हरित प्रांगण में देशी बछड़े',
          'चित्र ५: बछड़ों का निश्छल स्नेह',
        ],
        imageCaptions: [
          'गोशाला में गोमाता की नित्य सेवा, सान्निध्य और पवित्र गो-संवर्धन में समर्पित स्वयंसेवक।',
          'भारतीय देशी गोवंश की भव्यता, सहज गरिमा और अमृततुल्य पोषण की प्रतीक दिव्य गिर गोमाता।',
          'मातृत्व की पावन अभिव्यक्ति, जहाँ वात्सल्यमयी गोमाता अपने नवजात बछड़े को स्नेहपूर्ण दुग्धपान कराती है।',
          'प्रकृति की गोद में स्वतंत्रतापूर्वक विचरण करते और परस्पर प्रेम प्रकट करते सुंदर देशी बछड़े।',
          'परस्पर सानिध्य और निश्छल प्रेम का सुंदर दृश्य, जो गोवंश की सहज सरलता को दर्शाता है।',
        ],
      },
      bn: {
        title: 'গো সেবা ও যত্ন',
        caption: 'সরাসরি দেশি গোমাতার সেবা, সান্নিধ্য ও যত্ন কার্যক্রম।',
        imageTitles: [
          'ছবি ১: গো সেবা ও দৈনন্দিন যত্ন',
          'ছবি ২: পবিত্র দেশি গির গোমাতা',
          'ছবি ৩: বাৎসল্যময়ী গোমাতা ও বাছুর',
          'ছবি ৪: উন্মুক্ত প্রাঙ্গণে চঞ্চল বাছুর',
          'ছবি ৫: বাছুরের অনাবিল স্নেহ',
        ],
        imageCaptions: [
          'গোশালায় দেশি গোমাতার পরম স্নেহ ও নিবিড় পরিচর্যায় নিবেদিত সেবাব্রতী।',
          'ভারতীয় ঐতিহ্য ও অমৃতময় দুগ্ধের ধারক অনুপম সৌন্দর্যমণ্ডিত দেশি গির গোমাতা।',
          'মাতৃত্বের এক অনাবিল দৃশ্য, যেখানে পরম স্নেহে গোমাতা তার নবজাতক বাছুরকে দুগ্ধপান করাচ্ছে।',
          'সবুজ প্রকৃতির সান্নিধ্যে মুক্তভাবে বিচরণরত এবং সৌহার্দ্যপূর্ণ সম্পর্কে আবদ্ধ দেশি বাছুর।',
          'পরস্পরের প্রতি পরম অনুরাগ ও শান্ত সহাবস্থানের মনোরম দৃশ্যে তরুণ বাছুরযুগল।',
        ],
      },
    },
    {
      key: 'agriculture',
      image: '/images/natural-farming-1.jpg',
      images: [
        '/images/natural-farming-1.jpg',
        '/images/natural-farming-2.jpg',
        '/images/rural-farmer-paddy.jpg',
      ],
      en: {
        title: 'Natural Farming Initiatives',
        caption: 'Reviving natural farming practices and soil cultivation using indigenous cows and sustainable agricultural methods.',
        imageTitles: [
          'Photo 1: Soil Tilling with Oxen & Tractor',
          'Photo 2: Paddy Plantation in Lush Green Fields',
          'Photo 3: Lush Paddy Fields & Rural Farmer',
        ],
        imageCaptions: [
          'Integrating traditional indigenous oxen and agricultural machinery for natural soil preparation.',
          'Farmers planting and nurturing crops nourished with organic indigenous cow preparations.',
          'Flourishing verdant rice fields and farmer tending to naturally nourished rural cropland.',
        ],
      },
      hi: {
        title: 'प्राकृतिक एवं जैविक कृषि पहल',
        caption: 'देशी गोमाता के सान्निध्य और जैविक खाद के माध्यम से विषमुक्त प्राकृतिक खेती का पुनरुद्धार।',
        imageTitles: [
          'चित्र १: बैलों व ट्रैक्टर की सहायता से जुताई',
          'चित्र २: हरे-भरे खेतों में धान की रोपाई',
          'चित्र ३: हरित धान के खेत एवं ग्रामीण किसान',
        ],
        imageCaptions: [
          'पारंपरिक देशी बैलों एवं आधुनिक कृषि विधियों के समन्वय से खेत की प्राकृतिक तैयारी।',
          'गोकृपा व जैविक पोषण से लहलहाते खेतों में किसानों द्वारा धान की रोपाई व देखरेख।',
          'प्राकृतिक गो-संस्कृति से लहलहाती हरी-भरी फसल और खेत में कार्य करते आत्मनिर्भर किसान।',
        ],
      },
      bn: {
        title: 'জৈবিক কৃষি ও প্রাকৃতিক চাষ',
        caption: 'দেশি গো-সম্পদ ও জৈবিক সার ব্যবহারের মাধ্যমে বিষমুক্ত প্রাকৃতিক কৃষিকাজ পুনরুজ্জীবন।',
        imageTitles: [
          'ছবি ১: বলদ ও ট্র্যাক্টরের সহায়তায় জমি চাষ',
          'ছবি ২: সবুজ ধানক্ষেতে কৃষকদের চারা রোপণ',
          'ছবি ৩: বিস্তীর্ণ সবুজ ধানক্ষেত ও গ্রামীণ কৃষক',
        ],
        imageCaptions: [
          'ঐতিহ্যবাহী বলদ ও আধুনিক কৃষি সমন্বয়ে প্রাকৃতিক পদ্ধতিতে জমি প্রস্তুতকরণ।',
          'দেশি গো-সার ও প্রাকৃতিক পুষ্টিতে পুষ্ট সবুজ ফসলি জমিতে কৃষকদের চারা রোপণ।',
          'প্রাকৃতিক কৃষি ও দেশি গো-সম্পদের আশীর্বাদে লহলাহা ফসলি জমি এবং ক্ষেতের পরিচর্যারত কৃষক।',
        ],
      },
    },
    {
      key: 'matriShakti',
      image: '/images/matri-shakti-distribution-program.jpg',
      images: [
        '/images/matri-shakti-distribution-program.jpg',
        '/images/matri-shakti-community-orientation.jpg',
        '/images/matri-shakti-traditional-ceremony.jpg',
        '/images/matri-shakti-sacred-blessings.jpg',
        '/images/matri-shakti-vedic-satsang.jpg',
      ],
      en: {
        title: 'Matri Shakti Empowerment & Cow Distribution',
        caption: 'Connecting village mothers with indigenous cows for nutritional security and dignified self-reliant livelihoods.',
        imageTitles: [
          'Photo 1: Gomata Pujon & Distribution Assembly',
          'Photo 2: Community Dialogue & Orientation Session',
          'Photo 3: Sacred Matri Shakti Vedic Ceremony',
          'Photo 4: Ceremonial Blessings & Flower Garlanding',
          'Photo 5: Matri Shakti Spiritual Yajna & Gathering',
        ],
        imageCaptions: [
          'Rural mothers and committee members gather for the sacred cow distribution program at Mahishal, Gazole, Malda.',
          'Interactive orientation and capacity-building discussion with village women on sustainable livelihood and cow care.',
          'Solemn traditional reverence honoring mothers dressed in auspicious white and red border attire.',
          'Honoring and garlanding revered elders and mothers in devotion to divine maternal power.',
          'Sacred ritual and collective Vedic invocation surrounded by revered mothers in traditional red-bordered attire.',
        ],
      },
      hi: {
        title: 'मातृशक्ति स्वावलंबन एवं गो-वितरण',
        caption: 'ग्रामीण माताओं के पोषण एवं स्वावलंबी आजीविका हेतु देशी गोमाता वितरण व सहयोग पहल।',
        imageTitles: [
          'चित्र १: गोमाता पूजन एवं वितरण सभा',
          'चित्र २: सामुदायिक संवाद एवं स्वावलंबन सत्र',
          'चित्र ३: पावन मातृशक्ति वैदिक वंदन',
          'चित्र ४: मातृशक्ति का पावन पुष्प-माल्यार्पण',
          'चित्र ५: मातृशक्ति आध्यात्मिक यज्ञ एवं सामूहिक सत्संग',
        ],
        imageCaptions: [
          'महिशाल, गाजोल, मालदा में पवित्र गोमाता पूजन एवं ग्रामीण माताओं के लिए गो-वितरण सभा।',
          'गो-पालन, पोषण सुरक्षा एवं आर्थिक स्वावलंबन पर ग्रामीण महिलाओं के साथ संवादात्मक मार्गदर्शन सत्र।',
          'पारंपरिक मांगलिक श्वेत-रक्त परिधान में सुसज्जित मातृशक्ति का आध्यात्मिक अभिनंदन व मंगल घट पूजन।',
          'सनातनी संस्कारों के अंतर्गत पूज्य माताओं का श्रद्धापूर्वक माल्यार्पण एवं चरण-वंदन।',
          'मांगलिक लाल पाड़ वस्त्रों में सुसज्जित पूज्य माताओं के सान्निध्य में पावन वैदिक घट पूजन एवं सामूहिक सत्संग।',
        ],
      },
      bn: {
        title: 'মাতৃশক্তির ক্ষমতায়ন ও গো-সহায়তা',
        caption: 'গ্রামের মায়েদের পুষ্টি ও স্বনির্ভর জীবিকার জন্য দেশি গোমাতা হস্তান্তর ও সহায়তা কার্যক্রম।',
        imageTitles: [
          'ছবি ১: গোমাতা পূজন ও বিতরণ সমাবেশ',
          'ছবি ২: গ্রামীণ স্বনির্ভরতা ও পথনির্দেশিকা সভা',
          'ছবি ৩: পবিত্র মাতৃশক্তি বরণ ও মাঙ্গলিক অনুষ্ঠান',
          'ছবি ৪: পূজনীয় মাতৃশক্তির পুষ্পমাল্য বরণ',
          'ছবি ৫: মাতৃশক্তি মাঙ্গলিক যজ্ঞ ও সম্মিলিত সৎসঙ্গ',
        ],
        imageCaptions: [
          'মহিষাল, গাজোল, মালদায় পবিত্র গোমাতা পূজন ও গ্রামীণ মায়েদের গো-বিতরণ কার্যক্রমের প্রাক্কালে সম্মিলিত সমাবেশ।',
          'গো-পালন, পুষ্টির নিরাপত্তা ও গ্রামীণ স্বনির্ভরতা বিষয়ে মায়েদের সাথে অনুপ্রেরণামূলক মতবিনিময় সভা।',
          'মঙ্গল ঘট ও প্রদীপের স্নিগ্ধ আলোয় ঐতিহ্যবাহী লাল পাড় শাড়ি পরিহিতা পূজনীয় মাতৃশক্তির শ্রদ্ধার্ঘ্য ও বন্দনা।',
          'সনাতনী ঐতিহ্যের ধারায় মাতৃস্বরূপা মায়েদের শ্রদ্ধাপূর্ণ পুষ্পমাল্য অর্পণ ও আশীর্বাদ গ্রহণ।',
          'পবিত্র লাল পাড় শাড়ি পরিহিতা শ্রদ্ধেয় মাতৃমণ্ডলীর সান্নিধ্যে মাঙ্গলিক ঘট পূজন ও বৈদিক সৎসঙ্গ অনুষ্ঠান।',
        ],
      },
    },
    {
      key: 'ruralDev',
      image: '/images/agricultural-development-award.jpg',
      images: [
        '/images/agricultural-development-award.jpg',
        '/images/agri-icar-integrated-farming-system.jpg',
        '/images/agri-icar-swaminathan-library.jpg',
        '/images/agri-icar-training-conference.jpg',
        '/images/agri-icar-natural-farming-field.jpg',
        '/images/agri-icar-paddy-field-demonstration.jpg',
        '/images/agri-icar-duckery-aquaculture.jpg',
        '/images/agri-icar-pulse-research-visit.jpg',
        '/images/agri-icar-crop-canopy-inspection.jpg',
      ],
      en: {
        title: 'Agricultural Development & National Research Recognition',
        caption: 'Honored with prestigious agricultural research and extension recognition from eminent scientists at ICAR and national agricultural institutes.',
        imageTitles: [
          'Photo 1: National Agricultural Research Recognition Award',
          'Photo 2: Integrated Farming System Model (ICAR-IARI)',
          'Photo 3: Prof. M S Swaminathan Library Heritage',
          'Photo 4: Women Farmers Training Conference',
          'Photo 5: Natural Farming Experimental Field Plot',
          'Photo 6: Lush Green Paddy Field Demonstration',
          'Photo 7: Duckery & Integrated Aquaculture Pond',
          'Photo 8: Crop Canopy & Legume Field Inspection',
          'Photo 9: Farm Field Trial & Agronomy Walkthrough',
        ],
        imageCaptions: [
          'Honored with prestigious agricultural research and extension recognition from eminent scientists at ICAR and national agricultural institutes.',
          'Small farm-holder integrated model visit at the Division of Agronomy, ICAR - Indian Agricultural Research Institute, New Delhi.',
          'Group assembly of rural farmers and agricultural delegates at the historic Prof. M S Swaminathan Library, ICAR-IARI.',
          'High-level agricultural workshop and consultative meeting on modern sustainable farming with national directors.',
          'Observing zero-chemical, indigenous cow-based natural farming crops and maize cultivation trials.',
          'Hands-on field inspection of sustainable rice cultivation and eco-friendly crop nutrition methods.',
          'Sustainable duckery farming integrated with farm ponds for circular rural livelihood and water management.',
          'Exploring high-yielding pulse varieties, organic soil conditioning, and pest resilience.',
          'Field walkthrough with leading agronomists studying crop diversity and sustainable village production.',
        ],
      },
      hi: {
        title: 'कृषि विकास एवं राष्ट्रीय कृषि अनुसंधान सम्मान',
        caption: 'भारतीय कृषि अनुसंधान संस्थान (ICAR) के वरिष्ठ वैज्ञानिकों एवं निदेशकों द्वारा कृषि विकास व प्रसार क्षेत्र में उत्कृष्ट सम्मान।',
        imageTitles: [
          'चित्र १: राष्ट्रीय कृषि अनुसंधान सम्मान समारोह',
          'चित्र २: समन्वित कृषि प्रणाली मॉडल (भा.कृ.अनु.प. - नई दिल्ली)',
          'चित्र ३: प्रो. एम. एस. स्वामीनाथन पुस्तकालय परिसर',
          'चित्र ४: महिला कृषक प्रशिक्षण एवं संवाद संगोष्ठी',
          'चित्र ५: प्राकृतिक एवं जैविक कृषि प्रक्षेत्र',
          'चित्र ६: हरित धान प्रक्षेत्र एवं तकनीकी प्रदर्शन',
          'चित्र ७: बत्तख पालन एवं समन्वित जलीय कृषि',
          'चित्र ८: दलहन एवं फसल विस्तार प्रक्षेत्र भ्रमण',
          'चित्र ९: प्रायोगिक फसल प्रक्षेत्र व कृषि विशेषज्ञ मार्गदर्शन',
        ],
        imageCaptions: [
          'भारतीय कृषि अनुसंधान संस्थान (ICAR) के वरिष्ठ वैज्ञानिकों एवं निदेशकों द्वारा कृषि विकास व प्रसार क्षेत्र में उत्कृष्ट सम्मान।',
          'भारतीय कृषि अनुसंधान संस्थान के शस्य विज्ञान प्रभाग में लघु कृषकों हेतु समन्वित कृषि प्रणाली मॉडल का अध्ययन।',
          'ऐतिहासिक प्रो. एम. एस. स्वामीनाथन पुस्तकालय के समक्ष राष्ट्रीय ध्वज तले कृषकों एवं शोधार्थियों का प्रतिनिधिमंडल।',
          'कृषि वैज्ञानिकों एवं निदेशकों के साथ आधुनिक टिकाऊ कृषि और किसान सशक्तिकरण पर उच्चस्तरीय संगोष्ठी।',
          'विषमुक्त प्राकृतिक खेती और देशी गो-कृपा आधारित मक्का व मिश्रित फसल परीक्षण प्रक्षेत्र का अवलोकन।',
          'उन्नत धान उत्पादन, प्राकृतिक खाद एवं जल-कुशल कृषि विधियों का व्यावहारिक प्रक्षेत्र निरीक्षण।',
          'चक्रीय ग्रामीण अर्थव्यवस्था व जल संरक्षण हेतु बत्तख पालन एवं तालाब आधारित समन्वित कृषि प्रणाली।',
          'दलहनी फसलों, मिट्टी के स्वास्थ्य सुधार और प्राकृतिक कीट प्रबंधन तकनीकों का विस्तृत अध्ययन।',
          'कृषि विशेषज्ञों की उपस्थिति में विभिन्न मौसमी फसलों की उत्पादकता एवं जैव-विविधता का अध्ययन।',
        ],
      },
      bn: {
        title: 'কৃষি উন্নয়ন ও জাতীয় কৃষি গবেষণা সম্মাননা',
        caption: 'ভারতীয় কৃষি গবেষণা পরিষদ (ICAR) ও প্রথিতযশা কৃষি বিজ্ঞানীদের হাত থেকে কৃষি উন্নয়ন ও প্রসারে বিশেষ স্বীকৃতি ও সম্মাননা স্মারক গ্রহণ।',
        imageTitles: [
          'ছবি ১: জাতীয় কৃষি গবেষণা সম্মাননা স্মারক গ্রহণ',
          'ছবি ২: সমন্বিত কৃষি ব্যবস্থা মডেল (ICAR-IARI, নয়াদিল্লি)',
          'ছবি ৩: প্রফেসর এম. এস. স্বামীনাথন লাইব্রেরি প্রাঙ্গণ',
          'ছবি ৪: নারী কৃষক প্রশিক্ষণ ও উচ্চপর্যায়ের সম্মেলন',
          'ছবি ৫: প্রাকৃতিক ও জৈবিক কৃষি গবেষণা প্রান্তর',
          'ছবি ৬: বিস্তীর্ণ সবুজ ধানক্ষেত ও মাঠ প্রদর্শনী',
          'ছবি ৭: হাঁস পালন ও সমন্বিত মৎস্য চাষ প্রকল্প',
          'ছবি ৮: ডালশস্য ও শস্য ক্ষেত্র পরিদর্শন',
          'ছবি ৯: প্রায়োগিক ফসল প্রান্তর ও কৃষিবিজ্ঞানীদের সাথে মাঠ সমীক্ষা',
        ],
        imageCaptions: [
          'ভারতীয় কৃষি গবেষণা পরিষদ (ICAR) ও প্রথিতযশা কৃষি বিজ্ঞানীদের হাত থেকে কৃষি উন্নয়ন ও প্রসারে বিশেষ স্বীকৃতি গ্রহণ।',
          'ক্ষুদ্র কৃষকদের জন্য ভারতীয় কৃষি গবেষণা প্রতিষ্ঠানের শস্যবিজ্ঞান বিভাগের ১.০ হেক্টর সমন্বিত কৃষি মডেল পরিদর্শন।',
          'জাতীয় পতাকাতলে ঐতিহাসিক প্রফেসর এম এস স্বামীনাথন লাইব্রেরি ভবনের সামনে কৃষক ও গবেষকদের সম্মিলিত দল।',
          'জাতীয় কৃষি গবেষণা পরিষদ ও প্রখ্যাত কৃষি বিজ্ঞানীদের পরিচালনায় পশ্চিমবঙ্গ ও ভারতের কৃষকদের প্রশিক্ষণ সভা।',
          'রাসায়নিকমুক্ত গো-ভিত্তিক প্রাকৃতিক পদ্ধতিতে উৎপাদিত ভুট্টা ও অন্যান্য ফসল প্রদর্শনী ক্ষেত্র পরিদর্শন।',
          'উন্নত ও পরিবেশবান্ধব পদ্ধতিতে ধান চাষ এবং কৃষি প্রযুক্তির বাস্তব রূপরেখা সংক্রান্ত মাঠ পরিদর্শন।',
          'গ্রামীণ স্বনির্ভর অর্থনীতি ও সমন্বিত জল ব্যবস্থাপনার লক্ষ্যে বত্তখ পালন ও জলাশয়ভিত্তিক খামার পরিদর্শন।',
          'পরিবেশবান্ধব মাটির উর্বরতা বৃদ্ধি ও ডালশস্যের প্রাকৃতিক চাষ পদ্ধতি নিয়ে বিজ্ঞানীদের সাথে মতবিনিময়।',
          'কৃষিবিজ্ঞানীদের উপস্থিতিতে বিভিন্ন খাদ্যশস্যের গুণগত মান ও জৈব সুরক্ষার ক্ষেত্রভিত্তিক পর্যালোচনা।',
        ],
      },
    },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryPillarItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openItemModal = (item: GalleryPillarItem) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
  };

  const currentModalImage = selectedItem?.images
    ? selectedItem.images[activeImageIndex]
    : selectedItem?.image;

  const currentItemContent = selectedItem ? selectedItem[currentLang] : null;

  return (
    <section className="py-20 md:py-28 bg-[#FFFCF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-saffron-deep)]">
            {t('gallery.sectionSubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mt-2 tracking-tight">
            {t('gallery.sectionTitle')}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-saffron)] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Preview Grid: 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarItems.map((item) => {
            const content = item[currentLang];
            const categoryName = categoryNames[item.key][currentLang];

            return (
              <div
                key={item.key}
                onClick={() => openItemModal(item)}
                className="group relative rounded-3xl bg-white border border-[var(--color-border-light)] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Aspect ratio container */}
                <div className="aspect-4/3 w-full bg-[#FFF5E4] relative overflow-hidden flex flex-col items-center justify-center">
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={content.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  ) : (
                    <>
                      <div className="w-14 h-14 rounded-full bg-white/80 border border-[var(--color-saffron)]/30 flex items-center justify-center text-[var(--color-saffron)] shadow-xs group-hover:scale-110 transition-transform">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-[var(--color-muted)] mt-3">
                        {categoryName}
                      </span>
                      <span className="text-[11px] text-[var(--color-saffron-deep)] font-semibold mt-1">
                        {strings.archiveBadge}
                      </span>
                    </>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[var(--color-dark)] border border-[var(--color-border-light)] shadow-xs z-10">
                    {categoryName}
                  </div>

                  {/* Multi-image indicator badge */}
                  {item.images && item.images.length > 1 && (
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[11px] font-bold text-white flex items-center gap-1 shadow-md z-10 border border-white/20">
                      <ImageIcon className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                      <span>{strings.photosCount(item.images.length)}</span>
                    </div>
                  )}

                  {/* Hover Eye overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[var(--color-dark)] flex items-center gap-1.5 shadow-lg transform group-hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-[var(--color-saffron)]" />
                      <span>{strings.viewPhoto}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Info */}
                <div className="p-4 sm:p-5 bg-white border-t border-[var(--color-border-light)]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[var(--color-dark)] group-hover:text-[var(--color-saffron-deep)] transition-colors line-clamp-1">
                      {content.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] mt-1 flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5 text-[var(--color-saffron)] shrink-0" />
                    <span className="truncate">Sanatani Gomata Samiti</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-[var(--color-saffron)] text-[var(--color-saffron-deep)] hover:bg-[var(--color-saffron)] hover:text-white font-semibold text-sm transition-all shadow-xs"
          >
            <span>{t('gallery.viewMore')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Lightbox Modal when any card is clicked */}
      {selectedItem && currentItemContent && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-7 relative shadow-2xl animate-scale-in my-auto max-h-[94vh] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--color-border-light)]">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[var(--color-cream)] text-xs font-bold text-[var(--color-saffron-deep)] border border-[var(--color-saffron)]/30">
                  {categoryNames[selectedItem.key][currentLang]}
                </span>
                {selectedItem.images && selectedItem.images.length > 1 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[11px] font-semibold text-amber-800 border border-amber-200">
                    {strings.photoProgress(activeImageIndex + 1, selectedItem.images.length)}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-full bg-[var(--color-cream)] hover:bg-[var(--color-border-light)] flex items-center justify-center text-[var(--color-dark)] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Box - Flexible Natural Aspect Ratio (100% Uncropped) */}
            <div className="relative w-full rounded-2xl bg-neutral-950 flex items-center justify-center overflow-hidden p-2 sm:p-3 mb-3 border border-black/10 min-h-[260px] max-h-[64vh]">
              {currentModalImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentModalImage}
                    alt={currentItemContent.title}
                    className="max-h-[60vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-all duration-300"
                  />

                  {/* Previous Button if multiple images */}
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) =>
                          prev === 0 ? selectedItem.images!.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all shadow-xl hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {/* Next Button if multiple images */}
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) =>
                          prev === selectedItem.images!.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all shadow-xl hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[var(--color-saffron)] mb-3">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    {strings.officialDoc}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 max-w-sm">
                    {currentItemContent.caption}
                  </p>
                </div>
              )}
            </div>

            {/* Multiple Photos Selector Bar */}
            {selectedItem.images && selectedItem.images.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 p-2.5 rounded-2xl bg-[var(--color-cream)] border border-[var(--color-border-light)]">
                <span className="text-xs font-semibold text-[var(--color-dark)] mr-1">
                  {strings.selectPhoto}
                </span>
                {selectedItem.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                      activeImageIndex === idx
                        ? 'bg-[var(--color-saffron)] text-white border-[var(--color-saffron)] shadow-md scale-105'
                        : 'bg-white text-[var(--color-dark)] border-[var(--color-border-light)] hover:border-[var(--color-saffron)]'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-6 h-6 rounded-md object-cover border border-white/30"
                    />
                    <span>
                      {currentItemContent.imageTitles?.[idx]
                        ? currentItemContent.imageTitles[idx].split(':')[0]
                        : strings.photoTab(idx + 1)}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Title & Caption */}
            <div className="mt-1">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-dark)]">
                {currentItemContent.imageTitles?.[activeImageIndex] || currentItemContent.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
                {currentItemContent.imageCaptions?.[activeImageIndex] || currentItemContent.caption}
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="mt-4 pt-3 border-t border-[var(--color-border-light)] flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[var(--color-saffron-deep)]">
                {strings.officialDoc}
              </span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-full bg-[var(--color-dark)] hover:bg-[var(--color-saffron)] text-white text-xs font-semibold transition-colors"
              >
                {strings.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
