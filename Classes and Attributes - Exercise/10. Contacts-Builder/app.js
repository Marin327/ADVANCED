// class Contact {
//     #online;

//     constructor(firstName, lastName, phone, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phone = phone;
//         this.email = email;
//         this.online = false;
//     }

//     get online() {
//         return this.#online;
//     }

//     set online(value) {
//         this.#online = value;

//         if (this.divTitle) {
//             this.divTitle.className = this.#online ? 'title online' : 'title';
//         }
//     }

//     render(id) {
//         this.article = document.createElement("article");
//         this.divTitle = document.createElement('div');

//         this.divTitle.classList.add('title');
//         this.divTitle.textContent = `${this.firstName} ${this.lastName}`

//         this.btn = document.createElement('button');
//         this.btn.textContent = '\u2139';

//         this.btn.addEventListener('click', (e) => {
//             this.divInfo.style.display =
//                 this.divInfo.style.display === 'none' ? 'block' : 'none';
//         })

//         this.divTitle.appendChild(this.btn);

//         this.divInfo = document.createElement('div');
//         this.divInfo.classList.add('info');
//         this.divInfo.style.display = 'none';

//         this.spanPhone = document.createElement('span');
//         this.spanPhone.textContent = `\u260E ${this.phone}`

//         this.spanEmail = document.createElement('span');
//         this.spanEmail.textContent = `\u2709 ${this.email}`;

//         this.divInfo.appendChild(this.spanPhone);
//         this.divInfo.appendChild(this.spanEmail);

//         this.article.appendChild(this.divTitle);
//         this.article.appendChild(this.divInfo);

//         document.getElementById(id).appendChild(this.article);
//     }
// }
//
console.log("------------");

//
class Contact {
	constructor (f, l, p, e) {
		this.firstName = f
		this.lastName = l
		this.phone = p
		this.email = e
		this._online = false
	}

	get online () {
		return this._online
	}

	set online (v) {
		this._online = v

		if (this.onlineDiv) {
			this.onlineDiv.className = this._online ? 'title online' : 'title'
		}
	}

	eFactory (tag, content = '') {
		const e = document.createElement(tag)
		e.innerHTML = content

		return e
	}

	render (id) {
		this.templ = this.eFactory('article')
		this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`)
		this.infoBtn = this.eFactory('button', '&#8505;')
		this.infoDiv =
			this.eFactory(
				'div',
				`<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
			)


		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.infoDiv.className = 'info'
		this.infoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoBtn)
		this.templ.appendChild(this.onlineDiv)
		this.templ.appendChild(this.infoDiv)

		document.getElementById(id).appendChild(this.templ)

		this.infoBtn.addEventListener('click', () => {
			this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
		})
	}
}