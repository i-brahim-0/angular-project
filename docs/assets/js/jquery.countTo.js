//appear
!(function (e) {
  (e.fn.appear = function (a, r) {
    var n = e.extend({ one: !0 }, r);
    return this.each(function () {
      var r = e(this);
      if (((r.appeared = !1), !a)) return void r.trigger("appear", n.data);
      var p = e(window),
        t = function () {
          if (!r.is(":visible")) return void (r.appeared = !1);
          var e = p.scrollLeft(),
            a = p.scrollTop(),
            t = r.offset(),
            i = t.left,
            o = t.top;
          o + r.height() >= a &&
          o <= a + p.height() &&
          i + r.width() >= e &&
          i <= e + p.width()
            ? r.appeared || r.trigger("appear", n.data)
            : (r.appeared = !1);
        },
        i = function () {
          if (((r.appeared = !0), n.one)) {
            p.unbind("scroll", t);
            var i = e.inArray(t, e.fn.appear.checks);
            i >= 0 && e.fn.appear.checks.splice(i, 1);
          }
          a.apply(this, arguments);
        };
      n.one ? r.one("appear", n.data, i) : r.bind("appear", n.data, i),
        p.scroll(t),
        e.fn.appear.checks.push(t),
        t();
    });
  }),
    e.extend(e.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var a = e.fn.appear.checks.length;
        if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
      },
      run: function () {
        e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
          (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
      },
    }),
    e.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (a, r) {
        var n = e.fn[r];
        n &&
          (e.fn[r] = function () {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(), a;
          });
      }
    );
})(jQuery);
//countTo
!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t("object" == typeof exports ? require("jquery") : jQuery);
})(function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals);
  }
  var o = function (e, i) {
    (this.$element = t(e)),
      (this.options = t.extend({}, o.DEFAULTS, this.dataOptions(), i)),
      this.init();
  };
  (o.DEFAULTS = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null,
  }),
    (o.prototype.init = function () {
      (this.value = this.options.from),
        (this.loops = Math.ceil(
          this.options.speed / this.options.refreshInterval
        )),
        (this.loopCount = 0),
        (this.increment = (this.options.to - this.options.from) / this.loops);
    }),
    (o.prototype.dataOptions = function () {
      var t = {
          from: this.$element.data("from"),
          to: this.$element.data("to"),
          speed: this.$element.data("speed"),
          refreshInterval: this.$element.data("refresh-interval"),
          decimals: this.$element.data("decimals"),
        },
        e = Object.keys(t);
      for (var o in e) {
        var i = e[o];
        "undefined" == typeof t[i] && delete t[i];
      }
      return t;
    }),
    (o.prototype.update = function () {
      (this.value += this.increment),
        this.loopCount++,
        this.render(),
        "function" == typeof this.options.onUpdate &&
          this.options.onUpdate.call(this.$element, this.value),
        this.loopCount >= this.loops &&
          (clearInterval(this.interval),
          (this.value = this.options.to),
          "function" == typeof this.options.onComplete &&
            this.options.onComplete.call(this.$element, this.value));
    }),
    (o.prototype.render = function () {
      var t = this.options.formatter.call(
        this.$element,
        this.value,
        this.options
      );
      this.$element.text(t);
    }),
    (o.prototype.restart = function () {
      this.stop(), this.init(), this.start();
    }),
    (o.prototype.start = function () {
      this.stop(),
        this.render(),
        (this.interval = setInterval(
          this.update.bind(this),
          this.options.refreshInterval
        ));
    }),
    (o.prototype.stop = function () {
      this.interval && clearInterval(this.interval);
    }),
    (o.prototype.toggle = function () {
      this.interval ? this.stop() : this.start();
    }),
    (t.fn.countTo = function (e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("countTo"),
          s = !n || "object" == typeof e,
          r = "object" == typeof e ? e : {},
          a = "string" == typeof e ? e : "start";
        s && (n && n.stop(), i.data("countTo", (n = new o(this, r)))),
          n[a].call(n);
      });
    });
});
