import * as actions from '../../src/actions/index'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})