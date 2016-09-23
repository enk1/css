define(["require", "exports", './models/books'], function (require, exports, books) {
    "use strict";
    var App = (function () {
        function App() {
            var data = new books.Books();
            this.booksList = data.getData();
            console.log(this.booksList);
        }
        App.prototype.show = function () {
            //console.log(123);
        };
        return App;
    }());
    exports.App = App;
});
