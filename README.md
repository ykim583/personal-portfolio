# Website Portofoli using React + Vite + Tailwind CSS

Welcome to the tutorial lesson for creating your website, which is also responsive to mobile;
I will cover all aspects, from setup and installation to an overview of technical parts and deployment.

<a name="home">Below is the agenda of the contents that I will cover:</a>

1. [Website portfolio with TailWind CSS and demo case introduction](#ch1)
2. [Installation guide and Set up Procedure](#ch2)
3. [Technical introduction and overview](#ch3)
    - 3.1 [nav.jsx -  Naviagtion menu Style and Routing](#ch3.1)
    - 3.2 [hero.jsx  - Home Page UX/UI Interface and Animation](#ch3.2)
    - 3.3 [project.jsx - Project Display Page and Responsive design](#ch3.3)
    - 3.4 [contact.jsx - Contact page design and basic Rest API Design (Post)](#ch3.4)
    - 3.5 [Additional Step - Deployment to public domain](#ch3.5)
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
**Step 2 :** Once installation completed, open your command prompt and check the command line using **node --version**. If installed correclty, the software’s version numbers should be displayed. <br/>
**Step 3 :** Now let's set up the Vite Website, inside your command prompt, type the following command and do the following list below: <br/>
```
npm create vite@latest
```
**Project name:** Your project will be created in a folder with this name (e.g. I've named it as first-react-vite-project) <br/>
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

## <a name="ch3"> Technical introduction and overview </a>

These are some of the key folders that you should be aware of during this project: <br/>

**node_modules folder** This folder is a collection of all external modules from the npm install that your project depends upon. However, this will be ignored throughout our project. <br/>
**assets folder under src** This folder contains all publicly available files, such as images, fonts, and other static files used. <br/>
**main.jsx under components** This main.jsx file Renders what’s inside all components folders to be used into App.jsx <br/>
**App.jsx unser src** Renders what’s inside main.jsx under components folder <br/>
**main.jsx under src** The Rootemenatry folder for App.jsx <br/>
**tailwind.config.js** The configuration we used for responsive design set. <br/>

```
import Nav from "./nav";

const main = () => {
    return (
        <div>
            <Nav/>
        </div>
    )
}

export default main
```
This is a code snippet from the main.jsx file. Most of the structure is similar to how it's shown in the code above. We initially have an `import` feature to import any files or modules from the local folders or npm files. 
Then, we have the actual operation const main = () = -> {} where the code base lies; think of it as a function that manages and stores all the components inside your code. We then use the 'export' feature to be accessible to other files


### <a name="ch3.1"> nav.jsx -  Naviagtion menu Style and Routing </a>

```
<div className="flex items-center justify-between p-7 bg-gray-600 bg-opacity-30 fixed w-full z-10">
            <ul>
                <li className="text-2xl lg:text-3xl text-white font-mono tracking-wider flex items-center space-x-3"><FaHouseChimney/><span><Link to={"/"}>Min</Link></span></li>
            </ul>
            <ul className="flex lg:space-x-3">
                <li className='hover:bg-gray-400 rounded-full px-3 py-1 sm:px-5 sm:py-2 text-lg sm:text-xl text-white'>
                    <Link to={"/"}>Home</Link>
                </li>
```
In Tailwind CSS, whenever we want to design or add styles to code, we add components inside the className= "**Inside Here**." There are various ways of changing style components, and I will explain what each feature does.
The structure always goes from significant to small. Firstly, I will walk you over how to design the navigation bar itself (excluding details within) <br/>

**flex** (Flex will define how your items are going to "fill" over the available space along your main axis, by default to horizontal) <br/>
**items-center** (This style All the items to be located center) <br/>
**justify-between** (Justify between enables equal space between items) **p-7** (p-7 makes the padding/space of the bar to be 7 for both top and bottom of the items <br/>
**bg-white and bg-opacity** (Have white and transparent background) and **fixed w-full** ensures the navigation bar spans the full width of the viewport. <br/>
**z-10** Ensures the navigation bar layers on top of all other content. <br/>

After that, inside, we will specifically cater to each text, adding icons and hover motion/effect. <br/>
**text-2xl** (Size of the text, follows standard size symbol (XS, S, M, L, ... etc) <br/>
**text-white** (Colour of text to be set to white) <br/>
**font-mono** (Set the font of the text to be mono style) <br/>
**tracking-wider** (Space between String character, different to justify-between as this is space between all items) <br/>
**space-x-3** (Space between word, for this example, it would be space between icon Chimney and Min) <br/>
To space out between react icon and text, add the space-x-size function inside the className, and include “<span>” tag before the Text and after the Text <br/>

**hover:bg-gray-400** (Hover effect, when hover, it creates a background of gray colour-400) <br/>
**rounded-full** (Creates a rounded space) <br/>
**px-3 py-1** (Padding of x by 3, and y by 1) <br/>

Notice, I havent't covered any part related to **sm: or lg:** (This will be covered in the lata part during responsive design) 

### Routing
This is a feature that enables users to route around the website to relocate themselves to different web page. (This is different from hyper links)
To enable this, you must first install the npm react router dom (Which already provided in my codebase / If you've followed the set up procedure correctly) <br/>
Then, inside main.jsx file (Under src folder)
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```
Then across you main.jsx under components folder, make sure to follow the same path as what's written in the nav.jsx file link.
Inside nav.jsx The <Link to => component creates navigable links in your UI, whereas the <Routes> component uses this Link to define those navigable areas and specify what should be rendered.
```
const main = () => {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
```

### <a name="ch3.2"> hero.jsx  - Home Page UX/UI Interface and Animation </a>

This is where the main home page, where the user will land, just like the navigation bar; it initially starts by styling the main background page, and the contents inside are nested inside.
```
<div className="w-full min-h-screen bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})` }}>
          <section className='flex flex-col lg:flex-row justify-around items-center pt-28 lg:space-x-60 text-white px-4 lg:px-0'>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3'>
              <p className='text-4xl mb-5 text-slate-300'>Welcome</p>
```
**w-full min-h-screen** (Using full width and minimum height of the screen) <br/>
**bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})`** (Background is covered, located center by the image HomePic, with brightness of 80) <br/>
**flex flex-col** (Make it flexible in dimensions and Stack items vertically by default) <br/>
**w-1/3** (As I've splitted this component of screen as section, I'm telling the system to make the width use one third of the part only) <br/>
**mb-5** (This is putting margin bottom by 20px, as 1rem = 4px) <br/>
**text-slate-300** (Text color of an element to a specific shade of slate gray) <br/>

```
<TypeAnimation
    sequence={[
        "Min's Personal Website",
        1000,
        "Part IV SE Student",
        1000,
        "IT Consultant",
        1000
       ]}
    wrapper="span"
    speed={50}
    style={{fontSize: "2em", display: "inline-block", color: "#F5EEF8"}}
    repeat={Infinity}
/>
```



