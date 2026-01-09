"use strict";

const page = {
  barTimer: document.querySelector(".timer"),
  barText: document.querySelector(".bar"),
};

const newYearDate = new Date("2027-01-01"); // целевая дата(В данном случае Новый год)

function calculateTimeRemaining() {
  const now = new Date();

  // Расчет разницы в годах и месяцах
  let months = newYearDate.getMonth() - now.getMonth();
  let days = newYearDate.getDate() - now.getDate();

  // Корректировка по дням
  if (days < 0) {
    months--;
    // добавляем число дней из предыдущего месяца
    const prevMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }

  // Корректировка по месяцам
  if (months < 0) {
    months += 12;
  }

  // Для часов, минут, секунд используем разницу в миллисекундах
  const diffMs = newYearDate - now;

  const totalSeconds = Math.floor(diffMs / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;

  // Возвращаем объект с оставшимися компонентами времени
  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateTimer() {
  const remaining = calculateTimeRemaining();

  if (!remaining) {
    // Время истекло
    page.barText.innerText = "С Новым Годом!";
    page.barTimer.innerText = "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
    clearInterval(timerInterval);
    return;
  }

  // Форматируем вывод
  page.barTimer.innerText = `${remaining.months} месяцев, ${remaining.days} дней, ${remaining.hours} часов, ${remaining.minutes} минут, ${remaining.seconds} секунд`;
}

// запуск
let timerInterval = setInterval(updateTimer, 1000);
// сразу вызываем, чтобы сразу показать
updateTimer();
