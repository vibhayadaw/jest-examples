import reducer from '../../src/reducers/todos'


describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer(
        [],
        {
          type: 'ADD_TODO',
          text: 'Run the tests',
          id: 0
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])
  })
})