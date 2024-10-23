# Green Harvest Project

A responsive website promoting a healthy lifestyle, built with HTML, CSS, JavaScript, and Vite.

## Overview
This project is part of the GoIT Full Stack Developer course, created by our team **beHealthy** as a collaborative assignment. It focuses on creating a responsive, accessible website with modern UI/UX, optimized images, and mobile-first design. The project includes the implementation of screen reader accessibility, lazy loading for images, and the use of Vite as a build tool.

The design mockup used for this project can be found [here](https://www.figma.com/design/ObvvH4JjCuw8gBzYmiLIII).

The website is deployed on GitHub Pages and can be viewed [here](https://mafsida.github.io/green-harvest-team-project/).

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Performance Results](#performance-results)
- [Contributors](#contributors)
- [Setup and Usage](#setup-and-usage)
- [Project Management](#project-management)
- [Screenshots](#screenshots)

## Technologies
- **Front-end**: HTML, CSS (Animate.css), JavaScript
- **Back-end**: Node.js
- **Utilities**: VSCode, Webpack, Vite, Figma, Git/GitHub

## Features
- Fully responsive and optimized for mobile devices
- Accessible for screen readers
- Lazy loading for images
- Smooth scrolling animations (AOS library)
- Optimized for speed and SEO
- Meta tags for search engines
- Deployed using Vite and GitHub Pages

## Performance Results

### Mobile:
![Mobile Performance](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/mobile-performance.png)

- Efficiency: 91
- Accessibility: 96
- Optimal methods: 100
- Optimum search systems: 91

### Desktop:
![Desktop Performance](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/desktop-performance.png)

- Efficiency: 99
- Accessibility: 96
- Optimal methods: 100
- Optimum search systems: 91

## Contributors

- **Daiana Kutasevych**: Team Lead, implemented lazy loading, screen reader support, and meta tags. Optimized performance and accessibility. Managed the project structure, reviews, and provided feedback to the team.
  
- **Yevheniia Tishakova**: Scrum Master, responsible for team coordination, organizing daily meetings, overseeing project progress, and presenting the project. Developed the "Adv" section.
  
- **Diiana Fedosiienko**: Developed the "Header" section, including the mobile and tablet menu.
  
- **Semen Gerasymuik**: Implemented scrolling animations across the website, provided support across sections, and worked on both JS functionality and fixing broken code. Developed the "Your Order" section.
  
- **Oleksandr Kostyuchenko**: Developed the "Hero" section. A high school student who demonstrated strong initiative and responsibility despite his young age.
  
- **Oleksandr Popov**: Developed the "How it Works" section, favicon, and reviewed and adjusted general styles for the project.
  
- **Yuliia Sheremeta**: Developed the "Vegetables" section.
  
- **Anna Vois**: Developed the "Reviews" section.
  
- **Elisa Osadchuk**: Developed the "Footer" section, with assistance from the Team Lead and Semen Gerasymuik.

## Acknowledgments

Special thanks to our project mentor, Daria Lyman, for prompt code reviews and clear instructions on revisions.

## Setup and Usage

This project was created using Vite. For more details and advanced configuration options, refer to the documentation.

### Creating a Repository from a Template
Use this GoIT organization repository as a template to create your project repository. Click on the "Use this template" button and select the "Create a new repository" option.

1. On the next page, fill in the repository name, ensure it is public, and then click the "Create repository from template" button.

2. After the repository is created, navigate to the repository settings under Settings > Actions > General.

3. Scroll to the bottom of the page, in the "Workflow permissions" section, select the "Read and write permissions" option and check the box. This is necessary for automating the deployment process.

Now you have a personal project repository with the file structure and folders from the template repository. Work with it like any other personal repository: clone it to your computer, write code, commit changes, and push them to GitHub.

### Preparing to Work
1. Ensure that you have the LTS version of Node.js installed on your computer. Download and install it if necessary.
   
2. Install the basic dependencies of the project in the terminal using the command:
   ```bash
   npm install

3. Start the development mode by executing the command in the terminal:
   ```bash
   npm run dev

4. Open your browser and go to `http://localhost:5173`. This page will automatically reload after you save changes to project files.

### Files and Folders
- The HTML files for the page components should be located in the `src/partials` folder and imported into the `index.html` file. For example, create a file for the header in the `partials` folder and import it into `index.html`.
  
- The CSS files should be in the `src/css` folder and imported into the HTML files of the pages. For example, the CSS file for `index.html` is named `index.css`.
  
- Add images to the `src/img` folder. The build tool will optimize them, but only when deploying the production version of the project. This process happens in the cloud to avoid loading your computer since it can take a long time on weaker machines.

### Deployment
The production version of the project will be automatically built and deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch is updated. For example, after a direct push or an accepted pull request. To do this, you need to change the `--base=/<REPO>/` value in the `package.json` file for the `build` command, replacing `<REPO>` with the name of your repository, like so:
```json
"build": "vite build --base=/<REPO>/",
