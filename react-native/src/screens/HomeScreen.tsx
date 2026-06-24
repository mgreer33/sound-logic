import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface HomeScreenProps {
  onNavigate?: (screen: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigation = (screen: string) => {
    setActiveTab(screen);
    onNavigate?.(screen);
  };

  const renderQuickActionCard = (
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    badge?: number,
    badgeColor?: string,
  ) => (
    <TouchableOpacity
      style={styles.quickActionCard}
      accessibilityLabel={`${title}. ${subtitle}`}
      accessibilityRole="button"
    >
      <View
        style={[
          styles.quickActionIconContainer,
          { backgroundColor: badgeColor || '#E8F4F1' },
        ]}
        accessible={false}
      >
        {icon}
        {badge !== undefined && (
          <View
            style={[
              styles.quickActionBadge,
              { backgroundColor: badgeColor === '#F0E8F4' ? '#7C3AED' : '#1B6F4E' },
            ]}
            accessible={false}
          >
            <Text style={styles.badgeTextSmall} accessible={false}>{badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.quickActionTitle} accessible={false}>{title}</Text>
      <Text style={styles.quickActionSubtitle} accessible={false}>{subtitle}</Text>
    </TouchableOpacity>
  );

  const renderFeatureCard = (
    icon: React.ReactNode,
    title: string,
    description: string,
    bgColor: string,
  ) => (
    <TouchableOpacity
      style={styles.featureCard}
      accessibilityLabel={`${title}. ${description}`}
      accessibilityRole="button"
    >
      <View style={[styles.featureIconContainer, { backgroundColor: bgColor }]} accessible={false}>
        {icon}
      </View>
      <Text style={styles.featureTitle} accessible={false}>{title}</Text>
      <Text style={styles.featureDescription} accessible={false}>{description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          accessibilityLabel="Open navigation menu"
          accessibilityRole="button"
        >
          <MaterialCommunityIcons name="menu" size={28} color="#1B6F4E" accessible={false} />
        </TouchableOpacity>
        <View style={styles.headerCenter} accessible={false}>
          <MaterialCommunityIcons
            name="check-circle"
            size={24}
            color="#1B6F4E"
            accessible={false}
          />
          <Text style={styles.headerTitle} accessibilityRole="header">CareConnect</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationIcon}
          accessibilityLabel="3 unread notifications"
          accessibilityRole="button"
        >
          <Ionicons name="notifications" size={24} color="#1B6F4E" accessible={false} />
          <View style={styles.headerBadge} accessible={false}>
            <Text style={styles.headerBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Greeting */}
        <View style={styles.greetingSection}>
          <View style={styles.greetingContainer}>
            <View style={styles.avatarContainer}>
              <View
                style={styles.avatar}
                accessible={true}
                accessibilityLabel="Sarah's profile picture"
              >
                <Text style={styles.avatarText} accessible={false}>S</Text>
              </View>
              <TouchableOpacity
                style={styles.editButton}
                accessibilityLabel="Edit profile"
                accessibilityRole="button"
              >
                <MaterialCommunityIcons name="pencil" size={14} color="white" accessible={false} />
              </TouchableOpacity>
            </View>
            <View style={styles.greetingText}>
              <Text style={styles.greetingTitle}>Hello, Sarah!</Text>
              <Text style={styles.greetingSubtitle}>Welcome back. You have</Text>
              <View
                style={styles.alertsMessagesRow}
                accessible={true}
                accessibilityLabel="3 new alerts and 2 new messages"
              >
                <Text style={styles.alertsText} accessible={false}>
                  <Text style={styles.alertsNumber}>3 new alerts</Text>
                </Text>
                <Text style={styles.andText} accessible={false}> and </Text>
                <Text style={styles.messagesText} accessible={false}>
                  <Text style={styles.messagesNumber}>2 new messages</Text>
                </Text>
                <Text style={styles.periodText} accessible={false}>.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Today's Overview */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewHeader}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="#1B6F4E"
              style={styles.overviewIcon}
              accessible={false}
            />
            <Text style={styles.overviewTitle} accessibilityRole="header">Today's Overview</Text>
          </View>

          <View style={styles.overviewCardsContainer}>
            {renderQuickActionCard(
              <Ionicons name="notifications" size={32} color="#1B6F4E" />,
              'Alerts',
              '3 new',
              3,
              '#E8F4F1',
            )}
            {renderQuickActionCard(
              <MaterialCommunityIcons
                name="comment-multiple"
                size={32}
                color="#7C3AED"
              />,
              'Messages',
              '2 new',
              2,
              '#F0E8F4',
            )}
            {renderQuickActionCard(
              <MaterialCommunityIcons
                name="calendar"
                size={32}
                color="#1B6F4E"
              />,
              'Appointments',
              '1 upcoming',
            )}
          </View>
        </View>

        {/* Upcoming Appointment */}
        <View style={styles.appointmentSection}>
          <View style={styles.appointmentHeader}>
            <MaterialCommunityIcons
              name="calendar-check"
              size={20}
              color="#1B6F4E"
              accessible={false}
            />
            <Text style={styles.appointmentTitle} accessibilityRole="header">Upcoming Appointment</Text>
          </View>

          <View style={styles.appointmentCard}>
            <View style={styles.appointmentContent}>
              <Text style={styles.appointmentName}>Hearing Check-Up</Text>
              <View
                style={styles.appointmentDetail}
                accessible={true}
                accessibilityLabel="Date and time: May 15, 2025 at 10:00 AM"
              >
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={16}
                  color="#666"
                  accessible={false}
                />
                <Text style={styles.appointmentDetailText} accessible={false}>
                  May 15, 2025 • 10:00 AM
                </Text>
              </View>
              <View
                style={styles.appointmentDetail}
                accessible={true}
                accessibilityLabel="Location: Hearing Wellness Center"
              >
                <MaterialCommunityIcons name="map-marker" size={16} color="#666" accessible={false} />
                <Text style={styles.appointmentDetailText} accessible={false}>
                  Hearing Wellness Center
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              accessibilityLabel="View details for Hearing Check-Up appointment"
              accessibilityRole="button"
            >
              <Text style={styles.viewDetailsText} accessible={false}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feature Grid */}
        <View style={styles.featureGridSection}>
          <View style={styles.featureGridRow}>
            {renderFeatureCard(
              <MaterialCommunityIcons
                name="comment-multiple"
                size={36}
                color="#1B6F4E"
              />,
              'Messages',
              'Stay in touch',
              '#E8F4F1',
            )}
            {renderFeatureCard(
              <Ionicons name="notifications" size={36} color="#1B6F4E" />,
              'Alerts & Reminders',
              'View important alerts',
              '#E8F4F1',
            )}
            {renderFeatureCard(
              <MaterialCommunityIcons
                name="calendar"
                size={36}
                color="#1B6F4E"
              />,
              'Appointments',
              'Manage your visits',
              '#E8F4F1',
            )}
          </View>

          <View style={styles.featureGridRow}>
            {renderFeatureCard(
              <MaterialCommunityIcons
                name="headphones"
                size={36}
                color="#8B5CF6"
              />,
              'Hearing Support',
              'Tools & resources',
              '#F0E8F4',
            )}
            {renderFeatureCard(
              <Text style={styles.aaText}>AA</Text>,
              'Accessibility',
              'Customize your experience',
              '#E8F0F4',
            )}
            {renderFeatureCard(
              <MaterialCommunityIcons
                name="account-circle"
                size={36}
                color="#8B5CF6"
              />,
              'Profile',
              'Your information',
              '#F0E8F4',
            )}
          </View>
        </View>

        {/* Need Help Card */}
        <View
          style={styles.helpCard}
          accessible={true}
          accessibilityLabel="Need help? Contact your caregiver or access support resources."
          accessibilityRole="button"
        >
          <View style={styles.helpContent} accessible={false}>
            <MaterialCommunityIcons
              name="heart-multiple"
              size={24}
              color="#1B6F4E"
              accessible={false}
            />
            <View style={styles.helpText}>
              <Text style={styles.helpTitle}>Need help?</Text>
              <Text style={styles.helpDescription}>
                Contact your caregiver or access support resources.
              </Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#1B6F4E" accessible={false} />
        </View>

        {/* Bottom Padding */}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav} accessibilityRole="tabbar">
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('home')}
          accessibilityLabel="Home"
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'home' }}
        >
          <Ionicons
            name="home"
            size={24}
            color={activeTab === 'home' ? '#1B6F4E' : '#CCC'}
            accessible={false}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === 'home' ? styles.navLabelActive : styles.navLabelInactive,
            ]}
            accessible={false}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('messages')}
          accessibilityLabel="Messages"
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'messages' }}
        >
          <MaterialCommunityIcons
            name="comment-multiple"
            size={24}
            color={activeTab === 'messages' ? '#1B6F4E' : '#CCC'}
            accessible={false}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === 'messages'
                ? styles.navLabelActive
                : styles.navLabelInactive,
            ]}
            accessible={false}
          >
            Messages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('alerts')}
          accessibilityLabel="Alerts"
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'alerts' }}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={activeTab === 'alerts' ? '#1B6F4E' : '#CCC'}
            accessible={false}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === 'alerts' ? styles.navLabelActive : styles.navLabelInactive,
            ]}
            accessible={false}
          >
            Alerts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('appointments')}
          accessibilityLabel="Appointments"
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'appointments' }}
        >
          <MaterialCommunityIcons
            name="calendar"
            size={24}
            color={activeTab === 'appointments' ? '#1B6F4E' : '#CCC'}
            accessible={false}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === 'appointments'
                ? styles.navLabelActive
                : styles.navLabelInactive,
            ]}
            accessible={false}
          >
            Appointments
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavigation('profile')}
          accessibilityLabel="Profile"
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'profile' }}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={24}
            color={activeTab === 'profile' ? '#1B6F4E' : '#CCC'}
            accessible={false}
          />
          <Text
            style={[
              styles.navLabel,
              activeTab === 'profile'
                ? styles.navLabelActive
                : styles.navLabelInactive,
            ]}
            accessible={false}
          >
            Profile
          </Text>
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
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B6F4E',
    marginLeft: 8,
  },
  notificationIcon: {
    position: 'relative',
  },
  headerBadge: {
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
  headerBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  greetingSection: {
    marginTop: 24,
    marginBottom: 28,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#9370DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  greetingText: {
    flex: 1,
    marginTop: 4,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B6F4E',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  alertsMessagesRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  alertsText: {
    fontSize: 14,
    color: '#666',
  },
  alertsNumber: {
    fontWeight: '600',
    color: '#1B6F4E',
  },
  andText: {
    fontSize: 14,
    color: '#666',
  },
  messagesText: {
    fontSize: 14,
    color: '#666',
  },
  messagesNumber: {
    fontWeight: '600',
    color: '#7C3AED',
  },
  periodText: {
    fontSize: 14,
    color: '#666',
  },
  overviewSection: {
    marginBottom: 24,
  },
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  overviewIcon: {
    marginRight: 8,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
  },
  overviewCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  quickActionCard: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  quickActionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  quickActionBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeTextSmall: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  quickActionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1B1B1B',
    marginBottom: 2,
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  appointmentSection: {
    marginBottom: 24,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
    marginLeft: 8,
  },
  appointmentCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  appointmentContent: {
    flex: 1,
  },
  appointmentName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1B1B',
    marginBottom: 8,
  },
  appointmentDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  appointmentDetailText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  viewDetailsButton: {
    borderWidth: 1.5,
    borderColor: '#1B6F4E',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 12,
  },
  viewDetailsText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1B6F4E',
  },
  featureGridSection: {
    marginBottom: 24,
  },
  featureGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  featureCard: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  aaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  featureTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1B1B1B',
    marginBottom: 2,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
  },
  helpCard: {
    backgroundColor: '#F0F9F7',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0E8E3',
    marginBottom: 24,
  },
  helpContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpText: {
    marginLeft: 12,
    flex: 1,
  },
  helpTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B6F4E',
    marginBottom: 2,
  },
  helpDescription: {
    fontSize: 13,
    color: '#666',
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
    marginTop: 4,
  },
  navLabelActive: {
    color: '#1B6F4E',
  },
  navLabelInactive: {
    color: '#CCC',
  },
});

export default HomeScreen;
