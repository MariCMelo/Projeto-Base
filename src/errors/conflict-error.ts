export function conflictError(resource?: string) {
  return {
    name: 'conflictError',
    message: `This ${resource || 'Item'} already exist`,
  };
}
