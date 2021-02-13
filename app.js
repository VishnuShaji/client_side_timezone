const client_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.info(client_timezone);


document.cookie = "client_timezone="+client_timezone;
console.info(document.cookie)