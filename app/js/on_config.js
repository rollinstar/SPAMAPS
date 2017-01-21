function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  
  
  $stateProvider
  .state('Spamaps', {
    url: '/spamaps',
    controller: 'SpamapsCtrl as spamaps',
    templateUrl: 'spamaps/spamaps.html',
    title: 'Spamaps'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
