var arr =[1,2,3,4,5,6]
console.log(arr[5])

var student = {
    class : "JS",
    school : "Mindx" ,
    name : "Han",
}
console.log(student.name)

var studentList =[
    {
        class : "JS",
        school : "Mindx" ,
        name : "Han",
    },
    {
        class : "JS",
        school : "Mindx" ,
        name : "Han1",
    }

]

studentList.push(
    {
        class : "JS",
        school : "Mindx" ,
        name : "Han2",
    }
)

console.log(studentList)

for (var i = 0; i< studentList.length; i++)
console.log(studentList[i])

