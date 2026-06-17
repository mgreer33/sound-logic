import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import StatusScreen from './src/screens/StatusScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import HelpCenterScreen from './src/screens/HelpCenterScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import AlertScreen from './src/screens/alert_screen';
import AppointmentScreen from './src/screens/appointment_screen';
import MessageScreen from './src/screens/message_screen';
import ProfileScreen from './src/screens/profile_screen';

type ScreenName =
  | 'login'
  | 'status'
  | 'signup'
  | 'home'
  | 'helpCenter'
  | 'accessibility'
  | 'alerts'
  | 'appointments'
  | 'messages'
  | 'profile';

function App() {
  const [screen, setScreen] = useState<ScreenName>('login');

  const handleNavigate = (screenName: ScreenName) => {
    setScreen(screenName);
  };

  const handleBack = () => {
    setScreen('home');
  };

  switch (screen) {
    case 'home':
      return <HomeScreen onNavigate={handleNavigate} />;
    case 'helpCenter':
      return <HelpCenterScreen />;
    case 'accessibility':
      return <AccessibilityScreen onBack={handleBack} />;
    case 'alerts':
      return <AlertScreen />;
    case 'appointments':
      return <AppointmentScreen />;
    case 'messages':
      return <MessageScreen />;
    case 'profile':
      return <ProfileScreen />;
    case 'status':
      return <StatusScreen onBack={() => setScreen('login')} />;
    case 'signup':
      return <SignUpScreen onBack={() => setScreen('login')} />;
    case 'login':
    default:
      return (
        <LoginScreen
          onGetStarted={() => setScreen('status')}
          onSignIn={() => setScreen('home')}
        />
      );
  }
}

export default App;
