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
    const prodRef = query(collection(db, "products"), orderBy("price", "asc"));

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

export const getProductsById = (prodId) => {
  return new Promise(
    (resolve, reject) => {
      const prodRef = doc(db, "products", prodId);

      getDoc(prodRef)
        .then((response) => {
          const data = response.data();
          const prodAdapted = { id: response.id, ...data };
          resolve(prodAdapted);
        })

        .catch((error) => {
          reject("error");
        });
    },
    [prodId]
  );
};

// ========================================================================

export const getServices = () => {
  return new Promise((resolve, reject) => {
    const servRef = query(collection(db, "servicios"), orderBy("price", "asc"));

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

export const getContactDates = () => {
  return new Promise((resolve, reject) => {
    const ContactDateRef = collection(db, "contactDate");
    getDocs(ContactDateRef)
      .then((response) => {
        const ContactDateAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(ContactDateAdapted);
      })
      .catch((error) => {
        reject("error");
      });
  }, []);
};
