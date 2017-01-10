# Angular Unit Test Learning

## Description
Learning use project using Jasmine

### nodes added
(sudo npm install <one item> --save-dev)
 1. karma (unit test core)
 2. karma-jasmine (for unit test)
 3. karma-chrome-launcher (to launch test to chrome)

After added nodes, run command karma init and setup testing files patterns.
 - app/**/*.js (all js files in app and all its subdirectories)
 - test/**/*.js (all js files in test and all its subdirectories)

### bower added
(bower install <one item>)
 1. angular
 2. angular-mocks
 3. angular-resource
 
After added bower components, add the dependencies into file karma.conf.js