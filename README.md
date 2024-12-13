# Refuel JavaScript SDK

The Refuel JavaScript SDK is a lightweight and easy-to-use client library for interacting with the [Refuel API](https://cloud-api.refuel.ai/docs). It enables you to label data, manage application responses, and collect feedback seamlessly within your JavaScript or TypeScript applications.

_Note: We also have a [SDK for Python](https://docs.refuel.ai/python-sdk/)._

# 📦 Installation

To install the SDK, use npm or yarn:

```sh
npm install refuel-sdk
```

or

```sh
yarn add refuel-sdk
```

# 🧑‍💻 Usage

Make sure you have a valid API key from Refuel (shared with your team during onboarding).

Import the SDK into your application and start interacting with the Refuel API:

## Example: Label Data

```javascript
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

## Example: Update Label with Feedback

```javascript
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

# Questions?

Reach out to us at support@refuel.ai with any questions!
