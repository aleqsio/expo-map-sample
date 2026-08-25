import { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [haptics, setHaptics] = useState(false);
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="code" style={styles.sectionLabel}>
          general
        </ThemedText>
        <ThemedView type="backgroundElement" style={styles.card}>
          <HintRow
            title="Notifications"
            hint={<Switch value={notifications} onValueChange={setNotifications} />}
          />
          <HintRow
            title="Haptics"
            hint={<Switch value={haptics} onValueChange={setHaptics} />}
          />
          <HintRow title="Appearance" hint={<ThemedText type="small">System</ThemedText>} />
        </ThemedView>
        <ThemedText type="code" style={styles.sectionLabel}>
          about
        </ThemedText>
        <ThemedView type="backgroundElement" style={styles.card}>
          <HintRow title="Version" hint={<ThemedText type="code">1.1.0</ThemedText>} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.six,
    gap: Spacing.three,
  },
  sectionLabel: {
    textTransform: 'uppercase',
    opacity: 0.6,
  },
  card: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
