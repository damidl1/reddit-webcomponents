class SuperFooterComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML = `
        
        <p>©Reddit Posts List 2023</p>
        `
    }
}

customElements.define('super-footer', SuperFooterComponent);

