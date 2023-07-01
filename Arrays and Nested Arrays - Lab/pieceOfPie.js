function pie(arr, a, b) {
    return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1);
}
pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

//
console.log("---------");
//

function pieS(pies, first, last) {
   const firstIndex = pies.indexOf(first);
   const lastIndex = pies.indexOf(last);
   
   return pies.slice(firstIndex, lastIndex + 1);

}
pieS(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');