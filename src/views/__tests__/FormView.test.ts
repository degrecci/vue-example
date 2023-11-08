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
})
