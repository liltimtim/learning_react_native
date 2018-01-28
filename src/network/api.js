const BASE_URL = 'https://rallycoding.herokuapp.com/api'
export class API {
    static async getAlbums() {
        try {
            let response = await fetch(`${BASE_URL}/music_albums`);
            let responseJSON = await response.json();
            return responseJSON;
        } catch (err) {
            throw err;
        }
    }
}
