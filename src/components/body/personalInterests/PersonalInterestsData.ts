import {ProjectProps} from "../projects/Project";
import runningImage from "../../../images/running.jpg";
import skiingImage from "../../../images/ski.jpg";
import guitarImage from "../../../images/guitar.jpg";
import travelImage from "../../../images/travel.jpg";


const running: ProjectProps = {
    image: runningImage,
    title: 'Running',
    description: 'I love to go running on trails through the local forests. I am also occasionally competing in races where I recently finished my first Marathon.',
    technologies: [],
    links: [],
};

const skiing: ProjectProps = {
    image: skiingImage,
    title: 'Alpine Skiing',
    description: 'During the winter season I love to go skiing. I am also helping as a volunteer ski instructor for the Ski- und Snowboardschule Schönbuch e. V., a regional skiing club.',
    technologies: [],
    links: [
        {href: 'https://www.susss.de/home', text: 'SUSSS Website'},
    ],
};

const guitar: ProjectProps = {
    image: guitarImage,
    title: 'Guitar',
    description: 'I have been learning to play the guitar for a couple of years now. Mostly I`m playing classic rock songs on my electric guitar.',
    technologies: [],
    links: [],
};

const travel: ProjectProps = {
    image: travelImage,
    title: 'Traveling',
    description: 'I love to travel, to visit new places and to learn about new cultures. Among others I did work and travel for six months in Australia and a semester abroad in Mexico.',
    technologies: [],
    links: [],
};

export const personalInterestsData: ProjectProps[] = [
    skiing,
    running,
    guitar,
    travel,
];