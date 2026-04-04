const mockTestData2_4_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "आठ व्यक्तीच्या कुटुंबात तीन विवाहित जोडी आहेत. सीमा ही श्रीची आजी आणि केतनची सासू आहे. संजयचा भाऊ असलेल्या अजयची नेहा ही मुलगी आहे. आर्या हे संजयचे एकूलते एक अपत्य आहे आणि ती श्रीची आई आहे. गीता ही अजयची पत्नी आहे तर आर्याची आई ______ आहे.",
    "question_english": "A family of eight persons has three married couples. Seema is the grandmother of Shree and is the mother-in-law of Ketan. Neha is the daughter of Ajay, who is the brother of Sanjay. Arya is the only child of Sanjay and is mother of Shree. Geeta is the wife of Ajay. Then Arya's mother is ______",
    "options_marathi": [
      "गीता",
      "सीमा",
      "नेहा",
      "निलम"
    ],
    "options_english": [
      "Geeta",
      "Seema",
      "Neha",
      "Nilam"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Medium",
    "trap_detected": "Complex Information Overload",
    "explanation_english": "To solve this blood relations puzzle, we construct a family tree based on the given information. \n1. Seema is the grandmother of Shree, meaning Seema is two generations above Shree. \n2. Arya is the mother of Shree, placing Arya one generation above Shree. \n3. Arya is the only child of Sanjay. Combining with the above, Sanjay is Shree's grandfather and Arya's father. \n4. From (1) and (3), Seema must be Sanjay's wife to be Shree's grandmother and Arya's mother. So, Seema and Sanjay are a married couple, and Arya is their daughter.\n5. Seema is the mother-in-law of Ketan. Since Arya is Seema's only child (and female), Ketan must be Arya's husband. So, Arya and Ketan are a married couple.\n6. Ajay is Sanjay's brother. Geeta is Ajay's wife. So, Ajay and Geeta are a married couple.\n7. Neha is the daughter of Ajay and Geeta.\n\nWe have 8 persons (Seema, Sanjay, Arya, Ketan, Shree, Ajay, Geeta, Neha) and 3 married couples (Seema-Sanjay, Arya-Ketan, Ajay-Geeta). All conditions are met. \n\nThe question asks for Arya's mother. From our tree, Seema is married to Sanjay, and Arya is their daughter. Therefore, Seema is Arya's mother.",
    "explanation_marathi": "हे नातेसंबंधांचे कोडे सोडवण्यासाठी, दिलेल्या माहितीच्या आधारे आपण एक कुटुंबवृक्ष तयार करतो.\n1. सीमा ही श्रीची आजी आहे, याचा अर्थ सीमा श्रीपेक्षा दोन पिढ्या वर आहे.\n2. आर्या ही श्रीची आई आहे, म्हणजे आर्या श्रीपेक्षा एक पिढी वर आहे.\n3. आर्या ही संजयचे एकुलते एक अपत्य आहे. वरील माहितीनुसार, संजय हा श्रीचा आजोबा आणि आर्याचा वडील आहे.\n4. (1) आणि (3) नुसार, सीमा ही श्रीची आजी आणि आर्याची आई होण्यासाठी संजयची पत्नी असणे आवश्यक आहे. त्यामुळे, सीमा आणि संजय हे विवाहित जोडपे आहेत आणि आर्या त्यांची मुलगी आहे.\n5. सीमा ही केतनची सासू आहे. आर्या ही सीमाची एकुलती एक मुलगी (आणि स्त्री) असल्याने, केतन हा आर्याचा नवरा असला पाहिजे. त्यामुळे, आर्या आणि केतन हे विवाहित जोडपे आहेत.\n6. अजय हा संजयचा भाऊ आहे. गीता ही अजयची पत्नी आहे. त्यामुळे, अजय आणि गीता हे विवाहित जोडपे आहेत.\n7. नेहा ही अजय आणि गीताची मुलगी आहे.\n\nआपल्याकडे 8 व्यक्ती (सीमा, संजय, आर्या, केतन, श्री, अजय, गीता, नेहा) आणि 3 विवाहित जोडपी (सीमा-संजय, आर्या-केतन, अजय-गीता) आहेत. सर्व अटी पूर्ण होतात.\n\nप्रश्न विचारतो की आर्याची आई कोण आहे. आपल्या कुटुंबवृक्षानुसार, सीमा संजयशी विवाहित आहे आणि आर्या त्यांची मुलगी आहे. म्हणून, सीमा ही आर्याची आई आहे.",
    "options_breakdown": [
      {
        "option": "गीता",
        "is_correct": false,
        "reason_english": "Geeta is the wife of Ajay and mother of Neha. She is Arya's aunt (Sanjay's sister-in-law), not her mother.",
        "reason_marathi": "गीता ही अजयची पत्नी आणि नेहाची आई आहे. ती आर्याची काकू (संजयची वहिनी) आहे, तिची आई नाही."
      },
      {
        "option": "सीमा",
        "is_correct": true,
        "reason_english": "Based on the family tree constructed, Seema is married to Sanjay, and Arya is their daughter. Thus, Seema is Arya's mother.",
        "reason_marathi": "तयार केलेल्या कुटुंबवृक्षानुसार, सीमा संजयशी विवाहित आहे आणि आर्या त्यांची मुलगी आहे. त्यामुळे, सीमा ही आर्याची आई आहे."
      },
      {
        "option": "नेहा",
        "is_correct": false,
        "reason_english": "Neha is the daughter of Ajay and Geeta. She is Arya's cousin, not her mother.",
        "reason_marathi": "नेहा ही अजय आणि गीताची मुलगी आहे. ती आर्याची चुलत बहीण आहे, तिची आई नाही."
      },
      {
        "option": "निलम",
        "is_correct": false,
        "reason_english": "Nilam is not mentioned in the family description, making this an irrelevant option.",
        "reason_marathi": "निलमचा उल्लेख कुटुंबाच्या वर्णनात नाही, त्यामुळे हा पर्याय असंबद्ध आहे."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "बाहेरच्यांनी विचारलेल्या कोणत्याही प्रश्नाला पिपा बेटावरील रहिवासी नेहमीच दोन वाक्यांत प्रतिसाद देतात. त्यातले एक नेहमी सत्य तर दुसरे खोटे असते, जेव्हा मिनीने विचारले, “तुमच्या बेटावरील बहुसंख्य लोक कोणत्या नाचाचा आस्वाद घेतात\" ? तीन बेटवासीयांनी दिलेले प्रतिसाद पुढीलप्रमाणे आहेत. अ. बहुसंख्य लोक कथकचा आस्वाद घेतात. क्रिकेट पाहणे व खेळणे आम्हाला आवडते. ब. बहुसंख्य लोक कुचिपुडीचा आस्वाद घेतात. क्रिकेट पाहणे व खेळणे आम्हाला आवडत नाही. क. बहुसंख्य लोक भरतनाट्यमचा आस्वाद घेतात. क्रिकेट पाहणे व खेळणे आम्हाला आवडते. पिपावरील बहुसंख्य लोक आस्वाद घेत असलेला नाचाचा प्रकार निवडा.",
    "question_english": "Inhabitants of island Pipa always answer any question asked by outsider with two sentences: one is always true and other is false. When Mini asked. \"Which dance is appreciated by majority of people of your island?\" Three islander replies were as follows. A. Kathak is appreciated by the majority. We enjoy watching and playing cricket. B. Kuchipudi is appreciated by the majority. We don't like watching and playing cricket. C. Bharatanatyam is appreciated by the majority. We enjoy watching and playing cricket. Select the dance that is appreciated by majority of people of Pipa.",
    "options_marathi": [
      "भरतनाट्यम",
      "कथक",
      "कुचिपुडी",
      "निश्चित करता येणार नाही"
    ],
    "options_english": [
      "Bharatanatyam",
      "Kathak",
      "Kuchipudi",
      "Cannot be determined"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Logical Deduction (Truth and Lie)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Each islander makes two statements, one true and one false. Let's denote 'C' as the statement 'We enjoy watching and playing cricket'.\n\nIslander A: (A1) Kathak is appreciated by the majority. (A2) C is true.\nIslander B: (B1) Kuchipudi is appreciated by the majority. (B2) C is false.\nIslander C: (C1) Bharatanatyam is appreciated by the majority. (C2) C is true.\n\nConsider two cases for statement C:\nCase 1: C is TRUE. (We enjoy watching and playing cricket)\n*   For Islander A: A2 (C is true) is TRUE. Therefore, A1 (Kathak is majority dance) must be FALSE.\n*   For Islander B: B2 (C is false) is FALSE. Therefore, B1 (Kuchipudi is majority dance) must be TRUE.\n*   For Islander C: C2 (C is true) is TRUE. Therefore, C1 (Bharatanatyam is majority dance) must be FALSE.\nIn this case, Kuchipudi is the majority dance. This is consistent.\n\nCase 2: C is FALSE. (We don't enjoy watching and playing cricket)\n*   For Islander A: A2 (C is true) is FALSE. Therefore, A1 (Kathak is majority dance) must be TRUE.\n*   For Islander B: B2 (C is false) is TRUE. Therefore, B1 (Kuchipudi is majority dance) must be FALSE.\n*   For Islander C: C2 (C is true) is FALSE. Therefore, C1 (Bharatanatyam is majority dance) must be TRUE.\nIn this case, both Kathak and Bharatanatyam are claimed to be the majority dance, which is a contradiction as only one can be. Thus, Case 2 is impossible.\n\nTherefore, Case 1 must be true. The statement 'We enjoy watching and playing cricket' is TRUE, and Kuchipudi is the dance appreciated by the majority.",
    "explanation_marathi": "प्रत्येक बेटकरी दोन विधाने करतो, त्यापैकी एक सत्य आणि दुसरे असत्य असते. 'C' हे विधान 'आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते' असे मानूया.\n\nबेटकरी अ: (अ1) बहुसंख्य लोक कथकचा आस्वाद घेतात. (अ2) C सत्य आहे.\nबेटकरी ब: (ब1) बहुसंख्य लोक कुचिपुडीचा आस्वाद घेतात. (ब2) C असत्य आहे.\nबेटकरी क: (क1) बहुसंख्य लोक भरतनाट्यमचा आस्वाद घेतात. (क2) C सत्य आहे.\n\nविधान C साठी दोन शक्यता विचारात घेऊया:\nप्रकरण 1: C सत्य आहे. (आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते)\n*   बेटकरी अ साठी: अ2 (C सत्य आहे) हे सत्य आहे. म्हणून, अ1 (कथक बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे असत्य असले पाहिजे.\n*   बेटकरी ब साठी: ब2 (C असत्य आहे) हे असत्य आहे. म्हणून, ब1 (कुचिपुडी बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे सत्य असले पाहिजे.\n*   बेटकरी क साठी: क2 (C सत्य आहे) हे सत्य आहे. म्हणून, क1 (भरतनाट्यम बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे असत्य असले पाहिजे.\nया प्रकरणात, कुचिपुडी हा बहुसंख्य लोकांचा नृत्यप्रकार आहे. हे सुसंगत आहे.\n\nप्रकरण 2: C असत्य आहे. (आम्हाला क्रिकेट पाहणे आणि खेळणे आवडत नाही)\n*   बेटकरी अ साठी: अ2 (C सत्य आहे) हे असत्य आहे. म्हणून, अ1 (कथक बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे सत्य असले पाहिजे.\n*   बेटकरी ब साठी: ब2 (C असत्य आहे) हे सत्य आहे. म्हणून, ब1 (कुचिपुडी बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे असत्य असले पाहिजे.\n*   बेटकरी क साठी: क2 (C सत्य आहे) हे असत्य आहे. म्हणून, क1 (भरतनाट्यम बहुसंख्य लोकांचा नृत्यप्रकार आहे) हे सत्य असले पाहिजे.\nया प्रकरणात, कथक आणि भरतनाट्यम दोन्ही बहुसंख्य लोकांचे नृत्यप्रकार असल्याचा दावा केला जातो, जो विरोधाभास आहे कारण एकच नृत्यप्रकार बहुसंख्य लोकांचा असू शकतो. त्यामुळे, प्रकरण 2 अशक्य आहे.\n\nम्हणून, प्रकरण 1 सत्य असले पाहिजे. 'आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते' हे विधान सत्य आहे आणि कुचिपुडी हा बहुसंख्य लोकांचा नृत्यप्रकार आहे.",
    "options_breakdown": [
      {
        "option": "भरतनाट्यम",
        "is_correct": false,
        "reason_english": "If Bharatanatyam were the majority dance, then according to Islander C, 'We enjoy watching and playing cricket' would have to be false. This leads to a contradiction with Islander A and B's statements.",
        "reason_marathi": "जर भरतनाट्यम हा बहुसंख्य लोकांचा नृत्यप्रकार असता, तर बेटकरी क नुसार, 'आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते' हे असत्य असावे लागले असते. यामुळे बेटकरी अ आणि ब च्या विधानांशी विरोधाभास निर्माण होतो."
      },
      {
        "option": "कथक",
        "is_correct": false,
        "reason_english": "If Kathak were the majority dance, then according to Islander A, 'We enjoy watching and playing cricket' would have to be false. This also leads to a contradiction with Islander B and C's statements.",
        "reason_marathi": "जर कथक हा बहुसंख्य लोकांचा नृत्यप्रकार असता, तर बेटकरी अ नुसार, 'आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते' हे असत्य असावे लागले असते. यामुळे बेटकरी ब आणि क च्या विधानांशी देखील विरोधाभास निर्माण होतो."
      },
      {
        "option": "कुचिपुडी",
        "is_correct": true,
        "reason_english": "Assuming 'We enjoy watching and playing cricket' is true, then Islander B's first statement ('Kuchipudi is appreciated by the majority') must be true, and this leads to a consistent scenario where Kathak and Bharatanatyam are not the majority dances.",
        "reason_marathi": "'आम्हाला क्रिकेट पाहणे आणि खेळणे आवडते' हे सत्य मानल्यास, बेटकरी ब चे पहिले विधान ('कुचिपुडी बहुसंख्य लोकांना आवडते') सत्य असले पाहिजे आणि यामुळे कथक आणि भरतनाट्यम हे बहुसंख्य लोकांचे नृत्यप्रकार नाहीत असे सुसंगत चित्र निर्माण होते."
      },
      {
        "option": "निश्चित करता येणार नाही",
        "is_correct": false,
        "reason_english": "Through logical deduction, we can definitively determine that Kuchipudi is the dance appreciated by the majority.",
        "reason_marathi": "तार्किक निष्कर्षाद्वारे, आपण निश्चितपणे ठरवू शकतो की कुचिपुडी हा बहुसंख्य लोकांना आवडणारा नृत्यप्रकार आहे."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "अंड्याच्या कवचाचे आवरण (अ) असते. यामुळे अंडे उकडायला मीठाच्या पाण्याचा उपयोग केला तर ते चवीला खारट लागते. याच कारणाने शीतकपाटात साठवताना अंडी न झाकलेल्या तीव्र गंधाच्या अन्नासोबत ठेवली तर तो अंड्यांत (ब) व त्याची चव बिघडते.",
    "question_english": "The membrane lining of an eggshell is (a) ______ and this is the reason using salt water to boil an egg can make the egg taste salty. For the same reason, it is important not to store eggs in the refrigerator with uncovered, strong-smelling food items since the scents can (b) ______ the egg, causing it to taste bad.",
    "options_marathi": [
      "लवचीक व सडवतो",
      "सच्छिद्र व पाझरतो",
      "न पाझरणारे व संसर्ग करतो",
      "सच्छिद्र व सडवतो"
    ],
    "options_english": [
      "Flexible and addle",
      "Porous and percolate",
      "Impermeable and infect",
      "Porous and addle"
    ],
    "correct_option_index": 2,
    "subject": "Science",
    "topic": "Biology/Chemistry (Egg Structure)",
    "difficulty": "Easy",
    "trap_detected": "Similar Sounding Words",
    "explanation_english": "Eggshells are known to be porous, meaning they have tiny pores that allow for gas exchange (oxygen in, carbon dioxide out) for the developing embryo. This porosity also means that liquids and gases (like strong odors) can pass through the shell and its inner membrane. Therefore, if an egg is boiled in salt water, the salt can percolate (pass through) the porous shell and membrane, making the egg taste salty. Similarly, if eggs are stored near strong-smelling foods, the odors can percolate into the egg, affecting its taste. 'Porous' accurately describes the eggshell's property, and 'percolate' describes the movement of substances through it.",
    "explanation_marathi": "अंड्याची कवचे सच्छिद्र असतात, म्हणजे त्यांना लहान छिद्रे असतात जी वाढणाऱ्या गर्भासाठी वायूंच्या देवाणघेवाणीला (ऑक्सिजन आत, कार्बन डायऑक्साइड बाहेर) परवानगी देतात. या सच्छिद्रतेमुळे द्रव आणि वायू (जसे की तीव्र वास) कवचातून आणि त्याच्या आतील पडद्यातून जाऊ शकतात. त्यामुळे, जर अंडे मिठाच्या पाण्यात उकळले तर मीठ सच्छिद्र कवच आणि पडद्यातून पाझरू शकते, ज्यामुळे अंड्याला खारट चव येते. त्याचप्रमाणे, जर अंडी तीव्र वासाच्या पदार्थांजवळ ठेवली तर वास अंड्यात पाझरू शकतो, ज्यामुळे त्याची चव बिघडते. 'सच्छिद्र' हा शब्द अंड्याच्या कवचाचा गुणधर्म अचूकपणे वर्णन करतो आणि 'पाझरतो' हे त्यातून पदार्थांच्या हालचालीचे वर्णन करते.",
    "options_breakdown": [
      {
        "option": "लवचीक व सडवतो",
        "is_correct": false,
        "reason_english": "Eggshells are rigid, not flexible. 'Addle' means to make rotten or confused, which doesn't fit the context of odors affecting taste.",
        "reason_marathi": "अंड्याची कवचे कठीण असतात, लवचीक नाहीत. 'सडवतो' म्हणजे खराब करणे, जे वासाने चव बिघडवण्याच्या संदर्भात योग्य नाही."
      },
      {
        "option": "सच्छिद्र व पाझरतो",
        "is_correct": true,
        "reason_english": "Eggshells are porous, allowing substances to pass through. 'Percolate' accurately describes how salt or odors can pass through the shell and membrane to affect the egg's taste.",
        "reason_marathi": "अंड्याची कवचे सच्छिद्र असतात, ज्यामुळे पदार्थ आतून जाऊ शकतात. 'पाझरतो' हे मीठ किंवा वास कवचातून आणि पडद्यातून अंड्याच्या चवीवर कसा परिणाम करतात याचे अचूक वर्णन करते."
      },
      {
        "option": "न पाझरणारे व संसर्ग करतो",
        "is_correct": false,
        "reason_english": "Eggshells are not impermeable; they are porous. 'Infect' implies a biological contamination, not the absorption of taste/smell.",
        "reason_marathi": "अंड्याची कवचे न पाझरणारे नसतात; ती सच्छिद्र असतात. 'संसर्ग करतो' म्हणजे जैविक दूषितता, चव/वासाचे शोषण नाही."
      },
      {
        "option": "सच्छिद्र व सडवतो",
        "is_correct": false,
        "reason_english": "'Porous' is correct, but 'addle' (to make rotten) is incorrect in the context of strong smells merely altering the taste, not necessarily spoiling the egg.",
        "reason_marathi": "'सच्छिद्र' हे बरोबर आहे, परंतु 'सडवतो' (खराब करणे) हे तीव्र वासाने केवळ चव बदलण्याच्या संदर्भात चुकीचे आहे, अंडे खराब करण्याच्या संदर्भात नाही."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "सोबतच्या आकृतीतील चौकोनांची संख्या दर्शवणारा पर्याय निवडा.",
    "question_english": "Select option that indicates number of quadrangle in the accompanying image.",
    "options_marathi": [
      "15",
      "16",
      "17",
      "18"
    ],
    "options_english": [
      "15",
      "16",
      "17",
      "18"
    ],
    "correct_option_index": 0,
    "subject": "Math/Reasoning",
    "topic": "Counting Figures (Quadrilaterals)",
    "difficulty": "Medium",
    "trap_detected": "Missing Information",
    "explanation_english": "The accompanying image is missing, which is essential to count the number of quadrilaterals. Without the visual representation, it is impossible to accurately determine the correct answer. In competitive exams, such questions are sometimes cancelled if the image is not provided or is unclear. Given the `correct_option_index` as -1 in the input, it indicates that the question was likely cancelled or deemed unanswerable due to missing information.",
    "explanation_marathi": "सोबतची आकृती उपलब्ध नाही, जी चौकोनांची संख्या मोजण्यासाठी आवश्यक आहे. दृश्यात्मक प्रतिनिधित्वाशिवाय, अचूक उत्तर निश्चित करणे अशक्य आहे. स्पर्धा परीक्षांमध्ये, जर आकृती प्रदान केली नसेल किंवा अस्पष्ट असेल तर असे प्रश्न कधीकधी रद्द केले जातात. इनपुटमधील `correct_option_index` -1 असल्याने, हे सूचित करते की प्रश्न कदाचित रद्द केला गेला होता किंवा माहितीच्या अभावामुळे अनुत्तरित मानला गेला होता.",
    "options_breakdown": [
      {
        "option": "15",
        "is_correct": false,
        "reason_english": "Cannot be determined without the image.",
        "reason_marathi": "आकृतीशिवाय निश्चित करता येत नाही."
      },
      {
        "option": "16",
        "is_correct": false,
        "reason_english": "Cannot be determined without the image.",
        "reason_marathi": "आकृतीशिवाय निश्चित करता येत नाही."
      },
      {
        "option": "17",
        "is_correct": false,
        "reason_english": "Cannot be determined without the image.",
        "reason_marathi": "आकृतीशिवाय निश्चित करता येत नाही."
      },
      {
        "option": "18",
        "is_correct": false,
        "reason_english": "Cannot be determined without the image.",
        "reason_marathi": "आकृतीशिवाय निश्चित करता येत नाही."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "दिलेली माहिती वापरून संकेत प्रणाली शोधा आणि दिलेल्या पर्यायांतून rain या शब्दासाठी संकेत निवडा. • ‘ROSE MONKEY BASKET JUG' चा संकेत '9 # E, 31%Y, 26 $ T, 10 @ G' आहे. • 'JOB RIGID BALL MUG' चा संकेत '5 @ B, 16 $ L, 9 # D, 10% G' आहे. • 'MANGO BULB RABBIES JACKERS' चा संकेत '6 $ B, 26 # S, 20% O, 25 @ S' आहे. • 'RABBIT JAMES BUG MACAQUE' चा संकेत '26 #T, 12% E, 24 @ S, 10 $ G' आहे.",
    "question_english": "Study the code system using information given and select the code for word rain from given options. • 'ROSE MONKEY BASKET JUG' is written as '9 # E, 31%Y, 26 $ T, 10 @ G' • 'JOB RIGID BALL MUG' is written as '5 @ B, 16 $ L, 9 # D, 10% G' • 'MANGO BULB RABBIES JACKERS' is written as '6 $ B, 26 # S, 20% O, 25 @ S' • 'RABBIT JAMES BUG MACAQUE' is written as '26 #T, 12% E, 24 @ S, 10 $ G'",
    "options_marathi": [
      "8% N",
      "8 * N",
      "18 #N",
      "16 $ N"
    ],
    "options_english": [
      "8% N",
      "8 * N",
      "18 # N",
      "16 $ N"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Coding-Decoding",
    "difficulty": "Hard",
    "trap_detected": "Complex Number Pattern",
    "explanation_english": "Let's break down the coding pattern into three parts: Number, Symbol, and Letter.\n\n1.  **Letter Part**: Observe the last letter of each code. It consistently matches the last letter of the original word.\n    *   ROSE -> E, MONKEY -> Y, BASKET -> T, JUG -> G\n    *   JOB -> B, RIGID -> D, BALL -> L, MUG -> G\n    *   MANGO -> O, BULB -> B, RABBIES -> S, JACKERS -> S\n    *   RABBIT -> T, JAMES -> S, BUG -> G, MACAQUE -> E\n    For the word 'RAIN', the last letter is 'N'. So the code will end with 'N'.\n\n2.  **Symbol Part**: Observe the symbol associated with the first letter of the words.\n    *   Words starting with 'R' (ROSE, RIGID, RABBIES, RABBIT) use '#'.\n    *   Words starting with 'M' (MONKEY, MUG, MANGO, MACAQUE) use '%'.\n    *   Words starting with 'B' (BASKET, BALL, BULB, BUG) use '$'.\n    *   Words starting with 'J' (JUG, JOB, JACKERS, JAMES) use '@'.\n    For the word 'RAIN', the first letter is 'R', so the symbol will be '#'.\n\nCombining these two, the code for 'RAIN' must be `_ # N`.\n\nNow, let's look at the given options:\n    1.  8% N (Incorrect symbol)\n    2.  8 * N (Incorrect symbol)\n    3.  18 #N (Correct symbol and letter)\n    4.  16 $ N (Incorrect symbol)\n\nOnly option 3 matches the derived pattern for the symbol and the last letter. Therefore, '18 #N' is the correct code for 'RAIN'. While the pattern for the number (18 for RAIN) is not immediately obvious or consistently derived from a simple rule across all examples, the unique combination of symbol and last letter in the options makes option 3 the only viable choice.",
    "explanation_marathi": "संकेत प्रणालीला तीन भागांमध्ये विभागूया: संख्या, चिन्ह आणि अक्षर.\n\n1.  **अक्षर भाग**: प्रत्येक संकेतातील शेवटचे अक्षर पहा. ते मूळ शब्दाच्या शेवटच्या अक्षराशी सुसंगतपणे जुळते.\n    *   ROSE -> E, MONKEY -> Y, BASKET -> T, JUG -> G\n    *   JOB -> B, RIGID -> D, BALL -> L, MUG -> G\n    *   MANGO -> O, BULB -> B, RABBIES -> S, JACKERS -> S\n    *   RABBIT -> T, JAMES -> S, BUG -> G, MACAQUE -> E\n    'RAIN' या शब्दासाठी, शेवटचे अक्षर 'N' आहे. त्यामुळे संकेत 'N' ने संपेल.\n\n2.  **चिन्ह भाग**: शब्दांच्या पहिल्या अक्षराशी संबंधित चिन्ह पहा.\n    *   'R' ने सुरू होणारे शब्द (ROSE, RIGID, RABBIES, RABBIT) '#' वापरतात.\n    *   'M' ने सुरू होणारे शब्द (MONKEY, MUG, MANGO, MACAQUE) '%' वापरतात.\n    *   'B' ने सुरू होणारे शब्द (BASKET, BALL, BULB, BUG) '$' वापरतात.\n    *   'J' ने सुरू होणारे शब्द (JUG, JOB, JACKERS, JAMES) '@' वापरतात.\n    'RAIN' या शब्दासाठी, पहिले अक्षर 'R' आहे, त्यामुळे चिन्ह '#' असेल.\n\nया दोन भागांना एकत्र केल्यास, 'RAIN' साठीचा संकेत `_ # N` असा असला पाहिजे.\n\nआता, दिलेल्या पर्यायांकडे पाहूया:\n    1.  8% N (चुकीचे चिन्ह)\n    2.  8 * N (चुकीचे चिन्ह)\n    3.  18 #N (बरोबर चिन्ह आणि अक्षर)\n    4.  16 $ N (चुकीचे चिन्ह)\n\nफक्त पर्याय 3 चिन्ह आणि शेवटच्या अक्षराच्या व्युत्पन्न केलेल्या नमुन्याशी जुळतो. त्यामुळे, '18 #N' हा 'RAIN' साठीचा योग्य संकेत आहे. जरी संख्येचा नमुना (RAIN साठी 18) सर्व उदाहरणांमध्ये एका साध्या नियमातून सातत्याने काढता येत नसला तरी, पर्यायांमधील चिन्ह आणि शेवटच्या अक्षराचे अद्वितीय संयोजन पर्याय 3 ला एकमेव व्यवहार्य निवड बनवते.",
    "options_breakdown": [
      {
        "option": "8% N",
        "is_correct": false,
        "reason_english": "The symbol '%' is used for words starting with 'M', not 'R'.",
        "reason_marathi": "'%' हे चिन्ह 'M' ने सुरू होणाऱ्या शब्दांसाठी वापरले जाते, 'R' साठी नाही."
      },
      {
        "option": "8 * N",
        "is_correct": false,
        "reason_english": "The symbol '*' is not part of the given coding system.",
        "reason_marathi": "'*' हे चिन्ह दिलेल्या सांकेतिक प्रणालीचा भाग नाही."
      },
      {
        "option": "18 #N",
        "is_correct": true,
        "reason_english": "The first letter 'R' maps to the symbol '#', and the last letter 'N' is retained. This option correctly follows these two established patterns.",
        "reason_marathi": "पहिले अक्षर 'R' हे '#' चिन्हाशी जुळते आणि शेवटचे अक्षर 'N' तसेच राहते. हा पर्याय या दोन स्थापित नमुन्यांचे योग्यरित्या पालन करतो."
      },
      {
        "option": "16 $ N",
        "is_correct": false,
        "reason_english": "The symbol '$' is used for words starting with 'B', not 'R'.",
        "reason_marathi": "'$' हे चिन्ह 'B' ने सुरू होणाऱ्या शब्दांसाठी वापरले जाते, 'R' साठी नाही."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "खालील श्रेणीतील गाळलेली संख्या शोधा. 56, 93, 124, ____, 176, 195, 212",
    "question_english": "Find the missing number in the following series. 56, 93, 124, ____, 176, 195, 212",
    "options_marathi": [
      "147",
      "153",
      "161",
      "168"
    ],
    "options_english": [
      "147",
      "153",
      "161",
      "168"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Number Series",
    "difficulty": "Medium",
    "trap_detected": "Irregular Differences",
    "explanation_english": "Let's find the differences between consecutive terms in the given series:\n93 - 56 = 37\n124 - 93 = 31\n195 - 176 = 19\n212 - 195 = 17\n\nThe sequence of differences found so far is: 37, 31, ?, ?, 19, 17.\nUpon observing these differences, we notice that 37, 31, 19, and 17 are all prime numbers. Also, the differences are decreasing.\nIf we assume the missing differences are also prime numbers in a decreasing order, the sequence of prime numbers before 19 and after 31 would be 29 and 23.\nSo, the complete sequence of differences would be: 37, 31, 29, 23, 19, 17.\n\nNow, let's apply these differences to find the missing term:\n1st term: 56\n2nd term: 56 + 37 = 93\n3rd term: 93 + 31 = 124\n4th term (missing): 124 + 29 = 153\n5th term: 153 + 23 = 176 (This matches the given series)\n6th term: 176 + 19 = 195 (Matches)\n7th term: 195 + 17 = 212 (Matches)\n\nThus, the missing number in the series is 153.",
    "explanation_marathi": "दिलेल्या श्रेणीतील सलग संख्यांमधील फरक शोधूया:\n93 - 56 = 37\n124 - 93 = 31\n195 - 176 = 19\n212 - 195 = 17\n\nआतापर्यंत मिळालेल्या फरकांची श्रेणी: 37, 31, ?, ?, 19, 17.\nया फरकांचे निरीक्षण केल्यास, आपल्याला दिसते की 37, 31, 19 आणि 17 या सर्व मूळ संख्या आहेत. तसेच, फरक कमी होत आहेत.\nजर आपण असे गृहीत धरले की गहाळ फरक देखील उतरत्या क्रमाने मूळ संख्या आहेत, तर 19 च्या आधी आणि 31 नंतरच्या मूळ संख्या 29 आणि 23 असतील.\nत्यामुळे, फरकांची संपूर्ण श्रेणी अशी असेल: 37, 31, 29, 23, 19, 17.\n\nआता, गहाळ पद शोधण्यासाठी हे फरक लागू करूया:\nपहिले पद: 56\nदुसरे पद: 56 + 37 = 93\nतिसरे पद: 93 + 31 = 124\nचौथे पद (गहाळ): 124 + 29 = 153\nपाचवे पद: 153 + 23 = 176 (हे दिलेल्या श्रेणीशी जुळते)\nसहावे पद: 176 + 19 = 195 (जुळते)\nसातवे पद: 195 + 17 = 212 (जुळते)\n\nअशा प्रकारे, श्रेणीतील गहाळ संख्या 153 आहे.",
    "options_breakdown": [
      {
        "option": "147",
        "is_correct": false,
        "reason_english": "This would imply a difference of 23 (147-124), which does not fit the decreasing prime number pattern (37, 31, 29, 23, 19, 17).",
        "reason_marathi": "याचा अर्थ 23 चा फरक (147-124) असेल, जो उतरत्या मूळ संख्यांच्या नमुन्यात (37, 31, 29, 23, 19, 17) बसत नाही."
      },
      {
        "option": "153",
        "is_correct": true,
        "reason_english": "Adding 29 (the next prime number in the decreasing sequence after 31) to 124 gives 153. This fits the pattern of differences being decreasing prime numbers (37, 31, 29, 23, 19, 17).",
        "reason_marathi": "124 मध्ये 29 (31 नंतरच्या उतरत्या मूळ संख्यांच्या क्रमातील पुढील मूळ संख्या) मिळवल्यास 153 मिळते. हे फरकांच्या उतरत्या मूळ संख्यांच्या नमुन्यात (37, 31, 29, 23, 19, 17) बसते."
      },
      {
        "option": "161",
        "is_correct": false,
        "reason_english": "This would imply a difference of 37 (161-124), which breaks the decreasing pattern of differences.",
        "reason_marathi": "याचा अर्थ 37 चा फरक (161-124) असेल, जो फरकांच्या उतरत्या नमुन्याला खंडित करतो."
      },
      {
        "option": "168",
        "is_correct": false,
        "reason_english": "This would imply a difference of 44 (168-124), which does not fit the pattern of decreasing prime numbers.",
        "reason_marathi": "याचा अर्थ 44 चा फरक (168-124) असेल, जो उतरत्या मूळ संख्यांच्या नमुन्यात बसत नाही."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "जर '+' ऐवजी '-', '-' ऐवजी 'x', 'x' ऐवजी '÷', '÷' ऐवजी '+' तर 56 × 7 ÷ 13 – 11 + 15 – 8 ÷ 2 – 7 चे मूल्य किती येईल ?",
    "question_english": "If '+' stands for '-', '-' stands for 'x', 'x' stands for '÷' and '÷' stands for '+'. Then what is value of 56 × 7 ÷ 13 – 11 + 15 – 8 ÷ 2 – 7?",
    "options_marathi": [
      "30",
      "60",
      "45",
      "95"
    ],
    "options_english": [
      "30",
      "60",
      "45",
      "95"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Mathematical Operations",
    "difficulty": "Easy",
    "trap_detected": "Calculation Error",
    "explanation_english": "First, substitute the given new operations into the expression:\nOriginal expression: 56 × 7 ÷ 13 – 11 + 15 – 8 ÷ 2 – 7\n\nNew operations:\n'+' becomes '-'\n'-' becomes '×'\n'×' becomes '÷'\n'÷' becomes '+'\n\nSubstituting these, the expression becomes:\n56 ÷ 7 + 13 × 11 - 15 × 8 + 2 × 7\n\nNow, follow the order of operations (BODMAS/PEMDAS):\n1.  **Division**: 56 ÷ 7 = 8\n    Expression: 8 + 13 × 11 - 15 × 8 + 2 × 7\n\n2.  **Multiplication** (from left to right):\n    13 × 11 = 143\n    15 × 8 = 120\n    2 × 7 = 14\n    Expression: 8 + 143 - 120 + 14\n\n3.  **Addition and Subtraction** (from left to right):\n    8 + 143 = 151\n    151 - 120 = 31\n    31 + 14 = 45\n\nTherefore, the value of the expression is 45.",
    "explanation_marathi": "प्रथम, दिलेल्या नवीन क्रिया समीकरणात बदलूया:\nमूळ समीकरण: 56 × 7 ÷ 13 – 11 + 15 – 8 ÷ 2 – 7\n\nनवीन क्रिया:\n'+' म्हणजे '-'\n'-' म्हणजे '×'\n'×' म्हणजे '÷'\n'÷' म्हणजे '+'\n\nया बदलांनंतर, समीकरण असे होते:\n56 ÷ 7 + 13 × 11 - 15 × 8 + 2 × 7\n\nआता, क्रियांचा क्रम (BODMAS/PEMDAS) पाळा:\n1.  **भागाकार**: 56 ÷ 7 = 8\n    समीकरण: 8 + 13 × 11 - 15 × 8 + 2 × 7\n\n2.  **गुणाकार** (डावीकडून उजवीकडे):\n    13 × 11 = 143\n    15 × 8 = 120\n    2 × 7 = 14\n    समीकरण: 8 + 143 - 120 + 14\n\n3.  **बेरीज आणि वजाबाकी** (डावीकडून उजवीकडे):\n    8 + 143 = 151\n    151 - 120 = 31\n    31 + 14 = 45\n\nम्हणून, समीकरणाचे मूल्य 45 आहे.",
    "options_breakdown": [
      {
        "option": "30",
        "is_correct": false,
        "reason_english": "Incorrect calculation after substituting the operations.",
        "reason_marathi": "क्रिया बदलल्यानंतर चुकीची गणना."
      },
      {
        "option": "60",
        "is_correct": false,
        "reason_english": "Incorrect calculation after substituting the operations.",
        "reason_marathi": "क्रिया बदलल्यानंतर चुकीची गणना."
      },
      {
        "option": "45",
        "is_correct": true,
        "reason_english": "After correctly substituting the operations and following the BODMAS/PEMDAS rule, the final value of the expression is 45.",
        "reason_marathi": "क्रिया योग्यरित्या बदलल्यानंतर आणि BODMAS/PEMDAS नियमाचे पालन केल्यानंतर, समीकरणाचे अंतिम मूल्य 45 येते."
      },
      {
        "option": "95",
        "is_correct": false,
        "reason_english": "Incorrect calculation after substituting the operations.",
        "reason_marathi": "क्रिया बदलल्यानंतर चुकीची गणना."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "अलिकडे सर्वसाधारणपणे दीर्घ काळ काम आणि दुय्यम चार ही परिस्थिती स्वीकारली जात आहे परंतू त्याचा घरगुती जीवनावर गंभीर परिणाम होत आहे. हे काही चांगले चित्र नाही: तणावांची उच्च पातळी आणि चिंता या बाबी आर्थिक व्यवस्थेत सामान्य असतात कारण याने त्यांच्या वेळेवरचे नियोजन गमावल्याने ते लोक आजारी पडतात, लगेच मोडतात आणि मुलांना त्रास सोसावा लागतो. तरी देखील या परिस्थितीत राजकारणी आपल्याला टाळ्या वाजवायला निर्मित करतात. 'प्रयत्नांची पराकाष्ठा करणारे' आणि 'कष्टकरी लोक', तरीही शांत रहाणारे (गारदलेले), काळजी घेणारे माता पिता म्हणून ते आपली स्तुती करतात. जितका जास्त वेळ आपण कष्ट करतो तेवढा अधिक प्रमाणात प्रांतीयता आहे असे मानले जाते. म्हणजेच राजकीय घोषणा स्पष्टपणे परिणामकारक आहेत परंतू त्यातून माजलेले कष्ट हे देणारे आपल्याला पीडा देत आहेत. पुढील पर्यायांतून वरील प्रतिवादाचे आधारभूत गृहीतक निवडा.",
    "question_english": "Long hours and poor pay have become commonly accepted, but they are taking a heavy toll on life at home. It is not a pretty picture: an economy where high levels of stress and anxiety are normal, where people get ill because they have lost control of their time and where marriages are damaged and children suffer. Yet it is a situation that politicians invite us to applaud. They praise 'strivers' and 'hard-working people', not chilled-out, caring mums and dads. The longer and harder we work, the more admirable we are supposed to be. So the political slogans have clearly been effective, but the resulting glorification of work has made us miserable. Select one of the following that is underlying assumption of the above argument.",
    "options_marathi": [
      "राजकीय घोषणा लोकांच्या दैनंदिन वर्तनावर लक्षणीय परिणाम करतात",
      "कार्य आठवड्याची पुनर्बांधणी करणे अर्थव्यवस्थेसाठी लाभदायी ठरेल",
      "कंपन्या स्वतःच्या कामांना कमी कार्यकाळातही किंवा चांगला पगार देऊ शकतात",
      "कामाच्या ठिकाणी कमी ताण अनुभवणारे लोक चांगले पालक असतात"
    ],
    "options_english": [
      "Political slogans significantly affect people's everyday behaviour",
      "Restructuring the working week would be beneficial for the economy",
      "Companies could afford shorter hours or better pay for their employees",
      "People who experience less stress at work are better parents"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Critical Reasoning (Assumption)",
    "difficulty": "Medium",
    "trap_detected": "Distractor Options",
    "explanation_english": "The argument concludes that 'political slogans have clearly been effective, but the resulting glorification of work has made us miserable.' For political slogans to be 'effective' in influencing people to work longer and harder, it must be assumed that these slogans actually have a significant impact on people's daily behavior and choices. If political slogans had no effect on behavior, then the argument's conclusion about their effectiveness would be unfounded. Therefore, the underlying assumption is that political slogans can indeed influence how people act in their daily lives.",
    "explanation_marathi": "युक्तिवादाचा निष्कर्ष असा आहे की 'राजकीय घोषणा स्पष्टपणे परिणामकारक आहेत, परंतु त्यातून माजलेले कष्ट हे देणारे आपल्याला पीडा देत आहेत.' राजकीय घोषणा लोकांना जास्त वेळ आणि कठोर परिश्रम करण्यास प्रभावित करण्यासाठी 'परिणामकारक' ठरण्यासाठी, हे गृहीत धरले पाहिजे की या घोषणांचा लोकांच्या दैनंदिन वर्तन आणि निवडींवर लक्षणीय परिणाम होतो. जर राजकीय घोषणांचा वर्तनावर कोणताही परिणाम झाला नसता, तर त्यांच्या परिणामकारकतेबद्दलचा युक्तिवादाचा निष्कर्ष निराधार ठरला असता. म्हणून, मूलभूत गृहीतक हे आहे की राजकीय घोषणा खरोखरच लोकांच्या दैनंदिन जीवनातील कृतींवर प्रभाव टाकू शकतात.",
    "options_breakdown": [
      {
        "option": "राजकीय घोषणा लोकांच्या दैनंदिन वर्तनावर लक्षणीय परिणाम करतात",
        "is_correct": true,
        "reason_english": "This is a direct and necessary assumption. The argument states that political slogans 'have clearly been effective' in glorifying work and making people miserable. For them to be effective, they must influence behavior.",
        "reason_marathi": "हे एक थेट आणि आवश्यक गृहीतक आहे. युक्तिवाद सांगतो की राजकीय घोषणा 'स्पष्टपणे परिणामकारक' ठरल्या आहेत ज्यामुळे कामाचे उदात्तीकरण झाले आणि लोकांना दुःख झाले. त्या परिणामकारक होण्यासाठी, त्यांनी वर्तनावर प्रभाव टाकणे आवश्यक आहे."
      },
      {
        "option": "कार्य आठवड्याची पुनर्बांधणी करणे अर्थव्यवस्थेसाठी लाभदायी ठरेल",
        "is_correct": false,
        "reason_english": "While this might be a potential solution or a related idea, the argument focuses on the *impact* of current work culture and political rhetoric, not on economic benefits of alternative structures. It's not an underlying assumption of *this specific argument*.",
        "reason_marathi": "हे एक संभाव्य उपाय किंवा संबंधित कल्पना असू शकते, परंतु युक्तिवाद सध्याच्या कार्यसंस्कृती आणि राजकीय वक्तृत्वाच्या *परिणामांवर* लक्ष केंद्रित करतो, पर्यायी संरचनेच्या आर्थिक फायद्यांवर नाही. हे *या विशिष्ट युक्तिवादाचे* मूलभूत गृहीतक नाही."
      },
      {
        "option": "कंपन्या स्वतःच्या कामांना कमी कार्यकाळातही किंवा चांगला पगार देऊ शकतात",
        "is_correct": false,
        "reason_english": "The argument describes the negative consequences of long hours and poor pay. It doesn't assume that companies *could* afford better conditions, only that the current conditions are problematic. This is outside the scope of the argument's core logic.",
        "reason_marathi": "युक्तिवाद दीर्घ कामाचे तास आणि कमी पगाराच्या नकारात्मक परिणामांचे वर्णन करतो. कंपन्यांना चांगल्या अटी परवडू शकतात असे गृहीत धरत नाही, तर सध्याच्या अटी समस्याप्रधान आहेत असे गृहीत धरतो. हे युक्तिवादाच्या मुख्य तर्काच्या कक्षेबाहेर आहे."
      },
      {
        "option": "कामाच्या ठिकाणी कमी ताण अनुभवणारे लोक चांगले पालक असतात",
        "is_correct": false,
        "reason_english": "The argument mentions that children suffer and contrasts 'strivers' with 'caring mums and dads', implying a link. However, this is a consequence or an observation within the argument, not a fundamental assumption that underpins the effectiveness of political slogans.",
        "reason_marathi": "युक्तिवाद सांगतो की मुलांना त्रास होतो आणि 'प्रयत्नांची पराकाष्ठा करणारे' आणि 'काळजी घेणारे माता-पिता' यांच्यात फरक करतो, ज्यामुळे एक संबंध सूचित होतो. तथापि, हा युक्तिवादातील एक परिणाम किंवा निरीक्षण आहे, राजकीय घोषणांच्या परिणामकारकतेला आधार देणारे मूलभूत गृहीतक नाही."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "30 दिवसांच्या एका महिन्यात पाच शनिवार येतात तर त्या महिन्याचा पहिला दिवस कोणता असेल ?",
    "question_english": "There are five Saturdays in the month of 30 days. What will be the first day of that month?",
    "options_marathi": [
      "रविवार",
      "सोमवार",
      "बुधवार",
      "शुक्रवार"
    ],
    "options_english": [
      "Sunday",
      "Monday",
      "Wednesday",
      "Friday"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Calendar",
    "difficulty": "Easy",
    "trap_detected": "Multiple Possibilities",
    "explanation_english": "A month with 30 days has 4 full weeks and 2 extra days (30 = 4 × 7 + 2). For any day of the week to occur 5 times in a 30-day month, that day must fall on either the 1st or the 2nd day of the month.\n\nWe are given that there are five Saturdays in the month.\n\nCase 1: If the 1st day of the month is Saturday.\nThen the Saturdays would be on the 1st, 8th, 15th, 22nd, and 29th. This gives 5 Saturdays. In this case, the 1st day is Saturday.\n\nCase 2: If the 2nd day of the month is Saturday.\nThen the Saturdays would be on the 2nd, 9th, 16th, 23rd, and 30th. This also gives 5 Saturdays. In this case, if the 2nd day is Saturday, then the 1st day must be Friday.\n\nLooking at the given options (Sunday, Monday, Wednesday, Friday), 'Friday' is present, while 'Saturday' is not. Therefore, the first day of the month must be Friday.",
    "explanation_marathi": "30 दिवसांच्या महिन्यात 4 पूर्ण आठवडे आणि 2 अतिरिक्त दिवस असतात (30 = 4 × 7 + 2). 30 दिवसांच्या महिन्यात कोणताही वार 5 वेळा येण्यासाठी, तो वार महिन्याच्या 1ल्या किंवा 2ऱ्या दिवशी असणे आवश्यक आहे.\n\nआपल्याला दिले आहे की महिन्यात पाच शनिवार आहेत.\n\nप्रकरण 1: जर महिन्याचा पहिला दिवस शनिवार असेल.\nतर शनिवार 1, 8, 15, 22 आणि 29 तारखेला येतील. यामुळे 5 शनिवार मिळतात. या प्रकरणात, पहिला दिवस शनिवार आहे.\n\nप्रकरण 2: जर महिन्याचा दुसरा दिवस शनिवार असेल.\nतर शनिवार 2, 9, 16, 23 आणि 30 तारखेला येतील. यामुळे देखील 5 शनिवार मिळतात. या प्रकरणात, जर दुसरा दिवस शनिवार असेल, तर पहिला दिवस शुक्रवार असला पाहिजे.\n\nदिलेल्या पर्यायांमध्ये (रविवार, सोमवार, बुधवार, शुक्रवार), 'शुक्रवार' हा पर्याय उपलब्ध आहे, तर 'शनिवार' नाही. म्हणून, महिन्याचा पहिला दिवस शुक्रवार असला पाहिजे.",
    "options_breakdown": [
      {
        "option": "रविवार",
        "is_correct": false,
        "reason_english": "If the 1st day is Sunday, then Sunday and Monday would occur 5 times. Saturday would only occur 4 times.",
        "reason_marathi": "जर पहिला दिवस रविवार असेल, तर रविवार आणि सोमवार 5 वेळा येतील. शनिवार फक्त 4 वेळा येईल."
      },
      {
        "option": "सोमवार",
        "is_correct": false,
        "reason_english": "If the 1st day is Monday, then Monday and Tuesday would occur 5 times. Saturday would only occur 4 times.",
        "reason_marathi": "जर पहिला दिवस सोमवार असेल, तर सोमवार आणि मंगळवार 5 वेळा येतील. शनिवार फक्त 4 वेळा येईल."
      },
      {
        "option": "बुधवार",
        "is_correct": false,
        "reason_english": "If the 1st day is Wednesday, then Wednesday and Thursday would occur 5 times. Saturday would only occur 4 times.",
        "reason_marathi": "जर पहिला दिवस बुधवार असेल, तर बुधवार आणि गुरुवार 5 वेळा येतील. शनिवार फक्त 4 वेळा येईल."
      },
      {
        "option": "शुक्रवार",
        "is_correct": true,
        "reason_english": "If the 1st day is Friday, then the 2nd, 9th, 16th, 23rd, and 30th days will be Saturdays, resulting in five Saturdays in the 30-day month.",
        "reason_marathi": "जर पहिला दिवस शुक्रवार असेल, तर 2, 9, 16, 23 आणि 30 तारखांना शनिवार येईल, ज्यामुळे 30 दिवसांच्या महिन्यात पाच शनिवार असतील."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "एका शहरात 65% लोक दूरदर्शनवर बातम्या पाहतात. 40% लोक वर्तमानपत्र वाचतात आणि 25% लोक वृत्तपत्र वाचतात आणि दूरदर्शनवर बातम्या देखील पाहतात. किती टक्के लोक दूरदर्शनवर बातम्या पाहत नाहीत किंवा वर्तमानपत्र वाचत नाहीत ?",
    "question_english": "In a town, 65% people watch the news on television, 40% read newspaper and 25% read a newspaper and watch the news on television also. What percentage of people neither watch the news on television nor read a newspaper?",
    "options_marathi": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "options_english": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Set Theory / Venn Diagram",
    "difficulty": "Easy",
    "trap_detected": "Simple Calculation Error",
    "explanation_english": "This problem can be solved using the principle of inclusion-exclusion for sets.\nLet T be the set of people who watch news on television.\nLet N be the set of people who read newspapers.\n\nGiven:\nPercentage of people who watch TV news, P(T) = 65%\nPercentage of people who read newspapers, P(N) = 40%\nPercentage of people who do both (watch TV news AND read newspapers), P(T ∩ N) = 25%\n\nFirst, find the percentage of people who watch TV news OR read newspapers (or both). This is P(T ∪ N).\nThe formula for P(T ∪ N) is P(T) + P(N) - P(T ∩ N).\n\nP(T ∪ N) = 65% + 40% - 25%\nP(T ∪ N) = 105% - 25%\nP(T ∪ N) = 80%\n\nThis 80% represents the people who engage in at least one of the two activities (watching TV news or reading a newspaper).\n\nWe need to find the percentage of people who neither watch TV news nor read a newspaper. This is the complement of P(T ∪ N) with respect to the total population (100%).\n\nPercentage of people who do neither = 100% - P(T ∪ N)\nPercentage of people who do neither = 100% - 80%\nPercentage of people who do neither = 20%\n\nTherefore, 20% of the people neither watch the news on television nor read a newspaper.",
    "explanation_marathi": "ही समस्या संचांसाठी समावेश-बहिष्कार तत्त्वाचा वापर करून सोडवता येते.\nदूरदर्शनवर बातम्या पाहणाऱ्या लोकांचा संच T मानूया.\nवर्तमानपत्र वाचणाऱ्या लोकांचा संच N मानूया.\n\nदिलेली माहिती:\nदूरदर्शनवर बातम्या पाहणाऱ्या लोकांची टक्केवारी, P(T) = 65%\nवर्तमानपत्र वाचणाऱ्या लोकांची टक्केवारी, P(N) = 40%\nदोन्ही (दूरदर्शनवर बातम्या पाहणारे आणि वर्तमानपत्र वाचणारे) करणाऱ्या लोकांची टक्केवारी, P(T ∩ N) = 25%\n\nप्रथम, दूरदर्शनवर बातम्या पाहणारे किंवा वर्तमानपत्र वाचणारे (किंवा दोन्ही) लोकांची टक्केवारी शोधूया. हे P(T ∪ N) आहे.\nP(T ∪ N) साठी सूत्र P(T) + P(N) - P(T ∩ N) आहे.\n\nP(T ∪ N) = 65% + 40% - 25%\nP(T ∪ N) = 105% - 25%\nP(T ∪ N) = 80%\n\nहे 80% लोक दोनपैकी किमान एका क्रियेत (दूरदर्शनवर बातम्या पाहणे किंवा वर्तमानपत्र वाचणे) सहभागी आहेत.\n\nआपल्याला दूरदर्शनवर बातम्या न पाहणाऱ्या किंवा वर्तमानपत्र न वाचणाऱ्या लोकांची टक्केवारी शोधायची आहे. ही एकूण लोकसंख्येच्या (100%) P(T ∪ N) ची पूरक टक्केवारी आहे.\n\nदोन्ही न करणाऱ्या लोकांची टक्केवारी = 100% - P(T ∪ N)\nदोन्ही न करणाऱ्या लोकांची टक्केवारी = 100% - 80%\nदोन्ही न करणाऱ्या लोकांची टक्केवारी = 20%\n\nम्हणून, 20% लोक दूरदर्शनवर बातम्या पाहत नाहीत किंवा वर्तमानपत्र वाचत नाहीत.",
    "options_breakdown": [
      {
        "option": "5%",
        "is_correct": false,
        "reason_english": "This would be the result if P(T ∪ N) was 95%, which is incorrect.",
        "reason_marathi": "जर P(T ∪ N) 95% असते, तर हे उत्तर आले असते, जे चुकीचे आहे."
      },
      {
        "option": "10%",
        "is_correct": false,
        "reason_english": "This would be the result if P(T ∪ N) was 90%, which is incorrect.",
        "reason_marathi": "जर P(T ∪ N) 90% असते, तर हे उत्तर आले असते, जे चुकीचे आहे."
      },
      {
        "option": "15%",
        "is_correct": false,
        "reason_english": "This would be the result if P(T ∪ N) was 85%, which is incorrect.",
        "reason_marathi": "जर P(T ∪ N) 85% असते, तर हे उत्तर आले असते, जे चुकीचे आहे."
      },
      {
        "option": "20%",
        "is_correct": true,
        "reason_english": "The percentage of people doing at least one activity is 80% (65% + 40% - 25%). Therefore, the percentage of people doing neither is 100% - 80% = 20%.",
        "reason_marathi": "किमान एक क्रिया करणाऱ्या लोकांची टक्केवारी 80% आहे (65% + 40% - 25%). म्हणून, दोन्ही न करणाऱ्या लोकांची टक्केवारी 100% - 80% = 20% आहे."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "मोठे धातूहत्यारे विकणारे दुकान मला हव्या त्या रंगाची विक्री \"2 डब्यांच्या किमतीत 3 डबे\" अशी करत आहे. या दुकानाच्या निष्ठाकार्डामुळे आठवड्याच्या शेवटी मला आणखी 10% सूट मिळू शकते. जर मी या आठवड्या अखेरीस रंगाचे तीन डबे खरेदी केले तर मला पूर्ण किमतीवर एकूण मिळणारी सूट निवडा.",
    "question_english": "The hardware superstore is selling the paint I want at \"3 tins for the price of 2\". This weekend I can get a further 10% off with my loyalty card. Select the overall reduction from the full price if I buy three tins of paint this weekend.",
    "options_marathi": [
      "40%",
      "43%",
      "55%",
      "60%"
    ],
    "options_english": [
      "40%",
      "43%",
      "55%",
      "60%"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Percentage, Discounts",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let the full price of one tin of paint be P. If you buy 3 tins for the price of 2, the initial price for 3 tins is 2P, while the full price would be 3P. The first discount is (3P - 2P) / 3P = P / 3P = 1/3 or approximately 33.33%. Now, a further 10% discount is applied to the discounted price (2P) due to the loyalty card. So, the final price paid will be 2P * (1 - 0.10) = 2P * 0.90 = 1.8P. The total reduction from the full price (3P) is 3P - 1.8P = 1.2P. To find the overall reduction percentage, divide the total reduction by the full price: (1.2P / 3P) * 100 = 0.4 * 100 = 40%.",
    "explanation_marathi": "रंगाच्या एका डब्याची पूर्ण किंमत P मानू. जर तुम्ही '2 डब्यांच्या किमतीत 3 डबे' खरेदी करत असाल, तर 3 डब्यांची सुरुवातीची किंमत 2P असेल, तर त्यांची पूर्ण किंमत 3P असेल. पहिली सूट (3P - 2P) / 3P = P / 3P = 1/3 किंवा अंदाजे 33.33% आहे. आता, निष्ठाकार्डामुळे सवलतीच्या किमतीवर (2P) आणखी 10% सूट मिळते. त्यामुळे, अंतिम भरलेली किंमत 2P * (1 - 0.10) = 2P * 0.90 = 1.8P असेल. पूर्ण किमतीतून (3P) एकूण सूट 3P - 1.8P = 1.2P आहे. एकूण सूट टक्केवारी काढण्यासाठी, एकूण सूट पूर्ण किमतीने भागा: (1.2P / 3P) * 100 = 0.4 * 100 = 40%.",
    "options_breakdown": [
      {
        "option_english": "40%",
        "option_marathi": "40%",
        "is_correct": true,
        "reason": "This is the correct overall reduction after applying the '3 for 2' offer (33.33% discount) and then an additional 10% discount on the reduced price."
      },
      {
        "option_english": "43%",
        "option_marathi": "43%",
        "is_correct": false,
        "reason": "This would be an incorrect calculation, possibly by adding the percentages directly (33.33% + 10% is not how sequential discounts work) or by misapplying the second discount."
      },
      {
        "option_english": "55%",
        "option_marathi": "55%",
        "is_correct": false,
        "reason": "This is a significant overestimation, likely resulting from a major calculation error or misunderstanding of how discounts compound."
      },
      {
        "option_english": "60%",
        "option_marathi": "60%",
        "is_correct": false,
        "reason": "This is far too high and indicates a fundamental misunderstanding of the discount calculation. It might arise from assuming a 50% discount for '3 for 2' and then adding 10%."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "दोन रिकाम्या जागा (अ) व (ब) असलेला पुढील उतारा अभ्यासा आणि त्या अनुक्रमे भरण्यासाठी पर्यायातून समुचित शब्दजोडी निवडा. संपूर्ण सूर्यग्रहण, दुर्मीळ खगोलीय घटनांपैकी एक, तेव्हाच घडते (दिसते) जेव्हा चंद्र पृथ्वीभोवतालच्या भ्रमण कक्षेतून, पृथ्वीवरील विशिष्ट स्थानावरून सूर्याचे दर्शन पूर्णपणे (अ) ______ खगोलीय दृष्ट्या चंद्र तुलनेने लहान असल्याने, आणि चंद्राच्या सावलीच्या मध्यभागी आलेल्या गडद छायेने सूर्य झाकला जाऊन पृथ्वीवरून त्याचा फक्त अरुंद मार्गापुरता मागोवा घेता येतो अशी, विशेषतः शेकड्याने हजारो प्रेक्षकांना आकर्षित करणारी संपूर्ण ग्रहण ही (ब) ______ घटना आहे.",
    "question_english": "Study the following passage with two blanks a) and b) and select the appropriate pair of words respectively from options to fill these. One of the rarest of celestial events, the total solar eclipse only happens when the Moon, in its orbit around the Earth, fully (a) ______ the view of the sun from a particular location on Earth. Because the Moon is relatively small, in celestial terms, and its umbra, the central part of the Moon's shadow caused by its blocking the sun, only traces a narrow path on the Earth, a total eclipse is such a (b) ______ occurrence that it typically draws hundreds of thousands of onlookers.",
    "options_marathi": [
      "झाकोळतो व दुर्मीळ",
      "विभाजन व योगायोगाने",
      "झाकोळतो व महत्त्वपूर्ण",
      "सारांशीकरण व महत्त्वपूर्ण"
    ],
    "options_english": [
      "Occludes and atypical",
      "Secularizes and desultory",
      "Occludes and momentous",
      "Epitomizes and momentous"
    ],
    "correct_option_index": 1,
    "subject": "Science",
    "topic": "Astronomy, Solar Eclipse",
    "difficulty": "Medium",
    "trap_detected": "Vocabulary Choice",
    "explanation_english": "For blank (a), the Moon 'blocks' or 'obstructs' the view of the sun during an eclipse. 'Occludes' is the precise scientific term for this action. For blank (b), the passage states that a total eclipse 'typically draws hundreds of thousands of onlookers'. This implies that it is an unusual and significant event. 'Atypical' means not typical or unusual, which fits the description of a rare celestial event. While 'momentous' (महत्त्वपूर्ण) also fits the idea of significance, 'atypical' (दुर्मीळ) directly aligns with the passage's initial description of it being 'one of the rarest of celestial events', emphasizing its unusual nature that attracts crowds.",
    "explanation_marathi": "पहिल्या रिकाम्या जागेसाठी (अ), ग्रहणादरम्यान चंद्र सूर्याचे दृश्य 'अडवतो' किंवा 'झाकोळतो'. 'Occludes' (झाकोळतो) हा या क्रियेसाठी अचूक वैज्ञानिक शब्द आहे. दुसऱ्या रिकाम्या जागेसाठी (ब), उताऱ्यात म्हटले आहे की संपूर्ण ग्रहण 'शेकड्याने हजारो प्रेक्षकांना आकर्षित करते'. याचा अर्थ ती एक असामान्य आणि महत्त्वपूर्ण घटना आहे. 'Atypical' (दुर्मीळ) म्हणजे असामान्य किंवा अनपेक्षित, जे दुर्मिळ खगोलीय घटनेच्या वर्णनाशी जुळते. 'Momentous' (महत्त्वपूर्ण) हे महत्त्वपूर्णतेच्या कल्पनेशी जुळत असले तरी, 'atypical' (दुर्मीळ) हे उताऱ्याच्या सुरुवातीच्या वर्णनाशी थेट जुळते की ती 'दुर्मीळ खगोलीय घटनांपैकी एक' आहे, ज्यामुळे तिचे असामान्य स्वरूप अधोरेखित होते जे लोकांना आकर्षित करते.",
    "options_breakdown": [
      {
        "option_english": "Occludes and atypical",
        "option_marathi": "झाकोळतो व दुर्मीळ",
        "is_correct": true,
        "reason": "'Occludes' (झाकोळतो) correctly describes the Moon blocking the Sun. 'Atypical' (दुर्मीळ) accurately describes the rare and unusual nature of a total solar eclipse, which draws large crowds."
      },
      {
        "option_english": "Secularizes and desultory",
        "option_marathi": "विभाजन व योगायोगाने",
        "is_correct": false,
        "reason": "Neither 'secularizes' nor 'desultory' fits the context of a solar eclipse or its description."
      },
      {
        "option_english": "Occludes and momentous",
        "option_marathi": "झाकोळतो व महत्त्वपूर्ण",
        "is_correct": false,
        "reason": "'Occludes' is correct. 'Momentous' (महत्त्वपूर्ण) also fits well, implying significance. However, 'atypical' (दुर्मीळ) might be considered a more direct descriptor of its rarity, which is highlighted in the passage, making it a slightly better fit in this specific context."
      },
      {
        "option_english": "Epitomizes and momentous",
        "option_marathi": "सारांशीकरण व महत्त्वपूर्ण",
        "is_correct": false,
        "reason": "'Epitomizes' (सारांशीकरण) does not fit the action of the Moon blocking the Sun. While 'momentous' is plausible for the second blank, the first word makes this option incorrect."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "एकूण 60 विद्यार्थ्यांच्या वर्गात साक्षीचे वरून 6 वे स्थान आहे. श्रुती ही साक्षीच्या 12 स्थान खाली आहे. तर श्रुती खालपासून कितव्या स्थानावर आहे ?",
    "question_english": "In a class of 60 students, Sakshi's rank is sixth from the top. Shruti is twelth place below Sakshi. What is Shruti's rank from bottom?",
    "options_marathi": [
      "42",
      "18",
      "43",
      "19"
    ],
    "options_english": [
      "42",
      "18",
      "43",
      "19"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Ranking and Order",
    "difficulty": "Easy",
    "trap_detected": "Calculation Error (Off-by-one)",
    "explanation_english": "First, determine Shruti's rank from the top. Sakshi is 6th from the top. Shruti is 12 places below Sakshi, so Shruti's rank from the top is 6 + 12 = 18th. To find Shruti's rank from the bottom in a class of 60 students, use the formula: Rank from bottom = Total students - Rank from top + 1. So, Shruti's rank from the bottom = 60 - 18 + 1 = 42 + 1 = 43rd.",
    "explanation_marathi": "प्रथम, श्रुतीचे वरून स्थान निश्चित करा. साक्षीचे वरून 6 वे स्थान आहे. श्रुती साक्षीच्या 12 स्थानांनी खाली आहे, त्यामुळे श्रुतीचे वरून स्थान 6 + 12 = 18 वे आहे. 60 विद्यार्थ्यांच्या वर्गात श्रुतीचे खालून स्थान शोधण्यासाठी, सूत्र वापरा: खालून स्थान = एकूण विद्यार्थी - वरून स्थान + 1. म्हणून, श्रुतीचे खालून स्थान = 60 - 18 + 1 = 42 + 1 = 43 वे.",
    "options_breakdown": [
      {
        "option_english": "42",
        "option_marathi": "42",
        "is_correct": false,
        "reason": "This result (60 - 18 = 42) is obtained if you forget to add '1' when converting rank from top to rank from bottom."
      },
      {
        "option_english": "18",
        "option_marathi": "18",
        "is_correct": false,
        "reason": "This is Shruti's rank from the top, not from the bottom."
      },
      {
        "option_english": "43",
        "option_marathi": "43",
        "is_correct": true,
        "reason": "This is the correct rank from the bottom, calculated as (Total students - Rank from top + 1)."
      },
      {
        "option_english": "19",
        "option_marathi": "19",
        "is_correct": false,
        "reason": "This would be a result of an incorrect calculation, possibly if Shruti's rank from top was miscalculated or if the formula for rank from bottom was applied incorrectly."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "अमित मोटार सायकल वरून पूर्वेकडे 10 km व तेवढेच अंतर दक्षिणेकडे गेला. त्यानंतर तो पूर्वेकडे वळून आणखी 5 km गेला. त्यानंतर तो केवळ डाव्या बाजूस दोन वेळा वळून प्रत्येकी 15 km अंतर गेला तर तो मूळस्थानापासून किती अंतर दूर गेला ?",
    "question_english": "Amit rides a bike 10 km east and then same distance towards south. Now he turns east for another 5 km. Then he turns only left at two points to travel 15 km each. How far is he from the starting point ?",
    "options_marathi": [
      "10 किमी",
      "7.5 किमी",
      "5 किमी",
      "15 किमी"
    ],
    "options_english": [
      "10 km",
      "7.5 km",
      "5 km",
      "15 km"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Direction and Distance",
    "difficulty": "Medium",
    "trap_detected": "Visualizing Turns",
    "explanation_english": "Let's trace Amit's path using coordinates, starting at (0,0):\n1. 10 km East: Amit is at (10, 0).\n2. 10 km South: Amit is at (10, -10).\n3. Turns East, 5 km: Amit is at (10+5, -10) = (15, -10).\n4. Turns left (from East, left is North), 15 km: Amit is at (15, -10+15) = (15, 5).\n5. Turns left again (from North, left is West), 15 km: Amit is at (15-15, 5) = (0, 5).\nHis final position is (0, 5) and his starting position was (0, 0). The distance from the starting point is the straight-line distance between (0,0) and (0,5), which is 5 km.",
    "explanation_marathi": "अमितच्या प्रवासाचा मार्ग (0,0) पासून सुरू करून निर्देशांकांचा वापर करून शोधूया:\n1. 10 किमी पूर्वेकडे: अमित (10, 0) येथे आहे.\n2. 10 किमी दक्षिणेकडे: अमित (10, -10) येथे आहे.\n3. पूर्वेकडे वळून, आणखी 5 किमी: अमित (10+5, -10) = (15, -10) येथे आहे.\n4. डावीकडे वळतो (पूर्वेकडून, डावीकडे उत्तर असते), 15 किमी: अमित (15, -10+15) = (15, 5) येथे आहे.\n5. पुन्हा डावीकडे वळतो (उत्तरेकडून, डावीकडे पश्चिम असते), 15 किमी: अमित (15-15, 5) = (0, 5) येथे आहे.\nत्याचे अंतिम स्थान (0, 5) आहे आणि त्याचे सुरुवातीचे स्थान (0, 0) होते. सुरुवातीच्या ठिकाणापासूनचे अंतर (0,0) आणि (0,5) यांच्यातील सरळ रेषेतील अंतर आहे, जे 5 किमी आहे.",
    "options_breakdown": [
      {
        "option_english": "10 km",
        "option_marathi": "10 किमी",
        "is_correct": false,
        "reason": "This might be a result of miscalculating the final position or confusing total distance traveled with displacement."
      },
      {
        "option_english": "7.5 km",
        "option_marathi": "7.5 किमी",
        "is_correct": false,
        "reason": "This value does not correspond to any logical calculation based on the given movements."
      },
      {
        "option_english": "5 km",
        "option_marathi": "5 किमी",
        "is_correct": true,
        "reason": "After tracing all movements, Amit ends up 5 km North of his starting point, making the displacement 5 km."
      },
      {
        "option_english": "15 km",
        "option_marathi": "15 किमी",
        "is_correct": false,
        "reason": "This could be a result of considering only the last two 15 km segments or a misinterpretation of the turns and final position."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "खालील प्रश्नांत चिन्हांचा पुढीलप्रमाणे वापर केलेला आहे : P @ Q म्हणजे P > Q, P & Q म्हणजे P ≥ Q, P = Q म्हणजे P = Q, P α Q म्हणजे P < Q, P * Q म्हणजे P ≤ Q. खाली विधाने आणि अनुमाने दिली आहेत, जर तिन्ही विधाने सत्य आहे असे मानले तर दिलेल्या अनुमान I व II पैकी कोणते अनुमान निश्चितपणे सत्य आहे ते सांगा. विधाने : T = S, U @ V, V α S अनुमाने : I. V α T, II. T = V",
    "question_english": "In following question symbols are used as follows : P @ Q means P > Q, P & Q means P ≥ Q, P = Q means P = Q, P α Q means P < Q, P * Q means P ≤ Q. Below statements and conclusions are given. Assuming these three statements to be true state which of the following conclusions I and II given below is definitely true. Statements : T = S, U @ V, V α S Conclusions: I. V α T, II. T = V",
    "options_marathi": [
      "फक्त अनुमान I सत्य",
      "फक्त अनुमान II सत्य",
      "अनुमाने I व II दोन्ही सत्य",
      "अनुमान एकतर I किंवा II सत्य"
    ],
    "options_english": [
      "Only conclusion I true",
      "Only conclusion II true",
      "Conclusion I and II both true",
      "Either I or II true"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Inequalities, Coded Relations",
    "difficulty": "Medium",
    "trap_detected": "Careful Symbol Interpretation",
    "explanation_english": "Let's convert the given statements into standard inequality symbols:\n1. T = S  => T = S\n2. U @ V  => U > V\n3. V α S  => V < S\n\nNow, let's combine the relevant statements to check the conclusions. From (1) and (3), we have V < S and S = T. Combining these, we get V < T.\n\nNow, let's evaluate the conclusions:\nI. V α T => V < T. This conclusion is definitely true based on our derivation (V < S and S = T implies V < T).\nII. T = V. This conclusion is definitely false, as we established V < T, which means T cannot be equal to V.\n\nTherefore, only conclusion I is true.",
    "explanation_marathi": "दिलेली विधाने प्रमाणित असमानता चिन्हांमध्ये रूपांतरित करूया:\n1. T = S  => T = S\n2. U @ V  => U > V\n3. V α S  => V < S\n\nआता, निष्कर्षांची तपासणी करण्यासाठी संबंधित विधाने एकत्र करूया. (1) आणि (3) वरून, आपल्याकडे V < S आणि S = T आहे. हे एकत्र केल्यास, आपल्याला V < T मिळते.\n\nआता, निष्कर्षांचे मूल्यांकन करूया:\nI. V α T => V < T. हा निष्कर्ष आपल्या निष्पत्तीनुसार निश्चितपणे सत्य आहे (V < S आणि S = T याचा अर्थ V < T).\nII. T = V. हा निष्कर्ष निश्चितपणे असत्य आहे, कारण आपण V < T स्थापित केले आहे, याचा अर्थ T हे V च्या समान असू शकत नाही.\n\nम्हणून, फक्त निष्कर्ष I सत्य आहे.",
    "options_breakdown": [
      {
        "option_english": "Only conclusion I true",
        "option_marathi": "फक्त अनुमान I सत्य",
        "is_correct": true,
        "reason": "By combining the statements T=S and V<S, we deduce V<T, which is represented by V α T. Hence, conclusion I is true."
      },
      {
        "option_english": "Only conclusion II true",
        "option_marathi": "फक्त अनुमान II सत्य",
        "is_correct": false,
        "reason": "Conclusion II (T=V) contradicts the derived relation V<T, making it false."
      },
      {
        "option_english": "Conclusion I and II both true",
        "option_marathi": "अनुमाने I व II दोन्ही सत्य",
        "is_correct": false,
        "reason": "Conclusions I and II are mutually exclusive (V<T and T=V cannot both be true simultaneously)."
      },
      {
        "option_english": "Either I or II true",
        "option_marathi": "अनुमान एकतर I किंवा II सत्य",
        "is_correct": false,
        "reason": "Since conclusion I is definitely true and conclusion II is definitely false, the 'either/or' condition is not met."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "खालीलपैकी कोणते विधान/विधाने बरोबर आहेत? अ. महाराष्ट्रात चार हवामान उपविभाग आहेत; कोकण, मध्य-महाराष्ट्र, मराठवाडा व विदर्भ असे महाराष्ट्राचे चार हवामान उपविभाग आहेत. ब. एकूण वार्षिक पर्जन्यमानापैकी कोकण 95 टक्के व विदर्भात 88 टक्के पाऊस नैऋत्य-मोसमी ऋतूमध्ये पडतो. क. एकूण वार्षिक पर्जन्यमानापैकी मध्य-महाराष्ट्रात आणि मराठवाड्यात सुमारे 83 टक्के पाऊस नैऋत्य-मोसमी ऋतूमध्ये पडतो. ड. एकूण वार्षिक पर्जन्यमानापैकी मध्य-महाराष्ट्रात आणि मराठवाड्यात सुमारे 75 टक्के पाऊस नैऋत्य-मोसमी ऋतूमध्ये पडतो.",
    "question_english": "Which of the following is/are the correct statement(s) of Indian Meteorological Department regarding the State of Maharashtra? a. Maharashtra has four climatic subdivisions namely; Konkan, Madhya-Maharashtra, Marathwada and Vidarbha b. Konkan receives 95 percent and Vidarbha 88 percent of annual total rainfall during the south-west monsoon period c. Madhya-Maharashtra and Marathwada receive around 83 percent of annual total rainfall during the south-west monsoon season. d. Madhya-Maharashtra and Marathwada receive around 75 percent of annual total rainfall during the south-west monsoon season.",
    "options_marathi": [
      "अ फक्त",
      "अ आणि ब फक्त",
      "अ, ब आणि क",
      "अ, ब आणि ड"
    ],
    "options_english": [
      "a only",
      "a and b only",
      "a, b and c",
      "a, b and d"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Climate of Maharashtra, Rainfall Distribution",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap, Precise Percentages",
    "explanation_english": "Let's evaluate each statement:\na. Maharashtra has four climatic subdivisions: Konkan, Madhya-Maharashtra, Marathwada, and Vidarbha. This statement is **correct** and is the standard classification by the Indian Meteorological Department (IMD).\nb. Konkan receives a very high percentage (typically 90-95%) of its annual rainfall from the South-West monsoon, and Vidarbha also receives a high percentage (typically 85-90%). The figures 95% for Konkan and 88% for Vidarbha are **correct** and commonly cited.\nc. Madhya-Maharashtra and Marathwada receive a significant portion of their annual rainfall from the South-West monsoon, but the figure of 83% is generally considered slightly high. The typical range is closer to 75-80%. So, this statement is **incorrect**.\nd. Madhya-Maharashtra and Marathwada receive around 75 percent of annual total rainfall during the south-west monsoon season. This figure (75%) is **correct** and falls within the generally accepted range for these rain-shadow regions.\n\nTherefore, statements a, b, and d are correct.",
    "explanation_marathi": "प्रत्येक विधानाचे मूल्यांकन करूया:\nअ. महाराष्ट्रात चार हवामान उपविभाग आहेत: कोकण, मध्य-महाराष्ट्र, मराठवाडा आणि विदर्भ. हे विधान **बरोबर** आहे आणि भारतीय हवामान विभाग (IMD) द्वारे प्रमाणित वर्गीकरण आहे.\nब. कोकणात एकूण वार्षिक पर्जन्यमानापैकी खूप मोठा भाग (साधारणपणे 90-95%) नैऋत्य-मोसमी ऋतूमध्ये पडतो आणि विदर्भातही मोठा भाग (साधारणपणे 85-90%) पडतो. कोकणासाठी 95% आणि विदर्भासाठी 88% ही आकडेवारी **बरोबर** आहे आणि सामान्यतः उद्धृत केली जाते.\nक. मध्य-महाराष्ट्रात आणि मराठवाड्यात एकूण वार्षिक पर्जन्यमानापैकी मोठा भाग नैऋत्य-मोसमी ऋतूमध्ये पडतो, परंतु 83% ही आकडेवारी सामान्यतः थोडी जास्त मानली जाते. सामान्यतः हे प्रमाण 75-80% च्या आसपास असते. त्यामुळे, हे विधान **चुकीचे** आहे.\nड. मध्य-महाराष्ट्रात आणि मराठवाड्यात एकूण वार्षिक पर्जन्यमानापैकी सुमारे 75 टक्के पाऊस नैऋत्य-मोसमी ऋतूमध्ये पडतो. ही आकडेवारी (75%) **बरोबर** आहे आणि या पर्जन्यछायेतील प्रदेशांसाठी सामान्यतः स्वीकारलेल्या श्रेणीत येते.\n\nम्हणून, विधाने अ, ब आणि ड बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_english": "a only",
        "option_marathi": "अ फक्त",
        "is_correct": false,
        "reason": "While statement 'a' is correct, statements 'b' and 'd' are also correct, making this option incomplete."
      },
      {
        "option_english": "a and b only",
        "option_marathi": "अ आणि ब फक्त",
        "is_correct": false,
        "reason": "Statements 'a' and 'b' are correct, but statement 'd' is also correct, making this option incomplete."
      },
      {
        "option_english": "a, b and c",
        "option_marathi": "अ, ब आणि क",
        "is_correct": false,
        "reason": "Statements 'a' and 'b' are correct, but statement 'c' is incorrect as 83% is generally considered too high for Madhya-Maharashtra and Marathwada's SW monsoon rainfall contribution."
      },
      {
        "option_english": "a, b and d",
        "option_marathi": "अ, ब आणि ड",
        "is_correct": true,
        "reason": "Statements 'a', 'b', and 'd' are all factually correct regarding Maharashtra's climatic subdivisions and rainfall distribution during the South-West monsoon."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "महाराष्ट्रातील चंद्रपूर जिल्ह्यातील 'लोहार डोंगरी खाण' ______ साठी प्रसिद्ध आहे.",
    "question_english": "'Lohar Dongari mine' in the Chandrapur district of Maharashtra is famous for ______",
    "options_marathi": [
      "लोह खनिज उत्पादन",
      "मँगनीज उत्पादन",
      "बॉक्साईट उत्पादन",
      "दगडी कोळसा उत्पादन"
    ],
    "options_english": [
      "Iron ore production",
      "Manganese production",
      "Bauxite production",
      "Coal production"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Mineral Resources of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Lohar Dongari mine, located in the Chandrapur district of Maharashtra, is well-known for its coal production. Chandrapur is one of the major coal-producing districts in Maharashtra, along with Nagpur and Yavatmal. Bauxite is primarily found in districts like Kolhapur and Ratnagiri, while manganese is found in Nagpur, Bhandara, and Gondia. Iron ore is found in various districts including Gadchiroli, Chandrapur, and Sindhudurg, but Lohar Dongari is specifically associated with coal.",
    "explanation_marathi": "महाराष्ट्रातील चंद्रपूर जिल्ह्यातील लोहार डोंगरी खाण ही तिच्या दगडी कोळसा उत्पादनासाठी प्रसिद्ध आहे. चंद्रपूर हा महाराष्ट्रातील नागपूर आणि यवतमाळ जिल्ह्यांसोबत प्रमुख कोळसा उत्पादक जिल्ह्यांपैकी एक आहे. बॉक्साईट प्रामुख्याने कोल्हापूर आणि रत्नागिरीसारख्या जिल्ह्यांमध्ये आढळते, तर मँगनीज नागपूर, भंडारा आणि गोंदियामध्ये आढळते. लोह खनिज गडचिरोली, चंद्रपूर आणि सिंधुदुर्गसह विविध जिल्ह्यांमध्ये आढळते, परंतु लोहार डोंगरी विशेषतः कोळशाशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_english": "Iron ore production",
        "option_marathi": "लोह खनिज उत्पादन",
        "is_correct": false,
        "reason": "While Chandrapur district has some iron ore deposits, Lohar Dongari mine is not primarily known for iron ore. Other mines in the region might produce iron ore."
      },
      {
        "option_english": "Manganese production",
        "option_marathi": "मँगनीज उत्पादन",
        "is_correct": false,
        "reason": "Manganese deposits in Maharashtra are mainly concentrated in the Nagpur, Bhandara, and Gondia districts, not typically in Chandrapur's Lohar Dongari."
      },
      {
        "option_english": "Bauxite production",
        "option_marathi": "बॉक्साईट उत्पादन",
        "is_correct": false,
        "reason": "Bauxite is found predominantly in the western Maharashtra districts like Kolhapur, Raigad, Ratnagiri, Satara, and Sindhudurg, not in Chandrapur."
      },
      {
        "option_english": "Coal production",
        "option_marathi": "दगडी कोळसा उत्पादन",
        "is_correct": true,
        "reason": "Lohar Dongari is a well-known coal mine located in the Chandrapur district, which is a major coal-producing region in Maharashtra."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "जनगणना 2011 प्रमाणे खालील नमूद महाराष्ट्रातील जिल्ह्यांचा त्यांच्या लोकसंख्या घनते संदर्भात चढता क्रम लावा अ. वर्धा ब. गडचिरोली क. वाशिम ड. चंद्रपूर इ. सिंधुदुर्ग",
    "question_english": "As per census 2011, arrange the following districts of Maharashtra in ascending order regarding population density. a. Wardha b. Gadchiroli c. Washim d. Chandrapur e. Sindhudurg",
    "options_marathi": [
      "e, b, d, c, a",
      "e, d, b, a, c",
      "b, e, d, a, c",
      "e, d, a, c, b"
    ],
    "options_english": [
      "e, b, d, c, a",
      "e, d, b, a, c",
      "b, e, d, a, c",
      "e, d, a, c, b"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Demographics of Maharashtra (Census 2011)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall, Ascending Order",
    "explanation_english": "To arrange the districts in ascending order of population density as per Census 2011, we need to know their approximate densities (persons per sq km):\n*   b. Gadchiroli: ~74\n*   e. Sindhudurg: ~163\n*   d. Chandrapur: ~193\n*   a. Wardha: ~205\n*   c. Washim: ~244\n\nArranging these from lowest to highest density gives the order: Gadchiroli (b), Sindhudurg (e), Chandrapur (d), Wardha (a), Washim (c). So the correct sequence is b, e, d, a, c.",
    "explanation_marathi": "जनगणना 2011 नुसार जिल्ह्यांची लोकसंख्या घनतेनुसार चढत्या क्रमाने मांडणी करण्यासाठी, आपल्याला त्यांच्या अंदाजित घनता (प्रति चौ. किमी व्यक्ती) माहित असणे आवश्यक आहे:\n*   ब. गडचिरोली: ~74\n*   इ. सिंधुदुर्ग: ~163\n*   ड. चंद्रपूर: ~193\n*   अ. वर्धा: ~205\n*   क. वाशिम: ~244\n\nयांची कमीत कमी घनतेपासून जास्तीत जास्त घनतेनुसार मांडणी केल्यास क्रम असा मिळतो: गडचिरोली (ब), सिंधुदुर्ग (इ), चंद्रपूर (ड), वर्धा (अ), वाशिम (क). त्यामुळे योग्य क्रम ब, इ, ड, अ, क आहे.",
    "options_breakdown": [
      {
        "option_english": "e, b, d, c, a",
        "option_marathi": "e, b, d, c, a",
        "is_correct": false,
        "reason": "This order is incorrect. Sindhudurg (e) has a higher density than Gadchiroli (b)."
      },
      {
        "option_english": "e, d, b, a, c",
        "option_marathi": "e, d, b, a, c",
        "is_correct": false,
        "reason": "This order is incorrect. Gadchiroli (b) has the lowest density among the given districts."
      },
      {
        "option_english": "b, e, d, a, c",
        "option_marathi": "ब, इ, ड, अ, क",
        "is_correct": true,
        "reason": "This sequence correctly arranges the districts from the lowest population density (Gadchiroli) to the highest (Washim) as per Census 2011 data."
      },
      {
        "option_english": "e, d, a, c, b",
        "option_marathi": "e, d, a, c, b",
        "is_correct": false,
        "reason": "This order is incorrect. Gadchiroli (b) should be first (lowest density), not last."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "महाराष्ट्रातील प्रमुख नद्या व त्यांच्या उपनद्या यांच्या योग्य जोड्या लावा. नदी उपनदी अ. तापी I. कहान ब. वैनगंगा II. कारंजा क. मांजरा III. बोरी ड. सिंधफणा IV. बिंदुसरा",
    "question_english": "Match the correct pairs of rivers and its tributaries in Maharashtra. River Tributary A. Tapi I. Karhan B. Vainganga II. Karanja C. Manjara III. Bori D. Sindhfana IV. Bindusara",
    "options_marathi": [
      "अ-II, ब-III, क-IV, ड-I",
      "अ-III, ब-I, क-IV, ड-II",
      "अ-IV, ब-III, क-II, ड-I",
      "अ-III, ब-I, क-II, ड-IV"
    ],
    "options_english": [
      "A-II, B-III, C-IV, D-I",
      "A-III, B-I, C-IV, D-II",
      "A-IV, B-III, C-II, D-I",
      "A-III, B-I, C-II, D-IV"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Rivers of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall (Confusing Tributaries)",
    "explanation_english": "Let's match the rivers with their correct tributaries:\n*   A. Tapi (तापी): Bori (बोरी) is a significant tributary of the Tapi river. So, A-III.\n*   B. Wainganga (वैनगंगा): Karhan (कहान) is a tributary of the Wainganga river. So, B-I.\n*   C. Manjara (मांजरा): Bindusara (बिंदुसरा) is a tributary of the Manjara river. So, C-IV.\n*   D. Sindhfana (सिंधफणा): Karanja (कारंजा) is a tributary of the Sindhfana river. So, D-II.\n\nCombining these, the correct match is A-III, B-I, C-IV, D-II.",
    "explanation_marathi": "नद्या आणि त्यांच्या उपनद्यांच्या योग्य जोड्या जुळवूया:\n*   अ. तापी: बोरी ही तापी नदीची एक महत्त्वाची उपनदी आहे. म्हणून, अ-III.\n*   ब. वैनगंगा: कहान ही वैनगंगा नदीची उपनदी आहे. म्हणून, ब-I.\n*   क. मांजरा: बिंदुसरा ही मांजरा नदीची उपनदी आहे. म्हणून, क-IV.\n*   ड. सिंधफणा: कारंजा ही सिंधफणा नदीची उपनदी आहे. म्हणून, ड-II.\n\nयांना एकत्र केल्यास, योग्य जुळणी अ-III, ब-I, क-IV, ड-II अशी आहे.",
    "options_breakdown": [
      {
        "option_english": "A-II, B-III, C-IV, D-I",
        "option_marathi": "अ-II, ब-III, क-IV, ड-I",
        "is_correct": false,
        "reason": "This option incorrectly matches Tapi with Karanja and Wainganga with Bori."
      },
      {
        "option_english": "A-III, B-I, C-IV, D-II",
        "option_marathi": "अ-III, ब-I, क-IV, ड-II",
        "is_correct": true,
        "reason": "This option correctly matches Tapi with Bori, Wainganga with Karhan, Manjara with Bindusara, and Sindhfana with Karanja."
      },
      {
        "option_english": "A-IV, B-III, C-II, D-I",
        "option_marathi": "अ-IV, ब-III, क-II, ड-I",
        "is_correct": false,
        "reason": "This option incorrectly matches Tapi with Bindusara and Wainganga with Bori."
      },
      {
        "option_english": "A-III, B-I, C-II, D-IV",
        "option_marathi": "अ-III, ब-I, क-II, ड-IV",
        "is_correct": false,
        "reason": "This option incorrectly matches Manjara with Karanja and Sindhfana with Bindusara."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "महाराष्ट्रातील वनांचे प्रकार व त्या प्रदेशातील वार्षिक पर्जन्यमान यांच्या योग्य जोड्या लावा. वनांचे प्रकार वार्षिक पर्जन्यमान अ. उष्णकटीबंधीय सदाहरीत वने I. 200 ते 250 से.मी. ब. उष्णकटीबंधीय निमसदाहरीत वने II. 350 ते 400 से.मी. क. उष्णकटीबंधीय आर्द्र पानझडी वने III. 250 ते 300 से.मी. ड. उप उष्णकटीबंधीय सदाहरीत वने IV. 125 ते 200 से.मी.",
    "question_english": "Match the correct pairs of types of Forest and Annual rainfall of that region in Maharashtra. Types of Forest Annual Rainfall A. Tropical evergreen forest I. 200 to 250 cms B. Tropical semi-evergreen forest II. 350 to 400 cms C. Tropical wet deciduous forest III. 250 to 300 cms D. Sub-Tropical evergreen forest IV. 125 to 200 cms",
    "options_marathi": [
      "अ-III, ब-I, क-IV, ड-II",
      "अ-III, ब-I, क-II, ड-IV",
      "अ-II, ब-I, क-III, ड-IV",
      "अ-IV, ब-III, क-I, ड-II"
    ],
    "options_english": [
      "A-III, B-I, C-IV, D-II",
      "A-III, B-I, C-II, D-IV",
      "A-II, B-I, C-III, D-IV",
      "A-IV, B-III, C-I, D-II"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Forests of Maharashtra, Rainfall Distribution",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall, Similar Ranges",
    "explanation_english": "Let's match the forest types with their typical annual rainfall requirements:\n*   A. Tropical evergreen forest (उष्णकटीबंधीय सदाहरीत वने): These forests require very high rainfall, typically above 250 cm. Option III (250 to 300 cms) is a suitable range.\n*   B. Tropical semi-evergreen forest (उष्णकटीबंधीय निमसदाहरीत वने): These are transitional forests, requiring slightly less rainfall than evergreen but still substantial. Option I (200 to 250 cms) fits well.\n*   C. Tropical wet deciduous forest (उष्णकटीबंधीय आर्द्र पानझडी वने): These forests thrive in areas with moderate to high rainfall. Option IV (125 to 200 cms) is a common range for such forests.\n*   D. Sub-Tropical evergreen forest (उप उष्णकटीबंधीय सदाहरीत वने): These are found in higher altitudes with good rainfall. Given the remaining option, II (350 to 400 cms) is assigned. While this is a very high range, in the context of Maharashtra's high-rainfall hill stations (like Mahabaleshwar), it can be considered plausible for sub-tropical evergreen patches.\n\nThus, the correct matching is A-III, B-I, C-IV, D-II.",
    "explanation_marathi": "वनांचे प्रकार त्यांच्या विशिष्ट वार्षिक पर्जन्यमानाशी जुळवूया:\n*   अ. उष्णकटीबंधीय सदाहरीत वने: या वनांना खूप जास्त पर्जन्यमानाची आवश्यकता असते, साधारणपणे 250 सेमी पेक्षा जास्त. पर्याय III (250 ते 300 सेमी) ही योग्य श्रेणी आहे.\n*   ब. उष्णकटीबंधीय निमसदाहरीत वने: ही संक्रमणकालीन वने आहेत, ज्यांना सदाहरीत वनांपेक्षा थोडे कमी पण तरीही लक्षणीय पर्जन्यमान लागते. पर्याय I (200 ते 250 सेमी) योग्य आहे.\n*   क. उष्णकटीबंधीय आर्द्र पानझडी वने: ही वने मध्यम ते जास्त पर्जन्यमान असलेल्या प्रदेशात वाढतात. पर्याय IV (125 ते 200 सेमी) ही अशा वनांसाठी सामान्य श्रेणी आहे.\n*   ड. उप उष्णकटीबंधीय सदाहरीत वने: ही जास्त उंचीवर आणि चांगल्या पर्जन्यमान असलेल्या प्रदेशात आढळतात. उर्वरित पर्याय पाहता, II (350 ते 400 सेमी) यांना दिले जाते. ही श्रेणी खूप जास्त असली तरी, महाराष्ट्रातील जास्त पर्जन्यमान असलेल्या थंड हवेच्या ठिकाणांच्या (उदा. महाबळेश्वर) संदर्भात, उप-उष्णकटीबंधीय सदाहरीत वनांसाठी ती संभाव्य मानली जाऊ शकते.\n\nत्यामुळे, योग्य जुळणी अ-III, ब-I, क-IV, ड-II अशी आहे.",
    "options_breakdown": [
      {
        "option_english": "A-III, B-I, C-IV, D-II",
        "option_marathi": "अ-III, ब-I, क-IV, ड-II",
        "is_correct": true,
        "reason": "This option provides the most accurate and commonly accepted rainfall ranges for each forest type in Maharashtra. Tropical evergreen forests require >250cm, semi-evergreen 200-250cm, wet deciduous 125-200cm, and sub-tropical evergreen in high rainfall areas can receive 350-400cm."
      },
      {
        "option_english": "A-III, B-I, C-II, D-IV",
        "option_marathi": "अ-III, ब-I, क-II, ड-IV",
        "is_correct": false,
        "reason": "This option incorrectly matches Tropical wet deciduous forest with 350-400 cm rainfall (which is too high) and Sub-Tropical evergreen forest with 125-200 cm (which is too low)."
      },
      {
        "option_english": "A-II, B-I, C-III, D-IV",
        "option_marathi": "अ-II, ब-I, क-III, ड-IV",
        "is_correct": false,
        "reason": "This option incorrectly matches Tropical evergreen forest with 350-400 cm (which is plausible but not the best fit when other options are considered) and Tropical wet deciduous forest with 250-300 cm (which is too high)."
      },
      {
        "option_english": "A-IV, B-III, C-I, D-II",
        "option_marathi": "अ-IV, ब-III, क-I, ड-II",
        "is_correct": false,
        "reason": "This option incorrectly matches Tropical evergreen forest with 125-200 cm (which is far too low) and Tropical semi-evergreen forest with 250-300 cm (which is too high)."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "थंड हवेची ठिकाणे व ते कोणत्या जिल्ह्यात आहेत हे खाली दिले आहे. त्यांच्या योग्य जोड्या लावा. जिल्हा थंड हवेचे ठिकाण अ. सातारा I. जव्हार ब. नंदुरबार II. खंडाळा क. पूणे III. महाबळेश्वर ड. पालघर IV. तोरणमाळ",
    "question_english": "Below Hill Station and the districts in which they are located are given. Match the correct pairs. District Hill Station a. Satara I. Jawahar b. Nandurbar II. Khandala c. Pune III. Mahabaleswar d. Palghar IV. Toranmal",
    "options_marathi": [
      "अ-I, ब-II, क-III, ड-IV",
      "अ-III, ब-II, क-IV, ड-I",
      "अ-II, ब-I, क-III, ड-IV",
      "अ-III, ब-IV, क-II, ड-I"
    ],
    "options_english": [
      "a-I, b-II, c-III, d-IV",
      "a-III, b-II, c-IV, d-I",
      "a-II, b-I, c-III, d-IV",
      "a-III, b-IV, c-II, d-I"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Hill Stations and Districts of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of prominent hill stations in Maharashtra and their respective districts. Mahabaleshwar is a well-known hill station in Satara district. Toranmal is located in Nandurbar district. Khandala is a popular hill station in Pune district. Jawhar is a hill station situated in Palghar district. Therefore, the correct matching is a-III, b-IV, c-II, d-I.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील प्रमुख थंड हवेची ठिकाणे आणि त्यांचे संबंधित जिल्हे यांच्या ज्ञानाची चाचणी घेतो. महाबळेश्वर हे सातारा जिल्ह्यातील एक प्रसिद्ध थंड हवेचे ठिकाण आहे. तोरणमाळ नंदुरबार जिल्ह्यात आहे. खंडाळा हे पुणे जिल्ह्यातील एक लोकप्रिय थंड हवेचे ठिकाण आहे. जव्हार हे पालघर जिल्ह्यात स्थित एक थंड हवेचे ठिकाण आहे. म्हणून, योग्य जुळणी अ-III, ब-IV, क-II, ड-I अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "a-I, b-II, c-III, d-IV",
        "option_text_marathi": "अ-I, ब-II, क-III, ड-IV",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Satara with Jawhar, Nandurbar with Khandala, Pune with Mahabaleshwar, and Palghar with Toranmal. The correct pairings are different.",
        "reason_marathi": "हा पर्याय साताराला जव्हारशी, नंदुरबारला खंडाळाशी, पुणेला महाबळेश्वरशी आणि पालघरला तोरणमाळशी चुकीच्या पद्धतीने जुळवतो. योग्य जोड्या वेगळ्या आहेत."
      },
      {
        "option_text_english": "a-III, b-II, c-IV, d-I",
        "option_text_marathi": "अ-III, ब-II, क-IV, ड-I",
        "is_correct": false,
        "reason_english": "While 'a-III' (Satara-Mahabaleshwar) and 'd-I' (Palghar-Jawhar) are correct, 'b-II' (Nandurbar-Khandala) and 'c-IV' (Pune-Toranmal) are incorrect. Khandala is in Pune and Toranmal is in Nandurbar.",
        "reason_marathi": "जरी 'अ-III' (सातारा-महाबळेश्वर) आणि 'ड-I' (पालघर-जव्हार) योग्य असले तरी, 'ब-II' (नंदुरबार-खंडाळा) आणि 'क-IV' (पुणे-तोरणमाळ) चुकीचे आहेत. खंडाळा पुणे जिल्ह्यात आहे आणि तोरणमाळ नंदुरबार जिल्ह्यात आहे."
      },
      {
        "option_text_english": "a-II, b-I, c-III, d-IV",
        "option_text_marathi": "अ-II, ब-I, क-III, ड-IV",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Satara with Khandala, Nandurbar with Jawhar, Pune with Mahabaleshwar, and Palghar with Toranmal. The correct pairings are different.",
        "reason_marathi": "हा पर्याय साताराला खंडाळाशी, नंदुरबारला जव्हारशी, पुणेला महाबळेश्वरशी आणि पालघरला तोरणमाळशी चुकीच्या पद्धतीने जुळवतो. योग्य जोड्या वेगळ्या आहेत."
      },
      {
        "option_text_english": "a-III, b-IV, c-II, d-I",
        "option_text_marathi": "अ-III, ब-IV, क-II, ड-I",
        "is_correct": true,
        "reason_english": "This option correctly matches Satara with Mahabaleshwar, Nandurbar with Toranmal, Pune with Khandala, and Palghar with Jawhar.",
        "reason_marathi": "हा पर्याय साताराला महाबळेश्वरशी, नंदुरबारला तोरणमाळशी, पुणेला खंडाळाशी आणि पालघरला जव्हारशी योग्यरित्या जुळवतो."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "सन 2016-17 च्या आकडेवारीनुसार महाराष्ट्रातील आदिवासी जिल्हातील अतिघनदाट वनाच्छादनाचे प्रमाणानुसार जिल्ह्यांचा उतरता क्रम ओळखा.",
    "question_english": "According to 2016-17 data, arrange the Tribal districts of Maharashtra in descending order in terms of area under very dense forest cover.",
    "options_marathi": [
      "गडचिरोली, गोंदिया, नांदेड, चंद्रपूर",
      "चंद्रपूर, नांदेड, गोंदिया, गडचिरोली",
      "गोंदिया, नांदेड, चंद्रपूर, गडचिरोली",
      "गडचिरोली, चंद्रपूर, गोंदिया, नांदेड"
    ],
    "options_english": [
      "Gadchiroli, Gondia, Nanded, Chandrapur",
      "Chandrapur, Nanded, Gondia, Gadchiroli",
      "Gondia, Nanded, Chandrapur, Gadchiroli",
      "Gadchiroli, Chandrapur, Gondia, Nanded"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Forest Cover in Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "According to the Forest Survey of India (FSI) reports, particularly relevant to the 2016-17 period (often reflected in ISFR 2017), Gadchiroli district consistently has the highest very dense forest cover in Maharashtra. Following Gadchiroli, Chandrapur, Gondia, and Nanded are the other districts with significant forest cover, in that descending order for very dense forests. Therefore, the correct descending order is Gadchiroli, Chandrapur, Gondia, Nanded.",
    "explanation_marathi": "भारतीय वन सर्वेक्षण (FSI) अहवालानुसार, विशेषतः 2016-17 कालावधीसाठी (जे सहसा ISFR 2017 मध्ये प्रतिबिंबित होते), गडचिरोली जिल्ह्यात महाराष्ट्रात सर्वाधिक अतिघनदाट वनक्षेत्र आहे. गडचिरोली नंतर, चंद्रपूर, गोंदिया आणि नांदेड हे इतर जिल्हे आहेत ज्यात अतिघनदाट वनक्षेत्राचे प्रमाण उतरत्या क्रमाने लक्षणीय आहे. म्हणून, योग्य उतरता क्रम गडचिरोली, चंद्रपूर, गोंदिया, नांदेड असा आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Gadchiroli, Gondia, Nanded, Chandrapur",
        "option_text_marathi": "गडचिरोली, गोंदिया, नांदेड, चंद्रपूर",
        "is_correct": false,
        "reason_english": "While Gadchiroli is correctly placed first, the order of Chandrapur and Gondia is incorrect. Chandrapur generally has more very dense forest cover than Gondia.",
        "reason_marathi": "गडचिरोली योग्यरित्या पहिल्या स्थानावर असले तरी, चंद्रपूर आणि गोंदियाचा क्रम चुकीचा आहे. चंद्रपूरमध्ये गोंदियापेक्षा जास्त अतिघनदाट वनक्षेत्र आहे."
      },
      {
        "option_text_english": "Chandrapur, Nanded, Gondia, Gadchiroli",
        "option_text_marathi": "चंद्रपूर, नांदेड, गोंदिया, गडचिरोली",
        "is_correct": false,
        "reason_english": "This option places Gadchiroli last, which is incorrect as it has the highest very dense forest cover among these districts.",
        "reason_marathi": "हा पर्याय गडचिरोलीला शेवटी ठेवतो, जे चुकीचे आहे कारण या जिल्ह्यांमध्ये गडचिरोलीमध्ये सर्वाधिक अतिघनदाट वनक्षेत्र आहे."
      },
      {
        "option_text_english": "Gondia, Nanded, Chandrapur, Gadchiroli",
        "option_text_marathi": "गोंदिया, नांदेड, चंद्रपूर, गडचिरोली",
        "is_correct": false,
        "reason_english": "This option incorrectly places Gondia first and Gadchiroli last, which is contrary to the actual data.",
        "reason_marathi": "हा पर्याय गोंदियाला पहिल्या स्थानावर आणि गडचिरोलीला शेवटी ठेवतो, जे वास्तविक आकडेवारीच्या विरुद्ध आहे."
      },
      {
        "option_text_english": "Gadchiroli, Chandrapur, Gondia, Nanded",
        "option_text_marathi": "गडचिरोली, चंद्रपूर, गोंदिया, नांदेड",
        "is_correct": true,
        "reason_english": "This order correctly reflects the descending sequence of very dense forest cover in these tribal districts as per 2016-17 data.",
        "reason_marathi": "हा क्रम 2016-17 च्या आकडेवारीनुसार या आदिवासी जिल्ह्यांमधील अतिघनदाट वनक्षेत्राचा उतरता क्रम योग्यरित्या दर्शवतो."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "महाराष्ट्रातील घाट व त्यांचे स्थान असलेले मार्ग यांच्या योग्य जोड्या लावा. घाट मार्ग अ. आंबेनळी I. पूणे - सातारा ब. अंबोली II. कोल्हापुर - कुडाळ क. खंबाटकी III. महाबळेश्वर - महाड ड. हनुमंते IV. बेळगांवी - सावंतवाडी",
    "question_english": "Match the correct pairs of Ghat and their location route in Maharashtra. Ghat Route A. Ambenali I. Pune - Satara B. Amboli II. Kolhapur - Kudal C. Khambataki III. Mahabaleshwar - Mahad D. Hanumante IV. Belagavi - Sawantwadi",
    "options_marathi": [
      "अ-IV, ब-II, क-III, ड-I",
      "अ-IV, ब-I, क-II, ड-III",
      "अ-III, ब-IV, क-I, ड-II",
      "अ-III, ब-II, क-I, ड-IV"
    ],
    "options_english": [
      "A-IV, B-II, C-III, D-I",
      "A-IV, B-I, C-II, D-III",
      "A-III, B-IV, C-I, D-II",
      "A-III, B-II, C-I, D-IV"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Ghats and Routes in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question requires matching the famous ghats of Maharashtra with the routes they are located on. Ambenali Ghat connects Mahabaleshwar to Mahad. Amboli Ghat is on the route from Belagavi to Sawantwadi. Khambataki Ghat is a significant pass on the Pune-Satara highway. Hanumante Ghat is located on the route connecting Kolhapur to Kudal. Thus, the correct pairings are A-III, B-IV, C-I, D-II.",
    "explanation_marathi": "या प्रश्नामध्ये महाराष्ट्रातील प्रसिद्ध घाट आणि ते ज्या मार्गांवर स्थित आहेत त्यांच्या योग्य जोड्या जुळवणे आवश्यक आहे. आंबेनळी घाट महाबळेश्वरला महाडशी जोडतो. आंबोली घाट बेळगांवी ते सावंतवाडी मार्गावर आहे. खंबाटकी घाट पुणे-सातारा महामार्गावरील एक महत्त्वाचा घाट आहे. हनुमंते घाट कोल्हापूरला कुडाळशी जोडणाऱ्या मार्गावर आहे. म्हणून, योग्य जोड्या अ-III, ब-IV, क-I, ड-II अशा आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "A-IV, B-II, C-III, D-I",
        "option_text_marathi": "अ-IV, ब-II, क-III, ड-I",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Ambenali with Belagavi-Sawantwadi, Amboli with Kolhapur-Kudal, Khambataki with Mahabaleshwar-Mahad, and Hanumante with Pune-Satara.",
        "reason_marathi": "हा पर्याय आंबेनळीला बेळगांवी-सावंतवाडीशी, आंबोलीला कोल्हापूर-कुडाळशी, खंबाटकीला महाबळेश्वर-महाडशी आणि हनुमंतेला पुणे-साताराशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "A-IV, B-I, C-II, D-III",
        "option_text_marathi": "अ-IV, ब-I, क-II, ड-III",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Ambenali with Belagavi-Sawantwadi, Amboli with Pune-Satara, Khambataki with Kolhapur-Kudal, and Hanumante with Mahabaleshwar-Mahad.",
        "reason_marathi": "हा पर्याय आंबेनळीला बेळगांवी-सावंतवाडीशी, आंबोलीला पुणे-साताराशी, खंबाटकीला कोल्हापूर-कुडाळशी आणि हनुमंतेला महाबळेश्वर-महाडशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "A-III, B-IV, C-I, D-II",
        "option_text_marathi": "अ-III, ब-IV, क-I, ड-II",
        "is_correct": true,
        "reason_english": "This option correctly matches Ambenali with Mahabaleshwar-Mahad, Amboli with Belagavi-Sawantwadi, Khambataki with Pune-Satara, and Hanumante with Kolhapur-Kudal.",
        "reason_marathi": "हा पर्याय आंबेनळीला महाबळेश्वर-महाडशी, आंबोलीला बेळगांवी-सावंतवाडीशी, खंबाटकीला पुणे-साताराशी आणि हनुमंतेला कोल्हापूर-कुडाळशी योग्यरित्या जुळवतो."
      },
      {
        "option_text_english": "A-III, B-II, C-I, D-IV",
        "option_text_marathi": "अ-III, ब-II, क-I, ड-IV",
        "is_correct": false,
        "reason_english": "While 'A-III' (Ambenali-Mahabaleshwar-Mahad) and 'C-I' (Khambataki-Pune-Satara) are correct, 'B-II' (Amboli-Kolhapur-Kudal) and 'D-IV' (Hanumante-Belagavi-Sawantwadi) are incorrect. Amboli is on Belagavi-Sawantwadi route and Hanumante is on Kolhapur-Kudal route.",
        "reason_marathi": "जरी 'अ-III' (आंबेनळी-महाबळेश्वर-महाड) आणि 'क-I' (खंबाटकी-पुणे-सातारा) योग्य असले तरी, 'ब-II' (आंबोली-कोल्हापूर-कुडाळ) आणि 'ड-IV' (हनुमंते-बेळगांवी-सावंतवाडी) चुकीचे आहेत. आंबोली बेळगांवी-सावंतवाडी मार्गावर आहे आणि हनुमंते कोल्हापूर-कुडाळ मार्गावर आहे."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "महाराष्ट्राच्या सातारा जिल्ह्यातील \"वनकुसावडे\" हे ठिकाण ______ साठी प्रसिद्ध आहे.",
    "question_english": "\"Vankusawade\", a place in the Satara district of Maharashtra is famous for ______",
    "options_marathi": [
      "लाकूड कटाई",
      "बॉक्साईट उत्खणन",
      "पवन ऊर्जा निर्मिती",
      "जलविद्युत उत्पादन"
    ],
    "options_english": [
      "Timber Cutting",
      "Bauxite mining",
      "Wind power generation",
      "Hydroelectricity production"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Renewable Energy in Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Vankusawade, located in the Satara district of Maharashtra, is widely recognized for its significant wind power generation projects. The region's favorable wind conditions make it an ideal location for wind farms, contributing substantially to Maharashtra's renewable energy capacity.",
    "explanation_marathi": "महाराष्ट्रातील सातारा जिल्ह्यातील वनकुसावडे हे ठिकाण पवन ऊर्जा निर्मिती प्रकल्पांसाठी मोठ्या प्रमाणावर ओळखले जाते. या प्रदेशातील अनुकूल वाऱ्याच्या परिस्थितीमुळे ते पवन ऊर्जा प्रकल्पांसाठी एक आदर्श स्थान बनले आहे, जे महाराष्ट्राच्या अक्षय ऊर्जा क्षमतेत महत्त्वपूर्ण योगदान देते.",
    "options_breakdown": [
      {
        "option_text_english": "Timber Cutting",
        "option_text_marathi": "लाकूड कटाई",
        "is_correct": false,
        "reason_english": "Vankusawade is not primarily known for timber cutting.",
        "reason_marathi": "वनकुसावडे हे प्रामुख्याने लाकूड कटाईसाठी ओळखले जात नाही."
      },
      {
        "option_text_english": "Bauxite mining",
        "option_text_marathi": "बॉक्साईट उत्खणन",
        "is_correct": false,
        "reason_english": "While bauxite mining occurs in some parts of Maharashtra, Vankusawade is not famous for it.",
        "reason_marathi": "महाराष्ट्राच्या काही भागांमध्ये बॉक्साईट उत्खनन होत असले तरी, वनकुसावडे त्यासाठी प्रसिद्ध नाही."
      },
      {
        "option_text_english": "Wind power generation",
        "option_text_marathi": "पवन ऊर्जा निर्मिती",
        "is_correct": true,
        "reason_english": "Vankusawade is a major site for wind power generation in Maharashtra, hosting numerous wind turbines.",
        "reason_marathi": "वनकुसावडे हे महाराष्ट्रातील पवन ऊर्जा निर्मितीचे एक प्रमुख ठिकाण आहे, जिथे अनेक पवनचक्की प्रकल्प आहेत."
      },
      {
        "option_text_english": "Hydroelectricity production",
        "option_text_marathi": "जलविद्युत उत्पादन",
        "is_correct": false,
        "reason_english": "Vankusawade is not known for hydroelectricity production.",
        "reason_marathi": "वनकुसावडे हे जलविद्युत उत्पादनासाठी ओळखले जात नाही."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "खालीलपैकी कोणती जोडी योग्य नाही ?",
    "question_english": "Which of the following pair is not correct?",
    "options_marathi": [
      "तोरणमाळ-अस्तंभा",
      "गावीलगड-चिखलदरा",
      "आंबोली-गरमसुर",
      "चिरोली-गडचिरोली"
    ],
    "options_english": [
      "Toranmal-Asthambha",
      "Gavilgad-Chikhaldara",
      "Amboli-Garamsur",
      "Chiroli-Gadchiroli"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Hill Stations, Forts, and Ranges in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question asks to identify the incorrect pair among the given options related to geographical locations in Maharashtra. Toranmal is a hill station in Nandurbar district, and Asthambha is a peak in the Satpura range, often associated with the Toranmal region, making this pair generally correct. Gavilgad Fort is located near Chikhaldara hill station in Amravati district, making this pair correct. Chiroli is a forest range/area located in Gadchiroli district, making this pair correct. However, Amboli is a hill station in Sindhudurg district, while Garamsur is a peak in the Satpura range, typically associated with the Nandurbar/Dhule region, not Amboli. Therefore, 'Amboli-Garamsur' is the incorrect pair.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील भौगोलिक स्थानांशी संबंधित दिलेल्या पर्यायांमधून चुकीची जोडी ओळखण्यास सांगतो. तोरणमाळ हे नंदुरबार जिल्ह्यातील थंड हवेचे ठिकाण आहे आणि अस्तंभा हे सातपुडा पर्वतरांगेतील एक शिखर आहे, जे अनेकदा तोरणमाळ प्रदेशाशी संबंधित आहे, त्यामुळे ही जोडी सामान्यतः योग्य आहे. गाविलगड किल्ला अमरावती जिल्ह्यातील चिखलदरा थंड हवेच्या ठिकाणाजवळ आहे, त्यामुळे ही जोडी योग्य आहे. चिरोली हे गडचिरोली जिल्ह्यात स्थित एक वनक्षेत्र आहे, त्यामुळे ही जोडी योग्य आहे. तथापि, आंबोली हे सिंधुदुर्ग जिल्ह्यातील थंड हवेचे ठिकाण आहे, तर गरमसुर हे सातपुडा पर्वतरांगेतील एक शिखर आहे, जे सामान्यतः नंदुरबार/धुळे प्रदेशाशी संबंधित आहे, आंबोलीशी नाही. म्हणून, 'आंबोली-गरमसुर' ही जोडी चुकीची आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Toranmal-Asthambha",
        "option_text_marathi": "तोरणमाळ-अस्तंभा",
        "is_correct": false,
        "reason_english": "Toranmal is a hill station in Nandurbar, and Asthambha is a peak in the Satpura range, often associated with the Toranmal region. This pair is considered correct.",
        "reason_marathi": "तोरणमाळ हे नंदुरबारमधील थंड हवेचे ठिकाण आहे आणि अस्तंभा हे सातपुडा पर्वतरांगेतील एक शिखर आहे, जे अनेकदा तोरणमाळ प्रदेशाशी संबंधित आहे. ही जोडी योग्य मानली जाते."
      },
      {
        "option_text_english": "Gavilgad-Chikhaldara",
        "option_text_marathi": "गावीलगड-चिखलदरा",
        "is_correct": false,
        "reason_english": "Gavilgad Fort is located near Chikhaldara hill station in Amravati district. This pair is correct.",
        "reason_marathi": "गाविलगड किल्ला अमरावती जिल्ह्यातील चिखलदरा थंड हवेच्या ठिकाणाजवळ आहे. ही जोडी योग्य आहे."
      },
      {
        "option_text_english": "Amboli-Garamsur",
        "option_text_marathi": "आंबोली-गरमसुर",
        "is_correct": true,
        "reason_english": "Amboli is in Sindhudurg district, while Garamsur is a peak in the Satpura range, not associated with Amboli. This is the incorrect pair.",
        "reason_marathi": "आंबोली सिंधुदुर्ग जिल्ह्यात आहे, तर गरमसुर हे सातपुडा पर्वतरांगेतील एक शिखर आहे, जे आंबोलीशी संबंधित नाही. ही चुकीची जोडी आहे."
      },
      {
        "option_text_english": "Chiroli-Gadchiroli",
        "option_text_marathi": "चिरोली-गडचिरोली",
        "is_correct": false,
        "reason_english": "Chiroli is a forest range/area located in Gadchiroli district. This pair is correct.",
        "reason_marathi": "चिरोली हे गडचिरोली जिल्ह्यात स्थित एक वनक्षेत्र आहे. ही जोडी योग्य आहे."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "खालीलपैकी कोणती विधाने बरोबर आहेत ? a. चुनिलाल मेहता यांनी सहकारी तत्वावर साखर कारखाना सुरू करण्याचा प्रयत्न केला. b. डॉ. धनंजय गाडगीळ यांच्या मार्गदर्शनाखाली महाराष्ट्रात सहकारी साखर कारखानदारीचा शुभारंभ झाला. c. सन 1905 नंतर मुंबई कापड कारखानदारीमध्ये तेजी आली.",
    "question_english": "Which of the following statements is / are correct? a. Chunilal Mehta tried to start a sugar industry on cooperative basis. b. Cooperative sugar industry was started in Maharashtra under the guidance of Dr. Dhananjay Gadgil. c. After 1905, textile industry flourished in Mumbai.",
    "options_marathi": [
      "a आणि b बरोबर आहेत",
      "a, b आणि c बरोबर आहेत",
      "a आणि c बरोबर आहेत",
      "फक्त c बरोबर आहे"
    ],
    "options_english": [
      "a and b are correct",
      "a, b and c are correct",
      "a and c are correct",
      "only c is correct"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Cooperative Movement and Industrial Development in Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Nuance",
    "explanation_english": "Let's analyze each statement: a. Chunilal Mehta was a prominent figure in the cooperative movement in the Bombay Presidency and advocated for cooperative principles in various sectors. While Vithalrao Vikhe Patil is credited with establishing the first cooperative sugar factory, Mehta's broader efforts in promoting cooperatives make this statement plausible in a general sense of 'trying'. b. Dr. Dhananjay Gadgil provided crucial intellectual and economic guidance for the establishment and growth of the cooperative sugar industry in Maharashtra, making this statement correct. c. The Swadeshi movement, which gained momentum after 1905, significantly boosted indigenous industries, including the textile industry in Mumbai, leading to its flourishing. This statement is historically correct. Given that 'b' and 'c' are definitively correct, and 'a' can be interpreted as correct in a broader context of advocacy, the most comprehensive correct option is 'a, b and c are correct'.",
    "explanation_marathi": "प्रत्येक विधानाचे विश्लेषण करूया: अ. चुनिलाल मेहता हे मुंबई प्रांतातील सहकारी चळवळीतील एक प्रमुख व्यक्तिमत्व होते आणि त्यांनी विविध क्षेत्रांमध्ये सहकारी तत्त्वांचा पुरस्कार केला. विठ्ठलराव विखे पाटील यांना पहिला सहकारी साखर कारखाना स्थापन करण्याचे श्रेय दिले जात असले तरी, मेहतांच्या सहकारी संस्थांना प्रोत्साहन देण्यासाठी केलेल्या व्यापक प्रयत्नांमुळे हे विधान 'प्रयत्न' या सामान्य अर्थाने योग्य मानले जाऊ शकते. ब. डॉ. धनंजय गाडगीळ यांनी महाराष्ट्रातील सहकारी साखर उद्योगाच्या स्थापनेसाठी आणि वाढीसाठी महत्त्वपूर्ण बौद्धिक आणि आर्थिक मार्गदर्शन केले, ज्यामुळे हे विधान योग्य आहे. क. 1905 नंतर जोर धरलेल्या स्वदेशी चळवळीने मुंबईतील कापड उद्योगासह स्वदेशी उद्योगांना लक्षणीय चालना दिली, ज्यामुळे तो भरभराटीस आला. हे विधान ऐतिहासिकदृष्ट्या योग्य आहे. 'ब' आणि 'क' ही विधाने निश्चितपणे योग्य असल्याने आणि 'अ' हे विधान व्यापक अर्थाने (पुरस्काराच्या संदर्भात) योग्य मानले जाऊ शकत असल्याने, सर्वात योग्य पर्याय 'अ, ब आणि क बरोबर आहेत' हा आहे.",
    "options_breakdown": [
      {
        "option_text_english": "a and b are correct",
        "option_text_marathi": "a आणि b बरोबर आहेत",
        "is_correct": false,
        "reason_english": "While 'b' is correct, and 'a' can be argued, statement 'c' is also correct, making this option incomplete.",
        "reason_marathi": "जरी 'ब' योग्य असले आणि 'अ' वर वाद घालता येत असला तरी, विधान 'क' देखील योग्य आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "a, b and c are correct",
        "option_text_marathi": "a, b आणि c बरोबर आहेत",
        "is_correct": true,
        "reason_english": "All three statements are considered correct. Chunilal Mehta was a proponent of cooperative principles, Dr. D.R. Gadgil guided the cooperative sugar industry, and the Mumbai textile industry flourished post-1905 due to the Swadeshi movement.",
        "reason_marathi": "तिन्ही विधाने योग्य मानली जातात. चुनिलाल मेहता हे सहकारी तत्त्वांचे पुरस्कर्ते होते, डॉ. डी.आर. गाडगीळ यांनी सहकारी साखर उद्योगाला मार्गदर्शन केले आणि 1905 नंतर स्वदेशी चळवळीमुळे मुंबईतील कापड उद्योग भरभराटीस आला."
      },
      {
        "option_text_english": "a and c are correct",
        "option_text_marathi": "a आणि c बरोबर आहेत",
        "is_correct": false,
        "reason_english": "This option omits statement 'b', which is definitively correct regarding Dr. D.R. Gadgil's role.",
        "reason_marathi": "हा पर्याय विधान 'ब' वगळतो, जे डॉ. डी.आर. गाडगीळ यांच्या भूमिकेबद्दल निश्चितपणे योग्य आहे."
      },
      {
        "option_text_english": "only c is correct",
        "option_text_marathi": "फक्त c बरोबर आहे",
        "is_correct": false,
        "reason_english": "Statements 'a' and 'b' are also correct, making this option incomplete.",
        "reason_marathi": "विधान 'अ' आणि 'ब' देखील योग्य आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "डॉ. बाबासाहेब आंबेडकर यांच्या कार्याविषयी कालक्रमानुसार रचना करा. a. मुंबई विधिमंडळात 'महार वतन सुधारणा विधेयक' मांडले. b. समाज समता संघाची स्थापना. c. बहिष्कृत हितकारिणी सभेची स्थापना. d. काळाराम मंदिर प्रवेश सत्याग्रह.",
    "question_english": "Arrange Dr. Babasaheb Ambedkar's works in Chronological order. a. Introduced the 'Mahar Vatan Amendment Bill' in the Bombay Legislature. b. Establishment of 'Samaj Samata Sangh'. c. Establishment of 'Bahishkrit Hitkarini Sabha'. d. Satyagraha for entrance to the Kalaram temple.",
    "options_marathi": [
      "d, c, a आणि b",
      "c, b, a आणि d",
      "b, a, d आणि c",
      "b, d, a आणि c"
    ],
    "options_english": [
      "d, c, a and b",
      "c, b, a and d",
      "b, a, d and c",
      "b, d, a and c"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Dr. B.R. Ambedkar's Social Reforms",
    "difficulty": "Medium",
    "trap_detected": "Chronological Order",
    "explanation_english": "To arrange Dr. Babasaheb Ambedkar's works chronologically, we need to recall their respective years: c. Establishment of 'Bahishkrit Hitkarini Sabha' was in 1924. b. Establishment of 'Samaj Samata Sangh' was in March 1927. a. Introduction of the 'Mahar Vatan Amendment Bill' in the Bombay Legislature was in August 1927. d. The Kalaram Temple Entry Satyagraha took place in 1930. Therefore, the correct chronological order is c, b, a, d.",
    "explanation_marathi": "डॉ. बाबासाहेब आंबेडकरांच्या कार्यांची कालक्रमानुसार मांडणी करण्यासाठी, त्यांच्या संबंधित वर्षांची आठवण करणे आवश्यक आहे: क. 'बहिष्कृत हितकारिणी सभेची' स्थापना 1924 मध्ये झाली. ब. 'समाज समता संघाची' स्थापना मार्च 1927 मध्ये झाली. अ. मुंबई विधिमंडळात 'महार वतन सुधारणा विधेयक' ऑगस्ट 1927 मध्ये मांडले गेले. ड. काळाराम मंदिर प्रवेश सत्याग्रह 1930 मध्ये झाला. म्हणून, योग्य कालक्रमानुसार क्रम c, b, a, d असा आहे.",
    "options_breakdown": [
      {
        "option_text_english": "d, c, a and b",
        "option_text_marathi": "d, c, a आणि b",
        "is_correct": false,
        "reason_english": "This order is incorrect. Kalaram Temple Satyagraha (1930) came after the other events listed.",
        "reason_marathi": "हा क्रम चुकीचा आहे. काळाराम मंदिर सत्याग्रह (1930) इतर घटनांनंतर झाला."
      },
      {
        "option_text_english": "c, b, a and d",
        "option_text_marathi": "c, b, a आणि d",
        "is_correct": true,
        "reason_english": "This option correctly places the events in chronological order: Bahishkrit Hitkarini Sabha (1924), Samaj Samata Sangh (March 1927), Mahar Vatan Amendment Bill (August 1927), and Kalaram Temple Entry Satyagraha (1930).",
        "reason_marathi": "हा पर्याय घटनांना योग्य कालक्रमानुसार ठेवतो: बहिष्कृत हितकारिणी सभा (1924), समाज समता संघ (मार्च 1927), महार वतन सुधारणा विधेयक (ऑगस्ट 1927) आणि काळाराम मंदिर प्रवेश सत्याग्रह (1930)."
      },
      {
        "option_text_english": "b, a, d and c",
        "option_text_marathi": "b, a, d आणि c",
        "is_correct": false,
        "reason_english": "This order is incorrect. Bahishkrit Hitkarini Sabha (c) was established before Samaj Samata Sangh (b).",
        "reason_marathi": "हा क्रम चुकीचा आहे. बहिष्कृत हितकारिणी सभा (क) समाज समता संघाच्या (ब) आधी स्थापन झाली होती."
      },
      {
        "option_text_english": "b, d, a and c",
        "option_text_marathi": "b, d, a आणि c",
        "is_correct": false,
        "reason_english": "This order is incorrect. Bahishkrit Hitkarini Sabha (c) was established before Samaj Samata Sangh (b), and Kalaram Temple Satyagraha (d) was after the Mahar Vatan Bill (a).",
        "reason_marathi": "हा क्रम चुकीचा आहे. बहिष्कृत हितकारिणी सभा (क) समाज समता संघाच्या (ब) आधी स्थापन झाली होती आणि काळाराम मंदिर सत्याग्रह (ड) महार वतन विधेयकानंतर (अ) झाला होता."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "25 सप्टेंबर 1930 ला सिन्नर येथील शेतकऱ्यांच्या मोर्चात सहभागी झालेल्या कोणत्या कार्यकर्त्याला पोलीसांच्या खुनाचा कट केल्याच्या आरोपावरून शिक्षा दिली होती ? अ. नानासाहेब देव, ब. हरोलीकर ब. केशव गणेश गुप्ते, प्रभाकर रास्ते क. वसंत महादेव बेडेकर, नारायण धोंडो खरे ड. त्रंबक नारायण बेडेकर",
    "question_english": "Which of the following activists were prosecuted for conspiracy of Police murder in Participation of Farmers march on 25th September 1930 at Chirner? a. Nanasaheb Dev, T.B. Harolikar b. Keshav Ganesh Gupte, Prabhakar Raste c. Vasant Mahadev Bedekar, Narayan Dhondo Khare d. Trimbak Narayan Bedekar",
    "options_marathi": [
      "अ आणि ब फक्त",
      "ब आणि क फक्त",
      "क आणि ड फक्त",
      "ब, क आणि ड फक्त"
    ],
    "options_english": [
      "a and b only",
      "b and c only",
      "c and d only",
      "b, c and d only"
    ],
    "correct_option_index": 0,
    "subject": "History",
    "topic": "Freedom Struggle in Maharashtra (Forest Satyagraha)",
    "difficulty": "Hard",
    "trap_detected": "Factual Error in Question, Specific Factual Recall",
    "explanation_english": "The question contains a critical factual error. It mentions 'Sinnar' (Nashik district) in Marathi but 'Chirner' (Raigad district) in English, referring to the event of 25th September 1930 where a police officer was killed during a farmers' march. The well-known historical event is the Chirner Forest Satyagraha, not Sinnar. In the Chirner Satyagraha, Head Constable Yeshwantrao was killed. Several individuals were prosecuted for this, including Vasant Mahadev Bedekar, Narayan Dhondo Khare, and Trimbak Narayan Bedekar. Due to the discrepancy in the location mentioned in the question and the historical context, and the original `correct_option_index` being -1, this question is considered to have no definitively correct option among the choices or was likely cancelled. If we consider the Chirner event, 'c' (Vasant Mahadev Bedekar, Narayan Dhondo Khare) and 'd' (Trimbak Narayan Bedekar) were indeed prosecuted. However, as the question is flawed and cancelled, the output `correct_option_index` is 0.",
    "explanation_marathi": "प्रश्नामध्ये एक गंभीर तथ्यात्मक चूक आहे. मराठीमध्ये 'सिन्नर' (नाशिक जिल्हा) आणि इंग्रजीमध्ये 'चिरनेर' (रायगड जिल्हा) असे नमूद केले आहे, जे 25 सप्टेंबर 1930 रोजी शेतकऱ्यांच्या मोर्चादरम्यान एका पोलीस अधिकाऱ्याच्या हत्येशी संबंधित घटनेचा संदर्भ देते. सुप्रसिद्ध ऐतिहासिक घटना चिरनेर जंगल सत्याग्रह आहे, सिन्नर नाही. चिरनेर सत्याग्रहात हेड कॉन्स्टेबल यशवंतराव यांची हत्या झाली होती. यासाठी वसंत महादेव बेडेकर, नारायण धोंडो खरे आणि त्र्यंबक नारायण बेडेकर यांच्यासह अनेकांवर खटला चालवण्यात आला. प्रश्नात नमूद केलेल्या ठिकाणातील विसंगती आणि ऐतिहासिक संदर्भामुळे, तसेच मूळ `correct_option_index` -1 असल्याने, या प्रश्नाला दिलेल्या पर्यायांमध्ये निश्चितपणे योग्य पर्याय नाही किंवा तो रद्द करण्यात आला असावा. जर आपण चिरनेर घटनेचा विचार केला, तर 'क' (वसंत महादेव बेडेकर, नारायण धोंडो खरे) आणि 'ड' (त्र्यंबक नारायण बेडेकर) यांच्यावर खटला चालवण्यात आला होता. तथापि, प्रश्न स्वतःच सदोष असल्याने आणि रद्द केलेला असल्याने, आउटपुट `correct_option_index` 0 आहे.",
    "options_breakdown": [
      {
        "option_text_english": "a and b only",
        "option_text_marathi": "अ आणि ब फक्त",
        "is_correct": false,
        "reason_english": "Nanasaheb Dev and T.B. Harolikar are not primarily associated with the Chirner incident's prosecution for police murder.",
        "reason_marathi": "नानासाहेब देव आणि टी.बी. हरोळीकर हे चिरनेर घटनेतील पोलीस हत्येच्या खटल्याशी प्रामुख्याने संबंधित नाहीत."
      },
      {
        "option_text_english": "b and c only",
        "option_text_marathi": "ब आणि क फक्त",
        "is_correct": false,
        "reason_english": "While Vasant Mahadev Bedekar and Narayan Dhondo Khare (c) were prosecuted, Keshav Ganesh Gupte and Prabhakar Raste (b) are not the primary figures for this specific prosecution.",
        "reason_marathi": "वसंत महादेव बेडेकर आणि नारायण धोंडो खरे (क) यांच्यावर खटला चालवण्यात आला असला तरी, केशव गणेश गुप्ते आणि प्रभाकर रास्ते (ब) हे या विशिष्ट खटल्यातील प्रमुख व्यक्ती नाहीत."
      },
      {
        "option_text_english": "c and d only",
        "option_text_marathi": "क आणि ड फक्त",
        "is_correct": false,
        "reason_english": "Vasant Mahadev Bedekar, Narayan Dhondo Khare, and Trimbak Narayan Bedekar were indeed prosecuted for the Chirner incident. This option would be correct if the question was clear and not cancelled. However, as the question is flawed and cancelled, this option is not marked as correct.",
        "reason_marathi": "वसंत महादेव बेडेकर, नारायण धोंडो खरे आणि त्र्यंबक नारायण बेडेकर यांच्यावर चिरनेर घटनेसाठी खटला चालवण्यात आला होता. प्रश्न स्पष्ट आणि रद्द केलेला नसता तर हा पर्याय योग्य ठरला असता. तथापि, प्रश्न सदोष आणि रद्द केलेला असल्याने, हा पर्याय योग्य म्हणून चिन्हांकित केलेला नाही."
      },
      {
        "option_text_english": "b, c and d only",
        "option_text_marathi": "ब, क आणि ड फक्त",
        "is_correct": false,
        "reason_english": "This option includes Keshav Ganesh Gupte and Prabhakar Raste (b) who are not as directly linked to the police murder prosecution in Chirner as 'c' and 'd'.",
        "reason_marathi": "या पर्यायात केशव गणेश गुप्ते आणि प्रभाकर रास्ते (ब) यांचा समावेश आहे, जे चिरनेरमधील पोलीस हत्येच्या खटल्याशी 'क' आणि 'ड' इतके थेट संबंधित नाहीत."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "इ.स. 1817-18 मध्ये खालीलपैकी कोणी गोंड व इतर आदिवासींच्या जमात प्रमुखांना एकत्र आणून इंग्रजांशी लढा दिला होता ?",
    "question_english": "Who among the following brought together the Gond and other tribal chiefs to Fight against the British in 1817-18 A.D. ?",
    "options_marathi": [
      "सेवाराम घिसाडी (नांदापूर)",
      "राजे आप्पासाहेब भोसले (नागपूर)",
      "आप्पासाहेब पटवर्धन (जमखिंडी)",
      "चिल नाईक (हदगांव)"
    ],
    "options_english": [
      "Sevaram Ghisadi (Nandapur)",
      "Raje Appasaheb Bhosale (Nagpur)",
      "Appasaheb Patwardhan (Jamkhindi)",
      "Chill Naik (Hadgaon)"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Anglo-Maratha Wars and Tribal Resistance",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The period 1817-1818 A.D. marks the Third Anglo-Maratha War, which led to the final collapse of the Maratha Empire. After his defeat at the Battle of Sitabuldi, Raje Appasaheb Bhosale, the ruler of Nagpur, attempted to rally support from various local chiefs, including the Gond and other tribal leaders, to continue his resistance against the British. He sought to organize a broader uprising against British dominance in the region.",
    "explanation_marathi": "इ.स. 1817-1818 हा काळ तिसऱ्या इंग्रज-मराठा युद्धाचा होता, ज्यामुळे मराठा साम्राज्याचा अंतिम पाडाव झाला. सीताबर्डीच्या युद्धात पराभव झाल्यानंतर, नागपूरचे शासक राजे आप्पासाहेब भोसले यांनी इंग्रजांविरुद्ध आपला प्रतिकार सुरू ठेवण्यासाठी गोंड आणि इतर आदिवासी नेत्यांसह विविध स्थानिक सरदारांकडून पाठिंबा मिळवण्याचा प्रयत्न केला. त्यांनी प्रदेशात ब्रिटिश वर्चस्वाविरुद्ध व्यापक उठाव आयोजित करण्याचा प्रयत्न केला.",
    "options_breakdown": [
      {
        "option_text_english": "Sevaram Ghisadi (Nandapur)",
        "option_text_marathi": "सेवाराम घिसाडी (नांदापूर)",
        "is_correct": false,
        "reason_english": "Sevaram Ghisadi was a tribal leader but not the primary figure who united Gond and other chiefs against the British in 1817-18.",
        "reason_marathi": "सेवाराम घिसाडी हे एक आदिवासी नेते होते, परंतु 1817-18 मध्ये गोंड आणि इतर सरदारांना इंग्रजांविरुद्ध एकत्र आणणारे ते प्रमुख व्यक्तिमत्व नव्हते."
      },
      {
        "option_text_english": "Raje Appasaheb Bhosale (Nagpur)",
        "option_text_marathi": "राजे आप्पासाहेब भोसले (नागपूर)",
        "is_correct": true,
        "reason_english": "Raje Appasaheb Bhosale of Nagpur, during the Third Anglo-Maratha War (1817-18), actively sought to unite tribal chiefs, including the Gonds, to fight against the British.",
        "reason_marathi": "नागपूरचे राजे आप्पासाहेब भोसले यांनी तिसऱ्या इंग्रज-मराठा युद्धादरम्यान (1817-18) गोंड आणि इतर आदिवासी सरदारांना इंग्रजांविरुद्ध लढण्यासाठी एकत्र आणण्याचा सक्रिय प्रयत्न केला."
      },
      {
        "option_text_english": "Appasaheb Patwardhan (Jamkhindi)",
        "option_text_marathi": "आप्पासाहेब पटवर्धन (जमखिंडी)",
        "is_correct": false,
        "reason_english": "Appasaheb Patwardhan was a Maratha chief but not known for uniting tribal chiefs against the British in this specific context.",
        "reason_marathi": "आप्पासाहेब पटवर्धन हे मराठा सरदार होते, परंतु या विशिष्ट संदर्भात आदिवासी सरदारांना इंग्रजांविरुद्ध एकत्र आणण्यासाठी ते ओळखले जात नाहीत."
      },
      {
        "option_text_english": "Chill Naik (Hadgaon)",
        "option_text_marathi": "चिल नाईक (हदगांव)",
        "is_correct": false,
        "reason_english": "Chill Naik was a tribal leader, but his activities are not primarily associated with uniting a broad coalition of Gond and other chiefs against the British in 1817-18.",
        "reason_marathi": "चिल नाईक हे एक आदिवासी नेते होते, परंतु त्यांच्या कारवाया 1817-18 मध्ये गोंड आणि इतर सरदारांच्या व्यापक आघाडीला इंग्रजांविरुद्ध एकत्र आणण्याशी प्रामुख्याने संबंधित नाहीत."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "क्रांतिकारकांच्या कार्याविषयी योग्य जोड्या लावा. क्रांतिकारक कार्य a. डॉ. सिद्धनाथ काणे I. आर्य बांधव समाज b. श्रीधर परांजपे, बुवा उपाध्ये II. यवतमाळ गुप्त संघटना c. सदाशिव निळकंठ जोशी III. माहीम येतील बाँब कारखाना d. गोविंद नारायण पोतदार IV. बीडचा उठाव",
    "question_english": "Match the following pairs regarding work of the revolutionaries. Revolutionary Work a. Dr. Shidhanath Kane I. Arya Bandhav Samaj b. Shridhar Paranjape, Buwa Upadhye II. Yawatmal Gupta Sanghatana c. Sadashiv Nilkant Joshi III. Bomb factory in Mahim d. Govind Narayan Potdar IV. Revolt of Beed",
    "options_marathi": [
      "अ-IV, ब-III, क-II, ड-I",
      "अ-III, ब-IV, क-I, ड-II",
      "अ-II, ब-I, क-IV, ड-III",
      "अ-III, ब-I, क-IV, ड-II"
    ],
    "options_english": [
      "a-IV, b-III, c-II, d-I",
      "a-III, b-IV, c-I, d-II",
      "a-II, b-I, c-IV, d-III",
      "a-III, b-I, c-IV, d-II"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Revolutionary Movement in Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of specific revolutionaries and their activities in Maharashtra. Dr. Shidhanath Kane was associated with the Yavatmal Secret Organization (Yavatmal Gupta Sanghatana). Shridhar Paranjape and Buwa Upadhye were key figures in the Arya Bandhav Samaj. Sadashiv Nilkant Joshi was involved in the Revolt of Beed. Govind Narayan Potdar was linked to the bomb factory in Mahim. Therefore, the correct matching is a-II, b-I, c-IV, d-III.",
    "explanation_marathi": "हा प्रश्न महाराष्ट्रातील विशिष्ट क्रांतिकारकांच्या आणि त्यांच्या कार्यांच्या ज्ञानाची चाचणी घेतो. डॉ. सिद्धनाथ काणे हे यवतमाळ गुप्त संघटनेशी संबंधित होते. श्रीधर परांजपे आणि बुवा उपाध्ये हे आर्य बांधव समाजातील प्रमुख व्यक्ती होते. सदाशिव निळकंठ जोशी बीडच्या उठावात सामील होते. गोविंद नारायण पोतदार यांचा संबंध माहीम येथील बाँब कारखान्याशी होता. म्हणून, योग्य जुळणी अ-II, ब-I, क-IV, ड-III अशी आहे.",
    "options_breakdown": [
      {
        "option_text_english": "a-IV, b-III, c-II, d-I",
        "option_text_marathi": "अ-IV, ब-III, क-II, ड-I",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Dr. Shidhanath Kane with Revolt of Beed, Shridhar Paranjape/Buwa Upadhye with Bomb factory in Mahim, Sadashiv Nilkant Joshi with Yavatmal Gupta Sanghatana, and Govind Narayan Potdar with Arya Bandhav Samaj.",
        "reason_marathi": "हा पर्याय डॉ. सिद्धनाथ काणे यांना बीडच्या उठावाशी, श्रीधर परांजपे/बुवा उपाध्ये यांना माहीम येथील बाँब कारखान्याशी, सदाशिव निळकंठ जोशी यांना यवतमाळ गुप्त संघटनेशी आणि गोविंद नारायण पोतदार यांना आर्य बांधव समाजाशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "a-III, b-IV, c-I, d-II",
        "option_text_marathi": "अ-III, ब-IV, क-I, ड-II",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Dr. Shidhanath Kane with Bomb factory in Mahim, Shridhar Paranjape/Buwa Upadhye with Revolt of Beed, Sadashiv Nilkant Joshi with Arya Bandhav Samaj, and Govind Narayan Potdar with Yavatmal Gupta Sanghatana.",
        "reason_marathi": "हा पर्याय डॉ. सिद्धनाथ काणे यांना माहीम येथील बाँब कारखान्याशी, श्रीधर परांजपे/बुवा उपाध्ये यांना बीडच्या उठावाशी, सदाशिव निळकंठ जोशी यांना आर्य बांधव समाजाशी आणि गोविंद नारायण पोतदार यांना यवतमाळ गुप्त संघटनेशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_text_english": "a-II, b-I, c-IV, d-III",
        "option_text_marathi": "अ-II, ब-I, क-IV, ड-III",
        "is_correct": true,
        "reason_english": "This option correctly matches Dr. Shidhanath Kane with Yavatmal Gupta Sanghatana, Shridhar Paranjape/Buwa Upadhye with Arya Bandhav Samaj, Sadashiv Nilkant Joshi with Revolt of Beed, and Govind Narayan Potdar with Bomb factory in Mahim.",
        "reason_marathi": "हा पर्याय डॉ. सिद्धनाथ काणे यांना यवतमाळ गुप्त संघटनेशी, श्रीधर परांजपे/बुवा उपाध्ये यांना आर्य बांधव समाजाशी, सदाशिव निळकंठ जोशी यांना बीडच्या उठावाशी आणि गोविंद नारायण पोतदार यांना माहीम येथील बाँब कारखान्याशी योग्यरित्या जुळवतो."
      },
      {
        "option_text_english": "a-III, b-I, c-IV, d-II",
        "option_text_marathi": "अ-III, ब-I, क-IV, ड-II",
        "is_correct": false,
        "reason_english": "While 'b-I' (Shridhar Paranjape/Buwa Upadhye - Arya Bandhav Samaj) and 'c-IV' (Sadashiv Nilkant Joshi - Revolt of Beed) are correct, 'a-III' (Dr. Shidhanath Kane - Bomb factory in Mahim) and 'd-II' (Govind Narayan Potdar - Yavatmal Gupta Sanghatana) are incorrect.",
        "reason_marathi": "जरी 'ब-I' (श्रीधर परांजपे/बुवा उपाध्ये - आर्य बांधव समाज) आणि 'क-IV' (सदाशिव निळकंठ जोशी - बीडचा उठाव) योग्य असले तरी, 'अ-III' (डॉ. सिद्धनाथ काणे - माहीम येथील बाँब कारखाना) आणि 'ड-II' (गोविंद नारायण पोतदार - यवतमाळ गुप्त संघटना) चुकीचे आहेत."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "खालील विवरणावरून समाजसुधारक ओळखा. a. 'अरुणोदय' या आत्मचरित्राचे लेखन केले b. परमहंस सभेचे सक्रिय सदस्य बनले c. 'बायबल ट्रस्ट सोसायटी' चे संपादक होते d. इंग्रजी-मराठी या शब्दकोशाचे लेखन केले",
    "question_english": "Identify the social reformer from the following description. a. Wrote an autobiography 'Arunodaya' b. Became an active member of Paramahans Sabha c. Was the editor of 'Bible Trust Society' d. Wrote English-Marathi dictionary",
    "options_marathi": [
      "बेहरामजी मलबारी",
      "विष्णूबुवा ब्रम्हचारी",
      "बाबा पदमजी",
      "दादोबा पांडुरंग तर्खडकर"
    ],
    "options_english": [
      "Behramaji Malbari",
      "Vishnubuwa Brahmachari",
      "Baba Padamji",
      "Dadoba Pandurang Tarkhadkar"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Social and Religious Reform Movements (Maharashtra)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Baba Padamji (1827-1906) was a significant figure in 19th-century Maharashtra, known for his literary contributions and his journey from a Hindu background to Christianity. His autobiography, 'Arunodaya', provides valuable insights into his life and the social context of the time. He was initially associated with the Paramahans Sabha, a secret socio-religious reform society, before his conversion. His work as an editor for the 'Bible Trust Society' and his compilation of an English-Marathi dictionary further highlight his intellectual and linguistic prowess.",
    "explanation_marathi": "बाबा पदमजी (१८२७-१९०६) हे १९ व्या शतकातील महाराष्ट्रातील एक महत्त्वाचे व्यक्तिमत्व होते, जे त्यांच्या साहित्यिक योगदानासाठी आणि हिंदू धर्मातून ख्रिश्चन धर्माकडे झालेल्या त्यांच्या प्रवासासाठी ओळखले जातात. त्यांचे 'अरुणोदय' हे आत्मचरित्र त्यांच्या जीवनावर आणि तत्कालीन सामाजिक परिस्थितीवर मौल्यवान प्रकाश टाकते. धर्मांतर करण्यापूर्वी ते सुरुवातीला परमहंस सभेचे सक्रिय सदस्य होते, जी एक गुप्त सामाजिक-धार्मिक सुधारणा संस्था होती. 'बायबल ट्रस्ट सोसायटी' चे संपादक म्हणून त्यांचे कार्य आणि इंग्रजी-मराठी शब्दकोशाचे संकलन यामुळे त्यांची बौद्धिक आणि भाषिक क्षमता अधिक अधोरेखित होते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Behramaji Malbari",
        "is_correct": false,
        "reason": "Behramaji Malbari was known for advocating for women's rights, especially the Age of Consent Act, and founding 'Seva Sadan'. He is not associated with 'Arunodaya' or Paramahans Sabha."
      },
      {
        "option_number": 2,
        "option_english": "Vishnubuwa Brahmachari",
        "is_correct": false,
        "reason": "Vishnubuwa Brahmachari was a Hindu revivalist and social reformer, known for his book 'Sukhadayak Rajyaprakarani Nibandha'. He is not associated with the descriptions given in the question."
      },
      {
        "option_number": 3,
        "option_english": "Baba Padamji",
        "is_correct": true,
        "reason": "All descriptions accurately match Baba Padamji. He wrote 'Arunodaya', was an active member of Paramahans Sabha, edited for 'Bible Trust Society', and compiled an English-Marathi dictionary."
      },
      {
        "option_number": 4,
        "option_english": "Dadoba Pandurang Tarkhadkar",
        "is_correct": false,
        "reason": "Dadoba Pandurang Tarkhadkar is known as the 'Panini of Marathi Grammar' and was a founder of Paramahans Sabha. However, he did not write 'Arunodaya' or edit 'Bible Trust Society'."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "कालक्रमानुसार रचना करा. a. बॉम्बे असोसिएशन b. बॉम्बे प्रेसिडेन्सी असोसिएशन c. मद्रास महाजन सभा d. ईस्ट इंडिया असोसिएशन",
    "question_english": "Arrange according to chronological order. a. Bombay Association b. Bombay Presidency Association c. Madras Mahajan Sabha d. East India Association",
    "options_marathi": [
      "d, c, b, a",
      "b, d, c, a",
      "a, d, c, b",
      "c, a, d, b"
    ],
    "options_english": [
      "d, c, b, a",
      "b, d, c, a",
      "a, d, c, b",
      "c, a, d, b"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Pre-Congress Political Organizations",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question tests knowledge of the chronological order of important political associations formed in India and by Indians abroad during the 19th century, preceding the Indian National Congress. The Bombay Association was one of the earliest, founded in 1852. The East India Association was established in London in 1866 by Dadabhai Naoroji to influence British public opinion. The Madras Mahajan Sabha was formed in 1884, and the Bombay Presidency Association was established in 1885, just before the Indian National Congress, playing a crucial role in mobilizing public opinion in their respective regions.",
    "explanation_marathi": "हा प्रश्न १९ व्या शतकात, भारतीय राष्ट्रीय काँग्रेसच्या स्थापनेपूर्वी भारतात आणि परदेशात भारतीयांनी स्थापन केलेल्या महत्त्वाच्या राजकीय संघटनांच्या कालक्रमानुसार माहिती तपासतो. बॉम्बे असोसिएशन ही १८५२ मध्ये स्थापन झालेली सर्वात जुनी संघटनांपैकी एक होती. ईस्ट इंडिया असोसिएशनची स्थापना दादाभाई नौरोजी यांनी १८६६ मध्ये लंडनमध्ये ब्रिटिश जनमतावर प्रभाव टाकण्यासाठी केली होती. मद्रास महाजन सभेची स्थापना १८८४ मध्ये झाली आणि बॉम्बे प्रेसिडेन्सी असोसिएशनची स्थापना १८८५ मध्ये, भारतीय राष्ट्रीय काँग्रेसच्या अगदी आधी झाली, ज्यांनी आपापल्या प्रदेशात जनमत संघटित करण्यात महत्त्वाची भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "d, c, b, a",
        "is_correct": false,
        "reason": "This order (1866, 1884, 1885, 1852) is incorrect chronologically."
      },
      {
        "option_number": 2,
        "option_english": "b, d, c, a",
        "is_correct": false,
        "reason": "This order (1885, 1866, 1884, 1852) is incorrect chronologically."
      },
      {
        "option_number": 3,
        "option_english": "a, d, c, b",
        "is_correct": true,
        "reason": "The correct chronological order is: Bombay Association (1852), East India Association (1866), Madras Mahajan Sabha (1884), Bombay Presidency Association (1885)."
      },
      {
        "option_number": 4,
        "option_english": "c, a, d, b",
        "is_correct": false,
        "reason": "This order (1884, 1852, 1866, 1885) is incorrect chronologically."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "ब्राह्मणेतर चळवळीविषयी खालीलपैकी कोणती विधाने बरोबर आहेत ? a. अण्णासाहेब लठ्ठे, मुकुंदराव पाटील आणि नारायण टिळक यांनी 'डेक्कन रयत समाज' ही संघटना स्थापन केली. b. दिनकरराव जवळकर हे ब्राह्मणेतर चळवळीतील जहाल नेते होते. c. 'देशाचे दुश्मन' या पुस्तकाच्या खटल्याचे वकीलपत्र डॉ. आंबेडकर यांनी घेतले. d. केशवराव जेधे यांनी सन 1922 मध्ये 'छत्रपती मेळा' सुरु केला.",
    "question_english": "Which of the following statements are true regarding Non-Brahmin Movement? a. Annasaheb Latthe, Mukundrao Patil and Narayan Tilak founded the organisation of 'Deccan Rayat Samaj'. b. Dinkarrao Javalkar was an extremist leader of the Non-Brahmin Movement. c. Dr. Ambedkar accepted the 'Vakalat Nama' in the case of the book 'Deshache Dushman'. d. Keshavrao Jedhe started 'Chhatrapati Mela' in 1922.",
    "options_marathi": [
      "a, b, c आणि d विधाने बरोबर आहेत",
      "a, b आणि d विधाने बरोबर आहेत",
      "b, c आणि d विधाने बरोबर आहेत",
      "फक्त d विधान बरोबर आहे"
    ],
    "options_english": [
      "a, b, c and d statements are correct",
      "a, b and d statements are correct",
      "b, c and d statements are correct",
      "only d statement is correct"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Non-Brahmin Movement in Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap/Incorrect Association",
    "explanation_english": "The Non-Brahmin Movement in Maharashtra was a significant socio-political movement aimed at challenging Brahminical dominance and promoting the rights of non-Brahmin communities. Statement 'a' is incorrect because while Annasaheb Latthe and Mukundrao Patil were key figures in the Deccan Rayat Samaj, Narayan Tilak (the poet) was not associated with its founding. Statement 'b' is correct; Dinkarrao Javalkar was indeed a radical leader of the movement, known for his strong anti-Brahmin stance. Statement 'c' is also correct; Dr. B.R. Ambedkar famously defended Javalkar in the 'Deshache Dushman' defamation case, highlighting the solidarity among anti-caste movements. Statement 'd' is correct; Keshavrao Jedhe, another prominent leader, initiated the 'Chhatrapati Mela' in 1922 to foster non-Brahmin identity and cultural assertion.",
    "explanation_marathi": "महाराष्ट्रातील ब्राह्मणेतर चळवळ ही ब्राह्मण वर्चस्वाला आव्हान देण्यासाठी आणि ब्राह्मणेतर समाजाच्या हक्कांना प्रोत्साहन देण्यासाठी एक महत्त्वपूर्ण सामाजिक-राजकीय चळवळ होती. विधान 'अ' चुकीचे आहे कारण अण्णासाहेब लठ्ठे आणि मुकुंदराव पाटील हे डेक्कन रयत समाजाचे प्रमुख व्यक्ती असले तरी, नारायण टिळक (कवी) त्याच्या स्थापनेशी संबंधित नव्हते. विधान 'ब' बरोबर आहे; दिनकरराव जवळकर हे खरोखरच चळवळीचे एक जहाल नेते होते, जे त्यांच्या तीव्र ब्राह्मणविरोधी भूमिकेसाठी ओळखले जात होते. विधान 'क' देखील बरोबर आहे; डॉ. बी.आर. आंबेडकरांनी 'देशाचे दुश्मन' या मानहानीच्या खटल्यात जवळकरांचा बचाव केला, ज्यामुळे जातीयविरोधी चळवळींमधील एकजूट अधोरेखित झाली. विधान 'ड' बरोबर आहे; केशवराव जेधे, आणखी एक प्रमुख नेते, यांनी ब्राह्मणेतर ओळख आणि सांस्कृतिक आत्मविश्वासाला चालना देण्यासाठी १९२२ मध्ये 'छत्रपती मेळा' सुरू केला.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "a, b, c and d statements are correct",
        "is_correct": false,
        "reason": "Statement 'a' is incorrect as Narayan Tilak was not involved in founding 'Deccan Rayat Samaj'."
      },
      {
        "option_number": 2,
        "option_english": "a, b and d statements are correct",
        "is_correct": false,
        "reason": "Statement 'a' is incorrect."
      },
      {
        "option_number": 3,
        "option_english": "b, c and d statements are correct",
        "is_correct": true,
        "reason": "Dinkarrao Javalkar was an extremist leader (b), Dr. Ambedkar defended him in the 'Deshache Dushman' case (c), and Keshavrao Jedhe started 'Chhatrapati Mela' in 1922 (d). All these statements are correct."
      },
      {
        "option_number": 4,
        "option_english": "only d statement is correct",
        "is_correct": false,
        "reason": "Statements 'b' and 'c' are also correct, in addition to 'd'."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "जोड्या लावा. संपादक वृत्तपत्रे अ. भाऊ महाजन I. ज्ञानसिंधू ब. वीरेश्वर छत्रे II. नेटिव्ह ओपिनियन क. नारायण गणेश चंदावरकर III. प्रभाकर ड. रावसाहेब विश्वनाथ मंडलीक IV. इंदुप्रकाश",
    "question_english": "Match the Pairs. Editors Newspapers a. Bhau Mahajan I. Dnyansindhu b. Vireshwar Chhatre II. Native Opinion c. Narayan Ganesh Chandavarkar III. Prabhakar d. Raosaheb Vishwanath Mandalika IV. Induprakash",
    "options_marathi": [
      "अ-IV, ब-III, क-I, ड-II",
      "अ-III, ब-I, क-IV, ड-II",
      "अ-II, ब-IV, क-III, ड-I",
      "अ-I, ब-III, क-II, ड-IV"
    ],
    "options_english": [
      "a-IV, b-III, c-I, d-II",
      "a-III, b-I, c-IV, d-II",
      "a-II, b-IV, c-III, d-I",
      "a-I, b-III, c-II, d-IV"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Press and Journalism in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question tests knowledge of prominent editors and the newspapers they were associated with during the 19th and early 20th centuries in Maharashtra. Bhau Mahajan was the editor of 'Prabhakar', a significant Marathi weekly known for publishing Lokahitwadi's 'Shatapatre'. Vireshwar Chhatre was associated with 'Dnyansindhu'. Narayan Ganesh Chandavarkar, a social reformer and judge, was associated with 'Induprakash', a bilingual Anglo-Marathi weekly. Raosaheb Vishwanath Mandalika was the editor of 'Native Opinion', another important newspaper of the time.",
    "explanation_marathi": "हा प्रश्न १९ व्या आणि २० व्या शतकाच्या सुरुवातीच्या काळात महाराष्ट्रातील प्रमुख संपादक आणि त्यांच्याशी संबंधित वृत्तपत्रांच्या माहितीची चाचणी करतो. भाऊ महाजन हे 'प्रभाकर' या महत्त्वाच्या मराठी साप्ताहिकाचे संपादक होते, जे लोकहितवादींच्या 'शतापत्रे' प्रकाशित करण्यासाठी ओळखले जाते. वीरेश्वर छत्रे 'ज्ञानसिंधू'शी संबंधित होते. नारायण गणेश चंदावरकर, एक समाजसुधारक आणि न्यायाधीश, 'इंदुप्रकाश' या द्विभाषिक अँग्लो-मराठी साप्ताहिकाशी संबंधित होते. रावसाहेब विश्वनाथ मंडलिक हे 'नेटिव्ह ओपिनियन' या तत्कालीन आणखी एका महत्त्वाच्या वृत्तपत्राचे संपादक होते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "a-IV, b-III, c-I, d-II",
        "is_correct": false,
        "reason": "This combination is incorrect."
      },
      {
        "option_number": 2,
        "option_english": "a-III, b-I, c-IV, d-II",
        "is_correct": true,
        "reason": "Bhau Mahajan - Prabhakar (III), Vireshwar Chhatre - Dnyansindhu (I), Narayan Ganesh Chandavarkar - Induprakash (IV), Raosaheb Vishwanath Mandalika - Native Opinion (II). This is the correct matching."
      },
      {
        "option_number": 3,
        "option_english": "a-II, b-IV, c-III, d-I",
        "is_correct": false,
        "reason": "This combination is incorrect."
      },
      {
        "option_number": 4,
        "option_english": "a-I, b-III, c-II, d-IV",
        "is_correct": false,
        "reason": "This combination is incorrect."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "स्वातंत्र्यवीर वि.दा. सावरकरांनी कोणत्या वृत्तपत्रात क्रांतीकारी कार्याविषयी लेखन केले होते ?",
    "question_english": "In which of the newspaper did Swatantraveer V.D. Savarkar wrote about the revolutionary work ?",
    "options_marathi": [
      "केसरी",
      "संध्या",
      "विहारी",
      "समाज"
    ],
    "options_english": [
      "Kesari",
      "Sandhya",
      "Vihari",
      "Samaj"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Revolutionary Movements (Maharashtra), V.D. Savarkar",
    "difficulty": "Medium",
    "trap_detected": "Distractor",
    "explanation_english": "Swatantraveer V.D. Savarkar, a prominent revolutionary and nationalist, used various platforms to propagate his ideas. While he was associated with many nationalist movements, 'Vihari' was a Marathi weekly where he actively contributed articles related to revolutionary work and nationalist thought, especially during his early period. This newspaper served as an important medium for disseminating his radical views and inspiring young revolutionaries.",
    "explanation_marathi": "स्वातंत्र्यवीर वि.दा. सावरकर, एक प्रमुख क्रांतिकारक आणि राष्ट्रवादी, यांनी आपले विचार प्रसारित करण्यासाठी विविध माध्यमांचा वापर केला. ते अनेक राष्ट्रवादी चळवळींशी संबंधित असले तरी, 'विहारी' हे एक मराठी साप्ताहिक होते जिथे त्यांनी विशेषतः त्यांच्या सुरुवातीच्या काळात क्रांतिकारी कार्य आणि राष्ट्रवादी विचारांशी संबंधित लेख सक्रियपणे लिहिले. हे वृत्तपत्र त्यांचे जहाल विचार प्रसारित करण्यासाठी आणि तरुण क्रांतिकारकांना प्रेरणा देण्यासाठी एक महत्त्वाचे माध्यम ठरले.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Kesari",
        "is_correct": false,
        "reason": "'Kesari' was primarily associated with Bal Gangadhar Tilak, though it was a prominent nationalist newspaper. It was not Savarkar's primary platform for revolutionary writings."
      },
      {
        "option_number": 2,
        "option_english": "Sandhya",
        "is_correct": false,
        "reason": "'Sandhya' was a Bengali nationalist newspaper, not directly associated with Savarkar's Marathi writings or his primary platform."
      },
      {
        "option_number": 3,
        "option_english": "Vihari",
        "is_correct": true,
        "reason": "V.D. Savarkar actively contributed to the Marathi weekly 'Vihari', using it as a platform to publish articles on revolutionary activities and nationalist ideas."
      },
      {
        "option_number": 4,
        "option_english": "Samaj",
        "is_correct": false,
        "reason": "'Samaj' was not a prominent newspaper associated with V.D. Savarkar's revolutionary writings."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "कोणत्या वर्षी सहा ते चौदा वयोगटातील बालकांना प्राथमिक शिक्षण (इयत्ता पहिली ते आठवी) सक्तीचे व मोफत मिळविण्या संबंधीचा कायदा करण्यात आला आहे ?",
    "question_english": "In which year age group six to fourteen years Primary Education (First to Eighth) Free and compulsory law was implemented?",
    "options_marathi": [
      "वर्ष – 1992",
      "वर्ष – 1952",
      "वर्ष – 2000",
      "वर्ष – 2002"
    ],
    "options_english": [
      "Year – 1992",
      "Year – 1952",
      "Year – 2000",
      "Year – 2002"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Fundamental Rights, Education Policy",
    "difficulty": "Easy to Medium",
    "trap_detected": "Confusion between Constitutional Amendment and subsequent Act",
    "explanation_english": "The provision for free and compulsory education for children aged six to fourteen years was made a Fundamental Right in India through the 86th Constitutional Amendment Act of 2002. This amendment inserted Article 21A into the Constitution, stating that 'The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.' This laid the constitutional foundation for the Right to Education (RTE) Act, which was subsequently enacted in 2009.",
    "explanation_marathi": "सहा ते चौदा वयोगटातील मुलांना मोफत आणि सक्तीचे शिक्षण देण्याची तरतूद २००२ च्या ८६ व्या घटनादुरुस्ती कायद्याद्वारे भारतात मूलभूत हक्क बनवण्यात आली. या दुरुस्तीने संविधानात कलम २१अ समाविष्ट केले, ज्यात असे म्हटले आहे की 'राज्य सहा ते चौदा वयोगटातील सर्व मुलांना कायद्याद्वारे निश्चित केलेल्या पद्धतीने मोफत आणि सक्तीचे शिक्षण देईल.' यामुळे शिक्षण हक्क (RTE) कायद्याचा संवैधानिक पाया रचला गेला, जो नंतर २००९ मध्ये लागू करण्यात आला.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Year – 1992",
        "is_correct": false,
        "reason": "No major law for free and compulsory education for this age group was implemented in 1992."
      },
      {
        "option_number": 2,
        "option_english": "Year – 1952",
        "is_correct": false,
        "reason": "This year is too early; the constitutional amendment for making education a fundamental right came much later."
      },
      {
        "option_number": 3,
        "option_english": "Year – 2000",
        "is_correct": false,
        "reason": "The 86th Constitutional Amendment Act was not passed in 2000."
      },
      {
        "option_number": 4,
        "option_english": "Year – 2002",
        "is_correct": true,
        "reason": "The 86th Constitutional Amendment Act of 2002 inserted Article 21A, making elementary education a fundamental right for children aged 6-14 years, thus implementing the 'law' for free and compulsory education."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "संविधान सभेत खालील मान्यवर सदस्य सहभागी झाले होते अ. डॉ. राजेन्द्र प्रसाद, डॉ. बाबासाहेब आंबेडकर, दुर्गाबाई देशमुख ब. डॉ. राजेन्द्र प्रसाद, मौलाना अबुल कलाम आझाद, हंसाबेन मेहता क. डॉ. बाबासाहेब आंबेडकर, डॉ. राजेन्द्र प्रसाद, सरोजिनी नायडू ड. डॉ. राजेन्द्र प्रसाद, जे. बी. कृपलानी, डॉ. बाबासाहेब आंबेडकर",
    "question_english": "Which among the following dignitaries members participated in Constituent Assembly? A. Dr. Rajendra Prasad, Dr. Babasaheb Ambedkar, Durgabai Deshmukh B. Dr. Rajendra Prasad, Moulana Abul Kalam Azad, Hansaben Mehta C. Dr. Babasaheb Ambedkar, Dr. Rajendra Prasad, Sarojini Naidu D. Dr. Rajendra Prasad, J. B. Kruplani, Dr. Babasaheb Ambedkar",
    "options_marathi": [
      "केवळ अ आणि ब",
      "केवळ क आणि ड",
      "केवळ अ आणि ड",
      "वरील सर्व"
    ],
    "options_english": [
      "Only A and B",
      "Only C and D",
      "Only A and D",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Constituent Assembly of India",
    "difficulty": "Easy to Medium",
    "trap_detected": "None",
    "explanation_english": "The Constituent Assembly of India, which drafted the Indian Constitution, comprised a diverse group of eminent personalities from various backgrounds. All the individuals mentioned in options A, B, C, and D were indeed members of this historic body. Dr. Rajendra Prasad served as its President, Dr. B.R. Ambedkar chaired the Drafting Committee, and figures like Durgabai Deshmukh, Maulana Abul Kalam Azad, Hansaben Mehta, Sarojini Naidu, and J.B. Kripalani played crucial roles in its deliberations and decision-making processes. Their collective efforts shaped the foundational document of independent India.",
    "explanation_marathi": "भारताची संविधान सभा, ज्याने भारतीय संविधानाचा मसुदा तयार केला, त्यात विविध पार्श्वभूमीतील प्रतिष्ठित व्यक्तींचा समावेश होता. पर्याय A, B, C आणि D मध्ये नमूद केलेले सर्व व्यक्ती या ऐतिहासिक संस्थेचे सदस्य होते. डॉ. राजेंद्र प्रसाद यांनी अध्यक्ष म्हणून काम केले, डॉ. बी.आर. आंबेडकरांनी मसुदा समितीचे अध्यक्षपद भूषवले आणि दुर्गाबाई देशमुख, मौलाना अबुल कलाम आझाद, हंसाबेन मेहता, सरोजिनी नायडू आणि जे.बी. कृपलानी यांसारख्या व्यक्तींनी त्यांच्या विचारमंथन आणि निर्णय प्रक्रियेत महत्त्वपूर्ण भूमिका बजावली. त्यांच्या सामूहिक प्रयत्नांनी स्वतंत्र भारताच्या मूलभूत दस्तऐवजाला आकार दिला.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Only A and B",
        "is_correct": false,
        "reason": "This option is incomplete as C and D also contain correct sets of members."
      },
      {
        "option_number": 2,
        "option_english": "Only C and D",
        "is_correct": false,
        "reason": "This option is incomplete as A and B also contain correct sets of members."
      },
      {
        "option_number": 3,
        "option_english": "Only A and D",
        "is_correct": false,
        "reason": "This option is incomplete as B and C also contain correct sets of members."
      },
      {
        "option_number": 4,
        "option_english": "All of the above",
        "is_correct": true,
        "reason": "All the individuals listed in statements A, B, C, and D (Dr. Rajendra Prasad, Dr. Babasaheb Ambedkar, Durgabai Deshmukh, Moulana Abul Kalam Azad, Hansaben Mehta, Sarojini Naidu, J. B. Kripalani) were indeed members of the Constituent Assembly."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "खालीलपैकी कोणत्या प्रकरणात सर्वोच्च न्यायालयाने प्रस्तावना हा संविधानाचा अविभाज्य भाग आहे असा निर्णय दिला ?",
    "question_english": "In which case did the Supreme Court give the decision that preamble is the integral part of Constitution? a. I.R. Koyalo case b. S.R. Bommai versus Union of India c. Golaknath case d. Indira Gandhi versus Rajnarayan case Which of the statement given above is/are correct?",
    "options_marathi": [
      "अ आणि क फक्त",
      "ब फक्त",
      "ड आणि ब फक्त",
      "अ फक्त"
    ],
    "options_english": [
      "a and c only",
      "b only",
      "d and b only",
      "a only"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Preamble, Landmark Supreme Court Cases",
    "difficulty": "Medium to Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "The legal status of the Preamble to the Indian Constitution has been a subject of judicial interpretation. Initially, in the Berubari Union case (1960), the Supreme Court held that the Preamble is not a part of the Constitution. However, this view was overturned in the landmark Kesavananda Bharati v. State of Kerala case (1973), where the Court declared the Preamble to be a part of the Constitution and also introduced the 'Basic Structure Doctrine'. Later, in the S.R. Bommai v. Union of India case (1994), the Supreme Court strongly reiterated that the Preamble is an integral part of the Constitution and that the values enshrined in it form part of the basic structure, which cannot be altered.",
    "explanation_marathi": "भारतीय संविधानाच्या प्रस्तावनेच्या कायदेशीर स्थितीवर न्यायालयीन अर्थ लावण्यात आले आहे. सुरुवातीला, बेरूबारी युनियन प्रकरणात (१९६०), सर्वोच्च न्यायालयाने प्रस्तावना संविधानाचा भाग नाही असे म्हटले होते. तथापि, केशवानंद भारती विरुद्ध केरळ राज्य या ऐतिहासिक प्रकरणात (१९७३) हे मत रद्द करण्यात आले, जिथे न्यायालयाने प्रस्तावना संविधानाचा भाग असल्याचे घोषित केले आणि 'मूलभूत संरचना सिद्धांत' देखील मांडला. नंतर, एस.आर. बोम्मई विरुद्ध भारत संघ प्रकरणात (१९९४), सर्वोच्च न्यायालयाने जोरदारपणे पुनरुच्चार केला की प्रस्तावना संविधानाचा अविभाज्य भाग आहे आणि त्यात समाविष्ट असलेली मूल्ये मूलभूत संरचनेचा भाग आहेत, ज्यात बदल करता येत नाही.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "a and c only",
        "is_correct": false,
        "reason": "I.R. Koyalo case is related to the Ninth Schedule, and Golaknath case is about Fundamental Rights, not primarily the Preamble's integral status."
      },
      {
        "option_number": 2,
        "option_english": "b only",
        "is_correct": true,
        "reason": "In S.R. Bommai v. Union of India (1994), the Supreme Court reiterated and emphasized that the Preamble is an integral part of the Constitution and forms part of its basic structure. While Kesavananda Bharati (1973) first declared it a 'part', Bommai case further strengthened this position."
      },
      {
        "option_number": 3,
        "option_english": "d and b only",
        "is_correct": false,
        "reason": "Indira Gandhi v. Rajnarayan case is related to election disputes and basic structure, not the Preamble's integral status."
      },
      {
        "option_number": 4,
        "option_english": "a only",
        "is_correct": false,
        "reason": "I.R. Koyalo case is not about the Preamble's integral status."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "खालील विधाने विचारात घ्या विधान I : राष्ट्रीय मानवाधिकार आयोगाची स्थापना करण्यात आली आणि 14 ऑक्टोबर 1994 रोजी ती अस्तित्वात आली. विधान II : राष्ट्रीय मानवाधिकार आयोगाच्या अध्यक्षांचा कार्यकाळ कार्यालयात रुजू झाल्याच्या तारखेपासून 6 वर्षे किंवा ते 70 वर्षाचे होईपर्यंत आहे.",
    "question_english": "Consider the following statements Statement I: National Human Rights Commission was set up and came into existence on 14 Oct. 1994. Statement II: The term of the office of the Chairman of NHRC is six years from the date they enter upon the office or until they attain the age of seventy years.",
    "options_marathi": [
      "विधान I बरोबर आहे, II चूक",
      "विधान II बरोबर आहे, I चूक",
      "दोन्ही विधाने बरोबर आहेत",
      "दोन्ही विधाने चूक आहेत"
    ],
    "options_english": [
      "Statement I is correct, II incorrect",
      "Statement II is correct, I incorrect",
      "Both the statement are correct",
      "Both the statements are incorrect"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Statutory Bodies (NHRC)",
    "difficulty": "Medium to Hard",
    "trap_detected": "Factual Error",
    "explanation_english": "The National Human Rights Commission (NHRC) is a statutory body established in India to protect and promote human rights. Statement I is incorrect because the NHRC was constituted on 12 October 1993, not 14 October 1994. Statement II is also incorrect. As per the Protection of Human Rights (Amendment) Act, 2019, the Chairman and members of the NHRC hold office for a term of three years or until they attain the age of seventy years, whichever is earlier. The previous tenure was five years.",
    "explanation_marathi": "राष्ट्रीय मानवाधिकार आयोग (NHRC) ही मानवी हक्कांचे संरक्षण आणि प्रोत्साहन देण्यासाठी भारतात स्थापन केलेली एक वैधानिक संस्था आहे. विधान I चुकीचे आहे कारण NHRC ची स्थापना १२ ऑक्टोबर १९९३ रोजी झाली होती, १४ ऑक्टोबर १९९४ रोजी नाही. विधान II देखील चुकीचे आहे. मानवाधिकार संरक्षण (सुधारणा) अधिनियम, २०१९ नुसार, NHRC चे अध्यक्ष आणि सदस्य तीन वर्षांच्या कालावधीसाठी किंवा सत्तर वर्षांचे होईपर्यंत, यापैकी जे आधी असेल तोपर्यंत पद धारण करतात. यापूर्वीचा कार्यकाळ पाच वर्षांचा होता.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Statement I is correct, II incorrect",
        "is_correct": false,
        "reason": "Statement I is incorrect as NHRC was established on 12 October 1993."
      },
      {
        "option_number": 2,
        "option_english": "Statement II is correct, I incorrect",
        "is_correct": false,
        "reason": "Statement II is incorrect as the Chairman's tenure is 3 years or 70 years (as per 2019 amendment), not 6 years."
      },
      {
        "option_number": 3,
        "option_english": "Both the statement are correct",
        "is_correct": false,
        "reason": "Both statements I and II are incorrect."
      },
      {
        "option_number": 4,
        "option_english": "Both the statements are incorrect",
        "is_correct": true,
        "reason": "Statement I is incorrect (NHRC established 12 Oct 1993). Statement II is incorrect (Chairman's tenure is 3 years or 70 years, not 6 years)."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "खालील विधाने लक्षात घ्या : i. कलम 301 हे मालमत्तेच्या हक्काशी संबंधित आहे. ii. मालमत्तेचा हक्क हा कायदेशीर हक्क आहे परंतू तो मूलभूत हक्क नाही. iii. केंद्रामध्ये काँग्रेसपक्षाचे सरकार असतांना 44 व्या घटनादुरुस्ती द्वारे कलम 300 (A) हे राज्यघटनेमध्ये समाविष्ट करण्यात आले. वरीलपैकी कोणते विधान / विधाने अयोग्य आहेत ?",
    "question_english": "Consider the following statements : i. Article 301 pertains to the right to property. ii. Right to property is a legal right but not a Fundamental Right. iii. Article 300 (A) was inserted in the Constitution by the Congress Government at the center by 44th Amendment Act. Which of the above statements given is/are incorrect?",
    "options_marathi": [
      "ii फक्त",
      "ii आणि iii",
      "i आणि iii",
      "सर्व"
    ],
    "options_english": [
      "ii only",
      "ii and iii",
      "i and iii",
      "all"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Fundamental Rights, Constitutional Amendments, Right to Property",
    "difficulty": "Medium to Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question examines the constitutional provisions related to the Right to Property and significant amendments. Statement 'i' is incorrect because Article 301 deals with the freedom of trade, commerce, and intercourse, not the right to property. The right to property is now enshrined in Article 300A. Statement 'ii' is correct; the 44th Constitutional Amendment Act of 1978 removed the Right to Property from the list of Fundamental Rights (Article 31 and 19(1)(f)) and made it a legal right under Article 300A. Statement 'iii' is incorrect because while Article 300A was inserted by the 44th Amendment Act, this amendment was enacted during the tenure of the Janata Party government, not the Congress government, which was in power during the 42nd Amendment.",
    "explanation_marathi": "हा प्रश्न मालमत्तेच्या हक्काशी संबंधित घटनात्मक तरतुदी आणि महत्त्वपूर्ण दुरुस्त्या तपासतो. विधान 'i' चुकीचे आहे कारण कलम ३०१ व्यापार, वाणिज्य आणि आंतरराज्यीय व्यवहाराच्या स्वातंत्र्याशी संबंधित आहे, मालमत्तेच्या हक्काशी नाही. मालमत्तेचा हक्क आता कलम ३००अ मध्ये समाविष्ट आहे. विधान 'ii' बरोबर आहे; १९७८ च्या ४४ व्या घटनादुरुस्ती कायद्याने मालमत्तेचा हक्क मूलभूत हक्कांच्या यादीतून (कलम ३१ आणि १९(१)(फ)) काढून टाकला आणि तो कलम ३००अ अंतर्गत कायदेशीर हक्क बनवला. विधान 'iii' चुकीचे आहे कारण कलम ३००अ हे ४४ व्या घटनादुरुस्ती कायद्याने समाविष्ट केले असले तरी, ही दुरुस्ती जनता पक्षाच्या सरकारच्या कार्यकाळात (मोरारजी देसाई यांच्या नेतृत्वाखाली) लागू करण्यात आली होती, काँग्रेस सरकारच्या काळात नाही, जे ४२ व्या दुरुस्तीच्या वेळी सत्तेत होते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "ii only",
        "is_correct": false,
        "reason": "Statement 'ii' is correct, but the question asks for incorrect statements. Also, 'i' and 'iii' are incorrect."
      },
      {
        "option_number": 2,
        "option_english": "ii and iii",
        "is_correct": false,
        "reason": "Statement 'ii' is correct, so it should not be included in the list of incorrect statements. Statement 'i' is also incorrect."
      },
      {
        "option_number": 3,
        "option_english": "i and iii",
        "is_correct": true,
        "reason": "Statement 'i' is incorrect (Article 301 is for trade, not property). Statement 'iii' is incorrect (44th Amendment was by Janata Party, not Congress). Both are incorrect."
      },
      {
        "option_number": 4,
        "option_english": "all",
        "is_correct": false,
        "reason": "Statement 'ii' is correct, so not all statements are incorrect."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "\"धर्मनिरपेक्षता याचा अर्थ राज्याची ओळख धर्माच्या आधारावर असणार नाही व राज्य कोणत्याही धर्माच्या विरोधी राहणार नाही आणि राज्य सर्व धर्मांप्रती सारखीच श्रद्धा, विश्वास व निष्ठा बाळगेल\" असे मत कोणी व्यक्त केले होते ?",
    "question_english": "\"I Want to state Authoritatively that secularism does not mean irreligion. It means we respect all faith and religions or State does not identify itself with any particular religion\". Who had expressed this opinion?",
    "options_marathi": [
      "डॉ. राजेंद्र प्रसाद",
      "पंडित जवाहरलाल नेहरू",
      "डॉ. बी. आर. आंबेडकर",
      "डॉ. सर्वपल्ली राधाकृष्णन"
    ],
    "options_english": [
      "Dr. Rajendra Prasad",
      "Pandit Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Dr. Servepalli Radhakrishnan"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Preamble, Secularism, Constitutional Philosophy",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Dr. Sarvepalli Radhakrishnan, India's second President and a renowned philosopher, articulated the Indian understanding of secularism. He emphasized that Indian secularism does not imply irreligion or hostility towards religion, but rather an attitude of equal respect for all faiths and non-discrimination by the state on religious grounds. This concept is distinct from the Western notion of strict separation of church and state, highlighting India's unique approach to religious diversity.",
    "explanation_marathi": "डॉ. सर्वपल्ली राधाकृष्णन, भारताचे दुसरे राष्ट्रपती आणि एक प्रख्यात तत्त्वज्ञ, यांनी धर्मनिरपेक्षतेची भारतीय संकल्पना स्पष्ट केली. त्यांनी यावर जोर दिला की भारतीय धर्मनिरपेक्षता म्हणजे धर्महीनता किंवा धर्माप्रती शत्रुत्व नाही, तर सर्व धर्मांप्रती समान आदर आणि राज्याद्वारे धार्मिक आधारावर कोणताही भेदभाव न करणे होय. ही संकल्पना पाश्चात्त्य चर्च आणि राज्याच्या कठोर विभक्तीकरणाच्या कल्पनेपेक्षा वेगळी आहे, जी धार्मिक विविधतेसाठी भारताचा अनोखा दृष्टिकोन दर्शवते.",
    "options_breakdown": [
      {
        "option_english": "Dr. Rajendra Prasad",
        "option_marathi": "डॉ. राजेंद्र प्रसाद",
        "is_correct": false,
        "reason": "Dr. Rajendra Prasad was the first President of India, but this specific quote clarifying Indian secularism is not attributed to him."
      },
      {
        "option_english": "Pandit Jawaharlal Nehru",
        "option_marathi": "पंडित जवाहरलाल नेहरू",
        "is_correct": false,
        "reason": "Pandit Jawaharlal Nehru was India's first Prime Minister and a strong proponent of secularism, but this particular phrasing of the concept is not his."
      },
      {
        "option_english": "Dr. B. R. Ambedkar",
        "option_marathi": "डॉ. बी. आर. आंबेडकर",
        "is_correct": false,
        "reason": "Dr. B. R. Ambedkar was the chief architect of the Indian Constitution and a staunch advocate for secularism, but this specific quote is not attributed to him."
      },
      {
        "option_english": "Dr. Servepalli Radhakrishnan",
        "option_marathi": "डॉ. सर्वपल्ली राधाकृष्णन",
        "is_correct": true,
        "reason": "Dr. Sarvepalli Radhakrishnan famously articulated this nuanced view of Indian secularism, emphasizing respect for all religions rather than irreligion."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "खालीलपैकी कोणाला कारणामुळे भारतातील एखाद्या राज्याचा मुख्यमंत्री हा राष्ट्रपतीच्या निवडणुकीमध्ये मतदान करण्यास पात्र ठरत नाही ?",
    "question_english": "Chief Minister of a State in India is not eligible to vote in the Presidential election, if",
    "options_marathi": [
      "तो स्वतः निवडणूकीचा उमेदवार असेल",
      "तो त्याचे बहुमत सिद्ध व्हायवे असेल",
      "तो राज्यविधिमंडळाच्या वरील सभागृहाचा सदस्य असेल",
      "तो काळजीवाहू मुख्यमंत्री असेल"
    ],
    "options_english": [
      "He himself is candidate in election",
      "He is yet to prove his majority",
      "He is member of the upper house of the State Legislature",
      "He is a caretaker Chief Minister"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "President's Election, Chief Minister's Powers, Electoral College",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Misunderstanding",
    "explanation_english": "The electoral college for the President's election consists of elected members of both Houses of Parliament (Lok Sabha and Rajya Sabha) and the elected members of the Legislative Assemblies (Vidhan Sabha) of the states and Union Territories of Delhi and Puducherry. Members of the State Legislative Councils (Vidhan Parishad), which are the upper houses in some states, are not part of this electoral college. Therefore, if a Chief Minister is a member of the State Legislative Council, they are not eligible to vote in the Presidential election.",
    "explanation_marathi": "राष्ट्रपतींच्या निवडणुकीसाठीचे निवडणूक मंडळ संसदच्या दोन्ही सभागृहांचे (लोकसभा आणि राज्यसभा) निवडून आलेले सदस्य आणि राज्यांच्या तसेच दिल्ली व पुद्दुचेरी या केंद्रशासित प्रदेशांच्या विधानसभेचे (विधानसभा) निवडून आलेले सदस्य यांचा समावेश असतो. राज्य विधान परिषदेचे (विधान परिषद), जे काही राज्यांमध्ये वरिष्ठ सभागृह आहेत, सदस्य या निवडणूक मंडळाचा भाग नसतात. त्यामुळे, जर मुख्यमंत्री राज्य विधान परिषदेचे सदस्य असतील, तर ते राष्ट्रपतींच्या निवडणुकीत मतदान करण्यास पात्र नसतात.",
    "options_breakdown": [
      {
        "option_english": "He himself is candidate in election",
        "option_marathi": "तो स्वतः निवडणूकीचा उमेदवार असेल",
        "is_correct": false,
        "reason": "Being a candidate does not disqualify an eligible voter (like an MLA or MP) from casting their vote in the Presidential election."
      },
      {
        "option_english": "He is yet to prove his majority",
        "option_marathi": "तो त्याचे बहुमत सिद्ध व्हायवे असेल",
        "is_correct": false,
        "reason": "The requirement to prove majority is an internal state legislative matter and does not affect a Chief Minister's eligibility to vote in the Presidential election if they are an elected member of the Legislative Assembly."
      },
      {
        "option_english": "He is member of the upper house of the State Legislature",
        "option_marathi": "तो राज्यविधिमंडळाच्या वरील सभागृहाचा सदस्य असेल",
        "is_correct": true,
        "reason": "Members of the State Legislative Council (upper house) are not part of the electoral college for the Presidential election. Only elected members of the State Legislative Assembly (lower house) can vote."
      },
      {
        "option_english": "He is a caretaker Chief Minister",
        "option_marathi": "तो काळजीवाहू मुख्यमंत्री असेल",
        "is_correct": false,
        "reason": "A caretaker Chief Minister still holds their position as an elected member of the Legislative Assembly (or Council), and their 'caretaker' status does not alter their eligibility to vote if they are an MLA."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "आणीबाणीच्या काळात, 42 वी राज्यघटना दुरुस्ती कायदा 1976 नुसार राज्यघटनेच्या प्रस्तावनेमध्ये हे शब्द समाविष्ट करण्यात आले.",
    "question_english": "During the emergency, the 42nd Constitution Amendment Act of 1976 added words to the preamble of Constitution.",
    "options_marathi": [
      "समाजवादी आणि धर्मनिरपेक्ष",
      "न्याय आणि स्वातंत्र्य",
      "समानता आणि बंधुभाव",
      "एकता आणि एकात्मता"
    ],
    "options_english": [
      "Socialist and Secular",
      "Justice and Liberty",
      "Equality and Fraternity",
      "Unity and Integrity"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Preamble, Constitutional Amendments (42nd Amendment)",
    "difficulty": "Easy",
    "trap_detected": "Partial Information",
    "explanation_english": "The 42nd Constitutional Amendment Act, 1976, often referred to as the 'Mini-Constitution', was enacted during the Emergency. It made significant changes to the Constitution, including the addition of three new words to the Preamble: 'Socialist', 'Secular', and 'Integrity'. Among the given options, 'Socialist' and 'Secular' are two distinct new words added by this amendment.",
    "explanation_marathi": "42 वी घटनादुरुस्ती कायदा, 1976, ज्याला अनेकदा 'मिनी-संविधान' असे संबोधले जाते, आणीबाणीच्या काळात लागू करण्यात आला. या कायद्याने संविधानात महत्त्वपूर्ण बदल केले, ज्यात प्रस्तावनेत तीन नवीन शब्द जोडले: 'समाजवादी', 'धर्मनिरपेक्ष' आणि 'एकात्मता'. दिलेल्या पर्यायांमध्ये, 'समाजवादी' व 'धर्मनिरपेक्ष' हे या दुरुस्तीद्वारे जोडलेले दोन नवीन शब्द आहेत.",
    "options_breakdown": [
      {
        "option_english": "Socialist and Secular",
        "option_marathi": "समाजवादी आणि धर्मनिरपेक्ष",
        "is_correct": true,
        "reason": "Both 'Socialist' and 'Secular' were added to the Preamble by the 42nd Amendment Act, 1976."
      },
      {
        "option_english": "Justice and Liberty",
        "option_marathi": "न्याय आणि स्वातंत्र्य",
        "is_correct": false,
        "reason": "These words were already present in the original Preamble of the Constitution."
      },
      {
        "option_english": "Equality and Fraternity",
        "option_marathi": "समानता आणि बंधुभाव",
        "is_correct": false,
        "reason": "These words were already present in the original Preamble of the Constitution."
      },
      {
        "option_english": "Unity and Integrity",
        "option_marathi": "एकता आणि एकात्मता",
        "is_correct": false,
        "reason": "'Unity' was already present in the Preamble. While 'Integrity' was added by the 42nd Amendment, this option includes an existing word, making 'Socialist and Secular' a more accurate pair of *new* words added."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "भारतीय राज्यघटनेतील खालीलपैकी कोणती कलमे राज्यपालाच्या संबंधाशी संबंधीत घटनात्मक तरतुदींचे विश्लेषण करण्यासाठी उपयुक्त आहेत ?",
    "question_english": "Which of the following Articles of the Constitution of India are relevant to analyse the Constitutional Provisions that deal with the relationship of the Governor with the State Council of Ministers ?",
    "options_marathi": [
      "कलम 161, 165 आणि 166",
      "कलम 163, 164 आणि 167",
      "कलम 162, 163 आणि 168",
      "कलम 164, 165 आणि 169"
    ],
    "options_english": [
      "Articles 161, 165 and 166",
      "Articles 163, 164 and 167",
      "Articles 162, 163 and 168",
      "Articles 164, 165 and 169"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Governor, State Executive, Council of Ministers",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall (Specific Article Numbers)",
    "explanation_english": "The relationship between the Governor and the State Council of Ministers is primarily governed by Articles 163, 164, and 167 of the Indian Constitution. Article 163 mandates that there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the Governor. Article 164 deals with the appointment of the Chief Minister and other ministers, their collective responsibility to the legislative assembly, and their term of office. Article 167 outlines the duties of the Chief Minister to furnish information to the Governor regarding the administration of the affairs of the State and proposals for legislation.",
    "explanation_marathi": "राज्यपाल आणि राज्य मंत्रिमंडळ यांच्यातील संबंध भारतीय संविधानाच्या अनुच्छेद 163, 164 आणि 167 द्वारे प्रामुख्याने नियंत्रित केले जातात. अनुच्छेद 163 नुसार, राज्यपालांना मदत व सल्ला देण्यासाठी मुख्यमंत्री यांच्या नेतृत्वाखाली एक मंत्रिमंडळ असेल. अनुच्छेद 164 मध्ये मुख्यमंत्री आणि इतर मंत्र्यांची नियुक्ती, त्यांची विधानसभेला सामूहिक जबाबदारी आणि त्यांचा कार्यकाळ यासंबंधी तरतुदी आहेत. अनुच्छेद 167 मध्ये मुख्यमंत्र्यांची राज्याच्या प्रशासकीय कामकाजाची आणि कायद्याच्या प्रस्तावांची माहिती राज्यपालांना देण्याची कर्तव्ये नमूद केली आहेत.",
    "options_breakdown": [
      {
        "option_english": "Articles 161, 165 and 166",
        "option_marathi": "कलम 161, 165 आणि 166",
        "is_correct": false,
        "reason": "Article 161 (Pardoning power of Governor) and Article 165 (Advocate General) are not directly about the Governor-Council of Ministers relationship, though Article 166 (Conduct of business) is related."
      },
      {
        "option_english": "Articles 163, 164 and 167",
        "option_marathi": "कलम 163, 164 आणि 167",
        "is_correct": true,
        "reason": "Article 163 (Council of Ministers to aid and advise Governor), Article 164 (Other provisions as to Ministers), and Article 167 (Duties of Chief Minister as respects furnishing of information to Governor) directly define the relationship between the Governor and the Council of Ministers."
      },
      {
        "option_english": "Articles 162, 163 and 168",
        "option_marathi": "कलम 162, 163 आणि 168",
        "is_correct": false,
        "reason": "Article 162 (Extent of executive power of State) and Article 168 (Constitution of Legislatures in States) are less directly focused on the *relationship* between the Governor and the Council of Ministers compared to the correct set of articles."
      },
      {
        "option_english": "Articles 164, 165 and 169",
        "option_marathi": "कलम 164, 165 आणि 169",
        "is_correct": false,
        "reason": "Article 165 (Advocate General) and Article 169 (Abolition or creation of Legislative Councils) are not directly about the Governor-Council of Ministers relationship."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "जोड्या लावा - (31 डिसेंबर 1947 रोजी प्रांतनिहाय संविधान सभेतील सदस्यत्व संख्या) प्रांत सदस्यत्व संख्या अ. मद्रास i. 17 ब. मुंबई ii. 19 क. पश्चिम बंगाल iii. 21 ड. मध्य प्रांत व वऱ्हाड iv. 49",
    "question_english": "Match the pairs - (Provinces wise Membership of the Constituent Assembly of India as on December 31, 1947) Province Membership A. Madras i. 17 B. Bombay ii. 19 C. West Bengal iii. 21 D. C.P. and Berar iv. 49",
    "options_marathi": [
      "अ - iv ब-ii क-i ड-iii",
      "अ - iv ब-i क-ii ड-iii",
      "अ - iv ब- iii क-ii ड-i",
      "अ - iv ब- iii क-i ड-ii"
    ],
    "options_english": [
      "A-iv B-ii C-i D-iii",
      "A-iv B-i C-ii D-iii",
      "A-iv B-iii C-ii D-i",
      "A-iv B-iii C-i D-ii"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Constituent Assembly, Indian Independence",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Constituent Assembly of India, formed in 1946, was responsible for drafting the Indian Constitution. After the partition of India in August 1947, the membership of the Assembly changed. As of December 31, 1947, the distribution of seats among the major provinces was as follows: Madras had 49 members, Bombay had 21 members, West Bengal had 19 members, and C.P. and Berar (Central Provinces and Berar) had 17 members. This distribution reflected the population and political representation of these regions at that time.",
    "explanation_marathi": "1946 मध्ये स्थापन झालेली भारताची संविधान सभा, भारतीय संविधान तयार करण्यासाठी जबाबदार होती. ऑगस्ट 1947 मध्ये भारताच्या फाळणीनंतर, सभेच्या सदस्यसंख्येत बदल झाला. 31 डिसेंबर 1947 पर्यंत, प्रमुख प्रांतांमधील जागांचे वाटप खालीलप्रमाणे होते: मद्रासमध्ये 49 सदस्य, मुंबईमध्ये 21 सदस्य, पश्चिम बंगालमध्ये 19 सदस्य आणि मध्य प्रांत व वऱ्हाड (C.P. and Berar) मध्ये 17 सदस्य होते. हे वाटप त्यावेळच्या या प्रदेशांच्या लोकसंख्या आणि राजकीय प्रतिनिधित्वाचे प्रतिबिंब होते.",
    "options_breakdown": [
      {
        "option_english": "A-iv B-ii C-i D-iii",
        "option_marathi": "अ - iv ब-ii क-i ड-iii",
        "is_correct": false,
        "reason": "This option incorrectly matches Bombay with 19 members and West Bengal with 17 members."
      },
      {
        "option_english": "A-iv B-i C-ii D-iii",
        "option_marathi": "अ - iv ब-i क-ii ड-iii",
        "is_correct": false,
        "reason": "This option incorrectly matches Bombay with 17 members and C.P. and Berar with 21 members."
      },
      {
        "option_english": "A-iv B-iii C-ii D-i",
        "option_marathi": "अ - iv ब- iii क-ii ड-i",
        "is_correct": true,
        "reason": "This option correctly matches: Madras (A) with 49 (iv), Bombay (B) with 21 (iii), West Bengal (C) with 19 (ii), and C.P. and Berar (D) with 17 (i)."
      },
      {
        "option_english": "A-iv B-iii C-i D-ii",
        "option_marathi": "अ - iv ब- iii क-i ड-ii",
        "is_correct": false,
        "reason": "This option incorrectly matches West Bengal with 17 members and C.P. and Berar with 19 members."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "अनुसूचित जाती व अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 च्या कलम 4 नुसार, जो सरकारी कर्मचारी अनुसूचित जातीच्या किंवा अनुसूचित जमातीचा सदस्य नाही तो स्वतः च्या अधिन असलेल्या कर्तव्याचे जाणिवपूर्वक दुर्लक्ष करतो, त्या व्यक्तीला, ______ अशा मुदतीच्या कारावासाची शिक्षा ठोठावली जाऊ शकते.",
    "question_english": "As per Section 4 of the Scheduled Caste and Scheduled Tribes (Prohibition of Atrocities) Act, 1989, whoever, being a public servant but not a member of a Scheduled Caste or a Scheduled Tribe, wilfully neglects his duties required to be performed by him, shall be punished with imprisonment for a term which shall not be less than ______",
    "options_marathi": [
      "दहा महिने परंतु ते तीन वर्षापर्यंत वाढू शकते",
      "आठ महिने परंतु ते दोन वर्षापर्यंत वाढू शकते",
      "सहा महिने परंतु ते एक वर्षापर्यंत वाढू शकते",
      "तीन महिने परंतु ते एक वर्षापर्यंत वाढू शकते"
    ],
    "options_english": [
      "Ten months but which may extend to three years",
      "Eight months but which may extend to two years",
      "Six months but which may extend to one year",
      "Three months but which may extend to one year"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "SC/ST (Prevention of Atrocities) Act, Social Justice",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall (Specific Legal Provision)",
    "explanation_english": "Section 4 of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989, addresses the neglect of duties by public servants who are not members of SC/ST communities. It stipulates that if such a public servant wilfully neglects duties required under the Act, they shall be punished with imprisonment for a term which shall not be less than six months but which may extend to one year. This provision aims to ensure accountability and diligent performance of duties by public officials in protecting the rights of SC/ST communities.",
    "explanation_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 च्या कलम 4 नुसार, जे सरकारी कर्मचारी अनुसूचित जाती किंवा अनुसूचित जमातीचे सदस्य नाहीत, परंतु या कायद्यांतर्गत त्यांना पार पाडावयाच्या कर्तव्यांकडे जाणूनबुजून दुर्लक्ष करतात, त्यांना किमान सहा महिने कारावास, जो एक वर्षापर्यंत वाढू शकतो, अशी शिक्षा ठोठावली जाईल. या तरतुदीचा उद्देश अनुसूचित जाती आणि जमातींच्या हक्कांचे संरक्षण करण्यासाठी सार्वजनिक अधिकाऱ्यांकडून कर्तव्यदक्षता आणि जबाबदारी सुनिश्चित करणे आहे.",
    "options_breakdown": [
      {
        "option_english": "Ten months but which may extend to three years",
        "option_marathi": "दहा महिने परंतु ते तीन वर्षापर्यंत वाढू शकते",
        "is_correct": false,
        "reason": "This duration is incorrect as per Section 4 of the Act."
      },
      {
        "option_english": "Eight months but which may extend to two years",
        "option_marathi": "आठ महिने परंतु ते दोन वर्षापर्यंत वाढू शकते",
        "is_correct": false,
        "reason": "This duration is incorrect as per Section 4 of the Act."
      },
      {
        "option_english": "Six months but which may extend to one year",
        "option_marathi": "सहा महिने परंतु ते एक वर्षापर्यंत वाढू शकते",
        "is_correct": true,
        "reason": "As per Section 4 of the SC/ST (Prevention of Atrocities) Act, 1989, the punishment for wilful neglect of duties by a public servant (not belonging to SC/ST) is imprisonment for a term not less than six months but which may extend to one year."
      },
      {
        "option_english": "Three months but which may extend to one year",
        "option_marathi": "तीन महिने परंतु ते एक वर्षापर्यंत वाढू शकते",
        "is_correct": false,
        "reason": "The minimum term of imprisonment is six months, not three months."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "भारतीय संविधानातील अनुच्छेद 19 नुसार वेगळेपण ओळखा",
    "question_english": "Find odd man out regarding Article 19 under the Constitution of India.",
    "options_marathi": [
      "भाषण व अभिव्यक्ती स्वातंत्र्य",
      "मालमत्ता धारणेचे स्वातंत्र्य",
      "भारताच्या राज्य क्षेत्रात सर्वत्र मुक्तपणे संचार करण्याचे स्वातंत्र्य",
      "शांततेने व विनाशस्त्र एकत्र जमण्याचा अधिकार"
    ],
    "options_english": [
      "freedom of speech and expression",
      "freedom to hold and acquire property",
      "freedom to move freely throughout the territory of India",
      "freedom to assemble peaceably and without arms"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Fundamental Rights, Article 19, Constitutional Amendments",
    "difficulty": "Easy",
    "trap_detected": "Knowledge of Amendments",
    "explanation_english": "Article 19 of the Indian Constitution guarantees six fundamental freedoms to citizens. Originally, it included seven freedoms, but the 'freedom to acquire, hold and dispose of property' was removed from the list of fundamental rights by the 44th Constitutional Amendment Act of 1978. It was subsequently made a legal right under Article 300A. The other options – freedom of speech and expression, freedom to move freely throughout the territory of India, and freedom to assemble peaceably and without arms – continue to be fundamental rights under Article 19. Therefore, 'freedom to hold and acquire property' is the odd one out.",
    "explanation_marathi": "भारतीय संविधानातील अनुच्छेद 19 नागरिकांना सहा मूलभूत स्वातंत्र्यांची हमी देतो. मूळतः यात सात स्वातंत्र्ये होती, परंतु 'मालमत्ता धारण करण्याचे आणि संपादन करण्याचे स्वातंत्र्य' हे 44 व्या घटनादुरुस्ती कायदा, 1978 द्वारे मूलभूत हक्कांच्या यादीतून काढून टाकण्यात आले. त्यानंतर ते अनुच्छेद 300A अंतर्गत कायदेशीर हक्क बनवण्यात आले. इतर पर्याय – भाषण आणि अभिव्यक्ती स्वातंत्र्य, भारताच्या राज्य क्षेत्रात सर्वत्र मुक्तपणे संचार करण्याचे स्वातंत्र्य, आणि शांततेने व विनाशस्त्र एकत्र जमण्याचा अधिकार – हे अनुच्छेद 19 अंतर्गत मूलभूत हक्क म्हणून कायम आहेत. त्यामुळे, 'मालमत्ता धारण करण्याचे स्वातंत्र्य' हा वेगळा पर्याय आहे.",
    "options_breakdown": [
      {
        "option_english": "freedom of speech and expression",
        "option_marathi": "भाषण व अभिव्यक्ती स्वातंत्र्य",
        "is_correct": false,
        "reason": "This is a fundamental right guaranteed under Article 19(1)(a) of the Constitution."
      },
      {
        "option_english": "freedom to hold and acquire property",
        "option_marathi": "मालमत्ता धारणेचे स्वातंत्र्य",
        "is_correct": true,
        "reason": "This freedom was originally part of Article 19(1)(f) but was removed as a fundamental right by the 44th Constitutional Amendment Act, 1978. It is now a legal right under Article 300A."
      },
      {
        "option_english": "freedom to move freely throughout the territory of India",
        "option_marathi": "भारताच्या राज्य क्षेत्रात सर्वत्र मुक्तपणे संचार करण्याचे स्वातंत्र्य",
        "is_correct": false,
        "reason": "This is a fundamental right guaranteed under Article 19(1)(d) of the Constitution."
      },
      {
        "option_english": "freedom to assemble peaceably and without arms",
        "option_marathi": "शांततेने व विनाशस्त्र एकत्र जमण्याचा अधिकार",
        "is_correct": false,
        "reason": "This is a fundamental right guaranteed under Article 19(1)(b) of the Constitution."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "भारतीय संविधानाच्या ______ मध्ये मूलभूत कर्तव्यांच्या तरतुदी दिलेल्या आहेत.",
    "question_english": "Under ______ of the Constitution of India the provisions of fundamental duties are given.",
    "options_marathi": [
      "भाग – III",
      "भाग - IV",
      "भाग - IV-A",
      "भाग - IV-B"
    ],
    "options_english": [
      "Part – III",
      "Part – IV",
      "Part – IV-A",
      "Part – IV-B"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Fundamental Duties, Constitutional Parts",
    "difficulty": "Easy",
    "trap_detected": "Confusing Constitutional Parts",
    "explanation_english": "The provisions for Fundamental Duties in the Indian Constitution are contained in Part IV-A. These duties were not part of the original Constitution but were added by the 42nd Constitutional Amendment Act of 1976, based on the recommendations of the Swaran Singh Committee. Article 51A, which falls under Part IV-A, enumerates the eleven Fundamental Duties that citizens are expected to uphold.",
    "explanation_marathi": "भारतीय संविधानातील मूलभूत कर्तव्यांच्या तरतुदी भाग IV-A मध्ये समाविष्ट आहेत. ही कर्तव्ये मूळ संविधानाचा भाग नव्हती, परंतु स्वर्णसिंग समितीच्या शिफारशीनुसार 42 व्या घटनादुरुस्ती कायदा, 1976 द्वारे ती जोडण्यात आली. अनुच्छेद 51A, जो भाग IV-A अंतर्गत येतो, नागरिकांनी पाळावयाच्या अकरा मूलभूत कर्तव्यांची यादी देतो.",
    "options_breakdown": [
      {
        "option_english": "Part – III",
        "option_marathi": "भाग – III",
        "is_correct": false,
        "reason": "Part III of the Indian Constitution deals with Fundamental Rights (Articles 12-35)."
      },
      {
        "option_english": "Part – IV",
        "option_marathi": "भाग - IV",
        "is_correct": false,
        "reason": "Part IV of the Indian Constitution deals with Directive Principles of State Policy (Articles 36-51)."
      },
      {
        "option_english": "Part – IV-A",
        "option_marathi": "भाग - IV-A",
        "is_correct": true,
        "reason": "Part IV-A (Article 51A) was added by the 42nd Amendment Act, 1976, and exclusively contains the Fundamental Duties."
      },
      {
        "option_english": "Part – IV-B",
        "option_marathi": "भाग - IV-B",
        "is_correct": false,
        "reason": "There is no Part IV-B in the Indian Constitution."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "जो कोणी अनुसूचित जाती किंवा जमातीच्या महिलेचे अनादर करण्याच्या किंवा विनयभंग करण्याच्या उद्देशाने तिच्यावर हल्ला करेल किंवा शक्तीचा वापर करेल त्यास ______ काळा पेक्षा कमी नसलेली परंतू ______ काळापर्यन्त वाढवण्यात येऊ शकणारी तुरुंगवासाची शिक्षा आणि दंडाची तरतूद अनुसूचित जाती आणि अनुसूचीत जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 मध्ये करण्यात आली आहे.",
    "question_english": "Whoever assaults or uses force against any woman belonging to the Scheduled Caste or a Scheduled Tribe with intent to dishonour or outrage her modesty, shall be punished with imprisonment for a term which shall not be less than ______ but which may extend to ______ and with fine as per the provision of the Scheduled Caste and Scheduled Tribes (Prevention of Atrocities) Act, 1989.",
    "options_marathi": [
      "1 महीना; दोन वर्षे",
      "2 महीने; तीन वर्षे",
      "3 महीने; चार वर्षे",
      "6 महीने; पाच वर्षे"
    ],
    "options_english": [
      "1 month; two years",
      "2 months; three years",
      "3 months; four years",
      "6 months ; five years"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "SC/ST (Prevention of Atrocities) Act, Social Justice",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall (Specific Legal Provision)",
    "explanation_english": "Section 3(1)(w)(i) of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 (as amended), specifically addresses the offense of assaulting or using force against an SC/ST woman with the intent to dishonour or outrage her modesty. The Act prescribes a stringent punishment for such an offense: imprisonment for a term which shall not be less than six months but which may extend to five years, along with a fine. This provision underscores the seriousness with which the law treats crimes against women from these vulnerable communities.",
    "explanation_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 (सुधारित) च्या कलम 3(1)(w)(i) नुसार, अनुसूचित जाती किंवा जमातीच्या महिलेचा अनादर करण्याच्या किंवा विनयभंग करण्याच्या उद्देशाने तिच्यावर हल्ला करणारा किंवा बळाचा वापर करणारा व्यक्तीला किमान सहा महिने कारावास, जो पाच वर्षांपर्यंत वाढू शकतो, आणि दंडाची शिक्षा ठोठावली जाते. ही तरतूद या दुर्बळ समुदायातील महिलांवरील गुन्हे किती गंभीरपणे घेतले जातात हे दर्शवते.",
    "options_breakdown": [
      {
        "option_english": "1 month; two years",
        "option_marathi": "1 महीना; दोन वर्षे",
        "is_correct": false,
        "reason": "This duration is incorrect as per the provisions of the Act."
      },
      {
        "option_english": "2 months; three years",
        "option_marathi": "2 महीने; तीन वर्षे",
        "is_correct": false,
        "reason": "This duration is incorrect as per the provisions of the Act."
      },
      {
        "option_english": "3 months; four years",
        "option_marathi": "3 महीने; चार वर्षे",
        "is_correct": false,
        "reason": "This duration is incorrect as per the provisions of the Act."
      },
      {
        "option_english": "6 months ; five years",
        "option_marathi": "6 महीने; पाच वर्षे",
        "is_correct": true,
        "reason": "As per Section 3(1)(w)(i) of the SC/ST (Prevention of Atrocities) Act, 1989, the punishment for assaulting an SC/ST woman with intent to dishonour or outrage her modesty is imprisonment for a term not less than six months but which may extend to five years, along with a fine."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 मधिल कलम ______ मध्ये पीडित आणि साक्षीदारांच्या हक्का संबंधातील तरतुदीचा सन 2016 मध्ये समावेश करण्यात आला.",
    "question_english": "In the year 2016 the provisions are inserted under Section ______ of the Scheduled Caste and the Scheduled Tribes (Prevention of Atrocities) Act, 1989 regarding rights of victims and witnesses.",
    "options_marathi": [
      "कलम 14",
      "कलम 14 A",
      "कलम 15",
      "कलम 15 A"
    ],
    "options_english": [
      "Section 14",
      "Section 14 A",
      "Section 15",
      "Section 15 A"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "SC/ST (Prevention of Atrocities) Act, Amendments",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall (Specific Amendment Detail)",
    "explanation_english": "The Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Amendment Act, 2015, which came into force in 2016, introduced several significant changes to the principal Act of 1989. Among these, a crucial addition was Section 15A, which specifically outlines the 'Rights of victims and witnesses'. This section ensures that victims and witnesses of atrocities are treated with dignity, provided protection, and have access to legal aid and other support mechanisms during the investigation and trial process.",
    "explanation_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचार प्रतिबंध) सुधारणा अधिनियम, 2015, जो 2016 मध्ये लागू झाला, त्याने 1989 च्या मूळ कायद्यात अनेक महत्त्वपूर्ण बदल केले. यापैकी एक महत्त्वाचा बदल म्हणजे कलम 15A चा समावेश, जे विशेषतः 'पीडित आणि साक्षीदारांचे हक्क' स्पष्ट करते. हे कलम सुनिश्चित करते की अत्याचाराचे बळी आणि साक्षीदार यांना सन्मानाने वागवले जाईल, त्यांना संरक्षण दिले जाईल आणि तपास व खटल्याच्या प्रक्रियेदरम्यान त्यांना कायदेशीर मदत व इतर सहाय्य उपलब्ध होईल.",
    "options_breakdown": [
      {
        "option_english": "Section 14",
        "option_marathi": "कलम 14",
        "is_correct": false,
        "reason": "Section 14 of the Act deals with the establishment of Special Courts for the trial of offenses under the Act."
      },
      {
        "option_english": "Section 14 A",
        "option_marathi": "कलम 14 A",
        "is_correct": false,
        "reason": "Section 14A, inserted by the 2015 Amendment, deals with appeals, not specifically the rights of victims and witnesses."
      },
      {
        "option_english": "Section 15",
        "option_marathi": "कलम 15",
        "is_correct": false,
        "reason": "Section 15 of the Act deals with the appointment of Special Public Prosecutors."
      },
      {
        "option_english": "Section 15 A",
        "option_marathi": "कलम 15 A",
        "is_correct": true,
        "reason": "Section 15A was inserted into the SC/ST (Prevention of Atrocities) Act, 1989, by the 2015 Amendment (effective 2016) to specifically address the 'Rights of victims and witnesses'."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "मानवी हक्क संरक्षण कायदा, 1993 नुसार पुढीलपैकी कोणते कलम / कलमे राज्य मानवाधिकार आयोगाच्या स्थापनेशी संबंधीत आहे/आहेत ? अ. कलम 12 ब. कलम 13 क. कलम 14 ड. कलम 15",
    "question_english": "Under the Protection of Human Rights Act, 1993 which of the following Section/s is/are related to the Constitution of State Human Rights Commission ? a. Section 12 b. Section 13 c. Section 14 d. Section 15",
    "options_marathi": [
      "केवळ अ",
      "केवळ ब",
      "केवळ क आणि ड",
      "वरीलपैकी काहीही नाही"
    ],
    "options_english": [
      "Only a",
      "Only b",
      "Only c and d",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993 - State Human Rights Commission",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Protection of Human Rights Act, 1993, dedicates Chapter V (Sections 21-29) to the State Human Rights Commissions. Specifically, Section 21 deals with the constitution of State Human Rights Commissions. Sections 12, 13, 14, and 15, as mentioned in the options, are related to the functions and procedures of the National Human Rights Commission (NHRC), not the State Human Rights Commission (SHRC). Section 12 outlines the functions of the NHRC, Section 13 deals with the procedure for inquiry, Section 14 with investigation, and Section 15 with statements made to the Commission. Therefore, none of the given sections are related to the constitution of the State Human Rights Commission.",
    "explanation_marathi": "मानवी हक्क संरक्षण कायदा, 1993 मध्ये, राज्य मानवाधिकार आयोगासाठी प्रकरण V (कलम 21-29) समर्पित आहे. विशेषतः, कलम 21 राज्य मानवाधिकार आयोगाच्या स्थापनेशी संबंधित आहे. पर्यायांमध्ये नमूद केलेली कलम 12, 13, 14 आणि 15 ही राष्ट्रीय मानवाधिकार आयोगाच्या (NHRC) कार्यपद्धती आणि कार्यांशी संबंधित आहेत, राज्य मानवाधिकार आयोगाशी (SHRC) नाहीत. कलम 12 NHRC ची कार्ये स्पष्ट करते, कलम 13 चौकशीच्या प्रक्रियेबद्दल आहे, कलम 14 तपासाशी संबंधित आहे आणि कलम 15 आयोगाला दिलेल्या निवेदनांशी संबंधित आहे. त्यामुळे, दिलेल्यापैकी कोणतेही कलम राज्य मानवाधिकार आयोगाच्या स्थापनेशी संबंधित नाही.",
    "options_breakdown": [
      {
        "option_marathi": "केवळ अ",
        "option_english": "Only a",
        "is_correct": false,
        "reason_english": "Section 12 pertains to the functions of the National Human Rights Commission, not the State Human Rights Commission's constitution.",
        "reason_marathi": "कलम 12 राष्ट्रीय मानवाधिकार आयोगाच्या कार्यांशी संबंधित आहे, राज्य मानवाधिकार आयोगाच्या स्थापनेशी नाही."
      },
      {
        "option_marathi": "केवळ ब",
        "option_english": "Only b",
        "is_correct": false,
        "reason_english": "Section 13 pertains to the procedure with respect to inquiry by the National Human Rights Commission, not the State Human Rights Commission's constitution.",
        "reason_marathi": "कलम 13 राष्ट्रीय मानवाधिकार आयोगाच्या चौकशीच्या प्रक्रियेबद्दल आहे, राज्य मानवाधिकार आयोगाच्या स्थापनेशी नाही."
      },
      {
        "option_marathi": "केवळ क आणि ड",
        "option_english": "Only c and d",
        "is_correct": false,
        "reason_english": "Sections 14 and 15 pertain to investigation and statements made to the National Human Rights Commission, respectively, not the State Human Rights Commission's constitution.",
        "reason_marathi": "कलम 14 आणि 15 अनुक्रमे राष्ट्रीय मानवाधिकार आयोगाच्या तपास आणि निवेदनांशी संबंधित आहेत, राज्य मानवाधिकार आयोगाच्या स्थापनेशी नाही."
      },
      {
        "option_marathi": "वरीलपैकी काहीही नाही",
        "option_english": "None of the above",
        "is_correct": true,
        "reason_english": "Sections 12, 13, 14, and 15 all relate to the National Human Rights Commission. The constitution of the State Human Rights Commission is covered under Section 21 of the Act. Hence, none of the given options are correct.",
        "reason_marathi": "कलम 12, 13, 14 आणि 15 ही सर्व राष्ट्रीय मानवाधिकार आयोगाशी संबंधित आहेत. राज्य मानवाधिकार आयोगाची स्थापना कायद्याच्या कलम 21 अंतर्गत येते. त्यामुळे, दिलेल्या पर्यायांपैकी कोणतेही योग्य नाही."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "अनुसूचित जाती व अनुसूचित जमाती (अत्याचारास प्रतिबंध) कायदा, 1989 नुसार अत्याचार म्हणजे अ. कलम 3 अंतर्गत शिक्षापात्र गुन्हा ब. कलम 7 अंतर्गत शिक्षापात्र गुन्हा क. कलम 9 अंतर्गत शिक्षापात्र गुन्हा ड. कलम 12 अंतर्गत शिक्षापात्र गुन्हा",
    "question_english": "As per SC and ST (Prevention of Atrocities) Act, 1989, 'atrocity' means a. an offence punishable under Section 3 b. an offence punishable under Section 7 c. an offence punishable under Section 9 d. an offence punishable under Section 12",
    "options_marathi": [
      "केवळ अ आणि ब बरोबर",
      "केवळ ब बरोबर",
      "केवळ ब आणि क बरोबर",
      "वरीलपैकी काहीही नाही"
    ],
    "options_english": [
      "Only a and b correct",
      "Only b correct",
      "Only b and c correct",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "SC and ST (Prevention of Atrocities) Act, 1989 - Definition of Atrocity",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989, defines various offences that constitute 'atrocities' against members of SCs and STs. These specific offences are primarily enumerated and made punishable under Section 3 of the Act. Section 7 deals with forfeiture of property, Section 9 with conferment of powers, and Section 12 with the power to remove a person from an area. While these sections are part of the Act, they do not define 'atrocity' itself as an offence punishable under them in the same direct manner as Section 3. Therefore, 'atrocity' specifically refers to offences punishable under Section 3. Since none of the given options correctly identifies 'Only a' as the answer, 'None of the above' is the correct choice.",
    "explanation_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचारास प्रतिबंध) कायदा, 1989, अनुसूचित जाती आणि जमातींच्या सदस्यांवरील 'अत्याचार' म्हणून विविध गुन्हे परिभाषित करतो. हे विशिष्ट गुन्हे प्रामुख्याने कायद्याच्या कलम 3 अंतर्गत सूचीबद्ध आणि शिक्षापात्र केले आहेत. कलम 7 मालमत्ता जप्त करण्याशी संबंधित आहे, कलम 9 अधिकारांच्या प्रदान करण्याशी संबंधित आहे आणि कलम 12 एखाद्या व्यक्तीला विशिष्ट भागातून काढून टाकण्याच्या अधिकाराशी संबंधित आहे. ही कलमे कायद्याचा भाग असली तरी, ती कलम 3 प्रमाणे 'अत्याचार' या शब्दाची थेट व्याख्या करत नाहीत. त्यामुळे, 'अत्याचार' विशेषतः कलम 3 अंतर्गत शिक्षापात्र गुन्ह्यांना सूचित करतो. दिलेल्या पर्यायांपैकी 'केवळ अ' हा योग्य पर्याय नसल्यामुळे, 'वरीलपैकी काहीही नाही' हा योग्य पर्याय आहे.",
    "options_breakdown": [
      {
        "option_marathi": "केवळ अ आणि ब बरोबर",
        "option_english": "Only a and b correct",
        "is_correct": false,
        "reason_english": "Only Section 3 defines offences constituting 'atrocity'. Section 7 deals with forfeiture of property, not the definition of atrocity.",
        "reason_marathi": "केवळ कलम 3 'अत्याचार' म्हणून गुन्हे परिभाषित करते. कलम 7 मालमत्ता जप्त करण्याशी संबंधित आहे, अत्याचाराच्या व्याख्येशी नाही."
      },
      {
        "option_marathi": "केवळ ब बरोबर",
        "option_english": "Only b correct",
        "is_correct": false,
        "reason_english": "Section 7 deals with forfeiture of property, not the definition of atrocity.",
        "reason_marathi": "कलम 7 मालमत्ता जप्त करण्याशी संबंधित आहे, अत्याचाराच्या व्याख्येशी नाही."
      },
      {
        "option_marathi": "केवळ ब आणि क बरोबर",
        "option_english": "Only b and c correct",
        "is_correct": false,
        "reason_english": "Sections 7 and 9 deal with forfeiture of property and conferment of powers, respectively, not the definition of atrocity.",
        "reason_marathi": "कलम 7 आणि 9 अनुक्रमे मालमत्ता जप्त करणे आणि अधिकार प्रदान करण्याशी संबंधित आहेत, अत्याचाराच्या व्याख्येशी नाही."
      },
      {
        "option_marathi": "वरीलपैकी काहीही नाही",
        "option_english": "None of the above",
        "is_correct": true,
        "reason_english": "The term 'atrocity' as an offence is primarily defined and punishable under Section 3 of the Act. Since 'Only a' is not an option, and other sections do not define atrocity, this option is correct.",
        "reason_marathi": "'अत्याचार' हा गुन्हा प्रामुख्याने कायद्याच्या कलम 3 अंतर्गत परिभाषित आणि शिक्षापात्र आहे. 'केवळ अ' हा पर्याय नसल्यामुळे आणि इतर कलमे अत्याचाराची व्याख्या करत नसल्यामुळे, हा पर्याय योग्य आहे."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 मधील कलम 36 (2) नुसार आयोग किंवा राज्य आयोग मानवी हक्कांच्या उल्लंघनाबाबतची कृती ज्या दिनांकास घडल्याचे अभिकथित करण्यात आले असेल त्या दिनांकापासून ______ कालावधी संपल्यानंतर त्या बाबी संबंधात चौकशी करणार नाही.",
    "question_english": "As per Section 36 (2) of the Protection of Human Rights Act, 1993 the Commission or the state commission shall not inquire into any matter after the expiry of ______ from the date on which the act constituting violation of human rights is alleged to have been committed.",
    "options_marathi": [
      "6 महिने",
      "1 वर्ष",
      "3 वर्ष",
      "5 वर्ष"
    ],
    "options_english": [
      "6 months",
      "1 year",
      "3 years",
      "5 years"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993 - Inquiry Limitations",
    "difficulty": "Easy",
    "trap_detected": "Factual",
    "explanation_english": "Section 36 (2) of the Protection of Human Rights Act, 1993, clearly states the time limit for the Commission or a State Commission to inquire into a matter. It mandates that neither the Commission nor the State Commission shall inquire into any matter after the expiry of one year from the date on which the act constituting violation of human rights is alleged to have been committed. This provision ensures that complaints are brought forward within a reasonable timeframe.",
    "explanation_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 36 (2) मध्ये आयोग किंवा राज्य आयोगाला एखाद्या प्रकरणाची चौकशी करण्यासाठीची कालमर्यादा स्पष्टपणे नमूद केली आहे. या कलमानुसार, मानवी हक्कांच्या उल्लंघनाची कृती ज्या तारखेला घडली असे मानले जाते, त्या तारखेपासून एक वर्षाचा कालावधी संपल्यानंतर आयोग किंवा राज्य आयोग कोणत्याही प्रकरणाची चौकशी करणार नाही. ही तरतूद सुनिश्चित करते की तक्रारी वाजवी वेळेत सादर केल्या जातात.",
    "options_breakdown": [
      {
        "option_marathi": "6 महिने",
        "option_english": "6 months",
        "is_correct": false,
        "reason_english": "The Act specifies a period of one year, not six months, for inquiry into human rights violations.",
        "reason_marathi": "मानवी हक्कांच्या उल्लंघनाची चौकशी करण्यासाठी कायद्यात एक वर्षाचा कालावधी नमूद केला आहे, सहा महिन्यांचा नाही."
      },
      {
        "option_marathi": "1 वर्ष",
        "option_english": "1 year",
        "is_correct": true,
        "reason_english": "As per Section 36 (2) of the Protection of Human Rights Act, 1993, the time limit for inquiry is one year.",
        "reason_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 36 (2) नुसार, चौकशीसाठीची कालमर्यादा एक वर्ष आहे."
      },
      {
        "option_marathi": "3 वर्ष",
        "option_english": "3 years",
        "is_correct": false,
        "reason_english": "The Act specifies a period of one year, not three years, for inquiry into human rights violations.",
        "reason_marathi": "मानवी हक्कांच्या उल्लंघनाची चौकशी करण्यासाठी कायद्यात एक वर्षाचा कालावधी नमूद केला आहे, तीन वर्षांचा नाही."
      },
      {
        "option_marathi": "5 वर्ष",
        "option_english": "5 years",
        "is_correct": false,
        "reason_english": "The Act specifies a period of one year, not five years, for inquiry into human rights violations.",
        "reason_marathi": "मानवी हक्कांच्या उल्लंघनाची चौकशी करण्यासाठी कायद्यात एक वर्षाचा कालावधी नमूद केला आहे, पाच वर्षांचा नाही."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "कौटुंबीक हिंसाचारापासून महिलांचे संरक्षण अधिनियम, 2005 अन्वये दंडाधिकाऱ्याला पीडित व्यक्ति आणि उत्तरवादी यांना त्यांची बाजू मांडण्याची संधी दिल्यावर आणि कौटुंबीक हिंसाचार घडला आहे याची खात्री पटल्यावर, पीडीत व्यक्तिच्या बाजूने संरक्षण आदेश काढता येईल आणि उत्तरवादीस पुढील गोष्टी करण्यास मनाई करता येईल. अ. कौटुंबीक हिंसाचाराचे कृत्य करणे. ब. कौटुंबीक हिंसाचाराची कृत्य करण्यास मदत करणे व त्यास अपप्रेरणा देणे. क. पीडीत व्यक्तिशी कोणत्याही स्वरुपात संवाद साधण्याचा प्रयत्न करणे. ड. पीडीत व्यक्तिवर अवलंबून असणाऱ्या व्यक्ति, इतर नातलग किंवा तिला कौटुंबीक हिंसाचारापासून वाचवणारी कोणतीही व्यक्ति यांना हिंसक वागणूक देणे. अचूक पर्याय निवडा",
    "question_english": "In the Protection of Women from Domestic Violence Act, 2005. The magistrate may after giving the aggrieved person and the respondent an opportunity of being heard and if satisfied that Domestic violence has taken place, then he may pass a protection order and prohibit the respondent from a. committing any act of Domestic violence. b. aiding or abetting in the commission of acts of Domestic violence. c. attempting to communicate in any form with the aggrieved person. d. causing violence to the dependants, other relatives or any person who give the aggrieved person assistance from Domestic violence. Choose the correct options",
    "options_marathi": [
      "पर्याय अ, ब आणि क योग्य आहेत",
      "सर्व पर्याय योग्य आहेत",
      "सर्व पर्याय अयोग्य आहेत",
      "पर्याय ब, क आणि ड योग्य आहेत"
    ],
    "options_english": [
      "Option a, b and c are correct",
      "All options are correct",
      "All options are incorrect",
      "Option b, c and d are correct"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Protection of Women from Domestic Violence Act, 2005 - Protection Orders",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 18 of the Protection of Women from Domestic Violence Act, 2005, empowers a Magistrate to pass a protection order. This order can prohibit the respondent from various actions, including: (a) committing any act of domestic violence; (b) aiding or abetting in the commission of acts of domestic violence; (d) attempting to communicate in any form with the aggrieved person; and (f) causing violence to the dependants, other relatives or any person who gives the aggrieved person assistance from domestic violence. All the statements (a, b, c, d) provided in the question are directly covered under the prohibitions listed in Section 18. Therefore, all the given options are correct.",
    "explanation_marathi": "कौटुंबीक हिंसाचारापासून महिलांचे संरक्षण अधिनियम, 2005 च्या कलम 18 नुसार दंडाधिकाऱ्याला संरक्षण आदेश देण्याचा अधिकार आहे. हा आदेश उत्तरवादीला विविध कृती करण्यापासून प्रतिबंधित करू शकतो, ज्यात हे समाविष्ट आहे: (अ) कौटुंबीक हिंसाचाराचे कोणतेही कृत्य करणे; (ब) कौटुंबीक हिंसाचाराच्या कृत्यांना मदत करणे किंवा प्रोत्साहन देणे; (क) पीडित व्यक्तीशी कोणत्याही स्वरूपात संवाद साधण्याचा प्रयत्न करणे; आणि (ड) पीडित व्यक्तीवर अवलंबून असलेल्या व्यक्ती, इतर नातेवाईक किंवा तिला कौटुंबीक हिंसाचारापासून मदत करणाऱ्या कोणत्याही व्यक्तीला हिंसक वागणूक देणे. प्रश्नात दिलेली सर्व विधाने (अ, ब, क, ड) कलम 18 मध्ये नमूद केलेल्या प्रतिबंधांमध्ये थेट समाविष्ट आहेत. त्यामुळे, दिलेले सर्व पर्याय योग्य आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "पर्याय अ, ब आणि क योग्य आहेत",
        "option_english": "Option a, b and c are correct",
        "is_correct": false,
        "reason_english": "While options a, b, and c are correct, option d is also correct, making this option incomplete.",
        "reason_marathi": "पर्याय अ, ब आणि क योग्य असले तरी, पर्याय ड देखील योग्य आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_marathi": "सर्व पर्याय योग्य आहेत",
        "option_english": "All options are correct",
        "is_correct": true,
        "reason_english": "All four statements (a, b, c, d) are explicitly mentioned as prohibitions that a Magistrate can impose under Section 18 of the Domestic Violence Act, 2005.",
        "reason_marathi": "कौटुंबीक हिंसाचार अधिनियम, 2005 च्या कलम 18 अंतर्गत दंडाधिकारी लादू शकणाऱ्या प्रतिबंधांमध्ये सर्व चार विधाने (अ, ब, क, ड) स्पष्टपणे नमूद केली आहेत."
      },
      {
        "option_marathi": "सर्व पर्याय अयोग्य आहेत",
        "option_english": "All options are incorrect",
        "is_correct": false,
        "reason_english": "All the statements (a, b, c, d) are correct prohibitions under the Act.",
        "reason_marathi": "सर्व विधाने (अ, ब, क, ड) कायद्यानुसार योग्य प्रतिबंध आहेत."
      },
      {
        "option_marathi": "पर्याय ब, क आणि ड योग्य आहेत",
        "option_english": "Option b, c and d are correct",
        "is_correct": false,
        "reason_english": "While options b, c, and d are correct, option a is also correct, making this option incomplete.",
        "reason_marathi": "पर्याय ब, क आणि ड योग्य असले तरी, पर्याय अ देखील योग्य आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "राष्ट्रीय मानवाधिकार आयोग पुढील कार्य करते अ. मानवाधिकारातबाबत उद्भवून झालेल्या पिडीताने सादर केलेल्या याचिकेवर स्वतः चौकशी करणे. ब. राज्य सरकारला सूचना देवून कोणत्याही तुरुंगात भेट देणे. क. मानवी हक्काच्या क्षेत्रात संशोधन करणे आणि प्रोत्साहन देणे. ड. मानवी हक्काबाबत साक्षरता पसरविणे",
    "question_english": "The NHRC performs functions namely : a. inquire suo moto on a petition presented to it by a victim of violation of human rights. b. visit any jail under intimation to the State Govt. c. undertake and promote research in the field of human rights. d. spread human rights literacy.",
    "options_marathi": [
      "केवळ अ आणि ब बरोबर",
      "केवळ अ, ब आणि क बरोबर",
      "केवळ अ, क आणि ड बरोबर",
      "वरीलपैकी सर्व बरोबर आहेत"
    ],
    "options_english": [
      "Only a and b correct",
      "Only a, b and c correct",
      "Only a, c and d correct",
      "All the above are correct"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993 - NHRC Functions",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 12 of the Protection of Human Rights Act, 1993, enumerates the functions of the National Human Rights Commission (NHRC). All the statements provided in the question are explicitly listed as functions of the NHRC: (a) inquiring suo motu or on a petition into human rights violations (Section 12(a)); (b) visiting jails or other institutions under intimation to the State Government (Section 12(c)); (c) undertaking and promoting research in the field of human rights (Section 12(g)); and (d) spreading human rights literacy (Section 12(h)). Since all four statements accurately describe functions of the NHRC, the option 'All the above are correct' is the correct answer.",
    "explanation_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 12 मध्ये राष्ट्रीय मानवाधिकार आयोगाची (NHRC) कार्ये नमूद केली आहेत. प्रश्नात दिलेली सर्व विधाने NHRC च्या कार्यांमध्ये स्पष्टपणे समाविष्ट आहेत: (अ) मानवी हक्कांच्या उल्लंघनाबाबत स्वतःहून किंवा पीडिताने सादर केलेल्या याचिकेवर चौकशी करणे (कलम 12(अ)); (ब) राज्य सरकारला सूचना देऊन कोणत्याही तुरुंगाला किंवा इतर संस्थांना भेट देणे (कलम 12(क)); (क) मानवी हक्कांच्या क्षेत्रात संशोधन करणे आणि त्याला प्रोत्साहन देणे (कलम 12(ग)); आणि (ड) मानवी हक्कांबद्दल साक्षरता पसरवणे (कलम 12(ह)). ही चारही विधाने NHRC च्या कार्यांचे अचूक वर्णन करत असल्याने, 'वरीलपैकी सर्व बरोबर आहेत' हा पर्याय योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_marathi": "केवळ अ आणि ब बरोबर",
        "option_english": "Only a and b correct",
        "is_correct": false,
        "reason_english": "Statements c and d are also correct functions of the NHRC, making this option incomplete.",
        "reason_marathi": "विधाने क आणि ड देखील NHRC ची योग्य कार्ये आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_marathi": "केवळ अ, ब आणि क बरोबर",
        "option_english": "Only a, b and c correct",
        "is_correct": false,
        "reason_english": "Statement d is also a correct function of the NHRC, making this option incomplete.",
        "reason_marathi": "विधान ड देखील NHRC चे योग्य कार्य आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_marathi": "केवळ अ, क आणि ड बरोबर",
        "option_english": "Only a, c and d correct",
        "is_correct": false,
        "reason_english": "Statement b is also a correct function of the NHRC, making this option incomplete.",
        "reason_marathi": "विधान ब देखील NHRC चे योग्य कार्य आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_marathi": "वरीलपैकी सर्व बरोबर आहेत",
        "option_english": "All the above are correct",
        "is_correct": true,
        "reason_english": "All four statements (a, b, c, d) accurately describe the functions of the National Human Rights Commission as per Section 12 of the PHRA, 1993.",
        "reason_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 12 नुसार, सर्व चार विधाने (अ, ब, क, ड) राष्ट्रीय मानवाधिकार आयोगाच्या कार्यांचे अचूक वर्णन करतात."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "भारतीय संविधानातील अनुच्छेद ______ मध्ये सदसद्विवेक बुद्धीचे स्वातंत्र्य आणि धर्माचे मुक्त प्रकटीकरण आचरण व प्रसारा संबंधीचा स्वातंत्र्याचा अधिकार दिलेला आहे.",
    "question_english": "Under Article ______ of the Constitution of India the right to freedom of conscience and free profession practice and propagation of religion is given.",
    "options_marathi": [
      "कलम 23",
      "कलम 24",
      "कलम 25",
      "कलम 26"
    ],
    "options_english": [
      "Article 23",
      "Article 24",
      "Article 25",
      "Article 26"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Fundamental Rights - Right to Freedom of Religion",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Indian Constitution guarantees various fundamental rights to its citizens. Article 25 specifically deals with the 'Freedom of conscience and free profession, practice and propagation of religion'. This article ensures that all persons are equally entitled to freedom of conscience and the right freely to profess, practice and propagate religion, subject to public order, morality and health. Article 23 prohibits traffic in human beings and forced labour, Article 24 prohibits employment of children in factories, and Article 26 deals with freedom to manage religious affairs.",
    "explanation_marathi": "भारतीय संविधान आपल्या नागरिकांना विविध मूलभूत हक्क प्रदान करते. कलम 25 विशेषतः 'सदसद्विवेक बुद्धीचे स्वातंत्र्य आणि धर्माचे मुक्त प्रकटीकरण, आचरण व प्रसारा संबंधीचा अधिकार' यावर आधारित आहे. हे कलम सुनिश्चित करते की सार्वजनिक सुव्यवस्था, नैतिकता आणि आरोग्याच्या अधीन राहून, सर्व व्यक्तींना सदसद्विवेक बुद्धीचे स्वातंत्र्य आणि धर्म मुक्तपणे स्वीकारण्याचा, आचरण्याचा आणि प्रचार करण्याचा समान अधिकार आहे. कलम 23 मानवी तस्करी आणि सक्तीच्या श्रमास प्रतिबंध करते, कलम 24 कारखान्यांमध्ये मुलांच्या रोजगारास प्रतिबंध करते आणि कलम 26 धार्मिक बाबींचे व्यवस्थापन करण्याच्या स्वातंत्र्याशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_marathi": "कलम 23",
        "option_english": "Article 23",
        "is_correct": false,
        "reason_english": "Article 23 deals with the prohibition of traffic in human beings and forced labour.",
        "reason_marathi": "कलम 23 मानवी तस्करी आणि सक्तीच्या श्रमास प्रतिबंध करण्याशी संबंधित आहे."
      },
      {
        "option_marathi": "कलम 24",
        "option_english": "Article 24",
        "is_correct": false,
        "reason_english": "Article 24 deals with the prohibition of employment of children in factories, etc.",
        "reason_marathi": "कलम 24 कारखान्यांमध्ये मुलांच्या रोजगारास प्रतिबंध करण्याशी संबंधित आहे."
      },
      {
        "option_marathi": "कलम 25",
        "option_english": "Article 25",
        "is_correct": true,
        "reason_english": "Article 25 guarantees the freedom of conscience and the right to freely profess, practice, and propagate religion.",
        "reason_marathi": "कलम 25 सदसद्विवेक बुद्धीचे स्वातंत्र्य आणि धर्म मुक्तपणे स्वीकारण्याचा, आचरण्याचा आणि प्रचार करण्याचा अधिकार सुनिश्चित करते."
      },
      {
        "option_marathi": "कलम 26",
        "option_english": "Article 26",
        "is_correct": false,
        "reason_english": "Article 26 deals with the freedom to manage religious affairs, which is distinct from the freedom of conscience and practice.",
        "reason_marathi": "कलम 26 धार्मिक बाबींचे व्यवस्थापन करण्याच्या स्वातंत्र्याशी संबंधित आहे, जे सदसद्विवेक बुद्धीचे स्वातंत्र्य आणि आचरणापेक्षा वेगळे आहे."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "भारतीय संविधानातील मूलभूत कर्तव्यांच्या अनुषंगाने वेगळेपण ओळखा. (1) याचा 42 व्या घटना दुरुस्ती संविधानामध्ये समावेश करण्यात आला (2) यामध्ये एकूण 11 कर्तव्ये दिलेली आहेत (3) ही कर्तव्ये प्रत्येकाने पाळावयाची आहेत (4) 11 वे कर्तव्य 86 व्या घटना दुरुस्तीने 2002 साली समाविष्ट करण्यात आले",
    "question_english": "Find the odd man out regarding fundamental duties under the Constitution of India. (1) They are inserted into the Constitution by 42nd Amendment (2) In all 11 duties are provided (3) These duties shall be followed by every one (4) 11th duty inserted by 86th Constitutional Amendment in the year 2002",
    "options_marathi": [
      "(1) They are inserted into the Constitution by 42nd Amendment",
      "(2) In all 11 duties are provided",
      "(3) These duties shall be followed by every one",
      "(4) 11th duty inserted by 86th Constitutional Amendment in the year 2002"
    ],
    "options_english": [
      "(1) They are inserted into the Constitution by 42nd Amendment",
      "(2) In all 11 duties are provided",
      "(3) These duties shall be followed by every one",
      "(4) 11th duty inserted by 86th Constitutional Amendment in the year 2002"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Fundamental Duties",
    "difficulty": "Medium",
    "trap_detected": "Semantic Nuance",
    "explanation_english": "Let's analyze each statement regarding Fundamental Duties: (1) Fundamental Duties were indeed inserted into the Constitution by the 42nd Amendment Act, 1976. This statement is correct. (2) Currently, there are 11 Fundamental Duties. The original 10 were added by the 42nd Amendment, and the 11th was added later. This statement is correct. (4) The 11th Fundamental Duty, related to providing education to children, was inserted by the 86th Constitutional Amendment Act in 2002. This statement is correct. (3) 'These duties shall be followed by every one'. While Fundamental Duties are moral obligations and citizens are expected to abide by them, they are not legally enforceable in the same way as Fundamental Rights. The word 'shall' implies a legal mandate, which is not strictly true for Fundamental Duties as they are non-justiciable. Therefore, this statement is the 'odd man out' as it misrepresents the nature of their enforceability.",
    "explanation_marathi": "मूलभूत कर्तव्यांबाबत प्रत्येक विधानाचे विश्लेषण करूया: (1) मूलभूत कर्तव्ये 42 व्या घटनादुरुस्ती अधिनियम, 1976 द्वारे संविधानात समाविष्ट करण्यात आली. हे विधान बरोबर आहे. (2) सध्या एकूण 11 मूलभूत कर्तव्ये आहेत. मूळ 10 कर्तव्ये 42 व्या घटनादुरुस्तीने जोडली गेली आणि 11 वे कर्तव्य नंतर जोडले गेले. हे विधान बरोबर आहे. (4) मुलांसाठी शिक्षणाची संधी उपलब्ध करून देण्याशी संबंधित 11 वे मूलभूत कर्तव्य 86 व्या घटनादुरुस्ती अधिनियम, 2002 द्वारे समाविष्ट करण्यात आले. हे विधान बरोबर आहे. (3) 'ही कर्तव्ये प्रत्येकाने पाळावयाची आहेत'. मूलभूत कर्तव्ये नैतिक जबाबदाऱ्या आहेत आणि नागरिकांनी त्यांचे पालन करणे अपेक्षित असले तरी, ती मूलभूत हक्कांप्रमाणे कायदेशीररित्या लागू करण्यायोग्य नाहीत. 'पाळावयाची आहेत' हा शब्द कायदेशीर आदेश सूचित करतो, जो मूलभूत कर्तव्यांसाठी तंतोतंत खरा नाही कारण ती न्यायप्रविष्ट नाहीत. त्यामुळे, हे विधान 'वेगळे' आहे कारण ते त्यांच्या अंमलबजावणीच्या स्वरूपाचे चुकीचे प्रतिनिधित्व करते.",
    "options_breakdown": [
      {
        "option_marathi": "(1) याचा 42 व्या घटना दुरुस्ती संविधानामध्ये समावेश करण्यात आला",
        "option_english": "(1) They are inserted into the Constitution by 42nd Amendment",
        "is_correct": false,
        "reason_english": "This statement is factually correct. Fundamental Duties were added by the 42nd Amendment Act, 1976.",
        "reason_marathi": "हे विधान वस्तुस्थितीनुसार बरोबर आहे. मूलभूत कर्तव्ये 42 व्या घटनादुरुस्ती अधिनियम, 1976 द्वारे जोडली गेली."
      },
      {
        "option_marathi": "(2) यामध्ये एकूण 11 कर्तव्ये दिलेली आहेत",
        "option_english": "(2) In all 11 duties are provided",
        "is_correct": false,
        "reason_english": "This statement is factually correct. After the 86th Amendment, there are 11 Fundamental Duties.",
        "reason_marathi": "हे विधान वस्तुस्थितीनुसार बरोबर आहे. 86 व्या घटनादुरुस्तीनंतर, एकूण 11 मूलभूत कर्तव्ये आहेत."
      },
      {
        "option_marathi": "(3) ही कर्तव्ये प्रत्येकाने पाळावयाची आहेत",
        "option_english": "(3) These duties shall be followed by every one",
        "is_correct": true,
        "reason_english": "This statement is the 'odd man out' because Fundamental Duties are not legally enforceable or justiciable, unlike Fundamental Rights. The phrasing 'shall be followed' implies a legal mandate which is not the case.",
        "reason_marathi": "हे विधान 'वेगळे' आहे कारण मूलभूत कर्तव्ये मूलभूत हक्कांप्रमाणे कायदेशीररित्या लागू करण्यायोग्य किंवा न्यायप्रविष्ट नाहीत. 'पाळावयाची आहेत' हे वाक्य कायदेशीर आदेश सूचित करते, जे वस्तुस्थिती नाही."
      },
      {
        "option_marathi": "(4) 11 वे कर्तव्य 86 व्या घटना दुरुस्तीने 2002 साली समाविष्ट करण्यात आले",
        "option_english": "(4) 11th duty inserted by 86th Constitutional Amendment in the year 2002",
        "is_correct": false,
        "reason_english": "This statement is factually correct. The 11th Fundamental Duty was added by the 86th Amendment in 2002.",
        "reason_marathi": "हे विधान वस्तुस्थितीनुसार बरोबर आहे. 11 वे मूलभूत कर्तव्य 2002 मध्ये 86 व्या घटनादुरुस्तीने जोडले गेले."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 मधील कलम 2 (d) मध्ये दिलेल्या मानवी हक्कांच्या अर्थानुसार वेगळेपण ओळखा",
    "question_english": "Under Section 2 (d) of the Protection of Human Rights Act, 1993 find the odd man out regarding the meaning of Human Rights",
    "options_marathi": [
      "जीवित्वाचा अधिकार",
      "स्वातंत्र्याचा अधिकार",
      "समानतेचा अधिकार",
      "न्यायालयाद्वारे अंमलात न आणण्याजोगे अधिकार"
    ],
    "options_english": [
      "Right to life",
      "Right to liberty",
      "Right to equality",
      "Rights which are not enforceable by the courts"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993 - Definition of Human Rights",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 2(1)(d) of the Protection of Human Rights Act, 1993, defines 'human rights' as 'the rights relating to life, liberty, equality and dignity of the individual guaranteed by the Constitution or embodied in the International Covenants and enforceable by courts in India.' Based on this definition, the 'Right to life', 'Right to liberty', and 'Right to equality' are explicitly included. However, 'Rights which are not enforceable by the courts' directly contradicts the definition, which states that human rights, for the purpose of this Act, must be 'enforceable by courts in India'. Therefore, this is the odd one out.",
    "explanation_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 2(1)(ड) नुसार 'मानवी हक्क' म्हणजे 'संविधानाने हमी दिलेले किंवा आंतरराष्ट्रीय करारांमध्ये समाविष्ट असलेले आणि भारतातील न्यायालयांद्वारे अंमलात आणण्यायोग्य असलेले जीवन, स्वातंत्र्य, समानता आणि व्यक्तीच्या प्रतिष्ठेशी संबंधित अधिकार'. या व्याख्येनुसार, 'जीवित्वाचा अधिकार', 'स्वातंत्र्याचा अधिकार' आणि 'समानतेचा अधिकार' स्पष्टपणे समाविष्ट आहेत. तथापि, 'न्यायालयाद्वारे अंमलात न आणण्याजोगे अधिकार' हे व्याख्येच्या थेट विरुद्ध आहे, कारण व्याख्या सांगते की या कायद्याच्या उद्देशासाठी मानवी हक्क 'भारतातील न्यायालयांद्वारे अंमलात आणण्यायोग्य' असले पाहिजेत. त्यामुळे, हा पर्याय 'वेगळा' आहे.",
    "options_breakdown": [
      {
        "option_marathi": "जीवित्वाचा अधिकार",
        "option_english": "Right to life",
        "is_correct": false,
        "reason_english": "This is explicitly included in the definition of human rights under Section 2(1)(d) of the Act.",
        "reason_marathi": "हा अधिकार कायद्याच्या कलम 2(1)(ड) अंतर्गत मानवी हक्कांच्या व्याख्येत स्पष्टपणे समाविष्ट आहे."
      },
      {
        "option_marathi": "स्वातंत्र्याचा अधिकार",
        "option_english": "Right to liberty",
        "is_correct": false,
        "reason_english": "This is explicitly included in the definition of human rights under Section 2(1)(d) of the Act.",
        "reason_marathi": "हा अधिकार कायद्याच्या कलम 2(1)(ड) अंतर्गत मानवी हक्कांच्या व्याख्येत स्पष्टपणे समाविष्ट आहे."
      },
      {
        "option_marathi": "समानतेचा अधिकार",
        "option_english": "Right to equality",
        "is_correct": false,
        "reason_english": "This is explicitly included in the definition of human rights under Section 2(1)(d) of the Act.",
        "reason_marathi": "हा अधिकार कायद्याच्या कलम 2(1)(ड) अंतर्गत मानवी हक्कांच्या व्याख्येत स्पष्टपणे समाविष्ट आहे."
      },
      {
        "option_marathi": "न्यायालयाद्वारे अंमलात न आणण्याजोगे अधिकार",
        "option_english": "Rights which are not enforceable by the courts",
        "is_correct": true,
        "reason_english": "The definition of human rights in Section 2(1)(d) specifically states that these rights must be 'enforceable by courts in India'. Therefore, rights not enforceable by courts are the 'odd man out'.",
        "reason_marathi": "कलम 2(1)(ड) मधील मानवी हक्कांच्या व्याख्येमध्ये स्पष्टपणे नमूद केले आहे की हे अधिकार 'भारतातील न्यायालयांद्वारे अंमलात आणण्यायोग्य' असले पाहिजेत. त्यामुळे, न्यायालयांद्वारे अंमलात न आणण्याजोगा अधिकार हा 'वेगळा' आहे."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "दि. 14 ऑगस्ट 2008 रोजीच्या महात्मागांधी नंतमुक्त गाव मोहीम राज्याचे रद्दविषयाबाबतचा महाराष्ट्र शासन निर्णयातील परिच्छेद 3 नुसार दिलेल्या मोहिमेचे स्वरूप व मोहिमकेंद्रित थेट याच्या अनुषंगाने वेगळेपण ओळखा",
    "question_english": "The Government Resolution dated 14th August 2008 of the Maharashtra State government regarding Mahatma Gandhi dispute free village campaign under its 3rd paragraph of scope and central area of dispute resolution campaign find odd man out",
    "options_marathi": [
      "आर्थिक",
      "दिवाणी",
      "महसूली",
      "फौजदारी"
    ],
    "options_english": [
      "Economic",
      "Civil",
      "Revenue",
      "Criminal"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Maharashtra State Schemes - Dispute Resolution",
    "difficulty": "Medium",
    "trap_detected": "Categorization",
    "explanation_english": "The Mahatma Gandhi Tantamukt Gaon Abhiyan (Dispute-Free Village Campaign) launched by the Maharashtra government aimed at resolving various types of disputes at the village level. The primary categories of disputes targeted by such campaigns typically include Civil disputes (e.g., land, property, family matters), Revenue disputes (e.g., land records, agricultural issues), and minor Criminal disputes (e.g., petty quarrels, assaults). 'Economic' is a broad category that encompasses many aspects and is not typically classified as a distinct type of dispute for resolution under such a scheme in the same way as civil, revenue, or criminal matters. While economic factors might lead to disputes, the disputes themselves are usually categorized under civil or criminal law. Hence, 'Economic' is the odd one out.",
    "explanation_marathi": "महाराष्ट्र शासनाने सुरू केलेली महात्मा गांधी तंटामुक्त गाव मोहीम (विवादमुक्त गाव मोहीम) गावपातळीवर विविध प्रकारच्या विवादांचे निराकरण करण्याच्या उद्देशाने होती. अशा मोहिमांद्वारे लक्ष्यित विवादांच्या प्राथमिक श्रेणींमध्ये सामान्यतः दिवाणी विवाद (उदा. जमीन, मालमत्ता, कौटुंबिक प्रकरणे), महसूली विवाद (उदा. जमीन अभिलेख, कृषी समस्या) आणि किरकोळ फौजदारी विवाद (उदा. किरकोळ भांडणे, हल्ले) यांचा समावेश होतो. 'आर्थिक' ही एक व्यापक श्रेणी आहे ज्यात अनेक पैलू समाविष्ट आहेत आणि ती दिवाणी, महसूली किंवा फौजदारी प्रकरणांप्रमाणे अशा योजनेअंतर्गत निराकरणासाठी विवादांचा एक वेगळा प्रकार म्हणून वर्गीकृत केली जात नाही. आर्थिक घटक विवादांना कारणीभूत ठरू शकतात, परंतु विवाद स्वतः दिवाणी किंवा फौजदारी कायद्यांतर्गत वर्गीकृत केले जातात. त्यामुळे, 'आर्थिक' हा वेगळा पर्याय आहे.",
    "options_breakdown": [
      {
        "option_marathi": "आर्थिक",
        "option_english": "Economic",
        "is_correct": true,
        "reason_english": "While economic factors can lead to disputes, 'Economic' is not typically a distinct category of dispute resolution (like Civil, Revenue, Criminal) under such a campaign. Disputes arising from economic issues would generally fall under Civil or sometimes Criminal categories.",
        "reason_marathi": "आर्थिक घटक विवादांना कारणीभूत ठरू शकतात, परंतु 'आर्थिक' हा अशा मोहिमेअंतर्गत विवादांच्या निराकरणाची एक वेगळी श्रेणी (दिवाणी, महसूली, फौजदारी यांसारखी) नाही. आर्थिक समस्यांमुळे उद्भवणारे विवाद सामान्यतः दिवाणी किंवा काहीवेळा फौजदारी श्रेणींमध्ये येतात."
      },
      {
        "option_marathi": "दिवाणी",
        "option_english": "Civil",
        "is_correct": false,
        "reason_english": "Civil disputes (e.g., land, property, family matters) are a core area of focus for dispute resolution campaigns like the Tantamukt Gaon Abhiyan.",
        "reason_marathi": "दिवाणी विवाद (उदा. जमीन, मालमत्ता, कौटुंबिक प्रकरणे) तंटामुक्त गाव अभियानासारख्या विवाद निराकरण मोहिमांसाठी एक प्रमुख लक्षणीय क्षेत्र आहे."
      },
      {
        "option_marathi": "महसूली",
        "option_english": "Revenue",
        "is_correct": false,
        "reason_english": "Revenue disputes (e.g., land records, agricultural issues) are a significant part of village-level disputes addressed by such campaigns.",
        "reason_marathi": "महसूली विवाद (उदा. जमीन अभिलेख, कृषी समस्या) अशा मोहिमांद्वारे हाताळल्या जाणाऱ्या गावपातळीवरील विवादांचा एक महत्त्वाचा भाग आहेत."
      },
      {
        "option_marathi": "फौजदारी",
        "option_english": "Criminal",
        "is_correct": false,
        "reason_english": "Minor criminal disputes (e.g., petty quarrels, assaults) are also typically covered under the scope of dispute resolution in such campaigns.",
        "reason_marathi": "किरकोळ फौजदारी विवाद (उदा. किरकोळ भांडणे, हल्ले) देखील अशा मोहिमांमध्ये विवाद निराकरणाच्या कक्षेत येतात."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "हुंडा प्रतिबंध अधिनियम, 1961 मधील कलम ______ मध्ये हुंडा प्रतिषेधी अधिकाऱ्याच्या नेमणुकीची तरतूद दिलेली आहे.",
    "question_english": "Under Section ______ of the Dowry Prohibition Act, 1961 the provision regarding appointment of dowry prohibition officers is given.",
    "options_marathi": [
      "कलम 8",
      "कलम 8A",
      "कलम 8B",
      "कलम 9"
    ],
    "options_english": [
      "Section 8",
      "Section 8A",
      "Section 8 B",
      "Section 9"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Dowry Prohibition Act, 1961 - Dowry Prohibition Officers",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Dowry Prohibition Act, 1961, aims to prohibit the giving and taking of dowry. To ensure the effective implementation of the Act, it provides for the appointment of specific officers. Section 8B of the Act specifically deals with the 'Dowry Prohibition Officers'. It states that the State Government may appoint as many Dowry Prohibition Officers as it thinks fit, and specify their areas of jurisdiction and powers. Section 8 deals with cognizance of offences, Section 8A with the burden of proof, and Section 9 with the power to make rules.",
    "explanation_marathi": "हुंडा प्रतिबंध अधिनियम, 1961, हुंडा देणे आणि घेणे यावर प्रतिबंध घालण्याचा उद्देश ठेवतो. कायद्याची प्रभावी अंमलबजावणी सुनिश्चित करण्यासाठी, त्यात विशिष्ट अधिकाऱ्यांच्या नियुक्तीची तरतूद आहे. कायद्याचे कलम 8B विशेषतः 'हुंडा प्रतिषेधी अधिकाऱ्यां'शी संबंधित आहे. यात असे म्हटले आहे की राज्य सरकारला योग्य वाटेल तितके हुंडा प्रतिषेधी अधिकारी नियुक्त करता येतील आणि त्यांच्या कार्यक्षेत्राची व अधिकारांची निश्चिती करता येईल. कलम 8 गुन्ह्यांची दखल घेण्याशी संबंधित आहे, कलम 8A पुराव्याच्या भाराशी संबंधित आहे आणि कलम 9 नियम बनवण्याच्या अधिकाराशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_marathi": "कलम 8",
        "option_english": "Section 8",
        "is_correct": false,
        "reason_english": "Section 8 of the Dowry Prohibition Act, 1961, deals with the cognizance of offences, not the appointment of officers.",
        "reason_marathi": "हुंडा प्रतिबंध अधिनियम, 1961 चे कलम 8 गुन्ह्यांची दखल घेण्याशी संबंधित आहे, अधिकाऱ्यांच्या नियुक्तीशी नाही."
      },
      {
        "option_marathi": "कलम 8A",
        "option_english": "Section 8A",
        "is_correct": false,
        "reason_english": "Section 8A deals with the burden of proof in certain cases, not the appointment of officers.",
        "reason_marathi": "कलम 8A विशिष्ट प्रकरणांमध्ये पुराव्याच्या भाराशी संबंधित आहे, अधिकाऱ्यांच्या नियुक्तीशी नाही."
      },
      {
        "option_marathi": "कलम 8B",
        "option_english": "Section 8 B",
        "is_correct": true,
        "reason_english": "Section 8B of the Dowry Prohibition Act, 1961, specifically provides for the appointment of Dowry Prohibition Officers.",
        "reason_marathi": "हुंडा प्रतिबंध अधिनियम, 1961 चे कलम 8B विशेषतः हुंडा प्रतिषेधी अधिकाऱ्यांच्या नियुक्तीची तरतूद करते."
      },
      {
        "option_marathi": "कलम 9",
        "option_english": "Section 9",
        "is_correct": false,
        "reason_english": "Section 9 deals with the power of the Central Government to make rules, not the appointment of officers.",
        "reason_marathi": "कलम 9 केंद्र सरकारला नियम बनवण्याच्या अधिकाराशी संबंधित आहे, अधिकाऱ्यांच्या नियुक्तीशी नाही."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ नुसार पोलीस अधिकाऱ्याने त्रासदायक रीतीने प्रवेश करणे, झडती घेणे, अटक करणे यासंबंधात पोलीस अधिकाऱ्याला शिक्षा करण्याची तरतुद आहे.",
    "question_english": "As per Section ______ of the Maharashtra Police Act, 1951, provision of penalty against Police Officer is given for vexatious entry, search, arrest etc.",
    "options_marathi": [
      "कलम 143",
      "कलम 143A",
      "कलम 145",
      "कलम 147"
    ],
    "options_english": [
      "Section 143",
      "Section 143A",
      "Section 145",
      "Section 147"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Penalties for Police Misconduct",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 147 of the Maharashtra Police Act, 1951, is crucial for accountability within the police force. It prescribes penalties for police officers who misuse their powers by making vexatious entries, conducting searches without proper cause, or making arrests unnecessarily. This provision aims to prevent abuse of authority and protect citizens' rights, ensuring that police actions are always justified and within legal bounds.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 147 हे पोलीस दलातील उत्तरदायित्वासाठी महत्त्वाचे आहे. हे कलम पोलीस अधिकाऱ्यांनी त्यांच्या अधिकारांचा गैरवापर करून त्रासदायक प्रवेश, योग्य कारणाशिवाय झडती घेणे किंवा अनावश्यक अटक करणे यासारख्या कृत्यांसाठी शिक्षा विहित करते. या तरतुदीचा उद्देश अधिकारांचा गैरवापर रोखणे आणि नागरिकांच्या हक्कांचे संरक्षण करणे आहे, जेणेकरून पोलिसांची कारवाई नेहमीच न्यायसंगत आणि कायदेशीर मर्यादेत असेल.",
    "options_breakdown": [
      {
        "option_english": "Section 143",
        "option_marathi": "कलम 143",
        "is_correct": false,
        "reason_english": "Section 143 deals with penalties for certain offences committed by members of the police force, but not specifically for vexatious actions like entry, search, or arrest.",
        "reason_marathi": "कलम 143 हे पोलीस दलातील सदस्यांनी केलेल्या विशिष्ट गुन्ह्यांसाठी शिक्षेशी संबंधित आहे, परंतु त्रासदायक प्रवेश, झडती किंवा अटक यांसारख्या कृतींसाठी नाही."
      },
      {
        "option_english": "Section 143A",
        "option_marathi": "कलम 143A",
        "is_correct": false,
        "reason_english": "Section 143A does not exist in the Maharashtra Police Act, 1951, for this specific provision.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मध्ये या विशिष्ट तरतुदीसाठी कलम 143A अस्तित्वात नाही."
      },
      {
        "option_english": "Section 145",
        "option_marathi": "कलम 145",
        "is_correct": false,
        "reason_english": "Section 145 deals with penalties for certain other offences, not specifically vexatious actions by police officers.",
        "reason_marathi": "कलम 145 हे इतर विशिष्ट गुन्ह्यांसाठी शिक्षेशी संबंधित आहे, पोलीस अधिकाऱ्यांच्या त्रासदायक कृतींसाठी नाही."
      },
      {
        "option_english": "Section 147",
        "option_marathi": "कलम 147",
        "is_correct": true,
        "reason_english": "Section 147 of the Maharashtra Police Act, 1951, specifically provides for penalties against police officers for vexatious entry, search, or arrest.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 147 हे पोलीस अधिकाऱ्यांनी त्रासदायक रीतीने प्रवेश करणे, झडती घेणे किंवा अटक करणे यासंबंधात शिक्षेची तरतूद करते."
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ मध्ये पायवाट न अडविण्याबाबतची तरतुद दिलेली आहे.",
    "question_english": "Under Section ______ of the Maharashtra Police Act, 1951 the provision regarding not to obstruct a footway is given.",
    "options_marathi": [
      "कलम 102",
      "कलम 103",
      "कलम 104",
      "कलम 105"
    ],
    "options_english": [
      "Section 102",
      "Section 103",
      "Section 104",
      "Section 105"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Public Order and Nuisance",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 103 of the Maharashtra Police Act, 1951, is designed to maintain public order and ensure the free movement of pedestrians. It prohibits individuals from obstructing footways, which are designated paths for walking. This provision is crucial for preventing public nuisance, ensuring safety, and facilitating smooth pedestrian traffic in urban and rural areas alike. Violations can lead to penalties, reinforcing the importance of respecting public spaces.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 103 सार्वजनिक सुव्यवस्था राखण्यासाठी आणि पादचाऱ्यांच्या मुक्त हालचाली सुनिश्चित करण्यासाठी तयार केले आहे. हे कलम व्यक्तींना पादचारी मार्ग अडवण्यास प्रतिबंध करते, जे चालण्यासाठी निश्चित केलेले मार्ग आहेत. सार्वजनिक उपद्रव टाळण्यासाठी, सुरक्षितता सुनिश्चित करण्यासाठी आणि शहरी व ग्रामीण दोन्ही भागांमध्ये पादचारी वाहतूक सुरळीत ठेवण्यासाठी ही तरतूद महत्त्वाची आहे. उल्लंघनामुळे दंड होऊ शकतो, ज्यामुळे सार्वजनिक जागांचा आदर करण्याचे महत्त्व अधोरेखित होते.",
    "options_breakdown": [
      {
        "option_english": "Section 102",
        "option_marathi": "कलम 102",
        "is_correct": false,
        "reason_english": "Section 102 deals with other public nuisances, not specifically the obstruction of footways.",
        "reason_marathi": "कलम 102 हे इतर सार्वजनिक उपद्रवांशी संबंधित आहे, विशेषतः पायवाट अडवण्याशी नाही."
      },
      {
        "option_english": "Section 103",
        "option_marathi": "कलम 103",
        "is_correct": true,
        "reason_english": "Section 103 of the Maharashtra Police Act, 1951, specifically contains the provision regarding not to obstruct a footway.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 103 विशेषतः पायवाट न अडविण्याबाबतची तरतूद करते."
      },
      {
        "option_english": "Section 104",
        "option_marathi": "कलम 104",
        "is_correct": false,
        "reason_english": "Section 104 deals with other public order issues and nuisances.",
        "reason_marathi": "कलम 104 हे इतर सार्वजनिक सुव्यवस्था आणि उपद्रवांशी संबंधित आहे."
      },
      {
        "option_english": "Section 105",
        "option_marathi": "कलम 105",
        "is_correct": false,
        "reason_english": "Section 105 deals with other public order issues and nuisances.",
        "reason_marathi": "कलम 105 हे इतर सार्वजनिक सुव्यवस्था आणि उपद्रवांशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम 1951, नुसार सर्वात कनिष्ठ दर्जाचा पोलीस अधिकारी कोण आहे ?",
    "question_english": "As per Maharashtra Police Act, 1951 who is the lowest grade Police Officer ?",
    "options_marathi": [
      "तलाठी",
      "पोलीस शिपाई",
      "कोतवाल",
      "अंमलदार"
    ],
    "options_english": [
      "Talathi",
      "Police Constable",
      "Kotwal",
      "Amaldar"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Police Hierarchy and Ranks",
    "difficulty": "Easy",
    "trap_detected": "Distractor",
    "explanation_english": "The Maharashtra Police Act, 1951, defines the structure and hierarchy of the police force in the state. Within this structure, the Police Constable holds the lowest rank among the uniformed police officers. They are the frontline personnel responsible for maintaining law and order, patrolling, and assisting in investigations. Other options like Talathi and Kotwal are government officials but do not belong to the police department as defined by this Act.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 राज्याच्या पोलीस दलाची रचना आणि पदानुक्रम परिभाषित करतो. या रचनेत, पोलीस शिपाई हा गणवेशधारी पोलीस अधिकाऱ्यांमध्ये सर्वात कनिष्ठ दर्जाचा असतो. ते कायदा व सुव्यवस्था राखणे, गस्त घालणे आणि तपासात मदत करणे यासाठी जबाबदार असलेले आघाडीचे कर्मचारी आहेत. तलाठी आणि कोतवाल यांसारखे इतर पर्याय सरकारी अधिकारी आहेत परंतु या अधिनियमानुसार ते पोलीस विभागाचे नाहीत.",
    "options_breakdown": [
      {
        "option_english": "Talathi",
        "option_marathi": "तलाठी",
        "is_correct": false,
        "reason_english": "A Talathi is a revenue officer, not a police officer, and is not appointed under the Maharashtra Police Act, 1951.",
        "reason_marathi": "तलाठी हा महसूल अधिकारी असतो, पोलीस अधिकारी नाही, आणि त्याची नियुक्ती महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत होत नाही."
      },
      {
        "option_english": "Police Constable",
        "option_marathi": "पोलीस शिपाई",
        "is_correct": true,
        "reason_english": "As per the Maharashtra Police Act, 1951, the Police Constable is the lowest grade police officer in the hierarchy.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 नुसार, पोलीस शिपाई हा पोलीस दलातील सर्वात कनिष्ठ दर्जाचा पोलीस अधिकारी आहे."
      },
      {
        "option_english": "Kotwal",
        "option_marathi": "कोतवाल",
        "is_correct": false,
        "reason_english": "A Kotwal is a village servant, not a police officer as defined by the Maharashtra Police Act, 1951.",
        "reason_marathi": "कोतवाल हा ग्रामसेवक असतो, महाराष्ट्र पोलीस अधिनियम, 1951 नुसार तो पोलीस अधिकारी नाही."
      },
      {
        "option_english": "Amaldar",
        "option_marathi": "अंमलदार",
        "is_correct": false,
        "reason_english": "Amaldar is a general term for an officer or official, but not a specific lowest rank within the police force as per the Act.",
        "reason_marathi": "अंमलदार हा अधिकारी किंवा कर्मचाऱ्यासाठी एक सामान्य शब्द आहे, परंतु अधिनियमानुसार पोलीस दलातील सर्वात कनिष्ठ विशिष्ट पद नाही."
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ नुसार प्राण्यास निर्दयतेने वागविण्यास प्रतिबंध करण्याबाबत अधिनियम 1960 मधील कलम 11 प्रमाणे पोलीस अधिपत्राशिवाय अटक करू शकतात.",
    "question_english": "Under Section ______ of the Maharashtra Police Act, 1951, the police may arrest without warrant, as per Section 11 of the Prevention of Cruelty to the Animal Act, 1960.",
    "options_marathi": [
      "कलम 66",
      "कलम 67",
      "कलम 73",
      "कलम 74"
    ],
    "options_english": [
      "Section 66",
      "Section 67",
      "Section 73",
      "Section 74"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Powers of Arrest (Inter-Act Provisions)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 73 of the Maharashtra Police Act, 1951, is an important provision that extends the powers of police officers to enforce other specific laws. It explicitly allows police to arrest individuals without a warrant if they are found committing offenses under Section 11 of the Prevention of Cruelty to Animals Act, 1960. This cross-referencing ensures that immediate action can be taken to protect animals from cruelty, highlighting the police's role in upholding animal welfare laws.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 73 ही एक महत्त्वाची तरतूद आहे जी पोलीस अधिकाऱ्यांच्या अधिकारांना इतर विशिष्ट कायद्यांची अंमलबजावणी करण्यासाठी विस्तारित करते. हे कलम पोलिसांना वॉरंटशिवाय व्यक्तींना अटक करण्याची स्पष्टपणे परवानगी देते, जर ते प्राणी क्रूरता प्रतिबंधक अधिनियम, 1960 च्या कलम 11 अंतर्गत गुन्हे करत असतील. हे क्रॉस-रेफरन्सिंग प्राण्यांना क्रूरतेपासून वाचवण्यासाठी त्वरित कारवाई केली जाऊ शकते याची खात्री करते, ज्यामुळे प्राणी कल्याण कायद्यांचे पालन करण्यात पोलिसांची भूमिका अधोरेखित होते.",
    "options_breakdown": [
      {
        "option_english": "Section 66",
        "option_marathi": "कलम 66",
        "is_correct": false,
        "reason_english": "Section 66 deals with other powers related to public assemblies and processions.",
        "reason_marathi": "कलम 66 हे सार्वजनिक सभा आणि मिरवणुकांसंबंधित इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section 67",
        "option_marathi": "कलम 67",
        "is_correct": false,
        "reason_english": "Section 67 deals with other powers of the police.",
        "reason_marathi": "कलम 67 हे पोलिसांच्या इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section 73",
        "option_marathi": "कलम 73",
        "is_correct": true,
        "reason_english": "Section 73 of the Maharashtra Police Act, 1951, grants police officers the power to arrest without warrant for offenses under Section 11 of the Prevention of Cruelty to Animals Act, 1960.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 73 हे पोलीस अधिकाऱ्यांना प्राणी क्रूरता प्रतिबंधक अधिनियम, 1960 च्या कलम 11 अंतर्गत गुन्ह्यांसाठी वॉरंटशिवाय अटक करण्याचे अधिकार देते."
      },
      {
        "option_english": "Section 74",
        "option_marathi": "कलम 74",
        "is_correct": false,
        "reason_english": "Section 74 deals with other powers of arrest and detention.",
        "reason_marathi": "कलम 74 हे अटक आणि ताब्यात घेण्याच्या इतर अधिकारांशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कोणते कलम कर्तव्य बजावण्यात हयगय वगैरे केल्याबद्दल विभागाद्वारे पोलीस दलातील दुय्यम दर्जाच्या व्यक्तींना शिक्षा करण्याशी संबंधीत आहे ?",
    "question_english": "Which Section of the Maharashtra Police Act, 1951 deals with punishment of the members of the sub-ordinate ranks of the Police force departmentally for the neglect of duty etc.?",
    "options_marathi": [
      "कलम 24",
      "कलम 23",
      "कलम 25",
      "कलम 26"
    ],
    "options_english": [
      "Section 24",
      "Section 23",
      "Section 25",
      "Section 26"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Departmental Discipline and Punishment",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 25 of the Maharashtra Police Act, 1951, is a critical provision for maintaining discipline and accountability within the police force. It empowers the department to impose punishments on members of the subordinate ranks for various forms of misconduct, including neglect of duty, insubordination, or any act prejudicial to good order and discipline. This section ensures that police personnel adhere to their professional responsibilities and that internal disciplinary actions can be taken effectively to uphold the integrity and efficiency of the force.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 25 हे पोलीस दलात शिस्त आणि उत्तरदायित्व राखण्यासाठी एक महत्त्वपूर्ण तरतूद आहे. हे कलम विभागाला कनिष्ठ दर्जाच्या कर्मचाऱ्यांवर कर्तव्य दुर्लक्ष, अवज्ञा किंवा सुव्यवस्था आणि शिस्तीला बाधा आणणाऱ्या कोणत्याही कृत्यासाठी विविध प्रकारच्या गैरवर्तनासाठी शिक्षा लादण्याचा अधिकार देते. हे कलम सुनिश्चित करते की पोलीस कर्मचारी त्यांच्या व्यावसायिक जबाबदाऱ्यांचे पालन करतात आणि दलाची सचोटी आणि कार्यक्षमता टिकवून ठेवण्यासाठी अंतर्गत शिस्तभंगाची कारवाई प्रभावीपणे केली जाऊ शकते.",
    "options_breakdown": [
      {
        "option_english": "Section 24",
        "option_marathi": "कलम 24",
        "is_correct": false,
        "reason_english": "Section 24 deals with the general duties of police officers.",
        "reason_marathi": "कलम 24 हे पोलीस अधिकाऱ्यांच्या सामान्य कर्तव्यांशी संबंधित आहे."
      },
      {
        "option_english": "Section 23",
        "option_marathi": "कलम 23",
        "is_correct": false,
        "reason_english": "Section 23 deals with the general powers of police officers.",
        "reason_marathi": "कलम 23 हे पोलीस अधिकाऱ्यांच्या सामान्य अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section 25",
        "option_marathi": "कलम 25",
        "is_correct": true,
        "reason_english": "Section 25 of the Maharashtra Police Act, 1951, specifically deals with departmental punishments for members of the subordinate ranks of the police force for neglect of duty or other misconduct.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 25 हे विशेषतः पोलीस दलातील दुय्यम दर्जाच्या व्यक्तींना कर्तव्य बजावण्यात हयगय किंवा इतर गैरवर्तनाबद्दल विभागाद्वारे शिक्षा करण्याशी संबंधित आहे."
      },
      {
        "option_english": "Section 26",
        "option_marathi": "कलम 26",
        "is_correct": false,
        "reason_english": "Section 26 deals with appeals against orders of punishment.",
        "reason_marathi": "कलम 26 हे शिक्षेच्या आदेशांविरुद्ध अपील करण्याशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ मध्ये पोलीस अधिकाऱ्यांची कर्तव्ये दिलेली आहेत.",
    "question_english": "Under Section ______ of the Maharashtra Police Act, 1951, the duties of police officer are given.",
    "options_marathi": [
      "कलम 61",
      "कलम 62",
      "कलम - 63",
      "कलम - 64"
    ],
    "options_english": [
      "Section - 61",
      "Section - 62",
      "Section - 63",
      "Section - 64"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Duties of Police Officers",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 64 of the Maharashtra Police Act, 1951, is fundamental as it comprehensively enumerates the duties and responsibilities of police officers. These duties include maintaining law and order, preventing and detecting crime, apprehending offenders, regulating traffic, and generally ensuring public peace and safety. This section serves as a guiding principle for the conduct and functions of every police officer, defining their core role in society.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 64 हे मूलभूत आहे कारण ते पोलीस अधिकाऱ्यांची कर्तव्ये आणि जबाबदाऱ्यांची विस्तृतपणे यादी करते. या कर्तव्यांमध्ये कायदा व सुव्यवस्था राखणे, गुन्हे प्रतिबंध आणि शोध घेणे, गुन्हेगारांना पकडणे, वाहतूक नियमन करणे आणि सामान्यतः सार्वजनिक शांतता व सुरक्षितता सुनिश्चित करणे यांचा समावेश आहे. हे कलम प्रत्येक पोलीस अधिकाऱ्याच्या आचरणासाठी आणि कार्यांसाठी मार्गदर्शक तत्त्व म्हणून कार्य करते, समाजात त्यांची मुख्य भूमिका परिभाषित करते.",
    "options_breakdown": [
      {
        "option_english": "Section - 61",
        "option_marathi": "कलम 61",
        "is_correct": false,
        "reason_english": "Section 61 deals with other powers related to the police force.",
        "reason_marathi": "कलम 61 हे पोलीस दलाशी संबंधित इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section - 62",
        "option_marathi": "कलम 62",
        "is_correct": false,
        "reason_english": "Section 62 deals with other powers of the police.",
        "reason_marathi": "कलम 62 हे पोलिसांच्या इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section - 63",
        "option_marathi": "कलम - 63",
        "is_correct": false,
        "reason_english": "Section 63 deals with other powers and duties, but not the general duties of police officers.",
        "reason_marathi": "कलम 63 हे इतर अधिकार आणि कर्तव्यांशी संबंधित आहे, परंतु पोलीस अधिकाऱ्यांच्या सामान्य कर्तव्यांशी नाही."
      },
      {
        "option_english": "Section - 64",
        "option_marathi": "कलम - 64",
        "is_correct": true,
        "reason_english": "Section 64 of the Maharashtra Police Act, 1951, specifically outlines the general duties of police officers.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 64 विशेषतः पोलीस अधिकाऱ्यांची सामान्य कर्तव्ये स्पष्ट करते."
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 नुसार गावातील व्यक्तींच्या संरक्षणासाठी, मालमत्तेच्या सुरक्षिततेसाठी आणि सार्वजनिक सुरक्षिततेसाठी खालीलपैकी कोणत्या स्वयंसेवी गटाची स्थापना करण्यात येऊ शकते ?",
    "question_english": "For the protection of persons, the security of property and the public safety in villages which of the following voluntary body can be constituted under Maharashtra Police Act, 1951?",
    "options_marathi": [
      "ग्राम संरक्षक गट",
      "ग्राम संरक्षक तुकडी",
      "ग्राम संरक्षक पथक",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Village Defence Group",
      "Village Defence Batch",
      "Village Defence Squad",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Village Defence Squads",
    "difficulty": "Medium",
    "trap_detected": "Similar Wordings",
    "explanation_english": "The Maharashtra Police Act, 1951, recognizes the importance of community participation in maintaining law and order, especially in rural areas. Section 63A (or related provisions) allows for the constitution of \"Village Defence Squads\" (ग्राम संरक्षक पथक). These voluntary bodies comprise local residents who assist the police in protecting persons, securing property, and ensuring public safety within their villages. They act as a crucial link between the police and the community, enhancing local security measures.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951, विशेषतः ग्रामीण भागात कायदा व सुव्यवस्था राखण्यात सामुदायिक सहभागाचे महत्त्व ओळखतो. कलम 63A (किंवा संबंधित तरतुदी) \"ग्राम संरक्षक पथक\" स्थापन करण्यास परवानगी देतात. हे स्वयंसेवी गट स्थानिक रहिवाशांचे बनलेले असतात जे व्यक्तींचे संरक्षण, मालमत्तेची सुरक्षा आणि त्यांच्या गावांमध्ये सार्वजनिक सुरक्षितता सुनिश्चित करण्यासाठी पोलिसांना मदत करतात. ते पोलीस आणि समुदाय यांच्यातील एक महत्त्वाचा दुवा म्हणून कार्य करतात, स्थानिक सुरक्षा उपाय वाढवतात.",
    "options_breakdown": [
      {
        "option_english": "Village Defence Group",
        "option_marathi": "ग्राम संरक्षक गट",
        "is_correct": false,
        "reason_english": "While conceptually similar, 'Village Defence Group' is not the specific term used in the Maharashtra Police Act, 1951.",
        "reason_marathi": "संकल्पनात्मकरित्या समान असले तरी, 'ग्राम संरक्षक गट' हा महाराष्ट्र पोलीस अधिनियम, 1951 मध्ये वापरलेला विशिष्ट शब्द नाही."
      },
      {
        "option_english": "Village Defence Batch",
        "option_marathi": "ग्राम संरक्षक तुकडी",
        "is_correct": false,
        "reason_english": "'Village Defence Batch' is not the term used in the Maharashtra Police Act, 1951, for such a body.",
        "reason_marathi": "'ग्राम संरक्षक तुकडी' हा महाराष्ट्र पोलीस अधिनियम, 1951 मध्ये अशा संस्थेसाठी वापरलेला शब्द नाही."
      },
      {
        "option_english": "Village Defence Squad",
        "option_marathi": "ग्राम संरक्षक पथक",
        "is_correct": true,
        "reason_english": "The Maharashtra Police Act, 1951, specifically provides for the constitution of 'Village Defence Squads' (ग्राम संरक्षक पथक) for the stated purposes.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 विशेषतः नमूद केलेल्या उद्देशांसाठी 'ग्राम संरक्षक पथक' स्थापन करण्याची तरतूद करतो."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी एकही नाही",
        "is_correct": false,
        "reason_english": "Option 3, 'Village Defence Squad', is the correct term as per the Act.",
        "reason_marathi": "पर्याय 3, 'ग्राम संरक्षक पथक', हा अधिनियमानुसार योग्य शब्द आहे."
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ नुसार किंवा अधीक्षक आणि इतर अधिकाऱ्यांना कोणत्याही सार्वजनिक जागेत किंवा कोणत्याही सार्वजनिक करमणुकीच्या स्थानात ध्वनिक्षेपकाचा उपयोग करण्याचे विनियमन करणे व त्यावर नियंत्रण ठेवण्याचा अधिकार दिलेला आहे.",
    "question_english": "As per Section ______ of the Maharashtra Police Act, 1951, the power to regulate and control the use of loudspeakers in or near any public place or in any place of public entertainment is given to Commissioner or the District Superintendent and other officers.",
    "options_marathi": [
      "कलम 34",
      "कलम 35",
      "कलम 36",
      "कलम 37"
    ],
    "options_english": [
      "Section 34",
      "Section 35",
      "Section 36",
      "Section 37"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Regulation of Public Nuisance (Loudspeakers)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 36 of the Maharashtra Police Act, 1951, is a vital provision for managing public order and preventing noise pollution. It empowers the Commissioner of Police, District Superintendent of Police, and other authorized officers to regulate and control the use of loudspeakers in public places or places of public entertainment. This power allows authorities to impose restrictions on volume, timing, and location of loudspeaker use, ensuring that public peace is maintained and citizens are not unduly disturbed by excessive noise.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 36 सार्वजनिक सुव्यवस्था राखण्यासाठी आणि ध्वनी प्रदूषण टाळण्यासाठी एक महत्त्वाची तरतूद आहे. हे कलम पोलीस आयुक्त, जिल्हा पोलीस अधीक्षक आणि इतर अधिकृत अधिकाऱ्यांना सार्वजनिक ठिकाणी किंवा सार्वजनिक मनोरंजनाच्या ठिकाणी ध्वनिक्षेपकांच्या वापराचे नियमन आणि नियंत्रण करण्याचे अधिकार देते. ही शक्ती अधिकाऱ्यांना ध्वनिक्षेपकांच्या आवाजाची पातळी, वेळ आणि स्थानावर निर्बंध घालण्याची परवानगी देते, ज्यामुळे सार्वजनिक शांतता राखली जाते आणि नागरिकांना जास्त आवाजामुळे त्रास होत नाही.",
    "options_breakdown": [
      {
        "option_english": "Section 34",
        "option_marathi": "कलम 34",
        "is_correct": false,
        "reason_english": "Section 34 deals with other powers related to public assemblies and processions.",
        "reason_marathi": "कलम 34 हे सार्वजनिक सभा आणि मिरवणुकांसंबंधित इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section 35",
        "option_marathi": "कलम 35",
        "is_correct": false,
        "reason_english": "Section 35 deals with other powers of the police.",
        "reason_marathi": "कलम 35 हे पोलिसांच्या इतर अधिकारांशी संबंधित आहे."
      },
      {
        "option_english": "Section 36",
        "option_marathi": "कलम 36",
        "is_correct": true,
        "reason_english": "Section 36 of the Maharashtra Police Act, 1951, specifically grants the power to regulate and control the use of loudspeakers.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 36 विशेषतः ध्वनिक्षेपकांच्या वापराचे नियमन आणि नियंत्रण करण्याचे अधिकार देते."
      },
      {
        "option_english": "Section 37",
        "option_marathi": "कलम 37",
        "is_correct": false,
        "reason_english": "Section 37 deals with other powers related to public order.",
        "reason_marathi": "कलम 37 हे सार्वजनिक सुव्यवस्थेशी संबंधित इतर अधिकारांशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम 33 नुसार सार्वजनिक ठिकाणी रहदारीच्या विनियमासाठी व सुव्यवस्था राखण्यासाठी नियमन करण्याचा अधिकार खालीलपैकी कोणास आहे ?",
    "question_english": "As per Section 33 of the Maharashtra Police Act, 1951 to whom of the following the power to regulate the traffic and for maintenance of order in public place is given ?",
    "options_marathi": [
      "जिल्हा दंडाधिकारी",
      "जिल्हा न्यायाधीश",
      "पोलीस अधिकारी",
      "आयुक्त"
    ],
    "options_english": [
      "District Magistrate",
      "District Judge",
      "Police Officer",
      "Commissioner"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Traffic Regulation and Public Order",
    "difficulty": "Medium",
    "trap_detected": "General vs. Specific",
    "explanation_english": "Section 33 of the Maharashtra Police Act, 1951, is a cornerstone for maintaining public order and managing traffic. It grants extensive powers to the Commissioner of Police (in areas under a Commissionerate) and the District Superintendent of Police (in other districts) to regulate traffic, control assemblies, and ensure general order in public places. While police officers on the ground execute these regulations, the ultimate authority and power to frame and enforce such rules are vested in these senior police officials, with the Commissioner being a key figure in urban areas.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 33 सार्वजनिक सुव्यवस्था राखण्यासाठी आणि वाहतूक व्यवस्थापनासाठी एक महत्त्वाचे कलम आहे. हे कलम पोलीस आयुक्त (आयुक्तालय क्षेत्रांमध्ये) आणि जिल्हा पोलीस अधीक्षक (इतर जिल्ह्यांमध्ये) यांना वाहतूक नियमन करणे, सभांवर नियंत्रण ठेवणे आणि सार्वजनिक ठिकाणी सामान्य सुव्यवस्था सुनिश्चित करण्याचे विस्तृत अधिकार देते. जरी मैदानावरचे पोलीस अधिकारी या नियमांची अंमलबजावणी करत असले तरी, असे नियम तयार करण्याचे आणि लागू करण्याचे अंतिम अधिकार या वरिष्ठ पोलीस अधिकाऱ्यांकडे असतात, ज्यात आयुक्त शहरी भागांमध्ये एक प्रमुख व्यक्ती असतात.",
    "options_breakdown": [
      {
        "option_english": "District Magistrate",
        "option_marathi": "जिल्हा दंडाधिकारी",
        "is_correct": false,
        "reason_english": "While District Magistrates have powers related to public order, Section 33 specifically vests these powers in police authorities like the Commissioner of Police or District Superintendent of Police.",
        "reason_marathi": "जिल्हा दंडाधिकाऱ्यांकडे सार्वजनिक सुव्यवस्थेशी संबंधित अधिकार असले तरी, कलम 33 विशेषतः हे अधिकार पोलीस आयुक्त किंवा जिल्हा पोलीस अधीक्षक यांसारख्या पोलीस अधिकाऱ्यांकडे सोपवते."
      },
      {
        "option_english": "District Judge",
        "option_marathi": "जिल्हा न्यायाधीश",
        "is_correct": false,
        "reason_english": "A District Judge is part of the judiciary and does not have powers to regulate traffic or maintain order in public places under the Maharashtra Police Act, 1951.",
        "reason_marathi": "जिल्हा न्यायाधीश हे न्यायव्यवस्थेचा भाग आहेत आणि महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत त्यांना वाहतूक नियमन किंवा सार्वजनिक ठिकाणी सुव्यवस्था राखण्याचे अधिकार नाहीत."
      },
      {
        "option_english": "Police Officer",
        "option_marathi": "पोलीस अधिकारी",
        "is_correct": false,
        "reason_english": "While police officers implement these regulations, the power to 'regulate' and 'make rules' is specifically vested in higher authorities like the Commissioner or District Superintendent, not just any 'Police Officer'.",
        "reason_marathi": "पोलीस अधिकारी या नियमांची अंमलबजावणी करत असले तरी, 'नियमन' आणि 'नियम बनवण्याचे' अधिकार विशेषतः आयुक्त किंवा जिल्हा अधीक्षकांसारख्या उच्च अधिकाऱ्यांकडे असतात, केवळ कोणत्याही 'पोलीस अधिकाऱ्याकडे' नाही."
      },
      {
        "option_english": "Commissioner",
        "option_marathi": "आयुक्त",
        "is_correct": true,
        "reason_english": "As per Section 33 of the Maharashtra Police Act, 1951, the Commissioner of Police (and District Superintendent of Police) are explicitly given the power to regulate traffic and maintain order in public places.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 33 नुसार, पोलीस आयुक्त (आणि जिल्हा पोलीस अधीक्षक) यांना सार्वजनिक ठिकाणी वाहतूक नियमन आणि सुव्यवस्था राखण्याचे अधिकार स्पष्टपणे दिलेले आहेत."
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 2 (3) च्या अनुषंगाने वेगळेपण ओळखा.",
    "question_english": "As per Section 2 (3) of the Maharashtra Police Act, 1951 find the odd man out.",
    "options_marathi": [
      "पोलीस आयुक्त",
      "जिल्हा पोलीस अधीक्षक",
      "पोलीस शिपाई",
      "महसूल आयुक्त"
    ],
    "options_english": [
      "Commissioner of Police",
      "District Superintendent of Police",
      "Police Constable",
      "Revenue Commissioner"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Maharashtra Police Act, 1951 - Definitions (Police Officer)",
    "difficulty": "Easy",
    "trap_detected": "Misinterpretation of 'Odd Man Out'",
    "explanation_english": "Section 2(3) of the Maharashtra Police Act, 1951, defines \"police officer\" as any person appointed under this Act. This definition encompasses all ranks within the police force, from the highest (like Commissioner of Police or District Superintendent of Police) to the lowest (Police Constable). The Revenue Commissioner, however, is an officer belonging to the revenue department of the state government and is not appointed under the Maharashtra Police Act. Therefore, the Revenue Commissioner is the \"odd man out\" as they are not a police officer as defined by the Act.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 2(3) \"पोलीस अधिकारी\" ची व्याख्या या अधिनियमाखाली नियुक्त केलेल्या कोणत्याही व्यक्ती अशी करते. या व्याख्येमध्ये पोलीस दलातील सर्व श्रेणींचा समावेश होतो, सर्वोच्च (पोलीस आयुक्त किंवा जिल्हा पोलीस अधीक्षक) पासून ते सर्वात कनिष्ठ (पोलीस शिपाई) पर्यंत. तथापि, महसूल आयुक्त हे राज्य सरकारच्या महसूल विभागाचे अधिकारी आहेत आणि त्यांची नियुक्ती महाराष्ट्र पोलीस अधिनियमाखाली होत नाही. त्यामुळे, महसूल आयुक्त हे \"वेगळे\" आहेत कारण ते अधिनियमानुसार पोलीस अधिकारी नाहीत.",
    "options_breakdown": [
      {
        "option_english": "Commissioner of Police",
        "option_marathi": "पोलीस आयुक्त",
        "is_correct": false,
        "reason_english": "A Commissioner of Police is a police officer appointed under the Maharashtra Police Act, 1951.",
        "reason_marathi": "पोलीस आयुक्त हे महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत नियुक्त केलेले पोलीस अधिकारी आहेत."
      },
      {
        "option_english": "District Superintendent of Police",
        "option_marathi": "जिल्हा पोलीस अधीक्षक",
        "is_correct": false,
        "reason_english": "A District Superintendent of Police is a police officer appointed under the Maharashtra Police Act, 1951.",
        "reason_marathi": "जिल्हा पोलीस अधीक्षक हे महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत नियुक्त केलेले पोलीस अधिकारी आहेत."
      },
      {
        "option_english": "Police Constable",
        "option_marathi": "पोलीस शिपाई",
        "is_correct": false,
        "reason_english": "A Police Constable is a police officer appointed under the Maharashtra Police Act, 1951.",
        "reason_marathi": "पोलीस शिपाई हे महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत नियुक्त केलेले पोलीस अधिकारी आहेत."
      },
      {
        "option_english": "Revenue Commissioner",
        "option_marathi": "महसूल आयुक्त",
        "is_correct": true,
        "reason_english": "A Revenue Commissioner is an officer of the revenue department and is not appointed as a police officer under the Maharashtra Police Act, 1951. Hence, they are the odd one out.",
        "reason_marathi": "महसूल आयुक्त हे महसूल विभागाचे अधिकारी आहेत आणि त्यांची नियुक्ती महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत पोलीस अधिकारी म्हणून होत नाही. त्यामुळे ते वेगळे आहेत."
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "भारतीय दंड संहिता 1860, मधील कलम ______ नुसार जर कोणी कबुलीजबाब जबरीने घेण्यासाठी अथवा मालमत्ता परत करण्यास जबरीने भाग पाडण्यासाठी गैर परिरोध केला तर तो शिक्षेस पात्र असतो.",
    "question_english": "As per Section ______ of the Indian Penal Code 1860, if any one does the wrongful confinement to extort confession or compel restoration of property then he is liable to punishment.",
    "options_marathi": [
      "कलम 346",
      "कलम 347",
      "कलम 348",
      "कलम 349"
    ],
    "options_english": [
      "Section 346",
      "Section 347",
      "Section 348",
      "Section 349"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Penal Code - Wrongful Confinement",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Section 348 of the Indian Penal Code, 1860, specifically deals with wrongful confinement for the purpose of extorting a confession or compelling the restoration of property. This section makes it an offense to unlawfully restrain a person with the intent to force them into making a confession or to return property. The other sections listed deal with different forms of wrongful confinement or related offenses.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 348 विशेषतः कबुलीजबाब जबरीने घेण्यासाठी किंवा मालमत्ता परत करण्यास भाग पाडण्यासाठी केलेल्या गैर परिरोधाशी संबंधित आहे. हे कलम एखाद्या व्यक्तीला कबुलीजबाब देण्यासाठी किंवा मालमत्ता परत करण्यासाठी जबरदस्ती करण्याच्या उद्देशाने बेकायदेशीरपणे ताब्यात ठेवणे हा गुन्हा ठरवते. इतर सूचीबद्ध कलमे गैर परिरोधाच्या किंवा संबंधित गुन्ह्यांच्या वेगवेगळ्या प्रकारांशी संबंधित आहेत.",
    "options_breakdown": [
      {
        "option_english": "Section 346",
        "option_marathi": "कलम 346",
        "is_correct": false,
        "reason_english": "Section 346 deals with wrongful confinement in secret, which is a specific type of wrongful confinement, but not directly for extorting confession or property.",
        "reason_marathi": "कलम 346 गुप्तपणे केलेल्या गैर परिरोधाशी संबंधित आहे, जो गैर परिरोधाचा एक विशिष्ट प्रकार आहे, परंतु कबुलीजबाब किंवा मालमत्ता जबरदस्तीने मिळवण्यासाठी नाही."
      },
      {
        "option_english": "Section 347",
        "option_marathi": "कलम 347",
        "is_correct": false,
        "reason_english": "Section 347 deals with wrongful confinement to extort property, or constrain to an illegal act, but Section 348 is more specific to extorting confession or compelling restoration of property.",
        "reason_marathi": "कलम 347 मालमत्ता जबरदस्तीने मिळवण्यासाठी किंवा बेकायदेशीर कृत्यासाठी भाग पाडण्यासाठी केलेल्या गैर परिरोधाशी संबंधित आहे, परंतु कलम 348 कबुलीजबाब जबरदस्तीने मिळवण्यासाठी किंवा मालमत्ता परत करण्यास भाग पाडण्यासाठी अधिक विशिष्ट आहे."
      },
      {
        "option_english": "Section 348",
        "option_marathi": "कलम 348",
        "is_correct": true,
        "reason_english": "This section precisely defines wrongful confinement for the purpose of extorting a confession or compelling the restoration of property, matching the question's description.",
        "reason_marathi": "हे कलम कबुलीजबाब जबरदस्तीने मिळवण्यासाठी किंवा मालमत्ता परत करण्यास भाग पाडण्यासाठी केलेल्या गैर परिरोधाची नेमकी व्याख्या करते, जी प्रश्नाच्या वर्णनाशी जुळते."
      },
      {
        "option_english": "Section 349",
        "option_marathi": "कलम 349",
        "is_correct": false,
        "reason_english": "Section 349 defines 'force' in the context of criminal law, not a specific type of wrongful confinement.",
        "reason_marathi": "कलम 349 फौजदारी कायद्याच्या संदर्भात 'बलाची' व्याख्या करते, गैर परिरोधाचा विशिष्ट प्रकार नाही."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "भारतीय दंड संहितेतील कलम 124-अ कश्याशी संबांधित आहे ?",
    "question_english": "Sec. 124-A of I.P.C. deals with",
    "options_marathi": [
      "राजद्रोह",
      "युद्ध पुकारणे",
      "शस्त्र गोळा करणे",
      "बंडाची चिथावणी देने"
    ],
    "options_english": [
      "Sedition",
      "Waging war",
      "Collecting arms",
      "Abetment of mutiny"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Penal Code - Sedition",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 124A of the Indian Penal Code, 1860, defines the offense of Sedition. It penalizes any act, words, or representations that bring or attempt to bring into hatred or contempt, or excite or attempt to excite disaffection towards the Government established by law in India. This section has been a subject of much debate and legal scrutiny over the years.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 124A राजद्रोहाच्या गुन्ह्याची व्याख्या करते. हे कलम अशा कोणत्याही कृती, शब्द किंवा प्रतिनिधित्वाला दंडित करते जे भारतात कायद्याद्वारे स्थापित सरकारबद्दल द्वेष किंवा अवमान निर्माण करतात किंवा करण्याचा प्रयत्न करतात, किंवा असंतोष निर्माण करतात किंवा करण्याचा प्रयत्न करतात. हे कलम अनेक वर्षांपासून वादविवाद आणि कायदेशीर छाननीचा विषय राहिले आहे.",
    "options_breakdown": [
      {
        "option_english": "Sedition",
        "option_marathi": "राजद्रोह",
        "is_correct": true,
        "reason_english": "Section 124A of the IPC specifically defines and deals with the offense of Sedition.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 124A विशेषतः राजद्रोहाच्या गुन्ह्याची व्याख्या करते आणि त्याच्याशी संबंधित आहे."
      },
      {
        "option_english": "Waging war",
        "option_marathi": "युद्ध पुकारणे",
        "is_correct": false,
        "reason_english": "Waging war against the Government of India is covered under Section 121 of the IPC.",
        "reason_marathi": "भारत सरकारविरुद्ध युद्ध पुकारणे हे भारतीय दंड संहितेच्या कलम 121 अंतर्गत येते."
      },
      {
        "option_english": "Collecting arms",
        "option_marathi": "शस्त्र गोळा करणे",
        "is_correct": false,
        "reason_english": "Collecting arms with the intention of waging war is covered under Section 122 of the IPC.",
        "reason_marathi": "युद्ध पुकारण्याच्या उद्देशाने शस्त्रे गोळा करणे हे भारतीय दंड संहितेच्या कलम 122 अंतर्गत येते."
      },
      {
        "option_english": "Abetment of mutiny",
        "option_marathi": "बंडाची चिथावणी देने",
        "is_correct": false,
        "reason_english": "Abetment of mutiny is covered under Section 131 of the IPC.",
        "reason_marathi": "बंडाची चिथावणी देणे हे भारतीय दंड संहितेच्या कलम 131 अंतर्गत येते."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "भारतीय दंड संहिता, 1860 मधील कलम 354 मध्ये खालील अपराध दिलेला आहे",
    "question_english": "Under Section 354 of the Indian Penal Code, 1860 the following offence is given",
    "options_marathi": [
      "अपहरण",
      "कायदेशीर पालकाच्या ताब्यातून अपहरण करणे",
      "फौजदारीपात्र बलप्रयोग",
      "स्त्रीचा विनयभंग करण्याच्या उद्देशाने तिच्यावर हमला किंवा फौजदारीपात्र बलप्रयोग करणे"
    ],
    "options_english": [
      "Kidnapping",
      "Kidnapping from lawful guardianship",
      "Criminal force",
      "Assault or criminal force to women with intent to outrage her modesty"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Penal Code - Offences against Women",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 354 of the Indian Penal Code, 1860, specifically addresses the offense of assault or criminal force to a woman with the intent to outrage her modesty. This section is crucial for protecting women from acts that violate their dignity and personal integrity. It carries significant penalties to deter such offenses.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 354 विशेषतः स्त्रीचा विनयभंग करण्याच्या उद्देशाने तिच्यावर हल्ला किंवा फौजदारीपात्र बलप्रयोग करण्याच्या गुन्ह्याशी संबंधित आहे. हे कलम महिलांना त्यांच्या प्रतिष्ठेचे आणि वैयक्तिक अखंडतेचे उल्लंघन करणाऱ्या कृत्यांपासून संरक्षण देण्यासाठी महत्त्वाचे आहे. अशा गुन्ह्यांना प्रतिबंध घालण्यासाठी यात महत्त्वपूर्ण शिक्षा आहेत.",
    "options_breakdown": [
      {
        "option_english": "Kidnapping",
        "option_marathi": "अपहरण",
        "is_correct": false,
        "reason_english": "Kidnapping is defined under Section 359 and punishable under Section 363 of the IPC.",
        "reason_marathi": "अपहरण भारतीय दंड संहितेच्या कलम 359 अंतर्गत परिभाषित केले आहे आणि कलम 363 अंतर्गत दंडनीय आहे."
      },
      {
        "option_english": "Kidnapping from lawful guardianship",
        "option_marathi": "कायदेशीर पालकाच्या ताब्यातून अपहरण करणे",
        "is_correct": false,
        "reason_english": "This is a specific type of kidnapping covered under Section 361 of the IPC.",
        "reason_marathi": "हा भारतीय दंड संहितेच्या कलम 361 अंतर्गत समाविष्ट असलेला अपहरणाचा एक विशिष्ट प्रकार आहे."
      },
      {
        "option_english": "Criminal force",
        "option_marathi": "फौजदारीपात्र बलप्रयोग",
        "is_correct": false,
        "reason_english": "Criminal force is defined under Section 350 of the IPC, while Section 354 deals with a specific application of criminal force against women.",
        "reason_marathi": "फौजदारीपात्र बलप्रयोग भारतीय दंड संहितेच्या कलम 350 अंतर्गत परिभाषित केले आहे, तर कलम 354 महिलांविरुद्ध फौजदारीपात्र बलाच्या विशिष्ट वापराशी संबंधित आहे."
      },
      {
        "option_english": "Assault or criminal force to women with intent to outrage her modesty",
        "option_marathi": "स्त्रीचा विनयभंग करण्याच्या उद्देशाने तिच्यावर हमला किंवा फौजदारीपात्र बलप्रयोग करणे",
        "is_correct": true,
        "reason_english": "This option accurately describes the offense detailed in Section 354 of the IPC.",
        "reason_marathi": "हा पर्याय भारतीय दंड संहितेच्या कलम 354 मध्ये तपशीलवार वर्णन केलेल्या गुन्ह्याचे अचूक वर्णन करतो."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "भारतीय दंड संहितेच्या कलम ______ नुसार, दोन किंवा अधिक व्यक्तींनी सार्वजनिक ठिकाणी भांडण केले, सार्वजनिक शांतता बिघडवली तर ते ______ साठी दोषी आहेत.",
    "question_english": "As per Section ______ of Indian Penal Code, if two or more persons, fight in a public place, disturb public peace, they are guilty of ______",
    "options_marathi": [
      "159/ मारामारी",
      "160 / राजद्रोह",
      "170 / षडयंत्र",
      "180 / विश्वासभंग"
    ],
    "options_english": [
      "159/ Affray",
      "160 / Sedition",
      "170 / Conspiracy",
      "180 / Breach of trust"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Penal Code - Public Tranquility",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 159 of the Indian Penal Code, 1860, defines 'Affray'. It states that when two or more persons, by fighting in a public place, disturb the public peace, they are said to commit an 'affray'. The punishment for committing affray is provided under Section 160 of the IPC.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 159 'मारामारी' (Affray) ची व्याख्या करते. यात असे म्हटले आहे की, जेव्हा दोन किंवा अधिक व्यक्ती सार्वजनिक ठिकाणी भांडण करून सार्वजनिक शांतता भंग करतात, तेव्हा त्यांनी 'मारामारी' केली असे म्हटले जाते. मारामारी केल्याबद्दलची शिक्षा भारतीय दंड संहितेच्या कलम 160 अंतर्गत दिली जाते.",
    "options_breakdown": [
      {
        "option_english": "159/ Affray",
        "option_marathi": "159/ मारामारी",
        "is_correct": true,
        "reason_english": "Section 159 defines 'Affray' as fighting in a public place and disturbing public peace, which perfectly matches the description in the question.",
        "reason_marathi": "कलम 159 'मारामारी' (Affray) ची व्याख्या सार्वजनिक ठिकाणी भांडण करून सार्वजनिक शांतता भंग करणे अशी करते, जे प्रश्नातील वर्णनाशी पूर्णपणे जुळते."
      },
      {
        "option_english": "160 / Sedition",
        "option_marathi": "160 / राजद्रोह",
        "is_correct": false,
        "reason_english": "Section 160 deals with punishment for affray, not sedition. Sedition is covered under Section 124A.",
        "reason_marathi": "कलम 160 मारामारीच्या शिक्षेशी संबंधित आहे, राजद्रोहाशी नाही. राजद्रोह कलम 124A अंतर्गत येतो."
      },
      {
        "option_english": "170 / Conspiracy",
        "option_marathi": "170 / षडयंत्र",
        "is_correct": false,
        "reason_english": "Section 170 deals with personating a public servant. Criminal conspiracy is covered under Section 120A and 120B.",
        "reason_marathi": "कलम 170 लोकसेवकाचे सोंग घेण्याशी संबंधित आहे. फौजदारी षडयंत्र कलम 120A आणि 120B अंतर्गत येते."
      },
      {
        "option_english": "180 / Breach of trust",
        "option_marathi": "180 / विश्वासभंग",
        "is_correct": false,
        "reason_english": "Section 180 deals with refusing to sign a statement. Criminal breach of trust is covered under Section 405.",
        "reason_marathi": "कलम 180 विधानावर स्वाक्षरी करण्यास नकार देण्याशी संबंधित आहे. फौजदारी विश्वासभंग कलम 405 अंतर्गत येतो."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "भारतीय दंड संहिता 1860, मधील तरतुदीनुसार जोड्या लावा. कलम तरतुद i. 300 A. दुखापत ii. 304-ब B. गर्भस्त्राव घडवून आणणे iii. 312 C. खून iv. 319 D. हुंडा बळी",
    "question_english": "As per the provisions under the Indian Penal Code 1860, match the following. Section Provision i. 300 A. Hurt ii. 304-B B. Causing miscarriage iii. 312 C. Murder iv. 319 D. Dowry death",
    "options_marathi": [
      "i-A ii - C iii-D iv – B",
      "i-D ii - A iii-B iv – C",
      "i-B ii-C iii-A iv - D",
      "i-C ii - D iii-B iv – A"
    ],
    "options_english": [
      "i-A ii-C iii-D iv - B",
      "i-D ii-A iii-B iv - C",
      "i-B ii-C iii-A iv - D",
      "i-C ii-D iii-B iv - A"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Penal Code - Offences Affecting Life and Body",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of key sections related to offenses affecting life and the human body. Section 300 defines 'Murder'. Section 304B deals with 'Dowry Death'. Section 312 pertains to 'Causing Miscarriage'. Lastly, Section 319 defines 'Hurt'. Correctly matching these provisions is essential for understanding the IPC.",
    "explanation_marathi": "हा प्रश्न जीवन आणि मानवी शरीरावर परिणाम करणाऱ्या गुन्ह्यांशी संबंधित महत्त्वाच्या कलमांच्या ज्ञानाची चाचणी घेतो. कलम 300 'खून' परिभाषित करते. कलम 304B 'हुंडा बळी' शी संबंधित आहे. कलम 312 'गर्भपात घडवून आणणे' शी संबंधित आहे. आणि कलम 319 'दुखापत' परिभाषित करते. भारतीय दंड संहिता समजून घेण्यासाठी या तरतुदी योग्यरित्या जुळवणे आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_english": "i-A ii-C iii-D iv - B",
        "option_marathi": "i-A ii - C iii-D iv – B",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 300 with Hurt and other sections.",
        "reason_marathi": "हा पर्याय कलम 300 ला दुखापतीशी आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-D ii-A iii-B iv - C",
        "option_marathi": "i-D ii - A iii-B iv – C",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 300 with Dowry death and other sections.",
        "reason_marathi": "हा पर्याय कलम 300 ला हुंडा बळीशी आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-B ii-C iii-A iv - D",
        "option_marathi": "i-B ii-C iii-A iv - D",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 300 with Causing miscarriage and other sections.",
        "reason_marathi": "हा पर्याय कलम 300 ला गर्भपात घडवून आणण्याशी आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-C ii-D iii-B iv - A",
        "option_marathi": "i-C ii - D iii-B iv – A",
        "is_correct": true,
        "reason_english": "This option correctly matches: i. 300 (Murder), ii. 304-B (Dowry death), iii. 312 (Causing miscarriage), iv. 319 (Hurt).",
        "reason_marathi": "हा पर्याय योग्यरित्या जुळवतो: i. 300 (खून), ii. 304-ब (हुंडा बळी), iii. 312 (गर्भपात घडवून आणणे), iv. 319 (दुखापत)."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "भारतीय दंड संहिता 1860, मधील कलम ______ नुसार लोक सेवकास खोटी माहिती पुरवल्यास तो गुन्हा ठरतो.",
    "question_english": "As per Section ______ of the Indian Penal Code 1860, furnishing false information to the Public Servant is an offence.",
    "options_marathi": [
      "कलम 175",
      "कलम 177",
      "कलम 180",
      "कलम 181"
    ],
    "options_english": [
      "Section 175",
      "Section 177",
      "Section 180",
      "Section 181"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Penal Code - Contempt of Lawful Authority of Public Servants",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Section 177 of the Indian Penal Code, 1860, specifically makes it an offense to furnish false information to a public servant. This is crucial for ensuring the smooth and honest functioning of public administration, as public servants rely on accurate information to perform their duties. Providing false information can impede justice or lead to incorrect decisions.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 177 विशेषतः लोकसेवकाला खोटी माहिती पुरवणे हा गुन्हा ठरवते. सार्वजनिक प्रशासनाचे सुरळीत आणि प्रामाणिक कामकाज सुनिश्चित करण्यासाठी हे महत्त्वाचे आहे, कारण लोकसेवक त्यांची कर्तव्ये पार पाडण्यासाठी अचूक माहितीवर अवलंबून असतात. खोटी माहिती दिल्याने न्यायप्रक्रियेत अडथळा येऊ शकतो किंवा चुकीचे निर्णय घेतले जाऊ शकतात.",
    "options_breakdown": [
      {
        "option_english": "Section 175",
        "option_marathi": "कलम 175",
        "is_correct": false,
        "reason_english": "Section 175 deals with intentionally omitting to produce a document to a public servant by a person legally bound to produce it.",
        "reason_marathi": "कलम 175 कायदेशीररित्या दस्तऐवज सादर करण्यास बांधील असलेल्या व्यक्तीने लोकसेवकाला दस्तऐवज सादर करण्यास हेतुपुरस्सर टाळाटाळ करण्याशी संबंधित आहे."
      },
      {
        "option_english": "Section 177",
        "option_marathi": "कलम 177",
        "is_correct": true,
        "reason_english": "This section directly addresses the offense of furnishing false information to a public servant, matching the question.",
        "reason_marathi": "हे कलम लोकसेवकाला खोटी माहिती पुरवण्याच्या गुन्ह्याशी थेट संबंधित आहे, जे प्रश्नाशी जुळते."
      },
      {
        "option_english": "Section 180",
        "option_marathi": "कलम 180",
        "is_correct": false,
        "reason_english": "Section 180 deals with refusing to sign a statement made to a public servant when legally required.",
        "reason_marathi": "कलम 180 कायदेशीररित्या आवश्यक असताना लोकसेवकाला दिलेल्या विधानावर स्वाक्षरी करण्यास नकार देण्याशी संबंधित आहे."
      },
      {
        "option_english": "Section 181",
        "option_marathi": "कलम 181",
        "is_correct": false,
        "reason_english": "Section 181 deals with false statement on oath or affirmation to a public servant.",
        "reason_marathi": "कलम 181 लोकसेवकाला शपथ किंवा प्रतिज्ञापत्रावर खोटी माहिती देण्याशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "भारतीय दंड संहिता 1860, मधील तरतुदीनुसार जोड्या लावा. कलम तरतुद i. 78 A. मृत्यु घडवून आणण्याचा उद्देश नसताना व्यक्तीच्या हितासाठी तिच्या संमतीने सद्भावपूर्वक केलेली कृती ii. 81 B. ज्यामध्ये विशिष्ट उद्देश किंवा जाणीव आवश्यक असते असा अपराध नशा चढवलेल्या व्यक्तीने केला असता iii. 86 C. अपहानी करण्याचा संभव असलेली पण गुन्हेगारी उद्देशाशिवाय आणि अन्य अपहानी होऊ नये म्हणून केलेली कृती iv. 88 D. न्यायालयाच्या न्यायनिर्णयाला किंवा आदेशाला अनुसरून केलेली कृती",
    "question_english": "As per the provisions of the Indian Penal Code 1860, match the following. Section Provision i. 78 A. Act not intended to cause death done by consent in good faith for person's benefit ii. 81 B. Offence requiring a particular intent or knowledge committed by one who is intoxicated iii. 86 C. Act likely to cause harm, but done without criminal intent and to prevent harm iv. 88 D. Act done pursuant to the judgement or order of court",
    "options_marathi": [
      "i-A ii - B iii-C iv - D",
      "i-D ii - C iii-B iv - A",
      "i-B ii - D iii-A iv - C",
      "i-A ii - B iii-D iv – C"
    ],
    "options_english": [
      "i-A ii - B iii-C iv - D",
      "i-D ii-C iii-B iv - A",
      "i-B ii-D iii-A iv - C",
      "i-A ii-B iii-D iv - C"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Penal Code - General Exceptions",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of 'General Exceptions' under the IPC, which exempt certain acts from being considered offenses. Section 78 protects acts done pursuant to a court's judgment or order. Section 81 covers acts done to prevent other harm, even if likely to cause harm, without criminal intent. Section 86 deals with offenses committed by an intoxicated person where specific intent or knowledge is required. Section 88 protects acts not intended to cause death, done by consent in good faith for a person's benefit.",
    "explanation_marathi": "हा प्रश्न भारतीय दंड संहितेतील 'सामान्य अपवाद' (General Exceptions) च्या ज्ञानाची चाचणी घेतो, जे काही कृत्यांना गुन्हा मानण्यापासून सूट देतात. कलम 78 न्यायालयाच्या न्यायनिर्णयानुसार किंवा आदेशानुसार केलेल्या कृत्यांचे संरक्षण करते. कलम 81 इतर हानी टाळण्यासाठी केलेल्या कृत्यांना लागू होते, जरी त्यामुळे हानी होण्याची शक्यता असली तरी, गुन्हेगारी उद्देशाशिवाय. कलम 86 नशेत असलेल्या व्यक्तीने केलेल्या गुन्ह्यांशी संबंधित आहे जिथे विशिष्ट उद्देश किंवा ज्ञान आवश्यक असते. कलम 88 मृत्यू घडवून आणण्याचा उद्देश नसताना, व्यक्तीच्या हितासाठी तिच्या संमतीने सद्भावपूर्वक केलेल्या कृत्यांचे संरक्षण करते.",
    "options_breakdown": [
      {
        "option_english": "i-A ii - B iii-C iv - D",
        "option_marathi": "i-A ii - B iii-C iv - D",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 78 with 'Act not intended to cause death...' and other sections.",
        "reason_marathi": "हा पर्याय कलम 78 ला 'मृत्यू घडवून आणण्याचा उद्देश नसताना केलेली कृती...' आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-D ii-C iii-B iv - A",
        "option_marathi": "i-D ii - C iii-B iv - A",
        "is_correct": true,
        "reason_english": "This option correctly matches: i. 78 (Act done pursuant to the judgment or order of court), ii. 81 (Act likely to cause harm, but done without criminal intent and to prevent harm), iii. 86 (Offence requiring a particular intent or knowledge committed by one who is intoxicated), iv. 88 (Act not intended to cause death done by consent in good faith for person's benefit).",
        "reason_marathi": "हा पर्याय योग्यरित्या जुळवतो: i. 78 (न्यायालयाच्या न्यायनिर्णयाला किंवा आदेशाला अनुसरून केलेली कृती), ii. 81 (अपहानी करण्याचा संभव असलेली पण गुन्हेगारी उद्देशाशिवाय आणि अन्य अपहानी होऊ नये म्हणून केलेली कृती), iii. 86 (ज्यामध्ये विशिष्ट उद्देश किंवा जाणीव आवश्यक असते असा अपराध नशा चढवलेल्या व्यक्तीने केला असता), iv. 88 (मृत्यू घडवून आणण्याचा उद्देश नसताना व्यक्तीच्या हितासाठी तिच्या संमतीने सद्भावपूर्वक केलेली कृती)."
      },
      {
        "option_english": "i-B ii-D iii-A iv - C",
        "option_marathi": "i-B ii - D iii-A iv - C",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 78 with 'Offence requiring a particular intent...' and other sections.",
        "reason_marathi": "हा पर्याय कलम 78 ला 'ज्यामध्ये विशिष्ट उद्देश किंवा जाणीव आवश्यक असते असा अपराध...' आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-A ii-B iii-D iv - C",
        "option_marathi": "i-A ii - B iii-D iv – C",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 78 with 'Act not intended to cause death...' and other sections.",
        "reason_marathi": "हा पर्याय कलम 78 ला 'मृत्यू घडवून आणण्याचा उद्देश नसताना केलेली कृती...' आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "भारतीय दंड संहिता 1860 कलम ______ नुसार सात वर्षावरील व बारा वर्षाखालील अपरिपक्व समजशक्ती असलेल्या बालकाची कृती अपराध होत नाही.",
    "question_english": "Under Section ______ of the Indian Penal Code 1860, the Act of a child above seven and under twelve of immature understanding is not an offence.",
    "options_marathi": [
      "कलम 80",
      "कलम 81",
      "कलम 82",
      "कलम 83"
    ],
    "options_english": [
      "Section 80",
      "Section 81",
      "Section 82",
      "Section 83"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Penal Code - General Exceptions (Infancy)",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Section 83 of the Indian Penal Code, 1860, provides for the 'doli incapax' principle for children between seven and twelve years of age. It states that an act done by a child above seven and under twelve years of age is not an offense if the child has not attained sufficient maturity of understanding to judge the nature and consequences of his conduct on that occasion. This is a crucial general exception based on the immaturity of understanding.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 83 सात ते बारा वर्षांच्या मुलांसाठी 'डोली इनकॅपॅक्स' (doli incapax) तत्त्वाची तरतूद करते. यात असे म्हटले आहे की, सात वर्षांवरील आणि बारा वर्षांखालील मुलाने केलेले कृत्य गुन्हा नाही, जर त्या मुलाने त्या प्रसंगी त्याच्या वर्तनाचे स्वरूप आणि परिणाम समजून घेण्यासाठी पुरेशी परिपक्वता प्राप्त केली नसेल. अपरिपक्व समजूतदारपणावर आधारित हा एक महत्त्वाचा सामान्य अपवाद आहे.",
    "options_breakdown": [
      {
        "option_english": "Section 80",
        "option_marathi": "कलम 80",
        "is_correct": false,
        "reason_english": "Section 80 deals with acts done by accident in doing a lawful act.",
        "reason_marathi": "कलम 80 कायदेशीर कृत्य करताना अपघाताने केलेल्या कृत्यांशी संबंधित आहे."
      },
      {
        "option_english": "Section 81",
        "option_marathi": "कलम 81",
        "is_correct": false,
        "reason_english": "Section 81 deals with acts likely to cause harm, but done without criminal intent, and to prevent other harm.",
        "reason_marathi": "कलम 81 हानी होण्याची शक्यता असलेल्या, परंतु गुन्हेगारी उद्देशाशिवाय आणि इतर हानी टाळण्यासाठी केलेल्या कृत्यांशी संबंधित आहे."
      },
      {
        "option_english": "Section 82",
        "option_marathi": "कलम 82",
        "is_correct": false,
        "reason_english": "Section 82 states that nothing is an offense which is done by a child under seven years of age (absolute immunity).",
        "reason_marathi": "कलम 82 असे सांगते की, सात वर्षांखालील मुलाने केलेले कोणतेही कृत्य गुन्हा नाही (पूर्ण प्रतिकारशक्ती)."
      },
      {
        "option_english": "Section 83",
        "option_marathi": "कलम 83",
        "is_correct": true,
        "reason_english": "This section specifically covers the act of a child above seven and under twelve of immature understanding, making it not an offense.",
        "reason_marathi": "हे कलम विशेषतः सात वर्षांवरील आणि बारा वर्षांखालील अपरिपक्व समजूतदारपणा असलेल्या मुलाच्या कृत्याला गुन्हा मानत नाही."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "भारतीय दंड संहिता, 1860 मधील तरतुदीनुसार जोड्या लावा. कलम तरतुद i. 141 A. बेकायदेशीर जमाव ii. 146 B. दंगा करणे iii. 152 C. दंगल iv. 159 D. लोक सेवक दंगा इत्यादी शमवीत असताना त्याच्यावर हमला करणे किंवा त्याला अटकाव करणे",
    "question_english": "As per the provisions of the Indian Penal Code 1860, match the following. Section Provision i. 141 A. Unlawful Assembly ii. 146 B. Rioting iii. 152 C. Affray iv. 159 D. Assaulting or obstructing public servant when suppressing riots etc.",
    "options_marathi": [
      "i-A ii - B iii-D iv - C",
      "i-A ii-B iii-C iv - D",
      "i-B ii - A iii-D iv - C",
      "i-D ii - A iii-C iv – B"
    ],
    "options_english": [
      "i-A ii - B iii-D iv - C",
      "i-A ii-B iii-C iv - D",
      "i-B ii-A iii-D iv - C",
      "i-D ii-A iii-C iv - B"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Penal Code - Offences Against Public Tranquility",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of sections related to offenses against public tranquility. Section 141 defines 'Unlawful Assembly'. Section 146 defines 'Rioting'. Section 152 deals with assaulting or obstructing a public servant when suppressing a riot. Section 159 defines 'Affray'. Correctly matching these provisions is key to understanding these offenses.",
    "explanation_marathi": "हा प्रश्न सार्वजनिक शांततेविरुद्धच्या गुन्ह्यांशी संबंधित कलमांच्या ज्ञानाची चाचणी घेतो. कलम 141 'बेकायदेशीर जमाव' परिभाषित करते. कलम 146 'दंगा करणे' परिभाषित करते. कलम 152 दंगा शमवताना लोकसेवकावर हल्ला करणे किंवा त्याला अडथळा आणण्याशी संबंधित आहे. कलम 159 'दंगल' (Affray) परिभाषित करते. या तरतुदी योग्यरित्या जुळवणे हे या गुन्ह्यांना समजून घेण्यासाठी महत्त्वाचे आहे.",
    "options_breakdown": [
      {
        "option_english": "i-A ii - B iii-D iv - C",
        "option_marathi": "i-A ii - B iii-D iv - C",
        "is_correct": true,
        "reason_english": "This option correctly matches: i. 141 (Unlawful Assembly), ii. 146 (Rioting), iii. 152 (Assaulting or obstructing public servant when suppressing riots etc.), iv. 159 (Affray).",
        "reason_marathi": "हा पर्याय योग्यरित्या जुळवतो: i. 141 (बेकायदेशीर जमाव), ii. 146 (दंगा करणे), iii. 152 (लोक सेवक दंगा इत्यादी शमवीत असताना त्याच्यावर हमला करणे किंवा त्याला अटकाव करणे), iv. 159 (दंगल)."
      },
      {
        "option_english": "i-A ii-B iii-C iv - D",
        "option_marathi": "i-A ii-B iii-C iv - D",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 152 with Affray and Section 159 with Assaulting public servant.",
        "reason_marathi": "हा पर्याय कलम 152 ला दंगलीशी आणि कलम 159 ला लोकसेवकावर हल्ला करण्याशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-B ii - A iii-D iv - C",
        "option_marathi": "i-B ii - A iii-D iv - C",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 141 with Rioting and Section 146 with Unlawful Assembly.",
        "reason_marathi": "हा पर्याय कलम 141 ला दंगा करण्याशी आणि कलम 146 ला बेकायदेशीर जमावाशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-D ii - A iii-C iv – B",
        "option_marathi": "i-D ii - A iii-C iv – B",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 141 with Assaulting public servant and other sections.",
        "reason_marathi": "हा पर्याय कलम 141 ला लोकसेवकावर हल्ला करण्याशी आणि इतर कलमांना चुकीच्या पद्धतीने जुळवतो."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "______ म्हणजे, भारतीय दंड संहितेच्या कलम ______ नुसार एखाद्या व्यक्तीला निवारा, अन्न, पेय, पैसा, दारूगोळा आणि वाहतुकीची साधने किंवा कायद्याची भीती टाळण्याचे कोणतेही साधन पुरवणे.",
    "question_english": "______ means according to Section ______ of Indian Penal Code includes supplying a person with shelter, food, drink, money, ammunition and means of conveyance or any means to evade apprehension of law.",
    "options_marathi": [
      "लांड करणे / 100",
      "भडकावणे / 42",
      "आश्रय देणे / 52 – अ",
      "मार्गदर्शन करणे / 53"
    ],
    "options_english": [
      "Pampering / 100",
      "Instigating / 42",
      "Harbouring / 52 – A",
      "Mentoring / 53"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Penal Code - Definitions",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Section 52A of the Indian Penal Code, 1860, defines the term 'Harbour'. It specifies that 'harbour' includes providing shelter, food, drink, money, clothes, arms, ammunition, or means of conveyance, or assisting a person in any way to evade apprehension. This definition is crucial for understanding offenses related to aiding and abetting criminals.",
    "explanation_marathi": "भारतीय दंड संहिता, 1860 चे कलम 52A 'आश्रय देणे' (Harbour) या शब्दाची व्याख्या करते. यात असे नमूद केले आहे की 'आश्रय देणे' म्हणजे एखाद्या व्यक्तीला निवारा, अन्न, पेय, पैसा, कपडे, शस्त्रे, दारूगोळा किंवा वाहतुकीची साधने पुरवणे, किंवा कायद्याची भीती टाळण्यासाठी कोणत्याही प्रकारे मदत करणे. गुन्हेगारांना मदत करण्याशी संबंधित गुन्हे समजून घेण्यासाठी ही व्याख्या महत्त्वाची आहे.",
    "options_breakdown": [
      {
        "option_english": "Pampering / 100",
        "option_marathi": "लांड करणे / 100",
        "is_correct": false,
        "reason_english": "Section 100 deals with the right of private defence of the body, not pampering or harbouring.",
        "reason_marathi": "कलम 100 शरीराच्या खाजगी संरक्षणाच्या अधिकाराशी संबंधित आहे, लांड करणे किंवा आश्रय देण्याशी नाही."
      },
      {
        "option_english": "Instigating / 42",
        "option_marathi": "भडकावणे / 42",
        "is_correct": false,
        "reason_english": "Section 42 defines 'local law'. Instigating is related to abetment, covered under different sections (e.g., 107).",
        "reason_marathi": "कलम 42 'स्थानिक कायद्याची' व्याख्या करते. भडकावणे हे चिथावणीशी संबंधित आहे, जे वेगवेगळ्या कलमांतर्गत (उदा. 107) येते."
      },
      {
        "option_english": "Harbouring / 52 – A",
        "option_marathi": "आश्रय देणे / 52 – अ",
        "is_correct": true,
        "reason_english": "Section 52A of the IPC defines 'Harbour' exactly as described in the question, including providing various forms of aid to evade apprehension.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 52A 'आश्रय देणे' (Harbour) ची व्याख्या प्रश्नात वर्णन केल्याप्रमाणेच करते, ज्यात कायद्याची भीती टाळण्यासाठी विविध प्रकारची मदत पुरवणे समाविष्ट आहे."
      },
      {
        "option_english": "Mentoring / 53",
        "option_marathi": "मार्गदर्शन करणे / 53",
        "is_correct": false,
        "reason_english": "Section 53 deals with punishments. Mentoring is not a legal term defined in this context.",
        "reason_marathi": "कलम 53 शिक्षांशी संबंधित आहे. मार्गदर्शन करणे ही या संदर्भात परिभाषित केलेली कायदेशीर संज्ञा नाही."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कोणत्या कलमा खाली खाजगी व्यक्ती दुसऱ्या व्यक्तीस अटक करू शकते ?",
    "question_english": "Under which Section of Code of Criminal Procedure 1973 a private person may arrest any person ?",
    "options_marathi": [
      "कलम 42",
      "कलम 43",
      "कलम 44",
      "कलम 45"
    ],
    "options_english": [
      "Section 42",
      "Section 43",
      "Section 44",
      "Section 45"
    ],
    "correct_option_index": 2,
    "subject": "Law",
    "topic": "Arrest by Private Person (Cr.P.C.)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 43 of the Code of Criminal Procedure, 1973, empowers a private person to arrest any person who, in his presence, commits a non-bailable and cognizable offence, or any proclaimed offender. After such arrest, the private person must, without unnecessary delay, hand over the arrested person to a police officer or take him to the nearest police station. This provision is crucial for maintaining law and order, allowing citizens to act in specific circumstances where immediate police intervention might not be possible.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 43 हे खाजगी व्यक्तीला, तिच्या समक्ष घडलेल्या अजामीनपात्र आणि दखलपात्र गुन्ह्यात गुंतलेल्या कोणत्याही व्यक्तीला किंवा घोषित गुन्हेगाराला अटक करण्याचा अधिकार देते. अशा अटकेनंतर, खाजगी व्यक्तीने अनावश्यक विलंब न लावता अटक केलेल्या व्यक्तीला पोलीस अधिकाऱ्याकडे सुपूर्द करणे किंवा जवळच्या पोलीस ठाण्यात घेऊन जाणे आवश्यक आहे. ही तरतूद कायदा व सुव्यवस्था राखण्यासाठी महत्त्वाची आहे, ज्यामुळे तातडीने पोलिसांची मदत उपलब्ध नसताना नागरिकांना विशिष्ट परिस्थितीत कारवाई करता येते.",
    "options_breakdown": [
      {
        "option_english": "Section 42",
        "option_marathi": "कलम 42",
        "is_correct": false,
        "reason_english": "Section 42 deals with arrest by a private person for a non-cognizable offence when the person refuses to give his name and address. It is not about general arrest power for cognizable offences.",
        "reason_marathi": "कलम 42 हे खाजगी व्यक्तीने अजामीनपात्र नसलेल्या गुन्ह्यासाठी अटक करण्याशी संबंधित आहे, जेव्हा ती व्यक्ती आपले नाव आणि पत्ता देण्यास नकार देते. हे दखलपात्र गुन्ह्यांसाठी सामान्य अटक अधिकाराबद्दल नाही."
      },
      {
        "option_english": "Section 43",
        "option_marathi": "कलम 43",
        "is_correct": true,
        "reason_english": "Section 43 of Cr.P.C. explicitly grants a private person the power to arrest any person who commits a non-bailable and cognizable offence in their presence, or any proclaimed offender.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 43 हे खाजगी व्यक्तीला तिच्या समक्ष घडलेल्या अजामीनपात्र आणि दखलपात्र गुन्ह्यात गुंतलेल्या कोणत्याही व्यक्तीला किंवा घोषित गुन्हेगाराला अटक करण्याचा अधिकार स्पष्टपणे देते."
      },
      {
        "option_english": "Section 44",
        "option_marathi": "कलम 44",
        "is_correct": false,
        "reason_english": "Section 44 deals with arrest by a Magistrate, not by a private person.",
        "reason_marathi": "कलम 44 हे दंडाधिकाऱ्याने केलेल्या अटकेशी संबंधित आहे, खाजगी व्यक्तीने केलेल्या अटकेशी नाही."
      },
      {
        "option_english": "Section 45",
        "option_marathi": "कलम 45",
        "is_correct": false,
        "reason_english": "Section 45 provides protection to members of the Armed Forces from arrest, not the power of arrest to private persons.",
        "reason_marathi": "कलम 45 हे सशस्त्र दलातील सदस्यांना अटकेपासून संरक्षण देते, खाजगी व्यक्तींना अटक करण्याचा अधिकार देत नाही."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "फौजदारी प्रक्रिया संहितेच्या कलम 6 नुसार किती प्रकारची फौजदारी न्यायालये असतात ?",
    "question_english": "How many classes of criminal courts are given under Section 6 of Cr.P.C ?",
    "options_marathi": [
      "दोन",
      "तीन",
      "चार",
      "पाच"
    ],
    "options_english": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Classes of Criminal Courts (Cr.P.C.)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 6 of the Code of Criminal Procedure, 1973, specifies the classes of Criminal Courts in India. It states that besides the High Courts and the Courts constituted under any other law, there shall be four classes of Criminal Courts: (i) Courts of Session; (ii) Judicial Magistrates of the first class, and, in any metropolitan area, Metropolitan Magistrates; (iii) Judicial Magistrates of the second class; and (iv) Executive Magistrates. This foundational section outlines the hierarchical structure of the criminal justice system at the district level.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 6 हे भारतातील फौजदारी न्यायालयांचे वर्ग निर्दिष्ट करते. ते असे नमूद करते की उच्च न्यायालये आणि इतर कोणत्याही कायद्यानुसार स्थापन केलेल्या न्यायालयांव्यतिरिक्त, फौजदारी न्यायालयांचे चार वर्ग असतील: (i) सत्र न्यायालये; (ii) प्रथम वर्ग न्यायदंडाधिकारी, आणि कोणत्याही महानगर क्षेत्रात, महानगर दंडाधिकारी; (iii) द्वितीय वर्ग न्यायदंडाधिकारी; आणि (iv) कार्यकारी दंडाधिकारी. हे मूलभूत कलम जिल्हा स्तरावरील फौजदारी न्यायव्यवस्थेची पदानुक्रमित रचना स्पष्ट करते.",
    "options_breakdown": [
      {
        "option_english": "Two",
        "option_marathi": "दोन",
        "is_correct": false,
        "reason_english": "Section 6 of Cr.P.C. specifies more than two classes of criminal courts.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 6 हे दोनपेक्षा जास्त प्रकारची फौजदारी न्यायालये निर्दिष्ट करते."
      },
      {
        "option_english": "Three",
        "option_marathi": "तीन",
        "is_correct": false,
        "reason_english": "Section 6 of Cr.P.C. specifies four classes of criminal courts, not three.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 6 हे चार प्रकारची फौजदारी न्यायालये निर्दिष्ट करते, तीन नाही."
      },
      {
        "option_english": "Four",
        "option_marathi": "चार",
        "is_correct": true,
        "reason_english": "As per Section 6 of Cr.P.C., there are four classes of Criminal Courts: Courts of Session, Judicial Magistrates of the first class/Metropolitan Magistrates, Judicial Magistrates of the second class, and Executive Magistrates.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेच्या कलम 6 नुसार, फौजदारी न्यायालयांचे चार वर्ग आहेत: सत्र न्यायालये, प्रथम वर्ग न्यायदंडाधिकारी/महानगर दंडाधिकारी, द्वितीय वर्ग न्यायदंडाधिकारी आणि कार्यकारी दंडाधिकारी."
      },
      {
        "option_english": "Five",
        "option_marathi": "पाच",
        "is_correct": false,
        "reason_english": "Section 6 of Cr.P.C. specifies four classes of criminal courts, not five.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 6 हे चार प्रकारची फौजदारी न्यायालये निर्दिष्ट करते, पाच नाही."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील जमीन व बंधपत्रे याबाबतच्या तरतुदींच्या अनुषंगाने वेगळेपण ओळखा.",
    "question_english": "As per provisions relating to bail and bonds under The Code of Criminal Procedure, 1973 find odd man out.",
    "options_marathi": [
      "कलम 436",
      "कलम 437",
      "कलम 438",
      "कलम 439"
    ],
    "options_english": [
      "Section 436",
      "Section 437",
      "Section 438",
      "Section 439"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Bail and Bonds (Cr.P.C.)",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Distinction",
    "explanation_english": "All the given sections (436, 437, 438, 439) pertain to bail and bonds under the Cr.P.C. However, Section 438 stands out as it specifically deals with 'Anticipatory Bail' (direction for grant of bail to person apprehending arrest), which is a pre-arrest bail. In contrast, Sections 436, 437, and 439 primarily deal with bail granted after arrest or appearance before a court. This conceptual difference makes Section 438 the 'odd man out' among the options.",
    "explanation_marathi": "दिलेली सर्व कलमे (436, 437, 438, 439) फौजदारी प्रक्रिया संहितेतील जामीन आणि बंधपत्रांशी संबंधित आहेत. तथापि, कलम 438 हे 'अग्रिम जामीन' (अटकेची भीती असलेल्या व्यक्तीला जामीन मंजूर करण्याबाबत निर्देश) या विशिष्ट तरतुदीशी संबंधित असल्याने वेगळे ठरते, जो अटकेपूर्वीचा जामीन आहे. याउलट, कलम 436, 437 आणि 439 प्रामुख्याने अटक किंवा न्यायालयात हजर झाल्यानंतर मंजूर केलेल्या जामिनाशी संबंधित आहेत. या वैचारिक फरकामुळे कलम 438 हे दिलेल्या पर्यायांमध्ये 'वेगळे' ठरते.",
    "options_breakdown": [
      {
        "option_english": "Section 436",
        "option_marathi": "कलम 436",
        "is_correct": false,
        "reason_english": "This section deals with bail in bailable offences, which is a form of regular bail granted after arrest.",
        "reason_marathi": "हे कलम जामीनपात्र गुन्ह्यांमधील जामिनाशी संबंधित आहे, जो अटकेनंतर मंजूर केलेला नियमित जामीन आहे."
      },
      {
        "option_english": "Section 437",
        "option_marathi": "कलम 437",
        "is_correct": false,
        "reason_english": "This section deals with when bail may be taken in case of non-bailable offences, also a form of regular bail after arrest.",
        "reason_marathi": "हे कलम अजामीनपात्र गुन्ह्यांमध्ये जामीन कधी घेतला जाऊ शकतो याबद्दल आहे, हा देखील अटकेनंतरचा नियमित जामीन आहे."
      },
      {
        "option_english": "Section 438",
        "option_marathi": "कलम 438",
        "is_correct": true,
        "reason_english": "This section specifically deals with 'Anticipatory Bail', which is a direction for grant of bail to a person apprehending arrest, making it distinct from the other sections that deal with bail after arrest.",
        "reason_marathi": "हे कलम विशेषतः 'अग्रिम जामिना'शी संबंधित आहे, जो अटकेची भीती असलेल्या व्यक्तीला जामीन मंजूर करण्याबाबतचा निर्देश आहे, ज्यामुळे ते अटकेनंतरच्या जामिनाशी संबंधित इतर कलमांपेक्षा वेगळे ठरते."
      },
      {
        "option_english": "Section 439",
        "option_marathi": "कलम 439",
        "is_correct": false,
        "reason_english": "This section grants special powers to the High Court or Court of Session regarding bail, which is also a form of post-arrest bail.",
        "reason_marathi": "हे कलम उच्च न्यायालय किंवा सत्र न्यायालयाला जामिनाबाबत विशेष अधिकार देते, जो देखील अटकेनंतरचा जामीन आहे."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील कलम ______ मध्ये न्यायालयाला दोषीपात्रत फेरबदल करण्याचा अधिकार दिलेला आहे.",
    "question_english": "Under Section ______ of the Code of Criminal Procedure, 1973 the court has power to alter the charge.",
    "options_marathi": [
      "कलम 211",
      "कलम 213",
      "कलम 215",
      "कलम 216"
    ],
    "options_english": [
      "Section 211",
      "Section 213",
      "Section 215",
      "Section 216"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Alteration of Charge (Cr.P.C.)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 216 of the Code of Criminal Procedure, 1973, explicitly grants the court the power to alter or add to any charge at any time before judgment is pronounced. This provision ensures flexibility in the trial process, allowing the court to modify charges based on evidence that emerges during the proceedings, provided the accused is given a fair opportunity to defend against the altered or added charge. This is a crucial aspect of ensuring justice and fairness in criminal trials.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 216 हे न्यायालयाला निकाल देण्यापूर्वी कोणत्याही वेळी कोणत्याही आरोपात बदल करण्याचा किंवा नवीन आरोप जोडण्याचा अधिकार स्पष्टपणे देते. ही तरतूद खटल्याच्या प्रक्रियेत लवचिकता सुनिश्चित करते, ज्यामुळे कार्यवाहीदरम्यान समोर आलेल्या पुराव्यांवर आधारित आरोप बदलण्याची किंवा जोडण्याची परवानगी मिळते, बशर्ते आरोपीला बदललेल्या किंवा जोडलेल्या आरोपांविरुद्ध बचाव करण्याची योग्य संधी दिली जाते. फौजदारी खटल्यांमध्ये न्याय आणि निष्पक्षता सुनिश्चित करण्यासाठी हा एक महत्त्वाचा पैलू आहे.",
    "options_breakdown": [
      {
        "option_english": "Section 211",
        "option_marathi": "कलम 211",
        "is_correct": false,
        "reason_english": "Section 211 deals with the content of the charge, not the power to alter it.",
        "reason_marathi": "कलम 211 हे आरोपाच्या आशयाशी संबंधित आहे, त्यात बदल करण्याच्या अधिकाराशी नाही."
      },
      {
        "option_english": "Section 213",
        "option_marathi": "कलम 213",
        "is_correct": false,
        "reason_english": "Section 213 deals with the effect of errors in the charge, not the power to alter it.",
        "reason_marathi": "कलम 213 हे आरोपातील चुकांच्या परिणामांशी संबंधित आहे, त्यात बदल करण्याच्या अधिकाराशी नाही."
      },
      {
        "option_english": "Section 215",
        "option_marathi": "कलम 215",
        "is_correct": false,
        "reason_english": "Section 215 deals with the effect of errors in the charge when it is material, not the power to alter it.",
        "reason_marathi": "कलम 215 हे आरोपातील चुकांच्या परिणामांशी संबंधित आहे जेव्हा त्या महत्त्वाच्या असतात, त्यात बदल करण्याच्या अधिकाराशी नाही."
      },
      {
        "option_english": "Section 216",
        "option_marathi": "कलम 216",
        "is_correct": true,
        "reason_english": "Section 216 of Cr.P.C. explicitly states that 'Court may alter charge' at any time before judgment is pronounced.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 216 स्पष्टपणे नमूद करते की 'न्यायालय निकाल देण्यापूर्वी कोणत्याही वेळी आरोपात बदल करू शकते'."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील कलम 2 (वअ) मधील संज्ञा 'बळी' च्या अनुषंगाने वेगळेपण ओळखा.",
    "question_english": "Find odd man out regarding the term 'victim' under Section 2 (wa) of The Code of Criminal Procedure, 1973.",
    "options_marathi": [
      "बळी",
      "बळीचे पालक",
      "बळीचे मित्र",
      "बळीचे कायदेशीर वारस"
    ],
    "options_english": [
      "victim",
      "guardians of victim",
      "friends of victim",
      "legal heirs of victim"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Definition of 'Victim' (Cr.P.C.)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 2(wa) of the Code of Criminal Procedure, 1973, defines 'victim' as a person who has suffered any loss or injury caused by reason of the act or omission for which the accused person has been charged. Importantly, the explanation clarifies that the expression 'victim' includes his or her guardian or legal heir. Friends of the victim are not explicitly included in this definition, making 'friends of victim' the odd one out.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 2(वअ) 'बळी' या संज्ञेची व्याख्या अशा व्यक्ती म्हणून करते ज्याला आरोपी व्यक्तीवर आरोप असलेल्या कृत्यामुळे किंवा वगळल्यामुळे कोणताही तोटा किंवा दुखापत झाली आहे. महत्त्वाचे म्हणजे, स्पष्टीकरणानुसार 'बळी' या अभिव्यक्तीमध्ये त्याचे किंवा तिचे पालक किंवा कायदेशीर वारस यांचा समावेश होतो. बळीचे मित्र या व्याख्येत स्पष्टपणे समाविष्ट नाहीत, त्यामुळे 'बळीचे मित्र' हा वेगळा पर्याय आहे.",
    "options_breakdown": [
      {
        "option_english": "victim",
        "option_marathi": "बळी",
        "is_correct": false,
        "reason_english": "The term 'victim' itself is the primary subject of the definition under Section 2(wa).",
        "reason_marathi": "कलम 2(वअ) अंतर्गत 'बळी' ही संज्ञाच व्याख्येचा मुख्य विषय आहे."
      },
      {
        "option_english": "guardians of victim",
        "option_marathi": "बळीचे पालक",
        "is_correct": false,
        "reason_english": "Section 2(wa) explicitly states that the expression 'victim' includes his or her guardian.",
        "reason_marathi": "कलम 2(वअ) स्पष्टपणे नमूद करते की 'बळी' या अभिव्यक्तीमध्ये त्याचे किंवा तिचे पालक समाविष्ट आहेत."
      },
      {
        "option_english": "friends of victim",
        "option_marathi": "बळीचे मित्र",
        "is_correct": true,
        "reason_english": "The definition of 'victim' under Section 2(wa) of Cr.P.C. does not include 'friends of victim'. It only includes the victim, their guardian, or legal heir.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेच्या कलम 2(वअ) अंतर्गत 'बळी' च्या व्याख्येत 'बळीचे मित्र' समाविष्ट नाहीत. त्यात फक्त बळी, त्याचे पालक किंवा कायदेशीर वारस यांचा समावेश आहे."
      },
      {
        "option_english": "legal heirs of victim",
        "option_marathi": "बळीचे कायदेशीर वारस",
        "is_correct": false,
        "reason_english": "Section 2(wa) explicitly states that the expression 'victim' includes his or her legal heir.",
        "reason_marathi": "कलम 2(वअ) स्पष्टपणे नमूद करते की 'बळी' या अभिव्यक्तीमध्ये त्याचे किंवा तिचे कायदेशीर वारस समाविष्ट आहेत."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "फौजदारी प्रक्रीया संहिता, 1973 मधील तरतुदीनुसार जोड्या लावा. कलम तरतुद i. 170 A. अन्वेषणातील कार्यवाहीचा रोजनामा ii. 172 B. जेव्हा पुरावा पुरेसा असेल तेंव्हा दंडाधिकाऱ्याकडे पाठवावयाची प्रकरणे iii. 173 C. आत्महत्या, इत्यादीबाबत पोलिसांनी चौकशी करणे व अहवाल देणे iv. 174 D. अन्वेषण पूर्ण झाळ्यावर पोलीस अधिकाऱ्याचा अहवाल",
    "question_english": "Match the following regarding the provisions of the Code of Criminal Procedure, 1973. Section Provision i. 170 a. Diary of proceedings in investigation ii. 172 b. Cases to be sent to magistrate when evidence is sufficient iii. 173 c. Police to inquire and report on suicide etc. iv. 174 d. Report of police officer on completion of investigation",
    "options_marathi": [
      "i-अ ii – क iii - ड iv - ब",
      "i-ब ii - क iii - ड iv - अ",
      "i-ब ii - ड iii – क iv - अ",
      "i-ब ii - अ iii - ड iv - क"
    ],
    "options_english": [
      "i-a ii-c iii - d iv - b",
      "i-b ii - c iii - d iv - a",
      "i-b ii - d iii - c iv - a",
      "i-b ii - a iii - d iv - c"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Police Investigation Procedures (Cr.P.C.)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question requires precise knowledge of specific sections within the Cr.P.C. related to police investigation procedures. Section 170 deals with sending cases to a Magistrate when evidence is sufficient. Section 172 mandates the maintenance of a diary of proceedings in investigation. Section 173 outlines the police officer's report on completion of investigation (commonly known as a charge sheet). Section 174 details the police's duty to inquire and report on suicides, etc. Matching these correctly is crucial for understanding the investigative framework.",
    "explanation_marathi": "या प्रश्नासाठी फौजदारी प्रक्रिया संहितेतील पोलीस तपास प्रक्रियेशी संबंधित विशिष्ट कलमांचे अचूक ज्ञान आवश्यक आहे. कलम 170 हे पुरावा पुरेसा असताना प्रकरणे दंडाधिकाऱ्याकडे पाठवण्याशी संबंधित आहे. कलम 172 अन्वेषणातील कार्यवाहीचा रोजनामा (डायरी) ठेवणे बंधनकारक करते. कलम 173 अन्वेषण पूर्ण झाल्यावर पोलीस अधिकाऱ्याच्या अहवालाची (सामान्यतः आरोपपत्र म्हणून ओळखले जाते) रूपरेषा दर्शवते. कलम 174 आत्महत्येची चौकशी करणे आणि अहवाल देणे या पोलिसांच्या कर्तव्याचे तपशील देते. तपास चौकटी समजून घेण्यासाठी यांची योग्य जुळणी करणे महत्त्वाचे आहे.",
    "options_breakdown": [
      {
        "option_english": "i-a ii-c iii - d iv - b",
        "option_marathi": "i-अ ii – क iii - ड iv - ब",
        "is_correct": false,
        "reason_english": "This option incorrectly matches several sections with their provisions.",
        "reason_marathi": "हा पर्याय अनेक कलमांना त्यांच्या तरतुदींशी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-b ii - c iii - d iv - a",
        "option_marathi": "i-ब ii - क iii - ड iv - अ",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 172 and 174.",
        "reason_marathi": "हा पर्याय कलम 172 आणि 174 ला चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-b ii - d iii - c iv - a",
        "option_marathi": "i-ब ii - ड iii – क iv - अ",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Section 172, 173 and 174.",
        "reason_marathi": "हा पर्याय कलम 172, 173 आणि 174 ला चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "i-b ii - a iii - d iv - c",
        "option_marathi": "i-ब ii - अ iii - ड iv - क",
        "is_correct": true,
        "reason_english": "Correct matches are: i. 170 - b. Cases to be sent to magistrate when evidence is sufficient; ii. 172 - a. Diary of proceedings in investigation; iii. 173 - d. Report of police officer on completion of investigation; iv. 174 - c. Police to inquire and report on suicide etc.",
        "reason_marathi": "योग्य जुळण्या आहेत: i. 170 - ब. जेव्हा पुरावा पुरेसा असेल तेंव्हा दंडाधिकाऱ्याकडे पाठवावयाची प्रकरणे; ii. 172 - अ. अन्वेषणातील कार्यवाहीचा रोजनामा; iii. 173 - ड. अन्वेषण पूर्ण झाळ्यावर पोलीस अधिकाऱ्याचा अहवाल; iv. 174 - क. आत्महत्या, इत्यादीबाबत पोलिसांनी चौकशी करणे व अहवाल देणे."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील कलम 196 नुसार देशविरोधी अपराधांबद्दल व असा अपराध करण्याविषयीच्या फौजदारीपात्र कटाच्या खटल्याच्या अनुषंगाने वेगळेपण ओळखा.",
    "question_english": "As per Section 196 of the Code of Criminal Procedure, 1973 relating to prosecution for offences against the state and for criminal conspiracy to commit such offence, find odd man out.",
    "options_marathi": [
      "भारतीय दंड संहिता, 1860 कलम 120 B",
      "भारतीय दंड संहिता, 1860 कलम 153 A",
      "भारतीय दंड संहिता, 1860 कलम 495",
      "भारतीय दंड संहिता, 1860 कलम 505"
    ],
    "options_english": [
      "The Indian Penal Code, 1860 Section 120 B",
      "The Indian Penal Code, 1860 Section 153 A",
      "The Indian Penal Code, 1860 Section 495",
      "The Indian Penal Code, 1860 Section 505"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Sanction for Prosecution (Offences against State) (Cr.P.C. & IPC)",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Mismatch",
    "explanation_english": "Section 196 of Cr.P.C. deals with the requirement of sanction for prosecution for offences against the State and for criminal conspiracy to commit such offences. The listed IPC sections (120B, 153A, 505) are typically considered offences against the State or public tranquility, requiring government sanction for prosecution. However, Section 495 of the IPC deals with 'Same offence with concealment of former marriage from person with whom subsequent marriage is contracted' (Bigamy), which is a private offence related to marriage and has no connection to offences against the State. Therefore, Section 495 is the odd one out.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 196 हे राज्याविरुद्धच्या गुन्ह्यांसाठी आणि असे गुन्हे करण्याच्या फौजदारी कटासाठी खटला चालवण्यासाठी मंजुरीच्या आवश्यकतेशी संबंधित आहे. सूचीबद्ध केलेली भारतीय दंड संहितेची कलमे (120B, 153A, 505) सामान्यतः राज्याविरुद्धचे किंवा सार्वजनिक शांततेविरुद्धचे गुन्हे मानले जातात, ज्यासाठी खटला चालवण्यासाठी सरकारी मंजुरी आवश्यक असते. तथापि, भारतीय दंड संहितेचे कलम 495 हे 'मागील विवाहाची माहिती लपवून दुसऱ्या व्यक्तीशी विवाह करणे' (द्विविवाह) या खाजगी गुन्ह्याशी संबंधित आहे, जो विवाहाशी संबंधित आहे आणि राज्याविरुद्धच्या गुन्ह्यांशी त्याचा कोणताही संबंध नाही. त्यामुळे, कलम 495 हे वेगळे आहे.",
    "options_breakdown": [
      {
        "option_english": "The Indian Penal Code, 1860 Section 120 B",
        "option_marathi": "भारतीय दंड संहिता, 1860 कलम 120 B",
        "is_correct": false,
        "reason_english": "Section 120B IPC (Punishment of criminal conspiracy) can be an offence against the state, falling under the purview of Section 196 Cr.P.C.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 120B (फौजदारी कटाची शिक्षा) हा राज्याविरुद्धचा गुन्हा असू शकतो, जो फौजदारी प्रक्रिया संहितेच्या कलम 196 च्या कक्षेत येतो."
      },
      {
        "option_english": "The Indian Penal Code, 1860 Section 153 A",
        "option_marathi": "भारतीय दंड संहिता, 1860 कलम 153 A",
        "is_correct": false,
        "reason_english": "Section 153A IPC (Promoting enmity between different groups) is an offence against public tranquility/state, falling under the purview of Section 196 Cr.P.C.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 153A (विविध गटांमध्ये शत्रुत्व वाढवणे) हा सार्वजनिक शांतता/राज्याविरुद्धचा गुन्हा आहे, जो फौजदारी प्रक्रिया संहितेच्या कलम 196 च्या कक्षेत येतो."
      },
      {
        "option_english": "The Indian Penal Code, 1860 Section 495",
        "option_marathi": "भारतीय दंड संहिता, 1860 कलम 495",
        "is_correct": true,
        "reason_english": "Section 495 IPC deals with bigamy (concealment of former marriage) and is not an offence against the State or related to criminal conspiracy against the State, making it the odd one out in the context of Section 196 Cr.P.C.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 495 हे द्विविवाहाशी (मागील विवाहाची माहिती लपवणे) संबंधित आहे आणि तो राज्याविरुद्धचा गुन्हा नाही किंवा राज्याविरुद्धच्या फौजदारी कटाशी संबंधित नाही, ज्यामुळे फौजदारी प्रक्रिया संहितेच्या कलम 196 च्या संदर्भात तो वेगळा ठरतो."
      },
      {
        "option_english": "The Indian Penal Code, 1860 Section 505",
        "option_marathi": "भारतीय दंड संहिता, 1860 कलम 505",
        "is_correct": false,
        "reason_english": "Section 505 IPC (Statements conducing to public mischief) is an offence against public tranquility/state, falling under the purview of Section 196 Cr.P.C.",
        "reason_marathi": "भारतीय दंड संहितेचे कलम 505 (सार्वजनिक उपद्रव निर्माण करणारी विधाने) हा सार्वजनिक शांतता/राज्याविरुद्धचा गुन्हा आहे, जो फौजदारी प्रक्रिया संहितेच्या कलम 196 च्या कक्षेत येतो."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील कलम ______ मध्ये दखलपात्र अपराध करण्यास प्रतिबंध करण्यासाठी अटक करण्याचा अधिकार पोलीस अधिकाऱ्यास दिलेला आहे.",
    "question_english": "Under Section ______ of the Code of Criminal Procedure, 1973 the power of arrest is given to police officer to prevent the commission of cognizable offences.",
    "options_marathi": [
      "कलम 149",
      "कलम 150",
      "कलम 151",
      "कलम 152"
    ],
    "options_english": [
      "Section 149",
      "Section 150",
      "Section 151",
      "Section 152"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Preventive Arrest (Cr.P.C.)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 151 of the Code of Criminal Procedure, 1973, grants a police officer the power to arrest a person without a warrant if the officer knows that the person is designing to commit a cognizable offence and it appears to the officer that the commission of the offence cannot be otherwise prevented. This is a crucial preventive power aimed at stopping crimes before they occur, thereby maintaining public order and safety.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 151 हे पोलीस अधिकाऱ्याला वॉरंटशिवाय एखाद्या व्यक्तीला अटक करण्याचा अधिकार देते, जर अधिकाऱ्याला माहित असेल की ती व्यक्ती दखलपात्र गुन्हा करण्याचा कट रचत आहे आणि अधिकाऱ्याला असे वाटत असेल की अन्यथा तो गुन्हा रोखता येणार नाही. ही एक महत्त्वाची प्रतिबंधात्मक शक्ती आहे, ज्याचा उद्देश गुन्हे घडण्यापूर्वीच थांबवणे आहे, ज्यामुळे सार्वजनिक सुव्यवस्था आणि सुरक्षितता राखली जाते.",
    "options_breakdown": [
      {
        "option_english": "Section 149",
        "option_marathi": "कलम 149",
        "is_correct": false,
        "reason_english": "Section 149 deals with police to prevent cognizable offences, but not specifically the power of arrest for prevention.",
        "reason_marathi": "कलम 149 हे दखलपात्र गुन्हे रोखण्यासाठी पोलिसांशी संबंधित आहे, परंतु प्रतिबंधासाठी अटकेच्या अधिकाराशी विशेषतः नाही."
      },
      {
        "option_english": "Section 150",
        "option_marathi": "कलम 150",
        "is_correct": false,
        "reason_english": "Section 150 deals with information of design to commit cognizable offences, requiring police to inform superiors, not the power of arrest.",
        "reason_marathi": "कलम 150 हे दखलपात्र गुन्हे करण्याच्या कटाच्या माहितीशी संबंधित आहे, ज्यात पोलिसांना वरिष्ठांना माहिती देण्याची आवश्यकता असते, अटकेच्या अधिकाराशी नाही."
      },
      {
        "option_english": "Section 151",
        "option_marathi": "कलम 151",
        "is_correct": true,
        "reason_english": "Section 151 of Cr.P.C. explicitly grants a police officer the power to arrest without orders from a Magistrate and without a warrant, to prevent the commission of a cognizable offence.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 151 हे पोलीस अधिकाऱ्याला दंडाधिकाऱ्याच्या आदेशाशिवाय आणि वॉरंटशिवाय, दखलपात्र गुन्हा घडण्यापासून रोखण्यासाठी अटक करण्याचा अधिकार स्पष्टपणे देते."
      },
      {
        "option_english": "Section 152",
        "option_marathi": "कलम 152",
        "is_correct": false,
        "reason_english": "Section 152 deals with prevention of injury to public property, not the general power of arrest to prevent cognizable offences.",
        "reason_marathi": "कलम 152 हे सार्वजनिक मालमत्तेचे नुकसान टाळण्याशी संबंधित आहे, दखलपात्र गुन्हे रोखण्यासाठी अटकेच्या सामान्य अधिकाराशी नाही."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 च्या कलम 20 नुसार राज्य सरकार एखाद्या जिल्ह्यात कार्यकारी दंडाधिकारी म्हणून किती व्यक्तींची नियुक्ती करू शकते ?",
    "question_english": "According to Section 20 of Code of Criminal Procedure, 1973, the State Government may appoint how many persons as Executive Magistrate in a district?",
    "options_marathi": [
      "पाच पेक्षा कमी",
      "सात पेक्षा कमी",
      "दहा पेक्षा कमी",
      "राज्य शासनास योग्य वाटतील तितक्या व्यक्तींची"
    ],
    "options_english": [
      "less than five",
      "less than seven",
      "less than ten",
      "as many persons as State Government thinks fit"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Executive Magistrates (Cr.P.C.)",
    "difficulty": "Easy",
    "trap_detected": "Numerical Options",
    "explanation_english": "Section 20(1) of the Code of Criminal Procedure, 1973, clearly states that 'The State Government may appoint as many persons as it thinks fit to be Executive Magistrates for every district and for every metropolitan area.' This provision grants the State Government complete discretion in determining the number of Executive Magistrates required, based on administrative needs and workload, without any specific numerical limit.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 20(1) स्पष्टपणे नमूद करते की 'राज्य सरकार प्रत्येक जिल्ह्यासाठी आणि प्रत्येक महानगर क्षेत्रासाठी कार्यकारी दंडाधिकारी म्हणून योग्य वाटतील तितक्या व्यक्तींची नियुक्ती करू शकते.' ही तरतूद राज्य सरकारला प्रशासकीय गरजा आणि कार्यभारावर आधारित कार्यकारी दंडाधिकाऱ्यांची संख्या निश्चित करण्यासाठी पूर्ण विवेकबुद्धी देते, कोणत्याही विशिष्ट संख्यात्मक मर्यादेशिवाय.",
    "options_breakdown": [
      {
        "option_english": "less than five",
        "option_marathi": "पाच पेक्षा कमी",
        "is_correct": false,
        "reason_english": "Section 20 of Cr.P.C. does not specify a numerical limit like 'less than five'.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 20 'पाच पेक्षा कमी' अशी संख्यात्मक मर्यादा निर्दिष्ट करत नाही."
      },
      {
        "option_english": "less than seven",
        "option_marathi": "सात पेक्षा कमी",
        "is_correct": false,
        "reason_english": "Section 20 of Cr.P.C. does not specify a numerical limit like 'less than seven'.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 20 'सात पेक्षा कमी' अशी संख्यात्मक मर्यादा निर्दिष्ट करत नाही."
      },
      {
        "option_english": "less than ten",
        "option_marathi": "दहा पेक्षा कमी",
        "is_correct": false,
        "reason_english": "Section 20 of Cr.P.C. does not specify a numerical limit like 'less than ten'.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 20 'दहा पेक्षा कमी' अशी संख्यात्मक मर्यादा निर्दिष्ट करत नाही."
      },
      {
        "option_english": "as many persons as State Government thinks fit",
        "option_marathi": "राज्य शासनास योग्य वाटतील तितक्या व्यक्तींची",
        "is_correct": true,
        "reason_english": "Section 20(1) of Cr.P.C. clearly states that the State Government may appoint 'as many persons as it thinks fit' to be Executive Magistrates.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 20(1) स्पष्टपणे नमूद करते की राज्य सरकार 'योग्य वाटतील तितक्या व्यक्तींची' कार्यकारी दंडाधिकारी म्हणून नियुक्ती करू शकते."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मधील प्रकरण ______ मध्ये विवक्षित प्रकरणांमधील सहाय्यासाठी अन्योन्य व्यवस्था आणि संपत्तीच्या जप्तीसाठी आणि समपहरणासाठी कार्यवाही दिलेली आहे.",
    "question_english": "Under Chapter ______ of the Code of Criminal Procedure, 1973 the reciprocal arrangements for assistance in certain matters and procedures for attachment and forfeiture of property is given.",
    "options_marathi": [
      "प्रकरण 7A",
      "प्रकरण 7B",
      "प्रकरण 7C",
      "प्रकरण 8"
    ],
    "options_english": [
      "Chapter 7A",
      "Chapter 7B",
      "Chapter 7C",
      "Chapter 8"
    ],
    "correct_option_index": 1,
    "subject": "Law",
    "topic": "Reciprocal Arrangements and Property Forfeiture (Cr.P.C.)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Chapter VIIA (7A) of the Code of Criminal Procedure, 1973, which was inserted by the Code of Criminal Procedure (Amendment) Act, 2005, deals with 'Reciprocal arrangements for assistance in certain matters and procedure for attachment and forfeiture of property'. This chapter facilitates international cooperation in criminal matters, allowing for mutual legal assistance and the attachment or forfeiture of property involved in cross-border crimes.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण VIIA (7A), जे फौजदारी प्रक्रिया (सुधारणा) अधिनियम, 2005 द्वारे समाविष्ट करण्यात आले आहे, ते 'विवक्षित प्रकरणांमधील सहाय्यासाठी अन्योन्य व्यवस्था आणि संपत्तीच्या जप्तीसाठी आणि समपहरणासाठी कार्यवाही' या तरतुदींशी संबंधित आहे. हे प्रकरण फौजदारी प्रकरणांमध्ये आंतरराष्ट्रीय सहकार्याची सोय करते, ज्यामुळे परस्पर कायदेशीर मदत आणि सीमापार गुन्ह्यांमध्ये गुंतलेल्या मालमत्तेची जप्ती किंवा समपहरण शक्य होते.",
    "options_breakdown": [
      {
        "option_english": "Chapter 7A",
        "option_marathi": "प्रकरण 7A",
        "is_correct": true,
        "reason_english": "Chapter VIIA (7A) of Cr.P.C. specifically covers reciprocal arrangements for assistance in certain matters and procedures for attachment and forfeiture of property.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे प्रकरण VIIA (7A) विशेषतः विवक्षित प्रकरणांमधील सहाय्यासाठी अन्योन्य व्यवस्था आणि संपत्तीच्या जप्तीसाठी आणि समपहरणासाठी कार्यवाही समाविष्ट करते."
      },
      {
        "option_english": "Chapter 7B",
        "option_marathi": "प्रकरण 7B",
        "is_correct": false,
        "reason_english": "Chapter 7B does not exist in the Cr.P.C. for this subject matter.",
        "reason_marathi": "या विषयासाठी फौजदारी प्रक्रिया संहितेमध्ये प्रकरण 7B अस्तित्वात नाही."
      },
      {
        "option_english": "Chapter 7C",
        "option_marathi": "प्रकरण 7C",
        "is_correct": false,
        "reason_english": "Chapter 7C does not exist in the Cr.P.C. for this subject matter.",
        "reason_marathi": "या विषयासाठी फौजदारी प्रक्रिया संहितेमध्ये प्रकरण 7C अस्तित्वात नाही."
      },
      {
        "option_english": "Chapter 8",
        "option_marathi": "प्रकरण 8",
        "is_correct": false,
        "reason_english": "Chapter VIII of Cr.P.C. deals with 'Security for keeping the peace and for good behaviour', not reciprocal arrangements or property forfeiture.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे प्रकरण VIII हे 'शांतता राखण्यासाठी आणि चांगल्या वर्तनासाठी सुरक्षा' या तरतुदींशी संबंधित आहे, अन्योन्य व्यवस्था किंवा मालमत्ता जप्तीशी नाही."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "भारतीय पुरावा कायद्यानुसार खालीलपैकी कोणते विधान/विधाने बरोबर नाही/त ? अ. लेखन एक दस्तऐवज आहे ब. मुद्रित, निक्षेपाग्र केलेले किंवा छायाचित्रित केलेले शब्द दस्तऐवज आहेत क. नकाशा हा दस्तऐवज नाही ड. धातूच्या पट्टीवरील किंवा दगडावरील शिलालेख हा एक दस्तऐवज आहे इ. व्यंगचित्र हा दस्तऐवज नाही",
    "question_english": "As per Indian Evidence Act, which of the statement given below is/are not correct ? A. A writing is a document B. Words printed, lithographed or photographed are documents C. A map is not a document D. An inscription on a metal plate or stone is a document E. A caricature is not a document",
    "options_marathi": [
      "अ आणि ड",
      "क आणि इ",
      "ब आणि ड",
      "अ आणि ब"
    ],
    "options_english": [
      "A and D",
      "C and E",
      "B and D",
      "A and B"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Definition of Document",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "According to Section 3 of the Indian Evidence Act, 1872, a 'document' includes any matter expressed or described upon any substance by means of letters, figures, or marks. The illustrations provided in the Act clearly state that a writing, words printed, lithographed or photographed, a map or plan, an inscription on a metal plate or stone, and a caricature are all documents. Therefore, statements C ('A map is not a document') and E ('A caricature is not a document') are incorrect. The question asks for statements that are NOT correct, making option 2 (C and E) the correct answer.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 च्या कलम 3 नुसार, 'दस्तऐवज' म्हणजे अक्षरे, आकडे किंवा चिन्हे वापरून कोणत्याही पदार्थावर व्यक्त केलेली किंवा वर्णन केलेली कोणतीही बाब. अधिनियमात दिलेल्या उदाहरणांनुसार, लेखन, मुद्रित, निक्षेपाग्र केलेले किंवा छायाचित्रित केलेले शब्द, नकाशा किंवा आराखडा, धातूच्या पट्टीवरील किंवा दगडावरील शिलालेख आणि व्यंगचित्र हे सर्व दस्तऐवज आहेत. त्यामुळे, विधान क ('नकाशा हा दस्तऐवज नाही') आणि विधान इ ('व्यंगचित्र हा दस्तऐवज नाही') ही दोन्ही विधाने चुकीची आहेत. प्रश्न चुकीची विधाने विचारत असल्याने, पर्याय 2 (क आणि इ) हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "A and D",
        "option_marathi": "अ आणि ड",
        "is_correct": false,
        "reason_english": "Statements A and D are correct as per Section 3 of the Indian Evidence Act. The question asks for incorrect statements.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाच्या कलम 3 नुसार विधान अ आणि ड ही दोन्ही बरोबर आहेत. प्रश्न चुकीची विधाने विचारतो."
      },
      {
        "option_english": "C and E",
        "option_marathi": "क आणि इ",
        "is_correct": true,
        "reason_english": "Statements C ('A map is not a document') and E ('A caricature is not a document') are incorrect as per Section 3, which includes maps and caricatures as documents. Thus, this option correctly identifies the incorrect statements.",
        "reason_marathi": "विधान क ('नकाशा हा दस्तऐवज नाही') आणि विधान इ ('व्यंगचित्र हा दस्तऐवज नाही') ही दोन्ही कलम 3 नुसार चुकीची आहेत, कारण नकाशा आणि व्यंगचित्र हे दस्तऐवज मानले जातात. त्यामुळे हा पर्याय चुकीची विधाने योग्यरित्या ओळखतो."
      },
      {
        "option_english": "B and D",
        "option_marathi": "ब आणि ड",
        "is_correct": false,
        "reason_english": "Statements B and D are correct as per Section 3 of the Indian Evidence Act. The question asks for incorrect statements.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाच्या कलम 3 नुसार विधान ब आणि ड ही दोन्ही बरोबर आहेत. प्रश्न चुकीची विधाने विचारतो."
      },
      {
        "option_english": "A and B",
        "option_marathi": "अ आणि ब",
        "is_correct": false,
        "reason_english": "Statements A and B are correct as per Section 3 of the Indian Evidence Act. The question asks for incorrect statements.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाच्या कलम 3 नुसार विधान अ आणि ब ही दोन्ही बरोबर आहेत. प्रश्न चुकीची विधाने विचारतो."
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "पुरावा कायद्याचे कलम 137 हे पुढील बाब सांगते",
    "question_english": "Section 137 of Evidence Act provides about",
    "options_marathi": [
      "संततपासणी",
      "उलट तपासणी",
      "पुनर्तपासणी",
      "वरीलपैकी सर्व"
    ],
    "options_english": [
      "Examination-in-Chief",
      "Cross examination",
      "Re-examination",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Examination of Witnesses",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 137 of the Indian Evidence Act, 1872, defines the three main types of examination of witnesses in court: Examination-in-Chief (examination by the party who calls the witness), Cross-examination (examination by the adverse party), and Re-examination (examination by the party who called the witness, subsequent to cross-examination). Therefore, all the options listed are covered by Section 137.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 137 हे न्यायालयात साक्षीदारांच्या तपासणीचे तीन मुख्य प्रकार परिभाषित करते: संततपासणी (साक्षीदाराला बोलावणाऱ्या पक्षाद्वारे तपासणी), उलट तपासणी (विरुद्ध पक्षाद्वारे तपासणी) आणि पुनर्तपासणी (उलट तपासणीनंतर साक्षीदाराला बोलावणाऱ्या पक्षाद्वारे पुन्हा तपासणी). त्यामुळे, सूचीबद्ध केलेले सर्व पर्याय कलम 137 मध्ये समाविष्ट आहेत.",
    "options_breakdown": [
      {
        "option_english": "Examination-in-Chief",
        "option_marathi": "संततपासणी",
        "is_correct": false,
        "reason_english": "Section 137 defines Examination-in-Chief, but it also defines other types of examinations. This option is partially correct but not exhaustive.",
        "reason_marathi": "कलम 137 संततपासणीची व्याख्या करते, परंतु ते इतर प्रकारच्या तपासण्यांचीही व्याख्या करते. हा पर्याय अंशतः बरोबर आहे पण सर्वसमावेशक नाही."
      },
      {
        "option_english": "Cross examination",
        "option_marathi": "उलट तपासणी",
        "is_correct": false,
        "reason_english": "Section 137 defines Cross-examination, but it also defines other types of examinations. This option is partially correct but not exhaustive.",
        "reason_marathi": "कलम 137 उलट तपासणीची व्याख्या करते, परंतु ते इतर प्रकारच्या तपासण्यांचीही व्याख्या करते. हा पर्याय अंशतः बरोबर आहे पण सर्वसमावेशक नाही."
      },
      {
        "option_english": "Re-examination",
        "option_marathi": "पुनर्तपासणी",
        "is_correct": false,
        "reason_english": "Section 137 defines Re-examination, but it also defines other types of examinations. This option is partially correct but not exhaustive.",
        "reason_marathi": "कलम 137 पुनर्तपासणीची व्याख्या करते, परंतु ते इतर प्रकारच्या तपासण्यांचीही व्याख्या करते. हा पर्याय अंशतः बरोबर आहे पण सर्वसमावेशक नाही."
      },
      {
        "option_english": "All of the above",
        "option_marathi": "वरीलपैकी सर्व",
        "is_correct": true,
        "reason_english": "Section 137 of the Indian Evidence Act defines Examination-in-Chief, Cross-examination, and Re-examination. Therefore, 'All of the above' is the correct answer.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाचे कलम 137 संततपासणी, उलट तपासणी आणि पुनर्तपासणी या तिन्हीची व्याख्या करते. त्यामुळे 'वरीलपैकी सर्व' हे योग्य उत्तर आहे."
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 प्रमाणे दस्तऐवज म्हणजे काय ?",
    "question_english": "What is \"Document\" according to the Indian Evidence Act, 1872?",
    "options_marathi": [
      "लिखाण",
      "छापील शब्द",
      "नकाशा",
      "आराखडा"
    ],
    "options_english": [
      "A Writing",
      "Printed words",
      "Map",
      "Plan"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Definition of Document",
    "difficulty": "Easy",
    "trap_detected": "Ambiguous Options",
    "explanation_english": "According to Section 3 of the Indian Evidence Act, 1872, a 'document' means any matter expressed or described upon any substance by means of letters, figures or marks, or by more than one of those means, intended to be used, or which may be used, for the purpose of recording that matter. The illustrations provided in the Act include a writing, words printed, lithographed or photographed, a map or plan, an inscription on a metal plate or stone, and a caricature. All the given options (A Writing, Printed words, Map, Plan) are examples of documents. However, if a single best answer is expected, and 'Plan' is indicated as the correct option, it is one of the valid examples of a document.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 च्या कलम 3 नुसार, 'दस्तऐवज' म्हणजे अक्षरे, आकडे किंवा चिन्हे वापरून कोणत्याही पदार्थावर व्यक्त केलेली किंवा वर्णन केलेली कोणतीही बाब, जी त्या बाबीची नोंद करण्यासाठी वापरली जाते किंवा वापरली जाऊ शकते. अधिनियमात दिलेल्या उदाहरणांमध्ये लेखन, मुद्रित, निक्षेपाग्र केलेले किंवा छायाचित्रित केलेले शब्द, नकाशा किंवा आराखडा, धातूच्या पट्टीवरील किंवा दगडावरील शिलालेख आणि व्यंगचित्र यांचा समावेश आहे. दिलेले सर्व पर्याय (लिखाण, छापील शब्द, नकाशा, आराखडा) हे दस्तऐवजाची उदाहरणे आहेत. तथापि, जर एकच सर्वोत्तम उत्तर अपेक्षित असेल आणि 'आराखडा' (Plan) हे योग्य उत्तर म्हणून दर्शविले असेल, तर ते दस्तऐवजाचे एक वैध उदाहरण आहे.",
    "options_breakdown": [
      {
        "option_english": "A Writing",
        "option_marathi": "लिखाण",
        "is_correct": false,
        "reason_english": "A writing is indeed a document as per Section 3, but all options are examples of documents, making the question ambiguous if only one answer is expected.",
        "reason_marathi": "कलम 3 नुसार लेखन हे दस्तऐवज आहे, परंतु सर्व पर्याय दस्तऐवजाची उदाहरणे आहेत, ज्यामुळे एकच उत्तर अपेक्षित असल्यास प्रश्न संदिग्ध बनतो."
      },
      {
        "option_english": "Printed words",
        "option_marathi": "छापील शब्द",
        "is_correct": false,
        "reason_english": "Printed words are indeed documents as per Section 3, but all options are examples of documents, making the question ambiguous if only one answer is expected.",
        "reason_marathi": "कलम 3 नुसार छापील शब्द हे दस्तऐवज आहेत, परंतु सर्व पर्याय दस्तऐवजाची उदाहरणे आहेत, ज्यामुळे एकच उत्तर अपेक्षित असल्यास प्रश्न संदिग्ध बनतो."
      },
      {
        "option_english": "Map",
        "option_marathi": "नकाशा",
        "is_correct": false,
        "reason_english": "A map is indeed a document as per Section 3, but all options are examples of documents, making the question ambiguous if only one answer is expected.",
        "reason_marathi": "कलम 3 नुसार नकाशा हे दस्तऐवज आहे, परंतु सर्व पर्याय दस्तऐवजाची उदाहरणे आहेत, ज्यामुळे एकच उत्तर अपेक्षित असल्यास प्रश्न संदिग्ध बनतो."
      },
      {
        "option_english": "Plan",
        "option_marathi": "आराखडा",
        "is_correct": true,
        "reason_english": "A plan is explicitly mentioned as an illustration of a 'document' in Section 3 of the Indian Evidence Act. While all options are documents, this is one of the correct examples.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाच्या कलम 3 मध्ये 'आराखडा' (Plan) हे 'दस्तऐवज' या शब्दाच्या उदाहरणांपैकी एक म्हणून स्पष्टपणे नमूद केले आहे. सर्व पर्याय दस्तऐवज असले तरी, हे एक योग्य उदाहरण आहे."
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "भारतीय पुरावा कायद्याच्या कलम 137 नुसार साक्षीदाराची मुख्य तपासणी म्हणजे ______ ने केलेली तपासणी असते.",
    "question_english": "As per Section 137 of Indian Evidence Act, Examination-in-Chief is Examination of witness by ______",
    "options_marathi": [
      "विरुद्ध पक्षाद्वारे",
      "उलटतपासणी नंतर त्याला बोलावणाऱ्या पक्षाद्वारे",
      "त्याला बोलावणाऱ्या पक्षाद्वारे",
      "तपास करत असलेल्या पोलीस अधिकाऱ्याद्वारे"
    ],
    "options_english": [
      "the opposite party",
      "the party who called him following the cross examination",
      "the party who calls him",
      "the police officer who is conducting investigation"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Examination-in-Chief",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 137 of the Indian Evidence Act, 1872, clearly defines 'Examination-in-Chief' as 'The examination of a witness by the party who calls him'. This is the initial examination conducted by the party presenting the witness to elicit facts supporting their case.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 137 'संततपासणी' (Examination-in-Chief) ची स्पष्टपणे व्याख्या करते की 'साक्षीदाराला बोलावणाऱ्या पक्षाद्वारे केलेली तपासणी'. ही प्रारंभिक तपासणी असते जी साक्षीदाराला सादर करणाऱ्या पक्षाद्वारे त्यांच्या बाजूने तथ्ये मांडण्यासाठी केली जाते.",
    "options_breakdown": [
      {
        "option_english": "the opposite party",
        "option_marathi": "विरुद्ध पक्षाद्वारे",
        "is_correct": false,
        "reason_english": "Examination by the opposite party is known as 'Cross-examination' as per Section 137.",
        "reason_marathi": "विरुद्ध पक्षाद्वारे केलेली तपासणी कलम 137 नुसार 'उलट तपासणी' म्हणून ओळखली जाते."
      },
      {
        "option_english": "the party who called him following the cross examination",
        "option_marathi": "उलटतपासणी नंतर त्याला बोलावणाऱ्या पक्षाद्वारे",
        "is_correct": false,
        "reason_english": "This describes 'Re-examination' as per Section 137, which occurs after cross-examination.",
        "reason_marathi": "हे कलम 137 नुसार 'पुनर्तपासणी' चे वर्णन करते, जी उलट तपासणीनंतर होते."
      },
      {
        "option_english": "the party who calls him",
        "option_marathi": "त्याला बोलावणाऱ्या पक्षाद्वारे",
        "is_correct": true,
        "reason_english": "As per Section 137, 'Examination-in-Chief' is the examination of a witness by the party who calls him.",
        "reason_marathi": "कलम 137 नुसार, 'संततपासणी' म्हणजे साक्षीदाराला बोलावणाऱ्या पक्षाद्वारे केलेली तपासणी होय."
      },
      {
        "option_english": "the police officer who is conducting investigation",
        "option_marathi": "तपास करत असलेल्या पोलीस अधिकाऱ्याद्वारे",
        "is_correct": false,
        "reason_english": "Police officers conduct investigations, not formal court examinations like examination-in-chief.",
        "reason_marathi": "पोलीस अधिकारी तपास करतात, न्यायालयात औपचारिक तपासणी (जसे की संततपासणी) करत नाहीत."
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "भारतीय पुरावा कायद्याच्या कलम 135 नुसार, न्यायालयाच्या समोर हजर करण्याचा आणि साक्षीदारांची तपासणी करण्याचा आदेश कायद्याद्वारे नियंत्रित केला जातो परंतु असा कोणताही कायदा नसताना, ______ च्या विवेकबुद्धीनुसार ठरवू शकतो.",
    "question_english": "According to Section 135 of Indian Evidence Act, order of production and examination of witness is regulated by the law but in the absence of such law, it is the discretion of the ______",
    "options_marathi": [
      "अर्जदाराचे वकील",
      "बचावपक्षाचे वकील",
      "न्यायालय",
      "तक्रारदार"
    ],
    "options_english": [
      "Petitioner's lawyer",
      "Defence lawyer",
      "Court",
      "Complainant"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Order of Examination of Witnesses",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 135 of the Indian Evidence Act, 1872, states that the order in which witnesses are produced and examined is regulated by the law relating to civil and criminal procedure. However, in the absence of any such specific law, the discretion to determine this order lies with the Court. This ensures judicial control over the proceedings.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 135 असे नमूद करते की साक्षीदारांना हजर करण्याचा आणि त्यांची तपासणी करण्याचा क्रम दिवाणी आणि फौजदारी प्रक्रिया कायद्याद्वारे नियंत्रित केला जातो. तथापि, असा कोणताही विशिष्ट कायदा नसताना, हा क्रम ठरवण्याचा विवेक अधिकार न्यायालयाकडे असतो. हे कार्यवाहीवर न्यायिक नियंत्रण सुनिश्चित करते.",
    "options_breakdown": [
      {
        "option_english": "Petitioner's lawyer",
        "option_marathi": "अर्जदाराचे वकील",
        "is_correct": false,
        "reason_english": "Lawyers present their case, but the discretion for the order of examination of witnesses rests with the Court, not individual lawyers.",
        "reason_marathi": "वकील आपली बाजू मांडतात, परंतु साक्षीदारांच्या तपासणीचा क्रम ठरवण्याचा विवेक अधिकार न्यायालयाकडे असतो, वैयक्तिक वकिलांकडे नाही."
      },
      {
        "option_english": "Defence lawyer",
        "option_marathi": "बचावपक्षाचे वकील",
        "is_correct": false,
        "reason_english": "Lawyers present their case, but the discretion for the order of examination of witnesses rests with the Court, not individual lawyers.",
        "reason_marathi": "वकील आपली बाजू मांडतात, परंतु साक्षीदारांच्या तपासणीचा क्रम ठरवण्याचा विवेक अधिकार न्यायालयाकडे असतो, वैयक्तिक वकिलांकडे नाही."
      },
      {
        "option_english": "Court",
        "option_marathi": "न्यायालय",
        "is_correct": true,
        "reason_english": "As per Section 135, in the absence of specific law, the order of production and examination of witnesses is at the discretion of the Court.",
        "reason_marathi": "कलम 135 नुसार, विशिष्ट कायद्याच्या अनुपस्थितीत, साक्षीदारांना हजर करण्याचा आणि त्यांची तपासणी करण्याचा क्रम न्यायालयाच्या विवेकबुद्धीनुसार ठरवला जातो."
      },
      {
        "option_english": "Complainant",
        "option_marathi": "तक्रारदार",
        "is_correct": false,
        "reason_english": "The complainant is a party to the case, but does not have the discretion to regulate the order of examination of witnesses.",
        "reason_marathi": "तक्रारदार हा खटल्यातील एक पक्ष असतो, परंतु त्याला साक्षीदारांच्या तपासणीचा क्रम नियंत्रित करण्याचा विवेक अधिकार नसतो."
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 मधील कलम ______ नुसार पोलीस अधिकाऱ्याकडे दिलेला कोणताही कबुलीजबाब कोणत्याही अपराधाचा आरोप असलेल्या व्यक्तिविरुद्ध साबित करता येणार नाही.",
    "question_english": "As per Section ______ of the Indian Evidence Act, 1872, no confession made to a police officer shall be proved as against a person accused of any offence.",
    "options_marathi": [
      "कलम 22",
      "कलम 24",
      "कलम 25",
      "कलम 26"
    ],
    "options_english": [
      "Section 22",
      "Section 24",
      "Section 25",
      "Section 26"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Confessions",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 25 of the Indian Evidence Act, 1872, is a crucial provision that states, 'No confession made to a police officer shall be proved as against a person accused of any offence.' This provision aims to prevent police coercion and ensure fair trial by excluding confessions made under potentially undue influence.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 25 हे एक महत्त्वाचे प्रावधान आहे जे असे नमूद करते की, 'पोलीस अधिकाऱ्याकडे दिलेला कोणताही कबुलीजबाब कोणत्याही अपराधाचा आरोप असलेल्या व्यक्तिविरुद्ध साबित करता येणार नाही.' या तरतुदीचा उद्देश पोलीस दलाच्या जबरदस्तीला प्रतिबंध घालणे आणि संभाव्य अयोग्य प्रभावाखाली दिलेल्या कबुलीजबाबांना वगळून निष्पक्ष सुनावणी सुनिश्चित करणे हा आहे.",
    "options_breakdown": [
      {
        "option_english": "Section 22",
        "option_marathi": "कलम 22",
        "is_correct": false,
        "reason_english": "Section 22 deals with oral admissions as to contents of documents, not confessions to police officers.",
        "reason_marathi": "कलम 22 दस्तऐवजांच्या मजकुराबाबत तोंडी कबुलीजबाबांशी संबंधित आहे, पोलीस अधिकाऱ्यांकडे दिलेल्या कबुलीजबाबांशी नाही."
      },
      {
        "option_english": "Section 24",
        "option_marathi": "कलम 24",
        "is_correct": false,
        "reason_english": "Section 24 deals with confessions caused by inducement, threat or promise, not specifically confessions made to police officers.",
        "reason_marathi": "कलम 24 प्रलोभन, धमकी किंवा आश्वासनामुळे झालेल्या कबुलीजबाबांशी संबंधित आहे, विशेषतः पोलीस अधिकाऱ्यांकडे दिलेल्या कबुलीजबाबांशी नाही."
      },
      {
        "option_english": "Section 25",
        "option_marathi": "कलम 25",
        "is_correct": true,
        "reason_english": "Section 25 explicitly states that no confession made to a police officer shall be proved against an accused person.",
        "reason_marathi": "कलम 25 स्पष्टपणे नमूद करते की पोलीस अधिकाऱ्याकडे दिलेला कोणताही कबुलीजबाब आरोपी व्यक्तीविरुद्ध सिद्ध करता येणार नाही."
      },
      {
        "option_english": "Section 26",
        "option_marathi": "कलम 26",
        "is_correct": false,
        "reason_english": "Section 26 deals with confessions made by an accused while in police custody, but it has an exception if made in the immediate presence of a Magistrate.",
        "reason_marathi": "कलम 26 पोलीस कोठडीत असताना आरोपीने दिलेल्या कबुलीजबाबांशी संबंधित आहे, परंतु जर तो दंडाधिकाऱ्याच्या तात्काळ उपस्थितीत दिला असेल तर त्याला अपवाद आहे."
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "भारतीय पुरावा कायद्याच्या कलम ______ नुसार, जे प्रकरण ______ खाली नमूद आहे, जेव्हा एखादी व्यक्ती कोणत्याही वस्तुस्थितीचे अस्तित्व आहे हे सिद्ध करण्याच्या बाबतीत असते, तेव्हा असे म्हणतात की पुराव्याचा भार त्या व्यक्तीवर असतो.",
    "question_english": "When a person is bound to prove the existence of any fact, it is said that the burden of proof lies on that person as per Section ______ mentioned in Chapter ______ of Indian Evidence Act.",
    "options_marathi": [
      "47/V",
      "101/VII",
      "100/VIII",
      "96/VI"
    ],
    "options_english": [
      "47/V",
      "101/VII",
      "100/VIII",
      "96/VI"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Burden of Proof",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 101 of the Indian Evidence Act, 1872, defines the 'burden of proof'. It states that whoever desires any Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts, must prove that those facts exist. When a person is bound to prove the existence of any fact, it is said that the burden of proof lies on that person. This section is part of Chapter VII, which is titled 'Of the Burden of Proof'.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 101 'पुराव्याचा भार' परिभाषित करते. ते असे नमूद करते की, जो कोणी कोणत्याही न्यायालयाला, त्याने प्रतिपादन केलेल्या तथ्यांच्या अस्तित्वावर अवलंबून असलेल्या कोणत्याही कायदेशीर हक्काबाबत किंवा दायित्वाबाबत निर्णय देण्याची इच्छा करतो, त्याने ती तथ्ये अस्तित्वात आहेत हे सिद्ध केले पाहिजे. जेव्हा एखादी व्यक्ती कोणत्याही वस्तुस्थितीचे अस्तित्व सिद्ध करण्यास बांधील असते, तेव्हा असे म्हटले जाते की पुराव्याचा भार त्या व्यक्तीवर असतो. हे कलम प्रकरण VII, ज्याचे शीर्षक 'पुराव्याच्या भाराबाबत' आहे, त्याचा भाग आहे.",
    "options_breakdown": [
      {
        "option_english": "47/V",
        "option_marathi": "47/V",
        "is_correct": false,
        "reason_english": "Section 47 deals with opinion as to handwriting, and Chapter V is 'Of Documentary Evidence'. This is incorrect.",
        "reason_marathi": "कलम 47 हस्तलिखिताबाबतच्या मताशी संबंधित आहे आणि प्रकरण V 'दस्तऐवजी पुराव्याबाबत' आहे. हे चुकीचे आहे."
      },
      {
        "option_english": "101/VII",
        "option_marathi": "101/VII",
        "is_correct": true,
        "reason_english": "Section 101 defines 'burden of proof', and it is located in Chapter VII of the Indian Evidence Act, which is titled 'Of the Burden of Proof'.",
        "reason_marathi": "कलम 101 'पुराव्याचा भार' परिभाषित करते आणि ते भारतीय पुरावा अधिनियमाच्या प्रकरण VII मध्ये आहे, ज्याचे शीर्षक 'पुराव्याच्या भाराबाबत' आहे."
      },
      {
        "option_english": "100/VIII",
        "option_marathi": "100/VIII",
        "is_correct": false,
        "reason_english": "Section 100 does not exist in the Indian Evidence Act, and Chapter VIII is 'Estoppel'. This is incorrect.",
        "reason_marathi": "भारतीय पुरावा अधिनियमात कलम 100 अस्तित्वात नाही आणि प्रकरण VIII 'एस्ट्रोपेल' आहे. हे चुकीचे आहे."
      },
      {
        "option_english": "96/VI",
        "option_marathi": "96/VI",
        "is_correct": false,
        "reason_english": "Section 96 deals with evidence as to application of language to facts, and Chapter VI is 'Of the Exclusion of Oral by Documentary Evidence'. This is incorrect.",
        "reason_marathi": "कलम 96 तथ्यांवर भाषेच्या उपयोजनाबाबतच्या पुराव्याशी संबंधित आहे आणि प्रकरण VI 'तोंडी पुराव्याला दस्तऐवजी पुराव्याने वगळण्याबाबत' आहे. हे चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "आत्महत्येस प्रवृत्त केल्याचे गृहीतक माननेकरिता मृत्यु हा लग्नानंतर पुढील ______ वर्षाचा आत झालेला पाहिजे.",
    "question_english": "For presumption of abetment of suicide death must be caused within ______ years of marriage.",
    "options_marathi": [
      "5",
      "6",
      "7",
      "10"
    ],
    "options_english": [
      "5",
      "6",
      "7",
      "10"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Presumption as to Abetment of Suicide",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 113A of the Indian Evidence Act, 1872, deals with the presumption as to abetment of suicide by a married woman. It states that if a woman commits suicide within a period of seven years from the date of her marriage and it is shown that her husband or his relatives subjected her to cruelty, the Court may presume that such suicide had been abetted by them.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 113A विवाहित स्त्रीने केलेल्या आत्महत्येच्या दुष्प्रेरणाबाबतच्या गृहीतकाशी संबंधित आहे. ते असे नमूद करते की, जर एखाद्या स्त्रीने तिच्या लग्नाच्या तारखेपासून सात वर्षांच्या आत आत्महत्या केली असेल आणि हे सिद्ध झाले असेल की तिचा पती किंवा त्याच्या नातेवाईकांनी तिला क्रूरतेने वागवले होते, तर न्यायालय असे गृहीत धरू शकते की त्या आत्महत्येला त्यांच्याकडून दुष्प्रेरित केले गेले होते.",
    "options_breakdown": [
      {
        "option_english": "5",
        "option_marathi": "5",
        "is_correct": false,
        "reason_english": "The period specified in Section 113A for presumption of abetment of suicide is 7 years, not 5 years.",
        "reason_marathi": "आत्महत्येच्या दुष्प्रेरणेच्या गृहीतकासाठी कलम 113A मध्ये नमूद केलेला कालावधी 7 वर्षे आहे, 5 वर्षे नाही."
      },
      {
        "option_english": "6",
        "option_marathi": "6",
        "is_correct": false,
        "reason_english": "The period specified in Section 113A for presumption of abetment of suicide is 7 years, not 6 years.",
        "reason_marathi": "आत्महत्येच्या दुष्प्रेरणेच्या गृहीतकासाठी कलम 113A मध्ये नमूद केलेला कालावधी 7 वर्षे आहे, 6 वर्षे नाही."
      },
      {
        "option_english": "7",
        "option_marathi": "7",
        "is_correct": true,
        "reason_english": "As per Section 113A of the Indian Evidence Act, the presumption of abetment of suicide applies if the suicide occurs within seven years of marriage.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाच्या कलम 113A नुसार, लग्नानंतर सात वर्षांच्या आत आत्महत्या झाल्यास आत्महत्येच्या दुष्प्रेरणेचे गृहीतक लागू होते."
      },
      {
        "option_english": "10",
        "option_marathi": "10",
        "is_correct": false,
        "reason_english": "The period specified in Section 113A for presumption of abetment of suicide is 7 years, not 10 years.",
        "reason_marathi": "आत्महत्येच्या दुष्प्रेरणेच्या गृहीतकासाठी कलम 113A मध्ये नमूद केलेला कालावधी 7 वर्षे आहे, 10 वर्षे नाही."
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 मधील कलम ______ मध्ये जी व्यक्ती मरण पावली आहे किंवा जिचा शोध लागू शकत नाही अशा व्यक्तीने केलेले संबद्ध तथ्याचे कथन हे, ज्यांमध्ये संबद्ध असते अशा प्रकरणाची तरतुद दिलेली आहे.",
    "question_english": "Section ______ of the Indian Evidence Act, 1872 lays down the provision regarding cases in which statement of relevant fact by person who is dead or cannot be found etc. is relevant.",
    "options_marathi": [
      "कलम 30",
      "कलम 31",
      "कलम 32",
      "कलम 38"
    ],
    "options_english": [
      "Section 30",
      "Section 31",
      "Section 32",
      "Section 38"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Statements by Persons Who Cannot Be Called as Witnesses",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 32 of the Indian Evidence Act, 1872, is a significant provision that makes statements of relevant facts by persons who are dead, cannot be found, or have become incapable of giving evidence, or whose attendance cannot be procured without unreasonable delay or expense, admissible in certain circumstances. This includes 'dying declarations' and statements made in the ordinary course of business, among others.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 32 हे एक महत्त्वाचे प्रावधान आहे जे मृत, ज्यांचा शोध लागू शकत नाही, किंवा पुरावा देण्यास असमर्थ झालेले, किंवा ज्यांची उपस्थिती अवाजवी विलंब किंवा खर्चाशिवाय मिळवता येत नाही अशा व्यक्तींनी केलेल्या संबंधित तथ्यांची विधाने विशिष्ट परिस्थितीत ग्राह्य धरते. यात 'मृत्युपूर्व जबाब' आणि व्यवसायाच्या सामान्य क्रमाने केलेली विधाने इत्यादींचा समावेश होतो.",
    "options_breakdown": [
      {
        "option_english": "Section 30",
        "option_marathi": "कलम 30",
        "is_correct": false,
        "reason_english": "Section 30 deals with the consideration of proved confession affecting person making it and others jointly under trial for the same offence.",
        "reason_marathi": "कलम 30 एकाच गुन्ह्यासाठी संयुक्तपणे खटला चालवल्या जात असलेल्या व्यक्तीने आणि इतरांनी केलेल्या सिद्ध कबुलीजबाबाच्या विचाराशी संबंधित आहे."
      },
      {
        "option_english": "Section 31",
        "option_marathi": "कलम 31",
        "is_correct": false,
        "reason_english": "Section 31 states that admissions are not conclusive proof, but may operate as estoppels.",
        "reason_marathi": "कलम 31 असे नमूद करते की कबुलीजबाब निर्णायक पुरावा नसतात, परंतु ते एस्टोपेल म्हणून कार्य करू शकतात."
      },
      {
        "option_english": "Section 32",
        "option_marathi": "कलम 32",
        "is_correct": true,
        "reason_english": "Section 32 specifically deals with cases in which statements of relevant fact by persons who are dead or cannot be found, etc., are relevant.",
        "reason_marathi": "कलम 32 विशेषतः अशा प्रकरणांशी संबंधित आहे ज्यात मृत किंवा ज्यांचा शोध लागू शकत नाही अशा व्यक्तींनी केलेली संबंधित तथ्यांची विधाने ग्राह्य असतात."
      },
      {
        "option_english": "Section 38",
        "option_marathi": "कलम 38",
        "is_correct": false,
        "reason_english": "Section 38 deals with the relevancy of statements as to any law contained in law-books.",
        "reason_marathi": "कलम 38 कायद्याच्या पुस्तकांमध्ये असलेल्या कोणत्याही कायद्याबाबतच्या विधानांच्या संबद्धतेशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "भारतीय पुरावा कायद्याच्या कलम ______ नुसार, जर शासकीय अधिकाऱ्याचे असे मत असेल की त्याला कोणत्याही व्यक्ती द्वारे अधिकृत विश्वासात केलेले अधिकृत संप्रेषण जर सार्वजनिकरित्या उघड केले तर ______ बाधक ठरेल, तर अशा अधिकाऱ्याला खुलासा करण्यास भाग पाडले जाणार नाही.",
    "question_english": "According to Section ______ of Indian Evidence Act, Public Officer shall not be compelled to disclose official communications made to him in official confidence, when he considers that the ______ would suffer by that disclosure.",
    "options_marathi": [
      "124/सार्वजनिक हितास",
      "118/सार्वजनिक मतास",
      "112/वैयक्तीक हितास",
      "126/वैयक्तीक मतास"
    ],
    "options_english": [
      "124/public interest",
      "118/public opinion",
      "112/personal interest",
      "126/personal opinion"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Privileged Communications",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 124 of the Indian Evidence Act, 1872, deals with 'Official communications'. It provides that a public officer cannot be compelled to disclose communications made to him in official confidence if he believes that such disclosure would harm 'public interests'. This provision aims to protect sensitive government information.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, 1872 चे कलम 124 'अधिकृत संप्रेषणांशी' संबंधित आहे. ते असे नमूद करते की, जर एखाद्या शासकीय अधिकाऱ्याला असे वाटत असेल की त्याला अधिकृत विश्वासात केलेले अधिकृत संप्रेषण सार्वजनिकरित्या उघड केल्यास 'सार्वजनिक हितास' बाधा पोहोचेल, तर त्याला ते उघड करण्यास भाग पाडले जाणार नाही. ही तरतूद संवेदनशील सरकारी माहितीचे संरक्षण करण्यासाठी आहे.",
    "options_breakdown": [
      {
        "option_english": "124/public interest",
        "option_marathi": "124/सार्वजनिक हितास",
        "is_correct": true,
        "reason_english": "Section 124 of the Indian Evidence Act protects official communications if their disclosure would harm 'public interests'. This option correctly identifies both the section and the criterion.",
        "reason_marathi": "भारतीय पुरावा अधिनियमाचे कलम 124 अधिकृत संप्रेषणांचे संरक्षण करते, जर त्यांचे प्रकटीकरण 'सार्वजनिक हितास' बाधा पोहोचवत असेल. हा पर्याय कलम आणि निकष दोन्ही योग्यरित्या ओळखतो."
      },
      {
        "option_english": "118/public opinion",
        "option_marathi": "118/सार्वजनिक मतास",
        "is_correct": false,
        "reason_english": "Section 118 deals with who may testify, and 'public opinion' is not the criterion for non-disclosure of official communications under Section 124.",
        "reason_marathi": "कलम 118 कोण साक्ष देऊ शकतो याच्याशी संबंधित आहे आणि कलम 124 अंतर्गत अधिकृत संप्रेषणांच्या अप्रकटीकरणासाठी 'सार्वजनिक मत' हा निकष नाही."
      },
      {
        "option_english": "112/personal interest",
        "option_marathi": "112/वैयक्तीक हितास",
        "is_correct": false,
        "reason_english": "Section 112 deals with birth during marriage as conclusive proof of legitimacy, and 'personal interest' is not the criterion for non-disclosure of official communications.",
        "reason_marathi": "कलम 112 विवाहादरम्यान जन्मलेल्या मुलाच्या वैधतेच्या निर्णायक पुराव्याशी संबंधित आहे आणि अधिकृत संप्रेषणांच्या अप्रकटीकरणासाठी 'वैयक्तिक हित' हा निकष नाही."
      },
      {
        "option_english": "126/personal opinion",
        "option_marathi": "126/वैयक्तीक मतास",
        "is_correct": false,
        "reason_english": "Section 126 deals with professional communications to legal advisers, and 'personal opinion' is not the criterion for non-disclosure of official communications.",
        "reason_marathi": "कलम 126 कायदेशीर सल्लागारांना व्यावसायिक संप्रेषणांशी संबंधित आहे आणि अधिकृत संप्रेषणांच्या अप्रकटीकरणासाठी 'वैयक्तिक मत' हा निकष नाही."
      }
    ]
  }
];
