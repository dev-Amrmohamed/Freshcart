export function calcTimeLeft(targetDate) {
  if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999); // ***MS
  const timeLeft = targetDate - new Date().getTime();

  const ONE_HOURS_MS = 60 * 60 * 1000;
  const ONE_MINUTE_MS = 60 * 1000;
  const ONE_SEC_MS = 1000;

  if (targetDate > 0) {
    const Hour = Math.trunc(timeLeft / ONE_HOURS_MS);
    const Minute = Math.trunc((timeLeft % ONE_HOURS_MS) / ONE_MINUTE_MS);
    const Sec = Math.trunc(((timeLeft % ONE_HOURS_MS) % ONE_MINUTE_MS) / ONE_SEC_MS);
    return { Hour, Minute, Sec };
  } else {
    return { Hour: "", Minute: "", Sec: "" };
  }
}
