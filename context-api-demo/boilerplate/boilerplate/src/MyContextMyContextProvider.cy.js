import React from 'react'
import { MyContextProvider } from './MyContext'

describe('<MyContextProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyContextProvider />)
  })
})