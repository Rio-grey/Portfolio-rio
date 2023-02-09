const render = (component, container) => {
  container.innerHTML = component();
};
const useEffect = () => {
  return `UseEffect`;
};
export { render, useEffect };
