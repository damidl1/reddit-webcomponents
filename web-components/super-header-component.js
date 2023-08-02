class SuperHeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML = '';
        const style = document.createElement('style');
        style.innerHTML = `h1{color: ${this.getAttribute('title-color') || 'green'}}`;
        this.shadowRoot.appendChild(style);

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.getAttribute('super-title') + ' Fiumicelli, Falzone & Di Lionardo edition'))
        this.shadowRoot.appendChild(h1);
    }
}

customElements.define('super-header', SuperHeaderComponent);

