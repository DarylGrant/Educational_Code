use quiz_info;
db.dropDatabase();

db.questions.insertMany([
    {
        quizName:"HTMLBasics",
        title: "HTML Basics",
        description: "This quiz will test your knowledge on the basics of html.",
        completedHtml:
          "<div><h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4></div> <br> <button onclick=window.location.href='/test/html'>Have another go</button> <br> <div><h4>Please select a new topic or quiz from the navigation bar at the top.</h4></div>",
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
        description: "This quiz will test your knowledge on the basics of html.",
        completedHtml:
          "<div><h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4></div> <br> <button onclick=window.location.href='/test/html'>Have another go</button> <br> <div><h4>Please select a new topic or quiz from the navigation bar at the top.</h4></div>",
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
      }
    ]);
