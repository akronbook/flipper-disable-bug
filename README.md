# Bug Description
When fast-flipper's disable attribute is set, I noticed that @click handler is still called. 
The desired bahavior is to turn off @click handler when the fast-flipper is disabled.

# How to replicate the bug?
- npm install
- npm run start
- In the browser, you will notice that the flipper is disabled, but when clicking the button, the page count is still increasing.