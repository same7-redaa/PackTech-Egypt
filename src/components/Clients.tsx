import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const logos = [
  "/logo/e14473_271aab2a2dd64c8ab7e8c54b6382b8b4~mv2.png",
  "/logo/e14473_4e69760365274b75bdc275ce287e2d88~mv2.jpg",
  "/logo/e14473_5db0b11eb5694ee09933535eb0407279~mv2.jpg",
  "/logo/e14473_816133452bcb45c9a494bd23d76d1977~mv2.jpg",
  "/logo/e14473_96054f1e12f9451c95353f6b2eb7a58a~mv2.png",
  "/logo/e14473_9fbfb1a35cf24557870919137c100dbe~mv2.png",
  "/logo/e14473_a2a6dc1b235b412bb1384a92c1e291e3~mv2.jpg",
  "/logo/e14473_aa0664bb297b46a987e472ea007e197c~mv2.jpg",
  "/logo/e14473_b21232c0a0a244ffae83d5de48378bfa~mv2.jpg",
  "/logo/e14473_c860c8b87f8943aa911145ae97e470c5~mv2.gif",
  "/logo/e14473_ccf0c7c5137c46458f7a94e3e34f2ceb~mv2.jpg",
  "/logo/e14473_e25263b9c852469caf24dcfe6b459a01~mv2.jpg",
  "/logo/e14473_e7851668a36348c4985a851c47b1d1bf~mv2.png",
  "/logo/e14473_f4e2604467a447628b56f6407cff4b8b~mv2.png",
  "/logo/e14473_f7dbf8fbd83c45659f613d57c996c892~mv2.jpg",
  "/logo/e14473_f8865a91ba37448c859e6b0a99f3ea85~mv2.jpg"
];

export default function Clients() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="clients" className="py-8 md:py-10 bg-primary-dark border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-orange">{t.trustedBy}</p>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex py-4" dir="ltr">
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap min-w-max px-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-xl shadow-md p-3 transition-transform duration-300 hover:scale-105">
              <img src={logo} alt={`Client logo ${index}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
