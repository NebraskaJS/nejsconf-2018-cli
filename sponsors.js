const chalk = require('chalk');

const sponsors = [{
  "name": "Zillow",
  "website": "https://zillow.com"
}, {
  "name": "Agape Red",
  "website": "https://agapered.com"
}, {
  "name": "Sitepen",
  "website": "https://www.sitepen.com"
}, {
  "name": "Flywheel",
  "website": "https://getflywheel.com"
}, {
  "name": "Flyover Technical",
  "website": "http://www.flyovertechnical"
}, {
  "name": "Midland University Code Academy",
  "website": "http://code.midlandu.edu/"
}];

module.exports = function (program) {
  program.command('sponsors').action(function(name) {
    console.log(chalk.cyan(".==============================."));
    console.log(chalk.cyan("|           SPONSORS           |"));
    console.log(chalk.cyan("'=============================='"));
    console.log("");
    console.log("NEJS Conf could not happen without our sponsors, and we are very grateful for their support!");
    console.log("");
    for (let sponsor of sponsors) {
      console.log(chalk.magenta("   Name: ") + sponsor.name);
      console.log(chalk.magenta("Website: ") + sponsor.website);
      console.log("");
    }
  });
};
