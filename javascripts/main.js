import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

const sharkAttackEvent = () => {
    console.log("ouch");
    personData.randomMurder();
    tank.tankBuilder();
    graveyard.buildGraveYard();
};
const reviveEvent = (e) => {
    console.log("die");
    const personId = e.target.id;
    personData.bringToLife(personId);
    tank.tankBuilder();
    graveyard.buildGraveYard(); 
};

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveYard();
    $('#biteMe').click(sharkAttackEvent);
    $('body').on('click','.revive-btn', reviveEvent);
};

init();

//dead to us
//document.getElementbyId
//document.getElementbyClassName
//document.Anything