"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { Button } from "@/components/ui/button"

export default function Component() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-background text-foreground">
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" onClick={goToPreviousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
        <Button variant="outline" onClick={goToNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {monthDays.map(day => (
          <Button
            key={day.toString()}
            variant={isSameDay(day, selectedDate) ? "default" : "ghost"}
            className={`h-10 w-full ${!isSameMonth(day, currentDate) ? 'text-muted-foreground' : ''}`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, 'd')}
          </Button>
        ))}
      </div>
      <div className="mt-4 text-center">
        Selected date: {format(selectedDate, 'MMMM d, yyyy')}
      </div>
    </div>
  )
}