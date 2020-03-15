"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(partA, partB, partC) {
        this.partA = partA;
        this.partB = partB;
        this.partC = partC;
    }
    Product.prototype.show = function () {
        return "This product has 3 parts: " + this.partA + ", " + this.partB + " and " + this.partC;
    };
    return Product;
}());
var Builder = /** @class */ (function () {
    function Builder() {
    }
    return Builder;
}());
var ConcreteBuilder1 = /** @class */ (function (_super) {
    __extends(ConcreteBuilder1, _super);
    function ConcreteBuilder1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteBuilder1.prototype.BuildPartA = function (content) {
        this.partA = content;
        return this;
    };
    ConcreteBuilder1.prototype.BuildPartB = function (content) {
        this.partB = content;
        return this;
    };
    ConcreteBuilder1.prototype.BuildPartC = function (content) {
        this.partC = content;
        return this;
    };
    ConcreteBuilder1.prototype.GetResult = function () {
        return new Product(this.partA, this.partB, this.partC);
    };
    return ConcreteBuilder1;
}(Builder));
var ConcreteBuilder2 = /** @class */ (function (_super) {
    __extends(ConcreteBuilder2, _super);
    function ConcreteBuilder2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteBuilder2.prototype.BuildPartA = function (content) {
        this.partX = content;
        return this;
    };
    ConcreteBuilder2.prototype.BuildPartB = function (content) {
        this.partY = content;
        return this;
    };
    ConcreteBuilder2.prototype.BuildPartC = function (content) {
        this.partZ = content;
        return this;
    };
    ConcreteBuilder2.prototype.GetResult = function () {
        return new Product(this.partX, this.partY, this.partZ);
    };
    return ConcreteBuilder2;
}(Builder));
var Director = /** @class */ (function () {
    // Builder uses a complex series of steps
    function Director(builder) {
        this.builder = builder;
        this.product = this.builder.GetResult();
    }
    Director.prototype.showProduct = function () {
        return this.product.show();
    };
    return Director;
}());
// Create director and builders
var b1 = new ConcreteBuilder1();
var director = new Director(b1.BuildPartA('Ngô').BuildPartB('Quang').BuildPartC('Sang'));
console.log(director.showProduct());
