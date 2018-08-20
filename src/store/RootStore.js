import ContactStore from './ContactStore';
import UserStore from './UserStore';
 
import UserService from '../services/UserService';
import ContactService from '../services/ContactService';

class RootStore {
  constructor() {
    this.contactStore = new ContactStore(this, ContactService);
    this.userStore = new UserStore(this, UserService);
  }
}
export default RootStore;