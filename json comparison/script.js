var obj1 = { name: "Person 1", age: 6 };
var obj2 = { age: 5, name: "Person 1" };

const compareObj = (obj1, obj2) => {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let key in obj1) {
            if (obj1[key] === obj2[key]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};
console.log(compareObj(obj1, obj2));