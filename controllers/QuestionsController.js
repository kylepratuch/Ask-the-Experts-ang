askExperts.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionFactory = QuestionsFactory;
});
