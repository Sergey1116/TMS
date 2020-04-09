import React from 'react'
import './AboutAXIT.scss'

import CastomSection from './CastomSection.js'

import OptionBlock from './OptionBlock.js'



export default function AboutAXIT({ optionBlock }) {
    return (
        <div className="about"> 
            <div className="content">
                <CastomSection />
                <OptionBlock optionBlock={optionBlock} />
            </div>
        </div>
    )
}
