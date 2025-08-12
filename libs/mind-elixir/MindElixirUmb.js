(() => {
  // F:/gitDocs/html_note/libs/mind-elixir/MindElixir.js
  var at = Object.defineProperty;
  var dt = (e, t, n) => t in e ? at(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
  var z = (e, t, n) => (dt(e, typeof t != "symbol" ? t + "" : t, n), n);
  var me = {
    name: "Latte",
    type: "light",
    palette: ["#dd7878", "#ea76cb", "#8839ef", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#209fb5", "#1e66f5", "#7287fd"],
    cssVar: {
      "--node-gap-x": "30px",
      "--node-gap-y": "10px",
      "--main-gap-x": "65px",
      "--main-gap-y": "45px",
      "--root-radius": "30px",
      "--main-radius": "20px",
      "--root-color": "#ffffff",
      "--root-bgcolor": "#4c4f69",
      "--root-border-color": "rgba(0, 0, 0, 0)",
      "--main-color": "#444446",
      "--main-bgcolor": "#ffffff",
      "--topic-padding": "3px",
      "--color": "#777777",
      "--bgcolor": "#f6f6f6",
      "--selected": "#4dc4ff",
      "--panel-color": "#444446",
      "--panel-bgcolor": "#ffffff",
      "--panel-border-color": "#eaeaea",
      "--map-padding": "50px"
    }
  };
  var ve = {
    name: "Dark",
    type: "dark",
    palette: ["#848FA0", "#748BE9", "#D2F9FE", "#4145A5", "#789AFA", "#706CF4", "#EF987F", "#775DD5", "#FCEECF", "#DA7FBC"],
    cssVar: {
      "--node-gap-x": "30px",
      "--node-gap-y": "10px",
      "--main-gap-x": "65px",
      "--main-gap-y": "45px",
      "--root-radius": "30px",
      "--main-radius": "20px",
      "--root-color": "#ffffff",
      "--root-bgcolor": "#2d3748",
      "--root-border-color": "rgba(255, 255, 255, 0.1)",
      "--main-color": "#ffffff",
      "--main-bgcolor": "#4c4f69",
      "--topic-padding": "3px",
      "--color": "#cccccc",
      "--bgcolor": "#252526",
      "--selected": "#4dc4ff",
      "--panel-color": "#ffffff",
      "--panel-bgcolor": "#2d3748",
      "--panel-border-color": "#696969",
      "--map-padding": "50px 80px"
    }
  };
  function ne(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }
  var oe = function(e, t) {
    if (t.id === e)
      return t;
    if (t.children && t.children.length) {
      for (let n = 0; n < t.children.length; n++) {
        const o = oe(e, t.children[n]);
        if (o)
          return o;
      }
      return null;
    } else
      return null;
  };
  var j = (e, t) => {
    if (e.parent = t, e.children)
      for (let n = 0; n < e.children.length; n++)
        j(e.children[n], e);
  };
  var V = (e, t, n) => {
    if (e.expanded = t, e.children)
      if (n === void 0 || n > 0) {
        const o = n !== void 0 ? n - 1 : void 0;
        e.children.forEach((i) => {
          V(i, t, o);
        });
      } else
        e.children.forEach((o) => {
          V(o, false);
        });
  };
  function be(e) {
    if (e.id = K(), e.children)
      for (let t = 0; t < e.children.length; t++)
        be(e.children[t]);
  }
  function ie(e, t, n, o) {
    const i = o - t, s = e - n;
    let r = Math.atan(Math.abs(i) / Math.abs(s)) / 3.14 * 180;
    if (isNaN(r))
      return;
    s < 0 && i > 0 && (r = 180 - r), s < 0 && i < 0 && (r = 180 + r), s > 0 && i < 0 && (r = 360 - r);
    const l = 12, c = 30, d = r + c, f = r - c;
    return {
      x1: n + Math.cos(Math.PI * d / 180) * l,
      y1: o - Math.sin(Math.PI * d / 180) * l,
      x2: n + Math.cos(Math.PI * f / 180) * l,
      y2: o - Math.sin(Math.PI * f / 180) * l
    };
  }
  function K() {
    return ((/* @__PURE__ */ new Date()).getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
  }
  var ht = function() {
    const e = K();
    return {
      topic: this.newTopicName,
      id: e
    };
  };
  function ye(e) {
    return JSON.parse(
      JSON.stringify(e, (n, o) => {
        if (n !== "parent")
          return o;
      })
    );
  }
  var H = (e, t) => {
    let n = 0, o = 0;
    for (; t && t !== e; )
      n += t.offsetLeft, o += t.offsetTop, t = t.offsetParent;
    return { offsetLeft: n, offsetTop: o };
  };
  var N = (e, t) => {
    for (const n in t)
      e.setAttribute(n, t[n]);
  };
  var he = (e) => e ? e.tagName === "ME-TPC" : false;
  var ce = (e) => e.filter((t) => t.nodeObj.parent).filter((t, n, o) => {
    for (let i = 0; i < o.length; i++) {
      if (t === o[i])
        continue;
      const { parent: s } = t.nodeObj;
      if (s === o[i].nodeObj)
        return false;
    }
    return true;
  });
  var Ge = (e) => {
    const t = /translate\(([^,]+),\s*([^)]+)\)/, n = e.match(t);
    return n ? { x: parseFloat(n[1]), y: parseFloat(n[2]) } : { x: 0, y: 0 };
  };
  var we = function(e) {
    for (let t = 0; t < e.length; t++) {
      const { dom: n, evt: o, func: i } = e[t];
      n.addEventListener(o, i);
    }
    return function() {
      for (let n = 0; n < e.length; n++) {
        const { dom: o, evt: i, func: s } = e[n];
        o.removeEventListener(i, s);
      }
    };
  };
  var M = /* @__PURE__ */ ((e) => (e.LHS = "lhs", e.RHS = "rhs", e))(M || {});
  var ut = (e) => {
    const t = e.map.querySelectorAll(".lhs>me-wrapper>me-parent>me-tpc");
    e.selectNode(t[Math.ceil(t.length / 2) - 1]);
  };
  var ft = (e) => {
    const t = e.map.querySelectorAll(".rhs>me-wrapper>me-parent>me-tpc");
    e.selectNode(t[Math.ceil(t.length / 2) - 1]);
  };
  var pt = (e) => {
    e.selectNode(e.map.querySelector("me-root>me-tpc"));
  };
  var gt = function(e, t) {
    const n = t.parentElement.parentElement.parentElement.previousSibling;
    if (n) {
      const o = n.firstChild;
      e.selectNode(o);
    }
  };
  var mt = function(e, t) {
    const n = t.parentElement.nextSibling;
    if (n && n.firstChild) {
      const o = n.firstChild.firstChild.firstChild;
      e.selectNode(o);
    }
  };
  var Te = function(e, t) {
    var s, r;
    const n = e.currentNode || ((s = e.currentNodes) == null ? void 0 : s[0]);
    if (!n)
      return;
    const o = n.nodeObj, i = n.offsetParent.offsetParent.parentElement;
    o.parent ? i.className === t ? mt(e, n) : (r = o.parent) != null && r.parent ? gt(e, n) : pt(e) : t === M.LHS ? ut(e) : ft(e);
  };
  var Le = function(e, t) {
    const n = e.currentNode;
    if (!n || !n.nodeObj.parent)
      return;
    const i = t + "Sibling", s = n.parentElement.parentElement[i];
    s ? e.selectNode(s.firstChild.firstChild) : e.selectNode(n);
  };
  var se = function(e, t, n) {
    const { scaleVal: o, scaleSensitivity: i } = e;
    switch (t) {
      case "in":
        e.scale(o + i, n);
        break;
      case "out":
        e.scale(o - i, n);
    }
  };
  function vt(e, t) {
    t = t === true ? {} : t;
    const n = () => {
      e.currentArrow ? e.removeArrow() : e.currentSummary ? e.removeSummary(e.currentSummary.summaryObj.id) : e.currentNodes && e.removeNodes(e.currentNodes);
    };
    let o = false, i = null;
    const s = (l) => {
      const c = e.nodeData;
      if (l.key === "0")
        for (const d of c.children)
          V(d, false);
      if (l.key === "=")
        for (const d of c.children)
          V(d, true);
      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(l.key))
        for (const d of c.children)
          V(d, true, Number(l.key) - 1);
      e.refresh(), e.toCenter(), o = false, i && (clearTimeout(i), i = null, e.container.removeEventListener("keydown", s));
    }, r = {
      Enter: (l) => {
        l.shiftKey ? e.insertSibling("before") : l.ctrlKey ? e.insertParent() : e.insertSibling("after");
      },
      Tab: () => {
        e.addChild();
      },
      F1: () => {
        e.toCenter();
      },
      F2: () => {
        e.beginEdit();
      },
      ArrowUp: (l) => {
        if (l.altKey)
          e.moveUpNode();
        else {
          if (l.metaKey || l.ctrlKey)
            return e.initSide();
          Le(e, "previous");
        }
      },
      ArrowDown: (l) => {
        l.altKey ? e.moveDownNode() : Le(e, "next");
      },
      ArrowLeft: (l) => {
        if (l.metaKey || l.ctrlKey)
          return e.initLeft();
        Te(e, M.LHS);
      },
      ArrowRight: (l) => {
        if (l.metaKey || l.ctrlKey)
          return e.initRight();
        Te(e, M.RHS);
      },
      PageUp: () => e.moveUpNode(),
      PageDown: () => {
        e.moveDownNode();
      },
      c: (l) => {
        (l.metaKey || l.ctrlKey) && (e.waitCopy = e.currentNodes);
      },
      x: (l) => {
        (l.metaKey || l.ctrlKey) && (e.waitCopy = e.currentNodes, n());
      },
      v: (l) => {
        !e.waitCopy || !e.currentNode || (l.metaKey || l.ctrlKey) && (e.waitCopy.length === 1 ? e.copyNode(e.waitCopy[0], e.currentNode) : e.copyNodes(e.waitCopy, e.currentNode));
      },
      "=": (l) => {
        (l.metaKey || l.ctrlKey) && se(e, "in");
      },
      "-": (l) => {
        (l.metaKey || l.ctrlKey) && se(e, "out");
      },
      0: (l) => {
        if (l.metaKey || l.ctrlKey) {
          if (o)
            return;
          e.scale(1);
        }
      },
      k: (l) => {
        (l.metaKey || l.ctrlKey) && (o = true, i && (clearTimeout(i), e.container.removeEventListener("keydown", s)), i = window.setTimeout(() => {
          o = false, i = null;
        }, 2e3), e.container.addEventListener("keydown", s));
      },
      Delete: n,
      Backspace: n,
      ...t
    };
    e.container.onkeydown = (l) => {
      if (l.preventDefault(), !e.editable)
        return;
      const c = r[l.key];
      c && c(l);
    };
  }
  function bt(e) {
    const { dragMoveHelper: t } = e, n = (u) => {
      var m, v, b;
      if (u.button !== 0)
        return;
      if ((m = e.helper1) != null && m.moved) {
        e.helper1.clear();
        return;
      }
      if ((v = e.helper2) != null && v.moved) {
        e.helper2.clear();
        return;
      }
      if (t.moved) {
        t.clear();
        return;
      }
      const a = u.target;
      if (a.tagName === "ME-EPD")
        u.ctrlKey || u.metaKey ? e.expandNodeAll(a.previousSibling) : e.expandNode(a.previousSibling);
      else if (a.tagName === "ME-TPC" && e.currentNodes.length > 1)
        e.selectNode(a);
      else if (!e.editable)
        return;
      const p = (b = a.parentElement) == null ? void 0 : b.parentElement;
      p.getAttribute("class") === "topiclinks" ? e.selectArrow(a.parentElement) : p.getAttribute("class") === "summary" && e.selectSummary(a.parentElement);
    }, o = (u) => {
      var m;
      if (!e.editable)
        return;
      const a = u.target;
      he(a) && e.beginEdit(a);
      const p = (m = a.parentElement) == null ? void 0 : m.parentElement;
      p.getAttribute("class") === "topiclinks" ? e.editArrowLabel(a.parentElement) : p.getAttribute("class") === "summary" && e.editSummary(a.parentElement);
    };
    let i = 0;
    const s = (u) => {
      if (u.pointerType === "mouse")
        return;
      const a = (/* @__PURE__ */ new Date()).getTime(), p = a - i;
      p < 300 && p > 0 && o(u), i = a;
    }, r = (u) => {
      t.moved = false;
      const a = e.mouseSelectionButton === 0 ? 2 : 0;
      if (u.button !== a && u.pointerType === "mouse")
        return;
      t.x = u.clientX, t.y = u.clientY;
      const p = u.target;
      p.className !== "circle" && p.contentEditable !== "plaintext-only" && (t.mousedown = true, e.map.style.transition = "none", p.setPointerCapture(u.pointerId));
    }, l = (u) => {
      if (u.target.contentEditable !== "plaintext-only") {
        const a = u.clientX - t.x, p = u.clientY - t.y;
        t.onMove(a, p);
      }
      t.x = u.clientX, t.y = u.clientY;
    }, c = (u) => {
      const a = e.mouseSelectionButton === 0 ? 2 : 0;
      if (u.button !== a && u.pointerType === "mouse")
        return;
      const p = u.target;
      p.hasPointerCapture && p.hasPointerCapture(u.pointerId) && p.releasePointerCapture(u.pointerId), t.clear();
    }, d = (u) => {
      if (u.preventDefault(), u.button !== 2 || !e.editable)
        return;
      const a = u.target;
      he(a) && !a.classList.contains("selected") && e.selectNode(a), setTimeout(() => {
        e.dragMoveHelper.moved || e.bus.fire("showContextMenu", u);
      }, 200);
    }, f = (u) => {
      u.stopPropagation(), u.preventDefault(), u.ctrlKey || u.metaKey ? u.deltaY < 0 ? se(e, "in", e.dragMoveHelper) : e.scaleVal - e.scaleSensitivity > 0 && se(e, "out", e.dragMoveHelper) : u.shiftKey ? e.move(-u.deltaY, 0) : (e.map.style.transition = "none", e.move(-u.deltaX, -u.deltaY), e.map.style.transition = "transform 0.3s");
    }, { container: h } = e;
    return we([
      { dom: h, evt: "pointerdown", func: r },
      { dom: h, evt: "pointermove", func: l },
      { dom: h, evt: "pointerup", func: c },
      { dom: h, evt: "pointerup", func: s },
      { dom: h, evt: "click", func: n },
      { dom: h, evt: "dblclick", func: o },
      { dom: h, evt: "contextmenu", func: d },
      { dom: h, evt: "wheel", func: typeof e.handleWheel == "function" ? e.handleWheel : f }
    ]);
  }
  function yt() {
    return {
      handlers: {},
      addListener: function(e, t) {
        this.handlers[e] === void 0 && (this.handlers[e] = []), this.handlers[e].push(t);
      },
      fire: function(e, ...t) {
        if (this.handlers[e] instanceof Array) {
          const n = this.handlers[e];
          for (let o = 0; o < n.length; o++)
            n[o](...t);
        }
      },
      removeListener: function(e, t) {
        if (!this.handlers[e])
          return;
        const n = this.handlers[e];
        if (!t)
          n.length = 0;
        else if (n.length)
          for (let o = 0; o < n.length; o++)
            n[o] === t && this.handlers[e].splice(o, 1);
      }
    };
  }
  var re = document;
  var wt = function() {
    this.nodes.innerHTML = "";
    const e = this.createTopic(this.nodeData);
    xe(e, this.nodeData), e.draggable = false;
    const t = re.createElement("me-root");
    t.appendChild(e);
    const n = this.nodeData.children || [];
    if (this.direction === 2) {
      let o = 0, i = 0;
      n.map((s) => {
        s.direction === 0 ? o += 1 : s.direction === 1 ? i += 1 : o <= i ? (s.direction = 0, o += 1) : (s.direction = 1, i += 1);
      });
    }
    xt(this, n, t);
  };
  var xt = function(e, t, n) {
    const o = re.createElement("me-main");
    o.className = M.LHS;
    const i = re.createElement("me-main");
    i.className = M.RHS;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], { grp: l } = e.createWrapper(r);
      e.direction === 2 ? r.direction === 0 ? o.appendChild(l) : i.appendChild(l) : e.direction === 0 ? o.appendChild(l) : i.appendChild(l);
    }
    e.nodes.appendChild(o), e.nodes.appendChild(n), e.nodes.appendChild(i), e.nodes.appendChild(e.lines);
  };
  var Et = function(e, t) {
    const n = re.createElement("me-children");
    for (let o = 0; o < t.length; o++) {
      const i = t[o], { grp: s } = e.createWrapper(i);
      n.appendChild(s);
    }
    return n;
  };
  var T = document;
  var Ve = function(e, t) {
    const o = (this != null && this.el ? this.el : t || document).querySelector(`[data-nodeid="me${e}"]`);
    if (!o)
      throw new Error(`FindEle: Node ${e} not found, maybe it's collapsed.`);
    return o;
  };
  var xe = function(e, t) {
    if (e.innerHTML = "", t.style) {
      const n = t.style;
      for (const o in n)
        e.style[o] = n[o];
    }
    if (t.dangerouslySetInnerHTML) {
      e.innerHTML = t.dangerouslySetInnerHTML;
      return;
    }
    if (t.image) {
      const n = t.image;
      if (n.url && n.width && n.height) {
        const o = T.createElement("img");
        o.src = n.url, o.style.width = n.width + "px", o.style.height = n.height + "px", n.fit && (o.style.objectFit = n.fit), e.appendChild(o), e.image = o;
      }
    } else
      e.image && (e.image = void 0);
    {
      const n = T.createElement("span");
      n.className = "text", n.textContent = t.topic, e.appendChild(n), e.text = n;
    }
    if (t.hyperLink) {
      const n = T.createElement("a");
      n.className = "hyper-link", n.target = "_blank", n.innerText = "\u{1F517}", n.href = t.hyperLink, e.appendChild(n), e.link = n;
    } else
      e.link && (e.link = void 0);
    if (t.icons && t.icons.length) {
      const n = T.createElement("span");
      n.className = "icons", n.innerHTML = t.icons.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.icons = n;
    } else
      e.icons && (e.icons = void 0);
    if (t.tags && t.tags.length) {
      const n = T.createElement("div");
      n.className = "tags", n.innerHTML = t.tags.map((o) => `<span>${ne(o)}</span>`).join(""), e.appendChild(n), e.tags = n;
    } else
      e.tags && (e.tags = void 0);
  };
  var Ct = function(e, t) {
    const n = T.createElement("me-wrapper"), { p: o, tpc: i } = this.createParent(e);
    if (n.appendChild(o), !t && e.children && e.children.length > 0) {
      const s = Ee(e.expanded);
      if (o.appendChild(s), e.expanded !== false) {
        const r = Et(this, e.children);
        n.appendChild(r);
      }
    }
    return { grp: n, top: o, tpc: i };
  };
  var St = function(e) {
    const t = T.createElement("me-parent"), n = this.createTopic(e);
    return xe(n, e), t.appendChild(n), { p: t, tpc: n };
  };
  var Nt = function(e) {
    const t = T.createElement("me-children");
    return t.append(...e), t;
  };
  var kt = function(e) {
    const t = T.createElement("me-tpc");
    return t.nodeObj = e, t.dataset.nodeid = "me" + e.id, t.draggable = this.draggable, t;
  };
  function qe(e) {
    const t = T.createRange();
    t.selectNodeContents(e);
    const n = window.getSelection();
    n && (n.removeAllRanges(), n.addRange(t));
  }
  var _t = function(e) {
    if (!e)
      return;
    const t = T.createElement("div"), n = e.text.textContent;
    e.appendChild(t), t.id = "input-box", t.textContent = n, t.contentEditable = "plaintext-only", t.spellcheck = false;
    const o = getComputedStyle(e);
    t.style.cssText = `min-width:${e.offsetWidth - 8}px;
  color:${o.color};
  padding:${o.padding};
  margin:${o.margin};
  font:${o.font};
  background-color:${o.backgroundColor !== "rgba(0, 0, 0, 0)" && o.backgroundColor};
  border-radius:${o.borderRadius};`, this.direction === 0 && (t.style.right = "0"), qe(t), this.bus.fire("operation", {
      name: "beginEdit",
      obj: e.nodeObj
    }), t.addEventListener("keydown", (i) => {
      i.stopPropagation();
      const s = i.key;
      if (s === "Enter" || s === "Tab") {
        if (i.shiftKey)
          return;
        i.preventDefault(), t.blur(), this.container.focus();
      }
    }), t.addEventListener("blur", () => {
      var r;
      if (!t)
        return;
      const i = e.nodeObj, s = ((r = t.textContent) == null ? void 0 : r.trim()) || "";
      s === "" ? i.topic = n : i.topic = s, t.remove(), s !== n && (e.text.textContent = i.topic, this.linkDiv(), this.bus.fire("operation", {
        name: "finishEdit",
        obj: i,
        origin: n
      }));
    });
  };
  var Ee = function(e) {
    const t = T.createElement("me-epd");
    return t.expanded = e !== false, t.className = e !== false ? "minus" : "", t;
  };
  var W = document;
  var L = "http://www.w3.org/2000/svg";
  var ue = function(e, t, n, o = {}) {
    const { anchor: i = "middle", color: s, dataType: r } = o, l = document.createElementNS(L, "text");
    return N(l, {
      "text-anchor": i,
      x: t + "",
      y: n + "",
      fill: s || (i === "middle" ? "rgb(235, 95, 82)" : "#666")
    }), r && (l.dataset.type = r), l.innerHTML = e, l;
  };
  var ze = function(e, t, n) {
    const o = W.createElementNS(L, "path");
    return N(o, {
      d: e,
      stroke: t || "#666",
      fill: "none",
      "stroke-width": n
    }), o;
  };
  var X = function(e) {
    const t = W.createElementNS(L, "svg");
    return t.setAttribute("class", e), t.setAttribute("overflow", "visible"), t;
  };
  var Ae = function() {
    const e = W.createElementNS(L, "line");
    return e.setAttribute("stroke", "#4dc4ff"), e.setAttribute("fill", "none"), e.setAttribute("stroke-width", "2"), e.setAttribute("opacity", "0.45"), e;
  };
  var Tt = function(e, t, n, o) {
    const i = W.createElementNS(L, "g");
    return [
      {
        name: "line",
        d: e
      },
      {
        name: "arrow1",
        d: t
      },
      {
        name: "arrow2",
        d: n
      }
    ].forEach((r, l) => {
      const c = r.d, d = W.createElementNS(L, "path"), f = {
        d: c,
        stroke: (o == null ? void 0 : o.stroke) || "rgb(235, 95, 82)",
        fill: "none",
        "stroke-linecap": (o == null ? void 0 : o.strokeLinecap) || "cap",
        "stroke-width": String((o == null ? void 0 : o.strokeWidth) || "2")
      };
      (o == null ? void 0 : o.opacity) !== void 0 && (f.opacity = String(o.opacity)), N(d, f), l === 0 && d.setAttribute("stroke-dasharray", (o == null ? void 0 : o.strokeDasharray) || "8,2");
      const h = W.createElementNS(L, "path");
      N(h, {
        d: c,
        stroke: "transparent",
        fill: "none",
        "stroke-width": "15"
      }), i.appendChild(h), i.appendChild(d), i[r.name] = d;
    }), i;
  };
  var Ue = function(e, t, n) {
    if (!t)
      return;
    const o = W.createElement("div");
    e.nodes.appendChild(o);
    const i = t.innerHTML;
    o.id = "input-box", o.textContent = i, o.contentEditable = "plaintext-only", o.spellcheck = false;
    const s = t.getBBox();
    o.style.cssText = `
    min-width:${Math.max(88, s.width)}px;
    position:absolute;
    left:${s.x}px;
    top:${s.y}px;
    padding: 2px 4px;
    margin: -2px -4px; 
  `, qe(o), e.scrollIntoView(o), o.addEventListener("keydown", (r) => {
      r.stopPropagation();
      const l = r.key;
      if (l === "Enter" || l === "Tab") {
        if (r.shiftKey)
          return;
        r.preventDefault(), o.blur(), e.container.focus();
      }
    }), o.addEventListener("blur", () => {
      var l;
      if (!o)
        return;
      const r = ((l = o.textContent) == null ? void 0 : l.trim()) || "";
      r === "" ? n.label = i : n.label = r, o.remove(), r !== i && (t.innerHTML = n.label, e.linkDiv(), "parent" in n ? e.bus.fire("operation", {
        name: "finishEditSummary",
        obj: n
      }) : e.bus.fire("operation", {
        name: "finishEditArrowLabel",
        obj: n
      }));
    });
  };
  var Lt = function(e) {
    const t = this.map.querySelector("me-root"), n = t.offsetTop, o = t.offsetLeft, i = t.offsetWidth, s = t.offsetHeight, r = this.map.querySelectorAll("me-main > me-wrapper");
    this.lines.innerHTML = "";
    for (let l = 0; l < r.length; l++) {
      const c = r[l], d = c.querySelector("me-tpc"), { offsetLeft: f, offsetTop: h } = H(this.nodes, d), g = d.offsetWidth, u = d.offsetHeight, a = c.parentNode.className, p = this.generateMainBranch({ pT: n, pL: o, pW: i, pH: s, cT: h, cL: f, cW: g, cH: u, direction: a, containerHeight: this.nodes.offsetHeight }), m = this.theme.palette, v = d.nodeObj.branchColor || m[l % m.length];
      if (d.style.borderColor = v, this.lines.appendChild(ze(p, v, "3")), e && e !== c)
        continue;
      const b = X("subLines"), x = c.lastChild;
      x.tagName === "svg" && x.remove(), c.appendChild(b), Xe(this, b, v, c, a, true);
    }
    this.renderArrow(), this.renderSummary(), this.bus.fire("linkDiv");
  };
  var Xe = function(e, t, n, o, i, s) {
    const r = o.firstChild, l = o.children[1].children;
    if (l.length === 0)
      return;
    const c = r.offsetTop, d = r.offsetLeft, f = r.offsetWidth, h = r.offsetHeight;
    for (let g = 0; g < l.length; g++) {
      const u = l[g], a = u.firstChild, p = a.offsetTop, m = a.offsetLeft, v = a.offsetWidth, b = a.offsetHeight, x = a.firstChild.nodeObj.branchColor || n, S = e.generateSubBranch({ pT: c, pL: d, pW: f, pH: h, cT: p, cL: m, cW: v, cH: b, direction: i, isFirst: s });
      t.appendChild(ze(S, x, "2"));
      const k = a.children[1];
      if (k) {
        if (!k.expanded)
          continue;
      } else
        continue;
      Xe(e, t, x, u, i);
    }
  };
  var Me = {
    addChild: "\u63D2\u5165\u5B50\u8282\u70B9",
    addParent: "\u63D2\u5165\u7236\u8282\u70B9",
    addSibling: "\u63D2\u5165\u540C\u7EA7\u8282\u70B9",
    removeNode: "\u5220\u9664\u8282\u70B9",
    focus: "\u4E13\u6CE8",
    cancelFocus: "\u53D6\u6D88\u4E13\u6CE8",
    moveUp: "\u4E0A\u79FB",
    moveDown: "\u4E0B\u79FB",
    link: "\u8FDE\u63A5",
    linkBidirectional: "\u53CC\u5411\u8FDE\u63A5",
    clickTips: "\u8BF7\u70B9\u51FB\u76EE\u6807\u8282\u70B9",
    summary: "\u6458\u8981"
  };
  var De = {
    cn: Me,
    zh_CN: Me,
    zh_TW: {
      addChild: "\u63D2\u5165\u5B50\u7BC0\u9EDE",
      addParent: "\u63D2\u5165\u7236\u7BC0\u9EDE",
      addSibling: "\u63D2\u5165\u540C\u7D1A\u7BC0\u9EDE",
      removeNode: "\u522A\u9664\u7BC0\u9EDE",
      focus: "\u5C08\u6CE8",
      cancelFocus: "\u53D6\u6D88\u5C08\u6CE8",
      moveUp: "\u4E0A\u79FB",
      moveDown: "\u4E0B\u79FB",
      link: "\u9023\u63A5",
      linkBidirectional: "\u96D9\u5411\u9023\u63A5",
      clickTips: "\u8ACB\u9EDE\u64CA\u76EE\u6A19\u7BC0\u9EDE",
      summary: "\u6458\u8981"
    },
    en: {
      addChild: "Add child",
      addParent: "Add parent",
      addSibling: "Add sibling",
      removeNode: "Remove node",
      focus: "Focus Mode",
      cancelFocus: "Cancel Focus Mode",
      moveUp: "Move up",
      moveDown: "Move down",
      link: "Link",
      linkBidirectional: "Bidirectional Link",
      clickTips: "Please click the target node",
      summary: "Summary"
    },
    ru: {
      addChild: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
      addParent: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
      addSibling: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435",
      removeNode: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0437\u0435\u043B",
      focus: "\u0420\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0438",
      cancelFocus: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0438",
      moveUp: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C \u0432\u044B\u0448\u0435",
      moveDown: "\u041E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0438\u0436\u0435",
      link: "\u0421\u0441\u044B\u043B\u043A\u0430",
      linkBidirectional: "\u0414\u0432\u0443\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430",
      clickTips: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0443\u0437\u0435\u043B",
      summary: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
    },
    ja: {
      addChild: "\u5B50\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B",
      addParent: "\u89AA\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3057\u307E\u3059",
      addSibling: "\u5144\u5F1F\u30CE\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B",
      removeNode: "\u30CE\u30FC\u30C9\u3092\u524A\u9664",
      focus: "\u96C6\u4E2D",
      cancelFocus: "\u96C6\u4E2D\u89E3\u9664",
      moveUp: "\u4E0A\u3078\u79FB\u52D5",
      moveDown: "\u4E0B\u3078\u79FB\u52D5",
      link: "\u30B3\u30CD\u30AF\u30C8",
      linkBidirectional: "\u53CC\u65B9\u5411\u30EA\u30F3\u30AF",
      clickTips: "\u30BF\u30FC\u30B2\u30C3\u30C8\u30CE\u30FC\u30C9\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
      summary: "\u6982\u8981"
    },
    pt: {
      addChild: "Adicionar item filho",
      addParent: "Adicionar item pai",
      addSibling: "Adicionar item irmao",
      removeNode: "Remover item",
      focus: "Modo Foco",
      cancelFocus: "Cancelar Modo Foco",
      moveUp: "Mover para cima",
      moveDown: "Mover para baixo",
      link: "Link",
      linkBidirectional: "Link bidirecional",
      clickTips: "Favor clicar no item alvo",
      summary: "Resumo"
    },
    it: {
      addChild: "Aggiungi figlio",
      addParent: "Aggiungi genitore",
      addSibling: "Aggiungi fratello",
      removeNode: "Rimuovi nodo",
      focus: "Modalit\xE0 Focus",
      cancelFocus: "Annulla Modalit\xE0 Focus",
      moveUp: "Sposta su",
      moveDown: "Sposta gi\xF9",
      link: "Collega",
      linkBidirectional: "Collegamento bidirezionale",
      clickTips: "Si prega di fare clic sul nodo di destinazione",
      summary: "Unisci nodi"
    },
    es: {
      addChild: "Agregar hijo",
      addParent: "Agregar padre",
      addSibling: "Agregar hermano",
      removeNode: "Eliminar nodo",
      focus: "Modo Enfoque",
      cancelFocus: "Cancelar Modo Enfoque",
      moveUp: "Mover hacia arriba",
      moveDown: "Mover hacia abajo",
      link: "Enlace",
      linkBidirectional: "Enlace bidireccional",
      clickTips: "Por favor haga clic en el nodo de destino",
      summary: "Resumen"
    },
    fr: {
      addChild: "Ajout enfant",
      addParent: "Ajout parent",
      addSibling: "Ajout voisin",
      removeNode: "Supprimer",
      focus: "Cibler",
      cancelFocus: "Retour",
      moveUp: "Monter",
      moveDown: "Descendre",
      link: "Lier",
      linkBidirectional: "Lien bidirectionnel",
      clickTips: "Cliquer sur le noeud cible",
      summary: "Annoter"
    },
    ko: {
      addChild: "\uC790\uC2DD \uCD94\uAC00",
      addParent: "\uBD80\uBAA8 \uCD94\uAC00",
      addSibling: "\uD615\uC81C \uCD94\uAC00",
      removeNode: "\uB178\uB4DC \uC0AD\uC81C",
      focus: "\uD3EC\uCEE4\uC2A4 \uBAA8\uB4DC",
      cancelFocus: "\uD3EC\uCEE4\uC2A4 \uBAA8\uB4DC \uCDE8\uC18C",
      moveUp: "\uC704\uB85C \uC774\uB3D9",
      moveDown: "\uC544\uB798\uB85C \uC774\uB3D9",
      link: "\uC5F0\uACB0",
      linkBidirectional: "\uC591\uBC29\uD5A5 \uC5F0\uACB0",
      clickTips: "\uB300\uC0C1 \uB178\uB4DC\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624",
      summary: "\uC694\uC57D"
    }
  };
  function At(e, t) {
    t = t === true ? {
      focus: true,
      link: true
    } : t;
    const n = (y) => {
      const w = document.createElement("div");
      return w.innerText = y, w.className = "tips", w;
    }, o = (y, w, E) => {
      const C = document.createElement("li");
      return C.id = y, C.innerHTML = `<span>${ne(w)}</span><span ${E ? 'class="key"' : ""}>${ne(E)}</span>`, C;
    }, i = De[e.locale] ? e.locale : "en", s = De[i], r = o("cm-add_child", s.addChild, "Tab"), l = o("cm-add_parent", s.addParent, "Ctrl + Enter"), c = o("cm-add_sibling", s.addSibling, "Enter"), d = o("cm-remove_child", s.removeNode, "Delete"), f = o("cm-fucus", s.focus, ""), h = o("cm-unfucus", s.cancelFocus, ""), g = o("cm-up", s.moveUp, "PgUp"), u = o("cm-down", s.moveDown, "Pgdn"), a = o("cm-link", s.link, ""), p = o("cm-link-bidirectional", s.linkBidirectional, ""), m = o("cm-summary", s.summary, ""), v = document.createElement("ul");
    if (v.className = "menu-list", v.appendChild(r), v.appendChild(l), v.appendChild(c), v.appendChild(d), t.focus && (v.appendChild(f), v.appendChild(h)), v.appendChild(g), v.appendChild(u), v.appendChild(m), t.link && (v.appendChild(a), v.appendChild(p)), t && t.extend)
      for (let y = 0; y < t.extend.length; y++) {
        const w = t.extend[y], E = o(w.name, w.name, w.key || "");
        v.appendChild(E), E.onclick = (C) => {
          w.onclick(C);
        };
      }
    const b = document.createElement("div");
    b.className = "context-menu", b.appendChild(v), b.hidden = true, e.container.append(b);
    let x = true;
    const S = (y) => {
      const w = y.target;
      if (he(w)) {
        w.parentElement.tagName === "ME-ROOT" ? x = true : x = false, x ? (f.className = "disabled", g.className = "disabled", u.className = "disabled", l.className = "disabled", c.className = "disabled", d.className = "disabled") : (f.className = "", g.className = "", u.className = "", l.className = "", c.className = "", d.className = ""), b.hidden = false, v.style.top = "", v.style.bottom = "", v.style.left = "", v.style.right = "";
        const E = v.getBoundingClientRect(), C = v.offsetHeight, O = v.offsetWidth, B = y.clientY - E.top, R = y.clientX - E.left;
        C + B > window.innerHeight ? (v.style.top = "", v.style.bottom = "0px") : (v.style.bottom = "", v.style.top = B + 15 + "px"), O + R > window.innerWidth ? (v.style.left = "", v.style.right = "0px") : (v.style.right = "", v.style.left = R + 10 + "px");
      }
    };
    e.bus.addListener("showContextMenu", S), b.onclick = (y) => {
      y.target === b && (b.hidden = true);
    }, r.onclick = () => {
      e.addChild(), b.hidden = true;
    }, l.onclick = () => {
      e.insertParent(), b.hidden = true;
    }, c.onclick = () => {
      x || (e.insertSibling("after"), b.hidden = true);
    }, d.onclick = () => {
      x || (e.removeNodes(e.currentNodes || []), b.hidden = true);
    }, f.onclick = () => {
      x || (e.focusNode(e.currentNode), b.hidden = true);
    }, h.onclick = () => {
      e.cancelFocus(), b.hidden = true;
    }, g.onclick = () => {
      x || (e.moveUpNode(), b.hidden = true);
    }, u.onclick = () => {
      x || (e.moveDownNode(), b.hidden = true);
    };
    const k = (y) => {
      b.hidden = true;
      const w = e.currentNode, E = n(s.clickTips);
      e.container.appendChild(E), e.map.addEventListener(
        "click",
        (C) => {
          C.preventDefault(), E.remove();
          const O = C.target;
          (O.parentElement.tagName === "ME-PARENT" || O.parentElement.tagName === "ME-ROOT") && e.createArrow(w, O, y);
        },
        {
          once: true
        }
      );
    };
    return a.onclick = () => k(), p.onclick = () => k({ bidirectional: true }), m.onclick = () => {
      b.hidden = true, e.createSummary(), e.unselectNodes(e.currentNodes);
    }, () => {
      r.onclick = null, l.onclick = null, c.onclick = null, d.onclick = null, f.onclick = null, h.onclick = null, g.onclick = null, u.onclick = null, a.onclick = null, m.onclick = null, b.onclick = null, e.container.oncontextmenu = null;
    };
  }
  var fe = document;
  var Mt = function(e, t) {
    if (!t)
      return pe(e), e;
    let n = e.querySelector(".insert-preview");
    const o = `insert-preview ${t} show`;
    return n || (n = fe.createElement("div"), e.appendChild(n)), n.className = o, e;
  };
  var pe = function(e) {
    if (!e)
      return;
    const t = e.querySelectorAll(".insert-preview");
    for (const n of t || [])
      n.remove();
  };
  var Oe = function(e, t) {
    for (const n of t) {
      const o = n.parentElement.parentElement.contains(e);
      if (!(e && e.tagName === "ME-TPC" && e !== n && !o && e.nodeObj.parent))
        return false;
    }
    return true;
  };
  var Dt = function(e) {
    const t = document.createElement("div");
    return t.className = "mind-elixir-ghost", e.container.appendChild(t), t;
  };
  var Ot = class {
    constructor(t) {
      z(this, "mind");
      z(this, "isMoving", false);
      z(this, "interval", null);
      z(this, "speed", 20);
      this.mind = t;
    }
    move(t, n) {
      this.isMoving || (this.isMoving = true, this.interval = setInterval(() => {
        this.mind.move(t * this.speed * this.mind.scaleVal, n * this.speed * this.mind.scaleVal);
      }, 100));
    }
    stop() {
      this.isMoving = false, clearInterval(this.interval);
    }
  };
  function Pt(e) {
    let t = null, n = null;
    const o = Dt(e), i = new Ot(e), s = (d) => {
      e.selection.cancel();
      const f = d.target;
      if ((f == null ? void 0 : f.tagName) !== "ME-TPC") {
        d.preventDefault();
        return;
      }
      let h = e.currentNodes;
      h != null && h.includes(f) || (e.selectNode(f), h = e.currentNodes), e.dragged = h, h.length > 1 ? o.innerHTML = h.length + "" : o.innerHTML = f.innerHTML;
      for (const g of h)
        g.parentElement.parentElement.style.opacity = "0.5";
      d.dataTransfer.setDragImage(o, 0, 0), d.dataTransfer.dropEffect = "move", e.dragMoveHelper.clear();
    }, r = (d) => {
      const { dragged: f } = e;
      if (!f)
        return;
      i.stop();
      for (const g of f)
        g.parentElement.parentElement.style.opacity = "1";
      const h = d.target;
      h.style.opacity = "", n && (pe(n), t === "before" ? e.moveNodeBefore(f, n) : t === "after" ? e.moveNodeAfter(f, n) : t === "in" && e.moveNodeIn(f, n), e.dragged = null, o.innerHTML = "");
    }, l = (d) => {
      d.preventDefault();
      const f = 12 * e.scaleVal, { dragged: h } = e;
      if (!h)
        return;
      const g = e.container.getBoundingClientRect();
      d.clientX < g.x + 50 ? i.move(1, 0) : d.clientX > g.x + g.width - 50 ? i.move(-1, 0) : d.clientY < g.y + 50 ? i.move(0, 1) : d.clientY > g.y + g.height - 50 ? i.move(0, -1) : i.stop(), pe(n);
      const u = fe.elementFromPoint(d.clientX, d.clientY - f);
      if (Oe(u, h)) {
        n = u;
        const a = u.getBoundingClientRect(), p = a.y;
        d.clientY > p + a.height ? t = "after" : t = "in";
      } else {
        const a = fe.elementFromPoint(d.clientX, d.clientY + f), p = a.getBoundingClientRect();
        if (Oe(a, h)) {
          n = a;
          const m = p.y;
          d.clientY < m ? t = "before" : t = "in";
        } else
          t = n = null;
      }
      n && Mt(n, t);
    };
    return we([
      { dom: e.map, evt: "dragstart", func: s },
      { dom: e.map, evt: "dragend", func: r },
      { dom: e.map, evt: "dragover", func: l }
    ]);
  }
  var $t = function(e) {
    return ["createSummary", "removeSummary", "finishEditSummary"].includes(e.name) ? {
      type: "summary",
      value: e.obj.id
    } : ["createArrow", "removeArrow", "finishEditArrowLabel"].includes(e.name) ? {
      type: "arrow",
      value: e.obj.id
    } : ["removeNodes", "copyNodes", "moveNodeBefore", "moveNodeAfter", "moveNodeIn"].includes(e.name) ? {
      type: "nodes",
      value: e.objs.map((t) => t.id)
    } : {
      type: "nodes",
      value: [e.obj.id]
    };
  };
  function jt(e) {
    let t = [], n = -1, o = e.getData(), i = [];
    e.undo = function() {
      if (n > -1) {
        const c = t[n];
        o = c.prev, e.refresh(c.prev);
        try {
          c.currentTarget.type === "nodes" && (c.operation === "removeNodes" ? e.selectNodes(c.currentTarget.value.map((d) => this.findEle(d))) : e.selectNodes(c.currentSelected.map((d) => this.findEle(d))));
        } catch {
        } finally {
          n--;
        }
      }
    }, e.redo = function() {
      if (n < t.length - 1) {
        n++;
        const c = t[n];
        o = c.next, e.refresh(c.next);
        try {
          c.currentTarget.type === "nodes" && (c.operation === "removeNodes" ? e.selectNodes(c.currentSelected.map((d) => this.findEle(d))) : e.selectNodes(c.currentTarget.value.map((d) => this.findEle(d))));
        } catch {
        }
      }
    };
    const s = function(c) {
      if (c.name === "beginEdit")
        return;
      t = t.slice(0, n + 1);
      const d = e.getData(), f = {
        prev: o,
        operation: c.name,
        currentSelected: i.map((h) => h.id),
        currentTarget: $t(c),
        next: d
      };
      t.push(f), o = d, n = t.length - 1;
    }, r = function(c) {
      (c.metaKey || c.ctrlKey) && (c.shiftKey && c.key === "Z" || c.key === "y") ? e.redo() : (c.metaKey || c.ctrlKey) && c.key === "z" && e.undo();
    }, l = function(c) {
      i = e.currentNodes.map((d) => d.nodeObj);
    };
    return e.bus.addListener("operation", s), e.bus.addListener("selectNodes", l), e.container.addEventListener("keydown", r), () => {
      e.bus.removeListener("operation", s), e.bus.removeListener("selectNodes", l), e.container.removeEventListener("keydown", r);
    };
  }
  var Ht = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169394918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2021" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M851.91168 328.45312c-59.97056 0-108.6208 48.47104-108.91264 108.36992l-137.92768 38.4a109.14304 109.14304 0 0 0-63.46752-46.58688l1.39264-137.11872c47.29344-11.86816 82.31936-54.66624 82.31936-105.64096 0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.76288-108.91776 108.91776c0 49.18784 32.60928 90.75712 77.38368 104.27392l-1.41312 138.87488a109.19936 109.19936 0 0 0-63.50336 48.55808l-138.93632-39.48544 0.01024-0.72704c0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.75776-108.91776 108.91776c0 60.15488 48.76288 108.91264 108.91776 108.91264 39.3984 0 73.91232-20.92032 93.03552-52.2496l139.19232 39.552-0.00512 0.2304c0 25.8304 9.00096 49.5616 24.02816 68.23424l-90.14272 132.63872a108.7488 108.7488 0 0 0-34.2528-5.504c-60.15488 0-108.91776 48.768-108.91776 108.91776 0 60.16 48.76288 108.91776 108.91776 108.91776 60.16 0 108.92288-48.75776 108.92288-108.91776 0-27.14624-9.9328-51.968-26.36288-71.04l89.04704-131.03104a108.544 108.544 0 0 0 37.6832 6.70208 108.672 108.672 0 0 0 36.48512-6.272l93.13792 132.57216a108.48256 108.48256 0 0 0-24.69888 69.0688c0 60.16 48.768 108.92288 108.91776 108.92288 60.16 0 108.91776-48.76288 108.91776-108.92288 0-60.14976-48.75776-108.91776-108.91776-108.91776a108.80512 108.80512 0 0 0-36.69504 6.3488l-93.07136-132.48a108.48768 108.48768 0 0 0 24.79616-72.22784l136.09984-37.888c18.99008 31.93856 53.84192 53.3504 93.69088 53.3504 60.16 0 108.92288-48.75776 108.92288-108.91264-0.00512-60.15488-48.77312-108.92288-108.92288-108.92288z" p-id="2022"></path></svg>';
  var Bt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169375313" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1775" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M639 463.30000001L639 285.1c0-36.90000001-26.4-68.5-61.3-68.5l-150.2 0c-1.5 0-3 0.1-4.5 0.3-10.2-38.7-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c42 0 77.3-28.6 87.5-67.39999999 1.4 0.3 2.9 0.4 4.5 0.39999999L577.7 263.6c6.8 0 14.3 8.9 14.3 21.49999999l0 427.00000001c0 12.7-7.40000001 21.5-14.30000001 21.5l-150.19999999 0c-1.5 0-3 0.2-4.5 0.4-10.2-38.8-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.4 0 49.9 40.5 90.6 90.5 90.59999999 42 0 77.3-28.6 87.5-67.39999999 1.4 0.2 2.9 0.4 4.49999999 0.4L577.7 780.7c34.80000001 0 61.3-31.6 61.3-68.50000001L639 510.3l79.1 0c10.4 38.5 45.49999999 67 87.4 67 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-41.79999999 0-77.00000001 28.4-87.4 67L639 463.30000001z" fill="currentColor" p-id="1776"></path></svg>';
  var Rt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169667709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3037" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M385 560.69999999L385 738.9c0 36.90000001 26.4 68.5 61.3 68.5l150.2 0c1.5 0 3-0.1 4.5-0.3 10.2 38.7 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-42 0-77.3 28.6-87.5 67.39999999-1.4-0.3-2.9-0.4-4.5-0.39999999L446.3 760.4c-6.8 0-14.3-8.9-14.3-21.49999999l0-427.00000001c0-12.7 7.40000001-21.5 14.30000001-21.5l150.19999999 0c1.5 0 3-0.2 4.5-0.4 10.2 38.8 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.4 0-49.9-40.5-90.6-90.5-90.59999999-42 0-77.3 28.6-87.5 67.39999999-1.4-0.2-2.9-0.4-4.49999999-0.4L446.3 243.3c-34.80000001 0-61.3 31.6-61.3 68.50000001L385 513.7l-79.1 0c-10.4-38.5-45.49999999-67-87.4-67-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c41.79999999 0 77.00000001-28.4 87.4-67L385 560.69999999z" fill="currentColor" p-id="3038"></path></svg>';
  var Ft = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169402629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2170" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z" p-id="2171"></path><path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z" p-id="2172"></path><path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z" p-id="2173"></path><path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z" p-id="2174"></path></svg>';
  var It = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169573443" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2883" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M514.133333 488.533333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="currentColor" p-id="2884"></path><path d="M512 64C264.533333 64 64 264.533333 64 512c0 236.8 183.466667 428.8 416 445.866667v-134.4c-53.333333-59.733333-200.533333-230.4-200.533333-334.933334 0-130.133333 104.533333-234.666667 234.666666-234.666666s234.666667 104.533333 234.666667 234.666666c0 61.866667-49.066667 153.6-145.066667 270.933334l-59.733333 68.266666V960C776.533333 942.933333 960 748.8 960 512c0-247.466667-200.533333-448-448-448z" fill="currentColor" p-id="2885"></path></svg>';
  var Wt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169419447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2480" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z" p-id="2481"></path></svg>';
  var Kt = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1750169426515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2730" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M863.744 544 163.424 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l700.32 0c17.696 0 32 14.336 32 32S881.44 544 863.744 544z" p-id="2731"></path></svg>';
  var Yt = {
    side: Ht,
    left: Bt,
    right: Rt,
    full: Ft,
    living: It,
    zoomin: Wt,
    zoomout: Kt
  };
  var I = (e, t) => {
    const n = document.createElement("span");
    return n.id = e, n.innerHTML = Yt[t], n;
  };
  function Gt(e) {
    const t = document.createElement("div"), n = I("fullscreen", "full"), o = I("toCenter", "living"), i = I("zoomout", "zoomout"), s = I("zoomin", "zoomin"), r = document.createElement("span");
    return r.innerText = "100%", t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(s), t.className = "mind-elixir-toolbar rb", n.onclick = () => {
      document.fullscreenElement === e.el ? document.exitFullscreen() : e.el.requestFullscreen();
    }, o.onclick = () => {
      e.toCenter();
    }, i.onclick = () => {
      e.scale(e.scaleVal - e.scaleSensitivity);
    }, s.onclick = () => {
      e.scale(e.scaleVal + e.scaleSensitivity);
    }, t;
  }
  function Vt(e) {
    const t = document.createElement("div"), n = I("tbltl", "left"), o = I("tbltr", "right"), i = I("tblts", "side");
    return t.appendChild(n), t.appendChild(o), t.appendChild(i), t.className = "mind-elixir-toolbar lt", n.onclick = () => {
      e.initLeft();
    }, o.onclick = () => {
      e.initRight();
    }, i.onclick = () => {
      e.initSide();
    }, t;
  }
  function qt(e) {
    e.container.append(Gt(e)), e.container.append(Vt(e));
  }
  var zt = class {
    constructor() {
      this._listeners = /* @__PURE__ */ new Map(), this.on = this.addEventListener, this.off = this.removeEventListener, this.emit = this.dispatchEvent;
    }
    addEventListener(t, n) {
      const o = this._listeners.get(t) ?? /* @__PURE__ */ new Set();
      return this._listeners.set(t, o), o.add(n), this;
    }
    removeEventListener(t, n) {
      var o;
      return (o = this._listeners.get(t)) == null || o.delete(n), this;
    }
    dispatchEvent(t, ...n) {
      let o = true;
      for (const i of this._listeners.get(t) ?? [])
        o = i(...n) !== false && o;
      return o;
    }
    unbindAllListeners() {
      this._listeners.clear();
    }
  };
  var Pe = (e, t = "px") => typeof e == "number" ? e + t : e;
  var P = ({ style: e }, t, n) => {
    if (typeof t == "object")
      for (const [o, i] of Object.entries(t))
        i !== void 0 && (e[o] = Pe(i));
    else
      n !== void 0 && (e[t] = Pe(n));
  };
  var $e = (e = 0, t = 0, n = 0, o = 0) => {
    const i = { x: e, y: t, width: n, height: o, top: t, left: e, right: e + n, bottom: t + o };
    return { ...i, toJSON: () => JSON.stringify(i) };
  };
  var Ut = (e) => {
    let t, n = -1, o = false;
    return {
      next: (...i) => {
        t = i, o || (o = true, n = requestAnimationFrame(() => {
          e(...t), o = false;
        }));
      },
      cancel: () => {
        cancelAnimationFrame(n), o = false;
      }
    };
  };
  var je = (e, t, n = "touch") => {
    switch (n) {
      case "center": {
        const o = t.left + t.width / 2, i = t.top + t.height / 2;
        return o >= e.left && o <= e.right && i >= e.top && i <= e.bottom;
      }
      case "cover":
        return t.left >= e.left && t.top >= e.top && t.right <= e.right && t.bottom <= e.bottom;
      case "touch":
        return e.right >= t.left && e.left <= t.right && e.bottom >= t.top && e.top <= t.bottom;
    }
  };
  var Xt = () => matchMedia("(hover: none), (pointer: coarse)").matches;
  var Jt = () => "safari" in window;
  var ge = (e) => Array.isArray(e) ? e : [e];
  var Je = (e) => (t, n, o, i = {}) => {
    (t instanceof HTMLCollection || t instanceof NodeList) && (t = Array.from(t)), n = ge(n), t = ge(t);
    for (const s of t)
      if (s)
        for (const r of n)
          s[e](r, o, { capture: false, ...i });
  };
  var $ = Je("addEventListener");
  var A = Je("removeEventListener");
  var Z = (e) => {
    var t;
    const { clientX: n, clientY: o, target: i } = ((t = e.touches) == null ? void 0 : t[0]) ?? e;
    return { x: n, y: o, target: i };
  };
  var Y = (e, t = document) => ge(e).map(
    (n) => typeof n == "string" ? Array.from(t.querySelectorAll(n)) : n instanceof Element ? n : null
  ).flat().filter(Boolean);
  var Zt = (e, t) => t.some((n) => typeof n == "number" ? e.button === n : typeof n == "object" ? n.button !== e.button ? false : n.modifiers.every((o) => {
    switch (o) {
      case "alt":
        return e.altKey;
      case "ctrl":
        return e.ctrlKey || e.metaKey;
      case "shift":
        return e.shiftKey;
    }
  }) : false);
  var { abs: F, max: He, min: Be, ceil: Re } = Math;
  var Fe = (e = []) => ({
    stored: e,
    selected: [],
    touched: [],
    changed: { added: [], removed: [] }
  });
  var Ze = class extends zt {
    constructor(t) {
      var n, o, i, s, r;
      super(), this._selection = Fe(), this._targetBoundaryScrolled = true, this._selectables = [], this._areaLocation = { y1: 0, x2: 0, y2: 0, x1: 0 }, this._areaRect = $e(), this._singleClick = true, this._scrollAvailable = true, this._scrollingActive = false, this._scrollSpeed = { x: 0, y: 0 }, this._scrollDelta = { x: 0, y: 0 }, this._lastMousePosition = { x: 0, y: 0 }, this.enable = this._toggleStartEvents, this.disable = this._toggleStartEvents.bind(this, false), this._options = {
        selectionAreaClass: "selection-area",
        selectionContainerClass: void 0,
        selectables: [],
        document: window.document,
        startAreas: ["html"],
        boundaries: ["html"],
        container: "body",
        ...t,
        behaviour: {
          overlap: "invert",
          intersect: "touch",
          triggers: [0],
          ...t.behaviour,
          startThreshold: (n = t.behaviour) != null && n.startThreshold ? typeof t.behaviour.startThreshold == "number" ? t.behaviour.startThreshold : { x: 10, y: 10, ...t.behaviour.startThreshold } : { x: 10, y: 10 },
          scrolling: {
            speedDivider: 10,
            manualSpeed: 750,
            ...(o = t.behaviour) == null ? void 0 : o.scrolling,
            startScrollMargins: {
              x: 0,
              y: 0,
              ...(s = (i = t.behaviour) == null ? void 0 : i.scrolling) == null ? void 0 : s.startScrollMargins
            }
          }
        },
        features: {
          range: true,
          touch: true,
          deselectOnBlur: false,
          ...t.features,
          singleTap: {
            allow: true,
            intersect: "native",
            ...(r = t.features) == null ? void 0 : r.singleTap
          }
        }
      };
      for (const f of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
        typeof this[f] == "function" && (this[f] = this[f].bind(this));
      const { document: l, selectionAreaClass: c, selectionContainerClass: d } = this._options;
      this._area = l.createElement("div"), this._clippingElement = l.createElement("div"), this._clippingElement.appendChild(this._area), this._area.classList.add(c), d && this._clippingElement.classList.add(d), P(this._area, {
        willChange: "top, left, bottom, right, width, height",
        top: 0,
        left: 0,
        position: "fixed"
      }), P(this._clippingElement, {
        overflow: "hidden",
        position: "fixed",
        transform: "translate3d(0, 0, 0)",
        // https://stackoverflow.com/a/38268846
        pointerEvents: "none",
        zIndex: "1"
      }), this._frame = Ut((f) => {
        this._recalculateSelectionAreaRect(), this._updateElementSelection(), this._emitEvent("move", f), this._redrawSelectionArea();
      }), this.enable();
    }
    _toggleStartEvents(t = true) {
      const { document: n, features: o } = this._options, i = t ? $ : A;
      i(n, "mousedown", this._onTapStart), o.touch && i(n, "touchstart", this._onTapStart, { passive: false });
    }
    _onTapStart(t, n = false) {
      const { x: o, y: i, target: s } = Z(t), { document: r, startAreas: l, boundaries: c, features: d, behaviour: f } = this._options, h = s.getBoundingClientRect();
      if (t instanceof MouseEvent && !Zt(t, f.triggers))
        return;
      const g = Y(l, r), u = Y(c, r);
      this._targetElement = u.find(
        (v) => je(v.getBoundingClientRect(), h)
      );
      const a = t.composedPath(), p = g.find((v) => a.includes(v));
      if (this._targetBoundary = u.find((v) => a.includes(v)), !this._targetElement || !p || !this._targetBoundary || !n && this._emitEvent("beforestart", t) === false)
        return;
      this._areaLocation = { x1: o, y1: i, x2: 0, y2: 0 };
      const m = r.scrollingElement ?? r.body;
      this._scrollDelta = { x: m.scrollLeft, y: m.scrollTop }, this._singleClick = true, this.clearSelection(false, true), $(r, ["touchmove", "mousemove"], this._delayedTapMove, { passive: false }), $(r, ["mouseup", "touchcancel", "touchend"], this._onTapStop), $(r, "scroll", this._onScroll), d.deselectOnBlur && (this._targetBoundaryScrolled = false, $(this._targetBoundary, "scroll", this._onStartAreaScroll));
    }
    _onSingleTap(t) {
      const { singleTap: { intersect: n }, range: o } = this._options.features, i = Z(t);
      let s;
      if (n === "native")
        s = i.target;
      else if (n === "touch") {
        this.resolveSelectables();
        const { x: l, y: c } = i;
        s = this._selectables.find((d) => {
          const { right: f, left: h, top: g, bottom: u } = d.getBoundingClientRect();
          return l < f && l > h && c < u && c > g;
        });
      }
      if (!s)
        return;
      for (this.resolveSelectables(); !this._selectables.includes(s); )
        if (s.parentElement)
          s = s.parentElement;
        else {
          this._targetBoundaryScrolled || this.clearSelection();
          return;
        }
      const { stored: r } = this._selection;
      if (this._emitEvent("start", t), t.shiftKey && o && this._latestElement) {
        const l = this._latestElement, [c, d] = l.compareDocumentPosition(s) & 4 ? [s, l] : [l, s], f = [...this._selectables.filter(
          (h) => h.compareDocumentPosition(c) & 4 && h.compareDocumentPosition(d) & 2
        ), c, d];
        this.select(f), this._latestElement = l;
      } else
        r.includes(s) && (r.length === 1 || t.ctrlKey || r.every((l) => this._selection.stored.includes(l))) ? this.deselect(s) : (this.select(s), this._latestElement = s);
    }
    _delayedTapMove(t) {
      const { container: n, document: o, behaviour: { startThreshold: i } } = this._options, { x1: s, y1: r } = this._areaLocation, { x: l, y: c } = Z(t);
      if (
        // Single number for both coordinates
        typeof i == "number" && F(l + c - (s + r)) >= i || // Different x and y threshold
        typeof i == "object" && F(l - s) >= i.x || F(c - r) >= i.y
      ) {
        if (A(o, ["mousemove", "touchmove"], this._delayedTapMove, { passive: false }), this._emitEvent("beforedrag", t) === false) {
          A(o, ["mouseup", "touchcancel", "touchend"], this._onTapStop);
          return;
        }
        $(o, ["mousemove", "touchmove"], this._onTapMove, { passive: false }), P(this._area, "display", "block"), Y(n, o)[0].appendChild(this._clippingElement), this.resolveSelectables(), this._singleClick = false, this._targetRect = this._targetElement.getBoundingClientRect(), this._scrollAvailable = this._targetElement.scrollHeight !== this._targetElement.clientHeight || this._targetElement.scrollWidth !== this._targetElement.clientWidth, this._scrollAvailable && ($(this._targetElement, "wheel", this._wheelScroll, { passive: false }), $(this._options.document, "keydown", this._keyboardScroll, { passive: false }), this._selectables = this._selectables.filter((d) => this._targetElement.contains(d))), this._setupSelectionArea(), this._emitEvent("start", t), this._onTapMove(t);
      }
      this._handleMoveEvent(t);
    }
    _setupSelectionArea() {
      const { _clippingElement: t, _targetElement: n, _area: o } = this, i = this._targetRect = n.getBoundingClientRect();
      this._scrollAvailable ? (P(t, {
        top: i.top,
        left: i.left,
        width: i.width,
        height: i.height
      }), P(o, {
        marginTop: -i.top,
        marginLeft: -i.left
      })) : (P(t, {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }), P(o, {
        marginTop: 0,
        marginLeft: 0
      }));
    }
    _onTapMove(t) {
      const { _scrollSpeed: n, _areaLocation: o, _options: i, _frame: s } = this, { speedDivider: r } = i.behaviour.scrolling, l = this._targetElement, { x: c, y: d } = Z(t);
      if (o.x2 = c, o.y2 = d, this._lastMousePosition.x = c, this._lastMousePosition.y = d, this._scrollAvailable && !this._scrollingActive && (n.y || n.x)) {
        this._scrollingActive = true;
        const f = () => {
          if (!n.x && !n.y) {
            this._scrollingActive = false;
            return;
          }
          const { scrollTop: h, scrollLeft: g } = l;
          n.y && (l.scrollTop += Re(n.y / r), o.y1 -= l.scrollTop - h), n.x && (l.scrollLeft += Re(n.x / r), o.x1 -= l.scrollLeft - g), s.next(t), requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      } else
        s.next(t);
      this._handleMoveEvent(t);
    }
    _handleMoveEvent(t) {
      const { features: n } = this._options;
      (n.touch && Xt() || this._scrollAvailable && Jt()) && t.preventDefault();
    }
    _onScroll() {
      const { _scrollDelta: t, _options: { document: n } } = this, { scrollTop: o, scrollLeft: i } = n.scrollingElement ?? n.body;
      this._areaLocation.x1 += t.x - i, this._areaLocation.y1 += t.y - o, t.x = i, t.y = o, this._setupSelectionArea(), this._frame.next(null);
    }
    _onStartAreaScroll() {
      this._targetBoundaryScrolled = true, A(this._targetElement, "scroll", this._onStartAreaScroll);
    }
    _wheelScroll(t) {
      const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.deltaY ? t.deltaY > 0 ? 1 : -1 : 0, i = t.deltaX ? t.deltaX > 0 ? 1 : -1 : 0;
      this._scrollSpeed.y += o * n, this._scrollSpeed.x += i * n, this._onTapMove(t), t.preventDefault();
    }
    _keyboardScroll(t) {
      const { manualSpeed: n } = this._options.behaviour.scrolling, o = t.key === "ArrowLeft" ? -1 : t.key === "ArrowRight" ? 1 : 0, i = t.key === "ArrowUp" ? -1 : t.key === "ArrowDown" ? 1 : 0;
      this._scrollSpeed.x += Math.sign(o) * n, this._scrollSpeed.y += Math.sign(i) * n, t.preventDefault(), this._onTapMove({
        clientX: this._lastMousePosition.x,
        clientY: this._lastMousePosition.y,
        preventDefault: () => {
        }
      });
    }
    _recalculateSelectionAreaRect() {
      const { _scrollSpeed: t, _areaLocation: n, _targetElement: o, _options: i } = this, { scrollTop: s, scrollHeight: r, clientHeight: l, scrollLeft: c, scrollWidth: d, clientWidth: f } = o, h = this._targetRect, { x1: g, y1: u } = n;
      let { x2: a, y2: p } = n;
      const { behaviour: { scrolling: { startScrollMargins: m } } } = i;
      a < h.left + m.x ? (t.x = c ? -F(h.left - a + m.x) : 0, a = a < h.left ? h.left : a) : a > h.right - m.x ? (t.x = d - c - f ? F(h.left + h.width - a - m.x) : 0, a = a > h.right ? h.right : a) : t.x = 0, p < h.top + m.y ? (t.y = s ? -F(h.top - p + m.y) : 0, p = p < h.top ? h.top : p) : p > h.bottom - m.y ? (t.y = r - s - l ? F(h.top + h.height - p - m.y) : 0, p = p > h.bottom ? h.bottom : p) : t.y = 0;
      const v = Be(g, a), b = Be(u, p), x = He(g, a), S = He(u, p);
      this._areaRect = $e(v, b, x - v, S - b);
    }
    _redrawSelectionArea() {
      const { x: t, y: n, width: o, height: i } = this._areaRect, { style: s } = this._area;
      s.left = `${t}px`, s.top = `${n}px`, s.width = `${o}px`, s.height = `${i}px`;
    }
    _onTapStop(t, n) {
      var o;
      const { document: i, features: s } = this._options, { _singleClick: r } = this;
      A(this._targetElement, "scroll", this._onStartAreaScroll), A(i, ["mousemove", "touchmove"], this._delayedTapMove), A(i, ["touchmove", "mousemove"], this._onTapMove), A(i, ["mouseup", "touchcancel", "touchend"], this._onTapStop), A(i, "scroll", this._onScroll), this._keepSelection(), t && r && s.singleTap.allow ? this._onSingleTap(t) : !r && !n && (this._updateElementSelection(), this._emitEvent("stop", t)), this._scrollSpeed.x = 0, this._scrollSpeed.y = 0, A(this._targetElement, "wheel", this._wheelScroll, { passive: true }), A(this._options.document, "keydown", this._keyboardScroll, { passive: true }), this._clippingElement.remove(), (o = this._frame) == null || o.cancel(), P(this._area, "display", "none");
    }
    _updateElementSelection() {
      const { _selectables: t, _options: n, _selection: o, _areaRect: i } = this, { stored: s, selected: r, touched: l } = o, { intersect: c, overlap: d } = n.behaviour, f = d === "invert", h = [], g = [], u = [];
      for (let p = 0; p < t.length; p++) {
        const m = t[p];
        if (je(i, m.getBoundingClientRect(), c)) {
          if (r.includes(m))
            s.includes(m) && !l.includes(m) && l.push(m);
          else if (f && s.includes(m)) {
            u.push(m);
            continue;
          } else
            g.push(m);
          h.push(m);
        }
      }
      f && g.push(...s.filter((p) => !r.includes(p)));
      const a = d === "keep";
      for (let p = 0; p < r.length; p++) {
        const m = r[p];
        !h.includes(m) && !// Check if the user wants to keep previously selected elements, e.g.,
        // not make them part of the current selection as soon as they're touched.
        (a && s.includes(m)) && u.push(m);
      }
      o.selected = h, o.changed = { added: g, removed: u }, this._latestElement = void 0;
    }
    _emitEvent(t, n) {
      return this.emit(t, {
        event: n,
        store: this._selection,
        selection: this
      });
    }
    _keepSelection() {
      const { _options: t, _selection: n } = this, { selected: o, changed: i, touched: s, stored: r } = n, l = o.filter((c) => !r.includes(c));
      switch (t.behaviour.overlap) {
        case "drop": {
          n.stored = [
            ...l,
            ...r.filter((c) => !s.includes(c))
            // Elements not touched
          ];
          break;
        }
        case "invert": {
          n.stored = [
            ...l,
            ...r.filter((c) => !i.removed.includes(c))
            // Elements not removed from selection
          ];
          break;
        }
        case "keep": {
          n.stored = [
            ...r,
            ...o.filter((c) => !r.includes(c))
            // Newly added
          ];
          break;
        }
      }
    }
    /**
     * Manually triggers the start of a selection
     * @param evt A MouseEvent / TouchEvent-like object
     * @param silent If beforestart should be fired
     */
    trigger(t, n = true) {
      this._onTapStart(t, n);
    }
    /**
     * Can be used if during a selection elements have been added
     * Will update everything that can be selected
     */
    resolveSelectables() {
      this._selectables = Y(this._options.selectables, this._options.document);
    }
    /**
     * Same as deselecting, but for all elements currently selected
     * @param includeStored If the store should also get cleared
     * @param quiet If move / stop events should be fired
     */
    clearSelection(t = true, n = false) {
      const { selected: o, stored: i, changed: s } = this._selection;
      s.added = [], s.removed.push(
        ...o,
        ...t ? i : []
      ), n || (this._emitEvent("move", null), this._emitEvent("stop", null)), this._selection = Fe(t ? [] : i);
    }
    /**
     * @returns {Array} Selected elements
     */
    getSelection() {
      return this._selection.stored;
    }
    /**
     * @returns {HTMLElement} The selection area element
     */
    getSelectionArea() {
      return this._area;
    }
    /**
     * @returns {Element[]} Available selectable elements for current selection
     */
    getSelectables() {
      return this._selectables;
    }
    /**
     * Set the location of the selection area
     * @param location A partial AreaLocation object
     */
    setAreaLocation(t) {
      Object.assign(this._areaLocation, t), this._redrawSelectionArea();
    }
    /**
     * @returns {AreaLocation} The current location of the selection area
     */
    getAreaLocation() {
      return this._areaLocation;
    }
    /**
     * Cancel the current selection process, pass true to fire a stop event after cancel
     * @param keepEvent If a stop event should be fired
     */
    cancel(t = false) {
      this._onTapStop(null, !t);
    }
    /**
     * Unbinds all events and removes the area-element.
     */
    destroy() {
      this.cancel(), this.disable(), this._clippingElement.remove(), super.unbindAllListeners();
    }
    /**
     * Adds elements to the selection
     * @param query CSS Query, can be an array of queries
     * @param quiet If this should not trigger the move event
     */
    select(t, n = false) {
      const { changed: o, selected: i, stored: s } = this._selection, r = Y(t, this._options.document).filter(
        (l) => !i.includes(l) && !s.includes(l)
      );
      return s.push(...r), i.push(...r), o.added.push(...r), o.removed = [], this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null)), r;
    }
    /**
     * Removes a particular element from the selection
     * @param query CSS Query, can be an array of queries
     * @param quiet If this should not trigger the move event
     */
    deselect(t, n = false) {
      const { selected: o, stored: i, changed: s } = this._selection, r = Y(t, this._options.document).filter(
        (l) => o.includes(l) || i.includes(l)
      );
      this._selection.stored = i.filter((l) => !r.includes(l)), this._selection.selected = o.filter((l) => !r.includes(l)), this._selection.changed.added = [], this._selection.changed.removed.push(
        ...r.filter((l) => !s.removed.includes(l))
      ), this._latestElement = void 0, n || (this._emitEvent("move", null), this._emitEvent("stop", null));
    }
  };
  Ze.version = "3.9.0";
  var Qt = Ze;
  function en(e) {
    const t = e.mouseSelectionButton === 2 ? [2] : [0], n = new Qt({
      selectables: [".map-container me-tpc"],
      boundaries: [e.container],
      container: e.selectionContainer,
      features: {
        // deselectOnBlur: true,
        touch: false
      },
      behaviour: {
        triggers: t,
        // Scroll configuration.
        scrolling: {
          // On scrollable areas the number on px per frame is devided by this amount.
          // Default is 10 to provide a enjoyable scroll experience.
          speedDivider: 10,
          // Browsers handle mouse-wheel events differently, this number will be used as
          // numerator to calculate the mount of px while scrolling manually: manualScrollSpeed / scrollSpeedDivider.
          manualSpeed: 750,
          // This property defines the virtual inset margins from the borders of the container
          // component that, when crossed by the mouse/touch, trigger the scrolling. Useful for
          // fullscreen containers.
          startScrollMargins: { x: 10, y: 10 }
        }
      }
    }).on("beforestart", ({ event: o }) => {
      var r;
      const i = o.target;
      if (i.id === "input-box" || i.className === "circle" || (r = e.container.querySelector(".context-menu")) != null && r.contains(i))
        return false;
      if (!o.ctrlKey && !o.metaKey) {
        if (i.tagName === "ME-TPC" && i.classList.contains("selected"))
          return false;
        e.clearSelection();
      }
      const s = n.getSelectionArea();
      return s.style.background = "#4f90f22d", s.style.border = "1px solid #4f90f2", s.parentElement && (s.parentElement.style.zIndex = "9999"), true;
    }).on(
      "move",
      ({
        store: {
          changed: { added: o, removed: i }
        }
      }) => {
        if (o.length > 0 || i.length > 0, o.length > 0) {
          for (const s of o)
            s.className = "selected";
          e.currentNodes = [...e.currentNodes, ...o], e.bus.fire(
            "selectNodes",
            o.map((s) => s.nodeObj)
          );
        }
        if (i.length > 0) {
          for (const s of i)
            s.classList.remove("selected");
          e.currentNodes = e.currentNodes.filter((s) => !(i != null && i.includes(s))), e.bus.fire(
            "unselectNodes",
            i.map((s) => s.nodeObj)
          );
        }
      }
    );
    e.selection = n;
  }
  var tn = function(e, t = true) {
    this.theme = e;
    const o = {
      ...(e.type === "dark" ? ve : me).cssVar,
      ...e.cssVar
    }, i = Object.keys(o);
    for (let s = 0; s < i.length; s++) {
      const r = i[s];
      this.container.style.setProperty(r, o[r]);
    }
    t && this.refresh();
  };
  var q = (e) => {
    var o;
    const t = (o = e.parent) == null ? void 0 : o.children, n = (t == null ? void 0 : t.indexOf(e)) ?? 0;
    return { siblings: t, index: n };
  };
  function nn(e) {
    const { siblings: t, index: n } = q(e);
    if (t === void 0)
      return;
    const o = t[n];
    n === 0 ? (t[n] = t[t.length - 1], t[t.length - 1] = o) : (t[n] = t[n - 1], t[n - 1] = o);
  }
  function on(e) {
    const { siblings: t, index: n } = q(e);
    if (t === void 0)
      return;
    const o = t[n];
    n === t.length - 1 ? (t[n] = t[0], t[0] = o) : (t[n] = t[n + 1], t[n + 1] = o);
  }
  function Qe(e) {
    const { siblings: t, index: n } = q(e);
    return t === void 0 ? 0 : (t.splice(n, 1), t.length);
  }
  function sn(e, t, n) {
    const { siblings: o, index: i } = q(n);
    o !== void 0 && (t === "before" ? o.splice(i, 0, e) : o.splice(i + 1, 0, e));
  }
  function rn(e, t) {
    const { siblings: n, index: o } = q(e);
    n !== void 0 && (n[o] = t, t.children = [e]);
  }
  function et(e, t, n) {
    var o;
    if (Qe(t), (o = n.parent) != null && o.parent || (t.direction = n.direction), e === "in")
      n.children ? n.children.push(t) : n.children = [t];
    else {
      t.direction !== void 0 && (t.direction = n.direction);
      const { siblings: i, index: s } = q(n);
      if (i === void 0)
        return;
      e === "before" ? i.splice(s, 0, t) : i.splice(s + 1, 0, t);
    }
  }
  var ln = function({ map: e, direction: t }, n) {
    var o, i;
    if (t === 0)
      return 0;
    if (t === 1)
      return 1;
    if (t === 2) {
      const s = ((o = e.querySelector(".lhs")) == null ? void 0 : o.childElementCount) || 0, r = ((i = e.querySelector(".rhs")) == null ? void 0 : i.childElementCount) || 0;
      return s <= r ? (n.direction = 0, 0) : (n.direction = 1, 1);
    }
  };
  var tt = function(e, t, n) {
    var s, r;
    const o = n.children[0].children[0], i = t.parentElement;
    if (i.tagName === "ME-PARENT") {
      if (J(o), i.children[1])
        i.nextSibling.appendChild(n);
      else {
        const l = e.createChildren([n]);
        i.appendChild(Ee(true)), i.insertAdjacentElement("afterend", l);
      }
      e.linkDiv(n.offsetParent);
    } else
      i.tagName === "ME-ROOT" && (ln(e, o.nodeObj) === 0 ? (s = e.container.querySelector(".lhs")) == null || s.appendChild(n) : (r = e.container.querySelector(".rhs")) == null || r.appendChild(n), e.linkDiv());
  };
  var cn = function(e, t) {
    const n = e.parentNode;
    if (t === 0) {
      const o = n.parentNode.parentNode;
      o.tagName !== "ME-MAIN" && (o.previousSibling.children[1].remove(), o.remove());
    }
    n.parentNode.remove();
  };
  var nt = {
    before: "beforebegin",
    after: "afterend"
  };
  var J = function(e) {
    const n = e.parentElement.parentElement.lastElementChild;
    (n == null ? void 0 : n.tagName) === "svg" && (n == null || n.remove());
  };
  var an = function(e, t) {
    const n = e.nodeObj, o = ye(n);
    o.style && t.style && (t.style = Object.assign(o.style, t.style));
    const i = Object.assign(n, t);
    xe(e, i), this.linkDiv(), this.bus.fire("operation", {
      name: "reshapeNode",
      obj: i,
      origin: o
    });
  };
  var Ce = function(e, t, n) {
    if (!t)
      return null;
    const o = t.nodeObj;
    o.expanded === false && (e.expandNode(t, true), t = e.findEle(o.id));
    const i = n || e.generateNewObj();
    o.children ? o.children.push(i) : o.children = [i], j(e.nodeData);
    const { grp: s, top: r } = e.createWrapper(i);
    return tt(e, t, s), { newTop: r, newNodeObj: i };
  };
  var dn = function(e, t, n) {
    var d, f, h, g;
    const o = t || this.currentNode;
    if (!o)
      return;
    const i = o.nodeObj;
    if (i.parent) {
      if (!((d = i.parent) != null && d.parent) && ((h = (f = i.parent) == null ? void 0 : f.children) == null ? void 0 : h.length) === 1 && this.direction === 2) {
        this.addChild(this.findEle(i.parent.id), n);
        return;
      }
    } else {
      this.addChild();
      return;
    }
    const s = n || this.generateNewObj();
    if (!((g = i.parent) != null && g.parent)) {
      const u = o.closest("me-main").className === M.LHS ? 0 : 1;
      s.direction = u;
    }
    sn(s, e, i), j(this.nodeData);
    const r = o.parentElement, { grp: l, top: c } = this.createWrapper(s);
    r.parentElement.insertAdjacentElement(nt[e], l), this.linkDiv(l.offsetParent), n || this.editTopic(c.firstChild), this.bus.fire("operation", {
      name: "insertSibling",
      type: e,
      obj: s
    }), this.selectNode(c.firstChild, true);
  };
  var hn = function(e, t) {
    const n = e || this.currentNode;
    if (!n)
      return;
    J(n);
    const o = n.nodeObj;
    if (!o.parent)
      return;
    const i = t || this.generateNewObj();
    rn(o, i), j(this.nodeData);
    const s = n.parentElement.parentElement, { grp: r, top: l } = this.createWrapper(i, true);
    l.appendChild(Ee(true)), s.insertAdjacentElement("afterend", r);
    const c = this.createChildren([s]);
    l.insertAdjacentElement("afterend", c), this.linkDiv(), t || this.editTopic(l.firstChild), this.selectNode(l.firstChild, true), this.bus.fire("operation", {
      name: "insertParent",
      obj: i
    });
  };
  var un = function(e, t) {
    const n = e || this.currentNode;
    if (!n)
      return;
    const o = Ce(this, n, t);
    if (!o)
      return;
    const { newTop: i, newNodeObj: s } = o;
    this.bus.fire("operation", {
      name: "addChild",
      obj: s
    }), t || this.editTopic(i.firstChild), this.selectNode(i.firstChild, true);
  };
  var fn = function(e, t) {
    const n = ye(e.nodeObj);
    be(n);
    const o = Ce(this, t, n);
    if (!o)
      return;
    const { newNodeObj: i } = o;
    this.selectNode(this.findEle(i.id)), this.bus.fire("operation", {
      name: "copyNode",
      obj: i
    });
  };
  var pn = function(e, t) {
    e = ce(e);
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o], s = ye(i.nodeObj);
      be(s);
      const r = Ce(this, t, s);
      if (!r)
        return;
      const { newNodeObj: l } = r;
      n.push(l);
    }
    this.unselectNodes(this.currentNodes), this.selectNodes(n.map((o) => this.findEle(o.id))), this.bus.fire("operation", {
      name: "copyNodes",
      objs: n
    });
  };
  var gn = function(e) {
    const t = e || this.currentNode;
    if (!t)
      return;
    const n = t.nodeObj;
    nn(n);
    const o = t.parentNode.parentNode;
    o.parentNode.insertBefore(o, o.previousSibling), this.linkDiv(), this.bus.fire("operation", {
      name: "moveUpNode",
      obj: n
    });
  };
  var mn = function(e) {
    const t = e || this.currentNode;
    if (!t)
      return;
    const n = t.nodeObj;
    on(n);
    const o = t.parentNode.parentNode;
    o.nextSibling ? o.nextSibling.insertAdjacentElement("afterend", o) : o.parentNode.prepend(o), this.linkDiv(), this.bus.fire("operation", {
      name: "moveDownNode",
      obj: n
    });
  };
  var vn = function(e) {
    if (e.length === 0)
      return;
    e = ce(e);
    for (const n of e) {
      const o = n.nodeObj, i = Qe(o);
      cn(n, i);
    }
    const t = e[e.length - 1];
    this.selectNode(this.findEle(t.nodeObj.parent.id)), this.linkDiv(), this.bus.fire("operation", {
      name: "removeNodes",
      objs: e.map((n) => n.nodeObj)
    });
  };
  var bn = function(e, t) {
    e = ce(e);
    const n = t.nodeObj;
    n.expanded === false && (this.expandNode(t, true), t = this.findEle(n.id));
    for (const o of e) {
      const i = o.nodeObj;
      et("in", i, n), j(this.nodeData);
      const s = o.parentElement;
      tt(this, t, s.parentElement);
    }
    this.linkDiv(), this.bus.fire("operation", {
      name: "moveNodeIn",
      objs: e.map((o) => o.nodeObj),
      toObj: n
    });
  };
  var ot = (e, t, n, o) => {
    e = ce(e), t === "after" && (e = e.reverse());
    const i = n.nodeObj, s = [];
    for (const r of e) {
      const l = r.nodeObj;
      et(t, l, i), j(o.nodeData), J(r);
      const c = r.parentElement.parentNode;
      s.includes(c.parentElement) || s.push(c.parentElement), n.parentElement.parentNode.insertAdjacentElement(nt[t], c);
    }
    for (const r of s)
      r.childElementCount === 0 && r.tagName !== "ME-MAIN" && (r.previousSibling.children[1].remove(), r.remove());
    o.linkDiv(), o.bus.fire("operation", {
      name: t === "before" ? "moveNodeBefore" : "moveNodeAfter",
      objs: e.map((r) => r.nodeObj),
      toObj: i
    });
  };
  var yn = function(e, t) {
    ot(e, "before", t, this);
  };
  var wn = function(e, t) {
    ot(e, "after", t, this);
  };
  var xn = function(e) {
    const t = e || this.currentNode;
    t && (t.nodeObj.dangerouslySetInnerHTML || this.editTopic(t));
  };
  var En = function(e, t) {
    e.text.textContent = t, e.nodeObj.topic = t, this.linkDiv();
  };
  var it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addChild: un,
    beginEdit: xn,
    copyNode: fn,
    copyNodes: pn,
    insertParent: hn,
    insertSibling: dn,
    moveDownNode: mn,
    moveNodeAfter: wn,
    moveNodeBefore: yn,
    moveNodeIn: bn,
    moveUpNode: gn,
    removeNodes: vn,
    reshapeNode: an,
    rmSubline: J,
    setNodeTopic: En
  }, Symbol.toStringTag, { value: "Module" }));
  function Cn(e) {
    return {
      nodeData: e.isFocusMode ? e.nodeDataBackup : e.nodeData,
      arrows: e.arrows,
      summaries: e.summaries,
      direction: e.direction,
      theme: e.theme
    };
  }
  var Sn = function(e) {
    const t = this.container, n = e.getBoundingClientRect(), o = t.getBoundingClientRect();
    if (n.top > o.bottom || n.bottom < o.top || n.left > o.right || n.right < o.left) {
      const s = n.left + n.width / 2, r = n.top + n.height / 2, l = o.left + o.width / 2, c = o.top + o.height / 2, d = s - l, f = r - c;
      this.move(-d, -f);
    }
  };
  var Nn = function(e, t, n) {
    this.clearSelection(), this.scrollIntoView(e), this.selection.select(e), t && this.bus.fire("selectNewNode", e.nodeObj);
  };
  var kn = function(e) {
    this.selection.select(e);
  };
  var _n = function(e) {
    this.selection.deselect(e);
  };
  var Tn = function() {
    this.unselectNodes(this.currentNodes), this.unselectSummary(), this.unselectArrow();
  };
  var Ln = function() {
    const e = Cn(this);
    return JSON.stringify(e, (t, n) => {
      if (!(t === "parent" && typeof n != "string"))
        return n;
    });
  };
  var An = function() {
    return JSON.parse(this.getDataString());
  };
  var Mn = function() {
    this.editable = true;
  };
  var Dn = function() {
    this.editable = false;
  };
  var On = function(e, t = { x: 0, y: 0 }) {
    if (e < this.scaleMin || e > this.scaleMax)
      return;
    const n = this.container.getBoundingClientRect(), o = t.x ? t.x - n.left - n.width / 2 : 0, i = t.y ? t.y - n.top - n.height / 2 : 0, { dx: s, dy: r } = st(this), l = this.map.style.transform, { x: c, y: d } = Ge(l), f = c - s, h = d - r, g = this.scaleVal, u = (-o + f) * (1 - e / g), a = (-i + h) * (1 - e / g);
    this.map.style.transform = `translate(${c - u}px, ${d - a}px) scale(${e})`, this.scaleVal = e, this.bus.fire("scale", e);
  };
  var Pn = function() {
    const e = this.nodes.offsetHeight / this.container.offsetHeight, t = this.nodes.offsetWidth / this.container.offsetWidth, n = 1 / Math.max(1, Math.max(e, t));
    this.scaleVal = n, this.map.style.transform = "scale(" + n + ")", this.bus.fire("scale", n);
  };
  var $n = function(e, t) {
    const { map: n, scaleVal: o, bus: i } = this, s = n.style.transform;
    let { x: r, y: l } = Ge(s);
    r += e, l += t, n.style.transform = `translate(${r}px, ${l}px) scale(${o})`, i.fire("move", { dx: e, dy: t });
  };
  var st = (e) => {
    const { container: t, map: n, nodes: o } = e, i = n.querySelector("me-root"), s = i.offsetTop, r = i.offsetLeft, l = i.offsetWidth, c = i.offsetHeight;
    let d, f;
    return e.alignment === "root" ? (d = t.offsetWidth / 2 - r - l / 2, f = t.offsetHeight / 2 - s - c / 2, n.style.transformOrigin = `${r + l / 2}px 50%`) : (d = (t.offsetWidth - o.offsetWidth) / 2, f = (t.offsetHeight - o.offsetHeight) / 2, n.style.transformOrigin = "50% 50%"), { dx: d, dy: f };
  };
  var jn = function() {
    const { map: e } = this, { dx: t, dy: n } = st(this);
    e.style.transform = `translate(${t}px, ${n}px) scale(${this.scaleVal})`;
  };
  var Hn = function(e) {
    e(this);
  };
  var Bn = function(e) {
    e.nodeObj.parent && (this.clearSelection(), this.tempDirection === null && (this.tempDirection = this.direction), this.isFocusMode || (this.nodeDataBackup = this.nodeData, this.isFocusMode = true), this.nodeData = e.nodeObj, this.initRight(), this.toCenter());
  };
  var Rn = function() {
    this.isFocusMode = false, this.tempDirection !== null && (this.nodeData = this.nodeDataBackup, this.direction = this.tempDirection, this.tempDirection = null, this.refresh(), this.toCenter());
  };
  var Fn = function() {
    this.direction = 0, this.refresh(), this.toCenter();
  };
  var In = function() {
    this.direction = 1, this.refresh(), this.toCenter();
  };
  var Wn = function() {
    this.direction = 2, this.refresh(), this.toCenter();
  };
  var Kn = function(e) {
    this.locale = e, this.refresh();
  };
  var Yn = function(e, t) {
    const n = e.nodeObj;
    typeof t == "boolean" ? n.expanded = t : n.expanded !== false ? n.expanded = false : n.expanded = true;
    const o = e.parentNode, i = o.children[1];
    if (i.expanded = n.expanded, i.className = n.expanded ? "minus" : "", J(e), n.expanded) {
      const c = this.createChildren(
        n.children.map((d) => this.createWrapper(d).grp)
      );
      o.parentNode.appendChild(c);
    } else
      o.parentNode.children[1].remove();
    this.linkDiv(e.closest("me-main > me-wrapper"));
    const s = e.getBoundingClientRect(), r = this.container.getBoundingClientRect();
    (s.bottom > r.bottom || s.top < r.top || s.right > r.right || s.left < r.left) && this.scrollIntoView(e), this.bus.fire("expandNode", n);
  };
  var Gn = function(e, t) {
    const n = e.nodeObj;
    V(n, t ?? !n.expanded), this.refresh();
  };
  var Vn = function(e) {
    this.clearSelection(), e && (e = JSON.parse(JSON.stringify(e)), this.nodeData = e.nodeData, this.arrows = e.arrows || [], this.summaries = e.summaries || [], e.theme && this.changeTheme(e.theme)), j(this.nodeData), this.layout(), this.linkDiv();
  };
  var qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    cancelFocus: Rn,
    clearSelection: Tn,
    disableEdit: Dn,
    enableEdit: Mn,
    expandNode: Yn,
    expandNodeAll: Gn,
    focusNode: Bn,
    getData: An,
    getDataString: Ln,
    initLeft: Fn,
    initRight: In,
    initSide: Wn,
    install: Hn,
    move: $n,
    refresh: Vn,
    scale: On,
    scaleFit: Pn,
    scrollIntoView: Sn,
    selectNode: Nn,
    selectNodes: kn,
    setLocale: Kn,
    toCenter: jn,
    unselectNodes: _n
  }, Symbol.toStringTag, { value: "Module" }));
  var zn = function(e) {
    return {
      dom: e,
      moved: false,
      // differentiate click and move
      pointerdown: false,
      lastX: 0,
      lastY: 0,
      handlePointerMove(t) {
        if (this.pointerdown) {
          this.moved = true;
          const n = t.clientX - this.lastX, o = t.clientY - this.lastY;
          this.lastX = t.clientX, this.lastY = t.clientY, this.cb && this.cb(n, o);
        }
      },
      handlePointerDown(t) {
        t.button === 0 && (this.pointerdown = true, this.lastX = t.clientX, this.lastY = t.clientY, this.dom.setPointerCapture(t.pointerId));
      },
      handleClear(t) {
        this.pointerdown = false, t.pointerId !== void 0 && this.dom.releasePointerCapture(t.pointerId);
      },
      cb: null,
      init(t, n) {
        this.cb = n, this.handleClear = this.handleClear.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this), this.handlePointerDown = this.handlePointerDown.bind(this), this.destroy = we([
          { dom: t, evt: "pointermove", func: this.handlePointerMove },
          { dom: t, evt: "pointerleave", func: this.handleClear },
          { dom: t, evt: "pointerup", func: this.handleClear },
          { dom: this.dom, evt: "pointerdown", func: this.handlePointerDown }
        ]);
      },
      destroy: null,
      clear() {
        this.moved = false, this.pointerdown = false;
      }
    };
  };
  var Ie = {
    create: zn
  };
  var Un = "#4dc4ff";
  function rt(e, t, n, o, i, s, r, l) {
    return {
      x: e / 8 + n * 3 / 8 + i * 3 / 8 + r / 8,
      y: t / 8 + o * 3 / 8 + s * 3 / 8 + l / 8
    };
  }
  function Xn(e, t, n) {
    N(e, {
      x: t + "",
      y: n + ""
    });
  }
  function Q(e, t, n, o, i) {
    N(e, {
      x1: t + "",
      y1: n + "",
      x2: o + "",
      y2: i + ""
    });
  }
  function We(e, t, n, o, i, s, r, l, c, d) {
    var u;
    if (e.line.setAttribute("d", `M ${t} ${n} C ${o} ${i} ${s} ${r} ${l} ${c}`), d.style) {
      const a = d.style;
      a.stroke && e.line.setAttribute("stroke", a.stroke), a.strokeWidth && e.line.setAttribute("stroke-width", String(a.strokeWidth)), a.strokeDasharray && e.line.setAttribute("stroke-dasharray", a.strokeDasharray), a.strokeLinecap && e.line.setAttribute("stroke-linecap", a.strokeLinecap), a.opacity !== void 0 && e.line.setAttribute("opacity", String(a.opacity));
    }
    const f = ie(s, r, l, c);
    if (f && (e.arrow1.setAttribute("d", `M ${f.x1} ${f.y1} L ${l} ${c} L ${f.x2} ${f.y2}`), d.style)) {
      const a = d.style;
      a.stroke && e.arrow1.setAttribute("stroke", a.stroke), a.strokeWidth && e.arrow1.setAttribute("stroke-width", String(a.strokeWidth)), a.strokeLinecap && e.arrow1.setAttribute("stroke-linecap", a.strokeLinecap), a.opacity !== void 0 && e.arrow1.setAttribute("opacity", String(a.opacity));
    }
    if (d.bidirectional) {
      const a = ie(o, i, t, n);
      if (a && (e.arrow2.setAttribute("d", `M ${a.x1} ${a.y1} L ${t} ${n} L ${a.x2} ${a.y2}`), d.style)) {
        const p = d.style;
        p.stroke && e.arrow2.setAttribute("stroke", p.stroke), p.strokeWidth && e.arrow2.setAttribute("stroke-width", String(p.strokeWidth)), p.strokeLinecap && e.arrow2.setAttribute("stroke-linecap", p.strokeLinecap), p.opacity !== void 0 && e.arrow2.setAttribute("opacity", String(p.opacity));
      }
    }
    const { x: h, y: g } = rt(t, n, o, i, s, r, l, c);
    Xn(e.label, h, g), (u = d.style) != null && u.labelColor && e.label.setAttribute("fill", d.style.labelColor), io(e);
  }
  function le(e, t, n) {
    const { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = t.offsetWidth, r = t.offsetHeight, l = o + s / 2, c = i + r / 2, d = l + n.x, f = c + n.y;
    return {
      w: s,
      h: r,
      cx: l,
      cy: c,
      ctrlX: d,
      ctrlY: f
    };
  }
  function G(e) {
    let t, n;
    const o = (e.cy - e.ctrlY) / (e.ctrlX - e.cx);
    return o > e.h / e.w || o < -e.h / e.w ? e.cy - e.ctrlY < 0 ? (t = e.cx - e.h / 2 / o, n = e.cy + e.h / 2) : (t = e.cx + e.h / 2 / o, n = e.cy - e.h / 2) : e.cx - e.ctrlX < 0 ? (t = e.cx + e.w / 2, n = e.cy - e.w * o / 2) : (t = e.cx - e.w / 2, n = e.cy + e.w * o / 2), {
      x: t,
      y: n
    };
  }
  var Se = function(e, t, n, o, i) {
    var w;
    if (!t || !n)
      return;
    const s = le(e, t, o.delta1), r = le(e, n, o.delta2), { x: l, y: c } = G(s), { ctrlX: d, ctrlY: f } = s, { ctrlX: h, ctrlY: g } = r, { x: u, y: a } = G(r), p = ie(h, g, u, a);
    if (!p)
      return;
    const m = `M ${p.x1} ${p.y1} L ${u} ${a} L ${p.x2} ${p.y2}`;
    let v = "";
    if (o.bidirectional) {
      const E = ie(d, f, l, c);
      if (!E)
        return;
      v = `M ${E.x1} ${E.y1} L ${l} ${c} L ${E.x2} ${E.y2}`;
    }
    const b = Tt(`M ${l} ${c} C ${d} ${f} ${h} ${g} ${u} ${a}`, m, v, o.style), { x, y: S } = rt(l, c, d, f, h, g, u, a), k = (w = o.style) == null ? void 0 : w.labelColor, y = ue(o.label, x, S, {
      anchor: "middle",
      color: k,
      dataType: "custom-link"
    });
    b.appendChild(y), b.label = y, b.arrowObj = o, b.dataset.linkid = o.id, e.linkSvgGroup.appendChild(b), i || (e.arrows.push(o), e.currentArrow = b, lt(e, o, s, r));
  };
  var Jn = function(e, t, n = {}) {
    const o = {
      id: K(),
      label: "Custom Link",
      from: e.nodeObj.id,
      to: t.nodeObj.id,
      delta1: {
        x: e.offsetWidth / 2 + 100,
        y: 0
      },
      delta2: {
        x: t.offsetWidth / 2 + 100,
        y: 0
      },
      ...n
    };
    Se(this, e, t, o), this.bus.fire("operation", {
      name: "createArrow",
      obj: o
    });
  };
  var Zn = function(e) {
    ae(this);
    const t = { ...e, id: K() };
    Se(this, this.findEle(t.from), this.findEle(t.to), t), this.bus.fire("operation", {
      name: "createArrow",
      obj: t
    });
  };
  var Qn = function(e) {
    let t;
    if (e ? t = e : t = this.currentArrow, !t)
      return;
    ae(this);
    const n = t.arrowObj.id;
    this.arrows = this.arrows.filter((o) => o.id !== n), t.remove(), this.bus.fire("operation", {
      name: "removeArrow",
      obj: {
        id: n
      }
    });
  };
  var eo = function(e) {
    this.currentArrow = e;
    const t = e.arrowObj, n = this.findEle(t.from), o = this.findEle(t.to), i = le(this, n, t.delta1), s = le(this, o, t.delta2);
    lt(this, t, i, s);
  };
  var to = function() {
    ae(this), this.currentArrow = null;
  };
  var de = function(e, t) {
    const n = document.createElementNS(L, "path");
    return N(n, {
      d: e,
      stroke: t,
      fill: "none",
      "stroke-width": "6",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), n;
  };
  var no = function(e, t) {
    const n = document.createElementNS(L, "g");
    n.setAttribute("class", "arrow-highlight"), n.setAttribute("opacity", "0.45");
    const o = de(e.line.getAttribute("d"), t);
    n.appendChild(o);
    const i = de(e.arrow1.getAttribute("d"), t);
    if (n.appendChild(i), e.arrow2.getAttribute("d")) {
      const s = de(e.arrow2.getAttribute("d"), t);
      n.appendChild(s);
    }
    e.insertBefore(n, e.firstChild);
  };
  var oo = function(e) {
    const t = e.querySelector(".arrow-highlight");
    t && t.remove();
  };
  var io = function(e) {
    const t = e.querySelector(".arrow-highlight");
    if (!t)
      return;
    const n = t.querySelectorAll("path");
    n.length >= 1 && n[0].setAttribute("d", e.line.getAttribute("d")), n.length >= 2 && n[1].setAttribute("d", e.arrow1.getAttribute("d")), n.length >= 3 && e.arrow2.getAttribute("d") && n[2].setAttribute("d", e.arrow2.getAttribute("d"));
  };
  var ae = function(e) {
    var t, n;
    (t = e.helper1) == null || t.destroy(), (n = e.helper2) == null || n.destroy(), e.linkController.style.display = "none", e.P2.style.display = "none", e.P3.style.display = "none", e.currentArrow && oo(e.currentArrow);
  };
  var lt = function(e, t, n, o) {
    const { linkController: i, P2: s, P3: r, line1: l, line2: c, nodes: d, map: f, currentArrow: h, bus: g } = e;
    if (!h)
      return;
    i.style.display = "initial", s.style.display = "initial", r.style.display = "initial", d.appendChild(i), d.appendChild(s), d.appendChild(r), no(h, Un);
    let { x: u, y: a } = G(n), { ctrlX: p, ctrlY: m } = n, { ctrlX: v, ctrlY: b } = o, { x, y: S } = G(o);
    s.style.cssText = `top:${m}px;left:${p}px;`, r.style.cssText = `top:${b}px;left:${v}px;`, Q(l, u, a, p, m), Q(c, v, b, x, S), e.helper1 = Ie.create(s), e.helper2 = Ie.create(r), e.helper1.init(f, (k, y) => {
      p = p + k / e.scaleVal, m = m + y / e.scaleVal;
      const w = G({ ...n, ctrlX: p, ctrlY: m });
      u = w.x, a = w.y, s.style.top = m + "px", s.style.left = p + "px", We(h, u, a, p, m, v, b, x, S, t), Q(l, u, a, p, m), t.delta1.x = p - n.cx, t.delta1.y = m - n.cy, g.fire("updateArrowDelta", t);
    }), e.helper2.init(f, (k, y) => {
      v = v + k / e.scaleVal, b = b + y / e.scaleVal;
      const w = G({ ...o, ctrlX: v, ctrlY: b });
      x = w.x, S = w.y, r.style.top = b + "px", r.style.left = v + "px", We(h, u, a, p, m, v, b, x, S, t), Q(c, v, b, x, S), t.delta2.x = v - o.cx, t.delta2.y = b - o.cy, g.fire("updateArrowDelta", t);
    });
  };
  function so() {
    this.linkSvgGroup.innerHTML = "";
    for (let e = 0; e < this.arrows.length; e++) {
      const t = this.arrows[e];
      try {
        Se(this, this.findEle(t.from), this.findEle(t.to), t, true);
      } catch {
      }
    }
    this.nodes.appendChild(this.linkSvgGroup);
  }
  function ro(e) {
    if (ae(this), !e)
      return;
    const t = e.label;
    Ue(this, t, e.arrowObj);
  }
  function lo() {
    this.arrows = this.arrows.filter((e) => oe(e.from, this.nodeData) && oe(e.to, this.nodeData));
  }
  var co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    createArrow: Jn,
    createArrowFrom: Zn,
    editArrowLabel: ro,
    removeArrow: Qn,
    renderArrow: so,
    selectArrow: eo,
    tidyArrow: lo,
    unselectArrow: to
  }, Symbol.toStringTag, { value: "Module" }));
  var ao = function(e) {
    var c, d;
    if (e.length === 0)
      throw new Error("No selected node.");
    if (e.length === 1) {
      const f = e[0].nodeObj, h = e[0].nodeObj.parent;
      if (!h)
        throw new Error("Can not select root node.");
      const g = h.children.findIndex((u) => f === u);
      return {
        parent: h.id,
        start: g,
        end: g
      };
    }
    let t = 0;
    const n = e.map((f) => {
      let h = f.nodeObj;
      const g = [];
      for (; h.parent; ) {
        const u = h.parent, a = u.children, p = a == null ? void 0 : a.indexOf(h);
        h = u, g.unshift({ node: h, index: p });
      }
      return g.length > t && (t = g.length), g;
    });
    let o = 0;
    e:
      for (; o < t; o++) {
        const f = (c = n[0][o]) == null ? void 0 : c.node;
        for (let h = 1; h < n.length; h++)
          if (((d = n[h][o]) == null ? void 0 : d.node) !== f)
            break e;
      }
    if (!o)
      throw new Error("Can not select root node.");
    const i = n.map((f) => f[o - 1].index).sort(), s = i[0] || 0, r = i[i.length - 1] || 0, l = n[0][o - 1].node;
    if (!l.parent)
      throw new Error("Please select nodes in the same main topic.");
    return {
      parent: l.id,
      start: s,
      end: r
    };
  };
  var ho = function(e) {
    const t = document.createElementNS(L, "g");
    return t.setAttribute("id", e), t;
  };
  var Ke = function(e, t) {
    const n = document.createElementNS(L, "path");
    return N(n, {
      d: e,
      stroke: t || "#666",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-width": "2"
    }), n;
  };
  var uo = (e) => e.parentElement.parentElement;
  var fo = function(e, { parent: t, start: n }) {
    const o = e.findEle(t), i = o.nodeObj;
    let s;
    return i.parent ? s = o.closest("me-main").className : s = e.findEle(i.children[n].id).closest("me-main").className, s;
  };
  var Ne = function(e, t) {
    var E;
    const { id: n, label: o, parent: i, start: s, end: r } = t, { nodes: l, theme: c, summarySvg: d } = e, h = e.findEle(i).nodeObj, g = fo(e, t);
    let u = 1 / 0, a = 0, p = 0, m = 0;
    for (let C = s; C <= r; C++) {
      const O = (E = h.children) == null ? void 0 : E[C];
      if (!O)
        return e.removeSummary(n), null;
      const B = uo(e.findEle(O.id)), { offsetLeft: R, offsetTop: ke } = H(l, B), _e = s === r ? 10 : 20;
      C === s && (p = ke + _e), C === r && (m = ke + B.offsetHeight - _e), R < u && (u = R), B.offsetWidth + R > a && (a = B.offsetWidth + R);
    }
    let v, b;
    const x = p + 10, S = m + 10, k = (x + S) / 2, y = c.cssVar["--color"];
    g === M.LHS ? (v = Ke(`M ${u + 10} ${x} c -5 0 -10 5 -10 10 L ${u} ${S - 10} c 0 5 5 10 10 10 M ${u} ${k} h -10`, y), b = ue(o, u - 20, k + 6, { anchor: "end", color: y })) : (v = Ke(`M ${a - 10} ${x} c 5 0 10 5 10 10 L ${a} ${S - 10} c 0 5 -5 10 -10 10 M ${a} ${k} h 10`, y), b = ue(o, a + 20, k + 6, { anchor: "start", color: y }));
    const w = ho("s-" + n);
    return w.appendChild(v), w.appendChild(b), w.summaryObj = t, d.appendChild(w), w;
  };
  var po = function() {
    if (!this.currentNodes)
      return;
    const { currentNodes: e, summaries: t, bus: n } = this, { parent: o, start: i, end: s } = ao(e), r = { id: K(), parent: o, start: i, end: s, label: "summary" }, l = Ne(this, r);
    t.push(r), this.editSummary(l), n.fire("operation", {
      name: "createSummary",
      obj: r
    });
  };
  var go = function(e) {
    const t = K(), n = { ...e, id: t };
    Ne(this, n), this.summaries.push(n), this.bus.fire("operation", {
      name: "createSummary",
      obj: n
    });
  };
  var mo = function(e) {
    var n;
    const t = this.summaries.findIndex((o) => o.id === e);
    t > -1 && (this.summaries.splice(t, 1), (n = document.querySelector("#s-" + e)) == null || n.remove()), this.bus.fire("operation", {
      name: "removeSummary",
      obj: { id: e }
    });
  };
  var vo = function(e) {
    const t = e.children[1].getBBox(), n = 6, o = 3, i = document.createElementNS(L, "rect");
    N(i, {
      x: t.x - n + "",
      y: t.y - n + "",
      width: t.width + n * 2 + "",
      height: t.height + n * 2 + "",
      rx: o + "",
      stroke: this.theme.cssVar["--selected"] || "#4dc4ff",
      "stroke-width": "2",
      fill: "none"
    }), e.appendChild(i), this.currentSummary = e;
  };
  var bo = function() {
    var e, t;
    (t = (e = this.currentSummary) == null ? void 0 : e.querySelector("rect")) == null || t.remove(), this.currentSummary = null;
  };
  var yo = function() {
    this.summarySvg.innerHTML = "", this.summaries.forEach((e) => {
      try {
        Ne(this, e);
      } catch {
      }
    }), this.nodes.insertAdjacentElement("beforeend", this.summarySvg);
  };
  var wo = function(e) {
    if (!e)
      return;
    const t = e.childNodes[1];
    Ue(this, t, e.summaryObj);
  };
  var xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    createSummary: po,
    createSummaryFrom: go,
    editSummary: wo,
    removeSummary: mo,
    renderSummary: yo,
    selectSummary: vo,
    unselectSummary: bo
  }, Symbol.toStringTag, { value: "Module" }));
  var _ = "http://www.w3.org/2000/svg";
  function Eo(e, t) {
    const n = document.createElementNS(_, "svg");
    return N(n, {
      version: "1.1",
      xmlns: _,
      height: e,
      width: t
    }), n;
  }
  function Co(e, t) {
    return (parseInt(e) - parseInt(t)) / 2;
  }
  function So(e, t, n, o) {
    const i = document.createElementNS(_, "g");
    let s = "";
    return e.text ? s = e.text.textContent : s = e.childNodes[0].textContent, s.split(`
`).forEach((l, c) => {
      const d = document.createElementNS(_, "text");
      N(d, {
        x: n + parseInt(t.paddingLeft) + "",
        y: o + parseInt(t.paddingTop) + Co(t.lineHeight, t.fontSize) * (c + 1) + parseFloat(t.fontSize) * (c + 1) + "",
        "text-anchor": "start",
        "font-family": t.fontFamily,
        "font-size": `${t.fontSize}`,
        "font-weight": `${t.fontWeight}`,
        fill: `${t.color}`
      }), d.innerHTML = l, i.appendChild(d);
    }), i;
  }
  function No(e, t, n, o) {
    var l;
    let i = "";
    (l = e.nodeObj) != null && l.dangerouslySetInnerHTML ? i = e.nodeObj.dangerouslySetInnerHTML : e.text ? i = e.text.textContent : i = e.childNodes[0].textContent;
    const s = document.createElementNS(_, "foreignObject");
    N(s, {
      x: n + parseInt(t.paddingLeft) + "",
      y: o + parseInt(t.paddingTop) + "",
      width: t.width,
      height: t.height
    });
    const r = document.createElement("div");
    return N(r, {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: `font-family: ${t.fontFamily}; font-size: ${t.fontSize}; font-weight: ${t.fontWeight}; color: ${t.color}; white-space: pre-wrap;`
    }), r.innerHTML = i, s.appendChild(r), s;
  }
  function ko(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "rect");
    return N(s, {
      x: o + "",
      y: i + "",
      rx: n.borderRadius,
      ry: n.borderRadius,
      width: n.width,
      height: n.height,
      fill: n.backgroundColor,
      stroke: n.borderColor,
      "stroke-width": n.borderWidth
    }), s;
  }
  function ee(e, t, n = false) {
    const o = getComputedStyle(t), { offsetLeft: i, offsetTop: s } = H(e.nodes, t), r = document.createElementNS(_, "rect");
    N(r, {
      x: i + "",
      y: s + "",
      rx: o.borderRadius,
      ry: o.borderRadius,
      width: o.width,
      height: o.height,
      fill: o.backgroundColor,
      stroke: o.borderColor,
      "stroke-width": o.borderWidth
    });
    const l = document.createElementNS(_, "g");
    l.appendChild(r);
    let c;
    return n ? c = No(t, o, i, s) : c = So(t, o, i, s), l.appendChild(c), l;
  }
  function _o(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "a"), r = document.createElementNS(_, "text");
    return N(r, {
      x: o + "",
      y: i + parseInt(n.fontSize) + "",
      "text-anchor": "start",
      "font-family": n.fontFamily,
      "font-size": `${n.fontSize}`,
      "font-weight": `${n.fontWeight}`,
      fill: `${n.color}`
    }), r.innerHTML = t.textContent, s.appendChild(r), s.setAttribute("href", t.href), s;
  }
  function To(e, t) {
    const n = getComputedStyle(t), { offsetLeft: o, offsetTop: i } = H(e.nodes, t), s = document.createElementNS(_, "image");
    return N(s, {
      x: o + "",
      y: i + "",
      width: n.width + "",
      height: n.height + "",
      href: t.src
    }), s;
  }
  var te = 100;
  var Lo = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
  var Ao = (e, t = false) => {
    var h, g, u;
    const n = e.nodes, o = n.offsetHeight + te * 2, i = n.offsetWidth + te * 2, s = Eo(o + "px", i + "px"), r = document.createElementNS(_, "svg"), l = document.createElementNS(_, "rect");
    N(l, {
      x: "0",
      y: "0",
      width: `${i}`,
      height: `${o}`,
      fill: e.theme.cssVar["--bgcolor"]
    }), s.appendChild(l), n.querySelectorAll(".subLines").forEach((a) => {
      const p = a.cloneNode(true), { offsetLeft: m, offsetTop: v } = H(n, a.parentElement);
      p.setAttribute("x", `${m}`), p.setAttribute("y", `${v}`), r.appendChild(p);
    });
    const c = (h = n.querySelector(".lines")) == null ? void 0 : h.cloneNode(true);
    c && r.appendChild(c);
    const d = (g = n.querySelector(".topiclinks")) == null ? void 0 : g.cloneNode(true);
    d && r.appendChild(d);
    const f = (u = n.querySelector(".summary")) == null ? void 0 : u.cloneNode(true);
    return f && r.appendChild(f), n.querySelectorAll("me-tpc").forEach((a) => {
      a.nodeObj.dangerouslySetInnerHTML ? r.appendChild(ee(e, a, !t)) : (r.appendChild(ko(e, a)), r.appendChild(ee(e, a.text, !t)));
    }), n.querySelectorAll(".tags > span").forEach((a) => {
      r.appendChild(ee(e, a));
    }), n.querySelectorAll(".icons > span").forEach((a) => {
      r.appendChild(ee(e, a));
    }), n.querySelectorAll(".hyper-link").forEach((a) => {
      r.appendChild(_o(e, a));
    }), n.querySelectorAll("img").forEach((a) => {
      r.appendChild(To(e, a));
    }), N(r, {
      x: te + "",
      y: te + "",
      overflow: "visible"
    }), s.appendChild(r), s;
  };
  var Mo = (e, t) => (t && e.insertAdjacentHTML("afterbegin", "<style>" + t + "</style>"), Lo + e.outerHTML);
  function Do(e) {
    return new Promise((t, n) => {
      const o = new FileReader();
      o.onload = (i) => {
        t(i.target.result);
      }, o.onerror = (i) => {
        n(i);
      }, o.readAsDataURL(e);
    });
  }
  var Oo = function(e = false, t) {
    const n = Ao(this, e), o = Mo(n, t);
    return new Blob([o], { type: "image/svg+xml" });
  };
  var Po = async function(e = false, t) {
    const n = this.exportSvg(e, t), o = await Do(n);
    return new Promise((i, s) => {
      const r = new Image();
      r.setAttribute("crossOrigin", "anonymous"), r.onload = () => {
        const l = document.createElement("canvas");
        l.width = r.width, l.height = r.height, l.getContext("2d").drawImage(r, 0, 0), l.toBlob(i, "image/png", 1);
      }, r.src = o, r.onerror = s;
    });
  };
  var $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    exportPng: Po,
    exportSvg: Oo
  }, Symbol.toStringTag, { value: "Module" }));
  function jo(e, t) {
    return async function(...n) {
      const o = this.before[t];
      o && !await o.apply(this, n) || e.apply(this, n);
    };
  }
  var Ye = Object.keys(it);
  var ct = {};
  for (let e = 0; e < Ye.length; e++) {
    const t = Ye[e];
    ct[t] = jo(it[t], t);
  }
  var Ho = {
    getObjById: oe,
    generateNewObj: ht,
    layout: wt,
    linkDiv: Lt,
    editTopic: _t,
    createWrapper: Ct,
    createParent: St,
    createChildren: Nt,
    createTopic: kt,
    findEle: Ve,
    changeTheme: tn,
    ...qn,
    ...ct,
    ...co,
    ...xo,
    ...$o,
    init(e) {
      if (e = JSON.parse(JSON.stringify(e)), !e || !e.nodeData)
        return new Error("MindElixir: `data` is required");
      e.direction !== void 0 && (this.direction = e.direction), this.changeTheme(e.theme || this.theme, false), this.nodeData = e.nodeData, j(this.nodeData), this.arrows = e.arrows || [], this.summaries = e.summaries || [], this.tidyArrow(), this.toolBar && qt(this), this.keypress && vt(this, this.keypress), this.editable && en(this), this.contextMenu && this.disposable.push(At(this, this.contextMenu)), this.draggable && this.disposable.push(Pt(this)), this.allowUndo && this.disposable.push(jt(this)), this.layout(), this.linkDiv(), this.toCenter();
    },
    destroy() {
      var e;
      this.disposable.forEach((t) => t()), this.el && (this.el.innerHTML = ""), this.el = void 0, this.nodeData = void 0, this.arrows = void 0, this.summaries = void 0, this.currentArrow = void 0, this.currentNodes = void 0, this.currentSummary = void 0, this.waitCopy = void 0, this.theme = void 0, this.direction = void 0, this.bus = void 0, this.container = void 0, this.map = void 0, this.lines = void 0, this.linkController = void 0, this.linkSvgGroup = void 0, this.P2 = void 0, this.P3 = void 0, this.line1 = void 0, this.line2 = void 0, this.nodes = void 0, (e = this.selection) == null || e.destroy(), this.selection = void 0;
    }
  };
  function Bo({ pT: e, pL: t, pW: n, pH: o, cT: i, cL: s, cW: r, cH: l, direction: c, containerHeight: d }) {
    let f = t + n / 2;
    const h = e + o / 2;
    let g;
    c === M.LHS ? g = s + r : g = s;
    const u = i + l / 2, p = (1 - Math.abs(u - h) / d) * 0.25 * (n / 2);
    return c === M.LHS ? f = f - n / 10 - p : f = f + n / 10 + p, `M ${f} ${h} Q ${f} ${u} ${g} ${u}`;
  }
  function Ro({ pT: e, pL: t, pW: n, pH: o, cT: i, cL: s, cW: r, cH: l, direction: c, isFirst: d }) {
    const f = parseInt(this.container.style.getPropertyValue("--node-gap-x"));
    let h = 0, g = 0;
    d ? h = e + o / 2 : h = e + o;
    const u = i + l;
    let a = 0, p = 0, m = 0;
    const v = Math.abs(h - u) / 300 * f;
    return c === M.LHS ? (m = t, a = m + f, p = m - f, g = s + f, `M ${a} ${h} C ${m} ${h} ${m + v} ${u} ${p} ${u} H ${g}`) : (m = t + n, a = m - f, p = m + f, g = s + r - f, `M ${a} ${h} C ${m} ${h} ${m - v} ${u} ${p} ${u} H ${g}`);
  }
  var Fo = "5.0.5";
  function Io(e) {
    return {
      x: 0,
      y: 0,
      moved: false,
      // diffrentiate click and move
      mousedown: false,
      onMove(t, n) {
        this.mousedown && (this.moved = true, e.move(t, n));
      },
      clear() {
        this.mousedown = false, e.map.style.transition = "transform 0.3s";
      }
    };
  }
  var U = document;
  function D({
    el: e,
    direction: t,
    locale: n,
    draggable: o,
    editable: i,
    contextMenu: s,
    toolBar: r,
    keypress: l,
    mouseSelectionButton: c,
    selectionContainer: d,
    before: f,
    newTopicName: h,
    allowUndo: g,
    generateMainBranch: u,
    generateSubBranch: a,
    overflowHidden: p,
    theme: m,
    alignment: v,
    scaleSensitivity: b,
    scaleMax: x,
    scaleMin: S,
    handleWheel: k
  }) {
    let y = null;
    const w = Object.prototype.toString.call(e);
    if (w === "[object HTMLDivElement]" ? y = e : w === "[object String]" && (y = document.querySelector(e)), !y)
      throw new Error("MindElixir: el is not a valid element");
    y.style.position = "relative", y.innerHTML = "", this.el = y, this.disposable = [], this.before = f || {}, this.locale = n || "en", this.newTopicName = h || "New Node", this.contextMenu = s ?? true, this.toolBar = r ?? true, this.keypress = l ?? true, this.mouseSelectionButton = c ?? 0, this.direction = t ?? 1, this.draggable = o ?? true, this.editable = i ?? true, this.allowUndo = g ?? true, this.scaleSensitivity = b ?? 0.1, this.scaleMax = x ?? 1.4, this.scaleMin = S ?? 0.2, this.generateMainBranch = u || Bo, this.generateSubBranch = a || Ro, this.overflowHidden = p ?? false, this.alignment = v ?? "root", this.handleWheel = k ?? true, this.currentNodes = [], this.currentArrow = null, this.scaleVal = 1, this.tempDirection = null, this.dragMoveHelper = Io(this), this.bus = yt(), this.container = U.createElement("div"), this.selectionContainer = d || this.container, this.container.className = "map-container";
    const E = window.matchMedia("(prefers-color-scheme: dark)");
    this.theme = m || (E.matches ? ve : me);
    const C = U.createElement("div");
    C.className = "map-canvas", setTimeout(() => {
      C.style.transition = "all 0.3s";
    }, 300), this.map = C, this.container.setAttribute("tabindex", "0"), this.container.appendChild(this.map), this.el.appendChild(this.container), this.nodes = U.createElement("me-nodes"), this.lines = X("lines"), this.summarySvg = X("summary"), this.linkController = X("linkcontroller"), this.P2 = U.createElement("div"), this.P3 = U.createElement("div"), this.P2.className = this.P3.className = "circle", this.P2.style.display = this.P3.style.display = "none", this.line1 = Ae(), this.line2 = Ae(), this.linkController.appendChild(this.line1), this.linkController.appendChild(this.line2), this.linkSvgGroup = X("topiclinks"), this.map.appendChild(this.nodes), this.overflowHidden ? this.container.style.overflow = "hidden" : this.disposable.push(bt(this));
  }
  D.prototype = Ho;
  Object.defineProperty(D.prototype, "currentNode", {
    get() {
      return this.currentNodes[this.currentNodes.length - 1];
    },
    enumerable: true
  });
  D.LEFT = 0;
  D.RIGHT = 1;
  D.SIDE = 2;
  D.THEME = me;
  D.DARK_THEME = ve;
  D.version = Fo;
  D.E = Ve;
  D.new = (e) => ({
    nodeData: {
      id: K(),
      topic: e || "new topic",
      children: []
    }
  });
})();
/*! @viselect/vanilla v3.9.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */
