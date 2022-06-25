export const timeAgo = (date_str) => {
  date_str = date_str.replace("+0000", "Z");
  let time_formats = [
    [60, "just now", 1],
    [120, "1 minute ago", "1 minute from now"],
    [3600, "minutes ago", 60],
    [7200, "1 hour ago", "1 hour from now"],
    [86400, "hours ago", 3600],
    [172800, "yesterday", "tomorrow"],
    [604800, "days ago", 86400],
    [1209600, "last week", "next week"],
    [2419200, "weeks ago", 604800],
    [4838400, "last month", "next month"],
    [29030400, "months ago", 2419200],
    [58060800, "last year", "next year"],
    [2903040000, "years ago", 29030400],
    [5806080000, "last century", "next century"],
    [58060800000, "centuries ago", 2903040000],
  ];
  let time = ("" + date_str)
    .replace(/-/g, "/")
    .replace(/[TZ]/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
  if (time.substr(time.length - 4, 1) == ".")
    time = time.substr(0, time.length - 4);
  let seconds = (new Date() - new Date(time)) / 1000;
  let token = "",
    list_choice = 1;
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "ago";
    list_choice = 2;
  }
  let i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    }
  return time;
};

export const formatters = {
  timeAgo,
};

const utils = {
    formatters,
}
export default utils;