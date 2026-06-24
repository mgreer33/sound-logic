import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const HelpCenterScreen: React.FC = () => {
  const handleContactPress = () => {
    // Handle contact support action
  };

  const handleTopicPress = (topic: string) => {
    // Handle topic navigation
  };

  const renderTopicCard = (
    icon: React.ReactNode,
    title: string,
    description: string,
  ) => (
    <TouchableOpacity
      style={styles.topicCard}
      onPress={() => handleTopicPress(title)}
      accessibilityLabel={`${title}. ${description}`}
      accessibilityRole="button"
    >
      <View style={styles.topicIcon} accessible={false}>{icon}</View>
      <Text style={styles.topicTitle} accessible={false}>{title}</Text>
      <Text style={styles.topicDescription} accessible={false}>{description}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color="#1B6F4E"
        style={styles.chevron}
        accessible={false}
      />
    </TouchableOpacity>
  );

  const renderFeaturedArticle = (
    image: string,
    title: string,
    readTime: string,
  ) => (
    <TouchableOpacity
      style={styles.featuredArticle}
      accessibilityLabel={`${title}. ${readTime}`}
      accessibilityRole="button"
    >
      <View
        style={[styles.articleImage, { backgroundColor: '#F0F0F0' }]}
        accessible={false}
      >
        <Text style={styles.articlePlaceholder} accessible={false}>{image}</Text>
      </View>
      <Text style={styles.articleTitle} accessible={false}>{title}</Text>
      <Text style={styles.readTime} accessible={false}>{readTime}</Text>
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
        <Text style={styles.headerTitle} accessibilityRole="header">CC CareConnect</Text>
        <TouchableOpacity
          style={styles.notificationBadge}
          accessibilityLabel="3 unread notifications"
          accessibilityRole="button"
        >
          <Ionicons name="notifications" size={24} color="#1B6F4E" accessible={false} />
          <View style={styles.badge} accessible={false}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Help Center Title */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Help Center</Text>
          <Text style={styles.subtitle}>
            Find answers and get the support you need.
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
            accessible={false}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="How can we help you?"
            placeholderTextColor="#999"
            accessibilityLabel="Search help center"
            accessibilityRole="search"
          />
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinksContainer}>
          <TouchableOpacity
            style={styles.quickLink}
            accessibilityLabel="FAQs"
            accessibilityRole="button"
          >
            <View style={[styles.quickLinkIcon, { backgroundColor: '#E8F4F1' }]} accessible={false}>
              <MaterialCommunityIcons name="file-document" size={24} color="#1B6F4E" accessible={false} />
            </View>
            <Text style={styles.quickLinkText} accessible={false}>FAQs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickLink}
            accessibilityLabel="Video Guides"
            accessibilityRole="button"
          >
            <View style={[styles.quickLinkIcon, { backgroundColor: '#F0E8F4' }]} accessible={false}>
              <MaterialCommunityIcons name="play-circle" size={24} color="#7C3AED" accessible={false} />
            </View>
            <Text style={styles.quickLinkText} accessible={false}>Video Guides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickLink}
            accessibilityLabel="User Guides"
            accessibilityRole="button"
          >
            <View style={[styles.quickLinkIcon, { backgroundColor: '#E8F0F4' }]} accessible={false}>
              <MaterialCommunityIcons name="book-open" size={24} color="#3B82F6" accessible={false} />
            </View>
            <Text style={styles.quickLinkText} accessible={false}>User Guides</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickLink}
            accessibilityLabel="Tips and Tricks"
            accessibilityRole="button"
          >
            <View style={[styles.quickLinkIcon, { backgroundColor: '#FFF8E8' }]} accessible={false}>
              <MaterialCommunityIcons name="lightbulb" size={24} color="#F59E0B" accessible={false} />
            </View>
            <Text style={styles.quickLinkText} accessible={false}>Tips & Tricks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickLink}
            accessibilityLabel="Contact Support"
            accessibilityRole="button"
          >
            <View style={[styles.quickLinkIcon, { backgroundColor: '#E8F4F1' }]} accessible={false}>
              <MaterialCommunityIcons name="comment-multiple" size={24} color="#1B6F4E" accessible={false} />
            </View>
            <Text style={styles.quickLinkText} accessible={false}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Topics */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Topics</Text>
          <TouchableOpacity
            accessibilityLabel="View all popular topics"
            accessibilityRole="button"
          >
            <Text style={styles.viewAll} accessible={false}>
              View all <MaterialCommunityIcons name="chevron-right" size={16} accessible={false} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topicsContainer}>
          {renderTopicCard(
            <MaterialCommunityIcons
              name="calendar-check"
              size={28}
              color="#1B6F4E"
            />,
            'Managing Appointments',
            'Schedule, reschedule, or cancel your visits',
          )}
          {renderTopicCard(
            <Ionicons name="notifications" size={28} color="#1B6F4E" />,
            'Alerts & Notifications',
            'Manage your alerts and reminders',
          )}
          {renderTopicCard(
            <MaterialCommunityIcons
              name="comment-multiple"
              size={28}
              color="#1B6F4E"
            />,
            'Messaging',
            'Send and receive messages with caregivers',
          )}
          {renderTopicCard(
            <MaterialCommunityIcons
              name="account-circle"
              size={28}
              color="#1B6F4E"
            />,
            'Account & Profile',
            'Update your information and preferences',
          )}
        </View>

        {/* Still Need Help */}
        <View style={styles.supportCard}>
          <View style={styles.supportCardHeader}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={32}
              color="#1B6F4E"
              accessible={false}
            />
            <View style={styles.supportTextContainer}>
              <Text style={styles.supportTitle}>Still need help?</Text>
              <Text style={styles.supportDescription}>
                Our support team is here for you.
              </Text>
            </View>
          </View>

          <View style={styles.contactInfo}>
            <View
              style={styles.contactItem}
              accessible={true}
              accessibilityLabel="Call us: (512) 555-CARE (2273)"
            >
              <MaterialCommunityIcons
                name="phone"
                size={18}
                color="#1B6F4E"
                accessible={false}
              />
              <Text style={styles.contactText} accessible={false}>
                Call us: (512) 555-CARE (2273)
              </Text>
            </View>
            <View
              style={styles.contactItem}
              accessible={true}
              accessibilityLabel="Email us: support@careconnect.com"
            >
              <MaterialCommunityIcons name="email" size={18} color="#1B6F4E" accessible={false} />
              <Text style={styles.contactText} accessible={false}>
                Email us: support@careconnect.com
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.chatButton}
            onPress={handleContactPress}
            accessibilityLabel="Chat with Us"
            accessibilityRole="button"
          >
            <MaterialCommunityIcons
              name="comment-multiple"
              size={18}
              color="white"
              accessible={false}
            />
            <Text style={styles.chatButtonText} accessible={false}>Chat with Us</Text>
          </TouchableOpacity>
          <Text style={styles.hoursText}>Hours: Mon-Fri, 8am-8pm CT</Text>
        </View>

        {/* Featured Articles */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Articles</Text>
        </View>

        <View style={styles.featuredArticlesContainer}>
          {renderFeaturedArticle('👩‍💼', 'How to set up notifications', '3 min read')}
          {renderFeaturedArticle(
            '📱',
            'Joining a video appointment',
            '4 min read',
          )}
          {renderFeaturedArticle(
            '🎧',
            'Managing your hearing devices',
            '5 min read',
          )}
        </View>

        {/* Bottom Padding */}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav} accessibilityRole="tabbar">
        <TouchableOpacity
          style={styles.navItem}
          accessibilityLabel="Home"
          accessibilityRole="tab"
          accessibilityState={{ selected: true }}
        >
          <Ionicons name="home" size={24} color="#1B6F4E" accessible={false} />
          <Text style={styles.navLabel} accessible={false}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          accessibilityLabel="Messages"
          accessibilityRole="tab"
          accessibilityState={{ selected: false }}
        >
          <MaterialCommunityIcons name="comment-multiple" size={24} color="#CCC" accessible={false} />
          <Text style={styles.navLabelInactive} accessible={false}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          accessibilityLabel="Alerts"
          accessibilityRole="tab"
          accessibilityState={{ selected: false }}
        >
          <Ionicons name="notifications" size={24} color="#CCC" accessible={false} />
          <Text style={styles.navLabelInactive} accessible={false}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          accessibilityLabel="Appointments"
          accessibilityRole="tab"
          accessibilityState={{ selected: false }}
        >
          <MaterialCommunityIcons name="calendar" size={24} color="#CCC" accessible={false} />
          <Text style={styles.navLabelInactive} accessible={false}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          accessibilityLabel="Profile"
          accessibilityRole="tab"
          accessibilityState={{ selected: false }}
        >
          <MaterialCommunityIcons name="account-circle" size={24} color="#CCC" accessible={false} />
          <Text style={styles.navLabelInactive} accessible={false}>Profile</Text>
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
    marginTop: 24,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1B6F4E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  quickLink: {
    alignItems: 'center',
    width: '18%',
    marginBottom: 12,
  },
  quickLinkIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickLinkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B6F4E',
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B6F4E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicsContainer: {
    marginBottom: 24,
  },
  topicCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  topicIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  topicTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#1B1B1B',
  },
  topicDescription: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  chevron: {
    marginLeft: 8,
  },
  supportCard: {
    backgroundColor: '#F0F9F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#D0E8E3',
  },
  supportCardHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  supportTextContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B6F4E',
    marginBottom: 2,
  },
  supportDescription: {
    fontSize: 13,
    color: '#666',
  },
  contactInfo: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 8,
  },
  chatButton: {
    backgroundColor: '#1B6F4E',
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  hoursText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  featuredArticlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  featuredArticle: {
    width: '30%',
  },
  articleImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  articlePlaceholder: {
    fontSize: 32,
  },
  articleTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B1B1B',
    marginBottom: 4,
  },
  readTime: {
    fontSize: 11,
    color: '#999',
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
    color: '#1B6F4E',
    marginTop: 4,
  },
  navLabelInactive: {
    fontSize: 11,
    fontWeight: '600',
    color: '#CCC',
    marginTop: 4,
  },
});

export default HelpCenterScreen;
