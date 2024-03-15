export function getNode(selector: string, context = document) {
  return context.querySelector(selector);
}

export function getNodeList(selector: string, context = document) {
  return context.querySelectorAll(selector);
}
