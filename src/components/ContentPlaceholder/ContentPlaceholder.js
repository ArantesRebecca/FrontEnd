import React, { Fragment } from 'react';
import { Content, Placeholder } from './styles';

const mockedPlaceholder = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const ContentPlaceholder = () => (
    <Content>
      {mockedPlaceholder.map(item => (
        <Placeholder />
      ))}
    </Content>
);

export default ContentPlaceholder;