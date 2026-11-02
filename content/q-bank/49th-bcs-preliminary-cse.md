# ৪৯তম BCS প্রিলিমিনারি টেস্ট (CSE)

> প্রতিটি প্রশ্নের উত্তর নিজে যাচাই করা হয়েছে। গণনার প্রশ্নগুলো ধাপে ধাপে হিসাব করে মেলানো হয়েছে। এই PDF-এ GK, ইতিহাস বা current affairs-এর প্রশ্ন নেই; সব প্রশ্নই CSE-র টেকনিক্যাল বিষয়ের, তাই উত্তর যাচাই হয়েছে সূত্র ও যুক্তি দিয়ে।

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

**ব্যাখ্যা:** Intel 8085 একটি **8-bit** মাইক্রোপ্রসেসর। এর data bus ৮ বিটের, accumulator ৮ বিটের। Address bus ১৬ বিটের, তাই এটি 2¹⁶ = 64 KB memory address করতে পারে। এর সাথে এক +5V power supply লাগে। এর ALU, accumulator এবং data bus 8-bit হওয়ায় একে 8-bit microprocessor বলা হয়।

**ঘটনাক্রম:** Intel ১৯৭৬ সালে 8085 বাজারে আনে (8080-এর উন্নত রূপ)। 16-bit প্রসেসর হলো **8086**, ১৯৭৮ সালে প্রকাশিত।

**ভুল অপশন:**

- খ) 16-bit: 8086 ও 80286।
- গ) 32-bit: 80386 ও তার পরবর্তী।
- ঘ) 64-bit: আধুনিক x86-64 প্রসেসর।

---

### ১৪. Which is _not_ suited for dynamic programming problems?

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

⚠️ **নোট:** প্রশ্নে "chromatic **index**" লেখা, যা edge coloring বোঝায়। **Kőnig's line coloring theorem** অনুযায়ী bipartite graph-এর chromatic index = সর্বোচ্চ ডিগ্রি Δ(G)। এটি সবসময় 2 নয়। যেমন একটি মাত্র edge থাকলে 1, আর K₁,₃ (star) গ্রাফে 3। তাই শব্দ আক্ষরিক ধরলে কোনো অপশনই সব গ্রাফের জন্য সঠিক নয়। "chromatic number" ধরলে **খ) 2** সঠিক। পরীক্ষায় এটিই বেছে নিন।

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

### ১৮. The address block 192.168.16.0/20 contains **\_** IP Addresses.

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

### ১৯. A\* search algorithm is

- ক. Only complete
- খ. Only optimal
- **গ. Complete and optimal if heuristic is admissible** ✅
- ঘ. Neither

**ব্যাখ্যা:** A* ফাংশন f(n) = g(n) + h(n)। Heuristic h(n) **admissible** হলে (অর্থাৎ লক্ষ্যে পৌঁছানোর প্রকৃত খরচকে কখনো বেশি করে না ধরলে) A* সর্বনিম্ন খরচের পথ খুঁজে পায় (optimal) এবং branching factor সসীম ও step cost ধনাত্মক হলে সমাধান থাকলে পাবেই (complete)। গ্রাফ সার্চে optimality-র জন্য সাধারণত **consistent** heuristic দরকার হয়।

**ভুল অপশন:**

- ক) ও খ) শুধু একটি গুণ নয়; admissible heuristic-এ দুটি গুণই থাকে।
- ঘ) Admissible heuristic থাকলে A\* complete ও optimal দুটোই।

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

### ২১. **\_** is used in C to write a single character to a file.

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

### ২৩. **\_** algorithm is used to find a shortest path in a positive weighted graph.

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

### ২৫. **\_** operates at the network layer and is used to connect different networks?

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

### ২৬. **\_** method is a first order optimization method.

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

### ৩৪. A complete graph of n vertices has **\_** edges.

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

### ৩৫. Which optimization is _not_ used for eliminating redundant code?

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

### ৩৯. Data **\_** is the ability to modify a schema definition in a level without affecting

- ক. Binding
- খ. Abstraction
- গ. Mapping
- **ঘ. Independence** ✅

**ব্যাখ্যা:** Data independence মানে ডেটাবেসের এক স্তরের schema বদলালে তার উপরের স্তরে প্রভাব না পড়া। এটি দুই প্রকার:

- **Physical data independence:** Internal (physical) schema বদলালে Conceptual schema অপরিবর্তিত থাকে।
- **Logical data independence:** Conceptual schema বদলালে External schema ও অ্যাপ্লিকেশন অপরিবর্তিত থাকে।

⚠️ **নোট:** প্রশ্নের বাক্য অসম্পূর্ণ ("without affecting" দিয়ে শেষ)। মূল বাক্য সম্ভবত "...without affecting the schema definition at the next higher level"। উত্তর অপরিবর্তিত।

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

### ৪২. **\_** is a non-preemptive algorithm.

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

### ৪৪. In OOP, **\_** is used to restrict access to certain details of an object.

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

### ৪৮. UDP is a **\_** protocol.

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

### ৫২. **\_** refers to information about data

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

### ৫৩. Using **\_** order we can delete tree nodes in such a way that a child node is

- ক. Pre
- **খ. Post** ✅
- গ. In
- ঘ. Level

**ব্যাখ্যা:** Post-order traversal-এ ক্রম হলো Left → Right → Root। অর্থাৎ parent-এর আগে তার দুই child-ই visit হয়। তাই এই ক্রমে মুছলে child node-গুলো আগে মোছা হয়, আর parent পরে। ফলে parent মুছে গিয়ে child-এর পয়েন্টার হারানোর (memory leak) সমস্যা হয় না।

⚠️ **নোট:** প্রশ্নের বাক্য অসম্পূর্ণ ("a child node is" দিয়ে শেষ)। মূল বাক্য সম্ভবত "...a child node is deleted before its parent"। এই অর্থে উত্তর খ) Post।

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

# ৪৯তম BCS প্রিলিমিনারি টেস্ট (CSE) — MCQ সমাধান (পর্ব ২)

**সূত্র:** Debug IT Job Solution (MCQ, Page 33–35) | **প্রশ্ন:** ৫৫ থেকে ১০০, মোট ৪৬টি

> প্রতিটি উত্তর নিজে যাচাই করা হয়েছে এবং গণনার প্রশ্নগুলো ধাপে ধাপে মেলানো হয়েছে। এই অংশেও GK বা current affairs নেই, সব প্রশ্ন CSE-র টেকনিক্যাল বিষয়ের, তাই web search লাগেনি।

## ✅ PDF-এর উত্তর যাচাইয়ের ফল

**এই অংশে PDF-এর কোনো উত্তর ভুল পাওয়া যায়নি।** ৪৬টি প্রশ্নেই PDF-এর চিহ্নিত উত্তর সঠিক। তবে কিছু প্রশ্নে ছাপা বা শব্দচয়নের ত্রুটি আছে:

| প্রশ্ন নং | ধরন              | বিবরণ                                                                 |
| --------- | ---------------- | --------------------------------------------------------------------- |
| ৬২        | ছাপার ত্রুটি     | "K-means" অপশনটি মোটা অক্ষরে ছাপা, কিন্তু সঠিক উত্তর খ) Decision tree |
| ৭৪        | ছাপার ত্রুটি     | প্রশ্নের মাঝে অপ্রাসঙ্গিক "174" লেখা (সম্ভবত পৃষ্ঠার লাইন নম্বর)      |
| ৯৬        | স্ক্যানে অস্পষ্ট | Complement-এর দাগ (overline/underline) পড়তে অসুবিধা, নোট দেখুন       |
| ১০০       | বিন্যাস ত্রুটি   | ঘ) অপশনটি আলাদা লাইনে সরে গেছে, উত্তর অপরিবর্তিত                      |

**⚠️ নোট দেওয়া প্রশ্ন (মতভেদ বা ধারণা-নির্ভর):** ৬৬, ৬৭, ৭৩, ৭৪, ৮৬, ৯৬, ৯৭

---

### ৫৫. The Principal of Locality in memory systems helps to:

- ক. Reduce CPU cycles
- **খ. Improve cache performance** ✅
- গ. Increase instruction length
- ঘ. Reduce I/O latency

**ব্যাখ্যা:** Principle of Locality বলে, প্রোগ্রাম কিছুক্ষণ ধরে একই বা কাছাকাছি memory অংশ বারবার ব্যবহার করে। এর দুটি ধরন:

- **Temporal locality:** যে ডেটা সম্প্রতি ব্যবহৃত হয়েছে, তা শিগগিরই আবার ব্যবহৃত হবে।
- **Spatial locality:** কোনো address ব্যবহৃত হলে তার আশেপাশের address-ও শিগগিরই ব্যবহৃত হবে।

এই আচরণের কারণেই ছোট দ্রুত cache অল্প ডেটা রেখে বেশিরভাগ অনুরোধ সামলাতে পারে (high hit rate), তাই cache performance উন্নত হয়।

**ভুল অপশন:**

- ক) Locality সরাসরি CPU cycle কমায় না, memory access দ্রুত করার মাধ্যমে পরোক্ষভাবে সাহায্য করে। সবচেয়ে সরাসরি ফল cache performance।
- গ) Instruction-এর দৈর্ঘ্যের সাথে এর সম্পর্ক নেই।
- ঘ) I/O latency device-নির্ভর, locality এর সমাধান নয়।

---

### ৫৬. Which of the following is a combinational circuit?

- ক. Counter
- খ. Flip-flop
- **গ. Multiplexer** ✅
- ঘ. Register

**ব্যাখ্যা:** Combinational circuit-এর আউটপুট শুধু বর্তমান ইনপুটের উপর নির্ভর করে, কোনো memory থাকে না। Multiplexer select line অনুযায়ী ইনপুটগুলোর একটি আউটপুটে পাঠায়। অন্য উদাহরণ: adder, decoder, encoder।

**ভুল অপশন:** Counter, Flip-flop ও Register তিনটিই **sequential circuit**। এদের আউটপুট বর্তমান ইনপুট এবং আগের অবস্থা (stored state) দুটির উপর নির্ভর করে।

---

### ৫৭. Which one is true for a DFA?

- ক. ε-transition allowed
- খ. Accepts CFL
- **গ. Accepts regular languages** ✅
- ঘ. Multiple transitions allowed

**ব্যাখ্যা:** DFA (Deterministic Finite Automaton)-এ প্রতিটি state-এ প্রতিটি input symbol-এর জন্য ঠিক একটি transition থাকে। এটি শুধু **regular language** গ্রহণ করে (NFA ও Regular expression-এর সমান ক্ষমতা)।

**ভুল অপশন:**

- ক) ε-transition NFA-তে (ε-NFA) থাকে, DFA-তে নয়।
- খ) Context-Free Language (CFL) চিনতে PDA লাগে।
- ঘ) এক symbol-এ একাধিক transition NFA-তে সম্ভব, DFA-তে নয় (deterministic)।

---

### ৫৮. Greedy methods guarantee an optimal solution when:

- ক. Overlapping subproblems exist
- **খ. problems have optimal substructure and greedy choice property** ✅
- গ. divide and conquer can be applied
- ঘ. Subproblems are independent

**ব্যাখ্যা:** Greedy algorithm optimal ফল দেয় যখন সমস্যায় দুটি বৈশিষ্ট্য থাকে:

- **Optimal substructure:** সমস্যার সর্বোত্তম সমাধানে উপ-সমস্যাগুলোরও সর্বোত্তম সমাধান থাকে।
- **Greedy choice property:** প্রতিটি ধাপে স্থানীয়ভাবে সেরা বেছে নিলে সামগ্রিকভাবেও সেরা ফল আসে।

উদাহরণ: Huffman coding, Kruskal, Prim, Activity selection।

**ভুল অপশন:**

- ক) Overlapping subproblems থাকলে Dynamic Programming উপযোগী।
- গ), ঘ) Divide and conquer ও independent subproblems বৈশিষ্ট্য Merge sort-জাতীয় পদ্ধতির, greedy-র optimality-র গ্যারান্টি দেয় না।

---

### ৫৯. Adaptive maintenance is required when:

- ক. Errors found
- খ. Requirements stable
- গ. Documentation missing
- **ঘ. The environment such as OS, hardware changes** ✅

**ব্যাখ্যা:** Adaptive maintenance-এ সফটওয়্যারকে নতুন পরিবেশের সাথে খাপ খাওয়ানো হয়, যেমন নতুন OS, hardware বা আইন-কানুনের পরিবর্তন।

**Maintenance-এর চার ধরন:**

- **Corrective:** ত্রুটি (bug) সারানো
- **Adaptive:** পরিবেশ বদলের সাথে মানানো
- **Perfective:** নতুন ফিচার যোগ বা কর্মক্ষমতা বাড়ানো
- **Preventive:** ভবিষ্যৎ সমস্যা এড়াতে আগাম সংস্কার

**ভুল অপশন:**

- ক) Errors found: Corrective maintenance।
- খ) Requirements stable: এ অবস্থায় adaptive-এর প্রয়োজন পড়ে না।
- গ) Documentation missing: সরাসরি কোনো maintenance ধরনের শর্ত নয়।

---

### ৬০. What output will be generated by the compiler after lexical and syntax analyses, respectively?

- **ক. Tokens and a parse tree** ✅
- খ. A parse tree and tokens
- গ. A Syntax tree and intermediate codes
- ঘ. Tokens + errors

**ব্যাখ্যা:** Lexical analysis source code পড়ে **token** তৈরি করে। এরপর Syntax analysis সেই token-গুলো grammar অনুযায়ী যাচাই করে **parse tree** তৈরি করে। ক্রম "respectively" অনুযায়ী: প্রথমে Tokens, তারপর Parse tree।

**ভুল অপশন:**

- খ) ক্রম উল্টে গেছে।
- গ) Syntax tree ও intermediate code আরও পরের ধাপের ফল।
- ঘ) Syntax analysis-এর ফল parse tree, "errors" নির্ধারিত আউটপুট নয়।

---

### ৬১. Contrapositive of "If it rains, home team wins"

- ক. If home team wins, it rains
- **খ. If home team doesn't win, it doesn't rain** ✅
- গ. If it does not rain then the home team does not win
- ঘ. The home team wins whenever rains

**ব্যাখ্যা:** শর্তসাপেক্ষ বাক্য p → q-এর contrapositive হলো **¬q → ¬p**, যা মূল বাক্যের সাথে logically সমতুল্য।

**সমাধান:**

- p = "it rains", q = "home team wins"
- মূল বাক্য: p → q
- Contrapositive: ¬q → ¬p = "If home team doesn't win, it doesn't rain"

**ভুল অপশন:**

- ক) q → p, এটি **converse**।
- গ) ¬p → ¬q, এটি **inverse**।
- ঘ) "wins whenever rains" মূল বাক্যেরই আরেক রূপ (p → q), contrapositive নয়।

---

### ৬২. Which one is a supervised learning algorithm?

- ক. K-means
- **খ. Decision tree** ✅
- গ. Apriori
- ঘ. DBSCAN

**ব্যাখ্যা:** Decision tree labeled data থেকে শিখে classification বা regression করে, তাই এটি supervised।

**ভুল অপশন (সবই unsupervised):**

- ক) K-means: clustering।
- গ) Apriori: association rule mining।
- ঘ) DBSCAN: density-based clustering।

---

### ৬৩. Which of the following is a numerical method for eigenvalue problems?

- ক. Gauss elimination
- **খ. Power method** ✅
- গ. Newton interpolation
- ঘ. Trapezoidal rule

**ব্যাখ্যা:** Power method একটি iterative পদ্ধতি, যা ম্যাট্রিক্সের **dominant (সবচেয়ে বড় মানের) eigenvalue** ও তার eigenvector বের করে।

**ভুল অপশন:**

- ক) Gauss elimination: রৈখিক সমীকরণ জোট সমাধান।
- গ) Newton interpolation: interpolation (মধ্যবর্তী মান নির্ণয়)।
- ঘ) Trapezoidal rule: numerical integration।

---

### ৬৪. Direct Memory Access allows:

- **ক. CPU to execute instructions while I/O transfers data directly to memory** ✅
- খ. Only CPU controlled data transfer
- গ. memory to execute instructions independently
- ঘ. Reduce cache hits

**ব্যাখ্যা:** DMA-তে একটি DMA controller CPU-কে না জড়িয়েই I/O device ও main memory-র মধ্যে ডেটা স্থানান্তর করে। ফলে CPU ওই সময়ে অন্য instruction চালাতে পারে। স্থানান্তর শুরু ও শেষে CPU শুধু controller-কে নির্দেশ দেয় ও interrupt পায়।

**ভুল অপশন:**

- খ) CPU-নিয়ন্ত্রিত স্থানান্তর হলো programmed I/O, DMA-র উল্টো।
- গ) Memory নিজে instruction চালায় না।
- ঘ) DMA-র কাজ cache hit কমানো নয়।

---

### ৬৫. **\_** replaces the page that has not been used for the longest time:

- ক. MRU
- **খ. LRU** ✅
- গ. FIFO
- ঘ. LIFO

**ব্যাখ্যা:** LRU (Least Recently Used) সেই পেজ সরায় যা সবচেয়ে দীর্ঘ সময় ধরে ব্যবহৃত হয়নি। এটি locality principle-এর উপর নির্ভরশীল।

**ভুল অপশন:**

- ক) MRU: সবচেয়ে সম্প্রতি ব্যবহৃত পেজ সরায়।
- গ) FIFO: যে পেজ সবচেয়ে আগে memory-তে এসেছে তা সরায়, ব্যবহারের সময় দেখে না।
- ঘ) LIFO: সবশেষে আসা পেজ আগে সরায়।

---

### ৬৬. Cache hit rate=80%; cache access time=5 ns; memory access time=50 ns. Then, effective access time (in ns):

- **ক. 15** ✅
- খ. 45
- গ. 50
- ঘ. 55

**ব্যাখ্যা:** Effective Access Time (EAT) হলো hit ও miss-এর গড় সময়। Miss হলে আগে cache দেখা হয়, তারপর memory, তাই miss-এর সময় = cache time + memory time।

**সমাধান:**

- Hit rate H = 0.8, miss rate = 0.2
- EAT = H × t_cache + (1 − H) × (t_cache + t_mem)
- EAT = 0.8 × 5 + 0.2 × (5 + 50)
- EAT = 4 + 0.2 × 55 = 4 + 11 = **15 ns**

⚠️ **নোট:** যদি cache ও memory **একসাথে (parallel)** দেখা হয়, তবে সূত্র হবে 0.8×5 + 0.2×50 = 14 ns। এটি কোনো অপশনে নেই, তাই প্রশ্নকর্তা hierarchical (sequential) মডেল ধরেছেন এবং উত্তর **15**।

**ভুল অপশন:**

- খ) 45, গ) 50, ঘ) 55: এগুলো miss-এর সময়ের কাছাকাছি মান। Hit rate ৮০% হওয়ায় গড় সময় 5 ns-এর অনেক কাছাকাছি, 50 ns-এর নয়।

---

### ৬৭. Which one is false with respect to a VLAN?

- ক. Provides a logical separation on Layer 2
- খ. Improves security
- গ. VLAN tag can distinguish traffic
- **ঘ. Increases network management complexity** ✅

**ব্যাখ্যা:** VLAN (Virtual LAN) একটি physical নেটওয়ার্ককে logical ভাগে ভাগ করে Layer 2-তে আলাদা broadcast domain বানায়। এর সুবিধা: নিরাপত্তা বাড়ে, broadcast traffic কমে, ব্যবহারকারী সরালে ক্যাবল না বদলে সেটিং বদলালেই চলে। 802.1Q tag দিয়ে frame কোন VLAN-এর তা চেনা যায়।

⚠️ **নোট:** VLAN কনফিগার করতে কিছু বাড়তি সেটআপ লাগে, তাই কিছুটা যুক্তি দেওয়া যায় যে জটিলতা বাড়ে। তবে সাধারণত VLAN-কে নেটওয়ার্ক ব্যবস্থাপনা **সহজ** করার প্রযুক্তি হিসেবেই ধরা হয়। তাই "increases complexity" বক্তব্যটিকেই ভুল ধরা হয়, এবং উত্তর ঘ।

**ভুল অপশন (এগুলো সত্য বক্তব্য):**

- ক) VLAN Layer 2-তে logical বিভাজন দেয়।
- খ) আলাদা VLAN-এর traffic আলাদা থাকায় নিরাপত্তা বাড়ে।
- গ) 802.1Q VLAN tag দিয়ে traffic আলাদা করা যায়।

---

### ৬৮. Which data structure allows insertion at one end and deletion at the other end?

- ক. Stack
- খ. Tree
- **গ. Queue** ✅
- ঘ. Graph

**ব্যাখ্যা:** Queue FIFO নীতিতে চলে: এক প্রান্তে (rear) ঢোকানো হয় (enqueue), অন্য প্রান্ত (front) থেকে সরানো হয় (dequeue)।

**ভুল অপশন:**

- ক) Stack: ঢোকানো ও সরানো একই প্রান্তে (top), LIFO।
- খ), ঘ) Tree ও Graph রৈখিক "দুই প্রান্ত" ধারণার কাঠামো নয়।

---

### ৬৯. What is the output of the following C code?

```c
#include<stdio.h>
int main(){
    int arr[5] = {1,2,3,4,5};
    int *p = (arr+2);
    printf("%d", p[-1]);
    return 0;
}
```

- **ক. 2** ✅
- খ. 3
- গ. Undefined behavior
- ঘ. Compilation error

**ব্যাখ্যা:** C-তে `p[i]` মানে `*(p + i)`। Pointer-এ ঋণাত্মক index বৈধ, যদি ফল একই array-এর সীমার মধ্যে থাকে।

**সমাধান:**

- `arr + 2` = `&arr[2]`, তাই `p` ইঙ্গিত করে `arr[2]`-তে (মান 3)
- `p[-1]` = `*(p − 1)` = `arr[1]` = **2**
- আউটপুট: **2**

**ভুল অপশন:**

- খ) 3 হতো `p[0]` ছাপালে।
- গ) Undefined behavior হতো যদি ফল array-এর বাইরে যেত। এখানে arr[1] সীমার ভেতরে।
- ঘ) কোড সিনট্যাক্সগতভাবে সঠিক, compile হয়।

---

### ৭০. Which one is true for a B+ tree?

- ক. Internal stores data
- **খ. Leaf stores data** ✅
- গ. Not sorted
- ঘ. Slow retrieval

**ব্যাখ্যা:** B+ tree-তে প্রকৃত ডেটা (বা ডেটার পয়েন্টার) শুধু **leaf node**-এ থাকে। Internal node-এ থাকে শুধু পথ দেখানোর key। সব leaf একটি linked list-এ যুক্ত থাকে, তাই range query দ্রুত হয়। এটি balanced ও sorted, অনুসন্ধান O(log n)। ডেটাবেস index-এ বহুল ব্যবহৃত।

**ভুল অপশন:**

- ক) Internal node ডেটা রাখে না, শুধু key রাখে (এটি B-tree-র সাথে পার্থক্য)।
- গ) B+ tree sorted।
- ঘ) Retrieval দ্রুত (O(log n))।

---

### ৭১. In virtual memory, TLB is used to:

- ক. Store instructions
- খ. Control transfers
- গ. Handle cache misses
- **ঘ. translate virtual address to physical address quickly** ✅

**ব্যাখ্যা:** TLB (Translation Lookaside Buffer) একটি ছোট দ্রুত hardware cache, যা সাম্প্রতিক virtual→physical address রূপান্তরের (page table entry) তথ্য রাখে। TLB hit হলে memory-তে page table দেখার দরকার পড়ে না, ফলে রূপান্তর দ্রুত হয়।

**ভুল অপশন:**

- ক) Instruction রাখে instruction cache।
- খ) Control transfer-এর সাথে সম্পর্ক নেই।
- গ) Cache miss সামলানো memory hierarchy-র কাজ, TLB-র নয়।

---

### ৭২. **\_** sort uses a divide and conquer approach?

- ক. Insertion
- **খ. Quick** ✅
- গ. Bubble
- ঘ. Selection

**ব্যাখ্যা:** Quick sort একটি pivot বেছে array-কে দুই ভাগে (pivot-এর ছোট ও বড়) ভাগ করে, তারপর প্রতিটি ভাগ recursively sort করে। এটি divide and conquer। (Merge sort-ও এ ধরনের, তবে এটি অপশনে নেই।)

**ভুল অপশন:** Insertion, Bubble ও Selection sort তিনটিই সরল iterative পদ্ধতি, যাদের জটিলতা O(n²)।

---

### ৭৩. **\_** is used to store web addresses for future use?

- ক. Routing
- খ. DNS resolution
- **গ. Caching** ✅
- ঘ. ARP

**ব্যাখ্যা:** Caching পূর্বে খোঁজা তথ্য (যেমন ওয়েবসাইটের IP address) অস্থায়ীভাবে জমা রাখে, যাতে পরের বার একই অনুরোধ দ্রুত মেটানো যায়। উদাহরণ: browser cache, DNS cache।

⚠️ **নোট:** প্রশ্নটি অস্পষ্ট। DNS resolution (খ) নাম থেকে IP বের করার **প্রক্রিয়া**, জমা রাখার পদ্ধতি নয়। "store ... for future use" বাক্যাংশ caching-এর সাথেই মেলে, তাই গ।

**ভুল অপশন:**

- ক) Routing: packet-এর পথ নির্ধারণ।
- খ) DNS resolution: domain name থেকে IP address বের করা, সংরক্ষণ নয়।
- ঘ) ARP: IP address থেকে MAC address বের করা।

---

### ৭৪. Consider 3 processes (P1, P2, P3) and 2 resources (R1, R2). If P1 holds R1 & requests R2, P2 holds R2 & requests R1, what is the minimum number of additional resource units of R1 or R2 needed to the deadlock assuming no preemption?

- ক. 0 unit
- **খ. 1 unit of R1 or 1 unit of R2** ✅
- গ. 2 units 1 of R1 & 1 of R2
- ঘ. Not enough information

**ব্যাখ্যা:** P1 ও P2 একে অপরের ধরা resource চাইছে, এটি **circular wait**, অর্থাৎ deadlock। Preemption নেই, তাই কেউ resource ছাড়বে না। কোনো একটি resource-এর **একটি অতিরিক্ত unit** যোগ করলেই চক্র ভাঙে।

**সমাধান:**

- ধরি R2-এর ১টি নতুন unit যোগ হলো। P1 সেটি পেয়ে কাজ শেষ করে, তারপর R1 ছেড়ে দেয়। এখন P2 R1 পায় এবং শেষ করে। Deadlock কাটল।
- একইভাবে R1-এর ১টি unit যোগ করলে P2 আগে এগোতে পারে।
- অতএব ন্যূনতম **১ unit (R1 অথবা R2)**।
- P3 এই deadlock-এর অংশ নয়।

⚠️ **নোট:** প্রশ্নের মাঝে "174" লেখাটি ছাপার ত্রুটি। এছাড়া প্রশ্নে ধরে নেওয়া হয়েছে P1, P2-এর চাওয়ার সময় কোনো free unit নেই (নইলে deadlock হতো না), তাই ঘ) "Not enough information" গ্রহণযোগ্য নয়।

**ভুল অপশন:**

- ক) 0 unit হলে deadlock থেকেই যায়।
- গ) 2 unit দরকার নেই, ১টিই যথেষ্ট (ন্যূনতম প্রশ্ন)।
- ঘ) পূর্বোক্ত যুক্তিতে তথ্য যথেষ্ট।

---

### ৭৫. In an array-based implementation of a complete binary tree, what is the index of the left child of a node at index i (assuming zero-based indexing)?

- ক. 2i
- **খ. 2i+1** ✅
- গ. i+1
- ঘ. i−1

**ব্যাখ্যা:** Zero-based index-এ:

- Left child = **2i + 1**
- Right child = 2i + 2
- Parent = ⌊(i − 1) / 2⌋

উদাহরণ: root (i = 0)-এর left child index 1, right child index 2।

**ভুল অপশন:**

- ক) 2i হলো **one-based** index-এ left child-এর সূত্র।
- গ), ঘ) i+1 ও i−1 পাশের node নির্দেশ করে, child নয়।

---

### ৭৬. The space complexity of a recursive algorithm is mainly due to—

- ক. Input size
- খ. Output size
- গ. Variables inside loops
- **ঘ. Function call stack** ✅

**ব্যাখ্যা:** প্রতিটি recursive call-এর জন্য stack-এ একটি activation record (parameter, local variable, return address) জমা হয়। Recursion-এর গভীরতা যত বেশি, stack-এর space তত বেশি। যেমন factorial(n) এ O(n) stack space লাগে।

**ভুল অপশন:**

- ক) Input size space-এর অংশ হতে পারে, কিন্তু recursion-এর বিশেষ space খরচ stack-এর।
- খ) Output size সব অ্যালগরিদমে আছে, recursion-নির্দিষ্ট নয়।
- গ) Loop-এর variable সাধারণত স্থির পরিমাণ জায়গা নেয়।

---

### ৭৭. **\_** combines multiple signals over a single medium by different time slots.

- ক. FDM
- **খ. TDM** ✅
- গ. WDM
- ঘ. SDM

**ব্যাখ্যা:** TDM (Time Division Multiplexing) একই মাধ্যমকে সময়ের ছোট ছোট slot-এ ভাগ করে, প্রতিটি সংকেতকে নিজের slot-এ পাঠায়।

**ভুল অপশন:**

- ক) FDM: আলাদা **frequency band** ব্যবহার করে।
- গ) WDM: ফাইবারে আলাদা **তরঙ্গদৈর্ঘ্য (wavelength)** ব্যবহার করে।
- ঘ) SDM: আলাদা **স্থানিক পথ** (space) ব্যবহার করে।

---

### ৭৮. During a phone conversation, which mode of communication takes place?

- ক. Simplex
- **খ. Full-duplex** ✅
- গ. Half-duplex
- ঘ. Multiplex

**ব্যাখ্যা:** ফোনে দুই পক্ষ একই সময়ে কথা বলতে ও শুনতে পারে, তাই এটি **full-duplex**।

**ভুল অপশন:**

- ক) Simplex: একমুখী (যেমন টিভি সম্প্রচার)।
- গ) Half-duplex: দুমুখী, কিন্তু একসময়ে একজনই (যেমন walkie-talkie)।
- ঘ) Multiplex যোগাযোগের "মোড" নয়, একাধিক সংকেত একত্র করার কৌশল।

---

### ৭৯. Garbage collection is required in SSD because—

- **ক. SSD cells must be erased before being written** ✅
- খ. SSDs cannot store large files
- গ. SSDs do not support random access
- ঘ. It reduces read latency

**ব্যাখ্যা:** SSD-র NAND flash-এ পুরোনো ডেটার উপর সরাসরি লেখা যায় না। লেখা হয় page (ছোট একক) স্তরে, কিন্তু মোছা (erase) যায় শুধু বড় block স্তরে। তাই ব্যবহৃত ও অবৈধ হয়ে যাওয়া page ধারণ করা block থেকে বৈধ page সরিয়ে block মুছে খালি জায়গা বানাতে হয়। এটিই garbage collection।

**ভুল অপশন:**

- খ) SSD বড় ফাইল রাখতে পারে।
- গ) SSD random access সমর্থন করে, বরং HDD-র চেয়ে ভালো।
- ঘ) Garbage collection লেখার কর্মক্ষমতা ও জায়গা পরিচালনার জন্য, read latency কমানোর জন্য নয়।

---

### ৮০. **\_** uses disk space as an extension of RAM.

- ক. Caching
- **খ. Virtual memory** ✅
- গ. Spooling
- ঘ. Buffer

**ব্যাখ্যা:** Virtual memory ডিস্কের একটি অংশ (swap space বা page file) RAM-এর বর্ধিত অংশ হিসেবে ব্যবহার করে, ফলে প্রোগ্রাম প্রকৃত RAM-এর চেয়ে বড় হলেও চালানো যায়।

**ভুল অপশন:**

- ক) Caching: দ্রুত, ছোট memory-তে ঘন ঘন ব্যবহৃত ডেটা রাখা।
- গ) Spooling: I/O (যেমন printer) কাজ ডিস্কে সারিবদ্ধ করে রাখা।
- ঘ) Buffer: ডেটা স্থানান্তরের সময় অস্থায়ী সংরক্ষণ।

---

### ৮১. Newton's backward interpolation formula is most effective when

- ক. Interpolation point is near the beginning
- **খ. Interpolation point is near the end** ✅
- গ. Data points are not equally spaced
- ঘ. Function is non-polynomial

**ব্যাখ্যা:** Newton's backward formula সারণির **শেষ** মান থেকে শুরু করে backward difference (∇) ব্যবহার করে। তাই যে মান নির্ণয় করতে হবে তা সারণির শেষ প্রান্তের কাছে হলে এটি সবচেয়ে কার্যকর। সূত্র: y = yₙ + p∇yₙ + p(p+1)/2! ∇²yₙ + …, যেখানে p = (x − xₙ)/h। বিন্দুগুলো সমদূরবর্তী হতে হয়।

**ভুল অপশন:**

- ক) শুরুর কাছে হলে **Newton's forward formula** কার্যকর।
- গ) অসমদূরবর্তী বিন্দুর জন্য Lagrange বা Newton's divided difference।
- ঘ) Polynomial হওয়া বা না হওয়া এই সিদ্ধান্তের মানদণ্ড নয়।

---

### ৮২. **\_** testing is performed without knowledge of internal implementation.

- ক. White box
- **খ. Black box** ✅
- গ. Unit
- ঘ. Integration

**ব্যাখ্যা:** Black box testing-এ ভেতরের কোড বা গঠন না জেনে শুধু ইনপুট ও প্রত্যাশিত আউটপুট দেখে সফটওয়্যারের কার্যকারিতা যাচাই করা হয়। কৌশল: equivalence partitioning, boundary value analysis।

**ভুল অপশন:**

- ক) White box: অভ্যন্তরীণ কোড ও লজিক জেনে পরীক্ষা।
- গ), ঘ) Unit ও Integration হলো পরীক্ষার **স্তর**, জ্ঞানের ধরন নয়।

---

### ৮৩. Which criterion is NOT mandatory for solving critical section problems?

- ক. Mutual exclusion
- খ. Bounded waiting
- **গ. Circular waiting** ✅
- ঘ. Progress

**ব্যাখ্যা:** Critical section সমস্যার সমাধানে তিনটি শর্ত মানতেই হয়:

- **Mutual exclusion:** একসময়ে একটি process-ই critical section-এ থাকবে।
- **Progress:** critical section খালি থাকলে অপেক্ষমাণ process-এর সিদ্ধান্ত অনির্দিষ্টকাল আটকে থাকবে না।
- **Bounded waiting:** কোনো process অনির্দিষ্টকাল অপেক্ষা করবে না।

**Circular waiting** হলো deadlock-এর চারটি শর্তের একটি। এটি critical section সমাধানের শর্ত নয়।

**ভুল অপশন:** ক), খ) ও ঘ) তিনটিই বাধ্যতামূলক শর্ত।

---

### ৮৪. For a connected acyclic graph with v vertices and e edges:

- ক. v = e
- **খ. v = e + 1** ✅
- গ. v = e + 2
- ঘ. v + 1 = e

**ব্যাখ্যা:** Connected ও acyclic গ্রাফ হলো **tree**। v টি vertex-এর tree-তে সবসময় ঠিক v − 1টি edge থাকে।

**সমাধান:**

- e = v − 1 ⇒ **v = e + 1**
- যাচাই: v = 4 হলে e = 3 (যেমন একটি সরল রেখা বা star)

**ভুল অপশন:**

- ক) v = e হলে গ্রাফে একটি cycle থাকে (যেমন একটি বৃত্ত গ্রাফ)।
- গ) v = e + 2 হলে গ্রাফ দুটি আলাদা উপাদানে বিভক্ত (forest), connected নয়।
- ঘ) e = v + 1 হলে একাধিক cycle থাকে।

---

### ৮৫. Thrashing occurs when—

- ক. Page size too small
- খ. CPU utilization very high
- **গ. System spends more time swapping pages than executing processes** ✅
- ঘ. Page table too large

**ব্যাখ্যা:** Thrashing-এ প্রক্রিয়াগুলোর যথেষ্ট frame না থাকায় ঘন ঘন page fault হয়। সিস্টেম বেশিরভাগ সময় পেজ swap in/out করতে ব্যয় করে, ফলে CPU-র উপযোগী কাজ কমে যায় এবং **CPU utilization কমে যায়**। সমাধান: working-set model, page-fault frequency নিয়ন্ত্রণ, multiprogramming-এর মাত্রা কমানো।

**ভুল অপশন:**

- ক) ছোট page size সরাসরি thrashing-এর সংজ্ঞা নয়।
- খ) Thrashing-এ CPU utilization বেশি নয়, কমে যায়।
- ঘ) বড় page table আলাদা সমস্যা (memory overhead)।

---

### ৮৬. Interrupt-driven I/O is preferred over polling because it

- **ক. Reduces CPU idle time** ✅
- খ. Is slower
- গ. Uses more memory
- ঘ. Requires fewer devices

**ব্যাখ্যা:** Polling-এ CPU বারবার device-এর অবস্থা পরীক্ষা করে সময় নষ্ট করে (busy-waiting)। Interrupt-driven I/O-তে device প্রস্তুত হলেই CPU-কে interrupt পাঠায়, এর মধ্যে CPU অন্য কাজ করতে পারে। ফলে CPU-র অপচয়িত সময় কমে।

⚠️ **নোট:** সূক্ষ্মভাবে বললে polling-এ CPU "idle" নয়, **busy-wait** করে সময় নষ্ট করে। প্রশ্নের "reduces CPU idle time" দিয়ে এই অপচয় কমানোই বোঝানো হয়েছে। অন্য তিনটি অপশন স্পষ্টভাবে ভুল, তাই উত্তর ক।

**ভুল অপশন:**

- খ) Interrupt-driven I/O ধীর নয়, সাধারণত দক্ষ।
- গ) বেশি memory লাগা এর কারণ নয়।
- ঘ) Device সংখ্যার সাথে এর সম্পর্ক নেই।

---

### ৮৭. A 16-bit address bus can address a maximum of how many KB memory?

- ক. 16
- খ. 32
- **গ. 64** ✅
- ঘ. 128

**ব্যাখ্যা:** n-বিট address bus সর্বোচ্চ 2ⁿ টি আলাদা location address করতে পারে। Byte-addressable memory ধরলে প্রতি location-এ ১ byte।

**সমাধান:**

- 2¹⁶ = 65,536 bytes
- 65,536 / 1024 = **64 KB**

**ভুল অপশন:**

- ক) 16 KB = 2¹⁴ বাইট (14-বিট bus)।
- খ) 32 KB = 2¹⁵ বাইট (15-বিট bus)।
- ঘ) 128 KB = 2¹⁷ বাইট (17-বিট bus)।

---

### ৮৮. In Agile, backlog refers to the list of

- ক. Completed tasks
- খ. Pending bugs
- **গ. Features and tasks to be developed** ✅
- ঘ. Rejected requirements

**ব্যাখ্যা:** Agile (Scrum)-এ **Product backlog** হলো অগ্রাধিকার অনুযায়ী সাজানো তালিকা, যাতে ভবিষ্যতে তৈরি করার মতো ফিচার, কাজ, উন্নয়ন ও সংশোধন থাকে। প্রতি sprint-এর জন্য এর অংশ নিয়ে **Sprint backlog** তৈরি হয়।

**ভুল অপশন:**

- ক) সম্পন্ন কাজ "Done" বা increment হিসেবে গণ্য, backlog নয়।
- খ) Bug backlog-এ থাকতে পারে, কিন্তু সংজ্ঞা শুধু bug-এর তালিকা নয়।
- ঘ) বাতিল requirement backlog-এ রাখা হয় না।

---

### ৮৯. The register SP in a microprocessor—

- ক. Points to first instruction
- **খ. Points to top of the stack** ✅
- গ. Holds base address of memory
- ঘ. Holds I/O port address

**ব্যাখ্যা:** SP (Stack Pointer) stack-এর শীর্ষের (top) memory address ধরে রাখে। PUSH, POP, CALL ও RET instruction-এ এর মান বদলায়।

**ভুল অপশন:**

- ক) পরবর্তী instruction-এর ঠিকানা রাখে PC (Program Counter)।
- গ) Base address রাখে base বা segment register।
- ঘ) I/O port address রাখে নির্দিষ্ট instruction-এর operand বা DX জাতীয় register।

---

### ৯০. A priority queue is best implemented using—

- ক. Stack
- খ. Linked list
- গ. Array
- **ঘ. Heap** ✅

**ব্যাখ্যা:** Heap দিয়ে priority queue-র insert ও extract-min/max দুটোই O(log n) সময়ে হয়, আর peek O(1)। সাজানো বা অসাজানো array/linked list-এ অন্তত একটি operation O(n) লাগে।

**ভুল অপশন:**

- ক) Stack LIFO, priority মানে না।
- খ), গ) Linked list ও array দিয়ে বানানো যায়, কিন্তু কম দক্ষ।

---

### ৯১. Which loop is exit-controlled?

- ক. for loop
- খ. while loop
- **গ. do-while loop** ✅
- ঘ. None

**ব্যাখ্যা:** Exit-controlled loop-এ condition লুপের **শেষে** পরীক্ষা হয়, তাই body অন্তত একবার চলে। `do { ... } while (cond);` এমনই।

**ভুল অপশন:** `for` ও `while` হলো **entry-controlled** loop, যেখানে condition আগে পরীক্ষা হয়, তাই শুরুতেই শর্ত মিথ্যা হলে body একবারও চলে না।

---

### ৯২. Which one is NOT an ACID property?

- **ক. Authenticity** ✅
- খ. Consistency
- গ. Isolation
- ঘ. Durability

**ব্যাখ্যা:** ACID = **A**tomicity, **C**onsistency, **I**solation, **D**urability। "Authenticity" ACID-এর অংশ নয়।

**ভুল অপশন:** Consistency (বৈধ অবস্থা বজায় রাখা), Isolation (transaction-গুলো পরস্পরকে প্রভাবিত না করা) ও Durability (commit-এর পর স্থায়িত্ব) তিনটিই ACID-এর অংশ।

---

### ৯৩. Which protocol is used to send email?

- ক. FTP
- **খ. SMTP** ✅
- গ. HTTP
- ঘ. SNMP

**ব্যাখ্যা:** SMTP (Simple Mail Transfer Protocol) ইমেইল **পাঠানোর** প্রোটোকল (port 25, submission-এ 587)। ইমেইল **গ্রহণ** করতে POP3 বা IMAP লাগে।

**ভুল অপশন:**

- ক) FTP: ফাইল স্থানান্তর।
- গ) HTTP: ওয়েব পেজ স্থানান্তর।
- ঘ) SNMP: নেটওয়ার্ক ডিভাইস পর্যবেক্ষণ ও ব্যবস্থাপনা।

---

### ৯৪. Intel 8086 (16 bit) microprocessor has a **\_** bit address bus.

- ক. 8
- খ. 16
- **গ. 20** ✅
- ঘ. 32

**ব্যাখ্যা:** Intel 8086-এর data bus ১৬ বিটের, কিন্তু address bus **২০ বিটের**, তাই এটি 2²⁰ = 1 MB memory address করতে পারে। ১৬-বিট register দিয়ে ২০-বিট address তৈরি হয় segmentation পদ্ধতিতে: Physical address = Segment × 16 + Offset।

**ঘটনাক্রম:** 8086 Intel ১৯৭৮ সালে বাজারে আনে।

**ভুল অপশন:**

- ক) 8 বিট: 8-bit প্রসেসরের data bus।
- খ) 16 বিট: 8086-এর data bus (এবং 8085-এর address bus)।
- ঘ) 32 বিট: 80386-এর মতো পরবর্তী প্রসেসরের।

---

### ৯৫. Which of the following is a guided transmission medium?

- ক. Radiowave
- খ. Microwave
- **গ. Coaxial cable** ✅
- ঘ. Infrared

**ব্যাখ্যা:** Guided (bounded) মাধ্যমে সংকেত নির্দিষ্ট ভৌত পথ (তার বা ফাইবার) ধরে চলে। উদাহরণ: twisted pair, coaxial cable, optical fiber।

**ভুল অপশন:** Radiowave, Microwave ও Infrared তিনটিই **unguided (wireless)** মাধ্যম, যেখানে সংকেত বাতাসে বা মহাশূন্যে ছড়ায়।

---

### ৯৬. Simplified version of Boolean function F = Ȳ (X + X̄Y) is—

- ক. X̄·Y
- **খ. X·Ȳ** ✅
- গ. X̄·Ȳ
- ঘ. X·Y

**ব্যাখ্যা:** Boolean algebra-র বিধি ব্যবহার করে রাশিটি সরল করা হলো (Ȳ = Y', X̄ = X')।

**সমাধান:**

- F = Y'(X + X'Y)
- Distribute করে: F = Y'X + Y'X'Y
- Y'·Y = 0, তাই দ্বিতীয় পদ 0
- F = **XY'**
- বিকল্প পথ: absorption বিধি A + A'B = A + B অনুযায়ী X + X'Y = X + Y; তাহলে F = Y'(X + Y) = XY' + YY' = XY'
- Truth table যাচাই: F = 1 শুধু X = 1, Y = 0 হলে (অন্য তিন ক্ষেত্রে 0), যা XY'-এর সাথে মেলে।

⚠️ **নোট:** স্ক্যান করা PDF-এ complement-এর দাগ (underline) অস্পষ্ট। আমি রাশিটিকে F = Ȳ(X + X̄Y) হিসেবে পড়েছি। এই পাঠে সরল রূপ XȲ আসে, যা PDF-এর উত্তরের সাথে মেলে, তাই পাঠটি সঠিক বলে ধরা যায়। আপনার মূল বইয়ে দাগ ভিন্ন হলে জানাবেন।

**ভুল অপশন:**

- ক) X'Y: শুধু X=0, Y=1 হলে 1, কিন্তু সেখানে F = 0।
- গ) X'Y': শুধু X=0, Y=0 হলে 1, কিন্তু সেখানে F = 0।
- ঘ) XY: শুধু X=1, Y=1 হলে 1, কিন্তু সেখানে F = 0।

---

### ৯৭. Assuming P1, P2, P3 have burst time (in ms) 6, 8, 3, respectively, which statement is true about SJF?

- **ক. Waiting time of P1 is 3 ms** ✅
- খ. Turnaround time of P3 is 9 ms
- গ. Waiting time of P2 is 6 ms
- ঘ. Turnaround time of P1 is 8 ms

**ব্যাখ্যা:** SJF (Shortest Job First)-এ সবচেয়ে ছোট burst time-এর process আগে চলে। সূত্র: Turnaround time = Completion − Arrival, Waiting time = Turnaround − Burst।

**সমাধান:** (সব process-এর arrival time 0 ধরে)

- SJF ক্রম: P3 (3) → P1 (6) → P2 (8)
- Gantt chart: P3 [0–3], P1 [3–9], P2 [9–17]

| Process | Burst | Completion | Turnaround | Waiting |
| ------- | ----- | ---------- | ---------- | ------- |
| P3      | 3     | 3          | 3          | 0       |
| P1      | 6     | 9          | 9          | 3       |
| P2      | 8     | 17         | 17         | 9       |

- গড় waiting time = (0 + 3 + 9) / 3 = 4 ms
- অতএব P1-এর waiting time = **3 ms**

⚠️ **নোট:** প্রশ্নে arrival time দেওয়া নেই। সাধারণ রীতি অনুযায়ী সবগুলো t = 0 সময়ে এসেছে ধরা হয়েছে।

**ভুল অপশন:**

- খ) P3-এর turnaround 3 ms, 9 নয়।
- গ) P2-এর waiting time 9 ms, 6 নয়।
- ঘ) P1-এর turnaround 9 ms, 8 নয়।

---

### ৯৮. OS system calls on files perform—

- **ক. Read, Write, Delete** ✅
- খ. Write, Print, Reposition
- গ. Delete, Truncate, Sort
- ঘ. Modify, Update, Sort

**ব্যাখ্যা:** ফাইল-সংক্রান্ত প্রধান system call: create, open, close, read, write, delete, reposition (seek), get/set attributes। অপশনগুলোর মধ্যে ক) পুরোটাই বৈধ।

**ভুল অপশন:**

- খ) "Print" কোনো file system call নয় (printing আলাদা I/O কাজ)।
- গ), ঘ) "Sort", "Modify" ও "Update" OS-এর file system call নয়, এগুলো অ্যাপ্লিকেশন স্তরের কাজ।

---

### ৯৯. A page fault occurs when—

- ক. Deadlock happens
- খ. Segmentation starts
- গ. Page is found in memory
- **ঘ. Page is not found in memory** ✅

**ব্যাখ্যা:** Process যে পেজ চাইছে তা main memory-তে না থাকলে (page table-এ valid bit 0) page fault হয়। তখন OS ডিস্ক থেকে পেজটি একটি খালি frame-এ এনে page table হালনাগাদ করে এবং instruction আবার চালায়।

**ভুল অপশন:**

- ক) Deadlock আলাদা ঘটনা (resource আটকে থাকা)।
- খ) Segmentation শুরু হওয়া page fault-এর কারণ নয়।
- গ) পেজ memory-তে থাকলে হয় **page hit**, fault নয়।

---

### ১০০. Alpha-Beta pruning can—

- ক. Change minimax result
- **খ. Only reduce number of nodes evaluated** ✅
- গ. Increase depth of tree
- ঘ. Increase branching factor

**ব্যাখ্যা:** Alpha-beta pruning minimax-এর একটি অপ্টিমাইজেশন। যেসব শাখা চূড়ান্ত সিদ্ধান্তকে প্রভাবিত করতে পারে না, সেগুলো বাদ দিয়ে মূল্যায়ন করা node-এর সংখ্যা কমায়। **ফল minimax-এর ফলের সঠিক সমান থাকে।** সর্বোত্তম ক্ষেত্রে জটিলতা O(b^(d/2))।

**ভুল অপশন:**

- ক) Pruning ফলাফল বদলায় না।
- গ) গাছের depth এটি বাড়ায় না। (সময় বাঁচলে বরং বেশি depth পর্যন্ত খোঁজা সম্ভব হয়, কিন্তু pruning নিজে depth বাড়ায় না।)
- ঘ) Branching factor সমস্যার বৈশিষ্ট্য, pruning তা বদলায় না।

---
