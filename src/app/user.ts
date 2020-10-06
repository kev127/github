export class User {
    constructor(
        public login:string,
        public avatar_url:string,
        public url:string,
        public name:string,
        public email:string,
        public followers:number,
        public following:number,
    ){

    }
}