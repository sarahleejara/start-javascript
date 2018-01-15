var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will show 2

// EXAMPLE 1

var Pastry = {
    type: "",
    flavor: "",
    levels: 0,
    price: "",
    occasion: "",

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.levels = 1;
muffin.price = "$2";
muffin.occasion = "breakfast";

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.levels = 3;
cake.price = "$10";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());

//EXAMPLE 2

var Pastry = {
    // initialize the pastry
    init: function (type, flavor, levels, price, occasion) {
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.describe());
console.log(cake.describe());

// EXAMPLE 3

var Pastry = {
    // initialize the pastry
    init: function (type, flavor, levels, price, occasion) {
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    },

    bake: function() {
        var baked = "The " + this.flavor + this.type + " was placed in the oven. It's done!"
    return baked
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());

// GAME EXAMPLE 1

var Character = {
    // Initialize the character
    initCharacter: function (name, health, force) {
        this.name = name;
        this.health = health;
        this.force = force;
    },
    // Attack a target
    attack: function (target) {
        if (this.health > 0) {
            var damage = this.force;
            console.log(this.name + " attacks " + target.name + " and causes " + damage + " damage points");
            target.health = target.health - damage;
            if (target.health > 0) {
                console.log(target.name + " has " + target.health + " health points left");
            } else {
                target.health = 0;
                console.log(target.name + " has been eliminated!");
            }
        } else {
            console.log(this.name + " can't attack (they've been eliminated).");
        }
    }
};

var Player = Object.create(Character);
// Initialize the player
Player.initPlayer = function (name, health, force) {
    this.initCharacter(name, health, force);
    this.xp = 0;
};
// Describe the player
Player.describe = function () {
    var description = this.name + " has " + this.health + " health points, " +
        this.force + " force points " + this.xp + " experience points";
    return description;
};
// Fight an enemy
Player.fight = function (enemy) {
    this.attack(enemy);
    if (enemy.health === 0) {
        console.log(this.name + " eliminated " + enemy.name + " and wins " +
            enemy.value + " experience points");
        this.xp += enemy.value;
    }
};

var Enemy = Object.create(Character);
// Initialize the enemy
Enemy.initEnemy = function (name, health, force, species, value) {
    this.initCharacter(name, health, force);
    this.species = species;
    this.value = value;
};

var player1 = Object.create(Player);
player1.initPlayer("Rainbow Dash", 150, 25);

var player2 = Object.create(Player);
player2.initPlayer("Applejack", 130, 30);

console.log("Welcome to the adventure! Here are our heros:");
console.log(player1.describe());
console.log(player2.describe());

var monster = Object.create(Enemy);
monster.initEnemy("Spike", 40, 20, "orc", 10);

console.log("A wild monster has appeared: it's a(n) " + monster.species + " named " + monster.name);

monster.attack(player1);
monster.attack(player2);

player1.fight(monster);
player2.fight(monster);

console.log(player1.describe());
console.log(player2.describe());
