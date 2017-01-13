/**
 * Created by jupiterli on 13/01/2017.
 */

var mockUserData = [
    {customerID: '1', name: 'benwei'}
];

describe('UnitTest SimpleCtrl', function () {

    // generate unitTestApp module
    beforeEach(module('unitTestApp'));

    // declare object that will be involved
    var scope, ctrl;

    // inject required module and services
    beforeEach(inject(function ($controller, $rootScope) {
        // simulate a scope as all scope is created by rootScope
        scope = $rootScope.$new();

        // simulate controller and pass scope that just simulated to this controller
        ctrl = $controller('SimpleCtrl', {$scope : scope});
    }));

    // be aware of that here it is using inject, instead of direct function declaration, to declare
    // the function
    // to do, so what are the differences
    it("Should create name Simple in SimpleCtrl", inject(function () {
        expect(scope.name).toEqual('Simple')
    }));

    // http get retrieval data
    it('GetUser should fetch users', inject(function ($injector) {
        // $httpBackend is a simulated http response service provided by angular mock
        // get it by $injector
        var $httpBackend = $injector.get('$httpBackend');

        var valid_respond = readJSON('test/mock/data.json');
        $httpBackend.when('GET', '/auth.py').respond(valid_respond);

        $httpBackend.when('GET', '/auth.py').respond(mockUserData[0]);

        scope.GetUser();

        // change asy to sym, force retrieval data
        $httpBackend.flush();

        expect(scope.user.length).toEqual(2);
    }))
});