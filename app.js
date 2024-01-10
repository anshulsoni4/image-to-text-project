const T = require("tesseract.js");

T.recognize('./20231113135539935138000000-5.jpg', 'eng', { logger: e => console.log(e) })
    .then(out => console.log(out))