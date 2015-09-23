tacoBout.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    // console.log(answerName);
    $scope.question.answers.push({ name: $scope.answerName });
    $scope.answerName = null;
    console.log($scope.question.answers[0]);
  }
});
