import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from 'native-base';

import * as AuthCommands from '../../commands/auth';
import * as FirestoreCommands from '../../commands/firestore';

const logout = async () => {
  FirestoreCommands.stopWatchingFirestore();
  await AuthCommands.logout();
};

const sidebar = () => (
  <View style={{ padding: 40 }}>
    <Button block light onPress={logout}>
      <Icon type="MaterialCommunityIcons" name="logout" />
      <Text>Logout</Text>
    </Button>
  </View>
);

export default sidebar;
