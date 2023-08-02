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
                    <span class="card-detail">${this.post.data.created}</span>
                    <span class="card-detail">${this.post.data.url}</span>
                    <span class="card-detail" id="post-thumbnail">${this.post.data.thumbnail}</span>
                </div>
            </div>
            
            `

            const postThumbnail = document.getElementById('post-thumbnail');
            const img = document.createElement('img')
            img.src = this.post.thumbnail
            postThumbnail.appendChild(img)

        }
    }
}

customElements.define('post-card', PostCardComponent);