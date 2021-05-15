<!-- steps to install babel -->
 <!--install babel  -->
 npm install --save-dev @babel/core @babel/cli

 <!-- install babel preset and class properties plugin -->
 npm install @babel/preset-env --save-dev
npm install --save-dev @babel/plugin-proposal-class-properties

<!-- add babel.rc and add below code -->
{
"presets": ["@babel/preset-env"],
"plugins": ["@babel/plugin-proposal-class-properties"]
}

<!-- install nodemon and rimraf -->
npm i -d nodemon
npm install rimraf --save-dev

<!-- add foloowing scripts -->
"scripts": {
"build": "babel src -d dist",
"start": "npm run build && node dist",
"restart": "rimraf dist && npm run start",
"dev": "nodemon --exec npm run restart"
}

<!-- add watcher using nodemon.json -->

{"watch": ["src"]}

<!-- define type module down of main -->
"type":"module",

<!-- js file path not found -->
in es6 we have add complete path and including .js extension