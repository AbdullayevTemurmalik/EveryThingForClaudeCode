# Hissa Qo'shish Qo'llanmasi (Contributing Guide)

**DEV-LIB (EveryThingForClaudeCode)** loyihasini rivojlantirishga hissa qo'shishni istaganingiz uchun tashakkur! Biz hamjamiyat a'zolarining takliflari, xatoliklarni to'g'rilashlari va yangi ochiq manbali resurslar bo'yicha tavsiyalarini qadrlaymiz.

---

## 1. Asosiy Qoidalar

1. **Hurmat va etika**: Jamiyatda o'zaro hurmat, professional va do'stona munosabatni saqlang.
2. **Haqiqiylik**: Hech qachon soxta, uydirma yoki xavfsizligi tekshirilmagan GitHub repository havolalarini qo'shmang.
3. **Dizayn qoidalari**: `design-system/MASTER.md` qoidalariga rioya qiling. Qora, oq va jigarrang ranglar tizimini buzuvchi o'zgarishlar qabul qilinmaydi.
4. **Til**: Interfeys matnlari toza va ravon o'zbek tilida bo'lishi shart (texnik atamalar va kodlar asl holicha qoladi).

---

## 2. Pull Request (PR) Yaratish Tartibi

1. Repository'ni o'z hisobingizga **Fork** qiling.
2. Yangi tarmoq (branch) oching:
   ```bash
   git checkout -b feature/yangi-manba-nomi
   ```
3. O'zgarishlarni kiriting va loyihani tekshiring:
   ```bash
   npm run build
   npm run lint
   ```
4. O'zgarishlarni commit qiling:
   ```bash
   git commit -m "feat: yangi AI vositasi qo'shildi"
   ```
5. O'z fork'ingizga push qiling va **Pull Request** oching.

---

## 3. Yangi Resurs Qo'shish Talablari

Agar katalogga yangi ochiq manba qo'shmoqchi bo'lsangiz:
- Loyiha GitHub'da faol bo'lishi va ochiq litsenziyaga (MIT, Apache-2.0, BSD, GPL) ega bo'lishi kerak.
- `src/data/resources.ts` faylidagi tiplarga to'liq mos kelishi lozim.
- Asl muallifning huquqlari e'tirof etilishi shart.
