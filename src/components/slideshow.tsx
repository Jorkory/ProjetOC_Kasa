import { useState } from "react"

export default function Slideshow(props: { pictures: string[] }) {
    const [imageCurrent, setImageCurrent] = useState(0)

    function handleClick(parm: number): void {
        imageCurrent + parm === -(props.pictures.length) ? setImageCurrent(0)
            : imageCurrent + parm === 1 ? setImageCurrent(-(props.pictures.length - 1))
                : setImageCurrent(imageCurrent + parm)
    }

    return (
        <div className="slide">
            {props.pictures.map((picture, index) =>
                <picture key={index}>
                    <img src={picture} alt='' style={{ transform: `translateX(${(index + imageCurrent) * 100}%)` }}></img>
                </picture>
            )}
            {props.pictures.length > 1 &&
                <>
                    <div className="slide__arrow left" onClick={() => handleClick(1)}></div>
                    <div className="slide__arrow right" onClick={() => handleClick(-1)}></div>
                </>
            }
            <div className="slide__count">{(-imageCurrent) + 1}/{props.pictures.length}</div>
        </div>
    )
}