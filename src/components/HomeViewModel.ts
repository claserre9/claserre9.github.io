import {BaseViewModel} from "./BaseViewModel";
import {getFrenchResume, getEnglishResume} from "./resumes";

export default class HomeViewModel extends BaseViewModel {
    constructor(context: PageJS.Context | undefined) {
        super(context);
        if (context?.path.includes("en"))
            this.template = getEnglishResume();
        else this.template = getFrenchResume();
    }
}
