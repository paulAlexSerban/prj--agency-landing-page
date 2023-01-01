export const breakpoints = {
  name: "breakpoints",
  exec: (listArr) => {
    let list = listArr;
    let mediaObj = {};
    let events = [];

    const on = (query, handler) => {
      // Register event.
      events.push({
        query: query,
        handler: handler,
        state: false,
      });

      // Query active *right now*? Call handler.
      if (active(query)) {
        handler();
      }
    };

    const active = (query) => {
      let breakpoint;
      let op;
      let media;
      let a;
      let x;
      let y;
      let units;

      if (!(query in mediaObj)) {
        // Determine operator, breakpoint.

        if (query.substr(0, 2) == ">=") {
          op = "gte"; // Greater than or equal.
          breakpoint = query.substr(2);
        } else if (query.substr(0, 2) == "<=") {
          op = "lte"; // Less than or equal.
          breakpoint = query.substr(2);
        } else if (query.substr(0, 1) == ">") {
          op = "gt"; // Greater than.
          breakpoint = query.substr(1);
        } else if (query.substr(0, 1) == "<") {
          op = "lt"; // Less than.
          breakpoint = query.substr(1);
        } else if (query.substr(0, 1) == "!") {
          op = "not"; // Not.
          breakpoint = query.substr(1);
        } else {
          op = "eq"; // Equal.
          breakpoint = query;
        }

        if (breakpoint && breakpoint in list) {
          a = list[breakpoint];

          // Range.
          if (Array.isArray(a)) {
            x = parseInt(a[0]);
            y = parseInt(a[1]);

            if (!isNaN(x)) units = a[0].substr(String(x).length);
            else if (!isNaN(y)) units = a[1].substr(String(y).length);
            else return;

            // Max only.
            if (isNaN(x)) {
              switch (op) {
                case "gte": // Greater than or equal (>= 0 / anything)
                  media = "screen";
                  break;

                case "lte": // Less than or equal (<= y)
                  media = "screen and (max-width: " + y + units + ")";
                  break;

                case "gt": // Greater than (> y)
                  media = "screen and (min-width: " + (y + 1) + units + ")";
                  break;

                case "lt": // Less than (< 0 / invalid)
                  media = "screen and (max-width: -1px)";
                  break;

                case "not": // Not (> y)
                  media = "screen and (min-width: " + (y + 1) + units + ")";
                  break;

                default: // Equal (<= y)
                  media = "screen and (max-width: " + y + units + ")";
                  break;
              }
            }

            // Min only.
            else if (isNaN(y)) {
              switch (op) {
                case "gte": // Greater than or equal (>= x)
                  media = "screen and (min-width: " + x + units + ")";
                  break;

                case "lte": // Less than or equal (<= inf / anything)
                  media = "screen";
                  break;

                case "gt": // Greater than (> inf / invalid)
                  media = "screen and (max-width: -1px)";
                  break;

                case "lt": // Less than (< x)
                  media = "screen and (max-width: " + (x - 1) + units + ")";
                  break;

                case "not": // Not (< x)
                  media = "screen and (max-width: " + (x - 1) + units + ")";
                  break;

                default: // Equal (>= x)
                  media = "screen and (min-width: " + x + units + ")";
                  break;
              }
            }

            // Min and max.
            else {
              switch (op) {
                case "gte": // Greater than or equal.
                  media = "screen and (min-width: " + x + units + ")";
                  break;

                case "lte": // Less than or equal.
                  media = "screen and (max-width: " + y + units + ")";
                  break;

                case "gt": // Greater than.
                  media = "screen and (min-width: " + (y + 1) + units + ")";
                  break;

                case "lt": // Less than.
                  media = "screen and (max-width: " + (x - 1) + units + ")";
                  break;

                case "not": // Not.
                  media =
                    "screen and (max-width: " +
                    (x - 1) +
                    units +
                    "), screen and (min-width: " +
                    (y + 1) +
                    units +
                    ")";
                  break;

                default: // Equal.
                  media =
                    "screen and (min-width: " +
                    x +
                    units +
                    ") and (max-width: " +
                    y +
                    units +
                    ")";
                  break;
              }
            }
          } else {
            // String.
            // Missing a media type? Prefix with "screen".
            if (a.charAt(0) == "(") media = "screen and " + a;
            // Otherwise, use as-is.
            else media = a;
          }
        }

        // Cache.
        mediaObj[query] = media ? media : false;
      }

      return mediaObj[query] === false
        ? false
        : window.matchMedia(mediaObj[query]).matches;
    };

    const polls = () => {
      let i;
      let e;

      // Step through events.
      for (i = 0; i < events.length; i++) {
        e = events[i]; // Get event.

        // Active?
        if (active(e.query)) {
          // Hasn't been called yet?
          if (!e.state) {
            e.state = true; // Mark as called.

            e.handler(); // Call handler.
          }
        } else {
          // Otherwise ...
          // Previously called?
          if (e.state) {
            e.state = false; // Unmark as called.
          }
        }
      }
    };

    const setupEventListeners = () => {
      window.addEventListener("resize", () => {
        polls();
      });
      window.addEventListener("orientationchange", () => {
        polls();
      });
      window.addEventListener("load", () => {
        polls();
      });
      window.addEventListener("fullscreenchange", () => {
        polls();
      });
    };

    const init = () => {
      setupEventListeners();
    };

    init();

    return {
      on,
    };
  },
};
