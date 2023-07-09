//Sets

//This is kind of array except there are no duplicate items
// and the values are not in any particular order
// use: To check if the item is present

//we do have a build in Set in ES6 but they dont have all the Set methods

function mySet() {
  var items = []; // we store all the values or item of the set
  //function to find if the value is present in the set
  this.has = function (item) {
    return items.indexOf(item) !== -1;
  };

  //display the items in the set
  this.values = function () {
    return items;
  };

  //Add a item in the set
  this.add = function (item) {
    if (!this.has(item)) {
      items.push(item);
      return true;
    }
    return false;
  };

  // Remove item from the Set
  this.remove = function (item) {
    if (this.has(item)) {
      index = items.indexOf(item);
      items.splice(index, 1);
      return true;
    }
    return false;
  };

  //display the size of the set
  this.size = function () {
    return items.length;
  };

  //to perform unionof two sets
  this.union = function (setObj) {
    var finalSet = new mySet();
    var setOne = this.values();
    var setTwo = setObj.values();
    setOne.forEach(function (i) {
      finalSet.add(i);
    });
    setTwo.forEach(function (i) {
      finalSet.add(i);
    });
    return finalSet;
  };

  // to perform intersection of two sets
  this.intersection = function (setObj) {
    var finalSet = new mySet();
    var setOne = this.values();
    setOne.forEach(function (i) {
      if (setObj.has(i)) {
        finalSet.add(i);
      }
    });
    return finalSet;
  };

  //find the difference in the two sets
  this.difference = function (setObj) {
    var finalSet = new mySet();
    var setOne = this.values();
    setOne.forEach(function (i) {
      if (!setObj.has(i)) {
        finalSet.add(i);
      }
    });
    return finalSet;
  };

  //to check if the given set is a seubset of another Subset
  this.subset = function (setObj) {
    var setOne = this.values();
    return setOne.every(function (item) {
      return setObj.has(item);
    });
  };
}

var SetA = new mySet();
var SetB = new mySet();
SetA.add("a");
SetA.add("b");
SetB.add("a");
SetB.add("b");
SetB.add("c");
SetB.add("d");
console.log(SetA.subset(SetB));
console.log(SetA.intersection(SetB).values());
console.log(SetA.union(SetB).values());
console.log(SetB.difference(SetA).values());
