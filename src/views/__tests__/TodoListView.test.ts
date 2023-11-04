import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import TodoListViewVue from '../TodoListView.vue'

describe('TodoListView', () => {
  it('should render with vue and react', () => {
    render(TodoListViewVue)

    screen.getByText('Vue')
    screen.getByText('React')
  })

  it('should add and remove items to list', async () => {
    render(TodoListViewVue)

    await fireEvent.update(screen.getByPlaceholderText(/type todo/i), 'New item')

    await fireEvent.click(screen.getByText(/add todo/i))

    screen.getByText(/vue/i)
    screen.getByText(/react/i)
    screen.getByText(/new item/i)

    await fireEvent.click(screen.getAllByLabelText('remove-item')[0])

    expect(screen.queryByText(/vue/i)).not.toBeInTheDocument()
    expect(screen.getByText(/react/i)).toBeInTheDocument()
    expect(screen.getByText(/new item/i)).toBeInTheDocument()
  })
})
