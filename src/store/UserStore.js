import { observable, action, computed } from 'mobx';

class UserStore {
    constructor(rootStore, apiService) {
        this.rootStore = rootStore;
        this.apiService = apiService;
    }

    @observable
    user = {};
    @observable
    movesPerContact = [];
    

    // @computed

    // get contact() {
    //     return this.user;
    // }
    // get movesPerContact() {
    //     return this.movesPerContact;
    // }


    @action
    getUser() {
        this.user = this.apiService.loadUser();
        
    }
    @action
    getMoveById(id) {
        this.apiService.getMoveById(id)
        .then(moves => this.movesPerContact = moves)
    }


}
export default UserStore;