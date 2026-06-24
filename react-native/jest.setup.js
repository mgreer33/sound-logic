jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockIcon = (props) => React.createElement(View, props);
  return {
    Ionicons: MockIcon,
    MaterialCommunityIcons: MockIcon,
    FontAwesome5: MockIcon,
    AntDesign: MockIcon,
  };
});
