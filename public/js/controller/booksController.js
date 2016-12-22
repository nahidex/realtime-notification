app.controller('booksController', function($scope, bookService){
	bookService.getAll().then(function(allBooks){
		$scope.allBooks = allBooks;
	});
});