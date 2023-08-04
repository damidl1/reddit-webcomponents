class PostCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.post) {
            console.log(this.post)
            
            this.shadowRoot.innerHTML = `
            <style>
            .card{
                display: flex;
                flex-direction: column;
                background-color: wheat;
                border-radius: 16px;
                padding: 16px;
                margin-bottom: 4px;
            }
            
            .card-title{
                font-size: x-large;
                font-weight: bold;
            }
            
            
            </style>
            `

            this.shadowRoot.innerHTML += `
            
            <div class="card">

             <span class="card-title">${this.post.data.title}</span>
             <span class="card-author">${this.post.data.author}</span>

                <div class="card-details">
                    <span class="card-detail">${this.toHumanTime(this.post.data.created)}</span>
                    <a class="card-detail" href="${this.post.data.url}" target="_blank">Vai al post</a>
                    <img src="${this.post.data.thumbnail}" alt="thumbnail">
                </div>
            </div>
            
            `

            // const postThumbnail = this.shadowRoot.getElementById('post-thumbnail');
            // const img = document.createElement('img');
            // img.src = this.post.data.thumbnail;
            // postThumbnail.appendChild(img);

        }
    }

    toHumanTime(timestamp){  // funzione per convertire date

        const timestampInMills = timestamp * 1000; //per trasformare in millisecondi

        const now = Date.now(); // new Date().getTime(); // due modi per prendere data attuale
        
        const delta = now - timestampInMills;

        const seconds = parseInt(delta / 1000);  // troviamo i secondi
    
        if (seconds < 60) { // se i secondi sono minori di 60 ritorna i secondi
            return seconds + ' secondi fa...';
        }
        
        const minutes = parseInt(seconds / 60); // per trovare i minuti
        
        if (minutes < 60) {
            return minutes + ' minuti fa...';
        }

        const hours = parseInt(minutes / 60);

        if (hours < 24) {
            return hours + ' ore fa...';
        }

        return parseInt(hours / 24) + ' giorni fa...';
    }
}

customElements.define('post-card', PostCardComponent);

