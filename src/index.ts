import page from "page";
import HomeViewModel from "./components/HomeViewModel";
import NotFoundViewModel from "./components/NotFoundViewModel";
import {logPathMiddleware} from "./middlewares";
import {renderView} from "./components/BaseViewModel";

const PATH_FR = "/";
const PATH_EN = "/en";


page("*", logPathMiddleware);
page(PATH_FR, (context) => renderView(HomeViewModel, context));
page(PATH_EN, (context) => renderView(HomeViewModel, context));
page("*", () => renderView(NotFoundViewModel));

page();