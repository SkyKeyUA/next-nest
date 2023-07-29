/** @format */
import { useAppSelector } from '@/hooks/redux';

export const usePlayerSelector = () => useAppSelector((state) => state.player);
