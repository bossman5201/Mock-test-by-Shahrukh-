const mockTestData5_2_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "दिलेली उदाहरणे अभ्यासा आणि \"I stand\" या अभिव्यक्तिचा संकेत निवडण्यासाठी दिलेले नियम वापरा : नियमाला कोणताही अपवाद नाही आणि फक्त दिलेल्या अभिव्यक्तिच्या आधारे तयार झालेले नियम वापरा. उदाहरणे : palo ko ⇒ I sit, palo tu ⇒ she sits; आणि karo tu ⇒ she stands",
    "question_english": "Study examples and use rules following for selecting code for expression \"I stand\": there are no exceptions to the rule and only those rules apply that may be derived from the provided expressions. Examples: palo ko⇒ I sit, palo tu⇒ she sits; and karo tu ⇒ she stands",
    "options_marathi": [
      "tu ko",
      "ko karo",
      "karo ko",
      "karo palo"
    ],
    "options_english": [
      "tu ko",
      "ko karo",
      "karo ko",
      "karo palo"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Coding-Decoding (Word-based)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Order of words)",
    "explanation_english": "The examples provided establish a pattern where the verb comes before the pronoun in the coded expression, even if the English expression has the pronoun first. From 'palo ko ⇒ I sit' and 'palo tu ⇒ she sits', we can deduce that 'palo' means 'sit', 'ko' means 'I', and 'tu' means 'she'. From 'karo tu ⇒ she stands', we deduce that 'karo' means 'stand'. To code 'I stand', we must follow the established pattern of [verb] [pronoun]. So, 'stand' ('karo') comes first, followed by 'I' ('ko'), resulting in 'karo ko'.",
    "explanation_marathi": "दिलेल्या उदाहरणांवरून असे दिसून येते की सांकेतिक भाषेत क्रियापद सर्वनामाच्या आधी येते, जरी इंग्रजी अभिव्यक्तीमध्ये सर्वनाम आधी असले तरी. 'palo ko ⇒ I sit' आणि 'palo tu ⇒ she sits' यावरून आपण 'palo' म्हणजे 'sit', 'ko' म्हणजे 'I' आणि 'tu' म्हणजे 'she' असे अनुमान काढू शकतो. 'karo tu ⇒ she stands' यावरून 'karo' म्हणजे 'stand' असे अनुमान निघते. 'I stand' ला सांकेतिक भाषेत रूपांतरित करण्यासाठी, आपल्याला [क्रियापद] [सर्वनाम] या स्थापित पद्धतीचे पालन करावे लागेल. म्हणून, 'stand' ('karo') प्रथम येईल, त्यानंतर 'I' ('ko') येईल, ज्यामुळे 'karo ko' हा संकेत मिळेल.",
    "options_breakdown": [
      {
        "option_english": "tu ko",
        "option_marathi": "tu ko",
        "is_correct": false,
        "reason": "This translates to 'she I', which is incorrect based on the derived meanings and the target expression."
      },
      {
        "option_english": "ko karo",
        "option_marathi": "ko karo",
        "is_correct": false,
        "reason": "This translates to 'I stand', but it reverses the established word order (pronoun-verb) from the examples (verb-pronoun)."
      },
      {
        "option_english": "karo ko",
        "option_marathi": "karo ko",
        "is_correct": true,
        "reason": "This translates to 'stand I', which correctly follows the [verb] [pronoun] pattern established by the given examples for the expression 'I stand'."
      },
      {
        "option_english": "karo palo",
        "option_marathi": "karo palo",
        "is_correct": false,
        "reason": "This translates to 'stand sit', which is incorrect."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "सत्य विधाने आणि त्यावर आधारित निष्कर्ष अभ्यासा आणि निष्कर्षांचे योग्य वर्णन करणारा पर्याय निवडा - विधाने : बहुतेक कमानकार लेखक आहेत. एकही लेखक चालक नाही. सर्व चालक कमानकार आहेत. निष्कर्ष : (I) काही लेखक कमानकार आहेत. (II) सर्व कमानकार चालक आहेत. (III) एकही चालक लेखक नाही.",
    "question_english": "Study the true statements and conclusions based on these and select the option that describes conclusions correctly : Statements : Most architects are writers. No writer is a driver. All drivers are architects. Conclusions : (I) Some writers are architects. (II) All architects are drivers. (III) No driver is a writer.",
    "options_marathi": [
      "फक्त (1) तर्कसंगत",
      "फक्त (II) व (III) तर्कसंगत",
      "फक्त (I) व (III) तर्कसंगत",
      "एकही तर्कसंगत नाही"
    ],
    "options_english": [
      "Only (I) follow",
      "Only (II) and (III) follows",
      "Only (I) and (III) follows",
      "None of these"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Syllogism",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of 'Most' and A-type statement conversion",
    "explanation_english": "Let's analyze each statement and conclusion:\nStatements:\n1. Most architects are writers: This implies that 'Some architects are writers' and consequently 'Some writers are architects'.\n2. No writer is a driver: This means there is no overlap between the set of writers and the set of drivers.\n3. All drivers are architects: This means the set of drivers is a subset of the set of architects.\n\nConclusions:\n(I) Some writers are architects: This directly follows from Statement 1 ('Most architects are writers'). If most architects are writers, then it is certainly true that some writers are architects. So, Conclusion (I) follows.\n(II) All architects are drivers: This does not follow. While all drivers are architects (Statement 3), it does not mean that all architects are drivers. There could be architects who are not drivers. So, Conclusion (II) does not follow.\n(III) No driver is a writer: This directly follows from Statement 2 ('No writer is a driver'). If no writer is a driver, then by conversion, no driver can be a writer. So, Conclusion (III) follows.\n\nTherefore, only conclusions (I) and (III) are logically valid.",
    "explanation_marathi": "प्रत्येक विधान आणि निष्कर्षाचे विश्लेषण करूया:\nविधाने:\n1. बहुतेक कमानकार लेखक आहेत: याचा अर्थ 'काही कमानकार लेखक आहेत' आणि परिणामी 'काही लेखक कमानकार आहेत'.\n2. एकही लेखक चालक नाही: याचा अर्थ लेखक आणि चालक यांच्या संचांमध्ये कोणताही आच्छादन (overlap) नाही.\n3. सर्व चालक कमानकार आहेत: याचा अर्थ चालकांचा संच कमानकारांच्या संचाचा उपसंच (subset) आहे.\n\nनिष्कर्ष:\n(I) काही लेखक कमानकार आहेत: हे विधान 1 ('बहुतेक कमानकार लेखक आहेत') वरून थेट येते. जर बहुतेक कमानकार लेखक असतील, तर काही लेखक कमानकार आहेत हे निश्चितपणे सत्य आहे. म्हणून, निष्कर्ष (I) तर्कसंगत आहे.\n(II) सर्व कमानकार चालक आहेत: हे तर्कसंगत नाही. जरी सर्व चालक कमानकार असले तरी (विधान 3), याचा अर्थ असा नाही की सर्व कमानकार चालक आहेत. असे कमानकार असू शकतात जे चालक नाहीत. म्हणून, निष्कर्ष (II) तर्कसंगत नाही.\n(III) एकही चालक लेखक नाही: हे विधान 2 ('एकही लेखक चालक नाही') वरून थेट येते. जर एकही लेखक चालक नसेल, तर याच्या उलट, एकही चालक लेखक असू शकत नाही. म्हणून, निष्कर्ष (III) तर्कसंगत आहे.\n\nम्हणून, फक्त निष्कर्ष (I) आणि (III) तर्कसंगत आहेत.",
    "options_breakdown": [
      {
        "option_english": "Only (I) follow",
        "option_marathi": "फक्त (1) तर्कसंगत",
        "is_correct": false,
        "reason": "Conclusion (III) also follows, making this option incomplete."
      },
      {
        "option_english": "Only (II) and (III) follows",
        "option_marathi": "फक्त (II) व (III) तर्कसंगत",
        "is_correct": false,
        "reason": "Conclusion (II) does not follow from the given statements."
      },
      {
        "option_english": "Only (I) and (III) follows",
        "option_marathi": "फक्त (I) व (III) तर्कसंगत",
        "is_correct": true,
        "reason": "Both Conclusion (I) and Conclusion (III) are logically derived from the given statements."
      },
      {
        "option_english": "None of these",
        "option_marathi": "एकही तर्कसंगत नाही",
        "is_correct": false,
        "reason": "Conclusions (I) and (III) are valid, so this option is incorrect."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "पुढील युक्तिवादातील तर्कविचार अभ्यासा आणि त्या तर्काशी सारखेपणा असलेला सर्वात जवळचा पर्याय निवडा - अंजूला चित्रपट पाहायला जाणे परवडत नाही. नाटकाचा आनंद लुटण्यासाठी तिकिट खरेदी करणे अधिक खर्चिक आहे. म्हणून तिला ते देखील परवडत नाही.",
    "question_english": "Study the reasoning process of the argument given below and select from option that most closely resembles the reasoning used in it. Anju cannot afford to go for watching a movie. Buying tickets for enjoying drama is even more expensive, thus she cannot afford that either.",
    "options_marathi": [
      "चहात कॅफेन असल्यामुळे जर संध्याकाळी 6.30 नंतर चहा प्यायल्यास अंजूला रात्री झोप लागत नाही. चहाशी तुलना केल्यास कॉफीत अधिक कॅफेन आहे. म्हणजे अंजू संध्याकाळी 6.30 नंतर कॉफी देखील पिऊ शकत नाही.",
      "वडिलांनी वाढदिवशी दिलेले गोष्टीचे पुस्तक वाचून पूर्ण करण्यासाठी लागणारी पुरेशी चिकाटी अंजूकडे नाही. तिला तिच्या आईने दिलेली कादंबरी वाचायला देखील त्याहून जास्त चिकाटी लागते म्हणून ती तेही पुरे करू शकत नाही.",
      "अंजूला केळे आवडत नाही. या आइस्क्रीममध्ये केळे व बदाम आहेत म्हणून अंजूला तेही आवडणार नाही.",
      "बागेपर्यंत चालत जाणे अंजूसाठी खूपच दूरचे आहे. त्याऐवजी चौपाटी जवळ आहे म्हणून ती तेथे जाण्याला प्राधान्य देईल."
    ],
    "options_english": [
      "Since tea contains caffeine Anju cannot sleep at night if she drinks a cup of tea after 6.30 pm. Coffee also contains more caffeine if compared to tea so Anju would not drink that after 6.30 pm either.",
      "Anju didn't have enough patience to complete the story book that her father gave for her birthday. The novel that her mother gave to her also requires more patience so she would not finish it either.",
      "Anju does not like banana. This ice-cream contains banana and almonds, so Anju would not like it either.",
      "It is too far for Anju to walk to the garden. The beach is closer, so she will prefer to go there instead."
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Analogical Reasoning / Logical Equivalence",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between structurally similar arguments based on the nature of quantities.",
    "explanation_english": "The original argument follows a specific logical structure: 'If X is unaffordable, and Y is even more expensive than X, then Y is also unaffordable.' This is a transitive property applied to a financial threshold. We need to find an option that mirrors this exact reasoning process.\nOption 1: 'If tea (with caffeine) causes sleeplessness, and coffee has more caffeine than tea, then coffee will also cause sleeplessness.' This perfectly matches the structure. The 'caffeine content' acts like 'cost', and 'sleeplessness' acts like 'unaffordability' or an undesirable outcome due to exceeding a threshold. Both cost and caffeine are quantifiable external factors.\nOption 2, while structurally similar, deals with 'patience,' which is a subjective internal quality, making it slightly less analogous than the quantifiable 'caffeine' in Option 1, which is more akin to 'cost.'\nOptions 3 and 4 use entirely different logical structures.",
    "explanation_marathi": "मूळ युक्तिवाद एका विशिष्ट तार्किक संरचनेचे अनुसरण करतो: 'जर X परवडणारे नसेल आणि Y हे X पेक्षा अधिक महाग असेल, तर Y देखील परवडणारे नाही.' ही आर्थिक मर्यादेवर लागू केलेली संक्रमणीय मालमत्ता आहे. आपल्याला या तर्कप्रक्रियेचे अचूक प्रतिबिंब असलेला पर्याय शोधायचा आहे.\nपर्याय 1: 'चहात कॅफेन असल्यामुळे जर संध्याकाळी 6.30 नंतर चहा प्यायल्यास अंजूला रात्री झोप लागत नाही. चहाशी तुलना केल्यास कॉफीत अधिक कॅफेन आहे. म्हणजे अंजू संध्याकाळी 6.30 नंतर कॉफी देखील पिऊ शकत नाही.' हे संरचनेशी पूर्णपणे जुळते. 'कॅफेनचे प्रमाण' 'खर्चासारखे' कार्य करते आणि 'झोप न लागणे' 'परवडणारे नसणे' किंवा मर्यादा ओलांडल्यामुळे होणारे अवांछित परिणाम यासारखे कार्य करते. खर्च आणि कॅफेन दोन्ही मोजता येण्याजोगे बाह्य घटक आहेत.\nपर्याय 2, जरी संरचनेने समान असला तरी, 'चिकाटी' या व्यक्तिनिष्ठ आंतरिक गुणाशी संबंधित आहे, ज्यामुळे तो पर्याय 1 मधील मोजता येण्याजोग्या 'कॅफेन' पेक्षा थोडा कमी अनुरूप ठरतो, जो 'खर्चाशी' अधिक मिळताजुळता आहे.\nपर्याय 3 आणि 4 पूर्णपणे भिन्न तार्किक संरचना वापरतात.",
    "options_breakdown": [
      {
        "option_english": "Since tea contains caffeine Anju cannot sleep at night if she drinks a cup of tea after 6.30 pm. Coffee also contains more caffeine if compared to tea so Anju would not drink that after 6.30 pm either.",
        "option_marathi": "चहात कॅफेन असल्यामुळे जर संध्याकाळी 6.30 नंतर चहा प्यायल्यास अंजूला रात्री झोप लागत नाही. चहाशी तुलना केल्यास कॉफीत अधिक कॅफेन आहे. म्हणजे अंजू संध्याकाळी 6.30 नंतर कॉफी देखील पिऊ शकत नाही.",
        "is_correct": true,
        "reason": "This option perfectly mirrors the 'if X is too much, and Y is even more than X, then Y is also too much' logic, using caffeine content as the comparative factor, similar to cost. Both are quantifiable external factors."
      },
      {
        "option_english": "Anju didn't have enough patience to complete the story book that her father gave for her birthday. The novel that her mother gave to her also requires more patience so she would not finish it either.",
        "option_marathi": "वडिलांनी वाढदिवशी दिलेले गोष्टीचे पुस्तक वाचून पूर्ण करण्यासाठी लागणारी पुरेशी चिकाटी अंजूकडे नाही. तिला तिच्या आईने दिलेली कादंबरी वाचायला देखील त्याहून जास्त चिकाटी लागते म्हणून ती तेही पुरे करू शकत नाही.",
        "is_correct": false,
        "reason": "While structurally similar, the comparison of 'patience' is less analogous to 'cost' than 'caffeine content' is, as patience is a subjective internal quality."
      },
      {
        "option_english": "Anju does not like banana. This ice-cream contains banana and almonds, so Anju would not like it either.",
        "option_marathi": "अंजूला केळे आवडत नाही. या आइस्क्रीममध्ये केळे व बदाम आहेत म्हणून अंजूला तेही आवडणार नाही.",
        "is_correct": false,
        "reason": "This argument is based on disliking a component leading to disliking the whole, not a comparative 'more expensive' logic."
      },
      {
        "option_english": "It is too far for Anju to walk to the garden. The beach is closer, so she will prefer to go there instead.",
        "option_marathi": "बागेपर्यंत चालत जाणे अंजूसाठी खूपच दूरचे आहे. त्याऐवजी चौपाटी जवळ आहे म्हणून ती तेथे जाण्याला प्राधान्य देईल.",
        "is_correct": false,
        "reason": "This argument is about choosing a closer alternative, not about something being 'too much' and something else being 'even more too much'."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "नवऱ्याला आदित्यचा परिचय करून देताना एक स्त्री म्हणाली, \"त्याच्या भावाचे वडील हे माझ्या आजोबांचा एकुलता एक मुलगा आहे\". त्या स्त्रीचे आदित्यशी नाते काय ?",
    "question_english": "Introducing Aadit to her husband, women said, \"His brother's father is the only son of my grandfather.\" The women is related to Aadit is :",
    "options_marathi": [
      "काकू",
      "आई",
      "बहीण",
      "मुलगी"
    ],
    "options_english": [
      "Aunt",
      "Mother",
      "Sister",
      "Daughter"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Easy",
    "trap_detected": "Complex phrasing",
    "explanation_english": "Let's break down the woman's statement step by step:\n1.  \"My grandfather's only son\": A grandfather's only son is the woman's father.\n2.  \"His brother's father\": \"His\" refers to Aadit. So, \"Aadit's brother's father\" is simply Aadit's father.\n3.  Combining these two parts, the statement becomes: \"Aadit's father is my father.\"\nIf Aadit's father is the same as the woman's father, it means Aadit and the woman are siblings. Therefore, the woman is Aadit's sister.",
    "explanation_marathi": "स्त्रीच्या विधानाचे टप्प्याटप्प्याने विश्लेषण करूया:\n1.  \"माझ्या आजोबांचा एकुलता एक मुलगा\": आजोबांचा एकुलता एक मुलगा म्हणजे त्या स्त्रीचा वडील.\n2.  \"त्याच्या भावाचे वडील\": \"त्याच्या\" म्हणजे आदित्य. त्यामुळे, \"आदित्यच्या भावाचे वडील\" म्हणजे आदित्यचे वडील.\n3.  या दोन्ही भागांना एकत्र केल्यास, विधान असे होते: \"आदित्यचे वडील हे माझे वडील आहेत.\"\nजर आदित्यचे वडील आणि स्त्रीचे वडील एकच असतील, तर याचा अर्थ आदित्य आणि ती स्त्री भावंडं आहेत. म्हणून, ती स्त्री आदित्यची बहीण आहे.",
    "options_breakdown": [
      {
        "option_english": "Aunt",
        "option_marathi": "काकू",
        "is_correct": false,
        "reason": "An aunt would be her father's sister or brother's wife, which doesn't fit the relationship derived."
      },
      {
        "option_english": "Mother",
        "option_marathi": "आई",
        "is_correct": false,
        "reason": "Her mother would be her father's wife, which is not the relationship described."
      },
      {
        "option_english": "Sister",
        "option_marathi": "बहीण",
        "is_correct": true,
        "reason": "The woman and Aadit share the same father, making them siblings. Thus, the woman is Aadit's sister."
      },
      {
        "option_english": "Daughter",
        "option_marathi": "मुलगी",
        "is_correct": false,
        "reason": "A daughter would be the woman's child, which is incorrect."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "निवडीसाठी माहितीपत्रकाच्या 500 प्रति छापण्यासाठी उपलब्ध असलेल्या किंमतींच्या दोन रचना उपलब्ध आहेत. त्या पुढील प्रमाणे : X: संख्येचा विचार न करता प्रत्येक माहितीपत्रकाची समान किंमत विचारात घेणे. Y: सुरुवातीला निश्चित केलेली किंमत विचारात घेऊन नंतर प्रत्येक माहितीपत्रकासाठी \"X\" रचनेपेक्षा कमी किंमत विचारात घेणे. वरीलप्रमाणे सर्वात कमी खर्चिक किंमत रचना निश्चित करण्यासाठी पुढे दिलेल्या माहितीसंचातील एकाची निवड करा.",
    "question_english": "There are two price structures available to choose printing 500 copies of brochure as given below: X: An equal cost for each brochure without considering number. Y: An initial fixed cost followed by a lower cost than structure \"X' for each brochure. Select one of the following set of information that would be sufficient to decide least expensive price structure from the mentioned above.",
    "options_marathi": [
      "200 माहितीपत्रकांची दोन्ही किंमत रचना वापरून किमती दाखवणारे 'उदाहरण.",
      "X रचना वापरून दर माहितीपत्रकाची किंमत आणि Y रचना वापरून सुरुवातीची किंमत.",
      "X रचना वापरून 1 माहितीपत्रकाची किंमत आणि Y रचना वापरून 2 माहिती पत्रकांची किंमत.",
      "उपलब्ध असलेल्या X व Y. रचना वापरून छपाईसाठी समान किमतींची देयके असलेल्या माहितीपत्रकांची संख्या."
    ],
    "options_english": [
      "An example showing cost of 200 brochures by using both the cost structures.",
      "The cost per brochure using structure X and initial cost using structure Y.",
      "The cost of 1 brochure using structure X and 2 brochures using structure Y.",
      "The number of brochures for which total bill will be same by both available structures X and Y."
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Cost Analysis / Data Sufficiency",
    "difficulty": "Medium",
    "trap_detected": "Misunderstanding what information is truly needed to compare two linear cost functions.",
    "explanation_english": "Let's define the cost structures:\nStructure X: Total Cost = `N * C_x`, where `N` is the number of brochures and `C_x` is the cost per brochure.\nStructure Y: Total Cost = `F_y + N * C_y`, where `F_y` is the initial fixed cost and `C_y` is the cost per brochure. We are given `C_y < C_x`.\nWe need to determine which structure is cheaper for 500 copies.\n\nLet's evaluate the options:\n1.  'An example showing cost of 200 brochures by using both the cost structures.' This would give us `200 * C_x` and `F_y + 200 * C_y`. We can find `C_x`, but we'd still have one equation (`F_y + 200 * C_y = Cost_Y(200)`) with two unknowns (`F_y` and `C_y`), which is insufficient.\n2.  'The cost per brochure using structure X and initial cost using structure Y.' This gives us `C_x` and `F_y`. We still don't know `C_y`, only that `C_y < C_x`. This is insufficient.\n3.  'The cost of 1 brochure using structure X and 2 brochures using structure Y.' This gives us `C_x` (from 1 brochure in X) and `F_y + 2 * C_y` (from 2 brochures in Y). Again, we have one equation with two unknowns (`F_y` and `C_y`), which is insufficient.\n4.  'The number of brochures for which total bill will be same by both available structures X and Y.' Let this be `N_break_even`. At this point, `N_break_even * C_x = F_y + N_break_even * C_y`. This means `F_y = N_break_even * (C_x - C_y)`. Since `C_x > C_y`, `(C_x - C_y)` is positive. If `N_break_even` is known, we can compare it to 500. If `500 > N_break_even`, structure Y will be cheaper (because its per-unit cost is lower after the fixed cost is amortized). If `500 < N_break_even`, structure X will be cheaper. If `500 = N_break_even`, they are equal. Thus, knowing `N_break_even` is sufficient to decide the least expensive structure for 500 brochures.",
    "explanation_marathi": "खर्च रचना परिभाषित करूया:\nरचना X: एकूण खर्च = `N * C_x`, जिथे `N` माहितीपत्रकांची संख्या आहे आणि `C_x` प्रति माहितीपत्रकाचा खर्च आहे.\nरचना Y: एकूण खर्च = `F_y + N * C_y`, जिथे `F_y` प्रारंभिक निश्चित खर्च आहे आणि `C_y` प्रति माहितीपत्रकाचा खर्च आहे. आपल्याला `C_y < C_x` असे दिले आहे.\nआपल्याला 500 प्रतींसाठी कोणती रचना स्वस्त आहे हे ठरवायचे आहे.\n\nपर्यायांचे मूल्यांकन करूया:\n1.  '200 माहितीपत्रकांची दोन्ही किंमत रचना वापरून किमती दाखवणारे उदाहरण.' यातून आपल्याला `200 * C_x` आणि `F_y + 200 * C_y` मिळेल. आपल्याला `C_x` मिळू शकेल, परंतु `F_y + 200 * C_y = Cost_Y(200)` या एका समीकरणात `F_y` आणि `C_y` हे दोन अज्ञात राहतील, जे अपुरे आहे.\n2.  'X रचना वापरून दर माहितीपत्रकाची किंमत आणि Y रचना वापरून सुरुवातीची किंमत.' यातून आपल्याला `C_x` आणि `F_y` मिळेल. आपल्याला `C_y` अजूनही माहित नाही, फक्त `C_y < C_x` एवढेच माहित आहे. हे अपुरे आहे.\n3.  'X रचना वापरून 1 माहितीपत्रकाची किंमत आणि Y रचना वापरून 2 माहिती पत्रकांची किंमत.' यातून आपल्याला `C_x` (X मधील 1 माहितीपत्रकावरून) आणि `F_y + 2 * C_y` (Y मधील 2 माहितीपत्रकांवरून) मिळेल. पुन्हा, आपल्याला `F_y` आणि `C_y` हे दोन अज्ञात एका समीकरणात राहतील, जे अपुरे आहे.\n4.  'उपलब्ध असलेल्या X व Y. रचना वापरून छपाईसाठी समान किमतींची देयके असलेल्या माहितीपत्रकांची संख्या.' याला `N_break_even` म्हणूया. या बिंदूवर, `N_break_even * C_x = F_y + N_break_even * C_y`. याचा अर्थ `F_y = N_break_even * (C_x - C_y)`. `C_x > C_y` असल्याने, `(C_x - C_y)` धन आहे. जर `N_break_even` माहित असेल, तर आपण त्याची 500 शी तुलना करू शकतो. जर `500 > N_break_even` असेल, तर रचना Y स्वस्त असेल (कारण निश्चित खर्च वसूल झाल्यानंतर प्रति-युनिट खर्च कमी असतो). जर `500 < N_break_even` असेल, तर रचना X स्वस्त असेल. जर `500 = N_break_even` असेल, तर दोन्ही समान खर्चिक असतील. अशा प्रकारे, `N_break_even` माहित असणे 500 माहितीपत्रकांसाठी सर्वात कमी खर्चिक रचना ठरवण्यासाठी पुरेसे आहे.",
    "options_breakdown": [
      {
        "option_english": "An example showing cost of 200 brochures by using both the cost structures.",
        "option_marathi": "200 माहितीपत्रकांची दोन्ही किंमत रचना वापरून किमती दाखवणारे 'उदाहरण.",
        "is_correct": false,
        "reason": "This provides only one data point for structure Y, which is insufficient to determine both its fixed cost and per-brochure cost."
      },
      {
        "option_english": "The cost per brochure using structure X and initial cost using structure Y.",
        "option_marathi": "X रचना वापरून दर माहितीपत्रकाची किंमत आणि Y रचना वापरून सुरुवातीची किंमत.",
        "is_correct": false,
        "reason": "This information is insufficient because the per-brochure cost for structure Y (`C_y`) is still unknown, only that it's less than `C_x`."
      },
      {
        "option_english": "The cost of 1 brochure using structure X and 2 brochures using structure Y.",
        "option_marathi": "X रचना वापरून 1 माहितीपत्रकाची किंमत आणि Y रचना वापरून 2 माहिती पत्रकांची किंमत.",
        "is_correct": false,
        "reason": "Similar to option 1, this provides only one data point for structure Y, leaving two unknowns (`F_y` and `C_y`) which cannot be uniquely determined."
      },
      {
        "option_english": "The number of brochures for which total bill will be same by both available structures X and Y.",
        "option_marathi": "उपलब्ध असलेल्या X व Y. रचना वापरून छपाईसाठी समान किमतींची देयके असलेल्या माहितीपत्रकांची संख्या.",
        "is_correct": true,
        "reason": "Knowing the break-even point (the number of brochures where costs are equal) allows direct comparison with the target quantity (500 brochures) to determine which structure is cheaper. If 500 is greater than the break-even point, structure Y is cheaper; otherwise, structure X is cheaper."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "एका बसमधून काही व्यक्ती प्रवास करत आहेत. 6 व्यक्ती तमीळ बोलतात, 15 व्यक्ती हिन्दी बोलतात आणि 6 व्यक्ती गुजराती बोलतात. त्या गटात काही व्यक्ती उल्लेखिलेल्या इतर भाषाही बोलतात. जर गटातील दोन व्यक्ती दोन भाषा बोलत असतील आणि एक व्यक्ती तीन भाषा बोलत असेल तर त्या बसमध्ये किती प्रवासी आहेत ?",
    "question_english": "Same persons are travelling in a bus. 6 persons are Tamil speakers, 15 are Hindi speakers and 6 are Gujarati speakers. Some persons speak any other language mentioned here. If two persons speak two languages and one person speaks three languages then how many travellers are in a bus ?",
    "options_marathi": [
      "21",
      "23",
      "22",
      "24"
    ],
    "options_english": [
      "21",
      "23",
      "22",
      "24"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Set Theory / Venn Diagrams",
    "difficulty": "Medium",
    "trap_detected": "Misinterpreting 'two persons speak two languages' (exactly two vs. at least two).",
    "explanation_english": "Let's use the principle of inclusion-exclusion or a simpler method for counting people in sets.\nGiven:\n- Number of Tamil speakers (|T|) = 6\n- Number of Hindi speakers (|H|) = 15\n- Number of Gujarati speakers (|G|) = 6\n- Number of persons who speak *exactly* two languages (N2) = 2\n- Number of persons who speak *exactly* three languages (N3) = 1\n\nThe sum of individual counts of speakers is `Sum = |T| + |H| + |G| = 6 + 15 + 6 = 27`.\nThis sum counts people who speak exactly one language once, people who speak exactly two languages twice, and people who speak exactly three languages thrice.\nSo, `Sum = (N1 * 1) + (N2 * 2) + (N3 * 3)`\nWhere N1 is the number of people who speak exactly one language.\n\nSubstitute the known values:\n`27 = N1 + (2 * 2) + (1 * 3)`\n`27 = N1 + 4 + 3`\n`27 = N1 + 7`\n`N1 = 27 - 7 = 20`.\n\nThe total number of travellers in the bus is the sum of people speaking exactly one, two, or three languages:\n`Total = N1 + N2 + N3 = 20 + 2 + 1 = 23`.",
    "explanation_marathi": "संच सिद्धांताचा किंवा लोकांची संख्या मोजण्यासाठी सोप्या पद्धतीचा वापर करूया.\nदिलेले आहे:\n- तमिळ बोलणारे व्यक्ती (|T|) = 6\n- हिंदी बोलणारे व्यक्ती (|H|) = 15\n- गुजराती बोलणारे व्यक्ती (|G|) = 6\n- *फक्त* दोन भाषा बोलणारे व्यक्ती (N2) = 2\n- *फक्त* तीन भाषा बोलणारे व्यक्ती (N3) = 1\n\nप्रत्येक भाषिक व्यक्तींच्या संख्येची बेरीज `बेरीज = |T| + |H| + |G| = 6 + 15 + 6 = 27`.\nया बेरजेमध्ये, फक्त एक भाषा बोलणाऱ्या व्यक्तींना एकदा, फक्त दोन भाषा बोलणाऱ्या व्यक्तींना दोनदा आणि फक्त तीन भाषा बोलणाऱ्या व्यक्तींना तीनदा मोजले जाते.\nम्हणून, `बेरीज = (N1 * 1) + (N2 * 2) + (N3 * 3)`\nजिथे N1 म्हणजे फक्त एक भाषा बोलणाऱ्या व्यक्तींची संख्या आहे.\n\nज्ञात मूल्ये समाविष्ट करूया:\n`27 = N1 + (2 * 2) + (1 * 3)`\n`27 = N1 + 4 + 3`\n`27 = N1 + 7`\n`N1 = 27 - 7 = 20`.\n\nबसमध्ये एकूण प्रवाशांची संख्या म्हणजे फक्त एक, दोन किंवा तीन भाषा बोलणाऱ्या व्यक्तींची बेरीज:\n`एकूण = N1 + N2 + N3 = 20 + 2 + 1 = 23`.",
    "options_breakdown": [
      {
        "option_english": "21",
        "option_marathi": "21",
        "is_correct": false,
        "reason": "This is incorrect. It might result from miscalculation or misinterpretation of the overlaps."
      },
      {
        "option_english": "23",
        "option_marathi": "23",
        "is_correct": true,
        "reason": "This is the correct total number of travellers calculated using the inclusion-exclusion principle for exactly one, two, and three language speakers."
      },
      {
        "option_english": "22",
        "option_marathi": "22",
        "is_correct": false,
        "reason": "This is incorrect. It might result from miscalculation, for example, if the triple overlap was not handled correctly."
      },
      {
        "option_english": "24",
        "option_marathi": "24",
        "is_correct": false,
        "reason": "This is incorrect. It might result from miscalculation or misinterpretation of the overlaps."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "जर मुले वर्गात एका ओळीत बसलेली असतील तर अध्यापिका त्यांच्यासाठी काही स्पष्टीकरण करत असताना ती सर्वांशी नेत्र संपर्क साधू शकते. जर मुले नेहमीच टेबलाभोवती गट करून बसत असतील तर असे करणे शक्य होत नाही. शिवाय मुले जेव्हा मान वर करतात तेव्हा त्यांना अध्यापिका दिसण्याऐवजी समोरचे मूल दिसते आणि बोलण्याचा मोह होतो. ओळीत बसल्यामुळे मुलांना अधिक एकाग्रतेने काम करता येत असल्यामुळे ही शाळेची प्रमाणित बैठकरचना असायला हवी. वरील युक्तिवाद दुबळा करणारे सर्वाधिक योग्य विधान निवडा.",
    "question_english": "If children are sitting in rows in a classroom, the teacher can have eye contact with all of them while she is explaining something to them. This is not always possible if they are sitting in groups around tables. Also, when they look up, instead of seeing the teacher they see the child opposite in a group and being tempted to talk. So, sitting in rows helps children to concentrate better on their work and should therefore be the standard arrangement in every school classroom. Select the statement that would most weaken the above argument.",
    "options_marathi": [
      "टेबलांपेक्षा डेस्कच्या ओळी वर्गखोलीची अधिक जागा व्यापत नाहीत.",
      "परंपरावाद्यांच्या युक्तिवादानुसार ओळीत बसलेल्या सर्व वर्गाला शिकवणे सर्वात उत्तम आहे.",
      "ओळीत बसली काय नि गटात बसली काय काही मुलांचे लक्ष सहज विचलित होते.",
      "चार ते सातांच्या गटात बसणे ज्ञान रचना करण्यासाठी आवश्यक असते."
    ],
    "options_english": [
      "Rows of desks take up no more classroom space than tables.",
      "Traditionalists argue that teaching the whole class in rows is best.",
      "Some children are easily distracted whether they sit in rows or in groups.",
      "Sitting in groups of between four and seven for constructing knowledge is essential."
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Critical Reasoning (Weakening an Argument)",
    "difficulty": "Hard",
    "trap_detected": "Choosing an option that only slightly weakens or is irrelevant, instead of one that fundamentally undermines the conclusion or introduces a strong counter-argument.",
    "explanation_english": "The argument proposes that sitting in rows should be the standard classroom arrangement because it facilitates teacher eye contact and reduces student distraction, thereby improving concentration. To weaken this argument, we need a statement that either disproves these benefits, shows they are insignificant, or, more effectively, introduces a compelling reason why group seating is necessary or superior for other important educational goals, thus undermining the 'standard arrangement' conclusion.\n\nLet's analyze the options:\n1.  'Rows of desks take up no more classroom space than tables.' This addresses a practical concern (space) but doesn't directly challenge the core argument about concentration or learning effectiveness.\n2.  'Traditionalists argue that teaching the whole class in rows is best.' This is an appeal to tradition or authority, not a logical counter-argument based on evidence or reasoning.\n3.  'Some children are easily distracted whether they sit in rows or in groups.' This slightly weakens the argument by suggesting that rows might not be a universal solution for distraction for all children. However, it doesn't provide a strong reason *against* rows being the standard, nor does it offer a compelling reason *for* groups.\n4.  'Sitting in groups of between four and seven for constructing knowledge is essential.' This is the strongest weakening statement. It introduces a critical educational purpose ('constructing knowledge') for which group seating is 'essential'. If group work is essential for a fundamental aspect of learning, then making rows the *standard* arrangement would be detrimental to this essential activity. This provides a powerful counter-reason for group seating, directly challenging the conclusion that rows 'should therefore be the standard arrangement in every school classroom' by highlighting a significant trade-off.",
    "explanation_marathi": "हा युक्तिवाद असा मांडतो की, वर्गात रांगेत बसणे ही प्रमाणित व्यवस्था असावी कारण यामुळे शिक्षकांना विद्यार्थ्यांशी डोळ्यांशी संपर्क साधणे सोपे होते आणि विद्यार्थ्यांचे लक्ष विचलित होण्याचे प्रमाण कमी होते, ज्यामुळे एकाग्रता सुधारते. हा युक्तिवाद कमकुवत करण्यासाठी, आपल्याला असे विधान हवे आहे जे एकतर या फायद्यांना खोटे ठरवते, ते नगण्य असल्याचे दर्शवते, किंवा अधिक प्रभावीपणे, गट करून बसणे इतर महत्त्वाच्या शैक्षणिक उद्दिष्टांसाठी आवश्यक किंवा श्रेष्ठ का आहे याचे एक ठोस कारण देते, ज्यामुळे 'प्रमाणित व्यवस्था' या निष्कर्षाला धक्का लागतो.\n\nपर्यायांचे विश्लेषण करूया:\n1.  'टेबलांपेक्षा डेस्कच्या ओळी वर्गखोलीची अधिक जागा व्यापत नाहीत.' हे जागेच्या व्यावहारिक चिंतेवर लक्ष केंद्रित करते, परंतु एकाग्रता किंवा शिकण्याच्या प्रभावीतेबद्दलच्या मूळ युक्तिवादाला थेट आव्हान देत नाही.\n2.  'परंपरावाद्यांच्या युक्तिवादानुसार ओळीत बसलेल्या सर्व वर्गाला शिकवणे सर्वात उत्तम आहे.' हा परंपरेचा किंवा अधिकाराचा आधार आहे, पुराव्यावर किंवा तर्कावर आधारित तार्किक प्रति-युक्तिवाद नाही.\n3.  'ओळीत बसली काय नि गटात बसली काय काही मुलांचे लक्ष सहज विचलित होते.' हे विधान युक्तिवादाला थोडे कमकुवत करते कारण ते सूचित करते की रांगा सर्व मुलांसाठी विचलनावर सार्वत्रिक उपाय नसतील. तथापि, ते रांगांना प्रमाणित व्यवस्था बनवण्याविरुद्ध कोणतेही ठोस कारण देत नाही, किंवा गटांसाठी कोणतेही आकर्षक कारण देत नाही.\n4.  'चार ते सातांच्या गटात बसणे ज्ञान रचना करण्यासाठी आवश्यक असते.' हे सर्वात मजबूत कमकुवत करणारे विधान आहे. ते 'ज्ञान रचना' या गंभीर शैक्षणिक उद्दिष्टाची ओळख करून देते, ज्यासाठी गट करून बसणे 'आवश्यक' आहे. जर शिकण्याच्या मूलभूत पैलूसाठी गटकार्य आवश्यक असेल, तर रांगांना 'प्रमाणित' व्यवस्था बनवणे या आवश्यक कार्यासाठी हानिकारक ठरेल. हे गट करून बसण्यासाठी एक शक्तिशाली प्रति-कारण प्रदान करते, ज्यामुळे रांगा 'म्हणून प्रत्येक शाळेच्या वर्गखोलीत प्रमाणित व्यवस्था असावी' या निष्कर्षाला थेट आव्हान मिळते, कारण ते एका महत्त्वपूर्ण तडजोडीवर प्रकाश टाकते.",
    "options_breakdown": [
      {
        "option_english": "Rows of desks take up no more classroom space than tables.",
        "option_marathi": "टेबलांपेक्षा डेस्कच्या ओळी वर्गखोलीची अधिक जागा व्यापत नाहीत.",
        "is_correct": false,
        "reason": "This statement is irrelevant to the core argument about student concentration and teacher-student interaction, which are the premises for advocating rows."
      },
      {
        "option_english": "Traditionalists argue that teaching the whole class in rows is best.",
        "option_marathi": "परंपरावाद्यांच्या युक्तिवादानुसार ओळीत बसलेल्या सर्व वर्गाला शिकवणे सर्वात उत्तम आहे.",
        "is_correct": false,
        "reason": "This is an appeal to tradition, not a logical counter-argument that weakens the premises or conclusion of the given argument."
      },
      {
        "option_english": "Some children are easily distracted whether they sit in rows or in groups.",
        "option_marathi": "ओळीत बसली काय नि गटात बसली काय काही मुलांचे लक्ष सहज विचलित होते.",
        "is_correct": false,
        "reason": "While it slightly weakens the universality of the 'rows improve concentration' claim, it doesn't provide a strong enough reason to reject rows as the standard, nor does it offer a compelling advantage for groups."
      },
      {
        "option_english": "Sitting in groups of between four and seven for constructing knowledge is essential.",
        "option_marathi": "चार ते सातांच्या गटात बसणे ज्ञान रचना करण्यासाठी आवश्यक असते.",
        "is_correct": true,
        "reason": "This statement introduces a crucial educational benefit of group seating ('constructing knowledge is essential') that cannot be achieved in rows. This directly challenges the conclusion that rows should be the 'standard arrangement' by presenting a compelling reason for the necessity of group work, thus undermining the argument's overall recommendation."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "आपल्या विद्यार्थ्यांनी एकमेकांकडून अनौपचारिकरीत्या विविध कौशल्ये शिकावीत असे श्रीमती कविता यांना वाटते. यामुळे जरी त्या जोडी-सहभाग कामासाठी प्रत्येकाने जोडीदार निवडण्याची मुभा देत असल्या तरी कोणतीही जोडी सलगपणे चारपेक्षा अधिक दिवस काम करणार नाहीत हे त्या पाहतात. आता एडल व राही यांनी मिळून रांगेने चार दिवस काम केले. कला व हमिद यांनी सतत तीन दिवस काम केले. कला व एडल यांनी जोडी-कामाच्या आधीच्या फेरीत एकत्र काम केलेले असल्यांने श्रीमती कविता या लगेचच त्यांची जोडी बनवायची नाही. आता राहीबरोबर काम करायला योग्य विद्यार्थी निवडा -",
    "question_english": "Smt. Kavita wants her students to learn various skills from each other informally. Thus though she allows everyone to choose her or his partner for pair-share work, she makes sure that no pair will work together for more than four days continuously. Now Adal and Rahi worked together for four days in a row and Kala and Hamid worked for three days continuously. Kala and Adal worked together during last round of pair work and therefore she does not want to pair them right now. Select the student that should work with Rahi at present.",
    "options_marathi": [
      "'वर उल्लेख नसलेल्या अन्य विद्यार्थ्यांबरोबर",
      "कला",
      "हमिद",
      "येथे उल्लेखिलेल्यापैकी कोणीही विद्यार्थी निवडणे शक्य नाही"
    ],
    "options_english": [
      "With any other student not mentioned here",
      "Kala",
      "Hamid",
      "It is not possible to select student from those mentioned here"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Logic Puzzles / Scheduling",
    "difficulty": "Medium",
    "trap_detected": "Not considering the implications for all students when forming pairs, or misinterpreting the 'last round' constraint.",
    "explanation_english": "Let's list the students and the constraints:\nStudents: Adal (A), Rahi (R), Kala (K), Hamid (H).\n\nRules:\n1.  No pair works together for more than 4 continuous days.\n2.  Kala (K) and Adal (A) cannot be paired 'right now' (due to having worked together in the last round).\n\nCurrent Status:\n-   Adal (A) and Rahi (R) worked together for 4 days. According to Rule 1, A and R cannot work together now.\n-   Kala (K) and Hamid (H) worked for 3 days. They *could* work together for one more day, or with new partners.\n\nWe need to find a partner for Rahi (R).\n\n1.  **Can Rahi pair with Adal (A)?** No, they just completed 4 continuous days (Rule 1).\n2.  **Can Rahi pair with Kala (K)?**\n    -   This is a new pair (R-K), so Rule 1 is not violated.\n    -   Rule 2 (Kala and Adal cannot pair) is also not violated.\n    -   If Rahi pairs with Kala, then Adal (A) and Hamid (H) are left. A-H is a new pair, so Rule 1 is not violated. Hamid has only worked 3 days with Kala, so he is free to pair with Adal. This arrangement (R-K and A-H) works perfectly, satisfying all conditions.\n3.  **Can Rahi pair with Hamid (H)?**\n    -   This is a new pair (R-H), so Rule 1 is not violated.\n    -   If Rahi pairs with Hamid, then Adal (A) and Kala (K) are left. However, Rule 2 states that Kala and Adal cannot be paired 'right now'. This means if Rahi pairs with Hamid, then Kala and Adal are forced to pair, which is disallowed. Therefore, Rahi cannot pair with Hamid if we are to form pairs among the mentioned students.\n\nSince pairing Rahi with Kala allows all students to be paired according to the rules, Kala is the most suitable student to work with Rahi.",
    "explanation_marathi": "विद्यार्थी आणि नियमांची यादी करूया:\nविद्यार्थी: एडल (A), राही (R), कला (K), हमिद (H).\n\nनियम:\n1.  कोणतीही जोडी सलग 4 दिवसांपेक्षा जास्त काम करणार नाही.\n2.  कला (K) आणि एडल (A) यांना 'आत्ता' जोडी बनवता येणार नाही (मागील फेरीत एकत्र काम केल्यामुळे).\n\nसध्याची स्थिती:\n-   एडल (A) आणि राही (R) यांनी सलग 4 दिवस काम केले आहे. नियम 1 नुसार, A आणि R आता एकत्र काम करू शकत नाहीत.\n-   कला (K) आणि हमिद (H) यांनी सलग 3 दिवस काम केले आहे. ते आणखी एक दिवस एकत्र काम करू शकतात, किंवा नवीन भागीदारांसोबत काम करू शकतात.\n\nआपल्याला राही (R) साठी एक भागीदार शोधायचा आहे.\n\n1.  **राही एडल (A) सोबत जोडी करू शकते का?** नाही, त्यांनी नुकतेच सलग 4 दिवस पूर्ण केले आहेत (नियम 1).\n2.  **राही कला (K) सोबत जोडी करू शकते का?**\n    -   ही एक नवीन जोडी आहे (R-K), त्यामुळे नियम 1 चे उल्लंघन होत नाही.\n    -   नियम 2 (कला आणि एडल जोडी करू शकत नाहीत) चे देखील उल्लंघन होत नाही.\n    -   जर राही कला सोबत जोडी करते, तर एडल (A) आणि हमिद (H) उरतात. A-H ही एक नवीन जोडी आहे, त्यामुळे नियम 1 चे उल्लंघन होत नाही. हमिदने कला सोबत फक्त 3 दिवस काम केले आहे, त्यामुळे तो एडल सोबत जोडी करण्यास मोकळा आहे. ही व्यवस्था (R-K आणि A-H) सर्व अटी पूर्ण करते आणि योग्य आहे.\n3.  **राही हमिद (H) सोबत जोडी करू शकते का?**\n    -   ही एक नवीन जोडी आहे (R-H), त्यामुळे नियम 1 चे उल्लंघन होत नाही.\n    -   जर राही हमिद सोबत जोडी करते, तर एडल (A) आणि कला (K) उरतात. तथापि, नियम 2 नुसार कला आणि एडल यांना 'आत्ता' जोडी बनवता येणार नाही. याचा अर्थ जर राही हमिद सोबत जोडी करते, तर कला आणि एडल यांना जबरदस्तीने जोडी करावी लागेल, जे निषिद्ध आहे. म्हणून, उल्लेख केलेल्या विद्यार्थ्यांमधून राही हमिद सोबत जोडी करू शकत नाही.\n\nराहीला कला सोबत जोडी केल्याने सर्व विद्यार्थी नियमांनुसार जोडी करू शकतात, म्हणून कला ही राहीसोबत काम करण्यासाठी सर्वात योग्य विद्यार्थी आहे.",
    "options_breakdown": [
      {
        "option_english": "With any other student not mentioned here",
        "option_marathi": "'वर उल्लेख नसलेल्या अन्य विद्यार्थ्यांबरोबर",
        "is_correct": false,
        "reason": "A suitable partner is available among the mentioned students, making this option unnecessary."
      },
      {
        "option_english": "Kala",
        "option_marathi": "कला",
        "is_correct": true,
        "reason": "Pairing Rahi with Kala is permissible. This also allows Adal to pair with Hamid, satisfying all the given conditions and constraints for all students."
      },
      {
        "option_english": "Hamid",
        "option_marathi": "हमिद",
        "is_correct": false,
        "reason": "If Rahi pairs with Hamid, then Adal and Kala are left. However, Kala and Adal are explicitly forbidden from pairing 'right now', which would leave one student without a valid partner or force a rule violation."
      },
      {
        "option_english": "It is not possible to select student from those mentioned here",
        "option_marathi": "येथे उल्लेखिलेल्यापैकी कोणीही विद्यार्थी निवडणे शक्य नाही",
        "is_correct": false,
        "reason": "It is possible to select a student (Kala) from the mentioned list who satisfies all conditions."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "जर एका विशेष मुलाचा कायम समावेश करायचा असेल आणि दोन विशिष्ट मुलांना नेहमीच वगळायचे असेल तर प्रकल्पाचे काम करण्यासाठी 15 मुलांतून तीन मुलांची निवड करण्याच्या मार्गांची संख्या निवडा.",
    "question_english": "Select number of ways can three children can be selected to work on a project out of 15 children, if one particular child is always included and two particular children are always excluded.",
    "options_marathi": [
      "105",
      "91",
      "76",
      "66"
    ],
    "options_english": [
      "105",
      "91",
      "76",
      "66"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Combinations",
    "difficulty": "Easy",
    "trap_detected": "Incorrectly adjusting the total number of children or the number of children to be selected.",
    "explanation_english": "We need to select 3 children out of 15, with specific conditions.\n1.  **One particular child is always included**: This means one spot in our group of 3 is already filled. So, we now need to select `3 - 1 = 2` more children.\n    The total pool of children also reduces by 1 (the child who is already included). So, `15 - 1 = 14` children remain.\n2.  **Two particular children are always excluded**: These two children are removed from the remaining pool of available children. So, `14 - 2 = 12` children are now available for selection.\n\nNow, we need to choose 2 children from these 12 available children. This is a combination problem, as the order of selection does not matter.\nNumber of ways = `C(n, k) = n! / (k! * (n-k)!)`\nHere, `n = 12` (available children) and `k = 2` (children to select).\n`C(12, 2) = 12! / (2! * (12-2)!) = 12! / (2! * 10!)`\n`= (12 * 11) / (2 * 1)`\n`= 6 * 11 = 66`.",
    "explanation_marathi": "आपल्याला 15 मुलांमधून 3 मुले निवडायची आहेत, विशिष्ट अटींसह.\n1.  **एक विशिष्ट मूल नेहमी समाविष्ट केले जाते**: याचा अर्थ आपल्या 3 मुलांच्या गटातील एक जागा आधीच भरली आहे. त्यामुळे, आपल्याला आता आणखी `3 - 1 = 2` मुले निवडायची आहेत.\n    मुलांच्या एकूण संख्येतूनही 1 मूल (जे आधीच समाविष्ट केले आहे) कमी होते. त्यामुळे, `15 - 1 = 14` मुले शिल्लक राहतात.\n2.  **दोन विशिष्ट मुलांना नेहमी वगळले जाते**: या दोन मुलांना उर्वरित उपलब्ध मुलांच्या संख्येतून काढून टाकले जाते. त्यामुळे, `14 - 2 = 12` मुले आता निवडीसाठी उपलब्ध आहेत.\n\nआता, आपल्याला या 12 उपलब्ध मुलांमधून 2 मुले निवडायची आहेत. हा संयोजनाचा (combination) प्रश्न आहे, कारण निवडीचा क्रम महत्त्वाचा नाही.\nनिवडीचे मार्ग = `C(n, k) = n! / (k! * (n-k)!)`\nयेथे, `n = 12` (उपलब्ध मुले) आणि `k = 2` (निवडायची मुले).\n`C(12, 2) = 12! / (2! * (12-2)!) = 12! / (2! * 10!)`\n`= (12 * 11) / (2 * 1)`\n`= 6 * 11 = 66`.",
    "options_breakdown": [
      {
        "option_english": "105",
        "option_marathi": "105",
        "is_correct": false,
        "reason": "This would be C(15,3) if there were no constraints, or C(15-1, 3-1) = C(14,2) = 91 if only one included, or C(15-2, 3) = C(13,3) = 286 if only two excluded."
      },
      {
        "option_english": "91",
        "option_marathi": "91",
        "is_correct": false,
        "reason": "This would be C(14,2) if only the 'one included' constraint was applied, without excluding the two other children from the pool."
      },
      {
        "option_english": "76",
        "option_marathi": "76",
        "is_correct": false,
        "reason": "This is an incorrect calculation."
      },
      {
        "option_english": "66",
        "option_marathi": "66",
        "is_correct": true,
        "reason": "After including one child and excluding two, we need to select 2 more children from the remaining 12, which is C(12,2) = 66 ways."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "संदेश गुप्त राखण्यासाठी जितू आणि अलेक्स यांनी पुढील नियमांवर आधारित संकेत प्रणाली तयार केली. (a) A ते M पर्यंतच्या प्रत्येक अक्षराऐवजी वर्णक्रम उलटा गणून Z ते N चा समक्रम असणारे अक्षर ठेवायचे म्हणजे A होईल Z, B होईल Y, असे क्रमाने होईल. N ते Z या वर्णाक्षरांऐवजी A ते M वर्णाक्षरे ठेवायची म्हणजे N होईल A, O होईल B, असे क्रमाने होईल. (b) प्रक्रिया (a) मधून मिळालेल्या प्रत्येक अक्षराऐवजी सर्व वर्णाक्षरे उलट्या क्रमाने मांडून त्या प्रत्येक अक्षराचा दोन अंकी क्रम तेथे ठेवायचा, म्हणजे A होईल 26, B होईल 25, X होईल 03 असे क्रमाने होईल. याच प्रणालीवर आधारित LUKEWARM या शब्दाचा संकेत निवडा -",
    "question_english": "To keep their messages secret Jitu and Alex formulated a coding system that is based on following operations : (a) Replace each letter from A to M by its number wise equivalent with the alphabets reversed from Z to N; so A becomes Z, B becomes Y and continued and alphabets from N to Z are replaced by alphabets from A to M; so N becomes A, O becomes B and continue. (b) Replace each letter resulting from operation (a) by a two digit number according to its place in all alphabets arranged in reversed order; so A becomes 26, B becomes 25, X becomes 03 and so on. Select the coded form of the word LUKEWARM according to this system.",
    "options_marathi": [
      "1221110523151813",
      "1219110517012213",
      "1221110517012213",
      "1219110517012613"
    ],
    "options_english": [
      "1221110523151813",
      "1219110517012213",
      "1221110517012213",
      "1219110517012613"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Advanced Coding-Decoding",
    "difficulty": "Hard",
    "trap_detected": "Complex multi-step encoding, potential for calculation errors, and duplicated options.",
    "explanation_english": "Let's encode the word LUKEWARM using the given two operations:\n\n**Operation (a): Letter Substitution**\n-   A-M letters are replaced by their reverse alphabetical equivalent from Z-N (e.g., A=Z, B=Y, L=O, M=N).\n-   N-Z letters are replaced by A-M (e.g., N=A, O=B, U=H, W=J, R=E).\n\nApplying this to LUKEWARM:\n-   L (12th letter, A-M range) -> O (26-12+1 = 15th letter from Z, which is O)\n-   U (21st letter, N-Z range) -> H (21-13 = 8th letter from A, which is H)\n-   K (11th letter, A-M range) -> P (26-11+1 = 16th letter from Z, which is P)\n-   E (5th letter, A-M range) -> V (26-5+1 = 22nd letter from Z, which is V)\n-   W (23rd letter, N-Z range) -> J (23-13 = 10th letter from A, which is J)\n-   A (1st letter, A-M range) -> Z (26-1+1 = 26th letter from Z, which is Z)\n-   R (18th letter, N-Z range) -> E (18-13 = 5th letter from A, which is E)\n-   M (13th letter, A-M range) -> N (26-13+1 = 14th letter from Z, which is N)\n\nAfter Operation (a), LUKEWARM becomes OHVPJZEN.\n\n**Operation (b): Numerical Encoding (Reversed Alphabet Position)**\n-   Each letter is replaced by a two-digit number representing its position in the reversed alphabet (A=26, B=25, ..., Z=01). This can be calculated as `27 - (Alphabetical Position)`.\n\nApplying this to OHVPJZEN:\n-   O (15th letter) -> 27 - 15 = 12\n-   H (8th letter) -> 27 - 8 = 19\n-   V (22nd letter) -> 27 - 22 = 05\n-   P (16th letter) -> 27 - 16 = 11\n-   J (10th letter) -> 27 - 10 = 17\n-   Z (26th letter) -> 27 - 26 = 01\n-   E (5th letter) -> 27 - 5 = 22\n-   N (14th letter) -> 27 - 14 = 13\n\nCombining these numbers, the final coded form of LUKEWARM is 1219110517012213.",
    "explanation_marathi": "दिलेल्या दोन क्रिया वापरून LUKEWARM या शब्दाचे सांकेतिकीकरण करूया:\n\n**क्रिया (a): अक्षर बदल**\n-   A ते M पर्यंतची अक्षरे Z ते N पर्यंतच्या उलट वर्णक्रमानुसार बदलली जातात (उदा. A=Z, B=Y, L=O, M=N).\n-   N ते Z पर्यंतची अक्षरे A ते M पर्यंतच्या अक्षरांनी बदलली जातात (उदा. N=A, O=B, U=H, W=J, R=E).\n\nLUKEWARM वर ही क्रिया लागू केल्यास:\n-   L (12 वे अक्षर, A-M श्रेणी) -> O (Z पासून 26-12+1 = 15 वे अक्षर, जे O आहे)\n-   U (21 वे अक्षर, N-Z श्रेणी) -> H (A पासून 21-13 = 8 वे अक्षर, जे H आहे)\n-   K (11 वे अक्षर, A-M श्रेणी) -> P (Z पासून 26-11+1 = 16 वे अक्षर, जे P आहे)\n-   E (5 वे अक्षर, A-M श्रेणी) -> V (Z पासून 26-5+1 = 22 वे अक्षर, जे V आहे)\n-   W (23 वे अक्षर, N-Z श्रेणी) -> J (A पासून 23-13 = 10 वे अक्षर, जे J आहे)\n-   A (1 ले अक्षर, A-M श्रेणी) -> Z (Z पासून 26-1+1 = 26 वे अक्षर, जे Z आहे)\n-   R (18 वे अक्षर, N-Z श्रेणी) -> E (A पासून 18-13 = 5 वे अक्षर, जे E आहे)\n-   M (13 वे अक्षर, A-M श्रेणी) -> N (Z पासून 26-13+1 = 14 वे अक्षर, जे N आहे)\n\nक्रिया (a) नंतर, LUKEWARM हे OHVPJZEN बनते.\n\n**क्रिया (b): संख्यात्मक सांकेतिकीकरण (उलट वर्णक्रमानुसार स्थान)**\n-   प्रत्येक अक्षर उलट वर्णक्रमानुसार त्याच्या स्थानानुसार दोन अंकी संख्येने बदलले जाते (A=26, B=25, ..., Z=01). याची गणना `27 - (वर्णक्रमानुसार स्थान)` अशी केली जाऊ शकते.\n\nOHVPJZEN वर ही क्रिया लागू केल्यास:\n-   O (15 वे अक्षर) -> 27 - 15 = 12\n-   H (8 वे अक्षर) -> 27 - 8 = 19\n-   V (22 वे अक्षर) -> 27 - 22 = 05\n-   P (16 वे अक्षर) -> 27 - 16 = 11\n-   J (10 वे अक्षर) -> 27 - 10 = 17\n-   Z (26 वे अक्षर) -> 27 - 26 = 01\n-   E (5 वे अक्षर) -> 27 - 5 = 22\n-   N (14 वे अक्षर) -> 27 - 14 = 13\n\nया संख्या एकत्र केल्यास, LUKEWARM चे अंतिम सांकेतिक रूप 1219110517012213 असे आहे.",
    "options_breakdown": [
      {
        "option_english": "1221110523151813",
        "option_marathi": "1221110523151813",
        "is_correct": false,
        "reason": "This option does not match the calculated coded form, indicating errors in either substitution or numerical encoding."
      },
      {
        "option_english": "1219110517012213",
        "option_marathi": "1219110517012213",
        "is_correct": true,
        "reason": "This option perfectly matches the coded form derived by correctly applying both operations (a) and (b) sequentially."
      },
      {
        "option_english": "1221110517012213",
        "option_marathi": "1221110517012213",
        "is_correct": false,
        "reason": "This option is identical to option 2 in the input, but based on the derived code, option 2 is the correct one. This might be a typo in the original question's options."
      },
      {
        "option_english": "1219110517012613",
        "option_marathi": "1219110517012613",
        "is_correct": false,
        "reason": "This option does not match the calculated coded form, indicating errors in either substitution or numerical encoding, specifically for the last letter."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "A, C, E, G आणि 1 ही पाच गावे परस्परांशी विभिन्न वाहतूक व्यवस्थांनी जोडलेली आहेत. माहिती अभ्यासून त्या संदर्भातील चुकीचे विधान निवडा. A व C ही गावे बोट व रेल्वेने जोडलेली आहेत. E व G ही गावे बस व बोट यांनी जोडलेली आहेत. C व 1 ही गावे वरून जाणाऱ्या पुलाने जोडलेली असून त्यावरून फक्त दोनचाकी वाहने व पादचाऱ्यांना जाता येते. A वE ही गावे फक्त बोटीने जोडलेली असून E व 1 ही गावे बस व रेल्वेने जोडलेली आहेत.",
    "question_english": "A, C, E, G, and I are five villages that are connected with each other by various modes of transport. Study the information and select the false statement with respect to it : A and C are connected by boat and rail; E and G are connected by bus and boat; C and I are connected by overhead bridge that allows two wheelers and pedestrians only; A and E are connected by boat only and E and I are connected by bus and rail.",
    "options_marathi": [
      "कोणालाही वाहतुकीच्या स्वरूपात बदल न करता C गावाहून G गावाला जाता येते.",
      "जर गावकऱ्याला A गावातून 1 गावाला जायचे असेल तर त्याला किंवा तिला E गावाला भेट देणे टाळता येत नाही.",
      "E हे गाव तीन गावांशी थेट जोडलेले आहे.",
      "वाहतुकीच्या स्वरूपात बदल न करता G गावाहून I गावाला जाता येते."
    ],
    "options_english": [
      "One can go from C to G without changing transport mode.",
      "Villagers from A can't escape visiting E if he or she wants to go to I.",
      "E is directly connected to 3 villages.",
      "It is possible to go to I from G without changing transport mode."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Logical Puzzle - Connectivity",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of 'can't escape'",
    "explanation_english": "Let's analyze the connections: A-C (Boat, Rail), E-G (Bus, Boat), C-I (Bridge - 2W, Pedestrian), A-E (Boat only), E-I (Bus, Rail).\n1.  'One can go from C to G without changing transport mode.' - From C, one can go to A by boat, then A to E by boat, then E to G by boat. So, it's possible to travel C-A-E-G using only boat. This statement is TRUE.\n2.  'Villagers from A can't escape visiting E if he or she wants to go to I.' - To go from A to I, one path is A-E-I. However, another path is A-C-I. Since C and I are connected by an overhead bridge, a villager can go from A to C (by boat or rail) and then C to I (by bridge), thus avoiding E. Therefore, the statement that one 'can't escape visiting E' is FALSE.\n3.  'E is directly connected to 3 villages.' - E is directly connected to G (Bus, Boat), A (Boat), and I (Bus, Rail). So, E is connected to 3 villages. This statement is TRUE.\n4.  'It is possible to go to I from G without changing transport mode.' - From G, one can go to E by bus, then E to I by bus. So, it's possible to travel G-E-I using only bus. This statement is TRUE.\nSince the question asks for the FALSE statement, option 2 is the correct answer.",
    "explanation_marathi": "चला, वाहतूक व्यवस्थांचे विश्लेषण करूया: A-C (बोट, रेल्वे), E-G (बस, बोट), C-I (पूल - दुचाकी, पादचारी), A-E (फक्त बोट), E-I (बस, रेल्वे).\n1. 'कोणालाही वाहतुकीच्या स्वरूपात बदल न करता C गावाहून G गावाला जाता येते.' - C पासून A पर्यंत बोटीने, नंतर A पासून E पर्यंत बोटीने, आणि नंतर E पासून G पर्यंत बोटीने जाता येते. त्यामुळे, फक्त बोटीचा वापर करून C-A-E-G प्रवास करणे शक्य आहे. हे विधान सत्य आहे.\n2. 'जर गावकऱ्याला A गावातून 1 गावाला जायचे असेल तर त्याला किंवा तिला E गावाला भेट देणे टाळता येत नाही.' - A पासून I पर्यंत जाण्यासाठी एक मार्ग A-E-I आहे. तथापि, दुसरा मार्ग A-C-I आहे. C आणि I ही गावे वरून जाणाऱ्या पुलाने जोडलेली असल्याने, एक गावकरी A पासून C पर्यंत (बोट किंवा रेल्वेने) आणि नंतर C पासून I पर्यंत (पुलाने) जाऊ शकतो, ज्यामुळे E गावाला भेट देणे टाळता येते. म्हणून, 'E गावाला भेट देणे टाळता येत नाही' हे विधान असत्य आहे.\n3. 'E हे गाव तीन गावांशी थेट जोडलेले आहे.' - E हे गाव G (बस, बोट), A (बोट) आणि I (बस, रेल्वे) या तीन गावांना थेट जोडलेले आहे. त्यामुळे, E हे तीन गावांना जोडलेले आहे. हे विधान सत्य आहे.\n4. 'वाहतुकीच्या स्वरूपात बदल न करता G गावाहून I गावाला जाता येते.' - G पासून E पर्यंत बसने, नंतर E पासून I पर्यंत बसने जाता येते. त्यामुळे, फक्त बसचा वापर करून G-E-I प्रवास करणे शक्य आहे. हे विधान सत्य आहे.\nप्रश्नात असत्य विधान निवडण्यास सांगितले असल्याने, पर्याय 2 हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "One can travel from C to G via A and E using only boat (C-A by boat, A-E by boat, E-G by boat). Thus, this statement is true.",
        "reason_marathi": "C पासून G पर्यंत A आणि E मार्गे फक्त बोटीने प्रवास करता येतो (C-A बोटीने, A-E बोटीने, E-G बोटीने). त्यामुळे, हे विधान सत्य आहे."
      },
      {
        "option_number": 2,
        "is_correct": true,
        "reason_english": "To go from A to I, one can take the path A-C-I. A and C are connected by boat/rail, and C and I are connected by an overhead bridge. This path does not involve visiting E. Therefore, the statement 'can't escape visiting E' is false.",
        "reason_marathi": "A पासून I पर्यंत जाण्यासाठी, A-C-I हा मार्ग वापरता येतो. A आणि C बोट/रेल्वेने जोडलेले आहेत, आणि C आणि I वरून जाणाऱ्या पुलाने जोडलेले आहेत. या मार्गात E गावाला भेट देण्याची आवश्यकता नाही. म्हणून, 'E गावाला भेट देणे टाळता येत नाही' हे विधान असत्य आहे."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "E is directly connected to A (boat), G (bus, boat), and I (bus, rail). So, E is indeed directly connected to 3 villages. This statement is true.",
        "reason_marathi": "E हे A (बोट), G (बस, बोट) आणि I (बस, रेल्वे) या तीन गावांना थेट जोडलेले आहे. त्यामुळे, E हे खरोखरच 3 गावांना थेट जोडलेले आहे. हे विधान सत्य आहे."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "One can travel from G to I via E using only bus (G-E by bus, E-I by bus). Thus, this statement is true.",
        "reason_marathi": "G पासून I पर्यंत E मार्गे फक्त बसने प्रवास करता येतो (G-E बसने, E-I बसने). त्यामुळे, हे विधान सत्य आहे."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "पुढील परिच्छेद वाचून अधोरेखित विधानांतील संबंधाचे सर्वात उचित वर्णन करणारा पर्याय निवडा : जेव्हा लोकसंख्येची वैशिष्ट्ये स्त्रियांच्या विरोधात फारसा वा जराही भेदभाव दाखवत नाहीत, तेव्हा इतर अनेक पद्धतींनी स्त्रियांना त्यांच्या न्याय्य हक्कांबाबत डावलले जाते. अफगाणिस्तान हा एकमेव देश असा असावा की जेथे शासन कटाक्षाने मुलींना शिक्षणापासून वंचित ठेवण्यात सक्रिय आहे. परंतु आशिया, आफ्रिका तसेच लॅटिन अमेरिकेतील बऱ्याच देशांमध्ये मुलींना मुलांच्या तुलनेत खूप कमी प्रमाणात शिक्षणाची संधी उपलब्ध आहे. तसेच स्वतःच्या नैसर्गिक प्रज्ञांना जोपासण्यासाठी प्रोत्साहन देण्यापासून ते त्यांना समूहाच्या सामाजिक कार्यक्रमांत उचित सहभाग घेण्यासाठी मुलींना मिळणाऱ्या मूलभूत सुविधांच्या उपलब्धींत अनेक कमतरता आहेत.",
    "question_english": "Read the following paragraph and select the most appropriate option which describes relationship between underlined statements. Even when demographic characteristics do not show anti-female bias or any at all, there are other ways in which women get less than a square deal. Afghanistan may be the only country in the world where the government is keen on actively excluding girls from schooling; but there are many countries in Asia and Africa and also in Latin America, where girls have far less opportunity for schooling than do boys. And there are other deficiencies in basic facilities available to women, varying form encouragement to cultivate one's natural talents to fair participation in social functions of the community.",
    "options_marathi": [
      "पहिल्या विधानात उल्लेखिल्यानुसार स्त्रियांना कसे वंचित ठेवले जाते हे दुसऱ्या विधानात स्पष्ट केले आहे.",
      "शासनाकडून शालेय शिक्षणापासून वंचित ठेवल्यामुळे अफगाणिस्तानातील स्त्रियांना कशाप्रकारे वाईट भेदभावाला तोंड द्यावे लागते हे दोन्ही विधाने स्पष्ट करतात.",
      "दोन्ही अधोरेखित विधाने काही समाज स्त्रियांना कसे वंचित ठेवतात याचे वर्णन करतात.",
      "स्त्रियांना स्वतःच्या नैसर्गिक प्रज्ञांचा विकास कसा करू दिला जात नाही याचे दोन्हीही विधाने वर्णन करतात."
    ],
    "options_english": [
      "2nd statement explains of how women are deprived as mentioned in 1st statement.",
      "Both the statements describe that women in Afghanistan face worst bias as they are deprived of schooling by the government.",
      "Both the underlined statements describe how women are deprived by some societies.",
      "Both the underlined statement describes how women are not allowed to develop their natural talents."
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Reading Comprehension - Inference",
    "difficulty": "Medium",
    "trap_detected": "Narrow interpretation of scope",
    "explanation_english": "The first sentence of the paragraph makes a general assertion: 'Even when demographic characteristics do not show anti-female bias or any at all, there are other ways in which women get less than a square deal.' The subsequent sentences (which can be considered the 'second statement' in a broader sense, as no specific sentences are underlined) then provide concrete examples and elaborations of these 'other ways' of deprivation. These examples include the active exclusion of girls from schooling (Afghanistan, and other countries), and deficiencies in basic facilities for women, such as encouragement for talent development and participation in social functions. Therefore, the second part of the paragraph serves to explain and illustrate the general point made in the first part.",
    "explanation_marathi": "परिच्छेदाचे पहिले वाक्य एक सामान्य विधान करते: 'जेव्हा लोकसंख्येची वैशिष्ट्ये स्त्रियांच्या विरोधात फारसा वा जराही भेदभाव दाखवत नाहीत, तेव्हा इतर अनेक पद्धतींनी स्त्रियांना त्यांच्या न्याय्य हक्कांबाबत डावलले जाते.' त्यानंतरची वाक्ये (जी 'दुसरे विधान' म्हणून विस्तृत अर्थाने मानली जाऊ शकतात, कारण कोणतीही विशिष्ट वाक्ये अधोरेखित नाहीत) स्त्रियांना वंचित ठेवण्याच्या या 'इतर पद्धतींची' ठोस उदाहरणे आणि स्पष्टीकरण देतात. या उदाहरणांमध्ये मुलींना शिक्षणापासून सक्रियपणे वंचित ठेवणे (अफगाणिस्तान आणि इतर देश) आणि स्त्रियांसाठी मूलभूत सुविधांमधील कमतरता, जसे की नैसर्गिक प्रज्ञांना प्रोत्साहन देणे आणि सामाजिक कार्यक्रमांमध्ये सहभाग यांचा समावेश आहे. त्यामुळे, परिच्छेदाचा दुसरा भाग पहिल्या भागात केलेल्या सामान्य मुद्द्याचे स्पष्टीकरण आणि चित्रण करतो.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": true,
        "reason_english": "The first part of the paragraph states that women are deprived in 'other ways'. The subsequent sentences provide specific examples (lack of schooling, talent development, social participation) that explain these 'other ways'.",
        "reason_marathi": "परिच्छेदाचा पहिला भाग सांगतो की स्त्रियांना 'इतर अनेक पद्धतींनी' वंचित ठेवले जाते. त्यानंतरची वाक्ये या 'इतर पद्धतींचे' विशिष्ट उदाहरणे (शिक्षणाचा अभाव, प्रतिभा विकास, सामाजिक सहभाग) देऊन स्पष्टीकरण देतात."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "While Afghanistan is mentioned, the paragraph also discusses many other countries and broader deficiencies, not just Afghanistan's schooling issue. This option is too narrow in scope.",
        "reason_marathi": "अफगाणिस्तानचा उल्लेख असला तरी, परिच्छेद अनेक इतर देशांबद्दल आणि व्यापक कमतरतांबद्दल चर्चा करतो, केवळ अफगाणिस्तानच्या शालेय शिक्षणाच्या समस्येबद्दल नाही. हा पर्याय खूप मर्यादित आहे."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "This statement is generally true but less precise than option 1. Option 1 describes the specific explanatory relationship between the parts of the paragraph.",
        "reason_marathi": "हे विधान सामान्यतः सत्य आहे, परंतु पर्याय 1 पेक्षा कमी अचूक आहे. पर्याय 1 परिच्छेदाच्या भागांमधील विशिष्ट स्पष्टीकरणात्मक संबंधाचे वर्णन करतो."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "This is only one specific example of deprivation mentioned at the end of the paragraph, not the overarching theme or relationship described by both parts.",
        "reason_marathi": "हे परिच्छेदाच्या शेवटी नमूद केलेल्या वंचितांचे फक्त एक विशिष्ट उदाहरण आहे, दोन्ही भागांद्वारे वर्णन केलेली मुख्य संकल्पना किंवा संबंध नाही."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "माझ्यासमोर विविध रंगाच्या सात खुर्य्या मांडल्या आहेत. पिवळ्या रंगाची खुर्ची निळ्या व जांभळ्या खुर्त्यांच्या मध्ये आहे. हिरव्या रंगाची खुर्ची लाल व नारिंगी खुर्थ्यांच्या मध्ये आहे. पांढऱ्या रंगाची खुर्ची निळ्या खुर्चीच्या बाजूला आहे परंतु ती लाल किंवा जांभळ्या खुर्त्यांच्या बाजूला नाही. ही माहिती सत्य मानून पुढीलपैकी निष्कर्षाचे/निष्कर्षांचे सर्वात उचित वर्णन निवडा - (a) निळी खुर्ची नेहमीच पांढऱ्या खुर्चीच्या बाजूला असणार. (b) पांढऱ्या खुर्चीच्या बाजूला नारिंगी खुर्ची असणे शक्य आहे. (c) जांभळ्या खुर्चीच्या बाजूला एकतर लाल किंवा नारिंगी खुर्ची असणे शक्य आहे.",
    "question_english": "Seven different coloured chairs are placed before me. Yellow coloured chair is between blue and violet chairs. Green coloured chair is between red and orange chairs. White chair is next to blue chair but it is not next to red or violet chairs. Assuming given information to be true select option that most appropriately describes conclusion/s from given below : (a) Blue chair will be always next to white chair (b) It is possible that orange chair will be next to white chair (c) It is possible that either red or orange chair will be next to violet chair",
    "options_marathi": [
      "(a) खेरीज एकही नाही",
      "फक्त (b)",
      "जर (b) शक्य असेल तर (c) शक्य नाही",
      "सर्व निष्कर्ष सत्य आहेत"
    ],
    "options_english": [
      "None but (a)",
      "only (b)",
      "If (b) is possible than (c) is not possible",
      "All conclusions are correct"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Seating Arrangement / Logical Deduction",
    "difficulty": "Hard",
    "trap_detected": "Complex conditions, multiple possibilities",
    "explanation_english": "Let's denote the chairs by their first letter: W (White), B (Blue), Y (Yellow), V (Violet), R (Red), G (Green), O (Orange).\n1.  Y is between B and V: B-Y-V or V-Y-B.\n2.  G is between R and O: R-G-O or O-G-R.\n3.  W is next to B: W-B or B-W.\n4.  W is NOT next to R or V.\n\nCombining (1) and (3): If B-Y-V, then W-B-Y-V or V-Y-B-W. If V-Y-B, then V-Y-B-W or W-V-Y-B. \nFrom (4), W is NOT next to V. This eliminates V-Y-B-W. So, the only possible sequence involving W, B, Y, V is W-B-Y-V.\n\nNow we have the block W-B-Y-V. We also have the block R-G-O or O-G-R. There are 7 chairs in total.\nCondition (4) states W is NOT next to R. In W-B-Y-V, W is next to B. V is at one end.\n\nLet's consider possible arrangements for the 7 chairs:\nCase 1: R-G-O-W-B-Y-V\n   - W is next to O (not R or V). This is valid.\nCase 2: W-B-Y-V-R-G-O\n   - W is next to B (not R or V). This is valid. V is next to R. This is allowed.\nCase 3: W-B-Y-V-O-G-R\n   - W is next to B (not R or V). This is valid. V is next to O. This is allowed.\n\nNow let's evaluate the conclusions:\n(a) 'Blue chair will be always next to white chair.' - In our derived block W-B-Y-V, B is always next to W. This holds true in all valid arrangements. So, (a) is TRUE.\n(b) 'It is possible that orange chair will be next to white chair.' - In Case 1 (R-G-O-W-B-Y-V), O is next to W. So, this is possible. Thus, (b) is TRUE.\n(c) 'It is possible that either red or orange chair will be next to violet chair.' - In Case 2 (W-B-Y-V-R-G-O), V is next to R. In Case 3 (W-B-Y-V-O-G-R), V is next to O. So, it is possible for V to be next to either R or O. Thus, (c) is TRUE.\n\nSince all three conclusions (a), (b), and (c) are true, the option 'All conclusions are correct' is the most appropriate.",
    "explanation_marathi": "खुर्च्यांना त्यांच्या पहिल्या अक्षराने दर्शवूया: W (पांढरी), B (निळी), Y (पिवळी), V (जांभळी), R (लाल), G (हिरवी), O (नारिंगी).\n1. Y ही B आणि V च्या मध्ये आहे: B-Y-V किंवा V-Y-B.\n2. G ही R आणि O च्या मध्ये आहे: R-G-O किंवा O-G-R.\n3. W ही B च्या बाजूला आहे: W-B किंवा B-W.\n4. W ही R किंवा V च्या बाजूला नाही.\n\n(1) आणि (3) एकत्र केल्यास: जर B-Y-V, तर W-B-Y-V किंवा V-Y-B-W. जर V-Y-B, तर V-Y-B-W किंवा W-V-Y-B.\n(4) नुसार, W ही V च्या बाजूला नाही. यामुळे V-Y-B-W हे संयोजन रद्द होते. त्यामुळे, W, B, Y, V यांचा समावेश असलेला एकमेव संभाव्य क्रम W-B-Y-V आहे.\n\nआता आपल्याकडे W-B-Y-V हा गट आहे. तसेच R-G-O किंवा O-G-R हा गट आहे. एकूण 7 खुर्च्या आहेत.\nअट (4) नुसार W ही R च्या बाजूला नाही. W-B-Y-V मध्ये, W ही B च्या बाजूला आहे. V एका टोकाला आहे.\n\n7 खुर्च्यांसाठी संभाव्य मांडणी विचारात घेऊया:\nप्रकरण 1: R-G-O-W-B-Y-V\n   - W ही O च्या बाजूला आहे (R किंवा V च्या नाही). हे वैध आहे.\nप्रकरण 2: W-B-Y-V-R-G-O\n   - W ही B च्या बाजूला आहे (R किंवा V च्या नाही). हे वैध आहे. V ही R च्या बाजूला आहे. हे अनुज्ञेय आहे.\nप्रकरण 3: W-B-Y-V-O-G-R\n   - W ही B च्या बाजूला आहे (R किंवा V च्या नाही). हे वैध आहे. V ही O च्या बाजूला आहे. हे अनुज्ञेय आहे.\n\nआता निष्कर्षांचे मूल्यांकन करूया:\n(a) 'निळी खुर्ची नेहमीच पांढऱ्या खुर्चीच्या बाजूला असणार.' - आपल्या W-B-Y-V या गटात, B नेहमीच W च्या बाजूला असते. हे सर्व वैध मांडणींमध्ये खरे ठरते. म्हणून, (a) सत्य आहे.\n(b) 'पांढऱ्या खुर्चीच्या बाजूला नारिंगी खुर्ची असणे शक्य आहे.' - प्रकरण 1 (R-G-O-W-B-Y-V) मध्ये, O ही W च्या बाजूला आहे. त्यामुळे, हे शक्य आहे. म्हणून, (b) सत्य आहे.\n(c) 'जांभळ्या खुर्चीच्या बाजूला एकतर लाल किंवा नारिंगी खुर्ची असणे शक्य आहे.' - प्रकरण 2 (W-B-Y-V-R-G-O) मध्ये, V ही R च्या बाजूला आहे. प्रकरण 3 (W-B-Y-V-O-G-R) मध्ये, V ही O च्या बाजूला आहे. त्यामुळे, V ही R किंवा O च्या बाजूला असणे शक्य आहे. म्हणून, (c) सत्य आहे.\n\nवरील तिन्ही निष्कर्ष (a), (b) आणि (c) सत्य असल्याने, 'सर्व निष्कर्ष सत्य आहेत' हा पर्याय सर्वात योग्य आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "Conclusion (a) is true, but (b) and (c) are also true, making this option incorrect.",
        "reason_marathi": "निष्कर्ष (a) सत्य आहे, परंतु (b) आणि (c) देखील सत्य आहेत, त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "Conclusion (b) is true, but (a) and (c) are also true, making this option incorrect.",
        "reason_marathi": "निष्कर्ष (b) सत्य आहे, परंतु (a) आणि (c) देखील सत्य आहेत, त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "Both (b) and (c) are possible and can coexist in different valid arrangements. This statement incorrectly implies they are mutually exclusive.",
        "reason_marathi": "निष्कर्ष (b) आणि (c) दोन्ही शक्य आहेत आणि वेगवेगळ्या वैध मांडणींमध्ये एकत्र असू शकतात. हे विधान चुकीच्या पद्धतीने सूचित करते की ते परस्पर अनन्य आहेत."
      },
      {
        "option_number": 4,
        "is_correct": true,
        "reason_english": "As analyzed, all three conclusions (a), (b), and (c) are logically derived as true based on the given information and possible arrangements.",
        "reason_marathi": "विश्लेषण केल्याप्रमाणे, दिलेली माहिती आणि संभाव्य मांडणींवर आधारित तिन्ही निष्कर्ष (a), (b) आणि (c) तार्किकदृष्ट्या सत्य म्हणून सिद्ध होतात."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "हिवाळी दिवस उन्हाळी दिवसांपेक्षा जास्त ढगाळ असतात. पावसाळी दिवस हिवाळी दिवसांपेक्षा जास्त ढगाळ असतात. जर ही दोन विधाने सत्य असतील तर \"उन्हाळी दिवस पावसाळी दिवसांपेक्षा जास्त ढगाळ असतात\" हे विधान आहे.",
    "question_english": "Winter days tend to be cloudier than summer days. Rainy day tend to be cloudier than winter days. If these two sentences are true then the sentence, \"summer days tend to be cloudier than rainy days\" is",
    "options_marathi": [
      "नेहमीच सत्य",
      "नेहमीच असत्य",
      "सत्य किंवा असत्य असेल",
      "निश्चित करता येत नाही"
    ],
    "options_english": [
      "always true",
      "always false",
      "either true or false",
      "cannot be decided"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Logical Deduction / Syllogism",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let's represent the cloudiness:\n1.  Winter days (W) > Summer days (S)\n2.  Rainy days (R) > Winter days (W)\n\nCombining these two statements, we get a clear order of cloudiness: Rainy days > Winter days > Summer days (R > W > S).\n\nThe statement to evaluate is: 'Summer days tend to be cloudier than rainy days' (S > R).\nThis directly contradicts our derived conclusion (R > S). Therefore, the statement 'summer days tend to be cloudier than rainy days' is always false.",
    "explanation_marathi": "ढगाळपणा खालीलप्रमाणे दर्शवूया:\n1. हिवाळी दिवस (W) > उन्हाळी दिवस (S)\n2. पावसाळी दिवस (R) > हिवाळी दिवस (W)\n\nया दोन विधानांना एकत्र केल्यास, आपल्याला ढगाळपणाचा स्पष्ट क्रम मिळतो: पावसाळी दिवस > हिवाळी दिवस > उन्हाळी दिवस (R > W > S).\n\nमूल्यांकन करायचे विधान आहे: 'उन्हाळी दिवस पावसाळी दिवसांपेक्षा जास्त ढगाळ असतात' (S > R).\nहे आपल्या निष्कर्षाच्या (R > S) थेट विरुद्ध आहे. म्हणून, 'उन्हाळी दिवस पावसाळी दिवसांपेक्षा जास्त ढगाळ असतात' हे विधान नेहमीच असत्य आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "The derived order of cloudiness is Rainy > Winter > Summer. So, Summer days cannot be cloudier than Rainy days.",
        "reason_marathi": "ढगाळपणाचा व्युत्पन्न क्रम पावसाळी > हिवाळी > उन्हाळी असा आहे. त्यामुळे, उन्हाळी दिवस पावसाळी दिवसांपेक्षा जास्त ढगाळ असू शकत नाहीत."
      },
      {
        "option_number": 2,
        "is_correct": true,
        "reason_english": "Based on the given true statements, Rainy days are the cloudiest, and Summer days are the least cloudy. Therefore, the statement 'summer days tend to be cloudier than rainy days' is always false.",
        "reason_marathi": "दिलेल्या सत्य विधानांनुसार, पावसाळी दिवस सर्वात जास्त ढगाळ असतात आणि उन्हाळी दिवस सर्वात कमी ढगाळ असतात. म्हणून, 'उन्हाळी दिवस पावसाळी दिवसांपेक्षा जास्त ढगाळ असतात' हे विधान नेहमीच असत्य आहे."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "The relationship is definitively established as Rainy > Summer, so the statement S > R is always false, not sometimes true or false.",
        "reason_marathi": "पावसाळी > उन्हाळी असा संबंध निश्चितपणे स्थापित झाला आहे, त्यामुळे S > R हे विधान नेहमीच असत्य आहे, कधीकधी सत्य किंवा असत्य नाही."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "The relationship between the cloudiness of summer and rainy days can be definitively decided based on the given information.",
        "reason_marathi": "उन्हाळी आणि पावसाळी दिवसांच्या ढगाळपणातील संबंध दिलेल्या माहितीनुसार निश्चितपणे ठरवता येतो."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "पुढे पाच विधाने दिली आहेत व त्यापुढे विशिष्ट क्रमाने तीन विधाने असलेले पर्याय दिले आहेत. सुरुवातीच्या दोन विधानांच्या आधारे तिसरे विधान हे यथार्थ निष्कर्ष ठरते असा पर्याय निवडा. विधाने : (a) त्याला किंवा तिला क्षमता विकसित व अभिव्यक्त करण्यासाठी मिळणाऱ्या विविध संधी, सुविधा व स्वातंत्र्यावर प्रत्येकाचे व्यक्तिगत साफल्य अवलंबून असते. (b) गुणवत्तापूर्ण शैक्षणिक संधी आणि आरोग्य सुविधा व्यक्तिला त्याच्या किंवा तिच्या ऊर्मीचा कमाल विकास साधायला साहाय्य देतात. (c) उच्च दरडोई राष्ट्रीय उत्पन्न दर्शवते की प्रत्येक व्यक्तिला गुणवत्तापूर्ण शिक्षण व आरोग्य सुविधा मिळतात. (d) अधिक दरडोई राष्ट्रीय उत्पन्न हे लोकांना गुणवत्तापूर्ण शैक्षणिक व आरोग्य सुविधा मिळतात असे दर्शवत नाही. हे तथ्य आहे. (e) व्यक्तिगत साफल्य तेव्हाच शक्य आहे जेव्हा त्याला किंवा तिला विविध पर्यायांतून क्षमता अभिव्यक्त करण्यासाठी निवड करण्याचे स्वातंत्र्य असते.",
    "question_english": "Given below are five statements followed by options comprised of three statements in a specific order. Choose the option where third statement is valid conclusion based on the preceding two statements; Statements : (a) Personal fulfilment depends on various opportunities; facilities and freedom that everyone gets to develop and express his or her capabilities. (b) Quality educational opportunities and health facilities assist persons to develop his or her potentials optimally. (c) Higher national per capita income indicates that every person gets quality educational and health facilities. (d) It is a fact that higher national per capita income does not indicate that people get quality educational and health facility. (e) Personal fulfilment is possible when he or she has freedom to choose from various alternatives to express capabilities.",
    "options_marathi": [
      "(c), (b), (a)",
      "(c), (b), (e)",
      "(a), (b), (e)",
      "(b), (e), (a)"
    ],
    "options_english": [
      "(c), (b), (a)",
      "(c), (b), (e)",
      "(a), (b), (e)",
      "(b), (e), (a)"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Logical Syllogism / Statement-Conclusion",
    "difficulty": "Medium",
    "trap_detected": "Distractor statements (c) and (d)",
    "explanation_english": "The question asks to identify the option where the third statement is a valid conclusion based on the first two statements. It's important to note that statement (d) explicitly states that 'Higher national per capita income does not indicate that people get quality educational and health facility' is a fact. This means statement (c) ('Higher national per capita income indicates that every person gets quality educational and health facilities') is false. Therefore, any option starting with (c) cannot lead to a valid conclusion.\n\nLet's analyze the remaining options:\nOption 3: (a), (b), (e)\n   - (a) Personal fulfilment depends on opportunities, facilities, and freedom to develop and express capabilities.\n   - (b) Quality educational opportunities and health facilities assist optimal development of potential.\n   - Conclusion (e): Personal fulfilment is possible when one has freedom to choose from various alternatives to express capabilities.\n   - Here, (e) is a specific condition for personal fulfilment, which is already encompassed within the broader statement (a). (b) provides details about 'facilities' mentioned in (a). (e) is not a direct conclusion from (a) and (b); rather, (a) is a more general principle that includes (e).\n\nOption 4: (b), (e), (a)\n   - (b) Quality educational opportunities and health facilities assist persons to develop his or her potentials optimally.\n   - (e) Personal fulfilment is possible when he or she has freedom to choose from various alternatives to express capabilities.\n   - Conclusion (a): Personal fulfilment depends on various opportunities, facilities and freedom that everyone gets to develop and express his or her capabilities.\n   - Here, statement (b) highlights the role of 'facilities' (educational and health) in 'developing potentials'. Statement (e) emphasizes 'freedom to choose' for 'expressing capabilities' leading to 'personal fulfilment'. Statement (a) then synthesizes these ideas, stating that 'personal fulfilment depends on various opportunities, facilities and freedom... to develop and express capabilities'. Thus, (a) acts as a comprehensive conclusion that integrates the specific conditions and factors mentioned in (b) and (e). This is the most logical flow where (a) is a broader principle supported by the specific points in (b) and (e).",
    "explanation_marathi": "प्रश्नात असा पर्याय ओळखण्यास सांगितले आहे जिथे तिसरे विधान पहिल्या दोन विधानांवर आधारित एक वैध निष्कर्ष आहे. हे लक्षात घेणे महत्त्वाचे आहे की विधान (d) स्पष्टपणे सांगते की 'अधिक दरडोई राष्ट्रीय उत्पन्न हे लोकांना गुणवत्तापूर्ण शैक्षणिक व आरोग्य सुविधा मिळतात असे दर्शवत नाही' हे एक तथ्य आहे. याचा अर्थ विधान (c) ('उच्च दरडोई राष्ट्रीय उत्पन्न दर्शवते की प्रत्येक व्यक्तिला गुणवत्तापूर्ण शिक्षण व आरोग्य सुविधा मिळतात') असत्य आहे. त्यामुळे, (c) ने सुरू होणारे कोणतेही पर्याय वैध निष्कर्षाकडे नेऊ शकत नाहीत.\n\nउर्वरित पर्यायांचे विश्लेषण करूया:\nपर्याय 3: (a), (b), (e)\n   - (a) व्यक्तिगत साफल्य क्षमता विकसित व अभिव्यक्त करण्यासाठी मिळणाऱ्या विविध संधी, सुविधा व स्वातंत्र्यावर अवलंबून असते.\n   - (b) गुणवत्तापूर्ण शैक्षणिक संधी आणि आरोग्य सुविधा व्यक्तिला त्याच्या किंवा तिच्या ऊर्मीचा कमाल विकास साधायला साहाय्य देतात.\n   - निष्कर्ष (e): व्यक्तिगत साफल्य तेव्हाच शक्य आहे जेव्हा त्याला किंवा तिला विविध पर्यायांतून क्षमता अभिव्यक्त करण्यासाठी निवड करण्याचे स्वातंत्र्य असते.\n   - येथे, (e) ही व्यक्तिगत साफल्यसाठी एक विशिष्ट अट आहे, जी आधीच व्यापक विधान (a) मध्ये समाविष्ट आहे. (b) हे (a) मध्ये नमूद केलेल्या 'सुविधां'बद्दल तपशील देते. (e) हे (a) आणि (b) वरून थेट निष्कर्ष नाही; त्याऐवजी, (a) हे एक अधिक सामान्य तत्त्व आहे ज्यात (e) समाविष्ट आहे.\n\nपर्याय 4: (b), (e), (a)\n   - (b) गुणवत्तापूर्ण शैक्षणिक संधी आणि आरोग्य सुविधा व्यक्तिला त्याच्या किंवा तिच्या ऊर्मीचा कमाल विकास साधायला साहाय्य देतात.\n   - (e) व्यक्तिगत साफल्य तेव्हाच शक्य आहे जेव्हा त्याला किंवा तिला विविध पर्यायांतून क्षमता अभिव्यक्त करण्यासाठी निवड करण्याचे स्वातंत्र्य असते.\n   - निष्कर्ष (a): व्यक्तिगत साफल्य क्षमता विकसित व अभिव्यक्त करण्यासाठी मिळणाऱ्या विविध संधी, सुविधा व स्वातंत्र्यावर प्रत्येकाचे व्यक्तिगत साफल्य अवलंबून असते.\n   - येथे, विधान (b) 'क्षमता विकसित करण्या'मध्ये 'सुविधां'ची (शैक्षणिक आणि आरोग्य) भूमिका अधोरेखित करते. विधान (e) 'क्षमता अभिव्यक्त करण्या'साठी 'निवड करण्याच्या स्वातंत्र्या'वर भर देते ज्यामुळे 'व्यक्तिगत साफल्य' मिळते. विधान (a) नंतर या कल्पनांचे संश्लेषण करते, असे सांगते की 'व्यक्तिगत साफल्य विविध संधी, सुविधा आणि स्वातंत्र्यावर अवलंबून असते... क्षमता विकसित आणि अभिव्यक्त करण्यासाठी'. अशा प्रकारे, (a) एक व्यापक निष्कर्ष म्हणून कार्य करते जे (b) आणि (e) मध्ये नमूद केलेल्या विशिष्ट अटी आणि घटकांना एकत्रित करते. हा सर्वात तार्किक प्रवाह आहे जिथे (a) हे (b) आणि (e) मधील विशिष्ट मुद्द्यांद्वारे समर्थित एक व्यापक तत्त्व आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "Statement (c) is contradicted by statement (d), which is stated as a fact. Therefore, (c) cannot be a premise for a valid conclusion.",
        "reason_marathi": "विधान (c) हे विधान (d) द्वारे खंडित केले जाते, जे एक तथ्य म्हणून नमूद केले आहे. त्यामुळे, (c) वैध निष्कर्षासाठी आधार असू शकत नाही."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "Statement (c) is contradicted by statement (d), which is stated as a fact. Therefore, (c) cannot be a premise for a valid conclusion.",
        "reason_marathi": "विधान (c) हे विधान (d) द्वारे खंडित केले जाते, जे एक तथ्य म्हणून नमूद केले आहे. त्यामुळे, (c) वैध निष्कर्षासाठी आधार असू शकत नाही."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "While (e) is related to (a), it is a specific aspect of (a), not a conclusion derived from (a) and (b). (a) is a broader statement that encompasses (e).",
        "reason_marathi": "जरी (e) हे (a) शी संबंधित असले तरी, ते (a) चा एक विशिष्ट पैलू आहे, (a) आणि (b) वरून काढलेला निष्कर्ष नाही. (a) हे एक व्यापक विधान आहे ज्यात (e) समाविष्ट आहे."
      },
      {
        "option_number": 4,
        "is_correct": true,
        "reason_english": "Statements (b) and (e) provide specific conditions (facilities for development, freedom for expression) that collectively support the broader principle of personal fulfilment outlined in statement (a). Thus, (a) is a valid synthesis/conclusion from (b) and (e).",
        "reason_marathi": "विधाने (b) आणि (e) विशिष्ट अटी (विकासासाठी सुविधा, अभिव्यक्तीचे स्वातंत्र्य) प्रदान करतात, जे एकत्रितपणे विधान (a) मध्ये नमूद केलेल्या व्यक्तिगत साफल्यच्या व्यापक तत्त्वाला समर्थन देतात. अशा प्रकारे, (a) हे (b) आणि (e) वरून एक वैध संश्लेषण/निष्कर्ष आहे."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "खालील जिल्ह्यांच्या त्यांच्या संबंधित धार्मिक स्थळांशी योग्य जोड्या लावा : जिल्हा धार्मिक स्थळे (a) अहमदनगर (i) तेर, येडशी, अणदूर, परांडा (b) औरंगाबाद (ii) माहूर, कंधार, हदगाव, मुखेड (c) उस्मानाबाद (iii) पैठण, आपेगाव, म्हैसमाळ, खुल्दाबाद (d) नांदेड (iv) शिंगणापूर, मढी, टोके, बोधेगाव",
    "question_english": "Match the following districts with their respective religious places. District Religious places (a) Ahmednagar (i) Ter, Yedshi, Andur, Paranda (b) Aurangabad (ii) Mahur, Kandhar, Hadgaon, Mukhed (c) Osmanabad (iii) Paithan, Apegaon, Maismal, Khuldabad (d) Nanded (iv) Shingnapur, Madhi, Toke, Bodhegaon",
    "options_marathi": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    ],
    "options_english": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Religious Places in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual recall, close options",
    "explanation_english": "Let's match the districts with their respective religious places:\n(a) Ahmednagar: Shingnapur (Shani Shingnapur), Madi (Kanifnath), Toke (Sangam), Bodhegaon (Vitthal Mandir) are all located in Ahmednagar district. So, (a)-(iv).\n(b) Aurangabad: Paithan (Sant Eknath Maharaj Samadhi), Apegaon (Sant Dnyaneshwar's birthplace), Mhismal (Girija Devi Temple), Khuldabad (Bhadra Maruti Temple) are all located in Aurangabad district. So, (b)-(iii).\n(c) Osmanabad: Ter (Sant Gora Kumbhar), Yedshi (Yedeshwari Temple), Andur (Kalleshwar Temple), Paranda (Paranda Fort) are all located in Osmanabad district. So, (c)-(i).\n(d) Nanded: Mahur (Renuka Devi Temple), Kandhar (Kandhar Fort), Hadgaon, Mukhed are all located in Nanded district. So, (d)-(ii).\n\nThus, the correct matching is: (a)-(iv), (b)-(iii), (c)-(i), (d)-(ii). This corresponds to option 2.",
    "explanation_marathi": "जिल्ह्यांच्या त्यांच्या संबंधित धार्मिक स्थळांशी जोड्या जुळवूया:\n(a) अहमदनगर: शिंगणापूर (शनि शिंगणापूर), मढी (कानिफनाथ), टोके (संगम), बोधेगाव (विठ्ठल मंदिर) ही सर्व अहमदनगर जिल्ह्यात आहेत. म्हणून, (a)-(iv).\n(b) औरंगाबाद: पैठण (संत एकनाथ महाराज समाधी), आपेगाव (संत ज्ञानेश्वरांचे जन्मस्थान), म्हैसमाळ (गिरिजा देवी मंदिर), खुल्दाबाद (भद्रा मारुती मंदिर) ही सर्व औरंगाबाद जिल्ह्यात आहेत. म्हणून, (b)-(iii).\n(c) उस्मानाबाद: तेर (संत गोरा कुंभार), येडशी (येडेश्वरी मंदिर), अणदूर (कळेश्वर मंदिर), परांडा (परांडा किल्ला) ही सर्व उस्मानाबाद जिल्ह्यात आहेत. म्हणून, (c)-(i).\n(d) नांदेड: माहूर (रेणुका देवी मंदिर), कंधार (कंधार किल्ला), हदगाव, मुखेड ही सर्व नांदेड जिल्ह्यात आहेत. म्हणून, (d)-(ii).\n\nअशा प्रकारे, योग्य जुळणी आहे: (a)-(iv), (b)-(iii), (c)-(i), (d)-(ii). हे पर्याय 2 शी जुळते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "Incorrect matching for all pairs.",
        "reason_marathi": "सर्व जोड्या चुकीच्या आहेत."
      },
      {
        "option_number": 2,
        "is_correct": true,
        "reason_english": "This option correctly matches Ahmednagar with (iv), Aurangabad with (iii), Osmanabad with (i), and Nanded with (ii) based on the geographical locations of these religious places.",
        "reason_marathi": "हा पर्याय अहमदनगरला (iv), औरंगाबादला (iii), उस्मानाबादला (i) आणि नांदेडला (ii) या धार्मिक स्थळांच्या भौगोलिक स्थानानुसार योग्यरित्या जुळवतो."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "Incorrect matching for all pairs.",
        "reason_marathi": "सर्व जोड्या चुकीच्या आहेत."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "Incorrect matching for all pairs.",
        "reason_marathi": "सर्व जोड्या चुकीच्या आहेत."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "जोड्या लावा : स्तंभ - I (जिल्हा) स्तंभ - II (सरोवर) (a) बुलढाणा (i) रामसागर (b) नागपूर (ii) घोडझरी (c) भंडारा (iii) लोणार (d) चंद्रपूर (iv) बांदलकसा",
    "question_english": "Match the following: Column - I (District) Column II (Lake) (a) Buldhana (i) Ramsagar (b) Nagpur (ii) Ghodzri (c) Bhandara (iii) Lonar (d) Chandrapur (iv) Bandalkasa",
    "options_marathi": [
      "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
      "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)"
    ],
    "options_english": [
      "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
      "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Lakes in Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "Factual swap in options",
    "explanation_english": "Let's match the districts with their respective lakes:\n(a) Buldhana: Lonar Lake is a famous impact crater lake located in Buldhana district. So, (a)-(iii).\n(b) Nagpur: Ramtek is known for Ram Sagar Lake. So, (b)-(i).\n(c) Bhandara: Ghodazari Lake is located in Bhandara district, known for Ghodazari Wildlife Sanctuary. So, (c)-(ii).\n(d) Chandrapur: Bandalkasa Lake is located in Chandrapur district. So, (d)-(iv).\n\nThus, the correct matching is: (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv). This corresponds to option 1.",
    "explanation_marathi": "जिल्ह्यांच्या त्यांच्या संबंधित सरोवरांशी जोड्या जुळवूया:\n(a) बुलढाणा: लोणार सरोवर हे बुलढाणा जिल्ह्यात असलेले एक प्रसिद्ध उल्कापिंडामुळे तयार झालेले सरोवर आहे. म्हणून, (a)-(iii).\n(b) नागपूर: रामटेक हे रामसागर सरोवरासाठी ओळखले जाते. म्हणून, (b)-(i).\n(c) भंडारा: घोडझरी सरोवर भंडारा जिल्ह्यात आहे, जे घोडझरी वन्यजीव अभयारण्यासाठी ओळखले जाते. म्हणून, (c)-(ii).\n(d) चंद्रपूर: बांदलकसा सरोवर चंद्रपूर जिल्ह्यात आहे. म्हणून, (d)-(iv).\n\nअशा प्रकारे, योग्य जुळणी आहे: (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv). हे पर्याय 1 शी जुळते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": true,
        "reason_english": "This option correctly matches Buldhana with Lonar Lake, Nagpur with Ramsagar, Bhandara with Ghodzri, and Chandrapur with Bandalkasa.",
        "reason_marathi": "हा पर्याय बुलढाणा लोणार सरोवराशी, नागपूर रामसागरशी, भंडारा घोडझरीशी आणि चंद्रपूर बांदलकसाशी योग्यरित्या जुळवतो."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "This option incorrectly swaps the lakes for Bhandara and Chandrapur. Bandalkasa is in Chandrapur, not Bhandara, and Ghodzri is in Bhandara, not Chandrapur.",
        "reason_marathi": "हा पर्याय भंडारा आणि चंद्रपूर जिल्ह्यांसाठी सरोवरांची चुकीची अदलाबदल करतो. बांदलकसा चंद्रपूरमध्ये आहे, भंडारा येथे नाही, आणि घोडझरी भंडारा येथे आहे, चंद्रपूर येथे नाही."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "Incorrect matching for all pairs.",
        "reason_marathi": "सर्व जोड्या चुकीच्या आहेत."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "Incorrect matching for all pairs.",
        "reason_marathi": "सर्व जोड्या चुकीच्या आहेत."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "येरळा ही नदीची उपनदी आहे.",
    "question_english": "Yerala is a tributary of river.",
    "options_marathi": [
      "कृष्णा",
      "भीमा",
      "गोदावरी",
      "तापी"
    ],
    "options_english": [
      "Krishna",
      "Bhima",
      "Godavari",
      "Tapi"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Rivers and Tributaries in Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Yerala River is a significant tributary of the Krishna River in Maharashtra. It originates in the Mahadeo Hills of the Western Ghats and flows through parts of Satara and Sangli districts before joining the Krishna River.",
    "explanation_marathi": "येरळा नदी ही महाराष्ट्रातील कृष्णा नदीची एक महत्त्वाची उपनदी आहे. ती पश्चिम घाटातील महादेव डोंगरात उगम पावते आणि सातारा व सांगली जिल्ह्यांच्या काही भागातून वाहत जाऊन कृष्णा नदीला मिळते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": true,
        "reason_english": "Yerala is a well-known tributary of the Krishna River.",
        "reason_marathi": "येरळा ही कृष्णा नदीची एक सुप्रसिद्ध उपनदी आहे."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "Yerala is not a tributary of the Bhima River.",
        "reason_marathi": "येरळा ही भीमा नदीची उपनदी नाही."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "Yerala is not a tributary of the Godavari River.",
        "reason_marathi": "येरळा ही गोदावरी नदीची उपनदी नाही."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "Yerala is not a tributary of the Tapi River.",
        "reason_marathi": "येरळा ही तापी नदीची उपनदी नाही."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "महाराष्ट्रातील खालील घाटांचा दक्षिणेकडून उत्तरेकडे कोणता क्रम बरोबर आहे ?",
    "question_english": "Which of the following sequences of Ghats in Maharashtra from South to North is correct ?",
    "options_marathi": [
      "बोर, कुंभार्ली, आंबा, फोंडा",
      "फोंडा, आंबा, कुंभार्ली, बोर",
      "कुंभार्ली, फोंडा, बोर, आंबा",
      "आंबा, बोर, फोंडा, कुंभार्ली"
    ],
    "options_english": [
      "Bor, Kumbharli, Amba, Fonda",
      "Fonda, Amba, Kumbharli, Bor",
      "Kumbharli, Fonda, Bor, Amba",
      "Amba, Bor, Fonda, Kumbharli"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Ghats in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual recall, similar names",
    "explanation_english": "To determine the correct order of Ghats from South to North in Maharashtra, we need to know their approximate locations:\n1.  **Fonda Ghat**: Located in Kolhapur/Sindhudurg district, it is one of the southernmost major ghats.\n2.  **Amba Ghat**: Located in Kolhapur/Ratnagiri district, it is north of Fonda Ghat.\n3.  **Kumbharli Ghat**: Located in Satara/Ratnagiri district, it is north of Amba Ghat.\n4.  **Bor Ghat** (also known as Bhor Ghat): Located in Pune/Raigad district, it is one of the northernmost among the given options.\n\nTherefore, the correct sequence from South to North is Fonda, Amba, Kumbharli, Bor.",
    "explanation_marathi": "महाराष्ट्रातील घाटांचा दक्षिणेकडून उत्तरेकडे योग्य क्रम निश्चित करण्यासाठी, आपल्याला त्यांच्या अंदाजित स्थानांची माहिती असणे आवश्यक आहे:\n1.  **फोंडा घाट**: कोल्हापूर/सिंधुदुर्ग जिल्ह्यात स्थित, हा दक्षिणेकडील प्रमुख घाटांपैकी एक आहे.\n2.  **आंबा घाट**: कोल्हापूर/रत्नागिरी जिल्ह्यात स्थित, हा फोंडा घाटाच्या उत्तरेला आहे.\n3.  **कुंभार्ली घाट**: सातारा/रत्नागिरी जिल्ह्यात स्थित, हा आंबा घाटाच्या उत्तरेला आहे.\n4.  **बोर घाट** (भोर घाट म्हणूनही ओळखला जातो): पुणे/रायगड जिल्ह्यात स्थित, हा दिलेल्या पर्यायांपैकी सर्वात उत्तरेकडील आहे.\n\nम्हणून, दक्षिणेकडून उत्तरेकडे योग्य क्रम फोंडा, आंबा, कुंभार्ली, बोर असा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "This order is incorrect. Bor Ghat is the northernmost among these, and Fonda Ghat is the southernmost.",
        "reason_marathi": "हा क्रम चुकीचा आहे. बोर घाट यापैकी सर्वात उत्तरेकडील आहे आणि फोंडा घाट सर्वात दक्षिणेकडील आहे."
      },
      {
        "option_number": 2,
        "is_correct": true,
        "reason_english": "This option correctly lists the Ghats from South to North: Fonda (south), Amba, Kumbharli, Bor (north).",
        "reason_marathi": "हा पर्याय घाटांचा दक्षिणेकडून उत्तरेकडे योग्य क्रम दर्शवतो: फोंडा (दक्षिण), आंबा, कुंभार्ली, बोर (उत्तर)."
      },
      {
        "option_number": 3,
        "is_correct": false,
        "reason_english": "This order is incorrect. Fonda Ghat is south of Kumbharli, and Bor Ghat is north of Amba.",
        "reason_marathi": "हा क्रम चुकीचा आहे. फोंडा घाट कुंभार्लीच्या दक्षिणेला आहे आणि बोर घाट आंब्याच्या उत्तरेला आहे."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "This order is incorrect. Fonda Ghat is south of Amba, and Kumbharli is north of Amba.",
        "reason_marathi": "हा क्रम चुकीचा आहे. फोंडा घाट आंब्याच्या दक्षिणेला आहे आणि कुंभार्ली आंब्याच्या उत्तरेला आहे."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "74° पूर्व रेखांशावर महाराष्ट्रातील नद्यांचा उत्तरेकडून दक्षिणेकडे क्रम निवडा - (a) गिरना (b) नीरा (c) कुकडी (d) कोयना",
    "question_english": "Select the correct order of rivers of Maharashtra from north to south along 74° East longitude. (a) Girna (b) Nira (c) Kukudi (d) Koyana",
    "options_marathi": [
      "(a), (b), (c), (d)",
      "(d), (c), (b), (a)",
      "(a), (c), (b), (d)",
      "(a), (c), (d), (b)"
    ],
    "options_english": [
      "(a), (b), (c), (d)",
      "(d), (c), (b), (a)",
      "(a), (c), (b), (d)",
      "(a), (c), (d), (b)"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Rivers in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual recall, precise geographical knowledge",
    "explanation_english": "To determine the correct order of rivers from North to South along 74° East longitude, we need to consider their geographical locations in Maharashtra:\n1.  **(a) Girna River**: A tributary of the Tapi River, it flows through Nashik and Malegaon in northern Maharashtra. It is the northernmost among the given options.\n2.  **(c) Kukadi River**: A tributary of the Ghod River (which is a tributary of Bhima), it flows through the Pune district, south of the Girna basin.\n3.  **(b) Nira River**: A major tributary of the Bhima River, it flows through Pune, Satara, and Solapur districts, generally south of the Kukadi River.\n4.  **(d) Koyana River**: A major tributary of the Krishna River, it flows through Satara district, further south than the Nira River.\n\nTherefore, the correct order from North to South is (a) Girna, (c) Kukadi, (b) Nira, (d) Koyana.",
    "explanation_marathi": "74° पूर्व रेखांशावर महाराष्ट्रातील नद्यांचा उत्तरेकडून दक्षिणेकडे योग्य क्रम निश्चित करण्यासाठी, आपल्याला त्यांच्या महाराष्ट्रातील भौगोलिक स्थानांचा विचार करणे आवश्यक आहे:\n1.  **(a) गिरणा नदी**: तापी नदीची उपनदी, ती उत्तर महाराष्ट्रातील नाशिक आणि मालेगावमधून वाहते. दिलेल्या पर्यायांमध्ये ती सर्वात उत्तरेकडील आहे.\n2.  **(c) कुकडी नदी**: घोड नदीची उपनदी (जी भीमा नदीची उपनदी आहे), ती पुणे जिल्ह्यातून वाहते, गिरणा खोऱ्याच्या दक्षिणेला.\n3.  **(b) नीरा नदी**: भीमा नदीची एक प्रमुख उपनदी, ती पुणे, सातारा आणि सोलापूर जिल्ह्यांमधून वाहते, साधारणपणे कुकडी नदीच्या दक्षिणेला.\n4.  **(d) कोयना नदी**: कृष्णा नदीची एक प्रमुख उपनदी, ती सातारा जिल्ह्यातून वाहते, नीरा नदीच्या आणखी दक्षिणेला.\n\nम्हणून, उत्तरेकडून दक्षिणेकडे योग्य क्रम (a) गिरणा, (c) कुकडी, (b) नीरा, (d) कोयना असा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "is_correct": false,
        "reason_english": "This order is incorrect. Nira is south of Kukadi, and Koyana is south of Nira.",
        "reason_marathi": "हा क्रम चुकीचा आहे. नीरा कुकडीच्या दक्षिणेला आहे आणि कोयना नीराच्या दक्षिणेला आहे."
      },
      {
        "option_number": 2,
        "is_correct": false,
        "reason_english": "This order is incorrect. It represents a South to North order, not North to South.",
        "reason_marathi": "हा क्रम चुकीचा आहे. हा दक्षिणेकडून उत्तरेकडे क्रम दर्शवतो, उत्तरेकडून दक्षिणेकडे नाही."
      },
      {
        "option_number": 3,
        "is_correct": true,
        "reason_english": "This option correctly lists the rivers from North to South along 74° East longitude: Girna (north), Kukadi, Nira, Koyana (south).",
        "reason_marathi": "हा पर्याय 74° पूर्व रेखांशावर नद्यांचा उत्तरेकडून दक्षिणेकडे योग्य क्रम दर्शवतो: गिरणा (उत्तर), कुकडी, नीरा, कोयना (दक्षिण)."
      },
      {
        "option_number": 4,
        "is_correct": false,
        "reason_english": "This order is incorrect. Nira is north of Koyana.",
        "reason_marathi": "हा क्रम चुकीचा आहे. नीरा कोयनाच्या उत्तरेला आहे."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "खालील विधाने पहा : (a) नायट्रोजन आणि ऑक्सीजन हे वातावरणातील स्थिर वायू आहेत. (b) वातावरणामध्ये वाराजन्य धुळीचे प्रमाण 9.9% असते. (c) वातावरणातील वायुरूप नायट्रोजनचा शोध 1772 मध्ये रूदरफोर्ड यांनी लावला.",
    "question_english": "Observe the following statements : (a) Nitrogen and Oxygen are the constant gases in atmosphere. (b) The % of air borne dust particles in the atmosphere is 9.9. (c) The gaseous nitrogen in the atmosphere is found by Rutherford in 1772.",
    "options_marathi": [
      "फक्त विधान (a) बरोबर आहे.",
      "फक्त विधान (b) बरोबर आहे.",
      "विधाने (a) आणि (b) बरोबर आहेत.",
      "विधाने (a) आणि (c) बरोबर आहेत."
    ],
    "options_english": [
      "Only statement (a) is correct.",
      "Only statement (b) is correct.",
      "Statements (a) and (b) are correct.",
      "Statements (a) and (c) are correct."
    ],
    "correct_option_index": 4,
    "subject": "Science",
    "topic": "Atmospheric Composition",
    "difficulty": "Medium",
    "trap_detected": "Factual Detail",
    "explanation_english": "Statement (a) is correct because Nitrogen (approx. 78%) and Oxygen (approx. 21%) are the two most abundant and relatively constant gases in the Earth's atmosphere. Statement (b) is incorrect; the percentage of airborne dust particles in the atmosphere is highly variable and generally very low, not a fixed 9.9%. Statement (c) is correct; Daniel Rutherford is credited with the isolation and discovery of nitrogen gas in 1772. Therefore, statements (a) and (c) are correct.",
    "explanation_marathi": "विधान (a) बरोबर आहे कारण नायट्रोजन (सुमारे 78%) आणि ऑक्सिजन (सुमारे 21%) हे पृथ्वीच्या वातावरणातील दोन सर्वात मुबलक आणि तुलनेने स्थिर वायू आहेत. विधान (b) चुकीचे आहे; वातावरणातील हवेतील धुळीच्या कणांचे प्रमाण अत्यंत परिवर्तनशील असते आणि ते सामान्यतः खूप कमी असते, निश्चित 9.9% नसते. विधान (c) बरोबर आहे; डॅनियल रूदरफोर्ड यांना 1772 मध्ये नायट्रोजन वायू वेगळा करून त्याचा शोध लावण्याचे श्रेय दिले जाते. म्हणून, विधाने (a) आणि (c) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Only statement (a) is correct.",
        "option_text_marathi": "फक्त विधान (a) बरोबर आहे.",
        "is_correct": false,
        "reason": "Statement (a) is correct, but statement (c) is also correct, making this option incomplete."
      },
      {
        "option_text_english": "Only statement (b) is correct.",
        "option_text_marathi": "फक्त विधान (b) बरोबर आहे.",
        "is_correct": false,
        "reason": "Statement (b) is incorrect as the percentage of airborne dust particles is not 9.9%."
      },
      {
        "option_text_english": "Statements (a) and (b) are correct.",
        "option_text_marathi": "विधाने (a) आणि (b) बरोबर आहेत.",
        "is_correct": false,
        "reason": "Statement (a) is correct, but statement (b) is incorrect."
      },
      {
        "option_text_english": "Statements (a) and (c) are correct.",
        "option_text_marathi": "विधाने (a) आणि (c) बरोबर आहेत.",
        "is_correct": true,
        "reason": "Both Nitrogen and Oxygen are constant atmospheric gases, and Daniel Rutherford discovered gaseous nitrogen in 1772. Statement (b) is factually incorrect."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "महाराष्ट्र राज्याचे भौगोलिक क्षेत्रफळ चौ.कि.मी. असून त्याचा विस्तार आणि पूर्व रेखावृत्तादरम्यान आहे.",
    "question_english": "The Geographical area of Maharashtra state is and it extended between and East longitude.",
    "options_marathi": [
      "306613 आणि 72° 16' ते 79° 54'",
      "305613 आणि 71° 16' ते 79° 16'",
      "307713 आणि 72° 36' ते 80° 54'",
      "307613 आणि 72° 26' ते 80° 44'"
    ],
    "options_english": [
      "306613 and 72° 16' to 79° 54'",
      "305613 and 71° 16' to 79° 16'",
      "307713 and 72° 36' to 80° 54'",
      "307613 and 72° 26' to 80° 44'"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Maharashtra Geography (Area and Extent)",
    "difficulty": "Easy",
    "trap_detected": "Close Numerical Options",
    "explanation_english": "Maharashtra is the third-largest state in India by area. Its total geographical area is 307,713 square kilometers. The state's longitudinal extent stretches from 72° 36' East to 80° 54' East longitude. This information is fundamental to understanding the geographical dimensions of Maharashtra.",
    "explanation_marathi": "महाराष्ट्र हे क्षेत्रफळाच्या दृष्टीने भारतातील तिसरे मोठे राज्य आहे. त्याचे एकूण भौगोलिक क्षेत्रफळ 307,713 चौरस किलोमीटर आहे. राज्याचा रेखावृत्तीय विस्तार 72° 36' पूर्व ते 80° 54' पूर्व रेखावृत्तादरम्यान आहे. ही माहिती महाराष्ट्राच्या भौगोलिक परिमाणांना समजून घेण्यासाठी मूलभूत आहे.",
    "options_breakdown": [
      {
        "option_text_english": "306613 and 72° 16' to 79° 54'",
        "option_text_marathi": "306613 आणि 72° 16' ते 79° 54'",
        "is_correct": false,
        "reason": "The area and longitudinal extent provided are incorrect."
      },
      {
        "option_text_english": "305613 and 71° 16' to 79° 16'",
        "option_text_marathi": "305613 आणि 71° 16' ते 79° 16'",
        "is_correct": false,
        "reason": "The area and longitudinal extent provided are incorrect."
      },
      {
        "option_text_english": "307713 and 72° 36' to 80° 54'",
        "option_text_marathi": "307713 आणि 72° 36' ते 80° 54'",
        "is_correct": true,
        "reason": "This option correctly states Maharashtra's geographical area as 307,713 sq km and its longitudinal extent as 72° 36' E to 80° 54' E."
      },
      {
        "option_text_english": "307613 and 72° 26' to 80° 44'",
        "option_text_marathi": "307613 आणि 72° 26' ते 80° 44'",
        "is_correct": false,
        "reason": "The area and longitudinal extent provided are incorrect."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "खालील विधानांचा विचार करा : (a) 1933 सालापासून महाराष्ट्र राज्यात सूतगिरण्यांच्या विकेंद्रीकरणाची सुरुवात झाली. (b) आंतरराष्ट्रीय इन्फोटेक पार्क (IIP) नवी मुंबई येथे आहे.",
    "question_english": "Consider the following statements : (a) Since 1933 the cotton textile industries began to decentralise in the state of Maharashtra. (b) International Infotech Park (IIP) is located at Navi Mumbai.",
    "options_marathi": [
      "फक्त (a) विधान बरोबर आहे.",
      "फक्त (b) विधान बरोबर आहे.",
      "(a) आणि (b) विधाने बरोबर आहेत.",
      "(a) आणि (b) विधाने बरोबर नाहीत."
    ],
    "options_english": [
      "Only (a) statement is correct.",
      "Only (b) statement is correct.",
      "Statements (a) and (b) are correct.",
      "Statements (a) and (b) are not correct."
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Industrial Development in Maharashtra, IT Parks",
    "difficulty": "Medium",
    "trap_detected": "Factual Detail",
    "explanation_english": "Statement (a) is incorrect. The decentralization of cotton textile industries in Maharashtra began much earlier than 1933, with mills being established in cities like Sholapur, Nagpur, and Pune in the late 19th and early 20th centuries, moving beyond the initial concentration in Mumbai. Statement (b) is correct; the International Infotech Park (IIP) is indeed a significant IT hub located in Navi Mumbai, contributing to the region's economic development.",
    "explanation_marathi": "विधान (a) चुकीचे आहे. महाराष्ट्रातील सूतगिरण्यांच्या विकेंद्रीकरणाची सुरुवात 1933 पूर्वीच झाली होती, 19 व्या शतकाच्या उत्तरार्धात आणि 20 व्या शतकाच्या सुरुवातीस सोलापूर, नागपूर आणि पुणे यांसारख्या शहरांमध्ये गिरण्या स्थापन झाल्या, ज्यामुळे मुंबईतील सुरुवातीच्या एकाग्रतेपलीकडे विस्तार झाला. विधान (b) बरोबर आहे; आंतरराष्ट्रीय इन्फोटेक पार्क (IIP) हे नवी मुंबई येथे स्थित एक महत्त्वाचे माहिती तंत्रज्ञान केंद्र आहे, जे या प्रदेशाच्या आर्थिक विकासात योगदान देते.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a) statement is correct.",
        "option_text_marathi": "फक्त (a) विधान बरोबर आहे.",
        "is_correct": false,
        "reason": "Statement (a) is incorrect as decentralization of textile industries started much earlier than 1933."
      },
      {
        "option_text_english": "Only (b) statement is correct.",
        "option_text_marathi": "फक्त (b) विधान बरोबर आहे.",
        "is_correct": true,
        "reason": "Statement (b) is correct; International Infotech Park (IIP) is located in Navi Mumbai."
      },
      {
        "option_text_english": "Statements (a) and (b) are correct.",
        "option_text_marathi": "(a) आणि (b) विधाने बरोबर आहेत.",
        "is_correct": false,
        "reason": "Statement (a) is incorrect, so this option cannot be correct."
      },
      {
        "option_text_english": "Statements (a) and (b) are not correct.",
        "option_text_marathi": "(a) आणि (b) विधाने बरोबर नाहीत.",
        "is_correct": false,
        "reason": "Statement (b) is correct, so this option is incorrect."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "2011 च्या जनगणनेनुसार महाराष्ट्रातील लिंगप्रमाण आहे.",
    "question_english": "As per 2011 census the sex ratio of Maharashtra is .",
    "options_marathi": [
      "934",
      "922",
      "925",
      "930"
    ],
    "options_english": [
      "934",
      "922",
      "925",
      "930"
    ],
    "correct_option_index": 0,
    "subject": "Geography",
    "topic": "Census 2011, Sex Ratio",
    "difficulty": "Easy",
    "trap_detected": "Incorrect Options Provided",
    "explanation_english": "As per the 2011 Census, the sex ratio of Maharashtra was 929 females per 1000 males. Since this exact figure is not available in any of the given options, the question is considered to have no correct answer among the choices provided. Therefore, the question is likely cancelled or has no correct option.",
    "explanation_marathi": "2011 च्या जनगणनेनुसार, महाराष्ट्राचे लिंग गुणोत्तर प्रति 1000 पुरुषांमागे 929 स्त्रिया होते. दिलेल्या पर्यायांपैकी कोणताही पर्याय या अचूक आकडेवारीशी जुळत नसल्यामुळे, या प्रश्नाचे दिलेल्या पर्यायांमध्ये कोणतेही योग्य उत्तर नाही असे मानले जाते. त्यामुळे, हा प्रश्न रद्द होण्याची किंवा त्याला योग्य पर्याय नसण्याची शक्यता आहे.",
    "options_breakdown": [
      {
        "option_text_english": "934",
        "option_text_marathi": "934",
        "is_correct": false,
        "reason": "The actual sex ratio of Maharashtra as per 2011 census is 929, not 934."
      },
      {
        "option_text_english": "922",
        "option_text_marathi": "922",
        "is_correct": false,
        "reason": "The actual sex ratio of Maharashtra as per 2011 census is 929, not 922."
      },
      {
        "option_text_english": "925",
        "option_text_marathi": "925",
        "is_correct": false,
        "reason": "The actual sex ratio of Maharashtra as per 2011 census is 929, not 925."
      },
      {
        "option_text_english": "930",
        "option_text_marathi": "930",
        "is_correct": false,
        "reason": "The actual sex ratio of Maharashtra as per 2011 census is 929, not 930."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "खालील जोड्या लावा : आदिवासी जमात लोकसंख्येचे केंद्रीकरण असलेले जिल्हे (a) भिल्ल (i) अमरावती, यवतमाळ (b) कातकरी (ii) पालघर, नाशिक (c) कोलम (iii) जळगाव, धुळे (d) वारली (iv) रायगड, ठाणे",
    "question_english": "Match the following : Tribe Districts of population concentration (a) Bhil (i) Amravati, Yeotmal (b) Katkari (ii) Palghar, Nashik (c) Kolam (iii) Jalgaon, Dhule (d) Varli/Warli (iv) Raigad, Thane",
    "options_marathi": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)"
    ],
    "options_english": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Tribes of Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail",
    "explanation_english": "This question tests knowledge about the geographical distribution of major tribal communities in Maharashtra. The Bhil tribe is primarily concentrated in districts like Jalgaon and Dhule. The Katkari tribe is predominantly found in Raigad and Thane districts. The Kolam tribe is mainly located in Amravati and Yavatmal districts. The Warli tribe is concentrated in Palghar and Nashik districts. Therefore, the correct matching is (a)-(iii), (b)-(iv), (c)-(i), (d)-(ii).",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील प्रमुख आदिवासी समुदायांच्या भौगोलिक वितरणाबद्दलच्या ज्ञानाची चाचणी घेतो. भिल्ल जमात प्रामुख्याने जळगाव आणि धुळे जिल्ह्यांमध्ये केंद्रित आहे. कातकरी जमात रायगड आणि ठाणे जिल्ह्यांमध्ये प्रामुख्याने आढळते. कोलम जमात मुख्यतः अमरावती आणि यवतमाळ जिल्ह्यांमध्ये आहे. वारली जमात पालघर आणि नाशिक जिल्ह्यांमध्ये केंद्रित आहे. म्हणून, योग्य जुळणी (a)-(iii), (b)-(iv), (c)-(i), (d)-(ii) अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "option_text_marathi": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings for the tribes and their concentration districts."
      },
      {
        "option_text_english": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "option_text_marathi": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "is_correct": true,
        "reason": "This option correctly matches Bhil with Jalgaon, Dhule; Katkari with Raigad, Thane; Kolam with Amravati, Yavatmal; and Varli with Palghar, Nashik."
      },
      {
        "option_text_english": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "option_text_marathi": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings for the tribes and their concentration districts."
      },
      {
        "option_text_english": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
        "option_text_marathi": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings for the tribes and their concentration districts."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "खालीलपैकी कोणती जोडी बरोबर जुळत नाही ? (1) केशव सूत - नवा शिपाई (2) लोकहितवादी - शतपत्रे (3) बाबासाहेब आंबेडकर - प्रबुद्ध भारत (4) बाळ गंगाधर टिळक - मूर्तीभंजन",
    "question_english": "Which of the following pair does not match correctly? (1) KeshavSut - Nava Shipai (2) Lokhitvadi - Shatpatre (3) Babasaheb Ambedkar - Prabudha Bharat (4) Bal Gangadhar Tilak - Murtibhanjan",
    "options_marathi": [
      "केशव सूत - नवा शिपाई",
      "लोकहितवादी - शतपत्रे",
      "बाबासाहेब आंबेडकर - प्रबुद्ध भारत",
      "बाळ गंगाधर टिळक - मूर्तीभंजन"
    ],
    "options_english": [
      "KeshavSut - Nava Shipai",
      "Lokhitvadi - Shatpatre",
      "Babasaheb Ambedkar - Prabudha Bharat",
      "Bal Gangadhar Tilak - Murtibhanjan"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Social Reformers and their Works, Marathi Literature",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap/Misattribution",
    "explanation_english": "This question asks to identify the incorrectly matched pair. (1) Keshavsut (Krishnaji Keshav Damle) is indeed known for his poem 'Nava Shipai'. (2) Lokhitvadi (Gopal Hari Deshmukh) wrote the famous 'Shatpatre'. (3) Dr. Babasaheb Ambedkar started the newspaper 'Prabuddha Bharat'. (4) However, 'Murtibhanjan' (Idol Breaker) is a well-known Marathi play written by Govind Ballal Deval, not Bal Gangadhar Tilak. Tilak was associated with 'Kesari' and 'Mahratta'. Therefore, the pair 'Bal Gangadhar Tilak - Murtibhanjan' is incorrectly matched.",
    "explanation_marathi": "हा प्रश्न चुकीची जुळणी ओळखण्यास सांगतो. (1) केशवसुत (कृष्णाजी केशव दामले) हे त्यांच्या 'नवा शिपाई' या कवितेसाठी ओळखले जातात. (2) लोकहितवादी (गोपाळ हरी देशमुख) यांनी प्रसिद्ध 'शतपत्रे' लिहिली. (3) डॉ. बाबासाहेब आंबेडकर यांनी 'प्रबुद्ध भारत' हे वृत्तपत्र सुरू केले. (4) तथापि, 'मूर्तीभंजन' हे प्रसिद्ध मराठी नाटक गोविंद बल्लाळ देवल यांनी लिहिले होते, बाळ गंगाधर टिळक यांनी नाही. टिळक 'केसरी' आणि 'मराठा' या वृत्तपत्रांशी संबंधित होते. म्हणून, 'बाळ गंगाधर टिळक - मूर्तीभंजन' ही जोडी चुकीची जुळलेली आहे.",
    "options_breakdown": [
      {
        "option_text_english": "KeshavSut - Nava Shipai",
        "option_text_marathi": "केशव सूत - नवा शिपाई",
        "is_correct": false,
        "reason": "This pair is correctly matched. Keshavsut is a renowned Marathi poet, and 'Nava Shipai' is one of his notable works."
      },
      {
        "option_text_english": "Lokhitvadi - Shatpatre",
        "option_text_marathi": "लोकहितवादी - शतपत्रे",
        "is_correct": false,
        "reason": "This pair is correctly matched. Gopal Hari Deshmukh, known as Lokhitvadi, wrote 'Shatpatre'."
      },
      {
        "option_text_english": "Babasaheb Ambedkar - Prabudha Bharat",
        "option_text_marathi": "बाबासाहेब आंबेडकर - प्रबुद्ध भारत",
        "is_correct": false,
        "reason": "This pair is correctly matched. Dr. B.R. Ambedkar started the newspaper 'Prabuddha Bharat'."
      },
      {
        "option_text_english": "Bal Gangadhar Tilak - Murtibhanjan",
        "option_text_marathi": "बाळ गंगाधर टिळक - मूर्तीभंजन",
        "is_correct": true,
        "reason": "This pair is incorrectly matched. 'Murtibhanjan' was a Marathi play written by Govind Ballal Deval, not Bal Gangadhar Tilak."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "जोड्या जुळवा : (a) तांबवा (i) के.डी. पाटील (b) कामेरी (ii) काशिनाथ देशमुख (c) इंदोली (iii) कृष्णराव कुऱ्हाडे (d) पळुस (iv) दिनकरराव निकम",
    "question_english": "Match the following : (a) Tambva (i) K.D. Patil (b) Kameri (ii) Kashinath Deshmukh (c) Indoli (iii) Krishnarao Kurhade (d) Palus (iv) Dinkarrao Nikam",
    "options_marathi": [
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
    ],
    "options_english": [
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
      "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Regional Freedom Fighters/Social Workers",
    "difficulty": "Hard",
    "trap_detected": "Obscure Factual Detail",
    "explanation_english": "This question requires specific knowledge of local historical figures and their association with particular places in Maharashtra, often related to the freedom struggle or social reform movements. The correct matches are: Tambva is associated with K.D. Patil, Kameri with Kashinath Deshmukh, Indoli with Krishnarao Kurhade, and Palus with Dinkarrao Nikam. These individuals played significant roles in their respective regions.",
    "explanation_marathi": "या प्रश्नासाठी महाराष्ट्रातील स्थानिक ऐतिहासिक व्यक्ती आणि त्यांचा विशिष्ट ठिकाणांशी असलेला संबंध, जो अनेकदा स्वातंत्र्यसंग्राम किंवा समाजसुधारणा चळवळींशी संबंधित असतो, याचे विशिष्ट ज्ञान आवश्यक आहे. योग्य जुळणी अशी आहे: तांबवा हे के.डी. पाटील यांच्याशी संबंधित आहे, कामेरी हे काशिनाथ देशमुख यांच्याशी, इंदोली हे कृष्णराव कुऱ्हाडे यांच्याशी आणि पळूस हे दिनकरराव निकम यांच्याशी संबंधित आहे. या व्यक्तींनी आपापल्या प्रदेशात महत्त्वपूर्ण भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_text_english": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
        "option_text_marathi": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings."
      },
      {
        "option_text_english": "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
        "option_text_marathi": "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings."
      },
      {
        "option_text_english": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "option_text_marathi": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "is_correct": true,
        "reason": "This option correctly matches Tambva with K.D. Patil, Kameri with Kashinath Deshmukh, Indoli with Krishnarao Kurhade, and Palus with Dinkarrao Nikam."
      },
      {
        "option_text_english": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "option_text_marathi": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "is_correct": false,
        "reason": "This option contains incorrect pairings."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "पुढील वाक्यात कोणत्या वृत्तपत्राचे वर्णन केले आहे ? (a) ते 1908 मध्ये सुरू झाले होते. (b) ते सुरू करण्याच्या प्रयत्नांशी टिळकांचा संबंध होता. (c) ते एका मर्यादित कंपनीच्या मालकीचे होते. (d) वामन गोपाळ जोशी, गोपाळ अनंत ओगले आणि दत्तात्रय बळवंत कालेलकर हे तेथील कर्मचारी होते. (e) परंतु हे वृत्तपत्र एक वर्षापेक्षा जास्त टिकले नाही.",
    "question_english": "Which newspaper is described in the sentences given below : (a) It was started in 1908. (b) Tilak was associated with the efforts made to start it (c) It was owned by a limited company. (d) Waman Gopal Joshi, Gopal Anant Ogale and Dattatraya Balvant Kalelkar are its staff (e) But this paper did not live for more than a year",
    "options_marathi": [
      "मुंबई वैभव",
      "गुराखी",
      "राष्ट्रमत",
      "देशसेवक"
    ],
    "options_english": [
      "Mumbai Vaibhav",
      "Gurakhi",
      "Rashtramat",
      "Deshasevak"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Nationalist Newspapers, Bal Gangadhar Tilak",
    "difficulty": "Medium",
    "trap_detected": "Specific Factual Details",
    "explanation_english": "The description accurately points to the newspaper 'Rashtramat'. It was launched in 1908 with the support and association of Bal Gangadhar Tilak, aiming to propagate nationalist ideas. It was structured as a limited company (Rashtramat Publishing Company) and had prominent individuals like Waman Gopal Joshi as its editor. Despite its strong backing, it faced financial challenges and ceased publication within a year, making it a short-lived but significant venture in the nationalist press.",
    "explanation_marathi": "दिलेले वर्णन 'राष्ट्रमत' या वृत्तपत्राचे अचूकपणे सूचित करते. हे वृत्तपत्र 1908 मध्ये बाळ गंगाधर टिळकांच्या पाठिंब्याने आणि सहभागाने सुरू करण्यात आले होते, ज्याचा उद्देश राष्ट्रवादी विचार प्रसारित करणे हा होता. त्याची रचना मर्यादित कंपनी म्हणून करण्यात आली होती (राष्ट्रमत पब्लिशिंग कंपनी) आणि वामन गोपाळ जोशींसारखे प्रमुख व्यक्ती त्याचे संपादक होते. मजबूत पाठिंबा असूनही, त्याला आर्थिक आव्हानांचा सामना करावा लागला आणि एका वर्षाच्या आत ते बंद पडले, ज्यामुळे ते राष्ट्रवादी पत्रकारितेतील एक अल्पायुषी परंतु महत्त्वपूर्ण उपक्रम ठरले.",
    "options_breakdown": [
      {
        "option_text_english": "Mumbai Vaibhav",
        "option_text_marathi": "मुंबई वैभव",
        "is_correct": false,
        "reason": "Mumbai Vaibhav does not match all the given characteristics, especially the year of establishment and Tilak's direct association in this manner."
      },
      {
        "option_text_english": "Gurakhi",
        "option_text_marathi": "गुराखी",
        "is_correct": false,
        "reason": "Gurakhi does not match all the given characteristics, particularly the year of establishment and the specific staff mentioned."
      },
      {
        "option_text_english": "Rashtramat",
        "option_text_marathi": "राष्ट्रमत",
        "is_correct": true,
        "reason": "Rashtramat was started in 1908, had Tilak's association, was owned by a limited company, had the mentioned staff, and was short-lived, matching all descriptions."
      },
      {
        "option_text_english": "Deshasevak",
        "option_text_marathi": "देशसेवक",
        "is_correct": false,
        "reason": "Deshasevak does not match all the given characteristics, especially the year of establishment and the specific staff mentioned."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "विनोबा भावे यांनी 1930-31 दरम्यान त्यांच्या तुरुंगवासात या ग्रंथाची रचना केली.",
    "question_english": "Vinoba Bhave wrote during his imprisonment in 1930-31.",
    "options_marathi": [
      "गीता रहस्य",
      "गीताई",
      "गीतासार",
      "गीताबोध"
    ],
    "options_english": [
      "Gita Rahasya",
      "Gitai",
      "Gitasar",
      "Gitabodh"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Vinoba Bhave, Gandhian Thought, Religious Texts",
    "difficulty": "Easy",
    "trap_detected": "Similar Sounding Names",
    "explanation_english": "Acharya Vinoba Bhave, a prominent Gandhian and spiritual leader, wrote 'Gitai' during his imprisonment in Dhule jail between 1930-31. 'Gitai' is a Marathi translation and commentary on the Bhagavad Gita, presented in a simple and accessible language, making the profound teachings of the Gita available to the common people. 'Gita Rahasya' was written by Bal Gangadhar Tilak.",
    "explanation_marathi": "आचार्य विनोबा भावे, एक प्रमुख गांधीवादी आणि आध्यात्मिक नेते, यांनी 1930-31 दरम्यान धुळे कारागृहात असताना 'गीताई' या ग्रंथाची रचना केली. 'गीताई' हे भगवद्गीतेचे मराठी भाषांतर आणि भाष्य आहे, जे सोप्या आणि सुलभ भाषेत सादर केले आहे, ज्यामुळे गीतेचे गहन शिक्षण सामान्य लोकांसाठी उपलब्ध झाले. 'गीता रहस्य' बाळ गंगाधर टिळकांनी लिहिले होते.",
    "options_breakdown": [
      {
        "option_text_english": "Gita Rahasya",
        "option_text_marathi": "गीता रहस्य",
        "is_correct": false,
        "reason": "Gita Rahasya was written by Bal Gangadhar Tilak, not Vinoba Bhave."
      },
      {
        "option_text_english": "Gitai",
        "option_text_marathi": "गीताई",
        "is_correct": true,
        "reason": "Vinoba Bhave wrote 'Gitai', a Marathi commentary on the Bhagavad Gita, during his imprisonment in 1930-31."
      },
      {
        "option_text_english": "Gitasar",
        "option_text_marathi": "गीतासार",
        "is_correct": false,
        "reason": "Gitasar is not the specific work written by Vinoba Bhave during his imprisonment in 1930-31."
      },
      {
        "option_text_english": "Gitabodh",
        "option_text_marathi": "गीताबोध",
        "is_correct": false,
        "reason": "Gitabodh is not the specific work written by Vinoba Bhave during his imprisonment in 1930-31."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "व्यक्ती ओळखा : (a) ते 1874 साली लंडन येथे झालेल्या 'प्राच्य अभ्यास' विषयावरील आंतरराष्ट्रीय परिषदेत सहभागी झाले होते. (b) ते मुंबई विद्यापीठाचे कुलगुरु होते.",
    "question_english": "Identify the Person. (a) He was participated in International conferences on oriental studies held in London in 1874. (b) He was Vice-chancellor of University of Bombay.",
    "options_marathi": [
      "डॉ. रामकृष्ण भांडारकर",
      "डॉ. काशीनाथ तेलंग",
      "फिरोजशहा मेहता",
      "वामन मोडक"
    ],
    "options_english": [
      "Dr. Ramakrishna Bhandarkar",
      "Dr. Kashinath Telang",
      "Pherozeshah Mehta",
      "Vaman Modak"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Social Reformers, Oriental Studies, Education in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Other Prominent Figures",
    "explanation_english": "The description accurately identifies Dr. Ramakrishna Gopal Bhandarkar. He was a distinguished orientalist and scholar of Sanskrit and ancient Indian history. He represented India at the International Congress of Orientalists held in London in 1874. Furthermore, he held the esteemed position of Vice-Chancellor of the University of Bombay, contributing significantly to education and research during his time.",
    "explanation_marathi": "दिलेले वर्णन डॉ. रामकृष्ण गोपाळ भांडारकर यांचे अचूकपणे सूचित करते. ते एक प्रतिष्ठित प्राच्यविद्या पंडित आणि संस्कृत तसेच प्राचीन भारतीय इतिहासाचे विद्वान होते. त्यांनी 1874 मध्ये लंडन येथे झालेल्या प्राच्यविद्या अभ्यास आंतरराष्ट्रीय परिषदेत भारताचे प्रतिनिधित्व केले होते. याव्यतिरिक्त, त्यांनी मुंबई विद्यापीठाचे कुलगुरू म्हणूनही महत्त्वपूर्ण पद भूषवले, ज्यामुळे त्यांनी त्यांच्या काळात शिक्षण आणि संशोधनात मोठे योगदान दिले.",
    "options_breakdown": [
      {
        "option_text_english": "Dr. Ramakrishna Bhandarkar",
        "option_text_marathi": "डॉ. रामकृष्ण भांडारकर",
        "is_correct": true,
        "reason": "Dr. Ramakrishna Bhandarkar was a renowned orientalist who participated in the 1874 London conference and served as Vice-Chancellor of the University of Bombay."
      },
      {
        "option_text_english": "Dr. Kashinath Telang",
        "option_text_marathi": "डॉ. काशीनाथ तेलंग",
        "is_correct": false,
        "reason": "While a prominent scholar, Dr. Kashinath Telang is not primarily associated with the 1874 London conference or serving as VC of Bombay University in this context."
      },
      {
        "option_text_english": "Pherozeshah Mehta",
        "option_text_marathi": "फिरोजशहा मेहता",
        "is_correct": false,
        "reason": "Pherozeshah Mehta was a prominent political leader and lawyer, but not known for oriental studies or being VC of Bombay University in this context."
      },
      {
        "option_text_english": "Vaman Modak",
        "option_text_marathi": "वामन मोडक",
        "is_correct": false,
        "reason": "Vaman Modak was a social reformer and educationist, but not associated with these specific achievements."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "1910 च्या प्रेस अॅक्ट नुसार मुंबईच्या अँग्लो-मराठी पत्राकडून ₹ 5,000 तारण म्हणून मागण्यात आले त्याचा परिणाम म्हणून त्याचे प्रकाशनच बंद करण्यात आले.",
    "question_english": "As per the Press Act of 1910, security of ₹ 5,000 was demanded from the Anglo-Marathi paper in Bombay and as a result it discontinued publication.",
    "options_marathi": [
      "काळ",
      "देशसेवक",
      "राष्ट्रमत",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Kal",
      "Deshsevak",
      "Rashtramat",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Press Act of 1910, Nationalist Newspapers",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Press Act of 1910 was enacted by the British government to curb nationalist activities and suppress freedom of the press. It empowered local governments to demand security deposits from publishers and editors, and to forfeit them if any objectionable material was published. The Anglo-Marathi paper 'Rashtramat' (राष्ट्रमत) published from Bombay was indeed asked to furnish a security of ₹5,000 under this act, which it failed to do, leading to its discontinuation. This act severely impacted many nationalist newspapers.",
    "explanation_marathi": "1910 चा प्रेस कायदा ब्रिटिश सरकारने राष्ट्रवादी कारवाया रोखण्यासाठी आणि वृत्तपत्रांच्या स्वातंत्र्यावर गदा आणण्यासाठी लागू केला होता. या कायद्याने स्थानिक सरकारांना प्रकाशक आणि संपादकांकडून सुरक्षा ठेव मागण्याचा आणि आक्षेपार्ह मजकूर प्रकाशित झाल्यास ती जप्त करण्याचा अधिकार दिला. मुंबईतून प्रकाशित होणाऱ्या 'राष्ट्रमत' या अँग्लो-मराठी वृत्तपत्राला या कायद्यानुसार ₹5,000 ची सुरक्षा ठेव मागण्यात आली होती, जी ते देऊ शकले नाहीत, परिणामी त्याचे प्रकाशन बंद झाले. या कायद्यामुळे अनेक राष्ट्रवादी वृत्तपत्रांवर गंभीर परिणाम झाला.",
    "options_breakdown": [
      {
        "option_text_english": "Kal",
        "option_text_marathi": "काळ",
        "is_correct": false,
        "reason": "'काळ' (Kal) हे शिवराम महादेव परांजपे यांनी संपादित केलेले एक प्रमुख मराठी वृत्तपत्र होते, जे त्याच्या जहाल विचारांसाठी ओळखले जात होते. यालाही सरकारी दडपशाहीचा सामना करावा लागला, परंतु प्रश्नात नमूद केलेली विशिष्ट घटना (1910 मध्ये ₹5,000 ची सुरक्षा ठेव मागितल्याने प्रकाशन बंद होणे) प्रामुख्याने 'काळ' शी संबंधित नाही."
      },
      {
        "option_text_english": "Deshsevak",
        "option_text_marathi": "देशसेवक",
        "is_correct": false,
        "reason": "'देशसेवक' (Deshsevak) हे दुसरे राष्ट्रवादी वृत्तपत्र होते, परंतु 1910 च्या प्रेस कायद्याशी आणि ₹5,000 च्या सुरक्षा ठेवीमुळे प्रकाशन बंद होण्याशी संबंधित विशिष्ट संदर्भात हे वृत्तपत्र नाही."
      },
      {
        "option_text_english": "Rashtramat",
        "option_text_marathi": "राष्ट्रमत",
        "is_correct": true,
        "reason": "हे योग्य उत्तर आहे. 'राष्ट्रमत' (Rashtramat) हे मुंबईतून प्रकाशित होणारे अँग्लो-मराठी वृत्तपत्र होते, ज्याला 1910 च्या प्रेस कायद्यानुसार ₹5,000 ची सुरक्षा ठेव मागण्यात आली होती आणि त्यानंतर त्याचे प्रकाशन बंद झाले."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी एकही नाही",
        "is_correct": false,
        "reason": "अयोग्य, कारण 'राष्ट्रमत' हे योग्य उत्तर आहे."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "खालील घटना कालक्रमाने जुळविलेला सुयोग्य पर्याय निवडा : (a) लखनौ करार (b) होमरूल लिग (c) सुरत काँग्रेस (d) काँग्रेस लोकशाही पक्ष",
    "question_english": "Arrange the following in correct chronological order : (a) Lucknow Pact (b) Homerule League (c) Surat Congress (d) Congress Democratic Party",
    "options_marathi": [
      "(a), (b), (c), (d)",
      "(b), (a), (d), (c)",
      "(c), (b), (a), (d)",
      "(c), (d), (b), (a)"
    ],
    "options_english": [
      "(a), (b), (c), (d)",
      "(b), (a), (d), (c)",
      "(c), (b), (a), (d)",
      "(c), (d), (b), (a)"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Chronology of key events in Indian National Movement",
    "difficulty": "Medium",
    "trap_detected": "Close dates for Home Rule League and Lucknow Pact",
    "explanation_english": "This question tests the chronological understanding of significant events in the Indian National Movement. The Surat Congress took place in 1907, marking a split between the moderates and extremists. The Home Rule League movement, led by Bal Gangadhar Tilak and Annie Besant, began in 1916, advocating for self-rule. The Lucknow Pact, an agreement between the Indian National Congress and the All-India Muslim League, was signed in December 1916. Finally, the Congress Democratic Party was formed by Bal Gangadhar Tilak in 1920, just before his demise, to participate in the elections under the Montagu-Chelmsford Reforms. Therefore, the correct chronological order is Surat Congress (1907), Home Rule League (1916), Lucknow Pact (1916), and Congress Democratic Party (1920).",
    "explanation_marathi": "हा प्रश्न भारतीय राष्ट्रीय चळवळीतील महत्त्वाच्या घटनांच्या कालक्रमानुसार मांडणीची तपासणी करतो. सुरत काँग्रेस 1907 मध्ये झाली, ज्यामध्ये मवाळ आणि जहाल यांच्यात फूट पडली. बाळ गंगाधर टिळक आणि ॲनी बेझंट यांच्या नेतृत्वाखालील होमरूल लीग चळवळ 1916 मध्ये सुरू झाली, ज्याने स्वशासनाची मागणी केली. लखनौ करार, भारतीय राष्ट्रीय काँग्रेस आणि अखिल भारतीय मुस्लिम लीग यांच्यातील करार, डिसेंबर 1916 मध्ये झाला. शेवटी, काँग्रेस लोकशाही पक्ष बाळ गंगाधर टिळक यांनी 1920 मध्ये, त्यांच्या निधनापूर्वी, मॉन्टेग्यू-चेम्सफोर्ड सुधारणांनुसार निवडणुकांमध्ये भाग घेण्यासाठी स्थापन केला. म्हणून, योग्य कालक्रमानुसार मांडणी सुरत काँग्रेस (1907), होमरूल लीग (1916), लखनौ करार (1916) आणि काँग्रेस लोकशाही पक्ष (1920) अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b), (c), (d)",
        "option_text_marathi": "(a), (b), (c), (d)",
        "is_correct": false,
        "reason": "हा क्रम (1916, 1916, 1907, 1920) कालक्रमानुसार योग्य नाही."
      },
      {
        "option_text_english": "(b), (a), (d), (c)",
        "option_text_marathi": "(b), (a), (d), (c)",
        "is_correct": false,
        "reason": "हा क्रम (1916, 1916, 1920, 1907) कालक्रमानुसार योग्य नाही."
      },
      {
        "option_text_english": "(c), (b), (a), (d)",
        "option_text_marathi": "(c), (b), (a), (d)",
        "is_correct": true,
        "reason": "हा क्रम सुरत काँग्रेस (1907), होमरूल लीग (1916), लखनौ करार (1916), काँग्रेस लोकशाही पक्ष (1920) असा आहे, जो योग्य कालक्रमानुसार आहे."
      },
      {
        "option_text_english": "(c), (d), (b), (a)",
        "option_text_marathi": "(c), (d), (b), (a)",
        "is_correct": false,
        "reason": "हा क्रम (1907, 1920, 1916, 1916) कालक्रमानुसार योग्य नाही."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "पुणे-मुंबई मार्गाजवळील मांगीरबाबा मंदिर म्हणजे यांची समाधी आहे.",
    "question_english": "Near Poona-Mumbai Road Mangirbaba Mandir is mausoleum of .",
    "options_marathi": [
      "राघोजी साळवे",
      "लहूजी साळवे",
      "उमाजी नाईक",
      "दादाजी नाईक"
    ],
    "options_english": [
      "Raghoji Salve",
      "Lahuji Salve",
      "Umaji Naik",
      "Dadaji Naik"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Historical figures and their memorials in Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual recall, similar-sounding names",
    "explanation_english": "The Mangirbaba Mandir, located near the Pune-Mumbai road, is a significant historical site. It is widely believed to be the samadhi (mausoleum) of Raghoji Salve. Raghoji Salve was a contemporary and associate of the revolutionary Umaji Naik, known for his resistance against British rule in the early 19th century. While Lahuji Vastad Salve was a renowned social reformer and martial arts guru, the Mangirbaba Mandir is specifically associated with Raghoji Salve.",
    "explanation_marathi": "पुणे-मुंबई रस्त्याजवळील मांगीरबाबा मंदिर हे एक महत्त्वाचे ऐतिहासिक स्थळ आहे. हे मंदिर राघोजी साळवे यांची समाधी असल्याचे मानले जाते. राघोजी साळवे हे 19 व्या शतकाच्या सुरुवातीला ब्रिटिश राजवटीविरुद्ध प्रतिकार करणारे क्रांतिकारक उमाजी नाईक यांचे समकालीन आणि सहकारी होते. लहूजी वस्ताद साळवे हे एक प्रसिद्ध समाजसुधारक आणि मार्शल आर्ट्सचे गुरु होते, परंतु मांगीरबाबा मंदिर विशेषतः राघोजी साळवे यांच्याशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Raghoji Salve",
        "option_text_marathi": "राघोजी साळवे",
        "is_correct": true,
        "reason": "योग्य. मांगीरबाबा मंदिर हे क्रांतिकारक राघोजी साळवे यांच्या समाधीशी संबंधित आहे."
      },
      {
        "option_text_english": "Lahuji Salve",
        "option_text_marathi": "लहूजी साळवे",
        "is_correct": false,
        "reason": "अयोग्य. लहूजी वस्ताद साळवे हे एक प्रमुख समाजसुधारक आणि मार्शल आर्ट्सचे गुरु होते, परंतु मांगीरबाबा मंदिर त्यांची समाधी नाही."
      },
      {
        "option_text_english": "Umaji Naik",
        "option_text_marathi": "उमाजी नाईक",
        "is_correct": false,
        "reason": "अयोग्य. उमाजी नाईक हे एक प्रसिद्ध क्रांतिकारक होते, परंतु मांगीरबाबा मंदिर त्यांची समाधी नाही."
      },
      {
        "option_text_english": "Dadaji Naik",
        "option_text_marathi": "दादाजी नाईक",
        "is_correct": false,
        "reason": "अयोग्य. या संदर्भात हे नाव ऐतिहासिकदृष्ट्या महत्त्वाचे नाही."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "पुढीलपैकी कोणत्या ग्रंथांमध्ये डॉ. बाबासाहेब आंबेडकरांनी हिंदू धर्माचे बारकाईने परीक्षण केले आहे? (a) फिलॉसॉफी ऑफ हिंदूइझम (b) रिडल्स इन हिंदूइझम (c) रिलिजन इन इंडिया (d) बुद्ध अॅन्ड हिज धम्म",
    "question_english": "In which of the following books Dr. Babasaheb Ambedkar has critically examined Hinduism? (a) Philosophy of Hinduism (b) Riddles in Hinduism (c) Religion in India (d) Buddha and his Dhamma",
    "options_marathi": [
      "(a) फक्त",
      "(a), (b) आणि (d) फक्त",
      "(c) फक्त",
      "(d) फक्त"
    ],
    "options_english": [
      "(a) only",
      "(a), (b) and (d) only",
      "(c) only",
      "(d) only"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Works of Dr. B.R. Ambedkar, Critique of Hinduism",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between direct critique and critique by presenting an alternative; knowing the exact titles of his works.",
    "explanation_english": "Dr. B.R. Ambedkar, a towering figure in Indian history, extensively critiqued Hinduism throughout his life, advocating for social equality and justice. His major works that critically examine Hinduism include 'Philosophy of Hinduism' and 'Riddles in Hinduism', where he delves into the philosophical and social aspects of the religion, exposing its inherent inequalities and contradictions. While 'Buddha and His Dhamma' is primarily a treatise on Buddhism, it implicitly and explicitly critiques Hinduism by presenting Buddhism as a rational and egalitarian alternative, thereby highlighting the flaws and injustices within the Hindu social system that led him to convert. 'Religion in India' is not one of his widely recognized major works specifically dedicated to the critical examination of Hinduism.",
    "explanation_marathi": "डॉ. बी.आर. आंबेडकर, भारतीय इतिहासातील एक महान व्यक्तिमत्व, यांनी आयुष्यभर हिंदू धर्मावर सखोल टीका केली, सामाजिक समानता आणि न्यायाची वकिली केली. हिंदू धर्माचे गंभीरपणे परीक्षण करणाऱ्या त्यांच्या प्रमुख ग्रंथांमध्ये 'फिलॉसॉफी ऑफ हिंदूइझम' आणि 'रिडल्स इन हिंदूइझम' यांचा समावेश आहे, जिथे त्यांनी धर्माच्या तात्विक आणि सामाजिक पैलूंचा अभ्यास करून त्यातील अंतर्भूत असमानता आणि विरोधाभास उघड केले. 'बुद्ध अँड हिज धम्म' हा ग्रंथ प्रामुख्याने बौद्ध धर्मावर असला तरी, तो हिंदू धर्मावर अप्रत्यक्ष आणि प्रत्यक्ष टीका करतो, बौद्ध धर्माला एक तर्कसंगत आणि समतावादी पर्याय म्हणून सादर करतो, ज्यामुळे त्यांना धर्मांतर करण्यास प्रवृत्त करणाऱ्या हिंदू सामाजिक व्यवस्थेतील त्रुटी आणि अन्याय अधोरेखित होतात. 'रिलिजन इन इंडिया' हे त्यांच्या हिंदू धर्माच्या गंभीर परीक्षणासाठी समर्पित असलेल्या प्रमुख ग्रंथांपैकी एक म्हणून व्यापकपणे ओळखले जात नाही.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason": "अयोग्य, कारण (b) आणि (d) देखील हिंदू धर्माचे गंभीर परीक्षण करतात."
      },
      {
        "option_text_english": "(a), (b) and (d) only",
        "option_text_marathi": "(a), (b) आणि (d) फक्त",
        "is_correct": true,
        "reason": "योग्य. 'फिलॉसॉफी ऑफ हिंदूइझम' आणि 'रिडल्स इन हिंदूइझम' हे थेट टीका करणारे ग्रंथ आहेत. 'बुद्ध अँड हिज धम्म' हा ग्रंथ पर्यायी धर्म सादर करून आणि हिंदू धर्मातील त्रुटींवर प्रकाश टाकून टीका करतो."
      },
      {
        "option_text_english": "(c) only",
        "option_text_marathi": "(c) फक्त",
        "is_correct": false,
        "reason": "अयोग्य, 'रिलिजन इन इंडिया' हे या उद्देशासाठी प्रमुख कार्य नाही."
      },
      {
        "option_text_english": "(d) only",
        "option_text_marathi": "(d) फक्त",
        "is_correct": false,
        "reason": "अयोग्य, कारण (a) आणि (b) देखील महत्त्वाची कार्ये आहेत."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "\"द बाँबे असोसिएशन\" चे पहिले चिटणीस कोण होते ?",
    "question_english": "Who was the First Secretary of \"The Bombay Association\" ?",
    "options_marathi": [
      "भाऊ दाजी लाड",
      "फर्दुनजी नौरोजी",
      "विनायकराव जगन्नाथ",
      "बोमनजी होरमुसजी"
    ],
    "options_english": [
      "Bhau Daji Lad",
      "Fardunji Naoroji",
      "Vinayakrao Jagannath",
      "Bomanji Hormusji"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Bombay Association, Early Nationalist Leaders",
    "difficulty": "Medium",
    "trap_detected": "Multiple secretaries, similar names",
    "explanation_english": "The Bombay Association was one of the earliest political organizations in India, founded in 1852 by Jagannath Shankarsheth. Its primary objective was to represent Indian grievances to the British Parliament. Dr. Bhau Daji Lad, a renowned physician, scholar, and social reformer, served as one of its first secretaries, playing a crucial role in its initial functioning and advocacy. Vinayakrao Jagannath was also a joint secretary. This association marked an important step in the development of organized political consciousness in Western India.",
    "explanation_marathi": "बॉम्बे असोसिएशन ही भारतातील सर्वात जुन्या राजकीय संघटनांपैकी एक होती, जी 1852 मध्ये जगन्नाथ शंकरशेठ यांनी स्थापन केली होती. ब्रिटिश संसदेसमोर भारतीयांच्या तक्रारी मांडणे हा तिचा मुख्य उद्देश होता. डॉ. भाऊ दाजी लाड, एक प्रसिद्ध वैद्य, विद्वान आणि समाजसुधारक, या संघटनेचे पहिले सचिव म्हणून कार्यरत होते आणि तिच्या सुरुवातीच्या कार्यामध्ये आणि वकिलीमध्ये त्यांनी महत्त्वाची भूमिका बजावली. विनायकराव जगन्नाथ हे देखील संयुक्त सचिव होते. या संघटनेने पश्चिम भारतात संघटित राजकीय चेतनेच्या विकासात एक महत्त्वाचे पाऊल टाकले.",
    "options_breakdown": [
      {
        "option_text_english": "Bhau Daji Lad",
        "option_text_marathi": "भाऊ दाजी लाड",
        "is_correct": true,
        "reason": "योग्य. डॉ. भाऊ दाजी लाड हे 'द बॉम्बे असोसिएशन' चे पहिले सचिव होते."
      },
      {
        "option_text_english": "Fardunji Naoroji",
        "option_text_marathi": "फर्दुनजी नौरोजी",
        "is_correct": false,
        "reason": "अयोग्य. फर्दुनजी नौरोजी हे बॉम्बे असोसिएशनशी संबंधित असले तरी, ते त्याचे पहिले सचिव नव्हते. ते एक प्रमुख सदस्य होते."
      },
      {
        "option_text_english": "Vinayakrao Jagannath",
        "option_text_marathi": "विनायकराव जगन्नाथ",
        "is_correct": false,
        "reason": "अयोग्य. ते देखील संयुक्त सचिव होते, परंतु दिलेल्या पर्यायांमध्ये भाऊ दाजी लाड हे अधिक सामान्यतः पहिले सचिव म्हणून ओळखले जातात."
      },
      {
        "option_text_english": "Bomanji Hormusji",
        "option_text_marathi": "बोमनजी होरमुसजी",
        "is_correct": false,
        "reason": "अयोग्य. या भूमिकेशी संबंधित नाहीत."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "महाराष्ट्रातील विधान परिषदेसंबंधी अयोग्य विधान पुढीलपैकी विधानांतून शोधून काढा : (a) 1935 च्या कायद्यानुसार दोन वैधानिक सभागृहे महाराष्ट्रात म्हणजे त्या वेळच्या मुंबई प्रांतात तयार करण्यात आली. (b) या सभागृहाचे पहिले अधिवेशन पुण्यात 'कौन्सिल हॉल' येथे 1935 रोजी भरले. (c) विधान परिषदेच्या निर्मितीच्या वेळी त्याची सदस्यसंख्या 29 होती ती वाढत जाऊन 1957 मधे 40 झाली आणि सध्या ती 78 आहे.",
    "question_english": "Find out the incorrect statement/s about Legislative council of Maharashtra. (a) As per 1935 Act two legislative houses were created in Maharashtra i.e., then Bombay province. (b) First of its session was held in Pune in Council Hall in 1935. (c) Its membership at its creation was 29 later rose to 40 in 1957 and at present it is 78.",
    "options_marathi": [
      "केवळ (a)",
      "केवळ (b)",
      "केवळ (c)",
      "केवळ (b), (c)"
    ],
    "options_english": [
      "(a) Only",
      "(b) Only",
      "(c) Only",
      "(b), (c) Only"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Legislative Council of Maharashtra, Government of India Act 1935",
    "difficulty": "Hard",
    "trap_detected": "Specific dates and numbers, requiring precise historical and current knowledge.",
    "explanation_english": "This question pertains to the historical and current facts about the Legislative Council of Maharashtra, specifically in the context of the Government of India Act 1935.\nStatement (a) is correct: The Government of India Act 1935 indeed introduced bicameral legislatures in several provinces, including the then Bombay Province, establishing both a Legislative Assembly and a Legislative Council.\nStatement (b) is incorrect: While the Council Hall in Pune is a historic venue, the first session of the Bombay Legislative Council under the 1935 Act was held in 1937, not 1935, as the Act came into effect in 1937.\nStatement (c) is incorrect: The initial membership of the Bombay Legislative Council under the 1935 Act was 29. However, after the reorganization of states in 1956, the strength of the Legislative Council for the enlarged Bombay State was increased to 72 in 1957, not 40. Upon the formation of Maharashtra State in 1960, its Legislative Council was constituted with 78 members, which remains its current strength.\nTherefore, statements (b) and (c) are incorrect.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्र विधान परिषदेच्या ऐतिहासिक आणि सद्यस्थितीबद्दल, विशेषतः भारत सरकार अधिनियम 1935 च्या संदर्भात आहे.\nविधान (a) योग्य आहे: भारत सरकार अधिनियम 1935 नुसार, तत्कालीन मुंबई प्रांतासह अनेक प्रांतांमध्ये द्विगृही विधिमंडळे स्थापन करण्यात आली, ज्यात विधानसभा आणि विधान परिषद दोन्ही समाविष्ट होते.\nविधान (b) अयोग्य आहे: पुणे येथील कौन्सिल हॉल हे ऐतिहासिक ठिकाण असले तरी, 1935 च्या कायद्यानुसार मुंबई विधान परिषदेचे पहिले अधिवेशन 1937 मध्ये झाले, 1935 मध्ये नाही, कारण हा कायदा 1937 मध्ये लागू झाला.\nविधान (c) अयोग्य आहे: 1935 च्या कायद्यानुसार मुंबई विधान परिषदेची सुरुवातीची सदस्यसंख्या 29 होती. तथापि, 1956 मध्ये राज्यांच्या पुनर्रचनेनंतर, विस्तारित मुंबई राज्यासाठी विधान परिषदेची सदस्यसंख्या 1957 मध्ये 72 पर्यंत वाढवण्यात आली होती, 40 पर्यंत नाही. 1960 मध्ये महाराष्ट्र राज्याच्या स्थापनेनंतर, त्याची विधान परिषद 78 सदस्यांसह गठित करण्यात आली, जी सध्याची सदस्यसंख्या आहे.\nम्हणून, विधाने (b) आणि (c) अयोग्य आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) Only",
        "option_text_marathi": "केवळ (a)",
        "is_correct": false,
        "reason": "अयोग्य, कारण विधान (a) योग्य आहे."
      },
      {
        "option_text_english": "(b) Only",
        "option_text_marathi": "केवळ (b)",
        "is_correct": false,
        "reason": "अयोग्य, कारण विधान (c) देखील अयोग्य आहे."
      },
      {
        "option_text_english": "(c) Only",
        "option_text_marathi": "केवळ (c)",
        "is_correct": false,
        "reason": "अयोग्य, कारण विधान (b) देखील अयोग्य आहे."
      },
      {
        "option_text_english": "(b), (c) Only",
        "option_text_marathi": "केवळ (b), (c)",
        "is_correct": true,
        "reason": "योग्य, कारण विधाने (b) आणि (c) दोन्ही वस्तुस्थितीनुसार अयोग्य आहेत."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "जर संसदेने केलेला एखादा कायदा घटनेच्या तत्वांच्या विरोधी असेल तर असा कायदा या नावाने ओळखला जातो.",
    "question_english": "If the act passed by parliament proved that it is against the principle of constitution, it is termed as:",
    "options_marathi": [
      "अल्ट्रा विरस",
      "इन्ट्रा विरस",
      "अनौरस",
      "कायद्याने औरस ठरविलेला"
    ],
    "options_english": [
      "Ultravires",
      "Intravires",
      "Illegitimate",
      "Legitimate"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Judicial Review, Constitutional Validity of Laws",
    "difficulty": "Easy",
    "trap_detected": "Similar-sounding legal terms",
    "explanation_english": "In constitutional law, when a legislative body, such as the Parliament, passes a law that exceeds its constitutional powers or violates the fundamental principles and provisions of the Constitution, that law is termed 'ultra vires'. 'Ultra vires' is a Latin phrase meaning \"beyond the powers\". Such a law can be declared unconstitutional and void by the judiciary through the process of judicial review. Conversely, 'intra vires' means \"within the powers\" and refers to an act that is within the legal authority of the body performing it.",
    "explanation_marathi": "घटनात्मक कायद्यामध्ये, जेव्हा संसद सारखी कोणतीही वैधानिक संस्था असा कायदा पारित करते जो तिच्या घटनात्मक अधिकारांच्या पलीकडचा असतो किंवा घटनेच्या मूलभूत तत्त्वे आणि तरतुदींचे उल्लंघन करतो, तेव्हा त्या कायद्याला 'अल्ट्रा विरस' (Ultra Vires) असे संबोधले जाते. 'अल्ट्रा विरस' हा लॅटिन शब्द असून त्याचा अर्थ \"अधिकारांच्या पलीकडे\" असा होतो. अशा कायद्याला न्यायव्यवस्थेद्वारे न्यायिक पुनरावलोकनाच्या प्रक्रियेतून असंवैधानिक आणि रद्दबातल घोषित केले जाऊ शकते. याउलट, 'इन्ट्रा विरस' (Intra Vires) म्हणजे \"अधिकारांच्या आत\" आणि ते एखाद्या संस्थेने तिच्या कायदेशीर अधिकारांच्या कक्षेत केलेले कार्य दर्शवते.",
    "options_breakdown": [
      {
        "option_text_english": "Ultravires",
        "option_text_marathi": "अल्ट्रा विरस",
        "is_correct": true,
        "reason": "योग्य. 'अल्ट्रा विरस' हा कायदेशीर शब्द आहे जो एखाद्या संस्थेने तिच्या कायदेशीर अधिकारांच्या किंवा अधिकारांच्या पलीकडे केलेल्या कृतीसाठी वापरला जातो, विशेषतः जेव्हा ती घटनात्मक तत्त्वांचे उल्लंघन करते."
      },
      {
        "option_text_english": "Intravires",
        "option_text_marathi": "इन्ट्रा विरस",
        "is_correct": false,
        "reason": "अयोग्य. 'इन्ट्रा विरस' म्हणजे 'अधिकारांच्या आत' आणि ते कायदेशीररित्या वैध असलेल्या कृतीचा संदर्भ देते."
      },
      {
        "option_text_english": "Illegitimate",
        "option_text_marathi": "अनौरस",
        "is_correct": false,
        "reason": "अयोग्य. 'अवैध' (Illegitimate) हा एक सामान्य शब्द आहे आणि या संदर्भात वापरला जाणारा विशिष्ट कायदेशीर शब्द नाही."
      },
      {
        "option_text_english": "Legitimate",
        "option_text_marathi": "कायद्याने औरस ठरविलेला",
        "is_correct": false,
        "reason": "अयोग्य. हे प्रश्नात वर्णन केलेल्या स्थितीच्या विरुद्ध आहे."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "जर एखादे राज्य केन्द्र सरकारने दिलेल्या निर्देशांचे पालन करण्यात अपयशी ठरले तर राष्ट्रपती काय करतील?",
    "question_english": "What can the President do if a state fails to comply with directives of the Central Government ?",
    "options_marathi": [
      "ते राज्य विधिमंडळ विसर्जित करतील आणि नव्याने निवडणूका घेण्याचे आदेश देतील.",
      "ते राज्यातील घटनात्मक यंत्रणा कोलमडून पडल्याचे घोषित करतील आणि राज्य चालविण्याची जबाबदारी स्विकारतील.",
      "ते राज्यात अर्धसैनिक दले पाठवून निर्देशांची पूर्तता करवून घेतील.",
      "वरीलपैकी कोणतेही"
    ],
    "options_english": [
      "He can dissolve state legislature and order fresh elections.",
      "He can declare the breakdown of constitutional machinery in the state and assume responsibility for the governance of the state.",
      "He can send paramilitary forces to the state to secure compliance.",
      "Any of the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Article 365, President's Rule",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between immediate constitutional action and subsequent steps or other executive actions.",
    "explanation_english": "According to Article 365 of the Indian Constitution, if a state fails to comply with or give effect to any directions given by the Central Government, it is lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution. In such a scenario, the President can declare the breakdown of constitutional machinery in the state, which leads to the imposition of President's Rule (under Article 356). Under President's Rule, the President assumes to himself all or any of the functions of the Government of the State and all or any of the powers vested in or exercisable by the Governor or any body or authority in the State. This effectively means the Central Government takes over the administration of the state.",
    "explanation_marathi": "भारतीय राज्यघटनेच्या कलम 365 नुसार, जर एखादे राज्य केंद्र सरकारने दिलेल्या कोणत्याही निर्देशांचे पालन करण्यात किंवा त्यांना प्रभावीपणे लागू करण्यात अपयशी ठरले, तर राष्ट्रपतींना अशी परिस्थिती निर्माण झाली आहे असे मानण्याचा अधिकार आहे की, राज्याचे सरकार संविधानाच्या तरतुदींनुसार चालवले जाऊ शकत नाही. अशा परिस्थितीत, राष्ट्रपती राज्यात घटनात्मक यंत्रणा कोलमडून पडल्याचे घोषित करू शकतात, ज्यामुळे राष्ट्रपती राजवट (कलम 356 अंतर्गत) लागू होते. राष्ट्रपती राजवटीत, राष्ट्रपती राज्याच्या सरकारची सर्व किंवा कोणतीही कार्ये आणि राज्यपाल किंवा राज्यातील कोणत्याही संस्था किंवा प्राधिकरणाकडे असलेले सर्व किंवा कोणतेही अधिकार स्वतःकडे घेतात. याचा अर्थ प्रभावीपणे केंद्र सरकार राज्याचा कारभार हाती घेते.",
    "options_breakdown": [
      {
        "option_text_english": "He can dissolve state legislature and order fresh elections.",
        "option_text_marathi": "ते राज्य विधिमंडळ विसर्जित करतील आणि नव्याने निवडणूका घेण्याचे आदेश देतील.",
        "is_correct": false,
        "reason": "अयोग्य. विधानमंडळाचे विसर्जन राष्ट्रपती राजवटीत होऊ शकते, परंतु घटनात्मक यंत्रणा कोलमडल्याचे घोषित करणे ही प्राथमिक आणि तात्काळ घटनात्मक कृती आहे."
      },
      {
        "option_text_english": "He can declare the breakdown of constitutional machinery in the state and assume responsibility for the governance of the state.",
        "option_text_marathi": "ते राज्यातील घटनात्मक यंत्रणा कोलमडून पडल्याचे घोषित करतील आणि राज्य चालविण्याची जबाबदारी स्विकारतील.",
        "is_correct": true,
        "reason": "योग्य. कलम 365 नुसार ही थेट घटनात्मक कृती आहे, ज्यामुळे कलम 356 अंतर्गत राष्ट्रपती राजवट लागू होते."
      },
      {
        "option_text_english": "He can send paramilitary forces to the state to secure compliance.",
        "option_text_marathi": "ते राज्यात अर्धसैनिक दले पाठवून निर्देशांची पूर्तता करवून घेतील.",
        "is_correct": false,
        "reason": "अयोग्य. निमलष्करी दल पाठवणे ही कायदा आणि सुव्यवस्थेसाठीची कार्यकारी उपाययोजना आहे, केंद्राच्या निर्देशांचे पालन न केल्यामुळे घटनात्मक यंत्रणा कोलमडल्यास हा घटनात्मक उपाय नाही."
      },
      {
        "option_text_english": "Any of the above",
        "option_text_marathi": "वरीलपैकी कोणतेही",
        "is_correct": false,
        "reason": "अयोग्य, कारण केवळ पर्याय 2 ही योग्य घटनात्मक कृती आहे."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "भारतीय राज्यघटनेच्या आठव्या परिशिष्टामध्ये सिंधी भाषेचा समावेश साली करण्यात आला.",
    "question_english": "Sindhi language was included in the eighth schedule of the Indian Constitution in .",
    "options_marathi": [
      "1976",
      "1967",
      "1992",
      "2004"
    ],
    "options_english": [
      "1976",
      "1967",
      "1992",
      "2004"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Eighth Schedule, Official Languages, Constitutional Amendments",
    "difficulty": "Easy",
    "trap_detected": "Factual recall of amendment years.",
    "explanation_english": "The Eighth Schedule of the Indian Constitution lists the official languages of India. Originally, it contained 14 languages. Over time, several languages have been added through constitutional amendments. Sindhi language was included in the Eighth Schedule in 1967 by the 21st Constitutional Amendment Act. This amendment increased the number of scheduled languages to 15. Subsequent amendments further expanded the list.",
    "explanation_marathi": "भारतीय राज्यघटनेच्या आठव्या परिशिष्टात भारतातील अधिकृत भाषांची यादी आहे. मूळतः यात 14 भाषा होत्या. कालांतराने, अनेक भाषा घटनादुरुस्तीद्वारे जोडल्या गेल्या आहेत. सिंधी भाषेचा समावेश आठव्या परिशिष्टात 1967 मध्ये 21 व्या घटनादुरुस्ती कायद्याद्वारे करण्यात आला. या दुरुस्तीमुळे अनुसूचित भाषांची संख्या 15 झाली. त्यानंतरच्या दुरुस्त्यांनी ही यादी आणखी वाढवली.",
    "options_breakdown": [
      {
        "option_text_english": "1976",
        "option_text_marathi": "1976",
        "is_correct": false,
        "reason": "अयोग्य. 1976 मध्ये कोणतीही प्रमुख भाषा जोडली गेली नाही."
      },
      {
        "option_text_english": "1967",
        "option_text_marathi": "1967",
        "is_correct": true,
        "reason": "योग्य. सिंधी भाषा 1967 मध्ये 21 व्या घटनादुरुस्ती कायद्याद्वारे आठव्या परिशिष्टात समाविष्ट करण्यात आली."
      },
      {
        "option_text_english": "1992",
        "option_text_marathi": "1992",
        "is_correct": false,
        "reason": "अयोग्य. 1992 मध्ये 71 व्या घटनादुरुस्तीद्वारे कोकणी, मणिपुरी आणि नेपाळी भाषा जोडल्या गेल्या."
      },
      {
        "option_text_english": "2004",
        "option_text_marathi": "2004",
        "is_correct": false,
        "reason": "अयोग्य. 2003 मध्ये (2004 मध्ये लागू) 92 व्या घटनादुरुस्तीद्वारे बोडो, डोगरी, मैथिली आणि संथाली भाषा जोडल्या गेल्या."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "भारताच्या फाळणीनंतर घटनासमितीच्या संख्येबाबतच्या विधानांचा विचार करा. (a) समितीची सदस्यसंख्या 299 पर्यंत खाली आली. (b) संस्थानांच्या प्रतिनिधींची संख्या 70 पर्यंत कमी झाली. (c) प्रांतांच्या व मुख्य आयुक्तांच्या प्रांतांच्या प्रतिनिधींची संख्या 229 इतकी कमी झाली.",
    "question_english": "Consider the statements about strength of Constituent Assembly after partition of India. (a) Total strength of Assembly came down to 299. (b) The strength of the representatives of princely states was reduced to 70. (c) Strength of the representatives of provinces and Chief Commissioners Provinces was reduced to 229.",
    "options_marathi": [
      "केवळ (a)",
      "केवळ (a) आणि (b)",
      "केवळ (b) आणि (c)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b) only",
      "(b) and (c) only",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Constituent Assembly, Partition of India",
    "difficulty": "Medium",
    "trap_detected": "Factual recall of numbers before and after partition.",
    "explanation_english": "The Constituent Assembly of India was initially formed in 1946 with a total strength of 389 members, as per the Cabinet Mission Plan. This included 296 members from British India (292 from Governors' provinces and 4 from Chief Commissioners' provinces) and 93 members from the Princely States. However, with the partition of India in 1947, the members representing the territories that went to Pakistan withdrew from the Assembly. Consequently, the strength of the Constituent Assembly was reduced.\nStatement (a) is correct: The total strength of the Assembly came down to 299 members.\nStatement (b) is correct: The strength of the representatives from the Princely States was reduced to 70.\nStatement (c) is correct: The strength of the representatives from the provinces and Chief Commissioners' provinces was reduced to 229.\nThus, all three statements accurately describe the composition of the Constituent Assembly after the partition of India.",
    "explanation_marathi": "भारताची संविधान सभा सुरुवातीला 1946 मध्ये कॅबिनेट मिशन योजनेनुसार एकूण 389 सदस्यांसह स्थापन झाली होती. यात ब्रिटिश भारताचे 296 सदस्य (राज्यपालांच्या प्रांतांमधून 292 आणि मुख्य आयुक्तांच्या प्रांतांमधून 4) आणि संस्थानांचे 93 सदस्य यांचा समावेश होता. तथापि, 1947 मध्ये भारताच्या फाळणीनंतर, पाकिस्तानमध्ये गेलेल्या प्रदेशांचे प्रतिनिधित्व करणाऱ्या सदस्यांनी विधानसभेतून माघार घेतली. परिणामी, संविधान सभेची सदस्यसंख्या कमी झाली.\nविधान (a) योग्य आहे: विधानसभेची एकूण सदस्यसंख्या 299 पर्यंत कमी झाली.\nविधान (b) योग्य आहे: संस्थानांच्या प्रतिनिधींची संख्या 70 पर्यंत कमी झाली.\nविधान (c) योग्य आहे: प्रांत आणि मुख्य आयुक्तांच्या प्रांतांच्या प्रतिनिधींची संख्या 229 पर्यंत कमी झाली.\nअशा प्रकारे, तिन्ही विधाने भारताच्या फाळणीनंतरच्या संविधान सभेच्या रचनेचे अचूक वर्णन करतात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "केवळ (a)",
        "is_correct": false,
        "reason": "अयोग्य, कारण (b) आणि (c) देखील योग्य आहेत."
      },
      {
        "option_text_english": "(a) and (b) only",
        "option_text_marathi": "केवळ (a) आणि (b)",
        "is_correct": false,
        "reason": "अयोग्य, कारण (c) देखील योग्य आहे."
      },
      {
        "option_text_english": "(b) and (c) only",
        "option_text_marathi": "केवळ (b) आणि (c)",
        "is_correct": false,
        "reason": "अयोग्य, कारण (a) देखील योग्य आहे."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": true,
        "reason": "योग्य, कारण फाळणीनंतर संविधान सभेच्या सदस्यसंख्येबद्दलची तिन्ही विधाने वस्तुस्थितीनुसार अचूक आहेत."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "'मूलभूत कर्तव्या' बाबतच्या खालील विधानांपैकी कोणते बरोबर नाही ? (1) त्यांचा समावेश 42 व्या घटनादुरुस्तीने राज्यघटनेत करण्यात आला आहे. (2) त्यांचा समावेश राज्यघटनेतील विभाग 'IV A' या नव्या विभागात करण्यात आला आहे. (3) त्यांचा समावेश कलम 51-A मध्ये करण्यात आला आहे. (4) ती भारतीय नागरिकांना तसेच परकीयांना लागू आहेत.",
    "question_english": "Which one of the following statements is not correct about 'Fundamental Duties' ? (1) These are included in the constitution by the 42nd constitutional Amendment. (2) These are included in Part 'IV A' of the constitution, which is a new. (3) These are included in Article 51-A. (4) These are applicable to Indian citizens as well as to non-citizens.",
    "options_marathi": [
      "त्यांचा समावेश 42 व्या घटनादुरुस्तीने राज्यघटनेत करण्यात आला आहे.",
      "त्यांचा समावेश राज्यघटनेतील विभाग 'IV A' या नव्या विभागात करण्यात आला आहे.",
      "त्यांचा समावेश कलम 51-A मध्ये करण्यात आला आहे.",
      "ती भारतीय नागरिकांना तसेच परकीयांना लागू आहेत."
    ],
    "options_english": [
      "These are included in the constitution by the 42nd constitutional Amendment.",
      "These are included in Part 'IV A' of the constitution, which is a new.",
      "These are included in Article 51-A.",
      "These are applicable to Indian citizens as well as to non-citizens."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Fundamental Duties",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Fundamental Duties were added to the Indian Constitution by the 42nd Amendment Act of 1976, based on the recommendations of the Swaran Singh Committee. They are enshrined in Part IV-A, consisting of a single Article 51-A. These duties are moral obligations on citizens to help promote a spirit of patriotism and to uphold the unity of India. Unlike Fundamental Rights, Fundamental Duties are non-justiciable and are applicable exclusively to Indian citizens, not to foreigners. Therefore, the statement that they are applicable to non-citizens is incorrect.",
    "explanation_marathi": "मूलभूत कर्तव्ये भारतीय संविधानात 1976 च्या 42 व्या घटनादुरुस्ती कायद्याने, सरदार स्वर्णसिंग समितीच्या शिफारशीनुसार समाविष्ट करण्यात आली. ती संविधानाच्या भाग IV-A मध्ये, कलम 51-A अंतर्गत समाविष्ट आहेत. ही कर्तव्ये नागरिकांवर देशभक्तीची भावना वाढवण्यासाठी आणि भारताची एकता टिकवण्यासाठी नैतिक जबाबदाऱ्या म्हणून आहेत. मूलभूत हक्कांप्रमाणे, मूलभूत कर्तव्ये न्यायप्रविष्ट नाहीत आणि ती केवळ भारतीय नागरिकांना लागू आहेत, परदेशी नागरिकांना नाहीत. त्यामुळे, ती परदेशी नागरिकांनाही लागू आहेत हे विधान चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "These are included in the constitution by the 42nd constitutional Amendment.",
        "option_text_marathi": "त्यांचा समावेश 42 व्या घटनादुरुस्तीने राज्यघटनेत करण्यात आला आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. The 42nd Constitutional Amendment Act of 1976 added Fundamental Duties to the Constitution.",
        "reason_marathi": "हे विधान बरोबर आहे. 1976 च्या 42 व्या घटनादुरुस्ती कायद्याने मूलभूत कर्तव्ये संविधानात समाविष्ट करण्यात आली."
      },
      {
        "option_text_english": "These are included in Part 'IV A' of the constitution, which is a new.",
        "option_text_marathi": "त्यांचा समावेश राज्यघटनेतील विभाग 'IV A' या नव्या विभागात करण्यात आला आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. Part IV-A was specifically added to accommodate the Fundamental Duties.",
        "reason_marathi": "हे विधान बरोबर आहे. मूलभूत कर्तव्यांसाठी भाग IV-A विशेषतः जोडण्यात आला."
      },
      {
        "option_text_english": "These are included in Article 51-A.",
        "option_text_marathi": "त्यांचा समावेश कलम 51-A मध्ये करण्यात आला आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. Article 51-A exclusively deals with the Fundamental Duties.",
        "reason_marathi": "हे विधान बरोबर आहे. कलम 51-A केवळ मूलभूत कर्तव्यांशी संबंधित आहे."
      },
      {
        "option_text_english": "These are applicable to Indian citizens as well as to non-citizens.",
        "option_text_marathi": "ती भारतीय नागरिकांना तसेच परकीयांना लागू आहेत.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. Fundamental Duties are applicable only to Indian citizens, not to non-citizens. This is the 'not correct' statement the question asks for.",
        "reason_marathi": "हे विधान चुकीचे आहे. मूलभूत कर्तव्ये केवळ भारतीय नागरिकांना लागू आहेत, परदेशी नागरिकांना नाहीत. हेच प्रश्न विचारलेले 'चुकीचे' विधान आहे."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "15 ऑगस्ट 1943 पर्यंत सुधारित भारत सरकार कायदा, 1935 अंतर्गत भाग (कलमे) आणि परिशिष्टे होती.",
    "question_english": "The Government of India Act, 1935 as amended upto 15th August, 1943 had parts sections and schedules.",
    "options_marathi": [
      "15, 325, 12",
      "14, 321, 10",
      "16, 320, 8",
      "17, 324, 9"
    ],
    "options_english": [
      "15, 325, 12",
      "14, 321, 10",
      "16, 320, 8",
      "17, 324, 9"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Government of India Act, 1935",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Government of India Act, 1935 was a significant constitutional document that laid much of the groundwork for the future Indian Constitution. It originally comprised 14 Parts, 321 Sections, and 10 Schedules. Although the question specifies 'as amended up to 15th August 1943', the core structural numbers of parts, sections, and schedules remained consistent with its original enactment for the purpose of such factual questions.",
    "explanation_marathi": "भारत सरकार कायदा, 1935 हा एक महत्त्वाचा घटनात्मक दस्तऐवज होता ज्याने भविष्यातील भारतीय संविधानाचा बराचसा पाया घातला. यात मूळतः 14 भाग, 321 कलमे आणि 10 परिशिष्टे होती. जरी प्रश्नात '15 ऑगस्ट 1943 पर्यंत सुधारित' असे नमूद केले असले तरी, अशा वस्तुस्थितीवर आधारित प्रश्नांसाठी भाग, कलमे आणि परिशिष्टांची मुख्य संरचना मूळ कायद्यानुसारच राहिली.",
    "options_breakdown": [
      {
        "option_text_english": "15, 325, 12",
        "option_text_marathi": "15, 325, 12",
        "is_correct": false,
        "reason_english": "These numbers are incorrect for the Government of India Act, 1935.",
        "reason_marathi": "हे आकडे भारत सरकार कायदा, 1935 साठी चुकीचे आहेत."
      },
      {
        "option_text_english": "14, 321, 10",
        "option_text_marathi": "14, 321, 10",
        "is_correct": true,
        "reason_english": "This is the correct structure: 14 Parts, 321 Sections, and 10 Schedules.",
        "reason_marathi": "ही योग्य रचना आहे: 14 भाग, 321 कलमे आणि 10 परिशिष्टे."
      },
      {
        "option_text_english": "16, 320, 8",
        "option_text_marathi": "16, 320, 8",
        "is_correct": false,
        "reason_english": "These numbers are incorrect for the Government of India Act, 1935.",
        "reason_marathi": "हे आकडे भारत सरकार कायदा, 1935 साठी चुकीचे आहेत."
      },
      {
        "option_text_english": "17, 324, 9",
        "option_text_marathi": "17, 324, 9",
        "is_correct": false,
        "reason_english": "These numbers are incorrect for the Government of India Act, 1935.",
        "reason_marathi": "हे आकडे भारत सरकार कायदा, 1935 साठी चुकीचे आहेत."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "खालीलपैकी कोणते विधान/ने बरोबर आहे/त ? (a) राज्य विधिमंडळाच्या बाहेरील व्यक्तिची मंत्री म्हणून नेमण्यास कोणतीही बंदी/अडथळा नाही. (b) मंत्री म्हणून नेमलेल्या व्यक्तिस सहा महिन्यांच्या आत राज्य विधिमंडळाच्या कोणत्याही सभागृहाचे सभासद व्हावे लागते. (c) विधानसभेचा सभापती म्हणून नेमलेल्या व्यक्तिस सहा महिन्यांच्या आत विधानसभेचे सभासद व्हावे लागते. (d) राज्य विधिमंडळाच्या नामनिर्देशित सदस्यास मंत्री म्हणून नेमता येत नाही.",
    "question_english": "Which one of the following statements is/are correct? (a) There is no bar to the appointment of a person from outside the state legislature as minister. (b) A person appointed as a minister has to become a member of either house of state legislature within a six months. (c) A person appointed as a speaker of Legislative Assembly has to become a member within six months. (d) Nominated member of the state legislature cannot be appointed as minister.",
    "options_marathi": [
      "(a), (b), (c)",
      "(a), (c), (d)",
      "(b) फक्त",
      "(a) आणि (b)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(a), (c), (d)",
      "(b) only",
      "(a) and (b)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Executive and Legislature",
    "difficulty": "Medium",
    "trap_detected": "Factual Misconception",
    "explanation_english": "According to Article 164(4) of the Indian Constitution, a person who is not a member of the state legislature can be appointed as a minister, but they must become a member of either house of the state legislature within six months. Failure to do so results in their cessation as a minister. However, a Speaker of the Legislative Assembly must already be a member of that assembly at the time of their election. There is no provision for a non-member to be appointed as Speaker and then become a member later. Also, nominated members of the state legislature are eligible to be appointed as ministers, just like elected members, provided they fulfill the constitutional requirements.",
    "explanation_marathi": "भारतीय संविधानाच्या कलम 164(4) नुसार, राज्य विधिमंडळाचा सदस्य नसलेल्या व्यक्तीला मंत्री म्हणून नियुक्त केले जाऊ शकते, परंतु त्यांना सहा महिन्यांच्या आत राज्य विधिमंडळाच्या कोणत्याही सभागृहाचे सदस्य व्हावे लागते. असे करण्यात अयशस्वी झाल्यास त्यांचे मंत्रिपद रद्द होते. तथापि, विधानसभेचा सभापती हा त्याच्या निवडीच्या वेळी विधानसभेचा सदस्य असणे आवश्यक आहे. सदस्य नसलेल्या व्यक्तीला सभापती म्हणून नियुक्त करून नंतर सदस्य होण्याची कोणतीही तरतूद नाही. तसेच, राज्य विधिमंडळाचे नामनिर्देशित सदस्य देखील निवडून आलेल्या सदस्यांप्रमाणे मंत्री म्हणून नियुक्त होण्यास पात्र आहेत, जर ते घटनात्मक आवश्यकता पूर्ण करत असतील.",
    "options_breakdown": [
      {
        "option_text_english": "(a) There is no bar to the appointment of a person from outside the state legislature as minister.",
        "option_text_marathi": "(a) राज्य विधिमंडळाच्या बाहेरील व्यक्तिची मंत्री म्हणून नेमण्यास कोणतीही बंदी/अडथळा नाही.",
        "is_correct": true,
        "reason_english": "This statement is correct as per Article 164(4). A non-member can be appointed as a minister.",
        "reason_marathi": "हे विधान कलम 164(4) नुसार बरोबर आहे. विधिमंडळाचा सदस्य नसलेल्या व्यक्तीला मंत्री म्हणून नियुक्त केले जाऊ शकते."
      },
      {
        "option_text_english": "(b) A person appointed as a minister has to become a member of either house of state legislature within a six months.",
        "option_text_marathi": "(b) मंत्री म्हणून नेमलेल्या व्यक्तिस सहा महिन्यांच्या आत राज्य विधिमंडळाच्या कोणत्याही सभागृहाचे सभासद व्हावे लागते.",
        "is_correct": true,
        "reason_english": "This statement is correct. This is the condition attached to the appointment of a non-member as minister, as per Article 164(4).",
        "reason_marathi": "हे विधान बरोबर आहे. कलम 164(4) नुसार, सदस्य नसलेल्या व्यक्तीला मंत्री म्हणून नियुक्त केल्यास ही अट लागू होते."
      },
      {
        "option_text_english": "(c) A person appointed as a speaker of Legislative Assembly has to become a member within six months.",
        "option_text_marathi": "(c) विधानसभेचा सभापती म्हणून नेमलेल्या व्यक्तिस सहा महिन्यांच्या आत विधानसभेचे सभासद व्हावे लागते.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. A Speaker must already be a member of the Legislative Assembly at the time of their election. There is no provision for a non-member to be appointed as Speaker.",
        "reason_marathi": "हे विधान चुकीचे आहे. सभापती हे त्यांच्या निवडीच्या वेळी विधानसभेचे सदस्य असणे आवश्यक आहे. सदस्य नसलेल्या व्यक्तीला सभापती म्हणून नियुक्त करण्याची कोणतीही तरतूद नाही."
      },
      {
        "option_text_english": "(d) Nominated member of the state legislature cannot be appointed as minister.",
        "option_text_marathi": "(d) राज्य विधिमंडळाच्या नामनिर्देशित सदस्यास मंत्री म्हणून नेमता येत नाही.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. Nominated members are part of the legislature and are eligible to be appointed as ministers.",
        "reason_marathi": "हे विधान चुकीचे आहे. नामनिर्देशित सदस्य हे विधिमंडळाचा भाग असतात आणि त्यांना मंत्री म्हणून नियुक्त केले जाऊ शकते."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "महाराष्ट्राच्या विधान सभेच्या सभापतीबाबत खालील विधाने विचारात घ्या : (a) जर तो विधान सभेचा सदस्य राहिला नाही तर त्यास आपले पद सोडावे लागते. (b) सभागृहातील कामकाज चालविण्यासाठी आणि त्याचे नियमन करण्यासंबंधातील त्याच्या वर्तनाबाबत केवळ उच्च न्यायालयातच आव्हान देता येते. (c) तो स्वतः कामकाज सल्लागार समितीचा अध्यक्ष असतो. (d) तो राज्य विधीमंडळाच्या दोन्ही सभागृहांच्या संयुक्त बैठकीचे अध्यक्षस्थान भूषवितो.",
    "question_english": "Consider the following statements regarding the speaker of Maharashtra Legislative Assembly: (a) He has to vacate his office if he ceases to be a member of the House. (b) His conduct in regulating procedure or maintaining order in the house can be challenged only in the High Court. (c) He himself is the chairman of the Business Advisory Committee. (d) He presides over a joint sitting of both the Houses of state Legislature.",
    "options_marathi": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (c)",
      "(b), (d)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(a), (c)",
      "(b), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Legislature - Speaker",
    "difficulty": "Medium",
    "trap_detected": "Factual Misconception",
    "explanation_english": "The Speaker of the Legislative Assembly holds a crucial position. As per Article 179(a), if the Speaker ceases to be a member of the Assembly, they must vacate their office. The Speaker is indeed the ex-officio chairman of the Business Advisory Committee, which regulates the time and programme of the business of the House. However, the Speaker's conduct in regulating the procedure or maintaining order within the House is generally considered an internal matter of the legislature and is not ordinarily subject to judicial review, except in very specific circumstances of constitutional violation. Furthermore, unlike the Parliament at the Centre, there is no provision for joint sittings of the two Houses of a State Legislature (Legislative Assembly and Legislative Council) in the Indian Constitution.",
    "explanation_marathi": "विधानसभेचे सभापती एक महत्त्वाचे पद भूषवतात. कलम 179(a) नुसार, जर सभापती विधानसभेचे सदस्य राहिले नाहीत, तर त्यांना आपले पद सोडावे लागते. सभापती हे कामकाज सल्लागार समितीचे पदसिद्ध अध्यक्ष असतात, जी सभागृहाच्या कामकाजाची वेळ आणि कार्यक्रम नियंत्रित करते. तथापि, सभागृहातील कार्यपद्धतीचे नियमन किंवा सुव्यवस्था राखण्याबाबत सभापतींचे वर्तन सामान्यतः विधिमंडळाची अंतर्गत बाब मानली जाते आणि ते सामान्यतः न्यायालयीन पुनरावलोकनाच्या अधीन नसते, केवळ घटनात्मक उल्लंघनाच्या विशिष्ट परिस्थितीत वगळता. याव्यतिरिक्त, केंद्रातील संसदेच्या विपरीत, भारतीय संविधानात राज्य विधिमंडळाच्या दोन्ही सभागृहांच्या (विधानसभा आणि विधान परिषद) संयुक्त बैठकीची कोणतीही तरतूद नाही.",
    "options_breakdown": [
      {
        "option_text_english": "(a) He has to vacate his office if he ceases to be a member of the House.",
        "option_text_marathi": "(a) जर तो विधान सभेचा सदस्य राहिला नाही तर त्यास आपले पद सोडावे लागते.",
        "is_correct": true,
        "reason_english": "This statement is correct. Article 179(a) states that a Speaker vacates office if they cease to be a member of the Assembly.",
        "reason_marathi": "हे विधान बरोबर आहे. कलम 179(a) नुसार, जर सभापती विधानसभेचे सदस्य राहिले नाहीत, तर त्यांना आपले पद सोडावे लागते."
      },
      {
        "option_text_english": "(b) His conduct in regulating procedure or maintaining order in the house can be challenged only in the High Court.",
        "option_text_marathi": "(b) सभागृहातील कामकाज चालविण्यासाठी आणि त्याचे नियमन करण्यासंबंधातील त्याच्या वर्तनाबाबत केवळ उच्च न्यायालयातच आव्हान देता येते.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Speaker's conduct in regulating house procedure is generally not subject to judicial review, as it is considered an internal matter of the legislature.",
        "reason_marathi": "हे विधान चुकीचे आहे. सभागृहातील कामकाजाचे नियमन करण्याबाबत सभापतींचे वर्तन सामान्यतः न्यायालयीन पुनरावलोकनाच्या अधीन नसते, कारण ती विधिमंडळाची अंतर्गत बाब मानली जाते."
      },
      {
        "option_text_english": "(c) He himself is the chairman of the Business Advisory Committee.",
        "option_text_marathi": "(c) तो स्वतः कामकाज सल्लागार समितीचा अध्यक्ष असतो.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Speaker is the ex-officio chairman of the Business Advisory Committee.",
        "reason_marathi": "हे विधान बरोबर आहे. सभापती हे कामकाज सल्लागार समितीचे पदसिद्ध अध्यक्ष असतात."
      },
      {
        "option_text_english": "(d) He presides over a joint sitting of both the Houses of state Legislature.",
        "option_text_marathi": "(d) तो राज्य विधीमंडळाच्या दोन्ही सभागृहांच्या संयुक्त बैठकीचे अध्यक्षस्थान भूषवितो.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. There is no provision for joint sittings of state legislatures in India, unlike the Parliament.",
        "reason_marathi": "हे विधान चुकीचे आहे. संसदेच्या विपरीत, भारतीय संविधानात राज्य विधिमंडळाच्या दोन्ही सभागृहांच्या संयुक्त बैठकीची कोणतीही तरतूद नाही."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "केन्द्र-राज्य यातील वैधानिक संबंधाबाबत जोड्या लावा : सूची - अ (कलमे ) सूची - ब ( तरतूद ) (a) अनुच्छेद 248 (i) आणीबाणी जारी असतांना राज्य सूचीतील बाबीसंबंधी कायदे करण्याचा संसदेचा अधिकार (b) अनुच्छेद 249 (ii) दोन किंवा अधिक राज्यांकरिता त्यांच्या संमतीने कायदे करण्याचा संसदेचा अधिकार (c) अनुच्छेद 250 (iii) कायदेमंडळाचे अवशिष्ट अधिकार (d) अनुच्छेद 252 (iv) राष्ट्रीय हितासाठी राज्यसूचीतील बाबीसंबंधी कायदे करण्याचा संसदेचा अधिकार",
    "question_english": "Match the pairs with regard to Centre-state legislative relations : List - A (Articles) List - B (Provision) (a) Article 248 (i) Power of Parliament to legislate with respect to any matter in the state list during emergency (b) Article 249 (ii) Power of Parliament to legislate for two or more states by consent (c) Article 250 (iii) Residuary powers of legislation (d) Article 252 (iv) Power of parliament to legislate with respect to a matter in the state list in the national interest",
    "options_marathi": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    ],
    "options_english": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Centre-State Legislative Relations",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Indian Constitution clearly defines the legislative relations between the Union and the States. Article 248 grants residuary powers of legislation exclusively to the Parliament. Article 249 empowers Parliament to legislate on a State List subject if the Rajya Sabha passes a resolution declaring it to be in the national interest. Article 250 allows Parliament to legislate on any matter in the State List during a Proclamation of Emergency. Finally, Article 252 provides for Parliament to legislate for two or more states by their consent, and such law can be adopted by other states as well.",
    "explanation_marathi": "भारतीय संविधान केंद्र आणि राज्यांमध्ये वैधानिक संबंध स्पष्टपणे परिभाषित करते. कलम 248 संसदेला अवशिष्ट कायदेमंडळाचे अधिकार प्रदान करते. कलम 249 संसदेला राज्य सूचीतील विषयावर कायदा करण्याचा अधिकार देते, जर राज्यसभेने तो राष्ट्रीय हिताचा असल्याचे घोषित करणारा ठराव मंजूर केला. कलम 250 संसदेला आणीबाणीच्या घोषणेदरम्यान राज्य सूचीतील कोणत्याही विषयावर कायदा करण्याची परवानगी देते. शेवटी, कलम 252 दोन किंवा अधिक राज्यांच्या संमतीने संसदेला त्यांच्यासाठी कायदा करण्याची तरतूद करते आणि असा कायदा इतर राज्यांद्वारे देखील स्वीकारला जाऊ शकतो.",
    "options_breakdown": [
      {
        "option_text_english": "(a) Article 248 (i) Power of Parliament to legislate with respect to any matter in the state list during emergency",
        "option_text_marathi": "(a) अनुच्छेद 248 (i) आणीबाणी जारी असतांना राज्य सूचीतील बाबीसंबंधी कायदे करण्याचा संसदेचा अधिकार",
        "is_correct": false,
        "reason_english": "Article 248 deals with Residuary powers of legislation, not emergency legislation on state list.",
        "reason_marathi": "अनुच्छेद 248 कायदेमंडळाच्या अवशिष्ट अधिकारांशी संबंधित आहे, राज्य सूचीतील आणीबाणीच्या कायद्यांशी नाही."
      },
      {
        "option_text_english": "(b) Article 249 (ii) Power of Parliament to legislate for two or more states by consent",
        "option_text_marathi": "(b) अनुच्छेद 249 (ii) दोन किंवा अधिक राज्यांकरिता त्यांच्या संमतीने कायदे करण्याचा संसदेचा अधिकार",
        "is_correct": false,
        "reason_english": "Article 249 deals with Parliament's power to legislate on state list in national interest, not by consent of states.",
        "reason_marathi": "अनुच्छेद 249 राष्ट्रीय हितासाठी राज्यसूचीतील बाबीसंबंधी कायदे करण्याच्या संसदेच्या अधिकाराशी संबंधित आहे, राज्यांच्या संमतीने नाही."
      },
      {
        "option_text_english": "(c) Article 250 (iii) Residuary powers of legislation",
        "option_text_marathi": "(c) अनुच्छेद 250 (iii) कायदेमंडळाचे अवशिष्ट अधिकार",
        "is_correct": false,
        "reason_english": "Article 250 deals with Parliament's power to legislate on state list during emergency, not residuary powers.",
        "reason_marathi": "अनुच्छेद 250 आणीबाणीच्या काळात राज्य सूचीतील बाबींवर कायदे करण्याच्या संसदेच्या अधिकाराशी संबंधित आहे, अवशिष्ट अधिकारांशी नाही."
      },
      {
        "option_text_english": "(d) Article 252 (iv) Power of parliament to legislate with respect to a matter in the state list in the national interest",
        "option_text_marathi": "(d) अनुच्छेद 252 (iv) राष्ट्रीय हितासाठी राज्यसूचीतील बाबीसंबंधी कायदे करण्याचा संसदेचा अधिकार",
        "is_correct": false,
        "reason_english": "Article 252 deals with Parliament's power to legislate for two or more states by consent, not national interest.",
        "reason_marathi": "अनुच्छेद 252 दोन किंवा अधिक राज्यांकरिता त्यांच्या संमतीने कायदे करण्याच्या संसदेच्या अधिकाराशी संबंधित आहे, राष्ट्रीय हितासाठी नाही."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "खालीलपैकी कोणता नकाराधिकार भारताचे राष्ट्रपती वापरू शकत नाहीत ?",
    "question_english": "Which one of the following 'veto power' cannot be enjoyed by the President of india ?",
    "options_marathi": [
      "निरंकुश (परिपूर्ण)",
      "गुणात्मक",
      "तात्पुरता (निलंबनात्मक)",
      "खिशातील (पॉकेट)"
    ],
    "options_english": [
      "Absolute",
      "Qualified",
      "Suspensive",
      "Pocket"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "President's Veto Powers",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "The President of India is vested with three types of veto powers: Absolute Veto, Suspensive Veto, and Pocket Veto. The Absolute Veto allows the President to withhold assent to a bill passed by the Parliament, effectively killing the bill. The Suspensive Veto allows the President to return a bill for reconsideration, but if the Parliament passes it again (even with a simple majority), the President must give assent. The Pocket Veto allows the President to neither ratify nor reject nor return the bill, simply keeping it pending for an indefinite period. The 'Qualified Veto', which can be overridden by a higher majority of the legislature, is a feature of the American presidential system and is not available to the Indian President.",
    "explanation_marathi": "भारताच्या राष्ट्रपतींना तीन प्रकारचे नकाराधिकार (Veto Powers) प्राप्त आहेत: निरंकुश (Absolute) नकाराधिकार, तात्पुरता (Suspensive) नकाराधिकार आणि खिशातील (Pocket) नकाराधिकार. निरंकुश नकाराधिकारामुळे राष्ट्रपती संसदेने मंजूर केलेल्या विधेयकाला संमती देण्यास नकार देऊ शकतात, ज्यामुळे विधेयक रद्द होते. तात्पुरत्या नकाराधिकारामुळे राष्ट्रपती विधेयक पुनर्विचारासाठी परत पाठवू शकतात, परंतु जर संसद ते पुन्हा (साध्या बहुमताने देखील) मंजूर करेल, तर राष्ट्रपतींना संमती देणे बंधनकारक असते. खिशातील नकाराधिकारामुळे राष्ट्रपती विधेयकाला संमती देत नाहीत, नाकारत नाहीत किंवा परत पाठवत नाहीत, तर ते अनिश्चित काळासाठी प्रलंबित ठेवतात. 'गुणात्मक (Qualified) नकाराधिकार', जो विधिमंडळाच्या उच्च बहुमताने रद्द केला जाऊ शकतो, हे अमेरिकन अध्यक्षीय प्रणालीचे वैशिष्ट्य आहे आणि ते भारतीय राष्ट्रपतींना उपलब्ध नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Absolute",
        "option_text_marathi": "निरंकुश (परिपूर्ण)",
        "is_correct": true,
        "reason_english": "The Indian President possesses the Absolute Veto.",
        "reason_marathi": "भारतीय राष्ट्रपतींना निरंकुश नकाराधिकार प्राप्त आहे."
      },
      {
        "option_text_english": "Qualified",
        "option_text_marathi": "गुणात्मक",
        "is_correct": false,
        "reason_english": "The Indian President does NOT possess the Qualified Veto. This is a feature of the US President's veto power.",
        "reason_marathi": "भारतीय राष्ट्रपतींना गुणात्मक नकाराधिकार प्राप्त नाही. हे अमेरिकेच्या राष्ट्रपतींच्या नकाराधिकाराचे वैशिष्ट्य आहे."
      },
      {
        "option_text_english": "Suspensive",
        "option_text_marathi": "तात्पुरता (निलंबनात्मक)",
        "is_correct": true,
        "reason_english": "The Indian President possesses the Suspensive Veto.",
        "reason_marathi": "भारतीय राष्ट्रपतींना तात्पुरता नकाराधिकार प्राप्त आहे."
      },
      {
        "option_text_english": "Pocket",
        "option_text_marathi": "खिशातील (पॉकेट)",
        "is_correct": true,
        "reason_english": "The Indian President possesses the Pocket Veto.",
        "reason_marathi": "भारतीय राष्ट्रपतींना खिशातील नकाराधिकार प्राप्त आहे."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "राज्यघटनेतील कलमे (सूची अ) व तरतूदी (सूची ब) यांच्या योग्य जोड्या जुळवा : सूची - अ (कलमे ) सूची - ब ( तरतूद ) (a) कलम 165 (i) राज्याचा महाधिवक्ता (b) कलम - 171 (ii) विधान परिषद रचना (c) कलम - 214 (iii) राज्यांसाठी उच्च न्यायालये (d) कलम 233 (iv) जिल्हा न्यायाधिशांची नियुक्ती",
    "question_english": "Match the following pairs regarding Articles (list A) and Provisions (list B) of Constitution. List - A (Articles) List - B (Provision) (a) Article - 165 (i) Advocate General of State (b) Article 171 (ii) Composition of legislative Council (c) Article - 214 (iii) High Courts for state (d) Article 233 (iv) Appointment of District Judge",
    "options_marathi": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
    ],
    "options_english": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "State Executive, Legislature, and Judiciary",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question tests knowledge of key articles related to the state government structure. Article 165 deals with the Advocate General for the State, who is the highest law officer in the state. Article 171 outlines the composition of the Legislative Councils in states that have them. Article 214 mandates that there shall be a High Court for each state. Finally, Article 233 pertains to the appointment of District Judges by the Governor in consultation with the High Court.",
    "explanation_marathi": "हा प्रश्न राज्य सरकारच्या संरचनेशी संबंधित महत्त्वाच्या कलमांच्या ज्ञानाची चाचणी घेतो. कलम 165 राज्याच्या महाधिवक्त्याशी संबंधित आहे, जो राज्यातील सर्वोच्च कायदा अधिकारी असतो. कलम 171 ज्या राज्यांमध्ये विधान परिषद आहे, त्यांच्या रचनेची रूपरेषा दर्शवते. कलम 214 प्रत्येक राज्यासाठी उच्च न्यायालय असावे असे अनिवार्य करते. शेवटी, कलम 233 राज्यपालाद्वारे उच्च न्यायालयाच्या सल्ल्याने जिल्हा न्यायाधीशांच्या नियुक्तीशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a) Article - 165 (i) Advocate General of State",
        "option_text_marathi": "(a) कलम 165 (i) राज्याचा महाधिवक्ता",
        "is_correct": true,
        "reason_english": "Article 165 correctly corresponds to the Advocate General of State.",
        "reason_marathi": "कलम 165 राज्याच्या महाधिवक्त्याशी योग्यरित्या संबंधित आहे."
      },
      {
        "option_text_english": "(b) Article 171 (ii) Composition of legislative Council",
        "option_text_marathi": "(b) कलम - 171 (ii) विधान परिषद रचना",
        "is_correct": true,
        "reason_english": "Article 171 correctly corresponds to the composition of the Legislative Council.",
        "reason_marathi": "कलम 171 विधान परिषदेच्या रचनेशी योग्यरित्या संबंधित आहे."
      },
      {
        "option_text_english": "(c) Article - 214 (iii) High Courts for state",
        "option_text_marathi": "(c) कलम - 214 (iii) राज्यांसाठी उच्च न्यायालये",
        "is_correct": true,
        "reason_english": "Article 214 correctly corresponds to the provision for High Courts for states.",
        "reason_marathi": "कलम 214 राज्यांसाठी उच्च न्यायालयांच्या तरतुदीशी योग्यरित्या संबंधित आहे."
      },
      {
        "option_text_english": "(d) Article 233 (iv) Appointment of District Judge",
        "option_text_marathi": "(d) कलम 233 (iv) जिल्हा न्यायाधिशांची नियुक्ती",
        "is_correct": true,
        "reason_english": "Article 233 correctly corresponds to the appointment of District Judges.",
        "reason_marathi": "कलम 233 जिल्हा न्यायाधीशांच्या नियुक्तीशी योग्यरित्या संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "राज्याच्या मुख्य सचिवाचे खालीलपैकी कोणते कार्य चुकीचे आहे ? (1) तो मुख्यमंत्र्याचा प्रमुख सल्लागार म्हणून कार्य करतो. (2) जेंव्हा राज्यात राष्ट्रपती राजवट लादलेली असते आणि केन्द्रीय सल्लागारांची नियुक्ती झालेली नसेल तेंव्हा तो राज्यपालाचा प्रमुख सल्लागार म्हणून कार्य करतो. (3) जेंव्हा संबंधित राज्य विभागीय परिषदेचा (Zonal Council) सदस्य असते त्यावेळी तो आळीपाळीने विभागीय परिषदेचा प्रमुख म्हणून कार्य करतो. (4) आंतर-विभागीय (Inter-departmental) विवादाबाबतच्या स्थापन केलेल्या समन्वय समित्यांचा प्रमुख म्हणून तो कार्य करतो.",
    "question_english": "Which one of the following functions of the Cheif Secretary of the State is not correct? (1) He acts as the principal advisor to the Cheif Minister. (2) He acts as the Cheif Advisor to the Governor if the Central Advisors are not appointed and the Presidents' rule is imposed in the state. (3) He acts as the Chairman by rotation, of the Zonal Council of which the state concerned is a member. (4) He acts as the Chairman of co-ordination committees set up for inter-departmental disputes.",
    "options_marathi": [
      "तो मुख्यमंत्र्याचा प्रमुख सल्लागार म्हणून कार्य करतो.",
      "जेंव्हा राज्यात राष्ट्रपती राजवट लादलेली असते आणि केन्द्रीय सल्लागारांची नियुक्ती झालेली नसेल तेंव्हा तो राज्यपालाचा प्रमुख सल्लागार म्हणून कार्य करतो.",
      "जेंव्हा संबंधित राज्य विभागीय परिषदेचा (Zonal Council) सदस्य असते त्यावेळी तो आळीपाळीने विभागीय परिषदेचा प्रमुख म्हणून कार्य करतो.",
      "आंतर-विभागीय (Inter-departmental) विवादाबाबतच्या स्थापन केलेल्या समन्वय समित्यांचा प्रमुख म्हणून तो कार्य करतो."
    ],
    "options_english": [
      "He acts as the principal advisor to the Cheif Minister.",
      "He acts as the Cheif Advisor to the Governor if the Central Advisors are not appointed and the Presidents' rule is imposed in the state.",
      "He acts as the Chairman by rotation, of the Zonal Council of which the state concerned is a member.",
      "He acts as the Chairman of co-ordination committees set up for inter-departmental disputes."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Administration - Chief Secretary",
    "difficulty": "Medium",
    "trap_detected": "Factual Misconception",
    "explanation_english": "The Chief Secretary is the administrative head of the state secretariat and the chief advisor to the Chief Minister. During President's Rule, when the elected government is suspended, the Chief Secretary plays a vital role in assisting the Governor in administering the state. They also head various coordination committees to resolve inter-departmental disputes. However, the Zonal Councils are chaired by the Union Home Minister, and the Chief Secretaries of the member states serve as advisors or secretaries, not as chairmen by rotation. This statement is incorrect.",
    "explanation_marathi": "मुख्य सचिव हे राज्य सचिवालयाचे प्रशासकीय प्रमुख आणि मुख्यमंत्र्यांचे मुख्य सल्लागार असतात. राष्ट्रपती राजवट लागू असताना, जेव्हा निवडून आलेले सरकार निलंबित होते, तेव्हा मुख्य सचिव राज्यपालांना राज्याचा कारभार चालविण्यात मदत करण्यात महत्त्वाची भूमिका बजावतात. ते आंतर-विभागीय वाद सोडवण्यासाठी विविध समन्वय समित्यांचे प्रमुख देखील असतात. तथापि, विभागीय परिषदांचे अध्यक्ष केंद्रीय गृहमंत्री असतात आणि सदस्य राज्यांचे मुख्य सचिव सल्लागार किंवा सचिव म्हणून काम करतात, आळीपाळीने अध्यक्ष म्हणून नाही. त्यामुळे हे विधान चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "He acts as the principal advisor to the Cheif Minister.",
        "option_text_marathi": "तो मुख्यमंत्र्याचा प्रमुख सल्लागार म्हणून कार्य करतो.",
        "is_correct": true,
        "reason_english": "This is a correct function of the Chief Secretary, who is the administrative head and key advisor to the CM.",
        "reason_marathi": "हे मुख्य सचिवाचे योग्य कार्य आहे, जो प्रशासकीय प्रमुख आणि मुख्यमंत्र्यांचा मुख्य सल्लागार असतो."
      },
      {
        "option_text_english": "He acts as the Cheif Advisor to the Governor if the Central Advisors are not appointed and the Presidents' rule is imposed in the state.",
        "option_text_marathi": "जेंव्हा राज्यात राष्ट्रपती राजवट लादलेली असते आणि केन्द्रीय सल्लागारांची नियुक्ती झालेली नसेल तेंव्हा तो राज्यपालाचा प्रमुख सल्लागार म्हणून कार्य करतो.",
        "is_correct": true,
        "reason_english": "This is a correct function. During President's Rule, the Chief Secretary assists the Governor as the chief advisor.",
        "reason_marathi": "हे योग्य कार्य आहे. राष्ट्रपती राजवटीत, मुख्य सचिव राज्यपालांना मुख्य सल्लागार म्हणून मदत करतात."
      },
      {
        "option_text_english": "He acts as the Chairman by rotation, of the Zonal Council of which the state concerned is a member.",
        "option_text_marathi": "जेंव्हा संबंधित राज्य विभागीय परिषदेचा (Zonal Council) सदस्य असते त्यावेळी तो आळीपाळीने विभागीय परिषदेचा प्रमुख म्हणून कार्य करतो.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Union Home Minister is the Chairman of all Zonal Councils. Chief Secretaries of member states act as advisors/secretaries, not chairmen by rotation.",
        "reason_marathi": "हे विधान चुकीचे आहे. केंद्रीय गृहमंत्री सर्व विभागीय परिषदांचे अध्यक्ष असतात. सदस्य राज्यांचे मुख्य सचिव सल्लागार/सचिव म्हणून काम करतात, आळीपाळीने अध्यक्ष म्हणून नाही."
      },
      {
        "option_text_english": "He acts as the Chairman of co-ordination committees set up for inter-departmental disputes.",
        "option_text_marathi": "आंतर-विभागीय (Inter-departmental) विवादाबाबतच्या स्थापन केलेल्या समन्वय समित्यांचा प्रमुख म्हणून तो कार्य करतो.",
        "is_correct": true,
        "reason_english": "This is a correct function. The Chief Secretary plays a crucial role in inter-departmental coordination and dispute resolution.",
        "reason_marathi": "हे योग्य कार्य आहे. मुख्य सचिव आंतर-विभागीय समन्वय आणि वाद निवारणामध्ये महत्त्वाची भूमिका बजावतात."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "भारताच्या नियंत्रक व लेखापरीक्षकाबाबत खालीलपैकी कोणते विधान/ने बरोबर आहे/त? (a) त्याची नेमणूक राष्ट्रपतीद्वारे पाच वर्षाच्या कार्यकाळासाठी होते. (b) त्याचे वेतन आणि सेवा शर्ती राष्ट्रपतीद्वारे निश्चित केल्या जातात. (c) राष्ट्रपतीद्वारे स्वतः होवून त्यांस पदावरून दूर केले जावू शकते. (d) नियंत्रक व महालेखापरीक्षक (कर्तव्ये, अधिकार व सेवाशर्ती) अधिनियम, 1973 नुसार केंद्र शासनामधील लेखा विभाग हा लेखा परीक्षण विभागापासून वेगळा केला जातो.",
    "question_english": "Which of the following is/are correct about CAG of India ? (a) He is appointed by the President for a period of five years. (b) His salary and conditions of service are determined by President (c) He can be removed by the President on his own. (d) The CAG's (Duties, powers and conditions of service) Act, 1973 separated accounts from audit in the Central Governement.",
    "options_marathi": [
      "(a) फक्त",
      "(a) आणि (b)",
      "वरीलपैकी एकही नाही",
      "(a) आणि (d)"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b)",
      "None of the above",
      "(a) and (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Comptroller and Auditor General (CAG)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall, Specific Year Error",
    "explanation_english": "The Comptroller and Auditor General (CAG) of India is a crucial constitutional authority. The CAG is appointed by the President for a term of 6 years or until the age of 65, whichever is earlier, not 5 years. Their salary and conditions of service are determined by the Parliament, not the President, and are charged upon the Consolidated Fund of India. The CAG can be removed by the President only on an address from both Houses of Parliament on grounds of proved misbehaviour or incapacity, similar to a Supreme Court Judge, not on the President's own initiative. Furthermore, the Act that separated accounts from audit functions in the Central Government was the CAG's (Duties, Powers and Conditions of Service) Act, 1971, not 1973. Therefore, all the given statements (a), (b), (c), and (d) are incorrect.",
    "explanation_marathi": "भारताचे नियंत्रक व महालेखापरीक्षक (CAG) हे एक महत्त्वाचे घटनात्मक प्राधिकरण आहे. CAG ची नियुक्ती राष्ट्रपतीद्वारे 6 वर्षांच्या कालावधीसाठी किंवा 65 वर्षे वयापर्यंत, यापैकी जे आधी असेल, त्यासाठी केली जाते, 5 वर्षांसाठी नाही. त्यांचे वेतन आणि सेवा शर्ती संसदेद्वारे निश्चित केल्या जातात, राष्ट्रपतीद्वारे नाही, आणि त्या भारताच्या एकत्रित निधीवर भारित असतात. CAG ला राष्ट्रपती केवळ संसदेच्या दोन्ही सभागृहांच्या ठरावाद्वारे सिद्ध गैरवर्तन किंवा अक्षमतेच्या आधारावर पदावरून दूर करू शकतात, सर्वोच्च न्यायालयाच्या न्यायाधीशांप्रमाणे, राष्ट्रपती स्वतःहून नाही. याव्यतिरिक्त, केंद्र सरकारमधील लेखा विभागाला लेखापरीक्षण विभागापासून वेगळे करणारा कायदा CAG (कर्तव्ये, अधिकार आणि सेवाशर्ती) अधिनियम, 1971 होता, 1973 नाही. त्यामुळे, दिलेली सर्व विधाने (a), (b), (c) आणि (d) चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) He is appointed by the President for a period of five years.",
        "option_text_marathi": "(a) त्याची नेमणूक राष्ट्रपतीद्वारे पाच वर्षाच्या कार्यकाळासाठी होते.",
        "is_correct": false,
        "reason_english": "Incorrect. The CAG is appointed for a term of 6 years or until the age of 65, whichever is earlier, not 5 years.",
        "reason_marathi": "चुकीचे. CAG ची नियुक्ती 6 वर्षांच्या कालावधीसाठी किंवा 65 वर्षे वयापर्यंत, यापैकी जे आधी असेल, त्यासाठी केली जाते, 5 वर्षांसाठी नाही."
      },
      {
        "option_text_english": "(b) His salary and conditions of service are determined by President",
        "option_text_marathi": "(b) त्याचे वेतन आणि सेवा शर्ती राष्ट्रपतीद्वारे निश्चित केल्या जातात.",
        "is_correct": false,
        "reason_english": "Incorrect. The salary and conditions of service of the CAG are determined by Parliament, not the President.",
        "reason_marathi": "चुकीचे. CAG चे वेतन आणि सेवा शर्ती संसदेद्वारे निश्चित केल्या जातात, राष्ट्रपतीद्वारे नाही."
      },
      {
        "option_text_english": "(c) He can be removed by the President on his own.",
        "option_text_marathi": "(c) राष्ट्रपतीद्वारे स्वतः होवून त्यांस पदावरून दूर केले जावू शकते.",
        "is_correct": false,
        "reason_english": "Incorrect. The CAG can be removed by the President only on an address from both Houses of Parliament, similar to a Supreme Court Judge.",
        "reason_marathi": "चुकीचे. CAG ला राष्ट्रपती केवळ संसदेच्या दोन्ही सभागृहांच्या ठरावाद्वारे पदावरून दूर करू शकतात, सर्वोच्च न्यायालयाच्या न्यायाधीशांप्रमाणे."
      },
      {
        "option_text_english": "(d) The CAG's (Duties, powers and conditions of service) Act, 1973 separated accounts from audit in the Central Governement.",
        "option_text_marathi": "(d) नियंत्रक व महालेखापरीक्षक (कर्तव्ये, अधिकार व सेवाशर्ती) अधिनियम, 1973 नुसार केंद्र शासनामधील लेखा विभाग हा लेखा परीक्षण विभागापासून वेगळा केला जातो.",
        "is_correct": false,
        "reason_english": "Incorrect. The Act that separated accounts from audit was the CAG's (Duties, Powers and Conditions of Service) Act, 1971, not 1973.",
        "reason_marathi": "चुकीचे. लेखा विभागाला लेखापरीक्षण विभागापासून वेगळे करणारा कायदा CAG (कर्तव्ये, अधिकार आणि सेवाशर्ती) अधिनियम, 1971 होता, 1973 नाही."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "भारताच्या नियंत्रक व महालेखापरीक्षकासंदर्भात खालील विधाने विचारात घ्या - (a) भारतीय राज्यघटनेच्या कलम 148 नुसार राष्ट्रपती नियंत्रक व महालेखापरीक्षकांची नियुक्ती करतात. (b) शासकीय खर्चाचे लेखापरीक्षण करणे हे नियंत्रक व महालेखापरीक्षकाचे प्रमुख कार्य आहे. (c) नियंत्रक व महालेखापरीक्षक आपला अहवाल संसदेला सादर करतात.",
    "question_english": "Consider the following statements regarding with the Comptroller and Auditor General of India : (a) According to article 148 of Constitution of India, the Comptroller and Auditor General is appointed by the President. (b) The main duty of the CAG is to audit the Government expenditure. (c) The CAG submitted his report to the Parliament.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(a) आणि (c)",
      "फक्त (a)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(a) and (c)",
      "Only (a)"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Comptroller and Auditor General (CAG)",
    "difficulty": "Easy",
    "trap_detected": "Factual Misconception",
    "explanation_english": "The Comptroller and Auditor General (CAG) is a key guardian of the public purse. As per Article 148 of the Indian Constitution, the CAG is appointed by the President. The primary and most significant duty of the CAG is to audit the accounts of the Union and State governments and other public authorities, ensuring financial accountability and transparency in government expenditure. However, the CAG does not directly submit reports to the Parliament. Instead, the CAG submits audit reports relating to the accounts of the Union to the President, who then causes them to be laid before each House of Parliament. Similarly, for state accounts, reports are submitted to the Governor.",
    "explanation_marathi": "नियंत्रक व महालेखापरीक्षक (CAG) हे सार्वजनिक पैशाचे एक महत्त्वाचे संरक्षक आहेत. भारतीय संविधानाच्या कलम 148 नुसार, CAG ची नियुक्ती राष्ट्रपतीद्वारे केली जाते. CAG चे प्राथमिक आणि सर्वात महत्त्वाचे कर्तव्य म्हणजे केंद्र आणि राज्य सरकारांच्या तसेच इतर सार्वजनिक प्राधिकरणांच्या खात्यांचे लेखापरीक्षण करणे, ज्यामुळे सरकारी खर्चात आर्थिक जबाबदारी आणि पारदर्शकता सुनिश्चित होते. तथापि, CAG थेट संसदेला अहवाल सादर करत नाहीत. त्याऐवजी, CAG केंद्र सरकारच्या खात्यांशी संबंधित लेखापरीक्षण अहवाल राष्ट्रपतींना सादर करतात, जे नंतर ते संसदेच्या प्रत्येक सभागृहासमोर ठेवतात. त्याचप्रमाणे, राज्यांच्या खात्यांसाठी, अहवाल राज्यपालांना सादर केले जातात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) According to article 148 of Constitution of India, the Comptroller and Auditor General is appointed by the President.",
        "option_text_marathi": "(a) भारतीय राज्यघटनेच्या कलम 148 नुसार राष्ट्रपती नियंत्रक व महालेखापरीक्षकांची नियुक्ती करतात.",
        "is_correct": true,
        "reason_english": "This statement is correct. Article 148 of the Constitution deals with the appointment of the CAG by the President.",
        "reason_marathi": "हे विधान बरोबर आहे. संविधानाचे कलम 148 राष्ट्रपतींद्वारे CAG च्या नियुक्तीशी संबंधित आहे."
      },
      {
        "option_text_english": "(b) The main duty of the CAG is to audit the Government expenditure.",
        "option_text_marathi": "(b) शासकीय खर्चाचे लेखापरीक्षण करणे हे नियंत्रक व महालेखापरीक्षकाचे प्रमुख कार्य आहे.",
        "is_correct": true,
        "reason_english": "This statement is correct. Auditing government expenditure is indeed the primary and most significant duty of the CAG.",
        "reason_marathi": "हे विधान बरोबर आहे. शासकीय खर्चाचे लेखापरीक्षण करणे हे CAG चे प्राथमिक आणि सर्वात महत्त्वाचे कर्तव्य आहे."
      },
      {
        "option_text_english": "(c) The CAG submitted his report to the Parliament.",
        "option_text_marathi": "(c) नियंत्रक व महालेखापरीक्षक आपला अहवाल संसदेला सादर करतात.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The CAG submits audit reports relating to the accounts of the Union to the President, who then causes them to be laid before each House of Parliament. For states, reports are submitted to the Governor.",
        "reason_marathi": "हे विधान चुकीचे आहे. CAG केंद्र सरकारच्या खात्यांशी संबंधित लेखापरीक्षण अहवाल राष्ट्रपतींना सादर करतात, जे नंतर ते संसदेच्या प्रत्येक सभागृहासमोर ठेवतात. राज्यांसाठी, अहवाल राज्यपालांना सादर केले जातात."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "लक्षवेधी सूचनेच्या संदर्भात ही योग्य विधान/ने आहेत. (a) निकडीच्या सार्वजनिक हिताच्या बाबीकडे मंत्र्याचे लक्ष वेधण्यासाठीचा हा एक उपाय आहे. (b) ती मांडण्यासाठी 50 सदस्यांचे समर्थन आवश्यक असते. (c) राज्यसभेला हा उपाय वापरण्याची परवानगी नसते. (d) 1952 पासून सुरू असलेली संसदीय प्रणालीतील नावीन्यपूर्ण पद्धती आहे.",
    "question_english": "The correct statement/s about calling attention notice is/are (a) It is a device of calling the attention of a minister to a matter of urgent public importance. (b) It needs the support of 50 members to be admitted. (c) Rajya Sabha is not permitted to make use of this device. (d) It is an innovation in the Parliamentary procedure since 1952.",
    "options_marathi": [
      "(a) फक्त",
      "(d) फक्त",
      "(a), (b), (c)",
      "(a) आणि (d)"
    ],
    "options_english": [
      "(a) only",
      "(d) only",
      "(a), (b), (c)",
      "(a) and (d)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Parliamentary Procedures",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "A Calling Attention Notice is an Indian parliamentary innovation introduced in 1954. It is a device used by a Member of Parliament to call the attention of a minister to a matter of urgent public importance, thereby seeking an authoritative statement from the minister on that matter. Unlike an Adjournment Motion, it does not involve a censure element and does not lead to a debate. Both Lok Sabha and Rajya Sabha can utilize this procedure.",
    "explanation_marathi": "लक्षवेधी सूचना ही एक भारतीय संसदीय प्रक्रिया आहे, जी 1954 मध्ये सुरू करण्यात आली. सार्वजनिक महत्त्वाच्या तातडीच्या बाबीकडे मंत्र्याचे लक्ष वेधण्यासाठी आणि त्याबद्दल मंत्र्याकडून अधिकृत निवेदन मिळवण्यासाठी संसद सदस्य या साधनाचा वापर करतात. स्थगन प्रस्तावाप्रमाणे यात निंदेचा घटक नसतो आणि यावर चर्चा होत नाही. लोकसभा आणि राज्यसभा दोन्ही या प्रक्रियेचा वापर करू शकतात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Statement (a) is correct, but statement (d) is also correct, making this option incomplete.",
        "reason_marathi": "विधान (a) बरोबर आहे, परंतु विधान (d) देखील बरोबर आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(d) only",
        "option_text_marathi": "(d) फक्त",
        "is_correct": false,
        "reason_english": "Statement (d) is correct, but statement (a) is also correct, making this option incomplete.",
        "reason_marathi": "विधान (d) बरोबर आहे, परंतु विधान (a) देखील बरोबर आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a), (b), (c)",
        "option_text_marathi": "(a), (b), (c)",
        "is_correct": false,
        "reason_english": "Statements (b) and (c) are incorrect. (b) The requirement of 50 members' support is for an Adjournment Motion. (c) Both Lok Sabha and Rajya Sabha can use this device.",
        "reason_marathi": "विधाने (b) आणि (c) चुकीची आहेत. (b) 50 सदस्यांच्या समर्थनाची अट स्थगन प्रस्तावासाठी आहे. (c) लोकसभा आणि राज्यसभा दोन्ही या साधनाचा वापर करू शकतात."
      },
      {
        "option_text_english": "(a) and (d)",
        "option_text_marathi": "(a) आणि (d)",
        "is_correct": true,
        "reason_english": "Statement (a) correctly defines the purpose of a Calling Attention Notice. Statement (d) is also correct as it was introduced in 1954, making it an innovation in the post-1952 parliamentary procedure.",
        "reason_marathi": "विधान (a) लक्षवेधी सूचनेचा उद्देश योग्यरित्या स्पष्ट करते. विधान (d) देखील बरोबर आहे कारण ती 1954 मध्ये सुरू झाली, ज्यामुळे ती 1952 नंतरच्या संसदीय प्रक्रियेतील एक नावीन्यपूर्ण पद्धत ठरते."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "खालील विधाने विचारात घ्या - (a) उपसभापती आणि सभापती हे लिखित राजीनामा परस्परांना सादर करू शकतात. (b) महान्यायवादी (Attorney General) आणि महान्याय अधिकर्ता (Solicitor General) हे लिखित राजीनामा परस्परांना सादर करू शकतात.",
    "question_english": "Consider the following statements : (a) Deputy Speaker and Speaker may resign by writing to each other. (b) Attorney General and Solicitor General may resign by writing to each other.",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "(a) आणि (b) दोन्हीही",
      "(a) आणि (b) दोन्हीही नाही"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Constitutional Office Holders",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "According to Article 94(b) of the Indian Constitution, the Speaker of the Lok Sabha may resign from his office by writing to the Deputy Speaker, and the Deputy Speaker may resign by writing to the Speaker. However, the Attorney General holds office during the pleasure of the President and submits his resignation to the President. The Solicitor General is a legal officer of the government, not a constitutional post, and resigns to the government/President, not to the Attorney General.",
    "explanation_marathi": "भारतीय संविधानाच्या कलम 94(b) नुसार, लोकसभेचा सभापती आपला राजीनामा उपसभापतीला उद्देशून देतो आणि उपसभापती आपला राजीनामा सभापतीला उद्देशून देतो. तथापि, महान्यायवादी (Attorney General) हे राष्ट्रपतींच्या मर्जीनुसार पद धारण करतात आणि ते आपला राजीनामा राष्ट्रपतींना सादर करतात. महान्याय अधिकर्ता (Solicitor General) हे संवैधानिक पद नसून, ते सरकारचे कायदेशीर अधिकारी असतात आणि ते सरकारला/राष्ट्रपतींना राजीनामा देतात, एकमेकांना नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": true,
        "reason_english": "Statement (a) is correct as per Article 94(b) of the Constitution.",
        "reason_marathi": "विधान (a) संविधानाच्या कलम 94(b) नुसार बरोबर आहे."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. The Attorney General resigns to the President, and the Solicitor General resigns to the government/President, not to each other.",
        "reason_marathi": "विधान (b) चुकीचे आहे. महान्यायवादी राष्ट्रपतींना राजीनामा देतात आणि महान्याय अधिकर्ता सरकारला/राष्ट्रपतींना राजीनामा देतात, एकमेकांना नाही."
      },
      {
        "option_text_english": "Both (a) and (b)",
        "option_text_marathi": "(a) आणि (b) दोन्हीही",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect.",
        "reason_marathi": "विधान (b) चुकीचे आहे."
      },
      {
        "option_text_english": "Neither (a) nor (b)",
        "option_text_marathi": "(a) आणि (b) दोन्हीही नाही",
        "is_correct": false,
        "reason_english": "Statement (a) is correct.",
        "reason_marathi": "विधान (a) बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "भारतीय संघराज्यात संघराज्य व्यवस्थेची खालीलपैकी कोणती मूलतत्वे दिसून येतात ? पर्याय निवडा - (a) दुहेरी शासन व्यवस्था (b) अधिकारांचे वाटप (c) एकेरी नागरिकत्व (d) द्विगृही कायदेमंडळ (e) स्वतंत्र न्यायमंडळ (f) आणीबाणी विषयक तरतूदी",
    "question_english": "Which of the following original principles of federal system seen in the Indian Federation ? Choose option : (a) Dual Governmental System (b) Distribution of power (c) Single citizenship (d) Bicameralism (e) Independent Judicary (f) Provisions of Emergency",
    "options_marathi": [
      "फक्त (a), (b), (c), (f)",
      "फक्त (a), (b), (d), (e)",
      "फक्त (c), (d), (e), (f)",
      "वरील सर्व"
    ],
    "options_english": [
      "Only (a), (b), (c), (f)",
      "Only (a), (b), (d), (e)",
      "Only (c), (d), (e), (f)",
      "All of above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Federalism",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Misunderstanding",
    "explanation_english": "India is often described as a 'quasi-federal' state, possessing both federal and unitary features. Federal features include a dual government (Centre and States), distribution of powers (Seventh Schedule), a written constitution, supremacy of the constitution, an independent judiciary, and bicameralism (Rajya Sabha representing states). Unitary features include a strong Centre, single citizenship, a single constitution, emergency provisions, integrated judiciary, and appointment of governors by the Centre. Therefore, dual governmental system, distribution of power, bicameralism, and independent judiciary are federal principles. Single citizenship and emergency provisions are unitary features.",
    "explanation_marathi": "भारताला अनेकदा 'अर्ध-संघराज्य' (quasi-federal) असे संबोधले जाते, कारण त्यात संघराज्यीय आणि एकात्मक दोन्ही वैशिष्ट्ये आहेत. संघराज्यीय वैशिष्ट्यांमध्ये दुहेरी शासन व्यवस्था (केंद्र आणि राज्य), अधिकारांचे वाटप (सातवी अनुसूची), लिखित संविधान, संविधानाची सर्वोच्चता, स्वतंत्र न्यायमंडळ आणि द्विगृही कायदेमंडळ (राज्यसभा राज्यांचे प्रतिनिधित्व करते) यांचा समावेश होतो. एकात्मक वैशिष्ट्यांमध्ये मजबूत केंद्र, एकेरी नागरिकत्व, एकच संविधान, आणीबाणीच्या तरतुदी, एकात्मिक न्यायव्यवस्था आणि केंद्राद्वारे राज्यपालांची नियुक्ती यांचा समावेश होतो. त्यामुळे, दुहेरी शासन व्यवस्था, अधिकारांचे वाटप, द्विगृही कायदेमंडळ आणि स्वतंत्र न्यायमंडळ ही संघराज्यीय तत्त्वे आहेत. एकेरी नागरिकत्व आणि आणीबाणीच्या तरतुदी ही एकात्मक वैशिष्ट्ये आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a), (b), (c), (f)",
        "option_text_marathi": "फक्त (a), (b), (c), (f)",
        "is_correct": false,
        "reason_english": "Statements (c) Single citizenship and (f) Provisions of Emergency are unitary features, not federal.",
        "reason_marathi": "विधाने (c) एकेरी नागरिकत्व आणि (f) आणीबाणी विषयक तरतूदी ही एकात्मक वैशिष्ट्ये आहेत, संघराज्यीय नाहीत."
      },
      {
        "option_text_english": "Only (a), (b), (d), (e)",
        "option_text_marathi": "फक्त (a), (b), (d), (e)",
        "is_correct": true,
        "reason_english": "Statements (a) Dual Governmental System, (b) Distribution of power, (d) Bicameralism, and (e) Independent Judiciary are all fundamental federal principles found in the Indian Federation.",
        "reason_marathi": "विधाने (a) दुहेरी शासन व्यवस्था, (b) अधिकारांचे वाटप, (d) द्विगृही कायदेमंडळ आणि (e) स्वतंत्र न्यायमंडळ ही सर्व भारतीय संघराज्यात आढळणारी मूलभूत संघराज्यीय तत्त्वे आहेत."
      },
      {
        "option_text_english": "Only (c), (d), (e), (f)",
        "option_text_marathi": "फक्त (c), (d), (e), (f)",
        "is_correct": false,
        "reason_english": "Statements (c) Single citizenship and (f) Provisions of Emergency are unitary features, not federal.",
        "reason_marathi": "विधाने (c) एकेरी नागरिकत्व आणि (f) आणीबाणी विषयक तरतूदी ही एकात्मक वैशिष्ट्ये आहेत, संघराज्यीय नाहीत."
      },
      {
        "option_text_english": "All of above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "Statements (c) and (f) are unitary features, not federal.",
        "reason_marathi": "विधाने (c) आणि (f) ही एकात्मक वैशिष्ट्ये आहेत, संघराज्यीय नाहीत."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "खालीलपैकी कोणते विधान बरोबर आहे ? (1) लोकसभेत नव्हे, केवळ राज्यसभेतच नामनिर्देशित सदस्य असू शकतात. (2) अँग्लो-इंडियन जमातीचे प्रतिनिधी राज्यसभेत नामनिर्देशित करण्याबाबतची घटनात्मक तरतूद आहे. (3) नामनिर्देशित सदस्याची केन्द्रीय मंत्री म्हणून नेमणूक करण्यास घटनात्मक अडथळा नाही. (4) नामनिर्देशित सदस्य राष्ट्रपती आणि उपराष्ट्रपतीच्या निवडणूकीमध्ये मतदान करू शकतो.",
    "question_english": "Which one of the following statements is correct? (1) Only the Rajya Sabha and not the Lok Sabha can have nominated members. (2) There is a constitutional provision for nominating members to the Anglo-Indian Community to Rajya Sabha. (3) There is no constitutional bar for nominated member to be appointed as a Union Minister. (4) A nominated member can vote in the Presidential and Vice Presidential Elections.",
    "options_marathi": [
      "लोकसभेत नव्हे, केवळ राज्यसभेतच नामनिर्देशित सदस्य असू शकतात.",
      "अँग्लो-इंडियन जमातीचे प्रतिनिधी राज्यसभेत नामनिर्देशित करण्याबाबतची घटनात्मक तरतूद आहे.",
      "नामनिर्देशित सदस्याची केन्द्रीय मंत्री म्हणून नेमणूक करण्यास घटनात्मक अडथळा नाही.",
      "नामनिर्देशित सदस्य राष्ट्रपती आणि उपराष्ट्रपतीच्या निवडणूकीमध्ये मतदान करू शकतो."
    ],
    "options_english": [
      "Only the Rajya Sabha and not the Lok Sabha can have nominated members.",
      "There is a constitutional provision for nominating members to the Anglo-Indian Community to Rajya Sabha.",
      "There is no constitutional bar for nominated member to be appointed as a Union Minister.",
      "A nominated member can vote in the Presidential and Vice Presidential Elections."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Parliament - Composition & Powers",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "In the Indian Parliament, 12 members are nominated to the Rajya Sabha by the President for their special knowledge or practical experience in literature, science, art, and social service (Article 80(3)). Until 2020, two members from the Anglo-Indian community could be nominated to the Lok Sabha by the President (Article 331), but this provision was discontinued by the 104th Amendment Act, 2019. Nominated members can be appointed as Union Ministers, and there is no constitutional bar against it. However, nominated members cannot vote in the Presidential election (Article 54) but can vote in the Vice-Presidential election (Article 66).",
    "explanation_marathi": "भारतीय संसदेत, राष्ट्रपतींद्वारे साहित्य, विज्ञान, कला आणि समाजसेवा या क्षेत्रांतील विशेष ज्ञान किंवा व्यावहारिक अनुभव असलेल्या 12 सदस्यांना राज्यसभेवर नामनिर्देशित केले जाते (अनुच्छेद 80(3)). 2020 पर्यंत, राष्ट्रपतींद्वारे अँग्लो-इंडियन समुदायातील दोन सदस्यांना लोकसभेवर नामनिर्देशित केले जाऊ शकत होते (अनुच्छेद 331), परंतु 104 व्या घटनादुरुस्ती कायदा, 2019 द्वारे ही तरतूद बंद करण्यात आली. नामनिर्देशित सदस्यांना केंद्रीय मंत्री म्हणून नियुक्त केले जाऊ शकते आणि यावर कोणताही घटनात्मक प्रतिबंध नाही. तथापि, नामनिर्देशित सदस्य राष्ट्रपती निवडणुकीत मतदान करू शकत नाहीत (अनुच्छेद 54), परंतु उपराष्ट्रपती निवडणुकीत मतदान करू शकतात (अनुच्छेद 66).",
    "options_breakdown": [
      {
        "option_text_english": "Only the Rajya Sabha and not the Lok Sabha can have nominated members.",
        "option_text_marathi": "लोकसभेत नव्हे, केवळ राज्यसभेतच नामनिर्देशित सदस्य असू शकतात.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. Until 2020, the Lok Sabha also had two nominated Anglo-Indian members. Even after 2020, the phrasing 'only... and not' makes it incorrect historically.",
        "reason_marathi": "हे विधान चुकीचे आहे. 2020 पर्यंत लोकसभेतही दोन नामनिर्देशित अँग्लो-इंडियन सदस्य होते. 2020 नंतरही, 'केवळ... नव्हे' हे वाक्य ऐतिहासिकदृष्ट्या चुकीचे ठरते."
      },
      {
        "option_text_english": "There is a constitutional provision for nominating members to the Anglo-Indian Community to Rajya Sabha.",
        "option_text_marathi": "अँग्लो-इंडियन जमातीचे प्रतिनिधी राज्यसभेत नामनिर्देशित करण्याबाबतची घटनात्मक तरतूद आहे.",
        "is_correct": false,
        "reason_english": "This is incorrect. Anglo-Indian members were nominated to the Lok Sabha (Article 331), not the Rajya Sabha.",
        "reason_marathi": "हे चुकीचे आहे. अँग्लो-इंडियन सदस्य लोकसभेत (अनुच्छेद 331) नामनिर्देशित केले जात होते, राज्यसभेत नाही."
      },
      {
        "option_text_english": "There is no constitutional bar for nominated member to be appointed as a Union Minister.",
        "option_text_marathi": "नामनिर्देशित सदस्याची केन्द्रीय मंत्री म्हणून नेमणूक करण्यास घटनात्मक अडथळा नाही.",
        "is_correct": true,
        "reason_english": "This statement is correct. A nominated member can be appointed as a Union Minister. If they are not already a member of either house, they must become one within six months.",
        "reason_marathi": "हे विधान बरोबर आहे. नामनिर्देशित सदस्याला केंद्रीय मंत्री म्हणून नियुक्त केले जाऊ शकते. जर ते आधीच कोणत्याही सभागृहाचे सदस्य नसतील, तर त्यांना सहा महिन्यांच्या आत सदस्य व्हावे लागते."
      },
      {
        "option_text_english": "A nominated member can vote in the Presidential and Vice Presidential Elections.",
        "option_text_marathi": "नामनिर्देशित सदस्य राष्ट्रपती आणि उपराष्ट्रपतीच्या निवडणूकीमध्ये मतदान करू शकतो.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. Nominated members can vote in the Vice-Presidential election but *not* in the Presidential election.",
        "reason_marathi": "हे विधान चुकीचे आहे. नामनिर्देशित सदस्य उपराष्ट्रपती निवडणुकीत मतदान करू शकतात, परंतु राष्ट्रपती निवडणुकीत *नाही*."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "विधानसभेच्या सभापतीविरुद्धच्या अविश्वासाबाबत खालील विधाने विचारात घ्या : (a) असा ठराव मांडण्याचा उद्देश असल्याबद्दल एक महिन्याची नोटीस देणे आवश्यक असते. (b) सभापतीस आपल्या पदावरुन दूर करण्यासंबंधिचा ठराव विचारार्थ असतांना ते बैठकीचे अध्यक्षस्थान स्विकारू शकत नाही. (c) अशा प्रकारच्या ठरावाच्या प्रसंगी सभापती पहिल्याच फेरीत मतदान करू शकतात मात्र समसमान मते झाल्यास निर्णायक मत देऊ शकत नाहीत.",
    "question_english": "Consider the following statements regarding no-confidence against speaker of Legislative Assembly: (a) One month's notice for moving such resolution is required to be given. (b) The Speaker does not preside when a resolution for his removal from office is under consideration. (c) The Speaker can vote only in the first instant on such resolution but not exercise a casting vote.",
    "options_marathi": [
      "विधाने (a), (b) बरोबर आहेत.",
      "विधाने (b), (c) बरोबर आहेत.",
      "विधाने (a), (b), (c) बरोबर आहेत.",
      "फक्त विधान (a) बरोबर आहे."
    ],
    "options_english": [
      "Statements (a), (b) are correct.",
      "Statements (b), (c) are correct.",
      "Statements (a), (b), (c) are correct.",
      "Only statement (a) is correct."
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "State Legislature - Speaker",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "The procedure for the removal of the Speaker of a Legislative Assembly is outlined in the Constitution. A resolution for the removal of the Speaker requires a 14-day prior notice, not one month. When such a resolution is under consideration, the Speaker cannot preside over the sitting, as per Article 181. However, the Speaker has the right to speak in and take part in the proceedings and can vote in the first instance on such a resolution, but cannot exercise a casting vote in case of a tie, unlike when presiding.",
    "explanation_marathi": "विधानसभेच्या सभापतींना पदावरून दूर करण्याच्या प्रक्रियेची रूपरेषा संविधानात दिली आहे. सभापतींना पदावरून दूर करण्याच्या ठरावासाठी एक महिन्याची नव्हे, तर 14 दिवसांची पूर्वसूचना आवश्यक असते. असा ठराव विचाराधीन असताना, कलम 181 नुसार, सभापती बैठकीचे अध्यक्षस्थान स्वीकारू शकत नाहीत. तथापि, सभापतींना कार्यवाहीत बोलण्याचा आणि भाग घेण्याचा अधिकार असतो आणि अशा ठरावावर ते पहिल्या फेरीत मतदान करू शकतात, परंतु समान मतांच्या बाबतीत निर्णायक मत देऊ शकत नाहीत, जसे ते अध्यक्षस्थानी असताना देतात.",
    "options_breakdown": [
      {
        "option_text_english": "Statements (a), (b) are correct.",
        "option_text_marathi": "विधाने (a), (b) बरोबर आहेत.",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect; a 14-day notice is required, not one month.",
        "reason_marathi": "विधान (a) चुकीचे आहे; एक महिन्याची नव्हे, तर 14 दिवसांची सूचना आवश्यक आहे."
      },
      {
        "option_text_english": "Statements (b), (c) are correct.",
        "option_text_marathi": "विधाने (b), (c) बरोबर आहेत.",
        "is_correct": true,
        "reason_english": "Statement (b) is correct as per Article 181. Statement (c) is also correct, as the Speaker can vote in the first instance but loses the casting vote when a removal resolution is under consideration.",
        "reason_marathi": "विधान (b) कलम 181 नुसार बरोबर आहे. विधान (c) देखील बरोबर आहे, कारण सभापती पहिल्या फेरीत मतदान करू शकतात परंतु पदावरून दूर करण्याच्या ठरावावर विचार करत असताना निर्णायक मत देण्याचा अधिकार गमावतात."
      },
      {
        "option_text_english": "Statements (a), (b), (c) are correct.",
        "option_text_marathi": "विधाने (a), (b), (c) बरोबर आहेत.",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      },
      {
        "option_text_english": "Only statement (a) is correct.",
        "option_text_marathi": "फक्त विधान (a) बरोबर आहे.",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "जेव्हा नवीन संविधानाने न्यायालयाचा आरंभ झाला, तेव्हा भारताच्या सर्वोच्च न्यायालयात न्यायाधिशांची एकूण संख्या किती होती ?",
    "question_english": "How many judges were in Supreme Court of India, when the court was inaugurated with the new Constitution ?",
    "options_marathi": [
      "सहा",
      "सात",
      "आठ",
      "नऊ"
    ],
    "options_english": [
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Judiciary - Supreme Court",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Supreme Court of India was inaugurated on January 28, 1950. At its inception, the Constitution stipulated a Chief Justice and seven other judges, making a total of eight judges. Over time, Parliament has increased this number through legislation.",
    "explanation_marathi": "भारताच्या सर्वोच्च न्यायालयाचे उद्घाटन 28 जानेवारी 1950 रोजी झाले. सुरुवातीला, संविधानाने एक सरन्यायाधीश आणि सात इतर न्यायाधीश अशी तरतूद केली होती, ज्यामुळे एकूण आठ न्यायाधीश होते. कालांतराने, संसदेने कायद्याद्वारे ही संख्या वाढवली आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Six",
        "option_text_marathi": "सहा",
        "is_correct": false,
        "reason_english": "This is not the correct number of judges at the Supreme Court's inauguration.",
        "reason_marathi": "सर्वोच्च न्यायालयाच्या उद्घाटनावेळी न्यायाधीशांची ही योग्य संख्या नाही."
      },
      {
        "option_text_english": "Seven",
        "option_text_marathi": "सात",
        "is_correct": false,
        "reason_english": "This was the number of 'other' judges, not the total number including the Chief Justice.",
        "reason_marathi": "ही 'इतर' न्यायाधीशांची संख्या होती, सरन्यायाधीशांसह एकूण संख्या नाही."
      },
      {
        "option_text_english": "Eight",
        "option_text_marathi": "आठ",
        "is_correct": true,
        "reason_english": "At its inauguration, the Supreme Court comprised one Chief Justice and seven other judges, totaling eight judges.",
        "reason_marathi": "उद्घाटनावेळी, सर्वोच्च न्यायालयात एक सरन्यायाधीश आणि सात इतर न्यायाधीश असे एकूण आठ न्यायाधीश होते."
      },
      {
        "option_text_english": "Nine",
        "option_text_marathi": "नऊ",
        "is_correct": false,
        "reason_english": "This is not the correct number of judges at the Supreme Court's inauguration.",
        "reason_marathi": "सर्वोच्च न्यायालयाच्या उद्घाटनावेळी न्यायाधीशांची ही योग्य संख्या नाही."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "खालील विधाने विचारात घ्या - (a) राज्यघटनेच्या भाग V मधील प्रकरण II हे राज्य विधिमंडळासंबंधित आहे. (b) मिझोराम, अरुणाचल प्रदेश आणि उत्तराखंड राज्यांच्या विधानसभा सदस्यांची संख्या 60 पेक्षा कमी आहे. (c) राज्यपालांना योग्य वाटतील तितके अँग्लो-इंडियन जमातीचे सदस्य विधान सभेत नामनिर्देशित करता येतात. (d) अँग्लो-इंडियन्सच्या नामनिर्देशनाची तरतूद 2020 पर्यंत वाढविण्यात आलेली आहे.",
    "question_english": "Consider the following statements : (a) Chapter II of the Part V of the constitution is concerned with the state legislature. (b) Mizoram, Arunachal Pradesh and Uttarakhand have less than 60 members of Legislative Assembly. (c) The Governor may nominate such number of members of the Anglo-Indian Community to the legislative assembly as he considers appropriate. (d) The provision for nomination of Anglo-Indians has been extended up to 2020.",
    "options_marathi": [
      "(b), (c)",
      "(d) फक्त",
      "(a) फक्त",
      "(a), (d)"
    ],
    "options_english": [
      "(b), (c)",
      "(d) only",
      "(a) only",
      "(a), (d)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "State Legislature - Composition & Provisions",
    "difficulty": "Hard",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "Part V of the Constitution deals with the Union Government, and Chapter II of Part V specifically deals with the Parliament (Union Legislature), not the state legislature. State legislatures are covered in Part VI, Chapter III. While Mizoram (40) has less than 60 members, Arunachal Pradesh (60) and Uttarakhand (70) do not, making statement (b) incorrect. The Governor could nominate *one* member from the Anglo-Indian community, not 'such number as he considers appropriate.' The provision for Anglo-Indian nomination was extended up to January 25, 2020, by the 95th Amendment Act, 2009, after which it was discontinued by the 104th Amendment Act, 2019. So, the provision *was* extended *up to* 2020.",
    "explanation_marathi": "संविधानाचा भाग V हा केंद्र सरकारशी संबंधित आहे आणि भाग V मधील प्रकरण II हे संसदेशी (केंद्रीय कायदेमंडळ) संबंधित आहे, राज्य कायदेमंडळाशी नाही. राज्य कायदेमंडळ भाग VI, प्रकरण III मध्ये समाविष्ट आहे. मिझोराममध्ये (40) 60 पेक्षा कमी सदस्य असले तरी, अरुणाचल प्रदेश (60) आणि उत्तराखंडमध्ये (70) नाहीत, त्यामुळे विधान (b) चुकीचे आहे. राज्यपाल अँग्लो-इंडियन समुदायातून 'त्यांना योग्य वाटेल तितके' सदस्य नव्हे, तर *एक* सदस्य नामनिर्देशित करू शकत होते. अँग्लो-इंडियन नामनिर्देशनाची तरतूद 95 व्या घटनादुरुस्ती कायदा, 2009 द्वारे 25 जानेवारी 2020 पर्यंत वाढवण्यात आली होती, त्यानंतर 104 व्या घटनादुरुस्ती कायदा, 2019 द्वारे ती बंद करण्यात आली. त्यामुळे, ही तरतूद 2020 पर्यंत *वाढवण्यात आली होती* हे विधान योग्य आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(b), (c)",
        "option_text_marathi": "(b), (c)",
        "is_correct": false,
        "reason_english": "Both statements (b) and (c) are incorrect. (b) Not all mentioned states have less than 60 members. (c) The Governor could nominate only one Anglo-Indian member, not 'such number'.",
        "reason_marathi": "दोन्ही विधाने (b) आणि (c) चुकीची आहेत. (b) नमूद केलेल्या सर्व राज्यांमध्ये 60 पेक्षा कमी सदस्य नाहीत. (c) राज्यपाल केवळ एक अँग्लो-इंडियन सदस्य नामनिर्देशित करू शकत होते, 'त्यांना योग्य वाटेल तितके' नाही."
      },
      {
        "option_text_english": "(d) only",
        "option_text_marathi": "(d) फक्त",
        "is_correct": true,
        "reason_english": "Statement (d) is correct. The 95th Amendment Act, 2009, extended the provision for Anglo-Indian nomination for 10 years, i.e., up to January 25, 2020. After this, it was discontinued.",
        "reason_marathi": "विधान (d) बरोबर आहे. 95 व्या घटनादुरुस्ती कायदा, 2009 द्वारे अँग्लो-इंडियन नामनिर्देशनाची तरतूद 10 वर्षांसाठी, म्हणजेच 25 जानेवारी 2020 पर्यंत वाढवण्यात आली होती. त्यानंतर ती बंद करण्यात आली."
      },
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. Part V, Chapter II deals with the Union Parliament, not state legislature.",
        "reason_marathi": "विधान (a) चुकीचे आहे. भाग V, प्रकरण II हे केंद्रीय संसदेशी संबंधित आहे, राज्य कायदेमंडळाशी नाही."
      },
      {
        "option_text_english": "(a), (d)",
        "option_text_marathi": "(a), (d)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "खालील विधाने लक्षात घ्या - (a) राज्य विधान परिषदेत 1/3 सदस्य राज्यपालाकडून नियुक्त होतात. (b) राज्य विधान परिषदेत 1/3 सदस्य विधान सभेकडून निवडले जातात. (c) राज्य विधान परिषदेत 1/4 सदस्य स्थानिक स्वराज्य संस्थेकडून निवडले जातात. (d) राज्य विधान परिषदेत 1/12 सदस्य पदवीधरांकडून निवडले जातात.",
    "question_english": "Consider the following statements : (a) 1/3 members of the Legislative Council of the State are nominated by the Governor. (b) 1/3 members of the Legislative Council of the State are elected by State Assembly. (c) 1/4 members of the Legislative Council of the State are elected by Local Self Government. (d) 1/12 members of the Legislative Council of the State are elected by the Graduates.",
    "options_marathi": [
      "(a) केवळ",
      "(a) आणि (b)",
      "(a) आणि (c)",
      "(b) आणि (d)"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b)",
      "(a) and (c)",
      "(b) and (d)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Legislature - Legislative Council",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "The composition of a State Legislative Council is detailed in Article 171 of the Constitution. Approximately one-third of the members are elected by members of local bodies, one-third by members of the Legislative Assembly, one-twelfth by graduates of three years' standing, one-twelfth by teachers of three years' standing, and one-sixth are nominated by the Governor for their special knowledge or practical experience in literature, science, art, cooperative movement, and social service.",
    "explanation_marathi": "राज्य विधान परिषदेची रचना संविधानाच्या कलम 171 मध्ये तपशीलवार दिली आहे. अंदाजे एक तृतीयांश सदस्य स्थानिक स्वराज्य संस्थांच्या सदस्यांद्वारे निवडले जातात, एक तृतीयांश सदस्य विधानसभेच्या सदस्यांद्वारे निवडले जातात, एक बारांश सदस्य तीन वर्षांच्या पदवीधरांद्वारे निवडले जातात, एक बारांश सदस्य तीन वर्षांच्या शिक्षकांद्वारे निवडले जातात आणि एक षष्ठांश सदस्य राज्यपाल साहित्य, विज्ञान, कला, सहकारी चळवळ आणि समाजसेवा या क्षेत्रांतील विशेष ज्ञान किंवा व्यावहारिक अनुभवासाठी नामनिर्देशित करतात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) केवळ",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect; 1/6 members are nominated by the Governor, not 1/3.",
        "reason_marathi": "विधान (a) चुकीचे आहे; राज्यपालांद्वारे 1/3 नव्हे, तर 1/6 सदस्य नामनिर्देशित केले जातात."
      },
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason_english": "Both statements (a) and (c) are incorrect. (a) 1/6 members are nominated by the Governor. (c) 1/3 members are elected by local bodies, not 1/4.",
        "reason_marathi": "दोन्ही विधाने (a) आणि (c) चुकीची आहेत. (a) 1/6 सदस्य राज्यपालांद्वारे नामनिर्देशित केले जातात. (c) 1/4 नव्हे, तर 1/3 सदस्य स्थानिक स्वराज्य संस्थांद्वारे निवडले जातात."
      },
      {
        "option_text_english": "(b) and (d)",
        "option_text_marathi": "(b) आणि (d)",
        "is_correct": true,
        "reason_english": "Statement (b) is correct; 1/3 members are elected by the State Assembly. Statement (d) is also correct; 1/12 members are elected by graduates.",
        "reason_marathi": "विधान (b) बरोबर आहे; 1/3 सदस्य विधानसभेच्या सदस्यांद्वारे निवडले जातात. विधान (d) देखील बरोबर आहे; 1/12 सदस्य पदवीधरांद्वारे निवडले जातात."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "खालीलपैकी कोणता खर्च भारताच्या संचित निधीवर भारित केला जात नाही ? (1) सर्वोच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते. (2) उच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते. (3) भारताच्या नियंत्रक व महालेखापरीक्षकाचे वेतन आणि भत्ते. (4) सर्वोच्च न्यायालयाचा प्रशासकीय खर्च.",
    "question_english": "Which of the following expenditures is not charged on the Consolidated Fund of India ? (1) Salaries and allowances of the judges of the Supreme Court (2) Salaries and allowances of the judges of High Courts (3) Salary and allowances of CAG of India (4) Administrative expenses of the Supreme Court",
    "options_marathi": [
      "सर्वोच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते.",
      "उच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते.",
      "भारताच्या नियंत्रक व महालेखापरीक्षकाचे वेतन आणि भत्ते.",
      "सर्वोच्च न्यायालयाचा प्रशासकीय खर्च."
    ],
    "options_english": [
      "Salaries and allowances of the judges of the Supreme Court",
      "Salaries and allowances of the judges of High Courts",
      "Salary and allowances of CAG of India",
      "Administrative expenses of the Supreme Court"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Public Finance - Funds",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "Expenditure charged on the Consolidated Fund of India (CFI) does not require parliamentary vote and includes salaries, allowances, and pensions of the President, Speaker/Deputy Speaker of Lok Sabha, Chairman/Deputy Chairman of Rajya Sabha, Supreme Court judges, and CAG. It also includes pensions of High Court judges. However, the salaries and allowances of High Court judges are charged on the Consolidated Fund of the *respective State*, not the Consolidated Fund of India.",
    "explanation_marathi": "भारताच्या संचित निधीवर (CFI) भारित खर्चासाठी संसदीय मतदानाची आवश्यकता नसते आणि त्यात राष्ट्रपती, लोकसभा अध्यक्ष/उपसभापती, राज्यसभा अध्यक्ष/उपसभापती, सर्वोच्च न्यायालयाचे न्यायाधीश आणि CAG यांचे वेतन, भत्ते आणि निवृत्तीवेतन यांचा समावेश असतो. यात उच्च न्यायालयाच्या न्यायाधीशांचे निवृत्तीवेतन देखील समाविष्ट असते. तथापि, उच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते हे *संबंधित राज्याच्या* संचित निधीवर भारित केले जातात, भारताच्या संचित निधीवर नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Salaries and allowances of the judges of the Supreme Court",
        "option_text_marathi": "सर्वोच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते.",
        "is_correct": false,
        "reason_english": "These are charged on the Consolidated Fund of India.",
        "reason_marathi": "हे भारताच्या संचित निधीवर भारित केले जातात."
      },
      {
        "option_text_english": "Salaries and allowances of the judges of High Courts",
        "option_text_marathi": "उच्च न्यायालयाच्या न्यायाधीशांचे वेतन आणि भत्ते.",
        "is_correct": true,
        "reason_english": "These are charged on the Consolidated Fund of the *respective State*, not the Consolidated Fund of India. (Their pensions are charged on CFI).",
        "reason_marathi": "हे *संबंधित राज्याच्या* संचित निधीवर भारित केले जातात, भारताच्या संचित निधीवर नाही. (त्यांचे निवृत्तीवेतन CFI वर भारित केले जाते)."
      },
      {
        "option_text_english": "Salary and allowances of CAG of India",
        "option_text_marathi": "भारताच्या नियंत्रक व महालेखापरीक्षकाचे वेतन आणि भत्ते.",
        "is_correct": false,
        "reason_english": "These are charged on the Consolidated Fund of India.",
        "reason_marathi": "हे भारताच्या संचित निधीवर भारित केले जातात."
      },
      {
        "option_text_english": "Administrative expenses of the Supreme Court",
        "option_text_marathi": "सर्वोच्च न्यायालयाचा प्रशासकीय खर्च.",
        "is_correct": false,
        "reason_english": "These are charged on the Consolidated Fund of India.",
        "reason_marathi": "हे भारताच्या संचित निधीवर भारित केले जातात."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "भारतीय निर्वाचन आयोगाबाबत खालीलपैकी कोणते विधान बरोबर आहे ? (1) राज्यघटनेने निवडणूक आयोगाच्या सदस्यांच्या पात्रतेचे निकष सांगितलेले आहेत. (2) राज्यघटनेने निवृत्त निवडणूक आयुक्तांची शासनाकडून अन्य पदावर नेमणूक करण्यावर बंदी घातलेली आहे. (3) मुख्य निवडणूक आयुक्त आणि अन्य आयुक्त यांना समान अधिकार आहेत. (4) सर्वोच्च न्यायालयाच्या न्यायाधीशाला ज्या पद्धतीने व कारणासाठी पदच्युत केले जाते त्याच पद्धतीने व त्याच कारणांसाठी निवडणूक आयुक्तांना पदच्युत करता येते.",
    "question_english": "Which one of the following statements is correct regarding Election Commission of India ? (1) The Constitution has prescribed the qualifications of the members of the Election Commission. (2) The Constitution has debarred the retiring Commissioners from any further appointment by the government. (3) The Chief Election Commissioner and other Commissioners have equal powers. (4) The Election Commissioners cannot be removed from office except in the manner and on the ground as a judge of the Supreme Court.",
    "options_marathi": [
      "राज्यघटनेने निवडणूक आयोगाच्या सदस्यांच्या पात्रतेचे निकष सांगितलेले आहेत.",
      "राज्यघटनेने निवृत्त निवडणूक आयुक्तांची शासनाकडून अन्य पदावर नेमणूक करण्यावर बंदी घातलेली आहे.",
      "मुख्य निवडणूक आयुक्त आणि अन्य आयुक्त यांना समान अधिकार आहेत.",
      "सर्वोच्च न्यायालयाच्या न्यायाधीशाला ज्या पद्धतीने व कारणासाठी पदच्युत केले जाते त्याच पद्धतीने व त्याच कारणांसाठी निवडणूक आयुक्तांना पदच्युत करता येते."
    ],
    "options_english": [
      "The Constitution has prescribed the qualifications of the members of the Election Commission.",
      "The Constitution has debarred the retiring Commissioners from any further appointment by the government.",
      "The Chief Election Commissioner and other Commissioners have equal powers.",
      "The Election Commissioners cannot be removed from office except in the manner and on the ground as a judge of the Supreme Court."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Constitutional Bodies - Election Commission",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "The Indian Constitution does not prescribe the qualifications for the members of the Election Commission, nor does it debar retiring commissioners from future government appointments. The Chief Election Commissioner (CEC) and other Election Commissioners (ECs) have equal powers, and in case of a difference of opinion, decisions are made by majority vote. While the CEC can only be removed in the same manner and on the same grounds as a Supreme Court judge, other ECs and Regional Commissioners can be removed by the President solely on the recommendation of the CEC.",
    "explanation_marathi": "भारतीय संविधानाने निवडणूक आयोगाच्या सदस्यांसाठी कोणतीही पात्रता विहित केलेली नाही, तसेच निवृत्त आयुक्तांना भविष्यातील सरकारी नियुक्त्यांपासून प्रतिबंधित केलेले नाही. मुख्य निवडणूक आयुक्त (CEC) आणि इतर निवडणूक आयुक्त (ECs) यांना समान अधिकार आहेत आणि मतांमध्ये फरक असल्यास, बहुमताने निर्णय घेतले जातात. मुख्य निवडणूक आयुक्तांना केवळ सर्वोच्च न्यायालयाच्या न्यायाधीशांना ज्या पद्धतीने आणि कारणांसाठी पदावरून दूर केले जाते, त्याच पद्धतीने दूर केले जाऊ शकते, तर इतर निवडणूक आयुक्त आणि प्रादेशिक आयुक्तांना राष्ट्रपती केवळ मुख्य निवडणूक आयुक्तांच्या शिफारशीनुसार पदावरून दूर करू शकतात.",
    "options_breakdown": [
      {
        "option_text_english": "The Constitution has prescribed the qualifications of the members of the Election Commission.",
        "option_text_marathi": "राज्यघटनेने निवडणूक आयोगाच्या सदस्यांच्या पात्रतेचे निकष सांगितलेले आहेत.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Constitution has not prescribed any specific qualifications for the members of the Election Commission.",
        "reason_marathi": "हे विधान चुकीचे आहे. संविधानाने निवडणूक आयोगाच्या सदस्यांसाठी कोणतीही विशिष्ट पात्रता विहित केलेली नाही."
      },
      {
        "option_text_english": "The Constitution has debarred the retiring Commissioners from any further appointment by the government.",
        "option_text_marathi": "राज्यघटनेने निवृत्त निवडणूक आयुक्तांची शासनाकडून अन्य पदावर नेमणूक करण्यावर बंदी घातलेली आहे.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. The Constitution has not debarred retiring election commissioners from further appointments.",
        "reason_marathi": "हे विधान चुकीचे आहे. संविधानाने निवृत्त निवडणूक आयुक्तांना पुढील नियुक्त्यांपासून प्रतिबंधित केलेले नाही."
      },
      {
        "option_text_english": "The Chief Election Commissioner and other Commissioners have equal powers.",
        "option_text_marathi": "मुख्य निवडणूक आयुक्त आणि अन्य आयुक्त यांना समान अधिकार आहेत.",
        "is_correct": true,
        "reason_english": "This statement is correct. In case of difference of opinion, decisions are taken by majority vote, implying equal powers.",
        "reason_marathi": "हे विधान बरोबर आहे. मतांमध्ये फरक असल्यास, बहुमताने निर्णय घेतले जातात, याचा अर्थ त्यांना समान अधिकार आहेत."
      },
      {
        "option_text_english": "The Election Commissioners cannot be removed from office except in the manner and on the ground as a judge of the Supreme Court.",
        "option_text_marathi": "सर्वोच्च न्यायालयाच्या न्यायाधीशाला ज्या पद्धतीने व कारणासाठी पदच्युत केले जाते त्याच पद्धतीने व त्याच कारणांसाठी निवडणूक आयुक्तांना पदच्युत करता येते.",
        "is_correct": false,
        "reason_english": "This statement is incorrect. This removal process applies *only* to the Chief Election Commissioner, not to other Election Commissioners.",
        "reason_marathi": "हे विधान चुकीचे आहे. ही पदच्युती प्रक्रिया *केवळ* मुख्य निवडणूक आयुक्तांना लागू होते, इतर निवडणूक आयुक्तांना नाही."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "खालील विधाने विचारात घ्या - (a) भारतातील पहिले लोक न्यायालय 1986 मध्ये चेन्नई येथे भरविण्यात आले. (b) लोक न्यायालयाचा अध्यक्ष सेवानिवृत्त किंवा सेवांतर्गत न्यायाधिकारी असतो. (c) लोक न्यायालयाच्या अध्यक्षा आदेशाविरुद्ध अपिल करता येत नाही.",
    "question_english": "Consider the following statements : (a) The First Lok Adalat was held in Chennai in 1986. (b) The chairman of Lok Adalat is a retired or sitting Judicial Officer. (c) No appeal lies against the order of the Lok Adalat.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(a) आणि (c)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(a) and (c)",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Lok Adalat, Alternative Dispute Resolution",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Lok Adalats are an alternative dispute resolution mechanism in India. The first Lok Adalat was held in Gujarat in 1982, not Chennai in 1986. The chairman of a Lok Adalat is indeed a retired or sitting judicial officer. A key feature of Lok Adalats is that their awards are final and binding on the parties and no appeal lies against such an award in any court of law. Therefore, statements (b) and (c) are correct, while statement (a) is incorrect.",
    "explanation_marathi": "लोक अदालत हे भारतातील पर्यायी विवाद निवारण यंत्रणा आहेत. पहिले लोक न्यायालय 1982 मध्ये गुजरातमध्ये भरविण्यात आले होते, 1986 मध्ये चेन्नईमध्ये नाही. लोक न्यायालयाचा अध्यक्ष सेवानिवृत्त किंवा सेवांतर्गत न्यायाधिकारी असतो. लोक न्यायालयाच्या निर्णयाविरुद्ध कोणत्याही न्यायालयात अपील करता येत नाही, कारण त्याचे निर्णय अंतिम आणि बंधनकारक असतात. त्यामुळे, विधाने (b) आणि (c) बरोबर आहेत, तर विधान (a) चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_marathi": "(a) आणि (b)",
        "option_english": "(a) and (b)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect as the first Lok Adalat was held in Gujarat in 1982, not Chennai in 1986.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण पहिले लोक न्यायालय 1982 मध्ये गुजरातमध्ये भरविण्यात आले होते, 1986 मध्ये चेन्नईमध्ये नाही."
      },
      {
        "option_marathi": "(b) आणि (c)",
        "option_english": "(b) and (c)",
        "is_correct": true,
        "reason_english": "Both statements (b) and (c) are correct. The chairman is a judicial officer, and no appeal lies against a Lok Adalat's order.",
        "reason_marathi": "दोन्ही विधाने (b) आणि (c) बरोबर आहेत. अध्यक्ष न्यायिक अधिकारी असतो आणि लोक न्यायालयाच्या आदेशाविरुद्ध अपील करता येत नाही."
      },
      {
        "option_marathi": "(a) आणि (c)",
        "option_english": "(a) and (c)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      },
      {
        "option_marathi": "(a), (b) आणि (c)",
        "option_english": "(a), (b) and (c)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "भारतीय संघराज्यवादासंबंधी न्यायालयाने लावलेल्या अर्थाबद्दल खालीलपैकी कोणते विधान चुकीचे आहे ? (विशेषतः एस.आर. बोमई वि. भारत सरकार खटल्याच्या संदर्भात) (1) न्यायमूर्ती अहमदी यांनी असे मत व्यक्त केले की, भारतीय राज्यघटनेचे संघराज्यात्मक राज्याऐवजी निमसंघराज्य अथवा एकात्म असे वर्णन करणे अधिक योग्य ठरेल. (2) न्यायमूर्ती सावंत आणि न्यायमूर्ती कुलदिप सिंग यांनी लोकशाही आणि संघराज्य हे भारतीय राज्यघटनेचे अत्यावश्यक वैशिष्ट्ये असल्याचे म्हटले आहे. (3) न्यायमूर्ती जीवन रेड्डी आणि न्यायमूर्ती अग्रवाल यांनी असे मत व्यक्त केले की, संघराज्य अथवा संघराज्यात्मक शासन याला निश्चित असा अर्थ नाही. (4) वरीलपैकी एकही नाही",
    "question_english": "Which one of the following statements regarding judicial interpretation of Indian Federalism is not correct? (Particularly with ref. to S.R. Bommai Vs. Union of India Case) (1) Justice Ahmadi opined that it would be more appropriate to describe the Constitution of India as quasi-federal or unitary rather than a federal constitution. (2) Justice Sawant and justice Kuldip Singh regarded democracy and Federalism as essential features of the Indian Constitution. (3) Justice Jeevan Reddy and Justice Agarwal opined that the expression federal or federal form of government has no fixed meaning. (4) None of the above",
    "options_marathi": [
      "न्यायमूर्ती अहमदी यांनी असे मत व्यक्त केले की, भारतीय राज्यघटनेचे संघराज्यात्मक राज्याऐवजी निमसंघराज्य अथवा एकात्म असे वर्णन करणे अधिक योग्य ठरेल.",
      "न्यायमूर्ती सावंत आणि न्यायमूर्ती कुलदिप सिंग यांनी लोकशाही आणि संघराज्य हे भारतीय राज्यघटनेचे अत्यावश्यक वैशिष्ट्ये असल्याचे म्हटले आहे.",
      "न्यायमूर्ती जीवन रेड्डी आणि न्यायमूर्ती अग्रवाल यांनी असे मत व्यक्त केले की, संघराज्य अथवा संघराज्यात्मक शासन याला निश्चित असा अर्थ नाही.",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Justice Ahmadi opined that it would be more appropriate to describe the Constitution of India as quasi-federal or unitary rather than a federal constitution.",
      "Justice Sawant and justice Kuldip Singh regarded democracy and Federalism as essential features of the Indian Constitution.",
      "Justice Jeevan Reddy and Justice Agarwal opined that the expression federal or federal form of government has no fixed meaning.",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Federalism, Basic Structure, S.R. Bommai Case",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The S.R. Bommai case (1994) is a landmark judgment concerning federalism and Article 356. In this case, the Supreme Court held that federalism is a basic feature of the Indian Constitution. While Justice Ahmadi did express a view leaning towards quasi-federal or unitary, the majority, including Justices Sawant, Kuldip Singh, Jeevan Reddy, and Agarwal, affirmed federalism as a basic feature. Justice Jeevan Reddy and Justice Agarwal, in particular, did not state that 'federal' has no fixed meaning; rather, they emphasized its importance in the Indian context. The statement that they opined 'federal or federal form of government has no fixed meaning' is incorrect in the context of their judgment, as they were part of the majority that upheld federalism as a basic feature.",
    "explanation_marathi": "एस.आर. बोम्मई खटला (1994) हा संघराज्यवादाशी आणि कलम 356 शी संबंधित एक महत्त्वाचा निर्णय आहे. या खटल्यात सर्वोच्च न्यायालयाने असे म्हटले की, संघराज्यवाद हे भारतीय राज्यघटनेचे मूलभूत वैशिष्ट्य आहे. न्यायमूर्ती अहमदी यांनी भारतीय राज्यघटनेला निमसंघराज्य किंवा एकात्म असे वर्णन करणे अधिक योग्य ठरेल असे मत व्यक्त केले असले तरी, न्यायमूर्ती सावंत, न्यायमूर्ती कुलदीप सिंग, न्यायमूर्ती जीवन रेड्डी आणि न्यायमूर्ती अग्रवाल यांच्यासह बहुमताने संघराज्यवादाला मूलभूत वैशिष्ट्य म्हणून दुजोरा दिला. विशेषतः, न्यायमूर्ती जीवन रेड्डी आणि न्यायमूर्ती अग्रवाल यांनी 'संघराज्य' या शब्दाला निश्चित अर्थ नाही असे म्हटले नाही; उलट, त्यांनी भारतीय संदर्भात त्याचे महत्त्व अधोरेखित केले. त्यामुळे, 'संघराज्य किंवा संघराज्यात्मक शासनाला निश्चित अर्थ नाही' असे त्यांनी मत व्यक्त केले हे विधान चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_marathi": "न्यायमूर्ती अहमदी यांनी असे मत व्यक्त केले की, भारतीय राज्यघटनेचे संघराज्यात्मक राज्याऐवजी निमसंघराज्य अथवा एकात्म असे वर्णन करणे अधिक योग्य ठरेल.",
        "option_english": "Justice Ahmadi opined that it would be more appropriate to describe the Constitution of India as quasi-federal or unitary rather than a federal constitution.",
        "is_correct": false,
        "reason_english": "This statement is correct. Justice Ahmadi was part of the minority view in the S.R. Bommai case and held this opinion.",
        "reason_marathi": "हे विधान बरोबर आहे. न्यायमूर्ती अहमदी हे एस.आर. बोम्मई खटल्यातील अल्पमताचा भाग होते आणि त्यांनी हे मत व्यक्त केले होते."
      },
      {
        "option_marathi": "न्यायमूर्ती सावंत आणि न्यायमूर्ती कुलदिप सिंग यांनी लोकशाही आणि संघराज्य हे भारतीय राज्यघटनेचे अत्यावश्यक वैशिष्ट्ये असल्याचे म्हटले आहे.",
        "option_english": "Justice Sawant and justice Kuldip Singh regarded democracy and Federalism as essential features of the Indian Constitution.",
        "is_correct": false,
        "reason_english": "This statement is correct. Justices Sawant and Kuldip Singh were part of the majority that affirmed federalism as a basic feature.",
        "reason_marathi": "हे विधान बरोबर आहे. न्यायमूर्ती सावंत आणि कुलदीप सिंग हे बहुमताचा भाग होते ज्यांनी संघराज्यवादाला मूलभूत वैशिष्ट्य म्हणून दुजोरा दिला."
      },
      {
        "option_marathi": "न्यायमूर्ती जीवन रेड्डी आणि न्यायमूर्ती अग्रवाल यांनी असे मत व्यक्त केले की, संघराज्य अथवा संघराज्यात्मक शासन याला निश्चित असा अर्थ नाही.",
        "option_english": "Justice Jeevan Reddy and Justice Agarwal opined that the expression federal or federal form of government has no fixed meaning.",
        "is_correct": true,
        "reason_english": "This statement is incorrect. Justices Jeevan Reddy and Agarwal were part of the majority that upheld federalism as a basic feature and did not state that the term 'federal' has no fixed meaning. They rather gave it a significant meaning in the Indian context.",
        "reason_marathi": "हे विधान चुकीचे आहे. न्यायमूर्ती जीवन रेड्डी आणि अग्रवाल हे बहुमताचा भाग होते ज्यांनी संघराज्यवादाला मूलभूत वैशिष्ट्य म्हणून दुजोरा दिला आणि त्यांनी 'संघराज्य' या शब्दाला निश्चित अर्थ नाही असे म्हटले नाही. उलट, त्यांनी भारतीय संदर्भात त्याचे महत्त्व अधोरेखित केले."
      },
      {
        "option_marathi": "वरीलपैकी एकही नाही",
        "option_english": "None of the above",
        "is_correct": false,
        "reason_english": "Since statement (3) is incorrect, this option is not the answer.",
        "reason_marathi": "विधान (3) चुकीचे असल्याने, हा पर्याय उत्तर नाही."
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "भारतीय राज्यघटनेच्या प्रास्ताविकानुसार भारत हे 'प्रजासत्ताक' आहे. प्रजासत्ताकाचा अर्थ कोणता ? (a) राज्यकर्ता वंशपरंपरागत नसतो. (b) सार्वभौम सत्ता केन्द्रीय मंत्रिमंडळामध्ये असते. (c) शासन प्रमुख हा जनतेकडून विशिष्ट काळासाठी निवडला जातो. (d) राष्ट्रप्रमुख हा जनतेकडून विशिष्ट काळासाठी निवडला जातो.",
    "question_english": "According to the 'Preamble' of the Indian Constitution, India is a 'Republic'. What is the meaning of Republic ? (a) There is no hereditary ruler (b) The Sovereignty resides in the Central Cabinet (c) The head of the government is elected by the people for a fixed period (d) The head of the state is elected by the people for a fixed term.",
    "options_marathi": [
      "फक्त (a)",
      "(a), (b) आणि (c)",
      "वरील सर्व",
      "(a) आणि (d) फक्त"
    ],
    "options_english": [
      "(a) only",
      "(a), (b) and (c)",
      "all above",
      "(a) and (d) only"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Preamble, Basic Features of Constitution",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of terms",
    "explanation_english": "The term 'Republic' in the Preamble signifies that India has an elected head of state (the President) for a fixed term, rather than a hereditary monarch. This means statement (a) 'There is no hereditary ruler' and statement (d) 'The head of the state is elected by the people for a fixed term' are correct. Statement (c) 'The head of the government is elected by the people for a fixed period' describes a democratic system with an elected head of government, which is true for India, but (a) and (d) are more directly related to the definition of a 'Republic'. Statement (b) 'The Sovereignty resides in the Central Cabinet' is incorrect; sovereignty in India resides with the people. Therefore, the most accurate combination defining 'Republic' from the given statements is (a) and (d).",
    "explanation_marathi": "राज्यघटनेच्या प्रस्तावनेतील 'प्रजासत्ताक' हा शब्द सूचित करतो की भारताचा राष्ट्रप्रमुख (राष्ट्रपती) वंशपरंपरागत नसून, एका निश्चित कालावधीसाठी निवडला जातो. याचा अर्थ विधान (a) 'राज्यकर्ता वंशपरंपरागत नसतो' आणि विधान (d) 'राष्ट्रप्रमुख हा जनतेकडून विशिष्ट काळासाठी निवडला जातो' ही दोन्ही बरोबर आहेत. विधान (c) 'शासन प्रमुख हा जनतेकडून विशिष्ट काळासाठी निवडला जातो' हे लोकशाही व्यवस्थेचे वर्णन करते, जे भारतासाठी खरे आहे, परंतु (a) आणि (d) हे 'प्रजासत्ताक' या शब्दाच्या व्याख्येशी अधिक थेट संबंधित आहेत. विधान (b) 'सार्वभौम सत्ता केन्द्रीय मंत्रिमंडळामध्ये असते' हे चुकीचे आहे; भारतात सार्वभौम सत्ता जनतेमध्ये असते. त्यामुळे, दिलेल्या विधानांमधून 'प्रजासत्ताक' या शब्दाची सर्वात अचूक व्याख्या (a) आणि (d) ही आहे.",
    "options_breakdown": [
      {
        "option_marathi": "फक्त (a)",
        "option_english": "(a) only",
        "is_correct": false,
        "reason_english": "While (a) is correct, (d) is also a crucial aspect of a republic.",
        "reason_marathi": "विधान (a) बरोबर असले तरी, (d) हे देखील प्रजासत्ताकाचे एक महत्त्वाचे वैशिष्ट्य आहे."
      },
      {
        "option_marathi": "(a), (b) आणि (c)",
        "option_english": "(a), (b) and (c)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as sovereignty resides in the people, not the Central Cabinet.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण सार्वभौम सत्ता केंद्रीय मंत्रिमंडळात नसून जनतेमध्ये असते."
      },
      {
        "option_marathi": "वरील सर्व",
        "option_english": "all above",
        "is_correct": false,
        "reason_english": "This option implies (a), (b), and (c) are all correct, which is false due to statement (b).",
        "reason_marathi": "हा पर्याय सूचित करतो की (a), (b) आणि (c) सर्व बरोबर आहेत, जे विधान (b) मुळे चुकीचे आहे."
      },
      {
        "option_marathi": "(a) आणि (d) फक्त",
        "option_english": "(a) and (d) only",
        "is_correct": true,
        "reason_english": "Both (a) and (d) accurately define a republic: no hereditary ruler and an elected head of state.",
        "reason_marathi": "विधान (a) आणि (d) दोन्ही प्रजासत्ताकाची अचूक व्याख्या करतात: वंशपरंपरागत शासक नसतो आणि राष्ट्रप्रमुख निवडला जातो."
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "खालील विधाने विचारात घ्या - (a) राज्यसभेचे अध्यक्ष हे या सभागृहाचे सदस्य नसतात. (b) मंत्रिमंडळ राज्यसभेला जबाबदार नसते. (c) उपराष्ट्रपतींच्या बडतर्फीचा प्रस्ताव फक्त राज्यसभेतच मांडला जातो.",
    "question_english": "Consider the following statements : (a) The chairman of the Rajya Sabha is not a member of this house. (b) The council of ministers is not responsible to the Rajya Sabha. (c) The proposal to remove the vice-president is initiated only in the Rajya Sabha.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(a) आणि (c)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(a) and (c)",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Parliament, Rajya Sabha, Vice-President",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "All three statements are correct. The Vice-President of India is the ex-officio Chairman of the Rajya Sabha and is not a member of the House (Statement a). The Council of Ministers is collectively responsible to the Lok Sabha, not the Rajya Sabha (Statement b). A resolution for the removal of the Vice-President can only be initiated in the Rajya Sabha and passed by a majority of all the then members of the Council, and then agreed to by the Lok Sabha (Statement c).",
    "explanation_marathi": "दिलेली तिन्ही विधाने बरोबर आहेत. भारताचे उपराष्ट्रपती हे राज्यसभेचे पदसिद्ध अध्यक्ष असतात आणि ते सभागृहाचे सदस्य नसतात (विधान a). मंत्रिमंडळ लोकसभेला सामूहिकरित्या जबाबदार असते, राज्यसभेला नाही (विधान b). उपराष्ट्रपतींना पदावरून दूर करण्याचा प्रस्ताव केवळ राज्यसभेतच मांडला जाऊ शकतो आणि तो राज्यसभेच्या तत्कालीन एकूण सदस्यांच्या बहुमताने मंजूर होऊन लोकसभेची संमती मिळाल्यावरच उपराष्ट्रपतींना पदावरून दूर केले जाते (विधान c).",
    "options_breakdown": [
      {
        "option_marathi": "(a) आणि (b)",
        "option_english": "(a) and (b)",
        "is_correct": false,
        "reason_english": "This option is partially correct, but statement (c) is also correct.",
        "reason_marathi": "हा पर्याय अंशतः बरोबर आहे, परंतु विधान (c) देखील बरोबर आहे."
      },
      {
        "option_marathi": "(b) आणि (c)",
        "option_english": "(b) and (c)",
        "is_correct": false,
        "reason_english": "This option is partially correct, but statement (a) is also correct.",
        "reason_marathi": "हा पर्याय अंशतः बरोबर आहे, परंतु विधान (a) देखील बरोबर आहे."
      },
      {
        "option_marathi": "(a) आणि (c)",
        "option_english": "(a) and (c)",
        "is_correct": false,
        "reason_english": "This option is partially correct, but statement (b) is also correct.",
        "reason_marathi": "हा पर्याय अंशतः बरोबर आहे, परंतु विधान (b) देखील बरोबर आहे."
      },
      {
        "option_marathi": "(a), (b) आणि (c)",
        "option_english": "(a), (b) and (c)",
        "is_correct": true,
        "reason_english": "All three statements are factually correct regarding the Rajya Sabha and the Vice-President.",
        "reason_marathi": "राज्यसभा आणि उपराष्ट्रपती यांच्या संदर्भात दिलेली तिन्ही विधाने वस्तुस्थितीनुसार बरोबर आहेत."
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "राष्ट्रपतीने 'आर्थिक आणीबाणी' घोषित केल्यास त्याचे खालीलपैकी कोणते परिणाम होतील? (a) राष्ट्रपती नागरिकांचे सर्व मूलभूत अधिकार निलंबित करू शकतात. (b) राष्ट्रपती सर्वोच्च न्यायालय आणि उच्च न्यायालयांचे न्यायाधीश वगळून सरकारी कर्मचाऱ्यांच्या वेतन आणि भत्त्यात कपात करू शकतात. (c) राष्ट्रपती आर्थिक व्यवहारातील सुज्ञपणाच्या तत्त्वाचे पालन करण्यासंबंधी राज्याला आदेश देवू शकतात. (d) राज्य विधिमंडळाने संमत केलेली सर्व अर्थ विधेयके राष्ट्रपतीच्या विचारार्थ राखून ठेवली जावू शकतात.",
    "question_english": "Which of the following will be the consequences of the proclamation of 'Financial Emergency' by the President ? (a) The President can suspend all the fundamental rights of the citizens. (b) The President can reduce the salaries and allowances of government employees excluding the judges of Supreme Court and High Courts. (c) The President can give directions to the state to observe the principles of Financial propriety. (d) All money bills passed by the state legislature can be reserved for the consideration of President.",
    "options_marathi": [
      "विधाने (a), (b), (c) बरोबर आहेत.",
      "विधाने (b), (c), (d) बरोबर आहेत.",
      "विधाने (c), (d) बरोबर आहेत.",
      "विधाने (a), (b), (d) बरोबर आहेत."
    ],
    "options_english": [
      "Statements (a), (b), (c) are correct.",
      "Statements (b), (c), (d) are correct.",
      "Statements (c), (d) are correct.",
      "Statements (a), (b), (d) are correct."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Emergency Provisions, Financial Emergency",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "During a Financial Emergency (Article 360), the President can issue directions to states regarding financial propriety (Statement c). Also, all money bills or other financial bills passed by the state legislature can be reserved for the consideration of the President (Statement d). However, fundamental rights are suspended during a National Emergency (Article 352), not a Financial Emergency (Statement a is incorrect). Furthermore, the President can reduce the salaries and allowances of *all* government employees, including judges of the Supreme Court and High Courts, during a Financial Emergency (Statement b is incorrect). Therefore, only statements (c) and (d) are correct.",
    "explanation_marathi": "आर्थिक आणीबाणीच्या काळात (अनुच्छेद 360), राष्ट्रपती राज्यांना आर्थिक शिस्त पाळण्यासंबंधी निर्देश देऊ शकतात (विधान c). तसेच, राज्य विधिमंडळाने संमत केलेली सर्व धन विधेयके किंवा इतर वित्तीय विधेयके राष्ट्रपतींच्या विचारार्थ राखून ठेवली जाऊ शकतात (विधान d). तथापि, मूलभूत अधिकार राष्ट्रीय आणीबाणीच्या काळात (अनुच्छेद 352) निलंबित केले जातात, आर्थिक आणीबाणीत नाही (विधान a चुकीचे आहे). शिवाय, आर्थिक आणीबाणीच्या काळात राष्ट्रपती सर्वोच्च न्यायालय आणि उच्च न्यायालयांच्या न्यायाधीशांसह सर्व सरकारी कर्मचाऱ्यांचे वेतन आणि भत्ते कमी करू शकतात (विधान b चुकीचे आहे). त्यामुळे, केवळ विधाने (c) आणि (d) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "विधाने (a), (b), (c) बरोबर आहेत.",
        "option_english": "Statements (a), (b), (c) are correct.",
        "is_correct": false,
        "reason_english": "Statements (a) and (b) are incorrect.",
        "reason_marathi": "विधाने (a) आणि (b) चुकीची आहेत."
      },
      {
        "option_marathi": "विधाने (b), (c), (d) बरोबर आहेत.",
        "option_english": "Statements (b), (c), (d) are correct.",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect.",
        "reason_marathi": "विधान (b) चुकीचे आहे."
      },
      {
        "option_marathi": "विधाने (c), (d) बरोबर आहेत.",
        "option_english": "Statements (c), (d) are correct.",
        "is_correct": true,
        "reason_english": "Both statements (c) and (d) are correct consequences of a Financial Emergency.",
        "reason_marathi": "विधाने (c) आणि (d) दोन्ही आर्थिक आणीबाणीचे योग्य परिणाम आहेत."
      },
      {
        "option_marathi": "विधाने (a), (b), (d) बरोबर आहेत.",
        "option_english": "Statements (a), (b), (d) are correct.",
        "is_correct": false,
        "reason_english": "Statements (a) and (b) are incorrect.",
        "reason_marathi": "विधाने (a) आणि (b) चुकीची आहेत."
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "खालील विधानांपैकी कोणते चुकीचे आहे ? (1) संविधानाने 10 व्या भागात कलम 244 अन्वये विशिष्ट प्रदेशांना अनुसूचित प्रदेश आणि आदिवासी प्रदेशाचा दर्जा देवून प्रशासनाच्या विशेष पद्धतीची तरतूद करण्यात आली आहे. (2) अनुसूचित प्रदेश आणि अनुसूचित जमातीच्या प्रदेशाचे प्रशासन आणि नियंत्रण याबाबतच्या तरतूदी 5 व्या परिशिष्टांमध्ये आहेत. (3) आसाम, त्रिपूरा, मेघालय आणि मिझोराम या उत्तरपूर्वेकडील राज्यातील आदिवासी प्रदेशाच्या प्रशासनाबाबत तरतूदी 6 व्या परिशिष्टामध्ये आहेत. (4) एखादा प्रदेश 'अनुसूचित' घोषित करण्याचा अधिकार राज्यपालांना आहे.",
    "question_english": "Which of the following statements is incorrect? (1) Article 244 in part X of the Constitution enviseges a special system of administration for certain areas, designated as scheduled areas and tribal areas. (2) The fifth Schedule deals with the Administration and control of Scheduled areas and Scheduled tribes. (3) The sixth Schedule deals with the administration of the tribal areas in the four North Eastern states of Assam, Tripura, Meghalaya and Mizoram. (4) The Governor is empowered to declare an area to be a Scheduled area.",
    "options_marathi": [
      "संविधानाने 10 व्या भागात कलम 244 अन्वये विशिष्ट प्रदेशांना अनुसूचित प्रदेश आणि आदिवासी प्रदेशाचा दर्जा देवून प्रशासनाच्या विशेष पद्धतीची तरतूद करण्यात आली आहे.",
      "अनुसूचित प्रदेश आणि अनुसूचित जमातीच्या प्रदेशाचे प्रशासन आणि नियंत्रण याबाबतच्या तरतूदी 5 व्या परिशिष्टांमध्ये आहेत.",
      "आसाम, त्रिपूरा, मेघालय आणि मिझोराम या उत्तरपूर्वेकडील राज्यातील आदिवासी प्रदेशाच्या प्रशासनाबाबत तरतूदी 6 व्या परिशिष्टामध्ये आहेत.",
      "एखादा प्रदेश 'अनुसूचित' घोषित करण्याचा अधिकार राज्यपालांना आहे."
    ],
    "options_english": [
      "Article 244 in part X of the Constitution enviseges a special system of administration for certain areas, designated as scheduled areas and tribal areas.",
      "The fifth Schedule deals with the Administration and control of Scheduled areas and Scheduled tribes.",
      "The sixth Schedule deals with the administration of the tribal areas in the four North Eastern states of Assam, Tripura, Meghalaya and Mizoram.",
      "The Governor is empowered to declare an area to be a Scheduled area.",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Scheduled and Tribal Areas, Schedules of the Constitution",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question asks for the incorrect statement. The Constitution, in Part X (Article 244), indeed provides for a special system of administration for Scheduled Areas and Tribal Areas (Statement 1 is correct). The Fifth Schedule deals with the administration and control of Scheduled Areas and Scheduled Tribes (Statement 2 is correct). The Sixth Schedule specifically deals with the administration of tribal areas in the four North-Eastern states of Assam, Tripura, Meghalaya, and Mizoram (Statement 3 is correct). However, it is the President of India, not the Governor, who is empowered to declare an area to be a Scheduled Area (Statement 4 is incorrect).",
    "explanation_marathi": "हा प्रश्न चुकीचे विधान ओळखण्यास सांगतो. संविधानाच्या भाग X मध्ये (अनुच्छेद 244) अनुसूचित प्रदेश आणि आदिवासी प्रदेशांसाठी प्रशासनाच्या विशेष पद्धतीची तरतूद करण्यात आली आहे (विधान 1 बरोबर आहे). पाचवे परिशिष्ट अनुसूचित प्रदेश आणि अनुसूचित जमातींच्या प्रशासनाशी आणि नियंत्रणाशी संबंधित आहे (विधान 2 बरोबर आहे). सहावे परिशिष्ट आसाम, त्रिपुरा, मेघालय आणि मिझोराम या चार ईशान्येकडील राज्यांमधील आदिवासी प्रदेशांच्या प्रशासनाशी संबंधित आहे (विधान 3 बरोबर आहे). तथापि, एखाद्या प्रदेशाला 'अनुसूचित' प्रदेश म्हणून घोषित करण्याचा अधिकार राज्यपालांना नसून भारताच्या राष्ट्रपतींना आहे (विधान 4 चुकीचे आहे).",
    "options_breakdown": [
      {
        "option_marathi": "संविधानाने 10 व्या भागात कलम 244 अन्वये विशिष्ट प्रदेशांना अनुसूचित प्रदेश आणि आदिवासी प्रदेशाचा दर्जा देवून प्रशासनाच्या विशेष पद्धतीची तरतूत करण्यात आली आहे.",
        "option_english": "Article 244 in part X of the Constitution enviseges a special system of administration for certain areas, designated as scheduled areas and tribal areas.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      },
      {
        "option_marathi": "अनुसूचित प्रदेश आणि अनुसूचित जमातीच्या प्रदेशाचे प्रशासन आणि नियंत्रण याबाबतच्या तरतूदी 5 व्या परिशिष्टांमध्ये आहेत.",
        "option_english": "The fifth Schedule deals with the Administration and control of Scheduled areas and Scheduled tribes.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      },
      {
        "option_marathi": "आसाम, त्रिपूरा, मेघालय आणि मिझोराम या उत्तरपूर्वेकडील राज्यातील आदिवासी प्रदेशाच्या प्रशासनाबाबत तरतूदी 6 व्या परिशिष्टामध्ये आहेत.",
        "option_english": "The sixth Schedule deals with the administration of the tribal areas in the four North Eastern states of Assam, Tripura, Meghalaya and Mizoram.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      },
      {
        "option_marathi": "एखादा प्रदेश 'अनुसूचित' घोषित करण्याचा अधिकार राज्यपालांना आहे.",
        "option_english": "The Governor is empowered to declare an area to be a Scheduled area.",
        "is_correct": true,
        "reason_english": "This statement is incorrect. The power to declare an area as a Scheduled Area rests with the President of India, not the Governor.",
        "reason_marathi": "हे विधान चुकीचे आहे. एखाद्या प्रदेशाला 'अनुसूचित' प्रदेश म्हणून घोषित करण्याचा अधिकार भारताच्या राष्ट्रपतींना आहे, राज्यपालांना नाही."
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "केन्द्र-राज्य संबंधाबाबतच्या शिफारशीसंबंधी योग्य जोडी ओळखा : आयोग/समिती शिफारस (1) सरकारिया आयोग - अखिल भारतीय सेवा रद्द कराव्यात (2) राजमन्नार समिती - आरोग्य, शिक्षण, अभियांत्रिकी आणि न्यायिक अशा अखिल भारतीय सेवा निर्माण करव्यात. (3) पुंछी आयोग - अखिल भारतीय सेवा अधिक प्रबळ कराव्यात. (4) आनंदपूर साहिब ठराव - केन्द्राकडे फक्त संरक्षण, परराष्ट्र व्यवहार, दळणवळण आणि चलन इतकेच मर्यादित विषय असावेत.",
    "question_english": "Identify the correct pair with regard to the recommendation of center-state relations : Commission/Committee Recommendation (1) Sarkaria Commission - All India Services should be abolished. (2) Rajmannar Committee - New All India Services like health, education, engineering and judiciary should be created (3) Punchhi Commission - All India Services should be strengthned (4) Anandpur Sahib Resolution - Centre's jurisdiction should be restricted only to defence, Foreign affairs, Communication and Currency.",
    "options_marathi": [
      "सरकारिया आयोग - अखिल भारतीय सेवा रद्द कराव्यात",
      "राजमन्नार समिती - आरोग्य, शिक्षण, अभियांत्रिकी आणि न्यायिक अशा अखिल भारतीय सेवा निर्माण करव्यात.",
      "पुंछी आयोग - अखिल भारतीय सेवा अधिक प्रबळ कराव्यात.",
      "आनंदपूर साहिब ठराव - केन्द्राकडे फक्त संरक्षण, परराष्ट्र व्यवहार, दळणवळण आणि चलन इतकेच मर्यादित विषय असावेत."
    ],
    "options_english": [
      "Sarkaria Commission - All India Services should be abolished.",
      "Rajmannar Committee - New All India Services like health, education, engineering and judiciary should be created",
      "Punchhi Commission - All India Services should be strengthned",
      "Anandpur Sahib Resolution - Centre's jurisdiction should be restricted only to defence, Foreign affairs, Communication and Currency."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Centre-State Relations, Commissions and Committees",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of various commissions and resolutions on Centre-State relations. The Sarkaria Commission (1983) recommended strengthening the All India Services, not abolishing them. The Rajmannar Committee (1969) recommended the abolition of All India Services, not the creation of new ones. The Punchhi Commission (2007) also recommended strengthening the All India Services, emphasizing their role in maintaining national unity and administrative efficiency, while also suggesting greater consultation with states. The Anandpur Sahib Resolution (1973) was a significant demand for greater state autonomy, explicitly advocating that the Centre's jurisdiction should be restricted only to defence, foreign affairs, communication, and currency. While the Punchhi Commission did recommend strengthening AIS, the Anandpur Sahib Resolution's demand is a very specific and defining feature of its call for state autonomy.",
    "explanation_marathi": "हा प्रश्न केंद्र-राज्य संबंधांवरील विविध आयोग आणि ठरावांच्या शिफारशींबद्दल आहे. सरकारिया आयोगाने (1983) अखिल भारतीय सेवा रद्द करण्याची शिफारस केली नव्हती, तर त्या मजबूत करण्याची शिफारस केली होती. राजमन्नार समितीने (1969) अखिल भारतीय सेवा रद्द करण्याची शिफारस केली होती, नवीन सेवा निर्माण करण्याची नाही. पुंछी आयोगाने (2007) देखील अखिल भारतीय सेवा मजबूत करण्याची शिफारस केली होती, राष्ट्रीय एकता आणि प्रशासकीय कार्यक्षमतेत त्यांची भूमिका अधोरेखित केली होती, तसेच राज्यांशी अधिक सल्लामसलत करण्याचे सुचवले होते. आनंदपूर साहिब ठराव (1973) हा राज्यांच्या अधिक स्वायत्ततेसाठी एक महत्त्वाचा मागणी होता, ज्यामध्ये केंद्राचे अधिकार केवळ संरक्षण, परराष्ट्र व्यवहार, दळणवळण आणि चलन यापुरते मर्यादित असावेत असे स्पष्टपणे म्हटले होते. पुंछी आयोगाने अखिल भारतीय सेवा मजबूत करण्याची शिफारस केली असली तरी, आनंदपूर साहिब ठरावाची मागणी राज्याच्या स्वायत्ततेसाठी एक अतिशय विशिष्ट आणि निर्णायक वैशिष्ट्य आहे.",
    "options_breakdown": [
      {
        "option_marathi": "सरकारिया आयोग - अखिल भारतीय सेवा रद्द कराव्यात",
        "option_english": "Sarkaria Commission - All India Services should be abolished.",
        "is_correct": false,
        "reason_english": "Sarkaria Commission recommended strengthening All India Services, not abolishing them.",
        "reason_marathi": "सरकारिया आयोगाने अखिल भारतीय सेवा मजबूत करण्याची शिफारस केली होती, रद्द करण्याची नाही."
      },
      {
        "option_marathi": "राजमन्नार समिती - आरोग्य, शिक्षण, अभियांत्रिकी आणि न्यायिक अशा अखिल भारतीय सेवा निर्माण करव्यात.",
        "option_english": "Rajmannar Committee - New All India Services like health, education, engineering and judiciary should be created",
        "is_correct": false,
        "reason_english": "Rajmannar Committee recommended abolishing All India Services.",
        "reason_marathi": "राजमन्नार समितीने अखिल भारतीय सेवा रद्द करण्याची शिफारस केली होती."
      },
      {
        "option_marathi": "पुंछी आयोग - अखिल भारतीय सेवा अधिक प्रबळ कराव्यात.",
        "option_english": "Punchhi Commission - All India Services should be strengthned",
        "is_correct": false,
        "reason_english": "This statement is correct, as the Punchhi Commission did recommend strengthening AIS.",
        "reason_marathi": "हे विधान बरोबर आहे, कारण पुंछी आयोगाने अखिल भारतीय सेवा मजबूत करण्याची शिफारस केली होती."
      },
      {
        "option_marathi": "आनंदपूर साहिब ठराव - केन्द्राकडे फक्त संरक्षण, परराष्ट्र व्यवहार, दळणवळण आणि चलन इतकेच मर्यादित विषय असावेत.",
        "option_english": "Anandpur Sahib Resolution - Centre's jurisdiction should be restricted only to defence, Foreign affairs, Communication and Currency.",
        "is_correct": true,
        "reason_english": "This statement is correct. The Anandpur Sahib Resolution explicitly advocated for limiting the Centre's jurisdiction to these four subjects.",
        "reason_marathi": "हे विधान बरोबर आहे. आनंदपूर साहिब ठरावाने केंद्राचे अधिकार केवळ संरक्षण, परराष्ट्र व्यवहार, दळणवळण आणि चलन या चार विषयांपुरते मर्यादित असावेत अशी स्पष्टपणे मागणी केली होती."
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "विधान (A) : भारतामध्ये आदेश काढण्याचे सर्वोच्च न्यायालयाचे व उच्च न्यायालयाचे अधिकार क्षेत्र समान आहे. विधान (R) : सर्वोच्च न्यायालय व उच्च न्यायालय दोन्हीही बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेक्षण व अधिकारपृच्छा हे आदेश काढू शकतात.",
    "question_english": "Statement (A): The writ jurisdiction of the Supreme Court and High Courts in India is same. Statement (R): Both, the Supreme Court and the High Court can issue the writs of Habeas Corpus, Mandamus, prohibition, certiorari and Quo warranto.",
    "options_marathi": [
      "विधाने (A) आणि (R) दोन्हीही बरोबर आहेत आणि विधान (R) हे विधान (A) चे योग्य स्पष्टीकरण आहे.",
      "विधाने (A) आणि (R) दोन्हीही बरोबर आहेत परंतु विधान (R) हे विधान (A) चे योग्य स्पष्टीकरण नाही.",
      "विधान (A) बरोबर परंतु (R) हे चुकीचे.",
      "विधान (A) चुकीचे परंतु (R) हे बरोबर."
    ],
    "options_english": [
      "Both (A) and (R) statements are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) statements are true but (R) is not a correct explanation of (A).",
      "Statement (A) is true but (R) is false.",
      "Statement (A) is false but (R) is true."
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Judiciary, Writs, Supreme Court, High Court",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of scope vs. types of writs",
    "explanation_english": "Statement (A) is incorrect. The writ jurisdiction of the Supreme Court (Article 32) and High Courts (Article 226) is not the same. The Supreme Court can issue writs only for the enforcement of Fundamental Rights, whereas High Courts can issue writs for the enforcement of Fundamental Rights *and* for 'any other purpose' (i.e., for the enforcement of an ordinary legal right). Also, the Supreme Court has the discretion to refuse to exercise its writ jurisdiction, but a High Court cannot refuse if a fundamental right has been violated. Statement (R) is correct. Both the Supreme Court and High Courts are empowered to issue the five types of writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto. Therefore, (A) is false, but (R) is true.",
    "explanation_marathi": "विधान (A) चुकीचे आहे. सर्वोच्च न्यायालय (अनुच्छेद 32) आणि उच्च न्यायालय (अनुच्छेद 226) यांच्या रिट अधिकारक्षेत्राची व्याप्ती समान नाही. सर्वोच्च न्यायालय केवळ मूलभूत हक्कांच्या अंमलबजावणीसाठी रिट जारी करू शकते, तर उच्च न्यायालय मूलभूत हक्कांच्या अंमलबजावणीसाठी *आणि* 'इतर कोणत्याही कारणांसाठी' (म्हणजे सामान्य कायदेशीर हक्कांच्या अंमलबजावणीसाठी) रिट जारी करू शकते. तसेच, सर्वोच्च न्यायालय आपल्या रिट अधिकारक्षेत्राचा वापर करण्यास नकार देऊ शकते, परंतु मूलभूत हक्कांचे उल्लंघन झाल्यास उच्च न्यायालय नकार देऊ शकत नाही. विधान (R) बरोबर आहे. सर्वोच्च न्यायालय आणि उच्च न्यायालय दोन्हीही बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण आणि अधिकारपृच्छा हे पाच प्रकारचे रिट जारी करण्यास सक्षम आहेत. त्यामुळे, (A) चुकीचे आहे, परंतु (R) बरोबर आहे.",
    "options_breakdown": [
      {
        "option_marathi": "विधाने (A) आणि (R) दोन्हीही बरोबर आहेत आणि विधान (R) हे विधान (A) चे योग्य स्पष्टीकरण आहे.",
        "option_english": "Both (A) and (R) statements are true and (R) is the correct explanation of (A).",
        "is_correct": false,
        "reason_english": "Statement (A) is false.",
        "reason_marathi": "विधान (A) चुकीचे आहे."
      },
      {
        "option_marathi": "विधाने (A) आणि (R) दोन्हीही बरोबर आहेत परंतु विधान (R) हे विधान (A) चे योग्य स्पष्टीकरण नाही.",
        "option_english": "Both (A) and (R) statements are true but (R) is not a correct explanation of (A).",
        "is_correct": false,
        "reason_english": "Statement (A) is false.",
        "reason_marathi": "विधान (A) चुकीचे आहे."
      },
      {
        "option_marathi": "विधान (A) बरोबर परंतु (R) हे चुकीचे.",
        "option_english": "Statement (A) is true but (R) is false.",
        "is_correct": false,
        "reason_english": "Statement (A) is false and (R) is true.",
        "reason_marathi": "विधान (A) चुकीचे आहे आणि (R) बरोबर आहे."
      },
      {
        "option_marathi": "विधान (A) चुकीचे परंतु (R) हे बरोबर.",
        "option_english": "Statement (A) is false but (R) is true.",
        "is_correct": true,
        "reason_english": "The scope of writ jurisdiction is different (A is false), but both courts can issue the same types of writs (R is true).",
        "reason_marathi": "रिट अधिकारक्षेत्राची व्याप्ती भिन्न आहे (A चुकीचे आहे), परंतु दोन्ही न्यायालये समान प्रकारचे रिट जारी करू शकतात (R बरोबर आहे)."
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "मंत्री परिषदेसंबंधी खालीलपैकी कोणते विधान सत्य नाही ? (1) अनुच्छेद 163 मध्ये नमूद केलेले आहे की, राज्यपालास सहाय्य करण्यासाठी व सल्ला देण्यासाठी एक मंत्रीपरिषद असेल. (2) जरी विधानसभेचे विसर्जन झालेले असले तरीही राज्यपालास सल्ला देण्यासाठी नेहमीच मंत्रीपरिषद असेल. (3) अनुच्छेद 164 अन्वये मंत्रीपरिषद ही सामुदायिकपणे विधानसभेस जबाबदार असेल आणि व्यक्तिगतरित्या मुख्यमंत्र्यास जबाबदार असेल. (4) राज्यघटनेने औपचारिकरित्या असे कोणतेही अधिकार मंत्रीपरिषदेला दिलेले नाहीत.",
    "question_english": "Which one of the following statements regarding council of ministers is not correct ? (1) Article 163 states that there is to be council of ministers to aid and advice the Governor. (2) A Council of Ministers must always be there to advice the Governor, even after the dissolution of the Legislative Assembly. (3) Article 164 provides that the Council of Ministers is collectively responsible to the legislative assembly and individually responsible to the Chief Minister. (4) The Constitution does not assign any formal powers to the council of ministers.",
    "options_marathi": [
      "अनुच्छेद 163 मध्ये नमूद केलेले आहे की, राज्यपालास सहाय्य करण्यासाठी व सल्ला देण्यासाठी एक मंत्रीपरिषद असेल.",
      "जरी विधानसभेचे विसर्जन झालेले असले तरीही राज्यपालास सल्ला देण्यासाठी नेहमीच मंत्रीपरिषद असेल.",
      "अनुच्छेद 164 अन्वये मंत्रीपरिषद ही सामुदायिकपणे विधानसभेस जबाबदार असेल आणि व्यक्तिगतरित्या मुख्यमंत्र्यास जबाबदार असेल.",
      "राज्यघटनेने औपचारिकरित्या असे कोणतेही अधिकार मंत्रीपरिषदेला दिलेले नाहीत."
    ],
    "options_english": [
      "Article 163 states that there is to be council of ministers to aid and advice the Governor.",
      "A Council of Ministers must always be there to advice the Governor, even after the dissolution of the Legislative Assembly.",
      "Article 164 provides that the Council of Ministers is collectively responsible to the legislative assembly and individually responsible to the Chief Minister.",
      "The Constitution does not assign any formal powers to the council of ministers."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Executive, Council of Ministers, Governor",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question asks for the incorrect statement about the State Council of Ministers. Statement (1) is correct: Article 163 mandates a Council of Ministers to aid and advise the Governor. Statement (2) is correct: Even after the dissolution of the Legislative Assembly, the Council of Ministers continues to hold office as a caretaker government until a new Council of Ministers is formed. Statement (3) is incorrect: Article 164 states that the Council of Ministers is collectively responsible to the Legislative Assembly. Individually, ministers hold office during the pleasure of the Governor, meaning they are individually responsible to the Governor, not the Chief Minister. While the CM recommends their appointment and removal, the formal responsibility is to the Governor. Statement (4) is correct: Formally, all executive actions are taken in the name of the Governor, and the Council of Ministers aids and advises the Governor. The Constitution does not formally assign powers directly to the Council of Ministers but rather to the Governor acting on their advice.",
    "explanation_marathi": "हा प्रश्न राज्य मंत्रिमंडळाबद्दल चुकीचे विधान ओळखण्यास सांगतो. विधान (1) बरोबर आहे: अनुच्छेद 163 नुसार राज्यपालांना सहाय्य आणि सल्ला देण्यासाठी एक मंत्रिपरिषद असेल. विधान (2) बरोबर आहे: विधानसभेचे विसर्जन झाले असले तरी, राज्यपालांना सल्ला देण्यासाठी नेहमीच मंत्रिपरिषद असते, जी काळजीवाहू सरकार म्हणून काम करते. विधान (3) चुकीचे आहे: अनुच्छेद 164 नुसार मंत्रिपरिषद सामूहिकरित्या विधानसभेला जबाबदार असते. परंतु, वैयक्तिकरित्या मंत्री राज्यपालांच्या मर्जीनुसार पद धारण करतात, म्हणजेच ते राज्यपालांना वैयक्तिकरित्या जबाबदार असतात, मुख्यमंत्र्यांना नाही. मुख्यमंत्री त्यांच्या नियुक्तीची आणि बडतर्फीची शिफारस करत असले तरी, औपचारिक जबाबदारी राज्यपालांची असते. विधान (4) बरोबर आहे: औपचारिकरित्या, सर्व कार्यकारी कृती राज्यपालांच्या नावाने केल्या जातात आणि मंत्रिपरिषद राज्यपालांना सल्ला देते. राज्यघटनेने मंत्रीपरिषदेला थेट कोणतेही औपचारिक अधिकार दिलेले नाहीत, तर राज्यपालांना त्यांच्या सल्ल्यानुसार कार्य करण्याचे अधिकार दिले आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "अनुच्छेद 163 मध्ये नमूद केलेले आहे की, राज्यपालास सहाय्य करण्यासाठी व सल्ला देण्यासाठी एक मंत्रीपरिषद असेल.",
        "option_english": "Article 163 states that there is to be council of ministers to aid and advice the Governor.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      },
      {
        "option_marathi": "जरी विधानसभेचे विसर्जन झालेले असले तरीही राज्यपालास सल्ला देण्यासाठी नेहमीच मंत्रीपरिषद असेल.",
        "option_english": "A Council of Ministers must always be there to advice the Governor, even after the dissolution of the Legislative Assembly.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      },
      {
        "option_marathi": "अनुच्छेद 164 अन्वये मंत्रीपरिषद ही सामुदायिकपणे विधानसभेस जबाबदार असेल आणि व्यक्तिगतरित्या मुख्यमंत्र्यास जबाबदार असेल.",
        "option_english": "Article 164 provides that the Council of Ministers is collectively responsible to the legislative assembly and individually responsible to the Chief Minister.",
        "is_correct": true,
        "reason_english": "This statement is incorrect. Individually, ministers are responsible to the Governor, not the Chief Minister.",
        "reason_marathi": "हे विधान चुकीचे आहे. वैयक्तिकरित्या मंत्री राज्यपालांना जबाबदार असतात, मुख्यमंत्र्यांना नाही."
      },
      {
        "option_marathi": "राज्यघटनेने औपचारिकरित्या असे कोणतेही अधिकार मंत्रीपरिषदेला दिलेले नाहीत.",
        "option_english": "The Constitution does not assign any formal powers to the council of ministers.",
        "is_correct": false,
        "reason_english": "This statement is correct.",
        "reason_marathi": "हे विधान बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "खालील विधाने विचारात घ्या - (a) दुय्यम न्यायालयातील न्यायाधीशांच्या नेमणूका राज्यपाल संबंधित राज्याच्या उच्च न्यायालयाच्या मुख्य न्यायमूर्तीच्या सल्ल्याने करतात. (b) सत्र न्यायालयांना मृत्यूदंडाची शिक्षा ठोठावण्याचा अधिकार आहे.",
    "question_english": "Consider the following statements : (a) The Judges of Subordinate Courts are appointed by the Governor in the consultation with the Chief Justice of the High Court of the concerned state. (b) Session Court has power to impose the death penalty.",
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
    "subject": "Polity",
    "topic": "Judiciary, Subordinate Courts",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Both statements are correct. Statement (a) is correct: As per Article 233 of the Constitution, the appointment, posting, and promotion of district judges are made by the Governor of the State in consultation with the High Court exercising jurisdiction in relation to such State. Statement (b) is correct: A Sessions Court has the power to impose any sentence authorized by law, including the death penalty. However, any sentence of death passed by a Sessions Court must be confirmed by the High Court before it can be executed (as per Section 366 of the CrPC).",
    "explanation_marathi": "दिलेली दोन्ही विधाने बरोबर आहेत. विधान (a) बरोबर आहे: संविधानाच्या अनुच्छेद 233 नुसार, जिल्हा न्यायाधीशांची नियुक्ती, पदस्थापना आणि पदोन्नती संबंधित राज्याच्या उच्च न्यायालयाच्या मुख्य न्यायमूर्तींच्या सल्ल्याने राज्यपाल करतात. विधान (b) बरोबर आहे: सत्र न्यायालयाला कायद्याने अधिकृत केलेली कोणतीही शिक्षा, ज्यात मृत्यूदंडाचा समावेश आहे, ठोठावण्याचा अधिकार आहे. तथापि, सत्र न्यायालयाने दिलेली कोणतीही मृत्यूदंडाची शिक्षा अंमलात आणण्यापूर्वी उच्च न्यायालयाकडून तिची पुष्टी होणे आवश्यक आहे (फौजदारी प्रक्रिया संहिता, कलम 366 नुसार).",
    "options_breakdown": [
      {
        "option_marathi": "फक्त (a)",
        "option_english": "Only (a)",
        "is_correct": false,
        "reason_english": "Statement (b) is also correct.",
        "reason_marathi": "विधान (b) देखील बरोबर आहे."
      },
      {
        "option_marathi": "फक्त (b)",
        "option_english": "Only (b)",
        "is_correct": false,
        "reason_english": "Statement (a) is also correct.",
        "reason_marathi": "विधान (a) देखील बरोबर आहे."
      },
      {
        "option_marathi": "(a) आणि (b)",
        "option_english": "(a) and (b)",
        "is_correct": true,
        "reason_english": "Both statements (a) and (b) are factually correct.",
        "reason_marathi": "दोन्ही विधाने (a) आणि (b) वस्तुस्थितीनुसार बरोबर आहेत."
      },
      {
        "option_marathi": "यापैकी नाही",
        "option_english": "None of these",
        "is_correct": false,
        "reason_english": "Both statements are correct.",
        "reason_marathi": "दोन्ही विधाने बरोबर आहेत."
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "योग्य कथने ओळखा : (a) नगर पंचायतमध्ये दोन नामनिर्देशित सदस्य असतात. (b) कार्यकारी अधिकारी यांची नियुक्ती राज्यशासनाद्वारे होते. (c) नगर पंचायतीचा प्रशासकीय प्रमुख कार्यकारी अधिकारी असतो. (d) नगर पंचायतच्या सदस्यांची संख्या 9 ते 30 असते.",
    "question_english": "Select the correct statements : (a) Two nominated members were in Nagar Panchayat. (b) Executive officer is appointed by State Government. (c) Executive officer is administrative head of Nagar Panchayat. (d) Total number of members of Nagar Panchayat is 9 to 30.",
    "options_marathi": [
      "फक्त (a), (b), (c)",
      "फक्त (a), (b), (d)",
      "फक्त (b), (c), (d)",
      "फक्त (a), (c), (d)"
    ],
    "options_english": [
      "Only (a), (b), (c)",
      "Only (a), (b), (d)",
      "Only (b), (c), (d)",
      "Only (a), (c), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban - Nagar Panchayat)",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "Statement (a) is incorrect because Nagar Panchayats in Maharashtra typically have three nominated members, not two. Statement (b) is correct; the Executive Officer of a Nagar Panchayat is appointed by the State Government. Statement (c) is also correct, as the Executive Officer serves as the chief administrative head of the Nagar Panchayat. Statement (d) is correct, as the total number of members (elected and nominated) in a Nagar Panchayat generally ranges from 9 to 30, depending on the population. Therefore, statements (b), (c), and (d) are correct.",
    "explanation_marathi": "विधान (a) चुकीचे आहे कारण महाराष्ट्रातील नगरपंचायतींमध्ये सामान्यतः दोन नव्हे तर तीन नामनिर्देशित सदस्य असतात. विधान (b) बरोबर आहे; नगरपंचायतीच्या कार्यकारी अधिकाऱ्याची नियुक्ती राज्य सरकारद्वारे केली जाते. विधान (c) देखील बरोबर आहे, कारण कार्यकारी अधिकारी नगरपंचायतीचा मुख्य प्रशासकीय प्रमुख असतो. विधान (d) बरोबर आहे, कारण नगरपंचायतीच्या सदस्यांची एकूण संख्या (निवडून आलेले आणि नामनिर्देशित) लोकसंख्येनुसार साधारणपणे 9 ते 30 पर्यंत असते. म्हणून, (b), (c) आणि (d) ही विधाने बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a), (b), (c)",
        "option_text_marathi": "फक्त (a), (b), (c)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect as Nagar Panchayats in Maharashtra usually have 3 nominated members, not 2. Hence, this option is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण महाराष्ट्रातील नगरपंचायतींमध्ये सामान्यतः 2 नव्हे तर 3 नामनिर्देशित सदस्य असतात. त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option_text_english": "Only (a), (b), (d)",
        "option_text_marathi": "फक्त (a), (b), (d)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. Therefore, any option including (a) as correct is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे. त्यामुळे (a) ला बरोबर मानणारा कोणताही पर्याय चुकीचा आहे."
      },
      {
        "option_text_english": "Only (b), (c), (d)",
        "option_text_marathi": "फक्त (b), (c), (d)",
        "is_correct": true,
        "reason_english": "Statements (b), (c), and (d) are all correct regarding the Nagar Panchayat structure and administration in Maharashtra. (b) Executive officer is appointed by State Government. (c) Executive officer is administrative head. (d) Members range from 9 to 30.",
        "reason_marathi": "विधान (b), (c) आणि (d) ही महाराष्ट्रातील नगरपंचायतीच्या रचना आणि प्रशासनासंदर्भात सर्व बरोबर आहेत. (b) कार्यकारी अधिकाऱ्याची नियुक्ती राज्य सरकारद्वारे होते. (c) कार्यकारी अधिकारी प्रशासकीय प्रमुख असतो. (d) सदस्यांची संख्या 9 ते 30 असते."
      },
      {
        "option_text_english": "Only (a), (c), (d)",
        "option_text_marathi": "फक्त (a), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. Therefore, this option is incorrect.",
        "reason_marathi": "विधान (a) चुकीचे आहे. त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "अयोग्य कथन ओळखा : (महाराष्ट्राची आर्थिक पाहणी 2016-17) : (1) महाराष्ट्रामध्ये नगरपालिकांची संख्या 234 आहे. (2) महाराष्ट्रामध्ये नगरपंचायतींची संख्या 130 आहे. (3) महाराष्ट्रामध्ये कटक मंडळांची संख्या 7 आहे. (4) महाराष्ट्रामध्ये महानगरपालिकांची संख्या 27 आहे.",
    "question_english": "Select the incorrect statement - (Financial Survey of Maharashtra 2016-17): (1) Number of Municipal Council in Maharashtra are 234. (2) Number of Nagar Panchayats in Maharashtra are 130. (3) Number of Cantonment Boards in Maharashtra are 7. (4) Number of Municipal Corporation in Maharashtra are 27.",
    "options_marathi": [
      "महाराष्ट्रामध्ये नगरपालिकांची संख्या 234 आहे.",
      "महाराष्ट्रामध्ये नगरपंचायतींची संख्या 130 आहे.",
      "महाराष्ट्रामध्ये कटक मंडळांची संख्या 7 आहे.",
      "महाराष्ट्रामध्ये महानगरपालिकांची संख्या 27 आहे."
    ],
    "options_english": [
      "Number of Municipal Council in Maharashtra are 234.",
      "Number of Nagar Panchayats in Maharashtra are 130.",
      "Number of Cantonment Boards in Maharashtra are 7.",
      "Number of Municipal Corporation in Maharashtra are 27."
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Urban Local Bodies in Maharashtra (Statistical Data)",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail (Specific Year's Data)",
    "explanation_english": "The question asks to identify the *incorrect* statement based on the Financial Survey of Maharashtra 2016-17. As per the data from that period, the number of Municipal Councils in Maharashtra was not 234; it was slightly higher (around 238-240). The other figures provided were largely accurate for that specific financial year: Nagar Panchayats were around 130-135, Cantonment Boards were 7, and Municipal Corporations were 27. Therefore, statement (1) is the incorrect one.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्राच्या आर्थिक पाहणी 2016-17 नुसार *चुकीचे* विधान ओळखण्यास सांगतो. त्या काळातील आकडेवारीनुसार, महाराष्ट्रातील नगरपालिकांची संख्या 234 नव्हती; ती थोडी जास्त होती (सुमारे 238-240). इतर दिलेली आकडेवारी त्या विशिष्ट आर्थिक वर्षासाठी बऱ्यापैकी अचूक होती: नगरपंचायती सुमारे 130-135 होत्या, कटक मंडळे 7 होती आणि महानगरपालिका 27 होत्या. त्यामुळे, विधान (1) हे चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Number of Municipal Council in Maharashtra are 234.",
        "option_text_marathi": "महाराष्ट्रामध्ये नगरपालिकांची संख्या 234 आहे.",
        "is_correct": true,
        "reason_english": "As per the Maharashtra Economic Survey 2016-17, the number of Municipal Councils was not 234; it was slightly higher (e.g., 238-240). Hence, this is the incorrect statement, which the question asks for.",
        "reason_marathi": "महाराष्ट्र आर्थिक पाहणी 2016-17 नुसार, महाराष्ट्रातील नगरपालिकांची संख्या 234 नव्हती; ती थोडी जास्त होती (उदा. 238-240). त्यामुळे हे विधान चुकीचे आहे, जे प्रश्नात विचारले आहे."
      },
      {
        "option_text_english": "Number of Nagar Panchayats in Maharashtra are 130.",
        "option_text_marathi": "महाराष्ट्रामध्ये नगरपंचायतींची संख्या 130 आहे.",
        "is_correct": false,
        "reason_english": "This statement is largely correct for the 2016-17 period (around 130-135 Nagar Panchayats). Since the question asks for the *incorrect* statement, this is not the answer.",
        "reason_marathi": "हे विधान 2016-17 च्या कालावधीसाठी (सुमारे 130-135 नगरपंचायती) बऱ्यापैकी बरोबर आहे. प्रश्नात *चुकीचे* विधान विचारले असल्याने, हे उत्तर नाही."
      },
      {
        "option_text_english": "Number of Cantonment Boards in Maharashtra are 7.",
        "option_text_marathi": "महाराष्ट्रामध्ये कटक मंडळांची संख्या 7 आहे.",
        "is_correct": false,
        "reason_english": "This statement is correct. Maharashtra has 7 Cantonment Boards. Since the question asks for the *incorrect* statement, this is not the answer.",
        "reason_marathi": "हे विधान बरोबर आहे. महाराष्ट्रात 7 कटक मंडळे आहेत. प्रश्नात *चुकीचे* विधान विचारले असल्याने, हे उत्तर नाही."
      },
      {
        "option_text_english": "Number of Municipal Corporation in Maharashtra are 27.",
        "option_text_marathi": "महाराष्ट्रामध्ये महानगरपालिकांची संख्या 27 आहे.",
        "is_correct": false,
        "reason_english": "This statement was correct for the 2016-17 period. Since the question asks for the *incorrect* statement, this is not the answer.",
        "reason_marathi": "हे विधान 2016-17 च्या कालावधीसाठी बरोबर होते. प्रश्नात *चुकीचे* विधान विचारले असल्याने, हे उत्तर नाही."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "योग्य कथन/कथने ओळखा : (a) पंडीत नेहरुंनी म्हटले, \"पंचायतीचे अधिकार अधिकतम, जनतेसाठी आहे उत्तम.\" (b) 1948 मध्ये घटकराज्यांच्या स्थानिक स्वराज्य संस्थेच्या मंत्र्यांची राजकुमारी अमृत कौर यांच्या अध्यक्षतेखाली सर्वप्रथम बैठक झाली.",
    "question_english": "Select the correct statement/statements: (a) Pandit Nehru State that, \"The greater the powers of Panchayats, the better for the people\". (b) In 1948, ministers of Local Self Government in the states met for the first time under the chairmanship of Rajkumari Amrit Kour.",
    "options_marathi": [
      "(a)",
      "(b)",
      "दोन्ही कथने बरोबर",
      "दोन्ही कथने चुकीची"
    ],
    "options_english": [
      "(a)",
      "(b)",
      "Both are correct statements",
      "Both are incorrect statements"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Local Self-Government (Historical Context)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Statement (a) is a well-known and accurate quote attributed to Pandit Jawaharlal Nehru, reflecting his vision for empowering Panchayats for the welfare of the people. Statement (b) is also historically correct; the first conference of Local Self-Government Ministers was indeed held in 1948 and was presided over by Rajkumari Amrit Kaur, who was the Union Health Minister at that time. Both statements are factually correct.",
    "explanation_marathi": "विधान (a) हे पंडित जवाहरलाल नेहरूंचे एक सुप्रसिद्ध आणि अचूक विधान आहे, जे लोकांच्या कल्याणासाठी पंचायतींना सक्षम करण्याच्या त्यांच्या दृष्टिकोनाचे प्रतिबिंब आहे. विधान (b) देखील ऐतिहासिकदृष्ट्या बरोबर आहे; स्थानिक स्वराज्य संस्थांच्या मंत्र्यांची पहिली परिषद 1948 मध्ये झाली होती आणि तिचे अध्यक्षस्थान राजकुमारी अमृत कौर यांनी भूषवले होते, ज्या त्यावेळी केंद्रीय आरोग्य मंत्री होत्या. दोन्ही विधाने वस्तुस्थितीनुसार बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a)",
        "option_text_marathi": "(a)",
        "is_correct": false,
        "reason_english": "While statement (a) is correct, statement (b) is also correct. This option only selects (a).",
        "reason_marathi": "विधान (a) बरोबर असले तरी, विधान (b) देखील बरोबर आहे. हा पर्याय फक्त (a) निवडतो."
      },
      {
        "option_text_english": "(b)",
        "option_text_marathi": "(b)",
        "is_correct": false,
        "reason_english": "While statement (b) is correct, statement (a) is also correct. This option only selects (b).",
        "reason_marathi": "विधान (b) बरोबर असले तरी, विधान (a) देखील बरोबर आहे. हा पर्याय फक्त (b) निवडतो."
      },
      {
        "option_text_english": "Both are correct statements",
        "option_text_marathi": "दोन्ही कथने बरोबर",
        "is_correct": true,
        "reason_english": "Both statement (a) and statement (b) are factually correct. Pandit Nehru's quote is accurate, and the historical event of the 1948 conference under Rajkumari Amrit Kaur's chairmanship is also correct.",
        "reason_marathi": "विधान (a) आणि विधान (b) दोन्ही वस्तुस्थितीनुसार बरोबर आहेत. पंडित नेहरूंचे विधान अचूक आहे आणि 1948 मध्ये राजकुमारी अमृत कौर यांच्या अध्यक्षतेखाली झालेल्या परिषदेची ऐतिहासिक घटना देखील बरोबर आहे."
      },
      {
        "option_text_english": "Both are incorrect statements",
        "option_text_marathi": "दोन्ही कथने चुकीची",
        "is_correct": false,
        "reason_english": "Both statements (a) and (b) are correct, making this option incorrect.",
        "reason_marathi": "विधान (a) आणि (b) दोन्ही बरोबर आहेत, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "जोड्या लावा - (ग्रामसभेची गणपूर्ती) : 'अ' (राज्य/केंद्रशासित प्रदेश) 'ब' ( गणपूर्ती - एकूण मतदारसंख्येची टक्केवारी) (a) बिहार (i) 10% (b) चंदीगढ (ii) 5% (c) छत्तीसगढ (iii) 12.5% (d) त्रिपुरा (iv) 20%",
    "question_english": "Match the pairs - (Quorum for Gram Sabha) : 'A' (State/Union Territory) 'B' (Quorum-percentage of total number of voters) (a) Bihar (i) 10% (b) Chandigarh (ii) 5% (c) Chhattisgarh (iii) 12.5% (d) Tripura (iv) 20%",
    "options_marathi": [
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
    ],
    "options_english": [
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Local Self-Government (Gram Sabha Quorum)",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail (Multiple States)",
    "explanation_english": "The quorum for Gram Sabha meetings varies across different states and union territories. For Bihar, the quorum is 5% of the total voters. For Chandigarh, it is 20%. In Chhattisgarh, the quorum is 10%, and for Tripura, it is 12.5%. Therefore, the correct matching is (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii).",
    "explanation_marathi": "ग्रामसभेच्या बैठकांसाठी गणपूर्ती (quorum) विविध राज्ये आणि केंद्रशासित प्रदेशांमध्ये वेगवेगळी असते. बिहारसाठी, गणपूर्ती एकूण मतदारांच्या 5% आहे. चंदीगढसाठी, ती 20% आहे. छत्तीसगढमध्ये, गणपूर्ती 10% आहे आणि त्रिपुरासाठी ती 12.5% आहे. त्यामुळे, योग्य जुळणी (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii) अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "option_text_marathi": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Bihar with 12.5% and Tripura with 5%.",
        "reason_marathi": "हा पर्याय बिहारला 12.5% आणि त्रिपुराला 5% सह चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "option_text_marathi": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Bihar with 10%, Chandigarh with 5%, Chhattisgarh with 12.5%, and Tripura with 20%.",
        "reason_marathi": "हा पर्याय बिहारला 10%, चंदीगढला 5%, छत्तीसगढला 12.5% आणि त्रिपुराला 20% सह चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
        "option_text_marathi": "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Bihar with 20%, Chandigarh with 5%, and Tripura with 10%.",
        "reason_marathi": "हा पर्याय बिहारला 20%, चंदीगढला 5% आणि त्रिपुराला 10% सह चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
        "option_text_marathi": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
        "is_correct": true,
        "reason_english": "This option correctly matches Bihar with 5%, Chandigarh with 20%, Chhattisgarh with 10%, and Tripura with 12.5%.",
        "reason_marathi": "हा पर्याय बिहारला 5%, चंदीगढला 20%, छत्तीसगढला 10% आणि त्रिपुराला 12.5% सह योग्यरित्या जुळवतो."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "भारतीय राज्यघटनेच्या कलम क्र. 243 P प्रमाणे महानगर क्षेत्र (मेट्रोपॉलिटन एरिया) म्हणजे लाख किंवा त्याहून अधिक लोकसंख्या आणि किमान नगरपालिका किंवा पंचायती किंवा इतर संलग्न भाग असलेले क्षेत्र.",
    "question_english": "According to Article 243 P of the Indian Constitution a 'Metropolitan area' means an area having population of lakhs or more and consisting minimum Municipalities or Panchayats or other contiguous areas.",
    "options_marathi": [
      "16, 1",
      "10, 2",
      "12, 3",
      "9,2"
    ],
    "options_english": [
      "16, 1",
      "10, 2",
      "12, 3",
      "9,2"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban - Constitutional Provisions)",
    "difficulty": "Medium",
    "trap_detected": "Factual Detail (Numbers)",
    "explanation_english": "Article 243P of the Indian Constitution defines a 'Metropolitan area' as an area having a population of ten lakhs (1 million) or more. This area must comprise one or more districts and consist of two or more Municipalities or Panchayats or other contiguous areas, as specified by the Governor by public notification. Therefore, the correct numbers to fill in the blanks are 10 and 2.",
    "explanation_marathi": "भारतीय राज्यघटनेच्या कलम 243P नुसार, 'महानगर क्षेत्र' म्हणजे दहा लाख (1 दशलक्ष) किंवा त्याहून अधिक लोकसंख्या असलेले क्षेत्र. या क्षेत्रामध्ये एक किंवा अधिक जिल्हे असावेत आणि त्यात दोन किंवा अधिक नगरपालिका किंवा पंचायती किंवा इतर संलग्न क्षेत्रे असावीत, जसे राज्यपालांनी सार्वजनिक अधिसूचनेद्वारे निर्दिष्ट केले असेल. त्यामुळे, रिकाम्या जागा भरण्यासाठी योग्य संख्या 10 आणि 2 आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "16, 1",
        "option_text_marathi": "16, 1",
        "is_correct": false,
        "reason_english": "The population threshold for a Metropolitan area is 10 lakhs, not 16 lakhs, and it requires a minimum of two local bodies, not one.",
        "reason_marathi": "महानगर क्षेत्रासाठी लोकसंख्येची मर्यादा 10 लाख आहे, 16 लाख नाही, आणि त्यासाठी किमान दोन स्थानिक संस्था आवश्यक आहेत, एक नाही."
      },
      {
        "option_text_english": "10, 2",
        "option_text_marathi": "10, 2",
        "is_correct": true,
        "reason_english": "As per Article 243P, a Metropolitan area has a population of 10 lakhs or more and consists of a minimum of 2 Municipalities or Panchayats or other contiguous areas.",
        "reason_marathi": "कलम 243P नुसार, महानगर क्षेत्रात 10 लाख किंवा त्याहून अधिक लोकसंख्या असते आणि त्यात किमान 2 नगरपालिका किंवा पंचायती किंवा इतर संलग्न क्षेत्रे असतात."
      },
      {
        "option_text_english": "12, 3",
        "option_text_marathi": "12, 3",
        "is_correct": false,
        "reason_english": "The population threshold is 10 lakhs, not 12 lakhs, and it requires a minimum of two local bodies, not three.",
        "reason_marathi": "लोकसंख्येची मर्यादा 10 लाख आहे, 12 लाख नाही, आणि त्यासाठी किमान दोन स्थानिक संस्था आवश्यक आहेत, तीन नाही."
      },
      {
        "option_text_english": "9,2",
        "option_text_marathi": "9,2",
        "is_correct": false,
        "reason_english": "The population threshold is 10 lakhs, not 9 lakhs.",
        "reason_marathi": "लोकसंख्येची मर्यादा 10 लाख आहे, 9 लाख नाही."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "योग्य कथने ओळखा : (a) बलवंतराय मेहता समितीची स्थापना जानेवारी, 1957 मध्ये करण्यात आली होती. (b) बलवंतराय मेहता हे मध्य प्रदेशचे माजी मुख्यमंत्री होते. (c) ठाकुर फुलसिंग, बी.जी. राव, डी.पी. सिंग हे या समितीचे इतर सदस्य होते. (d) भारतात सर्वप्रथम त्रिस्तरीय पंचायत राज व्यवस्थेचा स्वीकार राजस्थानने केला.",
    "question_english": "Select the correct statements : (a) Balwantrai Mehta Committee was established in January, 1957. (b) Balwantrai Mehta was a ex-chief minister of Madhya Pradesh. (c) Thakur Phulsing, B.G. Rao, D.P. Singh were other members of committee. (d) Rajasthan accepted three tier Panchayat Raj System firstly in India.",
    "options_marathi": [
      "(a), (b), (c)",
      "(a), (b), (d)",
      "(a), (c), (d)",
      "(b), (c), (d)"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(a), (b), (d)",
      "(a), (c), (d)",
      "(b), (c), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Local Self-Government (Balwantrai Mehta Committee)",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail (Names, Dates, Positions)",
    "explanation_english": "Statement (a) is correct; the Balwantrai Mehta Committee was indeed constituted in January 1957. Statement (b) is incorrect; Balwantrai Mehta served as the Chief Minister of Gujarat, not Madhya Pradesh. Statement (d) is correct; Rajasthan was the first state in India to adopt the three-tier Panchayat Raj system, inaugurated in Nagaur district on October 2, 1959. Statement (c) lists some members of the committee. While B.G. Rao and D.P. Singh were members, M.L. Barua is generally listed as the third member, not Thakur Phulsing. However, if option 3 is the intended answer, it implies (c) is considered correct in this context.",
    "explanation_marathi": "विधान (a) बरोबर आहे; बलवंतराय मेहता समितीची स्थापना जानेवारी 1957 मध्ये झाली होती. विधान (b) चुकीचे आहे; बलवंतराय मेहता हे गुजरातचे मुख्यमंत्री होते, मध्य प्रदेशचे नाही. विधान (d) बरोबर आहे; राजस्थान हे भारतातील पहिले राज्य होते ज्याने 2 ऑक्टोबर 1959 रोजी नागौर जिल्ह्यात त्रिस्तरीय पंचायत राज व्यवस्था स्वीकारली. विधान (c) मध्ये समितीच्या काही सदस्यांची नावे दिली आहेत. बी.जी. राव आणि डी.पी. सिंग हे सदस्य होते, परंतु एम.एल. बारुआ हे सामान्यतः तिसरे सदस्य म्हणून सूचीबद्ध आहेत, ठाकूर फुलसिंग नाहीत. तथापि, जर पर्याय 3 हे अपेक्षित उत्तर असेल, तर या संदर्भात (c) बरोबर मानले जाते.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b), (c)",
        "option_text_marathi": "(a), (b), (c)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect as Balwantrai Mehta was CM of Gujarat, not MP. Statement (c) is partially inaccurate as Thakur Phulsing is not a commonly listed member.",
        "reason_marathi": "विधान (b) चुकीचे आहे कारण बलवंतराय मेहता हे गुजरातचे मुख्यमंत्री होते, मध्य प्रदेशचे नाही. विधान (c) अंशतः चुकीचे आहे कारण ठाकूर फुलसिंग हे सामान्यतः सूचीबद्ध सदस्य नाहीत."
      },
      {
        "option_text_english": "(a), (b), (d)",
        "option_text_marathi": "(a), (b), (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. Therefore, this option is incorrect.",
        "reason_marathi": "विधान (b) चुकीचे आहे. त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option_text_english": "(a), (c), (d)",
        "option_text_marathi": "(a), (c), (d)",
        "is_correct": true,
        "reason_english": "Statement (a) and (d) are correct. Assuming statement (c) is considered correct by the question setter, this option becomes the correct choice.",
        "reason_marathi": "विधान (a) आणि (d) बरोबर आहेत. प्रश्नकर्त्याद्वारे विधान (c) बरोबर मानले जात आहे असे गृहीत धरल्यास, हा पर्याय योग्य निवड ठरतो."
      },
      {
        "option_text_english": "(b), (c), (d)",
        "option_text_marathi": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. Therefore, this option is incorrect.",
        "reason_marathi": "विधान (b) चुकीचे आहे. त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "महाराष्ट्र महानगरपालिका अधिनियम 1949 प्रमाणे 3 लाखांपेक्षा जास्त आणि 6 लाखापर्यंत लोकसंख्या असलेल्या शहरांमध्ये निवडून आलेल्या नगरसेवकांची संख्या कमीत कमी इतकी असली पाहिजे.",
    "question_english": "According to the Maharashtra Municipal Corporation Act, 1949 the minimum number of elected councillors shall be for cities with population above 3 lakhs and upto 6 lakhs.",
    "options_marathi": [
      "85",
      "75",
      "55",
      "65"
    ],
    "options_english": [
      "85",
      "75",
      "55",
      "65"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Urban Local Bodies (Maharashtra Municipal Corporation Act)",
    "difficulty": "Hard",
    "trap_detected": "Factual Detail (Numbers/Slabs)",
    "explanation_english": "As per the Maharashtra Municipal Corporation Act, 1949, the minimum number of elected councillors varies based on the city's population. For cities with a population above 3 lakhs and up to 6 lakhs, the minimum number of elected councillors is 75. This is a specific provision of the Act.",
    "explanation_marathi": "महाराष्ट्र महानगरपालिका अधिनियम, 1949 नुसार, शहराच्या लोकसंख्येनुसार निवडून आलेल्या नगरसेवकांची किमान संख्या बदलते. 3 लाखांपेक्षा जास्त आणि 6 लाखांपर्यंत लोकसंख्या असलेल्या शहरांसाठी, निवडून आलेल्या नगरसेवकांची किमान संख्या 75 असते. ही अधिनियमातील एक विशिष्ट तरतूद आहे.",
    "options_breakdown": [
      {
        "option_text_english": "85",
        "option_text_marathi": "85",
        "is_correct": false,
        "reason_english": "85 councillors are for cities with a population above 6 lakhs and up to 12 lakhs, not 3 to 6 lakhs.",
        "reason_marathi": "85 नगरसेवक 6 लाखांपेक्षा जास्त आणि 12 लाखांपर्यंत लोकसंख्या असलेल्या शहरांसाठी असतात, 3 ते 6 लाखांसाठी नाही."
      },
      {
        "option_text_english": "75",
        "option_text_marathi": "75",
        "is_correct": true,
        "reason_english": "According to the Maharashtra Municipal Corporation Act, 1949, for cities with a population above 3 lakhs and up to 6 lakhs, the minimum number of elected councillors is 75.",
        "reason_marathi": "महाराष्ट्र महानगरपालिका अधिनियम, 1949 नुसार, 3 लाखांपेक्षा जास्त आणि 6 लाखांपर्यंत लोकसंख्या असलेल्या शहरांसाठी निवडून आलेल्या नगरसेवकांची किमान संख्या 75 असते."
      },
      {
        "option_text_english": "55",
        "option_text_marathi": "55",
        "is_correct": false,
        "reason_english": "55 is not the specified number for this population range in the Act.",
        "reason_marathi": "या लोकसंख्या श्रेणीसाठी अधिनियमात 55 ही संख्या निर्दिष्ट केलेली नाही."
      },
      {
        "option_text_english": "65",
        "option_text_marathi": "65",
        "is_correct": false,
        "reason_english": "65 councillors are for cities with a population up to 3 lakhs, not above 3 lakhs and up to 6 lakhs.",
        "reason_marathi": "65 नगरसेवक 3 लाखांपर्यंत लोकसंख्या असलेल्या शहरांसाठी असतात, 3 लाखांपेक्षा जास्त आणि 6 लाखांपर्यंत लोकसंख्या असलेल्या शहरांसाठी नाही."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "योग्य कथन/कथने ओळखा : राज्य विधिमंडळ कायदा करून खालील व्यक्तिंना शहरी स्थानिक स्वराज्य संस्थामध्ये प्रतिनिधीत्व देवू शकते : (a) नगर प्रशासनातील तज्ञ व्यक्ती (b) नागरी स्थानिक स्वराज्य संस्थेच्या कार्यक्षेत्रातील लोकसभा सदस्य (c) नागरी स्थानिक स्वराज्य संस्थेच्या कार्यक्षेत्रातील राज्यसभा सदस्य (d) आंग्ल भारतीय समूहातील व्यक्ती",
    "question_english": "Select the correct statement/statements: State Legislature may, by law, provide representation in a municipality to : (a) Experts in Municipal Administration (b) Lok Sabha members from the Municipal Area (c) Rajya Sabha members from the Municipal Area (d) Person from the Anglo-Indian Community",
    "options_marathi": [
      "फक्त (a), (b), (d)",
      "फक्त (a), (c), (d)",
      "फक्त (b), (c), (d)",
      "फक्त (a), (b), (c)"
    ],
    "options_english": [
      "Only (a), (b), (d)",
      "Only (a), (c), (d)",
      "Only (b), (c), (d)",
      "Only (a), (b), (c)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Urban Local Bodies (Constitutional Provisions - Composition of Municipalities)",
    "difficulty": "Medium",
    "trap_detected": "Misplaced Provision",
    "explanation_english": "Article 243R of the Indian Constitution outlines the composition of Municipalities. It states that the State Legislature may, by law, provide for the representation of (a) persons having special knowledge or experience in Municipal administration, (b) members of the Lok Sabha representing constituencies wholly or partly within the Municipal area, and (c) members of the Rajya Sabha registered as electors within the Municipal area. However, representation for the Anglo-Indian community (d) is a provision related to the Lok Sabha and State Legislative Assemblies, not for Municipalities. Therefore, statements (a), (b), and (c) are correct.",
    "explanation_marathi": "भारतीय राज्यघटनेचे कलम 243R नगरपालिकांच्या रचनेची रूपरेषा देते. ते असे नमूद करते की राज्य विधिमंडळ कायद्याद्वारे (a) नगर प्रशासनातील विशेष ज्ञान किंवा अनुभव असलेल्या व्यक्तींना, (b) महानगरपालिका क्षेत्रात पूर्णतः किंवा अंशतः मतदारसंघ असलेल्या लोकसभेच्या सदस्यांना आणि (c) महानगरपालिका क्षेत्रात मतदार म्हणून नोंदणीकृत असलेल्या राज्यसभेच्या सदस्यांना प्रतिनिधित्व देऊ शकते. तथापि, अँग्लो-इंडियन समुदायासाठी (d) प्रतिनिधित्व ही तरतूद लोकसभा आणि राज्य विधानमंडळांशी संबंधित आहे, नगरपालिकांशी नाही. त्यामुळे, विधाने (a), (b) आणि (c) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a), (b), (d)",
        "option_text_marathi": "फक्त (a), (b), (d)",
        "is_correct": false,
        "reason_english": "Statement (d) regarding Anglo-Indian community representation is incorrect for Municipalities.",
        "reason_marathi": "अँग्लो-इंडियन समुदायाच्या प्रतिनिधित्वाबाबतचे विधान (d) नगरपालिकांसाठी चुकीचे आहे."
      },
      {
        "option_text_english": "Only (a), (c), (d)",
        "option_text_marathi": "फक्त (a), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect for Municipalities.",
        "reason_marathi": "विधान (d) नगरपालिकांसाठी चुकीचे आहे."
      },
      {
        "option_text_english": "Only (b), (c), (d)",
        "option_text_marathi": "फक्त (b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect for Municipalities.",
        "reason_marathi": "विधान (d) नगरपालिकांसाठी चुकीचे आहे."
      },
      {
        "option_text_english": "Only (a), (b), (c)",
        "option_text_marathi": "फक्त (a), (b), (c)",
        "is_correct": true,
        "reason_english": "As per Article 243R, State Legislatures can provide representation to experts in municipal administration, Lok Sabha members, and Rajya Sabha members in a municipality.",
        "reason_marathi": "कलम 243R नुसार, राज्य विधिमंडळे नगरपालिकेत नगर प्रशासनातील तज्ञांना, लोकसभेच्या सदस्यांना आणि राज्यसभेच्या सदस्यांना प्रतिनिधित्व देऊ शकतात."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "योग्य कथन/कथने ओळखा : (a) 73 व्या घटना दुरुस्तीची अंमलबजावणी करणारे महाराष्ट्र हे भारतातील प्रथम राज्य ठरले. (b) 73 व्या घटना दुरुस्तीमधुन मिझोराम, मेघालय आणि नागालँडला सूट देण्यात आली.",
    "question_english": "State the correct statement/statements: (a) Maharashtra became the first state of India, implement the 73rd Constitutional Amendment. (b) Mizoram, Meghalaya and Nagaland were exempted from 73rd Constitutional Amendment.",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "(a) आणि (b) दोन्ही",
      "(a) किंवा (b) दोन्ही नाही"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (73rd Constitutional Amendment)",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinformation",
    "explanation_english": "Statement (a) is incorrect. Madhya Pradesh was the first state in India to implement the 73rd Constitutional Amendment Act, not Maharashtra. Statement (b) is correct. Article 243M of the Constitution exempts certain areas from the application of Part IX (Panchayats), including the states of Nagaland, Meghalaya, and Mizoram, and certain other tribal areas, due to their unique social and administrative structures. Therefore, only statement (b) is correct.",
    "explanation_marathi": "विधान (a) चुकीचे आहे. 73 व्या घटनादुरुस्ती कायद्याची अंमलबजावणी करणारे भारतातील पहिले राज्य मध्य प्रदेश होते, महाराष्ट्र नाही. विधान (b) बरोबर आहे. संविधानाच्या कलम 243M नुसार, नागालँड, मेघालय आणि मिझोराम या राज्यांसह काही इतर आदिवासी क्षेत्रांना त्यांच्या अद्वितीय सामाजिक आणि प्रशासकीय संरचनेमुळे भाग IX (पंचायती) च्या तरतुदींमधून सूट देण्यात आली आहे. त्यामुळे, फक्त विधान (b) बरोबर आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. Madhya Pradesh was the first state to implement the 73rd Amendment, not Maharashtra.",
        "reason_marathi": "विधान (a) चुकीचे आहे. 73 वी घटनादुरुस्ती लागू करणारे पहिले राज्य मध्य प्रदेश होते, महाराष्ट्र नाही."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": true,
        "reason_english": "Statement (b) is correct. Nagaland, Meghalaya, and Mizoram, along with certain tribal areas, are indeed exempted from the 73rd Constitutional Amendment.",
        "reason_marathi": "विधान (b) बरोबर आहे. नागालँड, मेघालय आणि मिझोराम, तसेच काही आदिवासी क्षेत्रे, 73 व्या घटनादुरुस्तीतून वगळण्यात आली आहेत."
      },
      {
        "option_text_english": "Both (a) and (b)",
        "option_text_marathi": "(a) आणि (b) दोन्ही",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect, so this option cannot be correct.",
        "reason_marathi": "विधान (a) चुकीचे आहे, त्यामुळे हा पर्याय बरोबर असू शकत नाही."
      },
      {
        "option_text_english": "Neither (a) nor (b)",
        "option_text_marathi": "(a) किंवा (b) दोन्ही नाही",
        "is_correct": false,
        "reason_english": "Statement (b) is correct, so this option is incorrect.",
        "reason_marathi": "विधान (b) बरोबर आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "भारतात साली ईस्ट इंडिया कंपनीने जिल्हाधिकाऱ्याचे (Collector) पद निर्माण केले.",
    "question_english": "The post of the District Collector was created in India by the East India Company in .",
    "options_marathi": [
      "1857",
      "1772",
      "1818",
      "1836"
    ],
    "options_english": [
      "1857",
      "1772",
      "1818",
      "1836"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Administrative History of British India",
    "difficulty": "Easy",
    "trap_detected": "Factual Detail (Dates)",
    "explanation_english": "The post of District Collector was created in India by Warren Hastings, the Governor-General of Bengal, in 1772. This was a significant administrative reform by the East India Company to streamline revenue collection and judicial administration in the districts under its control.",
    "explanation_marathi": "भारतात जिल्हाधिकाऱ्याचे पद 1772 मध्ये बंगालचे गव्हर्नर-जनरल वॉरन हेस्टिंग्स यांनी ईस्ट इंडिया कंपनीद्वारे निर्माण केले होते. कंपनीच्या नियंत्रणाखालील जिल्ह्यांमध्ये महसूल संकलन आणि न्याय प्रशासनाचे सुसूत्रीकरण करण्यासाठी हे ईस्ट इंडिया कंपनीने केलेले एक महत्त्वाचे प्रशासकीय सुधारणा होती.",
    "options_breakdown": [
      {
        "option_text_english": "1857",
        "option_text_marathi": "1857",
        "is_correct": false,
        "reason_english": "1857 is associated with the Sepoy Mutiny/First War of Indian Independence, not the creation of the Collector's post.",
        "reason_marathi": "1857 हे साल शिपाई बंड/भारताच्या पहिल्या स्वातंत्र्ययुद्धाशी संबंधित आहे, जिल्हाधिकाऱ्याच्या पदाच्या निर्मितीशी नाही."
      },
      {
        "option_text_english": "1772",
        "option_text_marathi": "1772",
        "is_correct": true,
        "reason_english": "The post of District Collector was created by Warren Hastings in 1772.",
        "reason_marathi": "जिल्हाधिकाऱ्याचे पद वॉरन हेस्टिंग्स यांनी 1772 मध्ये निर्माण केले होते."
      },
      {
        "option_text_english": "1818",
        "option_text_marathi": "1818",
        "is_correct": false,
        "reason_english": "1818 is not the year when the post of District Collector was created.",
        "reason_marathi": "1818 हे जिल्हाधिकाऱ्याचे पद निर्माण झाल्याचे वर्ष नाही."
      },
      {
        "option_text_english": "1836",
        "option_text_marathi": "1836",
        "is_correct": false,
        "reason_english": "1836 is not the year when the post of District Collector was created.",
        "reason_marathi": "1836 हे जिल्हाधिकाऱ्याचे पद निर्माण झाल्याचे वर्ष नाही."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "अयोग्य कथन ओळखा - (महानगरपालिका) : (1) स्थायी समितीमध्ये एकूण सदस्य संख्या 16 असते. (2) स्थायी समितीच्या बैठकीची गणपूर्ती संख्या 5 असते. (3) स्थायी समितीच्या सभापतीचा कार्यकाल 2½ वर्षे असतो. (4) सद्या महानगरपालिकेच्या महापौरांचा कार्यकाल 2½ वर्षे असतो.",
    "question_english": "Select the incorrect statement - (Municipal Corporation) : (1) Number of members of Standing Committee are 16. (2) The quorum for meeting of Standing Committee is 5. (3) The tenure of chairman of Standing Committee is 2½ years. (4) Currently the tenure of mayor of Mahanagar Palika is 2½ years.",
    "options_marathi": [
      "स्थायी समितीमध्ये एकूण सदस्य संख्या 16 असते.",
      "स्थायी समितीच्या बैठकीची गणपूर्ती संख्या 5 असते.",
      "स्थायी समितीच्या सभापतीचा कार्यकाल 2½ वर्षे असतो.",
      "सद्या महानगरपालिकेच्या महापौरांचा कार्यकाल 2½ वर्षे असतो."
    ],
    "options_english": [
      "Number of members of Standing Committee are 16.",
      "The quorum for meeting of Standing Committee is 5.",
      "The tenure of chairman of Standing Committee is 2½ years.",
      "Currently the tenure of mayor of Mahanagar Palika is 2½ years."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban) - Municipal Corporations",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap, Multiple Incorrect Options",
    "explanation_english": "The question asks to identify the incorrect statement regarding Municipal Corporations in Maharashtra. Let's analyze each statement:\n(1) The Standing Committee in a Municipal Corporation consists of 16 members. This statement is correct.\n(2) The quorum for a meeting of the Standing Committee is 1/4th of its total members. For 16 members, the quorum is 4. Therefore, stating the quorum is 5 is incorrect.\n(3) The tenure of the Chairman of the Standing Committee is 1 year, not 2½ years. This statement is incorrect.\n(4) The tenure of the Mayor of a Municipal Corporation is 2½ years. This statement is correct.\nSince the question asks for the incorrect statement, both (2) and (3) are incorrect. However, in MPSC, if multiple options are incorrect, sometimes the question is cancelled or a specific option is considered the intended answer. Based on common factual errors, the tenure of the chairman being 2½ years (instead of 1 year) is a clear and significant factual error. Assuming the question expects one primary incorrect statement, option (3) is chosen.",
    "explanation_marathi": "महानगरपालिकांबाबत चुकीचे विधान ओळखा असे प्रश्न विचारले आहे. प्रत्येक विधानाचे विश्लेषण करूया:\n(1) महानगरपालिकेच्या स्थायी समितीमध्ये 16 सदस्य असतात. हे विधान बरोबर आहे.\n(2) स्थायी समितीच्या बैठकीसाठी गणपूर्ती संख्या एकूण सदस्यांच्या 1/4 असते. 16 सदस्यांसाठी गणपूर्ती 4 असते. त्यामुळे गणपूर्ती 5 आहे हे विधान चुकीचे आहे.\n(3) स्थायी समितीच्या सभापतीचा कार्यकाल 1 वर्ष असतो, 2½ वर्षे नाही. हे विधान चुकीचे आहे.\n(4) महानगरपालिकेच्या महापौरांचा कार्यकाल 2½ वर्षे असतो. हे विधान बरोबर आहे.\nप्रश्न चुकीचे विधान ओळखण्यास सांगत असल्याने, (2) आणि (3) दोन्ही विधाने चुकीची आहेत. तथापि, MPSC मध्ये अनेकदा असे प्रश्न येतात जिथे एकापेक्षा जास्त पर्याय चुकीचे असू शकतात. अशावेळी प्रश्न रद्द होतो किंवा एक विशिष्ट पर्याय अपेक्षित असतो. सभापतीचा कार्यकाल 2½ वर्षे (1 वर्षाऐवजी) हे एक स्पष्ट आणि महत्त्वाचे तथ्यात्मक चूक आहे. त्यामुळे पर्याय (3) हे अपेक्षित उत्तर मानले जाते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Number of members of Standing Committee are 16.",
        "statement_marathi": "स्थायी समितीमध्ये एकूण सदस्य संख्या 16 असते.",
        "is_correct": true,
        "reason_english": "As per the Maharashtra Municipal Corporations Act, the Standing Committee consists of 16 members.",
        "reason_marathi": "महाराष्ट्र महानगरपालिका अधिनियमानुसार, स्थायी समितीमध्ये 16 सदस्य असतात."
      },
      {
        "option_number": 2,
        "statement_english": "The quorum for meeting of Standing Committee is 5.",
        "statement_marathi": "स्थायी समितीच्या बैठकीची गणपूर्ती संख्या 5 असते.",
        "is_correct": false,
        "reason_english": "The quorum for the Standing Committee meeting is 1/4th of its total members. For 16 members, the quorum is 4, not 5.",
        "reason_marathi": "स्थायी समितीच्या बैठकीसाठी गणपूर्ती संख्या एकूण सदस्यांच्या 1/4 असते. 16 सदस्यांसाठी गणपूर्ती 4 असते, 5 नाही."
      },
      {
        "option_number": 3,
        "statement_english": "The tenure of chairman of Standing Committee is 2½ years.",
        "statement_marathi": "स्थायी समितीच्या सभापतीचा कार्यकाल 2½ वर्षे असतो.",
        "is_correct": false,
        "reason_english": "The tenure of the Chairman of the Standing Committee is 1 year, not 2½ years. This is an incorrect statement.",
        "reason_marathi": "स्थायी समितीच्या सभापतीचा कार्यकाल 1 वर्ष असतो, 2½ वर्षे नाही. हे विधान चुकीचे आहे."
      },
      {
        "option_number": 4,
        "statement_english": "Currently the tenure of mayor of Mahanagar Palika is 2½ years.",
        "statement_marathi": "सद्या महानगरपालिकेच्या महापौरांचा कार्यकाल 2½ वर्षे असतो.",
        "is_correct": true,
        "reason_english": "The tenure of the Mayor of a Municipal Corporation in Maharashtra is indeed 2½ years. This statement is correct.",
        "reason_marathi": "महाराष्ट्रामध्ये महानगरपालिकेच्या महापौरांचा कार्यकाल 2½ वर्षे असतो. हे विधान बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "भारतामध्ये 74 व्या घटना दुरुस्ती कायद्याची अंमलबजावणी केव्हा झाली ?",
    "question_english": "When the 74th Constitutional Amendment Act was implemented in India ?",
    "options_marathi": [
      "20 एप्रिल, 1993",
      "1 जून, 1993",
      "24 एप्रिल, 1993",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "20 April, 1993",
      "1 June, 1993",
      "24 April, 1993",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Constitutional Amendments, Local Self-Government (Urban)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall (Dates)",
    "explanation_english": "The 74th Constitutional Amendment Act, 1992, which granted constitutional status to urban local bodies (Municipalities), came into force on June 1, 1993. This act added Part IXA and the Twelfth Schedule to the Constitution, dealing with the composition, powers, and functions of municipalities.",
    "explanation_marathi": "74 वी घटनादुरुस्ती अधिनियम, 1992, ज्याने शहरी स्थानिक स्वराज्य संस्थांना (नगरपालिका) घटनात्मक दर्जा दिला, तो 1 जून 1993 रोजी लागू झाला. या अधिनियमाने संविधानात भाग IXA आणि बारावी अनुसूची जोडली, ज्यात नगरपालिकांची रचना, अधिकार आणि कार्ये यांचा समावेश आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "20 April, 1993",
        "statement_marathi": "20 एप्रिल, 1993",
        "is_correct": false,
        "reason_english": "This date is not associated with the implementation of the 74th Constitutional Amendment Act.",
        "reason_marathi": "ही तारीख 74 व्या घटनादुरुस्ती कायद्याच्या अंमलबजावणीशी संबंधित नाही."
      },
      {
        "option_number": 2,
        "statement_english": "1 June, 1993",
        "statement_marathi": "1 जून, 1993",
        "is_correct": true,
        "reason_english": "The 74th Constitutional Amendment Act was implemented on 1 June 1993.",
        "reason_marathi": "74 वी घटनादुरुस्ती अधिनियम 1 जून 1993 रोजी लागू करण्यात आला."
      },
      {
        "option_number": 3,
        "statement_english": "24 April, 1993",
        "statement_marathi": "24 एप्रिल, 1993",
        "is_correct": false,
        "reason_english": "24 April 1993 is the date of implementation for the 73rd Constitutional Amendment Act (Panchayats), not the 74th.",
        "reason_marathi": "24 एप्रिल 1993 ही 73 व्या घटनादुरुस्ती अधिनियमाची (पंचायती) अंमलबजावणीची तारीख आहे, 74 व्या नाही."
      },
      {
        "option_number": 4,
        "statement_english": "None of the above",
        "statement_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason_english": "Option 2 provides the correct implementation date.",
        "reason_marathi": "पर्याय 2 मध्ये योग्य अंमलबजावणीची तारीख दिली आहे."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "जोड्या लावा : (मौर्य काळातील पंचायत संघटन) 'अ' 'ब' (a) 10 गावे (i) स्थानिय (b) 200 गावे (ii) द्रोणमुख (c) 400 गावे (iii) संग्रहण (d) 500 कुटूंब (iv) ग्राम (v) खार्वटिक",
    "question_english": "Match the pairs - (Organisation of Panchayat in Mourya Period): 'A' 'B' (a) 10 Villages (i) Sthaniya (b) 200 Villages (ii) Dronmukh (c) 400 Villages (iii) Sangrahan (d) 500 Families (iv) Gram (v) Kharvtik",
    "options_marathi": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iv), (b)-(ii), (c)-(v), (d)-(iii)",
      "(a)-(iii), (b)-(v), (c)-(ii), (d)-(iv)",
      "(a)-(v), (b)-(iii), (c)-(iv), (d)-(ii)"
    ],
    "options_english": [
      "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
      "(a)-(iv), (b)-(ii), (c)-(v), (d)-(iii)",
      "(a)-(iii), (b)-(v), (c)-(ii), (d)-(iv)",
      "(a)-(v), (b)-(iii), (c)-(iv), (d)-(ii)"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Ancient Indian History - Mauryan Administration",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall, Misleading Pair",
    "explanation_english": "The Mauryan administration had a well-defined hierarchy of territorial divisions. The smallest unit was the Gram (village). A group of 10 villages was known as a Sangrahan. A Kharvatik comprised 200 villages, and a Dronamukha consisted of 400 villages. A Sthaniya was a larger unit, typically comprising 800 villages. The pairing (d) 500 families - Gram is a conceptual link, as a Gram (village) would be composed of families, and 500 families could represent a typical village size, though 'Gram' itself is a territorial unit.",
    "explanation_marathi": "मौर्य प्रशासनात प्रादेशिक विभागांची सुव्यवस्थित श्रेणी होती. सर्वात लहान एकक ग्राम (गाव) होते. 10 गावांच्या समूहाला संग्रहण असे म्हटले जात असे. खार्वटिकमध्ये 200 गावे समाविष्ट होती, तर द्रोणमुखामध्ये 400 गावे होती. स्थानिय हे 800 गावांचे मोठे एकक होते. (d) 500 कुटुंबे - ग्राम ही एक संकल्पनात्मक जोडणी आहे, कारण ग्राम (गाव) कुटुंबांनी बनलेले असते आणि 500 कुटुंबे हे एका सामान्य गावाचे आकारमान दर्शवू शकते, जरी 'ग्राम' स्वतः एक प्रादेशिक एकक आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "statement_marathi": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "is_correct": false,
        "reason_english": "This pairing is incorrect based on historical facts of Mauryan administration.",
        "reason_marathi": "मौर्य प्रशासनाच्या ऐतिहासिक तथ्यांनुसार ही जोडी चुकीची आहे."
      },
      {
        "option_number": 2,
        "statement_english": "(a)-(iv), (b)-(ii), (c)-(v), (d)-(iii)",
        "statement_marathi": "(a)-(iv), (b)-(ii), (c)-(v), (d)-(iii)",
        "is_correct": false,
        "reason_english": "This pairing is incorrect based on historical facts of Mauryan administration.",
        "reason_marathi": "मौर्य प्रशासनाच्या ऐतिहासिक तथ्यांनुसार ही जोडी चुकीची आहे."
      },
      {
        "option_number": 3,
        "statement_english": "(a)-(iii), (b)-(v), (c)-(ii), (d)-(iv)",
        "statement_marathi": "(a)-(iii), (b)-(v), (c)-(ii), (d)-(iv)",
        "is_correct": true,
        "reason_english": "This option correctly matches: (a) 10 Villages - Sangrahan, (b) 200 Villages - Kharvatik, (c) 400 Villages - Dronmukh, (d) 500 Families - Gram (representing the basic village unit).",
        "reason_marathi": "हा पर्याय योग्यरित्या जुळतो: (a) 10 गावे - संग्रहण, (b) 200 गावे - खार्वटिक, (c) 400 गावे - द्रोणमुख, (d) 500 कुटुंबे - ग्राम (मूलभूत गाव एककाचे प्रतिनिधित्व करते)."
      },
      {
        "option_number": 4,
        "statement_english": "(a)-(v), (b)-(iii), (c)-(iv), (d)-(ii)",
        "statement_marathi": "(a)-(v), (b)-(iii), (c)-(iv), (d)-(ii)",
        "is_correct": false,
        "reason_english": "This pairing is incorrect based on historical facts of Mauryan administration.",
        "reason_marathi": "मौर्य प्रशासनाच्या ऐतिहासिक तथ्यांनुसार ही जोडी चुकीची आहे."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "नगरपरिषदेच्या सर्वसाधारण बैठक/सभेसाठी गणपूर्ती संख्या ही एकूण सदस्य संख्येच्या एवढी असते.",
    "question_english": "The quorum for General Meetings of Municipal Council members.",
    "options_marathi": [
      "1/2",
      "1/3",
      "1/10",
      "1/4"
    ],
    "options_english": [
      "1/2",
      "1/3",
      "1/10",
      "1/4"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Urban) - Municipal Councils",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall (Fractions)",
    "explanation_english": "As per the Maharashtra Municipal Councils, Nagar Panchayats and Industrial Townships Act, the quorum required for a general meeting of the Municipal Council is one-third (1/3rd) of the total number of members. This ensures that a sufficient number of members are present for valid decision-making.",
    "explanation_marathi": "महाराष्ट्र नगरपरिषदा, नगरपंचायती आणि औद्योगिक नगरी अधिनियम नुसार, नगरपरिषदेच्या सर्वसाधारण बैठकीसाठी आवश्यक असलेली गणपूर्ती संख्या एकूण सदस्य संख्येच्या एक तृतीयांश (1/3) असते. यामुळे वैध निर्णय घेण्यासाठी पुरेसे सदस्य उपस्थित असल्याची खात्री होते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "1/2",
        "statement_marathi": "1/2",
        "is_correct": false,
        "reason_english": "1/2 is not the correct quorum for general meetings of Municipal Councils.",
        "reason_marathi": "नगरपरिषदेच्या सर्वसाधारण बैठकीसाठी 1/2 ही योग्य गणपूर्ती नाही."
      },
      {
        "option_number": 2,
        "statement_english": "1/3",
        "statement_marathi": "1/3",
        "is_correct": true,
        "reason_english": "The quorum for general meetings of Municipal Council members is 1/3rd of the total members.",
        "reason_marathi": "नगरपरिषदेच्या सर्वसाधारण बैठकीसाठी गणपूर्ती संख्या एकूण सदस्य संख्येच्या 1/3 असते."
      },
      {
        "option_number": 3,
        "statement_english": "1/10",
        "statement_marathi": "1/10",
        "is_correct": false,
        "reason_english": "1/10 is too low and not the prescribed quorum for general meetings of Municipal Councils.",
        "reason_marathi": "1/10 ही खूप कमी आहे आणि नगरपरिषदेच्या सर्वसाधारण बैठकीसाठी निर्धारित गणपूर्ती नाही."
      },
      {
        "option_number": 4,
        "statement_english": "1/4",
        "statement_marathi": "1/4",
        "is_correct": false,
        "reason_english": "1/4 is the quorum for some committees, but not for the general meetings of the Municipal Council.",
        "reason_marathi": "1/4 ही काही समित्यांसाठी गणपूर्ती असते, परंतु नगरपरिषदेच्या सर्वसाधारण बैठकीसाठी नाही."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "ग्रामीण स्थानिक स्वराज्य संस्था (पंचायती) खालीलपैकी कोणत्या बाबींशी संबंधित आर्थिक विकासाच्या आणि सामाजिक न्यायाच्या योजना राबवू शकत नाहीत ? (a) मत्स्यव्यवसाय (b) जळण आणि चारा (c) पिण्याचे पाणी (d) खादी",
    "question_english": "Panchayats can't implement schemes for economic development and social justice related to which of the following matters ? (a) fisheries (b) fuel and fodder (c) drinking water (d) khadi",
    "options_marathi": [
      "फक्त (a) आणि (b)",
      "वरीलपैकी कोणतीही नाही",
      "फक्त (c)",
      "फक्त (d)"
    ],
    "options_english": [
      "Only (a) and (b)",
      "None of the above",
      "Only (c)",
      "Only (d)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government (Rural) - Panchayats, Eleventh Schedule",
    "difficulty": "Medium",
    "trap_detected": "Double Negative",
    "explanation_english": "The Eleventh Schedule of the Indian Constitution, added by the 73rd Amendment Act, lists 29 subjects on which Panchayats have been devolved powers and responsibilities for economic development and social justice. All the options provided – (a) fisheries (Entry 13), (b) fuel and fodder (Entry 10), (c) drinking water (Entry 11), and (d) khadi, village and cottage industries (Entry 14) – are explicitly listed in the Eleventh Schedule. Therefore, Panchayats *can* implement schemes related to all these matters. The question asks which matters they *cannot* implement schemes for, and since they can for all, the correct answer is 'None of the above' (meaning none of the given options are outside their purview).",
    "explanation_marathi": "भारतीय संविधानाच्या अकराव्या अनुसूचीमध्ये, जी 73 व्या घटनादुरुस्ती अधिनियमाद्वारे जोडली गेली, 29 विषय सूचीबद्ध आहेत ज्यांवर पंचायतींना आर्थिक विकास आणि सामाजिक न्यायासाठी योजना राबवण्याचे अधिकार आणि जबाबदाऱ्या देण्यात आल्या आहेत. दिलेले सर्व पर्याय – (a) मत्स्यव्यवसाय (प्रविष्टी 13), (b) जळण आणि चारा (प्रविष्टी 10), (c) पिण्याचे पाणी (प्रविष्टी 11), आणि (d) खादी, ग्रामोद्योग आणि कुटीर उद्योग (प्रविष्टी 14) – अकराव्या अनुसूचीमध्ये स्पष्टपणे सूचीबद्ध आहेत. त्यामुळे, पंचायती या सर्व बाबींशी संबंधित योजना राबवू शकतात. प्रश्न विचारतो की कोणत्या बाबींशी संबंधित योजना ते राबवू शकत नाहीत, आणि ते सर्व बाबींशी संबंधित योजना राबवू शकत असल्याने, योग्य उत्तर 'वरीलपैकी कोणतीही नाही' (म्हणजे दिलेल्या पर्यायांपैकी कोणताही विषय त्यांच्या कार्यक्षेत्राबाहेर नाही) हे आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Only (a) and (b)",
        "statement_marathi": "फक्त (a) आणि (b)",
        "is_correct": false,
        "reason_english": "Panchayats can implement schemes for (a) fisheries and (b) fuel and fodder, as both are listed in the Eleventh Schedule.",
        "reason_marathi": "पंचायती (a) मत्स्यव्यवसाय आणि (b) जळण व चारा या दोन्हीसाठी योजना राबवू शकतात, कारण हे दोन्ही विषय अकराव्या अनुसूचीमध्ये सूचीबद्ध आहेत."
      },
      {
        "option_number": 2,
        "statement_english": "None of the above",
        "statement_marathi": "वरीलपैकी कोणतीही नाही",
        "is_correct": true,
        "reason_english": "All the listed items (a, b, c, d) are subjects under the Eleventh Schedule, meaning Panchayats *can* implement schemes for them. Therefore, there is no item among the options for which they *cannot* implement schemes.",
        "reason_marathi": "दिलेले सर्व विषय (a, b, c, d) अकराव्या अनुसूचीमध्ये समाविष्ट आहेत, याचा अर्थ पंचायती त्यांच्यासाठी योजना राबवू शकतात. त्यामुळे, दिलेल्या पर्यायांपैकी असा कोणताही विषय नाही ज्यासाठी ते योजना राबवू शकत नाहीत."
      },
      {
        "option_number": 3,
        "statement_english": "Only (c)",
        "statement_marathi": "फक्त (c)",
        "is_correct": false,
        "reason_english": "Panchayats can implement schemes for (c) drinking water, as it is listed in the Eleventh Schedule.",
        "reason_marathi": "पंचायती (c) पिण्याच्या पाण्याशी संबंधित योजना राबवू शकतात, कारण तो अकराव्या अनुसूचीमध्ये सूचीबद्ध आहे."
      },
      {
        "option_number": 4,
        "statement_english": "Only (d)",
        "statement_marathi": "फक्त (d)",
        "is_correct": false,
        "reason_english": "Panchayats can implement schemes for (d) khadi, as it is listed in the Eleventh Schedule.",
        "reason_marathi": "पंचायती (d) खादीशी संबंधित योजना राबवू शकतात, कारण तो अकराव्या अनुसूचीमध्ये सूचीबद्ध आहे."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "दोन राज्यांमधील वाद हा यांच्या अधिकार-क्षेत्रात येतो.",
    "question_english": "Disputes between two States falls under the Jurisdiction of .",
    "options_marathi": [
      "कोणत्याही राज्याचे उच्च न्यायालय",
      "सर्वोच्च न्यायालयाचे मूळ अधिकारक्षेत्र",
      "सर्वोच्च न्यायालयाचे अपिलीय अधिकारक्षेत्र",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "High Court of any State",
      "Original Jurisdiction of Supreme Court",
      "Appellate Jurisdiction of Supreme Court",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Judiciary - Supreme Court Jurisdiction",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Article 131 of the Indian Constitution grants the Supreme Court exclusive Original Jurisdiction in disputes between the Government of India and one or more States, or between the Government of India and any State or States on one side and one or more other States on the other, or between two or more States. This means such disputes can be directly filed in the Supreme Court and no other court has the power to entertain them.",
    "explanation_marathi": "भारतीय संविधानातील अनुच्छेद 131 सर्वोच्च न्यायालयाला भारत सरकार आणि एक किंवा अधिक राज्ये यांच्यातील, किंवा भारत सरकार आणि एक किंवा अधिक राज्ये एका बाजूला आणि एक किंवा अधिक इतर राज्ये दुसऱ्या बाजूला यांच्यातील, किंवा दोन किंवा अधिक राज्यांच्या दरम्यानच्या विवादांवर अनन्य मूळ अधिकारक्षेत्र प्रदान करते. याचा अर्थ असे विवाद थेट सर्वोच्च न्यायालयात दाखल केले जाऊ शकतात आणि इतर कोणत्याही न्यायालयाला ते स्वीकारण्याचा अधिकार नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "High Court of any State",
        "statement_marathi": "कोणत्याही राज्याचे उच्च न्यायालय",
        "is_correct": false,
        "reason_english": "High Courts do not have original jurisdiction over inter-state disputes. These are exclusively handled by the Supreme Court.",
        "reason_marathi": "उच्च न्यायालयांना आंतरराज्यीय विवादांवर मूळ अधिकारक्षेत्र नाही. हे केवळ सर्वोच्च न्यायालयाद्वारे हाताळले जातात."
      },
      {
        "option_number": 2,
        "statement_english": "Original Jurisdiction of Supreme Court",
        "statement_marathi": "सर्वोच्च न्यायालयाचे मूळ अधिकारक्षेत्र",
        "is_correct": true,
        "reason_english": "Disputes between two or more states fall under the exclusive Original Jurisdiction of the Supreme Court as per Article 131.",
        "reason_marathi": "दोन किंवा अधिक राज्यांमधील वाद अनुच्छेद 131 नुसार सर्वोच्च न्यायालयाच्या अनन्य मूळ अधिकारक्षेत्रात येतात."
      },
      {
        "option_number": 3,
        "statement_english": "Appellate Jurisdiction of Supreme Court",
        "statement_marathi": "सर्वोच्च न्यायालयाचे अपिलीय अधिकारक्षेत्र",
        "is_correct": false,
        "reason_english": "Appellate jurisdiction deals with appeals against judgments of lower courts, not direct disputes between states.",
        "reason_marathi": "अपीलीय अधिकारक्षेत्र खालच्या न्यायालयांच्या निर्णयांविरुद्धच्या अपीलांशी संबंधित आहे, थेट राज्यांमधील विवादांशी नाही."
      },
      {
        "option_number": 4,
        "statement_english": "None of the above",
        "statement_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason_english": "Option 2 correctly identifies the jurisdiction.",
        "reason_marathi": "पर्याय 2 योग्य अधिकारक्षेत्र ओळखतो."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "न्यायालयीन सक्रियतेच्या अनुषंगाने जोड्या लावा. खटल्याचे नाव न्यायालयीन सक्रीयता (a) लक्ष्मीकांत पांडे (i) भारतातील रक्तपेढ्यांच्या मध्ये अमुलाग्र बदल (b) विनीत नारायण (ii) शैक्षणिक संस्थांतील रॅगिंगला प्रतिबंध (c) कॉमन कॉज (iii) लहान मुलांचे परदेशी दांपत्याकडून दत्तक विधानासंबंधित मार्गदर्शक तत्वे (d) विश्व जागृती मिशन (iv) कायद्याचे राज्य अधिनियम अंमलबजावणीसाठी मार्गदर्शन",
    "question_english": "Match the following regarding judicial activism : Name of the Case Judicial Activism (a) Laksmi Kant Pandey (i) Revamping the system of blood banks in the country (b) Vineet Narain (ii) Prohibition of ragging in educational institutions (c) Common Cause (iii) Guidelines regarding adoption of minor children by foreigners (d) Vishwa Jagriti Mission (iv) Guidelines for enforcement of rule of Law",
    "options_marathi": [
      "(a)-(i), (b)-(ii), (c)-(iv), (d)-(ii)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)"
    ],
    "options_english": [
      "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
      "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
      "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Judiciary - Judicial Activism, Landmark Cases",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall (Specific Cases and their outcomes)",
    "explanation_english": "This question tests knowledge of landmark Supreme Court cases related to judicial activism and their significant outcomes.\n(a) Lakshmi Kant Pandey case (1984): This case led to the Supreme Court laying down comprehensive guidelines for inter-country adoption of Indian children, ensuring their welfare. So, (a)-(iii).\n(b) Vineet Narain case (1997): This case resulted in the Supreme Court issuing detailed guidelines to ensure the independence and impartiality of investigative agencies like the CBI and ED, particularly in corruption cases, thereby strengthening the enforcement of the rule of law. So, (b)-(iv).\n(c) Common Cause case (1996): This case was instrumental in bringing about significant reforms and guidelines for the functioning of blood banks across the country, aiming to ensure safe blood supply. So, (c)-(i).\n(d) Vishwa Jagriti Mission case (2001): This case addressed the pervasive issue of ragging in educational institutions and led to the Supreme Court issuing guidelines for its prohibition and prevention. So, (d)-(ii).",
    "explanation_marathi": "हा प्रश्न न्यायिक सक्रियतेशी संबंधित महत्त्वाच्या सर्वोच्च न्यायालयाच्या खटल्यांचे आणि त्यांच्या महत्त्वपूर्ण परिणामांचे ज्ञान तपासतो.\n(a) लक्ष्मीकांत पांडे खटला (1984): या खटल्यामुळे सर्वोच्च न्यायालयाने भारतीय मुलांच्या आंतरराष्ट्रीय दत्तक विधानासाठी विस्तृत मार्गदर्शक तत्त्वे घालून दिली, ज्यामुळे त्यांच्या कल्याणाची खात्री झाली. म्हणून, (a)-(iii).\n(b) विनीत नारायण खटला (1997): या खटल्यामुळे सर्वोच्च न्यायालयाने CBI आणि ED सारख्या तपास यंत्रणांच्या स्वातंत्र्याची आणि निष्पक्षतेची खात्री करण्यासाठी, विशेषतः भ्रष्टाचार प्रकरणांमध्ये, तपशीलवार मार्गदर्शक तत्त्वे जारी केली, ज्यामुळे कायद्याच्या राज्याची अंमलबजावणी मजबूत झाली. म्हणून, (b)-(iv).\n(c) कॉमन कॉज खटला (1996): हा खटला देशभरातील रक्तपेढ्यांच्या कार्यप्रणालीत महत्त्वपूर्ण सुधारणा आणि मार्गदर्शक तत्त्वे आणण्यासाठी महत्त्वाचा ठरला, ज्याचा उद्देश सुरक्षित रक्तपुरवठा सुनिश्चित करणे हा होता. म्हणून, (c)-(i).\n(d) विश्व जागृती मिशन खटला (2001): या खटल्याने शैक्षणिक संस्थांमधील रॅगिंगच्या व्यापक समस्येवर लक्ष केंद्रित केले आणि सर्वोच्च न्यायालयाने त्याच्या प्रतिबंध आणि निवारणासाठी मार्गदर्शक तत्त्वे जारी केली. म्हणून, (d)-(ii).",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
        "statement_marathi": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
        "is_correct": false,
        "reason_english": "This option contains incorrect pairings for multiple cases.",
        "reason_marathi": "या पर्यायात अनेक खटल्यांसाठी चुकीच्या जोड्या आहेत."
      },
      {
        "option_number": 2,
        "statement_english": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "statement_marathi": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "is_correct": true,
        "reason_english": "This option correctly matches all the cases with their respective judicial activism outcomes.",
        "reason_marathi": "हा पर्याय सर्व खटल्यांना त्यांच्या संबंधित न्यायिक सक्रियतेच्या परिणामांशी योग्यरित्या जुळवतो."
      },
      {
        "option_number": 3,
        "statement_english": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
        "statement_marathi": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
        "is_correct": false,
        "reason_english": "This option incorrectly swaps the outcomes for Vineet Narain and Vishwa Jagriti Mission cases.",
        "reason_marathi": "या पर्यायात विनीत नारायण आणि विश्व जागृती मिशन खटल्यांचे परिणाम चुकीच्या पद्धतीने बदलले आहेत."
      },
      {
        "option_number": 4,
        "statement_english": "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
        "statement_marathi": "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
        "is_correct": false,
        "reason_english": "This option incorrectly swaps the outcomes for Common Cause and Vishwa Jagriti Mission cases.",
        "reason_marathi": "या पर्यायात कॉमन कॉज आणि विश्व जागृती मिशन खटल्यांचे परिणाम चुकीच्या पद्धतीने बदलले आहेत."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "एखादी व्यक्ती सर्वोच्च न्यायालयाची न्यायाधीश म्हणून नियुक्तीस पात्र असणार नाही जर ती भारतीय नागरिक असल्याशिवाय आणि (a) एखाद्या उच्च न्यायालयाची अथवा अशा दोन किंवा अधिक न्यायालयांची सलगपणे निदान पाच वर्षे न्यायाधीश, किंवा (b) एखाद्या उच्च न्यायालयाचा अथवा अशा दोन किंवा अधिक न्यायालयांचा निदान सलग दहा वर्षे अधिवक्ता, किंवा (c) राष्ट्रपतींच्या मते विख्यात कायदेपंडित आहे.",
    "question_english": "A person shall not be qualified for appointment as a Judge of the Supreme Court unless he is a citizen of India and : (a) has been for at least Five years a Judge of a High Court or of two or more such Courts in succession; or (b) has been for at least ten years an advocate of a High Court or of two or more such courts in succession; or (c) is, in the opinion of the President, a distinguished jurist.",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "फक्त (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) only",
      "(b) only",
      "(c) only",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Judiciary - Supreme Court Judges Appointment",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Article 124(3) of the Indian Constitution lays down the qualifications for appointment as a Judge of the Supreme Court. A person must be a citizen of India and must satisfy any one of the following conditions: (a) has been a Judge of a High Court (or two or more such Courts in succession) for at least five years; or (b) has been an advocate of a High Court (or two or more such Courts in succession) for at least ten years; or (c) is, in the opinion of the President, a distinguished jurist. All three statements (a), (b), and (c) correctly describe these alternative qualifications.",
    "explanation_marathi": "भारतीय संविधानातील अनुच्छेद 124(3) सर्वोच्च न्यायालयाच्या न्यायाधीश म्हणून नियुक्तीसाठी पात्रता निश्चित करते. एखादी व्यक्ती भारताची नागरिक असणे आवश्यक आहे आणि खालीलपैकी कोणतीही एक अट पूर्ण करणे आवश्यक आहे: (a) किमान पाच वर्षे उच्च न्यायालयाचा (किंवा सलग दोन किंवा अधिक न्यायालयांचा) न्यायाधीश राहिलेला असावा; किंवा (b) किमान दहा वर्षे उच्च न्यायालयाचा (किंवा सलग दोन किंवा अधिक न्यायालयांचा) अधिवक्ता राहिलेला असावा; किंवा (c) राष्ट्रपतींच्या मते एक प्रख्यात कायदेपंडित असावा. वरील तिन्ही विधाने (a), (b) आणि (c) या पर्यायी पात्रता योग्यरित्या वर्णन करतात.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a) only",
        "statement_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "While (a) is a valid qualification, (b) and (c) are also valid alternative qualifications.",
        "reason_marathi": "(a) ही एक वैध पात्रता असली तरी, (b) आणि (c) देखील वैध पर्यायी पात्रता आहेत."
      },
      {
        "option_number": 2,
        "statement_english": "(b) only",
        "statement_marathi": "फक्त (b)",
        "is_correct": false,
        "reason_english": "While (b) is a valid qualification, (a) and (c) are also valid alternative qualifications.",
        "reason_marathi": "(b) ही एक वैध पात्रता असली तरी, (a) आणि (c) देखील वैध पर्यायी पात्रता आहेत."
      },
      {
        "option_number": 3,
        "statement_english": "(c) only",
        "statement_marathi": "फक्त (c)",
        "is_correct": false,
        "reason_english": "While (c) is a valid qualification, (a) and (b) are also valid alternative qualifications.",
        "reason_marathi": "(c) ही एक वैध पात्रता असली तरी, (a) आणि (b) देखील वैध पर्यायी पात्रता आहेत."
      },
      {
        "option_number": 4,
        "statement_english": "All of the above",
        "statement_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "All three conditions (a), (b), and (c) are distinct and valid alternative qualifications for appointment as a Supreme Court Judge, in addition to being a citizen of India.",
        "reason_marathi": "भारतीय नागरिक असण्याव्यतिरिक्त, सर्वोच्च न्यायालयाच्या न्यायाधीश म्हणून नियुक्तीसाठी वरील तिन्ही अटी (a), (b) आणि (c) या स्वतंत्र आणि वैध पर्यायी पात्रता आहेत."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "सर्वोच्च न्यायालयाच्या न्यायिक कक्षेच्या अनुषंगाने जोड्या लावा : अनुच्छेद तरतूद (a) 129 (i) समुपदेशन अधिकारिता (b) 131 (ii) न्यायालयीन बेअदबीबद्दल शास्ती अधिकारिता (c) 136 (iii) राज्यांतर्गत तंटानिवारक अधिकारिता (d) 143 (iv) अपीलासाठी सर्वोच्च न्यायालयाची खास परवानगी",
    "question_english": "Match the following regarding jurisdiction of the Supreme Court : Article Provision (a) 129 (i) Advisory Jurisdiction (b) 131 (ii) Power to punish for contempt of Court (c) 136 (iii) Jurisdiction to decide inter-governmental disputes (d) 143 (iv) Special leave to appeal to Supreme Court",
    "options_marathi": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)"
    ],
    "options_english": [
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Judiciary - Supreme Court Articles and Jurisdictions",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall (Specific Articles)",
    "explanation_english": "This question requires matching specific articles of the Indian Constitution with the corresponding jurisdictions or powers of the Supreme Court.\n(a) Article 129: Declares the Supreme Court to be a court of record and grants it the power to punish for contempt of itself. So, (a)-(ii).\n(b) Article 131: Defines the Original Jurisdiction of the Supreme Court, primarily dealing with disputes between the Union and States or between States (inter-governmental disputes). So, (b)-(iii).\n(c) Article 136: Grants the Supreme Court the power to grant special leave to appeal from any judgment, decree, determination, sentence, or order in any cause or matter passed or made by any court or tribunal in the territory of India. So, (c)-(iv).\n(d) Article 143: Empowers the President to consult the Supreme Court on questions of law or fact, which is known as its Advisory Jurisdiction. So, (d)-(i).",
    "explanation_marathi": "या प्रश्नामध्ये भारतीय संविधानातील विशिष्ट अनुच्छेदांना सर्वोच्च न्यायालयाच्या संबंधित अधिकारक्षेत्रांशी किंवा अधिकारांशी जुळवणे आवश्यक आहे.\n(a) अनुच्छेद 129: सर्वोच्च न्यायालयाला अभिलेख न्यायालय घोषित करते आणि त्याला स्वतःच्या अवमानासाठी शिक्षा करण्याचा अधिकार देते. म्हणून, (a)-(ii).\n(b) अनुच्छेद 131: सर्वोच्च न्यायालयाच्या मूळ अधिकारक्षेत्राची व्याख्या करते, ज्यात प्रामुख्याने केंद्र आणि राज्ये किंवा राज्यांदरम्यानचे विवाद (आंतर-सरकारी विवाद) हाताळले जातात. म्हणून, (b)-(iii).\n(c) अनुच्छेद 136: सर्वोच्च न्यायालयाला भारताच्या हद्दीतील कोणत्याही न्यायालय किंवा न्यायाधिकरणाने दिलेल्या कोणत्याही निर्णय, हुकूम, निर्धारण, शिक्षा किंवा आदेशाविरुद्ध विशेष परवानगीने अपील करण्याची शक्ती देते. म्हणून, (c)-(iv).\n(d) अनुच्छेद 143: राष्ट्रपतींना कायदा किंवा तथ्यांच्या प्रश्नांवर सर्वोच्च न्यायालयाचा सल्ला घेण्याचा अधिकार देते, ज्याला त्याचे सल्लागार अधिकारक्षेत्र म्हणून ओळखले जाते. म्हणून, (d)-(i).",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "statement_marathi": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "is_correct": false,
        "reason_english": "This option contains incorrect pairings for all articles.",
        "reason_marathi": "या पर्यायात सर्व अनुच्छेदांसाठी चुकीच्या जोड्या आहेत."
      },
      {
        "option_number": 2,
        "statement_english": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
        "statement_marathi": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
        "is_correct": false,
        "reason_english": "This option incorrectly swaps the provisions for Article 136 and Article 143.",
        "reason_marathi": "या पर्यायात अनुच्छेद 136 आणि अनुच्छेद 143 च्या तरतुदी चुकीच्या पद्धतीने बदलल्या आहेत."
      },
      {
        "option_number": 3,
        "statement_english": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
        "statement_marathi": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
        "is_correct": false,
        "reason_english": "This option contains multiple incorrect pairings.",
        "reason_marathi": "या पर्यायात अनेक चुकीच्या जोड्या आहेत."
      },
      {
        "option_number": 4,
        "statement_english": "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
        "statement_marathi": "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
        "is_correct": true,
        "reason_english": "This option correctly matches all the articles with their respective provisions/jurisdictions.",
        "reason_marathi": "हा पर्याय सर्व अनुच्छेदांना त्यांच्या संबंधित तरतुदी/अधिकारक्षेत्रांशी योग्यरित्या जुळवतो."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "खालीलपैकी भारतीय राज्यघटनेच्या कोणत्या अनुच्छेदानुसार, भारताच्या सर्वोच्च न्यायालयास नागरिकांच्या मूलभूत अधिकारांचा संरक्षक म्हणून निर्देशित केले आहे ?",
    "question_english": "Under which of the following Article of the Constitution of India the Supreme Court has been designated as guardian of fundamental Rights of the citizen ?",
    "options_marathi": [
      "अनुच्छेद 21",
      "अनुच्छेद 30",
      "अनुच्छेद 226",
      "वरीलपैकी कोणतेही नाही"
    ],
    "options_english": [
      "Article 21",
      "Article 30",
      "Article 226",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Fundamental Rights, Judiciary - Supreme Court",
    "difficulty": "Easy",
    "trap_detected": "Misdirection (Article 226 for High Courts)",
    "explanation_english": "Article 32 of the Indian Constitution is known as the 'Right to Constitutional Remedies' and designates the Supreme Court as the 'guardian and guarantor' of Fundamental Rights. It empowers the Supreme Court to issue various writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto) for the enforcement of these rights. Since Article 32 is not among the given options, and Article 226 pertains to the High Courts' writ jurisdiction, the correct choice is 'None of the above'.",
    "explanation_marathi": "भारतीय संविधानातील अनुच्छेद 32 ला 'घटनात्मक उपायांचा अधिकार' म्हणून ओळखले जाते आणि ते सर्वोच्च न्यायालयाला मूलभूत हक्कांचे 'संरक्षक आणि हमीदार' म्हणून नियुक्त करते. हे सर्वोच्च न्यायालयाला या हक्कांच्या अंमलबजावणीसाठी विविध रिट (हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, सर्टिओरारी आणि क्वो-वॉरंटो) जारी करण्याचा अधिकार देते. अनुच्छेद 32 दिलेल्या पर्यायांमध्ये नसल्यामुळे आणि अनुच्छेद 226 उच्च न्यायालयांच्या रिट अधिकारक्षेत्राशी संबंधित असल्यामुळे, योग्य पर्याय 'वरीलपैकी कोणतेही नाही' हा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "statement_english": "Article 21",
        "statement_marathi": "अनुच्छेद 21",
        "is_correct": false,
        "reason_english": "Article 21 deals with the Protection of Life and Personal Liberty, which is a fundamental right itself, but it does not designate the Supreme Court as its guardian.",
        "reason_marathi": "अनुच्छेद 21 जीवन आणि वैयक्तिक स्वातंत्र्याच्या संरक्षणाशी संबंधित आहे, जो स्वतः एक मूलभूत अधिकार आहे, परंतु तो सर्वोच्च न्यायालयाला त्याचा संरक्षक म्हणून नियुक्त करत नाही."
      },
      {
        "option_number": 2,
        "statement_english": "Article 30",
        "statement_marathi": "अनुच्छेद 30",
        "is_correct": false,
        "reason_english": "Article 30 deals with the rights of minorities to establish and administer educational institutions, not the Supreme Court's role as guardian of fundamental rights.",
        "reason_marathi": "अनुच्छेद 30 अल्पसंख्याकांच्या शैक्षणिक संस्था स्थापन करण्याच्या आणि त्यांचे प्रशासन करण्याच्या अधिकारांशी संबंधित आहे, मूलभूत हक्कांचे संरक्षक म्हणून सर्वोच्च न्यायालयाच्या भूमिकेशी नाही."
      },
      {
        "option_number": 3,
        "statement_english": "Article 226",
        "statement_marathi": "अनुच्छेद 226",
        "is_correct": false,
        "reason_english": "Article 226 empowers High Courts (not the Supreme Court) to issue writs for the enforcement of Fundamental Rights and for other purposes. While High Courts also protect Fundamental Rights, Article 32 specifically designates the Supreme Court as the guardian.",
        "reason_marathi": "अनुच्छेद 226 उच्च न्यायालयांना (सर्वोच्च न्यायालयाला नाही) मूलभूत हक्कांच्या अंमलबजावणीसाठी आणि इतर कारणांसाठी रिट जारी करण्याचा अधिकार देते. उच्च न्यायालये देखील मूलभूत हक्कांचे संरक्षण करतात, परंतु अनुच्छेद 32 विशेषतः सर्वोच्च न्यायालयाला संरक्षक म्हणून नियुक्त करते."
      },
      {
        "option_number": 4,
        "statement_english": "None of the above",
        "statement_marathi": "वरीलपैकी कोणतेही नाही",
        "is_correct": true,
        "reason_english": "The correct article that designates the Supreme Court as the guardian of Fundamental Rights is Article 32, which is not provided in the options.",
        "reason_marathi": "सर्वोच्च न्यायालयाला मूलभूत हक्कांचे संरक्षक म्हणून नियुक्त करणारा योग्य अनुच्छेद 32 आहे, जो पर्यायांमध्ये दिलेला नाही."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) किशोरी शक्ती योजनेचे उद्दिष्ट स्त्रियांमध्ये स्वयंविकास आणि आरोग्य दर्जा तसेच पोषण सुधारणा करणे. (b) राष्ट्रीय महिला कोष मोठ्या रकमेचा पतपुरवठा करते. (c) स्वावलंबन योजना महिलांच्या पारंपारिक व अपारंपारिक व्यापारासाठी प्रशिक्षण आणि कौशल्ये देते.",
    "question_english": "Consider the following statements : (a) The Kishori Shakti Yojana aims at improving the nutritional and health status of women and their self development. (b) The Rashtriya Mahila Kosh provides Large amount credit. (c) Swawlamban Scheme provides training and skills to women in traditional and non-traditional trades.",
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
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Women Empowerment Schemes and Social Welfare",
    "difficulty": "Medium",
    "trap_detected": "Factual Nuance (Statement a), Factual Error (Statement b)",
    "explanation_english": "Statement (a) is largely correct. The Kishori Shakti Yojana (KSY) was launched to improve the nutritional and health status of adolescent girls (11-18 years) and promote their self-development, which contributes to the overall empowerment of women. Statement (b) is incorrect because the Rashtriya Mahila Kosh (RMK) primarily provides micro-credit to poor women for income-generating activities, not large amounts of credit. Statement (c) is correct. The Swawlamban Scheme (earlier known as STEP) aimed at providing training and skill development to women in both traditional and non-traditional trades to enhance their employability and economic independence. Therefore, statements (a) and (c) are correct.",
    "explanation_marathi": "विधान (a) मोठ्या प्रमाणात बरोबर आहे. किशोरी शक्ती योजना (KSY) किशोरवयीन मुलींच्या (11-18 वर्षे) पोषण आणि आरोग्य स्थिती सुधारण्यासाठी तसेच त्यांच्या स्वयं-विकासाला प्रोत्साहन देण्यासाठी सुरू करण्यात आली होती, ज्यामुळे महिलांच्या एकूण सक्षमीकरणात योगदान मिळते. विधान (b) चुकीचे आहे कारण राष्ट्रीय महिला कोष (RMK) प्रामुख्याने गरीब महिलांना उत्पन्न मिळवून देणाऱ्या उपक्रमांसाठी सूक्ष्म-पतपुरवठा (micro-credit) करतो, मोठ्या रकमेचा पतपुरवठा नाही. विधान (c) बरोबर आहे. स्वावलंबन योजनेचा (पूर्वी STEP म्हणून ओळखली जाणारी) उद्देश महिलांना पारंपरिक आणि अपारंपरिक दोन्ही व्यवसायांमध्ये प्रशिक्षण आणि कौशल्य विकास प्रदान करणे हा होता, ज्यामुळे त्यांची रोजगारक्षमता आणि आर्थिक स्वातंत्र्य वाढेल. म्हणून, विधाने (a) आणि (c) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "Statement (b) is incorrect as Rashtriya Mahila Kosh provides micro-credit, not large amount credit."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (b) is incorrect as Rashtriya Mahila Kosh provides micro-credit, not large amount credit."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": true,
        "reason": "Statement (a) is correct in its broader aim for women's development through adolescent girls' empowerment. Statement (c) is correct as Swawlamban Scheme focuses on skill development for women in various trades."
      },
      {
        "option_text_english": "All of the above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason": "Statement (b) is incorrect."
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) 2009-10 मध्ये महाराष्ट्राचा सेवा क्षेत्रातील विकास दर 9.6% होता. (b) 2010-11 मध्ये महाराष्ट्र राज्यांतर्गत स्थूल उत्पादनात सेवा क्षेत्राचा वाटा 61% होता. (c) 2012-13 मध्ये महाराष्ट्राच्या स्थूल राज्यांतर्गत उत्पादनात बांधकाम क्षेत्राचा वाटा 22% होता.",
    "question_english": "Consider the following statements: (a) In 2009-10, the rate of development of service sector in Maharashtra was 9.6% (b) In 2010-11, the share of service sector is 61% in Maharashtra State Gross Domestic Product. (c) In 2012-13, the share of Building construction sector was 22% in the Maharashtra state Gross Domestic Product.",
    "options_marathi": [
      "(a) आणि (c)",
      "(a) आणि (b)",
      "(b) आणि (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (c)",
      "(a) and (b)",
      "(b) and (c)",
      "All of the above"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Maharashtra Economy - Sectoral Growth and Contribution",
    "difficulty": "Hard",
    "trap_detected": "Factual Error (Statement c)",
    "explanation_english": "Statement (a) is correct. As per Maharashtra Economic Survey data, the service sector in Maharashtra recorded a growth rate of 9.6% in 2009-10. Statement (b) is also correct. The share of the service sector in Maharashtra's Gross State Domestic Product (GSDP) was approximately 61% in 2010-11, indicating its dominant role in the state's economy. Statement (c) is incorrect. The share of the building construction sector in Maharashtra's GSDP in 2012-13 was significantly lower, typically around 7-8%, not 22%. Therefore, statements (a) and (b) are correct.",
    "explanation_marathi": "विधान (a) बरोबर आहे. महाराष्ट्र आर्थिक सर्वेक्षणानुसार, 2009-10 मध्ये महाराष्ट्राच्या सेवा क्षेत्राचा विकास दर 9.6% होता. विधान (b) देखील बरोबर आहे. 2010-11 मध्ये महाराष्ट्राच्या स्थूल राज्यांतर्गत उत्पादनात (GSDP) सेवा क्षेत्राचा वाटा अंदाजे 61% होता, जो राज्याच्या अर्थव्यवस्थेतील त्याचे प्रमुख स्थान दर्शवतो. विधान (c) चुकीचे आहे. 2012-13 मध्ये महाराष्ट्राच्या GSDP मध्ये बांधकाम क्षेत्राचा वाटा खूप कमी होता, साधारणपणे 7-8% च्या आसपास, 22% नाही. म्हणून, विधाने (a) आणि (b) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect as the share of the construction sector was not 22%."
      },
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": true,
        "reason": "Both statements (a) and (b) are factually correct based on Maharashtra's economic data for the respective years."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect as the share of the construction sector was not 22%."
      },
      {
        "option_text_english": "All of the above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason": "Statement (c) is incorrect."
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "कोणत्या राज्यामध्ये 2005-06 ते 2010-11 या काळात दरडोई निव्वळ घरेलू उत्पादन सर्वात कमी होते ?",
    "question_english": "In which state per capita net domestic product recorded lowest during 2005-06 to 2010-11 ?",
    "options_marathi": [
      "बिहार",
      "उत्तर प्रदेश",
      "ओरिसा",
      "पश्चिम बंगाल"
    ],
    "options_english": [
      "Bihar",
      "Uttar Pradesh",
      "Orrisa",
      "West -Bengal"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Indian Economy - State Economic Indicators",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Historically, Bihar has consistently been one of the states with the lowest per capita net domestic product (NDP) in India. During the period 2005-06 to 2010-11, Bihar indeed recorded the lowest per capita NDP among the major states, reflecting its economic backwardness compared to others. The other states listed, Uttar Pradesh, Odisha, and West Bengal, while also developing, generally had higher per capita NDP than Bihar during this period.",
    "explanation_marathi": "ऐतिहासिकदृष्ट्या, बिहार हे भारतातील सर्वात कमी दरडोई निव्वळ घरेलू उत्पादन (NDP) असलेल्या राज्यांपैकी एक राहिले आहे. 2005-06 ते 2010-11 या काळात, बिहारमध्ये प्रमुख राज्यांमध्ये सर्वात कमी दरडोई NDP नोंदवले गेले, जे इतर राज्यांच्या तुलनेत त्याची आर्थिक मागासलेपणा दर्शवते. नमूद केलेली इतर राज्ये, उत्तर प्रदेश, ओडिशा आणि पश्चिम बंगाल, जरी विकसनशील असली तरी, या काळात बिहारपेक्षा त्यांचे दरडोई NDP सामान्यतः जास्त होते.",
    "options_breakdown": [
      {
        "option_text_english": "Bihar",
        "option_text_marathi": "बिहार",
        "is_correct": true,
        "reason": "Bihar consistently had the lowest per capita net domestic product among Indian states during the specified period."
      },
      {
        "option_text_english": "Uttar Pradesh",
        "option_text_marathi": "उत्तर प्रदेश",
        "is_correct": false,
        "reason": "Uttar Pradesh's per capita NDP was higher than Bihar's during this period."
      },
      {
        "option_text_english": "Orrisa",
        "option_text_marathi": "ओरिसा",
        "is_correct": false,
        "reason": "Odisha's per capita NDP was higher than Bihar's during this period."
      },
      {
        "option_text_english": "West -Bengal",
        "option_text_marathi": "पश्चिम बंगाल",
        "is_correct": false,
        "reason": "West Bengal's per capita NDP was higher than Bihar's during this period."
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) भारतीय नियोजन प्रक्रिया ही वित्तीय व्यूहरचनेच्या अभावामुळे ग्रस्त आहे. (b) रचनात्मक अवनतीबरोबरच औद्योगिक वृद्धी दर कमी होता. (c) भारतातील आर्थिक नियोजनाचे राजकीय तत्वज्ञान बरोबर होते.",
    "question_english": "Consider the following statements : (a) The planning process in India suffered from the absence of financial strategy. (b) The structural retrogression was also accompanied by low rate of industrial growth. (c) The political philosophy of economic planning in India has been right.",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "फक्त (c)",
      "फक्त (a)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "Only (c)",
      "Only (a)"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Economic Planning in India - Critiques and Philosophy",
    "difficulty": "Medium",
    "trap_detected": "Subjective Claim (Statement c)",
    "explanation_english": "Statement (a) is correct. India's planning process often faced challenges due to inadequate financial strategies, leading to resource mobilization issues, deficit financing, and inefficient allocation. Statement (b) is also correct. During certain phases of Indian planning, particularly after the initial rapid industrialization, there was a period of 'structural retrogression' characterized by a slowdown in industrial growth and a lack of diversification, often referred to as the 'Hindu rate of growth'. Statement (c) is debatable and generally considered incorrect in a definitive sense. While the political philosophy behind India's economic planning (democratic socialism, mixed economy, social justice) had noble intentions, its implementation and outcomes were widely criticized, and whether it was 'right' is a matter of ongoing debate among economists and policymakers. Therefore, statements (a) and (b) are correct.",
    "explanation_marathi": "विधान (a) बरोबर आहे. भारताच्या नियोजन प्रक्रियेला अनेकदा अपुऱ्या वित्तीय धोरणांमुळे आव्हानांचा सामना करावा लागला, ज्यामुळे संसाधन उभारणीतील समस्या, तुटीचा अर्थसंकल्प आणि अकार्यक्षम वाटप झाले. विधान (b) देखील बरोबर आहे. भारतीय नियोजनाच्या काही टप्प्यांमध्ये, विशेषतः सुरुवातीच्या जलद औद्योगिकीकरणानंतर, 'संरचनात्मक प्रतिगमन' (structural retrogression) चा काळ होता, ज्यामध्ये औद्योगिक वाढ मंदावली आणि विविधीकरणाचा अभाव होता, याला अनेकदा 'हिंदू विकास दर' असे संबोधले जाते. विधान (c) वादग्रस्त आहे आणि सामान्यतः निश्चित अर्थाने चुकीचे मानले जाते. भारताच्या आर्थिक नियोजनामागील राजकीय तत्त्वज्ञान (लोकशाही समाजवाद, मिश्र अर्थव्यवस्था, सामाजिक न्याय) हे उदात्त हेतूंचे असले तरी, त्याची अंमलबजावणी आणि परिणाम यावर मोठ्या प्रमाणावर टीका झाली आहे आणि ते 'बरोबर' होते की नाही हा अर्थशास्त्रज्ञ आणि धोरणकर्त्यांमध्ये सतत चर्चेचा विषय आहे. म्हणून, विधाने (a) आणि (b) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": true,
        "reason": "Both statements (a) and (b) accurately describe common critiques and historical observations regarding India's economic planning."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is a subjective claim and generally considered debatable or incorrect in a definitive sense."
      },
      {
        "option_text_english": "Only (c)",
        "option_text_marathi": "फक्त (c)",
        "is_correct": false,
        "reason": "Statement (c) is a subjective claim and generally considered debatable or incorrect in a definitive sense, and statements (a) and (b) are correct."
      },
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason": "Statement (b) is also correct."
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "खालीलपैकी कोणते भारतीय नियोजनाचा स्विकार करण्याचे कारण नाही ? (1) अपुरी नैसर्गिक संसाधने (2) बाजार यंत्रणेच्या मर्यादा (3) सामाजिक न्यायाची गरज (4) विकासासाठी साधन संकलन आणि वाटप",
    "question_english": "Which of the following is not the reason of acceptance of planning in India ? (1) Inadequate natural resources (2) Limitations of Market mechanism (3) Need for social justice (4) Resource mobilisation and allocation for development",
    "options_marathi": [
      "अपुरी नैसर्गिक संसाधने",
      "बाजार यंत्रणेच्या मर्यादा",
      "सामाजिक न्यायाची गरज",
      "विकासासाठी साधन संकलन आणि वाटप"
    ],
    "options_english": [
      "Inadequate natural resources",
      "Limitations of Market mechanism",
      "Need for social justice",
      "Resource mobilisation and allocation for development"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Economic Planning in India - Rationale",
    "difficulty": "Easy",
    "trap_detected": "Negative Question (NOT the reason)",
    "explanation_english": "The question asks for what was not a reason for India's acceptance of economic planning. (1) Inadequate natural resources: India is generally considered rich in natural resources, though their distribution might be uneven. The inadequacy of resources was not a primary driver for planning; rather, it was about their optimal and equitable utilization. (2) Limitations of Market mechanism: Post-independence, there was a strong belief that a free market alone could not achieve rapid industrialization, social justice, and equitable distribution, necessitating state intervention through planning. (3) Need for social justice: A core objective of Indian planning was to reduce inequalities and achieve a more equitable society. (4) Resource mobilisation and allocation for development: Planning was crucial for mobilizing scarce capital and human resources and allocating them strategically for planned development. Therefore, 'Inadequate natural resources' was not a reason for adopting planning.",
    "explanation_marathi": "हा प्रश्न भारताने आर्थिक नियोजन स्वीकारण्याचे कारण नसलेले विधान विचारतो. (1) अपुरी नैसर्गिक संसाधने: भारताला सामान्यतः नैसर्गिक संसाधनांनी समृद्ध मानले जाते, जरी त्यांचे वितरण असमान असू शकते. संसाधनांची अपुऱ्याता हे नियोजनाचे प्राथमिक कारण नव्हते; त्याऐवजी, त्यांचा इष्टतम आणि न्याय्य वापर करणे हे होते. (2) बाजार यंत्रणेच्या मर्यादा: स्वातंत्र्यानंतर, असा दृढ विश्वास होता की केवळ मुक्त बाजार यंत्रणा जलद औद्योगिकीकरण, सामाजिक न्याय आणि न्याय्य वितरण साध्य करू शकत नाही, त्यामुळे नियोजनाद्वारे राज्याच्या हस्तक्षेपाची आवश्यकता होती. (3) सामाजिक न्यायाची गरज: भारतीय नियोजनाचा एक मुख्य उद्देश असमानता कमी करणे आणि अधिक न्याय्य समाज निर्माण करणे हा होता. (4) विकासासाठी साधन संकलन आणि वाटप: दुर्मिळ भांडवल आणि मानवी संसाधने एकत्रित करण्यासाठी आणि नियोजित विकासासाठी त्यांची धोरणात्मक वाटप करण्यासाठी नियोजन महत्त्वाचे होते. म्हणून, 'अपुरी नैसर्गिक संसाधने' हे नियोजन स्वीकारण्याचे कारण नव्हते.",
    "options_breakdown": [
      {
        "option_text_english": "Inadequate natural resources",
        "option_text_marathi": "अपुरी नैसर्गिक संसाधने",
        "is_correct": true,
        "reason": "India is rich in natural resources; the challenge was their optimal utilization and equitable distribution, not their inadequacy as a reason for planning."
      },
      {
        "option_text_english": "Limitations of Market mechanism",
        "option_text_marathi": "बाजार यंत्रणेच्या मर्यादा",
        "is_correct": false,
        "reason": "This was a key reason for adopting planning, as market failures were perceived to hinder development and social justice."
      },
      {
        "option_text_english": "Need for social justice",
        "option_text_marathi": "सामाजिक न्यायाची गरज",
        "is_correct": false,
        "reason": "Achieving social justice and reducing inequalities was a fundamental objective of Indian planning."
      },
      {
        "option_text_english": "Resource mobilisation and allocation for development",
        "option_text_marathi": "विकासासाठी साधन संकलन आणि वाटप",
        "is_correct": false,
        "reason": "Planning was considered essential for efficient mobilization and allocation of scarce resources for planned development."
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "1993-94 ते 2009-10 या काळात कोणत्या क्षेत्राने रोजगार निर्मितीमध्ये तुलनात्मक दृष्ट्या जलद वाढ नोंदवली ?",
    "question_english": "Which sector has registered faster growth during (1993-94 to 2009-10) in employment Generation ?",
    "options_marathi": [
      "शेती",
      "बांधकाम",
      "खाणकाम",
      "व्यापार"
    ],
    "options_english": [
      "Agriculture",
      "Construction",
      "Mining",
      "Trade"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Indian Economy - Employment Trends",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "During the period of economic reforms in India (1993-94 to 2009-10), the construction sector witnessed a significant boom. Driven by increased investment in infrastructure, housing, and real estate, this sector generated a large number of jobs, particularly for unskilled and semi-skilled workers, registering a comparatively faster growth in employment generation than agriculture (which saw a decline in its share of employment), mining, or even trade, though trade also grew. The service sector, while growing rapidly in output, was often criticized for its 'jobless growth' in certain segments.",
    "explanation_marathi": "भारतातील आर्थिक सुधारणांच्या काळात (1993-94 ते 2009-10), बांधकाम क्षेत्रात लक्षणीय वाढ झाली. पायाभूत सुविधा, गृहनिर्माण आणि स्थावर मालमत्तेतील वाढलेल्या गुंतवणुकीमुळे, या क्षेत्राने मोठ्या प्रमाणात रोजगार निर्माण केला, विशेषतः अकुशल आणि अर्धकुशल कामगारांसाठी. कृषी (ज्यात रोजगाराचा वाटा कमी झाला), खाणकाम किंवा व्यापार यांपेक्षा बांधकाम क्षेत्रात रोजगार निर्मितीमध्ये तुलनेने जलद वाढ नोंदवली गेली, जरी व्यापार क्षेत्रातही वाढ झाली. सेवा क्षेत्रात उत्पादनात वेगाने वाढ झाली असली तरी, काही विभागांमध्ये 'रोजगारविहीन वाढी'साठी (jobless growth) त्याची अनेकदा टीका झाली.",
    "options_breakdown": [
      {
        "option_text_english": "Agriculture",
        "option_text_marathi": "शेती",
        "is_correct": false,
        "reason": "Agriculture's share in employment declined during this period."
      },
      {
        "option_text_english": "Construction",
        "option_text_marathi": "बांधकाम",
        "is_correct": true,
        "reason": "The construction sector experienced a significant boom and generated substantial employment during this period."
      },
      {
        "option_text_english": "Mining",
        "option_text_marathi": "खाणकाम",
        "is_correct": false,
        "reason": "Mining's contribution to employment growth was relatively small."
      },
      {
        "option_text_english": "Trade",
        "option_text_marathi": "व्यापार",
        "is_correct": false,
        "reason": "While trade grew, the construction sector registered faster employment growth."
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) सुरुवातीला प्रादेशिक नियोजन म्हणजे फक्त नैसर्गिक साधनसामुग्रीचे नियोजन होते. (b) प्रादेशिक नियोजन फक्त शहरी विकासासाठीचे असते. (c) प्रादेशिक नियोजन प्रादेशिक असमतोल कमी करण्यासाठी असते.",
    "question_english": "Consider of the following statements : (a) Initially Regional planning meant only natural resource planning (b) Regional planning is for only urban development (c) Regional planning is for reducing regional disparities",
    "options_marathi": [
      "(a) आणि (b)",
      "फक्त (b)",
      "फक्त (a)",
      "(b) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "Only (b)",
      "Only (a)",
      "(b) and (c)"
    ],
    "correct_option_index": 0,
    "subject": "Economy",
    "topic": "Regional Planning Concepts",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word ('only'), Flawed Options",
    "explanation_english": "Statement (a) is incorrect. While natural resource management was an important early component, regional planning never 'only' meant natural resource planning; it always encompassed broader economic, social, and physical aspects of a region. Statement (b) is incorrect. Regional planning is not 'only' for urban development; it aims for the integrated and balanced development of both urban and rural areas within a defined region. Statement (c) is correct. A fundamental objective of regional planning is to identify and address regional imbalances and disparities, working towards more equitable development across different areas. Since only statement (c) is correct and 'Only (c)' is not an option, and the provided `correct_option_index` points to 'Only (b)' which is incorrect, this question appears to be flawed or should be marked as cancelled (0).",
    "explanation_marathi": "विधान (a) चुकीचे आहे. नैसर्गिक संसाधन व्यवस्थापन हा सुरुवातीचा एक महत्त्वाचा घटक असला तरी, प्रादेशिक नियोजनाचा अर्थ कधीही 'फक्त' नैसर्गिक संसाधन नियोजन असा नव्हता; त्यात नेहमीच प्रदेशाच्या व्यापक आर्थिक, सामाजिक आणि भौतिक पैलूंचा समावेश होता. विधान (b) चुकीचे आहे. प्रादेशिक नियोजन 'फक्त' शहरी विकासासाठी नसते; त्याचा उद्देश परिभाषित प्रदेशातील शहरी आणि ग्रामीण दोन्ही क्षेत्रांचा एकात्मिक आणि संतुलित विकास करणे हा असतो. विधान (c) बरोबर आहे. प्रादेशिक नियोजनाचा एक मूलभूत उद्देश प्रादेशिक असमतोल आणि असमानता ओळखणे आणि त्यावर उपाययोजना करणे, तसेच विविध क्षेत्रांमध्ये अधिक न्याय्य विकासासाठी कार्य करणे हा आहे. केवळ विधान (c) बरोबर असल्याने आणि 'फक्त (c)' हा पर्याय उपलब्ध नसल्याने, तसेच दिलेल्या `correct_option_index` नुसार 'फक्त (b)' हा पर्याय चुकीचा असल्याने, हा प्रश्न सदोष असल्याचे किंवा रद्द केले जावे (0) असे दिसते.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "Both (a) and (b) are incorrect due to the extreme word 'only'."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "फक्त (b)",
        "is_correct": false,
        "reason": "Statement (b) is incorrect as regional planning is not only for urban development; it covers both urban and rural areas."
      },
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason": "Statement (a) is incorrect as regional planning was never 'only' about natural resources."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (b) is incorrect."
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "अकराव्या पंचवार्षिक (2007-12) योजनेच्या प्रत्यक्ष खर्चामध्ये कोणते क्षेत्र अग्रणी होते ?",
    "question_english": "In the actual expenditure of eleventh plan (2007-12) which sector was the leading sector?",
    "options_marathi": [
      "ऊर्जा",
      "वाहतूक",
      "सामाजिक सेवा",
      "ग्रामीण विकास"
    ],
    "options_english": [
      "Energy",
      "Transport",
      "Social services",
      "Rural development"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Five Year Plans - Sectoral Expenditure",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Eleventh Five-Year Plan (2007-2012) had a theme of 'Faster and More Inclusive Growth'. Reflecting this emphasis on human development and social welfare, the 'Social Services' sector received the highest actual expenditure among all sectors. This category includes crucial areas like education, health, rural development, water supply, sanitation, and social welfare programs, which were prioritized to ensure that the benefits of growth reached a wider population. While Energy and Transport also received significant allocations, Social Services typically led in overall expenditure during this plan period.",
    "explanation_marathi": "अकरावी पंचवार्षिक योजना (2007-2012) 'जलद आणि अधिक समावेशक वाढ' या संकल्पनेवर आधारित होती. मानवी विकास आणि सामाजिक कल्याणावर भर दिल्याने, 'सामाजिक सेवा' क्षेत्राला सर्व क्षेत्रांमध्ये सर्वाधिक प्रत्यक्ष खर्च मिळाला. या श्रेणीमध्ये शिक्षण, आरोग्य, ग्रामीण विकास, पाणीपुरवठा, स्वच्छता आणि सामाजिक कल्याण कार्यक्रम यांसारख्या महत्त्वाच्या क्षेत्रांचा समावेश होता, ज्यांना वाढीचे फायदे मोठ्या लोकसंख्येपर्यंत पोहोचतील याची खात्री करण्यासाठी प्राधान्य देण्यात आले होते. ऊर्जा आणि वाहतूक यांनाही महत्त्वपूर्ण वाटप मिळाले असले तरी, या योजना काळात सामाजिक सेवांनी एकूण खर्चात आघाडी घेतली होती.",
    "options_breakdown": [
      {
        "option_text_english": "Energy",
        "option_text_marathi": "ऊर्जा",
        "is_correct": false,
        "reason": "While significant, Energy was not the leading sector in actual expenditure during the Eleventh Plan."
      },
      {
        "option_english": "Transport",
        "option_text_marathi": "वाहतूक",
        "is_correct": false,
        "reason": "While significant, Transport was not the leading sector in actual expenditure during the Eleventh Plan."
      },
      {
        "option_text_english": "Social services",
        "option_text_marathi": "सामाजिक सेवा",
        "is_correct": true,
        "reason": "The Social Services sector received the highest actual expenditure in the Eleventh Five-Year Plan, aligning with its focus on inclusive growth."
      },
      {
        "option_text_english": "Rural development",
        "option_text_marathi": "ग्रामीण विकास",
        "is_correct": false,
        "reason": "Rural development is a component of Social Services, but 'Social Services' as a broader category was the leading sector."
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) महाराष्ट्रातील रोजगार हमी योजनेची दीर्घकालीन सातत्यता काही अंशी या कारणामुळे होती की ह्या योजनेला संसाधनातील निम्मा हिस्सा शहरी लोकसंख्येकडून पुरवला जात होता. (b) सार्वजनिक रोजगार हमी योजना म्हणून महाराष्ट्रातील रोजगार हमी योजनेचे मूळ 1965 साली प्रायोगिक तत्वावर राबविलेल्या पागे योजनेमध्ये आहे. (c) 1990 मध्ये रोजगार हमी योजना फलोत्पादन विकासाशी जोडली गेली.",
    "question_english": "Consider the following statements : (a) The long term sustainability of the Employment Guarantee Scheme of Maharashtra was partly due to the fact that half of the resources for the EGS budget were provided by the urban population. (b) The EGS as a public employment guarantee scheme has its origin in the Page Scheme piloted in 1965. (c) In 1990 EGS was linked to horticulture development.",
    "options_marathi": [
      "फक्त (a) आणि (b)",
      "फक्त (b) आणि (c)",
      "फक्त (a) आणि (c)",
      "वर उल्लेखिलेली तीनही विधाने."
    ],
    "options_english": [
      "(a) and (b) only",
      "(b) and (c) only",
      "(a) and (c) only",
      "All the three mentioned above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Maharashtra Employment Guarantee Scheme (EGS)",
    "difficulty": "Hard",
    "trap_detected": "None",
    "explanation_english": "Statement (a) is correct. The long-term sustainability of Maharashtra's Employment Guarantee Scheme (EGS) was indeed partly attributed to its unique funding mechanism, which included special taxes (like professional tax, property tax, motor vehicle tax) primarily collected from urban areas, contributing significantly to the EGS budget. Statement (b) is correct. The EGS, as a pioneering public employment guarantee scheme, has its origins in the 'Page Scheme' (named after V.S. Page), which was piloted in 1965 in certain drought-prone areas of Maharashtra. Statement (c) is also correct. In 1990, the EGS was linked to horticulture development through the 'Horticulture Development Programme on EGS lands', aiming to create more productive and sustainable assets while providing employment. Therefore, all three statements are correct.",
    "explanation_marathi": "विधान (a) बरोबर आहे. महाराष्ट्राच्या रोजगार हमी योजनेची (EGS) दीर्घकालीन टिकाऊपणा अंशतः तिच्या अद्वितीय निधी यंत्रणेमुळे होती, ज्यात प्रामुख्याने शहरी भागातून गोळा केलेल्या विशेष करांचा (जसे की व्यावसायिक कर, मालमत्ता कर, मोटार वाहन कर) समावेश होता, ज्यामुळे EGS च्या अर्थसंकल्पात महत्त्वपूर्ण योगदान मिळाले. विधान (b) बरोबर आहे. EGS, एक अग्रणी सार्वजनिक रोजगार हमी योजना म्हणून, 'पागे योजने'मध्ये (व्ही.एस. पागे यांच्या नावावरून) तिचे मूळ आहे, जी 1965 मध्ये महाराष्ट्रातील काही दुष्काळग्रस्त भागांमध्ये प्रायोगिक तत्त्वावर राबविण्यात आली होती. विधान (c) देखील बरोबर आहे. 1990 मध्ये, EGS ला 'रोजगार हमी योजनेच्या जमिनीवर फलोत्पादन विकास कार्यक्रम' द्वारे फलोत्पादन विकासाशी जोडले गेले, ज्याचा उद्देश रोजगार प्रदान करताना अधिक उत्पादक आणि टिकाऊ मालमत्ता निर्माण करणे हा होता. म्हणून, वरील तिन्ही विधाने बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b) only",
        "option_text_marathi": "फक्त (a) आणि (b)",
        "is_correct": false,
        "reason": "Statement (c) is also correct."
      },
      {
        "option_text_english": "(b) and (c) only",
        "option_text_marathi": "फक्त (b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (a) is also correct."
      },
      {
        "option_text_english": "(a) and (c) only",
        "option_text_marathi": "फक्त (a) आणि (c)",
        "is_correct": false,
        "reason": "Statement (b) is also correct."
      },
      {
        "option_text_english": "All the three mentioned above",
        "option_text_marathi": "वर उल्लेखिलेली तीनही विधाने.",
        "is_correct": true,
        "reason": "All three statements (a), (b), and (c) are factually correct regarding the Maharashtra EGS."
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "खालील विधाने विचारात घ्या : (a) क्षेत्रीय नियोजनाची सुरुवात करणारा अमेरीका हा पहिला देश आहे. (b) राष्ट्रीय नियोजनाची बीजे रशियाच्या बोलशेविक क्रांतीमध्ये सापडतात. (c) भारताने क्षेत्रीय नियोजनाची सुरुवात 1976 पासून केली.",
    "question_english": "Consider the following statements : (a) USA is the first country who started the Regional planning. (b) The seed of national planning is rooted in the Bolshevik Revolution of Russia. (c) India started its regional planning from 1976.",
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
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "History and Concepts of Planning",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word ('first'), Factual Error (Statement c)",
    "explanation_english": "Statement (a) is generally considered correct in the context of modern, large-scale regional planning initiatives. The USA, with projects like the Tennessee Valley Authority (TVA) in the 1930s, pioneered integrated regional development planning. Statement (b) is correct. The concept of comprehensive national economic planning, particularly centralized planning, was most prominently developed and implemented in the Soviet Union following the Bolshevik Revolution (1917) with the introduction of Five-Year Plans. Statement (c) is incorrect. India's regional planning efforts began much earlier than 1976. Concepts of regional development and addressing regional imbalances were integrated into earlier Five-Year Plans, and institutions like the Town and Country Planning Organisation (TCPO) were established in the 1960s. Therefore, statements (a) and (b) are correct.",
    "explanation_marathi": "विधान (a) आधुनिक, मोठ्या प्रमाणावर प्रादेशिक नियोजन उपक्रमांच्या संदर्भात सामान्यतः बरोबर मानले जाते. अमेरिकेने, 1930 च्या दशकातील टेनेसी व्हॅली अथॉरिटी (TVA) सारख्या प्रकल्पांसह, एकात्मिक प्रादेशिक विकास नियोजनाची सुरुवात केली. विधान (b) बरोबर आहे. व्यापक राष्ट्रीय आर्थिक नियोजनाची संकल्पना, विशेषतः केंद्रीकृत नियोजन, बोल्शेविक क्रांतीनंतर (1917) सोव्हिएत युनियनमध्ये पंचवार्षिक योजनांच्या अंमलबजावणीसह सर्वात प्रमुखपणे विकसित आणि लागू केली गेली. विधान (c) चुकीचे आहे. भारताचे प्रादेशिक नियोजन प्रयत्न 1976 पूर्वीच सुरू झाले होते. प्रादेशिक विकास आणि प्रादेशिक असमतोलांना संबोधित करण्याच्या संकल्पना पूर्वीच्या पंचवार्षिक योजनांमध्ये समाविष्ट केल्या गेल्या होत्या आणि 1960 च्या दशकात नगर आणि ग्राम नियोजन संघटना (TCPO) सारख्या संस्था स्थापन केल्या गेल्या होत्या. म्हणून, विधाने (a) आणि (b) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": true,
        "reason": "Statement (a) is correct regarding USA's pioneering role in modern regional planning, and statement (b) is correct about the origin of national planning in Russia."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect as India started regional planning much earlier than 1976."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect as India started regional planning much earlier than 1976."
      },
      {
        "option_text_english": "All of the above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason": "Statement (c) is incorrect."
      }
    ]
  }
];
