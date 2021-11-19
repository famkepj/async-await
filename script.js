async function getData(){
    try{    
        // const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}";
        const apiUrl =  "https://api.themoviedb.org/3/genre/movie/list?api_key=356e96dc3634b34c274d78d0873db8be";
        var res = await fetch(apiUrl);
        var genre = await res.json();
        console.log (genre);
    } catch(err){
    console.log("error")
    }
}

getData()
