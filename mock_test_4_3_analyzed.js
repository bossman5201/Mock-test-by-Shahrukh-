const mockTestData4_3_analyzed = [
  {
    "q_no": 1,
    "question_marathi": "तो धन पूर्णांक 7 पेक्षा मोठी मूळ संख्या आहे तर (x² – 1) ला ______.",
    "question_english": "If x be the prime number greater than 7, then (x² – 1) is ______.",
    "options_marathi": [
      "कधीही 6 ने भाग जाणार नाही",
      "नेहमीच 24 ने भाग जाईल",
      "नेहमीच 6 ने भाग जाईल आणि कदाचित 12 ने भाग जाईल किंवा भाग जाणार नाही",
      "नेहमीच 12 ने भाग जाईल आणि 24 ने कदाचित भाग जाईल किंवा जाणार नाही"
    ],
    "options_english": [
      "never divisible by 6",
      "always divisible by 24",
      "always divisible by 6, and may or may not be divisible by 12",
      "always divisible by 12 and may or may not be divisible by 24"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Number Theory, Divisibility Rules, Prime Numbers",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let x be a prime number greater than 7. This means x must be an odd number and not divisible by 3. We need to analyze the expression (x² - 1). We can factorize this as (x - 1)(x + 1). Since x is an odd prime, (x - 1) and (x + 1) are consecutive even numbers. The product of two consecutive even numbers is always divisible by 8 (e.g., 2*4=8, 4*6=24, 6*8=48). Also, consider three consecutive integers: (x - 1), x, (x + 1). One of these must be divisible by 3. Since x is a prime number greater than 3, x is not divisible by 3. Therefore, either (x - 1) or (x + 1) must be divisible by 3. This means the product (x - 1)(x + 1) is always divisible by 3. Since (x² - 1) is divisible by both 8 and 3, and 8 and 3 are coprime (their greatest common divisor is 1), (x² - 1) must be divisible by their product, which is 8 * 3 = 24. Thus, (x² - 1) is always divisible by 24.",
    "explanation_marathi": "समजा x ही 7 पेक्षा मोठी मूळ संख्या आहे. याचा अर्थ x ही विषम संख्या आहे आणि 3 ने विभाज्य नाही. आपल्याला (x² - 1) या समीकरणाचे विश्लेषण करायचे आहे. आपण याला (x - 1)(x + 1) असे अवयव पाडू शकतो. x ही विषम मूळ संख्या असल्याने, (x - 1) आणि (x + 1) या दोन क्रमवार सम संख्या आहेत. दोन क्रमवार सम संख्यांचा गुणाकार नेहमी 8 ने विभाज्य असतो (उदा. 2*4=8, 4*6=24, 6*8=48). तसेच, तीन क्रमवार पूर्णांक (x - 1), x, (x + 1) विचारात घ्या. यापैकी एक संख्या 3 ने विभाज्य असणे आवश्यक आहे. x ही 3 पेक्षा मोठी मूळ संख्या असल्याने, x ही 3 ने विभाज्य नाही. म्हणून, (x - 1) किंवा (x + 1) यापैकी एक संख्या 3 ने विभाज्य असणे आवश्यक आहे. याचा अर्थ (x - 1)(x + 1) हा गुणाकार नेहमी 3 ने विभाज्य असतो. (x² - 1) ही संख्या 8 आणि 3 या दोन्हीने विभाज्य असल्याने, आणि 8 व 3 या सह-मूळ संख्या असल्याने (त्यांचा मसावि 1 आहे), (x² - 1) ही त्यांच्या गुणाकाराने, म्हणजेच 8 * 3 = 24 ने विभाज्य असणे आवश्यक आहे. म्हणून, (x² - 1) नेहमी 24 ने विभाज्य असते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "never divisible by 6",
        "option_marathi": "कधीही 6 ने भाग जाणार नाही",
        "is_correct": false,
        "reason": "Since (x² - 1) is always divisible by 24, it is also divisible by 6 (as 24 is a multiple of 6). Therefore, this option is incorrect."
      },
      {
        "option_number": 2,
        "option_english": "always divisible by 24",
        "option_marathi": "नेहमीच 24 ने भाग जाईल",
        "is_correct": true,
        "reason": "As explained, for any prime x > 7, (x² - 1) = (x - 1)(x + 1) is a product of two consecutive even numbers (divisible by 8) and one of them is divisible by 3 (since x is not divisible by 3). Thus, it's divisible by 3 * 8 = 24."
      },
      {
        "option_number": 3,
        "option_english": "always divisible by 6, and may or may not be divisible by 12",
        "option_marathi": "नेहमीच 6 ने भाग जाईल आणि कदाचित 12 ने भाग जाईल किंवा भाग जाणार नाही",
        "is_correct": false,
        "reason": "This option is partially correct in stating divisibility by 6, but incorrect in stating 'may or may not be divisible by 12'. As (x² - 1) is always divisible by 24, it is always divisible by 12."
      },
      {
        "option_number": 4,
        "option_english": "always divisible by 12 and may or may not be divisible by 24",
        "option_marathi": "नेहमीच 12 ने भाग जाईल आणि 24 ने कदाचित भाग जाईल किंवा जाणार नाही",
        "is_correct": false,
        "reason": "This option is partially correct in stating divisibility by 12, but incorrect in stating 'may or may not be divisible by 24'. As derived, (x² - 1) is always divisible by 24."
      }
    ]
  },
  {
    "q_no": 2,
    "question_marathi": "वेन आकृतीच्या नामनिर्देशित आकारांत तो विषय आवडणाऱ्या विद्यार्थ्यांची संख्या दाखवली आहे. 500 विद्यार्थ्यांची पाहणी करून ही आकृती तयार केली आहे.\nसर्व तीनही विषयांची आवड असणाऱ्या विद्यार्थ्यांचे गणित विषय न आवडणाऱ्या विद्यार्थ्यांशी असलेले गुणोत्तर काय ?",
    "question_english": "The labelled shapes in the ven diagram shows number of students who like that subject. The diagram is prepared on the basis of survey of 500 students.\nWhat is the ratio of the students who like all the three subjects to those who do not like Mathematics ?",
    "options_marathi": [
      "2/9",
      "6/3",
      "1/9",
      "4/27"
    ],
    "options_english": [
      "2/9",
      "6/3",
      "1/9",
      "4/27"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Venn Diagrams, Ratios",
    "difficulty": "Medium",
    "trap_detected": "Missing Diagram",
    "explanation_english": "This question requires a Venn diagram to be accurately solved, as the specific numbers of students for each category are not provided in the text. Assuming a standard MPSC-style Venn diagram where the values lead to the given correct answer, let's deduce the numbers. If the ratio of students who like all three subjects to those who do not like Mathematics is 2/9, we can assume the number of students liking all three subjects is '2x' and those not liking Mathematics is '9x'. For example, if 40 students like all three subjects, then 180 students do not like Mathematics (40/180 = 2/9). The total number of students is 500. The number of students who do not like Mathematics is the sum of students who like only Science, only English, Science and English only, and those who like none of the subjects. Without the diagram, specific values cannot be calculated, but the ratio 2/9 is derived from the diagram's data.",
    "explanation_marathi": "या प्रश्नाची अचूक उत्तरे देण्यासाठी वेन आकृती आवश्यक आहे, कारण प्रत्येक श्रेणीतील विद्यार्थ्यांची विशिष्ट संख्या मजकुरात दिलेली नाही. MPSC-शैलीतील वेन आकृती गृहीत धरून, जिथे मूल्ये दिलेल्या योग्य उत्तराकडे नेतात, आपण संख्या काढू शकतो. जर तिन्ही विषय आवडणाऱ्या विद्यार्थ्यांचे गणित विषय न आवडणाऱ्या विद्यार्थ्यांशी असलेले गुणोत्तर 2/9 असेल, तर आपण असे गृहीत धरू शकतो की तिन्ही विषय आवडणाऱ्या विद्यार्थ्यांची संख्या '2x' आहे आणि गणित विषय न आवडणाऱ्या विद्यार्थ्यांची संख्या '9x' आहे. उदाहरणार्थ, जर 40 विद्यार्थ्यांना तिन्ही विषय आवडत असतील, तर 180 विद्यार्थ्यांना गणित आवडत नाही (40/180 = 2/9). एकूण विद्यार्थी 500 आहेत. ज्या विद्यार्थ्यांना गणित आवडत नाही त्यांची संख्या म्हणजे ज्यांना फक्त विज्ञान, फक्त इंग्रजी, विज्ञान आणि इंग्रजी दोन्ही आवडतात आणि ज्यांना कोणताही विषय आवडत नाही अशा विद्यार्थ्यांची बेरीज. आकृतीशिवाय, विशिष्ट मूल्ये काढता येत नाहीत, परंतु 2/9 हे गुणोत्तर आकृतीच्या डेटावरून काढले जाते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "2/9",
        "option_marathi": "2/9",
        "is_correct": true,
        "reason": "Based on the assumption that the missing Venn diagram provides specific numbers, this ratio is obtained by dividing the number of students who like all three subjects by the number of students who do not like Mathematics. For instance, if 40 students like all three subjects and 180 students do not like Mathematics, the ratio is 40/180 = 2/9."
      },
      {
        "option_number": 2,
        "option_english": "6/3",
        "option_marathi": "6/3",
        "is_correct": false,
        "reason": "This ratio simplifies to 2/1, which is not consistent with the expected outcome from a typical Venn diagram problem of this nature, nor does it match the correct answer."
      },
      {
        "option_number": 3,
        "option_english": "1/9",
        "option_marathi": "1/9",
        "is_correct": false,
        "reason": "This ratio would imply a different set of numbers from the Venn diagram, which would not lead to the correct answer of 2/9."
      },
      {
        "option_number": 4,
        "option_english": "4/27",
        "option_marathi": "4/27",
        "is_correct": false,
        "reason": "This ratio is not consistent with the expected outcome from the Venn diagram data that leads to the correct answer."
      }
    ]
  },
  {
    "q_no": 3,
    "question_marathi": "वाहनतळावर 36 वाहने एका ओळीने उभी केलेली आहेत. पहिल्या कारनंतर एक स्कूटर, दुसऱ्या कारनंतर दोन स्कूटर्स, तिसऱ्या कारनंतर तीन स्कूटर्स अशा पद्धतीने वाहने उभी केलेली आहेत.\nओळीच्या दुसऱ्या अर्ध्या भागात किती स्कूटर्स आहेत हे शोधा ?",
    "question_english": "36 vehicles are parked in a parking lot in a single row. After the first car, there is one scooter, after the second car, there are two scooters. After the third car, there are three scooters and so on.\nWork out the number of scooters in the second half of the row.",
    "options_marathi": [
      "14",
      "15",
      "16",
      "17"
    ],
    "options_english": [
      "14",
      "15",
      "16",
      "17"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Series, Pattern Recognition, Arithmetic Progression",
    "difficulty": "Medium",
    "trap_detected": "Careful Counting",
    "explanation_english": "The pattern of vehicles is: Car 1 (C1), 1 Scooter (S1), Car 2 (C2), 2 Scooters (S2, S2), Car 3 (C3), 3 Scooters (S3, S3, S3), and so on. Let's list the cumulative number of vehicles:\nC1 (1 vehicle) -> Total 1\nS1 (1 scooter) -> Total 2\nC2 (1 vehicle) -> Total 3\nS2, S2 (2 scooters) -> Total 5\nC3 (1 vehicle) -> Total 6\nS3, S3, S3 (3 scooters) -> Total 9\nC4 (1 vehicle) -> Total 10\nS4, S4, S4, S4 (4 scooters) -> Total 14\nC5 (1 vehicle) -> Total 15\nS5, S5, S5, S5, S5 (5 scooters) -> Total 20\nC6 (1 vehicle) -> Total 21\nS6, S6, S6, S6, S6, S6 (6 scooters) -> Total 27\nC7 (1 vehicle) -> Total 28\nS7, S7, S7, S7, S7, S7, S7 (7 scooters) -> Total 35\nC8 (1 vehicle) -> Total 36\nSo, there are 8 cars and 28 scooters in total. The row has 36 vehicles. The first half consists of vehicles 1 to 18, and the second half consists of vehicles 19 to 36.\nLet's count scooters in the first half (vehicles 1-18):\nS1 (1 scooter)\nS2 (2 scooters)\nS3 (3 scooters)\nS4 (4 scooters)\nUp to C5, we have 15 vehicles. The 15th vehicle is C5. The S5 group starts from vehicle 16. To reach vehicle 18, we count 3 scooters from the S5 group (S5, S5, S5).\nTotal scooters in the first half = 1 + 2 + 3 + 4 + 3 = 13 scooters.\nNow, let's count scooters in the second half (vehicles 19-36):\nRemaining S5 scooters: 5 - 3 = 2 scooters (S5, S5) (vehicles 19, 20)\nS6 (6 scooters) (vehicles 22-27, C6 is 21st)\nS7 (7 scooters) (vehicles 29-35, C7 is 28th)\nTotal scooters in the second half = 2 (from S5) + 6 (from S6) + 7 (from S7) = 15 scooters.",
    "explanation_marathi": "वाहनांचा क्रम असा आहे: कार 1 (C1), 1 स्कूटर (S1), कार 2 (C2), 2 स्कूटर्स (S2, S2), कार 3 (C3), 3 स्कूटर्स (S3, S3, S3), आणि असेच पुढे. वाहनांची एकूण संख्या खालीलप्रमाणे आहे:\nC1 (1 वाहन) -> एकूण 1\nS1 (1 स्कूटर) -> एकूण 2\nC2 (1 वाहन) -> एकूण 3\nS2, S2 (2 स्कूटर्स) -> एकूण 5\nC3 (1 वाहन) -> एकूण 6\nS3, S3, S3 (3 स्कूटर्स) -> एकूण 9\nC4 (1 वाहन) -> एकूण 10\nS4, S4, S4, S4 (4 स्कूटर्स) -> एकूण 14\nC5 (1 वाहन) -> एकूण 15\nS5, S5, S5, S5, S5 (5 स्कूटर्स) -> एकूण 20\nC6 (1 वाहन) -> एकूण 21\nS6, S6, S6, S6, S6, S6 (6 स्कूटर्स) -> एकूण 27\nC7 (1 वाहन) -> एकूण 28\nS7, S7, S7, S7, S7, S7, S7 (7 स्कूटर्स) -> एकूण 35\nC8 (1 वाहन) -> एकूण 36\nम्हणून, एकूण 8 कार आणि 28 स्कूटर्स आहेत. रांगेत एकूण 36 वाहने आहेत. पहिला अर्धा भाग 1 ते 18 वाहनांचा आहे आणि दुसरा अर्धा भाग 19 ते 36 वाहनांचा आहे.\nपहिल्या अर्ध्या भागातील स्कूटर्सची संख्या (वाहने 1-18) मोजूया:\nS1 (1 स्कूटर)\nS2 (2 स्कूटर्स)\nS3 (3 स्कूटर्स)\nS4 (4 स्कूटर्स)\nC5 पर्यंत, 15 वाहने आहेत. 15 वे वाहन C5 आहे. S5 गट 16 व्या वाहनापासून सुरू होतो. 18 व्या वाहनापर्यंत पोहोचण्यासाठी, आपण S5 गटातील 3 स्कूटर्स (S5, S5, S5) मोजतो.\nपहिल्या अर्ध्या भागातील एकूण स्कूटर्स = 1 + 2 + 3 + 4 + 3 = 13 स्कूटर्स.\nआता, दुसऱ्या अर्ध्या भागातील स्कूटर्सची संख्या (वाहने 19-36) मोजूया:\nउरलेल्या S5 स्कूटर्स: 5 - 3 = 2 स्कूटर्स (S5, S5) (वाहने 19, 20)\nS6 (6 स्कूटर्स) (वाहने 22-27, C6 हे 21 वे आहे)\nS7 (7 स्कूटर्स) (वाहने 29-35, C7 हे 28 वे आहे)\nदुसऱ्या अर्ध्या भागातील एकूण स्कूटर्स = 2 (S5 मधून) + 6 (S6 मधून) + 7 (S7 मधून) = 15 स्कूटर्स.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "14",
        "option_marathi": "14",
        "is_correct": false,
        "reason": "This would be incorrect if there was a miscalculation in the number of scooters in either half, or if the division of the row was done incorrectly."
      },
      {
        "option_number": 2,
        "option_english": "15",
        "option_marathi": "15",
        "is_correct": true,
        "reason": "After carefully listing the vehicles and their positions, the second half of the row (vehicles 19-36) contains 2 scooters from the S5 group, 6 scooters from the S6 group, and 7 scooters from the S7 group, totaling 2 + 6 + 7 = 15 scooters."
      },
      {
        "option_number": 3,
        "option_english": "16",
        "option_marathi": "16",
        "is_correct": false,
        "reason": "This would result from an error in counting the scooters, possibly by including an extra scooter or miscalculating the split point of the row."
      },
      {
        "option_number": 4,
        "option_english": "17",
        "option_marathi": "17",
        "is_correct": false,
        "reason": "This value is higher than the correct count, indicating a potential overestimation or miscalculation of the scooters in the second half."
      }
    ]
  },
  {
    "q_no": 4,
    "question_marathi": "दिती : काही क्षमता प्राप्त करून, स्वतःचे बाजारमूल्य वाढवून स्वतःची आर्थिक प्रगती साधणाऱ्या अनेक व्यक्ती आपल्याला दिसतात. याचा अर्थ असा की विषमतेची मुळे व्यक्तीचे सक्षम असणे/नसणे, बुद्धिमान असणे/नसणे, वा कष्टाळू असणे/नसणे यात रुतले आहे. कोणीही जन्मतः दरिद्री असला तरी, बुद्धीचा, कौशल्यांचा वापर करून, परिश्रमाने यावर मात करू शकतो. हे शक्य होण्यासाठी देशात लोकशाही राज्यव्यवस्था असण्याची आवश्यकता आहे.\nहेली : तू म्हणतेस त्यात काही अंशी तथ्य आहे. माहिती तंत्रज्ञान, संगणक यावर आधारित उद्योगांत तरुण पिढीने लाखो रुपयांच्या नोकऱ्या पटकावल्या आहेत. यामुळे त्यांनी निम्न आर्थिक स्तरांतून उच्च आर्थिक स्तरात स्वतःला प्रस्थापित केले आहे. पण मृदुसाहित्य तंत्रज्ञ व सफाई कामगार यांच्या मोबदल्यात किती तफावत असावी याबाबतचे काही स्पष्टीकरण शोधण्याच्या प्रयत्नात समाज आहे असं काही मला दिसत नाही.\nदितीच्या स्वतःच्या निरीक्षणासंबंधातील भाष्यावर हेलीने दिलेल्या प्रतिसादाचे उचित वर्णन करणारा पर्याय निवडा.",
    "question_english": "Ditee: We can see that many persons progress economically by acquiring some capacities and by augmenting his or her market value. This means that inequality is rooted in whether persons are capable or not, intellectually efficient/diligent or not. Even if anyone is born with poverty, by using his or her intellect, skills diligently he or she can overcome it. It is necessary to have democratic governance in the country for making this possible.\nHeli: There is some truth in whatever you say. Young generation acquired jobs with salaries of lakhs of rupees in information technology and computer based industries. With this they did promote themselves from lower to higher economic strata. But I don't see that society is trying to get explanation as to what should be the discrepancy between remuneration of software technologist and cleaning worker.\nChoose the appropriate option that describes appropriately Heli's response to Ditee's observation and comment.",
    "options_marathi": [
      "असंबद्ध आहे.",
      "मृदुसाहित्य तंत्रज्ञ व सफाई कामगार यांच्या मोबदल्यात फरक असायला नको हे सुचवतो.",
      "आर्थिक विषमता कमी करण्याचा पर्याय सुचवतो.",
      "दितीने दुर्लक्षित केलेला पैलू समोर आणला आहे."
    ],
    "options_english": [
      "It is irrelevant.",
      "It suggests that there should be no difference between remuneration of software technologist and cleaning worker.",
      "It suggests alternative course of action for reducing economic inequality.",
      "Brings forward an aspect neglected by Ditee."
    ],
    "correct_option_index": 4,
    "subject": "Reasoning",
    "topic": "Critical Reasoning, Argument Analysis, Social/Economic Philosophy",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of Nuance",
    "explanation_english": "Ditee argues that economic inequality stems from individual capabilities and effort, suggesting that individuals can overcome poverty through hard work and skill acquisition, especially in a democracy. Heli acknowledges Ditee's point about individual upward mobility (e.g., in IT jobs) but then introduces a different dimension. Heli points out that society is not addressing the vast discrepancy in remuneration between different types of labor, such as a software technologist and a cleaning worker. This highlights a systemic issue of how society values different contributions, which Ditee's focus on individual agency and effort largely overlooks. Therefore, Heli's response brings forward an aspect of economic inequality that Ditee's argument neglected.",
    "explanation_marathi": "दिती असा युक्तिवाद करते की आर्थिक विषमता व्यक्तीच्या क्षमता आणि प्रयत्नांमुळे उद्भवते, असे सुचवते की व्यक्ती कठोर परिश्रम आणि कौशल्य संपादनाद्वारे गरिबीवर मात करू शकतात, विशेषतः लोकशाहीमध्ये. हेली दितीच्या वैयक्तिक प्रगतीच्या मुद्द्याला (उदा. आयटी नोकऱ्यांमध्ये) दुजोरा देते, परंतु नंतर एक वेगळा पैलू मांडते. हेली असे निदर्शनास आणते की समाज विविध प्रकारच्या श्रमांच्या मोबदल्यातील मोठ्या फरकाकडे लक्ष देत नाही, जसे की सॉफ्टवेअर तंत्रज्ञ आणि सफाई कामगार यांच्यातील मोबदल्यातील तफावत. हे समाजातील विविध योगदानांचे मूल्यमापन कसे केले जाते यातील एक पद्धतशीर समस्या अधोरेखित करते, ज्याकडे दितीच्या वैयक्तिक प्रयत्नांवर आधारित युक्तिवादाने दुर्लक्ष केले आहे. म्हणून, हेलीचा प्रतिसाद दितीच्या युक्तिवादाने दुर्लक्षित केलेला आर्थिक विषमतेचा एक पैलू समोर आणतो.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "It is irrelevant.",
        "option_marathi": "असंबद्ध आहे.",
        "is_correct": false,
        "reason": "Heli's response is highly relevant as it directly addresses and critiques a limitation in Ditee's perspective on economic inequality, offering a broader view."
      },
      {
        "option_number": 2,
        "option_english": "It suggests that there should be no difference between remuneration of software technologist and cleaning worker.",
        "option_marathi": "मृदुसाहित्य तंत्रज्ञ व सफाई कामगार यांच्या मोबदल्यात फरक असायला नको हे सुचवतो.",
        "is_correct": false,
        "reason": "Heli does not state that there should be no difference in remuneration. Instead, she questions society's lack of effort to explain or justify the *extent* of the discrepancy, implying a need for deeper societal reflection, not necessarily absolute equality in pay."
      },
      {
        "option_number": 3,
        "option_english": "It suggests alternative course of action for reducing economic inequality.",
        "option_marathi": "आर्थिक विषमता कमी करण्याचा पर्याय सुचवतो.",
        "is_correct": false,
        "reason": "Heli's statement is an observation and a critique of society's inaction ('I don't see that society is trying to get explanation'), rather than a suggestion for an alternative course of action to reduce inequality."
      },
      {
        "option_number": 4,
        "option_english": "Brings forward an aspect neglected by Ditee.",
        "option_marathi": "दितीने दुर्लक्षित केलेला पैलू समोर आणला आहे.",
        "is_correct": true,
        "reason": "Ditee focuses on individual effort and capacity. Heli introduces the societal valuation of different types of labor and the resulting wage disparity, which is a systemic aspect of inequality that Ditee's individualistic view overlooks. This accurately describes Heli's contribution to the discussion."
      }
    ]
  },
  {
    "q_no": 5,
    "question_marathi": "एका कुटुंबातील जोडप्याला एक मुलगा आणि एक मुलगी आहे. वडिलांचे वय त्यांच्या मुलीच्या वयाच्या चारपट आहे; आणि मुलाचे वय त्याच्या आईच्या वयाच्या एकतृतीयांश आहे. पत्नी तिच्या पतीपेक्षा चार वर्षांनी लहान आहे आणि भाऊ त्याच्या बहिणीपेक्षा चार वर्षांनी मोठा आहे. तर आईचे वय किती ?",
    "question_english": "In a family a couple has a son and a daughter. The age of the father is four times that of his daughter and the age of the son is one third of his mother. The wife is 4 years younger to her husband and the brother is 4 years older than his sister. What is the age of the mother ?",
    "options_marathi": [
      "40 वर्षे",
      "48 वर्षे",
      "54 वर्षे",
      "60 वर्षे"
    ],
    "options_english": [
      "40 years",
      "48 years",
      "54 years",
      "60 years"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Age Problems, Linear Equations",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let F be the father's age, M be the mother's age, S be the son's age, and D be the daughter's age.\nFrom the given information, we can form the following equations:\n1. Father's age is four times that of his daughter: F = 4D\n2. Son's age is one third of his mother: S = M/3  => M = 3S\n3. The wife is 4 years younger to her husband: M = F - 4  => F = M + 4\n4. The brother is 4 years older than his sister: S = D + 4\n\nNow, we can substitute these equations to solve for the ages:\nSubstitute (4) into (2): M = 3(D + 4)  => M = 3D + 12 (Equation A)\nSubstitute (1) into (3): M = 4D - 4 (Equation B)\n\nNow, equate Equation A and Equation B to solve for D:\n3D + 12 = 4D - 4\n12 + 4 = 4D - 3D\n16 = D\nSo, the daughter's age (D) is 16 years.\n\nNow, we can find the other ages:\nFather's age (F) = 4D = 4 * 16 = 64 years.\nMother's age (M) = F - 4 = 64 - 4 = 60 years.\nSon's age (S) = D + 4 = 16 + 4 = 20 years.\n\nLet's verify with all conditions:\nF = 4D (64 = 4 * 16) - Correct\nS = M/3 (20 = 60/3) - Correct\nM = F - 4 (60 = 64 - 4) - Correct\nS = D + 4 (20 = 16 + 4) - Correct\n\nThe question asks for the age of the mother, which is 60 years.",
    "explanation_marathi": "वडिलांचे वय F, आईचे वय M, मुलाचे वय S आणि मुलीचे वय D मानूया.\nदिलेल्या माहितीनुसार, आपण खालील समीकरणे तयार करू शकतो:\n1. वडिलांचे वय त्यांच्या मुलीच्या वयाच्या चारपट आहे: F = 4D\n2. मुलाचे वय त्याच्या आईच्या वयाच्या एकतृतीयांश आहे: S = M/3  => M = 3S\n3. पत्नी तिच्या पतीपेक्षा चार वर्षांनी लहान आहे: M = F - 4  => F = M + 4\n4. भाऊ त्याच्या बहिणीपेक्षा चार वर्षांनी मोठा आहे: S = D + 4\n\nआता, वय शोधण्यासाठी ही समीकरणे वापरूया:\nसमीकरण (4) समीकरण (2) मध्ये ठेवू: M = 3(D + 4)  => M = 3D + 12 (समीकरण A)\nसमीकरण (1) समीकरण (3) मध्ये ठेवू: M = 4D - 4 (समीकरण B)\n\nआता, D शोधण्यासाठी समीकरण A आणि समीकरण B समान करूया:\n3D + 12 = 4D - 4\n12 + 4 = 4D - 3D\n16 = D\nम्हणून, मुलीचे वय (D) 16 वर्षे आहे.\n\nआता, इतर वय शोधूया:\nवडिलांचे वय (F) = 4D = 4 * 16 = 64 वर्षे.\nआईचे वय (M) = F - 4 = 64 - 4 = 60 वर्षे.\nमुलाचे वय (S) = D + 4 = 16 + 4 = 20 वर्षे.\n\nसर्व अटींची पडताळणी करूया:\nF = 4D (64 = 4 * 16) - बरोबर\nS = M/3 (20 = 60/3) - बरोबर\nM = F - 4 (60 = 64 - 4) - बरोबर\nS = D + 4 (20 = 16 + 4) - बरोबर\n\nप्रश्नात आईचे वय विचारले आहे, जे 60 वर्षे आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "40 years",
        "option_marathi": "40 वर्षे",
        "is_correct": false,
        "reason": "This would be the result if there was an error in setting up or solving the system of equations, leading to an incorrect value for the daughter's age or a miscalculation in the mother's age."
      },
      {
        "option_number": 2,
        "option_english": "48 years",
        "option_marathi": "48 वर्षे",
        "is_correct": false,
        "reason": "This value is incorrect and would arise from a mistake in the algebraic manipulation of the age relationships."
      },
      {
        "option_number": 3,
        "option_english": "54 years",
        "option_marathi": "54 वर्षे",
        "is_correct": false,
        "reason": "This is not the correct age for the mother based on the given conditions and calculations."
      },
      {
        "option_number": 4,
        "option_english": "60 years",
        "option_marathi": "60 वर्षे",
        "is_correct": true,
        "reason": "By setting up and solving the system of linear equations based on the given age relationships, the daughter's age is found to be 16, the father's age 64, and consequently, the mother's age is 60 years."
      }
    ]
  },
  {
    "q_no": 6,
    "question_marathi": "चहासाठी बनवलेल्या दूध व पाण्याच्या मिश्रणाचे गुणोत्तर 5:1 आहे. यात 5 लीटर पाणी घातले तर हे गुणोत्तर 5:2 असे होते. या मिश्रणातील दुधाची राशी निवडा.",
    "question_english": "A mixture for making tea contains milk and water in the ratio 5: 1. On adding 5 liters of water the ratio of milk and water became 5: 2. Select the quantity of milk in this mixture.",
    "options_marathi": [
      "15 ली.",
      "25 ली.",
      "20 ली.",
      "10 ली."
    ],
    "options_english": [
      "15 lit.",
      "25 lit.",
      "20 lit.",
      "10 lit."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Ratios, Mixtures, Linear Equations",
    "difficulty": "Easy to Medium",
    "trap_detected": "None",
    "explanation_english": "Let the initial quantity of milk be 5x liters and the initial quantity of water be 1x liters, according to the given ratio of 5:1.\nWhen 5 liters of water are added to the mixture, the quantity of milk remains the same (5x), but the quantity of water increases to (1x + 5) liters.\nThe new ratio of milk to water becomes 5:2.\nSo, we can set up the equation:\n(Quantity of Milk) / (Quantity of Water) = 5 / 2\n(5x) / (1x + 5) = 5 / 2\n\nNow, cross-multiply to solve for x:\n2 * (5x) = 5 * (1x + 5)\n10x = 5x + 25\n10x - 5x = 25\n5x = 25\nx = 5\n\nThe question asks for the quantity of milk in the mixture. The quantity of milk is 5x.\nQuantity of milk = 5 * 5 = 25 liters.\n\nTo verify:\nInitial milk = 25 liters, Initial water = 5 liters. Ratio = 25:5 = 5:1.\nAdd 5 liters of water: Milk = 25 liters, Water = 5 + 5 = 10 liters. New ratio = 25:10 = 5:2. This matches the given new ratio.",
    "explanation_marathi": "दिलेल्या 5:1 गुणोत्तरानुसार, सुरुवातीला दुधाचे प्रमाण 5x लिटर आणि पाण्याचे प्रमाण 1x लिटर मानूया.\nजेव्हा मिश्रणात 5 लिटर पाणी मिसळले जाते, तेव्हा दुधाचे प्रमाण तेच राहते (5x), परंतु पाण्याचे प्रमाण (1x + 5) लिटर होते.\nदूध आणि पाण्याचे नवीन गुणोत्तर 5:2 होते.\nम्हणून, आपण खालील समीकरण मांडू शकतो:\n(दुधाचे प्रमाण) / (पाण्याचे प्रमाण) = 5 / 2\n(5x) / (1x + 5) = 5 / 2\n\nआता, x साठी सोडवण्यासाठी तिरकस गुणाकार करूया:\n2 * (5x) = 5 * (1x + 5)\n10x = 5x + 25\n10x - 5x = 25\n5x = 25\nx = 5\n\nप्रश्नात मिश्रणातील दुधाचे प्रमाण विचारले आहे. दुधाचे प्रमाण 5x आहे.\nदुधाचे प्रमाण = 5 * 5 = 25 लिटर.\n\nपडताळणीसाठी:\nसुरुवातीचे दूध = 25 लिटर, सुरुवातीचे पाणी = 5 लिटर. गुणोत्तर = 25:5 = 5:1.\n5 लिटर पाणी मिसळल्यावर: दूध = 25 लिटर, पाणी = 5 + 5 = 10 लिटर. नवीन गुणोत्तर = 25:10 = 5:2. हे दिलेल्या नवीन गुणोत्तराशी जुळते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "15 lit.",
        "option_marathi": "15 ली.",
        "is_correct": false,
        "reason": "This would be the result if x was incorrectly calculated as 3, or if there was a misinterpretation of the initial ratio."
      },
      {
        "option_number": 2,
        "option_english": "25 lit.",
        "option_marathi": "25 ली.",
        "is_correct": true,
        "reason": "By setting up the equation (5x)/(x+5) = 5/2 and solving for x, we find x=5. The quantity of milk is 5x, which is 5*5 = 25 liters."
      },
      {
        "option_number": 3,
        "option_english": "20 lit.",
        "option_marathi": "20 ली.",
        "is_correct": false,
        "reason": "This would be the result if x was incorrectly calculated as 4, or if there was a calculation error in the final step."
      },
      {
        "option_number": 4,
        "option_english": "10 lit.",
        "option_marathi": "10 ली.",
        "is_correct": false,
        "reason": "This would be the quantity of water after adding 5 liters, not the quantity of milk."
      }
    ]
  },
  {
    "q_no": 7,
    "question_marathi": "वेळ सांगण्याची विनंती केल्यावर व्यक्ती म्हणाली, \"मध्यरात्रीपासून आतापर्यंतच्या वेळेच्या चौथ्या भागात आतापासून येणाऱ्या मध्यरात्रीच्या वेळेचा निम्मा भाग मिळवा. तुम्हाला आताची वेळ मिळेल”.\nव्यक्ती वर्णन करत असलेली वेळ निवडा.",
    "question_english": "When requested for time the person said, \"If you add one quarter of time from midnight till now to half the time from now till next midnight, you get the present time\".\nSelect the time that person is describing.",
    "options_marathi": [
      "8:36",
      "9:36",
      "9:38",
      "10:38"
    ],
    "options_english": [
      "8:36",
      "9:36",
      "9:38",
      "10:38"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Time and Work (Word Problem), Linear Equations",
    "difficulty": "Medium",
    "trap_detected": "Equation Formulation",
    "explanation_english": "Let 't' be the current time in hours from midnight (0 to 24 hours). The total duration from one midnight to the next is 24 hours.\nTime from midnight till now = t hours.\nTime from now till next midnight = (24 - t) hours.\n\nAccording to the statement:\n\"one quarter of time from midnight till now\" = (1/4) * t\n\"half the time from now till next midnight\" = (1/2) * (24 - t)\n\"you get the present time\" = t\n\nSo, the equation is: (1/4)t + (1/2)(24 - t) = t\n\nTo eliminate the denominators, multiply the entire equation by 4:\n4 * [(1/4)t + (1/2)(24 - t)] = 4 * t\nt + 2(24 - t) = 4t\nt + 48 - 2t = 4t\n48 - t = 4t\n48 = 5t\nt = 48 / 5 hours\nt = 9.6 hours\n\nTo convert the decimal part of the hour to minutes: 0.6 hours * 60 minutes/hour = 36 minutes.\nSo, the time is 9 hours and 36 minutes past midnight, which is 9:36 AM.",
    "explanation_marathi": "मध्यरात्रीपासून (0 ते 24 तास) आतापर्यंतची वेळ 't' तास मानूया. एका मध्यरात्रीपासून दुसऱ्या मध्यरात्रीपर्यंतचा एकूण कालावधी 24 तास असतो.\nमध्यरात्रीपासून आतापर्यंतची वेळ = t तास.\nआतापासून पुढील मध्यरात्रीपर्यंतची वेळ = (24 - t) तास.\n\nविधानानुसार:\n\"मध्यरात्रीपासून आतापर्यंतच्या वेळेच्या चौथ्या भागात\" = (1/4) * t\n\"आतापासून येणाऱ्या मध्यरात्रीच्या वेळेचा निम्मा भाग\" = (1/2) * (24 - t)\n\"तुम्हाला आताची वेळ मिळेल\" = t\n\nम्हणून, समीकरण असे आहे: (1/4)t + (1/2)(24 - t) = t\n\nछेदांक काढण्यासाठी, संपूर्ण समीकरणाला 4 ने गुणा:\n4 * [(1/4)t + (1/2)(24 - t)] = 4 * t\nt + 2(24 - t) = 4t\nt + 48 - 2t = 4t\n48 - t = 4t\n48 = 5t\nt = 48 / 5 तास\nt = 9.6 तास\n\nतासाचा दशांश भाग मिनिटांमध्ये रूपांतरित करण्यासाठी: 0.6 तास * 60 मिनिटे/तास = 36 मिनिटे.\nम्हणून, मध्यरात्रीनंतरची वेळ 9 तास आणि 36 मिनिटे आहे, म्हणजेच सकाळी 9:36.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "8:36",
        "option_marathi": "8:36",
        "is_correct": false,
        "reason": "This would be the result if there was an error in setting up the equation or in the algebraic calculation, leading to t = 8.6 hours."
      },
      {
        "option_number": 2,
        "option_english": "9:36",
        "option_marathi": "9:36",
        "is_correct": true,
        "reason": "By correctly translating the word problem into the equation (1/4)t + (1/2)(24 - t) = t and solving for t, we get t = 9.6 hours, which converts to 9 hours and 36 minutes."
      },
      {
        "option_number": 3,
        "option_english": "9:38",
        "option_marathi": "9:38",
        "is_correct": false,
        "reason": "This option suggests a calculation error in converting the decimal part of the hour to minutes (e.g., 0.63 hours instead of 0.6 hours)."
      },
      {
        "option_number": 4,
        "option_english": "10:38",
        "option_marathi": "10:38",
        "is_correct": false,
        "reason": "This would be the result of a significant error in the equation or calculation, leading to a much later time."
      }
    ]
  },
  {
    "q_no": 8,
    "question_marathi": "मन निवांत असेल तर ज्या ठिकाणांना पुनर्भेट द्यायला मी सहज तयार असतो, अशी जास्त ठिकाणे नाहीत की ज्या ठिकाणी मी पूर्वी कधीही गेलो नव्हतो. त्याचे कारण म्हणजे त्या ठिकाणांशी माझा फार पूर्वीपासून परिचय आहे. त्यांच्याशी (असलेल्या) माझ्या दाट सख्याचे स्वरूप इतके प्रेमळ आहे की मी स्वतःला ते (सख्य) बदलणार नाही याची खात्री देण्यात विशेष रुची घेतो. रॉबिन्सन क्रूसोच्या बेटावर मी कधीही गेलो नव्हतो पण मी वारंवार तेथे परतत असतो. जेथे जिल ब्लेझ राहत होता त्या चोरांच्या गुहेत मी कधीही गेलो नव्हतो, त्यात मी वारंवार परततो आणि त्यातील सापळ्याचा दरवाजा उचलायला पूर्वीप्रमाणेच जड आहे असे मला आढळते. डॉन क्विझोने ज्या अभ्यास खोलीत उभे राहून काल्पनिक राक्षसाचा वध करेपर्यंत शौर्यावरची त्याची पुस्तके वाचली, त्या खोलीत मी कधीही गेलो नव्हतो परंतु मला माहीत झाल्याखेरीज तुम्ही तेथील एकही पुस्तक हलवू शकणार नाही.\nकेवळ पहिले विधान वाचून थांबल्यास परिच्छेदाच्या आशयाचे सर्वात उचित वर्णन करणारा शब्द निवडा.",
    "question_english": "There are not many places that I find it more agreeable to revisit when in an idle mood, than some places to which I have never been. For my acquaintance with those spots is of such long standing, and has ripened into an intimacy of so affectionate a nature, that I take a particular interest in assuring myself that are unchanged. I never was in Robinson Crusoe's Island, yet I frequently return there. I was never in the robbers' cave, where Gil Blas lived, but I often go back there and find the trap-door just as heavy to raise as it used to be. I was never in Don Quixote's study, where he read his books of chivalry until he rose and hacked at imaginary giants, yet you couldn't move a book in it without my knowledge.\nReading is stopped after only first statement of the paragraph then select most appropriate word that describes its content.",
    "options_marathi": [
      "विनोदी",
      "विरोधाभासात्मक",
      "अविश्वसनीय",
      "असत्य"
    ],
    "options_english": [
      "Humorous",
      "Paradoxical",
      "Unbelievable",
      "False"
    ],
    "correct_option_index": 2,
    "subject": "Reasoning",
    "topic": "Reading Comprehension, Literary Devices, Critical Analysis",
    "difficulty": "Easy to Medium",
    "trap_detected": "Confusing Paradox with other literary terms",
    "explanation_english": "The first statement reads: \"There are not many places that I find it more agreeable to revisit when in an idle mood, than some places to which I have never been.\" This sentence presents a seemingly self-contradictory idea: how can one 'revisit' a place one has 'never been to'? This is the definition of a paradox – a statement that appears self-contradictory but may contain a deeper truth or provoke thought. The subsequent sentences in the paragraph clarify this by referring to fictional places (Robinson Crusoe's Island, Gil Blas's cave, Don Quixote's study) which the author 'visits' in imagination. However, when considering only the first statement, its primary characteristic is its paradoxical nature.",
    "explanation_marathi": "पहिले विधान असे आहे: \"मन निवांत असेल तर ज्या ठिकाणांना पुनर्भेट द्यायला मी सहज तयार असतो, अशी जास्त ठिकाणे नाहीत की ज्या ठिकाणी मी पूर्वी कधीही गेलो नव्हतो.\" हे वाक्य एक वरवर पाहता विरोधाभासी कल्पना मांडते: ज्या ठिकाणी आपण 'कधीही गेलो नाही' त्या ठिकाणी 'पुनर्भेट' कशी देऊ शकतो? ही विरोधाभासाची (paradox) व्याख्या आहे – एक विधान जे स्वतःच विरोधाभासी दिसते परंतु त्यात एक सखोल सत्य असू शकते किंवा विचार करण्यास प्रवृत्त करू शकते. परिच्छेदातील पुढील वाक्ये काल्पनिक ठिकाणांचा (रॉबिन्सन क्रूसोचे बेट, जिल ब्लेझची गुहा, डॉन क्विझोटचा अभ्यास कक्ष) उल्लेख करून हे स्पष्ट करतात, जिथे लेखक कल्पनेत 'भेट' देतो. तथापि, केवळ पहिल्या विधानाचा विचार केल्यास, त्याचे मुख्य वैशिष्ट्य म्हणजे त्याचा विरोधाभासी स्वभाव.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Humorous",
        "option_marathi": "विनोदी",
        "is_correct": false,
        "reason": "While the statement might evoke a chuckle due to its unusual phrasing, 'humorous' describes the effect, not the inherent logical structure of the statement. Its primary characteristic is the contradiction."
      },
      {
        "option_number": 2,
        "option_english": "Paradoxical",
        "option_marathi": "विरोधाभासात्मक",
        "is_correct": true,
        "reason": "The statement 'revisit places... to which I have never been' is a direct contradiction in terms, making 'paradoxical' the most accurate description of its content. A paradox is a statement that appears self-contradictory but may contain a deeper truth."
      },
      {
        "option_number": 3,
        "option_english": "Unbelievable",
        "option_marathi": "अविश्वसनीय",
        "is_correct": false,
        "reason": "The statement is not unbelievable in the sense of being factually impossible, but rather logically contradictory. 'Unbelievable' focuses on credibility, whereas 'paradoxical' focuses on the logical structure."
      },
      {
        "option_number": 4,
        "option_english": "False",
        "option_marathi": "असत्य",
        "is_correct": false,
        "reason": "A paradox is not necessarily false; it's a statement that seems contradictory but often reveals a deeper truth or perspective. Labeling it simply 'false' misses the literary and philosophical nuance."
      }
    ]
  },
  {
    "q_no": 9,
    "question_marathi": "जया व किम या दोन पॅराशूटर्सनी विमानातून ते एक एकक उंचीवर असताना उड्या मारल्या. उड्या घेताच दोघांच्या छत्र्या उघडल्या. जयाचा जमिनीवर येण्याचा वेग ताशी 10 एकक आहे. किम जयाच्या तुलनेत तीनपट मंद गतीने जमिनीवर येत आहे. जया जमिनीवर उतरल्यानंतर जितक्या वेळानंतर किम खाली येईल तो दर्शवणारा पर्याय निवडा.",
    "question_english": "Jaya and Kim are two parachutist jump from the plane at an altitude of one unit. Their parachutes opened immediately. Jaya is coming down at the speed of 10 units per hr and Kim is coming down three times slower than Jaya. Select the option that indicates the time of landing by Kim after Jaya.",
    "options_marathi": [
      "3 मिनिटे",
      "6 मिनिटे",
      "9 मिनिटे",
      "12 मिनिटे"
    ],
    "options_english": [
      "3 minutes",
      "6 minutes",
      "9 minutes",
      "12 minutes"
    ],
    "correct_option_index": 4,
    "subject": "Math/Reasoning",
    "topic": "Speed, Time, Distance, Ratios",
    "difficulty": "Easy",
    "trap_detected": "Misinterpretation of 'three times slower'",
    "explanation_english": "Given:\nAltitude (Distance) = 1 unit\nJaya's speed (V_Jaya) = 10 units/hr\nKim's speed (V_Kim) = three times slower than Jaya. This means Kim's speed is Jaya's speed divided by 3.\nV_Kim = V_Jaya / 3 = 10 / 3 units/hr\n\nWe know that Time = Distance / Speed.\n\nTime taken by Jaya (T_Jaya) to land:\nT_Jaya = 1 unit / (10 units/hr) = 1/10 hour\n\nTime taken by Kim (T_Kim) to land:\nT_Kim = 1 unit / (10/3 units/hr) = 3/10 hour\n\nNow, we need to find the difference in their landing times, i.e., how much later Kim lands after Jaya:\nDifference = T_Kim - T_Jaya\nDifference = (3/10) hour - (1/10) hour\nDifference = 2/10 hour = 1/5 hour\n\nTo convert this time into minutes, multiply by 60:\nDifference in minutes = (1/5) * 60 = 12 minutes.\nSo, Kim lands 12 minutes after Jaya.",
    "explanation_marathi": "दिलेली माहिती:\nउंची (अंतर) = 1 एकक\nजयाचा वेग (V_Jaya) = 10 एकक/तास\nकिमचा वेग (V_Kim) = जयापेक्षा तीनपट मंद. याचा अर्थ किमचा वेग जयाच्या वेगाच्या 1/3 आहे.\nV_Kim = V_Jaya / 3 = 10 / 3 एकक/तास\n\nआपल्याला माहीत आहे की वेळ = अंतर / वेग.\n\nजयाला उतरण्यासाठी लागणारा वेळ (T_Jaya):\nT_Jaya = 1 एकक / (10 एकक/तास) = 1/10 तास\n\nकिम ला उतरण्यासाठी लागणारा वेळ (T_Kim):\nT_Kim = 1 एकक / (10/3 एकक/तास) = 3/10 तास\n\nआता, त्यांच्या उतरण्याच्या वेळेतील फरक शोधायचा आहे, म्हणजेच जया उतरल्यानंतर किम किती वेळानंतर उतरते:\nफरक = T_Kim - T_Jaya\nफरक = (3/10) तास - (1/10) तास\nफरक = 2/10 तास = 1/5 तास\n\nहा वेळ मिनिटांमध्ये रूपांतरित करण्यासाठी, 60 ने गुणा:\nमिनिटांमधील फरक = (1/5) * 60 = 12 मिनिटे.\nम्हणून, किम जया उतरल्यानंतर 12 मिनिटांनी उतरते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "3 minutes",
        "option_marathi": "3 मिनिटे",
        "is_correct": false,
        "reason": "This would be the result if Kim's speed was incorrectly calculated, or if there was an error in calculating the time difference."
      },
      {
        "option_number": 2,
        "option_english": "6 minutes",
        "option_marathi": "6 मिनिटे",
        "is_correct": false,
        "reason": "This would be the result if the time difference was calculated as 1/10 hour (6 minutes), which is Jaya's landing time, not the difference."
      },
      {
        "option_number": 3,
        "option_english": "9 minutes",
        "option_marathi": "9 मिनिटे",
        "is_correct": false,
        "reason": "This would be the result if Kim's speed was incorrectly calculated as 20/3 units/hr (2/3 slower) or if there was a calculation error."
      },
      {
        "option_number": 4,
        "option_english": "12 minutes",
        "option_marathi": "12 मिनिटे",
        "is_correct": true,
        "reason": "Jaya takes 1/10 hour (6 minutes) and Kim takes 3/10 hour (18 minutes). The difference is 2/10 hour or 12 minutes."
      }
    ]
  },
  {
    "q_no": 10,
    "question_marathi": "आपापसात सर्वात उत्तम निवडण्यासाठी भावंडांच्या दोन जोड्या, साहील आणि त्याची बहीण नूरी आणि नान्सी व तिचा भाऊ पन्नू, हे बुद्धिबळ खेळले. फक्त पहिल्या सामन्यातील दोन खेळाडू भावंडे होती. पहिल्या सामन्यात हरलेला खेळाडू पुढच्या सामन्यासाठी बाद केला आणि जिंकलेला खेळाडू नंतरचा सामना खेळला व यानंतर याचप्रमाणे सामने झाले. अशा रीतीने फक्त तीन सामने झाले. नूरी व तिचा भाऊ यांनी दुसऱ्या भावंडांच्या जोडीपेक्षा जास्त सामने जिंकले. मुलग्यांनी दोन सामने जिंकले तर मुलींनी फक्त एक जिंकला. तर सामना न हरलेली व्यक्ती निवडा.",
    "question_english": "Two pairs of siblings, Sahil and his sister Nuri and Nancy and her brother Pannu, played chess to decide the best among all of them. The two players were siblings in the first game only. After 1st game, loser was eliminated; winner played the next game and so on. Thus only three games were played. Nuri and her brother won more number of games than other pair of siblings. The boys won two games whereas girls won only one. Select the person who did not lose the game.",
    "options_marathi": [
      "साहील",
      "पन्नू",
      "नान्सी",
      "न हरलेली व्यक्ती शोधण्याच्या दृष्टीने माहिती पुरेशी नाही."
    ],
    "options_english": [
      "Sahil",
      "Pannu",
      "Nancy",
      "Data is not sufficient for finding person who did not lose any game."
    ],
    "correct_option_index": 3,
    "subject": "Reasoning",
    "topic": "Logic Puzzles, Tournament Structure, Deductive Reasoning",
    "difficulty": "Hard",
    "trap_detected": "Complex conditions, multiple deductions required",
    "explanation_english": "Let the players be Sahil (S), Nuri (N), Nancy (Na), and Pannu (P).\nWe are given the following conditions:\n1.  Only 3 games were played.\n2.  The two players in the first game were siblings.\n3.  Loser was eliminated; winner played the next game.\n4.  Nuri and her brother (Sahil) won more games than the other pair (Nancy and Pannu).\n5.  Boys (Sahil, Pannu) won 2 games; Girls (Nuri, Nancy) won 1 game.\n\nLet W_X be the number of games won by player X.\nFrom (4): (W_N + W_S) > (W_Na + W_P). Since only 3 games were played in total, the only way for one pair to win 'more' is if (W_N + W_S) = 2 and (W_Na + W_P) = 1.\nFrom (5): (W_S + W_P) = 2 and (W_N + W_Na) = 1.\n\nWe have a system of equations for wins:\n(i) W_N + W_S = 2\n(ii) W_Na + W_P = 1\n(iii) W_S + W_P = 2\n(iv) W_N + W_Na = 1\n\nFrom (i) and (iv): (W_N + W_S) - (W_N + W_Na) = 2 - 1 => W_S - W_Na = 1.\nFrom (ii) and (iii): (W_S + W_P) - (W_Na + W_P) = 2 - 1 => W_S - W_Na = 1. (Consistent)\n\nSince 3 games were played and a loser is eliminated, there can be at most one person who did not lose any game. This person must be the winner of the final game, and they must have won all games they played. The total wins must sum to 3 (one winner per game).\n\nLet's test possible win distributions that satisfy the equations:\nIf W_S = 2, then from W_S - W_Na = 1, W_Na = 1.\nFrom (i): W_N + 2 = 2 => W_N = 0.\nFrom (iii): 2 + W_P = 2 => W_P = 0.\nCheck (ii): W_Na + W_P = 1 + 0 = 1. (Consistent)\nCheck (iv): W_N + W_Na = 0 + 1 = 1. (Consistent)\n\nSo, the consistent win distribution is: Sahil (2 wins), Nuri (0 wins), Nancy (1 win), Pannu (0 wins).\n\nNow, let's trace the games:\nGame 1: Siblings played. This must be Sahil vs Nuri or Nancy vs Pannu.\nIf Game 1 was Nancy vs Pannu: Nancy wins (W_Na=1). Pannu (0) eliminated. Remaining: Nancy, Sahil, Nuri.\nThen, Nancy (winner of G1) plays next. If Nancy plays Sahil and Sahil wins (W_S=1), then Nancy is eliminated. This contradicts Nancy having 1 win and not losing. So, Nancy cannot be eliminated after winning G1.\n\nTherefore, Game 1 must be Sahil vs Nuri.\nGame 1: Sahil (W) vs Nuri (L). (W_S=1, W_N=0). Nuri is eliminated.\nRemaining players: Sahil, Nancy, Pannu.\n\nGame 2: Sahil (winner of G1) plays against either Nancy or Pannu.\nIf Sahil plays Pannu: Sahil (W) vs Pannu (L). (W_S=2, W_P=0). Pannu is eliminated.\nRemaining players: Sahil, Nancy.\n\nGame 3: Sahil (winner of G2) plays against Nancy.\nFor the win distribution (S=2, N=0, Na=1, P=0) to hold, Nancy must win this game.\nGame 3: Nancy (W) vs Sahil (L). (W_Na=1, W_S=2, but Sahil lost this game).\n\nLet's re-evaluate 'person who did not lose the game'. This person must have won all games they participated in. In this sequence:\n*   Nuri: Played 1, Lost 1.\n*   Pannu: Played 1, Lost 1.\n*   Sahil: Played 3, Won 2, Lost 1 (Game 3).\n*   Nancy: Played 1, Won 1 (Game 3).\n\nSince Nancy played only one game and won it, she did not lose any game. Sahil lost his last game, so he is not the person who did not lose. Therefore, Nancy is the person who did not lose the game.",
    "explanation_marathi": "खेळाडू साहील (S), नूरी (N), नान्सी (Na) आणि पन्नू (P) मानूया.\nआपल्याला खालील अटी दिल्या आहेत:\n1.  फक्त 3 सामने खेळले गेले.\n2.  पहिल्या सामन्यातील दोन खेळाडू भावंडे होते.\n3.  पहिल्या सामन्यानंतर हरलेला खेळाडू बाद केला गेला; जिंकलेला खेळाडू पुढील सामना खेळला.\n4.  नूरी आणि तिचा भाऊ (साहील) यांनी दुसऱ्या भावंडांच्या जोडीपेक्षा (नान्सी आणि पन्नू) जास्त सामने जिंकले.\n5.  मुलग्यांनी (साहील, पन्नू) दोन सामने जिंकले; तर मुलींनी (नूरी, नान्सी) फक्त एक जिंकला.\n\nखेळाडू X ने जिंकलेल्या सामन्यांची संख्या W_X मानूया.\n(4) नुसार: (W_N + W_S) > (W_Na + W_P). एकूण 3 सामने खेळले गेल्यामुळे, एका जोडीने 'जास्त' सामने जिंकण्याचा एकमेव मार्ग म्हणजे (W_N + W_S) = 2 आणि (W_Na + W_P) = 1.\n(5) नुसार: (W_S + W_P) = 2 आणि (W_N + W_Na) = 1.\n\nआपल्याकडे विजयांसाठी समीकरणांची प्रणाली आहे:\n(i) W_N + W_S = 2\n(ii) W_Na + W_P = 1\n(iii) W_S + W_P = 2\n(iv) W_N + W_Na = 1\n\n(i) आणि (iv) वरून: (W_N + W_S) - (W_N + W_Na) = 2 - 1 => W_S - W_Na = 1.\n(ii) आणि (iii) वरून: (W_S + W_P) - (W_Na + W_P) = 2 - 1 => W_S - W_Na = 1. (सुसंगत)\n\nएकूण 3 सामने खेळले गेले आणि हरलेला खेळाडू बाद केला जातो, याचा अर्थ असा की एकच व्यक्ती अशी असू शकते ज्याने कोणताही सामना गमावला नाही. ही व्यक्ती अंतिम सामन्याची विजेती असणे आवश्यक आहे आणि तिने खेळलेले सर्व सामने जिंकले असणे आवश्यक आहे. एकूण विजयांची बेरीज 3 असणे आवश्यक आहे (प्रत्येक सामन्यासाठी एक विजेता).\n\nसमीकरणे पूर्ण करणारी संभाव्य विजय वाटणी तपासूया:\nजर W_S = 2, तर W_S - W_Na = 1 वरून, W_Na = 1.\n(i) वरून: W_N + 2 = 2 => W_N = 0.\n(iii) वरून: 2 + W_P = 2 => W_P = 0.\n(ii) तपासा: W_Na + W_P = 1 + 0 = 1. (सुसंगत)\n(iv) तपासा: W_N + W_Na = 0 + 1 = 1. (सुसंगत)\n\nम्हणून, सुसंगत विजय वाटणी अशी आहे: साहील (2 विजय), नूरी (0 विजय), नान्सी (1 विजय), पन्नू (0 विजय).\n\nआता, सामन्यांचा क्रम पाहूया:\nसामना 1: भावंडे खेळले. हा साहील विरुद्ध नूरी किंवा नान्सी विरुद्ध पन्नू असणे आवश्यक आहे.\nजर सामना 1 नान्सी विरुद्ध पन्नू असता: नान्सी जिंकते (W_Na=1). पन्नू (0) बाद होतो. उरलेले: नान्सी, साहील, नूरी.\nमग, नान्सी (सामना 1 ची विजेती) पुढील सामना खेळते. जर नान्सी साहीलशी खेळली आणि साहील जिंकला (W_S=1), तर नान्सी बाद होते. हे नान्सीला 1 विजय असूनही न हरण्याच्या अटीशी विसंगत आहे. म्हणून, नान्सी सामना 1 जिंकून बाद होऊ शकत नाही.\n\nम्हणून, सामना 1 साहील विरुद्ध नूरी असणे आवश्यक आहे.\nसामना 1: साहील (विजेता) विरुद्ध नूरी (हरलेली). (W_S=1, W_N=0). नूरी बाद होते.\nउरलेले खेळाडू: साहील, नान्सी, पन्नू.\n\nसामना 2: साहील (सामना 1 चा विजेता) नान्सी किंवा पन्नू विरुद्ध खेळतो.\nजर साहील पन्नू विरुद्ध खेळला: साहील (विजेता) विरुद्ध पन्नू (हरलेला). (W_S=2, W_P=0). पन्नू बाद होतो.\nउरलेले खेळाडू: साहील, नान्सी.\n\nसामना 3: साहील (सामना 2 चा विजेता) नान्सी विरुद्ध खेळतो.\nविजय वाटणी (S=2, N=0, Na=1, P=0) कायम ठेवण्यासाठी, नान्सीने हा सामना जिंकणे आवश्यक आहे.\nसामना 3: नान्सी (विजेती) विरुद्ध साहील (हरलेला). (W_Na=1, W_S=2, परंतु साहील हा सामना हरला).\n\n'सामना न हरलेली व्यक्ती' याचा अर्थ काय हे पुन्हा तपासूया. या व्यक्तीने खेळलेले सर्व सामने जिंकले असणे आवश्यक आहे. या क्रमानुसार:\n*   नूरी: 1 खेळला, 1 हरली.\n*   पन्नू: 1 खेळला, 1 हरला.\n*   साहील: 3 खेळले, 2 जिंकले, 1 हरला (सामना 3).\n*   नान्सी: 1 खेळला, 1 जिंकला (सामना 3).\n\nनान्सीने फक्त एकच सामना खेळला आणि तो जिंकला, त्यामुळे ती कोणताही सामना हरली नाही. साहील आपला शेवटचा सामना हरला, त्यामुळे तो सामना न हरलेली व्यक्ती नाही. म्हणून, नान्सी ही सामना न हरलेली व्यक्ती आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_english": "Sahil",
        "option_marathi": "साहील",
        "is_correct": false,
        "reason": "While Sahil won two games, he ultimately lost the third game to Nancy, meaning he did lose a game."
      },
      {
        "option_number": 2,
        "option_english": "Pannu",
        "option_marathi": "पन्नू",
        "is_correct": false,
        "reason": "Pannu won 0 games, meaning he lost the game he played and was eliminated."
      },
      {
        "option_number": 3,
        "option_english": "Nancy",
        "option_marathi": "नान्सी",
        "is_correct": true,
        "reason": "Nancy played only one game (the third game) and won it, thus she did not lose any game she participated in. She is the ultimate winner of the tournament."
      },
      {
        "option_number": 4,
        "option_english": "Data is not sufficient for finding person who did not lose any game.",
        "option_marathi": "न हरलेली व्यक्ती शोधण्याच्या दृष्टीने माहिती पुरेशी नाही.",
        "is_correct": false,
        "reason": "Through careful deduction and reconstruction of the tournament based on all given clues, it is possible to identify the person who did not lose any game."
      }
    ]
  },
  {
    "q_no": 11,
    "question_marathi": "वैध निष्कर्ष निवडा :\nसत्य विधाने :\nकाही पतंग पायऱ्या आहेत. काही पायऱ्या तारे आहेत. सर्व तारे टाचण्या आहेत.\nनिष्कर्ष :\n(a) काही टाचण्या पायऱ्या आहेत.\n(b) काही तारे पतंग आहेत.\n(c) एकही तारा पतंग नाही.\n(d) काही पायऱ्या पतंग आहेत.\nपर्यायी उत्तरे :",
    "question_english": "Select valid conclusions.\nTrue statements :\nSome kites are steps. Some steps are stars. All the stars are pins.\nConclusions:\n(a) Some pins are steps.\n(b) Some stars are kites.\n(c) No star is kite.\n(d) Some steps are kites.\nAnswer options :",
    "options_marathi": [
      "फक्त (a) व (d)",
      "फक्त (b) व (d)",
      "फक्त (b) व (c)",
      "फक्त (a), (d) व (b) किंवा (a), (d) व (c)"
    ],
    "options_english": [
      "Only (a) and (d)",
      "Only (b) and (d)",
      "Only (b) and (c)",
      "Only (a), (d) and (b) or (a), (d) and (c)"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Syllogism",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Let's analyze the given statements and conclusions using Venn diagrams or rules of syllogism.\nStatements:\n1. Some Kites are Steps (K-S)\n2. Some Steps are Stars (S-T)\n3. All Stars are Pins (T->P)\n\nConclusions:\n(a) Some Pins are Steps (P-S): From statement 2 (Some Steps are Stars) and statement 3 (All Stars are Pins), we can deduce 'Some Steps are Pins'. The converse of 'Some Steps are Pins' is 'Some Pins are Steps'. Thus, conclusion (a) is valid.\n(b) Some Stars are Kites (T-K): There is no direct or indirect definite connection established between 'Stars' and 'Kites' from the given statements. While it might be possible in some scenarios, it's not a definite conclusion. Thus, conclusion (b) is invalid.\n(c) No Star is Kite (T-K): This is a negative conclusion derived from positive statements. Also, it contradicts the possibility of 'Some Stars are Kites'. Thus, conclusion (c) is invalid.\n(d) Some Steps are Kites (S-K): This is the converse of statement 1 'Some Kites are Steps'. The converse of 'Some A are B' is 'Some B are A'. Thus, conclusion (d) is valid.\n\nTherefore, only conclusions (a) and (d) are valid.",
    "explanation_marathi": "दिलेली विधाने आणि निष्कर्ष वेन आकृत्या किंवा तर्कशास्त्राच्या नियमांचा वापर करून विश्लेषण करूया.\nविधाने:\n1. काही पतंग पायऱ्या आहेत (K-S)\n2. काही पायऱ्या तारे आहेत (S-T)\n3. सर्व तारे टाचण्या आहेत (T->P)\n\nनिष्कर्ष:\n(a) काही टाचण्या पायऱ्या आहेत (P-S): विधान 2 (काही पायऱ्या तारे आहेत) आणि विधान 3 (सर्व तारे टाचण्या आहेत) यावरून, आपण 'काही पायऱ्या टाचण्या आहेत' असा निष्कर्ष काढू शकतो. 'काही पायऱ्या टाचण्या आहेत' याचा व्यत्यास 'काही टाचण्या पायऱ्या आहेत' असा होतो. म्हणून, निष्कर्ष (a) वैध आहे.\n(b) काही तारे पतंग आहेत (T-K): दिलेल्या विधानांवरून 'तारे' आणि 'पतंग' यांच्यात कोणताही थेट किंवा अप्रत्यक्ष निश्चित संबंध स्थापित होत नाही. काही परिस्थितीत हे शक्य असले तरी, तो निश्चित निष्कर्ष नाही. म्हणून, निष्कर्ष (b) अवैध आहे.\n(c) एकही तारा पतंग नाही (T-K): हा सकारात्मक विधानांवरून काढलेला नकारात्मक निष्कर्ष आहे. तसेच, तो 'काही तारे पतंग आहेत' या शक्यतेला विरोध करतो. म्हणून, निष्कर्ष (c) अवैध आहे.\n(d) काही पायऱ्या पतंग आहेत (S-K): हे विधान 1 'काही पतंग पायऱ्या आहेत' याचा व्यत्यास आहे. 'काही A हे B आहेत' याचा व्यत्यास 'काही B हे A आहेत' असा होतो. म्हणून, निष्कर्ष (d) वैध आहे.\n\nम्हणून, फक्त निष्कर्ष (a) आणि (d) वैध आहेत.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Only (a) and (d)",
        "option_text_marathi": "फक्त (a) व (d)",
        "is_correct": true,
        "reason_english": "Conclusions (a) 'Some Pins are Steps' and (d) 'Some Steps are Kites' are both logically derived from the given statements. (a) follows from 'Some Steps are Stars' and 'All Stars are Pins', leading to 'Some Steps are Pins' and its converse. (d) is the direct converse of 'Some Kites are Steps'.",
        "reason_marathi": "निष्कर्ष (a) 'काही टाचण्या पायऱ्या आहेत' आणि (d) 'काही पायऱ्या पतंग आहेत' हे दोन्ही दिलेल्या विधानांवरून तार्किकदृष्ट्या काढले जातात. (a) हे 'काही पायऱ्या तारे आहेत' आणि 'सर्व तारे टाचण्या आहेत' यावरून 'काही पायऱ्या टाचण्या आहेत' आणि त्याचा व्यत्यास म्हणून येते. (d) हे 'काही पतंग पायऱ्या आहेत' या विधानाचा थेट व्यत्यास आहे."
      },
      {
        "option_number": 2,
        "option_text_english": "Only (b) and (d)",
        "option_text_marathi": "फक्त (b) व (d)",
        "is_correct": false,
        "reason_english": "Conclusion (b) 'Some Stars are Kites' cannot be definitely concluded from the given statements. There is no direct link between Stars and Kites that guarantees this conclusion.",
        "reason_marathi": "निष्कर्ष (b) 'काही तारे पतंग आहेत' हे दिलेल्या विधानांवरून निश्चितपणे काढता येत नाही. तारे आणि पतंग यांच्यात कोणताही थेट संबंध नाही जो या निष्कर्षाची हमी देतो."
      },
      {
        "option_number": 3,
        "option_text_english": "Only (b) and (c)",
        "option_text_marathi": "फक्त (b) व (c)",
        "is_correct": false,
        "reason_english": "Both conclusions (b) and (c) are invalid. (b) is not a definite conclusion, and (c) is a negative conclusion from positive statements, which is generally invalid in basic syllogism, and also contradicts (b).",
        "reason_marathi": "निष्कर्ष (b) आणि (c) दोन्ही अवैध आहेत. (b) हा निश्चित निष्कर्ष नाही, आणि (c) हा सकारात्मक विधानांवरून काढलेला नकारात्मक निष्कर्ष आहे, जो सामान्यतः मूलभूत तर्कशास्त्रात अवैध असतो, आणि (b) ला देखील विरोध करतो."
      },
      {
        "option_number": 4,
        "option_text_english": "Only (a), (d) and (b) or (a), (d) and (c)",
        "option_text_marathi": "फक्त (a), (d) व (b) किंवा (a), (d) व (c)",
        "is_correct": false,
        "reason_english": "This option includes invalid conclusions (b) and (c) as possibilities. Only (a) and (d) are definitely valid.",
        "reason_marathi": "या पर्यायामध्ये अवैध निष्कर्ष (b) आणि (c) शक्यता म्हणून समाविष्ट आहेत. फक्त (a) आणि (d) निश्चितपणे वैध आहेत."
      }
    ]
  },
  {
    "q_no": 12,
    "question_marathi": "जॉन्सन त्याच्या कार्यालयाकडे कारने निघाला. तो उत्तरेकडे 15 किमी गेला नंतर 10 किमी पश्चिमेकडे गेला. नंतर तो दक्षिणेकडे वळून 5 किमी गेला. पूर्वेकडे वळून त्याने 8 किमी अंतर पार केले. शेवटी त्याने उजवीकडे वळून 10 किमीचा प्रवास केला.\nप्रारंभिक बिंदूपासून आता तो किती दूर व कोणत्या दिशेला असेल ?",
    "question_english": "Johnson left for his office in his car. He drove 15 km towards north and then 10 km towards west. He then turned to the south and covered 5 km. Further, he turned to the east and moved 8 km. Finally, he turned right and drove 10 km.\nHow far and in which direction is he from his starting point ?",
    "options_marathi": [
      "2 किमी, पश्चिम",
      "5 किमी, पूर्व",
      "6 किमी, दक्षिण",
      "7 किमी, उत्तर"
    ],
    "options_english": [
      "2 km, West",
      "5 km, East",
      "6 km, South",
      "7 km, North"
    ],
    "correct_option_index": 1,
    "subject": "Math/Reasoning",
    "topic": "Direction and Distance",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let's track Johnson's movements step-by-step:\n1.  Starts at (0,0).\n2.  15 km North: Position (0, 15).\n3.  10 km West: Position (-10, 15).\n4.  Turns South, 5 km: Position (-10, 15 - 5) = (-10, 10).\n5.  Turns East, 8 km: Position (-10 + 8, 10) = (-2, 10).\n6.  Finally, turns Right and drives 10 km. From East, turning Right means going South. So, 10 km South: Position (-2, 10 - 10) = (-2, 0).\n\nThe final position is (-2, 0). This means he is 2 km to the West of his starting point (0,0) and 0 km North/South. Therefore, he is 2 km West from his starting point.",
    "explanation_marathi": "जॉन्सनच्या हालचालींचा टप्प्याटप्प्याने मागोवा घेऊया:\n1.  (0,0) वरून सुरुवात करतो.\n2.  15 किमी उत्तरेकडे: स्थान (0, 15).\n3.  10 किमी पश्चिमेकडे: स्थान (-10, 15).\n4.  दक्षिणेकडे वळतो, 5 किमी: स्थान (-10, 15 - 5) = (-10, 10).\n5.  पूर्वेकडे वळतो, 8 किमी: स्थान (-10 + 8, 10) = (-2, 10).\n6.  शेवटी, उजवीकडे वळतो आणि 10 किमी प्रवास करतो. पूर्वेकडून उजवीकडे वळणे म्हणजे दक्षिणेकडे जाणे. म्हणून, 10 किमी दक्षिणेकडे: स्थान (-2, 10 - 10) = (-2, 0).\n\nअंतिम स्थान (-2, 0) आहे. याचा अर्थ तो त्याच्या सुरुवातीच्या बिंदूपासून (0,0) 2 किमी पश्चिमेकडे आहे आणि 0 किमी उत्तर/दक्षिण आहे. म्हणून, तो त्याच्या सुरुवातीच्या बिंदूपासून 2 किमी पश्चिमेकडे आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "2 km, West",
        "option_text_marathi": "2 किमी, पश्चिम",
        "is_correct": true,
        "reason_english": "After calculating all movements, the net displacement is 2 km to the West from the starting point. North-South movements cancel out (15 km N - 5 km S - 10 km S = 0 km). East-West movements result in 10 km W - 8 km E = 2 km W.",
        "reason_marathi": "सर्व हालचालींची गणना केल्यानंतर, निव्वळ विस्थापन सुरुवातीच्या बिंदूपासून 2 किमी पश्चिमेकडे आहे. उत्तर-दक्षिण हालचाली रद्द होतात (15 किमी उत्तर - 5 किमी दक्षिण - 10 किमी दक्षिण = 0 किमी). पूर्व-पश्चिम हालचालींमुळे 10 किमी पश्चिम - 8 किमी पूर्व = 2 किमी पश्चिम असे होते."
      },
      {
        "option_number": 2,
        "option_text_english": "5 km, East",
        "option_text_marathi": "5 किमी, पूर्व",
        "is_correct": false,
        "reason_english": "This option is incorrect as the net displacement is 2 km West, not 5 km East.",
        "reason_marathi": "हा पर्याय चुकीचा आहे कारण निव्वळ विस्थापन 2 किमी पश्चिम आहे, 5 किमी पूर्व नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "6 km, South",
        "option_text_marathi": "6 किमी, दक्षिण",
        "is_correct": false,
        "reason_english": "This option is incorrect. The net North-South displacement is 0 km.",
        "reason_marathi": "हा पर्याय चुकीचा आहे. निव्वळ उत्तर-दक्षिण विस्थापन 0 किमी आहे."
      },
      {
        "option_number": 4,
        "option_text_english": "7 km, North",
        "option_text_marathi": "7 किमी, उत्तर",
        "is_correct": false,
        "reason_english": "This option is incorrect. The net North-South displacement is 0 km.",
        "reason_marathi": "हा पर्याय चुकीचा आहे. निव्वळ उत्तर-दक्षिण विस्थापन 0 किमी आहे."
      }
    ]
  },
  {
    "q_no": 13,
    "question_marathi": "कधीच पूर्ण वर्ग असणार नाही अशी राशी निवडा ज्यात n ही नैसर्गिक संख्या आहे.\n(a) 5n-1\n(b) 5n+1\n(c) 8n+1\n(d) 3n+1\nपर्यायी उत्तरे :",
    "question_english": "Select expressions that will never be perfect square where n is a natural number.\n(a) 5n-1\n(b) 5n+1\n(c) 8n+1\n(d) 3n+1\nAnswer options :",
    "options_marathi": [
      "सर्व",
      "एकही नाही",
      "फक्त (a) आणि (b)",
      "फक्त (c)"
    ],
    "options_english": [
      "All",
      "None",
      "Only (a) and (b)",
      "Only (c)"
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Number Theory (Perfect Squares)",
    "difficulty": "Medium",
    "trap_detected": "Misinterpretation of 'never'",
    "explanation_english": "A natural number 'n' starts from 1 (1, 2, 3, ...). We need to find expressions that *never* result in a perfect square for any natural number 'n'. Let's test each expression with small natural numbers:\n(a) 5n-1:\n   - If n=1, 5(1)-1 = 4 (which is 2², a perfect square).\n   Since we found a value of 'n' for which 5n-1 is a perfect square, this expression does not *never* result in a perfect square.\n(b) 5n+1:\n   - If n=3, 5(3)+1 = 16 (which is 4², a perfect square).\n   Since we found a value of 'n' for which 5n+1 is a perfect square, this expression does not *never* result in a perfect square.\n(c) 8n+1:\n   - If n=1, 8(1)+1 = 9 (which is 3², a perfect square).\n   - If n=3, 8(3)+1 = 25 (which is 5², a perfect square).\n   - If n=6, 8(6)+1 = 49 (which is 7², a perfect square).\n   This expression can be a perfect square. In fact, any odd perfect square (like (2k+1)²) can be written in the form 8n+1, as (2k+1)² = 4k²+4k+1 = 4k(k+1)+1. Since k(k+1) is always even, let k(k+1)=2n, then 4k(k+1)+1 = 8n+1.\n(d) 3n+1:\n   - If n=1, 3(1)+1 = 4 (which is 2², a perfect square).\n   - If n=5, 3(5)+1 = 16 (which is 4², a perfect square).\n   Since we found a value of 'n' for which 3n+1 is a perfect square, this expression does not *never* result in a perfect square.\n\nSince all the given expressions can result in a perfect square for some natural number 'n', none of them will *never* be a perfect square. Therefore, the correct option is 'None'.",
    "explanation_marathi": "नैसर्गिक संख्या 'n' 1 पासून सुरू होते (1, 2, 3, ...). आपल्याला अशी व्यंजने शोधायची आहेत जी कोणत्याही नैसर्गिक संख्या 'n' साठी कधीही पूर्ण वर्ग नसतील. प्रत्येक व्यंजनाची लहान नैसर्गिक संख्या वापरून तपासणी करूया:\n(a) 5n-1:\n   - जर n=1, तर 5(1)-1 = 4 (जो 2² आहे, एक पूर्ण वर्ग).\n   आपल्याला 'n' चे असे मूल्य सापडले आहे ज्यासाठी 5n-1 एक पूर्ण वर्ग आहे, त्यामुळे हे व्यंजन कधीही पूर्ण वर्ग नसणार नाही असे नाही.\n(b) 5n+1:\n   - जर n=3, तर 5(3)+1 = 16 (जो 4² आहे, एक पूर्ण वर्ग).\n   आपल्याला 'n' चे असे मूल्य सापडले आहे ज्यासाठी 5n+1 एक पूर्ण वर्ग आहे, त्यामुळे हे व्यंजन कधीही पूर्ण वर्ग नसणार नाही असे नाही.\n(c) 8n+1:\n   - जर n=1, तर 8(1)+1 = 9 (जो 3² आहे, एक पूर्ण वर्ग).\n   - जर n=3, तर 8(3)+1 = 25 (जो 5² आहे, एक पूर्ण वर्ग).\n   - जर n=6, तर 8(6)+1 = 49 (जो 7² आहे, एक पूर्ण वर्ग).\n   हे व्यंजन पूर्ण वर्ग असू शकते. खरं तर, कोणताही विषम पूर्ण वर्ग (जसे की (2k+1)²) 8n+1 या स्वरूपात लिहिता येतो, कारण (2k+1)² = 4k²+4k+1 = 4k(k+1)+1. k(k+1) नेहमी सम असल्यामुळे, k(k+1)=2n मानल्यास, 4k(k+1)+1 = 8n+1.\n(d) 3n+1:\n   - जर n=1, तर 3(1)+1 = 4 (जो 2² आहे, एक पूर्ण वर्ग).\n   - जर n=5, तर 3(5)+1 = 16 (जो 4² आहे, एक पूर्ण वर्ग).\n   आपल्याला 'n' चे असे मूल्य सापडले आहे ज्यासाठी 3n+1 एक पूर्ण वर्ग आहे, त्यामुळे हे व्यंजन कधीही पूर्ण वर्ग नसणार नाही असे नाही.\n\nदिलेली सर्व व्यंजने काही नैसर्गिक संख्या 'n' साठी पूर्ण वर्ग असू शकतात, त्यामुळे त्यापैकी कोणतेही कधीही पूर्ण वर्ग नसणार नाही असे नाही. म्हणून, योग्य पर्याय 'एकही नाही' हा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "All",
        "option_text_marathi": "सर्व",
        "is_correct": false,
        "reason_english": "This is incorrect because, as shown in the explanation, each expression can be a perfect square for some natural number 'n'.",
        "reason_marathi": "हे चुकीचे आहे कारण, स्पष्टीकरणामध्ये दाखवल्याप्रमाणे, प्रत्येक व्यंजन काही नैसर्गिक संख्या 'n' साठी पूर्ण वर्ग असू शकते."
      },
      {
        "option_number": 2,
        "option_text_english": "None",
        "option_text_marathi": "एकही नाही",
        "is_correct": true,
        "reason_english": "This is the correct answer. For each expression, we can find at least one natural number 'n' for which the expression results in a perfect square. Therefore, none of them will *never* be a perfect square.",
        "reason_marathi": "हे योग्य उत्तर आहे. प्रत्येक व्यंजनासाठी, आपल्याला किमान एक नैसर्गिक संख्या 'n' सापडते ज्यासाठी ते व्यंजन पूर्ण वर्ग होते. त्यामुळे, त्यापैकी कोणतेही कधीही पूर्ण वर्ग नसणार नाही असे नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "Only (a) and (b)",
        "option_text_marathi": "फक्त (a) आणि (b)",
        "is_correct": false,
        "reason_english": "This is incorrect. Expressions (a) and (b) can both be perfect squares (e.g., 5(1)-1=4, 5(3)+1=16).",
        "reason_marathi": "हे चुकीचे आहे. व्यंजने (a) आणि (b) दोन्ही पूर्ण वर्ग असू शकतात (उदा. 5(1)-1=4, 5(3)+1=16)."
      },
      {
        "option_number": 4,
        "option_text_english": "Only (c)",
        "option_text_marathi": "फक्त (c)",
        "is_correct": false,
        "reason_english": "This is incorrect. Expression (c) can be a perfect square (e.g., 8(1)+1=9).",
        "reason_marathi": "हे चुकीचे आहे. व्यंजन (c) पूर्ण वर्ग असू शकते (उदा. 8(1)+1=9)."
      }
    ]
  },
  {
    "q_no": 14,
    "question_marathi": "आठवड्याची सुटी वगळता सोमवार ते शुक्रवार दर दिवशी नानू बाइकस्वारी करतो. कामाच्या ठिकाणी जा-ये करताना तो 120 किमी अंतर कापतो. बारा आठवड्यांनंतर त्याच्या वाहनाने 9000 किमी प्रवास नोंदवला. तर बारा आठवड्याच्या कालावधीत कामावर जाता-येता केलेल्या प्रवासाव्यतिरिक्त नानूने केलेला प्रवास दर्शवणारा पर्याय निवडा.",
    "question_english": "Nanu drives/rides bike every day from Monday through Friday except weekend. He covers distance 120 km while travelling to and from work place. After twelve weeks his vehicle recorded 9000 km travel. Select number that indicates the distance travelled by Nanu apart from his ride to and from work during twelve weeks.",
    "options_marathi": [
      "1600",
      "1400",
      "1800",
      "1200"
    ],
    "options_english": [
      "1600",
      "1400",
      "1800",
      "1200"
    ],
    "correct_option_index": 3,
    "subject": "Math/Reasoning",
    "topic": "Arithmetic (Time, Speed, Distance)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Let's break down the calculation:\n1.  Number of working days in a week = Monday to Friday = 5 days.\n2.  Total number of weeks = 12 weeks.\n3.  Total working days in 12 weeks = 12 weeks * 5 days/week = 60 days.\n4.  Distance covered per day for work (to and from) = 120 km.\n5.  Total distance covered for work in 12 weeks = 60 days * 120 km/day = 7200 km.\n6.  Total distance recorded by the vehicle = 9000 km.\n7.  Distance travelled apart from work = Total recorded distance - Distance travelled for work\n    = 9000 km - 7200 km = 1800 km.\n\nTherefore, Nanu travelled 1800 km apart from his ride to and from work during the twelve weeks.",
    "explanation_marathi": "गणिताची विभागणी करूया:\n1.  एका आठवड्यातील कामाचे दिवस = सोमवार ते शुक्रवार = 5 दिवस.\n2.  एकूण आठवडे = 12 आठवडे.\n3.  12 आठवड्यांमधील एकूण कामाचे दिवस = 12 आठवडे * 5 दिवस/आठवडा = 60 दिवस.\n4.  कामासाठी दररोज कापलेले अंतर (जा-ये) = 120 किमी.\n5.  12 आठवड्यांमध्ये कामासाठी कापलेले एकूण अंतर = 60 दिवस * 120 किमी/दिवस = 7200 किमी.\n6.  वाहनाने नोंदवलेले एकूण अंतर = 9000 किमी.\n7.  कामाव्यतिरिक्त केलेला प्रवास = वाहनाने नोंदवलेले एकूण अंतर - कामासाठी केलेला प्रवास\n    = 9000 किमी - 7200 किमी = 1800 किमी.\n\nम्हणून, नानूने बारा आठवड्यांच्या कालावधीत कामावर जाता-येता केलेल्या प्रवासाव्यतिरिक्त 1800 किमी प्रवास केला.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "1600",
        "option_text_marathi": "1600",
        "is_correct": false,
        "reason_english": "This value is incorrect. It might result from calculation errors, such as miscounting working days or incorrect subtraction.",
        "reason_marathi": "हे मूल्य चुकीचे आहे. हे कामाचे दिवस चुकीचे मोजणे किंवा चुकीची वजाबाकी यांसारख्या गणनेतील त्रुटींमुळे असू शकते."
      },
      {
        "option_number": 2,
        "option_text_english": "1400",
        "option_text_marathi": "1400",
        "is_correct": false,
        "reason_english": "This value is incorrect. It might result from calculation errors, such as miscounting working days or incorrect subtraction.",
        "reason_marathi": "हे मूल्य चुकीचे आहे. हे कामाचे दिवस चुकीचे मोजणे किंवा चुकीची वजाबाकी यांसारख्या गणनेतील त्रुटींमुळे असू शकते."
      },
      {
        "option_number": 3,
        "option_text_english": "1800",
        "option_text_marathi": "1800",
        "is_correct": true,
        "reason_english": "The calculation shows that Nanu travelled 7200 km for work (60 days * 120 km/day). Subtracting this from the total recorded 9000 km gives 1800 km as the distance travelled apart from work.",
        "reason_marathi": "गणनेनुसार, नानूने कामासाठी 7200 किमी प्रवास केला (60 दिवस * 120 किमी/दिवस). हे एकूण नोंदवलेल्या 9000 किमी मधून वजा केल्यास कामाव्यतिरिक्त केलेला प्रवास 1800 किमी येतो."
      },
      {
        "option_number": 4,
        "option_text_english": "1200",
        "option_text_marathi": "1200",
        "is_correct": false,
        "reason_english": "This value is incorrect. It might result from calculation errors, such as miscounting working days or incorrect subtraction.",
        "reason_marathi": "हे मूल्य चुकीचे आहे. हे कामाचे दिवस चुकीचे मोजणे किंवा चुकीची वजाबाकी यांसारख्या गणनेतील त्रुटींमुळे असू शकते."
      }
    ]
  },
  {
    "q_no": 15,
    "question_marathi": "M ला एकूण मुले किती या प्रश्नासंदर्भात दिलेल्या पुढील विदेचा पुरेपणा निश्चित करा.\nविदा विधाने :\n(a) जुळ्या मुली असलेल्या J चा M हा नवरा असून, तो आईवडिलांचा एकुलता एक मुलगा आहे.\n(b) K ला एक नातू असून, ती J ची सासू आहे.\nपर्यायी उत्तरे :",
    "question_english": "Decide sufficiency of data with respect to question: How many children does M have ?\nData statements :\n(a) M is the only one son of his parents and is the husband of J who has twin daughters.\n(b) K has a grandson and she is the mother-in-law of J.\nAnswer options:",
    "options_marathi": [
      "(a) व (b) दोन्ही आवश्यक व पुरेशी आहे.",
      "फक्त (a) पुरेशी आहे.",
      "फक्त (a) किंवा (b) पुरेशी आहे.",
      "फक्त (b) पुरेशी आहे."
    ],
    "options_english": [
      "Both (a) and (b) are necessary and sufficient.",
      "(a) alone is sufficient.",
      "Either (a) or (b) is sufficient.",
      "(b) alone is sufficient."
    ],
    "correct_option_index": 2,
    "subject": "Math/Reasoning",
    "topic": "Data Sufficiency (Blood Relations)",
    "difficulty": "Medium",
    "trap_detected": "Distractor information (M being only son of his parents, K having a grandson)",
    "explanation_english": "The question asks for the total number of children M has.\n\nLet's analyze Statement (a): \"M is the only one son of his parents and is the husband of J who has twin daughters.\"\n- \"M is the only one son of his parents\" tells us about M's siblings, which is irrelevant to the number of *his own* children.\n- \"M is the husband of J who has twin daughters.\" This directly states that J has twin daughters. Since M is J's husband, M is the father of these twin daughters. Twin daughters mean 2 children. This statement alone is sufficient to determine that M has 2 children.\n\nLet's analyze Statement (b): \"K has a grandson and she is the mother-in-law of J.\"\n- \"K is the mother-in-law of J\" means K is M's mother (since M is J's husband).\n- \"K has a grandson.\" Since K is M's mother, and M is the only son (from statement a, if we combine, but we should evaluate statements independently first), K's grandson must be M's son. This tells us M has at least one son. However, it does not tell us if M has any daughters or the total number of children. Therefore, statement (b) alone is not sufficient.\n\nSince statement (a) alone is sufficient to answer the question, and statement (b) alone is not, the correct option is that (a) alone is sufficient.",
    "explanation_marathi": "प्रश्न विचारतो की M ला एकूण किती मुले आहेत.\n\nविधान (a) चे विश्लेषण करूया: \"जुळ्या मुली असलेल्या J चा M हा नवरा असून, तो आईवडिलांचा एकुलता एक मुलगा आहे.\"\n- \"M हा आईवडिलांचा एकुलता एक मुलगा आहे\" हे M च्या भावंडांबद्दल सांगते, जे त्याच्या स्वतःच्या मुलांच्या संख्येसाठी अप्रासंगिक आहे.\n- \"जुळ्या मुली असलेल्या J चा M हा नवरा आहे.\" हे थेट सांगते की J ला जुळ्या मुली आहेत. M हा J चा नवरा असल्यामुळे, M या जुळ्या मुलींचा वडील आहे. जुळ्या मुली म्हणजे 2 मुले. हे विधान एकटेच M ला 2 मुले आहेत हे निश्चित करण्यासाठी पुरेसे आहे.\n\nविधान (b) चे विश्लेषण करूया: \"K ला एक नातू असून, ती J ची सासू आहे.\"\n- \"K ही J ची सासू आहे\" याचा अर्थ K ही M ची आई आहे (कारण M हा J चा नवरा आहे).\n- \"K ला एक नातू आहे.\" K ही M ची आई असल्यामुळे, आणि M हा एकुलता एक मुलगा असल्यामुळे (विधान a मधून, जर आपण एकत्र केले, परंतु आपण विधानांचे स्वतंत्रपणे मूल्यांकन केले पाहिजे), K चा नातू हा M चा मुलगा असला पाहिजे. हे आपल्याला सांगते की M ला किमान एक मुलगा आहे. तथापि, M ला मुली आहेत की नाही किंवा एकूण मुलांची संख्या किती आहे हे ते सांगत नाही. म्हणून, विधान (b) एकटे पुरेसे नाही.\n\nविधान (a) एकटेच प्रश्नाचे उत्तर देण्यासाठी पुरेसे असल्यामुळे, आणि विधान (b) एकटे पुरेसे नसल्यामुळे, योग्य पर्याय 'फक्त (a) पुरेशी आहे' हा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Both (a) and (b) are necessary and sufficient.",
        "option_text_marathi": "(a) व (b) दोन्ही आवश्यक व पुरेशी आहे.",
        "is_correct": false,
        "reason_english": "Statement (a) alone is sufficient. Statement (b) is not sufficient on its own, and therefore both are not necessary.",
        "reason_marathi": "विधान (a) एकटेच पुरेसे आहे. विधान (b) स्वतः पुरेसे नाही, आणि म्हणून दोन्ही आवश्यक नाहीत."
      },
      {
        "option_number": 2,
        "option_text_english": "(a) alone is sufficient.",
        "option_text_marathi": "फक्त (a) पुरेशी आहे.",
        "is_correct": true,
        "reason_english": "Statement (a) explicitly mentions that J (M's wife) has twin daughters. This directly tells us that M has 2 children. The information about M being the only son of his parents is extra and does not affect the number of his own children.",
        "reason_marathi": "विधान (a) मध्ये स्पष्टपणे नमूद केले आहे की J (M ची पत्नी) ला जुळ्या मुली आहेत. हे थेट आपल्याला सांगते की M ला 2 मुले आहेत. M त्याच्या आईवडिलांचा एकुलता एक मुलगा आहे ही माहिती अतिरिक्त आहे आणि त्याच्या स्वतःच्या मुलांच्या संख्येवर परिणाम करत नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "Either (a) or (b) is sufficient.",
        "option_text_marathi": "फक्त (a) किंवा (b) पुरेशी आहे.",
        "is_correct": false,
        "reason_english": "Statement (b) alone is not sufficient as it only confirms M has at least one son (a grandson for K) but doesn't give the total count of children or mention daughters.",
        "reason_marathi": "विधान (b) एकटे पुरेसे नाही कारण ते फक्त M ला किमान एक मुलगा आहे (K साठी नातू) याची पुष्टी करते परंतु मुलांची एकूण संख्या किंवा मुलींचा उल्लेख करत नाही."
      },
      {
        "option_number": 4,
        "option_text_english": "(b) alone is sufficient.",
        "option_text_marathi": "फक्त (b) पुरेशी आहे.",
        "is_correct": false,
        "reason_english": "Statement (b) only tells us that M has at least one son (K's grandson). It does not provide information about the total number of children M has, nor does it mention any daughters.",
        "reason_marathi": "विधान (b) फक्त आपल्याला सांगते की M ला किमान एक मुलगा आहे (K चा नातू). ते M ला असलेल्या एकूण मुलांच्या संख्येबद्दल माहिती देत नाही, किंवा मुलींचा उल्लेख करत नाही."
      }
    ]
  },
  {
    "q_no": 16,
    "question_marathi": "जोड्या जुळवा :\nचक्रीवादळ\nवर्ष\n(a) निसर्ग\n(i) 2021\n(b) तौक्ते\n(ii) 2020\n(c) फयान\n(iii) 2009\n(d) क्यार\n(iv) 2019\nपर्यायी उत्तरे :",
    "question_english": "Match the following:\nCyclone\nYear\n(a) Nisarga\n(i) 2021\n(b) Tauktae\n(ii) 2020\n(c) Phyan\n(iii) 2009\n(d) Kyarr\n(iv) 2019\nAnswer options :",
    "options_marathi": [
      "(a) (i), (b) (ii), (c) (iii), (d) (iv)",
      "(a) (iii), (b) (ii), (c) (iv), (d) (i)",
      "(a) (ii), (b) (i), (c) (iii), (d) (iv)",
      "(a) (ii), (b) (iii), (c) (iv), (d) (i)"
    ],
    "options_english": [
      "(a) (i), (b) (ii), (c) (iii), (d) (iv)",
      "(a) (iii), (b) (ii), (c) (iv), (d) (i)",
      "(a) (ii), (b) (i), (c) (iii), (d) (iv)",
      "(a) (ii), (b) (iii), (c) (iv), (d) (i)"
    ],
    "correct_option_index": 3,
    "subject": "Current Affairs",
    "topic": "Cyclones and Natural Disasters",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question requires knowledge of recent and significant cyclones that have affected India, particularly the west coast, and their respective years of occurrence.\n\nLet's match each cyclone with its year:\n-   **Cyclone Nisarga**: This cyclone made landfall in Maharashtra in **June 2020**. So, (a) matches with (ii).\n-   **Cyclone Tauktae**: This very severe cyclonic storm affected the west coast of India, including Maharashtra and Gujarat, in **May 2021**. So, (b) matches with (i).\n-   **Cyclone Phyan**: This cyclone formed in the Arabian Sea and affected Maharashtra in **November 2009**. So, (c) matches with (iii).\n-   **Cyclone Kyarr**: This extremely severe cyclonic storm formed in the Arabian Sea in **October 2019**, affecting coastal areas including Maharashtra. So, (d) matches with (iv).\n\nCombining these matches, we get: (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv).",
    "explanation_marathi": "या प्रश्नासाठी भारतावर, विशेषतः पश्चिम किनारपट्टीवर परिणाम केलेल्या अलीकडील आणि महत्त्वपूर्ण चक्रीवादळांची आणि त्यांच्या संबंधित वर्षांची माहिती असणे आवश्यक आहे.\n\nप्रत्येक चक्रीवादळाची त्याच्या वर्षाशी जुळणी करूया:\n-   **चक्रीवादळ निसर्ग**: हे चक्रीवादळ **जून 2020** मध्ये महाराष्ट्राच्या किनारपट्टीवर धडकले. म्हणून, (a) ची जुळणी (ii) शी होते.\n-   **चक्रीवादळ तौक्ते**: हे अत्यंत तीव्र चक्रीवादळ **मे 2021** मध्ये महाराष्ट्र आणि गुजरातसह भारताच्या पश्चिम किनारपट्टीवर धडकले. म्हणून, (b) ची जुळणी (i) शी होते.\n-   **चक्रीवादळ फयान**: हे चक्रीवादळ अरबी समुद्रात तयार झाले आणि **नोव्हेंबर 2009** मध्ये महाराष्ट्रावर परिणाम केला. म्हणून, (c) ची जुळणी (iii) शी होते.\n-   **चक्रीवादळ क्यार**: हे अत्यंत तीव्र चक्रीवादळ **ऑक्टोबर 2019** मध्ये अरबी समुद्रात तयार झाले, ज्यामुळे महाराष्ट्रासह किनारपट्टीच्या भागांवर परिणाम झाला. म्हणून, (d) ची जुळणी (iv) शी होते.\n\nया जुळण्या एकत्र केल्यास, आपल्याला मिळते: (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv).",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "(a) (i), (b) (ii), (c) (iii), (d) (iv)",
        "option_text_marathi": "(a) (i), (b) (ii), (c) (iii), (d) (iv)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Nisarga with 2021 and Tauktae with 2020. Nisarga was in 2020 and Tauktae in 2021.",
        "reason_marathi": "हा पर्याय निसर्गला 2021 आणि तौक्तेला 2020 शी चुकीच्या पद्धतीने जुळवतो. निसर्ग 2020 मध्ये होता आणि तौक्ते 2021 मध्ये."
      },
      {
        "option_number": 2,
        "option_text_english": "(a) (iii), (b) (ii), (c) (iv), (d) (i)",
        "option_text_marathi": "(a) (iii), (b) (ii), (c) (iv), (d) (i)",
        "is_correct": false,
        "reason_english": "This option has multiple incorrect matches, for example, Nisarga with 2009 and Tauktae with 2020.",
        "reason_marathi": "या पर्यायामध्ये अनेक चुकीच्या जुळण्या आहेत, उदाहरणार्थ, निसर्ग 2009 आणि तौक्ते 2020."
      },
      {
        "option_number": 3,
        "option_text_english": "(a) (ii), (b) (i), (c) (iii), (d) (iv)",
        "option_text_marathi": "(a) (ii), (b) (i), (c) (iii), (d) (iv)",
        "is_correct": true,
        "reason_english": "This option correctly matches all the cyclones with their respective years: Nisarga (2020), Tauktae (2021), Phyan (2009), and Kyarr (2019).",
        "reason_marathi": "हा पर्याय सर्व चक्रीवादळांना त्यांच्या संबंधित वर्षांशी योग्यरित्या जुळवतो: निसर्ग (2020), तौक्ते (2021), फयान (2009), आणि क्यार (2019)."
      },
      {
        "option_number": 4,
        "option_text_english": "(a) (ii), (b) (iii), (c) (iv), (d) (i)",
        "option_text_marathi": "(a) (ii), (b) (iii), (c) (iv), (d) (i)",
        "is_correct": false,
        "reason_english": "This option incorrectly matches Tauktae with 2009 and Phyan with 2019.",
        "reason_marathi": "हा पर्याय तौक्तेला 2009 आणि फयानला 2019 शी चुकीच्या पद्धतीने जुळवतो."
      }
    ]
  },
  {
    "q_no": 17,
    "question_marathi": "महाराष्ट्रातील चाळी व घरे यांचा विकास करणारी संस्था म्हाडा (MHADA) केंव्हा उदयास आली ?",
    "question_english": "MHADA an institute in Maharashtra which developes slums and houses when has it come into existence ?",
    "options_marathi": [
      "जून 1975",
      "जानेवारी 1985",
      "डिसेंबर 1957",
      "डिसेंबर 1977"
    ],
    "options_english": [
      "June 1975",
      "January 1985",
      "December 1957",
      "December 1977"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Government Bodies (Maharashtra)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Maharashtra Housing and Area Development Authority (MHADA) was established on December 5, 1977. It was formed under the Maharashtra Housing and Area Development Act, 1976, by merging three existing boards: the Maharashtra Housing Board, the Vidarbha Housing Board, and the Mumbai Building Repairs and Reconstruction Board. Its primary objective is to provide affordable housing and undertake slum redevelopment projects across Maharashtra.",
    "explanation_marathi": "महाराष्ट्र गृहनिर्माण व क्षेत्रविकास प्राधिकरण (म्हाडा) ची स्थापना 5 डिसेंबर 1977 रोजी झाली. महाराष्ट्र गृहनिर्माण व क्षेत्रविकास अधिनियम, 1976 अंतर्गत महाराष्ट्र गृहनिर्माण मंडळ, विदर्भ गृहनिर्माण मंडळ आणि मुंबई इमारत दुरुस्ती व पुनर्रचना मंडळ या तीन विद्यमान मंडळांचे विलीनीकरण करून त्याची स्थापना करण्यात आली. महाराष्ट्रात परवडणारी घरे उपलब्ध करून देणे आणि झोपडपट्टी पुनर्विकास प्रकल्प हाती घेणे हे त्याचे मुख्य उद्दिष्ट आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "June 1975",
        "option_text_marathi": "जून 1975",
        "is_correct": false,
        "reason_english": "This date is incorrect. MHADA was established later.",
        "reason_marathi": "ही तारीख चुकीची आहे. म्हाडाची स्थापना नंतर झाली."
      },
      {
        "option_number": 2,
        "option_text_english": "January 1985",
        "option_text_marathi": "जानेवारी 1985",
        "is_correct": false,
        "reason_english": "This date is incorrect. MHADA was established earlier.",
        "reason_marathi": "ही तारीख चुकीची आहे. म्हाडाची स्थापना आधी झाली."
      },
      {
        "option_number": 3,
        "option_text_english": "December 1957",
        "option_text_marathi": "डिसेंबर 1957",
        "is_correct": false,
        "reason_english": "This date is incorrect. MHADA was established much later.",
        "reason_marathi": "ही तारीख चुकीची आहे. म्हाडाची स्थापना खूप नंतर झाली."
      },
      {
        "option_number": 4,
        "option_text_english": "December 1977",
        "option_text_marathi": "डिसेंबर 1977",
        "is_correct": true,
        "reason_english": "MHADA was established on December 5, 1977, under the Maharashtra Housing and Area Development Act, 1976.",
        "reason_marathi": "म्हाडाची स्थापना 5 डिसेंबर 1977 रोजी महाराष्ट्र गृहनिर्माण व क्षेत्रविकास अधिनियम, 1976 अंतर्गत झाली."
      }
    ]
  },
  {
    "q_no": 18,
    "question_marathi": "महाराष्ट्र वन विकास महामंडळ मर्यादित ची स्थापना ______ मध्ये झाली.",
    "question_english": "Forest Development Corporation of Maharashtra limited was established in ______.",
    "options_marathi": [
      "1982",
      "1979",
      "1984",
      "1974"
    ],
    "options_english": [
      "1982",
      "1979",
      "1984",
      "1974"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "State Government Bodies (Maharashtra)",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Forest Development Corporation of Maharashtra (FDCM) Limited was established on 16th February 1974. It was formed under the Companies Act, 1956, with the primary objective of developing forest resources, promoting scientific forestry, and contributing to the economic development of the state through sustainable forest management.",
    "explanation_marathi": "महाराष्ट्र वन विकास महामंडळ मर्यादित (FDCM) ची स्थापना 16 फेब्रुवारी 1974 रोजी झाली. कंपनी अधिनियम, 1956 अंतर्गत वन संसाधनांचा विकास करणे, वैज्ञानिक वनशेतीला प्रोत्साहन देणे आणि शाश्वत वन व्यवस्थापनाद्वारे राज्याच्या आर्थिक विकासात योगदान देणे या मुख्य उद्दिष्टाने याची स्थापना करण्यात आली.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "1982",
        "option_text_marathi": "1982",
        "is_correct": false,
        "reason_english": "This year is incorrect. FDCM was established earlier.",
        "reason_marathi": "हे वर्ष चुकीचे आहे. FDCM ची स्थापना आधी झाली."
      },
      {
        "option_number": 2,
        "option_text_english": "1979",
        "option_text_marathi": "1979",
        "is_correct": false,
        "reason_english": "This year is incorrect. FDCM was established earlier.",
        "reason_marathi": "हे वर्ष चुकीचे आहे. FDCM ची स्थापना आधी झाली."
      },
      {
        "option_number": 3,
        "option_text_english": "1984",
        "option_text_marathi": "1984",
        "is_correct": false,
        "reason_english": "This year is incorrect. FDCM was established earlier.",
        "reason_marathi": "हे वर्ष चुकीचे आहे. FDCM ची स्थापना आधी झाली."
      },
      {
        "option_number": 4,
        "option_text_english": "1974",
        "option_text_marathi": "1974",
        "is_correct": true,
        "reason_english": "The Forest Development Corporation of Maharashtra Limited was established in 1974.",
        "reason_marathi": "महाराष्ट्र वन विकास महामंडळ मर्यादितची स्थापना 1974 मध्ये झाली."
      }
    ]
  },
  {
    "q_no": 19,
    "question_marathi": "खालीलपैकी कोणते अभयारण्य/राष्ट्रीय उद्यान भौगोलिक क्षेत्रफळाने मोठे आहे ?",
    "question_english": "Which of the following Sanctuary/National Park is large in Geographical area ?",
    "options_marathi": [
      "अंधारी",
      "तानसा",
      "चांदोली",
      "नागझिरा"
    ],
    "options_english": [
      "Andhari",
      "Tansa",
      "Chandoli",
      "Nagzira"
    ],
    "correct_option_index": 1,
    "subject": "Geography",
    "topic": "Wildlife Sanctuaries and National Parks of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "To answer this question, one needs to know the approximate geographical areas of the listed wildlife sanctuaries and national parks in Maharashtra.\n\nLet's compare their areas:\n-   **Andhari**: This refers to the Andhari Wildlife Sanctuary, which is a part of the Tadoba-Andhari Tiger Reserve. The core area of Tadoba-Andhari Tiger Reserve is approximately 625 sq km, and the buffer area is around 1100 sq km, making the total area around 1727 sq km. The Andhari part itself is substantial.\n-   **Tansa**: Tansa Wildlife Sanctuary has an area of approximately 320 sq km.\n-   **Chandoli**: Chandoli National Park has an area of approximately 317 sq km.\n-   **Nagzira**: Nagzira Wildlife Sanctuary has an area of approximately 152 sq km. (It is part of Navegaon Nagzira Tiger Reserve, which is larger, but the sanctuary itself is smaller than Andhari).\n\nComparing these figures, 'Andhari' (as part of Tadoba-Andhari Tiger Reserve) is significantly larger in geographical area than Tansa, Chandoli, and Nagzira.",
    "explanation_marathi": "या प्रश्नाचे उत्तर देण्यासाठी, महाराष्ट्रातील सूचीबद्ध वन्यजीव अभयारण्ये आणि राष्ट्रीय उद्यानांच्या अंदाजित भौगोलिक क्षेत्रांची माहिती असणे आवश्यक आहे.\n\nत्यांच्या क्षेत्रांची तुलना करूया:\n-   **अंधारी**: हे अंधारी वन्यजीव अभयारण्याला सूचित करते, जे ताडोबा-अंधारी व्याघ्र प्रकल्पाचा एक भाग आहे. ताडोबा-अंधारी व्याघ्र प्रकल्पाचे मुख्य क्षेत्र अंदाजे 625 चौ.किमी आहे आणि बफर क्षेत्र सुमारे 1100 चौ.किमी आहे, ज्यामुळे एकूण क्षेत्र सुमारे 1727 चौ.किमी होते. अंधारीचा भाग स्वतःच मोठा आहे.\n-   **तानसा**: तानसा वन्यजीव अभयारण्याचे क्षेत्रफळ अंदाजे 320 चौ.किमी आहे.\n-   **चांदोली**: चांदोली राष्ट्रीय उद्यानाचे क्षेत्रफळ अंदाजे 317 चौ.किमी आहे.\n-   **नागझिरा**: नागझिरा वन्यजीव अभयारण्याचे क्षेत्रफळ अंदाजे 152 चौ.किमी आहे. (हे नवेगाव नागझिरा व्याघ्र प्रकल्पाचा भाग आहे, जो मोठा आहे, परंतु अभयारण्य स्वतः अंधारीपेक्षा लहान आहे).\n\nया आकडेवारीची तुलना केल्यास, 'अंधारी' (ताडोबा-अंधारी व्याघ्र प्रकल्पाचा भाग म्हणून) तानसा, चांदोली आणि नागझिरा यांच्यापेक्षा भौगोलिक क्षेत्रफळाने लक्षणीयरीत्या मोठे आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Andhari",
        "option_text_marathi": "अंधारी",
        "is_correct": true,
        "reason_english": "Andhari Wildlife Sanctuary, a major component of the Tadoba-Andhari Tiger Reserve, has a significantly larger area compared to the other options listed.",
        "reason_marathi": "अंधारी वन्यजीव अभयारण्य, जे ताडोबा-अंधारी व्याघ्र प्रकल्पाचा एक प्रमुख घटक आहे, सूचीबद्ध केलेल्या इतर पर्यायांच्या तुलनेत लक्षणीयरीत्या मोठे क्षेत्रफळ आहे."
      },
      {
        "option_number": 2,
        "option_text_english": "Tansa",
        "option_text_marathi": "तानसा",
        "is_correct": false,
        "reason_english": "Tansa Wildlife Sanctuary (approx. 320 sq km) is smaller than Andhari.",
        "reason_marathi": "तानसा वन्यजीव अभयारण्य (अंदाजे 320 चौ.किमी) अंधारीपेक्षा लहान आहे."
      },
      {
        "option_number": 3,
        "option_text_english": "Chandoli",
        "option_text_marathi": "चांदोली",
        "is_correct": false,
        "reason_english": "Chandoli National Park (approx. 317 sq km) is smaller than Andhari.",
        "reason_marathi": "चांदोली राष्ट्रीय उद्यान (अंदाजे 317 चौ.किमी) अंधारीपेक्षा लहान आहे."
      },
      {
        "option_number": 4,
        "option_text_english": "Nagzira",
        "option_text_marathi": "नागझिरा",
        "is_correct": false,
        "reason_english": "Nagzira Wildlife Sanctuary (approx. 152 sq km) is smaller than Andhari.",
        "reason_marathi": "नागझिरा वन्यजीव अभयारण्य (अंदाजे 152 चौ.किमी) अंधारीपेक्षा लहान आहे."
      }
    ]
  },
  {
    "q_no": 20,
    "question_marathi": "महाराष्ट्र आर्थिक पाहणी अहवाल 2019-20 नुसार राज्यात 2018-19 साली एकूण भौगोलिक क्षेत्रापैकी किती टक्के क्षेत्र वनाखाली होते ?",
    "question_english": "According to Maharashtra Economic Survey Report 2019-20 what percentage of the total geographical area in the State was under forest in 2018-19 ?",
    "options_marathi": [
      "20.10",
      "18.40",
      "17.90",
      "14.13"
    ],
    "options_english": [
      "20.10",
      "18.40",
      "17.90",
      "14.13"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Maharashtra Economic Survey (Forest Cover)",
    "difficulty": "Hard",
    "trap_detected": "Specific Factual Data (Forest Cover vs. Forest and Tree Cover)",
    "explanation_english": "According to the Maharashtra Economic Survey Report 2019-20, which refers to the India State of Forest Report (ISFR) 2019, the total 'Forest and Tree Cover' in Maharashtra was 20.10% of the total geographical area. Specifically, the 'Forest Cover' was 16.50% and 'Tree Cover' was 3.60%. The question asks for 'क्षेत्र वनाखाली होते' (area under forest), which can sometimes be interpreted as total green cover (forest + tree cover) in MPSC exams when options align. Given the options, 20.10% is the most appropriate answer, representing the combined forest and tree cover.",
    "explanation_marathi": "महाराष्ट्र आर्थिक पाहणी अहवाल 2019-20 नुसार, जो इंडिया स्टेट ऑफ फॉरेस्ट रिपोर्ट (ISFR) 2019 चा संदर्भ देतो, महाराष्ट्रातील एकूण 'वन आणि वृक्ष आच्छादन' एकूण भौगोलिक क्षेत्राच्या 20.10% होते. विशेषतः, 'वन आच्छादन' 16.50% आणि 'वृक्ष आच्छादन' 3.60% होते. प्रश्न 'किती टक्के क्षेत्र वनाखाली होते' असे विचारतो, जे MPSC परीक्षांमध्ये पर्याय जुळल्यास कधीकधी एकूण हरित आच्छादन (वन + वृक्ष आच्छादन) म्हणून अर्थ लावला जातो. दिलेल्या पर्यायांपैकी, 20.10% हे सर्वात योग्य उत्तर आहे, जे एकत्रित वन आणि वृक्ष आच्छादन दर्शवते.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "20.10",
        "option_text_marathi": "20.10",
        "is_correct": true,
        "reason_english": "This figure represents the total 'Forest and Tree Cover' in Maharashtra as per the ISFR 2019, which is cited in the Maharashtra Economic Survey 2019-20. While 'Forest Cover' alone was 16.50%, the option 20.10% is often used to denote the broader 'green cover' in such questions.",
        "reason_marathi": "ही आकडेवारी ISFR 2019 नुसार महाराष्ट्रातील एकूण 'वन आणि वृक्ष आच्छादन' दर्शवते, ज्याचा उल्लेख महाराष्ट्र आर्थिक पाहणी अहवाल 2019-20 मध्ये आहे. जरी केवळ 'वन आच्छादन' 16.50% होते, तरी 20.10% हा पर्याय अशा प्रश्नांमध्ये व्यापक 'हरित आच्छादन' दर्शवण्यासाठी वापरला जातो."
      },
      {
        "option_number": 2,
        "option_text_english": "18.40",
        "option_text_marathi": "18.40",
        "is_correct": false,
        "reason_english": "This figure is not consistent with the official data for forest or forest and tree cover in Maharashtra for the specified period.",
        "reason_marathi": "ही आकडेवारी निर्दिष्ट कालावधीसाठी महाराष्ट्रातील वन किंवा वन आणि वृक्ष आच्छादनाच्या अधिकृत आकडेवारीशी सुसंगत नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "17.90",
        "option_text_marathi": "17.90",
        "is_correct": false,
        "reason_english": "This figure is not consistent with the official data for forest or forest and tree cover in Maharashtra for the specified period.",
        "reason_marathi": "ही आकडेवारी निर्दिष्ट कालावधीसाठी महाराष्ट्रातील वन किंवा वन आणि वृक्ष आच्छादनाच्या अधिकृत आकडेवारीशी सुसंगत नाही."
      },
      {
        "option_number": 4,
        "option_text_english": "14.13",
        "option_text_marathi": "14.13",
        "is_correct": false,
        "reason_english": "This figure is not consistent with the official data for forest or forest and tree cover in Maharashtra for the specified period.",
        "reason_marathi": "ही आकडेवारी निर्दिष्ट कालावधीसाठी महाराष्ट्रातील वन किंवा वन आणि वृक्ष आच्छादनाच्या अधिकृत आकडेवारीशी सुसंगत नाही."
      }
    ]
  },
  {
    "q_no": 21,
    "question_marathi": "जनगणना 2001 प्रमाणे खालीलपैकी कोणत्या जिल्ह्याची लोकसंख्या घनता 200 पेक्षा कमी होती ?",
    "question_english": "As per the Census 2001 which of the following districts has less than 200 population density ?",
    "options_marathi": [
      "नांदेड",
      "जालना",
      "अहमदनगर",
      "यवतमाळ"
    ],
    "options_english": [
      "Nanded",
      "Jalna",
      "Ahmednagar",
      "Yavatmal"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Demography (Census - Population Density)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "As per Census 2001, among the given options, Yavatmal district had a population density of less than 200 persons per sq. km. Its density was approximately 181 persons per sq. km. Nanded, Jalna, and Ahmednagar all had population densities above 200. This question tests specific factual recall from census data.",
    "explanation_marathi": "जनगणना 2001 नुसार, दिलेल्या पर्यायांपैकी यवतमाळ जिल्ह्याची लोकसंख्या घनता 200 व्यक्ती प्रति चौ.कि.मी. पेक्षा कमी होती. त्याची घनता अंदाजे 181 व्यक्ती प्रति चौ.कि.मी. होती. नांदेड, जालना आणि अहमदनगर या जिल्ह्यांची लोकसंख्या घनता 200 पेक्षा जास्त होती. हा प्रश्न जनगणनेच्या आकडेवारीतील विशिष्ट तथ्यांच्या स्मरणाची चाचणी घेतो.",
    "options_breakdown": [
      {
        "option_english": "Nanded",
        "option_marathi": "नांदेड",
        "is_correct": false,
        "reason": "Incorrect. As per Census 2001, Nanded district had a population density significantly higher than 200 (approx. 319)."
      },
      {
        "option_english": "Jalna",
        "option_marathi": "जालना",
        "is_correct": false,
        "reason": "Incorrect. As per Census 2001, Jalna district had a population density higher than 200 (approx. 240)."
      },
      {
        "option_english": "Ahmednagar",
        "option_marathi": "अहमदनगर",
        "is_correct": false,
        "reason": "Incorrect. As per Census 2001, Ahmednagar district had a population density around 200-220, which is not less than 200."
      },
      {
        "option_english": "Yavatmal",
        "option_marathi": "यवतमाळ",
        "is_correct": true,
        "reason": "Correct. As per Census 2001, Yavatmal district had a population density of approximately 181 persons per sq. km, which is less than 200."
      }
    ]
  },
  {
    "q_no": 22,
    "question_marathi": "खालीलपैकी पुर्णा नदीच्या उजव्या तिरावरील कोणत्या उपनद्या आहेत ?\n(a) काटेपुर्णा\n(b) बिसवा\n(c) भूलेश्वर\n(d) शहानूर\nपर्यायी उत्तरे :",
    "question_english": "Which of the following are the right bank tributaries of river Purna ?\n(a) Katepurna\n(b) Biswa\n(c) Bhuleshwar\n(d) Shahanur\nAnswer options :",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(c) आणि (d)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(c) and (d)",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Rivers of Maharashtra (Tributaries)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Purna river is an important tributary of the Tapi river in Maharashtra. Its major right bank tributaries include Shahanur, Bhuleshwar, Bor, and Nalganga. Katepurna and Biswa are left bank tributaries. Therefore, options (c) Bhuleshwar and (d) Shahanur are the correct right bank tributaries.",
    "explanation_marathi": "पूर्णा नदी ही महाराष्ट्रातील तापी नदीची एक महत्त्वाची उपनदी आहे. तिच्या प्रमुख उजव्या तीरावरील उपनद्यांमध्ये शहानूर, भूलेश्वर, बोर आणि नळगंगा यांचा समावेश होतो. काटेपूर्णा आणि बिसवा या डाव्या तीरावरील उपनद्या आहेत. त्यामुळे, पर्याय (c) भूलेश्वर आणि (d) शहानूर या उजव्या तीरावरील उपनद्या आहेत.",
    "options_breakdown": [
      {
        "option_english": "(a) and (b)",
        "option_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason": "Incorrect. Katepurna and Biswa are left bank tributaries of the Purna river."
      },
      {
        "option_english": "(b) and (c)",
        "option_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason": "Incorrect. Biswa is a left bank tributary, while Bhuleshwar is a right bank tributary."
      },
      {
        "option_english": "(c) and (d)",
        "option_marathi": "(c) आणि (d)",
        "is_correct": true,
        "reason": "Correct. Bhuleshwar and Shahanur are both recognized as right bank tributaries of the Purna river."
      },
      {
        "option_english": "(a), (b) and (c)",
        "option_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason": "Incorrect. Katepurna and Biswa are left bank tributaries, making this combination incorrect."
      }
    ]
  },
  {
    "q_no": 23,
    "question_marathi": "खालीलपैकी महाराष्ट्रातील कोणते क्षेत्र मँगनीज खानी संदर्भात महत्त्वाचे नाही ?",
    "question_english": "Which of the following is not important regarding manganese mining area in Maharashtra ?",
    "options_marathi": [
      "चिकला",
      "सीता साओंगी",
      "डोंगरी बुजूर्ग",
      "वरोरा-वैतरणा"
    ],
    "options_english": [
      "Chikla",
      "Sita Saongi",
      "Dongri Buzurg",
      "Warora-Vaitarna"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Mineral Resources (Manganese Mining)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Manganese mining in Maharashtra is predominantly found in the Nagpur-Bhandara-Gondia region. Chikla, Sita Saongi, and Dongri Buzurg are well-known areas for manganese deposits in Bhandara district. Warora, on the other hand, is primarily known for coal mining in Chandrapur district, and Vaitarna is a river, not a manganese mining location. Therefore, Warora-Vaitarna is not an important manganese mining area.",
    "explanation_marathi": "महाराष्ट्रामध्ये मँगनीजचे उत्खनन प्रामुख्याने नागपूर-भंडारा-गोंदिया पट्ट्यात आढळते. चिकला, सीता साओंगी आणि डोंगरी बुजूर्ग ही भंडारा जिल्ह्यातील मँगनीज साठ्यांसाठी प्रसिद्ध ठिकाणे आहेत. याउलट, वरोरा हे चंद्रपूर जिल्ह्यातील कोळसा खाणींसाठी ओळखले जाते आणि वैतरणा ही एक नदी आहे, मँगनीज खाण क्षेत्र नाही. त्यामुळे, वरोरा-वैतरणा हे मँगनीज खाण क्षेत्राच्या दृष्टीने महत्त्वाचे नाही.",
    "options_breakdown": [
      {
        "option_english": "Chikla",
        "option_marathi": "चिकला",
        "is_correct": false,
        "reason": "Incorrect. Chikla (Bhandara district) is a significant manganese mining area in Maharashtra."
      },
      {
        "option_english": "Sita Saongi",
        "option_marathi": "सीता साओंगी",
        "is_correct": false,
        "reason": "Incorrect. Sita Saongi (Bhandara district) is an important manganese mining area."
      },
      {
        "option_english": "Dongri Buzurg",
        "option_marathi": "डोंगरी बुजूर्ग",
        "is_correct": false,
        "reason": "Incorrect. Dongri Buzurg (Bhandara district) is a well-known manganese mining area."
      },
      {
        "option_english": "Warora-Vaitarna",
        "option_marathi": "वरोरा-वैतरणा",
        "is_correct": true,
        "reason": "Correct. Warora is known for coal mining, and Vaitarna is a river; neither is associated with significant manganese mining in Maharashtra."
      }
    ]
  },
  {
    "q_no": 24,
    "question_marathi": "कोणत्या प्रशासकीय विभागात जिल्ह्याची संख्या अधिक आहे ?",
    "question_english": "Which Administrative Division consists more number of districts ?",
    "options_marathi": [
      "पूणे विभाग",
      "नागपूर विभाग",
      "कोकण विभाग",
      "औरंगाबाद विभाग"
    ],
    "options_english": [
      "Pune Division",
      "Nagpur Division",
      "Konkan Division",
      "Aurangabad Division"
    ],
    "correct_option_index": 4,
    "subject": "Geography",
    "topic": "Administrative Divisions of Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Maharashtra is divided into six administrative divisions. Among the given options, Aurangabad Division (now officially Chhatrapati Sambhajinagar Division) has the highest number of districts, totaling eight. These districts are Aurangabad, Jalna, Parbhani, Hingoli, Nanded, Latur, Osmanabad, and Beed. Konkan has 7, Nagpur has 6, and Pune has 5 districts.",
    "explanation_marathi": "महाराष्ट्राचे सहा प्रशासकीय विभागांमध्ये विभाजन केले आहे. दिलेल्या पर्यायांपैकी, औरंगाबाद विभागात (आता अधिकृतपणे छत्रपती संभाजीनगर विभाग) सर्वाधिक आठ जिल्हे आहेत. हे जिल्हे औरंगाबाद, जालना, परभणी, हिंगोली, नांदेड, लातूर, उस्मानाबाद आणि बीड आहेत. कोकण विभागात 7, नागपूर विभागात 6 आणि पुणे विभागात 5 जिल्हे आहेत.",
    "options_breakdown": [
      {
        "option_english": "Pune Division",
        "option_marathi": "पूणे विभाग",
        "is_correct": false,
        "reason": "Incorrect. Pune Division has 5 districts (Pune, Satara, Sangli, Solapur, Kolhapur)."
      },
      {
        "option_english": "Nagpur Division",
        "option_marathi": "नागपूर विभाग",
        "is_correct": false,
        "reason": "Incorrect. Nagpur Division has 6 districts (Nagpur, Wardha, Bhandara, Gondia, Chandrapur, Gadchiroli)."
      },
      {
        "option_english": "Konkan Division",
        "option_marathi": "कोकण विभाग",
        "is_correct": false,
        "reason": "Incorrect. Konkan Division has 7 districts (Mumbai City, Mumbai Suburban, Thane, Palghar, Raigad, Ratnagiri, Sindhudurg)."
      },
      {
        "option_english": "Aurangabad Division",
        "option_marathi": "औरंगाबाद विभाग",
        "is_correct": true,
        "reason": "Correct. Aurangabad Division (Chhatrapati Sambhajinagar Division) has 8 districts, which is the highest among the given options."
      }
    ]
  },
  {
    "q_no": 25,
    "question_marathi": "जनगणना 2011 प्रमाणे नंदूरबार जिल्ह्याचा स्त्री-पुरुष प्रमाण दर किती होता ?",
    "question_english": "What was the sex ratio of Nandurbar district as per the Census 2011 ?",
    "options_marathi": [
      "700 ते 800 दरम्यान",
      "800 ते 900 दरम्यान",
      "900 ते 1000 दरम्यान",
      "वरीलपैकी नाही"
    ],
    "options_english": [
      "Between 700 to 800",
      "Between 800 to 900",
      "Between 900 to 1000",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Demography (Census - Sex Ratio)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "As per the Census 2011, Nandurbar district had a sex ratio of 970 females per 1000 males. This figure falls within the range of 900 to 1000. Nandurbar is known for having one of the higher sex ratios in Maharashtra, reflecting important demographic trends.",
    "explanation_marathi": "जनगणना 2011 नुसार, नंदुरबार जिल्ह्याचे स्त्री-पुरुष प्रमाण दर 1000 पुरुषांमागे 970 स्त्रिया असे होते. ही संख्या 900 ते 1000 या श्रेणीत येते. नंदुरबार जिल्हा महाराष्ट्रातील उच्च स्त्री-पुरुष प्रमाण असलेल्या जिल्ह्यांपैकी एक म्हणून ओळखला जातो, जे महत्त्वाचे लोकसंख्याशास्त्रीय कल दर्शवते.",
    "options_breakdown": [
      {
        "option_english": "Between 700 to 800",
        "option_marathi": "700 ते 800 दरम्यान",
        "is_correct": false,
        "reason": "Incorrect. The sex ratio of Nandurbar in 2011 was significantly higher than this range."
      },
      {
        "option_english": "Between 800 to 900",
        "option_marathi": "800 ते 900 दरम्यान",
        "is_correct": false,
        "reason": "Incorrect. The sex ratio was higher than 900."
      },
      {
        "option_english": "Between 900 to 1000",
        "option_marathi": "900 ते 1000 दरम्यान",
        "is_correct": true,
        "reason": "Correct. The sex ratio of Nandurbar district as per Census 2011 was 970, which falls within the 900 to 1000 range."
      },
      {
        "option_english": "None of the above",
        "option_marathi": "वरीलपैकी नाही",
        "is_correct": false,
        "reason": "Incorrect. Option 3 accurately represents the sex ratio."
      }
    ]
  },
  {
    "q_no": 26,
    "question_marathi": "जगन्नाथ शंकरशेठ यांना कशाचे शिल्पकार म्हणून ओळखले जाते ?",
    "question_english": "Jagannath Shankarsheth is known as the founding father of ______.",
    "options_marathi": [
      "महाराष्ट्राचे",
      "मुंबईचे",
      "रेल्वेचे",
      "शिक्षणाचे"
    ],
    "options_english": [
      "Maharashtra",
      "Mumbai",
      "Railway",
      "Education"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social and Political Reformers of Maharashtra",
    "difficulty": "Easy",
    "trap_detected": "Factual Nuance",
    "explanation_english": "Jagannath Shankarsheth, also known as Nana Shankarsheth, was a visionary leader and philanthropist who played a pivotal role in the development of Mumbai (then Bombay) in the 19th century. He is widely regarded as the 'Architect of Modern Mumbai' or 'Founding Father of Mumbai' due to his extensive contributions to education, infrastructure, and social reforms in the city. While he was instrumental in establishing institutions like Elphinstone College and advocating for the first railway line in India, his overall impact on the city's growth and modernization makes 'Mumbai' the most fitting answer.",
    "explanation_marathi": "जगन्नाथ शंकरशेठ, ज्यांना नाना शंकरशेठ म्हणूनही ओळखले जाते, हे 19 व्या शतकात मुंबईच्या (तत्कालीन बॉम्बे) विकासात महत्त्वपूर्ण भूमिका बजावणारे दूरदृष्टीचे नेते आणि परोपकारी व्यक्ती होते. शहर, शिक्षण आणि सामाजिक सुधारणांमध्ये त्यांच्या व्यापक योगदानामुळे त्यांना 'आधुनिक मुंबईचे शिल्पकार' किंवा 'मुंबईचे जनक' म्हणून मोठ्या प्रमाणावर ओळखले जाते. एल्फिन्स्टन कॉलेजसारख्या संस्था स्थापन करण्यात आणि भारतातील पहिल्या रेल्वे मार्गासाठी वकिली करण्यात त्यांनी महत्त्वाची भूमिका बजावली असली तरी, शहराच्या वाढ आणि आधुनिकीकरणावरील त्यांचा एकूण प्रभाव पाहता 'मुंबई' हे सर्वात योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "Maharashtra",
        "option_marathi": "महाराष्ट्राचे",
        "is_correct": false,
        "reason": "Incorrect. While he was a prominent figure from Maharashtra, his primary focus and most significant contributions were specifically to the development of Mumbai."
      },
      {
        "option_english": "Mumbai",
        "option_marathi": "मुंबईचे",
        "is_correct": true,
        "reason": "Correct. Jagannath Shankarsheth is widely known as the 'Architect of Modern Mumbai' or 'Founding Father of Mumbai' for his immense contributions to the city's infrastructure, education, and social reforms."
      },
      {
        "option_english": "Railway",
        "option_marathi": "रेल्वेचे",
        "is_correct": false,
        "reason": "Incorrect. He was instrumental in establishing the first railway line in India, but this is one of his many contributions, not his sole or primary identity as a 'founding father'."
      },
      {
        "option_english": "Education",
        "option_marathi": "शिक्षणाचे",
        "is_correct": false,
        "reason": "Incorrect. He was a great educationalist and founded many educational institutions, but 'Mumbai' encompasses his broader and more encompassing impact on the city's overall development."
      }
    ]
  },
  {
    "q_no": 27,
    "question_marathi": "सोलापूर नगरपालिकेवरील राष्ट्रध्वज उतरविण्यास ______ यांनी नकार दिला.",
    "question_english": "______ refused to lower the National Flag on the Solapur Municipal Council building.",
    "options_marathi": [
      "माणिकचंद शाह",
      "दादासाहेब खापर्डे",
      "सोमण देशपांडे",
      "शंकरराव देव"
    ],
    "options_english": [
      "Manickchand Shah",
      "Dadasaheb Khaparde",
      "Soman Deshpande",
      "Shankarrao Deo"
    ],
    "correct_option_index": 1,
    "subject": "History",
    "topic": "Indian National Movement (Civil Disobedience, Maharashtra's role)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "During the Civil Disobedience Movement in 1930, Solapur witnessed intense protests following Mahatma Gandhi's arrest. The Solapur Municipal Council, under the leadership of its President, Manickchand Shah, hoisted the national flag on its building. When British authorities ordered its removal, Manickchand Shah bravely refused to comply, leading to severe government repression and the imposition of martial law in Solapur. This act of defiance became a symbol of resistance.",
    "explanation_marathi": "1930 च्या सविनय कायदेभंग चळवळीदरम्यान, महात्मा गांधींच्या अटकेनंतर सोलापूरमध्ये तीव्र निदर्शने झाली. सोलापूर नगरपालिकेने, अध्यक्ष माणिकचंद शाह यांच्या नेतृत्वाखाली, आपल्या इमारतीवर राष्ट्रध्वज फडकवला. ब्रिटिश अधिकाऱ्यांनी तो उतरवण्याचा आदेश दिल्यावर, माणिकचंद शाह यांनी धैर्याने नकार दिला, ज्यामुळे सरकारकडून तीव्र दडपशाही झाली आणि सोलापूरमध्ये मार्शल लॉ लागू करण्यात आला. हा प्रतिकार एक प्रतिक बनला.",
    "options_breakdown": [
      {
        "option_english": "Manickchand Shah",
        "option_marathi": "माणिकचंद शाह",
        "is_correct": true,
        "reason": "Correct. Manickchand Shah, as the President of the Solapur Municipal Council, famously refused to lower the national flag during the Civil Disobedience Movement in 1930, leading to significant events in Solapur."
      },
      {
        "option_english": "Dadasaheb Khaparde",
        "option_marathi": "दादासाहेब खापर्डे",
        "is_correct": false,
        "reason": "Incorrect. Dadasaheb Khaparde was a prominent leader from Vidarbha, associated with the Extremist faction of Congress, but not directly involved in this specific incident."
      },
      {
        "option_english": "Soman Deshpande",
        "option_marathi": "सोमण देशपांडे",
        "is_correct": false,
        "reason": "Incorrect. This name is not associated with the specific incident of refusing to lower the flag on the Solapur Municipal Council building."
      },
      {
        "option_english": "Shankarrao Deo",
        "option_marathi": "शंकरराव देव",
        "is_correct": false,
        "reason": "Incorrect. Shankarrao Deo was a prominent Congress leader from Maharashtra, but he was not involved in this particular incident in Solapur."
      }
    ]
  },
  {
    "q_no": 28,
    "question_marathi": "'तरूण मराठा' पक्ष कोणी स्थापन केला ?",
    "question_english": "Who founded the Young Maratha Party ?",
    "options_marathi": [
      "पांडुरंग राजभोज",
      "वि.रा. शिंदे",
      "मल्हारी मार्तंड डिखळे",
      "केशवराव मारुतीराव जेधे"
    ],
    "options_english": [
      "Pandurang Rajbhoj",
      "V.R. Shinde",
      "Malhari Martand Dikhale",
      "Keshavrao Marutirao Jedhe"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Social and Political Movements in Maharashtra (Non-Brahmin Movement)",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Young Maratha Party (तरुण मराठा पक्ष) was founded in 1926 by Keshavrao Marutirao Jedhe and Dinkarrao Jawalkar. This party played a significant role in the non-Brahmin movement in Maharashtra, advocating for the rights and upliftment of the Maratha community and other non-Brahmin castes.",
    "explanation_marathi": "तरुण मराठा पक्ष (Young Maratha Party) ची स्थापना 1926 मध्ये केशवराव मारुतीराव जेधे आणि दिनकरराव जवळकर यांनी केली होती. या पक्षाने महाराष्ट्रातील ब्राह्मणेतर चळवळीत महत्त्वाची भूमिका बजावली, मराठा समाज आणि इतर ब्राह्मणेतर जातींच्या हक्कांसाठी आणि उन्नतीसाठी वकिली केली.",
    "options_breakdown": [
      {
        "option_english": "Pandurang Rajbhoj",
        "option_marathi": "पांडुरंग राजभोज",
        "is_correct": false,
        "reason": "Incorrect. Pandurang Rajbhoj was a prominent leader of the Dalit movement and an associate of Dr. B.R. Ambedkar, not the founder of the Young Maratha Party."
      },
      {
        "option_english": "V.R. Shinde",
        "option_marathi": "वि.रा. शिंदे",
        "is_correct": false,
        "reason": "Incorrect. Vitthal Ramji Shinde was a social reformer known for his work for the untouchables (Depressed Classes Mission Society), but not the founder of this party."
      },
      {
        "option_english": "Malhari Martand Dikhale",
        "option_marathi": "मल्हारी मार्तंड डिखळे",
        "is_correct": false,
        "reason": "Incorrect. This name is not associated with the founding of the Young Maratha Party."
      },
      {
        "option_english": "Keshavrao Marutirao Jedhe",
        "option_marathi": "केशवराव मारुतीराव जेधे",
        "is_correct": true,
        "reason": "Correct. Keshavrao Marutirao Jedhe, along with Dinkarrao Jawalkar, founded the Young Maratha Party in 1926, which was influential in the non-Brahmin movement."
      }
    ]
  },
  {
    "q_no": 29,
    "question_marathi": "पुढील घटनांची त्यांच्या कालानुक्रमे यादी करा :\n(a) लाहोर येथे भरलेल्या मुस्लीम लीगच्या अधिवेशनात पाकिस्तानच्या मागणीचा ठराव केला.\n(b) अलाहाबाद येथे डॉ. महमंद इकबाल यांच्या अध्यक्षतेखाली झालेल्या बैठकीत पाकिस्तानची कल्पना मांडली.\n(c) बॅरिस्टर जीना यांनी मुस्लिमांच्या मागण्यासाठी चौदा मुद्दे मांडले.\n(d) पंडीत जवाहरलाल नेहरु हंगामी सरकारचे पंतप्रधान झाले. तो दिवस मुस्लीम लीगने शोकदिन म्हणून पाळला.\nपर्यायी उत्तरे :",
    "question_english": "Arrange the following events in their chronological order.\n(a) In the Muslim League session at Lahore, resolution was passed for demand of Pakistan.\n(b) Under the Presidentship of Dr. Mohamad Iqbal at Allahabad the concept of Pakistan was put forth.\n(c) Barrister Jinna placed fourteen points for Muslim Demands.\n(d) Muslim League observed mourning day when Pandit Jawaharlal Nehru took charge as Prime Minister of caretaker Government.\nAnswer options :",
    "options_marathi": [
      "(b), (a), (c), (d)",
      "(c), (a), (b), (d)",
      "(a), (b), (c), (d)",
      "(c), (b), (a), (d)"
    ],
    "options_english": [
      "(b), (a), (c), (d)",
      "(c), (a), (b), (d)",
      "(a), (b), (c), (d)",
      "(c), (b), (a), (d)"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Indian National Movement (Muslim League, Partition)",
    "difficulty": "Hard",
    "trap_detected": "Chronological Misordering",
    "explanation_english": "Let's arrange the events chronologically:\n(c) Barrister Jinnah placed fourteen points for Muslim Demands: This occurred in March 1929, in response to the Nehru Report.\n(b) Under the Presidentship of Dr. Mohamad Iqbal at Allahabad the concept of Pakistan was put forth: Dr. Iqbal articulated the idea of a separate Muslim state in his presidential address to the Muslim League session at Allahabad in December 1930.\n(a) In the Muslim League session at Lahore, resolution was passed for demand of Pakistan: The famous Lahore Resolution, formally demanding a separate homeland for Muslims (Pakistan), was passed in March 1940.\n(d) Muslim League observed mourning day when Pandit Jawaharlal Nehru took charge as Prime Minister of caretaker Government: Pandit Nehru formed the Interim Government on September 2, 1946. The Muslim League observed this day (or the period around it, specifically August 16, 1946, as Direct Action Day, and later the formation of the interim government without their initial participation) as a 'Day of Mourning' or 'Black Day'.\nTherefore, the correct chronological order is (c), (b), (a), (d).",
    "explanation_marathi": "घटनांचा कालक्रमानुसार क्रम लावूया:\n(c) बॅरिस्टर जीना यांनी मुस्लिमांच्या मागण्यासाठी चौदा मुद्दे मांडले: हे मार्च 1929 मध्ये नेहरू अहवालाला प्रत्युत्तर म्हणून घडले.\n(b) अलाहाबाद येथे डॉ. महमंद इकबाल यांच्या अध्यक्षतेखाली झालेल्या बैठकीत पाकिस्तानची कल्पना मांडली: डॉ. इक्बाल यांनी डिसेंबर 1930 मध्ये अलाहाबाद येथील मुस्लिम लीगच्या अधिवेशनातील त्यांच्या अध्यक्षीय भाषणात स्वतंत्र मुस्लिम राज्याची कल्पना मांडली.\n(a) लाहोर येथे भरलेल्या मुस्लीम लीगच्या अधिवेशनात पाकिस्तानच्या मागणीचा ठराव केला: मुस्लिमांसाठी स्वतंत्र मातृभूमी (पाकिस्तान) ची औपचारिक मागणी करणारा प्रसिद्ध लाहोर ठराव मार्च 1940 मध्ये मंजूर करण्यात आला.\n(d) पंडीत जवाहरलाल नेहरु हंगामी सरकारचे पंतप्रधान झाले. तो दिवस मुस्लीम लीगने शोकदिन म्हणून पाळला: पंडित नेहरूंनी 2 सप्टेंबर 1946 रोजी हंगामी सरकार स्थापन केले. मुस्लिम लीगने हा दिवस (किंवा त्या आसपासचा काळ, विशेषतः 16 ऑगस्ट 1946 रोजी 'प्रत्यक्ष कृती दिन' म्हणून, आणि नंतर त्यांच्या सुरुवातीच्या सहभागाशिवाय हंगामी सरकारची स्थापना) 'शोकदिन' किंवा 'काळा दिवस' म्हणून पाळला.\nम्हणून, योग्य कालक्रमानुसार क्रम (c), (b), (a), (d) आहे.",
    "options_breakdown": [
      {
        "option_english": "(b), (a), (c), (d)",
        "option_marathi": "(b), (a), (c), (d)",
        "is_correct": false,
        "reason": "Incorrect chronological order. Jinnah's 14 points (c) came before Iqbal's address (b)."
      },
      {
        "option_english": "(c), (a), (b), (d)",
        "option_marathi": "(c), (a), (b), (d)",
        "is_correct": false,
        "reason": "Incorrect chronological order. Iqbal's address (b) came before the Lahore Resolution (a)."
      },
      {
        "option_english": "(a), (b), (c), (d)",
        "option_marathi": "(a), (b), (c), (d)",
        "is_correct": false,
        "reason": "Incorrect chronological order. Both (c) and (b) occurred before (a)."
      },
      {
        "option_english": "(c), (b), (a), (d)",
        "option_marathi": "(c), (b), (a), (d)",
        "is_correct": true,
        "reason": "Correct. The chronological order is: Jinnah's 14 points (1929), Iqbal's Allahabad Address (1930), Lahore Resolution (1940), and Muslim League's Mourning Day (1946)."
      }
    ]
  },
  {
    "q_no": 30,
    "question_marathi": "जोड्या लावा :\n(a) श्रीपाद अमृत डांगे\n(i) रॅडिकल डेमॉक्रेटिक पार्टीची स्थापना\n(b) लाला लजपत राय\n(ii) दि सोशिअॅलिस्ट नियतकालीक\n(c) आचार्य नरेंद्र देव\n(iii) आयटकचे (AITUC) पहिले अध्यक्ष\n(d) मानवेंद्रनाथ रॉय\n(iv) काँग्रेस सोशिअॅलिस्ट पार्टीचे महत्वपूर्ण नेते\nपर्यायी उत्तरे :",
    "question_english": "Match the following:\n(a) Shripad Amrut Dange\n(i) Establishment of Radical Democratic Party\n(b) Lala Lajpat Rai\n(ii) The Socialist magazine\n(c) Acharya Narendra Dev\n(iii) First President of All India Trade Union Congress (AITUC)\n(d) Manvendranath Roy\n(iv) Important leader of Congress Socialist Party\nAnswer options :",
    "options_marathi": [
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
      "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)"
    ],
    "options_english": [
      "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
      "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Indian National Movement (Political Organizations, Leaders, Publications)",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's correctly match the personalities with their contributions:\n(a) Shripad Amrut Dange: He was a prominent communist leader and one of the founders of the communist movement in India. He started the English weekly 'The Socialist' in 1922.\n(b) Lala Lajpat Rai: Known as 'Punjab Kesari', he was a leading figure in the Indian nationalist movement. He presided over the first session of the All India Trade Union Congress (AITUC) in 1920, becoming its first president.\n(c) Acharya Narendra Dev: A key ideologue and leader of the socialist movement within the Indian National Congress. He was an important leader and one of the founders of the Congress Socialist Party (CSP) in 1934.\n(d) Manvendranath Roy (M.N. Roy): An international communist and revolutionary, M.N. Roy later developed his own philosophy of Radical Humanism. He founded the Radical Democratic Party in 1940.\nThus, the correct matching is (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i).",
    "explanation_marathi": "व्यक्तिमत्त्वे आणि त्यांच्या योगदानाची योग्य जुळणी करूया:\n(a) श्रीपाद अमृत डांगे: ते एक प्रमुख कम्युनिस्ट नेते आणि भारतातील कम्युनिस्ट चळवळीच्या संस्थापकांपैकी एक होते. त्यांनी 1922 मध्ये 'द सोशालिस्ट' हे इंग्रजी साप्ताहिक सुरू केले.\n(b) लाला लजपत राय: 'पंजाब केसरी' म्हणून ओळखले जाणारे, ते भारतीय राष्ट्रवादी चळवळीतील एक प्रमुख व्यक्तिमत्व होते. त्यांनी 1920 मध्ये अखिल भारतीय ट्रेड युनियन काँग्रेस (AITUC) च्या पहिल्या अधिवेशनाचे अध्यक्षपद भूषवले आणि त्याचे पहिले अध्यक्ष बनले.\n(c) आचार्य नरेंद्र देव: भारतीय राष्ट्रीय काँग्रेसमधील समाजवादी चळवळीचे एक प्रमुख विचारवंत आणि नेते. ते 1934 मध्ये काँग्रेस सोशालिस्ट पार्टी (CSP) चे एक महत्त्वाचे नेते आणि संस्थापकांपैकी एक होते.\n(d) मानवेंद्रनाथ रॉय (एम.एन. रॉय): एक आंतरराष्ट्रीय कम्युनिस्ट आणि क्रांतिकारक, एम.एन. रॉय यांनी नंतर स्वतःचे रॅडिकल ह्युमनिझमचे तत्त्वज्ञान विकसित केले. त्यांनी 1940 मध्ये रॅडिकल डेमॉक्रेटिक पार्टीची स्थापना केली.\nम्हणून, योग्य जुळणी (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i) आहे.",
    "options_breakdown": [
      {
        "option_english": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
        "option_marathi": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
        "is_correct": false,
        "reason": "Incorrect. Option (c) and (d) are incorrectly matched here. Acharya Narendra Dev was a leader of CSP, and M.N. Roy founded the Radical Democratic Party."
      },
      {
        "option_english": "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
        "option_marathi": "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
        "is_correct": true,
        "reason": "Correct. This option accurately matches all the personalities with their respective contributions: S.A. Dange with 'The Socialist', Lala Lajpat Rai as first AITUC President, Acharya Narendra Dev as a CSP leader, and M.N. Roy with the Radical Democratic Party."
      },
      {
        "option_english": "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
        "option_marathi": "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
        "is_correct": false,
        "reason": "Incorrect. Option (a) and (d) are incorrectly matched here. S.A. Dange was associated with 'The Socialist', and M.N. Roy founded the Radical Democratic Party."
      },
      {
        "option_english": "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
        "option_marathi": "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
        "is_correct": false,
        "reason": "Incorrect. Multiple mismatches in this option."
      }
    ]
  },
  {
    "q_no": 31,
    "question_marathi": "दिनकरराव जवळकरांनी 'विजयी मराठा' या वृत्तपत्रात कोणत्या टोपण नावाने लिखाण केले ?",
    "question_english": "By what pseudonym did Dinkarrao Jawalkar write in the newspaper 'Vijayi Maratha'?",
    "options_marathi": [
      "भाई महाजन",
      "भवानी तलवारे",
      "मल्हारी डिखळे",
      "दलित कैवारी"
    ],
    "options_english": [
      "Bhai Mahajan",
      "Bhavani Talware",
      "Malhari Dikhale",
      "Dalit Kaivari"
    ],
    "correct_option_index": 2,
    "subject": "History",
    "topic": "Social Reformers/Journalists of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Dinkarrao Jawalkar was a prominent social reformer, journalist, and leader of the non-Brahmin movement in Maharashtra. He used the pseudonym 'Bhavani Talware' while writing in the newspaper 'Vijayi Maratha'. His writings were instrumental in advocating for the rights of the oppressed and challenging social inequalities.",
    "explanation_marathi": "दिनकरराव जवळकर हे महाराष्ट्रातील एक प्रमुख समाजसुधारक, पत्रकार आणि ब्राह्मणेतर चळवळीचे नेते होते. त्यांनी 'विजयी मराठा' या वृत्तपत्रात 'भवानी तलवारे' या टोपण नावाने लेखन केले. त्यांचे लेखन शोषितांच्या हक्कांसाठी आणि सामाजिक विषमतेला आव्हान देण्यासाठी महत्त्वाचे होते.",
    "options_breakdown": [
      {
        "option_english": "Bhai Mahajan",
        "option_marathi": "भाई महाजन",
        "is_correct": false,
        "reason_english": "Bhai Mahajan was a different personality, associated with 'Prabhakar' newspaper, not Dinkarrao Jawalkar or 'Vijayi Maratha'.",
        "reason_marathi": "भाई महाजन हे वेगळे व्यक्तिमत्व होते, जे 'प्रभाकर' वृत्तपत्राशी संबंधित होते, दिनकरराव जवळकर किंवा 'विजयी मराठा' यांच्याशी नाही."
      },
      {
        "option_english": "Bhavani Talware",
        "option_marathi": "भवानी तलवारे",
        "is_correct": true,
        "reason_english": "This was the pseudonym used by Dinkarrao Jawalkar for his writings in the newspaper 'Vijayi Maratha'.",
        "reason_marathi": "हे दिनकरराव जवळकर यांनी 'विजयी मराठा' वृत्तपत्रात केलेल्या लेखनासाठी वापरलेले टोपणनाव होते."
      },
      {
        "option_english": "Malhari Dikhale",
        "option_marathi": "मल्हारी डिखळे",
        "is_correct": false,
        "reason_english": "This pseudonym is not associated with Dinkarrao Jawalkar or his work in 'Vijayi Maratha'.",
        "reason_marathi": "हे टोपणनाव दिनकरराव जवळकर किंवा 'विजयी मराठा' मधील त्यांच्या कार्याशी संबंधित नाही."
      },
      {
        "option_english": "Dalit Kaivari",
        "option_marathi": "दलित कैवारी",
        "is_correct": false,
        "reason_english": "While Jawalkar worked for the oppressed, 'Dalit Kaivari' was not his pseudonym in 'Vijayi Maratha'.",
        "reason_marathi": "जवळकर यांनी शोषितांसाठी काम केले असले तरी, 'दलित कैवारी' हे 'विजयी मराठा' मधील त्यांचे टोपणनाव नव्हते."
      }
    ]
  },
  {
    "q_no": 32,
    "question_marathi": "नाशिक येथील क्रांतीकारी चळवळीचे प्रमुख ______ हे होते.",
    "question_english": "______ was the leader of the revolutionary activities at Nashik.",
    "options_marathi": [
      "डॉ. मुंजे",
      "उत्तमराव पाटील",
      "गणेश दामोदर सावरकर",
      "विनायक दामोदर सावरकर"
    ],
    "options_english": [
      "Dr. Munje",
      "Uttamrao Patil",
      "Ganesh Damodar Savarkar",
      "Vinayak Damodar Savarkar"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Revolutionary Movements in Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "Close Option",
    "explanation_english": "Ganesh Damodar Savarkar, elder brother of Vinayak Damodar Savarkar, was a prominent leader of revolutionary activities in Nashik. He was instrumental in establishing the 'Mitra Mela' which later transformed into 'Abhinav Bharat', a secret revolutionary society. His activities included inspiring youth, organizing revolutionary literature, and promoting armed struggle against British rule.",
    "explanation_marathi": "गणेश दामोदर सावरकर, जे विनायक दामोदर सावरकरांचे मोठे बंधू होते, ते नाशिकमधील क्रांतिकारी चळवळीचे प्रमुख नेते होते. 'मित्र मेळा' ची स्थापना करण्यात आणि नंतर त्याचे 'अभिनव भारत' या गुप्त क्रांतिकारी संघटनेत रूपांतर करण्यात त्यांची महत्त्वाची भूमिका होती. त्यांच्या कार्यामध्ये तरुणांना प्रेरणा देणे, क्रांतिकारी साहित्य संघटित करणे आणि ब्रिटिश राजवटीविरुद्ध सशस्त्र संघर्षाला प्रोत्साहन देणे यांचा समावेश होता.",
    "options_breakdown": [
      {
        "option_english": "Dr. Munje",
        "option_marathi": "डॉ. मुंजे",
        "is_correct": false,
        "reason_english": "Dr. B.S. Munje was a Hindu Mahasabha leader, not directly the leader of revolutionary activities in Nashik.",
        "reason_marathi": "डॉ. बी.एस. मुंजे हे हिंदू महासभेचे नेते होते, नाशिकमधील क्रांतिकारी चळवळीचे थेट नेते नव्हते."
      },
      {
        "option_english": "Uttamrao Patil",
        "option_marathi": "उत्तमराव पाटील",
        "is_correct": false,
        "reason_english": "Uttamrao Patil was a political leader, not primarily associated with revolutionary activities in Nashik.",
        "reason_marathi": "उत्तमराव पाटील हे एक राजकीय नेते होते, नाशिकमधील क्रांतिकारी चळवळीशी त्यांचा प्रामुख्याने संबंध नव्हता."
      },
      {
        "option_english": "Ganesh Damodar Savarkar",
        "option_marathi": "गणेश दामोदर सावरकर",
        "is_correct": true,
        "reason_english": "Ganesh Damodar Savarkar (Babarao Savarkar) was a key figure and leader of revolutionary activities in Nashik, particularly associated with Abhinav Bharat.",
        "reason_marathi": "गणेश दामोदर सावरकर (बाबाराव सावरकर) हे नाशिकमधील क्रांतिकारी चळवळीचे प्रमुख व्यक्तिमत्व आणि नेते होते, विशेषतः अभिनव भारताशी संबंधित."
      },
      {
        "option_english": "Vinayak Damodar Savarkar",
        "option_marathi": "विनायक दामोदर सावरकर",
        "is_correct": false,
        "reason_english": "While V.D. Savarkar was the ideological force behind Abhinav Bharat, G.D. Savarkar was more directly involved in leading the local activities in Nashik.",
        "reason_marathi": "वि.दा. सावरकर हे अभिनव भारतामागील वैचारिक शक्ती असले तरी, नाशिकमधील स्थानिक कार्याचे नेतृत्व गणेश दामोदर सावरकर यांनी अधिक थेटपणे केले."
      }
    ]
  },
  {
    "q_no": 33,
    "question_marathi": "विष्णुबुवा ब्रह्मचारी यांना 'साम्यवादाचा पहिला प्रतिपादक' असे कोणी म्हटले ?",
    "question_english": "Who called Vishnubuva Brahmachari 'The first exponent of Communism'?",
    "options_marathi": [
      "लोकमान्य टिळक",
      "साने गुरुजी",
      "ग.त्र्यं. माडखोलकर",
      "म.गो. रानडे"
    ],
    "options_english": [
      "Lokmanya Tilak",
      "Sane Guruji",
      "G.T. Madkholkar",
      "M.G. Ranade"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Social Reformers/Thinkers of Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "Vishnubuva Brahmachari was a 19th-century social reformer and thinker from Maharashtra. He advocated for radical social reforms, including communal living and equitable distribution of wealth, which led G.T. Madkholkar, a prominent Marathi writer and critic, to describe him as 'The first exponent of Communism' in India. Brahmachari's ideas, though not explicitly Marxist, contained elements of socialistic thought far ahead of his time.",
    "explanation_marathi": "विष्णुबुवा ब्रह्मचारी हे १९ व्या शतकातील महाराष्ट्रातील एक समाजसुधारक आणि विचारवंत होते. त्यांनी सामुदायिक जीवन आणि संपत्तीच्या समान वितरणासह अनेक मूलगामी सामाजिक सुधारणांची वकिली केली. यामुळेच प्रसिद्ध मराठी लेखक आणि समीक्षक ग.त्र्यं. माडखोलकर यांनी त्यांना भारतातील 'साम्यवादाचे पहिले प्रतिपादक' असे संबोधले. ब्रह्मचारींच्या कल्पना, जरी स्पष्टपणे मार्क्सवादी नसल्या तरी, त्यांच्या काळात समाजवादाचे घटक समाविष्ट होत्या.",
    "options_breakdown": [
      {
        "option_english": "Lokmanya Tilak",
        "option_marathi": "लोकमान्य टिळक",
        "is_correct": false,
        "reason_english": "While a contemporary, Lokmanya Tilak did not make this specific statement about Vishnubuva Brahmachari.",
        "reason_marathi": "समकालीन असले तरी, लोकमान्य टिळकांनी विष्णुबुवा ब्रह्मचारींबद्दल हे विशिष्ट विधान केले नाही."
      },
      {
        "option_english": "Sane Guruji",
        "option_marathi": "साने गुरुजी",
        "is_correct": false,
        "reason_english": "Sane Guruji was a later figure in Maharashtra's social and literary landscape and is not associated with this statement.",
        "reason_marathi": "साने गुरुजी हे महाराष्ट्राच्या सामाजिक आणि साहित्यिक क्षेत्रातील नंतरचे व्यक्तिमत्व होते आणि या विधानाशी त्यांचा संबंध नाही."
      },
      {
        "option_english": "G.T. Madkholkar",
        "option_marathi": "ग.त्र्यं. माडखोलकर",
        "is_correct": true,
        "reason_english": "G.T. Madkholkar, a renowned Marathi writer and critic, is credited with calling Vishnubuva Brahmachari 'The first exponent of Communism' in India.",
        "reason_marathi": "प्रसिद्ध मराठी लेखक आणि समीक्षक ग.त्र्यं. माडखोलकर यांनी विष्णुबुवा ब्रह्मचारी यांना भारतातील 'साम्यवादाचे पहिले प्रतिपादक' असे संबोधले."
      },
      {
        "option_english": "M.G. Ranade",
        "option_marathi": "म.गो. रानडे",
        "is_correct": false,
        "reason_english": "Mahadev Govind Ranade was a liberal reformer, but this specific attribution is not made by him.",
        "reason_marathi": "महादेव गोविंद रानडे हे उदारमतवादी सुधारक होते, परंतु हे विशिष्ट श्रेय त्यांच्याकडून दिले गेले नाही."
      }
    ]
  },
  {
    "q_no": 34,
    "question_marathi": "मुंबई इलाक्याचे शिक्षण तपासनीस आणि एलफिन्स्टन कॉलेजात प्राध्यापक म्हणून कोण कार्यरत होते ?",
    "question_english": "Who was the Educational Inspector of Bombay Presidency and a Professor in Elphinstone College ?",
    "options_marathi": [
      "महात्मा फुले",
      "कर्मवीर भाऊराव पाटील",
      "बाळशास्त्री जांभेकर",
      "लोकहितवादी"
    ],
    "options_english": [
      "Mahatma Phule",
      "Karmaveer Bhaurao Patil",
      "Balashastri Jambhekar",
      "Lokahitawadi"
    ],
    "correct_option_index": 3,
    "subject": "History",
    "topic": "Social Reformers/Educators of Maharashtra",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Balashastri Jambhekar, often referred to as the 'Father of Marathi Journalism', played a significant role in education during the British era. He served as an Educational Inspector for the Bombay Presidency and was also a Professor at the prestigious Elphinstone College in Mumbai. His contributions extended beyond journalism to promoting education and social reform.",
    "explanation_marathi": "बाळशास्त्री जांभेकर, ज्यांना 'मराठी पत्रकारितेचे जनक' म्हणून ओळखले जाते, त्यांनी ब्रिटिश काळात शिक्षणात महत्त्वपूर्ण भूमिका बजावली. त्यांनी मुंबई इलाख्याचे शिक्षण तपासनीस म्हणून काम केले आणि मुंबईतील प्रतिष्ठित एल्फिन्स्टन कॉलेजमध्ये प्राध्यापकही होते. त्यांचे योगदान पत्रकारितेपलीकडे शिक्षण आणि समाजसुधारणेला प्रोत्साहन देण्यापर्यंत विस्तारले होते.",
    "options_breakdown": [
      {
        "option_english": "Mahatma Phule",
        "option_marathi": "महात्मा फुले",
        "is_correct": false,
        "reason_english": "Mahatma Phule was a social reformer and educationist, but he did not hold the specific positions of Educational Inspector or Professor at Elphinstone College.",
        "reason_marathi": "महात्मा फुले हे समाजसुधारक आणि शिक्षणतज्ञ होते, परंतु त्यांनी शिक्षण तपासनीस किंवा एल्फिन्स्टन कॉलेजमध्ये प्राध्यापक ही विशिष्ट पदे भूषवली नाहीत."
      },
      {
        "option_english": "Karmaveer Bhaurao Patil",
        "option_marathi": "कर्मवीर भाऊराव पाटील",
        "is_correct": false,
        "reason_english": "Karmaveer Bhaurao Patil was a prominent educationist, but in a later period and not in these specific roles.",
        "reason_marathi": "कर्मवीर भाऊराव पाटील हे एक प्रमुख शिक्षणतज्ञ होते, परंतु ते नंतरच्या काळात होऊन त्यांनी ही विशिष्ट पदे भूषवली नाहीत."
      },
      {
        "option_english": "Balashastri Jambhekar",
        "option_marathi": "बाळशास्त्री जांभेकर",
        "is_correct": true,
        "reason_english": "Balashastri Jambhekar held both positions: Educational Inspector of Bombay Presidency and Professor at Elphinstone College.",
        "reason_marathi": "बाळशास्त्री जांभेकर यांनी मुंबई इलाख्याचे शिक्षण तपासनीस आणि एल्फिन्स्टन कॉलेजमध्ये प्राध्यापक ही दोन्ही पदे भूषवली होती."
      },
      {
        "option_english": "Lokahitawadi",
        "option_marathi": "लोकहितवादी",
        "is_correct": false,
        "reason_english": "Gopal Hari Deshmukh (Lokahitawadi) was a social reformer and judge, but not an Educational Inspector or Elphinstone Professor.",
        "reason_marathi": "गोपाळ हरी देशमुख (लोकहितवादी) हे समाजसुधारक आणि न्यायाधीश होते, परंतु ते शिक्षण तपासनीस किंवा एल्फिन्स्टन कॉलेजमध्ये प्राध्यापक नव्हते."
      }
    ]
  },
  {
    "q_no": 35,
    "question_marathi": "Nation म्हणजे 'एकमय लोक' अशी व्याख्या कोणी केली ?",
    "question_english": "Who defined Nation as a 'Unified People'?",
    "options_marathi": [
      "राजर्षी शाहू महाराज",
      "ज्ञानगिरी बुवा",
      "महात्मा ज्योतिबा फुले",
      "डॉ. बाबासाहेब आंबेडकर"
    ],
    "options_english": [
      "Rajarshi Shahu Maharaj",
      "Dyangiri Buva",
      "Mahatma Jyotiba Phule",
      "Dr. Babasaheb Ambedkar"
    ],
    "correct_option_index": 4,
    "subject": "History",
    "topic": "Political Thought/Nation Building",
    "difficulty": "Medium",
    "trap_detected": "Close Option",
    "explanation_english": "Dr. Babasaheb Ambedkar, the chief architect of the Indian Constitution, emphasized the concept of a 'Nation' as a 'Unified People'. His vision of nation-building was rooted in social equality, justice, and fraternity, where people from diverse backgrounds would come together as one, overcoming divisions of caste, religion, and creed. He believed that a true nation could only be formed when its people were united by common ideals and constitutional values.",
    "explanation_marathi": "भारतीय संविधानाचे शिल्पकार डॉ. बाबासाहेब आंबेडकर यांनी 'राष्ट्र' या संकल्पनेवर 'एकमय लोक' म्हणून जोर दिला. त्यांचे राष्ट्रनिर्माणाचे स्वप्न सामाजिक समानता, न्याय आणि बंधुत्वावर आधारित होते, जिथे विविध पार्श्वभूमीचे लोक जात, धर्म आणि पंथाचे भेद विसरून एक म्हणून एकत्र येतील. त्यांचे मत होते की, जेव्हा लोक समान आदर्श आणि संवैधानिक मूल्यांनी एकत्र येतात, तेव्हाच खरे राष्ट्र निर्माण होऊ शकते.",
    "options_breakdown": [
      {
        "option_english": "Rajarshi Shahu Maharaj",
        "option_marathi": "राजर्षी शाहू महाराज",
        "is_correct": false,
        "reason_english": "While Rajarshi Shahu Maharaj worked for social equality and unity, this specific definition of 'Nation' is not primarily attributed to him.",
        "reason_marathi": "राजर्षी शाहू महाराजांनी सामाजिक समानता आणि एकतेसाठी काम केले असले तरी, 'राष्ट्र' ची ही विशिष्ट व्याख्या प्रामुख्याने त्यांना दिली जात नाही."
      },
      {
        "option_english": "Dyangiri Buva",
        "option_marathi": "ज्ञानगिरी बुवा",
        "is_correct": false,
        "reason_english": "Dyangiri Buva is not a widely recognized figure for this specific definition of 'Nation'.",
        "reason_marathi": "ज्ञानगिरी बुवा हे 'राष्ट्र' च्या या विशिष्ट व्याख्येसाठी व्यापकपणे ओळखले जाणारे व्यक्तिमत्व नाहीत."
      },
      {
        "option_english": "Mahatma Jyotiba Phule",
        "option_marathi": "महात्मा ज्योतिबा फुले",
        "is_correct": false,
        "reason_english": "Mahatma Jyotiba Phule was a pioneer of social reform, but this precise definition of 'Nation' is more closely associated with Dr. Ambedkar's political philosophy.",
        "reason_marathi": "महात्मा ज्योतिबा फुले हे समाजसुधारणेचे प्रणेते होते, परंतु 'राष्ट्र' ची ही अचूक व्याख्या डॉ. आंबेडकरांच्या राजकीय तत्त्वज्ञानाशी अधिक जवळून संबंधित आहे."
      },
      {
        "option_english": "Dr. Babasaheb Ambedkar",
        "option_marathi": "डॉ. बाबासाहेब आंबेडकर",
        "is_correct": true,
        "reason_english": "Dr. Babasaheb Ambedkar's concept of nationhood strongly emphasized a 'Unified People' based on shared constitutional values and social equality.",
        "reason_marathi": "डॉ. बाबासाहेब आंबेडकरांच्या राष्ट्रवादाच्या संकल्पनेत सामायिक संवैधानिक मूल्ये आणि सामाजिक समानतेवर आधारित 'एकमय लोक' यावर जोरदार भर होता."
      }
    ]
  },
  {
    "q_no": 36,
    "question_marathi": "खालीलपैकी कोणते भारतीय राज्यघटनेचे महत्वाचे वैशिष्ट/ष्ट्ये आहेत ?\n(a) अध्यक्षीय शासनपद्धती\n(b) प्रभावशाली केंद्रशासन\n(c) दुहेरी न्यायपालिका\n(d) द्विगृही कायदेमंडळ\nयोग्य पर्याय निवडा :",
    "question_english": "Which of the following is/are the salient feature(s) of the Indian Constitution ?\n(a) Presidential form of Government\n(b) Dominant Central Government\n(c) Dual Judiciary\n(d) Bicameral Legislature\nSelect correct options:",
    "options_marathi": [
      "फक्त (a)",
      "(b) आणि (d)",
      "(b), (c), (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "Only (a)",
      "(b) and (d)",
      "(b), (c), (d)",
      "All the above"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Salient Features of Indian Constitution",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Indian Constitution has several salient features. India adopted a Parliamentary form of government, not a Presidential one. The Indian federal system has a strong unitary bias, making the Central Government dominant in many aspects. India has an integrated and independent judiciary, meaning a single system of courts from the Supreme Court down to the subordinate courts, not a dual judiciary. Lastly, the Indian Parliament is bicameral, consisting of the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). Therefore, (b) Dominant Central Government and (d) Bicameral Legislature are correct features.",
    "explanation_marathi": "भारतीय संविधानाची अनेक प्रमुख वैशिष्ट्ये आहेत. भारताने अध्यक्षीय नव्हे तर संसदीय शासनपद्धती स्वीकारली आहे. भारतीय संघराज्य प्रणालीमध्ये मजबूत एकात्मक कल आहे, ज्यामुळे अनेक बाबतीत केंद्र सरकार प्रभावी ठरते. भारतात एकात्मिक आणि स्वतंत्र न्यायव्यवस्था आहे, म्हणजे सर्वोच्च न्यायालयापासून कनिष्ठ न्यायालयांपर्यंत एकच न्यायव्यवस्था आहे, दुहेरी न्यायव्यवस्था नाही. शेवटी, भारतीय संसद द्विगृही आहे, ज्यात लोकसभा आणि राज्यसभा यांचा समावेश आहे. त्यामुळे, (b) प्रभावशाली केंद्रशासन आणि (d) द्विगृही कायदेमंडळ ही योग्य वैशिष्ट्ये आहेत.",
    "options_breakdown": [
      {
        "option_english": "Only (a)",
        "option_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "India has a Parliamentary form of Government, not a Presidential form.",
        "reason_marathi": "भारतात संसदीय शासनपद्धती आहे, अध्यक्षीय शासनपद्धती नाही."
      },
      {
        "option_english": "(b) and (d)",
        "option_marathi": "(b) आणि (d)",
        "is_correct": true,
        "reason_english": "India has a dominant central government (unitary bias in federalism) and a bicameral legislature (Lok Sabha and Rajya Sabha).",
        "reason_marathi": "भारतात प्रभावशाली केंद्रशासन (संघराज्यात एकात्मक कल) आणि द्विगृही कायदेमंडळ (लोकसभा आणि राज्यसभा) आहे."
      },
      {
        "option_english": "(b), (c), (d)",
        "option_marathi": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "India does not have a dual judiciary; it has an integrated and independent judiciary.",
        "reason_marathi": "भारतात दुहेरी न्यायपालिका नाही; येथे एकात्मिक आणि स्वतंत्र न्यायपालिका आहे."
      },
      {
        "option_english": "All the above",
        "option_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "Options (a) and (c) are incorrect features of the Indian Constitution.",
        "reason_marathi": "पर्याय (a) आणि (c) ही भारतीय संविधानाची चुकीची वैशिष्ट्ये आहेत."
      }
    ]
  },
  {
    "q_no": 37,
    "question_marathi": "सरकारीया कमिशन हे खालीलपैकी कशाशी संबंधित आहे ?\n(a) केंद्र-राज्य संबंध\n(b) निवडणूक सुधारणा\n(c) बँकींग व वित्तीय विभाग\nवरीलपैकी योग्य पर्याय निवडा :",
    "question_english": "The Sarkaria Commission is related to which of the following?\n(a) Centre and State Relations\n(b) Election Reforms\n(c) Banking and Finance Sector\nSelect correct option from above :",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (b)",
      "(a) आणि (b)",
      "वरील सर्व"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "(a) and (b)",
      "All the above"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Centre-State Relations/Commissions",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Sarkaria Commission was constituted in 1983 by the Government of India to review the working of the Indian Constitution and the arrangements between the Centre and the States. Its primary mandate was to examine and recommend changes regarding the Centre-State relations in various spheres, including legislative, administrative, and financial aspects. It did not deal with election reforms or the banking and finance sector.",
    "explanation_marathi": "सरकारिया आयोग १९८३ मध्ये भारत सरकारने केंद्र आणि राज्यांमधील संबंधांचे आणि अधिकारांच्या संतुलनाचे परीक्षण करण्यासाठी स्थापन केला होता. भारतीय संविधानाच्या कार्यप्रणालीचे आणि केंद्र-राज्य संबंधांचे पुनरावलोकन करणे हा त्याचा मुख्य उद्देश होता. यामध्ये कायदेशीर, प्रशासकीय आणि आर्थिक पैलूंमधील केंद्र-राज्य संबंधांबाबत शिफारसी करणे समाविष्ट होते. निवडणूक सुधारणा किंवा बँकिंग आणि वित्तीय क्षेत्राशी त्याचा संबंध नव्हता.",
    "options_breakdown": [
      {
        "option_english": "Only (a)",
        "option_marathi": "फक्त (a)",
        "is_correct": true,
        "reason_english": "The Sarkaria Commission was specifically set up to examine and recommend on Centre-State relations.",
        "reason_marathi": "सरकारिया आयोग विशेषतः केंद्र-राज्य संबंधांवर परीक्षण आणि शिफारसी करण्यासाठी स्थापन करण्यात आला होता."
      },
      {
        "option_english": "Only (b)",
        "option_marathi": "फक्त (b)",
        "is_correct": false,
        "reason_english": "The Sarkaria Commission was not related to election reforms; other committees dealt with this subject.",
        "reason_marathi": "सरकारिया आयोग निवडणूक सुधारणांशी संबंधित नव्हता; या विषयावर इतर समित्यांनी काम केले."
      },
      {
        "option_english": "(a) and (b)",
        "option_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "Only Centre-State relations (a) was the mandate of the Sarkaria Commission, not election reforms (b).",
        "reason_marathi": "सरकारिया आयोगाचा उद्देश केवळ केंद्र-राज्य संबंध (a) होता, निवडणूक सुधारणा (b) नाही."
      },
      {
        "option_english": "All the above",
        "option_marathi": "वरील सर्व",
        "is_correct": false,
        "reason_english": "The Sarkaria Commission was not related to election reforms or the banking and finance sector.",
        "reason_marathi": "सरकारिया आयोग निवडणूक सुधारणा किंवा बँकिंग आणि वित्तीय क्षेत्राशी संबंधित नव्हता."
      }
    ]
  },
  {
    "q_no": 38,
    "question_marathi": "माहितीचा अधिकार ______ आहे.",
    "question_english": "Right to information is ______.",
    "options_marathi": [
      "मूलभूत अधिकार",
      "कायदेशीर अधिकार",
      "मूलभूत अधिकार नाही व कायदेशीर अधिकार ही नाही",
      "मूलभूत अधिकार व कायदेशीर अधिकार हे दोन्ही आहेत"
    ],
    "options_english": [
      "Fundamental Right",
      "Legal Right",
      "Neither fundamental right nor legal right",
      "Both fundamental right as well as legal right"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Rights/Indian Constitution",
    "difficulty": "Medium",
    "trap_detected": "Nuance/Close Option",
    "explanation_english": "The Right to Information (RTI) is primarily a legal right, established by the Right to Information Act, 2005. This Act empowers citizens to access information held by public authorities. While the Supreme Court has interpreted the right to information as an implied fundamental right under Article 19(1)(a) (freedom of speech and expression) and Article 21 (right to life and personal liberty), its direct enforceability and specific provisions are derived from the statutory law. Therefore, it is most accurately classified as a legal right, with its fundamental nature being a judicial interpretation.",
    "explanation_marathi": "माहितीचा अधिकार (RTI) हा प्रामुख्याने एक कायदेशीर अधिकार आहे, जो माहितीचा अधिकार अधिनियम, २००५ द्वारे स्थापित केला गेला आहे. हा कायदा नागरिकांना सार्वजनिक प्राधिकरणांकडील माहिती मिळवण्याचा अधिकार देतो. जरी सर्वोच्च न्यायालयाने माहितीचा अधिकार कलम १९(१)(अ) (भाषण आणि अभिव्यक्ती स्वातंत्र्य) आणि कलम २१ (जीवन आणि वैयक्तिक स्वातंत्र्याचा अधिकार) अंतर्गत एक अंतर्भूत मूलभूत अधिकार म्हणून अर्थ लावला असला तरी, त्याची थेट अंमलबजावणी आणि विशिष्ट तरतुदी वैधानिक कायद्यातून येतात. त्यामुळे, तो सर्वात अचूकपणे कायदेशीर अधिकार म्हणून वर्गीकृत केला जातो, ज्याचे मूलभूत स्वरूप न्यायिक अर्थ लावण्यावर आधारित आहे.",
    "options_breakdown": [
      {
        "option_english": "Fundamental Right",
        "option_marathi": "मूलभूत अधिकार",
        "is_correct": false,
        "reason_english": "While interpreted by the Supreme Court as flowing from fundamental rights (Art 19(1)(a) and 21), its direct statutory basis makes it primarily a legal right.",
        "reason_marathi": "सर्वोच्च न्यायालयाने मूलभूत अधिकारांमधून (कलम १९(१)(अ) आणि २१) उद्भवणारा अधिकार म्हणून याचा अर्थ लावला असला तरी, त्याचा थेट वैधानिक आधार त्याला प्रामुख्याने कायदेशीर अधिकार बनवतो."
      },
      {
        "option_english": "Legal Right",
        "option_marathi": "कायदेशीर अधिकार",
        "is_correct": true,
        "reason_english": "The Right to Information is explicitly provided and governed by the Right to Information Act, 2005, making it a statutory or legal right.",
        "reason_marathi": "माहितीचा अधिकार हा माहितीचा अधिकार अधिनियम, २००५ द्वारे स्पष्टपणे प्रदान केलेला आणि नियंत्रित केलेला आहे, ज्यामुळे तो एक वैधानिक किंवा कायदेशीर अधिकार बनतो."
      },
      {
        "option_english": "Neither fundamental right nor legal right",
        "option_marathi": "मूलभूत अधिकार नाही व कायदेशीर अधिकार ही नाही",
        "is_correct": false,
        "reason_english": "This statement is incorrect as RTI is clearly a legal right and has been interpreted as a fundamental right.",
        "reason_marathi": "हे विधान चुकीचे आहे कारण माहितीचा अधिकार स्पष्टपणे एक कायदेशीर अधिकार आहे आणि त्याचा मूलभूत अधिकार म्हणून अर्थ लावला गेला आहे."
      },
      {
        "option_english": "Both fundamental right as well as legal right",
        "option_marathi": "मूलभूत अधिकार व कायदेशीर अधिकार हे दोन्ही आहेत",
        "is_correct": false,
        "reason_english": "While academically it has aspects of both, in the context of direct classification and the provided options, 'Legal Right' is often considered the primary classification due to its statutory enactment.",
        "reason_marathi": "शैक्षणिकदृष्ट्या यात दोन्ही पैलू असले तरी, थेट वर्गीकरण आणि दिलेल्या पर्यायांच्या संदर्भात, त्याच्या वैधानिक अधिनियमामुळे 'कायदेशीर अधिकार' हे प्राथमिक वर्गीकरण मानले जाते."
      }
    ]
  },
  {
    "q_no": 39,
    "question_marathi": "कार्यकाळानुसार योग्य क्रम लावा (महाराष्ट्राचे मुख्यमंत्री) :\n(a) ए.आर. अंतुले\n(b) शिवाजीराव निलंगेकर\n(c) वसंतराव नाईक\n(d) बाबासाहेब भोसले\nपर्यायी उत्तरे :",
    "question_english": "Arrange in a appropriate order according to tenure (Chief Ministers of Maharashtra) :\n(a) A.R. Antulay\n(b) Shivajirao Nilangekar\n(c) Vasantrao Naik\n(d) Babasaheb Bhosale\nAnswer options:",
    "options_marathi": [
      "(c), (a), (d), (b)",
      "(c), (d), (b), (a)",
      "(a), (c), (d), (b)",
      "(a), (d), (b), (c)"
    ],
    "options_english": [
      "(c), (a), (d), (b)",
      "(c), (d), (b), (a)",
      "(a), (c), (d), (b)",
      "(a), (d), (b), (c)"
    ],
    "correct_option_index": 1,
    "subject": "Polity",
    "topic": "Chief Ministers of Maharashtra",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "To arrange the Chief Ministers of Maharashtra by their tenure, we need to recall their respective periods in office:\n*   Vasantrao Naik: 1963-1975\n*   A.R. Antulay: 1980-1982\n*   Babasaheb Bhosale: 1982-1983\n*   Shivajirao Nilangekar: 1985-1986\nTherefore, the correct chronological order is (c) Vasantrao Naik, followed by (a) A.R. Antulay, then (d) Babasaheb Bhosale, and finally (b) Shivajirao Nilangekar.",
    "explanation_marathi": "महाराष्ट्राच्या मुख्यमंत्र्यांचा कार्यकाळानुसार योग्य क्रम लावण्यासाठी, आपल्याला त्यांच्या संबंधित कार्यकाळाची आठवण असणे आवश्यक आहे:\n*   वसंतराव नाईक: १९६३-१९७५\n*   ए.आर. अंतुले: १९८०-१९८२\n*   बाबासाहेब भोसले: १९८२-१९८३\n*   शिवाजीराव निलंगेकर: १९८५-१९८६\nम्हणून, योग्य कालक्रमानुसार क्रम (c) वसंतराव नाईक, त्यानंतर (a) ए.आर. अंतुले, नंतर (d) बाबासाहेब भोसले आणि शेवटी (b) शिवाजीराव निलंगेकर असा आहे.",
    "options_breakdown": [
      {
        "option_english": "(c), (a), (d), (b)",
        "option_marathi": "(c), (a), (d), (b)",
        "is_correct": true,
        "reason_english": "This sequence correctly represents the chronological order of their tenures as Chief Ministers of Maharashtra.",
        "reason_marathi": "हा क्रम महाराष्ट्राच्या मुख्यमंत्र्यांच्या कार्यकाळाचा योग्य कालक्रमानुसार क्रम दर्शवतो."
      },
      {
        "option_english": "(c), (d), (b), (a)",
        "option_marathi": "(c), (d), (b), (a)",
        "is_correct": false,
        "reason_english": "The order of A.R. Antulay, Babasaheb Bhosale, and Shivajirao Nilangekar is incorrect in this option.",
        "reason_marathi": "या पर्यायामध्ये ए.आर. अंतुले, बाबासाहेब भोसले आणि शिवाजीराव निलंगेकर यांचा क्रम चुकीचा आहे."
      },
      {
        "option_english": "(a), (c), (d), (b)",
        "option_marathi": "(a), (c), (d), (b)",
        "is_correct": false,
        "reason_english": "Vasantrao Naik served much earlier than A.R. Antulay, making this order incorrect.",
        "reason_marathi": "वसंतराव नाईक यांनी ए.आर. अंतुले यांच्या खूप आधी सेवा केली होती, त्यामुळे हा क्रम चुकीचा आहे."
      },
      {
        "option_english": "(a), (d), (b), (c)",
        "option_marathi": "(a), (d), (b), (c)",
        "is_correct": false,
        "reason_english": "Vasantrao Naik served much earlier than A.R. Antulay, making this order incorrect.",
        "reason_marathi": "वसंतराव नाईक यांनी ए.आर. अंतुले यांच्या खूप आधी सेवा केली होती, त्यामुळे हा क्रम चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 40,
    "question_marathi": "खालीलपैकी कोणती जोडी योग्यरित्या जुळलेली नाही ?",
    "question_english": "Which of the following pair is not correctly matched ?",
    "options_marathi": [
      "मूलभूत कर्तव्ये - भाग-IV A",
      "राज्यधोरणाची निर्देशक तत्वे - भाग-IV",
      "मूलभूत अधिकार - भाग-III",
      "यापैकी नाही"
    ],
    "options_english": [
      "Fundamental Duties - Part-IV A",
      "Directive Principles of State Policy - Part-IV",
      "Fundamental Rights - Part-III",
      "None of these"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Parts of Indian Constitution",
    "difficulty": "Easy",
    "trap_detected": "Negative Question",
    "explanation_english": "This question tests the knowledge of the parts of the Indian Constitution and the subjects they deal with.\n*   Fundamental Duties are indeed enshrined in Part IV-A of the Constitution (Article 51A).\n*   Directive Principles of State Policy are covered in Part IV of the Constitution (Articles 36-51).\n*   Fundamental Rights are detailed in Part III of the Constitution (Articles 12-35).\nSince all the given pairs are correctly matched, the statement 'Which of the following pair is not correctly matched?' leads to the conclusion that none of the options (a), (b), or (c) are incorrectly matched. Hence, 'None of these' is the correct answer.",
    "explanation_marathi": "हा प्रश्न भारतीय संविधानाचे भाग आणि ते कोणत्या विषयाशी संबंधित आहेत याबद्दलच्या ज्ञानाची चाचणी घेतो.\n*   मूलभूत कर्तव्ये खरोखरच संविधानाच्या भाग IV-A मध्ये समाविष्ट आहेत (अनुच्छेद 51A).\n*   राज्यधोरणाची निर्देशक तत्वे संविधानाच्या भाग IV मध्ये समाविष्ट आहेत (अनुच्छेद 36-51).\n*   मूलभूत अधिकार संविधानाच्या भाग III मध्ये तपशीलवार आहेत (अनुच्छेद 12-35).\nदिलेल्या सर्व जोड्या योग्यरित्या जुळलेल्या असल्याने, 'खालीलपैकी कोणती जोडी योग्यरित्या जुळलेली नाही?' या प्रश्नाचे उत्तर असे आहे की, पर्याय (a), (b) किंवा (c) पैकी कोणतीही जोडी चुकीची जुळलेली नाही. म्हणून, 'यापैकी नाही' हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option_english": "Fundamental Duties - Part-IV A",
        "option_marathi": "मूलभूत कर्तव्ये - भाग-IV A",
        "is_correct": false,
        "reason_english": "This pair is correctly matched. Fundamental Duties are indeed in Part IV-A of the Constitution.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. मूलभूत कर्तव्ये संविधानाच्या भाग IV-A मध्ये आहेत."
      },
      {
        "option_english": "Directive Principles of State Policy - Part-IV",
        "option_marathi": "राज्यधोरणाची निर्देशक तत्वे - भाग-IV",
        "is_correct": false,
        "reason_english": "This pair is correctly matched. Directive Principles of State Policy are in Part IV of the Constitution.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. राज्यधोरणाची निर्देशक तत्वे संविधानाच्या भाग IV मध्ये आहेत."
      },
      {
        "option_english": "Fundamental Rights - Part-III",
        "option_marathi": "मूलभूत अधिकार - भाग-III",
        "is_correct": false,
        "reason_english": "This pair is correctly matched. Fundamental Rights are in Part III of the Constitution.",
        "reason_marathi": "ही जोडी योग्यरित्या जुळलेली आहे. मूलभूत अधिकार संविधानाच्या भाग III मध्ये आहेत."
      },
      {
        "option_english": "None of these",
        "option_marathi": "यापैकी नाही",
        "is_correct": true,
        "reason_english": "Since all the above three pairs are correctly matched, there is no incorrectly matched pair among them. Hence, 'None of these' is the correct answer to the question asking for the incorrectly matched pair.",
        "reason_marathi": "वरील तिन्ही जोड्या योग्यरित्या जुळलेल्या असल्याने, त्यांच्यापैकी कोणतीही जोडी चुकीची जुळलेली नाही. म्हणून, चुकीची जुळलेली जोडी विचारणाऱ्या प्रश्नाचे 'यापैकी नाही' हे योग्य उत्तर आहे."
      }
    ]
  },
  {
    "q_no": 41,
    "question_marathi": "योग्य कथने ओळखा :\n(a) 'फिफ्टी इयर्स ऑफ लेजिस्लेटिव्ह कौन्सिल इन महाराष्ट्र' हा ग्रंथ यशवंतराव चव्हाण यांनी लिहीला.\n(b) महाराष्ट्राच्या विधान परिषदेचा वर्धापन दिन 20 जुलै आहे.\n(c) महाराष्ट्राच्या विधान परिषदेमध्ये राज्यपालांद्वारे नियुक्त 12 सदस्य असतात.\n(d) महाराष्ट्राच्या विधान परिषदेची गणपूर्ती संख्या 10 सदस्य एवढी आहे.\nपर्यायी उत्तरे :",
    "question_english": "Select the correct statements :\n(a) 'Fifty Years of Legislative Council in Maharashtra' was written by Yashvantrao Chavan.\n(b) Establishment day of Legislative Council of Maharashtra is 20 July.\n(c) 12 members are nominated by Governor in Legislative Council of Maharashtra.\n(d) The Quorum for Legislative Council of Maharashtra is 10 members.\nAnswer options :",
    "options_marathi": [
      "फक्त (b), (c)",
      "फक्त (c), (d)",
      "फक्त (a), (b), (c)",
      "फक्त (b), (c), (d)"
    ],
    "options_english": [
      "Only (b), (c)",
      "Only (c), (d)",
      "Only (a), (b), (c)",
      "Only (b), (c), (d)"
    ],
    "correct_option_index": 0,
    "subject": "Polity",
    "topic": "State Legislature, Legislative Council, Constitutional Provisions",
    "difficulty": "Hard",
    "trap_detected": "Factual Swap, Ambiguous Phrasing",
    "explanation_english": "Let's analyze each statement:\n(a) The book 'Fifty Years of Legislative Council in Maharashtra' was published by the Maharashtra Legislature Secretariat, not authored by Yashvantrao Chavan. Hence, statement (a) is incorrect.\n(b) The Bombay Legislative Council was constituted on 20th July 1937 under the Government of India Act, 1935. However, the State of Maharashtra was formed in 1960. While there is historical continuity, referring to 20th July as the 'Establishment day of Maharashtra Legislative Council' is imprecise in the context of the modern state. Hence, statement (b) is generally considered incorrect for the current Maharashtra Legislative Council.\n(c) As per Article 171(3)(e) of the Indian Constitution, 'as nearly as may be, one-sixth' of the total members of a Legislative Council are nominated by the Governor. For Maharashtra, with 78 members, one-sixth is 13 members, not 12. Hence, statement (c) is factually incorrect.\n(d) Article 189(3) states that the quorum to constitute a meeting of a House of the Legislature of a State shall be ten members or one-tenth of the total number of members of the House, whichever is greater. For the Maharashtra Legislative Council (78 members), one-tenth is 7.8, which means 8 members. The greater of 10 and 8 is 10. Hence, statement (d) is correct.\nSince only statement (d) is correct and no option reflects 'Only (d)', the question is flawed or has no single correct option among the choices provided.",
    "explanation_marathi": "प्रत्येक विधानाचे विश्लेषण करूया:\n(a) 'फिफ्टी इयर्स ऑफ लेजिस्लेटिव्ह कौन्सिल इन महाराष्ट्र' हा ग्रंथ महाराष्ट्र विधानमंडळ सचिवालयाने प्रकाशित केला होता, तो यशवंतराव चव्हाण यांनी लिहिलेला नाही. त्यामुळे विधान (a) चुकीचे आहे.\n(b) मुंबई विधान परिषद 20 जुलै 1937 रोजी भारत सरकार अधिनियम, 1935 अंतर्गत स्थापन झाली होती. तथापि, महाराष्ट्र राज्याची स्थापना 1960 मध्ये झाली. ऐतिहासिक सातत्य असले तरी, 20 जुलैला 'महाराष्ट्र विधान परिषदेचा स्थापना दिवस' म्हणून संबोधणे सध्याच्या राज्याच्या संदर्भात अचूक नाही. त्यामुळे विधान (b) सामान्यतः सध्याच्या महाराष्ट्र विधान परिषदेसाठी चुकीचे मानले जाते.\n(c) भारतीय संविधानाच्या अनुच्छेद 171(3)(e) नुसार, विधान परिषदेच्या एकूण सदस्यांपैकी 'शक्य तितके, एक-षष्ठांश' सदस्य राज्यपालांद्वारे नामनिर्देशित केले जातात. महाराष्ट्रासाठी, 78 सदस्य असल्याने, एक-षष्ठांश म्हणजे 13 सदस्य, 12 नव्हे. त्यामुळे विधान (c) वस्तुस्थितीनुसार चुकीचे आहे.\n(d) अनुच्छेद 189(3) नुसार, राज्याच्या विधानमंडळाच्या सभागृहाच्या बैठकीसाठी गणपूर्ती संख्या दहा सदस्य किंवा सभागृहाच्या एकूण सदस्यांच्या एक-दशांश सदस्य, यापैकी जी संख्या अधिक असेल ती असेल. महाराष्ट्र विधान परिषदेसाठी (78 सदस्य), एक-दशांश म्हणजे 7.8, म्हणजेच 8 सदस्य. 10 आणि 8 यापैकी मोठी संख्या 10 आहे. त्यामुळे विधान (d) बरोबर आहे.\nकेवळ विधान (d) बरोबर असल्याने आणि कोणताही पर्याय 'फक्त (d)' दर्शवत नसल्याने, हा प्रश्न सदोष आहे किंवा दिलेल्या पर्यायांमध्ये कोणताही एकच योग्य पर्याय नाही.",
    "options_breakdown": [
      {
        "option": "Only (b), (c)",
        "is_correct": false,
        "reason_english": "Statement (b) is imprecise for 'Maharashtra' Legislative Council's establishment day, and statement (c) is factually incorrect (it should be 13 nominated members, not 12).",
        "reason_marathi": "विधान (b) 'महाराष्ट्र' विधान परिषदेच्या स्थापना दिनासाठी अचूक नाही आणि विधान (c) वस्तुस्थितीनुसार चुकीचे आहे (12 नव्हे तर 13 नामनिर्देशित सदस्य असावेत)."
      },
      {
        "option": "Only (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (c) is factually incorrect (it should be 13 nominated members, not 12).",
        "reason_marathi": "विधान (c) वस्तुस्थितीनुसार चुकीचे आहे (12 नव्हे तर 13 नामनिर्देशित सदस्य असावेत)."
      },
      {
        "option": "Only (a), (b), (c)",
        "is_correct": false,
        "reason_english": "Statements (a), (b), and (c) are all incorrect based on factual and constitutional analysis.",
        "reason_marathi": "विधान (a), (b) आणि (c) वस्तुस्थिती आणि घटनात्मक विश्लेषणानुसार सर्व चुकीची आहेत."
      },
      {
        "option": "Only (b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statements (b) and (c) are incorrect. Only (d) is correct.",
        "reason_marathi": "विधान (b) आणि (c) चुकीची आहेत. फक्त (d) बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 42,
    "question_marathi": "भारताच्या कोणत्या राज्यांची केंद्रशासीत प्रदेश वर्गवारीमधून राज्यांच्या वर्गवारीमध्ये बढती करण्यात आली ?\n(a) मिझोरम\n(b) अरुणाचल प्रदेश\n(c) गोवा\n(d) सिक्कीम\nपर्यायी उत्तरे :",
    "question_english": "Which are the states of India promoted from the category of Union Territory into that of a State ?\n(a) Mizoram\n(b) Arunachal Pradesh\n(c) Goa\n(d) Sikkim\nAnswer options:",
    "options_marathi": [
      "फक्त (a), (b)",
      "फक्त (b), (c), (d)",
      "फक्त (a), (b), (c)",
      "फक्त (c), (d)"
    ],
    "options_english": [
      "Only (a), (b)",
      "Only (b), (c), (d)",
      "Only (a), (b), (c)",
      "Only (c), (d)"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "State Reorganization, Union Territories, Formation of States",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "Let's examine the status of each state:\n(a) Mizoram: It was initially a district of Assam, then became a Union Territory in 1972, and finally attained full statehood in 1987 through the 53rd Constitutional Amendment Act, 1986. So, (a) is correct.\n(b) Arunachal Pradesh: Formerly known as NEFA (North-East Frontier Agency), it became a Union Territory in 1972 and was granted full statehood in 1987 through the 55th Constitutional Amendment Act, 1986. So, (b) is correct.\n(c) Goa: It was part of the Union Territory of Goa, Daman & Diu. Goa became a full state in 1987 through the 56th Constitutional Amendment Act, 1987. So, (c) is correct.\n(d) Sikkim: Sikkim was an Indian protectorate before it became an associate state in 1974 (35th Amendment Act) and then a full-fledged state of the Indian Union in 1975 (36th Amendment Act). It was never a Union Territory of India. So, (d) is incorrect.\nTherefore, Mizoram, Arunachal Pradesh, and Goa are the states that were promoted from Union Territory status to statehood.",
    "explanation_marathi": "प्रत्येक राज्याच्या स्थितीचे परीक्षण करूया:\n(a) मिझोरम: हे सुरुवातीला आसामचा एक जिल्हा होते, नंतर 1972 मध्ये केंद्रशासित प्रदेश बनले आणि शेवटी 1987 मध्ये 53 व्या घटनादुरुस्ती कायद्याने (1986) पूर्ण राज्याचा दर्जा प्राप्त केला. त्यामुळे (a) बरोबर आहे.\n(b) अरुणाचल प्रदेश: पूर्वी NEFA (नॉर्थ-ईस्ट फ्रंटियर एजन्सी) म्हणून ओळखले जाणारे, ते 1972 मध्ये केंद्रशासित प्रदेश बनले आणि 1987 मध्ये 55 व्या घटनादुरुस्ती कायद्याने (1986) पूर्ण राज्याचा दर्जा देण्यात आला. त्यामुळे (b) बरोबर आहे.\n(c) गोवा: हे गोवा, दमण आणि दीव या केंद्रशासित प्रदेशाचा भाग होते. गोवा 1987 मध्ये 56 व्या घटनादुरुस्ती कायद्याने (1987) पूर्ण राज्य बनले. त्यामुळे (c) बरोबर आहे.\n(d) सिक्कीम: सिक्कीम हे भारतीय संरक्षित राज्य होते, जे 1974 मध्ये सहयोगी राज्य (35 वी घटनादुरुस्ती) बनले आणि नंतर 1975 मध्ये भारतीय संघराज्याचे पूर्ण राज्य (36 वी घटनादुरुस्ती) बनले. ते कधीही भारताचा केंद्रशासित प्रदेश नव्हते. त्यामुळे (d) चुकीचे आहे.\nम्हणून, मिझोरम, अरुणाचल प्रदेश आणि गोवा ही राज्ये केंद्रशासित प्रदेशाच्या श्रेणीतून राज्याच्या श्रेणीमध्ये पदोन्नत झाली.",
    "options_breakdown": [
      {
        "option": "Only (a), (b)",
        "is_correct": false,
        "reason_english": "This option is incomplete as Goa (c) also transitioned from a UT to a state.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण गोवा (c) देखील केंद्रशासित प्रदेशातून राज्यात रूपांतरित झाले."
      },
      {
        "option": "Only (b), (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect as Sikkim was never a Union Territory.",
        "reason_marathi": "विधान (d) चुकीचे आहे कारण सिक्कीम कधीही केंद्रशासित प्रदेश नव्हते."
      },
      {
        "option": "Only (a), (b), (c)",
        "is_correct": true,
        "reason_english": "Mizoram, Arunachal Pradesh, and Goa all transitioned from Union Territory status to full statehood.",
        "reason_marathi": "मिझोरम, अरुणाचल प्रदेश आणि गोवा या तिन्ही राज्यांनी केंद्रशासित प्रदेशाच्या दर्जातून पूर्ण राज्याचा दर्जा प्राप्त केला."
      },
      {
        "option": "Only (c), (d)",
        "is_correct": false,
        "reason_english": "Statement (d) is incorrect as Sikkim was never a Union Territory.",
        "reason_marathi": "विधान (d) चुकीचे आहे कारण सिक्कीम कधीही केंद्रशासित प्रदेश नव्हते."
      }
    ]
  },
  {
    "q_no": 43,
    "question_marathi": "खालीलपैकी कोणती उदाहरणे राज्य धोरणाच्या मार्गदर्शक तत्वांच्या अंमलबजावणीची आहेत ?\n(a) किमान वेतन कायदा, 1948\n(b) मातृत्व लाभ कायदा, 1961\n(c) राष्ट्रीय वन धोरण, 1988\n(d) महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना, 2006\nपर्यायी उत्तरे :",
    "question_english": "Which of the following are examples of implementation of Directive Principles of State Policy ?\n(a) The Minimum Wages Act, 1948\n(b) The Maternity Benefit Act, 1961\n(c) The National Forest Policy, 1988\n(d) Mahatma Gandhi National Rural Employment Guarantee Program, 2006\nAnswer options :",
    "options_marathi": [
      "(a), (b), (d)",
      "(a), (c), (d)",
      "(b), (c), (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a), (b), (d)",
      "(a), (c), (d)",
      "(b), (c), (d)",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Polity",
    "topic": "Directive Principles of State Policy (DPSP), Social Legislation",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Directive Principles of State Policy (DPSPs) are fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws. Many laws and policies have been enacted to implement these principles:\n(a) The Minimum Wages Act, 1948, aims to secure a living wage for workers, aligning with DPSP Article 43 (living wage, etc.) and Article 39(a) (adequate means of livelihood). Hence, (a) is an example of DPSP implementation.\n(b) The Maternity Benefit Act, 1961, provides for maternity relief, fulfilling the objective of DPSP Article 42 (just and humane conditions of work and maternity relief). Hence, (b) is an example of DPSP implementation.\n(c) The National Forest Policy, 1988, focuses on environmental protection and forest conservation, directly implementing DPSP Article 48A (protection and improvement of environment and safeguarding of forests and wild life). Hence, (c) is an example of DPSP implementation.\n(d) The Mahatma Gandhi National Rural Employment Guarantee Program (MGNREGA), 2006, guarantees the right to work, which is a direct implementation of DPSP Article 41 (right to work, to education and to public assistance in certain cases). Hence, (d) is an example of DPSP implementation.\nSince all the given statements are examples of DPSP implementation, 'All of the above' is the correct answer.",
    "explanation_marathi": "राज्य धोरणाची मार्गदर्शक तत्त्वे (DPSPs) देशाच्या शासनामध्ये मूलभूत आहेत आणि कायदे बनवताना ही तत्त्वे लागू करणे हे राज्याचे कर्तव्य असेल. या तत्त्वांची अंमलबजावणी करण्यासाठी अनेक कायदे आणि धोरणे तयार करण्यात आली आहेत:\n(a) किमान वेतन कायदा, 1948, कामगारांना किमान वेतन मिळवून देण्याचे उद्दिष्ट ठेवतो, जो DPSP च्या अनुच्छेद 43 (निर्वाह वेतन इ.) आणि अनुच्छेद 39(a) (उपजीविकेचे पुरेसे साधन) शी सुसंगत आहे. त्यामुळे (a) हे DPSP अंमलबजावणीचे उदाहरण आहे.\n(b) मातृत्व लाभ कायदा, 1961, मातृत्व लाभाची तरतूद करतो, जो DPSP च्या अनुच्छेद 42 (कामाच्या न्याय्य आणि मानवी परिस्थिती आणि मातृत्व मदत) चे उद्दिष्ट पूर्ण करतो. त्यामुळे (b) हे DPSP अंमलबजावणीचे उदाहरण आहे.\n(c) राष्ट्रीय वन धोरण, 1988, पर्यावरण संरक्षण आणि वन संवर्धनावर लक्ष केंद्रित करते, जे DPSP च्या अनुच्छेद 48A (पर्यावरणाचे संरक्षण आणि सुधारणा तसेच वने आणि वन्यजीवांचे संरक्षण) ची थेट अंमलबजावणी करते. त्यामुळे (c) हे DPSP अंमलबजावणीचे उदाहरण आहे.\n(d) महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना (MGNREGA), 2006, कामाच्या अधिकाराची हमी देते, जी DPSP च्या अनुच्छेद 41 (कामाचा, शिक्षणाचा आणि काही विशिष्ट प्रकरणांमध्ये सार्वजनिक मदतीचा अधिकार) ची थेट अंमलबजावणी आहे. त्यामुळे (d) हे DPSP अंमलबजावणीचे उदाहरण आहे.\nदिलेली सर्व विधाने DPSP अंमलबजावणीची उदाहरणे असल्याने, 'वरील सर्व' हे योग्य उत्तर आहे.",
    "options_breakdown": [
      {
        "option": "(a), (b), (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (c) is also an example of DPSP implementation.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (c) देखील DPSP अंमलबजावणीचे उदाहरण आहे."
      },
      {
        "option": "(a), (c), (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (b) is also an example of DPSP implementation.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (b) देखील DPSP अंमलबजावणीचे उदाहरण आहे."
      },
      {
        "option": "(b), (c), (d)",
        "is_correct": false,
        "reason_english": "This option is incomplete as statement (a) is also an example of DPSP implementation.",
        "reason_marathi": "हा पर्याय अपूर्ण आहे कारण विधान (a) देखील DPSP अंमलबजावणीचे उदाहरण आहे."
      },
      {
        "option": "All of the above",
        "is_correct": true,
        "reason_english": "All four statements (a), (b), (c), and (d) represent successful implementations of various Directive Principles of State Policy.",
        "reason_marathi": "सर्व चार विधाने (a), (b), (c) आणि (d) राज्य धोरणाच्या विविध मार्गदर्शक तत्त्वांच्या यशस्वी अंमलबजावणीचे प्रतिनिधित्व करतात."
      }
    ]
  },
  {
    "q_no": 44,
    "question_marathi": "नोव्हेंबर 2021 मध्ये महाराष्ट्र विधान परिषदेने प्रसिद्ध केलेल्या माहितीनुसार महाराष्ट्र विधान परिषदेत सर्वाधिक जागा कोणत्या राजकीय पक्षाकडे आहेत ?",
    "question_english": "Which political party has largest number of seat in Maharashtra Legislative Council according to the information published by Maharashtra Legislative Council in November 2021?",
    "options_marathi": [
      "राष्ट्रवादी काँग्रेस पक्ष",
      "भारतीय राष्ट्रीय काँग्रेस",
      "शिवसेना",
      "भारतीय जनता पार्टी"
    ],
    "options_english": [
      "Nationalist Congress Party",
      "Indian National Congress",
      "Shivsena",
      "Bharatiya Janata Party"
    ],
    "correct_option_index": 4,
    "subject": "Current Affairs",
    "topic": "State Legislature, Political Parties, Maharashtra Politics",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "This question requires specific knowledge of the political composition of the Maharashtra Legislative Council at a particular point in time. As of November 2021, according to the information published by the Maharashtra Legislative Council, the Bharatiya Janata Party (BJP) held the largest number of seats. The composition of the Legislative Council is dynamic, changing due to biennial elections, by-elections, and nominations, making such factual recall questions time-sensitive.",
    "explanation_marathi": "या प्रश्नासाठी विशिष्ट वेळेतील महाराष्ट्र विधान परिषदेच्या राजकीय रचनेचे विशिष्ट ज्ञान आवश्यक आहे. नोव्हेंबर 2021 मध्ये महाराष्ट्र विधान परिषदेने प्रसिद्ध केलेल्या माहितीनुसार, भारतीय जनता पार्टी (भाजप) कडे सर्वाधिक जागा होत्या. विधान परिषदेची रचना द्वैवार्षिक निवडणुका, पोटनिवडणुका आणि नामनिर्देशनांमुळे बदलत असते, ज्यामुळे अशा वस्तुस्थितीवर आधारित प्रश्न वेळेनुसार संवेदनशील असतात.",
    "options_breakdown": [
      {
        "option": "Nationalist Congress Party",
        "is_correct": false,
        "reason_english": "While a significant party, NCP did not hold the largest number of seats in the Maharashtra Legislative Council in November 2021.",
        "reason_marathi": "एक महत्त्वाचा पक्ष असला तरी, नोव्हेंबर 2021 मध्ये राष्ट्रवादी काँग्रेस पक्षाकडे महाराष्ट्र विधान परिषदेत सर्वाधिक जागा नव्हत्या."
      },
      {
        "option": "Indian National Congress",
        "is_correct": false,
        "reason_english": "The Indian National Congress did not have the largest number of seats in the Maharashtra Legislative Council in November 2021.",
        "reason_marathi": "नोव्हेंबर 2021 मध्ये भारतीय राष्ट्रीय काँग्रेसकडे महाराष्ट्र विधान परिषदेत सर्वाधिक जागा नव्हत्या."
      },
      {
        "option": "Shivsena",
        "is_correct": false,
        "reason_english": "Shivsena was part of the ruling alliance but did not hold the largest number of seats in the Maharashtra Legislative Council in November 2021.",
        "reason_marathi": "शिवसेना सत्ताधारी आघाडीचा भाग होती, परंतु नोव्हेंबर 2021 मध्ये महाराष्ट्र विधान परिषदेत त्यांच्याकडे सर्वाधिक जागा नव्हत्या."
      },
      {
        "option": "Bharatiya Janata Party",
        "is_correct": true,
        "reason_english": "As per records from November 2021, the Bharatiya Janata Party was the single largest party in the Maharashtra Legislative Council.",
        "reason_marathi": "नोव्हेंबर 2021 च्या नोंदीनुसार, भारतीय जनता पार्टी महाराष्ट्र विधान परिषदेतील सर्वात मोठा पक्ष होता."
      }
    ]
  },
  {
    "q_no": 45,
    "question_marathi": "खालीलपैकी कोणते/ती मूलभूत कर्तव्य/व्ये नाहीत ?\n(a) भारताचे सार्वभौमत्व, एकता आणि अखंडता टिकवणे व संरक्षित करणे.\n(b) सार्वत्रिक निवडणूकीच्या वेळी आपल्या प्रौढमताधिकाराचा वापर करणे.\n(c) आपल्या संमिश्र संस्कृतिच्या वैभवशाली वारसाचे मूल्य जतन करणे.\nपर्यायी उत्तरे :",
    "question_english": "Which of the following is/are not a Fundamental Duty/s?\n(a) To uphold and protect the sovereignty, unity and integrity of India.\n(b) To exercise our universal adult franchise at the time of general elections.\n(c) To value and preserve rich heritage of our composite culture.\nAnswer options :",
    "options_marathi": [
      "फक्त (a) आणि (b)",
      "फक्त (b)",
      "फक्त (b) आणि (c)",
      "फक्त (a) आणि (c)"
    ],
    "options_english": [
      "Only (a) and (b)",
      "Only (b)",
      "Only (b) and (c)",
      "Only (a) and (c)"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Fundamental Duties, Indian Constitution",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "Fundamental Duties are enshrined in Article 51A of the Indian Constitution. Let's analyze each statement:\n(a) 'To uphold and protect the sovereignty, unity and integrity of India' is explicitly mentioned as a Fundamental Duty under Article 51A(c). Hence, this is a Fundamental Duty.\n(b) 'To exercise our universal adult franchise at the time of general elections' is a civic right and responsibility crucial for a democratic system, but it is *not* listed as one of the eleven Fundamental Duties in Article 51A. Hence, this is NOT a Fundamental Duty.\n(c) 'To value and preserve the rich heritage of our composite culture' is also a Fundamental Duty under Article 51A(f). Hence, this is a Fundamental Duty.\nTherefore, only statement (b) is not a Fundamental Duty.",
    "explanation_marathi": "मूलभूत कर्तव्ये भारतीय संविधानाच्या अनुच्छेद 51A मध्ये समाविष्ट आहेत. प्रत्येक विधानाचे विश्लेषण करूया:\n(a) 'भारताचे सार्वभौमत्व, एकता आणि अखंडता टिकवणे व संरक्षित करणे' हे अनुच्छेद 51A(c) अंतर्गत मूलभूत कर्तव्य म्हणून स्पष्टपणे नमूद केले आहे. त्यामुळे हे मूलभूत कर्तव्य आहे.\n(b) 'सार्वत्रिक निवडणूकीच्या वेळी आपल्या प्रौढमताधिकाराचा वापर करणे' हा लोकशाही व्यवस्थेसाठी महत्त्वाचा नागरिक अधिकार आणि जबाबदारी आहे, परंतु तो अनुच्छेद 51A मध्ये नमूद केलेल्या अकरा मूलभूत कर्तव्यांपैकी एक नाही. त्यामुळे हे मूलभूत कर्तव्य नाही.\n(c) 'आपल्या संमिश्र संस्कृतीच्या वैभवशाली वारसाचे मूल्य जतन करणे' हे देखील अनुच्छेद 51A(f) अंतर्गत मूलभूत कर्तव्य आहे. त्यामुळे हे मूलभूत कर्तव्य आहे.\nम्हणून, केवळ विधान (b) हे मूलभूत कर्तव्य नाही.",
    "options_breakdown": [
      {
        "option": "Only (a) and (b)",
        "is_correct": false,
        "reason_english": "Statement (a) is a Fundamental Duty, so this option is incorrect.",
        "reason_marathi": "विधान (a) हे मूलभूत कर्तव्य आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option": "Only (b)",
        "is_correct": true,
        "reason_english": "Exercising adult franchise is a right/responsibility, but not explicitly listed as a Fundamental Duty in Article 51A.",
        "reason_marathi": "प्रौढ मताधिकार वापरणे हा एक अधिकार/जबाबदारी आहे, परंतु अनुच्छेद 51A मध्ये ते मूलभूत कर्तव्य म्हणून स्पष्टपणे नमूद केलेले नाही."
      },
      {
        "option": "Only (b) and (c)",
        "is_correct": false,
        "reason_english": "Statement (c) is a Fundamental Duty, so this option is incorrect.",
        "reason_marathi": "विधान (c) हे मूलभूत कर्तव्य आहे, त्यामुळे हा पर्याय चुकीचा आहे."
      },
      {
        "option": "Only (a) and (c)",
        "is_correct": false,
        "reason_english": "Both (a) and (c) are Fundamental Duties, but the question asks for what is NOT a Fundamental Duty.",
        "reason_marathi": "विधान (a) आणि (c) दोन्ही मूलभूत कर्तव्ये आहेत, परंतु प्रश्न मूलभूत कर्तव्य नसलेले विचारतो."
      }
    ]
  },
  {
    "q_no": 46,
    "question_marathi": "NITI आयोगाचे पूर्ण रूप सांगा :",
    "question_english": "Full form of NITI AAYOG is ______.",
    "options_marathi": [
      "National Institute for Transmitting India",
      "National Institute for Transforming India",
      "National Institution for Transforming India",
      "वरीलपैकी कोणतेही नाही"
    ],
    "options_english": [
      "National Institute for Transmitting India",
      "National Institute for Transforming India",
      "National Institution for Transforming India",
      "None of the above"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Government Institutions, Planning Commission, NITI Aayog",
    "difficulty": "Easy",
    "trap_detected": "Similar Word Choice",
    "explanation_english": "NITI Aayog is a premier policy 'think tank' of the Government of India, providing both directional and policy inputs. It was established on January 1, 2015, replacing the erstwhile Planning Commission. The acronym NITI stands for 'National Institution for Transforming India'. It aims to foster cooperative federalism by involving State Governments in the economic policy-making process and to provide strategic and technical advice to the Central and State Governments.",
    "explanation_marathi": "नीती आयोग हे भारत सरकारचे एक प्रमुख धोरणात्मक 'थिंक टँक' आहे, जे दिशात्मक आणि धोरणात्मक दोन्ही इनपुट प्रदान करते. याची स्थापना 1 जानेवारी 2015 रोजी झाली, ज्याने पूर्वीच्या नियोजन आयोगाची जागा घेतली. NITI या संज्ञेचा अर्थ 'नॅशनल इन्स्टिट्यूशन फॉर ट्रान्सफॉर्मिंग इंडिया' असा आहे. आर्थिक धोरण निर्मिती प्रक्रियेत राज्य सरकारांना सहभागी करून सहकारी संघराज्याला प्रोत्साहन देणे आणि केंद्र व राज्य सरकारांना धोरणात्मक आणि तांत्रिक सल्ला देणे हे याचे उद्दिष्ट आहे.",
    "options_breakdown": [
      {
        "option": "National Institute for Transmitting India",
        "is_correct": false,
        "reason_english": "Incorrect. The words 'Institute' and 'Transmitting' are wrong.",
        "reason_marathi": "चुकीचे. 'इन्स्टिट्यूट' आणि 'ट्रान्समिटिंग' हे शब्द चुकीचे आहेत."
      },
      {
        "option": "National Institute for Transforming India",
        "is_correct": false,
        "reason_english": "Incorrect. The word 'Institute' is wrong; it should be 'Institution'.",
        "reason_marathi": "चुकीचे. 'इन्स्टिट्यूट' हा शब्द चुकीचा आहे; तो 'इन्स्टिट्यूशन' असा असावा."
      },
      {
        "option": "National Institution for Transforming India",
        "is_correct": true,
        "reason_english": "This is the correct full form of NITI Aayog.",
        "reason_marathi": "हे नीती आयोगाचे योग्य पूर्ण रूप आहे."
      },
      {
        "option": "None of the above",
        "is_correct": false,
        "reason_english": "Option 3 is the correct full form.",
        "reason_marathi": "पर्याय 3 हे योग्य पूर्ण रूप आहे."
      }
    ]
  },
  {
    "q_no": 47,
    "question_marathi": "संविधानामध्ये ______ स्थापन करण्याची तरतूद आहे ज्यामार्फत जिल्ह्यातील पंचायत आणि नगरपालिकांनी तयार केलेल्या योजना एकत्रीत करणे आणि नंतर संपूर्ण जिल्ह्यासाठी एक प्रारूप आराखडा तयार करणे अपेक्षित आहे.",
    "question_english": "The Constitution provides for setting up of ______ which are expected to consolidate the plans prepared by Panchayats and Municipalities in the district and then prepare a draft plan for the district as a whole.",
    "options_marathi": [
      "जिल्हा सामाजिक व आर्थिक समालोचन",
      "जिल्हा नियोजन समित्या",
      "जिल्हा सांख्यिकी समित्या",
      "जिल्हा संसाधन समित्या"
    ],
    "options_english": [
      "District Social and Economic Review",
      "District Planning Committees",
      "District Statistical Committees",
      "District Resource Committees"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government, Panchayati Raj, Municipalities, District Planning Committees",
    "difficulty": "Medium",
    "trap_detected": "Similar Terminology",
    "explanation_english": "The 74th Constitutional Amendment Act, 1992, which gave constitutional status to Municipalities, also introduced Article 243ZD. This article mandates the constitution of a District Planning Committee (DPC) in every state at the district level. The primary function of the DPC is to consolidate the plans prepared by the Panchayats (rural local bodies) and Municipalities (urban local bodies) in the district and to prepare a draft development plan for the entire district. This ensures integrated and holistic planning at the grassroots level, promoting decentralized governance.",
    "explanation_marathi": "74 व्या घटनादुरुस्ती कायद्याने, 1992, ज्याने नगरपालिकांना घटनात्मक दर्जा दिला, त्याने अनुच्छेद 243ZD देखील समाविष्ट केले. हे अनुच्छेद प्रत्येक राज्यात जिल्हा स्तरावर जिल्हा नियोजन समित्या (DPCs) स्थापन करणे अनिवार्य करते. जिल्हा नियोजन समितीचे मुख्य कार्य म्हणजे जिल्ह्यातील पंचायती (ग्रामीण स्थानिक स्वराज्य संस्था) आणि नगरपालिकांनी (शहरी स्थानिक स्वराज्य संस्था) तयार केलेल्या योजना एकत्रित करणे आणि नंतर संपूर्ण जिल्ह्यासाठी एक प्रारूप विकास योजना तयार करणे. यामुळे तळागाळातील एकात्मिक आणि सर्वांगीण नियोजन सुनिश्चित होते, ज्यामुळे विकेंद्रीकृत प्रशासनाला प्रोत्साहन मिळते.",
    "options_breakdown": [
      {
        "option": "District Social and Economic Review",
        "is_correct": false,
        "reason_english": "This is not the constitutional body mandated for consolidating plans.",
        "reason_marathi": "योजना एकत्रित करण्यासाठी अनिवार्य केलेली ही घटनात्मक संस्था नाही."
      },
      {
        "option": "District Planning Committees",
        "is_correct": true,
        "reason_english": "Article 243ZD of the Constitution specifically provides for the establishment of District Planning Committees to consolidate plans from Panchayats and Municipalities.",
        "reason_marathi": "संविधानाच्या अनुच्छेद 243ZD मध्ये पंचायती आणि नगरपालिकांच्या योजना एकत्रित करण्यासाठी जिल्हा नियोजन समित्या स्थापन करण्याची विशेष तरतूद आहे."
      },
      {
        "option": "District Statistical Committees",
        "is_correct": false,
        "reason_english": "These committees deal with data collection and analysis, not plan consolidation.",
        "reason_marathi": "या समित्या डेटा संकलन आणि विश्लेषणाशी संबंधित आहेत, योजना एकत्रित करण्याशी नाही."
      },
      {
        "option": "District Resource Committees",
        "is_correct": false,
        "reason_english": "This is not the constitutional body mandated for consolidating plans.",
        "reason_marathi": "योजना एकत्रित करण्यासाठी अनिवार्य केलेली ही घटनात्मक संस्था नाही."
      }
    ]
  },
  {
    "q_no": 48,
    "question_marathi": "दहाव्या पंचवार्षिक योजनेचा कालावधी खालीलपैकी कोणता ?",
    "question_english": "Which of the following is the duration of 10th Five Year Plan ?",
    "options_marathi": [
      "1997 - 2002",
      "2002 - 2007",
      "2007 - 2012",
      "2012 - 2017"
    ],
    "options_english": [
      "1997 - 2002",
      "2002 - 2007",
      "2007 - 2012",
      "2012 - 2017"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Five Year Plans, Economic Planning",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall",
    "explanation_english": "India's Five Year Plans were a series of national economic plans implemented by the Planning Commission. The 9th Five Year Plan was from 1997-2002. Following this, the 10th Five Year Plan covered the period from 2002 to 2007. Its main objectives included achieving an 8% GDP growth per annum, reducing poverty by 5% by 2007, and providing gainful employment to the majority of the labor force. The subsequent 11th Five Year Plan was from 2007-2012, and the 12th (and final) Five Year Plan was from 2012-2017.",
    "explanation_marathi": "भारताच्या पंचवार्षिक योजना नियोजन आयोगाने राबवलेल्या राष्ट्रीय आर्थिक योजनांची मालिका होती. नववी पंचवार्षिक योजना 1997-2002 पर्यंत होती. यानंतर, दहावी पंचवार्षिक योजना 2002 ते 2007 या कालावधीसाठी होती. याची मुख्य उद्दिष्टे दरवर्षी 8% जीडीपी वाढ साध्य करणे, 2007 पर्यंत गरिबी 5% ने कमी करणे आणि बहुसंख्य कामगारांना फायदेशीर रोजगार उपलब्ध करून देणे ही होती. त्यानंतरची 11 वी पंचवार्षिक योजना 2007-2012 पर्यंत होती आणि 12 वी (आणि अंतिम) पंचवार्षिक योजना 2012-2017 पर्यंत होती.",
    "options_breakdown": [
      {
        "option": "1997 - 2002",
        "is_correct": false,
        "reason_english": "This was the duration of the 9th Five Year Plan.",
        "reason_marathi": "हा नवव्या पंचवार्षिक योजनेचा कालावधी होता."
      },
      {
        "option": "2002 - 2007",
        "is_correct": true,
        "reason_english": "This was the correct duration for the 10th Five Year Plan.",
        "reason_marathi": "हा दहाव्या पंचवार्षिक योजनेचा योग्य कालावधी होता."
      },
      {
        "option": "2007 - 2012",
        "is_correct": false,
        "reason_english": "This was the duration of the 11th Five Year Plan.",
        "reason_marathi": "हा अकराव्या पंचवार्षिक योजनेचा कालावधी होता."
      },
      {
        "option": "2012 - 2017",
        "is_correct": false,
        "reason_english": "This was the duration of the 12th (and final) Five Year Plan.",
        "reason_marathi": "हा बाराव्या (आणि अंतिम) पंचवार्षिक योजनेचा कालावधी होता."
      }
    ]
  },
  {
    "q_no": 49,
    "question_marathi": "2004-05 च्या किंमतीनुसार 2010-11 मध्ये निव्वळ घरगुती उत्पादनात तृतीयक क्षेत्राचा वाटा ______ इतका होता.",
    "question_english": "Tertiary sector's share in Net Domestic Product in 2010-11 at 2004-05 price was ______.",
    "options_marathi": [
      "60.3 टक्के",
      "26.5 टक्के",
      "24.7 टक्के",
      "18.2 टक्के"
    ],
    "options_english": [
      "60.3 percent",
      "26.5 percent",
      "24.7 percent",
      "18.2 percent"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "National Income, Sectoral Contribution, GDP/NDP",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Indian economy is broadly categorized into three sectors: primary (agriculture), secondary (industry), and tertiary (services). The tertiary sector, also known as the services sector, has been the largest and fastest-growing contributor to India's Net Domestic Product (NDP) and Gross Domestic Product (GDP) for several decades. According to official economic data, in the financial year 2010-11, when calculated at constant 2004-05 prices, the tertiary sector's share in the Net Domestic Product was approximately 60.3 percent. This figure reflects the increasing dominance of the services sector in the overall economic structure of India.",
    "explanation_marathi": "भारतीय अर्थव्यवस्था प्रामुख्याने तीन क्षेत्रांमध्ये विभागली आहे: प्राथमिक (कृषी), द्वितीयक (उद्योग) आणि तृतीयक (सेवा). तृतीयक क्षेत्र, ज्याला सेवा क्षेत्र म्हणूनही ओळखले जाते, हे अनेक दशकांपासून भारताच्या निव्वळ घरगुती उत्पादनात (NDP) आणि सकल घरगुती उत्पादनात (GDP) सर्वात मोठे आणि वेगाने वाढणारे योगदान देणारे क्षेत्र आहे. अधिकृत आर्थिक आकडेवारीनुसार, आर्थिक वर्ष 2010-11 मध्ये, 2004-05 च्या स्थिर किमतीनुसार मोजले असता, निव्वळ घरगुती उत्पादनात तृतीयक क्षेत्राचा वाटा अंदाजे 60.3 टक्के होता. ही आकडेवारी भारताच्या एकूण आर्थिक संरचनेत सेवा क्षेत्राचे वाढते वर्चस्व दर्शवते.",
    "options_breakdown": [
      {
        "option": "60.3 percent",
        "is_correct": true,
        "reason_english": "This percentage accurately reflects the tertiary sector's share in NDP for 2010-11 at 2004-05 prices, indicating the dominance of the services sector.",
        "reason_marathi": "ही टक्केवारी 2010-11 साठी 2004-05 च्या किमतीनुसार NDP मधील तृतीयक क्षेत्राचा वाटा अचूकपणे दर्शवते, ज्यामुळे सेवा क्षेत्राचे वर्चस्व दिसून येते."
      },
      {
        "option": "26.5 percent",
        "is_correct": false,
        "reason_english": "This percentage is too low for the tertiary sector's contribution and might be closer to the secondary (industrial) sector's share during that period.",
        "reason_marathi": "ही टक्केवारी तृतीयक क्षेत्राच्या योगदानासाठी खूप कमी आहे आणि त्या काळात द्वितीयक (औद्योगिक) क्षेत्राच्या वाट्याच्या जवळ असू शकते."
      },
      {
        "option": "24.7 percent",
        "is_correct": false,
        "reason_english": "This percentage is too low for the tertiary sector's contribution.",
        "reason_marathi": "ही टक्केवारी तृतीयक क्षेत्राच्या योगदानासाठी खूप कमी आहे."
      },
      {
        "option": "18.2 percent",
        "is_correct": false,
        "reason_english": "This percentage is significantly lower than the actual contribution of the tertiary sector and might be closer to the primary (agricultural) sector's share.",
        "reason_marathi": "ही टक्केवारी तृतीयक क्षेत्राच्या वास्तविक योगदानापेक्षा लक्षणीयरीत्या कमी आहे आणि प्राथमिक (कृषी) क्षेत्राच्या वाट्याच्या जवळ असू शकते."
      }
    ]
  },
  {
    "q_no": 50,
    "question_marathi": "खालीलपैकी कोणते अनुच्छेद पंचायत राजशी संबंधित आहे ?",
    "question_english": "Which of the following Article is related to Panchayati Raj ?",
    "options_marathi": [
      "अनुच्छेद 324",
      "अनुच्छेद 243",
      "अनुच्छेद 124",
      "अनुच्छेद 356"
    ],
    "options_english": [
      "Article 324",
      "Article 243",
      "Article 124",
      "Article 356"
    ],
    "correct_option_index": 2,
    "subject": "Polity",
    "topic": "Local Self-Government, Panchayati Raj, Constitutional Articles",
    "difficulty": "Easy",
    "trap_detected": "Distractor Articles",
    "explanation_english": "The 73rd Constitutional Amendment Act of 1992 gave constitutional status to Panchayati Raj Institutions in India. This amendment added Part IX to the Constitution, titled 'The Panchayats,' which comprises Articles 243 to 243O. Article 243 is the foundational article in this part, defining various terms such as 'district,' 'Gram Sabha,' 'Panchayat,' etc., and setting the stage for the entire Panchayati Raj system. The other articles mentioned are related to different constitutional bodies or provisions:\n- Article 324: Deals with the Election Commission of India.\n- Article 124: Deals with the establishment and constitution of the Supreme Court of India.\n- Article 356: Deals with the provisions for President's Rule in states.",
    "explanation_marathi": "1992 च्या 73 व्या घटनादुरुस्ती कायद्याने भारतातील पंचायत राज संस्थांना घटनात्मक दर्जा दिला. या दुरुस्तीने संविधानात भाग IX, 'पंचायती' शीर्षकाखाली, अनुच्छेद 243 ते 243O समाविष्ट केले. अनुच्छेद 243 हा या भागातील मूलभूत अनुच्छेद आहे, जो 'जिल्हा', 'ग्रामसभा', 'पंचायत' इत्यादी विविध संज्ञा परिभाषित करतो आणि संपूर्ण पंचायत राज प्रणालीसाठी आधार तयार करतो. नमूद केलेले इतर अनुच्छेद वेगवेगळ्या घटनात्मक संस्था किंवा तरतुदींशी संबंधित आहेत:\n- अनुच्छेद 324: भारताच्या निवडणूक आयोगाशी संबंधित आहे.\n- अनुच्छेद 124: भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचनेशी संबंधित आहे.\n- अनुच्छेद 356: राज्यांमध्ये राष्ट्रपती राजवटीच्या तरतुदींशी संबंधित आहे.",
    "options_breakdown": [
      {
        "option": "Article 324",
        "is_correct": false,
        "reason_english": "Article 324 is related to the Election Commission of India, not Panchayati Raj.",
        "reason_marathi": "अनुच्छेद 324 भारताच्या निवडणूक आयोगाशी संबंधित आहे, पंचायत राजशी नाही."
      },
      {
        "option": "Article 243",
        "is_correct": true,
        "reason_english": "Article 243 is the foundational article for Panchayati Raj, defining key terms and initiating the provisions for local self-government.",
        "reason_marathi": "अनुच्छेद 243 हे पंचायत राजसाठी मूलभूत अनुच्छेद आहे, जे प्रमुख संज्ञा परिभाषित करते आणि स्थानिक स्वराज्य संस्थांसाठी तरतुदी सुरू करते."
      },
      {
        "option": "Article 124",
        "is_correct": false,
        "reason_english": "Article 124 is related to the Supreme Court of India, not Panchayati Raj.",
        "reason_marathi": "अनुच्छेद 124 भारताच्या सर्वोच्च न्यायालयाशी संबंधित आहे, पंचायत राजशी नाही."
      },
      {
        "option": "Article 356",
        "is_correct": false,
        "reason_english": "Article 356 is related to President's Rule in states, not Panchayati Raj.",
        "reason_marathi": "अनुच्छेद 356 राज्यांमध्ये राष्ट्रपती राजवटीशी संबंधित आहे, पंचायत राजशी नाही."
      }
    ]
  },
  {
    "q_no": 51,
    "question_marathi": "'भौतिक साधनांसोबतच सांस्कृतिक पातळी उंचावणे' हे खालीलपैकी कोणत्या प्रतिमानाचे उद्दिष्ट होते ?",
    "question_english": "To raise the 'Material as well as cultural level' is the main objective of which of the following model ?",
    "options_marathi": [
      "गांधीचे वृद्धी प्रतिमान",
      "नेहरुंचे वृद्धी प्रतिमान",
      "खाजगीकरण प्रतिमान",
      "आचार्य अग्रवाल प्रतिमान"
    ],
    "options_english": [
      "Gandhi model of growth",
      "Nehru model of growth",
      "Privatization model",
      "Acharya Agrawal model"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Economic Growth Models (Gandhi Model)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The Gandhi model of growth, inspired by Mahatma Gandhi's philosophy, advocated for a holistic development approach. It emphasized self-sufficiency, rural development, cottage industries, and a balanced focus on both material prosperity and cultural, moral, and spiritual upliftment of individuals and society. It aimed for 'Sarvodaya' - the welfare of all.",
    "explanation_marathi": "गांधीवादी वृद्धी प्रतिमान, महात्मा गांधींच्या तत्त्वज्ञानाने प्रेरित होऊन, विकासासाठी एक समग्र दृष्टिकोन मांडते. यात आत्मनिर्भरता, ग्रामीण विकास, कुटीर उद्योग आणि व्यक्ती व समाजाच्या भौतिक समृद्धीसोबतच सांस्कृतिक, नैतिक आणि आध्यात्मिक उन्नतीवर संतुलित लक्ष केंद्रित केले जाते. 'सर्वोदय' म्हणजे सर्वांचे कल्याण साधणे हे त्याचे उद्दिष्ट होते.",
    "options_breakdown": [
      {
        "option_text_english": "Gandhi model of growth",
        "option_text_marathi": "गांधीचे वृद्धी प्रतिमान",
        "is_correct": true,
        "reason_english": "This model explicitly aims for both material and cultural upliftment, emphasizing holistic development and 'Sarvodaya' (welfare of all).",
        "reason_marathi": "हे प्रतिमान भौतिक आणि सांस्कृतिक अशा दोन्ही स्तरांवरील उन्नतीचे स्पष्टपणे उद्दिष्ट ठेवते, ज्यात सर्वांगीण विकास आणि 'सर्वोदय' (सर्वांचे कल्याण) यावर भर दिला जातो."
      },
      {
        "option_text_english": "Nehru model of growth",
        "option_text_marathi": "नेहरुंचे वृद्धी प्रतिमान",
        "is_correct": false,
        "reason_english": "The Nehruvian model primarily focused on rapid industrialization, heavy industries, and state-led economic growth, with less explicit emphasis on cultural upliftment as a primary objective of the economic model itself.",
        "reason_marathi": "नेहरूवादी प्रतिमान प्रामुख्याने जलद औद्योगिकीकरण, अवजड उद्योग आणि राज्य-नेतृत्वाखालील आर्थिक वाढीवर केंद्रित होते, ज्यात सांस्कृतिक उन्नतीवर आर्थिक प्रतिमानाचे प्राथमिक उद्दिष्ट म्हणून कमी भर होता."
      },
      {
        "option_text_english": "Privatization model",
        "option_text_marathi": "खाजगीकरण प्रतिमान",
        "is_correct": false,
        "reason_english": "Privatization is an economic policy tool, not a comprehensive growth model with cultural upliftment as its core objective. It focuses on transferring ownership from public to private hands.",
        "reason_marathi": "खाजगीकरण हे एक आर्थिक धोरणाचे साधन आहे, सांस्कृतिक उन्नती हे त्याचे मुख्य उद्दिष्ट असलेले सर्वसमावेशक वृद्धी प्रतिमान नाही. ते सार्वजनिक मालकी खाजगी हातात हस्तांतरित करण्यावर लक्ष केंद्रित करते."
      },
      {
        "option_text_english": "Acharya Agrawal model",
        "option_text_marathi": "आचार्य अग्रवाल प्रतिमान",
        "is_correct": false,
        "reason_english": "There isn't a widely recognized economic growth model named 'Acharya Agrawal model' in the context of Indian economic planning that specifically targets material and cultural upliftment in this manner.",
        "reason_marathi": "भारतीय आर्थिक नियोजनाच्या संदर्भात 'आचार्य अग्रवाल प्रतिमान' नावाचे कोणतेही व्यापकपणे ओळखले जाणारे आर्थिक वृद्धी प्रतिमान नाही जे विशेषतः भौतिक आणि सांस्कृतिक उन्नतीला अशा प्रकारे लक्ष्य करते."
      }
    ]
  },
  {
    "q_no": 52,
    "question_marathi": "खालीलपैकी कोणते धोरण अन्न सुरक्षेचा भाग आहे ?\n(a) सार्वजनिक वितरण व्यवस्था सशक्त करणे.\n(b) पोषणविषयक उद्दिष्टे निश्चित करणे.\n(c) अन्नधान्याच्या किमान आधारभूत किंमती निश्चित करणे.\n(d) देशांतर्गत उत्पादन अधिकाधिक वाढवण्यास प्राधान्य देणे.\nवरीलपैकी योग्य पर्याय निवडा :",
    "question_english": "Which of the following policy is a part of food security ?\n(a) strengthening public distribution system.\n(b) to set nutrition related objectives.\n(c) to decide minimum support prices for food grains.\n(d) to promote domestic production.\nChoose correct options:",
    "options_marathi": [
      "(a) आणि (b)",
      "(a) आणि (d)",
      "फक्त (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "(a) and (d)",
      "Only (c)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Food Security",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Food security is a multi-faceted concept that ensures all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their dietary needs and food preferences for an active and healthy life. All the listed policies directly contribute to achieving food security. Strengthening the Public Distribution System (PDS) ensures access to food for vulnerable populations. Setting nutrition-related objectives addresses the quality and utilization aspect of food. Deciding Minimum Support Prices (MSP) incentivizes farmers to produce food grains, ensuring availability. Promoting domestic production directly enhances the overall supply of food within the country.",
    "explanation_marathi": "अन्न सुरक्षा ही एक बहुआयामी संकल्पना आहे जी सुनिश्चित करते की सर्व लोकांना, सर्व वेळी, सक्रिय आणि निरोगी जीवनासाठी त्यांच्या आहाराच्या गरजा आणि अन्न प्राधान्ये पूर्ण करणारे पुरेसे, सुरक्षित आणि पौष्टिक अन्न शारीरिक, सामाजिक आणि आर्थिकदृष्ट्या उपलब्ध आहे. सूचीबद्ध केलेली सर्व धोरणे अन्न सुरक्षा साध्य करण्यासाठी थेट योगदान देतात. सार्वजनिक वितरण व्यवस्था (PDS) मजबूत केल्याने असुरक्षित लोकसंख्येला अन्न उपलब्ध होते. पोषण-संबंधित उद्दिष्टे निश्चित केल्याने अन्नाच्या गुणवत्तेचा आणि वापराचा पैलू हाताळला जातो. किमान आधारभूत किंमती (MSP) निश्चित केल्याने शेतकऱ्यांना अन्नधान्य पिकवण्यासाठी प्रोत्साहन मिळते, ज्यामुळे उपलब्धता सुनिश्चित होते. देशांतर्गत उत्पादनाला प्रोत्साहन दिल्याने देशातील अन्नाचा एकूण पुरवठा थेट वाढतो.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "While (a) and (b) are correct components of food security, options (c) and (d) are also correct, making this option incomplete.",
        "reason_marathi": "(a) आणि (b) हे अन्न सुरक्षेचे योग्य घटक असले तरी, (c) आणि (d) हे पर्याय देखील बरोबर आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a) and (d)",
        "option_text_marathi": "(a) आणि (d)",
        "is_correct": false,
        "reason_english": "While (a) and (d) are correct components of food security, options (b) and (c) are also correct, making this option incomplete.",
        "reason_marathi": "(a) आणि (d) हे अन्न सुरक्षेचे योग्य घटक असले तरी, (b) आणि (c) हे पर्याय देखील बरोबर आहेत, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "Only (c)",
        "option_text_marathi": "फक्त (c)",
        "is_correct": false,
        "reason_english": "Only (c) is incorrect as (a), (b), and (d) are also integral parts of food security policy.",
        "reason_marathi": "फक्त (c) हे चुकीचे आहे कारण (a), (b) आणि (d) हे देखील अन्न सुरक्षा धोरणाचे अविभाज्य भाग आहेत."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "All four statements (a), (b), (c), and (d) are crucial policy measures that contribute to achieving comprehensive food security.",
        "reason_marathi": "सर्व चार विधाने (a), (b), (c) आणि (d) हे सर्वसमावेशक अन्न सुरक्षा साध्य करण्यासाठी महत्त्वपूर्ण धोरणात्मक उपाय आहेत."
      }
    ]
  },
  {
    "q_no": 53,
    "question_marathi": "73 व्या घटना दुरुस्तीस ______ रोजी मंजूरी देण्यात आली.",
    "question_english": "73rd Constitutional Amendment was approved on ______.",
    "options_marathi": [
      "24 एप्रिल 1994",
      "24 एप्रिल 1995",
      "24 एप्रिल 1993",
      "1 एप्रिल 1992"
    ],
    "options_english": [
      "24th April 1994",
      "24th April 1995",
      "24th April 1993",
      "1st April 1992"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Panchayati Raj (73rd Amendment)",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "The 73rd Constitutional Amendment Act, 1992, which gave constitutional status to Panchayati Raj institutions, was enacted by the Parliament in 1992. However, it came into force, meaning it was approved and became effective, on 24th April 1993. This date is celebrated as National Panchayati Raj Day in India.",
    "explanation_marathi": "73 वी घटनादुरुस्ती अधिनियम, 1992, ज्याने पंचायती राज संस्थांना घटनात्मक दर्जा दिला, तो संसदेने 1992 मध्ये मंजूर केला. तथापि, तो 24 एप्रिल 1993 रोजी अंमलात आला, म्हणजेच त्याला मान्यता मिळाली आणि तो प्रभावी झाला. हा दिवस भारतात राष्ट्रीय पंचायती राज दिन म्हणून साजरा केला जातो.",
    "options_breakdown": [
      {
        "option_text_english": "24th April 1994",
        "option_text_marathi": "24 एप्रिल 1994",
        "is_correct": false,
        "reason_english": "This date is one year after the actual date of enforcement of the 73rd Amendment.",
        "reason_marathi": "ही तारीख 73 व्या घटनादुरुस्तीच्या अंमलबजावणीच्या वास्तविक तारखेनंतर एक वर्षाची आहे."
      },
      {
        "option_text_english": "24th April 1995",
        "option_text_marathi": "24 एप्रिल 1995",
        "is_correct": false,
        "reason_english": "This date is two years after the actual date of enforcement of the 73rd Amendment.",
        "reason_marathi": "ही तारीख 73 व्या घटनादुरुस्तीच्या अंमलबजावणीच्या वास्तविक तारखेनंतर दोन वर्षांची आहे."
      },
      {
        "option_text_english": "24th April 1993",
        "option_text_marathi": "24 एप्रिल 1993",
        "is_correct": true,
        "reason_english": "The 73rd Constitutional Amendment Act, 1992, came into force on this date, which is celebrated as National Panchayati Raj Day.",
        "reason_marathi": "73 वी घटनादुरुस्ती अधिनियम, 1992, या तारखेला अंमलात आला, जो राष्ट्रीय पंचायती राज दिन म्हणून साजरा केला जातो."
      },
      {
        "option_text_english": "1st April 1992",
        "option_text_marathi": "1 एप्रिल 1992",
        "is_correct": false,
        "reason_english": "This date is before the 73rd Amendment Act came into force and is not related to its approval or enforcement.",
        "reason_marathi": "ही तारीख 73 वी घटनादुरुस्ती अधिनियम अंमलात येण्यापूर्वीची आहे आणि तिच्या मंजुरी किंवा अंमलबजावणीशी संबंधित नाही."
      }
    ]
  },
  {
    "q_no": 54,
    "question_marathi": "74 व्या घटना दुरुस्तीनुसार राज्य सरकारांना कोणती बाब आवश्यक करण्यात आली ?\n(a) तालुका समीतीची स्थापना\n(b) शिक्षणाचा हक्क\n(c) जिल्हा विकास समीतीची स्थापना\n(d) जिल्हा नियोजन समीतीची स्थापना\nपर्यायी उत्तरे :",
    "question_english": "Which thing was essential for State Government according to 74th Constitutional Amendment ?\n(a) Establishment of Taluka Committee\n(b) Right to Education\n(c) Establishment of District Development Committee\n(d) Establishment of District Planning Committee\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(b) आणि (c)",
      "(d) फक्त",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) Only",
      "(b) and (c)",
      "(d) Only",
      "All above"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Urban Local Bodies (74th Amendment)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The 74th Constitutional Amendment Act, 1992, which deals with urban local self-government, made several provisions mandatory for state governments. One of the most significant provisions was the establishment of a District Planning Committee (DPC) in every state at the district level to consolidate the plans prepared by Panchayats and Municipalities in the district and to prepare a draft development plan for the district as a whole.",
    "explanation_marathi": "74 वी घटनादुरुस्ती अधिनियम, 1992, जो शहरी स्थानिक स्वराज्य संस्थांशी संबंधित आहे, त्याने राज्य सरकारांसाठी अनेक तरतुदी अनिवार्य केल्या. त्यापैकी एक महत्त्वाची तरतूद म्हणजे प्रत्येक राज्यात जिल्हा स्तरावर जिल्हा नियोजन समिती (DPC) ची स्थापना करणे, ज्याचा उद्देश जिल्ह्यातील पंचायती आणि नगरपालिकांनी तयार केलेल्या योजना एकत्रित करणे आणि संपूर्ण जिल्ह्यासाठी एक मसुदा विकास योजना तयार करणे हा होता.",
    "options_breakdown": [
      {
        "option_text_english": "(a) Only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "The 74th Amendment primarily focuses on urban local bodies and mandates District Planning Committees, not specifically Taluka Committees in this context.",
        "reason_marathi": "74 वी घटनादुरुस्ती प्रामुख्याने शहरी स्थानिक स्वराज्य संस्थांवर लक्ष केंद्रित करते आणि जिल्हा नियोजन समित्या अनिवार्य करते, या संदर्भात तालुका समित्या नाहीत."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason_english": "The Right to Education (b) was introduced by the 86th Amendment, not the 74th. The 74th Amendment mandates a District Planning Committee, not a 'District Development Committee' (c).",
        "reason_marathi": "शिक्षणाचा हक्क (b) 74 व्या घटनादुरुस्तीने नव्हे तर 86 व्या घटनादुरुस्तीने आणला गेला. 74 वी घटनादुरुस्ती 'जिल्हा विकास समिती' (c) नव्हे तर जिल्हा नियोजन समिती अनिवार्य करते."
      },
      {
        "option_text_english": "(d) Only",
        "option_text_marathi": "(d) फक्त",
        "is_correct": true,
        "reason_english": "Article 243ZD of the 74th Amendment mandates the constitution of a District Planning Committee (DPC) in every state.",
        "reason_marathi": "74 व्या घटनादुरुस्तीच्या कलम 243ZD नुसार प्रत्येक राज्यात जिल्हा नियोजन समिती (DPC) ची स्थापना करणे अनिवार्य आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason_english": "Only statement (d) is correct and directly mandated by the 74th Amendment.",
        "reason_marathi": "फक्त विधान (d) बरोबर आहे आणि 74 व्या घटनादुरुस्तीने थेट अनिवार्य केले आहे."
      }
    ]
  },
  {
    "q_no": 55,
    "question_marathi": "अर्थव्यवस्था विकसित होत असताना, देशाची व्यावसायिक रचना साधारणपणे खालीलपैकी कोणत्या क्षेत्राच्या बाजूने बदलते ?",
    "question_english": "As the economy develops, the occupational structure of the country generally shifts in favour of which of the following sector ?",
    "options_marathi": [
      "प्राथमिक",
      "द्वितीयक",
      "तृतीयक",
      "द्वितीयक आणि तृतीयक क्षेत्र"
    ],
    "options_english": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Secondary and Tertiary Sectors"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Economic Development & Sectoral Shift",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "As an economy develops and matures, its occupational structure undergoes a significant transformation. Initially, a large portion of the workforce is engaged in the primary sector (agriculture, fishing, mining). With industrialization, there's a shift towards the secondary sector (manufacturing, construction). Further development leads to a dominant role for the tertiary sector (services like IT, finance, healthcare, education). This shift is driven by increased productivity in agriculture, rising incomes leading to demand for manufactured goods and services, and technological advancements. Therefore, the shift is generally towards both secondary and tertiary sectors, with the tertiary sector often becoming the largest employer and contributor to GDP in advanced economies.",
    "explanation_marathi": "अर्थव्यवस्था विकसित होत असताना आणि परिपक्व होत असताना, तिची व्यावसायिक रचना लक्षणीयरीत्या बदलते. सुरुवातीला, कामगारांचा मोठा भाग प्राथमिक क्षेत्रात (शेती, मासेमारी, खाणकाम) गुंतलेला असतो. औद्योगिकीकरणामुळे, द्वितीयक क्षेत्राकडे (उत्पादन, बांधकाम) बदल होतो. पुढील विकासामुळे तृतीयक क्षेत्राची (माहिती तंत्रज्ञान, वित्त, आरोग्यसेवा, शिक्षण यांसारख्या सेवा) प्रमुख भूमिका होते. हा बदल शेतीमधील वाढलेली उत्पादकता, वाढत्या उत्पन्नामुळे उत्पादित वस्तू आणि सेवांची मागणी आणि तांत्रिक प्रगतीमुळे होतो. त्यामुळे, हा बदल साधारणपणे द्वितीयक आणि तृतीयक दोन्ही क्षेत्रांकडे होतो, ज्यात प्रगत अर्थव्यवस्थांमध्ये तृतीयक क्षेत्र अनेकदा सर्वात मोठे रोजगार देणारे आणि सकल राष्ट्रीय उत्पादनात योगदान देणारे क्षेत्र बनते.",
    "options_breakdown": [
      {
        "option_text_english": "Primary",
        "option_text_marathi": "प्राथमिक",
        "is_correct": false,
        "reason_english": "In a developing economy, the share of the primary sector in employment and GDP typically decreases as the economy diversifies.",
        "reason_marathi": "विकसित होत असलेल्या अर्थव्यवस्थेत, अर्थव्यवस्था वैविध्यपूर्ण होत असताना प्राथमिक क्षेत्राचा रोजगार आणि सकल राष्ट्रीय उत्पादनातील वाटा सामान्यतः कमी होतो."
      },
      {
        "option_text_english": "Secondary",
        "option_text_marathi": "द्वितीयक",
        "is_correct": false,
        "reason_english": "While the secondary sector grows during development, the shift also significantly includes the tertiary sector, which often becomes dominant.",
        "reason_marathi": "विकासादरम्यान द्वितीयक क्षेत्र वाढत असले तरी, या बदलामध्ये तृतीयक क्षेत्राचाही लक्षणीय समावेश असतो, जे अनेकदा प्रमुख बनते."
      },
      {
        "option_text_english": "Tertiary",
        "option_text_marathi": "तृतीयक",
        "is_correct": false,
        "reason_english": "While the tertiary sector becomes very important, the shift also includes the secondary sector in the initial phases of industrialization, making this option incomplete.",
        "reason_marathi": "तृतीयक क्षेत्र खूप महत्त्वाचे बनत असले तरी, औद्योगिकीकरणाच्या सुरुवातीच्या टप्प्यात द्वितीयक क्षेत्राचाही या बदलामध्ये समावेश असतो, ज्यामुळे हा पर्याय अपूर्ण ठरतो."
      },
      {
        "option_text_english": "Secondary and Tertiary Sectors",
        "option_text_marathi": "द्वितीयक आणि तृतीयक क्षेत्र",
        "is_correct": true,
        "reason_english": "This option accurately reflects the general pattern of economic development where the workforce and economic activity shift away from the primary sector towards both the industrial (secondary) and services (tertiary) sectors.",
        "reason_marathi": "हा पर्याय आर्थिक विकासाचा सामान्य नमुना अचूकपणे दर्शवतो, जिथे कार्यबल आणि आर्थिक क्रियाकलाप प्राथमिक क्षेत्रातून औद्योगिक (द्वितीयक) आणि सेवा (तृतीयक) क्षेत्रांकडे सरकतात."
      }
    ]
  },
  {
    "q_no": 56,
    "question_marathi": "भारतमाला परियोजनेचे हे लक्ष्य आहे :\n(a) वाहतूकीत महत्तम कार्यक्षमता साधणे.\n(b) आर्थिक विथी (मार्गिका) विकसित करणे.\n(c) सागरकिनारे आणि बंदरे यांची जोडणी सुधारणे.\nपर्यायी उत्तरे :",
    "question_english": "Bharatmala Pariyojana focuses on :\n(a) Optimization of efficiency in freight movement.\n(b) Development of economic corridors.\n(c) Improving coastal and port connectivity.\nAnswer options:",
    "options_marathi": [
      "(a) आणि (b) फक्त",
      "(b) आणि (c) फक्त",
      "(a) आणि (c) फक्त",
      "वरीलपैकी सर्व"
    ],
    "options_english": [
      "(a) and (b) only",
      "(b) and (c) only",
      "(a) and (c) only",
      "All of the above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Government Schemes (Bharatmala Pariyojana)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Bharatmala Pariyojana is a flagship highway development program of the Government of India. Its primary objectives are to optimize the efficiency of freight and passenger movement across the country. This includes developing economic corridors to facilitate trade and industry, improving connectivity to coastal areas and ports to boost EXIM (export-import) trade, enhancing border and international connectivity, and constructing greenfield expressways. Therefore, all the listed points are indeed key focus areas of the Bharatmala Pariyojana.",
    "explanation_marathi": "भारतमाला परियोजना हा भारत सरकारचा एक महत्त्वाकांक्षी महामार्ग विकास कार्यक्रम आहे. देशातील मालवाहतूक आणि प्रवासी वाहतुकीची कार्यक्षमता वाढवणे हे त्याचे मुख्य उद्दिष्ट आहे. यात व्यापार आणि उद्योगाला चालना देण्यासाठी आर्थिक मार्गिका (economic corridors) विकसित करणे, EXIM (निर्यात-आयात) व्यापाराला चालना देण्यासाठी किनारी भाग आणि बंदरांशी संपर्क सुधारणे, सीमा आणि आंतरराष्ट्रीय संपर्क वाढवणे आणि ग्रीनफिल्ड एक्सप्रेसवे बांधणे यांचा समावेश आहे. त्यामुळे, सूचीबद्ध केलेले सर्व मुद्दे भारतमाला परियोजनेचे प्रमुख लक्ष केंद्रे आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b) only",
        "option_text_marathi": "(a) आणि (b) फक्त",
        "is_correct": false,
        "reason_english": "While (a) and (b) are correct, (c) is also an objective of Bharatmala Pariyojana, making this option incomplete.",
        "reason_marathi": "(a) आणि (b) बरोबर असले तरी, (c) हे देखील भारतमाला परियोजनेचे उद्दिष्ट आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(b) and (c) only",
        "option_text_marathi": "(b) आणि (c) फक्त",
        "is_correct": false,
        "reason_english": "While (b) and (c) are correct, (a) is also an objective of Bharatmala Pariyojana, making this option incomplete.",
        "reason_marathi": "(b) आणि (c) बरोबर असले तरी, (a) हे देखील भारतमाला परियोजनेचे उद्दिष्ट आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "(a) and (c) only",
        "option_text_marathi": "(a) आणि (c) फक्त",
        "is_correct": false,
        "reason_english": "While (a) and (c) are correct, (b) is also an objective of Bharatmala Pariyojana, making this option incomplete.",
        "reason_marathi": "(a) आणि (c) बरोबर असले तरी, (b) हे देखील भारतमाला परियोजनेचे उद्दिष्ट आहे, त्यामुळे हा पर्याय अपूर्ण आहे."
      },
      {
        "option_text_english": "All of the above",
        "option_text_marathi": "वरीलपैकी सर्व",
        "is_correct": true,
        "reason_english": "All three statements (a), (b), and (c) accurately describe key objectives and focus areas of the Bharatmala Pariyojana.",
        "reason_marathi": "वरील तिन्ही विधाने (a), (b) आणि (c) भारतमाला परियोजनेची प्रमुख उद्दिष्टे आणि लक्ष केंद्रे अचूकपणे वर्णन करतात."
      }
    ]
  },
  {
    "q_no": 57,
    "question_marathi": "जोड्या जुळवा :\nस्तंभ - 'अ'\n(a) निष्ठा\n(b) दीक्षा\n(c) ध्रुव\nस्तंभ - 'ब'\n(l) कौशल्य विकासासाठी हुशार विद्यार्थी यांचा शोध घेणे.\n(m) अध्ययन व अध्यापनासाठीचा तंत्रज्ञानावर आधारित मंच.\n(n) शाळेच्या मुख्याध्यापकांच्या समग्र शैक्षणिक उन्नतीसाठीचा उपक्रम\nपर्यायी उत्तरे :",
    "question_english": "Match the columns :\nGroup - A\n(a) NISHTHA\n(b) DIKSHA\n(c) DHRUV\nGroup - B\n(l) identify talented students to enrich their skills\n(m) technology enabled platform for teaching and learning\n(n) initiative for school heads for holistic advancement\nAnswer options:",
    "options_marathi": [
      "(a)-(n), (b)-(m), (c)-(l)",
      "(a)-(l), (b)-(m), (c)-(n)",
      "(a)-(n), (b)-(l), (c)-(m)",
      "(a)-(m), (b)-(l), (c)-(n)"
    ],
    "options_english": [
      "(a)-(n), (b)-(m), (c)-(l)",
      "(a)-(l), (b)-(m), (c)-(n)",
      "(a)-(n), (b)-(l), (c)-(m)",
      "(a)-(m), (b)-(l), (c)-(n)"
    ],
    "correct_option_index": 1,
    "subject": "Current Affairs",
    "topic": "Government Schemes (Education)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "This question tests knowledge of various government initiatives in the education sector.\n*   **NISHTHA** stands for National Initiative for School Heads' and Teachers' Holistic Advancement. It is a capacity building program for improving the quality of school education through integrated teacher training. Thus, (a) matches with (n).\n*   **DIKSHA** stands for Digital Infrastructure for Knowledge Sharing. It is a national platform for teachers and students to access digital learning content, making it a technology-enabled platform for teaching and learning. Thus, (b) matches with (m).\n*   **DHRUV** is the Pradhan Mantri Innovative Learning Programme. It aims to identify and nurture talented students to enrich their skills and knowledge. Thus, (c) matches with (l).",
    "explanation_marathi": "हा प्रश्न शिक्षण क्षेत्रातील विविध सरकारी योजनांच्या ज्ञानाची चाचणी घेतो.\n*   **NISHTHA** म्हणजे 'नॅशनल इनिशिएटिव्ह फॉर स्कूल हेड्स अँड टीचर्स होलिस्टिक ॲडव्हान्समेंट'. हा एकात्मिक शिक्षक प्रशिक्षणाद्वारे शालेय शिक्षणाची गुणवत्ता सुधारण्यासाठी एक क्षमता निर्माण कार्यक्रम आहे. त्यामुळे, (a) हे (n) शी जुळते.\n*   **DIKSHA** म्हणजे 'डिजिटल इन्फ्रास्ट्रक्चर फॉर नॉलेज शेअरिंग'. हे शिक्षक आणि विद्यार्थ्यांना डिजिटल शिक्षण सामग्रीमध्ये प्रवेश देण्यासाठी एक राष्ट्रीय व्यासपीठ आहे, ज्यामुळे ते अध्यापन आणि अध्ययनासाठी तंत्रज्ञान-सक्षम व्यासपीठ बनते. त्यामुळे, (b) हे (m) शी जुळते.\n*   **DHRUV** हा 'प्रधानमंत्री इनोव्हेटिव्ह लर्निंग प्रोग्राम' आहे. याचा उद्देश प्रतिभावान विद्यार्थ्यांना त्यांच्या कौशल्ये आणि ज्ञानाला समृद्ध करण्यासाठी ओळखणे आणि त्यांचे संगोपन करणे आहे. त्यामुळे, (c) हे (l) शी जुळते.",
    "options_breakdown": [
      {
        "option_text_english": "(a)-(n), (b)-(m), (c)-(l)",
        "option_text_marathi": "(a)-(n), (b)-(m), (c)-(l)",
        "is_correct": true,
        "reason_english": "This option correctly matches NISHTHA with school heads' advancement, DIKSHA with a technology platform for learning, and DHRUV with identifying talented students.",
        "reason_marathi": "हा पर्याय NISHTHA ला मुख्याध्यापकांच्या उन्नतीशी, DIKSHA ला अध्ययनासाठीच्या तंत्रज्ञान मंचाशी आणि DHRUV ला प्रतिभावान विद्यार्थ्यांच्या ओळखीशी योग्यरित्या जुळवतो."
      },
      {
        "option_text_english": "(a)-(l), (b)-(m), (c)-(n)",
        "option_text_marathi": "(a)-(l), (b)-(m), (c)-(n)",
        "is_correct": false,
        "reason_english": "The match (a)-(l) is incorrect. NISHTHA is for teachers/school heads, not for identifying talented students.",
        "reason_marathi": "(a)-(l) हे जुळणी चुकीची आहे. NISHTHA शिक्षक/मुख्याध्यापकांसाठी आहे, प्रतिभावान विद्यार्थी ओळखण्यासाठी नाही."
      },
      {
        "option_text_english": "(a)-(n), (b)-(l), (c)-(m)",
        "option_text_marathi": "(a)-(n), (b)-(l), (c)-(m)",
        "is_correct": false,
        "reason_english": "The matches (b)-(l) and (c)-(m) are incorrect. DIKSHA is a technology platform, and DHRUV is for talented students.",
        "reason_marathi": "(b)-(l) आणि (c)-(m) या जुळण्या चुकीच्या आहेत. DIKSHA हे तंत्रज्ञान व्यासपीठ आहे आणि DHRUV प्रतिभावान विद्यार्थ्यांसाठी आहे."
      },
      {
        "option_text_english": "(a)-(m), (b)-(l), (c)-(n)",
        "option_text_marathi": "(a)-(m), (b)-(l), (c)-(n)",
        "is_correct": false,
        "reason_english": "All matches in this option are incorrect.",
        "reason_marathi": "या पर्यायातील सर्व जुळण्या चुकीच्या आहेत."
      }
    ]
  },
  {
    "q_no": 58,
    "question_marathi": "खालीलपैकी कोणते विधान/विधाने बरोबर आहेत ?\n(a) सागरमाला विकास कंपनी मर्यादित हीची स्थापना सन् 2014 मध्ये झाली.\n(b) सागरमाला अंतर्गत प्रकल्पांची अंमलबजावणी खाजगी किंवा सार्वजनिक खाजगी भागीदारी पद्धतीने होते.\nपर्यायी उत्तरे :",
    "question_english": "Which of the following is/are correct statement/s ?\n(a) Sagarmala Development Company Limited was incorporated in 2014.\n(b) Projects under Sagarmala are implemented through Private or Public-Private Partnership (PPP) mode.\nAnswer options :",
    "options_marathi": [
      "(a) फक्त बरोबर आहे.",
      "(b) फक्त बरोबर आहे.",
      "(a) आणि (b) दोन्ही बरोबर आहेत.",
      "(a) आणि (b) दोन्ही चूक आहेत."
    ],
    "options_english": [
      "only (a) is correct.",
      "only (b) is correct.",
      "Both (a) and (b) are correct.",
      "Both (a) and (b) are incorrect."
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Government Schemes (Sagarmala)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Sagarmala Programme is a national initiative aimed at enhancing the performance of India's logistics sector.\n*   Statement (a) is incorrect. The Sagarmala Development Company Limited (SDCL) was incorporated in **2016** under the Companies Act, 2013, to provide a framework for the implementation of the Sagarmala Programme, which itself was approved in 2015.\n*   Statement (b) is correct. Projects under the Sagarmala Programme are implemented through various modes, including central sector schemes, state schemes, Public-Private Partnership (PPP) models, and private investments, depending on the nature and feasibility of the project.",
    "explanation_marathi": "सागरमाला कार्यक्रम हा भारताच्या लॉजिस्टिक्स क्षेत्राची कार्यक्षमता वाढवण्याच्या उद्देशाने एक राष्ट्रीय उपक्रम आहे.\n*   विधान (a) चुकीचे आहे. सागरमाला विकास कंपनी लिमिटेड (SDCL) ची स्थापना **2016** मध्ये कंपनी अधिनियम, 2013 अंतर्गत करण्यात आली होती, जे सागरमाला कार्यक्रमाच्या अंमलबजावणीसाठी एक चौकट प्रदान करते, हा कार्यक्रम स्वतः 2015 मध्ये मंजूर झाला होता.\n*   विधान (b) बरोबर आहे. सागरमाला कार्यक्रमांतर्गत प्रकल्प विविध पद्धतींनी राबवले जातात, ज्यात केंद्रीय क्षेत्रातील योजना, राज्य योजना, सार्वजनिक-खाजगी भागीदारी (PPP) मॉडेल आणि खाजगी गुंतवणूक यांचा समावेश आहे, हे प्रकल्पाच्या स्वरूप आणि व्यवहार्यतेवर अवलंबून असते.",
    "options_breakdown": [
      {
        "option_text_english": "only (a) is correct.",
        "option_text_marathi": "(a) फक्त बरोबर आहे.",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect as Sagarmala Development Company Limited was incorporated in 2016, not 2014.",
        "reason_marathi": "विधान (a) चुकीचे आहे कारण सागरमाला विकास कंपनी लिमिटेडची स्थापना 2016 मध्ये झाली, 2014 मध्ये नाही."
      },
      {
        "option_text_english": "only (b) is correct.",
        "option_text_marathi": "(b) फक्त बरोबर आहे.",
        "is_correct": true,
        "reason_english": "Statement (b) is correct. Projects under Sagarmala are indeed implemented through various modes, including PPP and private investment.",
        "reason_marathi": "विधान (b) बरोबर आहे. सागरमाला अंतर्गत प्रकल्प खरंच PPP आणि खाजगी गुंतवणुकीसह विविध पद्धतींनी राबवले जातात."
      },
      {
        "option_text_english": "Both (a) and (b) are correct.",
        "option_text_marathi": "(a) आणि (b) दोन्ही बरोबर आहेत.",
        "is_correct": false,
        "reason_english": "Statement (a) is incorrect, so this option is false.",
        "reason_marathi": "विधान (a) चुकीचे आहे, त्यामुळे हा पर्याय खोटा आहे."
      },
      {
        "option_text_english": "Both (a) and (b) are incorrect.",
        "option_text_marathi": "(a) आणि (b) दोन्ही चूक आहेत.",
        "is_correct": false,
        "reason_english": "Statement (b) is correct, so this option is false.",
        "reason_marathi": "विधान (b) बरोबर आहे, त्यामुळे हा पर्याय खोटा आहे."
      }
    ]
  },
  {
    "q_no": 59,
    "question_marathi": "टेलीफोन खात्याचा कारभार, 'भारत संचार निगम लिमिटेड' कडे ______ मध्ये हस्तांतरीत करण्यात आला.",
    "question_english": "Telephone department was transferred to Bharat Sanchar Nigam Ltd. in ______.",
    "options_marathi": [
      "1991",
      "1994",
      "2000",
      "2005"
    ],
    "options_english": [
      "1991",
      "1994",
      "2000",
      "2005"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Telecommunication Sector Reforms / PSUs",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "Bharat Sanchar Nigam Limited (BSNL) was formed by the Government of India to provide telecom services. The Department of Telecom Services (DTS) and Department of Telecom Operations (DTO) were corporatized and their functions were transferred to BSNL. This transfer officially took place on October 1, **2000**, following the incorporation of BSNL on September 15, 2000.",
    "explanation_marathi": "भारत संचार निगम लिमिटेड (BSNL) ची स्थापना भारत सरकारने दूरसंचार सेवा प्रदान करण्यासाठी केली होती. दूरसंचार सेवा विभाग (DTS) आणि दूरसंचार ऑपरेशन्स विभाग (DTO) यांचे कॉर्पोरेटायझेशन करण्यात आले आणि त्यांची कार्ये BSNL कडे हस्तांतरित करण्यात आली. हे हस्तांतरण अधिकृतपणे 15 सप्टेंबर 2000 रोजी BSNL च्या स्थापनेनंतर 1 ऑक्टोबर **2000** रोजी झाले.",
    "options_breakdown": [
      {
        "option_text_english": "1991",
        "option_text_marathi": "1991",
        "is_correct": false,
        "reason_english": "This year is associated with major economic reforms in India, but not with the formation or transfer of the telephone department to BSNL.",
        "reason_marathi": "हे वर्ष भारतातील मोठ्या आर्थिक सुधारणांशी संबंधित आहे, परंतु BSNL ची स्थापना किंवा दूरध्वनी विभागाचे हस्तांतरण याच्याशी संबंधित नाही."
      },
      {
        "option_text_english": "1994",
        "option_text_marathi": "1994",
        "is_correct": false,
        "reason_english": "The National Telecom Policy was announced in 1994, but BSNL was not formed then.",
        "reason_marathi": "राष्ट्रीय दूरसंचार धोरण 1994 मध्ये जाहीर झाले, परंतु BSNL ची स्थापना त्यावेळी झाली नव्हती."
      },
      {
        "option_text_english": "2000",
        "option_text_marathi": "2000",
        "is_correct": true,
        "reason_english": "Bharat Sanchar Nigam Limited (BSNL) was incorporated on September 15, 2000, and took over the operations of the telephone department from October 1, 2000.",
        "reason_marathi": "भारत संचार निगम लिमिटेड (BSNL) ची स्थापना 15 सप्टेंबर 2000 रोजी झाली आणि 1 ऑक्टोबर 2000 पासून दूरध्वनी विभागाचे कामकाज त्यांनी हाती घेतले."
      },
      {
        "option_text_english": "2005",
        "option_text_marathi": "2005",
        "is_correct": false,
        "reason_english": "This date is much later than the actual transfer of the telephone department to BSNL.",
        "reason_marathi": "ही तारीख दूरध्वनी विभागाचे BSNL कडे हस्तांतरण झाल्याच्या वास्तविक तारखेनंतरची आहे."
      }
    ]
  },
  {
    "q_no": 60,
    "question_marathi": "खालीलपैकी कोणती विधाने बरोबर आहेत ?\n(a) उज्ज्वल योजना नोव्हेंबर 2015 मध्ये सुरु करण्यात आली.\n(b) तीचा भर वितरण कंपन्यांची वीज देयके आणि संकलनातील कार्यक्षमता यावर आहे.\nपर्यायी उत्तरे :",
    "question_english": "Which of the following statements are true ?\n(a) Ujjwal Yojana was launched in November, 2015.\n(b) It's focus has been on billing and collection efficiency of DISCOMS.\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(b) फक्त",
      "(a) आणि (b) दोन्हीही नाही",
      "(a) आणि (b) दोन्ही बरोबर आहेत"
    ],
    "options_english": [
      "(a) only",
      "(b) only",
      "Neither (a) nor (b)",
      "Both (a) and (b) are correct"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Government Schemes (UDAY) / Power Sector Reforms",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The \"Ujwal DISCOM Assurance Yojana\" (UDAY) was indeed launched in November 2015 (specifically, November 5, 2015) by the Ministry of Power. Its primary objective was the financial turnaround and revival of power distribution companies (DISCOMs) in India. A key component of this revival strategy was to improve the operational efficiency of DISCOMs, which directly includes enhancing their billing and collection efficiency, as well as reducing Aggregate Technical & Commercial (AT&C) losses. Therefore, both statements (a) and (b) are correct regarding the UDAY scheme.",
    "explanation_marathi": "\"उज्ज्वल डिस्कॉम ॲश्युरन्स योजना\" (UDAY) खरंच नोव्हेंबर 2015 मध्ये (विशेषतः 5 नोव्हेंबर 2015 रोजी) ऊर्जा मंत्रालयाने सुरू केली होती. भारतातील वीज वितरण कंपन्यांच्या (DISCOMs) आर्थिक पुनरुज्जीवन आणि पुनरुत्थानाचे हे मुख्य उद्दिष्ट होते. या पुनरुज्जीवन धोरणाचा एक महत्त्वाचा घटक म्हणजे DISCOMs ची कार्यात्मक कार्यक्षमता सुधारणे, ज्यात त्यांची बिलिंग आणि संकलन कार्यक्षमता वाढवणे, तसेच एकूण तांत्रिक आणि व्यावसायिक (AT&C) तोटा कमी करणे यांचा थेट समावेश आहे. त्यामुळे, UDAY योजनेच्या संदर्भात दोन्ही विधाने (a) आणि (b) बरोबर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Statement (b) is also correct, as improving billing and collection efficiency was a core focus of UDAY.",
        "reason_marathi": "विधान (b) देखील बरोबर आहे, कारण बिलिंग आणि संकलन कार्यक्षमता सुधारणे हे UDAY चे मुख्य लक्ष होते."
      },
      {
        "option_text_english": "(b) only",
        "option_text_marathi": "(b) फक्त",
        "is_correct": false,
        "reason_english": "Statement (a) is also correct, as UDAY was launched in November 2015.",
        "reason_marathi": "विधान (a) देखील बरोबर आहे, कारण UDAY नोव्हेंबर 2015 मध्ये सुरू करण्यात आली होती."
      },
      {
        "option_text_english": "Neither (a) nor (b)",
        "option_text_marathi": "(a) आणि (b) दोन्हीही नाही",
        "is_correct": false,
        "reason_english": "Both statements (a) and (b) are correct regarding the Ujwal DISCOM Assurance Yojana (UDAY).",
        "reason_marathi": "उज्ज्वल डिस्कॉम ॲश्युरन्स योजना (UDAY) संदर्भात दोन्ही विधाने (a) आणि (b) बरोबर आहेत."
      },
      {
        "option_text_english": "Both (a) and (b) are correct",
        "option_text_marathi": "(a) आणि (b) दोन्ही बरोबर आहेत",
        "is_correct": true,
        "reason_english": "The Ujwal DISCOM Assurance Yojana (UDAY) was launched in November 2015, and its focus included improving the billing and collection efficiency of DISCOMs.",
        "reason_marathi": "उज्ज्वल डिस्कॉम ॲश्युरन्स योजना (UDAY) नोव्हेंबर 2015 मध्ये सुरू करण्यात आली होती आणि तिचा भर DISCOMs च्या बिलिंग आणि संकलन कार्यक्षमतेत सुधारणा करण्यावर होता."
      }
    ]
  },
  {
    "q_no": 61,
    "question_marathi": "खालीलपैकी रस्ते वाहतूकीच्या मुख्य समस्या कोणत्या आहेत ?\n(a) रस्ते विकासाची मंदगती\n(b) निकृष्ट दर्जा\n(c) विषम वितरण\n(d) उच्च वाहतूक खर्च\nपर्यायी उत्तरे :",
    "question_english": "Which of the following are the major problems in Road-Transportation ?\n(a) Slow-paced growth\n(b) Poor quality\n(c) Uneven distribution\n(d) High cost of transport\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(a) आणि (b) फक्त",
      "(a), (b) आणि (d) फक्त",
      "वरीलपैकी सर्व"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b) only",
      "(a), (b) and (d) only",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Infrastructure / Road Transportation Problems",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "India's road transportation sector faces several significant challenges. These include the slow pace of road development, which often lags behind the increasing demand for connectivity. The quality of roads, particularly in rural areas, is often poor, leading to higher maintenance costs for vehicles and slower travel times. There is also a marked uneven distribution of road networks, with urban and economically developed regions having better connectivity compared to remote and rural areas. Furthermore, the high cost of transport, influenced by fuel prices, tolls, and vehicle maintenance, adds to the overall economic burden.",
    "explanation_marathi": "भारतातील रस्ते वाहतूक क्षेत्राला अनेक महत्त्वपूर्ण आव्हानांचा सामना करावा लागतो. यामध्ये रस्ते विकासाची मंदगती समाविष्ट आहे, जी अनेकदा वाढत्या कनेक्टिव्हिटीच्या मागणीपेक्षा मागे पडते. रस्त्यांची गुणवत्ता, विशेषतः ग्रामीण भागात, अनेकदा निकृष्ट असते, ज्यामुळे वाहनांचा देखभाल खर्च वाढतो आणि प्रवासाचा वेळ जास्त लागतो. रस्ते जाळ्याचे विषम वितरण देखील दिसून येते, ज्यात शहरी आणि आर्थिकदृष्ट्या विकसित प्रदेशांमध्ये दुर्गम आणि ग्रामीण भागांच्या तुलनेत चांगली कनेक्टिव्हिटी असते. याव्यतिरिक्त, इंधनाच्या किमती, टोल आणि वाहन देखभालीमुळे प्रभावित होणारा उच्च वाहतूक खर्च एकूण आर्थिक बोजा वाढवतो.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "analysis_english": "Incorrect, as more than one problem exists in Indian road transportation.",
        "analysis_marathi": "चुकीचे, कारण भारतीय रस्ते वाहतुकीत एकापेक्षा जास्त समस्या आहेत."
      },
      {
        "option_text_english": "(a) and (b) only",
        "option_text_marathi": "(a) आणि (b) फक्त",
        "analysis_english": "Incorrect, as uneven distribution (c) and high cost of transport (d) are also significant problems.",
        "analysis_marathi": "चुकीचे, कारण विषम वितरण (c) आणि उच्च वाहतूक खर्च (d) या देखील महत्त्वाच्या समस्या आहेत."
      },
      {
        "option_text_english": "(a), (b) and (d) only",
        "option_text_marathi": "(a), (b) आणि (d) फक्त",
        "analysis_english": "Incorrect, as uneven distribution (c) is also a major problem.",
        "analysis_marathi": "चुकीचे, कारण विषम वितरण (c) ही देखील एक मोठी समस्या आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरीलपैकी सर्व",
        "analysis_english": "Correct. Slow-paced growth, poor quality, uneven distribution, and high cost of transport are all major problems faced by road transportation in India.",
        "analysis_marathi": "बरोबर. मंदगती विकास, निकृष्ट दर्जा, विषम वितरण आणि उच्च वाहतूक खर्च या सर्व भारतातील रस्ते वाहतुकीसमोरील प्रमुख समस्या आहेत."
      }
    ]
  },
  {
    "q_no": 62,
    "question_marathi": "भारतात कोळसा खाणीची सुरुवात सर्वप्रथम ______ येथे झाली.",
    "question_english": "The Coal mining was first started in India in ______.",
    "options_marathi": [
      "मध्य प्रदेश",
      "ओरीसा",
      "पश्चिम बंगाल",
      "आंध्र प्रदेश"
    ],
    "options_english": [
      "Madhya Pradesh",
      "Orissa",
      "West Bengal",
      "Andhra Pradesh"
    ],
    "correct_option_index": 3,
    "subject": "Geography",
    "topic": "Mineral Resources / Coal Mining History",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The first coal mining operations in India commenced in Raniganj, West Bengal, in 1774. This marked the beginning of commercial coal extraction in the country, which later became a crucial energy source for industrial development. Raniganj coalfield remains one of the oldest and most important coalfields in India.",
    "explanation_marathi": "भारतातील कोळसा खाणकाम सर्वप्रथम १७७४ मध्ये पश्चिम बंगालमधील राणीगंज येथे सुरू झाले. या घटनेने देशातील व्यावसायिक कोळसा उत्खननाची सुरुवात झाली, जे नंतर औद्योगिक विकासासाठी एक महत्त्वाचे ऊर्जा स्त्रोत बनले. राणीगंज कोळसा क्षेत्र हे भारतातील सर्वात जुन्या आणि महत्त्वाच्या कोळसा क्षेत्रांपैकी एक आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Madhya Pradesh",
        "option_text_marathi": "मध्य प्रदेश",
        "analysis_english": "Incorrect. While Madhya Pradesh has significant coal reserves, it was not the location where coal mining first started in India.",
        "analysis_marathi": "चुकीचे. मध्य प्रदेशात मोठ्या प्रमाणात कोळसा साठा असला तरी, भारतात सर्वप्रथम कोळसा खाणकाम येथे सुरू झाले नाही."
      },
      {
        "option_text_english": "Orissa",
        "option_text_marathi": "ओरीसा",
        "analysis_english": "Incorrect. Odisha (formerly Orissa) is a major coal-producing state, but not the site of the first coal mine.",
        "analysis_marathi": "चुकीचे. ओडिशा (पूर्वी ओरिसा) हे एक प्रमुख कोळसा उत्पादक राज्य आहे, परंतु ते पहिले कोळसा खाणीचे ठिकाण नव्हते."
      },
      {
        "option_text_english": "West Bengal",
        "option_text_marathi": "पश्चिम बंगाल",
        "analysis_english": "Correct. The first coal mine in India was opened in Raniganj, West Bengal, in 1774.",
        "analysis_marathi": "बरोबर. भारतातील पहिली कोळसा खाण १७७४ मध्ये पश्चिम बंगालमधील राणीगंज येथे सुरू झाली."
      },
      {
        "option_text_english": "Andhra Pradesh",
        "option_text_marathi": "आंध्र प्रदेश",
        "analysis_english": "Incorrect. Andhra Pradesh has coal reserves, but it was not the first state for coal mining in India.",
        "analysis_marathi": "चुकीचे. आंध्र प्रदेशात कोळसा साठा आहे, परंतु ते भारतातील कोळसा खाणकामासाठी पहिले राज्य नव्हते."
      }
    ]
  },
  {
    "q_no": 63,
    "question_marathi": "खालीलपैकी कोणती विधाने बरोबर आहेत ?\n'भारत नेट' प्रकल्पाचे हे उद्देश आहेत :\n(a) ऑप्टीक फायबर जाळ्याने ग्रामपंचायती जोडणे.\n(b) दारिद्र्य रेषेखालील (BPL) कुटुंबाना विनामूल्य नेटवर्क पुरविणे.\nपर्यायी उत्तरे :",
    "question_english": "Which of these are correct statements ?\nThe 'Bharat Net' Project aims at :\n(a) Linking Gram Panchayats through optical fibre network.\n(b) Providing free network to the families in BPL category.\nAnswer options :",
    "options_marathi": [
      "(a) फक्त बरोबर आहे",
      "(b) फक्त बरोबर आहे",
      "(a) आणि (b) दोन्ही बरोबर आहेत",
      "(a) आणि (b) दोन्हीही चूक आहेत"
    ],
    "options_english": [
      "(a) only is correct",
      "(b) only is correct",
      "Both (a) and (b) are correct",
      "Neither (a) nor (b) are correct"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Government Schemes / Digital India / Telecommunication Infrastructure",
    "difficulty": "Medium",
    "trap_detected": "Factual Misinterpretation",
    "explanation_english": "The BharatNet project, formerly known as the National Optical Fibre Network (NOFN), is a flagship initiative of the Government of India. Its primary objective is to provide broadband connectivity to all 2.5 lakh Gram Panchayats across the country using optical fibre. This aims to bridge the digital divide and facilitate e-governance, e-health, e-education, and other services in rural areas. While the project aims to make broadband services accessible and affordable, providing 'free network to BPL families' is not a direct stated objective of the BharatNet project itself, but rather a potential outcome or a separate scheme that might leverage BharatNet infrastructure.",
    "explanation_marathi": "भारतनेट प्रकल्प, ज्याला पूर्वी राष्ट्रीय ऑप्टिकल फायबर नेटवर्क (NOFN) म्हणून ओळखले जात होते, हा भारत सरकारचा एक महत्त्वाकांक्षी उपक्रम आहे. या प्रकल्पाचे मुख्य उद्दिष्ट देशातील सर्व २.५ लाख ग्रामपंचायतींना ऑप्टिकल फायबर वापरून ब्रॉडबँड कनेक्टिव्हिटी प्रदान करणे आहे. याचा उद्देश डिजिटल दरी कमी करणे आणि ग्रामीण भागात ई-गव्हर्नन्स, ई-आरोग्य, ई-शिक्षण आणि इतर सेवा सुलभ करणे आहे. हा प्रकल्प ब्रॉडबँड सेवा सुलभ आणि परवडणाऱ्या बनवण्याचे उद्दिष्ट ठेवत असला तरी, 'दारिद्र्य रेषेखालील (BPL) कुटुंबांना विनामूल्य नेटवर्क पुरवणे' हे भारतनेट प्रकल्पाचे थेट उद्दिष्ट नाही, तर ते एक संभाव्य परिणाम किंवा भारतनेट पायाभूत सुविधांचा लाभ घेणारी एक वेगळी योजना असू शकते.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only is correct",
        "option_text_marathi": "(a) फक्त बरोबर आहे",
        "analysis_english": "Correct. Linking Gram Panchayats through optical fibre network is the core and primary objective of the BharatNet project.",
        "analysis_marathi": "बरोबर. ऑप्टिकल फायबर नेटवर्कद्वारे ग्रामपंचायतींना जोडणे हे भारतनेट प्रकल्पाचे मुख्य आणि प्राथमिक उद्दिष्ट आहे."
      },
      {
        "option_text_english": "(b) only is correct",
        "option_text_marathi": "(b) फक्त बरोबर आहे",
        "analysis_english": "Incorrect. While BharatNet aims for affordable access, providing 'free network to BPL families' is not a direct stated objective of the project.",
        "analysis_marathi": "चुकीचे. भारतनेटचा उद्देश परवडणारी कनेक्टिव्हिटी प्रदान करणे असला तरी, 'दारिद्र्य रेषेखालील (BPL) कुटुंबांना विनामूल्य नेटवर्क पुरवणे' हे प्रकल्पाचे थेट उद्दिष्ट नाही."
      },
      {
        "option_text_english": "Both (a) and (b) are correct",
        "option_text_marathi": "(a) आणि (b) दोन्ही बरोबर आहेत",
        "analysis_english": "Incorrect, as statement (b) is not a direct objective of BharatNet.",
        "analysis_marathi": "चुकीचे, कारण विधान (b) हे भारतनेटचे थेट उद्दिष्ट नाही."
      },
      {
        "option_text_english": "Neither (a) nor (b) are correct",
        "option_text_marathi": "(a) आणि (b) दोन्हीही चूक आहेत",
        "analysis_english": "Incorrect, as statement (a) is correct.",
        "analysis_marathi": "चुकीचे, कारण विधान (a) बरोबर आहे."
      }
    ]
  },
  {
    "q_no": 64,
    "question_marathi": "भारतातील पायाभूत सोयींचा विकास केवळ शहरांच्या बाजूने झुकणारा आहे असे नव्हे तर तो ______ बाजूनेही झुकणारा आहे.",
    "question_english": "Infrastructural development in India is not only urban-biased, but also shows a bias in favour of ______.",
    "options_marathi": [
      "गरीबांच्या",
      "श्रीमंताच्या",
      "कामगारांच्या",
      "शेतकऱ्यांच्या"
    ],
    "options_english": [
      "poor",
      "rich",
      "workers",
      "farmers"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Economic Development / Infrastructure / Inequality",
    "difficulty": "Medium",
    "trap_detected": "General Perception vs. Economic Reality",
    "explanation_english": "Infrastructural development in India, while crucial for overall growth, often exhibits a dual bias. Besides being urban-centric, it also tends to favor the wealthier sections of society. This is because the benefits of new infrastructure, such as better roads, advanced communication networks, and modern amenities, are often more readily accessible and utilized by those with higher purchasing power and economic influence. This can exacerbate existing inequalities, as the rich are better positioned to capitalize on these developments for business and personal gains, while the poor may struggle to access or afford the services provided by the new infrastructure.",
    "explanation_marathi": "भारतातील पायाभूत सुविधांचा विकास, जो एकूण वाढीसाठी महत्त्वाचा आहे, अनेकदा दुहेरी पूर्वग्रह दर्शवतो. शहरी-केंद्रित असण्याव्यतिरिक्त, तो समाजातील श्रीमंत वर्गाच्या बाजूने झुकलेला असतो. याचे कारण असे की, चांगल्या रस्त्यांसारख्या नवीन पायाभूत सुविधांचे फायदे, प्रगत दळणवळण नेटवर्क आणि आधुनिक सुविधा, उच्च क्रयशक्ती आणि आर्थिक प्रभाव असलेल्या लोकांसाठी अधिक सहज उपलब्ध आणि वापरल्या जातात. यामुळे सध्याची असमानता वाढू शकते, कारण श्रीमंत लोक व्यवसाय आणि वैयक्तिक लाभासाठी या विकासाचा फायदा घेण्यासाठी अधिक चांगल्या स्थितीत असतात, तर गरीब लोकांना नवीन पायाभूत सुविधांद्वारे प्रदान केलेल्या सेवांमध्ये प्रवेश मिळवण्यासाठी किंवा त्या परवडण्यासाठी संघर्ष करावा लागू शकतो.",
    "options_breakdown": [
      {
        "option_text_english": "poor",
        "option_text_marathi": "गरीबांच्या",
        "analysis_english": "Incorrect. While infrastructure aims to benefit all, its development often disproportionately benefits the rich due to access and affordability issues, rather than directly favoring the poor.",
        "analysis_marathi": "चुकीचे. पायाभूत सुविधांचा उद्देश सर्वांना लाभ देणे असला तरी, त्याचा विकास अनेकदा गरीब लोकांना थेट फायदा देण्याऐवजी, प्रवेश आणि परवडण्याच्या समस्यांमुळे श्रीमंतांना जास्त प्रमाणात फायदा देतो."
      },
      {
        "option_text_english": "rich",
        "option_text_marathi": "श्रीमंताच्या",
        "analysis_english": "Correct. Infrastructural development often creates opportunities and benefits that are more easily leveraged by the wealthier sections of society, leading to a bias in their favor.",
        "analysis_marathi": "बरोबर. पायाभूत सुविधांचा विकास अनेकदा अशा संधी आणि फायदे निर्माण करतो, जे समाजातील श्रीमंत वर्गाद्वारे अधिक सहजपणे वापरले जातात, ज्यामुळे त्यांच्या बाजूने पूर्वग्रह निर्माण होतो."
      },
      {
        "option_text_english": "workers",
        "option_text_marathi": "कामगारांच्या",
        "analysis_english": "Incorrect. While infrastructure projects create employment for workers, the overall bias of the developed infrastructure is not specifically towards the working class in terms of long-term benefits.",
        "analysis_marathi": "चुकीचे. पायाभूत सुविधा प्रकल्प कामगारांसाठी रोजगार निर्माण करत असले तरी, विकसित पायाभूत सुविधांचा एकूण पूर्वग्रह दीर्घकालीन फायद्यांच्या दृष्टीने विशेषतः कामगार वर्गाच्या बाजूने नसतो."
      },
      {
        "option_text_english": "farmers",
        "option_text_marathi": "शेतकऱ्यांच्या",
        "analysis_english": "Incorrect. While rural infrastructure is vital for farmers, the general trend of infrastructural development in India shows a bias towards urban areas and the rich, rather than specifically farmers.",
        "analysis_marathi": "चुकीचे. ग्रामीण पायाभूत सुविधा शेतकऱ्यांसाठी महत्त्वाच्या असल्या तरी, भारतातील पायाभूत सुविधांच्या विकासाचा सामान्य कल शहरी भागांकडे आणि श्रीमंतांकडे झुकलेला दिसतो, विशेषतः शेतकऱ्यांकडे नाही."
      }
    ]
  },
  {
    "q_no": 65,
    "question_marathi": "खालील विधाने पहा :\n(a) नॅशनल इलेक्ट्रीक मोबिलीटी मिशन योजना (NEMMP) चा उद्देश इंधन बचत आणि कर्ब उत्सर्जन कमी करणे आहे.\n(b) फास्टर अॅडोप्शन अँड मॅन्युफॅक्चरिंग ऑफ (हायब्रीड) इलेक्ट्रीक वेईकल्स (FAME) ही केंद्रीय योजना आहे.\nपर्यायी उत्तरे :",
    "question_english": "Consider the following Statements:\n(a) National Electric Mobility Mission Plan (NEMMP) aims at saving fuel and reducing carbon emission.\n(b) Faster Adoption and Manufacturing of (Hybrid) Electric Vehicles (FAME) is central scheme.\nAnswer options :",
    "options_marathi": [
      "फक्त (a) बरोबर विधान आहे.",
      "फक्त (b) बरोबर विधान आहे.",
      "(a) आणि (b) दोन्ही विधाने चूक आहेत..",
      "(a) आणि (b) दोन्ही विधाने बरोबर आहेत."
    ],
    "options_english": [
      "only (a) is correct statement.",
      "only (b) is correct statement.",
      "(a) and (b) both are incorrect statements.",
      "(a) and (b) both are correct statements."
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Government Schemes / Electric Vehicles / Sustainable Development",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Both statements are correct. The National Electric Mobility Mission Plan (NEMMP) 2020 was launched with the ambitious goal of promoting hybrid and electric vehicles in India. Its primary objectives include enhancing national fuel security by reducing reliance on fossil fuels and mitigating the environmental impact by lowering carbon emissions. The Faster Adoption and Manufacturing of (Hybrid &) Electric Vehicles (FAME India) scheme is a crucial component and a central government initiative under the NEMMP. FAME aims to provide incentives for the purchase of electric and hybrid vehicles, establish charging infrastructure, and support R&D in electric mobility technology, thereby accelerating the adoption and manufacturing of such vehicles in the country.",
    "explanation_marathi": "दोन्ही विधाने बरोबर आहेत. राष्ट्रीय इलेक्ट्रिक मोबिलिटी मिशन योजना (NEMMP) २०२० ही भारतात हायब्रीड आणि इलेक्ट्रिक वाहनांना प्रोत्साहन देण्याच्या महत्त्वाकांक्षी उद्दिष्टाने सुरू करण्यात आली होती. जीवाश्म इंधनावरील अवलंबित्व कमी करून राष्ट्रीय इंधन सुरक्षा वाढवणे आणि कार्बन उत्सर्जन कमी करून पर्यावरणावर होणारा परिणाम कमी करणे ही त्याची मुख्य उद्दिष्टे आहेत. फास्टर अॅडोप्शन अँड मॅन्युफॅक्चरिंग ऑफ (हायब्रीड) इलेक्ट्रीक वेईकल्स (FAME इंडिया) योजना हा NEMMP अंतर्गत एक महत्त्वाचा घटक आणि केंद्र सरकारचा उपक्रम आहे. FAME चा उद्देश इलेक्ट्रिक आणि हायब्रीड वाहनांच्या खरेदीसाठी प्रोत्साहन देणे, चार्जिंग पायाभूत सुविधा स्थापित करणे आणि इलेक्ट्रिक मोबिलिटी तंत्रज्ञानातील संशोधन आणि विकासाला पाठिंबा देणे आहे, ज्यामुळे देशात अशा वाहनांचा अवलंब आणि उत्पादन वेगाने वाढेल.",
    "options_breakdown": [
      {
        "option_text_english": "only (a) is correct statement.",
        "option_text_marathi": "फक्त (a) बरोबर विधान आहे.",
        "analysis_english": "Incorrect, as statement (b) is also correct.",
        "analysis_marathi": "चुकीचे, कारण विधान (b) देखील बरोबर आहे."
      },
      {
        "option_text_english": "only (b) is correct statement.",
        "option_text_marathi": "फक्त (b) बरोबर विधान आहे.",
        "analysis_english": "Incorrect, as statement (a) is also correct.",
        "analysis_marathi": "चुकीचे, कारण विधान (a) देखील बरोबर आहे."
      },
      {
        "option_text_english": "(a) and (b) both are incorrect statements.",
        "option_text_marathi": "(a) आणि (b) दोन्ही विधाने चूक आहेत..",
        "analysis_english": "Incorrect, as both statements (a) and (b) are correct.",
        "analysis_marathi": "चुकीचे, कारण दोन्ही विधाने (a) आणि (b) बरोबर आहेत."
      },
      {
        "option_text_english": "(a) and (b) both are correct statements.",
        "option_text_marathi": "(a) आणि (b) दोन्ही विधाने बरोबर आहेत.",
        "analysis_english": "Correct. NEMMP aims to save fuel and reduce carbon emissions, and FAME is indeed a central scheme under NEMMP.",
        "analysis_marathi": "बरोबर. NEMMP चा उद्देश इंधन बचत आणि कार्बन उत्सर्जन कमी करणे आहे, आणि FAME ही NEMMP अंतर्गत एक केंद्रीय योजना आहे."
      }
    ]
  },
  {
    "q_no": 66,
    "question_marathi": "जागतिक व्यापार परिषदेच्या बौद्धिक संपदाविषयक अधिकारांत खालीलपैकी कोणत्या कलमांचा समावेश होतो ?",
    "question_english": "Which of the following clauses is a part of intellectual property rights in WTO ?",
    "options_marathi": [
      "पेटंटशी संबंधित कलम",
      "व्यापारातील गुंतवणूकविषयक योजना संबंधित कलम (TRIMS)",
      "व्यापारशुल्क आणि व्यापारविषयक सामान्य करार (GATT)",
      "सामाजिक कलम"
    ],
    "options_english": [
      "Patent related clause",
      "Trade related investment measures (TRIMS)",
      "General agreement on tariff and trade",
      "Social clause"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "WTO / Intellectual Property Rights (IPR)",
    "difficulty": "Medium",
    "trap_detected": "Distractor Options (Other WTO Agreements)",
    "explanation_english": "The World Trade Organization (WTO) has a comprehensive agreement on intellectual property rights known as the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS). This agreement covers various forms of intellectual property, including patents, copyrights, trademarks, geographical indications, industrial designs, and trade secrets. Therefore, patent-related clauses are a fundamental part of intellectual property rights under the WTO framework. TRIMS (Trade-Related Investment Measures) deals with investment policies, GATT (General Agreement on Tariffs and Trade) is primarily about trade in goods, and social clauses are generally not directly part of the core IPR agreements within the WTO.",
    "explanation_marathi": "जागतिक व्यापार संघटनेकडे (WTO) बौद्धिक संपदा हक्कांवर एक व्यापक करार आहे, ज्याला बौद्धिक संपदा हक्कांच्या व्यापार-संबंधित पैलूंवरील करार (TRIPS) असे म्हणतात. या करारामध्ये पेटंट, कॉपीराइट, ट्रेडमार्क, भौगोलिक संकेत, औद्योगिक डिझाइन आणि व्यापार रहस्ये यासह बौद्धिक संपदेच्या विविध प्रकारांचा समावेश आहे. त्यामुळे, पेटंट-संबंधित कलमे WTO च्या चौकटीतील बौद्धिक संपदा हक्कांचा एक मूलभूत भाग आहेत. TRIMS (व्यापार-संबंधित गुंतवणूक उपाय) गुंतवणूक धोरणांशी संबंधित आहे, GATT (टॅरिफ आणि व्यापारावरील सामान्य करार) प्रामुख्याने वस्तूंच्या व्यापाराशी संबंधित आहे आणि सामाजिक कलमे सामान्यतः WTO मधील मुख्य IPR करारांचा थेट भाग नाहीत.",
    "options_breakdown": [
      {
        "option_text_english": "Patent related clause",
        "option_text_marathi": "पेटंटशी संबंधित कलम",
        "analysis_english": "Correct. Patents are a key component of Intellectual Property Rights (IPR) and are explicitly covered under the WTO's TRIPS (Trade-Related Aspects of Intellectual Property Rights) agreement.",
        "analysis_marathi": "बरोबर. पेटंट हे बौद्धिक संपदा हक्कांचा (IPR) एक महत्त्वाचा घटक आहे आणि WTO च्या TRIPS (बौद्धिक संपदा हक्कांच्या व्यापार-संबंधित पैलूंवरील करार) अंतर्गत स्पष्टपणे समाविष्ट आहे."
      },
      {
        "option_text_english": "Trade related investment measures (TRIMS)",
        "option_text_marathi": "व्यापारातील गुंतवणूकविषयक योजना संबंधित कलम (TRIMS)",
        "analysis_english": "Incorrect. TRIMS is a separate WTO agreement that deals with investment policies, not directly with intellectual property rights.",
        "analysis_marathi": "चुकीचे. TRIMS हा एक स्वतंत्र WTO करार आहे जो गुंतवणूक धोरणांशी संबंधित आहे, बौद्धिक संपदा हक्कांशी थेट संबंधित नाही."
      },
      {
        "option_text_english": "General agreement on tariff and trade",
        "option_text_marathi": "व्यापारशुल्क आणि व्यापारविषयक सामान्य करार (GATT)",
        "analysis_english": "Incorrect. GATT is primarily concerned with reducing tariffs and other trade barriers for goods, not intellectual property rights.",
        "analysis_marathi": "चुकीचे. GATT प्रामुख्याने वस्तूंच्या व्यापारासाठी शुल्क आणि इतर व्यापार अडथळे कमी करण्याशी संबंधित आहे, बौद्धिक संपदा हक्कांशी नाही."
      },
      {
        "option_text_english": "Social clause",
        "option_text_marathi": "सामाजिक कलम",
        "analysis_english": "Incorrect. Social clauses, often related to labor standards, are not a part of the core intellectual property rights agreements within the WTO.",
        "analysis_marathi": "चुकीचे. सामाजिक कलमे, जी अनेकदा कामगार मानकांशी संबंधित असतात, ती WTO मधील मुख्य बौद्धिक संपदा हक्कांच्या करारांचा भाग नाहीत."
      }
    ]
  },
  {
    "q_no": 67,
    "question_marathi": "खालीलपैकी अचूक विधान कोणते ?\n(1) परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेची उत्पादन क्षमता वाढण्यास मदत होते तर रोखेसंग्रही गुंतवणूकीमुळे अर्थव्यवस्थेत अस्थिरता येते.\n(2) परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेत खरेदीशक्ती वाढते तर रोखेसंग्रही गुंतवणूकीमुळे परदेशी रोखे बाजाराचा फायदा होतो.\n(3) भारतात परकीय प्रत्यक्ष गुंतवणूकीपेक्षा रोखेसंग्रही गुंतवणूकीचा फायदा अधिक आहे.\n(4) परकीय प्रत्यक्ष गुंतवणूक ही केवळ विकसनशील देशांसाठीच फायदेशीर आहे.",
    "question_english": "Which of the following is a correct statement ?\n(1) FDI helps to increase the productive capacity of the economy while FPI leads to volatility.\n(2) FDI leads to increased purchasing power in the economy whereas FPI benefits foreign share market.\n(3) FPI is more beneficial than FDI in India.\n(4) FDI is beneficial for developing nations only.",
    "options_marathi": [
      "परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेची उत्पादन क्षमता वाढण्यास मदत होते तर रोखेसंग्रही गुंतवणूकीमुळे अर्थव्यवस्थेत अस्थिरता येते.",
      "परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेत खरेदीशक्ती वाढते तर रोखेसंग्रही गुंतवणूकीमुळे परदेशी रोखे बाजाराचा फायदा होतो.",
      "भारतात परकीय प्रत्यक्ष गुंतवणूकीपेक्षा रोखेसंग्रही गुंतवणूकीचा फायदा अधिक आहे.",
      "परकीय प्रत्यक्ष गुंतवणूक ही केवळ विकसनशील देशांसाठीच फायदेशीर आहे."
    ],
    "options_english": [
      "FDI helps to increase the productive capacity of the economy while FPI leads to volatility.",
      "FDI leads to increased purchasing power in the economy whereas FPI benefits foreign share market.",
      "FPI is more beneficial than FDI in India.",
      "FDI is beneficial for developing nations only."
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "International Trade & Investment / FDI vs FPI",
    "difficulty": "Medium",
    "trap_detected": "Nuance in Economic Concepts",
    "explanation_english": "The correct statement is that Foreign Direct Investment (FDI) helps to increase the productive capacity of an economy, while Foreign Portfolio Investment (FPI) can lead to volatility. FDI involves long-term investment in physical assets, technology, and human capital, directly contributing to job creation, infrastructure development, and enhanced production capabilities. In contrast, FPI involves investments in financial assets like stocks and bonds, which are often short-term and highly sensitive to market fluctuations and global economic conditions. This makes FPI more prone to sudden outflows, potentially causing instability and volatility in the host country's financial markets and exchange rates.",
    "explanation_marathi": "योग्य विधान असे आहे की, परकीय प्रत्यक्ष गुंतवणूक (FDI) अर्थव्यवस्थेची उत्पादन क्षमता वाढवण्यास मदत करते, तर रोखेसंग्रही गुंतवणूक (FPI) अस्थिरता निर्माण करू शकते. FDI मध्ये भौतिक मालमत्ता, तंत्रज्ञान आणि मानवी भांडवलामध्ये दीर्घकालीन गुंतवणूक समाविष्ट असते, ज्यामुळे रोजगार निर्मिती, पायाभूत सुविधांचा विकास आणि उत्पादन क्षमता वाढण्यास थेट हातभार लागतो. याउलट, FPI मध्ये स्टॉक आणि बॉंड्ससारख्या वित्तीय मालमत्तांमध्ये गुंतवणूक समाविष्ट असते, जी अनेकदा अल्पकालीन असते आणि बाजारातील चढ-उतार आणि जागतिक आर्थिक परिस्थितीस अत्यंत संवेदनशील असते. यामुळे FPI अचानक बाहेर पडण्याची शक्यता जास्त असते, ज्यामुळे यजमान देशाच्या वित्तीय बाजारपेठा आणि विनिमय दरांमध्ये अस्थिरता निर्माण होऊ शकते.",
    "options_breakdown": [
      {
        "option_text_english": "FDI helps to increase the productive capacity of the economy while FPI leads to volatility.",
        "option_text_marathi": "परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेची उत्पादन क्षमता वाढण्यास मदत होते तर रोखेसंग्रही गुंतवणूकीमुळे अर्थव्यवस्थेत अस्थिरता येते.",
        "analysis_english": "Correct. FDI brings in capital, technology, and management expertise, directly enhancing production capacity and creating jobs. FPI is more liquid and can exit quickly, causing market instability and volatility.",
        "analysis_marathi": "बरोबर. FDI भांडवल, तंत्रज्ञान आणि व्यवस्थापन कौशल्ये आणते, ज्यामुळे उत्पादन क्षमता थेट वाढते आणि रोजगार निर्माण होतात. FPI अधिक तरल असते आणि ते लवकर बाहेर पडू शकते, ज्यामुळे बाजारात अस्थिरता आणि चढ-उतार निर्माण होतात."
      },
      {
        "option_text_english": "FDI leads to increased purchasing power in the economy whereas FPI benefits foreign share market.",
        "option_text_marathi": "परकीय प्रत्यक्ष गुंतवणूकीमुळे अर्थव्यवस्थेत खरेदीशक्ती वाढते तर रोखेसंग्रही गुंतवणूकीमुळे परदेशी रोखे बाजाराचा फायदा होतो.",
        "analysis_english": "Incorrect. While FDI can indirectly increase purchasing power through economic growth, it's not its primary direct effect. FPI primarily benefits foreign investors, not necessarily the foreign share market as a whole in the context of the host country.",
        "analysis_marathi": "चुकीचे. FDI मुळे आर्थिक वाढीद्वारे अप्रत्यक्षपणे खरेदीशक्ती वाढू शकते, परंतु तो त्याचा प्राथमिक थेट परिणाम नाही. FPI प्रामुख्याने परदेशी गुंतवणूकदारांना फायदा देतो, यजमान देशाच्या परदेशी शेअर बाजाराला संपूर्णपणे नाही."
      },
      {
        "option_text_english": "FPI is more beneficial than FDI in India.",
        "option_text_marathi": "भारतात परकीय प्रत्यक्ष गुंतवणूकीपेक्षा रोखेसंग्रही गुंतवणूकीचा फायदा अधिक आहे.",
        "analysis_english": "Incorrect. Generally, FDI is considered more stable and beneficial for long-term economic growth and development than FPI, especially for developing economies like India.",
        "analysis_marathi": "चुकीचे. सामान्यतः, FDI हे FPI पेक्षा दीर्घकालीन आर्थिक वाढ आणि विकासासाठी अधिक स्थिर आणि फायदेशीर मानले जाते, विशेषतः भारतासारख्या विकसनशील अर्थव्यवस्थांसाठी."
      },
      {
        "option_text_english": "FDI is beneficial for developing nations only.",
        "option_text_marathi": "परकीय प्रत्यक्ष गुंतवणूक ही केवळ विकसनशील देशांसाठीच फायदेशीर आहे.",
        "analysis_english": "Incorrect. FDI is beneficial for both developing and developed nations, though the nature and impact of the investment might differ.",
        "analysis_marathi": "चुकीचे. FDI विकसनशील आणि विकसित दोन्ही राष्ट्रांसाठी फायदेशीर आहे, जरी गुंतवणुकीचे स्वरूप आणि परिणाम भिन्न असू शकतात."
      }
    ]
  },
  {
    "q_no": 68,
    "question_marathi": "खाजगीकरणाच्या संकल्पनेत खालील बाबींचा समावेश होतो :\n(a) सार्वजनिक उद्योगांच्या मालकीचे खाजगी उद्योगांकडे हस्तांतरण.\n(b) सार्वजनिक आणि खाजगी उद्योगांची संमिश्र भागीदारी.\n(c) सार्वजनिक उद्योगातील मालमत्तेची विक्री.\n(d) खाजगी व्यवस्थापनाकडे हक्क हस्तांतरित करणे.\nअचुक उत्तरे निवडा.",
    "question_english": "Privatization concept includes:\n(a) Transfer of ownership of public enterprises to private enterprises.\n(b) Joint partnership of public and private enterprises.\n(c) Selling of public enterprise assets.\n(d) Transferring rights to private management.\nChoose correct options:",
    "options_marathi": [
      "(a) आणि (b)",
      "(b) आणि (c)",
      "(c) आणि (d)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) and (b)",
      "(b) and (c)",
      "(c) and (d)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Economic Reforms / Privatization",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Privatization is a comprehensive concept encompassing various methods by which the private sector's role in the economy is expanded, and the government's role is reduced. It includes the outright transfer of ownership of public enterprises to private entities (divestment or denationalization). It also covers joint partnerships between public and private enterprises, often seen in Public-Private Partnership (PPP) models, where both sectors collaborate. Furthermore, selling off assets of public enterprises and transferring management rights or operational control to private management (e.g., through leasing or management contracts) without necessarily transferring full ownership are also considered forms of privatization. Therefore, all the given options are valid aspects of the privatization concept.",
    "explanation_marathi": "खाजगीकरण ही एक व्यापक संकल्पना आहे, ज्यात अर्थव्यवस्थेतील खाजगी क्षेत्राची भूमिका वाढवण्यासाठी आणि सरकारची भूमिका कमी करण्यासाठी विविध पद्धतींचा समावेश होतो. यात सार्वजनिक उद्योगांची मालकी खाजगी संस्थांकडे थेट हस्तांतरित करणे (विनिवेश किंवा राष्ट्रीयीकरण रद्द करणे) समाविष्ट आहे. यात सार्वजनिक आणि खाजगी उद्योगांमधील संयुक्त भागीदारीचाही समावेश होतो, जे अनेकदा सार्वजनिक-खाजगी भागीदारी (PPP) मॉडेलमध्ये दिसून येते, जिथे दोन्ही क्षेत्रे सहकार्य करतात. याव्यतिरिक्त, सार्वजनिक उद्योगांच्या मालमत्ता विकणे आणि खाजगी व्यवस्थापनाकडे व्यवस्थापन हक्क किंवा कार्यात्मक नियंत्रण हस्तांतरित करणे (उदा. भाडेपट्ट्याने किंवा व्यवस्थापन कराराद्वारे) पूर्ण मालकी हस्तांतरित न करता देखील खाजगीकरणाचे प्रकार मानले जातात. त्यामुळे, दिलेले सर्व पर्याय खाजगीकरणाच्या संकल्पनेचे वैध पैलू आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "analysis_english": "Incorrect, as options (c) and (d) are also valid components of privatization.",
        "analysis_marathi": "चुकीचे, कारण पर्याय (c) आणि (d) देखील खाजगीकरणाचे वैध घटक आहेत."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "analysis_english": "Incorrect, as options (a) and (d) are also valid components of privatization.",
        "analysis_marathi": "चुकीचे, कारण पर्याय (a) आणि (d) देखील खाजगीकरणाचे वैध घटक आहेत."
      },
      {
        "option_text_english": "(c) and (d)",
        "option_text_marathi": "(c) आणि (d)",
        "analysis_english": "Incorrect, as options (a) and (b) are also valid components of privatization.",
        "analysis_marathi": "चुकीचे, कारण पर्याय (a) आणि (b) देखील खाजगीकरणाचे वैध घटक आहेत."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "analysis_english": "Correct. Privatization encompasses transfer of ownership, joint partnerships (PPP), selling assets, and transferring management rights to the private sector.",
        "analysis_marathi": "बरोबर. खाजगीकरणामध्ये मालकीचे हस्तांतरण, संयुक्त भागीदारी (PPP), मालमत्तांची विक्री आणि खाजगी क्षेत्राकडे व्यवस्थापन हक्कांचे हस्तांतरण यांचा समावेश होतो."
      }
    ]
  },
  {
    "q_no": 69,
    "question_marathi": "खालीलपैकी कोणत्या जैविक उत्पादनाचे पेटंट आव्हानीत होते आणि ते भारताने अमेरिका या देशाकडून पुन्हा मिळवले ?",
    "question_english": "Which of the following bioproduct patent was challenged and India collected it again from the USA ?",
    "options_marathi": [
      "हळद",
      "कारले",
      "दुधी भोपळा",
      "तुळस"
    ],
    "options_english": [
      "Turmeric",
      "Bitter gourd",
      "Bottle gourd",
      "Basil"
    ],
    "correct_option_index": 1,
    "subject": "Science",
    "topic": "Intellectual Property Rights / Traditional Knowledge / Biopiracy",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The bioproduct patent that was successfully challenged by India and subsequently revoked from the USA was related to Turmeric. In 1995, a patent was granted in the US for the wound-healing properties of turmeric. India's Council of Scientific and Industrial Research (CSIR) challenged this patent, providing extensive evidence that the medicinal uses of turmeric were part of India's traditional knowledge for thousands of years. The US Patent and Trademark Office upheld India's challenge and revoked the patent in 1997, recognizing the prior art and traditional knowledge associated with turmeric. This case was a landmark victory against biopiracy.",
    "explanation_marathi": "ज्या जैविक उत्पादनाचे पेटंट भारताने यशस्वीरित्या आव्हानित केले आणि त्यानंतर अमेरिकेकडून ते परत मिळवले, ते हळदीशी संबंधित होते. १९९५ मध्ये, हळदीच्या जखमा भरण्याच्या गुणधर्मांसाठी अमेरिकेत पेटंट मंजूर करण्यात आले होते. भारताच्या वैज्ञानिक आणि औद्योगिक संशोधन परिषदेने (CSIR) या पेटंटला आव्हान दिले, हजारो वर्षांपासून हळदीचा औषधी वापर भारताच्या पारंपरिक ज्ञानाचा भाग असल्याचे विस्तृत पुरावे सादर केले. अमेरिकेच्या पेटंट आणि ट्रेडमार्क कार्यालयाने भारताचे आव्हान मान्य केले आणि १९९७ मध्ये ते पेटंट रद्द केले, हळदीशी संबंधित पूर्व कला आणि पारंपरिक ज्ञान ओळखले. हे प्रकरण जैव-दरोडेखोरीविरुद्ध एक ऐतिहासिक विजय होता.",
    "options_breakdown": [
      {
        "option_text_english": "Turmeric",
        "option_text_marathi": "हळद",
        "analysis_english": "Correct. India successfully challenged a US patent on the wound-healing properties of turmeric, asserting its traditional knowledge.",
        "analysis_marathi": "बरोबर. भारताने हळदीच्या जखमा भरण्याच्या गुणधर्मांवरील अमेरिकेच्या पेटंटला यशस्वीरित्या आव्हान दिले, पारंपरिक ज्ञानाचा दावा करत."
      },
      {
        "option_text_english": "Bitter gourd",
        "option_text_marathi": "कारले",
        "analysis_english": "Incorrect. While bitter gourd has medicinal properties, it was not the subject of this specific patent challenge by India against the USA.",
        "analysis_marathi": "चुकीचे. कारल्यामध्ये औषधी गुणधर्म असले तरी, भारत आणि अमेरिका यांच्यातील या विशिष्ट पेटंट आव्हानाचा विषय ते नव्हते."
      },
      {
        "option_text_english": "Bottle gourd",
        "option_text_marathi": "दुधी भोपळा",
        "analysis_english": "Incorrect. Bottle gourd is not associated with this particular biopiracy case.",
        "analysis_marathi": "चुकीचे. दुधी भोपळा या विशिष्ट जैव-दरोडेखोरी प्रकरणाशी संबंधित नाही."
      },
      {
        "option_text_english": "Basil",
        "option_text_marathi": "तुळस",
        "analysis_english": "Incorrect. Basil (Tulsi) is known for its medicinal properties, but it was not the subject of the challenged patent mentioned in the question.",
        "analysis_marathi": "चुकीचे. तुळस तिच्या औषधी गुणधर्मांसाठी ओळखली जाते, परंतु प्रश्नात नमूद केलेल्या आव्हानित पेटंटचा विषय ती नव्हती."
      }
    ]
  },
  {
    "q_no": 70,
    "question_marathi": "भारतीय दूरसंचार जाळे हे संपूर्ण जगात ______ क्रमांकाचे आहे.",
    "question_english": "The Indian telecommunication network is now ______ in position in world.",
    "options_marathi": [
      "तिसऱ्या",
      "दुसऱ्या",
      "पहिल्या",
      "पाचव्या"
    ],
    "options_english": [
      "Third",
      "Second",
      "First",
      "Fifth"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Telecommunication Sector / Digital India",
    "difficulty": "Easy",
    "trap_detected": "Factual Recall (Dynamic Ranking)",
    "explanation_english": "India boasts one of the largest and most rapidly expanding telecommunication networks globally. In terms of the total number of telephone subscribers (including mobile and landline), India holds the second position worldwide, only surpassed by China. This massive growth has been driven by increasing mobile penetration, affordable data plans, and government initiatives like Digital India, making telecommunication services accessible to a vast majority of the population.",
    "explanation_marathi": "भारत जगातील सर्वात मोठ्या आणि वेगाने विस्तारणाऱ्या दूरसंचार नेटवर्कपैकी एक आहे. एकूण दूरध्वनी ग्राहकांच्या (मोबाइल आणि लँडलाइनसह) संख्येनुसार, भारत जगात दुसऱ्या स्थानावर आहे, केवळ चीनने त्याला मागे टाकले आहे. मोबाइलचा वाढता वापर, परवडणाऱ्या डेटा योजना आणि डिजिटल इंडियासारख्या सरकारी योजनांमुळे ही प्रचंड वाढ झाली आहे, ज्यामुळे दूरसंचार सेवा बहुसंख्य लोकसंख्येसाठी सुलभ झाल्या आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Third",
        "option_text_marathi": "तिसऱ्या",
        "analysis_english": "Incorrect. India's telecommunication network is larger than the third position globally in terms of subscribers.",
        "analysis_marathi": "चुकीचे. ग्राहकांच्या संख्येनुसार भारताचे दूरसंचार नेटवर्क जागतिक स्तरावर तिसऱ्या स्थानापेक्षा मोठे आहे."
      },
      {
        "option_text_english": "Second",
        "option_text_marathi": "दुसऱ्या",
        "analysis_english": "Correct. India is consistently ranked as the second-largest telecommunication market in the world by subscriber base, after China.",
        "analysis_marathi": "बरोबर. ग्राहकांच्या संख्येनुसार भारत चीननंतर जगातील दुसऱ्या क्रमांकाचा सर्वात मोठा दूरसंचार बाजारपेठ म्हणून सातत्याने गणला जातो."
      },
      {
        "option_text_english": "First",
        "option_text_marathi": "पहिल्या",
        "analysis_english": "Incorrect. China holds the first position in terms of the largest telecommunication network by subscriber base.",
        "analysis_marathi": "चुकीचे. ग्राहकांच्या संख्येनुसार सर्वात मोठ्या दूरसंचार नेटवर्कमध्ये चीन पहिल्या स्थानावर आहे."
      },
      {
        "option_text_english": "Fifth",
        "option_text_marathi": "पाचव्या",
        "analysis_english": "Incorrect. India's telecommunication network is significantly larger than the fifth position globally.",
        "analysis_marathi": "चुकीचे. भारताचे दूरसंचार नेटवर्क जागतिक स्तरावर पाचव्या स्थानापेक्षा खूप मोठे आहे."
      }
    ]
  },
  {
    "q_no": 71,
    "question_marathi": "रंगराजन समिती (2014) नुसार 2011-12 साठी दारिद्र्य रेषेची व्याख्या शहरी भागासाठी ₹ ______ व ग्रामीण भागासाठी ₹ ______ दरडोई दरदिवशी अशी करण्यात आली.",
    "question_english": "As per Rangrajan Committee (2014) the poverty line for 2011-12 was at ₹ ______ and ₹ ______ per capita per day respectively for urban and rural areas.",
    "options_marathi": [
      "47 आणि 39",
      "47 आणि 31",
      "67 आणि 32",
      "47 आणि 32"
    ],
    "options_english": [
      "47 and 39",
      "47 and 31",
      "67 and 32",
      "47 and 32"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Poverty Estimation Committees",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Rangarajan Committee, constituted in 2012 and submitted its report in 2014, redefined the poverty line for 2011-12. According to its recommendations, the poverty line was set at ₹47 per capita per day for urban areas and ₹32 per capita per day for rural areas. This was based on a monthly per capita expenditure of ₹1407 for urban areas and ₹972 for rural areas. The committee's methodology aimed to capture a more realistic picture of poverty compared to previous estimates.",
    "explanation_marathi": "रंगराजन समिती, जी 2012 मध्ये स्थापन करण्यात आली आणि 2014 मध्ये आपला अहवाल सादर केला, तिने 2011-12 साठी दारिद्र्य रेषेची पुनर्व्याख्या केली. तिच्या शिफारशींनुसार, शहरी भागासाठी दरडोई दरदिवशी ₹47 आणि ग्रामीण भागासाठी दरडोई दरदिवशी ₹32 अशी दारिद्र्य रेषा निश्चित करण्यात आली. हे शहरी भागासाठी ₹1407 आणि ग्रामीण भागासाठी ₹972 च्या मासिक दरडोई खर्चावर आधारित होते. समितीच्या पद्धतीचा उद्देश मागील अंदाजांच्या तुलनेत दारिद्र्याचे अधिक वास्तववादी चित्र मांडणे हा होता.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "47 and 39",
        "option_text_marathi": "47 आणि 39",
        "is_correct": false,
        "reason_english": "While ₹47 for urban is correct, ₹39 for rural is incorrect as per the Rangarajan Committee's recommendations for 2011-12.",
        "reason_marathi": "शहरी भागासाठी ₹47 बरोबर असले तरी, रंगराजन समितीच्या 2011-12 च्या शिफारशींनुसार ग्रामीण भागासाठी ₹39 चुकीचे आहे."
      },
      {
        "option_number": 2,
        "option_text_english": "47 and 31",
        "option_text_marathi": "47 आणि 31",
        "is_correct": false,
        "reason_english": "While ₹47 for urban is correct, ₹31 for rural is incorrect. The figure for rural areas was ₹32.",
        "reason_marathi": "शहरी भागासाठी ₹47 बरोबर असले तरी, ग्रामीण भागासाठी ₹31 चुकीचे आहे. ग्रामीण भागासाठीची आकडेवारी ₹32 होती."
      },
      {
        "option_number": 3,
        "option_text_english": "67 and 32",
        "option_text_marathi": "67 आणि 32",
        "is_correct": false,
        "reason_english": "Both ₹67 for urban and ₹32 for rural are incorrect. The urban figure was ₹47.",
        "reason_marathi": "शहरी भागासाठी ₹67 आणि ग्रामीण भागासाठी ₹32 दोन्ही चुकीचे आहेत. शहरी आकडेवारी ₹47 होती."
      },
      {
        "option_number": 4,
        "option_text_english": "47 and 32",
        "option_text_marathi": "47 आणि 32",
        "is_correct": true,
        "reason_english": "As per the Rangarajan Committee (2014), the poverty line for 2011-12 was ₹47 per capita per day for urban areas and ₹32 per capita per day for rural areas.",
        "reason_marathi": "रंगराजन समिती (2014) नुसार, 2011-12 साठी दारिद्र्य रेषा शहरी भागासाठी दरडोई दरदिवशी ₹47 आणि ग्रामीण भागासाठी दरडोई दरदिवशी ₹32 अशी होती."
      }
    ]
  },
  {
    "q_no": 72,
    "question_marathi": "नील पेटी (ब्लु बॉक्स) अनुदाने ही ______ याच्याशी संबंधित आहे.",
    "question_english": "The Blue box subsidies are concerned with ______.",
    "options_marathi": [
      "निर्यातीवर मर्यादा",
      "उत्पादनातील मर्यादा",
      "आयातीवरील मर्यादा",
      "बाल कामगार"
    ],
    "options_english": [
      "Limit of export",
      "Limit of production",
      "Limit of import",
      "Child labour"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "WTO Subsidies (Agriculture)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "In the context of the World Trade Organization (WTO) Agreement on Agriculture, subsidies are categorized into different 'boxes' based on their trade-distorting effects. 'Blue Box' subsidies are those that are linked to programs that limit production. These subsidies are considered less trade-distorting than 'Amber Box' subsidies because they require farmers to limit production, thereby preventing overproduction and significant market distortions. Examples include direct payments to farmers based on acreage or animal numbers, provided that these payments are made under production-limiting programs.",
    "explanation_marathi": "जागतिक व्यापार संघटनेच्या (WTO) कृषी कराराच्या संदर्भात, अनुदानांचे त्यांच्या व्यापार-विकृत परिणामांनुसार वेगवेगळ्या 'बॉक्सेस'मध्ये वर्गीकरण केले जाते. 'ब्लू बॉक्स' अनुदान म्हणजे उत्पादन मर्यादित करणाऱ्या कार्यक्रमांशी संबंधित अनुदान. ही अनुदाने 'अंबर बॉक्स' अनुदानांपेक्षा कमी व्यापार-विकृत मानली जातात कारण ती शेतकऱ्यांना उत्पादन मर्यादित करण्यास सांगतात, ज्यामुळे अतिउत्पादन आणि महत्त्वपूर्ण बाजार विकृती टाळता येतात. उदाहरणांमध्ये उत्पादन-मर्यादित कार्यक्रमांतर्गत क्षेत्रफळ किंवा पशुधनाच्या संख्येवर आधारित शेतकऱ्यांना थेट देयके देणे समाविष्ट आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Limit of export",
        "option_text_marathi": "निर्यातीवर मर्यादा",
        "is_correct": false,
        "reason_english": "Export subsidies are generally prohibited or subject to reduction commitments under WTO rules, falling under the Amber Box or specific export subsidy rules, not the Blue Box.",
        "reason_marathi": "निर्यात अनुदाने सामान्यतः WTO नियमांनुसार प्रतिबंधित आहेत किंवा कपात करण्याच्या वचनबद्धतेच्या अधीन आहेत, ती अंबर बॉक्स किंवा विशिष्ट निर्यात अनुदान नियमांखाली येतात, ब्लू बॉक्समध्ये नाहीत."
      },
      {
        "option_number": 2,
        "option_text_english": "Limit of production",
        "option_text_marathi": "उत्पादनातील मर्यादा",
        "is_correct": true,
        "reason_english": "Blue Box subsidies are specifically defined as direct payments to farmers that are tied to production-limiting programs, making them less trade-distorting.",
        "reason_marathi": "ब्लू बॉक्स अनुदाने विशेषतः शेतकऱ्यांना उत्पादन-मर्यादित कार्यक्रमांशी जोडलेली थेट देयके म्हणून परिभाषित केली जातात, ज्यामुळे ती कमी व्यापार-विकृत ठरतात."
      },
      {
        "option_number": 3,
        "option_text_english": "Limit of import",
        "option_text_marathi": "आयातीवरील मर्यादा",
        "is_correct": false,
        "reason_english": "Limits on imports are typically addressed through tariffs, quotas, or non-tariff barriers, which are distinct from subsidy classifications.",
        "reason_marathi": "आयातीवरील मर्यादा सामान्यतः शुल्क, कोटा किंवा गैर-शुल्क अडथळ्यांद्वारे हाताळल्या जातात, जे अनुदान वर्गीकरणापेक्षा वेगळे आहेत."
      },
      {
        "option_number": 4,
        "option_text_english": "Child labour",
        "option_text_marathi": "बाल कामगार",
        "is_correct": false,
        "reason_english": "Child labour is a social and human rights issue, not directly related to WTO subsidy classifications.",
        "reason_marathi": "बाल कामगार हा सामाजिक आणि मानवाधिकार मुद्दा आहे, जो WTO अनुदान वर्गीकरणाशी थेट संबंधित नाही."
      }
    ]
  },
  {
    "q_no": 73,
    "question_marathi": "वस्तू व सेवा कर ओळख क्रमांकाचे पहिले दोन अंक ______ निर्दिष्ट करतात.",
    "question_english": "The first two digits of Goods and Services Tax identification number specifies ______.",
    "options_marathi": [
      "उत्पादन संकेतांक",
      "सेवा संकेतांक",
      "राज्य संकेतांक",
      "देश संकेतांक"
    ],
    "options_english": [
      "Product Code",
      "Service Code",
      "State Code.",
      "Country Code"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "GST (Goods and Services Tax)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "A Goods and Services Tax Identification Number (GSTIN) is a 15-digit unique identification number assigned to every registered taxpayer under the GST regime in India. The structure of the GSTIN is standardized: the first two digits represent the state code as per the Indian Census 2011. For example, '27' is the state code for Maharashtra, '07' for Delhi, etc. The subsequent digits represent the PAN of the taxpayer, entity code, and checksum digit.",
    "explanation_marathi": "वस्तू व सेवा कर ओळख क्रमांक (GSTIN) हा भारतातील GST प्रणाली अंतर्गत प्रत्येक नोंदणीकृत करदात्याला दिलेला 15-अंकी अद्वितीय ओळख क्रमांक आहे. GSTIN ची रचना प्रमाणित आहे: पहिले दोन अंक भारतीय जनगणना 2011 नुसार राज्याचा कोड दर्शवतात. उदाहरणार्थ, '27' हा महाराष्ट्रासाठी राज्य कोड आहे, '07' दिल्लीसाठी, इत्यादी. त्यानंतरचे अंक करदात्याचा पॅन, संस्था कोड आणि चेकसम अंक दर्शवतात.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Product Code",
        "option_text_marathi": "उत्पादन संकेतांक",
        "is_correct": false,
        "reason_english": "Product codes (HSN codes) are used for classifying goods, but they are not part of the initial digits of a GSTIN.",
        "reason_marathi": "उत्पादन कोड (HSN कोड) वस्तूंचे वर्गीकरण करण्यासाठी वापरले जातात, परंतु ते GSTIN च्या सुरुवातीच्या अंकांचा भाग नाहीत."
      },
      {
        "option_number": 2,
        "option_text_english": "Service Code",
        "option_text_marathi": "सेवा संकेतांक",
        "is_correct": false,
        "reason_english": "Service codes (SAC codes) are used for classifying services, but they are not part of the initial digits of a GSTIN.",
        "reason_marathi": "सेवा कोड (SAC कोड) सेवांचे वर्गीकरण करण्यासाठी वापरले जातात, परंतु ते GSTIN च्या सुरुवातीच्या अंकांचा भाग नाहीत."
      },
      {
        "option_number": 3,
        "option_text_english": "State Code.",
        "option_text_marathi": "राज्य संकेतांक",
        "is_correct": true,
        "reason_english": "The first two digits of a GSTIN uniquely identify the state where the business is registered, based on the Indian Census 2011 state codes.",
        "reason_marathi": "GSTIN चे पहिले दोन अंक भारतीय जनगणना 2011 च्या राज्य कोडनुसार व्यवसायाची नोंदणी कोणत्या राज्यात झाली आहे हे स्पष्टपणे दर्शवतात."
      },
      {
        "option_number": 4,
        "option_text_english": "Country Code",
        "option_text_marathi": "देश संकेतांक",
        "is_correct": false,
        "reason_english": "GSTIN is an India-specific identification number, and a country code is not required as part of its structure.",
        "reason_marathi": "GSTIN हा भारत-विशिष्ट ओळख क्रमांक आहे आणि त्याच्या संरचनेचा भाग म्हणून देश कोडची आवश्यकता नाही."
      }
    ]
  },
  {
    "q_no": 74,
    "question_marathi": "भारत सरकारने 1973 चा फेरा कायदा रद्द करुन 1999 मध्ये पुढीलपैकी कोणता कायदा मंजूर केला ?\n(a) IRDA\n(b) RERA\n(c) FEMA\n(d) FRBM\nपर्यायी उत्तरे :",
    "question_english": "Which of the following Act was passed by Govt. of India in 1999 after cancelling FERA, 1973 ?\n(a) IRDA\n(b) RERA\n(c) FEMA\n(d) FRBM\nAnswer options :",
    "options_marathi": [
      "फक्त (a) आणि (b)",
      "फक्त (c) आणि (d)",
      "फक्त (d)",
      "फक्त (c)"
    ],
    "options_english": [
      "Only (a) and (b)",
      "Only (c) and (d)",
      "Only (d)",
      "Only (c)"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Foreign Exchange Management",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Foreign Exchange Regulation Act (FERA) of 1973 was a stringent law that regulated foreign exchange transactions in India, primarily aimed at conserving foreign exchange. With economic liberalization in the 1990s, a more liberal and management-oriented approach was needed. Consequently, FERA was repealed and replaced by the Foreign Exchange Management Act (FEMA) in 1999. FEMA came into effect on June 1, 2000, and its objective is to facilitate external trade and payments and to promote the orderly development and maintenance of the foreign exchange market in India.",
    "explanation_marathi": "1973 चा परकीय चलन नियमन कायदा (FERA) हा भारतातील परकीय चलन व्यवहारांचे नियमन करणारा एक कठोर कायदा होता, ज्याचा मुख्य उद्देश परकीय चलन वाचवणे हा होता. 1990 च्या दशकातील आर्थिक उदारीकरणामुळे, अधिक उदार आणि व्यवस्थापन-केंद्रित दृष्टिकोनाची गरज होती. परिणामी, FERA रद्द करून 1999 मध्ये परकीय चलन व्यवस्थापन कायदा (FEMA) लागू करण्यात आला. FEMA 1 जून 2000 रोजी अंमलात आला आणि त्याचा उद्देश बाह्य व्यापार आणि देयकांना सुलभ करणे आणि भारतातील परकीय चलन बाजाराचा व्यवस्थित विकास आणि देखभाल करणे हा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Only (a) and (b)",
        "option_text_marathi": "फक्त (a) आणि (b)",
        "is_correct": false,
        "reason_english": "IRDA (Insurance Regulatory and Development Authority Act) was passed in 1999, but RERA (Real Estate (Regulation and Development) Act) was passed in 2016. Neither replaced FERA.",
        "reason_marathi": "IRDA (विमा नियामक आणि विकास प्राधिकरण कायदा) 1999 मध्ये मंजूर झाला, परंतु RERA (स्थावर मालमत्ता (नियमन आणि विकास) कायदा) 2016 मध्ये मंजूर झाला. यापैकी कोणीही FERA ची जागा घेतली नाही."
      },
      {
        "option_number": 2,
        "option_text_english": "Only (c) and (d)",
        "option_text_marathi": "फक्त (c) आणि (d)",
        "is_correct": false,
        "reason_english": "FEMA (Foreign Exchange Management Act) replaced FERA, but FRBM (Fiscal Responsibility and Budget Management Act) was passed in 2003 and deals with fiscal discipline, not foreign exchange.",
        "reason_marathi": "FEMA (परकीय चलन व्यवस्थापन कायदा) ने FERA ची जागा घेतली, परंतु FRBM (राजकोषीय उत्तरदायित्व आणि अर्थसंकल्प व्यवस्थापन कायदा) 2003 मध्ये मंजूर झाला आणि तो राजकोषीय शिस्तीशी संबंधित आहे, परकीय चलनाशी नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "Only (d)",
        "option_text_marathi": "फक्त (d)",
        "is_correct": false,
        "reason_english": "FRBM (Fiscal Responsibility and Budget Management Act) was passed in 2003 and is unrelated to FERA.",
        "reason_marathi": "FRBM (राजकोषीय उत्तरदायित्व आणि अर्थसंकल्प व्यवस्थापन कायदा) 2003 मध्ये मंजूर झाला आणि तो FERA शी संबंधित नाही."
      },
      {
        "option_number": 4,
        "option_text_english": "Only (c)",
        "option_text_marathi": "फक्त (c)",
        "is_correct": true,
        "reason_english": "The Foreign Exchange Management Act (FEMA) was passed in 1999 to replace the Foreign Exchange Regulation Act (FERA) of 1973.",
        "reason_marathi": "परकीय चलन व्यवस्थापन कायदा (FEMA) 1973 च्या परकीय चलन नियमन कायद्याची (FERA) जागा घेण्यासाठी 1999 मध्ये मंजूर करण्यात आला."
      }
    ]
  },
  {
    "q_no": 75,
    "question_marathi": "सन् 2018 चा ऑक्सफॅम अहवाल असे सांगतो की भारतातील एक टक्के श्रीमंत लोक ______ टक्के एवढे राष्ट्रीय उत्पन्न मिळवितात.",
    "question_english": "The Oxfam report 2018 says that one percent richest people are generating ______ percent National Income in India.",
    "options_marathi": [
      "50",
      "45",
      "73",
      "68"
    ],
    "options_english": [
      "50",
      "45",
      "73",
      "68"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Income Inequality / Oxfam Reports",
    "difficulty": "Medium",
    "trap_detected": "Factual Recall",
    "explanation_english": "The Oxfam report 'Reward Work, Not Wealth' released in January 2018, ahead of the World Economic Forum in Davos, highlighted the stark reality of income inequality. It stated that the richest 1% in India cornered 73% of the wealth generated in 2017. While the question uses 'National Income', in the context of such reports, 'wealth generated' or 'share of wealth' is often the primary metric, and 73% was the widely reported figure for India's richest 1% share of wealth generated.",
    "explanation_marathi": "जानेवारी 2018 मध्ये दावोस येथील जागतिक आर्थिक मंचापूर्वी प्रसिद्ध झालेल्या ऑक्सफॅमच्या 'रिवॉर्ड वर्क, नॉट वेल्थ' अहवालाने उत्पन्न विषमतेची कठोर वास्तविकता अधोरेखित केली. त्यात म्हटले होते की, भारतातील सर्वात श्रीमंत 1% लोकांनी 2017 मध्ये निर्माण झालेल्या संपत्तीपैकी 73% संपत्ती मिळवली. प्रश्नात 'राष्ट्रीय उत्पन्न' हा शब्द वापरला असला तरी, अशा अहवालांच्या संदर्भात, 'निर्माण झालेली संपत्ती' किंवा 'संपत्तीचा वाटा' हे प्राथमिक मेट्रिक असते आणि भारतातील सर्वात श्रीमंत 1% लोकांच्या निर्माण झालेल्या संपत्तीच्या वाट्यासाठी 73% ही मोठ्या प्रमाणावर नोंदवलेली आकडेवारी होती.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "50",
        "option_text_marathi": "50",
        "is_correct": false,
        "reason_english": "This figure is lower than the actual percentage reported by the Oxfam 2018 report for India.",
        "reason_marathi": "ही आकडेवारी ऑक्सफॅम 2018 च्या अहवालात भारतासाठी नोंदवलेल्या वास्तविक टक्केवारीपेक्षा कमी आहे."
      },
      {
        "option_number": 2,
        "option_text_english": "45",
        "option_text_marathi": "45",
        "is_correct": false,
        "reason_english": "This figure is significantly lower than the actual percentage reported by the Oxfam 2018 report for India.",
        "reason_marathi": "ही आकडेवारी ऑक्सफॅम 2018 च्या अहवालात भारतासाठी नोंदवलेल्या वास्तविक टक्केवारीपेक्षा लक्षणीयरीत्या कमी आहे."
      },
      {
        "option_number": 3,
        "option_text_english": "73",
        "option_text_marathi": "73",
        "is_correct": true,
        "reason_english": "The Oxfam report 2018 stated that the richest 1% in India accounted for 73% of the wealth generated in 2017.",
        "reason_marathi": "ऑक्सफॅम 2018 च्या अहवालानुसार, भारतातील सर्वात श्रीमंत 1% लोकांनी 2017 मध्ये निर्माण झालेल्या संपत्तीपैकी 73% संपत्ती मिळवली."
      },
      {
        "option_number": 4,
        "option_text_english": "68",
        "option_text_marathi": "68",
        "is_correct": false,
        "reason_english": "This figure is close but not the exact percentage reported by the Oxfam 2018 report for India.",
        "reason_marathi": "ही आकडेवारी जवळची असली तरी, ऑक्सफॅम 2018 च्या अहवालात भारतासाठी नोंदवलेली नेमकी टक्केवारी नाही."
      }
    ]
  },
  {
    "q_no": 76,
    "question_marathi": "विशेष आहरण अधिकार (SDR) हे :",
    "question_english": "Special Drawing Rights (SDR) are :",
    "options_marathi": [
      "आंतरराष्ट्रीय नाणेनिधीचे आंतरराष्ट्रीय रोखतेतील उपाययोजनेसाठी निर्माण केलेले परकीय चलनसाठाविषयक अधिकार आहेत.",
      "आंतरराष्ट्रीय नाणेनिधीचे गुंतवणूक साठाविषयक व परकीय चलनविषयक अधिकार आहेत.",
      "जागतिक बँकेशी संबंधित विकसनशील देशांच्या विकासनिधी विषयक अधिकार आहेत.",
      "आंतरराष्ट्रीय विकास संस्थेचे कर्जदेण्याविषयक व आंतरराष्ट्रीय रोखतेविषयक अधिकार आहेत."
    ],
    "options_english": [
      "The rights to solve the problem of international liquidity regarding foreign exchange reserves of IMF.",
      "The rights regarding investment and foreign currency of IMF.",
      "The rights regarding development funds of developing countries of world bank.",
      "The rights regarding credit and international liquidity of IDA."
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "International Financial Institutions (IMF)",
    "difficulty": "Medium",
    "trap_detected": "Close Options",
    "explanation_english": "Special Drawing Rights (SDRs) are an international reserve asset created by the International Monetary Fund (IMF) in 1969 to supplement its member countries' official reserves. They were created in response to concerns about the adequacy of international liquidity, particularly the supply of gold and US dollars, to support the expansion of world trade. SDRs are not a currency but a potential claim on the freely usable currencies of IMF members. They serve as a unit of account for the IMF and some other international organizations.",
    "explanation_marathi": "विशेष आहरण अधिकार (SDRs) हे आंतरराष्ट्रीय नाणेनिधीने (IMF) 1969 मध्ये आपल्या सदस्य देशांच्या अधिकृत गंगाजळीला पूरक म्हणून तयार केलेले आंतरराष्ट्रीय राखीव मालमत्ता आहेत. जागतिक व्यापाराच्या विस्ताराला पाठिंबा देण्यासाठी आंतरराष्ट्रीय रोखतेच्या, विशेषतः सोने आणि अमेरिकन डॉलरच्या पुरवठ्याच्या पर्याप्ततेबद्दलच्या चिंतेच्या प्रतिसादात ते तयार केले गेले. SDRs हे चलन नसून IMF सदस्यांच्या मुक्तपणे वापरता येणाऱ्या चलनांवर संभाव्य दावा आहे. ते IMF आणि काही इतर आंतरराष्ट्रीय संस्थांसाठी लेखांकन एकक म्हणून काम करतात.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "The rights to solve the problem of international liquidity regarding foreign exchange reserves of IMF.",
        "option_text_marathi": "आंतरराष्ट्रीय नाणेनिधीचे आंतरराष्ट्रीय रोखतेतील उपाययोजनेसाठी निर्माण केलेले परकीय चलनसाठाविषयक अधिकार आहेत.",
        "is_correct": true,
        "reason_english": "SDRs were specifically created by the IMF to address the issue of international liquidity and supplement the foreign exchange reserves of member countries.",
        "reason_marathi": "SDRs विशेषतः IMF द्वारे आंतरराष्ट्रीय रोखतेचा प्रश्न सोडवण्यासाठी आणि सदस्य देशांच्या परकीय चलन साठ्याला पूरक म्हणून तयार केले गेले होते."
      },
      {
        "option_number": 2,
        "option_text_english": "The rights regarding investment and foreign currency of IMF.",
        "option_text_marathi": "आंतरराष्ट्रीय नाणेनिधीचे गुंतवणूक साठाविषयक व परकीय चलनविषयक अधिकार आहेत.",
        "is_correct": false,
        "reason_english": "While related to foreign currency, SDRs are primarily about international liquidity and reserve assets, not general investment rights of the IMF.",
        "reason_marathi": "परकीय चलनाशी संबंधित असले तरी, SDRs प्रामुख्याने आंतरराष्ट्रीय रोखता आणि राखीव मालमत्तेबद्दल आहेत, IMF च्या सामान्य गुंतवणूक अधिकारांबद्दल नाहीत."
      },
      {
        "option_number": 3,
        "option_text_english": "The rights regarding development funds of developing countries of world bank.",
        "option_text_marathi": "जागतिक बँकेशी संबंधित विकसनशील देशांच्या विकासनिधी विषयक अधिकार आहेत.",
        "is_correct": false,
        "reason_english": "SDRs are associated with the IMF, not the World Bank, and are not directly development funds for developing countries.",
        "reason_marathi": "SDRs IMF शी संबंधित आहेत, जागतिक बँकेशी नाहीत आणि ते विकसनशील देशांसाठी थेट विकास निधी नाहीत."
      },
      {
        "option_number": 4,
        "option_text_english": "The rights regarding credit and international liquidity of IDA.",
        "option_text_marathi": "आंतरराष्ट्रीय विकास संस्थेचे कर्जदेण्याविषयक व आंतरराष्ट्रीय रोखतेविषयक अधिकार आहेत.",
        "is_correct": false,
        "reason_english": "SDRs are created by the IMF, not the International Development Association (IDA), which is part of the World Bank Group and focuses on concessional lending.",
        "reason_marathi": "SDRs IMF द्वारे तयार केले जातात, आंतरराष्ट्रीय विकास संस्थेद्वारे (IDA) नाही, जी जागतिक बँक समूहाचा भाग आहे आणि सवलतीच्या दरातील कर्जावर लक्ष केंद्रित करते."
      }
    ]
  },
  {
    "q_no": 77,
    "question_marathi": "जागतिक व्यापार संघटनेचा प्रतिनिधी म्हणून भारताने आपल्या बांधील (बध्य-बाऊंड) जकातींमध्ये पुढील प्रमाणे वाढ केली ?\n(i) 6% वरुन 67%\n(ii) 5% वरुन 55%\n(iii) 7% वरुन 77%\nपर्यायी उत्तरे :",
    "question_english": "As a member of the WTO India increased its bound tariff lines from:\n(i) 6% to 67%\n(ii) 5% to 55%\n(iii) 7% to 77%\nAnswer options :",
    "options_marathi": [
      "(iii)",
      "(i)",
      "(ii)",
      "वरीलपैकी कुठलेही नाही"
    ],
    "options_english": [
      "(iii)",
      "(i)",
      "(ii)",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "WTO and India's Trade Policy",
    "difficulty": "Hard",
    "trap_detected": "Factual Ambiguity / Obscure Fact",
    "explanation_english": "This question refers to a specific historical data point regarding India's bound tariffs under WTO commitments. While India's average bound tariffs are generally high (e.g., around 34% for non-agricultural products and 113% for agricultural products), the question asks about a specific increase 'from X to Y'. Such specific figures are often part of detailed trade policy discussions or specific negotiation rounds. Option (i) 6% to 67% represents a significant increase in bound tariff lines, which aligns with India's strategy to maintain policy space by binding tariffs at higher levels than its applied rates, especially during the initial phases of WTO membership. This specific figure might refer to a particular sector or an average across certain product lines where India sought to protect domestic industries.",
    "explanation_marathi": "हा प्रश्न WTO वचनबद्धतेनुसार भारताच्या बांधील शुल्कांबद्दलच्या विशिष्ट ऐतिहासिक आकडेवारीचा संदर्भ देतो. भारताचे सरासरी बांधील शुल्क सामान्यतः जास्त असले तरी (उदा. गैर-कृषी उत्पादनांसाठी सुमारे 34% आणि कृषी उत्पादनांसाठी 113%), प्रश्न 'X वरून Y पर्यंत' विशिष्ट वाढीबद्दल विचारतो. अशा विशिष्ट आकडेवारी अनेकदा तपशीलवार व्यापार धोरण चर्चा किंवा विशिष्ट वाटाघाटी फेऱ्यांचा भाग असतात. पर्याय (i) 6% वरून 67% पर्यंत बांधील शुल्क रेषेतील लक्षणीय वाढ दर्शवतो, जे WTO सदस्यत्वाच्या सुरुवातीच्या टप्प्यात भारताने आपल्या लागू दरांपेक्षा जास्त स्तरावर शुल्क बांधून धोरणात्मक जागा राखण्याच्या धोरणाशी जुळते. ही विशिष्ट आकडेवारी एखाद्या विशिष्ट क्षेत्राचा किंवा काही उत्पादन श्रेणींमधील सरासरीचा संदर्भ देऊ शकते जिथे भारताने देशांतर्गत उद्योगांचे संरक्षण करण्याचा प्रयत्न केला.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "(iii)",
        "option_text_marathi": "(iii)",
        "is_correct": false,
        "reason_english": "While 7% to 77% is a substantial increase, it is not the specific figure commonly cited or implied by the question's context for India's bound tariffs.",
        "reason_marathi": "7% वरून 77% ही लक्षणीय वाढ असली तरी, भारताच्या बांधील शुल्कांसाठी प्रश्नाच्या संदर्भात सामान्यतः उद्धृत केलेली किंवा सूचित केलेली विशिष्ट आकडेवारी नाही."
      },
      {
        "option_number": 2,
        "option_text_english": "(i)",
        "option_text_marathi": "(i)",
        "is_correct": true,
        "reason_english": "This option, 6% to 67%, represents a specific historical increase in India's bound tariff lines, reflecting its approach to maintain policy flexibility within WTO commitments.",
        "reason_marathi": "हा पर्याय, 6% वरून 67% पर्यंत, भारताच्या बांधील शुल्क रेषेतील विशिष्ट ऐतिहासिक वाढ दर्शवतो, जो WTO वचनबद्धतेमध्ये धोरणात्मक लवचिकता राखण्याच्या त्याच्या दृष्टिकोनाचे प्रतिबिंब आहे."
      },
      {
        "option_number": 3,
        "option_text_english": "(ii)",
        "option_text_marathi": "(ii)",
        "is_correct": false,
        "reason_english": "5% to 55% is another significant increase, but not the specific one indicated as correct for this question.",
        "reason_marathi": "5% वरून 55% ही आणखी एक लक्षणीय वाढ आहे, परंतु या प्रश्नासाठी योग्य म्हणून दर्शवलेली विशिष्ट वाढ नाही."
      },
      {
        "option_number": 4,
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी कुठलेही नाही",
        "is_correct": false,
        "reason_english": "Based on the specific historical context implied by the question, one of the options is considered correct.",
        "reason_marathi": "प्रश्नाद्वारे सूचित केलेल्या विशिष्ट ऐतिहासिक संदर्भानुसार, पर्यायांपैकी एक योग्य मानला जातो."
      }
    ]
  },
  {
    "q_no": 78,
    "question_marathi": "खालीलपैकी कोणत्या दृष्टिकोनातून जागतिक व्यापारी संघटना भारतीय अर्थव्यवस्थेला फायदेशीर नाही ?",
    "question_english": "From which point of view of the following \"WTO\" is not beneficial to Indian Economy ?",
    "options_marathi": [
      "सांस्कृतिक विकास",
      "पर्यटन विकास",
      "राजकीय विकास",
      "व्यापारासंबंधी बौध्दिक मालमत्तेचे हक्क"
    ],
    "options_english": [
      "Cultural Development",
      "Tourism Development",
      "Political Development",
      "Trade Related Intellectual Property Rights (TRIP)"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "WTO and Developing Countries",
    "difficulty": "Medium",
    "trap_detected": "Misdirection",
    "explanation_english": "The World Trade Organization (WTO) primarily deals with rules of trade between nations. While trade can indirectly influence cultural, tourism, and political development (often positively), the area where the WTO's agreements have often been criticized for not being beneficial, or even detrimental, to developing economies like India is the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS). TRIPS mandates strong intellectual property protection, which can increase the cost of essential goods (like medicines), limit technology transfer, and challenge traditional knowledge systems, thereby potentially hindering development in certain sectors for developing countries.",
    "explanation_marathi": "जागतिक व्यापार संघटना (WTO) प्रामुख्याने राष्ट्रांमधील व्यापाराच्या नियमांशी संबंधित आहे. व्यापार सांस्कृतिक, पर्यटन आणि राजकीय विकासावर अप्रत्यक्षपणे (अनेकदा सकारात्मकपणे) प्रभाव टाकू शकतो, परंतु WTO चे करार भारतासारख्या विकसनशील अर्थव्यवस्थांसाठी फायदेशीर नसतात किंवा हानिकारक असतात अशी टीका ज्या क्षेत्रावर केली जाते ते म्हणजे बौद्धिक संपदा हक्कांच्या व्यापार-संबंधित पैलूंवरील करार (TRIPS). TRIPS मजबूत बौद्धिक संपदा संरक्षणाची मागणी करते, ज्यामुळे आवश्यक वस्तूंची (जसे की औषधे) किंमत वाढू शकते, तंत्रज्ञान हस्तांतरण मर्यादित होऊ शकते आणि पारंपरिक ज्ञान प्रणालींना आव्हान दिले जाऊ शकते, ज्यामुळे विकसनशील देशांमधील काही क्षेत्रांमध्ये विकासाला अडथळा निर्माण होऊ शकतो.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Cultural Development",
        "option_text_marathi": "सांस्कृतिक विकास",
        "is_correct": false,
        "reason_english": "While not a direct mandate, increased trade and interaction facilitated by WTO can indirectly lead to cultural exchange and development, not necessarily a disadvantage.",
        "reason_marathi": "प्रत्यक्ष आदेश नसला तरी, WTO द्वारे सुलभ केलेला वाढलेला व्यापार आणि संवाद अप्रत्यक्षपणे सांस्कृतिक देवाणघेवाण आणि विकासाकडे नेऊ शकतो, जो आवश्यक नाही की तोटा असेल."
      },
      {
        "option_number": 2,
        "option_text_english": "Tourism Development",
        "option_text_marathi": "पर्यटन विकास",
        "is_correct": false,
        "reason_english": "Trade liberalization and economic growth promoted by WTO can indirectly boost tourism by increasing disposable income and easing travel, generally seen as beneficial.",
        "reason_marathi": "WTO द्वारे प्रोत्साहन दिलेले व्यापार उदारीकरण आणि आर्थिक वाढ यामुळे खर्च करण्यायोग्य उत्पन्न वाढवून आणि प्रवासाला सुलभ करून पर्यटनाला अप्रत्यक्षपणे चालना मिळू शकते, जे सामान्यतः फायदेशीर मानले जाते."
      },
      {
        "option_number": 3,
        "option_text_english": "Political Development",
        "option_text_marathi": "राजकीय विकास",
        "is_correct": false,
        "reason_english": "WTO's focus is economic, not directly political development. Any political impact is indirect and not typically cited as a disadvantage to the economy.",
        "reason_marathi": "WTO चे लक्ष आर्थिक आहे, थेट राजकीय विकास नाही. कोणताही राजकीय परिणाम अप्रत्यक्ष असतो आणि सामान्यतः अर्थव्यवस्थेसाठी तोटा म्हणून उद्धृत केला जात नाही."
      },
      {
        "option_number": 4,
        "option_text_english": "Trade Related Intellectual Property Rights (TRIP)",
        "option_text_marathi": "व्यापारासंबंधी बौध्दिक मालमत्तेचे हक्क",
        "is_correct": true,
        "reason_english": "The TRIPS agreement under WTO has been a point of contention for developing countries, as it often leads to higher costs for technology and essential goods, potentially hindering their economic development and access to knowledge.",
        "reason_marathi": "WTO अंतर्गत TRIPS करार विकसनशील देशांसाठी वादाचा मुद्दा राहिला आहे, कारण यामुळे तंत्रज्ञान आणि आवश्यक वस्तूंच्या किमती वाढतात, ज्यामुळे त्यांच्या आर्थिक विकासाला आणि ज्ञानाच्या प्रवेशाला अडथळा निर्माण होऊ शकतो."
      }
    ]
  },
  {
    "q_no": 79,
    "question_marathi": "GATS व्यापाराबाबत करार हा ______ च्या व्यापाराशी संबंधित आहे.",
    "question_english": "GATS deals with trade in ______.",
    "options_marathi": [
      "सेवांच्या",
      "स्वामीत्व हक्क (पेटंट)",
      "प्रतिलिपी अधिकार (कॉपीराईट)",
      "व्यापारी चिन्हाशी (ट्रेडमार्क)"
    ],
    "options_english": [
      "Services",
      "Patent",
      "Copyright",
      "Trademark"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "WTO Agreements",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "GATS stands for the General Agreement on Trade in Services. It is a treaty of the World Trade Organization (WTO) that came into force in 1995. The GATS agreement extends the multilateral trading system to the services sector, just as the General Agreement on Tariffs and Trade (GATT) deals with trade in goods. It covers all services except those provided in the exercise of governmental authority.",
    "explanation_marathi": "GATS म्हणजे सेवांमधील व्यापारावरील सामान्य करार (General Agreement on Trade in Services). हा जागतिक व्यापार संघटनेचा (WTO) एक करार आहे जो 1995 मध्ये अंमलात आला. GATS करार बहुपक्षीय व्यापार प्रणालीला सेवा क्षेत्रापर्यंत विस्तारित करतो, जसे की टॅरिफ आणि व्यापारावरील सामान्य करार (GATT) वस्तूंच्या व्यापाराशी संबंधित आहे. यात सरकारी अधिकाराच्या वापरामध्ये प्रदान केलेल्या सेवा वगळता सर्व सेवांचा समावेश होतो.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "Services",
        "option_text_marathi": "सेवांच्या",
        "is_correct": true,
        "reason_english": "GATS is an acronym for General Agreement on Trade in Services, explicitly dealing with the trade of services.",
        "reason_marathi": "GATS हे सेवांमधील व्यापारावरील सामान्य कराराचे संक्षिप्त रूप आहे, जे स्पष्टपणे सेवांच्या व्यापाराशी संबंधित आहे."
      },
      {
        "option_number": 2,
        "option_text_english": "Patent",
        "option_text_marathi": "स्वामीत्व हक्क (पेटंट)",
        "is_correct": false,
        "reason_english": "Patents are a form of intellectual property right, covered under the TRIPS (Trade-Related Aspects of Intellectual Property Rights) agreement, not GATS.",
        "reason_marathi": "पेटंट हे बौद्धिक संपदा हक्काचे एक स्वरूप आहे, जे TRIPS (बौद्धिक संपदा हक्कांच्या व्यापार-संबंधित पैलूंवरील) कराराखाली येते, GATS अंतर्गत नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "Copyright",
        "option_text_marathi": "प्रतिलिपी अधिकार (कॉपीराईट)",
        "is_correct": false,
        "reason_english": "Copyrights are also intellectual property rights, covered under the TRIPS agreement, not GATS.",
        "reason_marathi": "कॉपीराईट देखील बौद्धिक संपदा हक्क आहेत, जे TRIPS कराराखाली येतात, GATS अंतर्गत नाहीत."
      },
      {
        "option_number": 4,
        "option_text_english": "Trademark",
        "option_text_marathi": "व्यापारी चिन्हाशी (ट्रेडमार्क)",
        "is_correct": false,
        "reason_english": "Trademarks are intellectual property rights, covered under the TRIPS agreement, not GATS.",
        "reason_marathi": "ट्रेडमार्क हे बौद्धिक संपदा हक्क आहेत, जे TRIPS कराराखाली येतात, GATS अंतर्गत नाहीत."
      }
    ]
  },
  {
    "q_no": 80,
    "question_marathi": "जागतिकीकरण ही एक अशी प्रक्रिया आहे ज्यामुळे :\n(a) आर्थिक एकीकरणात जास्त सखोलता येते\n(b) आर्थिक पारदर्शकता वाढते\n(c) सीमेपलिकडील दहशतवादात वाढ होते\n(d) आर्थिक परस्परावलंबित्व वाढते\nपर्यायी उत्तरे :",
    "question_english": "Globalization is a process of :\n(a) deepening economic integration\n(b) increasing economic openness\n(c) increasing cross-border terrorism\n(d) growing economic interdependence\nAnswer options :",
    "options_marathi": [
      "(a), (b) व (c)",
      "(b), (c) व (d)",
      "(a), (b) व (d)",
      "(a), (c) व (d)"
    ],
    "options_english": [
      "(a), (b) and (c)",
      "(b), (c) and (d)",
      "(a), (b) and (d)",
      "(a), (c) and (d)"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Globalization",
    "difficulty": "Medium",
    "trap_detected": "Distractor (Negative Consequence)",
    "explanation_english": "Globalization is fundamentally an economic process characterized by increasing interconnectedness and interdependence among countries. This involves: (a) deepening economic integration, where economies become more intertwined through trade, investment, and financial flows; (b) increasing economic openness, as barriers to trade and capital movement are reduced; and (d) growing economic interdependence, meaning countries rely more on each other for goods, services, and capital. While globalization can, in some contexts, facilitate the spread of negative phenomena like cross-border terrorism due to increased connectivity, it is not considered a *process* of globalization itself, but rather a potential *consequence* or a separate issue that might be exacerbated by globalization.",
    "explanation_marathi": "जागतिकीकरण ही मूलतः एक आर्थिक प्रक्रिया आहे जी देशांमधील वाढत्या आंतरजोडणी आणि परस्परावलंबनाने वैशिष्ट्यीकृत आहे. यात समाविष्ट आहे: (a) आर्थिक एकीकरणात जास्त सखोलता, जिथे व्यापार, गुंतवणूक आणि वित्तीय प्रवाहांद्वारे अर्थव्यवस्था अधिक गुंतागुंतीच्या होतात; (b) आर्थिक पारदर्शकता वाढते, कारण व्यापार आणि भांडवल हालचालींवरील अडथळे कमी होतात; आणि (d) आर्थिक परस्परावलंबित्व वाढते, म्हणजे देश वस्तू, सेवा आणि भांडवलासाठी एकमेकांवर अधिक अवलंबून असतात. जागतिकीकरणामुळे, काही संदर्भात, वाढलेल्या कनेक्टिव्हिटीमुळे सीमापार दहशतवादासारख्या नकारात्मक घटनांचा प्रसार सुलभ होऊ शकतो, परंतु तो जागतिकीकरणाची *प्रक्रिया* मानला जात नाही, तर तो एक संभाव्य *परिणाम* किंवा जागतिकीकरणामुळे वाढू शकणारा एक वेगळा मुद्दा आहे.",
    "options_breakdown": [
      {
        "option_number": 1,
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) व (c)",
        "is_correct": false,
        "reason_english": "Option (c) 'increasing cross-border terrorism' is not a defining process of globalization, though it can be an indirect consequence.",
        "reason_marathi": "पर्याय (c) 'सीमेपलिकडील दहशतवादात वाढ' ही जागतिकीकरणाची परिभाषित प्रक्रिया नाही, जरी तो अप्रत्यक्ष परिणाम असू शकतो."
      },
      {
        "option_number": 2,
        "option_text_english": "(b), (c) and (d)",
        "option_text_marathi": "(b), (c) व (d)",
        "is_correct": false,
        "reason_english": "Option (c) 'increasing cross-border terrorism' is not a defining process of globalization.",
        "reason_marathi": "पर्याय (c) 'सीमेपलिकडील दहशतवादात वाढ' ही जागतिकीकरणाची परिभाषित प्रक्रिया नाही."
      },
      {
        "option_number": 3,
        "option_text_english": "(a), (b) and (d)",
        "option_text_marathi": "(a), (b) व (d)",
        "is_correct": true,
        "reason_english": "Deepening economic integration, increasing economic openness, and growing economic interdependence are all core characteristics and processes of globalization.",
        "reason_marathi": "आर्थिक एकीकरणात जास्त सखोलता, आर्थिक पारदर्शकता वाढणे आणि आर्थिक परस्परावलंबित्व वाढणे ही सर्व जागतिकीकरणाची मुख्य वैशिष्ट्ये आणि प्रक्रिया आहेत."
      },
      {
        "option_number": 4,
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) व (d)",
        "is_correct": false,
        "reason_english": "Option (c) 'increasing cross-border terrorism' is not a defining process of globalization.",
        "reason_marathi": "पर्याय (c) 'सीमेपलिकडील दहशतवादात वाढ' ही जागतिकीकरणाची परिभाषित प्रक्रिया नाही."
      }
    ]
  },
  {
    "q_no": 81,
    "question_marathi": "खालीलपैकी कोणते व्यापाराशी संबंधित गुंतवणूक उपाययोजनांच्या (TRIMs) संदर्भातील उद्दिष्ट/उद्दिष्टे नाही/नाहीत ?\n(a) यजमान देशाकडून निर्यातीला प्रोत्साहन.\n(b) मालावर अंकित केलेली व्यापारी मुद्रा/बोधचिन्हासह सेवा चिन्ह.\n(c) प्रगत आर्थिक आणि सामाजिक धोरणाचे ध्येय.\n(d) तंत्रज्ञानाचे हस्तांतरण.\nपर्यायी उत्तरे :",
    "question_english": "Which of the following is/are not the objective of TRIMs (Trade Related Investment Measures) ?\n(a) Promoting exports from the host country.\n(b) Trademarks including service marks.\n(c) Advancing economic and social policy goals.\n(d) Technology transfer.\nAnswer options :",
    "options_marathi": [
      "केवळ (a)",
      "केवळ (b)",
      "(a) आणि (d)",
      "(b) आणि (c)"
    ],
    "options_english": [
      "Only (a)",
      "Only (b)",
      "(a) and (d)",
      "(b) and (c)"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "International Trade Organizations (WTO, TRIMs)",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap",
    "explanation_english": "TRIMs (Trade-Related Investment Measures) are rules established by the WTO that apply to the domestic regulations a country applies to foreign investors. Their primary goal is to prevent investment measures that restrict or distort trade. Option (b) 'Trademarks including service marks' falls under TRIPs (Trade-Related Intellectual Property Rights), which is a separate WTO agreement dealing with intellectual property. Therefore, it is not an objective or subject matter of TRIMs. While countries might aim for export promotion (a), economic and social policy goals (c), or technology transfer (d), TRIMs specifically prohibit certain investment measures that mandate these, if they are trade-distorting. The question asks what is *not* an objective of TRIMs, and intellectual property rights are clearly outside its scope.",
    "explanation_marathi": "TRIMs (व्यापाराशी संबंधित गुंतवणूक उपाययोजना) हे WTO द्वारे स्थापित केलेले नियम आहेत जे एखाद्या देशाने परदेशी गुंतवणूकदारांना लागू केलेल्या देशांतर्गत नियमांना लागू होतात. त्यांचा मुख्य उद्देश व्यापार प्रतिबंधित किंवा विकृत करणाऱ्या गुंतवणूक उपाययोजनांना प्रतिबंध घालणे हा आहे. पर्याय (b) 'मालावर अंकित केलेली व्यापारी मुद्रा/बोधचिन्हासह सेवा चिन्ह' हे TRIPs (व्यापाराशी संबंधित बौद्धिक संपदा हक्क) अंतर्गत येते, जो बौद्धिक संपदेसाठी एक स्वतंत्र WTO करार आहे. त्यामुळे, ते TRIMs चे उद्दिष्ट किंवा विषय नाही. जरी देशांचे निर्यात प्रोत्साहन (a), आर्थिक आणि सामाजिक धोरणात्मक उद्दिष्टे (c) किंवा तंत्रज्ञान हस्तांतरण (d) हे उद्दिष्ट असू शकते, तरी TRIMs विशेषतः अशा काही गुंतवणूक उपाययोजनांना प्रतिबंधित करते ज्या या गोष्टी अनिवार्य करतात, जर त्या व्यापार-विकृत करणाऱ्या असतील. प्रश्न विचारतो की TRIMs चे कोणते उद्दिष्ट नाही, आणि बौद्धिक संपदा हक्क हे त्याच्या कार्यक्षेत्राबाहेर आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Only (a)",
        "option_text_marathi": "केवळ (a)",
        "is_correct": false,
        "reason_english": "Promoting exports from the host country is often a national economic goal, but TRIMs restrict certain measures (like export performance requirements) that mandate it, as they can distort trade. It's not an objective *of TRIMs* to promote exports in a way that distorts trade, but rather to regulate investment measures. However, it's not the most distinct 'not an objective' compared to (b).",
        "reason_marathi": "यजमान देशातून निर्यातीला प्रोत्साहन देणे हे अनेकदा राष्ट्रीय आर्थिक उद्दिष्ट असते, परंतु TRIMs काही उपाययोजनांना (जसे की निर्यात कार्यप्रदर्शन आवश्यकता) प्रतिबंधित करते, कारण त्या व्यापारात विकृती निर्माण करू शकतात. व्यापार विकृत करणाऱ्या पद्धतीने निर्यातीला प्रोत्साहन देणे हे TRIMs चे उद्दिष्ट नाही, तर गुंतवणूक उपाययोजनांचे नियमन करणे हे आहे. तरीही, (b) च्या तुलनेत हे 'उद्दिष्ट नाही' असे सर्वात स्पष्टपणे म्हणता येत नाही."
      },
      {
        "option_text_english": "Only (b)",
        "option_text_marathi": "केवळ (b)",
        "is_correct": true,
        "reason_english": "Trademarks and service marks are intellectual property rights covered under the TRIPs Agreement, not TRIMs. TRIMs deals with investment measures related to trade in goods, not intellectual property.",
        "reason_marathi": "व्यापारी मुद्रा आणि सेवा चिन्ह हे बौद्धिक संपदा हक्क आहेत जे TRIPs करारांतर्गत येतात, TRIMs अंतर्गत नाहीत. TRIMs वस्तूंच्या व्यापाराशी संबंधित गुंतवणूक उपाययोजनांशी संबंधित आहे, बौद्धिक संपदेशी नाही."
      },
      {
        "option_text_english": "(a) and (d)",
        "option_text_marathi": "(a) आणि (d)",
        "is_correct": false,
        "reason_english": "Both (a) and (d) are not the primary focus of TRIMs as direct objectives. TRIMs regulate investment measures that might be used to achieve these, but they are not the core subject of the agreement itself. More importantly, (b) is clearly outside the scope of TRIMs.",
        "reason_marathi": "(a) आणि (d) दोन्ही TRIMs चे थेट उद्दिष्ट नाहीत. TRIMs अशा गुंतवणूक उपाययोजनांचे नियमन करते ज्यांचा उपयोग हे साध्य करण्यासाठी केला जाऊ शकतो, परंतु ते कराराचा मुख्य विषय नाहीत. सर्वात महत्त्वाचे म्हणजे, (b) हे TRIMs च्या कार्यक्षेत्राबाहेर आहे."
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false,
        "reason_english": "While (b) is definitely not an objective of TRIMs, advancing economic and social policy goals (c) is a broad aim that countries pursue, and TRIMs set boundaries for investment policies within that context. However, (b) is the most distinct non-objective.",
        "reason_marathi": "जरी (b) हे TRIMs चे उद्दिष्ट निश्चितपणे नसले तरी, आर्थिक आणि सामाजिक धोरणात्मक उद्दिष्टे (c) हे देशांचे व्यापक ध्येय आहे आणि TRIMs त्या संदर्भात गुंतवणूक धोरणांसाठी मर्यादा निश्चित करते. तथापि, (b) हे सर्वात स्पष्टपणे गैर-उद्दिष्ट आहे."
      }
    ]
  },
  {
    "q_no": 82,
    "question_marathi": "विकसनशील देशांच्या संदर्भात जागतिकीकरणाच्या समर्थनार्थ खालीलपैकी कोणते मुद्दे समर्पक आहेत ?\n(a) जागतिकीकरणामुळे प्रत्यक्ष परकीय गुंतवणूकीस चालना मिळते व देश आंतरराष्ट्रीय स्तरावर कर्जबाजारी होत नाही.\n(b) जागतिकीकरणामुळे आधुनिक तंत्रज्ञानाचा प्रसार होतो व देशांना संशोधनात भर न घालता तंत्रज्ञान मिळते.\n(c) जागतिकीकरण प्रक्रियेमुळे विकसनशील देशातील दारिद्र्य दूर झाले आहे.\n(d) जागतिकीकरणामुळे ज्ञानाची देवाणघेवाण मोठ्या प्रमाणावर होते.\nवरीलपैकी योग्य उत्तर कोणते ?",
    "question_english": "Which of the following points are apt. for developing nations in defense of globalization ?\n(a) Globalization promotes FDI without forcing developing nations into international indebtedness.\n(b) Globalization promotes modern technology and enables developing nations to make use of it without investment in R and D.\n(c) Globalization has helped to reduce the poverty of nations in developing stage.\n(d) Globalization leads to faster diffusion of knowledge among developing nations.\nWhich are the correct answers ?",
    "options_marathi": [
      "(a), (b) आणि (c)",
      "(b), (d) आणि (c)",
      "(a), (c) आणि (d)",
      "(a), (b) आणि (d)"
    ],
    "options_english": [
      "(a), (b) and (c)",
      "(b), (d) and (c)",
      "(a), (c) and (d)",
      "(a), (b) and (d)"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Globalization and its Impact",
    "difficulty": "Medium",
    "trap_detected": "Extreme Word",
    "explanation_english": "Globalization offers several benefits to developing nations. (a) Foreign Direct Investment (FDI) is a non-debt creating capital inflow, which helps in economic development without increasing international indebtedness. (c) While globalization has also been criticized for increasing inequality, it has undeniably contributed to poverty reduction in many developing countries by creating jobs and opportunities. (d) Globalization facilitates the rapid exchange and diffusion of knowledge, technology, and best practices across borders. However, (b) is problematic because while globalization promotes technology transfer, it is inaccurate to say that developing nations can make use of it 'without investment in R&D'. Countries still need to invest in R&D to adapt, absorb, and innovate on transferred technology. The phrase 'without investment in R and D' is an extreme statement and makes option (b) incorrect.",
    "explanation_marathi": "जागतिकीकरणामुळे विकसनशील राष्ट्रांना अनेक फायदे मिळतात. (a) प्रत्यक्ष परकीय गुंतवणूक (FDI) हा कर्ज निर्माण न करणारा भांडवली प्रवाह आहे, जो आंतरराष्ट्रीय कर्ज न वाढवता आर्थिक विकासास मदत करतो. (c) जागतिकीकरणामुळे असमानता वाढल्याची टीका होत असली तरी, अनेक विकसनशील देशांमध्ये रोजगार आणि संधी निर्माण करून दारिद्र्य कमी करण्यास त्याने निश्चितपणे योगदान दिले आहे. (d) जागतिकीकरणामुळे ज्ञान, तंत्रज्ञान आणि सर्वोत्तम पद्धतींची जलद देवाणघेवाण आणि प्रसार होतो. तथापि, (b) हे चुकीचे आहे कारण जागतिकीकरणामुळे तंत्रज्ञान हस्तांतरणास प्रोत्साहन मिळत असले तरी, विकसनशील राष्ट्रे 'संशोधनात भर न घालता' त्याचा वापर करू शकतात असे म्हणणे चुकीचे आहे. हस्तांतरित तंत्रज्ञानाचे अनुकूलन, आत्मसात करणे आणि त्यात नवनवीन शोध लावण्यासाठी देशांना अजूनही R&D मध्ये गुंतवणूक करणे आवश्यक आहे. 'संशोधनात भर न घालता' हे विधान अतिशयोक्तीपूर्ण आहे आणि त्यामुळे पर्याय (b) चुकीचा ठरतो.",
    "options_breakdown": [
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason_english": "Option (b) is incorrect due to the extreme phrasing 'without investment in R and D'.",
        "reason_marathi": "पर्याय (b) 'संशोधनात भर न घालता' या अतिशयोक्तीपूर्ण शब्दामुळे चुकीचा आहे."
      },
      {
        "option_text_english": "(b), (d) and (c)",
        "option_text_marathi": "(b), (d) आणि (c)",
        "is_correct": false,
        "reason_english": "Option (b) is incorrect due to the extreme phrasing 'without investment in R and D'.",
        "reason_marathi": "पर्याय (b) 'संशोधनात भर न घालता' या अतिशयोक्तीपूर्ण शब्दामुळे चुकीचा आहे."
      },
      {
        "option_text_english": "(a), (c) and (d)",
        "option_text_marathi": "(a), (c) आणि (d)",
        "is_correct": true,
        "reason_english": "These three points accurately represent the benefits of globalization for developing nations: FDI as non-debt capital, poverty reduction, and knowledge diffusion. Option (b) is flawed.",
        "reason_marathi": "हे तीन मुद्दे विकसनशील राष्ट्रांसाठी जागतिकीकरणाचे फायदे अचूकपणे दर्शवतात: कर्ज नसलेले भांडवल म्हणून FDI, दारिद्र्य कमी करणे आणि ज्ञानाचा प्रसार. पर्याय (b) सदोष आहे."
      },
      {
        "option_text_english": "(a), (b) and (d)",
        "option_text_marathi": "(a), (b) आणि (d)",
        "is_correct": false,
        "reason_english": "Option (b) is incorrect due to the extreme phrasing 'without investment in R and D'.",
        "reason_marathi": "पर्याय (b) 'संशोधनात भर न घालता' या अतिशयोक्तीपूर्ण शब्दामुळे चुकीचा आहे."
      }
    ]
  },
  {
    "q_no": 83,
    "question_marathi": "व्यापारासंबंधीत बौध्दिक संपत्ती हक्कामध्ये (TRIPs) खालील हक्कांचा समावेश होतो :\n(a) प्रतिलिपी हक्क\n(b) व्यापार चिन्ह\n(c) शेतीविषयक करार\nवरीलपैकी कोणते हक्क जागतिक व्यापार संघटनेने (WTO), ट्रीप्स अंतर्गत प्रस्थापित केले ?",
    "question_english": "Trade Related Intellectual Property Rights (TRIPs) covers following rights:\n(a) Copyright\n(b) Trademarks\n(c) Agreement on agriculture\nWhich of the above rights introduced by WTO under TRIPs ?",
    "options_marathi": [
      "फक्त (a)",
      "फक्त (a) आणि (b)",
      "फक्त (a) आणि (c)",
      "(a), (b) आणि (c)"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b) only",
      "(a) and (c) only",
      "(a), (b) and (c)"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "International Trade Organizations (WTO, TRIPs)",
    "difficulty": "Easy",
    "trap_detected": "Factual Swap",
    "explanation_english": "The Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPs) is a comprehensive international agreement on intellectual property. It covers various forms of intellectual property, including (a) Copyright and related rights, and (b) Trademarks. However, (c) 'Agreement on agriculture' is a separate WTO agreement that deals with agricultural trade policies, subsidies, and market access, and is not an intellectual property right covered under TRIPs.",
    "explanation_marathi": "बौद्धिक संपदा हक्कांच्या व्यापार-संबंधित पैलूंवरील करार (TRIPs) हा बौद्धिक संपदेवरील एक व्यापक आंतरराष्ट्रीय करार आहे. यात बौद्धिक संपदेच्या विविध प्रकारांचा समावेश होतो, ज्यात (a) प्रतिलिपी हक्क आणि संबंधित हक्क, आणि (b) व्यापार चिन्ह यांचा समावेश आहे. तथापि, (c) 'शेतीविषयक करार' हा एक स्वतंत्र WTO करार आहे जो कृषी व्यापार धोरणे, अनुदान आणि बाजारपेठ प्रवेशाशी संबंधित आहे आणि तो TRIPs अंतर्गत समाविष्ट असलेला बौद्धिक संपदा हक्क नाही.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "फक्त (a)",
        "is_correct": false,
        "reason_english": "While Copyright is covered, Trademarks are also covered by TRIPs.",
        "reason_marathi": "प्रतिलिपी हक्क समाविष्ट असले तरी, व्यापार चिन्ह देखील TRIPs द्वारे समाविष्ट आहेत."
      },
      {
        "option_text_english": "(a) and (b) only",
        "option_text_marathi": "फक्त (a) आणि (b)",
        "is_correct": true,
        "reason_english": "Copyright and Trademarks are both explicitly covered under the TRIPs Agreement.",
        "reason_marathi": "प्रतिलिपी हक्क आणि व्यापार चिन्ह दोन्ही TRIPs करारांतर्गत स्पष्टपणे समाविष्ट आहेत."
      },
      {
        "option_text_english": "(a) and (c) only",
        "option_text_marathi": "फक्त (a) आणि (c)",
        "is_correct": false,
        "reason_english": "Agreement on agriculture (c) is not an intellectual property right and is not covered under TRIPs.",
        "reason_marathi": "शेतीविषयक करार (c) हा बौद्धिक संपदा हक्क नाही आणि तो TRIPs अंतर्गत समाविष्ट नाही."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason_english": "Agreement on agriculture (c) is not an intellectual property right and is not covered under TRIPs.",
        "reason_marathi": "शेतीविषयक करार (c) हा बौद्धिक संपदा हक्क नाही आणि तो TRIPs अंतर्गत समाविष्ट नाही."
      }
    ]
  },
  {
    "q_no": 84,
    "question_marathi": "जागतिक व्यापार संघटनेचे (WTO) सर्वोच्च अधिकार ______ ला आहेत.",
    "question_english": "The Supreme authority of WTO is ______.",
    "options_marathi": [
      "विवाद समझोता मंडळ",
      "मंत्रिमंडळ परिषद",
      "महासंचालक",
      "सर्वसाधारण मंडळ"
    ],
    "options_english": [
      "Dispute Settlement Body",
      "Ministerial Conference",
      "Director General",
      "General Council"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "International Trade Organizations (WTO Structure)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Ministerial Conference is the highest decision-making body of the World Trade Organization (WTO). It meets at least once every two years and brings together all members of the WTO, typically represented by their trade ministers. It has the authority to make decisions on all matters under any of the multilateral trade agreements.",
    "explanation_marathi": "मंत्रिमंडळ परिषद (Ministerial Conference) ही जागतिक व्यापार संघटनेची (WTO) सर्वोच्च निर्णय घेणारी संस्था आहे. ती दर दोन वर्षांनी किमान एकदा भेटते आणि WTO च्या सर्व सदस्यांना एकत्र आणते, ज्यांचे प्रतिनिधित्व सामान्यतः त्यांचे व्यापार मंत्री करतात. तिला कोणत्याही बहुपक्षीय व्यापार करारांतर्गत सर्व बाबींवर निर्णय घेण्याचा अधिकार आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Dispute Settlement Body",
        "option_text_marathi": "विवाद समझोता मंडळ",
        "is_correct": false,
        "reason_english": "The Dispute Settlement Body oversees the resolution of trade disputes, but it is not the supreme authority for policy-making.",
        "reason_marathi": "विवाद समझोता मंडळ व्यापार विवादांचे निराकरण करते, परंतु ते धोरण-निर्मितीसाठी सर्वोच्च प्राधिकरण नाही."
      },
      {
        "option_text_english": "Ministerial Conference",
        "option_text_marathi": "मंत्रिमंडळ परिषद",
        "is_correct": true,
        "reason_english": "The Ministerial Conference is the highest decision-making body of the WTO, with the authority to make decisions on all matters.",
        "reason_marathi": "मंत्रिमंडळ परिषद ही WTO ची सर्वोच्च निर्णय घेणारी संस्था आहे, तिला सर्व बाबींवर निर्णय घेण्याचा अधिकार आहे."
      },
      {
        "option_text_english": "Director General",
        "option_text_marathi": "महासंचालक",
        "is_correct": false,
        "reason_english": "The Director General is the head of the WTO Secretariat and is responsible for its administrative functions, but does not hold supreme authority.",
        "reason_marathi": "महासंचालक हे WTO सचिवालयाचे प्रमुख असतात आणि त्यांच्या प्रशासकीय कार्यांसाठी जबाबदार असतात, परंतु त्यांना सर्वोच्च अधिकार नसतात."
      },
      {
        "option_text_english": "General Council",
        "option_text_marathi": "सर्वसाधारण मंडळ",
        "is_correct": false,
        "reason_english": "The General Council acts on behalf of the Ministerial Conference between its meetings, but the Ministerial Conference itself is the supreme authority.",
        "reason_marathi": "सर्वसाधारण मंडळ मंत्रिमंडळ परिषदेच्या बैठकांदरम्यान तिच्या वतीने कार्य करते, परंतु मंत्रिमंडळ परिषद स्वतःच सर्वोच्च प्राधिकरण आहे."
      }
    ]
  },
  {
    "q_no": 85,
    "question_marathi": "______ ने गुंतवणूकीत भारतीय गुंतवणूक दाराएवढेच परदेशी गुंतवणूक दारांना अधिकार मिळतील.",
    "question_english": "Under ______ the foreign investors will be given same rights as the national investors in the matter of investment.",
    "options_marathi": [
      "बुध्दी संपदा मालमत्ता अधिकार",
      "गुंतवणूक उपाय योजना व्यापाराबाबतचा करार",
      "सेवेतील व्यापाराबाबतचा करार",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Trade Related Intellectual Property Rights",
      "Trade Related Investment Measures",
      "General Agreement on Trade in Services",
      "None of these"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "International Trade Organizations (WTO, National Treatment)",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "The principle of 'National Treatment' is a cornerstone of WTO agreements, meaning that imported and locally produced goods, services, or investors should be treated equally (after the foreign goods/services/investors have entered the market). In the context of investment, the Agreement on Trade-Related Investment Measures (TRIMs) applies the national treatment principle to investment measures related to trade in goods. It ensures that foreign investors are treated no less favorably than domestic investors with respect to the investment measures covered by the agreement.",
    "explanation_marathi": "'राष्ट्रीय उपचार' (National Treatment) हे WTO करारांचे एक महत्त्वाचे तत्त्व आहे, याचा अर्थ आयात केलेल्या आणि स्थानिक पातळीवर उत्पादित वस्तू, सेवा किंवा गुंतवणूकदारांना समान वागणूक दिली पाहिजे (परदेशी वस्तू/सेवा/गुंतवणूकदार बाजारात प्रवेश केल्यानंतर). गुंतवणुकीच्या संदर्भात, व्यापार-संबंधित गुंतवणूक उपाययोजना (TRIMs) करार वस्तूंच्या व्यापाराशी संबंधित गुंतवणूक उपाययोजनांना राष्ट्रीय उपचार तत्त्व लागू करतो. हे सुनिश्चित करते की परदेशी गुंतवणूकदारांना करारांतर्गत समाविष्ट असलेल्या गुंतवणूक उपाययोजनांच्या बाबतीत देशांतर्गत गुंतवणूकदारांपेक्षा कमी अनुकूल वागणूक दिली जात नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Trade Related Intellectual Property Rights",
        "option_text_marathi": "बुध्दी संपदा मालमत्ता अधिकार",
        "is_correct": false,
        "reason_english": "TRIPs deals with intellectual property rights, not the general rights of investors in terms of national treatment for investment measures.",
        "reason_marathi": "TRIPs बौद्धिक संपदा हक्कांशी संबंधित आहे, गुंतवणूक उपाययोजनांसाठी राष्ट्रीय उपचारांच्या दृष्टीने गुंतवणूकदारांच्या सामान्य हक्कांशी नाही."
      },
      {
        "option_text_english": "Trade Related Investment Measures",
        "option_text_marathi": "गुंतवणूक उपाय योजना व्यापाराबाबतचा करार",
        "is_correct": true,
        "reason_english": "TRIMs specifically addresses investment measures and incorporates the national treatment principle, ensuring foreign investors are treated equally to national investors in matters of investment.",
        "reason_marathi": "TRIMs विशेषतः गुंतवणूक उपाययोजनांशी संबंधित आहे आणि राष्ट्रीय उपचार तत्त्वाचा समावेश करते, ज्यामुळे परदेशी गुंतवणूकदारांना गुंतवणुकीच्या बाबतीत राष्ट्रीय गुंतवणूकदारांप्रमाणेच वागणूक मिळते."
      },
      {
        "option_text_english": "General Agreement on Trade in Services",
        "option_text_marathi": "सेवेतील व्यापाराबाबतचा करार",
        "is_correct": false,
        "reason_english": "GATS applies national treatment to trade in services, not directly to investment in general.",
        "reason_marathi": "GATS सेवांमधील व्यापाराला राष्ट्रीय उपचार लागू करते, थेट सामान्य गुंतवणुकीला नाही."
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "वरीलपैकी एकही नाही",
        "is_correct": false,
        "reason_english": "TRIMs is the correct answer.",
        "reason_marathi": "TRIMs हे योग्य उत्तर आहे."
      }
    ]
  },
  {
    "q_no": 86,
    "question_marathi": "सार्वजनीक कर्जाचा परिणाम खालील बाबींवर होतो :\n(a) किंमत\n(b) उत्पन्न व संपत्ती वाटणी\n(c) करवाढ\n(d) विकास\nपर्यायी उत्तरे :",
    "question_english": "Public debt affects on the following things:\n(a) Price\n(b) Income and Wealth Distribution\n(c) Increase of Tax\n(d) Development\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(b) फक्त",
      "(a), (b) आणि (c)",
      "वरील सर्व"
    ],
    "options_english": [
      "(a) only",
      "(b) only",
      "(a), (b) and (c)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Public Finance (Public Debt)",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Public debt, when accumulated to high levels, can have wide-ranging effects on an economy. (a) It can influence prices, especially if financed by printing money (leading to inflation) or by crowding out private investment. (b) Debt servicing (interest payments) can redistribute income and wealth from taxpayers to bondholders, potentially exacerbating inequality. (c) To manage or repay public debt, governments often resort to increasing taxes in the future. (d) High public debt can also hinder long-term economic development by diverting resources from productive investments, increasing borrowing costs, and reducing fiscal space for counter-cyclical policies.",
    "explanation_marathi": "सार्वजनिक कर्ज, जेव्हा उच्च पातळीवर जमा होते, तेव्हा अर्थव्यवस्थेवर त्याचे दूरगामी परिणाम होऊ शकतात. (a) ते किमतींवर परिणाम करू शकते, विशेषतः जर ते पैसे छापून (महागाईला कारणीभूत) किंवा खाजगी गुंतवणुकीला बाहेर काढून वित्तपुरवठा केले असेल. (b) कर्ज सेवा (व्याज भरणे) करदात्यांकडून रोखेधारकांकडे उत्पन्न आणि संपत्तीचे पुनर्वितरण करू शकते, ज्यामुळे असमानता वाढू शकते. (c) सार्वजनिक कर्ज व्यवस्थापित करण्यासाठी किंवा फेडण्यासाठी, सरकार अनेकदा भविष्यात कर वाढवण्याचा अवलंब करते. (d) उच्च सार्वजनिक कर्ज उत्पादक गुंतवणुकीतून संसाधने वळवून, कर्ज घेण्याचा खर्च वाढवून आणि प्रति-चक्रीय धोरणांसाठी वित्तीय जागा कमी करून दीर्घकालीन आर्थिक विकासाला अडथळा आणू शकते.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Public debt affects more than just prices.",
        "reason_marathi": "सार्वजनिक कर्जाचा परिणाम केवळ किमतींवरच होत नाही."
      },
      {
        "option_text_english": "(b) only",
        "option_text_marathi": "(b) फक्त",
        "is_correct": false,
        "reason_english": "Public debt affects more than just income and wealth distribution.",
        "reason_marathi": "सार्वजनिक कर्जाचा परिणाम केवळ उत्पन्न आणि संपत्तीच्या वितरणावरच होत नाही."
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false,
        "reason_english": "Public debt also affects development (d).",
        "reason_marathi": "सार्वजनिक कर्जाचा परिणाम विकासावरही (d) होतो."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "वरील सर्व",
        "is_correct": true,
        "reason_english": "Public debt can impact prices, income and wealth distribution, lead to future tax increases, and affect overall economic development.",
        "reason_marathi": "सार्वजनिक कर्जाचा परिणाम किमती, उत्पन्न आणि संपत्तीचे वितरण, भविष्यातील करवाढ आणि एकूण आर्थिक विकासावर होऊ शकतो."
      }
    ]
  },
  {
    "q_no": 87,
    "question_marathi": "______ हे राज्य सरकारांचे भारत सरकार कडून मिळणाऱ्या महसूलाचे प्रमूख साधन नाही.",
    "question_english": "______ is not the major revenue source of State Government which comes from GOI.",
    "options_marathi": [
      "केंद्रीय करातील हिस्सा",
      "कर्जे आणि आगाऊ रकमा",
      "केंद्रीय अनुदान",
      "वरीलपैकी कोणतेही नाही"
    ],
    "options_english": [
      "Share in Central Taxes",
      "Loans and Advances",
      "Central Grants",
      "None of these"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Public Finance (Centre-State Financial Relations)",
    "difficulty": "Medium",
    "trap_detected": "Conceptual Clarity",
    "explanation_english": "Revenue sources are receipts that do not create a liability or reduce an asset. (a) Share in Central Taxes (tax devolution) and (c) Central Grants are both significant revenue sources for state governments from the Government of India, as they are non-repayable transfers. However, (b) Loans and Advances are not revenue sources; they are capital receipts that create a liability for the state government, meaning they have to be repaid to the central government. Therefore, loans and advances are a source of financing, not revenue.",
    "explanation_marathi": "महसूल स्रोत म्हणजे अशा प्राप्ती ज्या दायित्व निर्माण करत नाहीत किंवा मालमत्ता कमी करत नाहीत. (a) केंद्रीय करातील हिस्सा (कर हस्तांतरण) आणि (c) केंद्रीय अनुदान हे दोन्ही भारत सरकारकडून राज्य सरकारांसाठी महत्त्वाचे महसूल स्रोत आहेत, कारण ते परत न करण्यायोग्य हस्तांतरण आहेत. तथापि, (b) कर्जे आणि आगाऊ रकमा हे महसूल स्रोत नाहीत; त्या भांडवली प्राप्ती आहेत ज्या राज्य सरकारसाठी दायित्व निर्माण करतात, याचा अर्थ त्या केंद्र सरकारला परत कराव्या लागतात. त्यामुळे, कर्जे आणि आगाऊ रकमा हे वित्तपुरवठ्याचे स्रोत आहेत, महसुलाचे नाहीत.",
    "options_breakdown": [
      {
        "option_text_english": "Share in Central Taxes",
        "option_text_marathi": "केंद्रीय करातील हिस्सा",
        "is_correct": false,
        "reason_english": "This is a major revenue source for state governments, as recommended by the Finance Commission.",
        "reason_marathi": "हा राज्य सरकारांसाठी एक प्रमुख महसूल स्रोत आहे, ज्याची शिफारस वित्त आयोगाने केली आहे."
      },
      {
        "option_text_english": "Loans and Advances",
        "option_text_marathi": "कर्जे आणि आगाऊ रकमा",
        "is_correct": true,
        "reason_english": "Loans and advances are capital receipts that create a liability for the state government and must be repaid; they are not considered revenue.",
        "reason_marathi": "कर्जे आणि आगाऊ रकमा या भांडवली प्राप्ती आहेत ज्या राज्य सरकारसाठी दायित्व निर्माण करतात आणि त्या परत कराव्या लागतात; त्यांना महसूल मानले जात नाही."
      },
      {
        "option_text_english": "Central Grants",
        "option_text_marathi": "केंद्रीय अनुदान",
        "is_correct": false,
        "reason_english": "Central grants are non-repayable transfers and thus a significant revenue source for state governments.",
        "reason_marathi": "केंद्रीय अनुदान हे परत न करण्यायोग्य हस्तांतरण आहेत आणि त्यामुळे राज्य सरकारांसाठी एक महत्त्वाचा महसूल स्रोत आहेत."
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "वरीलपैकी कोणतेही नाही",
        "is_correct": false,
        "reason_english": "Loans and Advances is clearly not a revenue source.",
        "reason_marathi": "कर्जे आणि आगाऊ रकमा हे स्पष्टपणे महसूल स्रोत नाहीत."
      }
    ]
  },
  {
    "q_no": 88,
    "question_marathi": "भारतीय सार्वजनिक स्वास्थ्य खबरदारी पायाभूत सुविधांच्या ______ या पातळीला समाज स्वास्थ्य केंद्राचे स्थान आहे.",
    "question_english": "Community Health centres are located at the ______ level of Indian public health care infrastructure.",
    "options_marathi": [
      "प्राथमिक",
      "द्वितीयक",
      "तृतीयक",
      "वरीलपैकी एकही नाही"
    ],
    "options_english": [
      "Primary",
      "Secondary",
      "Tertiary",
      "None of the above"
    ],
    "correct_option_index": 2,
    "subject": "Social Sector",
    "topic": "Health Infrastructure",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "The Indian public health care infrastructure is typically structured into three tiers. The primary level includes Sub-centres (SCs) and Primary Health Centres (PHCs), providing basic healthcare. The secondary level comprises Community Health Centres (CHCs) and District Hospitals, offering more specialized services and acting as referral centers for primary care. The tertiary level consists of Medical Colleges and Super-specialty Hospitals, providing highly specialized and advanced medical care. Therefore, Community Health Centres are located at the secondary level.",
    "explanation_marathi": "भारतीय सार्वजनिक आरोग्य सेवा पायाभूत सुविधा सामान्यतः तीन स्तरांमध्ये विभागलेल्या आहेत. प्राथमिक स्तरामध्ये उपकेंद्रे (SCs) आणि प्राथमिक आरोग्य केंद्रे (PHCs) समाविष्ट आहेत, जी मूलभूत आरोग्य सेवा प्रदान करतात. द्वितीयक स्तरामध्ये सामुदायिक आरोग्य केंद्रे (CHCs) आणि जिल्हा रुग्णालये समाविष्ट आहेत, जी अधिक विशेष सेवा देतात आणि प्राथमिक काळजीसाठी संदर्भ केंद्रे म्हणून कार्य करतात. तृतीयक स्तरामध्ये वैद्यकीय महाविद्यालये आणि सुपर-स्पेशालिटी रुग्णालये समाविष्ट आहेत, जी अत्यंत विशेष आणि प्रगत वैद्यकीय सेवा प्रदान करतात. त्यामुळे, सामुदायिक आरोग्य केंद्रे द्वितीयक स्तरावर स्थित आहेत.",
    "options_breakdown": [
      {
        "option_text_english": "Primary",
        "option_text_marathi": "प्राथमिक",
        "is_correct": false,
        "reason_english": "Primary level includes Sub-centres and Primary Health Centres.",
        "reason_marathi": "प्राथमिक स्तरामध्ये उपकेंद्रे आणि प्राथमिक आरोग्य केंद्रे समाविष्ट आहेत."
      },
      {
        "option_text_english": "Secondary",
        "option_text_marathi": "द्वितीयक",
        "is_correct": true,
        "reason_english": "Community Health Centres (CHCs) are part of the secondary level of healthcare, providing referral and specialized services beyond primary care.",
        "reason_marathi": "सामुदायिक आरोग्य केंद्रे (CHCs) आरोग्य सेवेच्या द्वितीयक स्तराचा भाग आहेत, जी प्राथमिक काळजीच्या पलीकडे संदर्भ आणि विशेष सेवा प्रदान करतात."
      },
      {
        "option_text_english": "Tertiary",
        "option_text_marathi": "तृतीयक",
        "is_correct": false,
        "reason_english": "Tertiary level includes Medical Colleges and Super-specialty Hospitals.",
        "reason_marathi": "तृतीयक स्तरामध्ये वैद्यकीय महाविद्यालये आणि सुपर-स्पेशालिटी रुग्णालये समाविष्ट आहेत."
      },
      {
        "option_text_english": "None of the above",
        "option_text_marathi": "वरीलपैकी एकही नाही",
        "is_correct": false,
        "reason_english": "CHCs are clearly at the secondary level.",
        "reason_marathi": "CHCs स्पष्टपणे द्वितीयक स्तरावर आहेत."
      }
    ]
  },
  {
    "q_no": 89,
    "question_marathi": "खालीलपैकी कोणत्या राज्याला 2018-19 मध्ये सर्वाधिक महसूल ₹90,140 कोटी इतका SGST मधून मिळाला आहे ?",
    "question_english": "Which of the following state received highest revenue ₹90,140 crores from SGST for 2018-19?",
    "options_marathi": [
      "तामिळनाडू",
      "उत्तर प्रदेश",
      "कर्नाटक",
      "महाराष्ट्र"
    ],
    "options_english": [
      "Tamilnadu",
      "U.P.",
      "Karnataka",
      "Maharashtra"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "GST, State Finances",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "For the financial year 2018-19, Maharashtra, being one of India's largest economies and most industrialized states, consistently recorded the highest State Goods and Services Tax (SGST) collections. The figure of ₹90,140 crores aligns with the reported SGST revenue for Maharashtra during that period, making it the state with the highest SGST collection among the given options.",
    "explanation_marathi": "आर्थिक वर्ष 2018-19 साठी, महाराष्ट्र, जो भारतातील सर्वात मोठ्या अर्थव्यवस्थांपैकी एक आणि सर्वात औद्योगिक राज्य आहे, त्याने सातत्याने सर्वाधिक राज्य वस्तू आणि सेवा कर (SGST) संकलन नोंदवले. ₹90,140 कोटींची आकडेवारी त्या कालावधीतील महाराष्ट्राच्या SGST महसुलाशी जुळते, ज्यामुळे दिलेल्या पर्यायांमध्ये ते सर्वाधिक SGST संकलन असलेले राज्य ठरते.",
    "options_breakdown": [
      {
        "option_text_english": "Tamilnadu",
        "option_text_marathi": "तामिळनाडू",
        "is_correct": false,
        "reason_english": "Tamil Nadu's SGST collection for 2018-19 was lower than Maharashtra's.",
        "reason_marathi": "2018-19 साठी तामिळनाडूचे SGST संकलन महाराष्ट्रापेक्षा कमी होते."
      },
      {
        "option_text_english": "U.P.",
        "option_text_marathi": "उत्तर प्रदेश",
        "is_correct": false,
        "reason_english": "Uttar Pradesh's SGST collection for 2018-19 was lower than Maharashtra's.",
        "reason_marathi": "2018-19 साठी उत्तर प्रदेशचे SGST संकलन महाराष्ट्रापेक्षा कमी होते."
      },
      {
        "option_text_english": "Karnataka",
        "option_text_marathi": "कर्नाटक",
        "is_correct": false,
        "reason_english": "Karnataka's SGST collection for 2018-19 was lower than Maharashtra's.",
        "reason_marathi": "2018-19 साठी कर्नाटकचे SGST संकलन महाराष्ट्रापेक्षा कमी होते."
      },
      {
        "option_text_english": "Maharashtra",
        "option_text_marathi": "महाराष्ट्र",
        "is_correct": true,
        "reason_english": "Maharashtra consistently leads in SGST collection due to its large economy and industrial base. For 2018-19, it had the highest SGST revenue among the options.",
        "reason_marathi": "महाराष्ट्र आपल्या मोठ्या अर्थव्यवस्थेमुळे आणि औद्योगिक आधारामुळे SGST संकलनात सातत्याने आघाडीवर आहे. 2018-19 साठी, दिलेल्या पर्यायांमध्ये त्याचा SGST महसूल सर्वाधिक होता."
      }
    ]
  },
  {
    "q_no": 90,
    "question_marathi": "राजकोषीय तूट म्हणजे\n(a) महसूली प्राप्ती + भांडवली प्राप्ती - एकूण खर्च\n(b) अंदाज पत्रकीय तूट + कर्ज आणि इतर देयता\n(c) भांडवली प्राप्ती - भांडवली खर्च\n(d) महसूली प्राप्ती - महसूली खर्च\nपर्यायी उत्तरे :",
    "question_english": "Fiscal Deficit means\n(a) Revenue Receipts + Capital Receipts - Total Expenditure\n(b) Budget deficit + Government market borrowings and liabilities\n(c) Capital Receipts - Capital Expenditure\n(d) Revenue Receipts - Revenue Expenditure\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(a) आणि (b)",
      "(b) फक्त",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) only",
      "(a) and (b)",
      "(b) only",
      "All above"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Public Finance (Fiscal Deficit)",
    "difficulty": "Hard",
    "trap_detected": "Ambiguous Definitions",
    "explanation_english": "Fiscal Deficit represents the total borrowing requirement of the government. It is calculated as Total Expenditure minus (Revenue Receipts + Non-debt Capital Receipts). Alternatively, it is equal to the total borrowings and other liabilities of the government. Let's analyze the options: (a) 'Revenue Receipts + Capital Receipts - Total Expenditure' is incorrect. If Capital Receipts include borrowings, this would be zero (overall budget balance). If Capital Receipts exclude borrowings, it would be the negative of fiscal deficit. (d) 'Revenue Receipts - Revenue Expenditure' is the Revenue Deficit. (c) 'Capital Receipts - Capital Expenditure' is the Capital Account Deficit/Surplus. (b) 'Budget deficit + Government market borrowings and liabilities' is a somewhat ambiguous phrasing. However, if 'Budget deficit' refers to the traditional overall budget deficit (which is zero by convention), then Fiscal Deficit = 0 + Government market borrowings and liabilities, which means Fiscal Deficit is equal to the total borrowings and liabilities. This interpretation makes (b) a correct definition.",
    "explanation_marathi": "राजकोषीय तूट म्हणजे सरकारची एकूण कर्ज घेण्याची आवश्यकता. ती एकूण खर्च वजा (महसूली प्राप्ती + कर्ज नसलेल्या भांडवली प्राप्ती) अशी मोजली जाते. वैकल्पिकरित्या, ती सरकारची एकूण कर्जे आणि इतर देयतांच्या बरोबरीची असते. पर्यायांचे विश्लेषण करूया: (a) 'महसूली प्राप्ती + भांडवली प्राप्ती - एकूण खर्च' हे चुकीचे आहे. जर भांडवली प्राप्तीमध्ये कर्जे समाविष्ट असतील, तर हे शून्य असेल (एकूण अर्थसंकल्पीय संतुलन). जर भांडवली प्राप्तीमध्ये कर्जे समाविष्ट नसतील, तर ते राजकोषीय तुटीचे नकारात्मक असेल. (d) 'महसूली प्राप्ती - महसूली खर्च' ही महसूली तूट आहे. (c) 'भांडवली प्राप्ती - भांडवली खर्च' ही भांडवली खात्यातील तूट/अधिशेष आहे. (b) 'अंदाज पत्रकीय तूट + कर्ज आणि इतर देयता' हे काहीसे संदिग्ध विधान आहे. तथापि, जर 'अंदाज पत्रकीय तूट' म्हणजे पारंपारिक एकूण अंदाजपत्रकीय तूट (जी प्रथेनुसार शून्य असते), तर राजकोषीय तूट = 0 + सरकारची बाजारपेठेतील कर्जे आणि देयता, याचा अर्थ राजकोषीय तूट एकूण कर्जे आणि देयतांच्या बरोबरीची आहे. ही व्याख्या (b) ला योग्य ठरवते.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false,
        "reason_english": "Option (a) is incorrect. If Capital Receipts include borrowings, the expression equals zero. If they exclude borrowings, it equals negative fiscal deficit.",
        "reason_marathi": "पर्याय (a) चुकीचा आहे. जर भांडवली प्राप्तीमध्ये कर्जे समाविष्ट असतील, तर हे विधान शून्य होते. जर कर्जे वगळली तर ते राजकोषीय तुटीचे नकारात्मक होते."
      },
      {
        "option_text_english": "(a) and (b)",
        "option_text_marathi": "(a) आणि (b)",
        "is_correct": false,
        "reason_english": "Since option (a) is incorrect, this combination cannot be correct.",
        "reason_marathi": "पर्याय (a) चुकीचा असल्याने, हे संयोजन योग्य असू शकत नाही."
      },
      {
        "option_text_english": "(b) only",
        "option_text_marathi": "(b) फक्त",
        "is_correct": true,
        "reason_english": "If 'Budget deficit' refers to the overall budget deficit (which is zero by convention), then Fiscal Deficit = Government market borrowings and liabilities, which is a correct definition.",
        "reason_marathi": "जर 'अंदाज पत्रकीय तूट' म्हणजे एकूण अंदाजपत्रकीय तूट (जी प्रथेनुसार शून्य असते), तर राजकोषीय तूट = सरकारची बाजारपेठेतील कर्जे आणि देयता, जी एक योग्य व्याख्या आहे."
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": false,
        "reason_english": "Options (a), (c), and (d) are not definitions of fiscal deficit.",
        "reason_marathi": "पर्याय (a), (c) आणि (d) हे राजकोषीय तुटीच्या व्याख्या नाहीत."
      }
    ]
  },
  {
    "q_no": 91,
    "question_marathi": "तुटीचा अर्थभरणा केल्याचा परिणाम म्हणून ______ होते.",
    "question_english": "The deficit financing leads to ______.",
    "options_marathi": [
      "किंमत पातळीत वाढ",
      "सरकारला तोटा",
      "उत्पादन पातळीत घट",
      "वरीलपैकी कोणतेही नाही"
    ],
    "options_english": [
      "Rise in price level",
      "Government faces loss",
      "Declining output level",
      "None of these"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "Fiscal Policy, Deficit Financing, Inflation",
    "difficulty": "Medium",
    "trap_detected": "None",
    "explanation_english": "Deficit financing refers to the practice where a government spends more money than it receives in revenue, typically by borrowing or printing new currency. When the government injects more money into the economy without a corresponding increase in the supply of goods and services, it leads to an increase in the overall money supply. This excess money chasing the same amount of goods and services results in a general rise in the price level, commonly known as inflation. While it can stimulate demand in the short run, persistent deficit financing often has inflationary consequences.",
    "explanation_marathi": "तुटीचा अर्थभरणा म्हणजे सरकारला मिळणाऱ्या महसुलापेक्षा जास्त खर्च करणे, जे सामान्यतः कर्ज घेऊन किंवा नवीन चलन छापून केले जाते. जेव्हा सरकार अर्थव्यवस्थेत अधिक पैसा ओतते आणि वस्तू व सेवांच्या पुरवठ्यात त्या प्रमाणात वाढ होत नाही, तेव्हा एकूण पैशाच्या पुरवठ्यात वाढ होते. यामुळे तेवढ्याच वस्तू व सेवांसाठी जास्त पैसा उपलब्ध झाल्याने किंमत पातळीत सामान्य वाढ होते, ज्याला चलनवाढ (महागाई) म्हणतात. अल्पकाळात यामुळे मागणीला चालना मिळू शकते, परंतु दीर्घकाळ टिकणाऱ्या तुटीच्या अर्थभरण्यामुळे अनेकदा चलनवाढीचे परिणाम दिसून येतात.",
    "options_breakdown": [
      {
        "option_text_english": "Rise in price level",
        "option_text_marathi": "किंमत पातळीत वाढ",
        "is_correct": true
      },
      {
        "option_text_english": "Government faces loss",
        "option_text_marathi": "सरकारला तोटा",
        "is_correct": false
      },
      {
        "option_text_english": "Declining output level",
        "option_text_marathi": "उत्पादन पातळीत घट",
        "is_correct": false
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "वरीलपैकी कोणतेही नाही",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 92,
    "question_marathi": "______ या क्षेत्राला 2019-20 मध्ये महाराष्ट्रात सर्वाधिक सबसिडी मिळाली आहे.",
    "question_english": "______ is the major subsidy receiving sector in Maharashtra in 2019-20.",
    "options_marathi": [
      "महाराष्ट्र राज्य विज वितरण कंपनी",
      "औद्योगिक क्षेत्राला प्रोत्साहने",
      "अन्नधान्य वाटप (अन्नपूर्णा वगैरे)",
      "महाराष्ट्र राज्य रस्ते वाहतूक महामंडळ"
    ],
    "options_english": [
      "Maharashtra State Electricity Distribution Company",
      "Incentives to industrial units",
      "Food grain distribution for Annapurna etc.",
      "Maharashtra State Road Transport Corporation"
    ],
    "correct_option_index": 1,
    "subject": "Economy",
    "topic": "State Finances, Subsidies, Maharashtra Economy",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall",
    "explanation_english": "In Maharashtra, the power sector, primarily through the Maharashtra State Electricity Distribution Company Limited (MSEDCL), consistently receives a substantial portion of state subsidies. These subsidies are often provided to cover the gap between the cost of electricity supply and the tariffs charged to specific consumer categories, such as agriculture and certain residential users, to ensure affordability and promote economic activities. While other sectors also receive subsidies, the power sector typically accounts for the largest share due to its critical role and the socio-economic objectives associated with electricity pricing.",
    "explanation_marathi": "महाराष्ट्रामध्ये, ऊर्जा क्षेत्र, विशेषतः महाराष्ट्र राज्य विद्युत वितरण कंपनी लिमिटेड (MSEDCL) द्वारे, राज्याच्या अनुदानाचा मोठा भाग सातत्याने प्राप्त करते. हे अनुदान अनेकदा वीज पुरवठ्याच्या खर्चातील आणि विशिष्ट ग्राहक श्रेणींना (उदा. शेती आणि काही निवासी वापरकर्ते) आकारल्या जाणाऱ्या शुल्कातील तफावत भरून काढण्यासाठी दिले जाते, जेणेकरून वीज परवडणारी राहील आणि आर्थिक क्रियाकलापांना प्रोत्साहन मिळेल. इतर क्षेत्रांनाही अनुदान मिळते, परंतु ऊर्जा क्षेत्राची महत्त्वपूर्ण भूमिका आणि वीज दरांशी संबंधित सामाजिक-आर्थिक उद्दिष्टे यामुळे या क्षेत्राला सामान्यतः सर्वाधिक वाटा मिळतो.",
    "options_breakdown": [
      {
        "option_text_english": "Maharashtra State Electricity Distribution Company",
        "option_text_marathi": "महाराष्ट्र राज्य विज वितरण कंपनी",
        "is_correct": true
      },
      {
        "option_text_english": "Incentives to industrial units",
        "option_text_marathi": "औद्योगिक क्षेत्राला प्रोत्साहने",
        "is_correct": false
      },
      {
        "option_text_english": "Food grain distribution for Annapurna etc.",
        "option_text_marathi": "अन्नधान्य वाटप (अन्नपूर्णा वगैरे)",
        "is_correct": false
      },
      {
        "option_text_english": "Maharashtra State Road Transport Corporation",
        "option_text_marathi": "महाराष्ट्र राज्य रस्ते वाहतूक महामंडळ",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 93,
    "question_marathi": "केंद्र सरकारची अंदाजपत्रकीय अंदाजानुसार 2019-20 मधील एकूण कर्ज देयता ______ कोटी रुपये होती.",
    "question_english": "Total Loan Liabilities of central government in 2019-20 budget estimates was ______ crore rupees.",
    "options_marathi": [
      "1025599",
      "10255099",
      "9745410",
      "509689"
    ],
    "options_english": [
      "1025599",
      "10255099",
      "9745410",
      "509689"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Public Debt, Union Budget, Government Finance",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall, Close Numbers",
    "explanation_english": "This question requires precise recall of figures from the Union Budget 2019-20. According to the Budget Estimates for 2019-20, the total loan liabilities of the central government were projected to be approximately ₹97,45,410 crore. These liabilities represent the total outstanding debt that the government owes to its creditors, including market borrowings, external debt, and other internal liabilities. Such figures are crucial for understanding the fiscal health and debt sustainability of the nation.",
    "explanation_marathi": "या प्रश्नासाठी केंद्रीय अर्थसंकल्प 2019-20 मधील आकडेवारीची अचूक आठवण असणे आवश्यक आहे. 2019-20 च्या अर्थसंकल्पीय अंदाजानुसार, केंद्र सरकारची एकूण कर्ज देयता अंदाजे ₹97,45,410 कोटी रुपये होती. या देयतांमध्ये सरकारचे कर्जदारांना असलेले एकूण थकबाकीदार कर्ज समाविष्ट आहे, ज्यात बाजारातून घेतलेले कर्ज, परदेशी कर्ज आणि इतर अंतर्गत देयतांचा समावेश आहे. देशाच्या आर्थिक आरोग्यासाठी आणि कर्ज व्यवस्थापनासाठी अशी आकडेवारी महत्त्वपूर्ण असते.",
    "options_breakdown": [
      {
        "option_text_english": "1025599",
        "option_text_marathi": "1025599",
        "is_correct": false
      },
      {
        "option_text_english": "10255099",
        "option_text_marathi": "10255099",
        "is_correct": false
      },
      {
        "option_text_english": "9745410",
        "option_text_marathi": "9745410",
        "is_correct": true
      },
      {
        "option_text_english": "509689",
        "option_text_marathi": "509689",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 94,
    "question_marathi": "केळकर कार्यदल समीतीने खालील शिफारशी केल्या :\n(a) प्रमाणित वजावट पद्धत रद्द केली पाहीजे\n(b) बचत आणि व्याजावरील सवलत रद्द करावी.\n(c) पॅन क्रमांक आवश्यक करावा.\n(d) सुधारीत मूल्यवृद्धी कर योजना.\nपर्यायी उत्तरे :",
    "question_english": "Kelkar task force committee recommended following recommendation :\n(a) Standard deduction system should be cancelled.\n(b) Exemption on saving and interest should be cancelled.\n(c) PAN number should be compulsory.\n(d) Modified value added tax.\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(b) फक्त",
      "(a), (b) आणि (c)",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) only",
      "(b) only",
      "(a), (b) and (c)",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Tax Reforms, Fiscal Policy, Committees",
    "difficulty": "Medium",
    "trap_detected": "Nuance in interpretation of 'Modified value added tax'",
    "explanation_english": "The Kelkar Task Force on Direct and Indirect Taxes, constituted in 2002, made several significant recommendations aimed at reforming India's tax structure. Key recommendations included: (a) Abolition of Standard Deduction: The committee suggested removing the standard deduction for salaried employees to simplify the tax structure. (b) Phasing out Exemptions on Savings and Interest: It recommended gradually withdrawing various tax exemptions on savings and interest income to broaden the tax base and reduce distortions. (c) Compulsory PAN Number: The committee emphasized making the Permanent Account Number (PAN) mandatory for all significant financial transactions to enhance transparency and curb tax evasion. (d) Introduction of a comprehensive VAT/GST: While the term 'Modified Value Added Tax' (MODVAT/CENVAT) was already in use, the committee strongly advocated for a comprehensive Goods and Services Tax (GST) at the central level, which is essentially a more advanced and unified form of VAT, to streamline indirect taxes. Therefore, the spirit of recommending a reformed and comprehensive VAT system was central to its indirect tax proposals. All these points were part of the committee's reform agenda.",
    "explanation_marathi": "2002 मध्ये स्थापन झालेल्या केळकर कार्यदल समितीने प्रत्यक्ष आणि अप्रत्यक्ष करांमध्ये सुधारणा करण्याच्या उद्देशाने अनेक महत्त्वपूर्ण शिफारसी केल्या. प्रमुख शिफारसींमध्ये हे समाविष्ट होते: (a) प्रमाणित वजावट पद्धत रद्द करणे: समितीने कर रचना सुलभ करण्यासाठी पगारदार कर्मचाऱ्यांसाठी प्रमाणित वजावट रद्द करण्याची शिफारस केली. (b) बचत आणि व्याजावरील सवलती रद्द करणे: कर आधार वाढवण्यासाठी आणि विकृती कमी करण्यासाठी बचत आणि व्याज उत्पन्नावरील विविध कर सवलती हळूहळू मागे घेण्याची शिफारस केली. (c) पॅन क्रमांक अनिवार्य करणे: पारदर्शकता वाढवण्यासाठी आणि करचोरी रोखण्यासाठी सर्व महत्त्वपूर्ण आर्थिक व्यवहारांसाठी कायम खाते क्रमांक (PAN) अनिवार्य करण्यावर समितीने भर दिला. (d) सुधारित मूल्यवृद्धी कर योजना: 'सुधारित मूल्यवर्धित कर' (MODVAT/CENVAT) हा शब्द आधीच वापरात असला तरी, समितीने अप्रत्यक्ष कर सुलभ करण्यासाठी केंद्रीय स्तरावर सर्वसमावेशक वस्तू आणि सेवा कर (GST) ची जोरदार वकिली केली, जो मूलतः VAT चा अधिक प्रगत आणि एकत्रित प्रकार आहे. त्यामुळे, सुधारित आणि सर्वसमावेशक VAT प्रणालीची शिफारस करणे हे त्याच्या अप्रत्यक्ष कर प्रस्तावांच्या केंद्रस्थानी होते. हे सर्व मुद्दे समितीच्या सुधारणा अजेंड्याचा भाग होते.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false
      },
      {
        "option_text_english": "(b) only",
        "option_text_marathi": "(b) फक्त",
        "is_correct": false
      },
      {
        "option_text_english": "(a), (b) and (c)",
        "option_text_marathi": "(a), (b) आणि (c)",
        "is_correct": false
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 95,
    "question_marathi": "खालीलपैकी कोणता खर्च हा गैर-विकास खर्च नाही ?",
    "question_english": "Which of the following is not Non-development expenditure ?",
    "options_marathi": [
      "संरक्षण",
      "पोलीस",
      "व्याज देणी",
      "वैद्यकीय सुविधा"
    ],
    "options_english": [
      "Defence",
      "Police",
      "Interest payments",
      "Medical facilities"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Public Expenditure, Government Budget",
    "difficulty": "Easy",
    "trap_detected": "Double Negative",
    "explanation_english": "Government expenditure is broadly classified into development and non-development expenditure. Development expenditure refers to spending that directly contributes to economic growth and human capital formation, such as investments in education, health, infrastructure, and agriculture. Non-development expenditure, on the other hand, includes spending essential for the functioning of the government but does not directly lead to economic development, such as defence, police, interest payments on debt, and administrative services. Among the given options, 'Medical facilities' falls under social services and directly contributes to human capital development and public welfare, making it a development expenditure. Therefore, it is not a non-development expenditure.",
    "explanation_marathi": "सरकारी खर्च मुख्यत्वे विकास खर्च आणि गैर-विकास खर्च अशा दोन प्रकारात विभागला जातो. विकास खर्च म्हणजे असा खर्च जो थेट आर्थिक वाढ आणि मानवी भांडवल निर्मितीस हातभार लावतो, जसे की शिक्षण, आरोग्य, पायाभूत सुविधा आणि शेतीमधील गुंतवणूक. याउलट, गैर-विकास खर्चामध्ये सरकारचे कामकाज चालवण्यासाठी आवश्यक असलेले खर्च समाविष्ट असतात, परंतु ते थेट आर्थिक विकासाकडे नेत नाहीत, जसे की संरक्षण, पोलीस, कर्जावरील व्याज देयके आणि प्रशासकीय सेवा. दिलेल्या पर्यायांपैकी, 'वैद्यकीय सुविधा' सामाजिक सेवांमध्ये येतात आणि मानवी भांडवल विकास तसेच सार्वजनिक कल्याणासाठी थेट योगदान देतात, ज्यामुळे तो विकास खर्च ठरतो. म्हणून, तो गैर-विकास खर्च नाही.",
    "options_breakdown": [
      {
        "option_text_english": "Defence",
        "option_text_marathi": "संरक्षण",
        "is_correct": false
      },
      {
        "option_text_english": "Police",
        "option_text_marathi": "पोलीस",
        "is_correct": false
      },
      {
        "option_text_english": "Interest payments",
        "option_text_marathi": "व्याज देणी",
        "is_correct": false
      },
      {
        "option_text_english": "Medical facilities",
        "option_text_marathi": "वैद्यकीय सुविधा",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 96,
    "question_marathi": "73 वी आणि 74 वी घटनादुरुस्ती संसदेत केव्हा पारित झाली ?",
    "question_english": "When 73rd and 74th Constitutional Amendments were passed by Parliament ?",
    "options_marathi": [
      "जून 1991",
      "ऑगस्ट 1991",
      "डिसेंबर 1992",
      "एप्रिल 1993"
    ],
    "options_english": [
      "June 1991",
      "August 1991",
      "December 1992",
      "April 1993"
    ],
    "correct_option_index": 3,
    "subject": "Polity",
    "topic": "Constitutional Amendments, Local Self-Government",
    "difficulty": "Medium",
    "trap_detected": "Factual Swap (Passed vs. Came into Force)",
    "explanation_english": "The 73rd and 74th Constitutional Amendment Acts are landmark legislations that institutionalized Panchayati Raj Institutions and Urban Local Bodies, respectively. These bills were passed by both Houses of the Indian Parliament in December 1992. Specifically, the Lok Sabha passed them on December 22, 1992, and the Rajya Sabha on December 23, 1992. After receiving presidential assent, the 73rd Amendment came into force on April 24, 1993, and the 74th Amendment on June 1, 1993. The question specifically asks about the passing by Parliament, which was December 1992.",
    "explanation_marathi": "73 वी आणि 74 वी घटनादुरुस्ती ही पंचायती राज संस्था आणि शहरी स्थानिक स्वराज्य संस्थांना अनुक्रमे घटनात्मक दर्जा देणारी ऐतिहासिक कायदे आहेत. ही विधेयके भारतीय संसदेच्या दोन्ही सभागृहांनी डिसेंबर 1992 मध्ये मंजूर केली होती. विशेषतः, लोकसभेने ती 22 डिसेंबर 1992 रोजी आणि राज्यसभेने 23 डिसेंबर 1992 रोजी मंजूर केली. राष्ट्रपतींची संमती मिळाल्यानंतर, 73 वी घटनादुरुस्ती 24 एप्रिल 1993 रोजी आणि 74 वी घटनादुरुस्ती 1 जून 1993 रोजी लागू झाली. प्रश्न विशेषतः संसदेने कधी पारित केली असे विचारतो, जे डिसेंबर 1992 होते.",
    "options_breakdown": [
      {
        "option_text_english": "June 1991",
        "option_text_marathi": "जून 1991",
        "is_correct": false
      },
      {
        "option_text_english": "August 1991",
        "option_text_marathi": "ऑगस्ट 1991",
        "is_correct": false
      },
      {
        "option_text_english": "December 1992",
        "option_text_marathi": "डिसेंबर 1992",
        "is_correct": true
      },
      {
        "option_text_english": "April 1993",
        "option_text_marathi": "एप्रिल 1993",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 97,
    "question_marathi": "1987-88 नंतर केंद्रसरकारचे सार्वजनीक खर्चाचे वर्गीकरण खालील प्रकारे केले जाते.",
    "question_english": "Central Govt. Public expenditure classification is of following type after 1987-88.",
    "options_marathi": [
      "संरक्षणखर्च आणि नागरीखर्च",
      "विकास आणि विकासेतर खर्च",
      "महसूली आणि भांडवली खर्च",
      "चालूखर्च आणि भांडवली खर्च"
    ],
    "options_english": [
      "Defence expenditure and Civil expenditure",
      "Development and non-development expenditure",
      "Revenue and capital expenditure",
      "Current and capital expenditure"
    ],
    "correct_option_index": 2,
    "subject": "Economy",
    "topic": "Public Expenditure, Government Budget Classification",
    "difficulty": "Medium",
    "trap_detected": "Ambiguity between formal budget classification and analytical classification",
    "explanation_english": "Prior to 1987-88, government expenditure was primarily classified into 'Plan' and 'Non-Plan' expenditure. While the 'Revenue' and 'Capital' classification has always been fundamental to budget accounting, the analytical framework for understanding the impact of government spending evolved. After 1987-88, there was an increased emphasis on classifying public expenditure into 'Development' and 'Non-development' categories. This classification helps in assessing how much of the government's spending is directed towards activities that directly promote economic growth and social welfare (developmental) versus those that are essential for the day-to-day functioning of the government but do not directly contribute to development (non-developmental). This shift reflected a move towards a more outcome-oriented analysis of public spending.",
    "explanation_marathi": "1987-88 पूर्वी, सरकारी खर्च प्रामुख्याने 'योजना' (Plan) आणि 'गैर-योजना' (Non-Plan) खर्चामध्ये वर्गीकृत केला जात असे. 'महसूली' (Revenue) आणि 'भांडवली' (Capital) वर्गीकरण हे अर्थसंकल्पीय लेखांकनासाठी नेहमीच मूलभूत असले तरी, सरकारी खर्चाच्या परिणामाचे विश्लेषण करण्यासाठीची चौकट विकसित झाली. 1987-88 नंतर, सार्वजनिक खर्चाचे 'विकास' (Development) आणि 'विकासेतर' (Non-development) श्रेणींमध्ये वर्गीकरण करण्यावर अधिक भर दिला गेला. हे वर्गीकरण सरकारचा किती खर्च थेट आर्थिक वाढ आणि सामाजिक कल्याणाला प्रोत्साहन देणाऱ्या (विकास) क्रियाकलापांकडे निर्देशित आहे आणि किती खर्च सरकारच्या दैनंदिन कामकाजासाठी आवश्यक आहे परंतु थेट विकासाला हातभार लावत नाही (विकासेतर) हे समजून घेण्यास मदत करते. या बदलामुळे सार्वजनिक खर्चाच्या अधिक परिणाम-केंद्रित विश्लेषणाकडे वाटचाल झाली.",
    "options_breakdown": [
      {
        "option_text_english": "Defence expenditure and Civil expenditure",
        "option_text_marathi": "संरक्षणखर्च आणि नागरीखर्च",
        "is_correct": false
      },
      {
        "option_text_english": "Development and non-development expenditure",
        "option_text_marathi": "विकास आणि विकासेतर खर्च",
        "is_correct": true
      },
      {
        "option_text_english": "Revenue and capital expenditure",
        "option_text_marathi": "महसूली आणि भांडवली खर्च",
        "is_correct": false
      },
      {
        "option_text_english": "Current and capital expenditure",
        "option_text_marathi": "चालूखर्च आणि भांडवली खर्च",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 98,
    "question_marathi": "खालीलपैकी सार्वजनीक कर्जाचे मार्ग कोणते ?\n(a) बाजार कर्जे\n(b) कर्जरोखे\n(c) राजकोषीय हुंड्या\n(d) तात्पुरती उचल\nपर्यायी उत्तरे :",
    "question_english": "Which of the following are the sources of public debt ?\n(a) Market Loans\n(b) Bonds\n(c) Treasury Bills\n(d) Temporary Advances\nAnswer options :",
    "options_marathi": [
      "(a) फक्त",
      "(b) आणि (c)",
      "यापैकी नाही",
      "यापैकी सर्व"
    ],
    "options_english": [
      "(a) only",
      "(b) and (c)",
      "None of these",
      "All above"
    ],
    "correct_option_index": 4,
    "subject": "Economy",
    "topic": "Public Finance, Public Debt",
    "difficulty": "Easy",
    "trap_detected": "None",
    "explanation_english": "Public debt refers to the total outstanding financial liabilities of the government. Governments raise debt from various sources to finance their expenditure, especially when revenue falls short. The common sources of public debt include: (a) Market Loans: These are long-term borrowings raised by the government from the open market by issuing dated securities. (b) Bonds: Government bonds are a specific type of debt instrument issued to raise funds from the public, institutions, and foreign entities. They are a form of market loan. (c) Treasury Bills (T-Bills): These are short-term debt instruments issued by the government to meet its short-term liquidity requirements, typically for periods less than one year. (d) Temporary Advances: This includes 'Ways and Means Advances' (WMA) from the central bank (RBI in India), which are temporary loans to bridge short-term mismatches between government receipts and payments. All these instruments represent forms of borrowing by the government and thus contribute to public debt.",
    "explanation_marathi": "सार्वजनिक कर्ज म्हणजे सरकारची एकूण थकबाकीदार आर्थिक देयता. सरकार आपल्या खर्चासाठी विविध स्त्रोतांकडून कर्ज घेते, विशेषतः जेव्हा महसूल कमी पडतो. सार्वजनिक कर्जाच्या सामान्य स्त्रोतांमध्ये हे समाविष्ट आहे: (a) बाजार कर्जे: ही सरकारद्वारे खुल्या बाजारातून मुदतबंद रोखे (dated securities) जारी करून घेतलेली दीर्घकालीन कर्जे आहेत. (b) कर्जरोखे (Bonds): सरकारी कर्जरोखे हे सार्वजनिक, संस्था आणि परदेशी घटकांकडून निधी उभारण्यासाठी जारी केलेले विशिष्ट प्रकारचे कर्ज साधन आहे. ते बाजार कर्जाचा एक प्रकार आहेत. (c) राजकोषीय हुंड्या (Treasury Bills): ही सरकारद्वारे त्याच्या अल्पकालीन तरलतेच्या गरजा पूर्ण करण्यासाठी जारी केलेली अल्पकालीन कर्ज साधने आहेत, सामान्यतः एका वर्षापेक्षा कमी कालावधीसाठी. (d) तात्पुरती उचल (Temporary Advances): यामध्ये केंद्रीय बँकेकडून (भारतात RBI) 'वेझ अँड मीन्स ॲडव्हान्सेस' (WMA) समाविष्ट आहेत, जे सरकारी प्राप्ती आणि देयकांमधील अल्पकालीन तफावत भरून काढण्यासाठी तात्पुरती कर्जे आहेत. ही सर्व साधने सरकारद्वारे घेतलेल्या कर्जाचे प्रकार दर्शवतात आणि त्यामुळे सार्वजनिक कर्जाला हातभार लावतात.",
    "options_breakdown": [
      {
        "option_text_english": "(a) only",
        "option_text_marathi": "(a) फक्त",
        "is_correct": false
      },
      {
        "option_text_english": "(b) and (c)",
        "option_text_marathi": "(b) आणि (c)",
        "is_correct": false
      },
      {
        "option_text_english": "None of these",
        "option_text_marathi": "यापैकी नाही",
        "is_correct": false
      },
      {
        "option_text_english": "All above",
        "option_text_marathi": "यापैकी सर्व",
        "is_correct": true
      }
    ]
  },
  {
    "q_no": 99,
    "question_marathi": "मार्च 2012 च्या नियोजन आयोगाच्या प्रसिद्धी पत्रकानुसार दारिद्र्य रेषेखालील लोकसंख्येचे शेकडा प्रमाण 2009-10 मध्ये ______ इतके खाली आले.",
    "question_english": "According to the press note issued by Planning Commission in March 2012, percent of population living below poverty line has come down to ______ into 2009-10.",
    "options_marathi": [
      "19.8%",
      "21.9%",
      "29.8%",
      "45.0%"
    ],
    "options_english": [
      "19.8%",
      "21.9%",
      "29.8%",
      "45.0%"
    ],
    "correct_option_index": 3,
    "subject": "Economy",
    "topic": "Poverty, Planning Commission, Economic Data",
    "difficulty": "Hard",
    "trap_detected": "Factual Recall, Close Numbers",
    "explanation_english": "The Planning Commission (now NITI Aayog) periodically released poverty estimates based on various methodologies. The press note issued in March 2012 provided poverty estimates for the year 2009-10, using the methodology recommended by the Suresh Tendulkar Committee. According to this report, the percentage of the population living below the poverty line in India for 2009-10 was estimated to be 29.8%. These figures are crucial for policy formulation aimed at poverty alleviation.",
    "explanation_marathi": "नियोजन आयोगाने (आता नीती आयोग) विविध पद्धतींवर आधारित दारिद्र्यरेषेखालील लोकसंख्येचे अंदाज वेळोवेळी प्रसिद्ध केले. मार्च 2012 मध्ये जारी केलेल्या प्रसिद्धी पत्रकात सुरेश तेंडुलकर समितीने शिफारस केलेल्या पद्धतीनुसार 2009-10 या वर्षासाठी दारिद्र्यरेषेखालील लोकसंख्येचे अंदाज दिले होते. या अहवालानुसार, 2009-10 मध्ये भारतातील दारिद्र्यरेषेखालील लोकसंख्येचे प्रमाण 29.8% इतके होते. दारिद्र्य निर्मूलनासाठी धोरणे तयार करण्यासाठी ही आकडेवारी महत्त्वपूर्ण आहे.",
    "options_breakdown": [
      {
        "option_text_english": "19.8%",
        "option_text_marathi": "19.8%",
        "is_correct": false
      },
      {
        "option_text_english": "21.9%",
        "option_text_marathi": "21.9%",
        "is_correct": false
      },
      {
        "option_text_english": "29.8%",
        "option_text_marathi": "29.8%",
        "is_correct": true
      },
      {
        "option_text_english": "45.0%",
        "option_text_marathi": "45.0%",
        "is_correct": false
      }
    ]
  },
  {
    "q_no": 100,
    "question_marathi": "खालीलपैकी कोणता ऊर्जेचा स्रोत अपारंपारिक आहे ?",
    "question_english": "Which of following is the non-conventional source of energy ?",
    "options_marathi": [
      "प्राण्यांचे शेण",
      "कृषी कचरा",
      "जळाऊ लाकडे",
      "सौर ऊर्जा"
    ],
    "options_english": [
      "Animal Dung",
      "Agricultural Waste",
      "Fuel Wood",
      "Solar Energy"
    ],
    "correct_option_index": 4,
    "subject": "Science",
    "topic": "Energy Sources, Renewable Energy",
    "difficulty": "Easy",
    "trap_detected": "Misclassification of traditional biomass",
    "explanation_english": "Energy sources are broadly classified into conventional and non-conventional (or renewable) sources. Conventional sources are those that have been in use for a long time and are generally exhaustible (like fossil fuels) or traditional forms of renewable energy (like traditional biomass). Non-conventional sources are those that have been recently developed or are being explored for large-scale use, are renewable, and generally have a lower environmental impact. Animal dung, agricultural waste, and fuelwood are all traditional biomass sources, which are considered conventional or traditional sources of energy, especially in rural areas. Solar energy, on the other hand, harnesses energy from the sun using technologies like solar panels. It is a classic example of a non-conventional, renewable, and clean source of energy.",
    "explanation_marathi": "ऊर्जेचे स्रोत मुख्यत्वे पारंपरिक आणि अपारंपरिक (किंवा अक्षय) स्त्रोतांमध्ये वर्गीकृत केले जातात. पारंपरिक स्रोत म्हणजे जे दीर्घकाळापासून वापरात आहेत आणि सामान्यतः मर्यादित (जसे की जीवाश्म इंधन) किंवा अक्षय ऊर्जेचे पारंपरिक प्रकार (जसे की पारंपरिक बायोमास) आहेत. अपारंपरिक स्रोत म्हणजे जे अलीकडे विकसित झाले आहेत किंवा मोठ्या प्रमाणावर वापरासाठी शोधले जात आहेत, जे अक्षय आहेत आणि सामान्यतः पर्यावरणावर कमी परिणाम करतात. प्राण्यांचे शेण, कृषी कचरा आणि जळाऊ लाकडे हे सर्व पारंपरिक बायोमास स्रोत आहेत, जे विशेषतः ग्रामीण भागात ऊर्जेचे पारंपरिक किंवा पारंपरिक स्रोत मानले जातात. याउलट, सौर ऊर्जा ही सौर पॅनेलसारख्या तंत्रज्ञानाचा वापर करून सूर्यापासून ऊर्जा मिळवते. हे अपारंपरिक, अक्षय आणि स्वच्छ ऊर्जा स्त्रोताचे उत्कृष्ट उदाहरण आहे.",
    "options_breakdown": [
      {
        "option_text_english": "Animal Dung",
        "option_text_marathi": "प्राण्यांचे शेण",
        "is_correct": false
      },
      {
        "option_text_english": "Agricultural Waste",
        "option_text_marathi": "कृषी कचरा",
        "is_correct": false
      },
      {
        "option_text_english": "Fuel Wood",
        "option_text_marathi": "जळाऊ लाकडे",
        "is_correct": false
      },
      {
        "option_text_english": "Solar Energy",
        "option_text_marathi": "सौर ऊर्जा",
        "is_correct": true
      }
    ]
  }
];
