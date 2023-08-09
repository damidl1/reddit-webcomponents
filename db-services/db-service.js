class DBService {

    constructor(){

    }

    saveSelectedSubreddits(subreddits){

        localStorage.setItem('selectedSubreddits', JSON.stringify(subreddits));
    }

    getSelectedSubreddits(){
        const selectedSubreddits = localStorage.getItem('selectedSubreddits');
        return selectedSubreddits ? JSON.parse(selectedSubreddits) : [];
    }
}

window.DBService = new DBService();