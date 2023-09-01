var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function constractTheURl(text){
    return serverURL+"?text="+text
}


function clickHandler(){
    var inputTxt = textInput.value
    fetch(constractTheURl(inputTxt))
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)