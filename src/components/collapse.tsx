import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow.svg'

export default function Collapse(props: { title: string; children: React.ReactNode }) {
    const [show, setShow] = useState(false)

    return (
        <div className="collapse">
            <h2 className="collapse__title">
                {props.title}
                <Arrow className={show ? "arrow down" : "arrow"} onClick={() => setShow(!show)} />
            </h2>
            <div className={show ? "collapse__body" : "collapse__body hidden"}>
                <div className='collapse__body__content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}