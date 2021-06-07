
const ReactDOM = {

}

const render = (vnode, container) => {
  console.log('vnode', vnode)
  if (vnode === undefined) {
    return;
  }
  if (typeof vnode === 'string') { // vnode = ("some string")
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  const { $$typeof, props } = vnode;

  const dom = document.createElement($$typeof);


  if (props) {
    Object.keys(props).filter(x => x !== 'children').forEach(key => {
      const value = props[key];
      setAttribute(dom, key, value);
    })

    // 递归渲染子节点
    const children = props?.children;
    children.forEach(child => render(child, dom))
  }


  return container.appendChild(dom)

  // container.innerHTML = vnode;
}

function setAttribute(dom, key, value) {
  // 处理classname
  if (key === 'className') {
    key = 'class';
  }
  // handle event
  if (/on\w+/.test(key)) {
    key.toLowerCase();
    dom[key] = value || '';
  } else if (key === 'style') { // handle style setting
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (let k in value) {
        if (typeof value[k] === 'number') {
          dom.style[k] = value[k] + 'px';
        } else {
          dom.style[k] = value[k];
        }
      }
    }
  } else { // other attrs
    if (key in dom) {
      dom[key] = value || '';
    }
    if (value) {
      // 更新值
      dom.setAttribute(key, value);
    } else {
      dom.removeAttribute(key);
    }
  }
}

ReactDOM.render = render;

export default ReactDOM;
