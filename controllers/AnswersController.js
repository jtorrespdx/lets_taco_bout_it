tacoBout.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push ({ name: $scope.answerName });
    $scope.studentName = null;
  }
});
