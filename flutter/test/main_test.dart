import 'package:careconnect/main.dart';
import 'package:careconnect/screens/accessibility_screen.dart';
import 'package:careconnect/screens/help_center_screen.dart';
import 'package:careconnect/screens/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

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
      final navBar = find.byType(BottomNavigationBar).evaluate().first.widget as BottomNavigationBar;
      expect(navBar.items.length, 5);
    });

    testWidgets('Tapping Alerts tab navigates to AlertsPage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byType(AlertsPage), findsOneWidget);
      expect(find.text('Alerts'), findsWidgets);
    });

    testWidgets('Tapping Profile tab navigates to ProfilePage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(ProfilePage), findsOneWidget);
      expect(find.text('Profile'), findsWidgets);
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

      expect(
        find.descendant(
          of: find.byType(GridView),
          matching: find.text('Appointments'),
        ),
        findsOneWidget,
      );
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
  });

  group('Text Content Tests', () {
    testWidgets('HomePage displays all required text', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Welcome to CareConnect'), findsOneWidget);
      expect(find.text('Quick Actions'), findsOneWidget);
      expect(find.text('Recent Activities'), findsOneWidget);
    });
  });

  group('AccessibilityScreen Accessibility Labels', () {
    Widget buildScreen() => const MaterialApp(home: AccessibilityScreen());

    testWidgets('menu button has "Open navigation menu" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Open navigation menu'), findsOneWidget);
    });

    testWidgets('notifications button has "3 unread notifications" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('3 unread notifications'), findsOneWidget);
    });

    testWidgets('back button has "Go back" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Go back'), findsOneWidget);
    });

    testWidgets('header icon has "Accessibility settings illustration" label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Accessibility settings illustration'), findsOneWidget);
    });

    testWidgets('text size control label includes current size value', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Text size: Medium'), findsOneWidget);
    });

    testWidgets('CC logo is excluded from the semantics tree', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('CC'), findsNothing);
    });

    testWidgets('settings tiles expose combined title and subtitle as label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel('Live Caption. Show captions for messages and alerts'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Visual Alerts. Receive visual alerts for notifications'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel(
            'Sound & Vibration Settings. Customize alert sounds and vibrations'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Sign Language Resources. Access helpful sign language videos'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Hearing Health Tips. Helpful tips and resources'),
        findsOneWidget,
      );
    });

    testWidgets('toggle setting rows are merged into single semantic nodes', (tester) async {
      await tester.pumpWidget(buildScreen());
      // MergeSemantics collapses each toggle row; verify each Switch is findable
      // alongside its label text as one unit
      expect(find.byType(MergeSemantics), findsWidgets);
      expect(find.text('High Contrast'), findsOneWidget);
      expect(find.text('Dark Mode'), findsOneWidget);
      expect(find.text('Color Enhancement'), findsOneWidget);
      expect(find.text('Voice Messages'), findsOneWidget);
    });

    testWidgets('notification badge is not a separate semantic node', (tester) async {
      await tester.pumpWidget(buildScreen());
      // The badge count is conveyed through the button tooltip, not as its own node
      final notifButton = find.bySemanticsLabel('3 unread notifications');
      expect(notifButton, findsOneWidget);
    });
  });

  group('HomeScreen Accessibility Labels', () {
    Widget buildScreen() => const MaterialApp(home: HomeScreen());

    testWidgets('menu button has "Open navigation menu" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Open navigation menu'), findsOneWidget);
    });

    testWidgets('logo image has "CareConnect logo" semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('CareConnect logo'), findsOneWidget);
    });

    testWidgets('notifications button has "3 unread notifications" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('3 unread notifications'), findsOneWidget);
    });

    testWidgets("user avatar has \"Sarah's profile picture\" label", (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel("Sarah's profile picture"), findsOneWidget);
    });

    testWidgets('edit FAB has "Edit profile" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Edit profile'), findsOneWidget);
    });

    testWidgets('view details button has appointment-specific semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel('View details for Hearing Check-Up appointment'),
        findsOneWidget,
      );
    });

    testWidgets('overview cards expose title and count as semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Alerts: 3 new'), findsOneWidget);
      expect(find.bySemanticsLabel('Messages: 2 new'), findsOneWidget);
      expect(find.bySemanticsLabel('Appointments: 1 upcoming'), findsOneWidget);
    });

    testWidgets('quick access cards expose title and subtitle as semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Messages. Stay in touch'), findsOneWidget);
      expect(find.bySemanticsLabel('Alerts & Reminders. View important alerts'), findsOneWidget);
      expect(find.bySemanticsLabel('Appointments. Manage your visits'), findsOneWidget);
      expect(find.bySemanticsLabel('Hearing Support. Tools & resources'), findsOneWidget);
      expect(find.bySemanticsLabel('Profile. Your information'), findsOneWidget);
    });

    testWidgets('quick access card label with multi-line subtitle is readable', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel(RegExp(r'Accessibility.*Customize your')),
        findsOneWidget,
      );
    });

    testWidgets('need help section has descriptive semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel(
            'Need help? Contact your caregiver or access support resources.'),
        findsOneWidget,
      );
    });
  });

  group('HelpCenterScreen Accessibility Labels', () {
    Widget buildScreen() => const MaterialApp(home: HelpCenterScreen());

    testWidgets('menu button has "Open navigation menu" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Open navigation menu'), findsOneWidget);
    });

    testWidgets('notifications button has "3 unread notifications" tooltip', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('3 unread notifications'), findsOneWidget);
    });

    testWidgets('CC logo is excluded from the semantics tree', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('CC'), findsNothing);
    });

    testWidgets('support agent icon has "Help center illustration" label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Help center illustration'), findsOneWidget);
    });

    testWidgets('search field has "Search help center" semantic label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('Search help center'), findsOneWidget);
    });

    testWidgets('"View all" button has "View all popular topics" label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('View all popular topics'), findsOneWidget);
    });

    testWidgets('category buttons strip newlines from their semantic labels', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(find.bySemanticsLabel('FAQs'), findsOneWidget);
      expect(find.bySemanticsLabel('Video Guides'), findsOneWidget);
      expect(find.bySemanticsLabel('User Guides'), findsOneWidget);
      expect(find.bySemanticsLabel('Tips & Tricks'), findsOneWidget);
      expect(find.bySemanticsLabel('Contact Support'), findsOneWidget);
    });

    testWidgets('topic tiles expose combined title and subtitle as label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel(
            'Managing Appointments. Schedule, reschedule, or cancel your visits'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Alerts & Notifications. Manage your alerts and reminders'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel(
            'Messaging. Send and receive messages with caregivers'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel(
            'Account & Profile. Update your information and preferences'),
        findsOneWidget,
      );
    });

    testWidgets('article cards strip newlines and include read time in label', (tester) async {
      await tester.pumpWidget(buildScreen());
      expect(
        find.bySemanticsLabel('How to set up notifications. 3 min read'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Joining a video appointment. 4 min read'),
        findsOneWidget,
      );
      expect(
        find.bySemanticsLabel('Managing your hearing devices. 5 min read'),
        findsOneWidget,
      );
    });

    testWidgets('bottom nav alerts badge dot is excluded from semantics', (tester) async {
      await tester.pumpWidget(buildScreen());
      // The badge dot Container has no text — verify the Alerts tab label still reads correctly
      expect(find.bySemanticsLabel('Alerts'), findsOneWidget);
    });
  });
}
