import {Page} from "../api/NavBarApi";

export const title: string = 'Nicolas Justen';

const getScrollFunction = (id: string) => {
    return () => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}

export const pages: Page [] = [
    {name: 'Home', onClick: getScrollFunction('Home'), key: 1},
    {name: 'Skills', onClick: getScrollFunction('Skills'), key: 2},
    {name: 'Experience', onClick: getScrollFunction('Experience'), key: 3},
    {name: 'Education', onClick: getScrollFunction('Education'), key: 4},
    {name: 'Projects', onClick: getScrollFunction('Projects'), key: 5},
    {name: 'Volunteer Activities', onClick: getScrollFunction('Volunteer Activities'), key: 6},
];

