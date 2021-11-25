# react-native-notchclear

to complete react-native notch issue on ios, android (It also supports expo.)

It is a library that can solve all the notch area problems that occur in android and ios.

android ios

![Screenshot_20211125-152021_Expo Go](https://user-images.githubusercontent.com/49832278/143392972-09099fdc-c6f2-4354-9318-7f4b3338f9d1.jpg), ![IMG-1147](https://user-images.githubusercontent.com/49832278/143392978-3ae9da98-4a5d-4e84-abff-490330a53f05.png)

## Installation

This library use `react-native-safe-area-context`, so you need to install it.

react-native-cli

```bash
npm install react-native-safe-area-context
or
yarn add react-native-safe-area-context
```

expo

```bash
expo install react-native-safe-area-context
```

And then execute the command to install react-native-notchclear.

react-native-cli

```bash
npm install react-native-notchclear --save
or
yarn add react-native-notchclear
```

expo

```bash
expo install react-native-notchclear
```

## How to use

Import react-native-notchclear.

```js
import { NotchView, NotchProvider } from "react-native-notchclear";
```

## first in your App.js add NotchProvider

First, add Notch Provider to your App.js file. After that, all additional operations such as navigation should be done within this system.

---

App.js

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return <NotchProvider>//Just add additional code here</NotchProvider>;
}
```

---

android, ios
![Screenshot_20211125-152201_Expo Go](https://user-images.githubusercontent.com/49832278/143393011-ea3c548d-0984-47d0-a7b6-0bde51aa17a4.jpg), ![IMG-1148](https://user-images.githubusercontent.com/49832278/143393029-06132d46-7268-4c0c-9b15-929c93750609.png)

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return (
    <NotchProvider>
      <NotchView>
        <Text>12312312312321312312</Text>
      </NotchView>
    </NotchProvider>
  );
}
```

The default color is all white. But there is still more.

---

android, ios

![Screenshot_20211125-152021_Expo Go](https://user-images.githubusercontent.com/49832278/143393066-2770d91f-d46f-4775-bd50-b81195bb75d7.jpg), ![IMG-1147](https://user-images.githubusercontent.com/49832278/143393078-ad213e06-ee5d-4bb6-92db-d27cb88c9173.png)

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return (
    <NotchProvider>
      <NotchView top="#ff0000" bottom="#00ff00" main="#ffffff">
        <Text>12312312312321312312</Text>
      </NotchView>
    </NotchProvider>
  );
}
```

top is the color of the top area
main is the color of the interruption
bottom indicates the color of the bottom part.

Unlike android, ios has to additionally specify the bottom color.

---

android, ios

![Screenshot_20211125-152235_Expo Go](https://user-images.githubusercontent.com/49832278/143393092-caefc98e-40b2-427b-baa9-230bd096ac2b.jpg), ![IMG-1149](https://user-images.githubusercontent.com/49832278/143393097-128b1c7f-16f9-45c5-847a-f0c5135f9c9b.png)

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return (
    <NotchProvider>
      <NotchView edges={["top"]} top="#ff0000" bottom="#00ff00" main="#ffffff">
        <Text>12312312312321312312</Text>
      </NotchView>
    </NotchProvider>
  );
}
```

If you want to exclude the lower part of ios from the notch area

You can do this by adding the edges={["top"]} option.

---

android, ios

![Screenshot_20211125-152250_Expo Go](https://user-images.githubusercontent.com/49832278/143393104-c86562e8-dfdd-4c3c-97ac-28f54f1ec8d5.jpg), ![IMG-1150](https://user-images.githubusercontent.com/49832278/143393111-208d79b0-2257-497a-b222-95e0a9568146.png)

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return (
    <NotchProvider>
      <NotchView
        edges={["bottom"]}
        top="#ff0000"
        bottom="#00ff00"
        main="#ffffff"
      >
        <Text>12312312312321312312</Text>
      </NotchView>
    </NotchProvider>
  );
}
```

Conversely, only top can be excluded from the notch area, and left, right, top, and bottom are all possible.

---

If you want to change the color of the statusbar, just add

```js
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { NotchView, NotchProvider } from "react-native-notchclear";
export default function App() {
  return (
    <NotchProvider>
      <NotchView edges={["top"]} top="#ff0000" bottom="#FFFFFF" main="#00ff00">
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          //barStyle={statusBarStyle}
          //showHideTransition={statusBarTransition}
          hidden={false}
        />
        <Text>1231231231232132</Text>
      </NotchView>
    </NotchProvider>
  );
}
```

## Properties

All props of react-native-notchclear.

| Prop   | required | Type   | Description                                                                                                                                                                     |
| ------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| top    | X        | string | Enter the color in hexadecimal. ex) #ff0000 The default is #ffffff.                                                                                                             |
| main   | X        | string | Enter the color in hexadecimal. ex) #ff0000 The default is #ffffff.                                                                                                             |
| bottom | X        | string | Enter the color in hexadecimal. ex) #ff0000 The default is #ffffff.                                                                                                             |
| edges  | X        | array  | edges={["top"]} ,edges={["bottom"]} ,edges={["left"]} ,edges={["right"]} All four directions are possible and it is possible to use them together. ex) edges={["top"],["left"]} |
