// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length,width,height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }



// CuboidMaker.prototype.volume = function (length,width,height) {
//   let volumeTotal = this.length * this.width * this.height;
//   return volumeTotal;
// };
// CuboidMaker.prototype.volume = function (length,width,height) {
//   let volumeTotal = this.length * this.width * this.height;
//   return volumeTotal;
// };

class CuboidMaker2 {
  constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume (){
    let volumeTotal = this.length * this.width * this.height;
    return volumeTotal;
  }
  surfaceArea() {
    let surfaceAreaTotal = 2 * (this.length * this.width + this.length * this.height + this.width *this.height);
    return surfaceAreaTotal;
  };
}//this closes the person

const cuboid2 = new CuboidMaker2(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.