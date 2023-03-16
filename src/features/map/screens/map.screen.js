import React, { useEffect, useRef, useState } from "react";
import { Text, Button } from "react-native";

import { SafeArea } from "../../../components/safe-area/safe-area.component";

const MapScreen = () => {
  const [timer, setTimer] = useState(10);
  const [started, setStarted] = useState(false);
  let interval = useRef(null);

  const handleCountdown = () => {
    if (started) {
      clearInterval(interval.current);
      setStarted(false);
      return;
    }

    setStarted(true);

    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(interval.current);
      setTimer(10);
      setStarted(false);
    }
  }, [timer]);

  return (
    <SafeArea>
      <Text>Map Screen</Text>
      <Text>{timer}</Text>
      <Button onPress={handleCountdown} title={started ? "STOP" : "START"} />
    </SafeArea>
  );
};

export default MapScreen;
