/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, CheckboxField, Switch, TextAreaField } from '@livechat/design-system';
import '@livechat/design-system/dist/design-system.css';
import PermissionResultState from './types';
import './Permissions.css';

export default function Permissions(): React.ReactElement {
  const [hasCameraAccess, setHasCameraAccess] = useState<boolean>(false);
  const [hasMicrophoneAccess, setHasMicrophoneAccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isPreviewDisplayed, setIsPreviewDisplayed] = useState<boolean>(false);
  const videoElement = useRef<HTMLVideoElement>(null);

  const requestMicAndCamera = () => {
    navigator.getUserMedia(
      { video: true, audio: true },
      (stream: MediaStream) => (videoElement.current.srcObject = stream),
      (videoError: MediaStreamError) => setError(videoError.message)
    );
  };

  useEffect(() => {
    requestMicAndCamera();
    navigator.permissions.query({ name: 'camera' }).then((result) => {
      if (result.state === PermissionResultState.Granted) {
        setHasCameraAccess(true);
      } else {
        setHasCameraAccess(false);
      }
    });
    navigator.permissions.query({ name: 'microphone' }).then((result) => {
      if (result.state === PermissionResultState.Granted) {
        setHasMicrophoneAccess(true);
      } else {
        setHasMicrophoneAccess(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isPreviewDisplayed) {
      requestMicAndCamera();
    }
  }, [isPreviewDisplayed]);

  const handleOnClick = () => {
    navigator.clipboard.writeText(Date.now().toString());
  };

  return (
    <div>
      <Card title="Camera and microphone">
        <div>
          <div className="checkboxes-container">
            <CheckboxField className="permission-checkbox" checked={hasCameraAccess} disabled id="checkbox-camera">
              Camera access
            </CheckboxField>
            <CheckboxField
              className="permission-checkbox"
              checked={hasMicrophoneAccess}
              disabled
              id="checkbox-microphone"
            >
              Microphone access
            </CheckboxField>
            <div className="switch-container">
              <span className="switch-label">Show preview</span>
              <Switch
                onClick={() => setIsPreviewDisplayed(!isPreviewDisplayed)}
                disabled={!hasCameraAccess && !hasMicrophoneAccess}
                on={isPreviewDisplayed}
              />
            </div>
          </div>

          {hasCameraAccess && isPreviewDisplayed && <video ref={videoElement} autoPlay />}
          <span>{error}</span>
        </div>
      </Card>
      <Card title="Clipboard">
        <div>
          <p>
            <Button onClick={() => handleOnClick()}>Write to Clipboard</Button>
          </p>
          <TextAreaField
            inline
            id="text-area-field"
            placeholder="Placeholder..."
            description="Click button to copy random text to the Clipboard and paste it into input"
          />
        </div>
      </Card>
    </div>
  );
}
