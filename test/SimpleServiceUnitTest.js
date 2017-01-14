/**
 * Created by jupiterli on 15/01/2017.
 */

var mockUserData = [
    {customerID: '1', name: 'benwei'},
    {customerID: '1', name: 'benwei'}
];

describe('UnitTest SimpleService', function () {

    // mock module
    beforeEach(module('unitTestApp'));

    it("Should get number of 2, getUserNumber", inject(function($injector) {

        // mock return data
        var $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('/auth.py').respond(mockUserData.length.toString());

        // mock service
        var SimpleService = $injector.get('SimpleService');
        var promise = SimpleService.getUserNumber();
        var userNum;
        promise.then(function(data) {
            userNum = data;
        });

        // force httpBackend return data immediately, asy to syn
        $httpBackend.flush();

        var $rootScope = $injector.get('$rootScope');
        $rootScope.$apply();

        expect(userNum).toEqual(2);


    }));
});