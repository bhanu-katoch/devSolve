const conf = {
    appwrite_url : import.meta.env.VITE_APPWRITE_ENDPOINT,
    database_id : import.meta.env.VITE_APPWRITE_DATABASE_ID,
    project_id : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwrite_url : import.meta.env.VITE_APPWRITE_ENDPOINT,
    collection_projectLeadRegister : import.meta.env.VITE_APPWRITE_PROJECTLEAD_COLLECTION_ID,
    collection_juniorRegister : import.meta.env.VITE_APPWRITE_JUNIOR_COLLECTION_ID,
    email_sent : import.meta.env.VITE_APPWRITE_EMAIL_CONFIRMATION_SENT
}
export default conf