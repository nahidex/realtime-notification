app.service('bookService', function($http){
	return {
		getAll: function(){
			return $http.get("http://localhost:8080/api")
			.then(function(response) {
				return response.data;
			});
		},
		addBook: function(book){
			return $http.post("http://localhost:8080/api", book).then(function(response) {
				return response.data;
			});
		}
	}
});