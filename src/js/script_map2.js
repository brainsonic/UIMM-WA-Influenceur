import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

WA.onInit().then(() => {
    console.log('TEST SUCCESS');
    console.log("Indice : ", WA.player.state["cafetHint"]);
    if (WA.player.state["cafetHint"] == null)
    {
        WA.nav.goToRoom("/_/global/map.tmj");
    }
});