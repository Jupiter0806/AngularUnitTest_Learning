# Angular Unit Test Learning

## Description
Learning use project using Jasmine

### nodes added
(sudo npm install <one item> --save-dev)
 1. karma (unit test core)
 2. karma-jasmine (for unit test)
 3. karma-chrome-launcher (to launch test to chrome)
 4. karma-read-json (to get json from a file) -------- previously installed via npm but it seems be wrong
        as a file named by bower.json is included in its component, so it might be required to be installed
        via bower and included in karma.conf.js

After added nodes, run command karma init and setup testing files patterns.
 - app/**/*.js (all js files in app and all its subdirectories)
 - test/**/*.js (all js files in test and all its subdirectories)

### bower added
(bower install <one item>)
 1. angular
 2. angular-mocks
 3. angular-resource
 4. karma-read-json (see the description in nodes added section) required to restart karma
 
After added bower components, add the dependencies into file karma.conf.js

Write first simple unit test.

Write a controller for unit test.

Try to figure out differences between bower and npm. For now, my understanding is 
    bower is for frontend and npm is for backend.
And in this project, components installed via npm do not need to be included in karma.conf.js
    while installed via bower is required to be included into karma.conf.js
    
## Questions
 1. when both have  
 ```JavaScript
 $httpBackend.when('GET', '/auth.py').respond(valid_respond);
                    
 $httpBackend.when('GET', '/auth.py').respond(mockUserData[0]);
 ```       
 the result length is 2 which is the length of valid_respond
 
 my understanding is the second lind should be run after the first line, so why the result should
    be 1 which is the length of mockUserData
 2. It has unit test for deffer, but how to test onSuccess, onError, function pass is a question
