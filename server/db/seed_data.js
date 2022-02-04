use code_info;
db.dropDatabase();

db.language.insertMany([
{
    "title": "HTML",
    "name": "HyperText Markup Language",
    "description": "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).'Hypertext' refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.",
    "links": {
       "mdn": "https://developer.mozilla.org/en-US/docs/Web/HTML",
       "wikipedia": "https://en.wikipedia.org/wiki/HTML",   
       "codecademy": "https://www.codecademy.com/learn/learn-html"
    }
    ,
    "examples": "HTML uses 'markup' to annotate text, images, and other content for display in a Web browser. HTML markup includes special 'elements' such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.",
    "video": {
       "youtube": "https://www.youtube.com/watch?v=9p-YLfGWC68",
       "youtube_id": "9p-YLfGWC68"
    },
    "image": {
        "background": "https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg.webp",
        "basic": "https://www.howtogeek.com/wp-content/uploads/2021/09/html-text-computer.png?trim=1,1&bg-color=000&pad=1,1"
    }
},
{
    "title": "CSS",
    "name": 'Cascading Style Sheets',
    "description": "CSS is used for defining the styles for web pages. It describes the look and formatting of a document which is written in a markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.",
    "links": 
        "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "examples" : "CSS is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.",
    "picture": "https://uwaterloo.ca/arts-computing-newsletter/sites/ca.arts-computing-newsletter/files/styles/wide-body-750px-wide/public/uploads/images/html-vs-css-difference-funny-min.png?itok=iASv-Ysz", 
    "video": {
        "youtube_1": "https://youtu.be/XPv4EeB0PJ8",
        "youtube_2": "https://youtu.be/1Rs2ND1ryYc"
    }
},
{
    "title": "JS",
    "name": "JavaScript",
    "description": "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",
    "links": {
       "mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
       "w3schools": "https://www.w3schools.com/js/js_intro.asp",
       "wikipedia": "https://en.wikipedia.org/wiki/JavaScript",
    },
    "examples": "JavaScript works with many standard objects, expressions, operators and functions to create web pages and make them interactive. ",
    "video": {
        "youtube": "https://www.youtube.com/watch?v=vEROU2XtPR8",
    },
    "image": {
        "javascriptimage": "https://dvg5hr78c8hf1.cloudfront.net/2016/06/17/13/45/01/cc2fac88-2f81-4cc5-9ec9-334042781fd0/1*OsjnQFK1i6CkjXQmTErAtw.jpeg"
    }
}
]);
