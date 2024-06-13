const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById("searchbtn");

btn.addEventListener("click",()=>{
    let inpWord=document.getElementById("input-wrd").value;
    //console.log(inpWord);

    fetch(`${url}${inpWord}`).then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = `
        <div class="word">
        <h3>${inpWord}</h3>
        <button onclick = "playsound()">
            <i class="fas fa-volume-up"></i>
        </button>   
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class ="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class = " word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;

    sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
   // console.log(sound);
    })
    .catch(()=>{
        result.innerHTML=`<h3 class = "error">Couldn't find the word </h3>`;
    })

});

function playsound(){
   if(sound==""){
    alert("voice not available for this word");
   }
   else {
    sound.play();  // sound ki bt 
   }
   
}
