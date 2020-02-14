const answers = [
    "Parijs",
    8,
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];
const questions = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel benen heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];
document.getElementById("start").addEventListener("click", rollQuestions);
function rollQuestions(){
    for(y in questions){
        var para = document.createElement("P");
        para.innerHTML = questions[y];  
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        document.body.appendChild(para);
        document.body.appendChild(input);}
        document.getElementById("start").removeEventListener("click", rollQuestions);
}

function checkAnswers(){
    var a = 0;
    var answerInput = document.querySelectorAll("input");
    for(i in answerInput){
        console.log(i);
        if(i >= 0 && answerInput[i].value == answers[i]){
            a++;
            console.log(a);
        }
    }
    document.querySelector('p').innerText = a + ": " + "right answers";
}