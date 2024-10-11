import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { z } from 'zod';

import { useUserStore } from '../store/useUserStore';
import RightCircleSvg from './atoms/Icons/RightCircle';

import { Text, TextInput } from '~/components/atoms';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

type FormData = z.infer<typeof schema>;

export default function UserNameForm() {
  const router = useRouter();
  const { firstName, lastName, setFirstName, setLastName } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      firstName,
      lastName,
    },
  });

  useEffect(() => {
    setValue('firstName', firstName);
    setValue('lastName', lastName);
  }, [firstName, lastName, setValue]);

  const onSubmit = (data: FormData) => {
    try {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      router.push('/notifications');
    } catch (error) {
      console.error('Error submitting form:', error);
      //TODO:  may be log this to sentry or something similar
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className=" flex-1 bg-white">
      <ScrollView className="flex-1 px-4 ">
        <Text variant="bold" className=" mb-2 text-3xl font-extrabold ">
          Your legal name
        </Text>

        <Text className="text-gray-600 mb-6">
          We need to know a bit about you so that we can create your account.
        </Text>
        <View className=" flex gap-6">
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <View>
                <Text>First name</Text>
                <TextInput
                  size="lg"
                  placeholder="Enter your first name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {error && <Text className="mt-1 text-red-500">{error.message}</Text>}
              </View>
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <View className="mb-4">
                <Text>Last name</Text>
                <TextInput
                  size="lg"
                  className="text-xl"
                  placeholder="Enter your last name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {error && <Text className="mt-1 text-error">{error.message}</Text>}
              </View>
            )}
          />
        </View>
      </ScrollView>

      <View className="mb-20 items-end p-4">
        <TouchableOpacity
          className="h-20 w-20 items-center justify-center"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
          style={{ opacity: isValid ? 1 : 0.4 }} // Add this line
        >
          <RightCircleSvg />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
