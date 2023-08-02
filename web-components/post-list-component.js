class PostsListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.postsArray = [];
    }

    connectedCallback(){
        fetch('https://www.reddit.com/r/aww/new.json')
        .then(resp => resp.json())
        .then(res => {
            const data = res.data;
            const posts = data.children;
            this.postsArray = posts;
            this.render(this.postsArray);
            
        });
    }


    render(posts){

        console.log(posts)

        this.shadowRoot.innerHTML = '';
        const mainContainer = document.createElement('div');
        this.shadowRoot.appendChild(mainContainer);

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const cardComponent = document.createElement('post-card');

            cardComponent.post = post;

            mainContainer.appendChild(cardComponent);
            
        }
    }

}

customElements.define('posts-list', PostsListComponent);

