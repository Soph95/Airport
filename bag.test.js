const Bag = require('./bag')

describe('checks weight of bag', () => {
    test('has bag weight', () => {
        const person1Bag = new Bag(6)
        expect(person1Bag.weight).toEqual(6)
    })
})
