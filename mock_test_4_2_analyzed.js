const mockTestData4_2_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "सफल आणि दियाने गुप्तपणे संदेश लेखनासाठी संकेतप्रणाली तयार केली आहे. ती प्रणाली पुढील नियमांवर आधारित आहे. (a) A ते M पर्यंतच्या प्रत्येक अक्षराऐवजी N ते Z पर्यंतची समक्रम अक्षरे ठेवायची. याप्रमाणे A ऐवजी N, B ऐवजी O इत्यादी आणि N ते Z अक्षराऐवजी A ते M अक्षरे उलट्या क्रमाने मांडून समक्रम अक्षरे ठेवायची. याप्रमाणे N ऐवजी M, Z ऐवजी A याप्रमाणे. (b) प्रक्रिया 1 मधून मिळालेल्या प्रत्येक अक्षराऐवजी वर्णाक्षरे उलट्या क्रमाने मांडून त्या प्रत्येक अक्षराचा दोन अंकी क्रम तेथे ठेवायचा. म्हणजे A होईल 26, B होईल 25, X होईल 03, याप्रमाणे. या प्रणालीनुसार INVESTOR या शब्दाचा संकेत निवडा.",
    "question_english": "Safal and Dia formulated a coding system for texting the messages secretly. This system is based on following rules. (a) Replace each letter from A to M by equivalent letters from N to Z; thus A is replaced by N, B is replaced by O and continued. And letters from N to Z are replaced by equivalent letters by arranging A to M in reverse order; thus N is replaced by M, Z is replaced by A and continued. (b) Replace each letter resulting from operation 1 by a two digit number according to its place in the alphabets arranged in reversed order using; so A becomes 26, B becomes 25, X becomes 03 and so on. Select the coded form of word INVESTOR according to this system.",
    "options_marathi": [
      "0514220919201518",
      "0514210919211518",
      "0513220919201519",
      "0514211019201318"
    ],
    "options_english": [
      "0514220919201518",
      "0514210919211518",
      "0513220919201519",
      "0514211019201318"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Coding-Decoding",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The coding system involves two steps. First, letters A-M are replaced by N-Z (ROT13), and N-Z are replaced by A-M in reverse order (N->M, O->L, ..., Z->A). Second, the resulting letters are converted to a two-digit number based on their position in the reversed alphabet (A=26, B=25, ..., Z=01). Let's apply this to INVESTOR:\n1.  I (9th letter, A-M range) -> V (22nd letter). In reversed alphabet, V is 27-22 = 5 (05).\n2.  N (14th letter, N-Z range) -> M (13th letter). In reversed alphabet, M is 27-13 = 14 (14).\n3.  V (22nd letter, N-Z range) -> E (5th letter). In reversed alphabet, E is 27-5 = 22 (22).\n4.  E (5th letter, A-M range) -> R (18th letter). In reversed alphabet, R is 27-18 = 9 (09).\n5.  S (19th letter, N-Z range) -> H (8th letter). In reversed alphabet, H is 27-8 = 19 (19).\n6.  T (20th letter, N-Z range) -> G (7th letter). In reversed alphabet, G is 27-7 = 20 (20).\n7.  O (15th letter, N-Z range) -> L (12th letter). In reversed alphabet, L is 27-12 = 15 (15).\n8.  R (18th letter, N-Z range) -> I (9th letter). In reversed alphabet, I is 27-9 = 18 (18).\nCombining these, INVESTOR becomes 0514220919201518.",
    "explanation_marathi": "संकेतप्रणालीमध्ये दोन टप्पे आहेत. प्रथम, A-M अक्षरे N-Z (ROT13) ने बदलली जातात आणि N-Z अक्षरे A-M ने उलट्या क्रमाने (N->M, O->L, ..., Z->A) बदलली जातात. दुसरे, परिणामी अक्षरे उलट्या वर्णमालेतील त्यांच्या स्थानानुसार दोन-अंकी संख्येत रूपांतरित केली जातात (A=26, B=25, ..., Z=01). INVESTOR शब्दावर हे नियम लागू करूया:\n1.  I (9 वे अक्षर, A-M श्रेणी) -> V (22 वे अक्षर). उलट्या वर्णमालेत, V हे 27-22 = 5 (05) आहे.\n2.  N (14 वे अक्षर, N-Z श्रेणी) -> M (13 वे अक्षर). उलट्या वर्णमालेत, M हे 27-13 = 14 (14) आहे.\n3.  V (22 वे अक्षर, N-Z श्रेणी) -> E (5 वे अक्षर). उलट्या वर्णमालेत, E हे 27-5 = 22 (22) आहे.\n4.  E (5 वे अक्षर, A-M श्रेणी) -> R (18 वे अक्षर). उलट्या वर्णमालेत, R हे 27-18 = 9 (09) आहे.\n5.  S (19 वे अक्षर, N-Z श्रेणी) -> H (8 वे अक्षर). उलट्या वर्णमालेत, H हे 27-8 = 19 (19) आहे.\n6.  T (20 वे अक्षर, N-Z श्रेणी) -> G (7 वे अक्षर). उलट्या वर्णमालेत, G हे 27-7 = 20 (20) आहे.\n7.  O (15 वे अक्षर, N-Z श्रेणी) -> L (12 वे अक्षर). उलट्या वर्णमालेत, L हे 27-12 = 15 (15) आहे.\n8.  R (18 वे अक्षर, N-Z श्रेणी) -> I (9 वे अक्षर). उलट्या वर्णमालेत, I हे 27-9 = 18 (18) आहे.\nया सर्वांना एकत्र केल्यास, INVESTOR हा शब्द 0514220919201518 असा होतो.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "0514220919201518",
        "option_marathi": "0514220919201518",
        "is_correct": true,
        "reason": "Applying the given two-step coding rules to each letter of 'INVESTOR' correctly yields this sequence of numbers. Each letter is first transformed based on its position (A-M or N-Z) and then converted to its reversed alphabetical position number."
      },
      {
        "option_number": 2,
        "option_english": "0514210919211518",
        "option_marathi": "0514210919211518",
        "is_correct": false,
        "reason": "This option contains errors in the coded values for some letters (e.g., 'V' is coded as 21 instead of 22, and 'T' is coded as 21 instead of 20), indicating misapplication of the rules or calculation mistakes."
      },
      {
        "option_number": 3,
        "option_english": "0513220919201519",
        "option_marathi": "0513220919201519",
        "is_correct": false,
        "reason": "This option has multiple errors, such as 'N' coded as 13 instead of 14, and 'R' at the end coded as 19 instead of 18, suggesting incorrect application of the reverse alphabet numbering or the initial letter transformation."
      },
      {
        "option_number": 4,
        "option_english": "0514211019201318",
        "option_marathi": "0514211019201318",
        "is_correct": false,
        "reason": "This option also contains several discrepancies from the correct code, for instance, 'V' is 21 instead of 22, 'E' is 10 instead of 09, and 'O' is 13 instead of 15, indicating errors in applying the coding rules."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "जर A + B चा अर्थ A ही B ची आई आहे; A - B चा अर्थ A ही B ची बहीण आहे; A × B चा अर्थ A हे B चे वडील आहेत आणि A ÷ B चा अर्थ A हा B चा भाऊ आहे तर N हा M चा मामा आहे या अर्थाचे विधान निवडा.",
    "question_english": "If A + B means A is the mother of B; A - B means A is the sister of B; A × B means A is the father of B and A ÷ B means A is the brother of B. Then select the statement that means N is the maternal uncle of M.",
    "options_marathi": [
      "N÷P-L+E-M",
      "M-YxP-N+E",
      "N-Y+A+M+E",
      "N÷C+FXM-L"
    ],
    "options_english": [
      "N÷P-L+E-M",
      "M-YxP-N+E",
      "N-Y+A+M+E",
      "N÷C+FXM-L"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "We need to find the expression where N is the maternal uncle of M. This means N is the brother of M's mother. Let's analyze each option:\n1.  **N ÷ P - L + E - M:**\n    *   N ÷ P: N is the brother of P (N is male).\n    *   P - L: P is the sister of L (P is female).\n    *   L + E: L is the mother of E (L is female).\n    *   E - M: E is the sister of M (E is female).\n    *   From this, L is the mother of E and M. P is the sister of L. N is the brother of P. Therefore, N is the brother of L, who is M's mother. This makes N the maternal uncle of M. This option is correct.\n2.  **M - Y × P - N + E:** N + E means N is the mother of E, so N is female. A maternal uncle must be male. This option is incorrect.\n3.  **N - Y + A + M + E:** N - Y means N is the sister of Y, so N is female. A maternal uncle must be male. This option is incorrect.\n4.  **N ÷ C + F × M - L:**\n    *   N ÷ C: N is the brother of C (N is male).\n    *   C + F: C is the mother of F (C is female).\n    *   F × M: F is the father of M (F is male).\n    *   This implies C is M's paternal grandmother, and N is C's brother, making N M's paternal grand-uncle. This option is incorrect.",
    "explanation_marathi": "आपल्याला असे विधान शोधायचे आहे जिथे N हा M चा मामा आहे. याचा अर्थ N हा M च्या आईचा भाऊ आहे. प्रत्येक पर्यायाचे विश्लेषण करूया:\n1.  **N ÷ P - L + E - M:**\n    *   N ÷ P: N हा P चा भाऊ आहे (N पुरुष आहे).\n    *   P - L: P ही L ची बहीण आहे (P स्त्री आहे).\n    *   L + E: L ही E ची आई आहे (L स्त्री आहे).\n    *   E - M: E ही M ची बहीण आहे (E स्त्री आहे).\n    *   यावरून, L ही E आणि M ची आई आहे. P ही L ची बहीण आहे. N हा P चा भाऊ आहे. म्हणून, N हा L चा भाऊ आहे, जी M ची आई आहे. यामुळे N हा M चा मामा होतो. हा पर्याय बरोबर आहे.\n2.  **M - Y × P - N + E:** N + E म्हणजे N ही E ची आई आहे, त्यामुळे N स्त्री आहे. मामा पुरुष असणे आवश्यक आहे. हा पर्याय चुकीचा आहे.\n3.  **N - Y + A + M + E:** N - Y म्हणजे N ही Y ची बहीण आहे, त्यामुळे N स्त्री आहे. मामा पुरुष असणे आवश्यक आहे. हा पर्याय चुकीचा आहे.\n4.  **N ÷ C + F × M - L:**\n    *   N ÷ C: N हा C चा भाऊ आहे (N पुरुष आहे).\n    *   C + F: C ही F ची आई आहे (C स्त्री आहे).\n    *   F × M: F हा M चे वडील आहे (F पुरुष आहे).\n    *   याचा अर्थ C ही M ची आजी आहे आणि N हा C चा भाऊ आहे, त्यामुळे N हा M चा आजोबांचा भाऊ (पaternal grand-uncle) होतो. हा पर्याय चुकीचा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "N÷P-L+E-M",
        "option_marathi": "N÷P-L+E-M",
        "is_correct": true,
        "reason": "N is brother of P. P is sister of L. L is mother of E. E is sister of M. This implies L is mother of M, and N is brother of L. Thus, N is M's maternal uncle."
      },
      {
        "option_number": 2,
        "option_english": "M-YxP-N+E",
        "option_marathi": "M-YxP-N+E",
        "is_correct": false,
        "reason": "In this expression, N+E means N is the mother of E, which makes N female. A maternal uncle must be male, so this option is incorrect."
      },
      {
        "option_number": 3,
        "option_english": "N-Y+A+M+E",
        "option_marathi": "N-Y+A+M+E",
        "is_correct": false,
        "reason": "In this expression, N-Y means N is the sister of Y, which makes N female. A maternal uncle must be male, so this option is incorrect."
      },
      {
        "option_number": 4,
        "option_english": "N÷C+FXM-L",
        "option_marathi": "N÷C+FXM-L",
        "is_correct": false,
        "reason": "N is brother of C. C is mother of F. F is father of M. This makes C M's paternal grandmother and N her brother, thus N is M's paternal grand-uncle, not maternal uncle."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "प्रत्येक मोठी कोंबडी दर दिवशी सारख्या प्रमाणात अन्न खाते आणि लहान कोंबड्यांबाबतही असेच आहे. एक मोठी आणि दोन लहान कोंबड्या एक दिवसात कुक्कुट अन्नाच्या 100 गुटिका खातात. दोन मोठ्या आणि तीन लहान कोंबड्यांना खाण्यासाठी 175 अन्न गुटिका लागतात. या माहितीच्या आधारे दिलेल्या पर्यायांतून चुकीचे विधान निवडा.",
    "question_english": "Each of large chicken consumes equal quantity of food every day and same is the case with the small chickens. One large and two small chickens feed on 100 pellets of chicken food in a day. 175 pellets of food are needed for feeding two large and three small chickens in a day. Select the false statement from options on the basis of this information.",
    "options_marathi": [
      "लहान कोंबडीला 24 तासांपेक्षा थोड्या जास्त काळासाठी खाद्य द्यायला 30 अन्न गुटिका पुरेशा आहेत.",
      "तीन मोठ्या व दहा लहान कोंबड्यांना प्रत्येक दिवशी खाद्य देण्यासाठी 450 अन्न गुटिका लागतील.",
      "मोठ्या कोंबडीला दिवसभराचे खाद्य म्हणून 65 अन्न गुटिका पुरेशा आहेत.",
      "लहान कोंबडीशी तुलना केल्यास मोठी कोंबडी दुपटीने अन्न खाते."
    ],
    "options_english": [
      "Thirty pellets are sufficient to feed one small chicken for little longer duration than 24 hours.",
      "450 pellets are needed for feeding three large and ten small chickens every day.",
      "For feeding one large chicken for a day 65 pellets are sufficient.",
      "Large chicken consumes double quantity of food when compared to small chicken."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Linear Equations / Word Problems",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let L be the number of pellets consumed by one large chicken per day, and S be the number of pellets consumed by one small chicken per day.\nFrom the given information, we can form two linear equations:\n1.  1L + 2S = 100\n2.  2L + 3S = 175\nMultiply equation (1) by 2: 2L + 4S = 200.\nSubtract equation (2) from this new equation: (2L + 4S) - (2L + 3S) = 200 - 175, which simplifies to S = 25.\nSubstitute S = 25 into equation (1): L + 2(25) = 100 => L + 50 = 100 => L = 50.\nSo, a large chicken consumes 50 pellets per day, and a small chicken consumes 25 pellets per day.\nNow let's evaluate each statement:\n1.  'Thirty pellets are sufficient to feed one small chicken for little longer duration than 24 hours.' A small chicken eats 25 pellets in 24 hours. 30 pellets are indeed more than 25, so this statement is TRUE.\n2.  '450 pellets are needed for feeding three large and ten small chickens every day.' This would be 3L + 10S = 3(50) + 10(25) = 150 + 250 = 400 pellets. The statement says 450 pellets, which is incorrect. So, this statement is FALSE.\n3.  'For feeding one large chicken for a day 65 pellets are sufficient.' A large chicken eats 50 pellets per day. 65 pellets are more than 50, so they are sufficient. This statement is TRUE.\n4.  'Large chicken consumes double quantity of food when compared to small chicken.' L = 50, S = 25. Since 50 = 2 * 25, this statement is TRUE.\nTherefore, the false statement is option 2.",
    "explanation_marathi": "मोठ्या कोंबडीने दररोज खाल्लेल्या गोळ्यांची संख्या L मानू आणि लहान कोंबडीने दररोज खाल्लेल्या गोळ्यांची संख्या S मानू.\nदिलेल्या माहितीनुसार, आपण दोन रेखीय समीकरणे तयार करू शकतो:\n1.  1L + 2S = 100\n2.  2L + 3S = 175\nसमीकरण (1) ला 2 ने गुणल्यास: 2L + 4S = 200.\nया नवीन समीकरणातून समीकरण (2) वजा केल्यास: (2L + 4S) - (2L + 3S) = 200 - 175, जे S = 25 असे होते.\nS = 25 हे समीकरण (1) मध्ये ठेवल्यास: L + 2(25) = 100 => L + 50 = 100 => L = 50.\nम्हणून, एक मोठी कोंबडी दररोज 50 गोळ्या खाते आणि एक लहान कोंबडी दररोज 25 गोळ्या खाते.\nआता प्रत्येक विधानाचे मूल्यांकन करूया:\n1.  'लहान कोंबडीला 24 तासांपेक्षा थोड्या जास्त काळासाठी खाद्य द्यायला 30 अन्न गुटिका पुरेशा आहेत.' एक लहान कोंबडी 24 तासांत 25 गोळ्या खाते. 30 गोळ्या 25 पेक्षा जास्त आहेत, त्यामुळे हे विधान सत्य आहे.\n2.  'तीन मोठ्या व दहा लहान कोंबड्यांना प्रत्येक दिवशी खाद्य देण्यासाठी 450 अन्न गुटिका लागतील.' यासाठी 3L + 10S = 3(50) + 10(25) = 150 + 250 = 400 गोळ्या लागतील. विधानात 450 गोळ्या असे म्हटले आहे, जे चुकीचे आहे. त्यामुळे हे विधान असत्य आहे.\n3.  'मोठ्या कोंबडीला दिवसभराचे खाद्य म्हणून 65 अन्न गुटिका पुरेशा आहेत.' एक मोठी कोंबडी दररोज 50 गोळ्या खाते. 65 गोळ्या 50 पेक्षा जास्त आहेत, त्यामुळे त्या पुरेशा आहेत. हे विधान सत्य आहे.\n4.  'लहान कोंबडीशी तुलना केल्यास मोठी कोंबडी दुपटीने अन्न खाते.' L = 50, S = 25. कारण 50 = 2 * 25, हे विधान सत्य आहे.\nम्हणून, चुकीचे विधान पर्याय 2 आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Thirty pellets are sufficient to feed one small chicken for little longer duration than 24 hours.",
        "option_marathi": "लहान कोंबडीला 24 तासांपेक्षा थोड्या जास्त काळासाठी खाद्य द्यायला 30 अन्न गुटिका पुरेशा आहेत.",
        "is_correct": false,
        "reason": "A small chicken consumes 25 pellets per day. 30 pellets are indeed more than 25, so they would last longer than 24 hours. This statement is TRUE."
      },
      {
        "option_number": 2,
        "option_english": "450 pellets are needed for feeding three large and ten small chickens every day.",
        "option_marathi": "तीन मोठ्या व दहा लहान कोंबड्यांना प्रत्येक दिवशी खाद्य देण्यासाठी 450 अन्न गुटिका लागतील.",
        "is_correct": true,
        "reason": "Based on our calculations (L=50, S=25), three large and ten small chickens would need 3*50 + 10*25 = 150 + 250 = 400 pellets. The statement claims 450 pellets, which is incorrect. Thus, this is the FALSE statement."
      },
      {
        "option_number": 3,
        "option_english": "For feeding one large chicken for a day 65 pellets are sufficient.",
        "option_marathi": "मोठ्या कोंबडीला दिवसभराचे खाद्य म्हणून 65 अन्न गुटिका पुरेशा आहेत.",
        "is_correct": false,
        "reason": "A large chicken consumes 50 pellets per day. 65 pellets are more than 50, so they are sufficient for a day. This statement is TRUE."
      },
      {
        "option_number": 4,
        "option_english": "Large chicken consumes double quantity of food when compared to small chicken.",
        "option_marathi": "लहान कोंबडीशी तुलना केल्यास मोठी कोंबडी दुपटीने अन्न खाते.",
        "is_correct": false,
        "reason": "A large chicken consumes 50 pellets/day, and a small chicken consumes 25 pellets/day. 50 is indeed double of 25. This statement is TRUE."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "एका व्यक्तीचे आजचे वय त्याच्या आईच्या आजच्या वयाच्या 2/5 इतके आहे. 8 वर्षांनंतर ते त्याच्या आईच्या त्यावेळच्या वयाच्या 1/2 इतके असेल तर त्याच्या आईचे आजचे वय किती ?",
    "question_english": "A person's present age is 2/5 of his mother's age. After 8 years he will be 1/2 of the age of his mother. How old is mother at present ?",
    "options_marathi": [
      "70",
      "60",
      "40",
      "62"
    ],
    "options_english": [
      "70",
      "60",
      "40",
      "62"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Ages / Linear Equations",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let the present age of the mother be M and the present age of the person be P.\nAccording to the first statement: P = (2/5)M.\nAfter 8 years, the person's age will be P+8 and the mother's age will be M+8.\nAccording to the second statement: P + 8 = (1/2)(M + 8).\nNow, substitute the value of P from the first equation into the second equation:\n(2/5)M + 8 = (1/2)(M + 8)\nTo eliminate the denominators, multiply the entire equation by the least common multiple of 5 and 2, which is 10:\n10 * [(2/5)M + 8] = 10 * [(1/2)(M + 8)]\n4M + 80 = 5(M + 8)\n4M + 80 = 5M + 40\nSubtract 4M from both sides: 80 = M + 40\nSubtract 40 from both sides: M = 40.\nSo, the mother's present age is 40 years.",
    "explanation_marathi": "आईचे आजचे वय M आणि व्यक्तीचे आजचे वय P मानू.\nपहिल्या विधानानुसार: P = (2/5)M.\n8 वर्षांनंतर, व्यक्तीचे वय P+8 आणि आईचे वय M+8 असेल.\nदुसऱ्या विधानानुसार: P + 8 = (1/2)(M + 8).\nआता, पहिल्या समीकरणातून P ची किंमत दुसऱ्या समीकरणात टाकूया:\n(2/5)M + 8 = (1/2)(M + 8)\nछेद काढण्यासाठी, 5 आणि 2 च्या लसाविने (जो 10 आहे) संपूर्ण समीकरणाला गुणूया:\n10 * [(2/5)M + 8] = 10 * [(1/2)(M + 8)]\n4M + 80 = 5(M + 8)\n4M + 80 = 5M + 40\nदोन्ही बाजूंमधून 4M वजा केल्यास: 80 = M + 40\nदोन्ही बाजूंमधून 40 वजा केल्यास: M = 40.\nम्हणून, आईचे आजचे वय 40 वर्षे आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "70",
        "option_marathi": "70",
        "is_correct": false,
        "reason": "If the mother's age is 70, the person's age is (2/5)*70 = 28. After 8 years, mother is 78, person is 36. 36 is not 1/2 of 78."
      },
      {
        "option_number": 2,
        "option_english": "60",
        "option_marathi": "60",
        "is_correct": false,
        "reason": "If the mother's age is 60, the person's age is (2/5)*60 = 24. After 8 years, mother is 68, person is 32. 32 is not 1/2 of 68."
      },
      {
        "option_number": 3,
        "option_english": "40",
        "option_marathi": "40",
        "is_correct": true,
        "reason": "If the mother's present age is 40, the person's present age is (2/5)*40 = 16. After 8 years, the mother will be 40+8=48 and the person will be 16+8=24. Since 24 is exactly 1/2 of 48, this option is correct."
      },
      {
        "option_number": 4,
        "option_english": "62",
        "option_marathi": "62",
        "is_correct": false,
        "reason": "If the mother's age is 62, the person's age is (2/5)*62 = 24.8 (not a whole number, which is usually implied for age problems). After 8 years, mother is 70, person is 32.8. 32.8 is not 1/2 of 70."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "वैध निष्कर्ष निवडा. सत्य विधाने : काही रांग प्राणी आहेत. काही प्राणी कुस्तीगीर आहेत. सर्व कुस्तीगीर कविता आहेत. निष्कर्ष : (a) काही कुस्तीगीर प्राणी आहेत. (b) काही कविता रांग आहेत. (c) सर्व रांग कविता आहेत. (d) काही कविता प्राणी आहेत.",
    "question_english": "Select valid conclusions. True statements : Some queues are animals. Some animals are wrestlers. All the wrestlers are poems. Conclusions : (a) Some wrestlers are animals. (b) Some poems are queues. (c) All the queues are poems. (d) Some poems are animals.",
    "options_marathi": [
      "फक्त (a) व (b)",
      "फक्त (a) व (d)",
      "फक्त (a) व (c)",
      "फक्त (b) व (c)"
    ],
    "options_english": [
      "Only (a) and (b)",
      "Only (a) and (d)",
      "Only (a) and (c)",
      "Only (b) and (c)"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Syllogism",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's analyze the given statements and conclusions using Venn diagrams or logical deduction:\nStatements:\n1.  Some queues are animals. (Q ∩ A ≠ Ø)\n2.  Some animals are wrestlers. (A ∩ W ≠ Ø)\n3.  All wrestlers are poems. (W ⊆ P)\n\nConclusions:\n(a) Some wrestlers are animals.\n    *   From statement 2, 'Some animals are wrestlers'. The converse of 'Some A are B' is 'Some B are A', which is always true. So, 'Some wrestlers are animals' is TRUE.\n(b) Some poems are queues.\n    *   We know 'Some queues are animals' and 'Some animals are wrestlers' and 'All wrestlers are poems'. While there might be an overlap, it's not a definite conclusion. The 'some animals' that are queues might be different from the 'some animals' that are wrestlers (and thus poems). Therefore, 'Some poems are queues' is NOT necessarily TRUE.\n(c) All the queues are poems.\n    *   This is a universal conclusion drawn from 'some' statements. There is no direct or indirect link that establishes all queues as poems. This is definitely NOT TRUE.\n(d) Some poems are animals.\n    *   From statement 2, 'Some animals are wrestlers'. From statement 3, 'All wrestlers are poems'. If some animals are wrestlers, and all wrestlers are poems, then those specific animals that are wrestlers must also be poems. Therefore, 'Some poems are animals' is TRUE.\n\nBased on this analysis, conclusions (a) and (d) are valid.",
    "explanation_marathi": "दिलेली विधाने आणि निष्कर्षांचे वेन आकृत्या किंवा तार्किक निष्कर्षांचा वापर करून विश्लेषण करूया:\nविधाने:\n1.  काही रांग प्राणी आहेत. (Q ∩ A ≠ Ø)\n2.  काही प्राणी कुस्तीगीर आहेत. (A ∩ W ≠ Ø)\n3.  सर्व कुस्तीगीर कविता आहेत. (W ⊆ P)\n\nनिष्कर्ष:\n(a) काही कुस्तीगीर प्राणी आहेत.\n    *   विधान 2 नुसार, 'काही प्राणी कुस्तीगीर आहेत'. 'काही A हे B आहेत' याचे उलट 'काही B हे A आहेत' हे नेहमीच सत्य असते. त्यामुळे, 'काही कुस्तीगीर प्राणी आहेत' हे सत्य आहे.\n(b) काही कविता रांग आहेत.\n    *   आपल्याला माहीत आहे की 'काही रांग प्राणी आहेत' आणि 'काही प्राणी कुस्तीगीर आहेत' आणि 'सर्व कुस्तीगीर कविता आहेत'. जरी काही प्रमाणात ओव्हरलॅप असू शकतो, तरी हा निश्चित निष्कर्ष नाही. 'काही प्राणी' जे रांग आहेत ते 'काही प्राणी' जे कुस्तीगीर (आणि त्यामुळे कविता) आहेत त्यांच्यापेक्षा वेगळे असू शकतात. त्यामुळे, 'काही कविता रांग आहेत' हे आवश्यक नाही की सत्य असेल.\n(c) सर्व रांग कविता आहेत.\n    *   हे 'काही' विधानांवरून काढलेले एक सार्वत्रिक निष्कर्ष आहे. सर्व रांग कविता आहेत हे स्थापित करणारा कोणताही प्रत्यक्ष किंवा अप्रत्यक्ष दुवा नाही. हे निश्चितपणे असत्य आहे.\n(d) काही कविता प्राणी आहेत.\n    *   विधान 2 नुसार, 'काही प्राणी कुस्तीगीर आहेत'. विधान 3 नुसार, 'सर्व कुस्तीगीर कविता आहेत'. जर काही प्राणी कुस्तीगीर असतील आणि सर्व कुस्तीगीर कविता असतील, तर ते विशिष्ट प्राणी जे कुस्तीगीर आहेत ते कविता देखील असले पाहिजेत. त्यामुळे, 'काही कविता प्राणी आहेत' हे सत्य आहे.\n\nया विश्लेषणानुसार, निष्कर्ष (a) आणि (d) वैध आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Only (a) and (b)",
        "option_marathi": "फक्त (a) व (b)",
        "is_correct": false,
        "reason": "Conclusion (b) 'Some poems are queues' cannot be definitively concluded from the given statements. There is no direct link between 'queues' and 'poems' that guarantees an overlap."
      },
      {
        "option_number": 2,
        "option_english": "Only (a) and (d)",
        "option_marathi": "फक्त (a) व (d)",
        "is_correct": true,
        "reason": "Conclusion (a) 'Some wrestlers are animals' is a direct conversion of 'Some animals are wrestlers'. Conclusion (d) 'Some poems are animals' follows from 'Some animals are wrestlers' and 'All wrestlers are poems'. Both are valid."
      },
      {
        "option_number": 3,
        "option_english": "Only (a) and (c)",
        "option_marathi": "फक्त (a) व (c)",
        "is_correct": false,
        "reason": "Conclusion (c) 'All the queues are poems' is a universal statement that cannot be derived from the 'some' statements provided. It is not necessarily true."
      },
      {
        "option_number": 4,
        "option_english": "Only (b) and (c)",
        "option_marathi": "फक्त (b) व (c)",
        "is_correct": false,
        "reason": "Both conclusions (b) and (c) are invalid. (b) is not necessarily true, and (c) is definitively false as a universal conclusion from 'some' statements."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "नऊ क्रमावर विषम संख्यांची सरासरी 103 आहे. तर त्यातील सर्वात मोठ्या दोन संख्यांची सरासरी काय असेल ?",
    "question_english": "The average of the Nine consecutive odd numbers is 103. So what will be the average of the two largest numbers of them ?",
    "options_marathi": [
      "109",
      "112",
      "110",
      "107"
    ],
    "options_english": [
      "109",
      "112",
      "110",
      "107"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Averages / Number Series",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "For a series of consecutive odd numbers, the average is always the middle number. Since there are nine consecutive odd numbers, the 5th number in the series will be the average.\nGiven that the average is 103, the 5th odd number is 103.\nTo find the largest two numbers, we can list the numbers around the average:\n... (1st, 2nd, 3rd, 4th), 103 (5th), (6th, 7th, 8th, 9th) ...\nSince they are consecutive odd numbers, each number differs by 2 from the previous one.\nThe numbers are:\n1st: 103 - (4 * 2) = 103 - 8 = 95\n2nd: 103 - (3 * 2) = 103 - 6 = 97\n3rd: 103 - (2 * 2) = 103 - 4 = 99\n4th: 103 - (1 * 2) = 103 - 2 = 101\n5th: 103\n6th: 103 + (1 * 2) = 103 + 2 = 105\n7th: 103 + (2 * 2) = 103 + 4 = 107\n8th: 103 + (3 * 2) = 103 + 6 = 109\n9th: 103 + (4 * 2) = 103 + 8 = 111\nThe two largest numbers are 109 and 111.\nThe average of these two largest numbers is (109 + 111) / 2 = 220 / 2 = 110.",
    "explanation_marathi": "क्रमवार विषम संख्यांच्या मालिकेसाठी, सरासरी नेहमी मधली संख्या असते. नऊ क्रमवार विषम संख्या असल्याने, मालिकेतील 5 वी संख्या सरासरी असेल.\nसरासरी 103 असल्याने, 5 वी विषम संख्या 103 आहे.\nसर्वात मोठ्या दोन संख्या शोधण्यासाठी, आपण सरासरीच्या आसपासच्या संख्यांची यादी करूया:\n... (1 ली, 2 री, 3 री, 4 थी), 103 (5 वी), (6 वी, 7 वी, 8 वी, 9 वी) ...\nत्या क्रमवार विषम संख्या असल्याने, प्रत्येक संख्या मागील संख्येपेक्षा 2 ने वेगळी असते.\nसंख्या आहेत:\n1 ली: 103 - (4 * 2) = 103 - 8 = 95\n2 री: 103 - (3 * 2) = 103 - 6 = 97\n3 री: 103 - (2 * 2) = 103 - 4 = 99\n4 थी: 103 - (1 * 2) = 103 - 2 = 101\n5 वी: 103\n6 वी: 103 + (1 * 2) = 103 + 2 = 105\n7 वी: 103 + (2 * 2) = 103 + 4 = 107\n8 वी: 103 + (3 * 2) = 103 + 6 = 109\n9 वी: 103 + (4 * 2) = 103 + 8 = 111\nसर्वात मोठ्या दोन संख्या 109 आणि 111 आहेत.\nया दोन सर्वात मोठ्या संख्यांची सरासरी (109 + 111) / 2 = 220 / 2 = 110 आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "109",
        "option_marathi": "109",
        "is_correct": false,
        "reason": "109 is the second largest number, not the average of the two largest numbers."
      },
      {
        "option_number": 2,
        "option_english": "112",
        "option_marathi": "112",
        "is_correct": false,
        "reason": "This number is not part of the sequence of odd numbers and is not the correct average."
      },
      {
        "option_number": 3,
        "option_english": "110",
        "option_marathi": "110",
        "is_correct": true,
        "reason": "The nine consecutive odd numbers are 95, 97, 99, 101, 103, 105, 107, 109, 111. The two largest numbers are 109 and 111. Their average is (109 + 111) / 2 = 220 / 2 = 110."
      },
      {
        "option_number": 4,
        "option_english": "107",
        "option_marathi": "107",
        "is_correct": false,
        "reason": "107 is the third largest number, not the average of the two largest numbers."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "विश्व जे काम 8 दिवसात करतो तेच काम करायला श्रुतीला 10 दिवस लागतात. जर दोघे मिळून ते काम करत असतील तर ते काम पूर्ण करण्यास किती वेळ लागेल ?",
    "question_english": "Vishwa can finish the work in 8 days. While Shrushti can finish the same work in 10 days. If they work together then how long they will take to finish the same work ?",
    "options_marathi": [
      "10 1/2 दिवस",
      "6 1/2 दिवस",
      "4 3/9 days",
      "4 4/9 days"
    ],
    "options_english": [
      "10 1/2 days",
      "6 1/2 days",
      "4 3/9 days",
      "4 4/9 days"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Work and Time",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "To solve this work and time problem, we first determine the individual work rates of Vishwa and Shrushti.\nVishwa completes the work in 8 days, so his one-day work rate is 1/8 of the total work.\nShrushti completes the work in 10 days, so her one-day work rate is 1/10 of the total work.\nWhen they work together, their combined one-day work rate is the sum of their individual rates:\nCombined work rate = (1/8) + (1/10)\nTo add these fractions, find a common denominator, which is 40 (LCM of 8 and 10):\nCombined work rate = (5/40) + (4/40) = 9/40 of the work per day.\nIf they complete 9/40 of the work in one day, the total time taken to complete the entire work (which is 1 unit of work) is the reciprocal of their combined work rate:\nTime taken = 1 / (9/40) = 40/9 days.\nConverting this improper fraction to a mixed number: 40 ÷ 9 = 4 with a remainder of 4. So, 40/9 days is 4 and 4/9 days.",
    "explanation_marathi": "हे काम आणि वेळेचे गणित सोडवण्यासाठी, आपण प्रथम विश्व आणि श्रुती यांच्या कामाची वैयक्तिक गती निश्चित करूया.\nविश्व 8 दिवसांत काम पूर्ण करतो, त्यामुळे त्याचे एका दिवसाचे काम एकूण कामाच्या 1/8 आहे.\nश्रुती 10 दिवसांत काम पूर्ण करते, त्यामुळे तिचे एका दिवसाचे काम एकूण कामाच्या 1/10 आहे.\nजेव्हा ते दोघे एकत्र काम करतात, तेव्हा त्यांच्या एका दिवसाच्या कामाची एकत्रित गती त्यांच्या वैयक्तिक गतीची बेरीज असते:\nएकत्रित कामाची गती = (1/8) + (1/10)\nया अपूर्णांकांची बेरीज करण्यासाठी, सामान्य छेद शोधा, जो 40 आहे (8 आणि 10 चा लसावि):\nएकत्रित कामाची गती = (5/40) + (4/40) = दररोज कामाच्या 9/40.\nजर ते एका दिवसात कामाच्या 9/40 भाग पूर्ण करत असतील, तर संपूर्ण काम (जे 1 युनिट काम आहे) पूर्ण करण्यासाठी लागणारा एकूण वेळ त्यांच्या एकत्रित कामाच्या गतीचा व्यस्त असतो:\nलागलेला वेळ = 1 / (9/40) = 40/9 दिवस.\nया विषम अपूर्णांकाला मिश्र अपूर्णांकात रूपांतरित केल्यास: 40 ÷ 9 = 4 आणि बाकी 4. त्यामुळे, 40/9 दिवस म्हणजे 4 आणि 4/9 दिवस.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "10 1/2 days",
        "option_marathi": "10 1/2 दिवस",
        "is_correct": false,
        "reason": "This option is incorrect. It would imply a much slower combined work rate than calculated."
      },
      {
        "option_number": 2,
        "option_english": "6 1/2 days",
        "option_marathi": "6 1/2 दिवस",
        "is_correct": false,
        "reason": "This option is incorrect. The combined work rate is faster than either individual, so the time taken must be less than 8 days."
      },
      {
        "option_number": 3,
        "option_english": "4 3/9 days",
        "option_marathi": "4 3/9 days",
        "is_correct": false,
        "reason": "This option is incorrect. While close, 3/9 simplifies to 1/3, which is not the correct fraction (4/9)."
      },
      {
        "option_number": 4,
        "option_english": "4 4/9 days",
        "option_marathi": "4 4/9 days",
        "is_correct": true,
        "reason": "Vishwa's rate is 1/8, Shrushti's rate is 1/10. Combined rate = 1/8 + 1/10 = 5/40 + 4/40 = 9/40. Time taken = 40/9 days = 4 and 4/9 days."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "एका मार्च महिन्यातील शेवटच्या रविवार कोणत्या वारी आला आहे या प्रश्नसंदर्भात दिलेल्या दिलेल्या पुरेशेपणा निश्चित करा. विधाने : (a) शुक्रवार हा त्या महिन्याचा शेवटचा दिवस आहे. (b) त्या महिन्याच्या पहिल्या रविवारी 5 तारीख आहे.",
    "question_english": "Decide sufficiency of data with respect to the question : On which date the last Sunday of month March was ? Data statements : (a) The last day of that month was Friday. (b) The first Sunday of that month fell on 5th.",
    "options_marathi": [
      "(a) व (b) दोन्ही आवश्यक.",
      "फक्त (a) पुरेशी नाही.",
      "फक्त (a) किंवा (b) पुरेशी आहे.",
      "फक्त (b) पुरेशी नाही."
    ],
    "options_english": [
      "Both (a) and (b) are necessary.",
      "Alone (a) is not sufficient.",
      "Either (a) or (b) is sufficient.",
      "Alone (b) is not sufficient."
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Calendar / Data Sufficiency",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The question asks for the date of the last Sunday in March. We know that March always has 31 days.\n\nLet's evaluate Statement (a): 'The last day of that month was Friday.'\n*   If March 31st is a Friday, we can count backward to find the last Sunday.\n*   March 31 (Friday)\n*   March 30 (Thursday)\n*   March 29 (Wednesday)\n*   March 28 (Tuesday)\n*   March 27 (Monday)\n*   March 26 (Sunday)\nSo, the last Sunday of March was on March 26th. Statement (a) alone is sufficient to answer the question.\n\nLet's evaluate Statement (b): 'The first Sunday of that month fell on 5th.'\n*   If the first Sunday of March is March 5th, we can find all subsequent Sundays by adding 7 days.\n*   1st Sunday: March 5\n*   2nd Sunday: March 5 + 7 = March 12\n*   3rd Sunday: March 12 + 7 = March 19\n*   4th Sunday: March 19 + 7 = March 26\n*   5th Sunday: March 26 + 7 = March 33 (which is April 2nd)\nSo, the last Sunday of March was on March 26th. Statement (b) alone is sufficient to answer the question.\n\nSince either statement (a) alone or statement (b) alone is sufficient to answer the question, the correct option is 'Either (a) or (b) is sufficient.'",
    "explanation_marathi": "मार्च महिन्यातील शेवटच्या रविवारची तारीख विचारली आहे. आपल्याला माहीत आहे की मार्च महिन्यात नेहमी 31 दिवस असतात.\n\nविधान (a) चे मूल्यांकन करूया: 'शुक्रवार हा त्या महिन्याचा शेवटचा दिवस आहे.'\n*   जर 31 मार्च हा शुक्रवार असेल, तर आपण शेवटचा रविवार शोधण्यासाठी मागे मोजू शकतो.\n*   31 मार्च (शुक्रवार)\n*   30 मार्च (गुरुवार)\n*   29 मार्च (बुधवार)\n*   28 मार्च (मंगळवार)\n*   27 मार्च (सोमवार)\n*   26 मार्च (रविवार)\nम्हणून, मार्च महिन्यातील शेवटचा रविवार 26 मार्च रोजी होता. विधान (a) एकटेच प्रश्नाचे उत्तर देण्यासाठी पुरेसे आहे.\n\nविधान (b) चे मूल्यांकन करूया: 'त्या महिन्याच्या पहिल्या रविवारी 5 तारीख आहे.'\n*   जर मार्च महिन्यातील पहिला रविवार 5 मार्च रोजी असेल, तर आपण प्रत्येक पुढील रविवार 7 दिवस जोडून शोधू शकतो.\n*   पहिला रविवार: 5 मार्च\n*   दुसरा रविवार: 5 + 7 = 12 मार्च\n*   तिसरा रविवार: 12 + 7 = 19 मार्च\n*   चौथा रविवार: 19 + 7 = 26 मार्च\n*   पाचवा रविवार: 26 + 7 = 33 मार्च (जो 2 एप्रिल आहे)\nम्हणून, मार्च महिन्यातील शेवटचा रविवार 26 मार्च रोजी होता. विधान (b) एकटेच प्रश्नाचे उत्तर देण्यासाठी पुरेसे आहे.\n\nविधान (a) किंवा विधान (b) यापैकी कोणतेही एकटेच प्रश्नाचे उत्तर देण्यासाठी पुरेसे असल्याने, योग्य पर्याय 'फक्त (a) किंवा (b) पुरेशी आहे' हा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Both (a) and (b) are necessary.",
        "option_marathi": "(a) व (b) दोन्ही आवश्यक.",
        "is_correct": false,
        "reason": "Each statement independently provides enough information to determine the date of the last Sunday in March. Therefore, both are not necessary."
      },
      {
        "option_number": 2,
        "option_english": "Alone (a) is not sufficient.",
        "option_marathi": "फक्त (a) पुरेशी नाही.",
        "is_correct": false,
        "reason": "Statement (a) alone is sufficient. If March 31st is Friday, then March 26th is Sunday, which is the last Sunday."
      },
      {
        "option_number": 3,
        "option_english": "Either (a) or (b) is sufficient.",
        "option_marathi": "फक्त (a) किंवा (b) पुरेशी आहे.",
        "is_correct": true,
        "reason": "Statement (a) alone is sufficient (March 31st = Friday => March 26th = Sunday). Statement (b) alone is also sufficient (1st Sunday = March 5th => last Sunday = March 26th). Thus, either statement is sufficient."
      },
      {
        "option_number": 4,
        "option_english": "Alone (b) is not sufficient.",
        "option_marathi": "फक्त (b) पुरेशी नाही.",
        "is_correct": false,
        "reason": "Statement (b) alone is sufficient. If the first Sunday is March 5th, then the Sundays are 5, 12, 19, 26. The last Sunday is March 26th."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "एका प्राणी गटात बाल व प्रौढ माद्या आहेत. नवजात भावी एका महिन्यात प्रौढच प्राप्त करते आणि जर परिस्थिती अनुकूल असेल तर पाच वर्षांपर्यंत दर महिन्याला सरासरी एका नवजात मादीला जन्म देते. जर एका गटात सुरुवातीला एक नवजात मादी असेल तर दहा महिन्यांनंतर लगेचच त्यात किती माद्या असतील ?",
    "question_english": "In a certain animal group there are juvenile as well as adult females. Infant female attains adulthood in one month and on an average gives birth to one new juvenile female every month for about five years if conditions are favourable. If there is one new borne female in a group to begin with then how many females will be there immediately after ten months ?",
    "options_marathi": [
      "71",
      "76",
      "81",
      "89"
    ],
    "options_english": [
      "71",
      "76",
      "81",
      "89"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Population Growth / Fibonacci Sequence",
    "difficulty": "Hard",
    "trap_detected": "Indexing/Timing ambiguity in Fibonacci sequence",
    "explanation_english": "This problem describes a population growth pattern similar to the Fibonacci sequence. Let J_n be the number of juvenile females and A_n be the number of adult females at the end of month n. The total number of females at the end of month n is T_n = J_n + A_n.\nRules:\n1.  An infant female (juvenile) attains adulthood in one month.\n2.  An adult female gives birth to one new juvenile female every month.\n\nLet's track the population month by month:\n*   **Month 0 (Start):** 1 Juvenile (J_0=1, A_0=0). Total T_0 = 1.\n*   **End of Month 1:**\n    *   The 1 juvenile becomes 1 adult. (A_1 = A_0 + J_0 = 0+1 = 1)\n    *   This 1 adult gives birth to 1 new juvenile. (J_1 = A_0 = 1)\n    *   State: 1 Adult, 1 Juvenile. Total T_1 = 2.\n*   **End of Month 2:**\n    *   The 1 juvenile (from Month 1) becomes 1 adult. (A_2 = A_1 + J_1 = 1+1 = 2)\n    *   The 1 adult (from Month 1) gives birth to 1 new juvenile. (J_2 = A_1 = 1)\n    *   State: 2 Adults, 1 Juvenile. Total T_2 = 3.\n*   **End of Month 3:**\n    *   The 1 juvenile (from Month 2) becomes 1 adult. (A_3 = A_2 + J_2 = 2+1 = 3)\n    *   The 2 adults (from Month 2) give birth to 2 new juveniles. (J_3 = A_2 = 2)\n    *   State: 3 Adults, 2 Juveniles. Total T_3 = 5.\n\nThis pattern shows that the total number of females (T_n) follows the Fibonacci sequence, where T_n = T_{n-1} + T_{n-2}. If we define F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, etc., then T_n = F_{n+2}.\n\nLet's continue the sequence:\nT_0 = 1 (F_2)\nT_1 = 2 (F_3)\nT_2 = 3 (F_4)\nT_3 = 5 (F_5)\nT_4 = 8 (F_6)\nT_5 = 13 (F_7)\nT_6 = 21 (F_8)\nT_7 = 34 (F_9)\nT_8 = 55 (F_10)\nT_9 = 89 (F_11)\nT_10 = 144 (F_12)\n\nThe question asks for the number of females 'immediately after ten months', which typically means at the end of Month 10. According to our calculation, this would be 144. However, 144 is not among the options. The closest option is 89, which corresponds to T_9 (end of Month 9). This suggests a common ambiguity in such problems where 'after N months' might be interpreted as 'at the end of N-1 months' or 'at the beginning of N months'. Given the options, 89 is the most plausible intended answer, representing the total females at the end of the 9th month (or start of the 10th month).",
    "explanation_marathi": "ही समस्या फिबोनाची अनुक्रमासारख्या लोकसंख्या वाढीचे वर्णन करते. n महिन्याच्या शेवटी बाल माद्यांची संख्या J_n आणि प्रौढ माद्यांची संख्या A_n मानू. n महिन्याच्या शेवटी एकूण माद्यांची संख्या T_n = J_n + A_n आहे.\nनियम:\n1.  एक नवजात मादी (बाल) एका महिन्यात प्रौढ होते.\n2.  एक प्रौढ मादी दर महिन्याला एका नवीन नवजात मादीला जन्म देते.\n\nप्रत्येक महिन्याला लोकसंख्या कशी वाढते ते पाहूया:\n*   **महिना 0 (सुरुवात):** 1 बाल (J_0=1, A_0=0). एकूण T_0 = 1.\n*   **महिना 1 च्या शेवटी:**\n    *   1 बाल 1 प्रौढ होते. (A_1 = A_0 + J_0 = 0+1 = 1)\n    *   ही 1 प्रौढ 1 नवीन बाल मादीला जन्म देते. (J_1 = A_0 = 1)\n    *   स्थिती: 1 प्रौढ, 1 बाल. एकूण T_1 = 2.\n*   **महिना 2 च्या शेवटी:**\n    *   1 बाल (महिना 1 मधील) 1 प्रौढ होते. (A_2 = A_1 + J_1 = 1+1 = 2)\n    *   1 प्रौढ (महिना 1 मधील) 1 नवीन बाल मादीला जन्म देते. (J_2 = A_1 = 1)\n    *   स्थिती: 2 प्रौढ, 1 बाल. एकूण T_2 = 3.\n*   **महिना 3 च्या शेवटी:**\n    *   1 बाल (महिना 2 मधील) 1 प्रौढ होते. (A_3 = A_2 + J_2 = 2+1 = 3)\n    *   2 प्रौढ (महिना 2 मधील) 2 नवीन बाल माद्यांना जन्म देतात. (J_3 = A_2 = 2)\n    *   स्थिती: 3 प्रौढ, 2 बाल. एकूण T_3 = 5.\n\nहे नमुना दर्शवितो की एकूण माद्यांची संख्या (T_n) फिबोनाची अनुक्रमाचे अनुसरण करते, जिथे T_n = T_{n-1} + T_{n-2}. जर आपण F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, इत्यादी परिभाषित केले, तर T_n = F_{n+2}.\n\nअनुक्रम पुढे चालू ठेवूया:\nT_0 = 1 (F_2)\nT_1 = 2 (F_3)\nT_2 = 3 (F_4)\nT_3 = 5 (F_5)\nT_4 = 8 (F_6)\nT_5 = 13 (F_7)\nT_6 = 21 (F_8)\nT_7 = 34 (F_9)\nT_8 = 55 (F_10)\nT_9 = 89 (F_11)\nT_10 = 144 (F_12)\n\nप्रश्नात 'दहा महिन्यांनंतर लगेचच' माद्यांची संख्या विचारली आहे, ज्याचा अर्थ साधारणपणे 10 व्या महिन्याच्या शेवटी होतो. आपल्या गणनेनुसार, ही संख्या 144 असेल. तथापि, 144 पर्यायांमध्ये नाही. सर्वात जवळचा पर्याय 89 आहे, जो T_9 (9 व्या महिन्याच्या शेवटी) शी संबंधित आहे. हे अशा समस्यांमध्ये सामान्य संदिग्धता दर्शवते जिथे 'N महिन्यांनंतर' याचा अर्थ 'N-1 महिन्यांच्या शेवटी' किंवा 'N महिन्यांच्या सुरुवातीला' असा लावला जाऊ शकतो. दिलेल्या पर्यायांवरून, 89 हे सर्वात संभाव्य अपेक्षित उत्तर आहे, जे 9 व्या महिन्याच्या शेवटी (किंवा 10 व्या महिन्याच्या सुरुवातीला) एकूण माद्या दर्शवते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "71",
        "option_marathi": "71",
        "is_correct": false,
        "reason": "This number does not fit the Fibonacci sequence derived from the problem's rules for the given timeframe."
      },
      {
        "option_number": 2,
        "option_english": "76",
        "option_marathi": "76",
        "is_correct": false,
        "reason": "This number does not fit the Fibonacci sequence derived from the problem's rules for the given timeframe."
      },
      {
        "option_number": 3,
        "option_english": "81",
        "option_marathi": "81",
        "is_correct": false,
        "reason": "This number does not fit the Fibonacci sequence derived from the problem's rules for the given timeframe."
      },
      {
        "option_number": 4,
        "option_english": "89",
        "option_marathi": "89",
        "is_correct": true,
        "reason": "The population growth follows a Fibonacci sequence. Starting with 1 juvenile (F_2=1), the total females at the end of month 'n' is F_{n+2}. So, at the end of 9 months, it's F_{9+2} = F_11 = 89. Given that 144 (F_12, for end of 10 months) is not an option, 89 (end of 9 months) is the most plausible intended answer due to common indexing ambiguities in such problems."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "आधुनिक समाजात अनेक लोक खिन्नतेने ग्रस्त असतात. मेंदूच्या रासायनिक संघटनात फेरफार करणाऱ्या काही औषधातच त्यांना उपचार करता येतो. तथापि सहानुभूती असणारी कुशल मानवी सोबती समस्येवरची व्यक्तीची मानसिक ओळख अधिक सकारात्मक करण्याच्या हेतूने बोलतो म्हणून व्यक्ती मानसशास्त्र घेऊ शकते. खिन्न व्यक्तींना मेंदूच्या रासायनिक स्थितीत फेरफार करण्याची कल्पना आवडत नाही त्यांनी मानसशास्त्र निवडायला हवे. पुढील विधानांतून वरील पुर्वग्रहावर आधारित चुकीचे निष्कर्ष निवडा. (1) मानसशास्त्र मेंदूतील रासायनिक स्थितीत फेरफार करत नाही. (2) मानसशास्त्र औषधांपेक्षा मानसशास्त्र अधिक प्रभावी उपचार आहे. (3) मानसशास्त्र औषधांच्या उपचारासोबत एकत्रित करता येत नाही. (4) मानसशास्त्र आणि खिन्नता नेहमीच सोबत असतात.",
    "question_english": "Many people suffer from depression in modern society. This can be alleviated through certain drugs that alter the chemical balance of the brain. However, the individual can undergo psychotherapy that involves talking through problems with a sympathetic and skilled fellow human being with a view to putting the subject in a more positive frame of mind. Depressed individuals who do not like the idea of brain chemistry being altered should therefore choose psychotherapy. Select an underlying assumption of the above argument from following statements. (1) Psychotherapy does not alter the brain chemistry. (2) Psychotherapy is more effective than drugs in treating depression. (3) Psychotherapy cannot be combined with drug treatments. (4) Depression is always there with human beings when he came to existence.",
    "options_marathi": [
      "मानसशास्त्र मेंदूतील रासायनिक स्थितीत फेरफार करत नाही.",
      "मानसशास्त्र औषधांपेक्षा मानसशास्त्र अधिक प्रभावी उपचार आहे.",
      "मानसशास्त्र औषधांच्या उपचारासोबत एकत्रित करता येत नाही.",
      "खिन्नता नेहमीच सोबत असते."
    ],
    "options_english": [
      "Psychotherapy does not alter the brain chemistry.",
      "Psychotherapy is more effective than drugs in treating depression.",
      "Psychotherapy cannot be combined with drug treatments.",
      "Depression is always there with human beings when he came to existence."
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Critical Reasoning / Assumptions",
    "difficulty": "Medium",
    "trap_detected": "Distractors that are plausible statements but not necessary assumptions",
    "explanation_english": "The argument concludes that individuals who dislike the idea of brain chemistry being altered should choose psychotherapy. For this conclusion to be logically sound, there must be an unstated assumption that psychotherapy does *not* alter brain chemistry. If psychotherapy also altered brain chemistry, then it would not be a suitable alternative for those who specifically want to avoid such alteration.\n\nLet's analyze the options:\n1.  **Psychotherapy does not alter the brain chemistry.** This is a necessary assumption. If psychotherapy *did* alter brain chemistry, the reason for choosing it (dislike of brain chemistry alteration) would be negated, and the conclusion would fall apart.\n2.  **Psychotherapy is more effective than drugs in treating depression.** The argument does not claim psychotherapy is *more* effective, only that it's an *alternative* based on a specific preference. Its relative effectiveness is not a necessary assumption for the conclusion to hold.\n3.  **Psychotherapy cannot be combined with drug treatments.** The argument presents psychotherapy as an alternative choice, but it doesn't necessarily assume that the two treatments are mutually exclusive. They might be combinable, but the argument focuses on a choice for those with a specific aversion.\n4.  **Depression is always there with human beings when he came to existence.** This statement is about the historical presence of depression and is irrelevant to the argument about treatment choices for individuals in modern society.",
    "explanation_marathi": "युक्तिवादाचा निष्कर्ष असा आहे की ज्या व्यक्तींना मेंदूच्या रासायनिक स्थितीत फेरफार करण्याची कल्पना आवडत नाही, त्यांनी मानसशास्त्र निवडले पाहिजे. हा निष्कर्ष तार्किकदृष्ट्या योग्य असण्यासाठी, एक अघोषित गृहितक असणे आवश्यक आहे की मानसशास्त्र मेंदूच्या रासायनिक स्थितीत फेरफार करत नाही. जर मानसशास्त्र देखील मेंदूच्या रासायनिक स्थितीत फेरफार करत असेल, तर ज्यांना विशेषतः असा फेरफार टाळायचा आहे त्यांच्यासाठी ते योग्य पर्याय ठरणार नाही.\n\nपर्यायांचे विश्लेषण करूया:\n1.  **मानसशास्त्र मेंदूतील रासायनिक स्थितीत फेरफार करत नाही.** हे एक आवश्यक गृहितक आहे. जर मानसशास्त्र मेंदूच्या रासायनिक स्थितीत फेरफार करत असेल, तर ते निवडण्याचे कारण (मेंदूच्या रासायनिक स्थितीत फेरफार न आवडणे) रद्द होईल आणि निष्कर्ष चुकीचा ठरेल.\n2.  **मानसशास्त्र औषधांपेक्षा मानसशास्त्र अधिक प्रभावी उपचार आहे.** युक्तिवाद असा दावा करत नाही की मानसशास्त्र अधिक प्रभावी आहे, तर केवळ एका विशिष्ट पसंतीवर आधारित एक पर्याय आहे. त्याची सापेक्ष परिणामकारकता निष्कर्षासाठी आवश्यक गृहितक नाही.\n3.  **मानसशास्त्र औषधांच्या उपचारासोबत एकत्रित करता येत नाही.** युक्तिवाद मानसशास्त्राला एक पर्यायी निवड म्हणून सादर करतो, परंतु याचा अर्थ असा नाही की दोन्ही उपचार परस्पर अनन्य आहेत. ते एकत्र केले जाऊ शकतात, परंतु युक्तिवाद विशिष्ट नापसंती असलेल्या लोकांसाठी निवडीवर लक्ष केंद्रित करतो.\n4.  **खिन्नता नेहमीच सोबत असते.** हे विधान नैराश्याच्या ऐतिहासिक उपस्थितीबद्दल आहे आणि आधुनिक समाजातील व्यक्तींसाठी उपचार निवडीबद्दलच्या युक्तिवादाशी संबंधित नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Psychotherapy does not alter the brain chemistry.",
        "option_marathi": "मानसशास्त्र मेंदूतील रासायनिक स्थितीत फेरफार करत नाही.",
        "is_correct": true,
        "reason": "The argument states that people who dislike brain chemistry alteration should choose psychotherapy. For this to be a valid choice, psychotherapy must not alter brain chemistry. This is a necessary underlying assumption."
      },
      {
        "option_number": 2,
        "option_english": "Psychotherapy is more effective than drugs in treating depression.",
        "option_marathi": "मानसशास्त्र औषधांपेक्षा मानसशास्त्र अधिक प्रभावी उपचार आहे.",
        "is_correct": false,
        "reason": "The argument does not make a claim about the comparative effectiveness of psychotherapy versus drugs; it only presents psychotherapy as an alternative based on a preference regarding brain chemistry alteration. This is not a necessary assumption."
      },
      {
        "option_number": 3,
        "option_english": "Psychotherapy cannot be combined with drug treatments.",
        "option_marathi": "मानसशास्त्र औषधांच्या उपचारासोबत एकत्रित करता येत नाही.",
        "is_correct": false,
        "reason": "The argument presents psychotherapy as an alternative, but it doesn't necessarily assume that the two treatments cannot be combined. They might be complementary, but the argument focuses on a choice for those with a specific aversion. This is not a necessary assumption."
      },
      {
        "option_number": 4,
        "option_english": "Depression is always there with human beings when he came to existence.",
        "option_marathi": "खिन्नता नेहमीच सोबत असते.",
        "is_correct": false,
        "reason": "This statement is a general philosophical or historical claim about depression and is irrelevant to the specific logical argument about choosing between treatment methods based on a preference for brain chemistry alteration. It is not an underlying assumption of the argument."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "सर्व विद्यार्थ्यांच्या गटात 3/5 मुली आहेत आणि यातील 1/3 मुलींनी इंग्रजीमध्ये 75% च्या वर गुण मिळवले. जर 15 मुलींनी इंग्रजीमध्ये 75% च्या वर गुण मिळवले असतील तर मुली नसलेल्या विद्यार्थ्यांची संख्या शंभरवारा पर्याय निवडा.",
    "question_english": "In a group 3/5 of all students are girls and 1/3 of girls scored above 75% marks in English. If 15 girls have scored above 75% in English, then select the option that indicates the number of students who are not girls.",
    "options_marathi": [
      "75",
      "90",
      "60",
      "30"
    ],
    "options_english": [
      "75",
      "90",
      "60",
      "30"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Word Problems (Fractions, Percentages)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let the total number of students in the group be 'S'. According to the problem, 3/5 of all students are girls, so the number of girls is (3/5)S. Out of these girls, 1/3 scored above 75% marks in English. This means the number of girls who scored above 75% is (1/3) * (3/5)S = (1/5)S. We are given that 15 girls scored above 75% in English. Therefore, (1/5)S = 15, which implies S = 15 * 5 = 75. So, the total number of students is 75. The number of girls is (3/5) * 75 = 45. The number of students who are not girls (boys) is the total number of students minus the number of girls, which is 75 - 45 = 30.",
    "explanation_marathi": "समूहातील एकूण विद्यार्थ्यांची संख्या 'S' मानू. प्रश्नानुसार, एकूण विद्यार्थ्यांपैकी 3/5 मुली आहेत, त्यामुळे मुलींची संख्या (3/5)S आहे. या मुलींपैकी 1/3 मुलींनी इंग्रजीमध्ये 75% पेक्षा जास्त गुण मिळवले. याचा अर्थ 75% पेक्षा जास्त गुण मिळवणाऱ्या मुलींची संख्या (1/3) * (3/5)S = (1/5)S आहे. आपल्याला दिले आहे की 15 मुलींनी इंग्रजीमध्ये 75% पेक्षा जास्त गुण मिळवले आहेत. म्हणून, (1/5)S = 15, ज्यावरून S = 15 * 5 = 75. तर, एकूण विद्यार्थ्यांची संख्या 75 आहे. मुलींची संख्या (3/5) * 75 = 45 आहे. मुली नसलेल्या विद्यार्थ्यांची (मुलांची) संख्या एकूण विद्यार्थी वजा मुलींची संख्या, म्हणजे 75 - 45 = 30 आहे.",
    "options_breakdown": [
      {
        "option": "75",
        "is_correct": false,
        "reason_english": "This is the total number of students, not the number of students who are not girls.",
        "reason_marathi": "ही एकूण विद्यार्थ्यांची संख्या आहे, मुली नसलेल्या विद्यार्थ्यांची संख्या नाही."
      },
      {
        "option": "90",
        "is_correct": false,
        "reason_english": "This value is incorrect based on the calculations.",
        "reason_marathi": "हे मूल्य गणितानुसार चुकीचे आहे."
      },
      {
        "option": "60",
        "is_correct": false,
        "reason_english": "This value is incorrect based on the calculations.",
        "reason_marathi": "हे मूल्य गणितानुसार चुकीचे आहे."
      },
      {
        "option": "30",
        "is_correct": true,
        "reason_english": "This is the correct number of students who are not girls (boys).",
        "reason_marathi": "ही मुली नसलेल्या विद्यार्थ्यांची (मुलांची) योग्य संख्या आहे."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "एका क्रीडा मंडळात एकूण 240 खेळाडू आहेत. त्यापैकी 15 टक्के व्हॉलीबॉल, बास्केटबॉल आणि क्रिकेट हे तिन्ही खेळ खेळू शकतात. या खेळांपैकी कोणतेही दोन आणि फक्त दोन खेळ खेळणारे खेळाडूही यात आले व त्यांची संख्या 60 आहे. फक्त व्हॉलीबॉल खेळणाऱ्या खेळाडूंची संख्या 80 आहे. फक्त बास्केटबॉल खेळात किंवा फक्त क्रिकेटच खेळात, अशा एकूण खेळाडूंची संख्या किती ?",
    "question_english": "Out of a total of 240 players in a sports club 15% can play all three games Volleyball, Basketball and Cricket. It so happens that the number of players who can play any two and only two of the above games is 60. The number of players who can play the Volleyball alone is 80. What is the total number of those who can play Basketball alone or Cricket alone ?",
    "options_marathi": [
      "60",
      "58",
      "63",
      "64"
    ],
    "options_english": [
      "60",
      "58",
      "63",
      "64"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Set Theory / Venn Diagrams",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let the total number of players be 240. Players playing all three games (Volleyball, Basketball, Cricket) = 15% of 240 = 0.15 * 240 = 36. Players playing exactly two games = 60. Players playing Volleyball alone = 80. Let 'B_alone' be the number of players playing Basketball alone and 'C_alone' be the number of players playing Cricket alone. The total number of players can be expressed as the sum of players in mutually exclusive categories: Total Players = (V_alone) + (B_alone) + (C_alone) + (Exactly two games) + (All three games). So, 240 = 80 + B_alone + C_alone + 60 + 36. This simplifies to 240 = 176 + (B_alone + C_alone). Therefore, B_alone + C_alone = 240 - 176 = 64. The question asks for the total number of those who can play Basketball alone or Cricket alone, which is B_alone + C_alone.",
    "explanation_marathi": "एकूण खेळाडूंची संख्या 240 आहे. तिन्ही खेळ (व्हॉलीबॉल, बास्केटबॉल, क्रिकेट) खेळणारे खेळाडू = 240 च्या 15% = 0.15 * 240 = 36. फक्त दोन खेळ खेळणारे खेळाडू = 60. फक्त व्हॉलीबॉल खेळणारे खेळाडू = 80. फक्त बास्केटबॉल खेळणाऱ्या खेळाडूंची संख्या 'B_alone' आणि फक्त क्रिकेट खेळणाऱ्या खेळाडूंची संख्या 'C_alone' मानू. एकूण खेळाडूंची संख्या खालीलप्रमाणे विभागली जाऊ शकते: एकूण खेळाडू = (फक्त व्हॉलीबॉल) + (फक्त बास्केटबॉल) + (फक्त क्रिकेट) + (फक्त दोन खेळ) + (तिन्ही खेळ). म्हणून, 240 = 80 + B_alone + C_alone + 60 + 36. यावरून 240 = 176 + (B_alone + C_alone). म्हणून, B_alone + C_alone = 240 - 176 = 64. प्रश्नात फक्त बास्केटबॉल किंवा फक्त क्रिकेट खेळणाऱ्या खेळाडूंची एकूण संख्या विचारली आहे, जी B_alone + C_alone आहे.",
    "options_breakdown": [
      {
        "option": "60",
        "is_correct": false,
        "reason_english": "This is the number of players who play exactly two games, not Basketball alone or Cricket alone.",
        "reason_marathi": "ही फक्त दोन खेळ खेळणाऱ्या खेळाडूंची संख्या आहे, फक्त बास्केटबॉल किंवा फक्त क्रिकेट खेळणाऱ्यांची नाही."
      },
      {
        "option": "58",
        "is_correct": false,
        "reason_english": "This value is incorrect based on the calculations.",
        "reason_marathi": "हे मूल्य गणितानुसार चुकीचे आहे."
      },
      {
        "option": "63",
        "is_correct": false,
        "reason_english": "This value is incorrect based on the calculations.",
        "reason_marathi": "हे मूल्य गणितानुसार चुकीचे आहे."
      },
      {
        "option": "64",
        "is_correct": true,
        "reason_english": "This is the correct total number of players who can play Basketball alone or Cricket alone.",
        "reason_marathi": "ही फक्त बास्केटबॉल किंवा फक्त क्रिकेट खेळणाऱ्या खेळाडूंची योग्य एकूण संख्या आहे."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "एका संकेत प्रणालीनुसार, 'poachers killed some tigers' या संकेत 'sto del war vqr' हा आहे, 'tigers are brave creatures' चा संकेत 'puz war lyn mul' हा आहे, 'some watchmen are brave' चा संकेत 'sto mul lyn kig' असा आहे आणि 'watchmen are searching poachers' चा संकेत 'del agf kig lyn' असा आहे. या संकेत प्रणालीनुसार 'creatures killed watchman' चा संकेत निवडा.",
    "question_english": "According to certain coding system, 'poachers killed some tigers' is coded as 'sto del war vqr', 'tigers are brave creatures' is coded as 'puz war lyn mul', 'some watchmen are brave' is coded as 'sto mul lyn kig' and 'watchmen are searching poachers' is coded as 'del agf kig lyn'. Select the code for 'creatures killed watchman'.",
    "options_marathi": [
      "kig, agf, del",
      "vqr, puz, kig",
      "puz, del, vqr",
      "lyn, kig, agf"
    ],
    "options_english": [
      "kig, agf, del",
      "vqr, puz, kig",
      "puz, del, vqr",
      "lyn, kig, agf"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Coding-Decoding",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "This is a coding-decoding problem where words are mapped to specific codes. We need to find the code for 'creatures killed watchman' by identifying the individual codes for each word from the given statements.\n1. 'poachers killed some tigers' -> 'sto del war vqr'\n2. 'tigers are brave creatures' -> 'puz war lyn mul'\n3. 'some watchmen are brave' -> 'sto mul lyn kig'\n4. 'watchmen are searching poachers' -> 'del agf kig lyn'\n\nComparing (1) and (2): Common word 'tigers', common code 'war'. So, `tigers = war`.\nComparing (1) and (3): Common word 'some', common code 'sto'. So, `some = sto`.\nComparing (2), (3), and (4): Common word 'are', common code 'lyn'. So, `are = lyn`.\nComparing (2) and (3) after finding 'are': Common word 'brave', common code 'mul'. So, `brave = mul`.\nComparing (1) and (4): Common word 'poachers', common code 'del'. So, `poachers = del`.\nComparing (3) and (4) after finding 'are': Common word 'watchmen', common code 'kig'. So, `watchmen = kig`.\n\nNow, deduce remaining words:\nFrom (1): 'killed' is the only word left, 'vqr' is the only code left. So, `killed = vqr`.\nFrom (2): 'creatures' is the only word left, 'puz' is the only code left. So, `creatures = puz`.\n\nFinally, for 'creatures killed watchman':\n`creatures` = `puz`\n`killed` = `vqr`\n`watchman` = `kig`\nThe code is `puz vqr kig` (order may vary in options).",
    "explanation_marathi": "हा एक सांकेतिक भाषा (coding-decoding) प्रश्न आहे जिथे शब्दांना विशिष्ट कोड दिले आहेत. 'creatures killed watchman' साठी कोड शोधण्यासाठी, दिलेल्या विधानांमधून प्रत्येक शब्दासाठी वैयक्तिक कोड ओळखणे आवश्यक आहे.\n1. 'poachers killed some tigers' -> 'sto del war vqr'\n2. 'tigers are brave creatures' -> 'puz war lyn mul'\n3. 'some watchmen are brave' -> 'sto mul lyn kig'\n4. 'watchmen are searching poachers' -> 'del agf kig lyn'\n\n(1) आणि (2) यांची तुलना केल्यास: समान शब्द 'tigers', समान कोड 'war'. म्हणून, `tigers = war`.\n(1) आणि (3) यांची तुलना केल्यास: समान शब्द 'some', समान कोड 'sto'. म्हणून, `some = sto`.\n(2), (3) आणि (4) यांची तुलना केल्यास: समान शब्द 'are', समान कोड 'lyn'. म्हणून, `are = lyn`.\n'are' सापडल्यानंतर (2) आणि (3) यांची तुलना केल्यास: समान शब्द 'brave', समान कोड 'mul'. म्हणून, `brave = mul`.\n(1) आणि (4) यांची तुलना केल्यास: समान शब्द 'poachers', समान कोड 'del'. म्हणून, `poachers = del`.\n'are' सापडल्यानंतर (3) आणि (4) यांची तुलना केल्यास: समान शब्द 'watchmen', समान कोड 'kig'. म्हणून, `watchmen = kig`.\n\nआता, उर्वरित शब्दांचे कोड शोधूया:\n(1) मधून: 'killed' हा एकमेव शब्द शिल्लक आहे, 'vqr' हा एकमेव कोड शिल्लक आहे. म्हणून, `killed = vqr`.\n(2) मधून: 'creatures' हा एकमेव शब्द शिल्लक आहे, 'puz' हा एकमेव कोड शिल्लक आहे. म्हणून, `creatures = puz`.\n\nशेवटी, 'creatures killed watchman' साठी:\n`creatures` = `puz`\n`killed` = `vqr`\n`watchman` = `kig`\nकोड `puz vqr kig` आहे (पर्यायांमध्ये क्रम बदलू शकतो).",
    "options_breakdown": [
      {
        "option": "kig, agf, del",
        "is_correct": false,
        "reason_english": "This includes 'agf' (searching) and 'del' (poachers), which are incorrect for the target phrase.",
        "reason_marathi": "यात 'agf' (searching) आणि 'del' (poachers) समाविष्ट आहेत, जे दिलेल्या वाक्यासाठी चुकीचे आहेत."
      },
      {
        "option": "vqr, puz, kig",
        "is_correct": true,
        "reason_english": "This correctly matches the codes for 'killed' (vqr), 'creatures' (puz), and 'watchman' (kig).",
        "reason_marathi": "हे 'killed' (vqr), 'creatures' (puz) आणि 'watchman' (kig) या शब्दांच्या कोडशी योग्यरित्या जुळते."
      },
      {
        "option": "puz, del, vqr",
        "is_correct": false,
        "reason_english": "This includes 'del' (poachers), which is incorrect for the target phrase.",
        "reason_marathi": "यात 'del' (poachers) समाविष्ट आहे, जे दिलेल्या वाक्यासाठी चुकीचे आहे."
      },
      {
        "option": "lyn, kig, agf",
        "is_correct": false,
        "reason_english": "This includes 'lyn' (are) and 'agf' (searching), which are incorrect for the target phrase.",
        "reason_marathi": "यात 'lyn' (are) आणि 'agf' (searching) समाविष्ट आहेत, जे दिलेल्या वाक्यासाठी चुकीचे आहेत."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "\"मिताने जमनावर मात केली\", हा निष्कर्ष नेहमी सत्य ठरवणारी दोन तथ्ये ओळखा. तथ्ये : (a) जमना व मिता या दोघींनी तानीवर मात केली, जी सर्वात शेवटी आली. (b) मिता दुसरी आली. (c) जमनाने तानीवर मात केली पण ती पहिली आली नाही. (d) मिताने शामावर मात केली.",
    "question_english": "Identify two facts that prove conclusion, \"Mita beat Jamna\" to be always true. Facts : (a) Jamna and Mita both beat Tani, who finished last. (b) Mita finished runner-up. (c) Jamna beat Tani but did not stand first. (d) Mita beat Shama.",
    "options_marathi": [
      "(a), (b)",
      "(a), (c)",
      "(b), (c)",
      "(b), (d)"
    ],
    "options_english": [
      "(a), (b)",
      "(a), (c)",
      "(b), (c)",
      "(b), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Logical Reasoning / Ranking",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "We need to find two facts that definitively prove the conclusion \"Mita beat Jamna\" (Mita finished ahead of Jamna).\nConclusion: Mita > Jamna\n\nLet's analyze the facts:\n(a) Jamna and Mita both beat Tani, who finished last. (J > T, M > T, T = Last). This tells us J and M are not last, but doesn't compare J and M directly.\n(b) Mita finished runner-up. (M = 2nd place). This is a strong positional statement for Mita.\n(c) Jamna beat Tani but did not stand first. (J > T, J ≠ 1st). This tells us Jamna is not first.\n(d) Mita beat Shama. (M > S). This doesn't involve Jamna.\n\nNow let's check the options:\n(b), (c): Mita finished runner-up (M = 2nd) (from b). Jamna did not stand first (J ≠ 1st) (from c). Since Mita is 2nd, and Jamna is not 1st, Jamna must be 3rd or lower. Therefore, Mita (2nd) must have beaten Jamna (3rd or lower). This combination definitively proves \"Mita beat Jamna\".",
    "explanation_marathi": "आपल्याला \"मिताने जमनावर मात केली\" (मिता जमनापेक्षा पुढे होती) हा निष्कर्ष नेहमी सत्य ठरवणारी दोन तथ्ये शोधायची आहेत.\nनिष्कर्ष: मिता > जमना\n\nतथ्यांचे विश्लेषण करूया:\n(a) जमना आणि मिता या दोघींनी तानीवर मात केली, जी सर्वात शेवटी आली. (ज > ता, मि > ता, ता = शेवटची). यावरून जमना आणि मिता शेवटच्या नाहीत हे कळते, पण त्यांच्यातील तुलना होत नाही.\n(b) मिता दुसरी आली. (मि = दुसरे स्थान). हे मिताच्या स्थानाबद्दल एक ठोस विधान आहे.\n(c) जमनाने तानीवर मात केली पण ती पहिली आली नाही. (ज > ता, ज ≠ पहिले). यावरून जमना पहिली नाही हे कळते.\n(d) मिताने शामावर मात केली. (मि > शा). यात जमनाचा समावेश नाही.\n\nआता पर्यायांची तपासणी करूया:\n(b), (c): मिता दुसरी आली (मि = दुसरे स्थान) (b). जमना पहिली आली नाही (ज ≠ पहिले) (c). मिता दुसरी असल्यामुळे आणि जमना पहिली नसल्यामुळे, जमना तिसरी किंवा त्याहून खालच्या स्थानावर असली पाहिजे. म्हणून, मिता (दुसरी) निश्चितपणे जमना (तिसरी किंवा त्याहून खालची) पेक्षा पुढे आहे. हा पर्याय \"मिताने जमनावर मात केली\" हे निश्चितपणे सिद्ध करतो.",
    "options_breakdown": [
      {
        "option": "(a), (b)",
        "is_correct": false,
        "reason_english": "While this combination implies Mita beat Jamna, option (b), (c) is more direct and minimal. If Mita is 2nd and Jamna is not 1st, Jamna must be 3rd or lower.",
        "reason_marathi": "या संयोजनातून मिताने जमनावर मात केली हे सूचित होते, तरी (b), (c) हा पर्याय अधिक थेट आणि किमान आहे. जर मिता दुसरी असेल आणि जमना पहिली नसेल, तर जमना तिसरी किंवा त्याहून खालच्या स्थानावर असली पाहिजे."
      },
      {
        "option": "(a), (c)",
        "is_correct": false,
        "reason_english": "This combination does not definitively prove Mita beat Jamna, as Jamna could be 2nd and Mita 3rd.",
        "reason_marathi": "हे संयोजन मिताने जमनावर मात केली हे निश्चितपणे सिद्ध करत नाही, कारण जमना दुसरी आणि मिता तिसरी असू शकते."
      },
      {
        "option": "(b), (c)",
        "is_correct": true,
        "reason_english": "This combination definitively proves Mita beat Jamna. If Mita is 2nd, and Jamna is not 1st, then Jamna must be 3rd or lower, meaning Mita finished ahead of Jamna.",
        "reason_marathi": "हे संयोजन मिताने जमनावर मात केली हे निश्चितपणे सिद्ध करते. जर मिता दुसरी असेल आणि जमना पहिली नसेल, तर जमना तिसरी किंवा त्याहून खालच्या स्थानावर असली पाहिजे, याचा अर्थ मिता जमनापेक्षा पुढे होती."
      },
      {
        "option": "(b), (d)",
        "is_correct": false,
        "reason_english": "This combination provides no information about Jamna's position relative to Mita.",
        "reason_marathi": "हे संयोजन जमनाच्या स्थानाबद्दल मिताच्या तुलनेत कोणतीही माहिती देत नाही."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "सात ख्रिसमस भेटवस्तू आणि सात संपत खुणा केलेले एकतरफे खोके आहेत. जर भेटी यादृच्छिक रीतीने खोक्यात ठेवल्या तर नेमक्या सहा भेटी नेमक्या योग्य खुणेच्या खोक्यात जाण्याची संभाव्यता निवडा.",
    "question_english": "There are seven Christmas gifts and seven correspondingly tagged identical boxes. If the gifts are randomly put in the boxes, select the probability that exactly six gifts go into the correctly tagged boxes.",
    "options_marathi": [
      "1/6",
      "शून्य",
      "1/7",
      "6/7"
    ],
    "options_english": [
      "1/6",
      "Zero",
      "1/7",
      "6/7"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Probability / Derangements",
    "difficulty": "Hard",
    "trap_detected": "Conceptual Trap",
    "explanation_english": "This is a classic problem in probability related to derangements. We have 7 distinct gifts and 7 distinct (tagged) boxes. The gifts are put randomly into the boxes. We need to find the probability that *exactly six* gifts go into their correctly tagged boxes.\nConsider the scenario: If exactly six gifts are placed in their correctly tagged boxes, it means that the remaining one gift must also be placed. Let's say gifts G1, G2, G3, G4, G5, G6 are in their correct boxes B1, B2, B3, B4, B5, B6 respectively. This leaves gift G7 and box B7. For G1-G6 to be correctly placed, G7 *must* be placed in box B7. There is no other box for G7 to go into, as all other boxes are already occupied by their respective correct gifts. If G7 is placed in B7, then all seven gifts are in their correctly tagged boxes. This contradicts the condition that *exactly six* gifts are in their correctly tagged boxes. Therefore, it is impossible for exactly six gifts to be in their correctly tagged boxes. If six are correct, the seventh must also be correct. The probability of an impossible event is 0.",
    "explanation_marathi": "हा संभाव्यतेचा एक क्लासिक प्रश्न आहे, जो 'डेरेंजमेंट्स' (derangements) शी संबंधित आहे. आपल्याकडे 7 वेगवेगळ्या भेटवस्तू आणि 7 वेगवेगळ्या (टॅग केलेल्या) पेट्या आहेत. भेटवस्तू यादृच्छिकपणे पेट्यांमध्ये ठेवल्या जातात. आपल्याला नेमक्या सहा भेटवस्तू त्यांच्या योग्य टॅग केलेल्या पेट्यांमध्ये जाण्याची संभाव्यता शोधायची आहे.\nपरिस्थितीचा विचार करा: जर नेमक्या सहा भेटवस्तू त्यांच्या योग्य टॅग केलेल्या पेट्यांमध्ये ठेवल्या गेल्या, तर याचा अर्थ उर्वरित एक भेटवस्तू देखील ठेवली गेली पाहिजे. समजा भेटवस्तू G1, G2, G3, G4, G5, G6 त्यांच्या योग्य पेट्या B1, B2, B3, B4, B5, B6 मध्ये ठेवल्या आहेत. यामुळे भेटवस्तू G7 आणि पेटी B7 शिल्लक राहते. G1-G6 योग्यरित्या ठेवल्या गेल्या असतील, तर G7 ही पेटी B7 मध्येच ठेवली पाहिजे. G7 साठी दुसरी कोणतीही पेटी उपलब्ध नाही, कारण इतर सर्व पेट्या त्यांच्या संबंधित योग्य भेटवस्तूंनी आधीच व्यापलेल्या आहेत. जर G7 पेटी B7 मध्ये ठेवली गेली, तर सर्व सात भेटवस्तू त्यांच्या योग्य टॅग केलेल्या पेट्यांमध्ये असतील. हे \"नेमक्या सहा भेटवस्तू त्यांच्या योग्य टॅग केलेल्या पेट्यांमध्ये\" या अटीच्या विरोधात आहे. म्हणून, नेमक्या सहा भेटवस्तू त्यांच्या योग्य टॅग केलेल्या पेट्यांमध्ये असणे अशक्य आहे. जर सहा योग्य असतील, तर सातवी देखील योग्यच असली पाहिजे. अशक्य घटनेची संभाव्यता 0 असते.",
    "options_breakdown": [
      {
        "option": "1/6",
        "is_correct": false,
        "reason_english": "This is incorrect. It might be a distractor if one incorrectly calculates derangements or permutations.",
        "reason_marathi": "हे चुकीचे आहे. जर कोणी 'डेरेंजमेंट्स' किंवा 'परम्यूटेशन्स' चुकीच्या पद्धतीने मोजले तर हा एक विचलित करणारा पर्याय असू शकतो."
      },
      {
        "option": "Zero",
        "is_correct": true,
        "reason_english": "This is the correct answer. It is impossible for exactly N-1 items to be in their correct places when N items are being placed into N corresponding places.",
        "reason_marathi": "हे योग्य उत्तर आहे. जेव्हा N वस्तू N संबंधित ठिकाणी ठेवल्या जातात, तेव्हा नेमक्या N-1 वस्तू त्यांच्या योग्य ठिकाणी असणे अशक्य आहे."
      },
      {
        "option": "1/7",
        "is_correct": false,
        "reason_english": "This is incorrect.",
        "reason_marathi": "हे चुकीचे आहे."
      },
      {
        "option": "6/7",
        "is_correct": false,
        "reason_english": "This is incorrect.",
        "reason_marathi": "हे चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "खालील विधाने पहा. (a) जालना जिल्हा हिंगोली जिल्ह्याच्या पूर्वेस आहे. (b) धुळे आणि नंदूरबार जिल्ह्यास दोन राज्यांच्या सिमा आहेत. (c) महाराष्ट्र राज्याचे भौगोलिक क्षेत्रफळ 307713 चौ.कि.मी. आहे.",
    "question_english": "Observe the following statements : (a) Jalna district is located to the east of Hingoli district. (b) Dhule and Nandurbar districts have borders of two states. (c) The Geographical area of Maharashtra state is 307713 sq.km.",
    "options_marathi": [
      "फक्त विधान (a) बरोबर नाही.",
      "फक्त विधान (b) बरोबर नाही.",
      "फक्त विधान (c) बरोबर नाही.",
      "विधान (a) आणि (b) बरोबर नाहीत."
    ],
    "options_english": [
      "Only statement (a) is incorrect",
      "Only statement (b) is incorrect",
      "Only statement (c) is incorrect",
      "Statements (a) and (b) are incorrect"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Maharashtra Geography (Districts, Area)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Jalna-Hingoli relative position)",
    "explanation_english": "Let's evaluate each statement:\n(a) Jalna district is located to the east of Hingoli district. Looking at the map of Maharashtra, Hingoli district is located to the east of Parbhani district. Jalna district is located to the west of Parbhani district. Therefore, Hingoli is generally to the east of Jalna, or Jalna is to the west of Hingoli. The statement claims Jalna is to the east of Hingoli, which is incorrect.\n(b) Dhule and Nandurbar districts have borders of two states. Nandurbar district shares borders with Gujarat (west) and Madhya Pradesh (north). Dhule district shares borders with Madhya Pradesh (north) and Gujarat (west). Thus, both Dhule and Nandurbar districts share borders with two states. This statement is correct.\n(c) The Geographical area of Maharashtra state is 307713 sq.km. This is the officially recognized geographical area of Maharashtra state. This statement is correct.\nBased on the analysis, only statement (a) is incorrect.",
    "explanation_marathi": "प्रत्येक विधानाचे मूल्यांकन करूया:\n(a) जालना जिल्हा हिंगोली जिल्ह्याच्या पूर्वेस आहे. महाराष्ट्राच्या नकाशावर पाहिल्यास, हिंगोली जिल्हा परभणी जिल्ह्याच्या पूर्वेस आहे. जालना जिल्हा परभणी जिल्ह्याच्या पश्चिमेस आहे. त्यामुळे, हिंगोली साधारणपणे जालनाच्या पूर्वेस आहे, किंवा जालना हिंगोलीच्या पश्चिमेस आहे. विधान म्हणते की जालना हिंगोलीच्या पूर्वेस आहे, जे चुकीचे आहे.\n(b) धुळे आणि नंदूरबार जिल्ह्यास दोन राज्यांच्या सिमा आहेत. नंदुरबार जिल्ह्याची सीमा गुजरात (पश्चिम) आणि मध्य प्रदेश (उत्तर) या दोन राज्यांशी लागून आहे. धुळे जिल्ह्याची सीमा मध्य प्रदेश (उत्तर) आणि गुजरात (पश्चिम) या दोन राज्यांशी लागून आहे. म्हणून, धुळे आणि नंदुरबार दोन्ही जिल्ह्यांच्या सीमा दोन राज्यांशी लागून आहेत. हे विधान बरोबर आहे.\n(c) महाराष्ट्र राज्याचे भौगोलिक क्षेत्रफळ 307713 चौ.कि.मी. आहे. हे महाराष्ट्राच्या भौगोलिक क्षेत्रफळाचे अधिकृत आकडेवारी आहे. हे विधान बरोबर आहे.\nविश्लेषणानुसार, फक्त विधान (a) चुकीचे आहे.",
    "options_breakdown": [
      {
        "option": "Only statement (a) is incorrect",
        "is_correct": true,
        "reason_english": "Statement (a) is factually incorrect. Jalna district is located to the west of Hingoli district, not to the east.",
        "reason_marathi": "विधान (a) वस्तुस्थितीनुसार चुकीचे आहे. जालना जिल्हा हिंगोली जिल्ह्याच्या पश्चिमेस आहे, पूर्वेस नाही."
      },
      {
        "option": "Only statement (b) is incorrect",
        "is_correct": false,
        "reason_english": "Statement (b) is correct. Both Dhule and Nandurbar districts share borders with two states (Gujarat and Madhya Pradesh).",
        "reason_marathi": "विधान (b) बरोबर आहे. धुळे आणि नंदुरबार दोन्ही जिल्ह्यांच्या सीमा दोन राज्यांशी (गुजरात आणि मध्य प्रदेश) लागून आहेत."
      },
      {
        "option": "Only statement (c) is incorrect",
        "is_correct": false,
        "reason_english": "Statement (c) is correct. The geographical area of Maharashtra is indeed 307713 sq.km.",
        "reason_marathi": "विधान (c) बरोबर आहे. महाराष्ट्राचे भौगोलिक क्षेत्रफळ 307713 चौ.कि.मी. आहे."
      },
      {
        "option": "Statements (a) and (b) are incorrect",
        "is_correct": false,
        "reason_english": "Statement (b) is correct, so this option is incorrect.",
        "reason_marathi": "विधान (b) बरोबर आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "जनगणना 2001 आणि 2011 प्रमाणे ठाणे जिल्ह्यामध्ये ______ आणि ______ शहरे होती.",
    "question_english": "As per the census 2001 and 2011 ______ and ______ towns exist in Thane district.",
    "options_marathi": [
      "27 आणि 47",
      "48 आणि 51",
      "37 आणि 51",
      "50 आणि 56"
    ],
    "options_english": [
      "27 and 47",
      "48 and 51",
      "37 and 51",
      "50 and 56"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Maharashtra Demography (Census Data)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question requires specific knowledge of census data for Thane district before its bifurcation (Palghar district was carved out in 2014). As per Census 2001, Thane district had 37 towns. As per Census 2011, Thane district had 51 towns. These figures represent the number of statutory towns and census towns within the geographical boundaries of the undivided Thane district at the time of the respective censuses.",
    "explanation_marathi": "या प्रश्नासाठी ठाणे जिल्ह्याच्या विभाजनापूर्वीच्या (पालघर जिल्ह्याची निर्मिती 2014 मध्ये झाली) जनगणनेच्या आकडेवारीचे विशिष्ट ज्ञान आवश्यक आहे. जनगणना 2001 नुसार, ठाणे जिल्ह्यात 37 शहरे होती. जनगणना 2011 नुसार, ठाणे जिल्ह्यात 51 शहरे होती. ही आकडेवारी संबंधित जनगणनेच्या वेळी अविभाजित ठाणे जिल्ह्याच्या भौगोलिक हद्दीतील वैधानिक शहरे आणि जनगणना शहरांची संख्या दर्शवते.",
    "options_breakdown": [
      {
        "option": "27 and 47",
        "is_correct": false,
        "reason_english": "These figures are incorrect for Thane district for the specified census years.",
        "reason_marathi": "ही आकडेवारी नमूद केलेल्या जनगणनेच्या वर्षांसाठी ठाणे जिल्ह्यासाठी चुकीची आहे."
      },
      {
        "option": "48 and 51",
        "is_correct": false,
        "reason_english": "The first figure (48) is incorrect for 2001.",
        "reason_marathi": "पहिली आकडेवारी (48) 2001 साठी चुकीची आहे."
      },
      {
        "option": "37 and 51",
        "is_correct": true,
        "reason_english": "This option correctly states the number of towns in Thane district as per Census 2001 (37) and Census 2011 (51).",
        "reason_marathi": "हा पर्याय जनगणना 2001 (37) आणि जनगणना 2011 (51) नुसार ठाणे जिल्ह्यातील शहरांची योग्य संख्या दर्शवतो."
      },
      {
        "option": "50 and 56",
        "is_correct": false,
        "reason_english": "These figures are incorrect for Thane district for the specified census years.",
        "reason_marathi": "ही आकडेवारी नमूद केलेल्या जनगणनेच्या वर्षांसाठी ठाणे जिल्ह्यासाठी चुकीची आहे."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "खालील विधाने पहा : (a) गडचिरोली जिल्ह्याची दक्षिण सिमा ही इंद्रावती व प्राणहिता नद्यांनी बनलेली आहे. (b) इंद्रावती नदी ही छत्तीसगड राज्याच्या सिमेवर असून, प्राणहिता नदी ही तेलंगणा राज्याशी असलेल्या सिमेवर आहे.",
    "question_english": "Observe the following statements : (a) The Indravati and Pranhita rivers form the Southern boundary of the Gadchiroli district. (b) The Indravati forms a boundary with Chhattisgarh state while the Pranhita with Telangana state.",
    "options_marathi": [
      "(a) आणि (b) बरोबर",
      "(a) बरोबर (b) चूक",
      "(a) चूक (b) बरोबर",
      "(a) आणि (b) चूक"
    ],
    "options_english": [
      "(a) and (b) True",
      "(a) True (b) False",
      "(a) False (b) True",
      "(a) and (b) False"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Maharashtra Geography (Rivers, Boundaries)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Indravati boundary direction)",
    "explanation_english": "Let's evaluate each statement regarding Gadchiroli district's boundaries:\n(a) The Indravati and Pranhita rivers form the Southern boundary of the Gadchiroli district. The Pranhita river (formed by the confluence of Wardha and Wainganga) indeed forms a significant part of the southern boundary of Gadchiroli district, separating it from Telangana. However, the Indravati river forms the *eastern* boundary of Gadchiroli district, separating it from Chhattisgarh. It does not form the southern boundary. Therefore, statement (a) is incorrect.\n(b) The Indravati forms a boundary with Chhattisgarh state while the Pranhita with Telangana state. The Indravati river flows along the eastern border of Gadchiroli, forming a natural boundary with Chhattisgarh state. This is correct. The Pranhita river flows along the southern border of Gadchiroli, forming a natural boundary with Telangana state. This is also correct. Therefore, statement (b) is correct.\nBased on the analysis, statement (a) is false, and statement (b) is true.",
    "explanation_marathi": "गडचिरोली जिल्ह्याच्या सीमांबाबत प्रत्येक विधानाचे मूल्यांकन करूया:\n(a) गडचिरोली जिल्ह्याची दक्षिण सिमा ही इंद्रावती व प्राणहिता नद्यांनी बनलेली आहे. प्राणहिता नदी (वर्धा आणि वैनगंगा नद्यांच्या संगमातून तयार झालेली) गडचिरोली जिल्ह्याच्या दक्षिण सीमेचा एक महत्त्वाचा भाग बनवते, जी त्याला तेलंगणापासून वेगळे करते. परंतु, इंद्रावती नदी गडचिरोली जिल्ह्याची **पूर्व** सीमा बनवते, जी त्याला छत्तीसगडपासून वेगळे करते. ती दक्षिण सीमा बनवत नाही. म्हणून, विधान (a) चुकीचे आहे.\n(b) इंद्रावती नदी ही छत्तीसगड राज्याच्या सिमेवर असून, प्राणहिता नदी ही तेलंगणा राज्याशी असलेल्या सिमेवर आहे. इंद्रावती नदी गडचिरोलीच्या पूर्वेकडील सीमेवर वाहते, छत्तीसगड राज्यासोबत नैसर्गिक सीमा तयार करते. हे बरोबर आहे. प्राणहिता नदी गडचिरोलीच्या दक्षिणेकडील सीमेवर वाहते, तेलंगणा राज्यासोबत नैसर्गिक सीमा तयार करते. हे देखील बरोबर आहे. म्हणून, विधान (b) बरोबर आहे.\nविश्लेषणानुसार, विधान (a) चुकीचे आहे आणि विधान (b) बरोबर आहे.",
    "options_breakdown": [
      {
        "option": "(a) and (b) True",
        "is_correct": false,
        "reason_english": "Statement (a) is false because the Indravati river forms the eastern boundary, not the southern boundary.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण इंद्रावती नदी पूर्वेकडील सीमा बनवते, दक्षिणेकडील नाही."
      },
      {
        "option": "(a) True (b) False",
        "is_correct": false,
        "reason_english": "Statement (a) is false, and statement (b) is true.",
        "reason_marathi": "विधान (a) चुकीचे आहे आणि विधान (b) बरोबर आहे."
      },
      {
        "option": "(a) False (b) True",
        "is_correct": true,
        "reason_english": "Statement (a) is false (Indravati is eastern boundary), and statement (b) is true (Indravati with Chhattisgarh, Pranhita with Telangana).",
        "reason_marathi": "विधान (a) चुकीचे आहे (इंद्रावती पूर्वेकडील सीमा आहे), आणि विधान (b) बरोबर आहे (इंद्रावती छत्तीसगडसोबत, प्राणहिता तेलंगणासोबत)."
      },
      {
        "option": "(a) and (b) False",
        "is_correct": false,
        "reason_english": "Statement (b) is true, so this option is incorrect.",
        "reason_marathi": "विधान (b) बरोबर आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "खालील विधाने पहा : (a) प्रवरा नदी ही गोदावरीची उपनदी असून ती हरिश्चंद्र डोंगराच्या उत्तरेस स्थित आहे. (b) वर्धा आणि वैनगंगा या गोदावरी नदीच्या उपनद्या आहेत.",
    "question_english": "Observe the following statements : (a) Pravara is a tributary of river Godavari and located to the north of Harischandra mountain. (b) Wardha and Vainganga are the tributaries of river Godavari.",
    "options_marathi": [
      "विधान (a) बरोबर आहे",
      "विधान (b) बरोबर आहे",
      "विधाने (a) आणि (b) बरोबर आहेत",
      "विधाने (a) आणि (b) बरोबर नाहीत"
    ],
    "options_english": [
      "Statement (a) is correct",
      "Statement (b) is correct",
      "Statements (a) and (b) are correct",
      "Statements (a) and (b) are not correct"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Maharashtra Geography (Rivers, Tributaries)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's evaluate each statement regarding rivers in Maharashtra:\n(a) Pravara is a tributary of river Godavari and located to the north of Harischandra mountain. The Pravara river is indeed a significant right-bank tributary of the Godavari river. It originates in the Harishchandragad mountain range (part of the Western Ghats) near Ratangad. Its initial course is generally north-easterly, flowing to the north of the main Harishchandragad peaks before turning east. So, it is generally located to the north of the Harishchandra mountain range. This statement is correct.\n(b) Wardha and Vainganga are the tributaries of river Godavari. The Wardha and Wainganga rivers are major rivers in the Vidarbha region of Maharashtra. They are indeed important tributaries of the Godavari river system. They converge to form the Pranhita river, which then flows into the Godavari. Thus, they are considered part of the Godavari basin and its tributaries. This statement is correct.\nBased on the analysis, both statements (a) and (b) are correct.",
    "explanation_marathi": "महाराष्ट्रातील नद्यांबाबत प्रत्येक विधानाचे मूल्यांकन करूया:\n(a) प्रवरा नदी ही गोदावरीची उपनदी असून ती हरिश्चंद्र डोंगराच्या उत्तरेस स्थित आहे. प्रवरा नदी ही गोदावरी नदीची एक महत्त्वाची उजव्या तीरावरील उपनदी आहे. ती हरिश्चंद्रगड पर्वतरांगेत (पश्चिम घाटाचा भाग) रतनगडजवळ उगम पावते. तिचा सुरुवातीचा प्रवाह साधारणपणे ईशान्येकडील असतो, हरिश्चंद्रगडाच्या मुख्य शिखरांच्या उत्तरेकडून पूर्वेकडे वळण्यापूर्वी ती वाहते. त्यामुळे ती हरिश्चंद्र पर्वतरांगेच्या उत्तरेस स्थित आहे. हे विधान बरोबर आहे.\n(b) वर्धा आणि वैनगंगा या गोदावरी नदीच्या उपनद्या आहेत. वर्धा आणि वैनगंगा नद्या महाराष्ट्रातील विदर्भ प्रदेशातील प्रमुख नद्या आहेत. त्या गोदावरी नदी प्रणालीच्या महत्त्वाच्या उपनद्या आहेत. त्या एकत्र येऊन प्राणहिता नदी तयार करतात, जी नंतर गोदावरीला मिळते. त्यामुळे त्यांना गोदावरी खोऱ्याचा आणि तिच्या उपनद्यांचा भाग मानले जाते. हे विधान बरोबर आहे.\nविश्लेषणानुसार, दोन्ही विधाने (a) आणि (b) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option": "Statement (a) is correct",
        "is_correct": false,
        "reason_english": "While statement (a) is correct, statement (b) is also correct, making option 3 the most complete answer.",
        "reason_marathi": "विधान (a) बरोबर असले तरी, विधान (b) देखील बरोबर आहे, त्यामुळे पर्याय 3 हे सर्वात योग्य उत्तर आहे."
      },
      {
        "option": "Statement (b) is correct",
        "is_correct": false,
        "reason_english": "While statement (b) is correct, statement (a) is also correct, making option 3 the most complete answer.",
        "reason_marathi": "विधान (b) बरोबर असले तरी, विधान (a) देखील बरोबर आहे, त्यामुळे पर्याय 3 हे सर्वात योग्य उत्तर आहे."
      },
      {
        "option": "Statements (a) and (b) are correct",
        "is_correct": true,
        "reason_english": "Both statements (a) and (b) are factually correct regarding the Pravara, Wardha, and Vainganga rivers and their relation to the Godavari basin.",
        "reason_marathi": "प्रवरा, वर्धा आणि वैनगंगा नद्या आणि त्यांचा गोदावरी खोऱ्याशी असलेला संबंध याबद्दल दोन्ही विधाने (a) आणि (b) वस्तुस्थितीनुसार बरोबर आहेत."
      },
      {
        "option": "Statements (a) and (b) are not correct",
        "is_correct": false,
        "reason_english": "Both statements (a) and (b) are correct, so this option is incorrect.",
        "reason_marathi": "दोन्ही विधाने (a) आणि (b) बरोबर आहेत, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "कोणते चक्रीवादळ 17-05-2021 दरम्यान महाराष्ट्राच्या किनारपट्टीवर परिणाम करून गेले ?",
    "question_english": "Which cyclonic storm affected the coast of Maharashtra during 17-05-2021?",
    "options_marathi": [
      "निसर्ग",
      "गुलाब",
      "तौक्ते",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Nisarg",
      "Gulab",
      "Tauktae",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Current Affairs",
    "topic": "Cyclones / Natural Disasters",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "This question asks about a specific cyclonic storm that affected the Maharashtra coast on 17-05-2021.\nCyclone Nisarg affected Maharashtra in June 2020.\nCyclone Gulab affected the east coast (Odisha, Andhra Pradesh) in September 2021.\nCyclone Tauktae was a very severe cyclonic storm that formed in the Arabian Sea and intensified, making landfall in Gujarat. It significantly affected the west coast of India, including Maharashtra, between May 14-18, 2021, causing heavy rainfall, strong winds, and damage along the coastal districts of Maharashtra. The date 17-05-2021 falls squarely within the period of Tauktae's impact on Maharashtra. Therefore, Cyclone Tauktae is the correct answer.",
    "explanation_marathi": "हा प्रश्न 17-05-2021 रोजी महाराष्ट्राच्या किनारपट्टीवर परिणाम केलेल्या विशिष्ट चक्रीवादळाबद्दल आहे.\nनिसर्ग चक्रीवादळ जून 2020 मध्ये महाराष्ट्रावर परिणाम करून गेले.\nगुलाब चक्रीवादळ सप्टेंबर 2021 मध्ये पूर्व किनारपट्टीवर (ओडिशा, आंध्र प्रदेश) परिणाम करून गेले.\nतौक्ते चक्रीवादळ हे अरबी समुद्रात तयार झालेले एक अत्यंत तीव्र चक्रीवादळ होते आणि ते गुजरातमध्ये धडकले. 14-18 मे 2021 दरम्यान या चक्रीवादळाने महाराष्ट्राच्या किनारपट्टीवरील जिल्ह्यांमध्ये मुसळधार पाऊस, जोरदार वारे आणि नुकसान केले. 17-05-2021 ही तारीख तौक्तेच्या महाराष्ट्रावरील प्रभावाच्या कालावधीत येते. म्हणून, तौक्ते चक्रीवादळ हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option": "Nisarg",
        "is_correct": false,
        "reason_english": "Cyclone Nisarg affected Maharashtra in June 2020, not May 2021.",
        "reason_marathi": "निसर्ग चक्रीवादळाने जून 2020 मध्ये महाराष्ट्रावर परिणाम केला होता, मे 2021 मध्ये नाही."
      },
      {
        "option": "Gulab",
        "is_correct": false,
        "reason_english": "Cyclone Gulab affected the east coast in September 2021, not Maharashtra's west coast in May 2021.",
        "reason_marathi": "गुलाब चक्रीवादळाने सप्टेंबर 2021 मध्ये पूर्व किनारपट्टीवर परिणाम केला होता, मे 2021 मध्ये महाराष्ट्राच्या पश्चिम किनारपट्टीवर नाही."
      },
      {
        "option": "Tauktae",
        "is_correct": true,
        "reason_english": "Cyclone Tauktae severely affected the Maharashtra coast around May 17, 2021, making it the correct answer.",
        "reason_marathi": "तौक्ते चक्रीवादळाने 17 मे 2021 च्या आसपास महाराष्ट्राच्या किनारपट्टीवर गंभीर परिणाम केला होता, त्यामुळे हे योग्य उत्तर आहे."
      },
      {
        "option": "None of the above",
        "is_correct": false,
        "reason_english": "Tauktae is the correct answer, so this option is incorrect.",
        "reason_marathi": "तौक्ते हे योग्य उत्तर आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "जोड्या जुळवा : जिल्हा (a) गडचिरोली (b) चंद्रपूर (c) गोंदिया (d) भंडारा तालुका (i) जिवती (ii) देवरी (iii) मुलचेरा (iv) लाखणी",
    "question_english": "Match the following: District (a) Gadchiroli (b) Chandrapur (c) Gondia (d) Bhandara Taluka (i) Jiwati (ii) Deori (iii) Mulchera (iv) Lakhani",
    "options_marathi": [
      "(ii) (iii) (iv) (i)",
      "(iii) (i) (ii) (iv)",
      "(iv) (iii) (i) (ii)",
      "(ii) (iv) (iii) (i)"
    ],
    "options_english": [
      "(ii) (iii) (iv) (i)",
      "(iii) (i) (ii) (iv)",
      "(iv) (iii) (i) (ii)",
      "(ii) (iv) (iii) (i)"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Districts and Talukas of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question tests the knowledge of administrative divisions in Maharashtra, specifically matching districts with their respective talukas. Gadchiroli district has Mulchera as one of its talukas. Chandrapur district includes Jiwati taluka. Deori is a taluka in Gondia district, and Lakhani is a taluka in Bhandara district. Accurate knowledge of these geographical divisions is essential for MPSC exams.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील प्रशासकीय विभागांचे, विशेषतः जिल्ह्यांची त्यांच्या संबंधित तालुक्यांशी जुळणी करण्याच्या ज्ञानाची चाचणी घेतो. गडचिरोली जिल्ह्यात मुलचेरा हा तालुका आहे. चंद्रपूर जिल्ह्यात जिवती तालुका समाविष्ट आहे. देवरी हा गोंदिया जिल्ह्यातील तालुका आहे आणि लाखणी हा भंडारा जिल्ह्यातील तालुका आहे. एमपीएससी परीक्षांसाठी या भौगोलिक विभागांचे अचूक ज्ञान आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(ii) (iii) (iv) (i)",
        "option_text_marathi": "(ii) (iii) (iv) (i)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Gadchiroli is not paired with Deori."
      },
      {
        "option_text_english": "(iii) (i) (ii) (iv)",
        "option_text_marathi": "(iii) (i) (ii) (iv)",
        "is_correct": true,
        "reason": "This option correctly matches: (a) Gadchiroli - (iii) Mulchera, (b) Chandrapur - (i) Jiwati, (c) Gondia - (ii) Deori, (d) Bhandara - (iv) Lakhani."
      },
      {
        "option_text_english": "(iv) (iii) (i) (ii)",
        "option_text_marathi": "(iv) (iii) (i) (ii)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Gadchiroli is not paired with Lakhani."
      },
      {
        "option_text_english": "(ii) (iv) (iii) (i)",
        "option_text_marathi": "(ii) (iv) (iii) (i)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Gadchiroli is not paired with Deori."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "जोड्या जुळवा : प्रशासकीय विभाग (a) अमरावती (b) नागपूर (c) औरंगाबाद (d) कोंकण तालुका (i) खालापूर (ii) सेनगाव (iii) भिवापूर (iv) घाटंजी",
    "question_english": "Match the following: Administrative Division (a) Amravati (b) Nagpur (c) Aurangabad (d) Konkan Tahsil (i) Khalapur (ii) Sengaon (iii) Bhivapur (iv) Ghatanji",
    "options_marathi": [
      "(iv) (iii) (ii) (i)",
      "(i) (ii) (iii) (iv)",
      "(iii) (i) (ii) (iv)",
      "(iv) (iii) (i) (ii)"
    ],
    "options_english": [
      "(iv) (iii) (ii) (i)",
      "(i) (ii) (iii) (iv)",
      "(iii) (i) (ii) (iv)",
      "(iv) (iii) (i) (ii)"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Administrative Divisions and Talukas of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall, similar options",
    "explanation_english": "This question tests the knowledge of administrative divisions in Maharashtra and the talukas falling under them. Ghatanji is a taluka in Yavatmal district, which is part of the Amravati division. Bhivapur is a taluka in Nagpur district, belonging to the Nagpur division. Sengaon is a taluka in Hingoli district, which comes under the Aurangabad division. Khalapur is a taluka in Raigad district, part of the Konkan division.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील प्रशासकीय विभाग आणि त्यांच्या अंतर्गत येणाऱ्या तालुक्यांच्या ज्ञानाची चाचणी घेतो. घाटंजी हा यवतमाळ जिल्ह्यातील तालुका आहे, जो अमरावती विभागाचा भाग आहे. भिवापूर हा नागपूर जिल्ह्यातील तालुका आहे, जो नागपूर विभागाशी संबंधित आहे. सेनगाव हा हिंगोली जिल्ह्यातील तालुका आहे, जो औरंगाबाद विभागांतर्गत येतो. खालापूर हा रायगड जिल्ह्यातील तालुका आहे, जो कोकण विभागाचा भाग आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(iv) (iii) (ii) (i)",
        "option_text_marathi": "(iv) (iii) (ii) (i)",
        "is_correct": true,
        "reason": "This option correctly matches: (a) Amravati - (iv) Ghatanji, (b) Nagpur - (iii) Bhivapur, (c) Aurangabad - (ii) Sengaon, (d) Konkan - (i) Khalapur."
      },
      {
        "option_text_english": "(i) (ii) (iii) (iv)",
        "option_text_marathi": "(i) (ii) (iii) (iv)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Amravati is not paired with Khalapur."
      },
      {
        "option_text_english": "(iii) (i) (ii) (iv)",
        "option_text_marathi": "(iii) (i) (ii) (iv)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Amravati is not paired with Bhivapur."
      },
      {
        "option_text_english": "(iv) (iii) (i) (ii)",
        "option_text_marathi": "(iv) (iii) (i) (ii)",
        "is_correct": false,
        "reason": "The pairings are incorrect. For example, Aurangabad is not paired with Khalapur."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "राज्यात ग्रामीण भागात घरे बांधण्यासाठी कोणती योजना आली व ती कधी सुरू झाली ?",
    "question_english": "When and which house building scheme was started in rural area of the state ?",
    "options_marathi": [
      "डॉ. मुखर्जी निवारा योजना – 2014",
      "इंदिरा आवास योजना – 1989",
      "जवाहर आवास योजना - 1995",
      "रोजगार हमी योजना - 2011"
    ],
    "options_english": [
      "Dr. Mukharji Niwara Yojana - 2014",
      "Indira Awas Yojana - 1989",
      "Jawahar Awas Yojana - 1995",
      "Rojgar Hami Yojana - 2011"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Rural Housing Schemes",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall, similar sounding schemes",
    "explanation_english": "The Indira Awas Yojana (IAY) was a major social welfare flagship programme, created by the Indian Government, to provide housing for the rural poor in India. It was launched in 1985 as a sub-scheme of the Rural Landless Employment Guarantee Programme (RLEGP) and later became an independent scheme from 1 January 1996. The year 1989 falls within the period when IAY was actively implemented for rural housing. Other options are either incorrect schemes for rural housing or have incorrect years.",
    "explanation_marathi": "इंदिरा आवास योजना (IAY) हा भारत सरकारने ग्रामीण भागातील गरिबांना घरे उपलब्ध करून देण्यासाठी तयार केलेला एक प्रमुख सामाजिक कल्याणकारी कार्यक्रम होता. ही योजना 1985 मध्ये ग्रामीण भूमिहीन रोजगार हमी कार्यक्रमाची (RLEGP) उप-योजना म्हणून सुरू करण्यात आली आणि नंतर 1 जानेवारी 1996 पासून ती एक स्वतंत्र योजना बनली. 1989 हे वर्ष IAY ग्रामीण घरांसाठी सक्रियपणे राबवले जात होते त्या कालावधीत येते. इतर पर्याय एकतर ग्रामीण घरांसाठी चुकीच्या योजना आहेत किंवा त्यांची वर्षे चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Dr. Mukharji Niwara Yojana - 2014",
        "option_text_marathi": "डॉ. मुखर्जी निवारा योजना – 2014",
        "is_correct": false,
        "reason": "Dr. Mukharji Niwara Yojana is not a prominent rural housing scheme, and 2014 is associated with Pradhan Mantri Awas Yojana (Gramin) which replaced IAY."
      },
      {
        "option_text_english": "Indira Awas Yojana - 1989",
        "option_text_marathi": "इंदिरा आवास योजना – 1989",
        "is_correct": true,
        "reason": "Indira Awas Yojana was a significant rural housing scheme, and 1989 falls within its active implementation period."
      },
      {
        "option_text_english": "Jawahar Awas Yojana - 1995",
        "option_text_marathi": "जवाहर आवास योजना - 1995",
        "is_correct": false,
        "reason": "Jawahar Awas Yojana was primarily an employment generation scheme, though it had a housing component, it wasn't the primary rural housing scheme. The year 1995 is also not its primary launch year."
      },
      {
        "option_text_english": "Rojgar Hami Yojana - 2011",
        "option_text_marathi": "रोजगार हमी योजना - 2011",
        "is_correct": false,
        "reason": "Rojgar Hami Yojana (Employment Guarantee Scheme) is for employment, not directly for house building."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "महाराष्ट्रातील घाटांचा उत्तरेकडून दक्षिणेकडे कोणता क्रम बरोबर आहे ?",
    "question_english": "Which of the following sequence of ghats in Maharashtra from north to south is correct?",
    "options_marathi": [
      "कुंभार्ली, आंबा, आंबोली, फोंडा",
      "कुंभार्ली, आंबा, फोंडा, आंबोली",
      "आंबा, कुंभार्ली, फोंडा, आंबोली",
      "आंबोली, फोंडा, कुंभार्ली, आंबा"
    ],
    "options_english": [
      "Kumbharli, Amba, Amboli, Phonda",
      "Kumbharli, Amba, Phonda, Amboli",
      "Amba, Kumbharli, Phonda, Amboli",
      "Amboli, Phonda, Kumbharli, Amba"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Ghats of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall, close options",
    "explanation_english": "This question requires knowledge of the geographical location of major ghats in Maharashtra and their relative positions from north to south. The correct sequence is Kumbharli Ghat (connecting Karad to Chiplun), followed by Amba Ghat (connecting Kolhapur to Ratnagiri), then Phonda Ghat (connecting Kolhapur to Kankavli), and finally Amboli Ghat (connecting Sawantwadi to Belgaum) as the southernmost among the given options.",
    "explanation_marathi": "या प्रश्नासाठी महाराष्ट्रातील प्रमुख घाटांच्या भौगोलिक स्थानाचे आणि उत्तरेकडून दक्षिणेकडे त्यांच्या सापेक्ष स्थानाचे ज्ञान आवश्यक आहे. योग्य क्रम कुंभार्ली घाट (कराड ते चिपळूणला जोडणारा), त्यानंतर आंबा घाट (कोल्हापूर ते रत्नागिरीला जोडणारा), नंतर फोंडा घाट (कोल्हापूर ते कणकवलीला जोडणारा) आणि शेवटी दिलेल्या पर्यायांपैकी सर्वात दक्षिणेकडील आंबोली घाट (सावंतवाडी ते बेळगावला जोडणारा) असा आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Kumbharli, Amba, Amboli, Phonda",
        "option_text_marathi": "कुंभार्ली, आंबा, आंबोली, फोंडा",
        "is_correct": false,
        "reason": "Amboli Ghat is south of Phonda Ghat, so this order is incorrect."
      },
      {
        "option_text_english": "Kumbharli, Amba, Phonda, Amboli",
        "option_text_marathi": "कुंभार्ली, आंबा, फोंडा, आंबोली",
        "is_correct": true,
        "reason": "This sequence correctly represents the north-to-south order of these ghats in Maharashtra."
      },
      {
        "option_text_english": "Amba, Kumbharli, Phonda, Amboli",
        "option_text_marathi": "आंबा, कुंभार्ली, फोंडा, आंबोली",
        "is_correct": false,
        "reason": "Kumbharli Ghat is north of Amba Ghat, so this order is incorrect."
      },
      {
        "option_text_english": "Amboli, Phonda, Kumbharli, Amba",
        "option_text_marathi": "आंबोली, फोंडा, कुंभार्ली, आंबा",
        "is_correct": false,
        "reason": "This sequence is in the reverse (south to north) order."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "खालील विधानाचा विचार करा : (a) महाराष्ट्रात सर्वाधिक पाऊस सिंधुदुर्ग जिल्ह्यातील आंबोली येथे पडतो. (b) आंबोलीच्या तीन बाजूंनी डोंगर व वाऱ्याच्या प्रवेशाची बाजू मोकळी आहे.",
    "question_english": "Consider the following statements: (a) The highest rain in Maharashtra falls at Amboli in Sindhudurg district. (b) Mountains on three sides of Amboli and the entrance to the wind is open.",
    "options_marathi": [
      "दोन्ही विधाने बरोबर व दुसरे विधान पहिल्या विधानाचे योग्य स्पष्टीकरण आहे.",
      "दोन्ही विधाने चुकीची आहेत.",
      "दोन्ही विधाने बरोबर परंतु दुसरे विधान पहिल्या विधानाचे योग्य स्पष्टीकरण नाही.",
      "पहिले विधान बरोबर परंतु दुसरे चूक."
    ],
    "options_english": [
      "Both the statements are correct and second is the correct explanation of first.",
      "Neither of the statements is correct.",
      "Both the statements are correct but the second is not the explanation of the first.",
      "The first statement is correct but the second is not correct."
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Rainfall patterns in Maharashtra, Orographic rainfall",
    "difficulty": "Easy to Medium",
    "trap_detected": "Distinguishing between correct statements and correct explanation",
    "explanation_english": "Statement (a) is correct as Amboli in Sindhudurg district records the highest rainfall in Maharashtra, often exceeding 7500 mm annually. Statement (b) provides the geographical reason for this phenomenon. Amboli's location in the Western Ghats, surrounded by hills on three sides and having an open entry for the moisture-laden monsoon winds, creates an orographic effect. The winds are forced to rise, cool, condense, and precipitate heavily, leading to exceptionally high rainfall. Thus, statement (b) correctly explains statement (a).",
    "explanation_marathi": "विधान (अ) बरोबर आहे कारण सिंधुदुर्ग जिल्ह्यातील आंबोलीमध्ये महाराष्ट्रात सर्वाधिक पाऊस पडतो, जो अनेकदा वार्षिक 7500 मिमी पेक्षा जास्त असतो. विधान (ब) या घटनेचे भौगोलिक कारण देते. आंबोलीचे पश्चिम घाटातील स्थान, तीन बाजूंनी टेकड्यांनी वेढलेले आणि आर्द्रतायुक्त मान्सून वाऱ्यांसाठी मोकळा प्रवेश असल्यामुळे, पर्वतीय पर्जन्यवृष्टीचा (orographic effect) परिणाम होतो. वारे वर चढण्यास भाग पाडले जातात, थंड होतात, संघनित होतात आणि मोठ्या प्रमाणात पर्जन्यवृष्टी करतात, ज्यामुळे येथे अपवादात्मकपणे जास्त पाऊस पडतो. अशा प्रकारे, विधान (ब) विधान (अ) चे योग्य स्पष्टीकरण आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Both the statements are correct and second is the correct explanation of first.",
        "option_text_marathi": "दोन्ही विधाने बरोबर व दुसरे विधान पहिल्या विधानाचे योग्य स्पष्टीकरण आहे.",
        "is_correct": true,
        "reason": "Statement (a) is factually correct about Amboli's high rainfall. Statement (b) accurately describes the geographical conditions (orographic effect) that cause this high rainfall, thus serving as a correct explanation."
      },
      {
        "option_text_english": "Neither of the statements is correct.",
        "option_text_marathi": "दोन्ही विधाने चुकीची आहेत.",
        "is_correct": false,
        "reason": "Both statements are correct."
      },
      {
        "option_text_english": "Both the statements are correct but the second is not the explanation of the first.",
        "option_text_marathi": "दोन्ही विधाने बरोबर परंतु दुसरे विधान पहिल्या विधानाचे योग्य स्पष्टीकरण नाही.",
        "is_correct": false,
        "reason": "Statement (b) directly explains the reason for the high rainfall mentioned in statement (a)."
      },
      {
        "option_text_english": "The first statement is correct but the second is not correct.",
        "option_text_marathi": "पहिले विधान बरोबर परंतु दुसरे चूक.",
        "is_correct": false,
        "reason": "Both statements (a) and (b) are correct."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "खालीलपैकी अयोग्य विधाने ओळखा : (a) डॉ. बाबासाहेब आंबेडकरांनी 'हरिजन सेवक संघाची' स्थापना केली. (b) डॉ. बाबासाहेब आंबेडकरांनी छत्रपती शाहू महाराजांनी दिलेल्या देणगीतून 'समता' हे वृत्तपत्र चालविले. (c) पहिल्या गोलमेज परिषदेत महात्मा गांधी व डॉ. बाबासाहेब आंबेडकर यांच्यात अस्पृश्यांसाठी स्वतंत्र मतदार संघ देण्याबाबत वाद झाले. (d) 'महार मांग इत्यादि लोकांस विद्या शिकविण्यासाठी मंडळी' या संस्थेस दक्षिणा प्राईज फंडातून साह्य मिळाले.",
    "question_english": "Which of the following statements are false ? (a) Dr. Babasaheb Ambedkar established 'Harijan Sevak Sangh'. (b) Dr. Babasaheb Ambedkar started 'Samata' Newspaper from the donation given by Chhatrapati Shahu Maharaj. (c) In the first Round Table Conference there was dispute between Mahatma Gandhi and Dr. Babasaheb Ambedkar regarding separate constituency for untouchable. (d) \"Mahar Mang Ityadi Lokas Vidya Shikavinyasathi Mandli\" to this institution assistance was given by Dakshina Prize fund.",
    "options_marathi": [
      "(a), (c), (d) विधाने अयोग्य आहेत",
      "(a), (b), (c) विधाने अयोग्य आहेत",
      "(b), (c), (d) विधाने अयोग्य आहेत",
      "(c), (d) विधाने अयोग्य आहेत"
    ],
    "options_english": [
      "(a), (c), (d) statements are false",
      "(a), (b), (c) statements are false",
      "(b), (c), (d) statements are false",
      "(c), (d) statements are false"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social Reformers, Dr. B.R. Ambedkar, Mahatma Gandhi, Round Table Conferences",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap, Chronological error, detailed knowledge required",
    "explanation_english": "Statement (a) is false because 'Harijan Sevak Sangh' was founded by Mahatma Gandhi in 1932, not Dr. Babasaheb Ambedkar. Statement (b) is false because while Chhatrapati Shahuji Maharaj supported Dr. Ambedkar's early work, Shahuji Maharaj passed away in 1922, and 'Samata' newspaper was started by Dr. Ambedkar in 1928, making the claim of donation for 'Samata' chronologically incorrect. Statement (c) is false because Mahatma Gandhi did not attend the First Round Table Conference; the dispute over separate electorates occurred during the Second Round Table Conference. Statement (d) is true; Gopal Baba Walangkar's institution \"Mahar Mang Ityadi Lokas Vidya Shikavinyasathi Mandli\" did receive aid from the Dakshina Prize Fund. Therefore, statements (a), (b), and (c) are false.",
    "explanation_marathi": "विधान (अ) चुकीचे आहे कारण 'हरिजन सेवक संघाची' स्थापना 1932 मध्ये महात्मा गांधींनी केली होती, डॉ. बाबासाहेब आंबेडकरांनी नाही. विधान (ब) चुकीचे आहे कारण छत्रपती शाहू महाराजांनी डॉ. आंबेडकरांच्या सुरुवातीच्या कार्याला पाठिंबा दिला असला तरी, शाहू महाराज 1922 मध्ये निधन पावले आणि 'समता' वृत्तपत्र डॉ. आंबेडकरांनी 1928 मध्ये सुरू केले, त्यामुळे 'समता' साठी देणगीचा दावा कालक्रमानुसार चुकीचा आहे. विधान (क) चुकीचे आहे कारण महात्मा गांधी पहिल्या गोलमेज परिषदेला उपस्थित नव्हते; अस्पृश्यांसाठी स्वतंत्र मतदारसंघावरून वाद दुसऱ्या गोलमेज परिषदेदरम्यान झाला होता. विधान (ड) बरोबर आहे; गोपाळ बाबा वलंगकर यांच्या 'महार मांग इत्यादि लोकांस विद्या शिकविण्यासाठी मंडळी' या संस्थेला दक्षिणा प्राईज फंडातून मदत मिळाली होती. म्हणून, विधाने (अ), (ब) आणि (क) चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (c), (d) statements are false",
        "option_text_marathi": "(a), (c), (d) विधाने अयोग्य आहेत",
        "is_correct": false,
        "reason": "Statement (d) is true, not false."
      },
      {
        "option_text_english": "(a), (b), (c) statements are false",
        "option_text_marathi": "(a), (b), (c) विधाने अयोग्य आहेत",
        "is_correct": true,
        "reason": "Statements (a), (b), and (c) are all factually incorrect."
      },
      {
        "option_text_english": "(b), (c), (d) statements are false",
        "option_text_marathi": "(b), (c), (d) विधाने अयोग्य आहेत",
        "is_correct": false,
        "reason": "Statement (d) is true, not false."
      },
      {
        "option_text_english": "(c), (d) statements are false",
        "option_text_marathi": "(c), (d) विधाने अयोग्य आहेत",
        "is_correct": false,
        "reason": "Statements (a) and (b) are also false, and (d) is true."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "25 सप्टेंबर 1916 रोजी मद्रास येथे डॉ. अॅनी बेझंट यांनी कोणत्या स्वतंत्र संघटनेची स्थापना केली ?",
    "question_english": "Which union was established by Dr. Annie Besant on 25 September 1916 at Madras ?",
    "options_marathi": [
      "होमरुल लीग",
      "कॉमन वील",
      "हिंदू महासभा",
      "स्वराज्य संघ"
    ],
    "options_english": [
      "Homerule League",
      "Common Weal",
      "Hindu Mahasabha",
      "Swarajya Sangh"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Home Rule Movement, Annie Besant",
    "difficulty": "Easy",
    "trap_detected": "Distractor options (publication vs. organization)",
    "explanation_english": "Dr. Annie Besant established the All India Home Rule League in Madras (Adyar) on September 25, 1916. This was part of the broader Home Rule Movement in India, which aimed to achieve self-government for India within the British Empire. Bal Gangadhar Tilak had launched his own Home Rule League earlier in April 1916.",
    "explanation_marathi": "डॉ. ॲनी बेझंट यांनी 25 सप्टेंबर 1916 रोजी मद्रास (अड्यार) येथे अखिल भारतीय होमरूल लीगची स्थापना केली. हा भारतातील व्यापक होमरूल चळवळीचा भाग होता, ज्याचा उद्देश ब्रिटिश साम्राज्यांतर्गत भारतासाठी स्वराज्य मिळवणे हा होता. बाळ गंगाधर टिळकांनी त्यांची स्वतःची होमरूल लीग एप्रिल 1916 मध्ये सुरू केली होती.",
    "options_breakdown": [
      {
        "option_text_english": "Homerule League",
        "option_text_marathi": "होमरुल लीग",
        "is_correct": true,
        "reason": "Annie Besant founded the Home Rule League in Madras in September 1916."
      },
      {
        "option_text_english": "Common Weal",
        "option_text_marathi": "कॉमन वील",
        "is_correct": false,
        "reason": "'Common Weal' was a newspaper started by Annie Besant, not an organization."
      },
      {
        "option_text_english": "Hindu Mahasabha",
        "option_text_marathi": "हिंदू महासभा",
        "is_correct": false,
        "reason": "Hindu Mahasabha was founded by Madan Mohan Malaviya and others, not Annie Besant."
      },
      {
        "option_text_english": "Swarajya Sangh",
        "option_text_marathi": "स्वराज्य संघ",
        "is_correct": false,
        "reason": "'Swarajya Sangh' is not the correct name for the organization she founded."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "समाजसुधारकांनी केलेल्या कार्याविषयीच्या जोड्या लावा : (a) दादोबा पांडुरंग तर्खडकर (b) जगन्नाथ शंकर शेठ (c) पंडिता रमाबाई (d) पंजाबराव देशमुख (i) मुक्तीसदन (ii) शेतकरी संघ (1927) (iii) मानव धर्म सभा (iv) बॉम्बे नेटिव्ह एज्युकेशन सोसायटी",
    "question_english": "Match the following works done by Social reformers. (a) Dadoba Pandurang Tarkhadkar (b) Jagannath Shankar Sheth (c) Pandita Ramabai (d) Punjabrao Deshmukh (i) Mukti-Sadan (ii) Farmers' Federation (1927) (iii) Manav Dharma Sabha (iv) Bombay Native Education Society",
    "options_marathi": [
      "(iv) (i) (ii) (iii)",
      "(ii) (iv) (i) (iii)",
      "(iii) (i) (ii) (iv)",
      "(iii) (iv) (i) (ii)"
    ],
    "options_english": [
      "(iv) (i) (ii) (iii)",
      "(ii) (iv) (i) (iii)",
      "(iii) (i) (ii) (iv)",
      "(iii) (iv) (i) (ii)"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Social Reformers and their Institutions",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall, multiple matchings",
    "explanation_english": "This question tests knowledge of prominent social reformers and their contributions. Dadoba Pandurang Tarkhadkar was a key figure in the Manav Dharma Sabha (1844). Jagannath Shankar Sheth was instrumental in establishing the Bombay Native Education Society (1822). Pandita Ramabai founded Mukti Sadan (1896-97) for the welfare of women. Dr. Punjabrao Deshmukh established the Shetkari Sangh (Farmers' Federation) in 1927.",
    "explanation_marathi": "हा प्रश्न प्रमुख समाजसुधारक आणि त्यांच्या योगदानाबद्दलच्या ज्ञानाची चाचणी घेतो. दादोबा पांडुरंग तर्खडकर हे मानव धर्म सभेतील (1844) एक प्रमुख व्यक्ती होते. जगन्नाथ शंकरशेठ यांनी बॉम्बे नेटिव्ह एज्युकेशन सोसायटी (1822) स्थापन करण्यात महत्त्वाची भूमिका बजावली. पंडिता रमाबाई यांनी महिलांच्या कल्याणासाठी मुक्ती सदन (1896-97) ची स्थापना केली. डॉ. पंजाबराव देशमुख यांनी 1927 मध्ये शेतकरी संघाची स्थापना केली.",
    "options_breakdown": [
      {
        "option_text_english": "(iv) (i) (ii) (iii)",
        "option_text_marathi": "(iv) (i) (ii) (iii)",
        "is_correct": false,
        "reason": "Incorrect pairings. For example, Dadoba Pandurang Tarkhadkar is not associated with Bombay Native Education Society as his primary work here."
      },
      {
        "option_text_english": "(ii) (iv) (i) (iii)",
        "option_text_marathi": "(ii) (iv) (i) (iii)",
        "is_correct": false,
        "reason": "Incorrect pairings. For example, Dadoba Pandurang Tarkhadkar is not associated with Farmers' Federation."
      },
      {
        "option_text_english": "(iii) (i) (ii) (iv)",
        "option_text_marathi": "(iii) (i) (ii) (iv)",
        "is_correct": false,
        "reason": "Incorrect pairings. For example, Jagannath Shankar Sheth is not associated with Mukti-Sadan."
      },
      {
        "option_text_english": "(iii) (iv) (i) (ii)",
        "option_text_marathi": "(iii) (iv) (i) (ii)",
        "is_correct": true,
        "reason": "This option correctly matches: (a) Dadoba Pandurang Tarkhadkar - (iii) Manav Dharma Sabha, (b) Jagannath Shankar Sheth - (iv) Bombay Native Education Society, (c) Pandita Ramabai - (i) Mukti-Sadan, (d) Punjabrao Deshmukh - (ii) Farmers' Federation (1927)."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "निरनिराळ्या प्रांतातील लोकांनी एकमेकांच्या भाषा व चालीरीती समजून घ्याव्यात यासाठी 'आंतर भारती' ही कल्पना ______ यांनी मांडली.",
    "question_english": "______ proposed the concept of Antar Bharati to ensure that people from different regions were acquainted with other cultures and languages.",
    "options_marathi": [
      "डॉ. मुंजे",
      "डॉ. हेडगेवार",
      "लोकमान्य टिळक",
      "साने गुरुजी"
    ],
    "options_english": [
      "Dr. Munje",
      "Dr. Hedgewar",
      "Lokmanya Tilak",
      "Sane Guruji"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "National Integration, Social Thinkers",
    "difficulty": "Easy",
    "trap_detected": "Distractor options of other prominent figures",
    "explanation_english": "Sane Guruji, a revered social reformer, educator, and writer from Maharashtra, proposed the concept of 'Antar Bharati'. His vision was to promote national integration by encouraging people from different regions of India to learn about and appreciate each other's languages, cultures, and traditions. This idea aimed at fostering unity and mutual understanding across the diverse Indian society.",
    "explanation_marathi": "साने गुरुजी, महाराष्ट्रातील एक आदरणीय समाजसुधारक, शिक्षणतज्ञ आणि लेखक, यांनी 'आंतर भारती' ही संकल्पना मांडली. त्यांचा दृष्टिकोन असा होता की, भारतातील विविध प्रांतांतील लोकांनी एकमेकांच्या भाषा, संस्कृती आणि परंपरांबद्दल जाणून घ्यावे आणि त्यांचे कौतुक करावे, ज्यामुळे राष्ट्रीय एकात्मतेला प्रोत्साहन मिळेल. या कल्पनेचा उद्देश विविध भारतीय समाजात एकता आणि परस्पर सामंजस्य वाढवणे हा होता.",
    "options_breakdown": [
      {
        "option_text_english": "Dr. Munje",
        "option_text_marathi": "डॉ. मुंजे",
        "is_correct": false,
        "reason": "Dr. B.S. Munje was a leader of the Hindu Mahasabha, not associated with the 'Antar Bharati' concept."
      },
      {
        "option_text_english": "Dr. Hedgewar",
        "option_text_marathi": "डॉ. हेडगेवार",
        "is_correct": false,
        "reason": "Dr. K.B. Hedgewar was the founder of the RSS, not associated with 'Antar Bharati'."
      },
      {
        "option_text_english": "Lokmanya Tilak",
        "option_text_marathi": "लोकमान्य टिळक",
        "is_correct": false,
        "reason": "Lokmanya Tilak was a prominent nationalist leader, but the 'Antar Bharati' concept is not attributed to him."
      },
      {
        "option_text_english": "Sane Guruji",
        "option_text_marathi": "साने गुरुजी",
        "is_correct": true,
        "reason": "Sane Guruji is widely credited with proposing the 'Antar Bharati' concept to promote national integration and cultural understanding."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "1887 मध्ये मद्रास येथे झालेल्या काँग्रेस अधिवेशनाचे अध्यक्ष पद ______ यांनी भूषवले.",
    "question_english": "______ presided over the congress session held at Madras in 1887.",
    "options_marathi": [
      "दादाभाई नौरोजी",
      "म.गो. रानडे",
      "मोरोपंत जोशी",
      "बद्रुद्दीन तय्यबजी"
    ],
    "options_english": [
      "Dadabhai Nauroji",
      "M.G. Ranade",
      "Moropant Joshi",
      "Badruddin Tayyabji"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Indian National Congress Sessions, Early Congress Leaders",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall, names of early Congress leaders",
    "explanation_english": "The third session of the Indian National Congress was held in Madras (now Chennai) in 1887. This historic session was presided over by Badruddin Tayyabji, who holds the distinction of being the first Muslim president of the Indian National Congress. His presidency marked an important step towards inclusive leadership within the nascent nationalist movement.",
    "explanation_marathi": "भारतीय राष्ट्रीय काँग्रेसचे तिसरे अधिवेशन 1887 मध्ये मद्रास (आता चेन्नई) येथे झाले. या ऐतिहासिक अधिवेशनाचे अध्यक्षपद बद्रुद्दीन तय्यबजी यांनी भूषवले होते, जे भारतीय राष्ट्रीय काँग्रेसचे पहिले मुस्लिम अध्यक्ष होते. त्यांचे अध्यक्षपद नव्याने उदयास येत असलेल्या राष्ट्रवादी चळवळीत सर्वसमावेशक नेतृत्वाच्या दिशेने एक महत्त्वाचे पाऊल होते.",
    "options_breakdown": [
      {
        "option_text_english": "Dadabhai Nauroji",
        "option_text_marathi": "दादाभाई नौरोजी",
        "is_correct": false,
        "reason": "Dadabhai Naoroji presided over Congress sessions in 1886, 1893, and 1906, but not the 1887 Madras session."
      },
      {
        "option_text_english": "M.G. Ranade",
        "option_text_marathi": "म.गो. रानडे",
        "is_correct": false,
        "reason": "M.G. Ranade was a prominent social reformer and moderate leader but did not preside over the 1887 Congress session."
      },
      {
        "option_text_english": "Moropant Joshi",
        "option_text_marathi": "मोरोपंत जोशी",
        "is_correct": false,
        "reason": "Moropant Joshi is not associated with presiding over this specific Congress session."
      },
      {
        "option_text_english": "Badruddin Tayyabji",
        "option_text_marathi": "बद्रुद्दीन तय्यबजी",
        "is_correct": true,
        "reason": "Badruddin Tayyabji was the president of the 1887 Madras session of the Indian National Congress, making him the first Muslim president of the INC."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "शेतकरी व कारागीर हेच देशाचे खांब आहेत, पण त्यांची दुर्दशा झाली आहे, अशी खंत कोणी व्यक्त केली आहे ?",
    "question_english": "Who expressed his grief by saying that farmers and workers are real strong pillars of the nation, but they are now suffering ?",
    "options_marathi": [
      "गणपत पाटील",
      "मुकुंदराव पाटील",
      "कृष्णराव भालेकर",
      "यशवंतराव देशमुख"
    ],
    "options_english": [
      "Ganpat Patil",
      "Mukundrao Patil",
      "Krishnarao Bhalekar",
      "Yashwantrao Deshmukh"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Social Reformers in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Krishnarao Bhalekar was a social reformer and writer from Maharashtra, known for his strong advocacy for the rights and welfare of farmers and artisans. He expressed deep concern over their deteriorating condition, considering them the true pillars of the nation. His writings often highlighted the exploitation and suffering faced by these communities, emphasizing the need for their upliftment and justice.",
    "explanation_marathi": "कृष्णराव भालेकर हे महाराष्ट्रातील एक समाजसुधारक आणि लेखक होते, जे शेतकरी आणि कारागिरांच्या हक्कांसाठी आणि कल्याणासाठी त्यांच्या जोरदार वकिलीसाठी ओळखले जातात. त्यांनी या समुदायांना राष्ट्राचे खरे आधारस्तंभ मानून त्यांच्या खालावलेल्या स्थितीबद्दल तीव्र चिंता व्यक्त केली. त्यांच्या लेखनातून या समुदायांना भेडसावणारे शोषण आणि दुःख अनेकदा अधोरेखित केले गेले, तसेच त्यांच्या उन्नती आणि न्यायाची गरज यावर भर दिला गेला.",
    "options_breakdown": [
      {
        "option_text_english": "Ganpat Patil",
        "option_text_marathi": "गणपत पाटील",
        "is_correct": false,
        "reason_english": "Ganpat Patil was not associated with this specific quote or the prominent advocacy for farmers and artisans in this manner.",
        "reason_marathi": "गणपत पाटील हे या विशिष्ट विधानाशी किंवा शेतकरी आणि कारागिरांसाठी अशा प्रकारे केलेल्या प्रमुख वकिलीशी संबंधित नव्हते."
      },
      {
        "option_text_english": "Mukundrao Patil",
        "option_text_marathi": "मुकुंदराव पाटील",
        "is_correct": false,
        "reason_english": "While a social reformer, this quote is not attributed to Mukundrao Patil. His work focused on different aspects of social reform.",
        "reason_marathi": "मुकुंदराव पाटील हे समाजसुधारक असले तरी, हे विधान त्यांना श्रेय दिले जात नाही. त्यांचे कार्य सामाजिक सुधारणेच्या वेगवेगळ्या पैलूंवर केंद्रित होते."
      },
      {
        "option_text_english": "Krishnarao Bhalekar",
        "option_text_marathi": "कृष्णराव भालेकर",
        "is_correct": true,
        "reason_english": "This quote is famously attributed to Krishnarao Bhalekar, reflecting his deep concern for the plight of farmers and artisans, whom he considered the backbone of the nation.",
        "reason_marathi": "हे विधान कृष्णराव भालेकर यांना प्रसिद्धपणे श्रेय दिले जाते, जे शेतकरी आणि कारागिरांच्या दुर्दशेबद्दल त्यांची तीव्र चिंता दर्शवते, ज्यांना ते राष्ट्राचा कणा मानत होते."
      },
      {
        "option_text_english": "Yashwantrao Deshmukh",
        "option_text_marathi": "यशवंतराव देशमुख",
        "is_correct": false,
        "reason_english": "Yashwantrao Deshmukh is not associated with this specific quote or the social reform movement in this context.",
        "reason_marathi": "यशवंतराव देशमुख हे या विशिष्ट विधानाशी किंवा या संदर्भातील समाजसुधारक चळवळीशी संबंधित नाहीत."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "इ.स. 1910 मध्ये अलाहाबाद येथे हिंदू महासभेची स्थापना झाली. महासभेचे मुख्य कार्यालय कोठे होते ?",
    "question_english": "Hindu Mahasabha was established in 1910 at Allahabad. Where was its headquarters ?",
    "options_marathi": [
      "आयोध्या",
      "हरिद्वार",
      "दिल्ली",
      "रामेश्वर"
    ],
    "options_english": [
      "Ayodhya",
      "Haridwar",
      "Delhi",
      "Rameshwar"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Indian National Movement / Social-Religious Reforms",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Hindu Mahasabha, though often cited as founded in 1915, is stated in the question to have been established in 1910 at Allahabad. Regardless of the founding year discrepancy, its main headquarters was established in Haridwar. Haridwar served as a significant center for its activities and organizational structure, playing a crucial role in its early development and outreach.",
    "explanation_marathi": "हिंदू महासभेची स्थापना 1910 मध्ये अलाहाबाद येथे झाली असे प्रश्नात नमूद केले आहे, जरी ती अनेकदा 1915 मध्ये स्थापन झाली असे म्हटले जाते. स्थापनेच्या वर्षातील फरकाकडे दुर्लक्ष करून, त्याचे मुख्य मुख्यालय हरिद्वार येथे स्थापन झाले होते. हरिद्वार हे त्याच्या कार्यांसाठी आणि संघटनात्मक संरचनेसाठी एक महत्त्वाचे केंद्र होते, ज्याने त्याच्या सुरुवातीच्या विकासात आणि प्रसारात महत्त्वपूर्ण भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_text_english": "Ayodhya",
        "option_text_marathi": "आयोध्या",
        "is_correct": false,
        "reason_english": "While Ayodhya is a significant Hindu pilgrimage site, it was not the established headquarters of the Hindu Mahasabha.",
        "reason_marathi": "अयोध्या हे एक महत्त्वाचे हिंदू तीर्थक्षेत्र असले तरी, ते हिंदू महासभेचे स्थापित मुख्यालय नव्हते."
      },
      {
        "option_text_english": "Haridwar",
        "option_text_marathi": "हरिद्वार",
        "is_correct": true,
        "reason_english": "Haridwar was the established headquarters of the Hindu Mahasabha, serving as its central administrative and organizational hub.",
        "reason_marathi": "हरिद्वार हे हिंदू महासभेचे स्थापित मुख्यालय होते, जे त्याचे केंद्रीय प्रशासकीय आणि संघटनात्मक केंद्र म्हणून कार्य करत होते."
      },
      {
        "option_text_english": "Delhi",
        "option_text_marathi": "दिल्ली",
        "is_correct": false,
        "reason_english": "Delhi became a major political center later, but it was not the initial headquarters of the Hindu Mahasabha.",
        "reason_marathi": "दिल्ली नंतर एक प्रमुख राजकीय केंद्र बनले, परंतु ते हिंदू महासभेचे प्रारंभिक मुख्यालय नव्हते."
      },
      {
        "option_text_english": "Rameshwar",
        "option_text_marathi": "रामेश्वर",
        "is_correct": false,
        "reason_english": "Rameshwar is a pilgrimage site in South India and is not associated with the headquarters of the Hindu Mahasabha.",
        "reason_marathi": "रामेश्वर हे दक्षिण भारतातील एक तीर्थक्षेत्र आहे आणि ते हिंदू महासभेच्या मुख्यालयाशी संबंधित नाही."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "वृत्तपत्राविषयी कोणती विधाने योग्य आहेत ? (a) भाऊ महाजन यांनी 'प्रभाकर' नावाचे साप्ताहिक सुरु केले. (b) आचार्य बाळशास्त्री जांभेकर यांनी 'इंदूप्रकाश' हे वृत्तपत्र चालविले. (c) कोल्हापूर जिल्ह्यातून 'श्री शाहू' व 'शुभसूचक' ही वृत्तपत्रे सुरु झाली. (d) विष्णू बुवा ब्रम्हचारी यांनी 'वर्तमानदीपिका' या वृत्तपत्रातून आपले विचार मांडले.",
    "question_english": "Which statements are true regarding Newspapers ? (a) Bhau Mahajan started weekly 'Prabhakar'. (b) Acharya Bal Shastri Jambhekar ran 'Induprakash' Newspaper. (c) 'Shri Shahu' and 'Shubhsuchak' Newspapers started from Kolhapur District. (d) Vishnu Buwa Brahmachari expressed his thoughts through 'Vartamandipika' Newspaper.",
    "options_marathi": [
      "(a), (b), (c) विधाने बरोबर आहेत",
      "(a), (d) विधाने बरोबर आहेत",
      "(a), (c), (d) विधाने बरोबर आहेत",
      "(a), (b) विधाने बरोबर आहेत"
    ],
    "options_english": [
      "(a), (b), (c) statements are correct",
      "(a), (d) statements are correct",
      "(a), (c), (d) statements are correct",
      "(a), (b) statements are correct"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "History of Journalism in Maharashtra / Social Reformers",
    "difficulty": "Medium to Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's analyze each statement: (a) Bhau Mahajan (Govind Vitthal Kunte) indeed started the weekly 'Prabhakar' in 1841, which became famous for its 'Shatapatre' by Gopal Hari Deshmukh (Lokahitwadi). This statement is correct. (b) Acharya Balshastri Jambhekar is known as the 'Father of Marathi Journalism' for starting 'Darpan' and 'Digdarshan'. 'Induprakash' was started by Vishnu Parshuram Pandit and later associated with M.G. Ranade, not Jambhekar. So, this statement is incorrect. (c) 'Shri Shahu' and 'Shubhsuchak' were indeed newspapers that originated from Kolhapur district, often reflecting the social reform movements and the work of Shahu Maharaj. This statement is correct. (d) Vishnu Buwa Brahmachari, a prominent social reformer, used his newspaper 'Vartaman Dipika' to express his progressive thoughts and advocate for social change. This statement is correct. Therefore, statements (a), (c), and (d) are correct.",
    "explanation_marathi": "प्रत्येक विधानाचे विश्लेषण करूया: (a) भाऊ महाजन (गोविंद विठ्ठल कुंटे) यांनी 1841 मध्ये 'प्रभाकर' हे साप्ताहिक सुरू केले, जे गोपाळ हरी देशमुख (लोकहितवादी) यांच्या 'शतापत्रे' साठी प्रसिद्ध झाले. हे विधान बरोबर आहे. (b) आचार्य बाळशास्त्री जांभेकर हे 'दर्पण' आणि 'दिग्दर्शन' सुरू केल्यामुळे 'मराठी पत्रकारितेचे जनक' म्हणून ओळखले जातात. 'इंदुप्रकाश' हे विष्णू परशुराम पंडित यांनी सुरू केले होते आणि नंतर ते म.गो. रानडे यांच्याशी संबंधित होते, जांभेकर यांच्याशी नाही. त्यामुळे हे विधान चुकीचे आहे. (c) 'श्री शाहू' आणि 'शुभसूचक' ही वृत्तपत्रे कोल्हापूर जिल्ह्यातून सुरू झाली होती आणि ती अनेकदा समाजसुधारक चळवळी आणि शाहू महाराजांच्या कार्याचे प्रतिबिंब होती. हे विधान बरोबर आहे. (d) विष्णू बुवा ब्रह्मचारी, एक प्रमुख समाजसुधारक, यांनी 'वर्तमान दीपिका' या वृत्तपत्रातून आपले पुरोगामी विचार मांडले आणि सामाजिक बदलाची वकिली केली. हे विधान बरोबर आहे. म्हणून, (a), (c) आणि (d) ही विधाने बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b), (c) statements are correct",
        "option_text_marathi": "(a), (b), (c) विधाने बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as Acharya Balshastri Jambhekar did not run 'Induprakash'.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण आचार्य बाळशास्त्री जांभेकर यांनी 'इंदुप्रकाश' चालवले नाही."
      },
      {
        "option_text_english": "(a), (d) statements are correct",
        "option_text_marathi": "(a), (d) विधाने बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement (c) is also correct, making this option incomplete.",
        "reason_marathi": "विधान (c) देखील बरोबर आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a), (c), (d) statements are correct",
        "option_text_marathi": "(a), (c), (d) विधाने बरोबर आहेत",
        "is_correct": true,
        "reason_english": "Statements (a), (c), and (d) are factually correct regarding the newspapers and their founders/associations.",
        "reason_marathi": "विधाने (a), (c) आणि (d) वृत्तपत्रे आणि त्यांचे संस्थापक/संबंधित व्यक्तींबद्दल वस्तुस्थितीनुसार बरोबर आहेत."
      },
      {
        "option_text_english": "(a), (b) statements are correct",
        "option_text_marathi": "(a), (b) विधाने बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as Acharya Balshastri Jambhekar did not run 'Induprakash'.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण आचार्य बाळशास्त्री जांभेकर यांनी 'इंदुप्रकाश' चालवले नाही."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "हंटर कमिशनमुळे शिक्षण व्यवस्थेत कोणते बदल झाले ? (a) खाजगी क्षेत्राला प्राधान्य दिले. (b) लोकशिक्षण विभाग स्थापन करण्यात आला. (c) पंजाब (1882) आणि अलाहाबाद (1887) विद्यापीठांची स्थापना झाली. (d) शारीरिक आणि बौद्धिक शिक्षणाला महत्व दिले.",
    "question_english": "Which changes took place because of Hunter Commission ? (a) Priority was given to private sector. (b) Department of Public Instruction was established. (c) Punjab (1882) and Allahabad (1887) Universities were established. (d) Importance was given to Physical and Intellectual Education.",
    "options_marathi": [
      "(b), (c), (d)",
      "(a), (b), (d)",
      "(b), (d)",
      "(a), (c), (d)"
    ],
    "options_english": [
      "(b), (c), (d)",
      "(a), (b), (d)",
      "(b), (d)",
      "(a), (c), (d)"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Educational Development in British India",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Hunter Commission (1882) was appointed to evaluate the progress of education in India since Wood's Despatch of 1854. Let's examine the statements: (a) The Commission strongly recommended encouraging private and indigenous efforts in education, giving priority to the private sector. This statement is correct. (b) The Department of Public Instruction (DPI) was established following Wood's Despatch of 1854, not the Hunter Commission. This statement is incorrect. (c) The establishment of Punjab University in 1882 and Allahabad University in 1887 were indeed outcomes of the recommendations for expanding higher education, which the Hunter Commission supported. This statement is correct. (d) The Commission emphasized a balanced approach to education, including both physical and intellectual development. This statement is correct. Therefore, statements (a), (c), and (d) are correct.",
    "explanation_marathi": "हंटर कमिशन (1882) ची नियुक्ती 1854 च्या वुड्स डिस्पॅचनंतर भारतातील शिक्षणाच्या प्रगतीचे मूल्यांकन करण्यासाठी करण्यात आली होती. विधानांचे परीक्षण करूया: (a) आयोगाने शिक्षणात खाजगी आणि स्थानिक प्रयत्नांना प्रोत्साहन देण्याची जोरदार शिफारस केली, ज्यामुळे खाजगी क्षेत्राला प्राधान्य मिळाले. हे विधान बरोबर आहे. (b) सार्वजनिक शिक्षण विभाग (DPI) ची स्थापना 1854 च्या वुड्स डिस्पॅचनंतर झाली होती, हंटर कमिशनमुळे नाही. हे विधान चुकीचे आहे. (c) 1882 मध्ये पंजाब विद्यापीठाची आणि 1887 मध्ये अलाहाबाद विद्यापीठाची स्थापना उच्च शिक्षणाच्या विस्तारासाठी केलेल्या शिफारसींचा परिणाम होता, ज्याला हंटर कमिशनने पाठिंबा दिला होता. हे विधान बरोबर आहे. (d) आयोगाने शारीरिक आणि बौद्धिक विकासासह शिक्षणासाठी संतुलित दृष्टिकोन ठेवण्यावर भर दिला. हे विधान बरोबर आहे. म्हणून, (a), (c) आणि (d) ही विधाने बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(b), (c), (d)",
        "option_text_marathi": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as DPIs were established after Wood's Despatch, not Hunter Commission.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण DPIs वुड्स डिस्पॅचनंतर स्थापन झाले, हंटर कमिशनमुळे नाही."
      },
      {
        "option_text_english": "(a), (b), (d)",
        "option_text_marathi": "(a), (b), (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. Also, statement (c) is correct and missing from this option.",
        "reason_marathi": "विधान (b) चुकीचे आहे. तसेच, विधान (c) बरोबर आहे आणि या पर्यायातून वगळले आहे."
      },
      {
        "option_text_english": "(b), (d)",
        "option_text_marathi": "(b), (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. Also, statements (a) and (c) are correct and missing from this option.",
        "reason_marathi": "विधान (b) चुकीचे आहे. तसेच, विधाने (a) आणि (c) बरोबर आहेत आणि या पर्यायातून वगळले आहेत."
      },
      {
        "option_text_english": "(a), (c), (d)",
        "option_text_marathi": "(a), (c), (d)",
        "is_correct": true,
        "reason_english": "Statements (a), (c), and (d) accurately represent the changes and recommendations associated with the Hunter Commission.",
        "reason_marathi": "विधाने (a), (c) आणि (d) हंटर कमिशनशी संबंधित बदल आणि शिफारसी अचूकपणे दर्शवतात."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "'सर्वसाक्षी जगत्पती। त्याला नकोच मध्यस्थी ॥' हे कोणत्या समाजाचे तत्व होते ?",
    "question_english": "'God is the witness of everything. He does not require any middle man'. This was the central idea of:",
    "options_marathi": [
      "ब्राम्हो समाज",
      "आर्य समाज",
      "प्रार्थना समाज",
      "सत्यशोधक समाज"
    ],
    "options_english": [
      "Bramho Samaj",
      "Arya Samaj",
      "Prarthana Samaj",
      "Satyashodhak Samaj"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Social Reform Movements in Maharashtra",
    "difficulty": "Easy to Medium",
    "trap_detected": "None",
    "explanation_english": "The quote \"सर्वसाक्षी जगत्पती। त्याला नकोच मध्यस्थी ॥\" (God is the witness of everything. He does not require any middle man) is a fundamental principle of the Satyashodhak Samaj, founded by Mahatma Jyotirao Phule in 1873. This philosophy challenged the traditional caste hierarchy and the dominance of Brahmins as intermediaries between individuals and God. It promoted direct devotion and equality, advocating for social justice and the upliftment of the downtrodden, particularly farmers and lower castes.",
    "explanation_marathi": "“सर्वसाक्षी जगत्पती। त्याला नकोच मध्यस्थी ॥” हे वाक्य 1873 मध्ये महात्मा ज्योतिराव फुले यांनी स्थापन केलेल्या सत्यशोधक समाजाचे मूलभूत तत्व आहे. या तत्त्वज्ञानाने पारंपरिक जातीय उतरंड आणि व्यक्ती व देव यांच्यातील मध्यस्थ म्हणून ब्राह्मणांच्या वर्चस्वाला आव्हान दिले. याने थेट भक्ती आणि समानतेला प्रोत्साहन दिले, तसेच सामाजिक न्याय आणि वंचितांच्या, विशेषतः शेतकरी आणि कनिष्ठ जातींच्या, उन्नतीसाठी वकिली केली.",
    "options_breakdown": [
      {
        "option_text_english": "Bramho Samaj",
        "option_text_marathi": "ब्राम्हो समाज",
        "is_correct": false,
        "reason_english": "While Brahmo Samaj also rejected idol worship and the priestly class, this specific quote is not its defining slogan or central idea.",
        "reason_marathi": "ब्राम्हो समाजाने मूर्तीपूजा आणि पुरोहित वर्गाला नाकारले असले तरी, हे विशिष्ट विधान त्याची व्याख्या करणारे घोषवाक्य किंवा मध्यवर्ती कल्पना नाही."
      },
      {
        "option_text_english": "Arya Samaj",
        "option_text_marathi": "आर्य समाज",
        "is_correct": false,
        "reason_english": "Arya Samaj focused on returning to Vedic principles and rejected idol worship, but this specific quote is not its central idea. Its slogan was 'Back to Vedas'.",
        "reason_marathi": "आर्य समाजाने वैदिक तत्त्वांकडे परत जाण्यावर लक्ष केंद्रित केले आणि मूर्तीपूजा नाकारली, परंतु हे विशिष्ट विधान त्याची मध्यवर्ती कल्पना नाही. त्याचे घोषवाक्य 'वेदांकडे परत चला' असे होते."
      },
      {
        "option_text_english": "Prarthana Samaj",
        "option_text_marathi": "प्रार्थना समाज",
        "is_correct": false,
        "reason_english": "Prarthana Samaj was influenced by Brahmo Samaj and focused on monotheism and social reform, but this quote is not its defining principle.",
        "reason_marathi": "प्रार्थना समाज ब्राम्हो समाजापासून प्रभावित होता आणि एकेश्वरवाद व सामाजिक सुधारणांवर लक्ष केंद्रित करत होता, परंतु हे विधान त्याचे मूलभूत तत्व नाही."
      },
      {
        "option_text_english": "Satyashodhak Samaj",
        "option_text_marathi": "सत्यशोधक समाज",
        "is_correct": true,
        "reason_english": "This quote perfectly encapsulates the anti-caste and anti-priestly intermediary stance of the Satyashodhak Samaj, advocating for direct devotion to God.",
        "reason_marathi": "हे विधान सत्यशोधक समाजाच्या जातीयविरोधी आणि पुरोहित मध्यस्थीविरोधी भूमिकेला अचूकपणे दर्शवते, जे देवाच्या थेट भक्तीची वकिली करते."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "जोड्या लावा - (राज्य नीतीची मार्गदर्शक तत्वे) 'A' (तत्वे) (a) काम करण्याचा अधिकार (b) समान न्याय आणि मोफत कायदेविषयक साहाय्य (c) गो हत्या प्रतिबंध (d) समान नागरी कायदा 'B' (कलम) (i) 48 (ii) 41 (iii) 44 (iv) 39 A",
    "question_english": "Match the pairs - (Directive Principles of State Policy) 'A' (Principle) (a) Right to work (b) Equal justice and free Legal aid (c) Prohibition of slaughter of cows (d) Uniform Civil Code 'B' (Article) (i) 48 (ii) 41 (iii) 44 (iv) 39 A",
    "options_marathi": [
      "(iv) (iii) (i) (ii)",
      "(i) (ii) (iii) (iv)",
      "(ii) (i) (iv) (iii)",
      "(ii) (iv) (i) (iii)"
    ],
    "options_english": [
      "(iv) (iii) (i) (ii)",
      "(i) (ii) (iii) (iv)",
      "(ii) (i) (iv) (iii)",
      "(ii) (iv) (i) (iii)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Directive Principles of State Policy (DPSP)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall of Articles",
    "explanation_english": "This question requires matching the Directive Principles of State Policy with their corresponding articles in the Indian Constitution. Let's match them: (a) Right to work, to education and to public assistance in certain cases is covered under Article 41. (b) Equal justice and free legal aid is provided for in Article 39A, which was added by the 42nd Amendment Act. (c) The organization of agriculture and animal husbandry, including the prohibition of cow slaughter, is mentioned in Article 48. (d) The Uniform Civil Code for the citizens is enshrined in Article 44. Therefore, the correct match is a-(ii), b-(iv), c-(i), d-(iii).",
    "explanation_marathi": "या प्रश्नामध्ये राज्य धोरणाच्या मार्गदर्शक तत्वांना भारतीय संविधानातील त्यांच्या संबंधित कलमांशी जुळवणे आवश्यक आहे. चला त्यांना जुळवूया: (a) काम करण्याचा, शिक्षणाचा आणि काही विशिष्ट प्रकरणांमध्ये सार्वजनिक मदतीचा अधिकार कलम 41 अंतर्गत येतो. (b) समान न्याय आणि मोफत कायदेशीर मदत कलम 39A मध्ये प्रदान केली आहे, जी 42 व्या घटनादुरुस्ती कायद्याने जोडली गेली. (c) कृषी आणि पशुधन संघटनेमध्ये, गोहत्येच्या प्रतिबंधासह, कलम 48 मध्ये उल्लेख आहे. (d) नागरिकांसाठी समान नागरी संहिता कलम 44 मध्ये समाविष्ट आहे. म्हणून, योग्य जुळणी a-(ii), b-(iv), c-(i), d-(iii) अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(iv) (iii) (i) (ii)",
        "option_text_marathi": "(iv) (iii) (i) (ii)",
        "is_correct": false,
        "reason_english": "This option provides an incorrect matching sequence for the given principles and articles.",
        "reason_marathi": "हा पर्याय दिलेल्या तत्त्वे आणि कलमांसाठी चुकीचा जुळणी क्रम प्रदान करतो."
      },
      {
        "option_text_english": "(i) (ii) (iii) (iv)",
        "option_text_marathi": "(i) (ii) (iii) (iv)",
        "is_correct": false,
        "reason_english": "This option provides an incorrect matching sequence for the given principles and articles.",
        "reason_marathi": "हा पर्याय दिलेल्या तत्त्वे आणि कलमांसाठी चुकीचा जुळणी क्रम प्रदान करतो."
      },
      {
        "option_text_english": "(ii) (i) (iv) (iii)",
        "option_text_marathi": "(ii) (i) (iv) (iii)",
        "is_correct": false,
        "reason_english": "This option provides an incorrect matching sequence for the given principles and articles.",
        "reason_marathi": "हा पर्याय दिलेल्या तत्त्वे आणि कलमांसाठी चुकीचा जुळणी क्रम प्रदान करतो."
      },
      {
        "option_text_english": "(ii) (iv) (i) (iii)",
        "option_text_marathi": "(ii) (iv) (i) (iii)",
        "is_correct": true,
        "reason_english": "This option correctly matches (a) Right to work with Article 41 (ii), (b) Equal justice and free Legal aid with Article 39A (iv), (c) Prohibition of slaughter of cows with Article 48 (i), and (d) Uniform Civil Code with Article 44 (iii).",
        "reason_marathi": "हा पर्याय (a) काम करण्याचा अधिकार कलम 41 (ii) शी, (b) समान न्याय आणि मोफत कायदेविषयक साहाय्य कलम 39A (iv) शी, (c) गो हत्या प्रतिबंध कलम 48 (i) शी आणि (d) समान नागरी कायदा कलम 44 (iii) शी योग्यरित्या जुळवतो."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) विधानसभा हे कायम स्वरूपी सभागृह आहे. (b) विधानसभा हे वरिष्ठ सभागृह आहे. (c) विधानसभेचा सर्वसाधारण कार्यकाल 5 वर्षाचा असतो. (d) विधानसभा सदस्यासाठी वयाची 30 वर्षे पूर्ण होणे आवश्यक आहे. वरीलपैकी कोणती विधान/ने चुकीचे आहेत ?",
    "question_english": "Consider the following sentences: (a) Vidhan Sabha is a Permanent House (b) Vidhan Sabha is a Upper House (c) Normal tenure of Vidhan Sabha is for five years (d) Member of Vidhan Sabha must have completed 30 years of age Which of the following sentence(s) are false from above ?",
    "options_marathi": [
      "(a), (b)",
      "(b), (c), (d)",
      "(a), (b), (d)",
      "(b), (d)"
    ],
    "options_english": [
      "(a), (b)",
      "(b), (c), (d)",
      "(a), (b), (d)",
      "(b), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Legislature",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's analyze each statement regarding the Vidhan Sabha (Legislative Assembly): (a) Vidhan Sabha is not a permanent house; it can be dissolved before the completion of its five-year term. The Vidhan Parishad (Legislative Council) is the permanent house. So, (a) is false. (b) Vidhan Sabha is the Lower House or the popular house, directly elected by the people. The Vidhan Parishad is the Upper House. So, (b) is false. (c) The normal tenure of a Vidhan Sabha is indeed five years, unless it is dissolved earlier. So, (c) is true. (d) The minimum age requirement to be a member of the Vidhan Sabha is 25 years, not 30 years. 30 years is the minimum age for the Vidhan Parishad. So, (d) is false. Therefore, statements (a), (b), and (d) are false.",
    "explanation_marathi": "विधानसभेबद्दल (विधानमंडळ) प्रत्येक विधानाचे विश्लेषण करूया: (a) विधानसभा हे कायमस्वरूपी सभागृह नाही; ते पाच वर्षांचा कार्यकाळ पूर्ण होण्यापूर्वी विसर्जित केले जाऊ शकते. विधान परिषद (विधानमंडळ) हे कायमस्वरूपी सभागृह आहे. म्हणून, (a) चुकीचे आहे. (b) विधानसभा हे कनिष्ठ सभागृह किंवा लोकांद्वारे थेट निवडले जाणारे लोकप्रिय सभागृह आहे. विधान परिषद हे वरिष्ठ सभागृह आहे. म्हणून, (b) चुकीचे आहे. (c) विधानसभेचा सामान्य कार्यकाळ खरोखरच पाच वर्षांचा असतो, जोपर्यंत ते लवकर विसर्जित होत नाही. म्हणून, (c) बरोबर आहे. (d) विधानसभेचा सदस्य होण्यासाठी किमान वयोमर्यादा 25 वर्षे आहे, 30 वर्षे नाही. 30 वर्षे ही विधान परिषदेसाठी किमान वयोमर्यादा आहे. म्हणून, (d) चुकीचे आहे. म्हणून, (a), (b) आणि (d) ही विधाने चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b)",
        "option_text_marathi": "(a), (b)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (d) is also false.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (d) देखील चुकीचे आहे."
      },
      {
        "option_text_english": "(b), (c), (d)",
        "option_text_marathi": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (c) is true, not false, making this option incorrect.",
        "reason_marathi": "विधान (c) बरोबर आहे, चुकीचे नाही, त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option_text_english": "(a), (b), (d)",
        "option_text_marathi": "(a), (b), (d)",
        "is_correct": true,
        "reason_english": "Statements (a), (b), and (d) are all factually incorrect regarding the Vidhan Sabha.",
        "reason_marathi": "विधाने (a), (b) आणि (d) ही विधानसभेबद्दल वस्तुस्थितीनुसार चुकीची आहेत."
      },
      {
        "option_text_english": "(b), (d)",
        "option_text_marathi": "(b), (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (a) is also false.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (a) देखील चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "प्रतिष्ठा आणि संधी यांच्या समानतेच्या संकल्पनेला भारतीय राज्य घटनेच्या कलम ______ ते ______ मध्ये भरीव आशय व स्वरूप प्रदान करण्यात आले आहे.",
    "question_english": "The concept of equality of status and opportunity has been given concrete substance and shape in Articles ______ to ______ of the Indian Constitution.",
    "options_marathi": [
      "25, 28",
      "23, 43",
      "36, 51",
      "14, 18"
    ],
    "options_english": [
      "25, 28",
      "23, 43",
      "36, 51",
      "14, 18"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Fundamental Rights / Preamble",
    "difficulty": "Easy",
    "trap_detected": "Distractors from other parts of the constitution",
    "explanation_english": "The Preamble of the Indian Constitution promises \"Equality of status and of opportunity\". This fundamental principle is given concrete shape and substance in the Fundamental Rights, specifically under Articles 14 to 18. Article 14 guarantees equality before the law and equal protection of the laws. Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. Article 16 ensures equality of opportunity in matters of public employment. Article 17 abolishes untouchability, and Article 18 abolishes titles. Together, these articles establish the right to equality as a cornerstone of the Indian democratic framework.",
    "explanation_marathi": "भारतीय संविधानाची प्रस्तावना \"दर्जाची आणि संधीची समानता\" याचे वचन देते. हे मूलभूत तत्व मूलभूत हक्कांमध्ये, विशेषतः कलम 14 ते 18 अंतर्गत, ठोस स्वरूप आणि आशय प्रदान करते. कलम 14 कायद्यासमोर समानता आणि कायद्याचे समान संरक्षण सुनिश्चित करते. कलम 15 धर्म, वंश, जात, लिंग किंवा जन्मस्थान या कारणांवरून भेदभाव करण्यास प्रतिबंध करते. कलम 16 सार्वजनिक रोजगाराच्या बाबतीत संधीची समानता सुनिश्चित करते. कलम 17 अस्पृश्यता रद्द करते आणि कलम 18 पदव्या रद्द करते. एकत्रितपणे, ही कलमे भारतीय लोकशाही संरचनेचा आधारस्तंभ म्हणून समानतेचा अधिकार स्थापित करतात.",
    "options_breakdown": [
      {
        "option_text_english": "25, 28",
        "option_text_marathi": "25, 28",
        "is_correct": false,
        "reason_english": "Articles 25 to 28 deal with the Right to Freedom of Religion, not equality of status and opportunity.",
        "reason_marathi": "कलम 25 ते 28 धर्म स्वातंत्र्याच्या अधिकाराशी संबंधित आहेत, दर्जा आणि संधीच्या समानतेशी नाही."
      },
      {
        "option_text_english": "23, 43",
        "option_text_marathi": "23, 43",
        "is_correct": false,
        "reason_english": "Article 23 deals with the Right against Exploitation, and Article 43 is a DPSP related to living wage, not directly equality of status and opportunity.",
        "reason_marathi": "कलम 23 शोषणाविरुद्धच्या अधिकाराशी संबंधित आहे, आणि कलम 43 हे किमान वेतनाशी संबंधित DPSP आहे, थेट दर्जा आणि संधीच्या समानतेशी नाही."
      },
      {
        "option_text_english": "36, 51",
        "option_text_marathi": "36, 51",
        "is_correct": false,
        "reason_english": "Articles 36 to 51 constitute the Directive Principles of State Policy, which are distinct from Fundamental Rights guaranteeing equality.",
        "reason_marathi": "कलम 36 ते 51 राज्य धोरणाची मार्गदर्शक तत्त्वे आहेत, जी समानतेची हमी देणाऱ्या मूलभूत हक्कांपासून वेगळी आहेत."
      },
      {
        "option_text_english": "14, 18",
        "option_text_marathi": "14, 18",
        "is_correct": true,
        "reason_english": "Articles 14 to 18 collectively guarantee the Right to Equality, which embodies the concept of equality of status and opportunity as mentioned in the Preamble.",
        "reason_marathi": "कलम 14 ते 18 एकत्रितपणे समानतेचा अधिकार सुनिश्चित करतात, ज्यात प्रस्तावनेत नमूद केलेल्या दर्जा आणि संधीच्या समानतेची संकल्पना समाविष्ट आहे."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "26 नोव्हेंबर 1949 रोजी खालीलपैकी भारतीय संविधानाच्या कोणत्या तरतूदी अंमलात आल्या ? (a) नागरिकत्वा संबंधी तरतूदी (b) निवडणूकां संबंधी तरतूदी (c) तात्पुरत्या संसदेशी संबंधित तरतूदी (d) मूलभूत अधिकार",
    "question_english": "Which of the following provisions of the Constitution of India came into force from 26 November 1949? (a) Provisions relating to citizenship. (b) Provisions relating to elections. (c) Provisions relating to provisional parliament. (d) Fundamental Rights.",
    "options_marathi": [
      "(a) आणि (b)",
      "(a), (c) आणि (d)",
      "(a), (b) आणि (c)",
      "यापैकी नाही"
    ],
    "options_english": [
      "(a) and (b)",
      "(a), (c) and (d)",
      "(a), (b) and (c)",
      "None"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Making of the Constitution / Commencement of the Constitution",
    "difficulty": "Medium",
    "trap_detected": "Including Fundamental Rights, which came later",
    "explanation_english": "The Indian Constitution was adopted on November 26, 1949, and some provisions came into force immediately on that day, while the remaining and major part came into force on January 26, 1950 (Republic Day). The provisions that came into effect on November 26, 1949, included those related to citizenship (Articles 5, 6, 7, 8, 9), elections (Articles 324, 366, 367), provisional parliament (Articles 379, 380), temporary and transitional provisions, and the short title (Article 394). Fundamental Rights (Part III) came into force on January 26, 1950. Therefore, statements (a), (b), and (c) are correct.",
    "explanation_marathi": "भारतीय संविधान 26 नोव्हेंबर 1949 रोजी स्वीकारले गेले आणि त्या दिवशी काही तरतुदी त्वरित लागू झाल्या, तर उर्वरित आणि मुख्य भाग 26 जानेवारी 1950 (प्रजासत्ताक दिन) रोजी लागू झाला. 26 नोव्हेंबर 1949 रोजी लागू झालेल्या तरतुदींमध्ये नागरिकत्व (कलम 5, 6, 7, 8, 9), निवडणुका (कलम 324, 366, 367), तात्पुरती संसद (कलम 379, 380), तात्पुरत्या आणि संक्रमणकालीन तरतुदी आणि संक्षिप्त शीर्षक (कलम 394) यांचा समावेश होता. मूलभूत हक्क (भाग III) 26 जानेवारी 1950 रोजी लागू झाले. म्हणून, (a), (b) आणि (c) ही विधाने बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "This option is incomplete as provisions relating to provisional parliament (c) also came into force on Nov 26, 1949.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण तात्पुरत्या संसदेशी संबंधित तरतुदी (c) देखील 26 नोव्हेंबर 1949 रोजी लागू झाल्या."
      },
      {
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) आणि (d)",
        "is_correct": false,
        "reason_english": "Statement (d) Fundamental Rights did not come into force on Nov 26, 1949; they came into effect on Jan 26, 1950.",
        "reason_marathi": "विधान (d) मूलभूत हक्क 26 नोव्हेंबर 1949 रोजी लागू झाले नाहीत; ते 26 जानेवारी 1950 रोजी लागू झाले."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": true,
        "reason_english": "Provisions relating to citizenship, elections, and provisional parliament were among those that came into force immediately on November 26, 1949.",
        "reason_marathi": "नागरिकत्व, निवडणुका आणि तात्पुरत्या संसदेशी संबंधित तरतुदी 26 नोव्हेंबर 1949 रोजी त्वरित लागू झालेल्या तरतुदींपैकी होत्या."
      },
      {
        "option_text_english": "None",
        "option_text_marathi": "यापैकी नाही",
        "is_correct": false,
        "reason_english": "This option is incorrect as statements (a), (b), and (c) are indeed correct.",
        "reason_marathi": "हा पर्याय चुकीचा आहे कारण विधाने (a), (b) आणि (c) खरोखरच बरोबर आहेत."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "भारतीय राज्यघटनेच्या सरनाम्याच्या संदर्भात खालीलपैकी कोणता क्रम योग्य आहे ?",
    "question_english": "Which of the following order is correct in relation to the preamble of Indian Constitution ?",
    "options_marathi": [
      "प्रजासत्ताक, गणराज्य, समाजवादी, सार्वभौम, धर्मनिरपेक्ष",
      "सार्वभौम, समाजवादी, गणराज्य, धर्मनिरपेक्ष, प्रजासत्ताक",
      "सार्वभौम, गणराज्य, प्रजासत्ताक, धर्मनिरपेक्ष, समाजवादी",
      "सार्वभौम, समाजवादी, धर्मनिरपेक्ष, प्रजासत्ताक, गणराज्य"
    ],
    "options_english": [
      "Democratic, Republic, Socialist, Sovereign, Secular",
      "Sovereign, Socialist, Republic, Secular, Democratic",
      "Sovereign, Republic, Democratic, Secular, Socialist",
      "Sovereign, Socialist, Secular, Democratic, Republic"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Preamble of the Constitution",
    "difficulty": "Easy",
    "trap_detected": "Jumbling the order of keywords",
    "explanation_english": "The Preamble to the Indian Constitution outlines the nature of the Indian state. The correct order of the keywords describing India as a state, as stated in the Preamble, is \"SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC\". The terms 'Socialist' and 'Secular' were added to the Preamble by the 42nd Constitutional Amendment Act of 1976. This order reflects the foundational principles and aspirations upon which the Indian nation is built.",
    "explanation_marathi": "भारतीय संविधानाची प्रस्तावना भारतीय राज्याचे स्वरूप स्पष्ट करते. प्रस्तावनेत नमूद केल्यानुसार भारताचे वर्णन करणाऱ्या प्रमुख शब्दांचा योग्य क्रम \"सार्वभौम समाजवादी धर्मनिरपेक्ष लोकशाही गणराज्य\" असा आहे. 'समाजवादी' आणि 'धर्मनिरपेक्ष' हे शब्द 1976 च्या 42 व्या घटनादुरुस्ती कायद्याने प्रस्तावनेत जोडले गेले. हा क्रम भारतीय राष्ट्राची मूलभूत तत्त्वे आणि आकांक्षा दर्शवतो.",
    "options_breakdown": [
      {
        "option_text_english": "Democratic, Republic, Socialist, Sovereign, Secular",
        "option_text_marathi": "प्रजासत्ताक, गणराज्य, समाजवादी, सार्वभौम, धर्मनिरपेक्ष",
        "is_correct": false,
        "reason_english": "This order is incorrect. The Preamble starts with 'Sovereign' and ends with 'Republic'.",
        "reason_marathi": "हा क्रम चुकीचा आहे. प्रस्तावना 'सार्वभौम' ने सुरू होते आणि 'गणराज्य' ने संपते."
      },
      {
        "option_text_english": "Sovereign, Socialist, Republic, Secular, Democratic",
        "option_text_marathi": "सार्वभौम, समाजवादी, गणराज्य, धर्मनिरपेक्ष, प्रजासत्ताक",
        "is_correct": false,
        "reason_english": "This order is incorrect. 'Secular' comes before 'Democratic', and 'Republic' is the last term.",
        "reason_marathi": "हा क्रम चुकीचा आहे. 'धर्मनिरपेक्ष' 'लोकशाही' च्या आधी येते आणि 'गणराज्य' हा शेवटचा शब्द आहे."
      },
      {
        "option_text_english": "Sovereign, Republic, Democratic, Secular, Socialist",
        "option_text_marathi": "सार्वभौम, गणराज्य, प्रजासत्ताक, धर्मनिरपेक्ष, समाजवादी",
        "is_correct": false,
        "reason_english": "This order is incorrect. The correct sequence is 'Sovereign, Socialist, Secular, Democratic, Republic'.",
        "reason_marathi": "हा क्रम चुकीचा आहे. योग्य क्रम 'सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही, गणराज्य' असा आहे."
      },
      {
        "option_text_english": "Sovereign, Socialist, Secular, Democratic, Republic",
        "option_text_marathi": "सार्वभौम, समाजवादी, धर्मनिरपेक्ष, प्रजासत्ताक, गणराज्य",
        "is_correct": true,
        "reason_english": "This is the exact and correct order of the keywords describing the nature of the Indian state as stated in the Preamble of the Constitution.",
        "reason_marathi": "भारतीय संविधानाच्या प्रस्तावनेत नमूद केल्यानुसार भारतीय राज्याचे स्वरूप वर्णन करणाऱ्या प्रमुख शब्दांचा हा अचूक आणि योग्य क्रम आहे."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "'सामाजिक सुरक्षा आणि सामाजिक विमा' हा विषय ______ मध्ये समाविष्ट करण्यात आला आहे.",
    "question_english": "'Social Security and Social Insurance' is a subject included in ______.",
    "options_marathi": [
      "समवर्ती सूची",
      "शेषाधिकार",
      "राज्यसूची",
      "संघसूची"
    ],
    "options_english": [
      "Concurrent list",
      "Residuary powers",
      "State list",
      "Union list"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Union-State Relations, Lists of Subjects",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Seventh Schedule of the Indian Constitution divides legislative powers between the Union and State governments into three lists: the Union List, the State List, and the Concurrent List. The Concurrent List includes subjects on which both the Union Parliament and State Legislatures can make laws. 'Social Security and Social Insurance' is explicitly mentioned as Entry 23 in the Concurrent List, allowing both central and state governments to legislate on these matters.",
    "explanation_marathi": "भारतीय संविधानाच्या सातव्या अनुसूचीमध्ये केंद्र आणि राज्य सरकारांमधील कायदेशीर अधिकारांची विभागणी तीन सूचींमध्ये केली आहे: संघसूची, राज्यसूची आणि समवर्ती सूची. समवर्ती सूचीमध्ये असे विषय समाविष्ट आहेत ज्यांवर केंद्र सरकार आणि राज्य सरकार दोन्ही कायदे करू शकतात. 'सामाजिक सुरक्षा आणि सामाजिक विमा' हा विषय समवर्ती सूचीतील 23 व्या क्रमांकावर स्पष्टपणे नमूद केलेला आहे, ज्यामुळे केंद्र आणि राज्य दोन्ही सरकारांना या बाबींवर कायदे करण्याचा अधिकार मिळतो.",
    "options_breakdown": [
      {
        "option_english": "Concurrent list",
        "option_marathi": "समवर्ती सूची",
        "is_correct": true,
        "reason": "Social Security and Social Insurance are subjects listed under Entry 23 of the Concurrent List in the Seventh Schedule of the Indian Constitution, meaning both the Union and State governments can legislate on them."
      },
      {
        "option_english": "Residuary powers",
        "option_marathi": "शेषाधिकार",
        "is_correct": false,
        "reason": "Residuary powers pertain to subjects not enumerated in any of the three lists and are exclusively vested with the Union Parliament. Social security is explicitly listed in the Concurrent List."
      },
      {
        "option_english": "State list",
        "option_marathi": "राज्यसूची",
        "is_correct": false,
        "reason": "The State List contains subjects on which only state legislatures can make laws. Social security is not exclusively a state subject; it falls under the Concurrent List."
      },
      {
        "option_english": "Union list",
        "option_marathi": "संघसूची",
        "is_correct": false,
        "reason": "The Union List contains subjects on which only the Union Parliament can make laws. Social security is not exclusively a Union subject; it falls under the Concurrent List."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "भारतीय संविधान सभेच्या विविध समित्यांच्या योग्य जोड्या ओळखा : 'A' (समिती) (a) सल्लागार समिती (b) मूलभूत अधिकार उप-समिती (c) केंद्रीय संविधान समिती (d) अल्पसंख्याक समिती 'B' (अध्यक्ष) जवाहरलाल नेहरु जे.बी. कृपलानी जवाहरलाल नेहरु मौलाना अबुल कलाम आझाद",
    "question_english": "Select the correct pairs of various committees of Constituent Assembly of India : 'A' (Committee) (a) Advisory Committee (b) Fundamental Rights Sub - Committee (c) Union Constitution Committee (d) Minorities Committee 'B' (Chairman) Jawaharlal Nehru J.B. Kriplani Jawaharlal Nehru Maulana Abul Kalam Azad",
    "options_marathi": [
      "फक्त (a), (b), (c)",
      "फक्त (c), (d)",
      "फक्त (b), (c), (d)",
      "फक्त (b), (c)"
    ],
    "options_english": [
      "Only (a), (b), (c)",
      "Only (c), (d)",
      "Only (b), (c), (d)",
      "Only (b), (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Constituent Assembly, Committees of Constituent Assembly",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Constituent Assembly of India formed various committees to deal with different aspects of constitution-making. It's crucial to remember the chairpersons of these committees. The Advisory Committee on Fundamental Rights, Minorities, and Tribal and Excluded Areas was chaired by Sardar Vallabhbhai Patel, not Jawaharlal Nehru. The Fundamental Rights Sub-Committee was indeed chaired by J.B. Kripalani. The Union Constitution Committee was chaired by Jawaharlal Nehru. The Minorities Sub-Committee was chaired by H.C. Mukherjee, not Maulana Abul Kalam Azad. Therefore, only pairs (b) and (c) are correctly matched.",
    "explanation_marathi": "भारतीय संविधान सभेने संविधान निर्मितीच्या विविध पैलूंवर काम करण्यासाठी अनेक समित्या स्थापन केल्या होत्या. या समित्यांचे अध्यक्ष लक्षात ठेवणे महत्त्वाचे आहे. मूलभूत हक्क, अल्पसंख्याक आणि आदिवासी व वगळलेल्या क्षेत्रांवरील सल्लागार समितीचे अध्यक्ष सरदार वल्लभभाई पटेल होते, जवाहरलाल नेहरू नव्हे. मूलभूत हक्क उप-समितीचे अध्यक्ष जे.बी. कृपलानी होते. केंद्रीय संविधान समितीचे अध्यक्ष जवाहरलाल नेहरू होते. अल्पसंख्याक उप-समितीचे अध्यक्ष एच.सी. मुखर्जी होते, मौलाना अबुल कलाम आझाद नव्हते. त्यामुळे, फक्त (b) आणि (c) या जोड्या योग्य आहेत.",
    "options_breakdown": [
      {
        "option_english": "Only (a), (b), (c)",
        "option_marathi": "फक्त (a), (b), (c)",
        "is_correct": false,
        "reason": "Statement (a) is incorrect. The Advisory Committee was chaired by Sardar Vallabhbhai Patel, not Jawaharlal Nehru."
      },
      {
        "option_english": "Only (c), (d)",
        "option_marathi": "फक्त (c), (d)",
        "is_correct": false,
        "reason": "Statement (d) is incorrect. The Minorities Sub-Committee was chaired by H.C. Mukherjee, not Maulana Abul Kalam Azad."
      },
      {
        "option_english": "Only (b), (c), (d)",
        "option_marathi": "फक्त (b), (c), (d)",
        "is_correct": false,
        "reason": "Statement (d) is incorrect. The Minorities Sub-Committee was chaired by H.C. Mukherjee, not Maulana Abul Kalam Azad."
      },
      {
        "option_english": "Only (b), (c)",
        "option_marathi": "फक्त (b), (c)",
        "is_correct": true,
        "reason": "Statement (b) is correct (Fundamental Rights Sub-Committee: J.B. Kripalani) and statement (c) is correct (Union Constitution Committee: Jawaharlal Nehru)."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "जोड्या लावा - (घटना समितीच्या महिला सदस्या) 'A' (सदस्य) (a) सरोजिनी नायडू (b) मालती चौधरी (c) दक्षयाणी वेलायूदन (d) राजकुमारी अमृत कौर 'B' (मतदारसंघ) (i) संयुक्त प्रांत व बेरार (ii) बिहार (iii) ओरीसा (iv) मद्रास",
    "question_english": "Match the pairs - (Women members of Constituent Assembly) 'A' (Member) (a) Sarojini Naidu (b) Malati Chowdhary (c) Dakshayani Velayudan (d) Rajkumari Amrit Kaur 'B' (Constituency) (i) Central Provinces and Berar (ii) Bihar (iii) Orissa (iv) Madras",
    "options_marathi": [
      "(ii) (i) (iv) (iii)",
      "(ii) (iii) (iv) (i)",
      "(iii) (ii) (i) (iv)",
      "(iv) (ii) (iii) (i)"
    ],
    "options_english": [
      "(ii) (i) (iv) (iii)",
      "(ii) (iii) (iv) (i)",
      "(iii) (ii) (i) (iv)",
      "(iv) (ii) (iii) (i)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Constituent Assembly, Members of Constituent Assembly",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Constituent Assembly of India included several prominent women members who played a significant role in drafting the Constitution. Knowing their constituencies requires detailed historical knowledge. Sarojini Naidu represented Bihar, Malati Chowdhary represented Orissa, Dakshayani Velayudan represented Madras, and Rajkumari Amrit Kaur represented Central Provinces and Berar. Matching these correctly is essential for this question.",
    "explanation_marathi": "भारतीय संविधान सभेत अनेक प्रमुख महिला सदस्य होत्या ज्यांनी संविधान निर्मितीमध्ये महत्त्वपूर्ण भूमिका बजावली. त्यांच्या मतदारसंघांची माहिती असणे हे सखोल ऐतिहासिक ज्ञानाची मागणी करते. सरोजिनी नायडू यांनी बिहारचे प्रतिनिधित्व केले, मालती चौधरी यांनी ओरिसाचे, दक्षयाणी वेलायूदन यांनी मद्रासचे आणि राजकुमारी अमृत कौर यांनी मध्य प्रांत आणि बेरारचे प्रतिनिधित्व केले. या जोड्या योग्यरित्या जुळवणे या प्रश्नासाठी आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_english": "(ii) (i) (iv) (iii)",
        "option_marathi": "(ii) (i) (iv) (iii)",
        "is_correct": false,
        "reason": "This option incorrectly matches Malati Chowdhary with Central Provinces and Berar, and Rajkumari Amrit Kaur with Orissa."
      },
      {
        "option_english": "(ii) (iii) (iv) (i)",
        "option_marathi": "(ii) (iii) (iv) (i)",
        "is_correct": true,
        "reason": "This option correctly matches: (a) Sarojini Naidu - Bihar (ii), (b) Malati Chowdhary - Orissa (iii), (c) Dakshayani Velayudan - Madras (iv), (d) Rajkumari Amrit Kaur - Central Provinces and Berar (i)."
      },
      {
        "option_english": "(iii) (ii) (i) (iv)",
        "option_marathi": "(iii) (ii) (i) (iv)",
        "is_correct": false,
        "reason": "This option incorrectly matches Sarojini Naidu with Orissa, Malati Chowdhary with Bihar, Dakshayani Velayudan with Central Provinces and Berar, and Rajkumari Amrit Kaur with Madras."
      },
      {
        "option_english": "(iv) (ii) (iii) (i)",
        "option_marathi": "(iv) (ii) (iii) (i)",
        "is_correct": false,
        "reason": "This option incorrectly matches Sarojini Naidu with Madras, and Dakshayani Velayudan with Orissa."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "अयोग्य कथन ओळखा : (a) आंतर-राज्य परिषद 28 मे, 1990 रोजी स्थापन झाली. (b) आंतर-राज्य परिषदेची पुनर्रचना 11 नोव्हेंबर, 1999 मध्ये करण्यात आली. (c) राष्ट्रीय विकास परिषदेची स्थापना 1950 मध्ये झाली.",
    "question_english": "Select the incorrect statement : (a) The Inter-state council was set up on 28 May, 1990 (b) The Inter-state council was reconstituted on 11 November, 1999 (c) The National Development council was established in 1950",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "फक्त (c)",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "Only (c)",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Inter-State Relations, Constitutional and Non-Constitutional Bodies",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge about the establishment and reconstitution dates of important inter-state bodies. The Inter-State Council was indeed established on May 28, 1990, based on Article 263 of the Constitution, following the recommendations of the Sarkaria Commission. It was later reconstituted on November 11, 1999. However, the National Development Council (NDC) was established on August 6, 1952, not in 1950. Its purpose was to secure cooperation of states in the execution of the Five-Year Plans. Thus, statement (c) is incorrect.",
    "explanation_marathi": "हा प्रश्न महत्त्वाच्या आंतरराज्यीय संस्थांच्या स्थापना आणि पुनर्रचना तारखांबद्दलच्या ज्ञानाची चाचणी घेतो. आंतरराज्य परिषद खरंच 28 मे 1990 रोजी संविधानाच्या अनुच्छेद 263 नुसार, सरकारिया आयोगाच्या शिफारशींनुसार स्थापन झाली होती. नंतर 11 नोव्हेंबर 1999 रोजी तिची पुनर्रचना करण्यात आली. तथापि, राष्ट्रीय विकास परिषद (NDC) 1950 मध्ये नव्हे, तर 6 ऑगस्ट 1952 रोजी स्थापन झाली होती. पंचवार्षिक योजनांच्या अंमलबजावणीमध्ये राज्यांचे सहकार्य मिळवणे हा तिचा उद्देश होता. त्यामुळे, विधान (c) चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_english": "Only (a)",
        "option_marathi": "फक्त (a)",
        "is_correct": false,
        "reason": "Statement (a) is correct. The Inter-State Council was set up on 28 May 1990."
      },
      {
        "option_english": "Only (b)",
        "option_marathi": "फक्त (b)",
        "is_correct": false,
        "reason": "Statement (b) is correct. The Inter-State Council was reconstituted on 11 November 1999."
      },
      {
        "option_english": "Only (c)",
        "option_marathi": "फक्त (c)",
        "is_correct": true,
        "reason": "Statement (c) is incorrect. The National Development Council (NDC) was established on August 6, 1952, not in 1950."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason": "Statement (c) is incorrect, so 'None of the above' is not the correct choice."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "खालीलपैकी कोणती जोडी योग्य आहे ? (a) स्वातंत्र्याचा हक्क (b) सांस्कृतिक व शैक्षणिक हक्क (c) घटनात्मक उपाययोजनेचा हक्क (d) धार्मिक स्वातंत्र्याचा हक्क (कलम 14 ते 19) (कलम 29 व 30) (कलम 32) (कलम 25 ते 28)",
    "question_english": "Which of the following Pairs are matched correctly? (a) Right to Liberty (b) Cultural and Educational Rights (c) Right to Constitutional Remedies (d) Right to Freedom of Religion (Art. 14 to 19) (Art. 29 and 30) (Art. 32) (Art. 25 to 28)",
    "options_marathi": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (c), (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (c), (d)",
      "All the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Fundamental Rights, Articles of the Constitution",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests the fundamental knowledge of the articles associated with various Fundamental Rights in the Indian Constitution. The Right to Liberty is primarily covered under Article 21, while Articles 14-18 deal with the Right to Equality and Article 19 with specific freedoms. Cultural and Educational Rights are indeed covered by Articles 29 and 30. The Right to Constitutional Remedies is enshrined in Article 32, and the Right to Freedom of Religion is covered by Articles 25 to 28. Hence, options (b), (c), and (d) are correctly matched.",
    "explanation_marathi": "हा प्रश्न भारतीय संविधानातील विविध मूलभूत हक्कांशी संबंधित अनुच्छेदांच्या मूलभूत ज्ञानाची चाचणी घेतो. स्वातंत्र्याचा हक्क प्रामुख्याने अनुच्छेद 21 अंतर्गत येतो, तर अनुच्छेद 14-18 समानतेच्या हक्काशी आणि अनुच्छेद 19 विशिष्ट स्वातंत्र्यांशी संबंधित आहेत. सांस्कृतिक आणि शैक्षणिक हक्क खरंच अनुच्छेद 29 आणि 30 द्वारे समाविष्ट आहेत. घटनात्मक उपायांचा हक्क अनुच्छेद 32 मध्ये समाविष्ट आहे आणि धार्मिक स्वातंत्र्याचा हक्क अनुच्छेद 25 ते 28 द्वारे समाविष्ट आहे. त्यामुळे, पर्याय (b), (c) आणि (d) योग्यरित्या जुळलेले आहेत.",
    "options_breakdown": [
      {
        "option_english": "(a), (b), (c)",
        "option_marathi": "(a), (b), (c)",
        "is_correct": false,
        "reason": "Pair (a) is incorrect. Right to Liberty is primarily Article 21, while Articles 14-19 cover Right to Equality and Right to Freedom (of speech, etc.)."
      },
      {
        "option_english": "(b), (c), (d)",
        "option_marathi": "(b), (c), (d)",
        "is_correct": true,
        "reason": "Pair (b) (Cultural and Educational Rights: Art. 29 and 30), Pair (c) (Right to Constitutional Remedies: Art. 32), and Pair (d) (Right to Freedom of Religion: Art. 25 to 28) are all correctly matched."
      },
      {
        "option_english": "(a), (c), (d)",
        "option_marathi": "(a), (c), (d)",
        "is_correct": false,
        "reason": "Pair (a) is incorrect. Right to Liberty is primarily Article 21, while Articles 14-19 cover Right to Equality and Right to Freedom (of speech, etc.)."
      },
      {
        "option_english": "All the above",
        "option_marathi": "वरील सर्व",
        "is_correct": false,
        "reason": "Pair (a) is incorrectly matched, so 'All the above' cannot be the correct answer."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "पुढीलपैकी कोणते नियंत्रक व लेखा परीक्षकाचे (CAG) काम नाही ?",
    "question_english": "Which of the following is not one of the functions of the Comptroller and Auditor General ?",
    "options_marathi": [
      "शासन खर्चाचे लेखापरीक्षण करणे.",
      "शासन खर्चावर परिणाम करणाऱ्या वित्तिय नियमांचे व आदेशांचे पालन होते आहे किंवा नाही ते पाहणे.",
      "जे पदाधिकारी शासन खर्चाला मंजूरी देत आहेत, ते वैधानिक दृष्ट्या त्या कार्यासाठी सक्षम आहेत की नाही, ते पाहणे.",
      "कल्याणकारी योजनांच्या खर्चाची शिफारस करणे."
    ],
    "options_english": [
      "to audit government expenditure.",
      "to ensure that financial rules and orders impacting governmental expenditure are obeyed.",
      "to satisfy itself that those who sanction expenditure have the legal powers to do so.",
      "to recommend expenditure for welfare schemes."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Constitutional Bodies, Comptroller and Auditor General (CAG)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Comptroller and Auditor General (CAG) of India is the guardian of the public purse and controls the entire financial system of the country at both the Union and state levels. Its primary functions include auditing all government expenditure, ensuring compliance with financial rules and orders, and verifying the legal authority of those sanctioning expenditure. However, the CAG's role is strictly limited to auditing and reporting. It does not involve recommending expenditure for welfare schemes or formulating policy. Such recommendations fall under the purview of the executive or planning bodies.",
    "explanation_marathi": "भारताचे नियंत्रक व महालेखापरीक्षक (CAG) हे सार्वजनिक पैशाचे संरक्षक आहेत आणि केंद्र तसेच राज्य स्तरावरील देशाच्या संपूर्ण वित्तीय प्रणालीवर नियंत्रण ठेवतात. त्यांच्या प्रमुख कार्यांमध्ये सर्व सरकारी खर्चाचे लेखापरीक्षण करणे, वित्तीय नियम आणि आदेशांचे पालन सुनिश्चित करणे आणि खर्च मंजूर करणाऱ्या अधिकाऱ्यांच्या कायदेशीर अधिकारांची पडताळणी करणे यांचा समावेश होतो. तथापि, CAG ची भूमिका केवळ लेखापरीक्षण आणि अहवाल देण्यापुरती मर्यादित आहे. कल्याणकारी योजनांसाठी खर्चाची शिफारस करणे किंवा धोरणे तयार करणे हे त्यांच्या कार्यक्षेत्रात येत नाही. अशा शिफारसी कार्यकारी मंडळ किंवा नियोजन आयोगाच्या अखत्यारीत येतात.",
    "options_breakdown": [
      {
        "option_english": "to audit government expenditure.",
        "option_marathi": "शासन खर्चाचे लेखापरीक्षण करणे.",
        "is_correct": false,
        "reason": "This is a primary and core function of the CAG, as it is responsible for auditing all receipts and expenditure of the Union and State governments."
      },
      {
        "option_english": "to ensure that financial rules and orders impacting governmental expenditure are obeyed.",
        "option_marathi": "शासन खर्चावर परिणाम करणाऱ्या वित्तिय नियमांचे व आदेशांचे पालन होते आहे किंवा नाही ते पाहणे.",
        "is_correct": false,
        "reason": "This is part of the CAG's compliance audit, ensuring that financial transactions adhere to prescribed rules and regulations."
      },
      {
        "option_english": "to satisfy itself that those who sanction expenditure have the legal powers to do so.",
        "option_marathi": "जे पदाधिकारी शासन खर्चाला मंजूरी देत आहेत, ते वैधानिक दृष्ट्या त्या कार्यासाठी सक्षम आहेत की नाही, ते पाहणे.",
        "is_correct": false,
        "reason": "This falls under the CAG's propriety audit, verifying the authority and legality of expenditure sanctions."
      },
      {
        "option_english": "to recommend expenditure for welfare schemes.",
        "option_marathi": "कल्याणकारी योजनांच्या खर्चाची शिफारस करणे.",
        "is_correct": true,
        "reason": "The CAG's role is to audit and report on past expenditure and financial management, not to make policy recommendations or suggest future expenditure for welfare schemes. This is a function of the executive or planning bodies."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "त्रिराज्य योजनेच्या विरोधात 18 नोव्हेंबर 1955 रोजी विधान सभेवर नेण्यात आलेल्या विराट मोर्चाचे नेतृत्व कोणी केले ?",
    "question_english": "Who led the protest march on the Legislative Assembly on 18th November 1955 against the tri-state Scheme ?",
    "options_marathi": [
      "केवळ (a) व (c)",
      "केवळ (b) व (d)",
      "केवळ (a) व (b)",
      "केवळ (c) व (d)"
    ],
    "options_english": [
      "Only (a) and (c)",
      "Only (b) and (d)",
      "Only (a) and (b)",
      "Only (c) and (d)"
    ],
    "correct_option_index": 0,
    "subject": "History",
    "topic": "Post-Independence India, States Reorganisation, Samyukta Maharashtra Movement",
    "difficulty": "Hard",
    "trap_detected": "Incomplete Question",
    "explanation_english": "This question pertains to the Samyukta Maharashtra Movement, a significant agitation for the formation of a Marathi-speaking state with Bombay as its capital. The protest march on November 18, 1955, against the proposed tri-state scheme (which suggested Bombay as a separate entity) was a pivotal moment. However, the question as provided is incomplete, as it refers to leaders (a), (b), (c), (d) in the options without defining who these individuals are in the question stem. Therefore, it is impossible to determine the correct answer from the given information.",
    "explanation_marathi": "हा प्रश्न संयुक्त महाराष्ट्र चळवळीशी संबंधित आहे, जी मुंबई राजधानी असलेल्या मराठी भाषिक राज्याच्या निर्मितीसाठी एक महत्त्वपूर्ण आंदोलन होती. 18 नोव्हेंबर 1955 रोजी त्रिराज्य योजनेच्या (ज्यात मुंबईला स्वतंत्र शहर-राज्य म्हणून प्रस्तावित केले होते) विरोधात काढलेला मोर्चा एक महत्त्वाचा क्षण होता. तथापि, दिलेला प्रश्न अपूर्ण आहे, कारण तो पर्यायांमध्ये (a), (b), (c), (d) या नेत्यांचा उल्लेख करतो, परंतु प्रश्नात या व्यक्ती कोण आहेत हे परिभाषित केलेले नाही. त्यामुळे, दिलेल्या माहितीवरून योग्य उत्तर निश्चित करणे अशक्य आहे.",
    "options_breakdown": [
      {
        "option_english": "Only (a) and (c)",
        "option_marathi": "केवळ (a) व (c)",
        "is_correct": false,
        "reason": "The question is incomplete as the names corresponding to (a), (b), (c), (d) are missing from the question stem. Therefore, this option cannot be evaluated."
      },
      {
        "option_english": "Only (b) and (d)",
        "option_marathi": "केवळ (b) व (d)",
        "is_correct": false,
        "reason": "The question is incomplete as the names corresponding to (a), (b), (c), (d) are missing from the question stem. Therefore, this option cannot be evaluated."
      },
      {
        "option_english": "Only (a) and (b)",
        "option_marathi": "केवळ (a) व (b)",
        "is_correct": false,
        "reason": "The question is incomplete as the names corresponding to (a), (b), (c), (d) are missing from the question stem. Therefore, this option cannot be evaluated."
      },
      {
        "option_english": "Only (c) and (d)",
        "option_marathi": "केवळ (c) व (d)",
        "is_correct": false,
        "reason": "The question is incomplete as the names corresponding to (a), (b), (c), (d) are missing from the question stem. Therefore, this option cannot be evaluated."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "______ मिळून बनलेल्या निर्वाचक मंडळाकडून भारताचा राष्ट्रपती निवडला जातो. (a) संसद व राज्यविधीमंडळाचे सर्व सदस्य (b) संसदेच्या दोन्हीही सभागृहाचे निर्वाचीत सदस्य (c) राज्य विधानसभेचे निर्वाचीत सदस्य (d) फक्त संसदेचे सदस्य",
    "question_english": "The President of India is elected by an electoral college consisting of ______ (a) All members of Parliament and State Legislature. (b) The elected members of both Houses of Parliament. (c) The elected members of the Legislative Assemblies of the states. (d) Only members of Parliament.",
    "options_marathi": [
      "केवळ (a)",
      "(b) आणि (c) केवळ",
      "(c) आणि (d) केवळ",
      "केवळ (d)"
    ],
    "options_english": [
      "Only (a)",
      "(b) and (c) only",
      "(c) and (d) only",
      "Only (d)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "President of India, Electoral College",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word",
    "explanation_english": "The President of India is elected indirectly by an electoral college, as stipulated in Article 54 of the Constitution. This electoral college comprises the elected members of both Houses of Parliament (Lok Sabha and Rajya Sabha) and the elected members of the Legislative Assemblies of the states. It's crucial to note that nominated members of Parliament and members of State Legislative Councils (Vidhan Parishads) do not participate in the Presidential election. Additionally, elected members of the Legislative Assemblies of the Union Territories of Delhi and Puducherry also form part of this electoral college. Therefore, statements (b) and (c) correctly describe components of the electoral college.",
    "explanation_marathi": "भारताच्या राष्ट्रपतींची निवड संविधानाच्या अनुच्छेद 54 नुसार अप्रत्यक्षपणे एका निर्वाचक गणाद्वारे केली जाते. या निर्वाचक गणात संसदेच्या दोन्ही सभागृहांचे (लोकसभा आणि राज्यसभा) निवडून आलेले सदस्य आणि राज्यांच्या विधानसभांचे निवडून आलेले सदस्य यांचा समावेश असतो. संसदेचे नामनिर्देशित सदस्य आणि राज्य विधान परिषदेचे (विधान परिषद) सदस्य राष्ट्रपती निवडणुकीत भाग घेत नाहीत हे लक्षात घेणे महत्त्वाचे आहे. याव्यतिरिक्त, दिल्ली आणि पुद्दुचेरी या केंद्रशासित प्रदेशांच्या विधानसभांचे निवडून आलेले सदस्य देखील या निर्वाचक गणाचे भाग असतात. त्यामुळे, विधाने (b) आणि (c) निर्वाचक गणाचे घटक योग्यरित्या वर्णन करतात.",
    "options_breakdown": [
      {
        "option_english": "Only (a)",
        "option_marathi": "केवळ (a)",
        "is_correct": false,
        "reason": "Statement (a) is incorrect because it includes 'All members' (nominated members are excluded) and 'State Legislature' (which would include Legislative Councils, which are excluded)."
      },
      {
        "option_english": "(b) and (c) only",
        "option_marathi": "(b) आणि (c) केवळ",
        "is_correct": true,
        "reason": "Statements (b) and (c) accurately describe the elected members of both Houses of Parliament and the elected members of the Legislative Assemblies of the states, respectively, who form the electoral college for the President."
      },
      {
        "option_english": "(c) and (d) only",
        "option_marathi": "(c) आणि (d) केवळ",
        "is_correct": false,
        "reason": "Statement (d) is incorrect as it excludes the elected members of the Legislative Assemblies of the states from the electoral college."
      },
      {
        "option_english": "Only (d)",
        "option_marathi": "केवळ (d)",
        "is_correct": false,
        "reason": "Statement (d) is incorrect as it excludes the elected members of the Legislative Assemblies of the states from the electoral college."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "खालीलपैकी कोणते विधान बरोबर आहे ?",
    "question_english": "Which one of the following statements is correct?",
    "options_marathi": [
      "राज्यसभेच्या अध्यक्षाची निवड ही संसदेच्या फक्त निर्वाचित सदस्यांकडून होते.",
      "राज्यसभेचा अध्यक्ष हा संसदेच्या दोन्ही सभागृहांच्या संयुक्त बैठकीचे अध्यक्षस्थान स्विकारू शकतो.",
      "राष्ट्रपतीच्या निवडणूकीसाठी जे निर्वाचन मंडळ असते तेच उपराष्ट्रपतीच्या निवडणूकीसाठी असते.",
      "संसदेच्या दोन्ही सभागृहातील नामनिर्देशित सदस्यांना उपराष्ट्रपतीच्या निवडणूकीमध्ये मतदान करण्याचा अधिकार असतो परंतू राष्ट्रपतीच्या निवडणूकीत नसतो."
    ],
    "options_english": [
      "The Chairman of the Rajya Sabha is elected only by the elected members of Parliament.",
      "The Chairman of the Rajya Sabha shall preside over the joint session of both Houses of Parliament.",
      "The electoral college for the election of the Vice-President is the same as that for the election of the President.",
      "The nominated members of both Houses of Parliament have voting right in the election of the Vice-President but not in the election of the President."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Vice-President, President, Parliament, Joint Session",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests detailed knowledge about the roles and election processes of the Vice-President and President, as well as parliamentary procedures. The Vice-President, who is the ex-officio Chairman of the Rajya Sabha, is elected by an electoral college consisting of all members (elected and nominated) of both Houses of Parliament. The Speaker of the Lok Sabha, not the Chairman of the Rajya Sabha, presides over a joint sitting of both Houses of Parliament. The electoral college for the President includes elected members of Parliament and elected members of State Legislative Assemblies, which is different from the Vice-President's electoral college. Crucially, nominated members of both Houses of Parliament are allowed to vote in the Vice-Presidential election but are excluded from the Presidential election. This makes the fourth statement correct.",
    "explanation_marathi": "हा प्रश्न उपराष्ट्रपती आणि राष्ट्रपती यांच्या भूमिका आणि निवडणूक प्रक्रिया तसेच संसदीय कार्यपद्धतीबद्दलच्या सखोल ज्ञानाची चाचणी घेतो. उपराष्ट्रपती, जे राज्यसभेचे पदसिद्ध अध्यक्ष असतात, त्यांची निवड संसदेच्या दोन्ही सभागृहांच्या सर्व सदस्यांच्या (निवडून आलेले आणि नामनिर्देशित) निर्वाचक गणाद्वारे होते. संसदेच्या दोन्ही सभागृहांच्या संयुक्त बैठकीचे अध्यक्षस्थान राज्यसभेचे अध्यक्ष नव्हे, तर लोकसभेचे अध्यक्ष भूषवतात. राष्ट्रपतींच्या निवडणुकीसाठीचा निर्वाचक गण संसदेच्या निवडून आलेल्या सदस्यांचा आणि राज्यांच्या विधानसभांच्या निवडून आलेल्या सदस्यांचा समावेश करतो, जो उपराष्ट्रपतींच्या निर्वाचक गणापेक्षा वेगळा आहे. महत्त्वाचे म्हणजे, संसदेच्या दोन्ही सभागृहांच्या नामनिर्देशित सदस्यांना उपराष्ट्रपतींच्या निवडणुकीत मतदान करण्याचा अधिकार असतो, परंतु राष्ट्रपतींच्या निवडणुकीत नसतो. यामुळे चौथे विधान बरोबर आहे.",
    "options_breakdown": [
      {
        "option_english": "The Chairman of the Rajya Sabha is elected only by the elected members of Parliament.",
        "option_marathi": "राज्यसभेच्या अध्यक्षाची निवड ही संसदेच्या फक्त निर्वाचित सदस्यांकडून होते.",
        "is_correct": false,
        "reason": "The Vice-President (Chairman of Rajya Sabha) is elected by all members (elected and nominated) of both Houses of Parliament, not just the elected members."
      },
      {
        "option_english": "The Chairman of the Rajya Sabha shall preside over the joint session of both Houses of Parliament.",
        "option_marathi": "राज्यसभेचा अध्यक्ष हा संसदेच्या दोन्ही सभागृहांच्या संयुक्त बैठकीचे अध्यक्षस्थान स्विकारू शकतो.",
        "is_correct": false,
        "reason": "The Speaker of the Lok Sabha presides over a joint sitting of both Houses of Parliament (Article 118(4)), not the Chairman of the Rajya Sabha."
      },
      {
        "option_english": "The electoral college for the election of the Vice-President is the same as that for the election of the President.",
        "option_marathi": "राष्ट्रपतीच्या निवडणूकीसाठी जे निर्वाचन मंडळ असते तेच उपराष्ट्रपतीच्या निवडणूकीसाठी असते.",
        "is_correct": false,
        "reason": "The electoral colleges for the President and Vice-President are different. The President's electoral college includes elected MLAs, while the Vice-President's includes nominated MPs but excludes MLAs."
      },
      {
        "option_english": "The nominated members of both Houses of Parliament have voting right in the election of the Vice-President but not in the election of the President.",
        "option_marathi": "संसदेच्या दोन्ही सभागृहातील नामनिर्देशित सदस्यांना उपराष्ट्रपतीच्या निवडणूकीमध्ये मतदान करण्याचा अधिकार असतो परंतू राष्ट्रपतीच्या निवडणूकीत नसतो.",
        "is_correct": true,
        "reason": "This statement is correct. Nominated members of Parliament participate in the Vice-Presidential election but are excluded from the Presidential election, as per Articles 66 and 54 respectively."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "राज्यपालांच्या संबंधी खालीलपैकी कोणते विधान सत्य आहे ?",
    "question_english": "Which of the following statements is true about the Governor ?",
    "options_marathi": [
      "राज्यपाल हे पहिल्या परिशीष्टामध्ये नमूद केलेल्या संसदेच्या सभागृहाचा किंवा कोणत्याही राज्याच्या विधीमंडळाच्या सभागृहाचा सदस्य असू शकत नाही.",
      "राज्यपालांच्या कार्यकाळात त्यांचे वेतन व भत्त्यात कपात केली जाणार नाही.",
      "राष्ट्रपतींची मर्जी असेपर्यंत राज्यपाल आपल्या पदावर राहू शकतात.",
      "वरीलपैकी सर्व."
    ],
    "options_english": [
      "The Governor shall not be a member of either House of Parliament or of a House of the legislature of any state specified in the first schedule.",
      "The emolument and allowances of the Governor shall not be diminished during his term of office.",
      "The Governor shall hold office during the pleasure of the President.",
      "All of the above."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Governor, State Executive",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "This question examines the constitutional provisions related to the office of the Governor. Article 158(1) states that a Governor shall not be a member of either House of Parliament or of a House of the Legislature of any State. If such a person is appointed Governor, they are deemed to have vacated their seat. Article 158(3) ensures that the emoluments and allowances of the Governor cannot be diminished during their term of office, providing financial security and independence. Article 156(1) clearly states that the Governor holds office during the pleasure of the President. Since all three statements accurately reflect the constitutional provisions regarding the Governor, the option 'All of the above' is the correct answer.",
    "explanation_marathi": "हा प्रश्न राज्यपालांच्या पदाशी संबंधित घटनात्मक तरतुदींची तपासणी करतो. अनुच्छेद 158(1) नुसार, राज्यपाल संसद किंवा कोणत्याही राज्याच्या विधानमंडळाच्या कोणत्याही सभागृहाचे सदस्य असणार नाहीत. जर अशी व्यक्ती राज्यपाल म्हणून नियुक्त झाली, तर त्यांनी पदभार स्वीकारल्याच्या तारखेपासून त्यांचे सभागृहातील आसन रिक्त झाल्याचे मानले जाते. अनुच्छेद 158(3) नुसार, राज्यपालांचे वेतन आणि भत्ते त्यांच्या पदावधीत कमी केले जाणार नाहीत, ज्यामुळे त्यांना आर्थिक सुरक्षा आणि स्वातंत्र्य मिळते. अनुच्छेद 156(1) स्पष्टपणे सांगते की राज्यपाल राष्ट्रपतींच्या मर्जीनुसार पद धारण करतात. वरील तिन्ही विधाने राज्यपालांशी संबंधित घटनात्मक तरतुदींचे अचूकपणे वर्णन करत असल्याने, 'वरीलपैकी सर्व' हा पर्याय योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "The Governor shall not be a member of either House of Parliament or of a House of the legislature of any state specified in the first schedule.",
        "option_marathi": "राज्यपाल हे पहिल्या परिशीष्टामध्ये नमूद केलेल्या संसदेच्या सभागृहाचा किंवा कोणत्याही राज्याच्या विधीमंडळाच्या सभागृहाचा सदस्य असू शकत नाही.",
        "is_correct": true,
        "reason": "This is a constitutional qualification for the Governor's office, as per Article 158(1). If a member of Parliament or a state legislature is appointed Governor, they are deemed to have vacated their seat."
      },
      {
        "option_english": "The emolument and allowances of the Governor shall not be diminished during his term of office.",
        "option_marathi": "राज्यपालांच्या कार्यकाळात त्यांचे वेतन व भत्त्यात कपात केली जाणार नाही.",
        "is_correct": true,
        "reason": "This is a constitutional protection for the Governor, ensuring financial security and independence, as stated in Article 158(3)."
      },
      {
        "option_english": "The Governor shall hold office during the pleasure of the President.",
        "option_marathi": "राष्ट्रपतींची मर्जी असेपर्यंत राज्यपाल आपल्या पदावर राहू शकतात.",
        "is_correct": true,
        "reason": "This is a constitutional provision regarding the Governor's tenure, as explicitly mentioned in Article 156(1)."
      },
      {
        "option_english": "All of the above.",
        "option_marathi": "वरीलपैकी सर्व.",
        "is_correct": true,
        "reason": "Since statements (a), (b), and (c) are all constitutionally accurate provisions regarding the Governor, 'All of the above' is the correct answer."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "खालीलपैकी कोणते विधान भारताच्या सर्वोच्च न्यायालयाबद्दल सत्य नाही ? (1) भारतीय घटनेच्या कलम 124 ते 147 आणि भाग पाच मध्ये सर्वोच्च न्यायालयाच्या रचना व अधिकारांची माहिती दिली गेली आहे. (2) 26 जानेवारी 1950 रोजी सर्वोच्च न्यायालयाचे उद्घाटन झाले आणि ते सध्याच्या इमारतीमध्ये 1956 मध्ये हलविण्यात आले. (3) सर्वोच्च न्यायालयाचे न्यायाधीश भारताचे राष्ट्रपती नियुक्त करतात. (4) सर्व विधाने सत्य आहेत.",
    "question_english": "Which of the following statement is not true about India's Supreme Court ? (1) Article 124 to 147 and part V of the Indian Constitution informs about the composition and powers of the Supreme Court. (2) The supreme court was inaugurated on January 26, 1950 and moved into the present building in 1956. (3) Judges of Supreme Court are appointed by the President of India. (4) All are true.",
    "options_marathi": [
      "भारतीय घटनेच्या कलम 124 ते 147 आणि भाग पाच मध्ये सर्वोच्च न्यायालयाच्या रचना व अधिकारांची माहिती दिली गेली आहे.",
      "26 जानेवारी 1950 रोजी सर्वोच्च न्यायालयाचे उद्घाटन झाले आणि ते सध्याच्या इमारतीमध्ये 1956 मध्ये हलविण्यात आले.",
      "सर्वोच्च न्यायालयाचे न्यायाधीश भारताचे राष्ट्रपती नियुक्त करतात.",
      "सर्व विधाने सत्य आहेत."
    ],
    "options_english": [
      "Article 124 to 147 and part V of the Indian Constitution informs about the composition and powers of the Supreme Court.",
      "The supreme court was inaugurated on January 26, 1950 and moved into the present building in 1956.",
      "Judges of Supreme Court are appointed by the President of India.",
      "All are true."
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Supreme Court of India",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Supreme Court of India was inaugurated on January 28, 1950, two days after India became a Republic. It initially functioned from the Parliament House until it moved to its present building on Tilak Marg in 1958, not 1956. Therefore, statement (2) is incorrect. Statements (1) and (3) are factually correct. Article 124 to 147 in Part V of the Constitution deals with the Union Judiciary, including the Supreme Court's composition, powers, and jurisdiction. The judges of the Supreme Court are indeed appointed by the President of India.",
    "explanation_marathi": "भारताच्या सर्वोच्च न्यायालयाचे उद्घाटन 28 जानेवारी 1950 रोजी झाले, भारत प्रजासत्ताक झाल्यानंतर दोन दिवसांनी. ते सुरुवातीला संसद भवनातून कार्यरत होते आणि 1958 मध्ये (1956 नव्हे) टिळक मार्गावरील सध्याच्या इमारतीत स्थलांतरित झाले. त्यामुळे, विधान (2) असत्य आहे. विधान (1) आणि (3) तथ्यात्मकदृष्ट्या बरोबर आहेत. घटनेच्या भाग पाचमधील कलम 124 ते 147 सर्वोच्च न्यायालयाची रचना, अधिकार आणि कार्यक्षेत्राबद्दल माहिती देतात. सर्वोच्च न्यायालयाच्या न्यायाधीशांची नियुक्ती भारताचे राष्ट्रपती करतात.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Article 124 to 147 and part V of the Indian Constitution informs about the composition and powers of the Supreme Court.",
        "statement_marathi": "भारतीय घटनेच्या कलम 124 ते 147 आणि भाग पाच मध्ये सर्वोच्च न्यायालयाच्या रचना व अधिकारांची माहिती दिली गेली आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. Part V of the Indian Constitution (The Union) and specifically Articles 124 to 147 deal with the establishment, composition, jurisdiction, powers, and procedures of the Supreme Court.",
        "reason_marathi": "हे विधान बरोबर आहे. भारतीय संविधानाचा भाग V (संघ) आणि विशेषतः कलम 124 ते 147 सर्वोच्च न्यायालयाची स्थापना, रचना, कार्यक्षेत्र, अधिकार आणि कार्यपद्धतीशी संबंधित आहेत."
      },
      {
        "option_number": 2,
        "statement_english": "The supreme court was inaugurated on January 26, 1950 and moved into the present building in 1956.",
        "statement_marathi": "26 जानेवारी 1950 रोजी सर्वोच्च न्यायालयाचे उद्घाटन झाले आणि ते सध्याच्या इमारतीमध्ये 1956 मध्ये हलविण्यात आले.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Supreme Court was inaugurated on January 28, 1950, not January 26. Also, it moved into its present building in 1958, not 1956.",
        "reason_marathi": "हे विधान असत्य आहे. सर्वोच्च न्यायालयाचे उद्घाटन 26 जानेवारी 1950 रोजी नव्हे, तर 28 जानेवारी 1950 रोजी झाले. तसेच, ते 1956 मध्ये नव्हे, तर 1958 मध्ये सध्याच्या इमारतीत स्थलांतरित झाले."
      },
      {
        "option_number": 3,
        "statement_english": "Judges of Supreme Court are appointed by the President of India.",
        "statement_marathi": "सर्वोच्च न्यायालयाचे न्यायाधीश भारताचे राष्ट्रपती नियुक्त करतात.",
        "is_correct": true,
        "reason_english": "This statement is correct. Article 124(2) of the Constitution states that every Judge of the Supreme Court shall be appointed by the President by warrant under his hand and seal.",
        "reason_marathi": "हे विधान बरोबर आहे. संविधानाच्या कलम 124(2) नुसार, सर्वोच्च न्यायालयाच्या प्रत्येक न्यायाधीशाची नियुक्ती राष्ट्रपती त्यांच्या सही आणि शिक्क्याने करतात."
      },
      {
        "option_number": 4,
        "statement_english": "All are true.",
        "statement_marathi": "सर्व विधाने सत्य आहेत.",
        "is_correct": false,
        "reason_english": "Since statement (2) is incorrect, this option cannot be true.",
        "reason_marathi": "विधान (2) असत्य असल्यामुळे, हा पर्याय बरोबर असू शकत नाही."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "उच्च न्यायालयाच्या न्यायाधीशपदी नियुक्ती होण्यासाठी पात्रतेचे निकष खालील प्रमाणे आहेत : (a) त्याने वयाची 35 वर्षे पूर्ण केली असली पाहिजे. (b) तो व्यक्ति भारताच्या प्रादेशिक क्षेत्रात दहा वर्षे न्यायिक पदावर असली पाहिजे. किंवा (c) तो व्यक्ति उच्च न्यायालयात दहा वर्षे वकिली करीत असलेली पाहिजे. किंवा (d) राष्ट्रपतीच्या मते तो व्यक्ति प्रसिद्ध कायदेतज्ञ असावी.",
    "question_english": "A person to be appointed as a judge of a High Court, should have following qualifications : (a) He should have completed the age of 35 years. (b) He should have held a judicial office in the territory of India for ten years. OR (c) He should have been an advocate of a High Court for ten years. OR (d) He should be a distinguished jurist in the opinion of the President.",
    "options_marathi": [
      "(a), (b) किंवा (d)",
      "(a), (c) किंवा (d)",
      "(b) किंवा (c)",
      "(b) किंवा (d)"
    ],
    "options_english": [
      "(a), (b) or (d)",
      "(a), (c) or (d)",
      "(b) or (c)",
      "(b) or (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "High Courts",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Article 217 of the Indian Constitution lays down the qualifications for appointment as a High Court judge. A person must be a citizen of India and (a) have held a judicial office in the territory of India for at least ten years; or (b) have been an advocate of a High Court (or of two or more such Courts in succession) for at least ten years. There is no minimum age prescribed for a High Court judge, making statement (a) incorrect. The qualification of being a 'distinguished jurist' (d) is applicable only for appointment as a Supreme Court judge, not a High Court judge. Therefore, only statements (b) and (c) are correct qualifications.",
    "explanation_marathi": "भारतीय संविधानाचे कलम 217 उच्च न्यायालयाच्या न्यायाधीशपदी नियुक्तीसाठी पात्रता निश्चित करते. व्यक्ती भारताचा नागरिक असावा आणि (अ) त्याने भारताच्या प्रादेशिक क्षेत्रात किमान दहा वर्षे न्यायिक पद धारण केले असावे; किंवा (ब) त्याने उच्च न्यायालयात (किंवा सलग दोन किंवा अधिक न्यायालयांमध्ये) किमान दहा वर्षे वकील म्हणून काम केले असावे. उच्च न्यायालयाच्या न्यायाधीशासाठी कोणतीही किमान वयोमर्यादा विहित केलेली नाही, त्यामुळे विधान (a) चुकीचे आहे. 'प्रसिद्ध कायदेतज्ञ' (d) असण्याची पात्रता केवळ सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्तीसाठी लागू आहे, उच्च न्यायालयाच्या न्यायाधीशांसाठी नाही. त्यामुळे, केवळ विधाने (b) आणि (c) योग्य पात्रता आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a) He should have completed the age of 35 years.",
        "statement_marathi": "(a) त्याने वयाची 35 वर्षे पूर्ण केली असली पाहिजे.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Constitution does not prescribe any minimum age for appointment as a High Court judge.",
        "reason_marathi": "हे विधान असत्य आहे. संविधानात उच्च न्यायालयाच्या न्यायाधीशपदी नियुक्तीसाठी कोणतीही किमान वयोमर्यादा विहित केलेली नाही."
      },
      {
        "option_number": 2,
        "statement_english": "(b) He should have held a judicial office in the territory of India for ten years.",
        "statement_marathi": "(b) तो व्यक्ति भारताच्या प्रादेशिक क्षेत्रात दहा वर्षे न्यायिक पदावर असली पाहिजे.",
        "is_correct": true,
        "reason_english": "This is one of the correct qualifications for a High Court judge as per Article 217(2)(a).",
        "reason_marathi": "कलम 217(2)(a) नुसार उच्च न्यायालयाच्या न्यायाधीशासाठी ही एक योग्य पात्रता आहे."
      },
      {
        "option_number": 3,
        "statement_english": "(c) He should have been an advocate of a High Court for ten years.",
        "statement_marathi": "(c) तो व्यक्ति उच्च न्यायालयात दहा वर्षे वकिली करीत असलेली पाहिजे.",
        "is_correct": true,
        "reason_english": "This is another correct qualification for a High Court judge as per Article 217(2)(b).",
        "reason_marathi": "कलम 217(2)(b) नुसार उच्च न्यायालयाच्या न्यायाधीशासाठी ही दुसरी योग्य पात्रता आहे."
      },
      {
        "option_number": 4,
        "statement_english": "(d) He should be a distinguished jurist in the opinion of the President.",
        "statement_marathi": "(d) राष्ट्रपतीच्या मते तो व्यक्ति प्रसिद्ध कायदेतज्ञ असावी.",
        "is_correct": false,
        "reason_english": "This qualification is for appointment as a Supreme Court judge (Article 124(3)), not a High Court judge.",
        "reason_marathi": "ही पात्रता सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्तीसाठी आहे (कलम 124(3)), उच्च न्यायालयाच्या न्यायाधीशांसाठी नाही."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "भारताच्या राष्ट्रपतीच्या निवडणूकीत विविध राज्यातील आमदारांच्या मताचे मूल्य खालील सुत्रानूसार निश्चित होत असतात.",
    "question_english": "In Election to the President of India, the value of the vote of MLA from the various states is decided by following formulae.",
    "options_marathi": [
      "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत निवडून गेलेले सदस्य x 1/1000",
      "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत आणि विधान परिषदेत निवडून गेलेल्या सदस्यांची संख्या x 1/1000",
      "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभा व विधान परिषदेतील निवडून गेलेले व नामनिर्देशीत झालेल्या सदस्यांची संख्या x 1/1000",
      "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत निवडून गेलेल्या सदस्यांची संख्या x 2/1000"
    ],
    "options_english": [
      "Value of the vote of MLA = Total Population of State / No. of elected members in the State Legislative Assembly x 1/1000",
      "Value of the vote of MLA = Total Population of State / No. of elected members in the State Legislative Assembly and Council x 1/1000",
      "Value of the vote of MLA = Total Population of State / Total members elected and nominated to the State Legislative Assembly and Council x 1/1000",
      "Value of the vote of MLA = Total Population of State / Total number of elected members in the State Legislative Assembly x 2/1000"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Presidential Election",
    "difficulty": "Easy",
    "trap_detected": "Minor Factual Error",
    "explanation_english": "The election of the President of India is conducted by an electoral college consisting of elected members of both Houses of Parliament and elected members of the Legislative Assemblies of the States and the Union Territories of Delhi and Puducherry. The value of the vote of an MLA is calculated using the formula: (Total Population of the State / Total number of elected members in the State Legislative Assembly) x 1/1000. The population figures used for this calculation are based on the 1971 Census, as mandated by the 84th Amendment Act of 2001, until the first census after 2026.",
    "explanation_marathi": "भारताच्या राष्ट्रपतीची निवडणूक संसदच्या दोन्ही सभागृहांचे निवडून आलेले सदस्य आणि राज्ये तसेच दिल्ली व पुद्दुचेरी या केंद्रशासित प्रदेशांच्या विधानसभेचे निवडून आलेले सदस्य यांच्या मतदार संघातून होते. आमदाराच्या मताचे मूल्य खालील सूत्रानुसार काढले जाते: (राज्याची एकूण लोकसंख्या / राज्य विधानसभेत निवडून आलेल्या सदस्यांची एकूण संख्या) x 1/1000. या गणनेसाठी वापरली जाणारी लोकसंख्या 2001 च्या 84 व्या घटनादुरुस्ती कायद्यानुसार 1971 च्या जनगणनेवर आधारित आहे, जी 2026 नंतरच्या पहिल्या जनगणनेपर्यंत लागू राहील.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Value of the vote of MLA = Total Population of State / No. of elected members in the State Legislative Assembly x 1/1000",
        "statement_marathi": "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत निवडून गेलेले सदस्य x 1/1000",
        "is_correct": true,
        "reason_english": "This is the correct formula for calculating the value of an MLA's vote in the Presidential election, as per Article 55 of the Indian Constitution.",
        "reason_marathi": "भारतीय संविधानाच्या कलम 55 नुसार, राष्ट्रपती निवडणुकीत आमदाराच्या मताचे मूल्य काढण्यासाठी हे योग्य सूत्र आहे."
      },
      {
        "option_number": 2,
        "statement_english": "Value of the vote of MLA = Total Population of State / No. of elected members in the State Legislative Assembly and Council x 1/1000",
        "statement_marathi": "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत आणि विधान परिषदेत निवडून गेलेल्या सदस्यांची संख्या x 1/1000",
        "is_correct": false,
        "reason_english": "Members of the State Legislative Council (Vidhan Parishad) do not participate in the Presidential election. Only elected members of the Legislative Assembly (Vidhan Sabha) are part of the electoral college.",
        "reason_marathi": "राज्य विधान परिषदेचे (विधान परिषद) सदस्य राष्ट्रपती निवडणुकीत भाग घेत नाहीत. केवळ विधानसभेचे (विधानसभा) निवडून आलेले सदस्यच निवडणूक मंडळाचा भाग असतात."
      },
      {
        "option_number": 3,
        "statement_english": "Value of the vote of MLA = Total Population of State / Total members elected and nominated to the State Legislative Assembly and Council x 1/1000",
        "statement_marathi": "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभा व विधान परिषदेतील निवडून गेलेले व नामनिर्देशीत झालेल्या सदस्यांची संख्या x 1/1000",
        "is_correct": false,
        "reason_english": "Neither nominated members nor members of the Legislative Council participate in the Presidential election. Only elected MLAs are included.",
        "reason_marathi": "राष्ट्रपती निवडणुकीत नामनिर्देशित सदस्य किंवा विधान परिषदेचे सदस्य भाग घेत नाहीत. केवळ निवडून आलेले आमदारच समाविष्ट असतात."
      },
      {
        "option_number": 4,
        "statement_english": "Value of the vote of MLA = Total Population of State / Total number of elected members in the State Legislative Assembly x 2/1000",
        "statement_marathi": "एका आमदाराच्या मताचे मूल्य = राज्याची एकूण लोकसंख्या / राज्य विधान सभेत निवडून गेलेल्या सदस्यांची संख्या x 2/1000",
        "is_correct": false,
        "reason_english": "The multiplier in the formula is 1/1000, not 2/1000.",
        "reason_marathi": "सूत्रातील गुणक 1/1000 आहे, 2/1000 नाही."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) सचिवालय हे राज्य प्रशासनाचे प्रमुख केन्द्र (nerve centre) आहे. (b) सचिवालय हे राज्य शासनाच्या अनेक विभागांचे मिळून बनलेले असते. (c) सचिव हा राज्य सचिवालयाचा प्रमुख असतो. (d) सचिवालय हे रेषा अभिकरण (line agency) आहे. वरीलपैकी कोणती विधाने बरोबर आहेत ?",
    "question_english": "Consider the following statements : (a) Secretariat is the nerve centre of State Administration. (b) Secretariat consists of several departments of State Government. (c) Secretary is the head of the State Secretariat. (d) Secretariat is a line agency. Which of the above statements are correct ?",
    "options_marathi": [
      "(a), (b), (c)",
      "(c) आणि (d)",
      "(b) आणि (c)",
      "(a) आणि (b)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(c) and (d)",
      "(b) and (c)",
      "(a) and (b)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Administration / Secretariat",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Misunderstanding",
    "explanation_english": "The State Secretariat serves as the nerve centre of state administration, responsible for policy formulation, coordination, and overall guidance. It comprises various departments, each headed by a Secretary, who is an administrative head. However, the overall administrative head of the entire State Secretariat is the Chief Secretary, not just 'a Secretary'. Furthermore, the Secretariat is a 'staff agency' that provides expert advice and support to the 'line agencies' (directorates, field offices) which are responsible for implementing policies. Therefore, statements (a) and (b) are correct, while (c) and (d) are incorrect.",
    "explanation_marathi": "राज्य सचिवालय हे राज्य प्रशासनाचे प्रमुख केंद्र म्हणून कार्य करते, जे धोरण निर्मिती, समन्वय आणि एकूण मार्गदर्शनासाठी जबाबदार असते. त्यात विविध विभाग असतात, प्रत्येक विभागाचा प्रमुख एक सचिव असतो, जो प्रशासकीय प्रमुख असतो. तथापि, संपूर्ण राज्य सचिवालयाचा एकूण प्रशासकीय प्रमुख मुख्य सचिव असतो, केवळ 'एक सचिव' नव्हे. याव्यतिरिक्त, सचिवालय हे एक 'कर्मचारी अभिकरण' (staff agency) आहे जे 'रेषा अभिकरणांना' (line agencies - संचालनालये, क्षेत्रीय कार्यालये) तज्ञ सल्ला आणि समर्थन पुरवते, जी धोरणे अंमलात आणण्यासाठी जबाबदार असतात. त्यामुळे, विधाने (a) आणि (b) बरोबर आहेत, तर (c) आणि (d) चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a) Secretariat is the nerve centre of State Administration.",
        "statement_marathi": "(a) सचिवालय हे राज्य प्रशासनाचे प्रमुख केन्द्र (nerve centre) आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Secretariat is the apex body for policy formulation and coordination in state administration.",
        "reason_marathi": "हे विधान बरोबर आहे. सचिवालय हे राज्य प्रशासनातील धोरण निर्मिती आणि समन्वयासाठी सर्वोच्च संस्था आहे."
      },
      {
        "option_number": 2,
        "statement_english": "(b) Secretariat consists of several departments of State Government.",
        "statement_marathi": "(b) सचिवालय हे राज्य शासनाच्या अनेक विभागांचे मिळून बनलेले असते.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Secretariat is organized into various departments, each dealing with a specific area of governance.",
        "reason_marathi": "हे विधान बरोबर आहे. सचिवालय विविध विभागांमध्ये संघटित केलेले असते, प्रत्येक विभाग शासनाच्या विशिष्ट क्षेत्राशी संबंधित असतो."
      },
      {
        "option_number": 3,
        "statement_english": "(c) Secretary is the head of the State Secretariat.",
        "statement_marathi": "(c) सचिव हा राज्य सचिवालयाचा प्रमुख असतो.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. While a Secretary heads a department within the Secretariat, the overall administrative head of the entire State Secretariat is the Chief Secretary.",
        "reason_marathi": "हे विधान असत्य आहे. जरी एक सचिव सचिवालयातील एका विभागाचा प्रमुख असला तरी, संपूर्ण राज्य सचिवालयाचा एकूण प्रशासकीय प्रमुख मुख्य सचिव असतो."
      },
      {
        "option_number": 4,
        "statement_english": "(d) Secretariat is a line agency.",
        "statement_marathi": "(d) सचिवालय हे रेषा अभिकरण (line agency) आहे.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Secretariat is a 'staff agency' providing policy advice and support, while 'line agencies' are responsible for policy implementation.",
        "reason_marathi": "हे विधान असत्य आहे. सचिवालय हे 'कर्मचारी अभिकरण' (staff agency) आहे जे धोरणात्मक सल्ला आणि समर्थन पुरवते, तर 'रेषा अभिकरणे' (line agencies) धोरणांच्या अंमलबजावणीसाठी जबाबदार असतात."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "गिलोटिनचे तत्व म्हणजे",
    "question_english": "Principle of Guillotine means",
    "options_marathi": [
      "एकूण रकमेमधून विशिष्ट रक्कम कपात करणे.",
      "एकूण रकमेमधून रु. 100 फक्त कपात करण्याची मागणी करणे.",
      "एकूण रकमेमधून फक्त रु. 1 कपात करण्याची मागणी करणे.",
      "कोणत्याही चर्चा किंवा छाननीशिवाय मागणीवर थेट मतदान घेणे."
    ],
    "options_english": [
      "A specific amount of sum is reduced.",
      "The amount of demand is reduced by Rs. 100 only.",
      "The amount of demand to be reduced to Re. 1.",
      "The demands are directly put to vote without any discussion or Scruitiny."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Parliamentary Procedures / Budget",
    "difficulty": "Easy",
    "trap_detected": "Distractor Options",
    "explanation_english": "In parliamentary procedure, 'Guillotine' is a mechanism used to expedite the passage of financial bills, particularly during the budget session. When the time allotted for the discussion of demands for grants expires, the Speaker puts all the remaining demands to vote, irrespective of whether they have been discussed or not. This ensures that the entire budget is passed within the stipulated time. The other options describe different types of 'cut motions' which are used to reduce the amount of a demand for grant.",
    "explanation_marathi": "संसदीय प्रक्रियेत, 'गिलोटिन' ही आर्थिक विधेयके, विशेषतः अर्थसंकल्पीय अधिवेशनादरम्यान, जलदगतीने मंजूर करण्यासाठी वापरली जाणारी एक यंत्रणा आहे. जेव्हा अनुदानांच्या मागण्यांवरील चर्चेसाठी वाटप केलेला वेळ संपतो, तेव्हा अध्यक्ष उर्वरित सर्व मागण्यांवर थेट मतदान घेतात, मग त्यावर चर्चा झाली असो वा नसो. यामुळे संपूर्ण अर्थसंकल्प निर्धारित वेळेत मंजूर होतो. इतर पर्याय 'कट मोशन्स'चे विविध प्रकार वर्णन करतात, जे अनुदानाच्या मागणीची रक्कम कमी करण्यासाठी वापरले जातात.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "A specific amount of sum is reduced.",
        "statement_marathi": "एकूण रकमेमधून विशिष्ट रक्कम कपात करणे.",
        "is_correct": false,
        "reason_english": "This describes an 'Economy Cut' motion, where a specific amount is reduced from the demand for grant.",
        "reason_marathi": "हे 'अर्थव्यवस्था कपात' (Economy Cut) प्रस्तावाचे वर्णन करते, जिथे अनुदानाच्या मागणीतून विशिष्ट रक्कम कमी केली जाते."
      },
      {
        "option_number": 2,
        "statement_english": "The amount of demand is reduced by Rs. 100 only.",
        "statement_marathi": "एकूण रकमेमधून रु. 100 फक्त कपात करण्याची मागणी करणे.",
        "is_correct": false,
        "reason_english": "This describes a 'Token Cut' motion, which is moved to ventilate a specific grievance.",
        "reason_marathi": "हे 'टोकन कपात' (Token Cut) प्रस्तावाचे वर्णन करते, जो विशिष्ट तक्रार मांडण्यासाठी हलवला जातो."
      },
      {
        "option_number": 3,
        "statement_english": "The amount of demand to be reduced to Re. 1.",
        "statement_marathi": "एकूण रकमेमधून फक्त रु. 1 कपात करण्याची मागणी करणे.",
        "is_correct": false,
        "reason_english": "This describes a 'Disapproval of Policy Cut' motion, indicating disapproval of the policy underlying the demand.",
        "reason_marathi": "हे 'धोरण नामंजूर कपात' (Disapproval of Policy Cut) प्रस्तावाचे वर्णन करते, जे मागणीच्या मूळ धोरणास नामंजूर दर्शवते."
      },
      {
        "option_number": 4,
        "statement_english": "The demands are directly put to vote without any discussion or Scrutiny.",
        "statement_marathi": "कोणत्याही चर्चा किंवा छाननीशिवाय मागणीवर थेट मतदान घेणे.",
        "is_correct": true,
        "reason_english": "This is the correct definition of the 'Guillotine' principle in parliamentary proceedings, where un-discussed demands for grants are put to vote to meet deadlines.",
        "reason_marathi": "संसदीय कामकाजात 'गिलोटिन' तत्त्वाची ही योग्य व्याख्या आहे, जिथे वेळेची मर्यादा पाळण्यासाठी चर्चा न झालेल्या अनुदानाच्या मागण्यांवर थेट मतदान घेतले जाते."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "खालीलपैकी कोणता पर्याय भारताच्या महान्यायवादी संदर्भात चुकीचे आहे ?",
    "question_english": "Which of the following option is not correct about India's Attorney General ?",
    "options_marathi": [
      "राष्ट्रपती सरकारच्या सल्ल्याने महान्यायवादीची नियुक्ती करतात.",
      "तो/ती सर्वोच्च न्यायालयाच्या न्यायाधीश पदी नियुक्त होण्यास पात्र असणारी व्यक्ति असावी.",
      "त्याने कोणत्याही उच्च न्यायालयात दहा वर्षे न्यायाधीशपदी काम केले असले पाहीजे.",
      "वरीलपैकी एकही नाही."
    ],
    "options_english": [
      "Attorney General is appointed by the President on the advice of Government.",
      "He/She must be a person who is qualified to be appointed as a judge of the Supreme Court.",
      "He/She should have served as a judge in any High Court for ten years.",
      "None of the above."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Attorney General of India",
    "difficulty": "Medium",
    "trap_detected": "Partial Truth / Misleading Qualification",
    "explanation_english": "The Attorney General of India is appointed by the President (Option 1 is correct). To be appointed as Attorney General, a person must be qualified to be appointed as a judge of the Supreme Court (Option 2 is correct). The qualifications for a Supreme Court judge include: being a citizen of India AND (a) a judge of a High Court for five years; OR (b) an advocate of a High Court for ten years; OR (c) a distinguished jurist in the opinion of the President. Statement (3) says 'He/She should have served as a judge in any High Court for ten years'. This is incorrect because the requirement for a High Court judge is five years, not ten years, and it's only one of the alternative qualifications, not a mandatory standalone one. Therefore, statement (3) is not correct.",
    "explanation_marathi": "भारताच्या महान्यायवादीची नियुक्ती राष्ट्रपती करतात (पर्याय 1 बरोबर आहे). महान्यायवादी म्हणून नियुक्त होण्यासाठी, व्यक्ती सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून नियुक्त होण्यास पात्र असावी (पर्याय 2 बरोबर आहे). सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या पात्रतेमध्ये हे समाविष्ट आहे: भारताचा नागरिक असणे आणि (अ) उच्च न्यायालयाचा पाच वर्षांसाठी न्यायाधीश असणे; किंवा (ब) उच्च न्यायालयाचा दहा वर्षांसाठी वकील असणे; किंवा (क) राष्ट्रपतींच्या मते एक प्रतिष्ठित कायदेतज्ञ असणे. विधान (3) म्हणते की 'त्याने कोणत्याही उच्च न्यायालयात दहा वर्षे न्यायाधीशपदी काम केले असले पाहिजे'. हे चुकीचे आहे कारण उच्च न्यायालयाच्या न्यायाधीशासाठी आवश्यक कालावधी पाच वर्षे आहे, दहा वर्षे नाही, आणि ही केवळ पर्यायी पात्रतेपैकी एक आहे, अनिवार्य स्वतंत्र पात्रता नाही. त्यामुळे, विधान (3) बरोबर नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Attorney General is appointed by the President on the advice of Government.",
        "statement_marathi": "राष्ट्रपती सरकारच्या सल्ल्याने महान्यायवादीची नियुक्ती करतात.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Attorney General is appointed by the President of India, usually on the advice of the Union Cabinet.",
        "reason_marathi": "हे विधान बरोबर आहे. महान्यायवादीची नियुक्ती भारताचे राष्ट्रपती, सहसा केंद्रीय मंत्रिमंडळाच्या सल्ल्यानुसार करतात."
      },
      {
        "option_number": 2,
        "statement_english": "He/She must be a person who is qualified to be appointed as a judge of the Supreme Court.",
        "statement_marathi": "तो/ती सर्वोच्च न्यायालयाच्या न्यायाधीश पदी नियुक्त होण्यास पात्र असणारी व्यक्ति असावी.",
        "is_correct": true,
        "reason_english": "This statement is correct. Article 76(1) specifies that the person appointed as Attorney General must be qualified to be a judge of the Supreme Court.",
        "reason_marathi": "हे विधान बरोबर आहे. कलम 76(1) नुसार, महान्यायवादी म्हणून नियुक्त होणारी व्यक्ती सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून नियुक्त होण्यास पात्र असावी."
      },
      {
        "option_number": 3,
        "statement_english": "He/She should have served as a judge in any High Court for ten years.",
        "statement_marathi": "त्याने कोणत्याही उच्च न्यायालयात दहा वर्षे न्यायाधीशपदी काम केले असले पाहीजे.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. One of the qualifications for a Supreme Court judge (and thus for AG) is to have been a judge of a High Court for *five* years, not ten years. Alternatively, one could be an advocate of a High Court for ten years or a distinguished jurist.",
        "reason_marathi": "हे विधान असत्य आहे. सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी (आणि त्यामुळे महान्यायवादीसाठी) एक पात्रता म्हणजे उच्च न्यायालयाचा *पाच* वर्षांसाठी न्यायाधीश असणे, दहा वर्षांसाठी नाही. वैकल्पिकरित्या, व्यक्ती दहा वर्षांसाठी उच्च न्यायालयाचा वकील किंवा राष्ट्रपतींच्या मते एक प्रतिष्ठित कायदेतज्ञ असू शकते."
      },
      {
        "option_number": 4,
        "statement_english": "None of the above.",
        "statement_marathi": "वरीलपैकी एकही नाही.",
        "is_correct": false,
        "reason_english": "Since statement (3) is incorrect, this option is not the correct answer to 'which is not correct'.",
        "reason_marathi": "विधान (3) असत्य असल्यामुळे, 'कोणते बरोबर नाही' या प्रश्नाचे उत्तर हा पर्याय नाही."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "महाराष्ट्राच्या 'लोक लेखा समिती' बाबत खालील विधाने विचारात घ्या : (a) ती 25 पेक्षा अधिक सदस्यांची नसते. (b) 20 पेक्षा अधिक नाही इतके सदस्य अध्यक्षाद्वारे नामनिर्देशित केले जातात. (c) 5 पेक्षा अधिक नाही इतके सदस्य विधान परिषदेच्या सभापतीद्वारे नामनिर्देशित केले जातात. (d) लोक लेखा समितीचे राज्य शासनाचे वित्तीय लेख्यांची छाननी करणे हे कार्य असते.",
    "question_english": "Consider the following statements about the 'Public Accounts Committee' of Maharashtra : (a) It consists of not more than 25 members. (b) Not more than 20 members are nominated by the speaker. (c) Not more than 5 members are nominated by the chairman of Legislative Council. (d) It is the duty of the PAC to scrutinize the Finance Accounts of the State Government. Which of the above statements are correct?",
    "options_marathi": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (b), (c), (d)",
      "फक्त (a) आणि (d)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (b), (c), (d)",
      "(a) and (d) only"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Legislature / Financial Committees",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Public Accounts Committee (PAC) in states like Maharashtra is a financial committee of the state legislature. It typically consists of members from both the Legislative Assembly and the Legislative Council. For Maharashtra, the PAC has a maximum of 25 members: not more than 20 from the Assembly (nominated by the Speaker) and not more than 5 from the Council (nominated by the Chairman). Its primary function is to scrutinize the appropriation accounts and finance accounts of the state government, along with the report of the Comptroller and Auditor General of India. All the given statements (a), (b), (c), and (d) are correct regarding the Public Accounts Committee of Maharashtra.",
    "explanation_marathi": "महाराष्ट्रासारख्या राज्यांमधील लोक लेखा समिती (PAC) ही राज्य विधानमंडळाची एक वित्तीय समिती आहे. यात सामान्यतः विधानसभा आणि विधान परिषद या दोन्ही सभागृहांचे सदस्य असतात. महाराष्ट्रासाठी, लोक लेखा समितीत जास्तीत जास्त 25 सदस्य असतात: विधानसभेतून 20 पेक्षा जास्त नाहीत (अध्यक्षांद्वारे नामनिर्देशित) आणि विधान परिषदेतून 5 पेक्षा जास्त नाहीत (सभापतींद्वारे नामनिर्देशित). तिचे मुख्य कार्य म्हणजे राज्य सरकारच्या विनियोग लेखा आणि वित्तीय लेखांची तसेच भारताच्या नियंत्रक आणि महालेखापरीक्षकांच्या अहवालाची छाननी करणे. दिलेली सर्व विधाने (a), (b), (c) आणि (d) महाराष्ट्राच्या लोक लेखा समितीबद्दल बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a) It consists of not more than 25 members.",
        "statement_marathi": "(a) ती 25 पेक्षा अधिक सदस्यांची नसते.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Public Accounts Committee in Maharashtra consists of a maximum of 25 members.",
        "reason_marathi": "हे विधान बरोबर आहे. महाराष्ट्रातील लोक लेखा समितीत जास्तीत जास्त 25 सदस्य असतात."
      },
      {
        "option_number": 2,
        "statement_english": "(b) Not more than 20 members are nominated by the speaker.",
        "statement_marathi": "(b) 20 पेक्षा अधिक नाही इतके सदस्य अध्यक्षाद्वारे नामनिर्देशित केले जातात.",
        "is_correct": true,
        "reason_english": "This statement is correct. Up to 20 members are nominated from the Legislative Assembly by the Speaker.",
        "reason_marathi": "हे विधान बरोबर आहे. विधानसभेतून 20 पर्यंत सदस्य अध्यक्षांद्वारे नामनिर्देशित केले जातात."
      },
      {
        "option_number": 3,
        "statement_english": "(c) Not more than 5 members are nominated by the chairman of Legislative Council.",
        "statement_marathi": "(c) 5 पेक्षा अधिक नाही इतके सदस्य विधान परिषदेच्या सभापतीद्वारे नामनिर्देशित केले जातात.",
        "is_correct": true,
        "reason_english": "This statement is correct. Up to 5 members are nominated from the Legislative Council by its Chairman.",
        "reason_marathi": "हे विधान बरोबर आहे. विधान परिषदेतून 5 पर्यंत सदस्य तिच्या सभापतींद्वारे नामनिर्देशित केले जातात."
      },
      {
        "option_number": 4,
        "statement_english": "(d) It is the duty of the PAC to scrutinize the Finance Accounts of the State Government.",
        "statement_marathi": "(d) लोक लेखा समितीचे राज्य शासनाचे वित्तीय लेख्यांची छाननी करणे हे कार्य असते.",
        "is_correct": true,
        "reason_english": "This statement is correct. Scrutiny of finance accounts and appropriation accounts is a primary function of the Public Accounts Committee.",
        "reason_marathi": "हे विधान बरोबर आहे. वित्तीय लेखा आणि विनियोग लेखांची छाननी करणे हे लोक लेखा समितीचे प्राथमिक कार्य आहे."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "योग्य कथने ओळखा : (राष्ट्रपतीचा नकाराधिकार) (a) राष्ट्रपती डॉ. राजेंद्र प्रसाद यांनी पेप्सू (PEPSU) विनियोग विधेयक 1954 मध्ये मान्यतेसाठी रोखून ठेवले. (b) 1991 मध्ये राष्ट्रपती आर. वेंकटरामण यांनी संसद सदस्यांचे वेतन भत्ते व पेन्शन (दुरुस्ती) विधेयक मान्यतेसाठी रोखून ठेवले. (c) 1986 मध्ये राष्ट्रपती झैल सिंग यांनी भारतीय पोस्ट ऑफिस (दुरुस्ती) विधेयका संदर्भात पॉकेट व्हेटोचा वापर केला.",
    "question_english": "Select the correct statements. (Veto Powers of President) (a) In 1954, President Dr. Rajendra Prasad withheld his assent to PEPSU Appropriation Bill. (b) In 1991, President R. Venkatraman withheld his assent to the salary Allowances and Pension of the member of Parliament (Amendment) Bill. (c) In 1986, President Zail Singh exercised the Pocket veto with respect to the Indian Post Office (Amendment) Bill.",
    "options_marathi": [
      "फक्त (a), (b)",
      "फक्त (a), (c)",
      "फक्त (b), (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "Only (a), (b)",
      "Only (a), (c)",
      "Only (b), (c)",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "President's Veto Powers",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The President of India possesses three types of veto powers: Absolute Veto, Suspensive Veto, and Pocket Veto. Statement (a) refers to President Dr. Rajendra Prasad's use of Absolute Veto on the PEPSU Appropriation Bill in 1954, which is correct. Statement (b) correctly identifies President R. Venkatraman's use of Absolute Veto in 1991 on the Salary, Allowances and Pension of Members of Parliament (Amendment) Bill. Statement (c) accurately mentions President Zail Singh's famous use of the Pocket Veto in 1986 on the Indian Post Office (Amendment) Bill. All three statements are historically accurate examples of the President's veto powers.",
    "explanation_marathi": "भारताच्या राष्ट्रपतींना तीन प्रकारचे नकाराधिकार आहेत: निरंकुश नकाराधिकार (Absolute Veto), निलंबनात्मक नकाराधिकार (Suspensive Veto) आणि पॉकेट नकाराधिकार (Pocket Veto). विधान (a) मध्ये 1954 मध्ये राष्ट्रपती डॉ. राजेंद्र प्रसाद यांनी पेप्सू विनियोग विधेयकावर निरंकुश नकाराधिकार वापरल्याचा उल्लेख आहे, जो बरोबर आहे. विधान (b) मध्ये 1991 मध्ये राष्ट्रपती आर. वेंकटरामण यांनी संसद सदस्यांचे वेतन, भत्ते आणि पेन्शन (दुरुस्ती) विधेयकावर निरंकुश नकाराधिकार वापरल्याचे योग्यरित्या नमूद केले आहे. विधान (c) मध्ये 1986 मध्ये राष्ट्रपती झैल सिंग यांनी भारतीय पोस्ट ऑफिस (दुरुस्ती) विधेयकासंदर्भात पॉकेट नकाराधिकार वापरल्याचे अचूकपणे सांगितले आहे. ही तिन्ही विधाने राष्ट्रपतींच्या नकाराधिकारांची ऐतिहासिकदृष्ट्या अचूक उदाहरणे आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a) In 1954, President Dr. Rajendra Prasad withheld his assent to PEPSU Appropriation Bill.",
        "statement_marathi": "(a) राष्ट्रपती डॉ. राजेंद्र प्रसाद यांनी पेप्सू (PEPSU) विनियोग विधेयक 1954 मध्ये मान्यतेसाठी रोखून ठेवले.",
        "is_correct": true,
        "reason_english": "This is a correct historical instance of the President exercising an Absolute Veto.",
        "reason_marathi": "राष्ट्रपतींनी निरंकुश नकाराधिकार वापरल्याचे हे एक योग्य ऐतिहासिक उदाहरण आहे."
      },
      {
        "option_number": 2,
        "statement_english": "(b) In 1991, President R. Venkatraman withheld his assent to the salary Allowances and Pension of the member of Parliament (Amendment) Bill.",
        "statement_marathi": "(b) 1991 मध्ये राष्ट्रपती आर. वेंकटरामण यांनी संसद सदस्यांचे वेतन भत्ते व पेन्शन (दुरुस्ती) विधेयक मान्यतेसाठी रोखून ठेवले.",
        "is_correct": true,
        "reason_english": "This is also a correct historical instance of the President exercising an Absolute Veto.",
        "reason_marathi": "राष्ट्रपतींनी निरंकुश नकाराधिकार वापरल्याचे हे देखील एक योग्य ऐतिहासिक उदाहरण आहे."
      },
      {
        "option_number": 3,
        "statement_english": "(c) In 1986, President Zail Singh exercised the Pocket veto with respect to the Indian Post Office (Amendment) Bill.",
        "statement_marathi": "(c) 1986 मध्ये राष्ट्रपती झैल सिंग यांनी भारतीय पोस्ट ऑफिस (दुरुस्ती) विधेयका संदर्भात पॉकेट व्हेटोचा वापर केला.",
        "is_correct": true,
        "reason_english": "This is a famous and correct example of the President exercising a Pocket Veto.",
        "reason_marathi": "राष्ट्रपतींनी पॉकेट नकाराधिकार वापरल्याचे हे एक प्रसिद्ध आणि योग्य उदाहरण आहे."
      },
      {
        "option_number": 4,
        "statement_english": "All of the above",
        "statement_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "Since all statements (a), (b), and (c) are correct, this option correctly identifies that all are true.",
        "reason_marathi": "विधाने (a), (b) आणि (c) सर्व बरोबर असल्यामुळे, हा पर्याय योग्यरित्या दर्शवतो की सर्व सत्य आहेत."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "खालीलपैकी कोणते नगरपालाच्या बाबतीत सत्य नाही ?",
    "question_english": "Which of the following is not true about Sheriff ?",
    "options_marathi": [
      "मुंबईच्या नगरपाल (शेरिफ) कार्यालयाची स्थापना लेटर्स पेटंट अॅक्ट 1823 अनुसार झालेली आहे.",
      "या पदाचा कार्यकाल एक वर्षा करीता असतो.",
      "मुंबईचे नगरपाल हे वैधानिक दर्जा नसलेले परंतु प्रतिष्ठा असलेले पद आहे.",
      "भारतातील फक्त मुंबई याच शहरात नगरपाल हे पद आहे."
    ],
    "options_english": [
      "The office of sheriff of Mumbai was formed by Letters Patent Act of 1823.",
      "The term of office is one year.",
      "The sheriff of Mumbai is a post with no statutory status but with prestige.",
      "Only Mumbai in India have the post of sheriff."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Local Government / Historical Posts",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word",
    "explanation_english": "The office of Sheriff is a largely ceremonial post with historical roots in British India. While Mumbai indeed has a Sheriff, and the office's functions were defined by various Letters Patent, including those of 1823, and the term is one year, and it holds prestige without statutory status, statement (4) is incorrect. Kolkata (formerly Calcutta) also has a Sheriff. Chennai (formerly Madras) also had a Sheriff until the office was abolished in 1998. Therefore, it is not true that only Mumbai has the post of Sheriff in India.",
    "explanation_marathi": "शेरिफचे पद हे ब्रिटिश भारतातील ऐतिहासिक मुळे असलेले एक मोठ्या प्रमाणात औपचारिक पद आहे. मुंबईमध्ये शेरिफचे पद आहे, आणि या कार्यालयाची कार्ये 1823 च्या लेटर्स पेटंटसह विविध लेटर्स पेटंटद्वारे परिभाषित केली गेली होती, आणि त्याचा कार्यकाळ एक वर्षाचा असतो, तसेच त्याला वैधानिक दर्जा नसतानाही प्रतिष्ठा आहे, परंतु विधान (4) चुकीचे आहे. कोलकाता (पूर्वीचे कलकत्ता) येथेही शेरिफचे पद आहे. चेन्नई (पूर्वीचे मद्रास) येथेही शेरिफचे पद होते, परंतु 1998 मध्ये ते रद्द करण्यात आले. त्यामुळे, भारतात केवळ मुंबईमध्येच शेरिफचे पद आहे हे सत्य नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "The office of sheriff of Mumbai was formed by Letters Patent Act of 1823.",
        "statement_marathi": "मुंबईच्या नगरपाल (शेरिफ) कार्यालयाची स्थापना लेटर्स पेटंट अॅक्ट 1823 अनुसार झालेली आहे.",
        "is_correct": true,
        "reason_english": "The office of Sheriff in Mumbai has historical origins and its functions were indeed defined and continued under various Letters Patent, including those around 1823.",
        "reason_marathi": "मुंबईतील शेरिफ कार्यालयाची ऐतिहासिक मुळे आहेत आणि त्याची कार्ये 1823 च्या आसपासच्या लेटर्स पेटंटसह विविध लेटर्स पेटंट अंतर्गत परिभाषित आणि चालू ठेवण्यात आली होती."
      },
      {
        "option_number": 2,
        "statement_english": "The term of office is one year.",
        "statement_marathi": "या पदाचा कार्यकाल एक वर्षा करीता असतो.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Sheriff is appointed for a term of one year.",
        "reason_marathi": "हे विधान बरोबर आहे. शेरिफची नियुक्ती एका वर्षाच्या कालावधीसाठी केली जाते."
      },
      {
        "option_number": 3,
        "statement_english": "The sheriff of Mumbai is a post with no statutory status but with prestige.",
        "statement_marathi": "मुंबईचे नगरपाल हे वैधानिक दर्जा नसलेले परंतु प्रतिष्ठा असलेले पद आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. The post of Sheriff is largely ceremonial and carries social prestige rather than statutory powers.",
        "reason_marathi": "हे विधान बरोबर आहे. शेरिफचे पद मोठ्या प्रमाणात औपचारिक आहे आणि त्याला वैधानिक अधिकारांऐवजी सामाजिक प्रतिष्ठा आहे."
      },
      {
        "option_number": 4,
        "statement_english": "Only Mumbai in India have the post of sheriff.",
        "statement_marathi": "भारतातील फक्त मुंबई याच शहरात नगरपाल हे पद आहे.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. Kolkata also has the post of Sheriff. Chennai also had this post until it was abolished in 1998.",
        "reason_marathi": "हे विधान असत्य आहे. कोलकाता येथेही शेरिफचे पद आहे. चेन्नईमध्येही हे पद होते, परंतु 1998 मध्ये ते रद्द करण्यात आले."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "महाराष्ट्र व गुजरात या दोन भाषिक राज्यांच्या निर्मितीच्या वाटेत प्रमुख वादाचा मुद्दा कोणता होता ?",
    "question_english": "What was the bone of contention in the way of creation of the two linguistic states of Maharashtra and Gujarat ?",
    "options_marathi": [
      "मुंबई हे स्वतंत्र केंद्रशासित प्रदेश म्हणून स्थापणे",
      "विदर्भ",
      "मराठवाडा",
      "कच्छ"
    ],
    "options_english": [
      "Bombay city to be a separate, centrally administered territory",
      "Vidarbha",
      "Marathwada",
      "Kutch"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "States Reorganisation / Samyukta Maharashtra Movement",
    "difficulty": "Easy",
    "trap_detected": "Distractor Options",
    "explanation_english": "The creation of the linguistic states of Maharashtra and Gujarat was a result of the States Reorganisation Act, 1956, which initially formed a bilingual Bombay State. However, strong movements like the Samyukta Maharashtra Movement and Mahagujarat Movement demanded separate states. The primary and most contentious issue was the status of Bombay (Mumbai) city. Marathi speakers insisted on Bombay being the capital of Maharashtra, while Gujarati speakers also claimed it, and there was a proposal to make it a separate centrally administered territory. This dispute was finally resolved with the Bombay Reorganisation Act, 1960, which established Maharashtra with Bombay as its capital and Gujarat as a separate state.",
    "explanation_marathi": "महाराष्ट्र आणि गुजरात या भाषिक राज्यांची निर्मिती 1956 च्या राज्य पुनर्रचना कायद्याचा परिणाम होती, ज्याने सुरुवातीला द्विभाषिक मुंबई राज्याची स्थापना केली. तथापि, संयुक्त महाराष्ट्र चळवळ आणि महागुजरात चळवळ यांसारख्या मजबूत चळवळींनी स्वतंत्र राज्यांची मागणी केली. मुंबई शहराचा दर्जा हा प्राथमिक आणि सर्वात वादग्रस्त मुद्दा होता. मराठी भाषिक मुंबई महाराष्ट्राची राजधानी असावी यावर ठाम होते, तर गुजराती भाषिकांनीही त्यावर दावा केला होता आणि ते एक स्वतंत्र केंद्रशासित प्रदेश बनवण्याचा प्रस्ताव होता. हा वाद अखेरीस 1960 च्या मुंबई पुनर्रचना कायद्याने सोडवला गेला, ज्याने मुंबईला राजधानी म्हणून महाराष्ट्राची आणि गुजरातला स्वतंत्र राज्याची स्थापना केली.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Bombay city to be a separate, centrally administered territory",
        "statement_marathi": "मुंबई हे स्वतंत्र केंद्रशासित प्रदेश म्हणून स्थापणे",
        "is_correct": true,
        "reason_english": "This was the main bone of contention. Many, including some central leaders, proposed making Bombay a separate Union Territory, which was strongly opposed by the Samyukta Maharashtra Movement.",
        "reason_marathi": "हा मुख्य वादाचा मुद्दा होता. अनेक, ज्यात काही केंद्रीय नेत्यांचाही समावेश होता, मुंबईला स्वतंत्र केंद्रशासित प्रदेश बनवण्याचा प्रस्ताव दिला होता, ज्याला संयुक्त महाराष्ट्र चळवळीने तीव्र विरोध केला होता."
      },
      {
        "option_number": 2,
        "statement_english": "Vidarbha",
        "statement_marathi": "विदर्भ",
        "is_correct": false,
        "reason_english": "While the issue of Vidarbha's separate statehood was present, it was not the primary bone of contention between the formation of Maharashtra and Gujarat.",
        "reason_marathi": "विदर्भाच्या स्वतंत्र राज्याच्या निर्मितीचा मुद्दा उपस्थित असला तरी, महाराष्ट्र आणि गुजरातच्या निर्मितीतील हा मुख्य वादाचा मुद्दा नव्हता."
      },
      {
        "option_number": 3,
        "statement_english": "Marathwada",
        "statement_marathi": "मराठवाडा",
        "is_correct": false,
        "reason_english": "Marathwada's integration into Maharashtra was largely accepted and not a major point of dispute between Maharashtra and Gujarat.",
        "reason_marathi": "मराठवाड्याचे महाराष्ट्रात एकीकरण मोठ्या प्रमाणात स्वीकारले गेले होते आणि महाराष्ट्र व गुजरात यांच्यातील वादाचा तो प्रमुख मुद्दा नव्हता."
      },
      {
        "option_number": 4,
        "statement_english": "Kutch",
        "statement_marathi": "कच्छ",
        "is_correct": false,
        "reason_english": "Kutch was part of the Gujarati-speaking region and its inclusion in Gujarat was not a point of contention between the two states.",
        "reason_marathi": "कच्छ हा गुजराती भाषिक प्रदेशाचा भाग होता आणि त्याचा गुजरातमध्ये समावेश हा दोन्ही राज्यांमधील वादाचा मुद्दा नव्हता."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "एस्.आर्. बोम्मई विरुद्ध भारत सरकार या खटल्यात सर्वोच्च न्यायालयाने पुढीलपैकी कोणती भूमिका घेतली ?",
    "question_english": "What did the Supreme Court hold in the S.R. Bommai Vs. Union of India case ?",
    "options_marathi": [
      "राज्यसरकारचे बहुमत विधान सभेत तपासले गेले पाहिजे.",
      "अनुच्छेद 356 लागू करण्यापूर्वी मुख्यमंत्र्यांचा सल्ला घेण्यात आला पाहिजे.",
      "राज्यपालांना नकाराधिकार दिला गेला पाहिजे.",
      "राज्यांना त्यांनी गोळा केलेल्या करातून मोठा वाटा दिला गेला पाहिजे."
    ],
    "options_english": [
      "Majority of the State Government should be tested and proved on the floor of the House.",
      "The Chief Minister should be consulted before imposing Article 356.",
      "Veto power should be given to the Governor.",
      "States should get a bigger share of the taxes collected by them."
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Centre-State Relations, President's Rule (Article 356), Supreme Court Judgments",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The S.R. Bommai v. Union of India case (1994) is a landmark judgment of the Supreme Court of India that significantly curtailed the arbitrary use of Article 356 (President's Rule) by the central government. The Court held that the power of the President to dismiss a state government is not absolute and is subject to judicial review. Crucially, it ruled that the majority of the state government must be tested on the floor of the Legislative Assembly and not on the subjective satisfaction of the Governor or the President. This judgment established important safeguards for federalism and democratic principles.",
    "explanation_marathi": "एस.आर. बोम्मई विरुद्ध भारत सरकार (1994) हा सर्वोच्च न्यायालयाचा एक महत्त्वाचा निर्णय आहे, ज्याने केंद्र सरकारद्वारे अनुच्छेद 356 (राष्ट्रपती राजवट) च्या मनमानी वापराला मोठ्या प्रमाणात आळा घातला. न्यायालयाने असे ठरवले की राज्य सरकार बरखास्त करण्याचा राष्ट्रपतींचा अधिकार निरंकुश नाही आणि तो न्यायालयीन पुनरावलोकनाच्या अधीन आहे. महत्त्वाचे म्हणजे, राज्याच्या विधानसभेतच राज्य सरकारचे बहुमत सिद्ध केले पाहिजे, राज्यपालांच्या किंवा राष्ट्रपतींच्या व्यक्तिनिष्ठ समाधानावर नाही, असे न्यायालयाने स्पष्ट केले. या निर्णयाने संघराज्यीय आणि लोकशाही तत्त्वांचे महत्त्वाचे संरक्षण केले.",
    "options_breakdown": [
      {
        "option_english": "Majority of the State Government should be tested and proved on the floor of the House.",
        "option_marathi": "राज्यसरकारचे बहुमत विधान सभेत तपासले गेले पाहिजे.",
        "analysis_english": "This was the core holding of the S.R. Bommai case, emphasizing that the majority of a government should be proven on the floor of the House.",
        "analysis_marathi": "एस.आर. बोम्मई प्रकरणातील हा मुख्य निर्णय होता, ज्यामध्ये सरकारचे बहुमत विधानसभेच्या पटलावर सिद्ध केले पाहिजे यावर जोर देण्यात आला होता.",
        "is_correct": true
      },
      {
        "option_english": "The Chief Minister should be consulted before imposing Article 356.",
        "option_marathi": "अनुच्छेद 356 लागू करण्यापूर्वी मुख्यमंत्र्यांचा सल्ला घेण्यात आला पाहिजे.",
        "analysis_english": "While the case dealt with Article 356, it did not mandate consulting the Chief Minister before imposing it. The focus was on judicial review and floor test.",
        "analysis_marathi": "हे प्रकरण अनुच्छेद 356 शी संबंधित असले तरी, ते लागू करण्यापूर्वी मुख्यमंत्र्यांचा सल्ला घेणे बंधनकारक नव्हते. न्यायालयीन पुनरावलोकन आणि बहुमत चाचणीवर लक्ष केंद्रित केले होते.",
        "is_correct": false
      },
      {
        "option_english": "Veto power should be given to the Governor.",
        "option_marathi": "राज्यपालांना नकाराधिकार दिला गेला पाहिजे.",
        "analysis_english": "The case did not discuss or grant veto power to the Governor.",
        "analysis_marathi": "या प्रकरणात राज्यपालांना नकाराधिकार देण्याबद्दल कोणतीही चर्चा झाली नाही किंवा तो दिला गेला नाही.",
        "is_correct": false
      },
      {
        "option_english": "States should get a bigger share of the taxes collected by them.",
        "option_marathi": "राज्यांना त्यांनी गोळा केलेल्या करातून मोठा वाटा दिला गेला पाहिजे.",
        "analysis_english": "This option relates to fiscal federalism and tax devolution, which was not the subject matter of the S.R. Bommai case.",
        "analysis_marathi": "हा पर्याय वित्तीय संघराज्य आणि कर वाटणीशी संबंधित आहे, जो एस.आर. बोम्मई प्रकरणाचा विषय नव्हता.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "खालीलपैकी कोणते बरोबर जुळलेले नाही ?",
    "question_english": "Which of the following is not matched correctly?",
    "options_marathi": [
      "कलम 64 - उपराष्ट्रपती हे राज्यसभेचे पदसिद्ध अध्यक्ष असतील.",
      "कलम 66 - उपराष्ट्रपतीपदाची निवडणूक.",
      "कलम 69 - उपराष्ट्रपतीं द्वारे घेण्यात येणारी शपथ.",
      "कलम 61 - उपराष्ट्रपतींचा कार्यकाल."
    ],
    "options_english": [
      "Article 64-Vice-President shall be the Ex-Officio Chairman of the Council of States.",
      "Article 66-Vice-President's election.",
      "Article 69-Swearing by the Vice-President.",
      "Article 61-Tenure of Vice-President."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Vice-President, Constitutional Articles",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of specific articles related to the Vice-President of India. Article 64 states that the Vice-President shall be the ex-officio Chairman of the Council of States (Rajya Sabha). Article 66 deals with the election of the Vice-President. Article 69 prescribes the oath or affirmation to be taken by the Vice-President. However, Article 61 pertains to the procedure for the impeachment of the President, not the tenure of the Vice-President. The tenure of the Vice-President is mentioned in Article 67. Therefore, the pair 'Article 61 - Tenure of Vice-President' is incorrectly matched.",
    "explanation_marathi": "हा प्रश्न भारताच्या उपराष्ट्रपतींशी संबंधित विशिष्ट अनुच्छेदांच्या ज्ञानाची चाचणी घेतो. अनुच्छेद 64 नुसार उपराष्ट्रपती हे राज्यसभेचे पदसिद्ध अध्यक्ष असतील. अनुच्छेद 66 उपराष्ट्रपतींच्या निवडणुकीशी संबंधित आहे. अनुच्छेद 69 मध्ये उपराष्ट्रपतींनी घ्यावयाच्या शपथेची किंवा प्रतिज्ञेची तरतूद आहे. तथापि, अनुच्छेद 61 राष्ट्रपतींच्या महाभियोगाच्या प्रक्रियेबद्दल आहे, उपराष्ट्रपतींच्या कार्यकाळाबद्दल नाही. उपराष्ट्रपतींचा कार्यकाल अनुच्छेद 67 मध्ये नमूद केला आहे. त्यामुळे, 'अनुच्छेद 61 - उपराष्ट्रपतींचा कार्यकाल' ही जोडी चुकीची जुळलेली आहे.",
    "options_breakdown": [
      {
        "option_english": "Article 64-Vice-President shall be the Ex-Officio Chairman of the Council of States.",
        "option_marathi": "कलम 64 - उपराष्ट्रपती हे राज्यसभेचे पदसिद्ध अध्यक्ष असतील.",
        "analysis_english": "This is correctly matched. Article 64 states that the Vice-President shall be the ex-officio Chairman of the Rajya Sabha.",
        "analysis_marathi": "हे योग्यरित्या जुळले आहे. अनुच्छेद 64 नुसार उपराष्ट्रपती हे राज्यसभेचे पदसिद्ध अध्यक्ष असतील.",
        "is_correct": false
      },
      {
        "option_english": "Article 66-Vice-President's election.",
        "option_marathi": "कलम 66 - उपराष्ट्रपतीपदाची निवडणूक.",
        "analysis_english": "This is correctly matched. Article 66 deals with the election of the Vice-President.",
        "analysis_marathi": "हे योग्यरित्या जुळले आहे. अनुच्छेद 66 उपराष्ट्रपतींच्या निवडणुकीशी संबंधित आहे.",
        "is_correct": false
      },
      {
        "option_english": "Article 69-Swearing by the Vice-President.",
        "option_marathi": "कलम 69 - उपराष्ट्रपतीं द्वारे घेण्यात येणारी शपथ.",
        "analysis_english": "This is correctly matched. Article 69 specifies the oath or affirmation for the Vice-President.",
        "analysis_marathi": "हे योग्यरित्या जुळले आहे. अनुच्छेद 69 मध्ये उपराष्ट्रपतींनी घ्यावयाच्या शपथेची किंवा प्रतिज्ञेची तरतूद आहे.",
        "is_correct": false
      },
      {
        "option_english": "Article 61-Tenure of Vice-President.",
        "option_marathi": "कलम 61 - उपराष्ट्रपतींचा कार्यकाल.",
        "analysis_english": "This is incorrectly matched. Article 61 deals with the impeachment of the President, not the tenure of the Vice-President. The tenure of the Vice-President is covered under Article 67. Since the question asks for the *incorrectly* matched option, this is the correct answer.",
        "analysis_marathi": "हे चुकीचे जुळले आहे. अनुच्छेद 61 राष्ट्रपतींच्या महाभियोगाशी संबंधित आहे, उपराष्ट्रपतींच्या कार्यकाळाशी नाही. उपराष्ट्रपतींचा कार्यकाल अनुच्छेद 67 मध्ये नमूद केला आहे. प्रश्न चुकीचे जुळलेले विचारत असल्याने, हा योग्य पर्याय आहे.",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "नियंत्रक आणि महालेखा परिक्षक यांना त्यांच्या पदावरून कसे काढून टाकता येईल ?",
    "question_english": "How can the Comptroller and Auditor-General be removed from his post ?",
    "options_marathi": [
      "सर्वोच्च न्यायालयाच्या न्यायाधिशांना ज्या प्रक्रियेने पदावरून काढले जाते त्याच प्रक्रिये द्वारे.",
      "भारताच्या महान्यायवादी यांना ज्या पद्धतीने पदावरून काढले जाते त्याच पद्धती द्वारे.",
      "लोकसभेत प्रस्ताव मंजूर करून.",
      "केवळ अर्थमंत्र्यांच्या सल्ल्यानुसार."
    ],
    "options_english": [
      "By the same process as the judge of the supreme court is removed.",
      "By the same procedure as the Attorney General of India is removed.",
      "By passing the proposal in the Lok Sabha.",
      "Only with the advice of the Finance Minister."
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Constitutional Bodies, Comptroller and Auditor General (CAG)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Comptroller and Auditor General (CAG) of India is an independent constitutional authority. To ensure the independence of this office, the Constitution provides a stringent removal process. The CAG can be removed from office by the President only on an address from both Houses of Parliament on grounds of proved misbehaviour or incapacity. This procedure is identical to that for the removal of a Supreme Court Judge. This ensures that the CAG is not easily susceptible to executive pressure.",
    "explanation_marathi": "भारताचे नियंत्रक आणि महालेखा परीक्षक (CAG) हे एक स्वतंत्र संवैधानिक प्राधिकरण आहेत. या कार्यालयाची स्वायत्तता सुनिश्चित करण्यासाठी, संविधानाने कठोर काढण्याची प्रक्रिया दिली आहे. सिद्ध गैरवर्तन किंवा अक्षमतेच्या कारणास्तव संसदेच्या दोन्ही सभागृहांच्या विनंतीनंतरच राष्ट्रपती CAG ला पदावरून काढू शकतात. ही प्रक्रिया सर्वोच्च न्यायालयाच्या न्यायाधीशांना पदावरून काढण्याच्या प्रक्रियेसारखीच आहे. यामुळे CAG कार्यकारी दबावाला सहज बळी पडत नाहीत याची खात्री होते.",
    "options_breakdown": [
      {
        "option_english": "By the same process as the judge of the supreme court is removed.",
        "option_marathi": "सर्वोच्च न्यायालयाच्या न्यायाधिशांना ज्या प्रक्रियेने पदावरून काढले जाते त्याच प्रक्रिये द्वारे.",
        "analysis_english": "This is correct. The CAG can be removed by the President on the same grounds and in the same manner as a judge of the Supreme Court.",
        "analysis_marathi": "हे बरोबर आहे. CAG ला राष्ट्रपती सर्वोच्च न्यायालयाच्या न्यायाधीशांना ज्या कारणांवर आणि पद्धतीने काढतात, त्याच पद्धतीने काढू शकतात.",
        "is_correct": true
      },
      {
        "option_english": "By the same procedure as the Attorney General of India is removed.",
        "option_marathi": "भारताच्या महान्यायवादी यांना ज्या पद्धतीने पदावरून काढले जाते त्याच पद्धती द्वारे.",
        "analysis_english": "This is incorrect. The Attorney General holds office during the pleasure of the President and can be removed at any time by the President, which is a much simpler process than for the CAG.",
        "analysis_marathi": "हे चुकीचे आहे. महान्यायवादी राष्ट्रपतींच्या मर्जीनुसार पद धारण करतात आणि त्यांना राष्ट्रपती कधीही पदावरून काढू शकतात, जी CAG च्या तुलनेत खूप सोपी प्रक्रिया आहे.",
        "is_correct": false
      },
      {
        "option_english": "By passing the proposal in the Lok Sabha.",
        "option_marathi": "लोकसभेत प्रस्ताव मंजूर करून.",
        "analysis_english": "This is incorrect. Removal requires a special majority in *both* Houses of Parliament, not just a proposal in the Lok Sabha.",
        "analysis_marathi": "हे चुकीचे आहे. पदावरून काढण्यासाठी संसदेच्या *दोन्ही* सभागृहांमध्ये विशेष बहुमताची आवश्यकता असते, केवळ लोकसभेत प्रस्ताव मंजूर करून नाही.",
        "is_correct": false
      },
      {
        "option_english": "Only with the advice of the Finance Minister.",
        "option_marathi": "केवळ अर्थमंत्र्यांच्या सल्ल्यानुसार.",
        "analysis_english": "This is incorrect. The removal of a constitutional authority like the CAG is a constitutional process and is not dependent on the advice of a minister.",
        "analysis_marathi": "हे चुकीचे आहे. CAG सारख्या संवैधानिक प्राधिकरणाला पदावरून काढणे ही एक संवैधानिक प्रक्रिया आहे आणि ती कोणत्याही मंत्र्याच्या सल्ल्यावर अवलंबून नसते.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "भारतीय संविधानाच्या कोणत्या भाग आणि कलमांत केंद्र-राज्य वैधानिक संबंधांचा उल्लेख आहे ?",
    "question_english": "In which part and article of the Indian Constitution, Central-State Legislative relations are mentioned ?",
    "options_marathi": [
      "भाग-XI (कलम 245 ते 255)",
      "भाग-X (कलम 244)",
      "भाग-VIII (कलम 239 ते 242)",
      "भाग-XII (कलम 264 ते 291)"
    ],
    "options_english": [
      "Part-XI (article 245 to 255)",
      "Part-X (article 244)",
      "Part-VIII (article 239 to 242)",
      "Part-XII (article 264 to 291)"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Centre-State Relations, Constitutional Parts and Articles",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Indian Constitution is divided into various Parts, each dealing with specific aspects of governance. Part XI of the Constitution, titled 'Relations Between the Union and the States,' specifically addresses the legislative, administrative, and financial relations between the central government and the state governments. Chapter I of Part XI (Articles 245 to 255) deals with legislative relations, outlining the distribution of legislative powers between the Parliament and the State Legislatures.",
    "explanation_marathi": "भारतीय संविधान विविध भागांमध्ये विभागलेले आहे, प्रत्येक भाग शासनाच्या विशिष्ट पैलूंशी संबंधित आहे. संविधानाचा भाग XI, ज्याचे शीर्षक 'संघ आणि राज्यांमधील संबंध' असे आहे, विशेषतः केंद्र सरकार आणि राज्य सरकारांमधील वैधानिक, प्रशासकीय आणि आर्थिक संबंधांशी संबंधित आहे. भाग XI मधील प्रकरण I (अनुच्छेद 245 ते 255) वैधानिक संबंधांशी संबंधित आहे, ज्यात संसद आणि राज्य विधानमंडळांमधील वैधानिक अधिकारांचे वितरण स्पष्ट केले आहे.",
    "options_breakdown": [
      {
        "option_english": "Part-XI (article 245 to 255)",
        "option_marathi": "भाग-XI (कलम 245 ते 255)",
        "analysis_english": "This is correct. Part XI (Articles 245 to 255) of the Indian Constitution deals with the legislative relations between the Union and the States.",
        "analysis_marathi": "हे बरोबर आहे. भारतीय संविधानाचा भाग XI (अनुच्छेद 245 ते 255) संघ आणि राज्यांमधील वैधानिक संबंधांशी संबंधित आहे.",
        "is_correct": true
      },
      {
        "option_english": "Part-X (article 244)",
        "option_marathi": "भाग-X (कलम 244)",
        "analysis_english": "This is incorrect. Part X (Article 244) deals with Scheduled and Tribal Areas.",
        "analysis_marathi": "हे चुकीचे आहे. भाग X (अनुच्छेद 244) अनुसूचित आणि आदिवासी क्षेत्रांशी संबंधित आहे.",
        "is_correct": false
      },
      {
        "option_english": "Part-VIII (article 239 to 242)",
        "option_marathi": "भाग-VIII (कलम 239 ते 242)",
        "analysis_english": "This is incorrect. Part VIII (Articles 239 to 242) deals with Union Territories.",
        "analysis_marathi": "हे चुकीचे आहे. भाग VIII (अनुच्छेद 239 ते 242) केंद्रशासित प्रदेशांशी संबंधित आहे.",
        "is_correct": false
      },
      {
        "option_english": "Part-XII (article 264 to 291)",
        "option_marathi": "भाग-XII (कलम 264 ते 291)",
        "analysis_english": "This is incorrect. Part XII (Articles 264 to 300A) deals with Finance, Property, Contracts, and Suits.",
        "analysis_marathi": "हे चुकीचे आहे. भाग XII (अनुच्छेद 264 ते 300A) वित्त, मालमत्ता, करार आणि खटल्यांशी संबंधित आहे.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) भारताच्या राज्यघटनेनुसार मुख्यमंत्री म्हणून नेमणूक होण्या अगोदर त्या व्यक्तिने विधान सभेमध्ये आपले बहुमत सिद्ध केले पाहिजे. (b) राज्याच्या विधिमंडळाची सदस्य नसलेल्या व्यक्तिची मुख्यमंत्री म्हणून नेमणूक होऊ शकते. (c) मंत्रिमंडळाच्या शक्तिचे निर्धारण हा कोणत्याही व्यक्तिच्या खाजगी मताचा विषय नाही मग ती व्यक्ति राज्यपाल अथवा राष्ट्रपती असो. (d) मुख्यमंत्र्यांचे वेतन आणि भत्ते राज्यपालाद्वारे निश्चित केले जातात.",
    "question_english": "Consider the following statements : (a) According to the Constitution of India a person must prove his majority in the Legislative Assembly before he is appointed as Chief Minister. (b) A person who is not a member of the State Legislature can be appointed as Chief Minister. (c) The assessment of the strength of the ministry is not a matter of private opinion of any individual, be he the Governor or the President. (d) The salary and allowances of the Chief Minister are determined by the Governor.",
    "options_marathi": [
      "विधाने (a) आणि (b) बरोबर आहेत",
      "विधाने (b) आणि (c) बरोबर आहेत",
      "विधाने (b), (c) आणि (d) बरोबर आहेत",
      "विधाने (a), (c) आणि (d) बरोबर आहेत"
    ],
    "options_english": [
      "Statements (a) and (b) are correct",
      "Statements (b) and (c) are correct",
      "Statements (b), (c) and (d) are correct",
      "Statements (a), (c) and (d) are correct"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "State Executive, Chief Minister, Governor",
    "difficulty": "Hard",
    "trap_detected": "Nuance in constitutional provisions",
    "explanation_english": "This question assesses understanding of the appointment and powers of the Chief Minister and the role of the Governor. Statement (a) is incorrect because a person does not necessarily have to prove majority *before* appointment; the Governor can appoint someone as CM and then ask them to prove their majority within a reasonable period (usually six months). Statement (b) is correct; a non-member of the state legislature can be appointed CM but must become a member within six months. Statement (c) is correct, as established by the Supreme Court (e.g., S.R. Bommai case), the strength of the ministry is to be tested on the floor of the House, not based on the private opinion of the Governor or President. Statement (d) is incorrect; the salary and allowances of the Chief Minister are determined by the *State Legislature*, not the Governor. Therefore, statements (b) and (c) are correct.",
    "explanation_marathi": "हा प्रश्न मुख्यमंत्र्यांची नियुक्ती आणि अधिकार तसेच राज्यपालांच्या भूमिकेबद्दलच्या समजाचे मूल्यांकन करतो. विधान (a) चुकीचे आहे कारण एखाद्या व्यक्तीला मुख्यमंत्री म्हणून नियुक्त करण्यापूर्वी बहुमत सिद्ध करण्याची आवश्यकता नसते; राज्यपाल एखाद्याला मुख्यमंत्री म्हणून नियुक्त करू शकतात आणि नंतर त्यांना वाजवी कालावधीत (सामान्यतः सहा महिन्यांत) बहुमत सिद्ध करण्यास सांगू शकतात. विधान (b) बरोबर आहे; राज्य विधानमंडळाचा सदस्य नसलेल्या व्यक्तीला मुख्यमंत्री म्हणून नियुक्त केले जाऊ शकते परंतु त्याला सहा महिन्यांच्या आत सदस्य व्हावे लागते. विधान (c) बरोबर आहे, कारण सर्वोच्च न्यायालयाने (उदा. एस.आर. बोम्मई प्रकरण) स्थापित केल्यानुसार, मंत्रिमंडळाची ताकद विधानसभेच्या पटलावर तपासली जाते, राज्यपालांच्या किंवा राष्ट्रपतींच्या खाजगी मतावर आधारित नाही. विधान (d) चुकीचे आहे; मुख्यमंत्र्यांचे वेतन आणि भत्ते *राज्य विधानमंडळाद्वारे* निश्चित केले जातात, राज्यपालांद्वारे नाही. म्हणून, विधाने (b) आणि (c) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_english": "Statements (a) and (b) are correct",
        "option_marathi": "विधाने (a) आणि (b) बरोबर आहेत",
        "analysis_english": "Incorrect, as statement (a) is incorrect.",
        "analysis_marathi": "चुकीचे, कारण विधान (a) चुकीचे आहे.",
        "is_correct": false
      },
      {
        "option_english": "Statements (b) and (c) are correct",
        "option_marathi": "विधाने (b) आणि (c) बरोबर आहेत",
        "analysis_english": "Correct, as both statements (b) and (c) are factually accurate.",
        "analysis_marathi": "बरोबर, कारण दोन्ही विधाने (b) आणि (c) वस्तुस्थितीनुसार अचूक आहेत.",
        "is_correct": true
      },
      {
        "option_english": "Statements (b), (c) and (d) are correct",
        "option_marathi": "विधाने (b), (c) आणि (d) बरोबर आहेत",
        "analysis_english": "Incorrect, as statement (d) is incorrect.",
        "analysis_marathi": "चुकीचे, कारण विधान (d) चुकीचे आहे.",
        "is_correct": false
      },
      {
        "option_english": "Statements (a), (c) and (d) are correct",
        "option_marathi": "विधाने (a), (c) आणि (d) बरोबर आहेत",
        "analysis_english": "Incorrect, as statements (a) and (d) are incorrect.",
        "analysis_marathi": "चुकीचे, कारण विधाने (a) आणि (d) चुकीची आहेत.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "एकच व्यक्ति दोन किंवा अधिक राज्याचा राज्यपाल म्हणून नियुक्त असेल तर त्यांना दयावयाची वित्तलब्धी आणि भत्ते खालीलप्रमाणे दिले जातात :",
    "question_english": "If a person is appointed as a Governor for two or more states, his honorarium and allowances will be paid as following:",
    "options_marathi": [
      "कोणत्याही एकाच राज्याद्वारे",
      "केंद्र सरकार स्वतः देईल",
      "राष्ट्रपतीच्या आदेशाद्वारे दोन्ही राज्यातून विभागून",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "From any one state",
      "From Central Government",
      "President will decide the proportion of payment from concerned states",
      "None of these"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Executive, Governor, Constitutional Provisions",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Seventh Constitutional Amendment Act of 1956 made it possible for the same person to be appointed as Governor for two or more states. To address the financial implications, Article 158(3A) was inserted, which states that when the same person is appointed Governor for two or more States, the emoluments and allowances payable to the Governor shall be allocated among the States in such proportion as the President may by order determine. This ensures a fair distribution of the financial burden among the concerned states.",
    "explanation_marathi": "1956 च्या सातव्या घटनादुरुस्ती कायद्याने एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त करणे शक्य केले. याच्या आर्थिक परिणामांवर उपाय म्हणून, अनुच्छेद 158(3A) समाविष्ट करण्यात आले, जे असे सांगते की जेव्हा एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त केले जाते, तेव्हा राज्यपालांना देय असलेले वेतन आणि भत्ते राष्ट्रपती आदेशाद्वारे निश्चित करतील अशा प्रमाणात राज्यांमध्ये वाटले जातील. यामुळे संबंधित राज्यांमध्ये आर्थिक भाराचे योग्य वितरण सुनिश्चित होते.",
    "options_breakdown": [
      {
        "option_english": "From any one state",
        "option_marathi": "कोणत्याही एकाच राज्याद्वारे",
        "analysis_english": "This is incorrect. The payment is not from just one state.",
        "analysis_marathi": "हे चुकीचे आहे. वेतन केवळ एकाच राज्याकडून दिले जात नाही.",
        "is_correct": false
      },
      {
        "option_english": "From Central Government",
        "option_marathi": "केंद्र सरकार स्वतः देईल",
        "analysis_english": "This is incorrect. The Central Government does not directly pay the Governor's salary; it is charged to the Consolidated Fund of the respective states.",
        "analysis_marathi": "हे चुकीचे आहे. केंद्र सरकार राज्यपालांचे वेतन थेट देत नाही; ते संबंधित राज्यांच्या एकत्रित निधीतून दिले जाते.",
        "is_correct": false
      },
      {
        "option_english": "President will decide the proportion of payment from concerned states",
        "option_marathi": "राष्ट्रपतीच्या आदेशाद्वारे दोन्ही राज्यातून विभागून",
        "analysis_english": "This is correct. Article 158(3A) specifies that the President determines the proportion in which the emoluments and allowances are allocated among the concerned states.",
        "analysis_marathi": "हे बरोबर आहे. अनुच्छेद 158(3A) नुसार, राष्ट्रपती संबंधित राज्यांमध्ये वेतन आणि भत्ते कोणत्या प्रमाणात वाटले जातील हे निश्चित करतात.",
        "is_correct": true
      },
      {
        "option_english": "None of these",
        "option_marathi": "वरीलपैकी एकही नाही",
        "analysis_english": "This is incorrect, as Option 3 is correct.",
        "analysis_marathi": "हे चुकीचे आहे, कारण पर्याय 3 बरोबर आहे.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "2011 मध्ये कोणत्या भारतीय पंतप्रधानांना बांग्लादेश सरकारने 'बांग्लादेशी स्वाधीनता सन्मानोन पुरस्कारा' ने गौरवीले ?",
    "question_english": "In 2011, which Indian Prime Minister was honoured with 'Bangladeshi Swadhinta Sammanon Award' by the Bangladeshi Government ?",
    "options_marathi": [
      "राजीव गांधी",
      "इंदिरा गांधी",
      "मनमोहन सिंग",
      "अटलबिहारी वाजपेयी"
    ],
    "options_english": [
      "Rajiv Gandhi",
      "Indira Gandhi",
      "Manmohan Singh",
      "Atal Bihari Vajpayee"
    ],
    "correct_option_index": 2,
    "subject": "Current Affairs",
    "topic": "India-Bangladesh Relations, Awards, Prime Ministers",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The 'Bangladesh Swadhinata Sammanona' (Bangladesh Freedom Honour) is the highest state award of Bangladesh. In 2011, the Bangladeshi government posthumously honored former Indian Prime Minister Indira Gandhi with this award. She was recognized for her outstanding contribution to Bangladesh's Liberation War in 1971, where India, under her leadership, played a crucial role in supporting Bangladesh's independence.",
    "explanation_marathi": "'बांग्लादेशी स्वाधीनता सन्मानोन पुरस्कार' हा बांगलादेशचा सर्वोच्च राज्य पुरस्कार आहे. 2011 मध्ये, बांगलादेश सरकारने भारताच्या माजी पंतप्रधान इंदिरा गांधी यांना मरणोत्तर या पुरस्काराने सन्मानित केले. 1971 च्या बांगलादेश मुक्ती युद्धात त्यांच्या महत्त्वपूर्ण योगदानासाठी त्यांना ओळख मिळाली, जिथे त्यांच्या नेतृत्वाखाली भारताने बांगलादेशच्या स्वातंत्र्याला पाठिंबा देण्यासाठी महत्त्वाची भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_english": "Rajiv Gandhi",
        "option_marathi": "राजीव गांधी",
        "analysis_english": "This is incorrect. Rajiv Gandhi was not awarded this specific honour.",
        "analysis_marathi": "हे चुकीचे आहे. राजीव गांधी यांना हा विशिष्ट सन्मान मिळाला नव्हता.",
        "is_correct": false
      },
      {
        "option_english": "Indira Gandhi",
        "option_marathi": "इंदिरा गांधी",
        "analysis_english": "This is correct. Indira Gandhi was posthumously awarded the 'Bangladesh Swadhinata Sammanona' in 2011 for her role in the 1971 Liberation War.",
        "analysis_marathi": "हे बरोबर आहे. इंदिरा गांधी यांना 1971 च्या मुक्ती युद्धात त्यांच्या भूमिकेसाठी 2011 मध्ये 'बांग्लादेशी स्वाधीनता सन्मानोन पुरस्कार' मरणोत्तर प्रदान करण्यात आला.",
        "is_correct": true
      },
      {
        "option_english": "Manmohan Singh",
        "option_marathi": "मनमोहन सिंग",
        "analysis_english": "This is incorrect. Manmohan Singh was the PM in 2011 but was not the recipient of this specific award for the 1971 war.",
        "analysis_marathi": "हे चुकीचे आहे. मनमोहन सिंग 2011 मध्ये पंतप्रधान होते, परंतु त्यांना 1971 च्या युद्धासाठी हा विशिष्ट पुरस्कार मिळाला नव्हता.",
        "is_correct": false
      },
      {
        "option_english": "Atal Bihari Vajpayee",
        "option_marathi": "अटलबिहारी वाजपेयी",
        "analysis_english": "This is incorrect. Atal Bihari Vajpayee was awarded the 'Bangladesh Liberation War Honour' (another award) in 2015.",
        "analysis_marathi": "हे चुकीचे आहे. अटलबिहारी वाजपेयी यांना 2015 मध्ये 'बांग्लादेश मुक्ती युद्ध सन्मान' (दुसरा पुरस्कार) प्रदान करण्यात आला होता.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "भारतीय राज्यघटने संदर्भात खालीलपैकी कोणती विधाने योग्य आहेत ? (a) अनुच्छेद 368 अनुसार राज्यघटना दुरुस्त करावयाची असल्यास संसदेच्या दोन्ही सभागृहाच्या एकूण सदस्यसंख्येच्या दोन-तृतीयांश बहुमताची आवश्यकता असते. (b) घटक राज्यात एखादे विधेयक हे अर्थ विधेयक आहे किंवा नाही असा प्रश्न उपस्थित झाल्यास राज्यपालांनी दिलेला निर्णय अंतीम असतो. (c) कोणत्याही विभागीय अथवा प्रशासनिक खटल्यासह सर्व खटल्यात कोणत्याही व्यक्तिस एकाच गुन्ह्यासाठी एकापेक्षा अधिक वेळी आरोपी केले जाणार नाही व एकापेक्षा अधिक वेळा शिक्षा दिली जाणार नाही.",
    "question_english": "Which among the following statements are correct regarding the Indian Constitution ? (a) To amend the Constitution under Art. 368, two thirds majority of the total membership of the houses of the parliament is required. (b) If any question arises in state as to whether a Bill is a money Bill or not, the decision of the Governor shall be final. (c) No person shall be prosecuted and punished for the same offence more than once, including any departmental or administrative proceedings.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "वरीलपैकी एकही नाही",
      "फक्त (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "None of the above",
      "Only (c)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Constitutional Amendment, Money Bill, Fundamental Rights (Double Jeopardy)",
    "difficulty": "Hard",
    "trap_detected": "Nuance in constitutional provisions",
    "explanation_english": "This question tests detailed knowledge of constitutional provisions. Statement (a) is incorrect. Article 368 requires a special majority, which means a majority of the total membership of the House AND a majority of not less than two-thirds of the members of that House present and voting. The statement only mentions 'two-thirds majority of the total membership,' which is incomplete and thus incorrect. Statement (b) is incorrect. In a state, if a question arises whether a Bill is a Money Bill or not, the decision of the *Speaker of the Legislative Assembly* is final, not the Governor. Statement (c) is incorrect. Article 20(2) provides protection against 'double jeopardy' (no person shall be prosecuted and punished for the same offence more than once). However, this protection is against judicial punishment and does *not* extend to departmental or administrative proceedings. A person can face both departmental inquiry and criminal prosecution for the same act. Since all three statements are incorrect, the correct option is 'None of the above'.",
    "explanation_marathi": "हा प्रश्न घटनात्मक तरतुदींच्या सखोल ज्ञानाची चाचणी घेतो. विधान (a) चुकीचे आहे. अनुच्छेद 368 नुसार विशेष बहुमताची आवश्यकता असते, ज्याचा अर्थ सभागृहाच्या एकूण सदस्यसंख्येच्या बहुमताने आणि त्या सभागृहात उपस्थित असलेल्या व मतदान करणाऱ्या सदस्यांच्या दोन-तृतीयांशपेक्षा कमी नसलेल्या बहुमताने. विधानात केवळ 'एकूण सदस्यसंख्येच्या दोन-तृतीयांश बहुमताची' आवश्यकता असल्याचे म्हटले आहे, जे अपूर्ण आणि त्यामुळे चुकीचे आहे. विधान (b) चुकीचे आहे. राज्यात एखादे विधेयक अर्थ विधेयक आहे की नाही असा प्रश्न उपस्थित झाल्यास, *विधानसभेच्या अध्यक्षांचा* निर्णय अंतिम असतो, राज्यपालांचा नाही. विधान (c) चुकीचे आहे. अनुच्छेद 20(2) 'दुहेरी शिक्षे'पासून संरक्षण प्रदान करते (एकाच गुन्ह्यासाठी कोणत्याही व्यक्तीवर एकापेक्षा जास्त वेळा खटला चालवला जाणार नाही आणि शिक्षा दिली जाणार नाही). तथापि, हे संरक्षण न्यायालयीन शिक्षेविरुद्ध आहे आणि विभागीय किंवा प्रशासकीय कार्यवाहीला लागू होत नाही. एकाच कृत्यासाठी एखाद्या व्यक्तीवर विभागीय चौकशी आणि फौजदारी खटला दोन्ही चालवले जाऊ शकतात. वरील तिन्ही विधाने चुकीची असल्याने, योग्य पर्याय 'वरीलपैकी एकही नाही' हा आहे.",
    "options_breakdown": [
      {
        "option_english": "(a) and (b)",
        "option_marathi": "(a) आणि (b)",
        "analysis_english": "Incorrect, as both statements (a) and (b) are incorrect.",
        "analysis_marathi": "चुकीचे, कारण दोन्ही विधाने (a) आणि (b) चुकीची आहेत.",
        "is_correct": false
      },
      {
        "option_english": "(b) and (c)",
        "option_marathi": "(b) आणि (c)",
        "analysis_english": "Incorrect, as both statements (b) and (c) are incorrect.",
        "analysis_marathi": "चुकीचे, कारण दोन्ही विधाने (b) आणि (c) चुकीची आहेत.",
        "is_correct": false
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी एकही नाही",
        "analysis_english": "Correct, as all three statements (a), (b), and (c) are incorrect.",
        "analysis_marathi": "बरोबर, कारण तिन्ही विधाने (a), (b) आणि (c) चुकीची आहेत.",
        "is_correct": true
      },
      {
        "option_english": "Only (c)",
        "option_marathi": "फक्त (c)",
        "analysis_english": "Incorrect, as statement (c) is incorrect.",
        "analysis_marathi": "चुकीचे, कारण विधान (c) चुकीचे आहे.",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "भारतातील संघराज्य व्यवस्थेच्या संदर्भात, खालील कोणती वैशिष्ट्ये योग्य आहेत ? (a) संविधानाची सर्वोच्चता (b) केंद्र व राज्य सरकारांमध्ये सत्तेची विभागणी (c) स्वतंत्र न्यायव्यवस्थेचे अस्तित्व (d) केंद्रीय मंत्रीमंडळाची सर्वोच्चता",
    "question_english": "In the context of Federal system in India, which of the following characteristics are correct ? (a) Supremacy of the Constitution. (b) Division of powers between Union and the State Governments. (c) Existence of an independent judiciary. (d) Supremacy of the Union Cabinet.",
    "options_marathi": [
      "(a), (b) आणि (d)",
      "(b) आणि (c) फक्त",
      "(b), (c) आणि (d)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a), (b) and (d)",
      "(b) and (c) only",
      "(b), (c) and (d)",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Federalism, Features of Indian Constitution",
    "difficulty": "Medium",
    "trap_detected": "Distractor",
    "explanation_english": "Federalism is a system of government in which power is divided between a central authority and various constituent units. Key characteristics of a federal system include: Supremacy of the Constitution, Division of powers between Union and State Governments, and Existence of an independent judiciary. Statement (d) 'Supremacy of the Union Cabinet' is not a characteristic of a federal system. While the Union Cabinet is powerful in India's parliamentary system, the ultimate supremacy lies with the Constitution, not the Cabinet, in a federal structure. Therefore, (a), (b), and (c) are correct.",
    "explanation_marathi": "संघराज्य पद्धत ही शासनाची अशी प्रणाली आहे जिथे सत्ता केंद्रीय प्राधिकरण आणि विविध घटक एककांमध्ये विभागलेली असते. संघराज्य पद्धतीची प्रमुख वैशिष्ट्ये खालीलप्रमाणे आहेत: संविधानाची सर्वोच्चता, केंद्र आणि राज्य सरकारांमध्ये सत्तेची विभागणी आणि स्वतंत्र न्यायव्यवस्थेचे अस्तित्व. विधान (d) 'केंद्रीय मंत्रीमंडळाची सर्वोच्चता' हे संघराज्य पद्धतीचे वैशिष्ट्य नाही. भारताच्या संसदीय प्रणालीमध्ये केंद्रीय मंत्रीमंडळ शक्तिशाली असले तरी, संघराज्यीय संरचनेत अंतिम सर्वोच्चता संविधानाची असते, मंत्रीमंडळाची नाही. म्हणून, (a), (b) आणि (c) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_english": "(a), (b) and (d)",
        "option_marathi": "(a), (b) आणि (d)",
        "analysis_english": "Incorrect, as statement (d) 'Supremacy of the Union Cabinet' is not a characteristic of a federal system.",
        "analysis_marathi": "चुकीचे, कारण विधान (d) 'केंद्रीय मंत्रीमंडळाची सर्वोच्चता' हे संघराज्य पद्धतीचे वैशिष्ट्य नाही.",
        "is_correct": false
      },
      {
        "option_english": "(b) and (c) only",
        "option_marathi": "(b) आणि (c) फक्त",
        "analysis_english": "Incorrect, as statement (a) 'Supremacy of the Constitution' is also a correct characteristic.",
        "analysis_marathi": "चुकीचे, कारण विधान (a) 'संविधानाची सर्वोच्चता' हे देखील एक योग्य वैशिष्ट्य आहे.",
        "is_correct": false
      },
      {
        "option_english": "(b), (c) and (d)",
        "option_marathi": "(b), (c) आणि (d)",
        "analysis_english": "Incorrect, as statement (d) 'Supremacy of the Union Cabinet' is not a characteristic of a federal system.",
        "analysis_marathi": "चुकीचे, कारण विधान (d) 'केंद्रीय मंत्रीमंडळाची सर्वोच्चता' हे संघराज्य पद्धतीचे वैशिष्ट्य नाही.",
        "is_correct": false
      },
      {
        "option_english": "(a), (b) and (c)",
        "option_marathi": "(a), (b) आणि (c)",
        "analysis_english": "Correct. Supremacy of the Constitution, Division of powers, and an Independent Judiciary are all fundamental characteristics of a federal system.",
        "analysis_marathi": "बरोबर. संविधानाची सर्वोच्चता, सत्तेची विभागणी आणि स्वतंत्र न्यायव्यवस्था ही सर्व संघराज्य पद्धतीची मूलभूत वैशिष्ट्ये आहेत.",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "भारतासाठी संसदेचे द्विगृही कायदेमंडळ पद्धत स्वीकारण्यामागे पुढीलपैकी कोणते उद्दिष्ट नाही ?",
    "question_english": "Which of the following is not a purpose behind constituting a second chamber for the Indian Parliament ?",
    "options_marathi": [
      "घटक राज्यांना प्रतिनिधित्व मिळवून देणे.",
      "संघराज्य पद्धतीचे एक वैशिष्ट्य जपणे.",
      "कायदे निर्मितीच्या प्रक्रियेत सखोल विचार विनिमय करून पुनर्विचार करता येणे.",
      "राजकीय पक्षांमधील महत्त्वाच्या नेत्यांना संसदेवर निवडून आणणे."
    ],
    "options_english": [
      "To give representation to Constituent States.",
      "To serve as a federal feature.",
      "To hold second thoughts or detailed discussions on Legislation.",
      "To get powerful party leaders elected to Parliament."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Parliament, Bicameralism, Rajya Sabha",
    "difficulty": "Medium",
    "trap_detected": "Distractor",
    "explanation_english": "The Indian Parliament is bicameral, consisting of the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). The purposes behind having a second chamber (Rajya Sabha) are primarily: to provide representation to the constituent states of the Indian Union, to act as a revising chamber for 'second thoughts' on legislation, and to ensure diverse opinions are represented. Option (d) 'To get powerful party leaders elected to Parliament' is not a constitutional or stated purpose for the existence of the second chamber. While it may happen that prominent leaders enter Parliament through the Rajya Sabha, this is an outcome, not a foundational objective of bicameralism.",
    "explanation_marathi": "भारतीय संसद द्विगृही आहे, ज्यात लोकसभा (लोकांचे सभागृह) आणि राज्यसभा (राज्यांची परिषद) यांचा समावेश आहे. दुसरे सभागृह (राज्यसभा) स्थापन करण्यामागील मुख्य उद्दिष्टे खालीलप्रमाणे आहेत: भारतीय संघाच्या घटक राज्यांना प्रतिनिधित्व देणे, कायदे निर्मितीवर 'दुसऱ्या विचारांसाठी' एक व्यासपीठ म्हणून कार्य करणे आणि विविध मतांना प्रतिनिधित्व मिळावे याची खात्री करणे. पर्याय (d) 'राजकीय पक्षांमधील महत्त्वाच्या नेत्यांना संसदेवर निवडून आणणे' हे दुसऱ्या सभागृहाच्या अस्तित्वामागील घटनात्मक किंवा घोषित उद्दिष्ट नाही. प्रमुख नेते राज्यसभेमार्फत संसदेत प्रवेश करू शकतात, परंतु हे एक परिणाम आहे, द्विगृही पद्धतीचे मूलभूत उद्दिष्ट नाही.",
    "options_breakdown": [
      {
        "option_english": "To give representation to Constituent States.",
        "option_marathi": "घटक राज्यांना प्रतिनिधित्व मिळवून देणे.",
        "analysis_english": "This is a correct purpose. The Rajya Sabha represents the states, fulfilling a federal objective.",
        "analysis_marathi": "हे एक योग्य उद्दिष्ट आहे. राज्यसभा राज्यांचे प्रतिनिधित्व करते, ज्यामुळे संघराज्यीय उद्दिष्ट पूर्ण होते.",
        "is_correct": false
      },
      {
        "option_english": "To serve as a federal feature.",
        "option_marathi": "संघराज्य पद्धतीचे एक वैशिष्ट्य जपणे.",
        "analysis_english": "This is a correct purpose. The existence of a second chamber representing states is a key federal feature.",
        "analysis_marathi": "हे एक योग्य उद्दिष्ट आहे. राज्यांचे प्रतिनिधित्व करणारे दुसरे सभागृह असणे हे एक महत्त्वाचे संघराज्यीय वैशिष्ट्य आहे.",
        "is_correct": false
      },
      {
        "option_english": "To hold second thoughts or detailed discussions on Legislation.",
        "option_marathi": "कायदे निर्मितीच्या प्रक्रियेत सखोल विचार विनिमय करून पुनर्विचार करता येणे.",
        "analysis_english": "This is a correct purpose. The Rajya Sabha acts as a revising body, allowing for more detailed scrutiny and reconsideration of legislation.",
        "analysis_marathi": "हे एक योग्य उद्दिष्ट आहे. राज्यसभा एक पुनरावलोकन करणारी संस्था म्हणून कार्य करते, ज्यामुळे कायद्यांवर अधिक सखोल तपासणी आणि पुनर्विचार करता येतो.",
        "is_correct": false
      },
      {
        "option_english": "To get powerful party leaders elected to Parliament.",
        "option_marathi": "राजकीय पक्षांमधील महत्त्वाच्या नेत्यांना संसदेवर निवडून आणणे.",
        "analysis_english": "This is not a constitutional or primary objective for having a second chamber. While powerful leaders might get elected to the Rajya Sabha, this is an outcome, not a foundational purpose. Since the question asks for what is *not* a purpose, this is the correct answer.",
        "analysis_marathi": "हे दुसरे सभागृह असण्याचे घटनात्मक किंवा प्राथमिक उद्दिष्ट नाही. शक्तिशाली नेते राज्यसभेवर निवडून येऊ शकतात, परंतु हा एक परिणाम आहे, मूलभूत उद्देश नाही. प्रश्न 'उद्दिष्ट नाही' असे विचारत असल्याने, हा योग्य पर्याय आहे.",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "पंचायत समितीच्या संदर्भातील खालीलपैकी कोणती वाक्ये बरोबर आहेत ? (a) पंचायत समिती ही पंचायत राज व्यवस्थेची सर्वोच्च संस्था आहे. (b) पंचायत समिती राज्य सरकार आणि जिल्हा परिषद यांच्यात दुवा साधण्याचे कार्य करते. (c) यांना महिन्यातून एक सभा बोलावणे आवश्यक असते. (d) पंचायत समितीचा कार्यकाल हा 5 वर्षाचा असतो.",
    "question_english": "Which of the following sentences are true regarding Panchayat Samiti ? (a) Panchayat Samiti is the apex body of the Panchayat Raj system. (b) Panchayat Samiti acts as link between the State Government and Zilla Parishad. (c) It is compulsory to have one meeting in a month. (d) Tenure of Panchayat Samiti is 5 years.",
    "options_marathi": [
      "(a), (b), (c)",
      "(c), (d)",
      "(a), (d)",
      "(b), (c), (d)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(c), (d)",
      "(a), (d)",
      "(b), (c), (d)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Panchayat Raj - Panchayat Samiti)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Panchayat Samiti is the intermediate tier of the Panchayati Raj system, operating at the block level. It is not the apex body; the Zilla Parishad is at the district level. The Panchayat Samiti acts as a link between the Gram Panchayats (village level) and the Zilla Parishad (district level), not directly between the State Government and Zilla Parishad. According to the provisions, it is mandatory for the Panchayat Samiti to hold at least one meeting every month to discuss and implement development programs. Like other Panchayati Raj Institutions, the tenure of a Panchayat Samiti is five years from the date of its first meeting, unless dissolved earlier.",
    "explanation_marathi": "पंचायत समिती ही पंचायत राज व्यवस्थेतील मध्यवर्ती संस्था असून ती तालुका स्तरावर कार्य करते. ती सर्वोच्च संस्था नाही; जिल्हा परिषद जिल्हा स्तरावर सर्वोच्च असते. पंचायत समिती ग्रामपंचायती (ग्रामस्तर) आणि जिल्हा परिषद (जिल्हास्तर) यांच्यात दुवा साधण्याचे कार्य करते, राज्य सरकार आणि जिल्हा परिषद यांच्यात थेट दुवा साधत नाही. तरतुदींनुसार, पंचायत समितीला विकास कार्यक्रमांवर चर्चा करण्यासाठी आणि त्यांची अंमलबजावणी करण्यासाठी दरमहा किमान एक बैठक घेणे बंधनकारक आहे. इतर पंचायत राज संस्थांप्रमाणेच, पंचायत समितीचा कार्यकाळ तिच्या पहिल्या बैठकीच्या तारखेपासून पाच वर्षांचा असतो, जोपर्यंत ती लवकर विसर्जित होत नाही.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b), (c)",
        "option_text_marathi": "(a), (b), (c)",
        "is_correct": false,
        "reason_english": "Option (a) is incorrect because Panchayat Samiti is the intermediate body, not the apex. Option (b) is incorrect as it links Gram Panchayats and Zilla Parishad, not State Government and Zilla Parishad. Option (c) is correct.",
        "reason_marathi": "पर्याय (a) चुकीचा आहे कारण पंचायत समिती ही मध्यवर्ती संस्था आहे, सर्वोच्च नाही. पर्याय (b) चुकीचा आहे कारण ती ग्रामपंचायती आणि जिल्हा परिषद यांना जोडते, राज्य सरकार आणि जिल्हा परिषद यांना नाही. पर्याय (c) बरोबर आहे."
      },
      {
        "option_text_english": "(c), (d)",
        "option_text_marathi": "(c), (d)",
        "is_correct": true,
        "reason_english": "Option (c) is correct as Panchayat Samiti must hold one meeting per month. Option (d) is correct as its tenure is 5 years. Both statements are true.",
        "reason_marathi": "पर्याय (c) बरोबर आहे कारण पंचायत समितीला दरमहा एक बैठक घेणे आवश्यक आहे. पर्याय (d) बरोबर आहे कारण तिचा कार्यकाळ 5 वर्षांचा असतो. दोन्ही विधाने सत्य आहेत."
      },
      {
        "option_text_english": "(a), (d)",
        "option_text_marathi": "(a), (d)",
        "is_correct": false,
        "reason_english": "Option (a) is incorrect as Panchayat Samiti is not the apex body. Option (d) is correct.",
        "reason_marathi": "पर्याय (a) चुकीचा आहे कारण पंचायत समिती सर्वोच्च संस्था नाही. पर्याय (d) बरोबर आहे."
      },
      {
        "option_text_english": "(b), (c), (d)",
        "option_text_marathi": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "Option (b) is incorrect as Panchayat Samiti links Gram Panchayats and Zilla Parishad, not State Government and Zilla Parishad. Options (c) and (d) are correct.",
        "reason_marathi": "पर्याय (b) चुकीचा आहे कारण पंचायत समिती ग्रामपंचायती आणि जिल्हा परिषद यांना जोडते, राज्य सरकार आणि जिल्हा परिषद यांना नाही. पर्याय (c) आणि (d) बरोबर आहेत."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "74 व्या राज्य घटनादुरुस्ती अधिनियमाद्वारे म्युनिसिपल कौन्सिल (नगर-पालिका) यांना कांही कर्तव्ये व जबाबदाऱ्या अनुच्छेद ______ अन्वये सोपविण्यात आलेल्या आहेत.",
    "question_english": "Municipal Councils (Nagar Palikas) are entrusted with some duties and responsibilities as enshrined in the 74th Constitutional Amendment Act under Article ______.",
    "options_marathi": [
      "243 - V",
      "243 - W",
      "243 - Y",
      "243 - Z"
    ],
    "options_english": [
      "243 - V",
      "243 - W",
      "243 - Y",
      "243 - Z"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban Local Bodies - 74th CAA)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "The 74th Constitutional Amendment Act, 1992, added Part IXA (The Municipalities) to the Constitution. Article 243W of this part deals with the powers, authority, and responsibilities of Municipalities. It empowers the State Legislature to endow the Municipalities with such powers and authority as may be necessary to enable them to function as institutions of self-government, including the implementation of schemes for economic development and social justice as listed in the Twelfth Schedule.",
    "explanation_marathi": "74 व्या घटनादुरुस्ती अधिनियमाद्वारे, 1992 मध्ये संविधानात भाग IXA (नगरपालिका) जोडण्यात आला. या भागातील अनुच्छेद 243W नगरपालिकेशी संबंधित अधिकार, प्राधिकार आणि जबाबदाऱ्यांशी संबंधित आहे. हे राज्य विधानमंडळाला नगरपालिकांना स्वशासनाच्या संस्था म्हणून कार्य करण्यास सक्षम करण्यासाठी आवश्यक असलेले अधिकार आणि प्राधिकार प्रदान करण्यास सक्षम करते, ज्यात बाराव्या अनुसूचीमध्ये सूचीबद्ध केलेल्या आर्थिक विकास आणि सामाजिक न्यायासाठी योजनांची अंमलबजावणी समाविष्ट आहे.",
    "options_breakdown": [
      {
        "option_text_english": "243 - V",
        "option_text_marathi": "243 - V",
        "is_correct": false,
        "reason_english": "Article 243V deals with disqualifications for membership of a Municipality.",
        "reason_marathi": "अनुच्छेद 243V नगरपालिकेच्या सदस्यत्वासाठी अपात्रतेशी संबंधित आहे."
      },
      {
        "option_text_english": "243 - W",
        "option_text_marathi": "243 - W",
        "is_correct": true,
        "reason_english": "Article 243W deals with the powers, authority, and responsibilities of Municipalities, including the matters listed in the Twelfth Schedule.",
        "reason_marathi": "अनुच्छेद 243W नगरपालिकेचे अधिकार, प्राधिकार आणि जबाबदाऱ्यांशी संबंधित आहे, ज्यात बाराव्या अनुसूचीमध्ये सूचीबद्ध केलेल्या बाबींचा समावेश आहे."
      },
      {
        "option_text_english": "243 - Y",
        "option_text_marathi": "243 - Y",
        "is_correct": false,
        "reason_english": "Article 243Y deals with the constitution of a Finance Commission to review the financial position of Municipalities.",
        "reason_marathi": "अनुच्छेद 243Y नगरपालिकांच्या आर्थिक स्थितीचा आढावा घेण्यासाठी वित्त आयोगाच्या स्थापनेशी संबंधित आहे."
      },
      {
        "option_text_english": "243 - Z",
        "option_text_marathi": "243 - Z",
        "is_correct": false,
        "reason_english": "Article 243Z deals with the audit of accounts of Municipalities.",
        "reason_marathi": "अनुच्छेद 243Z नगरपालिकांच्या लेखापरीक्षणाशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "जिल्हाधिकाऱ्याची भूमिका आणि कार्ये याबाबत खालीलपैकी कोणती जोडी बरोबर जुळत नाही ? (1) जिल्हा दंडाधिकारी म्हणून (2) जिल्हा समन्वयक म्हणून (3) जिल्ह्यातील प्रमुख राजशिष्टाचार अधिकारी म्हणून (4) जिल्हा विकास अधिकारी म्हणून शस्त्रे, स्फोटके यांचे परवाने मंजूर, निलंबित अथवा रद्द करणे. अन्नधान्य वितरण व्यवस्थेचे प्रमुख म्हणून कार्य करणे आणि काळाबाजार रोखणे. अतिमहत्त्वाच्या व्यक्तिंचे स्वागत करणे व त्यांची निवासव्यवस्था करणे. जिल्ह्यातील विकास आराखड्यास मार्गदर्शन व त्याची पूर्तता करणे.",
    "question_english": "Which of the following pairs is not correctly matched about the role and functions of the District Collector ? (1) As a District Magistrate (2) As a District Co-ordinator (3) As a Chief Protocol Officer in the District (4) As a District Development Officer To grant, suspend or cancel licenses of arms, explosives. To work as the head of rationing system and control black-marketing. To receive and organise the stay of VVIPs. Direction and fulfilment of development plans in the district.",
    "options_marathi": [
      "जिल्हा दंडाधिकारी म्हणून - शस्त्रे, स्फोटके यांचे परवाने मंजूर, निलंबित अथवा रद्द करणे.",
      "जिल्हा समन्वयक म्हणून - अन्नधान्य वितरण व्यवस्थेचे प्रमुख म्हणून कार्य करणे आणि काळाबाजार रोखणे.",
      "जिल्ह्यातील प्रमुख राजशिष्टाचार अधिकारी म्हणून - अतिमहत्त्वाच्या व्यक्तिंचे स्वागत करणे व त्यांची निवासव्यवस्था करणे.",
      "जिल्हा विकास अधिकारी म्हणून - जिल्ह्यातील विकास आराखड्यास मार्गदर्शन व त्याची पूर्तता करणे."
    ],
    "options_english": [
      "As a District Magistrate - To grant, suspend or cancel licenses of arms, explosives.",
      "As a District Co-ordinator - To work as the head of rationing system and control black-marketing.",
      "As a Chief Protocol Officer in the District - To receive and organise the stay of VVIPs.",
      "As a District Development Officer - Direction and fulfilment of development plans in the district."
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "District Administration (District Collector)",
    "difficulty": "Medium",
    "trap_detected": "Nuance in role definition",
    "explanation_english": "The District Collector performs multiple roles. As a District Magistrate, they are responsible for law and order, including licensing of arms and explosives. As a Chief Protocol Officer, they manage arrangements for VVIPs. As a District Development Officer, they oversee and guide development plans. While the Collector does supervise the rationing system and control black-marketing, this function is typically part of their broader role as head of district administration or District Magistrate, rather than specifically defining their role 'As a District Co-ordinator'. The 'District Co-ordinator' role primarily involves coordinating various government departments and agencies for effective administration and development, not being the direct head of a specific system like rationing.",
    "explanation_marathi": "जिल्हाधिकारी अनेक भूमिका पार पाडतात. जिल्हा दंडाधिकारी म्हणून, ते कायदा व सुव्यवस्था राखण्यासाठी जबाबदार असतात, ज्यात शस्त्रे आणि स्फोटकांचे परवाने देणे समाविष्ट आहे. प्रमुख राजशिष्टाचार अधिकारी म्हणून, ते अतिमहत्त्वाच्या व्यक्तींच्या व्यवस्थेची काळजी घेतात. जिल्हा विकास अधिकारी म्हणून, ते जिल्ह्यातील विकास योजनांचे पर्यवेक्षण आणि मार्गदर्शन करतात. जिल्हाधिकारी रेशनिंग व्यवस्थेचे पर्यवेक्षण करतात आणि काळाबाजार नियंत्रित करतात हे खरे असले तरी, हे कार्य त्यांच्या 'जिल्हा समन्वयक' या भूमिकेची थेट व्याख्या करत नाही, तर ते त्यांच्या जिल्हा प्रशासनाचे प्रमुख किंवा जिल्हा दंडाधिकारी म्हणून असलेल्या व्यापक भूमिकेचा भाग आहे. 'जिल्हा समन्वयक' ही भूमिका प्रामुख्याने प्रभावी प्रशासन आणि विकासासाठी विविध सरकारी विभाग आणि एजन्सी यांच्यात समन्वय साधण्याशी संबंधित आहे, विशिष्ट रेशनिंग प्रणालीचे थेट प्रमुख असण्याशी नाही.",
    "options_breakdown": [
      {
        "option_text_english": "As a District Magistrate - To grant, suspend or cancel licenses of arms, explosives.",
        "option_text_marathi": "जिल्हा दंडाधिकारी म्हणून - शस्त्रे, स्फोटके यांचे परवाने मंजूर, निलंबित अथवा रद्द करणे.",
        "is_correct": true,
        "reason_english": "This pair is correctly matched. The District Magistrate has powers related to law and order, including licensing of arms and explosives.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. जिल्हा दंडाधिकाऱ्यांकडे कायदा व सुव्यवस्थेशी संबंधित अधिकार असतात, ज्यात शस्त्रे आणि स्फोटकांचे परवाने देणे समाविष्ट आहे."
      },
      {
        "option_text_english": "As a District Co-ordinator - To work as the head of rationing system and control black-marketing.",
        "option_text_marathi": "जिल्हा समन्वयक म्हणून - अन्नधान्य वितरण व्यवस्थेचे प्रमुख म्हणून कार्य करणे आणि काळाबाजार रोखणे.",
        "is_correct": false,
        "reason_english": "This pair is not correctly matched. While the Collector oversees these functions, being the 'head of rationing system' is not the primary definition of their role 'As a District Co-ordinator'. The coordination role is broader, involving various departments.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली नाही. जिल्हाधिकारी या कार्यांवर देखरेख करत असले तरी, 'अन्नधान्य वितरण व्यवस्थेचे प्रमुख' असणे ही त्यांच्या 'जिल्हा समन्वयक' या भूमिकेची प्राथमिक व्याख्या नाही. समन्वयाची भूमिका अधिक व्यापक असून त्यात विविध विभागांचा समावेश असतो."
      },
      {
        "option_text_english": "As a Chief Protocol Officer in the District - To receive and organise the stay of VVIPs.",
        "option_text_marathi": "जिल्ह्यातील प्रमुख राजशिष्टाचार अधिकारी म्हणून - अतिमहत्त्वाच्या व्यक्तिंचे स्वागत करणे व त्यांची निवासव्यवस्था करणे.",
        "is_correct": true,
        "reason_english": "This pair is correctly matched. The Collector is indeed the chief protocol officer in the district.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. जिल्हाधिकारी हे जिल्ह्याचे प्रमुख राजशिष्टाचार अधिकारी असतात."
      },
      {
        "option_text_english": "As a District Development Officer - Direction and fulfilment of development plans in the district.",
        "option_text_marathi": "जिल्हा विकास अधिकारी म्हणून - जिल्ह्यातील विकास आराखड्यास मार्गदर्शन व त्याची पूर्तता करणे.",
        "is_correct": true,
        "reason_english": "This pair is correctly matched. The Collector, often designated as District Development Commissioner, plays a crucial role in district development.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. जिल्हाधिकारी, ज्यांना अनेकदा जिल्हा विकास आयुक्त म्हणूनही संबोधले जाते, ते जिल्हा विकासात महत्त्वाची भूमिका बजावतात."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "74 व्या घटनादुरुस्ती अधिनियमाबाबत खालीलपैकी कोणते विधान अयोग्य आहे ?",
    "question_english": "Which one of the following statements about 74th Constitutional Amendment Act is incorrect ?",
    "options_marathi": [
      "मुलतः ऑगस्ट 1989 मध्ये राजीव गांधी सरकार द्वारा 65 वे घटनादुरुस्ती विधेयक मांडले गेले त्यास लोकसभेने जरी मंजूरी दिली होती तरी राज्यसभेने मंजूरी न दिल्याने ते रद्द झाले.",
      "व्ही.पी. सिंग सरकारने सुधारित नगरपालिका विधेयक 1990 मध्ये मांडले होते परंतु लोकसभेच्या विसर्जनामुळे ते रद्द झाले.",
      "नरसिंहराव सरकारने सप्टेंबर 1992 मध्ये सुधारित नगरपालिका विधेयक मांडले आणि ते संसदेच्या दोन्ही सभागृहांनी डिसेंबर 1992 मध्ये 74 वी घटनादुरुस्ती म्हणून मंजूर केले. 1 एप्रिल 1993 पासून तो लागू झाला.",
      "वरीलपैकी एकही नाही."
    ],
    "options_english": [
      "Originally introduced as the 65th Amendment bill in August 1989 by the Rajiv Gandhi government although it was passed in the Lok Sabha but did not get assent of Rajya Sabha and hence lapsed.",
      "A revised Nagarpalika bill was introduced by V.P. Singh government in 1990 but lapsed as the Lok Sabha was dissolved.",
      "Narasimha Rao government introduced the modified Municipalities bill in Sept. 1992 and passed by the both Houses of Parliament in Dec. 1992 as the 74th amendment. It was brought into force on April 1, 1993.",
      "None of the above."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban Local Bodies - 74th CAA history)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap (Dates)",
    "explanation_english": "The 74th Constitutional Amendment Act, which gave constitutional status to Urban Local Bodies, was indeed introduced by the Narasimha Rao government in September 1992 and passed by both Houses of Parliament in December 1992. However, it came into force on **June 1, 1993**, not April 1, 1993. The date April 1, 1993, is incorrect for the 74th Amendment. The 73rd Amendment Act (Panchayati Raj) came into force on April 24, 1993.",
    "explanation_marathi": "74 वी घटनादुरुस्ती अधिनियम, ज्याने शहरी स्थानिक स्वराज्य संस्थांना घटनात्मक दर्जा दिला, तो नरसिंहराव सरकारने सप्टेंबर 1992 मध्ये मांडला आणि संसदेच्या दोन्ही सभागृहांनी डिसेंबर 1992 मध्ये मंजूर केला हे खरे आहे. तथापि, तो **1 जून 1993** रोजी लागू झाला, 1 एप्रिल 1993 रोजी नाही. 1 एप्रिल 1993 ही तारीख 74 व्या घटनादुरुस्तीसाठी चुकीची आहे. 73 वी घटनादुरुस्ती अधिनियम (पंचायती राज) 24 एप्रिल 1993 रोजी लागू झाला.",
    "options_breakdown": [
      {
        "option_text_english": "Originally introduced as the 65th Amendment bill in August 1989 by the Rajiv Gandhi government although it was passed in the Lok Sabha but did not get assent of Rajya Sabha and hence lapsed.",
        "option_text_marathi": "मुलतः ऑगस्ट 1989 मध्ये राजीव गांधी सरकार द्वारा 65 वे घटनादुरुस्ती विधेयक मांडले गेले त्यास लोकसभेने जरी मंजूरी दिली होती तरी राज्यसभेने मंजूरी न दिल्याने ते रद्द झाले.",
        "is_correct": true,
        "reason_english": "This statement is historically correct. The 65th Amendment Bill (Nagarpalika Bill) introduced by Rajiv Gandhi's government lapsed in Rajya Sabha.",
        "reason_marathi": "हे विधान ऐतिहासिकदृष्ट्या बरोबर आहे. राजीव गांधी सरकारने मांडलेले 65 वे घटनादुरुस्ती विधेयक (नगरपालिका विधेयक) राज्यसभेत मंजूर न झाल्याने रद्द झाले."
      },
      {
        "option_text_english": "A revised Nagarpalika bill was introduced by V.P. Singh government in 1990 but lapsed as the Lok Sabha was dissolved.",
        "option_marathi": "व्ही.पी. सिंग सरकारने सुधारित नगरपालिका विधेयक 1990 मध्ये मांडले होते परंतु लोकसभेच्या विसर्जनामुळे ते रद्द झाले.",
        "is_correct": true,
        "reason_english": "This statement is also historically correct. The V.P. Singh government's bill also lapsed due to political instability.",
        "reason_marathi": "हे विधान देखील ऐतिहासिकदृष्ट्या बरोबर आहे. व्ही.पी. सिंग सरकारच्या काळात मांडलेले विधेयक राजकीय अस्थिरतेमुळे रद्द झाले."
      },
      {
        "option_text_english": "Narasimha Rao government introduced the modified Municipalities bill in Sept. 1992 and passed by the both Houses of Parliament in Dec. 1992 as the 74th amendment. It was brought into force on April 1, 1993.",
        "option_text_marathi": "नरसिंहराव सरकारने सप्टेंबर 1992 मध्ये सुधारित नगरपालिका विधेयक मांडले आणि ते संसदेच्या दोन्ही सभागृहांनी डिसेंबर 1992 मध्ये 74 वी घटनादुरुस्ती म्हणून मंजूर केले. 1 एप्रिल 1993 पासून तो लागू झाला.",
        "is_correct": false,
        "reason_english": "This statement is incorrect because the 74th Constitutional Amendment Act came into force on June 1, 1993, not April 1, 1993.",
        "reason_marathi": "हे विधान चुकीचे आहे कारण 74 वी घटनादुरुस्ती अधिनियम 1 एप्रिल 1993 रोजी नव्हे, तर 1 जून 1993 रोजी लागू झाला."
      },
      {
        "option_text_english": "None of the above.",
        "option_text_marathi": "वरीलपैकी एकही नाही.",
        "is_correct": false,
        "reason_english": "Since statement (c) is incorrect, this option is not the answer.",
        "reason_marathi": "विधान (c) चुकीचे असल्याने, हा पर्याय उत्तर नाही."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "छावणी क्षेत्रपालिकेसंबंधी खालीलपैकी कोणते विधान सत्य आहे ?",
    "question_english": "Which one of the following statements about 'Cantonment Boards' is correct?",
    "options_marathi": [
      "छावणी क्षेत्रपालिका अधिनियम 2006 अन्वये 1924 चा छावणी अधिनियम रद्द करण्यात आला.",
      "छावणी क्षेत्रपालिकेचे अध्यक्ष आणि उपाध्यक्ष यांची निवड निर्वाचित सदस्य आपल्यामधून पाच वर्षाच्या कार्यकाळासाठी करतात.",
      "छावणी क्षेत्रपालिकांचे वर्गीकरण नागरी लोकसंख्येच्या आधारे दोन प्रकारात केले जाते.",
      "महाराष्ट्रात सहा छावणी क्षेत्रपालिका आहेत."
    ],
    "options_english": [
      "The Cantonment Act of 2006 has repealed the Cantonment Act of 1924.",
      "The President and the Vice-President of the board are elected by the elected members from amongst themselves for a term of five years.",
      "Cantonment boards are grouped into two categories on the basis of the civil population.",
      "There are six Cantonment boards in Maharashtra."
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Local Self-Government (Cantonment Boards)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Cantonment Boards are local self-government bodies for civilian population residing in cantonment areas. The Cantonments Act, 2006, replaced the earlier Cantonments Act, 1924, to modernize the administration of cantonments. The President of a Cantonment Board is the Station Commander of the cantonment, who is an ex-officio member and nominated by the Central Government, not elected by the members. The Vice-President is elected by the elected members. Cantonment boards are classified into four categories based on the civil population, not two. As of current data, there are seven Cantonment Boards in Maharashtra (Ahmednagar, Aurangabad, Dehu Road, Kamptee, Khadki, Kirkee, Pune).",
    "explanation_marathi": "छावणी मंडळे ही छावणी क्षेत्रातील नागरी लोकसंख्येसाठी स्थानिक स्वराज्य संस्था आहेत. छावणी अधिनियम, 2006 ने पूर्वीच्या 1924 च्या छावणी अधिनियमाची जागा घेतली, ज्यामुळे छावणी प्रशासनाचे आधुनिकीकरण झाले. छावणी मंडळाचे अध्यक्ष हे छावणीचे स्टेशन कमांडर असतात, जे पदसिद्ध सदस्य असतात आणि केंद्र सरकारद्वारे नामनिर्देशित केले जातात, सदस्यांद्वारे निवडले जात नाहीत. उपाध्यक्ष निर्वाचित सदस्यांमधून निवडले जातात. छावणी मंडळांचे वर्गीकरण नागरी लोकसंख्येच्या आधारावर चार प्रकारात केले जाते, दोन प्रकारात नाही. सध्याच्या आकडेवारीनुसार, महाराष्ट्रात सात छावणी मंडळे आहेत (अहमदनगर, औरंगाबाद, देहू रोड, कामठी, खडकी, किर्की, पुणे).",
    "options_breakdown": [
      {
        "option_text_english": "The Cantonment Act of 2006 has repealed the Cantonment Act of 1924.",
        "option_text_marathi": "छावणी क्षेत्रपालिका अधिनियम 2006 अन्वये 1924 चा छावणी अधिनियम रद्द करण्यात आला.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Cantonments Act, 2006, was enacted to replace the outdated Cantonments Act, 1924.",
        "reason_marathi": "हे विधान बरोबर आहे. छावणी अधिनियम, 2006 हा जुन्या 1924 च्या छावणी अधिनियमाची जागा घेण्यासाठी लागू करण्यात आला."
      },
      {
        "option_text_english": "The President and the Vice-President of the board are elected by the elected members from amongst themselves for a term of five years.",
        "option_text_marathi": "छावणी क्षेत्रपालिकेचे अध्यक्ष आणि उपाध्यक्ष यांची निवड निर्वाचित सदस्य आपल्यामधून पाच वर्षाच्या कार्यकाळासाठी करतात.",
        "is_correct": false,
        "reason_english": "The President of a Cantonment Board is the Station Commander (nominated by the Central Government), not elected by the members. Only the Vice-President is elected by the elected members.",
        "reason_marathi": "छावणी मंडळाचे अध्यक्ष हे स्टेशन कमांडर (केंद्र सरकारद्वारे नामनिर्देशित) असतात, त्यांची निवड सदस्यांद्वारे केली जात नाही. फक्त उपाध्यक्षांची निवड निर्वाचित सदस्यांद्वारे केली जाते."
      },
      {
        "option_text_english": "Cantonment boards are grouped into two categories on the basis of the civil population.",
        "option_text_marathi": "छावणी क्षेत्रपालिकांचे वर्गीकरण नागरी लोकसंख्येच्या आधारे दोन प्रकारात केले जाते.",
        "is_correct": false,
        "reason_english": "Cantonment boards are grouped into four categories based on the civil population, not two.",
        "reason_marathi": "छावणी मंडळांचे वर्गीकरण नागरी लोकसंख्येच्या आधारावर चार प्रकारात केले जाते, दोन प्रकारात नाही."
      },
      {
        "option_text_english": "There are six Cantonment boards in Maharashtra.",
        "option_text_marathi": "महाराष्ट्रात सहा छावणी क्षेत्रपालिका आहेत.",
        "is_correct": false,
        "reason_english": "There are seven Cantonment Boards in Maharashtra (Ahmednagar, Aurangabad, Dehu Road, Kamptee, Khadki, Kirkee, Pune).",
        "reason_marathi": "महाराष्ट्रामध्ये सात छावणी मंडळे आहेत (अहमदनगर, औरंगाबाद, देहू रोड, कामठी, खडकी, किर्की, पुणे)."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "स्वातंत्र्य प्राप्तीनंतर खालीलपैकी कोणते घटक जिल्हाधिकारी या पदाची भूमिका, दर्जा आणि अधिसत्ता बदलण्यास जबाबदार आहेत ? (a) संसदीय शासन पद्धतीचा स्विकार केल्यामुळे अधिकार आणि अधिसत्ता मंत्र्यांच्या हाती एकत्रित झाली. (b) जिल्हाधिकारी यांना खासदार, आमदार आणि स्थानिक राजकीय व सामाजिक वरिष्ठांशी संबंध ठेवावे लागतात. (c) पंचायत राज्य नव्या राजकीय वर्गाचा उदय होण्यास कारणीभूत झाला आहे. (d) राजकीय नेत्यांच्या दृष्टीने पोलीस हे विशेष महत्त्वाचे बनल्याचे दिसते.",
    "question_english": "Which of the following factors are responsible to change the role, status and authority of the office of the Collector after independence ? (a) Adoption of Parliamentary System of government has caused concentration of powers and authority in the hands of the Minister. (b) The District Collector has to deal with the M.P., MLA and local political and social bosses. (c) Panchayat Raj has led to the emergence of a new class of politicians. (d) The Police tend to become special importance to the political leadership.",
    "options_marathi": [
      "(a) आणि (c)",
      "(a), (b) आणि (c)",
      "(a), (c) आणि (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (c)",
      "(a), (b) and (c)",
      "(a), (c) and (d)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "District Administration (District Collector - Post-Independence changes)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "After India's independence, the role, status, and authority of the District Collector underwent significant changes. The adoption of a parliamentary system led to political executive (ministers) gaining more power, reducing the Collector's independent authority. The Collector now has to interact and often negotiate with elected representatives like MPs and MLAs, and local political leaders, which adds a political dimension to their administrative role. The introduction of Panchayati Raj Institutions created new centers of power at the local level, decentralizing authority and diminishing the Collector's traditional dominance. Furthermore, the police force, often under direct political influence, sometimes operates independently of the Collector, impacting their traditional role as District Magistrate. All these factors collectively contributed to the transformation of the Collector's office.",
    "explanation_marathi": "भारताच्या स्वातंत्र्यानंतर, जिल्हाधिकाऱ्याच्या भूमिका, दर्जा आणि अधिकारात महत्त्वपूर्ण बदल झाले. संसदीय शासन पद्धती स्वीकारल्यामुळे राजकीय कार्यकारी (मंत्री) अधिक शक्तिशाली झाले, ज्यामुळे जिल्हाधिकाऱ्याचा स्वतंत्र अधिकार कमी झाला. जिल्हाधिकाऱ्याला आता खासदार, आमदार आणि स्थानिक राजकीय नेत्यांसारख्या निवडून आलेल्या प्रतिनिधींशी संवाद साधावा लागतो आणि अनेकदा त्यांच्याशी वाटाघाटी कराव्या लागतात, ज्यामुळे त्यांच्या प्रशासकीय भूमिकेला राजकीय आयाम प्राप्त झाला आहे. पंचायत राज संस्थांच्या स्थापनेमुळे स्थानिक पातळीवर सत्तेची नवीन केंद्रे निर्माण झाली, ज्यामुळे अधिकारांचे विकेंद्रीकरण झाले आणि जिल्हाधिकाऱ्याचे पारंपरिक वर्चस्व कमी झाले. याव्यतिरिक्त, पोलीस दल, जे अनेकदा थेट राजकीय प्रभावाखाली असते, काहीवेळा जिल्हाधिकाऱ्यापासून स्वतंत्रपणे कार्य करते, ज्यामुळे जिल्हा दंडाधिकारी म्हणून त्यांच्या पारंपरिक भूमिकेवर परिणाम होतो. या सर्व घटकांनी एकत्रितपणे जिल्हाधिकाऱ्याच्या कार्यालयाच्या परिवर्तनास हातभार लावला.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason_english": "While (a) and (c) are correct factors, this option is incomplete as (b) and (d) are also correct.",
        "reason_marathi": "(a) आणि (c) हे योग्य घटक असले तरी, (b) आणि (d) देखील योग्य असल्याने हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason_english": "While (a), (b), and (c) are correct factors, this option is incomplete as (d) is also correct.",
        "reason_marathi": "(a), (b) आणि (c) हे योग्य घटक असले तरी, (d) देखील योग्य असल्याने हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) आणि (d)",
        "is_correct": false,
        "reason_english": "While (a), (c), and (d) are correct factors, this option is incomplete as (b) is also correct.",
        "reason_marathi": "(a), (c) आणि (d) हे योग्य घटक असले तरी, (b) देखील योग्य असल्याने हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "All the statements (a), (b), (c), and (d) correctly identify factors that have changed the role, status, and authority of the District Collector after independence.",
        "reason_marathi": "सर्व विधाने (a), (b), (c) आणि (d) स्वातंत्र्यानंतर जिल्हाधिकाऱ्याच्या भूमिका, दर्जा आणि अधिकारात बदल घडवून आणणाऱ्या घटकांना योग्यरित्या ओळखतात."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "जोड्या लावा : 'A' (राज्य) (a) आसाम (b) कर्नाटक (c) मध्य प्रदेश (d) अरुणाचल प्रदेश 'B' (जिल्हा परिषद/पंचायत समितीचे नांव) (i) अंचल समिती (ii) महकमा परिषद (iii) जिल्हा विकास परिषद (iv) जनपद पंचायत",
    "question_english": "Match the Pairs : 'A' (State) (a) Assam (b) Karnataka (c) Madhya Pradesh (d) Arunachal Pradesh 'B' (Name of Zilla Parishad/ Panchayat Samiti) (i) Aanchal Samiti (ii) Mahkama Parishad (iii) Zilla Vikas Parishad (iv) Janpad Panchayat",
    "options_marathi": [
      "(i) (ii) (iii) (iv)",
      "(ii) (iii) (iv) (i)",
      "(ii) (iv) (iii) (i)",
      "(i) (iii) (iv) (ii)"
    ],
    "options_english": [
      "(i) (ii) (iii) (iv)",
      "(ii) (iii) (iv) (i)",
      "(ii) (iv) (iii) (i)",
      "(i) (iii) (iv) (ii)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Panchayat Raj - Variations across states)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "Panchayati Raj Institutions have different names in various states, reflecting regional variations in their structure and nomenclature. In Assam, the intermediate level body is known as 'Mahkama Parishad' (sub-divisional level). In Karnataka, the district-level body was historically known as 'Zilla Vikas Parishad' (now Zilla Panchayat). In Madhya Pradesh, the block-level body is called 'Janpad Panchayat'. In Arunachal Pradesh, the block-level body is known as 'Anchal Samiti'. Therefore, the correct matching is (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i).",
    "explanation_marathi": "पंचायत राज संस्थांना विविध राज्यांमध्ये वेगवेगळी नावे आहेत, जी त्यांच्या रचना आणि नामकरणामधील प्रादेशिक भिन्नता दर्शवतात. आसाममध्ये, मध्यवर्ती स्तरावरील संस्थेला 'महकमा परिषद' (उपविभागीय स्तर) म्हणून ओळखले जाते. कर्नाटकात, जिल्हास्तरीय संस्थेला ऐतिहासिकदृष्ट्या 'जिल्हा विकास परिषद' (आता जिल्हा पंचायत) म्हणून ओळखले जात होते. मध्य प्रदेशात, तालुकास्तरीय संस्थेला 'जनपद पंचायत' म्हणतात. अरुणाचल प्रदेशात, तालुकास्तरीय संस्थेला 'अंचल समिती' म्हणून ओळखले जाते. म्हणून, योग्य जुळणी (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i) अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(i) (ii) (iii) (iv)",
        "option_text_marathi": "(i) (ii) (iii) (iv)",
        "is_correct": false,
        "reason_english": "This option does not match the correct pairings.",
        "reason_marathi": "हा पर्याय योग्य जुळणीशी जुळत नाही."
      },
      {
        "option_text_english": "(ii) (iii) (iv) (i)",
        "option_text_marathi": "(ii) (iii) (iv) (i)",
        "is_correct": true,
        "reason_english": "This option correctly matches: (a) Assam - (ii) Mahkama Parishad, (b) Karnataka - (iii) Zilla Vikas Parishad, (c) Madhya Pradesh - (iv) Janpad Panchayat, (d) Arunachal Pradesh - (i) Aanchal Samiti.",
        "reason_marathi": "हा पर्याय योग्यरित्या जुळतो: (a) आसाम - (ii) महकमा परिषद, (b) कर्नाटक - (iii) जिल्हा विकास परिषद, (c) मध्य प्रदेश - (iv) जनपद पंचायत, (d) अरुणाचल प्रदेश - (i) अंचल समिती."
      },
      {
        "option_text_english": "(ii) (iv) (iii) (i)",
        "option_text_marathi": "(ii) (iv) (iii) (i)",
        "is_correct": false,
        "reason_english": "This option does not match the correct pairings.",
        "reason_marathi": "हा पर्याय योग्य जुळणीशी जुळत नाही."
      },
      {
        "option_text_english": "(i) (iii) (iv) (ii)",
        "option_text_marathi": "(i) (iii) (iv) (ii)",
        "is_correct": false,
        "reason_english": "This option does not match the correct pairings.",
        "reason_marathi": "हा पर्याय योग्य जुळणीशी जुळत नाही."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "जिल्हा परिषदेच्या कार्याबाबत खालीलपैकी कोणते विधान (ने) बरोबर आहे (त) ? (a) ग्रामीण आणि शहरी लोकांना अत्यावश्यक सेवा व सवलती पुरविणे आणि जिल्ह्यासाठी विकास कार्यक्रमाचे नियोजन व अंमलबजावणी करणे. (b) शहरी भागात शाळा स्थापन करुन त्या चालविणे. (c) ग्रामीण भागात प्राथमिक आरोग्य केंद्र व दवाखाने सुरू करणे.",
    "question_english": "Which of the following statement(s) is/are true regarding the functions of Zilla Parishad ? (a) Provide essential services and facilities to the rural and urban Population and the Planning and Execution of the development programmes for the district. (b) Set up and run schools in urban areas. (c) Start primary health centers and hospitals in villages.",
    "options_marathi": [
      "(a) आणि (c)",
      "फक्त (c)",
      "फक्त (a)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (c)",
      "Only (c)",
      "Only (a)",
      "All the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Panchayat Raj - Zilla Parishad functions)",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word/Scope",
    "explanation_english": "The Zilla Parishad is the district-level body of the Panchayati Raj system, primarily responsible for the development and administration of **rural areas**. Statement (a) is incorrect because it mentions providing services to 'urban population' as well, which falls under the purview of Urban Local Bodies. Similarly, statement (b) is incorrect as Zilla Parishads do not set up and run schools in 'urban areas'. Their jurisdiction for education and other services is limited to rural areas. Statement (c) is correct as establishing and maintaining primary health centers and hospitals in villages is a key function of the Zilla Parishad to ensure healthcare access in rural regions.",
    "explanation_marathi": "जिल्हा परिषद ही पंचायत राज व्यवस्थेतील जिल्हास्तरीय संस्था आहे, जी प्रामुख्याने **ग्रामीण भागांच्या** विकास आणि प्रशासनासाठी जबाबदार आहे. विधान (a) चुकीचे आहे कारण त्यात 'शहरी लोकसंख्येला' सेवा पुरवण्याचा उल्लेख आहे, जे शहरी स्थानिक स्वराज्य संस्थांच्या कार्यक्षेत्रात येते. त्याचप्रमाणे, विधान (b) चुकीचे आहे कारण जिल्हा परिषदा 'शहरी भागात' शाळा स्थापन करून चालवत नाहीत. शिक्षण आणि इतर सेवांसाठी त्यांचे कार्यक्षेत्र ग्रामीण भागापुरते मर्यादित आहे. विधान (c) बरोबर आहे कारण ग्रामीण भागातील आरोग्य सेवा सुनिश्चित करण्यासाठी गावांमध्ये प्राथमिक आरोग्य केंद्रे आणि दवाखाने सुरू करणे आणि त्यांची देखभाल करणे हे जिल्हा परिषदेचे एक महत्त्वाचे कार्य आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect as Zilla Parishad's functions are primarily for rural areas, not urban. Statement (c) is correct.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण जिल्हा परिषदेची कार्ये प्रामुख्याने ग्रामीण भागासाठी आहेत, शहरी भागासाठी नाहीत. विधान (c) बरोबर आहे."
      },
      {
        "option_text_english": "Only (c)",
        "option_text_marathi": "फक्त (c)",
        "is_correct": true,
        "reason_english": "Statement (c) is correct. Zilla Parishads are responsible for establishing and running primary health centers and hospitals in villages.",
        "reason_marathi": "विधान (c) बरोबर आहे. जिल्हा परिषदा गावांमध्ये प्राथमिक आरोग्य केंद्रे आणि दवाखाने स्थापन करण्यासाठी आणि चालवण्यासाठी जबाबदार आहेत."
      },
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect because Zilla Parishad's functions are primarily for rural areas, not urban.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण जिल्हा परिषदेची कार्ये प्रामुख्याने ग्रामीण भागासाठी आहेत, शहरी भागासाठी नाहीत."
      },
      {
        "option_text_english": "All the above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "Statements (a) and (b) are incorrect due to the inclusion of 'urban' areas in Zilla Parishad's functions.",
        "reason_marathi": "विधान (a) आणि (b) चुकीचे आहेत कारण जिल्हा परिषदेच्या कार्यांमध्ये 'शहरी' भागांचा समावेश आहे."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "दुसऱ्या प्रशासकीय सुधार आयोगाने आपल्या सहाव्या अहवालात स्थानिक शासन आणि लोकशाही विकेन्द्रीकरणाबाबत कोणत्या शिफारशी केलेल्या आहेत ? (a) भ्रष्टाचार व कुप्रशासनावरील तक्रारी हाताळण्यासाठी स्थानिक संस्था लोकपालाची (Ombudsman) निर्मिती करण्यांत यावी. (b) जलदगतीने होणाऱ्या शहरीकरणाबाबतच्या समस्यांवरील उपाय सुचविण्यासाठी एक राष्ट्रीय आयोग स्थापन करण्यांत यावा. (c) महापौरांची थेट निवडणूक. (d) दहा लाखापेक्षा जास्त लोकसंख्या असलेल्या सर्व शहरांमध्ये महानगरीय वाहतूक प्राधिकरण स्थापन करण्यांत यावे.",
    "question_english": "Which are the recommendations of the Sixth Report of Second Administrative Reform Commission on Local government and Democratic Decentralisation ? (a) A local body Ombudsman to be constituted to look into complaints of corruption and mal-administration. (b) A National Commission on urbanisation to be setup to suggest steps to deal with rapid urbanisation. (c) Direct election of the Mayors. (d) Set-up a metropolitan transport authority in all cities of one million plus population.",
    "options_marathi": [
      "(a), (b) आणि (c)",
      "(a), (b) आणि (d)",
      "(b), (c) आणि (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a), (b) and (c)",
      "(a), (b) and (d)",
      "(b), (c) and (d)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Administrative Reforms (ARC Reports - Local Government)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Sixth Report of the Second Administrative Reforms Commission (ARC) on 'Local Governance - An inspiring journey into the future' made several key recommendations to strengthen local self-government and democratic decentralization. These recommendations included the establishment of a local body Ombudsman to address corruption and maladministration, the creation of a National Commission on Urbanisation to tackle issues arising from rapid urbanization, the direct election of Mayors for greater accountability and leadership, and the setting up of Metropolitan Transport Authorities in all cities with a population of one million or more to improve urban transport management. All the given statements are indeed recommendations made by the Second ARC.",
    "explanation_marathi": "दुसऱ्या प्रशासकीय सुधार आयोगाच्या 'स्थानिक शासन - भविष्याकडे एक प्रेरणादायी प्रवास' या सहाव्या अहवालात स्थानिक स्वराज्य संस्था आणि लोकशाही विकेंद्रीकरण मजबूत करण्यासाठी अनेक महत्त्वाच्या शिफारशी केल्या होत्या. या शिफारशींमध्ये भ्रष्टाचार आणि गैरकारभाराच्या तक्रारी हाताळण्यासाठी स्थानिक संस्था लोकपालाची स्थापना, जलद शहरीकरणामुळे उद्भवणाऱ्या समस्यांवर उपाय सुचवण्यासाठी राष्ट्रीय शहरीकरण आयोगाची निर्मिती, अधिक जबाबदारी आणि नेतृत्वासाठी महापौरांची थेट निवडणूक आणि शहरी वाहतूक व्यवस्थापनात सुधारणा करण्यासाठी दहा लाखांपेक्षा जास्त लोकसंख्या असलेल्या सर्व शहरांमध्ये महानगरीय वाहतूक प्राधिकरणाची स्थापना यांचा समावेश होता. दिलेली सर्व विधाने दुसऱ्या प्रशासकीय सुधार आयोगाने केलेल्या शिफारशी आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (d) is also a recommendation of the Second ARC.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (d) देखील दुसऱ्या प्रशासकीय सुधार आयोगाची शिफारस आहे."
      },
      {
        "option_text_english": "(a), (b) and (d)",
        "option_text_marathi": "(a), (b) आणि (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (c) is also a recommendation of the Second ARC.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (c) देखील दुसऱ्या प्रशासकीय सुधार आयोगाची शिफारस आहे."
      },
      {
        "option_text_english": "(b), (c) and (d)",
        "option_text_marathi": "(b), (c) आणि (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (a) is also a recommendation of the Second ARC.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (a) देखील दुसऱ्या प्रशासकीय सुधार आयोगाची शिफारस आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "All the statements (a), (b), (c), and (d) are correct recommendations made by the Sixth Report of the Second Administrative Reforms Commission on Local government and Democratic Decentralisation.",
        "reason_marathi": "विधान (a), (b), (c) आणि (d) ही सर्व दुसऱ्या प्रशासकीय सुधार आयोगाच्या सहाव्या अहवालातील स्थानिक शासन आणि लोकशाही विकेंद्रीकरणावरील योग्य शिफारशी आहेत."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "73 व्या घटनादुरुस्ती कायद्याची खालीलपैकी कोणती तरतूद (वैशिष्ट्य) ऐच्छिक आहे ?",
    "question_english": "Which of the following provisions (features) of the 73rd Amendment Act is voluntary ?",
    "options_marathi": [
      "ग्रामसभा स्थापन करणे",
      "सर्व स्तरांवर सर्व जागेवर प्रत्यक्ष निवडणूका",
      "निवडणूक लढविण्यासाठी किमान वय 21 वर्षे",
      "पंचायत राज संस्थांना स्वायत्त बनविणे"
    ],
    "options_english": [
      "Organisation of Gram Sabha.",
      "Direct elections to all seats at all levels.",
      "21 years to be the minimum age for contesting elections.",
      "Making Panchayat Raj as autonomous bodies."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Local Self-Government (Panchayat Raj - 73rd CAA - Compulsory vs. Voluntary provisions)",
    "difficulty": "Medium",
    "trap_detected": "Conceptual understanding",
    "explanation_english": "The 73rd Constitutional Amendment Act, 1992, introduced a three-tier Panchayati Raj system with both compulsory and voluntary provisions. Compulsory provisions include the organization of Gram Sabha, direct elections to all seats at all three levels, a minimum age of 21 years for contesting elections, and reservation of seats for SCs/STs and women. Voluntary provisions, left to the discretion of state legislatures, include giving voting rights to MPs/MLAs in PRIs, reservation for OBCs, and the extent of financial and administrative autonomy to be granted to Panchayati Raj Institutions. Therefore, making Panchayat Raj institutions autonomous bodies, including devolution of powers and functions, is a voluntary provision.",
    "explanation_marathi": "73 व्या घटनादुरुस्ती अधिनियमाद्वारे, 1992 मध्ये अनिवार्य आणि ऐच्छिक तरतुदींसह त्रिस्तरीय पंचायत राज व्यवस्था सुरू करण्यात आली. अनिवार्य तरतुदींमध्ये ग्रामसभेची स्थापना, तिन्ही स्तरांवरील सर्व जागांसाठी थेट निवडणुका, निवडणुका लढवण्यासाठी किमान वय 21 वर्षे आणि अनुसूचित जाती/जमाती आणि महिलांसाठी जागांचे आरक्षण यांचा समावेश आहे. राज्य विधानमंडळांच्या विवेकबुद्धीवर सोडलेल्या ऐच्छिक तरतुदींमध्ये पंचायत राज संस्थांमध्ये खासदार/आमदारांना मतदानाचा अधिकार देणे, इतर मागासवर्गीयांसाठी आरक्षण आणि पंचायत राज संस्थांना किती प्रमाणात आर्थिक आणि प्रशासकीय स्वायत्तता द्यायची याचा समावेश आहे. त्यामुळे, पंचायत राज संस्थांना स्वायत्त संस्था बनवणे, ज्यात अधिकार आणि कार्यांचे हस्तांतरण समाविष्ट आहे, ही एक ऐच्छिक तरतूद आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Organisation of Gram Sabha.",
        "option_text_marathi": "ग्रामसभा स्थापन करणे",
        "is_correct": false,
        "reason_english": "This is a compulsory provision of the 73rd Amendment Act.",
        "reason_marathi": "ही 73 व्या घटनादुरुस्ती अधिनियमाची एक अनिवार्य तरतूद आहे."
      },
      {
        "option_text_english": "Direct elections to all seats at all levels.",
        "option_text_marathi": "सर्व स्तरांवर सर्व जागेवर प्रत्यक्ष निवडणूका",
        "is_correct": false,
        "reason_english": "This is a compulsory provision of the 73rd Amendment Act.",
        "reason_marathi": "ही 73 व्या घटनादुरुस्ती अधिनियमाची एक अनिवार्य तरतूद आहे."
      },
      {
        "option_text_english": "21 years to be the minimum age for contesting elections.",
        "option_text_marathi": "निवडणूक लढविण्यासाठी किमान वय 21 वर्षे",
        "is_correct": false,
        "reason_english": "This is a compulsory provision of the 73rd Amendment Act.",
        "reason_marathi": "ही 73 व्या घटनादुरुस्ती अधिनियमाची एक अनिवार्य तरतूद आहे."
      },
      {
        "option_text_english": "Making Panchayat Raj as autonomous bodies.",
        "option_text_marathi": "पंचायत राज संस्थांना स्वायत्त बनविणे",
        "is_correct": true,
        "reason_english": "The extent of devolution of powers and functions to make Panchayati Raj institutions autonomous is a voluntary provision, left to the discretion of state legislatures.",
        "reason_marathi": "पंचायत राज संस्थांना स्वायत्त बनवण्यासाठी अधिकार आणि कार्यांचे हस्तांतरण किती प्रमाणात करायचे ही एक ऐच्छिक तरतूद आहे, जी राज्य विधानमंडळांच्या विवेकबुद्धीवर अवलंबून आहे."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "जिल्हाधिकाऱ्याच्या पदासंदर्भात खालीलपैकी कोणती विधाने बरोबर आहेत ? (a) वॉरन हेस्टिंग्जने हे पद निर्माण केले. (b) हे पद 1774 मध्ये निर्माण केले. (c) मुघल काळातील करोरी-फौजदारच्या जागी हे पद आहे. (d) भारत सरकारचा हत्ती, जिल्हाधिकारी या कासवाच्या पाठीवर उभा आहे अशी तुलना सर विल्यम विल्सन यांनी केली होती.",
    "question_english": "Which of the following are true about the office of District Collector ? (a) It was created by Warren Hastings. (b) It was created in 1774. (c) It succeeded the Karori-Faujdar of Mughal Period. (d) Sir William Wilson compared the District Collector to a tortoise on whose back stood the elephant of the Government of India.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(a), (b), (c) आणि (d)",
      "(a) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(a), (b), (c) and (d)",
      "(a) and (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "District Administration / District Collector",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The office of District Collector was created by Warren Hastings in 1772. It was abolished in 1774 and re-established in 1787. The Collector's role combined revenue collection (similar to Mughal 'Karori') and judicial/magisterial functions (similar to 'Faujdar'). The famous quote comparing the Collector to a tortoise on whose back stood the elephant of the Government of India was made by Sir George Campbell, not Sir William Wilson.",
    "explanation_marathi": "जिल्हाधिकाऱ्याचे पद वॉरन हेस्टिंग्जने 1772 मध्ये निर्माण केले होते. 1774 मध्ये ते रद्द करण्यात आले आणि 1787 मध्ये पुन्हा स्थापित करण्यात आले. जिल्हाधिकाऱ्याच्या भूमिकेत महसूल गोळा करणे (मुघल 'करोरी' प्रमाणे) आणि न्यायिक/दंडाधिकारी कार्ये (मुघल 'फौजदार' प्रमाणे) यांचा समावेश होता. जिल्हाधिकाऱ्याची तुलना 'कासवाच्या पाठीवर भारत सरकारचा हत्ती उभा आहे' अशी प्रसिद्ध तुलना सर जॉर्ज कॅम्पबेल यांनी केली होती, सर विल्यम विल्सन यांनी नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "(a) आणि (b)",
        "option_english": "(a) and (b)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. The office of District Collector was created in 1772, not 1774. While it was abolished in 1774, it was not created then.",
        "reason_marathi": "विधान (b) चुकीचे आहे. जिल्हाधिकाऱ्याचे पद 1772 मध्ये निर्माण केले होते, 1774 मध्ये नाही. जरी ते 1774 मध्ये रद्द केले गेले असले तरी, त्या वर्षी ते निर्माण केले गेले नव्हते."
      },
      {
        "option_number": 2,
        "option_marathi": "(b) आणि (c)",
        "option_english": "(b) and (c)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as the office was created in 1772, not 1774.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण हे पद 1772 मध्ये निर्माण केले होते, 1774 मध्ये नाही."
      },
      {
        "option_number": 3,
        "option_marathi": "(a), (b), (c) आणि (d)",
        "option_english": "(a), (b), (c) and (d)",
        "is_correct": false,
        "reason_english": "Statements (b) and (d) are incorrect. (b) The office was created in 1772, not 1774. (d) The quote is by Sir George Campbell, not Sir William Wilson.",
        "reason_marathi": "विधाने (b) आणि (d) चुकीची आहेत. (b) हे पद 1772 मध्ये निर्माण केले होते, 1774 मध्ये नाही. (d) हे विधान सर जॉर्ज कॅम्पबेल यांचे आहे, सर विल्यम विल्सन यांचे नाही."
      },
      {
        "option_number": 4,
        "option_marathi": "(a) आणि (c)",
        "option_english": "(a) and (c)",
        "is_correct": true,
        "reason_english": "Statement (a) is correct as Warren Hastings created the office in 1772. Statement (c) is correct as the Collector's role combined revenue and judicial functions, succeeding the Karori-Faujdar system.",
        "reason_marathi": "विधान (a) बरोबर आहे कारण वॉरन हेस्टिंग्जने 1772 मध्ये हे पद निर्माण केले. विधान (c) बरोबर आहे कारण जिल्हाधिकाऱ्याच्या भूमिकेत महसूल आणि न्यायिक कार्ये एकत्र केली गेली, ज्यामुळे करोरी-फौजदार प्रणालीची जागा घेतली."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "खालीलपैकी कोणते विधान चुकीचे आहे ?",
    "question_english": "Which one of the following statements is incorrect?",
    "options_marathi": [
      "भारतात 'जिल्हा' हा प्रशासनाचा मूलभूत क्षेत्रीय घटक आहे.",
      "मुलतः भारतीय राज्यघटनेने 'जिल्हा' हा शब्दप्रयोग अनुच्छेद 233 ते 236 व्यतिरिक्त अन्यत्र उल्लेख केलेला दिसत नाही.",
      "73 व्या आणि 74 व्या घटनादुरुस्ती अधिनियमाव्दारे 'जिल्हा' हा शब्दप्रयोग राज्यघटनेच्या भाग XI आणि XI A मध्ये अनेक ठिकाणी समाविष्ट केलेला आहे.",
      "वरीलपैकी एकही नाही."
    ],
    "options_english": [
      "'District' is the basic territorial unit of administration in India.",
      "Originally, the Constitution of India made no mention of the term 'district' except in Articles 233 to 236.",
      "The 73rd and 74th Amendment Acts included the term 'district' in the Constitution at many places under Part XI and XI A of the Constitution.",
      "None of the above."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "District Administration / Constitutional Provisions for Districts",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Statement (3) is incorrect because the 73rd and 74th Constitutional Amendment Acts added Parts IX (Panchayats) and IXA (Municipalities) to the Constitution, not Parts XI and XI A. These amendments extensively use the term 'district' in relation to local self-government and district planning committees.",
    "explanation_marathi": "विधान (3) चुकीचे आहे कारण 73 व्या आणि 74 व्या घटनादुरुस्ती अधिनियमांनी संविधानात भाग IX (पंचायती) आणि IXA (नगरपालिका) जोडले, भाग XI आणि XI A नाही. या दुरुस्त्यांमध्ये स्थानिक स्वराज्य संस्था आणि जिल्हा नियोजन समित्यांच्या संदर्भात 'जिल्हा' या शब्दाचा मोठ्या प्रमाणावर वापर केला आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "भारतात 'जिल्हा' हा प्रशासनाचा मूलभूत क्षेत्रीय घटक आहे.",
        "option_english": "'District' is the basic territorial unit of administration in India.",
        "is_correct": false,
        "reason_english": "This statement is correct. The district serves as the primary administrative unit in India.",
        "reason_marathi": "हे विधान बरोबर आहे. जिल्हा हा भारतातील प्रशासनाचा मूलभूत घटक आहे."
      },
      {
        "option_number": 2,
        "option_marathi": "मुलतः भारतीय राज्यघटनेने 'जिल्हा' हा शब्दप्रयोग अनुच्छेद 233 ते 236 व्यतिरिक्त अन्यत्र उल्लेख केलेला दिसत नाही.",
        "option_english": "Originally, the Constitution of India made no mention of the term 'district' except in Articles 233 to 236.",
        "is_correct": false,
        "reason_english": "This statement is correct. Articles 233-236 deal with District Judges and their appointment, which were the primary original mentions of 'district'.",
        "reason_marathi": "हे विधान बरोबर आहे. अनुच्छेद 233-236 जिल्हा न्यायाधीशांशी आणि त्यांच्या नियुक्तीशी संबंधित आहेत, जे 'जिल्हा' या शब्दाचे मूळ उल्लेख होते."
      },
      {
        "option_number": 3,
        "option_marathi": "73 व्या आणि 74 व्या घटनादुरुस्ती अधिनियमाव्दारे 'जिल्हा' हा शब्दप्रयोग राज्यघटनेच्या भाग XI आणि XI A मध्ये अनेक ठिकाणी समाविष्ट केलेला आहे.",
        "option_english": "The 73rd and 74th Amendment Acts included the term 'district' in the Constitution at many places under Part XI and XI A of the Constitution.",
        "is_correct": true,
        "reason_english": "This statement is incorrect. The 73rd and 74th Amendment Acts added Parts IX and IXA (not XI and XI A) to the Constitution, which extensively use the term 'district'.",
        "reason_marathi": "हे विधान चुकीचे आहे. 73 व्या आणि 74 व्या घटनादुरुस्ती अधिनियमांनी संविधानात भाग IX आणि IXA (भाग XI आणि XI A नाही) जोडले, ज्यात 'जिल्हा' या शब्दाचा मोठ्या प्रमाणावर वापर केला आहे."
      },
      {
        "option_number": 4,
        "option_marathi": "वरीलपैकी एकही नाही.",
        "option_english": "None of the above.",
        "is_correct": false,
        "reason_english": "Option 3 is an incorrect statement, so this option is not applicable.",
        "reason_marathi": "पर्याय 3 हे एक चुकीचे विधान आहे, त्यामुळे हा पर्याय लागू होत नाही."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "जर महाराष्ट्रातील जिल्हा परिषदेच्या एखाद्या विशेष सभेत एकूण परिषद सदस्यांपैकी ______ कमी नसेल इतक्या परिषद सदस्यांनी मुख्य कार्यकारी अधिकाऱ्यास अधिकार पदावरुन परत बोलावण्याची राज्यशासनाकडे मागणी करणाऱ्या ठरावाच्या बाजूने मत दिल्यास राज्य शासन अशा अधिकाऱ्यास परिषदेच्या सेवेतून परत बोलावून घेईल.",
    "question_english": "If at a special meeting of Zilla Parishad in Maharashtra, not less than ______ of the total number of councillors vote in favour of a resolution requesting the State Government to withdraw the Chief Executive Officer from office, the State Government shall withdraw such officer from service under the Parishad.",
    "options_marathi": [
      "एक-द्वितीयांश",
      "दोन-तृतीयांश",
      "तीन-चतुर्थांश",
      "दोन-पंचमांश"
    ],
    "options_english": [
      "One-Half",
      "Two-thirds",
      "Three-fourth",
      "Two-fifth"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Maharashtra) / Zilla Parishad",
    "difficulty": "Medium",
    "trap_detected": "Factual Detail",
    "explanation_english": "According to the Maharashtra Zilla Parishads and Panchayat Samitis Act, 1961, Section 239, a resolution for the withdrawal of the Chief Executive Officer (CEO) from service under the Zilla Parishad requires a special majority. Specifically, not less than two-thirds of the total number of councillors must vote in favour of such a resolution for the State Government to act upon it.",
    "explanation_marathi": "महाराष्ट्र जिल्हा परिषदा आणि पंचायत समित्या अधिनियम, 1961 च्या कलम 239 नुसार, जिल्हा परिषदेच्या सेवेतून मुख्य कार्यकारी अधिकाऱ्याला (CEO) परत बोलावण्याच्या ठरावासाठी विशेष बहुमताची आवश्यकता असते. विशेषतः, एकूण परिषद सदस्यांपैकी किमान दोन-तृतीयांश सदस्यांनी अशा ठरावाच्या बाजूने मतदान केल्यास राज्य शासन त्या अधिकाऱ्याला परत बोलावून घेईल.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "एक-द्वितीयांश",
        "option_english": "One-Half",
        "is_correct": false,
        "reason_english": "A simple majority (one-half) is not sufficient for the withdrawal of the CEO as per the Maharashtra Zilla Parishads and Panchayat Samitis Act.",
        "reason_marathi": "महाराष्ट्र जिल्हा परिषदा आणि पंचायत समित्या अधिनियमानुसार, मुख्य कार्यकारी अधिकाऱ्याला परत बोलावण्यासाठी साधे बहुमत (एक-द्वितीयांश) पुरेसे नाही."
      },
      {
        "option_number": 2,
        "option_marathi": "दोन-तृतीयांश",
        "option_english": "Two-thirds",
        "is_correct": true,
        "reason_english": "As per Section 239 of the Maharashtra Zilla Parishads and Panchayat Samitis Act, 1961, a resolution for the withdrawal of the CEO requires a majority of not less than two-thirds of the total number of councillors.",
        "reason_marathi": "महाराष्ट्र जिल्हा परिषदा आणि पंचायत समित्या अधिनियम, 1961 च्या कलम 239 नुसार, मुख्य कार्यकारी अधिकाऱ्याला परत बोलावण्याच्या ठरावासाठी एकूण परिषद सदस्यांपैकी किमान दोन-तृतीयांश बहुमताची आवश्यकता असते."
      },
      {
        "option_number": 3,
        "option_marathi": "तीन-चतुर्थांश",
        "option_english": "Three-fourth",
        "is_correct": false,
        "reason_english": "Three-fourth majority is a higher requirement than specified by the Act for this particular action.",
        "reason_marathi": "या विशिष्ट कृतीसाठी अधिनियमात नमूद केलेल्या आवश्यकतेपेक्षा तीन-चतुर्थांश बहुमत ही जास्त आवश्यकता आहे."
      },
      {
        "option_number": 4,
        "option_marathi": "दोन-पंचमांश",
        "option_english": "Two-fifth",
        "is_correct": false,
        "reason_english": "Two-fifth majority is not the specified requirement for the withdrawal of the CEO.",
        "reason_marathi": "मुख्य कार्यकारी अधिकाऱ्याला परत बोलावण्यासाठी दोन-पंचमांश बहुमत ही नमूद केलेली आवश्यकता नाही."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "कोणत्या समितीला 'महाराष्ट्रातील लोकशाही विकेंद्रीकरण समिती' सुद्धा म्हटले जाते ?",
    "question_english": "Which Committee is also known as Committee on Democratic Decentralisation in Maharashtra ?",
    "options_marathi": [
      "पी.बी. पाटील समिती",
      "अशोक मेहता समिती",
      "बोंगिरवार समिती",
      "वसंतराव नाईक समिती"
    ],
    "options_english": [
      "P.B. Patil Committee",
      "Ashok Mehta Committee",
      "Bongirwar Committee",
      "Vasantrao Naik Committee"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Local Self-Government (Committees)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Vasantrao Naik Committee was appointed by the Government of Maharashtra in 1960 to study and recommend measures for democratic decentralization in the state. Its recommendations led to the enactment of the Maharashtra Zilla Parishads and Panchayat Samitis Act, 1961, which established the three-tier Panchayati Raj system in Maharashtra.",
    "explanation_marathi": "वसंतराव नाईक समितीची नियुक्ती महाराष्ट्र शासनाने 1960 मध्ये राज्यातील लोकशाही विकेंद्रीकरणासाठी उपाययोजना सुचवण्यासाठी केली होती. त्यांच्या शिफारशींमुळे महाराष्ट्र जिल्हा परिषदा आणि पंचायत समित्या अधिनियम, 1961 लागू झाला, ज्याने महाराष्ट्रात त्रिस्तरीय पंचायत राज व्यवस्था स्थापित केली.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "पी.बी. पाटील समिती",
        "option_english": "P.B. Patil Committee",
        "is_correct": false,
        "reason_english": "The P.B. Patil Committee (1984) was formed to review the working of the Panchayati Raj system in Maharashtra, not to initially recommend democratic decentralization.",
        "reason_marathi": "पी.बी. पाटील समिती (1984) महाराष्ट्रातील पंचायत राज प्रणालीच्या कामकाजाचा आढावा घेण्यासाठी स्थापन करण्यात आली होती, लोकशाही विकेंद्रीकरणाची शिफारस करण्यासाठी नाही."
      },
      {
        "option_number": 2,
        "option_marathi": "अशोक मेहता समिती",
        "option_english": "Ashok Mehta Committee",
        "is_correct": false,
        "reason_english": "The Ashok Mehta Committee (1977) was a national-level committee appointed by the Central Government to review the working of Panchayati Raj Institutions in India.",
        "reason_marathi": "अशोक मेहता समिती (1977) ही केंद्र सरकारने भारतातील पंचायत राज संस्थांच्या कामकाजाचा आढावा घेण्यासाठी नियुक्त केलेली राष्ट्रीय स्तरावरील समिती होती."
      },
      {
        "option_number": 3,
        "option_marathi": "बोंगिरवार समिती",
        "option_english": "Bongirwar Committee",
        "is_correct": false,
        "reason_english": "The Bongirwar Committee (1970) was related to administrative reforms in Maharashtra, but not specifically known as the Committee on Democratic Decentralisation.",
        "reason_marathi": "बोंगिरवार समिती (1970) महाराष्ट्रातील प्रशासकीय सुधारणांशी संबंधित होती, परंतु तिला लोकशाही विकेंद्रीकरण समिती म्हणून ओळखले जात नाही."
      },
      {
        "option_number": 4,
        "option_marathi": "वसंतराव नाईक समिती",
        "option_english": "Vasantrao Naik Committee",
        "is_correct": true,
        "reason_english": "The Vasantrao Naik Committee (1960) is famously known as the Committee on Democratic Decentralisation in Maharashtra, whose recommendations led to the establishment of the Panchayati Raj system in the state.",
        "reason_marathi": "वसंतराव नाईक समिती (1960) महाराष्ट्रातील लोकशाही विकेंद्रीकरण समिती म्हणून प्रसिद्ध आहे, ज्यांच्या शिफारशींमुळे राज्यात पंचायत राज व्यवस्था स्थापन झाली."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "देशात पंचायत राज संस्थांना चालना देणाऱ्या 73 व्या घटनादुरुस्ती अधिनियमात खालीलपैकी कोणत्या तरतूद/दी केलेल्या आहेत ? (a) जिल्हा नियोजन समितीची संरचना करणे. (b) महिलांसाठी 50% जागांचे आरक्षण. (c) राज्य निर्वाचन आयोग आणि राज्य वित्त आयोगाची स्थापना. (d) सर्व स्तरांवरील सदस्यांची आणि अध्यक्षांची थेट / सरळ निवड.",
    "question_english": "The 73rd Constitutional Amendment Act which aims at promoting the Panchayat Raj Institutions in the country, provides for which of the following ? (a) Constitution of District Planning Committee. (b) 50% reservation of seats for women. (c) Establishment of State Election Commission and Finance Commission. (d) Direct elections of Members and Chairpersons at all levels.",
    "options_marathi": [
      "(a), (b) आणि (c)",
      "(a), (c) आणि (d)",
      "फक्त (a) आणि (b)",
      "फक्त (c)"
    ],
    "options_english": [
      "(a), (b) and (c)",
      "(a), (c) and (d)",
      "Only (a) and (b)",
      "Only (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Local Self-Government (73rd Amendment)",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail / Mixing Amendments",
    "explanation_english": "The 73rd Constitutional Amendment Act primarily deals with Panchayats. Statement (a) regarding the District Planning Committee (DPC) is a provision of the 74th Amendment Act (Article 243ZD), not the 73rd. Statement (b) is incorrect as the 73rd Amendment mandates not less than one-third reservation for women, not 50% (though some states have implemented 50%). Statement (d) is incorrect because while members at all levels are directly elected, chairpersons at the intermediate and district levels are elected indirectly. Only statement (c) is correct, as the 73rd Amendment mandates the establishment of a State Election Commission (Article 243K) and a State Finance Commission (Article 243I).",
    "explanation_marathi": "73 वी घटनादुरुस्ती अधिनियम प्रामुख्याने पंचायतींशी संबंधित आहे. विधान (a) जिल्हा नियोजन समिती (DPC) संदर्भात 74 व्या घटनादुरुस्ती अधिनियमाची (अनुच्छेद 243ZD) तरतूद आहे, 73 व्या दुरुस्तीची नाही. विधान (b) चुकीचे आहे कारण 73 वी दुरुस्ती महिलांसाठी किमान एक-तृतीयांश आरक्षणाची तरतूद करते, 50% ची नाही (जरी काही राज्यांनी 50% लागू केले असले तरी). विधान (d) चुकीचे आहे कारण सर्व स्तरांवरील सदस्य थेट निवडले जातात, परंतु मध्यवर्ती आणि जिल्हा स्तरावरील अध्यक्षांची निवड अप्रत्यक्षपणे होते. फक्त विधान (c) बरोबर आहे, कारण 73 वी दुरुस्ती राज्य निवडणूक आयोग (अनुच्छेद 243K) आणि राज्य वित्त आयोग (अनुच्छेद 243I) स्थापन करणे अनिवार्य करते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "(a), (b) आणि (c)",
        "option_english": "(a), (b) and (c)",
        "is_correct": false,
        "reason_english": "Statements (a) and (b) are incorrect. (a) is part of the 74th Amendment, and (b) specifies 50% reservation, whereas the 73rd Amendment mandates 1/3rd.",
        "reason_marathi": "विधाने (a) आणि (b) चुकीची आहेत. (a) हे 74 व्या दुरुस्तीचा भाग आहे, आणि (b) 50% आरक्षणाची तरतूद करते, तर 73 वी दुरुस्ती 1/3 आरक्षणाची तरतूद करते."
      },
      {
        "option_number": 2,
        "option_marathi": "(a), (c) आणि (d)",
        "option_english": "(a), (c) and (d)",
        "is_correct": false,
        "reason_english": "Statements (a) and (d) are incorrect. (a) is part of the 74th Amendment, and (d) is incorrect regarding direct election of chairpersons at all levels.",
        "reason_marathi": "विधाने (a) आणि (d) चुकीची आहेत. (a) हे 74 व्या दुरुस्तीचा भाग आहे, आणि (d) सर्व स्तरांवरील अध्यक्षांच्या थेट निवडीबाबत चुकीचे आहे."
      },
      {
        "option_number": 3,
        "option_marathi": "फक्त (a) आणि (b)",
        "option_english": "Only (a) and (b)",
        "is_correct": false,
        "reason_english": "Both statements (a) and (b) are incorrect as explained above.",
        "reason_marathi": "वरील स्पष्टीकरणानुसार, दोन्ही विधाने (a) आणि (b) चुकीची आहेत."
      },
      {
        "option_number": 4,
        "option_marathi": "फक्त (c)",
        "option_english": "Only (c)",
        "is_correct": true,
        "reason_english": "Statement (c) is correct. The 73rd Amendment mandates the establishment of a State Election Commission (Article 243K) and a State Finance Commission (Article 243I).",
        "reason_marathi": "विधान (c) बरोबर आहे. 73 वी दुरुस्ती राज्य निवडणूक आयोग (अनुच्छेद 243K) आणि राज्य वित्त आयोग (अनुच्छेद 243I) स्थापन करणे अनिवार्य करते."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "खालीलपैकी कोणाच्या अनुमोदनाने सर्वोच्च न्यायालय दिल्ली सोडून भारतातील इतर ठिकाणी सुद्धा चालविले जाऊ शकते ?",
    "question_english": "As per whose approval the Supreme Court can sit at any other place in India, other than Delhi :",
    "options_marathi": [
      "भारताचे मुख्य न्यायमूर्ती",
      "भारताचे पंतप्रधान",
      "भारताचे राष्ट्रपती",
      "वरीलपैकी कोणीही नाही"
    ],
    "options_english": [
      "Chief Justice of India",
      "The Prime Minister of India",
      "The President of India",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Judiciary (Supreme Court)",
    "difficulty": "Easy",
    "trap_detected": "Nuance in Authority",
    "explanation_english": "Article 130 of the Indian Constitution states that the Supreme Court shall sit in Delhi or in such other place or places, as the Chief Justice of India may, with the approval of the President, from time to time, appoint. The question specifically asks for 'whose approval', which is the President.",
    "explanation_marathi": "भारतीय संविधानाच्या अनुच्छेद 130 नुसार, सर्वोच्च न्यायालय दिल्लीत किंवा इतर ठिकाणी बसू शकते, जे भारताचे सरन्यायाधीश राष्ट्रपतींच्या मान्यतेने वेळोवेळी निश्चित करतील. प्रश्न विशेषतः 'कोणाच्या अनुमोदनाने' असे विचारतो, जे राष्ट्रपती आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "भारताचे मुख्य न्यायमूर्ती",
        "option_english": "Chief Justice of India",
        "is_correct": false,
        "reason_english": "The Chief Justice of India proposes the place, but requires the President's approval.",
        "reason_marathi": "भारताचे सरन्यायाधीश ठिकाण प्रस्तावित करतात, परंतु त्यांना राष्ट्रपतींची मान्यता आवश्यक असते."
      },
      {
        "option_number": 2,
        "option_marathi": "भारताचे पंतप्रधान",
        "option_english": "The Prime Minister of India",
        "is_correct": false,
        "reason_english": "The Prime Minister has no role in deciding the sitting place of the Supreme Court.",
        "reason_marathi": "सर्वोच्च न्यायालयाच्या बैठकीचे ठिकाण ठरवण्यात पंतप्रधानांची कोणतीही भूमिका नसते."
      },
      {
        "option_number": 3,
        "option_marathi": "भारताचे राष्ट्रपती",
        "option_english": "The President of India",
        "is_correct": true,
        "reason_english": "As per Article 130, the Chief Justice of India can appoint other places for the Supreme Court to sit, but only with the approval of the President.",
        "reason_marathi": "अनुच्छेद 130 नुसार, भारताचे सरन्यायाधीश सर्वोच्च न्यायालयासाठी इतर ठिकाणे निश्चित करू शकतात, परंतु त्यासाठी राष्ट्रपतींची मान्यता आवश्यक असते."
      },
      {
        "option_number": 4,
        "option_marathi": "वरीलपैकी कोणीही नाही",
        "option_english": "None of the above",
        "is_correct": false,
        "reason_english": "The President's approval is explicitly required.",
        "reason_marathi": "राष्ट्रपतींची मान्यता स्पष्टपणे आवश्यक आहे."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "खालीलपैकी भारतीय संविधानाच्या कोणत्या अनुच्छेदाने भारताच्या सर्वोच्च न्यायालयाला स्वेच्छा अधिकारक्षेत्र (विवेकाधिकार) प्रदान केले आहे ?",
    "question_english": "Which of the following article of Constitution of India has conferred Discretionary Jurisdiction to the Supreme Court of India ?",
    "options_marathi": [
      "अनुच्छेद 141",
      "अनुच्छेद 142",
      "अनुच्छेद 136",
      "अनुच्छेद 226"
    ],
    "options_english": [
      "Article 141",
      "Article 142",
      "Article 136",
      "Article 226"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Judiciary (Supreme Court Jurisdiction)",
    "difficulty": "Medium",
    "trap_detected": "Confusing Articles",
    "explanation_english": "Article 136 of the Indian Constitution grants the Supreme Court the power to grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India. This is known as the Supreme Court's discretionary jurisdiction or Special Leave Petition (SLP) power.",
    "explanation_marathi": "भारतीय संविधानाचा अनुच्छेद 136 सर्वोच्च न्यायालयाला भारतातील कोणत्याही न्यायालय किंवा न्यायाधिकरणाने दिलेल्या कोणत्याही निर्णय, हुकूम, निर्धारण, शिक्षा किंवा आदेशाविरुद्ध विशेष परवानगीने अपील करण्याची शक्ती प्रदान करतो. याला सर्वोच्च न्यायालयाचे स्वेच्छा अधिकारक्षेत्र किंवा विशेष परवानगी याचिका (SLP) शक्ती म्हणून ओळखले जाते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "अनुच्छेद 141",
        "option_english": "Article 141",
        "is_correct": false,
        "reason_english": "Article 141 states that the law declared by the Supreme Court shall be binding on all courts within the territory of India. It does not confer discretionary jurisdiction.",
        "reason_marathi": "अनुच्छेद 141 असे नमूद करतो की सर्वोच्च न्यायालयाने घोषित केलेला कायदा भारतातील सर्व न्यायालयांवर बंधनकारक असेल. तो स्वेच्छा अधिकारक्षेत्र प्रदान करत नाही."
      },
      {
        "option_number": 2,
        "option_marathi": "अनुच्छेद 142",
        "option_english": "Article 142",
        "is_correct": false,
        "reason_english": "Article 142 deals with the enforcement of decrees and orders of the Supreme Court and orders as to discovery, etc., to do 'complete justice'. It is not about discretionary jurisdiction to hear appeals.",
        "reason_marathi": "अनुच्छेद 142 सर्वोच्च न्यायालयाच्या आदेशांची आणि डिक्रींची अंमलबजावणी आणि 'संपूर्ण न्याय' देण्यासाठीच्या आदेशांशी संबंधित आहे. हे अपील ऐकण्याच्या स्वेच्छा अधिकारक्षेत्राबद्दल नाही."
      },
      {
        "option_number": 3,
        "option_marathi": "अनुच्छेद 136",
        "option_english": "Article 136",
        "is_correct": true,
        "reason_english": "Article 136 confers special leave to appeal to the Supreme Court, which is its discretionary jurisdiction, allowing it to hear appeals from any court or tribunal.",
        "reason_marathi": "अनुच्छेद 136 सर्वोच्च न्यायालयाला विशेष परवानगीने अपील करण्याची शक्ती प्रदान करतो, जे त्याचे स्वेच्छा अधिकारक्षेत्र आहे, ज्यामुळे ते कोणत्याही न्यायालय किंवा न्यायाधिकरणाकडून अपील ऐकू शकते."
      },
      {
        "option_number": 4,
        "option_marathi": "अनुच्छेद 226",
        "option_english": "Article 226",
        "is_correct": false,
        "reason_english": "Article 226 confers writ jurisdiction on High Courts, not the Supreme Court's discretionary jurisdiction.",
        "reason_marathi": "अनुच्छेद 226 उच्च न्यायालयांना रिट अधिकारक्षेत्र प्रदान करतो, सर्वोच्च न्यायालयाला स्वेच्छा अधिकारक्षेत्र नाही."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "शिर्षस्थानी ते तळस्थानी या क्रमाने खालील न्यायालयांचा योग्य क्रम कोणता आहे ? (a) महानगर दंडाधिकारी (b) सहाय्यक सत्र न्यायाधीश (c) उच्च न्यायालय (d) मुख्य न्यायदंडाधिकारी",
    "question_english": "Which is the proper sequence of the court from top to bottom ? (a) Metropolitan Magistrate (b) Assistant Sessions Judge (c) High Court (d) Chief Judicial Magistrate",
    "options_marathi": [
      "(c), (d), (b), (a)",
      "(c), (b), (d), (a)",
      "(a), (b), (c), (d)",
      "(b), (c), (a), (d)"
    ],
    "options_english": [
      "(c), (d), (b), (a)",
      "(c), (b), (d), (a)",
      "(a), (b), (c), (d)",
      "(b), (c), (a), (d)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Judiciary (Court Hierarchy)",
    "difficulty": "Medium",
    "trap_detected": "Confusing Hierarchy",
    "explanation_english": "The hierarchy of courts from top to bottom is as follows: High Court is at the top among the given options. Below the High Court are the Sessions Courts (presided over by Sessions Judges, Additional Sessions Judges, and Assistant Sessions Judges). Below the Sessions Courts are the Chief Judicial Magistrate (in rural areas) and Chief Metropolitan Magistrate (in metropolitan areas). Further below are the Judicial Magistrate First Class (in rural areas) and Metropolitan Magistrate (in metropolitan areas). Therefore, the correct sequence is High Court (c), Assistant Sessions Judge (b), Chief Judicial Magistrate (d), and Metropolitan Magistrate (a).",
    "explanation_marathi": "न्यायालयांची वरपासून खालपर्यंतची पदानुक्रम खालीलप्रमाणे आहे: दिलेल्या पर्यायांमध्ये उच्च न्यायालय सर्वोच्च स्थानी आहे. उच्च न्यायालयाच्या खाली सत्र न्यायालये (सत्र न्यायाधीश, अतिरिक्त सत्र न्यायाधीश आणि सहाय्यक सत्र न्यायाधीश यांच्या अध्यक्षतेखाली) येतात. सत्र न्यायालयांच्या खाली मुख्य न्यायदंडाधिकारी (ग्रामीण भागात) आणि मुख्य महानगर दंडाधिकारी (महानगर भागात) येतात. त्याखाली प्रथम श्रेणी न्यायदंडाधिकारी (ग्रामीण भागात) आणि महानगर दंडाधिकारी (महानगर भागात) येतात. म्हणून, योग्य क्रम उच्च न्यायालय (c), सहाय्यक सत्र न्यायाधीश (b), मुख्य न्यायदंडाधिकारी (d) आणि महानगर दंडाधिकारी (a) असा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "(c), (d), (b), (a)",
        "option_english": "(c), (d), (b), (a)",
        "is_correct": false,
        "reason_english": "This sequence incorrectly places Chief Judicial Magistrate above Assistant Sessions Judge.",
        "reason_marathi": "हा क्रम मुख्य न्यायदंडाधिकाऱ्याला सहाय्यक सत्र न्यायाधीशांच्या वर चुकीच्या पद्धतीने ठेवतो."
      },
      {
        "option_number": 2,
        "option_marathi": "(c), (b), (d), (a)",
        "option_english": "(c), (b), (d), (a)",
        "is_correct": true,
        "reason_english": "This sequence correctly represents the hierarchy: High Court > Assistant Sessions Judge (part of Sessions Court) > Chief Judicial Magistrate > Metropolitan Magistrate.",
        "reason_marathi": "हा क्रम पदानुक्रम योग्यरित्या दर्शवतो: उच्च न्यायालय > सहाय्यक सत्र न्यायाधीश (सत्र न्यायालयाचा भाग) > मुख्य न्यायदंडाधिकारी > महानगर दंडाधिकारी."
      },
      {
        "option_number": 3,
        "option_marathi": "(a), (b), (c), (d)",
        "option_english": "(a), (b), (c), (d)",
        "is_correct": false,
        "reason_english": "This sequence is incorrect as it places lower courts at the top.",
        "reason_marathi": "हा क्रम चुकीचा आहे कारण तो कनिष्ठ न्यायालयांना शीर्षस्थानी ठेवतो."
      },
      {
        "option_number": 4,
        "option_marathi": "(b), (c), (a), (d)",
        "option_english": "(b), (c), (a), (d)",
        "is_correct": false,
        "reason_english": "This sequence is incorrect and does not follow the proper judicial hierarchy.",
        "reason_marathi": "हा क्रम चुकीचा आहे आणि योग्य न्यायिक पदानुक्रमाचे पालन करत नाही."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "एखादी व्यक्ती सर्वोच्च न्यायालयाच्या न्यायाधीश पदी नियुक्तीस पात्र असणार नाही जो पर्यंत तो भारताचा नागरिक असणार नाही, आणि (a) एखाद्या उच्च न्यायालयाचा अथवा दोन किंवा अधिक न्यायालयांची निदान सलग 5 वर्षे न्यायाधीश किंवा, (b) एखाद्या उच्च न्यायालयाचा अथवा अशा दोन किंवा अधिक न्यायालयांचा निदान सलग 10 वर्ष अधिवक्ता किंवा, (c) राष्ट्रपतींच्या मते विख्यात विधीवेत्ता किंवा, (d) तो जिल्हा व सत्र न्यायालयात सलग 15 वर्षे अधिवक्ता असावा.",
    "question_english": "A person shall not be qualified for appointment as Judge of the Supreme Court unless he is a citizen of India and (a) has been for last 5 yrs a Judge of a High Court or of two or more such Courts in succession, or (b) has been for at least 10 yrs an advocate of a High Court or of two or more such Courts of succession, or (c) is in the opinion of the President, a distinguished Jurists, or (d) has been Practicing in sessions court for at least 15 yrs.",
    "options_marathi": [
      "पर्याय (b), (c) आणि (d) योग्य आहेत",
      "पर्याय (a), (b) आणि (c) योग्य आहेत",
      "पर्याय (a), (c) आणि (d) योग्य आहेत",
      "पर्याय (a), (b) आणि (d) योग्य आहेत"
    ],
    "options_english": [
      "option (b), (c) and (d) are correct",
      "option (a), (b) and (c) are correct",
      "option (a), (c) and (d) are correct",
      "option (a), (b) and (d) are correct"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Judiciary (Supreme Court Judges Qualifications)",
    "difficulty": "Easy",
    "trap_detected": "Irrelevant Option",
    "explanation_english": "Article 124(3) of the Indian Constitution lays down the qualifications for appointment as a Judge of the Supreme Court. A person must be a citizen of India and either: (a) have been a Judge of a High Court for at least five years, or (b) have been an advocate of a High Court for at least ten years, or (c) be, in the opinion of the President, a distinguished jurist. Statement (d) about practicing in a sessions court for 15 years is not a qualification for a Supreme Court Judge.",
    "explanation_marathi": "भारतीय संविधानाचा अनुच्छेद 124(3) सर्वोच्च न्यायालयाच्या न्यायाधीशपदी नियुक्तीसाठी पात्रता निश्चित करतो. व्यक्ती भारताचा नागरिक असणे आवश्यक आहे आणि एकतर: (a) किमान पाच वर्षे उच्च न्यायालयाचा न्यायाधीश असावा, किंवा (b) किमान दहा वर्षे उच्च न्यायालयाचा वकील असावा, किंवा (c) राष्ट्रपतींच्या मते एक प्रतिष्ठित कायदेपंडित असावा. (d) सत्र न्यायालयात 15 वर्षे वकिली करण्याचा अनुभव हे सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी पात्रता नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "पर्याय (b), (c) आणि (d) योग्य आहेत",
        "option_english": "option (b), (c) and (d) are correct",
        "is_correct": false,
        "reason_english": "Statement (d) is not a qualification for a Supreme Court Judge.",
        "reason_marathi": "विधान (d) हे सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी पात्रता नाही."
      },
      {
        "option_number": 2,
        "option_marathi": "पर्याय (a), (b) आणि (c) योग्य आहेत",
        "option_english": "option (a), (b) and (c) are correct",
        "is_correct": true,
        "reason_english": "Statements (a), (b), and (c) are the three alternative qualifications for appointment as a Supreme Court Judge, in addition to being a citizen of India, as per Article 124(3).",
        "reason_marathi": "अनुच्छेद 124(3) नुसार, भारताचा नागरिक असण्याव्यतिरिक्त, (a), (b) आणि (c) ही सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्तीसाठी तीन पर्यायी पात्रता आहेत."
      },
      {
        "option_number": 3,
        "option_marathi": "पर्याय (a), (c) आणि (d) योग्य आहेत",
        "option_english": "option (a), (c) and (d) are correct",
        "is_correct": false,
        "reason_english": "Statement (d) is not a qualification for a Supreme Court Judge.",
        "reason_marathi": "विधान (d) हे सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी पात्रता नाही."
      },
      {
        "option_number": 4,
        "option_marathi": "पर्याय (a), (b) आणि (d) योग्य आहेत",
        "option_english": "option (a), (b) and (d) are correct",
        "is_correct": false,
        "reason_english": "Statement (d) is not a qualification for a Supreme Court Judge.",
        "reason_marathi": "विधान (d) हे सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी पात्रता नाही."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "खालील दोन विधानांचे अवलोकन करा : (a) प्रत्येक राज्यासाठी एक उच्च न्यायालय असेल. (b) प्रत्येक न्यायालय हे अभिलेख न्यायालय असेल आणि त्यास आपल्या अवमानाबद्दल शिक्षा करण्याचा अधिकारासह अशा न्यायालयाचे सर्व अधिकार असतील.",
    "question_english": "Analyse the following two statements : (a) There shall be a High Court for each state. (b) Every High Court shall be a Court of records and Shall have all powers of such a court including the power to punish for contempt of itself.",
    "options_marathi": [
      "(a) विधान अचूक आहे पण (b) चूक आहे.",
      "(a) आणि (b) दोन्ही विधाने अचूक आहेत.",
      "विधान (b) हे (a) विधानाशी संबंधित नाही.",
      "दोन्ही विधाने चूक आहेत."
    ],
    "options_english": [
      "(a) is correct but (b) is incorrect.",
      "(a) and (b) both statements are correct.",
      "(b) is not related to (a).",
      "Both the statements are incorrect."
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Judiciary (High Courts)",
    "difficulty": "Easy",
    "trap_detected": "Nuance in Constitutional Articles",
    "explanation_english": "Statement (a) is correct. Article 214 of the Indian Constitution states, 'There shall be a High Court for each State.' While Article 231 allows for a common High Court for two or more States, Article 214 establishes the general principle. Statement (b) is also correct. Article 215 declares that 'Every High Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself.' Therefore, both statements are accurate.",
    "explanation_marathi": "विधान (a) बरोबर आहे. भारतीय संविधानाचा अनुच्छेद 214 असे नमूद करतो की, 'प्रत्येक राज्यासाठी एक उच्च न्यायालय असेल.' जरी अनुच्छेद 231 दोन किंवा अधिक राज्यांसाठी एक समान उच्च न्यायालय स्थापन करण्याची परवानगी देत ​​असले तरी, अनुच्छेद 214 सामान्य तत्त्व स्थापित करतो. विधान (b) देखील बरोबर आहे. अनुच्छेद 215 असे घोषित करतो की, 'प्रत्येक उच्च न्यायालय अभिलेख न्यायालय असेल आणि त्याला स्वतःच्या अवमानाबद्दल शिक्षा करण्याच्या अधिकारासह अशा न्यायालयाचे सर्व अधिकार असतील.' म्हणून, दोन्ही विधाने अचूक आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_marathi": "(a) विधान अचूक आहे पण (b) चूक आहे.",
        "option_english": "(a) is correct but (b) is incorrect.",
        "is_correct": false,
        "reason_english": "Statement (b) is correct as per Article 215 of the Constitution.",
        "reason_marathi": "संविधानाच्या अनुच्छेद 215 नुसार विधान (b) बरोबर आहे."
      },
      {
        "option_number": 2,
        "option_marathi": "(a) आणि (b) दोन्ही विधाने अचूक आहेत.",
        "option_english": "(a) and (b) both statements are correct.",
        "is_correct": true,
        "reason_english": "Statement (a) is correct as per Article 214, and statement (b) is correct as per Article 215 of the Indian Constitution.",
        "reason_marathi": "भारतीय संविधानाच्या अनुच्छेद 214 नुसार विधान (a) बरोबर आहे आणि अनुच्छेद 215 नुसार विधान (b) बरोबर आहे."
      },
      {
        "option_number": 3,
        "option_marathi": "विधान (b) हे (a) विधानाशी संबंधित नाही.",
        "option_english": "(b) is not related to (a).",
        "is_correct": false,
        "reason_english": "Both statements pertain to the High Courts and their constitutional provisions, making them related in context.",
        "reason_marathi": "दोन्ही विधाने उच्च न्यायालये आणि त्यांच्या घटनात्मक तरतुदींशी संबंधित आहेत, त्यामुळे ती संदर्भात संबंधित आहेत."
      },
      {
        "option_number": 4,
        "option_marathi": "दोन्ही विधाने चूक आहेत.",
        "option_english": "Both the statements are incorrect.",
        "is_correct": false,
        "reason_english": "Both statements are correct as per the Indian Constitution.",
        "reason_marathi": "भारतीय संविधानानुसार दोन्ही विधाने बरोबर आहेत."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "गरीबांचा वर्ग ओळखण्याचे आधार काय आहेत ? (a) भूमिहीन शेतमजूर (b) ग्रामीण व शहरी गरीब व्यक्ती (c) अल्प व सिमांत भूधारक मजूर (d) अशिक्षीत व्यक्ती",
    "question_english": "What are the base for Identification of class of Poor? (a) Landless agricultural labour (b) Rural and urban poor person (c) Small and marginal holding labour (d) Uneducated person",
    "options_marathi": [
      "(a) आणि (b)",
      "(a) आणि (c)",
      "फक्त (b)",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "(a) and (c)",
      "Only (b)",
      "All above"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Poverty Identification/Classification",
    "difficulty": "Medium",
    "trap_detected": "Broad Generalization (Option b), All of the above",
    "explanation_english": "In India, the identification of the poor class primarily relies on socio-economic indicators. Landless agricultural laborers and small and marginal farmers (or those with small landholdings) are considered among the most vulnerable sections of society and are key categories used to identify the rural poor. These groups often lack stable income, assets, and are highly susceptible to economic shocks. While urban poor and uneducated individuals are also part of the broader poor population, the specific bases for classification often focus on occupational and asset ownership status to pinpoint the most deprived.",
    "explanation_marathi": "भारतात, गरीब वर्गाची ओळख प्रामुख्याने सामाजिक-आर्थिक निर्देशकांवर अवलंबून असते. भूमिहीन शेतमजूर आणि अल्प व सीमांत भूधारक शेतकरी (किंवा ज्यांच्याकडे कमी जमीन आहे) हे समाजातील सर्वात असुरक्षित घटकांपैकी मानले जातात आणि ग्रामीण गरिबांना ओळखण्यासाठी ते प्रमुख श्रेणी आहेत. या गटांकडे अनेकदा स्थिर उत्पन्न, मालमत्ता नसते आणि ते आर्थिक धक्क्यांना अत्यंत संवेदनशील असतात. शहरी गरीब आणि अशिक्षित व्यक्ती देखील मोठ्या गरीब लोकसंख्येचा भाग असले तरी, वर्गीकरणाचे विशिष्ट आधार अनेकदा व्यावसायिक आणि मालमत्ता मालकीच्या स्थितीवर लक्ष केंद्रित करतात, जेणेकरून सर्वात वंचित घटकांना ओळखता येईल.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "While (a) Landless agricultural labour is a correct base, (b) Rural and urban poor person is too broad and represents the class itself, not a specific base for identification."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": true,
        "reason": "Landless agricultural labourers and small and marginal farmers are two of the most commonly used and specific bases for identifying the poor, especially in rural areas, due to their vulnerable economic status."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": false,
        "reason": "This option is too general. 'Rural and urban poor person' describes the target group, not the specific criteria or bases used to identify them."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason": "Options (b) and (d) are not as precise or direct 'bases' for identification as (a) and (c). While uneducated individuals are often poor, 'uneducated' is a characteristic, not a primary economic base for classification in the same way as land or employment status."
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "भारतातील बाजार आणि आर्थिक नियोजन परस्परांना ______ आहेत.",
    "question_english": "The market and economic planning in India is ______ to one another.",
    "options_marathi": [
      "जोड देणारे",
      "पूरक",
      "स्पर्धक",
      "तटस्थ"
    ],
    "options_english": [
      "Supplementary",
      "Complementary",
      "Competative",
      "Neutral"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Indian Economic System / Mixed Economy",
    "difficulty": "Easy",
    "trap_detected": "Similar sounding options (Supplementary vs. Complementary)",
    "explanation_english": "India adopted a mixed economic system after independence, where both market mechanisms and central economic planning play significant roles. The intention was for planning to address market failures, guide resource allocation in strategic sectors, and ensure social justice, while markets would foster efficiency, innovation, and competition. Therefore, the market and economic planning are designed to be complementary, working in conjunction to achieve national development goals rather than being purely competitive or neutral. They complete and enhance each other.",
    "explanation_marathi": "स्वातंत्र्यानंतर भारताने मिश्र अर्थव्यवस्था स्वीकारली, जिथे बाजार यंत्रणा आणि केंद्रीय आर्थिक नियोजन या दोन्हीची महत्त्वपूर्ण भूमिका आहे. नियोजनाचा उद्देश बाजारातील अपयश दूर करणे, धोरणात्मक क्षेत्रांमध्ये संसाधनांचे वाटप मार्गदर्शन करणे आणि सामाजिक न्याय सुनिश्चित करणे हा होता, तर बाजारपेठा कार्यक्षमता, नवोपक्रम आणि स्पर्धा वाढवतील. त्यामुळे, बाजार आणि आर्थिक नियोजन हे एकमेकांना पूरक असे डिझाइन केलेले आहेत, राष्ट्रीय विकासाची उद्दिष्टे साध्य करण्यासाठी केवळ स्पर्धात्मक किंवा तटस्थ न राहता एकत्रितपणे कार्य करतात. ते एकमेकांना पूर्ण करतात आणि वाढवतात.",
    "options_breakdown": [
      {
        "option_text_english": "Supplementary",
        "option_text_marathi": "जोड देणारे",
        "is_correct": false,
        "reason": "While they add to each other, 'complementary' is a more precise term in economics for elements that work together to complete or enhance each other, which is the intended relationship in a mixed economy."
      },
      {
        "option_text_english": "Complementary",
        "option_text_marathi": "पूरक",
        "is_correct": true,
        "reason": "In a mixed economy like India's, planning and market forces are intended to work together, each filling gaps and enhancing the other's effectiveness. Planning guides and corrects market failures, while markets provide efficiency and innovation."
      },
      {
        "option_text_english": "Competative",
        "option_text_marathi": "स्पर्धक",
        "is_correct": false,
        "reason": "Although there can be tensions, the fundamental design of India's mixed economy is not competitive but cooperative, with both elements serving national development goals."
      },
      {
        "option_text_english": "Neutral",
        "option_text_marathi": "तटस्थ",
        "is_correct": false,
        "reason": "They actively interact and influence each other, so they are not neutral. Planning sets the framework within which markets operate, and market outcomes inform planning decisions."
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "आर्थिक सुधारणे संदर्भात खालील विधाने विचारात घ्या. (a) सरकारच्या भूमिकेचे रूपांतर नियंत्रकाकडून सुविधा पुरविणारा असे झाले आहे. (b) पायाभूत क्षेत्रातील सुधारणेसाठी सरकार बांधील आहे. (c) पंचायत राज संस्था पूर्णपणे कार्यान्वित करण्यास सरकार बांधील आहे. वरीलपैकी कोणते/कोणती विधान/ने सत्य आहे/आहेत ?",
    "question_english": "Consider the following statements regarding Economic Reforms : (a) The role of the Government converts from the 'controller' to the 'facilitator'. (b) The Government commits to suitable reforms in the infrastructure sector. (c) The Government commits to the full functional Panchayati Raj Institution. Which of the statement/s given above is/are correct?",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(a) आणि (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(a) and (c)",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Economy / Polity",
    "topic": "Economic Reforms / Liberalization, Privatization, Globalization (LPG) / Decentralization",
    "difficulty": "Medium",
    "trap_detected": "Statement (c) might seem less directly economic, but it's an institutional reform supporting overall development.",
    "explanation_english": "Economic reforms in India, initiated in 1991, aimed at liberalizing the economy and integrating it with the global market. A key aspect was the shift in the government's role from a 'controller' (through licenses, quotas, and regulations) to a 'facilitator' (creating a conducive environment for business and investment). Reforms in the infrastructure sector (like power, roads, ports, telecom) were also crucial to support industrial growth and overall economic development. Furthermore, the 73rd and 74th Constitutional Amendments, enacted around the same time, aimed at strengthening Panchayati Raj Institutions and urban local bodies. While primarily political and administrative reforms, they are integral to decentralized governance and local development, which indirectly support economic reforms by improving service delivery and resource utilization at the grassroots level. Thus, all three statements are correct in the broader context of India's reform agenda.",
    "explanation_marathi": "1991 मध्ये सुरू झालेल्या भारतातील आर्थिक सुधारणांचा उद्देश अर्थव्यवस्थेचे उदारीकरण करणे आणि तिला जागतिक बाजारपेठेशी जोडणे हा होता. यामध्ये सरकारची भूमिका 'नियंत्रक' (परवाने, कोटा आणि नियमांमार्फत) वरून 'सुविधा पुरवणारा' (व्यवसाय आणि गुंतवणुकीसाठी अनुकूल वातावरण निर्माण करणे) अशी बदलणे हा एक महत्त्वाचा पैलू होता. औद्योगिक वाढ आणि एकूण आर्थिक विकासाला पाठिंबा देण्यासाठी पायाभूत सुविधा क्षेत्रात (जसे की वीज, रस्ते, बंदरे, दूरसंचार) सुधारणा देखील महत्त्वपूर्ण होत्या. याव्यतिरिक्त, त्याच सुमारास लागू झालेल्या 73व्या आणि 74व्या घटनादुरुस्तीचा उद्देश पंचायती राज संस्था आणि शहरी स्थानिक स्वराज्य संस्थांना बळकट करणे हा होता. जरी या प्रामुख्याने राजकीय आणि प्रशासकीय सुधारणा असल्या तरी, त्या विकेंद्रीकृत प्रशासन आणि स्थानिक विकासासाठी अविभाज्य आहेत, ज्यामुळे तळागाळातील सेवा वितरण आणि संसाधनांचा वापर सुधारून आर्थिक सुधारणांना अप्रत्यक्षपणे पाठिंबा मिळतो. त्यामुळे, भारताच्या सुधारणा अजेंड्याच्या व्यापक संदर्भात तिन्ही विधाने योग्य आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "Statements (a) and (b) are correct, but statement (c) is also correct, making this option incomplete."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statements (b) and (c) are correct, but statement (a) is also correct, making this option incomplete."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason": "Statements (a) and (c) are correct, but statement (b) is also correct, making this option incomplete."
      },
      {
        "option_text_english": "All of the above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": true,
        "reason": "All three statements accurately reflect aspects of India's comprehensive reform agenda. The shift in government's role, commitment to infrastructure, and strengthening of PRIs (through 73rd/74th amendments) are all part of the broader reform process aimed at development and good governance."
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "73 आणि 74 व्या घटना दुरुस्ती कायद्यातील कलम 243 D चे ठळक वैशिष्ट ______ आहे.",
    "question_english": "Salient feature of article 243 D of 73rd and 74th Constitution Amendment Act is :",
    "options_marathi": [
      "एकूण जागांच्या एक तृतीआंश जागा महिलांसाठी राखीव असतील",
      "एकूण जागांच्या एक द्वितीआंश जागा महिलांसाठी राखीव असतील",
      "एकूण जागांच्या एक चतुर्थांश जागा महिलांसाठी राखीव असतील",
      "एकूण जागांच्या दोन तृतीआंश जागा महिलांसाठी राखीव असतील"
    ],
    "options_english": [
      "One-third of the total number of seats to be reserved for women",
      "One-half of the total number of seats to be reserved for women",
      "One-fourth of the total number of seats to be reserved for women",
      "Two-third of the total number of seats to be reserved for women"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Panchayati Raj / 73rd and 74th Amendment Acts / Reservations",
    "difficulty": "Easy",
    "trap_detected": "Numerical distractors (one-half, one-fourth, two-third)",
    "explanation_english": "Article 243D of the Indian Constitution, inserted by the 73rd Amendment Act (which deals with Panchayati Raj Institutions), mandates the reservation of seats for women. Specifically, it states that not less than one-third of the total number of seats to be filled by direct election in every Panchayat shall be reserved for women. This reservation also applies to the offices of Chairpersons at all levels of Panchayats. The 74th Amendment Act (for Urban Local Bodies) has a similar provision in Article 243T. This provision was a landmark step towards empowering women in local governance.",
    "explanation_marathi": "भारतीय संविधानातील कलम 243D, जे 73व्या घटनादुरुस्ती कायद्याने (पंचायती राज संस्थांशी संबंधित) समाविष्ट केले गेले, महिलांसाठी जागा आरक्षित ठेवण्याचे बंधन घालते. विशेषतः, ते असे नमूद करते की प्रत्येक पंचायतीमध्ये थेट निवडणुकीद्वारे भरल्या जाणाऱ्या एकूण जागांपैकी एक तृतीयांशपेक्षा कमी जागा महिलांसाठी आरक्षित असतील. हे आरक्षण अनुसूचित जाती आणि जमातींसाठी आरक्षित जागांनाही लागू होते. 74व्या घटनादुरुस्ती कायद्यात (शहरी स्थानिक स्वराज्य संस्थांसाठी) कलम 243T मध्ये अशीच तरतूद आहे. ही तरतूद स्थानिक प्रशासनात महिलांना सक्षम करण्याच्या दिशेने एक महत्त्वाचे पाऊल होते.",
    "options_breakdown": [
      {
        "option_text_english": "One-third of the total number of seats to be reserved for women",
        "option_text_marathi": "एकूण जागांच्या एक तृतीआंश जागा महिलांसाठी राखीव असतील",
        "is_correct": true,
        "reason": "Article 243D of the 73rd Amendment Act explicitly mandates the reservation of not less than one-third of the total seats for women in Panchayats."
      },
      {
        "option_text_english": "One-half of the total number of seats to be reserved for women",
        "option_text_marathi": "एकूण जागांच्या एक द्वितीआंश जागा महिलांसाठी राखीव असतील",
        "is_correct": false,
        "reason": "While some states have legislated 50% reservation for women in local bodies, the constitutional minimum mandated by Article 243D is one-third, not one-half."
      },
      {
        "option_text_english": "One-fourth of the total number of seats to be reserved for women",
        "option_text_marathi": "एकूण जागांच्या एक चतुर्थांश जागा महिलांसाठी राखीव असतील",
        "is_correct": false,
        "reason": "This is not the provision specified in Article 243D."
      },
      {
        "option_text_english": "Two-third of the total number of seats to be reserved for women",
        "option_text_marathi": "एकूण जागांच्या दोन तृतीआंश जागा महिलांसाठी राखीव असतील",
        "is_correct": false,
        "reason": "This is not the provision specified in Article 243D."
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "खालील विधाने विचारात घ्या. (a) सेवा क्षेत्रातील उत्पादनाच्या तुलनेत रोजगारातील वाढ कमी दराने झाली आहे. (b) 1990 च्या काळात सेवा क्षेत्रातील रोजगार वृद्धी पेक्षा भारतातील श्रमिकांची सरासरी उत्पादकता वृद्धी जास्त होती. वरीलपैकी कोणते/ती विधान/ने बरोबर आहे/आहेत ?",
    "question_english": "Consider the following statements : (a) Employment increased at a slower rate as compared to output in the services sector. (b) Growth of average productivity of labour in India was higher than employment growth in services sector during the period of 1990's. Which of the statement is given above is/are correct?",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "(a) आणि (b)",
      "यापैकी नाही"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "(a) and (b)",
      "None of these"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Services Sector / Employment Trends / Productivity",
    "difficulty": "Medium",
    "trap_detected": "Requires understanding the relationship between output, employment, and productivity.",
    "explanation_english": "Both statements are correct. India's services sector has been a major driver of economic growth, experiencing rapid expansion in output. However, this growth has not been accompanied by a commensurate increase in employment, leading to a phenomenon often termed 'jobless growth' in this sector. This implies that the output per worker (labor productivity) has increased significantly. If output grows faster than employment, it means each worker is producing more, hence the growth of average productivity of labor is higher than employment growth. This trend was particularly evident during the 1990s and continued thereafter, reflecting technological advancements and a shift towards more capital-intensive or skill-intensive services.",
    "explanation_marathi": "दोन्ही विधाने बरोबर आहेत. भारतातील सेवा क्षेत्र हे आर्थिक वाढीचे प्रमुख चालक राहिले आहे, ज्यामध्ये उत्पादनात वेगाने वाढ झाली आहे. तथापि, या वाढीसोबत रोजगारात समान वाढ झालेली नाही, ज्यामुळे या क्षेत्रात अनेकदा 'रोजगाररहित वाढ' (jobless growth) असे म्हटले जाते. याचा अर्थ प्रति कामगार उत्पादन (श्रम उत्पादकता) लक्षणीयरीत्या वाढले आहे. जर उत्पादन रोजगारापेक्षा वेगाने वाढत असेल, तर याचा अर्थ प्रत्येक कामगार अधिक उत्पादन करत आहे, त्यामुळे श्रमाच्या सरासरी उत्पादकतेची वाढ रोजगार वाढीपेक्षा जास्त आहे. हा कल विशेषतः 1990 च्या दशकात स्पष्ट होता आणि त्यानंतरही तो सुरू राहिला, जो तांत्रिक प्रगती आणि अधिक भांडवल-केंद्रित किंवा कौशल्य-केंद्रित सेवांकडे झालेल्या बदलाचे प्रतिबिंब आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason": "Statement (b) is also correct, as it logically follows from statement (a)."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": false,
        "reason": "Statement (a) is also correct, and (b) is a consequence of (a)."
      },
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": true,
        "reason": "Statement (a) accurately describes the 'jobless growth' phenomenon in the services sector. Statement (b) is a direct consequence: if output grows faster than employment, it means labor productivity (output per worker) is increasing at a higher rate than employment."
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "यापैकी नाही",
        "is_correct": false,
        "reason": "Both statements (a) and (b) are factually correct regarding the trends in India's services sector during the specified period."
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "74 व्या घटना दुरुस्तीनुसार कोणत्या बाबी आवश्यक होत्या ? (a) जिल्हा नियोजन समितीची स्थापना (b) तालुका समितीची स्थापना (c) शिक्षणाचा हक्क (d) महानगर समितीची स्थापना",
    "question_english": "Which things are essential according to 74th Constitution Amendment ? (a) Establishment of District Planning Committee (b) Establishment of Taluka Committee (c) Right to Education (d) Establishment of Mahanagar Committee",
    "options_marathi": [
      "(a) आणि (d)",
      "फक्त (a)",
      "(a) आणि (b)",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) and (d)",
      "Only (a)",
      "(a) and (b)",
      "All above"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "74th Amendment Act / Urban Local Bodies / Planning Committees",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between 73rd and 74th amendments, and unrelated constitutional provisions.",
    "explanation_english": "The 74th Constitutional Amendment Act, 1992, deals with Urban Local Bodies (Municipalities). Its essential provisions include: (a) Establishment of District Planning Committees (DPCs) (Article 243ZD), which consolidate plans from Panchayats and Municipalities, and (d) Establishment of Metropolitan Planning Committees (MPCs) (Article 243ZE), which prepare development plans for metropolitan areas. Statement (b) 'Establishment of Taluka Committee' is not a direct mandate of the 74th Amendment, as Taluka/Block level bodies are typically covered under the 73rd Amendment (Panchayati Raj). Statement (c) 'Right to Education' was introduced by the 86th Constitutional Amendment Act, 2002, and is unrelated to the 74th Amendment. Therefore, only (a) and (d) are essential according to the 74th Amendment.",
    "explanation_marathi": "74वी घटनादुरुस्ती कायदा, 1992, शहरी स्थानिक स्वराज्य संस्थांशी (नगरपालिका) संबंधित आहे. त्याच्या आवश्यक तरतुदींमध्ये हे समाविष्ट आहे: (a) जिल्हा नियोजन समित्यांची (DPCs) स्थापना (अनुच्छेद 243ZD), ज्या पंचायत आणि नगरपालिकांच्या योजना एकत्रित करतात, आणि (d) महानगर नियोजन समित्यांची (MPCs) स्थापना (अनुच्छेद 243ZE), ज्या महानगरांसाठी विकास आराखडा तयार करतात. विधान (b) 'तालुका समितीची स्थापना' ही 74व्या घटनादुरुस्तीची थेट तरतूद नाही, कारण तालुका/ब्लॉक स्तरावरील संस्था सामान्यतः 73व्या घटनादुरुस्ती (पंचायती राज) अंतर्गत येतात. विधान (c) 'शिक्षणाचा हक्क' 86व्या घटनादुरुस्ती कायदा, 2002 द्वारे समाविष्ट करण्यात आला, आणि तो 74व्या घटनादुरुस्तीशी संबंधित नाही. म्हणून, 74व्या घटनादुरुस्तीनुसार केवळ (a) आणि (d) आवश्यक आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (d)",
        "option_text_marathi": "(a) आणि (d)",
        "is_correct": true,
        "reason": "Both District Planning Committees (Article 243ZD) and Metropolitan Planning Committees (Article 243ZE) are explicitly mandated by the 74th Amendment Act for urban planning and governance."
      },
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason": "While (a) is correct, (d) is also a direct mandate of the 74th Amendment, making this option incomplete."
      },
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "Statement (b) 'Establishment of Taluka Committee' is not a direct mandate of the 74th Amendment, which primarily focuses on urban local bodies."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason": "Statements (b) and (c) are incorrect in the context of the 74th Amendment. (b) relates more to the 73rd Amendment, and (c) to the 86th Amendment."
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "दारिद्र्य निर्मूलनाशी कोणते कार्यक्रम निगडीत आहेत ? (a) एकात्मिक ग्रामीण विकास कार्यक्रम (b) इंदिरा आवास योजना (c) रस्ते विकास कार्यक्रम (d) ग्रामीण शिक्षण",
    "question_english": "Which Programme are related to poverty alleviation ? (a) I.R.D.P. [Integrated Rural Development Programme] (b) I.A.Y. [Indira Awas Yojana] (c) Road Development Programme (d) Rural Education",
    "options_marathi": [
      "(a) आणि (b)",
      "फक्त (b)",
      "यापैकी नाही",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "Only (b)",
      "None of these",
      "All above"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Poverty Alleviation Programs / Rural Development",
    "difficulty": "Easy to Medium",
    "trap_detected": "Distinguishing direct poverty alleviation programs from general development initiatives.",
    "explanation_english": "Poverty alleviation programs in India have historically focused on providing direct support, employment, and basic necessities to the poor. The Integrated Rural Development Programme (IRDP), launched in 1978-79, was a major self-employment program for the rural poor. The Indira Awas Yojana (IAY), launched in 1985-86, was a flagship scheme providing financial assistance to the rural poor for constructing houses, directly addressing a basic need. Road Development Programmes are primarily infrastructure development initiatives, and while they can indirectly create jobs, they are not direct poverty alleviation programs. Rural Education is a long-term strategy for human development and poverty reduction, but 'Rural Education' itself is a broad sector, not a specific direct poverty alleviation 'programme' like IRDP or IAY. Therefore, (a) and (b) are directly related to poverty alleviation.",
    "explanation_marathi": "भारतातील दारिद्र्य निर्मूलन कार्यक्रमांनी ऐतिहासिकदृष्ट्या गरिबांना थेट आधार, रोजगार आणि मूलभूत गरजा पुरवण्यावर लक्ष केंद्रित केले आहे. एकात्मिक ग्रामीण विकास कार्यक्रम (IRDP), 1978-79 मध्ये सुरू झालेला, हा ग्रामीण गरिबांसाठी एक प्रमुख स्वयंरोजगार कार्यक्रम होता. इंदिरा आवास योजना (IAY), 1985-86 मध्ये सुरू झालेली, ही ग्रामीण गरिबांसाठी घरे बांधण्यासाठी आर्थिक सहाय्य देणारी एक प्रमुख योजना होती, जी थेट मूलभूत गरज पूर्ण करत होती. रस्ते विकास कार्यक्रम हे प्रामुख्याने पायाभूत सुविधा विकास उपक्रम आहेत, आणि जरी ते अप्रत्यक्षपणे रोजगार निर्माण करू शकत असले तरी, ते थेट दारिद्र्य निर्मूलन कार्यक्रम नाहीत. ग्रामीण शिक्षण हे मानवी विकास आणि दारिद्र्य कमी करण्यासाठी एक दीर्घकालीन धोरण आहे, परंतु 'ग्रामीण शिक्षण' हे स्वतः एक व्यापक क्षेत्र आहे, IRDP किंवा IAY सारखा विशिष्ट थेट दारिद्र्य निर्मूलन 'कार्यक्रम' नाही. म्हणून, (a) आणि (b) थेट दारिद्र्य निर्मूलनाशी संबंधित आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": true,
        "reason": "Both IRDP (Integrated Rural Development Programme) and IAY (Indira Awas Yojana) were prominent and direct poverty alleviation programs aimed at providing income-generating assets and housing to the rural poor, respectively."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": false,
        "reason": "Statement (a) IRDP is also a direct poverty alleviation program, making this option incomplete."
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "यापैकी नाही",
        "is_correct": false,
        "reason": "At least two of the listed programs (IRDP and IAY) are directly related to poverty alleviation."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason": "Road Development Programme and Rural Education are general development initiatives, not direct poverty alleviation programs in the same vein as IRDP and IAY, although they contribute to overall development and long-term poverty reduction."
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "खालीलपैकी नियोजनाचे प्रकार कोणते ? (a) लोकशाही नियोजन (b) हुकूमशाही नियोजन (c) सामाजिक नियोजन (d) केंद्रित नियोजन",
    "question_english": "Which of the following are types of planning ? (a) Democratic Planning (b) Totalitarian Planning (c) Social Planning (d) Centralised Planning",
    "options_marathi": [
      "(a) आणि (b)",
      "(a), (b) आणि (c)",
      "(a), (b) आणि (d)",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "(a), (b) and (c)",
      "(a), (b) and (d)",
      "All above"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Economic Planning / Types of Planning",
    "difficulty": "Medium",
    "trap_detected": "Ambiguity in classifying 'Social Planning' as a 'type' vs. an 'objective/dimension'.",
    "explanation_english": "Economic planning can be classified in various ways based on its nature, scope, and objectives. Democratic Planning involves public participation and respects individual freedoms, while Totalitarian Planning (or Command Planning) is characterized by complete state control. Centralised Planning refers to decisions made by a central authority. These three (democratic, totalitarian, and centralized) are distinct structural types or approaches to planning. Social Planning, while a crucial aspect of any comprehensive planning, refers more to the *objectives* or *focus* of planning (e.g., welfare, equity, health, education) rather than a distinct *type* of planning in the same structural sense as the others. Given the options, (a), (b), and (d) represent distinct types of planning based on control and structure.",
    "explanation_marathi": "आर्थिक नियोजन त्याच्या स्वरूप, व्याप्ती आणि उद्दिष्टांवर आधारित विविध प्रकारे वर्गीकृत केले जाऊ शकते. लोकशाही नियोजन सार्वजनिक सहभाग आणि वैयक्तिक स्वातंत्र्याचा आदर करते, तर हुकूमशाही नियोजन (किंवा आदेश नियोजन) राज्याच्या आर्थिक निर्णयांवर पूर्ण नियंत्रणाने वैशिष्ट्यीकृत आहे. केंद्रित नियोजन म्हणजे केंद्रीय प्राधिकरणाद्वारे घेतलेले निर्णय. हे तिन्ही (लोकशाही, हुकूमशाही आणि केंद्रित) नियोजनाचे वेगळे संरचनात्मक प्रकार किंवा दृष्टिकोन आहेत. सामाजिक नियोजन, कोणत्याही व्यापक नियोजनाचा एक महत्त्वाचा पैलू असला तरी, नियोजनाच्या *उद्दिष्टांवर* किंवा *केंद्रबिंदूंवर* (उदा. कल्याण, समानता, आरोग्य, शिक्षण) अधिक लक्ष केंद्रित करते, इतर प्रकारांप्रमाणे ते नियोजनाचा वेगळा *प्रकार* नाही. दिलेल्या पर्यायांनुसार, (a), (b) आणि (d) नियंत्रण आणि संरचनेवर आधारित नियोजनाचे वेगळे प्रकार दर्शवतात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "This option is incomplete as (d) Centralised Planning is also a recognized type of planning."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason": "While democratic and totalitarian planning are types, 'social planning' is often considered an objective or dimension of planning rather than a distinct structural type. Also, it misses (d)."
      },
      {
        "option_text_english": "(a), (b) and (d)",
        "option_text_marathi": "(a), (b) आणि (d)",
        "is_correct": true,
        "reason": "Democratic planning, totalitarian planning, and centralized planning are widely recognized types or approaches to economic planning based on the nature of control and decision-making structure."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason": "Including 'Social Planning' as a distinct 'type' in the same category as the others is debatable in some classifications, as it often refers to the objectives rather than the method or structure of planning."
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "ग्रामीण भूमिहीन रोजगार हमी कार्यक्रम (RLEGP) केंव्हा सुरू करण्यात आला ?",
    "question_english": "When the Rural Landless Employment Guarantee Programme (RLEGP) was launched ?",
    "options_marathi": [
      "15 ऑगस्ट 1972",
      "15 ऑगस्ट 1983",
      "15 ऑगस्ट 1991",
      "15 ऑगस्ट 1993"
    ],
    "options_english": [
      "15 August 1972",
      "15 August 1983",
      "15 August 1991",
      "15 August 1993"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Poverty Alleviation Programs / Rural Employment Schemes",
    "difficulty": "Easy",
    "trap_detected": "Close numerical dates",
    "explanation_english": "The Rural Landless Employment Guarantee Programme (RLEGP) was a significant poverty alleviation and employment generation scheme launched in India on August 15, 1983. Its primary objective was to provide employment opportunities to landless laborers in rural areas, thereby improving their living standards and creating durable community assets. The program aimed to guarantee 100 days of employment to at least one member of every landless household. RLEGP was later merged with other employment programs, eventually leading to schemes like MGNREGA.",
    "explanation_marathi": "ग्रामीण भूमिहीन रोजगार हमी कार्यक्रम (RLEGP) हा भारतातील एक महत्त्वाचा दारिद्र्य निर्मूलन आणि रोजगार निर्मिती कार्यक्रम होता, जो 15 ऑगस्ट 1983 रोजी सुरू करण्यात आला. याचा मुख्य उद्देश ग्रामीण भागातील भूमिहीन मजुरांना रोजगाराच्या संधी उपलब्ध करून देणे, ज्यामुळे त्यांचे जीवनमान सुधारेल आणि टिकाऊ सामुदायिक मालमत्ता निर्माण होतील. या कार्यक्रमाचे उद्दिष्ट प्रत्येक भूमिहीन कुटुंबातील किमान एका सदस्याला 100 दिवसांच्या रोजगाराची हमी देणे हे होते. RLEGP नंतर इतर रोजगार कार्यक्रमांमध्ये विलीन करण्यात आला, ज्यामुळे शेवटी मनरेगा (MGNREGA) सारख्या योजना उदयास आल्या.",
    "options_breakdown": [
      {
        "option_text_english": "15 August 1972",
        "option_text_marathi": "15 ऑगस्ट 1972",
        "is_correct": false,
        "reason": "This date is incorrect for the launch of RLEGP."
      },
      {
        "option_text_english": "15 August 1983",
        "option_text_marathi": "15 ऑगस्ट 1983",
        "is_correct": true,
        "reason": "The Rural Landless Employment Guarantee Programme (RLEGP) was officially launched on August 15, 1983."
      },
      {
        "option_text_english": "15 August 1991",
        "option_text_marathi": "15 ऑगस्ट 1991",
        "is_correct": false,
        "reason": "This date is incorrect for the launch of RLEGP; 1991 is associated with major economic reforms."
      },
      {
        "option_text_english": "15 August 1993",
        "option_text_marathi": "15 ऑगस्ट 1993",
        "is_correct": false,
        "reason": "This date is incorrect for the launch of RLEGP."
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "नियोजनाच्या नंतरच्या टप्प्यामध्ये (1981 ते 2012) सरासरी स्थूल देशांतर्गत उत्पादनवाढीचा (GDP) दर ______ टक्के होता.",
    "question_english": "The average GDP growth rate during the later phase of planning from 1981 to 2012 was ______ percent.",
    "options_marathi": [
      "3.5",
      "5.7",
      "5.9",
      "4.2"
    ],
    "options_english": [
      "3.5",
      "5.7",
      "5.9",
      "4.2"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Indian Economic Growth / GDP Trends / Planning Era",
    "difficulty": "Hard",
    "trap_detected": "Close numerical options, requiring precise factual recall.",
    "explanation_english": "India's economic growth trajectory saw a significant shift from the 'Hindu rate of growth' (around 3.5% per annum) observed in the first three decades after independence. The period from 1981 to 2012 marks a phase of accelerated growth, particularly after the economic reforms of 1991. During this 'later phase of planning,' the Indian economy experienced a robust average annual GDP growth rate. Official economic data and surveys, such as the Economic Survey 2012-13, indicate that the average GDP growth rate for the period spanning 1980-81 to 2011-12 (which aligns with the question's timeframe) was approximately 5.9%. This period witnessed liberalization, increased private sector participation, and greater integration with the global economy, contributing to higher growth rates compared to the earlier decades.",
    "explanation_marathi": "स्वातंत्र्यानंतरच्या पहिल्या तीन दशकांत दिसून आलेल्या 'हिंदू विकास दरा' (सुमारे 3.5% प्रतिवर्ष) पासून भारताच्या आर्थिक वाढीच्या मार्गात लक्षणीय बदल झाला. 1981 ते 2012 पर्यंतचा काळ, विशेषतः 1991 च्या आर्थिक सुधारणांनंतर, वाढीचा वेग वाढलेला दर्शवतो. या 'नियोजनाच्या नंतरच्या टप्प्यात' भारतीय अर्थव्यवस्थेने मजबूत सरासरी वार्षिक जीडीपी वाढीचा अनुभव घेतला. अधिकृत आर्थिक आकडेवारी आणि सर्वेक्षण, जसे की आर्थिक सर्वेक्षण 2012-13, नुसार 1980-81 ते 2011-12 या कालावधीसाठी (जो प्रश्नाच्या वेळेनुसार जुळतो) सरासरी जीडीपी वाढीचा दर अंदाजे 5.9% होता. या काळात उदारीकरण, खाजगी क्षेत्राचा वाढलेला सहभाग आणि जागतिक अर्थव्यवस्थेशी अधिक एकीकरण झाले, ज्यामुळे मागील दशकांच्या तुलनेत उच्च वाढीचे दर प्राप्त झाले.",
    "options_breakdown": [
      {
        "option_text_english": "3.5",
        "option_text_marathi": "3.5",
        "is_correct": false,
        "reason": "This figure represents the 'Hindu rate of growth' which was characteristic of the Indian economy in the earlier decades (pre-1980s), not the later phase of planning."
      },
      {
        "option_text_english": "5.7",
        "option_text_marathi": "5.7",
        "is_correct": false,
        "reason": "While close, 5.9% is the more accurately cited average GDP growth rate for the period 1981-2012 in various economic reports."
      },
      {
        "option_text_english": "5.9",
        "option_text_marathi": "5.9",
        "is_correct": true,
        "reason": "According to official economic data and analyses, the average GDP growth rate for India during the period from 1981 to 2012 was approximately 5.9%."
      },
      {
        "option_text_english": "4.2",
        "option_text_marathi": "4.2",
        "is_correct": false,
        "reason": "This figure is lower than the actual average GDP growth rate experienced by India during the specified period of accelerated growth."
      }
    ]
  }
];
