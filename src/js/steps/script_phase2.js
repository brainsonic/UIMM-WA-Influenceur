import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from '../class';

function phase_2()
{    
    //MétierRoom
    const poolLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html";
    const scribbleLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html";
    const nicolasVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS";
    const cariVideoLink = "https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m";
    const FannyVideoLink = "https://www.youtube.com/embed/DU7kScvKs6w?si=FIRpu9XituPJ3gMf";
    const apprentiRobotLink = "https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8";
    const apprentiChaudronniereVideoLink = "https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K";
    const YumiMetierBot = "https://chat.csml.dev/s/y8l6b6nctclj5edykh5uig5furqheumt"; //
    const MelodyVideoLink = "https://www.youtube.com/embed/mubNAyW5st8?si=ijmaQp-jQudypbBD";

    //ShowRoom

    const anaisVideoLink = "https://www.youtube.com/embed/DE_sTYDs4rg";
    const Liebherr_aerospaceVideoLink = "https://www.youtube.com/embed/unodEN9Xwls?si=xgK0E-M33XjEG1kz";
    const LucieVideoLink = "https://www.youtube.com/embed/7mUgmZgLrxM?si=MIFAXrMjrElzpuI9";
    const OtechVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe"; //TO CHANGE
    const FrankVideoLink = "https://www.youtube.com/embed/hCydgXRsT_s?si=n075VkCZefobeWDY";
    const respRDVideoLink = "https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg";
    const ajustMonteurVideoLink = "https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-";
    const GalvanoplasteVideoLink = "https://www.youtube.com/embed/QFpgqyR30Lw?si=YbXrJHJ5YnFtyqm6";
    const RafaelVideoLink = "https://www.youtube.com/embed/jIVCWY2mxjs?si=3MTDTHHaeCGGYpeN";
    const respBureauVideoLink = "https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA";
    const YumiITWBot = "https://chat.csml.dev/s/xn6mhygbrdefcsnkrxkpr3byyciytrs8";
    const MaximeVideoLink = "https://www.youtube.com/embed/RV-WS11CLTk?si=RUVpvBUxVXbagXU4";

    //ParkInside

    const doigbyVideoLink = "https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz";
    const tiboInShapeVideoLink = "https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s";
    const RomaneBotLink = "https://chat.csml.dev/s/rtuuawj735nwlgjifcga5jfnlm7ykh01"; //
    const InfluenceBotLink = "https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b";
    const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc?si=DIfTDwIU92KX9KWg";

    //Labo Yumi

    const PaulygonesVideoLink = "https://www.youtube.com/embed/vqbbGDkOG30?si=0iaVf_eClMnZ0qRH";
    const hiHacksVideoLink = "https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA";
    const YumiLabBotLink = "https://chat.csml.dev/s/yzxfnb7rpnoqgykpt0yoec0l41kvwjph";

    //DinningRoom

    const AurélienChatLink = "https://www.youtube.com/embed/nH7qhiTUPdY?si=jQ8I8OD7DVdgh2AC"; //
    const AdrienChatLink = "https://www.youtube.com/embed/shjCyZuwchA?si=TG0lMgCoy2fTwN-3"; //
    const AnneChatLink = "https://www.youtube.com/embed/7sbKfKr-w1c?si=akuUHSYWtf28lWbD"; //
    const AurélieChatLink = "https://www.youtube.com/embed/pIamQ3YJ9IU?si=B6YamXBMBN4u3_M4"; //
    const LaureChatLink = "https://www.youtube.com/embed/d8h_Gwr6eak?si=R-cvw0vWtJ4Cs30I"; //
    const LudivineChatLink = "https://www.youtube.com/embed/M0R3-yRvyx0?si=H5fy8V3L41WtlJjY"; //
    const LudovicChatLink = " https://www.youtube.com/embed/VqaM9iW8dD4?si=zLzfQy8JkdvLtpC3"; //
    const SéverineChatLink = "https://www.youtube.com/embed/8XtgezkSy9E?si=akkdFcg_pqojP-qX"; //
    const YumiCafetBotLink = "https://chat.csml.dev/s/dbti1brmn89khgwsxonkmku7cpuotgvw"

    //Phase 2
    //MetierRoom
    let Nicolas = new PopUpVideo(
        "Interactions/MetierRoom/Nicolas",
        "Appuyez sur espace pour parler à Nicolas !",
        [
        "Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !",
        ],
        "Nicolas",
        nicolasVideoLink,
        "interact",
        "PNJ",
        "PNJ_Nicolas"
    )
    
    let Cari = new PopUpVideo(
        "Interactions/MetierRoom/Cari",
        "Appuyez sur espace pour parler à Jordan !",
        [
        "Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ?",
        "Ah si vous cherchez la clé d'Anton, je crois que Anaïs a des informations pour vous. Elle est dans le hub des métiers. Mais ne partez pas sans découvrir mon métier !",
        ],
        "Cari",
        cariVideoLink,
        "interact",
        "PNJ",
        "PNJ_Cari"
    )
    
    let Fanny = new PopUpVideoAction(
        "Interactions/MetierRoom/Fanny",
        "Appuyez sur espace pour parler à Fanny !",
        [
        "Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger.",
        "Découvrez mon parcours !",
        ],
        [
        "Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger."
        ],
        "IngProd",
        FannyVideoLink,
        () => {
        if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true)
        {
            WA.player.state["TalkHint_1"] = true;
            return true;
        }
        return false;
        },
        "interact",
        "PNJ",
        "PNJ_Fanny"
    );
    
    let ApprentiRobotVideo = new PopUpVideo(
        "Interactions/MetierRoom/ApprentiRobot",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "
        ],
        "ApprentiRobot",
        apprentiRobotLink,
        "interact",
        "Video",
        "Video_Thomas"
    );
    
    let ApprentiChaudronniereVideo = new PopUpVideo(
        "Interactions/MetierRoom/ApprentiChaudron",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."
        ],
        "ApprentiChaudronniere",
        apprentiChaudronniereVideoLink,
        "interact",
        "Video",
        "Video_Pauline"
    );
    
    let yumiMetier = new Modal(
        "Interactions/MetierRoom/chatBot_1",
        "Appuyez sur espace pour discuter avec Yumi !",
        YumiMetierBot,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiMetier"
    );

    let Melody = new PopUpVideo(
        "Interactions/MetierRoom/Melody",
        "Appuyez sur espace pour parler à Mélody",
        [
            "Salut, moi c'est Mélody !",
            "Au quotidien, je suis très rigoureuse, minutieuse même.",
            "Je suis en charge de la conformité de pièces complexes.",
            "Et dans le nucléaire, on ne rigole pas avec la sécurité.",
            "Laissez-moi vous en dire plus !",
            "Ah ! Et j'aime les maths : PI ne m'effraie pas (tout comme le trio dans le jardin) !",
        ],
        "MelodyText",
        MelodyVideoLink,
        "interact",
        "PNJ",
        "PNJ_Melody"
    );

    let Scribble = new Modal(
        "Interactions/MetierRoom/Scribble",
        "Appuyez sur espace pour faire des dessins !",
        scribbleLink,
        "center",
        "interact",
        "Game",
        "Game_Scribble"
    );
    
    let Pool = new Modal(
        "Interactions/ShowRoom/Pool",
        "Appuyer sur espace pour faire du billard !",
        poolLink,
        "center",
        "interact",
        "Game",
        "Game_Pool"
    );
    
    //ShowRoom
    
    let Anais = new PopUpVideo(
        "Interactions/ShowRoom/Anais",
        "Appuyez sur espace pour parler à Anaïs !",
        [
        "Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre !",
        "! Mais avant de vous en dire plus, si vous cherchez quelqu'un avec une clé, je l'ai vu partir vers la cafet des pros, il a une chemise bleue. ",
        ],
        "Anais",
        anaisVideoLink,
        "interact",
        "PNJ",
        "PNJ_Anais"
    );
        
    let FrankVideo = new PopUpVideo(
        "Interactions/ShowRoom/FrankVideo",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Franck est responsable d'un atelier de montage chez SOFINOR.",
        "Découvrez son témoignage en vidéo !"
        ],
        "DessinateurIndu",
        FrankVideoLink,
        "interact",
        "Video",
        "Video_Frank"
    );
    
    let RespRD = new PopUpVideo(
        "Interactions/ShowRoom/RespR&D",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Isabelle est responsable R&D. Découvrez son métier en vidéo !"
        ],
        "RespRD",
        respRDVideoLink,
        "interact",
        "Video",
        "Video_Isabelle"
    
    );
    
    let AjustMonteur = new PopUpVideo(
        "Interactions/ShowRoom/AjustMonteur",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."
        ],
        "AjustMonteur",
        ajustMonteurVideoLink,
        "interact",
        "Video",
        "Video_Nicolas"
    );
    
    let XavierVideo = new PopUpVideo(
        "Interactions/ShowRoom/GalvanoplasteVideo",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Galvanoplaste, mais qu'est-ce que c'est ?",
        "La réponse en vidéo !"
        ],
        "GalvanoplasteVideoText",
        GalvanoplasteVideoLink,
        "interact",
        "Video",
        "Video_Galvanoplaste",
    );
    
    let RafaelVideo = new PopUpVideo(
        "Interactions/ShowRoom/RafaelVideo",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Raphaël a géré le remplacement de la télécabine de Font-Romeu.",
        "Un projet gigantesque et ambitieux. Regardez !"
        ],
        "ChargAff",
        RafaelVideoLink,
        "interact",
        "Video",
        "Video_Rafael",
    );
    
    let RespBureau = new PopUpVideo(
        "Interactions/ShowRoom/RespBureau",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"
        ],
        "RespBureau",
        respBureauVideoLink,
        "interact",
        "Video",
        "Video_RespBureau",
    );
    
    let yumiITW = new Modal(
        "Interactions/ShowRoom/ITWBot",
        "Appuyez sur espace pour discuter avec Yumi Journaliste !",
        YumiITWBot,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiJournaliste",
    );
    
    let MaximeVideo = new PopUpVideo(
        "Interactions/ShowRoom/MaximeVideo",
        "Appuyez sur espace pour écouter le podcast !",
        [
        "Quelqu'un peut me dire ce qu'est la mécatronique ?",
        "Écoutez bien Maxime, responsable de la R&D chez Otech, il vous dit tout."
        ],
        "MaximeVideoText",
        MaximeVideoLink,
        "interact",
        "Video",
        "Video_Maxime",
    );

    let Liebherr_aerospace = new PopUpVideo(
        "Interactions/ShowRoom/LiebherrAerospace",
        "Appuyez sur espace pour regarder la vidéo !",
        [
        "Quel est le point commun entre l'aéronautique et l'automobile ?",
        "Capucine, ingénieure système chez Liebherr-Aerospace Toulouse, vous donne la réponse."
        ],
        "LiebherrAerospaceText",
        Liebherr_aerospaceVideoLink,
        "interact",
        "Video",
        "Video_LiebherrAerospace",
    );

    let LucieVideo = new PopUpVideo(
        "Interactions/ShowRoom/LucieVideo",
        "Appuyez sur espace pour écouter le podcast !",
        [
        "La robotique mobile, qu'est-ce que c'est ?",
        "Lucie, ingénieure d'application chez Meanwhile, vous explique tout.",
        ],
        "LucieVideoText",
        LucieVideoLink,
        "interact",
        "Video",
        "Video_LucieVideo",
    );
    
    //ParkInside
    
    let Maeva = new PopUpVideoAction(
        "Interactions/ParkInside/Maeva",
        "Appuyez sur espace pour parler à Maëva !",
        [
        "Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !",
        ],
        [
        "Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !",
        ],
        "MaevaText",
        tiboInShapeVideoLink,
        () => {
        if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true)
        {
            WA.player.state["TalkHint_2"] = true;
            return true;
        }
        return false;
        },
        "interact",
        "PNJ",
        "PNJ_Maeva",
    );
    
    let RomaneBot = new Modal(
        "Interactions/ParkInside/Hihacks",
        "Appuyez sur espace pour discuter avec Romane !",
        RomaneBotLink,
        "right",
        "interact",
        "PNJ",
        "PNJ_Romane",
    );

    let Jeune3 = new PopUpVideo(
        "Interactions/ParkInside/Manon",
        "Appuyez sur espace pour parler à Manon !",
        [
        "J'ai 22 ans. Je créé des objets de A à Z. Je dessine beaucoup. J'adore la mécanique.",
        "Je m'appelle Manon et je suis spécialisée en Conception 3D et Fabrication Additive. Venez découvrir ma passion !"
        ],
        "ManonText",
        linkVideoJeune3,
        "interact",
        "PNJ",
        "PNJ_Manon"
    );
    
    
    //Labo Yumi

    
    let Paulygones = new PopUpVideo(
        "Interactions/LaboRoom/Paulygones",
        "Appuyez sur espace pour parler à Paulygones !",
        [
        "Je m'appelle Paulygones.",
        "Bon en vrai, c'est Paul Guillotel.",
        "Mais ce qui est sûr, c'est que j'aime fabriquer des trucs.",
        "Ça tombe bien car ici, tout le monde aime créer de nouvelles choses !",
        "Dans cette vidéo, vous apprendrez à fabriquer un aspirateur à vêtements géant."
        ],
        "DrNozman",
        PaulygonesVideoLink,
        "interact",
        "PNJ",
        "PNJ_Paulygones",
    );

    let HiHacks = new PopUpVideo(
        "Interactions/LaboRoom/Hihacks_labo",
        "Appuyez sur espace pour parler à Henri Hihacks !",
        [
        "Salut ! Moi c’est Henri Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !",
        ],
        "Hihacks_labo",
        hiHacksVideoLink,
        "interact",
        "PNJ",
        "PNJ_HenriHihacks",
    );
    
    let YumiLabBot = new Modal(
        "Interactions/LaboRoom/YumiLab",
        "Appuyez sur espace pour discuter avec Yumi Scientifique !",
        YumiLabBotLink,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiScientifique",
    );
    //Dinning Room
    
    let Adrien = new Modal(
        "Interactions/DinningRoom/Adrien",
        "Appuyez sur espace pour découvrir Adrien !",
        AdrienChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_AdrienDinningRoom",
    );

    let Aurélie = new Modal(
        "Interactions/DinningRoom/Aurelie",
        "Appuyez sur espace pour découvrir Aurélie !",
        AurélieChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_AurélieDinningRoom",
    );

    let Anne = new Modal(
        "Interactions/DinningRoom/Anne",
        "Appuyez sur espace pour découvrir Anne !",
        AnneChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_AnneDinningRoom",
    );

    let Séverine = new PopUpVideo(
        "Interactions/DinningRoom/Séverine",
        "Appuyez sur espace pour discuter avec Séverine !",
        SéverineChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_SéverineDinningRoom",
    );

    let Ludovic = new Modal(
        "Interactions/DinningRoom/Ludovic",
        "Appuyez sur espace pour découvrir Ludovic !",
        LudovicChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_LudovicDinningRoom",
    );

    let Laure = new Modal(
        "Interactions/DinningRoom/Laure",
        "Appuyez sur espace pour découvrir Laure !",
        LaureChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_LaureDinningRoom",
    );

    let Aurélien = new PopUpVideo(
        "Interactions/DinningRoom/Aurelien",
        "Appuyez sur espace pour découvrir Aurélien !",
        AurélienChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_AurélienDinningRoom",
    );

    let Ludivine = new PopUpVideo(
        "Interactions/DinningRoom/Ludivine",
        "Appuyez sur espace pour découvrir Ludivine !",
        LudivineChatLink,
        "center",
        "interact",
        "PNJ",
        "PNJ_LudivineDinningRoom",
    );

    let YumiCafet = new Modal(
        "Interactions/DinningRoom/YumiCafet",
        "Appuyez sur espace pour discuter avec Yumi !",
        YumiCafetBotLink,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiCafet",
    );
}

export {
    phase_2
};