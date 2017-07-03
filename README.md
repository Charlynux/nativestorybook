# nativestorybook
How to configure React Native + React Native Navigation + Storybook

React Native
[https://github.com/facebook/react-native](https://github.com/facebook/react-native)

React Native Navigation
[https://github.com/wix/react-native-navigation](https://github.com/wix/react-native-navigation)

Storybook
[https://github.com/storybooks/storybook](https://github.com/storybooks/storybook)

### Initial problem

When starting Storybook in an application using React Native and React Native Navigation, there is no error but you are locked on the Splash screen.

### Cause

Storybook relies on his own "registerComponent" to start.
Or, React Native Navigation changes the way, you register components. You must manually starting your application.

### Solution

Modify storybook/storybook.js to register StorybookUI component as a screen and starts an application with this single screen.