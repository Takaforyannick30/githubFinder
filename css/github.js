class Github {
    constructor() {
        this.client_id = '888c3d32c64a29e5213f';
        this.client_secret = ' f8c6fd978ae7ea628b1580cf1ddbb1231d0ca3b7';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_id_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}