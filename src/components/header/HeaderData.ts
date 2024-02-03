import {Page} from "../../api/NavBarApi";

export const title: string = 'Nicolas Justen';

const getScrollFunction = (id: string) => {
    return () => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}

export const pages: Page [] = [
    {name: 'Home', onClick: getScrollFunction('Home'), key: 1},
    {name: 'Skills', onClick: getScrollFunction('Skills'), key: 2},
    {name: 'Experience', onClick: getScrollFunction('Experience'), key: 3},
    {name: 'Education', onClick: getScrollFunction('Education'), key: 4},
    {name: 'Publications', onClick: getScrollFunction('Publications'), key: 5},
    {name: 'Projects', onClick: getScrollFunction('Projects'), key: 6},
    {name: 'Personal Interests', onClick: getScrollFunction('PersonalInterests'), key: 7},
];