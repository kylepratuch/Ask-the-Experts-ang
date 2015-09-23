askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push(
      { text: $scope.answerText,
        id: $scope.question.answers.length + 1,
        upvotes: $scope.upvotes = 0
        // discussion: []
        }
    );
    console.log($scope.question.answers);
    $scope.answerText = null;
  }

  // $scope.addToUpvote = function() {
  // var thisAnswer = findById($scope.question.answers,)
  //   }
});
