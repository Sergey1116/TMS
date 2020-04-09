import React from 'react'

export default function HelloWorld({ optionBlock }) {
    return (
        <div className="process-discr">
            {optionBlock.map(val => {
                return(
                <div key={val.title} className="option-block-item">
                    <div  className="option-icon-block">
                        <a href="#"><i className={val.icoClass}></i></a>
                    </div>
                    <p  className="option-title">
                        {val.title}
                    </p>
                    <p  className="option-discription">
                        {val.discription}
                    </p>
                </div>)
            })}
        </div>
    )
}
