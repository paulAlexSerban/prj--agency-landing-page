export default class Component {
  constructor(el) {
    this.el = el;
    this.elements = {};
    this.data = {};
    this.plugins = {};
  }

  register(plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  }
}
