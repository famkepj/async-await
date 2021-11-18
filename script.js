async function getData(){
    try{    
        const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key="+api_key;
        var res = await fetch(apiUrl);
        return await res.json();
    } catch (err){
        console.log("error")
    }
}

getData()
