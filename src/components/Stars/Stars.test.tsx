
import React from "react";
import {render} from '@testing-library/react'
import {jest} from '@jest/globals';
import Stars from "./Stars";
describe('Stars component', ()=>{
    
it('should render <Stars/> & spy on state', ()=> {
    const setState = jest.fn();
    jest
    .spyOn(React, 'useState')
    setState.mockImplementationOnce((initState)=>[initState, setState]);

    render(<Stars/>)
})

    
})
