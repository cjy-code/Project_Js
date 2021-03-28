

const nicoIntfo = {
    "name": "Nico",
    age: 33,
    gender: "Male",
    isHandosme: true,
    favMobies: ["Along the gods", "LOTR", "Oldnoy"],
    favFood:
        [
            {
                name: "Kimchi",
                fatty: false
            },
            {
                name: "Cheese burger",
                fatty: true
            }
        ]
}

console.log(nicoIntfo.gender);

nicoIntfo.gender = "Female"

console.log(nicoIntfo.gender)
console.log(nicoIntfo)