function OpenlayersDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/spamaps/map.html',
    scope: {
      title: 'SpamapS',
      message: ''
    },
    link: function(scope, element){

       
    }
  };
}

export default {
  name: 'openlayersDirective',
  fn: OpenlayersDirective
};
