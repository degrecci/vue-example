import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/vue'

import DefinePropsView from '../DefinePropsView.vue'

describe('DefinePropsView', () => {
  it('should render no props when no props is passed', () => {
    render(DefinePropsView)

    screen.getByText(/no props/i)
  })

  it('should render msg value when pass props', () => {
    render(DefinePropsView, { props: { msg: 'test' } })

    screen.getByText(/test/i)
  })
})
