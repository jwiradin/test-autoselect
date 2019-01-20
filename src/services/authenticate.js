import { AsyncStorage } from "AsyncStorage"

const Authenticate = {
    isAuthenticated: false,
    user: {},
    callback: null,
    authenticate(callback) {

        this.isAuthenticated = true;
        this.user = {
            name: "Joe",
            role: "admin"
        };

        AsyncStorage
            .setItem('user', JSON.stringify(this.user))
            .then((err) => {
                console.log(this.user);
                setTimeout(callback, 100)
            }
            );

    },
    setCallback(callback) {
        this.callback = callback;
    }
    ,
    signout(callback) {
        this.isAuthenticated = false;
        this.user = {};
        AsyncStorage.setItem('user', null);
        setTimeout(callback, 100);
    },
    checkAuthentication() {

        AsyncStorage.getItem('user')
            .then((result) => {
                if (result) {
                    console.log(result);
                    this.user = JSON.parse(result);
                    this.isAuthenticated = true;
                    if (this.callback) {
                        this.callback(this.user);
                    }
                }
            });
    }
}
export default Authenticate;