# Markdown Editor
This is a live markdown editor! Enter your markdown in the pane on the left and see it rendered to HTML on the right in real time.

## How to Run Locally
To run this locally, simply open `index.html` in your browser.

## Feature List
- Live updates
- Dark/light mode
- Text and config persisted in local storage
- Responsive
- Character counter

## AI Prompts I Used
- Can I get the CDN links for these libraries: Bootstrap 5 (CSS) Material Icons Vue 3 CDN marked.js CDN

## Quizzes
### Milestone 1 Quiz
**What is the purpose of `git commit`?**

`git commit` takes a snapshot of the changes you've made, and groups them in that commit as an overall change. When you want to push to the remote repository, those commits will be staged and pushed into the repository, and will add to the overall timeline of changes in that repository.

**What happens when you push to GitHub?**

When you push to GitHub, the commits you made will be added to the remote repository; your changes will now be reflected on the public GitHub repository.

**Why should we commit multiple times instead of once at the end?**

Committing multiple times gives us a timeline of logical changes as we go. After each logical part of a project is completed, we can commit it with its own message and later look back at the history of changes and see clearly how the project progressed.

**What is the difference between local repository and remote repository?**

The local repository is the folder as it is on your computer, while the remote repository is the public, accessible repository holding that folder on GitHub (or similar provider) where your changes will appear when you push them.

### Milestone 2 Quiz
**What does `display: flex` do?**

It makes it so that a container's children can be cleanly displayed in a one-dimensional way, whether that's a row or a column.

**What is a media query?**

It's a special rule in CSS that lets you conditionally apply certain styles depending on some device property, like minimum viewport width.

**Why should responsive design be handled in CSS, not JavaScript?**

Handling it in CSS groups all the styling/design together so it's all in one place, and is better optimized by the browser for style purposes. Doing it in JavaScript would be less optimized and could fail if someone has JS disabled, for example.

**What happens if a media query is placed before base styles?**

The styles inside the media query will not kick in even when the condition is met; CSS will just use the base style.

### Milestone 3 Quiz
**What is the difference between `data` and `computed` in Vue?**

`data` represents state properties that get updated and read directly in the app. `computed` contains functions that derive properties/values from data or other information in the app.

**Why should we not manipulate DOM manually in Vue?**

Vue automatically handles DOM manipulation when a value is updated, so manipulating it manually would just be messing with this.

**What does `v-html` do?**

It injects raw HTML into an element based on what Vue property/computed value is put into it.

**Why must we strip HTML before counting characters?**

If we don't strip HTML, then the tags and angle brackets will be counted as characters, when we just want basic text to be counted.

### Milestone 4 Quiz
**What is localStorage?**

localStorage is a browser API that lets you save values that persist after reload, so you can have text, theme, etc. saved when you close out and come back to the page.

**When does `mounted()` run?**

It runs after the page is loaded in but before the user interacts with anything.

**What is a Vue watcher?**

A Vue watcher is a function that watches for updates in state and runs whenever a certain state value is changed, so that corresponding updates to the HTML can be applied.

**Why should theme state also be persisted?**

It should be persisted so that when someone changes the site theme and then comes back later, the site maintains consistency and the user comes back to the same theme they chose.