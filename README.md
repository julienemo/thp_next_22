### Notes

---

On the `events.js:292 throw er; // Unhandled 'error' event ^ Error: ENOSPC: System limit for number of file watchers reached` error

This happens for a currently unknown reason. We know that in Mac there is less chance to encounter this error. We know that it literally says we want to watch more files than what we have decided to watch, so let's just re-decide on the number of files to watch with

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

This increases number of watched files to 524288 (tried to increase to 600, works for a while...)

[Here is a link](https://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc/31926452#31926452) with relevant discussions

---

On life cycle

- life cycle methods don't need to be binded to 'this'
- Parent life cycle methods are always triggered after all things are buckled up in children (ex: Parent and Child in this `exercice20200505`)
