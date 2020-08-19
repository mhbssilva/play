const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(window.location, "assign", {
  configurable: true,
});
Object.defineProperty(window.location, "replace", {
  configurable: true,
});
window.location.assign = jest.fn();
window.location.replace = jest.fn();
