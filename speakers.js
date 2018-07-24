const chalk = require('chalk');
const fuzzy = require('fuzzy');

const speakers =  [{
	"name": "Clarissa Peterson",
	"title": "Code is Not Neutral: The Ethics of Web Development",
	"twitter": "clarissa",
	"bio": "Clarissa Peterson is a UX designer and web developer based in Calgary, Canada. She frequently speaks at tech and design conferences and also teaches in the web developer fast-track program at the Southern Alberta Institute of Technology (SAIT). Clarissa is an instructor for Lynda.com (LinkedIn Learning) and the author of Learning Responsive Web Design: A Beginner’s Guide (O’Reilly Media).",
	"talk": "Are you responsible for the code you write? Ask the Volkswagen engineer who’s in prison for creating software that allowed their cars to “cheat” on emissions tests. Or think of the ethical issues if you’re programming IoT devices that spy on users and report back to the company. The technology we create affects people’s lives. We need to be aware of how much power we’ve been given and start taking responsibility for what we build."
},{
	"name": "Laurie Voss",
	"title": "npm and the Future of JavaScript",
	"twitter": "seldo",
	"bio": " I’ve been a web developer for 22 years and I’m currently the co-founder and COO of npm, Inc.. I care deeply about making the web bigger, better and accessible to everyone.",
	"talk": "npm started out as a back-end tool for node.js developers writing server-side applications, but has become the tool of choice for front-end developers writing rich web applications. More than 80% of npm users are writing front-end code! This was a big change, so npm 5 was a big change to meet the needs of this new type of user. Now with npm 6, we’re refining that focus. This talk covers best practices for npm 6, including ways to dramatically improve your build times, how to use our new security features, and talk about what’s coming up for npm. In the second half, I cover what npm knows about JavaScript developers based on our survey of over 16,000 developers, what that means for the future of JavaScript, and the tooling and language choices the data suggests you should make as a developer today."
},{
	"name": "Carmen Bourlon",
	"title": "At Your Service with Service Workers",
	"twitter": "carmalou",
	"bio": "Carmen Bourlon is a software developer in Oklahoma City, and frequent speaker at several local usergroups. Carmen’s projects include [Margie Map](http://carmalou.com/margie), a map to highlight income in relation to public internet access and a JavaScript blog(http://carmalou.com/).\nIn her spare time, Carmen trains in the ways of The Force, and protects Hyrule from the evil Ganondorf.",
	"talk": "This talk will focus on uses for service workers, with special focus on Offline First and intermittent connectivity. Intermittent internet connection is something many people in the United States face, and it’s a huge hurdle to complete simple tasks like finding a bank balance – or even more important tasks like searching for employment.\nIn a world divided by those who are connected, and those who aren’t, developers are in a unique position to help by writing apps with an Offline First focus. This particular talk focuses on using service workers to improve a user’s experience when connection is lost.\nService workers cache assets like HTML pages, pictures and even JavaScript files within the user’s browser. Once the assets are cached, the browser will load directly from the cache making the entire loading process faster. Even better, because the assets are already in the browser, the page will load without an Internet connection!\nThis talk will introduce service workers, explore use cases, and teach the audience how to implement service workers in their apps. We’ll also touch on other great features of service workers like background sync and push notifications."
},{
	"name": "Michael Chan",
	"title": "Hot Garbage: Clean Code is Dead",
	"twitter": "chantastic",
	"bio": "Michael is obsessed with essentialism and teaching. He’s a frontend architect at Planning Center and loves to teach React at reactpatterns.com. He adores his wife, two ridiculous kids, and ramen.",
	"talk": "Developers want to write better, faster, safer code. They want to do it quickly, consistently, and happily.\nThe problem is we’ve chosen the wrong tools. We obsess over the wrong metrics. We fetishize the structure and organization of the enemy with “clean code”. “Clean code” promised a future of fun and flexibility but results only in another master, vying for your precious time and attention.\nI’ve fought for “clean code” my 10 years as a developer. For 10 years I lost and kept losing to this monster I was creating. I was taking my team with me. Now I empower devs and designers in the war against “clean code”. I want developers and designers to win and keep winning.\nAfter identifying the enemy, I’ll demonstrate the shape a component takes when “clean code” is dogma. I’ll then write the same component as hot-garbage. I’ll show everyone how to create and compose in a way that prepares for the future but doesn’t bother to predict it.\nThe talk will be very practical and entertaining intro to a topic better known as “composite component design”."
},{
	"name": "Beth Haubert",
	"title": "WTF Are Serverless Apps? ¯\\_(ツ)_/¯",
	"twitter": "haubertdashery",
	"bio": "I’m a software engineer at [Flywheel](https://getflywheel.com), a web infrastructure startup in Omaha, Nebraska.\nI’m also a former airborne cryptologic linguist for the US Air Force, fluent in Mandarin. Things you can ask me about include programming, cats, board games, karaoke, and building applications that convert songs into auto-tuned cat meows. Things I’ll have to kill you if you ask me about: the airborne linguist part. Also, I like to make emojis look like they’re farting. 🐈💨",
	"talk": "The goal of this talk is to show a basic introduction to serverless web apps without needing knowledge of other unnecessary dependencies or advanced devops expertise.\nI’ll be using vanilla JavaScript and Netlify Functions (a simple, but powerful wrapper around AWS Lambda), to build Snowmaha, a simple web app that displays whether or not it is currently snowing in Omaha.\nYou can’t use Ajax to connect to a third-party api because of CORS (Cross-Origin Resource Scripting). This means that building Snowmaha using only JavaScript is impossible unless some server-side code handles the request to the third-party api. Someone with above-average devops knowledge could setup a Lamda function and enable CORS for your site, but most people aren’t interested in learning how to use AWS Lamda, and why should they be? It has a horribly complex UX! Netlify Functions simplifies the process and sets up CORS for you. Now your site can make an Ajax request through Functions to Lamda and all of a sudden developers that only know HTML, CSS, and JavaScript are building “serverless” applications with the power of server-side functionality."
},{
	"name": "Karl Groves",
	"title": "What Is This Thing and What Does It Do?",
	"twitter": "karlgroves",
	"bio": "An unstoppable force for change and thought-leader in an industry regarded for saying 'No,' Karl would rather lead by example in saying 'Yes, and here's how…' He seeks to offer solutions to complex problems relating to universal usability. He believes that together we can meet both our goals: your business goals and his goals to lead the way in accessible user experiences. Karl has over a decade of experience in doing IT consulting for the biggest companies in the world and biggest agencies in the U.S. government. Widely regarded as a pragmatic solution-finder, his work is cited in nearly a dozen books and used on curricula in Human-Computer Interaction across the globe. He leads by doing, teaches from experience, and succeeds by facilitating others' success. When others say, 'That can't be done,' Karl shows them how.",
	"talk": "According to the principle of least astonishment, things should operate in a way that’s predictable. The collaborative nature between designer and developer is necessary for a universally usable system. The designer creates something that is visually predictable while the developer creates something programatically predictable.\nAs web developers we like to think that our hard work creating HTML, CSS, and JavaScript is what makes our sites so great. Then we realize the reality: all our hard work is really just a request saying, “Please, Mr. Browser, can you make this website do all the cool stuff I’ve designed here?” When the user’s browser receives your web page and all of its assets, your control of the situation entirely ceases. How your site really looks and operates is entirely in the hands of the browser.\nIn this talk, Karl provides important technical insight into accessibility by describing the interactions between HTML/ CSS/ JavaScript, the DOM, the BOM, Accessibility APIs and Assistive Technologies."
},{
	"name": "Ben Ilegbodu",
	"title": "Let’s Web Dev Like It’s 1999!",
	"twitter": "benmvp",
	"bio": "Ben is a Christian, husband and father of 2 girls, with a dozen years of experience developing user interfaces for the Web. He currently is a Principal Frontend Engineer at Eventbrite on the Frontend Platform team, focused on improving their React-based design system and frontend infrastructure. Ben also enjoys playing basketball, DIY, watching movies, and tweeting ([@benmvp](https://twitter.com/benmvp)) / blogging (https://www.benmvp.com/) about his experiences with new web development technologies.",
	"talk": "When we “view source” our modern web applications, the code looks nothing like what we originally wrote. At a minimum, it’s gone through linting, transpilation, obfuscation, minification, and bundling. And in order to build our beautifully designed apps with sophisticated interactions, we leverage the latest features in HTML, CSS and JavaScript available in our modern evergreen browsers.\nHowever, when web development was in its infancy two decades ago, things were drastically different. Sites had hit counters, used frames for navigation, and were updated manually via FTP. We used the blink tag and scrolling marquees! Let’s take a walk down memory lane (or have a history lesson) and have some laughs cringing at how sites looked, how they were built, and the rudimentary tooling we had to develop them."
},{
	"name": "Steve Kinney",
	"title": "Actually Understanding Asynchronous JavaScript",
	"twitter": "stevekinney",
	"bio": "Steve is a principal engineer at SendGrid where he works on creating a rich WYSIWYG editor for building HTML emails using modern web technologies. Previously, he was the director of the front-end engineering program at the Turing School of Software and Design in Denver, Colorado where he taught JavaScript and other technologies to aspiring developers from across the country. He is a recovering New York City public school teacher and recently learned how to drive a car.",
	"talk": "Reasoning about asynchronous code can be hard if you don’t understand the mechanics. It often trips up programmers with deep experience in other languages when they try their hand at client or server-side JavaScript. But, asynchronous JavaScript isn’t as hard as it seems once you learn a few simple rules about how it works. In this talk, we’ll dive into the mechanics of concepts that you might have had a chance to full grok.\nLet’s dispel this confusion once and for all. We’ll explore some metaphors that illustrate the difference between how synchronous and asynchronous code execute. In a 30-minute tour de force, we’ll dive into essential concepts like the call stack and the event loop to build a solid conceptual understanding of how the asynchronous model is implemented. We’ll take a good hard look at a number of common patterns for writing asynchronous code in JavaScript. We’ll start with listening for events on XMLHttpRequest before abstracting that mess with callbacks and promises. We’ll pull back the curtain and see that async/await is really just a cocktail of promises and generators. Finally, we’ll lightly touch upon some more boutique approaches like CSP and shooting messages back and forth between the main and worker threads."
},{
	"name": "Andrey Sitnik",
	"title": "CRDT: Conflict-free Data Types for Collaborative Editing and Offline-First",
	"twitter": "sitnikcode",
	"bio": "Author of PostCSS, Autoprefixer, and Logux. Lead front-end developer at Evil Martians.",
	"talk": "Atom Editor uses CRDT for Teletype. Redis announced CRDT support. CRDT becomes more popular because right now we have more and more real-time applications. Andrey Sitnik, the creator of Logux and PostCSS, will explain CRDT. Why it is important for modern web apps. How to use it. And what is CRDT limits and problems?"
}];

module.exports = function (program) {
  program.command('speakers [name]').action(function(name) {
    if(name === undefined) {
      for (let speaker of speakers) {
        console.log(chalk.magenta("   Name: ") + speaker.name);
        console.log(chalk.magenta("   Talk: ") + speaker.title);
        console.log(chalk.magenta("Twitter: ") + "@" + speaker.twitter);
        console.log("");
      }
    } else {
      let matches = fuzzy.filter(name, speakers, {extract: function(el) { return el.name; }});
      if(matches.length === 0) {
        console.log(chalk.red("Couldn't find any speakers with a name like: ") + name);
        return;
      }

      for(let match of matches) {
        console.log(match.original.name);
        console.log(chalk.green("=".repeat(match.original.name.length)));
        console.log("");
        console.log(match.original.bio.trim());
        console.log("");
        console.log(match.original.title);
        console.log(chalk.cyan("-".repeat(match.original.title.length)));
        console.log("");
        console.log(match.original.talk);
        console.log("");
      }
    }
  });
};
