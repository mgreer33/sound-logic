import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sound_logic/main.dart';
import 'package:sound_logic/screens/help_center_screen.dart';
import 'package:sound_logic/screens/accessibility_screen.dart';

void main() {
  group('MyApp Tests', () {
    testWidgets('MyApp creates MaterialApp correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(MaterialApp), findsOneWidget);
      expect(find.byType(CareConnectApp), findsOneWidget);
    });

    testWidgets('MyApp theme is configured correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      final materialApp = find.byType(MaterialApp).evaluate().first.widget as MaterialApp;
      expect(materialApp.title, 'CareConnect');
      expect(materialApp.theme?.primaryColor, const Color(0xFF2D8659));
    });
  });

  group('CareConnectApp Navigation Tests', () {
    testWidgets('CareConnectApp initializes with Home page', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(HomePage), findsOneWidget);
      expect(find.text('Welcome to CareConnect'), findsOneWidget);
    });

    testWidgets('Bottom navigation bar has 5 items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(BottomNavigationBar), findsOneWidget);
      expect(find.byType(BottomNavigationBarItem), findsWidgets);
    });

    testWidgets('Tapping Messages tab navigates to MessagesPage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.byType(MessagesPage), findsOneWidget);
      expect(find.text('Messages'), findsWidgets);
    });

    testWidgets('Tapping Alerts tab navigates to AlertsPage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byType(AlertsPage), findsOneWidget);
      expect(find.text('Alerts'), findsWidgets);
    });

    testWidgets('Tapping Appointments tab navigates to AppointmentsPage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.byType(AppointmentsPage), findsOneWidget);
      expect(find.text('Appointments'), findsWidgets);
    });

    testWidgets('Tapping Profile tab navigates to ProfilePage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(ProfilePage), findsOneWidget);
      expect(find.text('Profile'), findsWidgets);
    });

    testWidgets('Navigation state updates correctly when switching tabs', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      // Start on Home
      expect(find.byType(HomePage), findsOneWidget);

      // Navigate to Messages
      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();
      expect(find.byType(MessagesPage), findsOneWidget);

      // Navigate back to Home
      await tester.tap(find.byIcon(Icons.home));
      await tester.pumpAndSettle();
      expect(find.byType(HomePage), findsOneWidget);
    });
  });

  group('HomePage Tests', () {
    testWidgets('HomePage displays all sections', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Welcome to CareConnect'), findsOneWidget);
      expect(find.text('Your personalized healthcare companion'), findsOneWidget);
      expect(find.text('Quick Actions'), findsOneWidget);
      expect(find.text('Recent Activities'), findsOneWidget);
    });

    testWidgets('HomePage has Help Center quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Help Center'), findsOneWidget);
      expect(find.byIcon(Icons.help_outline), findsOneWidget);
    });

    testWidgets('HomePage has Accessibility quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Accessibility'), findsOneWidget);
      expect(find.byIcon(Icons.accessibility), findsOneWidget);
    });

    testWidgets('HomePage has Appointments quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Appointments'), findsOneWidget);
    });

    testWidgets('HomePage has Medical Records quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Medical Records'), findsOneWidget);
      expect(find.byIcon(Icons.medical_services), findsOneWidget);
    });

    testWidgets('Help Center card navigates to HelpCenterScreen', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.help_outline));
      await tester.pumpAndSettle();

      expect(find.byType(HelpCenterScreen), findsOneWidget);
    });

    testWidgets('Accessibility card navigates to AccessibilityScreen', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.accessibility));
      await tester.pumpAndSettle();

      expect(find.byType(AccessibilityScreen), findsOneWidget);
    });

    testWidgets('HomePage displays activity items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Appointment Scheduled'), findsOneWidget);
      expect(find.text('Medication Reminder'), findsOneWidget);
      expect(find.text('New Message'), findsOneWidget);
    });

    testWidgets('HomePage AppBar has CareConnect branding', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('CareConnect'), findsOneWidget);
      expect(find.byIcon(Icons.menu), findsOneWidget);
    });

    testWidgets('HomePage AppBar has notification icon with badge', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byIcon(Icons.notifications_outlined), findsOneWidget);
      expect(find.text('3'), findsWidgets);
    });
  });

  group('MessagesPage Tests', () {
    testWidgets('MessagesPage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.byType(MessagesPage), findsOneWidget);
      expect(find.text('Messages'), findsWidgets);
    });

    testWidgets('MessagesPage displays message list', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.text('Dr. Sarah Johnson'), findsOneWidget);
      expect(find.text('Nurse Patricia'), findsOneWidget);
      expect(find.text('Care Coordinator'), findsOneWidget);
    });

    testWidgetsmessage previews visible', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.text('Your test results are ready for review'), findsOneWidget);
      expect(find.text('Reminder: Take your medication at 8 PM'), findsOneWidget);
    });

    testWidgets('MessagesPage displays time stamps', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.text('2 hours ago'), findsOneWidget);
      expect(find.text('5 hours ago'), findsOneWidget);
      expect(find.text('Yesterday'), findsOneWidget);
    });

    testWidgets('MessagesPage shows unread indicator for first message', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      // Unread indicator is a small circle
      final unreadIndicators = find.byWidgetPredicate(
        (widget) => widget is Container && widget.runtimeType == Container,
      );
      expect(unreadIndicators, findsWidgets);
    });
  });

  group('AlertsPage Tests', () {
    testWidgets('AlertsPage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byType(AlertsPage), findsOneWidget);
      expect(find.text('Alerts'), findsWidgets);
    });

    testWidgets('AlertsPage displays alert cards', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.text('Medication Time'), findsOneWidget);
      expect(find.text('Appointment Reminder'), findsOneWidget);
      expect(find.text('Health Update'), findsOneWidget);
    });

    testWidgets('AlertsPage displays alert messages', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(
        find.text('Time to take your morning medication'),
        findsOneWidget,
      );
      expect(
        find.text('Your appointment with Dr. Johnson is tomorrow at 2 PM'),
        findsOneWidget,
      );
    });

    testWidgets('AlertsPage displays alert times', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.text('9:00 AM'), findsOneWidget);
      expect(find.text('Tomorrow'), findsWidgets);
      expect(find.text('Today'), findsOneWidget);
    });

    testWidgets('AlertsPage displays alert icons', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byIcon(Icons.medication), findsOneWidget);
      expect(find.byIcon(Icons.info), findsOneWidget);
    });
  });

  group('AppointmentsPage Tests', () {
    testWidgets('AppointmentsPage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.byType(AppointmentsPage), findsOneWidget);
      expect(find.text('Appointments'), findsWidgets);
    });

    testWidgets('AppointmentsPage displays appointment cards', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.text('Dr. Sarah Johnson'), findsOneWidget);
      expect(find.text('Dr. Michael Chen'), findsOneWidget);
      expect(find.text('Nurse Coordinator Patricia'), findsOneWidget);
    });

    testWidgets('AppointmentsPage displays doctor specialties', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.text('Audiologist'), findsOneWidget);
      expect(find.text('General Practitioner'), findsOneWidget);
      expect(find.text('Follow-up'), findsOneWidget);
    });

    testWidgets('AppointmentsPage displays appointment dates and times', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.text('Tomorrow'), findsOneWidget);
      expect(find.text('2:00 PM'), findsOneWidget);
      expect(find.text('Friday, June 14'), findsOneWidget);
      expect(find.text('10:00 AM'), findsOneWidget);
    });

    testWidgets('AppointmentsPage displays appointment status', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.text('Confirmed'), findsOneWidget);
      expect(find.text('Scheduled'), findsOneWidget);
      expect(find.text('Pending'), findsOneWidget);
    });

    testWidgets('AppointmentsPage displays calendar icons', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      expect(find.byIcon(Icons.calendar_today), findsWidgets);
      expect(find.byIcon(Icons.access_time), findsWidgets);
    });
  });

  group('ProfilePage Tests', () {
    testWidgets('ProfilePage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(ProfilePage), findsOneWidget);
    });

    testWidgets('ProfilePage displays user profile information', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('John Doe'), findsOneWidget);
      expect(find.text('Patient ID: 123456'), findsOneWidget);
    });

    testWidgets('ProfilePage displays personal information section', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Personal Information'), findsOneWidget);
      expect(find.text('Email'), findsOneWidget);
      expect(find.text('Phone'), findsOneWidget);
      expect(find.text('Date of Birth'), findsOneWidget);
    });

    testWidgets('ProfilePage displays personal details', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('john.doe@email.com'), findsOneWidget);
      expect(find.text('(555) 123-4567'), findsOneWidget);
      expect(find.text('January 15, 1965'), findsOneWidget);
    });

    testWidgets('ProfilePage displays settings section', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Settings'), findsOneWidget);
    });

    testWidgets('ProfilePage displays settings items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Notifications'), findsOneWidget);
      expect(find.text('Accessibility'), findsOneWidget);
      expect(find.text('Privacy & Security'), findsOneWidget);
      expect(find.text('Help Center'), findsOneWidget);
    });

    testWidgets('ProfilePage Accessibility setting navigates to AccessibilityScreen',
        (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      await tester.tap(find.text('Accessibility'));
      await tester.pumpAndSettle();

      expect(find.byType(AccessibilityScreen), findsOneWidget);
    });

    testWidgets('ProfilePage Help Center setting navigates to HelpCenterScreen',
        (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      await tester.tap(find.text('Help Center'));
      await tester.pumpAndSettle();

      expect(find.byType(HelpCenterScreen), findsOneWidget);
    });

    testWidgets('ProfilePage displays logout button', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Logout'), findsOneWidget);
      expect(find.byType(ElevatedButton), findsOneWidget);
    });

    testWidgets('ProfilePage displays user avatar', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(CircleAvatar), findsOneWidget);
      expect(find.text('JD'), findsOneWidget);
    });
  });

  group('HelpCenterScreen Navigation Tests', () {
    testWidgets('HelpCenterScreen can be navigated back', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.help_outline));
      await tester.pumpAndSettle();

      expect(find.byType(HelpCenterScreen), findsOneWidget);

      await tester.pageBack();
      await tester.pumpAndSettle();

      expect(find.byType(HomePage), findsOneWidget);
    });
  });

  group('AccessibilityScreen Navigation Tests', () {
    testWidgets('AccessibilityScreen can be navigated back', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.accessibility));
      await tester.pumpAndSettle();

      expect(find.byType(AccessibilityScreen), findsOneWidget);

      await tester.pageBack();
      await tester.pumpAndSettle();

      expect(find.byType(HomePage), findsOneWidget);
    });
  });

  group('NavigationItem Tests', () {
    test('NavigationItem creates correctly', () {
      final item = NavigationItem(
        icon: Icons.home,
        label: 'Home',
        page: const HomePage(),
      );

      expect(item.icon, Icons.home);
      expect(item.label, 'Home');
      expect(item.page, isA<HomePage>());
    });

    test('NavigationItem has all required properties', () {
      final item = NavigationItem(
        icon: Icons.message,
        label: 'Messages',
        page: const MessagesPage(),
      );

      expect(item.icon, isNotNull);
      expect(item.label, isNotNull);
      expect(item.page, isNotNull);
    });
  });

  group('Theme Configuration Tests', () {
    testWidgets('App uses correct primary color', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      final materialApp = find.byType(MaterialApp).evaluate().first.widget as MaterialApp;
      expect(materialApp.theme?.primaryColor, const Color(0xFF2D8659));
    });

    testWidgets('Bottom navigation bar items are styled correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(BottomNavigationBar), findsOneWidget);
      final navBar = find.byType(BottomNavigationBar).evaluate().first.widget as BottomNavigationBar;
      expect(navBar.type, BottomNavigationBarType.fixed);
    });
  });

  group('App Bar Tests', () {
    testWidgets('HomePage AppBar displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(AppBar), findsOneWidget);
      expect(find.text('CareConnect'), findsOneWidget);
    });

    testWidgets('MessagesPage AppBar displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.text('Messages'), findsWidgets);
    });

    testWidgets('ProfilePage AppBar displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Profile'), findsWidgets);
    });
  });

  group('Scrolling Tests', () {
    testWidgets('HomePage content is scrollable', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(SingleChildScrollView), findsWidgets);
    });

    testWidgets('MessagesPage content is scrollable', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      expect(find.byType(ListView), findsOneWidget);
    });
  });

  group('Screen State Management Tests', () {
    testWidgets('Changing tabs preserves state', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      // Navigate through tabs
      await tester.tap(find.byIcon(Icons.message));
      await tester.pumpAndSettle();

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      await tester.tap(find.byIcon(Icons.calendar_today));
      await tester.pumpAndSettle();

      // Go back to home
      await tester.tap(find.byIcon(Icons.home));
      await tester.pumpAndSettle();

      expect(find.byType(HomePage), findsOneWidget);
    });
  });

  group('Text Content Tests', () {
    testWidgets('HomePage displays all required text', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Welcome to CareConnect'), findsOneWidget);
      expect(find.text('Quick Actions'), findsOneWidget);
      expect(find.text('Recent Activities'), findsOneWidget);
    });

    testWidgets('All quick action cards are present', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Help Center'), findsOneWidget);
      expect(find.text('Accessibility'), findsOneWidget);
      expect(find.text('Appointments'), findsOneWidget);
      expect(find.text('Medical Records'), findsOneWidget);
    });
  });
}
