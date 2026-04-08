import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { theme } from '../../constants/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 18,
          color: theme.colors.textPrimary,
        },
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="cardapio"
        options={{
          title: 'Cardápio',
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
          headerTitle: 'FIAP Cantina',
          headerRight: () => null,
        }}
      />
      <Tabs.Screen
        name="pedidos"
        options={{
          title: 'Meus Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
