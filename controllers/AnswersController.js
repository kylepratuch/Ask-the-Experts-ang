askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
   console.log(QuestionsFactory.question);
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  console.log($scope.question);
  $scope.addAnswer = function() {
    $scope.question.answers.push(
      { text: $scope.answerText
        // id: scope.answers.length + 1,
        // upvotes: $scope.upvotes,
        // discussion: []
        }
    );
    $scope.answerText = null;
  //  $scope.upvotes = 0;
  }
});
