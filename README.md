# Create Website Portofoli using React + Vite + Tailwind CSS

Welcome to the tutorial lesson for creating your website, which is also responsive to mobile;
I will cover all aspects, from setup and installation to an overview of technical parts and deployment.

<a name="home">Below is the agenda of the contents that I will cover:</a>

1. [Website portfolio with TailWind CSS and demo case introduction](#ch1)
2. [Installation guide and Set up Procedure](#ch2)
3. [Technical Introduction](#ch3)
    - 3.1 [Overview of File Structure](#ch3.1)
    - 3.2 [nav.jsx -  Naviagtion menu Style and Routing](#ch3.2)
    - 3.3 [hero.jsx  - Home Page UX/UI Interface and Animation](#ch3.3)
    - 3.4 [project.jsx - Project Display Page and Responsive design](#ch3.4)
    - 3.5 [contact.jsx - Contact page design and basic Rest API Design (Post)](#ch3.5)
    - 3.6 [Additional Step - Deployment to public domain](#ch3.6)
4. [Reference](#ref)


***


## <a name="ch1"> Website portfolio with TailWind CSS and demo case introduction </a>

Creating a website portfolio is a uniquely hands-on experience for developers to showcase their work to the public and gain practical experience. This project teaches you how to create your first personal web portfolio and demonstrate your understanding of React, Vite, and Tailwind CSS. I've chosen Tailwind CSS for this demonstration to show how quickly and easily even beginners can apply changes to a website. The choice of React combined with Vite is deliberate due to the well-known and user-friendly front-end tool. 

It's recommended that you familiarise yourself with React and Tailwind CSS beforehand. Still, I'll guide you through the step-by-step process of correctly installing and setting up all the necessary tools, including Node.js (for React and Vite) and Tailwind CSS. This demonstration will also explore the wide range of Tailwind CSS features that will benefit future UX/UI designers. The goal is to build a complex stylish portfolio website incorporating all the style features, responsive design, and complete website deployment. As a bonus, we'll briefly cover some React tools that integrate well with Tailwind CSS.

You can visit my final portfolio page at this URL: https://ymin.netlify.app/.

![HomePage](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583/assets/100251600/e984ddfd-f6b8-43d6-a44e-5e3497942c2f)

## <a name="ch2"> Installation guide and Set up Procedure </a>

**Step 1 :** Install and set up React into your device: <br/>
Head to the website https://nodejs.org/en/ and install the latest Node.js to your local environment <br/>
**Step 2 :** Once installation completed, open your command prompt and check the command line using node --version. If installed correclty, the software’s version numbers should be displayed. <br/>
**Step 3 :** Now let's set up the Vite Website, inside your command prompt, type the following command: <br/>
`npm create vite@latest` <br/>

<a name="ToDO">You will then need to do the following list:</a> <br/>
**Project name:** Your project will be created in a folder with this name, so write your preferred project name (e.g. first-react-vite-project) <br/>
**Framework:** We’ll be using React for this tutorial, so select React <br/>
**Variant:** We'll be using JavaScript for this tutorial, so select JavaScript <br/>

**Step 4 :** Now, let's check if the website works, type the following command to your laptop, If its succesful, you will have the following link (http://localhost:5173/) to be redirected to this page:
```
cd first-react-vite-project
npm install
npm run dev
```
![Initial Page](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583/assets/100251600/0cd3ff50-a051-47c1-a303-e622e63886cb)
**Step 5 :** It's time to set-up the Tailwind CSS into Vite, cd back to your project and install the following npm files into your project. <br/>
```
npm install -D tailwindcss postcss autoprefixer 
npx tailwindcss init -p
```
**Step 6 :** Inside tailwind.config.js, replace the content to the code written below:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
**Step 7 :** Under the src folder, there is index.css file. Replace the content inside index.css to the code written below:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**Step 8 :** These are additonal steps that we will be using for this demo, make sure to install all three npm dependency before we get started:
```
npm install react-icons --save
npm install react-router-dom 
npm install react-type animation 
```
After that, using your preferred code editor (e.g. Visual Studio Code), Install Extension **'Tailwind CSS IntelliSense'** for efficient code handling. <br/>
For Detailed start-up guide for how to setup Tailwind CSS to Vite, please refer to the link https://tailwindcss.com/docs/guides/vite 

### Steps to run my codebase for Website Portofolio
**Step 1 :** Clone the repository into your local environment, the Git web url is : https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583.git
```
git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583.git
```
**Step 2 :** Open the terminal and switch directory to '.\cs732-assignment-ykim583'. Run the following commands:
```
cd cs732-assignment-ykim583
npm install
```
**Step 3 :** Run the command `npm run dev` and open the web browser. For codebase, open the cloned folder via your code editor tool.

