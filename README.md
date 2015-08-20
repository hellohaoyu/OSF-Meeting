# OSF Design Boilerplate
This repository is intended to be a starter kit for building pages or parts of pages that will go into the OSF.io structure at some point.

#### You should use it because
- It utilizes the correct order and user of stylesheets critical to OSF
- It has placement for static files that will allow links to work out of the box [TODO: Check this]

#### How to Use it
1. Fork this project into your own repository
2. Run ```bower install``` on your fork
3. Read the documents under "Important Reading" below
4. Edit the html file and add as many other files as necessary for your design
5. Keep javascript scope to either page or function/plugin. If it only runs in a certain page put it inside js/pages and name it 'pagename-page.js'. If it is a plugin use camelCase to name the plugin as in "toggleHeight.js"
6. Keep CSS and images in the provided folders
7. Do NOT minify css or javascript files
8. Run jshint on javascript files before submitting your work

#### Important Reading

**OSF Style Guide**
Read all of the style guide thoroughly and use it as a reference
https://centerforopenscience.github.io/osf-style/

**HTML and CSS Code Style**
http://cosdev.readthedocs.org/en/latest/style_guides/html_css.html

**Javascript Code Style**
http://cosdev.readthedocs.org/en/latest/style_guides/javascript.html#style