import { observable, action, computed } from 'mobx';
class ContactStore {

    @observable
    contacts = [];
    @observable
    contact = {}

    // @computed
  
    // get contact() {
    //     return this.contacts;
    // }
    
    // @computed
  
    // get contactById() {
    //     return this.contact;
    // }
    
    

    constructor(rootStore, apiService) {
        this.rootStore = rootStore;
        this.apiService = apiService;
    }



    @action
    getContacts(term) {
        this.apiService.getContacts({ term }).then(contacts => {
            this.contacts = contacts;
        });
    }
    @action
    getContactById(id) {
        this.apiService.getContactById(id)
        .then(contactSelected => {
            this.contact = contactSelected
        });
    }
    @action
    createEmptyContact() {
        debugger
        this.contact = {
            _id: null,
            name: '',
            phone: '',
            email: ''
        }
    }
    @action
    saveContact(contact) {
        this.apiService.saveContact(contact).then(contact => {
            this.contact = contact
        });
    }
    @action
    deleteContact(id) {
        return this.apiService.deleteContact(id)
    }
}
export default ContactStore;