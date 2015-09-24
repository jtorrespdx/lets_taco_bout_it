tacoBout.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [{ name: 'What is a taco?', id: 1, answers: [{ name: 'A snack sized bite of heaven.' }], answered: true }, { name: 'Corn vs flour?', id: 2, answers: [{ name: 'Corn. Always.' }], answered: true }, { name: 'Is nine tacos too many?', id: 3, answers: [], answered :false }];
  factory.addQuestion = function() {
    factory.questions.push({ name: factory.questionName, id: factory.questions.length + 1, answers: [], answered: false });
    factory.questionName = "";
    factory.questionAnswered = false;
  };

  return factory;
});
