/** @format */

import React from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

export const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div
        style={{ minWidth: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {left} / {right}
      </div>
    </div>
  );
};
