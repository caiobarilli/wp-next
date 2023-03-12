import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return item from localStorage', () => {
    window.localStorage.setItem(
      'FRONTEND_colorTheme',
      JSON.stringify(['default'])
    )

    expect(getStorageItem('colorTheme')).toStrictEqual(['default'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should set item in localStorage', () => {
    setStorageItem('colorTheme', ['dark'])

    expect(window.localStorage.getItem('FRONTEND_colorTheme')).toStrictEqual(
      JSON.stringify(['dark'])
    )
  })
})
