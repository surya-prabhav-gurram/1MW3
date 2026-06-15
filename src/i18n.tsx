import React, { createContext, useContext, useState } from "react";

export type Lang = "en" | "hi";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

// Translations keyed by string ID
const T: Record<string, Record<Lang, string>> = {
  // NAV
  "nav.mission":       { en: "Mission",       hi: "मिशन" },
  "nav.pathway":       { en: "The Pathway",   hi: "मार्ग" },
  "nav.getInvolved":   { en: "Get involved",  hi: "जुड़ें" },
  "nav.partner":       { en: "Partner",       hi: "भागीदार" },
  "nav.impact":        { en: "Impact",        hi: "प्रभाव" },
  "nav.startLearning": { en: "Start learning",hi: "सीखना शुरू करें" },
  "nav.donate":        { en: "Donate",        hi: "दान करें" },

  // HOME HERO
  "home.hero.eyebrow": { en: "One Million Women in Design & AI", hi: "डिज़ाइन और AI में दस लाख महिलाएँ" },
  "home.hero.h1a":     { en: "Equipping",    hi: "सशक्त बनाना" },
  "home.hero.h1b":     { en: "a million women", hi: "दस लाख महिलाओं को" },
  "home.hero.h1c":     { en: "to shape the age of AI.", hi: "AI के युग को गढ़ने के लिए।" },
  "home.hero.body":    { en: "Design & AI literacy — free, in Indian languages, reaching every woman who wants it. An initiative of the", hi: "डिज़ाइन और AI साक्षरता — निःशुल्क, भारतीय भाषाओं में, हर उस महिला तक। इसकी पहल:" },
  "home.hero.cta1":    { en: "Start learning — free", hi: "निःशुल्क सीखना शुरू करें" },
  "home.hero.cta2":    { en: "Our mission",  hi: "हमारा मिशन" },
  "home.hero.strip":   { en: "An initiative of the UMO Design Foundation · Registered Non-Profit · India", hi: "UMO डिज़ाइन फ़ाउंडेशन की पहल · पंजीकृत गैर-लाभकारी · भारत" },

  // HOME STAKES
  "home.stakes.eyebrow": { en: "The problem", hi: "समस्या" },
  "home.stakes.h2":  { en: "AI is rewriting every creative job. Women aren't in the room where it's happening.", hi: "AI हर रचनात्मक नौकरी को फिर से लिख रहा है। महिलाएँ उस कमरे में नहीं हैं।" },
  "home.stakes.body":{ en: "Without action, the gender gap in design compounds in the AI era. 1MW closes it at the root — with literacy that reaches everyone, skills that lead to real work, and careers that put women in the rooms where products get designed.", hi: "बिना कार्रवाई के, AI युग में डिज़ाइन में लैंगिक अंतर बढ़ता जाएगा। 1MW इसे जड़ से बंद करता है — ऐसी साक्षरता के साथ जो सभी तक पहुँचे, कौशल जो असली काम तक ले जाए, और करियर जो महिलाओं को वहाँ रखे जहाँ उत्पाद बनते हैं।" },
  "home.stakes.cta": { en: "Read the mission", hi: "मिशन पढ़ें" },

  // HOME IMPACT
  "home.impact.label":  { en: "Women reached so far · Goal: 10,00,000", hi: "अब तक पहुँची महिलाएँ · लक्ष्य: १०,००,०००" },
  "home.impact.goal":   { en: "10,00,000 by 2030", hi: "२०३० तक १०,००,०००" },
  "home.impact.stat":   { en: "~3,00,000", hi: "~३,००,०००" },
  "home.impact.statLabel": { en: "Lives already touched", hi: "पहले से प्रभावित जीवन" },
  "home.impact.statBody":  { en: "22 years of UMO design education — the track record the million is built on.", hi: "UMO डिज़ाइन शिक्षा के 22 वर्ष — वह आधार जिस पर दस लाख का लक्ष्य टिका है।" },

  // HOME PATHWAY
  "home.pathway.eyebrow": { en: "The pathway",  hi: "मार्ग" },
  "home.pathway.h2":      { en: "One ladder, four steps.", hi: "एक सीढ़ी, चार कदम।" },
  "home.pathway.body":    { en: "Every woman enters at curiosity and climbs as far as she wants.", hi: "हर महिला जिज्ञासा से शुरू करती है और जितना चाहे उतना ऊपर चढ़ती है।" },
  "home.pathway.cta":     { en: "Learn more", hi: "और जानें" },

  // PATHWAY STEPS
  "step.01.label": { en: "Awareness",     hi: "जागरूकता" },
  "step.01.title": { en: "Design & AI Literacy", hi: "डिज़ाइन और AI साक्षरता" },
  "step.01.body":  { en: "Free, self-paced, mobile-first. No cost, no code. Build confidence with today's AI tools.", hi: "निःशुल्क, स्व-गति, मोबाइल-पहले। बिना लागत, बिना कोड। आज के AI टूल्स से आत्मविश्वास बनाएँ।" },
  "step.02.label": { en: "Foundations",   hi: "नींव" },
  "step.02.title": { en: "Skills & Frameworks", hi: "कौशल और ढाँचे" },
  "step.02.body":  { en: "Guided UX and product design tracks, now AI-augmented — the models and methods of the craft.", hi: "निर्देशित UX और प्रोडक्ट डिज़ाइन ट्रैक, अब AI-संवर्धित — शिल्प के मॉडल और तरीके।" },
  "step.03.label": { en: "Community",     hi: "समुदाय" },
  "step.03.title": { en: "Mentorship",    hi: "मार्गदर्शन" },
  "step.03.body":  { en: "1:1 mentors, peer circles, and the women of WSummit and UXINDIA. You can't be what you can't see.", hi: "1:1 मेंटर, पीयर सर्कल, और WSummit और UXINDIA की महिलाएँ। जो दिखता नहीं, वो बनते नहीं।" },
  "step.04.label": { en: "Careers",       hi: "करियर" },
  "step.04.title": { en: "Careers & Fellowships", hi: "करियर और फ़ेलोशिप" },
  "step.04.body":  { en: "Portfolio reviews, internships with partners, and the 1MW Fellowship for emerging leaders.", hi: "पोर्टफोलियो समीक्षाएँ, भागीदारों के साथ इंटर्नशिप, और उभरते नेताओं के लिए 1MW फ़ेलोशिप।" },

  // HOME TESTIMONIALS
  "home.voices.eyebrow": { en: "Voices", hi: "आवाज़ें" },
  "home.voices.h2":      { en: "Women who walked the path.", hi: "वे महिलाएँ जिन्होंने यह रास्ता चुना।" },
  "t1.q":  { en: "1MW opened doors to a world of possibilities I never knew existed.", hi: "1MW ने उन संभावनाओं के दरवाज़े खोले जिनके बारे में मुझे पता भी नहीं था।" },
  "t1.name": { en: "Ankita Chandavarkar", hi: "अंकिता चंदावरकर" },
  "t1.role": { en: "1MW participant", hi: "1MW प्रतिभागी" },
  "t2.q":  { en: "The mentorship and community gave me the confidence to finally call myself a designer.", hi: "मार्गदर्शन और समुदाय ने मुझे आत्मविश्वास दिया कि मैं खुद को डिज़ाइनर कह सकती हूँ।" },
  "t2.name": { en: "Priya Nair", hi: "प्रिया नायर" },
  "t2.role": { en: "UX designer, Bengaluru", hi: "UX डिज़ाइनर, बेंगलुरु" },
  "t3.q":  { en: "Free, in my language, on my phone. That's what made it real for me.", hi: "निःशुल्क, मेरी भाषा में, मेरे फ़ोन पर। इसीने इसे मेरे लिए असली बनाया।" },
  "t3.name": { en: "Sunita Devi", hi: "सुनीता देवी" },
  "t3.role": { en: "Digital literacy graduate", hi: "डिजिटल साक्षरता स्नातक" },

  // HOME GET INVOLVED
  "home.involve.eyebrow": { en: "Get involved", hi: "जुड़ें" },
  "home.involve.h2":      { en: "Every seat counts.", hi: "हर सीट मायने रखती है।" },
  "involve.learn.title":  { en: "Learn",     hi: "सीखें" },
  "involve.learn.body":   { en: "Take the free Design & AI literacy course — in English or your language.", hi: "निःशुल्क डिज़ाइन और AI साक्षरता कोर्स लें — अंग्रेज़ी या अपनी भाषा में।" },
  "involve.learn.cta":    { en: "Start now", hi: "अभी शुरू करें" },
  "involve.mentor.title": { en: "Mentor",    hi: "मेंटर बनें" },
  "involve.mentor.body":  { en: "Give two hours a month. Your experience becomes someone's turning point.", hi: "महीने में दो घंटे दें। आपका अनुभव किसी का मोड़ बन जाएगा।" },
  "involve.mentor.cta":   { en: "Become a mentor", hi: "मेंटर बनें" },
  "involve.vol.title":    { en: "Volunteer", hi: "स्वयंसेवक" },
  "involve.vol.body":     { en: "Run a campus chapter, translate content, or help coordinate events.", hi: "कैंपस चैप्टर चलाएँ, सामग्री अनुवाद करें, या इवेंट समन्वय में मदद करें।" },
  "involve.vol.cta":      { en: "Join the team", hi: "टीम से जुड़ें" },
  "involve.partner.title":{ en: "Partner",   hi: "भागीदार" },
  "involve.partner.body": { en: "Bring your company's CSR, your team's mentors, and your internship pipeline.", hi: "अपनी कंपनी का CSR, अपनी टीम के मेंटर और इंटर्नशिप पाइपलाइन लाएँ।" },
  "involve.partner.cta":  { en: "See tiers", hi: "स्तर देखें" },

  // HOME STATS
  "home.stats.eyebrow": { en: "Impact",    hi: "प्रभाव" },
  "home.stats.h2":      { en: "The numbers that matter.", hi: "जो संख्याएँ मायने रखती हैं।" },

  // HOME COMPANIES / INDIVIDUALS
  "home.companies.eyebrow": { en: "For companies",   hi: "कंपनियों के लिए" },
  "home.companies.h2":      { en: "Be in the room where the future is designed.", hi: "उस कमरे में रहें जहाँ भविष्य डिज़ाइन होता है।" },
  "home.companies.body":    { en: "Host cohorts, send mentors, open internships. India CSR-ready. A talent pipeline and a story worth telling.", hi: "कोहोर्ट होस्ट करें, मेंटर भेजें, इंटर्नशिप खोलें। भारत CSR के लिए तैयार।" },
  "home.companies.cta1":    { en: "See partnership tiers", hi: "भागीदारी स्तर देखें" },
  "home.companies.cta2":    { en: "Book a call", hi: "कॉल बुक करें" },
  "home.indiv.eyebrow":     { en: "For individuals",  hi: "व्यक्तियों के लिए" },
  "home.indiv.h2":          { en: "$40 equips one woman, end to end.", hi: "₹3,300 एक महिला को शुरू से अंत तक सशक्त बनाते हैं।" },
  "home.indiv.body":        { en: "Give once or monthly. Every gift is a name on the path to a million. 80G & tax-deductible options available.", hi: "एक बार या मासिक दें। 80G और कर-कटौती विकल्प उपलब्ध हैं।" },
  "home.indiv.cta1":        { en: "Donate now", hi: "अभी दान करें" },
  "home.indiv.cta2":        { en: "See impact", hi: "प्रभाव देखें" },

  // HOME NEWSLETTER
  "home.nl.eyebrow": { en: "Stay in the loop",    hi: "जुड़े रहें" },
  "home.nl.h2":      { en: "Join the movement.",  hi: "आंदोलन से जुड़ें।" },
  "home.nl.body":    { en: "Updates on the mission, stories from the women on the path, and early access to the literacy program.", hi: "मिशन के अपडेट, रास्ते पर चल रही महिलाओं की कहानियाँ, और साक्षरता कार्यक्रम तक जल्दी पहुँच।" },
  "home.nl.ph":      { en: "your@email.com",       hi: "आपका@ईमेल.com" },
  "home.nl.cta":     { en: "Join →",               hi: "जुड़ें →" },

  // MISSION PAGE
  "mission.breadcrumb": { en: "Mission", hi: "मिशन" },
  "mission.h1":  { en: "Why a million women, and why now.", hi: "दस लाख महिलाएँ क्यों, और अभी क्यों।" },
  "mission.hero.body": { en: "AI is the biggest shift in creative and knowledge work in a generation. 1MW exists to make sure women help design it — not get designed out of it.", hi: "AI एक पीढ़ी में रचनात्मक और ज्ञान कार्य में सबसे बड़ा बदलाव है। 1MW इसलिए है ताकि महिलाएँ इसे डिज़ाइन करने में मदद करें — इससे बाहर न हो जाएँ।" },
  "mission.cta1": { en: "Back the mission",  hi: "मिशन का समर्थन करें" },
  "mission.cta2": { en: "Partner with us",   hi: "हमारे साथ भागीदारी करें" },

  // PATHWAY PAGE
  "pathway.breadcrumb": { en: "The Pathway", hi: "मार्ग" },
  "pathway.h1":  { en: "From first spark to a career.", hi: "पहली चिंगारी से करियर तक।" },
  "pathway.hero.body": { en: "One ladder, four steps. Every woman enters at curiosity and climbs as far as she wants.", hi: "एक सीढ़ी, चार कदम। हर महिला जिज्ञासा से शुरू करती है और जितना चाहे उतना ऊपर चढ़ती है।" },
  "pathway.cta1": { en: "Start step one — free", hi: "पहला कदम शुरू करें — निःशुल्क" },

  // PARTNER PAGE
  "partner.breadcrumb": { en: "Partner", hi: "भागीदार" },
  "partner.h1":  { en: "Be in the room where the future is designed.", hi: "उस कमरे में रहें जहाँ भविष्य डिज़ाइन होता है।" },
  "partner.hero.body": { en: "Partners don't just fund 1MW — they host cohorts, send mentors and open internships, building the diverse, AI-fluent talent their industry needs. India CSR–ready.", hi: "भागीदार केवल 1MW को फंड नहीं करते — वे कोहोर्ट होस्ट करते हैं, मेंटर भेजते हैं और इंटर्नशिप खोलते हैं। भारत CSR के लिए तैयार।" },
  "partner.cta1": { en: "Book a partnership call", hi: "भागीदारी कॉल बुक करें" },
  "partner.cta2": { en: "See the tiers",            hi: "स्तर देखें" },

  // DONATE PAGE
  "donate.breadcrumb": { en: "Donate", hi: "दान करें" },
  "donate.h1":  { en: "Sponsor a woman's first spark.", hi: "एक महिला की पहली चिंगारी को प्रायोजित करें।" },
  "donate.hero.body": { en: "Just $40 fully equips one woman with Design & AI literacy. Give once, or monthly — every gift is a name on the path to a million.", hi: "केवल ₹3,300 एक महिला को पूरी तरह से डिज़ाइन और AI साक्षरता से सशक्त बनाते हैं।" },
};

const LangContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
  };

  const t = (key: string): string => {
    const entry = T[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
