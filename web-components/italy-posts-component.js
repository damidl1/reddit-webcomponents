class ItalyPostsComponent extends HTMLElement{
    
    constructor(){

        super();
        this.attachShadow({mode: 'open'});
        this.postsArray = [];
    }


    connectedCallback(){
        fetch('https://www.reddit.com/r/italy/new.json')
        .then(resp => resp.json())
        .then(res => {
            console.log('Reddit api response: ', res);
            const data = res.data;
            const posts = data.children;
            this.postsArray = posts;
            this.render(this.postsArray);
           
        })
        .catch(error => {
            console.error('errore fetch: ', error);
        })
    }

    render(posts){

        this.shadowRoot.innerHTML = '';
        const mainWrapper = document.createElement('div');
        this.shadowRoot.appendChild(mainWrapper);


        for (let i = 0; i < posts.length; i++) {
            
            const post = posts[i];

            const postCard = document.createElement('post-card');

            postCard.post = post.data;

            mainWrapper.appendChild(postCard);
            
        }
        console.log(posts)
    }
    
}

customElements.define('italy-posts', ItalyPostsComponent);

