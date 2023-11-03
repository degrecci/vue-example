import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'

import TodoListViewVue from '../TodoListView.vue'

describe('TodoListView', () => {
  it('should render', () => {
    render(TodoListViewVue)

    screen.getByText('Vue')
    screen.getByText('React')
  })
})
