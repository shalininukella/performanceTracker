import { useMemo } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface ContributionGridProps {
  mode: 'automatic' | 'manual';
  filledDays?: Set<string>;
  onDayClick?: (dateKey: string) => void;
  year?: number;
}

function getDaysInYear(year: number): Date[] {
  const days: Date[] = [];
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }
  return days;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getDateKey(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function ContributionGrid({
  mode,
  filledDays = new Set(),
  onDayClick,
  year = new Date().getFullYear(),
}: ContributionGridProps) {
  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const days = useMemo(() => getDaysInYear(year), [year]);

  // Organize days into weeks (columns)
  const weeks = useMemo(() => {
    const result: Date[][] = [];
    let currentWeek: Date[] = [];
    
    // Pad the first week with nulls for alignment
    const firstDayOfWeek = days[0].getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null as unknown as Date);
    }
    
    for (const day of days) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
    }
    
    // Pad the last week
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null as unknown as Date);
      }
      result.push(currentWeek);
    }
    
    return result;
  }, [days]);

  const isFilled = (date: Date): boolean => {
    if (!date) return false;
    
    if (mode === 'automatic') {
      return date <= today;
    }
    return filledDays.has(getDateKey(date));
  };

  const isToday = (date: Date): boolean => {
    if (!date) return false;
    return getDateKey(date) === getDateKey(today);
  };

  const handleClick = (date: Date) => {
    if (mode === 'manual' && date && onDayClick) {
      onDayClick(getDateKey(date));
    }
  };

  return (
    <div className="flex gap-[3px] overflow-x-auto pb-2">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-[3px]">
          {week.map((day, dayIndex) => {
            if (!day) {
              return (
                <div
                  key={`empty-${dayIndex}`}
                  className="w-3 h-3 rounded-sm"
                />
              );
            }

            const filled = isFilled(day);
            const todayHighlight = isToday(day);

            return (
              <Tooltip key={getDateKey(day)}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => handleClick(day)}
                    className={cn(
                      'w-3 h-3 rounded-sm transition-colors',
                      mode === 'manual' && 'cursor-pointer hover:opacity-80',
                      mode === 'automatic' && 'cursor-default',
                      filled
                        ? todayHighlight
                          ? 'bg-[hsl(var(--grid-today))]'
                          : 'bg-[hsl(var(--grid-filled))]'
                        : 'bg-[hsl(var(--grid-empty))]',
                      todayHighlight && !filled && 'ring-2 ring-[hsl(var(--grid-filled))]'
                    )}
                    disabled={mode === 'automatic'}
                  />
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {formatDate(day)}
                  {filled && mode === 'automatic' && ' ✓'}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      ))}
    </div>
  );
}
