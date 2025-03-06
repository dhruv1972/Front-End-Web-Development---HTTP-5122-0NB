//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var memberName = ["Aryan", "Fenil", "Dhruv", "Yash", "jay"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(memberName);

//REMOVE LAST MEMBER
memberName.pop()
console.log(memberName);

//ADD SEAN TO FRONT OF ARRAY
memberName.unshift("Sean")
console.log(memberName)
//REARRANGE THE ARRAY ALPHABETICALLY
memberName.sort()


//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log(memberName);
console.log("We have " + memberName.length + " people in our group.");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < memberName.length; i++) {
    console.log("#" + (i + 1) + " " + memberName[i]);
}
