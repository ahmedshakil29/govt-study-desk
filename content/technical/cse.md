# 💻 কম্পিউটার বিষয়ভিত্তিক

> সঠিক উত্তর **বোল্ড + ✅** চিহ্নিত। মতভেদের জায়গায় **নোট: ⚠️**

## প্রশ্ন ও সমাধান

---

### ১. Which operator is used for assignment in C/C++ programming language? [PSC-ame26]

- ক. ==
- **খ. =** ✅
- গ. !=
- ঘ. <=

**ব্যাখ্যা:** `=` হলো **assignment operator** (যেমন `x = 5;`)।  
`==` সমান কি না তুলনা করে; `!=` সমান নয় কি না দেখে; `<=` ছোট বা সমান কি না দেখে।

---

### ২. ChatGPT-এর তৈরিকারক প্রতিষ্ঠান কোনটি? [PSC-ame26]

- ক. Google
- খ. Microsoft
- **গ. Open AI** ✅
- ঘ. Meta

**ব্যাখ্যা:** ChatGPT তৈরি করেছে যুক্তরাষ্ট্রভিত্তিক AI গবেষণা প্রতিষ্ঠান **OpenAI** (প্রতিষ্ঠা ২০১৫); ChatGPT প্রথম জনসাধারণের জন্য উন্মুক্ত হয় **নভেম্বর ২০২২**-এ। Google-এর AI চ্যাটবট Gemini, Meta-র মডেল Llama, Microsoft-এর সহকারী Copilot।

---

### ৩. Which loop executes at least once? [PSC-ame26]

- ক. for
- খ. while
- **গ. do while** ✅
- ঘ. for each

**ব্যাখ্যা:** **do-while** হলো _exit-controlled loop_ — শর্ত পরীক্ষার **আগেই** লুপের বডি একবার চলে, তাই শর্ত মিথ্যা হলেও অন্তত একবার চলবেই। `for` ও `while` হলো _entry-controlled loop_ — শর্ত মিথ্যা হলে একবারও চলে না।

---

### ৪. Which keyword is used to define a function in Python programming language? [PSC-ame26]

- ক. function
- খ. define
- **গ. def** ✅
- ঘ. func

**ব্যাখ্যা:** Python-এ ফাংশন সংজ্ঞায়িত করতে **`def`** কিওয়ার্ড ব্যবহৃত হয়।  
উদাহরণ:

```python
def add(a, b):
    return a + b
```

---

### ৫. Which one is an example of strong authentication process? [PSC-ame26]

- ক. AES
- খ. RSA
- গ. Blockchain
- **ঘ. 2FA** ✅

**ব্যাখ্যা:** **2FA (Two-Factor Authentication)** — পাসওয়ার্ডের পাশাপাশি দ্বিতীয় একটি প্রমাণ (OTP, ফিঙ্গারপ্রিন্ট, অথেনটিকেটর অ্যাপ) দিতে হয়, ফলে নিরাপত্তা জোরদার হয়।  
AES ও RSA হলো **encryption** অ্যালগরিদম (authentication প্রক্রিয়া নয়); Blockchain হলো বিকেন্দ্রীকৃত ডিজিটাল লেজার প্রযুক্তি।

---

### ৬. Which shortcut key is used for creating a new folder in Windows OS? [PSC-ame26]

- ক. Ctrl+N
- **খ. Ctrl+Shift+N** ✅
- গ. Alt+N
- ঘ. Ctrl+Alt+N

**ব্যাখ্যা:** Windows File Explorer-এ নতুন ফোল্ডার তৈরির শর্টকাট **Ctrl + Shift + N**। (Ctrl+N সাধারণত নতুন Explorer উইন্ডো/ফাইল খোলে।)

---

### ৭. What is the time complexity of binary search? [PSC-ame26]

- ক. O(n)
- খ. O(n²)
- **গ. O(log n)** ✅
- ঘ. O(1)

**ব্যাখ্যা:** Binary search প্রতিধাপে সার্চ-পরিসর **অর্ধেক** করে ফেলে, তাই n সংখ্যক উপাদানে সর্বোচ্চ log₂ n ধাপ লাগে → **O(log n)**। (এর জন্য ডেটা অবশ্যই **sorted** হতে হয়।) Linear search-এর complexity O(n)।

---

### ৮. Which datatype stores whole numbers in C? [PSC-ame26]

- ক. float
- খ. double
- গ. char
- **ঘ. int** ✅

**ব্যাখ্যা:** C-তে পূর্ণসংখ্যা (whole number) সংরক্ষণের প্রধান ডেটা টাইপ **`int`**। `float` ও `double` দশমিকযুক্ত (বাস্তব) সংখ্যা রাখে; `char` মূলত একটি অক্ষর রাখে (যদিও অভ্যন্তরীণভাবে ছোট পূর্ণসংখ্যা কোড হিসেবে সংরক্ষিত হয়)।

---

### ৯. Which function is used by the for loop in Python? [PSC-ame26]

- ক. couple
- **খ. range** ✅
- গ. excuse
- ঘ. control

**ব্যাখ্যা:** Python-এর `for` লুপে নির্দিষ্টসংখ্যক বার ঘোরাতে **`range()`** ফাংশন ব্যবহৃত হয়।  
উদাহরণ: `for i in range(5):` → i = 0,1,2,3,4।

---

### ১০. Which one is an example of non-turing machine type of language? [PSC-ame26]

- ক. Python
- খ. Java
- **গ. SQL** ✅
- ঘ. C++

**ব্যাখ্যা:** Python, Java ও C++ হলো **general-purpose, Turing-complete** ভাষা — যেকোনো computable সমস্যা এতে সমাধান করা যায়। **SQL** মূলত একটি **declarative query language** (ডেটাবেজ থেকে ডেটা চাওয়ার ভাষা), যা প্রচলিত অর্থে Turing-complete নয় — তাই পরীক্ষার উত্তর SQL।  
📌 সূক্ষ্ম নোট: SQL:1999 থেকে recursive query (CTE) যুক্ত হওয়ায় আধুনিক SQL তাত্ত্বিকভাবে Turing-complete হতে পারে; কিন্তু MCQ-তে ঐতিহ্যগতভাবে SQL-ই উত্তর ধরা হয়।

---

### ১১. If a machine learning model shows 56% and 48% training and test accuracies respectively, it has: [PSC-ame26]

- ক. Low bias and low variance
- খ. High bias and high variance
- গ. Low bias and high variance
- **ঘ. High bias and low variance** ✅

**ব্যাখ্যা:** ⚠️ ছবির উত্তরমালায় "ক" লেখা আছে, কিন্তু সেটি **ভুল**। সঠিক উত্তর **ঘ**।

- **Training accuracy মাত্র 56%** → মডেল প্রশিক্ষণ ডেটাই ভালো শেখেনি → **High bias** (underfitting)।
- **Training (56%) ও test (48%) accuracy-র পার্থক্য খুব কম (৮ শতাংশ পয়েন্ট)** → মডেল নতুন ডেটায় প্রায় একইরকম আচরণ করছে → **Low variance**।
- Low bias হতে হলে training accuracy উচ্চ হতে হতো। High variance (overfitting)-এ training accuracy অনেক বেশি আর test accuracy অনেক কম হয়।

---

### ১২. What is the binary equivalent for decimal 10? [PSC-ame26]

- ক. 1000
- **খ. 1010** ✅
- গ. 1100
- ঘ. 1110

**ব্যাখ্যা:** 10 = 8 + 2 = (1×2³) + (0×2²) + (1×2¹) + (0×2⁰) = **1010**।  
(পদ্ধতি: ২ দিয়ে ভাগ → 10÷2=5 (০), 5÷2=2 (১), 2÷2=1 (০), 1÷2=0 (১); ভাগশেষ নিচ থেকে উপরে পড়লে 1010।)

---

### ১৩. Which one is a valid variable name in C? [PSC-ame26]

- ক. 2value
- খ. int
- গ. total-marks
- ঘ. First-name

⚠️ **এই প্রশ্নের কোনো সঠিক অপশন নেই** (ছবিতে উত্তরও দেওয়া নেই — সম্ভবত প্রশ্নটি ত্রুটিপূর্ণ)।

**ব্যাখ্যা:** C-তে ভ্যারিয়েবল নামের নিয়ম: শুধু **অক্ষর, অঙ্ক ও আন্ডারস্কোর (\_)** ব্যবহার করা যায়; **অঙ্ক দিয়ে শুরু করা যায় না**; **কিওয়ার্ড** ব্যবহার করা যায় না; **হাইফেন (-) বা স্পেস** চলে না।

- ক. `2value` ✗ — অঙ্ক দিয়ে শুরু
- খ. `int` ✗ — এটি কিওয়ার্ড
- গ. `total-marks` ✗ — হাইফেন আছে (`-` মাইনাস অপারেটর হিসেবে গণ্য হয়)
- ঘ. `First-name` ✗ — হাইফেন আছে

বৈধ হতো: `total_marks`, `First_name`। সম্ভবত মূল প্রশ্নে আন্ডারস্কোর ছিল (তাহলে গ ও ঘ দুটোই বৈধ হতো) — তাই প্রশ্নটি ত্রুটিপূর্ণ; পরীক্ষায় এমন প্রশ্ন সাধারণত বাতিল/বোনাস ধরা হয়।

---

### ১৪. Which one is an example of ensemble machine learning model? [PSC-ame26]

- **ক. Ada Boost** ✅
- খ. SVM
- গ. Linear Regression
- ঘ. Logistic Regression

**ব্যাখ্যা:** **Ensemble learning** — একাধিক দুর্বল মডেল একত্র করে একটি শক্তিশালী মডেল তৈরি করা। **AdaBoost** হলো _boosting_ ধরনের ensemble। অন্য উদাহরণ: Random Forest (bagging), Gradient Boosting, XGBoost।  
SVM, Linear Regression, Logistic Regression — এগুলো এককভাবে ব্যবহৃত (single) মডেল।

---

### ১৫. Which one is an example of primary memory? [PSC-ame26]

- ক. HDD
- খ. SSD
- **গ. RAM** ✅
- ঘ. DVD

**ব্যাখ্যা:** যে মেমোরি CPU সরাসরি অ্যাক্সেস করতে পারে তা **primary memory** — যেমন **RAM, ROM, Cache**। HDD, SSD, DVD হলো **secondary (সহায়ক) memory**।

---

### ১৬. What is the value of 5%2 in C? [PSC-ame26]

- ক. 0
- **খ. 1** ✅
- গ. 2
- ঘ. 2.5

**ব্যাখ্যা:** `%` হলো **modulus operator** — ভাগশেষ দেয়। 5 ÷ 2 = ভাগফল 2, **ভাগশেষ 1** → `5 % 2 = 1`। (পূর্ণসংখ্যা ভাগ `5/2` করলে C-তে ফল 2 আসে, 2.5 নয়।)

---

### ১৭. Which server is used to assign IP address dynamically while connecting to the internet? [PSC-ame26]

- ক. DNS
- খ. Proxy
- **গ. DHCP** ✅
- ঘ. All of the above

**ব্যাখ্যা:** **DHCP (Dynamic Host Configuration Protocol)** সার্ভার নেটওয়ার্কে যুক্ত ডিভাইসকে স্বয়ংক্রিয়ভাবে IP address (সাথে subnet mask, gateway, DNS) বরাদ্দ করে।  
DNS ডোমেইন নামকে IP-তে রূপান্তর করে; Proxy server ক্লায়েন্ট ও ইন্টারনেটের মাঝে মধ্যস্থতাকারী।

---

### ১৮. What type of memory is RAM? [PSC-ame26]

- ক. Permanent
- খ. External
- **গ. Volatile** ✅
- ঘ. Optical

**ব্যাখ্যা:** RAM (Random Access Memory) **volatile** — বিদ্যুৎ চলে গেলে বা কম্পিউটার বন্ধ হলে এর ডেটা মুছে যায়। (Non-volatile: ROM, HDD, SSD।)

---

### ১৯. Which searching algorithm requires sorted data? [PSC-ame26]

- ক. Linear
- **খ. Binary** ✅
- গ. Sequential
- ঘ. Hash

**ব্যাখ্যা:** **Binary search** মাঝের উপাদানের সাথে তুলনা করে অর্ধেক পরিসর বাদ দেয়, তাই ডেটা অবশ্যই **sorted** থাকতে হবে। Linear (sequential) search sorted ছাড়াও কাজ করে; Hash-এ hash table ব্যবহার হয়।

---

### ২০. Which one is an example of non-functional properties of a software system? [PSC-ame26]

- ক. Coding
- খ. Debug
- **গ. Security** ✅
- ঘ. Prototype

**ব্যাখ্যা:** **Functional requirement** বলে সিস্টেম _কী কাজ করবে_; **Non-functional property** বলে সিস্টেম _কেমনভাবে_ কাজ করবে — যেমন **Security, Performance, Reliability, Usability, Scalability, Maintainability**। Coding, Debug, Prototype — এগুলো সফটওয়্যার ডেভেলপমেন্টের কার্যক্রম, system property নয়।

---

### ২১. Which one is the example of open-source operating system? [PSC-ame26]

- ক. Windows 11
- খ. Mozilla Firefox
- গ. iOS
- **ঘ. Linux** ✅

**ব্যাখ্যা:** **Linux** (লিনাস টোরভাল্ডস, ১৯৯১) একটি ওপেন-সোর্স অপারেটিং সিস্টেম কার্নেল/OS (GPL লাইসেন্স)। Windows 11 ও iOS মালিকানাধীন (proprietary)। Mozilla Firefox ওপেন-সোর্স হলেও এটি **ব্রাউজার**, অপারেটিং সিস্টেম নয়।

---

### ২২. A Stack is called- [PSC-ame26]

- **ক. Last In First Out** ✅
- খ. First In Last Out
- গ. Last In Last Out
- ঘ. First In First Out

**ব্যাখ্যা:** Stack হলো **LIFO (Last In First Out)** ডেটা স্ট্রাকচার — সবশেষে ঢোকানো উপাদানটি সবার আগে বের হয়। অপারেশন: `push` (ঢোকানো), `pop` (বের করা)। **FIFO** (First In First Out) হলো Queue-এর নীতি।

---

### ২৩. Which one of the following is the full form of URL? [PSC-ame26]

- **ক. Uniform Resource Locator** ✅
- খ. Uniform Resource Link
- গ. Uniform Reference Link
- ঘ. Uniform Record Locator

**ব্যাখ্যা:** **URL = Uniform Resource Locator** — ইন্টারনেটে কোনো রিসোর্স (ওয়েবপেজ, ছবি, ফাইল)-এর ঠিকানা। যেমন: `https://example.com/index.html`।

---

### ২৪. Which one is an example of deep-learning model? [PSC-ame26]

- ক. SVM
- খ. Naive Bayes
- গ. Linear Regression
- **ঘ. CNN** ✅

**ব্যাখ্যা:** **CNN (Convolutional Neural Network)** একটি **deep learning** মডেল, যা বিশেষত ছবি শনাক্তকরণে ব্যবহৃত হয়। SVM, Naive Bayes ও Linear Regression হলো প্রচলিত (classical) machine learning মডেল।

---

### ২৫. Which protocol is primarily used to browse websites? [PSC-ame26]

- ক. FTP
- **খ. HTTP** ✅
- গ. SMTP
- ঘ. POP3

**ব্যাখ্যা:** ওয়েবসাইট ব্রাউজ করতে **HTTP (HyperText Transfer Protocol)** ব্যবহৃত হয় (নিরাপদ সংস্করণ HTTPS)।  
FTP → ফাইল ট্রান্সফার; SMTP → ইমেইল পাঠানো; POP3 → ইমেইল গ্রহণ।

---

### ২৬. Which is a relational database management system (RDBMS)? [PSC-ame26]

- **ক. MySQL** ✅
- খ. Python
- গ. Java
- ঘ. Linux

**ব্যাখ্যা:** **MySQL** একটি জনপ্রিয় RDBMS (টেবিল-ভিত্তিক ডেটাবেজ, SQL ব্যবহার করে)। অন্য RDBMS: Oracle, PostgreSQL, SQL Server। Python ও Java প্রোগ্রামিং ভাষা; Linux অপারেটিং সিস্টেম।

---

### ২৭. Which one is not a hyperparameter of linear regression? [PSC-ame26]

- ক. Learning rate
- খ. Alpha (α)
- **গ. Number of neighbors** ✅
- ঘ. L1/L2 regularization

**ব্যাখ্যা:** **Number of neighbors (k)** হলো **K-Nearest Neighbors (KNN)** অ্যালগরিদমের hyperparameter, linear regression-এর নয়।  
Linear regression-এর hyperparameter: **Learning rate** (gradient descent-এ), **Alpha (α)** (regularization strength — Ridge/Lasso-তে), **L1/L2 regularization** (Lasso/Ridge)।

---

### ২৮. What is the use of BCNF? [PSC-ame26]

- **ক. Database normalization** ✅
- খ. Fine tuning of software quality
- গ. Indexing mechanism
- ঘ. Hashing

**ব্যাখ্যা:** **BCNF (Boyce–Codd Normal Form)** হলো ডেটাবেজ **normalization**-এর একটি ধাপ, যা 3NF-এর চেয়ে কঠোর। এর মাধ্যমে ডেটার পুনরাবৃত্তি (redundancy) ও anomaly কমানো হয়। (সংজ্ঞা: প্রতিটি functional dependency X → Y-এ X অবশ্যই superkey হতে হবে।)

---

### ২৯. Which one is an unsupervised learning model? [PSC-ame26]

- ক. SVM
- খ. KNN
- গ. Linear Regression
- **ঘ. K-means clustering** ✅

**ব্যাখ্যা:** **Unsupervised learning**-এ ডেটার কোনো লেবেল থাকে না; মডেল নিজেই প্যাটার্ন/গ্রুপ খুঁজে বের করে। **K-means clustering** তার উদাহরণ। SVM, KNN, Linear Regression — এগুলো **supervised learning** (লেবেলযুক্ত ডেটা লাগে)।

---

### ৩০. Which one is a dummy classifier? [PSC-ame26]

- ক. Linear Regression
- খ. KNN
- গ. SVM
- **ঘ. Zero-R** ✅

**ব্যাখ্যা:** **Zero-R (ZeroR)** একটি সবচেয়ে সরল baseline/dummy classifier — কোনো ফিচার না দেখে সবসময় প্রশিক্ষণ ডেটার **সর্বাধিক প্রচলিত শ্রেণি (majority class)** ভবিষ্যদ্বাণী করে। অন্য মডেলের কার্যকারিতা তুলনা করার ভিত্তি (benchmark) হিসেবে ব্যবহৃত হয়।

---

### ৩১. Which symbol is used to end a statement in C/C++? [PSC-ame26]

- ক. :
- **খ. ;** ✅
- গ. ,
- ঘ. .

**ব্যাখ্যা:** C/C++-এ প্রতিটি statement শেষ হয় **semicolon (;)** দিয়ে। যেমন: `int a = 5;`।

---

### ৩২. Which data structure follows the FIFO principle? [PSC-ame26]

- ক. Stack
- **খ. Queue** ✅
- গ. Tree
- ঘ. Graph

**ব্যাখ্যা:** **Queue** হলো **FIFO (First In First Out)** — যে আগে ঢোকে সে আগে বের হয় (যেমন লাইনে দাঁড়ানো)। অপারেশন: `enqueue`, `dequeue`। Stack হলো LIFO।

---

### ৩৩. Which one is an example of a palindrome? [PSC-ame26]

- ক. Argentina
- খ. Brazil
- **গ. 1234321** ✅
- ঘ. 1024

**ব্যাখ্যা:** **Palindrome** হলো এমন শব্দ/সংখ্যা যা সামনে থেকে ও পেছন থেকে একইভাবে পড়া যায়। **1234321** উল্টালেও 1234321 — তাই palindrome। Argentina, Brazil, 1024 উল্টালে ভিন্ন হয়ে যায়।

---
