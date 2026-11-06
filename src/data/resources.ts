import { Resource } from "@/types/resource";

export const MAIN_REPOSITORY = {
  owner: "AbdullayevTemurmalik",
  repo: "EveryThingForClaudeCode",
  url: "https://github.com/AbdullayevTemurmalik/EveryThingForClaudeCode",
  cloneUrl: "https://github.com/AbdullayevTemurmalik/EveryThingForClaudeCode.git",
  title: "Loyihani GitHub’da qo‘llab-quvvatlang",
  description:
    "Foydali ochiq manbali vositalarni bitta joyga jamladik. Loyiha sizga foydali bo‘lsa, GitHub’da yulduzcha qoldirib, uning rivojlanishini qo‘llab-quvvatlang.",
};

export const CATEGORIES = [
  "Barchasi",
  "AI Developer Tools",
  "AI Gateway",
  "UI/UX & Design",
  "Context Optimization",
  "Free AI APIs",
  "AI Memory",
  "Cybersecurity",
] as const;

export const RESOURCES: Resource[] = [
  {
    id: "ecc-temurmalik",
    name: "ECC (Temurmalik)",
    slug: "ecc-temurmalik",
    owner: "AbdullayevTemurmalik",
    repo: "ECC",
    url: "https://github.com/AbdullayevTemurmalik/ECC",
    cloneUrl: "https://github.com/AbdullayevTemurmalik/ECC.git",
    category: "AI Developer Tools",
    license: "MIT",
    technologies: ["TypeScript", "Claude Code", "Agent Skills", "Hooks", "Security"],
    shortDescription:
      "Abdullayev Temurmalik tomonidan Claude Code va AI agentlar uchun sozlangan ECC muhandislik tizimi va ko'nikmalar to'plami.",
    fullDescription:
      "Everything Claude Code (ECC - Temurmalik) — Claude Code va Antigravity coding agentlari uchun optimallashtirilgan muhandislik arxitekturasi. O'z ichiga ixtisoslashgan ko'nikmalar (skills), avtomatlashtirish qoidalari va xavfsiz prompt boshqaruvini oladi.",
    features: [
      "Claude Code uchun maxsus moslashtirilgan muhandislik workflow",
      "Ko'chma skill'lar (SKILL.md) va tayyor prompt qoliplari",
      "Xavfsiz konfiguratsiya va lokal muhitda oson integratsiya",
      "Antigravity va Cursor bilan to'liq muvofiqlik",
    ],
    installCommands: [
      "git clone https://github.com/AbdullayevTemurmalik/ECC.git",
      "cd ECC",
      "# Claude Code yoki Antigravity sozlamalariga ulash",
    ],
    recommendedUse:
      "Claude Code va Antigravity agentlari bilan dasturlash samaradorligini oshirishda.",
    antigravityCompatibility:
      "To'liq mos. Agentlar va skill'lar tizimi bilan uzviy ishlaydi.",
  },
  {
    id: "ecc-affaan",
    name: "ECC (Affan Mustafa)",
    slug: "ecc-affaan",
    owner: "affaan-m",
    repo: "ECC",
    url: "https://github.com/affaan-m/ECC",
    cloneUrl: "https://github.com/affaan-m/ECC.git",
    category: "AI Developer Tools",
    license: "MIT",
    technologies: ["TypeScript", "Agent Skills", "Hooks", "Security", "Bash"],
    shortDescription:
      "Coding agentlar uchun original muhandislik workflow, ixtisoslashgan agentlar, ko'chma skill'lar va AgentShield tizimi.",
    fullDescription:
      "Everything Claude Code (ECC) — sun'iy intellekt coding agentlarining (Claude Code, Cursor, Codex, OpenCode) samaradorligini oshiruvchi original muhandislik tizimi. Asl muallif: Affan Mustafa (@affaan-m). O'z ichiga 'reja -> test -> amalga oshirish -> ko'rib chiqish -> tekshirish -> eslab qolish' siklini, o'nlab ixtisoslashgan agentlarni, yuzlab ko'chma SKILL.md formatidagi ko'nikmalarni va AgentShield xavfsizlik tekshiruvini oladi.",
    features: [
      "Agent muhandislik sikli: plan -> test -> implement -> review -> verify -> remember",
      "Ko'chma skill'lar (SKILL.md) va ixtisoslashgan subagentlar to'plami",
      "AgentShield: promptlar, MCP konfiguratsiyalari va maxfiy ma'lumotlarni xavfsizlik tekshiruvi",
      "Antigravity, Claude Code, Cursor, Zed va OpenCode bilan moslik",
    ],
    installCommands: [
      "git clone https://github.com/affaan-m/ECC.git",
      "cd ECC",
      "# Asl muhandislik ko'nikmalarini ishga tushirish",
    ],
    recommendedUse:
      "Coding agentlar orqali katta loyihalarni rejalashtirish, xavfsiz kod yozish va avtonom tuzatish jarayonlari uchun.",
    antigravityCompatibility:
      "To'liq mos. Antigravity'ning subagent va skill formati bilan uzviy integratsiya bo'ladi.",
  },
  {
    id: "omniroute",
    name: "OmniRoute",
    slug: "omniroute",
    owner: "cheaper-inference",
    repo: "OmniRoute",
    url: "https://github.com/cheaper-inference/OmniRoute",
    cloneUrl: "https://github.com/cheaper-inference/OmniRoute.git",
    category: "AI Gateway",
    license: "MIT",
    technologies: ["Go", "Node.js", "Docker", "OpenAI API", "Token Optimization"],
    shortDescription:
      "Yagona mahalliy endpoint orqali yuzlab LLM provayderlar va modellarni boshqarish, avtomatik fallback va token kompressiyasi.",
    fullDescription:
      "OmniRoute — arzon va samarali xulosalash (inference) uchun ochiq manbali AI gateway. Barcha mashhur LLM provayderlarini (Claude, GPT, Gemini, DeepSeek va bepul provayderlar) bitta OpenAI-mos endpoint ostida birlashtiradi. Token sarfini 30-50% gacha kamaytiruvchi RTK + Caveman kompressiyasi va kotirovka tugaganda avtomatik fallback imkoniyatlariga ega.",
    features: [
      "1000+ modellar va yuzlab provayderlarni bitta API endpointda jamlash",
      "Kotirovka tugaganda avtomatik zaxira provayderga o'tish (Smart Fallback)",
      "Tokenlarni tejovchi o'rnatilgan matn siqish usullari",
      "Lokal router, Docker yoki Desktop ko'rinishida oson ishga tushirish",
    ],
    installCommands: [
      "git clone https://github.com/cheaper-inference/OmniRoute.git",
      "cd OmniRoute",
      "docker compose up -d",
    ],
    recommendedUse:
      "Ko'p provayderli LLM tizimlari, API xarajatlarini tejash va uzluksiz ish faoliyatini ta'minlash uchun.",
    antigravityCompatibility:
      "Yuqori. OpenAI-mos API orqali Antigravity va boshqa muhitlarga proxy sifatida ulanadi.",
  },
  {
    id: "ui-ux-pro-max-skill",
    name: "UI/UX Pro Max Skill",
    slug: "ui-ux-pro-max-skill",
    owner: "nextlevelbuilder",
    repo: "ui-ux-pro-max-skill",
    url: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
    cloneUrl: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git",
    category: "UI/UX & Design",
    license: "MIT",
    technologies: ["Python", "Design Systems", "Tailwind CSS", "CLI", "Design Tokens"],
    shortDescription:
      "AI coding agentlar uchun professional interfeys, ranglar palitrasi, tipografiya va dizayn tizimlari yaratuvchi intellektual skill.",
    fullDescription:
      "UI/UX Pro Max Skill — AI yordamchilariga (Antigravity, Cursor, Claude Code) chiroyli, foydalanishga qulay va professional dizayn tizimlarini yaratish imkonini beruvchi dizayn intellekti to'plami. Ranglar palitrasi, tipografiya, qat'iy kontrast (WCAG AA), mikro-animatsiyalar va dizayn anti-patternlarini avtomatik tekshirish bazalarini o'z ichiga oladi.",
    features: [
      "Design System Generator va qat'iy semantik rang tokenlari",
      "60+ zamonaviy UI uslublari (Minimalism, Premium Dark, Bento Grid)",
      "WCAG AA kontrast va foydalanish qulayligi (Accessibility) mezonlari",
      "Antigravity uchun rasmiy CLI integratsiyasi",
    ],
    installCommands: [
      "npx ui-ux-pro-max-cli init --ai antigravity",
      "# yoki git clone orqali",
      "git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git",
    ],
    recommendedUse:
      "Premium SaaS interfeyslari, developer portallari va dizayn tizimlarini barpo etishda.",
    antigravityCompatibility:
      "To'liq rasmiy qo'llab-quvvatlanadi (`--ai antigravity` bayrog'i mavjud).",
  },
  {
    id: "headroom",
    name: "Headroom",
    slug: "headroom",
    owner: "headroomlabs-ai",
    repo: "headroom",
    url: "https://github.com/headroomlabs-ai/headroom",
    cloneUrl: "https://github.com/headroomlabs-ai/headroom.git",
    category: "Context Optimization",
    license: "Apache-2.0",
    technologies: ["Python", "MCP Protocol", "Token Optimization", "RAG Compression"],
    shortDescription:
      "LLM konteksti va agent tool outputlarini 20-95% gacha qisqartiruvchi, token tejovchi kontekst optimallashtirish qatlami.",
    fullDescription:
      "Headroom — LLM kontekst oynasini tejovchi aqlli proksi va MCP qatlami. Coding agentlarining buyruq natijalari, fayl o'qishlari va JSON javoblaridagi takroriy shablonlarni yo'qotib, modelga uzatiladigan tokenlar sonini 60-95% gacha qisqartiradi, bu esa kontekst chegarasiga yetishni kechiktiradi va xarajatlarni keskin kamaytiradi.",
    features: [
      "JSON va tuzilmali ma'lumotlarni 60-95% samarali siqish",
      "Agent vositalari (tool output) uchun 20%+ token tejash",
      "Python kutubxonasi, HTTP proksi va MCP server ko'rinishida ishlash",
      "Model javoblarining asl ma'nosini to'liq saqlab qolish",
    ],
    installCommands: [
      "git clone https://github.com/headroomlabs-ai/headroom.git",
      "cd headroom",
      "pip install -e .",
    ],
    recommendedUse:
      "Katta hajmli fayllar, JSON jadvallari va uzoq davom etuvchi agent sessiyalarida kontekstni tejash uchun.",
    antigravityCompatibility:
      "Yuqori. MCP server sifatida Antigravity sozlamalariga to'g'ridan-to'g'ri biriktiriladi.",
  },
  {
    id: "freellmapi",
    name: "FreeLLMAPI",
    slug: "freellmapi",
    owner: "tashfeenahmed",
    repo: "freellmapi",
    url: "https://github.com/tashfeenahmed/freellmapi",
    cloneUrl: "https://github.com/tashfeenahmed/freellmapi.git",
    category: "Free AI APIs",
    license: "MIT",
    technologies: ["TypeScript", "Docker", "Node.js", "OpenAI /v1", "API Dashboard"],
    shortDescription:
      "Ko'plab bepul LLM provayderlarini yagona OpenAI-mos /v1 endpointi ostida birlashtiruvchi shlyuz (Free tier eslatmasi bilan).",
    fullDescription:
      "FreeLLMAPI — o'nlab bepul tier taqdim etuvchi AI provayderlari va modellarini bitta OpenAI-mos `/v1` endpointi orqali boshqarish tizimi. Foydalanuvchi bitta kalit orqali so'rov yuboradi, tizim esa mavjud bepul provayderlar bo'yicha aqlli yo'naltirish (routing) va navbatni boshqarishni amalga oshiradi. Muhim: Free tier limitlari va kotirovkalari mavjud, tijorat productioni uchun emas, tajriba va dasturlash uchun mo'ljallangan.",
    features: [
      "Barcha bepul AI provayderlari uchun yagona `/v1` interfeysi",
      "Limitga yetganda avtomatik failover va qayta yo'naltirish",
      "AES-256-GCM kalitlar shifrlanishi",
      "Oson bir qatorli Docker o'rnatish",
    ],
    installCommands: [
      "git clone https://github.com/tashfeenahmed/freellmapi.git",
      "cd freellmapi",
      "docker compose up -d",
    ],
    recommendedUse:
      "Shaxsiy tajribalar, lokal dasturlash va bepul sun'iy intellekt modellarini sinab ko'rish uchun.",
    warning:
      "Free tier limitlari mavjud. Cheksiz yoki kafolatlangan tijorat xizmati sifatida ishlatmang.",
    antigravityCompatibility:
      "OpenAI-mos API endpoint orqali har qanday AI agent yoki muhitga ulanadi.",
  },
  {
    id: "claude-mem",
    name: "Claude-Mem",
    slug: "claude-mem",
    owner: "thedotmack",
    repo: "claude-mem",
    url: "https://github.com/thedotmack/claude-mem",
    cloneUrl: "https://github.com/thedotmack/claude-mem.git",
    category: "AI Memory",
    license: "MIT",
    technologies: ["TypeScript", "Python", "Vector Search", "SQLite", "MCP"],
    shortDescription:
      "Coding agentlar uchun sessiyalararo doimiy xotira va kontekstni saqlash, xulosalash va qidirish tizimi.",
    fullDescription:
      "Claude-Mem — AI coding agentlarining (Claude Code, OpenCode, Cursor, Antigravity) har bir yangi sessiyada loyihani qayta o'rganish majburiyatini bartaraf etuvchi doimiy xotira plagini. Avvalgi suhbatlardagi muhim arxitektura qarorlari, tuzatilgan xatolar va fayllar tuzilishini xotirada saqlaydi va kerak bo'lganda kontekstga avtomatik kiritadi.",
    features: [
      "Sessiyalararo avtomatik kontekst saqlash",
      "Token tejash uchun AI asosida xulosalash (compression)",
      "Tabiiy tildagi xotira qidiruvi (Vector search)",
      "Maxfiy ma'lumotlar va API kalitlarni avtomatik qirqib tashlash (redaction)",
    ],
    installCommands: [
      "git clone https://github.com/thedotmack/claude-mem.git",
      "cd claude-mem",
      "npm install && npm run build",
    ],
    recommendedUse:
      "Uzoq muddatli dasturlash loyihalarida AI agentning xotirasini uzluksiz saqlab turish uchun.",
    antigravityCompatibility:
      "MCP protokoli orqali Antigravity sessiyalari bilan to'liq bog'lanadi.",
  },
  {
    id: "strix",
    name: "Strix",
    slug: "strix",
    owner: "usestrix",
    repo: "strix",
    url: "https://github.com/usestrix/strix",
    cloneUrl: "https://github.com/usestrix/strix.git",
    category: "Cybersecurity",
    license: "AGPL-3.0",
    technologies: ["Python", "Go", "Docker", "Security Scanning", "CI/CD"],
    shortDescription:
      "Ruxsat etilgan tizimlarda zaifliklarni aniqlash va tekshirish uchun ochiq manbali avtonom AI xavfsizlik sinov tizimi.",
    fullDescription:
      "Strix — dasturiy ta'minot xavfsizligini tekshirish uchun mo'ljallangan avtonom AI agenti. Statik skanerlardan farqli o'laroq, haqiqiy proof-of-concept (PoC) orqali zaifliklarni tasdiqlaydi va noto'g'ri signallarni (false positives) keskin kamaytiradi. Muhim ogohlantirish: Faqat o'zingizga tegishli yoki ruxsat etilgan lokal va sinov muhitlarida ishlatilishi shart.",
    features: [
      "Avtonom xavfsizlik sinovi va tekshiruvi (Penetration testing)",
      "Haqiqiy ekspluatatsiya PoC'lari bilan tasdiqlash",
      "CI/CD va GitHub Actions bilan integratsiya",
      "Zaifliklarni tuzatish uchun avtomatik tavsiyalar",
    ],
    installCommands: [
      "git clone https://github.com/usestrix/strix.git",
      "cd strix",
      "docker build -t strix .",
    ],
    recommendedUse:
      "Dasturlar va veb-ilovalarni ishlab chiqarishga (production) chiqarishdan oldin xavfsizlik auditidan o'tkazishda.",
    warning:
      "Qat'iy ogohlantirish: Ushbu vosita faqat sizga ruxsat etilgan shaxsiy yoki staging muhitlarda ishlatilishi shart.",
    antigravityCompatibility:
      "Alohida CLI va Docker vositasi sifatida mustaqil ishlaydi.",
  },
];
