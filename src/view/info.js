import {
    info
} from "autoprefixer";

class infoElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="text container d-flex justify-content-center text-center flex-column">
        <h2 class="sec-heading m-4 p-2">Become Expert</h2>
        <div class="sec-texting m-3">
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nemo numquam deserunt quis culpa.
                Non quisquam animi, dignissimos veritatis veniam, dolorum ipsam amet laudantium quaerat numquam
                porro, suscipit debitis similique corporis! Porro laboriosam nemo nesciunt voluptas maiores
                perferendis quibusdam labore. Odit illum minus laborum accusamus in dolores a excepturi
                dignissimos.</p>
        </div>
    </div>

    <div class="sec-howLearn container d-flex flex-column justify-content-center text-center">
        <h2>How We Learn </h2>

        <p class=" m-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi at nobis delectus
            laudantium
            autem optio beatae ratione corrupti commodi blanditiis esse soluta debitis et repudiandae voluptatem
            cupiditate quaerat, ad ex natus fugit itaque. Quae reiciendis, quibusdam similique ipsa esse cumque
            omnis libero eum dolorem nostrum dicta dignissimos voluptatibus saepe!</p>
        <div class="button p-1 m-1">
            <button type="button" class=" h-25 btn btn-outline-info">Klik</button>
        </div>
    </div>`
    }
}

customElements.define("info-element", infoElement);