angular.module('app', ['uiSwitch'])
.constant('SERVERURL','http://localhost:4567/')

.controller('MyController', function($scope,piConnector) {
  $scope.enabled = true;
  $scope.onOff = true;
  $scope.yesNo = true;
  $scope.disabled = true;


  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
    piConnector.toggleSwitch($scope.enabled).then(function(data){
    	console.log(data);
    });
  };
})

.service('piConnector',function($http,SERVERURL){
	return {
		toggleSwitch:function(switchValue){
			return $http.post(SERVERURL+'pi/toggle',{value:switchValue});
		}
	}
});
