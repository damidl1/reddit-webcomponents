

class SubredditDialogComponent extends HTMLElement {


    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        
        <div class="dialog">
    <h2 class="dialog-title">Seleziona i subreddit</h2>
    <label>
        <input type="checkbox" name="subreddit" value="aww" checked>
        aww
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="italy">
        italy
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="photography">
        photography
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="gaming">
        gaming
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="travel">
        travel
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="music">
        music
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="food">
        food
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="news">
        news
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="sports">
        sports
    </label>
    <label>
        <input type="checkbox" name="subreddit" value="technology">
        technology
    </label>

    <button id="confirmBtn">Conferma</button>
</div>
        
`;

const confirmButton = this.shadowRoot.getElementById('confirmBtn');
confirmButton.addEventListener('click', () => {
    const selectedSubreddits = Array.from(this.shadowRoot.querySelectorAll('input[name="subreddit"]:checked'))
        .map(checkbox => checkbox.value);

        if (selectedSubreddits.length > 0) {
            window.DBService.saveSelectedSubreddits(selectedSubreddits)
        }

        this.remove();
   });
  }
}

customElements.define('subreddit-dialog', SubredditDialogComponent);

