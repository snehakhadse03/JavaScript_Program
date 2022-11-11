class Friend{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(a){
        
    return a - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
const myfriend = new Friend("Akash",2000)

console.log(myfriend.age(year));