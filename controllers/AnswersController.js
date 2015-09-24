askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.answer = UtilitiesFactory.findById($scope.question.answers, $stateParams.answerId)
  $scope.addAnswer = function() {
    $scope.question.answers.push(
      { text: $scope.answerText,
        id: $scope.question.answers.length + 1,
        upvotes: $scope.upvotes = 0,
        discussion: []
        }
    );
    $scope.answerText = null;
  }

  $scope.addCommentToDiscussion = function() {
    $scope.answer.discussion.push($scope.comment);
    console.log($scope.answer.discussion);
  }

  // $scope.addToUpvote = function() {
  // var thisAnswer = findById($scope.question.answers,)
  //   }
});
