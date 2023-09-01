export const Card = (props) => {
    return (
        <a href={props.link} target="_blank">
            <div className="card">
                <div className='card-content'>
                    <img src={props.image} className='card-image' />
                </div>
                <div className='title'>
                    {props.title}
                </div>
                <div className='desc'>
                    {props.description.slice(0, 240) + "....."}
                </div>
                <ul className='buttons'>
                    {props.tech.map((item) => {
                        return (
                            <>
                                <li className='button'>{item}</li>
                            </>
                        )
                    })}
                </ul>
            </div >
        </a>
    )
}
