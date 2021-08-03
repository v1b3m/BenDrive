<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** v1b3m, BenDrive, BenjaMayanja, vibenjamin6@gmail.com, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">BenDrive</h3>

  <p align="center">
    Obtain the full directory listing of a given directory path on the local filesystem
    <br />
    <a href="https://github.com/v1b3m/BenDrive"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/v1b3m/BenDrive">View Demo</a>
    ·
    <a href="https://github.com/v1b3m/BenDrive/issues">Report Bug</a>
    ·
    <a href="https://github.com/v1b3m/BenDrive/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![BenDrive screenshot](https://user-images.githubusercontent.com/39791369/128070515-0fa46174-5380-41bf-a66a-0e3517d83c0c.png)


Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`v1b3m`, `BenDrive`, `BenjaMayanja`, `vibenjamin6@gmail.com`, `BenDrive`, `project_description`

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [GraphQL js](https://graphql.org/graphql-js/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
This project can either be run as a standalone app with Node.js or as a container image with Docker.

#### Node.JS

To run the app as a standalone app with Node.js you need to install the following:

1. Node JS
   Install Node.js from the node.js website.
   https://nodejs.org/en/

#### Docker

To run the app as a docker container image you need to install the following:

1. Docker
   Follow the official docker installation instructions here:
   https://docs.docker.com/get-started/

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/v1b3m/BenDrive.git
   ```
2. Install NPM packages
   ```sh
   yarn install && lerna bootstrap
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Running the backend API as a docker image

The steps below assume you're working in the `packages/api` director

1. Create a `.env` file and add the following variables:

   - PORT

2. Build the app

   ```
   docker build -t ben-drive .
   ```

3. Start the container with the `PORT` value you set in step 1

   ```
   docker run -dp PORT:PORT ben-drive
   ```

### Running the backend API as a standalone app

The steps below assume you're working in the `packages/api` directory

1. Build the app

   ```sh
   yarn build
   ```

2. Create a `.env` file and add the following variables:

   - PORT

3. Start the app
   ```
   yarn start
   ```

### Running the web app

The steps below assume you're working in the `packages/web` directory

1. Obtain the backend API URL from the steps above set it in the `.env` file as `REACT_APP_API_URI`

2. Start the app
   ```
   yarn start
   ```
3. The web app should now be started and accessible on http://localhost:3000
   Note that you'll need to input a valid path to a directory in order to obtain its listing.

   If the app is running without containerization, you can simply input any valid path from your local machine.

   For apps running in docker, you can obtain use `/path` into the search bar to confirm that the API is running. To obtain other paths, you can `ssh` into the docker container as shown below.

4. To obtain stats about a given file, double click the file
5. To open a subdirectory to view its files, double click the subdirectory

https://user-images.githubusercontent.com/39791369/128069933-1175eb2a-1ca3-4ed8-98d7-56e17c9e355d.mp4



#### SSH into the docker container

1. List the running containers

   ```sh
   docker ps
   ```

2. Find the container id for the app

3. SSH into the container
   ```sh
   docker exec -it CONTAINER_ID /bin/bash
   ```
4. List the available paths in the container
   ```sh
   ls -la /
   ```

<!-- CONTACT -->

## Contact

Your Name - [@BenjaMayanja](https://twitter.com/BenjaMayanja) - vibenjamin6@gmail.com

Project Link: [https://github.com/v1b3m/BenDrive](https://github.com/v1b3m/BenDrive)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/v1b3m/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/v1b3m/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/v1b3m/repo.svg?style=for-the-badge
[forks-url]: https://github.com/v1b3m/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/v1b3m/repo.svg?style=for-the-badge
[stars-url]: https://github.com/v1b3m/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/v1b3m/repo.svg?style=for-the-badge
[issues-url]: https://github.com/v1b3m/repo/issues
[license-shield]: https://img.shields.io/github/license/v1b3m/repo.svg?style=for-the-badge
[license-url]: https://github.com/v1b3m/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/benjamin-mayanja/
