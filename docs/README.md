**refuel-sdk**

***

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

To get started, you'll need a Refuel API key. You can find this in your [account settings](https://app.refuel.ai/settings) or contact your team administrator.

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
        vegetarian: "no",
    }
);
```

# 🔨 Developing the SDK

These steps are intended for developers of the refuel-sdk. If you are just installing refuel-sdk to use in your application then you can ignore this section.

## Local development

After making changes, use the following steps to test your changes locally:

1. From the refuel-sdk directory run `npm run build`
2. cd to the directory of your application (for example, `cd ~/Development/refuel-cloud-web`)
3. Run `npm install /local/path/to/refuel-sdk`

## Publishing new versions

After merging your changes to main, complete the following steps to publish a new version of the SDK:

1. Edit `package.json` and increase the version number (follow [semver](https://semver.org/) starting with v1.0.0, for versions prior to v1.0.0 always increase the minor version by one)
2. Run `npm run build`
3. Create a new commit called "build vX.X.X" using the version number you saved to `package.json` in step 1
4. Create a new PR with this commit and get that approved and merged to the main branch
5. Checkout the latest main branch locally
6. Ensure that the latest commit is "build vX.X.X"
7. Run `git tag vX.X.X`
8. Run `git push origin --tags`
9. Run `npm publish`

# Questions?

Reach out to us at support@refuel.ai with any questions!
