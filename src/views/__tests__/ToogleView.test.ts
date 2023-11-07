import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import ToggleView from '../ToggleView.vue'

describe('ToggleView', () => {
  it('should toggle on/off when click on toggle button', async () => {
    render(ToggleView)

    screen.getByText(/ON/i)

    await fireEvent.click(screen.getByText(/Toggle/i))

    screen.getByText(/OFF/i)
  })
})
