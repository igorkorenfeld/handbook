const path = require("path");

// Given text that should be a link, guarantee that it becomes one. If it's
// already a link that begins with http/https, leave it alone. Otherwise, add
// the site BASEURL to it.
module.exports = (link) =>
  link.startsWith("http") ? link : path.join(process.env.BASEURL ?? "/", link);
