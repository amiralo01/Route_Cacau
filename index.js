  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // Configuração do Firebase (substitua com suas próprias credenciais)
  const firebaseConfig = {
    apiKey: "AIzaSyDoR7zjAdtQNppaqoDnOFMk5CT3sEdk3XM",
    authDomain: "cacaurouter.firebaseapp.com",
    projectId: "cacaurouter",
    storageBucket: "cacaurouter.appspot.com",
    messagingSenderId: "949392278591",
    appId: "1:949392278591:web:77506df8e1039bffaa648a",
    measurementId: "G-SVT2VMQ6L8"
  };
  
  // Initializar Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // Referência ao elemento de botão de login
  const loginButton = document.getElementById('login-button');
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
  
  // Verifique a autenticação ao carregar a página
  checkAuthentication();