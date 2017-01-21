function SpamapsService($http) {
  'ngInject';

  const service = {};

  service.getMapData = function() {
    return new Promise((resolve, reject) => {
      $http.get('apiPath').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'SpamapsService',
  fn: SpamapsService
};
