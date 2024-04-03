# Website Portofoli using React + Vite + Tailwind CSS

Welcome to the tutorial lesson for creating your website, which is also responsive to mobile;
I will cover all aspects, from setup and installation to an overview of technical parts and deployment.

<a name="home">Below is the agenda of the contents that I will cover:</a>

1. [Project with Tailwind CSS and demo case introduction](#ch1)
2. [Installation guide and Set up Procedure](#ch2)
3. [Technical introduction and overview](#ch3)
    - 3.1 [nav.jsx -  Naviagtion Menu Configuration (+Routing)](#ch3.1)
    - 3.2 [hero.jsx  - Home Page UX/UI Interface and Motion](#ch3.2)
    - 3.3 [project.jsx - Project Display Page and Responsive design (Mobile/Web)](#ch3.3)
    - 3.4 [contact.jsx - Contact page and Registeration form (+REST)](#ch3.4)
    - 3.5 [Additional Step - Deployment to public domain](#ch3.5)
4. [Reference](#ref)


***


## <a name="ch1"> Project with Tailwind CSS and demo case introduction </a>

Creating a website portfolio is a uniquely hands-on experience for developers to showcase their work to the public and gain practical experience. This project teaches you how to create your first personal web portfolio and demonstrate your understanding of React, Vite, and Tailwind CSS. I've chosen Tailwind CSS for this demonstration to show how quickly and easily even beginners can apply changes to pre-existing classes directly in your server rather than having a custom CSS module. The choice of React combined with Vite is deliberate due to the well-known and user-friendly front-end tool. 

It's recommended that you familiarise yourself with React and Tailwind CSS beforehand. Still, I'll guide you through the step-by-step process of correctly installing and setting up all the necessary tools, including Node.js (for React and Vite) and Tailwind CSS. This demonstration will also explore the wide range of Tailwind CSS features that will benefit future UX/UI designers. The goal is to build a complex, stylish portfolio website incorporating all the style features, responsive design, and complete website deployment. As a bonus, we'll briefly cover some React tools that integrate well with Tailwind CSS.

![HomePage](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583/assets/100251600/3c22d223-9b1b-495f-af8b-fe9d9035a4be)

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

**Step 4 :** Now, let's check if the website works, type the following command to your laptop, If its succesful, you will have the following link (http://localhost:5173/) to be redirected vite page:
```
cd first-react-vite-project
npm install
npm run dev
```
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
**Step 8 :** These are additonal steps that I have included in my codebase, although it isn't necessary, if you're interested on building more complete website, install all three npm dependency before we get started:
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

- node_modules folder This folder is a collection of all external modules from the npm install that your project depends upon. However, this will be ignored throughout our project. <br/>
- assets folder under src This folder contains all publicly available files, such as images, fonts, and other static files used. <br/>
- main.jsx under components This main.jsx file Renders what’s inside all components folders to be used into App.jsx <br/>
- App.jsx unser src Renders what’s inside main.jsx under components folder <br/>
- main.jsx under src The Rootemenatry folder for App.jsx <br/>
- tailwind.config.js The configuration we used for responsive design set. <br/>

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

#### Navigation Menu
In Tailwind CSS, whenever we want to design or add styles to code, we add components inside the className= "**Inside Here**." Think of div or ul as just a skeleton that holds our style.
The structure always goes from big to small. Firstly, I will walk you over how to design the navigation bar itself <br/>

``` 
<div className="flex items-center justify-between p-7 bg-gray-600 bg-opacity-30 fixed w-full z-10">
    <ul>
        <li className="text-2xl lg:text-3xl text-white font-mono tracking-wider flex items-center space-x-3">
        <FaHouseChimney/><span><Link to={"/"}>Min</Link></span></li>
    </ul>
```
(Code snippet from nav.jsx)
- flex : (Flex will define how your items are going to "fill" over the available space along your main axis, by default to horizontal. YOu s) <br/>
- items-center : (This style All the items to be located center) <br/>
- justify-between : (Justify between enables equal space between items) <br/>
- p-7 : (p-7 makes the padding/space of the bar to be 7 across all directions on the items. p{direction}-{size} is how we define, so there is also, pt,pb,pr,pl,px,py <br/>
- bg-white and bg-opacity : (Have white and transparent background) and **fixed w-full** ensures the navigation bar spans the full width of the viewport. <br/>
- z-10 : Ensures the navigation bar layers on top of all other content. <br/>

After that, inside, we will specifically cater to each text, adding icons and hover motion/effect. <br/>
- text-2xl : (Size of the text, follows standard size symbol (XS, S, M, L, ... etc) <br/>
- text-white : (Colour of text to be set to white) <br/>
- font-mono : (Set the font of the text to be mono style) <br/>
- tracking-wider : (Space between String character, different to justify-between as this is space between all items) <br/>
- space-x-3 : (Space between word, for this example, it would be space between icon Chimney and text Min) <br/>

Add the space-x-size function inside the className and include the “<span>” tag before and after the text to space between the react icon and the text. 
Also, notice, I haven't covered any part related to **lg:** (This will be covered in the later part during the responsive design section) 

#### Routing
This is a feature that enables users to route around the website to relocate themselves to different web page. (This is different from hyper links). To make your navigation menu more responsive to user, this part is required step. <br/>
However, I won't cover this much in detail in this tutorial, as our main focus is getting the Tailwind CSS part mastering. <br/>
For anyone interested, please refer to reference[3]. 

### <a name="ch3.2"> hero.jsx  - Home Page UX/UI Interface and Animation </a>

#### Home Page Design
This is where the main home page, where the user will land, just like the navigation bar; it initially starts by styling the main background page, and the contents inside are nested inside.
```
<div className="w-full min-h-screen bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})` }}>
          <section className='flex flex-col lg:flex-row justify-around items-center pt-28 lg:space-x-60 text-white px-4 lg:px-0'>
            
            <div className='flex flex-col items-center lg:items-start lg:w-1/3'>
              <p className='text-4xl mt-10 pb-5 font-semibold text-slate-300'>Welcome</p>
```
(Code snippet from hero.jsx)
- w-full min-h-screen : (Using full width and minimum height of the screen) <br/>
One noticeable feature is this time, we've styles our our background as image instead of colours.  <br/>
- bg-cover bg-center brightness-80" style={{ backgroundImage: `url(${HomePic})`: (Background is covered not stretcetd though, located center with brightness of 80, and the style we use is image) <br/>
- flex flex-col : (Make it flexible in dimensions and Stack items vertically by default) <br/>
- w-1/3 : (As I've splitted this component of screen as section, I'm telling the system to make the width use one third of the part only for ) <br/>
- mt-10 : (This is putting margin on top by 400px, as 1rem = 4px), Which meant, mb identifies as margion bottom <br/>
- font-semibold : (Changing font is not the only feature, you can also change the font weight using bold/semi-bold) <br/>
- text-slate-300 : (Text color of an element to a specific shade of slate gray) <br/>

#### Animated Motion
The following module will capture some tranform motion effects
``` 
<a href={Resume} download="Min's Resume" className="bg-white text-black px-10 py-2 rounded-full 
              hover:bg-gray-400 hover:text-white inline-block text-center cursor-pointer">
                Download Resume
              </a>
              <div className='flex pb-5 space-x-4 cursor-pointer'>
                <a href="https://www.facebook.com/">
                  <BsFacebook size={35} className='border-2 hover:border-white rounded-full hover:scale-110'/>
                </a>
```
(Code snippet from hero.jsx) <br/>
We initially have a reference link to Resume followed by 
- download : (A downloaded files name, for this case, it will be "Min's Resume" <br/>
- hover:bg-gray-400 : (A hover effect, when hover, we have background colour change to gray-400 (originally white background and black text) <br/>
- hover:text-white : (A hover effect, when hover, we have text colour change to white (originally white background and black text) <br/>
- hover:scale-110 : (A hover effect, enalrge the scale by 110%) <br/>
- cursor-pointer : (Make cursor-pointer when mouse move near button) <br/>
- rounded-full : (Make a full rounded shape) <br/>
- inline-block : (Create a single space, which allow to set width and height of element) <br/>

Note, to enable size configuration in react icons, traditional text-size won't work, so keep the size element written as size={} before the className.

```
<div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden z-10 sm:pr-5'>
        <img src={por3} alt="" className='h-full w-full object-cover object-center transition duration-200 hover:scale-105 rounded-lg'/>
```
(Code snippet from project.jsx) <br/>
Some extra motion effect is covered on this module project.jsx file, <br/>
- overflow-hidden : (A effect to prevent overflow of element, usually used inside grid or block or container) <br/>
- transition duration-200 : (A effect that sets duration to an element by 200ms, make it more transformitive) <br/>
- shadow-xl : (Applies an extra-large drop shadow for a 3D effect)  <br/>

There is one part that I haven't covered in this tutorial, which is the react-typrwriter animation feature. For anyone interested on it, please refer to the reference [5].

### <a name="ch3.3"> project.jsx - Project Display Page and Responsive design (Mobile/Web) </a>

#### Project Page
Let's continue cover some of the utility feature that we haven't covered yet:
```
<div className='pt-28 min-h-[115vh] bg-gradient-to-b from-white to-gray-700'>
      <div className='px-7 grid sm:grid-cols-2 gap-6'>

        <div className='flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden z-10 sm:pr-5'>
          <a href="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-ykim583" className='h-48 sm:h-80 col-span-3'>
            <img src={por1} alt="" className='h-full w-full object-cover object-center transition duration-200 hover:scale-105 rounded-lg'/>
          </a>
          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <h2 className='text-gray-200 font-bold text-xl leading-10'>Front End + UX/UI</h2>
            <p className='text-black'>This is a Project using MERN STACK and creating React app <AiFillGithub size={50} className='mx-auto' color='#FFFFFF'/></p>
          </div>
        </div>
```
(Code snippet from project.jsx)
Now moving back to project.jsx, let's go over some of the utility feature we haven't covered before: <br/>
- Min-h-[100vh] : (Minimum height in which the background should be extended) <br/>
- bg-gradient-to-b from-white to-gray-700 : (A more advanced bg-colour feature, where colour gradully transition from white to gray
- grid : (Establishes that all element will follow grid layout)
- sm:grid : (On sm (small) screens, switches to a grid layout) <br/>
- sm:grid-cols-2 : (On screens that are sm (small) or larger, it defines the grid to have 2 columns) <br/>
- gap-6 : (Sets the gap between grid items to 1.5rem or 24px) <br/>
- rounded-lg : (Applies large border rounding to the corners of the container) <br/>
- col-span-3 : (In the grid layout, this item will span across 3 columns) <br/>
- h-full w-full : (Makes the image take up the full height and width of its parent container) <br/>
- object-cover object-center : (Ensures that the image covers the area without stretching, and it's centered in its container) <br/>
- mx-auto my-auto : (Automatically centers itself both x and y direction from the parent container)
- leading-10 : (Sets the lne height of the element to be 10)

#### Responsive Design
Now we have covered most of the necessary features for configuration and utility, it's time to set up a responsive design. Our UX/UI is, by default, set to Web interface only. <br/>
To configure for mobile as well, we first need to configure on **tailwind.config.js** <br/>
Under the theme:, add this specific section screens:{} with two new figures **sm: and lg:**, What this is doing is we are pre-defining the configured size for the two screens. For mobile, it will be small (sm), and for laptop, it will be large (lg). 
The value of px is used for minimal width out on the internet.
```
theme: {
    screens:{
      sm:'640px',
      lg:'1024px',
    },
    extend: {},
  },
```
(Code snippet from tailwind.config.js) <br/>
Now, when we refer back to our example from nav. jsx `text-2xl lg:text-3xl` lg:text-3xl is used which shows that on large size, we need to make the text size 3xl to look more User friendly. <br/>
However, writing lg:text-3xl may not be feasible for mobile devices, rather it is more feasible for large screens only. This is why we usually define minor breakpoints first and override them with large utilities later. <br/>
So we define, we have default of 2xl text for screens smaller than lg (1024px) and once 1024px is reached, we then change it to be 3xl.

### <a name="ch3.4"> contact.jsx - Contact page and Registeration form (+REST) </a>
We are nearly at the end of our tutorial. The final step is to create a registration form so people can communicate with you. Suppose you have followed through with my tutorial session. <br/>
In that case, it will be straightforward to understand what the Tailwind CSS style represents on the bottom code snippet. This will design the overall background interface of the registration form. 
```
div className='w-full min-h-screen pt-28 bg-gradient-to-b from-white to-gray-700'>
        <div className="mx-auto max-w-3xl py-7 bg-gray-400 rounded-3xl">
            <div>
                <div className="mb-4 text-center sm:text-center">
                    <p
                        className="mb-4 font-bold text-white text-3xl sm:text-5xl">
                        Connect With me
                    </p>
                    <p className="max-w-3xl text-xl font-bold text-slate-300">
                        Contact Information Field
                    </p>
                </div>
            </div>
```
So Instead, I want to go straight into the actual text box's styling and form registration aspects.
```
<div className="p-5 text-center" id="form">
                    <h2 className="mb-2 text-2xl font-bold text-gray-300">Want to know about me?</h2>
                    <form action="https://getform.io/f/raeqrrga" method="POST">
                        <div>
                            <div className="sm:mb-4">
                                <div className="sm:mb-4">
                                    <input type="text" id="name" placeholder="Your name" className="mb-2 w-10/12 rounded-md border border-gray-400 py-2 pl-2 sm:mb-0" name="name" required/>
                                </div>
```
(Code snippet from contact.jsx) <br/>
You will be able to notice some unusual style id, placeholder, input text and etc. These are all unique identifer for REST API design for posting specific information to its desginated form address. <br/>
For REST API connection, please refer to reference [6]. What we need to try focus is how to create an editable text box. <br/>
- mb-2 : (Applies a margin-bottom of 8px to the element) <br/>
- w-10/12: (Sets the element's width to 10/12ths of the parent element's width) <br/>
- rounded-md : (Applies a medium radius to all corners of the element, making the edges rounded) <br/>
- border: (Adds a border of default 1px) <br/>
- border-gray-400: (Sets the border color to gray-400) <br/>
- sm:mb-0: (This is a responsive utility that sets the margin-bottom to 0 at the sm screen and above)

### <a name="ch3.5"> Additional Step - Deployment to public domain </a>
You have just completed the module for creating a Website Portfolio using React, Vite, and Tailwind CSS! Over this course, you have learned all the fundamentals of Tailwind CSS. 
We've covered from utility and configurations, how to create responsive designs, animation motion, registration form, and briefly went through the components outside of Tailwind CSS. 
Although our project has ended, it would be better to deploy this website to the public to showcase to people. Hence, I've provided this final tutorial to deploy to the public domain. <br/>

**Step 1 :** `npm run build`, this step will build you a dist folder that compresses all the work we've done. <br/>
**Step 2 :** Go to https://www.netlify.com/, sign up if you don't have exisitng account. <br/>
**Step 3 :** Finally, Once you're logged in, go inside the sites tab, and manually drop your dist folder. <br/>
**Step 4 :** If you want to change your site name, go to site -> site configuration -> General -> Site Details -> Change site name.
For further instruection, refer to reference [7].

### <a name="ref"> Reference </a> <br/>
[1] Setup Tailwind with React and Vite https://www.youtube.com/watch?v=x2Qm0uwOUuQ&ab_channel=ReactTailwind <br/>
[2] Creating Navigation bar - https://www.youtube.com/watch?v=17l6AOc8s10&ab_channel=CodeComplete <br/>
[3] Routing - https://www.youtube.com/watch?v=17l6AOc8s10&ab_channel=CodeComplete <br/>
[4] Main - https://www.youtube.com/watch?v=TxXsJnWx9uE&list=PL1HMn5V7V6NGNIblxjbNFXIz9O6pBOGid&index=5&ab_channel=AUCODE <br/>
[5] Typewriter Animation - https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=1391&ab_channel=webdecoded <br/>
[6] Style Responsive Page and Registration Page - https://www.youtube.com/watch?v=YFyAYHWQ2Yo&t=999s&ab_channel=c0d1n0 <br/>
[7] Deploying React project to Public Domain - https://www.youtube.com/watch?v=7T4w0QJtL-o&ab_channel=ProgrammingwithMist <br/>
[8] Tailwind Documentation - https://devdocs.io/tailwindcss/
