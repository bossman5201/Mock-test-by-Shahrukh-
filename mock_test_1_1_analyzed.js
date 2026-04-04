const mockTestData1_1_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "खाली दिलेल्या शब्दांतील देशी शब्द ओळखा.",
    "question_english": "",
    "options_marathi": [
      "अ आणि क",
      "अ आणि ब",
      "क",
      "ड"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 0,
    "subject": "Marathi Grammar",
    "topic": "शब्दांच्या जाती (Types of Words) - देशी शब्द (Native Marathi Words)",
    "difficulty": "Hard",
    "trap_detected": "Incomplete Question Data",
    "explanation_english": "The question asks to identify a 'Deshi' (native Marathi) word. However, the provided options 'अ आणि क', 'अ आणि ब', 'क', 'ड' are not words themselves but refer to sub-options (a, b, c, d) which are missing from the question text. Without the actual words to choose from, it is impossible to correctly identify the 'Deshi' word. Therefore, the question is incomplete and cannot be answered accurately. The `correct_option_index` is set to 0 to indicate this issue.",
    "explanation_marathi": "हा प्रश्न 'देशी' शब्द ओळखण्यास सांगतो. परंतु, दिलेल्या पर्यायांमध्ये 'अ आणि क', 'अ आणि ब', 'क', 'ड' हे प्रत्यक्ष शब्द नसून ते उप-पर्यायांचा (a, b, c, d) संदर्भ देतात, जे प्रश्नात दिलेले नाहीत. निवडण्यासाठी प्रत्यक्ष शब्द नसल्यामुळे, देशी शब्द अचूकपणे ओळखणे अशक्य आहे. त्यामुळे, हा प्रश्न अपूर्ण आहे आणि त्याचे अचूक उत्तर देता येत नाही. ही समस्या दर्शवण्यासाठी `correct_option_index` 0 वर सेट केला आहे.",
    "options_breakdown": [
      {
        "option": "अ आणि क",
        "is_correct": false,
        "reason": "This option refers to a combination of sub-options 'अ' and 'क', which are not provided in the question. Cannot evaluate without the actual words."
      },
      {
        "option": "अ आणि ब",
        "is_correct": false,
        "reason": "This option refers to a combination of sub-options 'अ' and 'ब', which are not provided in the question. Cannot evaluate without the actual words."
      },
      {
        "option": "क",
        "is_correct": false,
        "reason": "This option refers to sub-option 'क', which is not provided in the question. Cannot evaluate without the actual words."
      },
      {
        "option": "ड",
        "is_correct": false,
        "reason": "This option refers to sub-option 'ड', which is not provided in the question. If 'ड' represented a specific 'Deshi' word, it would be the correct answer, but the word itself is missing. Therefore, it cannot be confirmed."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "खालीलपैकी कोणत्या शब्दांना संस्कृत उपसर्ग लागलेले आहेत ?",
    "question_english": "",
    "options_marathi": [
      "आधार, उत्तम, निग्रह",
      "अजाण, अवजड, पणतू",
      "लाचार, बिनतोड, नाराज",
      "भरधाव, गैरहजर, गैरसमज"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "उपसर्ग (Prefixes) - संस्कृत उपसर्ग (Sanskrit Prefixes)",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Sanskrit prefixes are morphemes added to the beginning of words, primarily of Sanskrit origin, to form new words or modify their meaning. In Marathi, many words are formed using these prefixes. Option 1 contains 'आधार' (आ + धार), 'उत्तम' (उत् + तम), and 'निग्रह' (नि + ग्रह). 'आ', 'उत्', and 'नि' are all common Sanskrit prefixes. Option 2 contains Marathi/Prakrit prefixes. Options 3 and 4 contain Persian/Arabic and Marathi prefixes respectively.",
    "explanation_marathi": "संस्कृत उपसर्ग हे शब्दांच्या सुरुवातीला जोडले जाणारे घटक आहेत, जे प्रामुख्याने संस्कृत मूळच्या शब्दांना नवीन अर्थ देतात किंवा त्यांचा अर्थ बदलतात. मराठीमध्ये अनेक शब्द या उपसर्गांचा वापर करून तयार होतात. पर्याय 1 मध्ये 'आधार' (आ + धार), 'उत्तम' (उत् + तम) आणि 'निग्रह' (नि + ग्रह) हे शब्द आहेत. 'आ', 'उत्' आणि 'नि' हे सर्व सामान्य संस्कृत उपसर्ग आहेत. पर्याय 2 मध्ये मराठी/प्राकृत उपसर्ग आहेत, तर पर्याय 3 आणि 4 मध्ये अनुक्रमे फारसी/अरबी आणि मराठी उपसर्ग आहेत.",
    "options_breakdown": [
      {
        "option": "आधार, उत्तम, निग्रह",
        "is_correct": true,
        "reason": "Correct. 'आधार' (आ + धार), 'उत्तम' (उत् + तम), 'निग्रह' (नि + ग्रह) all use Sanskrit prefixes (आ, उत्, नि)."
      },
      {
        "option": "अजाण, अवजड, पणतू",
        "is_correct": false,
        "reason": "Incorrect. 'अजाण' (अ + जाण), 'अवजड' (अव + जड), 'पणतू' (पण + तू) use Marathi/Prakrit prefixes (अ, अव, पण)."
      },
      {
        "option": "लाचार, बिनतोड, नाराज",
        "is_correct": false,
        "reason": "Incorrect. 'लाचार' (ला + चार), 'बिनतोड' (बिन + तोड), 'नाराज' (ना + राज) use Persian prefixes (ला, बिन, ना)."
      },
      {
        "option": "भरधाव, गैरहजर, गैरसमज",
        "is_correct": false,
        "reason": "Incorrect. 'भरधाव' (भर + धाव) uses a Marathi prefix (भर), while 'गैरहजर' (गैर + हजर), 'गैरसमज' (गैर + समज) use a Persian prefix (गैर)."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "खालीलपैकी 'अभ्यस्त' शब्द कोणता ?",
    "question_english": "",
    "options_marathi": [
      "सुखकर",
      "प्रहार",
      "रिकाम टेकडा",
      "कधी कधी"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 4,
    "subject": "Marathi Grammar",
    "topic": "शब्दांच्या जाती (Types of Words) - अभ्यस्त शब्द (Reduplicated Words)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "An 'Abhyasta' (reduplicated) word is formed by repeating a word or part of a word, often to emphasize or indicate continuity. There are three main types: Purnabhyasta (complete reduplication), Anshikabhyasta (partial reduplication), and Anukaranavachi (onomatopoeic). 'कधी कधी' (kadhī kadhī - sometimes) is an example of a Purnabhyasta word, where the entire word is repeated. The other options are either compound words or words with prefixes.",
    "explanation_marathi": "'अभ्यस्त' शब्द म्हणजे एखाद्या शब्दाची किंवा त्याच्या भागाची पुनरावृत्ती करून तयार केलेला शब्द, जो अनेकदा जोर देण्यासाठी किंवा सातत्य दर्शवण्यासाठी वापरला जातो. याचे तीन मुख्य प्रकार आहेत: पूर्णभ्यस्त, अंशाभ्यस्त आणि अनुकरणवाचक. 'कधी कधी' हा पूर्णभ्यस्त शब्दाचे उदाहरण आहे, जिथे संपूर्ण शब्दाची पुनरावृत्ती होते. इतर पर्याय हे सामासिक शब्द किंवा उपसर्ग लागलेले शब्द आहेत.",
    "options_breakdown": [
      {
        "option": "सुखकर",
        "is_correct": false,
        "reason": "Incorrect. 'सुखकर' is a compound word (सामासिक शब्द), not a reduplicated word."
      },
      {
        "option": "प्रहार",
        "is_correct": false,
        "reason": "Incorrect. 'प्रहार' is a word formed with a prefix (प्र + हार), not a reduplicated word."
      },
      {
        "option": "रिकाम टेकडा",
        "is_correct": false,
        "reason": "Incorrect. 'रिकाम टेकडा' is a compound word (सामासिक शब्द), not a reduplicated word."
      },
      {
        "option": "कधी कधी",
        "is_correct": true,
        "reason": "Correct. 'कधी कधी' is a Purnabhyasta (complete reduplication) word, where the word 'कधी' is repeated."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "योग्य जोड्या लावा.\na. तत्सम शब्द\ni. धोंडा, ढेकूण, बाजरी\nb. तद्भव शब्द\nii. तिकीट, बटाटा, सामान\nc. देशी शब्द\niii. पुष्प, कन्या, नदी\nd. परभाषी शब्द\niv. भाऊ, पान, ओठ",
    "question_english": "",
    "options_marathi": [
      "iv iii ii i",
      "iii ii i iv",
      "ii i iii iv",
      "iii i iv ii"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "शब्दांच्या जाती (Types of Words) - तत्सम, तद्भव, देशी, परभाषी शब्द",
    "difficulty": "Medium",
    "trap_detected": "Flawed Options",
    "explanation_english": "This question asks to match different types of words with their examples.\n*   a. तत्सम शब्द (Tatsam): Words directly borrowed from Sanskrit without change. (Correct match: iii. पुष्प, कन्या, नदी)\n*   b. तद्भव शब्द (Tadbhav): Words derived from Sanskrit but changed in form. (Correct match: iv. भाऊ, पान, ओठ)\n*   c. देशी शब्द (Deshi): Words native to Marathi, not borrowed. (Correct match: i. धोंडा, ढेकूण, बाजरी)\n*   d. परभाषी शब्द (Parbhashi): Words borrowed from other languages (English, Portuguese, Persian, etc.). (Correct match: ii. तिकीट, बटाटा, सामान)\nThe ideal sequence should be a-iii, b-iv, c-i, d-ii. However, none of the provided options perfectly match this sequence. Option 2 (iii ii i iv) is chosen as the intended answer in the input, but it incorrectly matches 'तद्भव' with 'परभाषी' examples (ii) and 'परभाषी' with 'तद्भव' examples (iv).",
    "explanation_marathi": "हा प्रश्न शब्दांचे प्रकार आणि त्यांची उदाहरणे यांच्या योग्य जोड्या जुळवण्यास सांगतो.\n*   a. तत्सम शब्द: संस्कृतमधून जसेच्या तसे आलेले शब्द. (योग्य जोडी: iii. पुष्प, कन्या, नदी)\n*   b. तद्भव शब्द: संस्कृतमधून बदल होऊन आलेले शब्द. (योग्य जोडी: iv. भाऊ, पान, ओठ)\n*   c. देशी शब्द: मराठी भाषेतच तयार झालेले, इतर भाषेतून न आलेले शब्द. (योग्य जोडी: i. धोंडा, ढेकूण, बाजरी)\n*   d. परभाषी शब्द: इतर भाषांमधून (इंग्रजी, पोर्तुगीज, फारसी इत्यादी) आलेले शब्द. (योग्य जोडी: ii. तिकीट, बटाटा, सामान)\nआदर्श क्रम a-iii, b-iv, c-i, d-ii असा असावा. परंतु, दिलेल्या पर्यायांपैकी कोणताही पर्याय या क्रमाशी पूर्णपणे जुळत नाही. इनपुटमध्ये पर्याय 2 (iii ii i iv) हे अपेक्षित उत्तर म्हणून दिले आहे, परंतु ते 'तद्भव' शब्दांना 'परभाषी' शब्दांच्या उदाहरणांशी (ii) आणि 'परभाषी' शब्दांना 'तद्भव' शब्दांच्या उदाहरणांशी (iv) चुकीचे जुळवते.",
    "options_breakdown": [
      {
        "option": "iv iii ii i",
        "is_correct": false,
        "reason": "Incorrect. This sequence (a-iv, b-iii, c-ii, d-i) incorrectly matches all categories."
      },
      {
        "option": "iii ii i iv",
        "is_correct": true,
        "reason": "Partially Correct (as per input, but flawed). Matches a-iii (तत्सम-पुष्प, कन्या, नदी) and c-i (देशी-धोंडा, ढेकूण, बाजरी) correctly. However, it incorrectly matches b-ii (तद्भव-तिकीट, बटाटा, सामान - these are परभाषी) and d-iv (परभाषी-भाऊ, पान, ओठ - these are तद्भव)."
      },
      {
        "option": "ii i iii iv",
        "is_correct": false,
        "reason": "Incorrect. This sequence (a-ii, b-i, c-iii, d-iv) incorrectly matches all categories."
      },
      {
        "option": "iii i iv ii",
        "is_correct": false,
        "reason": "Partially Correct. Matches a-iii (तत्सम-पुष्प, कन्या, नदी) and d-ii (परभाषी-तिकीट, बटाटा, सामान) correctly. However, it incorrectly matches b-i (तद्भव-धोंडा, ढेकूण, बाजरी - these are देशी) and c-iv (देशी-भाऊ, पान, ओठ - these are तद्भव)."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "शुद्धलेखन नियमांनुसार अचूक शब्दांचा गट ओळखा.\na. ऊहापोह, नावीन्य, उत्कृष्ट\nb. मथितार्थ, घनश्याम, बलिष्ठ\nc. इशारा, अलीकडे, वाङ्मय\nd. ऊष्ण, मंदीर, परिक्षा",
    "question_english": "",
    "options_marathi": [
      "फक्त a व b बरोबर",
      "फक्त c व d बरोबर",
      "फक्त a, b व c बरोबर",
      "सर्व पर्याय बरोबर"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "शुद्धलेखन (Orthography)",
    "difficulty": "Medium",
    "trap_detected": "Minor Spelling Differences",
    "explanation_english": "This question tests knowledge of Marathi orthography (Shuddhalekhan).\n*   Group 'a' (ऊहापोह, नावीन्य, उत्कृष्ट) contains all correctly spelled words.\n*   Group 'b' (मथितार्थ, घनश्याम, बलिष्ठ) also contains all correctly spelled words.\n*   Group 'c' (इशारा, अलीकडे, वाङ्मय) contains all correctly spelled words.\n*   Group 'd' (ऊष्ण, मंदीर, परिक्षा) contains incorrectly spelled words. The correct spellings are 'उष्ण', 'मंदिर', and 'परीक्षा'.\nTherefore, the group containing only a, b, and c is the correct answer.",
    "explanation_marathi": "हा प्रश्न मराठी शुद्धलेखनाच्या नियमांवर आधारित आहे.\n*   गट 'a' (ऊहापोह, नावीन्य, उत्कृष्ट) मधील सर्व शब्द शुद्ध आहेत.\n*   गट 'b' (मथितार्थ, घनश्याम, बलिष्ठ) मधील सर्व शब्द शुद्ध आहेत.\n*   गट 'c' (इशारा, अलीकडे, वाङ्मय) मधील सर्व शब्द शुद्ध आहेत.\n*   गट 'd' (ऊष्ण, मंदीर, परिक्षा) मधील शब्द अशुद्ध आहेत. त्यांची शुद्ध रूपे 'उष्ण', 'मंदिर' आणि 'परीक्षा' अशी आहेत.\nम्हणून, फक्त a, b आणि c गट बरोबर असलेला पर्याय योग्य आहे.",
    "options_breakdown": [
      {
        "option": "फक्त a व b बरोबर",
        "is_correct": false,
        "reason": "Incorrect. Group 'c' is also correct, but not included in this option."
      },
      {
        "option": "फक्त c व d बरोबर",
        "is_correct": false,
        "reason": "Incorrect. Group 'd' contains incorrectly spelled words ('उष्ण', 'मंदिर', 'परीक्षा' are correct spellings)."
      },
      {
        "option": "फक्त a, b व c बरोबर",
        "is_correct": true,
        "reason": "Correct. Groups 'a', 'b', and 'c' all contain correctly spelled words according to Marathi orthography."
      },
      {
        "option": "सर्व पर्याय बरोबर",
        "is_correct": false,
        "reason": "Incorrect. Group 'd' contains incorrectly spelled words ('उष्ण', 'मंदिर', 'परीक्षा' are correct spellings)."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "“सर्व मुले मोठ्याने बोलत होती\", या वाक्यातील क्रियाविशेषणाचा प्रकार सांगा.",
    "question_english": "",
    "options_marathi": [
      "नामसाधित",
      "विशेषणसाधित",
      "अव्ययसाधित",
      "धातुसाधित"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "क्रियाविशेषण अव्यय (Adverbs) - क्रियाविशेषणाचे प्रकार (Types of Adverbs)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The sentence is 'सर्व मुले मोठ्याने बोलत होती' (All children were speaking loudly). The word 'मोठ्याने' (loudly) describes how the action of speaking ('बोलत होती') was performed. 'मोठा' is an adjective (विशेषण). When an adjective is used to modify a verb, it becomes an adverb. Here, 'मोठ्याने' is formed from the adjective 'मोठा' by adding the suffix '-ने'. Hence, it is a 'विशेषणसाधित क्रियाविशेषण' (adverb derived from an adjective).",
    "explanation_marathi": "वाक्य आहे 'सर्व मुले मोठ्याने बोलत होती'. 'मोठ्याने' हा शब्द 'बोलत होती' या क्रियेचे वर्णन करतो, म्हणजे क्रिया कशी घडली हे सांगतो. 'मोठा' हे विशेषण आहे. जेव्हा एखादे विशेषण क्रियापदाचे वर्णन करते, तेव्हा ते क्रियाविशेषण बनते. येथे, 'मोठ्याने' हा शब्द 'मोठा' या विशेषणापासून '-ने' प्रत्यय लागून तयार झाला आहे. म्हणून, ते 'विशेषणसाधित क्रियाविशेषण' आहे.",
    "options_breakdown": [
      {
        "option": "नामसाधित",
        "is_correct": false,
        "reason": "Incorrect. 'नामसाधित क्रियाविशेषण' are formed from nouns (e.g., दिवसा, रात्री)."
      },
      {
        "option": "विशेषणसाधित",
        "is_correct": true,
        "reason": "Correct. 'मोठ्याने' is derived from the adjective 'मोठा' (big/loud), making it a 'विशेषणसाधित क्रियाविशेषण'."
      },
      {
        "option": "अव्ययसाधित",
        "is_correct": false,
        "reason": "Incorrect. 'अव्ययसाधित क्रियाविशेषण' are formed from indeclinable words (अव्यय) (e.g., वरून, खालून)."
      },
      {
        "option": "धातुसाधित",
        "is_correct": false,
        "reason": "Incorrect. 'धातुसाधित क्रियाविशेषण' are formed from verb roots (धातू) (e.g., हसता हसता, खेळता खेळता)."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "'चपळ घोड्याने शर्यत जिंकली.' या वाक्यातील विशेषण ओळखा.",
    "question_english": "",
    "options_marathi": [
      "चपळ घोड्याने",
      "शर्यत जिंकली",
      "चपळ",
      "जिंकली"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "विशेषण (Adjectives) - विशेषणाचे प्रकार (Types of Adjectives)",
    "difficulty": "Easy",
    "trap_detected": "Distractor Phrases",
    "explanation_english": "In the sentence 'चपळ घोड्याने शर्यत जिंकली' (The agile horse won the race), an adjective describes a noun. Here, 'चपळ' (agile) is the word that describes the quality of the noun 'घोडा' (horse). Therefore, 'चपळ' is the adjective.",
    "explanation_marathi": "'चपळ घोड्याने शर्यत जिंकली' या वाक्यात, विशेषण हे नामाचे वर्णन करते. येथे 'चपळ' हा शब्द 'घोडा' या नामाची गुणवत्ता किंवा वैशिष्ट्य सांगतो. म्हणून, 'चपळ' हे विशेषण आहे.",
    "options_breakdown": [
      {
        "option": "चपळ घोड्याने",
        "is_correct": false,
        "reason": "Incorrect. 'चपळ घोड्याने' is a noun phrase (विशेषण + नाम), not just the adjective."
      },
      {
        "option": "शर्यत जिंकली",
        "is_correct": false,
        "reason": "Incorrect. 'शर्यत जिंकली' is the object and verb phrase, not an adjective."
      },
      {
        "option": "चपळ",
        "is_correct": true,
        "reason": "Correct. 'चपळ' directly describes the noun 'घोडा', making it the adjective."
      },
      {
        "option": "जिंकली",
        "is_correct": false,
        "reason": "Incorrect. 'जिंकली' is the verb (क्रियापद) of the sentence."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "त्या तिथे पलीकडे माझिया प्रियेचे झोपडे आहे. हे विधान कोणते क्रियाविशेषण आहे ?",
    "question_english": "",
    "options_marathi": [
      "कालवाचक क्रियाविशेषण",
      "स्थलवाचक क्रियाविशेषण",
      "रीतिवाचक क्रियाविशेषण",
      "एकाक्षरी क्रियाविशेषण"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "क्रियाविशेषण अव्यय (Adverbs) - स्थलवाचक क्रियाविशेषण (Adverb of Place)",
    "difficulty": "Easy",
    "trap_detected": "Multiple Adverbs",
    "explanation_english": "The sentence 'त्या तिथे पलीकडे माझिया प्रियेचे झोपडे आहे' contains words like 'त्या' (there), 'तिथे' (there), and 'पलीकडे' (beyond). All these words indicate a place or location where the hut is situated. Adverbs that denote place are called 'स्थलवाचक क्रियाविशेषण' (adverbs of place).",
    "explanation_marathi": "'त्या तिथे पलीकडे माझिया प्रियेचे झोपडे आहे' या वाक्यात 'त्या', 'तिथे' आणि 'पलीकडे' हे शब्द झोपडीचे स्थान किंवा जागा दर्शवतात. जे क्रियाविशेषण अव्यय स्थळाचा बोध करून देतात, त्यांना 'स्थलवाचक क्रियाविशेषण' असे म्हणतात.",
    "options_breakdown": [
      {
        "option": "कालवाचक क्रियाविशेषण",
        "is_correct": false,
        "reason": "Incorrect. 'कालवाचक क्रियाविशेषण' indicates time (e.g., आज, उद्या)."
      },
      {
        "option": "स्थलवाचक क्रियाविशेषण",
        "is_correct": true,
        "reason": "Correct. 'त्या', 'तिथे', 'पलीकडे' all indicate place, making it a 'स्थलवाचक क्रियाविशेषण'."
      },
      {
        "option": "रीतिवाचक क्रियाविशेषण",
        "is_correct": false,
        "reason": "Incorrect. 'रीतिवाचक क्रियाविशेषण' indicates manner or method (e.g., हळू, जलद)."
      },
      {
        "option": "एकाक्षरी क्रियाविशेषण",
        "is_correct": false,
        "reason": "Incorrect. 'एकाक्षरी क्रियाविशेषण' is not a standard classification of adverbs in Marathi grammar in this context; it refers to single-letter words, which is not the primary classification here."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "पुढीलपैकी अनिश्चित संख्यावाचक विशेषण ओळखा.",
    "question_english": "",
    "options_marathi": [
      "पाच",
      "चारी",
      "तिसरा",
      "थोडा"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 4,
    "subject": "Marathi Grammar",
    "topic": "विशेषण (Adjectives) - संख्यावाचक विशेषण (Numeral Adjectives) - अनिश्चित संख्यावाचक विशेषण (Indefinite Numeral Adjectives)",
    "difficulty": "Easy",
    "trap_detected": "Similar-sounding options",
    "explanation_english": "An 'अनिश्चित संख्यावाचक विशेषण' (indefinite numeral adjective) is an adjective that indicates an indefinite or approximate quantity or number, without specifying an exact count.\n*   'पाच' (five) is a definite cardinal number.\n*   'चारी' (all four) is a definite collective number.\n*   'तिसरा' (third) is a definite ordinal number.\n*   'थोडा' (a little/some) indicates an indefinite quantity, making it the correct answer.",
    "explanation_marathi": "'अनिश्चित संख्यावाचक विशेषण' म्हणजे असे विशेषण जे निश्चित संख्या किंवा प्रमाण न सांगता अंदाजे किंवा अनिश्चित प्रमाण दर्शवते.\n*   'पाच' हे निश्चित संख्यावाचक विशेषण आहे.\n*   'चारी' हे निश्चित समूहवाचक विशेषण आहे.\n*   'तिसरा' हे निश्चित क्रमवाचक विशेषण आहे.\n*   'थोडा' हे अनिश्चित प्रमाण दर्शवते, त्यामुळे ते योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option": "पाच",
        "is_correct": false,
        "reason": "Incorrect. 'पाच' is a definite cardinal numeral adjective (निश्चित संख्यावाचक विशेषण)."
      },
      {
        "option": "चारी",
        "is_correct": false,
        "reason": "Incorrect. 'चारी' is a definite collective numeral adjective (समूहवाचक संख्याविशेषण)."
      },
      {
        "option": "तिसरा",
        "is_correct": false,
        "reason": "Incorrect. 'तिसरा' is a definite ordinal numeral adjective (क्रमवाचक संख्याविशेषण)."
      },
      {
        "option": "थोडा",
        "is_correct": true,
        "reason": "Correct. 'थोडा' indicates an indefinite quantity, making it an 'अनिश्चित संख्यावाचक विशेषण'."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "'जेव्हा घाम गाळावा तेव्हाच खायला भाकरी मिळते.' हे वाक्य क्रियाविशेषणाच्या कोणत्या उपप्रकारातील आहे ?",
    "question_english": "",
    "options_marathi": [
      "विरोधदर्शक",
      "संकेतदर्शक",
      "कालदर्शक",
      "स्थलदर्शक"
    ],
    "options_english": [
      "",
      "",
      "",
      ""
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "क्रियाविशेषण अव्यय (Adverbs) - कालवाचक क्रियाविशेषण (Adverb of Time)",
    "difficulty": "Medium",
    "trap_detected": "Conditional vs. Temporal",
    "explanation_english": "The sentence 'जेव्हा घाम गाळावा तेव्हाच खायला भाकरी मिळते' (Only when one sweats, does one get bread to eat) uses the correlative adverbs 'जेव्हा... तेव्हाच...'. These adverbs establish a temporal relationship, indicating 'at what time' an action occurs. 'जेव्हा' (when) clearly points to time. Therefore, this sentence belongs to the 'कालदर्शक क्रियाविशेषण' (adverb of time) sub-type.",
    "explanation_marathi": "'जेव्हा घाम गाळावा तेव्हाच खायला भाकरी मिळते' या वाक्यात 'जेव्हा... तेव्हाच...' हे सहसंबंधी क्रियाविशेषण अव्यय वापरले आहेत. हे अव्यय क्रियेची वेळ दर्शवतात, म्हणजे क्रिया 'केव्हा' घडते हे सांगतात. 'जेव्हा' हा शब्द स्पष्टपणे वेळेचा बोध करतो. म्हणून, हे वाक्य 'कालदर्शक क्रियाविशेषण' या उपप्रकारात येते.",
    "options_breakdown": [
      {
        "option": "विरोधदर्शक",
        "is_correct": false,
        "reason": "Incorrect. 'विरोधदर्शक' (adverb of opposition) indicates contrast (e.g., तरीही, पण)."
      },
      {
        "option": "संकेतदर्शक",
        "is_correct": false,
        "reason": "Incorrect. While there's a conditional aspect, the primary function of 'जेव्हा... तेव्हाच...' is temporal, not purely conditional (संकेतदर्शक)."
      },
      {
        "option": "कालदर्शक",
        "is_correct": true,
        "reason": "Correct. 'जेव्हा... तेव्हाच...' indicates the time relationship between two actions, making it a 'कालदर्शक क्रियाविशेषण'."
      },
      {
        "option": "स्थलदर्शक",
        "is_correct": false,
        "reason": "Incorrect. 'स्थलदर्शक' (adverb of place) indicates location (e.g., येथे, तिथे)."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "वाक्याचा कर्ता व कर्त्यानंतर येणारे नाम दोघेही एकच व्यक्ती किंवा वस्तू दर्शवित असतील तर कर्त्यानंतर येणारे नाम",
    "question_english": "If the subject of a sentence and the noun following the subject both refer to the same person or thing, then the noun following the subject",
    "options_marathi": [
      "कर्मपूरकाचे काम करते",
      "विधेयपूरकाचे काम करते",
      "विधीपूरकाचे काम करते",
      "आधारपूरकाचे काम करते"
    ],
    "options_english": [
      "Acts as an object complement",
      "Acts as a predicate complement",
      "Acts as a legal complement",
      "Acts as a base complement"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "वाक्य पृथक्करण (Sentence Analysis) / पूरक (Complement)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "In Marathi grammar, when a noun or adjective comes after the subject and refers to the same person or thing as the subject, completing the meaning of the predicate, it is called a 'विधेयपूरक' (predicate complement). It provides more information about the subject through the predicate. For example, in 'तो राजा आहे' (He is a king), 'राजा' is the विधेयपूरक, referring back to 'तो'.",
    "explanation_marathi": "मराठी व्याकरणात, जेव्हा वाक्यातील कर्त्यानंतर येणारे नाम किंवा विशेषण कर्त्याबद्दलच अधिक माहिती सांगते आणि विधेयाचा अर्थ पूर्ण करते, तेव्हा त्याला 'विधेयपूरक' असे म्हणतात. ते कर्त्याला उद्देशून विधेयाद्वारे माहिती पुरवते. उदाहरणार्थ, 'तो राजा आहे' या वाक्यात 'राजा' हे विधेयपूरक आहे, कारण ते 'तो' या कर्त्याबद्दल माहिती देते.",
    "options_breakdown": [
      {
        "option_text_marathi": "कर्मपूरकाचे काम करते",
        "option_text_english": "Acts as an object complement",
        "is_correct": false,
        "reason_marathi": "कर्मपूरक हे कर्माचा अर्थ पूर्ण करते, कर्त्याचा नाही.",
        "reason_english": "An object complement completes the meaning of the object, not the subject."
      },
      {
        "option_text_marathi": "विधेयपूरकाचे काम करते",
        "option_text_english": "Acts as a predicate complement",
        "is_correct": true,
        "reason_marathi": "जेव्हा कर्त्यानंतर येणारे नाम कर्त्याबद्दलच अधिक माहिती सांगते आणि विधेयाचा अर्थ पूर्ण करते, तेव्हा ते विधेयपूरक असते.",
        "reason_english": "When a noun following the subject provides more information about the subject and completes the meaning of the predicate, it is a predicate complement."
      },
      {
        "option_text_marathi": "विधीपूरकाचे काम करते",
        "option_text_english": "Acts as a legal complement",
        "is_correct": false,
        "reason_marathi": "हा व्याकरणानुसार योग्य शब्दप्रयोग नाही.",
        "reason_english": "This is not a standard grammatical term in this context."
      },
      {
        "option_text_marathi": "आधारपूरकाचे काम करते",
        "option_text_english": "Acts as a base complement",
        "is_correct": false,
        "reason_marathi": "हा व्याकरणानुसार योग्य शब्दप्रयोग नाही.",
        "reason_english": "This is not a standard grammatical term."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "खालीलपैकी क्रियापदाचे वैशिष्ट्य कोणते आहे ?\na. धातू म्हणजे क्रियावाचक मूळ शब्द.\nb. धातू ही विकारी शब्दजाती आहे.\nc. क्रियापदे वाक्यातील क्रिया दाखवितात.\nd. क्रियापदामुळेच वाक्य पूर्ण होते.",
    "question_english": "Which of the following is a characteristic of a verb?\na. Dhatu (root) means the original word indicating action.\nb. Dhatu is an inflected part of speech.\nc. Verbs show the action in a sentence.\nd. A sentence is completed only by a verb.",
    "options_marathi": [
      "फक्त a व b बरोबर",
      "फक्त c व d बरोबर",
      "फक्त c बरोबर",
      "सर्व पर्याय बरोबर"
    ],
    "options_english": [
      "Only a and b are correct",
      "Only c and d are correct",
      "Only c is correct",
      "All options are correct"
    ],
    "correct_option_index": 0,
    "subject": "Marathi Grammar",
    "topic": "क्रियापद (Verb) and धातू (Root)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap/Misinterpretation",
    "explanation_english": "Statement 'a' is correct: A 'धातू' (root) is the fundamental, action-indicating part of a verb. Statement 'c' is correct: Verbs indicate the action in a sentence. Statement 'd' is correct: A verb is essential for a sentence to be grammatically complete. However, statement 'b' is incorrect: A 'धातू' (root) is considered 'अविकारी' (non-inflected or unchanging) in Marathi grammar. It is the 'क्रियापद' (verb) formed from the 'धातू' that is 'विकारी' (inflected). Since option 'b' is incorrect, the option 'सर्व पर्याय बरोबर' (All options are correct) is invalid. As there is no option that correctly states 'a, c, and d are correct', this question is considered flawed or has no single correct answer among the given choices.",
    "explanation_marathi": "विधान 'अ' बरोबर आहे: धातू म्हणजे क्रियावाचक मूळ शब्द. विधान 'क' बरोबर आहे: क्रियापदे वाक्यातील क्रिया दाखवितात. विधान 'ड' बरोबर आहे: क्रियापदामुळेच वाक्य पूर्ण होते. तथापि, विधान 'ब' चुकीचे आहे: धातू ही अविकारी शब्दजाती आहे, कारण तो मूळ शब्द असतो आणि त्यात बदल होत नाही. धातूपासून बनणारे क्रियापद हे विकारी असते. त्यामुळे, 'ब' चुकीचे असल्याने 'सर्व पर्याय बरोबर' हा पर्याय चुकीचा ठरतो. 'अ', 'क' आणि 'ड' बरोबर असूनही, असा कोणताही पर्याय उपलब्ध नसल्यामुळे, हा प्रश्न सदोष मानला जातो किंवा दिलेल्या पर्यायांमध्ये एकही योग्य उत्तर नाही.",
    "options_breakdown": [
      {
        "option_text_marathi": "फक्त a व b बरोबर",
        "option_text_english": "Only a and b are correct",
        "is_correct": false,
        "reason_marathi": "विधान 'ब' चुकीचे आहे, कारण धातू ही अविकारी शब्दजाती आहे.",
        "reason_english": "Statement 'b' is incorrect because 'धातू' is an uninflected part of speech."
      },
      {
        "option_text_marathi": "फक्त c व d बरोबर",
        "option_text_english": "Only c and d are correct",
        "is_correct": false,
        "reason_marathi": "विधान 'अ' देखील बरोबर आहे.",
        "reason_english": "Statement 'a' is also correct."
      },
      {
        "option_text_marathi": "फक्त c बरोबर",
        "option_text_english": "Only c is correct",
        "is_correct": false,
        "reason_marathi": "विधान 'अ' आणि 'ड' देखील बरोबर आहेत.",
        "reason_english": "Statements 'a' and 'd' are also correct."
      },
      {
        "option_text_marathi": "सर्व पर्याय बरोबर",
        "option_text_english": "All options are correct",
        "is_correct": false,
        "reason_marathi": "विधान 'ब' चुकीचे असल्याने हा पर्याय बरोबर नाही.",
        "reason_english": "This option is incorrect because statement 'b' is wrong."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "'परवा वडिलांनी मुंबईहून एक सुंदर तैलचित्र अगदी स्वस्तात आणले.' या वाक्याचा वाक्यप्रकार ओळखा.",
    "question_english": "Identify the type of sentence for: 'The day before yesterday, father brought a beautiful oil painting from Mumbai very cheaply.'",
    "options_marathi": [
      "संयुक्त वाक्य",
      "मिश्र वाक्य",
      "केवल वाक्य",
      "प्रश्नार्थी वाक्य"
    ],
    "options_english": [
      "Compound sentence",
      "Complex sentence",
      "Simple sentence",
      "Interrogative sentence"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "वाक्याचे प्रकार (Types of Sentences)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "A 'केवल वाक्य' (simple sentence) is a sentence that has only one subject and one predicate, expressing a single complete thought. It contains only one main verb. The given sentence, 'परवा वडिलांनी मुंबईहून एक सुंदर तैलचित्र अगदी स्वस्तात आणले' (The day before yesterday, father brought a beautiful oil painting from Mumbai very cheaply), has only one main verb 'आणले' (brought) and conveys a single idea, thus fitting the definition of a simple sentence.",
    "explanation_marathi": "'केवल वाक्य' म्हणजे असे वाक्य ज्यात एकच उद्देश (कर्ता) आणि एकच विधेय (क्रियापद) असते आणि ते एकच पूर्ण विचार व्यक्त करते. त्यात फक्त एकच मुख्य क्रियापद असते. दिलेले वाक्य, 'परवा वडिलांनी मुंबईहून एक सुंदर तैलचित्र अगदी स्वस्तात आणले', यात 'आणले' हे एकच मुख्य क्रियापद आहे आणि ते एकच कल्पना व्यक्त करते, त्यामुळे ते केवल वाक्याच्या व्याख्येत बसते.",
    "options_breakdown": [
      {
        "option_text_marathi": "संयुक्त वाक्य",
        "option_text_english": "Compound sentence",
        "is_correct": false,
        "reason_marathi": "या वाक्यात दोन किंवा अधिक स्वतंत्र वाक्ये जोडलेली नाहीत.",
        "reason_english": "This sentence does not have two or more independent clauses joined together."
      },
      {
        "option_text_marathi": "मिश्र वाक्य",
        "option_text_english": "Complex sentence",
        "is_correct": false,
        "reason_marathi": "या वाक्यात एक मुख्य वाक्य आणि एक किंवा अधिक गौण वाक्ये नाहीत.",
        "reason_english": "This sentence does not contain a main clause and one or more subordinate clauses."
      },
      {
        "option_text_marathi": "केवल वाक्य",
        "option_text_english": "Simple sentence",
        "is_correct": true,
        "reason_marathi": "या वाक्यात एकच उद्देश (कर्ता) आणि एकच विधेय (क्रियापद) असून ते एकच पूर्ण विचार व्यक्त करते.",
        "reason_english": "This sentence has one subject and one main verb, expressing a single complete thought."
      },
      {
        "option_text_marathi": "प्रश्नार्थी वाक्य",
        "option_text_english": "Interrogative sentence",
        "is_correct": false,
        "reason_marathi": "हे वाक्य प्रश्न विचारत नाही, तर विधान करते.",
        "reason_english": "This sentence is a statement, not a question."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "पुढीलपैकी 'संकेतार्थी' वाक्य ओळखा.",
    "question_english": "Identify the 'conditional' sentence from the following.",
    "options_marathi": [
      "वडिलांनी पैसे दिले असते, तर परीक्षा शुल्क भरले असते",
      "वडिलांनी पैसे दिल्यावर परीक्षा शुल्क भरतो",
      "वडील पैसे देतात, मी परीक्षा शुल्क भरतो",
      "वडिलांनी पैसे दिले, परीक्षा शुल्क भरले"
    ],
    "options_english": [
      "If father had given money, then exam fees would have been paid",
      "After father gives money, I pay exam fees",
      "Father gives money, I pay exam fees",
      "Father gave money, exam fees were paid"
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "वाक्याचे प्रकार (Types of Sentences) / अर्थानुसार वाक्याचे प्रकार (Sentence types by meaning)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "A 'संकेतार्थी वाक्य' (conditional sentence) expresses a condition and its outcome or consequence. These sentences often use conjunctions like 'जर... तर...' (if... then...) or imply a condition. The sentence 'वडिलांनी पैसे दिले असते, तर परीक्षा शुल्क भरले असते' (If father had given money, then exam fees would have been paid) clearly presents a condition ('वडिलांनी पैसे दिले असते') and its dependent result ('परीक्षा शुल्क भरले असते'), making it a perfect example of a conditional sentence.",
    "explanation_marathi": "'संकेतार्थी वाक्य' म्हणजे असे वाक्य जे एक अट आणि तिचा परिणाम किंवा निष्पत्ती व्यक्त करते. अशा वाक्यांमध्ये अनेकदा 'जर... तर...' यांसारख्या उभयान्वयी अव्ययांचा वापर होतो किंवा अट सूचित केली जाते. 'वडिलांनी पैसे दिले असते, तर परीक्षा शुल्क भरले असते' हे वाक्य 'वडिलांनी पैसे दिले असते' ही अट आणि 'परीक्षा शुल्क भरले असते' हा तिचा परिणाम स्पष्टपणे दर्शवते, त्यामुळे ते संकेतार्थी वाक्याचे उत्तम उदाहरण आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "वडिलांनी पैसे दिले असते, तर परीक्षा शुल्क भरले असते",
        "option_text_english": "If father had given money, then exam fees would have been paid",
        "is_correct": true,
        "reason_marathi": "या वाक्यात 'जर... तर...' या स्वरूपात अट आणि तिचा परिणाम स्पष्टपणे व्यक्त केला आहे, जो संकेतार्थी वाक्याचे वैशिष्ट्य आहे.",
        "reason_english": "This sentence clearly expresses a condition and its consequence in the 'if... then...' format, which is characteristic of a conditional sentence."
      },
      {
        "option_text_marathi": "वडिलांनी पैसे दिल्यावर परीक्षा शुल्क भरतो",
        "option_text_english": "After father gives money, I pay exam fees",
        "is_correct": false,
        "reason_marathi": "हे वाक्य घटनांचा क्रम दर्शवते, अट नाही.",
        "reason_english": "This describes a sequence of events, not a conditional relationship."
      },
      {
        "option_text_marathi": "वडील पैसे देतात, मी परीक्षा शुल्क भरतो",
        "option_text_english": "Father gives money, I pay exam fees",
        "is_correct": false,
        "reason_marathi": "हे दोन स्वतंत्र विधाने आहेत, संयुक्त वाक्याचे उदाहरण आहे.",
        "reason_english": "These are two independent statements, an example of a compound sentence."
      },
      {
        "option_text_marathi": "वडिलांनी पैसे दिले, परीक्षा शुल्क भरले",
        "option_text_english": "Father gave money, exam fees were paid",
        "is_correct": false,
        "reason_marathi": "हे देखील दोन स्वतंत्र विधाने आहेत, संयुक्त वाक्याचे उदाहरण आहे.",
        "reason_english": "These are also two independent statements, an example of a compound sentence."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "'व्यायाम करा आणि भरपूर खा.' या विधानाचे विध्यर्थी रूपांतर ओळखा.",
    "question_english": "Identify the 'obligatory/potential mood' transformation of the statement: 'Exercise and eat plenty.'",
    "options_marathi": [
      "व्यायाम करू आणि भरपूर खाऊ",
      "व्यायाम करावा आणि भरपूर खावे",
      "व्यायाम केल्यावर भरपूर खावे वाटते",
      "व्यायाम केल्यास भरपूर खाता येते"
    ],
    "options_english": [
      "We will exercise and eat plenty",
      "One should exercise and eat plenty",
      "After exercising, one feels like eating plenty",
      "If one exercises, one can eat plenty"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "वाक्याचे प्रकार (Types of Sentences) / क्रियापदाचे अर्थ (Moods of Verb)",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between different moods (स्वार्थ, आज्ञार्थ, विध्यर्थ, संकेतार्थ).",
    "explanation_english": "A 'विध्यर्थी वाक्य' (obligatory/potential mood sentence) expresses duty, obligation, possibility, or a suggestion. In Marathi, verbs in the विध्यर्थी mood often end with suffixes like -वा, -वी, -वे, -वो. The original sentence 'व्यायाम करा आणि भरपूर खा' is an imperative (आज्ञार्थी). Its transformation into विध्यर्थी requires changing the verbs to reflect obligation or suggestion. 'व्यायाम करावा आणि भरपूर खावे' (One should exercise and eat plenty) correctly uses the -वा/-वे endings, conveying the sense of duty or suggestion, which is the essence of the विध्यर्थी mood.",
    "explanation_marathi": "'विध्यर्थी वाक्य' हे कर्तव्य, शक्यता, योग्यता किंवा सल्ला व्यक्त करते. मराठीमध्ये, विध्यर्थी क्रियापदांना अनेकदा -वा, -वी, -वे, -वो असे प्रत्यय लागतात. मूळ वाक्य 'व्यायाम करा आणि भरपूर खा' हे आज्ञार्थी आहे. त्याचे विध्यर्थी रूपांतर करण्यासाठी क्रियापदांना कर्तव्य किंवा सल्ला व्यक्त करणारे रूप द्यावे लागते. 'व्यायाम करावा आणि भरपूर खावे' हे वाक्य -वा/-वे प्रत्ययांचा योग्य वापर करून कर्तव्य किंवा सल्ल्याची भावना व्यक्त करते, जी विध्यर्थी क्रियापदाची मुख्य ओळख आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "व्यायाम करू आणि भरपूर खाऊ",
        "option_text_english": "We will exercise and eat plenty",
        "is_correct": false,
        "reason_marathi": "हे स्वार्थ (भविष्यकाळ) दर्शवते, विध्यर्थ नाही.",
        "reason_english": "This indicates the indicative mood (future tense), not the obligatory mood."
      },
      {
        "option_text_marathi": "व्यायाम करावा आणि भरपूर खावे",
        "option_text_english": "One should exercise and eat plenty",
        "is_correct": true,
        "reason_marathi": "या वाक्यात 'करावा' आणि 'खावे' हे विध्यर्थी क्रियापदाचे रूप आहे, जे कर्तव्य किंवा सल्ला दर्शवते.",
        "reason_english": "This sentence uses the '-वा' and '-वे' forms of the verb, which are characteristic of the 'विध्यर्थी' mood, expressing duty or suggestion."
      },
      {
        "option_text_marathi": "व्यायाम केल्यावर भरपूर खावे वाटते",
        "option_text_english": "After exercising, one feels like eating plenty",
        "is_correct": false,
        "reason_marathi": "हे भावना किंवा इच्छा व्यक्त करते, विध्यर्थ नाही.",
        "reason_english": "This expresses a feeling or desire, not a direct obligation or suggestion."
      },
      {
        "option_text_marathi": "व्यायाम केल्यास भरपूर खाता येते",
        "option_text_english": "If one exercises, one can eat plenty",
        "is_correct": false,
        "reason_marathi": "हे शक्यता किंवा योग्यता दर्शवते, विध्यर्थ नाही.",
        "reason_english": "This expresses possibility or ability, not the core 'विध्यर्थी' sense of duty."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "सयाजीरावांनी कोणत्या धर्माभ्यासाला योगदान दिले ?",
    "question_english": "To which type of religious study did Sayajirao contribute?",
    "options_marathi": [
      "वर्णनात्मक धर्माभ्यास",
      "तुलनात्मक धर्माभ्यास",
      "ऐतिहासिक धर्माभ्यास",
      "सनातनी धर्माभ्यास"
    ],
    "options_english": [
      "Descriptive study of religion",
      "Comparative study of religion",
      "Historical study of religion",
      "Orthodox study of religion"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Sayajirao Gaekwad III's contributions / Religious Reforms",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between types of religious studies.",
    "explanation_english": "Sayajirao Gaekwad III, the Maharaja of Baroda, was a visionary ruler known for his progressive reforms. He encouraged a rational and scientific approach to understanding religion. His contributions to religious studies were primarily focused on 'तुलनात्मक धर्माभ्यास' (comparative study of religion). He believed in understanding different faiths objectively, comparing their tenets, and fostering inter-religious harmony, rather than promoting a single dogmatic view or merely describing religions.",
    "explanation_marathi": "बडोद्याचे महाराज सयाजीराव गायकवाड तिसरे हे शिक्षण आणि समाजकल्याण यासह विविध क्षेत्रांतील त्यांच्या पुरोगामी सुधारणांसाठी ओळखले जातात. त्यांनी धर्माच्या अभ्यासासाठी तर्कसंगत आणि वैज्ञानिक दृष्टिकोन स्वीकारण्यास प्रोत्साहन दिले. धार्मिक अभ्यासातील त्यांचे योगदान प्रामुख्याने 'तुलनात्मक धर्माभ्यास' (Comparative study of religion) यावर केंद्रित होते. ते विविध धर्मांना वस्तुनिष्ठपणे समजून घेण्यावर, त्यांच्या तत्त्वांची तुलना करण्यावर आणि आंतरधर्मीय सलोखा वाढवण्यावर विश्वास ठेवत होते, केवळ एका विशिष्ट मताचा प्रचार करण्याऐवजी किंवा धर्मांचे वर्णन करण्याऐवजी.",
    "options_breakdown": [
      {
        "option_text_marathi": "वर्णनात्मक धर्माभ्यास",
        "option_text_english": "Descriptive study of religion",
        "is_correct": false,
        "reason_marathi": "वर्णन हा अभ्यासाचा एक भाग असला तरी, सयाजीरावांचा भर सखोल, तुलनात्मक विश्लेषणावर होता.",
        "reason_english": "While description is part of any study, Sayajirao's emphasis was on a deeper, comparative analysis."
      },
      {
        "option_text_marathi": "तुलनात्मक धर्माभ्यास",
        "option_text_english": "Comparative study of religion",
        "is_correct": true,
        "reason_marathi": "सयाजीराव गायकवाड तिसरे यांनी विविध धर्मांना समजून घेण्यासाठी आणि सलोखा वाढवण्यासाठी तर्कसंगत आणि तुलनात्मक दृष्टिकोन स्वीकारला.",
        "reason_english": "Sayajirao Gaekwad III promoted a rational and comparative approach to understanding different religions, fostering inter-religious dialogue and harmony."
      },
      {
        "option_text_marathi": "ऐतिहासिक धर्माभ्यास",
        "option_text_english": "Historical study of religion",
        "is_correct": false,
        "reason_marathi": "इतिहास संबंधित असला तरी, त्यांचे प्राथमिक योगदान केवळ ऐतिहासिक नसून तुलनात्मक होते.",
        "reason_english": "While history is relevant, his primary contribution was not solely historical but comparative."
      },
      {
        "option_text_marathi": "सनातनी धर्माभ्यास",
        "option_text_english": "Orthodox study of religion",
        "is_correct": false,
        "reason_marathi": "हा त्यांच्या पुरोगामी आणि सुधारणावादी विचारसरणीच्या विरुद्ध आहे.",
        "reason_english": "This goes against his progressive and reformist ideology."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "सयाजीरावांनी धार्मिक सुसंवादासाठी कोणते अभियान चालविले ?",
    "question_english": "Which campaign did Sayajirao launch for religious harmony?",
    "options_marathi": [
      "धर्मशुद्धी अभियान",
      "धर्मसाक्षरता अभियान",
      "धर्मसंशोधन अभियान",
      "धर्मचिकित्सा अभियान"
    ],
    "options_english": [
      "Religious purification campaign",
      "Religious literacy campaign",
      "Religious research campaign",
      "Religious critique campaign"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Sayajirao Gaekwad III's contributions / Religious Reforms",
    "difficulty": "Medium",
    "trap_detected": "Similar-sounding options.",
    "explanation_english": "Sayajirao Gaekwad III was a strong advocate for religious harmony and understanding. To achieve this, he promoted 'धर्मसाक्षरता अभियान' (religious literacy campaign). This initiative aimed at educating people about the principles and practices of various religions, fostering mutual respect, and dispelling misconceptions. By increasing religious literacy, he sought to create an environment of informed dialogue and peaceful coexistence among different communities.",
    "explanation_marathi": "सयाजीराव गायकवाड तिसरे हे धार्मिक सलोखा आणि समजूतदारपणाचे मोठे पुरस्कर्ते होते. हे साध्य करण्यासाठी त्यांनी 'धर्मसाक्षरता अभियान' चालवले. या उपक्रमाचा उद्देश लोकांना विविध धर्मांची तत्त्वे आणि प्रथांबद्दल शिक्षित करणे, परस्पर आदर वाढवणे आणि गैरसमज दूर करणे हा होता. धार्मिक साक्षरता वाढवून, त्यांना विविध समुदायांमध्ये माहितीपूर्ण संवाद आणि शांततापूर्ण सहअस्तित्वाचे वातावरण निर्माण करायचे होते.",
    "options_breakdown": [
      {
        "option_text_marathi": "धर्मशुद्धी अभियान",
        "option_text_english": "Religious purification campaign",
        "is_correct": false,
        "reason_marathi": "याचा अर्थ धर्मांतर्गत सुधारणा किंवा शुद्धीकरण, आंतरधर्मीय सलोखा नाही.",
        "reason_english": "This implies internal reform or cleansing within a religion, not necessarily inter-religious harmony."
      },
      {
        "option_text_marathi": "धर्मसाक्षरता अभियान",
        "option_text_english": "Religious literacy campaign",
        "is_correct": true,
        "reason_marathi": "विविध धर्मांबद्दल समज आणि ज्ञान वाढवणे हे धार्मिक सलोखा आणि संवादासाठी महत्त्वाचे आहे.",
        "reason_english": "Promoting understanding and knowledge about different religions is key to fostering religious harmony and dialogue."
      },
      {
        "option_text_marathi": "धर्मसंशोधन अभियान",
        "option_text_english": "Religious research campaign",
        "is_correct": false,
        "reason_marathi": "संशोधन हा एक भाग असला तरी, 'साक्षरता' हा सार्वजनिक समज आणि सलोख्याशी अधिक थेट संबंधित आहे.",
        "reason_english": "While research might be part of it, 'literacy' is more directly related to public understanding and harmony."
      },
      {
        "option_text_marathi": "धर्मचिकित्सा अभियान",
        "option_text_english": "Religious critique campaign",
        "is_correct": false,
        "reason_marathi": "चिकित्सक दृष्टिकोन महत्त्वाचा असला तरी, 'साक्षरता' हा सलोखा निर्माण करण्यासाठी अधिक सकारात्मक शब्द आहे.",
        "reason_english": "While critical examination was part of his rational approach, 'critique' might sound confrontational, whereas 'literacy' is about building understanding for harmony."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "अध्यासनाने कोणते कार्य हाती घेतले होते ?",
    "question_english": "Which task was undertaken by the 'Adhyasan' (Chair/Department)?",
    "options_marathi": [
      "शोधनिबंध आणि ग्रंथ प्रकाशन",
      "धर्मसुधारणा",
      "तत्त्वज्ञानाची चिकित्सा",
      "धर्मप्रसार"
    ],
    "options_english": [
      "Publication of research papers and books",
      "Religious reform",
      "Critique of philosophy",
      "Religious propagation"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Sayajirao Gaekwad III's contributions / Academic Institutions",
    "difficulty": "Medium",
    "trap_detected": "General vs. specific activities.",
    "explanation_english": "The term 'अध्यासन' (Adhyasan) typically refers to an academic chair or a research department established for the systematic study of a particular subject. In the context of Sayajirao Gaekwad III's efforts to promote rational and comparative religious studies, such an 'अध्यासन' would primarily undertake academic activities. Therefore, its main function would be 'शोधनिबंध आणि ग्रंथ प्रकाशन' (publication of research papers and books), which is the tangible output of scholarly research and dissemination of knowledge.",
    "explanation_marathi": "'अध्यासन' हा शब्द सामान्यतः एखाद्या विशिष्ट विषयाच्या पद्धतशीर अभ्यासासाठी स्थापन केलेल्या शैक्षणिक खुर्ची किंवा संशोधन विभागाला सूचित करतो. सयाजीराव गायकवाड तिसरे यांच्या तर्कसंगत आणि तुलनात्मक धार्मिक अभ्यासाला प्रोत्साहन देण्याच्या प्रयत्नांच्या संदर्भात, असे 'अध्यासन' प्रामुख्याने शैक्षणिक कार्य हाती घेईल. त्यामुळे, त्याचे मुख्य कार्य 'शोधनिबंध आणि ग्रंथ प्रकाशन' (संशोधनपर लेख आणि पुस्तके प्रकाशित करणे) हे असेल, जे विद्वत्तापूर्ण संशोधन आणि ज्ञान प्रसाराचे मूर्त स्वरूप आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "शोधनिबंध आणि ग्रंथ प्रकाशन",
        "option_text_english": "Publication of research papers and books",
        "is_correct": true,
        "reason_marathi": "शैक्षणिक 'अध्यासना'चे मुख्य कार्य संशोधन करणे आणि त्याचे निष्कर्ष प्रकाशनांद्वारे प्रसारित करणे हे असते.",
        "reason_english": "An academic 'Adhyasan' is primarily involved in research and disseminating its findings through publications."
      },
      {
        "option_text_marathi": "धर्मसुधारणा",
        "option_text_english": "Religious reform",
        "is_correct": false,
        "reason_marathi": "ही एक व्यापक सामाजिक उद्दिष्ट आहे, शैक्षणिक खुर्चीचे थेट कार्य नाही.",
        "reason_english": "This is a broader societal goal, not the direct function of an academic chair."
      },
      {
        "option_text_marathi": "तत्त्वज्ञानाची चिकित्सा",
        "option_text_english": "Critique of philosophy",
        "is_correct": false,
        "reason_marathi": "ही संशोधनाचा एक भाग असू शकते, परंतु 'प्रकाशन' हे अशा चिकित्सेचे अंतिम फलित आहे.",
        "reason_english": "While this might be part of the research, 'publication' is the output of such critique."
      },
      {
        "option_text_marathi": "धर्मप्रसार",
        "option_text_english": "Religious propagation",
        "is_correct": false,
        "reason_marathi": "हे सयाजीरावांच्या उपक्रमांच्या शैक्षणिक आणि धर्मनिरपेक्ष स्वरूपाच्या विरुद्ध आहे.",
        "reason_english": "This is contrary to the academic and secular nature of Sayajirao's initiatives."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "सयाजीरावांनी श्रद्धेला कशाची जोड दिली ?",
    "question_english": "What did Sayajirao combine with faith?",
    "options_marathi": [
      "धर्मप्रामाण्य",
      "तत्त्वप्रामाण्य",
      "बुद्धिप्रामाण्य",
      "व्यक्तीप्रामाण्य"
    ],
    "options_english": [
      "Religious authority",
      "Philosophical authority",
      "Rationalism/Reason",
      "Individual authority"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Sayajirao Gaekwad III's ideology / Rationalism",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Sayajirao Gaekwad III was a staunch proponent of rationalism and scientific inquiry. He believed that faith and religious practices should not be blindly followed but should be examined through the lens of reason. Therefore, he advocated for combining 'श्रद्धा' (faith) with 'बुद्धिप्रामाण्य' (rationalism or reason). This meant encouraging people to understand the underlying principles of their beliefs, question superstitions, and adopt a critical approach to religious matters.",
    "explanation_marathi": "सयाजीराव गायकवाड तिसरे हे बुद्धिवाद आणि वैज्ञानिक चौकशीचे कट्टर पुरस्कर्ते होते. त्यांचा असा विश्वास होता की श्रद्धा आणि धार्मिक प्रथांचे आंधळेपणाने पालन करू नये, तर त्यांचे तर्काच्या दृष्टिकोनातून परीक्षण केले पाहिजे. त्यामुळे, त्यांनी 'श्रद्धा' (faith) ला 'बुद्धिप्रामाण्य' (rationalism or reason) ची जोड देण्याचे समर्थन केले. याचा अर्थ लोकांना त्यांच्या विश्वासाची मूळ तत्त्वे समजून घेण्यास, अंधश्रद्धांवर प्रश्न विचारण्यास आणि धार्मिक बाबींमध्ये चिकित्सक दृष्टिकोन स्वीकारण्यास प्रोत्साहित करणे.",
    "options_breakdown": [
      {
        "option_text_marathi": "धर्मप्रामाण्य",
        "option_text_english": "Religious authority",
        "is_correct": false,
        "reason_marathi": "सयाजीरावांनी धार्मिक अधिकाराचे आंधळेपणाने पालन करण्यास आव्हान दिले.",
        "reason_english": "Sayajirao challenged blind adherence to religious authority."
      },
      {
        "option_text_marathi": "तत्त्वप्रामाण्य",
        "option_text_english": "Philosophical authority",
        "is_correct": false,
        "reason_marathi": "तत्त्वे महत्त्वाची असली तरी, 'बुद्धिप्रामाण्य' हा त्यांच्या तर्कावर भर देण्याबद्दल अधिक थेट आणि व्यापक शब्द आहे.",
        "reason_english": "While principles are important, 'बुद्धिप्रामाण्य' is a more direct and encompassing term for his emphasis on reason."
      },
      {
        "option_text_marathi": "बुद्धिप्रामाण्य",
        "option_text_english": "Rationalism/Reason",
        "is_correct": true,
        "reason_marathi": "सयाजीराव गायकवाड तिसरे यांनी जीवनाच्या सर्व पैलूंमध्ये, विशेषतः धर्मात, तर्क आणि चिकित्सक विचारसरणीचा वापर करण्यास सातत्याने प्रोत्साहन दिले.",
        "reason_english": "Sayajirao Gaekwad III consistently promoted the use of reason and critical thinking in all aspects of life, including religion."
      },
      {
        "option_text_marathi": "व्यक्तीप्रामाण्य",
        "option_text_english": "Individual authority",
        "is_correct": false,
        "reason_marathi": "व्यक्तिगत स्वातंत्र्य महत्त्वाचे असले तरी, श्रद्धेचे परीक्षण करण्यासाठी त्यांनी बुद्धिवादाचे समर्थन केले.",
        "reason_english": "While individual freedom was valued, the core principle he advocated for examining faith was reason, not just individual preference."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "वरील उताऱ्यास योग्य शीर्षक कोणते ?",
    "question_english": "What is the appropriate title for the above passage?",
    "options_marathi": [
      "धर्माचा वैज्ञानिक अभ्यास",
      "धर्मसंशोधन",
      "धर्माधश्रद्धा",
      "धर्मसाक्षरता"
    ],
    "options_english": [
      "Scientific study of religion",
      "Religious research",
      "Blind faith",
      "Religious literacy"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Sayajirao Gaekwad III's vision / Religious Understanding",
    "difficulty": "Medium",
    "trap_detected": "Choosing between closely related concepts.",
    "explanation_english": "This question asks for the most suitable title for a passage, which, based on the preceding questions (16-19), discusses Sayajirao Gaekwad III's progressive views and initiatives regarding religion. The passage likely highlights his promotion of 'तुलनात्मक धर्माभ्यास' (comparative study of religion), 'धर्मसाक्षरता अभियान' (religious literacy campaign), and the integration of 'बुद्धिप्रामाण्य' (rationalism) with faith. Among the given options, 'धर्मसाक्षरता' (Religious literacy) serves as the most comprehensive title. It encapsulates the idea of fostering informed understanding, critical thinking, and mutual respect among different faiths, which was the ultimate goal of Sayajirao's efforts in this domain. While 'धर्माचा वैज्ञानिक अभ्यास' is also relevant, 'धर्मसाक्षरता' better reflects the broader societal impact and educational outreach he aimed for.",
    "explanation_marathi": "हा प्रश्न एका उताऱ्यासाठी सर्वात योग्य शीर्षक विचारतो, जो मागील प्रश्नांवरून (१६-१९) सयाजीराव गायकवाड तिसरे यांच्या धर्माविषयीच्या पुरोगामी दृष्टिकोन आणि उपक्रमांवर आधारित आहे. हा उतारा 'तुलनात्मक धर्माभ्यास', 'धर्मसाक्षरता अभियान' आणि श्रद्धेसोबत 'बुद्धिप्रामाण्य' (बुद्धिवाद) यांचा समावेश करण्यावर भर देत असावा. दिलेल्या पर्यायांपैकी, 'धर्मसाक्षरता' (Religious literacy) हे सर्वात व्यापक शीर्षक आहे. ते विविध धर्मांमध्ये माहितीपूर्ण समज, चिकित्सक विचार आणि परस्पर आदर वाढवण्याच्या कल्पनेला मूर्त रूप देते, जे या क्षेत्रात सयाजीरावांच्या प्रयत्नांचे अंतिम ध्येय होते. 'धर्माचा वैज्ञानिक अभ्यास' देखील संबंधित असला तरी, 'धर्मसाक्षरता' हे त्यांनी समाजात साधू इच्छिलेल्या व्यापक परिणामांना आणि शैक्षणिक प्रसाराला अधिक चांगल्या प्रकारे प्रतिबिंबित करते.",
    "options_breakdown": [
      {
        "option_text_marathi": "धर्माचा वैज्ञानिक अभ्यास",
        "option_text_english": "Scientific study of religion",
        "is_correct": false,
        "reason_marathi": "सयाजीरावांनी वैज्ञानिक दृष्टिकोन स्वीकारला असला तरी, 'धर्मसाक्षरता' हा सामान्य लोकांसाठी अशा अभ्यासाच्या परिणामासाठी अधिक व्यापक शब्द आहे.",
        "reason_english": "While Sayajirao promoted a scientific approach, 'Religious literacy' is a broader term for the outcome of such study for the general populace."
      },
      {
        "option_text_marathi": "धर्मसंशोधन",
        "option_text_english": "Religious research",
        "is_correct": false,
        "reason_marathi": "ही एक विशिष्ट शैक्षणिक क्रिया आहे, तर उताऱ्याची थीम सार्वजनिक समज आणि सलोख्याशी संबंधित आहे.",
        "reason_english": "This is a specific academic activity, whereas the passage's theme is broader, encompassing public understanding and harmony."
      },
      {
        "option_text_marathi": "धर्माधश्रद्धा",
        "option_text_english": "Blind faith",
        "is_correct": false,
        "reason_marathi": "सयाजीरावांनी ज्या गोष्टीला विरोध केला, ती उताऱ्याची मध्यवर्ती थीम नाही.",
        "reason_english": "This is what Sayajirao opposed, not the central theme of his work."
      },
      {
        "option_text_marathi": "धर्मसाक्षरता",
        "option_text_english": "Religious literacy",
        "is_correct": true,
        "reason_marathi": "हा शब्द सयाजीरावांच्या माहितीपूर्ण समज, तर्कसंगत चौकशी आणि विविध धार्मिक समुदायांमध्ये सलोखा वाढवण्याच्या प्रयत्नांचा उत्तम प्रकारे सारांश देतो.",
        "reason_english": "This term best summarizes Sayajirao's efforts to promote informed understanding, rational inquiry, and harmony among different religious communities."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "खालीलपैकी कोणता शब्द निपुण या शब्दाचा समानार्थी शब्द नाही ?",
    "question_english": "Which of the following words is NOT a synonym for 'निपुण' (Nipun - expert/skilled)?",
    "options_marathi": [
      "कसबी",
      "कुशल",
      "निरामय",
      "पारंगत"
    ],
    "options_english": [
      "Skilled",
      "Proficient",
      "Healthy/Sound",
      "Expert"
    ],
    "correct_option_index": 3,
    "subject": "Marathi",
    "topic": "समानार्थी शब्द (Synonyms)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The word 'निपुण' (Nipun) means expert, skilled, or proficient. We need to identify the word that is NOT a synonym. 'कसबी' (Kasabi), 'कुशल' (Kushal), and 'पारंगत' (Parangat) all convey the meaning of being skilled or expert. 'निरामय' (Niramay), however, means healthy, sound, or free from disease, which is unrelated to skill or expertise. Therefore, 'निरामय' is the correct answer as it is not a synonym for 'निपुण'.",
    "explanation_marathi": "'निपुण' या शब्दाचा अर्थ कुशल, प्रवीण किंवा पारंगत असा होतो. आपल्याला असा शब्द शोधायचा आहे जो 'निपुण' चा समानार्थी नाही. 'कसबी', 'कुशल' आणि 'पारंगत' या तिन्ही शब्दांचा अर्थ कुशल किंवा प्रवीण असाच होतो. 'निरामय' या शब्दाचा अर्थ निरोगी, सुदृढ किंवा रोगमुक्त असा होतो, जो कौशल्य किंवा निपुणतेशी संबंधित नाही. म्हणून, 'निरामय' हा शब्द 'निपुण' चा समानार्थी नसल्यामुळे तो योग्य पर्याय आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "कसबी",
        "option_text_english": "Skilled",
        "is_correct": false,
        "reason": "'कसबी' म्हणजे कुशल किंवा प्रवीण. हा 'निपुण' या शब्दाचा समानार्थी शब्द आहे."
      },
      {
        "option_text_marathi": "कुशल",
        "option_text_english": "Proficient",
        "is_correct": false,
        "reason": "'कुशल' म्हणजे निपुण किंवा प्रवीण. हा 'निपुण' या शब्दाचा समानार्थी शब्द आहे."
      },
      {
        "option_text_marathi": "निरामय",
        "option_text_english": "Healthy/Sound",
        "is_correct": true,
        "reason": "'निरामय' म्हणजे निरोगी किंवा सुदृढ. हा 'निपुण' या शब्दाचा समानार्थी शब्द नाही, त्यामुळे हा योग्य पर्याय आहे."
      },
      {
        "option_text_marathi": "पारंगत",
        "option_text_english": "Expert",
        "is_correct": false,
        "reason": "'पारंगत' म्हणजे एखाद्या गोष्टीत पूर्णपणे कुशल किंवा प्रवीण. हा 'निपुण' या शब्दाचा समानार्थी शब्द आहे."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "'कृपण' या शब्दाचा विरुद्धार्थी शब्द ओळखा.",
    "question_english": "Identify the antonym of 'कृपण' (Krupan - miserly/stingy).",
    "options_marathi": [
      "उदार",
      "कृतघ्न",
      "कुत्सित",
      "कंजूष"
    ],
    "options_english": [
      "Generous",
      "Ungrateful",
      "Malicious",
      "Miserly"
    ],
    "correct_option_index": 1,
    "subject": "Marathi",
    "topic": "विरुद्धार्थी शब्द (Antonyms)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The word 'कृपण' (Krupan) means miserly or stingy. We need to find its antonym. 'उदार' (Udar) means generous, which is the direct opposite of miserly. 'कृतघ्न' (Krutaghn) means ungrateful, 'कुत्सित' (Kutsit) means malicious, and 'कंजूष' (Kanjoosh) is a synonym for 'कृपण'. Therefore, 'उदार' is the correct antonym.",
    "explanation_marathi": "'कृपण' या शब्दाचा अर्थ कंजूष किंवा चिकू असा होतो. आपल्याला त्याचा विरुद्धार्थी शब्द ओळखायचा आहे. 'उदार' म्हणजे दानशूर किंवा मोठ्या मनाचा, जो 'कृपण' च्या अगदी विरुद्ध आहे. 'कृतघ्न' म्हणजे उपकार न मानणारा, 'कुत्सित' म्हणजे वाईट हेतू असलेला आणि 'कंजूष' हा 'कृपण' चा समानार्थी शब्द आहे. म्हणून, 'उदार' हा योग्य विरुद्धार्थी शब्द आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "उदार",
        "option_text_english": "Generous",
        "is_correct": true,
        "reason": "'उदार' म्हणजे दानशूर किंवा मोठ्या मनाचा. हा 'कृपण' या शब्दाचा योग्य विरुद्धार्थी शब्द आहे."
      },
      {
        "option_text_marathi": "कृतघ्न",
        "option_text_english": "Ungrateful",
        "is_correct": false,
        "reason": "'कृतघ्न' म्हणजे उपकार न मानणारा. हा 'कृपण' चा विरुद्धार्थी शब्द नाही."
      },
      {
        "option_text_marathi": "कुत्सित",
        "option_text_english": "Malicious",
        "is_correct": false,
        "reason": "'कुत्सित' म्हणजे वाईट हेतू असलेला. हा 'कृपण' चा विरुद्धार्थी शब्द नाही."
      },
      {
        "option_text_marathi": "कंजूष",
        "option_text_english": "Miserly",
        "is_correct": false,
        "reason": "'कंजूष' हा 'कृपण' या शब्दाचा समानार्थी शब्द आहे, विरुद्धार्थी नाही."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "खालील शब्दजोडीतून अयोग्य शब्दजोडी ओळखा.",
    "question_english": "Identify the incorrect word pair from the following.",
    "options_marathi": [
      "ओठ - ओष्ठ्य",
      "पिवळा - पित्त",
      "जोगी - भोगी",
      "काम - कार्य"
    ],
    "options_english": [
      "Lip - Labial",
      "Yellow - Bile",
      "Ascetic - Hedonist",
      "Work - Task"
    ],
    "correct_option_index": 3,
    "subject": "Marathi",
    "topic": "शब्दसंग्रह (Vocabulary) / शब्दजोड्या (Word Pairs)",
    "difficulty": "Medium",
    "trap_detected": "Interpretation of 'अयोग्य शब्दजोडी'",
    "explanation_english": "The question asks to identify the 'अयोग्य' (incorrect/unsuitable) word pair. Let's analyze each pair:\n1. 'ओठ - ओष्ठ्य': 'ओष्ठ्य' refers to something related to 'ओठ' (lips), often used in phonetics (labial sounds). This is a related pair.\n2. 'पिवळा - पित्त': 'पिवळा' (yellow) is associated with 'पित्त' (bile), which can cause yellowishness (e.g., jaundice). This is an associated pair.\n3. 'जोगी - भोगी': 'जोगी' (Jogi) means an ascetic, one who renounces worldly pleasures. 'भोगी' (Bhogi) means one who enjoys worldly pleasures. These are antonyms, not a pair related by derivation, association, or synonymy.\n4. 'काम - कार्य': Both 'काम' and 'कार्य' mean work or task. These are synonyms.\nGiven that the other pairs show a relationship of derivation, association, or synonymy, the pair 'जोगी - भोगी' is 'अयोग्य' because it represents an antonymous relationship, which is different from the other types of relationships presented.",
    "explanation_marathi": "प्रस्तुत प्रश्न 'अयोग्य' शब्दजोडी ओळखण्यास सांगतो. प्रत्येक जोडीचे विश्लेषण करूया:\n1. 'ओठ - ओष्ठ्य': 'ओष्ठ्य' म्हणजे 'ओठांशी' संबंधित (उदा. ओष्ठ्य वर्ण). ही एक संबंधित जोडी आहे.\n2. 'पिवळा - पित्त': 'पिवळा' रंग 'पित्त' (शरीरातील एक दोष) शी संबंधित आहे, ज्यामुळे पिवळेपणा येऊ शकतो (उदा. कावीळ). ही एक संबंधित जोडी आहे.\n3. 'जोगी - भोगी': 'जोगी' म्हणजे संन्यासी, जो ऐहिक सुखांचा त्याग करतो. 'भोगी' म्हणजे ऐहिक सुखांचा उपभोग घेणारा. ही जोडी समानार्थी किंवा संबंधित नसून, विरुद्धार्थी आहे.\n4. 'काम - कार्य': 'काम' आणि 'कार्य' या दोन्ही शब्दांचा अर्थ एकच (कार्य, कृती) आहे. ही समानार्थी जोडी आहे.\nइतर जोड्यांमध्ये साधर्म्य, संबंध किंवा समानार्थी अर्थ असताना, 'जोगी - भोगी' ही जोडी विरुद्धार्थी असल्याने ती 'अयोग्य' ठरते.",
    "options_breakdown": [
      {
        "option_text_marathi": "ओठ - ओष्ठ्य",
        "option_text_english": "Lip - Labial",
        "is_correct": false,
        "reason": "ही एक योग्य जोडी आहे कारण 'ओष्ठ्य' हा शब्द 'ओठांशी' संबंधित आहे."
      },
      {
        "option_text_marathi": "पिवळा - पित्त",
        "option_text_english": "Yellow - Bile",
        "is_correct": false,
        "reason": "ही एक योग्य जोडी आहे कारण 'पिवळा' रंग 'पित्त' या शरीरातील दोषाशी संबंधित आहे."
      },
      {
        "option_text_marathi": "जोगी - भोगी",
        "option_text_english": "Ascetic - Hedonist",
        "is_correct": true,
        "reason": "'जोगी' आणि 'भोगी' हे दोन्ही शब्द एकमेकांचे विरुद्धार्थी आहेत, समानार्थी किंवा संबंधित नाहीत. त्यामुळे ही अयोग्य शब्दजोडी आहे."
      },
      {
        "option_text_marathi": "काम - कार्य",
        "option_text_english": "Work - Task",
        "is_correct": false,
        "reason": "ही एक योग्य जोडी आहे कारण 'काम' आणि 'कार्य' हे समानार्थी शब्द आहेत."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "खालीलपैकी कोणता पर्याय 'अन्योक्ती' शब्दाचा अर्थ स्पष्ट करतो.",
    "question_english": "Which of the following options clarifies the meaning of the word 'अन्योक्ती' (Anyokti - allegory/indirect speech)?",
    "options_marathi": [
      "इतर व्यक्तीशी युक्तीवाद करणे",
      "एकाला उद्देशून दुसऱ्याला बोलणे",
      "एकाच वेळी अनेक गोष्टीत लक्ष देणारा",
      "तिथी, वार न ठरवता आलेला"
    ],
    "options_english": [
      "Arguing with another person",
      "Speaking to someone else by addressing another",
      "One who pays attention to many things at once",
      "One who comes without fixing date or day"
    ],
    "correct_option_index": 2,
    "subject": "Marathi",
    "topic": "अलंकार (Figures of Speech) / शब्दसंग्रह (Vocabulary)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The word 'अन्योक्ती' (Anyokti) is a figure of speech where something is said about one thing but is actually meant to apply to another. It involves indirect speech or an allegory. The option 'एकाला उद्देशून दुसऱ्याला बोलणे' (Speaking to someone else by addressing another) perfectly captures this meaning, where a statement is made ostensibly for one person or situation, but its true intent is for another.",
    "explanation_marathi": "'अन्योक्ती' हा एक अलंकार आहे, ज्यामध्ये एकाला उद्देशून बोललेले वाक्य दुसऱ्याला लागू पडते किंवा दुसऱ्यासाठी असते. म्हणजेच, प्रत्यक्षपणे एका गोष्टीबद्दल बोलताना अप्रत्यक्षपणे दुसऱ्या गोष्टीचा संदर्भ देणे. 'एकाला उद्देशून दुसऱ्याला बोलणे' हा पर्याय 'अन्योक्ती' या शब्दाचा अर्थ अचूकपणे स्पष्ट करतो.",
    "options_breakdown": [
      {
        "option_text_marathi": "इतर व्यक्तीशी युक्तीवाद करणे",
        "option_text_english": "Arguing with another person",
        "is_correct": false,
        "reason": "हा पर्याय 'अन्योक्ती' या शब्दाचा अर्थ स्पष्ट करत नाही. 'युक्तीवाद करणे' म्हणजे वाद घालणे."
      },
      {
        "option_text_marathi": "एकाला उद्देशून दुसऱ्याला बोलणे",
        "option_text_english": "Speaking to someone else by addressing another",
        "is_correct": true,
        "reason": "हा पर्याय 'अन्योक्ती' या शब्दाचा अचूक अर्थ आहे, जिथे अप्रत्यक्षपणे दुसऱ्याला संदेश दिला जातो."
      },
      {
        "option_text_marathi": "एकाच वेळी अनेक गोष्टीत लक्ष देणारा",
        "option_text_english": "One who pays attention to many things at once",
        "is_correct": false,
        "reason": "हा पर्याय 'अन्योक्ती' या शब्दाचा अर्थ स्पष्ट करत नाही. हा 'अष्टवधानी' सारख्या शब्दाचा अर्थ असू शकतो."
      },
      {
        "option_text_marathi": "तिथी, वार न ठरवता आलेला",
        "option_text_english": "One who comes without fixing date or day",
        "is_correct": false,
        "reason": "हा पर्याय 'अन्योक्ती' या शब्दाचा अर्थ स्पष्ट करत नाही. हा 'अतिथी' या शब्दाचा अर्थ आहे."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "'दुःखामुळे सोडलेला दीर्घ श्वास' या शब्दसमूहासाठी योग्य शब्द कोणता ?",
    "question_english": "Which is the correct word for the phrase 'दुःखामुळे सोडलेला दीर्घ श्वास' (a long breath released due to sorrow)?",
    "options_marathi": [
      "हतबलता",
      "सुस्कारा",
      "उ:श्वास",
      "हुंदका"
    ],
    "options_english": [
      "Helplessness",
      "Sigh (of relief/weariness)",
      "Sigh/Exhalation (of sorrow)",
      "Sob"
    ],
    "correct_option_index": 3,
    "subject": "Marathi",
    "topic": "शब्दसमूहाबद्दल एक शब्द (One word for a phrase)",
    "difficulty": "Medium",
    "trap_detected": "Close options (सुस्कारा vs उ:श्वास)",
    "explanation_english": "The phrase 'दुःखामुळे सोडलेला दीर्घ श्वास' refers to a deep breath or sigh released specifically due to sorrow or grief. Let's examine the options:\n1. 'हतबलता' (Hatbalta) means helplessness, which is a state of mind, not a breath.\n2. 'सुस्कारा' (Suskaara) generally refers to a sigh, often of relief, weariness, or sometimes sorrow. It's a common term.\n3. 'उ:श्वास' (U:shwas) is a more formal and precise term for a deep sigh, particularly one associated with sorrow, grief, or weariness. Many Marathi dictionaries define 'उ:श्वास' as 'दुःखामुळे सोडलेला दीर्घ श्वास'.\n4. 'हुंदका' (Hundka) means a sob, which is a choked cry, not a breath.\nWhile 'सुस्कारा' can sometimes imply sorrow, 'उ:श्वास' is a more accurate and specific term for a deep breath released due to sorrow. Hence, 'उ:श्वास' is the most appropriate answer.",
    "explanation_marathi": "'दुःखामुळे सोडलेला दीर्घ श्वास' या शब्दसमूहासाठी योग्य शब्द शोधायचा आहे. पर्यायांचे विश्लेषण करूया:\n1. 'हतबलता' म्हणजे असहाय्यता, जी एक मानसिक अवस्था आहे, श्वास नाही.\n2. 'सुस्कारा' म्हणजे दीर्घ श्वास, जो सहसा थकवा, कंटाळा, समाधान किंवा कधीकधी दुःख व्यक्त करण्यासाठी सोडला जातो. हा एक सामान्य शब्द आहे.\n3. 'उ:श्वास' हा दुःख, चिंता किंवा थकवा यामुळे सोडलेल्या दीर्घ श्वासासाठी अधिक अचूक आणि औपचारिक शब्द आहे. अनेक मराठी शब्दकोशांमध्ये 'उ:श्वास' म्हणजे 'दुःखामुळे सोडलेला दीर्घ श्वास' अशी व्याख्या दिली आहे.\n4. 'हुंदका' म्हणजे रडताना येणारा आवाज किंवा आवंढा, जो श्वास नाही.\n'सुस्कारा' जरी कधीकधी दुःखासाठी वापरला जात असला तरी, 'उ:श्वास' हा दुःखापोटी सोडलेल्या दीर्घ श्वासासाठी अधिक योग्य आणि विशिष्ट शब्द आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "हतबलता",
        "option_text_english": "Helplessness",
        "is_correct": false,
        "reason": "'हतबलता' म्हणजे असहाय्यता, जी एक भावना आहे, श्वास नाही."
      },
      {
        "option_text_marathi": "सुस्कारा",
        "option_text_english": "Sigh (of relief/weariness)",
        "is_correct": false,
        "reason": "'सुस्कारा' हा दीर्घ श्वास असला तरी तो अनेकदा समाधान किंवा थकवा व्यक्त करतो. दुःखासाठी 'उ:श्वास' अधिक योग्य आहे."
      },
      {
        "option_text_marathi": "उ:श्वास",
        "option_text_english": "Sigh/Exhalation (of sorrow)",
        "is_correct": true,
        "reason": "'उ:श्वास' म्हणजे दुःख, चिंता किंवा थकवा यामुळे सोडलेला दीर्घ श्वास. हा शब्दसमूहासाठी सर्वात योग्य शब्द आहे."
      },
      {
        "option_text_marathi": "हुंदका",
        "option_text_english": "Sob",
        "is_correct": false,
        "reason": "'हुंदका' म्हणजे रडताना येणारा आवाज किंवा आवंढा, तो दीर्घ श्वास नाही."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "\"गंभीर चुकीमुळे सुनीता नवऱ्यासमोर अपराध्यासारखी उभी होती\", हे विधान कोणता वाक्प्रचार दर्शविते ?",
    "question_english": "The statement 'Due to a serious mistake, Sunita stood like a culprit in front of her husband' represents which idiom?",
    "options_marathi": [
      "काकदृष्टीने पाहणे",
      "जीवाचे रान करणे",
      "मनात मांडे खाणे",
      "मूग धरून बसणे"
    ],
    "options_english": [
      "To look with a crow's eye (keenly)",
      "To work extremely hard",
      "To daydream/fantasize",
      "To remain silent due to guilt/fear"
    ],
    "correct_option_index": 4,
    "subject": "Marathi",
    "topic": "वाक्प्रचार (Idioms)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The sentence describes Sunita standing 'like a culprit' due to a serious mistake, implying she was silent, ashamed, or unable to speak. Let's look at the idioms:\n1. 'काकदृष्टीने पाहणे' means to observe keenly or suspiciously.\n2. 'जीवाचे रान करणे' means to work extremely hard or make great efforts.\n3. 'मनात मांडे खाणे' means to daydream, fantasize, or build castles in the air.\n4. 'मूग धरून बसणे' means to remain silent, especially due to guilt, fear, or stubbornness. This idiom perfectly fits the context of someone standing like a culprit, unable to speak.",
    "explanation_marathi": "दिलेले वाक्य 'गंभीर चुकीमुळे सुनीता नवऱ्यासमोर अपराध्यासारखी उभी होती' असे आहे, याचा अर्थ ती अपराधीपणाच्या भावनेने गप्प उभी होती किंवा तिला बोलता येत नव्हते. वाक्प्रचारांचे अर्थ पाहूया:\n1. 'काकदृष्टीने पाहणे' म्हणजे बारकाईने किंवा संशयाने पाहणे.\n2. 'जीवाचे रान करणे' म्हणजे खूप कष्ट करणे किंवा खूप प्रयत्न करणे.\n3. 'मनात मांडे खाणे' म्हणजे मनातल्या मनात कल्पना करणे किंवा स्वप्नरंजन करणे.\n4. 'मूग धरून बसणे' म्हणजे अपराधीपणाच्या भावनेने, भीतीमुळे किंवा हट्टीपणामुळे गप्प बसणे. हा वाक्प्रचार दिलेल्या वाक्याच्या अर्थाशी पूर्णपणे जुळतो, जिथे अपराधी व्यक्ती गप्प उभी आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "काकदृष्टीने पाहणे",
        "option_text_english": "To look with a crow's eye (keenly)",
        "is_correct": false,
        "reason": "या वाक्प्रचाराचा अर्थ बारकाईने किंवा संशयाने पाहणे असा होतो, जो दिलेल्या वाक्याशी जुळत नाही."
      },
      {
        "option_text_marathi": "जीवाचे रान करणे",
        "option_text_english": "To work extremely hard",
        "is_correct": false,
        "reason": "या वाक्प्रचाराचा अर्थ खूप कष्ट करणे असा होतो, जो दिलेल्या वाक्याशी जुळत नाही."
      },
      {
        "option_text_marathi": "मनात मांडे खाणे",
        "option_text_english": "To daydream/fantasize",
        "is_correct": false,
        "reason": "या वाक्प्रचाराचा अर्थ मनातल्या मनात कल्पना करणे असा होतो, जो दिलेल्या वाक्याशी जुळत नाही."
      },
      {
        "option_text_marathi": "मूग धरून बसणे",
        "option_text_english": "To remain silent due to guilt/fear",
        "is_correct": true,
        "reason": "या वाक्प्रचाराचा अर्थ अपराधीपणाच्या भावनेने किंवा भीतीमुळे गप्प बसणे असा होतो, जो 'अपराध्‍यासारखी उभी होती' या विधानाशी अचूक जुळतो."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "'स्वातंत्र्य सैनिकांचा आदर करा', या वाक्याचे नकारार्थी वाक्य बनवा.",
    "question_english": "Convert the sentence 'स्वातंत्र्य सैनिकांचा आदर करा' (Respect freedom fighters) into a negative sentence.",
    "options_marathi": [
      "स्वातंत्र्य सैनिकांचा मान राखा",
      "स्वातंत्र्य सैनिकांचा अपमान नका करू",
      "स्वातंत्र्य सैनिकांना आदराने वागवा",
      "स्वातंत्र्य सैनिकांचा अनादर करू नका"
    ],
    "options_english": [
      "Maintain the respect of freedom fighters",
      "Do not insult freedom fighters",
      "Treat freedom fighters with respect",
      "Do not disrespect freedom fighters"
    ],
    "correct_option_index": 4,
    "subject": "Marathi",
    "topic": "वाक्य रूपांतर (Sentence Transformation)",
    "difficulty": "Medium",
    "trap_detected": "Close distractor (Option 2)",
    "explanation_english": "The goal is to transform the given positive sentence 'स्वातंत्र्य सैनिकांचा आदर करा' (Respect freedom fighters) into a negative sentence without changing its original meaning. This requires using an antonym for the key word 'आदर' (respect) and then negating the action.\n1. 'स्वातंत्र्य सैनिकांचा मान राखा' is a positive sentence with a similar meaning, not negative.\n2. 'स्वातंत्र्य सैनिकांचा अपमान नका करू' is negative, but 'अपमान' (insult) is a stronger word than 'अनादर' (disrespect), which is the direct antonym of 'आदर'. While close, it's not the most precise transformation.\n3. 'स्वातंत्र्य सैनिकांना आदराने वागवा' is a positive sentence with a similar meaning, not negative.\n4. 'स्वातंत्र्य सैनिकांचा अनादर करू नका' uses 'अनादर' (disrespect), which is the direct antonym of 'आदर', and negates the action ('करू नका'). This option perfectly retains the original meaning while making the sentence negative.",
    "explanation_marathi": "दिलेले 'स्वातंत्र्य सैनिकांचा आदर करा' हे आज्ञार्थी वाक्य आहे. या वाक्याचा अर्थ न बदलता नकारार्थी वाक्यात रूपांतर करायचे आहे. यासाठी 'आदर' या शब्दाचा विरुद्धार्थी शब्द वापरून क्रियापदाला नकारार्थी रूप द्यावे लागते.\n1. 'स्वातंत्र्य सैनिकांचा मान राखा' हे मूळ वाक्यासारखेच सकारात्मक वाक्य आहे, नकारार्थी नाही.\n2. 'स्वातंत्र्य सैनिकांचा अपमान नका करू' हे नकारार्थी वाक्य आहे, परंतु 'अपमान' हा 'आदर' चा थेट विरुद्धार्थी शब्द नाही. 'अनादर' हा अधिक योग्य विरुद्धार्थी शब्द आहे.\n3. 'स्वातंत्र्य सैनिकांना आदराने वागवा' हे मूळ वाक्यासारखेच सकारात्मक वाक्य आहे, नकारार्थी नाही.\n4. 'स्वातंत्र्य सैनिकांचा अनादर करू नका' या वाक्यात 'आदर' चा विरुद्धार्थी शब्द 'अनादर' वापरला आहे आणि क्रियापदाला नकारार्थी रूप दिले आहे. त्यामुळे हे वाक्य मूळ अर्थ कायम ठेवून नकारार्थी बनते.",
    "options_breakdown": [
      {
        "option_text_marathi": "स्वातंत्र्य सैनिकांचा मान राखा",
        "option_text_english": "Maintain the respect of freedom fighters",
        "is_correct": false,
        "reason": "हे वाक्य सकारात्मक असून मूळ वाक्याचा अर्थ बदलत नाही, पण ते नकारार्थी नाही."
      },
      {
        "option_text_marathi": "स्वातंत्र्य सैनिकांचा अपमान नका करू",
        "option_text_english": "Do not insult freedom fighters",
        "is_correct": false,
        "reason": "हे वाक्य नकारार्थी असले तरी 'अपमान' हा 'आदर' चा थेट विरुद्धार्थी शब्द नाही. 'अनादर' अधिक योग्य आहे."
      },
      {
        "option_text_marathi": "स्वातंत्र्य सैनिकांना आदराने वागवा",
        "option_text_english": "Treat freedom fighters with respect",
        "is_correct": false,
        "reason": "हे वाक्य सकारात्मक असून मूळ वाक्याचा अर्थ बदलत नाही, पण ते नकारार्थी नाही."
      },
      {
        "option_text_marathi": "स्वातंत्र्य सैनिकांचा अनादर करू नका",
        "option_text_english": "Do not disrespect freedom fighters",
        "is_correct": true,
        "reason": "या वाक्यात 'आदर' या शब्दाचा विरुद्धार्थी शब्द 'अनादर' वापरून वाक्याला नकारार्थी रूप दिले आहे, ज्यामुळे मूळ अर्थ कायम राहतो."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "खालील वाक्यांमधून सकर्मक क्रियापद असणारी वाक्ये ओळखा.\nअ. त्याने दार उघडले.\nब. त्याला उदाहरण समजते.\nक. राम शिवधनुष्य मोडतो.\nड. सरकार दुष्काळग्रस्तांना मदत देते.",
    "question_english": "Identify sentences with transitive verbs from the following.\nA. He opened the door.\nB. He understands the example.\nC. Ram breaks the Shivdhanushya.\nD. The government gives aid to drought-affected people.",
    "options_marathi": [
      "फक्त अ बरोबर",
      "फक्त क बरोबर",
      "फक्त ब व ड बरोबर",
      "फक्त अ व क बरोबर"
    ],
    "options_english": [
      "Only A is correct",
      "Only C is correct",
      "Only B and D are correct",
      "Only A and C are correct"
    ],
    "correct_option_index": 0,
    "subject": "Marathi",
    "topic": "क्रियापदाचे प्रकार (Types of Verbs - सकर्मक/अकर्मक)",
    "difficulty": "Hard",
    "trap_detected": "Flawed options / Grammatical nuance",
    "explanation_english": "A transitive verb (सकर्मक क्रियापद) is a verb that takes a direct object. To identify a direct object, one can ask 'काय?' (what?) or 'कोणाला?' (whom?) to the verb and get an answer.\nLet's analyze each sentence:\nA. 'त्याने दार उघडले.' (He opened the door.) - 'काय उघडले?' (What opened?) - 'दार' (the door). 'दार' is the direct object. So, 'उघडले' is a transitive verb.\nB. 'त्याला उदाहरण समजते.' (He understands the example.) - 'काय समजते?' (What understands?) - 'उदाहरण' (the example). 'उदाहरण' is the direct object. So, 'समजते' is a transitive verb.\nC. 'राम शिवधनुष्य मोडतो.' (Ram breaks the Shivdhanushya.) - 'काय मोडतो?' (What breaks?) - 'शिवधनुष्य' (the Shivdhanushya). 'शिवधनुष्य' is the direct object. So, 'मोडतो' is a transitive verb.\nD. 'सरकार दुष्काळग्रस्तांना मदत देते.' (The government gives aid to drought-affected people.) - 'काय देते?' (What gives?) - 'मदत' (aid). 'मदत' is the direct object. 'कोणाला देते?' (To whom gives?) - 'दुष्काळग्रस्तांना' (to drought-affected people) is an indirect object. Since it takes a direct object, 'देते' is a transitive verb.\n\nBased on the standard definition of transitive verbs, all four sentences (अ, ब, क, ड) contain transitive verbs. However, none of the provided options include all four. This indicates a flaw in the question or its options. In such cases, where no option is fully correct according to grammatical rules, the question is considered to have no correct option, and the `correct_option_index` is set to 0.",
    "explanation_marathi": "सकर्मक क्रियापद म्हणजे ज्या क्रियापदाला 'काय' किंवा 'कोणाला' असा प्रश्न विचारल्यास उत्तर मिळते, म्हणजेच ज्याला कर्म असते. प्रत्येक वाक्याचे विश्लेषण करूया:\nअ. 'त्याने दार उघडले.' - 'काय उघडले?' - 'दार'. 'दार' हे कर्म आहे. म्हणून 'उघडले' हे सकर्मक क्रियापद आहे.\nब. 'त्याला उदाहरण समजते.' - 'काय समजते?' - 'उदाहरण'. 'उदाहरण' हे कर्म आहे. म्हणून 'समजते' हे सकर्मक क्रियापद आहे.\nक. 'राम शिवधनुष्य मोडतो.' - 'काय मोडतो?' - 'शिवधनुष्य'. 'शिवधनुष्य' हे कर्म आहे. म्हणून 'मोडतो' हे सकर्मक क्रियापद आहे.\nड. 'सरकार दुष्काळग्रस्तांना मदत देते.' - 'काय देते?' - 'मदत'. 'मदत' हे प्रत्यक्ष कर्म आहे. 'कोणाला देते?' - 'दुष्काळग्रस्तांना' हे अप्रत्यक्ष कर्म आहे. प्रत्यक्ष कर्म असल्यामुळे 'देते' हे सकर्मक क्रियापद आहे.\n\nव्याकरणानुसार, वरील चारही वाक्यांमध्ये सकर्मक क्रियापदे आहेत. परंतु, दिलेल्या पर्यायांपैकी कोणताही पर्याय चारही वाक्यांचा समावेश करत नाही. अशा परिस्थितीत, जेव्हा प्रश्नाचे कोणतेही पर्याय व्याकरणानुसार पूर्णपणे योग्य नसतात, तेव्हा तो प्रश्न रद्द मानला जातो किंवा त्याला कोणताही योग्य पर्याय नसतो. म्हणून, `correct_option_index` 0 (शून्य) ठेवला आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "फक्त अ बरोबर",
        "option_text_english": "Only A is correct",
        "is_correct": false,
        "reason": "वाक्य 'अ' सकर्मक असले तरी, 'ब', 'क' आणि 'ड' ही वाक्ये देखील सकर्मक आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_marathi": "फक्त क बरोबर",
        "option_text_english": "Only C is correct",
        "is_correct": false,
        "reason": "वाक्य 'क' सकर्मक असले तरी, 'अ', 'ब' आणि 'ड' ही वाक्ये देखील सकर्मक आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_marathi": "फक्त ब व ड बरोबर",
        "option_text_english": "Only B and D are correct",
        "is_correct": false,
        "reason": "वाक्य 'ब' आणि 'ड' सकर्मक असली तरी, 'अ' आणि 'क' ही वाक्ये देखील सकर्मक आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_marathi": "फक्त अ व क बरोबर",
        "option_text_english": "Only A and C are correct",
        "is_correct": false,
        "reason": "वाक्य 'अ' आणि 'क' सकर्मक असली तरी, 'ब' आणि 'ड' ही वाक्ये देखील सकर्मक आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "'शारदीय चांदण्यात समुद्र मनमोहक दिसतो', या वाक्यातील उद्देश्य कोणता ?",
    "question_english": "In the sentence 'शारदीय चांदण्यात समुद्र मनमोहक दिसतो' (In the autumnal moonlight, the sea looks captivating), what is the subject (उद्देश्य)?",
    "options_marathi": [
      "शारदीय चांदण्यात",
      "समुद्र",
      "मनमोहक",
      "दिसतो"
    ],
    "options_english": [
      "In the autumnal moonlight",
      "Sea",
      "Captivating",
      "Looks"
    ],
    "correct_option_index": 2,
    "subject": "Marathi",
    "topic": "वाक्याचे पृथक्करण (Sentence Analysis - उद्देश्य/विधेय)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "In Marathi grammar, the 'उद्देश्य' (Uddeshya) is the subject of the sentence, which is the part about which something is said. To find the 'उद्देश्य', one can ask 'कोण?' (who?) or 'काय?' (what?) to the verb. In the sentence 'शारदीय चांदण्यात समुद्र मनमोहक दिसतो' (In the autumnal moonlight, the sea looks captivating), the verb is 'दिसतो' (looks). Asking 'कोण दिसतो?' (Who looks?) gives the answer 'समुद्र' (the sea). Therefore, 'समुद्र' is the subject or 'उद्देश्य' of the sentence.",
    "explanation_marathi": "मराठी व्याकरणात, 'उद्देश्य' म्हणजे वाक्यात ज्याच्याबद्दल काहीतरी सांगितले जाते तो कर्ता. क्रियापदाला 'कोण?' किंवा 'काय?' असा प्रश्न विचारल्यास उद्देश्य मिळते. 'शारदीय चांदण्यात समुद्र मनमोहक दिसतो' या वाक्यात क्रियापद 'दिसतो' हे आहे. 'कोण दिसतो?' असा प्रश्न विचारल्यास 'समुद्र' हे उत्तर मिळते. म्हणून, 'समुद्र' हे या वाक्यातील उद्देश्य आहे.",
    "options_breakdown": [
      {
        "option_text_marathi": "शारदीय चांदण्यात",
        "option_text_english": "In the autumnal moonlight",
        "is_correct": false,
        "reason": "हे वाक्यातील क्रियाविशेषण अव्यय आहे, जे क्रियापदाबद्दल अधिक माहिती देते (कधी दिसतो)."
      },
      {
        "option_text_marathi": "समुद्र",
        "option_text_english": "Sea",
        "is_correct": true,
        "reason": "वाक्यात 'समुद्र' याच्याबद्दल माहिती दिली आहे ('मनमोहक दिसतो'). 'कोण दिसतो?' या प्रश्नाचे उत्तर 'समुद्र' असे येते, म्हणून 'समुद्र' हे उद्देश्य आहे."
      },
      {
        "option_text_marathi": "मनमोहक",
        "option_text_english": "Captivating",
        "is_correct": false,
        "reason": "हे वाक्यातील विधेय विस्तार आहे, जे उद्देश्याबद्दल अधिक माहिती देते (समुद्र कसा दिसतो)."
      },
      {
        "option_text_marathi": "दिसतो",
        "option_text_english": "Looks",
        "is_correct": false,
        "reason": "हे वाक्यातील क्रियापद आहे, जे विधेयाचा मुख्य भाग आहे."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "'आपण देशासाठी त्याग करू.' वाक्याचा प्रकार ओळखा.",
    "question_english": "Identify the type of sentence: 'आपण देशासाठी त्याग करू.' (Let us sacrifice for the country.)",
    "options_marathi": [
      "आज्ञार्थी",
      "विध्यर्थी",
      "संकेतार्थी",
      "अकरणरूपी"
    ],
    "options_english": [
      "Imperative",
      "Indicative/Potential/Obligatory",
      "Conditional",
      "Negative"
    ],
    "correct_option_index": 1,
    "subject": "Marathi",
    "topic": "वाक्याचे प्रकार (Types of Sentences - अर्थावरून)",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between 'आज्ञार्थी' (suggestion/resolve) and 'स्वार्थ' (simple future)",
    "explanation_english": "The sentence 'आपण देशासाठी त्याग करू.' (Let us sacrifice for the country.) expresses a collective resolve, a suggestion, or a determination. In Marathi grammar, verb forms that express commands, requests, prayers, blessings, or suggestions/resolves (especially in the first person plural, like 'करू') are classified under 'आज्ञार्थी' (Imperative mood). While 'करू' can also indicate a simple future (स्वार्थ), in this context, with 'आपण' and the nature of the statement, it strongly conveys a collective resolve or suggestion, which falls under the broader definition of 'आज्ञार्थी'. 'विध्यर्थी' typically expresses duty, obligation, or possibility using different verb endings (e.g., 'करावे', 'जावे'). 'संकेतार्थी' expresses a condition, and 'अकरणरूपी' refers to a negative sentence.",
    "explanation_marathi": "'आपण देशासाठी त्याग करू.' हे वाक्य सामूहिक निश्चय, सूचना किंवा दृढ संकल्प व्यक्त करते. मराठी व्याकरणात, आज्ञा, विनंती, प्रार्थना, आशीर्वाद किंवा सूचना/संकल्प (विशेषतः प्रथम पुरुषी अनेकवचनी 'करू' सारखी रूपे) व्यक्त करणारी क्रियापदे 'आज्ञार्थी' प्रकारात मोडतात. 'करू' हे रूप जरी सामान्य भविष्यकाळ (स्वार्थ) दर्शवत असले तरी, या संदर्भात 'आपण' या शब्दासह आणि वाक्याच्या अर्थानुसार, ते सामूहिक संकल्प किंवा सूचना दर्शवते, जे 'आज्ञार्थी' प्रकारात येते. 'विध्यर्थी' क्रियापद कर्तव्य, शक्यता किंवा योग्यता दर्शवते (उदा. 'करावे', 'जावे'). 'संकेतार्थी' क्रियापद अट दर्शवते आणि 'अकरणरूपी' म्हणजे नकारार्थी वाक्य.",
    "options_breakdown": [
      {
        "option_text_marathi": "आज्ञार्थी",
        "option_text_english": "Imperative",
        "is_correct": true,
        "reason": "हे वाक्य 'आपण करू' या रूपाने सामूहिक संकल्प किंवा सूचना व्यक्त करते, जे आज्ञार्थी प्रकारात येते."
      },
      {
        "option_text_marathi": "विध्यर्थी",
        "option_text_english": "Indicative/Potential/Obligatory",
        "is_correct": false,
        "reason": "विध्यर्थी वाक्ये कर्तव्य, शक्यता किंवा योग्यता दर्शवतात (उदा. 'करावे', 'जावे'). हे वाक्य त्या प्रकारात मोडत नाही."
      },
      {
        "option_text_marathi": "संकेतार्थी",
        "option_text_english": "Conditional",
        "is_correct": false,
        "reason": "संकेतार्थी वाक्ये अट दर्शवतात (उदा. 'जर... तर...'). हे वाक्य अट दर्शवत नाही."
      },
      {
        "option_text_marathi": "अकरणरूपी",
        "option_text_english": "Negative",
        "is_correct": false,
        "reason": "अकरणरूपी म्हणजे नकारार्थी वाक्य. हे वाक्य सकारात्मक आहे."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "'वाक्यार्थाला बाधा न आणता वाक्याच्या रचनेत केलेला बदल म्हणजे काय ?",
    "question_english": "What is the change made in the structure of a sentence without altering its meaning?",
    "options_marathi": [
      "वाक्य पृथक्करण",
      "वाक्य रूपांतर",
      "वाक्य विस्तार",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Sentence Analysis",
      "Sentence Transformation",
      "Sentence Expansion",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Sentence Transformation (वाक्य रूपांतर)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Sentence transformation (वाक्य रूपांतर) refers to the process of changing the structure of a sentence without altering its original meaning. This involves converting one type of sentence into another (e.g., simple to complex, affirmative to negative) while preserving the core message. Sentence analysis (वाक्य पृथक्करण) involves breaking down a sentence into its constituent parts, and sentence expansion (वाक्य विस्तार) involves adding more information to a sentence.",
    "explanation_marathi": "वाक्यार्थाला बाधा न आणता वाक्याच्या रचनेत केलेला बदल म्हणजे 'वाक्य रूपांतर' होय. यामध्ये वाक्याचा मूळ अर्थ न बदलता त्याचे स्वरूप बदलले जाते (उदा. केवल वाक्याचे मिश्र वाक्यात रूपांतर). 'वाक्य पृथक्करण' म्हणजे वाक्याचे घटक भाग वेगळे करणे, तर 'वाक्य विस्तार' म्हणजे वाक्यात अधिक माहिती जोडणे.",
    "options_breakdown": [
      {
        "option": "वाक्य पृथक्करण",
        "is_correct": false,
        "reason_english": "This means sentence analysis, breaking down a sentence into its parts, not changing its structure while retaining meaning.",
        "reason_marathi": "याचा अर्थ वाक्याचे घटक भाग वेगळे करणे, वाक्याचा अर्थ न बदलता त्याची रचना बदलणे नव्हे."
      },
      {
        "option": "वाक्य रूपांतर",
        "is_correct": true,
        "reason_english": "This is the precise definition of sentence transformation, where the structure changes but the meaning remains the same.",
        "reason_marathi": "ही वाक्य रूपांतरणाची अचूक व्याख्या आहे, जिथे रचना बदलते पण अर्थ तोच राहतो."
      },
      {
        "option": "वाक्य विस्तार",
        "is_correct": false,
        "reason_english": "This means sentence expansion, adding more details to a sentence, which is different from transforming its structure.",
        "reason_marathi": "याचा अर्थ वाक्यात अधिक तपशील जोडणे, जे वाक्याची रचना बदलण्यापेक्षा वेगळे आहे."
      },
      {
        "option": "वरीलपैकी नाही",
        "is_correct": false,
        "reason_english": "Option 2 is correct.",
        "reason_marathi": "पर्याय २ योग्य आहे."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "'जेव्हा क्रियापदाचे रूप कर्त्याच्या किंवा कर्माच्या लिंग वचनाप्रमाणे बदलत नसून ते नेहमी तृतीय-पुरुषी, नपुंसकलिंगी, एकवचनी असे स्वतंत्र असते', अशा प्रकारच्या वाक्यरचनेस काय म्हणतात ?",
    "question_english": "When the form of the verb does not change according to the gender and number of the subject or object, but always remains in the third person, neuter gender, singular form, what is such a sentence structure called?",
    "options_marathi": [
      "कर्तरि प्रयोग",
      "भावे प्रयोग",
      "कर्मणि प्रयोग",
      "कर्मकर्तरी प्रयोग"
    ],
    "options_english": [
      "Kartaari Prayog (Active Voice)",
      "Bhave Prayog (Impersonal Voice)",
      "Karmani Prayog (Passive Voice)",
      "Karmakartari Prayog (Passive-Active Voice)"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Prayog (Voice) - Bhave Prayog",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The description perfectly matches 'Bhave Prayog' (Impersonal Voice) in Marathi grammar. In Bhave Prayog, the verb's form is independent of the subject's or object's gender and number. It typically remains in the third person, neuter gender, and singular form. In 'Kartari Prayog' (Active Voice), the verb changes according to the subject, and in 'Karmani Prayog' (Passive Voice), it changes according to the object. 'Karmakartari Prayog' is a sub-type of Karmani Prayog.",
    "explanation_marathi": "क्रियापदाचे रूप कर्त्याच्या किंवा कर्माच्या लिंग वचनाप्रमाणे बदलत नसून ते नेहमी तृतीय-पुरुषी, नपुंसकलिंगी, एकवचनी असे स्वतंत्र असते, तेव्हा त्यास 'भावे प्रयोग' असे म्हणतात. 'कर्तरि प्रयोगात' क्रियापद कर्त्यानुसार बदलते, तर 'कर्मणि प्रयोगात' ते कर्मानुसार बदलते. 'कर्मकर्तरी प्रयोग' हा कर्मणि प्रयोगाचाच एक उपप्रकार आहे.",
    "options_breakdown": [
      {
        "option": "कर्तरि प्रयोग",
        "is_correct": false,
        "reason_english": "In Kartari Prayog, the verb changes according to the subject.",
        "reason_marathi": "कर्तरि प्रयोगात क्रियापद कर्त्याच्या लिंग वचनानुसार बदलते."
      },
      {
        "option": "भावे प्रयोग",
        "is_correct": true,
        "reason_english": "This is the definition of Bhave Prayog, where the verb is independent of both subject and object, remaining in third person, neuter, singular.",
        "reason_marathi": "ही भावे प्रयोगाची व्याख्या आहे, जिथे क्रियापद कर्ता किंवा कर्म यांच्या लिंग वचनानुसार बदलत नाही, तर ते स्वतंत्र असते (तृतीय-पुरुषी, नपुंसकलिंगी, एकवचनी)."
      },
      {
        "option": "कर्मणि प्रयोग",
        "is_correct": false,
        "reason_english": "In Karmani Prayog, the verb changes according to the object.",
        "reason_marathi": "कर्मणि प्रयोगात क्रियापद कर्माच्या लिंग वचनानुसार बदलते."
      },
      {
        "option": "कर्मकर्तरी प्रयोग",
        "is_correct": false,
        "reason_english": "This is a sub-type of Karmani Prayog, where the verb still relates to the object.",
        "reason_marathi": "हा कर्मणि प्रयोगाचा एक उपप्रकार आहे, जिथे क्रियापद अजूनही कर्माशी संबंधित असते."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "क्रियेचे पूर्णत्व हा क्रियापदाचा अर्थ असतो तेव्हा कर्मणी प्रयोगाचा कोणता उपप्रकार होतो ?",
    "question_english": "When the completeness of the action is the meaning of the verb, which sub-type of Karmani Prayog (Passive Voice) occurs?",
    "options_marathi": [
      "शक्यकर्मणी",
      "पुराणकर्मणी",
      "समापन कर्मणी",
      "प्रधानकर्तृक कर्मणी"
    ],
    "options_english": [
      "Shakya Karmani",
      "Purana Karmani",
      "Samapan Karmani",
      "Pradhankartruk Karmani"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "Prayog (Voice) - Karmani Prayog Sub-types",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "When the verb indicates the completion of an action, it refers to 'Samapan Karmani' (समापन कर्मणी). This sub-type of Karmani Prayog emphasizes the finished state of the action. 'Shakya Karmani' indicates possibility or ability, 'Purana Karmani' (also known as Prachin Karmani) is an older form, and 'Pradhankartruk Karmani' emphasizes the subject while still being passive.",
    "explanation_marathi": "जेव्हा क्रियापदाचा अर्थ क्रियेचे पूर्णत्व दर्शवतो, तेव्हा तो 'समापन कर्मणी' प्रयोगाचा उपप्रकार असतो. या प्रकारात क्रियेची समाप्ती किंवा पूर्णता यावर भर दिला जातो. 'शक्यकर्मणी' शक्यता किंवा सामर्थ्य दर्शवतो, 'पुराणकर्मणी' हा प्राचीन कर्मणीचा प्रकार आहे, तर 'प्रधानकर्तृक कर्मणी' मध्ये कर्त्याला प्राधान्य दिले जाते पण क्रियापद कर्मानुसार बदलते.",
    "options_breakdown": [
      {
        "option": "शक्यकर्मणी",
        "is_correct": false,
        "reason_english": "Shakya Karmani indicates the possibility or ability to perform an action (e.g., 'मला काम करवते').",
        "reason_marathi": "शक्यकर्मणी शक्यता किंवा सामर्थ्य दर्शवतो (उदा. 'मला काम करवते')."
      },
      {
        "option": "पुराणकर्मणी",
        "is_correct": false,
        "reason_english": "Purana Karmani (or Prachin Karmani) is an older form of Karmani Prayog, not specifically about the completeness of action.",
        "reason_marathi": "पुराणकर्मणी (किंवा प्राचीन कर्मणी) हा कर्मणि प्रयोगाचा एक जुना प्रकार आहे, क्रियेच्या पूर्णत्वाशी याचा थेट संबंध नाही."
      },
      {
        "option": "समापन कर्मणी",
        "is_correct": true,
        "reason_english": "Samapan Karmani specifically denotes the completion or termination of an action (e.g., 'त्याने काम केले').",
        "reason_marathi": "समापन कर्मणी विशेषतः क्रियेची समाप्ती किंवा पूर्णता दर्शवतो (उदा. 'त्याने काम केले')."
      },
      {
        "option": "प्रधानकर्तृक कर्मणी",
        "is_correct": false,
        "reason_english": "Pradhankartruk Karmani emphasizes the subject, but the verb still follows the object (e.g., 'रामाने रावणास मारिले').",
        "reason_marathi": "प्रधानकर्तृक कर्मणीमध्ये कर्त्याला प्राधान्य दिले जाते, परंतु क्रियापद अजूनही कर्मानुसार बदलते (उदा. 'रामाने रावणास मारिले')."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "एखाद्या म्हणीतील ______ हा त्या म्हणीचा आत्मा असतो.",
    "question_english": "The ______ in a proverb is its soul.",
    "options_marathi": [
      "उच्चार",
      "अलंकार",
      "अनुभव",
      "ध्वनी"
    ],
    "options_english": [
      "Pronunciation",
      "Figure of Speech",
      "Experience",
      "Sound"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "Proverbs (म्हणी)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Proverbs (म्हणी) are short, popular sayings that express a general truth or piece of advice. Their essence, or 'soul', lies in the 'अनुभव' (experience) they encapsulate. Proverbs are born out of collective human experience and wisdom, offering insights into life, human nature, and societal norms. While they might have specific pronunciations, figures of speech, or sounds, these are secondary to the underlying experience they convey.",
    "explanation_marathi": "म्हणी म्हणजे लोकपरंपरेतून आलेले, जीवनातील अनुभवांवर आधारित असे छोटे, अर्थपूर्ण वाक्य. म्हणींचा 'आत्मा' हा त्यातील 'अनुभव' असतो. कारण म्हणी या मानवी जीवनातील विविध प्रसंगातून, निरीक्षणातून आणि अनुभवातून तयार झालेल्या असतात आणि त्यातूनच जीवनाचे सार सांगितले जाते. उच्चार, अलंकार किंवा ध्वनी हे म्हणीचे बाह्य स्वरूप असले तरी, अनुभव हा तिचा गाभा असतो.",
    "options_breakdown": [
      {
        "option": "उच्चार",
        "is_correct": false,
        "reason_english": "Pronunciation is how a proverb is spoken, not its core essence.",
        "reason_marathi": "उच्चार म्हणजे म्हण कशी बोलली जाते, तिचा मूळ गाभा नव्हे."
      },
      {
        "option": "अलंकार",
        "is_correct": false,
        "reason_english": "Figures of speech might be present in a proverb, but they are a stylistic element, not its 'soul'.",
        "reason_marathi": "म्हणींमध्ये अलंकार असू शकतात, परंतु ते एक शैलीदार घटक आहेत, म्हणीचा 'आत्मा' नव्हे."
      },
      {
        "option": "अनुभव",
        "is_correct": true,
        "reason_english": "Proverbs are distilled wisdom based on collective human experience, making 'experience' their true essence or soul.",
        "reason_marathi": "म्हणी म्हणजे सामूहिक मानवी अनुभवावर आधारित ज्ञान, त्यामुळे 'अनुभव' हा त्यांचा खरा आत्मा आहे."
      },
      {
        "option": "ध्वनी",
        "is_correct": false,
        "reason_english": "Sound refers to the auditory aspect, which is not the fundamental nature of a proverb.",
        "reason_marathi": "ध्वनी म्हणजे ऐकण्याचा पैलू, जो म्हणीचे मूलभूत स्वरूप नाही."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "समानार्थी म्हणींच्या योग्य जोड्या जुळवा.\na. आज अंबारी उद्या झोळी धरी\ni. खोड जडली बालपणी सुटता सुटेना\nb. मनसुबे केले नि दिवस निघून गेले\nii. राखणदार दारात नि चोर शिरला घरात\nc. काडी चोर तो माडी चोर\niii. असेल तेव्हा दिवाळी नसेल तेव्हा शिमगा\nd. वाऱ्यावर वरात दर्यावर घाला\niv. मनात मनोरे पुढे ताट कोरे",
    "question_english": "Match the correct pairs of synonymous proverbs.\na. Today on an elephant, tomorrow carrying a begging bowl\ni. A habit formed in childhood is hard to break\nb. Made plans and days passed by\nii. The guard at the door and the thief entered the house\nc. A stick thief is a mansion thief\niii. When there is, it's Diwali; when there isn't, it's Shimga\nd. A wedding procession on the wind, a raid on the sea",
    "options_marathi": [
      "a-iii b-iv c-i d-ii",
      "a-iii b-i c-iv d-ii",
      "a-iii b-iv c-ii d-i",
      "a-iv b-i c-ii d-iii"
    ],
    "options_english": [
      "a-iii b-iv c-i d-ii",
      "a-iii b-i c-iv d-ii",
      "a-iii b-iv c-ii d-i",
      "a-iv b-i c-ii d-iii"
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "Proverbs (म्हणी) - Synonyms",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap / Weak Synonymity",
    "explanation_english": "Let's match the proverbs:\n*   a. 'आज अंबारी उद्या झोळी धरी' (Today on an elephant, tomorrow carrying a begging bowl) signifies the transient nature of wealth and fortune. Its synonym is 'असेल तेव्हा दिवाळी नसेल तेव्हा शिमगा' (When there is, it's Diwali; when there isn't, it's Shimga), meaning one lives according to their current financial situation, which can fluctuate.\n*   b. 'मनसुबे केले नि दिवस निघून गेले' (Made plans and days passed by) describes a situation where one only makes grand plans but fails to act upon them, leading to no real progress. Its synonym is 'मनात मनोरे पुढे ताट कोरे' (Castles in the mind, but the plate is empty), which means having ambitious thoughts but no practical outcome.\n*   c. 'काडी चोर तो माडी चोर' (A stick thief is a mansion thief) implies that small bad habits or minor transgressions can escalate into bigger ones. This is related to 'खोड जडली बालपणी सुटता सुटेना' (A habit formed in childhood is hard to break), as a bad habit, once ingrained, is difficult to overcome and can lead to more significant issues.\n*   d. 'वाऱ्यावर वरात दर्यावर घाला' (A wedding procession on the wind, a raid on the sea) refers to undertaking a task without proper planning, being reckless, or taking huge, unfounded risks. While 'राखणदार दारात नि चोर शिरला घरात' (The guard at the door and the thief entered the house) primarily means negligence despite protection, it can be indirectly linked if the recklessness (d) leads to such a failure of oversight (ii). This is the least direct synonym, but often in matching questions, the best available fit is chosen.",
    "explanation_marathi": "म्हणींच्या योग्य जोड्या जुळवूया:\n*   a. 'आज अंबारी उद्या झोळी धरी' म्हणजे नशिबाची किंवा परिस्थितीची अनिश्चितता, श्रीमंतीतून गरिबीत येणे. याची समानार्थी म्हण 'असेल तेव्हा दिवाळी नसेल तेव्हा शिमगा' ही आहे, म्हणजे परिस्थितीनुसार वागणे किंवा सुख-दुःख हे येत-जात राहते.\n*   b. 'मनसुबे केले नि दिवस निघून गेले' म्हणजे केवळ योजना आखत राहणे पण प्रत्यक्षात काहीही न करणे. याची समानार्थी म्हण 'मनात मनोरे पुढे ताट कोरे' ही आहे, म्हणजे मनात मोठे विचार असले तरी प्रत्यक्षात काहीही साध्य न होणे.\n*   c. 'काडी चोर तो माडी चोर' म्हणजे लहान चोरी करणारा पुढे मोठी चोरी करतो, म्हणजेच लहान वाईट सवयी मोठ्या गुन्ह्यांकडे घेऊन जातात. याची समानार्थी म्हण 'खोड जडली बालपणी सुटता सुटेना' ही आहे, कारण लहानपणी लागलेली सवय (उदा. चोरीची) सहजासहजी सुटत नाही आणि ती वाढत जाते.\n*   d. 'वाऱ्यावर वरात दर्यावर घाला' म्हणजे कोणतीही गोष्ट विचारपूर्वक न करता, बेजबाबदारपणे किंवा धाडसाने करणे. याची समानार्थी म्हण 'राखणदार दारात नि चोर शिरला घरात' ही आहे, म्हणजे संरक्षणाची व्यवस्था असूनही निष्काळजीपणामुळे नुकसान होणे. बेजबाबदारपणामुळे (d) निष्काळजीपणा (ii) होऊ शकतो, या अर्थाने हे जुळवले आहे.",
    "options_breakdown": [
      {
        "option": "a-iii b-iv c-i d-ii",
        "is_correct": true,
        "reason_english": "This option provides the most appropriate pairings among the given choices. a-iii (fluctuating fortune), b-iv (plans without action), c-i (escalating bad habits), d-ii (recklessness leading to negligence).",
        "reason_marathi": "हा पर्याय दिलेल्या पर्यायांमध्ये सर्वात योग्य जुळणी दर्शवतो. अ-iii (नशिबाची अनिश्चितता), ब-iv (कृतीविना योजना), क-i (वाईट सवयींचे वाढणे), ड-ii (बेजबाबदारपणामुळे निष्काळजीपणा)."
      },
      {
        "option": "a-iii b-i c-iv d-ii",
        "is_correct": false,
        "reason_english": "Pairings b-i and c-iv are incorrect.",
        "reason_marathi": "ब-i आणि क-iv या जोड्या चुकीच्या आहेत."
      },
      {
        "option": "a-iii b-iv c-ii d-i",
        "is_correct": false,
        "reason_english": "Pairings c-ii and d-i are incorrect.",
        "reason_marathi": "क-ii आणि ड-i या जोड्या चुकीच्या आहेत."
      },
      {
        "option": "a-iv b-i c-ii d-iii",
        "is_correct": false,
        "reason_english": "Multiple pairings in this option are incorrect.",
        "reason_marathi": "या पर्यायातील अनेक जोड्या चुकीच्या आहेत."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "'कपिलाषष्ठीचा योग' या संदर्भात विविध अर्थ असलेले शब्द कोणते ?\na. विलक्षण योगायोग\nb. अपूर्व घटना\nc. पुष्कळ काळाने येणारी संधी\nd. कळीचा नारद",
    "question_english": "Which words have various meanings in the context of 'Kapilashashthicha Yog'?\na. Extraordinary coincidence\nb. Unprecedented event\nc. An opportunity that comes after a long time\nd. Kali's Narad (a mischief-maker)",
    "options_marathi": [
      "फक्त a, b व c बरोबर",
      "फक्त a व c बरोबर",
      "फक्त b व d बरोबर",
      "सर्व पर्याय बरोबर"
    ],
    "options_english": [
      "Only a, b and c are correct",
      "Only a and c are correct",
      "Only b and d are correct",
      "All options are correct"
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "Idioms/Phrases (वाक्प्रचार)",
    "difficulty": "Medium",
    "trap_detected": "Distractor (d. कळीचा नारद)",
    "explanation_english": "The idiom 'कपिलाषष्ठीचा योग' refers to a very rare and auspicious conjunction of events or an opportunity that comes after a very long time. It implies:\n*   a. 'विलक्षण योगायोग' (Extraordinary coincidence) - Yes, it's an unusual and significant occurrence.\n*   b. 'अपूर्व घटना' (Unprecedented event) - Yes, it's something rare and special.\n*   c. 'पुष्कळ काळाने येणारी संधी' (An opportunity that comes after a long time) - This is a primary meaning of the idiom.\n*   d. 'कळीचा नारद' (Kali's Narad) refers to a mischief-maker or someone who instigates quarrels, which is completely unrelated to 'कपिलाषष्ठीचा योग'.\nTherefore, a, b, and c are correct interpretations of the idiom.",
    "explanation_marathi": "'कपिलाषष्ठीचा योग' या वाक्प्रचाराचा अर्थ असा आहे की, खूप दुर्मिळ, शुभ आणि महत्त्वाचा असा योगायोग किंवा खूप वर्षांनी येणारी संधी.\n*   a. 'विलक्षण योगायोग' - हे बरोबर आहे, कारण हा एक असाधारण आणि महत्त्वाचा योगायोग असतो.\n*   b. 'अपूर्व घटना' - हे देखील बरोबर आहे, कारण अशी घटना क्वचितच घडते.\n*   c. 'पुष्कळ काळाने येणारी संधी' - हा या वाक्प्रचाराचा मुख्य अर्थ आहे.\n*   d. 'कळीचा नारद' म्हणजे भांडणे लावणारा किंवा कलह निर्माण करणारा व्यक्ती, याचा 'कपिलाषष्ठीचा योग' या वाक्प्रचाराशी काहीही संबंध नाही.\nम्हणून, पर्याय a, b आणि c हे 'कपिलाषष्ठीचा योग' या संदर्भात योग्य अर्थ आहेत.",
    "options_breakdown": [
      {
        "option": "फक्त a, b व c बरोबर",
        "is_correct": true,
        "reason_english": "'कपिलाषष्ठीचा योग' means an extraordinary coincidence, an unprecedented event, and an opportunity that comes after a long time. 'कळीचा नारद' is unrelated.",
        "reason_marathi": "'कपिलाषष्ठीचा योग' म्हणजे विलक्षण योगायोग, अपूर्व घटना आणि पुष्कळ काळाने येणारी संधी. 'कळीचा नारद' याचा संबंध नाही."
      },
      {
        "option": "फक्त a व c बरोबर",
        "is_correct": false,
        "reason_english": "'b' is also a correct interpretation of the idiom.",
        "reason_marathi": "'b' हा देखील वाक्प्रचाराचा योग्य अर्थ आहे."
      },
      {
        "option": "फक्त b व d बरोबर",
        "is_correct": false,
        "reason_english": "'d' is an incorrect interpretation.",
        "reason_marathi": "'d' हा चुकीचा अर्थ आहे."
      },
      {
        "option": "सर्व पर्याय बरोबर",
        "is_correct": false,
        "reason_english": "'d' is an incorrect interpretation.",
        "reason_marathi": "'d' हा चुकीचा अर्थ आहे."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "'त्याच्यासारखा दुसरा कोणीच नाही असा', या शब्दसमुहासाठीचा योग्य अर्थ असणारा पर्याय निवडा.",
    "question_english": "Choose the correct option for the phrase 'There is no one else like him'.",
    "options_marathi": [
      "अद्वितीय",
      "शूर",
      "महान",
      "धाडसी"
    ],
    "options_english": [
      "Unique/Unparalleled",
      "Brave",
      "Great",
      "Courageous"
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "Word for a Phrase (शब्दसमूहाबद्दल एक शब्द)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The phrase \"त्याच्यासारखा दुसरा कोणीच नाही असा\" directly translates to \"one who has no equal\" or \"one of a kind\". The Marathi word for this is 'अद्वितीय' (adwitiya), which means unique, unparalleled, or matchless. The other options, 'शूर' (brave), 'महान' (great), and 'धाडसी' (courageous), describe specific qualities but do not convey the sense of being without a second or being unique.",
    "explanation_marathi": "\"त्याच्यासारखा दुसरा कोणीच नाही असा\" या शब्दसमूहासाठी योग्य शब्द 'अद्वितीय' हा आहे. 'अद्वितीय' म्हणजे ज्याच्यासारखा दुसरा कोणी नाही, अनुपम, अतुलनीय. 'शूर', 'महान' आणि 'धाडसी' हे विशिष्ट गुणधर्म दर्शवतात, पण 'दुसरा कोणीच नाही' हा अर्थ 'अद्वितीय' या शब्दातूनच व्यक्त होतो.",
    "options_breakdown": [
      {
        "option": "अद्वितीय",
        "is_correct": true,
        "reason_english": "This word precisely means 'unique' or 'unparalleled', fitting the description 'त्याच्यासारखा दुसरा कोणीच नाही असा'.",
        "reason_marathi": "या शब्दाचा अर्थ 'अद्वितीय' किंवा 'अतुलनीय' असा आहे, जो 'त्याच्यासारखा दुसरा कोणीच नाही असा' या वर्णनाशी तंतोतंत जुळतो."
      },
      {
        "option": "शूर",
        "is_correct": false,
        "reason_english": "'Brave' describes courage, not uniqueness.",
        "reason_marathi": "'शूर' म्हणजे धैर्यवान, अद्वितीयत्व नव्हे."
      },
      {
        "option": "महान",
        "is_correct": false,
        "reason_english": "'Great' describes eminence, not necessarily uniqueness.",
        "reason_marathi": "'महान' म्हणजे श्रेष्ठत्व, पण ते अद्वितीयत्व दर्शवत नाही."
      },
      {
        "option": "धाडसी",
        "is_correct": false,
        "reason_english": "'Courageous' is similar to brave, not unique.",
        "reason_marathi": "'धाडसी' हा 'शूर' शब्दासारखाच आहे, अद्वितीय नव्हे."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "'अहमहमिका' या शब्दासाठी पर्यायी शब्द ओळखा.",
    "question_english": "Identify the alternative word for 'Ahamahamika'.",
    "options_marathi": [
      "अहंभाव",
      "द्वेष",
      "स्पर्धा",
      "आकस"
    ],
    "options_english": [
      "Egoism",
      "Hatred",
      "Competition",
      "Malice"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "Vocabulary - Synonyms",
    "difficulty": "Medium",
    "trap_detected": "Semantic proximity (अहंभाव)",
    "explanation_english": "The word 'अहमहमिका' (ahamahamika) refers to a situation where everyone tries to prove themselves superior or be ahead of others, often in a competitive spirit. It signifies a sense of 'I first, I am better'. Therefore, 'स्पर्धा' (spardha), meaning competition, is the most appropriate synonym. While 'अहंभाव' (aham bhav) means egoism or pride, 'अहमहमिका' is more about the *act* of competing or striving to be first, rather than just the feeling of ego. 'द्वेष' (dvesh) means hatred, and 'आकस' (aakas) means malice or grudge, which are unrelated.",
    "explanation_marathi": "'अहमहमिका' या शब्दाचा अर्थ 'मीच श्रेष्ठ, मीच पुढे' अशी भावना ठेवून एकमेकांपेक्षा वरचढ ठरण्याचा प्रयत्न करणे, म्हणजेच 'स्पर्धा' करणे. त्यामुळे 'स्पर्धा' हा 'अहमहमिका' या शब्दासाठी योग्य पर्यायी शब्द आहे. 'अहंभाव' म्हणजे अहंकार किंवा गर्व, जो 'अहमहमिका' या भावनेचा एक भाग असू शकतो, पण 'अहमहमिका' ही कृती किंवा स्थिती दर्शवते. 'द्वेष' म्हणजे मत्सर आणि 'आकस' म्हणजे वैर, जे या शब्दाशी संबंधित नाहीत.",
    "options_breakdown": [
      {
        "option": "अहंभाव",
        "is_correct": false,
        "reason_english": "While 'अहमहमिका' might stem from ego, it specifically refers to the competitive striving to be first, not just the feeling of ego.",
        "reason_marathi": "'अहमहमिका' ही अहंकाराशी संबंधित असली तरी, ती विशेषतः प्रथम येण्यासाठीची स्पर्धा दर्शवते, केवळ अहंकाराची भावना नव्हे."
      },
      {
        "option": "द्वेष",
        "is_correct": false,
        "reason_english": "'Hatred' is unrelated to 'अहमहमिका'.",
        "reason_marathi": "'द्वेष' या शब्दाचा 'अहमहमिका' शी संबंध नाही."
      },
      {
        "option": "स्पर्धा",
        "is_correct": true,
        "reason_english": "'अहमहमिका' describes a competitive environment where everyone tries to outdo each other, which is precisely 'competition'.",
        "reason_marathi": "'अहमहमिका' म्हणजे एक स्पर्धात्मक वातावरण जिथे प्रत्येकजण एकमेकांपेक्षा वरचढ ठरण्याचा प्रयत्न करतो, म्हणजेच 'स्पर्धा'."
      },
      {
        "option": "आकस",
        "is_correct": false,
        "reason_english": "'Malice' or 'grudge' is unrelated to 'अहमहमिका'.",
        "reason_marathi": "'आकस' म्हणजे वैर किंवा मत्सर, याचा 'अहमहमिका' शी संबंध नाही."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "विरामचिन्हाचा अचूक वापर असणारे वाक्य कोणते ?\nअ. हो. 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे.' जयंत म्हणाला.\nब. \"हो ! जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे,\" जयंत म्हणाला.\nक. \"हो, 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.\nड. हो. जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.",
    "question_english": "Which sentence uses punctuation correctly?\nA. Yes. 'After dinner I will read everything.' Jayant said.\nB. \"Yes! After dinner I will read everything,\" Jayant said.\nC. \"Yes, 'After dinner I will read everything, Jayant said.\nD. Yes. After dinner I will read everything, Jayant said.",
    "options_marathi": [
      "अ",
      "ब",
      "अ आणि क",
      "अ आणि ड"
    ],
    "options_english": [
      "A",
      "B",
      "A and C",
      "A and D"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Punctuation (विरामचिन्हे)",
    "difficulty": "Medium",
    "trap_detected": "Subtle punctuation errors",
    "explanation_english": "Let's analyze each option for correct punctuation:\n*   **अ. हो. 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे.' जयंत म्हणाला.** This uses single quotes, which are less common for direct speech than double quotes. The period after 'हो.' and inside the quote is acceptable, but the overall structure is slightly less natural than option B.\n*   **ब. \"हो ! जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे,\" जयंत म्हणाला.** This sentence correctly uses double quotes for direct speech. The exclamation mark after 'हो' is appropriate for emphasis. The comma after the closing quote and before the reporting verb 'जयंत म्हणाला' is the standard convention when direct speech ends with an exclamation mark or question mark.\n*   **क. \"हो, 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.** This option incorrectly mixes double and single quotes, and the punctuation within and at the end of the direct speech is faulty.\n*   **ड. हो. जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.** This option lacks quotation marks for direct speech, which is a fundamental error.\nComparing the options, 'ब' is the most accurately punctuated sentence according to standard Marathi grammar rules for direct speech.",
    "explanation_marathi": "विरामचिन्हांच्या योग्य वापरासाठी प्रत्येक वाक्याचे विश्लेषण करूया:\n*   **अ. हो. 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे.' जयंत म्हणाला.** येथे एकेरी अवतरण चिन्हांचा वापर केला आहे, जो प्रत्यक्ष कथनासाठी दुहेरी अवतरण चिन्हांपेक्षा कमी वापरला जातो. 'हो.' नंतर पूर्णविराम आणि अवतरण चिन्हांच्या आत पूर्णविराम योग्य असला तरी, वाक्याची रचना थोडी कृत्रिम वाटते.\n*   **ब. \"हो ! जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे,\" जयंत म्हणाला.** येथे प्रत्यक्ष कथनासाठी दुहेरी अवतरण चिन्हे योग्य वापरली आहेत. 'हो !' नंतर उद्गारवाचक चिन्ह योग्य आहे, कारण ते होकारातील जोर दर्शवते. अवतरण चिन्हानंतर स्वल्पविराम (comma) आणि मग 'जयंत म्हणाला' हे प्रत्यक्ष कथनाचे मानक स्वरूप आहे. हे वाक्य विरामचिन्हांच्या नियमांनुसार अचूक आहे.\n*   **क. \"हो, 'जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.** येथे दुहेरी आणि एकेरी अवतरण चिन्हांचा चुकीचा वापर केला आहे. तसेच, अवतरण चिन्हे अपूर्ण आहेत आणि स्वल्पविरामाचा वापर चुकीचा आहे.\n*   **ड. हो. जेवल्यानंतर मी सर्व गोष्टी वाचून टाकणार आहे, जयंत म्हणाला.** येथे प्रत्यक्ष कथनासाठी अवतरण चिन्हे वापरलेली नाहीत, जे चुकीचे आहे.\nया विश्लेषणानुसार, 'ब' हे वाक्य विरामचिन्हांच्या नियमांनुसार सर्वात अचूक आहे.",
    "options_breakdown": [
      {
        "option": "अ",
        "is_correct": false,
        "reason_english": "While not entirely wrong, the use of single quotes for direct speech and the overall flow make it less ideal than option B.",
        "reason_marathi": "हे पूर्णपणे चुकीचे नसले तरी, प्रत्यक्ष कथनासाठी एकेरी अवतरण चिन्हांचा वापर आणि वाक्याचा एकूण प्रवाह पर्याय 'ब' पेक्षा कमी योग्य आहे."
      },
      {
        "option": "ब",
        "is_correct": true,
        "reason_english": "This sentence correctly uses double quotes for direct speech, an exclamation mark for emphasis, and a comma before the reporting verb, adhering to standard punctuation rules.",
        "reason_marathi": "हे वाक्य प्रत्यक्ष कथनासाठी दुहेरी अवतरण चिन्हे, जोर देण्यासाठी उद्गारवाचक चिन्ह आणि कथन करणाऱ्या क्रियापदापूर्वी स्वल्पविराम यांचा योग्य वापर करते, जे मानक विरामचिन्हांच्या नियमांनुसार आहे."
      },
      {
        "option": "अ आणि क",
        "is_correct": false,
        "reason_english": "'क' is definitely incorrect due to multiple punctuation errors.",
        "reason_marathi": "'क' हे अनेक विरामचिन्हांच्या चुकांमुळे निश्चितपणे चुकीचे आहे."
      },
      {
        "option": "अ आणि ड",
        "is_correct": false,
        "reason_english": "'ड' is definitely incorrect as it lacks quotation marks for direct speech.",
        "reason_marathi": "'ड' हे प्रत्यक्ष कथनासाठी अवतरण चिन्हे नसल्यामुळे निश्चितपणे चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "खाली दिलेल्या शब्दांपैकी मराठीत आलेला पोर्तुगीज शब्द ओळखा.",
    "question_english": "Identify the Portuguese word that has come into Marathi from the given words.",
    "options_marathi": [
      "सामान",
      "पगार",
      "भाकरी",
      "तिकीट"
    ],
    "options_english": [
      "Luggage/Goods",
      "Salary",
      "Bread/Roti",
      "Ticket"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Loanwords (परभाषीय शब्द) - Portuguese",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Marathi, like many Indian languages, has absorbed words from various foreign languages due to historical interactions. Among the given options:\n*   'सामान' (saamaan) is an Arabic/Persian loanword.\n*   'पगार' (pagaar) is a Portuguese loanword, derived from 'pagar' (to pay) or 'pagamento' (payment).\n*   'भाकरी' (bhaakri) is a native Marathi/Dravidian word.\n*   'तिकीट' (tikeet) is an English loanword (ticket).\nTherefore, 'पगार' is the Portuguese word.",
    "explanation_marathi": "मराठी भाषेत अनेक परभाषीय शब्द आलेले आहेत. दिलेल्या पर्यायांपैकी:\n*   'सामान' हा अरबी/फारसी शब्द आहे.\n*   'पगार' हा पोर्तुगीज शब्द आहे, जो 'pagar' (पैसे देणे) किंवा 'pagamento' (पगार) या शब्दांवरून आला आहे.\n*   'भाकरी' हा मूळ मराठी/द्रविड शब्द आहे.\n*   'तिकीट' हा इंग्रजी शब्द आहे.\nम्हणून, 'पगार' हा मराठीत आलेला पोर्तुगीज शब्द आहे.",
    "options_breakdown": [
      {
        "option": "सामान",
        "is_correct": false,
        "reason_english": "This is an Arabic/Persian word.",
        "reason_marathi": "हा अरबी/फारसी शब्द आहे."
      },
      {
        "option": "पगार",
        "is_correct": true,
        "reason_english": "This word is derived from Portuguese ('pagar' or 'pagamento').",
        "reason_marathi": "हा शब्द पोर्तुगीज ('pagar' किंवा 'pagamento') भाषेतून आला आहे."
      },
      {
        "option": "भाकरी",
        "is_correct": false,
        "reason_english": "This is a native Marathi word.",
        "reason_marathi": "हा मूळ मराठी शब्द आहे."
      },
      {
        "option": "तिकीट",
        "is_correct": false,
        "reason_english": "This is an English word.",
        "reason_marathi": "हा इंग्रजी शब्द आहे."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "खालीलपैकी कोणते विधान उद्‌गारार्थी आहे ?",
    "question_english": "Which of the following is an exclamatory sentence?",
    "options_marathi": [
      "काल फार पाऊस पडला.",
      "किती छान आहे हे फूल !",
      "आज बहुतेक पाऊस पडेल.",
      "तू बाहेर केव्हा जाणार आहेस ?"
    ],
    "options_english": [
      "It rained a lot yesterday.",
      "How beautiful this flower is!",
      "It will probably rain today.",
      "When are you going out?"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Types of Sentences (वाक्यप्रकार) - Exclamatory Sentence (उद्‌गारार्थी वाक्य)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "An exclamatory sentence expresses strong emotion or surprise and usually ends with an exclamation mark (!). Among the given options, 'किती छान आहे हे फूल !' (How beautiful this flower is!) clearly conveys a strong feeling of admiration and ends with an exclamation mark, making it an exclamatory sentence. The other options are assertive, interrogative, or declarative.",
    "explanation_marathi": "उद्‌गारार्थी वाक्य म्हणजे तीव्र भावना किंवा आश्चर्य व्यक्त करणारे वाक्य, जे उद्‌गारचिन्हाने (!) संपते. दिलेल्या पर्यायांपैकी, 'किती छान आहे हे फूल !' हे वाक्य कौतुकाची तीव्र भावना व्यक्त करते आणि उद्‌गारचिन्हाने संपते, त्यामुळे ते उद्‌गारार्थी वाक्य आहे. इतर पर्याय विधानार्थी किंवा प्रश्नार्थी आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "काल फार पाऊस पडला.",
        "option_english": "It rained a lot yesterday.",
        "analysis": "This is an assertive (विधानार्थी) sentence, stating a fact."
      },
      {
        "option_marathi": "किती छान आहे हे फूल !",
        "option_english": "How beautiful this flower is!",
        "analysis": "This is an exclamatory (उद्‌गारार्थी) sentence, expressing strong emotion and ending with an exclamation mark. This is the correct answer."
      },
      {
        "option_marathi": "आज बहुतेक पाऊस पडेल.",
        "option_english": "It will probably rain today.",
        "analysis": "This is an assertive (विधानार्थी) sentence, stating a possibility."
      },
      {
        "option_marathi": "तू बाहेर केव्हा जाणार आहेस ?",
        "option_english": "When are you going out?",
        "analysis": "This is an interrogative (प्रश्नार्थी) sentence, asking a question."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "खालील जोड्यांपैकी विसंगत जोडी ओळखा.\n'अ' (विभक्ती)\n'ब' (प्रत्यय)\na. द्वितीया\ni. चा, ची, चे\nb. षष्ठी\nii. स, ला, ना, ते\nc. चतुर्थी\niii. ऊन, हून\nd. तृतीया\niv. स, ला, ते",
    "question_english": "Identify the mismatched pair from the following.\n'A' (Case) 'B' (Suffix)\na. Dvitīyā\ni. cā, cī, ce\nb. Ṣaṣṭhī\nii. s, lā, nā, te\nc. Caturthī\niii. ūn, hūn\nd. Tṛtīyā\niv. s, lā, te",
    "options_marathi": [
      "a-ii",
      "b-i",
      "c-iv",
      "d-iii"
    ],
    "options_english": [
      "a-ii",
      "b-i",
      "c-iv",
      "d-iii"
    ],
    "correct_option_index": 0,
    "subject": "Marathi Grammar",
    "topic": "Vibhakti (विभक्ती) and Suffixes (प्रत्यय)",
    "difficulty": "Hard",
    "trap_detected": "Flawed Question / Ambiguity",
    "explanation_english": "The question asks to identify the mismatched pair of Vibhakti and its suffixes. However, upon careful examination of all the provided options: a. द्वितीया - स, ला, ना, ते; b. षष्ठी - चा, ची, चे; c. चतुर्थी - स, ला, ते; and d. तृतीया - ऊन, हून, all pairs are grammatically correct. The suffixes 'ऊन, हून' are indeed used for both Tritiya (करण) and Panchami (अपदान) cases in Marathi grammar. Since all given pairs are correctly matched, there is no 'mismatched' pair to identify, rendering the question flawed. In such cases, MPSC usually cancels the question, hence the correct option index is 0.",
    "explanation_marathi": "हा प्रश्न विभक्ती आणि त्यांच्या प्रत्ययांच्या विसंगत जोडी ओळखण्यास सांगतो. परंतु, दिलेल्या सर्व पर्यायांची (a. द्वितीया - स, ला, ना, ते; b. षष्ठी - चा, ची, चे; c. चतुर्थी - स, ला, ते; आणि d. तृतीया - ऊन, हून) काळजीपूर्वक तपासणी केल्यास, सर्व जोड्या व्याकरणानुसार योग्य आहेत. 'ऊन, हून' हे प्रत्यय मराठी व्याकरणात तृतीया (करण) आणि पंचमी (अपदान) या दोन्ही विभक्तींसाठी वापरले जातात. त्यामुळे, दिलेल्या पर्यायांमध्ये कोणतीही 'विसंगत' जोडी नाही. अशा परिस्थितीत, MPSC द्वारे हा प्रश्न रद्द केला जातो, म्हणून योग्य पर्याय क्रमांक 0 आहे.",
    "options_breakdown": [
      {
        "option_marathi": "a-ii",
        "option_english": "a-ii",
        "analysis": "This pairing (द्वितीया - स, ला, ना, ते) is grammatically correct."
      },
      {
        "option_marathi": "b-i",
        "option_english": "b-i",
        "analysis": "This pairing (षष्ठी - चा, ची, चे) is grammatically correct."
      },
      {
        "option_marathi": "c-iv",
        "option_english": "c-iv",
        "analysis": "This pairing (चतुर्थी - स, ला, ते) is grammatically correct."
      },
      {
        "option_marathi": "d-iii",
        "option_english": "d-iii",
        "analysis": "This pairing (तृतीया - ऊन, हून) is grammatically correct, as 'ऊन, हून' are suffixes for Tritiya (करण) as well as Panchami (अपदान)."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "कोणत्याही काळात असणे आणि विचार व्यक्त करणे हे कोणत्या प्रकारच्या वाक्यांचे गुणधर्म आहेत ?",
    "question_english": "Being in any tense and expressing thoughts are characteristics of which type of sentences?",
    "options_marathi": [
      "विधानार्थी",
      "प्रश्नार्थी",
      "उद्‌गारार्थी",
      "स्वार्थी"
    ],
    "options_english": [
      "Assertive/Declarative",
      "Interrogative",
      "Exclamatory",
      "Indicative/Svarthi"
    ],
    "correct_option_index": 4,
    "subject": "Marathi Grammar",
    "topic": "Types of Sentences (वाक्यप्रकार) - Svarthi Vakya (स्वार्थी वाक्य)",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Misunderstanding",
    "explanation_english": "In Marathi grammar, 'स्वार्थी वाक्य' (Svarthi Vakya) refers to a sentence that simply states an action or a fact, focusing primarily on the tense of the verb (being in any tense - भूतकाळ, वर्तमानकाळ, भविष्यकाळ). It expresses a straightforward thought or statement without conveying any specific mood like command, request, or possibility. The other options (विधानार्थी, प्रश्नार्थी, उद्‌गारार्थी) describe the *purpose* or *structure* of a sentence, while 'स्वार्थी' describes the *mood* where the action itself and its tense are paramount.",
    "explanation_marathi": "मराठी व्याकरणात, 'स्वार्थी वाक्य' म्हणजे असे वाक्य जे केवळ क्रिया किंवा वस्तुस्थिती दर्शवते, मुख्यत्वे क्रियापदाच्या काळावर (भूतकाळ, वर्तमानकाळ, भविष्यकाळ) लक्ष केंद्रित करते. ते कोणतीही विशिष्ट आज्ञा, विनंती किंवा शक्यता यांसारखी भावना व्यक्त न करता सरळ विचार किंवा विधान मांडते. इतर पर्याय (विधानार्थी, प्रश्नार्थी, उद्‌गारार्थी) वाक्याचा उद्देश किंवा रचना वर्णन करतात, तर 'स्वार्थी' हा क्रियापदाचा काळ आणि क्रिया यावर भर देणारा अर्थ (mood) दर्शवतो.",
    "options_breakdown": [
      {
        "option_marathi": "विधानार्थी",
        "option_english": "Assertive/Declarative",
        "analysis": "These sentences state a fact or opinion. While they express thoughts, the defining characteristic of 'स्वार्थी' is the emphasis on tense without other moods."
      },
      {
        "option_marathi": "प्रश्नार्थी",
        "option_english": "Interrogative",
        "analysis": "These sentences ask a question, which is not the primary characteristic described."
      },
      {
        "option_marathi": "उद्‌गारार्थी",
        "option_english": "Exclamatory",
        "analysis": "These sentences express strong emotion, which is not the primary characteristic described."
      },
      {
        "option_marathi": "स्वार्थी",
        "option_english": "Indicative/Svarthi",
        "analysis": "This type of sentence simply states an action or fact, focusing on the tense of the verb (being in any tense) and expressing a straightforward thought, without any specific mood like command, request, or possibility. This perfectly matches the description. This is the correct answer."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "'पाऊस वेळेवर आला, म्हणून पिके वाचली.' वाक्यप्रकार ओळखा.",
    "question_english": "Identify the type of sentence: 'The rain came on time, therefore the crops were saved.'",
    "options_marathi": [
      "प्रश्नार्थी वाक्य",
      "संयुक्त वाक्य",
      "मिश्र वाक्य",
      "केवल वाक्य"
    ],
    "options_english": [
      "Interrogative sentence",
      "Compound sentence",
      "Complex sentence",
      "Simple sentence"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Types of Sentences (वाक्यप्रकार) - Compound Sentence (संयुक्त वाक्य)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "A compound sentence (संयुक्त वाक्य) consists of two or more independent clauses joined by a coordinating conjunction (like आणि, पण, किंवा, म्हणून, व, शिवाय, तरी, इ.). In the given sentence, 'पाऊस वेळेवर आला' (The rain came on time) is an independent clause, and 'पिके वाचली' (The crops were saved) is another independent clause. They are joined by the coordinating conjunction 'म्हणून' (therefore), indicating a result. Hence, it is a compound sentence.",
    "explanation_marathi": "संयुक्त वाक्य (Compound sentence) म्हणजे दोन किंवा अधिक स्वतंत्र वाक्ये (प्रधान वाक्ये) उभयान्वयी अव्ययांनी (उदा. आणि, पण, किंवा, म्हणून, व, शिवाय, तरी, इ.) जोडलेली असतात. दिलेल्या वाक्यात, 'पाऊस वेळेवर आला' हे एक स्वतंत्र वाक्य आहे आणि 'पिके वाचली' हे दुसरे स्वतंत्र वाक्य आहे. ही दोन्ही वाक्ये 'म्हणून' या उभयान्वयी अव्ययाने जोडलेली आहेत, जे परिणाम दर्शवते. म्हणून, हे एक संयुक्त वाक्य आहे.",
    "options_breakdown": [
      {
        "option_marathi": "प्रश्नार्थी वाक्य",
        "option_english": "Interrogative sentence",
        "analysis": "This sentence is not asking a question."
      },
      {
        "option_marathi": "संयुक्त वाक्य",
        "option_english": "Compound sentence",
        "analysis": "This is correct. It has two independent clauses ('पाऊस वेळेवर आला' and 'पिके वाचली') joined by a coordinating conjunction ('म्हणून'). This is the correct answer."
      },
      {
        "option_marathi": "मिश्र वाक्य",
        "option_english": "Complex sentence",
        "analysis": "A complex sentence has one main clause and one or more subordinate clauses. This sentence has two main clauses."
      },
      {
        "option_marathi": "केवल वाक्य",
        "option_english": "Simple sentence",
        "analysis": "A simple sentence has only one subject and one predicate. This sentence has two distinct subject-predicate pairs."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "'मी खूप कष्ट करून पैसा मिळविन.' या वाक्याचा प्रकार कोणता ?",
    "question_english": "What type of sentence is 'I will earn money by working very hard'?",
    "options_marathi": [
      "उद्‌गारवाचक",
      "विध्यर्थी",
      "संकेतार्थी",
      "आज्ञार्थी"
    ],
    "options_english": [
      "Exclamatory",
      "Indicative/Potential/Obligatory",
      "Conditional",
      "Imperative"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Types of Sentences (वाक्यप्रकार) - Vidhyarthi Vakya (विध्यर्थी वाक्य)",
    "difficulty": "Medium",
    "trap_detected": "Subtle distinction between moods",
    "explanation_english": "In Marathi grammar, 'विध्यर्थी वाक्य' (Vidhyarthi Vakya) expresses duty, obligation, possibility, or a simple statement of fact or future action. The sentence 'मी खूप कष्ट करून पैसा मिळविन.' (I will earn money by working very hard.) expresses a strong intention or a future action that is likely to happen, which aligns with the characteristics of a Vidhyarthi Vakya. It's a statement of what 'will be done' or 'should be done' in a broader sense, indicating potential or determination.",
    "explanation_marathi": "मराठी व्याकरणात, 'विध्यर्थी वाक्य' कर्तव्य, शक्यता, योग्यता, किंवा साधे विधान किंवा भविष्यकाळातील क्रिया व्यक्त करते. 'मी खूप कष्ट करून पैसा मिळविन.' हे वाक्य एक दृढ निश्चय किंवा भविष्यात घडणारी संभाव्य क्रिया व्यक्त करते, जे विध्यर्थी वाक्याच्या वैशिष्ट्यांशी जुळते. हे 'काय केले जाईल' किंवा 'काय केले पाहिजे' याचे व्यापक अर्थाने विधान आहे, जे संभाव्यता किंवा दृढनिश्चय दर्शवते.",
    "options_breakdown": [
      {
        "option_marathi": "उद्‌गारवाचक",
        "option_english": "Exclamatory",
        "analysis": "This sentence does not express strong emotion or end with an exclamation mark."
      },
      {
        "option_marathi": "विध्यर्थी",
        "option_english": "Indicative/Potential/Obligatory",
        "analysis": "This is correct. It expresses a strong intention or a future action, falling under the category of Vidhyarthi. This is the correct answer."
      },
      {
        "option_marathi": "संकेतार्थी",
        "option_english": "Conditional",
        "analysis": "This sentence does not express a condition (e.g., 'जर... तर...')."
      },
      {
        "option_marathi": "आज्ञार्थी",
        "option_english": "Imperative",
        "analysis": "This sentence is not a command, request, or blessing."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "खालीलपैकी तद्भव शब्दांचा गट ओळखा.\na. कर्ण, चक्र, विद्वान, जल\nb. अर्ज, अत्तर, पगार, चिमणी\nc. पाय, पान, सासू, सासरा\nd. गुरू, पुत्र, पुष्प, अग्नि",
    "question_english": "Identify the group of Tadbhava words from the following.\na. Karna, Chakra, Vidwan, Jal\nb. Arj, Attar, Pagar, Chimni\nc. Pay, Pan, Sasu, Sasra\nd. Guru, Putra, Pushpa, Agni",
    "options_marathi": [
      "फक्त a व b बरोबर",
      "फक्त a व d बरोबर",
      "फक्त c बरोबर",
      "सर्व पर्याय बरोबर"
    ],
    "options_english": [
      "Only a & b correct",
      "Only a & d correct",
      "Only c correct",
      "All options correct"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "Word Origins (शब्दांचे प्रकार) - Tadbhava Words (तद्भव शब्द)",
    "difficulty": "Medium",
    "trap_detected": "Mixing Tatsam, Tadbhava, Deshi, and Foreign words",
    "explanation_english": "Tadbhava words are those that originated from Sanskrit but have undergone changes in their form over time as they entered Marathi.\n*   Group 'a' (कर्ण, चक्र, विद्वान, जल) consists of Tatsam words (Sanskrit words used as is).\n*   Group 'b' (अर्ज, अत्तर, पगार) consists of foreign words (from Arabic, Persian, Portuguese), and चिमणी is a Deshi word. So, not a group of Tadbhava.\n*   Group 'c' (पाय, पान, सासू, सासरा) are all Tadbhava words, derived from Sanskrit words (पाद, पर्ण, श्वश्रू, श्वशुर respectively) with phonetic changes.\n*   Group 'd' (गुरू, पुत्र, पुष्प, अग्नि) consists of Tatsam words.\nTherefore, only group 'c' is a correct group of Tadbhava words.",
    "explanation_marathi": "तद्भव शब्द म्हणजे असे शब्द जे संस्कृतमधून आले आहेत, परंतु मराठीत येताना त्यांच्या रूपात बदल झाले आहेत.\n*   गट 'a' (कर्ण, चक्र, विद्वान, जल) हे तत्सम शब्द आहेत (संस्कृतमधून जसेच्या तसे आलेले).\n*   गट 'b' (अर्ज, अत्तर, पगार) हे परभाषीय शब्द आहेत (अरबी, फारसी, पोर्तुगीज), आणि चिमणी हा देशी शब्द आहे. त्यामुळे हा तद्भव शब्दांचा गट नाही.\n*   गट 'c' (पाय, पान, सासू, सासरा) हे सर्व तद्भव शब्द आहेत, जे संस्कृत शब्दांपासून (पाद, पर्ण, श्वश्रू, श्वशुर) ध्वनी बदलांसह तयार झाले आहेत.\n*   गट 'd' (गुरू, पुत्र, पुष्प, अग्नि) हे तत्सम शब्द आहेत.\nम्हणून, फक्त गट 'c' हा तद्भव शब्दांचा योग्य गट आहे.",
    "options_breakdown": [
      {
        "option_marathi": "फक्त a व b बरोबर",
        "option_english": "Only a & b correct",
        "analysis": "Incorrect, as 'a' contains Tatsam words and 'b' contains foreign/Deshi words, not Tadbhava."
      },
      {
        "option_marathi": "फक्त a व d बरोबर",
        "option_english": "Only a & d correct",
        "analysis": "Incorrect, as both 'a' and 'd' contain Tatsam words, not Tadbhava."
      },
      {
        "option_marathi": "फक्त c बरोबर",
        "option_english": "Only c correct",
        "analysis": "Correct, as all words in group 'c' (पाय, पान, सासू, सासरा) are Tadbhava words. This is the correct answer."
      },
      {
        "option_marathi": "सर्व पर्याय बरोबर",
        "option_english": "All options correct",
        "analysis": "Incorrect, as only group 'c' consists of Tadbhava words."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "'वाढदिवसानिमित्ताने गौरीला अक्षयकडून हिरेजडित ______ मिळाला'. रिकाम्या जागी उपसर्गघटित शब्दाचा वापर करा.\nअ. उपहार\nब. नजराणा\nक. भेट\nड. माळ",
    "question_english": "On her birthday, Gauri received a diamond-studded ______ from Akshay. Use a prefix-derived word in the blank.\nA. Upahar\nB. Najarana\nC. Bhet\nD. Mal",
    "options_marathi": [
      "अ",
      "अ आणि ब",
      "क",
      "ब आणि ड"
    ],
    "options_english": [
      "A",
      "A and B",
      "C",
      "B and D"
    ],
    "correct_option_index": 1,
    "subject": "Marathi Grammar",
    "topic": "Word Formation (शब्दसिद्धी) - Prefix-derived words (उपसर्गघटित शब्द)",
    "difficulty": "Easy",
    "trap_detected": "Mixing native/foreign words with prefix-derived words",
    "explanation_english": "A prefix-derived word (उपसर्गघटित शब्द) is formed by adding a prefix (उपसर्ग) to a root word. Among the given options:\n*   'उपहार' (Upahar) is formed by the prefix 'उप' (upa-) meaning 'sub' or 'near' and 'हार' (har) meaning 'to take' or 'garland'. In this context, 'उपहार' means a gift.\n*   'नजराणा' is a foreign word (Persian).\n*   'भेट' and 'माळ' are native Marathi words, not formed by prefixes.\nThus, only 'उपहार' is a prefix-derived word suitable for the blank.",
    "explanation_marathi": "उपसर्गघटित शब्द म्हणजे मूळ शब्दाला उपसर्ग (prefix) जोडून तयार झालेला शब्द. दिलेल्या पर्यायांपैकी:\n*   'उपहार' हा 'उप' (जवळ, गौण) या उपसर्गापासून आणि 'हार' या शब्दापासून बनलेला आहे. येथे 'उपहार' म्हणजे भेटवस्तू.\n*   'नजराणा' हा परभाषीय (फारसी) शब्द आहे.\n*   'भेट' आणि 'माळ' हे मराठी भाषेतील मूळ शब्द आहेत, उपसर्ग लागून तयार झालेले नाहीत.\nम्हणून, फक्त 'उपहार' हा उपसर्गघटित शब्द आहे जो रिकाम्या जागी योग्य आहे.",
    "options_breakdown": [
      {
        "option_marathi": "अ",
        "option_english": "A",
        "analysis": "Correct. 'उपहार' is formed with the prefix 'उप-' (upa-) and the root 'हार' (har), making it a prefix-derived word. This is the correct answer."
      },
      {
        "option_marathi": "अ आणि ब",
        "option_english": "A and B",
        "analysis": "Incorrect, as 'नजराणा' is a foreign word and not prefix-derived."
      },
      {
        "option_marathi": "क",
        "option_english": "C",
        "analysis": "Incorrect, 'भेट' is a native Marathi word, not formed by a prefix."
      },
      {
        "option_marathi": "ब आणि ड",
        "option_english": "B and D",
        "analysis": "Incorrect, as neither 'नजराणा' nor 'माळ' are prefix-derived words."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "योग्य जोड्या जुळवा.\nअ\nब\na. उपसर्गघटित\ni. नीलकंठ\nb. प्रत्ययघटित\nii. निरोगी\nc. अभ्यस्त शब्द\niii. रक्षक\nd. सामासिक शब्द\niv. घरघर",
    "question_english": "Match the pairs.\nA\nB\na. Prefix-derived\ni. Nilkanth\nb. Suffix-derived\nii. Nirogi\nc. Reduplicated word\niii. Rakshak\nd. Compound word\niv. Gharghar",
    "options_marathi": [
      "iii iv ii i",
      "iv ii i iii",
      "ii iii iv i",
      "iii i ii iv"
    ],
    "options_english": [
      "iii iv ii i",
      "iv ii i iii",
      "ii iii iv i",
      "iii i ii iv"
    ],
    "correct_option_index": 3,
    "subject": "Marathi Grammar",
    "topic": "Word Formation (शब्दसिद्धी) - Types of Words",
    "difficulty": "Medium",
    "trap_detected": "Confusing different word formation types",
    "explanation_english": "This question tests knowledge of different word formation types in Marathi.\n*   **a. उपसर्गघटित (Prefix-derived):** Words formed by adding a prefix. 'निरोगी' (Nirogi) is formed from 'निर' (nir-) + 'रोगी' (rogi). So, a-ii.\n*   **b. प्रत्ययघटित (Suffix-derived):** Words formed by adding a suffix. 'रक्षक' (Rakshak) is formed from 'रक्ष' (raksh) + '-क' (-ak). So, b-iii.\n*   **c. अभ्यस्त शब्द (Reduplicated word):** Words formed by repeating a part or whole of a word, often for emphasis or to denote continuity. 'घरघर' (Gharghar) is a reduplicated word. So, c-iv.\n*   **d. सामासिक शब्द (Compound word):** Words formed by combining two or more words. 'नीलकंठ' (Nilkanth) is a compound word (Bahuvrihi Samas), meaning 'one with a blue throat' (Lord Shiva). So, d-i.\nMatching these gives the sequence: a-ii, b-iii, c-iv, d-i.",
    "explanation_marathi": "हा प्रश्न मराठीतील विविध शब्दसिद्धी प्रकारांच्या ज्ञानाची चाचणी घेतो.\n*   **a. उपसर्गघटित:** उपसर्ग जोडून तयार झालेले शब्द. 'निरोगी' हा 'निर' + 'रोगी' यांपासून बनलेला आहे. म्हणून, a-ii.\n*   **b. प्रत्ययघटित:** प्रत्यय जोडून तयार झालेले शब्द. 'रक्षक' हा 'रक्ष' + '-क' यांपासून बनलेला आहे. म्हणून, b-iii.\n*   **c. अभ्यस्त शब्द:** शब्दाची पुनरावृत्ती करून तयार झालेले शब्द, जे जोर देण्यासाठी किंवा सातत्य दर्शवण्यासाठी वापरले जातात. 'घरघर' हा अभ्यस्त शब्द आहे. म्हणून, c-iv.\n*   **d. सामासिक शब्द:** दोन किंवा अधिक शब्दांच्या संयोगाने तयार झालेले शब्द. 'नीलकंठ' हा सामासिक शब्द आहे (बहुव्रीही समास), ज्याचा अर्थ 'ज्याचा कंठ निळा आहे तो' (भगवान शंकर). म्हणून, d-i.\nया जुळण्यांनुसार योग्य क्रम: a-ii, b-iii, c-iv, d-i.",
    "options_breakdown": [
      {
        "option_marathi": "iii iv ii i",
        "option_english": "iii iv ii i",
        "analysis": "Incorrect matching sequence."
      },
      {
        "option_marathi": "iv ii i iii",
        "option_english": "iv ii i iii",
        "analysis": "Incorrect matching sequence."
      },
      {
        "option_marathi": "ii iii iv i",
        "option_english": "ii iii iv i",
        "analysis": "Correct. This sequence matches the correct pairings: a-ii, b-iii, c-iv, d-i. This is the correct answer."
      },
      {
        "option_marathi": "iii i ii iv",
        "option_english": "iii i ii iv",
        "analysis": "Incorrect matching sequence."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "विरुद्धार्थी वाक्प्रचारांच्या जोड्या जुळवा.\na. उखळ पांढरे होणे\ni. धन शून्यावर येणे\nb. द्राविडी प्राणायाम करणे\nii. अभय देणे\nc. मूळावर येणे\niii. उकिरडे फुंकणे\nd. उदरी शनी येणे\niv. हातचा मळ असणे",
    "question_english": "Match the pairs of antonymous idioms.\na. To become prosperous\ni. To lose all wealth\nb. To do something in a complicated way\nii. To give protection\nc. To destroy completely\niii. To do useless work\nd. To face misfortune\niv. To be very easy",
    "options_marathi": [
      "a-iii b-iv c-i d-ii",
      "a-iv b-i c-ii d-iii",
      "a-iii b-ii c-iv d-i",
      "a-iii b-iv c-ii d-i"
    ],
    "options_english": [
      "a-iii b-iv c-i d-ii",
      "a-iv b-i c-ii d-iii",
      "a-iii b-ii c-iv d-i",
      "a-iii b-iv c-ii d-i"
    ],
    "correct_option_index": 4,
    "subject": "Marathi Grammar",
    "topic": "Idioms and Phrases (वाक्प्रचार) - Antonyms",
    "difficulty": "Hard",
    "trap_detected": "Semantic nuance in antonyms for idioms",
    "explanation_english": "This question requires matching idioms with their antonymous counterparts.\n*   **a. उखळ पांढरे होणे (to become prosperous/rich)**: Its antonym is **iii. उकिरडे फुंकणे (to do useless/unprofitable work)**. While not a direct opposite of 'richness', 'उकिरडे फुंकणे' implies wasting effort on something worthless, often leading to poverty or lack of prosperity, thus serving as an antonym in a broader sense.\n*   **b. द्राविडी प्राणायाम करणे (to do something in a very roundabout/complicated way)**: Its antonym is **iv. हातचा मळ असणे (to be very easy/simple)**. A complicated task is the opposite of an easy one.\n*   **c. मूळावर येणे (to destroy completely, to attack the root)**: Its antonym is **ii. अभय देणे (to give protection/assurance)**. Destruction is the opposite of protection.\n*   **d. उदरी शनी येणे (to face misfortune/bad luck)**: Its antonym is **i. धन शून्यावर येणे (to lose all wealth, become poor)**. Losing all wealth is a significant misfortune, making it a suitable antonym for 'facing misfortune' in general.\nTherefore, the correct matching sequence is a-iii, b-iv, c-ii, d-i.",
    "explanation_marathi": "या प्रश्नामध्ये वाक्प्रचारांच्या विरुद्धार्थी जोड्या जुळवायच्या आहेत.\n*   **a. उखळ पांढरे होणे (भरभराट होणे/श्रीमंत होणे)**: याचा विरुद्धार्थी वाक्प्रचार **iii. उकिरडे फुंकणे (निरुपयोगी काम करणे/कष्ट वाया घालवणे)** आहे. 'उकिरडे फुंकणे' म्हणजे निरर्थक कामात वेळ घालवणे, ज्यामुळे दारिद्र्य किंवा समृद्धीचा अभाव येतो, अशा प्रकारे ते 'भरभराट होणे' याच्या व्यापक अर्थाने विरुद्धार्थी ठरते.\n*   **b. द्राविडी प्राणायाम करणे (एखादे काम खूप गुंतागुंतीच्या किंवा लांबच्या मार्गाने करणे)**: याचा विरुद्धार्थी वाक्प्रचार **iv. हातचा मळ असणे (अत्यंत सोपे असणे)** आहे. गुंतागुंतीचे काम हे सोप्या कामाच्या विरुद्ध असते.\n*   **c. मूळावर येणे (पूर्णपणे नष्ट करणे/मुळापासून हल्ला करणे)**: याचा विरुद्धार्थी वाक्प्रचार **ii. अभय देणे (संरक्षण देणे/आश्वासन देणे)** आहे. नाश करणे हे संरक्षणाच्या विरुद्ध आहे.\n*   **d. उदरी शनी येणे (दुर्दैव येणे/वाईट काळ येणे)**: याचा विरुद्धार्थी वाक्प्रचार **i. धन शून्यावर येणे (सर्व धन गमावणे/गरीब होणे)** आहे. सर्व धन गमावणे हे एक मोठे दुर्दैव आहे, त्यामुळे ते 'दुर्दैव येणे' याच्यासाठी योग्य विरुद्धार्थी ठरते.\nम्हणून, योग्य जुळणी क्रम a-iii, b-iv, c-ii, d-i आहे.",
    "options_breakdown": [
      {
        "option_marathi": "a-iii b-iv c-i d-ii",
        "option_english": "a-iii b-iv c-i d-ii",
        "analysis": "Incorrect. The pairings for 'c' and 'd' are swapped compared to the correct answer."
      },
      {
        "option_marathi": "a-iv b-i c-ii d-iii",
        "option_english": "a-iv b-i c-ii d-iii",
        "analysis": "Incorrect matching sequence."
      },
      {
        "option_marathi": "a-iii b-ii c-iv d-i",
        "option_english": "a-iii b-ii c-iv d-i",
        "analysis": "Incorrect matching sequence."
      },
      {
        "option_marathi": "a-iii b-iv c-ii d-i",
        "option_english": "a-iii b-iv c-ii d-i",
        "analysis": "Correct. This sequence matches the justified antonymous pairings. This is the correct answer."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "खालील प्रसंगाला योग्य म्हण ओळखा.\n'मुला तुझ्या वडिलांनी खेड्यात जाऊन राहण्याचा निर्णय घेतलाय. तू म्हणतोस, मला त्यांच्याबरोबर जाऊ नकोस, तुला झेपणार नाही. पण आता राहिलंय काय माझं !'",
    "question_english": "Identify the correct proverb for the following situation:\n'Son, your father has decided to go and live in the village. You say, don't go with them, you won't be able to handle it. But what's left for me now!'",
    "options_marathi": [
      "जिकडे खोबरं तिकडे चांगभलं",
      "जिकडे सुई तिकडे दोरा",
      "जिकडे पोळी तिकडे गोंडा घोळी",
      "जसा भाव तसा देव"
    ],
    "options_english": [
      "Wherever there is coconut, there is 'changbhala'",
      "Wherever there is a needle, there is thread",
      "Wherever there is bread, there is a flatterer",
      "As is the devotion, so is the God"
    ],
    "correct_option_index": 2,
    "subject": "Marathi Grammar",
    "topic": "Proverbs (म्हणी)",
    "difficulty": "Medium",
    "trap_detected": "Distinguishing between proverbs of opportunism vs. dependence/inevitability",
    "explanation_english": "The situation describes a person who feels they have no other option but to follow their father to the village, despite advice against it, because they have nothing left ('पण आता राहिलंय काय माझं !'). The proverb 'जिकडे सुई तिकडे दोरा' (Wherever there is a needle, there is thread) perfectly captures this sentiment. It implies an inseparable bond or a situation where one is compelled to follow or stay with someone, often due to dependence or having no other recourse. The other proverbs relate to opportunism or faith, which do not fit the context of having no choice.",
    "explanation_marathi": "ही परिस्थिती अशा व्यक्तीचे वर्णन करते ज्याला वडिलांसोबत गावात जाण्याशिवाय पर्याय नाही असे वाटते, जरी त्याला तसे न करण्याचा सल्ला दिला जात असला तरी, कारण त्याच्याकडे काहीही उरलेले नाही ('पण आता राहिलंय काय माझं !'). 'जिकडे सुई तिकडे दोरा' ही म्हण या भावनेला अचूकपणे व्यक्त करते. याचा अर्थ अविभाज्य नाते किंवा अशी परिस्थिती जिथे एखाद्याला अवलंबून असल्यामुळे किंवा इतर कोणताही पर्याय नसल्यामुळे दुसऱ्याचे अनुसरण करणे किंवा त्याच्यासोबत राहणे भाग पडते. इतर म्हणी संधीसाधूपणा किंवा श्रद्धेशी संबंधित आहेत, ज्या या संदर्भात योग्य नाहीत.",
    "options_breakdown": [
      {
        "option_marathi": "जिकडे खोबरं तिकडे चांगभलं",
        "option_english": "Wherever there is coconut, there is 'changbhala'",
        "analysis": "This proverb refers to opportunism, going where there is benefit. It doesn't fit the context of having no choice due to loss."
      },
      {
        "option_marathi": "जिकडे सुई तिकडे दोरा",
        "option_english": "Wherever there is a needle, there is thread",
        "analysis": "Correct. This proverb signifies inseparable companionship or being compelled to follow due to dependence or lack of other options, which matches the speaker's feeling of having nothing left. This is the correct answer."
      },
      {
        "option_marathi": "जिकडे पोळी तिकडे गोंडा घोळी",
        "option_english": "Wherever there is bread, there is a flatterer",
        "analysis": "This proverb also refers to opportunism or flattery for personal gain. It doesn't fit the context."
      },
      {
        "option_marathi": "जसा भाव तसा देव",
        "option_english": "As is the devotion, so is the God",
        "analysis": "This proverb means one gets results according to their faith or intentions. It is irrelevant to the given situation."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "",
    "question_english": "Find out the meaning of the phrase underlined in the following sentence:\n\"Will you call on him today and tell him that he is to reach the office by 7 a.m. tomorrow?\"",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "To shout",
      "To remember",
      "To pay a visit to",
      "To invite"
    ],
    "correct_option_index": 3,
    "subject": "English",
    "topic": "Idioms and Phrases",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The phrasal verb \"call on\" means to pay a short visit to someone. In the given sentence, \"Will you call on him today?\" implies asking someone to visit him. Therefore, 'To pay a visit to' is the correct meaning.",
    "explanation_marathi": "\"call on\" या phrasal verb चा अर्थ 'एखाद्याला भेट देणे' असा होतो. दिलेल्या वाक्यात, \"Will you call on him today?\" म्हणजे 'तुम्ही त्याला आज भेट द्याल का?' असा अर्थ होतो. त्यामुळे, 'To pay a visit to' हा योग्य अर्थ आहे.",
    "options_breakdown": [
      {
        "option": "To shout",
        "is_correct": false,
        "reason": "The phrase 'call on' does not mean to shout. 'Call out' might mean to shout, but not 'call on'."
      },
      {
        "option": "To remember",
        "is_correct": false,
        "reason": "The phrase 'call on' is not related to remembering someone or something."
      },
      {
        "option": "To pay a visit to",
        "is_correct": true,
        "reason": "This is the precise and widely accepted meaning of the phrasal verb 'call on'."
      },
      {
        "option": "To invite",
        "is_correct": false,
        "reason": "While visiting someone might sometimes follow an invitation, 'call on' specifically means to visit, not to invite."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "",
    "question_english": "Find out the correct meaning of the underlined idiom in the given sentence :\n\"It is unfortunate that India has mostly been at loggerheads with all her neighbours.\"",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "To be on good terms",
      "To invite",
      "Doing business only",
      "Disagreeing or quarreling with"
    ],
    "correct_option_index": 4,
    "subject": "English",
    "topic": "Idioms and Phrases",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The idiom \"at loggerheads\" means to be in strong disagreement or dispute with someone. The sentence implies that India often has conflicts or disagreements with its neighbours. Therefore, 'Disagreeing or quarreling with' is the correct meaning.",
    "explanation_marathi": "\"at loggerheads\" या वाक्प्रचाराचा अर्थ 'एखाद्याशी तीव्र मतभेद किंवा वाद असणे' असा होतो. वाक्यात, भारताचे आपल्या शेजाऱ्यांशी अनेकदा वाद होतात असे सूचित केले आहे. त्यामुळे, 'Disagreeing or quarreling with' हा योग्य अर्थ आहे.",
    "options_breakdown": [
      {
        "option": "To be on good terms",
        "is_correct": false,
        "reason": "This is the opposite of being 'at loggerheads'. 'At loggerheads' implies conflict, not good relations."
      },
      {
        "option": "To invite",
        "is_correct": false,
        "reason": "This option is unrelated to the meaning of the idiom 'at loggerheads'."
      },
      {
        "option": "Doing business only",
        "is_correct": false,
        "reason": "This option does not capture the meaning of conflict or disagreement inherent in 'at loggerheads'."
      },
      {
        "option": "Disagreeing or quarreling with",
        "is_correct": true,
        "reason": "This accurately describes the state of being 'at loggerheads', which means to be in a dispute or conflict."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "",
    "question_english": "Choose the one word which is closest to the opposite in meaning of the underlined word in the given sentence:\n\"There was no altruistic motive that prompted him.\"",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Inhuman",
      "Selfish",
      "Wicked",
      "Brutal"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Vocabulary (Antonyms)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The word \"altruistic\" means showing a selfless concern for the well-being of others; unselfish. Its opposite would be someone who is concerned primarily with their own profit or pleasure, which is best described by the word \"selfish\".",
    "explanation_marathi": "\"altruistic\" या शब्दाचा अर्थ 'इतरांच्या कल्याणाची निःस्वार्थ काळजी घेणारा' किंवा 'निःस्वार्थी' असा होतो. या शब्दाचा विरुद्धार्थी शब्द 'स्वार्थी' (selfish) असा आहे, म्हणजे जो प्रामुख्याने स्वतःच्या फायद्याची किंवा आनंदाची काळजी घेतो.",
    "options_breakdown": [
      {
        "option": "Inhuman",
        "is_correct": false,
        "reason": "Inhuman means lacking human qualities like compassion or kindness, which is not the direct opposite of altruistic."
      },
      {
        "option": "Selfish",
        "is_correct": true,
        "reason": "Selfish means concerned excessively or exclusively with oneself or one's own advantage, pleasure, or welfare, regardless of others. This is the direct opposite of altruistic."
      },
      {
        "option": "Wicked",
        "is_correct": false,
        "reason": "Wicked means evil or morally wrong. While a selfish act can be wicked, 'wicked' is not the primary antonym for 'altruistic'."
      },
      {
        "option": "Brutal",
        "is_correct": false,
        "reason": "Brutal means savagely violent or cruel. This is not the opposite of altruistic."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "",
    "question_english": "Choose the meaning of the words underlined in the following sentences : (E)\na. The villagers may be coarse in their looks but they are very innocent at heart.\nb. The river appears to be changing its course.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "a - Poor, b - Water",
      "a - Pleasant, b - Subject",
      "a - Beautiful, b - Subject",
      "a - Rough, b - Direction"
    ],
    "correct_option_index": 4,
    "subject": "English",
    "topic": "Vocabulary (Homophones/Homonyms)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "In sentence (a), \"coarse\" refers to the rough, unrefined, or crude appearance of the villagers. In sentence (b), \"course\" refers to the direction or path that the river follows. Therefore, the correct meanings are 'a - Rough' and 'b - Direction'.",
    "explanation_marathi": "वाक्य (a) मध्ये, \"coarse\" म्हणजे गावकऱ्यांचे खडबडीत, असंस्कृत किंवा अडाणी स्वरूप. वाक्य (b) मध्ये, \"course\" म्हणजे नदीची दिशा किंवा मार्ग. त्यामुळे, 'a - Rough' आणि 'b - Direction' हे योग्य अर्थ आहेत.",
    "options_breakdown": [
      {
        "option": "a - Poor, b - Water",
        "is_correct": false,
        "reason": "'Coarse' does not mean poor in this context, and 'course' does not mean water."
      },
      {
        "option": "a - Pleasant, b - Subject",
        "is_correct": false,
        "reason": "'Coarse' is the opposite of pleasant in this context, and 'course' does not mean subject here."
      },
      {
        "option": "a - Beautiful, b - Subject",
        "is_correct": false,
        "reason": "'Coarse' is not beautiful, and 'course' does not mean subject here."
      },
      {
        "option": "a - Rough, b - Direction",
        "is_correct": true,
        "reason": "'Coarse' means rough or unrefined, and 'course' means direction or path, which perfectly fits the context of both sentences."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "",
    "question_english": "Find out the meaning of the words underlined in the given sentences :\na. Urban employment is a major problem.\nb. He is the soul of urbanity and wit.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "a- In cities, b - Sophistication",
      "a - Corporate, b - Wisdom",
      "a - Industrial, b - Comedy",
      "a- In banks, b- Fashion"
    ],
    "correct_option_index": 1,
    "subject": "English",
    "topic": "Vocabulary (Word Meanings)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "In sentence (a), \"urban\" refers to things related to a city or town, so 'in cities' is an appropriate meaning. In sentence (b), \"urbanity\" refers to the quality of being urbane, which means having sophistication, refinement, and politeness. Thus, 'Sophistication' is the correct meaning for 'urbanity'.",
    "explanation_marathi": "वाक्य (a) मध्ये, \"urban\" म्हणजे शहर किंवा नगराशी संबंधित गोष्टी, त्यामुळे 'शहरांमध्ये' (in cities) हा योग्य अर्थ आहे. वाक्य (b) मध्ये, \"urbanity\" म्हणजे सुसंस्कृतपणा, परिष्कृतपणा आणि नम्रता यांसारख्या शहरी गुणांचा संदर्भ. त्यामुळे, 'Sophistication' हा 'urbanity' साठी योग्य अर्थ आहे.",
    "options_breakdown": [
      {
        "option": "a- In cities, b - Sophistication",
        "is_correct": true,
        "reason": "'Urban' means relating to cities, and 'urbanity' means the quality of being urbane, which includes sophistication and refinement."
      },
      {
        "option": "a - Corporate, b - Wisdom",
        "is_correct": false,
        "reason": "'Urban' is not synonymous with corporate, and 'urbanity' is not synonymous with wisdom, though a sophisticated person might be wise."
      },
      {
        "option": "a - Industrial, b - Comedy",
        "is_correct": false,
        "reason": "While urban areas can be industrial, 'industrial' is not the primary meaning of 'urban'. 'Urbanity' has no direct relation to comedy."
      },
      {
        "option": "a- In banks, b- Fashion",
        "is_correct": false,
        "reason": "Neither 'urban' nor 'urbanity' are correctly defined by these options."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "",
    "question_english": "Choose the correctly punctuated sentence for the following :\nakbar said to tansen will you take me to him",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Akbar said to Tansen, \"will you take me to him.\"",
      "Akbar said to Tansen, \"Will you take me to him?\"",
      "Akbar said to Tansen, “Will you take me to him.”",
      "akbar said to tansen, \"Will you take me to him?\""
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Punctuation",
    "difficulty": "Easy",
    "trap_detected": "Minor Punctuation Errors",
    "explanation_english": "The sentence requires correct capitalization for proper nouns (Akbar, Tansen) and the start of the direct speech. Direct speech must be enclosed in quotation marks, preceded by a comma, and its first word capitalized. Since the direct speech is a question, it must end with a question mark inside the quotation marks. Option B correctly applies all these rules.",
    "explanation_marathi": "वाक्यात योग्य विरामचिन्हे वापरणे आवश्यक आहे. अकबर आणि तानसेन ही विशेष नामे असल्याने त्यांचे पहिले अक्षर मोठे असावे. वाक्याची सुरुवात मोठ्या अक्षराने करावी. प्रत्यक्ष संवाद अवतरण चिन्हात असावा, त्यापूर्वी स्वल्पविराम असावा आणि संवादातील पहिले अक्षर मोठे असावे. संवाद प्रश्नार्थक असल्याने तो प्रश्नचिन्हाने संपवावा. पर्याय B हे सर्व नियम योग्यरित्या लागू करतो.",
    "options_breakdown": [
      {
        "option": "Akbar said to Tansen, \"will you take me to him.\"",
        "is_correct": false,
        "reason": "The first word of the direct speech 'will' should be capitalized as 'Will', and the sentence should end with a question mark, not a period, as it is a question."
      },
      {
        "option": "Akbar said to Tansen, \"Will you take me to him?\"",
        "is_correct": true,
        "reason": "This option correctly applies all punctuation rules: proper nouns capitalized, comma before direct speech, direct speech in quotation marks, first word of direct speech capitalized, and a question mark at the end of the interrogative direct speech."
      },
      {
        "option": "Akbar said to Tansen, “Will you take me to him.”",
        "is_correct": false,
        "reason": "The sentence should end with a question mark, not a period, as the direct speech is a question."
      },
      {
        "option": "akbar said to tansen, \"Will you take me to him?\"",
        "is_correct": false,
        "reason": "The proper nouns 'akbar' and 'tansen' must be capitalized."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "",
    "question_english": "Which of the following is/are the correct negative sentence/s for -\n\"We admit that we went to see a film.\"\na. We admit that we did not go to see the film.\nb. We admit going not to see a film.\nc. We deny that we did not go to see a film.\nd. We do not deny that we went to see a film.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a and c",
      "Only b",
      "Only b and c",
      "Only d"
    ],
    "correct_option_index": 4,
    "subject": "English",
    "topic": "Sentence Transformation (Negation)",
    "difficulty": "Medium",
    "trap_detected": "Double Negative, Meaning Change",
    "explanation_english": "The original sentence \"We admit that we went to see a film\" means that we acknowledge having gone to see a film. To form a negative sentence that retains the original meaning (i.e., expresses the same fact but in a negative construction), we can say \"We do not deny that we went to see a film.\" This construction means \"We affirm that we went to see a film,\" which is equivalent to the original statement. Other options either change the meaning or are grammatically incorrect.",
    "explanation_marathi": "मूळ वाक्य \"We admit that we went to see a film\" म्हणजे 'आम्ही चित्रपट पाहण्यासाठी गेलो होतो हे मान्य करतो'. या वाक्याचे नकारात्मक वाक्य असे बनवायचे आहे की त्याचा मूळ अर्थ कायम राहील. \"We do not deny that we went to see a film\" या वाक्याचा अर्थ 'आम्ही चित्रपट पाहण्यासाठी गेलो होतो हे नाकारत नाही' असा होतो, म्हणजेच 'आम्ही चित्रपट पाहण्यासाठी गेलो होतो हे मान्य करतो'. हाच मूळ वाक्याचा अर्थ आहे. इतर पर्याय एकतर अर्थ बदलतात किंवा व्याकरणाच्या दृष्टीने चुकीचे आहेत.",
    "options_breakdown": [
      {
        "option": "Only a and c",
        "is_correct": false,
        "reason": "Option 'a' changes the meaning (admits not going). Option 'c' is a double negative that effectively affirms the original, but it's not a direct or clear negation of the admission itself."
      },
      {
        "option": "Only b",
        "is_correct": false,
        "reason": "Option 'b' is grammatically incorrect and awkward."
      },
      {
        "option": "Only b and c",
        "is_correct": false,
        "reason": "Both 'b' and 'c' are incorrect for the reasons stated above."
      },
      {
        "option": "Only d",
        "is_correct": true,
        "reason": "Option 'd', 'We do not deny that we went to see a film', correctly negates the act of denying, thereby affirming the original admission. 'Not deny' is equivalent to 'admit'."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "",
    "question_english": "'She gave the boy a book.'\nChange this sentence into passive voice.\na. The boy was given a book by her.\nb. The boy gave a book by her.\nc. A book was given to the boy by her.\nd. A book was given to her by the boy.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a and d",
      "Only a and c",
      "Only b and d",
      "Only b"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Voice (Active to Passive)",
    "difficulty": "Medium",
    "trap_detected": "Incorrect Transformation",
    "explanation_english": "The original sentence \"She gave the boy a book\" has two objects: \"the boy\" (indirect object) and \"a book\" (direct object). In passive voice, either object can become the subject. If \"the boy\" is the subject, the passive form is \"The boy was given a book by her.\" If \"a book\" is the subject, the passive form is \"A book was given to the boy by her.\" Both options 'a' and 'c' are grammatically correct passive transformations of the original sentence.",
    "explanation_marathi": "मूळ वाक्य \"She gave the boy a book\" मध्ये दोन कर्म आहेत: \"the boy\" (अप्रत्यक्ष कर्म) आणि \"a book\" (प्रत्यक्ष कर्म). passive voice मध्ये, यापैकी कोणतेही कर्म वाक्याचा कर्ता बनू शकते. जर \"the boy\" कर्ता असेल, तर passive form \"The boy was given a book by her.\" असे होते. जर \"a book\" कर्ता असेल, तर passive form \"A book was given to the boy by her.\" असे होते. पर्याय 'a' आणि 'c' दोन्ही मूळ वाक्याचे व्याकरणाच्या दृष्टीने योग्य passive voice मधील रूपांतर आहेत.",
    "options_breakdown": [
      {
        "option": "Only a and d",
        "is_correct": false,
        "reason": "Option 'd' is incorrect because it changes the agent and recipient, altering the original meaning."
      },
      {
        "option": "Only a and c",
        "is_correct": true,
        "reason": "Both 'a' and 'c' are correct passive voice transformations. 'a' uses the indirect object as the subject, and 'c' uses the direct object as the subject."
      },
      {
        "option": "Only b and d",
        "is_correct": false,
        "reason": "Both 'b' and 'd' are incorrect. 'b' is in active voice and changes the meaning, and 'd' changes the meaning."
      },
      {
        "option": "Only b",
        "is_correct": false,
        "reason": "Option 'b' is incorrect as it is in active voice and does not correctly transform the sentence."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "",
    "question_english": "Which of the following is the correct noun form of the word 'Destroy'?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Destructive",
      "Destruction",
      "Destruct",
      "Destructing"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Word Forms (Noun Forms)",
    "difficulty": "Easy",
    "trap_detected": "Distractors (Adjective, Verb, Gerund)",
    "explanation_english": "The word 'Destroy' is a verb. Its corresponding noun form, referring to the act or result of destroying, is 'Destruction'. 'Destructive' is an adjective, 'Destruct' is an informal verb or a root, and 'Destructing' is a present participle or gerund.",
    "explanation_marathi": "'Destroy' हा एक क्रियापद आहे. त्याचे संबंधित नामरूप, जे नष्ट करण्याच्या कृती किंवा परिणामाचा संदर्भ देते, ते 'Destruction' आहे. 'Destructive' हे विशेषण आहे, 'Destruct' हे अनौपचारिक क्रियापद किंवा मूळ शब्द आहे, आणि 'Destructing' हे वर्तमान कृदंत किंवा gerund आहे.",
    "options_breakdown": [
      {
        "option": "Destructive",
        "is_correct": false,
        "reason": "This is an adjective, meaning causing destruction (e.g., 'destructive criticism')."
      },
      {
        "option": "Destruction",
        "is_correct": true,
        "reason": "This is the correct noun form of the verb 'destroy', referring to the act or process of destroying something."
      },
      {
        "option": "Destruct",
        "is_correct": false,
        "reason": "This can be an informal verb (e.g., 'self-destruct') or a root, but not the standard noun form."
      },
      {
        "option": "Destructing",
        "is_correct": false,
        "reason": "This is the present participle or gerund form of the verb 'destroy'."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "",
    "question_english": "Find out \"One word\" for the underlined words :\n\"One who is a good judge of an art.\"",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Connoisseur",
      "Hypocrite",
      "Pioneer",
      "Cartographer"
    ],
    "correct_option_index": 1,
    "subject": "English",
    "topic": "One-Word Substitution",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "A \"connoisseur\" is an expert judge in matters of taste, particularly in fine arts or food. The phrase \"One who is a good judge of an art\" perfectly describes a connoisseur.",
    "explanation_marathi": "\"connoisseur\" म्हणजे चवीच्या बाबतीत, विशेषतः ललित कला किंवा खाद्यपदार्थांमध्ये, एक तज्ञ परीक्षक. \"One who is a good judge of an art\" हे वाक्य connoisseur चे अचूक वर्णन करते.",
    "options_breakdown": [
      {
        "option": "Connoisseur",
        "is_correct": true,
        "reason": "A connoisseur is defined as an expert judge in matters of taste, especially in the fine arts."
      },
      {
        "option": "Hypocrite",
        "is_correct": false,
        "reason": "A hypocrite is a person who pretends to have virtues or beliefs that they do not actually possess."
      },
      {
        "option": "Pioneer",
        "is_correct": false,
        "reason": "A pioneer is a person who is among the first to explore or settle a new country or area, or to develop a new area of knowledge."
      },
      {
        "option": "Cartographer",
        "is_correct": false,
        "reason": "A cartographer is a person who draws or produces maps."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "",
    "question_english": "The word \"run\" can have multiple meanings. In which of the following contexts does \"run\" represent the action of movement on foot ?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "\"I need to go for a run to stay fit.\"",
      "\"The water began to run out of the faucet.\"",
      "\"She runs a successful business.\"",
      "\"He has a long run ahead of him in the marathon.\""
    ],
    "correct_option_index": 1,
    "subject": "English Language",
    "topic": "Vocabulary (Multiple Meanings of Words)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The word \"run\" is highly polysemous, meaning it has multiple meanings depending on the context. In this question, we are looking for the context where \"run\" specifically refers to the action of movement on foot. Option 1, \"I need to go for a run to stay fit,\" uses \"run\" as a noun referring to the act of running as a physical exercise. Option 4, \"He has a long run ahead of him in the marathon,\" also uses \"run\" as a noun referring to the activity or distance covered by running. Both options describe movement on foot. However, \"go for a run\" is a very common idiom directly signifying the physical act of running. Option 2 refers to water flowing, and Option 3 refers to managing a business. Therefore, Option 1 is the most direct and clear representation of the action of movement on foot.",
    "explanation_marathi": "\"run\" या शब्दाचे संदर्भानुसार अनेक अर्थ आहेत. या प्रश्नात, \"run\" हा शब्द पायांनी चालण्याच्या क्रियेला (movement on foot) कोणत्या संदर्भात दर्शवतो हे शोधायचे आहे. पर्याय 1, \"I need to go for a run to stay fit,\" मध्ये \"run\" हा शब्द शारीरिक व्यायामासाठी धावण्याच्या क्रियेला (noun म्हणून) सूचित करतो. पर्याय 4, \"He has a long run ahead of him in the marathon,\" मध्ये देखील \"run\" हा शब्द धावण्याच्या क्रियेला किंवा धावलेल्या अंतराला (noun म्हणून) सूचित करतो. दोन्ही पर्याय पायांनी चालण्याच्या क्रियेचे वर्णन करतात. तथापि, \"go for a run\" हा एक सामान्य वाक्प्रचार आहे जो थेट धावण्याच्या शारीरिक क्रियेला दर्शवतो. पर्याय 2 पाण्यातून वाहणे आणि पर्याय 3 व्यवसाय व्यवस्थापित करणे या संदर्भात आहेत. त्यामुळे, पर्याय 1 हा पायांनी चालण्याच्या क्रियेचे सर्वात थेट आणि स्पष्ट प्रतिनिधित्व करतो.",
    "options_breakdown": [
      {
        "option": "\"I need to go for a run to stay fit.\"",
        "is_correct": true,
        "reason": "This phrase uses 'run' as a noun, directly referring to the act of running as a physical activity or exercise, which involves movement on foot."
      },
      {
        "option": "\"The water began to run out of the faucet.\"",
        "is_correct": false,
        "reason": "In this context, 'run' means to flow, referring to the movement of water, not movement on foot."
      },
      {
        "option": "\"She runs a successful business.\"",
        "is_correct": false,
        "reason": "Here, 'runs' means to manage or operate a business, not to move on foot."
      },
      {
        "option": "\"He has a long run ahead of him in the marathon.\"",
        "is_correct": false,
        "reason": "While a marathon involves running, 'a long run' here refers to the event, distance, or duration of the activity rather than the direct action of movement on foot as clearly as 'go for a run'. Option 1 is a more direct representation of the *action*."
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "",
    "question_english": "Which word represents the phrase \"excessively talkative\"?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Taciturn",
      "Evasive",
      "Reticent",
      "Loquacious"
    ],
    "correct_option_index": 4,
    "subject": "English Language",
    "topic": "Vocabulary (Synonyms/Antonyms)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The question asks for a word that means \"excessively talkative.\" Among the given options, \"Loquacious\" is the correct synonym. \"Loquacious\" describes someone who talks a great deal or is very talkative. \"Taciturn\" and \"Reticent\" are antonyms, meaning reserved or saying little. \"Evasive\" means avoiding direct answers or commitment.",
    "explanation_marathi": "हा प्रश्न \"excessively talkative\" (अतिशय बोलका) या वाक्यांशासाठी योग्य शब्द विचारतो. दिलेल्या पर्यायांपैकी, \"Loquacious\" हा योग्य समानार्थी शब्द आहे. \"Loquacious\" म्हणजे खूप बोलणारा किंवा बडबड्या व्यक्तीचे वर्णन करतो. \"Taciturn\" आणि \"Reticent\" हे विरुद्धार्थी शब्द आहेत, ज्यांचा अर्थ कमी बोलणारा किंवा आरक्षित असा होतो. \"Evasive\" म्हणजे थेट उत्तरे टाळणारा किंवा वचनबद्धता टाळणारा.",
    "options_breakdown": [
      {
        "option": "Taciturn",
        "is_correct": false,
        "reason": "'Taciturn' means reserved or uncommunicative, saying little, which is the opposite of excessively talkative."
      },
      {
        "option": "Evasive",
        "is_correct": false,
        "reason": "'Evasive' means tending to avoid commitment or self-revelation, especially by responding indirectly. It is not related to talkativeness."
      },
      {
        "option": "Reticent",
        "is_correct": false,
        "reason": "'Reticent' means not revealing one's thoughts or feelings readily; reserved. It is similar to taciturn and the opposite of talkative."
      },
      {
        "option": "Loquacious",
        "is_correct": true,
        "reason": "'Loquacious' directly means tending to talk a great deal; excessively talkative."
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "",
    "question_english": "Select the sentence with the correct use of preposition.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "My parents are concerned in my health",
      "My parents are concerned at my health",
      "My parents are concerned for my health",
      "My parents are concerned to my health"
    ],
    "correct_option_index": 3,
    "subject": "English Language",
    "topic": "Grammar (Prepositions)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "This question tests the correct usage of prepositions with the adjective \"concerned.\" The correct preposition to use when expressing worry or care about someone's well-being is \"for.\" Therefore, \"My parents are concerned for my health\" is the grammatically correct sentence. \"Concerned in,\" \"concerned at,\" and \"concerned to\" are incorrect in this context. \"Concerned about\" is also correct, but not an option here.",
    "explanation_marathi": "हा प्रश्न \"concerned\" या विशेषणासोबत योग्य अव्यय (preposition) वापरण्याची क्षमता तपासतो. एखाद्याच्या आरोग्याबद्दल चिंता किंवा काळजी व्यक्त करताना \"for\" हे अव्यय वापरणे योग्य आहे. म्हणून, \"My parents are concerned for my health\" हे व्याकरणदृष्ट्या योग्य वाक्य आहे. \"Concerned in,\" \"concerned at,\" आणि \"concerned to\" हे या संदर्भात चुकीचे आहेत. \"Concerned about\" देखील योग्य आहे, परंतु तो पर्याय येथे नाही.",
    "options_breakdown": [
      {
        "option": "My parents are concerned in my health",
        "is_correct": false,
        "reason": "'Concerned in' is not a standard or grammatically correct collocation to express worry about someone's health."
      },
      {
        "option": "My parents are concerned at my health",
        "is_correct": false,
        "reason": "'Concerned at' is typically used for a situation or event that causes concern (e.g., 'concerned at the lack of progress'), not for a person's health."
      },
      {
        "option": "My parents are concerned for my health",
        "is_correct": true,
        "reason": "'Concerned for' is the correct and idiomatic preposition to express worry or care about someone's well-being or safety."
      },
      {
        "option": "My parents are concerned to my health",
        "is_correct": false,
        "reason": "'Concerned to' is not a standard or grammatically correct collocation in this context."
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "",
    "question_english": "Identify the type of phrase underlined in the following sentence.\n'The umbrella with a broken handle is mine.'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Noun phrase",
      "Adverb phrase",
      "Adjective phrase",
      "Verbal phrase"
    ],
    "correct_option_index": 3,
    "subject": "English Language",
    "topic": "Grammar (Phrases - Adjective Phrase)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The underlined phrase is \"with a broken handle.\" This phrase describes the noun \"umbrella,\" specifying which particular umbrella is being referred to. Phrases that modify nouns or pronouns are called adjective phrases. An adjective phrase functions just like an adjective, providing more information about the noun. In this case, \"with a broken handle\" tells us a characteristic of the umbrella, hence it is an adjective phrase.",
    "explanation_marathi": "अधोरेखित वाक्यांश \"with a broken handle\" आहे. हा वाक्यांश \"umbrella\" या नामाचे वर्णन करतो, कोणती विशिष्ट छत्री आहे हे सांगतो. जे वाक्यांश नाम किंवा सर्वनामाचे वर्णन करतात त्यांना विशेषण वाक्यांश (adjective phrase) म्हणतात. विशेषण वाक्यांश विशेषणाप्रमाणेच कार्य करतो, नामाबद्दल अधिक माहिती देतो. या प्रकरणात, \"with a broken handle\" आपल्याला छत्रीचे वैशिष्ट्य सांगते, म्हणून तो एक विशेषण वाक्यांश आहे.",
    "options_breakdown": [
      {
        "option": "Noun phrase",
        "is_correct": false,
        "reason": "A noun phrase functions as a noun (e.g., 'The umbrella with a broken handle' as a whole is a noun phrase). 'With a broken handle' does not function as a noun."
      },
      {
        "option": "Adverb phrase",
        "is_correct": false,
        "reason": "An adverb phrase modifies a verb, adjective, or another adverb, telling us how, when, where, or why. 'With a broken handle' does not modify the verb 'is' in this manner."
      },
      {
        "option": "Adjective phrase",
        "is_correct": true,
        "reason": "The phrase 'with a broken handle' modifies the noun 'umbrella,' describing its characteristic. Therefore, it functions as an adjective and is an adjective phrase."
      },
      {
        "option": "Verbal phrase",
        "is_correct": false,
        "reason": "A verbal phrase contains a verbal (participle, gerund, or infinitive) and its modifiers/objects. 'With a broken handle' is a prepositional phrase functioning as an adjective, not a verbal phrase."
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "",
    "question_english": "Identify the grammatically correct sentence/s.\na. His parents loves him a lot.\nb. His courage won him honour.\nc. We all got very wet.\nd. They are been watched by the cops.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "a and b only",
      "b and c only",
      "c and d only",
      "a and d only"
    ],
    "correct_option_index": 2,
    "subject": "English Language",
    "topic": "Grammar (Subject-Verb Agreement, Tenses, Passive Voice)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "This question requires identifying grammatically correct sentences.\n*   Sentence a: \"His parents loves him a lot.\" is incorrect due to subject-verb agreement. \"Parents\" is a plural subject, so the verb should be \"love\" (plural form), not \"loves\" (singular form).\n*   Sentence b: \"His courage won him honour.\" is grammatically correct. \"Courage\" is a singular noun, and \"won\" is the past tense verb, correctly used here.\n*   Sentence c: \"We all got very wet.\" is grammatically correct. \"Got\" is the past tense of \"get,\" and \"wet\" is an adjective describing the state.\n*   Sentence d: \"They are been watched by the cops.\" is incorrect. The correct passive voice construction for present continuous would be \"They are being watched\" or for present perfect would be \"They have been watched.\" \"Are been\" is not a valid grammatical construction.\nTherefore, only sentences b and c are grammatically correct.",
    "explanation_marathi": "या प्रश्नामध्ये व्याकरणदृष्ट्या योग्य वाक्ये ओळखायची आहेत.\n*   वाक्य a: \"His parents loves him a lot.\" हे कर्ता-क्रियापद जुळणीमुळे (subject-verb agreement) चुकीचे आहे. \"Parents\" हा अनेकवचनी कर्ता आहे, त्यामुळे क्रियापद \"love\" (अनेकवचनी रूप) असायला हवे, \"loves\" (एकवचनी रूप) नाही.\n*   वाक्य b: \"His courage won him honour.\" हे व्याकरणदृष्ट्या योग्य आहे. \"Courage\" हे एकवचनी नाम आहे आणि \"won\" हे भूतकाळातील क्रियापद येथे योग्यरित्या वापरले आहे.\n*   वाक्य c: \"We all got very wet.\" हे व्याकरणदृष्ट्या योग्य आहे. \"Got\" हे \"get\" चे भूतकाळातील रूप आहे आणि \"wet\" हे स्थिती दर्शवणारे विशेषण आहे.\n*   वाक्य d: \"They are been watched by the cops.\" हे चुकीचे आहे. वर्तमान चालू काळातील निष्क्रिय वाक्याची (present continuous passive) योग्य रचना \"They are being watched\" अशी असेल किंवा पूर्ण वर्तमान काळातील निष्क्रिय वाक्याची (present perfect passive) रचना \"They have been watched\" अशी असेल. \"Are been\" ही व्याकरणदृष्ट्या वैध रचना नाही.\nम्हणून, फक्त वाक्ये b आणि c व्याकरणदृष्ट्या योग्य आहेत.",
    "options_breakdown": [
      {
        "option": "a and b only",
        "is_correct": false,
        "reason": "Sentence 'a' is grammatically incorrect due to subject-verb agreement ('parents' is plural, so 'love' should be used instead of 'loves')."
      },
      {
        "option": "b and c only",
        "is_correct": true,
        "reason": "Both sentence 'b' ('His courage won him honour.') and sentence 'c' ('We all got very wet.') are grammatically correct."
      },
      {
        "option": "c and d only",
        "is_correct": false,
        "reason": "Sentence 'd' is grammatically incorrect ('are been watched' is not a valid passive voice construction)."
      },
      {
        "option": "a and d only",
        "is_correct": false,
        "reason": "Both sentence 'a' and sentence 'd' are grammatically incorrect."
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "",
    "question_english": "Fill in the blank.\nComputer can make sold artifacts more ______.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Artistic",
      "Accessible",
      "Beautiful",
      "Scientific"
    ],
    "correct_option_index": 2,
    "subject": "English Language",
    "topic": "Vocabulary in Context / Technology and Heritage",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "This fill-in-the-blank question requires understanding the most logical impact of computers on \"sold artifacts.\" While computers can be used in various ways, their primary benefit in relation to artifacts, especially those that might be sold or dispersed, is to make them more \"accessible.\" Computers enable digitization, cataloging, and online display, allowing a wider audience to view, study, and learn about these artifacts, even if they are no longer in a public collection. The other options are less fitting: \"artistic\" and \"beautiful\" refer to inherent qualities or aesthetic enhancements, and \"scientific\" refers to the *study* of artifacts, not the artifacts themselves becoming more scientific.",
    "explanation_marathi": "या रिकाम्या जागा भरा प्रश्नासाठी \"विकलेल्या कलाकृतींवर\" (sold artifacts) संगणकाचा सर्वात तार्किक परिणाम काय असेल हे समजून घेणे आवश्यक आहे. संगणकाचा विविध प्रकारे वापर केला जात असला तरी, कलाकृतींच्या संदर्भात, विशेषतः ज्या विकल्या गेल्या आहेत किंवा विखुरल्या गेल्या आहेत, त्यांचा मुख्य फायदा त्यांना अधिक \"सुलभ\" (accessible) बनवणे हा आहे. संगणक डिजिटायझेशन, कॅटलॉगिंग आणि ऑनलाइन प्रदर्शनास सक्षम करतात, ज्यामुळे मोठ्या प्रेक्षकांना या कलाकृती पाहणे, अभ्यासणे आणि त्याबद्दल शिकणे शक्य होते, जरी त्या आता सार्वजनिक संग्रहात नसतील तरीही. इतर पर्याय कमी योग्य आहेत: \"artistic\" आणि \"beautiful\" हे मूळ गुणधर्म किंवा सौंदर्यात्मक सुधारणांशी संबंधित आहेत, आणि \"scientific\" हे कलाकृतींच्या *अभ्यासाशी* संबंधित आहे, कलाकृती स्वतः अधिक वैज्ञानिक बनण्याशी नाही.",
    "options_breakdown": [
      {
        "option": "Artistic",
        "is_correct": false,
        "reason": "Computers can aid in creating artistic representations or designs, but they don't inherently make existing 'sold artifacts' more artistic. Artifacts already possess their own artistic value."
      },
      {
        "option": "Accessible",
        "is_correct": true,
        "reason": "Computers, through digitization, online databases, and virtual exhibitions, can make information and images of sold artifacts available to a wider audience, thereby increasing their accessibility for study and appreciation."
      },
      {
        "option": "Beautiful",
        "is_correct": false,
        "reason": "While computers can enhance images or presentations, they don't make the physical 'sold artifacts' themselves more beautiful. Their beauty is inherent or perceived."
      },
      {
        "option": "Scientific",
        "is_correct": false,
        "reason": "Computers are used for the scientific analysis *of* artifacts, but they don't make the artifacts themselves 'more scientific.' The study becomes more scientific."
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "",
    "question_english": "What is the solution to the issues of lack of funds for archaeology?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Governmental authorities should sell excavated artifacts in the open market",
      "Only selected excavations should be undertaken",
      "Computers should be used in excavations",
      "Ordinary sites should not be excavated"
    ],
    "correct_option_index": 1,
    "subject": "English Language",
    "topic": "Reading Comprehension (Inference from Passage) / Archaeology Funding",
    "difficulty": "Medium",
    "trap_detected": "Controversial Stance",
    "explanation_english": "This question is based on a specific passage (not provided here). In the context of the passage, the solution proposed for the lack of funds in archaeology is that \"Governmental authorities should sell excavated artifacts in the open market.\" While this is a highly controversial practice in real-world archaeology, often leading to the loss of cultural heritage and encouraging illicit trade, the question asks for the solution *according to the passage*. Therefore, assuming the passage advocates this approach, Option 1 is the correct answer based on the implied context of the input data. Other options might be plausible general solutions but are not the one indicated by the provided correct option index.",
    "explanation_marathi": "हा प्रश्न एका विशिष्ट उताऱ्यावर (passage) आधारित आहे (जो येथे दिलेला नाही). उताऱ्याच्या संदर्भानुसार, पुरातत्वशास्त्रातील निधीच्या कमतरतेवर उपाय म्हणून \"शासकीय अधिकाऱ्यांनी उत्खनन केलेल्या कलाकृती खुल्या बाजारात विकाव्यात\" असे सुचवले आहे. वास्तविक पुरातत्वशास्त्रात ही एक अत्यंत वादग्रस्त प्रथा आहे, ज्यामुळे अनेकदा सांस्कृतिक वारशाचे नुकसान होते आणि अवैध व्यापाराला प्रोत्साहन मिळते. परंतु, प्रश्न उताऱ्यानुसार उपाय विचारतो. त्यामुळे, उतारा या दृष्टिकोनाचे समर्थन करत असेल असे गृहीत धरून, दिलेल्या इनपुट डेटाच्या निहित संदर्भानुसार पर्याय 1 हे योग्य उत्तर आहे. इतर पर्याय सामान्य उपाय असू शकतात, परंतु दिलेल्या योग्य पर्यायाच्या निर्देशानुसार ते नाहीत.",
    "options_breakdown": [
      {
        "option": "Governmental authorities should sell excavated artifacts in the open market",
        "is_correct": true,
        "reason": "Based on the implied context of the passage (and the original correct option index), this controversial approach is presented as the solution to funding issues in archaeology. It's crucial to answer based on the passage's viewpoint, even if it contradicts general ethical practices."
      },
      {
        "option": "Only selected excavations should be undertaken",
        "is_correct": false,
        "reason": "While this is a pragmatic approach to limited funds, it is not the specific solution indicated by the passage's implied stance, which focuses on generating revenue from existing artifacts."
      },
      {
        "option": "Computers should be used in excavations",
        "is_correct": false,
        "reason": "Using computers can improve efficiency and documentation in excavations, but it does not directly solve the fundamental lack of funds; it might even require initial investment."
      },
      {
        "option": "Ordinary sites should not be excavated",
        "is_correct": false,
        "reason": "This is a form of prioritization, similar to option 2, but it is not the specific solution indicated by the passage's implied stance, and the term 'ordinary' is subjective."
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "",
    "question_english": "Which of the following statement/s is/are true in the context of the passage?\na. Illegal excavation is a challenge in the profession of archaeology.\nb. Museums have shortage of space to store excavated artifacts.\nc. The author argues that professionals should excavate for money.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "c only",
      "a and b only",
      "b and c only",
      "a, b and c"
    ],
    "correct_option_index": 2,
    "subject": "English Language",
    "topic": "Reading Comprehension (Identifying True Statements)",
    "difficulty": "Medium",
    "trap_detected": "Nuance in interpretation",
    "explanation_english": "This question requires identifying statements that are true based on the provided passage (which is not available here). Based on the given `correct_option_index` (which points to \"a and b only\"), we infer that statements 'a' and 'b' are true in the context of the passage, while statement 'c' is false.\n*   Statement a: \"Illegal excavation is a challenge in the profession of archaeology.\" This is a widely recognized issue in archaeology, and it's highly probable the passage would mention it.\n*   Statement b: \"Museums have shortage of space to store excavated artifacts.\" This is also a common problem faced by museums globally, making it a plausible point in an archaeological discussion.\n*   Statement c: \"The author argues that professionals should excavate for money.\" While the passage might discuss funding issues (as inferred from Q67), the correct option implies that the author does *not* argue that professionals should excavate *for* money, but rather that funding is a challenge to be addressed. The motivation for excavation is typically scientific or historical, not financial gain for the excavators themselves.\nTherefore, only statements a and b are true according to the passage.",
    "explanation_marathi": "हा प्रश्न दिलेल्या उताऱ्याच्या आधारे (जो येथे उपलब्ध नाही) सत्य विधाने ओळखण्यास सांगतो. दिलेल्या `correct_option_index` (जो \"a and b only\" दर्शवतो) नुसार, आपण असे अनुमान काढतो की उताऱ्याच्या संदर्भात विधाने 'a' आणि 'b' सत्य आहेत, तर विधान 'c' असत्य आहे.\n*   विधान a: \"Illegal excavation is a challenge in the profession of archaeology.\" हे पुरातत्वशास्त्रातील एक सर्वमान्य आव्हान आहे आणि उताऱ्यात याचा उल्लेख असण्याची शक्यता जास्त आहे.\n*   विधान b: \"Museums have shortage of space to store excavated artifacts.\" ही देखील जगभरातील संग्रहालयांना भेडसावणारी एक सामान्य समस्या आहे, त्यामुळे पुरातत्वशास्त्रावरील चर्चेत हा एक संभाव्य मुद्दा आहे.\n*   विधान c: \"The author argues that professionals should excavate for money.\" जरी उताऱ्यात निधीच्या समस्यांवर चर्चा केली गेली असेल (Q67 वरून अनुमानित), तरी योग्य पर्याय सूचित करतो की लेखक असे प्रतिपादन करत नाही की व्यावसायिकांनी पैशासाठी उत्खनन करावे, तर निधीची समस्या सोडवणे हे एक आव्हान आहे. उत्खननाची प्रेरणा सामान्यतः वैज्ञानिक किंवा ऐतिहासिक असते, उत्खनन करणाऱ्यांसाठी आर्थिक लाभाची नसते.\nम्हणून, उताऱ्यानुसार फक्त विधाने a आणि b सत्य आहेत.",
    "options_breakdown": [
      {
        "option": "c only",
        "is_correct": false,
        "reason": "Statement 'c' is false according to the implied context of the passage, as the author does not argue for excavating for money."
      },
      {
        "option": "a and b only",
        "is_correct": true,
        "reason": "Both statement 'a' (Illegal excavation is a challenge) and statement 'b' (Museums have shortage of space) are true in the context of the passage, as implied by the correct option."
      },
      {
        "option": "b and c only",
        "is_correct": false,
        "reason": "Statement 'c' is false according to the implied context of the passage."
      },
      {
        "option": "a, b and c",
        "is_correct": false,
        "reason": "Statement 'c' is false according to the implied context of the passage."
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "",
    "question_english": "What are the advantages of selling excavated artifacts instead of storing them?\na. Photographs of sold artifacts can be taken.\nb. List of purchasers can be kept.\nc. Selling the artifacts would make them more popular.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "b only",
      "a and b only",
      "a and c only",
      "a, b and c"
    ],
    "correct_option_index": 2,
    "subject": "English Language",
    "topic": "Reading Comprehension (Identifying Advantages from Passage)",
    "difficulty": "Medium",
    "trap_detected": "Nuance in interpretation",
    "explanation_english": "This question asks about the advantages of selling excavated artifacts, as presented in the passage (not provided). Based on the given `correct_option_index` (which points to \"a and b only\"), we infer that statements 'a' and 'b' are considered advantages by the passage, while 'c' is not.\n*   Statement a: \"Photographs of sold artifacts can be taken.\" This is a practical advantage. Even if artifacts are sold, their visual record can be preserved through photography, which is crucial for documentation and study.\n*   Statement b: \"List of purchasers can be kept.\" Maintaining a record of who purchased the artifacts allows for tracking their provenance and potentially their location, which can be seen as an advantage for future research or accountability.\n*   Statement c: \"Selling the artifacts would make them more popular.\" This is generally not considered an advantage in the public interest. Selling artifacts often removes them from public display and access, making them less popular or accessible to the general public, even if they become popular among private collectors. The passage, by excluding this option, likely does not support this claim.\nTherefore, only statements a and b are true advantages according to the passage.",
    "explanation_marathi": "हा प्रश्न उत्खनन केलेल्या कलाकृती विकण्याचे फायदे विचारतो, जसे की उताऱ्यात (जो दिलेला नाही) सादर केले आहे. दिलेल्या `correct_option_index` (जो \"a and b only\" दर्शवतो) नुसार, आपण असे अनुमान काढतो की विधाने 'a' आणि 'b' उताऱ्याद्वारे फायदे मानली जातात, तर 'c' नाही.\n*   विधान a: \"Photographs of sold artifacts can be taken.\" हा एक व्यावहारिक फायदा आहे. कलाकृती विकल्या गेल्या तरी, त्यांची दृश्य नोंद छायाचित्रणाद्वारे जतन केली जाऊ शकते, जी दस्तऐवजीकरण आणि अभ्यासासाठी महत्त्वपूर्ण आहे.\n*   विधान b: \"List of purchasers can be kept.\" खरेदीदारांची नोंद ठेवल्याने त्यांच्या मालकीचा मागोवा घेता येतो आणि संभाव्यतः त्यांचे स्थान शोधता येते, जे भविष्यातील संशोधन किंवा जबाबदारीसाठी एक फायदा मानले जाऊ शकते.\n*   विधान c: \"Selling the artifacts would make them more popular.\" हे सामान्यतः सार्वजनिक हितासाठी फायदा मानले जात नाही. कलाकृती विकल्याने त्या अनेकदा सार्वजनिक प्रदर्शनातून आणि प्रवेशातून काढून टाकल्या जातात, ज्यामुळे त्या सामान्य लोकांसाठी कमी लोकप्रिय किंवा कमी सुलभ होतात, जरी त्या खाजगी संग्राहकांमध्ये लोकप्रिय झाल्या तरी. हा पर्याय वगळून, उतारा या दाव्याला समर्थन देत नाही असे दिसते.\nम्हणून, उताऱ्यानुसार फक्त विधाने a आणि b हे खरे फायदे आहेत.",
    "options_breakdown": [
      {
        "option": "b only",
        "is_correct": false,
        "reason": "Statement 'a' is also an advantage according to the implied passage context."
      },
      {
        "option": "a and b only",
        "is_correct": true,
        "reason": "Both statement 'a' (photographs can be taken) and statement 'b' (list of purchasers can be kept) are presented as advantages of selling artifacts in the passage."
      },
      {
        "option": "a and c only",
        "is_correct": false,
        "reason": "Statement 'c' (selling makes them more popular) is not considered an advantage in the passage's context."
      },
      {
        "option": "a, b and c",
        "is_correct": false,
        "reason": "Statement 'c' is not considered an advantage in the passage's context."
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "",
    "question_english": "Which statement/s is/are true in the context of the excavation in cyprus mentioned in the passage?\na. Around 2,000 small jugs were uncovered.\nb. The excavation was very big.\nc. The jugs were almost similar to one another.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "c only",
      "a and b only",
      "a and c only",
      "a, b and c"
    ],
    "correct_option_index": 1,
    "subject": "English Language",
    "topic": "Reading Comprehension (Factual Recall from Passage)",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question asks for true statements regarding an excavation in Cyprus, as mentioned in the passage (not provided). Based on the given `correct_option_index` (which points to \"c only\"), we infer that only statement 'c' is true according to the passage, while 'a' and 'b' are false.\n*   Statement a: \"Around 2,000 small jugs were uncovered.\" This statement is false as per the passage's context implied by the correct option. The actual number or type of artifacts might be different.\n*   Statement b: \"The excavation was very big.\" This statement is also false. The passage likely describes the excavation as not being \"very big\" or perhaps focuses on other aspects.\n*   Statement c: \"The jugs were almost similar to one another.\" This statement is true. The passage likely highlights the uniformity or mass production aspect of the jugs found in the Cyprus excavation.\nTherefore, only statement c is true in the context of the passage.",
    "explanation_marathi": "हा प्रश्न उताऱ्यात (जो दिलेला नाही) नमूद केलेल्या सायप्रसमधील उत्खननासंदर्भात सत्य विधाने विचारतो. दिलेल्या `correct_option_index` (जो \"c only\" दर्शवतो) नुसार, आपण असे अनुमान काढतो की उताऱ्यानुसार फक्त विधान 'c' सत्य आहे, तर 'a' आणि 'b' असत्य आहेत.\n*   विधान a: \"Around 2,000 small jugs were uncovered.\" हे विधान उताऱ्याच्या संदर्भानुसार (योग्य पर्यायाने सूचित केल्यानुसार) असत्य आहे. प्रत्यक्षात सापडलेल्या कलाकृतींची संख्या किंवा प्रकार वेगळा असू शकतो.\n*   विधान b: \"The excavation was very big.\" हे विधान देखील असत्य आहे. उताऱ्यात उत्खनन \"खूप मोठे\" नव्हते असे वर्णन केले असावे किंवा इतर पैलूंवर लक्ष केंद्रित केले असावे.\n*   विधान c: \"The jugs were almost similar to one another.\" हे विधान सत्य आहे. उताऱ्यात सायप्रस उत्खननात सापडलेल्या जग्सच्या एकसमानतेवर किंवा मोठ्या प्रमाणावर उत्पादनावर प्रकाश टाकला असावा.\nम्हणून, उताऱ्याच्या संदर्भात फक्त विधान c सत्य आहे.",
    "options_breakdown": [
      {
        "option": "c only",
        "is_correct": true,
        "reason": "According to the implied context of the passage, only statement 'c' (the jugs were almost similar to one another) is true regarding the Cyprus excavation."
      },
      {
        "option": "a and b only",
        "is_correct": false,
        "reason": "Statements 'a' and 'b' are false according to the implied context of the passage."
      },
      {
        "option": "a and c only",
        "is_correct": false,
        "reason": "Statement 'a' is false according to the implied context of the passage."
      },
      {
        "option": "a, b and c",
        "is_correct": false,
        "reason": "Statements 'a' and 'b' are false according to the implied context of the passage."
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "",
    "question_english": "Select the correct word for the following group of words.\n'One who talks much with little sense'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Garrulous",
      "Gaurmand",
      "Gregarious",
      "None of the above"
    ],
    "correct_option_index": 1,
    "subject": "English",
    "topic": "Vocabulary (One-word substitution)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The phrase \"One who talks much with little sense\" perfectly describes a garrulous person. Garrulous means excessively talkative, especially on trivial matters. A gourmand is someone who loves food, and gregarious means sociable. Therefore, 'Garrulous' is the most fitting word.",
    "explanation_marathi": "\"One who talks much with little sense\" या वाक्यांशासाठी योग्य शब्द 'Garrulous' आहे. 'Garrulous' म्हणजे अनावश्यक किंवा क्षुल्लक गोष्टींवर जास्त बोलणारा. 'Gourmand' म्हणजे खाण्याची आवड असलेला व्यक्ती, तर 'Gregarious' म्हणजे समाजात मिसळणारा किंवा मनमिळाऊ. त्यामुळे, 'Garrulous' हा सर्वात योग्य शब्द आहे.",
    "options_breakdown": [
      {
        "option": "Garrulous",
        "is_correct": true,
        "reason": "This word means excessively talkative, especially on trivial matters, which accurately describes someone who talks much with little sense."
      },
      {
        "option": "Gaurmand",
        "is_correct": false,
        "reason": "A gourmand is a person who enjoys eating and often eats too much, which is unrelated to talking."
      },
      {
        "option": "Gregarious",
        "is_correct": false,
        "reason": "Gregarious means fond of company; sociable. While a talkative person might be sociable, this word doesn't specifically imply talking with little sense."
      },
      {
        "option": "None of the above",
        "is_correct": false,
        "reason": "Option 1, 'Garrulous', is the correct word for the given description."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "",
    "question_english": "Select the correct option to complete the given sentence.\n'Honest bureaucrats hate to be ______ by their ______ bosses.'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Pressured, Politically",
      "Pressurised, Political",
      "Pressure, Politics",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Grammar (Parts of Speech, Sentence Structure)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Adverb vs. Adjective)",
    "explanation_english": "The first blank requires a past participle to form a passive infinitive ('to be + past participle'), indicating that bureaucrats are subjected to pressure. Both 'pressured' and 'pressurised' are correct forms. The second blank requires an adjective to modify the noun 'bosses'. 'Political' is the correct adjective form, while 'politically' is an adverb and 'politics' is a noun. Therefore, 'Pressurised, Political' is the correct pair.",
    "explanation_marathi": "पहिल्या रिकाम्या जागेत पॅसिव्ह इन्फिनिटिव्ह (to be + past participle) तयार करण्यासाठी क्रियापदाचे भूतकाळातील रूप (past participle) आवश्यक आहे, जे दर्शवते की नोकरशहांवर दबाव टाकला जातो. 'Pressured' किंवा 'Pressurised' दोन्ही योग्य आहेत. दुसऱ्या रिकाम्या जागेत 'bosses' या नामाचे वर्णन करण्यासाठी विशेषण (adjective) आवश्यक आहे. 'Political' हे योग्य विशेषण आहे, तर 'politically' हे क्रियाविशेषण (adverb) आणि 'politics' हे नाम (noun) आहे. म्हणून, 'Pressurised, Political' ही योग्य जोडी आहे.",
    "options_breakdown": [
      {
        "option": "Pressured, Politically",
        "is_correct": false,
        "reason": "While 'Pressured' is a correct verb form, 'Politically' is an adverb. An adjective ('Political') is needed to modify the noun 'bosses'."
      },
      {
        "option": "Pressurised, Political",
        "is_correct": true,
        "reason": "'Pressurised' is the correct past participle for the passive voice, and 'Political' is the correct adjective to describe 'bosses'."
      },
      {
        "option": "Pressure, Politics",
        "is_correct": false,
        "reason": "'Pressure' is a noun and 'Politics' is a noun. Neither fits the grammatical requirement for a verb form in the first blank or an adjective in the second."
      },
      {
        "option": "None of the above",
        "is_correct": false,
        "reason": "Option 2 provides the grammatically correct words to complete the sentence."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "",
    "question_english": "Identify the correct suffix in the word \"preference\".",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "pre -",
      "rence",
      "ence",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "English",
    "topic": "Grammar (Prefixes and Suffixes)",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap (Prefix vs. Suffix)",
    "explanation_english": "A suffix is a letter or group of letters added to the end of a word to form a new word or to change the grammatical function of the original word. In 'preference,' 'pre-' is the prefix (meaning before), 'fer' is the root (from Latin 'ferre' meaning to carry/bear), and '-ence' is the suffix, which forms a noun from the verb 'prefer'.",
    "explanation_marathi": "प्रत्यय (suffix) म्हणजे शब्दाच्या शेवटी जोडलेले अक्षर किंवा अक्षरांचा समूह, जो नवीन शब्द तयार करतो किंवा मूळ शब्दाचे व्याकरणिक कार्य बदलतो. 'preference' या शब्दात, 'pre-' हा उपसर्ग (prefix) आहे (अर्थ: आधी), 'fer' हे मूळ (root) आहे (लॅटिन 'ferre' म्हणजे वाहून नेणे/धारण करणे), आणि '-ence' हा प्रत्यय आहे, जो 'prefer' या क्रियापदापासून नाम तयार करतो.",
    "options_breakdown": [
      {
        "option": "pre -",
        "is_correct": false,
        "reason": "'pre-' is a prefix, which comes at the beginning of a word, not a suffix."
      },
      {
        "option": "rence",
        "is_correct": false,
        "reason": "While 'rence' is part of the ending, the actual suffix is '-ence'. The 'r' belongs to the root 'prefer'."
      },
      {
        "option": "ence",
        "is_correct": true,
        "reason": "'-ence' is a common suffix used to form nouns from verbs, indicating a state, quality, or action (e.g., 'depend' -> 'dependence', 'refer' -> 'reference')."
      },
      {
        "option": "None of the above",
        "is_correct": false,
        "reason": "Option 3, 'ence', is the correct suffix."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "",
    "question_english": "Fill in the blanks with the correct pair of the articles.\n______ young and ______ old both participated in the rally.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "the, an",
      "the, the",
      "a, an",
      "a, a"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Grammar (Articles)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "When the definite article 'the' is used before an adjective, it refers to a whole group of people possessing that quality. In this sentence, 'the young' refers to all young people, and 'the old' refers to all old people. Both groups participated in the rally, making 'the, the' the correct pair of articles.",
    "explanation_marathi": "जेव्हा 'the' हे निश्चित उपपद (definite article) एखाद्या विशेषणापूर्वी (adjective) वापरले जाते, तेव्हा ते त्या गुणधर्माच्या सर्व लोकांच्या समूहाला सूचित करते. या वाक्यात, 'the young' म्हणजे सर्व तरुण लोक आणि 'the old' म्हणजे सर्व वृद्ध लोक. दोन्ही गटांनी रॅलीमध्ये भाग घेतला, त्यामुळे 'the, the' ही उपपदांची योग्य जोडी आहे.",
    "options_breakdown": [
      {
        "option": "the, an",
        "is_correct": false,
        "reason": "'an' is an indefinite article and is not used to refer to a general group of people. 'The old' is the correct form."
      },
      {
        "option": "the, the",
        "is_correct": true,
        "reason": "'The young' refers to young people as a group, and 'the old' refers to old people as a group. This is the correct usage for referring to categories of people."
      },
      {
        "option": "a, an",
        "is_correct": false,
        "reason": "'a' and 'an' are indefinite articles and are not used to refer to a general group of people in this context."
      },
      {
        "option": "a, a",
        "is_correct": false,
        "reason": "'a' is an indefinite article and is not used to refer to a general group of people in this context."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "",
    "question_english": "Match the words in column 'A' with their opposite meanings in column 'B'.\n'A'\n'B'\nA. Fickle\ni. Ferocious\nB. Frugal\nii. Extravagant\nC. Loyal\niii. Constant\nD. Gentle\niv. Treacherous",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "A- iv, B – ii, C – i, D – iii",
      "A – iii, B – i, C – ii, D – iv",
      "A - iii, B - ii, C – iv, D – i",
      "A - iii, B - ii, C – i, D – iv"
    ],
    "correct_option_index": 3,
    "subject": "English",
    "topic": "Vocabulary (Antonyms)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "This question tests vocabulary knowledge, specifically antonyms. Fickle means changing frequently; its opposite is Constant (steadfast). Frugal means economical; its opposite is Extravagant (spending freely). Loyal means faithful; its opposite is Treacherous (betraying trust). Gentle means mild/kind; its opposite is Ferocious (fierce/violent). Matching these pairs gives A-iii, B-ii, C-iv, D-i.",
    "explanation_marathi": "हा प्रश्न शब्दसंग्रह ज्ञानाची, विशेषतः विरुद्धार्थी शब्दांची चाचणी घेतो. Fickle म्हणजे वारंवार बदलणारे; त्याचा विरुद्धार्थी शब्द Constant (स्थिर) आहे. Frugal म्हणजे काटकसरी; त्याचा विरुद्धार्थी शब्द Extravagant (अवाजवी खर्च करणारा) आहे. Loyal म्हणजे निष्ठावान; त्याचा विरुद्धार्थी शब्द Treacherous (विश्वासघातकी) आहे. Gentle म्हणजे सौम्य/दयाळू; त्याचा विरुद्धार्थी शब्द Ferocious (क्रूर/हिंसक) आहे. या जोड्या जुळवल्यास A-iii, B-ii, C-iv, D-i हे योग्य उत्तर मिळते.",
    "options_breakdown": [
      {
        "option": "A- iv, B – ii, C – i, D – iii",
        "is_correct": false,
        "reason": "A-iv (Fickle - Treacherous) is incorrect. The opposite of Fickle is Constant."
      },
      {
        "option": "A – iii, B – i, C – ii, D – iv",
        "is_correct": false,
        "reason": "B-i (Frugal - Ferocious) is incorrect. The opposite of Frugal is Extravagant."
      },
      {
        "option": "A - iii, B - ii, C – iv, D – i",
        "is_correct": true,
        "reason": "This option correctly matches all the words with their antonyms: A. Fickle - iii. Constant; B. Frugal - ii. Extravagant; C. Loyal - iv. Treacherous; D. Gentle - i. Ferocious."
      },
      {
        "option": "A - iii, B - ii, C – i, D – iv",
        "is_correct": false,
        "reason": "C-i (Loyal - Ferocious) is incorrect. The opposite of Loyal is Treacherous."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "",
    "question_english": "Fill in the blank.\nThat he will be elected the Prime Minister ______.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "everyone is expecting",
      "everyone expected",
      "everyone expects",
      "is expected by everyone"
    ],
    "correct_option_index": 4,
    "subject": "English",
    "topic": "Grammar (Noun Clauses, Subject-Verb Agreement, Passive Voice)",
    "difficulty": "Hard",
    "trap_detected": "Grammatical Restructuring",
    "explanation_english": "The phrase 'That he will be elected the Prime Minister' functions as a noun clause, acting as the singular subject of the sentence. Therefore, the verb that follows must be singular and agree with this subject. Options 1, 2, and 3 place 'everyone' as the subject of the verb, which would require restructuring the sentence (e.g., 'Everyone expects that he will be elected...'). Option 4, 'is expected by everyone,' provides a singular passive verb phrase that correctly completes the sentence, with the noun clause acting as the subject of 'is expected.'",
    "explanation_marathi": "'That he will be elected the Prime Minister' हा वाक्यांश नाम उपवाक्य (noun clause) म्हणून कार्य करतो आणि वाक्याचा एकवचनी कर्ता (singular subject) आहे. त्यामुळे, त्यानंतर येणारे क्रियापद एकवचनी असले पाहिजे आणि या कर्त्याशी जुळले पाहिजे. पर्याय 1, 2 आणि 3 मध्ये 'everyone' हे क्रियापदाचे कर्ता म्हणून येते, ज्यासाठी वाक्याची पुनर्रचना करावी लागेल (उदा. 'Everyone expects that he will be elected...'). पर्याय 4, 'is expected by everyone,' एकवचनी पॅसिव्ह क्रियापद वाक्यांश प्रदान करतो जो वाक्याला योग्यरित्या पूर्ण करतो, ज्यात नाम उपवाक्य 'is expected' चे कर्ता म्हणून कार्य करते.",
    "options_breakdown": [
      {
        "option": "everyone is expecting",
        "is_correct": false,
        "reason": "This option would make 'everyone' the subject, which is grammatically incorrect when the sentence starts with a noun clause acting as the subject. The noun clause cannot directly precede 'everyone is expecting' without a conjunction or different sentence structure."
      },
      {
        "option": "everyone expected",
        "is_correct": false,
        "reason": "Similar to option 1, this changes the subject of the main clause from the noun clause to 'everyone', leading to an ungrammatical sentence structure."
      },
      {
        "option": "everyone expects",
        "is_correct": false,
        "reason": "Similar to option 1 and 2, this option incorrectly places 'everyone' as the subject of the main verb, violating the structure where the noun clause is the subject."
      },
      {
        "option": "is expected by everyone",
        "is_correct": true,
        "reason": "The noun clause 'That he will be elected the Prime Minister' acts as a singular subject. 'is expected by everyone' is a singular passive predicate that correctly agrees with this subject, forming a grammatically sound sentence."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "",
    "question_english": "i. Please, boil the water.\nii. The water is boiling.\nThe underlined verbs in the sentences above belong to the types of verb called ______ and ______ respectively.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Transitive, Transitive",
      "Intransitive, Transitive",
      "Transitive, Intransitive",
      "Intransitive, Intransitive"
    ],
    "correct_option_index": 3,
    "subject": "English",
    "topic": "Grammar (Transitive and Intransitive Verbs)",
    "difficulty": "Medium",
    "trap_detected": "Contextual Ambiguity (Verb can be both)",
    "explanation_english": "A transitive verb is a verb that requires a direct object to complete its meaning. An intransitive verb does not require a direct object. In sentence (i), 'Please, boil the water,' the verb 'boil' has a direct object 'the water' (you are boiling *what*? the water). Thus, 'boil' is transitive. In sentence (ii), 'The water is boiling,' the verb 'boiling' does not have a direct object. The water itself is performing the action; it is not boiling something else. Thus, 'boiling' is intransitive. Therefore, the correct classification is Transitive, Intransitive.",
    "explanation_marathi": "सकर्मक क्रियापद (transitive verb) म्हणजे ज्या क्रियापदाला त्याचा अर्थ पूर्ण करण्यासाठी प्रत्यक्ष कर्म (direct object) आवश्यक असते. अकर्मक क्रियापद (intransitive verb) म्हणजे ज्याला प्रत्यक्ष कर्माची आवश्यकता नसते. वाक्य (i) मध्ये, 'Please, boil the water,' 'boil' या क्रियापदाला 'the water' हे प्रत्यक्ष कर्म आहे (तुम्ही काय उकळत आहात? पाणी). म्हणून, 'boil' हे सकर्मक क्रियापद आहे. वाक्य (ii) मध्ये, 'The water is boiling,' 'boiling' या क्रियापदाला प्रत्यक्ष कर्म नाही. पाणी स्वतःच उकळण्याची क्रिया करत आहे; ते इतर काहीही उकळत नाहीये. म्हणून, 'boiling' हे अकर्मक क्रियापद आहे. म्हणून, योग्य वर्गीकरण Transitive, Intransitive असे आहे.",
    "options_breakdown": [
      {
        "option": "Transitive, Transitive",
        "is_correct": false,
        "reason": "The verb 'boiling' in the second sentence is intransitive because it does not take a direct object."
      },
      {
        "option": "Intransitive, Transitive",
        "is_correct": false,
        "reason": "The verb 'boil' in the first sentence is transitive as it has a direct object ('the water')."
      },
      {
        "option": "Transitive, Intransitive",
        "is_correct": true,
        "reason": "In (i), 'boil' takes 'the water' as a direct object (transitive). In (ii), 'boiling' describes the state of the water and has no direct object (intransitive)."
      },
      {
        "option": "Intransitive, Intransitive",
        "is_correct": false,
        "reason": "The verb 'boil' in the first sentence is transitive."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "",
    "question_english": "'I find no chance ______ making a profit in this business.'\nWhich of the following prepositions correctly fills in the blank in the sentence above ?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "in",
      "of",
      "to",
      "for"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Grammar (Prepositions, Idioms)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The correct preposition to use with the noun 'chance' when referring to the possibility of an action is 'of'. The phrase 'chance of making a profit' means the possibility or likelihood of earning a profit. Other prepositions like 'in,' 'to,' or 'for' do not form the correct idiomatic expression in this context.",
    "explanation_marathi": "'chance' या नामासोबत एखाद्या क्रियेच्या शक्यतेबद्दल बोलताना 'of' हे योग्य शब्दयोगी अव्यय (preposition) वापरले जाते. 'chance of making a profit' या वाक्यांशाचा अर्थ नफा कमावण्याची शक्यता असा होतो. 'in', 'to' किंवा 'for' यांसारखी इतर शब्दयोगी अव्यये या संदर्भात योग्य वाक्प्रचार तयार करत नाहीत.",
    "options_breakdown": [
      {
        "option": "in",
        "is_correct": false,
        "reason": "'Chance in making' is not a standard or idiomatic prepositional phrase."
      },
      {
        "option": "of",
        "is_correct": true,
        "reason": "'Chance of' is the correct and idiomatic prepositional phrase used to express the possibility or likelihood of something happening, especially when followed by a gerund."
      },
      {
        "option": "to",
        "is_correct": false,
        "reason": "While 'chance to make' is grammatically correct with an infinitive, the sentence uses a gerund ('making'), so 'of' is required."
      },
      {
        "option": "for",
        "is_correct": false,
        "reason": "'Chance for making' is not a standard or idiomatic prepositional phrase."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "",
    "question_english": "'The small child was crying for ______ mother.'\nWhich of the following correctly agrees with the underlined subject noun in the sentence above?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "his",
      "her",
      "their",
      "its"
    ],
    "correct_option_index": 4,
    "subject": "English",
    "topic": "Grammar (Pronoun Agreement)",
    "difficulty": "Medium",
    "trap_detected": "Ambiguous Gender",
    "explanation_english": "The subject noun is 'The small child.' When the gender of a single child is not specified, the possessive pronoun 'its' is generally used for agreement. While 'his' or 'her' could be used if the gender were known or assumed, 'its' is the most grammatically neutral and correct choice in this context, treating 'child' as a gender-neutral noun. 'Their' is incorrect as 'child' is singular.",
    "explanation_marathi": "कर्ता नाम 'The small child' आहे. जेव्हा एका लहान मुलाचे लिंग निर्दिष्ट केलेले नसते, तेव्हा सामान्यतः 'its' हे संबंधवाचक सर्वनाम (possessive pronoun) वापरले जाते. जर लिंग ज्ञात किंवा गृहीत धरले असते तर 'his' किंवा 'her' वापरले असते, परंतु या संदर्भात 'its' ही सर्वात व्याकरणिकदृष्ट्या तटस्थ आणि योग्य निवड आहे, 'child' ला लिंग-तटस्थ नाम मानून. 'Their' चुकीचे आहे कारण 'child' एकवचनी आहे.",
    "options_breakdown": [
      {
        "option": "his",
        "is_correct": false,
        "reason": "This assumes the child is male, but the gender is not specified in the sentence."
      },
      {
        "option": "her",
        "is_correct": false,
        "reason": "This assumes the child is female, but the gender is not specified in the sentence."
      },
      {
        "option": "their",
        "is_correct": false,
        "reason": "'Their' is a plural possessive pronoun, but 'child' is a singular noun."
      },
      {
        "option": "its",
        "is_correct": true,
        "reason": "'Its' is the correct possessive pronoun for a singular noun like 'child' when the gender is not specified, treating the child as gender-neutral or an entity."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "",
    "question_english": "'It is imperative that he catch the next plane.'\nThe sentence above expresses ______ mood/moods.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Indicative",
      "Subjunctive",
      "Imperative",
      "Both indicative and imperative"
    ],
    "correct_option_index": 2,
    "subject": "English",
    "topic": "Grammar (Mood of Verbs)",
    "difficulty": "Hard",
    "trap_detected": "Confusing Subjunctive with Imperative",
    "explanation_english": "The sentence 'It is imperative that he catch the next plane' uses the subjunctive mood. The subjunctive mood is used in clauses following expressions of necessity, importance, or desire (like 'it is imperative that'). A key indicator is the use of the base form of the verb ('catch') regardless of the subject's number or person (e.g., 'he catch' instead of 'he catches'). The indicative mood states facts, and the imperative mood gives direct commands.",
    "explanation_marathi": "'It is imperative that he catch the next plane' हे वाक्य सबजंक्टिव्ह मूड (subjunctive mood) वापरते. सबजंक्टिव्ह मूड आवश्यकतेच्या, महत्त्वाच्या किंवा इच्छेच्या अभिव्यक्तीनंतर (जसे की 'it is imperative that') उपवाक्यांमध्ये वापरला जातो. एक महत्त्वाचे सूचक म्हणजे क्रियापदाचे मूळ रूप ('catch') वापरणे, कर्त्याच्या वचन किंवा पुरुषानुसार बदल न करता (उदा. 'he catch' ऐवजी 'he catches'). इंडिकेटिव्ह मूड तथ्ये सांगतो, तर इम्पेरेटिव्ह मूड थेट आज्ञा देतो.",
    "options_breakdown": [
      {
        "option": "Indicative",
        "is_correct": false,
        "reason": "The indicative mood would use 'he catches' for a factual statement, not 'he catch'."
      },
      {
        "option": "Subjunctive",
        "is_correct": true,
        "reason": "The use of the base form of the verb ('catch') after an expression of necessity ('it is imperative that') is a characteristic feature of the subjunctive mood."
      },
      {
        "option": "Imperative",
        "is_correct": false,
        "reason": "The imperative mood is used for direct commands (e.g., 'Catch the next plane!'), not for clauses introduced by 'it is imperative that'."
      },
      {
        "option": "Both indicative and imperative",
        "is_correct": false,
        "reason": "The sentence clearly expresses the subjunctive mood, not a combination of indicative and imperative."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "",
    "question_english": "a. If you come the bank will be able to help you.\nb. Had I known it, I would come to you.\nc. Unless the floods went down, we shan't be able to drop food-packets.\nIdentify the grammatically correct sentence/s.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a",
      "Only b",
      "Only a and c",
      "Only b and c"
    ],
    "correct_option_index": 0,
    "subject": "English Grammar",
    "topic": "Conditional Sentences, Sentence Correction",
    "difficulty": "Hard",
    "trap_detected": "Grammatical errors in all options, making it a flawed question.",
    "explanation_english": "Sentence (a) \"If you come the bank will be able to help you.\" is grammatically incorrect. It should either be \"If you come, the bank will be able to help you\" (assuming 'come' is intransitive and 'the bank' is the subject of the main clause) or \"If you come to the bank, the bank will be able to help you.\" The absence of a comma or a preposition makes it awkward. Sentence (b) \"Had I known it, I would come to you.\" is an incorrect third conditional structure. The correct form for a past hypothetical condition and its past hypothetical result is \"Had I known it, I would have come to you.\" (would + have + past participle). Sentence (c) \"Unless the floods went down, we shan't be able to drop food-packets.\" incorrectly mixes conditional types. \"Unless the floods went down\" (simple past) suggests a Type 2 conditional, which should be followed by \"we wouldn't be able to drop food-packets.\" For a Type 1 conditional (future consequence), it should be \"Unless the floods go down, we shan't be able to drop food-packets.\" Since all given sentences contain grammatical errors, there is no grammatically correct sentence among the options. Therefore, the question is flawed, and the correct option index should be 0.",
    "explanation_marathi": "वाक्य (a) \"If you come the bank will be able to help you.\" हे व्याकरणदृष्ट्या चुकीचे आहे. ते \"If you come, the bank will be able to help you\" (जर 'come' अकर्मक क्रियापद असेल आणि 'the bank' मुख्य वाक्याचा कर्ता असेल) किंवा \"If you come to the bank, the bank will be able to help you\" असे असायला हवे. स्वल्पविराम किंवा योग्य अव्ययाचा अभाव यामुळे वाक्य चुकीचे वाटते. वाक्य (b) \"Had I known it, I would come to you.\" हे तिसऱ्या प्रकारच्या अटीच्या वाक्याची (third conditional) चुकीची रचना आहे. भूतकाळातील काल्पनिक अट आणि त्याचे भूतकाळातील काल्पनिक परिणाम दर्शवण्यासाठी योग्य रचना \"Had I known it, I would have come to you.\" (would + have + past participle) अशी असते. वाक्य (c) \"Unless the floods went down, we shan't be able to drop food-packets.\" हे अटीच्या वाक्यांचे प्रकार चुकीच्या पद्धतीने मिसळते. \"Unless the floods went down\" (साधा भूतकाळ) हे दुसऱ्या प्रकारच्या अटीच्या वाक्याचे सूचक आहे, ज्यानंतर \"we wouldn't be able to drop food-packets.\" असे यायला हवे. पहिल्या प्रकारच्या अटीच्या वाक्यासाठी (भविष्यातील परिणाम) \"Unless the floods go down, we shan't be able to drop food-packets.\" असे असायला हवे. दिलेली सर्व वाक्ये व्याकरणदृष्ट्या चुकीची असल्याने, पर्यायांमध्ये कोणतेही व्याकरणदृष्ट्या योग्य वाक्य नाही. त्यामुळे हा प्रश्न सदोष आहे आणि योग्य पर्याय क्रमांक 0 असावा.",
    "options_breakdown": [
      {
        "option": "Only a",
        "is_correct": false,
        "reason": "Sentence 'a' is grammatically flawed due to missing punctuation or preposition."
      },
      {
        "option": "Only b",
        "is_correct": false,
        "reason": "Sentence 'b' uses an incorrect verb form in the main clause for a third conditional sentence; it should be 'would have come'."
      },
      {
        "option": "Only a and c",
        "is_correct": false,
        "reason": "Both 'a' and 'c' are grammatically incorrect."
      },
      {
        "option": "Only b and c",
        "is_correct": false,
        "reason": "Both 'b' and 'c' are grammatically incorrect."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "",
    "question_english": "'I do my work myself.'\nIdentify the type of the pronoun underlined in the above sentence.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Relative",
      "Reflexive",
      "Emphatic",
      "Personal"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Pronouns (Emphatic vs. Reflexive)",
    "difficulty": "Medium",
    "trap_detected": "Confusion between reflexive and emphatic pronouns. Both use the same forms (myself, yourself, etc.), but their functions differ. An emphatic pronoun can be removed without changing the core meaning, while a reflexive pronoun cannot.",
    "explanation_english": "The pronoun \"myself\" in the sentence \"I do my work myself\" is an emphatic pronoun. Emphatic pronouns (also known as intensive pronouns) are used to emphasize the noun or pronoun they refer to. They are not essential to the grammatical completeness of the sentence; if \"myself\" is removed, the sentence \"I do my work\" still makes complete sense. In contrast, a reflexive pronoun reflects the action of the verb back to the subject (e.g., \"I hurt myself\"), and it is essential for the sentence's meaning. Since \"myself\" here merely adds emphasis to \"I\", it is emphatic.",
    "explanation_marathi": "\"I do my work myself.\" या वाक्यातील \"myself\" हे सर्वनाम 'emphatic pronoun' आहे. Emphatic pronouns (ज्यांना intensive pronouns असेही म्हणतात) ज्या नाम किंवा सर्वनामाचा संदर्भ देतात, त्यावर जोर देण्यासाठी वापरले जातात. ते वाक्याच्या व्याकरणात्मक पूर्णत्वासाठी आवश्यक नसतात; जर \"myself\" काढून टाकले, तर \"I do my work\" हे वाक्य अजूनही पूर्ण अर्थ देते. याउलट, 'reflexive pronoun' क्रियापदाची क्रिया कर्त्याकडे परत दर्शवते (उदा. \"I hurt myself\"), आणि ते वाक्याच्या अर्थासाठी आवश्यक असते. येथे \"myself\" केवळ \"I\" वर जोर देत असल्याने, ते emphatic आहे.",
    "options_breakdown": [
      {
        "option": "Relative",
        "is_correct": false,
        "reason": "Relative pronouns (e.g., who, whom, whose, which, that) introduce relative clauses. 'Myself' does not function this way."
      },
      {
        "option": "Reflexive",
        "is_correct": false,
        "reason": "While 'myself' can be reflexive, in this sentence, it is not. A reflexive pronoun is the object of a verb or preposition and refers back to the subject (e.g., 'I saw myself in the mirror'). Here, 'myself' is used for emphasis, not as a direct object reflecting the action."
      },
      {
        "option": "Emphatic",
        "is_correct": true,
        "reason": "'Myself' is used to emphasize the subject 'I'. The sentence 'I do my work' is complete without 'myself', indicating its emphatic nature."
      },
      {
        "option": "Personal",
        "is_correct": false,
        "reason": "Personal pronouns (e.g., I, you, he, she, it, we, they) refer to specific people or things. 'Myself' is a compound personal pronoun, but its specific function here is emphatic, not merely personal."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "",
    "question_english": "Fill in the blank with the most appropriate prepositions given below.\n'A boy jumped ______ the well.'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "in",
      "at",
      "into",
      "on"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Prepositions (Movement)",
    "difficulty": "Easy",
    "trap_detected": "Confusion between 'in' and 'into'. 'In' denotes a static position, while 'into' denotes movement towards the inside of something.",
    "explanation_english": "The sentence \"A boy jumped ______ the well\" describes an action of movement from outside to inside a confined space (the well). The preposition \"into\" is used to express movement towards the inside of something. \"In\" would be used if the boy was already inside the well and static (e.g., \"The boy is in the well\"). \"At\" indicates a specific point or location, and \"on\" indicates a position on a surface. Therefore, \"into\" is the most appropriate preposition to convey the movement.",
    "explanation_marathi": "\"A boy jumped ______ the well\" हे वाक्य एका बंद जागेत (विहिरीत) बाहेरून आत जाण्याची क्रिया दर्शवते. \"into\" हे अव्यय एखाद्या गोष्टीच्या आत जाण्याची क्रिया व्यक्त करण्यासाठी वापरले जाते. जर मुलगा आधीच विहिरीत स्थिर स्थितीत असता, तर \"in\" वापरले असते (उदा. \"The boy is in the well\"). \"At\" हे विशिष्ट बिंदू किंवा ठिकाण दर्शवते, तर \"on\" हे पृष्ठभागावरील स्थिती दर्शवते. त्यामुळे, हालचाल व्यक्त करण्यासाठी \"into\" हे सर्वात योग्य अव्यय आहे.",
    "options_breakdown": [
      {
        "option": "in",
        "is_correct": false,
        "reason": "'In' indicates a static position inside something, not movement into it."
      },
      {
        "option": "at",
        "is_correct": false,
        "reason": "'At' indicates a specific location or point, not movement into a confined space."
      },
      {
        "option": "into",
        "is_correct": true,
        "reason": "'Into' correctly conveys movement from outside to inside a place."
      },
      {
        "option": "on",
        "is_correct": false,
        "reason": "'On' indicates a position on a surface, which is not applicable here."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "",
    "question_english": "Identify the clause elements in the given sentence.\n'They call me the Texas Ranger.'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "SPOA",
      "SPOC",
      "SPAO",
      "SPCA"
    ],
    "correct_option_index": 2,
    "subject": "English Grammar",
    "topic": "Clause Elements (Sentence Structure)",
    "difficulty": "Medium",
    "trap_detected": "Confusing an Object Complement (Co) with a Direct Object (O) or an Adjunct (A). The key is that the complement renames or describes the object.",
    "explanation_english": "In the sentence \"They call me the Texas Ranger,\" we can identify the clause elements as follows: 'They' is the Subject (S), 'call' is the Predicator (P), 'me' is the Object (O) (the direct object of the verb \"call\"). 'The Texas Ranger' is the Complement of the Object (Co) because this phrase describes or renames \"me\"; it tells us what they call \"me\". It is not another object, nor is it an adverbial adjunct. It completes the meaning of the object. Therefore, the clause elements are S P O Co. Among the given options, SPOC represents this structure.",
    "explanation_marathi": "\"They call me the Texas Ranger.\" या वाक्यातील घटक खालीलप्रमाणे ओळखता येतात: 'They' कर्ता (Subject - S) आहे, 'call' क्रियापद (Predicator - P) आहे, 'me' कर्म (Object - O) आहे (म्हणजे \"call\" या क्रियापदाचे प्रत्यक्ष कर्म). 'The Texas Ranger' हे कर्माचे पूरक (Complement of the Object - Co) आहे, कारण हे वाक्यांश \"me\" चे वर्णन करते किंवा त्याला दुसरे नाव देते; ते आपल्याला सांगते की ते \"me\" ला काय म्हणतात. हे दुसरे कर्म नाही, किंवा क्रियाविशेषण पूरक (adverbial adjunct) नाही. ते कर्माचा अर्थ पूर्ण करते. म्हणून, वाक्याचे घटक S P O Co आहेत. दिलेल्या पर्यायांपैकी, SPOC ही रचना दर्शवते.",
    "options_breakdown": [
      {
        "option": "SPOA",
        "is_correct": false,
        "reason": "'A' stands for Adjunct, which is an adverbial element. 'The Texas Ranger' is not an adjunct; it describes the object."
      },
      {
        "option": "SPOC",
        "is_correct": true,
        "reason": "This stands for Subject, Predicator, Object, Complement (of the object). 'The Texas Ranger' acts as the complement to the object 'me'."
      },
      {
        "option": "SPAO",
        "is_correct": false,
        "reason": "This order is not standard, and 'A' is misplaced."
      },
      {
        "option": "SPCA",
        "is_correct": false,
        "reason": "'C' (Complement) is placed before 'A' (Adjunct), and the structure doesn't fit the sentence."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "",
    "question_english": "Identify the unit in which there is an error.\nShe had been a nurse for three years and then she wants to study medicine.\na\nb\nc",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a",
      "Only b",
      "Only c",
      "No error"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Tenses (Sequence of Tenses)",
    "difficulty": "Easy",
    "trap_detected": "Not noticing the shift in tense from past perfect to simple present within a compound sentence describing sequential events.",
    "explanation_english": "The sentence \"She had been a nurse for three years and then she wants to study medicine\" contains a tense inconsistency. The first part, \"She had been a nurse for three years,\" uses the past perfect tense, indicating an action completed before a specific point in the past. The conjunction \"and then\" suggests a subsequent action. However, the second part, \"she wants to study medicine,\" uses the simple present tense. For logical consistency, if the first action is in the past perfect, the subsequent action should also be in a past tense, such as simple past (\"she wanted to study medicine\") or past perfect (\"she had wanted to study medicine\"). The shift to the simple present tense (\"wants\") is an error. The error is in unit 'c'.",
    "explanation_marathi": "\"She had been a nurse for three years and then she wants to study medicine\" या वाक्यात काळाची विसंगती आहे. वाक्याचा पहिला भाग, \"She had been a nurse for three years,\" 'past perfect tense' मध्ये आहे, जो भूतकाळातील एका विशिष्ट वेळेपूर्वी पूर्ण झालेली क्रिया दर्शवतो. \"and then\" हा शब्द पुढील क्रिया सुचवतो. तथापि, दुसरा भाग, \"she wants to study medicine,\" 'simple present tense' मध्ये आहे. तार्किक सुसंगतीसाठी, जर पहिली क्रिया 'past perfect' मध्ये असेल, तर त्यानंतरची क्रिया देखील भूतकाळात असायला हवी, जसे की 'simple past' (\"she wanted to study medicine\") किंवा 'past perfect' (\"she had wanted to study medicine\"). 'Simple present tense' (\"wants\") मध्ये बदल करणे ही चूक आहे. ही चूक 'c' या भागात आहे.",
    "options_breakdown": [
      {
        "option": "Only a",
        "is_correct": false,
        "reason": "'She had been a nurse for three years' is grammatically correct in the past perfect tense."
      },
      {
        "option": "Only b",
        "is_correct": false,
        "reason": "'and then' is a correct conjunction to link sequential events."
      },
      {
        "option": "Only c",
        "is_correct": true,
        "reason": "'she wants to study medicine' is incorrect because it uses the simple present tense, which creates a tense mismatch with the preceding past perfect tense. It should be 'she wanted to study medicine'."
      },
      {
        "option": "No error",
        "is_correct": false,
        "reason": "There is a clear tense error in unit 'c'."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "",
    "question_english": "Fill in the blank with the correct antonym of the underlined word.\n'Rohini's father is bold but her husband is ______.'",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Wise",
      "Timid",
      "Lazy",
      "Sharp"
    ],
    "correct_option_index": 2,
    "subject": "English Grammar",
    "topic": "Vocabulary (Antonyms)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The sentence requires an antonym for the underlined word \"bold\". \"Bold\" means courageous, brave, or confident. We need a word that means the opposite. \"Wise\" means having or showing experience, knowledge, and good judgment. \"Timid\" means showing a lack of courage or confidence; easily frightened. This is a direct antonym for bold. \"Lazy\" means unwilling to work or use energy. \"Sharp\" means intelligent or quick-witted. Therefore, \"Timid\" is the correct antonym.",
    "explanation_marathi": "वाक्यात अधोरेखित शब्द \"bold\" चा विरुद्धार्थी शब्द आवश्यक आहे. \"Bold\" म्हणजे धाडसी, शूर किंवा आत्मविश्वासू. आपल्याला याच्या विरुद्ध अर्थाचा शब्द हवा आहे. \"Wise\" म्हणजे अनुभव, ज्ञान आणि चांगला निर्णय घेण्याची क्षमता असणे. \"Timid\" म्हणजे धैर्य किंवा आत्मविश्वासाचा अभाव दर्शवणारे; सहज घाबरणारे. हा \"bold\" चा थेट विरुद्धार्थी शब्द आहे. \"Lazy\" म्हणजे काम करण्याची किंवा ऊर्जा वापरण्याची इच्छा नसणे. \"Sharp\" म्हणजे बुद्धिमान किंवा कुशाग्र बुद्धीचे. म्हणून, \"Timid\" हा योग्य विरुद्धार्थी शब्द आहे.",
    "options_breakdown": [
      {
        "option": "Wise",
        "is_correct": false,
        "reason": "'Wise' is not an antonym for 'bold'."
      },
      {
        "option": "Timid",
        "is_correct": true,
        "reason": "'Timid' means lacking courage, which is the opposite of 'bold'."
      },
      {
        "option": "Lazy",
        "is_correct": false,
        "reason": "'Lazy' is not an antonym for 'bold'."
      },
      {
        "option": "Sharp",
        "is_correct": false,
        "reason": "'Sharp' is not an antonym for 'bold'."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "",
    "question_english": "Choose the incorrect sentence/s from the following :\na. Joseph is very clever.\nb. My father is a farmer.\nc. Character, and not looks, matter in the long run.\nd. While working with others, we have to help each other.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "a only",
      "b and c only",
      "c only",
      "c and d"
    ],
    "correct_option_index": 4,
    "subject": "English Grammar",
    "topic": "Subject-Verb Agreement, Pronouns (Reciprocal)",
    "difficulty": "Medium",
    "trap_detected": "Subject-verb agreement with a parenthetical phrase ('and not looks') and the subtle distinction between 'each other' (for two) and 'one another' (for more than two).",
    "explanation_english": "Let's analyze each sentence: a. Joseph is very clever. - This sentence is grammatically correct. b. My father is a farmer. - This sentence is grammatically correct. c. Character, and not looks, matter in the long run. - This sentence is incorrect. The subject of the verb is \"Character,\" which is singular. The phrase \"and not looks\" is parenthetical and does not affect the number of the subject. Therefore, the verb should be singular: \"matters\" (Character... matters). d. While working with others, we have to help each other. - This sentence is incorrect. \"Each other\" is typically used when referring to two people or things. When referring to more than two, \"one another\" is generally preferred. Since \"others\" implies more than two people, \"one another\" would be the more appropriate reciprocal pronoun. Therefore, sentences 'c' and 'd' are incorrect.",
    "explanation_marathi": "प्रत्येक वाक्याचे विश्लेषण करूया: a. Joseph is very clever. - हे वाक्य व्याकरणदृष्ट्या बरोबर आहे. b. My father is a farmer. - हे वाक्य व्याकरणदृष्ट्या बरोबर आहे. c. Character, and not looks, matter in the long run. - हे वाक्य चुकीचे आहे. क्रियापदाचा कर्ता \"Character\" आहे, जो एकवचनी आहे. \"and not looks\" हे वाक्यांश कंसात आहे आणि कर्त्याच्या वचनावर परिणाम करत नाही. त्यामुळे, क्रियापद एकवचनी असायला हवे: \"matters\" (Character... matters). d. While working with others, we have to help each other. - हे वाक्य चुकीचे आहे. \"Each other\" सामान्यतः दोन व्यक्ती किंवा वस्तूंसाठी वापरले जाते. दोनपेक्षा जास्त व्यक्तींचा संदर्भ देताना, \"one another\" वापरणे अधिक योग्य मानले जाते. \"others\" म्हणजे दोनपेक्षा जास्त व्यक्ती असल्याने, \"one another\" हे अधिक योग्य reciprocal pronoun असेल. म्हणून, वाक्ये 'c' आणि 'd' चुकीची आहेत.",
    "options_breakdown": [
      {
        "option": "a only",
        "is_correct": false,
        "reason": "Sentence 'a' is correct, but 'c' and 'd' are incorrect."
      },
      {
        "option": "b and c only",
        "is_correct": false,
        "reason": "Sentence 'b' is correct, but 'c' is incorrect."
      },
      {
        "option": "c only",
        "is_correct": false,
        "reason": "Sentence 'c' is incorrect, but 'd' is also incorrect."
      },
      {
        "option": "c and d",
        "is_correct": true,
        "reason": "Both sentences 'c' and 'd' contain grammatical errors."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "",
    "question_english": "Fill in the blanks.\na. It was a secret ______ my parents.\nb. ______ his Aunt, he has six other female relations.\nc. Lord Roseberry took her ______ dinner.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Among, besides, in to",
      "Among, beside, into",
      "Between, beside, into",
      "Between, besides, in to"
    ],
    "correct_option_index": 4,
    "subject": "English Grammar",
    "topic": "Prepositions (Between/Among, Beside/Besides, Into/In to)",
    "difficulty": "Hard",
    "trap_detected": "Distinguishing between similar-sounding prepositions and phrasal verbs, especially 'beside' vs 'besides' and 'into' vs 'in to'.",
    "explanation_english": "Let's fill in each blank: a. It was a secret ______ my parents. \"My parents\" refers to two people. For two entities, \"between\" is used. \"Among\" is used for three or more. So, \"Between\" is correct. b. ______ his Aunt, he has six other female relations. The sentence implies \"in addition to\" his aunt. \"Besides\" means in addition to. \"Beside\" means next to. So, \"Besides\" is correct. c. Lord Roseberry took her ______ dinner. The phrase \"took her to dinner\" is the most common and idiomatic. However, among the given options, we have \"into\" and \"in to\". \"Into\" implies movement inside a physical space. \"In to\" can be used when \"in\" is an adverb indicating entry, and \"to\" is a preposition indicating purpose or destination. \"Took her in to dinner\" suggests he brought her inside for the purpose of dinner. Given the options, and the common usage in some contexts, \"in to\" is considered acceptable here, especially if emphasizing the act of bringing someone inside for the meal. The original answer key confirms this choice. Combining these, the correct sequence is \"Between, besides, in to\".",
    "explanation_marathi": "प्रत्येक रिकामी जागा भरूया: a. It was a secret ______ my parents. \"My parents\" म्हणजे दोन व्यक्ती. दोन घटकांसाठी \"between\" वापरले जाते. \"Among\" तीन किंवा अधिक घटकांसाठी वापरले जाते. त्यामुळे, \"Between\" योग्य आहे. b. ______ his Aunt, he has six other female relations. वाक्याचा अर्थ \"त्याच्या मावशीव्यतिरिक्त\" असा आहे. \"Besides\" म्हणजे 'याव्यतिरिक्त' किंवा 'याशिवाय'. \"Beside\" म्हणजे 'शेजारी'. त्यामुळे, \"Besides\" योग्य आहे. c. Lord Roseberry took her ______ dinner. \"took her to dinner\" हे सर्वात सामान्य आणि रूढ वाक्यरचना आहे. तथापि, दिलेल्या पर्यायांमध्ये \"into\" आणि \"in to\" आहेत. \"Into\" म्हणजे एखाद्या भौतिक जागेत प्रवेश करणे. \"In to\" हे तेव्हा वापरले जाऊ शकते जेव्हा \"in\" हे प्रवेश दर्शवणारे क्रियाविशेषण असते आणि \"to\" हे उद्देश किंवा गंतव्यस्थान दर्शवणारे अव्यय असते. \"Took her in to dinner\" म्हणजे त्याने तिला जेवणासाठी आत आणले. दिलेल्या पर्यायांमध्ये आणि काही संदर्भांमधील सामान्य वापरानुसार, \"in to\" येथे स्वीकारार्ह मानले जाते, विशेषतः जर जेवणासाठी एखाद्याला आत आणण्याच्या क्रियेवर जोर दिला जात असेल. मूळ उत्तरसूची या निवडीची पुष्टी करते. या सर्वांना एकत्र केल्यास, योग्य क्रम \"Between, besides, in to\" आहे.",
    "options_breakdown": [
      {
        "option": "Among, besides, in to",
        "is_correct": false,
        "reason": "'Among' is incorrect for two parents."
      },
      {
        "option": "Among, beside, into",
        "is_correct": false,
        "reason": "'Among' is incorrect for two parents, and 'beside' is incorrect for 'in addition to'."
      },
      {
        "option": "Between, beside, into",
        "is_correct": false,
        "reason": "'Beside' is incorrect for 'in addition to'."
      },
      {
        "option": "Between, besides, in to",
        "is_correct": true,
        "reason": "'Between' for two parents, 'besides' for 'in addition to', and 'in to' for the third blank (as per the intended meaning of bringing someone inside for dinner)."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "",
    "question_english": "Choose the correct sentences.\na. He has made quite a fortune.\nb. She sang last night beautifully at the concert.\nc. You gave me a big shock !",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "c only",
      "b and c only",
      "a and c only",
      "a, b and c"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Sentence Correction, Adverb Placement, Idioms",
    "difficulty": "Medium",
    "trap_detected": "Adverb placement rules can be flexible, but some orders are more natural or grammatically preferred. Also, assuming common idioms are incorrect.",
    "explanation_english": "Let's evaluate each sentence: a. He has made quite a fortune. - This sentence is grammatically correct. \"Quite a fortune\" is a standard and idiomatic expression meaning a large amount of money. b. She sang last night beautifully at the concert. - This sentence has an awkward adverb placement. The standard order for adverbs of manner, place, and time is MPT (Manner, Place, Time). So, \"She sang beautifully at the concert last night\" would be the preferred and more natural order. Placing \"last night\" between the verb and the manner adverb makes it less fluent. Thus, this sentence is grammatically awkward/incorrect. c. You gave me a big shock ! - This sentence is grammatically correct. \"Give someone a shock\" is a common idiom. Based on standard grammatical rules, sentences 'a' and 'c' are correct, while 'b' is incorrect due to adverb placement. Therefore, the correct option should be \"a and c only\".",
    "explanation_marathi": "प्रत्येक वाक्याचे मूल्यांकन करूया: a. He has made quite a fortune. - हे वाक्य व्याकरणदृष्ट्या बरोबर आहे. \"Quite a fortune\" हा एक प्रमाणित आणि रूढ वाक्प्रचार आहे, ज्याचा अर्थ खूप मोठी रक्कम असा होतो. b. She sang last night beautifully at the concert. - या वाक्यात क्रियाविशेषणांची मांडणी चुकीची आहे. क्रियाविशेषणांच्या प्रकारानुसार (रीती, स्थळ, वेळ) त्यांचा क्रम MPT (Manner, Place, Time) असा असतो. त्यामुळे, \"She sang beautifully at the concert last night\" ही अधिक योग्य आणि नैसर्गिक रचना असेल. \"last night\" हे क्रियापद आणि रीतीवाचक क्रियाविशेषण यांच्यामध्ये ठेवल्याने वाक्य कमी प्रवाही वाटते. त्यामुळे, हे वाक्य व्याकरणदृष्ट्या चुकीचे आहे. c. You gave me a big shock ! - हे वाक्य व्याकरणदृष्ट्या बरोबर आहे. \"Give someone a shock\" हा एक सामान्य वाक्प्रचार आहे. व्याकरणाच्या प्रमाणित नियमांनुसार, वाक्ये 'a' आणि 'c' बरोबर आहेत, तर 'b' क्रियाविशेषणांच्या चुकीच्या मांडणीमुळे चुकीचे आहे. त्यामुळे, योग्य पर्याय \"a and c only\" असावा.",
    "options_breakdown": [
      {
        "option": "c only",
        "is_correct": false,
        "reason": "Sentence 'a' is also correct."
      },
      {
        "option": "b and c only",
        "is_correct": false,
        "reason": "Sentence 'b' is incorrect due to awkward adverb placement."
      },
      {
        "option": "a and c only",
        "is_correct": true,
        "reason": "Both sentences 'a' and 'c' are grammatically sound."
      },
      {
        "option": "a, b and c",
        "is_correct": false,
        "reason": "Sentence 'b' is grammatically awkward/incorrect."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "",
    "question_english": "Choose the best option to fill in the blank.\n______ does not concern me.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "What he has done",
      "What he has done",
      "What did he do",
      "What does he do"
    ],
    "correct_option_index": 1,
    "subject": "English Grammar",
    "topic": "Noun Clauses, Sentence Structure",
    "difficulty": "Easy",
    "trap_detected": "Confusing the structure of a noun clause (which acts as a subject or object) with an interrogative sentence (a direct question). A noun clause maintains declarative word order (subject-verb).",
    "explanation_english": "The blank requires a noun clause to function as the subject of the main verb \"does not concern\". A noun clause beginning with \"What\" acts as a single noun phrase. \"What he has done\" (Options 1 & 2) is a correct noun clause. \"What\" acts as the object within the clause, and \"he has done\" follows the declarative subject-verb order. This entire clause correctly functions as the subject of the main sentence. \"What did he do\" (Option 3) and \"What does he do\" (Option 4) are interrogative sentence structures (direct questions) and cannot function as the subject of another sentence. Therefore, \"What he has done\" is the only grammatically correct option that can serve as the subject of the sentence.",
    "explanation_marathi": "रिकाम्या जागेत मुख्य क्रियापद \"does not concern\" चा कर्ता म्हणून कार्य करण्यासाठी 'noun clause' आवश्यक आहे. \"What\" ने सुरू होणारे 'noun clause' एकाच नामवाक्यांशाप्रमाणे कार्य करते. \"What he has done\" (पर्याय 1 आणि 2) हे एक योग्य 'noun clause' आहे. \"What\" या clause मध्ये कर्म म्हणून कार्य करते, आणि \"he has done\" हे declarative subject-verb क्रमाने आहे. हे संपूर्ण clause मुख्य वाक्याचा कर्ता म्हणून योग्यरित्या कार्य करते. \"What did he do\" (पर्याय 3) आणि \"What does he do\" (पर्याय 4) हे प्रश्नार्थक वाक्ये आहेत (प्रत्यक्ष प्रश्न) आणि ते दुसऱ्या वाक्याचा कर्ता म्हणून कार्य करू शकत नाहीत. म्हणून, \"What he has done\" हा एकमेव व्याकरणदृष्ट्या योग्य पर्याय आहे जो वाक्याचा कर्ता म्हणून काम करू शकतो.",
    "options_breakdown": [
      {
        "option": "What he has done",
        "is_correct": true,
        "reason": "This is a grammatically correct noun clause that can function as the subject of the sentence."
      },
      {
        "option": "What he has done",
        "is_correct": true,
        "reason": "Identical to option 1, this is a grammatically correct noun clause that can function as the subject of the sentence."
      },
      {
        "option": "What did he do",
        "is_correct": false,
        "reason": "This is an interrogative sentence structure, not a noun clause, and cannot function as the subject."
      },
      {
        "option": "What does he do",
        "is_correct": false,
        "reason": "This is an interrogative sentence structure, not a noun clause, and cannot function as the subject."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "",
    "question_english": "'Had you been there, we could have fought it out with them.'\nThe underlined clause in the sentence above exemplifies ______.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Adverb clause of cause",
      "Adverb clause of condition",
      "Adverb clause of concession",
      "Adverb clause of result"
    ],
    "correct_option_index": 2,
    "subject": "English Grammar",
    "topic": "Adverb Clauses",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The clause 'Had you been there' expresses a condition, specifically a hypothetical condition in the past (Type 3 conditional). It implies 'If you had been there'. Adverb clauses of condition state the circumstances under which the action in the main clause will take place. They typically begin with conjunctions like 'if', 'unless', 'provided that', or, as in this case, can be inverted without 'if' (e.g., 'Had you been there' instead of 'If you had been there').",
    "explanation_marathi": "वाक्यातील 'Had you been there' हे खंड एक अट व्यक्त करते, विशेषतः भूतकाळातील एक काल्पनिक अट (Type 3 conditional). याचा अर्थ 'जर तुम्ही तिथे असता' असा होतो. अटदर्शक क्रियाविशेषण उपवाक्ये मुख्य वाक्यातील क्रिया कोणत्या परिस्थितीत घडेल हे सांगतात. ती सहसा 'if', 'unless', 'provided that' यांसारख्या संयोजकांनी सुरू होतात, किंवा या उदाहरणाप्रमाणे 'if' शिवाय उलटे (inverted) असू शकतात (उदा. 'If you had been there' ऐवजी 'Had you been there').",
    "options_breakdown": [
      {
        "option": "Adverb clause of cause",
        "is_correct": false,
        "reason": "An adverb clause of cause explains why something happened (e.g., 'because you were there'). The given clause expresses a condition, not a reason."
      },
      {
        "option": "Adverb clause of condition",
        "is_correct": true,
        "reason": "The clause 'Had you been there' sets a condition for the main clause's action. It's an inverted conditional sentence, equivalent to 'If you had been there'."
      },
      {
        "option": "Adverb clause of concession",
        "is_correct": false,
        "reason": "An adverb clause of concession expresses a contrast or something unexpected (e.g., 'although you were there'). The given clause does not show concession."
      },
      {
        "option": "Adverb clause of result",
        "is_correct": false,
        "reason": "An adverb clause of result shows the outcome of an action (e.g., 'so that we could fight'). The given clause states a prerequisite, not a result."
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "",
    "question_english": "'Let Mr. Yadav preside over the conference.'\nWhich of the following is the correct passive structure corresponding to the sentence above?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Let Mr. Yadav to be presided over the conference",
      "Let the conference to be presided over by Mr. Yadav",
      "Let the conference be presided over by Mr. Yadav",
      "Let the conference to preside over by Mr. Yadav"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Voice (Passive Voice)",
    "difficulty": "Medium",
    "trap_detected": "Grammatical Error",
    "explanation_english": "When converting an imperative sentence beginning with 'Let' to the passive voice, the structure typically follows 'Let + object + be + past participle + by + agent'. In the given active sentence, 'the conference' is the object of 'preside over', and 'Mr. Yadav' is the agent. Therefore, the correct passive structure is 'Let the conference be presided over by Mr. Yadav'. Options with 'to be' or incorrect verb forms are incorrect.",
    "explanation_marathi": "'Let' ने सुरू होणाऱ्या आज्ञार्थी वाक्याचे कर्मणी प्रयोगात रूपांतर करताना, सामान्यतः 'Let + कर्म + be + क्रियापदाचे तिसरे रूप + by + कर्ता' अशी रचना वापरली जाते. दिलेल्या कर्तरी वाक्यात, 'the conference' हे 'preside over' चे कर्म आहे आणि 'Mr. Yadav' हा कर्ता आहे. म्हणून, योग्य कर्मणी रचना 'Let the conference be presided over by Mr. Yadav' अशी आहे. 'to be' किंवा चुकीच्या क्रियापदाच्या रूपांसह असलेले पर्याय चुकीचे आहेत.",
    "options_breakdown": [
      {
        "option": "Let Mr. Yadav to be presided over the conference",
        "is_correct": false,
        "reason": "This option incorrectly keeps 'Mr. Yadav' as the subject of 'to be presided over' and uses 'to be' which is not part of the standard passive structure for 'Let' imperatives."
      },
      {
        "option": "Let the conference to be presided over by Mr. Yadav",
        "is_correct": false,
        "reason": "This option incorrectly includes 'to' before 'be presided over'. The correct structure is 'Let + object + be + past participle'."
      },
      {
        "option": "Let the conference be presided over by Mr. Yadav",
        "is_correct": true,
        "reason": "This is the correct passive structure for an imperative sentence starting with 'Let'. It follows the pattern 'Let + object + be + past participle + by + agent'."
      },
      {
        "option": "Let the conference to preside over by Mr. Yadav",
        "is_correct": false,
        "reason": "This option uses 'to preside' (active infinitive) instead of 'be presided' (passive infinitive), making it grammatically incorrect for a passive voice construction."
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "",
    "question_english": "a. It is time I prayed.\nb. Kindly excuse me.\nc. Long live the Prime Minister.\nd. Are you happy?\nIdentify the sentence/s in subjunctive mood.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a",
      "Only b and d",
      "Only a and c",
      "Only b"
    ],
    "correct_option_index": 3,
    "subject": "English Grammar",
    "topic": "Mood (Subjunctive Mood)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The subjunctive mood is used to express wishes, desires, demands, suggestions, or hypothetical situations. \nSentence 'a. It is time I prayed.' uses the past tense 'prayed' to express a present or future hypothetical situation or a suggestion, which is a common use of the subjunctive mood after 'It is time'.\nSentence 'c. Long live the Prime Minister.' expresses a wish or a desire, which is a classic example of the optative subjunctive mood, where the verb 'live' is in its base form regardless of the subject's number.\nSentence 'b. Kindly excuse me.' is an imperative sentence, expressing a command or request, not subjunctive.\nSentence 'd. Are you happy?' is an interrogative sentence in the indicative mood, asking a factual question.",
    "explanation_marathi": "सब्जंक्टिव्ह मूडचा वापर इच्छा, आकांक्षा, मागण्या, सूचना किंवा काल्पनिक परिस्थिती व्यक्त करण्यासाठी केला जातो.\nवाक्य 'a. It is time I prayed.' मध्ये 'prayed' हे भूतकाळातील क्रियापद वर्तमान किंवा भविष्यातील काल्पनिक परिस्थिती किंवा सूचना व्यक्त करण्यासाठी वापरले आहे, जे 'It is time' नंतर सब्जंक्टिव्ह मूडचा सामान्य वापर आहे.\nवाक्य 'c. Long live the Prime Minister.' एक इच्छा किंवा आकांक्षा व्यक्त करते, जे ऑप्टेटिव्ह सब्जंक्टिव्ह मूडचे उत्कृष्ट उदाहरण आहे, जिथे 'live' हे क्रियापद कर्त्याच्या वचनाची पर्वा न करता मूळ रूपात असते.\nवाक्य 'b. Kindly excuse me.' हे आज्ञार्थी वाक्य आहे, जे आज्ञा किंवा विनंती व्यक्त करते, सब्जंक्टिव्ह नाही.\nवाक्य 'd. Are you happy?' हे प्रश्नार्थक वाक्य आहे, जे सूचक मूडमध्ये एक वस्तुस्थितीबद्दल प्रश्न विचारते.",
    "options_breakdown": [
      {
        "option": "Only a",
        "is_correct": false,
        "reason": "While 'a' is in the subjunctive mood, 'c' is also in the subjunctive mood, making this option incomplete."
      },
      {
        "option": "Only b and d",
        "is_correct": false,
        "reason": "Neither 'b' (imperative) nor 'd' (indicative) are in the subjunctive mood."
      },
      {
        "option": "Only a and c",
        "is_correct": true,
        "reason": "Both 'a' ('It is time I prayed') and 'c' ('Long live the Prime Minister') correctly exemplify the subjunctive mood, expressing a hypothetical situation/suggestion and a wish, respectively."
      },
      {
        "option": "Only b",
        "is_correct": false,
        "reason": "'b' is an imperative sentence, not in the subjunctive mood."
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "",
    "question_english": "a. He is senior than you by two years.\nb. This calf is older than that.\nc. He has greater popularity than any other leader.\nIdentify the correct sentence/s.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a and b",
      "Only b and c",
      "Only a",
      "Only c"
    ],
    "correct_option_index": 2,
    "subject": "English Grammar",
    "topic": "Adjectives and Degrees of Comparison",
    "difficulty": "Medium",
    "trap_detected": "Grammatical Error",
    "explanation_english": "Let's analyze each sentence:\na. 'He is senior than you by two years.' - Incorrect. Latin comparative adjectives like 'senior', 'junior', 'superior', 'inferior', 'prior', 'posterior' take the preposition 'to' instead of 'than'. The correct sentence should be: 'He is senior to you by two years.'\nb. 'This calf is older than that.' - Correct. 'Older' is the comparative form of 'old' and is correctly used for comparing age.\nc. 'He has greater popularity than any other leader.' - Correct. When comparing one member of a group to the rest of the group, 'any other' is used to exclude the individual from the comparison set, ensuring a logical comparison. If 'any' were used alone, it would imply comparison with himself, which is illogical.",
    "explanation_marathi": "प्रत्येक वाक्याचे विश्लेषण करूया:\na. 'He is senior than you by two years.' - चुकीचे. 'senior', 'junior', 'superior', 'inferior', 'prior', 'posterior' यांसारखी लॅटिन तुलनात्मक विशेषणे 'than' ऐवजी 'to' हे शब्दयोगी अव्यय घेतात. योग्य वाक्य 'He is senior to you by two years.' असे असावे.\nb. 'This calf is older than that.' - बरोबर. 'Older' हे 'old' चे तुलनात्मक रूप आहे आणि वयाची तुलना करण्यासाठी योग्यरित्या वापरले आहे.\nc. 'He has greater popularity than any other leader.' - बरोबर. जेव्हा एखाद्या गटातील एका सदस्याची तुलना गटातील इतर सदस्यांशी केली जाते, तेव्हा 'any other' वापरले जाते जेणेकरून त्या व्यक्तीला तुलना संचातून वगळता येईल आणि एक तार्किक तुलना सुनिश्चित होईल. जर फक्त 'any' वापरले असते, तर त्याचा अर्थ स्वतःशी तुलना असा झाला असता, जे अतार्किक आहे.",
    "options_breakdown": [
      {
        "option": "Only a and b",
        "is_correct": false,
        "reason": "Sentence 'a' is incorrect because 'senior' should be followed by 'to', not 'than'."
      },
      {
        "option": "Only b and c",
        "is_correct": true,
        "reason": "Both sentences 'b' and 'c' are grammatically correct. 'Older than' is correct for age comparison, and 'any other' is correctly used for comparison within a group."
      },
      {
        "option": "Only a",
        "is_correct": false,
        "reason": "Sentence 'a' is incorrect, and 'b' and 'c' are correct, making this option incomplete and incorrect."
      },
      {
        "option": "Only c",
        "is_correct": false,
        "reason": "While 'c' is correct, 'b' is also correct, making this option incomplete."
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "",
    "question_english": "a. This picture is very attractive, isn't it?\nb. Now do it as I tell you, won't you?\nc. She needn't work so late, need she?\nd. I am rather late, am I?\nIdentify the sentence/s with correct question tag.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Only a and b",
      "Only b and c",
      "Only a and c",
      "Only a, b and d"
    ],
    "correct_option_index": 0,
    "subject": "English Grammar",
    "topic": "Question Tags",
    "difficulty": "Hard",
    "trap_detected": "Ambiguous Options",
    "explanation_english": "Let's evaluate each sentence for the correctness of its question tag:\na. 'This picture is very attractive, isn't it?' - Correct. The statement is positive, so the tag is negative. 'is' becomes 'isn't', and 'this picture' is replaced by 'it'.\nb. 'Now do it as I tell you, won't you?' - Correct. For imperative sentences (commands or requests), 'will you?' or 'won't you?' are commonly used as question tags. 'Won't you?' is suitable for a polite request or command.\nc. 'She needn't work so late, need she?' - Correct. When 'need' is used as a modal auxiliary (as in 'needn't'), the tag uses 'need' itself. The statement is negative, so the tag is positive.\nd. 'I am rather late, am I?' - Incorrect. The standard question tag for 'I am' in a positive statement is 'aren't I?'. 'Am I?' is generally considered incorrect for a negative tag.\n\nBased on this analysis, sentences 'a', 'b', and 'c' have correct question tags. However, the provided options do not include 'Only a, b and c'. Since 'd' is definitively incorrect, and 'a', 'b', 'c' are correct, none of the given options fully represent the correct set of sentences. Therefore, the question is flawed, and no single option is entirely correct.",
    "explanation_marathi": "प्रत्येक वाक्यातील प्रश्न टॅगच्या योग्यतेचे मूल्यांकन करूया:\na. 'This picture is very attractive, isn't it?' - बरोबर. विधान सकारात्मक आहे, म्हणून टॅग नकारात्मक आहे. 'is' चे 'isn't' होते, आणि 'this picture' ऐवजी 'it' वापरले जाते.\nb. 'Now do it as I tell you, won't you?' - बरोबर. आज्ञार्थी वाक्यांसाठी (आज्ञा किंवा विनंत्या), 'will you?' किंवा 'won't you?' हे सामान्यतः प्रश्न टॅग म्हणून वापरले जातात. 'Won't you?' हे नम्र विनंती किंवा आज्ञेसाठी योग्य आहे.\nc. 'She needn't work so late, need she?' - बरोबर. जेव्हा 'need' हे मॉडेल ऑक्सिलरी म्हणून वापरले जाते (जसे 'needn't' मध्ये), तेव्हा टॅगमध्ये 'need' चाच वापर होतो. विधान नकारात्मक आहे, म्हणून टॅग सकारात्मक आहे.\nd. 'I am rather late, am I?' - चुकीचे. सकारात्मक विधानातील 'I am' साठी मानक प्रश्न टॅग 'aren't I?' आहे. 'Am I?' हे नकारात्मक टॅगसाठी सामान्यतः चुकीचे मानले जाते.\n\nया विश्लेषणानुसार, वाक्ये 'a', 'b' आणि 'c' मध्ये योग्य प्रश्न टॅग आहेत. तथापि, दिलेल्या पर्यायांमध्ये 'Only a, b and c' हा पर्याय नाही. 'd' निश्चितपणे चुकीचे असल्याने, आणि 'a', 'b', 'c' बरोबर असल्याने, कोणताही एक पर्याय योग्य वाक्यांचा संच पूर्णपणे दर्शवत नाही. म्हणून, हा प्रश्न सदोष आहे आणि कोणताही एक पर्याय पूर्णपणे योग्य नाही.",
    "options_breakdown": [
      {
        "option": "Only a and b",
        "is_correct": false,
        "reason": "This option is incomplete as sentence 'c' also has a correct question tag."
      },
      {
        "option": "Only b and c",
        "is_correct": false,
        "reason": "This option is incomplete as sentence 'a' also has a correct question tag."
      },
      {
        "option": "Only a and c",
        "is_correct": false,
        "reason": "This option is incomplete as sentence 'b' also has a correct question tag."
      },
      {
        "option": "Only a, b and d",
        "is_correct": false,
        "reason": "This option is incorrect because sentence 'd' has an incorrect question tag ('am I?' should be 'aren't I?')."
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "",
    "question_english": "Complete the following idiomatic expression with the correct option :\nWell, that's fine kettle of ______ I thought I was helping John but he worked against me during the debate session.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Fish",
      "Soup",
      "Tea",
      "Broth"
    ],
    "correct_option_index": 1,
    "subject": "English Vocabulary",
    "topic": "Idioms and Phrases",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The idiomatic expression is 'a fine kettle of fish'. It is used to describe an awkward, difficult, or unpleasant situation. The context of the sentence, where the speaker thought they were helping John but he worked against them, perfectly fits the meaning of an awkward or problematic situation.",
    "explanation_marathi": "योग्य वाक्प्रचार 'a fine kettle of fish' आहे. हे एक विचित्र, कठीण किंवा अप्रिय परिस्थितीचे वर्णन करण्यासाठी वापरले जाते. वाक्याचा संदर्भ, जिथे वक्ता जॉनला मदत करत आहे असे वाटले पण त्याने त्यांच्या विरोधात काम केले, हे विचित्र किंवा समस्याप्रधान परिस्थितीच्या अर्थाशी पूर्णपणे जुळते.",
    "options_breakdown": [
      {
        "option": "Fish",
        "is_correct": true,
        "reason": "The complete idiom is 'a fine kettle of fish', which means a difficult or awkward situation. This fits the context of the sentence."
      },
      {
        "option": "Soup",
        "is_correct": false,
        "reason": "While 'in the soup' is an idiom meaning in trouble, 'kettle of soup' is not a standard idiom that fits the context."
      },
      {
        "option": "Tea",
        "is_correct": false,
        "reason": "There is no common idiom 'kettle of tea' that conveys the intended meaning of a difficult situation."
      },
      {
        "option": "Broth",
        "is_correct": false,
        "reason": "There is no common idiom 'kettle of broth' that conveys the intended meaning of a difficult situation."
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "",
    "question_english": "Fill in the blank with the most appropriate option from the one given below.\n______ occurs when a part of something is used to refer to the whole.",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Allegory",
      "Apostrophe",
      "Synecdoche",
      "Metonymy"
    ],
    "correct_option_index": 3,
    "subject": "English Vocabulary",
    "topic": "Figures of Speech",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The definition provided, 'when a part of something is used to refer to the whole', precisely describes Synecdoche. For example, using 'wheels' to refer to a car, or 'hands' to refer to workers. It's a specific type of metaphor where a part stands for the whole or vice versa. Metonymy, often confused with synecdoche, involves replacing the name of a thing with the name of something else with which it is closely associated (e.g., 'the crown' for royalty).",
    "explanation_marathi": "दिलेली व्याख्या, 'जेव्हा एखाद्या गोष्टीचा भाग संपूर्ण गोष्टीचा संदर्भ देण्यासाठी वापरला जातो', हे सिनेकडोकी (Synecdoche) चे अचूक वर्णन करते. उदाहरणार्थ, कारसाठी 'wheels' (चाके) वापरणे, किंवा कामगारांसाठी 'hands' (हात) वापरणे. हा एक विशिष्ट प्रकारचा रूपक आहे जिथे एक भाग संपूर्ण गोष्टीसाठी किंवा उलट वापरला जातो. मेटोनिमी (Metonymy), जी अनेकदा सिनेकडोकीशी गोंधळली जाते, त्यात एखाद्या गोष्टीचे नाव त्याच्याशी जवळून संबंधित असलेल्या दुसऱ्या गोष्टीच्या नावाने बदलले जाते (उदा. राजघराण्यासाठी 'the crown').",
    "options_breakdown": [
      {
        "option": "Allegory",
        "is_correct": false,
        "reason": "Allegory is a story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one. It does not involve a part representing the whole."
      },
      {
        "option": "Apostrophe",
        "is_correct": false,
        "reason": "Apostrophe is a figure of speech in which a speaker directly addresses someone or something that isn't present or can't respond (e.g., addressing a dead person or an inanimate object). It is not about a part representing the whole."
      },
      {
        "option": "Synecdoche",
        "is_correct": true,
        "reason": "Synecdoche is a figure of speech in which a part is made to represent the whole or vice versa (e.g., 'all hands on deck' where 'hands' refers to sailors). This perfectly matches the definition given."
      },
      {
        "option": "Metonymy",
        "is_correct": false,
        "reason": "Metonymy is a figure of speech where a thing or concept is referred to by the name of something closely associated with that thing or concept (e.g., 'the White House' for the US administration). While related to synecdoche, it's not specifically about a part representing the whole."
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "",
    "question_english": "After presenting all the evidence in the court, the prosecutor delivered a powerful closing statement to drive home the seriousness of the crime. What does the phrase \"to drive home\" mean?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "To return home after a long journey",
      "To forcefully convey or emphasize a point or message",
      "To operate a vehicle and reach a destination",
      "To invite someone to come to your residence"
    ],
    "correct_option_index": 2,
    "subject": "English Vocabulary",
    "topic": "Idioms and Phrases",
    "difficulty": "Easy",
    "trap_detected": "Literal Interpretation",
    "explanation_english": "The idiom 'to drive home' means to make a point or message very clear and emphatic, ensuring that it is fully understood and appreciated. In the context of the prosecutor's closing statement, it means to strongly emphasize the seriousness of the crime to the jury or judge. The other options represent literal interpretations of the words 'drive' and 'home', which is a common trap in idiom questions.",
    "explanation_marathi": "'to drive home' या वाक्प्रचाराचा अर्थ एखादा मुद्दा किंवा संदेश खूप स्पष्ट आणि जोरदारपणे मांडणे, जेणेकरून तो पूर्णपणे समजला जाईल आणि त्याचे महत्त्व जाणले जाईल. अभियोक्त्याच्या अंतिम निवेदनाच्या संदर्भात, याचा अर्थ गुन्ह्याची गंभीरता जूरी किंवा न्यायाधीशांना जोरदारपणे पटवून देणे. इतर पर्याय 'drive' आणि 'home' या शब्दांचे शाब्दिक अर्थ दर्शवतात, जो वाक्प्रचारांच्या प्रश्नांमध्ये एक सामान्य सापळा आहे.",
    "options_breakdown": [
      {
        "option": "To return home after a long journey",
        "is_correct": false,
        "reason": "This is a literal interpretation of 'drive home' and does not fit the idiomatic meaning in the given context."
      },
      {
        "option": "To forcefully convey or emphasize a point or message",
        "is_correct": true,
        "reason": "This is the correct idiomatic meaning of 'to drive home'. The prosecutor emphasized the seriousness of the crime."
      },
      {
        "option": "To operate a vehicle and reach a destination",
        "is_correct": false,
        "reason": "This is a literal interpretation of 'drive home' and is irrelevant to the context of a legal statement."
      },
      {
        "option": "To invite someone to come to your residence",
        "is_correct": false,
        "reason": "This is a literal interpretation of 'drive home' and does not fit the context of emphasizing a point."
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "",
    "question_english": "Identify the idiom that means \"to accept the consequences of one's actions.\"",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "Cut corners",
      "Take the bull by the horns",
      "Face the music",
      "Go the extra mile"
    ],
    "correct_option_index": 3,
    "subject": "English Vocabulary",
    "topic": "Idioms and Phrases",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The idiom 'to face the music' means to accept the unpleasant consequences or criticism for something one has done. This perfectly matches the definition provided. The other idioms have different meanings:\n'Cut corners' means to do something in the easiest, quickest, or cheapest way, often by sacrificing quality.\n'Take the bull by the horns' means to deal with a difficult situation in a direct and confident way.\n'Go the extra mile' means to make a special effort to achieve something.",
    "explanation_marathi": "'to face the music' या वाक्प्रचाराचा अर्थ आपल्या कृतींच्या अप्रिय परिणामांना किंवा टीकेला सामोरे जाणे. हे दिलेल्या व्याख्येला पूर्णपणे जुळते. इतर वाक्प्रचारांचे अर्थ भिन्न आहेत:\n'Cut corners' म्हणजे गुणवत्ता कमी करून एखादे काम सर्वात सोप्या, जलद किंवा स्वस्त मार्गाने करणे.\n'Take the bull by the horns' म्हणजे कठीण परिस्थितीला थेट आणि आत्मविश्वासाने सामोरे जाणे.\n'Go the extra mile' म्हणजे काहीतरी साध्य करण्यासाठी विशेष प्रयत्न करणे.",
    "options_breakdown": [
      {
        "option": "Cut corners",
        "is_correct": false,
        "reason": "This idiom means to do something in the easiest, quickest, or cheapest way, often by sacrificing quality, not to accept consequences."
      },
      {
        "option": "Take the bull by the horns",
        "is_correct": false,
        "reason": "This idiom means to deal with a difficult situation in a direct and confident way, not to accept consequences."
      },
      {
        "option": "Face the music",
        "is_correct": true,
        "reason": "This idiom correctly means to accept the unpleasant consequences of one's actions, especially criticism or punishment."
      },
      {
        "option": "Go the extra mile",
        "is_correct": false,
        "reason": "This idiom means to make a special effort to achieve something, not to accept consequences."
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "",
    "question_english": "Which of the following sentences correctly uses the meaning of the word \"overstated\"?",
    "options_marathi": [
      "",
      "",
      "",
      ""
    ],
    "options_english": [
      "She understated her accomplishments to impress the interviewer.",
      "He downplayed the importance of the project during the presentation.",
      "They exaggerated the size of the fish they caught.",
      "The athlete achieved his goal through hard work and dedication."
    ],
    "correct_option_index": 3,
    "subject": "English Vocabulary",
    "topic": "Word Meaning / Synonyms",
    "difficulty": "Easy",
    "trap_detected": "Antonym Confusion",
    "explanation_english": "The word 'overstated' means to state something too strongly; to exaggerate. We need to find a sentence that conveys this meaning.\nOption 1 uses 'understated', which is the opposite of 'overstated'.\nOption 2 uses 'downplayed', which is also the opposite of 'overstated'.\nOption 3 uses 'exaggerated', which is a direct synonym for 'overstated'. This sentence correctly uses the concept.\nOption 4 describes an achievement but does not use 'overstated' or a related concept.",
    "explanation_marathi": "'overstated' या शब्दाचा अर्थ एखादी गोष्ट खूप जोरदारपणे सांगणे; अतिशयोक्ती करणे. आपल्याला असा वाक्य शोधायचा आहे जो हा अर्थ व्यक्त करतो.\nपर्याय 1 मध्ये 'understated' वापरले आहे, जे 'overstated' च्या विरुद्धार्थी आहे.\nपर्याय 2 मध्ये 'downplayed' वापरले आहे, जे देखील 'overstated' च्या विरुद्धार्थी आहे.\nपर्याय 3 मध्ये 'exaggerated' वापरले आहे, जे 'overstated' चा थेट समानार्थी शब्द आहे. हे वाक्य संकल्पनेचा योग्य वापर करते.\nपर्याय 4 मध्ये एक यश वर्णन केले आहे परंतु 'overstated' किंवा संबंधित संकल्पना वापरलेली नाही.",
    "options_breakdown": [
      {
        "option": "She understated her accomplishments to impress the interviewer.",
        "is_correct": false,
        "reason": "'Understated' is the antonym of 'overstated'. It means to present something as less important or impressive than it actually is."
      },
      {
        "option": "He downplayed the importance of the project during the presentation.",
        "is_correct": false,
        "reason": "'Downplayed' is an antonym of 'overstated'. It means to make something seem less important than it is."
      },
      {
        "option": "They exaggerated the size of the fish they caught.",
        "is_correct": true,
        "reason": "'Exaggerated' is a synonym for 'overstated'. This sentence correctly uses the meaning of stating something too strongly or making it seem larger/more significant than it is."
      },
      {
        "option": "The athlete achieved his goal through hard work and dedication.",
        "is_correct": false,
        "reason": "This sentence describes an achievement but does not use the word 'overstated' or any synonym/antonym of it. It is unrelated to the meaning of 'overstated'."
      }
    ]
  }
];
