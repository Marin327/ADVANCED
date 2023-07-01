function solve(tickets, orderBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    
   static getTicket(input) {
    const [destination, price, status] = input.split("|");
    return new Ticket(destination, Number(price), status);
   }
    }

  const sorts = {
    destination: (a, b) => a.destination.localeCompare(b.destination),
    price: (a, b) => a.price - b.price,
    status: (a, b) => a.status.localeCompare(b.status),
  };
    return tickets.map(Ticket.getTicket).
    sort(sorts[orderBy]);
}

console.log(solve([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'))
        //
        console.log("---------");
        //

        function solve(arr, criteria) {
            class Ticket {
                constructor(destination, price, status) {
                    this.destination = destination;
                    this.price = price;
                    this.status = status;
                }
            }
            const tickets = [];
            for (const line of arr) {
                let [destination, price, status] = line.split("|");
                price = Number(price);
                const currentTicket = new Ticket(destination, price, status);
                tickets.push(currentTicket);
            }
            const sorted = tickets.sort((a, b) => {
                if (criteria == 'destination') {
                    return a.destination.localeCompare(b.destination);
                } else if (criteria === 'status') {
                    return a.status.localeCompare(b.status);
                } else if (criteria === 'price') {
                    return a.price - b.price;
                }
            })
            return sorted;
        }
        console.log(solve([
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
            'destination'))
            //
        //
        console.log("-----------");

        function foo (data, crit) {
            class Ticket {
                price
                constructor (d, p, s) {
                    this.destination = d
                    this.price = p
                    this.status = s
                }
            }
        
            return data.slice().map(x => x.split('|'))
                       .map(([d, p, s]) => new Ticket(d, Number(p), s))
                       .sort((a, b) => {
                           return typeof a[crit] === 'number'
                               ? a[crit] - b[crit]
                               : a[crit].localeCompare(b[crit])
                       })
        }
        console.log(foo([
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
            'destination'))
            //