let fetchJSONButton = document.getElementById('fetchJSON');
fetchJSONButton.addEventListener('click',fetchJSON);

let fetchTXTButton = document.getElementById('fetchTXT');
fetchTXTButton.addEventListener('click',fetchTXT);

let fetchIMGButton = document.getElementById('fetchIMG');
fetchIMGButton.addEventListener('click',fetchIMG);



function fetchJSON(){
    fetch('data.json')
    .then(result=>{
        return result.json()
    })
    .then(res=>{
        console.log(res);
    })
    .catch(error=>{
        console.error(error)
    }
    )
}

function fetchTXT(){
    fetch('data.txt')
    .then(result=>{
        return result.text()
    })
    .then(res=>{
        console.log(res);
    })
    .catch(error=>{
        console.error(error)
    }
    )
}
function fetchIMG(){
    fetch('ginger.png')
    .then(result=>{
        return result.blob()
    })
    .then(res=>{
       // console.log(res);
       let container = document.getElementById('container');
       let img = document.createElement('img');
       container.appendChild(img)
       const imgURL = URL.createObjectURL(res);
       img.src = imgURL;
    })
    .catch(error=>{
        console.error(error)
    }
    )
}