class Hero {

  constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }

  attack(type, strike) {
    if (this.type === "mago"){
      let strike = "magia"
      console.log(`${this.type} atacou usando ${strike}`)
    } else if (this.type === "guerreiro"){
      let strike = "espada"
      console.log(`${this.type} atacou usando ${strike}`)
    } else if (this.type === "monge"){
      let strike = "artes marciais"
      console.log(`${this.type} atacou usando ${strike}`)
    } else if (this.type === "ninja"){
      let strike = "shuriken"
      console.log(`${this.type} atacou usando ${strike}`)
    }
  }
}

const joaquim = new Hero("Joaquim", 20, "mago")
const goku = new Hero("Goku", 20, "guerreiro")
const dalailama = new Hero("Dalailama", 100, "monge")
const gaiden = new Hero("Gaiden", 45, "ninja")

joaquim.attack()
goku.attack()
dalailama.attack()
gaiden.attack()
