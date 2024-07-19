console.log('hello jad')
//objects

//factory function
// function createCircle(radius){
//     return {
//         radius,
//         draw : function (){
//             console.log('draw')
    
//         }
//     }

// }
// const circle = createCircle(1)
// console.log(circle)
// console.log(typeof createCircle)
// circle.draw()

//constructor functions

function Circle (radius){
    this.radius = radius 
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)
console.log(another)
console.log(typeof Circle)