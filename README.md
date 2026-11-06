# DEV-LIB — Premium Open Source & AI Developer Library

[![Next.js 16](https://img.shields.io/badge/Next.js-16%20Active%20LTS-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Dasturchilar va AI coding agentlari uchun eng ilg'or ochiq manbali vositalar, ko'nikmalar (skills), shlyuzlar (gateways) va xavfsizlik vositalarini bitta qulay, tezkor va premium interfeysda birlashtiruvchi platforma.

Rasmiy GitHub repository: [AbdullayevTemurmalik/EveryThingForClaudeCode](https://github.com/AbdullayevTemurmalik/EveryThingForClaudeCode)

---

## 📌 Mundarija
1. [Loyiha haqida](#-loyiha-haqida)
2. [Asosiy imkoniyatlar](#-asosiy-imkoniyatlar)
3. [Dizayn tizimi](#-dizayn-tizimi)
4. [Texnologik Stack](#-texnologik-stack)
5. [Tavsiya etilgan 7 ta ochiq manba](#-tavsiya-etilgan-7-ta-ochiq-manba)
6. [Lokal o'rnatish va ishga tushirish](#-lokal-ornatish-va-ishga-tushirish)
7. [Hissa qo'shish (Contributing)](#-hissa-qoshish-contributing)
8. [Xavfsizlik siyosati](#-xavfsizlik-siyosati)
9. [Litsenziya](#-litsenziya)

---

## 🚀 Loyiha haqida

**DEV-LIB** — sun'iy intellekt va zamonaviy dasturlash olamidagi eng sara, sinovdan o'tgan ochiq manbali vositalarni tartibli katalog shaklida taqdim etadi. Sammi Academy "Tayyor kodlar" arxitekturasi asosida yaratilgan mazkur interfeys ishlab chiquvchilarga kerakli resursni bir zumda topish, `git clone` komandasini nusxalash, to'liq o'rnatish yo'riqnomasi bilan tanishish va GitHub'da ochish imkoniyatini beradi.

---

## ✨ Asosiy imkoniyatlar

- **Qora, oq va jigarrang premium dizayn**: Ko'zni toliqtirmaydigan, chalg'ituvchi neon yoki ortiqcha animatsiyalardan xoli toza dark UI.
- **Tugmasiz tezkor qidiruv**: Nom, tavsif, texnologiya va toifalar bo'yicha real vaqtda harflardan qat'i nazar qidiruv.
- **Maxsus Custom Select**: Loyihalarni to'g'ridan-to'g'ri ochish uchun nozik did bilan ishlangan maxsus tanlov komponenti.
- **Bir bosishda nusxalash**: Clipboard API orqali to'g'ri va to'liq `git clone` buyrug'ini nusxalash va vizual tasdiq.
- **Keshlanuvchi GitHub REST API**: Rasmiy repository yulduzchalari va forklarini server orqali xavfsiz yangilab borish.
- **To'liq o'zbek tilida**: Barcha navigatsiya, tavsif va yo'riqnomalar tabiiy o'zbek tilida.
- **To'liq moslashuvchanlik (Responsive)**: Smartfonlar (320px) dan katta monitorlar (1920px) gacha benuqson ko'rinish.

---

## 🎨 Dizayn tizimi

Loyiha uchun maxsus `design-system/MASTER.md` qoidalari ishlab chiqilgan:
- **Asosiy fon**: `#090807` (Deep Obsidian Black)
- **Sirt (Surface)**: `#14110E`, `#1D1712`, `#261E17`
- **Asosiy matn**: `#F7F4EF` (Warm Ivory White)
- **Xira matn**: `#B8ABA0` (Warm Sand)
- **Aksent (Primary)**: `#A47550` (Warm Bronze / Brown)
- **Hover holat**: `#BD8A60`
- **Chegara (Border)**: `#302720`

---

## 🛠 Texnologik Stack

- **Framework**: [Next.js 16 (Active LTS)](https://nextjs.org/) — App Router, Turbopack, React 19
- **Til**: [TypeScript](https://www.typescriptlang.org/) (Strict rejim)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS Variables
- **Ikonkalar**: [Lucide React](https://lucide.dev/) (Professional SVG)
- **API**: Next.js Server Components va API Routes

---

## 📚 Tavsiya etilgan 7 ta ochiq manba

Barcha manbalar tahlil qilingan va ularning asl mualliflik huquqlari to'liq e'tirof etiladi:

1. **[ECC (Everything Claude Code)](https://github.com/affaan-m/ECC)** — Coding agentlar uchun to'liq muhandislik sikli, ko'chma ko'nikmalar (skills) va AgentShield xavfsizlik tizimi. *(Muallif: @affaan-m, MIT License)*
2. **[OmniRoute](https://github.com/cheaper-inference/OmniRoute)** — Yuzlab LLM provayderlarini bitta mahalliy endpoint orqali boshqarish va token siqish shlyuzi. *(Muallif: @cheaper-inference, MIT License)*
3. **[UI/UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — AI agentlarga professional dizayn tizimlari va interfeyslar yaratishda yordam beruvchi intellektual skill. *(Muallif: @nextlevelbuilder, MIT License)*
4. **[Headroom](https://github.com/headroomlabs-ai/headroom)** — LLM konteksti va agent tool outputlarini 20-95% gacha qisqartiruvchi kontekst optimallashtirish qatlami. *(Muallif: @headroomlabs-ai, Apache-2.0 License)*
5. **[FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi)** — Bepul AI provayderlarini yagona OpenAI-mos `/v1` endpointi orqali birlashtiruvchi gateway. *(Muallif: @tashfeenahmed, MIT License)*
6. **[Claude-Mem](https://github.com/thedotmack/claude-mem)** — AI agentlar uchun sessiyalararo doimiy xotira va kontekst saqlash vositasi. *(Muallif: @thedotmack, MIT License)*
7. **[Strix](https://github.com/usestrix/strix)** — Ruxsat berilgan tizimlarda zaifliklarni aniqlash va sinash uchun avtonom AI xavfsizlik platformasi. *(Muallif: @usestrix, AGPL-3.0 License)*

*Izoh: Sakkizinchi manba loyiha tizimida topilmaganligi sababli, qat'iy talabga asosan uydirma ma'lumot kiritilmadi.*

---

## 💻 Lokal o'rnatish va ishga tushirish

### Talablar
- Node.js 18.18+ yoki 20+ yoki 22+ (tavsiya etiladi: `v22.23.2`)
- npm 10+ yoki pnpm

### Qadamlar:

1. **Repositoryni klonlang:**
   ```bash
   git clone https://github.com/AbdullayevTemurmalik/EveryThingForClaudeCode.git
   cd EveryThingForClaudeCode
   ```

2. **Bog'liqliklarni o'rnating:**
   ```bash
   npm install
   ```

3. **Dasturni dasturchi rejimida ishga tushiring:**
   ```bash
   npm run dev
   ```

4. Brauzerda oching:
   ```
   http://localhost:3000
   ```

5. **Production build yaratish:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🤝 Hissa qo'shish (Contributing)

Loyiha ochiq manbali va har qanday taklif yoki tuzatishlar mamnuniyat bilan qabul qilinadi. Batafsil qoidalar bilan [CONTRIBUTING.md](CONTRIBUTING.md) faylida tanishishingiz mumkin.

---

## 🛡 Xavfsizlik siyosati

Xavfsizlik bilan bog'liq har qanday xatolik yoki zaifliklarni aniqlasangiz, [SECURITY.md](SECURITY.md) qo'llanmasiga muvofiq murojaat qilishingizni so'raymiz.

---

## 📄 Litsenziya

Ushbu loyiha [MIT Litsenziyasi](LICENSE) ostida tarqatiladi.  
Muallif: **Abdullayev Temurmalik** (2026).
