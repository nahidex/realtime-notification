app.directive('notificationDirective', function() {
	return {
		restrict : "E",
		template: '<div ng-show="showBubble" ng-click="showBubble=false" class="notification-bubble"><span>{{count}}</span></div>',
		controller: function($scope, $pusher) {
			$scope.showBubble = null;
			$scope.count = 0;
			$scope.notifcationList = [];
			var pusher = $pusher(window.io);
			var my_channel = pusher.subscribe('my-channel');
			my_channel.bind('my-event', function(data) {
				if (data) {
					$scope.notifcationList.push(data);
					$scope.showBubble = true;
					$scope.count ++;
					console.log($scope.notifcationList);
				}
			});
		}
	};
});