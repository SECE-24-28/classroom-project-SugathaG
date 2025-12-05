// let mob={brand:"Redmi",color:"Black"}
// mob.price=15000
// console.log(mob)
// console.log(mob.price)
// // delete mob.color
// // delete mob["brand"]
// console.log(mob)

// let stu={sna:"Suga",age:18,demo:function()
//     {
//         console.log("Hello I am "+this.sna)

//     }
// }
// stu.demo()

let student=[{sna:"Suga",sno:"24CS241",age:"18",fee:"true"},
    {sna:"Sug",sno:"24CS240",age:"20",fee:"fasle"},
    {sna:"Sugi",sno:"24CS242",age:"28",fee:"true"}
]
student.forEach((stu)=>
console.log(stu.sna+" "+stu.age+" "+stu.sno+" "+stu.fee))

//console.log(student)