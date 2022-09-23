var searchResultContainer=document.getElementById('search-result-container');

const url="http://www.omdbapi.com/?t=wonderwomen&apikey=e16bcb3c";

window.addEventListener('load',  async(e)=>{
    // console.log("calling")
   const res=await  fetch(url).then((data)=>JSON.parse(data));
   console.log(res);
})
