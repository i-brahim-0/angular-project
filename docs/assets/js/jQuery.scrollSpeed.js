!(function (t) {
  (jQuery.scrollSpeed = function (e, n, o) {
    var i,
      l,
      r,
      u = t(document),
      h = t(window),
      a = t("html, body"),
      c = o || "default",
      d = 0,
      s = !1;
    return window.navigator.msPointerEnabled
      ? !1
      : void h
          .on("mousewheel DOMMouseScroll", function (t) {
            var o = t.originalEvent.wheelDeltaY,
              f = t.originalEvent.detail;
            return (
              (i = u.height() > h.height()),
              (l = u.width() > h.width()),
              (s = !0),
              i &&
                ((r = h.height()),
                (0 > o || f > 0) && (d = d + r >= u.height() ? d : (d += e)),
                (o > 0 || 0 > f) && (d = 0 >= d ? 0 : (d -= e)),
                a.stop().animate({ scrollTop: d }, n, c, function () {
                  s = !1;
                })),
              l &&
                ((r = h.width()),
                (0 > o || f > 0) && (d = d + r >= u.width() ? d : (d += e)),
                (o > 0 || 0 > f) && (d = 0 >= d ? 0 : (d -= e)),
                a.stop().animate({ scrollLeft: d }, n, c, function () {
                  s = !1;
                })),
              !1
            );
          })
          .on("scroll", function () {
            i && !s && (d = h.scrollTop()), l && !s && (d = h.scrollLeft());
          })
          .on("resize", function () {
            i && !s && (r = h.height()), l && !s && (r = h.width());
          });
  }),
    (jQuery.easing["default"] = function (t, e, n, o, i) {
      return -o * ((e = e / i - 1) * e * e * e - 1) + n;
    });
})(jQuery);
