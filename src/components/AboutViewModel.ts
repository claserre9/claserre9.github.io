import BaseViewModel from "./BaseViewModel";
import { computed, observable } from "knockout";

export default class AboutViewModel extends BaseViewModel {
    constructor() {
        super();
        this.template = `<h1>About</h1>`;
    }
}
