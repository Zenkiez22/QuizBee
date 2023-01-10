var myQuestions = [
    {
        question: "1. Sino ang naging pangulo ng Kongreso ng Malolos?",
        answers: {
            a: 'Emilio Aguinaldo',
            b: 'Narciso Claveria',
            c: 'Pedro Paterno',
            d: 'Trinidad Tecson'
        },
        correctAnswer: 'c'
    },
    {
        question: "2. Sino ang kauna-unahang babaeng naging kasapi ng Katipunan?",
        answers: {
            a: 'Trinidad Tecson',
            b: 'Marina dizon-Santiago',
            c: 'Gregoria De Jesus',
            d: 'Teresa Magbanua'
        },
        correctAnswer: 'c'
    },
    {
        question: "3. Hindi pinipilit ng mga kasapi ng Katipunan na lumagda ng sariling dugo ang mga kababaihan,ngunit dahil sa kanyang tapang ay kusang-loob syang lumagda sa pamamagitan ng sariling dugo,sinong babaeng kasapi ng katipunan ito?",
        answers: {
            a: 'Melchora Aquino',
            b: 'Trinidad Tecson',
            c: 'Teresa Magbanua',
            d: 'Gregoria DE Jesus'
        },
        correctAnswer: 'c'
    },
    {
        question: "4. Ano ang kabisera ng Misamis Occidental?",
        answers: {
            a: 'Cabaroges City',
            b: 'Cagayan De Oro City',
            c: 'Oroquieta City',
            d: 'Bacolod City'
        },
        correctAnswer: 'c'
    },
    {
        question: "5. Saan sa Pilipinas matatagpuan ang Tiwi Hotspring?",
        answers: {
            a: 'Albay',
            b: 'Iloilo',
            c: 'Laguna',
            d: 'Quezon'
        },
        correctAnswer: 'a'
    },
    {
        question: "6. Kailan Pinatay si Andres Bonifacio?",
        answers: {
            a: 'Mayo 10.1997',
            b: 'Mayo 10,1897',
            c: 'Abril 10.1898',
            d: 'Abril 16,1897'
        },
        correctAnswer: 'b'
    },
    {
        question: "7. Sino ang bumaril sa 2 pilipinong tumatawid sa tulay ng San juan Del Monte?",
        answers: {
            a: 'William Grayson',
            b: 'Willie Grayson',
            c: 'Jordan Grayson',
            d: 'Williard Grayson'
        },
        correctAnswer: 'a'
    },
    {
        question: "8. Isa syang espanyol na naging liberal ang pamamahala sa mga Pilipino,sino sya?",
        answers: {
            a: 'Gob.Hen.Ramon Blanco',
            b: 'Gob.Hen.Jose Vargas',
            c: 'Gob.Hen.Miguel Lopez De Legazpi',
            d: 'Gob.Hen.Carlos Ma. Dela Torre'
        },
        correctAnswer: 'd'
    },
    {
        question: "9. Saan pinatay si Andres Bonifacio?",
        answers: {
            a: 'Malagondon,Cavite',
            b: 'Kawit,Cavite',
            c: 'Calamba Laguna',
            d: 'Sta.Cruz laguna'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Sino ang kauna-unahang Gob.Militar Sa Pilipinas?",
        answers: {
            a: 'Wesley Meritt',
            b: 'Jacob Gould Schurman',
            c: 'Arthur mcArthur',
            d: 'William Taft'
        },
        correctAnswer: 'a'
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
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
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
        }
      }
      
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