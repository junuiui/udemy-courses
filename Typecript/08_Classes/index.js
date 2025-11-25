// 3. Creating First Classes and Instance
var StaticUser = /** @class */ (function () {
    function StaticUser() {
        this.name = "John";
        this.email = "john@email.com";
    }
    StaticUser.prototype.greet = function () {
        return "Hello John";
    };
    return StaticUser;
}());
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.greet = function () {
        console.log(this.name);
    };
    return User;
}());
var user = new StaticUser();
console.log(user);
var user2 = new User('Mark', 'mark@email.com');
console.log(user2);
