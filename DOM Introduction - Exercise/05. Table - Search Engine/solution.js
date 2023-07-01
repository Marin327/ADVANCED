function solve() {
   const input = document.querySelector("#searchField");
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
   Array.from(document.querySelectorAll('tbody tr')).forEach((row) => {
      if(row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())
      ) {
      row.classList.add("select");
      } else {
         row.classList.remove("select");
      }
   });
input.value = "";
   }
}
//
console.log("----------");
//

function solve() {
    const data = {
        collection: document.getElementsByTagName("tr"),
        getValue: () => document.getElementById("searchField").value,
    }

    function onClick({ collection, value }) {
        collection.map(x => (x.className = ""))
        collection.map(x => {
            if (x.innerHTML.includes(value)) x.className = "select"

            return x
        })
    }

    document.getElementById("searchBtn").addEventListener("click", () =>
        onClick({
            collection: Array.from(data.collection),
            value: data.getValue(),
        })
    )
}