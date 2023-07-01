function search() {
  const itemList = Array.from(document.querySelectorAll("#towns li"));
  const resultDiv = document.querySelector("#result");
  const searchInput = document.querySelector("#searchText");

  let counter = 0;

itemList.forEach((element) => {
   if (element.textContent.includes(searchInput.value)) {
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
      counter++;
   } else {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "none";
   }
});
resultDiv.textContent = `${counter} matches found`;
}
//
console.log("------");
//

function search() {
   const html = {
       value: document.getElementById("searchText").value,
       data: document.getElementById("towns").children,
       result: document.getElementById("result"),
   }
   let count = 0

   Array.from(html.data).map(x => {
       if (x.innerHTML.includes(html.value)) {
           x = x.style.textDecoration = "bold underline"
           count += 1
       }
       return x
   })

   html.result.innerHTML = `${count} matches found`
}
