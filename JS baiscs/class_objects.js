/*const student={
     fullName:"Tamanna",
     marks:94.4;
     printmarks=function(){
        console.log("marks",marks);
     },
};

const Employee={
    calcTax(){
        console.log("Tax is 10%");
    },
};
const karanArjun = {
    salary:5000,
    calcTax(){
        console.log("tax raue is 20%")
    },
};
 class ToyotoCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand =brand;
    }
    
 }
let fortuner = new ToyotoCar();
fortuner.setBrand(fortuner);*/
//Inheritance

class parent{
    hello(){
        console.log("Hello");
    }
}
class child extends parent{}
let obj = new child();
  
class person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Enginneer extends person{
    Work(){
        console.log("work");
    }
}
let tamanna = new Enginner;
