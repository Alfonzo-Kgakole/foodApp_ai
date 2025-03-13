import { Stack } from "expo-router";
import { useFonts } from 'expo-font'

export default function RootLayout() {
  
const [ loaded, error ] = useFonts({
  'outfit-r': require("./../assets/fonts/Outfit-Regular.ttf"),
  'outfit-b': require("./../assets/fonts/Outfit-Bold.ttf")
})

  return (
    <Stack>
      <Stack.Screen 
        name='Landing' 
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}
