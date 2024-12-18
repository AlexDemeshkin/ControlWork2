// import { generateId } from '../utils.js';
import { applicants } from "../mock/applicants.js";

export default class ApplicantsModel {
  #boardApplicants = applicants;
  #observers = [];

  get applicants() {
    return this.#boardApplicants;
  }


  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter((obs) => obs !== observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }
}
