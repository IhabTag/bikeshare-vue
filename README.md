# Bikeshare Project API

A Vue.js SPA that works as the front end of a Flask app for analyzing and presenting **Bikeshare** cities data project as part of the **Udacity Data Professional** scholarship provided by **EgyFWD**.

A full functioning version of this app is present at https://bikeshare.ihabtag.com

## Execution instructions on localhost
This app is built by Flask as a back-end and Vue.js as front-end.

Both parts should be deployed and proper configuration of Axios requests links in the Vue.js part is necessary for this app to work as expected. 

###  The Vue.js front-end
Clone the project files to the desired project directory.

Open Terminal

Then install dependencies:
```
$ npm install
```
With any text editor, open Home.vue from `[project-folder]/src/views/Home.vue`
In line 419 .. change the value of the "baseUrl" key to your Flask app local server link including the port number

Example:  `baseUrl:  'http://127.0.0.1:5000'`

Finally run the development server
```
$ npm run serve
```

### The Flask back-end

Refer to the Flask part README [here](https://github.com/IhabTag/bikeshare-api/blob/master/README.md) for more instructions.
