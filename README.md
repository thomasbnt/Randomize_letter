[![Patreon support](https://img.shields.io/endpoint.svg?url=https://shieldsio-patreon.herokuapp.com/thomasbnt&style=flat-square)](https://www.patreon.com/thomasbnt)
[![Follow me on Twitter](https://flat.badgen.net/badge/Follow%20Me/@Hyprimort/33A1F2?icon=twitter)](https://twitter.com/Hyprimort)
[![GNU GPL v3.0](https://flat.badgen.net/github/license/thomasbnt/Randomize_letter)](LICENSE)

## I Integrations

> It's just a randomizer of letters.

```javascript
function Load() {
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const out = l.charAt(Math.floor(Math.random() * l.length)) // Randomize !
    document.getElementById('random').textContent = out // Get ID 'random' for edit the text context
    document.title = out // Edit the title of page
}
```
<img src="assets/img/manifest/192x192.png" alt="Logo" align="right" />

**Randomize_letter** is a simple script with PWA ([Manifest](manifest.json) and [init.js for install SW](assets/js/init.js)) and [Service Worker](sw.js).

## II Contributions

Contributions are always welcome! Read the rules for contributions before you can participate.

Please ensure that your pull request complies with the following guidelines:

- Alphabetize your entry.
- Look for previous suggestions before making a new one, as yours can be a duplicate.
- The suggested README files should be beautiful or stand out in some way.
- Make an individual sweater request request for each suggestion.
- New categories or improvements to the existing categorization are welcome.
- Keep descriptions short and simple, but descriptive.
- Start the description with a capital city and end with a stop / complete period.
- Check your spelling and grammar.
- Make sure that your text editor is configured to delete end spaces.

Thank you for your suggestions!

- 📣  News : Follow me on [Twitter](https://twitter.com/Hyprimort)
- 📕  Under [GNU GPL v3.0](LICENSE)
- 🔗  Visit my [Website](https://thomasbnt.fr)
