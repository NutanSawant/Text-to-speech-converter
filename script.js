let speech=new SpeechSynthesisUtterance();

let voices=[];
let voiceSelct=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
   // console.log(voices)
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceSelct.options[i]=new Option(voice.name,i)));
};

voiceSelct.addEventListener("change",()=>{
    speech.voice=voices[voiceSelct.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})

function msg() {
    
    let textareaContent = document.querySelector("textarea").value;
    let messageSpan=document.getElementById("show");

    if (textareaContent== "") {
        
        messageSpan.textContent = "Please write something...";

        setTimeout(() => {
            messageSpan.textContent = "";
        }, 2000);
    } 
}


