# Happy states

> Makes simple state management possible via `classList` on the `<html>` element

Situation: you want to have a simple method of styling your page based on the current global state. Like `mainMenuOpened`, `filterToggled`, `footerNavActive`, and so on.

## Solution

**Happy states!** :sunglasses:

_A small script that manages your pages state via `document.documentElement.classlist`._

[GitHub](https://github.com/jelmerdemaat/happy-states) | [NPM](https://www.npmjs.com/package/happy-states) | [@jelmerdemaat](https://twitter.com/jelmerdemaat)

Try here: [jelmerdemaat.github.io/happy-states](https://jelmerdemaat.github.io/happy-states/). Really the only thing this script does is:

1. Give methods `toggle`, `set`, `unset`, and `is` for handling your page's state via JavaScript.
2. Add a click handler to catch state toggling on elements with a given attribute (default: `data-state`).
3. Give a possibility to add a callback to a state change.

Which means you can control a state like `main-nav-open` via `HappyStates.set('main-nav-open')` in your JavaScript, as well as via a click on an element like this:

```html
<button data-state="main-nav-open">Open main nav</button>
```

## Install
### Directly
Include `happystates(.min).js` somewhere  in your document, before the rest of your JavaScript where you initiate this script.

### Via npm
```sh
npm install --save happy-states
```

## Usage
In your JavaScript:

```js
// When using an npm based build process, import the module:
import HappyStates from 'happy-states';

// Create an instance of HappyStates
const happystates = new HappyStates();

// Optionally, pass a prefix that you would like the classes to have,
// and a custom attribute to act upon when an element is clicked (both optional).

const customhappystates = new HappyStates(
  'is-',
  'data-toggle-state'
);

HappyStates.toggle('menuOpened'); // Toggles class `is-menuOpened` on document
HappyStates.is('menuOpened'); // Returns true
HappyStates.unset('menuOpened'); // Removes class `is-menuOpened` from document
HappyStates.is('menuOpened'); // Returns false
HappyStates.set('menuOpened'); // Sets class `is-menuOpened` on document
HappyStates.toggle('menuOpened'); // Toggles class `is-menuOpened` on document
HappyStates.is('menuOpened'); // Returns false
```

### Parameters
|Order|Thing|Explanation|
|---|---|---|
|First |`prefix`   | What to prefix the classes with. Default: `state-`|
|Second|`attribute`| What attribute to check for state toggling. Default: `data-state`|


## Browser support
This little script (692B minified, 356B gzipped) is supported in all browsers that support `Element.classList`  which is basically every browser. [caniuse.com/#feat=classlist](http://www.caniuse.com/#feat=classlist)

Can I Use screenshot:

### Element.classList
![Element.classList support](http://i.imgur.com/hKX3RCK.png)
