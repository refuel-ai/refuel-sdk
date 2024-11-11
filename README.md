🚧 This SDK is a work in progress

➡️ See our complete SDK for Python: https://docs.refuel.ai/python-sdk/

## Examples

### Label data with a deployed application

```typescript
import { Refuel } from "refuel-sdk";

const refuel = new Refuel("your_access_token");

const applicationLabels = await refuel.applications.label(
    "your_application_id",
    [{ example: "test" }]
);
```
