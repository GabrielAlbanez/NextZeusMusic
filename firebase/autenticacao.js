// nesse arquivo sera concentrado todos os metodos realacionado a autentucação de usuarios

import { app } from "/firebase";

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,sendPasswordResetEmail,signOut,signInWithPopup} from "firebase/auth";

import {
    addDoc,
    collection,
    getFirestore,
    query,
    getDocs,
    where
} from 'firebase/firestore'


const auth = getAuth(app); //essa contorna um objeto que vai me trazer todos os parmetros de autenticação
const db = getFirestore(app) //essa const vai estar representando nosso banco de dados

const googleProvider = new GoogleAuthProvider(); // vai armazenar o provedor do google

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

const RecuperarSenha = async(email) =>{
  try{
    await sendPasswordResetEmail(auth,email)
    alert("email para recuperação de senha enviado")

  }catch(error){
    alert("não foi possivel fazer o email de recuperaçõa")
  }
}

const logout = () =>{
  signOut(auth)
}

const entrarComGoogle = async() =>{
try{
const res = await signInWithPopup(auth, googleProvider)
const user = res.user
const q = query(collection(db, "users"), where("uid","==",user.uid))
const docs = await getDocs(q)

 if(docs.docs.length === 0){
  await addDoc(collection(db,"users"),{
      uid : user.id,
      name : user.displayname,
      authProvider : "google",
      email : user.email
  })
 }




}catch(error){
  alert("n conseguimos fazer a sua verificação pelo google")
}
}

export { 
  auth,
  loginComEmailESenha,
  registrarComEmailESenha,
  RecuperarSenha,
  logout,
  entrarComGoogle

 }
