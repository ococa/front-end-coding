import Component from './Component';

const React = {}

const createElement = (type, attrs = {}, ...children) => {
  if (attrs === null) {
    attrs = {};
  }
  const { key, ...restAttr } = attrs;
  return {
    type: type,
    props: {
      children,
      ...restAttr,
    },
    $$typeof: type,
    key,
  }
}

React.createElement = createElement;
React.Component = Component;

export default React;
