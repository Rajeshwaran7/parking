import axios from 'axios';

const URL='http://localhost:8080/park/view-slot';

const SlotService = {
  getSlots: function() {
    return axios.get(URL);
  }
}

export default SlotService;
