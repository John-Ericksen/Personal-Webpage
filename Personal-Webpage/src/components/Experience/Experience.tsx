import "./Experience.scss"
import "./ExperienceData"
import ExperienceData from "./ExperienceData"

export default function Experience(props:any) {

    function ExperienceCard(props: any) {
        return(
            <div className="experience-card">
                <div className="experience-header">
                    <img src={props.experienceImage} alt="experience image" />
                    <h3>{props.experienceTitle}</h3>
                </div>
                <h3>{props.subtitle}</h3>
                <p>{props.experienceText}</p>
            </div>
        )
    }
    
    const experienceCardList = ExperienceData.map((element)=><ExperienceCard key={crypto.randomUUID()} experienceTitle={element.title} experienceImage={element.image} experienceText={element.text} subtitle={element.subtitle}/>)
    
    return(
        <div className={`experience ${props.sectionArray[2] ? "active" : "inactive"}`}>
            {experienceCardList}
        </div>
    )
}