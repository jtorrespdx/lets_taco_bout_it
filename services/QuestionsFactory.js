tacoBout.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [ {name: 'What is a taco?', id: 1, answers: []}, {name: 'Corn vs flour?', id: 2, answers: []}, {name: 'Is nine tacos too many?', id: 3, answers: []} ];
  factory.addQuestion = function() {
    factory.questions.push({ name: factory.questionName, id: factory.questions.length + 1, answers: [] });
    factory.questionName = null;
  };

  return factory;
});
