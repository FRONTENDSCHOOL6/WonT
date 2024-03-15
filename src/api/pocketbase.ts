import PocketBase from 'pocketbase';

const pocketbase = new PocketBase(import.meta.env.VITE_PB_URL);

// PocketBase SDK {}
export default pocketbase;
