import { Injectable } from '@angular/core';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { auth } from './firebase.config';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { AuthUser } from '../../domain/models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthRepository implements AuthRepository {
  async login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  async logout() {
    await signOut(auth);
  }

  getCurrentUser(): AuthUser | null {
    const user = auth.currentUser;

    if (!user) return null;

    return {
      uid: user.uid,
      email: user.email!,
      displayName: user.displayName!,
      role: 'client'
    };
  }
}