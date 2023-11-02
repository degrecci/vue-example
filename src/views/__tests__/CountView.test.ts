import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import CountViewVue from '../CountView.vue'

describe('CountView', () => {
  it('should increment value when click on button', async () => {
    render(CountViewVue)

    screen.getByText('Count is: 0')
    const button = screen.getByText('Increment')

    await fireEvent.click(button)

    screen.getByText('Count is: 1')
  })
})
