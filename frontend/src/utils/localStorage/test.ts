import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return item from localStorage', () => {
    window.localStorage.setItem('FRONTEND_darkTheme', JSON.stringify(false))

    expect(getStorageItem('darkTheme')).toStrictEqual(false)
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should set item in localStorage', () => {
    setStorageItem('darkTheme', true)

    expect(window.localStorage.getItem('FRONTEND_darkTheme')).toStrictEqual(
      JSON.stringify(true)
    )
  })
})
