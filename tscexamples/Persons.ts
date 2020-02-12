export class Person{
    constructor(private name:string, private age:number){
        //define with type and assign to prvate variables
    }

    getName():string {
        return this.name;
    }

    getAge():number{
        return this.age;
    }
}