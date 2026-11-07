import { Resource, ResourceCategory } from "@/types/resource";
import { RESOURCES } from "@/data/resources";
import { Language } from "@/context/LanguageContext";

export interface LocalizedText {
  category: ResourceCategory;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  recommendedUse: string;
  antigravityCompatibility: string;
  warning?: string;
}

export const LOCALIZED_CATEGORIES: Record<Language, string[]> = {
  uz: [
    "Barchasi",
    "AI Developer Tools",
    "AI Gateway",
    "UI/UX & Design",
    "Context Optimization",
    "Free AI APIs",
    "AI Memory",
    "Cybersecurity",
  ],
  en: [
    "All",
    "AI Developer Tools",
    "AI Gateway",
    "UI/UX & Design",
    "Context Optimization",
    "Free AI APIs",
    "AI Memory",
    "Cybersecurity",
  ],
  ru: [
    "Все",
    "AI Developer Tools",
    "AI Gateway",
    "UI/UX & Design",
    "Context Optimization",
    "Free AI APIs",
    "AI Memory",
    "Cybersecurity",
  ],
};

const RESOURCE_TRANSLATIONS: Record<string, Record<Language, LocalizedText>> = {
  "ecc-temurmalik": {
    uz: {
      category: "AI Developer Tools",
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
      recommendedUse:
        "Claude Code va Antigravity agentlari bilan dasturlash samaradorligini oshirishda.",
      antigravityCompatibility:
        "To'liq mos. Agentlar va skill'lar tizimi bilan uzviy ishlaydi.",
    },
    en: {
      category: "AI Developer Tools",
      shortDescription:
        "ECC engineering harness and agent skills suite tailored for Claude Code and coding agents by Abdullayev Temurmalik.",
      fullDescription:
        "Everything Claude Code (ECC - Temurmalik) is an optimized engineering architecture for Claude Code and Antigravity coding agents. Includes specialized skills, automation rules, and safe prompt orchestration.",
      features: [
        "Tailored engineering workflow for Claude Code",
        "Portable skills (SKILL.md) and ready prompt templates",
        "Safe configuration and seamless local environment integration",
        "Full compatibility with Antigravity and Cursor",
      ],
      recommendedUse:
        "Boosting software development efficiency with Claude Code and Antigravity agents.",
      antigravityCompatibility:
        "Fully compatible. Seamlessly integrates with the agent and skills ecosystem.",
    },
    ru: {
      category: "AI Developer Tools",
      shortDescription:
        "Инженерная система ECC и набор навыков для Claude Code и AI-агентов от Темурмалика Абдуллаева.",
      fullDescription:
        "Everything Claude Code (ECC - Temurmalik) — оптимизированная инженерная архитектура для Claude Code и агентов программирования Antigravity. Включает специализированные навыки (skills), правила автоматизации и безопасное управление промптами.",
      features: [
        "Специализированный инженерный workflow для Claude Code",
        "Портативные навыки (SKILL.md) и готовые шаблоны промптов",
        "Безопасная конфигурация и простая интеграция в локальную среду",
        "Полная совместимость с Antigravity и Cursor",
      ],
      recommendedUse:
        "Повышение продуктивности разработки с агентами Claude Code и Antigravity.",
      antigravityCompatibility:
        "Полная совместимость. Работает напрямую с системой субагентов и навыков.",
    },
  },
  "ecc-affaan": {
    uz: {
      category: "AI Developer Tools",
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
      recommendedUse:
        "Coding agentlar orqali katta loyihalarni rejalashtirish, xavfsiz kod yozish va avtonom tuzatish jarayonlari uchun.",
      antigravityCompatibility:
        "To'liq mos. Antigravity'ning subagent va skill formati bilan uzviy integratsiya bo'ladi.",
    },
    en: {
      category: "AI Developer Tools",
      shortDescription:
        "Original engineering workflow for coding agents: specialized subagents, portable skills, and the AgentShield security system.",
      fullDescription:
        "Everything Claude Code (ECC) — the original harness and agent engineering system enhancing AI coding agents (Claude Code, Cursor, Codex, OpenCode). Created by Affan Mustafa (@affaan-m). Implements the 'plan -> test -> implement -> review -> verify -> remember' cycle, dozens of specialized agents, hundreds of portable skills, and AgentShield verification.",
      features: [
        "Agent engineering cycle: plan -> test -> implement -> review -> verify -> remember",
        "Portable skills (SKILL.md) and specialized subagent suites",
        "AgentShield: security auditing for prompts, MCP configs, and secrets",
        "Compatibility with Antigravity, Claude Code, Cursor, Zed, and OpenCode",
      ],
      recommendedUse:
        "Planning large codebases, writing secure code, and autonomous debugging with AI coding agents.",
      antigravityCompatibility:
        "Fully compatible. Directly aligns with Antigravity subagent and skill specifications.",
    },
    ru: {
      category: "AI Developer Tools",
      shortDescription:
        "Оригинальный инженерный workflow для кодинг-агентов: специализированные субагенты, портативные навыки и система AgentShield.",
      fullDescription:
        "Everything Claude Code (ECC) — оригинальная инженерная система для повышения продуктивности AI кодинг-агентов (Claude Code, Cursor, Codex, OpenCode). Автор: Affan Mustafa (@affaan-m). Включает цикл 'план -> тест -> реализация -> ревью -> верификация -> память', десятки агентов и аудит безопасности AgentShield.",
      features: [
        "Инженерный цикл: plan -> test -> implement -> review -> verify -> remember",
        "Портативные навыки (SKILL.md) и набор специализированных субагентов",
        "AgentShield: аудит безопасности промптов, конфигураций MCP и секретов",
        "Совместимость с Antigravity, Claude Code, Cursor, Zed и OpenCode",
      ],
      recommendedUse:
        "Планирование архитектуры, безопасное написание кода и автономная отладка с AI-агентами.",
      antigravityCompatibility:
        "Полная совместимость. Напрямую интегрируется со стандартами субагентов и навыков.",
    },
  },
  omniroute: {
    uz: {
      category: "AI Gateway",
      shortDescription:
        "Yagona mahalliy endpoint orqali yuzlab LLM provayderlar va modellarni boshqarish, avtomatik fallback va token kompressiyasi.",
      fullDescription:
        "OmniRoute — arzon va samarali xulosalash (inference) uchun ochiq manbali AI gateway. Barcha mashhur LLM provayderlarini (Claude, GPT, Gemini, DeepSeek va bepul provayderlar) bitta OpenAI-mos endpoint ostida birlashtiradi. Token sarfini 30-50% gacha kamaytiruvchi RTK + Caveman kompressiyasi va kotirovka tugaganda avtomatik fallback imkoniyatlariga ega.",
      features: [
        "1000+ modellar va yuzlab provayderlarni bitta API endpointda jamlash",
        "Kotirovka tugaganda avtomatik zaxira provayderga o'tish (Smart Fallback)",
        "Tokenlarni tejovchi o'rnatilgan matn siqish usullari (30-50% tejash)",
        "Lokal router, Docker yoki Desktop ko'rinishida oson ishga tushirish",
      ],
      recommendedUse:
        "Ko'p provayderli LLM tizimlari, API xarajatlarini tejash va uzluksiz ish faoliyatini ta'minlash uchun.",
      antigravityCompatibility:
        "Yuqori. OpenAI-mos API orqali Antigravity va boshqa muhitlarga proxy sifatida ulanadi.",
    },
    en: {
      category: "AI Gateway",
      shortDescription:
        "Unified local AI gateway for routing 100+ LLM providers, automatic smart fallback, and token compression.",
      fullDescription:
        "OmniRoute is an open-source AI gateway for cost-effective inference. Combines all major LLM providers (Claude, GPT, Gemini, DeepSeek, and free providers) under a single OpenAI-compatible endpoint with RTK token compression and automatic quota failover.",
      features: [
        "Aggregate 1000+ models and hundreds of providers under one endpoint",
        "Automatic fallback to backup providers when quotas expire",
        "Built-in text compression saving 30-50% on token consumption",
        "Easy deployment as local router, Docker container, or Desktop app",
      ],
      recommendedUse:
        "Multi-provider LLM pipelines, minimizing API costs, and ensuring uninterrupted uptime.",
      antigravityCompatibility:
        "High. Connects seamlessly as an OpenAI-compatible proxy into Antigravity.",
    },
    ru: {
      category: "AI Gateway",
      shortDescription:
        "Единый локальный AI-шлюз для маршрутизации 100+ LLM провайдеров, умного переключения и сжатия токенов.",
      fullDescription:
        "OmniRoute — open-source AI-шлюз для экономичного инференса. Объединяет ведущих LLM провайдеров (Claude, GPT, Gemini, DeepSeek и бесплатные сервисы) под единым OpenAI-совместимым эндпоинтом со сжатием токенов RTK и автоматическим переключением при исчерпании лимитов.",
      features: [
        "1000+ моделей и сотни провайдеров в едином API эндпоинте",
        "Автоматическое переключение на резервного провайдера при исчерпании квот",
        "Встроенное сжатие текста, экономящее 30-50% токенов",
        "Простой запуск через локальный роутер, Docker или Desktop",
      ],
      recommendedUse:
        "Мультипровайдерные AI-конвейеры, сокращение расходов на API и отказоустойчивость.",
      antigravityCompatibility:
        "Высокая. Подключается как OpenAI-совместимый прокси в Antigravity.",
    },
  },
  "ui-ux-pro-max-skill": {
    uz: {
      category: "UI/UX & Design",
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
      recommendedUse:
        "Premium SaaS interfeyslari, developer portallari va dizayn tizimlarini barpo etishda.",
      antigravityCompatibility:
        "To'liq rasmiy qo'llab-quvvatlanadi (`--ai antigravity` bayrog'i mavjud).",
    },
    en: {
      category: "UI/UX & Design",
      shortDescription:
        "Intelligent design skill generating professional UI, color palettes, typography, and design systems for AI coding agents.",
      fullDescription:
        "UI/UX Pro Max Skill equips AI assistants (Antigravity, Cursor, Claude Code) with design intelligence to produce polished, accessible, and production-ready design systems with strict WCAG AA contrast, micro-interactions, and design token architecture.",
      features: [
        "Design System Generator with semantic design tokens",
        "60+ modern UI aesthetics (Minimalism, Premium Dark, Bento Grid)",
        "WCAG AA contrast and accessibility standards",
        "Official CLI integration for Antigravity",
      ],
      recommendedUse:
        "Building premium SaaS interfaces, developer hubs, and scalable design systems.",
      antigravityCompatibility:
        "Officially supported (via `--ai antigravity` flag).",
    },
    ru: {
      category: "UI/UX & Design",
      shortDescription:
        "Интеллектуальный навык для генерации интерфейсов, цветовых палитр, типографики и дизайн-систем для AI-агентов.",
      fullDescription:
        "UI/UX Pro Max Skill наделяет AI-помощников (Antigravity, Cursor, Claude Code) дизайнерским интеллектом для создания красивых, удобных и профессиональных дизайн-систем с контрастом WCAG AA, микроанимациями и дизайн-токенами.",
      features: [
        "Генератор дизайн-систем с семантическими токенами цвета",
        "60+ современных UI-стилей (Minimalism, Premium Dark, Bento Grid)",
        "Стандарты доступности и контраста WCAG AA",
        "Официальная интеграция CLI для Antigravity",
      ],
      recommendedUse:
        "Разработка премиальных SaaS-интерфейсов, порталов разработчиков и дизайн-систем.",
      antigravityCompatibility:
        "Официальная поддержка (флаг `--ai antigravity`).",
    },
  },
  headroom: {
    uz: {
      category: "Context Optimization",
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
      recommendedUse:
        "Katta hajmli fayllar, JSON jadvallari va uzoq davom etuvchi agent sessiyalarida kontekstni tejash uchun.",
      antigravityCompatibility:
        "Yuqori. MCP server sifatida Antigravity sozlamalariga to'g'ridan-to'g'ri biriktiriladi.",
    },
    en: {
      category: "Context Optimization",
      shortDescription:
        "Token-saving context optimization layer cutting LLM prompt & tool outputs by 20-95%.",
      fullDescription:
        "Headroom is an intelligent proxy and MCP compression layer that strips redundant patterns from tool outputs, logs, and JSON payloads before sending them to LLMs, delaying context exhaustion and slashing token costs.",
      features: [
        "Compress JSON and structured payloads by 60-95%",
        "Save 20%+ tokens on agent tool execution results",
        "Deploy as Python library, HTTP proxy, or MCP server",
        "Preserves exact semantic meaning of payloads",
      ],
      recommendedUse:
        "Handling massive files, JSON datasets, and long autonomous agent sessions.",
      antigravityCompatibility:
        "High. Mounts directly into Antigravity configurations as an MCP server.",
    },
    ru: {
      category: "Context Optimization",
      shortDescription:
        "Слой оптимизации контекста, сжимающий промпты и результаты инструментов на 20-95% для экономии токенов.",
      fullDescription:
        "Headroom — умный прокси и MCP-слой сжатия, удаляющий избыточные шаблоны из вывода инструментов, логов и JSON перед отправкой в LLM, предотвращая переполнение контекстного окна и снижая затраты.",
      features: [
        "Сжатие JSON и структурированных данных на 60-95%",
        "Экономия более 20% токенов при выводе инструментов агента",
        "Работа в виде библиотеки Python, HTTP-прокси или MCP-сервера",
        "Полное сохранение исходного смысла данных",
      ],
      recommendedUse:
        "Работа с большими файлами, сложными JSON-ответами и долгими сессиями агентов.",
      antigravityCompatibility:
        "Высокая. Напрямую подключается как MCP-сервер в Antigravity.",
    },
  },
  freellmapi: {
    uz: {
      category: "Free AI APIs",
      shortDescription:
        "Ko'plab bepul LLM provayderlarini yagona OpenAI-mos /v1 endpointi ostida birlashtiruvchi shlyuz (Free tier eslatmasi bilan).",
      fullDescription:
        "FreeLLMAPI — o'nlab bepul tier taqdim etuvchi AI provayderlari va modellarini bitta OpenAI-mos `/v1` endpointi orqali boshqarish tizimi. Foydalanuvchi bitta kalit orqali so'rov yuboradi, tizim esa mavjud bepul provayderlar bo'yicha aqlli yo'naltirish (routing) va navbatni boshqarishni amalga oshiradi. Muhim: Free tier limitlari va kotirovkalari mavjud, tajriba va dasturlash uchun mo'ljallangan.",
      features: [
        "Barcha bepul AI provayderlari uchun yagona `/v1` interfeysi",
        "Limitga yetganda avtomatik failover va qayta yo'naltirish",
        "AES-256-GCM kalitlar shifrlanishi",
        "Oson bir qatorli Docker o'rnatish",
      ],
      recommendedUse:
        "Shaxsiy tajribalar, lokal dasturlash va bepul sun'iy intellekt modellarini sinab ko'rish uchun.",
      antigravityCompatibility:
        "OpenAI-mos API endpoint orqali har qanday AI agent yoki muhitga ulanadi.",
    },
    en: {
      category: "Free AI APIs",
      shortDescription:
        "Unified OpenAI-compatible /v1 gateway aggregating multiple free LLM providers with automatic failover.",
      fullDescription:
        "FreeLLMAPI unites free-tier AI providers and models under a single OpenAI-compatible `/v1` endpoint. Handles intelligent routing, load balancing, and failover across free quotas for experimentation and development.",
      features: [
        "Single `/v1` OpenAI interface for all free AI providers",
        "Automatic failover and rerouting when rate limits hit",
        "AES-256-GCM encrypted key storage",
        "Instant one-liner Docker setup",
      ],
      recommendedUse:
        "Personal experiments, local coding sessions, and testing free LLM endpoints.",
      antigravityCompatibility:
        "Connects to any AI agent or IDE environment via OpenAI-compatible endpoints.",
    },
    ru: {
      category: "Free AI APIs",
      shortDescription:
        "Единый OpenAI-совместимый /v1 шлюз, объединяющий бесплатные LLM провайдеры с автоматическим переключением.",
      fullDescription:
        "FreeLLMAPI объединяет бесплатные AI провайдеры и модели под единым OpenAI-совместимым эндпоинтом `/v1`. Осуществляет умную маршрутизацию, балансировку нагрузки и автоматическое переключение между бесплатными квотами.",
      features: [
        "Единый интерфейс `/v1` для всех бесплатных AI провайдеров",
        "Автоматическое перенаправление при достижении лимитов",
        "Шифрование ключей по стандарту AES-256-GCM",
        "Быстрая установка через Docker одной командой",
      ],
      recommendedUse:
        "Персональные эксперименты, локальная разработка и тестирование бесплатных AI-моделей.",
      antigravityCompatibility:
        "Подключается к любому AI-агенту через OpenAI-совместимый эндпоинт.",
    },
  },
  "claude-mem": {
    uz: {
      category: "AI Memory",
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
      recommendedUse:
        "Uzoq muddatli dasturlash loyihalarida AI agentning xotirasini uzluksiz saqlab turish uchun.",
      antigravityCompatibility:
        "MCP protokoli orqali Antigravity sessiyalari bilan to'liq bog'lanadi.",
    },
    en: {
      category: "AI Memory",
      shortDescription:
        "Persistent cross-session memory, summarization, and vector search system for AI coding agents.",
      fullDescription:
        "Claude-Mem gives AI coding agents (Claude Code, OpenCode, Cursor, Antigravity) persistent memory across sessions. Retains critical architectural decisions, resolved bugs, and project structure without needing to re-index the repo each session.",
      features: [
        "Automatic cross-session context persistence",
        "AI-powered compression and summarization to preserve tokens",
        "Natural language vector memory search",
        "Automatic redaction of secrets and API tokens",
      ],
      recommendedUse:
        "Preserving continuous memory for AI agents in long-term development projects.",
      antigravityCompatibility:
        "Fully connects into Antigravity workflows via the standard MCP protocol.",
    },
    ru: {
      category: "AI Memory",
      shortDescription:
        "Постоянная межсессионная память, суммаризация и векторный поиск для кодинг-агентов.",
      fullDescription:
        "Claude-Mem — плагин постоянной памяти для AI кодинг-агентов (Claude Code, OpenCode, Cursor, Antigravity), избавляющий от необходимости повторно изучать проект на каждой сессии. Сохраняет ключевые архитектурные решения и исправленные ошибки.",
      features: [
        "Автоматическое сохранение контекста между сессиями",
        "Сжатие и суммаризация на базе AI для экономии токенов",
        "Поиск по памяти на естественном языке (Vector search)",
        "Автоматическая очистка конфиденциальных данных и ключей API",
      ],
      recommendedUse:
        "Непрерывное сохранение контекста и памяти AI-агентов в долгосрочных проектах.",
      antigravityCompatibility:
        "Полная интеграция с сессиями Antigravity по протоколу MCP.",
    },
  },
  strix: {
    uz: {
      category: "Cybersecurity",
      shortDescription:
        "Ruxsat etilgan tizimlarda zaifliklarni aniqlash va tekshirish uchun ochiq manbali avtonom AI xavfsizlik sinov tizimi.",
      fullDescription:
        "Strix — dasturiy ta'minot xavfsizligini tekshirish uchun mo'ljallangan avtonom AI agenti. Statik skanerlardan farqli o'laroq, haqiqiy proof-of-concept (PoC) orqali zaifliklarni tasdiqlaydi va noto'g'ri signallarni (false positives) keskin kamaytiradi. Faqat ruxsat etilgan muhitlarda ishlatilishi shart.",
      features: [
        "Avtonom xavfsizlik sinovi va tekshiruvi (Penetration testing)",
        "Haqiqiy ekspluatatsiya PoC'lari bilan tasdiqlash",
        "CI/CD va GitHub Actions bilan integratsiya",
        "Zaifliklarni tuzatish uchun avtomatik tavsiyalar",
      ],
      recommendedUse:
        "Dasturlar va veb-ilovalarni ishlab chiqarishga (production) chiqarishdan oldin xavfsizlik auditidan o'tkazishda.",
      antigravityCompatibility:
        "Alohida CLI va Docker vositasi sifatida mustaqil ishlaydi.",
    },
    en: {
      category: "Cybersecurity",
      shortDescription:
        "Autonomous open-source AI penetration testing and vulnerability verification system for authorized environments.",
      fullDescription:
        "Strix is an autonomous AI agent built for security assessments. Unlike static scanners, it validates findings with real Proof-of-Concepts (PoC), slashing false positives. Strictly for authorized environments only.",
      features: [
        "Autonomous security testing and penetration verification",
        "Proof-of-Concept validation to eliminate false positives",
        "CI/CD and GitHub Actions pipeline integration",
        "Automated remediation recommendations",
      ],
      recommendedUse:
        "Conducting rigorous security audits prior to deploying web apps to production.",
      antigravityCompatibility:
        "Runs independently as a specialized CLI and Docker container.",
    },
    ru: {
      category: "Cybersecurity",
      shortDescription:
        "Автономная система тестирования безопасности и верификации уязвимостей на базе AI для авторизованных сред.",
      fullDescription:
        "Strix — автономный AI-агент для аудита безопасности ПО. В отличие от статических сканеров, подтверждает уязвимости реальными PoC-эксплойтами, исключая ложные срабатывания. Только для авторизованных сред.",
      features: [
        "Автономное тестирование безопасности и аудит уязвимостей",
        "Подтверждение через реальные PoC для исключения ложных тревог",
        "Интеграция с CI/CD и GitHub Actions",
        "Автоматические рекомендации по устранению уязвимостей",
      ],
      recommendedUse:
        "Аудит безопасности веб-приложений и сервисов перед выпуском в production.",
      antigravityCompatibility:
        "Работает автономно в виде инструмента командной строки и Docker-контейнера.",
    },
  },
};

export function getLocalizedResources(lang: Language): Resource[] {
  return RESOURCES.map((resource) => {
    const translation = RESOURCE_TRANSLATIONS[resource.id]?.[lang];
    if (!translation) return resource;

    return {
      ...resource,
      category: translation.category,
      shortDescription: translation.shortDescription,
      fullDescription: translation.fullDescription,
      features: translation.features,
      recommendedUse: translation.recommendedUse,
      antigravityCompatibility: translation.antigravityCompatibility,
    };
  });
}
