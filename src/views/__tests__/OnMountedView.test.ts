import { describe, expect, it } from 'vitest'

import OnMountedView from '../OnMountedView.vue'
import { render } from '@testing-library/vue'

describe('OnMountedView', () => {
  it('should render mounted when mount component', () => {
    render(OnMountedView)

    expect(document.body.innerHTML).toMatchInlineSnapshot('"<div><p>mounted!</p></div>"')
  })
})
