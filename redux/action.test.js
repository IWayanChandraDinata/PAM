import {tambah,kurang} from '../redux/action';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: "TAMBAH"
    }
    expect(tambah()).toEqual(expectedAction)
  })
  it('should create an action to add a todo', () => {
    const expectedAction2 = {
      type: "KURANG"
    }
    expect(kurang()).toEqual(expectedAction2)
    })
})