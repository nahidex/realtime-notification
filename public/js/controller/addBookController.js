app.controller('addBookController', function($scope, bookService){
	$scope.book = {};
	$scope.submit = function() {
		bookService.addBook($scope.book).then(function(res){
			console.log('added successfully');
		});
	}
});