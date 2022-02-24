use quiz_info;
db.dropDatabase();

db.questions.insertMany([
    {
        quizName:"HTMLBasics",
        title: "HTML Basics",
        description: "This quiz will test your knowledge on the basics of html.",
        completedHtml:
          "<div><h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4></div> <br> <button onclick=window.location.href='/test/htmlbasics'>Have another go</button> <br> <div><h4>Please select a new topic or quiz from the navigation bar at the top.</h4></div>",
        pages: [
          {
            name: "page1",
            elements: [
              {
                type: "html",
                name: "startpage",
                html: "You are about to start quiz about html. <br/>You have 60 seconds for every page and 5 minutes for the whole quiz of 5 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready.",
              },
            ],
          },
          {
            name: "page2",
            elements: [
              {
                type: "radiogroup",
                name: "hyperlinktag",
                title:
                  "What is the correct tag to use when creating a link to another page?",
                correctAnswer: "<a></a>",
                choices: ["<a></a>", "<br>", "<img>", "<hr>"],
                choicesOrder: "random",
              },
            ],
          },
          {
            name: "page3",
            elements: [
              {
                type: "radiogroup",
                name: "imgtag",
                title:
                  "What is the correct tag to use when adding a picture to the page?",
                correctAnswer: "<img>",
                choices: ["<a></a>", "<img>", "<hr>", "<br>"],
                choicesOrder: "random",
              },
            ],
          },
          {
            name: "page4",
            elements: [
              {
                type: "radiogroup",
                name: "breaktag",
                title:
                  "What is the correct tag to use when inserting a break to the page?",
                correctAnswer: "<br>",
                choices: ["<a></a>", "<br>", "<hr>", "<img>"],
                choicesOrder: "random",
              },
            ],
            maxTimeToFinish: 15,
          },
        ],
        showProgressBar: "bottom",
        startSurveyText: "Start Quiz",
        firstPageIsStarted: true,
        maxTimeToFinish: 300,
        maxTimeToFinishPage: 60,
        showTimerPanel: "top",
        widthMode: "responsive",
      },
    {
        quizName:"CSSBasics",
        title: "CSS Basics",
        description: "This quiz will test your knowledge on the basics of css.",
        completedHtml:
          "<div><h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4></div> <br> <button onclick=window.location.href='/test/cssbasics'>Have another go</button> <br> <div><h4>Please select a new topic or quiz from the navigation bar at the top.</h4></div>",
        pages: [
            {
            "name": "page1",
            "elements": [
                {
                "type": "html",
                "name": "startpage",
                "html": "You are about to start quiz about css. <br/>You have 60 seconds for every page and 5 minutes for the whole quiz of 5 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
            },
          {
            "name": "page2",
            "elements": [
             {
              "type": "radiogroup",
              "name": "css",
              "title": "What does CSS stand for?",
              "correctAnswer": "Cascading Style Sheets",
              "choices": [
               "Cascading Style Sheets",
               "Colourful Style Sheets",
               "Component Style Sheets",
               "Computer Style Sheets"
              ],
              "choicesOrder": "random"
             }
            ]
           },
           {
            "name": "page3",
            "elements": [
             {
              "type": "radiogroup",
              "name": "intstyle",
              "title": "Which HTML tag is used to define an internal style sheet?",
              "correctAnswer": "<style>",
              "choices": [
               "<script>",
               "<style>",
               "<css>"
              ],
              "choicesOrder": "random"
             }
            ]
           },
           {
            "name": "page4",
            "elements": [
             {
              "type": "radiogroup",
              "name": "breaktag",
              "title": "Which property is used to change the background color?",
              "correctAnswer": "background-color",
              "choices": [
               "background-color",
               "bgcolor",
               "color"
              ],
              "choicesOrder": "random"
             }
            ],
            "maxTimeToFinish": 15
           },
           {
            "name": "page5",
            "elements": [
             {
              "type": "radiogroup",
              "name": "fontquestion",
              "title": "Which property is used to change the font of an element?",
              "correctAnswer": "font-family",
              "choices": [
               "font-family",
               "font-weight",
               "font-style"
              ],
              "choicesOrder": "random"
             }
            ]
           },
           {
            "name": "page6",
            "elements": [
             {
              "type": "radiogroup",
              "name": "question1",
              "title": "How do you make the text bold?",
              "correctAnswer": "font-family",
              "choices": [
               {
                "value": "font-family",
                "text": "font:bold;"
               },
               {
                "value": "font-weight",
                "text": "style:bold;"
               },
               {
                "value": "font-style",
                "text": "font-weight:bold;"
               }
              ],
              "choicesOrder": "random"
             }
            ]
           }
          ],
          "showProgressBar": "bottom",
          "startSurveyText": "Start Quiz",
          "firstPageIsStarted": true,
          "maxTimeToFinish": 300,
          "maxTimeToFinishPage": 60,
          "showTimerPanel": "top",
          "widthMode": "responsive"
         },
    {
        quizName:"JSBasics",
        title: "JS Basics",
        description: "This quiz will test your knowledge on the basics of javascript.",
        completedHtml:
          "<div><h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4></div> <br> <button onclick=window.location.href='/test/jsbasics'>Have another go</button> <br> <div><h4>Please select a new topic or quiz from the navigation bar at the top.</h4></div>",
          "pages": [
            {
             "name": "page1",
             "elements": [
              {
               "type": "html",
               "name": "startpage",
               "html": "You are about to start quiz about javascript. <br/>You have 60 seconds for every page and 5 minutes for the whole quiz of 5 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
              }
             ]
            },
            {
             "name": "page2",
             "elements": [
              {
               "type": "radiogroup",
               "name": "jshtml",
               "title": "Inside which HTML element do we put the JavaScript?",
               "correctAnswer": "<script>",
               "choices": [
                "<script>",
                "<style>",
                "<javascript>",
                "<js>"
               ],
               "choicesOrder": "random"
              }
             ]
            },
            {
             "name": "page3",
             "elements": [
              {
               "type": "radiogroup",
               "name": "function",
               "title": "How do you create a function in javascript?",
               "correctAnswer": "function myFunction()",
               "choices": [
                "function = myFunction()",
                "function myFunction()",
                "function: myFunction()"
               ],
               "choicesOrder": "random"
              }
             ]
            },
            {
             "name": "page4",
             "elements": [
              {
               "type": "radiogroup",
               "name": "ifstatement",
               "title": "How do you write an IF statement in javascript?",
               "correctAnswer": "if (i == 5)",
               "choices": [
                "if i = 5",
                "if i == 5 then",
                "if i = 5 then",
                "if (i == 5)"
               ],
               "choicesOrder": "random"
              }
             ],
             "maxTimeToFinish": 15
            },
            {
             "name": "page5",
             "elements": [
              {
               "type": "radiogroup",
               "name": "commentjs",
               "title": "Which one of these is a way to write a comment in a javascript file?",
               "correctAnswer": "//this is a comment",
               "choices": [
                "//this is a comment",
                "<!--this is a comment-->",
                "'this is a comment"
               ],
               "choicesOrder": "random"
              }
             ]
            },
            {
             "name": "page6",
             "elements": [
              {
               "type": "radiogroup",
               "name": "question1",
               "title": "What is the correct way to write a javascript array?",
               "correctAnswer": "let colors = [\"red\", \"green\", \"blue]",
               "choices": [
                "let colors = [\"red\", \"green\", \"blue]",
                "let colors = (\"red\", \"green\", \"blue)",
                "let colors = \"red\", \"green\", \"blue",
                "let colors = <\"red\", \"green\", \"blue>"
               ],
               "choicesOrder": "random"
              }
             ]
            }
           ],
           "showProgressBar": "bottom",
           "startSurveyText": "Start Quiz",
           "firstPageIsStarted": true,
           "maxTimeToFinish": 300,
           "maxTimeToFinishPage": 60,
           "showTimerPanel": "top",
           "widthMode": "responsive"
          }
    ]);




    
      