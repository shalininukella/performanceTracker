import { useMemo } from "react";
import { ContributionGrid } from "@/components/ContributionGrid";
import { GridStats } from "@/components/GridStats";
import { useContributionStorage } from "@/hooks/useContributionStorage";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

function getDaysPassedThisYear(): number {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - startOfYear.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

function getTotalDaysInYear(year: number): number {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
}

export default function Index() {
  const { filledDays, toggleDay, reset } = useContributionStorage();
  const currentYear = new Date().getFullYear();
  const totalDays = getTotalDaysInYear(currentYear);
  const daysPassed = useMemo(() => getDaysPassedThisYear(), []);

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Performance Tracker
          </h1>
          <p className="text-muted-foreground">Track your daily progress</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Automatic Grid */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground mb-1">
                Days
              </h2>
              <p className="text-sm text-muted-foreground">
                Automatically fills as each day passes
              </p>
            </div>

            <ContributionGrid mode="automatic" year={currentYear} />

            <div className="mt-4 pt-4 border-t border-border">
              <GridStats
                filled={daysPassed}
                total={totalDays}
                label="days completed this year"
              />
            </div>
          </div>

          {/* Manual Grid */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Daily Progress
                </h2>
                <p className="text-sm text-muted-foreground">
                  Click any day to mark it as complete
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={reset}
                className="flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </Button>
            </div>

            <ContributionGrid
              mode="manual"
              filledDays={filledDays}
              onDayClick={toggleDay}
              year={currentYear}
            />

            <div className="mt-4 pt-4 border-t border-border">
              <GridStats
                filled={filledDays.size}
                total={totalDays}
                label="days clicked"
              />
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          {currentYear} • Hover over any box to see the date
        </footer>
      </div>
    </div>
  );
}
