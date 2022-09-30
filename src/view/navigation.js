class NavElement extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHtml =
            `
        <header>
        <nav class=" container-fluid w-auto bg-dark p-4">
            <div class="hero-nav d-flex flex-lg-row text-center align-items-lg-center justify-content-evenly ">
                <h1 id="nav-brand" class=" align-items-start ">Heloo</h1>
                <a class=" nav-link nav py-1 px-0 active " href="">Home</a>
                <a class=" nav-link nav py-1 px-0" href="">Features</a>
                <a class=" nav-link nav py-1 px-0" href="">Contact</a>
            </div>
        </nav>
    </header>`;
    }

}

customElements.define("nav-element", NavElement);