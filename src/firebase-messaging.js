import { message } from './firebase'; // Import the messaging instance from the firebase.js file

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await message.getToken();
      console.log('FCM token:', token);
      // You can store the token in your database or send it to your server for later use.
    } else {
      console.error('Permission denied');
    }
  } catch (error) {
    console.error('Error obtaining permission:', error);
  }
}
