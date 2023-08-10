fetch('https://www.reddit.com/r/aww/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts);
})

document.addEventListener('DOMContentLoaded', () => {
    // const posts = window.dbService.getSelectedSubreddits();
    const postsListComponent = document.querySelector('posts-list');
    const subredditDialog = document.querySelector('subreddit-dialog');

    // if (!posts.length) {
    //     const subredditDialog = document.createElement('subreddit-dialog');
    //     document.body.appendChild(subredditDialog);
    // } else {
    //     const postsListComponent = document.querySelector('posts-list');
    //     postsListComponent.render(posts);
    // }
});