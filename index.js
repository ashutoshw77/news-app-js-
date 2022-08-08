const generalBtn = document.getElementById("general");
const sportsBtn = document.getElementById("sports");
const businessBtn = document.getElementById("business");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchB");

 const newsQuery =document.getElementById("newsQuery");
 const newsType =document.getElementById("newsType");
 const newsdetails =document.getElementById("newsdetails");
 
  var newsarray =[];
//  apis
 const Api_Key = "fc368cb329094df7aeedfc931ea01823";
 const Headline_News =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
 const General_News= "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
 const Business_News ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const Sports_News ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const Technology_News ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const Entertainment_News ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const Search_News = "https://newsapi.org/v2/everything?q=";


  window.onload =function(){
    newsType.innerHTML="<h4>HeadLines</h4>";
    fetchHeadLines();
  };
 
 generalBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>General News</h4>";

        fetchGeneralNews();
 });
 sportsBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>Sports</h4>";

    fetchSportsNews();
});
businessBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>Business</h4>";

    fetchBusinessNews();
});
entertainmentBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>Entertainment</h4>";

    fetchEntertainmentNews();
});
technologyBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>Technology</h4>";

    fetchTechnologyNews();
});
searchBtn.addEventListener("click" ,function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+" </h4>";

    fetchSearchNews();
});

// functions

const fetchHeadLines = async () =>{
   
    const response = await fetch(Headline_News+Api_Key);
    newsarray =[];
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}

const fetchGeneralNews = async () =>{
    newsarray =[];
    const response = await fetch(General_News+Api_Key);
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () =>{
    newsarray =[];
    const response = await fetch(Sports_News+Api_Key);
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}
const fetchBusinessNews = async () =>{
    newsarray =[];
    const response = await fetch(Business_News+Api_Key);
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}
const  fetchEntertainmentNews = async () =>{
    newsarray =[];
    const response = await fetch(Entertainment_News+Api_Key);
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}
const fetchTechnologyNews= async () =>{
    newsarray =[];
    const response = await fetch(Technology_News+Api_Key);
    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
        console.log(response.status ,resposne.statusText);
    }
    displayNews();
}
const   fetchSearchNews = async () =>{
    if(newsQuery==null)
     return;
    newsarray =[];
    const response = await fetch(Search_News+encodeURIComponent(newsQuery.value)+"&apiKey="+Api_Key);
     

    if(response.status>=200 && response.status<300){
        const myJson = await response.json();
        newsarray =myJson.articles;
    }else{
      console.log(response.status ,resposne.statusText);
    }
    displayNews();
}


    function displayNews (){
  newsdetails.innerHTML ="";
  if(newsarray.length==0){
    newsdetails.innerHTML="<h5>No Data Found</h5>";
    return;
  }
  newsarray.forEach(news =>{
      
     var date = news.publishedAt.split("T"); 

      var col = document.createElement('div');
      col.className="col-sm-12 col-md-4 col-lg-3 p-2"
     
      var card = document.createElement('div');
      card.className="p-2";

      var image = document.createElement('img');
       image.setAttribute("height","matchparent");
       image.setAttribute("width","100%");
       image.src =news.urlToImage;

       var cardBody = document.createElement('div');

       var newsHeading = document.createElement('h5');
       newsHeading.className ="card-title";
        newsHeading.innerHTML= news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className="text-info"; 
        dateHeading.innerHTML = date[0];
         
        var description = document.createElement('p');
         description.className="text-secondary"
         description.innerHTML =news.description;
         
         var link = document.createElement('a');
         link.className = "btn btn-dark";
         link.href = news.url;
         link.setAttribute("target","_blank");
         link.innerHTML="Read More"; 
          
         cardBody.appendChild(newsHeading);
         cardBody.appendChild(dateHeading);
         cardBody.appendChild(description);
         cardBody.appendChild(link);
         
         card.appendChild(image);
         card.appendChild(cardBody);
 
       

         col.appendChild(card);
          
         newsdetails.appendChild(col);

  });
}