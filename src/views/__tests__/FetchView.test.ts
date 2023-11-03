import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/vue'

import FetchViewVue from '../FetchView.vue'

describe('FetchView', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should render fetched data', async () => {
    fetch.mockResponse(JSON.stringify({ data: 'test' }))
    render(FetchViewVue)

    screen.getByText(/loading.../i)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(screen.getByText(/Todo id: /i)).toMatchInlineSnapshot(`
      <p>
        Todo id: 1
      </p>
    `)

    await fireEvent.click(screen.getByText(/Fetch next todo/i))

    expect(fetch).toHaveBeenCalledTimes(2)
    expect(screen.getByText(/Todo id: /i)).toMatchInlineSnapshot(`
      <p>
        Todo id: 2
      </p>
    `)
  })
})
