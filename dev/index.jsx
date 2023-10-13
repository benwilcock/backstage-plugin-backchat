"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const react_1 = __importDefault(require("react"));
const dev_utils_1 = require("@backstage/dev-utils");
const plugin_1 = require("../src/plugin");
(0, dev_utils_1.createDevApp)()
    .registerPlugin(plugin_1.backchatPlugin)
    .addPage({
    element: <plugin_1.BackchatPage />,
    title: 'Root Page',
    path: '/backchat',
})
    .render();
