import React from "react";
import WorksCard from "./works-card";
import hands from "../images/hands.png";
import running from "../images/running.png";
import food from "../images/food.png";

const Works = [

    {
        worksHeader: "Takiwatanga",
        workslink: "https://github.com/aecarena/Takiwatanga",
        image: hands,
        description: "social networking site for families with Autism"
    },
    {
        worksHeader: "Workout Nation",
        workslink: "https://github.com/aecarena/Project-2-Workout-Nation",
        image: running,
        description: "workout tracker app"
    },
    {
        worksHeader: "Foodle",
        workslink: "https://github.com/aecarena/Project-1-Foodle-app",
        image: food,
        description: "food suggestion app"
    },
   
]
const Work = () => {
    return (
        <div class="products" id="portfolio">
        {Works.map( element => (
        
                    <WorksCard worksHeader={element.worksHeader} worksLink={element.workslink} image={element.image} description={element.description}/>
                ))}


        
           
    </div>
    )
}
export default Work