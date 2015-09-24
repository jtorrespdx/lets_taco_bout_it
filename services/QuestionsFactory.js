tacoBout.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [{ name: 'What is a taco?', id: 1, answers: [{ name: 'A snack sized bite of heaven.' }]}, { name: 'Corn vs flour?', id: 2, answers: [{ name: 'Corn. Always.' }]}, { name: 'Is nine tacos too many?', id: 3, answers: [{name: 'Nine is not as many as twelve.'}]}];
  factory.addQuestion = function() {
    factory.questions.push({ name: factory.questionName, id: factory.questions.length + 1, answers: [] });
    factory.questionName = null;
  };

  return factory;
});
