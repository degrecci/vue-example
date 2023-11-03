import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'

import SlotsViewVue from '../SlotsView.vue'

describe('SlotsView', () => {
  it('should render fallback when no slots', () => {
    render(SlotsViewVue)

    screen.getByText(/fallback content/i)
  })

  it('should render fallback when no slots', () => {
    render(SlotsViewVue, { slots: { content: 'content' } })

    screen.getByText(/content/i)
  })
})
