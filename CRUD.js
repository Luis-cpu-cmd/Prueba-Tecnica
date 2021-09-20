
let xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr"),
$fetch = document.getElementById("fetch"),
$fragment = document.createDocumentFragment(),
read = document.getElementById('bMostrar')
let $table = document.getElementById("tableMain")
let $elementName = document.getElementById("Name")
//Mostrar
read.addEventListener("click",(e)=>{

    const $fragment=document.createDocumentFragment();
    fetch("https://restcountries.eu/rest/v2/all")
    .then((res)=> (res.ok ? res.json(): Promise.reject(res)))
    .then((json)=>{
        console.log(json);
        
        json.forEach(el=>{
            const $tr=document.createElement("tr");
            const $tdId = document.getElementById("ID")
            $tr.innerHTML=`${el.alpha2Code}`;
            $tr.id = `${el.alpha2Code}`
            $fragment.appendChild($tr);
            $tdId.appendChild($fragment)
            
        });
        json.forEach(el=>{
            const $tr=document.createElement("tr");
            const $tdName = document.getElementById("Name")
            const $button = document.getElementsByClassName("Eliminar")
            //Name
    
            $tr.innerHTML=`${el.name}`;
            $tr.id = `${el.alpha2Code}`
            $fragment.appendChild($tr);
            $tdName.appendChild($fragment)
            
            
        });
    
        json.forEach(el=>{
            const $tr=document.createElement("tr");
            const $tdPo = document.getElementById("Poblacion")
            $tr.innerHTML=`${el.population}`;
            $tr.id = `${el.alpha2Code}`
            $fragment.appendChild($tr);
            $tdPo.appendChild($fragment)
            
        });
        json.forEach(el=>{
            const $tr=document.createElement("tr");
            const $tdAc = document.getElementById("Accions")
            const $buttonDel = document.createElement("button")
            const $buttonEdit = document.createElement("button")
            $buttonDel.innerText="Eliminar"
            $buttonEdit.innerText="Editar"
            $tr.id = `${el.alpha2Code}`
            $tr.appendChild($buttonDel)
            $tr.appendChild($buttonEdit)
            $fragment.appendChild($tr);
            $tdAc.appendChild($fragment)
            $buttonDel.addEventListener("click",(e)=>{
               
                let $elementID = document.getElementById("ID")
                let $elementName = document.getElementById("Name")
               
                let $trID =document.getElementById($tr.id)
                $elementID.removeChild($trID)
                $elementName.removeChild($trID)
                $tr.removeChild($buttonDel)
                $tr.removeChild($buttonDel)
            })
        });

    })
    .catch((err)=>{
        console.log(err);
        let message = err.statusText || "Error";
            console.log(message);

    }).finally(()=>{
        console.log("Se ejecuto el finally");
    });

})

//Eliminar




