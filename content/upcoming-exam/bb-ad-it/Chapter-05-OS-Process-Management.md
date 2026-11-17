# Chapter 05 — Operating Systems & Process Management

---

**লক্ষ্য পদ:** Bangladesh Govt Grade 9 — Bank, Bangladesh Bank (BB), AME, ANE, AD ধরনের IT/CSE পদ

**ভাষা:** বাংলা ব্যাখ্যা, English term অক্ষত।

# কীভাবে পড়বেন ও লিখবেন

প্রতিটি প্রশ্নে চারটি অংশ আছে:

| অংশ                            | কী পাবেন                                      |
| ------------------------------ | --------------------------------------------- |
| **১. বুঝে নিন**                | ধারণার সহজ ব্যাখ্যা                           |
| **২. পরীক্ষায় যেভাবে লিখবেন** | MCQ / Short note / Written — তিন স্তরের উত্তর |
| **৩. Diagram, table, হিসাব**   | যেখানে দরকার                                  |
| **৪. মনে রাখার কৌশল**          | Mnemonic বা ছোট tip                           |

**Written উত্তরের সাধারণ ছক (সব প্রশ্নে খাটবে):**

1. সংজ্ঞা (১–২ লাইন)
2. মূল পয়েন্ট (numbered, keyword **bold**)
3. Diagram / Table / Example
4. উপসংহার (১ লাইন)

**সময় ও নম্বরের হিসাব:** ২–৩ নম্বরের প্রশ্নে ৪–৫ পয়েন্ট, ৫ নম্বরে ছক অনুযায়ী পূর্ণ উত্তর। Calculation-এর প্রশ্নে ধাপ লিখুন, কারণ ধাপের জন্যও নম্বর থাকে। Diagram হাতে আঁকলে বক্সগুলো পরিষ্কার ও label সহ আঁকুন।

# ০১. Deadlock, চারটি Necessary Condition, Prevention vs Avoidance

## ১. বুঝে নিন:

### A. Deadlock কী?

**Deadlock** হলো **Operating System**-এর এমন একটি অবস্থা, যেখানে দুই বা ততোধিক Process একে অপরের Resource-এর জন্য অপেক্ষা করতে থাকে এবং কোনো Process-ই তার কাজ সম্পন্ন করতে পারে না।

**উদাহরণ:** P1 ধরে আছে Printer, চাইছে Scanner। P2 ধরে আছে Scanner, চাইছে Printer। দুজনই চিরকাল অপেক্ষা করবে।

ধরো, দুটি Process এবং দুটি Resource আছে।

- Process P1-এর কাছে Resource R1 আছে। সে R2-এর জন্য অপেক্ষা করছে।
- Process P2-এর কাছে Resource R2 আছে। সে R1-এর জন্য অপেক্ষা করছে।

ফলে:

- P1 অপেক্ষা করছে P2-এর কাছে থাকা Resource-এর জন্য।
- P2 অপেক্ষা করছে P1-এর কাছে থাকা Resource-এর জন্য।
- কেউই কাজ শেষ করতে পারছে না।

  **এটাই Deadlock।**

### B. **চারটি Necessary Condition (Coffman Conditions)**

**Deadlock** সংঘটিত হওয়ার জন্য নিচের চারটি শর্ত **একই সঙ্গে** পূরণ হতে হবে।:

- ১. Mutual Exclusion
  একটি Resource একই সময়ে কেবল একটি Process ব্যবহার করতে পারবে।

উদাহরণ: একটি Printer একই সময়ে একটি Process ব্যবহার করছে। অন্য Process-কে অপেক্ষা করতে হবে।

- ২. Hold and Wait
  একটি Process তার কাছে থাকা Resource ধরে রেখে (Hold) অন্য Resource-এর জন্য অপেক্ষা করে (Wait)।

উদাহরণ: P1-এর কাছে R1 আছে, কিন্তু সে R2-এর জন্য অপেক্ষা করছে।

- ৩. No Preemption
  কোনো Process-এর কাছ থেকে জোরপূর্বক Resource কেড়ে নেওয়া যাবে না। Process নিজে কাজ শেষ করে Resource ছেড়ে দেবে।

উদাহরণ: P1-এর কাছ থেকে R1 জোর করে নিয়ে অন্য Process-কে দেওয়া যাবে না।

- ৪. Circular Wait
  দুই বা ততোধিক Process একটি বৃত্তাকার অপেক্ষার (Circular Chain) মধ্যে আটকে থাকে।

উদাহরণ:

- P1 → R2-এর জন্য অপেক্ষা করছে।
- P2 → R3-এর জন্য অপেক্ষা করছে।
- P3 → R1-এর জন্য অপেক্ষা করছে।
  এভাবে একটি Circular Chain তৈরি হয়।

**চারটি Condition মনে রাখার কৌশল:**

| #   | Condition            | মূল কথা                                       |
| --- | -------------------- | --------------------------------------------- |
| ১   | **Mutual Exclusion** | একসঙ্গে একজন                                  |
| ২   | **Hold and Wait**    | ধরে রেখে অপেক্ষা                              |
| ৩   | **No Preemption**    | জোর করে কেড়ে নেওয়া যাবে না                    |
| ৪   | **Circular Wait**    | P1 → P2 → … → Pn → P1 এভাবে বৃত্তাকার অপেক্ষা |

**মনে রাখবে:** চারটি Condition-এর যেকোনো একটি ভেঙে দিতে পারলে Deadlock প্রতিরোধ করা সম্ভব।

### C. Deadlock Prevention vs Avoidance

**Deadlock** মোকাবিলার দুটি গুরুত্বপূর্ণ পদ্ধতি হলো **Prevention** এবং **Avoidance**।

#### (i). Deadlock Prevention:

**Deadlock Prevention** হলো এমন একটি কৌশল, যেখানে Deadlock হওয়ার জন্য প্রয়োজনীয় চারটি Condition-এর অন্তত একটি শর্ত আগে থেকেই ভেঙে দেওয়া হয়। চারটির অন্তত একটি condition ভেঙে দেওয়া, যাতে Deadlock কখনো না হয়।

| ভাঙার condition  | কৌশল                                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Mutual Exclusion | Resource sharable করা (যেমন read-only file, spooling)                                                                                           |
| Hold and Wait    | শুরুতেই সব resource একসাথে চাওয়া/বরাদ্দ দেওয়া, অথবা নতুন চাওয়ার আগে সব ছেড়ে দেওয়া অথবা Resource না থাকলে নতুন Resource ধরে রাখা নিষিদ্ধ করা |
| No Preemption    | Resource না পেলে আগেরগুলো ছেড়ে দেওয়া, OS জোর করে নিতে পারা। প্রয়োজন হলে Resource ফিরিয়ে নেওয়ার ব্যবস্থা করা।                                  |
| Circular Wait    | Resource-এর নির্দিষ্ট ক্রম (Ordering) নির্ধারণ করা, process শুধু ক্রম অনুযায়ী চাইবে                                                            |

#### (ii). **Deadlock Avoidance:**

**Deadlock Avoidance:** হলো এমন একটি কৌশল, যেখানে OS কোনো Process-কে Resource দেওয়ার আগে পরীক্ষা করে যে Resource বরাদ্দ দিলে System **Safe State-**এ থাকবে কি না। যদি Safe State থাকে, তাহলে Resource দেওয়া হবে। অন্যথায় অপেক্ষা করানো হবে। উদাহরণ: **Banker's Algorithm** (প্রশ্ন ০২: Banker's Algorithm ব্যবহার করে Deadlock Avoidance করা হয়।)।

#### (iii). **Prevention vs Avoidance: পার্থক্য**

| বিষয়                | Prevention                              | Avoidance                                        |
| ------------------- | --------------------------------------- | ------------------------------------------------ |
| মূলনীতি             | Deadlock-এর শর্ত ভেঙে দেওয়া             | Deadlock এড়ানোর জন্য Safe State বজায় রাখা        |
| কাজের সময়           | আগে থেকেই ব্যবস্থা নেয়                  | ধResource দেওয়ার আগে পরীক্ষা করে                 |
| Resource Allocation | তুলনামূলকভাবে কঠোর                      | প্রয়োজন অনুযায়ী                                  |
| System Information  | সর্বোচ্চ Resource চাহিদা জানা আবশ্যক নয় | Process-এর সর্বোচ্চ Resource চাহিদা জানা প্রয়োজন |
| প্রধান পদ্ধতি       | চারটি Condition-এর একটি ভেঙে দেওয়া      | Safe State পরীক্ষা                               |
| Algorithm           | Resource Ordering                       | Banker's Algorithm                               |

#### (iii). **Safe State vs Unsafe State: পার্থক্য**

| Safe State                       | Unsafe State              |
| -------------------------------- | ------------------------- |
| অন্তত একটি Safe Sequence আছে     | কোনো Safe Sequence নেই    |
| Deadlock এড়ানোর নিশ্চয়তা থাকে    | Deadlock হওয়ার ঝুঁকি থাকে |
| নিরাপদ Resource Allocation সম্ভব | নিরাপত্তা নিশ্চিত নয়      |

**গুরুত্বপূর্ণ:** Unsafe State মানেই Deadlock নয়। Unsafe State থেকে Deadlock হতে পারে।

## ২. পরীক্ষায় যেভাবে লিখবেন

**MCQ:**

- Deadlock-এর জন্য ৪টি শর্তই একসাথে লাগে।
- Prevention = condition ভাঙা, Avoidance = Safe State মেনে চলা।
- Banker's Algorithm একটি Deadlock **Avoidance** algorithm।

**Written (৫ নম্বর):**

1. সংজ্ঞা লিখুন।
2. চারটি condition ছোট ব্যাখ্যাসহ লিখুন।
3. নিচের তুলনা table আঁকুন।
4. উপসংহার: "চারটির যেকোনো একটি ভেঙে দিলে Deadlock প্রতিরোধ করা যায়।"

## ৩. Prevention vs Avoidance

| বিষয়                | Deadlock Prevention                              | Deadlock Avoidance                                      |
| -------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| মূল ধারণা            | ৪টি condition-এর অন্তত ১টি গঠনগতভাবে ভেঙে দেওয়া | প্রতি request-এ Safe State যাচাই করে resource দেওয়া    |
| আগাম তথ্য            | লাগে না                                          | প্রতিটি process-এর সর্বোচ্চ চাহিদা (Max need) জানতে হয় |
| Resource utilization | কম                                               | তুলনামূলক ভালো                                          |
| Overhead             | নকশায় বাধা, runtime overhead কম                 | প্রতি request-এ হিসাব, তাই বেশি                         |
| Process-এর স্বাধীনতা | সীমিত                                            | বেশি                                                    |
| উদাহরণ               | Resource ordering, সব resource একসাথে চাওয়া     | Banker's Algorithm                                      |

> অন্য দুটি পদ্ধতি: **Detection and Recovery** (Deadlock হতে দিয়ে খুঁজে বের করে সারানো) এবং **Ignorance / Ostrich Algorithm** (উপেক্ষা করা, Windows/Linux সাধারণ ক্ষেত্রে এটাই করে)।

## ৪. মনে রাখার কৌশল

**M-H-N-C:** **M**utual, **H**old & wait, **N**o preemption, **C**ircular wait।

# ০২. Banker's Algorithm: Safe State ও Safe Sequence

## ১. বুঝে নিন

**Banker's Algorithm** (Dijkstra) হলো Deadlock Avoidance algorithm। ব্যাংক যেমন ঋণ দেওয়ার আগে নিশ্চিত হয় যে সবাইকে শেষ পর্যন্ত টাকা মেটানো যাবে, OS-ও তেমন resource দেওয়ার আগে নিশ্চিত হয় যে সব process শেষ করতে পারবে।

- **Safe State:** এমন অন্তত একটি ক্রম (**Safe Sequence**) আছে যে ক্রমে চললে প্রতিটি process তার প্রয়োজনীয় resource পেয়ে শেষ হতে পারে।
- **Unsafe State:** এমন কোনো ক্রম নেই। Unsafe মানেই Deadlock নয়, তবে Deadlock-এর **ঝুঁকি** আছে।
- সম্পর্ক: Deadlock হলে অবশ্যই Unsafe। কিন্তু Unsafe হলে Deadlock হতেও পারে, না-ও হতে পারে।

**ব্যবহৃত data structure** (n টি process, m ধরনের resource):

| নাম            | অর্থ                                      |
| -------------- | ----------------------------------------- |
| **Available**  | বর্তমানে ফাঁকা resource-এর সংখ্যা         |
| **Max**        | প্রতিটি process সর্বোচ্চ যত চাইতে পারে    |
| **Allocation** | এখন যার কাছে যত আছে                       |
| **Need**       | আরও যত লাগবে: **Need = Max − Allocation** |

**Safety Algorithm (ধাপ):**

1. **Work = Available** নিন, সব process-এর Finish = false।
2. এমন process Pi খুঁজুন যার Finish = false এবং **Need ≤ Work**।
3. পেলে: **Work = Work + Allocation(Pi)**, Finish(Pi) = true। ধাপ ২-এ ফিরুন।
4. এমন process না পেলে থামুন। সব Finish = true হলে **Safe**, নইলে **Unsafe**।

## ২. Solved Example

৫টি process (P0–P4), তিন ধরনের resource A, B, C (মোট A = 10, B = 5, C = 7)। **Available = (3, 3, 2)**

| Process | Allocation (A B C) | Max (A B C) | Need = Max − Allocation |
| ------- | ------------------ | ----------- | ----------------------- |
| P0      | 0 1 0              | 7 5 3       | 7 4 3                   |
| P1      | 2 0 0              | 3 2 2       | 1 2 2                   |
| P2      | 3 0 2              | 9 0 2       | 6 0 0                   |
| P3      | 2 1 1              | 2 2 2       | 0 1 1                   |
| P4      | 0 0 2              | 4 3 3       | 4 3 1                   |

(যাচাই: Allocation-এর যোগফল A = 7, B = 2, C = 5; সাথে Available যোগ করলে 10, 5, 7 হয়, তাই data সঙ্গতিপূর্ণ।)

**ধাপে ধাপে Safety Check** (P0 থেকে ক্রমানুসারে খোঁজা হয়েছে):

| ধাপ | Work (শুরুতে) | কোন process? | কেন?                  | Work (পরে)                  |
| --- | ------------- | ------------ | --------------------- | --------------------------- |
| ১   | 3 3 2         | P0? না       | Need 7 4 3 > Work     |                             |
|     |               | **P1**       | Need 1 2 2 ≤ 3 3 2 ✔  | 3 3 2 + 2 0 0 = **5 3 2**   |
| ২   | 5 3 2         | P2? না       | Need 6 0 0 > 5        |                             |
|     |               | **P3**       | Need 0 1 1 ≤ 5 3 2 ✔  | 5 3 2 + 2 1 1 = **7 4 3**   |
| ৩   | 7 4 3         | **P0**       | Need 7 4 3 ≤ 7 4 3 ✔  | 7 4 3 + 0 1 0 = **7 5 3**   |
| ৪   | 7 5 3         | **P2**       | Need 6 0 0 ≤ 7 5 3 ✔  | 7 5 3 + 3 0 2 = **10 5 5**  |
| ৫   | 10 5 5        | **P4**       | Need 4 3 1 ≤ 10 5 5 ✔ | 10 5 5 + 0 0 2 = **10 5 7** |

**ফল:** সব process শেষ হয়েছে, তাই system **Safe**। **Safe Sequence = ⟨P1, P3, P0, P2, P4⟩**। শেষে Work = (10, 5, 7), যা মোট resource-এর সমান। এটি সঠিক হওয়ার একটি ভালো যাচাই।

⚠️ **Safe Sequence একাধিক হতে পারে।** যেমন ⟨P1, P3, P4, P0, P2⟩-ও বৈধ (বহু বইয়ে এটিই লেখা থাকে)। যেকোনো বৈধ ক্রম লিখলেই হবে, তবে প্রতিটি ধাপ দেখাতে হবে।

**Resource-Request Algorithm (সংক্ষেপে):** ধরুন P1 চাইল (1, 0, 2)।

1. Request ≤ Need? (1 0 2 ≤ 1 2 2) ✔
2. Request ≤ Available? (1 0 2 ≤ 3 3 2) ✔
3. ধরে নিন দেওয়া হলো: Available = (2, 3, 0), Allocation(P1) = (3, 0, 2), Need(P1) = (0, 2, 0)।
4. আবার Safety Check চালালে Safe Sequence ⟨P1, P3, P0, P2, P4⟩ পাওয়া যায়, তাই request **মঞ্জুর**।

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:**

- Need = Max − Allocation।
- Safe Sequence একাধিক হতে পারে।
- Unsafe ≠ Deadlock, কিন্তু Deadlock ⊂ Unsafe।
- Banker's Algorithm-এ আগাম Max জানা দরকার।

**Written:** সংজ্ঞা → data structure → Need-এর table → ধাপে ধাপে Work আপডেট → Safe Sequence ঘোষণা → উপসংহার। Table আঁকলে পুরো নম্বর পাওয়া সহজ।

## ৪. মনে রাখার কৌশল

**"Need ≤ Work হলে দাও, কাজ শেষ হলে Allocation ফেরত নাও (Work-এ যোগ)।"**

# ০৩. Process vs Program; Process State Diagram

## ১. বুঝে নিন

- **Program:** disk-এ রাখা নির্দেশের সমষ্টি, অর্থাৎ **passive** entity (যেমন `chrome.exe` ফাইল)।
- **Process:** চলমান program, অর্থাৎ **active** entity। এর আছে Program Counter, registers, stack, heap ও data।

একই program থেকে একাধিক process চলতে পারে (যেমন Chrome-এর অনেক tab/window)।

| বিষয়                 | Program                     | Process                      |
| --------------------- | --------------------------- | ---------------------------- |
| প্রকৃতি               | Passive (নিষ্ক্রিয়)        | Active (সক্রিয়)             |
| অবস্থান               | Secondary storage (disk)    | Main memory (RAM)            |
| জীবনকাল               | দীর্ঘ, মুছে না ফেলা পর্যন্ত | সীমিত, শুরু থেকে শেষ পর্যন্ত |
| Resource              | কিছু লাগে না                | CPU, memory, I/O লাগে        |
| Program Counter / PCB | নেই                         | আছে                          |
| উদাহরণ                | `notepad.exe` ফাইল          | চালু থাকা Notepad            |

**Process-এর memory layout:** Text (code), Data (global variable), Heap (dynamic memory), Stack (function call, local variable)।

**PCB (Process Control Block):** প্রতিটি process-এর তথ্যের ভাণ্ডার: Process ID, State, Program Counter, CPU registers, Scheduling info, Memory info, I/O info।

## ২. Process State Diagram

```
                       +---- interrupt (time over) -----+
                       |                                |
                       v                                |
[NEW] --admitted--> [READY] ------ dispatch ------> [RUNNING] ----- exit -----> [TERMINATED]
                       ^                                |  I/O or event wait
                       |                                v
                       + I/O or event completion ---- [WAITING]
```

| Transition           | কখন হয়                                                         |
| -------------------- | --------------------------------------------------------------- |
| New → Ready          | Process তৈরি হয়ে OS তাকে গ্রহণ করল (**admitted**)              |
| Ready → Running      | Scheduler CPU দিল (**dispatch**)                                |
| Running → Ready      | Time quantum শেষ বা higher priority process এলে (**interrupt**) |
| Running → Waiting    | I/O বা কোনো event-এর জন্য অপেক্ষা                               |
| Waiting → Ready      | I/O বা event সম্পন্ন হলো                                        |
| Running → Terminated | Process শেষ হলো (**exit**)                                      |

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:**

- Process-এর ৫টি state: New, Ready, Running, Waiting, Terminated।
- Waiting থেকে সরাসরি Running-এ যাওয়া যায় না, আগে Ready-তে আসতে হয়।
- Program passive, Process active।

**Written (৫ নম্বর):** সংজ্ঞা → তুলনা table → diagram (সব transition-এ label) → PCB-এর ১ লাইন।

## ৪. মনে রাখার কৌশল

**"Program = রেসিপি, Process = রান্না করা।"**

# ০৪. Virtual Memory; Page Fault Sequence

## ১. বুঝে নিন

**Virtual Memory** এমন কৌশল, যেখানে একটি process-এর পুরোটা RAM-এ না থাকলেও চলতে পারে। শুধু দরকারি অংশ (pages) RAM-এ থাকে, বাকিটা disk-এ থাকে। ব্যবহারকারী মনে করে তার কাছে অনেক বড় memory আছে। এটি বাস্তবায়িত হয় **Demand Paging**-এর মাধ্যমে।

**সুবিধা:**

- RAM-এর চেয়ে বড় program চালানো যায়।
- একসাথে বেশি process চালানো যায় (বেশি **multiprogramming**)।
- প্রতিটি process আলাদা ও সুরক্ষিত থাকে।

**অসুবিধা:** Page fault বেশি হলে **Thrashing** হয় এবং system ধীর হয়ে যায়।

**Page Fault:** Process যে page ব্যবহার করতে চায় সেটি RAM-এ না থাকলে (page table-এ valid bit = 0) যে trap (interrupt) তৈরি হয়।

## ২. Page Fault Sequence (ধাপে ধাপে)

| ধাপ | ঘটনা                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| ১   | CPU একটি logical address তৈরি করে; MMU **page table** দেখে                                              |
| ২   | Page-এর **valid bit = 0** (invalid) পেলে OS-এ **page fault trap** যায়                                  |
| ৩   | OS যাচাই করে reference বৈধ কি না। অবৈধ (illegal) হলে process terminate; বৈধ কিন্তু RAM-এ নেই হলে এগোয়  |
| ৪   | একটি **free frame** খোঁজে। না পেলে **page replacement** (FIFO/LRU/Optimal) দিয়ে একটি victim page সরায় |
| ৫   | Disk থেকে প্রয়োজনীয় page ওই frame-এ **load** করা হয় (এই সময় CPU অন্য process পায়)                  |
| ৬   | **Page table update**: frame number বসে, valid bit = 1                                                  |
| ৭   | বাধাপ্রাপ্ত instruction **আবার শুরু** (restart) হয়                                                     |

**Effective Access Time (EAT)**, অতিরিক্ত জানার জন্য:

EAT = (1 − p) × ma + p × (page fault service time)

উদাহরণ: ma = 200 ns, page fault service time = 8 ms = 8,000,000 ns, p = 0.001 হলে
EAT = 0.999 × 200 + 0.001 × 8,000,000 = 199.8 + 8000 = **8199.8 ns ≈ 8.2 µs**।
Page fault-এর হার সামান্য হলেও গতি বহুগুণ কমে যায়।

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:** Virtual memory demand paging দিয়ে হয়। Page fault = page RAM-এ নেই। অতিরিক্ত page fault = Thrashing।

**Short note (৪–৫ লাইন):** সংজ্ঞা, কেন দরকার, সুবিধা, page fault-এর এক লাইন।

**Written:** সংজ্ঞা → সুবিধা-অসুবিধা → উপরের ৭ ধাপ (numbered) → Page Replacement-এর নাম → উপসংহার।

## ৪. মনে রাখার কৌশল

**"Trap → Check → Free frame → Load → Update → Restart"** (ছয় শব্দে পুরো sequence)।

# ০৫. Memory Management: 8 GB RAM, 24 GB Virtual Memory, 14 GB Demand

## ১. বুঝে নিন

- **Virtual Memory** = RAM + disk-এর **Swap space**। OS দরকারি pages RAM-এ রাখে, বাকিটা disk-এ।
- **RAM = 8 GB** (সত্যিকারের দ্রুত memory)
- **Virtual Memory = 24 GB** (মোট সীমা)
- **Demand = 14 GB** (processes-এর মোট প্রয়োজন)

## ২. হিসাব

| ধাপ                             | হিসাব         | ফল                      |
| ------------------------------- | ------------- | ----------------------- |
| Swap space কত?                  | 24 − 8        | **16 GB**               |
| Demand কি সীমার মধ্যে?          | 14 GB ≤ 24 GB | **হ্যাঁ, চলবে**         |
| সর্বোচ্চ কতটা RAM-এ থাকতে পারে? | min(14, 8)    | **8 GB**                |
| বাকিটা কোথায়?                  | 14 − 8        | **6 GB, Swap-এ (disk)** |
| Virtual memory-র ফাঁকা অংশ      | 24 − 14       | **10 GB**               |

**উত্তর:** Demand 14 GB হলেও virtual memory 24 GB, তাই সব process চলবে। কোনো মুহূর্তে সর্বোচ্চ 8 GB RAM-এ থাকবে, বাকি 6 GB disk-এ। দরকার হলে **Page Fault**-এর মাধ্যমে pages RAM ও disk-এর মধ্যে অদলবদল (swap in/out) হবে।

⚠️ **Assumption নোট:** প্রশ্নে "24 GB virtual memory" দুইভাবে পড়া যায়:

- **(ক)** 24 GB = RAM + Swap, তাই Swap = 16 GB (আমার ধরা)।
- **(খ)** 24 GB হলো virtual address space।

দুই ব্যাখ্যাতেই উত্তর একই: 8 GB RAM-এ, 6 GB disk-এ, আর 14 GB ≤ 24 GB বলে চলবে। শুধু Swap-এর আকার (16 GB) (ক)-তে নির্দিষ্ট। পরীক্ষায় assumption এক লাইনে লিখে দিন। বাস্তবে OS নিজেও কিছু RAM নেয়, তাই processes-এর জন্য 8 GB-এর পুরোটা পাওয়া যায় না। এটাও এক লাইনে উল্লেখ করতে পারেন।

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:**

- Virtual memory = RAM + Swap।
- Demand virtual memory-এর সীমার মধ্যে থাকলে program চলে, RAM-এর চেয়ে বেশি হলেও।
- Demand সীমার বেশি হলে "out of memory" হয়।

**Written (৫–৬ লাইন):**

1. Virtual memory-এর সংজ্ঞা: RAM ও disk-এর Swap space মিলিয়ে তৈরি।
2. হিসাব: Swap = 24 − 8 = 16 GB।
3. 14 GB ≤ 24 GB, তাই সব process চলবে।
4. 8 GB RAM-এ, 6 GB Swap-এ।
5. দরকার হলে **Demand Paging** ও **Page Replacement** (যেমন LRU/FIFO) দিয়ে pages অদলবদল হয়।
6. উপসংহার: Page fault বেশি হলে **Thrashing** হয় ও speed কমে যায়।

## ৪. মনে রাখার কৌশল

**"চলবে কি না দেখো Virtual-এ, দ্রুত চলবে কি না দেখো RAM-এ।"**

# ০৬. Preemptive vs Non-preemptive Priority Scheduling

## ১. বুঝে নিন

**Priority Scheduling:** প্রতিটি process-এর একটি priority থাকে। CPU পায় সবচেয়ে বেশি priority-র process। Priority সমান হলে **FCFS** নিয়ম।

> **Convention:** এখানে **ছোট সংখ্যা = বেশি priority** (1 সর্বোচ্চ)। কিছু বইয়ে উল্টো থাকে, তাই প্রশ্নে কী দেওয়া আছে দেখে নিন এবং উত্তরে এক লাইনে convention লিখে দিন।

- **Non-preemptive:** CPU একবার পেলে process নিজে শেষ না হওয়া বা block না হওয়া পর্যন্ত চলে। নতুন higher-priority process এলে শুধু ready queue-র সামনে বসে অপেক্ষা করে।
- **Preemptive:** নতুন process-এর priority চলমান process-এর চেয়ে বেশি হলে OS চলমান process-এর কাছ থেকে CPU কেড়ে নেয়।

| বিষয়                             | Non-preemptive                             | Preemptive                       |
| --------------------------------- | ------------------------------------------ | -------------------------------- |
| CPU কেড়ে নেওয়া যায়?            | না                                         | হ্যাঁ                            |
| সিদ্ধান্ত নেওয়ার সময়            | শুধু process শেষ বা block হলে              | নতুন process আসা বা time শেষ হলে |
| High-priority process-এর response | ধীর (অপেক্ষা করতে হয়)                     | দ্রুত                            |
| Context switch ও overhead         | কম                                         | বেশি                             |
| Starvation                        | সম্ভব                                      | সম্ভব                            |
| সমাধান                            | **Aging** (অপেক্ষার সাথে priority বাড়ানো) | **Aging**                        |

## ২. ছোট উদাহরণ

| Process | Arrival | Burst | Priority |
| ------- | ------- | ----- | -------- |
| P1      | 0       | 8     | 3        |
| P2      | 1       | 4     | 1        |
| P3      | 2       | 2     | 2        |

**Non-preemptive:**

```
|        P1        |    P2    |  P3  |
0                  8          12     14
```

P1 শুরু করেছে, তাই 8 পর্যন্ত চলবে। তারপর P2 (priority 1), শেষে P3।

| Process | Completion | Turnaround = CT − AT | Waiting = TAT − BT |
| ------- | ---------- | -------------------- | ------------------ |
| P1      | 8          | 8                    | 0                  |
| P2      | 12         | 11                   | 7                  |
| P3      | 14         | 12                   | 10                 |
| **গড়** |            | **10.33**            | **5.67**           |

**Preemptive:**

```
| P1 |    P2    |  P3  |       P1       |
0    1          5      7                14
```

Time 1-এ P2 (priority 1) এসে P1-কে থামিয়ে দিল। P2 শেষ হলে (5) ready-তে P1 ও P3; P3-এর priority বেশি তাই সে আগে। শেষে P1 বাকি 7 unit শেষ করে।

| Process | Completion | Turnaround | Waiting  |
| ------- | ---------- | ---------- | -------- |
| P1      | 14         | 14         | 6        |
| P2      | 5          | 4          | 0        |
| P3      | 7          | 5          | 3        |
| **গড়** |            | **7.67**   | **3.00** |

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:** Preemptive-এ CPU কেড়ে নেওয়া যায়। Priority scheduling-এর সমস্যা Starvation, সমাধান Aging।

**Written:** সংজ্ঞা → convention → তুলনা table → ছোট উদাহরণ ও Gantt (সম্ভব হলে) → Starvation ও Aging।

## ৪. মনে রাখার কৌশল

**Preemptive = "আমার চেয়ে বড় এলে আমাকে সরিয়ে দেবে"; Non-preemptive = "আমি শেষ না করা পর্যন্ত কেউ ছুঁতে পারবে না।"**

# ০৭. Short Notes (৭টি)

## (ক) Process vs Thread

**Thread** হলো process-এর ভেতরের সবচেয়ে ছোট execution unit (lightweight process)।

| বিষয়                | Process                   | Thread                                                   |
| -------------------- | ------------------------- | -------------------------------------------------------- |
| সংজ্ঞা               | চলমান program             | Process-এর ভেতরের execution unit                         |
| Memory               | আলাদা address space       | একই process-এর code, data, heap শেয়ার করে (stack আলাদা) |
| তৈরি / switch-এর খরচ | বেশি (heavyweight)        | কম (lightweight)                                         |
| যোগাযোগ              | IPC লাগে (pipe, message)  | সরাসরি shared memory দিয়ে সহজে                          |
| একটি ব্যর্থ হলে      | অন্য process-এ প্রভাব নেই | পুরো process-এ প্রভাব পড়তে পারে                         |

## (খ) Paging vs Segmentation

| বিষয়         | Paging                           | Segmentation                                             |
| ------------- | -------------------------------- | -------------------------------------------------------- |
| ভাগ           | **সমান মাপের** page (fixed size) | **অসমান মাপের** segment (logical অংশ: code, stack, data) |
| ভাগ করে       | OS / hardware                    | Programmer / compiler (logical view)                     |
| Fragmentation | **Internal** fragmentation       | **External** fragmentation                               |
| Table         | Page Table                       | Segment Table (base, limit)                              |
| Address       | page number + offset             | segment number + offset                                  |
| User view     | user-এর কাছে অদৃশ্য              | user-এর logical view-এর সাথে মেলে                        |

## (গ) Virtual vs Physical Memory

| বিষয়       | Virtual Memory                           | Physical Memory   |
| ----------- | ---------------------------------------- | ----------------- |
| ধারণা       | Logical, OS-এর তৈরি বড় memory           | আসল RAM hardware  |
| আকার        | RAM-এর চেয়ে বড় হতে পারে                | RAM-এর মাপে সীমিত |
| অবস্থান     | RAM + disk (Swap)                        | শুধু RAM          |
| Address     | Logical / virtual address                | Physical address  |
| Translation | MMU ও page table দিয়ে physical-এ অনুবাদ | সরাসরি            |
| গতি         | কম (disk লাগলে)                          | দ্রুত             |

## (ঘ) Deadlock vs Starvation

| বিষয়        | Deadlock                                      | Starvation                                      |
| ------------ | --------------------------------------------- | ----------------------------------------------- |
| অবস্থা       | একদল process পরস্পরের জন্য চিরকাল অপেক্ষা করে | কোনো process অনির্দিষ্টকাল resource/CPU পায় না |
| কারণ         | ৪টি condition একসাথে (M-H-N-C)                | Low priority-কে বারবার এড়িয়ে যাওয়া           |
| অন্য process | সংশ্লিষ্ট সব process আটকে যায়                | অন্যরা স্বাভাবিক চলে                            |
| সমাধান       | Prevention, Avoidance, Detection              | **Aging**                                       |

## (ঙ) Multiprogramming vs Multitasking

| বিষয়         | Multiprogramming          | Multitasking                                 |
| ------------- | ------------------------- | -------------------------------------------- |
| লক্ষ্য        | CPU যেন কখনো idle না থাকে | ব্যবহারকারীর কাছে সবকিছু একসাথে চলার অনুভূতি |
| Switch কখন    | কোনো job I/O-তে গেলে      | Time slice (time sharing) শেষ হলে            |
| Response time | বেশি                      | কম                                           |
| মূল ধারণা     | একাধিক job memory-তে      | CPU time ভাগ করা (**time sharing**)          |

## (চ) Context Switching

CPU এক process থেকে আরেক process-এ গেলে পুরনোটির অবস্থা **PCB**-তে সংরক্ষণ করে নতুনটির অবস্থা লোড করার কাজ।

**ধাপ:** চলমান process-এর state ও registers PCB-তে save → নতুন process-এর PCB থেকে load → CPU নতুন process চালু করে।

**মূল কথা:** এটি **overhead**, কারণ এই সময় কোনো ব্যবহারকারীর কাজ হয় না। Time quantum খুব ছোট হলে context switch বেড়ে CPU-র কার্যক্ষমতা কমে।

## (ছ) Kernel

**Kernel** হলো Operating System-এর কেন্দ্রীয় অংশ, যা hardware ও software-এর মধ্যে সেতু। এটি সবসময় memory-তে থাকে এবং **kernel mode**-এ চলে।

**কাজ:** Process management, Memory management, Device management (driver), File system management, System call, Security।

**ধরন:** Monolithic (Linux), Microkernel (Minix, QNX), Hybrid (Windows NT)।

**User mode vs Kernel mode:** সাধারণ program user mode-এ চলে। Hardware-এ সরাসরি অ্যাক্সেস লাগলে **system call**-এর মাধ্যমে kernel mode-এ যায়।

## পরীক্ষায় যেভাবে লিখবেন

**Short note (৩ নম্বর):** ১ লাইনে সংজ্ঞা + ৩–৪ পয়েন্ট। তুলনা (Differentiate) চাইলে সবসময় **table** দিন, কারণ এতে পুরো নম্বর পাওয়া সহজ। তুলনার table-এ কমপক্ষে ৪–৫ সারি রাখুন।

**মনে রাখার কৌশল:** Paging = **P**hysical ভাগ, সমান মাপ, **I**nternal fragmentation; Segmentation = **S**ize অসমান, **E**xternal fragmentation।

# ০৮. CPU Scheduling: FCFS, SJF ও Preemptive Priority (Gantt Chart সহ)

## ১. বুঝে নিন

⚠️ বইয়ের পাতায় process-এর Arrival/Burst/Priority data দেওয়া নেই। তাই একটি standard উদাহরণ দিয়ে **পদ্ধতি** দেখানো হলো। পরীক্ষায় যা data দেবে, ঠিক একই পদ্ধতিতে করবেন।

**সূত্র:**

- **Turnaround Time (TAT) = Completion Time (CT) − Arrival Time (AT)**
- **Waiting Time (WT) = TAT − Burst Time (BT)**
- গড় = সব process-এর যোগফল ÷ process সংখ্যা

| Algorithm    | নিয়ম                                                  | Preemptive?                                    |
| ------------ | ------------------------------------------------------ | ---------------------------------------------- |
| **FCFS**     | যে আগে এসেছে সে আগে CPU পায়                           | না                                             |
| **SJF**      | সবচেয়ে ছোট Burst Time আগে                             | Non-preemptive ধরা হলো (preemptive রূপ = SRTF) |
| **Priority** | সবচেয়ে বেশি priority আগে (ছোট সংখ্যা = বেশি priority) | এখানে **Preemptive**                           |

## ২. উদাহরণ ও সমাধান

| Process | Arrival (AT) | Burst (BT) | Priority |
| ------- | ------------ | ---------- | -------- |
| P1      | 0            | 5          | 2        |
| P2      | 1            | 3          | 1        |
| P3      | 2            | 8          | 4        |
| P4      | 3            | 6          | 3        |

### (ক) FCFS

```
|     P1     |   P2   |        P3        |      P4      |
0            5        8                  16             22
```

Arrival-এর ক্রম P1, P2, P3, P4।

| Process | CT  | TAT       | WT       |
| ------- | --- | --------- | -------- |
| P1      | 5   | 5         | 0        |
| P2      | 8   | 7         | 4        |
| P3      | 16  | 14        | 6        |
| P4      | 22  | 19        | 13       |
| **গড়** |     | **11.25** | **5.75** |

### (খ) SJF (Non-preemptive)

```
|     P1     |   P2   |      P4      |        P3        |
0            5        8              14                 22
```

Time 0-তে শুধু P1 আছে, তাই সে শুরু করে (5 পর্যন্ত)। 5-এ ready: P2 (3), P3 (8), P4 (6)। ছোট burst আগে: P2, তারপর P4, শেষে P3।

| Process | CT  | TAT       | WT       |
| ------- | --- | --------- | -------- |
| P1      | 5   | 5         | 0        |
| P2      | 8   | 7         | 4        |
| P3      | 22  | 20        | 12       |
| P4      | 14  | 11        | 5        |
| **গড়** |     | **10.75** | **5.25** |

### (গ) Preemptive Priority

```
| P1 |   P2   |    P1    |      P4      |        P3        |
0    1        4          8              14                 22
```

- Time 0: শুধু P1 (priority 2) চলে।
- Time 1: P2 (priority 1) এসে P1-কে থামায়। P2-র burst 3, তাই 4 পর্যন্ত চলে।
- Time 4: ready-তে P1 (বাকি 4, priority 2), P3 (4), P4 (3)। P1-এর priority বেশি, তাই P1 আবার 4–8 চলে।
- Time 8: P4 (priority 3) 8–14, শেষে P3 14–22।

| Process | CT  | TAT       | WT       |
| ------- | --- | --------- | -------- |
| P1      | 8   | 8         | 3        |
| P2      | 4   | 3         | 0        |
| P3      | 22  | 20        | 12       |
| P4      | 14  | 11        | 5        |
| **গড়** |     | **10.50** | **5.00** |

### তুলনা

| Algorithm           | গড় TAT | গড় WT |
| ------------------- | ------- | ------ |
| FCFS                | 11.25   | 5.75   |
| SJF                 | 10.75   | 5.25   |
| Preemptive Priority | 10.50   | 5.00   |

SJF সাধারণত সর্বনিম্ন গড় waiting time দেয়, তবে এই data-তে priority-র ক্রম SJF-এর কাছাকাছি হওয়ায় ফল সামান্য ভালো এসেছে। দীর্ঘ job-এর **starvation** SJF ও Priority দুটিতেই হতে পারে।

## ৩. পরীক্ষায় যেভাবে লিখবেন

1. প্রথমে Data table লিখুন (না দিলে প্রশ্নের data টুকে নিন)।
2. **Gantt Chart** আঁকুন: বক্সে process-এর নাম, নিচে সময়। সময়ের সংখ্যা বক্সের সীমানায় বসান।
3. CT, TAT, WT-এর table বানান, সূত্র একবার লিখে দিন।
4. গড় বের করুন (দশমিকের পর ২ ঘর)।
5. এক লাইনে মন্তব্য করুন (কোনটি ভালো)।

**MCQ ফাঁদ:**

- Preemptive priority-তে নতুন process এলে প্রতি মুহূর্তে সিদ্ধান্ত নিন।
- Arrival time-এর আগে CPU idle থাকলে Gantt-এ idle দেখান।
- Waiting time-এ Arrival time বাদ দিতে ভুলবেন না।

## ৪. মনে রাখার কৌশল

**"TAT = CT − AT, WT = TAT − BT"**: দুটি বিয়োগ। এটি সবসময় আগে লিখে রাখুন।

# ০৯. Logical ও Physical Address bit: 512 Pages, 128 Frames, 2 KB Page

## ১. বুঝে নিন

- **Logical address** = Page number + Offset
- **Physical address** = Frame number + Offset
- **Page size = Frame size**, তাই **Offset-এর bit দুই ক্ষেত্রেই সমান**।
- n টি আইটেমের জন্য প্রয়োজনীয় bit = log_2 n।

## ২. হিসাব

| ধাপ                      | হিসাব            | ফল         |
| ------------------------ | ---------------- | ---------- |
| Page number bit          | 512 = 2^9        | **9 bit**  |
| Offset bit               | 2 KB = 2^11 byte | **11 bit** |
| **Logical address bit**  | 9 + 11           | **20 bit** |
| Frame number bit         | 128 = 2^7        | **7 bit**  |
| **Physical address bit** | 7 + 11           | **18 bit** |

**যাচাই:**

- Logical address space = 512 × 2 KB = 1024 KB = **1 MB = 2^20 byte** ✔ (20 bit)
- Physical memory = 128 × 2 KB = 256 KB = **2^18 byte** ✔ (18 bit)

**Address format:**

```
Logical  (20 bit):  | Page No (9 bit)  | Offset (11 bit) |
Physical (18 bit):  | Frame No (7 bit) | Offset (11 bit) |
```

**উত্তর:** Logical address = **20 bit**, Physical address = **18 bit**। (Page table-এ 512টি entry থাকবে, প্রতিটিতে অন্তত 7 bit frame number।)

## ৩. পরীক্ষায় যেভাবে লিখবেন

**MCQ:** Offset সবসময় page size থেকে হয়। Physical address-এর page/frame অংশ frame সংখ্যা থেকে হয়।

**Written (৩–৪ নম্বর):** সূত্র লিখুন → প্রতিটি ধাপে power-of-2 দেখান → যোগ করে চূড়ান্ত bit → একটি যাচাই (total size) → format আঁকুন।

## ৪. মনে রাখার কৌশল

**"পেজ গুনলে Logical-এর মাথা, ফ্রেম গুনলে Physical-এর মাথা; লেজ (offset) সবসময় একই।"**

# ১০. Linux File Permissions ও chmod

## ১. বুঝে নিন

`ls -l` চালালে দেখা যায়:

```
-rwxr-xr--  1  user  group  1024  Nov 17  file.txt
```

| অংশ             | অর্থ                                         |
| --------------- | -------------------------------------------- |
| প্রথম অক্ষর     | ধরন: `-` = file, `d` = directory, `l` = link |
| পরের ৩টি (rwx)  | **User (u)** — মালিক                         |
| মাঝের ৩টি (r-x) | **Group (g)**                                |
| শেষ ৩টি (r--)   | **Others (o)** — বাকি সবাই                   |

**Permission-এর মান:** **r = 4, w = 2, x = 1**, `-` = 0।

| সংখ্যা | সংমিশ্রণ    | অর্থ               |
| ------ | ----------- | ------------------ |
| 7      | rwx (4+2+1) | পড়া, লেখা, চালানো |
| 6      | rw- (4+2)   | পড়া, লেখা         |
| 5      | r-x (4+1)   | পড়া, চালানো       |
| 4      | r--         | শুধু পড়া          |
| 0      | ---         | কিছুই না           |

**File ও Directory-তে অর্থ:**

| Permission | File             | Directory                 |
| ---------- | ---------------- | ------------------------- |
| r          | পড়া             | ভেতরের তালিকা দেখা (`ls`) |
| w          | বদলানো           | ফাইল তৈরি/মোছা            |
| x          | চালানো (execute) | ভেতরে ঢোকা (`cd`)         |

**chmod:** permission বদলানোর command।

**(ক) Numeric মোড**

| Command          | ফল        | ব্যবহার                                               |
| ---------------- | --------- | ----------------------------------------------------- |
| `chmod 755 file` | rwxr-xr-x | script/program (মালিক সব পারে, অন্যরা পড়তে ও চালাতে) |
| `chmod 644 file` | rw-r--r-- | সাধারণ file                                           |
| `chmod 600 file` | rw------- | ব্যক্তিগত file (শুধু মালিক)                           |
| `chmod 777 file` | rwxrwxrwx | সবার সব অনুমতি (ঝুঁকিপূর্ণ, এড়িয়ে চলুন)             |

**(খ) Symbolic মোড** (u, g, o, a = সবাই; `+` যোগ, `-` বাদ, `=` নির্দিষ্ট করা)

| Command                  | অর্থ                            |
| ------------------------ | ------------------------------- |
| `chmod u+x file`         | মালিককে execute দেওয়া          |
| `chmod go-w file`        | group ও others থেকে write সরানো |
| `chmod a+r file`         | সবাইকে read দেওয়া              |
| `chmod u=rwx,go=rx file` | = 755                           |

**সম্পর্কিত:** `chown user:group file` (মালিক বদলানো), `umask 022` (নতুন file-এ ডিফল্ট: file 666 − 022 = **644**, directory 777 − 022 = **755**)।

## ২. পরীক্ষায় যেভাবে লিখবেন

**MCQ:** r=4, w=2, x=1। `chmod 755` = rwxr-xr-x। প্রথম অক্ষর `d` মানে directory।

**Written:** সংজ্ঞা → ৩ শ্রেণি (u/g/o) → r/w/x ও মান → numeric ও symbolic উদাহরণ (কমপক্ষে ২টি করে) → একটি `ls -l` ব্যাখ্যা।

**কোড ব্যাখ্যা (প্রায়ই আসে):** `chmod 640 f` → মালিক rw (6), group r (4), others কিছুই না (0)।

## ৩. মনে রাখার কৌশল

**"৪-২-১ = পড়া-লেখা-চালানো"**; তিনটি অঙ্ক = মালিক-দল-বাকিরা।

# ১১. Linux Commands (student.txt, student_info.txt, CSE)

## ১. প্রশ্ন

Linux command লিখুন: (১) `student.txt` নামে একটি খালি file তৈরি, (২) নাম বদলে `student_info.txt`, (৩) `CSE` নামে directory তৈরি, (৪) `CSE` directory-তে ঢোকা।

## ২. উত্তর

| ধাপ | Command                           | কী করে            |
| --- | --------------------------------- | ----------------- |
| ১   | `touch student.txt`               | খালি file তৈরি    |
| ২   | `mv student.txt student_info.txt` | নাম বদল (rename)  |
| ৩   | `mkdir CSE`                       | directory তৈরি    |
| ৪   | `cd CSE`                          | directory-তে ঢোকা |

**এক লাইনে:**

```
touch student.txt && mv student.txt student_info.txt && mkdir CSE && cd CSE
```

**যাচাইয়ের জন্য (ঐচ্ছিক):** `ls` (তালিকা দেখা) এবং `pwd` (বর্তমান অবস্থান)।

**বিকল্প:** খালি file বানাতে `> student.txt` বা `cat /dev/null > student.txt`-ও চলে। তবে `touch` সবচেয়ে প্রচলিত ও নিরাপদ।

## ৩. পরীক্ষায় যেভাবে লিখবেন

প্রতিটি command আলাদা লাইনে লিখুন এবং পাশে এক লাইনে কাজ উল্লেখ করুন। Linux case-sensitive, তাই `CSE` বড় হাতের লিখুন।

**MCQ ফাঁদ:** Rename-এর জন্য আলাদা `rename` নয়, সাধারণত `mv`। `mkdir` = directory, `touch` = file।

## ৪. মনে রাখার কৌশল

**touch (ছুঁয়ে বানাও) → mv (সরাও/নাম বদলাও) → mkdir (ঘর বানাও) → cd (ঘরে ঢোকো)।**

# দ্রুত Revision ছক (পরীক্ষার আগের রাতের জন্য)

| প্রশ্ন | একনজরে মনে রাখুন                                                                     |
| ------ | ------------------------------------------------------------------------------------ |
| ০১     | Deadlock = M-H-N-C চারটি একসাথে; Prevention = ভাঙা, Avoidance = Safe State           |
| ০২     | Need = Max − Allocation; Work += Allocation; Safe Sequence একাধিক হতে পারে           |
| ০৩     | Process = active, Program = passive; ৫টি state; Waiting → Ready (সরাসরি Running নয়) |
| ০৪     | Virtual memory = demand paging; Page fault ৭ ধাপ; অতিরিক্ত fault = Thrashing         |
| ০৫     | Swap = 24 − 8 = 16 GB; 14 GB-এর 8 RAM-এ, 6 Swap-এ                                    |
| ০৬     | Preemptive = CPU কেড়ে নেয়; Starvation → Aging                                      |
| ০৭     | তুলনা মানেই table; Paging = internal, Segmentation = external fragmentation          |
| ০৮     | TAT = CT − AT; WT = TAT − BT; Gantt-এ সীমানায় সময়                                  |
| ০৯     | Logical = 9 + 11 = 20 bit; Physical = 7 + 11 = 18 bit                                |
| ১০     | r=4 w=2 x=1; 755, 644, 600; chmod u+x                                                |
| ১১     | touch → mv → mkdir → cd                                                              |
