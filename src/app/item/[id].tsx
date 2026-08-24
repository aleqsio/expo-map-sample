import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function ItemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const next = Number(id ?? 0) + 1;
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">Item #{id}</ThemedText>
        <ThemedText type="small">A sample detail screen reached with a route param.</ThemedText>

        <ThemedView type="backgroundElement" style={styles.card}>
          <HintRow title="Route" hint={<ThemedText type="code">/item/[id]</ThemedText>} />
          <HintRow title="Param" hint={<ThemedText type="code">id = {id}</ThemedText>} />
          <Link href={`/item/${next}`}>
            <HintRow title="Next item" hint={<ThemedText type="small">open item #{next}</ThemedText>} />
          </Link>
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
  card: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
    marginTop: Spacing.three,
  },
});
