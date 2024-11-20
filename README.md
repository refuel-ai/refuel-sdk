🚧 This SDK is a work in progress

➡️ See our complete SDK for Python: https://docs.refuel.ai/python-sdk/

## Examples

### Label data with a deployed application

```typescript
import { Refuel } from "refuel-sdk";

const refuel = new Refuel("your_access_token");

const applicationLabels = await refuel.applications.label(
    "your_application_id",
    [
        // Data to label
        {
            menu_text:
                "Grilled chicken sandwich with avocado and chipotle mayo",
        },
    ]
);
```

### Update label from application response

```typescript
import { Refuel } from "refuel-sdk";

const refuel = new Refuel("your_access_token");

await refuel.applications.feedback(
    "your_application_id",
    "your_labeled_item_id",
    // Correct label
    {
        vegetarian: false,
    }
);
```
