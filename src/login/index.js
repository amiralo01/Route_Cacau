  import { GoogleAuthProvider } from "firebase/auth";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { FacebookAuthProvider } from "firebase/auth";

  const email = document.getElementById("login").value;
  const password = document.getElementById("senha").value;
  const auth = getAuth();
    
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Usuário criado com sucesso:', user.uid);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao criar usuário:', errorCode, errorMessage);
  });
    
  document.querySelector("login_google").addEventListener('click', () =>{
    
    const provider = new GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('Usuário autenticado com sucesso:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro ao autenticar com o Google:', errorCode, errorMessage);
        });   

  });

  document.querySelector("login_facebook").addEventListener('click', () =>{
    
    const provider = new FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('Usuário autenticado com sucesso:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erro ao autenticar com o Facebook:', errorCode, errorMessage);
        });   

  });
  

  // Adicionar um ouvinte de evento de clique ao botão de logout
  logoutButton.addEventListener('click', () => {
    // Realize o logout do usuário
    firebase.auth().signOut().then(() => {
      // O usuário fez logout com sucesso
      console.log('Usuário deslogado');
      checkAuthentication();
    }).catch((error) => {
      // Lidar com erros de logout
      console.error('Erro ao fazer logout:', error);
    });
  });
    
  // Função para verificar a autenticação atual
  function checkAuthentication() {
    // Verifique se o usuário está autenticado
    const user = firebase.auth().currentUser;
  
    if (user) {
      // O usuário está autenticado
      loginButton.style.display = 'none';
      logoutButton.style.display = 'block';
    } else {
      // O usuário não está autenticado
      loginButton.style.display = 'block';
      logoutButton.style.display = 'none';
    }
  }
    

  // Verifique a autenticação ao carregar a página
  checkAuthentication();

    
  