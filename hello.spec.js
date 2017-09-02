const hello = require('./hello');

test('hello', () => {
  //arrange
  let name = 'ball'

  //Act
  let result = hello(name)

  //assert
  expect(result).toBe('Hello ball')
})
