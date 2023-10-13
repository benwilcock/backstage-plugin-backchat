# Backstage Plugin Backchat

I should apologize in advance - _this is such a rotten hack_ - but as a simple proof of concept for private AI in Backstage, it kinda works!

__I'd love some help to turn it into something more robust. Please feel free to contact me directly on [LinkedIn](https://www.linkedin.com/in/benwilcock/) if you'd like to contribute!__

## Screenshots

![The Backchat plugin after integration with a Backstage instance](/img/ui.png)

## Installing The Plugin

Follow the steps below to get the plugin installed into your Backstage instance. Here's what you will need:

* A Backstage instance (follow [this guide](https://backstage.io/docs/getting-started/))
* LocalAI and ChatbotUI (see [this](https://github.com/benwilcock/local-ai-playground) project for a `docker-compose.yaml`)
* Lots of patience.

## Step 1. Create A Backstage Instance

I wrote this plugin against Backstage v1.18.4.

If you don't have a backstage instance yet, create one using the instructions [here](https://backstage.io/docs/getting-started/).

```bash
# Only works if you installed all the pre-requisites!
npx @backstage/create-app@latest
```

The installer will start. When prompted, choose a name for you instance, like `my-instance`.

## Step 2. Add The AI Server Config To Backstage

Add a local configuration file.

```bash
cd my-instance
touch app-config.local.yaml
```

Add the following config to your new `app-config.local.yaml` file:

```yaml
ai_server:
  url: "http://localhost:3001" # Specifies where top find the AI GUI
```

## Step 3: Start The AI Server

Clone [this project](https://github.com/benwilcock/local-ai-playground) somewhere other than the backstage instance. 

This project uses `docker compose` to run a large language model server and a user interface where you can chat locally (and privately) to an AI at zero cost. The speed of this solution is very much hardware dependant. If you're running Backstage and an LLM locally at the same time, make sure you have plenty of RAM and be very patient.

From the project's root folder (in your terminal) run `docker compose up -d`. This will run [LocalAI](https://localai.io) and [ChatbotUI](https://github.com/mckaywrigley/chatbot-ui) in the background on your PC.

Once started, you can check the ChatbotUI GUI is available by pointing your browser at [http://localhost:3001](http://localhost:3001).

## Step 4: Add The Backchat Plugin To You Backstage Instance

Use yarn to add the plugin to your Backstage instance.

```bash
cd my-instance
yarn add --cwd packages/app @benbravo73/backstage-plugin-backchat
```

Navigate to your `packages/app/src/App.tsx` and include the following

```typescript
import {BackchatPage} from '@benbravo73/backstage-plugin-backchat'
...
<FlatRoutes>
        ....
        <Route path="/backchat" element={<BackchatPage />} />
</FlatRoutes>
```

At this stage, you can already make the plugin appear in your browser at [http://localhost:3000/backchat](http://localhost:3000/backchat). But read on to complete the installation.

## Step 5: Add The Backchat Feature To Your Backstage Navigation Menu

To integrate your plugin with the rest of the UI, you need to add an entry into the side navigation.

In the file `packages/app/src/components/Root/Root.tsx` add an import for the "Chat" icon and a sidebar item for "Backchat AI" like this:

```javascript
...
// With the other icon imports at the top of the file.
import ChatIcon from '@material-ui/icons/Chat';
...

...
// With the other SidebarItem's under the "Menu" SidebarGroup.
<SidebarItem icon={ChatIcon} to="backchat" text="Backchat AI" />
...
```

Upon reloading of Backstage you should now see a new sidebar item for "Backchat AI". Click this link to open the Backchat feature within Backstage.

## And Finally...

Enjoy the plugin and the **private** conversations you have with your AI!
