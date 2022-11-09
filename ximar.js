const ximar= async()=>{

    try{ 
        const res= await fetch( ' https://pokeapi.co/api/v2/pokemon/')
        const data= await res.json()
        console.log(data.results),data.results.forEach(element => {console.log(element.name)
            });
            const map=data.results.map(poke=>poke.name)
            console.log(map)
            const filtro=data.results.filter(poke=>poke.name !=='bulbasaur')
            console.log(filtro)

    }

    catch(error){console.log(error)}
}

ximar()