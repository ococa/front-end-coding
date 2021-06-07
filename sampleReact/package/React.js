const React = {
}

const createElement = (type, attrs, ...children) => {

    const { key, ...restAttr } = attrs = {};

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

export default React;
