class PostsListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.postsArray = [];
        this.subreddits = ['aww', 'italy', 'photography', 'gaming', 'travel', 'music', 'food', 'news', 'sports', 'technology'];
        this.subredditLinks = [
            'https://www.reddit.com/r/aww/new.json',
            'https://www.reddit.com/r/italy/new.json',
            'https://www.reddit.com/r/photography/new.json',
            'https://www.reddit.com/r/gaming/new.json',
            'https://www.reddit.com/r/travel/new.json',
            'https://www.reddit.com/r/music/new.json',
            'https://www.reddit.com/r/food/new.json',
            'https://www.reddit.com/r/news/new.json',
            'https://www.reddit.com/r/sports/new.json',
            'https://www.reddit.com/r/technology/new.json'
        ];
    }

//     connectedCallback(){
//         fetch('https://www.reddit.com/r/aww/new.json')
//         .then(resp => resp.json())
//         .then(res => {
//             const data = res.data;
//             const posts = data.children;
//             this.postsArray = posts;
//             this.render(this.postsArray);
            
//         });
//     }

//     connectedCallback(){
//         const promises = this.subredditLinks.map(subredditLink => {
//             return fetch(subredditLink)
//             .then(resp => resp.json())
//             .then(res => res.data.children);
//         });
   

 
//  }

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

    // render(posts, subreddits = []) {
    //     const subredditLinks = subreddits.length > 0 ? subreddits : this.subredditLinks;
    //     const promises = subredditLinks.map(subredditLink => {
    //         return fetch(subredditLink)
    //         .then(resp => resp.json())
    //         .then(res => res.data.children);
    //     });

    //     Promise.all(promises)
    //     .then(results => {
    //         this.postsArray = results.flat();
    //         this.shadowRoot.innerHTML = '';
    //         this.createPosts(mainContainer);
    //     })
    //     .catch(error => {
    //         console.error('errore nel caricamento dei subreddit: ', error);
    //     })
    // }

}

customElements.define('posts-list', PostsListComponent);

