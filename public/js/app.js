var app = angular.module('app', ['ui.router', 'pusher-angular']);

app.run(function($rootScope) {
	// window.io = new Pusher('cdd837b0666470e76cd4', {
	// 	cluster: 'ap1',
	// 	encrypted: true
	// });
});

app.config(function($stateProvider) {
	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: 'tpl/home.html',
		controller: function($scope){
		}
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: 'tpl/about.html',
		controller: function($scope){
		}
	}
	var allBooks = {
		name: 'allBooks',
		url: '/all-books',
		templateUrl: 'tpl/all-books.html',
		controller: 'booksController'
	}
	var addBook = {
		name: 'addBook',
		url: '/add-book',
		templateUrl: 'tpl/add-book.html',
		controller: 'addBookController'
	}
	var registerState = {
		name: 'register',
		url: '/register',
		templateUrl: 'tpl/register.html',
		controller: function($scope){
		}
	}

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	$stateProvider.state(registerState);
	$stateProvider.state(allBooks);
	$stateProvider.state(addBook);
});

