import {FaCss3, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaJava, FaPython, FaReact} from "react-icons/fa";
import {SiKubernetes, SiTypescript} from "react-icons/si";
import {BiLogoSpringBoot} from "react-icons/bi";
import {IoLogoJavascript} from "react-icons/io5";
import {ReactElement} from "react";

export interface ISkillData {
    name: string;
    icon?: ReactElement;
}

export const programmingLanguages: ISkillData[] = [
    {name: 'Java', icon: <FaJava/>},
    {name: 'Typescript', icon: <SiTypescript/>},
    {name: 'Javascript', icon: <IoLogoJavascript/>},
    {name: 'Python', icon: <FaPython/>}
];

export const frameworksToolsTechnologies: ISkillData[] = [
    {name: 'Spring Boot', icon: <BiLogoSpringBoot/>},
    {name: 'React', icon: <FaReact/>},
    {name: 'SQL', icon: <FaDatabase/>},
    {name: 'Git', icon: <FaGitAlt/>},
    {name: 'HTML', icon: <FaHtml5/>},
    {name: 'CSS', icon: <FaCss3/>},
    {name: 'Docker', icon: <FaDocker/>},
    {name: 'Kubernetes', icon: <SiKubernetes/>},
];

export const languages: ISkillData[] = [
    {name: 'German'},
    {name: 'English'},
];