
import React from "react";
import {render} from '@testing-library/react'
import {jest} from '@jest/globals';
import SkillSection from "./SkillSection";
describe('Stars component', ()=>{
    
it('should render <Stars/> ', ()=> {

    render(<SkillSection skill={""} isShowed={false} id={""}/>)
})

    
})
