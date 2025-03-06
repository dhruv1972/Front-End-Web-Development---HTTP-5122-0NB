//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Dhruv Chavda",
    course: "Web Development",
    semester: 1,
    age: 24,
    line: function () {
        alert("My name is " + meObject.name + " and i currently enrolled in " + meObject.course);
    }

}
console.log(meObject.name);
//alert("My name is " + meObject.name + " and i currently enrolled in " + meObject.course);
meObject.line();
