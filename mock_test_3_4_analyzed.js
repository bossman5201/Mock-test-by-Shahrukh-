const mockTestData3_4_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "वैध निष्कर्ष निवडा.\nसत्य विधाने :\nकाही पेन्सिली बंदुका आहेत.\nकाही बंदुका पेने आहेत.\nकाही पेने मारेकरी आहेत.\nनिष्कर्ष :\n(a) काही पेन्सिली पेने आहेत.\n(b) काही बंदुका मारेकरी आहेत.\n(c) काही मारेकरी पेने आहेत.\n(d) काही मारेकरी बंदुका आहेत.",
    "question_english": "Select the valid conclusion/s.\nTrue statements :\nSome pencils are guns.\nSome guns are pens.\nSome pens are killers.\nConclusions :\n(a) Some pencils are pens.\n(b) Some guns are killers.\n(c) Some killers are pens.\n(d) Some killers are guns.",
    "options_marathi": [
      "फक्त (a) आणि (b)",
      "फक्त (b) आणि (c)",
      "फक्त (b)",
      "फक्त (c)"
    ],
    "options_english": [
      "Only (a) and (b)",
      "Only (b) and (c)",
      "Only (b)",
      "Only (c)"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Syllogism",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's analyze the given statements and conclusions using Venn diagrams or basic syllogistic rules.\nStatements:\n1. Some Pencils are Guns (P -> G)\n2. Some Guns are Pens (G -> E)\n3. Some Pens are Killers (E -> K)\n\nConclusions:\n(a) Some Pencils are Pens (P -> E): From 'Some P are G' and 'Some G are E', we cannot definitively conclude 'Some P are E'. There might be no direct overlap between P and E.\n(b) Some Guns are Killers (G -> K): From 'Some G are E' and 'Some E are K', we cannot definitively conclude 'Some G are K'. The 'some' relationship does not guarantee a transitive connection across two steps.\n(c) Some Killers are Pens (K -> E): This is a direct conversion of the statement 'Some Pens are Killers'. If 'Some A are B', then it logically follows that 'Some B are A'. Thus, if 'Some Pens are Killers', then 'Some Killers are Pens' is a valid conclusion.\n(d) Some Killers are Guns (K -> G): From 'Some E are K' and 'Some G are E', we cannot definitively conclude 'Some K are G'.\n\nTherefore, only conclusion (c) is valid.",
    "explanation_marathi": "दिलेली विधाने आणि निष्कर्ष यांचे विश्लेषण करूया:\nविधाने:\n1. काही पेन्सिली बंदुका आहेत (P -> G)\n2. काही बंदुका पेने आहेत (G -> E)\n3. काही पेने मारेकरी आहेत (E -> K)\n\nनिष्कर्ष:\n(a) काही पेन्सिली पेने आहेत (P -> E): 'काही P हे G आहेत' आणि 'काही G हे E आहेत' यावरून 'काही P हे E आहेत' असा निश्चित निष्कर्ष काढता येत नाही. P आणि E यांच्यात थेट संबंध नसण्याची शक्यता आहे.\n(b) काही बंदुका मारेकरी आहेत (G -> K): 'काही G हे E आहेत' आणि 'काही E हे K आहेत' यावरून 'काही G हे K आहेत' असा निश्चित निष्कर्ष काढता येत नाही. 'काही' संबंध दोन टप्प्यांमध्ये संक्रमणीय संबंधाची हमी देत नाही.\n(c) काही मारेकरी पेने आहेत (K -> E): हे 'काही पेने मारेकरी आहेत' या विधानाचे थेट रूपांतर आहे. जर 'काही A हे B आहेत' तर 'काही B हे A आहेत' हे तार्किकदृष्ट्या सत्य असते. म्हणून, जर 'काही पेने मारेकरी आहेत' तर 'काही मारेकरी पेने आहेत' हा वैध निष्कर्ष आहे.\n(d) काही मारेकरी बंदुका आहेत (K -> G): 'काही E हे K आहेत' आणि 'काही G हे E आहेत' यावरून 'काही K हे G आहेत' असा निश्चित निष्कर्ष काढता येत नाही.\n\nम्हणून, फक्त निष्कर्ष (c) वैध आहे.",
    "options_breakdown": [
      {
        "option_english": "Only (a) and (b)",
        "option_marathi": "फक्त (a) आणि (b)",
        "is_correct": false,
        "reason_english": "Neither conclusion (a) nor (b) can be definitively drawn from the given 'some' statements. The relationships are not transitive enough to guarantee these conclusions.",
        "reason_marathi": "दिलेल्या 'काही' विधानांवरून निष्कर्ष (a) किंवा (b) निश्चितपणे काढता येत नाहीत. संबंध इतके संक्रमणीय नाहीत की हे निष्कर्ष हमी देऊ शकतील."
      },
      {
        "option_english": "Only (b) and (c)",
        "option_marathi": "फक्त (b) आणि (c)",
        "is_correct": false,
        "reason_english": "Conclusion (b) is incorrect, as explained above. While (c) is correct, this option includes an incorrect conclusion.",
        "reason_marathi": "निष्कर्ष (b) चुकीचा आहे, जसे वर स्पष्ट केले आहे. (c) बरोबर असले तरी, या पर्यायात एक चुकीचा निष्कर्ष समाविष्ट आहे."
      },
      {
        "option_english": "Only (b)",
        "option_marathi": "फक्त (b)",
        "is_correct": false,
        "reason_english": "Conclusion (b) is incorrect. It cannot be derived from the given statements.",
        "reason_marathi": "निष्कर्ष (b) चुकीचा आहे. तो दिलेल्या विधानांवरून काढता येत नाही."
      },
      {
        "option_english": "Only (c)",
        "option_marathi": "फक्त (c)",
        "is_correct": true,
        "reason_english": "Conclusion (c) 'Some killers are pens' is a direct and valid conversion of the statement 'Some pens are killers'. This is a fundamental rule in syllogism.",
        "reason_marathi": "निष्कर्ष (c) 'काही मारेकरी पेने आहेत' हे 'काही पेने मारेकरी आहेत' या विधानाचे थेट आणि वैध रूपांतर आहे. हा न्यायवाक्यातील एक मूलभूत नियम आहे."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "एका सांकेतिक भाषेत 725 साठी *@# हा संकेत आहे. 534 साठी $* हा संकेत आहे. 231 साठी t©@ हा संकेत आहे. तर 375 या अंकासाठी कोणता संकेत असेल ?",
    "question_english": "In a code language, the code *@# is for 725. The code $©* is for 534. The code t©@ is for 231, then which would be the code for 375 ?",
    "options_marathi": [
      "©#*",
      "*#©",
      "*$©",
      "©#@"
    ],
    "options_english": [
      "©#*",
      "*#©",
      "*$©",
      "©#@"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Coding-Decoding (Numbers to Symbols)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let's decode the numbers and symbols by finding common elements:\n1. 725 -> *@#\n2. 534 -> $©*\n3. 231 -> t©@\n\nComparing (1) and (2): The common digit is '5', and the common symbol is '*'. So, 5 = *\n\nComparing (1) and (3): The common digit is '2', and the common symbol is '@'. So, 2 = @\n\nFrom (1) (725 -> *@#) and our findings (5=*, 2=@), the remaining digit '7' must correspond to the remaining symbol '#'. So, 7 = #\n\nNow, let's use these in the other codes:\nFrom (2) (534 -> $©*) and (5=*), we have 34 -> $©.\nFrom (3) (231 -> t©@) and (2=@), we have 31 -> t©.\n\nComparing 34 and 31, the common digit is '3'. Comparing $© and t©, the common symbol is '©'. So, 3 = ©\n\nNow we have:\n7 = #\n2 = @\n5 = *\n3 = ©\n\nWe need to find the code for 375:\n3 = ©\n7 = #\n5 = *\n\nCombining these, the code for 375 is ©#*.",
    "explanation_marathi": "अंक आणि चिन्हे यांच्यातील समान घटक शोधून सांकेतिक भाषा उलगडूया:\n1. 725 -> *@#\n2. 534 -> $©*\n3. 231 -> t©@\n\n(1) आणि (2) यांची तुलना केल्यास: समान अंक '5' आहे आणि समान चिन्ह '*' आहे. म्हणून, 5 = *\n\n(1) आणि (3) यांची तुलना केल्यास: समान अंक '2' आहे आणि समान चिन्ह '@' आहे. म्हणून, 2 = @\n\n(1) (725 -> *@#) आणि आपल्या निष्कर्षांवरून (5=*, 2=@), उर्वरित अंक '7' हे उर्वरित चिन्ह '#' शी जुळले पाहिजे. म्हणून, 7 = #\n\nआता, हे इतर सांकेतिक भाषेत वापरूया:\n(2) (534 -> $©*) आणि (5=*) यावरून, 34 -> $©.\n(3) (231 -> t©@) आणि (2=@) यावरून, 31 -> t©.\n\n34 आणि 31 यांची तुलना केल्यास, समान अंक '3' आहे. $© आणि t© यांची तुलना केल्यास, समान चिन्ह '©' आहे. म्हणून, 3 = ©\n\nआता आपल्याकडे आहे:\n7 = #\n2 = @\n5 = *\n3 = ©\n\nआपल्याला 375 साठीचा कोड शोधायचा आहे:\n3 = ©\n7 = #\n5 = *\n\nया सर्वांना एकत्र केल्यास, 375 साठीचा कोड ©#* आहे.",
    "options_breakdown": [
      {
        "option_english": "©#*",
        "option_marathi": "©#*",
        "is_correct": true,
        "reason_english": "Based on the decoding, 3 corresponds to '©', 7 to '#', and 5 to '*'. Therefore, 375 is coded as ©#*.",
        "reason_marathi": "सांकेतिक भाषेच्या उलगड्यानुसार, 3 साठी '©', 7 साठी '#' आणि 5 साठी '*' आहे. म्हणून, 375 साठीचा कोड ©#* आहे."
      },
      {
        "option_english": "*#©",
        "option_marathi": "*#©",
        "is_correct": false,
        "reason_english": "This option incorrectly assigns '*' to 3 and '©' to 5.",
        "reason_marathi": "या पर्यायामध्ये '*' हे 3 ला आणि '©' हे 5 ला चुकीचे नियुक्त केले आहे."
      },
      {
        "option_english": "*$©",
        "option_marathi": "*$©",
        "is_correct": false,
        "reason_english": "This option incorrectly assigns '*' to 3 and '$' to 7.",
        "reason_marathi": "या पर्यायामध्ये '*' हे 3 ला आणि '$' हे 7 ला चुकीचे नियुक्त केले आहे."
      },
      {
        "option_english": "©#@",
        "option_marathi": "©#@",
        "is_correct": false,
        "reason_english": "This option incorrectly assigns '@' to 5.",
        "reason_marathi": "या पर्यायामध्ये '@' हे 5 ला चुकीचे नियुक्त केले आहे."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "एका शाळेतील 2003 ते 2008 या सहा वर्षाच्या कालावधीत उत्तीर्णांची टक्केवारी अनुक्रमे 45, 56, 42, 61, 55 आणि 52 अशी आहे. 2003 ते 2008 या काळात या परीक्षेला बसणाऱ्या विद्यार्थ्यांचे प्रमाण 2:3:4:3:2:3 असे असल्यास सहा वर्षाची उत्तीर्णांची एकत्रित टक्केवारी किती असेल ?",
    "question_english": "Pass percentage of a school for six years starting from 2003 to 2008 are 45, 56, 42, 61, 55 and 52 respectively. If the ratio of students who appeared for the examination in the years 2003 to 2008 are 2:3:4:3:2:3, then the pass percentage of the school in the six years together is :",
    "options_marathi": [
      "51.5%",
      "47.5%",
      "55%",
      "42.5%"
    ],
    "options_english": [
      "51.5%",
      "47.5%",
      "55%",
      "42.5%"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Percentage, Weighted Average",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "To find the overall pass percentage, we need to calculate the total number of passed students and the total number of students who appeared over the six years. Since the ratio of students is given, we can assume the number of students for each year as a multiple of 'x'.\n\nLet the number of students appeared in each year be 2x, 3x, 4x, 3x, 2x, and 3x respectively.\nTotal students appeared = (2 + 3 + 4 + 3 + 2 + 3)x = 17x\n\nNow, let's calculate the number of passed students for each year:\n2003: 2x * 45% = 2x * 0.45 = 0.9x\n2004: 3x * 56% = 3x * 0.56 = 1.68x\n2005: 4x * 42% = 4x * 0.42 = 1.68x\n2006: 3x * 61% = 3x * 0.61 = 1.83x\n2007: 2x * 55% = 2x * 0.55 = 1.1x\n2008: 3x * 52% = 3x * 0.52 = 1.56x\n\nTotal passed students = (0.9 + 1.68 + 1.68 + 1.83 + 1.1 + 1.56)x = 8.75x\n\nOverall pass percentage = (Total passed students / Total students appeared) * 100\n= (8.75x / 17x) * 100\n= (8.75 / 17) * 100\n= 0.514705... * 100\n= 51.47% ≈ 51.5%",
    "explanation_marathi": "एकूण उत्तीर्ण टक्केवारी काढण्यासाठी, आपल्याला सहा वर्षांमध्ये उत्तीर्ण झालेल्या विद्यार्थ्यांची एकूण संख्या आणि परीक्षेला बसलेल्या विद्यार्थ्यांची एकूण संख्या मोजावी लागेल. विद्यार्थ्यांचे प्रमाण दिले असल्यामुळे, आपण प्रत्येक वर्षासाठी विद्यार्थ्यांची संख्या 'x' च्या पटीत मानू शकतो.\n\nप्रत्येक वर्षी परीक्षेला बसलेल्या विद्यार्थ्यांची संख्या अनुक्रमे 2x, 3x, 4x, 3x, 2x आणि 3x मानू.\nपरीक्षेला बसलेले एकूण विद्यार्थी = (2 + 3 + 4 + 3 + 2 + 3)x = 17x\n\nआता, प्रत्येक वर्षासाठी उत्तीर्ण विद्यार्थ्यांची संख्या काढूया:\n2003: 2x * 45% = 2x * 0.45 = 0.9x\n2004: 3x * 56% = 3x * 0.56 = 1.68x\n2005: 4x * 42% = 4x * 0.42 = 1.68x\n2006: 3x * 61% = 3x * 0.61 = 1.83x\n2007: 2x * 55% = 2x * 0.55 = 1.1x\n2008: 3x * 52% = 3x * 0.52 = 1.56x\n\nएकूण उत्तीर्ण विद्यार्थी = (0.9 + 1.68 + 1.68 + 1.83 + 1.1 + 1.56)x = 8.75x\n\nएकूण उत्तीर्ण टक्केवारी = (एकूण उत्तीर्ण विद्यार्थी / परीक्षेला बसलेले एकूण विद्यार्थी) * 100\n= (8.75x / 17x) * 100\n= (8.75 / 17) * 100\n= 0.514705... * 100\n= 51.47% ≈ 51.5%",
    "options_breakdown": [
      {
        "option_english": "51.5%",
        "option_marathi": "51.5%",
        "is_correct": true,
        "reason_english": "The calculation of the weighted average pass percentage, considering the varying number of students each year, results in approximately 51.47%, which rounds to 51.5%.",
        "reason_marathi": "प्रत्येक वर्षी विद्यार्थ्यांच्या बदलत्या संख्येचा विचार करून काढलेली भारित सरासरी उत्तीर्ण टक्केवारी अंदाजे 51.47% येते, जी 51.5% पर्यंत पूर्णांक होते."
      },
      {
        "option_english": "47.5%",
        "option_marathi": "47.5%",
        "is_correct": false,
        "reason_english": "This value is significantly lower than the calculated weighted average, indicating an error in calculation or an incorrect approach.",
        "reason_marathi": "हे मूल्य काढलेल्या भारित सरासरीपेक्षा लक्षणीयरीत्या कमी आहे, जे गणनेतील त्रुटी किंवा चुकीचा दृष्टिकोन दर्शवते."
      },
      {
        "option_english": "55%",
        "option_marathi": "55%",
        "is_correct": false,
        "reason_english": "This would be the simple average of the percentages, which is incorrect as it doesn't account for the different number of students each year.",
        "reason_marathi": "ही टक्केवारीची साधी सरासरी असेल, जी चुकीची आहे कारण ती प्रत्येक वर्षीच्या विद्यार्थ्यांच्या वेगवेगळ्या संख्येचा विचार करत नाही."
      },
      {
        "option_english": "42.5%",
        "option_marathi": "42.5%",
        "is_correct": false,
        "reason_english": "This value is much lower than the actual weighted average, suggesting a major calculation error.",
        "reason_marathi": "हे मूल्य वास्तविक भारित सरासरीपेक्षा खूप कमी आहे, जे मोठ्या गणनेतील त्रुटी दर्शवते."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "8 भाग रसायन A आणि 3 भाग पाणी यांचे मिश्रण केले आहे. जर त्यात 26 लिटर पाणी घातले तर मिश्रणातील रसायन A हे त्यातील पाण्याच्या निम्मे होते. या मिश्रणातील रसायनाच्या लिटरची संख्या निवडा.",
    "question_english": "A mixture is composed of 8 parts of chemical A and 3 parts of water. After adding 26 liters of water if the mixture contains chemical A one half as much as water. Select the number of liters of chemical A that it contains.",
    "options_marathi": [
      "16",
      "12",
      "14",
      "18"
    ],
    "options_english": [
      "16",
      "12",
      "14",
      "18"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Mixture and Alligation",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let the initial quantity of chemical A be 8k liters and water be 3k liters, where 'k' is a constant.\n\nInitial mixture:\nChemical A = 8k liters\nWater = 3k liters\n\nAfter adding 26 liters of water:\nThe quantity of chemical A remains unchanged: 8k liters\nThe quantity of water becomes: (3k + 26) liters\n\nAccording to the problem, after adding water, chemical A is one half as much as water:\nChemical A = (1/2) * Water\n8k = (1/2) * (3k + 26)\n\nNow, solve for 'k':\nMultiply both sides by 2:\n16k = 3k + 26\nSubtract 3k from both sides:\n16k - 3k = 26\n13k = 26\nk = 26 / 13\nk = 2\n\nThe question asks for the number of liters of chemical A in the mixture. The quantity of chemical A is 8k.\nChemical A = 8 * 2 = 16 liters.",
    "explanation_marathi": "सुरुवातीला रसायन A चे प्रमाण 8k लिटर आणि पाण्याचे प्रमाण 3k लिटर मानू, जिथे 'k' हा एक स्थिरांक आहे.\n\nसुरुवातीचे मिश्रण:\nरसायन A = 8k लिटर\nपाणी = 3k लिटर\n\n26 लिटर पाणी घातल्यानंतर:\nरसायन A चे प्रमाण तेच राहते: 8k लिटर\nपाण्याचे प्रमाण होते: (3k + 26) लिटर\n\nसमस्येनुसार, पाणी घातल्यानंतर, रसायन A हे पाण्याच्या निम्म्या प्रमाणात होते:\nरसायन A = (1/2) * पाणी\n8k = (1/2) * (3k + 26)\n\nआता, 'k' साठी सोडवा:\nदोन्ही बाजूंना 2 ने गुणा:\n16k = 3k + 26\nदोन्ही बाजूंमधून 3k वजा करा:\n16k - 3k = 26\n13k = 26\nk = 26 / 13\nk = 2\n\nप्रश्नात मिश्रणातील रसायन A च्या लिटरची संख्या विचारली आहे. रसायन A चे प्रमाण 8k आहे.\nरसायन A = 8 * 2 = 16 लिटर.",
    "options_breakdown": [
      {
        "option_english": "16",
        "option_marathi": "16",
        "is_correct": true,
        "reason_english": "By setting up the equations based on the initial ratio and the condition after adding water, we find that the value of 'k' is 2, leading to 16 liters of chemical A.",
        "reason_marathi": "सुरुवातीच्या प्रमाणानुसार आणि पाणी घातल्यानंतरच्या स्थितीनुसार समीकरणे मांडल्यास, 'k' चे मूल्य 2 येते, ज्यामुळे रसायन A चे प्रमाण 16 लिटर होते."
      },
      {
        "option_english": "12",
        "option_marathi": "12",
        "is_correct": false,
        "reason_english": "This would be the initial quantity of water (3k = 3*4) if k was 4, or chemical A if k was 1.5, which is incorrect.",
        "reason_marathi": "हे पाण्याचे प्रारंभिक प्रमाण (3k = 3*4) असेल जर k 4 असेल, किंवा रसायन A चे प्रमाण असेल जर k 1.5 असेल, जे चुकीचे आहे."
      },
      {
        "option_english": "14",
        "option_marathi": "14",
        "is_correct": false,
        "reason_english": "This value does not satisfy the conditions given in the problem.",
        "reason_marathi": "हे मूल्य समस्येमध्ये दिलेल्या अटी पूर्ण करत नाही."
      },
      {
        "option_english": "18",
        "option_marathi": "18",
        "is_correct": false,
        "reason_english": "This value does not satisfy the conditions given in the problem.",
        "reason_marathi": "हे मूल्य समस्येमध्ये दिलेल्या अटी पूर्ण करत नाही."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "P, Q, R, S, T आणि U ही चुलत भावंडे आहेत. कोणतीही दोन भावंडे सारख्या वयाची नाहीत; मात्र सर्वांची जन्मतिथी सारखीच आहे. सर्वात धाकटा हा 17 वर्षे वयाचा असून, थोरला T हा 22 वर्षे वयाचा आहे. U हा वयाने Q आणि S यांच्या मधला आहे. P हा Q पेक्षा मोठा आहे. R हा S पेक्षा मोठा आहे. जर Q चे वय 17 असेल तर अनुक्रमे S व R यांच्या वयांची जोडी निवडा.",
    "question_english": "P, Q, R, S, T and U are cousins. No two cousins are of the same age, but all have birthdays on the same dates. The youngest is 17 years old and the oldest T is 22. U is somewhere between Q and S in age. P is older than Q. R is older than S. Select the pair of ages of S and R respectively; if Q is 17 years old.",
    "options_marathi": [
      "18 आणि 19",
      "18 आणि 20",
      "19 आणि 21",
      "18 आणि 21"
    ],
    "options_english": [
      "18 and 19",
      "18 and 20",
      "19 and 21",
      "18 and 21"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Age-based Puzzles / Ordering",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's list the given information and deduce the ages:\nThere are 6 cousins: P, Q, R, S, T, U.\nAll ages are distinct.\nThe youngest is 17 years old.\nThe oldest T is 22 years old.\nGiven Q is 17 years old, so Q is the youngest.\n\nSo, we have the ages: 17 (Q), __, __, __, __, 22 (T).\nThe distinct ages must be 17, 18, 19, 20, 21, 22.\n\nRemaining people: P, R, S, U.\nRemaining ages: 18, 19, 20, 21.\n\nOther conditions:\n1. U is somewhere between Q and S in age. (Q < U < S or S < U < Q)\n2. P is older than Q. (P > 17)\n3. R is older than S. (R > S)\n\nSince Q = 17, and U is between Q and S, it must be Q < U < S. This means U > 17 and S > U.\nSo, S cannot be 18, because if S=18, U would have to be between 17 and 18, which is not possible for integer ages.\nTherefore, S must be at least 19.\n\nLet's check the options for (S, R) based on S >= 19 and R > S:\n\nOption 1: S=18, R=19. (Invalid, S cannot be 18)\nOption 2: S=18, R=20. (Invalid, S cannot be 18)\nOption 3: S=19, R=21.\n   If S=19 and R=21, this satisfies R > S.\n   Ages used so far: Q=17, T=22, S=19, R=21.\n   Remaining ages: 18, 20.\n   Remaining people: P, U.\n   Condition: Q < U < S. (17 < U < 19). This means U must be 18.\n   If U=18, then P must be 20 (the last remaining age).\n   Let's verify all conditions with this assignment:\n   - Ages: Q=17, U=18, S=19, P=20, R=21, T=22. All distinct and within range.\n   - Youngest Q=17, Oldest T=22. (Satisfied)\n   - U is between Q and S (17 < 18 < 19). (Satisfied)\n   - P is older than Q (20 > 17). (Satisfied)\n   - R is older than S (21 > 19). (Satisfied)\n   All conditions are met. So, S=19 and R=21 is the correct pair.\n\nOption 4: S=18, R=21. (Invalid, S cannot be 18)\n\nThus, the pair of ages for S and R is 19 and 21 respectively.",
    "explanation_marathi": "दिलेली माहिती आणि वये काढूया:\n6 चुलत भावंडे आहेत: P, Q, R, S, T, U.\nसर्वांची वये वेगवेगळी आहेत.\nसर्वात धाकटा 17 वर्षांचा आहे.\nसर्वात थोरला T 22 वर्षांचा आहे.\nQ चे वय 17 वर्षे दिले आहे, म्हणून Q सर्वात धाकटा आहे.\n\nतर, आपल्याकडे वये आहेत: 17 (Q), __, __, __, __, 22 (T).\nवेगवेगळी वये 17, 18, 19, 20, 21, 22 असणे आवश्यक आहे.\n\nउरलेले व्यक्ती: P, R, S, U.\nउरलेली वये: 18, 19, 20, 21.\n\nइतर अटी:\n1. U हा वयाने Q आणि S यांच्या मधला आहे. (Q < U < S किंवा S < U < Q)\n2. P हा Q पेक्षा मोठा आहे. (P > 17)\n3. R हा S पेक्षा मोठा आहे. (R > S)\n\nQ = 17 असल्यामुळे, आणि U हा Q आणि S च्या मध्ये असल्यामुळे, Q < U < S असे असले पाहिजे. याचा अर्थ U > 17 आणि S > U.\nम्हणून, S 18 असू शकत नाही, कारण जर S=18 असेल, तर U 17 आणि 18 च्या दरम्यान असावा लागेल, जे पूर्णांक वयासाठी शक्य नाही.\nत्यामुळे, S किमान 19 असावा.\n\n(S, R) साठी पर्याय तपासूया, S >= 19 आणि R > S या अटींवर आधारित:\n\nपर्याय 1: S=18, R=19. (अवैध, S 18 असू शकत नाही)\nपर्याय 2: S=18, R=20. (अवैध, S 18 असू शकत नाही)\nपर्याय 3: S=19, R=21.\n   जर S=19 आणि R=21, तर R > S ही अट पूर्ण होते.\n   आतापर्यंत वापरलेली वये: Q=17, T=22, S=19, R=21.\n   उरलेली वये: 18, 20.\n   उरलेले व्यक्ती: P, U.\n   अट: Q < U < S. (17 < U < 19). याचा अर्थ U 18 असावा.\n   जर U=18, तर P 20 असावा (शेवटचे उरलेले वय).\n   या नियुक्तीसह सर्व अटी तपासूया:\n   - वये: Q=17, U=18, S=19, P=20, R=21, T=22. सर्व वेगवेगळी आणि मर्यादेत आहेत.\n   - सर्वात धाकटा Q=17, सर्वात थोरला T=22. (पूर्ण)\n   - U हा Q आणि S च्या मध्ये आहे (17 < 18 < 19). (पूर्ण)\n   - P हा Q पेक्षा मोठा आहे (20 > 17). (पूर्ण)\n   - R हा S पेक्षा मोठा आहे (21 > 19). (पूर्ण)\n   सर्व अटी पूर्ण होतात. म्हणून, S=19 आणि R=21 ही योग्य जोडी आहे.\n\nपर्याय 4: S=18, R=21. (अवैध, S 18 असू शकत नाही)\n\nम्हणून, S आणि R यांच्या वयांची जोडी अनुक्रमे 19 आणि 21 आहे.",
    "options_breakdown": [
      {
        "option_english": "18 and 19",
        "option_marathi": "18 आणि 19",
        "is_correct": false,
        "reason_english": "If S is 18, then U cannot be between Q (17) and S (18) with distinct integer ages. This violates the condition Q < U < S.",
        "reason_marathi": "जर S 18 असेल, तर Q (17) आणि S (18) यांच्यामध्ये U असू शकत नाही, कारण वये पूर्णांक आणि भिन्न आहेत. हे Q < U < S या अटीचे उल्लंघन करते."
      },
      {
        "option_english": "18 and 20",
        "option_marathi": "18 आणि 20",
        "is_correct": false,
        "reason_english": "Similar to option 1, S cannot be 18 due to the condition Q < U < S.",
        "reason_marathi": "पर्याय 1 प्रमाणेच, Q < U < S या अटीमुळे S 18 असू शकत नाही."
      },
      {
        "option_english": "19 and 21",
        "option_marathi": "19 आणि 21",
        "is_correct": true,
        "reason_english": "This pair allows for a consistent assignment of all ages (Q=17, U=18, S=19, P=20, R=21, T=22) that satisfies all given conditions.",
        "reason_marathi": "ही जोडी सर्व वयांची सुसंगत नियुक्ती (Q=17, U=18, S=19, P=20, R=21, T=22) करण्यास अनुमती देते, जी दिलेल्या सर्व अटी पूर्ण करते."
      },
      {
        "option_english": "18 and 21",
        "option_marathi": "18 आणि 21",
        "is_correct": false,
        "reason_english": "Similar to option 1, S cannot be 18 due to the condition Q < U < S.",
        "reason_marathi": "पर्याय 1 प्रमाणेच, Q < U < S या अटीमुळे S 18 असू शकत नाही."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "सौरभकडे त्रिकोणी व चौकोनी अशा दोन आकारांचे 25 कागद आहेत. त्यांच्या कोनांची संख्या 88 आहे. तर त्यापैकी त्रिकोणी कागद किती व त्रिकोणांच्या कोनांची संख्या किती ?",
    "question_english": "Sourabh has 25 pieces of paper of triangular and rectangular in shape. The total number of angles is 88. Then how many are triangular shaped pieces of paper and the number of angles of triangles ?",
    "options_marathi": [
      "9, 27",
      "11, 33",
      "12, 36",
      "13, 39"
    ],
    "options_english": [
      "9, 27",
      "11, 33",
      "12, 36",
      "13, 39"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Linear Equations, Basic Geometry",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let T be the number of triangular pieces of paper.\nLet R be the number of rectangular pieces of paper.\n\nGiven:\nTotal number of pieces of paper = 25\nSo, T + R = 25  (Equation 1)\n\nA triangle has 3 angles.\nA rectangle has 4 angles.\n\nTotal number of angles = 88\nSo, 3T + 4R = 88  (Equation 2)\n\nFrom Equation 1, we can express R in terms of T:\nR = 25 - T\n\nSubstitute this value of R into Equation 2:\n3T + 4(25 - T) = 88\n3T + 100 - 4T = 88\n100 - T = 88\n-T = 88 - 100\n-T = -12\nT = 12\n\nSo, there are 12 triangular pieces of paper.\n\nThe number of angles of triangles = T * 3 = 12 * 3 = 36.\n\nLet's verify the number of rectangular pieces and their angles:\nR = 25 - T = 25 - 12 = 13\nAngles from rectangles = 13 * 4 = 52\nTotal angles = 36 (from triangles) + 52 (from rectangles) = 88. This matches the given information.",
    "explanation_marathi": "त्रिकोणी कागदांच्या तुकड्यांची संख्या T मानू.\nचौकोनी कागदांच्या तुकड्यांची संख्या R मानू.\n\nदिलेली माहिती:\nकागदांच्या तुकड्यांची एकूण संख्या = 25\nम्हणून, T + R = 25 (समीकरण 1)\n\nत्रिकोणाला 3 कोन असतात.\nचौकोनाला 4 कोन असतात.\n\nकोनांची एकूण संख्या = 88\nम्हणून, 3T + 4R = 88 (समीकरण 2)\n\nसमीकरण 1 मधून, आपण R ला T च्या स्वरूपात मांडू शकतो:\nR = 25 - T\n\nR चे हे मूल्य समीकरण 2 मध्ये टाकू:\n3T + 4(25 - T) = 88\n3T + 100 - 4T = 88\n100 - T = 88\n-T = 88 - 100\n-T = -12\nT = 12\n\nम्हणून, त्रिकोणी कागदांच्या तुकड्यांची संख्या 12 आहे.\n\nत्रिकोणांच्या कोनांची संख्या = T * 3 = 12 * 3 = 36.\n\nचौकोनी तुकड्यांची संख्या आणि त्यांचे कोन तपासूया:\nR = 25 - T = 25 - 12 = 13\nचौकोनांमधून मिळणारे कोन = 13 * 4 = 52\nएकूण कोन = 36 (त्रिकोणांमधून) + 52 (चौकोनांमधून) = 88. हे दिलेल्या माहितीशी जुळते.",
    "options_breakdown": [
      {
        "option_english": "9, 27",
        "option_marathi": "9, 27",
        "is_correct": false,
        "reason_english": "If there are 9 triangular pieces (27 angles), then there would be 16 rectangular pieces (64 angles). Total angles = 27 + 64 = 91, which is not 88.",
        "reason_marathi": "जर 9 त्रिकोणी तुकडे (27 कोन) असतील, तर 16 चौकोनी तुकडे (64 कोन) असतील. एकूण कोन = 27 + 64 = 91, जे 88 नाही."
      },
      {
        "option_english": "11, 33",
        "option_marathi": "11, 33",
        "is_correct": false,
        "reason_english": "If there are 11 triangular pieces (33 angles), then there would be 14 rectangular pieces (56 angles). Total angles = 33 + 56 = 89, which is not 88.",
        "reason_marathi": "जर 11 त्रिकोणी तुकडे (33 कोन) असतील, तर 14 चौकोनी तुकडे (56 कोन) असतील. एकूण कोन = 33 + 56 = 89, जे 88 नाही."
      },
      {
        "option_english": "12, 36",
        "option_marathi": "12, 36",
        "is_correct": true,
        "reason_english": "If there are 12 triangular pieces (36 angles), then there are 13 rectangular pieces (52 angles). Total angles = 36 + 52 = 88. This matches all conditions.",
        "reason_marathi": "जर 12 त्रिकोणी तुकडे (36 कोन) असतील, तर 13 चौकोनी तुकडे (52 कोन) असतील. एकूण कोन = 36 + 52 = 88. हे सर्व अटींशी जुळते."
      },
      {
        "option_english": "13, 39",
        "option_marathi": "13, 39",
        "is_correct": false,
        "reason_english": "If there are 13 triangular pieces (39 angles), then there would be 12 rectangular pieces (48 angles). Total angles = 39 + 48 = 87, which is not 88.",
        "reason_marathi": "जर 13 त्रिकोणी तुकडे (39 कोन) असतील, तर 12 चौकोनी तुकडे (48 कोन) असतील. एकूण कोन = 39 + 48 = 87, जे 88 नाही."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "आपापसात सर्वात उत्तम निवडण्यासाठी भावंडांच्या दोन जोड्या, साहील आणि त्याची बहीण नूरी आणि नान्सी व तिचा भाऊ पन्नू, हे बुद्धिबळ खेळले. फक्त पहिल्या सामन्यातील दोन खेळाडू भावंडे होती. पहिल्या सामन्यात हरलेला खेळाडू पुढच्या सामन्यासाठी बाद केला आणि जिंकलेला खेळाडू नंतरचा सामना खेळला व यानंतर याचप्रमाणे तीन सामने झाले. नूरी व तिचा भाऊ यांनी दुसऱ्या भावंडांच्या जोडीपेक्षा जास्त सामने जिंकले. मुलांनी एक सामना जिंकला तर मुलींनी दोन जिंकले. तर तिसरा सामना जिंकलेली व्यक्ती निवडा.",
    "question_english": "Two pairs of siblings, Sahil and his sister Nuri and Nancy and her brother Pannu, played chess to decide the best among all of them. The two players were siblings in the first game only. After 1st game, loser was eliminated; winner played the next game and so on. They played three games in all. Nuri and her brother won more number of games than other pair of siblings. The boys won one game only whereas girls won two. Select the person who did win in 3rd game.",
    "options_marathi": [
      "नूरी",
      "नान्सी",
      "साहिल किंवा पन्नू",
      "उत्तर शोधण्यासाठी अधिक माहितीची गरज आहे."
    ],
    "options_english": [
      "Nuri",
      "Nancy",
      "Sahil or Pannu",
      "More data is needed to find the answer"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Logic Puzzle, Tournament Analysis",
    "difficulty": "Hard",
    "trap_detected": "Ambiguous Option",
    "explanation_english": "Let's denote the players as Sahil (S), Nuri (N), Nancy (Na), Pannu (P).\nSiblings pairs: (S, N) and (Na, P).\n\nConditions:\n1.  Total 3 games. Loser eliminated, winner proceeds.\n2.  Game 1: Only siblings played each other.\n3.  (Nuri's wins + Sahil's wins) > (Nancy's wins + Pannu's wins).\n4.  Total wins by boys (S+P) = 1. Total wins by girls (N+Na) = 2.\n\nFrom condition 4, exactly one boy won one game, and the girls collectively won two games (e.g., one girl won two games, or two girls won one game each).\n\nLet's analyze the possible scenarios for Game 1:\n\nScenario A: Game 1 is Sahil (S) vs Nuri (N). (Siblings)\n    *   If S wins G1: S has 1 win. N is eliminated. (Players left: S, Na, P)\n        Boys' total wins = 1. Girls' total wins = 0.\n        Since boys can only win 1 game (Condition 4), S must lose Game 2.\n        Game 2: S plays either Na or P. S loses.\n        If Na wins G2: Na has 1 win. S is eliminated. (Players left: Na, P)\n            Boys' total wins = 1 (from S's G1 win). Girls' total wins = 1 (from Na's G2 win).\n            Game 3: Na vs P.\n            Girls need 2 total wins (Condition 4), so Na must win G3. Na has 2 wins. P is eliminated.\n            Final wins: S=1, N=0, Na=2, P=0.\n            Check Condition 3: (S+N) = 1+0 = 1. (Na+P) = 2+0 = 2. Is 1 > 2? No. This scenario is invalid.\n\n    *   If N wins G1: N has 1 win. S is eliminated. (Players left: N, Na, P)\n        Boys' total wins = 0. Girls' total wins = 1.\n        Girls need 2 total wins (Condition 4), so N can win G2.\n        Game 2: N plays either Na or P. N wins.\n        Let's assume N plays Na in G2 and N wins. N has 2 wins. Na is eliminated. (Players left: N, P)\n            Boys' total wins = 0. Girls' total wins = 2.\n            Game 3: N vs P.\n            Boys need 1 total win (Condition 4), so P must win G3. P has 1 win. N is eliminated.\n            Final wins: S=0, N=2, Na=0, P=1.\n            Check Condition 3: (S+N) = 0+2 = 2. (Na+P) = 0+1 = 1. Is 2 > 1? Yes. This scenario is valid!\n            In this scenario, **Pannu (P) wins Game 3**.\n            (Also, G1 (N vs S) are siblings, G2 (N vs Na) are not, G3 (N vs P) are not. This satisfies Condition 2).\n\nScenario B: Game 1 is Nancy (Na) vs Pannu (P). (Siblings)\n    *   If Na wins G1: Na has 1 win. P is eliminated. (Players left: Na, S, N)\n        Boys' total wins = 0. Girls' total wins = 1.\n        Girls need 2 total wins (Condition 4), so Na can win G2.\n        Game 2: Na plays either S or N. Na wins.\n        Let's assume Na plays S in G2 and Na wins. Na has 2 wins. S is eliminated. (Players left: Na, N)\n            Boys' total wins = 0. Girls' total wins = 2.\n            Game 3: Na vs N.\n            Boys need 1 total win (Condition 4), but there are no boys left to win. This scenario is invalid.\n\n    *   If P wins G1: P has 1 win. Na is eliminated. (Players left: P, S, N)\n        Boys' total wins = 1. Girls' total wins = 0.\n        Boys can only win 1 game (Condition 4), so P must lose Game 2.\n        Game 2: P plays either S or N. P loses.\n        If N wins G2: N has 1 win. P is eliminated. (Players left: N, S)\n            Boys' total wins = 1 (from P's G1 win). Girls' total wins = 1 (from N's G2 win).\n            Game 3: N vs S.\n            This violates Condition 2, which states that siblings played only in the first game. This scenario is invalid.\n\nOnly one valid scenario exists: Nuri wins G1, Nuri wins G2, and Pannu wins G3.\nTherefore, the person who won the 3rd game is Pannu.\nSince the option is 'Sahil or Pannu', and Pannu is a valid winner, this option is correct.",
    "explanation_marathi": "खेळाडूंची नावे साहील (S), नूरी (N), नान्सी (Na), पन्नू (P) अशी मानू.\nभावंडांच्या जोड्या: (S, N) आणि (Na, P).\n\nअटी:\n1.  एकूण 3 सामने. हरलेला खेळाडू बाद, जिंकलेला खेळाडू पुढील सामना खेळतो.\n2.  पहिल्या सामन्यात फक्त भावंडे एकमेकांविरुद्ध खेळली.\n3.  (नूरीचे विजय + साहीलचे विजय) > (नान्सीचे विजय + पन्नूचे विजय).\n4.  मुलांनी जिंकलेले एकूण सामने (S+P) = 1. मुलींनी जिंकलेले एकूण सामने (N+Na) = 2.\n\nअट 4 नुसार, फक्त एका मुलाने एक सामना जिंकला आणि मुलींनी मिळून दोन सामने जिंकले (उदा. एका मुलीने दोन सामने जिंकले, किंवा दोन मुलींनी प्रत्येकी एक सामना जिंकला).\n\nपहिल्या सामन्यासाठी संभाव्य परिस्थितींचे विश्लेषण करूया:\n\nपरिस्थिती A: पहिला सामना साहील (S) विरुद्ध नूरी (N) आहे. (भावंडे)\n    *   जर S ने G1 जिंकला: S ला 1 विजय. N बाद. (उरलेले खेळाडू: S, Na, P)\n        मुलांचे एकूण विजय = 1. मुलींचे एकूण विजय = 0.\n        मुले फक्त 1 सामना जिंकू शकतात (अट 4), म्हणून S ने दुसरा सामना हरला पाहिजे.\n        सामना 2: S हा Na किंवा P विरुद्ध खेळतो. S हरतो.\n        जर Na ने G2 जिंकला: Na ला 1 विजय. S बाद. (उरलेले खेळाडू: Na, P)\n            मुलांचे एकूण विजय = 1 (S च्या G1 विजयामुळे). मुलींचे एकूण विजय = 1 (Na च्या G2 विजयामुळे).\n            सामना 3: Na विरुद्ध P.\n            मुलींना एकूण 2 विजय हवे आहेत (अट 4), म्हणून Na ने G3 जिंकला पाहिजे. Na ला 2 विजय. P बाद.\n            अंतिम विजय: S=1, N=0, Na=2, P=0.\n            अट 3 तपासा: (S+N) = 1+0 = 1. (Na+P) = 2+0 = 2. 1 > 2 आहे का? नाही. ही परिस्थिती अवैध आहे.\n\n    *   जर N ने G1 जिंकला: N ला 1 विजय. S बाद. (उरलेले खेळाडू: N, Na, P)\n        मुलांचे एकूण विजय = 0. मुलींचे एकूण विजय = 1.\n        मुलींना एकूण 2 विजय हवे आहेत (अट 4), म्हणून N G2 जिंकू शकते.\n        सामना 2: N हा Na किंवा P विरुद्ध खेळतो. N जिंकते.\n        समजा N ने G2 मध्ये Na विरुद्ध खेळून जिंकला. N ला 2 विजय. Na बाद. (उरलेले खेळाडू: N, P)\n            मुलांचे एकूण विजय = 0. मुलींचे एकूण विजय = 2.\n            सामना 3: N विरुद्ध P.\n            मुलांना एकूण 1 विजय हवा आहे (अट 4), म्हणून P ने G3 जिंकला पाहिजे. P ला 1 विजय. N बाद.\n            अंतिम विजय: S=0, N=2, Na=0, P=1.\n            अट 3 तपासा: (S+N) = 0+2 = 2. (Na+P) = 0+1 = 1. 2 > 1 आहे का? होय. ही परिस्थिती वैध आहे!\n            या परिस्थितीत, **पन्नू (P) ने तिसरा सामना जिंकला**.\n            (तसेच, G1 (N विरुद्ध S) भावंडे आहेत, G2 (N विरुद्ध Na) भावंडे नाहीत, G3 (N विरुद्ध P) भावंडे नाहीत. हे अट 2 पूर्ण करते).\n\nपरिस्थिती B: पहिला सामना नान्सी (Na) विरुद्ध पन्नू (P) आहे. (भावंडे)\n    *   जर Na ने G1 जिंकला: Na ला 1 विजय. P बाद. (उरलेले खेळाडू: Na, S, N)\n        मुलांचे एकूण विजय = 0. मुलींचे एकूण विजय = 1.\n        मुलींना एकूण 2 विजय हवे आहेत (अट 4), म्हणून Na G2 जिंकू शकते.\n        सामना 2: Na हा S किंवा N विरुद्ध खेळतो. Na जिंकते.\n        समजा Na ने G2 मध्ये S विरुद्ध खेळून जिंकला. Na ला 2 विजय. S बाद. (उरलेले खेळाडू: Na, N)\n            मुलांचे एकूण विजय = 0. मुलींचे एकूण विजय = 2.\n            सामना 3: Na विरुद्ध N.\n            मुलांना एकूण 1 विजय हवा आहे (अट 4), परंतु जिंकण्यासाठी कोणताही मुलगा शिल्लक नाही. ही परिस्थिती अवैध आहे.\n\n    *   जर P ने G1 जिंकला: P ला 1 विजय. Na बाद. (उरलेले खेळाडू: P, S, N)\n        मुलांचे एकूण विजय = 1. मुलींचे एकूण विजय = 0.\n        मुले फक्त 1 सामना जिंकू शकतात (अट 4), म्हणून P ने दुसरा सामना हरला पाहिजे.\n        सामना 2: P हा S किंवा N विरुद्ध खेळतो. P हरतो.\n        जर N ने G2 जिंकला: N ला 1 विजय. P बाद. (उरलेले खेळाडू: N, S)\n            मुलांचे एकूण विजय = 1 (P च्या G1 विजयामुळे). मुलींचे एकूण विजय = 1 (N च्या G2 विजयामुळे).\n            सामना 3: N विरुद्ध S.\n            हे अट 2 चे उल्लंघन करते, ज्यात म्हटले आहे की भावंडे फक्त पहिल्या सामन्यात खेळली. ही परिस्थिती अवैध आहे.\n\nफक्त एकच वैध परिस्थिती अस्तित्वात आहे: नूरी G1 जिंकते, नूरी G2 जिंकते आणि पन्नू G3 जिंकतो.\nम्हणून, तिसरा सामना जिंकणारी व्यक्ती पन्नू आहे.\nपर्याय 'साहिल किंवा पन्नू' असल्याने, आणि पन्नू हा वैध विजेता असल्याने, हा पर्याय बरोबर आहे.",
    "options_breakdown": [
      {
        "option_english": "Nuri",
        "option_marathi": "नूरी",
        "is_correct": false,
        "reason_english": "In the only valid scenario, Nuri wins the first two games but loses the third game to Pannu to satisfy the condition that boys won one game.",
        "reason_marathi": "एकमेव वैध परिस्थितीत, नूरी पहिले दोन सामने जिंकते परंतु मुलांनी एक सामना जिंकला ही अट पूर्ण करण्यासाठी तिसरा सामना पन्नूकडून हरते."
      },
      {
        "option_english": "Nancy",
        "option_marathi": "नान्सी",
        "is_correct": false,
        "reason_english": "Nancy does not win the third game in any valid scenario. In the valid scenario, she is eliminated in the second game.",
        "reason_marathi": "नान्सी कोणत्याही वैध परिस्थितीत तिसरा सामना जिंकत नाही. वैध परिस्थितीत, ती दुसऱ्या सामन्यात बाद होते."
      },
      {
        "option_english": "Sahil or Pannu",
        "option_marathi": "साहिल किंवा पन्नू",
        "is_correct": true,
        "reason_english": "Based on the detailed logical deduction, Pannu is the only person who can win the third game while satisfying all given conditions. Since Pannu is included in this option, it is the correct choice.",
        "reason_marathi": "तपशीलवार तार्किक निष्कर्षांवर आधारित, पन्नू हा एकमेव व्यक्ती आहे जो दिलेल्या सर्व अटी पूर्ण करून तिसरा सामना जिंकू शकतो. या पर्यायात पन्नूचा समावेश असल्याने, हा योग्य पर्याय आहे."
      },
      {
        "option_english": "More data is needed to find the answer",
        "option_marathi": "उत्तर शोधण्यासाठी अधिक माहितीची गरज आहे.",
        "is_correct": false,
        "reason_english": "Sufficient data is provided to deduce the winner of the third game through logical analysis.",
        "reason_marathi": "तार्किक विश्लेषणाद्वारे तिसऱ्या सामन्याचा विजेता शोधण्यासाठी पुरेशी माहिती दिली आहे."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "चलभाष (मोबाईल) स्तंभांच्या जवळ रहाणारे लोक या स्तंभांतून होणारी प्रारणे स्वतःच्या आरोग्याची हानी पोहोचवतील या विवंचनेत असतात. चलभाष यंत्रे स्वतःच करत असलेला प्रारण उत्सर्ग, धोक्याच्या पातळीचा असतो आणि एका अहवालाने मुलांना गरज नसताना त्यावरून बोलण्यापासून परावृत्त केले पाहिजे अशी शिफारस केली आहे. स्तंभातून होणारा प्रारणांचा उत्सर्ग चलभाष यंत्रांच्या तुलनेत कमी असतो. या बाबतीत यंत्रावरच्या बोलण्याचे काही सेकंद हे या संदर्भात 24 तासांच्या स्तंभ संपर्काइतके असतात. या दोन्ही स्त्रोतांकडून होणारी ही प्रारणे आंतरराष्ट्रीय मार्गदर्शक तत्त्वांनुसार धोक्याच्या मानलेल्या पातळीच्या खाली असतात पण ही मार्गदर्शक तत्त्वे जोखमीची पातळी अचूकतेने प्रतिबिंबित करतात काय याची खात्री आतापर्यंत तरी कोणीही दिलेली नाही.\nवरील परिच्छेदावरून काढता येईल असे सर्वात उचित अनुमान ठरेल असे विधान निवडा.",
    "question_english": "Many people who live near to mobile phone masts are worried that radiation from these masts will damage their health. Mobile phones themselves have also been suspected of emitting dangerous levels of radiation, and a report recommended that children should be discouraged from making non-essential calls. Emission of radiation from the masts is much lower than that from a mobile phone. A few seconds making a phone call is comparable to 24 hours of exposure from a mast. Radiation from both these sources is below the international guidelines as to what is a dangerous level, but no one can yet be certain if these guidelines accurately reflect the level of risk.\nSelect the statement that can be drawn as a most appropriate conclusion from the above passage.",
    "options_marathi": [
      "चलभाष यंत्रे वापरणारे लोक स्वतःच्या आरोग्याला जोखमीत टाकतात.",
      "जर चलभाष यंत्रांचा व्यापक उपयोग आरोग्याला हानिकारक नसेल तर स्तंभातून होणारे प्रारण धोकादायक असणे शक्य नाही.",
      "आंतरराष्ट्रीय मार्गदर्शक तत्त्वे कमी पातळीच्या प्रारणांपासून आरोग्याला असणाऱ्या धोक्याला कमी लेखतात.",
      "चलभाष स्तंभाच्या जवळ राहिल्यामुळे आरोग्याला असलेला धोका चलभाष यंत्राच्या वापरापासून असलेल्या धोक्याच्या तुलनेत कमी आहे."
    ],
    "options_english": [
      "People who use mobile phones are putting their health at risk.",
      "If extensive use of mobile phones is not harmful to health, radiation from a mast is unlikely to be a risk.",
      "The international guidelines underestimate the risk to health from low levels of radiation.",
      "The health risk from living near a phone mast is lower than that from using a mobile phone."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Inference, Critical Reasoning",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Let's break down the passage and evaluate the options:\nKey points from the passage:\n1.  People worry about mast radiation, but mobile phones are also suspected of dangerous radiation.\n2.  A report recommends discouraging children from non-essential mobile calls.\n3.  Mast radiation is MUCH LOWER than mobile phone radiation.\n4.  A few seconds on a mobile phone is comparable to 24 hours of exposure from a mast (highlighting the higher intensity of phone radiation).\n5.  Both sources are below international guidelines, but the accuracy of these guidelines in reflecting risk is uncertain.\n\nEvaluating the options:\n1.  'People who use mobile phones are putting their health at risk.' - The passage states 'suspected of emitting dangerous levels' and 'no one can yet be certain if these guidelines accurately reflect the level of risk'. This is a suspicion and uncertainty, not a definitive conclusion that people *are* putting their health at risk.\n2.  'If extensive use of mobile phones is not harmful to health, radiation from a mast is unlikely to be a risk.' - This is a strong logical inference. The passage explicitly states that mast radiation is 'much lower' than mobile phone radiation, and 'a few seconds making a phone call is comparable to 24 hours of exposure from a mast'. If the higher, more intense exposure from mobile phones is considered safe (or not harmful), then the significantly lower exposure from masts would logically be even less likely to be harmful. This conclusion directly follows from the comparative radiation levels.\n3.  'The international guidelines underestimate the risk to health from low levels of radiation.' - The passage states 'no one can yet be certain if these guidelines accurately reflect the level of risk'. This indicates uncertainty, not a definitive underestimation. It's a possibility, but not a conclusion that can be *drawn* as a fact from the text.\n4.  'The health risk from living near a phone mast is lower than that from using a mobile phone.' - This statement is factually supported by the passage's comparison of radiation levels. However, option 2 is a more comprehensive *conclusion* that synthesizes this factual comparison with the overall concern about health risk. Option 2 draws an implication about the risk, whereas option 4 is more of a direct summary of a comparative fact. Given the context of drawing a 'most appropriate conclusion', option 2 provides a deeper inference.",
    "explanation_marathi": "परिच्छेद आणि पर्यायांचे विश्लेषण करूया:\nपरिच्छेदातील मुख्य मुद्दे:\n1.  मोबाईल टॉवरच्या रेडिएशनबद्दल लोकांना चिंता आहे, परंतु मोबाईल फोनमधूनही धोकादायक रेडिएशन उत्सर्जित होत असल्याचा संशय आहे.\n2.  एका अहवालाने मुलांना अनावश्यक मोबाईल कॉल करण्यापासून परावृत्त करण्याची शिफारस केली आहे.\n3.  टॉवरमधून होणारे रेडिएशन मोबाईल फोनमधून होणाऱ्या रेडिएशनपेक्षा खूप कमी असते.\n4.  मोबाईल फोनवर काही सेकंद बोलणे हे टॉवरच्या 24 तासांच्या संपर्काइतके असते (मोबाईल फोनच्या रेडिएशनची जास्त तीव्रता दर्शवते).\n5.  दोन्ही स्त्रोतांकडून होणारे रेडिएशन आंतरराष्ट्रीय मार्गदर्शक तत्त्वांनुसार धोकादायक मानल्या गेलेल्या पातळीच्या खाली आहे, परंतु ही मार्गदर्शक तत्त्वे जोखमीची पातळी अचूकपणे दर्शवतात की नाही याची खात्री कोणीही दिलेली नाही.\n\nपर्यायांचे मूल्यांकन:\n1.  'चलभाष यंत्रे वापरणारे लोक स्वतःच्या आरोग्याला जोखमीत टाकतात.' - परिच्छेदात 'धोकादायक पातळीचे उत्सर्जन करत असल्याचा संशय आहे' आणि 'ही मार्गदर्शक तत्त्वे जोखमीची पातळी अचूकतेने प्रतिबिंबित करतात काय याची खात्री आतापर्यंत तरी कोणीही दिलेली नाही' असे म्हटले आहे. हा संशय आणि अनिश्चितता आहे, निश्चित निष्कर्ष नाही की लोक त्यांच्या आरोग्याला धोक्यात घालत आहेत.\n2.  'जर चलभाष यंत्रांचा व्यापक उपयोग आरोग्याला हानिकारक नसेल तर स्तंभातून होणारे प्रारण धोकादायक असणे शक्य नाही.' - हा एक मजबूत तार्किक निष्कर्ष आहे. परिच्छेदात स्पष्टपणे म्हटले आहे की टॉवरमधून होणारे रेडिएशन मोबाईल फोनमधून होणाऱ्या रेडिएशनपेक्षा 'खूप कमी' असते आणि 'यंत्रावरच्या बोलण्याचे काही सेकंद हे 24 तासांच्या स्तंभ संपर्काइतके असतात'. जर मोबाईल फोनमधून होणारे जास्त आणि तीव्र रेडिएशन सुरक्षित (किंवा हानिकारक नाही) मानले जात असेल, तर टॉवरमधून होणारे लक्षणीयरीत्या कमी रेडिएशन हानिकारक असण्याची शक्यता कमी आहे. हा निष्कर्ष तुलनात्मक रेडिएशन पातळीतून थेट येतो.\n3.  'आंतरराष्ट्रीय मार्गदर्शक तत्त्वे कमी पातळीच्या प्रारणांपासून आरोग्याला असणाऱ्या धोक्याला कमी लेखतात.' - परिच्छेदात 'ही मार्गदर्शक तत्त्वे जोखमीची पातळी अचूकतेने प्रतिबिंबित करतात काय याची खात्री आतापर्यंत तरी कोणीही दिलेली नाही' असे म्हटले आहे. हे अनिश्चितता दर्शवते, निश्चित कमी लेखणे नाही. ही एक शक्यता आहे, परंतु मजकुरातून वस्तुस्थिती म्हणून काढता येणारा निष्कर्ष नाही.\n4.  'चलभाष स्तंभाच्या जवळ राहिल्यामुळे आरोग्याला असलेला धोका चलभाष यंत्राच्या वापरापासून असलेल्या धोक्याच्या तुलनेत कमी आहे.' - हे विधान परिच्छेदातील रेडिएशन पातळीच्या तुलनेने वस्तुस्थितीनुसार समर्थित आहे. तथापि, पर्याय 2 हा एक अधिक व्यापक 'निष्कर्ष' आहे जो या वस्तुस्थितीच्या तुलनेला आरोग्याच्या धोक्याबद्दलच्या एकूण चिंतेशी जोडतो. पर्याय 2 धोक्याबद्दल एक निहितार्थ काढतो, तर पर्याय 4 हा तुलनात्मक वस्तुस्थितीचा थेट सारांश आहे. 'सर्वात उचित अनुमान' काढण्याच्या संदर्भात, पर्याय 2 अधिक सखोल निष्कर्ष प्रदान करतो.",
    "options_breakdown": [
      {
        "option_english": "People who use mobile phones are putting their health at risk.",
        "option_marathi": "चलभाष यंत्रे वापरणारे लोक स्वतःच्या आरोग्याला जोखमीत टाकतात.",
        "is_correct": false,
        "reason_english": "The passage states that mobile phones are 'suspected' of emitting dangerous radiation and that guidelines' accuracy is 'uncertain', not that risk is a definitive fact.",
        "reason_marathi": "परिच्छेदात म्हटले आहे की मोबाईल फोन धोकादायक रेडिएशन उत्सर्जित करत असल्याचा 'संशय' आहे आणि मार्गदर्शक तत्त्वांची अचूकता 'अनिश्चित' आहे, धोका ही निश्चित वस्तुस्थिती नाही."
      },
      {
        "option_english": "If extensive use of mobile phones is not harmful to health, radiation from a mast is unlikely to be a risk.",
        "option_marathi": "जर चलभाष यंत्रांचा व्यापक उपयोग आरोग्याला हानिकारक नसेल तर स्तंभातून होणारे प्रारण धोकादायक असणे शक्य नाही.",
        "is_correct": true,
        "reason_english": "This is the most appropriate conclusion. The passage highlights that mobile phone radiation is much higher than mast radiation. Therefore, if the higher source (mobile phone) is deemed safe, the lower source (mast) would logically be even safer.",
        "reason_marathi": "हा सर्वात योग्य निष्कर्ष आहे. परिच्छेदात असे नमूद केले आहे की मोबाईल फोनचे रेडिएशन टॉवरच्या रेडिएशनपेक्षा खूप जास्त आहे. म्हणून, जर उच्च स्त्रोत (मोबाईल फोन) सुरक्षित मानला गेला, तर कमी स्त्रोत (टॉवर) तार्किकदृष्ट्या अधिक सुरक्षित असेल."
      },
      {
        "option_english": "The international guidelines underestimate the risk to health from low levels of radiation.",
        "option_marathi": "आंतरराष्ट्रीय मार्गदर्शक तत्त्वे कमी पातळीच्या प्रारणांपासून आरोग्याला असणाऱ्या धोक्याला कमी लेखतात.",
        "is_correct": false,
        "reason_english": "The passage only states that 'no one can yet be certain if these guidelines accurately reflect the level of risk', implying uncertainty, not a definitive underestimation.",
        "reason_marathi": "परिच्छेदात फक्त 'ही मार्गदर्शक तत्त्वे जोखमीची पातळी अचूकतेने प्रतिबिंबित करतात काय याची खात्री आतापर्यंत तरी कोणीही दिलेली नाही' असे म्हटले आहे, याचा अर्थ अनिश्चितता आहे, निश्चित कमी लेखणे नाही."
      },
      {
        "option_english": "The health risk from living near a phone mast is lower than that from using a mobile phone.",
        "option_marathi": "चलभाष स्तंभाच्या जवळ राहिल्यामुळे आरोग्याला असलेला धोका चलभाष यंत्राच्या वापरापासून असलेल्या धोक्याच्या तुलनेत कमी आहे.",
        "is_correct": false,
        "reason_english": "While factually supported by the passage, this is a direct statement of comparison rather than a comprehensive conclusion or inference about the overall risk implications.",
        "reason_marathi": "परिच्छेदाद्वारे वस्तुस्थितीनुसार समर्थित असले तरी, हे एकूण जोखमीच्या निहितार्थांबद्दलचा एक व्यापक निष्कर्ष किंवा अनुमान नसून तुलनेचे थेट विधान आहे."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "3 वर्षांच्या अंतराने जन्मलेल्या 5 मुलांच्या वयाची बेरीज 50 वर्षे आहे तर सर्वात लहान मुलाचे वय निवडा.",
    "question_english": "The sum of ages of 5 children born at the interval of 3 years each is 50 years. Select the option that indicates age of youngest child.",
    "options_marathi": [
      "3",
      "4",
      "5",
      "7"
    ],
    "options_english": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Age Problems, Arithmetic Progression",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let the age of the youngest child be 'x' years.\nSince the children are born at intervals of 3 years, their ages form an arithmetic progression.\n\nThe ages of the 5 children will be:\n1.  x\n2.  x + 3\n3.  x + 6\n4.  x + 9\n5.  x + 12\n\nThe sum of their ages is given as 50 years.\nSo, x + (x + 3) + (x + 6) + (x + 9) + (x + 12) = 50\n\nCombine the 'x' terms and the constant terms:\n(x + x + x + x + x) + (3 + 6 + 9 + 12) = 50\n5x + 30 = 50\n\nNow, solve for x:\n5x = 50 - 30\n5x = 20\nx = 20 / 5\nx = 4\n\nSo, the age of the youngest child is 4 years.\n\nLet's verify the ages:\n4, 7, 10, 13, 16\nSum = 4 + 7 + 10 + 13 + 16 = 50. This is correct.",
    "explanation_marathi": "सर्वात लहान मुलाचे वय 'x' वर्षे मानू.\nमुले 3 वर्षांच्या अंतराने जन्माला आल्यामुळे, त्यांची वये अंकगणितीय श्रेणीत (Arithmetic Progression) आहेत.\n\n5 मुलांची वये अशी असतील:\n1.  x\n2.  x + 3\n3.  x + 6\n4.  x + 9\n5.  x + 12\n\nत्यांच्या वयांची बेरीज 50 वर्षे दिली आहे.\nम्हणून, x + (x + 3) + (x + 6) + (x + 9) + (x + 12) = 50\n\n'x' पदे आणि स्थिर पदे एकत्र करा:\n(x + x + x + x + x) + (3 + 6 + 9 + 12) = 50\n5x + 30 = 50\n\nआता, x साठी सोडवा:\n5x = 50 - 30\n5x = 20\nx = 20 / 5\nx = 4\n\nम्हणून, सर्वात लहान मुलाचे वय 4 वर्षे आहे.\n\nवये तपासूया:\n4, 7, 10, 13, 16\nबेरीज = 4 + 7 + 10 + 13 + 16 = 50. हे बरोबर आहे.",
    "options_breakdown": [
      {
        "option_english": "3",
        "option_marathi": "3",
        "is_correct": false,
        "reason_english": "If the youngest child is 3, the ages would be 3, 6, 9, 12, 15. Their sum is 45, not 50.",
        "reason_marathi": "जर सर्वात लहान मूल 3 वर्षांचे असेल, तर वये 3, 6, 9, 12, 15 अशी असतील. त्यांची बेरीज 45 आहे, 50 नाही."
      },
      {
        "option_english": "4",
        "option_marathi": "4",
        "is_correct": true,
        "reason_english": "If the youngest child is 4, the ages are 4, 7, 10, 13, 16. Their sum is 50, which matches the given condition.",
        "reason_marathi": "जर सर्वात लहान मूल 4 वर्षांचे असेल, तर वये 4, 7, 10, 13, 16 अशी असतील. त्यांची बेरीज 50 आहे, जी दिलेल्या अटीशी जुळते."
      },
      {
        "option_english": "5",
        "option_marathi": "5",
        "is_correct": false,
        "reason_english": "If the youngest child is 5, the ages would be 5, 8, 11, 14, 17. Their sum is 55, not 50.",
        "reason_marathi": "जर सर्वात लहान मूल 5 वर्षांचे असेल, तर वये 5, 8, 11, 14, 17 अशी असतील. त्यांची बेरीज 55 आहे, 50 नाही."
      },
      {
        "option_english": "7",
        "option_marathi": "7",
        "is_correct": false,
        "reason_english": "If the youngest child is 7, the ages would be 7, 10, 13, 16, 19. Their sum is 65, not 50.",
        "reason_marathi": "जर सर्वात लहान मूल 7 वर्षांचे असेल, तर वये 7, 10, 13, 16, 19 अशी असतील. त्यांची बेरीज 65 आहे, 50 नाही."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "बराच महाग असला तरी, मोबाईल ही चैनीची वस्तू नाही. कारण एखादी व्यक्ती मोबाईलच्या माध्यमातून खूप गोष्टी शिकू शकते.\nवरील विधानावरुन खालीलपैकी कोणता निष्कर्ष काढता येऊ शकतो ?\nपर्यायी उत्तरे :",
    "question_english": "Though the mobile is much expensive, it is not a luxurious thing because one can learn many things through the medium of mobile.\nFrom the above statement, which conclusion one can draw from the following :\nAnswer Options:",
    "options_marathi": [
      "सर्व महाग वस्तू चैनीच्या समजल्या जातात.",
      "शिकण्यासाठी आवश्यक असणाऱ्या सर्व वस्तू चैनीच्या नसतात.",
      "शिकण्यासाठी मोबाईल आवश्यक आहे.",
      "मोबाईल ही चैनीची वस्तू नाही."
    ],
    "options_english": [
      "All expensive things are supposed to be luxurious.",
      "All necessary things for learning are not luxurious.",
      "Mobile is necessary for learning.",
      "Mobile is not a luxurious thing."
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Logical Deduction, Inference",
    "difficulty": "Medium",
    "trap_detected": "Implied vs Explicit Conclusion",
    "explanation_english": "The statement provided is: 'Though the mobile is much expensive, it is not a luxurious thing because one can learn many things through the medium of mobile.'\n\nThis statement presents an argument where a conclusion is explicitly stated and then supported by a reason.\n\nArgument structure:\nPremise 1: Mobile is expensive.\nConclusion: Mobile is not a luxurious thing.\nReason (supporting the conclusion): One can learn many things through the medium of mobile.\n\nLet's evaluate the options:\n1.  'All expensive things are supposed to be luxurious.' - This contradicts the very first part of the statement, 'Though the mobile is much expensive, it is not a luxurious thing.' So, this cannot be a conclusion.\n2.  'All necessary things for learning are not luxurious.' - This is an underlying assumption or a general principle that the argument implicitly relies on. The statement implies that because mobile helps in learning, it's not a luxury. This is a strong inference about the *logic* of the argument, but not the *explicit* conclusion of the given statement.\n3.  'Mobile is necessary for learning.' - The statement says 'one can learn many things through the medium of mobile', which implies utility, not necessity. It doesn't claim that mobile is indispensable for learning. This is too strong a claim to be a direct conclusion.\n4.  'Mobile is not a luxurious thing.' - This is the direct conclusion explicitly stated in the given sentence: 'it is not a luxurious thing because...'. The sentence itself is structured to present this as its main point. While it might seem like a mere restatement, in logical reasoning questions, if the conclusion is explicitly presented within the argument, it is considered a valid conclusion that can be drawn.",
    "explanation_marathi": "दिलेले विधान आहे: 'बराच महाग असला तरी, मोबाईल ही चैनीची वस्तू नाही. कारण एखादी व्यक्ती मोबाईलच्या माध्यमातून खूप गोष्टी शिकू शकते.'\n\nहे विधान एक युक्तिवाद सादर करते जिथे एक निष्कर्ष स्पष्टपणे सांगितला जातो आणि नंतर त्याला कारणाने समर्थन दिले जाते.\n\nयुक्तिवादाची रचना:\nआधार 1: मोबाईल महाग आहे.\nनिष्कर्ष: मोबाईल ही चैनीची वस्तू नाही.\nकारण (निष्कर्षाला समर्थन देणारे): मोबाईलच्या माध्यमातून खूप गोष्टी शिकता येतात.\n\nपर्यायांचे मूल्यांकन करूया:\n1.  'सर्व महाग वस्तू चैनीच्या समजल्या जातात.' - हे विधानाच्या अगदी पहिल्या भागाच्या विरुद्ध आहे, 'बराच महाग असला तरी, मोबाईल ही चैनीची वस्तू नाही.' त्यामुळे, हा निष्कर्ष असू शकत नाही.\n2.  'शिकण्यासाठी आवश्यक असणाऱ्या सर्व वस्तू चैनीच्या नसतात.' - हे एक अंतर्निहित गृहितक किंवा सामान्य तत्त्व आहे ज्यावर युक्तिवाद अप्रत्यक्षपणे अवलंबून आहे. विधान सूचित करते की मोबाईल शिकण्यास मदत करतो म्हणून तो चैनीची वस्तू नाही. हा युक्तिवादाच्या 'तर्का'बद्दल एक मजबूत अनुमान आहे, परंतु दिलेल्या विधानाचा 'स्पष्ट' निष्कर्ष नाही.\n3.  'शिकण्यासाठी मोबाईल आवश्यक आहे.' - विधान म्हणते की 'मोबाईलच्या माध्यमातून खूप गोष्टी शिकू शकते', याचा अर्थ उपयोगिता आहे, आवश्यकता नाही. ते शिकण्यासाठी मोबाईल अपरिहार्य आहे असा दावा करत नाही. हा थेट निष्कर्ष काढण्यासाठी खूप मजबूत दावा आहे.\n4.  'मोबाईल ही चैनीची वस्तू नाही.' - हा दिलेल्या वाक्यात स्पष्टपणे सांगितलेला थेट निष्कर्ष आहे: 'ती चैनीची वस्तू नाही कारण...'. वाक्य स्वतःच हा मुख्य मुद्दा म्हणून सादर करण्यासाठी रचले आहे. जरी हे केवळ पुनरावृत्ती वाटत असले तरी, तार्किक तर्क प्रश्नांमध्ये, जर निष्कर्ष युक्तिवादात स्पष्टपणे सादर केला असेल, तर तो काढता येणारा वैध निष्कर्ष मानला जातो.",
    "options_breakdown": [
      {
        "option_english": "All expensive things are supposed to be luxurious.",
        "option_marathi": "सर्व महाग वस्तू चैनीच्या समजल्या जातात.",
        "is_correct": false,
        "reason_english": "This statement directly contradicts the premise 'Though the mobile is much expensive, it is not a luxurious thing'.",
        "reason_marathi": "हे विधान 'बराच महाग असला तरी, मोबाईल ही चैनीची वस्तू नाही' या आधारभूत विधानाशी थेट विरोधाभास करते."
      },
      {
        "option_english": "All necessary things for learning are not luxurious.",
        "option_marathi": "शिकण्यासाठी आवश्यक असणाऱ्या सर्व वस्तू चैनीच्या नसतात.",
        "is_correct": false,
        "reason_english": "This is an implied general principle that underpins the argument, rather than the direct conclusion explicitly stated in the given sentence.",
        "reason_marathi": "हे एक अंतर्निहित सामान्य तत्त्व आहे जे युक्तिवादाला आधार देते, दिलेल्या वाक्यात स्पष्टपणे सांगितलेला थेट निष्कर्ष नाही."
      },
      {
        "option_english": "Mobile is necessary for learning.",
        "option_marathi": "शिकण्यासाठी मोबाईल आवश्यक आहे.",
        "is_correct": false,
        "reason_english": "The statement says one 'can learn many things', not that it is 'necessary' for learning. This is an overstatement.",
        "reason_marathi": "विधान म्हणते की 'खूप गोष्टी शिकू शकते', 'शिकण्यासाठी आवश्यक' असे नाही. हे अतिशयोक्तीपूर्ण विधान आहे."
      },
      {
        "option_english": "Mobile is not a luxurious thing.",
        "option_marathi": "मोबाईल ही चैनीची वस्तू नाही.",
        "is_correct": true,
        "reason_english": "This is the explicit conclusion presented in the given statement itself ('it is not a luxurious thing because...'). The question asks what conclusion can be drawn, and this is directly stated as the conclusion of the argument.",
        "reason_marathi": "हा दिलेल्या विधानातच स्पष्टपणे सादर केलेला निष्कर्ष आहे ('ती चैनीची वस्तू नाही कारण...'). प्रश्न विचारतो की कोणता निष्कर्ष काढता येऊ शकतो, आणि हा युक्तिवादाचा निष्कर्ष म्हणून थेट सांगितला आहे."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "एक टोला दर 18 मिनिटानंतर वाजतो. दुसरा टोला दर 24 मिनिटानंतर वाजतो. तिसरा टोला दर 32 मिनिटानंतर वाजतो. जर हे तीनही टोले सकाळी 8 वाजता एकत्र वाजले तर त्यानंतर पुन्हा ते एकत्र वाजण्याची वेळ निवडा.",
    "question_english": "A bell rings every 18 minutes. Second bell rings every 24 minutes. A third bell rings every 32 minutes. If all three bells ring at 8 am together then select the next time they all ring together.",
    "options_marathi": [
      "12 वा. 40 मिनिटे",
      "12 वा. 48 मिनिटे",
      "12 वा. 56 मिनिटे",
      "13 वा. 4 मिनिटे"
    ],
    "options_english": [
      "12 hrs 40 mins",
      "12 hrs 48 mins",
      "12 hrs 56 mins",
      "13 hrs 4 mins"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "LCM (Least Common Multiple)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "To find when the bells will ring together again, we need to find the Least Common Multiple (LCM) of the intervals at which they ring. The intervals are 18 minutes, 24 minutes, and 32 minutes. First, find the prime factorization of each number: 18 = 2 × 3², 24 = 2³ × 3, and 32 = 2⁵. The LCM is found by taking the highest power of all prime factors present: LCM(18, 24, 32) = 2⁵ × 3² = 32 × 9 = 288 minutes. Convert 288 minutes into hours and minutes: 288 minutes / 60 minutes/hour = 4 hours and 48 minutes. If the bells rang together at 8:00 AM, they will ring together again after 4 hours and 48 minutes, which is 8:00 AM + 4 hours 48 minutes = 12:48 PM.",
    "explanation_marathi": "घंटा पुन्हा कधी एकत्र वाजतील हे शोधण्यासाठी, त्या वाजण्याच्या अंतरांचा लसावि (लघुत्तम साधारण विभाज्य) काढणे आवश्यक आहे. हे अंतर 18 मिनिटे, 24 मिनिटे आणि 32 मिनिटे आहे. प्रथम, प्रत्येक संख्येचे मूळ अवयव काढा: 18 = 2 × 3², 24 = 2³ × 3, आणि 32 = 2⁵. लसावि काढण्यासाठी, सर्व मूळ अवयवांची सर्वात मोठी घातांक घ्या: लसावि(18, 24, 32) = 2⁵ × 3² = 32 × 9 = 288 मिनिटे. 288 मिनिटांना तास आणि मिनिटांमध्ये रूपांतरित करा: 288 मिनिटे / 60 मिनिटे/तास = 4 तास आणि 48 मिनिटे. जर घंटा सकाळी 8:00 वाजता एकत्र वाजल्या असतील, तर त्या पुन्हा 4 तास आणि 48 मिनिटांनंतर एकत्र वाजतील, म्हणजे सकाळी 8:00 + 4 तास 48 मिनिटे = दुपारी 12:48 वाजता.",
    "options_breakdown": [
      {
        "option_english": "12 hrs 40 mins",
        "option_marathi": "12 वा. 40 मिनिटे",
        "is_correct": false,
        "reason_english": "This would imply an LCM of 280 minutes (4 hours 40 minutes), which is incorrect for 18, 24, and 32.",
        "reason_marathi": "याचा अर्थ 280 मिनिटांचा (4 तास 40 मिनिटे) लसावि असेल, जो 18, 24 आणि 32 साठी चुकीचा आहे."
      },
      {
        "option_english": "12 hrs 48 mins",
        "option_marathi": "12 वा. 48 मिनिटे",
        "is_correct": true,
        "reason_english": "The LCM of 18, 24, and 32 minutes is 288 minutes, which is 4 hours and 48 minutes. Adding this to 8:00 AM gives 12:48 PM.",
        "reason_marathi": "18, 24 आणि 32 मिनिटांचा लसावि 288 मिनिटे आहे, म्हणजे 4 तास आणि 48 मिनिटे. हे सकाळी 8:00 वाजता जोडल्यास दुपारी 12:48 वाजता येते."
      },
      {
        "option_english": "12 hrs 56 mins",
        "option_marathi": "12 वा. 56 मिनिटे",
        "is_correct": false,
        "reason_english": "This would imply an LCM of 296 minutes (4 hours 56 minutes), which is incorrect.",
        "reason_marathi": "याचा अर्थ 296 मिनिटांचा (4 तास 56 मिनिटे) लसावि असेल, जो चुकीचा आहे."
      },
      {
        "option_english": "13 hrs 4 mins",
        "option_marathi": "13 वा. 4 मिनिटे",
        "is_correct": false,
        "reason_english": "This would imply an LCM of 304 minutes (5 hours 4 minutes), which is incorrect.",
        "reason_marathi": "याचा अर्थ 304 मिनिटांचा (5 तास 4 मिनिटे) लसावि असेल, जो चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "पुढील आलेख एका विक्रेय वस्तूच्या मासिक किंमती दाखवतो.\nदाखवलेल्या माहितीचा उपयोग करून पर्यायांतील चुकीचे विधान निवडा.\n(1) ऑक्टोबर-नोव्हेंबर दरम्यान विक्रेय वस्तूच्या किंमतीत सर्वात जास्त बदल झाला.\n(2) जानेवारी-फेब्रुवारी दरम्यान विक्रेय वस्तूच्या किंमती काहीशा स्थिर होत्या.\n(3) फेब्रुवारीनंतर विक्रेय वस्तूच्या किंमती 40 रुपयांपेक्षा कमी होतील अशी अटकळ बांधता येते.\n(4) सप्टेंबर महिन्यात वस्तूच्या किंमती 30 ते 40 रुपयांदरम्यान कोठेतरी होत्या.",
    "question_english": "Following graph shows month-wise prices of certain commodity.\nSelect the false statement from given options using information depicted.\n(1) The prices of the commodity were highly varied during October-November.\n(2) The prices of the commodity were somewhat steady during January-February.\n(3) It can be predicted that the prices of commodity will be lower than 40 after February.\n(4) The prices of the commodity were somewhere between 30 to 40 in September.",
    "options_marathi": [
      "ऑक्टोबर-नोव्हेंबर दरम्यान विक्रेय वस्तूच्या किंमतीत सर्वात जास्त बदल झाला.",
      "जानेवारी-फेब्रुवारी दरम्यान विक्रेय वस्तूच्या किंमती काहीशा स्थिर होत्या.",
      "फेब्रुवारीनंतर विक्रेय वस्तूच्या किंमती 40 रुपयांपेक्षा कमी होतील अशी अटकळ बांधता येते.",
      "सप्टेंबर महिन्यात वस्तूच्या किंमती 30 ते 40 रुपयांदरम्यान कोठेतरी होत्या."
    ],
    "options_english": [
      "The prices of the commodity were highly varied during October-November.",
      "The prices of the commodity were somewhat steady during January-February.",
      "It can be predicted that the prices of commodity will be lower than 40 after February.",
      "The prices of the commodity were somewhere between 30 to 40 in September."
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Data Interpretation (Graph Analysis)",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of Prediction",
    "explanation_english": "The question asks to identify the false statement based on a graph showing month-wise prices. A graph typically presents historical data. While one can observe trends or make inferences about past behavior, making definitive predictions about future events (like prices 'will be lower than 40 after February') based solely on a simple historical graph is generally not possible without additional forecasting models or information. The other statements describe observations or factual ranges that could be directly verified from the graph. Therefore, a statement making a certain prediction about the future is most likely the false one, as a graph only shows what has happened, not what will happen.",
    "explanation_marathi": "हा प्रश्न मासिक किमती दर्शविणाऱ्या आलेखावर आधारित चुकीचे विधान ओळखण्यास सांगतो. आलेख सामान्यतः ऐतिहासिक डेटा सादर करतो. भूतकाळातील प्रवृत्तींचे निरीक्षण करता येते किंवा निष्कर्ष काढता येतात, परंतु केवळ एका साध्या ऐतिहासिक आलेखावर आधारित भविष्यातील घटनांबद्दल (जसे की 'फेब्रुवारीनंतर वस्तूच्या किंमती 40 रुपयांपेक्षा कमी होतील') निश्चित अंदाज लावणे, अतिरिक्त अंदाज मॉडेल किंवा माहितीशिवाय शक्य नसते. इतर विधाने निरीक्षणांचे किंवा तथ्यात्मक श्रेणींचे वर्णन करतात जे आलेखातून थेट पडताळले जाऊ शकतात. त्यामुळे, भविष्याबद्दल निश्चित अंदाज लावणारे विधान चुकीचे असण्याची शक्यता जास्त असते, कारण आलेख केवळ काय घडले हे दर्शवतो, काय घडेल हे नाही.",
    "options_breakdown": [
      {
        "option_english": "The prices of the commodity were highly varied during October-November.",
        "option_marathi": "ऑक्टोबर-नोव्हेंबर दरम्यान विक्रेय वस्तूच्या किंमतीत सर्वात जास्त बदल झाला.",
        "is_correct": false,
        "reason_english": "This statement could be true or false depending on the specific graph. If the graph shows a steep rise or fall in prices during this period, it would be true. Without the actual graph, we assume it's a plausible observation.",
        "reason_marathi": "हे विधान विशिष्ट आलेखावर अवलंबून खरे किंवा खोटे असू शकते. जर आलेखात या काळात किमतींमध्ये मोठी वाढ किंवा घट दिसत असेल, तर ते खरे असेल. प्रत्यक्ष आलेखाशिवाय, आम्ही ते एक संभाव्य निरीक्षण मानतो."
      },
      {
        "option_english": "The prices of the commodity were somewhat steady during January-February.",
        "option_marathi": "जानेवारी-फेब्रुवारी दरम्यान विक्रेय वस्तूच्या किंमती काहीशा स्थिर होत्या.",
        "is_correct": false,
        "reason_english": "This statement could be true or false depending on the specific graph. If the graph shows a relatively flat line during this period, it would be true. We assume it's a plausible observation.",
        "reason_marathi": "हे विधान विशिष्ट आलेखावर अवलंबून खरे किंवा खोटे असू शकते. जर आलेखात या काळात तुलनेने सपाट रेषा दिसत असेल, तर ते खरे असेल. आम्ही ते एक संभाव्य निरीक्षण मानतो."
      },
      {
        "option_english": "It can be predicted that the prices of commodity will be lower than 40 after February.",
        "option_marathi": "फेब्रुवारीनंतर विक्रेय वस्तूच्या किंमती 40 रुपयांपेक्षा कमी होतील अशी अटकळ बांधता येते.",
        "is_correct": true,
        "reason_english": "This is a prediction about future prices. A graph displays historical data and does not inherently provide predictive power for future events with certainty. Therefore, stating that such a prediction 'can be made' definitively from the graph is generally false.",
        "reason_marathi": "हे भविष्यातील किमतींबद्दलचे भाकीत आहे. आलेख ऐतिहासिक डेटा दर्शवतो आणि भविष्यातील घटनांबद्दल निश्चितपणे अंदाज लावण्याची क्षमता त्यात नसते. त्यामुळे, आलेखातून असे भाकीत 'करता येते' असे म्हणणे सामान्यतः चुकीचे आहे."
      },
      {
        "option_english": "The prices of the commodity were somewhere between 30 to 40 in September.",
        "option_marathi": "सप्टेंबर महिन्यात वस्तूच्या किंमती 30 ते 40 रुपयांदरम्यान कोठेतरी होत्या.",
        "is_correct": false,
        "reason_english": "This is a factual statement about a specific data point on the graph. If the graph shows the September price within this range, the statement would be true. We assume it's a plausible observation.",
        "reason_marathi": "हे आलेखावरील विशिष्ट डेटा बिंदूबद्दलचे तथ्यात्मक विधान आहे. जर आलेखात सप्टेंबरची किंमत या श्रेणीत दिसत असेल, तर हे विधान खरे असेल. आम्ही ते एक संभाव्य निरीक्षण मानतो."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "अमेय मंदिरापासून 8 किमी चालत गेला त्यानंतर 3 किमी डावीकडे चालत गेला. त्या ठिकाणाहून तो 12 किमी डावीकडे चालत गेला तर तो मंदिरापासून किती अंतरावर आहे ?",
    "question_english": "Amey went 8 km from a temple by walking then, he went to left by walking 3 km. From that place he went left by walking 12 km then how far is he from temple ?",
    "options_marathi": [
      "2 किमी",
      "3 किमी",
      "4 किमी",
      "5 किमी"
    ],
    "options_english": [
      "2 km",
      "3 km",
      "4 km",
      "5 km"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Distance and Direction",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's assume Amey starts at the temple (origin 0,0). First, he walks 8 km. Let's assume he walks East, so his position is (8,0). Then, he turns left and walks 3 km. Turning left from East means he walks North, so his position becomes (8,3). From there, he turns left again and walks 12 km. Turning left from North means he walks West. So, his x-coordinate changes by -12. His new position is (8-12, 3) = (-4, 3). To find the distance from the temple (0,0) to his final position (-4,3), we use the distance formula: distance = sqrt((x2-x1)² + (y2-y1)²) = sqrt((-4-0)² + (3-0)²) = sqrt((-4)² + 3²) = sqrt(16 + 9) = sqrt(25) = 5 km.",
    "explanation_marathi": "अमेय मंदिरापासून (मूळ बिंदू 0,0) सुरू करतो असे मानूया. प्रथम, तो 8 किमी चालतो. तो पूर्वेकडे चालतो असे मानूया, त्यामुळे त्याची स्थिती (8,0) आहे. त्यानंतर, तो डावीकडे वळतो आणि 3 किमी चालतो. पूर्वेकडून डावीकडे वळणे म्हणजे तो उत्तरेकडे चालतो, त्यामुळे त्याची स्थिती (8,3) होते. तिथून, तो पुन्हा डावीकडे वळतो आणि 12 किमी चालतो. उत्तरेकडून डावीकडे वळणे म्हणजे तो पश्चिमेकडे चालतो. त्यामुळे, त्याचा x-निर्देशांक -12 ने बदलतो. त्याची नवीन स्थिती (8-12, 3) = (-4, 3) आहे. मंदिरापासून (0,0) त्याच्या अंतिम स्थितीपर्यंत (-4,3) चे अंतर शोधण्यासाठी, आपण अंतर सूत्र वापरतो: अंतर = वर्गमूळ((x2-x1)² + (y2-y1)²) = वर्गमूळ((-4-0)² + (3-0)²) = वर्गमूळ((-4)² + 3²) = वर्गमूळ(16 + 9) = वर्गमूळ(25) = 5 किमी.",
    "options_breakdown": [
      {
        "option_english": "2 km",
        "option_marathi": "2 किमी",
        "is_correct": false,
        "reason_english": "This would be the remaining horizontal distance if he had walked 6 km left instead of 12 km (8-6=2).",
        "reason_marathi": "जर तो 12 किमी ऐवजी 6 किमी डावीकडे चालला असता (8-6=2), तर हे उर्वरित क्षैतिज अंतर असते."
      },
      {
        "option_english": "3 km",
        "option_marathi": "3 किमी",
        "is_correct": false,
        "reason_english": "This is only the vertical distance from the starting point, not the straight-line distance.",
        "reason_marathi": "हे फक्त सुरुवातीच्या बिंदूपासूनचे अनुलंब अंतर आहे, सरळ रेषेतील अंतर नाही."
      },
      {
        "option_english": "4 km",
        "option_marathi": "4 किमी",
        "is_correct": false,
        "reason_english": "This is only the absolute horizontal displacement from the starting point (|-4| = 4 km), not the straight-line distance.",
        "reason_marathi": "हे फक्त सुरुवातीच्या बिंदूपासूनचे निरपेक्ष क्षैतिज विस्थापन आहे (|-4| = 4 किमी), सरळ रेषेतील अंतर नाही."
      },
      {
        "option_english": "5 km",
        "option_marathi": "5 किमी",
        "is_correct": true,
        "reason_english": "Using the Pythagorean theorem (sqrt(4² + 3²)), the straight-line distance from the temple to his final position is 5 km.",
        "reason_marathi": "पायथागोरस प्रमेय (वर्गमूळ(4² + 3²)) वापरून, मंदिरापासून त्याच्या अंतिम स्थानापर्यंतचे सरळ रेषेतील अंतर 5 किमी आहे."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "P ही N ची पत्नी असून, S ही P ची नणंद आहे. R हा P चा मुलगा आहे आणि T हा N चा मुलगा आहे; तर S हीचे T शी नाते काय ?",
    "question_english": "P is wife of N and S is sister in law of P and R is the son of P and T is son of N then how is S related to T?",
    "options_marathi": [
      "सासू",
      "आत्या",
      "मावशी",
      "आईकडून आजी"
    ],
    "options_english": [
      "Mother in Law",
      "Paternal Aunt",
      "Maternal Aunt",
      "Maternal Grandmother"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Paternal vs. Maternal)",
    "explanation_english": "Let's break down the relationships: P is the wife of N, meaning N and P are a married couple. S is the sister-in-law of P. Since P is married to N, S must be N's sister (P's husband's sister). R is the son of P, and T is the son of N. This means R and T are siblings, and both are children of N and P. We need to find how S is related to T. Since S is N's sister, and N is T's father, S is T's paternal aunt (father's sister).",
    "explanation_marathi": "नातेसंबंधांचे विश्लेषण करूया: P ही N ची पत्नी आहे, म्हणजे N आणि P हे विवाहित जोडपे आहेत. S ही P ची नणंद आहे. P ही N शी विवाहित असल्याने, S ही N ची बहीण असणे आवश्यक आहे (P च्या पतीची बहीण). R हा P चा मुलगा आहे आणि T हा N चा मुलगा आहे. याचा अर्थ R आणि T हे भावंड आहेत आणि दोघेही N आणि P ची मुले आहेत. S चे T शी काय नाते आहे हे आपल्याला शोधायचे आहे. S ही N ची बहीण असल्याने आणि N हा T चा वडील असल्याने, S ही T ची आत्या (वडिलांची बहीण) आहे.",
    "options_breakdown": [
      {
        "option_english": "Mother in Law",
        "option_marathi": "सासू",
        "is_correct": false,
        "reason_english": "S is N's sister, not T's mother-in-law.",
        "reason_marathi": "S ही N ची बहीण आहे, T ची सासू नाही."
      },
      {
        "option_english": "Paternal Aunt",
        "option_marathi": "आत्या",
        "is_correct": true,
        "reason_english": "S is the sister of N (T's father), making her T's paternal aunt.",
        "reason_marathi": "S ही N (T चे वडील) ची बहीण आहे, त्यामुळे ती T ची आत्या आहे."
      },
      {
        "option_english": "Maternal Aunt",
        "option_marathi": "मावशी",
        "is_correct": false,
        "reason_english": "A maternal aunt would be P's sister.",
        "reason_marathi": "मावशी ही P ची बहीण असेल."
      },
      {
        "option_english": "Maternal Grandmother",
        "option_marathi": "आईकडून आजी",
        "is_correct": false,
        "reason_english": "This would be P's mother.",
        "reason_marathi": "ही P ची आई असेल."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "पश्चिम युरोपीय समाजातील वंशभेदाविरोधातील चळवळ आता जोर पकडत आहे याला आता व्यापक मान्यता मिळाली आहे. व्यापक स्थलांतराच्या परिणामी विविधतेला आणि बहुसांस्कृतिकतेला मुक्तद्वार देणारे समाज अल्पसंख्य समूहांना भोगावा लागणारा भेदभाव कमी व्हायला हातभार लावत आहेत. दुर्दैवाने वंशभेद अजूनही अस्तित्वात आहे. वांशिक भेदभाव असंतोष निर्माण करतो आणि समाजवस्त्राच्या नाजुक अशा विणीची मोडतोड करतो व यामुळे देशाचा लवचीकपणा अस्थिर होण्याची शक्यता असते.\nअधोरेखित केलेल्या दोन विधानांतील परस्पर संबंधाचे सर्वात उचित वर्णन करणारे विधान निवडा.",
    "question_english": "It is now widely acknowledged that the movement against racism in Western European societies is gaining momentum. Openness to diversity and multicultural societies resulting from mass immigration have contributed to reduce discrimination suffered by minority groups, unfortunately racial discrimination remains prevalent. Racial discrimination can create anarchy and damage the delicate fabric of society which can undermine a nation's resilience.\nSelect the statement that describes relationship between underlined statements most appropriately.",
    "options_marathi": [
      "दोन विधानांत कोणताही परस्परसंबंध नाही.",
      "2ऱ्या विधानातील परिणाम टाळण्यासाठी 1 ल्या विधानातील कृती केली जात आहे.",
      "2ऱ्या विधानातील कृती करून 1ल्या विधानातील परिणाम टाळला जात आहे.",
      "दोन्ही विधाने समाजात अस्तित्वात असलेल्या वंशभेदाचे व त्याच्या परिणामाचे वर्णन करतात."
    ],
    "options_english": [
      "There is no relation between both the statements.",
      "1st statement is an action that is taken for avoiding effect described in 2nd statement.",
      "2nd statement is an action that is taken for avoiding effect described in 1st statement.",
      "Both the statements are describing racial discrimination prevalent in societies and its effect."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Logical Reasoning (Statement Relationship)",
    "difficulty": "Medium",
    "trap_detected": "Nuance in Relationship",
    "explanation_english": "Assuming the last two sentences are the 'underlined statements': The first statement (S1) discusses how 'openness to diversity and multicultural societies' has contributed to reducing discrimination, even though it still exists. This 'openness' can be seen as an action or a condition. The second statement (S2) describes the severe negative effects of racial discrimination, such as creating anarchy and damaging society's fabric. The relationship is that the actions/conditions mentioned in S1 (promoting diversity) are undertaken precisely to prevent or mitigate the harmful effects described in S2. Therefore, S1 describes actions taken to avoid the negative consequences outlined in S2.",
    "explanation_marathi": "शेवटची दोन वाक्ये 'अधोरेखित विधाने' आहेत असे गृहीत धरल्यास: पहिले विधान (S1) 'विविधतेसाठी आणि बहुसांस्कृतिक समाजांसाठी खुलेपणा' कसा भेदभावाला कमी करण्यास मदत करतो, जरी तो अजूनही अस्तित्वात आहे, यावर चर्चा करते. हा 'खुलेपणा' एक कृती किंवा अट म्हणून पाहिला जाऊ शकतो. दुसरे विधान (S2) वांशिक भेदभावाचे गंभीर नकारात्मक परिणाम, जसे की अराजकता निर्माण करणे आणि समाजाच्या रचनेला हानी पोहोचवणे, याचे वर्णन करते. संबंध असा आहे की S1 मध्ये नमूद केलेल्या कृती/अटी (विविधतेला प्रोत्साहन देणे) S2 मध्ये वर्णन केलेले हानिकारक परिणाम टाळण्यासाठी किंवा कमी करण्यासाठी केल्या जातात. म्हणून, S1 हे S2 मध्ये नमूद केलेले नकारात्मक परिणाम टाळण्यासाठी केलेल्या कृतींचे वर्णन करते.",
    "options_breakdown": [
      {
        "option_english": "There is no relation between both the statements.",
        "option_marathi": "दोन विधानांत कोणताही परस्परसंबंध नाही.",
        "is_correct": false,
        "reason_english": "Both statements clearly discuss aspects of racial discrimination and its societal impact, indicating a strong relation.",
        "reason_marathi": "दोन्ही विधाने वांशिक भेदभाव आणि त्याचे सामाजिक परिणाम यावर चर्चा करतात, ज्यामुळे त्यांच्यात मजबूत संबंध असल्याचे दिसून येते."
      },
      {
        "option_english": "1st statement is an action that is taken for avoiding effect described in 2nd statement.",
        "option_marathi": "2ऱ्या विधानातील परिणाम टाळण्यासाठी 1 ल्या विधानातील कृती केली जात आहे.",
        "is_correct": true,
        "reason_english": "The 'openness to diversity and multicultural societies' mentioned in the first statement is an effort to reduce discrimination, thereby preventing the societal damage (anarchy, undermining resilience) described in the second statement.",
        "reason_marathi": "पहिल्या विधानातील 'विविधतेसाठी आणि बहुसांस्कृतिक समाजांसाठी खुलेपणा' हा भेदभावाला कमी करण्याचा प्रयत्न आहे, ज्यामुळे दुसऱ्या विधानात वर्णन केलेले सामाजिक नुकसान (अराजकता, देशाची लवचीकपणा अस्थिर होणे) टाळता येते."
      },
      {
        "option_english": "2nd statement is an action that is taken for avoiding effect described in 1st statement.",
        "option_marathi": "2ऱ्या विधानातील कृती करून 1ल्या विधानातील परिणाम टाळला जात आहे.",
        "is_correct": false,
        "reason_english": "The second statement describes negative effects, not actions taken to avoid effects described in the first statement.",
        "reason_marathi": "दुसरे विधान नकारात्मक परिणामांचे वर्णन करते, पहिल्या विधानात वर्णन केलेले परिणाम टाळण्यासाठी केलेल्या कृतींचे नाही."
      },
      {
        "option_english": "Both the statements are describing racial discrimination prevalent in societies and its effect.",
        "option_marathi": "दोन्ही विधाने समाजात अस्तित्वात असलेल्या वंशभेदाचे व त्याच्या परिणामाचे वर्णन करतात.",
        "is_correct": false,
        "reason_english": "While this is broadly true, option 2 provides a more precise and specific description of the cause-and-effect relationship between the two statements, which is what the question asks for.",
        "reason_marathi": "हे व्यापकपणे खरे असले तरी, पर्याय 2 दोन्ही विधानांमधील कारण-परिणाम संबंधाचे अधिक अचूक आणि विशिष्ट वर्णन करतो, जे प्रश्नात विचारले आहे."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "जनगणना 2001 ते 2011 दरम्यान लोकसंख्येत झालेल्या बदलाप्रमाणे जिल्ह्यांचा उतरता क्रम लावा.\n(a) ठाणे\n(b) सातारा\n(c) जालना\n(d) सिंधूदूर्ग\n(e) अहमदनगर\nपर्यायी उत्तरे :",
    "question_english": "Arrange the following districts in descending order as per the changes in population during census 2001 to 2011.\n(a) Thane\n(b) Satara\n(c) Jalna\n(d) Sindhudurg\n(e) Ahmednagar\nAnswer Options:",
    "options_marathi": [
      "(c), (a), (e), (d), (b)",
      "(a), (c), (e), (b), (d)",
      "(c), (a), (b), (e), (d)",
      "(d), (b), (c), (a), (e)"
    ],
    "options_english": [
      "(c), (a), (e), (d), (b)",
      "(a), (c), (e), (b), (d)",
      "(c), (a), (b), (e), (d)",
      "(d), (b), (c), (a), (e)"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Demography (Census Data)",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question requires knowledge of population growth rates for Maharashtra districts between the 2001 and 2011 censuses. The approximate decadal growth rates are: Thane (a) ~36%, Jalna (c) ~21.8%, Ahmednagar (e) ~12.4%, Satara (b) ~6.9%, and Sindhudurg (d) ~-2.2% (negative growth). Arranging these in descending order of population change gives: Thane (a) > Jalna (c) > Ahmednagar (e) > Satara (b) > Sindhudurg (d).",
    "explanation_marathi": "या प्रश्नासाठी 2001 ते 2011 च्या जनगणनेनुसार महाराष्ट्रातील जिल्ह्यांच्या लोकसंख्या वाढीच्या दराचे ज्ञान आवश्यक आहे. अंदाजे दशकीय वाढीचे दर असे आहेत: ठाणे (a) ~36%, जालना (c) ~21.8%, अहमदनगर (e) ~12.4%, सातारा (b) ~6.9%, आणि सिंधुदुर्ग (d) ~-2.2% (नकारात्मक वाढ). यांची लोकसंख्या बदलाच्या उतरत्या क्रमाने मांडणी केल्यास: ठाणे (a) > जालना (c) > अहमदनगर (e) > सातारा (b) > सिंधुदुर्ग (d) असा क्रम मिळतो.",
    "options_breakdown": [
      {
        "option_english": "(c), (a), (e), (d), (b)",
        "option_marathi": "(c), (a), (e), (d), (b)",
        "is_correct": false,
        "reason_english": "Jalna (c) did not have the highest growth; Thane (a) did.",
        "reason_marathi": "जालना (c) ची वाढ सर्वाधिक नव्हती; ठाणे (a) ची होती."
      },
      {
        "option_english": "(a), (c), (e), (b), (d)",
        "option_marathi": "(a), (c), (e), (b), (d)",
        "is_correct": true,
        "reason_english": "This sequence correctly represents the districts in descending order of population growth from 2001 to 2011: Thane (highest), Jalna, Ahmednagar, Satara, and Sindhudurg (negative growth).",
        "reason_marathi": "हा क्रम 2001 ते 2011 या काळात लोकसंख्या वाढीच्या उतरत्या क्रमाने जिल्ह्यांची योग्य मांडणी करतो: ठाणे (सर्वाधिक), जालना, अहमदनगर, सातारा आणि सिंधुदुर्ग (नकारात्मक वाढ)."
      },
      {
        "option_english": "(c), (a), (b), (e), (d)",
        "option_marathi": "(c), (a), (b), (e), (d)",
        "is_correct": false,
        "reason_english": "Satara (b) had lower growth than Ahmednagar (e).",
        "reason_marathi": "सातारा (b) ची वाढ अहमदनगर (e) पेक्षा कमी होती."
      },
      {
        "option_english": "(d), (b), (c), (a), (e)",
        "option_marathi": "(d), (b), (c), (a), (e)",
        "is_correct": false,
        "reason_english": "This order is incorrect; Sindhudurg (d) had negative growth, and Thane (a) had the highest growth.",
        "reason_marathi": "हा क्रम चुकीचा आहे; सिंधुदुर्ग (d) ची वाढ नकारात्मक होती, तर ठाणे (a) ची वाढ सर्वाधिक होती."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "महाराष्ट्र गृहनिर्माण व क्षेत्रविकास प्राधिकरणाची स्थापना ______ साली झाली.",
    "question_english": "Maharashtra Housing and Area Development Authority was established in ______",
    "options_marathi": [
      "1976",
      "1977",
      "1978",
      "1979"
    ],
    "options_english": [
      "1976",
      "1977",
      "1978",
      "1979"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "State Government Bodies (Housing)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Maharashtra Housing and Area Development Authority (MHADA) was established on 5th December 1977. It was formed under the Maharashtra Housing and Area Development Act, 1976, which consolidated and amended the laws relating to housing, repairing, and reconstruction of dangerous buildings and carrying out development works in Maharashtra.",
    "explanation_marathi": "महाराष्ट्र गृहनिर्माण व क्षेत्रविकास प्राधिकरणाची (म्हाडा) स्थापना 5 डिसेंबर 1977 रोजी झाली. महाराष्ट्र गृहनिर्माण व क्षेत्रविकास अधिनियम, 1976 अंतर्गत याची स्थापना करण्यात आली, ज्याने महाराष्ट्रातील गृहनिर्माण, धोकादायक इमारतींची दुरुस्ती व पुनर्रचना आणि विकास कामे करण्यासंबंधीचे कायदे एकत्रित केले आणि सुधारित केले.",
    "options_breakdown": [
      {
        "option_english": "1976",
        "option_marathi": "1976",
        "is_correct": false,
        "reason_english": "The Maharashtra Housing and Area Development Act was passed in 1976, but MHADA itself was established in 1977.",
        "reason_marathi": "महाराष्ट्र गृहनिर्माण व क्षेत्रविकास अधिनियम 1976 मध्ये मंजूर झाला, परंतु म्हाडाची स्थापना 1977 मध्ये झाली."
      },
      {
        "option_english": "1977",
        "option_marathi": "1977",
        "is_correct": true,
        "reason_english": "MHADA was established on 5th December 1977.",
        "reason_marathi": "म्हाडाची स्थापना 5 डिसेंबर 1977 रोजी झाली."
      },
      {
        "option_english": "1978",
        "option_marathi": "1978",
        "is_correct": false,
        "reason_english": "This is an incorrect year for MHADA's establishment.",
        "reason_marathi": "म्हाडाच्या स्थापनेसाठी हे वर्ष चुकीचे आहे."
      },
      {
        "option_english": "1979",
        "option_marathi": "1979",
        "is_correct": false,
        "reason_english": "This is an incorrect year for MHADA's establishment.",
        "reason_marathi": "म्हाडाच्या स्थापनेसाठी हे वर्ष चुकीचे आहे."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "______ ही ऊर्जा प्रदूषण विरहीत आहे.\n(a) कोळसा\n(b) पेट्रोल\n(c) जलविद्युत\n(d) अणुविद्युत\nपर्यायी उत्तरे :",
    "question_english": "______ is non-pollutant energy resource.\n(a) Coal\n(b) Petrol\n(c) Hydroelectricity\n(d) Atomic energy\nAnswer Options:",
    "options_marathi": [
      "फक्त (a)",
      "(a) आणि (b)",
      "फक्त (d)",
      "फक्त (c)"
    ],
    "options_english": [
      "Only (a)",
      "(a) and (b)",
      "Only (d)",
      "Only (c)"
    ],
    "correct_option_index": 4,
    "subject": "Science",
    "topic": "Energy Resources and Environment",
    "difficulty": "Easy",
    "trap_detected": "Definition of 'Non-pollutant'",
    "explanation_english": "When considering 'non-pollutant' in the context of energy generation, it typically refers to the absence of air pollutants or greenhouse gas emissions during operation. Coal and petrol are fossil fuels that release significant amounts of air pollutants and greenhouse gases when burned. Atomic energy, while not producing greenhouse gases, generates radioactive waste, which is a hazardous pollutant. Hydroelectricity, on the other hand, generates power by harnessing the flow of water, and during its operation, it does not release air pollutants or greenhouse gases, making it a non-pollutant energy resource in this context. While dam construction has environmental impacts, the energy generation process itself is clean.",
    "explanation_marathi": "ऊर्जा निर्मितीच्या संदर्भात 'प्रदूषण विरहित' याचा अर्थ सामान्यतः कार्यान्वित असताना वायू प्रदूषक किंवा हरितगृह वायूंचे उत्सर्जन नसणे असा होतो. कोळसा आणि पेट्रोल हे जीवाश्म इंधन आहेत जे जळल्यावर मोठ्या प्रमाणात वायू प्रदूषक आणि हरितगृह वायू सोडतात. अणुऊर्जा, हरितगृह वायू तयार करत नसली तरी, किरणोत्सर्गी कचरा निर्माण करते, जो एक धोकादायक प्रदूषक आहे. याउलट, जलविद्युत ऊर्जा पाण्याच्या प्रवाहाचा वापर करून वीज निर्माण करते आणि तिच्या कार्यान्वित असताना वायू प्रदूषक किंवा हरितगृह वायू सोडत नाही, ज्यामुळे ती या संदर्भात प्रदूषण विरहित ऊर्जा स्त्रोत आहे. धरणाच्या बांधकामाचे पर्यावरणीय परिणाम असले तरी, ऊर्जा निर्मिती प्रक्रिया स्वतः स्वच्छ आहे.",
    "options_breakdown": [
      {
        "option_english": "Only (a)",
        "option_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "Coal is a major source of air pollution and greenhouse gas emissions.",
        "reason_marathi": "कोळसा हा वायू प्रदूषण आणि हरितगृह वायू उत्सर्जनाचा एक प्रमुख स्त्रोत आहे."
      },
      {
        "option_english": "(a) and (b)",
        "option_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "Both coal and petrol are highly polluting fossil fuels.",
        "reason_marathi": "कोळसा आणि पेट्रोल दोन्ही अत्यंत प्रदूषित करणारे जीवाश्म इंधन आहेत."
      },
      {
        "option_english": "Only (d)",
        "option_marathi": "फक्त (d)",
        "is_correct": false,
        "reason_english": "Atomic energy produces radioactive waste, which is a significant and hazardous pollutant.",
        "reason_marathi": "अणुऊर्जा किरणोत्सर्गी कचरा निर्माण करते, जो एक महत्त्वपूर्ण आणि धोकादायक प्रदूषक आहे."
      },
      {
        "option_english": "Only (c)",
        "option_marathi": "फक्त (c)",
        "is_correct": true,
        "reason_english": "Hydroelectricity is considered a clean energy source as it does not produce air pollutants or greenhouse gases during operation.",
        "reason_marathi": "जलविद्युत ऊर्जा स्वच्छ ऊर्जा स्त्रोत मानली जाते कारण ती कार्यान्वित असताना वायू प्रदूषक किंवा हरितगृह वायू सोडत नाही."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "बीड जिल्हा महाराष्ट्रातील ______ प्रशासकीय विभागात आहे.",
    "question_english": "District Beed is in the ______ division of Maharashtra.",
    "options_marathi": [
      "औरंगाबाद",
      "नाशिक",
      "अमरावती",
      "पुणे"
    ],
    "options_english": [
      "Aurangabad",
      "Nashik",
      "Amravati",
      "Pune"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Administrative Divisions of Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Maharashtra is divided into six administrative divisions for governance purposes. These are Konkan, Pune, Nashik, Aurangabad (now Chhatrapati Sambhajinagar), Amravati, and Nagpur. Beed district is geographically located in the Marathwada region and falls under the Aurangabad administrative division.",
    "explanation_marathi": "महाराष्ट्राचे प्रशासकीय सोयीसाठी सहा प्रशासकीय विभागांमध्ये विभाजन केले आहे. हे विभाग कोकण, पुणे, नाशिक, औरंगाबाद (आता छत्रपती संभाजीनगर), अमरावती आणि नागपूर आहेत. बीड जिल्हा भौगोलिकदृष्ट्या मराठवाडा प्रदेशात येतो आणि औरंगाबाद प्रशासकीय विभागांतर्गत आहे.",
    "options_breakdown": [
      {
        "option_english": "Aurangabad",
        "option_marathi": "औरंगाबाद",
        "is_correct": true,
        "reason_english": "Beed district is part of the Aurangabad (now Chhatrapati Sambhajinagar) administrative division of Maharashtra.",
        "reason_marathi": "बीड जिल्हा महाराष्ट्रातील औरंगाबाद (आता छत्रपती संभाजीनगर) प्रशासकीय विभागाचा भाग आहे."
      },
      {
        "option_english": "Nashik",
        "option_marathi": "नाशिक",
        "is_correct": false,
        "reason_english": "Nashik division includes districts like Nashik, Dhule, Jalgaon, Ahmednagar, Nandurbar.",
        "reason_marathi": "नाशिक विभागात नाशिक, धुळे, जळगाव, अहमदनगर, नंदुरबार यांसारखे जिल्हे येतात."
      },
      {
        "option_english": "Amravati",
        "option_marathi": "अमरावती",
        "is_correct": false,
        "reason_english": "Amravati division includes districts like Amravati, Akola, Buldhana, Washim, Yavatmal.",
        "reason_marathi": "अमरावती विभागात अमरावती, अकोला, बुलढाणा, वाशिम, यवतमाळ यांसारखे जिल्हे येतात."
      },
      {
        "option_english": "Pune",
        "option_marathi": "पुणे",
        "is_correct": false,
        "reason_english": "Pune division includes districts like Pune, Satara, Sangli, Solapur, Kolhapur.",
        "reason_marathi": "पुणे विभागात पुणे, सातारा, सांगली, सोलापूर, कोल्हापूर यांसारखे जिल्हे येतात."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "महाराष्ट्रात खालीलपैकी कोणते जिल्हे डोलोमाईट उत्पादनात महत्वाचे आहेत ?\n(1) चंद्रपूर, नागपूर, अमरावती, सिंधूदूर्ग\n(2) कोल्हापूर, रत्नागिरी, रायगड, ठाणे\n(3) नागपूर, चंद्रपूर, सातारा, सांगली\n(4) यवतमाळ, रत्नागिरी, गडचिरोली, नागपूर",
    "question_english": "Which of the following districts of Maharashtra are important in the production of Dolomite ?\n(1) Chandrapur, Nagpur, Amravati, Sindhudurg\n(2) Kolhapur, Ratnagiri, Raigad, Thane\n(3) Nagpur, Chandrapur, Satara, Sangli\n(4) Yavatmal, Ratnagiri, Gadchiroli, Nagpur",
    "options_marathi": [
      "चंद्रपूर, नागपूर, अमरावती, सिंधूदूर्ग",
      "कोल्हापूर, रत्नागिरी, रायगड, ठाणे",
      "नागपूर, चंद्रपूर, सातारा, सांगली",
      "यवतमाळ, रत्नागिरी, गडचिरोली, नागपूर"
    ],
    "options_english": [
      "Chandrapur, Nagpur, Amravati, Sindhudurg",
      "Kolhapur, Ratnagiri, Raigad, Thane",
      "Nagpur, Chandrapur, Satara, Sangli",
      "Yavatmal, Ratnagiri, Gadchiroli, Nagpur"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Mineral Resources (Dolomite)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Dolomite is an important mineral used in various industries. In Maharashtra, significant deposits of dolomite are found in several districts. Yavatmal is a major producer, known for its extensive dolomite reserves. Other districts with notable dolomite production or reserves include Nagpur, Chandrapur, Gadchiroli, and Ratnagiri. The option that correctly lists a combination of these important districts is the fourth one.",
    "explanation_marathi": "डोलोमाईट हे विविध उद्योगांमध्ये वापरले जाणारे एक महत्त्वाचे खनिज आहे. महाराष्ट्रात, डोलोमाईटचे महत्त्वपूर्ण साठे अनेक जिल्ह्यांमध्ये आढळतात. यवतमाळ हा एक प्रमुख उत्पादक आहे, जो त्याच्या विस्तृत डोलोमाईट साठ्यांसाठी ओळखला जातो. डोलोमाईट उत्पादन किंवा साठे असलेले इतर उल्लेखनीय जिल्हे नागपूर, चंद्रपूर, गडचिरोली आणि रत्नागिरी आहेत. या महत्त्वाच्या जिल्ह्यांचे योग्य संयोजन दर्शवणारा पर्याय चौथा आहे.",
    "options_breakdown": [
      {
        "option_english": "Chandrapur, Nagpur, Amravati, Sindhudurg",
        "option_marathi": "चंद्रपूर, नागपूर, अमरावती, सिंधूदूर्ग",
        "is_correct": false,
        "reason_english": "While Chandrapur and Nagpur have dolomite, Amravati and Sindhudurg are not considered major producers.",
        "reason_marathi": "चंद्रपूर आणि नागपूरमध्ये डोलोमाईट असले तरी, अमरावती आणि सिंधुदुर्ग हे प्रमुख उत्पादक मानले जात नाहीत."
      },
      {
        "option_english": "Kolhapur, Ratnagiri, Raigad, Thane",
        "option_marathi": "कोल्हापूर, रत्नागिरी, रायगड, ठाणे",
        "is_correct": false,
        "reason_english": "Ratnagiri has some deposits, but Kolhapur, Raigad, and Thane are not significant for dolomite production.",
        "reason_marathi": "रत्नागिरीमध्ये काही साठे आहेत, परंतु कोल्हापूर, रायगड आणि ठाणे डोलोमाईट उत्पादनासाठी महत्त्वपूर्ण नाहीत."
      },
      {
        "option_english": "Nagpur, Chandrapur, Satara, Sangli",
        "option_marathi": "नागपूर, चंद्रपूर, सातारा, सांगली",
        "is_correct": false,
        "reason_english": "Nagpur and Chandrapur are correct, but Satara and Sangli are not prominent dolomite producing districts.",
        "reason_marathi": "नागपूर आणि चंद्रपूर योग्य आहेत, परंतु सातारा आणि सांगली हे प्रमुख डोलोमाईट उत्पादक जिल्हे नाहीत."
      },
      {
        "option_english": "Yavatmal, Ratnagiri, Gadchiroli, Nagpur",
        "option_marathi": "यवतमाळ, रत्नागिरी, गडचिरोली, नागपूर",
        "is_correct": true,
        "reason_english": "This option correctly lists key districts known for dolomite production and reserves in Maharashtra, with Yavatmal being a major one.",
        "reason_marathi": "हा पर्याय महाराष्ट्रातील डोलोमाईट उत्पादन आणि साठ्यांसाठी ओळखल्या जाणाऱ्या प्रमुख जिल्ह्यांची योग्य यादी देतो, ज्यात यवतमाळ एक प्रमुख आहे."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "कोकणातील नद्या अति वेगाने वाहतात, त्याची कांही कारणे दिली आहेत, योग्य ती ओळखा.\n(a) पूर्वेस सह्याद्री पर्वत आहे.\n(b) किनारपट्टीची रूंदी 30 ते 60 कि.मी. आहे.\n(c) नद्या लांबीने अखुड टप्प्यांच्या आहेत.\n(d) नद्याचे पात्र रूंद व विस्तीर्ण/विस्तृत आहेत.\nवरीलपैकी कोणते विधाने बरोबर आहेत ?",
    "question_english": "Rivers in Konkan flow very fast due to some reasons, identify the correct.\n(a) Sahyadri mountain is in the east.\n(b) Width of coastal belt is 30 to 60 km.\n(c) Rivers are shorter in length.\n(d) Rivers basins are broader and wide.\nWhich of the above statements are correct ?",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "फक्त (d)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "Only (d)",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Rivers of Konkan, Physical Geography of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The fast flow of rivers in the Konkan region is primarily due to its unique geographical features. Statement (a) is correct because the Sahyadri mountain range, located to the east, creates a steep western slope, causing rivers to descend rapidly. Statement (b) is correct as the narrow coastal plain, typically 30 to 60 km wide, means rivers have short courses from their origin in the Sahyadris to the Arabian Sea. Statement (c) is also correct, directly resulting from the narrow coastal belt and steep gradient, leading to shorter river lengths. Statement (d) is incorrect; Konkan rivers generally have narrow, incised valleys and not broad or wide basins due to the steep terrain and rapid erosion. Therefore, statements (a), (b), and (c) are the correct reasons.",
    "explanation_marathi": "कोकण प्रदेशातील नद्यांचा वेगवान प्रवाह प्रामुख्याने त्याच्या अद्वितीय भौगोलिक वैशिष्ट्यांमुळे आहे. विधान (a) बरोबर आहे कारण पूर्वेकडील सह्याद्री पर्वतरांग तीव्र पश्चिम उतार निर्माण करते, ज्यामुळे नद्या वेगाने खाली उतरतात. विधान (b) बरोबर आहे कारण किनारपट्टीची अरुंद रुंदी, जी सामान्यतः 30 ते 60 किमी असते, याचा अर्थ नद्यांचा सह्याद्रीतील उगमस्थानापासून अरबी समुद्रापर्यंतचा मार्ग लहान असतो. विधान (c) देखील बरोबर आहे, जे अरुंद किनारपट्टी आणि तीव्र उताराचा थेट परिणाम आहे, ज्यामुळे नद्यांची लांबी कमी असते. विधान (d) चुकीचे आहे; कोकणातील नद्यांना तीव्र भूभाग आणि जलद धूप यामुळे सामान्यतः अरुंद, खोल दऱ्या असतात आणि रुंद किंवा विस्तृत पात्रे नसतात. म्हणून, विधाने (a), (b) आणि (c) ही योग्य कारणे आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "(a) आणि (b)",
        "option_english": "(a) and (b)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (c) is also a correct reason for the fast flow of Konkan rivers.",
        "reason_marathi": "हे विधान अपूर्ण आहे कारण विधान (c) देखील कोकणातील नद्यांच्या वेगवान प्रवाहाचे एक योग्य कारण आहे."
      },
      {
        "option_marathi": "(b) आणि (c)",
        "option_english": "(b) and (c)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (a) is also a correct reason for the fast flow of Konkan rivers.",
        "reason_marathi": "हे विधान अपूर्ण आहे कारण विधान (a) देखील कोकणातील नद्यांच्या वेगवान प्रवाहाचे एक योग्य कारण आहे."
      },
      {
        "option_marathi": "फक्त (d)",
        "option_english": "Only (d)",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect. Konkan rivers have narrow and steep river basins, not broad and wide ones, due to the mountainous terrain and short courses.",
        "reason_marathi": "विधान (d) चुकीचे आहे. कोकणातील नद्यांची पात्रे अरुंद आणि तीव्र उताराची असतात, रुंद आणि विस्तृत नसतात, कारण पर्वतीय भूभाग आणि लहान प्रवाह."
      },
      {
        "option_marathi": "(a), (b) आणि (c)",
        "option_english": "(a) and (b) and (c)",
        "is_correct": true,
        "reason_english": "All three statements (a), (b), and (c) correctly describe the geographical factors contributing to the high velocity and rapid flow of rivers in the Konkan region.",
        "reason_marathi": "विधान (a), (b) आणि (c) ही तिन्ही विधाने कोकण प्रदेशातील नद्यांच्या उच्च वेग आणि जलद प्रवाहासाठी कारणीभूत असलेल्या भौगोलिक घटकांचे अचूक वर्णन करतात."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "'अस्तंभा शिखर' संदर्भात खालीलपैकी कोणता पर्याय योग्य आहे ?\n(1) नंदुरबार - तोरणमाळ\n(2) अमरावती - गाविलगड\n(3) धुळे - गाळणा डोंगर\n(4) नाशिक - सह्याद्री",
    "question_english": "Which is the correct options for the reference of 'Astambha Peak' ?\n(1) Nandurbar - Toranmal\n(2) Amravati - Gawilgad\n(3) Dhule - Galna Dongar\n(4) Nashik - Sahyadri",
    "options_marathi": [
      "नंदुरबार - तोरणमाळ",
      "अमरावती - गाविलगड",
      "धुळे - गाळणा डोंगर",
      "नाशिक - सह्याद्री"
    ],
    "options_english": [
      "Nandurbar - Toranmal",
      "Amravati - Gawilgad",
      "Dhule - Galna Dongar",
      "Nashik - Sahyadri"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Peaks and Hill Ranges of Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Astambha Peak is a significant geographical feature in Maharashtra, known as the highest peak in the Satpura range within the state. It is specifically located in the Nandurbar district, close to the hill station of Toranmal. This peak is an important landmark in northern Maharashtra.",
    "explanation_marathi": "अस्तंभा शिखर हे महाराष्ट्रातील एक महत्त्वाचे भौगोलिक वैशिष्ट्य आहे, जे राज्यातील सातपुडा पर्वतरांगेतील सर्वोच्च शिखर म्हणून ओळखले जाते. हे विशेषतः नंदुरबार जिल्ह्यात, तोरणमाळ या थंड हवेच्या ठिकाणाजवळ स्थित आहे. हे शिखर उत्तर महाराष्ट्रातील एक महत्त्वाचे ठिकाण आहे.",
    "options_breakdown": [
      {
        "option_marathi": "नंदुरबार - तोरणमाळ",
        "option_english": "Nandurbar - Toranmal",
        "is_correct": true,
        "reason_english": "Astambha Peak is indeed located in the Nandurbar district, near the Toranmal hill station, making this the correct association.",
        "reason_marathi": "अस्तंभा शिखर हे नंदुरबार जिल्ह्यात, तोरणमाळ थंड हवेच्या ठिकाणाजवळ स्थित आहे, त्यामुळे ही योग्य जोडी आहे."
      },
      {
        "option_marathi": "अमरावती - गाविलगड",
        "option_english": "Amravati - Gawilgad",
        "is_correct": false,
        "reason_english": "Gavilgad hills are in Amravati district, but Astambha Peak is not located there.",
        "reason_marathi": "गाविलगड टेकड्या अमरावती जिल्ह्यात आहेत, परंतु अस्तंभा शिखर तेथे नाही."
      },
      {
        "option_marathi": "धुळे - गाळणा डोंगर",
        "option_english": "Dhule - Galna Dongar",
        "is_correct": false,
        "reason_english": "Galna Dongar is a hill range in Dhule district, but Astambha Peak is not associated with it.",
        "reason_marathi": "गाळणा डोंगर ही धुळे जिल्ह्यातील एक डोंगररांग आहे, परंतु अस्तंभा शिखर तिच्याशी संबंधित नाही."
      },
      {
        "option_marathi": "नाशिक - सह्याद्री",
        "option_english": "Nashik - Sahyadri",
        "is_correct": false,
        "reason_english": "Nashik is part of the Sahyadri range, but this option is too general and does not specifically identify the location of Astambha Peak.",
        "reason_marathi": "नाशिक सह्याद्री पर्वतरांगेचा भाग आहे, परंतु हा पर्याय खूप सामान्य आहे आणि अस्तंभा शिखराचे स्थान विशेषतः ओळखत नाही."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "खालीलपैकी कोणती विधाने बरोबर नाहीत ?\n(a) तेलवासा ही महाराष्ट्रातील दगडी कोळशाची खाण नाही.\n(b) चंद्रपूर जिल्ह्यात चुनखडीचे उत्पादन होते.\n(c) क्रोमाइटचे उत्पादन सिंधूदूर्ग जिल्ह्यात होते.\nपर्यायी उत्तरे :",
    "question_english": "Which of the following statement/s is/are incorrect ?\n(a) Telvasa is not a coal mine in Maharashtra.\n(b) Limestone is produced in Chandrapur district.\n(c) Chromite is produced in Sindhudurg district.\nAnswer Options :",
    "options_marathi": [
      "विधान (a)",
      "विधान (c)",
      "विधान (a) आणि (c)",
      "विधान (b) आणि (c)"
    ],
    "options_english": [
      "Statement (a)",
      "Statement (c)",
      "Statement (a) and (c)",
      "Statement (b) and (c)"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Mineral Resources of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Double Negative, Factual Swap",
    "explanation_english": "The question asks to identify the incorrect statements. Let's analyze each: Statement (a) says 'Telvasa is not a coal mine in Maharashtra'. This is incorrect because Telwasa (or Telvasa) is indeed a known coal mine, primarily located in the Chandrapur district of Maharashtra. Statement (b) says 'Limestone is produced in Chandrapur district'. This is correct, as Chandrapur is a major producer of limestone in Maharashtra. Statement (c) says 'Chromite is produced in Sindhudurg district'. This is incorrect; Chromite deposits in Maharashtra are mainly found in eastern districts like Bhandara, Gondia, and Nagpur, while Sindhudurg is known for iron ore and bauxite. Therefore, statements (a) and (c) are incorrect.",
    "explanation_marathi": "प्रश्न चुकीची विधाने ओळखण्यास सांगतो. प्रत्येक विधानाचे विश्लेषण करूया: विधान (a) म्हणते की 'तेलवासा ही महाराष्ट्रातील दगडी कोळशाची खाण नाही'. हे चुकीचे आहे कारण तेलवासा (किंवा तेलवासा) ही महाराष्ट्रातील चंद्रपूर जिल्ह्यातील एक प्रसिद्ध कोळशाची खाण आहे. विधान (b) म्हणते की 'चंद्रपूर जिल्ह्यात चुनखडीचे उत्पादन होते'. हे बरोबर आहे, कारण चंद्रपूर महाराष्ट्रातील चुनखडीचा प्रमुख उत्पादक आहे. विधान (c) म्हणते की 'क्रोमाइटचे उत्पादन सिंधुदुर्ग जिल्ह्यात होते'. हे चुकीचे आहे; महाराष्ट्रातील क्रोमाइटचे साठे प्रामुख्याने भंडारा, गोंदिया आणि नागपूर यांसारख्या पूर्वेकडील जिल्ह्यांमध्ये आढळतात, तर सिंधुदुर्ग लोहखनिज आणि बॉक्साईटसाठी ओळखला जातो. म्हणून, विधाने (a) आणि (c) चुकीची आहेत.",
    "options_breakdown": [
      {
        "option_marathi": "विधान (a)",
        "option_english": "Statement (a)",
        "is_correct": false,
        "reason_english": "This option is incomplete because statement (c) is also incorrect, and the question asks for all incorrect statements.",
        "reason_marathi": "हे विधान अपूर्ण आहे कारण विधान (c) देखील चुकीचे आहे आणि प्रश्न सर्व चुकीची विधाने विचारतो."
      },
      {
        "option_marathi": "विधान (c)",
        "option_english": "Statement (c)",
        "is_correct": false,
        "reason_english": "This option is incomplete because statement (a) is also incorrect, and the question asks for all incorrect statements.",
        "reason_marathi": "हे विधान अपूर्ण आहे कारण विधान (a) देखील चुकीचे आहे आणि प्रश्न सर्व चुकीची विधाने विचारतो."
      },
      {
        "option_marathi": "विधान (a) आणि (c)",
        "option_english": "Statement (a) and (c)",
        "is_correct": true,
        "reason_english": "Both statement (a) (Telvasa is a coal mine, so 'not a coal mine' is false) and statement (c) (Chromite is not primarily found in Sindhudurg) are factually incorrect.",
        "reason_marathi": "विधान (a) (तेलवासा ही कोळशाची खाण आहे, त्यामुळे 'कोळशाची खाण नाही' हे चुकीचे आहे) आणि विधान (c) (क्रोमाइट प्रामुख्याने सिंधुदुर्गमध्ये आढळत नाही) ही दोन्ही विधाने वस्तुस्थितीनुसार चुकीची आहेत."
      },
      {
        "option_marathi": "विधान (b) आणि (c)",
        "option_english": "Statement (b) and (c)",
        "is_correct": false,
        "reason_english": "Statement (b) is correct (Limestone in Chandrapur), so this option is incorrect as it includes a correct statement.",
        "reason_marathi": "विधान (b) बरोबर आहे (चंद्रपूरमध्ये चुनखडी), त्यामुळे हा पर्याय चुकीचा आहे कारण त्यात एक बरोबर विधान समाविष्ट आहे."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "महाराष्ट्रामध्ये ______ खडक पूर्व विदर्भ व कोकण खेरीज सर्वत्र आढळतो.",
    "question_english": "______ rocks are found everywhere except East Vidarbha and Konkan in Maharashtra.",
    "options_marathi": [
      "जलजन्य",
      "बेसाल्ट",
      "रूपांतरीत",
      "यापैकी नाही"
    ],
    "options_english": [
      "Aquatic",
      "Besalt",
      "Transformed",
      "None of these"
    ],
    "correct_option_index": 2,
    "subject": "Geography",
    "topic": "Geology of Maharashtra, Rock Formations",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Maharashtra's geology is predominantly characterized by the Deccan Traps, which are vast formations of basaltic igneous rocks. These basalt rocks cover most of the Maharashtra plateau. However, the eastern part of Vidarbha (e.g., Chandrapur, Gadchiroli, Bhandara, Gondia districts) has older crystalline and sedimentary rocks (like Gondwana formations), and while basalt underlies Konkan, the surface is often covered by laterite and alluvial deposits. Thus, basalt is the rock type found almost everywhere else in the state.",
    "explanation_marathi": "महाराष्ट्राची भूगर्भशास्त्र प्रामुख्याने दख्खनच्या पठारावरील बेसाल्टिक अग्निजन्य खडकांच्या विशाल निर्मितीने वैशिष्ट्यीकृत आहे. हे बेसाल्ट खडक महाराष्ट्राच्या पठाराचा मोठा भाग व्यापतात. तथापि, विदर्भाच्या पूर्वेकडील भागात (उदा. चंद्रपूर, गडचिरोली, भंडारा, गोंदिया जिल्हे) जुने स्फटिकमय आणि गाळाचे खडक (गोंडवानासारखे) आढळतात, आणि कोकणच्या खाली बेसाल्ट असले तरी, पृष्ठभाग अनेकदा जांभा आणि गाळाच्या साठ्यांनी झाकलेला असतो. त्यामुळे, राज्याच्या इतर सर्वत्र बेसाल्ट खडक आढळतो.",
    "options_breakdown": [
      {
        "option_marathi": "जलजन्य",
        "option_english": "Aquatic",
        "is_correct": false,
        "reason_english": "Sedimentary (aquatic) rocks are found in specific regions, particularly in parts of eastern Vidarbha, but they do not cover the majority of Maharashtra.",
        "reason_marathi": "गाळाचे (जलजन्य) खडक विशिष्ट प्रदेशात, विशेषतः पूर्व विदर्भाच्या काही भागांमध्ये आढळतात, परंतु ते महाराष्ट्राचा मोठा भाग व्यापत नाहीत."
      },
      {
        "option_marathi": "बेसाल्ट",
        "option_english": "Besalt",
        "is_correct": true,
        "reason_english": "Basaltic rocks, forming the Deccan Traps, are the most widespread rock type across the Maharashtra plateau, excluding the older formations in East Vidarbha and the coastal deposits in Konkan.",
        "reason_marathi": "बेसाल्ट खडक, जे दख्खनच्या पठाराचा भाग आहेत, हे महाराष्ट्राच्या पठारावर सर्वात जास्त प्रमाणात आढळणारे खडकाचे प्रकार आहेत, ज्यात पूर्व विदर्भातील जुन्या निर्मिती आणि कोकणातील किनारपट्टीवरील साठे वगळता."
      },
      {
        "option_marathi": "रूपांतरीत",
        "option_english": "Transformed",
        "is_correct": false,
        "reason_english": "Metamorphic rocks are found in limited areas, primarily in the eastern parts of Maharashtra (e.g., Vidarbha), but not as widely as basalt.",
        "reason_marathi": "रूपांतरीत खडक मर्यादित भागात, प्रामुख्याने महाराष्ट्राच्या पूर्वेकडील भागांमध्ये (उदा. विदर्भ) आढळतात, परंतु बेसाल्टइतके विस्तृत नाहीत."
      },
      {
        "option_marathi": "यापैकी नाही",
        "option_english": "None of these",
        "is_correct": false,
        "reason_english": "Basalt is the correct answer, so this option is incorrect.",
        "reason_marathi": "बेसाल्ट हे योग्य उत्तर आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "महाराष्ट्रातील घाटांच्या संदर्भात खालील विधांनावर विचार करा.\n(a) पुणे - बारामती मार्गावर दिवा घाट आहे.\n(b) कोल्हापुर - रत्नागिरी मार्गावर अंबोली घाट आहे.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following statement regarding Ghats in Maharashtra.\n(a) Diva Ghat is on the Pune - Baramati road.\n(b) Amboli Ghat is on the Kolhapur - Ratnagiri road.\nAnswer Options :",
    "options_marathi": [
      "(a) बरोबर, (b) चूक",
      "(a) चूक, (b) बरोबर",
      "दोन्हीही चूक",
      "दोन्हीही बरोबर"
    ],
    "options_english": [
      "(a) correct, (b) wrong",
      "(a) wrong, (b) correct",
      "Both are wrong",
      "Both are correct"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Ghats (Mountain Passes) of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's evaluate each statement regarding the ghats in Maharashtra. Statement (a) claims that Diva Ghat is on the Pune - Baramati road. This is incorrect. Diva Ghat is located on the old Mumbai-Pune highway (NH48, formerly NH4) near Khopoli, connecting the Konkan plain to the Deccan plateau. Statement (b) claims that Amboli Ghat is on the Kolhapur - Ratnagiri road. This is also incorrect. Amboli Ghat connects Kolhapur district to Sindhudurg district and further to Goa. The typical route from Kolhapur to Ratnagiri involves other ghats like Anuskura or Kumbharli. Since both statements (a) and (b) are factually incorrect, the correct option is 'Both are wrong'.",
    "explanation_marathi": "महाराष्ट्रातील घाटांच्या संदर्भात प्रत्येक विधानाचे मूल्यांकन करूया. विधान (a) म्हणते की दिवा घाट पुणे - बारामती रस्त्यावर आहे. हे चुकीचे आहे. दिवा घाट जुन्या मुंबई-पुणे महामार्गावर (NH48, पूर्वी NH4) खोपोलीजवळ आहे, जो कोकण किनारपट्टीला दख्खनच्या पठाराशी जोडतो. विधान (b) म्हणते की आंबोली घाट कोल्हापूर - रत्नागिरी रस्त्यावर आहे. हे देखील चुकीचे आहे. आंबोली घाट कोल्हापूर जिल्ह्याला सिंधुदुर्ग जिल्ह्याशी आणि पुढे गोव्याशी जोडतो. कोल्हापूर ते रत्नागिरीचा सामान्य मार्ग अनुस्कुरा किंवा कुंभारली घाटातून जातो. दोन्ही विधाने (a) आणि (b) वस्तुस्थितीनुसार चुकीची असल्याने, योग्य पर्याय 'दोन्हीही चूक' हा आहे.",
    "options_breakdown": [
      {
        "option_marathi": "(a) बरोबर, (b) चूक",
        "option_english": "(a) correct, (b) wrong",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect, as Diva Ghat is on the Mumbai-Pune old highway, not Pune-Baramati road.",
        "reason_marathi": "विधान (a) चुकीचे आहे, कारण दिवा घाट मुंबई-पुणे जुन्या महामार्गावर आहे, पुणे-बारामती रस्त्यावर नाही."
      },
      {
        "option_marathi": "(a) चूक, (b) बरोबर",
        "option_english": "(a) wrong, (b) correct",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect, as Amboli Ghat connects Kolhapur to Sindhudurg/Goa, not directly Kolhapur to Ratnagiri.",
        "reason_marathi": "विधान (b) चुकीचे आहे, कारण आंबोली घाट कोल्हापूरला सिंधुदुर्ग/गोव्याशी जोडतो, थेट कोल्हापूर ते रत्नागिरीशी नाही."
      },
      {
        "option_marathi": "दोन्हीही चूक",
        "option_english": "Both are wrong",
        "is_correct": true,
        "reason_english": "Both statement (a) and statement (b) are factually incorrect regarding the locations and routes of Diva Ghat and Amboli Ghat respectively.",
        "reason_marathi": "दिवा घाट आणि आंबोली घाट यांच्या स्थानांबद्दल आणि मार्गांबद्दल विधान (a) आणि विधान (b) दोन्ही वस्तुस्थितीनुसार चुकीची आहेत."
      },
      {
        "option_marathi": "दोन्हीही बरोबर",
        "option_english": "Both are correct",
        "is_correct": false,
        "reason_english": "Both statements are incorrect, so this option is false.",
        "reason_marathi": "दोन्ही विधाने चुकीची आहेत, त्यामुळे हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "डॉ. कॅरे यांनी 1805 मध्ये कोणत्या भाषेचे व्याकरण प्रसिद्ध केले ?\n(a) मराठी\n(b) हिंदी\n(c) संस्कृत\n(d) इंग्रजी\nपर्यायी उत्तरे :",
    "question_english": "Dr. Carey published the grammar of which language in 1805 ?\n(a) Marathi\n(b) Hindi\n(c) Sanskrit\n(d) English\nAnswer Options :",
    "options_marathi": [
      "(a) आणि (c)",
      "फक्त (a)",
      "(b) आणि (c)",
      "फक्त (d)"
    ],
    "options_english": [
      "(a) and (c)",
      "Only (a)",
      "(b) and (c)",
      "Only (d)"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social and Cultural Reforms, British Period, Language Development",
    "difficulty": "Medium",
    "trap_detected": "Factual Specificity",
    "explanation_english": "Dr. William Carey was a renowned British missionary and orientalist who made significant contributions to the study and development of various Indian languages. While he worked on multiple languages, including Bengali (grammar published in 1801) and Sanskrit, his specific publication in 1805 was 'A Grammar of the Mahratta Language', which is the grammar of the Marathi language. Therefore, only Marathi grammar was published by him in 1805.",
    "explanation_marathi": "डॉ. विल्यम कॅरे हे एक प्रसिद्ध ब्रिटिश मिशनरी आणि प्राच्यविद्या अभ्यासक होते ज्यांनी विविध भारतीय भाषांच्या अभ्यास आणि विकासात महत्त्वपूर्ण योगदान दिले. त्यांनी बंगाली (व्याकरण 1801 मध्ये प्रकाशित) आणि संस्कृतसह अनेक भाषांवर काम केले असले तरी, त्यांचे 1805 मधील विशिष्ट प्रकाशन 'ए ग्रामर ऑफ द मराठा लँग्वेज' हे होते, जे मराठी भाषेचे व्याकरण आहे. म्हणून, 1805 मध्ये त्यांनी फक्त मराठी व्याकरणाचे पुस्तक प्रकाशित केले.",
    "options_breakdown": [
      {
        "option_marathi": "(a) आणि (c)",
        "option_english": "(a) and (c)",
        "is_correct": false,
        "reason_english": "While Carey worked on Sanskrit, his Marathi grammar was specifically published in 1805, not Sanskrit grammar in the same year.",
        "reason_marathi": "कॅरे यांनी संस्कृतवर काम केले असले तरी, त्यांचे मराठी व्याकरण विशेषतः 1805 मध्ये प्रकाशित झाले होते, त्याच वर्षी संस्कृत व्याकरण नाही."
      },
      {
        "option_marathi": "फक्त (a)",
        "option_english": "Only (a)",
        "is_correct": true,
        "reason_english": "Dr. William Carey published 'A Grammar of the Mahratta Language' (Marathi grammar) in 1805.",
        "reason_marathi": "डॉ. विल्यम कॅरे यांनी 1805 मध्ये 'ए ग्रामर ऑफ द मराठा लँग्वेज' (मराठी व्याकरण) प्रकाशित केले."
      },
      {
        "option_marathi": "(b) आणि (c)",
        "option_english": "(b) and (c)",
        "is_correct": false,
        "reason_english": "Carey did not publish Hindi grammar in 1805, and while he worked on Sanskrit, the 1805 publication was for Marathi.",
        "reason_marathi": "कॅरे यांनी 1805 मध्ये हिंदी व्याकरण प्रकाशित केले नाही, आणि त्यांनी संस्कृतवर काम केले असले तरी, 1805 मधील प्रकाशन मराठीसाठी होते."
      },
      {
        "option_marathi": "फक्त (d)",
        "option_english": "Only (d)",
        "is_correct": false,
        "reason_english": "Carey was known for his work on Indian languages, not for publishing English grammar.",
        "reason_marathi": "कॅरे भारतीय भाषांवरील त्यांच्या कार्यासाठी ओळखले जात होते, इंग्रजी व्याकरण प्रकाशित करण्यासाठी नाही."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "राजर्षी शाहू महाराजांनी दाजीपूरजवळ कोणत्या नदीवर धरण बांधले ?",
    "question_english": "On which river did Rajarshi Shahu Maharaj construct a dam near Dajipur ?",
    "options_marathi": [
      "राधानगरी",
      "भोगावती",
      "पंचगंगा",
      "कुंभी"
    ],
    "options_english": [
      "Radhanagari",
      "Bhogavati",
      "Panchganga",
      "Kumbhi"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social Reforms, Princely States, Water Management, Rajarshi Shahu Maharaj",
    "difficulty": "Easy",
    "trap_detected": "Close Options",
    "explanation_english": "Rajarshi Shahu Maharaj, the visionary ruler of Kolhapur, was instrumental in implementing various progressive reforms and development projects. One of his most significant contributions was the construction of the Radhanagari Dam, also known as Shahu Sagar. This dam was built on the Bhogavati River, which is a major tributary of the Panchganga River, near Dajipur in Kolhapur district. The dam played a crucial role in providing irrigation and water supply to the region.",
    "explanation_marathi": "कोल्हापूरचे दूरदृष्टीचे शासक राजर्षी शाहू महाराज यांनी विविध पुरोगामी सुधारणा आणि विकास प्रकल्प राबविण्यात महत्त्वाची भूमिका बजावली. त्यांच्या सर्वात महत्त्वपूर्ण योगदानांपैकी एक म्हणजे राधानगरी धरणाचे बांधकाम, ज्याला शाहू सागर असेही म्हणतात. हे धरण कोल्हापूर जिल्ह्यातील दाजीपूरजवळ भोगावती नदीवर बांधले गेले, जी पंचगंगा नदीची एक प्रमुख उपनदी आहे. या धरणाने प्रदेशाला सिंचन आणि पाणीपुरवठा करण्यात महत्त्वाची भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_marathi": "राधानगरी",
        "option_english": "Radhanagari",
        "is_correct": false,
        "reason_english": "Radhanagari is the name of the dam (Radhanagari Dam or Shahu Sagar), not the river on which it is built.",
        "reason_marathi": "राधानगरी हे धरणाचे नाव आहे (राधानगरी धरण किंवा शाहू सागर), ज्या नदीवर ते बांधले आहे तिचे नाही."
      },
      {
        "option_marathi": "भोगावती",
        "option_english": "Bhogavati",
        "is_correct": true,
        "reason_english": "The Radhanagari Dam, constructed by Rajarshi Shahu Maharaj near Dajipur, is built on the Bhogavati River.",
        "reason_marathi": "राजर्षी शाहू महाराजांनी दाजीपूरजवळ बांधलेले राधानगरी धरण भोगावती नदीवर आहे."
      },
      {
        "option_marathi": "पंचगंगा",
        "option_english": "Panchganga",
        "is_correct": false,
        "reason_english": "Bhogavati is a tributary of the Panchganga River, but the dam itself is directly on the Bhogavati.",
        "reason_marathi": "भोगावती ही पंचगंगा नदीची उपनदी आहे, परंतु धरण स्वतः भोगावतीवर आहे."
      },
      {
        "option_marathi": "कुंभी",
        "option_english": "Kumbhi",
        "is_correct": false,
        "reason_english": "Kumbhi is another river in the Kolhapur region, but the Radhanagari Dam is not built on it.",
        "reason_marathi": "कुंभी ही कोल्हापूर प्रदेशातील दुसरी नदी आहे, परंतु राधानगरी धरण तिच्यावर बांधलेले नाही."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "31 ऑक्टोबर 1920 रोजी मुंबई येथे नारायण मल्हार जोशींनी ______ ची स्थापना केली.",
    "question_english": "On 31st October 1920 Narayan Malhar Joshi founded ______ at Bombay.",
    "options_marathi": [
      "गिरणी कामगार संघ",
      "मद्रास लेबर युनियन",
      "ऑल इंडीया ट्रेड युनियन काँग्रेस",
      "राष्ट्रीय मील मजदूर संघ"
    ],
    "options_english": [
      "Girni Kamgar Sangh",
      "Madras Labour Union",
      "All India Trade Union Congress",
      "Rashtriya Mill Majdoor Sangh"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Indian National Movement, Labour Movement, Trade Unions",
    "difficulty": "Easy",
    "trap_detected": "Close Options",
    "explanation_english": "Narayan Malhar Joshi was a prominent social reformer and a pioneer of the trade union movement in India. On October 31, 1920, he, along with other leaders like Lala Lajpat Rai, founded the All India Trade Union Congress (AITUC) in Bombay. AITUC was the first national federation of trade unions in India, established to address the grievances and promote the rights of Indian workers during the British Raj.",
    "explanation_marathi": "नारायण मल्हार जोशी हे एक प्रमुख समाजसुधारक आणि भारतातील कामगार संघटना चळवळीचे प्रणेते होते. 31 ऑक्टोबर 1920 रोजी, त्यांनी लाला लजपत राय यांच्यासारख्या इतर नेत्यांसह मुंबईत अखिल भारतीय ट्रेड युनियन काँग्रेस (AITUC) ची स्थापना केली. AITUC ही भारतातील कामगार संघटनांची पहिली राष्ट्रीय संघटना होती, जी ब्रिटिश राजवटीत भारतीय कामगारांच्या तक्रारींचे निराकरण करण्यासाठी आणि त्यांच्या हक्कांना प्रोत्साहन देण्यासाठी स्थापन करण्यात आली होती.",
    "options_breakdown": [
      {
        "option_marathi": "गिरणी कामगार संघ",
        "option_english": "Girni Kamgar Sangh",
        "is_correct": false,
        "reason_english": "While related to labor, Girni Kamgar Sangh was a different organization and not founded by N.M. Joshi on this specific date.",
        "reason_marathi": "कामगारांशी संबंधित असले तरी, गिरणी कामगार संघ ही एक वेगळी संघटना होती आणि ती या विशिष्ट तारखेला एन.एम. जोशी यांनी स्थापन केली नव्हती."
      },
      {
        "option_marathi": "मद्रास लेबर युनियन",
        "option_english": "Madras Labour Union",
        "is_correct": false,
        "reason_english": "Madras Labour Union was formed earlier in 1918 in Madras, not Bombay, and not by N.M. Joshi.",
        "reason_marathi": "मद्रास लेबर युनियनची स्थापना 1918 मध्ये मद्रासमध्ये झाली होती, मुंबईत नाही आणि एन.एम. जोशी यांनी केली नव्हती."
      },
      {
        "option_marathi": "ऑल इंडीया ट्रेड युनियन काँग्रेस",
        "option_english": "All India Trade Union Congress",
        "is_correct": true,
        "reason_english": "N.M. Joshi was one of the key founders of the All India Trade Union Congress (AITUC) on October 31, 1920, in Bombay.",
        "reason_marathi": "एन.एम. जोशी हे 31 ऑक्टोबर 1920 रोजी मुंबईत अखिल भारतीय ट्रेड युनियन काँग्रेस (AITUC) च्या प्रमुख संस्थापकांपैकी एक होते."
      },
      {
        "option_marathi": "राष्ट्रीय मील मजदूर संघ",
        "option_english": "Rashtriya Mill Majdoor Sangh",
        "is_correct": false,
        "reason_english": "This is a different labor organization, not the one founded by N.M. Joshi on the specified date.",
        "reason_marathi": "ही एक वेगळी कामगार संघटना आहे, जी एन.एम. जोशी यांनी नमूद केलेल्या तारखेला स्थापन केली नव्हती."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "______ यांनी आपल्या कर्मचाऱ्यांसाठी बोनस व भविष्यनिर्वाह निधी लागू केला.",
    "question_english": "______ introduced a system of Bonus and Provident Fund for his employees.",
    "options_marathi": [
      "मंगलदास नाथुभाई",
      "बी.एच. वाडीया",
      "केशवजी नाईक",
      "जमशेटजी टाटा"
    ],
    "options_english": [
      "Mangaldas Nathubhai",
      "B.H. Wadia",
      "Kesowji Naik",
      "Jamshetji Tata"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Industrial Development, Labour Welfare, Philanthropy, Jamshetji Tata",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Jamshetji Nusserwanji Tata, the visionary founder of the Tata Group, was a pioneering industrialist known for his progressive and humanitarian approach towards his employees. Long before such practices became common or legally mandated, he introduced various welfare schemes, including provident fund, accident compensation, and even an eight-hour workday. These initiatives set a benchmark for industrial welfare in India.",
    "explanation_marathi": "जमशेटजी नुसरवानजी टाटा, टाटा समूहाचे दूरदृष्टीचे संस्थापक, हे त्यांच्या कर्मचाऱ्यांप्रती पुरोगामी आणि मानवतावादी दृष्टिकोनासाठी ओळखले जाणारे एक अग्रणी उद्योगपती होते. अशा प्रथा सामान्य होण्यापूर्वी किंवा कायदेशीररित्या बंधनकारक होण्यापूर्वीच, त्यांनी भविष्य निर्वाह निधी, अपघात भरपाई आणि अगदी आठ तासांचा कामाचा दिवस यासह विविध कल्याणकारी योजना सुरू केल्या. या उपक्रमांनी भारतातील औद्योगिक कल्याणासाठी एक आदर्श निर्माण केला.",
    "options_breakdown": [
      {
        "option_marathi": "मंगलदास नाथुभाई",
        "option_english": "Mangaldas Nathubhai",
        "is_correct": false,
        "reason_english": "While a notable figure, Mangaldas Nathubhai is not primarily credited with pioneering bonus and provident fund systems for employees.",
        "reason_marathi": "एक उल्लेखनीय व्यक्तिमत्व असले तरी, मंगलदास नाथुभाई यांना कर्मचाऱ्यांसाठी बोनस आणि भविष्य निर्वाह निधी प्रणाली सुरू करण्याचे श्रेय दिले जात नाही."
      },
      {
        "option_marathi": "बी.एच. वाडीया",
        "option_english": "B.H. Wadia",
        "is_correct": false,
        "reason_english": "B.H. Wadia is not associated with the pioneering introduction of bonus and provident fund for employees.",
        "reason_marathi": "बी.एच. वाडीया हे कर्मचाऱ्यांसाठी बोनस आणि भविष्य निर्वाह निधीच्या अग्रणी परिचयाशी संबंधित नाहीत."
      },
      {
        "option_marathi": "केशवजी नाईक",
        "option_english": "Kesowji Naik",
        "is_correct": false,
        "reason_english": "Kesowji Naik is not known for introducing bonus and provident fund systems for employees.",
        "reason_marathi": "केशवजी नाईक हे कर्मचाऱ्यांसाठी बोनस आणि भविष्य निर्वाह निधी प्रणाली सुरू करण्यासाठी ओळखले जात नाहीत."
      },
      {
        "option_marathi": "जमशेटजी टाटा",
        "option_english": "Jamshetji Tata",
        "is_correct": true,
        "reason_english": "Jamshetji Tata was a pioneer in employee welfare, introducing schemes like provident fund and bonus much ahead of his time.",
        "reason_marathi": "जमशेटजी टाटा हे कर्मचारी कल्याणाचे प्रणेते होते, त्यांनी त्यांच्या काळाच्या खूप आधी भविष्य निर्वाह निधी आणि बोनस यांसारख्या योजना सुरू केल्या."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "'स्वदेशी को-आपरेटीव्ह स्टोअर्स लिमीटेड' सुरू करण्यात पुढीलपैकी कोणी पुढाकार घेतला होता ?",
    "question_english": "Who from the following took the initiative to start the Swadeshi Cooperative Stores Limited ?",
    "options_marathi": [
      "जमशेटजी टाटा",
      "नानासाहेब देशमुख",
      "हरी किशोर",
      "लोकमान्य टिळक"
    ],
    "options_english": [
      "Jamshetji Tata",
      "Nanasaheb Deshmukh",
      "Hari Kishor",
      "Lokmanya Tilak"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Indian National Movement, Swadeshi Movement, Lokmanya Tilak",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Lokmanya Bal Gangadhar Tilak was a towering figure in the Indian independence movement and a staunch advocate of the Swadeshi movement. He actively promoted the use of indigenous goods and the boycott of foreign products as a means of achieving self-rule. To further this cause and provide a practical platform for Swadeshi products, he took the initiative to establish the 'Swadeshi Cooperative Stores Limited' in Pune, encouraging economic self-reliance among Indians.",
    "explanation_marathi": "लोकमान्य बाळ गंगाधर टिळक हे भारतीय स्वातंत्र्य चळवळीतील एक महान व्यक्तिमत्व आणि स्वदेशी चळवळीचे कट्टर पुरस्कर्ते होते. त्यांनी स्वराज्य मिळवण्यासाठी स्वदेशी वस्तूंचा वापर आणि परदेशी उत्पादनांवर बहिष्कार घालण्याचे जोरदार समर्थन केले. या उद्दिष्टाला पुढे नेण्यासाठी आणि स्वदेशी उत्पादनांसाठी एक व्यावहारिक व्यासपीठ उपलब्ध करून देण्यासाठी, त्यांनी पुण्यात 'स्वदेशी को-ऑपरेटिव्ह स्टोअर्स लिमिटेड' सुरू करण्याचा पुढाकार घेतला, ज्यामुळे भारतीयांमध्ये आर्थिक आत्मनिर्भरतेला प्रोत्साहन मिळाले.",
    "options_breakdown": [
      {
        "option_marathi": "जमशेटजी टाटा",
        "option_english": "Jamshetji Tata",
        "is_correct": false,
        "reason_english": "While a great industrialist and nationalist, Jamshetji Tata is not specifically credited with initiating the 'Swadeshi Cooperative Stores Limited'.",
        "reason_marathi": "एक महान उद्योगपती आणि राष्ट्रवादी असले तरी, जमशेटजी टाटा यांना 'स्वदेशी को-ऑपरेटिव्ह स्टोअर्स लिमिटेड' सुरू करण्याचे श्रेय विशेषतः दिले जात नाही."
      },
      {
        "option_marathi": "नानासाहेब देशमुख",
        "option_english": "Nanasaheb Deshmukh",
        "is_correct": false,
        "reason_english": "Nanasaheb Deshmukh (Balaji Janardan Bhanu) was a historical figure from the Maratha Empire, not associated with the Swadeshi movement or this initiative.",
        "reason_marathi": "नानासाहेब देशमुख (बाळाजी जनार्दन भानू) हे मराठा साम्राज्यातील एक ऐतिहासिक व्यक्तिमत्व होते, स्वदेशी चळवळ किंवा या उपक्रमाशी संबंधित नाहीत."
      },
      {
        "option_marathi": "हरी किशोर",
        "option_english": "Hari Kishor",
        "is_correct": false,
        "reason_english": "Hari Kishor is not a prominent figure associated with the establishment of the Swadeshi Cooperative Stores Limited.",
        "reason_marathi": "हरी किशोर हे स्वदेशी को-ऑपरेटिव्ह स्टोअर्स लिमिटेडच्या स्थापनेशी संबंधित प्रमुख व्यक्तिमत्व नाहीत."
      },
      {
        "option_marathi": "लोकमान्य टिळक",
        "option_english": "Lokmanya Tilak",
        "is_correct": true,
        "reason_english": "Lokmanya Tilak was a key leader of the Swadeshi movement and actively promoted and helped establish Swadeshi Cooperative Stores in Pune.",
        "reason_marathi": "लोकमान्य टिळक हे स्वदेशी चळवळीचे प्रमुख नेते होते आणि त्यांनी पुण्यात स्वदेशी को-ऑपरेटिव्ह स्टोअर्सची स्थापना करण्यास सक्रियपणे प्रोत्साहन दिले आणि मदत केली."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "'आयटक' (ऑल इंडिया ट्रेड युनियन काँग्रेस) चे पहिले अध्यक्ष कोण होते ?",
    "question_english": "Who was the first President of All India Trade Union Congress ?",
    "options_marathi": [
      "ना.म. जोशी",
      "लोकमान्य टिळक",
      "लाला लजपतराय",
      "श्रीपाद अमृत डांगे"
    ],
    "options_english": [
      "N.M. Joshi",
      "Lokmanya Tilak",
      "Lala Lajpat Rai",
      "Shripad Amrut Dange"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Indian National Movement, Labour Movements",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The All India Trade Union Congress (AITUC) was founded on October 31, 1920, in Bombay. It was one of the earliest and most significant trade union federations in India. Lala Lajpat Rai, a prominent nationalist leader and freedom fighter, was elected as its first president. The formation of AITUC marked a crucial step in the organization of the working class in India and its integration into the broader national movement.",
    "explanation_marathi": "अखिल भारतीय ट्रेड युनियन काँग्रेस (आयटक) ची स्थापना 31 ऑक्टोबर 1920 रोजी मुंबई येथे झाली. भारतातील सर्वात जुन्या आणि महत्त्वाच्या कामगार संघटनांपैकी ही एक होती. लाला लजपतराय, जे एक प्रमुख राष्ट्रवादी नेते आणि स्वातंत्र्यसैनिक होते, त्यांची आयटकचे पहिले अध्यक्ष म्हणून निवड झाली. आयटकच्या स्थापनेमुळे भारतातील कामगार वर्गाच्या संघटनेत आणि व्यापक राष्ट्रीय चळवळीत त्यांच्या एकत्रीकरणात एक महत्त्वाचे पाऊल टाकले गेले.",
    "options_breakdown": [
      {
        "option_text_english": "N.M. Joshi",
        "option_text_marathi": "ना.म. जोशी",
        "is_correct": false,
        "reason": "N.M. Joshi was a prominent labour leader and one of the founders of AITUC, serving as its first General Secretary, but not the president."
      },
      {
        "option_text_english": "Lokmanya Tilak",
        "option_text_marathi": "लोकमान्य टिळक",
        "is_correct": false,
        "reason": "Lokmanya Tilak was a key nationalist leader and supported the labour movement, but he passed away in August 1920, before AITUC was officially founded in October 1920."
      },
      {
        "option_text_english": "Lala Lajpat Rai",
        "option_text_marathi": "लाला लजपतराय",
        "is_correct": true,
        "reason": "Lala Lajpat Rai was indeed the first president of the All India Trade Union Congress (AITUC) when it was founded in 1920."
      },
      {
        "option_text_english": "Shripad Amrut Dange",
        "option_text_marathi": "श्रीपाद अमृत डांगे",
        "is_correct": false,
        "reason": "S.A. Dange was a prominent communist and trade union leader, active in later phases of the labour movement, but not the first president of AITUC."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "1911 मध्ये शाही विधीमंडळात ______ यांनी सक्तीचे आणि मोफत प्राथमिक शिक्षण सुरू करावे असे विधेयक मांडले.",
    "question_english": "In 1911 ______ introduced a bill for introduction of compulsory and free primary education in the Imperial Legislative Council.",
    "options_marathi": [
      "गोपाळ कृष्ण गोखले",
      "गोपाळ गणेश आगरकर",
      "दादाभाई नौरोजी",
      "धोंडो केशव कर्वे"
    ],
    "options_english": [
      "Gopal Krishna Gokhale",
      "Gopal Ganesh Agarkar",
      "Dadabhai Naoroji",
      "Dhondo Keshav Karve"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Social and Educational Reforms, Indian National Movement",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Gopal Krishna Gokhale, a prominent moderate leader of the Indian National Congress, introduced a resolution for compulsory and free primary education in the Imperial Legislative Council in 1910, which was later presented as a bill in 1911. Although the bill was ultimately rejected, it highlighted the importance of mass education and put significant pressure on the British government to address the issue, laying the groundwork for future educational reforms.",
    "explanation_marathi": "गोपाळ कृष्ण गोखले, जे भारतीय राष्ट्रीय काँग्रेसचे एक प्रमुख मवाळ नेते होते, त्यांनी 1910 मध्ये इम्पीरियल लेजिस्लेटिव्ह कौन्सिलमध्ये सक्तीच्या आणि मोफत प्राथमिक शिक्षणासाठी एक ठराव मांडला, जो नंतर 1911 मध्ये विधेयकाच्या स्वरूपात सादर करण्यात आला. जरी हे विधेयक शेवटी फेटाळले गेले असले तरी, त्याने जनशिक्षणाचे महत्त्व अधोरेखित केले आणि ब्रिटिश सरकारवर या मुद्द्यावर लक्ष देण्यासाठी महत्त्वपूर्ण दबाव आणला, ज्यामुळे भविष्यातील शैक्षणिक सुधारणांसाठी पाया रचला गेला.",
    "options_breakdown": [
      {
        "option_text_english": "Gopal Krishna Gokhale",
        "option_text_marathi": "गोपाळ कृष्ण गोखले",
        "is_correct": true,
        "reason": "Gopal Krishna Gokhale introduced a bill for compulsory and free primary education in the Imperial Legislative Council in 1911."
      },
      {
        "option_text_english": "Gopal Ganesh Agarkar",
        "option_text_marathi": "गोपाळ गणेश आगरकर",
        "is_correct": false,
        "reason": "Agarkar was a social reformer and educationist, but he passed away in 1895, well before 1911."
      },
      {
        "option_text_english": "Dadabhai Naoroji",
        "option_text_marathi": "दादाभाई नौरोजी",
        "is_correct": false,
        "reason": "Dadabhai Naoroji was a prominent nationalist and economist, known for his 'Drain of Wealth' theory, but not directly associated with this specific bill in 1911."
      },
      {
        "option_text_english": "Dhondo Keshav Karve",
        "option_text_marathi": "धोंडो केशव कर्वे",
        "is_correct": false,
        "reason": "D.K. Karve was a pioneer in women's education and social reform, but not the one who introduced this bill in the Imperial Legislative Council."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "इ.स. 1918 च्या मुंबई येथील अस्पृश्यता निवारक परिषदेचे अध्यक्ष कोण होते ?",
    "question_english": "Who was the President of Asprushyata Niwarak Parishad held in 1918 in Mumbai ?",
    "options_marathi": [
      "महाराजा सयाजीराव गायकवाड",
      "राजर्षी शाहू महाराज",
      "महर्षी वि.रा. शिंदे",
      "महात्मा गांधी"
    ],
    "options_english": [
      "Maharaja Sayajirao Gaikwad",
      "Rajarshi Shahu Maharaj",
      "Maharshi V.R. Shinde",
      "Mahatma Gandhi"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Social and Religious Reform Movements, Anti-Untouchability Movement",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Asprushyata Niwarak Parishad (Anti-Untouchability Conference) held in Mumbai in 1918 was a significant event in the history of social reform in India. It was organized by Maharshi Vitthal Ramji Shinde, a prominent social reformer and founder of the Depressed Classes Mission. The conference aimed to address the issue of untouchability and advocate for the rights of the depressed classes. Maharaja Sayajirao Gaikwad III of Baroda, a progressive ruler known for his reformist policies, presided over this important conference.",
    "explanation_marathi": "1918 मध्ये मुंबई येथे आयोजित अस्पृश्यता निवारक परिषद ही भारतातील समाजसुधारणेच्या इतिहासातील एक महत्त्वपूर्ण घटना होती. या परिषदेचे आयोजन महर्षी विठ्ठल रामजी शिंदे यांनी केले होते, जे एक प्रमुख समाजसुधारक आणि डिप्रेस्ड क्लासेस मिशनचे संस्थापक होते. या परिषदेचा उद्देश अस्पृश्यतेच्या समस्येवर लक्ष केंद्रित करणे आणि दलित वर्गाच्या हक्कांसाठी वकिली करणे हा होता. बडोद्याचे महाराजा सयाजीराव गायकवाड तिसरे, जे त्यांच्या पुरोगामी धोरणांसाठी ओळखले जातात, त्यांनी या महत्त्वाच्या परिषदेचे अध्यक्षपद भूषवले.",
    "options_breakdown": [
      {
        "option_text_english": "Maharaja Sayajirao Gaikwad",
        "option_text_marathi": "महाराजा सयाजीराव गायकवाड",
        "is_correct": true,
        "reason": "Maharaja Sayajirao Gaikwad III of Baroda presided over the Asprushyata Niwarak Parishad held in Mumbai in 1918."
      },
      {
        "option_text_english": "Rajarshi Shahu Maharaj",
        "option_text_marathi": "राजर्षी शाहू महाराज",
        "is_correct": false,
        "reason": "Rajarshi Shahu Maharaj of Kolhapur was a great patron of the anti-untouchability movement and worked extensively for the upliftment of backward classes, but he was not the president of this specific conference."
      },
      {
        "option_text_english": "Maharshi V.R. Shinde",
        "option_text_marathi": "महर्षी वि.रा. शिंदे",
        "is_correct": false,
        "reason": "Maharshi V.R. Shinde was the organizer and a key figure behind the conference, but not its president."
      },
      {
        "option_text_english": "Mahatma Gandhi",
        "option_text_marathi": "महात्मा गांधी",
        "is_correct": false,
        "reason": "Mahatma Gandhi was a staunch opponent of untouchability, but he did not preside over this particular conference in 1918."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "खालीलपैकी कोणती प्रकाशने किसन फागोजी बनसोड यांनी सामाजिक क्रांतीसाठी प्रकाशित केली होती ?\n(a) निराश्रित हिंदू नागरिक, विटाळ विध्वंसक\n(b) सत्यशोधक समाचार, अस्पृश्योद्धारक\n(c) मजूरपत्रिका, चोखामेळा\n(d) जागरूक, ब्राम्हणेतर\nपर्यायी उत्तरे :",
    "question_english": "Which of the following publications were published by Kisan Phagoji Bansod for social revolution ?\n(a) Nirashrit Hindu Nagrik, Vital Vidhwansak\n(b) Satyashodhak Samachar, Asprushodharak\n(c) Majurpatrika, Chokhamela\n(d) Jagruk, Brahmnetar\nAnswer Options :",
    "options_marathi": [
      "केवळ (a)",
      "(a) आणि (c)",
      "(b) आणि (d)",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Only (a)",
      "(a) and (c)",
      "(b) and (d)",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social Reformers and their Publications, Dalit Movement",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Kisan Fagoji Bansod (1879-1946) was a significant social reformer, journalist, and activist from Vidarbha, Maharashtra, who dedicated his life to the upliftment of the depressed classes and social equality. He used his writings and publications as powerful tools for social revolution. Among his notable publications were 'Nirashrit Hindu Nagrik' (Destitute Hindu Citizen), 'Vital Vidhwansak' (Annihilator of Impurity), 'Majurpatrika' (Labour Journal), and 'Chokhamela'. These periodicals aimed to awaken the marginalized communities, expose social injustices, and advocate for their rights and dignity.",
    "explanation_marathi": "किसन फागोजी बनसोड (1879-1946) हे विदर्भातील एक महत्त्वाचे समाजसुधारक, पत्रकार आणि कार्यकर्ते होते, ज्यांनी आपले जीवन दलित वर्गाच्या उन्नतीसाठी आणि सामाजिक समानतेसाठी समर्पित केले. त्यांनी आपली लेखन आणि प्रकाशने सामाजिक क्रांतीसाठी शक्तिशाली साधने म्हणून वापरली. त्यांच्या उल्लेखनीय प्रकाशनांमध्ये 'निराश्रित हिंदू नागरिक', 'विटाळ विध्वंसक', 'मजूरपत्रिका' आणि 'चोखामेळा' यांचा समावेश होता. या नियतकालिकांचा उद्देश वंचित समुदायांना जागृत करणे, सामाजिक अन्याय उघड करणे आणि त्यांच्या हक्कांसाठी व प्रतिष्ठेसाठी वकिली करणे हा होता.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "केवळ (a)",
        "is_correct": false,
        "reason": "While (a) contains publications by Kisan Fagoji Bansod, option (c) also contains his publications, making 'Only (a)' incomplete."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": true,
        "reason": "Both 'Nirashrit Hindu Nagrik', 'Vital Vidhwansak' (from a) and 'Majurpatrika', 'Chokhamela' (from c) were indeed published by Kisan Fagoji Bansod for social revolution."
      },
      {
        "option_text_english": "(b) and (d)",
        "option_text_marathi": "(b) आणि (d)",
        "is_correct": false,
        "reason": "'Satyashodhak Samachar' was associated with the Satyashodhak Samaj, and 'Jagruk' and 'Brahmnetar' were associated with other reformers like Dr. B.R. Ambedkar and Keshavrao Jedhe respectively, not primarily Kisan Fagoji Bansod."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason": "Option (a) and (c) correctly identify publications by Kisan Fagoji Bansod."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "सरकारने पहिले फॅक्टरी कमिशन कोणाच्या अध्यक्षतेखाली नियुक्त केले ?",
    "question_english": "Who was the president of First Factory Commission appointed by Govt. ?",
    "options_marathi": [
      "दिनशॉ पेटीट",
      "मोरारजी गोकूळदास",
      "अर्बुथनॉट",
      "सोराबजी बंगाली"
    ],
    "options_english": [
      "Dinshaw Petit",
      "Morarji Gokuldas",
      "Arbuthnott",
      "Sorabji Bengali"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "British Administration, Labour Laws",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The First Factory Commission was appointed by the British government in India in 1875 to investigate the working conditions in factories, particularly concerning child labour and working hours. This commission was a precursor to the first Factory Act of 1881. Major Arbuthnott was appointed as the president of this commission. The commission's findings and recommendations played a role in the initial attempts to regulate factory labour in India.",
    "explanation_marathi": "भारतातील ब्रिटिश सरकारने 1875 मध्ये पहिली फॅक्टरी कमिशन नियुक्त केली होती, ज्याचा उद्देश कारखान्यांमधील कामाच्या परिस्थितीची, विशेषतः बालकामगार आणि कामाच्या तासांशी संबंधित, चौकशी करणे हा होता. हे कमिशन 1881 च्या पहिल्या फॅक्टरी कायद्याचे पूर्वसूचक होते. मेजर अर्बुथनॉट यांची या कमिशनचे अध्यक्ष म्हणून नियुक्ती करण्यात आली होती. कमिशनच्या निष्कर्षांनी आणि शिफारसींनी भारतातील कारखाना कामगारांच्या नियमनासाठीच्या सुरुवातीच्या प्रयत्नांमध्ये भूमिका बजावली.",
    "options_breakdown": [
      {
        "option_text_english": "Dinshaw Petit",
        "option_text_marathi": "दिनशॉ पेटीट",
        "is_correct": false,
        "reason": "Dinshaw Petit was a prominent Parsi businessman and philanthropist, involved in various industrial ventures, but not the president of this commission."
      },
      {
        "option_text_english": "Morarji Gokuldas",
        "option_text_marathi": "मोरारजी गोकूळदास",
        "is_correct": false,
        "reason": "Morarji Gokuldas was a textile mill owner and industrialist, but not the president of the First Factory Commission."
      },
      {
        "option_text_english": "Arbuthnott",
        "option_text_marathi": "अर्बुथनॉट",
        "is_correct": true,
        "reason": "Major Arbuthnott was the president of the First Factory Commission appointed by the British government in 1875."
      },
      {
        "option_text_english": "Sorabji Bengali",
        "option_text_marathi": "सोराबजी बंगाली",
        "is_correct": false,
        "reason": "Sorabji Shapurji Bengali was a social reformer and advocate for factory workers' rights, but not the president of the commission."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "खालीलपैकी कोणते विधान चुकीचे आहे ?\n(1) राष्ट्रपतीची ईच्छा असेपर्यंत राज्यपाल आपल्या पदावर राहतात.\n(2) राष्ट्रपती केंव्हाही राज्यपालाची एका राज्यातून दुसऱ्या राज्यात बदली करु शकतात अथवा त्यांना बडतर्फ करु शकतात.\n(3) राज्यपालाच्या बदलीचा अथवा बडतर्फीचा राष्ट्रपतीचा आदेश हा अंतिम नसतो तर त्यास न्यायालयात आव्हान देता येते.\n(4) वरीलपैकी एकही नाही.",
    "question_english": "Which one of the following statements is not correct ?\n(1) The Governor remains in office during the pleasure of the President.\n(2) The Governor may be transferred from one state to another or dismissed by the President at any time.\n(3) The order of the President about transfer or dismissal of Governor is not conclusive and is justiciable.\n(4) None of the above",
    "options_marathi": [
      "राष्ट्रपतीची ईच्छा असेपर्यंत राज्यपाल आपल्या पदावर राहतात.",
      "राष्ट्रपती केंव्हाही राज्यपालाची एका राज्यातून दुसऱ्या राज्यात बदली करु शकतात अथवा त्यांना बडतर्फ करु शकतात.",
      "राज्यपालाच्या बदलीचा अथवा बडतर्फीचा राष्ट्रपतीचा आदेश हा अंतिम नसतो तर त्यास न्यायालयात आव्हान देता येते.",
      "वरीलपैकी एकही नाही."
    ],
    "options_english": [
      "The Governor remains in office during the pleasure of the President.",
      "The Governor may be transferred from one state to another or dismissed by the President at any time.",
      "The order of the President about transfer or dismissal of Governor is not conclusive and is justiciable.",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Governor, President, Centre-State Relations",
    "difficulty": "Hard",
    "trap_detected": "Nuance Trap",
    "explanation_english": "The question asks for the incorrect statement regarding the Governor's position.\n1.  Statement (1) is correct: The Governor holds office during the pleasure of the President (Article 156(1)).\n2.  Statement (2) is correct: The President can indeed transfer a Governor from one state to another or dismiss them at any time, based on the 'pleasure doctrine'.\n3.  Statement (3) claims that the President's order regarding transfer or dismissal of a Governor is 'not conclusive and is justiciable.' While the Supreme Court in the B.P. Singhal vs. Union of India (2010) case clarified that the President's power under the 'pleasure doctrine' is not absolute and can be challenged in court on very limited grounds (such as arbitrariness or mala fide intent), the general principle is that the President's decision is largely conclusive. Stating it is 'not conclusive' in a general sense might be considered incorrect, as the default position is that the President's order is final unless proven to be an abuse of power. Therefore, this statement is considered incorrect in the context of general MPSC understanding, which often emphasizes the strength of the President's pleasure.",
    "explanation_marathi": "राज्यपालाच्या पदासंबंधी चुकीचे विधान कोणते आहे हे प्रश्न विचारतो.\n1.  विधान (1) बरोबर आहे: राज्यपाल राष्ट्रपतींच्या मर्जीनुसार पद धारण करतात (अनुच्छेद 156(1)).\n2.  विधान (2) बरोबर आहे: राष्ट्रपती राज्यपालाची एका राज्यातून दुसऱ्या राज्यात बदली करू शकतात किंवा त्यांना कधीही बडतर्फ करू शकतात, हे 'राष्ट्रपतींच्या मर्जी' या सिद्धांतानुसार आहे.\n3.  विधान (3) असे म्हणते की राज्यपालाच्या बदलीचा किंवा बडतर्फीचा राष्ट्रपतींचा आदेश हा 'अंतिम नसतो आणि तो न्यायप्रविष्ट असतो.' जरी सर्वोच्च न्यायालयाने बी.पी. सिंघल विरुद्ध भारत सरकार (2010) प्रकरणात स्पष्ट केले आहे की 'राष्ट्रपतींच्या मर्जी' अंतर्गत राष्ट्रपतींची शक्ती निरंकुश नाही आणि तिला अत्यंत मर्यादित कारणांवर (उदा. मनमानी किंवा दुर्भावनापूर्ण हेतू) न्यायालयात आव्हान दिले जाऊ शकते, तरीही सामान्यतः राष्ट्रपतींचा निर्णय मोठ्या प्रमाणात अंतिम मानला जातो. तो 'अंतिम नसतो' असे सामान्य अर्थाने म्हणणे चुकीचे मानले जाऊ शकते, कारण राष्ट्रपतींचा आदेश हा सत्तेचा गैरवापर सिद्ध होईपर्यंत अंतिम असतो. त्यामुळे, सामान्य MPSC च्या समजुतीनुसार, जे राष्ट्रपतींच्या मर्जीच्या सामर्थ्यावर जोर देते, हे विधान चुकीचे मानले जाते.",
    "options_breakdown": [
      {
        "option_text_english": "The Governor remains in office during the pleasure of the President.",
        "option_text_marathi": "राष्ट्रपतीची ईच्छा असेपर्यंत राज्यपाल आपल्या पदावर राहतात.",
        "is_correct": false,
        "reason": "This statement is correct as per Article 156(1) of the Indian Constitution. The question asks for the incorrect statement."
      },
      {
        "option_text_english": "The Governor may be transferred from one state to another or dismissed by the President at any time.",
        "option_text_marathi": "राष्ट्रपती केंव्हाही राज्यपालाची एका राज्यातून दुसऱ्या राज्यात बदली करु शकतात अथवा त्यांना बडतर्फ करु शकतात.",
        "is_correct": false,
        "reason": "This statement is correct, reflecting the President's power under the 'pleasure doctrine'. The question asks for the incorrect statement."
      },
      {
        "option_text_english": "The order of the President about transfer or dismissal of Governor is not conclusive and is justiciable.",
        "option_text_marathi": "राज्यपालाच्या बदलीचा अथवा बडतर्फीचा राष्ट्रपतीचा आदेश हा अंतिम नसतो तर त्यास न्यायालयात आव्हान देता येते.",
        "is_correct": true,
        "reason": "This statement is considered incorrect. While judicial review is possible on grounds of arbitrariness or mala fide, the President's order is generally considered conclusive. It is not 'not conclusive' in a routine sense, and justiciability is limited, not a general rule. Hence, this is the incorrect statement."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी एकही नाही.",
        "is_correct": false,
        "reason": "Since statement (3) is incorrect, this option is not the answer."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "जुलै 2021 मध्ये भारतीय राज्यघटनेच्या अनुच्छेद ______ प्रमाणे पश्चिम बंगालच्या विधानसभेने राज्यात विधान परिषद स्थापन करण्याचा ठराव संमत केला.",
    "question_english": "The West Bengal Assembly passed a resolution to create a legislative council in the state under article ______ of the Indian Constitution in July 2021.",
    "options_marathi": [
      "169",
      "275",
      "310",
      "221"
    ],
    "options_english": [
      "169",
      "275",
      "310",
      "221"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "State Legislature, Legislative Council",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Article 169 of the Indian Constitution provides for the creation or abolition of Legislative Councils (Vidhan Parishad) in states. A state legislative assembly can pass a resolution to create or abolish a legislative council by a special majority (i.e., a majority of the total membership of the assembly and a majority of not less than two-thirds of the members of the assembly present and voting). After such a resolution is passed, the Parliament can then pass a law to give effect to it. In July 2021, the West Bengal Assembly passed such a resolution to create a legislative council, though it has not yet been enacted by Parliament.",
    "explanation_marathi": "भारतीय राज्यघटनेचे अनुच्छेद 169 राज्यांमध्ये विधान परिषदा (विधान परिषद) तयार करणे किंवा रद्द करण्यासंबंधीची तरतूद करते. राज्य विधानसभा विशेष बहुमताने (म्हणजे, विधानसभेच्या एकूण सदस्यसंख्येच्या बहुमताने आणि उपस्थित व मतदान करणाऱ्या सदस्यांच्या दोन-तृतीयांशपेक्षा कमी नसलेल्या बहुमताने) विधान परिषद तयार करण्याचा किंवा रद्द करण्याचा ठराव पारित करू शकते. असा ठराव पारित झाल्यानंतर, संसद त्यावर कायदा करून त्याला अंमलबजावणी करू शकते. जुलै 2021 मध्ये, पश्चिम बंगाल विधानसभेने विधान परिषद तयार करण्यासाठी असा ठराव पारित केला होता, जरी तो अद्याप संसदेने कायद्यात रूपांतरित केलेला नाही.",
    "options_breakdown": [
      {
        "option_text_english": "169",
        "option_text_marathi": "169",
        "is_correct": true,
        "reason": "Article 169 of the Indian Constitution deals with the creation and abolition of Legislative Councils in states."
      },
      {
        "option_text_english": "275",
        "option_text_marathi": "275",
        "is_correct": false,
        "reason": "Article 275 deals with grants from the Union to certain states."
      },
      {
        "option_text_english": "310",
        "option_text_marathi": "310",
        "is_correct": false,
        "reason": "Article 310 deals with the tenure of office of persons serving the Union or a State (doctrine of pleasure)."
      },
      {
        "option_text_english": "221",
        "option_text_marathi": "221",
        "is_correct": false,
        "reason": "Article 221 deals with the salaries, etc., of Judges of High Courts."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "खालीलपैकी कोणते विधान /विधाने सर्वोच्च न्यायालयाच्या न्यायाधिशांविषयी योग्य आहे/आहेत ?\n(a) सर्वोच्च न्यायालयाच्या न्यायाधिशांची नियुक्ती भारताचे राष्ट्रपती करतात.\n(b) राष्ट्रपतींची मर्जी असेपर्यंत ते पदावर राहतात.\n(c) चौकशी शिवाय त्यांना निलंबित केले जाऊ शकते.\n(d) संसदीय प्रक्रियेनंतर काढलेल्या राष्ट्रपतींच्या आदेशानुसार, सिद्ध झालेल्या गैरवर्तन किंवा अकार्यक्षमतेच्या आधारावर त्यांना काढले जाऊ शकते.\nखाली दिलेल्या पर्यायातून योग्य उत्तर निवडा :",
    "question_english": "Which of the following statement/statements is/are correct about a judge of Supreme Court of India ?\n(a) A judge of supreme court is appointed by the President of India.\n(b) He holds office during the pleasure of President.\n(c) He can be suspended without an inquiry.\n(d) He can be removed for proven misbehaviour or incapacity by a Presidential order passed after completing a Parliamentary procedure.\nSelect the correct answer from the options given below :",
    "options_marathi": [
      "(a), (b) आणि (c)",
      "(a), (c) आणि (d)",
      "(a) आणि (c)",
      "(a) आणि (d)"
    ],
    "options_english": [
      "(a), (b) and (c)",
      "(a), (c) and (d)",
      "(a) and (c)",
      "(a) and (d)"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Supreme Court, Judiciary, Appointment and Removal of Judges",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The question asks for the correct statements about a Supreme Court judge.\n*   (a) A judge of the Supreme Court is appointed by the President of India. This is correct as per Article 124(2) of the Constitution.\n*   (b) He holds office during the pleasure of the President. This is incorrect. Supreme Court judges do not hold office during the pleasure of the President. They have security of tenure and can only be removed through a rigorous impeachment process.\n*   (c) He can be suspended without an inquiry. This is incorrect. A Supreme Court judge cannot be suspended without due process, which involves an inquiry as part of the removal proceedings.\n*   (d) He can be removed for proven misbehaviour or incapacity by a Presidential order passed after completing a Parliamentary procedure. This is correct as per Article 124(4) and (5), outlining the impeachment process requiring a special majority in both Houses of Parliament.\nTherefore, statements (a) and (d) are correct.",
    "explanation_marathi": "सर्वोच्च न्यायालयाच्या न्यायाधीशांबद्दल योग्य विधाने कोणती आहेत हे प्रश्न विचारतो.\n*   (a) सर्वोच्च न्यायालयाच्या न्यायाधीशांची नियुक्ती भारताचे राष्ट्रपती करतात. हे विधान घटनेच्या अनुच्छेद 124(2) नुसार बरोबर आहे.\n*   (b) ते राष्ट्रपतींच्या मर्जीनुसार पदावर राहतात. हे विधान चुकीचे आहे. सर्वोच्च न्यायालयाचे न्यायाधीश राष्ट्रपतींच्या मर्जीनुसार पद धारण करत नाहीत. त्यांना पदाची सुरक्षितता असते आणि त्यांना केवळ कठोर महाभियोग प्रक्रियेद्वारेच पदावरून दूर केले जाऊ शकते.\n*   (c) चौकशीशिवाय त्यांना निलंबित केले जाऊ शकते. हे विधान चुकीचे आहे. सर्वोच्च न्यायालयाच्या न्यायाधीशांना योग्य प्रक्रियेशिवाय निलंबित केले जाऊ शकत नाही, ज्यामध्ये पदावरून दूर करण्याच्या कार्यवाहीचा भाग म्हणून चौकशीचा समावेश असतो.\n*   (d) संसदीय प्रक्रियेनंतर काढलेल्या राष्ट्रपतींच्या आदेशानुसार, सिद्ध झालेल्या गैरवर्तन किंवा अकार्यक्षमतेच्या आधारावर त्यांना काढले जाऊ शकते. हे विधान घटनेच्या अनुच्छेद 124(4) आणि (5) नुसार बरोबर आहे, जे संसदेच्या दोन्ही सभागृहांमध्ये विशेष बहुमताची आवश्यकता असलेल्या महाभियोग प्रक्रियेची रूपरेषा दर्शवते.\nम्हणून, विधाने (a) आणि (d) योग्य आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason": "Statements (b) and (c) are incorrect regarding a Supreme Court judge's tenure and removal process."
      },
      {
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) आणि (d)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect; a judge cannot be suspended without an inquiry."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason": "Statement (c) is incorrect; a judge cannot be suspended without an inquiry."
      },
      {
        "option_text_english": "(a) and (d)",
        "option_text_marathi": "(a) आणि (d)",
        "is_correct": true,
        "reason": "Statement (a) is correct (appointment by President), and statement (d) is correct (removal through parliamentary procedure for proven misbehaviour or incapacity)."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "भारतीय राज्यघटनेतील खालीलपैकी कोणत्या कलमाचा अर्थ असा होतो की सर्व सार्वजनिक ठिकाणे नागरीकांसाठी खुली आहेत ?",
    "question_english": "Which among the following articles of the Constitution of India means that all public places are open to all citizens ?",
    "options_marathi": [
      "कलम 15 (2)",
      "कलम 16 (2)",
      "कलम 17",
      "कलम 18"
    ],
    "options_english": [
      "Article 15 (2)",
      "Article 16 (2)",
      "Article 17",
      "Article 18"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Fundamental Rights, Right to Equality, Non-discrimination",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Article 15 of the Indian Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. Specifically, Article 15(2) states that no citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to (a) access to shops, public restaurants, hotels and places of public entertainment; or (b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public. This provision ensures that all public places are accessible to all citizens without any form of discrimination.",
    "explanation_marathi": "भारतीय राज्यघटनेचे अनुच्छेद 15 धर्म, वंश, जात, लिंग किंवा जन्मस्थान या कारणांवर आधारित भेदभावाला प्रतिबंध करते. विशेषतः, अनुच्छेद 15(2) असे नमूद करते की कोणत्याही नागरिकाला केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यापैकी कोणत्याही कारणावरून (अ) दुकाने, सार्वजनिक उपाहारगृहे, हॉटेल्स आणि सार्वजनिक मनोरंजनाच्या ठिकाणी प्रवेश; किंवा (ब) पूर्णतः किंवा अंशतः राज्याच्या निधीतून चालवल्या जाणाऱ्या किंवा सामान्य जनतेच्या वापरासाठी समर्पित असलेल्या विहिरी, तलाव, स्नानगृहे, रस्ते आणि सार्वजनिक स्थळांच्या वापराबाबत कोणत्याही अपंगत्व, दायित्व, निर्बंध किंवा अटींच्या अधीन केले जाणार नाही. ही तरतूद सुनिश्चित करते की सर्व सार्वजनिक ठिकाणे कोणत्याही प्रकारच्या भेदभावाशिवाय सर्व नागरिकांना उपलब्ध आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Article 15 (2)",
        "option_text_marathi": "कलम 15 (2)",
        "is_correct": true,
        "reason": "Article 15(2) explicitly prohibits discrimination in access to public places like shops, restaurants, hotels, and public resorts, ensuring they are open to all citizens."
      },
      {
        "option_text_english": "Article 16 (2)",
        "option_text_marathi": "कलम 16 (2)",
        "is_correct": false,
        "reason": "Article 16(2) deals with equality of opportunity in matters of public employment, prohibiting discrimination on certain grounds in government jobs."
      },
      {
        "option_text_english": "Article 17",
        "option_text_marathi": "कलम 17",
        "is_correct": false,
        "reason": "Article 17 abolishes untouchability. While related to social access, Article 15(2) is more direct and comprehensive regarding 'all public places'."
      },
      {
        "option_text_english": "Article 18",
        "option_text_marathi": "कलम 18",
        "is_correct": false,
        "reason": "Article 18 abolishes titles (except military and academic distinctions)."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "भारतीय राज्यघटनेच्या अनुच्छेद - 356 अनुसार घटक राज्यातील घटनात्मक यंत्रणा कोलमडून पडण्याच्या कारणास्तव राज्यातील राष्ट्रपती राजवट खालीलपैकी कोणत्या परिस्थितीत/कारणास्तव एक वर्षापेक्षा जास्त काळ चालू ठेवता येवू शकते ?\n(a) संबंधित राज्याच्या राज्यपालांनी राज्यात राष्ट्रपती राजवट चालू ठेवणे आवश्यक आहे असे राष्ट्रपतीस लेखी कळविले तर.\n(b) केन्द्रीय कॅबिनेटने राष्ट्रपती राजवट चालू ठेवणे आवश्यक आहे असे राष्ट्रपतीस लेखी कळविले तर.\n(c) संबंधित राज्यात कांही अडचणींमुळे विधान सभेच्या सार्वत्रिक निवडणूका घेणे अवघड आहे असे निर्वाचन आयोगाने प्रमाणित केले तर.\n(d) केवळ राष्ट्रीय आणीबाणी चालू असेल तर.\nपर्यायी उत्तरे :",
    "question_english": "According to the Article - 356 of the Indian Constitution the proclamation of Presidents rule in case of failure of the Constitutional machinery in a state can be extended beyond one year on which of the following ground/s?.\n(a) If the Governor of the concerned state gives in writing to the President that it is necessary to continue with the President's rule.\n(b) If the Union Cabinet gives in writing to the President that it is necessary to continue with the President's rule.\n(c) If the Election Commission certifies that the general elections to the legislative assembly of the concerned state cannot be hold on account of difficulties.\n(d) Only if a proclamation of national emergency is in operation.\nAnswer Options :",
    "options_marathi": [
      "(a), (c) आणि (d)",
      "(b) आणि (c)",
      "(c) आणि (d)",
      "केवळ (d)"
    ],
    "options_english": [
      "(a), (c) and (d)",
      "(b) and (c)",
      "(c) and (d)",
      "(d) only."
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Emergency Provisions, President's Rule",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Article 356 of the Indian Constitution deals with President's Rule in states. While President's Rule can initially be imposed for six months and extended up to a maximum of three years, its extension beyond one year is subject to very specific conditions outlined in Article 356(5). These conditions are:\n1.  A Proclamation of National Emergency (under Article 352) must be in operation throughout India, or in the whole or any part of the concerned state.\n2.  The Election Commission must certify that the general elections to the Legislative Assembly of the concerned state cannot be held due to difficulties.\nBoth these conditions must be met for President's Rule to be extended beyond one year. Statements (a) and (b) relate to the initial imposition or general continuation, not the specific conditions for extension beyond one year.",
    "explanation_marathi": "भारतीय राज्यघटनेचे अनुच्छेद 356 राज्यांमध्ये राष्ट्रपती राजवटीशी संबंधित आहे. राष्ट्रपती राजवट सुरुवातीला सहा महिन्यांसाठी लागू केली जाऊ शकते आणि जास्तीत जास्त तीन वर्षांपर्यंत वाढविली जाऊ शकते, परंतु तिची एक वर्षापेक्षा जास्त मुदतवाढ अनुच्छेद 356(5) मध्ये नमूद केलेल्या अत्यंत विशिष्ट अटींवर अवलंबून असते. या अटी खालीलप्रमाणे आहेत:\n1.  संपूर्ण भारतात किंवा संबंधित राज्याच्या संपूर्ण किंवा कोणत्याही भागात राष्ट्रीय आणीबाणीची (अनुच्छेद 352 अंतर्गत) घोषणा लागू असावी.\n2.  निवडणूक आयोगाने प्रमाणित केले पाहिजे की संबंधित राज्याच्या विधानसभेच्या सार्वत्रिक निवडणुका अडचणींमुळे घेणे शक्य नाही.\nराष्ट्रपती राजवट एक वर्षापेक्षा जास्त वाढवण्यासाठी या दोन्ही अटी पूर्ण होणे आवश्यक आहे. विधाने (a) आणि (b) प्रारंभिक लागू करण्याशी किंवा सामान्य चालू ठेवण्याशी संबंधित आहेत, एक वर्षापेक्षा जास्त मुदतवाढीच्या विशिष्ट अटींशी नाहीत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) आणि (d)",
        "is_correct": false,
        "reason": "Statement (a) is not a condition for extending President's Rule beyond one year. The Governor's report is for the initial imposition of President's Rule."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Statement (b) is not a condition for extending President's Rule beyond one year. The Union Cabinet's advice is for the initial imposition of President's Rule."
      },
      {
        "option_text_english": "(c) and (d)",
        "option_text_marathi": "(c) आणि (d)",
        "is_correct": true,
        "reason": "As per Article 356(5), President's Rule can be extended beyond one year only if (c) the Election Commission certifies difficulties in holding elections AND (d) a proclamation of national emergency is in operation."
      },
      {
        "option_text_english": "(d) only.",
        "option_text_marathi": "केवळ (d)",
        "is_correct": false,
        "reason": "Both conditions (c) and (d) must be met for the extension of President's Rule beyond one year, not just (d)."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "भारतीय घटना समितीचे शेवटचे अधिवेशन ______ या दिवशी झाले.",
    "question_english": "The final session of the Indian Constituent Assembly took place on ______",
    "options_marathi": [
      "26 नोव्हेंबर 1949",
      "26 जानेवारी 1950",
      "24 जानेवारी 1950",
      "9 डिसेंबर 1949"
    ],
    "options_english": [
      "26th November 1949",
      "26th January 1950",
      "24th January 1950",
      "9th December 1949"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Constituent Assembly of India",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Indian Constituent Assembly held its eleventh and final session on January 24, 1950. Although the Constitution was adopted on November 26, 1949, and came into force on January 26, 1950, the Assembly members appended their signatures to the Constitution on January 24, 1950. On this day, the Assembly also adopted the National Anthem and National Song, and elected Dr. Rajendra Prasad as the first President of India.",
    "explanation_marathi": "भारतीय घटना समितीचे अकरावे आणि शेवटचे अधिवेशन 24 जानेवारी 1950 रोजी झाले. जरी संविधान 26 नोव्हेंबर 1949 रोजी स्वीकारले गेले आणि 26 जानेवारी 1950 रोजी अंमलात आले, तरी घटना समितीच्या सदस्यांनी 24 जानेवारी 1950 रोजी संविधानावर स्वाक्षऱ्या केल्या. याच दिवशी समितीने राष्ट्रगीत आणि राष्ट्रीय गीत स्वीकारले आणि डॉ. राजेंद्र प्रसाद यांची भारताचे पहिले राष्ट्रपती म्हणून निवड केली.",
    "options_breakdown": [
      {
        "option_text_english": "26th November 1949",
        "option_text_marathi": "26 नोव्हेंबर 1949",
        "is_correct": false,
        "reason_english": "This is the date when the Constitution was adopted by the Constituent Assembly, not its final session.",
        "reason_marathi": "या दिवशी घटना समितीने संविधान स्वीकारले होते, हे शेवटचे अधिवेशन नव्हते."
      },
      {
        "option_text_english": "26th January 1950",
        "option_text_marathi": "26 जानेवारी 1950",
        "is_correct": false,
        "reason_english": "This is the date when the Constitution of India came into full force (Republic Day), not the final session of the Constituent Assembly.",
        "reason_marathi": "या दिवशी भारताचे संविधान पूर्णपणे अंमलात आले (प्रजासत्ताक दिन), हे घटना समितीचे शेवटचे अधिवेशन नव्हते."
      },
      {
        "option_text_english": "24th January 1950",
        "option_text_marathi": "24 जानेवारी 1950",
        "is_correct": true,
        "reason_english": "This was the date of the final session of the Constituent Assembly, where members signed the Constitution, and the National Anthem and National Song were adopted.",
        "reason_marathi": "या दिवशी घटना समितीचे शेवटचे अधिवेशन झाले, जिथे सदस्यांनी संविधानावर स्वाक्षऱ्या केल्या आणि राष्ट्रगीत व राष्ट्रीय गीत स्वीकारले गेले."
      },
      {
        "option_text_english": "9th December 1949",
        "option_text_marathi": "9 डिसेंबर 1949",
        "is_correct": false,
        "reason_english": "This is the date of the first meeting of the Constituent Assembly (9th December 1946), not 1949, and not the final session.",
        "reason_marathi": "ही घटना समितीच्या पहिल्या बैठकीची तारीख आहे (9 डिसेंबर 1946), 1949 ची नाही, आणि हे शेवटचे अधिवेशन नव्हते."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "राज्यपालांच्या विवेकाधीन अधिकाराखाली खालीलपैकी कोणत्या बाबी येतात ?\n(a) जेंव्हा राज्य विधिमंडळाचे अधिवेशन चालू नसेल तेंव्हा ते अध्यादेश काढू शकतात.\n(b) जेंव्हा बहुमत प्राप्त पक्षाच्या नेत्याबाबत एकमत नसेल तेंव्हा ते एखाद्या व्यक्तिला मुख्यमंत्री म्हणून नेमू शकतात.\n(c) राज्य विधिमंडळाने मंजूर केलेले विधेयक ते राष्ट्रपतीच्या संमतीसाठी राखून ठेऊ शकतात.\n(d) मंत्रिमंडळाने जर बहुमताचा पाठिंबा गमावल्याची त्यांची खात्री झाली तर ते मंत्रिमंडळ बरखास्त करु शकतात.\nयोग्य पर्याय :",
    "question_english": "Which of the following falls within the discretionary powers of the Governor ?\n(a) He can promulgate ordinances when the state legislature is not in session.\n(b) He can appoint a person as Chief Minister, if the majority party has no acknowledged leader.\n(c) He can reserve a bill passed by the State Legislature for the assent of the President.\n(d) He can dismiss the council of ministers if he is convinced that it has lost majority support.\nCorrect options are :",
    "options_marathi": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "फक्त (c) आणि (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a), (b), (c)",
      "(b), (c), (d)",
      "(c) and (d) only",
      "All above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Governor's Discretionary Powers",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Governor's discretionary powers are those that he exercises without the aid and advice of the Council of Ministers. Promulgating ordinances (a) is exercised on the advice of the Council of Ministers. However, appointing a Chief Minister when no party has a clear majority or a clear leader (b), reserving a bill for the President's consideration (c), and dismissing a Council of Ministers that has lost the confidence of the assembly (d) are indeed discretionary powers of the Governor.",
    "explanation_marathi": "राज्यपालांचे विवेकाधीन अधिकार म्हणजे असे अधिकार जे ते मंत्रिमंडळाच्या सल्ल्याशिवाय वापरतात. अध्यादेश काढणे (a) हे मंत्रिमंडळाच्या सल्ल्यानुसार केले जाते. तथापि, जेव्हा कोणत्याही पक्षाला स्पष्ट बहुमत नसते किंवा स्पष्ट नेता नसतो तेव्हा मुख्यमंत्र्याची नियुक्ती करणे (b), राष्ट्रपतींच्या विचारार्थ विधेयक राखून ठेवणे (c) आणि विधानसभेचा विश्वास गमावलेल्या मंत्रिमंडळाला बरखास्त करणे (d) हे राज्यपालांचे विवेकाधीन अधिकार आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b), (c)",
        "option_text_marathi": "(a), (b), (c)",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. The power to promulgate ordinances is exercised on the aid and advice of the Council of Ministers, not as a discretionary power.",
        "reason_marathi": "विधान (a) चुकीचे आहे. अध्यादेश काढण्याचा अधिकार मंत्रिमंडळाच्या सल्ल्यानुसार वापरला जातो, तो विवेकाधीन अधिकार नाही."
      },
      {
        "option_text_english": "(b), (c), (d)",
        "option_text_marathi": "(b), (c), (d)",
        "is_correct": true,
        "reason_english": "Statements (b), (c), and (d) correctly describe the discretionary powers of the Governor. These include appointing a CM in case of no clear majority, reserving bills for the President, and dismissing a council of ministers that has lost majority support.",
        "reason_marathi": "विधाने (b), (c) आणि (d) राज्यपालांच्या विवेकाधीन अधिकारांचे योग्य वर्णन करतात. यात स्पष्ट बहुमत नसताना मुख्यमंत्र्याची नियुक्ती करणे, राष्ट्रपतींसाठी विधेयके राखून ठेवणे आणि बहुमत गमावलेल्या मंत्रिमंडळाला बरखास्त करणे यांचा समावेश आहे."
      },
      {
        "option_text_english": "(c) and (d) only",
        "option_text_marathi": "फक्त (c) आणि (d)",
        "is_correct": false,
        "reason_english": "Statement (b) is also a discretionary power, making this option incomplete.",
        "reason_marathi": "विधान (b) देखील विवेकाधीन अधिकार आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "Statement (a) is not a discretionary power, so 'All above' is incorrect.",
        "reason_marathi": "विधान (a) विवेकाधीन अधिकार नाही, त्यामुळे 'वरील सर्व' हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "खालीलपैकी कोण 'मसूदा समितीचे' सदस्य नव्हते ?\n(1) एन्. गोपालस्वामी अय्यंगार\n(2) मोहम्मद सादुल्ला\n(3) सच्चिदानंद सिन्हा\n(4) अल्लादि कृष्णस्वामी अय्यर",
    "question_english": "Who among the following was not a member of 'Drafting Committee'?",
    "options_marathi": [
      "एन्. गोपालस्वामी अय्यंगार",
      "मोहम्मद सादुल्ला",
      "सच्चिदानंद सिन्हा",
      "अल्लादि कृष्णस्वामी अय्यर"
    ],
    "options_english": [
      "N. Gopalaswami Ayyangar",
      "Mohammed Sadulla",
      "Sachchidananda Sinha",
      "Alladi Krishnaswami Iyer"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Constituent Assembly - Drafting Committee",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Drafting Committee of the Indian Constituent Assembly was formed on August 29, 1947, with Dr. B.R. Ambedkar as its chairman. Its members included N. Gopalaswami Ayyangar, Alladi Krishnaswami Ayyar, Dr. K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau (who replaced B.L. Mitter), and T.T. Krishnamachari (who replaced D.P. Khaitan). Sachchidananda Sinha was the interim President of the Constituent Assembly for its first meeting on December 9, 1946, but he was not a member of the Drafting Committee.",
    "explanation_marathi": "भारतीय घटना समितीची मसुदा समिती 29 ऑगस्ट 1947 रोजी डॉ. बी.आर. आंबेडकर यांच्या अध्यक्षतेखाली स्थापन झाली. या समितीचे सदस्य एन. गोपाळस्वामी अय्यंगार, अल्लादी कृष्णस्वामी अय्यर, डॉ. के.एम. मुन्शी, सय्यद मोहम्मद सादुल्ला, एन. माधवा राव (बी.एल. मित्तर यांच्या जागी) आणि टी.टी. कृष्णमाचारी (डी.पी. खैतान यांच्या जागी) हे होते. सच्चिदानंद सिन्हा हे 9 डिसेंबर 1946 रोजी झालेल्या घटना समितीच्या पहिल्या बैठकीचे हंगामी अध्यक्ष होते, परंतु ते मसुदा समितीचे सदस्य नव्हते.",
    "options_breakdown": [
      {
        "option_text_english": "N. Gopalaswami Ayyangar",
        "option_text_marathi": "एन्. गोपालस्वामी अय्यंगार",
        "is_correct": false,
        "reason_english": "He was a member of the Drafting Committee.",
        "reason_marathi": "ते मसुदा समितीचे सदस्य होते."
      },
      {
        "option_text_english": "Mohammed Sadulla",
        "option_text_marathi": "मोहम्मद सादुल्ला",
        "is_correct": false,
        "reason_english": "He was a member of the Drafting Committee.",
        "reason_marathi": "ते मसुदा समितीचे सदस्य होते."
      },
      {
        "option_text_english": "Sachchidananda Sinha",
        "option_text_marathi": "सच्चिदानंद सिन्हा",
        "is_correct": true,
        "reason_english": "He was the interim President of the Constituent Assembly but not a member of the Drafting Committee.",
        "reason_marathi": "ते घटना समितीचे हंगामी अध्यक्ष होते, परंतु मसुदा समितीचे सदस्य नव्हते."
      },
      {
        "option_text_english": "Alladi Krishnaswami Iyer",
        "option_text_marathi": "अल्लादि कृष्णस्वामी अय्यर",
        "is_correct": false,
        "reason_english": "He was a member of the Drafting Committee.",
        "reason_marathi": "ते मसुदा समितीचे सदस्य होते."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "भारतीय राज्यघटनेच्या इतिहासातील ______ हा महत्त्वाचा टप्पा आहे.",
    "question_english": "______ is an important landmark in the Constitutional history of India.",
    "options_marathi": [
      "दी इंडियन कौन्सिल अॅक्ट, 1857",
      "दी इंडियन कौन्सिल अॅक्ट, 1861",
      "गव्हर्नमेंट ऑफ इंडिया अॅक्ट, 1999",
      "गव्हर्नमेंट ऑफ इंडिया अॅक्ट, 1936"
    ],
    "options_english": [
      "The Indian Council Act, 1857",
      "The Indian Council Act, 1861",
      "Government of India Act, 1999",
      "Government of India Act, 1936"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Constitutional Development of India (British Era)",
    "difficulty": "Medium",
    "trap_detected": "Distractor options",
    "explanation_english": "The Indian Council Act of 1861 is considered a significant landmark in the constitutional history of India because it introduced representative institutions by associating Indians with the law-making process for the first time. It also initiated the process of decentralization by restoring the legislative powers to the Bombay and Madras Presidencies, reversing the centralizing tendency introduced by the Charter Act of 1833. This act laid some foundational elements for future legislative bodies in India.",
    "explanation_marathi": "1861 चा भारतीय परिषद कायदा हा भारताच्या घटनात्मक इतिहासातील एक महत्त्वाचा टप्पा मानला जातो, कारण या कायद्याने प्रथमच भारतीयांना कायदे निर्मिती प्रक्रियेत सहभागी करून प्रतिनिधी संस्थांची ओळख करून दिली. याने 1833 च्या चार्टर कायद्याने सुरू केलेली केंद्रीकरणाची प्रवृत्ती उलटवून, मुंबई आणि मद्रास प्रांतांना कायदेविषयक अधिकार परत देऊन विकेंद्रीकरणाची प्रक्रिया सुरू केली. या कायद्याने भारतातील भविष्यातील कायदेमंडळांसाठी काही मूलभूत घटक तयार केले.",
    "options_breakdown": [
      {
        "option_text_english": "The Indian Council Act, 1857",
        "option_text_marathi": "दी इंडियन कौन्सिल अॅक्ट, 1857",
        "is_correct": false,
        "reason_english": "There was no Indian Council Act in 1857. This year is known for the Sepoy Mutiny.",
        "reason_marathi": "1857 मध्ये कोणताही भारतीय परिषद कायदा नव्हता. हे वर्ष शिपाई बंडासाठी ओळखले जाते."
      },
      {
        "option_text_english": "The Indian Council Act, 1861",
        "option_text_marathi": "दी इंडियन कौन्सिल अॅक्ट, 1861",
        "is_correct": true,
        "reason_english": "This act was a landmark as it introduced representative institutions by involving Indians in law-making and initiated decentralization.",
        "reason_marathi": "हा कायदा एक महत्त्वाचा टप्पा होता कारण त्याने भारतीयांना कायदे निर्मितीमध्ये सहभागी करून प्रतिनिधी संस्थांची ओळख करून दिली आणि विकेंद्रीकरण सुरू केले."
      },
      {
        "option_text_english": "Government of India Act, 1999",
        "option_text_marathi": "गव्हर्नमेंट ऑफ इंडिया अॅक्ट, 1999",
        "is_correct": false,
        "reason_english": "There was no Government of India Act in 1999. This is an incorrect option.",
        "reason_marathi": "1999 मध्ये कोणताही भारत सरकार कायदा नव्हता. हा एक चुकीचा पर्याय आहे."
      },
      {
        "option_text_english": "Government of India Act, 1936",
        "option_text_marathi": "गव्हर्नमेंट ऑफ इंडिया अॅक्ट, 1936",
        "is_correct": false,
        "reason_english": "While the Government of India Act, 1935, was a major landmark, the year 1936 is not associated with a specific act of this name. The 1861 Act is more foundational for the early constitutional history.",
        "reason_marathi": "भारत सरकार कायदा, 1935 हा एक महत्त्वाचा टप्पा असला तरी, 1936 हे वर्ष या नावाच्या विशिष्ट कायद्याशी संबंधित नाही. 1861 चा कायदा प्रारंभिक घटनात्मक इतिहासासाठी अधिक मूलभूत आहे."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "राज्याच्या विधिमंडळाबाबत खालील विधाने विचारात घ्या :\n(a) कोणतेही विधेयक विधिमंडळाच्या कोणत्याही सभागृहात प्रथम मांडता येते.\n(b) सामान्य विधेयकाबाबत दोन्ही सभागृहांमध्ये असहमती झाल्यास दोन्ही सभागृहांची संयुक्त बैठक बोलावली जावू शकते.\n(c) विधिमंडळाच्या दोन्ही सभागृहांमध्ये राज्यघटनेने अनुसूचित जाती व अनुसूचित जमातींसाठी राखीव जागांची तरतूद केलेली आहे.\nवरीलपैकी कोणते विधान/विधाने बरोबर आहे/त ?",
    "question_english": "Consider the following statements regarding State Legislature :\n(a) Any bill can be introduced in any house of the legislature.\n(b) A joint sitting of both the houses may be summoned if there is a disagreeinent between both the houses on an ordinary bill.\n(c) Constitution provided for the reservation of seats for Scheduled Castes and Scheduled Tribes in the both houses of legislature.\nWhich of the statements given above is/are correct ?",
    "options_marathi": [
      "(a) फक्त",
      "(b) फक्त",
      "(a) आणि (c)",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "(a) only",
      "(b) only",
      "(a) and (c)",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Legislature",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's analyze each statement:\n(a) 'Any bill can be introduced in any house of the legislature.' This is incorrect. While ordinary bills can be introduced in either house (if bicameral), Money Bills can only be introduced in the Legislative Assembly. The word 'Any bill' makes this statement false.\n(b) 'A joint sitting of both the houses may be summoned if there is a disagreement between both the houses on an ordinary bill.' This is incorrect. The provision for a joint sitting (Article 108) exists only for the Parliament (Lok Sabha and Rajya Sabha), not for state legislatures.\n(c) 'Constitution provided for the reservation of seats for Scheduled Castes and Scheduled Tribes in the both houses of legislature.' This is incorrect. The Constitution provides for the reservation of seats for SCs and STs only in the Legislative Assembly (lower house) of the states, not in the Legislative Council (upper house).\nSince all three statements are incorrect, 'None of the above' is the correct answer.",
    "explanation_marathi": "प्रत्येक विधानाचे विश्लेषण करूया:\n(a) 'कोणतेही विधेयक विधिमंडळाच्या कोणत्याही सभागृहात प्रथम मांडता येते.' हे विधान चुकीचे आहे. सामान्य विधेयके दोन्ही सभागृहांपैकी कोणत्याही सभागृहात (जर द्विगृही असेल तर) मांडता येतात, परंतु धन विधेयक केवळ विधानसभेतच मांडता येते. 'कोणतेही विधेयक' या शब्दामुळे हे विधान चुकीचे ठरते.\n(b) 'सामान्य विधेयकाबाबत दोन्ही सभागृहांमध्ये असहमती झाल्यास दोन्ही सभागृहांची संयुक्त बैठक बोलावली जावू शकते.' हे विधान चुकीचे आहे. संयुक्त बैठकीची तरतूद (अनुच्छेद 108) केवळ संसदेसाठी (लोकसभा आणि राज्यसभा) आहे, राज्य विधिमंडळांसाठी नाही.\n(c) 'विधिमंडळाच्या दोन्ही सभागृहांमध्ये राज्यघटनेने अनुसूचित जाती व अनुसूचित जमातींसाठी राखीव जागांची तरतूद केलेली आहे.' हे विधान चुकीचे आहे. संविधानाने अनुसूचित जाती आणि अनुसूचित जमातींसाठी जागांचे आरक्षण केवळ राज्यांच्या विधानसभेत (कनिष्ठ सभागृह) प्रदान केले आहे, विधान परिषदेत (वरिष्ठ सभागृह) नाही.\nवरील तिन्ही विधाने चुकीची असल्याने, 'वरीलपैकी एकही नाही' हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect because money bills cannot be introduced in any house; they must originate in the Legislative Assembly.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण धन विधेयके कोणत्याही सभागृहात मांडता येत नाहीत; ती विधानसभेतच सुरू करावी लागतात."
      },
      {
        "option_text_english": "(b) only",
        "option_text_marathi": "(b) फक्त",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. There is no provision for a joint sitting of state legislatures in the Indian Constitution.",
        "reason_marathi": "विधान (b) चुकीचे आहे. भारतीय संविधानात राज्य विधिमंडळांच्या संयुक्त बैठकीची कोणतीही तरतूद नाही."
      },
      {
        "option_text_english": "(a) and (c)",
        "option_text_marathi": "(a) आणि (c)",
        "is_correct": false,
        "reason_english": "Both statements (a) and (c) are incorrect. Statement (c) is false as reservation for SC/ST is only in the Legislative Assembly, not both houses.",
        "reason_marathi": "दोन्ही विधाने (a) आणि (c) चुकीची आहेत. विधान (c) चुकीचे आहे कारण SC/ST साठी आरक्षण केवळ विधानसभेत आहे, दोन्ही सभागृहांमध्ये नाही."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी एकही नाही",
        "is_correct": true,
        "reason_english": "All three statements (a), (b), and (c) are incorrect based on the provisions of the Indian Constitution regarding state legislatures.",
        "reason_marathi": "भारतीय संविधानातील राज्य विधिमंडळांच्या तरतुदींनुसार, तिन्ही विधाने (a), (b) आणि (c) चुकीची आहेत."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "खालील विधाने विचारात घ्या.\nविधान I : कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 अंतर्गत 'मूल' म्हणजे 18 वर्षाखालील कोणतीही व्यक्ती आणि त्यात दत्तक मुलाचा समावेश होतो.\nविधान II : कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 अंतर्गत 'बालकाची' व्याख्या कलम 2(d) मध्ये दिली आहे.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following statements.\nStatement I: 'Child' means any person below the age of 18 years and includes adopted child, according to the protection of women from Domestic Violence Act, 2005.\nStatement II : Under the protection of women from Domestic Violence Act, 2005, the definition of 'Child' is given under section 2(d).\nAnswer Options :",
    "options_marathi": [
      "विधान I बरोबर आहे, II चूक",
      "विधान II बरोबर आहे, I चूक",
      "दोन्ही विधाने बरोबर आहेत",
      "दोन्ही विधाने चूक आहेत"
    ],
    "options_english": [
      "Statement I is correct, II incorrect",
      "Statement II correct; I incorrect",
      "Both the Statements are correct",
      "Both the Statements are incorrect"
    ],
    "correct_option_index": 1,
    "subject": "Law",
    "topic": "Protection of Women from Domestic Violence Act, 2005",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's examine the statements regarding the Protection of Women from Domestic Violence Act, 2005.\nStatement I correctly defines 'child' as any person below 18 years, including adopted children, as per Section 2(b) of the Act. Statement II incorrectly states that the definition of 'child' is given under Section 2(d). Section 2(d) of the Act defines 'domestic incident report,' while 'child' is defined under Section 2(b). Therefore, Statement I is correct, and Statement II is incorrect.",
    "explanation_marathi": "कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 संदर्भातील विधाने तपासूया.\nविधान I हे 'बालक' या शब्दाची योग्य व्याख्या करते, म्हणजे 18 वर्षांखालील कोणतीही व्यक्ती, ज्यात दत्तक मुलाचा समावेश आहे, जसे की कायद्याच्या कलम 2(b) मध्ये नमूद केले आहे. विधान II हे चुकीचे आहे कारण 'बालक' या शब्दाची व्याख्या कलम 2(d) मध्ये दिली नसून, कलम 2(b) मध्ये दिली आहे. कायद्याच्या कलम 2(d) मध्ये 'कौटुंबिक घटनेचा अहवाल' (domestic incident report) याची व्याख्या दिली आहे. म्हणून, विधान I बरोबर आहे आणि विधान II चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Statement I is correct, II incorrect",
        "option_text_marathi": "विधान I बरोबर आहे, II चूक",
        "is_correct": true,
        "reason_english": "Statement I is correct as per Section 2(b) of the Act. Statement II is incorrect because Section 2(d) defines 'domestic incident report', not 'child'.",
        "reason_marathi": "विधान I कायद्याच्या कलम 2(b) नुसार बरोबर आहे. विधान II चुकीचे आहे कारण कलम 2(d) 'कौटुंबिक घटनेचा अहवाल' परिभाषित करते, 'बालक' नाही."
      },
      {
        "option_text_english": "Statement II correct; I incorrect",
        "option_text_marathi": "विधान II बरोबर आहे, I चूक",
        "is_correct": false,
        "reason_english": "Statement I is correct, and Statement II is incorrect.",
        "reason_marathi": "विधान I बरोबर आहे आणि विधान II चुकीचे आहे."
      },
      {
        "option_text_english": "Both the Statements are correct",
        "option_text_marathi": "दोन्ही विधाने बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement II is incorrect.",
        "reason_marathi": "विधान II चुकीचे आहे."
      },
      {
        "option_text_english": "Both the Statements are incorrect",
        "option_text_marathi": "दोन्ही विधाने चूक आहेत",
        "is_correct": false,
        "reason_english": "Statement I is correct.",
        "reason_marathi": "विधान I बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 चे कलम 10 ______ शी संबंधित आहे.\n(a) प्रतिवादीकडून संरक्षण आदेशाचे उल्लंघन केल्याबद्दल दंड\n(b) संरक्षण अधिकाऱ्याने केलेल्या गुन्ह्याची दखल\n(c) केंद्र सरकारला नियम बनविण्याचा अधिकार\n(d) सेवा प्रदाते\nपर्यायी उत्तरे :",
    "question_english": "Section 10 of the protection of women from Domestic Violence Act, 2005 deals with :\n(a) Penalty for breach of protection order by the respondant\n(b) Cognizance of offence committed by protection officer\n(c) Power of Central Govt. to make rules\n(d) Service Providers\nAnswer Options :",
    "options_marathi": [
      "केवळ (a) बरोबर",
      "केवळ (b) बरोबर",
      "केवळ (c) आणि (d) बरोबर",
      "केवळ (d) बरोबर"
    ],
    "options_english": [
      "Only (a) correct",
      "Only (b) correct",
      "Only (c) and (d) correct",
      "Only (d) correct"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Protection of Women from Domestic Violence Act, 2005 (Specific Sections)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 10 of the Protection of Women from Domestic Violence Act, 2005, is specifically dedicated to 'Service Providers.' These are organizations or individuals registered under the Act who provide services like shelter homes, medical facilities, or counseling to aggrieved persons. The other options correspond to different sections of the Act: (a) Penalty for breach of protection order is Section 31, (b) Cognizance of offence committed by protection officer is Section 33, and (c) Power of Central Government to make rules is Section 37.",
    "explanation_marathi": "कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 चे कलम 10 हे विशेषतः 'सेवा प्रदाते' (Service Providers) यांच्याशी संबंधित आहे. हे असे संस्था किंवा व्यक्ती आहेत जे कायद्यांतर्गत नोंदणीकृत आहेत आणि पीडित व्यक्तींना निवारा गृहे, वैद्यकीय सुविधा किंवा समुपदेशन यांसारख्या सेवा पुरवतात. इतर पर्याय कायद्याच्या वेगवेगळ्या कलमांशी संबंधित आहेत: (a) संरक्षण आदेशाचे उल्लंघन केल्याबद्दल दंड कलम 31 मध्ये आहे, (b) संरक्षण अधिकाऱ्याने केलेल्या गुन्ह्याची दखल कलम 33 मध्ये आहे, आणि (c) केंद्र सरकारला नियम बनविण्याचा अधिकार कलम 37 मध्ये आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a) correct",
        "option_text_marathi": "केवळ (a) बरोबर",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect. Penalty for breach of protection order is dealt with under Section 31, not Section 10.",
        "reason_marathi": "विधान (a) चुकीचे आहे. संरक्षण आदेशाचे उल्लंघन केल्याबद्दल दंड कलम 31 मध्ये आहे, कलम 10 मध्ये नाही."
      },
      {
        "option_text_english": "Only (b) correct",
        "option_text_marathi": "केवळ (b) बरोबर",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect. Cognizance of offence committed by protection officer is dealt with under Section 33, not Section 10.",
        "reason_marathi": "विधान (b) चुकीचे आहे. संरक्षण अधिकाऱ्याने केलेल्या गुन्ह्याची दखल कलम 33 मध्ये आहे, कलम 10 मध्ये नाही."
      },
      {
        "option_text_english": "Only (c) and (d) correct",
        "option_text_marathi": "केवळ (c) आणि (d) बरोबर",
        "is_correct": false,
        "reason_english": "Statement (c) is incorrect. Power of Central Govt. to make rules is dealt with under Section 37, not Section 10.",
        "reason_marathi": "विधान (c) चुकीचे आहे. केंद्र सरकारला नियम बनविण्याचा अधिकार कलम 37 मध्ये आहे, कलम 10 मध्ये नाही."
      },
      {
        "option_text_english": "Only (d) correct",
        "option_text_marathi": "केवळ (d) बरोबर",
        "is_correct": true,
        "reason_english": "Statement (d) is correct. Section 10 of the Act specifically deals with 'Service Providers'.",
        "reason_marathi": "विधान (d) बरोबर आहे. कायद्याचे कलम 10 विशेषतः 'सेवा प्रदाते' यांच्याशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "जिल्हा न्यायाधीश म्हणून किमान ______ वर्षाचा अनुभव असलेल्या राज्यातील उच्च न्यायालयाचे किंवा जिल्हा न्यायालयाचे न्यायाधीश असलेल्या किंवा राहिलेल्या व्यक्तीला राज्य मानवी हक्क आयोगाचे सदस्य म्हणून नियुक्त केले जाऊ शकते.",
    "question_english": "A person who is, or has been a Judge of High Court or District Judge in the state with a minimum of ______ years experience as District judge can be appointed as a member of State Human Rights Commission.",
    "options_marathi": [
      "आठ",
      "सहा",
      "नऊ",
      "वरीलपैकी काहीही नाही"
    ],
    "options_english": [
      "Eight",
      "Six",
      "Nine",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "State Human Rights Commission (SHRC)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "As per Section 22(1)(d) of the Protection of Human Rights Act, 1993 (as amended), a person who is, or has been, a District Judge in a State with a minimum of seven years experience as a District Judge can be appointed as a member of the State Human Rights Commission. Since the options provided are eight, six, and nine, and none of them is seven, the correct answer is 'None of the above.'",
    "explanation_marathi": "मानवी हक्क संरक्षण कायदा, 1993 (सुधारित) च्या कलम 22(1)(d) नुसार, जो व्यक्ती राज्याचा जिल्हा न्यायाधीश आहे किंवा राहिला आहे आणि ज्याला जिल्हा न्यायाधीश म्हणून किमान सात वर्षांचा अनुभव आहे, अशा व्यक्तीची राज्य मानवी हक्क आयोगाचा सदस्य म्हणून नियुक्ती केली जाऊ शकते. दिलेल्या पर्यायांमध्ये आठ, सहा आणि नऊ हे आकडे असल्याने आणि सात हा आकडा नसल्याने, योग्य उत्तर 'वरीलपैकी काहीही नाही' हे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Eight",
        "option_text_marathi": "आठ",
        "is_correct": false,
        "reason_english": "The required experience for a District Judge to be appointed as a member of SHRC is seven years, not eight.",
        "reason_marathi": "राज्य मानवी हक्क आयोगाचा सदस्य म्हणून जिल्हा न्यायाधीशासाठी आवश्यक अनुभव सात वर्षे आहे, आठ नाही."
      },
      {
        "option_text_english": "Six",
        "option_text_marathi": "सहा",
        "is_correct": false,
        "reason_english": "The required experience for a District Judge to be appointed as a member of SHRC is seven years, not six.",
        "reason_marathi": "राज्य मानवी हक्क आयोगाचा सदस्य म्हणून जिल्हा न्यायाधीशासाठी आवश्यक अनुभव सात वर्षे आहे, सहा नाही."
      },
      {
        "option_text_english": "Nine",
        "option_text_marathi": "नऊ",
        "is_correct": false,
        "reason_english": "The required experience for a District Judge to be appointed as a member of SHRC is seven years, not nine.",
        "reason_marathi": "राज्य मानवी हक्क आयोगाचा सदस्य म्हणून जिल्हा न्यायाधीशासाठी आवश्यक अनुभव सात वर्षे आहे, नऊ नाही."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी काहीही नाही",
        "is_correct": true,
        "reason_english": "The correct minimum experience required is seven years, which is not listed in the given options.",
        "reason_marathi": "आवश्यक किमान अनुभव सात वर्षे आहे, जो दिलेल्या पर्यायांमध्ये समाविष्ट नाही."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "खालील विधाने विचारात घ्या.\n(a) संयुक्त राष्ट्रसंघाच्या महासभेने 10 डिसेंबर 1948 रोजी मानवी हक्कांची सार्वत्रिक घोषणापत्रिका स्विकारली.\n(b) संयुक्त राष्ट्रसंघाच्या सुरक्षा परिषदेने 10 डिसेंबर 1947 रोजी मानवी हक्कांची सार्वत्रिक घोषणापत्रिका स्विकारली.\n(c) संयुक्त राष्ट्रसंघामध्ये मानवी हक्कांच्या सार्वत्रिक घोषणापत्राला चव्वेचाळीस विरुद्ध शून्य मतांनी स्विकारण्यात आले.\n(d) संयुक्त राष्ट्रसंघामध्ये मानवाधिकारांची सार्वत्रिक घोषणा बेचाळीस विरुद्ध शून्य आणि आठ गैरहजर राहून स्विकारण्यात आली.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following statements.\n(a) The General Assembly of United Nations adopted the UDHR (Universal Declaration of Human Rights) on 10 December 1948.\n(b) The Security Council of UN adopted the UDHR on 10 December 1947.\n(c) The UDHR was adopted in UN with forty-four votes to nil.\n(d) The UDHR was adopted in UN with forty-two votes to nil with eight abstentions.\nAnswer Options :",
    "options_marathi": [
      "केवळ (a) आणि (b) बरोबर",
      "केवळ (a), (b) आणि (c) बरोबर",
      "केवळ (a), (b) आणि (d) बरोबर",
      "केवळ (a) आणि (d) बरोबर"
    ],
    "options_english": [
      "Only (a) and (b) correct",
      "Only (a), (b) and (c) correct",
      "Only (a), (b) and (d) correct",
      "Only (a) and (d) correct"
    ],
    "correct_option_index": 0,
    "subject": "International Relations",
    "topic": "Universal Declaration of Human Rights (UDHR)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's analyze the statements regarding the Universal Declaration of Human Rights (UDHR):\n(a) The General Assembly of the United Nations adopted the UDHR on 10 December 1948. This statement is factually correct.\n(b) The UDHR was adopted by the UN General Assembly, not the Security Council, and the year was 1948, not 1947. So, this statement is incorrect.\n(c) The UDHR was adopted by 48 votes to none, with 8 abstentions. Therefore, 'forty-four votes to nil' is incorrect.\n(d) The UDHR was adopted by 48 votes to none, with 8 abstentions. The statement 'forty-two votes to nil with eight abstentions' is factually incorrect as the number of affirmative votes was 48.\nBased on factual accuracy, only statement (a) is correct. Since none of the provided answer options correctly reflect that only (a) is correct, and options 1, 2, 3, 4 all include incorrect statements (b, c, or d), there is no fully correct option among the choices.",
    "explanation_marathi": "मानवी हक्कांच्या सार्वत्रिक घोषणापत्र (UDHR) संदर्भातील विधाने तपासूया:\n(a) संयुक्त राष्ट्रसंघाच्या महासभेने 10 डिसेंबर 1948 रोजी मानवी हक्कांची सार्वत्रिक घोषणापत्रिका स्वीकारली. हे विधान वस्तुस्थितीनुसार बरोबर आहे.\n(b) UDHR संयुक्त राष्ट्रसंघाच्या सुरक्षा परिषदेने नव्हे, तर महासभेने स्वीकारले होते आणि ते 1947 मध्ये नव्हे, तर 1948 मध्ये. त्यामुळे हे विधान चुकीचे आहे.\n(c) UDHR 48 मतांनी (शून्य विरोधात) आणि 8 गैरहजर राहून स्वीकारले गेले. त्यामुळे 'चव्वेचाळीस विरुद्ध शून्य मतांनी' हे विधान चुकीचे आहे.\n(d) UDHR 48 मतांनी (शून्य विरोधात) आणि 8 गैरहजर राहून स्वीकारले गेले. 'बेचाळीस विरुद्ध शून्य आणि आठ गैरहजर राहून' हे विधान वस्तुस्थितीनुसार चुकीचे आहे, कारण सकारात्मक मतांची संख्या 48 होती.\nवस्तुस्थितीनुसार, केवळ विधान (a) बरोबर आहे. दिलेल्या पर्यायांपैकी कोणताही पर्याय केवळ (a) बरोबर असल्याचे दर्शवत नाही आणि सर्व पर्यायांमध्ये चुकीची विधाने (b, c, किंवा d) समाविष्ट आहेत. त्यामुळे, दिलेल्या पर्यायांमध्ये कोणतेही पूर्णपणे योग्य उत्तर नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a) and (b) correct",
        "option_text_marathi": "केवळ (a) आणि (b) बरोबर",
        "is_correct": false,
        "reason_english": "Statement (b) is incorrect regarding the adopting body and year.",
        "reason_marathi": "विधान (b) स्वीकारणारी संस्था आणि वर्षाबाबत चुकीचे आहे."
      },
      {
        "option_text_english": "Only (a), (b) and (c) correct",
        "option_text_marathi": "केवळ (a), (b) आणि (c) बरोबर",
        "is_correct": false,
        "reason_english": "Statements (b) and (c) are incorrect.",
        "reason_marathi": "विधाने (b) आणि (c) चुकीची आहेत."
      },
      {
        "option_text_english": "Only (a), (b) and (d) correct",
        "option_text_marathi": "केवळ (a), (b) आणि (d) बरोबर",
        "is_correct": false,
        "reason_english": "Statements (b) and (d) are incorrect.",
        "reason_marathi": "विधाने (b) आणि (d) चुकीची आहेत."
      },
      {
        "option_text_english": "Only (a) and (d) correct",
        "option_text_marathi": "केवळ (a) आणि (d) बरोबर",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect regarding the number of affirmative votes (it was 48, not 42). Only statement (a) is correct.",
        "reason_marathi": "विधान (d) सकारात्मक मतांच्या संख्येबाबत चुकीचे आहे (ते 48 होते, 42 नाही). केवळ विधान (a) बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण या कायद्याच्या अनुषंगाने, खालील विधानांचे अवलोकन करा.\nविधान I : सदर कायद्यातील कलम 8 हे संरक्षण अधिकाऱ्याचे कर्तव्ये आणि कार्ये यांच्याशी संबंधित आहे.\nविधान II : देशांतर्गत घटनेचा अहवाल, विहित नमुन्यात व पद्धतीने राज्यपालांना देणे हे संरक्षण अधिकाऱ्याचे कर्तव्य असेल.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following statements in view of Protection of Women from Domestic Violence Act.\nStatement I: Section 8 of the Protection of Women from Domestic Violence Act deals with duties and functions of the protection officer.\nStatement II: It shall be the duty of the protection officer to make a domestic incident report to the Governor, in such a form and manner prescribed.\nAnswer Options :",
    "options_marathi": [
      "विधान I बरोबर; II चूक",
      "विधान II बरोबर; I चूक",
      "दोन्ही विधाने बरोबर",
      "दोन्ही विधाने चूक"
    ],
    "options_english": [
      "Statement I correct; II incorrect",
      "Statement II correct; I incorrect",
      "Both statements are correct",
      "Both statements are incorrect"
    ],
    "correct_option_index": 1,
    "subject": "Law",
    "topic": "Protection of Women from Domestic Violence Act, 2005 (Protection Officer)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's analyze the statements regarding the Protection of Women from Domestic Violence Act, 2005.\nStatement I: Section 8 of the Act explicitly outlines the 'Duties and functions of Protection Officers.' This statement is correct.\nStatement II: While it is the duty of the Protection Officer to make a domestic incident report, this report is to be made to the Magistrate, not to the Governor. Therefore, this statement is incorrect.\nThus, Statement I is correct, and Statement II is incorrect.",
    "explanation_marathi": "कौटुंबिक हिंसाचारापासून महिलांचे संरक्षण कायदा, 2005 संदर्भातील विधाने तपासूया.\nविधान I: कायद्याचे कलम 8 हे 'संरक्षण अधिकाऱ्याचे कर्तव्ये आणि कार्ये' स्पष्टपणे नमूद करते. हे विधान बरोबर आहे.\nविधान II: संरक्षण अधिकाऱ्याचे कौटुंबिक घटनेचा अहवाल देणे हे कर्तव्य असले तरी, हा अहवाल राज्यपालांना नव्हे, तर दंडाधिकाऱ्याला (Magistrate) सादर करायचा असतो. त्यामुळे हे विधान चुकीचे आहे.\nम्हणून, विधान I बरोबर आहे आणि विधान II चुकीचे आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Statement I correct; II incorrect",
        "option_text_marathi": "विधान I बरोबर; II चूक",
        "is_correct": true,
        "reason_english": "Statement I is correct as Section 8 deals with the duties of Protection Officers. Statement II is incorrect because the report is made to the Magistrate, not the Governor.",
        "reason_marathi": "विधान I बरोबर आहे कारण कलम 8 संरक्षण अधिकाऱ्याच्या कर्तव्यांशी संबंधित आहे. विधान II चुकीचे आहे कारण अहवाल राज्यपालांना नव्हे, तर दंडाधिकाऱ्याला दिला जातो."
      },
      {
        "option_text_english": "Statement II correct; I incorrect",
        "option_text_marathi": "विधान II बरोबर; I चूक",
        "is_correct": false,
        "reason_english": "Statement I is correct, and Statement II is incorrect.",
        "reason_marathi": "विधान I बरोबर आहे आणि विधान II चुकीचे आहे."
      },
      {
        "option_text_english": "Both statements are correct",
        "option_text_marathi": "दोन्ही विधाने बरोबर",
        "is_correct": false,
        "reason_english": "Statement II is incorrect.",
        "reason_marathi": "विधान II चुकीचे आहे."
      },
      {
        "option_text_english": "Both statements are incorrect",
        "option_text_marathi": "दोन्ही विधाने चूक",
        "is_correct": false,
        "reason_english": "Statement I is correct.",
        "reason_marathi": "विधान I बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "नागरी हक्क संरक्षण अधिनियम 1955 मधील कलम ______ नुसार अनुसूचित जातीच्या सदस्यांच्या संबंधात या कायद्याच्या अंतर्गत गुन्हा ठरवणारे कृत्य केले जाते, न्यायालयाने असे गृहीत धरले पाहिजे की, जोपर्यंत विरुद्ध सिद्ध होत नाही, तोपर्यंत असे कृत्य अस्पृश्यतेच्या आधारावर केले गेले आहे.",
    "question_english": "As per section ______ of the protection of civil rights act, 1955 if any offence is committed against member of a scheduled caste, the court shall presume unless the contrary is proved, that such act was committed on the ground of 'untouchability'.",
    "options_marathi": [
      "कलम 11",
      "कलम 12",
      "कलम 13",
      "कलम 14"
    ],
    "options_english": [
      "Section 11",
      "Section 12",
      "Section 13",
      "Section 14"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Protection of Civil Rights Act, 1955",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 12 of the Protection of Civil Rights Act, 1955, is a crucial provision that establishes a legal presumption. It states that if an offence under this Act is committed against a member of a Scheduled Caste, the court will presume that the act was committed on the ground of 'untouchability', unless proven otherwise. This provision aims to strengthen the enforcement of the Act by shifting the burden of proof to the accused in such cases, making it easier to prosecute offences related to untouchability.",
    "explanation_marathi": "नागरी हक्क संरक्षण अधिनियम, 1955 चे कलम 12 हे एक महत्त्वाचे कलम आहे जे कायदेशीर गृहितक स्थापित करते. या कलमानुसार, जर अनुसूचित जातीच्या सदस्याविरुद्ध या कायद्यांतर्गत गुन्हा घडला असेल, तर न्यायालयाने असे गृहीत धरावे की, जोपर्यंत विरुद्ध सिद्ध होत नाही, तोपर्यंत असे कृत्य 'अस्पृश्यतेच्या' आधारावर केले गेले आहे. या तरतुदीचा उद्देश कायद्याची अंमलबजावणी मजबूत करणे आहे, कारण यामुळे अशा प्रकरणांमध्ये सिद्धतेचा भार आरोपीवर येतो, ज्यामुळे अस्पृश्यतेशी संबंधित गुन्हे सिद्ध करणे सोपे होते.",
    "options_breakdown": [
      {
        "option_english": "Section 11",
        "option_marathi": "कलम 11",
        "is_correct": false,
        "reason_english": "Section 11 deals with abetment of offence, not the presumption of untouchability.",
        "reason_marathi": "कलम 11 गुन्ह्याच्या दुष्प्रेरणाशी संबंधित आहे, अस्पृश्यतेच्या गृहितकाशी नाही."
      },
      {
        "option_english": "Section 12",
        "option_marathi": "कलम 12",
        "is_correct": true,
        "reason_english": "Section 12 specifically deals with the presumption by courts regarding untouchability when an offence is committed against a member of a Scheduled Caste.",
        "reason_marathi": "कलम 12 विशेषतः अनुसूचित जातीच्या सदस्याविरुद्ध गुन्हा घडल्यास न्यायालयाद्वारे अस्पृश्यतेच्या गृहितकाशी संबंधित आहे."
      },
      {
        "option_english": "Section 13",
        "option_marathi": "कलम 13",
        "is_correct": false,
        "reason_english": "Section 13 deals with the punishment for enforcing religious disabilities.",
        "reason_marathi": "कलम 13 धार्मिक अपंगत्व लादण्यासाठी शिक्षेशी संबंधित आहे."
      },
      {
        "option_english": "Section 14",
        "option_marathi": "कलम 14",
        "is_correct": false,
        "reason_english": "Section 14 deals with the power of the State Government to impose collective fines.",
        "reason_marathi": "कलम 14 राज्य सरकारला सामूहिक दंड लादण्याच्या अधिकाराशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "अनुसूचित जाती व अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम 1989 च्या कलम 21 नुसार कायद्याची प्रभावी अंमलबजावणी सुनिश्चित करणे, अत्याचार झालेल्या व्यक्तींना ______ सह न्याय मिळवून देण्यासाठी पुरेशी सुविधा पुरविणे हे सरकारचे कर्तव्य असेल.",
    "question_english": "As per section 21 of the scheduled caste and scheduled tribes (Prevention of Atrocities) Act 1989, it shall be the duty of Government to ensure effective implementation of the act, provide adequate facilities, including ______ to the persons subjected to atrocities to enable them to avail themselves justice.",
    "options_marathi": [
      "कायदेशीर मदत",
      "साक्षीदारांचा प्रवास व देखभाल खर्च",
      "अत्याचारग्रस्तांचे आर्थिक आणि सामाजिक पुनर्वसन",
      "वरील सर्व"
    ],
    "options_english": [
      "Legal aid",
      "Travelling and maintenance expenses to witnesses",
      "The economic and social rehabilitation of the victims of the atrocities",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "SC/ST (Prevention of Atrocities) Act, 1989",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 21 of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989, places a clear duty on the government to ensure the effective implementation of the Act. This includes providing comprehensive support to victims of atrocities to help them access justice. The facilities mentioned are crucial and encompass legal aid to assist with court proceedings, travelling and maintenance expenses for witnesses to ensure their participation, and economic and social rehabilitation to help victims rebuild their lives after suffering atrocities. Therefore, all the listed provisions are part of the government's duty under this section.",
    "explanation_marathi": "अनुसूचित जाती आणि अनुसूचित जमाती (अत्याचार प्रतिबंध) अधिनियम, 1989 चे कलम 21 सरकारवर कायद्याची प्रभावी अंमलबजावणी सुनिश्चित करण्याची स्पष्ट जबाबदारी टाकते. यामध्ये अत्याचारग्रस्तांना न्याय मिळवून देण्यासाठी सर्वसमावेशक मदत पुरवणे समाविष्ट आहे. नमूद केलेल्या सुविधा अत्यंत महत्त्वाच्या आहेत आणि त्यात न्यायालयीन कार्यवाहीसाठी कायदेशीर मदत, साक्षीदारांच्या सहभागाची खात्री करण्यासाठी त्यांचा प्रवास आणि देखभाल खर्च, तसेच अत्याचारानंतर पीडितांना त्यांचे जीवन पुन्हा उभारण्यास मदत करण्यासाठी आर्थिक आणि सामाजिक पुनर्वसन यांचा समावेश आहे. त्यामुळे, नमूद केलेल्या सर्व तरतुदी या कलमांतर्गत सरकारच्या कर्तव्याचा भाग आहेत.",
    "options_breakdown": [
      {
        "option_english": "Legal aid",
        "option_marathi": "कायदेशीर मदत",
        "is_correct": true,
        "reason_english": "Section 21 explicitly mentions legal aid as one of the facilities to be provided to victims.",
        "reason_marathi": "कलम 21 मध्ये कायदेशीर मदत ही पीडितांना पुरविल्या जाणाऱ्या सुविधांपैकी एक म्हणून स्पष्टपणे नमूद केली आहे."
      },
      {
        "option_english": "Travelling and maintenance expenses to witnesses",
        "option_marathi": "साक्षीदारांचा प्रवास व देखभाल खर्च",
        "is_correct": true,
        "reason_english": "This is also a provision under Section 21 to ensure witnesses can participate in legal proceedings.",
        "reason_marathi": "साक्षीदारांनी कायदेशीर कार्यवाहीत सहभागी व्हावे यासाठी कलम 21 अंतर्गत ही देखील एक तरतूद आहे."
      },
      {
        "option_english": "The economic and social rehabilitation of the victims of the atrocities",
        "option_marathi": "अत्याचारग्रस्तांचे आर्थिक आणि सामाजिक पुनर्वसन",
        "is_correct": true,
        "reason_english": "Section 21 includes the economic and social rehabilitation of victims as a duty of the government.",
        "reason_marathi": "कलम 21 मध्ये पीडितांचे आर्थिक आणि सामाजिक पुनर्वसन करणे हे सरकारचे कर्तव्य म्हणून समाविष्ट आहे."
      },
      {
        "option_english": "All of the above",
        "option_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "All the preceding options (legal aid, witness expenses, and rehabilitation) are explicitly mentioned or implied as duties of the government under Section 21 of the Act.",
        "reason_marathi": "मागील सर्व पर्याय (कायदेशीर मदत, साक्षीदारांचे खर्च आणि पुनर्वसन) हे कायद्याच्या कलम 21 अंतर्गत सरकारची कर्तव्ये म्हणून स्पष्टपणे नमूद केलेले किंवा सूचित केलेले आहेत."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "राष्ट्रीय अल्पसंख्यांक आयोग अधिनियम, 1992 मधील कलम 9 मध्ये ______ ची तरतूद आहे.",
    "question_english": "Section 9 of the National Commission for Minorities Act, 1992 provides for ______",
    "options_marathi": [
      "आयोगाची कार्ये",
      "आयोगाची कार्यपद्धती",
      "आयोगाचे अधिकार",
      "लेखा परिक्षक"
    ],
    "options_english": [
      "Functions of the Commission",
      "Procedure to be followed by the Commission",
      "Powers of the Commission",
      "Audit"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "National Commission for Minorities Act, 1992",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 9 of the National Commission for Minorities Act, 1992, is dedicated to outlining the various functions and responsibilities of the National Commission for Minorities. These functions include evaluating the progress of development of minorities, monitoring the working of safeguards provided in the Constitution and laws, making recommendations for the effective implementation of safeguards, looking into specific complaints regarding deprivation of rights, and conducting studies and research. This section is central to understanding the role and mandate of the Commission.",
    "explanation_marathi": "राष्ट्रीय अल्पसंख्यांक आयोग अधिनियम, 1992 चे कलम 9 हे राष्ट्रीय अल्पसंख्यांक आयोगाची विविध कार्ये आणि जबाबदाऱ्या स्पष्ट करण्यासाठी समर्पित आहे. या कार्यांमध्ये अल्पसंख्यांकांच्या विकासाच्या प्रगतीचे मूल्यांकन करणे, संविधान आणि कायद्यांमध्ये प्रदान केलेल्या संरक्षणांच्या कामकाजावर लक्ष ठेवणे, संरक्षणांच्या प्रभावी अंमलबजावणीसाठी शिफारसी करणे, हक्कांच्या वंचनेसंबंधी विशिष्ट तक्रारींची चौकशी करणे आणि अभ्यास व संशोधन करणे यांचा समावेश आहे. हे कलम आयोगाची भूमिका आणि कार्यकक्षा समजून घेण्यासाठी महत्त्वाचे आहे.",
    "options_breakdown": [
      {
        "option_english": "Functions of the Commission",
        "option_marathi": "आयोगाची कार्ये",
        "is_correct": true,
        "reason_english": "Section 9 of the National Commission for Minorities Act, 1992, explicitly details the functions of the Commission.",
        "reason_marathi": "राष्ट्रीय अल्पसंख्यांक आयोग अधिनियम, 1992 चे कलम 9 आयोगाची कार्ये स्पष्टपणे नमूद करते."
      },
      {
        "option_english": "Procedure to be followed by the Commission",
        "option_marathi": "आयोगाची कार्यपद्धती",
        "is_correct": false,
        "reason_english": "The procedure to be followed by the Commission is generally covered in other sections (e.g., Section 10).",
        "reason_marathi": "आयोगाने पाळायची कार्यपद्धती सामान्यतः इतर कलमांमध्ये (उदा. कलम 10) समाविष्ट असते."
      },
      {
        "option_english": "Powers of the Commission",
        "option_marathi": "आयोगाचे अधिकार",
        "is_correct": false,
        "reason_english": "While the Commission has powers, Section 9 primarily focuses on its functions, with specific powers often detailed elsewhere or within the functions themselves (e.g., Section 9(4) grants powers of a civil court).",
        "reason_marathi": "आयोगाला अधिकार असले तरी, कलम 9 प्रामुख्याने त्याच्या कार्यांवर लक्ष केंद्रित करते, विशिष्ट अधिकार अनेकदा इतरत्र किंवा कार्यांमध्येच (उदा. कलम 9(4) दिवाणी न्यायालयाचे अधिकार देते) तपशीलवार असतात."
      },
      {
        "option_english": "Audit",
        "option_marathi": "लेखा परिक्षक",
        "is_correct": false,
        "reason_english": "Audit provisions are typically found in later sections of such acts and are not the primary subject of Section 9.",
        "reason_marathi": "लेखापरीक्षणाच्या तरतुदी सामान्यतः अशा कायद्यांच्या नंतरच्या कलमांमध्ये आढळतात आणि कलम 9 चा तो मुख्य विषय नाही."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "खालीलपैकी कोणता एक ऐतिहासिक निर्णय आहे, ज्याने कलम 21 ला व्यापक अर्थ दिला आणि 'प्रत्येकाला कायद्याच्या न्यायालयात त्वरित खटला चालविण्याचा अधिकार' आहे असे नमूद केले ?",
    "question_english": "Which of the following is the landmark decision that gave broader meaning to Article 21 and stated that every one has right to prompt trial in the court of law?",
    "options_marathi": [
      "हुसैनआरा खातून वि. बिहार राज्य",
      "जमुनादास वर्मा वि. गुलाबी शहर",
      "अहमद अली वि. केरळ राज्य",
      "वरीलपैकी काही नाही"
    ],
    "options_english": [
      "Hussainara Khatoon v/s State of Bihar",
      "Jamunadas Varma v/s Pink City",
      "Ahmed Ali v/s State of Kerala",
      "None of the above"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Fundamental Rights (Article 21), Landmark Judgments",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The landmark case of Hussainara Khatoon v/s State of Bihar (1979) is pivotal in Indian constitutional law. In this case, the Supreme Court of India significantly expanded the interpretation of Article 21, which guarantees the right to life and personal liberty. The court ruled that the right to a speedy trial is an essential component of Article 21. It highlighted the injustice faced by undertrial prisoners who were detained for prolonged periods without their cases being heard, thereby emphasizing that justice delayed is justice denied. This judgment led to the release of thousands of undertrial prisoners and established the principle that prompt trial is a fundamental right.",
    "explanation_marathi": "हुसैनआरा खातून विरुद्ध बिहार राज्य (1979) हे ऐतिहासिक प्रकरण भारतीय संविधानिक कायद्यात अत्यंत महत्त्वाचे आहे. या प्रकरणात, भारताच्या सर्वोच्च न्यायालयाने अनुच्छेद 21, जे जीवन आणि वैयक्तिक स्वातंत्र्याच्या अधिकाराची हमी देते, त्याचा अर्थ मोठ्या प्रमाणात विस्तारित केला. न्यायालयाने असा निर्णय दिला की जलद सुनावणीचा अधिकार हा अनुच्छेद 21 चा एक अविभाज्य भाग आहे. ज्या विचाराधीन कैद्यांना अनेक वर्षांपासून त्यांच्या खटल्यांची सुनावणी न होता तुरुंगात डांबले होते, त्यांच्या दुर्दशेवर न्यायालयाने प्रकाश टाकला, ज्यामुळे 'न्याय मिळण्यास विलंब म्हणजे न्याय नाकारणे' या तत्त्वावर भर दिला गेला. या निर्णयांमुळे हजारो विचाराधीन कैद्यांची सुटका झाली आणि जलद सुनावणी हा मूलभूत अधिकार आहे हे तत्त्व स्थापित झाले.",
    "options_breakdown": [
      {
        "option_english": "Hussainara Khatoon v/s State of Bihar",
        "option_marathi": "हुसैनआरा खातून वि. बिहार राज्य",
        "is_correct": true,
        "reason_english": "This landmark case established the right to a speedy trial as an integral part of Article 21 of the Indian Constitution.",
        "reason_marathi": "या ऐतिहासिक खटल्याने भारतीय संविधानाच्या अनुच्छेद 21 चा अविभाज्य भाग म्हणून जलद सुनावणीचा अधिकार स्थापित केला."
      },
      {
        "option_english": "Jamunadas Varma v/s Pink City",
        "option_marathi": "जमुनादास वर्मा वि. गुलाबी शहर",
        "is_correct": false,
        "reason_english": "This is not a recognized landmark case related to Article 21 and the right to a speedy trial.",
        "reason_marathi": "हा अनुच्छेद 21 आणि जलद सुनावणीच्या अधिकाराशी संबंधित मान्यताप्राप्त ऐतिहासिक खटला नाही."
      },
      {
        "option_english": "Ahmed Ali v/s State of Kerala",
        "option_marathi": "अहमद अली वि. केरळ राज्य",
        "is_correct": false,
        "reason_english": "This is not a recognized landmark case related to Article 21 and the right to a speedy trial.",
        "reason_marathi": "हा अनुच्छेद 21 आणि जलद सुनावणीच्या अधिकाराशी संबंधित मान्यताप्राप्त ऐतिहासिक खटला नाही."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी काही नाही",
        "is_correct": false,
        "reason_english": "Option 1 is the correct answer.",
        "reason_marathi": "पर्याय 1 हे योग्य उत्तर आहे."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "मानवी हक्क कायद्याच्या कलम 31 अन्वये, प्रत्येक मानवी हक्क न्यायालयासाठी, राज्यसरकार अधिसूचनेद्वारे, खटले चालवण्याच्या उद्देशाने ______ म्हणून ओळखल्या जाणाऱ्या वकीलाची नियुक्ती करेल, जो वकील म्हणून प्रॅक्टीसमध्ये सात वर्षांपेक्षा कमी नसेल.",
    "question_english": "Under the Section 31 of Human Rights Act for every Human Rights Court, the State Government shall, by notification, appoint an advocate who has been in practice as an advocate for not less than seven years is knwon as ______ for the purpose of conducting cases in the court.",
    "options_marathi": [
      "दंडाधिकारी",
      "कोर्ट असोसिएट",
      "न्यायालयीन सहायक",
      "वरीलपैकी काहीही नाही"
    ],
    "options_english": [
      "Magistrate",
      "Court Associate",
      "Court Assignee",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993",
    "difficulty": "Hard",
    "trap_detected": "Missing Correct Option",
    "explanation_english": "Section 31 of The Protection of Human Rights Act, 1993, mandates that for every Human Rights Court, the State Government, in consultation with the Chief Justice of the High Court, shall appoint an advocate with at least seven years of practice. This advocate is designated as a 'Special Public Prosecutor' for the purpose of conducting cases related to human rights violations in that court. The role of the Special Public Prosecutor is crucial for ensuring effective prosecution and speedy trial of such cases. Since 'Special Public Prosecutor' is not listed among the given options, 'None of the above' is the correct answer.",
    "explanation_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 31 नुसार, प्रत्येक मानवी हक्क न्यायालयासाठी, राज्य सरकार उच्च न्यायालयाच्या मुख्य न्यायाधीशांच्या सहमतीने, किमान सात वर्षांचा वकिलीचा अनुभव असलेल्या वकिलाची नियुक्ती करेल. या वकिलाला त्या न्यायालयात मानवी हक्कांच्या उल्लंघनाशी संबंधित खटले चालवण्यासाठी 'विशेष सरकारी वकील' (Special Public Prosecutor) म्हणून नियुक्त केले जाते. अशा प्रकरणांमध्ये प्रभावी खटला चालवण्यासाठी आणि जलद सुनावणी सुनिश्चित करण्यासाठी विशेष सरकारी वकिलाची भूमिका महत्त्वाची आहे. दिलेल्या पर्यायांमध्ये 'विशेष सरकारी वकील' हा पर्याय नसल्यामुळे, 'वरीलपैकी काहीही नाही' हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "Magistrate",
        "option_marathi": "दंडाधिकारी",
        "is_correct": false,
        "reason_english": "A Magistrate is a judicial officer, not an advocate appointed to conduct cases in a Human Rights Court.",
        "reason_marathi": "दंडाधिकारी हे न्यायिक अधिकारी असतात, मानवी हक्क न्यायालयात खटले चालवण्यासाठी नियुक्त केलेले वकील नाहीत."
      },
      {
        "option_english": "Court Associate",
        "option_marathi": "कोर्ट असोसिएट",
        "is_correct": false,
        "reason_english": "This is not a recognized legal designation for this role under the Act.",
        "reason_marathi": "या कायद्यांतर्गत या भूमिकेसाठी ही मान्यताप्राप्त कायदेशीर पदनाम नाही."
      },
      {
        "option_english": "Court Assignee",
        "option_marathi": "न्यायालयीन सहायक",
        "is_correct": false,
        "reason_english": "This is not a recognized legal designation for this role under the Act.",
        "reason_marathi": "या कायद्यांतर्गत या भूमिकेसाठी ही मान्यताप्राप्त कायदेशीर पदनाम नाही."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी काहीही नाही",
        "is_correct": true,
        "reason_english": "The correct designation for such an advocate under Section 31 of the Human Rights Act is 'Special Public Prosecutor', which is not among the given options.",
        "reason_marathi": "मानवी हक्क कायद्याच्या कलम 31 अंतर्गत अशा वकिलासाठी योग्य पदनाम 'विशेष सरकारी वकील' आहे, जे दिलेल्या पर्यायांमध्ये नाही."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "खालील विधाने विचारात घ्या.\nविधान I : आर्थिक, सामाजिक आणि सांस्कृतिक अधिकार हे मानवी हक्कांची दुसरी पिढी असल्याचे म्हटले जाते.\nविधान II : मानवी हक्कांच्या तिसऱ्या पिढीला 'निवडीचे स्वातंत्र्य' असे म्हणतात.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following statements.\nStatement I: Economic, Social and Cultural rights are said to be second generation of human rights.\nStatement II : Third generation of human rights are also called 'The Freedom of Choice'.\nAnswer Options :",
    "options_marathi": [
      "विधान I बरोबर आहे, II चूक",
      "विधान II बरोबर आहे, I चूक",
      "दोन्ही विधाने बरोबर आहेत",
      "दोन्ही विधाने चूक आहेत"
    ],
    "options_english": [
      "Statement I is correct, II incorrect",
      "Statement II correct; I incorrect",
      "Both the Statements are correct",
      "Both the Statements are incorrect"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Human Rights (Generations of Rights)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Human rights are often categorized into three generations. The first generation comprises civil and political rights, focusing on individual liberties and protection from state interference. The second generation, as correctly stated in Statement I, includes economic, social, and cultural rights, which aim to ensure social and economic equality and well-being. These rights require positive action from the state. The third generation of human rights, also known as solidarity rights or collective rights, focuses on broader societal and global issues such as the right to self-determination, peace, a healthy environment, and development. Statement II incorrectly refers to the third generation as 'The Freedom of Choice'; this term is not standard and 'freedom of choice' is more aligned with first-generation civil liberties. Therefore, Statement I is correct, and Statement II is incorrect.",
    "explanation_marathi": "मानवी हक्कांचे वर्गीकरण अनेकदा तीन पिढ्यांमध्ये केले जाते. पहिली पिढी नागरी आणि राजकीय हक्कांची आहे, जी वैयक्तिक स्वातंत्र्यावर आणि राज्याच्या हस्तक्षेपापासून संरक्षणावर लक्ष केंद्रित करते. दुसरी पिढी, विधान I मध्ये योग्यरित्या नमूद केल्याप्रमाणे, आर्थिक, सामाजिक आणि सांस्कृतिक हक्कांचा समावेश करते, ज्यांचा उद्देश सामाजिक आणि आर्थिक समानता आणि कल्याण सुनिश्चित करणे आहे. या हक्कांसाठी राज्याकडून सकारात्मक कृती आवश्यक असते. मानवी हक्कांची तिसरी पिढी, ज्याला एकता हक्क किंवा सामूहिक हक्क असेही म्हणतात, ती आत्मनिर्णयाचा अधिकार, शांतता, निरोगी पर्यावरण आणि विकास यांसारख्या व्यापक सामाजिक आणि जागतिक मुद्द्यांवर लक्ष केंद्रित करते. विधान II मध्ये तिसऱ्या पिढीला 'निवडीचे स्वातंत्र्य' असे चुकीचे संबोधले आहे; ही संज्ञा प्रमाणित नाही आणि 'निवडीचे स्वातंत्र्य' हे पहिल्या पिढीतील नागरी स्वातंत्र्यांशी अधिक संबंधित आहे. त्यामुळे, विधान I बरोबर आहे आणि विधान II चूक आहे.",
    "options_breakdown": [
      {
        "option_english": "Statement I is correct, II incorrect",
        "option_marathi": "विधान I बरोबर आहे, II चूक",
        "is_correct": true,
        "reason_english": "Statement I correctly identifies Economic, Social and Cultural rights as second-generation human rights. Statement II incorrectly terms third-generation rights as 'Freedom of Choice'; they are typically known as solidarity or collective rights.",
        "reason_marathi": "विधान I आर्थिक, सामाजिक आणि सांस्कृतिक हक्कांना मानवी हक्कांची दुसरी पिढी म्हणून योग्यरित्या ओळखते. विधान II तिसऱ्या पिढीच्या हक्कांना 'निवडीचे स्वातंत्र्य' असे चुकीचे संबोधते; त्यांना सामान्यतः एकता किंवा सामूहिक हक्क म्हणून ओळखले जाते."
      },
      {
        "option_english": "Statement II correct; I incorrect",
        "option_marathi": "विधान II बरोबर आहे, I चूक",
        "is_correct": false,
        "reason_english": "Statement I is correct, and Statement II is incorrect.",
        "reason_marathi": "विधान I बरोबर आहे आणि विधान II चूक आहे."
      },
      {
        "option_english": "Both the Statements are correct",
        "option_marathi": "दोन्ही विधाने बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement II is incorrect.",
        "reason_marathi": "विधान II चूक आहे."
      },
      {
        "option_english": "Both the Statements are incorrect",
        "option_marathi": "दोन्ही विधाने चूक आहेत",
        "is_correct": false,
        "reason_english": "Statement I is correct.",
        "reason_marathi": "विधान I बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "खालीलपैकी भारतीय राज्यघटनेतील कोणते अनुच्छेद भारतामध्ये सर्व प्रकारच्या गुलामगिरी व मानवी तस्करी यांना प्रतिबंध करतात ?",
    "question_english": "Which of the following Articles under the Constitution of India prohibits all type of slavery and human trafficking in India ?",
    "options_marathi": [
      "अनुच्छेद 15 व 16",
      "अनुच्छेद 20 व 21",
      "अनुच्छेद 23 व 24",
      "अनुच्छेद 29 व 30"
    ],
    "options_english": [
      "Articles 15 and 16",
      "Articles 20 and 21",
      "Articles 23 and 24",
      "Articles 29 and 30"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Fundamental Rights (Right against Exploitation)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Indian Constitution guarantees fundamental rights to its citizens, and among these, the Right against Exploitation is particularly relevant to the prohibition of slavery and human trafficking. Article 23 explicitly prohibits 'traffic in human beings and begar and other similar forms of forced labour.' This article directly addresses human trafficking and various forms of involuntary servitude, which includes slavery. Article 24 complements this by prohibiting the employment of children below the age of fourteen in any factory or mine or engaged in any other hazardous employment. Together, Articles 23 and 24 form the constitutional bulwark against all forms of exploitation, including slavery and human trafficking.",
    "explanation_marathi": "भारतीय संविधान आपल्या नागरिकांना मूलभूत हक्कांची हमी देते आणि यापैकी शोषणाविरुद्धचा अधिकार विशेषतः गुलामगिरी आणि मानवी तस्करीच्या प्रतिबंधासाठी महत्त्वाचा आहे. अनुच्छेद 23 स्पष्टपणे 'मानवी तस्करी आणि वेठबिगारी तसेच इतर समान प्रकारच्या सक्तीच्या श्रमास' प्रतिबंधित करते. हे अनुच्छेद मानवी तस्करी आणि गुलामगिरीसह विविध प्रकारच्या अनैच्छिक गुलामगिरीला थेट संबोधित करते. अनुच्छेद 24 याला पूरक आहे, जे चौदा वर्षांखालील मुलांना कोणत्याही कारखान्यात किंवा खाणीत किंवा इतर कोणत्याही धोकादायक कामात कामावर ठेवण्यास प्रतिबंध करते. एकत्रितपणे, अनुच्छेद 23 आणि 24 हे गुलामगिरी आणि मानवी तस्करीसह सर्व प्रकारच्या शोषणाविरुद्ध संवैधानिक आधारस्तंभ आहेत.",
    "options_breakdown": [
      {
        "option_english": "Articles 15 and 16",
        "option_marathi": "अनुच्छेद 15 व 16",
        "is_correct": false,
        "reason_english": "Articles 15 and 16 deal with the prohibition of discrimination and equality of opportunity in public employment, respectively.",
        "reason_marathi": "अनुच्छेद 15 आणि 16 अनुक्रमे भेदभावाला प्रतिबंध आणि सार्वजनिक रोजगारात समान संधीशी संबंधित आहेत."
      },
      {
        "option_english": "Articles 20 and 21",
        "option_marathi": "अनुच्छेद 20 व 21",
        "is_correct": false,
        "reason_english": "Articles 20 and 21 deal with protection in respect of conviction for offences and protection of life and personal liberty, respectively.",
        "reason_marathi": "अनुच्छेद 20 आणि 21 अनुक्रमे गुन्ह्यांसाठी दोषी ठरवण्याबाबत संरक्षण आणि जीवन व वैयक्तिक स्वातंत्र्याच्या संरक्षणाशी संबंधित आहेत."
      },
      {
        "option_english": "Articles 23 and 24",
        "option_marathi": "अनुच्छेद 23 व 24",
        "is_correct": true,
        "reason_english": "Article 23 prohibits traffic in human beings and forced labour (including slavery), and Article 24 prohibits child labour. Together, they constitute the Right against Exploitation.",
        "reason_marathi": "अनुच्छेद 23 मानवी तस्करी आणि सक्तीच्या श्रमास (गुलामगिरीसह) प्रतिबंधित करते, आणि अनुच्छेद 24 बालमजुरीस प्रतिबंधित करते. एकत्रितपणे, ते शोषणाविरुद्धचा अधिकार बनवतात."
      },
      {
        "option_english": "Articles 29 and 30",
        "option_marathi": "अनुच्छेद 29 व 30",
        "is_correct": false,
        "reason_english": "Articles 29 and 30 deal with the cultural and educational rights of minorities.",
        "reason_marathi": "अनुच्छेद 29 आणि 30 अल्पसंख्यांकांच्या सांस्कृतिक आणि शैक्षणिक अधिकारांशी संबंधित आहेत."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "मनी लॉन्डरिंग प्रतिबंध कायदा 2002 च्या कोणत्या कलमा अंतर्गत मनी लॉन्डरिंगसाठी शिक्षेची तरतूद केली आहे ?",
    "question_english": "\"Punishment for money-laundering\" is defined under which section of prevention of money laundering Act 2002 ?",
    "options_marathi": [
      "कलम 7",
      "कलम 3",
      "कलम 4",
      "कलम 10"
    ],
    "options_english": [
      "Section 7",
      "Section 3",
      "Section 4",
      "Section 10"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Prevention of Money Laundering Act, 2002",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Prevention of Money Laundering Act (PMLA), 2002, is a comprehensive legislation enacted to combat money laundering in India. Section 3 of the Act defines what constitutes the offence of money laundering. Following this definition, Section 4 specifically lays down the provisions for the 'Punishment for money-laundering.' It prescribes rigorous imprisonment for a term which shall not be less than three years but which may extend to seven years, and also a fine. In cases related to offences under the Narcotic Drugs and Psychotropic Substances Act, 1985, the maximum imprisonment can extend to ten years.",
    "explanation_marathi": "मनी लॉन्डरिंग प्रतिबंधक कायदा (PMLA), 2002, हा भारतात मनी लॉन्डरिंगचा सामना करण्यासाठी लागू केलेला एक व्यापक कायदा आहे. या कायद्याचे कलम 3 मनी लॉन्डरिंगचा गुन्हा काय आहे हे परिभाषित करते. या व्याख्येनुसार, कलम 4 विशेषतः 'मनी लॉन्डरिंगसाठी शिक्षा' या तरतुदी मांडते. यात किमान तीन वर्षांची परंतु सात वर्षांपर्यंत वाढू शकणारी कठोर कारावासाची शिक्षा आणि दंड देखील विहित केला आहे. नारकोटिक ड्रग्स अँड सायकोट्रॉपिक सबस्टन्सेस ॲक्ट, 1985 अंतर्गत गुन्ह्यांशी संबंधित प्रकरणांमध्ये, कमाल कारावास दहा वर्षांपर्यंत वाढू शकतो.",
    "options_breakdown": [
      {
        "option_english": "Section 7",
        "option_marathi": "कलम 7",
        "is_correct": false,
        "reason_english": "Section 7 deals with the power to make rules, not the punishment for money laundering.",
        "reason_marathi": "कलम 7 नियम बनवण्याच्या अधिकाराशी संबंधित आहे, मनी लॉन्डरिंगच्या शिक्षेशी नाही."
      },
      {
        "option_english": "Section 3",
        "option_marathi": "कलम 3",
        "is_correct": false,
        "reason_english": "Section 3 defines the offence of money laundering, but Section 4 prescribes the punishment for it. This is a common factual trap.",
        "reason_marathi": "कलम 3 मनी लॉन्डरिंगच्या गुन्ह्याची व्याख्या करते, परंतु कलम 4 त्यासाठी शिक्षा विहित करते. हा एक सामान्य तथ्यात्मक सापळा आहे."
      },
      {
        "option_english": "Section 4",
        "option_marathi": "कलम 4",
        "is_correct": true,
        "reason_english": "Section 4 of the PMLA, 2002, specifically deals with the punishment for the offence of money laundering.",
        "reason_marathi": "PMLA, 2002 चे कलम 4 विशेषतः मनी लॉन्डरिंगच्या गुन्ह्यासाठी शिक्षेशी संबंधित आहे."
      },
      {
        "option_english": "Section 10",
        "option_marathi": "कलम 10",
        "is_correct": false,
        "reason_english": "Section 10 deals with the power to search persons, not the punishment for money laundering.",
        "reason_marathi": "कलम 10 व्यक्तींना शोधण्याच्या अधिकाराशी संबंधित आहे, मनी लॉन्डरिंगच्या शिक्षेशी नाही."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "हुंडा बंदी अधिनियम, 1961 च्या कलम 4 अन्वये जी कोणी व्यक्ती वधु किंवा वराच्या पालकांकडून किंवा त्यांचे नातेवाईकांकडून लग्नप्रित्यार्थ हुंड्याची मागणी करेल त्यास कमीत कमी 6 महीने जी ______ वर्षे पर्यन्त वाढू शकेल अशा कारावासाची आणि रुपये ______ पर्यन्त दंडाची शिक्षा होऊ शकते.",
    "question_english": "According to section 4 of Dowry Prohibition Act 1961, whoever demands dowry from parents or relatives of bride or bridegroom in consideration of marriage shall be punished with the imprisonment of 6 months which may extend to ______ years and fine which may extend to ______ rupees.",
    "options_marathi": [
      "4; 5,000",
      "2; 10,000",
      "3; 20,000",
      "4; 50,000"
    ],
    "options_english": [
      "4; 5,000",
      "2; 10,000",
      "3; 20,000",
      "4; 50,000"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Dowry Prohibition Act, 1961",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 4 of the Dowry Prohibition Act, 1961, is a critical provision aimed at deterring the practice of dowry demand. It stipulates that any person who directly or indirectly demands dowry from the parents or relatives of either the bride or the bridegroom, in consideration of the marriage, shall be subject to punishment. The prescribed punishment includes imprisonment for a term of not less than six months, which can extend up to two years, along with a fine that may extend up to ten thousand rupees, or both. This provision underscores the legal seriousness with which dowry demands are treated in India.",
    "explanation_marathi": "हुंडा प्रतिबंधक कायदा, 1961 चे कलम 4 हे हुंड्याच्या मागणीला प्रतिबंध घालण्यासाठी एक महत्त्वाचे कलम आहे. या कलमानुसार, जो कोणी प्रत्यक्ष किंवा अप्रत्यक्षपणे वधू किंवा वराच्या पालकांकडून किंवा त्यांच्या नातेवाईकांकडून लग्नाच्या विचारात हुंड्याची मागणी करेल, त्याला शिक्षा होईल. विहित शिक्षेमध्ये किमान सहा महिन्यांचा कारावास, जो दोन वर्षांपर्यंत वाढू शकतो, आणि दहा हजार रुपयांपर्यंतचा दंड, किंवा दोन्ही शिक्षांचा समावेश आहे. ही तरतूद भारतात हुंड्याच्या मागणीला किती गंभीरपणे घेतले जाते हे दर्शवते.",
    "options_breakdown": [
      {
        "option_english": "4; 5,000",
        "option_marathi": "4; 5,000",
        "is_correct": false,
        "reason_english": "The maximum imprisonment is 2 years, not 4 years, and the maximum fine is Rs. 10,000, not Rs. 5,000.",
        "reason_marathi": "कमाल कारावास 2 वर्षांपर्यंत आहे, 4 वर्षांपर्यंत नाही, आणि कमाल दंड 10,000 रुपये आहे, 5,000 रुपये नाही."
      },
      {
        "option_english": "2; 10,000",
        "option_marathi": "2; 10,000",
        "is_correct": true,
        "reason_english": "As per Section 4 of the Dowry Prohibition Act, 1961, the imprisonment may extend to two years and the fine may extend to ten thousand rupees.",
        "reason_marathi": "हुंडा प्रतिबंधक कायदा, 1961 च्या कलम 4 नुसार, कारावास दोन वर्षांपर्यंत आणि दंड दहा हजार रुपयांपर्यंत वाढू शकतो."
      },
      {
        "option_english": "3; 20,000",
        "option_marathi": "3; 20,000",
        "is_correct": false,
        "reason_english": "The maximum imprisonment is 2 years, not 3 years, and the maximum fine is Rs. 10,000, not Rs. 20,000.",
        "reason_marathi": "कमाल कारावास 2 वर्षांपर्यंत आहे, 3 वर्षांपर्यंत नाही, आणि कमाल दंड 10,000 रुपये आहे, 20,000 रुपये नाही."
      },
      {
        "option_english": "4; 50,000",
        "option_marathi": "4; 50,000",
        "is_correct": false,
        "reason_english": "The maximum imprisonment is 2 years, not 4 years, and the maximum fine is Rs. 10,000, not Rs. 50,000.",
        "reason_marathi": "कमाल कारावास 2 वर्षांपर्यंत आहे, 4 वर्षांपर्यंत नाही, आणि कमाल दंड 10,000 रुपये आहे, 50,000 रुपये नाही."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "राज्य शासन, मानवी हक्कांच्या उल्लंघनाबाबत, उद्भवणाऱ्या अपराधांची संपरिक्षा त्वरेने होण्याच्या प्रयोजनासाठी, उच्च न्यायालयाच्या मुख्य न्यायाधिशांच्या सहमतीने अधिसूचनेद्वारे प्रत्येक जिल्ह्यांकरिता उक्त अपरांधांची संपरिक्षा करण्यासाठी ______ हे मानवी हक्क न्यायालय म्हणून विनिर्दिष्ट करील.\n(a) सत्र न्यायालय\n(b) शहर दिवाणी न्यायालय\n(c) कामगार न्यायालय\n(d) कौटुंबिक न्यायालय\nअचूक पर्याय निवडा :",
    "question_english": "For the purpose of providing speedy trial of offences arising out of violation of human rights, State Govt. may with the concurrence of the Chief Justice of the High Court, by notification, specify for each district a ______ to be a human rights court to try the said offences.\n(a) Sessions Court\n(b) City Civil Court\n(c) Labour Court\n(d) Family Court\nChoose the correct option :",
    "options_marathi": [
      "फक्त (a) बरोबर",
      "फक्त (b) आणि (d) बरोबर",
      "फक्त (c) आणि (a) बरोबर",
      "फक्त (d) बरोबर"
    ],
    "options_english": [
      "Only (a) is correct",
      "Only (b) and (d) correct",
      "Only (c) and (a) correct",
      "Only (d) is correct"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Protection of Human Rights Act, 1993",
    "difficulty": "Medium",
    "trap_detected": "Distractors",
    "explanation_english": "Section 30 of The Protection of Human Rights Act, 1993, empowers the State Government to establish Human Rights Courts. The primary objective of these courts is to ensure the speedy trial of offences that arise from violations of human rights. To achieve this, the State Government, in consultation with the Chief Justice of the High Court, is authorized to designate a 'Court of Session' in each district as a Human Rights Court. This ensures that existing judicial infrastructure is utilized for specialized human rights cases, facilitating quicker dispensation of justice.",
    "explanation_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 चे कलम 30 राज्य सरकारला मानवी हक्क न्यायालये स्थापन करण्याचे अधिकार देते. या न्यायालयांचा मुख्य उद्देश मानवी हक्कांच्या उल्लंघनातून उद्भवणाऱ्या गुन्ह्यांची जलद सुनावणी सुनिश्चित करणे आहे. हे साध्य करण्यासाठी, राज्य सरकार, उच्च न्यायालयाच्या मुख्य न्यायाधीशांच्या सहमतीने, प्रत्येक जिल्ह्यामध्ये 'सत्र न्यायालय' (Court of Session) हे मानवी हक्क न्यायालय म्हणून अधिसूचित करू शकते. यामुळे विद्यमान न्यायिक पायाभूत सुविधांचा मानवी हक्कांच्या विशेष प्रकरणांसाठी वापर केला जातो, ज्यामुळे जलद न्याय मिळण्यास मदत होते.",
    "options_breakdown": [
      {
        "option_english": "Only (a) is correct",
        "option_marathi": "फक्त (a) बरोबर",
        "is_correct": true,
        "reason_english": "As per Section 30 of The Protection of Human Rights Act, 1993, the State Government specifies a 'Court of Session' for each district to be a Human Rights Court.",
        "reason_marathi": "मानवी हक्क संरक्षण अधिनियम, 1993 च्या कलम 30 नुसार, राज्य सरकार प्रत्येक जिल्ह्यासाठी 'सत्र न्यायालय' हे मानवी हक्क न्यायालय म्हणून निर्दिष्ट करते."
      },
      {
        "option_english": "Only (b) and (d) correct",
        "option_marathi": "फक्त (b) आणि (d) बरोबर",
        "is_correct": false,
        "reason_english": "City Civil Courts and Family Courts are not designated as Human Rights Courts under the Act.",
        "reason_marathi": "शहर दिवाणी न्यायालये आणि कौटुंबिक न्यायालये या कायद्यांतर्गत मानवी हक्क न्यायालये म्हणून निर्दिष्ट केलेली नाहीत."
      },
      {
        "option_english": "Only (c) and (a) correct",
        "option_marathi": "फक्त (c) आणि (a) बरोबर",
        "is_correct": false,
        "reason_english": "Labour Courts are not designated as Human Rights Courts under the Act.",
        "reason_marathi": "कामगार न्यायालये या कायद्यांतर्गत मानवी हक्क न्यायालये म्हणून निर्दिष्ट केलेली नाहीत."
      },
      {
        "option_english": "Only (d) is correct",
        "option_marathi": "फक्त (d) बरोबर",
        "is_correct": false,
        "reason_english": "Family Courts are not designated as Human Rights Courts under the Act.",
        "reason_marathi": "कौटुंबिक न्यायालये या कायद्यांतर्गत मानवी हक्क न्यायालये म्हणून निर्दिष्ट केलेली नाहीत."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत सिद्धापराध व्यक्तीला विनिर्दिष्ट क्षेत्रातून निघून जाण्याबद्दलचे निदेश देण्याचे अधिकार नसलेले खालीलपैकी अधिकारी कोण ?",
    "question_english": "As per Maharashtra Police Act, 1951 who amongst the following officer is not having power to direct a person convicted for an offence to remove himself outside certain specified area ?",
    "options_marathi": [
      "पोलीस आयुक्त",
      "जिल्हा दंडाधिकारी",
      "उप-विभागीय जिल्हा दंडाधिकारी",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Police Commissioner",
      "District Magistrate",
      "Sub-divisional District Magistrate",
      "None of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Removal of Convicted Persons (Section 57)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 57 of the Maharashtra Police Act, 1951, grants powers to the Commissioner of Police, District Magistrate, and Sub-divisional District Magistrate to direct a person convicted of certain offences to remove himself outside a specified area. Since all the officers listed in options 1, 2, and 3 possess this power, the correct answer is 'None of the above', implying that no officer among the given choices lacks this power.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 57 नुसार, पोलीस आयुक्त, जिल्हा दंडाधिकारी आणि उप-विभागीय जिल्हा दंडाधिकारी यांना विशिष्ट गुन्ह्यांसाठी दोषी ठरलेल्या व्यक्तीला विनिर्दिष्ट क्षेत्रातून निघून जाण्याचे निर्देश देण्याचे अधिकार आहेत. पर्याय 1, 2 आणि 3 मध्ये नमूद केलेल्या सर्व अधिकाऱ्यांकडे हे अधिकार असल्याने, योग्य उत्तर 'वरीलपैकी एकही नाही' हे आहे, याचा अर्थ दिलेल्या पर्यायांपैकी कोणत्याही अधिकाऱ्याकडे हे अधिकार नाहीत असे नाही.",
    "options_breakdown": [
      {
        "option_english": "Police Commissioner",
        "option_marathi": "पोलीस आयुक्त",
        "is_correct": false,
        "reason_english": "The Police Commissioner has the power under Section 57 of the Maharashtra Police Act, 1951, to direct a convicted person to remove himself from a specified area.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 57 नुसार, पोलीस आयुक्तांना सिद्धापराध व्यक्तीला विनिर्दिष्ट क्षेत्रातून निघून जाण्याचे निर्देश देण्याचा अधिकार आहे."
      },
      {
        "option_english": "District Magistrate",
        "option_marathi": "जिल्हा दंडाधिकारी",
        "is_correct": false,
        "reason_english": "The District Magistrate also has the power under Section 57 of the Maharashtra Police Act, 1951, to direct a convicted person to remove himself from a specified area.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 57 नुसार, जिल्हा दंडाधिकाऱ्यांनाही सिद्धापराध व्यक्तीला विनिर्दिष्ट क्षेत्रातून निघून जाण्याचे निर्देश देण्याचा अधिकार आहे."
      },
      {
        "option_english": "Sub-divisional District Magistrate",
        "option_marathi": "उप-विभागीय जिल्हा दंडाधिकारी",
        "is_correct": false,
        "reason_english": "The Sub-divisional District Magistrate is also empowered by Section 57 of the Maharashtra Police Act, 1951, to issue such directions.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 57 द्वारे उप-विभागीय जिल्हा दंडाधिकाऱ्यांनाही असे निर्देश देण्याचे अधिकार आहेत."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी एकही नाही",
        "is_correct": true,
        "reason_english": "Since all the officers listed in options 1, 2, and 3 possess the power to direct a convicted person to remove himself, 'None of the above' is the correct answer, as the question asks who *does not* have the power.",
        "reason_marathi": "पर्याय 1, 2 आणि 3 मध्ये नमूद केलेल्या सर्व अधिकाऱ्यांकडे सिद्धापराध व्यक्तीला निघून जाण्याचे निर्देश देण्याचा अधिकार असल्याने, 'वरीलपैकी एकही नाही' हे योग्य उत्तर आहे, कारण प्रश्न विचारतो की कोणाकडे अधिकार *नाही*."
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ नुसार सभ्यता अगर नीतिमत्ता यास धोका पोचेल किंवा राज्यांची शांतता धोक्यात आणतील किंवा ज्याच्यामुळे राज्य शासन उलथून पाडण्याचा संभव आहे अशी आवेशपूर्ण भाषणे करणे, हावभाव करणे अगर सोंग आणणे अशा अव्यवस्थेला प्रतिबंध करण्याचा अधिकार आयुक्त किंवा जिल्हा दंडाधिकाऱ्यांना दिलेला आहे.",
    "question_english": "As per the section ______ of the Maharashtra Police Act, 1951 the power to prohibit certain acts for prevention of disorder is given to the commissioner and the district magistrate if there is delivery of harangues, the use of gestures or mimetic representation and the preparation, exhibition or dissemination of pictures, symbols, placards or any other object or thing which in the opinion of such authority offend against decency or morality or undermine the security of or tend to overthrow the state.",
    "options_marathi": [
      "कलम 37 (1) (a)",
      "कलम 37 (1) (b)",
      "कलम 37 (1) (e)",
      "कलम 37 (1) (f)"
    ],
    "options_english": [
      "Section 37 (1) (a)",
      "Section 37 (1) (b)",
      "Section 37 (1) (e)",
      "Section 37 (1) (f)"
    ],
    "correct_option_index": 1,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Prevention of Disorder (Section 37)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 37 of the Maharashtra Police Act, 1951, deals with the power to prohibit certain acts for the prevention of disorder. Specifically, sub-section (1)(a) grants the Commissioner of Police or District Magistrate the authority to prohibit the delivery of harangues, use of gestures, or mimetic representations that may offend decency or morality, undermine state security, or tend to overthrow the state. The question directly refers to 'passionate speeches, gestures, or impersonations', which aligns perfectly with Section 37(1)(a).",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 37 हे अव्यवस्था प्रतिबंधासाठी विशिष्ट कृत्ये प्रतिबंधित करण्याच्या अधिकाराशी संबंधित आहे. विशेषतः, उप-कलम (1)(a) पोलीस आयुक्त किंवा जिल्हा दंडाधिकारी यांना अशी आवेशपूर्ण भाषणे, हावभाव किंवा सोंग आणण्यास प्रतिबंध करण्याचा अधिकार देते, ज्यामुळे सभ्यता किंवा नीतिमत्ता धोक्यात येऊ शकते, राज्याची सुरक्षा धोक्यात येऊ शकते किंवा राज्य शासन उलथून टाकण्याचा संभव आहे. प्रश्नात 'आवेशपूर्ण भाषणे करणे, हावभाव करणे अगर सोंग आणणे' याचा थेट उल्लेख आहे, जो कलम 37(1)(a) शी पूर्णपणे जुळतो.",
    "options_breakdown": [
      {
        "option_english": "Section 37 (1) (a)",
        "option_marathi": "कलम 37 (1) (a)",
        "is_correct": true,
        "reason_english": "This section specifically addresses the prohibition of delivery of harangues, use of gestures, or mimetic representations that offend decency, morality, or undermine state security, matching the description in the question.",
        "reason_marathi": "हे कलम विशेषतः आवेशपूर्ण भाषणे, हावभाव किंवा सोंग आणण्यास प्रतिबंध करण्याशी संबंधित आहे, ज्यामुळे सभ्यता, नीतिमत्ता धोक्यात येते किंवा राज्याची सुरक्षा धोक्यात येते, जे प्रश्नातील वर्णनाशी जुळते."
      },
      {
        "option_english": "Section 37 (1) (b)",
        "option_marathi": "कलम 37 (1) (b)",
        "is_correct": false,
        "reason_english": "Section 37(1)(b) deals with the prohibition of preparation, exhibition, or dissemination of pictures, symbols, placards, etc., which is different from speeches and gestures.",
        "reason_marathi": "कलम 37(1)(b) हे चित्रे, चिन्हे, फलक इत्यादी तयार करणे, प्रदर्शित करणे किंवा प्रसारित करण्यास प्रतिबंध करण्याशी संबंधित आहे, जे भाषणे आणि हावभावांपेक्षा वेगळे आहे."
      },
      {
        "option_english": "Section 37 (1) (e)",
        "option_marathi": "कलम 37 (1) (e)",
        "is_correct": false,
        "reason_english": "Section 37(1)(e) pertains to the prohibition of assemblies of persons or processions, not speeches or gestures.",
        "reason_marathi": "कलम 37(1)(e) हे व्यक्तींच्या जमावास किंवा मिरवणुकीस प्रतिबंध करण्याशी संबंधित आहे, भाषणे किंवा हावभावांशी नाही."
      },
      {
        "option_english": "Section 37 (1) (f)",
        "option_marathi": "कलम 37 (1) (f)",
        "is_correct": false,
        "reason_english": "Section 37(1)(f) relates to the prohibition of the use of loudspeakers, which is not the primary focus of the question.",
        "reason_marathi": "कलम 37(1)(f) हे ध्वनिक्षेपकांच्या वापरास प्रतिबंध करण्याशी संबंधित आहे, जे प्रश्नाचा मुख्य विषय नाही."
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 2 (5) नुसार \"जिल्हा\" याचा अर्थ फौजदारी प्रक्रिया संहिता 1898 (V of 1898) च्या प्रयोजनाकरिता जिल्हा म्हणून बनविण्यात आलेला प्रादेशिक विभाग असा आहे, परंतु त्यामध्ये कलम ______ अन्वये ज्या क्षेत्रासाठी पोलीस आयुक्ताची नेमणूक करण्यात आली असेल अशा कोणत्याही क्षेत्राचा समावेश होत नाही.",
    "question_english": "According to section 2(5) of Maharashtra Police Act, 1951 \"district\" means a teritorial division constituting a district for the purposes of the code of criminal procedure, 1898 (V of 1898) but does not include any area for which a commissioner of police has been appointed under section ______",
    "options_marathi": [
      "कलम 8",
      "कलम 9",
      "कलम 6",
      "कलम 7"
    ],
    "options_english": [
      "Section 8",
      "Section 9",
      "Section 6",
      "Section 7"
    ],
    "correct_option_index": 4,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Definitions (Section 2 - District)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 2(5) of the Maharashtra Police Act, 1951, defines 'district'. It explicitly states that a 'district' for the purposes of the Act means a territorial division constituting a district for the purposes of the Code of Criminal Procedure, 1898, but it specifically excludes any area for which a Commissioner of Police has been appointed under Section 7 of the same Act. Section 7 deals with the appointment of a Commissioner of Police for certain areas.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 2(5) मध्ये 'जिल्हा' ची व्याख्या दिली आहे. त्यात स्पष्टपणे नमूद केले आहे की, या अधिनियमाच्या प्रयोजनासाठी 'जिल्हा' म्हणजे फौजदारी प्रक्रिया संहिता, 1898 च्या प्रयोजनासाठी जिल्हा म्हणून बनविण्यात आलेला प्रादेशिक विभाग, परंतु त्यात कलम 7 अन्वये ज्या क्षेत्रासाठी पोलीस आयुक्ताची नेमणूक करण्यात आली असेल अशा कोणत्याही क्षेत्राचा समावेश होत नाही. कलम 7 विशिष्ट क्षेत्रांसाठी पोलीस आयुक्तांच्या नेमणुकीशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option_english": "Section 8",
        "option_marathi": "कलम 8",
        "is_correct": false,
        "reason_english": "Section 8 deals with the appointment of Additional, Deputy, Assistant Commissioners of Police, not the definition of 'district'.",
        "reason_marathi": "कलम 8 हे अतिरिक्त, उप, सहायक पोलीस आयुक्तांच्या नेमणुकीशी संबंधित आहे, 'जिल्हा' च्या व्याख्येशी नाही."
      },
      {
        "option_english": "Section 9",
        "option_marathi": "कलम 9",
        "is_correct": false,
        "reason_english": "Section 9 deals with the appointment of Superintendents of Police, not the definition of 'district'.",
        "reason_marathi": "कलम 9 हे पोलीस अधीक्षकांच्या नेमणुकीशी संबंधित आहे, 'जिल्हा' च्या व्याख्येशी नाही."
      },
      {
        "option_english": "Section 6",
        "option_marathi": "कलम 6",
        "is_correct": false,
        "reason_english": "Section 6 deals with the appointment of Additional Commissioners of Police, not the definition of 'district'.",
        "reason_marathi": "कलम 6 हे अतिरिक्त पोलीस आयुक्तांच्या नेमणुकीशी संबंधित आहे, 'जिल्हा' च्या व्याख्येशी नाही."
      },
      {
        "option_english": "Section 7",
        "option_marathi": "कलम 7",
        "is_correct": true,
        "reason_english": "Section 2(5) explicitly states that 'district' does not include any area for which a Commissioner of Police has been appointed under Section 7.",
        "reason_marathi": "कलम 2(5) स्पष्टपणे नमूद करते की 'जिल्हा' मध्ये कलम 7 अन्वये पोलीस आयुक्ताची नेमणूक केलेल्या कोणत्याही क्षेत्राचा समावेश होत नाही."
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या अंतर्गत अतिरिक्त पोलीस आयुक्तांची नेमणूक कोण करू शकते ?",
    "question_english": "Who can appoint Additional Police Commissioner under the provisions of Maharashtra Police Act, 1951 ?",
    "options_marathi": [
      "पोलीस महानिरीक्षक",
      "केंद्र सरकार",
      "राज्य सरकार",
      "वरीलपैकी कोणीही नाही"
    ],
    "options_english": [
      "Inspector General of Police",
      "Central Government",
      "State Government",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Appointment of Police Officers (Section 6)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 6 of the Maharashtra Police Act, 1951, clearly states that the State Government may appoint one or more Additional Commissioners of Police for any area for which a Commissioner of Police has been appointed. This power rests solely with the State Government.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 6 मध्ये स्पष्टपणे नमूद केले आहे की, ज्या क्षेत्रासाठी पोलीस आयुक्ताची नेमणूक करण्यात आली असेल, अशा कोणत्याही क्षेत्रासाठी राज्य सरकार एक किंवा अधिक अतिरिक्त पोलीस आयुक्तांची नेमणूक करू शकते. हा अधिकार केवळ राज्य सरकारकडे आहे.",
    "options_breakdown": [
      {
        "option_english": "Inspector General of Police",
        "option_marathi": "पोलीस महानिरीक्षक",
        "is_correct": false,
        "reason_english": "The Inspector General of Police does not have the authority to appoint Additional Commissioners of Police under the Act.",
        "reason_marathi": "या अधिनियमांतर्गत पोलीस महानिरीक्षकांना अतिरिक्त पोलीस आयुक्तांची नेमणूक करण्याचा अधिकार नाही."
      },
      {
        "option_english": "Central Government",
        "option_marathi": "केंद्र सरकार",
        "is_correct": false,
        "reason_english": "The Central Government is not empowered to appoint Additional Commissioners of Police for the state under the Maharashtra Police Act, 1951.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत राज्यासाठी अतिरिक्त पोलीस आयुक्तांची नेमणूक करण्याचा अधिकार केंद्र सरकारला नाही."
      },
      {
        "option_english": "State Government",
        "option_marathi": "राज्य सरकार",
        "is_correct": true,
        "reason_english": "As per Section 6 of the Maharashtra Police Act, 1951, the State Government is the authority responsible for appointing Additional Commissioners of Police.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 6 नुसार, राज्य सरकार हे अतिरिक्त पोलीस आयुक्तांची नेमणूक करण्यासाठी जबाबदार प्राधिकरण आहे."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी कोणीही नाही",
        "is_correct": false,
        "reason_english": "The State Government has the power, so this option is incorrect.",
        "reason_marathi": "राज्य सरकारला अधिकार असल्याने, हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "पोलीस अधिकाऱ्याचे कार्यकारी अधिकार व कर्तव्ये यांच्या महाराष्ट्र पोलीस अधिनियम, 1951 मधील संबंधित तरतूदींशी जोड्या जुळवा.\n(a) लोकासंबंधीची पोलीस अधिकाऱ्यांची कर्तव्ये\n(i) कलम 65\n(b) लोकांच्या जाण्यायेण्याच्या ठिकाणी प्रवेश करण्याचा अधिकार\n(ii) कलम 66\n(c) पोलीस अधिकाऱ्यांची कर्तव्ये\n(iii) कलम 64\n(d) पोलीसाने रस्त्यावरील रहदारीचे नियमन करण्याचे कर्तव्ये\n(iv) कलम 67\n(a) (b) (c) (d)\n(1) (ii) (i) (iii) (iv)\n(2) (ii) (iv) (i) (iii)\n(3) (iii) (ii) (i) (iv)\n(4) (i) (iii) (iv) (ii)",
    "question_english": "Match executive powers and duties of the police officer with respective provisions under Maharashtra Police Act, 1951.\n(a) Duties of police officer towards public\n(i) Section 65\n(b) Power to enter places of public resort\n(ii) Section 66\n(c) Duties of police officer\n(iii) Section 64\n(d) Duty of police officer to regulate traffic\n(iv) Section 67\n(a) (b) (c) (d)\n(1) (ii) (i) (iii) (iv)\n(2) (ii) (iv) (i) (iii)\n(3) (iii) (ii) (i) (iv)\n(4) (i) (iii) (iv) (ii)",
    "options_marathi": [
      "(ii) (i) (iii) (iv)",
      "(ii) (iv) (i) (iii)",
      "(iii) (ii) (i) (iv)",
      "(i) (iii) (iv) (ii)"
    ],
    "options_english": [
      "(ii) (i) (iii) (iv)",
      "(ii) (iv) (i) (iii)",
      "(iii) (ii) (i) (iv)",
      "(i) (iii) (iv) (ii)"
    ],
    "correct_option_index": 1,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Duties and Powers of Police Officers (Sections 64-67)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question requires precise knowledge of the sections related to police duties and powers. Let's match them:\n(a) Duties of police officer towards public: This is covered under Section 66.\n(b) Power to enter places of public resort: This power is granted under Section 65.\n(c) Duties of police officer: General duties of police officers are outlined in Section 64.\n(d) Duty of police officer to regulate traffic: This specific duty is mentioned in Section 67.\nTherefore, the correct matching sequence is (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv), which corresponds to option (1).",
    "explanation_marathi": "या प्रश्नासाठी पोलीस कर्तव्ये आणि अधिकारांशी संबंधित कलमांचे अचूक ज्ञान आवश्यक आहे. चला त्यांची जुळणी करूया:\n(a) लोकासंबंधीची पोलीस अधिकाऱ्यांची कर्तव्ये: हे कलम 66 अंतर्गत येते.\n(b) लोकांच्या जाण्यायेण्याच्या ठिकाणी प्रवेश करण्याचा अधिकार: हा अधिकार कलम 65 अंतर्गत दिला आहे.\n(c) पोलीस अधिकाऱ्यांची कर्तव्ये: पोलीस अधिकाऱ्यांची सामान्य कर्तव्ये कलम 64 मध्ये नमूद केली आहेत.\n(d) पोलीसाने रस्त्यावरील रहदारीचे नियमन करण्याचे कर्तव्ये: हे विशिष्ट कर्तव्य कलम 67 मध्ये नमूद केले आहे.\nम्हणून, योग्य जुळणी क्रम (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv) आहे, जो पर्याय (1) शी जुळतो.",
    "options_breakdown": [
      {
        "option_english": "(ii) (i) (iii) (iv)",
        "option_marathi": "(ii) (i) (iii) (iv)",
        "is_correct": true,
        "reason_english": "This option correctly matches (a) with Section 66 (Duties towards public), (b) with Section 65 (Power to enter public resort), (c) with Section 64 (General duties), and (d) with Section 67 (Regulate traffic).",
        "reason_marathi": "हा पर्याय (a) कलम 66 (लोकासंबंधीची कर्तव्ये), (b) कलम 65 (सार्वजनिक ठिकाणी प्रवेशाचा अधिकार), (c) कलम 64 (सामान्य कर्तव्ये) आणि (d) कलम 67 (रस्त्यावरील रहदारीचे नियमन) यांच्याशी योग्यरित्या जुळतो."
      },
      {
        "option_english": "(ii) (iv) (i) (iii)",
        "option_marathi": "(ii) (iv) (i) (iii)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches (b) with Section 67 and (c) with Section 65.",
        "reason_marathi": "हा पर्याय (b) कलम 67 आणि (c) कलम 65 शी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "(iii) (ii) (i) (iv)",
        "option_marathi": "(iii) (ii) (i) (iv)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches (a) with Section 64 and (b) with Section 66.",
        "reason_marathi": "हा पर्याय (a) कलम 64 आणि (b) कलम 66 शी चुकीच्या पद्धतीने जुळवतो."
      },
      {
        "option_english": "(i) (iii) (iv) (ii)",
        "option_marathi": "(i) (iii) (iv) (ii)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches (a) with Section 65 and (b) with Section 64.",
        "reason_marathi": "हा पर्याय (a) कलम 65 आणि (b) कलम 64 शी चुकीच्या पद्धतीने जुळवतो."
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या अंतर्गत ज्याचे निलंबन झालेले नाही अथवा जो रजेवर नाही असा प्रत्येक पोलीस अधिकारी किती काळापर्यंत कामावर आहे असे गृहीत धरले जाते ?",
    "question_english": "Under the provisions of Maharashtra Police Act, 1951 every police officer who is not on leave or under suspension is deemed to be \"on duty\" for how much period ?",
    "options_marathi": [
      "नेहमी",
      "एक महिना",
      "8 तास",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Always",
      "One month",
      "8 hours",
      "None of the above"
    ],
    "correct_option_index": 1,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Police Officer's Duty Status (Section 28)",
    "difficulty": "Easy",
    "trap_detected": "Common Misconception",
    "explanation_english": "Section 28 of the Maharashtra Police Act, 1951, explicitly states that 'Every police officer not on leave or under suspension shall, for all purposes of this Act, be deemed to be always on duty'. This provision highlights the continuous nature of a police officer's duty, emphasizing their availability and responsibility at all times, unless officially relieved.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 28 मध्ये स्पष्टपणे नमूद केले आहे की, 'जो पोलीस अधिकारी रजेवर नाही किंवा निलंबित नाही, तो या अधिनियमाच्या सर्व प्रयोजनांसाठी नेहमीच कर्तव्यावर असल्याचे मानले जाईल'. ही तरतूद पोलीस अधिकाऱ्याच्या कर्तव्याचे सततचे स्वरूप अधोरेखित करते, त्यांची उपलब्धता आणि जबाबदारी नेहमीच असते, जोपर्यंत त्यांना अधिकृतपणे कार्यमुक्त केले जात नाही.",
    "options_breakdown": [
      {
        "option_english": "Always",
        "option_marathi": "नेहमी",
        "is_correct": true,
        "reason_english": "As per Section 28 of the Maharashtra Police Act, 1951, a police officer not on leave or under suspension is deemed to be 'always on duty'.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 28 नुसार, जो पोलीस अधिकारी रजेवर नाही किंवा निलंबित नाही, तो 'नेहमीच कर्तव्यावर' असल्याचे मानले जाते."
      },
      {
        "option_english": "One month",
        "option_marathi": "एक महिना",
        "is_correct": false,
        "reason_english": "There is no such provision in the Act stating a one-month period for being on duty.",
        "reason_marathi": "अधिनियमात कर्तव्यावर असण्यासाठी एक महिन्याचा कालावधी नमूद करणारी अशी कोणतीही तरतूद नाही."
      },
      {
        "option_english": "8 hours",
        "option_marathi": "8 तास",
        "is_correct": false,
        "reason_english": "While 8 hours might be a standard shift, the Act defines duty as continuous, not limited to a specific daily duration.",
        "reason_marathi": "8 तास ही एक मानक शिफ्ट असली तरी, अधिनियम कर्तव्याची व्याख्या सततची करतो, विशिष्ट दैनंदिन कालावधीपुरती मर्यादित नाही."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason_english": "The correct answer is 'Always', so this option is incorrect.",
        "reason_marathi": "योग्य उत्तर 'नेहमी' असल्याने, हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 अंतर्गत बेकायदेशीर जमावाने केलेल्या नुकसानीबद्दल भरपाई रक्कम ही रक्कम भरण्यास पात्र असलेल्या व्यक्तीकडून जिल्हाधिकारी ती खालीलपैकी कशा तन्हेने वसूल करेल ?",
    "question_english": "In which of the following form the compensation amount for injury caused by unlawful assembly can be recovered from the person liable therefore by the collector under Maharashtra Police Act, 1951?",
    "options_marathi": [
      "द्रव्यदंड म्हणून",
      "कर्ज थकबाकी म्हणून",
      "जमीन महसूलची थकबाकी म्हणून",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "As fine amount",
      "As loan arrears",
      "As arrears of land revenue",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Compensation for Unlawful Assembly (Section 51)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 51 of the Maharashtra Police Act, 1951, deals with compensation for injury caused by unlawful assembly. Sub-section (3) of this section clearly states that 'The amount of compensation payable by any person in respect of any injury shall be recoverable from him as an arrear of land revenue.' This is a specific legal provision for recovery.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 51 हे बेकायदेशीर जमावाने केलेल्या नुकसानीबद्दल भरपाईशी संबंधित आहे. या कलमाच्या उप-कलम (3) मध्ये स्पष्टपणे नमूद केले आहे की, 'कोणत्याही व्यक्तीकडून कोणत्याही नुकसानीसाठी देय असलेली भरपाईची रक्कम त्याच्याकडून जमीन महसूलची थकबाकी म्हणून वसूल केली जाईल.' ही वसुलीसाठी एक विशिष्ट कायदेशीर तरतूद आहे.",
    "options_breakdown": [
      {
        "option_english": "As fine amount",
        "option_marathi": "द्रव्यदंड म्हणून",
        "is_correct": false,
        "reason_english": "The Act specifies recovery as arrears of land revenue, not as a general fine amount.",
        "reason_marathi": "अधिनियम जमीन महसूलची थकबाकी म्हणून वसुली निर्दिष्ट करतो, सामान्य द्रव्यदंड म्हणून नाही."
      },
      {
        "option_english": "As loan arrears",
        "option_marathi": "कर्ज थकबाकी म्हणून",
        "is_correct": false,
        "reason_english": "The compensation is not treated as loan arrears.",
        "reason_marathi": "भरपाईला कर्ज थकबाकी म्हणून मानले जात नाही."
      },
      {
        "option_english": "As arrears of land revenue",
        "option_marathi": "जमीन महसूलची थकबाकी म्हणून",
        "is_correct": true,
        "reason_english": "Section 51(3) of the Maharashtra Police Act, 1951, explicitly states that compensation for injury caused by unlawful assembly is recoverable as arrears of land revenue.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 51(3) मध्ये स्पष्टपणे नमूद केले आहे की, बेकायदेशीर जमावाने केलेल्या नुकसानीची भरपाई जमीन महसूलची थकबाकी म्हणून वसूल केली जाते."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी एकही नाही",
        "is_correct": false,
        "reason_english": "A specific method of recovery is provided in the Act, making this option incorrect.",
        "reason_marathi": "अधिनियमात वसुलीची एक विशिष्ट पद्धत दिली असल्याने, हा पर्याय चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम ______ नुसार प्रत्येक पोलीस अधिकाऱ्यास रस्त्यातील संशयित व्यक्तीची झडती घेण्याचा अधिकार आहे.",
    "question_english": "As per section ______ of the Maharashtra Police Act, 1951 every police officer has power to search suspected person in a street.",
    "options_marathi": [
      "कलम 65",
      "कलम 66 A",
      "कलम 67",
      "कलम 68"
    ],
    "options_english": [
      "Section 65",
      "Section 66 A",
      "Section 67",
      "Section 68"
    ],
    "correct_option_index": 1,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Powers of Police Officers (Section 65)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 65 of the Maharashtra Police Act, 1951, specifically grants police officers the 'Power to search suspected persons in streets'. This allows them to search individuals found in public places under suspicious circumstances.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 65 विशेषतः पोलीस अधिकाऱ्यांना 'रस्त्यातील संशयित व्यक्तीची झडती घेण्याचा अधिकार' प्रदान करते. यामुळे त्यांना सार्वजनिक ठिकाणी संशयास्पद परिस्थितीत आढळलेल्या व्यक्तींची झडती घेता येते.",
    "options_breakdown": [
      {
        "option_english": "Section 65",
        "option_marathi": "कलम 65",
        "is_correct": true,
        "reason_english": "Section 65 of the Act directly deals with the power of police officers to search suspected persons in streets.",
        "reason_marathi": "अधिनियमाचे कलम 65 थेट पोलीस अधिकाऱ्यांच्या रस्त्यातील संशयित व्यक्तींची झडती घेण्याच्या अधिकाराशी संबंधित आहे."
      },
      {
        "option_english": "Section 66 A",
        "option_marathi": "कलम 66 A",
        "is_correct": false,
        "reason_english": "Section 66A deals with the power to remove persons obstructing traffic, not searching suspected persons.",
        "reason_marathi": "कलम 66A हे वाहतुकीस अडथळा निर्माण करणाऱ्या व्यक्तींना हटवण्याच्या अधिकाराशी संबंधित आहे, संशयित व्यक्तींची झडती घेण्याशी नाही."
      },
      {
        "option_english": "Section 67",
        "option_marathi": "कलम 67",
        "is_correct": false,
        "reason_english": "Section 67 deals with the duty of police officers to regulate traffic, not searching suspected persons.",
        "reason_marathi": "कलम 67 हे पोलीस अधिकाऱ्यांच्या वाहतूक नियमनाच्या कर्तव्याशी संबंधित आहे, संशयित व्यक्तींची झडती घेण्याशी नाही."
      },
      {
        "option_english": "Section 68",
        "option_marathi": "कलम 68",
        "is_correct": false,
        "reason_english": "Section 68 deals with the power to require persons to desist from annoyance, not searching suspected persons.",
        "reason_marathi": "कलम 68 हे व्यक्तींना त्रास देण्यापासून परावृत्त करण्याच्या अधिकाराशी संबंधित आहे, संशयित व्यक्तींची झडती घेण्याशी नाही."
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम 122 मध्ये सूर्यास्त आणि सूर्योदय यांच्या दरम्यान एखादा व्यक्ती संशयास्पद स्थितीत सापडण्याची एकूण किती प्रकारची कारणे दिलेली आहेत ?",
    "question_english": "Under section 122 of the Maharashtra Police Act, 1951 how many reasons are given regarding finding a person under suspicious circumstances between sunset and sunrise ?",
    "options_marathi": [
      "5",
      "6",
      "8",
      "15"
    ],
    "options_english": [
      "5",
      "6",
      "8",
      "15"
    ],
    "correct_option_index": 4,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Punishment for Certain Other Offences (Section 122)",
    "difficulty": "Hard",
    "trap_detected": "Detailed Factual Recall",
    "explanation_english": "Section 122 of the Maharashtra Police Act, 1951, outlines various circumstances under which a person found between sunset and sunrise can be deemed suspicious and liable for punishment. Specifically, sub-section (a) lists fifteen distinct scenarios (i to xv) related to a person's presence or possession of articles without lawful excuse, making them suspicious. This requires a very detailed recall of the section's content.",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 122, सूर्यास्त आणि सूर्योदय यांच्या दरम्यान आढळलेल्या व्यक्तीला संशयास्पद मानले जाऊ शकते आणि शिक्षेस पात्र ठरू शकते अशा विविध परिस्थितींची रूपरेषा देते. विशेषतः, उप-कलम (a) मध्ये व्यक्तीच्या उपस्थितीशी किंवा कायदेशीर सबब नसताना वस्तूंच्या ताब्यात असण्याशी संबंधित पंधरा (i ते xv) भिन्न परिस्थिती सूचीबद्ध केल्या आहेत, ज्यामुळे त्यांना संशयास्पद मानले जाते. यासाठी कलमातील सामग्रीची अत्यंत तपशीलवार आठवण असणे आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_english": "5",
        "option_marathi": "5",
        "is_correct": false,
        "reason_english": "This number is incorrect. Section 122(a) lists more than 5 reasons.",
        "reason_marathi": "ही संख्या चुकीची आहे. कलम 122(a) मध्ये 5 पेक्षा जास्त कारणे दिली आहेत."
      },
      {
        "option_english": "6",
        "option_marathi": "6",
        "is_correct": false,
        "reason_english": "This number is incorrect. Section 122(a) lists more than 6 reasons.",
        "reason_marathi": "ही संख्या चुकीची आहे. कलम 122(a) मध्ये 6 पेक्षा जास्त कारणे दिली आहेत."
      },
      {
        "option_english": "8",
        "option_marathi": "8",
        "is_correct": false,
        "reason_english": "This number is incorrect. Section 122(a) lists more than 8 reasons.",
        "reason_marathi": "ही संख्या चुकीची आहे. कलम 122(a) मध्ये 8 पेक्षा जास्त कारणे दिली आहेत."
      },
      {
        "option_english": "15",
        "option_marathi": "15",
        "is_correct": true,
        "reason_english": "Section 122(a) of the Maharashtra Police Act, 1951, enumerates fifteen distinct circumstances (from (i) to (xv)) under which a person found between sunset and sunrise can be considered suspicious.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 122(a) मध्ये सूर्यास्त आणि सूर्योदय यांच्या दरम्यान आढळलेल्या व्यक्तीला संशयास्पद मानले जाऊ शकते अशा पंधरा (i ते xv) भिन्न परिस्थितींची गणना केली आहे."
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 मधील कलम 2(13) मध्ये ______ या संज्ञेची व्याख्या दिलेली आहे.",
    "question_english": "Maharashtra Police Act, 1951, under section 2(13) definition of ______ is given.",
    "options_marathi": [
      "सार्वजनिक करमणूकीचे स्थान",
      "सार्वजनिक जागा",
      "सार्वजनिक मनोरंजनाचे स्थान",
      "सक्षम प्राधिकारी"
    ],
    "options_english": [
      "Place of public amusement",
      "Public place",
      "Place of public entertainment",
      "Competent authority"
    ],
    "correct_option_index": 2,
    "subject": "Polity (Maharashtra Police Act, 1951)",
    "topic": "Definitions (Section 2 - Public Place)",
    "difficulty": "Easy",
    "trap_detected": "Similar Sounding Options",
    "explanation_english": "Section 2 of the Maharashtra Police Act, 1951, provides definitions for various terms used in the Act. Specifically, sub-section (13) defines the term 'public place'. It's important to distinguish this from 'place of public amusement' (Section 2(10)) and 'place of public entertainment' (Section 2(11)).",
    "explanation_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 चे कलम 2, अधिनियमात वापरल्या जाणाऱ्या विविध संज्ञांच्या व्याख्या प्रदान करते. विशेषतः, उप-कलम (13) 'सार्वजनिक जागा' या संज्ञेची व्याख्या करते. 'सार्वजनिक करमणूकीचे स्थान' (कलम 2(10)) आणि 'सार्वजनिक मनोरंजनाचे स्थान' (कलम 2(11)) यापासून हे वेगळे करणे महत्त्वाचे आहे.",
    "options_breakdown": [
      {
        "option_english": "Place of public amusement",
        "option_marathi": "सार्वजनिक करमणूकीचे स्थान",
        "is_correct": false,
        "reason_english": "This term is defined under Section 2(10) of the Act, not Section 2(13).",
        "reason_marathi": "ही संज्ञा अधिनियमाच्या कलम 2(10) अंतर्गत परिभाषित केली आहे, कलम 2(13) अंतर्गत नाही."
      },
      {
        "option_english": "Public place",
        "option_marathi": "सार्वजनिक जागा",
        "is_correct": true,
        "reason_english": "Section 2(13) of the Maharashtra Police Act, 1951, provides the definition for 'public place'.",
        "reason_marathi": "महाराष्ट्र पोलीस अधिनियम, 1951 च्या कलम 2(13) मध्ये 'सार्वजनिक जागा' या संज्ञेची व्याख्या दिली आहे."
      },
      {
        "option_english": "Place of public entertainment",
        "option_marathi": "सार्वजनिक मनोरंजनाचे स्थान",
        "is_correct": false,
        "reason_english": "This term is defined under Section 2(11) of the Act, not Section 2(13).",
        "reason_marathi": "ही संज्ञा अधिनियमाच्या कलम 2(11) अंतर्गत परिभाषित केली आहे, कलम 2(13) अंतर्गत नाही."
      },
      {
        "option_english": "Competent authority",
        "option_marathi": "सक्षम प्राधिकारी",
        "is_correct": false,
        "reason_english": "The term 'competent authority' is not defined under Section 2(13) of the Act.",
        "reason_marathi": "'सक्षम प्राधिकारी' ही संज्ञा अधिनियमाच्या कलम 2(13) अंतर्गत परिभाषित केलेली नाही."
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "'अ' हा जमीनधारक त्याच्या जमिनीच्या हद्दीत एखाद्याचा खून पडल्याचे माहीत असताना, साप चावल्यामुळे अपघाताने त्याचा मृत्यु झालेला आहे अशी चुकीची माहिती जिल्ह्याच्या दंडाधिकाऱ्याला बुद्धिपुरस्सर खोटी माहिती पुरवितो, येथे 'अ' हा ______ भारतीय दंड संहितेनुसार व्याख्या केलेल्या अपराधाबद्दल दोषी आहे.",
    "question_english": "'A', a landholder, knowing of the commission of a murder within the limits of his estate, wilfully misinforms the Magistrate of the district that the death has occurred by accident in consequence of the bite of snake. A is guilty of the offence furnishing false information, defined in ______ of Indian Penal Code.",
    "options_marathi": [
      "कलम 177",
      "कलम 179",
      "कलम 176",
      "कलम 188"
    ],
    "options_english": [
      "Section 177",
      "Section 179",
      "Section 176",
      "Section 188"
    ],
    "correct_option_index": 1,
    "subject": "Law",
    "topic": "Indian Penal Code - Offences relating to public servants",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 177 of the Indian Penal Code deals with furnishing false information. It states that whoever, being legally bound to furnish information on any subject to any public servant, as such, furnishes, as true, information which he knows or has reason to believe to be false, shall be punished. In this scenario, 'A' is a landholder who is legally bound to report a murder within his estate but intentionally provides false information about the cause of death to the Magistrate. This directly falls under the ambit of Section 177.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 177 खोटी माहिती देण्याशी संबंधित आहे. यात असे म्हटले आहे की, जो कोणी, कोणत्याही सार्वजनिक सेवकाला, कोणत्याही विषयावर माहिती देण्यास कायदेशीररित्या बांधील असताना, खोटी माहिती खरी असल्याचे जाणूनबुजून किंवा ती खोटी असल्याचे मानण्यास कारण असताना देतो, त्याला शिक्षा होईल. या परिस्थितीत, 'अ' हा जमीनधारक त्याच्या मालमत्तेच्या हद्दीत झालेल्या खुनाची माहिती देण्यास कायदेशीररित्या बांधील असताना, दंडाधिकाऱ्याला मृत्यूच्या कारणाबद्दल जाणूनबुजून खोटी माहिती देतो. हे थेट कलम 177 च्या कक्षेत येते.",
    "options_breakdown": [
      {
        "option_english": "Section 177",
        "option_marathi": "कलम 177",
        "is_correct": true,
        "reason": "This section specifically deals with furnishing false information to a public servant by a person legally bound to furnish such information. The scenario perfectly matches this definition."
      },
      {
        "option_english": "Section 179",
        "option_marathi": "कलम 179",
        "is_correct": false,
        "reason": "Section 179 deals with refusing to answer a public servant authorized to question, which is not the case here as 'A' provided information, albeit false."
      },
      {
        "option_english": "Section 176",
        "option_marathi": "कलम 176",
        "is_correct": false,
        "reason": "Section 176 deals with omission to give notice or information to a public servant by a person legally bound to give it. Here, 'A' furnished information, he did not omit to give it."
      },
      {
        "option_english": "Section 188",
        "option_marathi": "कलम 188",
        "is_correct": false,
        "reason": "Section 188 deals with disobedience to an order duly promulgated by a public servant, which is not relevant to the given scenario."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "भारतीय दंड संहिता 1860 मधील कलम 24 नुसार जो कोणी एखाद्या व्यक्तीस गैर लाभ व्हावा किंवा दुसऱ्या व्यक्तीची गैर हानी व्हावी या उद्देशाने कोणतीही गोष्ट करतो तेंव्हा तो ती गोष्ट ______ करतो असे म्हटले जाते.",
    "question_english": "As per Section 24 of the Indian Penal Code, 1860 whoever does anything with the intention of causing wrongful gain to one person or wrongful loss to another person is said to do that thing ______",
    "options_marathi": [
      "कपटीपणाने",
      "गैर लाभ",
      "अप्रामाणिकपणाने",
      "नकलीकरण"
    ],
    "options_english": [
      "Fraudulently",
      "Wrongful gain",
      "Dishonestly",
      "Counterfeit"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Indian Penal Code - General Explanations (Definitions)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 24 of the Indian Penal Code defines the term 'Dishonestly'. It states that 'Whoever does anything with the intention of causing wrongful gain to one person or wrongful loss to another person, is said to do that thing “dishonestly”'. This is a direct definition from the IPC, crucial for understanding various offences related to property and other criminal acts.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 24 'अप्रामाणिकपणाने' या शब्दाची व्याख्या करते. यात असे म्हटले आहे की, 'जो कोणी एखाद्या व्यक्तीस गैर लाभ व्हावा किंवा दुसऱ्या व्यक्तीची गैर हानी व्हावी या उद्देशाने कोणतीही गोष्ट करतो, तेंव्हा तो ती गोष्ट 'अप्रामाणिकपणाने' करतो असे म्हटले जाते.' ही भारतीय दंड संहितेतील थेट व्याख्या आहे, जी मालमत्तेशी संबंधित विविध गुन्हे आणि इतर गुन्हेगारी कृत्ये समजून घेण्यासाठी महत्त्वाची आहे.",
    "options_breakdown": [
      {
        "option_english": "Fraudulently",
        "option_marathi": "कपटीपणाने",
        "is_correct": false,
        "reason": "Section 25 defines 'Fraudulently' as doing something with intent to defraud, but not otherwise. This is distinct from the definition of 'Dishonestly'."
      },
      {
        "option_english": "Wrongful gain",
        "option_marathi": "गैर लाभ",
        "is_correct": false,
        "reason": "Wrongful gain is a component of the definition of 'Dishonestly' (Section 23), but not the act itself."
      },
      {
        "option_english": "Dishonestly",
        "option_marathi": "अप्रामाणिकपणाने",
        "is_correct": true,
        "reason": "This is the precise term defined in Section 24 of the IPC, matching the given description of intending to cause wrongful gain or wrongful loss."
      },
      {
        "option_english": "Counterfeit",
        "option_marathi": "नकलीकरण",
        "is_correct": false,
        "reason": "Section 28 defines 'Counterfeit' as causing one thing to resemble another, intending by means of that resemblance to practice deception, or knowing it to be likely that deception will thereby be practiced. This is unrelated to the given definition."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "एखादी व्यक्ती एखादी गोष्ट करण्यास प्रोत्साहन देतो म्हणजे तो भारतीय दंड संहितेच्या कलम 107 नुसार ______ करतो.",
    "question_english": "As per section 107 of Indian Penal Code, a person abets the doing of a thing if he ______",
    "options_marathi": [
      "दुसऱ्याला ती गोष्ट करण्यास प्रवृत्त",
      "कृत्य करताना इतरांसोबत कट रचणे",
      "हेतुपुरस्सर ती गोष्ट करण्यास मदत",
      "वरील सर्व"
    ],
    "options_english": [
      "instigates another to do that thing",
      "conspires with other in the doing of the act",
      "intentionally aids the doing of that thing",
      "all of the above"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Indian Penal Code - Abetment",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 107 of the Indian Penal Code defines 'Abetment of a thing'. It outlines three ways in which a person can abet the doing of a thing: firstly, by instigating another person to do that thing; secondly, by engaging with one or more other persons in any conspiracy for the doing of that thing; and thirdly, by intentionally aiding, by any act or illegal omission, the doing of that thing. Since all three options provided are part of this comprehensive definition, 'all of the above' is the correct answer.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 107 'एखाद्या गोष्टीस प्रोत्साहन देणे' (Abetment of a thing) याची व्याख्या करते. यात तीन प्रकारे एखाद्या गोष्टीस प्रोत्साहन दिले जाऊ शकते असे नमूद केले आहे: पहिले, दुसऱ्या व्यक्तीला ती गोष्ट करण्यास प्रवृत्त करून; दुसरे, ती गोष्ट करण्यासाठी एक किंवा अधिक व्यक्तींसोबत कट रचून; आणि तिसरे, हेतुपुरस्सर कोणत्याही कृतीने किंवा बेकायदेशीर वगळण्याने ती गोष्ट करण्यास मदत करून. दिलेले तिन्ही पर्याय या सर्वसमावेशक व्याख्येचा भाग असल्याने, 'वरील सर्व' हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "instigates another to do that thing",
        "option_marathi": "दुसऱ्याला ती गोष्ट करण्यास प्रवृत्त",
        "is_correct": true,
        "reason": "This is the first clause of Section 107, defining one form of abetment."
      },
      {
        "option_english": "conspires with other in the doing of the act",
        "option_marathi": "कृत्य करताना इतरांसोबत कट रचणे",
        "is_correct": true,
        "reason": "This is the second clause of Section 107, defining another form of abetment (criminal conspiracy leading to an act)."
      },
      {
        "option_english": "intentionally aids the doing of that thing",
        "option_marathi": "हेतुपुरस्सर ती गोष्ट करण्यास मदत",
        "is_correct": true,
        "reason": "This is the third clause of Section 107, defining the third form of abetment."
      },
      {
        "option_english": "all of the above",
        "option_marathi": "वरील सर्व",
        "is_correct": true,
        "reason": "Since all three individual options are valid definitions of abetment under Section 107, this comprehensive option is the correct choice."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "भारतीय दंड संहिता 1860 मधील कलम 4 नुसार खालील वाक्ये वाचा व उत्तर द्या.\n(i) 'अ' हा भारताचा नागरिक असून युगांडामध्ये खून करतो.\n(ii) भारतात जेथे तो सापडेल अशा कोणत्याही स्थळी खुनाबद्दल त्याची संपरीक्षा व दोषसिद्धी केली जाऊ शकते.\nपर्यायी उत्तरे :",
    "question_english": "As per section 4 of the Indian Penal Code 1860 read the following statements and give answer.\n(i) 'A' who is a citizen of India commits a murder in Uganda.\n(ii) He can be tried and convicted of murder in any place in India in which he may be found.\nAnswer Options :",
    "options_marathi": [
      "दोन्ही वाक्ये चूक आहेत.",
      "दोन्ही वाक्ये बरोबर आहेत.",
      "वाक्य (i) चूक असून वाक्य (ii) बरोबर आहे.",
      "वाक्य (ii) चूक असून वाक्य (i) बरोबर आहे."
    ],
    "options_english": [
      "Both the statements are wrong.",
      "Both the statements are correct.",
      "Statement (i) is wrong, Statement (ii) is correct.",
      "Statement (ii) is wrong, Statement (i) is correct."
    ],
    "correct_option_index": 2,
    "subject": "Law",
    "topic": "Indian Penal Code - Extra-territorial jurisdiction",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Section 4 of the Indian Penal Code extends the Code's jurisdiction to extra-territorial offences. It explicitly states that the provisions of the Code apply to any offence committed by any citizen of India in any place without and beyond India. Therefore, statement (i) is correct. Furthermore, such a person can be tried and convicted of the offence in any place in India in which he may be found, as per the Code of Criminal Procedure. Thus, statement (ii) is also correct. Both statements accurately reflect the principles of extra-territorial jurisdiction under Indian law.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 4, संहितेचे कार्यक्षेत्र भारताबाहेरील गुन्ह्यांपर्यंत वाढवते. यात स्पष्टपणे नमूद केले आहे की, संहितेतील तरतुदी भारताचा कोणताही नागरिक भारताबाहेर कोणत्याही ठिकाणी केलेल्या गुन्ह्याला लागू होतात. त्यामुळे, विधान (i) बरोबर आहे. याव्यतिरिक्त, अशा व्यक्तीवर भारतात तो जेथे सापडेल अशा कोणत्याही ठिकाणी गुन्ह्यासाठी खटला चालवला जाऊ शकतो आणि त्याला दोषी ठरवले जाऊ शकते, असे फौजदारी प्रक्रिया संहितेनुसार आहे. त्यामुळे, विधान (ii) देखील बरोबर आहे. दोन्ही विधाने भारतीय कायद्यानुसार बाह्य-प्रादेशिक अधिकारितेच्या तत्त्वांचे अचूकपणे वर्णन करतात.",
    "options_breakdown": [
      {
        "option_english": "Both the statements are wrong.",
        "option_marathi": "दोन्ही वाक्ये चूक आहेत.",
        "is_correct": false,
        "reason": "Both statements are correct as per Section 4 of IPC and general principles of criminal jurisdiction."
      },
      {
        "option_english": "Both the statements are correct.",
        "option_marathi": "दोन्ही वाक्ये बरोबर आहेत.",
        "is_correct": true,
        "reason": "Statement (i) is correct because Section 4(1) of IPC covers offences committed by Indian citizens outside India. Statement (ii) is correct as such individuals can be tried in India wherever they are found."
      },
      {
        "option_english": "Statement (i) is wrong, Statement (ii) is correct.",
        "option_marathi": "वाक्य (i) चूक असून वाक्य (ii) बरोबर आहे.",
        "is_correct": false,
        "reason": "Statement (i) is correct, not wrong."
      },
      {
        "option_english": "Statement (ii) is wrong, Statement (i) is correct.",
        "option_marathi": "वाक्य (ii) चूक असून वाक्य (i) बरोबर आहे.",
        "is_correct": false,
        "reason": "Statement (ii) is correct, not wrong."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "जर 'अ' ने जाणूनबुजुन श्री 'पी' ला आणि त्याच्या पत्नीला काही दुखापत करण्याची भीती दाखवली आणि अप्रामाणिकपणे 'म' ला काही मालमत्ता देण्यास 'पी' ला प्रवृत्त केले तर 'अ' ______ साठी भारतीय दंड संहितेच्या कलम ______ नुसार दोषी आहे.",
    "question_english": "If 'A' intentionally puts Mr. 'P' in fear of any injury to him and his wife and thereby dishonestly induces Mr. 'P' to deliver some property to 'M', 'A' commits ______ and is guilty as per section ______ of Indian Penal Code.",
    "options_marathi": [
      "चोरी/378",
      "खंडणी/383",
      "खोडसाळपणा/425",
      "डकैती/391"
    ],
    "options_english": [
      "Theft/378",
      "Extortion/383",
      "Mischief/425",
      "Dacoity/391"
    ],
    "correct_option_index": 2,
    "subject": "Law",
    "topic": "Indian Penal Code - Offences against property",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The scenario described perfectly matches the definition of 'Extortion' as provided in Section 383 of the Indian Penal Code. Section 383 states that 'Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, or anything signed or sealed which may be converted into a valuable security, commits “extortion”'. 'A' puts 'P' in fear of injury to himself and his wife and dishonestly induces him to deliver property, which is the essence of extortion.",
    "explanation_marathi": "वर्णित परिस्थिती भारतीय दंड संहितेच्या कलम 383 मध्ये दिलेल्या 'खंडणी' (Extortion) च्या व्याख्येशी पूर्णपणे जुळते. कलम 383 असे सांगते की, 'जो कोणी हेतुपुरस्सर कोणत्याही व्यक्तीला स्वतःला किंवा इतरांना दुखापत होण्याची भीती दाखवतो आणि त्यामुळे भीतीपोटी त्या व्यक्तीला कोणत्याही व्यक्तीला कोणतीही मालमत्ता किंवा मौल्यवान सुरक्षा, किंवा मौल्यवान सुरक्षिततेमध्ये रूपांतरित करता येणारी कोणतीही स्वाक्षरी केलेली किंवा सीलबंद वस्तू देण्यास अप्रामाणिकपणे प्रवृत्त करतो, तो 'खंडणी' करतो.' 'अ' हा 'पी' ला स्वतःला आणि त्याच्या पत्नीला दुखापत होण्याची भीती दाखवतो आणि त्याला मालमत्ता देण्यास अप्रामाणिकपणे प्रवृत्त करतो, जे खंडणीचे सार आहे.",
    "options_breakdown": [
      {
        "option_english": "Theft/378",
        "option_marathi": "चोरी/378",
        "is_correct": false,
        "reason": "Theft (Section 378) involves taking movable property out of the possession of any person without that person's consent, but it does not involve putting the person in fear of injury."
      },
      {
        "option_english": "Extortion/383",
        "option_marathi": "खंडणी/383",
        "is_correct": true,
        "reason": "This option correctly identifies the offence and the relevant section. Extortion involves intentionally putting someone in fear of injury to dishonestly induce them to deliver property."
      },
      {
        "option_english": "Mischief/425",
        "option_marathi": "खोडसाळपणा/425",
        "is_correct": false,
        "reason": "Mischief (Section 425) involves causing wrongful loss or damage to property, but not by inducing delivery through fear of injury."
      },
      {
        "option_english": "Dacoity/391",
        "option_marathi": "डकैती/391",
        "is_correct": false,
        "reason": "Dacoity (Section 391) is robbery committed by five or more persons. The scenario describes an act by a single person ('A') and does not involve the element of five or more persons."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "भारतीय दंड संहिता 1860 मधील कलम 124अ च्या अनुषंगाने ______ या कलमाखाली अपराध ठरत नाही.",
    "question_english": "As per provisions of the section 124A of the Indian Penal Code 1860 which do not constitute an offence under this section ?",
    "options_marathi": [
      "द्वेषाची भावना",
      "तुच्छतेची भावना",
      "अप्रीतीची भावना",
      "शासनाच्या कारवाईबद्दल नापसंतीची टीका"
    ],
    "options_english": [
      "Feeling of hatred",
      "Feeling of contempt",
      "Feeling of disaffection",
      "Comments expressing disapprobation of action of government"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Indian Penal Code - Sedition (Section 124A)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 124A of the Indian Penal Code deals with sedition. However, it includes explanations that clarify what does *not* constitute an offence under this section. Explanation 2 and 3 state that comments expressing disapprobation of the measures or administrative action of the Government, with a view to obtain their alteration by lawful means, without exciting or attempting to excite hatred, contempt or disaffection, do not constitute an offence. Therefore, 'Comments expressing disapprobation of action of government' is explicitly excluded from the purview of sedition, provided they do not incite the feelings of hatred, contempt, or disaffection.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 124अ राजद्रोहाशी संबंधित आहे. तथापि, यात स्पष्टीकरणे समाविष्ट आहेत जी या कलमाखाली कोणता गुन्हा ठरत नाही हे स्पष्ट करतात. स्पष्टीकरण 2 आणि 3 असे सांगतात की, शासनाच्या उपाययोजना किंवा प्रशासकीय कृतींबद्दल कायदेशीर मार्गाने बदल घडवून आणण्याच्या उद्देशाने नापसंती व्यक्त करणारी टीका, द्वेष, तुच्छता किंवा अप्रीतीची भावना भडकवल्याशिवाय किंवा भडकवण्याचा प्रयत्न केल्याशिवाय, या कलमाखाली गुन्हा ठरत नाही. त्यामुळे, 'शासनाच्या कारवाईबद्दल नापसंतीची टीका' ही राजद्रोहाच्या कक्षेतून स्पष्टपणे वगळण्यात आली आहे, जर ती द्वेष, तुच्छता किंवा अप्रीतीची भावना भडकवत नसेल.",
    "options_breakdown": [
      {
        "option_english": "Feeling of hatred",
        "option_marathi": "द्वेषाची भावना",
        "is_correct": false,
        "reason": "Exciting or attempting to excite hatred towards the Government established by law is a core element of sedition under Section 124A."
      },
      {
        "option_english": "Feeling of contempt",
        "option_marathi": "तुच्छतेची भावना",
        "is_correct": false,
        "reason": "Exciting or attempting to excite contempt towards the Government established by law is also a core element of sedition under Section 124A."
      },
      {
        "option_english": "Feeling of disaffection",
        "option_marathi": "अप्रीतीची भावना",
        "is_correct": false,
        "reason": "Exciting or attempting to excite disaffection towards the Government established by law is the primary element of sedition under Section 124A. 'Disaffection' includes disloyalty and all feelings of enmity."
      },
      {
        "option_english": "Comments expressing disapprobation of action of government",
        "option_marathi": "शासनाच्या कारवाईबद्दल नापसंतीची टीका",
        "is_correct": true,
        "reason": "As per Explanations 2 and 3 of Section 124A, comments expressing disapprobation of government actions, without exciting hatred, contempt, or disaffection, do not constitute an offence under this section. This allows for legitimate criticism."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "भारतीय दंड संहितेच्या कलम 160 नुसार, जो कोणी सार्वजनिक ठिकाणी मारामारी करेल त्याला ______ पर्यंतच्या कालावधीसाठी कारावासाची किंवा ______ रुपयांपर्यंतच्या दंडाची किंवा दोन्ही शिक्षा होऊ शकतात.",
    "question_english": "Whoever commits an affray shall be punished with imprisonment of either discription for a term which may extend to ______ or with fine which may extend to ______ rupees, or with both as per section 160 of Indian Penal Code.",
    "options_marathi": [
      "सहा महिने/पाचशे",
      "एक महिना/शंभर",
      "दोन महिने/सहाशे",
      "एक वर्ष/पाचशे"
    ],
    "options_english": [
      "Six months/Five hundred",
      "One month/One hundred",
      "Two months/Six hundred",
      "One year/Five hundred"
    ],
    "correct_option_index": 2,
    "subject": "Law",
    "topic": "Indian Penal Code - Offences against public tranquility (Affray)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 160 of the Indian Penal Code prescribes the punishment for committing an affray. An affray occurs when two or more persons, by fighting in a public place, disturb the public peace. The punishment for this offence is imprisonment of either description for a term which may extend to one month, or with fine which may extend to one hundred rupees, or with both. This is a specific detail of the IPC that requires precise knowledge.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 160 मारामारी (affray) करण्याच्या शिक्षेची तरतूद करते. जेव्हा दोन किंवा अधिक व्यक्ती सार्वजनिक ठिकाणी भांडण करून सार्वजनिक शांतता भंग करतात, तेव्हा मारामारीचा गुन्हा घडतो. या गुन्ह्यासाठी एक महिन्यापर्यंतच्या मुदतीसाठी कोणत्याही प्रकारच्या कारावासाची किंवा शंभर रुपयांपर्यंतच्या दंडाची किंवा दोन्ही शिक्षा होऊ शकतात. हा भारतीय दंड संहितेचा एक विशिष्ट तपशील आहे ज्यासाठी अचूक माहिती असणे आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_english": "Six months/Five hundred",
        "option_marathi": "सहा महिने/पाचशे",
        "is_correct": false,
        "reason": "These are incorrect punishment limits for affray under Section 160."
      },
      {
        "option_english": "One month/One hundred",
        "option_marathi": "एक महिना/शंभर",
        "is_correct": true,
        "reason": "This option correctly states the punishment for affray as per Section 160 of the IPC: imprisonment up to one month or fine up to one hundred rupees, or both."
      },
      {
        "option_english": "Two months/Six hundred",
        "option_marathi": "दोन महिने/सहाशे",
        "is_correct": false,
        "reason": "These are incorrect punishment limits for affray under Section 160."
      },
      {
        "option_english": "One year/Five hundred",
        "option_marathi": "एक वर्ष/पाचशे",
        "is_correct": false,
        "reason": "These are incorrect punishment limits for affray under Section 160."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "भारतीय दंड संहिता 1860 च्या कलम 44 अंतर्गत \"Injury\" (\"नुकसान\") याचा अर्थ ______ याच्या बाबतीतील कोणत्याही व्यक्तीस केलेला अवैध अपाय.",
    "question_english": "According to section 44 of Indian Penal Code 1860 \"Injury\" means illegal harm caused to any person in ______",
    "options_marathi": [
      "शरीर",
      "मन",
      "मालमत्ता",
      "वरील सर्व"
    ],
    "options_english": [
      "Body",
      "Mind",
      "Property",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Indian Penal Code - General Explanations (Definitions)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Section 44 of the Indian Penal Code defines the term 'Injury'. It states that 'The word “injury” denotes any harm whatever illegally caused to any person, in body, mind, reputation or property.' This definition is broad and covers various forms of harm, not just physical. Since the options include body, mind, and property, and 'All of the above' is an option, it correctly encompasses the comprehensive definition of injury under the IPC.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 44 'नुकसान' (Injury) या शब्दाची व्याख्या करते. यात असे म्हटले आहे की, 'नुकसान' या शब्दाचा अर्थ कोणत्याही व्यक्तीला शरीर, मन, प्रतिष्ठा किंवा मालमत्तेच्या बाबतीत बेकायदेशीरपणे पोहोचवलेली कोणतीही हानी. ही व्याख्या व्यापक आहे आणि केवळ शारीरिक हानीपुरती मर्यादित नाही. पर्यायांमध्ये शरीर, मन आणि मालमत्ता यांचा समावेश असल्याने, आणि 'वरील सर्व' हा पर्याय असल्याने, तो भारतीय दंड संहितेनुसार नुकसानीच्या सर्वसमावेशक व्याख्येला योग्यरित्या समाविष्ट करतो.",
    "options_breakdown": [
      {
        "option_english": "Body",
        "option_marathi": "शरीर",
        "is_correct": true,
        "reason": "Harm to the body is explicitly included in the definition of 'injury' under Section 44."
      },
      {
        "option_english": "Mind",
        "option_marathi": "मन",
        "is_correct": true,
        "reason": "Harm to the mind (e.g., mental distress, psychological harm) is explicitly included in the definition of 'injury' under Section 44."
      },
      {
        "option_english": "Property",
        "option_marathi": "मालमत्ता",
        "is_correct": true,
        "reason": "Harm to property (e.g., damage, loss) is explicitly included in the definition of 'injury' under Section 44."
      },
      {
        "option_english": "All of the above",
        "option_marathi": "वरील सर्व",
        "is_correct": true,
        "reason": "Since 'injury' under Section 44 includes harm to body, mind, and property (and reputation), 'All of the above' is the most accurate and comprehensive answer."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "खालीलपैकी कोण हा भारतीय दंड संहिता, कलम 21 अंतर्गत 'लोकसेवक' मध्ये समाविष्ट नाही ?",
    "question_english": "Who amongst the following is not a 'public servant' within the meaning of section 21 of Indian Penal Code ?",
    "options_marathi": [
      "मंत्री",
      "राष्ट्रीयकृत बँकेचा कर्मचारी",
      "विमा सर्वेक्षण कर्ता",
      "रेल्वेगाडी विभागाचा खलाशी"
    ],
    "options_english": [
      "Minister",
      "Employee of Nationalized bank",
      "Insurance surveyor",
      "Khalasi of Railway carriage section"
    ],
    "correct_option_index": 3,
    "subject": "Law",
    "topic": "Indian Penal Code - General Explanations (Definitions of Public Servant)",
    "difficulty": "Hard",
    "trap_detected": "Nuance in definition",
    "explanation_english": "Section 21 of the Indian Penal Code defines 'Public Servant' broadly, including various categories of individuals. Ministers (Clause 7), employees of nationalized banks (as they are in the service or pay of the Government or a Government company, Clause 12), and Khalasi of Railway carriage section (being in the service or pay of the Government, Clause 12) generally fall under this definition. An Insurance surveyor, however, typically works for private insurance companies or as an independent professional. Unless specifically appointed by the government to perform a public duty in a manner that brings them under one of the clauses of Section 21, they are generally not considered 'public servants' under the IPC. Their primary role is to assess damages for insurance claims, which is a commercial function, not a public duty as defined by the IPC.",
    "explanation_marathi": "भारतीय दंड संहितेचे कलम 21 'लोकसेवक' ची व्यापक व्याख्या करते, ज्यात विविध श्रेणीतील व्यक्तींचा समावेश आहे. मंत्री (कलम 7), राष्ट्रीयकृत बँकेचे कर्मचारी (कारण ते शासनाच्या किंवा सरकारी कंपनीच्या सेवेत किंवा पगारावर असतात, कलम 12), आणि रेल्वेगाडी विभागाचा खलाशी (शासनाच्या सेवेत किंवा पगारावर असल्याने, कलम 12) सामान्यतः या व्याख्येत येतात. तथापि, विमा सर्वेक्षण कर्ता (Insurance surveyor) सामान्यतः खाजगी विमा कंपन्यांसाठी किंवा स्वतंत्र व्यावसायिक म्हणून काम करतो. जोपर्यंत त्यांना शासनाने सार्वजनिक कर्तव्य पार पाडण्यासाठी विशेषतः नियुक्त केले जात नाही आणि ते कलम 21 च्या कोणत्याही तरतुदीखाली येत नाहीत, तोपर्यंत त्यांना भारतीय दंड संहितेनुसार 'लोकसेवक' मानले जात नाही. त्यांची प्राथमिक भूमिका विमा दाव्यांसाठी नुकसानीचे मूल्यांकन करणे ही व्यावसायिक कार्य आहे, भारतीय दंड संहितेने परिभाषित केल्यानुसार सार्वजनिक कर्तव्य नाही.",
    "options_breakdown": [
      {
        "option_english": "Minister",
        "option_marathi": "मंत्री",
        "is_correct": false,
        "reason": "Ministers are considered public servants under Clause 7 of Section 21 of the IPC."
      },
      {
        "option_english": "Employee of Nationalized bank",
        "option_marathi": "राष्ट्रीयकृत बँकेचा कर्मचारी",
        "is_correct": false,
        "reason": "Employees of nationalized banks are generally considered public servants as they are in the service or pay of a Government company, falling under Clause 12 of Section 21."
      },
      {
        "option_english": "Insurance surveyor",
        "option_marathi": "विमा सर्वेक्षण कर्ता",
        "is_correct": true,
        "reason": "An insurance surveyor typically works for private entities or as an independent professional and does not generally fall under the definition of 'public servant' as per Section 21 of the IPC, unless specifically appointed by the government for a public duty."
      },
      {
        "option_english": "Khalasi of Railway carriage section",
        "option_marathi": "रेल्वेगाडी विभागाचा खलाशी",
        "is_correct": false,
        "reason": "A Khalasi in the Railway carriage section is an employee of the Railways, which is a government undertaking, and thus falls under the definition of a public servant (Clause 12 of Section 21)."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "भारतीय दंड विधान अंतर्गत खालीलपैकी कोणत्या तरतूदी मध्ये 12 वर्षाखालील महिलेवर झालेल्या सामूहिक बलात्कारासाठी शिक्षा विहित आहे ?",
    "question_english": "Under which of the following provision of Indian Penal Code the punishment for gang rape on woman under twelve years of age is prescribed ?",
    "options_marathi": [
      "कलम 376 AB",
      "कलम 376 DA",
      "कलम 376",
      "कलम 376 DB"
    ],
    "options_english": [
      "Section 376 AB",
      "Section 376 DA",
      "Section 376",
      "Section 376 DB"
    ],
    "correct_option_index": 4,
    "subject": "Law",
    "topic": "Indian Penal Code - Sexual Offences (Rape and Gang Rape)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Criminal Law (Amendment) Act, 2018, introduced several new sections and enhanced punishments for sexual offences, especially against children. Section 376DB specifically deals with the punishment for gang rape on a woman under twelve years of age. This section prescribes rigorous imprisonment for a term which shall not be less than twenty years, but which may extend to imprisonment for life, which shall mean imprisonment for the remainder of that person’s natural life, and with fine. It is distinct from Section 376AB (rape on a woman under twelve years of age by an individual) and Section 376DA (gang rape on a woman under sixteen years of age).",
    "explanation_marathi": "फौजदारी कायदा (दुरुस्ती) अधिनियम, 2018 ने लैंगिक गुन्हे, विशेषतः मुलांवरील गुन्ह्यांसाठी अनेक नवीन कलमे आणि वाढीव शिक्षा लागू केल्या. कलम 376DB विशेषतः 12 वर्षांखालील महिलेवर झालेल्या सामूहिक बलात्कारासाठी शिक्षेची तरतूद करते. हे कलम किमान वीस वर्षांच्या कठोर कारावासाची, जी जन्मठेपेपर्यंत वाढू शकते (म्हणजे त्या व्यक्तीच्या नैसर्गिक आयुष्याच्या उर्वरित काळासाठी कारावास), आणि दंडाची शिक्षा विहित करते. हे कलम 376AB (12 वर्षांखालील महिलेवर एका व्यक्तीने केलेला बलात्कार) आणि कलम 376DA (16 वर्षांखालील महिलेवर झालेला सामूहिक बलात्कार) पेक्षा वेगळे आहे.",
    "options_breakdown": [
      {
        "option_english": "Section 376 AB",
        "option_marathi": "कलम 376 AB",
        "is_correct": false,
        "reason": "Section 376AB deals with punishment for rape on a woman under twelve years of age, but it refers to individual rape, not gang rape."
      },
      {
        "option_english": "Section 376 DA",
        "option_marathi": "कलम 376 DA",
        "is_correct": false,
        "reason": "Section 376DA deals with punishment for gang rape on a woman under sixteen years of age, not specifically under twelve years of age."
      },
      {
        "option_english": "Section 376",
        "option_marathi": "कलम 376",
        "is_correct": false,
        "reason": "Section 376 is the general provision for punishment for rape, but specific sub-sections address aggravated forms like gang rape on minors with harsher penalties."
      },
      {
        "option_english": "Section 376 DB",
        "option_marathi": "कलम 376 DB",
        "is_correct": true,
        "reason": "Section 376DB specifically prescribes the punishment for gang rape on a woman under twelve years of age, introduced by the Criminal Law (Amendment) Act, 2018."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील ______ मध्ये समन्सचे प्रारूप सांगितलेले आहे.",
    "question_english": "Forms of Summons are described in ______ of code of criminal procedure, 1973.",
    "options_marathi": [
      "कलम 62",
      "कलम 61",
      "कलम 68",
      "कलम 64"
    ],
    "options_english": [
      "Section 62",
      "Section 61",
      "Section 68",
      "Section 64"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "CrPC - Summons",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 61 of the Code of Criminal Procedure, 1973, explicitly outlines the form of a summons. It mandates that every summons issued by a Court must be in writing, in duplicate, signed by the presiding officer or an authorized officer, and bear the seal of the Court. This ensures the legality and authenticity of the summons. Other sections deal with the service of summons or related procedures, but Section 61 specifically defines its form.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 च्या कलम 61 मध्ये समन्सचे स्वरूप स्पष्टपणे नमूद केले आहे. या कलमानुसार, न्यायालयाने जारी केलेले प्रत्येक समन्स लेखी, दोन प्रतींमध्ये, पीठासीन अधिकारी किंवा अधिकृत अधिकाऱ्याने स्वाक्षरी केलेले आणि न्यायालयाच्या शिक्क्यासह असणे बंधनकारक आहे. यामुळे समन्सची कायदेशीरता आणि सत्यता सुनिश्चित होते. इतर कलमे समन्स बजावण्याशी किंवा संबंधित कार्यपद्धतींशी संबंधित आहेत, परंतु कलम 61 विशेषतः त्याचे स्वरूप परिभाषित करते.",
    "options_breakdown": [
      {
        "option_text_english": "Section 62",
        "option_text_marathi": "कलम 62",
        "is_correct": false,
        "reason_english": "Section 62 deals with how summons are served, not their form.",
        "reason_marathi": "कलम 62 समन्स कसे बजावले जातात याबद्दल आहे, त्यांच्या स्वरूपाबद्दल नाही."
      },
      {
        "option_text_english": "Section 61",
        "option_text_marathi": "कलम 61",
        "is_correct": true,
        "reason_english": "Section 61 of CrPC specifically describes the form of summons.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 61 विशेषतः समन्सचे स्वरूप वर्णन करते."
      },
      {
        "option_text_english": "Section 68",
        "option_text_marathi": "कलम 68",
        "is_correct": false,
        "reason_english": "Section 68 deals with proof of service of summons when the serving officer is not present.",
        "reason_marathi": "कलम 68 समन्स बजावणाऱ्या अधिकाऱ्याच्या अनुपस्थितीत समन्स बजावल्याचा पुरावा देण्याबद्दल आहे."
      },
      {
        "option_text_english": "Section 64",
        "option_text_marathi": "कलम 64",
        "is_correct": false,
        "reason_english": "Section 64 deals with service of summons on corporate bodies and societies.",
        "reason_marathi": "कलम 64 कॉर्पोरेट संस्था आणि सोसायट्यांवर समन्स बजावण्याबद्दल आहे."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील 'अन्वेषण' व 'चौकशी' संबंधित खालील वाक्ये वाचा व उत्तर द्या.\n(i) या दोन्ही संज्ञा सारख्याच आहेत.\n(ii) या दोन्ही संज्ञा वेगवेगळ्या आहेत.\n(iii) या संज्ञा परिस्थिती व व्यक्ती सापेक्ष आहेत.\nपर्यायी उत्तरे :",
    "question_english": "Read the following statements regarding 'Investigation' and 'Inquiry' under the code of criminal procedure 1973 and answer.\n(i) Both these terms are same.\n(ii) Both these terms are different.\n(iii) These terms are subject to circumstances and persons.\nAnswer Options :",
    "options_marathi": [
      "फक्त वाक्य (i) बरोबर आहे",
      "फक्त वाक्य (ii) बरोबर आहे",
      "वाक्ये (ii) व (iii) बरोबर आहेत",
      "वाक्ये (i) व (iii) बरोबर आहेत"
    ],
    "options_english": [
      "Only statement (i) is correct",
      "Only statement (ii) is correct",
      "Statements (ii) and (iii) are correct",
      "Statements (i) and (iii) are correct"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "CrPC - Investigation vs. Inquiry",
    "difficulty": "Easy",
    "trap_detected": "Conceptual Misunderstanding",
    "explanation_english": "In the Code of Criminal Procedure, 1973, 'Investigation' and 'Inquiry' are distinct legal terms with different purposes and conducted by different authorities. Investigation (defined in Section 2(h)) is primarily concerned with the collection of evidence by a police officer or an authorized person, leading to a charge sheet or final report. Inquiry (defined in Section 2(g)) is conducted by a Magistrate or Court, preceding a trial, to ascertain the truth or falsity of certain facts or allegations. They are not the same, and while their application depends on circumstances, their core definitions and roles are fundamentally different, not merely 'relative to persons'.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 मध्ये, 'अन्वेषण' (Investigation) आणि 'चौकशी' (Inquiry) या दोन भिन्न कायदेशीर संज्ञा आहेत, ज्यांचे उद्देश आणि त्या कोणत्या अधिकाऱ्यांद्वारे केल्या जातात हे वेगळे आहे. अन्वेषण (कलम 2(h) मध्ये परिभाषित) मुख्यत्वे पोलीस अधिकारी किंवा अधिकृत व्यक्तीद्वारे पुरावे गोळा करण्याशी संबंधित आहे, ज्यामुळे आरोपपत्र किंवा अंतिम अहवाल तयार होतो. चौकशी (कलम 2(g) मध्ये परिभाषित) ही दंडाधिकारी किंवा न्यायालयाद्वारे खटल्यापूर्वी विशिष्ट तथ्ये किंवा आरोपांची सत्यता किंवा असत्यता निश्चित करण्यासाठी केली जाते. त्या सारख्या नाहीत आणि जरी त्यांचा वापर परिस्थितीवर अवलंबून असला तरी, त्यांच्या मूळ व्याख्या आणि भूमिका मूलभूतपणे भिन्न आहेत, केवळ 'व्यक्ती सापेक्ष' नाहीत.",
    "options_breakdown": [
      {
        "option_text_english": "Only statement (i) is correct",
        "option_text_marathi": "फक्त वाक्य (i) बरोबर आहे",
        "is_correct": false,
        "reason_english": "Statement (i) is incorrect. Investigation and Inquiry are distinct terms in CrPC.",
        "reason_marathi": "वाक्य (i) चुकीचे आहे. अन्वेषण आणि चौकशी या CrPC मध्ये भिन्न संज्ञा आहेत."
      },
      {
        "option_text_english": "Only statement (ii) is correct",
        "option_text_marathi": "फक्त वाक्य (ii) बरोबर आहे",
        "is_correct": true,
        "reason_english": "Statement (ii) is correct. Investigation (Sec 2(h)) and Inquiry (Sec 2(g)) are defined separately with different objectives and authorities.",
        "reason_marathi": "वाक्य (ii) बरोबर आहे. अन्वेषण (कलम 2(h)) आणि चौकशी (कलम 2(g)) वेगवेगळ्या उद्देशांनी आणि अधिकाऱ्यांद्वारे परिभाषित केल्या आहेत."
      },
      {
        "option_text_english": "Statements (ii) and (iii) are correct",
        "option_text_marathi": "वाक्ये (ii) व (iii) बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Statement (iii) is vague and not entirely accurate in defining the fundamental distinction. While their application varies, their core definitions are not 'person-relative'.",
        "reason_marathi": "वाक्य (iii) अस्पष्ट आहे आणि मूलभूत फरक परिभाषित करण्यात पूर्णपणे अचूक नाही. जरी त्यांचा वापर बदलत असला तरी, त्यांच्या मूळ व्याख्या 'व्यक्ती-सापेक्ष' नाहीत."
      },
      {
        "option_text_english": "Statements (i) and (iii) are correct",
        "option_text_marathi": "वाक्ये (i) व (iii) बरोबर आहेत",
        "is_correct": false,
        "reason_english": "Both statements (i) and (iii) are incorrect for the reasons mentioned above.",
        "reason_marathi": "वर नमूद केलेल्या कारणांमुळे दोन्ही वाक्ये (i) आणि (iii) चुकीची आहेत."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कलम 2 (x) अन्वये \"वॉरंट खटला\" म्हणजे ज्या अपराधास मृत्युची किंवा आजीवन कारावासाची अगर ______ हून अधिक मुदतीच्या कारावासाच्या शिक्षेस पात्र असलेल्या अपराधा संबंधीचा खटला होय.",
    "question_english": "According to section 2 (x) of code of criminal procedure, 1973 \"warrant case\" means a case relating to an offence punishable with death, imprisonment for life or imprisonment for a term exceeding ______",
    "options_marathi": [
      "तीन वर्षा",
      "दोन वर्षा",
      "चार वर्षा",
      "एक वर्षा"
    ],
    "options_english": [
      "three years",
      "two years",
      "four years",
      "one year"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "CrPC - Types of Cases (Warrant Case)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 2(x) of the Code of Criminal Procedure, 1973, defines a 'warrant-case' as a case relating to an offence punishable with death, imprisonment for life, or imprisonment for a term exceeding two years. This distinction is crucial as the procedure for trial in warrant cases is different and more elaborate than that for summons cases, reflecting the gravity of the potential punishment.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 च्या कलम 2(x) नुसार, 'वॉरंट खटला' म्हणजे असा गुन्हा ज्यामध्ये मृत्यूची शिक्षा, आजीवन कारावास किंवा दोन वर्षांपेक्षा जास्त मुदतीच्या कारावासाची शिक्षा होऊ शकते. हे वर्गीकरण महत्त्वाचे आहे कारण वॉरंट खटल्यांच्या सुनावणीची प्रक्रिया समन्स खटल्यांपेक्षा वेगळी आणि अधिक विस्तृत असते, जी संभाव्य शिक्षेच्या गंभीरतेला दर्शवते.",
    "options_breakdown": [
      {
        "option_text_english": "three years",
        "option_text_marathi": "तीन वर्षा",
        "is_correct": false,
        "reason_english": "This is incorrect. The specified term is two years.",
        "reason_marathi": "हे चुकीचे आहे. निर्दिष्ट मुदत दोन वर्षे आहे."
      },
      {
        "option_text_english": "two years",
        "option_text_marathi": "दोन वर्षा",
        "is_correct": true,
        "reason_english": "According to Section 2(x) of CrPC, a warrant case is for offences punishable with imprisonment exceeding two years.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेच्या कलम 2(x) नुसार, वॉरंट खटला म्हणजे दोन वर्षांपेक्षा जास्त कारावासाची शिक्षा असलेल्या गुन्ह्यांसाठी."
      },
      {
        "option_text_english": "four years",
        "option_text_marathi": "चार वर्षा",
        "is_correct": false,
        "reason_english": "This is incorrect. The specified term is two years.",
        "reason_marathi": "हे चुकीचे आहे. निर्दिष्ट मुदत दोन वर्षे आहे."
      },
      {
        "option_text_english": "one year",
        "option_text_marathi": "एक वर्षा",
        "is_correct": false,
        "reason_english": "This is incorrect. The specified term is two years.",
        "reason_marathi": "हे चुकीचे आहे. निर्दिष्ट मुदत दोन वर्षे आहे."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कलम 144-अ नुसार मिरवणूकीमध्ये शस्त्रे बाळगण्यास अथवा शस्त्रांसह सामुहिक कवायत करण्यास किंवा सामुहिक प्रशिक्षण देण्यास मनाई करण्याचा अधिकार ______ यांना सुपूर्त केलेला आहे.",
    "question_english": "Under section 144 A of the code of criminal procedure, 1973 the power to prohibit carrying of arms in procession or mass drill or mass training with arms is given to ______",
    "options_marathi": [
      "जिल्हा दंडाधिकारी",
      "न्यायदंडाधिकारी",
      "पोलीस अधिकारी",
      "जिल्हा न्यायाधिश"
    ],
    "options_english": [
      "District Magistrate",
      "Judicial Magistrate",
      "Police Officer",
      "District Judge"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "CrPC - Public Order and Tranquillity (Section 144A)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 144A of the Code of Criminal Procedure, 1973, grants the power to prohibit the carrying of arms in any procession or mass drill or mass training with arms to the District Magistrate or the Commissioner of Police. This provision is aimed at maintaining public order and preventing any potential breach of peace that might arise from such activities. The District Magistrate, being the head of the executive administration in a district, is entrusted with such powers to ensure law and order.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 च्या कलम 144A नुसार, मिरवणुकीत शस्त्रे बाळगण्यास किंवा शस्त्रांसह सामूहिक कवायत करण्यास किंवा सामूहिक प्रशिक्षण देण्यास मनाई करण्याचा अधिकार जिल्हा दंडाधिकारी किंवा पोलीस आयुक्तांना दिला आहे. सार्वजनिक सुव्यवस्था राखण्यासाठी आणि अशा कृतींमुळे उद्भवू शकणाऱ्या शांततेच्या कोणत्याही उल्लंघनास प्रतिबंध घालण्यासाठी ही तरतूद आहे. जिल्हा दंडाधिकारी, जिल्ह्याच्या कार्यकारी प्रशासनाचे प्रमुख असल्याने, कायदा व सुव्यवस्था सुनिश्चित करण्यासाठी अशा अधिकारांनी सुसज्ज आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "District Magistrate",
        "option_text_marathi": "जिल्हा दंडाधिकारी",
        "is_correct": true,
        "reason_english": "Section 144A of CrPC empowers the District Magistrate (or Commissioner of Police) to issue such prohibitions.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 144A जिल्हा दंडाधिकाऱ्याला (किंवा पोलीस आयुक्ताला) अशा मनाई आदेश जारी करण्याचे अधिकार देते."
      },
      {
        "option_text_english": "Judicial Magistrate",
        "option_text_marathi": "न्यायदंडाधिकारी",
        "is_correct": false,
        "reason_english": "Judicial Magistrates deal with judicial functions, not executive orders related to public order under Section 144A.",
        "reason_marathi": "न्यायदंडाधिकारी न्यायिक कार्ये हाताळतात, कलम 144A अंतर्गत सार्वजनिक सुव्यवस्थेशी संबंधित कार्यकारी आदेश नाहीत."
      },
      {
        "option_text_english": "Police Officer",
        "option_text_marathi": "पोलीस अधिकारी",
        "is_correct": false,
        "reason_english": "While police enforce orders, the power to issue such prohibitions under Section 144A rests with the District Magistrate or Commissioner of Police, not a general police officer.",
        "reason_marathi": "पोलीस आदेशांची अंमलबजावणी करत असले तरी, कलम 144A अंतर्गत असे मनाई आदेश जारी करण्याचा अधिकार जिल्हा दंडाधिकारी किंवा पोलीस आयुक्तांकडे असतो, सामान्य पोलीस अधिकाऱ्याकडे नाही."
      },
      {
        "option_text_english": "District Judge",
        "option_text_marathi": "जिल्हा न्यायाधिश",
        "is_correct": false,
        "reason_english": "A District Judge presides over civil and criminal courts but does not have executive powers under Section 144A.",
        "reason_marathi": "जिल्हा न्यायाधीश दिवाणी आणि फौजदारी न्यायालयांचे अध्यक्ष असतात परंतु त्यांना कलम 144A अंतर्गत कार्यकारी अधिकार नसतात."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील प्रकरण II मधील तरतुदीच्या अनुषंगाने वेगळेपण ओळखा.",
    "question_english": "Find odd man out regarding the provisions under chapter II of the code of criminal procedure, 1973.",
    "options_marathi": [
      "कलम 6",
      "कलम 11",
      "कलम 13",
      "कलम 16"
    ],
    "options_english": [
      "Section 6",
      "Section 11",
      "Section 13",
      "Section 16"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "CrPC - Constitution of Criminal Courts (Chapter II)",
    "difficulty": "Hard",
    "trap_detected": "Subtle Distinction",
    "explanation_english": "Chapter II of the Code of Criminal Procedure, 1973, deals with the 'Constitution of Criminal Courts and Offices'. While all the given sections (6, 11, 13, 16) fall within this chapter, Section 6 stands out as it provides the general classification of Criminal Courts. Sections 11, 13, and 16, on the other hand, deal with the constitution of specific types of Judicial Magistrates' Courts (Judicial Magistrates, Special Judicial Magistrates, and Metropolitan Magistrates, respectively). Thus, Section 6 is a foundational, overarching provision for the entire chapter, whereas the others detail specific court structures.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण II 'फौजदारी न्यायालये आणि कार्यालयांची रचना' याबद्दल आहे. दिलेली सर्व कलमे (6, 11, 13, 16) या प्रकरणात येतात, तरीही कलम 6 वेगळे ठरते कारण ते फौजदारी न्यायालयांचे सामान्य वर्गीकरण प्रदान करते. याउलट, कलम 11, 13 आणि 16 न्यायिक दंडाधिकाऱ्यांच्या विशिष्ट प्रकारच्या न्यायालयांच्या (न्यायिक दंडाधिकारी, विशेष न्यायिक दंडाधिकारी आणि महानगर दंडाधिकारी) रचनेशी संबंधित आहेत. अशा प्रकारे, कलम 6 हे संपूर्ण प्रकरणासाठी एक मूलभूत, व्यापक तरतूद आहे, तर इतर कलमे विशिष्ट न्यायालयांच्या रचनांचे तपशील देतात.",
    "options_breakdown": [
      {
        "option_text_english": "Section 6",
        "option_text_marathi": "कलम 6",
        "is_correct": true,
        "reason_english": "Section 6 provides the general classification of Criminal Courts, acting as an introductory and overarching provision for Chapter II. The other sections detail specific types of courts/magistrates.",
        "reason_marathi": "कलम 6 फौजदारी न्यायालयांचे सामान्य वर्गीकरण प्रदान करते, जे प्रकरण II साठी एक प्रास्ताविक आणि व्यापक तरतूद आहे. इतर कलमे विशिष्ट प्रकारच्या न्यायालयांचे/दंडाधिकाऱ्यांचे तपशील देतात."
      },
      {
        "option_text_english": "Section 11",
        "option_text_marathi": "कलम 11",
        "is_correct": false,
        "reason_english": "Section 11 deals with the constitution of Courts of Judicial Magistrates, a specific type of court within the general classification.",
        "reason_marathi": "कलम 11 न्यायिक दंडाधिकाऱ्यांच्या न्यायालयांच्या रचनेशी संबंधित आहे, जे सामान्य वर्गीकरणातील एक विशिष्ट प्रकारचे न्यायालय आहे."
      },
      {
        "option_text_english": "Section 13",
        "option_text_marathi": "कलम 13",
        "is_correct": false,
        "reason_english": "Section 13 deals with the appointment of Special Judicial Magistrates, a specific type of magistrate.",
        "reason_marathi": "कलम 13 विशेष न्यायिक दंडाधिकाऱ्यांच्या नियुक्तीशी संबंधित आहे, जो एक विशिष्ट प्रकारचा दंडाधिकारी आहे."
      },
      {
        "option_text_english": "Section 16",
        "option_text_marathi": "कलम 16",
        "is_correct": false,
        "reason_english": "Section 16 deals with the constitution of Courts of Metropolitan Magistrates, another specific type of court.",
        "reason_marathi": "कलम 16 महानगर दंडाधिकाऱ्यांच्या न्यायालयांच्या रचनेशी संबंधित आहे, जो आणखी एक विशिष्ट प्रकारचा न्यायालय आहे."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कलम ______ मध्ये सराईत गुन्हेगाराकडून चांगल्या वर्तणुकी संदर्भात घ्यावयाच्या बंधपत्रा संदर्भातली प्रक्रिया दिलेली आहे.",
    "question_english": "Under section ______ of the code of criminal procedure, 1973, the procedure for security for good behaviour from habitual offenders is given.",
    "options_marathi": [
      "कलम 106",
      "कलम 108",
      "कलम 109",
      "कलम 110"
    ],
    "options_english": [
      "Section 106",
      "Section 108",
      "Section 109",
      "Section 110"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "CrPC - Security for Good Behaviour",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Chapter VIII of the Code of Criminal Procedure, 1973, deals with 'Security for keeping the peace and for good behaviour'. Specifically, Section 110 outlines the procedure for requiring security for good behaviour from habitual offenders. This provision allows an Executive Magistrate to require a person who is by habit a robber, house-breaker, thief, or receiver of stolen property, or who habitually commits or attempts to commit or abets the commission of certain offences, to execute a bond for good behaviour.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण VIII 'शांतता राखण्यासाठी आणि चांगल्या वर्तणुकीसाठी सुरक्षा' याबद्दल आहे. विशेषतः, कलम 110 मध्ये सराईत गुन्हेगारांकडून चांगल्या वर्तणुकीसाठी बंधपत्र घेण्याची प्रक्रिया दिली आहे. ही तरतूद कार्यकारी दंडाधिकाऱ्याला अशा व्यक्तीकडून बंधपत्र घेण्यास परवानगी देते जो सवयीने दरोडेखोर, घरफोडी करणारा, चोर किंवा चोरीच्या मालमत्तेचा स्वीकार करणारा आहे, किंवा जो सवयीने विशिष्ट गुन्हे करतो, करण्याचा प्रयत्न करतो किंवा करण्यास मदत करतो.",
    "options_breakdown": [
      {
        "option_text_english": "Section 106",
        "option_text_marathi": "कलम 106",
        "is_correct": false,
        "reason_english": "Section 106 deals with security for keeping the peace on conviction.",
        "reason_marathi": "कलम 106 शिक्षेवर शांतता राखण्यासाठी सुरक्षा देण्याबद्दल आहे."
      },
      {
        "option_text_english": "Section 108",
        "option_text_marathi": "कलम 108",
        "is_correct": false,
        "reason_english": "Section 108 deals with security for good behaviour from persons disseminating seditious matters.",
        "reason_marathi": "कलम 108 राजद्रोही बाबी पसरवणाऱ्या व्यक्तींकडून चांगल्या वर्तणुकीसाठी सुरक्षा देण्याबद्दल आहे."
      },
      {
        "option_text_english": "Section 109",
        "option_text_marathi": "कलम 109",
        "is_correct": false,
        "reason_english": "Section 109 deals with security for good behaviour from suspected persons.",
        "reason_marathi": "कलम 109 संशयित व्यक्तींकडून चांगल्या वर्तणुकीसाठी सुरक्षा देण्याबद्दल आहे."
      },
      {
        "option_text_english": "Section 110",
        "option_text_marathi": "कलम 110",
        "is_correct": true,
        "reason_english": "Section 110 of CrPC specifically provides for security for good behaviour from habitual offenders.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 110 विशेषतः सराईत गुन्हेगारांकडून चांगल्या वर्तणुकीसाठी सुरक्षा देण्याबद्दल आहे."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कलम ______ मध्ये फरार व्यक्तीं बद्दलची घोषणा करण्यासंबंधित प्रक्रिया दिलेली आहे.",
    "question_english": "Under section ______ of the code of criminal procedure 1973, the procedure regarding proclamation for person absconding is given.",
    "options_marathi": [
      "कलम 82",
      "कलम 83",
      "कलम 84",
      "कलम 86"
    ],
    "options_english": [
      "Section 82",
      "Section 83",
      "Section 84",
      "Section 86"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "CrPC - Processes to Compel Appearance (Proclamation)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "Chapter VI of the Code of Criminal Procedure, 1973, deals with 'Processes to compel appearance'. Section 82 specifically lays down the procedure for issuing a proclamation for persons absconding. If a Court has reason to believe that any person against whom a warrant has been issued has absconded or is concealing himself so that such warrant cannot be executed, the Court may publish a written proclamation requiring him to appear at a specified place and time.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण VI 'उपस्थिती सक्ती करण्यासाठी प्रक्रिया' याबद्दल आहे. कलम 82 विशेषतः फरार व्यक्तींसाठी घोषणा जारी करण्याची प्रक्रिया नमूद करते. जर न्यायालयाला असे वाटले की ज्या व्यक्तीविरुद्ध वॉरंट जारी केले आहे ती व्यक्ती फरार झाली आहे किंवा स्वतःला लपवत आहे ज्यामुळे वॉरंट बजावता येत नाही, तर न्यायालय त्या व्यक्तीला विशिष्ट ठिकाणी आणि वेळी हजर राहण्याची मागणी करणारी लेखी घोषणा प्रकाशित करू शकते.",
    "options_breakdown": [
      {
        "option_text_english": "Section 82",
        "option_text_marathi": "कलम 82",
        "is_correct": true,
        "reason_english": "Section 82 of CrPC deals with the proclamation for persons absconding.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 82 फरार व्यक्तींसाठी घोषणा करण्याबद्दल आहे."
      },
      {
        "option_text_english": "Section 83",
        "option_text_marathi": "कलम 83",
        "is_correct": false,
        "reason_english": "Section 83 deals with the attachment of property of a person absconding, which follows a proclamation.",
        "reason_marathi": "कलम 83 फरार व्यक्तीच्या मालमत्तेची जप्ती करण्याबद्दल आहे, जे घोषणेनंतर येते."
      },
      {
        "option_text_english": "Section 84",
        "option_text_marathi": "कलम 84",
        "is_correct": false,
        "reason_english": "Section 84 deals with claims and objections to the attachment of property.",
        "reason_marathi": "कलम 84 मालमत्तेच्या जप्तीवरील दावे आणि आक्षेपांबद्दल आहे."
      },
      {
        "option_text_english": "Section 86",
        "option_text_marathi": "कलम 86",
        "is_correct": false,
        "reason_english": "Section 86 deals with appeals from orders rejecting applications for restoration of attached property.",
        "reason_marathi": "कलम 86 जप्त केलेल्या मालमत्तेच्या पुनर्स्थापनेसाठी अर्ज नाकारणाऱ्या आदेशांवरील अपीलांबद्दल आहे."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील कलम 43 मध्ये खालीलपैकी कोणती तरतूद आहे ?",
    "question_english": "The section 43 of the code of criminal procedure, 1973 provides for which of the following ?",
    "options_marathi": [
      "पोलीस वॉरंटशिवाय केंव्हा अटक करू शकतील",
      "दंडाधिकाऱ्याकडून अटक",
      "अटक कशी करायची",
      "खाजगी व्यक्तीकडून अटक आणि अशी अटक झाल्यावरची कार्यपद्धती"
    ],
    "options_english": [
      "When police may arrest without warrant",
      "Arrest by Magistrate",
      "How to make arrest",
      "Arrest by private person and procedure on such arrest"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "CrPC - Arrest of Persons",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Chapter V of the Code of Criminal Procedure, 1973, deals with the 'Arrest of Persons'. Section 43 specifically empowers a private person to arrest any person who in his presence commits a non-bailable and cognizable offence, or any proclaimed offender. It also lays down the procedure to be followed after such an arrest, requiring the private person to hand over the arrested individual to a police officer without unnecessary delay.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण V 'व्यक्तींना अटक' याबद्दल आहे. कलम 43 विशेषतः खाजगी व्यक्तीला तिच्या उपस्थितीत अजामीनपात्र आणि दखलपात्र गुन्हा करणाऱ्या कोणत्याही व्यक्तीला किंवा कोणत्याही घोषित गुन्हेगाराला अटक करण्याचा अधिकार देते. तसेच, अशा अटकेनंतर पाळल्या जाणाऱ्या कार्यपद्धतीची देखील यात तरतूद आहे, ज्यामध्ये खाजगी व्यक्तीने अटक केलेल्या व्यक्तीला अनावश्यक विलंब न करता पोलीस अधिकाऱ्याकडे सोपवणे आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_text_english": "When police may arrest without warrant",
        "option_text_marathi": "पोलीस वॉरंटशिवाय केंव्हा अटक करू शकतील",
        "is_correct": false,
        "reason_english": "This provision is covered under Section 41 of CrPC.",
        "reason_marathi": "ही तरतूद फौजदारी प्रक्रिया संहितेच्या कलम 41 अंतर्गत येते."
      },
      {
        "option_text_english": "Arrest by Magistrate",
        "option_text_marathi": "दंडाधिकाऱ्याकडून अटक",
        "is_correct": false,
        "reason_english": "This provision is covered under Section 44 of CrPC.",
        "reason_marathi": "ही तरतूद फौजदारी प्रक्रिया संहितेच्या कलम 44 अंतर्गत येते."
      },
      {
        "option_text_english": "How to make arrest",
        "option_text_marathi": "अटक कशी करायची",
        "is_correct": false,
        "reason_english": "This provision is covered under Section 46 of CrPC.",
        "reason_marathi": "ही तरतूद फौजदारी प्रक्रिया संहितेच्या कलम 46 अंतर्गत येते."
      },
      {
        "option_text_english": "Arrest by private person and procedure on such arrest",
        "option_text_marathi": "खाजगी व्यक्तीकडून अटक आणि अशी अटक झाल्यावरची कार्यपद्धती",
        "is_correct": true,
        "reason_english": "Section 43 of CrPC specifically deals with arrest by a private person and the subsequent procedure.",
        "reason_marathi": "फौजदारी प्रक्रिया संहितेचे कलम 43 विशेषतः खाजगी व्यक्तीकडून अटक आणि त्यानंतरच्या कार्यपद्धतीशी संबंधित आहे."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "फौजदारी प्रक्रिया संहितेतील कलम 164 - A(6) नुसार बलात्कार झालेल्या व्यक्तीच्या वैद्यकीय तपासणीच्या केसमध्ये नोंदणीकृत वैद्यक व्यवसायीने सदरचा अहवाल विनाविलंब अन्वेषण अधिकाऱ्याकडे पाठविला पाहिजे आणि त्याने तो ______ मध्ये निर्दिष्ट करण्यात आलेल्या दंडाधिकाऱ्याकडे त्या कलमाच्या पोटकलम (5) च्या खंड (a) मध्ये निर्दिष्ट केलेले दस्तऐवज म्हणून अग्रेषित केला पाहिजे.",
    "question_english": "According to section 164 - A(6) of code of criminal procedure in case of medical examination of the victim of rape, the registered medical practitioner shall, without delay, forward the report to the investigation officer who shall forward it to the Magistrate referred to in ______ as part of the documents referred to in clause (a) of sub-section (5) of that section.",
    "options_marathi": [
      "कलम 137",
      "कलम 165",
      "कलम 173",
      "कलम 169"
    ],
    "options_english": [
      "Section 137",
      "Section 165",
      "Section 173",
      "Section 169"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "CrPC - Medical Examination of Rape Victim",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Section 164A of the Code of Criminal Procedure, 1973, deals with the medical examination of a victim of rape. Sub-section (6) of Section 164A mandates that the registered medical practitioner must forward the medical report to the investigating officer without delay. The investigating officer, in turn, must forward this report to the Magistrate referred to in Section 173. Section 173 deals with the police report (charge-sheet) submitted to the Magistrate after the completion of the investigation, and the medical report forms a crucial part of the documents accompanying this report.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे कलम 164A बलात्कार पीडितेच्या वैद्यकीय तपासणीशी संबंधित आहे. कलम 164A च्या पोटकलम (6) नुसार, नोंदणीकृत वैद्यकीय व्यावसायिकाने वैद्यकीय अहवाल विनाविलंब अन्वेषण अधिकाऱ्याकडे पाठवणे बंधनकारक आहे. अन्वेषण अधिकाऱ्याने हा अहवाल कलम 173 मध्ये नमूद केलेल्या दंडाधिकाऱ्याकडे अग्रेषित करणे आवश्यक आहे. कलम 173 अन्वेषण पूर्ण झाल्यानंतर दंडाधिकाऱ्याकडे सादर केलेल्या पोलीस अहवालाशी (आरोपपत्र) संबंधित आहे आणि वैद्यकीय अहवाल या अहवालासोबतच्या दस्तऐवजांचा एक महत्त्वाचा भाग असतो.",
    "options_breakdown": [
      {
        "option_text_english": "Section 137",
        "option_text_marathi": "कलम 137",
        "is_correct": false,
        "reason_english": "Section 137 deals with procedure where public way, etc., is obstructed, which is unrelated.",
        "reason_marathi": "कलम 137 सार्वजनिक मार्ग इत्यादी अडवल्यास कार्यपद्धतीशी संबंधित आहे, जे असंबद्ध आहे."
      },
      {
        "option_text_english": "Section 165",
        "option_text_marathi": "कलम 165",
        "is_correct": false,
        "reason_english": "Section 165 deals with search by police officer, which is unrelated.",
        "reason_marathi": "कलम 165 पोलीस अधिकाऱ्याद्वारे झडती घेण्याबद्दल आहे, जे असंबद्ध आहे."
      },
      {
        "option_text_english": "Section 173",
        "option_text_marathi": "कलम 173",
        "is_correct": true,
        "reason_english": "Section 164A(6) explicitly states that the report is forwarded to the Magistrate referred to in Section 173 (police report).",
        "reason_marathi": "कलम 164A(6) स्पष्टपणे सांगते की अहवाल कलम 173 (पोलीस अहवाल) मध्ये नमूद केलेल्या दंडाधिकाऱ्याकडे पाठवला जातो."
      },
      {
        "option_text_english": "Section 169",
        "option_text_marathi": "कलम 169",
        "is_correct": false,
        "reason_english": "Section 169 deals with release of accused when evidence is deficient, which is unrelated.",
        "reason_marathi": "कलम 169 पुरावा अपुरा असल्यास आरोपीला सोडण्याबद्दल आहे, जे असंबद्ध आहे."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "फौजदारी प्रक्रिया संहिता 1973 मधील तरतुदीनुसार जोड्या लावा.\nकलम\n(a) 36\n(b) 37\n(c) 38\n(d) 39\nतरतूद\n(i) दंडाधिकाऱ्यांना व पोलिसांना जनतेने केंव्हा सहाय्य करावयाचे\n(ii) विवक्षित अपराधांची जनतेने वर्दी देणे\n(iii) वरिष्ठ पोलीस अधिकाऱ्यांचे अधिकार\n(iv) पोलीस अधिकाऱ्यांखेरीज अन्य अशा वॉरंट बजावणाऱ्या व्यक्तीला मदत\nपर्यायी उत्तरे :\n(a) (b) (c) (d)\n(1) (ii) (iii) (iv) (i)\n(2) (iii) (i) (iv) (ii)\n(3) (ii) (iv) (i) (iii)\n(4) (iii) (i) (ii) (iv)",
    "question_english": "Match the following regarding the provisions of the criminal procedure code, 1973:\nSection\n(a) 36\n(b) 37\n(c) 38\n(d) 39\nProvision\n(i) Public when to assist Magistrates and Police\n(ii) Public to give information of certain offences\n(iii) Powers of superior officers of police\n(iv) Aid to person, other than police officer, executing warrant\nAnswer options :\n(a) (b) (c) (d)\n(1) (ii) (iii) (iv) (i)\n(2) (iii) (i) (iv) (ii)\n(3) (ii) (iv) (i) (iii)\n(4) (iii) (i) (ii) (iv)",
    "options_marathi": [
      "(ii) (iii) (iv) (i)",
      "(iii) (i) (iv) (ii)",
      "(ii) (iv) (i) (iii)",
      "(iii) (i) (ii) (iv)"
    ],
    "options_english": [
      "(ii) (iii) (iv) (i)",
      "(iii) (i) (iv) (ii)",
      "(ii) (iv) (i) (iii)",
      "(iii) (i) (ii) (iv)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "CrPC - Powers of Police and Public Aid",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Chapter IV of the Code of Criminal Procedure, 1973, deals with 'Powers of Superior Officers of Police and Aid to the Public'. This matching question tests the knowledge of specific provisions within this chapter. Section 36 grants powers to superior officers of police. Section 37 outlines when the public is required to assist Magistrates and police. Section 38 specifies aid to persons, other than police officers, executing warrants. Finally, Section 39 mandates the public to give information of certain offences. Correctly matching these provisions is essential for understanding the roles and responsibilities defined in CrPC.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, 1973 चे प्रकरण IV 'वरिष्ठ पोलीस अधिकाऱ्यांचे अधिकार आणि जनतेला मदत' याबद्दल आहे. हा जुळवाजुळवीचा प्रश्न या प्रकरणातील विशिष्ट तरतुदींच्या ज्ञानाची चाचणी घेतो. कलम 36 वरिष्ठ पोलीस अधिकाऱ्यांना अधिकार प्रदान करते. कलम 37 जनतेने दंडाधिकारी आणि पोलिसांना कधी मदत करावी हे स्पष्ट करते. कलम 38 पोलीस अधिकाऱ्यांव्यतिरिक्त वॉरंट बजावणाऱ्या व्यक्तींना मदतीची तरतूद करते. आणि कलम 39 जनतेने विशिष्ट गुन्ह्यांची माहिती देणे बंधनकारक करते. CrPC मध्ये परिभाषित भूमिका आणि जबाबदाऱ्या समजून घेण्यासाठी या तरतुदी योग्यरित्या जुळवणे आवश्यक आहे.",
    "options_breakdown": [
      {
        "option_text_english": "(ii) (iii) (iv) (i)",
        "option_text_marathi": "(ii) (iii) (iv) (i)",
        "is_correct": false,
        "reason_english": "This option has incorrect matches for (a) and (b).",
        "reason_marathi": "या पर्यायामध्ये (a) आणि (b) साठी चुकीचे जुळणी आहे."
      },
      {
        "option_text_english": "(iii) (i) (iv) (ii)",
        "option_text_marathi": "(iii) (i) (iv) (ii)",
        "is_correct": true,
        "reason_english": "This option correctly matches Section 36 with (iii), Section 37 with (i), Section 38 with (iv), and Section 39 with (ii).",
        "reason_marathi": "हा पर्याय कलम 36 ला (iii) शी, कलम 37 ला (i) शी, कलम 38 ला (iv) शी आणि कलम 39 ला (ii) शी योग्यरित्या जुळवतो."
      },
      {
        "option_text_english": "(ii) (iv) (i) (iii)",
        "option_text_marathi": "(ii) (iv) (i) (iii)",
        "is_correct": false,
        "reason_english": "This option has incorrect matches for (a), (b), and (d).",
        "reason_marathi": "या पर्यायामध्ये (a), (b) आणि (d) साठी चुकीचे जुळणी आहे."
      },
      {
        "option_text_english": "(iii) (i) (ii) (iv)",
        "option_text_marathi": "(iii) (i) (ii) (iv)",
        "is_correct": false,
        "reason_english": "This option has incorrect matches for (c) and (d).",
        "reason_marathi": "या पर्यायामध्ये (c) आणि (d) साठी चुकीचे जुळणी आहे."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "ज्या व्यक्तींना दाव्यातील पक्षकाराने विवादीत प्रकरणाच्या संदर्भात माहितीसाठी स्पष्टपणे संदर्भित केले असेल अशा व्यक्तींनी केलेले विधाने ______ असतात, तसे भारतीय पुरावा कायद्याच्या कलम ______ मध्ये नमूद आहे.",
    "question_english": "Statements made by persons to whom a party to the suit has expressly referred for information in reference to a matter in dispute are ______ as per section ______ of Indian Evidence Act.",
    "options_marathi": [
      "कबुली/कलम 20",
      "गुन्ह्याची कबुली/कलम 115",
      "मते/कलम 165",
      "प्रतिबंधक कबुली/कलम 22"
    ],
    "options_english": [
      "Admission/Section 20",
      "Confessions/Section 115",
      "Opinions/Section 165",
      "Estoppels/Section 22"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Admissions",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 20 of the Indian Evidence Act, 1872, deals with statements made by persons expressly referred to by a party to the suit. Such statements are considered admissions if they relate to a matter in dispute. This is a specific type of admission where a party points to another person for information, thereby making that person's statement relevant as an admission against the referring party.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम २० नुसार, ज्या व्यक्तींना दाव्यातील पक्षकाराने विवादीत प्रकरणाच्या संदर्भात माहितीसाठी स्पष्टपणे संदर्भित केले असेल, अशा व्यक्तींनी केलेली विधाने 'कबुली' (Admission) मानली जातात. ही एक विशिष्ट प्रकारची कबुली आहे जिथे एक पक्षकार माहितीसाठी दुसऱ्या व्यक्तीकडे निर्देश करतो, ज्यामुळे त्या व्यक्तीचे विधान संदर्भित करणाऱ्या पक्षकाराविरुद्ध पुरावा म्हणून ग्राह्य धरले जाते.",
    "options_breakdown": [
      {
        "option_english": "Admission/Section 20",
        "option_marathi": "कबुली/कलम 20",
        "is_correct": true,
        "reason": "This option correctly identifies the statements as 'Admission' and cites the relevant Section 20 of the Indian Evidence Act, which specifically covers statements by persons expressly referred to by a party."
      },
      {
        "option_english": "Confessions/Section 115",
        "option_marathi": "गुन्ह्याची कबुली/कलम 115",
        "is_correct": false,
        "reason": "Confessions are a type of admission but specifically relate to criminal matters. Section 115 deals with estoppel, not confessions or statements by referred persons."
      },
      {
        "option_english": "Opinions/Section 165",
        "option_marathi": "मते/कलम 165",
        "is_correct": false,
        "reason": "Opinions are distinct from admissions. Section 165 deals with the judge's power to put questions or order production, not the relevancy of statements by referred persons."
      },
      {
        "option_english": "Estoppels/Section 22",
        "option_marathi": "प्रतिबंधक कबुली/कलम 22",
        "is_correct": false,
        "reason": "Estoppel prevents a person from denying a fact previously asserted. Section 22 deals with oral admissions as to the contents of documents, not statements by referred persons."
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 मधील कलम ______ नुसार वादतथ्यांचा व संबद्ध तथ्यांचा पुरावा देता येईल.",
    "question_english": "As per section ______ of the Indian Evidence Act, 1872 the evidence may be given of facts in issue and relevant facts.",
    "options_marathi": [
      "कलम 3",
      "कलम 4",
      "कलम 5",
      "कलम 6"
    ],
    "options_english": [
      "Section 3",
      "Section 4",
      "Section 5",
      "Section 6"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Relevancy of Facts",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 5 of the Indian Evidence Act, 1872, is a foundational provision that states that evidence may be given in any suit or proceeding of the existence or non-existence of every fact in issue and of such other facts as are declared to be relevant under the Act, and of no others. This section limits the scope of evidence to facts in issue and relevant facts.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम ५ नुसार, कोणत्याही दाव्यामध्ये किंवा कार्यवाहीमध्ये, वादातील तथ्यांच्या आणि कायद्यानुसार संबंधित घोषित केलेल्या इतर तथ्यांच्या अस्तित्वाचा किंवा अस्तित्वाचा नसण्याचा पुरावा दिला जाऊ शकतो, आणि इतर कोणत्याही तथ्याचा नाही. हे कलम पुराव्याची व्याप्ती वादातील तथ्ये आणि संबंधित तथ्यांपर्यंत मर्यादित करते.",
    "options_breakdown": [
      {
        "option_english": "Section 3",
        "option_marathi": "कलम 3",
        "is_correct": false,
        "reason": "Section 3 defines various terms like 'Court', 'Fact', 'Relevant', 'Fact in issue', 'Document', 'Evidence', 'Proved', 'Disproved', 'Not proved'."
      },
      {
        "option_english": "Section 4",
        "option_marathi": "कलम 4",
        "is_correct": false,
        "reason": "Section 4 deals with 'May Presume', 'Shall Presume', and 'Conclusive Proof'."
      },
      {
        "option_english": "Section 5",
        "option_marathi": "कलम 5",
        "is_correct": true,
        "reason": "Section 5 explicitly states that evidence can be given only of facts in issue and relevant facts, which is the core principle of admissibility of evidence."
      },
      {
        "option_english": "Section 6",
        "option_marathi": "कलम 6",
        "is_correct": false,
        "reason": "Section 6 deals with the relevancy of facts forming part of the same transaction (Res Gestae)."
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 मधील कलम ______ मध्ये प्रमुख पुराव्याची तरतूद दिलेली आहे.",
    "question_english": "Under section ______ of the Indian Evidence Act, 1872 the provision regarding primary evidence is given.",
    "options_marathi": [
      "कलम 61",
      "कलम 62",
      "कलम 63",
      "कलम 64"
    ],
    "options_english": [
      "Section 61",
      "Section 62",
      "Section 63",
      "Section 64"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Documentary Evidence (Primary Evidence)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 62 of the Indian Evidence Act, 1872, defines 'Primary Evidence'. It states that primary evidence means the document itself produced for the inspection of the Court. This is considered the best evidence of a document.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम ६२ नुसार, 'प्रमुख पुरावा' (Primary Evidence) ची तरतूद दिली आहे. या कलमानुसार, प्रमुख पुरावा म्हणजे न्यायालयाच्या तपासणीसाठी सादर केलेला मूळ दस्तऐवज. हा दस्तऐवजाचा सर्वोत्तम पुरावा मानला जातो.",
    "options_breakdown": [
      {
        "option_english": "Section 61",
        "option_marathi": "कलम 61",
        "is_correct": false,
        "reason": "Section 61 states that the contents of documents may be proved either by primary or by secondary evidence. It does not define primary evidence itself."
      },
      {
        "option_english": "Section 62",
        "option_marathi": "कलम 62",
        "is_correct": true,
        "reason": "Section 62 specifically defines what constitutes 'Primary Evidence' under the Act."
      },
      {
        "option_english": "Section 63",
        "option_marathi": "कलम 63",
        "is_correct": false,
        "reason": "Section 63 defines 'Secondary Evidence', which is distinct from primary evidence."
      },
      {
        "option_english": "Section 64",
        "option_marathi": "कलम 64",
        "is_correct": false,
        "reason": "Section 64 states that documents must be proved by primary evidence, except in cases mentioned in the Act. It deals with the rule of proof, not the definition of primary evidence."
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "भारतीय पुरावा अधिनियम नुसार एखादी व्यक्ती अशा प्रकारे प्रश्न टाकते जिथे त्याला सुचवलेले उत्तर मिळावे अशी त्याची इच्छा असते किंवा अपेक्षा असते, त्यास ______ प्रश्न म्हणतात असे कलम ______ मध्ये नमूद आहे.",
    "question_english": "Any question suggesting the answer which the person putting it wishes or expects to receive is called a ______ as per section ______ of Indian Evidence Act.",
    "options_marathi": [
      "अपेक्षित प्रश्न/140",
      "अग्रगण्य प्रश्न/141",
      "दिशाभूल करणारा प्रश्न/150",
      "वगळलेल प्रश्न/116"
    ],
    "options_english": [
      "Expected question/140",
      "Leading question/141",
      "Misleading question/150",
      "Exempted question/116"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Examination of Witnesses (Leading Questions)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 141 of the Indian Evidence Act, 1872, defines a 'leading question'. It states that any question suggesting the answer which the person putting it wishes or expects to receive is called a leading question. Such questions are generally not allowed in examination-in-chief but may be permitted in cross-examination.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम १४१ नुसार, 'अग्रगण्य प्रश्न' (Leading question) ची व्याख्या दिली आहे. या कलमानुसार, जो प्रश्न विचारणारी व्यक्ती अपेक्षित उत्तर सुचवते किंवा मिळवू इच्छिते, त्याला अग्रगण्य प्रश्न म्हणतात. असे प्रश्न सामान्यतः मुख्य तपासणीत (examination-in-chief) विचारण्याची परवानगी नसते, परंतु उलट तपासणीत (cross-examination) त्यांना परवानगी दिली जाऊ शकते.",
    "options_breakdown": [
      {
        "option_english": "Expected question/140",
        "option_marathi": "अपेक्षित प्रश्न/140",
        "is_correct": false,
        "reason": "Section 140 deals with witnesses to character. 'Expected question' is not the legal term defined for a question suggesting an answer."
      },
      {
        "option_english": "Leading question/141",
        "option_marathi": "अग्रगण्य प्रश्न/141",
        "is_correct": true,
        "reason": "This option correctly identifies the term as 'Leading question' and cites the precise Section 141 of the Indian Evidence Act, which defines it."
      },
      {
        "option_english": "Misleading question/150",
        "option_marathi": "दिशाभूल करणारा प्रश्न/150",
        "is_correct": false,
        "reason": "Section 150 deals with the procedure of the court in case of questions being asked without reasonable grounds. 'Misleading question' is not the defined term for suggesting an answer."
      },
      {
        "option_english": "Exempted question/116",
        "option_marathi": "वगळलेल प्रश्न/116",
        "is_correct": false,
        "reason": "Section 116 deals with estoppel of tenant and of licensee of person in possession. 'Exempted question' is not a legal term in this context."
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 च्या तरतुदींनुसार कोर्टाच्या व्याख्येमध्ये कशाचा अंतर्भाव होत नाही ?",
    "question_english": "Who is not included within the definition of \"Court\" according to the provisions of \"The Indian Evidence Act 1872\"?",
    "options_marathi": [
      "एखादी व्यक्ति जिला कायद्याने पुरावा घेण्याचे अधिकार दिले आहेत",
      "विशेष कार्यकारी दंडाधिकारी",
      "लवाद",
      "जिल्हा न्यायाधिश"
    ],
    "options_english": [
      "Person legally authorised to take evidence",
      "Special executive magistrate",
      "Arbitrator",
      "District Judge"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Definition of Court",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 3 of the Indian Evidence Act, 1872, defines 'Court' to include all Judges and Magistrates, and all persons, except arbitrators, legally authorized to take evidence. Therefore, an arbitrator is explicitly excluded from the definition of 'Court' under this Act.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम ३ नुसार, 'न्यायालय' (Court) या व्याख्येमध्ये सर्व न्यायाधीश आणि दंडाधिकारी, तसेच पुरावा घेण्यास कायदेशीररित्या अधिकृत असलेले सर्व व्यक्ती, परंतु लवाद (arbitrators) वगळून, यांचा समावेश होतो. त्यामुळे, या कायद्यानुसार 'लवाद' हे न्यायालयाच्या व्याख्येत समाविष्ट नाहीत.",
    "options_breakdown": [
      {
        "option_english": "Person legally authorised to take evidence",
        "option_marathi": "एखादी व्यक्ति जिला कायद्याने पुरावा घेण्याचे अधिकार दिले आहेत",
        "is_correct": false,
        "reason": "Persons legally authorized to take evidence are explicitly included in the definition of 'Court' under Section 3."
      },
      {
        "option_english": "Special executive magistrate",
        "option_marathi": "विशेष कार्यकारी दंडाधिकारी",
        "is_correct": false,
        "reason": "Magistrates (including special executive magistrates) are included in the definition of 'Court' under Section 3."
      },
      {
        "option_english": "Arbitrator",
        "option_marathi": "लवाद",
        "is_correct": true,
        "reason": "Arbitrators are explicitly excluded from the definition of 'Court' as per Section 3 of the Indian Evidence Act, 1872."
      },
      {
        "option_english": "District Judge",
        "option_marathi": "जिल्हा न्यायाधिश",
        "is_correct": false,
        "reason": "Judges (including District Judges) are explicitly included in the definition of 'Court' under Section 3."
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "बलात्काराच्या काही खटल्यांमध्ये संमती नसल्याचा गृहीतक भारतीय पुरावा कायद्याचा कलम ______ अंतर्गत हाताळला जातो.",
    "question_english": "Presumption as to absence of consent in certain prosecution for rape is dealt under section ______ of Indian Evidence Act.",
    "options_marathi": [
      "113 - अ",
      "113 - ब",
      "114",
      "114 - अ"
    ],
    "options_english": [
      "113 - A",
      "113 - B",
      "114",
      "114 - A"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Presumptions (Rape Cases)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 114A of the Indian Evidence Act, 1872, deals with the presumption as to absence of consent in certain prosecutions for rape. It states that in a prosecution for rape, where sexual intercourse by the accused is proved and the question is whether it was without the consent of the woman, and she states in her evidence that she did not consent, the court shall presume that she did not consent.",
    "explanation_marathi": "भारतीय पुरावा अधिनियम, १८७२ च्या कलम ११४-अ नुसार, बलात्काराच्या काही खटल्यांमध्ये संमती नसल्याचा गृहीतक हाताळला जातो. या कलमानुसार, बलात्काराच्या खटल्यात, जर आरोपीने लैंगिक संबंध ठेवल्याचे सिद्ध झाले आणि प्रश्न असा असेल की ते स्त्रीच्या संमतीशिवाय होते का, आणि स्त्रीने तिच्या पुराव्यात संमती दिली नसल्याचे सांगितले, तर न्यायालय असे गृहीत धरेल की तिने संमती दिली नव्हती.",
    "options_breakdown": [
      {
        "option_english": "113 - A",
        "option_marathi": "113 - अ",
        "is_correct": false,
        "reason": "Section 113A deals with presumption as to abetment of suicide by a married woman."
      },
      {
        "option_english": "113 - B",
        "option_marathi": "113 - ब",
        "is_correct": false,
        "reason": "Section 113B deals with presumption as to dowry death."
      },
      {
        "option_english": "114",
        "option_marathi": "114",
        "is_correct": false,
        "reason": "Section 114 deals with the general power of the Court to presume the existence of certain facts, but not specifically absence of consent in rape cases."
      },
      {
        "option_english": "114 - A",
        "option_marathi": "114 - अ",
        "is_correct": true,
        "reason": "Section 114A specifically provides for the presumption as to absence of consent in certain prosecutions for rape."
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "भारतीय पुरावा अधिनियमा संदर्भात खालील विधानांचे परिक्षण करा :\n(a) जर विरुद्ध पक्षाने हरकत घेतली तर कोर्टाच्या परवानगीशिवाय सूचक प्रश्न विचारु नये.\n(b) एखादे तथ्य शाबीत करण्यासाठी कमीत कमी दोन साक्षीदार लागतात.\nयोग्य उत्तर निवडा :",
    "question_english": "Examine following statements in relation to Indian Evidence Act\n(a) leading question must not be asked if objected by the other party except with the permission of the court.\n(b) for the proof of any fact minimum no. of witnesses required are two.\nChoose the correct answer :",
    "options_marathi": [
      "(a) बरोबर असून (b) चूक आहे",
      "(a) चूक असून (b) बरोबर आहे",
      "(a) आणि (b) दोन्ही बरोबर",
      "(a) आणि (b) दोन्ही चूक"
    ],
    "options_english": [
      "(a) is true (b) is false",
      "(a) is false (b) is true",
      "(a) and (b) both are true",
      "(a) and (b) both are false"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Examination of Witnesses, Number of Witnesses",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Statement (a) is true: Section 142 of the Indian Evidence Act states that leading questions must not, if objected to by the adverse party, be asked in an examination-in-chief, or in a re-examination, except with the permission of the Court. Statement (b) is false: Section 134 of the Indian Evidence Act states that no particular number of witnesses shall in any case be required for the proof of any fact. This means there is no minimum number of witnesses required.",
    "explanation_marathi": "विधान (a) सत्य आहे: भारतीय पुरावा अधिनियम, कलम १४२ नुसार, मुख्य तपासणीत (examination-in-chief) किंवा पुन्हा तपासणीत (re-examination) विरोधी पक्षाने आक्षेप घेतल्यास, न्यायालयाच्या परवानगीशिवाय अग्रगण्य प्रश्न (leading questions) विचारले जाऊ नयेत. विधान (b) असत्य आहे: भारतीय पुरावा अधिनियम, कलम १३४ नुसार, कोणत्याही तथ्याच्या पुराव्यासाठी विशिष्ट संख्येने साक्षीदार आवश्यक नाहीत. याचा अर्थ, कोणताही तथ्य सिद्ध करण्यासाठी किमान साक्षीदारांची संख्या निश्चित केलेली नाही.",
    "options_breakdown": [
      {
        "option_english": "(a) is true (b) is false",
        "option_marathi": "(a) बरोबर असून (b) चूक आहे",
        "is_correct": true,
        "reason": "Statement (a) is correct as per Section 142 of the Indian Evidence Act. Statement (b) is incorrect as per Section 134, which states no particular number of witnesses is required."
      },
      {
        "option_english": "(a) is false (b) is true",
        "option_marathi": "(a) चूक असून (b) बरोबर आहे",
        "is_correct": false,
        "reason": "Statement (a) is true, not false. Statement (b) is false, not true."
      },
      {
        "option_english": "(a) and (b) both are true",
        "option_marathi": "(a) आणि (b) दोन्ही बरोबर",
        "is_correct": false,
        "reason": "Statement (b) is false."
      },
      {
        "option_english": "(a) and (b) both are false",
        "option_marathi": "(a) आणि (b) दोन्ही चूक",
        "is_correct": false,
        "reason": "Statement (a) is true."
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "भारतीय पुरावा अधिनियम, 1872 नुसार जोड्या लावा.\nकलम\n(a) 40\n(b) 41\n(c) 42\n(d) 44\nतरतुदी\n(i) सप्रमाण इत्यादी विषयक अधिकारीतांमधील विवक्षित न्यायनिर्णयाची संबंद्धता\n(ii) आधीचे न्यायनिर्णय हे दुसऱ्या दाव्या किंवा संपरीक्षेस आडकाठी करण्याच्या दृष्टिने संबंद्ध\n(iii) न्यायनिर्णय मिळविताना कपट किंवा संगनमत झाल्याचे किंवा न्यायालय अक्षम असल्याचे शाबित करता येईल\n(iv) कलम 41 मधील तरतुदी वगळून अन्य न्यायनिर्णय किंवा हुकूमनामे यांची संबंद्धता व परिणाम\nपर्यायी उत्तरे :\n(a) (b) (c) (d)\n(1) (i) (ii) (iii) (iv)\n(2) (iii) (ii) (i) (iv)\n(3) (ii) (i) (iv) (iii)\n(4) (iv) (iii) (ii) (i)",
    "question_english": "As per provisions under the Indian Evidence Act, 1872 match the following.\nSection\n(a) 40\n(b) 41\n(c) 42\n(d) 44\nProvision\n(i) Relevancy of certain judgements in probate etc.\n(ii) Previous judgements relevant to bar a second suit or trial.\n(iii) Fraud or collusion in obtaining judgement or incompetency of court may be proved\n(iv) Relevancy and effect of judgement orders or decree other than mentioned in section 41.\nAnswer Options :\n(a) (b) (c) (d)\n(1) (i) (ii) (iii) (iv)\n(2) (iii) (ii) (i) (iv)\n(3) (ii) (i) (iv) (iii)\n(4) (iv) (iii) (ii) (i)",
    "options_marathi": [
      "(i) (ii) (iii) (iv)",
      "(iii) (ii) (i) (iv)",
      "(ii) (i) (iv) (iii)",
      "(iv) (iii) (ii) (i)"
    ],
    "options_english": [
      "(i) (ii) (iii) (iv)",
      "(iii) (ii) (i) (iv)",
      "(ii) (i) (iv) (iii)",
      "(iv) (iii) (ii) (i)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Relevancy of Judgements",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The correct matches are:\n(a) Section 40: Previous judgments relevant to bar a second suit or trial (ii).\n(b) Section 41: Relevancy of certain judgments in probate, matrimonial, admiralty, or insolvency jurisdiction (i).\n(c) Section 42: Relevancy and effect of judgments, orders, or decrees other than those mentioned in Section 41 (iv).\n(d) Section 44: Fraud or collusion in obtaining judgment, or incompetency of Court, may be proved (iii).\nThus, the sequence is (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii).",
    "explanation_marathi": "योग्य जुळणी खालीलप्रमाणे आहे:\n(a) कलम ४०: मागील न्यायनिर्णय दुसऱ्या दाव्याला किंवा खटल्याला प्रतिबंध घालण्यासाठी संबंधित असतात (ii).\n(b) कलम ४१: सप्रमाण, वैवाहिक, नौदल किंवा दिवाळखोरी अधिकारितेतील विशिष्ट न्यायनिर्णयांची संबद्धता (i).\n(c) कलम ४२: कलम ४१ मध्ये नमूद केलेल्या न्यायनिर्णय, आदेश किंवा हुकूमनाम्यांव्यतिरिक्त इतर न्यायनिर्णय, आदेश किंवा हुकूमनाम्यांची संबद्धता आणि परिणाम (iv).\n(d) कलम ४४: न्यायनिर्णय मिळवताना कपट किंवा संगनमत झाल्याचे किंवा न्यायालय अक्षम असल्याचे सिद्ध करता येईल (iii).\nम्हणून, क्रम (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii) असा आहे.",
    "options_breakdown": [
      {
        "option_english": "(i) (ii) (iii) (iv)",
        "option_marathi": "(i) (ii) (iii) (iv)",
        "is_correct": false,
        "reason": "This option does not match the correct pairing of sections and provisions."
      },
      {
        "option_english": "(iii) (ii) (i) (iv)",
        "option_marathi": "(iii) (ii) (i) (iv)",
        "is_correct": false,
        "reason": "This option does not match the correct pairing of sections and provisions."
      },
      {
        "option_english": "(ii) (i) (iv) (iii)",
        "option_marathi": "(ii) (i) (iv) (iii)",
        "is_correct": true,
        "reason": "This option correctly matches Section 40 with (ii), Section 41 with (i), Section 42 with (iv), and Section 44 with (iii)."
      },
      {
        "option_english": "(iv) (iii) (ii) (i)",
        "option_marathi": "(iv) (iii) (ii) (i)",
        "is_correct": false,
        "reason": "This option does not match the correct pairing of sections and provisions."
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "न्यायालयीन कबूलीजबाब म्हणजे असा कबूलीजबाब जो न्यायदंडाधिकाऱ्या समोर फौजदारी प्रक्रिया संहिता, 1973 मधील कलम ______ नुसार नोंदविला जातो.",
    "question_english": "Judicial Confessions are those which are made to a Judicial Magistrate under section ______ of criminal procedure code, 1973.",
    "options_marathi": [
      "34",
      "153",
      "164",
      "162"
    ],
    "options_english": [
      "34",
      "153",
      "164",
      "162"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Criminal Procedure Code - Confessions",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Section 164 of the Criminal Procedure Code, 1973, deals with the recording of confessions and statements by Magistrates. A confession recorded by a Judicial Magistrate under this section, after ensuring it is voluntary and warning the accused, is considered a judicial confession.",
    "explanation_marathi": "फौजदारी प्रक्रिया संहिता, १९७३ च्या कलम १६४ नुसार, न्यायदंडाधिकाऱ्यासमोर कबुलीजबाब आणि विधाने नोंदवण्याची तरतूद आहे. या कलमांतर्गत न्यायदंडाधिकाऱ्याने, कबुलीजबाब ऐच्छिक असल्याची खात्री करून आणि आरोपीला योग्य इशारा देऊन, नोंदवलेला कबुलीजबाब 'न्यायालयीन कबुलीजबाब' (Judicial Confession) मानला जातो.",
    "options_breakdown": [
      {
        "option_english": "34",
        "option_marathi": "34",
        "is_correct": false,
        "reason": "Section 34 of CrPC deals with powers of superior officers of police, not recording of confessions."
      },
      {
        "option_english": "153",
        "option_marathi": "153",
        "is_correct": false,
        "reason": "Section 153 of CrPC deals with examination of weights, measures, etc., not recording of confessions."
      },
      {
        "option_english": "164",
        "option_marathi": "164",
        "is_correct": true,
        "reason": "Section 164 of the CrPC specifically provides for the recording of confessions and statements by Magistrates, which are known as judicial confessions."
      },
      {
        "option_english": "162",
        "option_marathi": "162",
        "is_correct": false,
        "reason": "Section 162 of CrPC deals with statements to police not to be signed and their use in evidence, not confessions recorded by a Magistrate."
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "भारतीय पुरावा अधिनियम 1872 नुसार शाबितीच्या जबाबदारीच्या तरतुदीनुसार जोड्या लावा.\nकलम\n(a) 101\n(b) 102\n(c) 103\n(d) 105\nतरतूद\n(i) सिद्ध करण्याची जबाबदारी कोणावर असते\n(ii) विशिष्ट तथ्यासंबंधात सिद्ध करण्याची जबाबदारी\n(iii) सिद्ध करण्याची जबाबदारी\n(iv) आरोपीचा खटला अपवादांतर्गत येतो हे सिद्ध करण्याची जबाबदारी\nपर्यायी उत्तरे :\n(a) (b) (c) (d)\n(1) (iii) (i) (ii) (iv)\n(2) (iii) (ii) (i) (iv)\n(3) (iv) (ii) (i) (iii)\n(4) (iv) (i) (ii) (iii)",
    "question_english": "Match the following regarding the provisions of the burden of proof under the Indian Evidence Act 1872.\nSection\n(a) 101\n(b) 102\n(c) 103\n(d) 105\nProvision\n(i) On whom burden of proof lies\n(ii) Burden of proof as to particular fact\n(iii) Burden of proof\n(iv) Burden of proving that case of accused comes within exceptions\nAnswer Options :\n(a) (b) (c) (d)\n(1) (iii) (i) (ii) (iv)\n(2) (iii) (ii) (i) (iv)\n(3) (iv) (ii) (i) (iii)\n(4) (iv) (i) (ii) (iii)",
    "options_marathi": [
      "(iii) (i) (ii) (iv)",
      "(iii) (ii) (i) (iv)",
      "(iv) (ii) (i) (iii)",
      "(iv) (i) (ii) (iii)"
    ],
    "options_english": [
      "(iii) (i) (ii) (iv)",
      "(iii) (ii) (i) (iv)",
      "(iv) (ii) (i) (iii)",
      "(iv) (i) (ii) (iii)"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Indian Evidence Act - Burden of Proof",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "The correct matches are:\n(a) Section 101: Burden of proof (general rule) (iii).\n(b) Section 102: On whom burden of proof lies (i).\n(c) Section 103: Burden of proof as to particular fact (ii).\n(d) Section 105: Burden of proving that case of accused comes within exceptions (iv).\nThus, the sequence is (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv).",
    "explanation_marathi": "योग्य जुळणी खालीलप्रमाणे आहे:\n(a) कलम १०१: सिद्ध करण्याची जबाबदारी (सामान्य नियम) (iii).\n(b) कलम १०२: सिद्ध करण्याची जबाबदारी कोणावर असते (i).\n(c) कलम १०३: विशिष्ट तथ्यासंबंधात सिद्ध करण्याची जबाबदारी (ii).\n(d) कलम १०५: आरोपीचा खटला अपवादांतर्गत येतो हे सिद्ध करण्याची जबाबदारी (iv).\nम्हणून, क्रम (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv) असा आहे.",
    "options_breakdown": [
      {
        "option_english": "(iii) (i) (ii) (iv)",
        "option_marathi": "(iii) (i) (ii) (iv)",
        "is_correct": true,
        "reason": "This option correctly matches Section 101 with (iii), Section 102 with (i), Section 103 with (ii), and Section 105 with (iv)."
      },
      {
        "option_english": "(iii) (ii) (i) (iv)",
        "option_marathi": "(iii) (ii) (i) (iv)",
        "is_correct": false,
        "reason": "This option incorrectly matches Section 102 and 103."
      },
      {
        "option_english": "(iv) (ii) (i) (iii)",
        "option_marathi": "(iv) (ii) (i) (iii)",
        "is_correct": false,
        "reason": "This option incorrectly matches multiple sections."
      },
      {
        "option_english": "(iv) (i) (ii) (iii)",
        "option_marathi": "(iv) (i) (ii) (iii)",
        "is_correct": false,
        "reason": "This option incorrectly matches multiple sections."
      }
    ]
  }
];
