import { useEffect, useState } from "react";
import initializeauth from "../Components/Firebase/Firebase.initialize";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged,updateProfile } from "firebase/auth";

initializeauth();

const useFirebase = () => {

    const [user,setuser] = useState({});
    const [autherror,setautherror] = useState('')
    const [isLoading,setisLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email,password,displayName,history)=>{
        
        setisLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setautherror('');
          
            const newUser = {email,displayName:displayName};
            setuser(newUser);
         

            saveUser(email,displayName);

            updateProfile(auth.currentUser,{
              displayName:displayName
            })
              .then(()=>{
            })
            .catch((error)=>{
            
            });
            history.replace('/login')
           
          })
          .catch((error) => {
            setautherror(error.message) ;
          
            // ..
          })
          .finally(()=> setisLoading(false));
    }

    const saveUser = (email,displayName) =>{
        const user = {email,displayName};
        fetch('https://obscure-ravine-78219.herokuapp.com/users',{
          method:'POST',
          headers:{"content-type":"application/json"},
          body:JSON.stringify(user),
      })
    }

    

    const loginUser = (email,password,location,history)=>{
      setisLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const distination = location?.state?.from || '/dashboard';
            history.replace(distination);
            setautherror('');
    
  })
  .catch((error) => {
    setautherror(error.message) ;
  })
  .finally(()=> setisLoading(false));

    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)
            } else {
             setuser({})
            }
            setisLoading(false);
          });
          return () => unsubscribe;
    },[])

    useEffect(()=>{

      fetch(`https://obscure-ravine-78219.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

    },[user.email])

    const logOut = ()=>{
      setisLoading(true);
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setisLoading(false));
    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logOut,
        autherror,


    }

};
  

export default useFirebase;