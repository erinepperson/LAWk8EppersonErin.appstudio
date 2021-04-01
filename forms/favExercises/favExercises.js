var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){

    for (i=0; i< exercises.length; i++){
        selExercises.addItem(exercises[i])
}
}

selExercises.onfocusout = function() {}
btnChoice.onclick = function(){
    if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank"){
        lblChoice.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]}.`
} else {
        lblChoice.value = "You did not pick the two core exercises."
}
}

btnNext.onclick = function (){
ChangeForm(mobileNav)
}
