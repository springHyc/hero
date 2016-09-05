"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                id: 11,
                name: 'Bob',
                age: 23
            }, {
                id: 12,
                name: 'AAA',
                age: 23
            }, {
                id: 13,
                name: 'Bdd',
                age: 23
            }, {
                id: 14,
                name: 'Bob',
                age: 23
            }, {
                id: 15,
                name: 'Bob',
                age: 23
            }, { id: 16, name: 'lala', age: 34 }, { id: 17, name: 'lala', age: 34 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map