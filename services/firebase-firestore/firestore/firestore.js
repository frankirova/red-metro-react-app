import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase-config";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    const prodRef = collection(db, "products");

    getDocs(prodRef)
      .then((response) => {
        const prodAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(prodAdapted);
      })
      .catch((error) => {
        reject("error");
      });
  }, []);
};

export const getServices = () => {
  return new Promise((resolve, reject) => {
    const servRef = query(
      collection(db, "servicios"), orderBy("price", "asc")
    );

    getDocs(servRef)
      .then((response) => {
        const servAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(servAdapted);
        console.log(servAdapted);
      })
      .catch((error) => {
        reject("error");
      });
  }, []);
};
