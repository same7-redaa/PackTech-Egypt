import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translation {
  getStarted: string;
  requestQuote: string;
  viewProducts: string;
  sendInquiry: string;
  nav: {
    home: string;
    about: string;
    products: string;
    industries: string;
    gallery: string;
    clients: string;
    contact: string;
  };
  hero: {
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
    quickInquiry: string;
    productType: string;
    selectProduct: string;
    corrBoxes: string;
    customPack: string;
    quantity: string;
  };
  services: {
    subtitle: string;
    title1: string;
    title2: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  trustedBy: string;
  whyChooseUs: {
    subtitle: string;
    title: string;
    desc: string;
    reasons: string[];
    button: string;
    badge: string;
    badgeDesc: string;
  };
  stats: {
    clients: string;
    years: string;
    units: string;
    support: string;
  };
  gallery: {
    subtitle: string;
    title1: string;
    title2: string;
    button: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
  testimonials: {
    subtitle: string;
    title: string;
    roles: string[];
  };
  footer: {
    desc: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

const translations: Record<Language, Translation> = {
  en: {
    getStarted: 'Get Started',
    requestQuote: 'Request A Quote',
    viewProducts: 'View Products',
    sendInquiry: 'Send Inquiry',
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      industries: 'Industries',
      gallery: 'Gallery',
      clients: 'Clients',
      contact: 'Contact'
    },
    hero: {
      title1: 'PackTech',
      titleHighlight: 'Packaging',
      title2: 'Solutions',
      description: 'PackTech Egypt delivers high-quality corrugated packaging, custom boxes, industrial packing solutions, and premium printing services for factories and enterprises.',
      quickInquiry: 'Quick Inquiry',
      productType: 'Product Type',
      selectProduct: 'Select Product',
      corrBoxes: 'Corrugated Boxes',
      customPack: 'Custom Packaging',
      quantity: 'Quantity'
    },
    services: {
      subtitle: 'Our Expertise',
      title1: 'Premium Industrial',
      title2: 'Services',
      desc: 'We provide end-to-end packaging solutions, combining state-of-the-art manufacturing with innovative design to meet the highest industry standards.',
      items: [
        { title: 'Corrugated Boxes', desc: 'High-strength corrugated solutions designed to protect and transport goods safely across any supply chain.' },
        { title: 'Custom Packaging', desc: 'Tailor-made packaging structural designs that elevate your brand and perfectly fit your unique products.' },
        { title: 'Offset Printing', desc: 'Premium industrial printing services ensuring vibrant colors and crisp details for high-end retail appearance.' },
        { title: 'Industrial Packaging', desc: 'Heavy-duty packaging systems engineered for manufacturing, automotive, and heavy industrial applications.' },
        { title: 'Pallets & Trays', desc: 'Efficient palletizing solutions and strong corrugated trays for optimized warehousing and distribution.' },
        { title: 'Protective Packaging', desc: 'Internal cushioning, die-cut inserts, and dividers to ensure zero damage during transit.' }
      ]
    },
    trustedBy: 'Trusted By Industry Leaders',
    whyChooseUs: {
      subtitle: 'Why Choose PackTech',
      title: 'Pioneering The Future Of Industrial Packaging',
      desc: "We don't just make boxes; we engineer protective environments for your products. Our commitment to innovation, sustainability, and automated precision makes us the partner of choice for top enterprises in Egypt and the MENA region.",
      reasons: [
        '+25 Years Experience in the Egyptian Market',
        'High Production Capacity for Large Scale Demands',
        'Premium Quality Control Systems',
        'Fast & Reliable Nationwide Delivery',
        'Custom Manufacturing & Tailored Sizes'
      ],
      button: 'Discover Our Facility',
      badge: 'Certified',
      badgeDesc: 'Guaranteed highest standards in packaging manufacturing.'
    },
    stats: {
      clients: 'Clients',
      years: 'Years',
      units: 'Units/Yr',
      support: 'Support'
    },
    gallery: {
      subtitle: 'Facility & Products',
      title1: 'Inside Our World-Class',
      title2: 'Manufacturing Hub',
      button: 'View Full Gallery',
      img1: 'Automated Production Lines',
      img2: 'Custom Printed Boxes',
      img3: 'Industrial Warehousing',
      img4: 'Protective Taping & Sealing'
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'Client Success Stories',
      roles: ['Supply Chain Director', 'Product Manager']
    },
    footer: {
      desc: "Egypt's premier manufacturer of advanced corrugated cardboard and sustainable industrial packaging solutions.",
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Us',
      rights: 'PackTech Egypt. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  ar: {
    getStarted: 'ابدأ الآن',
    requestQuote: 'اطلب عرض سعر',
    viewProducts: 'تصفح المنتجات',
    sendInquiry: 'إرسال استفسار',
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      products: 'المنتجات',
      industries: 'الصناعات',
      gallery: 'المعرض',
      clients: 'العملاء',
      contact: 'اتصل بنا'
    },
    hero: {
      title1: 'باك تك',
      titleHighlight: 'للتغليف',
      title2: 'والصناعات',
      description: 'تقدم باك تك مصر كراتين مضلعة عالية الجودة، حلول تغليف مخصصة، صناديق صناعية، وخدمات طباعة فاخرة للمصانع والشركات.',
      quickInquiry: 'استفسار سريع',
      productType: 'نوع المنتج',
      selectProduct: 'اختر المنتج',
      corrBoxes: 'صناديق مضلعة (كرتون)',
      customPack: 'تغليف مخصص',
      quantity: 'الكمية'
    },
    services: {
      subtitle: 'خبراتنا',
      title1: 'خدمات صناعية',
      title2: 'متميزة',
      desc: 'نوفر حلول تغليف متكاملة، تجمع بين أحدث طرق التصنيع والتصميم المبتكر لتلبية أعلى معايير الصناعة.',
      items: [
        { title: 'الصناديق المضلعة', desc: 'حلول كرتون مضلع عالية المتانة مصممة لحماية ونقل البضائع بأمان في أي سلسلة توريد.' },
        { title: 'التغليف المخصص', desc: 'تصميم هيكلي مخصص للتغليف يرتقي بعلامتك التجارية ويناسب منتجاتك الفريدة تمامًا.' },
        { title: 'طباعة الأوفست', desc: 'خدمات طباعة صناعية فاخرة تضمن ألوانًا زاهية وتفاصيل دقيقة لمظهر رائع.' },
        { title: 'التغليف الصناعي', desc: 'أنظمة تغليف شديدة التحمل مصممة للتصنيع، السيارات، والتطبيقات الصناعية الثقيلة.' },
        { title: 'المنصات والصواني', desc: 'حلول منصات بأعلى كفاءة وصواني مضلعة قوية لتحسين التخزين والتوزيع.' },
        { title: 'التغليف الواقي', desc: 'توسيد داخلي، قوالب مقطوعة، وفواصل لضمان عدم وجود أي ضرر أثناء النقل.' }
      ]
    },
    trustedBy: 'موثوقون من قادة الصناعة',
    whyChooseUs: {
      subtitle: 'لماذا تختار باك تك',
      title: 'نقود مستقبل التغليف الصناعي',
      desc: 'نحن لا نصنع الصناديق فحسب؛ بل نصمم بيئات آمنة لحماية منتجاتك. التزامنا بالابتكار، الاستدامة، والدقة الآلية يجعلنا الخيار الأمثل للشركات الكبرى في مصر والشرق الأوسط.',
      reasons: [
        '+25 عاماً من الخبرة في السوق المصري',
        'طاقة إنتاجية عالية لتلبية الطلبات الضخمة',
        'أنظمة مراقبة جودة فائقة',
        'توصيل سريع وموثوق لكافة الأنحاء',
        'تصنيع مخصص ومقاسات تناسب احتياجاتك'
      ],
      button: 'اكتشف مصنعنا',
      badge: 'معتمد',
      badgeDesc: 'نضمن أعلى المعايير في تصنيع التغليف.'
    },
    stats: {
      clients: 'عملاء',
      years: 'سنوات',
      units: 'وحدة/سنوياً',
      support: 'دعم فني'
    },
    gallery: {
      subtitle: 'منشآتنا ومنتجاتنا',
      title1: 'داخل مركزنا التصنيعي',
      title2: 'العالمي',
      button: 'عرض المعرض بالكامل',
      img1: 'خطوط إنتاج آلية',
      img2: 'صناديق مطبوعة مخصصة',
      img3: 'تخزين صناعي',
      img4: 'شرائط تغليف وختم واقية'
    },
    testimonials: {
      subtitle: 'آراء العملاء',
      title: 'قصص نجاح عملائنا',
      roles: ['مدير سلسلة التوريد', 'مدير الإنتاج']
    },
    footer: {
      desc: 'المصنع الرائد في مصر للكرتون المضلع المتقدم وحلول التغليف الصناعي المستدامة.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      rights: 'باك تك مصر. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  isRtl: boolean;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
  isRtl: false
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (isRtl) {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
