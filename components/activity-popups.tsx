'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ACTIVITY_LOCATIONS,
  ACTIVITY_NAMES,
  ACTIVITY_PRODUCTS,
  ACTIVITY_TIME_TEXT
} from '@/lib/constants';

type ActivityItem = {
  id: string;
  name: string;
  product: string;
  location: string;
  timeText: string;
};

const pickRandom = <T,>(items: readonly T[]) => items[Math.floor(Math.random() * items.length)];

const buildActivity = (): ActivityItem => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  name: pickRandom(ACTIVITY_NAMES),
  product: pickRandom(ACTIVITY_PRODUCTS),
  location: pickRandom(ACTIVITY_LOCATIONS),
  timeText: pickRandom(ACTIVITY_TIME_TEXT)
});

export function ActivityPopups() {
  const [activity, setActivity] = useState<ActivityItem | null>(null);

  useEffect(() => {
    const showNext = () => setActivity(buildActivity());

    const initialTimer = setTimeout(showNext, 2500);
    const intervalId = setInterval(showNext, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (!activity) {
      return;
    }

    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);

    const timeoutId = setTimeout(() => {
      void audioContext.close();
    }, 350);

    return () => {
      clearTimeout(timeoutId);
      try {
        oscillator.disconnect();
        gainNode.disconnect();
      } catch {
        // No-op cleanup guard.
      }
    };
  }, [activity]);

  const message = useMemo(() => {
    if (!activity) {
      return '';
    }

    return `${activity.name} in ${activity.location} just bought ${activity.product} · ${activity.timeText}`;
  }, [activity]);

  if (!activity) {
    return null;
  }

  return (
    <div className='pointer-events-none fixed bottom-4 left-4 z-50 max-w-xs rounded-xl border border-emerald-200 bg-white/95 p-3 text-sm shadow-lg backdrop-blur'>
      <p className='font-medium text-stone-900'>🛍️ Recent order</p>
      <p className='mt-1 text-stone-700'>{message}</p>
    </div>
  );
}
