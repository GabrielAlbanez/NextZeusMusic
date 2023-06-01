// nesse arquivo sera concentrado todos os metodos realacionado a autentucação de usuarios

import { app } from "/firebase";

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
    addDoc,
    collection,
    getFirestore,
    query,
    getDocs,
    where
} from 'firebase/firestore'


const auth = getAuth(app); //essa contorna um objeto que vai me trazer todos os parmetros de autenticação

/*
aq serão inseridas as funções invocadas pela interface 
apos chamar um metodo/funcção aq vc tem que exportar ela
*/

const loginComEmailESenha = async (email, senha) => {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
  } catch (error) {
    alert("nao foi possivel fazer seu login");
  }
};

const registrarComEmailESenha = async(name,email,password) =>{
try{

    const res = await createUserWithEmailAndPassword(auth, email, password)

    const user = res.user
    await addDoc(collection(db, "users"),{
        uid : user.uid,
        name,
        authProvider : "local",
        email

    })

}catch(error){
    alert("nao foi possivel fazer seu Cadastro");
}
}

export { auth };
