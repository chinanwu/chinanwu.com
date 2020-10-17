export default (event, keys) =>
  event?.key &&
  !event.shiftKey &&
  !event.ctrlKey &&
  !event.altKey &&
  !event.metaKey &&
  (keys.length > 0 ? keys.includes(event.key) : true);
