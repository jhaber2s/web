
import { LitElement, html} from 'lit-element';

class MyElement extends LitElement {


    static get properties() {

        return {
            color: { type: String },
            counter: { type: Number },
            limit: { type: Number }

        };

    }
    constructor() {
        super();
        this.color = "black";
        this.counter = 0;
        this.limit = 10;



    }




    render() {

        return html`
        <style>

#counterp{color : ${this.color}}
</style>
<button id="inc" @click="${this.inccounter}">inc</button>
<p id ="counterp"> ${this.counter}</p>
`;


    }



    inccounter() {
        if (this.counter < this.limit) {

            ++this.counter;
        }
        else {


            this.color = "red";
            setTimeout(() =>{
                this.color = "black";

            },1000);
           
        }
    }

}
customElements.define('my-element', MyElement);

