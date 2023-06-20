# NFT-TiX QA Automation Repository

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [How to run test](#how-to-run-test)
- [Branch naming conventions](#branch-naming-convention)

---

## Description

This repository contains UI automation tests for NFT-TiX web application using Playwright test automation framework.

---

## Prerequisites 

**Node version 14 or above**

Install Node modules, run:  
```
npm i
``` 
Check if you already have Node instaled, run:  
```
node -v
``` 

**Playwright version 1.33.0**

Install Playwright dependencies, run:  
```
npx playwright install
``` 


---
## How to run test

To run Smoke test, run:

```
npm run smokeTest
```

By default, tests will run in `headless` mode, to change that go to `playwright.config.js` file and change the `headless` parameter to `false`.


---
## Test Development

### **Branch naming convention** 

When creating a Git branch you should adhere to the following structure, e.g.:
```
feature/NT-[Github issue ID]
```
---

### **Other naming conventions**

_UpperCamelCase_ - Class
```
ExampleClass()
```
_lowerCamelCase_ - Variables & Methods
```
exampleVariableOrMethod()
```
_lowerCamelCase + snake\_case_ - Selectors
```
selectorExample_[word]
```
[word] after underscore (_) closly describes type of element the selectors is targeting:

`_Button` - any clickable element (e.g buttons, pages, tabs, options)

`_Field` - any input type field in the page

`_Text` - any text on the page

`_Value` - selecting a particular value on the page

`_Dropdown` - select particular dropdown menu

`_Option` - option available for selection (e.g dropdown menu list)

`_Hyperlink` - a link to another page

`_Checkbox` - a checkbox element

`_RadioButton` - a radio button element

`_Switch` - toggle switch element

`_Notification` - affirmation/error message that appears after some action

`_Counter` - e.g. number of uploaded pictures

`_Icon` - e.g. profile picture

`_Section` - an entire section, e.g. Landing page - Popular section