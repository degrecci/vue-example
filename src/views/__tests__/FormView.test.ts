import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import FormView from '../FormView.vue'

describe('FormView', () => {
  it('should update infos when change input fields', async () => {
    render(FormView)

    await fireEvent.update(screen.getByPlaceholderText(/type a name/i), 'John')
    await fireEvent.update(screen.getByPlaceholderText(/type a lastname/i), 'Doe')
    await fireEvent.update(screen.getByPlaceholderText(/type a age/i), '24')

    expect(screen.getByTestId('form-values').firstChild).toMatchInlineSnapshot(
      '{"name":"John","lastname":"Doe","pick":"","checked":false,"selected":"","age":24,"message":""}'
    )
  })

  it('should update infos when change radio and checkbox fields', async () => {
    render(FormView)

    await fireEvent.click(
      screen.getByRole('radio', {
        name: /one/i
      })
    )
    await fireEvent.click(
      screen.getByRole('checkbox', {
        name: /check/i
      })
    )

    expect(screen.getByTestId('form-values').firstChild).toMatchInlineSnapshot(
      '{"name":"","lastname":"","pick":"One","checked":true,"selected":"","age":0,"message":""}'
    )
  })

  it('should update infos when change select and textarea fields', async () => {
    render(FormView)

    await fireEvent.update(screen.getByRole('combobox'), 'c')
    await fireEvent.update(screen.getByPlaceholderText(/add multiple lines/i), 'lorem ipsum')

    expect(screen.getByTestId('form-values').firstChild).toMatchInlineSnapshot(
      '{"name":"","lastname":"","pick":"","checked":false,"selected":"c","age":0,"message":"lorem ipsum"}'
    )
  })
})
