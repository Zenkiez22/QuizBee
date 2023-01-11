var myQuestions = [
    {
      question: "1. What is the sum of 130+125+191?",
      answers: {
        a: 335,
        b: 456,
        c: 446,
        d: 426
      },
      correctAnswer: 'c'
    },
    {
      question: "2. If we minus 712 from 1500, how much do we get?",
      answers: {
        a: 788,
        b: 778,
        c: 768,
        d: 758
      },
      correctAnswer: 'a'
    },
    {
      question: "3. 50 times of 8 is equal to:",
      answers: {
        a: 80,
        b: 400,
        c: 800,
        d: 4000
      },
      correctAnswer: 'b'
    },
    {
      question: "4. 110 divided by 10 is:",
      answers: {
        a: 11,
        b: 10,
        c: 5,
        d: 'None of these'
      },
      correctAnswer: 'a'
    },
    {
      question: "5. 20+(90÷2) is equal to:",
      answers: {
        a: 50,
        b: 55,
        c: 65,
        d: 60
      },
      correctAnswer: 'c'
    },
    {
      question: "6. The product of 82 and 5 is:",
      answers: {
        a: 400,
        b: 410,
        c: 420,
        d: 'None of these'
      },
      correctAnswer: 'b'
    },
    {
      question: "7. Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
      answers: {
        a: 10,
        b: 11,
        c: 12,
        d: 13
      },
      correctAnswer: 'c'
    },
    {
      question: "8. Solve 24÷8+2.",
      answers: {
        a: 5,
        b: 6,
        c: 8,
        d: 12
      },
      correctAnswer: 'a'
    },
    {
      question: "9. Solve: 300 – (150×2)",
      answers: {
        a: 150,
        b: 100,
        c: 50,
        d: 0
      },
      correctAnswer: 'd'
    },
    {
      question: "10. The product of 121 x 0 x 200 x 25 is",
      answers: {
        a: 1500,
        b: 0,
        c: 4000,
        d: 'None of these'
      },
      correctAnswer: 'b'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label><br>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;

      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              //+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label><br>'
          );
        }
        answers.push('<label class="correctAnswer">Correct answer: ' + questions[i].correctAnswer + '</label>');
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
          console.log(questions[i].correctAnswer);
        }

      }
      
      


      // finally combine our output list into one string of html and put it on the page
      //quizContainer.innerHTML = "";
      quizContainer.innerHTML = output.join('');

      //conditional statements if passed or fail
      let msgRemarks = (numCorrect>=7) ? 'Remarks: Passed':'Remarks: Failed';
      
      // show number of correct answers out of total
      // change to alert
      //resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
      alert(`Result: ${numCorrect} out of ${questions.length}, ${msgRemarks}`);
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }