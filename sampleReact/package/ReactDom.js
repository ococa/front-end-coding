import Component from './Component';


const ReactDOM = {

}

const render = (vnode, container) => {
  return container.appendChild(_render(vnode));
}


/**
 * @param $$typeof function, class 组件
 * @param props
 */
const createComponent = ($$typeof, props) => {
  let instance;
  if ($$typeof?.prototype && $$typeof?.prototype?.render) { // 类组件
    instance = new $$typeof(props);
  } else {
    // 如果是函数组件 将函数组件转换成类组件，方便后面统一处理
    instance = new Component(props);
    instance.constructor = $$typeof;
    instance.render = () => {
      return instance.constructor(props);
    }
  }
  return instance;
}


const setComponentProps = (comp, props) => {
  // let base;
  comp.props = props;
  // render Component
  renderComponent(comp)
}

const renderComponent = (comp) => {

  if (!comp.base) {
    comp.componentWillMount && comp.componentWillMount()
  } else if (comp.componentWillReceiveProps) {
    comp.componentWillReceiveProps(comp.props);
  }

  // comp.render === function component() === class Component.render()
  // 返回一个jsx对象
  const renderer = comp.render()

  // 调用我们的_render方法, 返回一个dom对象
  comp.base = _render(renderer);
}

/**
 * 接受一个vnode（jsx对象）返回一个dom节点。
 */
const _render = (vnode) => {
  if (
    vnode === undefined ||
    vnode === null ||
    vnode === '' ||
    typeof vnode === 'boolean'
  ) {
    return;
  }
  if (typeof vnode === 'string') { // vnode = ("some string")
    return document.createTextNode(vnode);
  }

  const { $$typeof, props } = vnode;

  // ## 1. 处理react组件， 渲染组件
  if (typeof $$typeof === 'function') { //
    // 1. 创建组件
    const comp = createComponent($$typeof, props);
    // 2. 设置组件的属性
    setComponentProps(comp, props);
    // 3. 组件渲染的节点对象的返回
    return comp.base;
  }

  // ## 2. 处理dom节点
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
  return dom;
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
