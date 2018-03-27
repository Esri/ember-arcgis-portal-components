# TODO List

## Item Row
- remove event stuff

## Validation

Returning an object like
```json
{
  "model": {...},
  "status": {
    "status": "warning"
  }
}
```
seems goofy. We should change the internal `.status` to `.value` or the outer to `.validation`.


## Extension

- add a means to specify a preview component
