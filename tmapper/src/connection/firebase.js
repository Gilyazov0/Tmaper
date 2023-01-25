import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDE98WmK2_UfF3y62671edqt5flihtKv3w",
  authDomain: "tmapper-a0c5d.firebaseapp.com",
  projectId: "tmapper-a0c5d",
  storageBucket: "tmapper-a0c5d.appspot.com",
  messagingSenderId: "730383758089",
  appId: "1:730383758089:web:1b6b5101f4d10a68ce19d8",
  measurementId: "G-9FLSBZZ03Q",
  databaseURL:
    "https://tmapper-a0c5d-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default async function getCultureData(clustersNum = 3) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `cluster_num_${clustersNum}`));
  if (snapshot.exists()) return snapshot.val();
  else return {};
}
