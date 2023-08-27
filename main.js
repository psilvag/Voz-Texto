
const recognition= new webkitSpeechRecognition()
const btnStart=document.getElementById('btnStart')
const btnStop=document.getElementById('btnStop')
const text=document.getElementById('text-area')
const iconVoz=document.getElementById('iconVoz')
const nuevaArea=document.getElementById('nueva-area')
const listarBtn= document.getElementById('listarTexto')
const textos= document.getElementById('mistextos')
const borrarLista=document.getElementById('btn-borrar')

recognition.lang="es-ES"
recognition.continuous=true
let  stringResult=''


recognition.onresult=e=>{
    for(const result of e.results){
       
        stringResult=result[0].transcript
    }
    text.textContent+=stringResult

}

btnStart.addEventListener('click',()=>{
    recognition.start()
    iconVoz.style.display='block'
   
})

btnStop.addEventListener('click',()=>{
 recognition.stop()
 iconVoz.style.display='none'
 
})

nuevaArea.addEventListener('click',()=>{
   stringResult=''
   text.textContent=stringResult
   
})

listarBtn.addEventListener('click',()=>{
      const elementoTexto= document.createElement('p')
      if(text.value!=''){
        elementoTexto.textContent=text.value
        elementoTexto.classList.add('estiloTexto')
        textos.appendChild(elementoTexto)
      }
      else{
        alert('No se transcribio nada')
      
      }
    
      
})

borrarLista.addEventListener('click',()=>{
   textos.innerHTML=''
})


/**
 * document.getElementById("exportButton").addEventListener("click", function () {
  const textToExport = document.getElementById("myTextarea").value;

  const blob = new Blob([textToExport], { type: "application/msword" });
  saveAs(blob, "documento.doc");
});

 */