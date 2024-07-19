import $api from "../http"

export default class WeldingsService {
    static async loadTabelSv(){
        return $api.get('/weldings/loadtabelsv')
    }
    static async syncTabelSv(){
        return $api.get('/weldings/synctabelsv')
    }

    static async loadViewsWorkSv(){
        return $api.get('/weldings/loadviewsworksv')
    }
    static async syncViewsWorkSv(){
        return $api.get('/weldings/syncviewsworksv')
    }

    static async loadYmSvarka(){
        return $api.get('/weldings/loadymsvarka')
    }
    static async syncYmSvarka(){
        return $api.get('/weldings/syncymsvarka')
    }

    static async loadZaSv(){
        return $api.get('/weldings/loadzasv')
    }
    static async syncZaSv(){
        return $api.get('/weldings/synczasv')
    }

    static async loadTableZayavka(){
        return $api.get('/weldings/loadtablezayavka')
    }
    static async syncTableZayavka(){
        return $api.get('/weldings/synctablezayavka')
    }

    static async loadCrewSv(){
        return $api.get('/weldings/loadcrewsv')
    }
    static async syncCrewSv(){
        return $api.get('/weldings/synccrewsv')
    }
}

