const ximar= async()=>{

    try{
       
        const res= await fetch('https://rickandmortyapi.com/api/character/')
        const data= await res.json()
        console.log(data.results),data.results.forEach(element => {element.name});
        

    }

    catch(error){console.log(error)}
}

ximar()