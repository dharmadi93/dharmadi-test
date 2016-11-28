test('adds 1 + 2 to equal 3', () => {
    const sum = require('./Basic.func')
    // console.log(sum(1,2))
    expect(sum(1, 2)).toBe(3)
})