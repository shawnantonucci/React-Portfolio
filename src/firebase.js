import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCWVvnHnmm2Gk6vzAzRHfXKHmN2PNzmty4",
    authDomain: "shawn-react-portfolio.firebaseapp.com",
    databaseURL: "https://shawn-react-portfolio.firebaseio.com",
    projectId: "shawn-react-portfolio",
    storageBucket: "shawn-react-portfolio.appspot.com",
    messagingSenderId: "240198555836"
};

firebase.initializeApp(config);