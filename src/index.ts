import page from "page";
import HomeViewModel from "./components/HomeViewModel";
import NotFoundViewModel from "./components/NotFoundViewModel";
import AboutViewModel from "./components/AboutViewModel";


// Middleware
page("*", function (ctx, next) {
  console.log(`%c${ctx.path}`, 'color: white; background-color: blue; padding: 4px; border-radius: 4px;');
  if (ctx.path === "/") {
    page.redirect("/fr");
  }
  next();
});

page("/:language", function (ctx, next) {
  const homeViewModel = new HomeViewModel(ctx);
  homeViewModel.render();
});


page("/about", function () {
  const aboutViewModel = new AboutViewModel();
  aboutViewModel.render();
});

page("*", function () {
  const notFoundViewModel = new NotFoundViewModel();
  notFoundViewModel.render();
});

page();