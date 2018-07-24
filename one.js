console.log(isFinite(1.111));
console.log(isNaN("Hello Word"));
console.log(Array(11111,22,333,444));
console.log(Math.valueOf());
console.log(Math.PI);
console.log(Math.round(7.25));

console.log(Date());
var d=new Date();
console.log(d.getDay());

function BZ(){
    this.color="red";
    this.docker=120;
    this.is_water=function () {
        this.color="000";
    }
}

let mybz = new BZ();
mybz.color="FFF";
console.log(mybz.color);
mybz.is_water();
console.log(mybz.color);

