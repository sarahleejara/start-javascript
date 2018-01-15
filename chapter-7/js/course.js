// EXAMPLE 1

var pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log(pen.type); // will be "ballpoint"
console.log(pen.color); // will be "blue"
console.log(pen.brand); // will be "Bic"

// EXAMPLE 2

var pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

// EXAMPLE 3

var pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log("The pen's a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

//EXAMPLE 4

pen.color = "red"; // modify the pen color property
console.log("The pen's a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

//EXAMPLE 5

var pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

// EXAMPLE 6

pen.price = "2.5"; // set the pen price property
console.log("My pen costs " + pen.price);

// CODE 1

var cake = {
    flavor: "strawberry",
    levels: 2,
    price: "$10",
    occasion: "birthday",
};
console.log("The " + cake.occasion + " cake has a " + cake.flavor + " flavor, " + cake.levels + " layers, and costs " + cake.price + ".");
// The cake is actually for a wedding!
cake.occasion = "wedding";
// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "$50";
console.log("The " + cake.occasion + " cake has a " + cake.flavor + " flavor, " + cake.levels + " layers, and costs " + cake.price + ".");

//CODE 2

var cake = {
    flavor: "strawberry",
    levels: 2,
    price: "$10",
    occasion: "birthday",
    // Describe the cake
    describe: function () {
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
        return description;
    }
};
console.log(cake.describe());
// The cake is actually for a wedding!
cake.occasion = "wedding";
// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "$50";
console.log(cake.describe());
