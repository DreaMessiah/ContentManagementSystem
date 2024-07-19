import $api from "../http"

export default class DataService{
    static async syncCrewSv(){
        return $api.get('/data/synccrewsv')
    }
    static async syncCrewBase(){
        return $api.get('/data/synccrewbase')
    }
    static async syncCrewDoclist(){
        return $api.get('/data/synccrewdoclist')
    }
    static async syncCrewManlist(){
        return $api.get('/data/synccrewmanlist')
    }
    static async syncViewsWorkSv(){
        return $api.get('/data/synccrewviewworksv')
    }
    static async syncMessageSv(){
        return $api.get('/data/syncmessagesv')
    }
    static async syncTabelSv(){
        return $api.get('/data/synctabelsv')
    }
    static async syncKtuDoc(){
        return $api.get('/data/syncktudoc')
    }
    static async syncKtuList(){
        return $api.get('/data/syncktulist')
    }
    static async syncKtuList(){
        return $api.get('/data/syncktulist')
    }
    static async syncTabelForMehans(){
        return $api.get('/data/synctalbelmehan')
    }


}

