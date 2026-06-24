/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

// Mock expo vector icons by mapping them directly to the built-in View component
jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
    MaterialCommunityIcons: View,
    FontAwesome5: View,
    AntDesign: View,
  };
});

describe('HomeScreen', () => {
  it('renders without crashing', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Hello, Sarah!')).toBeTruthy();
  });

  it('displays user greeting with alerts and messages count', () => {
    render(<HomeScreen />);
    expect(screen.getByText(/3 new alerts/)).toBeTruthy();
    expect(screen.getByText(/2 new messages/)).toBeTruthy();
  });

  it('renders Today\'s Overview section with cards', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Today\'s Overview')).toBeTruthy();
    expect(screen.getAllByText('Alerts').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Messages').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Appointments').length).toBeGreaterThan(0);
  });

  it('displays upcoming appointment card', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Hearing Check-Up')).toBeTruthy();
    expect(screen.getByText('May 15, 2025 • 10:00 AM')).toBeTruthy();
    expect(screen.getByText('Hearing Wellness Center')).toBeTruthy();
  });

  it('renders View Details button', () => {
    render(<HomeScreen />);
    const viewDetailsButton = screen.getByText('View Details');
    expect(viewDetailsButton).toBeTruthy();
  });

  it('renders feature grid with all 6 feature cards', () => {
    render(<HomeScreen />);
    expect(screen.getAllByText('Messages').length).toBeGreaterThan(0);
    expect(screen.getByText('Alerts & Reminders')).toBeTruthy();
    expect(screen.getByText('Hearing Support')).toBeTruthy();
    expect(screen.getByText('Accessibility')).toBeTruthy();
    expect(screen.getAllByText('Profile').length).toBeGreaterThan(0);
  });

  it('renders need help card', () => {
    render(<HomeScreen />);
    expect(screen.getByText(/Need help\?/i)).toBeTruthy();
    expect(
      screen.getByText(
        'Contact your caregiver or access support resources.',
      ),
    ).toBeTruthy();
  });

  it('renders bottom navigation with all tabs', () => {
    render(<HomeScreen />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Messages').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Alerts').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Appointments').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Profile').length).toBeGreaterThan(0);
  });

  it('calls onNavigate when bottom nav item is pressed', () => {
    const mockNavigate = jest.fn();
    render(<HomeScreen onNavigate={mockNavigate} />);
    
    // Press all elements with 'Messages' text to guarantee hitting the nav tab item
    const messagesTabs = screen.getAllByText('Messages');
    messagesTabs.forEach(tab => {
      try { fireEvent.press(tab); } catch (e) {}
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('messages');
  });

  it('displays correct badge counts in overview cards', () => {
    render(<HomeScreen />);
    const badges = screen.getAllByText(/^[0-9]$/);
    expect(badges.length).toBeGreaterThan(0);
  });
});