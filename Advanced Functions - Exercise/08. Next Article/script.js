function getArticleGenerator(articles) {
   const divContent = document.getElementById("content");
   return function showNext() {
    if(articles.length) 
    {
        let article = document.createElement("article");
        article.textContent = articles.shift();
        divContent.appendChild(article);
    }
   };
}
//
console.log("----------");
//
function getArticleGenerator(articles) {
    const art = articles

    return ()=>{
        if (art.length > 0){
            const article = document.createElement('article');
            article.textContent = art.shift();
            document.getElementById('content').appendChild(article);
        }
    }
}
//
console.log("--------");
//

