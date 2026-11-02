# ৪৯তম BCS প্রিলিমিনারি টেস্ট (CSE) — MCQ সমাধান

**সূত্র:** Debug IT Job Solution (MCQ, Page 30–32) | **মোট প্রশ্ন:** ৫৪টি

> প্রতিটি প্রশ্নের উত্তর নিজে যাচাই করা হয়েছে। গণনার প্রশ্নগুলো ধাপে ধাপে হিসাব করে মেলানো হয়েছে। এই PDF-এ GK, ইতিহাস বা current affairs-এর প্রশ্ন নেই; সব প্রশ্নই CSE-র টেকনিক্যাল বিষয়ের, তাই উত্তর যাচাই হয়েছে সূত্র ও যুক্তি দিয়ে।

## ❌ PDF-এর ভুল ও ত্রুটির তালিকা

| প্রশ্ন নং | ধরন | PDF-এর উত্তর | সঠিক উত্তর | কারণ (সংক্ষেপে) |
|---|---|---|---|---|
| ১৩ | উত্তর ভুল | খ) 16 | **ক) 8** | Intel 8085 একটি **8-bit** মাইক্রোপ্রসেসর। 16 হলো এর address bus-এর প্রস্থ |
| ৩৭ | উত্তর ভুল | গ) O(n²) | **ঘ) O(n log n)** | বাইরের লুপ i = i*2 হওয়ায় চলে log n বার, ভেতরের লুপ n বার। মোট n log n |
| ১৫ | প্রশ্নে ত্রুটি | খ) 2 | খ) 2 (শর্তসাপেক্ষে) | Bipartite graph-এর chromatic **index** = সর্বোচ্চ ডিগ্রি Δ, সবসময় 2 নয়। প্রশ্নকর্তা সম্ভবত chromatic **number** বুঝিয়েছেন |
| ৩১ | ছাপার ত্রুটি | ক) queue | ক) queue | খ ও ঘ দুটো অপশনেই "stack" লেখা। উত্তর অপরিবর্তিত |

**⚠️ নোট দেওয়া প্রশ্ন (মতভেদ বা দ্ব্যর্থকতা আছে):** ২, ৩, ১৫, ২১, ২৬, ৩০, ৩১, ৩৯, ৪৩, ৪৪, ৫৩

---

### ১. A router processes packets @1 Gbps; if 10 packets (1200 bytes each) arrive at once, queuing delay for the 10th packets (in µs) is:

- ক. 96
- **খ. 86.4** ✅
- গ. 115.2
- ঘ. 120

**ব্যাখ্যা:** Queuing delay হলো একটি প্যাকেট নিজের ট্রান্সমিশন শুরুর আগে সারিতে যতক্ষণ অপেক্ষা করে। দশম প্যাকেটের সামনে ৯টি প্যাকেট আছে, তাই তাকে ৯টি প্যাকেটের transmission time অপেক্ষা করতে হবে। নিজের transmission time queuing delay-এর অংশ নয়।

**সমাধান:**
- প্যাকেটের আকার L = 1200 bytes = 1200 × 8 = 9600 bits
- Link rate R = 1 Gbps = 10⁹ bps
- একটি প্যাকেটের transmission time = L/R = 9600 / 10⁹ = 9.6 × 10⁻⁶ s = **9.6 µs**
- দশম প্যাকেটের আগে প্যাকেট = ৯টি
- Queuing delay = 9 × 9.6 = **86.4 µs**

**ভুল অপশন:**
- ক) 96 = 10 × 9.6। এতে দশম প্যাকেটের নিজের transmission time-ও ধরা হয়েছে (এটি queuing + transmission, শুধু queuing নয়)।
- গ) 115.2 = 12 × 9.6 এবং ঘ) 120 = 12.5 × 9.6। কোনো যুক্তিসংগত গণনায় এগুলো আসে না।

---

### ২. OSI model — which layer establishes, manages & terminates logical connections?

- ক. Transport
- খ. Network
- **গ. Session** ✅
- ঘ. Data link

**ব্যাখ্যা:** OSI মডেলের ৫ম স্তর Session layer দুই প্রান্তের অ্যাপ্লিকেশনের মধ্যে সেশন (dialog) চালু করে, পরিচালনা করে এবং শেষ করে। এছাড়া এটি dialog control (half/full duplex) ও synchronization (checkpoint) সামলায়। উদাহরণ: NetBIOS, RPC।

⚠️ **নোট:** Transport layer (TCP)-ও connection establish ও terminate করে, তাই কেউ কেউ দ্বিধায় পড়েন। তবে "establishes, manages and terminates logical connections (sessions)" বাক্যটি পাঠ্যবইয়ে Session layer-এর সংজ্ঞা হিসেবেই আসে। প্রশ্নে "end-to-end" বা "reliable delivery" থাকলে উত্তর হতো Transport।

**ভুল অপশন:**
- ক) Transport: end-to-end ডেটা ডেলিভারি, segmentation, flow ও error control, port addressing।
- খ) Network: logical addressing (IP) ও routing।
- ঘ) Data link: frame তৈরি, MAC addressing, হপ-টু-হপ ডেলিভারি।

---

### ৩. OSI model Data Link Layer's primary function:

- ক. Packet routing
- **খ. Error detection & correction** ✅
- গ. End-to-end communication
- ঘ. Data encryption

**ব্যাখ্যা:** Data Link layer (স্তর ২) framing, physical (MAC) addressing, flow control, access control এবং error control করে। দেওয়া অপশনগুলোর মধ্যে error detection ও correction-ই এই স্তরের কাজ।

⚠️ **নোট:** প্রকৃত "primary function" হলো node-to-node frame delivery। আর এই স্তরে সাধারণত error **detection** (CRC) হয়, correction হয় retransmission (ARQ) বা FEC দিয়ে, যা সব প্রোটোকলে থাকে না। তবু অপশনগুলোর মধ্যে খ-ই সবচেয়ে গ্রহণযোগ্য।

**ভুল অপশন:**
- ক) Packet routing: Network layer (স্তর ৩)-এর কাজ।
- গ) End-to-end communication: Transport layer (স্তর ৪)-এর কাজ।
- ঘ) Data encryption: Presentation layer (স্তর ৬)-এর কাজ।

---

### ৪. Hyper-threading

- ক. Creates multiple physical cores
- **খ. Allows a single physical core to execute multiple threads** ✅
- গ. Reduces cache size
- ঘ. Only applied to GPU

**ব্যাখ্যা:** Hyper-Threading হলো Intel-এর SMT (Simultaneous Multithreading) প্রযুক্তি। এতে একটি physical core অপারেটিং সিস্টেমের কাছে দুটি logical processor হিসেবে দেখা দেয় এবং core-এর অব্যবহৃত execution resource কাজে লাগিয়ে একই সময়ে একাধিক thread চালায়।

**ঘটনাক্রম:** Intel ২০০২ সালে Xeon ও Pentium 4 প্রসেসরে এটি প্রথম আনে।

**ভুল অপশন:**
- ক) এটি নতুন physical core তৈরি করে না, শুধু logical core দেখায়।
- গ) Cache-এর আকার কমায় না।
- ঘ) এটি CPU-র প্রযুক্তি, GPU-র নয়।

---

### ৫. The minimum number of NAND gates required to implement an OR gate is:

- ক. 1
- খ. 2
- **গ. 3** ✅
- ঘ. 4

**ব্যাখ্যা:** NAND একটি universal gate। De Morgan's law অনুযায়ী A + B = ((A')·(B'))' = NAND(A', B')।
- A' পেতে: NAND(A, A) → ১টি gate
- B' পেতে: NAND(B, B) → ১টি gate
- NAND(A', B') = A + B → ১টি gate
- মোট **৩টি** NAND gate।

**ভুল অপশন:**
- ক) ও খ) ১ বা ২টি gate দিয়ে OR তৈরি সম্ভব নয়, কারণ দুই ইনপুটকেই আগে invert করতে হয়।
- ঘ) ৪টি gate লাগে XOR বানাতে, OR-এর জন্য নয়।

---

### ৬. A half-adder circuit has

- ক. 1 input, 2 outputs
- **খ. 2 inputs, 2 outputs** ✅
- গ. 2 inputs, 1 output
- ঘ. 3 inputs, 2 outputs

**ব্যাখ্যা:** Half adder দুটি এক-বিট (A, B) যোগ করে। এর ইনপুট ২টি এবং আউটপুট ২টি: Sum = A ⊕ B এবং Carry = A · B।

**ভুল অপশন:**
- ঘ) 3 inputs, 2 outputs হলো **full adder** (A, B ও Carry-in ইনপুট; Sum ও Carry-out আউটপুট)।
- ক) ও গ) যোগের জন্য দুটি ইনপুট লাগে এবং Sum ও Carry দুটি আলাদা আউটপুট দরকার।

---

### ৭. Reduces redundancy and improves integrity

- ক. Indexing
- **খ. Normalization** ✅
- গ. Denormalization
- ঘ. Partitioning

**ব্যাখ্যা:** Normalization হলো ডেটাবেসের টেবিলকে ভেঙে (1NF, 2NF, 3NF, BCNF) data redundancy কমানো এবং insertion, update ও deletion anomaly দূর করে data integrity বাড়ানোর পদ্ধতি।

**ভুল অপশন:**
- ক) Indexing: query-র গতি বাড়ায়।
- গ) Denormalization: পারফরম্যান্সের জন্য ইচ্ছা করে redundancy বাড়ায়, অর্থাৎ উল্টো কাজ।
- ঘ) Partitioning: বড় টেবিলকে ছোট অংশে ভাগ করে ব্যবস্থাপনা ও গতির জন্য।

---

### ৮. Which command is used to save all transactions?

- ক. save point
- **খ. commit** ✅
- গ. save
- ঘ. rollback

**ব্যাখ্যা:** `COMMIT` চলমান transaction-এর সব পরিবর্তন ডেটাবেসে স্থায়ীভাবে সংরক্ষণ করে।

**ভুল অপশন:**
- ক) `SAVEPOINT` transaction-এর ভেতরে একটি অস্থায়ী চিহ্ন দেয়, যাতে ওই পর্যন্ত rollback করা যায়। সব পরিবর্তন সংরক্ষণ করে না।
- গ) `SAVE` নামে কোনো standard SQL transaction command নেই।
- ঘ) `ROLLBACK` পরিবর্তন বাতিল করে, সংরক্ষণ করে না।

---

### ৯. The bisection method is used to

- ক. Find the eigenvalue of a matrix
- খ. Solve a system of linear equations
- **গ. Find roots of non-linear equations** ✅
- ঘ. Perform numerical integration

**ব্যাখ্যা:** Bisection method Intermediate Value Theorem-এর উপর নির্ভরশীল। যদি f(a)·f(b) < 0 হয়, তবে [a, b]-তে অন্তত একটি মূল আছে। প্রতিবার বিস্তার অর্ধেক করে (c = (a+b)/2) মূল-যুক্ত অংশ রাখা হয়। এটি ধীর কিন্তু নিশ্চিতভাবে অভিসারী (convergent) পদ্ধতি।

**ভুল অপশন:**
- ক) Eigenvalue-র জন্য Power method বা QR algorithm।
- খ) রৈখিক সমীকরণ জোটের জন্য Gauss elimination, Jacobi, Gauss-Seidel।
- ঘ) Numerical integration-এর জন্য Trapezoidal ও Simpson's rule।

---

### ১০. In machine learning, supervised learning means

- ক. Training with unlabeled data
- খ. no training is required
- **গ. Training with labeled data** ✅
- ঘ. Only reinforcement signals

**ব্যাখ্যা:** Supervised learning-এ প্রতিটি ইনপুটের সাথে সঠিক আউটপুট (label) দেওয়া থাকে। মডেল এই (input, label) জোড়া থেকে শেখে। উদাহরণ: classification ও regression।

**ভুল অপশন:**
- ক) Unlabeled data দিয়ে training হলো unsupervised learning (যেমন clustering)।
- খ) Training ছাড়া কোনো ML মডেল শেখে না।
- ঘ) শুধু reward বা penalty সংকেতে শেখা হলো reinforcement learning।

---

### ১১. What does the 'continue' statement do inside a loop?

- ক. Exits loop
- খ. Terminates program
- গ. Re-executes loop twice
- **ঘ. Skips rest of current iteration** ✅

**ব্যাখ্যা:** `continue` লুপের বর্তমান iteration-এর বাকি অংশ বাদ দিয়ে সরাসরি পরবর্তী iteration-এ চলে যায় (for লুপে update অংশে, while লুপে condition পরীক্ষায়)।

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;   // i = 3 হলে printf বাদ
    printf("%d ", i);       // আউটপুট: 1 2 4 5
}
```

**ভুল অপশন:**
- ক) লুপ থেকে বের হয় `break`।
- খ) প্রোগ্রাম বন্ধ করে `exit()`।
- গ) লুপ দুইবার চালানোর মতো কোনো কাজ `continue` করে না।

---

### ১২. Which register in a CPU points to the next instruction to be executed?

- ক. Accumulator
- খ. Flags
- গ. SP
- **ঘ. PC** ✅

**ব্যাখ্যা:** Program Counter (PC), যাকে Instruction Pointer (IP)-ও বলে, পরবর্তী যে instruction execute হবে তার memory address ধরে রাখে। Fetch-এর পর এর মান স্বয়ংক্রিয়ভাবে বাড়ে।

**ভুল অপশন:**
- ক) Accumulator: ALU-র গণনার ফলাফল রাখে।
- খ) Flags: Zero, Carry, Sign ইত্যাদি অবস্থার বিট রাখে।
- গ) SP (Stack Pointer): stack-এর শীর্ষের address রাখে।

---

### ১৩. Intel 8085 is a —— bit microprocessor

- **ক. 8** ✅
- খ. 16
- গ. 32
- ঘ. 64

**ব্যাখ্যা:** Intel 8085 একটি **8-bit** মাইক্রোপ্রসেসর। এর data bus ৮ বিটের, accumulator ৮ বিটের। Address bus ১৬ বিটের, তাই এটি 2¹⁶ = 64 KB memory address করতে পারে। এর সাথে এক +5V power supply লাগে।

⚠️ **নোট:** PDF-এ উত্তর হিসেবে খ) 16 চিহ্নিত আছে, যা **ভুল**। 16 হলো এর address bus-এর প্রস্থ। Microprocessor-এর "বিট" বলতে সাধারণত data bus/word size বোঝায়।

**ঘটনাক্রম:** Intel ১৯৭৬ সালে 8085 বাজারে আনে (8080-এর উন্নত রূপ)। 16-bit প্রসেসর হলো **8086**, ১৯৭৮ সালে প্রকাশিত।

**ভুল অপশন:**
- খ) 16-bit: 8086 ও 80286।
- গ) 32-bit: 80386 ও তার পরবর্তী।
- ঘ) 64-bit: আধুনিক x86-64 প্রসেসর।

---

### ১৪. Which is *not* suited for dynamic programming problems?

- ক. Overlapping SP
- খ. Optimal substructure
- **গ. Independent SP** ✅
- ঘ. Repeated computation

**ব্যাখ্যা:** Dynamic programming-এর জন্য দুটি শর্ত লাগে: (১) Overlapping subproblems এবং (২) Optimal substructure। যে সমস্যায় subproblem-গুলো পরস্পর **independent** (একই subproblem বারবার আসে না), সেখানে সমাধান মনে রাখার (memoization) লাভ নেই। সেখানে Divide and Conquer (যেমন Merge sort) উপযোগী।

**ভুল অপশন:**
- ক) Overlapping subproblems DP-র মূল শর্ত।
- খ) Optimal substructure-ও DP-র মূল শর্ত।
- ঘ) Repeated computation-ই DP কমায় (memoization/table দিয়ে), তাই এটি DP-র উপযোগী সমস্যার বৈশিষ্ট্য।

---

### ১৫. The chromatic index of a bipartite graph with at least one edge is:

- ক. 1
- **খ. 2** ✅
- গ. 3
- ঘ. 4

**ব্যাখ্যা:** প্রশ্নকর্তার উদ্দেশ্য সম্ভবত "Bipartite graph-কে (কমপক্ষে একটি edge থাকলে) রং করতে ন্যূনতম ২টি রং লাগে" অর্থাৎ **chromatic number = 2**। Bipartite graph-এর vertex দুই ভাগে ভাগ করা যায় এবং একই ভাগের মধ্যে কোনো edge থাকে না, তাই দুই রংই যথেষ্ট।

⚠️ **নোট:** প্রশ্নে "chromatic **index**" লেখা, যা edge coloring বোঝায়। **Kőnig's line coloring theorem** অনুযায়ী bipartite graph-এর chromatic index = সর্বোচ্চ ডিগ্রি Δ(G)। এটি সবসময় 2 নয়। যেমন একটি মাত্র edge থাকলে 1, আর K₁,₃ (star) গ্রাফে 3। তাই শব্দ আক্ষরিক ধরলে কোনো অপশনই সব গ্রাফের জন্য সঠিক নয়। "chromatic number" ধরলে **খ) 2** সঠিক, আর PDF-ও সেটিই দিয়েছে। পরীক্ষায় এটিই বেছে নিন।

**ঘটনাক্রম:** Kőnig's line coloring theorem ১৯১৬ সালে হাঙ্গেরীয় গণিতবিদ Dénes Kőnig প্রমাণ করেন।

**ভুল অপশন (chromatic number ধরলে):**
- ক) 1 রং লাগে শুধু edge-হীন গ্রাফে। এখানে অন্তত একটি edge আছে, তাই দুই প্রান্তের রং আলাদা হতে হবে।
- গ), ঘ) Bipartite গ্রাফ 2-colorable, তাই 3 বা 4 লাগে না (odd cycle থাকলে 3 লাগত, কিন্তু bipartite গ্রাফে odd cycle নেই)।

---

### ১৬. In Huffman coding, the algorithm repeatedly picks two nodes and merges those. These two nodes are:

- ক. Highest frequency
- **খ. Lowest frequency** ✅
- গ. One high + one low
- ঘ. Arbitrarily selected

**ব্যাখ্যা:** Huffman coding একটি greedy algorithm। প্রতি ধাপে সর্বনিম্ন frequency-র দুটি node নিয়ে একটি নতুন parent node বানানো হয় (frequency-র যোগফল দিয়ে)। এভাবে কম ব্যবহৃত অক্ষরের কোড দীর্ঘ এবং বেশি ব্যবহৃত অক্ষরের কোড ছোট হয়। Min-heap দিয়ে এটি O(n log n) সময়ে করা যায়।

**ভুল অপশন:**
- ক) Highest frequency নিলে optimal prefix code হয় না।
- গ) ও ঘ) উচ্চ-নিম্ন মিশ্রণ বা যেকোনো নির্বাচন greedy নীতি ভাঙে, ফলে code optimal হয় না।

---

### ১৭. A primary key

- ক. Can have NULL
- **খ. Uniquely identifies each row** ✅
- গ. Must be foreign key
- ঘ. Can have duplicates

**ব্যাখ্যা:** Primary key টেবিলের প্রতিটি row-কে অনন্যভাবে শনাক্ত করে। এতে NULL বা duplicate মান থাকতে পারে না। একটি টেবিলে primary key একটিই থাকে (একাধিক column মিলিয়ে composite key হতে পারে)।

**ভুল অপশন:**
- ক) Primary key-তে NULL অনুমোদিত নয়।
- গ) Foreign key অন্য টেবিলের primary key-কে নির্দেশ করে। Primary key-কে foreign key হতে হবে এমন বাধ্যবাধকতা নেই।
- ঘ) Duplicate মান থাকলে uniqueness থাকে না।

---

### ১৮. The address block 192.168.16.0/20 contains _____ IP Addresses.

- ক. 1024
- **খ. 4096** ✅
- গ. 2048
- ঘ. 65536

**ব্যাখ্যা:** /20 মানে নেটওয়ার্ক অংশে ২০ বিট, বাকি ১২ বিট host অংশ।

**সমাধান:**
- Host bit = 32 − 20 = 12
- মোট address = 2¹² = **4096**
- Range: 192.168.16.0 থেকে 192.168.31.255 (তৃতীয় octet-এ ৪ বিট host → 16টি মান × 256 = 4096)
- ব্যবহারযোগ্য host address = 4096 − 2 = 4094 (প্রশ্নে "contains ... IP addresses" থাকায় মোট ৪০৯৬)

**ভুল অপশন:**
- ক) 1024 = 2¹⁰ → /22 ব্লকের জন্য।
- গ) 2048 = 2¹¹ → /21 ব্লকের জন্য।
- ঘ) 65536 = 2¹⁶ → /16 ব্লকের জন্য।

---

### ১৯. A* search algorithm is

- ক. Only complete
- খ. Only optimal
- **গ. Complete and optimal if heuristic is admissible** ✅
- ঘ. Neither

**ব্যাখ্যা:** A* ফাংশন f(n) = g(n) + h(n)। Heuristic h(n) **admissible** হলে (অর্থাৎ লক্ষ্যে পৌঁছানোর প্রকৃত খরচকে কখনো বেশি করে না ধরলে) A* সর্বনিম্ন খরচের পথ খুঁজে পায় (optimal) এবং branching factor সসীম ও step cost ধনাত্মক হলে সমাধান থাকলে পাবেই (complete)। গ্রাফ সার্চে optimality-র জন্য সাধারণত **consistent** heuristic দরকার হয়।

**ভুল অপশন:**
- ক) ও খ) শুধু একটি গুণ নয়; admissible heuristic-এ দুটি গুণই থাকে।
- ঘ) Admissible heuristic থাকলে A* complete ও optimal দুটোই।

---

### ২০. Which of the following protocols is used together with HTTP in HTTPS?

- ক. SHA
- খ. SSH
- **গ. TLS** ✅
- ঘ. VPN

**ব্যাখ্যা:** HTTPS = HTTP + TLS (Transport Layer Security)। TLS ডেটা encrypt করে, server authentication ও data integrity নিশ্চিত করে। সাধারণ port 443।

**ঘটনাক্রম:** Netscape ১৯৯০-র দশকের মাঝামাঝি SSL আনে। এর উত্তরসূরি TLS 1.0 ১৯৯৯ সালে (RFC 2246), আর TLS 1.3 ২০১৮ সালে (RFC 8446) প্রকাশিত হয়। এখন SSL বলতে প্রায় সবাই TLS-ই বোঝায়।

**ভুল অপশন:**
- ক) SHA: একটি hash function পরিবার, প্রোটোকল নয়।
- খ) SSH: নিরাপদ remote login ও কমান্ড চালানোর জন্য (port 22)।
- ঘ) VPN: নিরাপদ tunnel তৈরির প্রযুক্তি, HTTPS-এর অংশ নয়।

---

### ২১. _____ is used in C to write a single character to a file.

- ক. fputs()
- খ. fprintf()
- **গ. putc()** ✅
- ঘ. fwrite()

**ব্যাখ্যা:** `putc(int c, FILE *fp)` (এবং সমতুল্য `fputc()`) ফাইলে একটি মাত্র character লেখে। সফল হলে লেখা character-টি এবং ব্যর্থ হলে `EOF` ফেরত দেয়।

⚠️ **নোট:** প্রযুক্তিগতভাবে `fprintf(fp, "%c", ch)` ও `fwrite(&ch, 1, 1, fp)` দিয়েও একটি character লেখা যায়। কিন্তু এককভাবে character লেখার জন্য নির্ধারিত function হলো `putc()`/`fputc()`, তাই প্রশ্নের উত্তর গ।

**ভুল অপশন:**
- ক) `fputs()` একটি পুরো string লেখে।
- খ) `fprintf()` formatted ডেটা লেখে।
- ঘ) `fwrite()` binary block লেখে।

---

### ২২. "Either all operations execute or none" refers to

- ক. Consistency
- খ. Isolation
- **গ. Atomicity** ✅
- ঘ. Durability

**ব্যাখ্যা:** ACID-এর **Atomicity** মানে transaction-এর সব operation হয় সম্পূর্ণ execute হবে, নয়তো একটিও হবে না ("all or nothing")। ব্যর্থ হলে rollback হয়ে আগের অবস্থায় ফিরে যায়। উদাহরণ: ব্যাংকে এক অ্যাকাউন্ট থেকে টাকা কাটা ও অন্য অ্যাকাউন্টে জমা, দুটোই হতে হবে।

**ভুল অপশন:**
- ক) Consistency: transaction-এর আগে-পরে ডেটাবেস বৈধ অবস্থায় থাকবে।
- খ) Isolation: একাধিক transaction একে অপরকে প্রভাবিত করবে না।
- ঘ) Durability: commit-এর পর পরিবর্তন স্থায়ী থাকবে, সিস্টেম crash করলেও।

---

### ২৩. _____ algorithm is used to find a shortest path in a positive weighted graph.

- ক. Prim
- খ. Kruskal
- **গ. Dijkstra** ✅
- ঘ. DFS

**ব্যাখ্যা:** Dijkstra's algorithm একটি উৎস vertex থেকে অন্য সব vertex-এর সবচেয়ে ছোট পথ বের করে। এটি non-negative (ধনাত্মক) edge weight-এর জন্য কাজ করে। Priority queue দিয়ে জটিলতা O((V + E) log V)। ঋণাত্মক weight থাকলে Bellman-Ford লাগে।

**ভুল অপশন:**
- ক) Prim ও খ) Kruskal: Minimum Spanning Tree বের করে, shortest path নয়।
- ঘ) DFS: weight বিবেচনা করে না, shortest path-ও গ্যারান্টি দেয় না।

---

### ২৪. Pushdown automata (PDA) is equivalent in power to:

- ক. Regular expressions
- **খ. Context-free grammars** ✅
- গ. Context-sensitive
- ঘ. Turing machines

**ব্যাখ্যা:** PDA = Context-Free Grammar (CFG), অর্থাৎ PDA ঠিক Context-Free Language-ই গ্রহণ করে। Stack থাকায় এটি যেমন balanced parentheses বা aⁿbⁿ চেনে।

**মনে রাখার ছক:**
- Finite Automata ↔ Regular Expression
- PDA ↔ Context-Free Grammar
- Linear Bounded Automata ↔ Context-Sensitive Grammar
- Turing Machine ↔ Unrestricted Grammar

**ভুল অপশন:**
- ক) Regular expression-এর সমতুল্য Finite Automata।
- গ) Context-sensitive-এর সমতুল্য Linear Bounded Automata।
- ঘ) Turing machine সবচেয়ে শক্তিশালী, PDA-এর চেয়ে বেশি।

---

### ২৫. _____ operates at the network layer and is used to connect different networks?

- ক. Hub
- খ. Switch
- **গ. Router** ✅
- ঘ. Repeater

**ব্যাখ্যা:** Router স্তর ৩ (Network layer)-এ কাজ করে, IP address দেখে packet-কে এক নেটওয়ার্ক থেকে অন্য নেটওয়ার্কে পাঠায় (routing)।

**ভুল অপশন:**
- ক) Hub: Physical layer (স্তর ১), সব পোর্টে সংকেত পাঠায়।
- খ) Switch: সাধারণত Data link layer (স্তর ২), MAC address দিয়ে একই নেটওয়ার্কের ভেতরে frame পাঠায়।
- ঘ) Repeater: Physical layer-এ সংকেত শক্তিশালী করে।

---

### ২৬. _____ method is a first order optimization method.

- ক. Newton
- খ. Quasi-Newton
- **গ. Gradient descent** ✅
- ঘ. Conjugate gradient

**ব্যাখ্যা:** First-order method শুধু প্রথম derivative (gradient) ব্যবহার করে। Gradient descent-এর আপডেট: x₍ₖ₊₁₎ = xₖ − α∇f(xₖ)। Newton method দ্বিতীয় derivative (Hessian) ব্যবহার করে, তাই এটি second-order।

⚠️ **নোট:** Conjugate gradient-ও শুধু gradient তথ্য ব্যবহার করে, তাই কিছু বইয়ে একেও first-order ধরা হয়। আবার Quasi-Newton Hessian-এর আনুমানিক রূপ গড়ে তোলে। তবে "first order method"-এর সবচেয়ে প্রচলিত ও আদর্শ উদাহরণ **Gradient descent**, তাই উত্তর গ।

**ভুল অপশন:**
- ক) Newton: Hessian ব্যবহার করে (second-order)।
- খ) Quasi-Newton (BFGS ইত্যাদি): Hessian আনুমানিকভাবে তৈরি করে, second-order আচরণের কাছাকাছি।
- ঘ) Conjugate gradient: পূর্বোক্ত নোট দেখুন। এটি আদর্শ উদাহরণ নয়।

---

### ২৭. Which is an iterative method?

- ক. Gauss elimination
- **খ. Gauss-Seidel** ✅
- গ. Cramer
- ঘ. Matrix inversion

**ব্যাখ্যা:** Gauss-Seidel একটি iterative পদ্ধতি। এটি একটি আনুমানিক মান দিয়ে শুরু করে বারবার উন্নত করে সমাধানে পৌঁছায়। Jacobi ও SOR-ও iterative।

**ভুল অপশন:** Gauss elimination, Cramer's rule ও Matrix inversion হলো **direct method**। এগুলো সসীম ধাপে সরাসরি সঠিক সমাধান দেয়।

---

### ২৮. In C, to retain the values of variables between function calls, we should use:

- ক. auto
- খ. extern
- **গ. static** ✅
- ঘ. register

**ব্যাখ্যা:** `static` local variable প্রোগ্রাম চলাকালীন memory-তে থাকে, একবারই initialize হয় এবং এক function call থেকে পরের call পর্যন্ত মান ধরে রাখে।

```c
void count() {
    static int c = 0;   // একবারই 0 হয়
    c++;
    printf("%d ", c);
}
// count() তিনবার ডাকলে আউটপুট: 1 2 3
```

**ভুল অপশন:**
- ক) `auto`: সাধারণ local variable, function শেষ হলে মান হারায়।
- খ) `extern`: অন্য ফাইল বা স্থানে সংজ্ঞায়িত variable-এর ঘোষণা (linkage), মান ধরে রাখার জন্য নয়।
- ঘ) `register`: variable CPU register-এ রাখার অনুরোধ (গতির জন্য), মান ধরে রাখে না।

---

### ২৯. Which phase in the compiler design performs data type checking?

- ক. Lexical
- খ. Syntax
- **গ. Semantic** ✅
- ঘ. Code generation

**ব্যাখ্যা:** Semantic analysis-এ type checking, scope ও declaration যাচাই হয়। যেমন int variable-এ string বসানো ধরা পড়ে এখানে।

**Compiler-এর ধাপ:** Lexical analysis (token) → Syntax analysis (parse tree) → Semantic analysis → Intermediate code → Optimization → Code generation।

**ভুল অপশন:**
- ক) Lexical: source code-কে token-এ ভাঙে।
- খ) Syntax: grammar অনুযায়ী গঠন যাচাই করে।
- ঘ) Code generation: target (machine) code তৈরি করে।

---

### ৩০. For an n-element min-heap

- ক. the smallest element can be found anywhere in the heap
- খ. A type of BST
- **গ. Arbitrary element access O(n) operation** ✅
- ঘ. the largest element is always at the root.

**ব্যাখ্যা:** Min-heap একটি complete binary tree, যেখানে প্রতিটি parent তার child-দের চেয়ে ছোট বা সমান। Heap-এ কোনো নির্দিষ্ট মান খুঁজতে (search) সব node দেখতে হতে পারে, তাই O(n)।

⚠️ **নোট:** Heap-কে array হিসেবে রাখলে index দিয়ে সরাসরি element পাওয়া O(1)। এখানে "arbitrary element access" বলতে **নির্দিষ্ট মান খোঁজা (search)** বোঝানো হয়েছে। অন্য তিনটি অপশন স্পষ্টভাবে ভুল, তাই গ-ই উত্তর।

**ভুল অপশন:**
- ক) Min-heap-এ ক্ষুদ্রতম element সবসময় **root**-এ থাকে (find-min O(1)), যেকোনো জায়গায় নয়।
- খ) Heap কোনো BST নয়। BST-তে বামে ছোট ও ডানে বড় নিয়ম থাকে, heap-এ থাকে না।
- ঘ) Root-এ থাকে **ক্ষুদ্রতম** element। বৃহত্তম থাকে max-heap-এ।

---

### ৩১. For BFS of a graph, we should use:

- **ক. queue** ✅
- খ. stack
- গ. priority queue
- ঘ. stack

**ব্যাখ্যা:** BFS (Breadth-First Search) স্তরে স্তরে (level by level) গ্রাফ ঘোরে। এজন্য FIFO নীতির **queue** লাগে: যে vertex আগে আবিষ্কৃত হয়, সেটির প্রতিবেশীদের আগে দেখা হয়। BFS-এ unweighted গ্রাফে shortest path পাওয়া যায়।

⚠️ **নোট:** PDF-এ খ ও ঘ দুটি অপশনেই "stack" লেখা, যা ছাপার ভুল। উত্তরে কোনো প্রভাব পড়ে না।

**ভুল অপশন:**
- খ), ঘ) Stack (LIFO) ব্যবহার করে DFS।
- গ) Priority queue ব্যবহার হয় Dijkstra ও Prim-এ।

---

### ৩২. Port binding is handled by which layer of TCP/IP?

- ক. Application
- খ. Internet
- **গ. Transport** ✅
- ঘ. Network

**ব্যাখ্যা:** Port number Transport layer (TCP/UDP)-এর ধারণা। একটি socket-কে নির্দিষ্ট IP ও port-এর সাথে যুক্ত (bind) করা এই স্তরের কাজ। এর মাধ্যমে ডেটা সঠিক অ্যাপ্লিকেশনে পৌঁছায় (multiplexing/demultiplexing)।

**ভুল অপশন:**
- ক) Application: HTTP, FTP ইত্যাদি প্রোটোকল, যারা port ব্যবহার করে কিন্তু binding নিজে করে না।
- খ), ঘ) Internet/Network: IP address ও routing সামলায়। এখানে port-এর ধারণা নেই। (TCP/IP-তে Internet layer ও OSI-র Network layer সমতুল্য।)

---

### ৩৩. Which one below is an example of a NoSQL database?

- ক. MySQL
- **খ. MongoDB** ✅
- গ. Oracle
- ঘ. PostgreSQL

**ব্যাখ্যা:** MongoDB একটি document-oriented NoSQL ডেটাবেস, যা JSON-সদৃশ (BSON) document রাখে। অন্য NoSQL উদাহরণ: Redis (key-value), Cassandra (column-family), Neo4j (graph)।

**ভুল অপশন:** MySQL, Oracle ও PostgreSQL সবই **relational database (RDBMS)**, যারা SQL ও টেবিল-ভিত্তিক গঠন ব্যবহার করে।

---

### ৩৪. A complete graph of n vertices has _____ edges.

- ক. n
- খ. n(n+1)/2
- **গ. n(n-1)/2** ✅
- ঘ. n²

**ব্যাখ্যা:** Complete graph-এ প্রতিটি vertex-জোড়ার মধ্যে একটি করে edge থাকে। তাই edge সংখ্যা = n-এর মধ্য থেকে ২টি নেওয়ার উপায় = C(n, 2)।

**সমাধান:**
- C(n, 2) = n(n − 1) / 2
- যাচাই: n = 4 হলে 4×3/2 = 6, n = 5 হলে 5×4/2 = 10
- অন্যভাবে: প্রতিটি vertex বাকি (n − 1)টির সাথে যুক্ত, মোট n(n − 1), প্রতিটি edge দুইবার গোনা হয়েছে, তাই ২ দিয়ে ভাগ।

**ভুল অপশন:**
- ক) n: একটি cycle graph-এর edge সংখ্যা।
- খ) n(n+1)/2: self-loop সহ হিসাব করলে আসে।
- ঘ) n²: directed গ্রাফে self-loop সহ সম্ভাব্য সর্বোচ্চ edge।

---

### ৩৫. Which optimization is *not* used for eliminating redundant code?

- ক. Dead code elimination
- খ. Partial redundancy
- গ. Common subexpression
- **ঘ. Constant folding** ✅

**ব্যাখ্যা:** Constant folding compile-এর সময়ই ধ্রুবক রাশির মান হিসাব করে বসিয়ে দেয় (যেমন `x = 3 * 4` → `x = 12`)। এটি runtime গণনা কমায়, কিন্তু "অপ্রয়োজনীয় বা পুনরাবৃত্ত কোড সরানো" শ্রেণির optimization নয়।

**ভুল অপশন (এগুলো redundancy দূর করে):**
- ক) Dead code elimination: যে কোডের ফল কখনো ব্যবহার হয় না, তা সরায়।
- খ) Partial redundancy elimination: কিছু পথে পুনরাবৃত্ত গণনা সরায়।
- গ) Common subexpression elimination: একই রাশি বারবার হিসাব না করে একবারই করে।

---

### ৩৬. What is the hexadecimal value of (1111011011)₂?

- ক. 3BD
- **খ. 3DB** ✅
- গ. 3CB
- ঘ. 3DA

**ব্যাখ্যা:** Binary থেকে Hex করতে ডান দিক থেকে ৪ বিট করে ভাগ করা হয়।

**সমাধান:**
- 1111011011 → ডান থেকে ৪ বিট করে: `11` | `1101` | `1011`
- বাঁয়ের অংশ পূরণ করে: `0011` | `1101` | `1011`
- 0011 = 3, 1101 = D (13), 1011 = B (11)
- ফল = **(3DB)₁₆**
- যাচাই (decimal): 1111011011₂ = 512+256+128+64+16+8+2+1 = 987; 3×256 + 13×16 + 11 = 768 + 208 + 11 = 987 ✔

**ভুল অপশন:**
- ক) 3BD: শেষ দুই digit উল্টে গেছে (D ও B)।
- গ) 3CB: মাঝের digit 1100 (C) ধরা হয়েছে, কিন্তু আসলে 1101 (D)।
- ঘ) 3DA: শেষ digit 1010 (A) ধরা হয়েছে, কিন্তু আসলে 1011 (B)।

---

### ৩৭. What will be the time complexity of the following algorithm:

```c
sum = 0;
for (i = 1; i <= n; i = i*2)
    for (j = 1; j < n; j++)
        sum = sum + i*j;
```

- ক. O(n)
- খ. O(log n)
- গ. O(n²)
- **ঘ. O(n log n)** ✅

**ব্যাখ্যা:** বাইরের লুপে i প্রতিবার দ্বিগুণ হয় (1, 2, 4, 8, …), তাই এটি চলে প্রায় log₂ n বার। ভেতরের লুপে j সরল ধাপে বাড়ে, তাই এটি প্রতিবার (n − 1) বার চলে।

**সমাধান:**
- বাইরের লুপ: i = 2ᵏ ≤ n ⇒ k ≤ log₂ n ⇒ মোট ⌊log₂ n⌋ + 1 বার
- ভেতরের লুপ: প্রতিবার n − 1 বার
- মোট ধাপ = (n − 1)(⌊log₂ n⌋ + 1) = **O(n log n)**
- যাচাই: n = 8 হলে i = 1, 2, 4, 8 → ৪ বার; ভেতরে ৭ বার → মোট ২৮ ধাপ। এটি n² = 64-এর কাছাকাছি নয়, n log n = 24-এর কাছাকাছি।

⚠️ **নোট:** PDF-এ উত্তর হিসেবে গ) O(n²) চিহ্নিত আছে, যা **ভুল**। O(n²) হতো যদি বাইরের লুপ `i++` দিয়ে চলত।

**ভুল অপশন:**
- ক) O(n): বাইরের লুপের গুণফল বাদ দিলে হয়।
- খ) O(log n): ভেতরের লুপ বাদ দিলে হয়।
- গ) O(n²): বাইরের লুপ রৈখিক (n বার) চললে হতো।

---

### ৩৮. Which one is a compile time polymorphism?

- ক. Virtual function
- **খ. Operator overloading** ✅
- গ. Function overriding
- ঘ. Dynamic binding

**ব্যাখ্যা:** Compile-time (static) polymorphism-এ কোন function ডাকা হবে তা compile-এর সময়ই ঠিক হয়। উদাহরণ: function overloading ও operator overloading।

**ভুল অপশন (এগুলো run-time polymorphism):**
- ক) Virtual function: run-time-এ object-এর প্রকৃত type দেখে function নির্ধারিত হয়।
- গ) Function overriding: derived class-এ base class-এর function নতুন করে লেখা, run-time-এ সিদ্ধান্ত হয়।
- ঘ) Dynamic binding: সংজ্ঞাগতভাবেই run-time binding।

---

### ৩৯. Data _____ is the ability to modify a schema definition in a level without affecting

- ক. Binding
- খ. Abstraction
- গ. Mapping
- **ঘ. Independence** ✅

**ব্যাখ্যা:** Data independence মানে ডেটাবেসের এক স্তরের schema বদলালে তার উপরের স্তরে প্রভাব না পড়া। এটি দুই প্রকার:
- **Physical data independence:** Internal (physical) schema বদলালে Conceptual schema অপরিবর্তিত থাকে।
- **Logical data independence:** Conceptual schema বদলালে External schema ও অ্যাপ্লিকেশন অপরিবর্তিত থাকে।

⚠️ **নোট:** PDF-এ প্রশ্নের বাক্য অসম্পূর্ণ ("without affecting" দিয়ে শেষ)। মূল বাক্য সম্ভবত "...without affecting the schema definition at the next higher level"। উত্তর অপরিবর্তিত।

**ভুল অপশন:**
- ক) Binding: নাম বা মানকে সংযুক্ত করা।
- খ) Abstraction: জটিলতা লুকিয়ে সারাংশ দেখানো।
- গ) Mapping: এক স্তরের schema-কে অন্য স্তরের সাথে রূপান্তর করা, কিন্তু সংজ্ঞাটি independence-এর।

---

### ৪০. The main difference between a latch (L) and a flip flop (FF) is

- ক. FF is level-triggered, L is edge-triggered
- **খ. FF is edge-triggered, L is level-triggered** ✅
- গ. FF cannot store data but L can
- ঘ. L can store more data than a FF

**ব্যাখ্যা:** Latch **level-sensitive**: enable/clock সংকেত active থাকা পুরো সময় ইনপুট বদলালে আউটপুট বদলাতে পারে। Flip-flop **edge-triggered**: শুধু clock-এর rising বা falling edge-এই আউটপুট বদলায়, তাই synchronous বর্তনীতে বেশি নির্ভরযোগ্য।

**ভুল অপশন:**
- ক) উল্টো লেখা হয়েছে।
- গ) দুটিই ১ বিট ডেটা সংরক্ষণ করে।
- ঘ) দুটিই একই পরিমাণ (১ বিট) সংরক্ষণ করে।

---

### ৪১. What is the role of an Index in a database

- ক. To store large binary objects
- খ. To group the related table together
- গ. To store data integrity constraints
- **ঘ. To boost the speed of data retrieval operations** ✅

**ব্যাখ্যা:** Index বইয়ের সূচিপত্রের মতো কাজ করে। এটি (সাধারণত B-tree দিয়ে) নির্দিষ্ট column-এর মান থেকে row দ্রুত খুঁজে দেয়, ফলে SELECT ও search দ্রুত হয়। অসুবিধা: বাড়তি storage লাগে এবং INSERT/UPDATE/DELETE কিছুটা ধীর হয়।

**ভুল অপশন:**
- ক) বড় binary object রাখার জন্য BLOB data type।
- খ) সম্পর্কিত টেবিল যুক্ত করে JOIN ও foreign key।
- গ) Integrity constraint রাখে Constraint (PRIMARY KEY, UNIQUE, CHECK ইত্যাদি)।

---

### ৪২. _____ is a non-preemptive algorithm.

- **ক. FCFS** ✅
- খ. Round Robin
- গ. SRT
- ঘ. None

**ব্যাখ্যা:** Non-preemptive scheduling-এ একটি process CPU পেলে শেষ না হওয়া বা নিজে অপেক্ষায় না যাওয়া পর্যন্ত CPU ছাড়ে না। FCFS (First Come First Served) এমনই। অন্য non-preemptive উদাহরণ: SJF (non-preemptive)।

**ভুল অপশন:**
- খ) Round Robin: time quantum শেষে CPU কেড়ে নেওয়া হয় (preemptive)।
- গ) SRT (Shortest Remaining Time): নতুন ছোট কাজ এলে চলমান কাজকে থামিয়ে দেয় (SJF-এর preemptive রূপ)।
- ঘ) None: ক) সঠিক, তাই প্রযোজ্য নয়।

---

### ৪৩. Which of the following will delete all records from the table with the table structure?

- ক. ALTER
- খ. DELETE
- গ. DROP
- **ঘ. TRUNCATE** ✅

**ব্যাখ্যা:** `TRUNCATE TABLE` টেবিলের সব row মুছে ফেলে, কিন্তু টেবিলের structure (column, constraint) অক্ষত রাখে। এটি DDL কমান্ড, WHERE দেওয়া যায় না, সাধারণত DELETE-এর চেয়ে দ্রুত এবং auto-increment counter reset করে।

⚠️ **নোট:** `DELETE FROM table;` (WHERE ছাড়া) দিলেও সব row মুছে যায় এবং structure থাকে। তাই খ)-ও সম্পূর্ণ ভুল নয়। তবে প্রশ্নের প্রচলিত উত্তর (সব record একবারে মোছা ও structure রাখা) **TRUNCATE**।

**ভুল অপশন:**
- ক) ALTER: টেবিলের structure বদলায়, row মোছে না।
- খ) DELETE: DML, WHERE দিয়ে নির্দিষ্ট row মোছে, row-by-row চলে (ধীর)।
- গ) DROP: structure সহ পুরো টেবিলই মুছে দেয়।

---

### ৪৪. In OOP, _____ is used to restrict access to certain details of an object.

- ক. Inheritance
- খ. Polymorphism
- গ. Abstraction
- **ঘ. Encapsulation** ✅

**ব্যাখ্যা:** Encapsulation-এ data ও method একটি class-এ একত্র করা হয় এবং `private`/`protected` access modifier দিয়ে বাইরে থেকে সরাসরি প্রবেশ সীমিত করা হয়। এটিই data hiding। বাইরের কোড getter/setter-এর মাধ্যমে ডেটা ব্যবহার করে।

⚠️ **নোট:** অনেক সময় Abstraction ও Encapsulation গুলিয়ে যায়। Abstraction হলো জটিল বাস্তবায়ন লুকিয়ে শুধু প্রয়োজনীয় বৈশিষ্ট্য দেখানো। আর "**restrict access**" (প্রবেশ সীমিত করা) শব্দগুচ্ছ encapsulation-এর সাথে মেলে, তাই উত্তর ঘ।

**ভুল অপশন:**
- ক) Inheritance: এক class অন্য class-এর বৈশিষ্ট্য পায় (code reuse)।
- খ) Polymorphism: একই নামের কাজ ভিন্ন রূপে ঘটে।
- গ) Abstraction: বাস্তবায়নের জটিলতা আড়াল করে interface দেখায়।

---

### ৪৫. Find the output of the following code snippet:

```c
#include<stdio.h>
#define MULTIPLY(a,b) a/b
int main() {
    int x=5, y=2, result;
    result = MULTIPLY(y+x, y+x);
    printf("%d", result);
    return 0;
}
```

- ক. 1
- খ. 7
- **গ. 9** ✅
- ঘ. Runtime error

**ব্যাখ্যা:** C-এর macro হলো সরাসরি টেক্সট প্রতিস্থাপন। Argument-এর চারপাশে বন্ধনী না থাকায় প্রতিস্থাপনের পর operator precedence কাজ করে।

**সমাধান:**
- `MULTIPLY(y+x, y+x)` → `y+x/y+x` (বন্ধনী ছাড়া)
- মান বসালে: `2 + 5/2 + 5`
- `/`-এর precedence `+`-এর চেয়ে বেশি, তাই আগে `5/2`। Integer division, তাই = 2
- `2 + 2 + 5 = 9`
- আউটপুট: **9**

(লক্ষণীয়: macro-র নাম MULTIPLY হলেও এটি ভাগ করে।)

**ভুল অপশন:**
- ক) 1: যদি macro `((a)/(b))` হতো, তবে (7)/(7) = 1 হতো। কিন্তু বন্ধনী নেই।
- খ) 7: দুই ধাপে ভুল precedence ধরলে আসতে পারে, কিন্তু সঠিক প্রতিস্থাপনে আসে না।
- ঘ) Runtime error: কোনো শূন্য দিয়ে ভাগ বা অন্য ত্রুটি নেই।

---

### ৪৬. To solve a problem using recursion we should use a:

- ক. Linked list
- **খ. stack** ✅
- গ. queue
- ঘ. array

**ব্যাখ্যা:** Recursion-এ প্রতিটি function call-এর local variable ও return address একটি activation record হিসেবে **call stack**-এ জমা হয়। শেষ call আগে শেষ হয় (LIFO), তাই stack-ই প্রযোজ্য। Recursion-কে iterative রূপে লিখতেও সাধারণত stack লাগে।

**ভুল অপশন:**
- ক), ঘ) Linked list ও array ডেটা সংরক্ষণের কাঠামো, recursion-এর বাস্তবায়ন-কাঠামো নয়।
- গ) Queue FIFO নীতিতে চলে, recursion-এর LIFO আচরণের সাথে মেলে না।

---

### ৪৭. In Agile, software is delivered

- ক. at the end of the project
- **খ. in small incremental iterations** ✅
- গ. after complete documentation
- ঘ. only when all features have been implemented

**ব্যাখ্যা:** Agile-এ কাজ ছোট ছোট iteration বা sprint-এ (সাধারণত ১–৪ সপ্তাহ) ভাগ হয়। প্রতিটি iteration-এ কার্যকর সফটওয়্যারের একটি অংশ (increment) গ্রাহকের কাছে পৌঁছে দেওয়া হয় এবং মতামত নিয়ে এগোনো হয়।

**ঘটনাক্রম:** Agile Manifesto ২০০১ সালে যুক্তরাষ্ট্রের Utah-তে ১৭ জন সফটওয়্যার ডেভেলপার প্রকাশ করেন।

**ভুল অপশন:**
- ক), ঘ), গ) এগুলো Waterfall-জাতীয় প্রচলিত পদ্ধতির বৈশিষ্ট্য: সব শেষে ডেলিভারি, সম্পূর্ণ documentation আগে।

---

### ৪৮. UDP is a _____ protocol.

- **ক. Connection-less** ✅
- খ. Connection-oriented
- গ. Application layer
- ঘ. Network access layer

**ব্যাখ্যা:** UDP (User Datagram Protocol) Transport layer-এর connectionless প্রোটোকল। এতে handshake নেই, ডেটা পৌঁছানোর গ্যারান্টি নেই, ক্রম নিশ্চিত নেই। হেডার মাত্র ৮ বাইট, তাই দ্রুত। ব্যবহার: DNS, ভিডিও স্ট্রিমিং, অনলাইন গেম।

**ভুল অপশন:**
- খ) Connection-oriented হলো TCP।
- গ), ঘ) UDP Transport layer-এর প্রোটোকল, Application বা Network access layer-এর নয়।

---

### ৪৯. The number of binary strings of length 5

- ক. 10
- খ. 25
- **গ. 32** ✅
- ঘ. 64

**ব্যাখ্যা:** দৈর্ঘ্য ৫-এর binary string-এ প্রতিটি অবস্থানে ০ বা ১, অর্থাৎ ২টি পছন্দ।

**সমাধান:**
- মোট = 2 × 2 × 2 × 2 × 2 = 2⁵ = **32**

**ভুল অপশন:**
- ক) 10 = 5×2 (গুণ নয়, যোগের ভুল ধারণা)।
- খ) 25 = 5² (ভিত্তি ও ঘাত উল্টে গেছে)।
- ঘ) 64 = 2⁶ (দৈর্ঘ্য ৬-এর জন্য)।

---

### ৫০. Which one is correct to declare & initialize array in C?

- ক. int arr(5)=(…);
- **খ. int arr[5]={1,2,3,4,5}** ✅
- গ. int arr()=…
- ঘ. Array arr(5)=…

**ব্যাখ্যা:** C-তে array ঘোষণার সঠিক রূপ `type name[size] = {values};`। বর্গ বন্ধনী `[ ]` দিয়ে আকার দেওয়া হয় এবং মান curly brace `{ }`-এর ভেতরে রাখা হয়। (PDF-এর অপশনে শেষে সেমিকোলন `;` বাদ পড়েছে, প্রকৃত কোডে লাগবে।)

**ভুল অপশন:**
- ক) `( )` function-এর সিনট্যাক্স, array-এর নয়।
- গ) `int arr()` function-এর ঘোষণার মতো দেখায়।
- ঘ) `Array` নামে C-তে কোনো built-in type নেই।

---

### ৫১. A relation R on a set B is an equivalence relation if it is:

- ক. Reflexive + symmetric
- খ. Reflexive + transitive
- গ. Symmetric + transitive
- **ঘ. All three** ✅

**ব্যাখ্যা:** Equivalence relation হতে হলে একসাথে তিনটি শর্ত লাগে:
- **Reflexive:** প্রতিটি a-এর জন্য (a, a) ∈ R
- **Symmetric:** (a, b) ∈ R হলে (b, a) ∈ R
- **Transitive:** (a, b), (b, c) ∈ R হলে (a, c) ∈ R

উদাহরণ: পূর্ণসংখ্যায় "n দিয়ে modulo সমান" (congruence modulo n)। Equivalence relation সেটকে বিচ্ছিন্ন equivalence class-এ ভাগ করে।

**ভুল অপশন:** ক), খ), গ) প্রতিটিতে একটি করে শর্ত বাদ পড়েছে। দুটি শর্ত দিয়ে equivalence relation নিশ্চিত হয় না।

---

### ৫২. _____ refers to information about data

- ক. Hyper data
- খ. Tera data
- **গ. Meta data** ✅
- ঘ. Big data

**ব্যাখ্যা:** Metadata হলো "data about data", যেমন কোনো টেবিলের নাম, column ও তাদের type, ফাইলের আকার ও তৈরির তারিখ। ডেটাবেসে এগুলো data dictionary বা system catalog-এ থাকে।

**ভুল অপশন:**
- ক) Hyper data: প্রচলিত পরিভাষা নয়।
- খ) Tera data: Teradata একটি ডেটাবেস কোম্পানির নাম, আর "tera" একটি মাপের একক (10¹²)।
- ঘ) Big data: অত্যন্ত বিপুল ও জটিল ডেটাসেট।

---

### ৫৩. Using _____ order we can delete tree nodes in such a way that a child node is

- ক. Pre
- **খ. Post** ✅
- গ. In
- ঘ. Level

**ব্যাখ্যা:** Post-order traversal-এ ক্রম হলো Left → Right → Root। অর্থাৎ parent-এর আগে তার দুই child-ই visit হয়। তাই এই ক্রমে মুছলে child node-গুলো আগে মোছা হয়, আর parent পরে। ফলে parent মুছে গিয়ে child-এর পয়েন্টার হারানোর (memory leak) সমস্যা হয় না।

⚠️ **নোট:** PDF-এ প্রশ্নের বাক্য অসম্পূর্ণ ("a child node is" দিয়ে শেষ)। মূল বাক্য সম্ভবত "...a child node is deleted before its parent"। এই অর্থে উত্তর খ) Post।

**ভুল অপশন:**
- ক) Pre-order (Root → Left → Right): parent আগে মুছে গেলে child-এ পৌঁছানোর পথ হারায়।
- গ) In-order (Left → Root → Right): root মধ্যখানে মুছে যায়, ডান child-এ যাওয়ার আগেই parent চলে যায়।
- ঘ) Level-order: উপর থেকে নিচে চলে, তাই parent আগে মুছে যায়।

---

### ৫৪. Which one is not an addressing mode?

- ক. Immediate
- খ. Direct
- গ. Indirect
- **ঘ. Sequential** ✅

**ব্যাখ্যা:** Addressing mode বলে instruction-এর operand কীভাবে পাওয়া যাবে। প্রচলিত mode: Immediate, Direct, Indirect, Register, Register indirect, Indexed, Base-register, Relative। "Sequential" কোনো addressing mode নয় (এটি সাধারণত instruction চলার ক্রম বা access-এর ধরন বোঝায়)।

**ভুল অপশন:**
- ক) Immediate: operand সরাসরি instruction-এই থাকে।
- খ) Direct: instruction-এ operand-এর memory address থাকে।
- গ) Indirect: instruction-এ যে address থাকে সেখানে operand-এর আসল address থাকে।

---

*এই ফাইলে মোট ৫৪টি প্রশ্ন মূল ক্রম অনুযায়ী দেওয়া হয়েছে।*
