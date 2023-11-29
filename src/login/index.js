  
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  function validar(){
    const email = document.getElementById("login").value;
    const password = document.getElementById("senha").value;
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
    // Referência ao elemento de botão de login google
    const loginButton = document.getElementById('butgoogle');
    const logoutButton = document.getElementById('logout-button');
    
    // Adicionar um ouvinte de evento de clique ao botão de login
    loginButton.addEventListener('click', () => {
      const provider = new firebase.auth.GoogleAuthProvider();

    
      // Realizar a autenticação com o Google
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          // O usuário está autenticado com sucesso
          const user = result.user;
          console.log('Usuário autenticado:', user);
          checkAuthentication();
        })
        .catch((error) => {
          // Lidar com erros de autenticação
          console.error('Erro ao autenticar:', error);
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
    
  } 

  // Verifique a autenticação ao carregar a página
  checkAuthentication();

    
  