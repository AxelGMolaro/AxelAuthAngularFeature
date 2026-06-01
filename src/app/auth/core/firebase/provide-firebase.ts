import { EnvironmentProviders } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAQiK0zlENGAV1H7TvsXhDG9I0DgneQTuw',
  authDomain: 'argentinian-barber-app.firebaseapp.com',
  projectId: 'argentinian-barber-app',
  storageBucket: 'argentinian-barber-app.firebasestorage.app',
  messagingSenderId: '628273594121',
  appId: '1:628273594121:web:c6a98a1f826a47baa6ddd8'
};

export function provideFirebaseInfrastructure(): EnvironmentProviders[] {
  return [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ];
}