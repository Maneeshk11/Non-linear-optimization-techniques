## Non-Linear-Optimisation-Techniques

# This repo consists the source code for the website that is capable of calculating and visualizing multiple non-linear optimization and approximation methods discussed in the undergrad level.

# Steps to install and run it locally:
- Clone the website or download the code into your machine.
- The root consists of 2 folders:
  - The client folder : This is the frontend server. Please install all the necessary modules and packages required for this folder.
    - Navigate inside the root folder of the "Client"  and execute the following commands:
    - ``` npm install ``` - Installs all the basic required modules for the website
    - ``` npm react-router-dom ```
    - ``` npm install @mui/icons-material @mui/material @emotion/react ```
    - ``` npm install axios ``` 
  - The server folder : This is the backend server. It executes the python scrips and sends response to the frontend server. This uses Nodejs environment.
    - Navigate into the root of the "Server" folder and execute the following commands.
    - ``` npm install ```
    - ``` npm install nodemon ```
    - ``` npm install express ```
    - ``` npm install child_process ``` - used to execute python scripts inside of a js-script.
    - ``` npm install base64-js path fs cors axios ```
    - Inside the package.json file, change the "run" parameter under scripts to ``` "dev": "nodemon server.jsx" ```. (Assuming we named the main server file as server.jsx)
- Now we have the frontend and backend servers fully setup. We can simply run them using the following command:
  - ``` npm run dev ```. Launch them seperately in their respective terminals. The frontend server is launched over the portnumber 5173 by default. We have launched the backend server over the portnumber 5000.
- Note: Dont forget to install all the necessary packages in backend server to execute the python scripts. The list is mentioned below:
    - sys
    - numpy
    - numpy.linalg
    - scipy
    - sympy
    - matplotlib
    - matplotlib.use('TkAgg') for plot rendering
    - mpl_toolkits.mplot3d 
