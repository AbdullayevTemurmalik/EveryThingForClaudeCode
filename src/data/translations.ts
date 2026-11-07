export type Language = "uz" | "en" | "ru";

export interface Translations {
  navbar: {
    title: string;
    subtitle: string;
    star: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedCount: string;
  };
  showcase: {
    badge: string;
    title: string;
    description: string;
    starBtn: string;
    stars: string;
    forks: string;
    issues: string;
    loading: string;
  };
  select: {
    heading: string;
    placeholder: string;
    allLabel: string;
    allBadge: string;
    allDesc: string;
    reset: string;
  };
  card: {
    details: string;
    copy: string;
    copied: string;
    github: string;
    license: string;
  };
  modal: {
    overview: string;
    install: string;
    features: string;
    license: string;
    compatibility: string;
    recommended: string;
    close: string;
  };
  footer: {
    madeBy: string;
    openSource: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  uz: {
    navbar: {
      title: "Everything for Claude Code",
      subtitle: "Open Source & AI Dasturchilar Vositalari Platformasi",
      star: "Star",
    },
    hero: {
      badge: "Ochiq Manba & AI Dasturchilar Kutubxonasi",
      title: "Everything for Claude Code",
      subtitle:
        "Claude Code va sun'iy intellekt agentlari bilan ishlovchi dasturchilar uchun eng sara, sinovdan o'tgan ochiq manbali vositalar, ko'nikmalar (skills), xavfsiz promptlar va AI shlyuzlar to'plami.",
      verifiedCount: "ta saralangan vosita",
    },
    showcase: {
      badge: "Rasmiy GitHub Hamjamiyati",
      title: "Loyihani GitHub’da qo‘llab-quvvatlang",
      description:
        "Foydali ochiq manbali vositalarni bitta joyga jamladik. Loyiha sizga foydali bo‘lsa, GitHub’da yulduzcha qoldirib, uning rivojlanishini qo‘llab-quvvatlang.",
      starBtn: "GitHub'da Yulduzcha Bosish",
      stars: "yulduz",
      forks: "fork",
      issues: "ochiq masala",
      loading: "GitHub statistikasi yangilanmoqda...",
    },
    select: {
      heading: "Ochiq manba vositasini tanlang:",
      placeholder: "Ochiq manbali vositani tanlang...",
      allLabel: "Barcha manbalarni ko'rsatish",
      allBadge: "8 ta manba",
      allDesc: "Kutubxonadagi barcha 8 ta loyihani to'liq jadvalda ko'rish",
      reset: "Barcha manbalarni qaytarish",
    },
    card: {
      details: "Tafsilotlar",
      copy: "Nusxalash",
      copied: "Nusxalandi!",
      github: "GitHub",
      license: "Litsenziya",
    },
    modal: {
      overview: "Umumiy ma'lumot",
      install: "O'rnatish",
      features: "Asosiy imkoniyatlar",
      license: "Litsenziya",
      compatibility: "Moslik",
      recommended: "Tavsiya etilgan foydalanish",
      close: "Yopish",
    },
    footer: {
      madeBy: "Abdullayev Temurmalik tomonidan ishlab chiqilgan va Claude Code hamjamiyatiga bag'ishlangan.",
      openSource: "100% Ochiq Manba",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  en: {
    navbar: {
      title: "Everything for Claude Code",
      subtitle: "Open Source & AI Developer Tools Platform",
      star: "Star",
    },
    hero: {
      badge: "Open Source & AI Developer Library",
      title: "Everything for Claude Code",
      subtitle:
        "The premier curated collection of verified open-source tools, agent skills, safe prompt templates, and AI gateways for developers building with Claude Code.",
      verifiedCount: "curated tools",
    },
    showcase: {
      badge: "Official GitHub Community",
      title: "Support the Project on GitHub",
      description:
        "We gathered verified open-source tools in one place. If you find this project valuable, please leave a star on GitHub to support its active development.",
      starBtn: "Star on GitHub",
      stars: "stars",
      forks: "forks",
      issues: "open issues",
      loading: "Updating GitHub statistics...",
    },
    select: {
      heading: "Select an open-source tool:",
      placeholder: "Choose an open-source tool...",
      allLabel: "Show all resources",
      allBadge: "8 resources",
      allDesc: "View all 8 projects in the full grid layout",
      reset: "Reset to all resources",
    },
    card: {
      details: "Details",
      copy: "Copy",
      copied: "Copied!",
      github: "GitHub",
      license: "License",
    },
    modal: {
      overview: "Overview",
      install: "Installation",
      features: "Key Features",
      license: "License",
      compatibility: "Compatibility",
      recommended: "Recommended Use",
      close: "Close",
    },
    footer: {
      madeBy: "Crafted by Abdullayev Temurmalik and dedicated to the Claude Code developer community.",
      openSource: "100% Open Source",
      rights: "All rights reserved.",
    },
  },
  ru: {
    navbar: {
      title: "Everything for Claude Code",
      subtitle: "Платформа Open Source и AI инструментов для разработчиков",
      star: "Звезда",
    },
    hero: {
      badge: "Библиотека Open Source и AI инструментов",
      title: "Everything for Claude Code",
      subtitle:
        "Коллекция проверенных open-source инструментов, навыков агентов (skills), безопасных шаблонов и AI-шлюзов для разработчиков на Claude Code.",
      verifiedCount: "отобранных инструментов",
    },
    showcase: {
      badge: "Официальное сообщество GitHub",
      title: "Поддержите проект на GitHub",
      description:
        "Мы собрали проверенные open-source инструменты в одном месте. Если проект полезен, поставьте звезду на GitHub и поддержите развитие.",
      starBtn: "Поставить звезду на GitHub",
      stars: "звёзд",
      forks: "форков",
      issues: "открытых задач",
      loading: "Обновление статистики GitHub...",
    },
    select: {
      heading: "Выберите open-source инструмент:",
      placeholder: "Выберите инструмент...",
      allLabel: "Показать все ресурсы",
      allBadge: "8 ресурсов",
      allDesc: "Смотреть все 8 проектов в общей сетке",
      reset: "Сбросить фильтр",
    },
    card: {
      details: "Подробнее",
      copy: "Копировать",
      copied: "Скопировано!",
      github: "GitHub",
      license: "Лицензия",
    },
    modal: {
      overview: "Обзор",
      install: "Установка",
      features: "Основные возможности",
      license: "Лицензия",
      compatibility: "Совместимость",
      recommended: "Рекомендуемое применение",
      close: "Закрыть",
    },
    footer: {
      madeBy: "Разработано Темурмаликом Абдуллаевым для сообщества разработчиков Claude Code.",
      openSource: "100% Открытый исходный код",
      rights: "Все права защищены.",
    },
  },
};
