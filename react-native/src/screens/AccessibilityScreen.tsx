import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

interface AccessibilityScreenProps {
  onBack?: () => void;
}

const AccessibilityScreen: React.FC<AccessibilityScreenProps> = ({ onBack }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [colorEnhancement, setColorEnhancement] = useState(true);
  const [voiceMessages, setVoiceMessages] = useState(true);

  const handleSettingToggle = (setting: string, value: boolean) => {
    switch (setting) {
      case 'highContrast':
        setHighContrast(value);
        break;
      case 'darkMode':
        setDarkMode(value);
        break;
      case 'colorEnhancement':
        setColorEnhancement(value);
        break;
      case 'voiceMessages':
        setVoiceMessages(value);
        break;
    }
  };

  const handleTextSizeChange = (size: string) => {
    // Handle text size change
  };

  const renderSettingRow = (
    icon: React.ReactNode,
    title: string,
    description: string,
    hasToggle: boolean = false,
    toggleValue?: boolean,
    onToggleChange?: (value: boolean) => void,
  ) => (
    <View style={styles.settingRow}>
      <View style={styles.settingIconContainer}>{icon}</View>
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      {hasToggle && toggleValue !== undefined && onToggleChange && (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{ false: '#D0D0D0', true: '#1B6F4E' }}
          thumbColor={toggleValue ? '#1B6F4E' : '#F0F0F0'}
        />
      )}
      {!hasToggle && (
                          <Text>??</Text>
      )}
    </View>
  );

  const renderSectionDivider = () => (
    <View style={styles.sectionDivider} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
                            <Text>??</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CC CareConnect</Text>
        <TouchableOpacity style={styles.notificationBadge}>
          <Ionicons name="notifications" size={24} color="#1B6F4E" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <TouchableOpacity onPress={onBack}>
                                <Text>??</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Accessibility</Text>
          </View>
          <Text style={styles.subtitle}>
            Customize your experience to meet your needs.
          </Text>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
                              <Text>??</Text>
            <Text style={styles.illustrationText}>🔊</Text>
          </View>
          <View style={[styles.illustration, styles.illustrationCircle]}>
            <Text style={styles.illustrationText}>A</Text>
            <Text style={styles.illustrationText}>A</Text>
          </View>
        </View>

        {/* Display Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display Settings</Text>
          <View style={styles.settingsContainer}>
            {/* Text Size */}
            <View style={styles.settingRow}>
              <View style={styles.settingIconContainer}>
                <View style={[styles.icon, { backgroundColor: '#E8F4F1' }]}>
                  <Text style={styles.sizeText}>AA</Text>
                </View>
              </View>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>Text Size</Text>
                <Text style={styles.settingDescription}>
                  Adjust the size of text throughout the app
                </Text>
              </View>
            </View>

            <View style={styles.textSizeSelector}>
              <TouchableOpacity
                style={styles.sizeButton}
                onPress={() => handleTextSizeChange('small')}
              >
                <Text style={styles.sizeButtonSmall}>A</Text>
              </TouchableOpacity>
              <View style={styles.sizeButtonMiddle}>
                <Text style={styles.sizeButtonMedium}>Medium</Text>
              </View>
              <TouchableOpacity
                style={styles.sizeButton}
                onPress={() => handleTextSizeChange('large')}
              >
                <Text style={styles.sizeButtonLarge}>A</Text>
              </TouchableOpacity>
            </View>

            {renderSectionDivider()}

            {/* High Contrast */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F4F1' }]}>
                                  <Text>??</Text>
              </View>,
              'High Contrast',
              'Increase contrast for better visibility',
              true,
              highContrast,
              (value) => handleSettingToggle('highContrast', value),
            )}

            {renderSectionDivider()}

            {/* Dark Mode */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#F0E8F4' }]}>
                                  <Text>??</Text>
              </View>,
              'Dark Mode',
              'Reduce eye strain in low light',
              true,
              darkMode,
              (value) => handleSettingToggle('darkMode', value),
            )}

            {renderSectionDivider()}

            {/* Color Enhancement */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F4F1' }]}>
                                                      <Text>??</Text>
              </View>,
              'Color Enhancement',
              'Improve color visibility',
              true,
              colorEnhancement,
              (value) => handleSettingToggle('colorEnhancement', value),
            )}
          </View>
        </View>

        {/* Hearing Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hearing Support</Text>
          <View style={styles.settingsContainer}>
            {/* Live Caption */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F0F4' }]}>
                <Text style={styles.iconText}>CC</Text>
              </View>,
              'Live Caption',
              'Show captions for messages and alerts',
            )}

            {renderSectionDivider()}

            {/* Visual Alerts */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F0F4' }]}>
                                  <Text>??</Text>
              </View>,
              'Visual Alerts',
              'Receive visual alerts for notifications',
            )}

            {renderSectionDivider()}

            {/* Sound & Vibration Settings */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F4F1' }]}>
                                  <Text>??</Text>
              </View>,
              'Sound & Vibration Settings',
              'Customize alert sounds and vibrations',
            )}
          </View>
        </View>

        {/* Communication Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication Preferences</Text>
          <View style={styles.settingsContainer}>
            {/* Voice Messages */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#FFF0E8' }]}>
                                  <Text>??</Text>
              </View>,
              'Voice Messages',
              'Send and receive voice messages',
              true,
              voiceMessages,
              (value) => handleSettingToggle('voiceMessages', value),
            )}

            {renderSectionDivider()}

            {/* Sign Language Resources */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#E8F0F4' }]}>
                                  <Text>??</Text>
              </View>,
              'Sign Language Resources',
              'Access helpful sign language videos',
            )}

            {renderSectionDivider()}

            {/* Hearing Health Tips */}
            {renderSettingRow(
              <View style={[styles.icon, { backgroundColor: '#F0E8F4' }]}>
                                  <Text>??</Text>
              </View>,
              'Hearing Health Tips',
              'Helpful tips and resources',
            )}
          </View>
        </View>

        {/* Support Card */}
        <View style={styles.supportCard}>
          <View style={styles.supportHeader}>
            <View style={[styles.icon, { backgroundColor: '#1B6F4E' }]}>
                                <Text>??</Text>
            </View>
            <View style={styles.supportTextContainer}>
              <Text style={styles.supportTitle}>
                Need help with accessibility?
              </Text>
              <Text style={styles.supportDescription}>
                Contact our support team for personalized assistance.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
                              <Text>??</Text>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Padding */}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#CCC" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
                            <Text>??</Text>
          <Text style={styles.navLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#CCC" />
          <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
                            <Text>??</Text>
          <Text style={styles.navLabel}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
                            <Text>??</Text>
          <Text style={styles.navLabelActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B6F4E',
  },
  notificationBadge: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#1B6F4E',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleSection: {
    marginTop: 16,
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B6F4E',
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  illustrationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    height: 140,
  },
  illustration: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E8F4F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationIcon: {
    position: 'absolute',
  },
  illustrationText: {
    fontSize: 40,
  },
  illustrationCircle: {
    backgroundColor: '#9370DB',
    marginLeft: -30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
    marginBottom: 12,
  },
  settingsContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  settingIconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B6F4E',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B1B1B',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    color: '#666',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  textSizeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  sizeButton: {
    paddingHorizontal: 8,
  },
  sizeButtonSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1B6F4E',
  },
  sizeButtonMedium: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B6F4E',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1B6F4E',
    backgroundColor: 'white',
  },
  sizeButtonLarge: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B6F4E',
  },
  supportCard: {
    backgroundColor: '#F0F9F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#D0E8E3',
  },
  supportHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  supportTextContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  supportTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B6F4E',
    marginBottom: 2,
  },
  supportDescription: {
    fontSize: 12,
    color: '#666',
  },
  contactButton: {
    backgroundColor: '#1B6F4E',
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#CCC',
    marginTop: 4,
  },
  navLabelActive: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1B6F4E',
    marginTop: 4,
  },
});

export default AccessibilityScreen;



