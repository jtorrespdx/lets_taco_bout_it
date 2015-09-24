tacoBout.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    // console.log(answerName);
    $scope.question.answers.push({ name: $scope.answerName, questionAnswered: true });
    $scope.answerName = null;
    $scope.question.answered = true;
    console.log($scope.question.answers[0]);
  }
});
