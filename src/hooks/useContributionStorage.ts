import { useState, useEffect } from 'react';

const STORAGE_KEY = 'manual-contribution-grid';

export function useContributionStorage() {
  const [filledDays, setFilledDays] = useState<Set<string>>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return new Set(JSON.parse(stored));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...filledDays]));
  }, [filledDays]);

  const toggleDay = (dateKey: string) => {
    setFilledDays((prev) => {
      const next = new Set(prev);
      if (next.has(dateKey)) {
        next.delete(dateKey);
      } else {
        next.add(dateKey);
      }
      return next;
    });
  };

  const reset = () => {
    setFilledDays(new Set());
  };

  return { filledDays, toggleDay, reset };
}
