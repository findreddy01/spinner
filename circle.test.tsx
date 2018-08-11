import * as React from 'react'
import {reactRenderTest, render, textContent} from '../test_helpers/testCircleFunction'
import {Circle} from './Circle'

describe('circle', () => {
reactRenderTest()

describe('when circle is loaded and time lapse is below 1 second', () => {
it('no circle is shown', () =>{
jest.useFakeTimers()
render(<Spinner/>)
jest.advanceTimersByTime(1000)
expect(textContent().not.toContain('Processing'))
})
})
describe('when circle is loaded and time lapse is above 1 second', () => {
it('circle is shown', () =>{
jest.useFakeTimers()
render(<Spinner/>)
jest.advanceTimersByTime(1000)
expect(textContent().toContain('Processing'))
})