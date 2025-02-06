import {BaseViewModel} from "./BaseViewModel";
import {getFrenchResume, getEnglishResume} from "./resumes";
import {observable} from "knockout";

export default class HomeViewModel extends BaseViewModel {
    public year = observable(new Date().getFullYear());
    constructor(context: PageJS.Context | undefined) {
        super(context);
        if (context?.path.includes("en"))
            this.template = getEnglishResume();
        else this.template = getFrenchResume();
    }
}
