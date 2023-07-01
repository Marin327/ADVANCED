class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(user, salary, position, department) {
        if (!user || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        } else {
            if (!this.departments[department]) {
                this.departments[department] = [];
            }
            this.departments[department].push({
                user,
                salary,
                position
            });
            return `New employee is hired. Name: ${user}. Position: ${position}`
        }
    }
    bestDepartment() {
        const avgDepartments = {};
        Object.keys(this.departments).forEach((key) => {
            const average =
                this.departments[key].reduce((acc, curr) => acc + curr.salary, 0) /
                this.departments[key].length;
            avgDepartments[key] = average;
        });
        const sorted = Object.entries(avgDepartments).sort((a, b) => b[1] - a[1]);
        let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1].toFixed(2)}`
        this.departments[sorted[0][0]].sort((a, b) => b.salary - a.salary ||
            a.user.localeCompare(b.user)).forEach((x) => {
            result += `\n${x.user} ${x.salary} ${x.position}`;
        });
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
//
console.log("---------");
//
class Company {
    constructor(departments) {
        this.departments = {}
    }

    addEmployee(...params) {
        if (params.some(x => !x)) {
            throw new Error("Invalid input!");
        }

        const [name, salaryString, position, department] = params;
        const salary = Number(salaryString);

        if (!(salary && salary > 0)) throw new Error("Invalid input!");

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const department = Object.entries(this.departments)
            .sort((a, b) => this.getAvgSalary(b) - this.getAvgSalary(a))[0];

        const avgSalary =  this.getAvgSalary(department[1]).toFixed(2)
        return `Best Department is: ${department[0]}\n` +
            `Average salary: ${avgSalary}\n` +
            department[1]
                .sort((a, b) => {
                    let result = b.salary - a.salary;
                    return result === 0 ? a.name.localeCompare(b.name) : result;
                })
                .map(e => `${e.name} ${e.salary} ${e.position}`).join("\n");

    }

    getAvgSalary(employees) {
        return employees.length ? employees.reduce((acc, e) => acc + e.salary, 0) / employees.length : 0;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
//
console.log("----------");
//
class Company {
	constructor () {
		this.departments = []
	}

	getDepart (name) {
		const depart = this.departments.find(x => x.name === name)

		if (! depart) {
			const temp = { name, employees: [], salaries: [], positions: [] }
			this.departments.push(temp)
			return temp
		} else {
			return depart
		}
	}

	getSalariesSum = depart => depart.salaries.reduce((a, v) => a + v, 0)

	bestSalaryDepart = () =>
		this.departments.sort((a, b) =>
			this.getSalariesSum(b) / b.salaries.length -
			this.getSalariesSum(a) / a.salaries.length)
			[0]

	addEmployee (...args) {
		if (
			args.some(x => x === undefined || x === null || x === '') ||
			args[1] < 0
		) {
			throw new Error('Invalid input!')
		}

		const department = this.getDepart(args[3])

		department.employees.push(args[0])
		department.salaries.push(args[1])
		department.positions.push(args[2])
		return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`
	}

	bestDepartment () {
		const best = this.bestSalaryDepart()

		const printData = best.employees
			.reduce((a, v, i) => {
				a[i] = []
				a[i].push(v, best.salaries[i], best.positions[i])
				return a
			}, [])
			.sort((a, b) => b[1] - a[1] === 0
				? a[0].localeCompare(b[0])
				: b[1] - a[1])
			.map(x => x.join(' '))
			.join('\n')

		return `Best Department is: ${best.name}
Average salary: ${(this.getSalariesSum(best) / best.salaries.length).toFixed(2)}
${printData}`
	}
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
