import express from 'express'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from './config.js';
import { stepRouter } from './routes/step.js';
// import * as stepRoute from './routes/step'
// import {getAll} from './routes/step' 

// firebase config
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// express setup
const app = express()
const PORT = 3000

app.use('/step', stepRouter)

app.get('/', (req, res) => {
    res.send('Welcome to tech squad')
    console.log(process.env)
})


// [TODO Ricardo] Extract to separate route file and make this method functional
// should not be mutating the array.
app.get('/test', async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "test"));
  const documents = []

  querySnapshot.forEach((doc) => {
    // test logs
    console.log(`${doc.id} => ${doc.data().text}`);
    documents.push(doc.data())
  });
  res.send(documents)
})

// [TODO Ricardo] make this work independent of if we are on local or remote hosting.
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})




