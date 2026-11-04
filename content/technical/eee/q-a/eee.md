# ⚡ ইলেকট্রিক্যাল বিষয়ভিত্তিক

> সঠিক উত্তর **বোল্ড + ✅** চিহ্নিত। মতভেদের জায়গায় **নোট: ⚠️**

## প্রশ্ন ও সমাধান

---

### ১. Which element stores electrical energy in an electric field? [PSC-ame26]

- ক. inductor
- **খ. capacitor** ✅
- গ. transformer
- ঘ. resistor

**ব্যাখ্যা:** **Capacitor** তার দুই পাতের মধ্যবর্তী **electric field**-এ শক্তি জমা রাখে: **E = ½ C V²**।

- Inductor → **magnetic field**-এ শক্তি জমা রাখে (E = ½ L I²)
- Transformer → magnetic coupling-এর মাধ্যমে এক সার্কিট থেকে অন্য সার্কিটে শক্তি স্থানান্তর করে
- Resistor → বৈদ্যুতিক শক্তিকে **তাপে** রূপান্তর (dissipate) করে, সঞ্চয় করে না।

---

### ২. Power factor of a purely resistive circuit is: [PSC-ame26]

- ক. 0
- খ. 0.5
- **গ. 1** ✅
- ঘ. -1

**ব্যাখ্যা:** Power factor = cos φ, যেখানে φ হলো ভোল্টেজ ও কারেন্টের মধ্যবর্তী phase angle। **বিশুদ্ধ রোধীয় (purely resistive) সার্কিটে** ভোল্টেজ ও কারেন্ট একই ফেজে থাকে, অর্থাৎ φ = 0°, তাই cos 0° = **1** (unity power factor)। বিশুদ্ধ inductor বা capacitor-এ φ = 90° হয়, তখন power factor = 0।

---

### ৩. The device used for AC to DC conversion is: [PSC-ame26]

- ক. Inverter
- খ. Oscillator
- **গ. Rectifier** ✅
- ঘ. Transformer

**ব্যাখ্যা:** **Rectifier** (ডায়োড-ভিত্তিক) AC-কে DC-তে রূপান্তর করে (half-wave, full-wave, bridge)।

- Inverter → DC থেকে AC
- Oscillator → নির্দিষ্ট কম্পাঙ্কের AC সিগন্যাল তৈরি করে
- Transformer → AC ভোল্টেজ বাড়ায়/কমায় (কম্পাঙ্ক অপরিবর্তিত)

---

### ৪. Which one is a passive electronic component? [PSC-ame26]

- ক. Transistor
- খ. Operational Amplifier
- **গ. Resistor** ✅
- ঘ. SCR

**ব্যাখ্যা:** যে উপাদান সিগন্যাল **বাড়াতে (gain) বা নিয়ন্ত্রণ করতে পারে না**, কেবল শক্তি জমা/ব্যয় করে, তা **passive** — যেমন Resistor, Capacitor, Inductor। Transistor, Op-Amp, SCR হলো **active** উপাদান (বাহ্যিক পাওয়ার সাপ্লাই লাগে এবং সিগন্যাল নিয়ন্ত্রণ/বিবর্ধন করে)।

---

### ৫. An electrical circuit consists of a resistor R Ohm, inductor H Henry and capacitor C Farad which are connected in series. A voltage with frequency f is applied. Which relation is true during resonance? [PSC-ame26]

- ক. f² = 1 / (4πLC)
- খ. f² = 1 / (2πLC)
- গ. f = 1 / √(LC)
- **ঘ. f = 1 / (2π√(LC))** ✅

**ব্যাখ্যা:** Series RLC-এ resonance-এ inductive reactance = capacitive reactance:  
X_L = X_C → ωL = 1/(ωC) → ω² = 1/(LC) → ω = 1/√(LC)।  
যেহেতু ω = 2πf, তাই **f = 1 / (2π√(LC))**।  
Resonance-এ impedance সর্বনিম্ন (Z = R), কারেন্ট সর্বোচ্চ এবং power factor = 1।  
(অপশন ক হতো সঠিক যদি লেখা থাকত f² = 1/(**4π²**LC); কিন্তু এখানে 4π আছে, তাই ভুল। অপশন গ-তে 2π নেই, তাই ভুল।)

---

### ৬. If voltage across a 10Ω resistor is 20V, its current and power are: [PSC-ame26]

- ক. 1A, 1W
- **খ. 2A, 40W** ✅
- গ. 0.5A, 10W
- ঘ. 0.5A, 40W

**ব্যাখ্যা:** ওহমের সূত্র অনুযায়ী I = V/R = 20/10 = **2 A**।  
Power P = V × I = 20 × 2 = **40 W** (যাচাই: I²R = 2² × 10 = 40 W; V²/R = 400/10 = 40 W)।

---

### ৭. In 3-phase system, phase difference between two consecutive phases is: [PSC-ame26]

- ক. 60°
- খ. 90°
- **গ. 120°** ✅
- ঘ. 180°

**ব্যাখ্যা:** তিন-ফেজ সিস্টেমে পূর্ণ চক্র 360°-কে তিন ভাগ করা হয় → 360° ÷ 3 = **120°**। অর্থাৎ তিনটি ফেজ (R, Y, B) একটি আরেকটির থেকে 120° ব্যবধানে থাকে।

---
