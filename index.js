let div = document.getElementById('container')


const getallstation = async()=>{
    let req = await fetch('https://mtaapi.herokuapp.com/stations')
    let res = await req.json()
    console.log(res)
    res.result.forEach(element => {
        console.log(element)
        let h2 = document.createElement('h2')
        h2.innerText=element.name
        div.appendChild(h2)
    });
}
getallstation()