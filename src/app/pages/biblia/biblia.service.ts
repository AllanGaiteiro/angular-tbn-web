import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/Bible';
import * as admin from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2g5KViGb0jMSkM4LXBQBVymEd-t6EJEM",
  authDomain: "tbn-staging.firebaseapp.com",
  projectId: "tbn-staging",
  storageBucket: "tbn-staging.appspot.com",
  messagingSenderId: "688629891266",
  appId: "1:688629891266:web:f1dce22682730c35aebb5b",
  measurementId: "G-FXQMD6HELW"
};

// Initialize Firebase
const app = admin.initializeApp(firebaseConfig);
export const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class BibliaService {
  // local
  private readonly api = 'http://localhost:1200/bible/version';

  // staging
  // private readonly API = 'https://staging-api-biblia.allangaiteiro.repl.co/biblia';

  // product
  // private readonly API = 'https://Biblia-API-Express.allangaiteiro.repl.co/biblia';

  constructor(private http: HttpClient) {
    // empty
  }

  async requestBooks(): Promise<void> {
    const citiesCol = collection(db, 'boocks');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
  
    // return this.http.post<Book[]>(this.api, { version: 'aa' });
    // return this.http.get<any>('https://www.abibliadigital.com.br/api/books')
  }
  public requestChapters(book: string): Observable<number> {
    return this.http.post<number>(`${this.api}/livro/`, {
      name: book,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/books/${livro}`)
  }
  public requestChapter(
    book: string,
    chapterNumber: number
  ): Observable<string[]> {
    return this.http.post<string[]>(`${this.api}/livro/capitulo`, {
      name: book,
      chapterNumber,
      version: 'aa',
    });
    // return this.http.get<any>(`https://www.abibliadigital.com.br/api/verses/nvi/${livro}/${chapters}`)
  }
}
