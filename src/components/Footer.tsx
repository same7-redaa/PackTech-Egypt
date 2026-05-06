import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer id="contact" className="bg-primary-dark pt-16 md:pt-24 pb-6 md:pb-8 relative overflow-hidden">
      {/* Huge Logo Background */}
      <h2 className="absolute text-[15vw] font-black text-white/[0.02] -top-10 left-0 right-0 text-center pointer-events-none select-none tracking-tighter overflow-hidden">
        PACKTECH
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6" dir="ltr">
              <div className="w-8 h-8 bg-accent-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">PT</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase text-white">
                PackTech <span className="text-accent-orange font-light">Egypt</span>
              </span>
            </div>
            <p className="text-text-light/60 text-[11px] uppercase tracking-widest leading-relaxed mb-8 max-w-sm font-medium pt-2">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-steel-gray hover:text-primary-dark hover:bg-white transition-all">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-steel-gray hover:text-primary-dark hover:bg-white transition-all">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-steel-gray hover:text-primary-dark hover:bg-white transition-all">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {[t.nav.home, t.nav.about, t.nav.products, t.nav.industries, t.nav.gallery].map(link => (
                <li key={link}>
                  <a href="#" className="text-text-light/60 hover:text-accent-orange transition-colors text-[11px] uppercase tracking-widest font-bold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6">{t.footer.services}</h4>
            <ul className="space-y-4">
              {t.services.items.map(s => (
                <li key={s.title}>
                  <a href="#" className="text-text-light/60 hover:text-accent-orange transition-colors text-[11px] uppercase tracking-widest font-bold">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6">{t.footer.contact}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className={`w-4 h-4 text-accent-orange shrink-0 ${isRtl ? 'ml-0 mr-0' : ''}`} />
                <div className="flex gap-2 flex-col" dir="ltr">
                  <a href="tel:+201002514810" className="num-font text-text-light/60 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold text-left">+20 100 251 4810</a>
                  <a href="tel:+201064236000" className="num-font text-text-light/60 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold text-left">+20 106 423 6000</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-accent-orange shrink-0" />
                <a href="mailto:info@packtech.com.eg" className="text-text-light/60 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">INFO@PACKTECH.COM.EG</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-text-light/60 text-[11px] uppercase tracking-widest font-bold leading-relaxed">
                  Industrial Zone B4, 10th of Ramadan City,<br /> Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-light/40 text-[10px] uppercase tracking-widest font-bold">
            © <span className="num-font pr-1">{new Date().getFullYear()}</span> {t.footer.rights}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-text-light/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-text-light/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
