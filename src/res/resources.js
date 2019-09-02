import xEngine from './images/xEngine.png';
import passwordManager from './images/passwordManager.png';
import darts from './images/darts-med.jpg';
import linkedinIcon from "./images/icon-linkedin.png";
import githubIcon from "./images/icon-github.png";
import pdf from './documents/resume.pdf';
import docx from './documents/resume.docx';

import xengine1 from './images/xEngine1.png';
import xengine2 from './images/xEngine2.png';
import xengine3 from './images/xEngine3.png';
import passwordmanager1 from './images/passwordManager1.png';
import passwordmanager2 from './images/passwordManager2.png';
import passwordmanager3 from './images/passwordManager3.png';
import passwordmanager4 from './images/passwordManager4.png';
import passwordmanager5 from './images/passwordManager5.png';
import passwordmanager6 from './images/passwordManager6.png';
import darts1 from './images/darts1.png';
import darts2 from './images/darts2.png';
import darts3 from './images/darts3.png';
import darts4 from './images/darts4.png';
import darts5 from './images/darts5.png';
import darts6 from './images/darts6.png';


const descriptions = [
    "Open 3D game engine framework which allows game devs to focus on game design rather than the complex and tedious boilerplate coding " +
        "required to create a game engine.",
    "Desktop application written in Java designed to encrypt and locally store login information securely.",
    "First Java project written in 2015. Users must use timing and accuracy to acheive their highest score. Re-engineering the project " + 
        "in 2019, an ECS style architecture was incorporated.",
];

// var fs = require('fs');

export function getProjectCoverImages() {
    return [xEngine, passwordManager, darts];
};

export function getProjectNames() {
    return ['X-Engine', 'PasswordKeeper', 'JustDarts'];
}

export function getSocialLinks() {
    var urls = [], icons = [], socialLinks = [];
    urls = ["https://www.linkedin.com/in/denmcca", "https://www.github.com/denmcca"];
    icons = [linkedinIcon, githubIcon];
    urls.forEach((url, idx) => {
        socialLinks.push({
            url: url,
            icon: icons[idx],
        });
    });
    return socialLinks;
};

export function getProjectLinks() {
    return [
        'https://github.com/Michaelwolf95/XEngine', 
        'https://github.com/denmcca/PasswordKeeper', 
        'https://github.com/denmcca/JustDarts',
    ];
}

export function getNavBarContents() {
    var firstname = "Dennis", lastname = "McCann", occupation = "Programmer";
    return {
        firstname,
        lastname,
        occupation,
    }
}

export function getNavBarResumeFilesContent() {
    var titles = [], paths = [], types = [],
        contents = {brandInfo: null, files: []};
    titles = ['resume'];
    paths = [[pdf, docx]];
    types = [['pdf', 'docx']];
    contents.brandInfo = getNavBarContents();
    titles.forEach((title, idx) => {
        contents.files.push({
            title: title,
            paths: paths[idx],
            types: types[idx],
        })
    });
    return contents;
};

export function getModalContents() {
    var modalContents = [];
    var screenshots = [
        [xengine1, xengine2, xengine3],
        [passwordmanager1, passwordmanager2, passwordmanager3, 
            passwordmanager4, passwordmanager5, passwordmanager6,],
        [darts1, darts2, darts3, darts4, darts5, darts6,],
    ];
    var alts = getProjectNames();
    var desc = descriptions;

    alts.forEach((title, idx) => {
        modalContents.push({
            title: title,
            screenshots: screenshots[idx],
            description: desc[idx],
            index: idx,
        });
    });

    return modalContents;
};

export function getSliderContents() {
    var alts = getProjectNames();
    var bgs = getProjectCoverImages();
    var projectLinks = getProjectLinks();
    var sliderContents = [];
    alts.forEach((alt, idx) => {
        sliderContents.push({
            bg: bgs[idx],
            alt: alt,
            description: descriptions[idx],
            url: projectLinks[idx],
        });
    });
    return sliderContents;
};