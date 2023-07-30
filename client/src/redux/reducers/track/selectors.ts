/** @format */
import { useAppSelector } from '@/hooks/redux';

export const useTrackSelector = () => useAppSelector((state) => state.tracks);
