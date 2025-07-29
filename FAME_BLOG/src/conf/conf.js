const conf = {
    APPWRITE_URL : String(import.meta.env.VITE_APPWRITE_URL),
    APPWRITE_PROJECT_ID : String(import.meta.env.VITE_PROJECT_ID),
    APPWRITE_DATABASE_ID : String(import.meta.env.VITE_DATABASE_ID),
    APPWRITE_COLLECTION_ID : String(import.meta.env.VITE_COLLECTION_ID),
    APPWRITE_BUCKET_ID : String(import.meta.env.VITE_BUCKET_ID),
    RTE_API_KEY : String(import.meta.env.VITE_RTE_KEY)
}
export default conf;