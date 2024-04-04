const redirectUrl = process.env.EXPO_PUBLIC_REDIRECT_URL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const lightId = process.env.EXPO_PUBLIC_LIGHT_ID;
export type SetIsOnType = React.Dispatch<React.SetStateAction<boolean>>;

const toggleLightFlash = (setIsOn: SetIsOnType) => {
  setIsOn((prevIsOn) => {
    fetch(`${redirectUrl}/clip/v2/resource/light/${lightId}`, {
      method: 'PUT',
      headers: {
        'hue-application-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ on: { on: !prevIsOn } }),
    });
    return !prevIsOn;
  });
};

export const alertCameron = (setIsOn: SetIsOnType) => {
  let i = 1;
  const intervalId = setInterval(() => {
    toggleLightFlash(setIsOn);
    i++;
    if (i === 7) {
      clearInterval(intervalId);
    }
  }, 1500);
};
