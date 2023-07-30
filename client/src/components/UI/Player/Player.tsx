/** @format */

import React from 'react';
import { Pause, PlayArrow } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import styles from './Player.module.scss';
import { ITrack } from '@/types/track';
import { TrackProgress } from '@/components/Track/TrackProgress';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { usePlayerSelector } from '@/redux/reducers/player/selectors';
import { useAppDispatch } from '@/hooks/redux';
import {
  pauseTrack,
  playTrack,
  setCurrentTime,
  setDuration,
  setVolume,
} from '@/redux/reducers/player/reducer';

export const Player = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: '123',
    text: '123',
    listens: 3,
    picture: '/next.svg',
    audio: 'http://localhost:5000/audio/8c0daf8e-28e8-4a02-af30-dacb4848517d.wav',
    comments: [],
  };
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();
  const { pause, volume, active, currentTime, duration } = usePlayerSelector();

  const setAudio = () => {
    if (active && audioRef.current) {
      const audio = audioRef.current;
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
    }
  };

  const stopAudio = () => {
    if (audioRef.current && !pause) {
      audioRef.current.pause();
      dispatch(pauseTrack());
    }
  };

  const onClickTrack = () => {
    if (audioRef.current) {
      if (pause) {
        dispatch(playTrack());
        audioRef.current.play();
      } else {
        dispatch(pauseTrack());
        audioRef.current.pause();
      }
    }
  };
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value) / 100;
      dispatch(setVolume(Number(e.target.value)));
    }
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      dispatch(setCurrentTime(Number(e.target.value)));
    }
  };
  React.useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    } else {
      stopAudio();
      setAudio();
      onClickTrack();
    }
  }, [active]);
  if (!active) {
    return null;
  }
  return (
    <div className={styles.root}>
      <IconButton onClick={onClickTrack}>{pause ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};
