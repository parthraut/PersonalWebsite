import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import supermilleage1 from "../../assests/images/supermilleage1.jpg";
import umich_coe from "../../assests/images/umich_coe.jpeg";

function GetImg(props) {
  if (props.imagePath === "supermilleage1.jpg")
    return <img
              alt="Parth Raut EV Motor Control Design"
              src={supermilleage1}
            ></img>;
  if (props.imagePath === "umich_coe.jpeg")
  return <img
            alt="University of Michigan College of Engineering"
            src={umich_coe}
          ></img>;
  else if (props.fileName === "DataScienceImg")
      return <DataScienceImg theme={props.theme} />;
    else if (props.fileName === "FullStackImg")
      return <FullStackImg theme={props.theme} />;
    else if (props.fileName === "CloudInfraImg")
      return <CloudInfraImg theme={props.theme} />;
    return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetImg imagePath={skill.imagePath} fileName = {skill.fileName} theme = {theme}/>
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
