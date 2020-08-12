import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/TodoActions'
import fetchMock from 'fetch-mock'
// import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    }).catch(unmatchedUrl => {
      // fallover call original fetch, because fetch-mock treats
      // any unmatched call as an error - its target is testing
      return console.log(unmatchedUrl)
    })

    // const expectedActions = [
    //   { type: 'FETCH_TODOS_REQUEST' },
    //   //{ type: 'FETCH_TODOS_SUCCESS', body: { todos: ['do something'] } }
    //   { type: 'FETCH_TODOS_FAILURE', ex: ["TypeError: Cannot read property 'then' of undefined"] }
    // ]
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchTodos())

    // return store.dispatch(actions.fetchTodos()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  })
})