import "./Experience.scss"

export default function Experience(props:any) {

    return(
        <div className={`experience ${props.sectionArray[2] ? "active" : "inactive"}`}>
            <p>TESTING</p>
        </div>
    )
}