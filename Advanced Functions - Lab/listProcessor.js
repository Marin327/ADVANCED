function solve(commands) {
    function createProcessor() {
        let state = [];

        function add(srt) {
            state.push(srt);
        }

        function remove(str) {
            state = state.filter(x=>x !== str);
        }

        function print() {
            console.log(state.join(','));
        }
        return {
            add,
            remove,
            print
        };
    }

    let processor = createProcessor();

    commands.forEach(element => {
        let [command, value] = element.split(' ');
        processor[command](value);
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
//
console.log("------");
//
function foo(input) {
    let arr = []

    let obj = {
        add: str => arr.push(str),
        remove: str => (arr = arr.filter(x => x !== str)),
        print: () => console.log(arr.join(",")),
    }

    input.forEach(x => {
        const [command, value] = x.split(" ")

        obj[command](value)
    })
}
foo(['add hello', 'add again', 'remove hello', 'add again', 'print']);
foo(['add pesho', 'add george', 'add peter', 'remove peter','print']);