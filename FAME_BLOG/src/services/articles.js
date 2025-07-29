import { Client, Account, Storage, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf.js";

class ArticleService {
    client = new Client();
    account;
    storage;
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_URL) // Your Appwrite Endpoint
            .setProject(conf.APPWRITE_PROJECT_ID); // Your Appwrite Project ID

        this.account = new Account(this.client);
        this.storage = new Storage(this.client);
        this.databases = new Databases(this.client);
    }

    async createPost({slug, title, content, featuredImage,status,userid}) {
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            );
        } catch (error) {
            console.log("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug,{ title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Error updating post:", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            );
            return { success: true, message: "Post deleted successfully" };
        } catch (error) {
            console.log("Error deleting post:", error);
            
        }
        return { success: false, message: "Failed to delete post" };
    }

    async getAPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            );
        } catch (error) {
            console.log("Error fetching post:", error);
            throw error;
        }
    }

    async getAllPosts(query=[Query.equal('status', 'published')]) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                query, 
            );
        } catch (error) {
            console.log("Error fetching posts:", error);
            throw error;
        }
    }

    // file upload
    async uploadFile(file) {
        try {
            const response = await this.storage.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.log("Error uploading file:", error);
            throw error;
        }
    }

    async deleteFile(file){
        try {
            await this.storage.deleteFile(
                conf.APPWRITE_BUCKET_ID,
                file
            )
            return true
        } catch (error) {
            console.log("error while deleting file ",error)
            return false
        }
    }

    async getFile(fileId) {
        try {
            return await this.storage.getFile(
                conf.APPWRITE_BUCKET_ID,
                fileId
            );
        } catch (error) {
            console.log("Error fetching file:", error);
            throw error;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFileView(
            conf.APPWRITE_BUCKET_ID,
            fileId
        )
    }
}

const articleService = new ArticleService();
export default articleService;