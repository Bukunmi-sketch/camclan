import {
    CallControls,
    CallingState,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
    useCallStateHooks,
  } from '@stream-io/video-react-sdk';
  
  import '@stream-io/video-react-sdk/dist/css/styles.css';
  import '../css/video.css';
  
  const apiKey = 'mmhfdzb5evj2';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUjItRDIiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1IyLUQyIiwiaWF0IjoxNzA0NzUzMjk3LCJleHAiOjE3MDUzNTgxMDJ9.K7_7-Ma95BtA_LfawUNK4yD0z7X9PW3SDvl5mf7iHcA';
  const userId = "R2-D2";
  const callId = "7ZhAXhG5GTni";
  
  const user = {
    id: userId,
    name: 'Bucxtech',
    image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
  };
  
  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);
  call.join({ create: true });


  
  export default function Videoo() {
    return (
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyUILayout />
        </StreamCall>
      </StreamVideo>
    );
  }
  
  export const MyUILayout = () => {
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

  
    if (callingState !== CallingState.JOINED) {
      return <div>Loading...</div>;
    }
  
    return (
      <StreamTheme>
        <SpeakerLayout participantsBarPosition='bottom' />
        <CallControls  />
      </StreamTheme>
    );
  };
  