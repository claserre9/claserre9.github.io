import BaseViewModel from "./BaseViewModel";
import { computed, observable } from "knockout";

export default class AppViewModel extends BaseViewModel {
  constructor() {
    super();
    this.template = `<h1>My Resume</h1>`;
  }
}
