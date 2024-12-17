import BaseViewModel from "./BaseViewModel";

export default class NotFoundViewModel extends BaseViewModel {
    constructor() {
        super();
        this.template = `
            <div class="container text-center mt-5">
                <div class="alert alert-danger" role="alert">
                    <h1 class="display-4">404 - Page Not Found</h1>
                    <p class="lead">Sorry, the page you are looking for does not exist.</p>
                    <a href="/" class="btn btn-primary">Go to Homepage</a>
                </div>
            </div>
        `;
    }
}