import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

export default function Layout() {
  //TODO handling fonts
  useFonts({
    Rubik: require('./../assets/fonts/Rubik-Regular.ttf'),
    Roboto: require('./../assets/fonts/Roboto-Regular.ttf'),
    Raleway: require('./../assets/fonts/Raleway-Regular.ttf'),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
