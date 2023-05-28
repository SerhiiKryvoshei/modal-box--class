// #region Globals

const btnOne = document.getElementById("myBtnOne");
const btnTwo = document.getElementById("myBtnTwo");

// #endregion Globals

// #region Attach Events

btnOne.addEventListener("click", () => {
	new ModalWindow("Text for modal One");
});

btnTwo.addEventListener("click", () => {
	new ModalWindow("Text for modal Two");
});

// #endregion Attach Events

// #region Event logic

function openModal() {
	modal.classList.add("open");
	attachModalEvents();
}

// #endregion Event logic

// #region Basic logic

class ModalWindow {
	constructor(text) {
		this.text = text;

		this.init();
	}

	init() {
		this.createMarkup();
		this.modal = document.getElementById("ksvModal");
		this.closeBtn = this.modal.querySelector(".close");
		this.attachModalEvents();
	}

	createMarkup() {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<div id="ksvModal" class="modal open">
				<div class="modal-content">
					<span class="close">&times;</span>
					<p>${this.text}</p>
				</div>
			</div>`
		);
	}

	attachModalEvents() {
		//устанавливаем контекст ModalWindow
		// иначе addEventListener меняет контекст на кнопку
		this.closeModal = this.closeModal.bind(this);

		//устанавливаем контекст ModalWindow
		this.handleClick = this.handleClick.bind(this);

		this.closeBtn.addEventListener("click", this.closeModal);
		window.addEventListener("click", this.handleClick);
	}

	handleClick(e) {
		if (e.target === this.modal) {
			this.closeModal();
		}
	}

	closeModal() {
		// console.log(this);

		this.detachModalEvents();

		this.modal.remove("open");
		this.modal = null;
	}

	detachModalEvents() {
		this.closeBtn.removeEventListener("click", this.closeModal);
		window.removeEventListener("click", this.handleClick);
	}
}

// #endregion Basic logic
