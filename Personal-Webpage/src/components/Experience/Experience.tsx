import "./Experience.scss"

export default function Experience(props:any) {

    function ExperienceCard(props: any) {
        return(
            <div>
                <div className="experience-header">
                    <h3>{props.experienceTitle}</h3>
                    <img src={props.experienceImage} alt="experience image" />
                </div>
                <p>{props.experienceText}</p>
            </div>
        )
    }

    return(
        <div className={`experience ${props.sectionArray[2] ? "active" : "inactive"}`}>
            <ExperienceCard experienceTitle="Test Experience" experienceText="this is a demo experience" />
        </div>
    )
}