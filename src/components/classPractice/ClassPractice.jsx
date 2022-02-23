import React from "react";

export default function ClassPractice() {
    class car {
        constructor (name){
            this.name = name
        }
        blowHorn(){
            console.log(`The car blows it's horn ${this.name}`)
            return <h2>Hi The car blows it's horn {this.name}</h2>
        }
    }
    const hondaCar = new car("Aayush")
    const toyotaCar = new car("anmolBoi")
    

    class bike extends car{
        constructor(newName, name){
            super();
            this.name = name
            this.nehme = newName
            console.log(`The bike also can blow horns dude ${this.nehme} ${this.name}`)
        }
    }
    const hondaBike = new bike("aayush")

  return <div>
      <h1>Hi Class practice</h1>
      {hondaCar.blowHorn()}
      {toyotaCar.blowHorn()}
  </div>;
}
