function validator(request) {
    const {
        method,
        uri,
        version,
        message
    } = request;
    const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriPattern = /^([\w.])+$|^\*$/;
    const messagePattern = /^[^<>\\&\'\"]+$/;

    const errorMessage = (typeOfParam) => {
        throw new Error(`Invalid request header: Invalid ${typeOfParam}`)
    };
    if (!validMethod.includes(method) || !method) errorMessage("Method");
    if (!validVersions.includes(version) || !version) errorMessage("Version");
    if (!uriPattern.exec(uri) || !uri) errorMessage("URI");
    if (!messagePattern.exec(message) || !message) errorMessage("Message");
    return request;
}


validator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: ""
})
//
console.log("------");
//

function foo (request) {
    const errMsg = (x) => {
        const capitalized = x !== 'uri'
            ? x.charAt(0)
               .toLocaleUpperCase() + x.slice(1)
            : x.toLocaleUpperCase()
        return `Invalid request header: Invalid ${capitalized}`
    }

    function propsExist (obj, arr) {
        arr.forEach(x => {
            if (! obj.hasOwnProperty(x)) {
                throw new Error(errMsg(x))
            }
        })

        return obj
    }

    function validProps (obj) {
        const checks = {
            method: (m) => ['GET', 'POST', 'DELETE', 'CONNECT'].includes(m),
            uri: (u) => /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/g.test(u) && u !== '',
            version: (v) => [
                'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'
            ].includes(v),
            message: (m) => /^[^<>\\&'"]*$/g.test(m)
        }

        Object.entries(obj).forEach(([prop, value]) => {
            if (! checks[prop](value)) {
                throw new Error(errMsg(x[0]))
            }
        })

        return obj
    }

    return validProps(propsExist(request, [
        'method', 'uri', 'version', 'message'
    ]))
}
//
console.log("--------");
//
function validator(reques) {
    const method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/gm;
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!(reques.method && method.includes(reques.method))) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!(reques.uri && (reques.uri === '*' || uriRegex.test(reques.uri)))) {
        throw Error('Invalid request header: Invalid URI')
    }
    if (!(reques.version && versions.includes(reques.version))) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!(reques.hasOwnProperty('message') && (reques.message === '' || messageRegex.test(reques.message)))) {
        throw Error('Invalid request header: Invalid Message')
    }

    return reques
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});