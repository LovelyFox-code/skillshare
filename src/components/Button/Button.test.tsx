import{render, screen, fireEvent} from '@testing-library/react'
import Button from './Button'

test('calls onCLick prop when clicked', ()=>{
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} name={'click me'}/>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalled()
})