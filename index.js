(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.permute = function(array, indexes) {
            var i = indexes.length, permutes = new Array(i);
            while (i--) permutes[i] = array[indexes[i]];
            return permutes;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();