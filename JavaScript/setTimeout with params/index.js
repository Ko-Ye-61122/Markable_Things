function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, give yourself ${points} points!`)
}

console.log("What is the capital of Peru?")
                             //function    timer(ms)         
const questionTimer = setTimeout(logAnswer, 3000, "Lima", 10)
                                                //param(1) (2)

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('Canelling....')
})