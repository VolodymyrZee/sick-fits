const Query = {

dogs(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs;

},
cats(parent, args, ctx, info) {
    global.cats = global.cats || [];
    return global.cats;

},

};

module.exports = Query;
