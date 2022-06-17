#!/usr/bin/env node

import boxen from "boxen";

const boxenSpecs = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    title: "nycbeardo",
};

const intro = ("Hey Im Monty! Im a dev that loves everything about the web, generative art, interaction design, and how it relates to all users.\n\nYou can find me online via these links:\n\nTwitter: https://twitter.com/NYCBEARDO\n\nMy Site: https://mkstevens.dev/\n\nGithub: https://github.com/nycbeardo\n\nPolywork: https://www.polywork.com/mstevens");
console.log(boxen(intro + boxenSpecs));