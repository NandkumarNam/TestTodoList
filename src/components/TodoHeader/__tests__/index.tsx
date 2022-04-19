/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {screen, render} from '@testing-library/react';
import TodoHeader from '../index';

test('On render', () => {
    render(<TodoHeader/>);
    screen.debug();
})