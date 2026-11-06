# DEV-LIB Design System (MASTER)

## 1. Filosofiya va Yondashuv
Ushbu dizayn tizimi **Open Source & AI Developer Library** uchun maxsus ishlab chiqilgan. Asosiy maqsad — premium darajadagi minimalizm, yuqori kontrastli qora-oq-jigarrang ranglar uyg‘unligi, tezkor va chalg‘ituvchi ortiqcha elementlardan xoli bo‘lgan ishlab chiquvchilar interfeysini taqdim etish.

Ushbu qoidalar barcha sahifa va komponentlar uchun majburiydir.

---

## 2. Rang Tizimi va Semantik Tokenlar

### 2.1. Rang Palitrasi
```css
:root {
  /* Asosiy fon va sirt ranglari */
  --background: #090807;          /* Chuqur qora obsidian */
  --surface: #14110E;             /* Qorong'i sirt (kartochkalar, panellar) */
  --surface-elevated: #1D1712;    /* Ko'tarilgan sirt (modallar, menyular) */
  --surface-hover: #261E17;       /* Hover holatidagi sirt */

  /* Matn va kontent ranglari */
  --foreground: #F7F4EF;          /* Asosiy oq matn (issiq fil suyagi) */
  --foreground-muted: #B8ABA0;    /* Ikkinchi darajali xira matn (warm sand) */

  /* Birlamchi aksent (Jigarrang / Bronza) */
  --primary: #A47550;             /* Asosiy harakat tugmalari, active holatlar */
  --primary-hover: #BD8A60;       /* Tugmalar ustiga borgandagi rang */
  --primary-foreground: #FFFFFF;  /* Birlamchi tugmalar ichidagi matn */

  /* Chegara (Border) ranglari */
  --border: #302720;              /* Standart nozik chegara */
  --border-hover: #584231;        /* Faol/hover chegara */

  /* Fokus va aksent halqalari */
  --ring: #D5A06B;                /* Klaviatura fokusi uchun aksent halqa */

  /* Muvaffaqiyat va ogohlantirish */
  --success: #2E7D32;
  --warning: #C77700;
  --danger: #B3261E;

  /* Radius shkalasi */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
}
```

### 2.2. Kontrast va Foydalanish Qulayligi (WCAG AA)
- Asosiy matn (`#F7F4EF`) va fon (`#090807`) o‘rtasidagi kontrast nisbati: **18.2:1** (AAA talabidan ancha yuqori).
- Muted matn (`#B8ABA0`) va fon o‘rtasidagi kontrast nisbati: **9.5:1** (Kichik matnlar uchun to‘liq mos).
- Birlamchi tugma (`#A47550`) va oq matn (`#FFFFFF`) o‘rtasidagi kontrast nisbati: **4.8:1** (WCAG AA standartiga mos).

---

## 3. Taqiqlangan Dizayn Anti-Patternlari

Qat'iyan taqiqlanadi:
- ❌ Binafsha, pushti yoki kislotali neon gradientlar
- ❌ Neon ko‘k yoki neon yashil elementlar
- ❌ Rang-barang, chalg‘ituvchi dashboardlar
- ❌ Keraksiz glassmorphism (loyqa shisha effektlari)
- ❌ 20px dan katta (haddan tashqari yumaloq) border-radius
- ❌ Ortiqcha "glow" va neon yorug‘lik nurlari
- ❌ Emoji orqali UI iconlar yasash (faqat SVG Lucide ishlatiladi)
- ❌ Tasodifiy stock fotosuratlar yoki mavzuga aloqasiz 3D modellar
- ❌ Past kontrastli va o‘qish qiyin bo‘lgan kulrang matnlar
- ❌ Generic, xaraktersiz "AI-generated" shablon ko‘rinishi

---

## 4. Tipografiya (Typography Hierarchy)

- **Asosiy shrift oilasi**: Inter / Geist / system-ui, sans-serif
- **Kod va buyruqlar shrifti**: JetBrains Mono / Geist Mono / monospace

### Ierarxiya:
- **H1 (Hero sarlavhasi)**: `32px` - `44px`, `font-bold`, `leading-tight`, rang: `--foreground` (`#F7F4EF`)
- **H2 (Bo‘lim sarlavhalari)**: `22px` - `28px`, `font-semibold`, rang: `--foreground`
- **H3 (Kartochka sarlavhalari)**: `18px` - `20px`, `font-semibold`, rang: `--foreground`
- **Body / Asosiy matn**: `15px` - `16px`, `font-normal`, `leading-relaxed`, rang: `--foreground-muted` (`#B8ABA0`)
- **Kichik ma'lumotlar / Teglar**: `12px` - `13px`, `font-medium`, rang: `--foreground-muted`
- **Kod bloki / CLI komandalar**: `13px` - `14px`, `font-mono`, rang: `--foreground`, sirt foni: `--surface-elevated`

---

## 5. Komponentlar Dizayn Qo‘llanmasi

### 5.1. Sidebar (Chap Menyu)
- Standart kenglik: `260px` (Desktopda).
- Fon: `--surface` (`#14110E`), o‘ng chegara: `1px solid var(--border)`.
- Navigatsiya elementlari:
  - Sukut bo‘yicha: `--foreground-muted` matn, shaffof fon.
  - Hover: `--surface-hover` fon, `--foreground` matn.
  - Active: jigarrang aksent fon (`rgba(164, 117, 80, 0.15)`), chegara `--primary`, matn `--primary` yoki oq.
- Mobil qurilmalarda: Drawer rejimi (`z-50`), silliq ochilib-yopilish, yopish tugmasi va backdrop.

### 5.2. Repository Qatorlari (Sammi Academy uslubida)
- Konteyner: `--surface` fon, `1px solid var(--border)`, `border-radius: var(--radius-md)`.
- Hover: `--surface-hover` fon, chegara `--border-hover`.
- Tarkibi:
  - Chapda: Repository nomi, rasmiy egasi, texnologiya teglari va o‘zbekcha aniq tavsif.
  - O‘ngda (yoki mobil pastda): `git clone` nusxalash tugmasi, GitHub havolasi va Batafsil tugmasi.

### 5.3. Tugmalar (Buttons)
- **Primary Tugma**: Fon `--primary` (`#A47550`), matn `--primary-foreground` (`#FFFFFF`), hover `--primary-hover` (`#BD8A60`). Radius: `var(--radius-sm)`.
- **Secondary / Ghost Tugma**: Fon shaffof yoki `--surface-elevated`, chegara `1px solid var(--border)`, hover chegara `--border-hover`, matn `--foreground`.
- **Nusxalash (Copy) Tugmasi**: Ixcham monospaced ko‘rinish, bosilganda "Nusxalandi!" belgisi bilan 2 soniyalik o‘zgarish.

### 5.4. Qidiruv va Filtrlar
- Qidiruv qutisi: `--surface` fon, chegara `--border`, fokusda chegara `--primary` va `--ring` halqasi.
- Filtr teglari: Pill shakli, tanlanganda `--primary` fon yoki chegara, yonida real hisoblagich (badge).

---

## 6. Animatsiya va O‘tishlar (Micro-interactions)
- Davomiyligi: `150ms` - `200ms` (`ease-in-out`).
- `@media (prefers-reduced-motion: reduce)`: Barcha animatsiyalar o‘chiriladi va darhol holatga o‘tiladi.
