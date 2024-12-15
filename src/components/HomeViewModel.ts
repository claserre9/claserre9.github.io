import BaseViewModel from "./BaseViewModel";
import {getFrenchResume, getEnglishResume} from "./resumes";

export default class HomeViewModel extends BaseViewModel {
    constructor(context: PageJS.Context | undefined) {
        super(context);
        // @ts-ignore
        if (this.context.path === '/en')
            this.template = getEnglishResume();
        else { // @ts-ignore
            if (this.context.path === '/fr')
                this.template = getFrenchResume();
        }
    }
}
