import { CallingState, StreamCall, StreamTheme, useCall, useCallStateHooks, User, SpeakerLayout, CallControls } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import '../css/video.css';

const apiKey = 'dvzsgb9xg89a';
const token = '1536363';
const userId = 1;
const callId = 1;

const user: User = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

export const MyUILayout = () => {
  const callInstance = useCall(); // Corrected the usage of useCall()

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme style={{ position: 'relative' }}>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};

export default function Video() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}



  export const MyParticipantList = (props: { participants: StreamVideoParticipant[] }) => {
    const { participants } = props;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        {participants.map((participant) => (
            <div style={{width:"100%", aspectRatio:"3/2"}}>
          <ParticipantView muteAudio participant={participant} key={participant.sessionId} />
          </div>
        ))}
      </div>
    );

    export const MyFloatingLocalParticipant = (props: { participant?: StreamVideoParticipant }) => {
        const { participant } = props;
        return (
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              width: '240px',
              height: '135px',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 3px',
              borderRadius: '12px',
            }}
          >
           {participant && <ParticipantView participant={participant} key={participant.sessionId} />};
          </div>
        );
      };