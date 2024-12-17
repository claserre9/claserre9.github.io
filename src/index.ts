import page from "page";
import HomeViewModel from "./components/HomeViewModel";
import NotFoundViewModel from "./components/NotFoundViewModel";

// Constants for paths
const PATH_ABOUT = "/about";
const PATH_FR = "/";
const PATH_EN = "/en";

function renderView(ViewModel: new (context?: PageJS.Context) => any, context?: PageJS.Context): void {
    const viewModel = new ViewModel(context);
    viewModel.render();
}

page("*", (context, next) => {
    console.log(`%c${context.path}`, 'color: white; background-color: blue; padding: 4px; border-radius: 4px;');
    next();
});

page(PATH_FR, (context) => renderView(HomeViewModel, context));
page(PATH_EN, (context) => renderView(HomeViewModel, context));
page("*", () => renderView(NotFoundViewModel));

page();