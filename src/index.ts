import page from "page";
import AppViewModel from "./components/AppViewModel";
import NotFoundViewModel from "./components/NotFoundViewModel";

// Dynamically set the base URL for file:// protocol
const isFileProtocol = window.location.protocol === "file:";
if (isFileProtocol) {
  const base = window.location.pathname.replace(/\/index.html$/, "");
  page.base(base);
}

// Middleware
page("*", function (ctx, next) {
  console.log("Middleware executed on route:", ctx.path);
  next();
});

// Define the routes
page("/", function () {
  new AppViewModel().render();
});

page("*", function () {
  new NotFoundViewModel().render();
});

// Initialize routing
page();
