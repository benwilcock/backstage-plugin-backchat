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
import React from 'react';
import { Header, Page, Content, HeaderLabel } from '@backstage/core-components';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

export const BackchatComponent = () => {
  // Get config API
  const configApi = useApi(configApiRef);

  // // Read url from config
  const ai_server_url =
    configApi.getOptionalString('ai_server.url') || 'http://localhost:3001';

  return (
    <Page themeId="tool">
      <Header
        title="Backchat AI"
        subtitle="Turbocharge Your Developer Productivity"
      >
        <HeaderLabel label="Owner" value="@benwilcock" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content noPadding stretch>
        <iframe
          width="100%"
          height="100%"
          style={{ border: '0px', borderRadius: '0px', boxShadow: '0px' }}
          src={ai_server_url}
          title="Backchat AI"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </Content>
    </Page>
  );
};
