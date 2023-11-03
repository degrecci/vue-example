import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import TextInputViewVue from '../TextInputView.vue'

describe('TextInputView', () => {
  it('should update text when change input', async () => {
    render(TextInputViewVue)

    const textInput = screen.getByLabelText('Text')

    await fireEvent.update(textInput, 'Teste')

    screen.getByText('Teste')
  })
})
