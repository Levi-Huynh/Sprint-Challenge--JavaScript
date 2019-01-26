// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidP {
    
    
    constructor(pAttributes) {
        this.length= pAttributes.length;
        this.width= pAttributes.width;
        this.height= pAttributes.height;
    }

    volume(){
        return (this.length * this.width *this.height);
    }

    surfaceArea() {
        return (2*((this.length*this.width)+(this.length*this.height)+(this.width*this.height)));
    }
}

class CubeMaker extends CuboidP {

    constructor(cAttributes) {

        super(cAttributes);
    }

    saCube() {
        return (6*(this.length*this.width));
    }

}



  const cuboid1 = new CuboidP ({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker ({
    length: 5,
    width: 5,
    height:5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
//properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

console.log(cube.saCube()); //150
