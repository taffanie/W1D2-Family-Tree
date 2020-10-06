function childOf() {
    return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
}

// "this" refers to the current object 

const fred = {
    name: "Fred",
    parents: [],
    childOf 
}

const george = {
    name: "George",
    parents: [],
    childOf 
}

const gen1 = [fred, george]

const arthur = {
    name: "Arthur",
    parents: [],
    childOf
}

const molly = {
    name: "Molly",
    parents: [],
    childOf
}

const gen2 = [arthur, molly]

const dumbledore = {
    name: "Dumbledore",
    parents: [],
    childOf
}

const minerva = {
    name: "Minerva",
    parents: [],
    childOf 
}

gen3 = [dumbledore, minerva]

gen1[0].parents.push(arthur, molly)
gen1[1].parents.push(arthur, molly)

gen2[0].parents.push(dumbledore, minerva)
gen2[1].parents.push(dumbledore, minerva)

console.log(fred.childOf())
console.log(molly.childOf())
console.log(dumbledore.childOf())