import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  firstName: string;
  lastName: string;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      firstName: '',
      lastName: '',
      setFirstName: (name) => set({ firstName: name }),
      setLastName: (name) => set({ lastName: name }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
