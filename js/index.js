const about = document.getElementById('linkAbout');
const skills = document.getElementById('linkSkills');
const projects = document.getElementById('linkProjects');
const contact = document.getElementById('linkContact');
const arrClick = [about,skills,projects,contact];

const nav = document.getElementById('menu');
const bars = document.getElementById('menuSymbolOne');
const cross = document.getElementById('menuSymbolTwo');
function showNav() {
    let eventStat;
    if (nav.style.opacity == '0') {
        nav.style.opacity = '1';
        nav.style.right = '0';

        eventStat = 'all';

        bars.style.opacity = '0';
        cross.style.opacity = '1';
        cross.style.zIndex = '12';
    }
    else {
        nav.style.opacity = '0';
        nav.style.right = '100%';

        eventStat = 'none';

        bars.style.opacity = '1';
        cross.style.opacity = '0';
        cross.style.zIndex = '11';
    }
    for (let i=0; i<arrClick.length; i++){
        arrClick[i].style.pointerEvents = eventStat;
    }
}