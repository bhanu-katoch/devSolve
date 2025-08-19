const conf = {
    appwrite_url : import.meta.env.VITE_APPWRITE_ENDPOINT,
    database_id : import.meta.env.VITE_APPWRITE_DATABASE_ID,
    project_id : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    collection_projectLeadRegister : import.meta.env.VITE_APPWRITE_PROJECTLEAD_COLLECTION_ID,
    collection_juniorRegister : import.meta.env.VITE_APPWRITE_JUNIOR_COLLECTION_ID,
}
export default conf