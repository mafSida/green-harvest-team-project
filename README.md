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

- **Daiana Kutasevych**: Team Lead
  - Responsible for project setup, code review, optimization, lazy loading implementation, SEO, and ensuring screen reader accessibility. Managed the overall project structure, provided feedback to the team, and ensured timely delivery of tasks.

- **Yevheniia Tishakova**: Scrum Master
  - Organized daily stand-ups, maintained task tracking, and managed team dynamics. Developed the 'Advertisement' section and led the project presentation, ensuring effective communication within the team.

- **Diiana Fedosiienko**: Web Developer
  - Developed the 'Header' section, including the navigation structure and overall layout. Collaborated with the team to ensure mobile responsiveness and usability.

- **Semen Herasymiuk**: Web Developer
  - Implemented scroll animations across the website and provided support in various sections. Worked on JavaScript functionality, fixed broken code, and developed the 'Your Order' section.

- **Oleksandr Kostyuchenko**: Web Developer
  - Developed the 'Hero' section. A high school student who demonstrated strong initiative and responsibility despite his young age.

- **Oleksandr Popov**: Web Developer
  - Developed the 'How it Works' section, added the favicon to the website, and reviewed and adjusted general styles for the project.

- **Yuliia Sheremeta**: Web Developer
  - Developed the 'Vegetables' section, ensuring the presentation and accessibility of content related to the vegetable offerings.

- **Anna Vois**: Web Developer
  - Developed the 'Reviews' section, gathering and displaying customer feedback effectively.

- **Olesandra Matvieveva**: Web Developer
  - Created the mobile menu for the header, ensuring a seamless user experience on mobile devices. Worked collaboratively with Diiana on the header's overall functionality and responsiveness.


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
The production version of the project will be automatically built and deployed to GitHub Pages in the `gh-pages` branch every time the `main` branch is updated. For example, this occurs after a direct push or an accepted pull request. 

To enable this, you need to change the `--base` value in the `package.json` file for the `build` command. Replace `<REPO>` with the name of your repository like this:

`"build": "vite build --base=/<REPO>/"`

Next, navigate to the GitHub repository settings (Settings > Pages) and set it to serve the production version of the files from the `/root` folder of the `gh-pages` branch if it hasn’t been done automatically.

### Status of Deployment
The status of the deployment of the latest commit is displayed with an icon next to its identifier.

- Yellow color - the project is being built and deployed.
- Green color - the deployment was successful.
- Red color - an error occurred during linting, building, or deploying.

More detailed information about the status can be seen by clicking on the icon and, in the pop-up window, going to the link "Details".

### Live Page
After a while, usually a few minutes, the live page can be viewed at the address specified on the Settings > Pages tab in the repository settings. For example, here is the link to the live version of this repository:

https://your-github-pages-link.

If a blank page opens, make sure there are no errors related to incorrect paths to CSS and JS files (404) in the Console tab. Most likely, you have the wrong value for the `--base` flag for the build command in the `package.json` file.

### How it Works
After each push to the main branch of the GitHub repository, a special script (GitHub Action) from the `.github/workflows/deploy.yml` file is triggered. All repository files are copied to the server, where the project is initialized and undergoes linting and building before deployment. If all steps are successful, the built production version of the project files is sent to the `gh-pages` branch. Otherwise, the execution log will indicate what went wrong.

## Project Management
The project was managed using the Agile methodology, with daily stand-up meetings to discuss progress and challenges. Tasks were tracked in Trello, allowing for effective collaboration and organization.

## Screenshots

### Mobile View
![Mobile Screenshot 1](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/mobile-screenshot-1.png)
![Mobile Screenshot 2](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/mobile-screenshot-2.png)

### Desktop View
![Desktop Screenshot 1](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/desktop-screenshot-1.png)
![Desktop Screenshot 2](https://github.com/mafSida/green-harvest-team-project/blob/main/src/img/screenshots/desktop-screenshot-2.png)

