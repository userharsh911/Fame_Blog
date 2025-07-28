import { Client, Account,ID } from "appwrite";
import conf from "../conf/conf.js";
export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
        .setEndpoint(conf.APPWRITE_URL) // Your Appwrite Endpoint
        .setProject(conf.APPWRITE_PROJECT_ID) // Your Appwrite Project ID;
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            return this.login({email, password});
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {   
            throw error;
        }
    }

    async OtpLogin({email}){
        try {
            await this.account.createEmailToken(
                ID.unique(),
                email
            )
        } catch (error) {
            
        }
    }

    async verifyOtp({userId, otp}) {
        try {
            return await this.account.createSession(
                userId,
                otp
            );
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("throw error ",error.message)
            return false
        }
    }
}

const authService = new AuthService();
export default authService;