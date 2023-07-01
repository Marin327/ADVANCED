function solve(dataAsJson) {
    const result = [];
    
    result.push('<table>');

    const data = JSON.parse(dataAsJson);

    const props = Object.keys(data[0]);
    result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (let entry of data) {
        result.push(`  <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
    }
    result.push('</table>');
    return result.join('\n');
}
console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`))

//
console.log("-------");
//

function foo(str) {
    const parsed = JSON.parse(str)
    const escapeChar = w =>
        `${w}`
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    const makeRow = (tag, data) =>
        `<tr>${data.map(x => `<${tag}>${escapeChar(x)}</${tag}>`).join("")}</tr>`

    return `<table>
${makeRow("th", Object.keys(parsed[0]))}
${parsed.map(x => makeRow("td", Object.values(x))).join("\n")}
</table>`
}
foo(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)

//
console.log("------");
//

function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);
 
    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');
 
    console.log(outputArr.join('\n'));
 
    function makeKeyRow(arr) {
        let result = '  <tr>';
        Object.keys(arr[0]).forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }
 
    function makeValueRow(obj) {
        let result =  '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '</tr>';
        return result;
    }
 
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}
 fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)


