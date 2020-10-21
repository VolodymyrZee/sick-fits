const Mutations = {
    createDog(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        // create a dog!
        const newDog = { name: args.name};
        global.dogs.push(newDog);
        return newDog;
    },
    createCat(parent, args, ctx, info) {
        global.cats = global.cats || [];
        // create a cat!
        const newCat = { name: args.name};
        global.cast.push(newCat);
        return newCat;
    },
};

module.exports = Mutations;
