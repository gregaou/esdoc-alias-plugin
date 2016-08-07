let option;

/**
 * take option
 * @param {Object} ev - handle event.
 */
export function onStart(ev) {
  option = ev.data.option;
  for (let item of option.replaces) {
    item.from = new RegExp(item.from);
  }
}

/**
 * replace source.value in AST node with ImportDeclaration type using option.replaces.
 * @param {Object} ev - handle event.
 */
export function onHandleAST(ev) {
  let ast = ev.data.ast;
  for (let node of ast.body) {
    if (node.type !== 'ImportDeclaration') continue;

    if (node.source && node.source.value) {
      const tmp = node.source.value
      for (let item of option.replaces) {
        node.source.value = node.source.value.replace(item.from, item.to)
      }
      if (tmp !== node.source.value) {
        node.source.value = node.source.value + ".js"
      }
    }
  }
}
