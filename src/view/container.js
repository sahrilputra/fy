class container extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class=" image-container">
        </div>
        <div class="mee-button-herSec d-flex mt-4">
            <div class="button mx-auto p-2 bg-info p-1 w-25 text-center rounded-3">Click ME</div>
        </div>
        <section class="hero-section h-auto m-3">
            <div class="px-3 d-flex justify-content-center flex-column text-center px-1 p-2">
                <h1>Welcome </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis tempora
                    consequuntur, amet deserunt fugit ad accusamus quo eligendi fuga!</p>
            </div>
        </section>
        <h1 class="text-center px-2 p-2 m-3 h-auto">Pick Your Line</h1>`
    }
}

customElements.define("container-element", container);