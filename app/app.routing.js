"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require("./heroes.component");
var Dashboard_component_1 = require("./Dashboard.component");
var heroDetail_component_1 = require("./heroDetail.component");
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }, {
        path: 'dashboard',
        component: Dashboard_component_1.DashboardComponent
    }, {
        path: 'detail/:id',
        component: heroDetail_component_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map