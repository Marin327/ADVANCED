function foo(library, orders) {
    return orders.reduce((a, v) => {
        // both ways are 100/100, just wanted to experiment abit with spread and arrays to properties

        const temp = {}
        temp.name = v.template.name
        v.parts.forEach(x => {
            temp[x] = library[x]
        })
        a.push(temp)
        return a
    }, [])
    //     a.push({
    //         name: v.template.name,
    //         ...v.parts.reduce((a1, v1) => {
    //             a1[v1] = library[v1]
    //             return a1
    //         }, {}),
    //     })
    //     return a
    // }, [])
}
foo(const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);
    },
    scan: function () {
    console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
    };
    const orders = [
    {
    template: { name: 'ACME Printer'},
    parts: ['print']
    },
    {
    template: { name: 'Initech Scanner'},
    parts: ['scan']
    },
    {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']
    },
    {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
    }
    ];const products = factory(library, orders); console.log(products););

    //
    console.log("---------");
    //

    function factory() {

    }
    factory(const library = {
        print: function () {
        console.log(`${this.name} is printing a page`);
        },
        scan: function () {
        console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
        },
        };
        const orders = [
        {
        template: { name: 'ACME Printer'},
        parts: ['print']
        },
        {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
        },
        {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
        },
        {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
        }
        ];const products = factory(library, orders); console.log(products);)