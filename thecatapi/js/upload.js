//link all pages

function vote (){
    window.location.assign("http://127.0.0.1:5500/html/vote.html");
}
function favourtie (){
    window.location.assign("http://127.0.0.1:5500/html/favourite.html");
}
function upload (){
    window.location.assign("http://127.0.0.1:5500/html/upload.html");
}


const uploadcat = (event) => {
    console.log('event',event.files)
    const formdata= new FormData()
    formdata.append('file',event.files[0])
    fetch('https://api.thecatapi.com/v1/images/upload',{
        method:"post",
        headers: {
           
            "x-api-key":"17d94b92-754f-46eb-99a0-65be65b5d18f"
        },
        body: formdata
    }).then((res)=>res.json()).then((data)=>{
        console.log('data',data)
        alert(`ID-${data.id} url=${data.url} approved=${data.approved}`)
    })
}