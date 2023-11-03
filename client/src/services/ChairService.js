import Api from "@/services/Api";

export default {
  index(search) {
    return Api().get('chairs');
  },
  show(chairId) {
    return Api().get('chair/' + chairId);
  },
  post(chair) {
    return Api().post('chair', chair);
  },
  put(chair) {
    return Api().put('chair/' + chair.id, chair);
  },
  delete(chair) {
    return Api().delete('chair/' + chair.id, chair);
  }
};
