class cardElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class=" container-fluid d-flex row m-auto">
        <div class="card bg-dark m-auto p-2 mt-2 " style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card bg-dark m-auto  p-2" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card bg-dark m-auto p-2" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`
    }
}
customElements.define("card-element", cardElement);