# OSF Design Boilerplate
This repository is intended to be a starter kit for building pages or parts of pages that will go into the OSF.io structure at some point.

#### You should use it because
- It utilizes the correct order and user of stylesheets critical to OSF
- It has placement for static files that will allow links to work out of the box [TODO: Check this]

#### How to Use it
1. Fork this project into your own repository
2. Run ```bower install``` on your fork
3. Edit the html file and add as many other files as necessary for your design
3. Keep javascript scope to either page or function/plugin. If it only runs in a certain page put it inside js/pages and name it 'nnnnn-page.js'. If it is a plugin use camelCase to name the plugin "toggleHeight.js"
4. Keep CSS and images in the provided folders.
5. Do NOT minify css or javascript files