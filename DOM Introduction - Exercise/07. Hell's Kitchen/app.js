function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
const input = document.querySelector("#inputs>textarea");
const bestResturantsP = document.querySelector('#bestRestaurant>p');
const workersP = document.querySelector('#outputs #workers p');

   function onClick () {

     let arr = JSON.parse(input.value);
     let restaurants = {};

     arr.forEach((line) => {
      const tokens = line.split(" - ");
      const name = tokens[0];
      const workersArray = tokens[1].split(", ");
      let workers = [];

      for(const worker of workersArray) {
         let workerTokes = worker.split(" ");
         const salary = Number(workerTokes[1]);
         workers.push({ name: workerTokes[0], salary })
      }

      if(restaurants[name]) {
         workers = workers.concat(restaurants[name].workers);
      }

      workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
      let bestSalary = workers[0].salary;
      let averageSalary = 
      workers.reduce((sum, worker) => sum + worker.salary, 0) / 
      workers.length;
      restaurants[name] = {
         workers,
         averageSalary,
         bestSalary,
      };
     });
      let bestRestaurantsSalary = 0;
      let best = undefined;

      for(const name in restaurants) {
         if(restaurants[name].averageSalary > bestRestaurantsSalary) {
            bestRestaurantsSalary = restaurants[name].averageSalary;
            best = { name, ...restaurants[name] }
         }
      }

      bestResturantsP.textContent = `Name: ${
         best.name
      } Average Salary: ${best.averageSalary.toFixed(
         2
         )} Best Salary: ${best.bestSalary.toFixed(2)}`;
      let workersResult = [];
      best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersP.innerText = workersResult.join(" ");
   }
}

//
console.log("-----------");
//
function solve() {
   const html = {
       inputField: document.querySelector("#inputs textarea"),
       outputBestName: document.querySelector("#bestRestaurant p"),
       outputBestWorkers: document.querySelector("#workers p"),
   }

   const getBest = data =>
       Object.entries(data).sort(
           (x, y) => getAverage(y[1]) - getAverage(x[1])
       )[0]

   const getAverage = workersData =>
       workersData.reduce((a, v) => a + v[1], 0) / workersData.length

   function deserialize(data) {
       const getWorkers = data =>
           data
               .split(", ")
               .map(x => x.split(" ").map(y => (isNaN(y) ? y : Number(y))))

       return JSON.parse(data)
           .map(x => x.split(" - "))
           .reduce((a, v) => {
               const [name, workers] = v

               a[name] = a[name]
                   ? [...a[name], ...getWorkers(workers)]
                   : getWorkers(workers)
               return a
           }, {})
   }

   function displayResult(data) {
       let [name, workers] = data
       workers = workers.sort((x, y) => y[1] - x[1])

       html.outputBestName.innerHTML = `Name: ${name} Average Salary: ${getAverage(
           workers
       ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`

       html.outputBestWorkers.innerHTML = `${workers
           .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
           .join(" ")}`
   }

   document
       .getElementById("btnSend")
       .addEventListener("click", () =>
           displayResult(getBest(deserialize(html.inputField.value)))
       )
}