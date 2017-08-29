'use strict';

import Realm from 'realm';

const whiskySchema = {
    name: 'Whisky',
    properties: {
        name: 'string',
        distillery_bottler: 'string',
        age_statement: {type: 'int', optional: true},
        region: 'string',
        flavour: 'string',
        value: {type: 'int', optional: true},
        collected: {type: 'bool', default: false},
        wish: {type: 'bool', default: false},
        starred: {type: 'bool', default: false},
        release_date: {type: 'int', optional: true},
        picture: {type: 'data', optional: true},
    }
};

const collectionListSchema = {
    name: 'CollectionList',
    properties: {
        name: 'string',
        items: {type: 'list', objectType: 'Whisky'},
    },
}

const wishListSchema = {
    name: 'WishList',
    properties: {
        name: 'string',
        items: {type: 'list', objectType: 'Whisky'},
    },
}

const distillerySchema = {
    name: 'Distillery',
    properties: {
        name: 'string',
        location: 'string',
        region: 'string',
        closed: {type: 'bool', default: false},
        link: 'string',
        headline_whiskies: {type: 'string', optional: true},
        coords: {type: 'int', optional: true},
    },
}

const distilleryListSchema = {
    name: 'DistilleryList',
    properties: {
        name: 'string',
        items: {type: 'list', objectType: 'Distillery'},
    },
}

export default {whiskySchema: whiskySchema, collectionListSchema: collectionListSchema, wishListSchema: wishListSchema, distillerySchema: distillerySchema, distilleryListSchema: distilleryListSchema};



// class Whisky extends Realm.Object {}
// Whisky.schema = {
//     name: 'Whisky',
//     properties: {
//         name: 'string',
//         distillery_bottler: 'string',
//         age_statement: {type: 'int', optional: true},
//         region: 'string',
//         flavour: 'string',
//         value: {type: 'int', optional: true},
//         collected: {type: 'bool', default: false},
//         wish: {type: 'bool', default: false},
//         starred: {type: 'bool', default: false},
//         release_date: {type: 'int', optional: true},
//         picture: {type: 'data', optional: true},
//     },
// };

// class CollectionList extends Realm.Object {}
// CollectionList.schema = {
//     name: 'CollectionList',
//     properties: {
//         name: 'string',
//         items: {type: 'list', objectType: 'Whisky'},
//     },
// };

// class WishList extends Realm.Object {}
// WishList.schema = {
//     name: 'WishList',
//     properties: {
//         name: 'string',
//         items: {type: 'list', objectType: 'Whisky'},
//     },
// };

// class Distillery extends Realm.Object {}
// Distillery.schema = {
//     name: 'Distillery',
//     properties: {
//         name: 'string',
//         location: 'string',
//         region: 'string',
//         closed: {type: 'bool', default: false},
//         link: 'string',
//         headline_whiskies: {type: 'string', optional: true},
//         coords: {type: 'int', optional: true},
//     },
// };

// class DistilleryList extends Realm.Object {}
// DistilleryList.schema = {
//     name: 'DistilleryList',
//     properties: {
//         name: 'string',
//         items: {type: 'list', objectType: 'Distillery'},
//     },
// };

// export default new Realm({schema: [Whisky, CollectionList, WishList, Distillery, DistilleryList]});