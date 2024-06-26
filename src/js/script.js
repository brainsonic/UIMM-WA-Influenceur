// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from './class';
import { phase_1 } from "./steps/script_phase1";
import { phase_2 } from "./steps/script_phase2";
import { phase_3 } from "./steps/script_phase3";
const url_api = "https://uimm-trackers-api-stg-0b60361e2cd1.herokuapp.com/api/tracker_events";

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
//ZONE OUTGATE INFO
const popupLink = "https://brainsonic.github.io/UIMM-WA-Extras/popup.html";
const textOutGate = "Vous êtes sorti de la gare";

// SETUP ///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {

  WA.onInit().then(() => {
    WA.controls.disablePlayerProximityMeeting();
    WA.controls.disableMicrophone();
    WA.controls.disableWebcam();
  });


  let openInfoPopup = false; //Check if the popUp is already open
  WA.room.onLeaveLayer("Zones/OutGate").subscribe(() => {
      // open modal 
      WA.ui.modal.openModal({
        title: "Popup",
        src: popupLink,
        allow: "fullscreen; clipboard-read;",
        allowApi: !0,
        position: "center",
      });
      tracking();
  });

  
  phase_1();
  phase_2();
  phase_3();
  

});

function tracking(){
      console.log("Nouveau Visiteur");
      const data = {
        type: "Popup",
        category: "Popup",
        name: WA.player.name,
      }
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json'
        },
        body: JSON.stringify(data)
      }
  
      fetch(url_api, request)
        .then(response => {
          if(!response.ok) {
            console.log('Erreur tracker');
            throw new Error('Network response was not OK')
          }
          return response.json();
        })
        .then(data => {
  
          //console.log('Response :', data);
  
        })
        .catch(error => {
          console.error('Error:', error)
        }) 
}

//Log to check in the WA that the script has passed
console.log('VERSION 11');