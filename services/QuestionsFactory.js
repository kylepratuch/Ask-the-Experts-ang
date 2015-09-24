askExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ text:factory.questionText, id:factory.questions.length +1, answers: [],answered: false });
    factory.questionText = null;
  };
  return factory;
});
