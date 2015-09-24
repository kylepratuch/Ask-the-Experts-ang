askExperts.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;

  $scope.iGotClicked = function(){
    console.log("I Got Clicked");
    console.log(varFedIn);

  }
});
