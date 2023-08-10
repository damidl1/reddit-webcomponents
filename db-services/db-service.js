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

const dbService = new DBService();

window.dbService = dbService;

