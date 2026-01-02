function process(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}

function (message: unknown) {
  if (typeof message == 'string') {
    return 'message is a string';
  if (typeof message == 'number') {
    return 'message is a number';
  }
  }
}