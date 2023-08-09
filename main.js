fetch('https://www.reddit.com/r/aww/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts);
})

document.addEventListener('DOMContentLoaded', () => {
    const selectedSubreddits = window.DBService.getSelectedSubreddits();

    if (!selectedSubreddits.length) {
        const subredditDialog = document.createElement('subreddit-dialog');
        document.body.appendChild(subredditDialog);
    }
});