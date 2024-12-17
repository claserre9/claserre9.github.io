import { applyBindings, cleanNode, dataFor } from "knockout";

export class BaseViewModel {
    public template: string | undefined | null;
    public context: PageJS.Context | undefined;
    public selector: any;

    constructor(context: PageJS.Context | undefined = undefined) {
        this.template = null;
        this.context = context;
        this.selector = null;
    }

    public render(selector: string = "app", context: PageJS.Context | undefined = undefined): this {
        this.selector = selector;
        this.setContext(context);
        this.load(selector);
        this.onTemplateRendered();
        return this;
    }

    public destroy() {
        const element = document.getElementById(this.selector);
        if (element) {
            cleanNode(element);
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        } else {
            console.error(`Element with id "${this.selector}" not found.`);
        }
    }

    public setContext(context: PageJS.Context | undefined): this {
        this.context = context;
        return this;
    }

    public getContext(): PageJS.Context | undefined {
        return this.context;
    }

    public setTemplate(template: string | undefined | null): this {
        this.template = template;
        return this;
    }

    public observableFrom(selector: string) {
        const element = document.getElementById(selector);
        if (!element) {
            return null;
        }
        return dataFor(element);
    }

    private load(selector: string): void {
        const container = document.getElementById(selector);
        if (container && typeof this.template === "string") {
            container.innerHTML = this.template;
            cleanNode(container);
            applyBindings(this, container);
        } else {
            console.error(`Element with id "${selector}" not found or template is invalid.`);
        }
    }

    protected onTemplateRendered(): void {
        console.log("Template rendered.");
    }

}


export const renderView = (ViewModel: new (context?: PageJS.Context) => any, context?: PageJS.Context): void => {
    const viewModel = new ViewModel(context);
    viewModel.render();
};


